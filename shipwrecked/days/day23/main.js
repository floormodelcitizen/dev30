const ore = () => Math.floor(Math.random() * (90 - 65 + 1) + 65);
const fruit = () => Math.floor(Math.random() * (57 - 48 + 1) + 48);

const miningMax = 100;
const mining = Array.from(Array(miningMax)).map(ore);
console.log('mining :>> ', mining);

const harvestMax = 30;
const harvest = Array.from(Array(harvestMax)).map(fruit);
console.log('harvest :>> ', harvest);

const payload = [...mining, ...harvest];
console.log('payload :>> ', payload);

const refine = payload.map(x => String.fromCharCode(x));
console.log('refine :>> ', refine);

const materials = {
  carbon: ['C'],
  cellulose: [...'C6H10O5N'],
  chromium: [...'CR'],
  copper: [...'CU'],
  iron: [...'FE'],
  lead: [...'PB'],
  potassiumHydroxide: [...'KOH'],
  pyrolusite: [...'MNO2'],
  water: [...'H2O'],
  zinc: [...'ZN'],
};
console.log('materials :>> ', materials);

const uParticles = '01256BCEFHKNOPRUZ';
const particles = [...uParticles];
const molecules = refine.filter(arr => particles.includes(refine[arr]));
console.log('particles :>> ', particles);
console.log('molecules :>> ', molecules);
