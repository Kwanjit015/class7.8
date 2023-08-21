const dolphinAvg = (96 + 108 + 89) / 3;
const koalasAvg = (89 + 91 + 110) / 3;

if (dolphinAvg > koalasAvg && dolphinAvg > 100) {
  console.log(`dolphin them (${dolphinAvg}) WIN with a trophy`);
} else if (koalasAvg > dolphinAvg && koalasAvg > 100) {
  console.log(`Koalas team (${koalasAvg}) WIN with a trophy`);
} else if (dolphinAvg > koalasAvg && dolphinAvg <= 100) {
  console.log(`olphin team (${dolphinAvg}) WIN with a trophy`);
} else if (koalasAvg > dolphinAvg && koalasAvg <= 100) {
  console.log(`Koalas team (${koalasAvg}) WIN with a trophy`);
} else if (dolphinAvg === koalasAvg) {
  console.log("Koalas and Dolphin are WINNING");
}
