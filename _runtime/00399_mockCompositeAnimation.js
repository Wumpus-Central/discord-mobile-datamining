// === Module 399: mockCompositeAnimation ===

// Module 399 (mockCompositeAnimation)
let c0 = false;
let obj = {
  start() {

  },
  stop() {

  },
  reset() {

  },
  _startNativeLoop() {

  },
  _isUsingNativeDriver() {
    return false;
  }
};
function mockCompositeAnimation(arg0) {

}
obj = {
  Value: fn2(356),
  ValueXY: fn2(373),
  Color: fn2(374),
  Interpolation: fn2(363),
  Node: fn2(367),
  decay(arg0, arg1) {
    return obj;
  },
  timing(arg0, arg1) {
    value = arg0;
    obj = {};
    const merged = Object.assign(value);
    const f70369 = (fn) => {
      value.setValue(f70369.toValue);
      if (fn != null) {
        fn({ finished: true });
      }
    };
    obj.start = (arg0) => {
      let fn = arg0;
      closure_0 = arg0;
      if (null != arg0) {
        fn = () => {
          const items = [...arguments];
          if (c0) {
            const _console = console;
            console.warn("Ignoring recursive animation callback when running mock animations");
          } else {
            c0 = true;
            try {
              const items1 = [];
              HermesBuiltin.arraySpread(items, 0);
              HermesBuiltin.apply(items1, undefined);
              c0 = false;
            } catch (tmp8) {
              c0 = false;
              throw tmp8;
            }
          }
        };
      }
      c0(fn);
    };
    return obj;
  },
  spring(animation, arg1) {
    obj = {};
    const merged = Object.assign(animation);
    const f70370 = (fn) => {
      animation.setValue(f70370.toValue);
      if (fn != null) {
        fn({ finished: true });
      }
    };
    obj.start = (arg0) => {
      let fn = arg0;
      closure_0 = arg0;
      if (null != arg0) {
        fn = () => {
          const items = [...arguments];
          if (c0) {
            const _console = console;
            console.warn("Ignoring recursive animation callback when running mock animations");
          } else {
            c0 = true;
            try {
              const items1 = [];
              HermesBuiltin.arraySpread(items, 0);
              HermesBuiltin.apply(items1, undefined);
              c0 = false;
            } catch (tmp8) {
              c0 = false;
              throw tmp8;
            }
          }
        };
      }
      c0(fn);
    };
    return obj;
  },
  add: fn2(354).add,
  subtract: fn2(354).subtract,
  divide: fn2(354).divide,
  multiply: fn2(354).multiply,
  modulo: fn2(354).modulo,
  diffClamp: fn2(354).diffClamp,
  delay(arg0) {
    return obj;
  },
  sequence(arg0) {
    if (typeof mockCompositeAnimation === "function") {
      obj = {};
      const merged = Object.assign(obj);
      const f70368 = (fn) => {
        const item = c0.forEach((start) => start.start());
        if (fn != null) {
          fn({ finished: true });
        }
      };
      obj.start = (arg0) => {
        let fn = arg0;
        closure_0 = arg0;
        if (null != arg0) {
          fn = () => {
            const items = [...arguments];
            if (c0) {
              const _console = console;
              console.warn("Ignoring recursive animation callback when running mock animations");
            } else {
              c0 = true;
              try {
                const items1 = [];
                HermesBuiltin.arraySpread(items, 0);
                HermesBuiltin.apply(items1, undefined);
                c0 = false;
              } catch (tmp8) {
                c0 = false;
                throw tmp8;
              }
            }
          };
        }
        c0(fn);
      };
      return obj;
    } else {
      throw new TypeError("Trying to call a non-function");
    }
  },
  parallel(items, arg1) {
    if (typeof mockCompositeAnimation === "function") {
      obj = {};
      const merged = Object.assign(obj);
      const f70368 = (fn) => {
        const item = c0.forEach((start) => start.start());
        if (fn != null) {
          fn({ finished: true });
        }
      };
      obj.start = (arg0) => {
        let fn = arg0;
        closure_0 = arg0;
        if (null != arg0) {
          fn = () => {
            const items = [...arguments];
            if (c0) {
              const _console = console;
              console.warn("Ignoring recursive animation callback when running mock animations");
            } else {
              c0 = true;
              try {
                const items1 = [];
                HermesBuiltin.arraySpread(items, 0);
                HermesBuiltin.apply(items1, undefined);
                c0 = false;
              } catch (tmp8) {
                c0 = false;
                throw tmp8;
              }
            }
          };
        }
        c0(fn);
      };
      return obj;
    } else {
      throw new TypeError("Trying to call a non-function");
    }
  },
  stagger(arg0, arg1) {
    if (typeof mockCompositeAnimation === "function") {
      obj = {};
      const merged = Object.assign(obj);
      c0 = (fn) => {
        const item = c0.forEach((start) => start.start());
        if (fn != null) {
          fn({ finished: true });
        }
      };
      obj.start = (arg0) => {
        let fn = arg0;
        closure_0 = arg0;
        if (null != arg0) {
          fn = () => {
            const items = [...arguments];
            if (c0) {
              const _console = console;
              console.warn("Ignoring recursive animation callback when running mock animations");
            } else {
              c0 = true;
              try {
                const items1 = [];
                HermesBuiltin.arraySpread(items, 0);
                HermesBuiltin.apply(items1, undefined);
                c0 = false;
              } catch (tmp8) {
                c0 = false;
                throw tmp8;
              }
            }
          };
        }
        c0(fn);
      };
      return obj;
    } else {
      throw new TypeError("Trying to call a non-function");
    }
  },
  loop(arg0) {
    obj = arg1;
    if (arg1 === undefined) {
      obj = {};
    }
    return obj;
  },
  event: fn2(354).event,
  createAnimatedComponent: fn2(387),
  attachNativeEvent: fn(384).attachNativeEventImpl,
  forkEvent: fn2(354).forkEvent,
  unforkEvent: fn2(354).unforkEvent,
  Event: fn(384).AnimatedEvent
};

export default obj;