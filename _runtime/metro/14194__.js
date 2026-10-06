// === Module 14194: ? ===

// Module 14194
let map;


export default function(arg0) {
  map = arg0;
  if (!map) {
    const _Map = Map;
    const self = this;
    const self2 = this;
    map = new Map();
  }
  return {
    all: map,
    on(arg0, arg1) {
      const value = map.get(arg0);
      if (value) {
        value.push(arg1);
      } else {
        const items = [arg1];
        const result = map.set(arg0, items);
      }
    },
    off(arg0, arg1) {
      const value = map.get(arg0);
      if (value) {
        const tmp = arg1;
        if (tmp) {
          value.splice(value.indexOf(arg1) >>> 0, 1);
        } else {
          const result = map.set(arg0, []);
        }
      }
    },
    emit(arg0, arg1) {
      let closure_0 = arg0;
      let closure_1 = arg1;
      const value = map.get(arg0);
      if (value) {
        const substr = value.slice();
        const mapped = substr.map((fn) => {
          fn(closure_1);
        });
      }
      const value2 = map.get("*");
      if (value2) {
        const substr1 = value2.slice();
        const mapped1 = substr1.map((fn) => {
          fn(closure_0, closure_1);
        });
      }
    }
  };
};