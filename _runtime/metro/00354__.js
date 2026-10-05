// _runtime/metro/00354__.js
import _modDef355 from "00355__.js";
import flushValueDefault from "../00356_flushValue.js";
import _modDef363 from "00363__.js";
import _modDef367 from "00367__.js";
import _modDef368 from "00368__.js";
import _modDef369 from "00369__.js";
import _modDef370 from "00370__.js";
import _modDef371 from "00371__.js";
import _modDef372 from "00372__.js";
import _modDef373 from "00373__.js";
import _modDef374 from "00374__.js";
import attachNativeEventImpl from "../00384_attachNativeEventImpl.js";
import _modDef386 from "00386__.js";
import createAnimatedComponentDefault from "../00387_createAnimatedComponent.js";

let navigation;

function _startNativeLoop() {
  const error = new Error("Loops run using the native driver cannot contain Animated.sequence animations");
  throw error;
}
function _isUsingNativeDriver() {
  return false;
}
const _startNativeLoop2 = function _startNativeLoop() {
  const error = new Error("Loops run using the native driver cannot contain Animated.parallel animations");
  throw error;
};
const _isUsingNativeDriver2 = function _isUsingNativeDriver() {
  return false;
};
function _combineCallbacks(arg0, arg1) {}
function maybeVectorAnim(g, obj, timingImpl) {
  let a;
  let b;
  let r;
  let x;
  let y;
  if (g instanceof _modDef373) {
    const obj2 = {};
    const merged = Object.assign(obj);
    const obj3 = {};
    const merged1 = Object.assign(obj);
    for (const key10066 in obj) {
      ({ x, y } = obj[key10066]);
      let tmp29 = undefined !== x && undefined !== y;
      if (!tmp29) {
        continue;
      } else {
        obj2[key10066] = x;
        obj3[key10066] = y;
        continue;
      }
      continue;
    }
    const items = [timingImpl(g.x, obj2)];
    timingImpl(g.x, obj2);
    items[1] = timingImpl(g.y, obj3);
    if (typeof parallelImpl === "function") {
      let c1 = 0;
      let closure_2 = {};
      let closure_3 = false !== { stopTogether: false }.stopTogether;
      return {
        start(fn, arg1) {
          let length;
          let c1 = arg1;
          const arr = fn;
          if (c1 !== fn.length) {
            const item = arr.forEach((start, index) => {
              if (start) {
                start.start(function cb(finished) {
                  closure_2[index] = true;
                  sum = sum + 1;
                  if (sum === index.length) {
                    sum = 0;
                    if (index) {
                      tmp5(finished);
                    }
                  } else {
                    const tmp2 = !finished.finished && c3;
                    if (tmp2) {
                      obj.stop();
                    }
                  }
                }, c1);
              } else {
                obj = { finished: true };
                closure_1_2[index] = true;
                let tmp2 = c1;
                sum = c1 + 1;
                c1 = sum;
                if (sum === index.length) {
                  c1 = 0;
                  if (index) {
                    tmp8(obj);
                  }
                } else {
                  const tmp5 = !obj.finished && closure_1_3;
                  if (tmp5) {
                    closure_1_4.stop();
                  }
                }
              }
            });
          } else if (fn) {
            fn({ finished: true });
          }
        },
        stop() {
          const item = closure_0.forEach((stop, index) => {
            if (!closure_1_2[index]) {
              stop.stop();
            }
            closure_1_2[index] = true;
          });
        },
        reset() {
          const item = closure_0.forEach((reset, index) => {
            reset.reset();
            closure_1_2[index] = false;
            c1 = 0;
          });
        },
        _startNativeLoop: _startNativeLoop2,
        _isUsingNativeDriver: _isUsingNativeDriver2,
      };
    } else {
      throw new TypeError("Trying to call a non-function");
    }
  } else if (g instanceof _modDef374) {
    obj = {};
    const merged2 = Object.assign(obj);
    const obj5 = {};
    const merged3 = Object.assign(obj);
    const obj6 = {};
    const merged4 = Object.assign(obj);
    const obj7 = {};
    const merged5 = Object.assign(obj);
    for (const key10031 in obj) {
      ({ r, g, b, a } = obj[key10031]);
      let tmp17 = undefined !== r && undefined !== g && undefined !== b && undefined !== a;
      if (!tmp17) {
        continue;
      } else {
        obj[key10031] = r;
        obj5[key10031] = g;
        obj6[key10031] = b;
        obj7[key10031] = a;
        continue;
      }
      continue;
    }
    const tmp18 = timingImpl(g.r, obj);
    const tmp19 = timingImpl(g.g, obj5);
    const items1 = [tmp18, tmp19, timingImpl(g.b, obj6)];
    timingImpl(g.b, obj6);
    items1[3] = timingImpl(g.a, obj7);
    if (typeof parallelImpl === "function") {
      c1 = 0;
      closure_2 = {};
      closure_3 = false !== { stopTogether: false }.stopTogether;
      return {
        start(fn, arg1) {
          let length;
          let c1 = arg1;
          const arr = fn;
          if (c1 !== fn.length) {
            const item = arr.forEach((start, index) => {
              if (start) {
                start.start(function cb(finished) {
                  closure_2[index] = true;
                  sum = sum + 1;
                  if (sum === index.length) {
                    sum = 0;
                    if (index) {
                      tmp5(finished);
                    }
                  } else {
                    const tmp2 = !finished.finished && c3;
                    if (tmp2) {
                      obj.stop();
                    }
                  }
                }, c1);
              } else {
                obj = { finished: true };
                closure_1_2[index] = true;
                let tmp2 = c1;
                sum = c1 + 1;
                c1 = sum;
                if (sum === index.length) {
                  c1 = 0;
                  if (index) {
                    tmp8(obj);
                  }
                } else {
                  const tmp5 = !obj.finished && closure_1_3;
                  if (tmp5) {
                    closure_1_4.stop();
                  }
                }
              }
            });
          } else if (fn) {
            fn({ finished: true });
          }
        },
        stop() {
          const item = closure_0.forEach((stop, index) => {
            if (!closure_1_2[index]) {
              stop.stop();
            }
            closure_1_2[index] = true;
          });
        },
        reset() {
          const item = closure_0.forEach((reset, index) => {
            reset.reset();
            closure_1_2[index] = false;
            c1 = 0;
          });
        },
        _startNativeLoop: _startNativeLoop2,
        _isUsingNativeDriver: _isUsingNativeDriver2,
      };
    } else {
      throw new TypeError("Trying to call a non-function");
    }
  } else {
    return null;
  }
}
function springImpl(g, arg1) {
  let closure_0 = g;
  let closure_1 = arg1;
  function start(stopTracking, onComplete, arg2) {
    if (typeof _combineCallbacks === "function") {
      let fn = arg2;
      closure_0 = arg2;
      closure_1 = onComplete;
      if (arg2) {
        if (onComplete.onComplete) {
          fn = () => {
            const items = [...arguments];
            if (onComplete.onComplete) {
              onComplete = tmp2.onComplete;
              const items1 = [];
              HermesBuiltin.arraySpread(items1, items, 0);
              HermesBuiltin.apply(onComplete, items1, onComplete);
            }
            if (closure_0) {
              const items2 = [];
              HermesBuiltin.arraySpread(items2, items, 0);
              HermesBuiltin.apply(closure_0, items2, undefined);
            }
          };
        }
        stopTracking.stopTracking();
        if (onComplete.toValue instanceof closure_1(start[8])) {
          const track = stopTracking.track;
          const self3 = this;
          const self4 = this;
          const tmp4Result = closure_1(start[9]);
          const tmp4Result1 = new tmp4Result(stopTracking, onComplete.toValue, closure_1(start[10]), onComplete, fn);
          track(tmp4Result1);
        } else {
          const animate = stopTracking.animate;
          const self = this;
          const self2 = this;
          const tmp7 = new closure_1(start[10])(onComplete);
          animate(tmp7, fn);
        }
      }
      if (!fn) {
        fn = onComplete.onComplete;
      }
    } else {
      throw new TypeError("Trying to call a non-function");
    }
  }
  let tmp = maybeVectorAnim(g, arg1, springImpl);
  if (!tmp) {
    let obj = {
      start(arg0) {
        start(closure_0, closure_1, arg0);
      },
      stop() {
        closure_0.stopAnimation();
      },
      reset() {
        closure_0.resetAnimation();
      },
      _startNativeLoop(iterations) {
        const obj = { iterations };
        const merged = Object.assign(closure_1);
        start(closure_0, obj);
      },
      _isUsingNativeDriver() {
        return closure_1.useNativeDriver || false;
      },
    };
    tmp = obj;
  }
  return tmp;
}
function timingImpl(g, arg1) {
  let closure_0 = g;
  let closure_1 = arg1;
  function start(stopTracking, onComplete, arg2) {
    if (typeof closure_1_3 === "function") {
      let fn = arg2;
      closure_0 = arg2;
      let closure_1 = onComplete;
      if (arg2) {
        if (onComplete.onComplete) {
          fn = () => {
            const items = [...arguments];
            if (onComplete.onComplete) {
              onComplete = tmp2.onComplete;
              const items1 = [];
              HermesBuiltin.arraySpread(items1, items, 0);
              HermesBuiltin.apply(onComplete, items1, onComplete);
            }
            if (closure_0) {
              const items2 = [];
              HermesBuiltin.arraySpread(items2, items, 0);
              HermesBuiltin.apply(closure_0, items2, undefined);
            }
          };
        }
        stopTracking.stopTracking();
        if (onComplete.toValue instanceof obj(start[8])) {
          const track = stopTracking.track;
          const self3 = this;
          const self4 = this;
          const tmp4Result = obj(start[9]);
          const tmp4Result1 = new tmp4Result(stopTracking, onComplete.toValue, obj(start[11]), onComplete, fn);
          track(tmp4Result1);
        } else {
          const animate = stopTracking.animate;
          const self = this;
          const self2 = this;
          const tmp7 = new obj(start[11])(onComplete);
          animate(tmp7, fn);
        }
      }
      if (!fn) {
        fn = onComplete.onComplete;
      }
    } else {
      throw new TypeError("Trying to call a non-function");
    }
  }
  let tmp = maybeVectorAnim(g, arg1, timingImpl);
  if (!tmp) {
    tmp = {
      start(arg0, isLooping) {
        obj = { isLooping };
        const merged = Object.assign(obj);
        start(closure_0, obj, arg0);
      },
      stop() {
        closure_0.stopAnimation();
      },
      reset() {
        closure_0.resetAnimation();
      },
      _startNativeLoop(iterations) {
        obj = { iterations };
        const merged = Object.assign(obj);
        start(closure_0, obj);
      },
      _isUsingNativeDriver() {
        return obj.useNativeDriver || false;
      },
    };
    const obj = {
      start(arg0, isLooping) {
        obj = { isLooping };
        const merged = Object.assign(obj);
        start(closure_0, obj, arg0);
      },
      stop() {
        closure_0.stopAnimation();
      },
      reset() {
        closure_0.resetAnimation();
      },
      _startNativeLoop(iterations) {
        obj = { iterations };
        const merged = Object.assign(obj);
        start(closure_0, obj);
      },
      _isUsingNativeDriver() {
        return obj.useNativeDriver || false;
      },
    };
  }
  return tmp;
}
function decayImpl(g, arg1) {
  let closure_0 = g;
  let useNativeDriver = arg1;
  let tmp = maybeVectorAnim(g, arg1, decayImpl);
  if (!tmp) {
    let obj = {
      start(arg0) {
        if (typeof _combineCallbacks === "function") {
          let fn = arg0;
          closure_0 = arg0;
          useNativeDriver = tmp;
          if (arg0) {
            if (useNativeDriver.onComplete) {
              fn = () => {
                const items = [...arguments];
                if (onComplete.onComplete) {
                  onComplete = tmp2.onComplete;
                  const items1 = [];
                  HermesBuiltin.arraySpread(items1, items, 0);
                  HermesBuiltin.apply(onComplete, items1, onComplete);
                }
                if (closure_0) {
                  const items2 = [];
                  HermesBuiltin.arraySpread(items2, items, 0);
                  HermesBuiltin.apply(closure_0, items2, undefined);
                }
              };
            }
            closure_0.stopTracking();
            const animate = obj.animate;
            const self = this;
            const self2 = this;
            const tmp6 = new _modDef386(tmp);
            animate(tmp6, fn);
          }
          if (!fn) {
            fn = tmp.onComplete;
          }
        } else {
          throw new TypeError("Trying to call a non-function");
        }
      },
      stop() {
        closure_0.stopAnimation();
      },
      reset() {
        closure_0.resetAnimation();
      },
      _startNativeLoop(iterations) {
        const obj = { iterations };
        const merged = Object.assign(useNativeDriver);
        if (typeof _combineCallbacks === "function") {
          const onComplete = obj.onComplete;
          closure_0.stopTracking();
          const animate = closure_0.animate;
          const self = this;
          const self2 = this;
          const tmp6 = new _modDef386(obj);
          animate(tmp6, onComplete);
        } else {
          throw new TypeError("Trying to call a non-function");
        }
      },
      _isUsingNativeDriver() {
        return useNativeDriver.useNativeDriver || false;
      },
    };
    tmp = obj;
  }
  return tmp;
}
function sequenceImpl(arg0) {
  let closure_0 = arg0;
  let c1 = 0;
  return {
    start(fn, arg1) {
      items = fn;
      let closure_1 = arg1;
      function onComplete(finished) {
        if (finished.finished) {
          const sum = c1 + 1;
          c1 = sum;
          if (sum === items.length) {
            c1 = 0;
            if (fn) {
              tmp10(finished);
            }
          } else {
            const obj = tmp5[c1];
            obj.start(onComplete, closure_1);
          }
        } else if (fn) {
          tmp(finished);
        }
      }
      if (0 === items.length) {
        if (fn) {
          fn({ finished: true });
        }
      } else {
        let obj = tmp[closure_1];
        obj.start(onComplete, arg1);
      }
    },
    stop() {
      if (c1 < items.length) {
        const obj = tmp[c1];
        obj.stop();
      }
    },
    reset() {
      const item = items.forEach((reset, index) => {
        if (index <= closure_1_1) {
          reset.reset();
        }
      });
      c1 = 0;
    },
    _startNativeLoop,
    _isUsingNativeDriver,
  };
}
function parallelImpl(arg0, stopTogether) {
  let obj;
  let closure_0 = arg0;
  let c1 = 0;
  let closure_2 = {};
  let closure_3 = !(stopTogether && false === stopTogether.stopTogether);
  return {
    start(fn, arg1) {
      let length;
      let c1 = arg1;
      const arr = fn;
      if (c1 !== fn.length) {
        const item = arr.forEach((start, index) => {
          if (start) {
            start.start(function cb(finished) {
              closure_2[index] = true;
              sum = sum + 1;
              if (sum === index.length) {
                sum = 0;
                if (index) {
                  tmp5(finished);
                }
              } else {
                const tmp2 = !finished.finished && c3;
                if (tmp2) {
                  obj.stop();
                }
              }
            }, c1);
          } else {
            obj = { finished: true };
            closure_1_2[index] = true;
            let tmp2 = c1;
            sum = c1 + 1;
            c1 = sum;
            if (sum === index.length) {
              c1 = 0;
              if (index) {
                tmp8(obj);
              }
            } else {
              const tmp5 = !obj.finished && closure_1_3;
              if (tmp5) {
                closure_1_4.stop();
              }
            }
          }
        });
      } else if (fn) {
        fn({ finished: true });
      }
    },
    stop() {
      const item = closure_0.forEach((stop, index) => {
        if (!closure_1_2[index]) {
          stop.stop();
        }
        closure_1_2[index] = true;
      });
    },
    reset() {
      const item = closure_0.forEach((reset, index) => {
        reset.reset();
        closure_1_2[index] = false;
        c1 = 0;
      });
    },
    _startNativeLoop: _startNativeLoop2,
    _isUsingNativeDriver: _isUsingNativeDriver2,
  };
}
function delayImpl(delay) {
  let obj;
  let start;
  const tmp2 = new obj(start[13])(0);
  obj = { toValue: 0, delay, duration: 0, useNativeDriver: false };
  if (typeof timingImpl === "function") {
    let closure_0 = tmp2;
    start = function start(stopTracking, onComplete, arg2) {
      if (typeof closure_1_3 === "function") {
        let fn = arg2;
        closure_0 = arg2;
        let closure_1 = onComplete;
        if (arg2) {
          if (onComplete.onComplete) {
            fn = () => {
              const items = [...arguments];
              if (onComplete.onComplete) {
                onComplete = tmp2.onComplete;
                const items1 = [];
                HermesBuiltin.arraySpread(items1, items, 0);
                HermesBuiltin.apply(onComplete, items1, onComplete);
              }
              if (closure_0) {
                const items2 = [];
                HermesBuiltin.arraySpread(items2, items, 0);
                HermesBuiltin.apply(closure_0, items2, undefined);
              }
            };
          }
          stopTracking.stopTracking();
          if (onComplete.toValue instanceof obj(start[8])) {
            const track = stopTracking.track;
            const self3 = this;
            const self4 = this;
            const tmp4Result = obj(start[9]);
            const tmp4Result1 = new tmp4Result(stopTracking, onComplete.toValue, obj(start[11]), onComplete, fn);
            track(tmp4Result1);
          } else {
            const animate = stopTracking.animate;
            const self = this;
            const self2 = this;
            const tmp7 = new obj(start[11])(onComplete);
            animate(tmp7, fn);
          }
        }
        if (!fn) {
          fn = onComplete.onComplete;
        }
      } else {
        throw new TypeError("Trying to call a non-function");
      }
    };
    let tmp5 = maybeVectorAnim(tmp2, obj, timingImpl);
    if (!tmp5) {
      tmp5 = {
        start(arg0, isLooping) {
          obj = { isLooping };
          const merged = Object.assign(obj);
          start(closure_0, obj, arg0);
        },
        stop() {
          closure_0.stopAnimation();
        },
        reset() {
          closure_0.resetAnimation();
        },
        _startNativeLoop(iterations) {
          obj = { iterations };
          const merged = Object.assign(obj);
          start(closure_0, obj);
        },
        _isUsingNativeDriver() {
          return obj.useNativeDriver || false;
        },
      };
      const obj2 = {
        start(arg0, isLooping) {
          obj = { isLooping };
          const merged = Object.assign(obj);
          start(closure_0, obj, arg0);
        },
        stop() {
          closure_0.stopAnimation();
        },
        reset() {
          closure_0.resetAnimation();
        },
        _startNativeLoop(iterations) {
          obj = { iterations };
          const merged = Object.assign(obj);
          start(closure_0, obj);
        },
        _isUsingNativeDriver() {
          return obj.useNativeDriver || false;
        },
      };
    }
    return tmp5;
  } else {
    throw new TypeError("Trying to call a non-function");
  }
}
let obj = {
  Value: flushValueDefault,
  ValueXY: _modDef373,
  Color: _modDef374,
  Interpolation: _modDef363,
  Node: _modDef367,
  decay: decayImpl,
  timing: timingImpl,
  spring: springImpl,
  add(arg0, arg1) {
    const tmp = new _modDef355(arg0, arg1);
    return tmp;
  },
  subtract(arg0, arg1) {
    const tmp = new _modDef368(arg0, arg1);
    return tmp;
  },
  divide(absResult, arg1) {
    const tmp = new _modDef369(absResult, arg1);
    return tmp;
  },
  multiply(arg0, arg1) {
    const tmp = new _modDef370(arg0, arg1);
    return tmp;
  },
  modulo(arg0, arg1) {
    const tmp = new _modDef371(arg0, arg1);
    return tmp;
  },
  diffClamp(interpolateResult, arg1, arg2) {
    const tmp = new _modDef372(interpolateResult, arg1, arg2);
    return tmp;
  },
  delay: delayImpl,
  sequence: sequenceImpl,
  parallel: parallelImpl,
  stagger(arg0, arr) {
    let closure_0 = arg0;
    if (typeof parallelImpl === "function") {
      closure_0 = arr.map(function (item, index) {
        if (typeof delayImpl === "function") {
          let self = this;
          let self2 = this;
          const tmp6 = new flushValueDefault(0);
          let obj = { toValue: 0, delay: tmp2, duration: 0, useNativeDriver: false };
          if (typeof timingImpl === "function") {
            let tmp7 = tmp6;
            closure_0 = tmp6;
            function start(stopTracking, onComplete, arg2) {
              if (typeof closure_1_3 === "function") {
                let fn = arg2;
                closure_0 = arg2;
                let closure_1 = onComplete;
                if (arg2) {
                  if (onComplete.onComplete) {
                    fn = () => {
                      const items = [...arguments];
                      if (onComplete.onComplete) {
                        onComplete = tmp2.onComplete;
                        const items1 = [];
                        HermesBuiltin.arraySpread(items1, items, 0);
                        HermesBuiltin.apply(onComplete, items1, onComplete);
                      }
                      if (closure_0) {
                        const items2 = [];
                        HermesBuiltin.arraySpread(items2, items, 0);
                        HermesBuiltin.apply(closure_0, items2, undefined);
                      }
                    };
                  }
                  stopTracking.stopTracking();
                  if (onComplete.toValue instanceof obj(start[8])) {
                    const track = stopTracking.track;
                    const self3 = this;
                    const self4 = this;
                    const tmp4Result = obj(start[9]);
                    const tmp4Result1 = new tmp4Result(
                      stopTracking,
                      onComplete.toValue,
                      obj(start[11]),
                      onComplete,
                      fn,
                    );
                    track(tmp4Result1);
                  } else {
                    const animate = stopTracking.animate;
                    const self = this;
                    const self2 = this;
                    const tmp7 = new obj(start[11])(onComplete);
                    animate(tmp7, fn);
                  }
                }
                if (!fn) {
                  fn = onComplete.onComplete;
                }
              } else {
                throw new TypeError("Trying to call a non-function");
              }
            }
            let tmp9 = maybeVectorAnim(tmp6, obj, timingImpl);
            if (!tmp9) {
              tmp9 = {
                start(arg0, isLooping) {
                  obj = { isLooping };
                  const merged = Object.assign(obj);
                  start(closure_0, obj, arg0);
                },
                stop() {
                  closure_0.stopAnimation();
                },
                reset() {
                  closure_0.resetAnimation();
                },
                _startNativeLoop(iterations) {
                  obj = { iterations };
                  const merged = Object.assign(obj);
                  start(closure_0, obj);
                },
                _isUsingNativeDriver() {
                  return obj.useNativeDriver || false;
                },
              };
              const obj2 = {
                start(arg0, isLooping) {
                  obj = { isLooping };
                  const merged = Object.assign(obj);
                  start(closure_0, obj, arg0);
                },
                stop() {
                  closure_0.stopAnimation();
                },
                reset() {
                  closure_0.resetAnimation();
                },
                _startNativeLoop(iterations) {
                  obj = { iterations };
                  const merged = Object.assign(obj);
                  start(closure_0, obj);
                },
                _isUsingNativeDriver() {
                  return obj.useNativeDriver || false;
                },
              };
            }
            const tmp10 = item;
            let items = [tmp9, item];
            if (typeof tmp === "function") {
              let c1 = 0;
              return {
                start(fn, arg1) {
                  items = fn;
                  let closure_1 = arg1;
                  function onComplete(finished) {
                    if (finished.finished) {
                      const sum = c1 + 1;
                      c1 = sum;
                      if (sum === items.length) {
                        c1 = 0;
                        if (fn) {
                          tmp10(finished);
                        }
                      } else {
                        const obj = tmp5[c1];
                        obj.start(onComplete, closure_1);
                      }
                    } else if (fn) {
                      tmp(finished);
                    }
                  }
                  if (0 === items.length) {
                    if (fn) {
                      fn({ finished: true });
                    }
                  } else {
                    let obj = tmp[closure_1];
                    obj.start(onComplete, arg1);
                  }
                },
                stop() {
                  if (c1 < items.length) {
                    const obj = tmp[c1];
                    obj.stop();
                  }
                },
                reset() {
                  const item = items.forEach((reset, index) => {
                    if (index <= closure_1_1) {
                      reset.reset();
                    }
                  });
                  c1 = 0;
                },
                _startNativeLoop,
                _isUsingNativeDriver,
              };
            } else {
              throw new TypeError("Trying to call a non-function");
            }
          } else {
            throw new TypeError("Trying to call a non-function");
          }
        } else {
          throw new TypeError("Trying to call a non-function");
        }
      });
      let sum = 0;
      let closure_2 = {};
      let c3 = true;
      let obj = {
        start(fn, arg1) {
          let length;
          let c1 = arg1;
          const arr = fn;
          if (c1 !== fn.length) {
            const item = arr.forEach((start, index) => {
              if (start) {
                start.start(function cb(finished) {
                  closure_2[index] = true;
                  sum = sum + 1;
                  if (sum === index.length) {
                    sum = 0;
                    if (index) {
                      tmp5(finished);
                    }
                  } else {
                    const tmp2 = !finished.finished && c3;
                    if (tmp2) {
                      obj.stop();
                    }
                  }
                }, c1);
              } else {
                obj = { finished: true };
                closure_1_2[index] = true;
                let tmp2 = c1;
                sum = c1 + 1;
                c1 = sum;
                if (sum === index.length) {
                  c1 = 0;
                  if (index) {
                    tmp8(obj);
                  }
                } else {
                  const tmp5 = !obj.finished && closure_1_3;
                  if (tmp5) {
                    closure_1_4.stop();
                  }
                }
              }
            });
          } else if (fn) {
            fn({ finished: true });
          }
        },
        stop() {
          const item = closure_0.forEach((stop, index) => {
            if (!closure_1_2[index]) {
              stop.stop();
            }
            closure_1_2[index] = true;
          });
        },
        reset() {
          const item = closure_0.forEach((reset, index) => {
            reset.reset();
            closure_1_2[index] = false;
            c1 = 0;
          });
        },
        _startNativeLoop: _startNativeLoop2,
        _isUsingNativeDriver: _isUsingNativeDriver2,
      };
      return obj;
    } else {
      const str = "Trying to call a non-function";
      throw new TypeError("Trying to call a non-function");
    }
  },
  loop(arg0) {
    navigation = arg0;
    let obj = arg1;
    if (arg1 === undefined) {
      obj = {};
    }
    let num = obj.iterations;
    if (num === undefined) {
      num = -1;
    }
    let flag = obj.resetBeforeIteration;
    if (flag === undefined) {
      flag = true;
    }
    let c3 = false;
    let closure_4 = 0;
    let obj2 = {
      start(fn) {
        navigation = fn;
        function restart() {
          let obj = arg0;
          if (arg0 === undefined) {
            obj = { finished: true };
          }
          if (!c3) {
            if (closure_4 !== num) {
              if (false !== obj.finished) {
                closure_4 = closure_4 + 1;
                if (false) {
                  navigation.reset();
                }
                navigation.start(restart, -1 === tmp3);
              }
            }
          }
          if (navigation) {
            navigation(obj);
          }
        }
        let obj = navigation;
        if (obj) {
          num = 0;
          if (0 !== restart) {
            if (obj._isUsingNativeDriver()) {
              obj._startNativeLoop(restart);
            } else {
              const obj2 = { finished: true };
              if (!c3) {
                if (closure_4 !== restart) {
                  if (false !== obj2.finished) {
                    closure_4 = closure_4 + 1;
                    if (false) {
                      obj.reset();
                    }
                    obj.start(restart, -1 === tmp);
                  }
                }
              }
              if (fn) {
                fn(obj2);
              }
            }
          }
        }
        if (fn) {
          fn({ finished: true });
        }
      },
      stop() {
        c3 = true;
        navigation.stop();
      },
      reset() {
        closure_4 = 0;
        c3 = false;
        navigation.reset();
      },
      _startNativeLoop() {
        const error = new Error("Loops run using the native driver cannot contain Animated.loop animations");
        throw error;
      },
      _isUsingNativeDriver() {
        return navigation._isUsingNativeDriver();
      },
    };
    return obj2;
  },
  event(dependencyMap, useNativeDriver) {
    const animatedEvent = new attachNativeEventImpl.AnimatedEvent(dependencyMap, useNativeDriver);
    let __getHandlerResult = animatedEvent;
    if (!animatedEvent.__isNative) {
      __getHandlerResult = animatedEvent.__getHandler();
    }
    return __getHandlerResult;
  },
  createAnimatedComponent: createAnimatedComponentDefault,
  attachNativeEvent: attachNativeEventImpl.attachNativeEventImpl,
  forkEvent: function forkEventImpl(__addListener, listener) {
    let closure_0 = __addListener;
    let closure_1 = listener;
    let tmp = listener;
    if (__addListener) {
      let fn;
      if (__addListener instanceof attachNativeEventImpl.AnimatedEvent) {
        __addListener.__addListener(listener);
        fn = __addListener;
      } else {
        fn = () => {
          const items = [...arguments];
          if (typeof closure_0 === "function") {
            const items1 = [];
            HermesBuiltin.arraySpread(items1, items, 0);
            HermesBuiltin.apply(closure_0, items1, undefined);
          }
          closure_1(...items);
        };
      }
      tmp = fn;
    }
    return tmp;
  },
  unforkEvent: function unforkEventImpl(__removeListener, arg1) {
    const tmp = __removeListener && __removeListener instanceof attachNativeEventImpl.AnimatedEvent;
    if (tmp) {
      __removeListener.__removeListener(arg1);
    }
  },
  Event: attachNativeEventImpl.AnimatedEvent,
};

export default obj;
