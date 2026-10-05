// === Module 664: mapToArray ===

// Module 664 (mapToArray)

export default function mapToArray(size) {
  let sum;
  let closure_0 = -1;
  const ArrayResult = Array(size.size);
  let closure_1 = ArrayResult;
  const item = size.forEach((item, index) => {
    closure_0 = closure_0 + 1;
    const items = [index, item];
    closure_1[closure_0] = items;
  });
  return ArrayResult;
};