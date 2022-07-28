// import React from "react";

// const LineChart = ({ coinHistory, currentPrice, coinName }) => {
//   const coinPrice = [];
//   const coinTimestamp = [];

//   for (let i = 0; i < coinHistory?.data?.history?.length; i++) {
//     coinPrice.push(coinHistory?.data?.history[i].price);
//     coinTimestamp.push(
//       new Date(coinHistory?.data?.history[i].timestamp).toLocaleDateString()
//     );
//   }

//   const data = {
//     labels: coinTimestamp,
//     datasets: [
//       {
//         label: "Price In USD",
//         data: coinPrice,
//         fill: false,
//         backgroundColor: "#0071bd",
//         borderColor: "#0071bd",
//       },
//     ],
//   };

//   const options = {
//     scales: {
//       yAxes: [
//         {
//           ticks: {
//             beginAtZero: true,
//           },
//         },
//       ],
//     },
//   };
//   return (
//     <>
//       <section className="py-3 ">
//         <div className="container">
//           <h3 className="white font-16 text-center text-uppercase mt-2 bold">
//             {coinName} Price Chart
//           </h3>
//           <div className="chart border" style={{ height: "400px" }}></div>
//         </div>
//       </section>
//       <Line data={data} options={options} />
//     </>
//   );
// };

// export default LineChart;
