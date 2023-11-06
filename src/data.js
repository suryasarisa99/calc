class Product {
  constructor(
    name,
    cost,
    dailyIncome,
    dailyRate,
    validyPeriod,
    purchaceLimit,
    totalRevenu,
    totalRate,
    startingBonus,
    invitationReward
  ) {
    this.name = name;
    this.cost = cost;
    this.dailyIncome = dailyIncome;
    this.totalRevenu = totalRevenu;
    this.days = validyPeriod;
    this.invitationReward = invitationReward;
    this.startingBonus = startingBonus;
    this.items = purchaceLimit;
    this.dailyRate = dailyRate;
    this.totalRate = totalRate;
  }
}

class Vip {
  constructor(vip, teamSize, bonus) {
    this.vip = vip;
    this.teamSize = teamSize;
    this.bonus = bonus;
  }
}

class WeeklyBonus {
  constructor(people, bonus) {
    (this.people = people), (this.bonus = bonus);
  }
}

let names = [
  "TOPBiHiKu7, N-type TOPCon double-sided components",
  "BiHiKu7, high power duplex dual-core PERC battery pack",
  "HiKu7, high power dual-core PERC battery pack",
  "BiHiKu6, high power double-sided half-cut PERC battery pack",
  "HiKu6, high power dual-core PERC battery pack",
  "HiKu, High Power dual-core battery module (Single polycrystalline PERC)",
];

let products2 = [
  new Product(names[0], 550, 22, 50, 1, 1100, 100, 130),
  new Product(names[1], 2500, 100, 49, 2, 4900, 150, 180),
  new Product(names[2], 6500, 300, 47, 2, 14100, 250, 280),
  new Product(names[3], 14000, 700, 46, 1, 32200, 420, 420),
  new Product(names[4], 28500, 1567.5, 46, 1, 72105, 500, 550),
  new Product(names[5], 39800, 2388, 44, 1, 105072, 650, 750),
];
// name daily days items total bonus inviteReward
let products = [
  new Product("CSI-A", 580, 26.1, 4.5, 48, 1, 1252.8, 216, 111, 151),
  new Product("CSI-5", 4300, 202.1, 4.7, 47, 5, 9498.7, 202.9, 181, 251),
  new Product("CSI-15", 8600, 431, 5.0, 45, 5, 19395, 222.5, 291, 351),
  new Product("CSI-25", 17800, 943.4, 5.3, 45, 3, 42048, 238.5, 401, 451),
  new Product("CSI-40", 32700, 1863.9, 5.7, 46, 1, 85739.4, 262.2, 521, 651),
  new Product("CSI-110", 45500, 2821, 6.2, 44, 1, 124124, 272.8, 631, 851),
];

const vipList = [
  new Vip(2, 10, 200),
  new Vip(3, 50, 400),
  new Vip(4, 100, 600),
  new Vip(5, 300, 1000),
  new Vip(6, 600, 2000),
  new Vip(7, 1000, 4000),
  new Vip(8, 2000, 10000),
  new Vip(9, 3000, 20000),
  new Vip(10, 5000, 40000),
];

const bonusList = [
  new WeeklyBonus(3, 111),
  new WeeklyBonus(5, 221),
  new WeeklyBonus(7, 331),
  new WeeklyBonus(10, 551),
  new WeeklyBonus(30, 2221),
  new WeeklyBonus(50, 5551),
];

export { bonusList, vipList, products };
