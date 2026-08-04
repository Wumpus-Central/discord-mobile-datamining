// _runtime/00399_mockCompositeAnimation.js
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
    let f66647 = arg1;
    let closure_1 = arg0;
    const obj = {};
    const merged = Object.assign(closure_1);
    f66647 = (arg0) => {
      value.setValue(f66647.toValue);
      if (arg0 != null) {
        arg0({ finished: true });
      }
    };
    obj.start = (arg0) => {
      let fn = arg0;
      let closure_0 = arg0;
      if (null != arg0) {
        fn = () => {
          const items = [...arguments];
          if (closure_0) {
            const _console = console;
            console.warn("Ignoring recursive animation callback when running mock animations");
          } else {
            closure_0 = true;
            try {
              const items1 = [];
              HermesBuiltin.arraySpread(items, 0);
              HermesBuiltin.apply(items1, undefined);
              closure_0 = false;
            } catch (tmp8) {
              closure_0 = false;
              throw tmp8;
            }
          }
        };
      }
      closure_0(fn);
    };
    return obj;
  },
  spring(animation, arg1) {
    let f66648 = arg1;
    let closure_1 = animation;
    const obj = {};
    const merged = Object.assign(closure_1);
    f66648 = (arg0) => {
      animation.setValue(f66648.toValue);
      if (arg0 != null) {
        arg0({ finished: true });
      }
    };
    obj.start = (arg0) => {
      let fn = arg0;
      let closure_0 = arg0;
      if (null != arg0) {
        fn = () => {
          const items = [...arguments];
          if (closure_0) {
            const _console = console;
            console.warn("Ignoring recursive animation callback when running mock animations");
          } else {
            closure_0 = true;
            try {
              const items1 = [];
              HermesBuiltin.arraySpread(items, 0);
              HermesBuiltin.apply(items1, undefined);
              closure_0 = false;
            } catch (tmp8) {
              closure_0 = false;
              throw tmp8;
            }
          }
        };
      }
      closure_0(fn);
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
    if (typeof mockCompositeAnimation !== "fileFinishedImporting") {
      HermesBuiltin.throwTypeError();
    }
    let f66646 = arg0;
    const obj = {};
    const merged = Object.assign(obj);
    f66646 = (arg0) => {
      const item = f66646.forEach((start) => start.start());
      if (arg0 != null) {
        arg0({ finished: true });
      }
    };
    obj.start = (arg0) => {
      let fn = arg0;
      let closure_0 = arg0;
      if (null != arg0) {
        fn = () => {
          const items = [...arguments];
          if (closure_0) {
            const _console = console;
            console.warn("Ignoring recursive animation callback when running mock animations");
          } else {
            closure_0 = true;
            try {
              const items1 = [];
              HermesBuiltin.arraySpread(items, 0);
              HermesBuiltin.apply(items1, undefined);
              closure_0 = false;
            } catch (tmp8) {
              closure_0 = false;
              throw tmp8;
            }
          }
        };
      }
      closure_0(fn);
    };
    return obj;
  },
  parallel(items, arg1) {
    if (typeof mockCompositeAnimation !== "fileFinishedImporting") {
      HermesBuiltin.throwTypeError();
    }
    let f66646 = items;
    const obj = {};
    const merged = Object.assign(obj);
    f66646 = (arg0) => {
      const item = f66646.forEach((start) => start.start());
      if (arg0 != null) {
        arg0({ finished: true });
      }
    };
    obj.start = (arg0) => {
      let fn = arg0;
      let closure_0 = arg0;
      if (null != arg0) {
        fn = () => {
          const items = [...arguments];
          if (closure_0) {
            const _console = console;
            console.warn("Ignoring recursive animation callback when running mock animations");
          } else {
            closure_0 = true;
            try {
              const items1 = [];
              HermesBuiltin.arraySpread(items, 0);
              HermesBuiltin.apply(items1, undefined);
              closure_0 = false;
            } catch (tmp8) {
              closure_0 = false;
              throw tmp8;
            }
          }
        };
      }
      closure_0(fn);
    };
    return obj;
  },
  stagger(arg0, arg1) {
    if (typeof mockCompositeAnimation !== "fileFinishedImporting") {
      HermesBuiltin.throwTypeError();
    }
    let f66646 = arg1;
    const obj = {};
    const merged = Object.assign(obj);
    f66646 = (arg0) => {
      const item = f66646.forEach((start) => start.start());
      if (arg0 != null) {
        arg0({ finished: true });
      }
    };
    obj.start = (arg0) => {
      let fn = arg0;
      let closure_0 = arg0;
      if (null != arg0) {
        fn = () => {
          const items = [...arguments];
          if (closure_0) {
            const _console = console;
            console.warn("Ignoring recursive animation callback when running mock animations");
          } else {
            closure_0 = true;
            try {
              const items1 = [];
              HermesBuiltin.arraySpread(items, 0);
              HermesBuiltin.apply(items1, undefined);
              closure_0 = false;
            } catch (tmp8) {
              closure_0 = false;
              throw tmp8;
            }
          }
        };
      }
      closure_0(fn);
    };
    return obj;
  },
  loop(arg0) {
    let obj = arg1;
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