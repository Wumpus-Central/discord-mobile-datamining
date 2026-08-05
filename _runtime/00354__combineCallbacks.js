// _runtime/00354__combineCallbacks.js
let require = arg1;
const module = arg2;
let dependencyMap = arg6;
function _combineCallbacks(arg0, arg1) {

}
function maybeVectorAnim(arg0, obj, decayImpl) {
  let a;
  let b;
  let g;
  let r;
  let x;
  let y;
  if (arg0 instanceof _module(373)) {
    obj = {};
    const merged = Object.assign(obj);
    obj = {};
    const merged1 = Object.assign(obj);
    for (const key10066 in arg1) {
      let tmp34 = key10066;
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
    const items = [decayImpl(arg0.x, obj), decayImpl(arg0.y, obj)];
    if (typeof parallelImpl !== "function") {
      HermesBuiltin.throwTypeError();
    }
    let items1 = items;
    _module = 0;
    let dependencyMap = {};
    let closure_3 = false !== { stopTogether: false }.stopTogether;
    const obj1 = { start: null, stop: null, reset: null, _startNativeLoop: null, _isUsingNativeDriver: null };
    obj1[0] = function start(arg0, arg1) {
      const mapped = arg0;
      let closure_1 = arg1;
      if (closure_1 !== mapped.length) {
        const item = mapped.forEach((start) => {
          if (start) {
            start.start(function cb(finished) {
              outer2_2[length] = true;
              const sum = closure_1 + 1;
              closure_1 = sum;
              if (sum === length.length) {
                closure_1 = 0;
                if (length) {
                  tmp5(finished);
                }
              } else {
                finished = finished.finished;
                let tmp2 = !finished;
                if (!finished) {
                  tmp2 = outer2_3;
                }
                if (tmp2) {
                  outer2_4.stop();
                }
              }
            }, closure_1);
          } else {
            const obj = { finished: true };
            outer1_2[arg1] = true;
            let sum = closure_1 + 1;
            closure_1 = sum;
            if (sum === length.length) {
              closure_1 = 0;
              if (length) {
                tmp8(obj);
              }
            } else {
              let finished = obj.finished;
              let tmp5 = !finished;
              if (!finished) {
                tmp5 = outer1_3;
              }
              if (tmp5) {
                outer1_4.stop();
              }
            }
          }
        });
      } else if (arg0) {
        arg0({ finished: true });
      }
    };
    obj1[1] = function stop() {
      const item = mapped.forEach((stop) => {
        if (!table[arg1]) {
          stop.stop();
        }
        table[arg1] = true;
      });
    };
    obj1[2] = function reset() {
      const item = mapped.forEach((reset) => {
        reset.reset();
        closure_2[arg1] = false;
        let c1 = 0;
      });
    };
    obj1[3] = function _startNativeLoop() {
      const error = new Error("Loops run using the native driver cannot contain Animated.parallel animations");
      throw error;
    };
    obj1[4] = function _isUsingNativeDriver() {
      return false;
    };
    let obj5 = obj1;
    return obj1;
  } else if (arg0 instanceof tmp(374)) {
    obj = {};
    const merged2 = Object.assign(obj);
    const obj2 = {};
    const merged3 = Object.assign(obj);
    const obj3 = {};
    const merged4 = Object.assign(obj);
    const obj4 = {};
    const merged5 = Object.assign(obj);
    for (const key10031 in arg1) {
      let tmp32 = key10031;
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
    const tmp18 = decayImpl(arg0.r, obj);
    const tmp19 = decayImpl(arg0.g, obj2);
    items1 = [tmp18, tmp19, decayImpl(arg0.b, obj3), decayImpl(arg0.a, obj4)];
    if (typeof parallelImpl !== "function") {
      HermesBuiltin.throwTypeError();
    }
    _module = 0;
    dependencyMap = {};
    closure_3 = false !== { stopTogether: false }.stopTogether;
    obj5 = { start: null, stop: null, reset: null, _startNativeLoop: null, _isUsingNativeDriver: null };
    obj5[0] = function start(arg0, arg1) {
      const mapped = arg0;
      let closure_1 = arg1;
      if (closure_1 !== mapped.length) {
        const item = mapped.forEach((start) => {
          if (start) {
            start.start(function cb(finished) {
              outer2_2[length] = true;
              const sum = closure_1 + 1;
              closure_1 = sum;
              if (sum === length.length) {
                closure_1 = 0;
                if (length) {
                  tmp5(finished);
                }
              } else {
                finished = finished.finished;
                let tmp2 = !finished;
                if (!finished) {
                  tmp2 = outer2_3;
                }
                if (tmp2) {
                  outer2_4.stop();
                }
              }
            }, closure_1);
          } else {
            const obj = { finished: true };
            outer1_2[arg1] = true;
            let sum = closure_1 + 1;
            closure_1 = sum;
            if (sum === length.length) {
              closure_1 = 0;
              if (length) {
                tmp8(obj);
              }
            } else {
              let finished = obj.finished;
              let tmp5 = !finished;
              if (!finished) {
                tmp5 = outer1_3;
              }
              if (tmp5) {
                outer1_4.stop();
              }
            }
          }
        });
      } else if (arg0) {
        arg0({ finished: true });
      }
    };
    obj5[1] = function stop() {
      const item = mapped.forEach((stop) => {
        if (!table[arg1]) {
          stop.stop();
        }
        table[arg1] = true;
      });
    };
    obj5[2] = function reset() {
      const item = mapped.forEach((reset) => {
        reset.reset();
        closure_2[arg1] = false;
        let c1 = 0;
      });
    };
    obj5[3] = function _startNativeLoop() {
      const error = new Error("Loops run using the native driver cannot contain Animated.parallel animations");
      throw error;
    };
    obj5[4] = function _isUsingNativeDriver() {
      return false;
    };
    return obj5;
  } else {
    return null;
  }
  tmp = _module;
}
function springImpl(arg0, arg1) {
  let closure_0 = arg0;
  let closure_1 = arg1;
  function start(stopTracking, onComplete) {
    if (typeof closure_3 !== "function") {
      HermesBuiltin.throwTypeError();
    }
    let fn = arg2;
    let closure_0 = arg2;
    const lib = onComplete;
    if (arg2) {
      if (onComplete.onComplete) {
        fn = () => {
          const items = [...arguments];
          if (tmp.onComplete) {
            const onComplete = tmp.onComplete;
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
        let tmp3Result = tmp3(tmp4[9]);
        tmp3Result = new tmp3Result(stopTracking, onComplete.toValue, tmp3(tmp4[10]), onComplete, fn);
        stopTracking.track(tmp3Result);
      } else {
        const tmp8 = new tmp3(tmp4[10])(onComplete);
        stopTracking.animate(tmp8, fn);
      }
    }
    if (!fn) {
      fn = onComplete.onComplete;
    }
  }
  let tmp = maybeVectorAnim(arg0, arg1, springImpl);
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
function timingImpl(arg0, arg1) {
  let closure_0 = arg0;
  let closure_1 = arg1;
  function start(stopTracking, onComplete) {
    if (typeof closure_3 !== "function") {
      HermesBuiltin.throwTypeError();
    }
    let fn = arg2;
    let closure_0 = arg2;
    const v0 = onComplete;
    if (arg2) {
      if (onComplete.onComplete) {
        fn = () => {
          const items = [...arguments];
          if (tmp.onComplete) {
            const onComplete = tmp.onComplete;
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
        let tmp3Result = tmp3(tmp4[9]);
        tmp3Result = new tmp3Result(stopTracking, onComplete.toValue, tmp3(tmp4[11]), onComplete, fn);
        stopTracking.track(tmp3Result);
      } else {
        const tmp8 = new tmp3(tmp4[11])(onComplete);
        stopTracking.animate(tmp8, fn);
      }
    }
    if (!fn) {
      fn = onComplete.onComplete;
    }
  }
  let tmp = maybeVectorAnim(arg0, arg1, timingImpl);
  if (!tmp) {
    const obj = { start: null, stop: null, reset: null, _startNativeLoop: null, _isUsingNativeDriver: null };
    obj[0] = function start(arg0, isLooping) {
      const obj = {};
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
      const obj = {};
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
function decayImpl(arg0, arg1) {
  let closure_0 = arg0;
  let closure_1 = arg1;
  let tmp = maybeVectorAnim(arg0, arg1, decayImpl);
  if (!tmp) {
    let obj = { start: null, stop: null, reset: null, _startNativeLoop: null, _isUsingNativeDriver: null };
    obj[0] = function start(arg0) {
      if (typeof outer1_3 !== "function") {
        HermesBuiltin.throwTypeError();
      }
      let fn = arg0;
      let closure_0 = arg0;
      const lib = tmp;
      if (arg0) {
        if (tmp.onComplete) {
          fn = () => {
            const items = [...arguments];
            if (tmp.onComplete) {
              const onComplete = tmp.onComplete;
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
        const tmp8 = new lib(outer1_2[12])(tmp);
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
      if (typeof outer1_3 !== "function") {
        HermesBuiltin.throwTypeError();
      }
      closure_0.stopTracking();
      closure_0.animate(new lib(outer1_2[12])(obj), obj.onComplete);
    };
    obj[4] = function _isUsingNativeDriver() {
      return lib.useNativeDriver || false;
    };
    tmp = obj;
  }
  return tmp;
}
function sequenceImpl(arg0) {
  let closure_0 = arg0;
  let c1 = 0;
  return {
    start(arg0, arg1) {
      const items = arg0;
      let closure_1 = arg1;
      function onComplete(finished) {
        if (finished.finished) {
          const sum = closure_1 + 1;
          closure_1 = sum;
          if (sum === length.length) {
            closure_1 = 0;
            if (length) {
              tmp10(finished);
            }
          } else {
            tmp5[closure_1].start(onComplete, closure_1);
            const obj = tmp5[closure_1];
          }
        } else if (length) {
          tmp(finished);
        }
      }
      if (0 === items.length) {
        if (arg0) {
          arg0({ finished: true });
        }
      } else {
        tmp[closure_1].start(onComplete, arg1);
        let obj = tmp[closure_1];
      }
    },
    stop() {
      if (c1 < items.length) {
        tmp[c1].stop();
        const obj = tmp[c1];
      }
    },
    reset() {
      const item = items.forEach((reset) => {
        if (arg1 <= c1) {
          reset.reset();
        }
      });
      let c1 = 0;
    },
    _startNativeLoop() {
      const error = new Error("Loops run using the native driver cannot contain Animated.sequence animations");
      throw error;
    },
    _isUsingNativeDriver() {
      return false;
    }
  };
}
function parallelImpl(arg0, stopTogether) {
  let closure_0 = arg0;
  let c1 = 0;
  let closure_2 = {};
  let tmp = stopTogether;
  if (stopTogether) {
    tmp = false === stopTogether.stopTogether;
  }
  let closure_3 = !tmp;
  const obj = {
    start(arg0, arg1) {
      const mapped = arg0;
      let closure_1 = arg1;
      if (closure_1 !== mapped.length) {
        const item = mapped.forEach((start) => {
          if (start) {
            start.start(function cb(finished) {
              outer2_2[length] = true;
              const sum = closure_1 + 1;
              closure_1 = sum;
              if (sum === length.length) {
                closure_1 = 0;
                if (length) {
                  tmp5(finished);
                }
              } else {
                finished = finished.finished;
                let tmp2 = !finished;
                if (!finished) {
                  tmp2 = outer2_3;
                }
                if (tmp2) {
                  outer2_4.stop();
                }
              }
            }, closure_1);
          } else {
            const obj = { finished: true };
            outer1_2[arg1] = true;
            let sum = closure_1 + 1;
            closure_1 = sum;
            if (sum === length.length) {
              closure_1 = 0;
              if (length) {
                tmp8(obj);
              }
            } else {
              let finished = obj.finished;
              let tmp5 = !finished;
              if (!finished) {
                tmp5 = outer1_3;
              }
              if (tmp5) {
                outer1_4.stop();
              }
            }
          }
        });
      } else if (arg0) {
        arg0({ finished: true });
      }
    },
    stop() {
      const item = mapped.forEach((stop) => {
        if (!table[arg1]) {
          stop.stop();
        }
        table[arg1] = true;
      });
    },
    reset() {
      const item = mapped.forEach((reset) => {
        reset.reset();
        closure_2[arg1] = false;
        let c1 = 0;
      });
    },
    _startNativeLoop() {
      const error = new Error("Loops run using the native driver cannot contain Animated.parallel animations");
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
  const require = tmp2;
  start = function start(stopTracking, onComplete) {
    if (typeof closure_3 !== "function") {
      HermesBuiltin.throwTypeError();
    }
    let fn = arg2;
    let closure_0 = arg2;
    const v0 = onComplete;
    if (arg2) {
      if (onComplete.onComplete) {
        fn = () => {
          const items = [...arguments];
          if (tmp.onComplete) {
            const onComplete = tmp.onComplete;
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
        let tmp3Result = tmp3(tmp4[9]);
        tmp3Result = new tmp3Result(stopTracking, onComplete.toValue, tmp3(tmp4[11]), onComplete, fn);
        stopTracking.track(tmp3Result);
      } else {
        const tmp8 = new tmp3(tmp4[11])(onComplete);
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
      const obj = {};
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
      const obj = {};
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
    return new module(355)(arg0, arg1);
  },
  subtract(arg0, arg1) {
    return new module(368)(arg0, arg1);
  },
  divide(arg0) {
    return new module(369)(arg0, arg1);
  },
  multiply(arg0, arg1) {
    return new module(370)(arg0, arg1);
  },
  modulo(arg0, arg1) {
    return new module(371)(arg0, arg1);
  },
  diffClamp(interpolateResult, arg1, arg2) {
    return new module(372)(interpolateResult, arg1, arg2);
  },
  delay: delayImpl,
  sequence: sequenceImpl,
  parallel: parallelImpl,
  stagger(arg0, arr) {
    let mapped = arg0;
    mapped = arr.map((arg0, arg1) => {
      const result = items * arg1;
      if (typeof outer1_10 !== "function") {
        HermesBuiltin.throwTypeError();
      }
      const tmp4 = new v0(table[13])(0);
      let obj = { toValue: 0, delay: result, duration: 0, useNativeDriver: false };
      if (typeof outer1_6 !== "function") {
        HermesBuiltin.throwTypeError();
      }
      items = tmp4;
      v0 = obj;
      function start(stopTracking, onComplete) {
        if (typeof closure_3 !== "function") {
          HermesBuiltin.throwTypeError();
        }
        let fn = arg2;
        let closure_0 = arg2;
        const v0 = onComplete;
        if (arg2) {
          if (onComplete.onComplete) {
            fn = () => {
              const items = [...arguments];
              if (tmp.onComplete) {
                const onComplete = tmp.onComplete;
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
            let tmp3Result = tmp3(tmp4[9]);
            tmp3Result = new tmp3Result(stopTracking, onComplete.toValue, tmp3(tmp4[11]), onComplete, fn);
            stopTracking.track(tmp3Result);
          } else {
            const tmp8 = new tmp3(tmp4[11])(onComplete);
            stopTracking.animate(tmp8, fn);
          }
        }
        if (!fn) {
          fn = onComplete.onComplete;
        }
      }
      let tmp5 = obj(tmp4, obj, outer1_6);
      if (!tmp5) {
        obj = { start: null, stop: null, reset: null, _startNativeLoop: null, _isUsingNativeDriver: null };
        obj[0] = function start(arg0, isLooping) {
          const obj = {};
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
          const obj = {};
          const merged = Object.assign(c1);
          obj.iterations = iterations;
          start(items, obj);
        };
        obj[4] = function _isUsingNativeDriver() {
          return v0.useNativeDriver || false;
        };
        tmp5 = obj;
      }
      items = [tmp5, arg0];
      if (typeof outer1_8 !== "function") {
        HermesBuiltin.throwTypeError();
      }
      v0 = 0;
      obj = {
        start(arg0, arg1) {
          const items = arg0;
          let closure_1 = arg1;
          function onComplete(finished) {
            if (finished.finished) {
              const sum = closure_1 + 1;
              closure_1 = sum;
              if (sum === length.length) {
                closure_1 = 0;
                if (length) {
                  tmp10(finished);
                }
              } else {
                tmp5[closure_1].start(onComplete, closure_1);
                const obj = tmp5[closure_1];
              }
            } else if (length) {
              tmp(finished);
            }
          }
          if (0 === items.length) {
            if (arg0) {
              arg0({ finished: true });
            }
          } else {
            tmp[closure_1].start(onComplete, arg1);
            let obj = tmp[closure_1];
          }
        },
        stop() {
          if (c1 < items.length) {
            tmp[c1].stop();
            const obj = tmp[c1];
          }
        },
        reset() {
          const item = items.forEach((reset) => {
            if (arg1 <= c1) {
              reset.reset();
            }
          });
          let c1 = 0;
        },
        _startNativeLoop() {
          const error = new Error("Loops run using the native driver cannot contain Animated.sequence animations");
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
    let c1 = 0;
    let closure_2 = {};
    let c3 = true;
    let obj = {
      start(arg0, arg1) {
        const mapped = arg0;
        let closure_1 = arg1;
        if (closure_1 !== mapped.length) {
          const item = mapped.forEach((start) => {
            if (start) {
              start.start(function cb(finished) {
                outer2_2[length] = true;
                const sum = closure_1 + 1;
                closure_1 = sum;
                if (sum === length.length) {
                  closure_1 = 0;
                  if (length) {
                    tmp5(finished);
                  }
                } else {
                  finished = finished.finished;
                  let tmp2 = !finished;
                  if (!finished) {
                    tmp2 = outer2_3;
                  }
                  if (tmp2) {
                    outer2_4.stop();
                  }
                }
              }, closure_1);
            } else {
              const obj = { finished: true };
              outer1_2[arg1] = true;
              let sum = closure_1 + 1;
              closure_1 = sum;
              if (sum === length.length) {
                closure_1 = 0;
                if (length) {
                  tmp8(obj);
                }
              } else {
                let finished = obj.finished;
                let tmp5 = !finished;
                if (!finished) {
                  tmp5 = outer1_3;
                }
                if (tmp5) {
                  outer1_4.stop();
                }
              }
            }
          });
        } else if (arg0) {
          arg0({ finished: true });
        }
      },
      stop() {
        const item = mapped.forEach((stop) => {
          if (!table[arg1]) {
            stop.stop();
          }
          table[arg1] = true;
        });
      },
      reset() {
        const item = mapped.forEach((reset) => {
          reset.reset();
          closure_2[arg1] = false;
          let c1 = 0;
        });
      },
      _startNativeLoop() {
        const error = new Error("Loops run using the native driver cannot contain Animated.parallel animations");
        throw error;
      },
      _isUsingNativeDriver() {
        return false;
      }
    };
    return obj;
  },
  loop(arg0) {
    let closure_0 = arg0;
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
    let c4 = 0;
    obj = {
      start(arg0) {
        let closure_0 = arg0;
        function restart() {
          let obj = arg0;
          if (arg0 === undefined) {
            obj = { finished: true };
          }
          if (!outer1_3) {
            if (closure_4 !== restart) {
              if (false !== obj.finished) {
                closure_4 = closure_4 + 1;
                if (outer1_2) {
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
              if (arg0) {
                arg0(obj);
              }
            }
          }
        }
        if (arg0) {
          arg0({ finished: true });
        }
      },
      stop() {
        let c3 = true;
        navigation.stop();
      },
      reset() {
        let c4 = 0;
        let c3 = false;
        navigation.reset();
      },
      _startNativeLoop() {
        const error = new Error("Loops run using the native driver cannot contain Animated.loop animations");
        throw error;
      },
      _isUsingNativeDriver() {
        return navigation._isUsingNativeDriver();
      }
    };
    return obj;
  },
  event(items, useNativeDriver) {
    const animatedEvent = new require(384) /* AnimatedEvent */.AnimatedEvent(items, useNativeDriver);
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
    let closure_1 = listener;
    if (!__addListener) {
      return listener;
    } else if (__addListener instanceof _require(384).AnimatedEvent) {
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
      tmp = __removeListener instanceof require(384) /* AnimatedEvent */.AnimatedEvent;
    }
    if (tmp) {
      __removeListener.__removeListener(arg1);
    }
  },
  Event: require("AnimatedEvent").AnimatedEvent
};