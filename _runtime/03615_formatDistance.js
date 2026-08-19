// === Module 3615: formatDistance ===

// Module 3615 (formatDistance)

export default function formatDistance(arg0, arg1, arg2) {
  obj = arg2;
  if (!arg2) {
    obj = {};
  }
  return obj[arg0](arg1, obj);
};
export default exports.default;