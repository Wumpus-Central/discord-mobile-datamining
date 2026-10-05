// === Module 323: clamp ===

// Module 323 (clamp)

export default function clamp(diff, arg1, highestMeasuredCellIndex) {
  let tmp = diff;
  let tmp2 = arg1;
  if (arg1 >= diff) {
    if (tmp2 > highestMeasuredCellIndex) {
      tmp2 = highestMeasuredCellIndex;
    }
    tmp = tmp2;
  }
  return tmp;
};