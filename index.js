// code your solution here
function superbowlWin(record) {
    const topGame = record.find(game => game.result === "W");
    return topGame ? topGame.year : undefined;
  }
  
  // Example usage:
  const record = [
    { year: "2015", result: "W" },
    { year: "2014", result: "N/A" },
    { year: "2013", result: "L" },
    //...
  ];
  
  const topYear = superbowlWin(record);
  console.log(topYear); // Output: "2015"
  