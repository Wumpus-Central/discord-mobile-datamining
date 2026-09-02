// _runtime/00716_mapValues.js

export default function mapValues(arg0, arg1) {
  let _require = arg1;
  const obj = {};
  _require = _require(obj[0])(arg1, 3);
  _require(obj[1])(arg0, (arg0, arg1, arg2) => {
    callback(obj[2])(obj, arg1, callback(arg0, arg1, arg2));
  });
  return obj;
}
