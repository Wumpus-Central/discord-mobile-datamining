// _runtime/metro/14410__.js

export default (arg0) => {
  let map = arg0;
  if (!arg0) {
    const _Map = Map;
    map = new Map();
  }
  return {
    all: map,
    on(arg0, arg1) {
      value = map.get(arg0);
      if (value) {
        value.push(arg1);
      } else {
        const items = [arg1];
        const result = map.set(arg0, items);
      }
    },
    off(arg0, arg1) {
      value = map.get(arg0);
      if (value) {
        if (arg1) {
          value.splice(value.indexOf(arg1) >>> 0, 1);
        } else {
          const result = map.set(arg0, []);
        }
      }
    },
    emit(arg0, arg1) {
      closure_0 = arg0;
      closure_1 = arg1;
      value = map.get(arg0);
      if (value) {
        const substr = value.slice();
        const mapped = substr.map((fn) => {
          fn(closure_1);
        });
      }
      value = map.get("*");
      if (value) {
        const substr1 = value.slice();
        const mapped1 = substr1.map((fn) => {
          fn(closure_0, closure_1);
        });
      }
    },
  };
};
