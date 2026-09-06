// === Module 14408: sendToReactotron ===

// Module 14408 (sendToReactotron)
import asyncGeneratorStep from "asyncGeneratorStep" /* 5 */;

let closure_1 = { ignore: [] };

export default (arg0) => {
  closure_0 = arg0;
  return (asyncStorageHandler) => {
    closure_0 = asyncStorageHandler;
    let obj = closure_0;
    if (!closure_0) {
      obj = {};
    }
    closure_8 = Object.assign({}, ignore, obj).ignore || ignore.ignore;
    c9 = false;
    function sendToReactotron(action, data) {
      closure_0.send("asyncStorage.mutation", { action, data });
    }
    asyncGeneratorStep(async (arg0, value, arg2) => {
      if (c8 === 2) {
        c8 = 3;
        throw new TypeError("Generator functions may not be called on executing generators");
      } else if (tmp6 === 3) {
        if (arg0 === 1) {
          throw value;
        } else if (arg0 === 2) {
          let obj = { value, done: true };
          return obj;
        } else {
          return { value: "HermesInternal", done: null };
        }
      } else {
        try {
          c8 = 2;
          if (0 === c7) {
            if (arg0 === 1) {
              c8 = 3;
              throw value;
            } else if (arg0 === 2) {
              c8 = 3;
              obj = { value, done: true };
              return obj;
            } else {
              closure_4 = tmp3;
              closure_3 = tmp17;
              closure_131_0 = closure_0;
              closure_131_1 = setItem;
              closure_131_2 = closure_2;
              c6 = 1;
              if (c8.indexOf(closure_0) < 0) {
                const entry = { key: tmp25, value: tmp26 };
                sendToReactotron("setItem", entry);
              }
              c6 = 0;
              tmp25 = closure_0;
              tmp26 = setItem;
            }
          } else {
            c6 = 0;
          }
          c8 = 3;
          tmp17 = setItem(closure_131_0, closure_131_1, closure_131_2);
        } catch (tmp18) {
          closure_5 = tmp18;
          if (tmp4 === c6) {
            c8 = tmp2;
            throw tmp18;
          } else {
            c7 = tmp;
          }
        }
      }
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
    asyncGeneratorStep(async (arg0, value) => {
      if (c7 === 2) {
        c7 = 3;
        throw new TypeError("Generator functions may not be called on executing generators");
      } else if (tmp6 === 3) {
        if (arg0 === 1) {
          throw value;
        } else if (arg0 === 2) {
          let obj = { value, done: true };
          return obj;
        } else {
          return { value: "HermesInternal", done: null };
        }
      } else {
        try {
          c7 = 2;
          if (0 === c6) {
            if (arg0 === 1) {
              c7 = 3;
              throw value;
            } else if (arg0 === 2) {
              c7 = 3;
              obj = { value, done: true };
              return obj;
            } else {
              closure_3 = tmp3;
              closure_130_0 = closure_0;
              closure_130_1 = closure_1;
              c5 = 1;
              if (closure_1_8.indexOf(closure_0) < 0) {
                obj = { key: tmp24 };
                sendToReactotron("removeItem", obj);
              }
              c5 = 0;
              tmp24 = closure_0;
            }
          } else {
            c5 = 0;
          }
          c7 = 3;
          tmp16 = tmp16(closure_130_0, closure_130_1);
        } catch (tmp17) {
          closure_4 = tmp17;
          if (tmp4 === c5) {
            c7 = tmp2;
            throw tmp17;
          } else {
            c6 = tmp;
          }
        }
      }
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
    asyncGeneratorStep(async (arg0, value, arg2) => {
      if (c8 === 2) {
        c8 = 3;
        throw new TypeError("Generator functions may not be called on executing generators");
      } else if (tmp6 === 3) {
        if (arg0 === 1) {
          throw value;
        } else if (arg0 === 2) {
          let obj = { value, done: true };
          return obj;
        } else {
          return { value: "HermesInternal", done: null };
        }
      } else {
        try {
          c8 = 2;
          if (0 === c7) {
            if (arg0 === 1) {
              c8 = 3;
              throw value;
            } else if (arg0 === 2) {
              c8 = 3;
              obj = { value, done: true };
              return obj;
            } else {
              closure_4 = tmp3;
              closure_131_0 = closure_0;
              closure_131_1 = closure_1;
              closure_131_2 = closure_2;
              c6 = 1;
              if (c8.indexOf(closure_0) < 0) {
                const entry = { key: tmp25, value: tmp26 };
                sendToReactotron("mergeItem", entry);
              }
              c6 = 0;
              tmp25 = closure_0;
              tmp26 = closure_1;
            }
          } else {
            c6 = 0;
          }
          c8 = 3;
          tmp17 = tmp17(closure_131_0, closure_131_1, closure_131_2);
        } catch (tmp18) {
          closure_5 = tmp18;
          if (tmp4 === c6) {
            c8 = tmp2;
            throw tmp18;
          } else {
            c7 = tmp;
          }
        }
      }
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
    asyncGeneratorStep(async (arg0, value) => {
      if (c6 === 2) {
        c6 = 3;
        throw new TypeError("Generator functions may not be called on executing generators");
      } else if (tmp6 === 3) {
        if (arg0 === 1) {
          throw value;
        } else if (arg0 === 2) {
          let obj = { value, done: true };
          return obj;
        } else {
          return { value: "HermesInternal", done: null };
        }
      } else {
        try {
          c6 = 2;
          if (0 === c5) {
            if (arg0 === 1) {
              c6 = 3;
              throw value;
            } else if (arg0 === 2) {
              c6 = 3;
              obj = { value, done: true };
              return obj;
            } else {
              closure_2 = tmp3;
              closure_1 = tmp16;
              closure_129_0 = closure_0;
              let v0 = 1;
              sendToReactotron("clear");
              v0 = 0;
            }
          } else {
            v0 = 0;
          }
          c6 = 3;
          tmp16 = v0(closure_129_0);
        } catch (tmp17) {
          closure_3 = tmp17;
          if (tmp4 === v0) {
            c6 = tmp2;
            throw tmp17;
          } else {
            c5 = tmp;
          }
        }
      }
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
    asyncGeneratorStep(async (arg0, value) => {
      if (c7 === 2) {
        c7 = 3;
        throw new TypeError("Generator functions may not be called on executing generators");
      } else if (tmp6 === 3) {
        if (arg0 === 1) {
          throw value;
        } else if (arg0 === 2) {
          let obj = { value, done: true };
          return obj;
        } else {
          return { value: "HermesInternal", done: null };
        }
      } else {
        try {
          c7 = 2;
          if (0 === c6) {
            if (arg0 === 1) {
              c7 = 3;
              throw value;
            } else if (arg0 === 2) {
              c7 = 3;
              obj = { value, done: true };
              return obj;
            } else {
              closure_3 = tmp3;
              closure_2 = tmp16;
              let items = closure_0;
              closure_130_0 = closure_0;
              closure_130_1 = closure_1;
              let v0 = 1;
              if (!closure_0) {
                items = [];
              }
              const found = items.filter((item) => {
                let first = item;
                if (item) {
                  first = item[0];
                }
                if (first) {
                  first = closure_1_8.indexOf(item[0]) < 0;
                }
                return first;
              });
              if (found.length > 0) {
                obj = { pairs: found };
                sendToReactotron("multiSet", obj);
              }
              v0 = 0;
            }
          } else {
            v0 = 0;
          }
          c7 = 3;
          tmp16 = v0(closure_130_0, closure_130_1);
        } catch (tmp17) {
          closure_4 = tmp17;
          if (tmp4 === v0) {
            c7 = tmp2;
            throw tmp17;
          } else {
            c6 = tmp;
          }
        }
      }
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
    asyncGeneratorStep(async (arg0, value) => {
      if (c7 === 2) {
        c7 = 3;
        throw new TypeError("Generator functions may not be called on executing generators");
      } else if (tmp6 === 3) {
        if (arg0 === 1) {
          throw value;
        } else if (arg0 === 2) {
          let obj = { value, done: true };
          return obj;
        } else {
          return { value: "HermesInternal", done: null };
        }
      } else {
        try {
          c7 = 2;
          if (0 === v0) {
            if (arg0 === 1) {
              c7 = 3;
              throw value;
            } else if (arg0 === 2) {
              c7 = 3;
              obj = { value, done: true };
              return obj;
            } else {
              closure_3 = tmp3;
              closure_2 = tmp16;
              let items = closure_0;
              closure_130_0 = closure_0;
              closure_130_1 = closure_1;
              c5 = 1;
              if (!closure_0) {
                items = [];
              }
              const found = items.filter((item) => closure_1_8.indexOf(item) < 0);
              if (found.length > 0) {
                obj = { keys: found };
                sendToReactotron("multiRemove", obj);
              }
              c5 = 0;
            }
          } else {
            c5 = 0;
          }
          c7 = 3;
          tmp16 = v0(closure_130_0, closure_130_1);
        } catch (tmp17) {
          closure_4 = tmp17;
          if (tmp4 === c5) {
            c7 = tmp2;
            throw tmp17;
          } else {
            v0 = tmp;
          }
        }
      }
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
    closure_0 = asyncGeneratorStep(async (arg0, value) => {
      if (v3 === 2) {
        v3 = 3;
        throw new TypeError("Generator functions may not be called on executing generators");
      } else if (tmp6 === 3) {
        if (arg0 === 1) {
          throw value;
        } else if (arg0 === 2) {
          let obj = { value, done: true };
          return obj;
        } else {
          return { value: "HermesInternal", done: null };
        }
      } else {
        try {
          v3 = 2;
          if (0 === c6) {
            if (arg0 === 1) {
              v3 = 3;
              throw value;
            } else if (arg0 === 2) {
              v3 = 3;
              obj = { value, done: true };
              return obj;
            } else {
              closure_3 = tmp3;
              closure_2 = tmp16;
              let items = closure_0;
              closure_130_0 = closure_0;
              closure_130_1 = closure_1;
              c5 = 1;
              if (!closure_0) {
                items = [];
              }
              const found = items.filter((item) => {
                let first = item;
                if (item) {
                  first = item[0];
                }
                if (first) {
                  first = closure_1_8.indexOf(item[0]) < 0;
                }
                return first;
              });
              if (found.length > 0) {
                obj = { pairs: found };
                sendToReactotron("multiMerge", obj);
              }
              c5 = 0;
            }
          } else {
            c5 = 0;
          }
          v3 = 3;
          tmp16 = v3(closure_130_0, closure_130_1);
        } catch (tmp17) {
          closure_4 = tmp17;
          if (tmp4 === c5) {
            v3 = tmp2;
            throw tmp17;
          } else {
            c6 = tmp;
          }
        }
      }
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
    obj = {
      features: {
        trackAsyncStorage() {
          if (!c9) {
            setItem = closure_0.asyncStorageHandler.setItem;
            closure_0.asyncStorageHandler.setItem = setItem;
            removeItem = closure_0.asyncStorageHandler.removeItem;
            closure_0.asyncStorageHandler.removeItem = removeItem;
            mergeItem = closure_0.asyncStorageHandler.mergeItem;
            closure_0.asyncStorageHandler.mergeItem = mergeItem;
            clear = closure_0.asyncStorageHandler.clear;
            closure_0.asyncStorageHandler.clear = clear;
            multiSet = closure_0.asyncStorageHandler.multiSet;
            closure_0.asyncStorageHandler.multiSet = multiSet;
            multiRemove = closure_0.asyncStorageHandler.multiRemove;
            closure_0.asyncStorageHandler.multiRemove = multiRemove;
            multiMerge = closure_0.asyncStorageHandler.multiMerge;
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
      }
    };
    return obj;
  };
};