// === Module 653: mapToArray ===

// Module 653 (mapToArray)

export default function mapToArray(size) {
  c0 = -1;
  const ArrayResult = Array(size.size);
  const item = size.forEach((arg0, arg1) => {
    const sum = c0 + 1;
    c0 = sum;
    const items = [arg1, arg0];
    closure_1[sum] = items;
  });
  return ArrayResult;
};