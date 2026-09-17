// _runtime/metro/14323__.js
const weakMap = new WeakMap();

export default function getInternalSlots(arg0, arg1) {
  let items = arg1;
  if (undefined === arg1) {
    items = [];
  }
  value = weakMap.get(arg0);
  if (!value) {
    const _Object = Object;
    const obj2 = Object.create(
      null,
      items.reduce((acc, item) => {
        acc[item] = { enumerable: false, writable: true, configurable: true };
        return acc;
      }, {}),
    );
    const result = weakMap.set(arg0, obj2);
    value = obj2;
  }
  return value;
}
