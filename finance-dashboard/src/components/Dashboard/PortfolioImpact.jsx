export default function PortfolioImpact({ impactData }) {
  const totalImpact = (impactData.drop * (impactData.portfolioWeight / 100)).toFixed(2);

  return (
    <div className="bg-white p-6 rounded-xl shadow-md border-l-4 border-red-500">
      <h3 className="text-lg font-semibold text-gray-800">Portfolio Impact Analysis</h3>
      <p className="mt-2 text-gray-600">
        Because <span className="font-bold">{impactData.stock}</span> makes up 
        <span className="font-bold"> {impactData.portfolioWeight}%</span> of your portfolio, 
        its <span className="text-red-500 font-bold">{impactData.drop}% drop</span> has 
        decreased your total portfolio value by <span className="text-red-600 font-bold">{totalImpact}%</span>.
      </p>
    </div>
  );
}