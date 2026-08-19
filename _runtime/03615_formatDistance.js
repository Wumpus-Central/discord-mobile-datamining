// _runtime/03615_formatDistance.js

export default function formatDistance(arg0, arg1, arg2) {
  obj = arg2;
  if (!arg2) {
    obj = {};
  }
  return obj[arg0](arg1, obj);
};
export default exports.default;