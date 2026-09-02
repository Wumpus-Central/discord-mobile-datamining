// _runtime/00399_mockCompositeAnimation.js
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
    let f69811 = arg1;
    closure_1 = arg0;
    obj = {};
    const merged = Object.assign(closure_1);
    f69811 = (arg0) => {
      value.setValue(f69811.toValue);
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
    let f69812 = arg1;
    closure_1 = animation;
    obj = {};
    const merged = Object.assign(closure_1);
    f69812 = (arg0) => {
      animation.setValue(f69812.toValue);
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
    let f69810 = arg0;
    obj = {};
    const merged = Object.assign(obj);
    f69810 = (arg0) => {
      const item = f69810.forEach((start) => start.start());
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
    let f69810 = items;
    obj = {};
    const merged = Object.assign(obj);
    f69810 = (arg0) => {
      const item = f69810.forEach((start) => start.start());
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
    let f69810 = arg1;
    obj = {};
    const merged = Object.assign(obj);
    f69810 = (arg0) => {
      const item = f69810.forEach((start) => start.start());
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
  Event: require("AnimatedEvent").AnimatedEvent,
};
arg5.default = obj;
