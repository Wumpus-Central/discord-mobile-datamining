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
  Value: require("_isNativeReflectConstruct"),
  ValueXY: require("_isNativeReflectConstruct"),
  Color: require("_isNativeReflectConstruct"),
  Interpolation: require("_isNativeReflectConstruct"),
  Node: require("_assertNativeAnimatedModule"),
  decay(arg0, arg1) {
    return obj;
  },
  timing(arg0, arg1) {
    let f68700 = arg1;
    closure_1 = arg0;
    obj = {};
    const merged = Object.assign(closure_1);
    f68700 = (arg0) => {
      value.setValue(f68700.toValue);
      if (arg0 != null) {
        arg0({ finished: true });
      }
    };
    obj.start = (arg0) => {
      let fn = arg0;
      c0 = arg0;
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
    let f68701 = arg1;
    closure_1 = animation;
    obj = {};
    const merged = Object.assign(closure_1);
    f68701 = (arg0) => {
      animation.setValue(f68701.toValue);
      if (arg0 != null) {
        arg0({ finished: true });
      }
    };
    obj.start = (arg0) => {
      let fn = arg0;
      c0 = arg0;
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
  add: require("_combineCallbacks").add,
  subtract: require("_combineCallbacks").subtract,
  divide: require("_combineCallbacks").divide,
  multiply: require("_combineCallbacks").multiply,
  modulo: require("_combineCallbacks").modulo,
  diffClamp: require("_combineCallbacks").diffClamp,
  delay(arg0) {
    return obj;
  },
  sequence(arg0) {
    if (typeof mockCompositeAnimation !== "function") {
      HermesBuiltin.throwTypeError();
    }
    let f68699 = arg0;
    obj = {};
    const merged = Object.assign(obj);
    f68699 = (arg0) => {
      const item = f68699.forEach((start) => start.start());
      if (arg0 != null) {
        arg0({ finished: true });
      }
    };
    obj.start = (arg0) => {
      let fn = arg0;
      c0 = arg0;
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
  parallel(items) {
    if (typeof mockCompositeAnimation !== "function") {
      HermesBuiltin.throwTypeError();
    }
    let f68699 = items;
    obj = {};
    const merged = Object.assign(obj);
    f68699 = (arg0) => {
      const item = f68699.forEach((start) => start.start());
      if (arg0 != null) {
        arg0({ finished: true });
      }
    };
    obj.start = (arg0) => {
      let fn = arg0;
      c0 = arg0;
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
  stagger(arg0, arg1) {
    if (typeof mockCompositeAnimation !== "function") {
      HermesBuiltin.throwTypeError();
    }
    let f68699 = arg1;
    obj = {};
    const merged = Object.assign(obj);
    f68699 = (arg0) => {
      const item = f68699.forEach((start) => start.start());
      if (arg0 != null) {
        arg0({ finished: true });
      }
    };
    obj.start = (arg0) => {
      let fn = arg0;
      c0 = arg0;
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
  loop(arg0) {
    obj = arg1;
    if (arg1 === undefined) {
      obj = {};
    }
    return obj;
  },
  event: require("_combineCallbacks").event,
  createAnimatedComponent: require("createAnimatedComponent"),
  attachNativeEvent: require("AnimatedEvent").attachNativeEventImpl,
  forkEvent: require("_combineCallbacks").forkEvent,
  unforkEvent: require("_combineCallbacks").unforkEvent,
  Event: require("AnimatedEvent").AnimatedEvent
};
arg5.default = obj;