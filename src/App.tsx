import { useState, useEffect } from 'react'
import './App.css'

function App() {
  const [bill, setBill] = useState<number>(0);
  const [people, setPeople] = useState<number>(1);
  const [selectedTip, setSelectedTip] = useState<number>(0);
  const [customTip, setCustomTip] = useState<number>(0);
  const [useCustom, setUseCustom] = useState<boolean>(false);
  const [tipAmount, setTipAmount] = useState<number>(0);
  const [total, setTotal] = useState<number>(0);
  const [error, setError] = useState<string>('');

  const tipOptions = [5, 10, 15, 20, 25];

  const handleReset = () => {
    setBill(0);
    setPeople(1);
    setSelectedTip(0);
    setCustomTip(0);
    setUseCustom(false);
    setTipAmount(0);
    setTotal(0);
    setError('');
  };

  useEffect(() => {
    if (people === 0) {
      setError("Can't be zero");
      setTipAmount(0);
      setTotal(0);
      return;
    }
    setError('');

    const tipPercent = useCustom ? customTip : selectedTip;
    if (bill > 0 && tipPercent > 0 && people > 0) {
      const tip = (bill * (tipPercent / 100)) / people;
      const totalPer = (bill / people) + tip;
      setTipAmount(tip);
      setTotal(totalPer);
    } else {
      setTipAmount(0);
      setTotal(0);
    }
  }, [bill, people, selectedTip, customTip, useCustom]);

  return (
    <div className="min-h-screen bg-cyan-100 flex items-center justify-center p-4 text-gray-900">
      <div className="max-w-3xl w-full bg-white rounded-2xl shadow-lg p-8 md:flex md:space-x-8">
        {/* Input Section */}
        <div className="md:w-1/2 space-y-6">
          {/* Bill */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">Bill</label>
            <div className="relative">
              <span className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-500">$</span>
              <input
                type="number"
                value={bill || ''}
                onChange={(e) => setBill(parseFloat(e.target.value) || 0)}
                min="0"
                step="0.01"
                className="w-full pl-8 py-3 bg-cyan-50 border border-cyan-200 rounded-md focus:outline-none focus:ring-2 focus:ring-cyan-500 text-right text-lg font-bold text-cyan-900"
              />
            </div>
          </div>

          {/* Tip Percentage */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">Select Tip %</label>
            <div className="grid grid-cols-3 gap-3">
              {tipOptions.map((tip) => (
                <button
                  key={tip}
                  type="button"
                  onClick={() => {
                    setSelectedTip(tip);
                    setUseCustom(false);
                  }}
                  className={`py-3 rounded-md text-white font-bold text-lg ${
                    selectedTip === tip && !useCustom ? 'bg-cyan-600' : 'bg-cyan-900 hover:bg-cyan-700'
                  }`}
                >
                  {tip}%
                </button>
              ))}
              <input
                type="number"
                placeholder="Custom"
                value={customTip || ''}
                onChange={(e) => {
                  setCustomTip(parseFloat(e.target.value) || 0);
                  setUseCustom(true);
                }}
                min="0"
                className="w-full py-3 bg-cyan-50 border border-cyan-200 rounded-md focus:outline-none focus:ring-2 focus:ring-cyan-500 text-center text-lg font-bold text-cyan-900 placeholder-cyan-500"
              />
            </div>
          </div>

          {/* Number of People */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">Number of People</label>
            {error && <span className="text-red-500 text-sm float-right">{error}</span>}
            <div className="relative">
              <span className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-500">👥</span>
              <input
                type="number"
                value={people || ''}
                onChange={(e) => setPeople(parseInt(e.target.value) || 0)}
                min="1"
                className={`w-full pl-8 py-3 bg-cyan-50 border ${error ? 'border-red-500' : 'border-cyan-200'} rounded-md focus:outline-none focus:ring-2 focus:ring-cyan-500 text-right text-lg font-bold text-cyan-900`}
              />
            </div>
          </div>
        </div>

        {/* Display Section */}
        <div className="md:w-1/2 bg-cyan-900 rounded-2xl p-6 text-white mt-8 md:mt-0 flex flex-col justify-between">
          <div className="space-y-6">
            <div className="flex justify-between items-center">
              <div>
                <p className="font-bold">Tip Amount</p>
                <p className="text-sm text-cyan-200">/ person</p>
              </div>
              <p className="text-3xl font-bold text-cyan-400">${tipAmount.toFixed(2)}</p>
            </div>
            <div className="flex justify-between items-center">
              <div>
                <p className="font-bold">Total</p>
                <p className="text-sm text-cyan-200">/ person</p>
              </div>
              <p className="text-3xl font-bold text-cyan-400">${total.toFixed(2)}</p>
            </div>
          </div>
          <button
            type="button"
            onClick={handleReset}
            className="w-full py-3 bg-cyan-600 hover:bg-cyan-500 rounded-md font-bold mt-6"
          >
            RESET
          </button>
        </div>
      </div>
    </div>
  );
}

export default App
