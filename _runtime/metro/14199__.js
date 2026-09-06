// _runtime/metro/14199__.js
const weakMap = new WeakMap();

export default function getInternalSlots(arg0, arg1) {
  let items = arg1;
  if (undefined === arg1) {
    items = [];
  }
  let obj = weakMap;
  value = weakMap.get(arg0);
  if (!value) {
    const _Object = Object;
    obj = Object.create(
      null,
      items.reduce((acc, item) => {
        acc[item] = { enumerable: false, writable: true, configurable: true };
        return acc;
      }, {}),
    );
    const result = obj.set(arg0, obj);
    value = obj;
  }
  return value;
}
