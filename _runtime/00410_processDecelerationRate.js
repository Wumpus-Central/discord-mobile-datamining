// === Module 410: processDecelerationRate ===

// Module 410 (processDecelerationRate)

export default function processDecelerationRate(arg0) {
  let num = 0.985;
  if ("normal" !== arg0) {
    let num2 = 0.9;
    if ("fast" !== arg0) {
      num2 = arg0;
    }
    num = num2;
  }
  return num;
};