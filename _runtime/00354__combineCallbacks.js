// _runtime/00354__combineCallbacks.js
import _isNativeReflectConstructDefault from "00355__isNativeReflectConstruct.js";
import _isNativeReflectConstructDefault2 from "00368__isNativeReflectConstruct.js";
import _isNativeReflectConstructDefault3 from "00369__isNativeReflectConstruct.js";
import _isNativeReflectConstructDefault4 from "00370__isNativeReflectConstruct.js";
import _isNativeReflectConstructDefault5 from "00371__isNativeReflectConstruct.js";
import _isNativeReflectConstructDefault6 from "00372__isNativeReflectConstruct.js";
import _isNativeReflectConstructDefault7 from "00373__isNativeReflectConstruct.js";
import _isNativeReflectConstructDefault8 from "00374__isNativeReflectConstruct.js";
import AnimatedEvent from "00384_AnimatedEvent.js";

require = fn;
importDefault = fn2;
let dependencyMap = arg6;
function _combineCallbacks(arg0, arg1) {

}
function maybeVectorAnim(g, obj, timingImpl) {
  if (g instanceof _isNativeReflectConstructDefault7) {
    obj = {};
    const merged = Object.assign(obj);
    obj = {};
    const merged1 = Object.assign(obj);
    for (const key10066 in arg1) {
      ({ x, y } = arg1[key10066]);
      let tmp29 = undefined !== x;
      if (tmp29) {
        tmp29 = undefined !== y;
      }
      if (!tmp29) {
        continue;
      } else {
        obj[key10066] = x;
        obj[key10066] = y;
        continue;
      }
      continue;
    }
    const items = [timingImpl(g.x, obj), timingImpl(g.y, obj)];
    if (typeof parallelImpl !== "function") {
      HermesBuiltin.throwTypeError();
    }
    let items1 = items;
    importDefault = 0;
    dependencyMap = {};
    closure_3 = false !== { stopTogether: false }.stopTogether;
    obj1 = { start: null, stop: null, reset: null, _startNativeLoop: null, _isUsingNativeDriver: null };
    obj1[0] = function start(fn) {
      mapped = fn;
      c1 = arg1;
      if (c1 !== mapped.length) {
        const item = mapped.forEach((item, index) => {
          if (item) {
            item.start(function cb(finished) {
              closure_2_2[index] = true;
              const sum = c1 + 1;
              c1 = sum;
              if (sum === index.length) {
                c1 = 0;
                if (index) {
                  tmp5(finished);
                }
              } else {
                finished = finished.finished;
                let tmp2 = !finished;
                if (!finished) {
                  tmp2 = closure_2_3;
                }
                if (tmp2) {
                  obj.stop();
                }
              }
            }, c1);
          } else {
            obj = { finished: true };
            closure_1_2[index] = true;
            let sum = c1 + 1;
            c1 = sum;
            if (sum === length.length) {
              c1 = 0;
              if (length) {
                tmp8(obj);
              }
            } else {
              let finished = obj.finished;
              let tmp5 = !finished;
              if (!finished) {
                tmp5 = closure_1_3;
              }
              if (tmp5) {
                closure_1_4.stop();
              }
            }
          }
        });
      } else if (fn) {
        fn({ finished: true });
      }
    };
    obj1[1] = function stop() {
      const item = mapped.forEach((item, index) => {
        if (!table[index]) {
          item.stop();
        }
        table[index] = true;
      });
    };
    obj1[2] = function reset() {
      const item = mapped.forEach((item, index) => {
        item.reset();
        closure_2[index] = false;
        c1 = 0;
      });
    };
    obj1[3] = function _startNativeLoop() {
      error = new Error("Loops run using the native driver cannot contain Animated.parallel animations");
      throw error;
    };
    obj1[4] = function _isUsingNativeDriver() {
      return false;
    };
    let obj5 = obj1;
    return obj1;
  } else if (g instanceof _isNativeReflectConstructDefault8) {
    obj = {};
    const merged2 = Object.assign(obj);
    const obj2 = {};
    const merged3 = Object.assign(obj);
    const obj3 = {};
    const merged4 = Object.assign(obj);
    const obj4 = {};
    const merged5 = Object.assign(obj);
    for (const key10031 in arg1) {
      ({ r, g, b, a } = arg1[key10031]);
      let tmp17 = undefined !== r;
      if (tmp17) {
        tmp17 = undefined !== g;
      }
      if (tmp17) {
        tmp17 = undefined !== b;
      }
      if (tmp17) {
        tmp17 = undefined !== a;
      }
      if (!tmp17) {
        continue;
      } else {
        obj[key10031] = r;
        obj2[key10031] = g;
        obj3[key10031] = b;
        obj4[key10031] = a;
        continue;
      }
      continue;
    }
    const tmp18 = timingImpl(g.r, obj);
    const tmp19 = timingImpl(g.g, obj2);
    items1 = [tmp18, tmp19, timingImpl(g.b, obj3), timingImpl(g.a, obj4)];
    if (typeof parallelImpl !== "function") {
      HermesBuiltin.throwTypeError();
    }
    importDefault = 0;
    dependencyMap = {};
    closure_3 = false !== { stopTogether: false }.stopTogether;
    obj5 = { start: null, stop: null, reset: null, _startNativeLoop: null, _isUsingNativeDriver: null };
    obj5[0] = function start(fn) {
      mapped = fn;
      c1 = arg1;
      if (c1 !== mapped.length) {
        const item = mapped.forEach((item, index) => {
          if (item) {
            item.start(function cb(finished) {
              closure_2_2[index] = true;
              const sum = c1 + 1;
              c1 = sum;
              if (sum === index.length) {
                c1 = 0;
                if (index) {
                  tmp5(finished);
                }
              } else {
                finished = finished.finished;
                let tmp2 = !finished;
                if (!finished) {
                  tmp2 = closure_2_3;
                }
                if (tmp2) {
                  obj.stop();
                }
              }
            }, c1);
          } else {
            obj = { finished: true };
            closure_1_2[index] = true;
            let sum = c1 + 1;
            c1 = sum;
            if (sum === length.length) {
              c1 = 0;
              if (length) {
                tmp8(obj);
              }
            } else {
              let finished = obj.finished;
              let tmp5 = !finished;
              if (!finished) {
                tmp5 = closure_1_3;
              }
              if (tmp5) {
                closure_1_4.stop();
              }
            }
          }
        });
      } else if (fn) {
        fn({ finished: true });
      }
    };
    obj5[1] = function stop() {
      const item = mapped.forEach((item, index) => {
        if (!table[index]) {
          item.stop();
        }
        table[index] = true;
      });
    };
    obj5[2] = function reset() {
      const item = mapped.forEach((item, index) => {
        item.reset();
        closure_2[index] = false;
        c1 = 0;
      });
    };
    obj5[3] = function _startNativeLoop() {
      error = new Error("Loops run using the native driver cannot contain Animated.parallel animations");
      throw error;
    };
    obj5[4] = function _isUsingNativeDriver() {
      return false;
    };
    return obj5;
  } else {
    return null;
  }
}
function springImpl(g) {
  closure_0 = g;
  closure_1 = arg1;
  function start(stopTracking, onComplete) {
    if (typeof closure_3 !== "function") {
      HermesBuiltin.throwTypeError();
    }
    let fn = arg2;
    closure_0 = arg2;
    const lib = onComplete;
    if (arg2) {
      if (onComplete.onComplete) {
        fn = () => {
          const items = [...arguments];
          if (onComplete.onComplete) {
            onComplete = tmp.onComplete;
            const items1 = [];
            HermesBuiltin.arraySpread(items, 0);
            HermesBuiltin.apply(items1, tmp);
          }
          if (closure_0) {
            const items2 = [];
            HermesBuiltin.arraySpread(items, 0);
            HermesBuiltin.apply(items2, undefined);
          }
        };
      }
      stopTracking.stopTracking();
      if (onComplete.toValue instanceof lib(start[8])) {
        let tmp3Result = tmp3(start[9]);
        tmp3Result = new tmp3Result(stopTracking, onComplete.toValue, tmp3(start[10]), onComplete, fn);
        stopTracking.track(tmp3Result);
      } else {
        const tmp8 = new tmp3(start[10])(onComplete);
        stopTracking.animate(tmp8, fn);
      }
    }
    if (!fn) {
      fn = onComplete.onComplete;
    }
  }
  let tmp = maybeVectorAnim(g, arg1, springImpl);
  if (!tmp) {
    let obj = { start: null, stop: null, reset: null, _startNativeLoop: null, _isUsingNativeDriver: null };
    obj[0] = function start(arg0) {
      start(closure_0, closure_1, arg0);
    };
    obj[1] = function stop() {
      closure_0.stopAnimation();
    };
    obj[2] = function reset() {
      closure_0.resetAnimation();
    };
    obj[3] = function _startNativeLoop(iterations) {
      const obj = {};
      const merged = Object.assign(closure_1);
      obj.iterations = iterations;
      start(closure_0, obj);
    };
    obj[4] = function _isUsingNativeDriver() {
      return lib.useNativeDriver || false;
    };
    tmp = obj;
  }
  return tmp;
}
function timingImpl(g, arg1) {
  closure_0 = g;
  closure_1 = arg1;
  function start(stopTracking, onComplete) {
    if (typeof closure_3 !== "function") {
      HermesBuiltin.throwTypeError();
    }
    let fn = arg2;
    closure_0 = arg2;
    const v0 = onComplete;
    if (arg2) {
      if (onComplete.onComplete) {
        fn = () => {
          const items = [...arguments];
          if (onComplete.onComplete) {
            onComplete = tmp.onComplete;
            const items1 = [];
            HermesBuiltin.arraySpread(items, 0);
            HermesBuiltin.apply(items1, tmp);
          }
          if (closure_0) {
            const items2 = [];
            HermesBuiltin.arraySpread(items, 0);
            HermesBuiltin.apply(items2, undefined);
          }
        };
      }
      stopTracking.stopTracking();
      if (onComplete.toValue instanceof v0(start[8])) {
        let tmp3Result = tmp3(start[9]);
        tmp3Result = new tmp3Result(stopTracking, onComplete.toValue, tmp3(start[11]), onComplete, fn);
        stopTracking.track(tmp3Result);
      } else {
        const tmp8 = new tmp3(start[11])(onComplete);
        stopTracking.animate(tmp8, fn);
      }
    }
    if (!fn) {
      fn = onComplete.onComplete;
    }
  }
  let tmp = maybeVectorAnim(g, arg1, timingImpl);
  if (!tmp) {
    const obj = { start: null, stop: null, reset: null, _startNativeLoop: null, _isUsingNativeDriver: null };
    obj[0] = function start(arg0, isLooping) {
      obj = {};
      const merged = Object.assign(c1);
      obj.isLooping = isLooping;
      start(items, obj, arg0);
    };
    obj[1] = function stop() {
      items.stopAnimation();
    };
    obj[2] = function reset() {
      items.resetAnimation();
    };
    obj[3] = function _startNativeLoop(iterations) {
      obj = {};
      const merged = Object.assign(c1);
      obj.iterations = iterations;
      start(items, obj);
    };
    obj[4] = function _isUsingNativeDriver() {
      return v0.useNativeDriver || false;
    };
    tmp = obj;
  }
  return tmp;
}
function decayImpl(g) {
  closure_0 = g;
  closure_1 = arg1;
  let tmp = maybeVectorAnim(g, arg1, decayImpl);
  if (!tmp) {
    let obj = { start: null, stop: null, reset: null, _startNativeLoop: null, _isUsingNativeDriver: null };
    obj[0] = function start(arg0) {
      if (typeof _combineCallbacks !== "function") {
        HermesBuiltin.throwTypeError();
      }
      let fn = arg0;
      closure_0 = arg0;
      const lib = tmp;
      if (arg0) {
        if (tmp.onComplete) {
          fn = () => {
            const items = [...arguments];
            if (onComplete.onComplete) {
              onComplete = tmp.onComplete;
              const items1 = [];
              HermesBuiltin.arraySpread(items, 0);
              HermesBuiltin.apply(items1, tmp);
            }
            if (closure_0) {
              const items2 = [];
              HermesBuiltin.arraySpread(items, 0);
              HermesBuiltin.apply(items2, undefined);
            }
          };
        }
        obj.stopTracking();
        const tmp8 = new lib(dependencyMap[12])(tmp);
        obj.animate(tmp8, fn);
      }
      if (!fn) {
        fn = tmp.onComplete;
      }
    };
    obj[1] = function stop() {
      closure_0.stopAnimation();
    };
    obj[2] = function reset() {
      closure_0.resetAnimation();
    };
    obj[3] = function _startNativeLoop(iterations) {
      const obj = {};
      const merged = Object.assign(obj);
      obj.iterations = iterations;
      if (typeof _combineCallbacks !== "function") {
        HermesBuiltin.throwTypeError();
      }
      closure_0.stopTracking();
      closure_0.animate(new lib(dependencyMap[12])(obj), obj.onComplete);
      const tmp3 = new lib(dependencyMap[12])(obj);
    };
    obj[4] = function _isUsingNativeDriver() {
      return lib.useNativeDriver || false;
    };
    tmp = obj;
  }
  return tmp;
}
function sequenceImpl(arg0) {
  closure_0 = arg0;
  c1 = 0;
  return {
    start(fn) {
      items = fn;
      c1 = arg1;
      function onComplete(finished) {
        if (finished.finished) {
          const sum = c1 + 1;
          c1 = sum;
          if (sum === length.length) {
            c1 = 0;
            if (length) {
              tmp10(finished);
            }
          } else {
            tmp5[c1].start(onComplete, c1);
          }
        } else if (length) {
          tmp(finished);
        }
      }
      if (0 === items.length) {
        if (fn) {
          fn({ finished: true });
        }
      } else {
        tmp[c1].start(onComplete, arg1);
      }
    },
    stop() {
      if (c1 < items.length) {
        tmp[c1].stop();
      }
    },
    reset() {
      const item = items.forEach((item, index) => {
        if (index <= c1) {
          item.reset();
        }
      });
      c1 = 0;
    },
    _startNativeLoop() {
      error = new Error("Loops run using the native driver cannot contain Animated.sequence animations");
      throw error;
    },
    _isUsingNativeDriver() {
      return false;
    }
  };
}
function parallelImpl(arg0, stopTogether) {
  closure_0 = arg0;
  c1 = 0;
  closure_2 = {};
  let tmp = stopTogether;
  if (stopTogether) {
    tmp = false === stopTogether.stopTogether;
  }
  closure_3 = !tmp;
  const obj = {
    start(fn) {
      mapped = fn;
      c1 = arg1;
      if (c1 !== mapped.length) {
        const item = mapped.forEach((item, index) => {
          if (item) {
            item.start(function cb(finished) {
              closure_2_2[index] = true;
              const sum = c1 + 1;
              c1 = sum;
              if (sum === index.length) {
                c1 = 0;
                if (index) {
                  tmp5(finished);
                }
              } else {
                finished = finished.finished;
                let tmp2 = !finished;
                if (!finished) {
                  tmp2 = closure_2_3;
                }
                if (tmp2) {
                  obj.stop();
                }
              }
            }, c1);
          } else {
            obj = { finished: true };
            closure_1_2[index] = true;
            let sum = c1 + 1;
            c1 = sum;
            if (sum === length.length) {
              c1 = 0;
              if (length) {
                tmp8(obj);
              }
            } else {
              let finished = obj.finished;
              let tmp5 = !finished;
              if (!finished) {
                tmp5 = closure_1_3;
              }
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
      const item = mapped.forEach((item, index) => {
        if (!table[index]) {
          item.stop();
        }
        table[index] = true;
      });
    },
    reset() {
      const item = mapped.forEach((item, index) => {
        item.reset();
        closure_2[index] = false;
        c1 = 0;
      });
    },
    _startNativeLoop() {
      error = new Error("Loops run using the native driver cannot contain Animated.parallel animations");
      throw error;
    },
    _isUsingNativeDriver() {
      return false;
    }
  };
  return obj;
}
function delayImpl(delay) {
  const tmp2 = new obj(start[13])(0);
  obj = { toValue: 0, delay, duration: 0, useNativeDriver: false };
  if (typeof timingImpl !== "function") {
    HermesBuiltin.throwTypeError();
  }
  closure_0 = tmp2;
  start = function start(stopTracking, onComplete) {
    if (typeof closure_3 !== "function") {
      HermesBuiltin.throwTypeError();
    }
    let fn = arg2;
    closure_0 = arg2;
    const v0 = onComplete;
    if (arg2) {
      if (onComplete.onComplete) {
        fn = () => {
          const items = [...arguments];
          if (onComplete.onComplete) {
            onComplete = tmp.onComplete;
            const items1 = [];
            HermesBuiltin.arraySpread(items, 0);
            HermesBuiltin.apply(items1, tmp);
          }
          if (closure_0) {
            const items2 = [];
            HermesBuiltin.arraySpread(items, 0);
            HermesBuiltin.apply(items2, undefined);
          }
        };
      }
      stopTracking.stopTracking();
      if (onComplete.toValue instanceof v0(start[8])) {
        let tmp3Result = tmp3(start[9]);
        tmp3Result = new tmp3Result(stopTracking, onComplete.toValue, tmp3(start[11]), onComplete, fn);
        stopTracking.track(tmp3Result);
      } else {
        const tmp8 = new tmp3(start[11])(onComplete);
        stopTracking.animate(tmp8, fn);
      }
    }
    if (!fn) {
      fn = onComplete.onComplete;
    }
  };
  let tmp3 = maybeVectorAnim(tmp2, obj, timingImpl);
  if (!tmp3) {
    obj = { start: null, stop: null, reset: null, _startNativeLoop: null, _isUsingNativeDriver: null };
    obj[0] = function start(arg0, isLooping) {
      obj = {};
      const merged = Object.assign(c1);
      obj.isLooping = isLooping;
      start(items, obj, arg0);
    };
    obj[1] = function stop() {
      items.stopAnimation();
    };
    obj[2] = function reset() {
      items.resetAnimation();
    };
    obj[3] = function _startNativeLoop(iterations) {
      obj = {};
      const merged = Object.assign(c1);
      obj.iterations = iterations;
      start(items, obj);
    };
    obj[4] = function _isUsingNativeDriver() {
      return v0.useNativeDriver || false;
    };
    tmp3 = obj;
  }
  return tmp3;
}
arg5.default = {
  Value: require("_isNativeReflectConstruct"),
  ValueXY: require("_isNativeReflectConstruct"),
  Color: require("_isNativeReflectConstruct"),
  Interpolation: require("_isNativeReflectConstruct"),
  Node: require("_assertNativeAnimatedModule"),
  decay: decayImpl,
  timing: timingImpl,
  spring: springImpl,
  add(arg0, arg1) {
    return new _isNativeReflectConstructDefault(arg0, arg1);
  },
  subtract(arg0, arg1) {
    return new _isNativeReflectConstructDefault2(arg0, arg1);
  },
  divide(absResult) {
    return new _isNativeReflectConstructDefault3(absResult, arg1);
  },
  multiply(arg0, arg1) {
    return new _isNativeReflectConstructDefault4(arg0, arg1);
  },
  modulo(arg0, arg1) {
    return new _isNativeReflectConstructDefault5(arg0, arg1);
  },
  diffClamp(interpolateResult, arg1, arg2) {
    return new _isNativeReflectConstructDefault6(interpolateResult, arg1, arg2);
  },
  delay: delayImpl,
  sequence: sequenceImpl,
  parallel: parallelImpl,
  stagger(arg0, arr) {
    let mapped = arr.map((item, index) => {
      const result = items * index;
      if (typeof delayImpl !== "function") {
        HermesBuiltin.throwTypeError();
      }
      const tmp4 = new v0(table[13])(0);
      obj = { toValue: 0, delay: result, duration: 0, useNativeDriver: false };
      if (typeof timingImpl !== "function") {
        HermesBuiltin.throwTypeError();
      }
      items = tmp4;
      v0 = obj;
      function start(stopTracking, onComplete) {
        if (typeof closure_3 !== "function") {
          HermesBuiltin.throwTypeError();
        }
        let fn = arg2;
        closure_0 = arg2;
        const v0 = onComplete;
        if (arg2) {
          if (onComplete.onComplete) {
            fn = () => {
              const items = [...arguments];
              if (onComplete.onComplete) {
                onComplete = tmp.onComplete;
                const items1 = [];
                HermesBuiltin.arraySpread(items, 0);
                HermesBuiltin.apply(items1, tmp);
              }
              if (closure_0) {
                const items2 = [];
                HermesBuiltin.arraySpread(items, 0);
                HermesBuiltin.apply(items2, undefined);
              }
            };
          }
          stopTracking.stopTracking();
          if (onComplete.toValue instanceof v0(start[8])) {
            let tmp3Result = tmp3(start[9]);
            tmp3Result = new tmp3Result(stopTracking, onComplete.toValue, tmp3(start[11]), onComplete, fn);
            stopTracking.track(tmp3Result);
          } else {
            const tmp8 = new tmp3(start[11])(onComplete);
            stopTracking.animate(tmp8, fn);
          }
        }
        if (!fn) {
          fn = onComplete.onComplete;
        }
      }
      let tmp5 = obj(tmp4, obj, timingImpl);
      if (!tmp5) {
        obj = { start: null, stop: null, reset: null, _startNativeLoop: null, _isUsingNativeDriver: null };
        obj[0] = function start(arg0, isLooping) {
          obj = {};
          const merged = Object.assign(c1);
          obj.isLooping = isLooping;
          start(items, obj, arg0);
        };
        obj[1] = function stop() {
          items.stopAnimation();
        };
        obj[2] = function reset() {
          items.resetAnimation();
        };
        obj[3] = function _startNativeLoop(iterations) {
          obj = {};
          const merged = Object.assign(c1);
          obj.iterations = iterations;
          start(items, obj);
        };
        obj[4] = function _isUsingNativeDriver() {
          return v0.useNativeDriver || false;
        };
        tmp5 = obj;
      }
      items = [tmp5, item];
      if (typeof sequenceImpl !== "function") {
        HermesBuiltin.throwTypeError();
      }
      v0 = 0;
      obj = {
        start(fn) {
          items = fn;
          c1 = arg1;
          function onComplete(finished) {
            if (finished.finished) {
              const sum = c1 + 1;
              c1 = sum;
              if (sum === length.length) {
                c1 = 0;
                if (length) {
                  tmp10(finished);
                }
              } else {
                tmp5[c1].start(onComplete, c1);
              }
            } else if (length) {
              tmp(finished);
            }
          }
          if (0 === items.length) {
            if (fn) {
              fn({ finished: true });
            }
          } else {
            tmp[c1].start(onComplete, arg1);
          }
        },
        stop() {
          if (c1 < items.length) {
            tmp[c1].stop();
          }
        },
        reset() {
          const item = items.forEach((item, index) => {
            if (index <= c1) {
              item.reset();
            }
          });
          c1 = 0;
        },
        _startNativeLoop() {
          error = new Error("Loops run using the native driver cannot contain Animated.sequence animations");
          throw error;
        },
        _isUsingNativeDriver() {
          return false;
        }
      };
      return obj;
    });
    if (typeof parallelImpl !== "function") {
      HermesBuiltin.throwTypeError();
    }
    c1 = 0;
    closure_2 = {};
    c3 = true;
    let obj = {
      start(fn) {
        mapped = fn;
        c1 = arg1;
        if (c1 !== mapped.length) {
          const item = mapped.forEach((item, index) => {
            if (item) {
              item.start(function cb(finished) {
                closure_2_2[index] = true;
                const sum = c1 + 1;
                c1 = sum;
                if (sum === index.length) {
                  c1 = 0;
                  if (index) {
                    tmp5(finished);
                  }
                } else {
                  finished = finished.finished;
                  let tmp2 = !finished;
                  if (!finished) {
                    tmp2 = closure_2_3;
                  }
                  if (tmp2) {
                    obj.stop();
                  }
                }
              }, c1);
            } else {
              obj = { finished: true };
              closure_1_2[index] = true;
              let sum = c1 + 1;
              c1 = sum;
              if (sum === length.length) {
                c1 = 0;
                if (length) {
                  tmp8(obj);
                }
              } else {
                let finished = obj.finished;
                let tmp5 = !finished;
                if (!finished) {
                  tmp5 = closure_1_3;
                }
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
        const item = mapped.forEach((item, index) => {
          if (!table[index]) {
            item.stop();
          }
          table[index] = true;
        });
      },
      reset() {
        const item = mapped.forEach((item, index) => {
          item.reset();
          closure_2[index] = false;
          c1 = 0;
        });
      },
      _startNativeLoop() {
        error = new Error("Loops run using the native driver cannot contain Animated.parallel animations");
        throw error;
      },
      _isUsingNativeDriver() {
        return false;
      }
    };
    return obj;
  },
  loop(arg0) {
    closure_0 = arg0;
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
    c3 = false;
    c4 = 0;
    obj = {
      start(fn) {
        closure_0 = fn;
        function restart() {
          let obj = arg0;
          if (arg0 === undefined) {
            obj = { finished: true };
          }
          if (!closure_1_3) {
            if (closure_4 !== restart) {
              if (false !== obj.finished) {
                closure_4 = closure_4 + 1;
                if (flag) {
                  navigation.reset();
                }
                navigation.start(restart, -1 === tmp2);
              }
            }
          }
          if (navigation) {
            navigation(obj);
          }
        }
        let obj = closure_0;
        if (closure_0) {
          if (0 !== restart) {
            if (obj._isUsingNativeDriver()) {
              obj._startNativeLoop(tmp);
            } else {
              obj = { finished: true };
              if (!c3) {
                if (closure_4 !== tmp) {
                  if (false !== obj.finished) {
                    closure_4 = closure_4 + 1;
                    if (flag) {
                      obj.reset();
                    }
                    obj.start(restart, -1 === tmp);
                  }
                }
              }
              if (fn) {
                fn(obj);
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
        c4 = 0;
        c3 = false;
        navigation.reset();
      },
      _startNativeLoop() {
        error = new Error("Loops run using the native driver cannot contain Animated.loop animations");
        throw error;
      },
      _isUsingNativeDriver() {
        return navigation._isUsingNativeDriver();
      }
    };
    return obj;
  },
  event(closure_2, useNativeDriver) {
    const animatedEvent = new AnimatedEvent.AnimatedEvent(closure_2, useNativeDriver);
    let __getHandlerResult = animatedEvent;
    if (!animatedEvent.__isNative) {
      __getHandlerResult = animatedEvent.__getHandler();
    }
    return __getHandlerResult;
  },
  createAnimatedComponent: require("createAnimatedComponent"),
  attachNativeEvent: require("AnimatedEvent").attachNativeEventImpl,
  forkEvent: function forkEventImpl(__addListener, listener) {
    const _require = __addListener;
    closure_1 = listener;
    if (!__addListener) {
      return listener;
    } else if (__addListener instanceof require("00384_AnimatedEvent.js").AnimatedEvent) {
      __addListener.__addListener(listener);
      let fn = __addListener;
    } else {
      fn = () => {
        const items = [...arguments];
        if (typeof closure_0 === "function") {
          const items1 = [];
          HermesBuiltin.arraySpread(items, 0);
          HermesBuiltin.apply(items1, undefined);
        }
        listener(...items);
      };
    }
  },
  unforkEvent: function unforkEventImpl(__removeListener) {
    let tmp = __removeListener;
    if (__removeListener) {
      tmp = __removeListener instanceof AnimatedEvent.AnimatedEvent;
    }
    if (tmp) {
      __removeListener.__removeListener(arg1);
    }
  },
  Event: require("AnimatedEvent").AnimatedEvent
};