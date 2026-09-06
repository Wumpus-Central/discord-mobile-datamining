// === Module 354: _combineCallbacks ===

// Module 354 (_combineCallbacks)
import _modDef355 from "module_355" /* 355 */;
import _modDef356 from "module_356" /* 356 */;
import _modDef368 from "module_368" /* 368 */;
import _modDef369 from "module_369" /* 369 */;
import _modDef370 from "module_370" /* 370 */;
import _modDef371 from "module_371" /* 371 */;
import _modDef372 from "module_372" /* 372 */;
import _modDef373 from "module_373" /* 373 */;
import AnimatedEvent from "AnimatedEvent" /* 384 */;
import _modDef386 from "module_386" /* 386 */;

const _modDef374 = tmp(374);
require = fn;
importDefault = fn2;
const dependencyMap = arg6;
function _combineCallbacks(arg0, arg1) {

}
function maybeVectorAnim(arg0, obj, timingImpl) {
  if (arg0 instanceof _modDef373) {
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
    const items = [timingImpl(arg0.x, obj), timingImpl(arg0.y, obj)];
    if (typeof parallelImpl === "function") {
      let items1 = items;
      c1 = 0;
      closure_2 = {};
      closure_3 = false !== { stopTogether: false }.stopTogether;
      const obj1 = {
        start(fn, arg1) {
              c1 = arg1;
              if (c1 !== fn.length) {
                const item = fn.forEach((start, index) => {
                  if (start) {
                    start.start(function cb(finished) {
                      closure_2[index] = true;
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
                          tmp2 = c3;
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
        _startNativeLoop() {
              const error = new Error("Loops run using the native driver cannot contain Animated.parallel animations");
              throw error;
            },
        _isUsingNativeDriver() {
              return false;
            }
      };
      let obj5 = obj1;
      return obj1;
    } else {
      throw new TypeError("Trying to call a non-function");
    }
    const tmp30 = timingImpl(arg0.x, obj);
  } else if (arg0 instanceof _modDef374) {
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
    const tmp18 = timingImpl(arg0.r, obj);
    const tmp19 = timingImpl(arg0.g, obj2);
    items1 = [tmp18, tmp19, timingImpl(arg0.b, obj3), timingImpl(arg0.a, obj4)];
    if (typeof parallelImpl === "function") {
      c1 = 0;
      closure_2 = {};
      closure_3 = false !== { stopTogether: false }.stopTogether;
      obj5 = {
        start(fn, arg1) {
              c1 = arg1;
              if (c1 !== fn.length) {
                const item = fn.forEach((start, index) => {
                  if (start) {
                    start.start(function cb(finished) {
                      closure_2[index] = true;
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
                          tmp2 = c3;
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
        _startNativeLoop() {
              const error = new Error("Loops run using the native driver cannot contain Animated.parallel animations");
              throw error;
            },
        _isUsingNativeDriver() {
              return false;
            }
      };
      return obj5;
    } else {
      throw new TypeError("Trying to call a non-function");
    }
    const tmp20 = timingImpl(arg0.b, obj3);
  } else {
    return null;
  }
}
function springImpl(arg0, arg1) {
  closure_0 = arg0;
  closure_1 = arg1;
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
        if (onComplete.toValue instanceof closure_1(start[8])) {
          let tmp4Result = tmp4(tmp5[9]);
          tmp4Result = new tmp4Result(stopTracking, onComplete.toValue, tmp4(tmp5[10]), onComplete, fn);
          stopTracking.track(tmp4Result);
        } else {
          const tmp9 = new tmp4(tmp5[10])(onComplete);
          stopTracking.animate(tmp9, fn);
        }
      }
      if (!fn) {
        fn = onComplete.onComplete;
      }
    } else {
      throw new TypeError("Trying to call a non-function");
    }
  }
  let tmp = maybeVectorAnim(arg0, arg1, springImpl);
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
          const obj = {};
          const merged = Object.assign(closure_1);
          obj.iterations = iterations;
          start(closure_0, obj);
        },
      _isUsingNativeDriver() {
          return closure_1.useNativeDriver || false;
        }
    };
    tmp = obj;
  }
  return tmp;
}
function timingImpl(arg0, arg1) {
  closure_0 = arg0;
  closure_1 = arg1;
  function start(stopTracking, onComplete, arg2) {
    if (typeof closure_1_3 === "function") {
      let fn = arg2;
      closure_0 = arg2;
      closure_1 = onComplete;
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
          let tmp4Result = tmp4(tmp5[9]);
          tmp4Result = new tmp4Result(stopTracking, onComplete.toValue, tmp4(tmp5[11]), onComplete, fn);
          stopTracking.track(tmp4Result);
        } else {
          const tmp9 = new tmp4(tmp5[11])(onComplete);
          stopTracking.animate(tmp9, fn);
        }
      }
      if (!fn) {
        fn = onComplete.onComplete;
      }
    } else {
      throw new TypeError("Trying to call a non-function");
    }
  }
  let tmp = maybeVectorAnim(arg0, arg1, timingImpl);
  if (!tmp) {
    const obj = {
      start(arg0, isLooping) {
          obj = {};
          const merged = Object.assign(c1);
          obj.isLooping = isLooping;
          start(items, obj, arg0);
        },
      stop() {
          items.stopAnimation();
        },
      reset() {
          items.resetAnimation();
        },
      _startNativeLoop(iterations) {
          obj = {};
          const merged = Object.assign(c1);
          obj.iterations = iterations;
          start(items, obj);
        },
      _isUsingNativeDriver() {
          return v0.useNativeDriver || false;
        }
    };
    tmp = obj;
  }
  return tmp;
}
function decayImpl(arg0, arg1) {
  closure_0 = arg0;
  const useNativeDriver = arg1;
  let tmp = maybeVectorAnim(arg0, arg1, decayImpl);
  if (!tmp) {
    let obj = {
      start(arg0) {
          if (typeof _combineCallbacks === "function") {
            let fn = arg0;
            closure_0 = arg0;
            let onComplete = tmp;
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
              const tmp8 = new _modDef386(tmp);
              obj.animate(tmp8, fn);
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
          const obj = {};
          const merged = Object.assign(closure_1);
          obj.iterations = iterations;
          if (typeof _combineCallbacks === "function") {
            obj2.stopTracking();
            const tmp8 = new _modDef386(obj);
            obj2.animate(tmp8, obj.onComplete);
          } else {
            throw new TypeError("Trying to call a non-function");
          }
        },
      _isUsingNativeDriver() {
          return useNativeDriver.useNativeDriver || false;
        }
    };
    tmp = obj;
  }
  return tmp;
}
function sequenceImpl(arg0) {
  closure_0 = arg0;
  c1 = 0;
  return {
    start(fn, arg1) {
      items = fn;
      closure_1 = arg1;
      function onComplete(finished) {
        if (finished.finished) {
          const sum = c1 + 1;
          c1 = sum;
          if (sum === items.length) {
            c1 = 0;
            if (closure_0) {
              tmp10(finished);
            }
          } else {
            tmp5[c1].start(onComplete, closure_1);
          }
        } else if (closure_0) {
          tmp(finished);
        }
      }
      if (0 === items.length) {
        if (fn) {
          fn({ finished: true });
        }
      } else {
        tmp[closure_1].start(onComplete, arg1);
      }
    },
    stop() {
      if (c1 < items.length) {
        tmp[c1].stop();
      }
    },
    reset() {
      const item = items.forEach((reset, index) => {
        if (index <= v0) {
          reset.reset();
        }
      });
      c1 = 0;
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
  closure_0 = arg0;
  c1 = 0;
  closure_2 = {};
  let tmp = stopTogether;
  if (stopTogether) {
    tmp = false === stopTogether.stopTogether;
  }
  closure_3 = !tmp;
  const obj = {
    start(fn, arg1) {
      c1 = arg1;
      if (c1 !== fn.length) {
        const item = fn.forEach((start, index) => {
          if (start) {
            start.start(function cb(finished) {
              closure_2[index] = true;
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
                  tmp2 = c3;
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
  if (typeof timingImpl === "function") {
    closure_0 = tmp2;
    start = function start(stopTracking, onComplete, arg2) {
      if (typeof closure_1_3 === "function") {
        let fn = arg2;
        closure_0 = arg2;
        closure_1 = onComplete;
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
            let tmp4Result = tmp4(tmp5[9]);
            tmp4Result = new tmp4Result(stopTracking, onComplete.toValue, tmp4(tmp5[11]), onComplete, fn);
            stopTracking.track(tmp4Result);
          } else {
            const tmp9 = new tmp4(tmp5[11])(onComplete);
            stopTracking.animate(tmp9, fn);
          }
        }
        if (!fn) {
          fn = onComplete.onComplete;
        }
      } else {
        throw new TypeError("Trying to call a non-function");
      }
    };
    let tmp5 = maybeVectorAnim(tmp2, obj, tmp);
    if (!tmp5) {
      obj = {
        start(arg0, isLooping) {
              obj = {};
              const merged = Object.assign(c1);
              obj.isLooping = isLooping;
              start(items, obj, arg0);
            },
        stop() {
              items.stopAnimation();
            },
        reset() {
              items.resetAnimation();
            },
        _startNativeLoop(iterations) {
              obj = {};
              const merged = Object.assign(c1);
              obj.iterations = iterations;
              start(items, obj);
            },
        _isUsingNativeDriver() {
              return v0.useNativeDriver || false;
            }
      };
      tmp5 = obj;
    }
    return tmp5;
  } else {
    throw new TypeError("Trying to call a non-function");
  }
  tmp = timingImpl;
}

export default {
  Value: fn2(356),
  ValueXY: fn2(373),
  Color: fn2(374),
  Interpolation: fn2(363),
  Node: fn2(367),
  decay: decayImpl,
  timing: timingImpl,
  spring: springImpl,
  add(arg0, arg1) {
    return new _modDef355(arg0, arg1);
  },
  subtract(arg0, arg1) {
    return new _modDef368(arg0, arg1);
  },
  divide(absResult, arg1) {
    return new _modDef369(absResult, arg1);
  },
  multiply(arg0, arg1) {
    return new _modDef370(arg0, arg1);
  },
  modulo(arg0, arg1) {
    return new _modDef371(arg0, arg1);
  },
  diffClamp(interpolateResult, arg1, arg2) {
    return new _modDef372(interpolateResult, arg1, arg2);
  },
  delay: delayImpl,
  sequence: sequenceImpl,
  parallel: parallelImpl,
  stagger(arg0, arr) {
    closure_0 = arg0;
    if (typeof parallelImpl === "function") {
      closure_0 = arr.map((item, index) => {
        if (typeof delayImpl === "function") {
          const tmp8 = new _modDef356(0);
          obj = { toValue: 0, delay: tmp2, duration: 0, useNativeDriver: false };
          if (typeof timingImpl === "function") {
            let items = tmp8;
            c1 = obj;
            function start(stopTracking, onComplete, arg2) {
              if (typeof closure_1_3 === "function") {
                let fn = arg2;
                closure_0 = arg2;
                closure_1 = onComplete;
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
                    let tmp4Result = tmp4(tmp5[9]);
                    tmp4Result = new tmp4Result(stopTracking, onComplete.toValue, tmp4(tmp5[11]), onComplete, fn);
                    stopTracking.track(tmp4Result);
                  } else {
                    const tmp9 = new tmp4(tmp5[11])(onComplete);
                    stopTracking.animate(tmp9, fn);
                  }
                }
                if (!fn) {
                  fn = onComplete.onComplete;
                }
              } else {
                throw new TypeError("Trying to call a non-function");
              }
            }
            let tmp11 = maybeVectorAnim(tmp8, obj, tmp3);
            if (!tmp11) {
              obj = {
                start(arg0, isLooping) {
                        obj = {};
                        const merged = Object.assign(c1);
                        obj.isLooping = isLooping;
                        start(items, obj, arg0);
                      },
                stop() {
                        items.stopAnimation();
                      },
                reset() {
                        items.resetAnimation();
                      },
                _startNativeLoop(iterations) {
                        obj = {};
                        const merged = Object.assign(c1);
                        obj.iterations = iterations;
                        start(items, obj);
                      },
                _isUsingNativeDriver() {
                        return v0.useNativeDriver || false;
                      }
              };
              tmp11 = obj;
            }
            items = [tmp11, item];
            if (typeof tmp === "function") {
              c1 = 0;
              obj = {
                start(fn, arg1) {
                        items = fn;
                        closure_1 = arg1;
                        function onComplete(finished) {
                          if (finished.finished) {
                            const sum = c1 + 1;
                            c1 = sum;
                            if (sum === items.length) {
                              c1 = 0;
                              if (closure_0) {
                                tmp10(finished);
                              }
                            } else {
                              tmp5[c1].start(onComplete, closure_1);
                            }
                          } else if (closure_0) {
                            tmp(finished);
                          }
                        }
                        if (0 === items.length) {
                          if (fn) {
                            fn({ finished: true });
                          }
                        } else {
                          tmp[closure_1].start(onComplete, arg1);
                        }
                      },
                stop() {
                        if (c1 < items.length) {
                          tmp[c1].stop();
                        }
                      },
                reset() {
                        const item = items.forEach((reset, index) => {
                          if (index <= v0) {
                            reset.reset();
                          }
                        });
                        c1 = 0;
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
            } else {
              throw new TypeError("Trying to call a non-function");
            }
          } else {
            throw new TypeError("Trying to call a non-function");
          }
          tmp3 = timingImpl;
        } else {
          throw new TypeError("Trying to call a non-function");
        }
      });
      c1 = 0;
      closure_2 = {};
      c3 = true;
      let obj = {
        start(fn, arg1) {
            c1 = arg1;
            if (c1 !== fn.length) {
              const item = fn.forEach((start, index) => {
                if (start) {
                  start.start(function cb(finished) {
                    closure_2[index] = true;
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
                        tmp2 = c3;
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
        _startNativeLoop() {
            const error = new Error("Loops run using the native driver cannot contain Animated.parallel animations");
            throw error;
          },
        _isUsingNativeDriver() {
            return false;
          }
      };
      return obj;
    } else {
      throw new TypeError("Trying to call a non-function");
    }
  },
  loop(arg0) {
    let navigation = arg0;
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
    closure_4 = 0;
    obj = {
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
        let obj = navigation;
        if (navigation) {
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
      }
    };
    return obj;
  },
  event(dependencyMap, useNativeDriver) {
    const animatedEvent = new AnimatedEvent.AnimatedEvent(dependencyMap, useNativeDriver);
    let __getHandlerResult = animatedEvent;
    if (!animatedEvent.__isNative) {
      __getHandlerResult = animatedEvent.__getHandler();
    }
    return __getHandlerResult;
  },
  createAnimatedComponent: fn2(387),
  attachNativeEvent: fn(384).attachNativeEventImpl,
  forkEvent: function forkEventImpl(__addListener, listener) {
    closure_0 = __addListener;
    if (!__addListener) {
      return listener;
    } else if (__addListener instanceof AnimatedEvent.AnimatedEvent) {
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
  unforkEvent: function unforkEventImpl(__removeListener, arg1) {
    let tmp = __removeListener;
    if (__removeListener) {
      tmp = __removeListener instanceof AnimatedEvent.AnimatedEvent;
    }
    if (tmp) {
      __removeListener.__removeListener(arg1);
    }
  },
  Event: fn(384).AnimatedEvent
};