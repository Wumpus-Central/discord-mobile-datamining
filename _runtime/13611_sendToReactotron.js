// _runtime/13611_sendToReactotron.js
import asyncGeneratorStep from "asyncGeneratorStep";

let closure_1 = { ignore: [] };

export default (arg0) => {
  let closure_0 = arg0;
  return (asyncStorageHandler) => {
    let callback = asyncStorageHandler;
    let features = callback;
    if (!callback) {
      features = {};
    }
    let closure_8 = Object.assign({}, outer1_1, features).ignore || outer1_1.ignore;
    let c9 = false;
    function sendToReactotron(action, data) {
      closure_0.send("asyncStorage.mutation", { action, data });
    }
    callback = undefined;
    callback = callback((arg0, arg1, arg2) => {
      let closure_0 = arg0;
      let closure_1 = arg1;
      let closure_2 = arg2;
      let c7 = 0;
      let c8 = 0;
      let c6 = 0;
      return (function*(arg0, arg1, arg2) {
        if (c8 === 2) {
          c8 = 3;
          HermesBuiltin.throwTypeError();
        } else if (tmp6 === 3) {
          if (arg0 === 1) {
            throw arg1;
          } else if (arg0 === 2) {
            let obj = { value: null, done: true };
            obj[0] = arg1;
            return obj;
          } else {
            return { value: "T", done: null };
          }
        } else {
          try {
            c8 = 2;
            if (0 === c7) {
              if (arg0 === 1) {
                c8 = 3;
                throw arg1;
              } else if (arg0 === 2) {
                c8 = 3;
                obj = { value: null, done: true };
                obj[0] = arg1;
                return obj;
              } else {
                let closure_4 = tmp3;
                let closure_3 = tmp17;
                let c6 = 1;
                if (c8.indexOf(closure_0) < 0) {
                  obj = { key: null, value: null };
                  obj[0] = tmp26;
                  obj[1] = tmp27;
                  outer1_10("setItem", obj);
                }
                c6 = 0;
                tmp26 = closure_0;
                tmp27 = callback;
              }
            } else {
              c6 = 0;
            }
            c8 = 3;
            tmp17 = callback(closure_0, callback, closure_2);
          } catch (tmp18) {
            let closure_5 = tmp18;
            if (tmp4 === c6) {
              c8 = tmp2;
              throw tmp18;
            } else {
              c7 = tmp;
            }
          }
        }
      })();
    });
    function setItem(arg0, arg1, arg2) {
      const self = this;
      const apply = closure_0.apply;
      if (typeof apply === "unknown") {
        let applyArgumentsResult = HermesBuiltin.applyArguments(self);
      } else {
        applyArgumentsResult = apply(self, arguments);
      }
      return applyArgumentsResult;
    }
    callback = callback((arg0, arg1) => {
      let closure_0 = arg0;
      let closure_1 = arg1;
      let c6 = 0;
      let c7 = 0;
      let c5 = 0;
      return (function*(arg0, arg1) {
        if (c7 === 2) {
          c7 = 3;
          HermesBuiltin.throwTypeError();
        } else if (tmp6 === 3) {
          if (arg0 === 1) {
            throw arg1;
          } else if (arg0 === 2) {
            let obj = { value: null, done: true };
            obj[0] = arg1;
            return obj;
          } else {
            return { value: "T", done: null };
          }
        } else {
          try {
            c7 = 2;
            if (0 === c6) {
              if (arg0 === 1) {
                c7 = 3;
                throw arg1;
              } else if (arg0 === 2) {
                c7 = 3;
                obj = { value: null, done: true };
                obj[0] = arg1;
                return obj;
              } else {
                let closure_3 = tmp3;
                let closure_2 = tmp16;
                let c5 = 1;
                if (outer1_8.indexOf(closure_0) < 0) {
                  obj = { key: null };
                  obj[0] = tmp25;
                  outer1_10("removeItem", obj);
                }
                c5 = 0;
                tmp25 = closure_0;
              }
            } else {
              c5 = 0;
            }
            c7 = 3;
            tmp16 = outer1_2(closure_0, closure_1);
          } catch (tmp17) {
            let closure_4 = tmp17;
            if (tmp4 === c5) {
              c7 = tmp2;
              throw tmp17;
            } else {
              c6 = tmp;
            }
          }
        }
      })();
    });
    function removeItem(arg0, arg1) {
      const self = this;
      const apply = closure_0.apply;
      if (typeof apply === "unknown") {
        let applyArgumentsResult = HermesBuiltin.applyArguments(self);
      } else {
        applyArgumentsResult = apply(self, arguments);
      }
      return applyArgumentsResult;
    }
    callback = callback((arg0, arg1, arg2) => {
      let closure_0 = arg0;
      let closure_1 = arg1;
      let closure_2 = arg2;
      let c7 = 0;
      let c8 = 0;
      let c6 = 0;
      return (function*(arg0, arg1, arg2) {
        if (c8 === 2) {
          c8 = 3;
          HermesBuiltin.throwTypeError();
        } else if (tmp6 === 3) {
          if (arg0 === 1) {
            throw arg1;
          } else if (arg0 === 2) {
            let obj = { value: null, done: true };
            obj[0] = arg1;
            return obj;
          } else {
            return { value: "T", done: null };
          }
        } else {
          try {
            c8 = 2;
            if (0 === c7) {
              if (arg0 === 1) {
                c8 = 3;
                throw arg1;
              } else if (arg0 === 2) {
                c8 = 3;
                obj = { value: null, done: true };
                obj[0] = arg1;
                return obj;
              } else {
                let closure_4 = tmp3;
                let closure_3 = tmp17;
                let c6 = 1;
                if (c8.indexOf(closure_0) < 0) {
                  obj = { key: null, value: null };
                  obj[0] = tmp26;
                  obj[1] = tmp27;
                  outer1_10("mergeItem", obj);
                }
                c6 = 0;
                tmp26 = closure_0;
                tmp27 = closure_1;
              }
            } else {
              c6 = 0;
            }
            c8 = 3;
            tmp17 = outer1_3(closure_0, closure_1, closure_2);
          } catch (tmp18) {
            let closure_5 = tmp18;
            if (tmp4 === c6) {
              c8 = tmp2;
              throw tmp18;
            } else {
              c7 = tmp;
            }
          }
        }
      })();
    });
    function mergeItem(arg0, arg1, arg2) {
      const self = this;
      const apply = closure_0.apply;
      if (typeof apply === "unknown") {
        let applyArgumentsResult = HermesBuiltin.applyArguments(self);
      } else {
        applyArgumentsResult = apply(self, arguments);
      }
      return applyArgumentsResult;
    }
    callback = callback((arg0) => {
      let closure_0 = arg0;
      let c5 = 0;
      let c6 = 0;
      let c4 = 0;
      return (function*(arg0) {
        if (c6 === 2) {
          c6 = 3;
          HermesBuiltin.throwTypeError();
        } else if (tmp6 === 3) {
          if (arg0 === 1) {
            throw arg1;
          } else if (arg0 === 2) {
            let obj = { value: null, done: true };
            obj[0] = arg1;
            return obj;
          } else {
            return { value: "T", done: null };
          }
        } else {
          try {
            c6 = 2;
            if (0 === c5) {
              if (arg0 === 1) {
                c6 = 3;
                throw arg1;
              } else if (arg0 === 2) {
                c6 = 3;
                obj = { value: null, done: true };
                obj[0] = arg1;
                return obj;
              } else {
                let closure_2 = tmp3;
                let closure_1 = tmp16;
                let v0 = 1;
                outer1_10("clear");
                v0 = 0;
              }
            } else {
              v0 = 0;
            }
            c6 = 3;
            tmp16 = v0(closure_0);
          } catch (tmp17) {
            let closure_3 = tmp17;
            if (tmp4 === v0) {
              c6 = tmp2;
              throw tmp17;
            } else {
              c5 = tmp;
            }
          }
        }
      })();
    });
    function clear(arg0) {
      const self = this;
      const apply = closure_0.apply;
      if (typeof apply === "unknown") {
        let applyArgumentsResult = HermesBuiltin.applyArguments(self);
      } else {
        applyArgumentsResult = apply(self, arguments);
      }
      return applyArgumentsResult;
    }
    callback = callback((arg0, arg1) => {
      let closure_0 = arg0;
      let closure_1 = arg1;
      let c6 = 0;
      let c7 = 0;
      let c5 = 0;
      return (function*(arg0, arg1) {
        if (c7 === 2) {
          c7 = 3;
          HermesBuiltin.throwTypeError();
        } else if (tmp6 === 3) {
          if (arg0 === 1) {
            throw arg1;
          } else if (arg0 === 2) {
            let obj = { value: null, done: true };
            obj[0] = arg1;
            return obj;
          } else {
            return { value: "T", done: null };
          }
        } else {
          try {
            c7 = 2;
            if (0 === c6) {
              if (arg0 === 1) {
                c7 = 3;
                throw arg1;
              } else if (arg0 === 2) {
                c7 = 3;
                obj = { value: null, done: true };
                obj[0] = arg1;
                return obj;
              } else {
                let closure_3 = tmp3;
                let closure_2 = tmp16;
                let items = closure_0;
                let v0 = 1;
                if (!closure_0) {
                  items = [];
                }
                const found = items.filter((arg0) => {
                  let first = arg0;
                  if (arg0) {
                    first = arg0[0];
                  }
                  if (first) {
                    first = closure_8.indexOf(arg0[0]) < 0;
                  }
                  return first;
                });
                if (found.length > 0) {
                  obj = { pairs: null };
                  obj[0] = found;
                  outer1_10("multiSet", obj);
                }
                v0 = 0;
              }
            } else {
              v0 = 0;
            }
            c7 = 3;
            tmp16 = v0(closure_0, closure_1);
          } catch (tmp17) {
            let closure_4 = tmp17;
            if (tmp4 === v0) {
              c7 = tmp2;
              throw tmp17;
            } else {
              c6 = tmp;
            }
          }
        }
      })();
    });
    function multiSet(arg0, arg1) {
      const self = this;
      const apply = closure_0.apply;
      if (typeof apply === "unknown") {
        let applyArgumentsResult = HermesBuiltin.applyArguments(self);
      } else {
        applyArgumentsResult = apply(self, arguments);
      }
      return applyArgumentsResult;
    }
    callback = callback((arg0, arg1) => {
      let closure_0 = arg0;
      let closure_1 = arg1;
      let c6 = 0;
      let c7 = 0;
      let c5 = 0;
      return (function*(arg0, arg1) {
        if (c7 === 2) {
          c7 = 3;
          HermesBuiltin.throwTypeError();
        } else if (tmp6 === 3) {
          if (arg0 === 1) {
            throw arg1;
          } else if (arg0 === 2) {
            let obj = { value: null, done: true };
            obj[0] = arg1;
            return obj;
          } else {
            return { value: "T", done: null };
          }
        } else {
          try {
            c7 = 2;
            if (0 === v0) {
              if (arg0 === 1) {
                c7 = 3;
                throw arg1;
              } else if (arg0 === 2) {
                c7 = 3;
                obj = { value: null, done: true };
                obj[0] = arg1;
                return obj;
              } else {
                let closure_3 = tmp3;
                let closure_2 = tmp16;
                let items = closure_0;
                let c5 = 1;
                if (!closure_0) {
                  items = [];
                }
                const found = items.filter((arg0) => closure_8.indexOf(arg0) < 0);
                if (found.length > 0) {
                  obj = { keys: null };
                  obj[0] = found;
                  outer1_10("multiRemove", obj);
                }
                c5 = 0;
              }
            } else {
              c5 = 0;
            }
            c7 = 3;
            tmp16 = v0(closure_0, closure_1);
          } catch (tmp17) {
            let closure_4 = tmp17;
            if (tmp4 === c5) {
              c7 = tmp2;
              throw tmp17;
            } else {
              v0 = tmp;
            }
          }
        }
      })();
    });
    function multiRemove(arg0, arg1) {
      const self = this;
      const apply = closure_0.apply;
      if (typeof apply === "unknown") {
        let applyArgumentsResult = HermesBuiltin.applyArguments(self);
      } else {
        applyArgumentsResult = apply(self, arguments);
      }
      return applyArgumentsResult;
    }
    callback = callback((arg0, arg1) => {
      let closure_0 = arg0;
      let closure_1 = arg1;
      let c6 = 0;
      let c7 = 0;
      let c5 = 0;
      return (function*(arg0, arg1) {
        if (v0 === 2) {
          v0 = 3;
          HermesBuiltin.throwTypeError();
        } else if (tmp6 === 3) {
          if (arg0 === 1) {
            throw arg1;
          } else if (arg0 === 2) {
            let obj = { value: null, done: true };
            obj[0] = arg1;
            return obj;
          } else {
            return { value: "T", done: null };
          }
        } else {
          try {
            v0 = 2;
            if (0 === c6) {
              if (arg0 === 1) {
                v0 = 3;
                throw arg1;
              } else if (arg0 === 2) {
                v0 = 3;
                obj = { value: null, done: true };
                obj[0] = arg1;
                return obj;
              } else {
                let closure_3 = tmp3;
                let closure_2 = tmp16;
                let items = closure_0;
                let c5 = 1;
                if (!closure_0) {
                  items = [];
                }
                const found = items.filter((arg0) => {
                  let first = arg0;
                  if (arg0) {
                    first = arg0[0];
                  }
                  if (first) {
                    first = closure_8.indexOf(arg0[0]) < 0;
                  }
                  return first;
                });
                if (found.length > 0) {
                  obj = { pairs: null };
                  obj[0] = found;
                  outer1_10("multiMerge", obj);
                }
                c5 = 0;
              }
            } else {
              c5 = 0;
            }
            v0 = 3;
            tmp16 = v0(closure_0, closure_1);
          } catch (tmp17) {
            let closure_4 = tmp17;
            if (tmp4 === c5) {
              v0 = tmp2;
              throw tmp17;
            } else {
              c6 = tmp;
            }
          }
        }
      })();
    });
    function multiMerge(arg0, arg1) {
      const self = this;
      const apply = closure_0.apply;
      if (typeof apply === "unknown") {
        let applyArgumentsResult = HermesBuiltin.applyArguments(self);
      } else {
        applyArgumentsResult = apply(self, arguments);
      }
      return applyArgumentsResult;
    }
    if (asyncStorageHandler.asyncStorageHandler) {
      if (!c9) {
        setItem = asyncStorageHandler.asyncStorageHandler.setItem;
        asyncStorageHandler.asyncStorageHandler.setItem = setItem;
        removeItem = asyncStorageHandler.asyncStorageHandler.removeItem;
        asyncStorageHandler.asyncStorageHandler.removeItem = removeItem;
        mergeItem = asyncStorageHandler.asyncStorageHandler.mergeItem;
        asyncStorageHandler.asyncStorageHandler.mergeItem = mergeItem;
        clear = asyncStorageHandler.asyncStorageHandler.clear;
        asyncStorageHandler.asyncStorageHandler.clear = clear;
        multiSet = asyncStorageHandler.asyncStorageHandler.multiSet;
        asyncStorageHandler.asyncStorageHandler.multiSet = multiSet;
        multiRemove = asyncStorageHandler.asyncStorageHandler.multiRemove;
        asyncStorageHandler.asyncStorageHandler.multiRemove = multiRemove;
        multiMerge = asyncStorageHandler.asyncStorageHandler.multiMerge;
        asyncStorageHandler.asyncStorageHandler.multiMerge = multiMerge;
        c9 = true;
      }
    }
    features = {
      trackAsyncStorage() {
        if (!c9) {
          const setItem = closure_0.asyncStorageHandler.setItem;
          closure_0.asyncStorageHandler.setItem = setItem;
          const removeItem = closure_0.asyncStorageHandler.removeItem;
          closure_0.asyncStorageHandler.removeItem = removeItem;
          const mergeItem = closure_0.asyncStorageHandler.mergeItem;
          closure_0.asyncStorageHandler.mergeItem = mergeItem;
          const clear = closure_0.asyncStorageHandler.clear;
          closure_0.asyncStorageHandler.clear = clear;
          const multiSet = closure_0.asyncStorageHandler.multiSet;
          closure_0.asyncStorageHandler.multiSet = multiSet;
          const multiRemove = closure_0.asyncStorageHandler.multiRemove;
          closure_0.asyncStorageHandler.multiRemove = multiRemove;
          const multiMerge = closure_0.asyncStorageHandler.multiMerge;
          closure_0.asyncStorageHandler.multiMerge = multiMerge;
          c9 = true;
        }
      },
      untrackAsyncStorage() {
        if (c9) {
          closure_0.asyncStorageHandler.setItem = setItem;
          closure_0.asyncStorageHandler.removeItem = removeItem;
          closure_0.asyncStorageHandler.mergeItem = mergeItem;
          closure_0.asyncStorageHandler.clear = clear;
          closure_0.asyncStorageHandler.multiSet = multiSet;
          closure_0.asyncStorageHandler.multiRemove = multiRemove;
          closure_0.asyncStorageHandler.multiMerge = multiMerge;
          c9 = false;
        }
      }
    };
    return { features };
  };
};