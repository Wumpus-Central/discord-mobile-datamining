// _runtime/metro/00399__.js
import _modDef354 from "00354__.js";
import flushValueDefault from "../00356_flushValue.js";
import _modDef363 from "00363__.js";
import _modDef367 from "00367__.js";
import _modDef373 from "00373__.js";
import _modDef374 from "00374__.js";
import attachNativeEventImpl from "../00384_attachNativeEventImpl.js";
import createAnimatedComponentDefault from "../00387_createAnimatedComponent.js";

function decay(arg0, arg1) {
  return obj;
}
function timing(arg0, arg1) {
  let closure_0 = arg1;
  let closure_1 = arg0;
  obj = {
    start: (arg0) => {
      let fn = arg0;
      let closure_0 = arg0;
      if (null != arg0) {
        fn = () => {
          const items = [...arguments];
          const tmp2 = c0;
          if (tmp2) {
            const _console = console;
            console.warn("Ignoring recursive animation callback when running mock animations");
          } else {
            c0 = true;
            try {
              const items1 = [];
              HermesBuiltin.arraySpread(items1, items, 0);
              HermesBuiltin.apply(closure_0, items1, undefined);
              c0 = false;
            } catch (tmp10) {
              c0 = false;
              throw tmp10;
            }
          }
        };
      }
      f81279(fn);
    },
  };
  const merged = Object.assign(obj);
  const f81280 = (fn) => {
    value.setValue(toValue.toValue);
    if (fn != null) {
      fn({ finished: true });
    }
  };
  return obj;
}
function spring(animation, arg1) {
  let closure_0 = arg1;
  let closure_1 = animation;
  obj = {
    start: (arg0) => {
      let fn = arg0;
      let closure_0 = arg0;
      if (null != arg0) {
        fn = () => {
          const items = [...arguments];
          const tmp2 = c0;
          if (tmp2) {
            const _console = console;
            console.warn("Ignoring recursive animation callback when running mock animations");
          } else {
            c0 = true;
            try {
              const items1 = [];
              HermesBuiltin.arraySpread(items1, items, 0);
              HermesBuiltin.apply(closure_0, items1, undefined);
              c0 = false;
            } catch (tmp10) {
              c0 = false;
              throw tmp10;
            }
          }
        };
      }
      f81279(fn);
    },
  };
  const merged = Object.assign(obj);
  const f81281 = (fn) => {
    value.setValue(toValue.toValue);
    if (fn != null) {
      fn({ finished: true });
    }
  };
  return obj;
}
function delay(arg0) {
  return obj;
}
function sequence(arg0) {
  if (typeof mockCompositeAnimation === "function") {
    let closure_0 = arg0;
    obj = {
      start: (arg0) => {
        let fn = arg0;
        let closure_0 = arg0;
        if (null != arg0) {
          fn = () => {
            const items = [...arguments];
            const tmp2 = c0;
            if (tmp2) {
              const _console = console;
              console.warn("Ignoring recursive animation callback when running mock animations");
            } else {
              c0 = true;
              try {
                const items1 = [];
                HermesBuiltin.arraySpread(items1, items, 0);
                HermesBuiltin.apply(closure_0, items1, undefined);
                c0 = false;
              } catch (tmp10) {
                c0 = false;
                throw tmp10;
              }
            }
          };
        }
        f81279(fn);
      },
    };
    const merged = Object.assign(obj);
    const f81279 = (fn) => {
      const item = closure_0.forEach((start) => start.start());
      if (fn != null) {
        fn({ finished: true });
      }
    };
    return obj;
  } else {
    throw new TypeError("Trying to call a non-function");
  }
}
function parallel(items, arg1) {
  if (typeof mockCompositeAnimation === "function") {
    let closure_0 = items;
    obj = {
      start: (arg0) => {
        let fn = arg0;
        let closure_0 = arg0;
        if (null != arg0) {
          fn = () => {
            const items = [...arguments];
            const tmp2 = c0;
            if (tmp2) {
              const _console = console;
              console.warn("Ignoring recursive animation callback when running mock animations");
            } else {
              c0 = true;
              try {
                const items1 = [];
                HermesBuiltin.arraySpread(items1, items, 0);
                HermesBuiltin.apply(closure_0, items1, undefined);
                c0 = false;
              } catch (tmp10) {
                c0 = false;
                throw tmp10;
              }
            }
          };
        }
        f81279(fn);
      },
    };
    const merged = Object.assign(obj);
    const f81279 = (fn) => {
      const item = closure_0.forEach((start) => start.start());
      if (fn != null) {
        fn({ finished: true });
      }
    };
    return obj;
  } else {
    throw new TypeError("Trying to call a non-function");
  }
}
function stagger(arg0, arg1) {
  if (typeof mockCompositeAnimation === "function") {
    let closure_0 = arg1;
    obj = {
      start: (arg0) => {
        let fn = arg0;
        let closure_0 = arg0;
        if (null != arg0) {
          fn = () => {
            const items = [...arguments];
            const tmp2 = c0;
            if (tmp2) {
              const _console = console;
              console.warn("Ignoring recursive animation callback when running mock animations");
            } else {
              c0 = true;
              try {
                const items1 = [];
                HermesBuiltin.arraySpread(items1, items, 0);
                HermesBuiltin.apply(closure_0, items1, undefined);
                c0 = false;
              } catch (tmp10) {
                c0 = false;
                throw tmp10;
              }
            }
          };
        }
        f81279(fn);
      },
    };
    let tmp2 = obj;
    const merged = Object.assign(obj);
    const f81279 = (fn) => {
      const item = closure_0.forEach((start) => start.start());
      if (fn != null) {
        fn({ finished: true });
      }
    };
    return obj;
  } else {
    throw new TypeError("Trying to call a non-function");
  }
}
function loop(arg0) {
  obj = arg1;
  if (arg1 === undefined) {
    obj = {};
  }
  return obj;
}
let c0 = false;
let obj = {
  start() {},
  stop() {},
  reset() {},
  _startNativeLoop() {},
  _isUsingNativeDriver() {
    return false;
  },
};
function mockCompositeAnimation(arg0) {}
({
  Value: flushValueDefault,
  ValueXY: _modDef373,
  Color: _modDef374,
  Interpolation: _modDef363,
  Node: _modDef367,
  decay,
  timing,
  spring,
  add: _modDef354.add,
  subtract: _modDef354.subtract,
  divide: _modDef354.divide,
  multiply: _modDef354.multiply,
  modulo: _modDef354.modulo,
  diffClamp: _modDef354.diffClamp,
  delay,
  sequence,
  parallel,
  stagger,
  loop,
  event: _modDef354.event,
  createAnimatedComponent: createAnimatedComponentDefault,
  attachNativeEvent: attachNativeEventImpl.attachNativeEventImpl,
  forkEvent: _modDef354.forkEvent,
  unforkEvent: _modDef354.unforkEvent,
  Event: attachNativeEventImpl.AnimatedEvent,
});

export default {
  Value: flushValueDefault,
  ValueXY: _modDef373,
  Color: _modDef374,
  Interpolation: _modDef363,
  Node: _modDef367,
  decay,
  timing,
  spring,
  add: _modDef354.add,
  subtract: _modDef354.subtract,
  divide: _modDef354.divide,
  multiply: _modDef354.multiply,
  modulo: _modDef354.modulo,
  diffClamp: _modDef354.diffClamp,
  delay,
  sequence,
  parallel,
  stagger,
  loop,
  event: _modDef354.event,
  createAnimatedComponent: createAnimatedComponentDefault,
  attachNativeEvent: attachNativeEventImpl.attachNativeEventImpl,
  forkEvent: _modDef354.forkEvent,
  unforkEvent: _modDef354.unforkEvent,
  Event: attachNativeEventImpl.AnimatedEvent,
};
