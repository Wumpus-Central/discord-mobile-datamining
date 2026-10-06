// _runtime/metro/14192__asyncToGenerator.js
import _asyncToGenerator from "00005__asyncToGenerator.js";

let closure_5;

let closure_1 = { ignore: [] };

export default (arg0) => {
  let ignore;
  let closure_0 = arg0;
  return (asyncStorageHandler) => {
    closure_0 = asyncStorageHandler;
    let obj = closure_0;
    const _Object = Object;
    if (!closure_0) {
      obj = {};
    }
    let closure_8 = assign({}, ignore, obj).ignore || ignore.ignore;
    let c9 = false;
    function sendToReactotron(action, data) {
      const obj = { action, data };
      closure_0.send("asyncStorage.mutation", obj);
    }
    assign({}, ignore, obj).ignore || ignore.ignore;
    _asyncToGenerator(async (key, value, arg2) => {
      let closure_2 = arg2;
      let c7 = 0;
      let c8 = 0;
      let c6 = 0;
      return (async (arg0, value, arg2) => {
        let tmp6;
        if (c8 === 2) {
          c8 = 3;
          throw new TypeError("Generator functions may not be called on executing generators");
        } else if (tmp3 === 3) {
          if (arg0 === 1) {
            throw value;
          } else if (arg0 === 2) {
            return { value, done: true };
          } else {
            return { value: "IconComponent", done: null };
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
                return { value, done: true };
              } else {
                closure_4 = tmp;
                closure_3 = tmp6;
                c6 = 1;
                tmp6 = c8;
                if (c8.indexOf(key) < 0) {
                  tmp6 = closure_1_10;
                  const entry = { key, value };
                  closure_1_10("setItem", entry);
                }
                c6 = 0;
              }
            } else {
              c6 = 0;
            }
            tmp6 = value(key, value, closure_2);
            c8 = 3;
            return { value: tmp6, done: true };
          } catch (tmp14) {
            closure_5 = tmp14;
            if (0 === c6) {
              c8 = 3;
              throw tmp14;
            } else {
              c7 = 1;
            }
          }
        }
      })();
    });
    function setItem(arg0, arg1, arg2) {
      return closure_0(...arguments);
    }
    _asyncToGenerator(async (key, arg1) => {
      let closure_2;
      closure_1 = arg1;
      let c6 = 0;
      let c7 = 0;
      let c5 = 0;
      return (async (arg0, value) => {
        if (c7 === 2) {
          c7 = 3;
          throw new TypeError("Generator functions may not be called on executing generators");
        } else if (tmp3 === 3) {
          if (arg0 === 1) {
            throw value;
          } else if (arg0 === 2) {
            return { value, done: true };
          } else {
            return { value: "IconComponent", done: null };
          }
        } else {
          try {
            let tmp6;
            c7 = 2;
            if (0 === c6) {
              if (arg0 === 1) {
                c7 = 3;
                throw value;
              } else if (arg0 === 2) {
                c7 = 3;
                return { value, done: true };
              } else {
                closure_3 = tmp;
                c5 = 1;
                tmp6 = closure_1_8;
                if (closure_1_8.indexOf(key) < 0) {
                  tmp6 = closure_1_10;
                  const obj = { key };
                  closure_1_10("removeItem", obj);
                }
                c5 = 0;
              }
            } else {
              c5 = 0;
            }
            tmp6 = tmp6(key, closure_1);
            c7 = 3;
            return { value: tmp6, done: true };
          } catch (tmp13) {
            closure_4 = tmp13;
            if (0 === c5) {
              c7 = 3;
              throw tmp13;
            } else {
              c6 = 1;
            }
          }
        }
      })();
    });
    function removeItem(arg0, arg1) {
      return closure_0(...arguments);
    }
    _asyncToGenerator(async (key, value, arg2) => {
      let closure_3;
      let closure_2 = arg2;
      let c7 = 0;
      let c8 = 0;
      let c6 = 0;
      return (async (arg0, value, arg2) => {
        if (c8 === 2) {
          c8 = 3;
          throw new TypeError("Generator functions may not be called on executing generators");
        } else if (tmp3 === 3) {
          if (arg0 === 1) {
            throw value;
          } else if (arg0 === 2) {
            return { value, done: true };
          } else {
            return { value: "IconComponent", done: null };
          }
        } else {
          try {
            let tmp6;
            c8 = 2;
            if (0 === c7) {
              if (arg0 === 1) {
                c8 = 3;
                throw value;
              } else if (arg0 === 2) {
                c8 = 3;
                return { value, done: true };
              } else {
                closure_4 = tmp;
                c6 = 1;
                tmp6 = c8;
                if (c8.indexOf(key) < 0) {
                  tmp6 = closure_1_10;
                  const entry = { key, value };
                  closure_1_10("mergeItem", entry);
                }
                c6 = 0;
              }
            } else {
              c6 = 0;
            }
            tmp6 = tmp6(key, value, closure_2);
            c8 = 3;
            return { value: tmp6, done: true };
          } catch (tmp14) {
            closure_5 = tmp14;
            if (0 === c6) {
              c8 = 3;
              throw tmp14;
            } else {
              c7 = 1;
            }
          }
        }
      })();
    });
    function mergeItem(arg0, arg1, arg2) {
      return closure_0(...arguments);
    }
    _asyncToGenerator(async (arg0) => {
      let tmp13;
      closure_0 = arg0;
      if (c6 === 2) {
        c6 = 3;
        throw new TypeError("Generator functions may not be called on executing generators");
      } else if (tmp3 === 3) {
        if (arg0 === 1) {
          throw value;
        } else if (arg0 === 2) {
          const obj2 = { value, done: true };
          return obj2;
        } else {
          return { value: "IconComponent", done: null };
        }
      } else {
        let v0;
        try {
          c6 = 2;
          if (0 === c5) {
            if (arg0 === 1) {
              c6 = 3;
              throw value;
            } else if (arg0 === 2) {
              c6 = 3;
              const obj3 = { value, done: true };
              return obj3;
            } else {
              let closure_2 = tmp;
              closure_1 = tmp13;
              closure_1_10("clear");
              v0 = 0;
            }
          } else {
            v0 = 0;
          }
          tmp13 = v0(closure_0);
          c6 = 3;
          const obj = { value: tmp13, done: true };
          return obj;
        } catch (tmp14) {
          let closure_3 = tmp14;
          if (0 === v0) {
            c6 = 3;
            throw tmp14;
          } else {
            c5 = 1;
          }
        }
      }
    });
    function clear(arg0) {
      return closure_0(...arguments);
    }
    _asyncToGenerator(async (arg0, arg1) => {
      let tmp;
      closure_0 = arg0;
      closure_1 = arg1;
      if (c7 === 2) {
        c7 = 3;
        throw new TypeError("Generator functions may not be called on executing generators");
      } else if (tmp3 === 3) {
        if (arg0 === 1) {
          throw value;
        } else if (arg0 === 2) {
          const obj2 = { value, done: true };
          return obj2;
        } else {
          return { value: "IconComponent", done: null };
        }
      } else {
        let v0;
        try {
          let filter;
          c7 = 2;
          if (0 === c6) {
            if (arg0 === 1) {
              c7 = 3;
              throw value;
            } else if (arg0 === 2) {
              c7 = 3;
              const obj3 = { value, done: true };
              return obj3;
            } else {
              let closure_3 = tmp;
              let items = closure_0;
              v0 = 1;
              if (!closure_0) {
                items = [];
              }
              filter = items.filter;
              const found = filter((arg0) => {
                const tmp = arg0 && arg0[0] && closure_1_8.indexOf(arg0[0]) < 0;
                return tmp;
              });
              if (found.length > 0) {
                filter = closure_1_10;
                const obj = { pairs: found };
                closure_1_10("multiSet", obj);
              }
              v0 = 0;
            }
          } else {
            v0 = 0;
          }
          filter = v0(closure_0, closure_1);
          c7 = 3;
          const obj4 = { value: filter, done: true };
          return obj4;
        } catch (tmp12) {
          let closure_4 = tmp12;
          if (0 === v0) {
            c7 = 3;
            throw tmp12;
          } else {
            c6 = 1;
          }
        }
      }
    });
    function multiSet(arg0, arg1) {
      return closure_0(...arguments);
    }
    _asyncToGenerator(async (arg0, arg1) => {
      let v1;
      closure_0 = arg0;
      closure_1 = arg1;
      if (c7 === 2) {
        c7 = 3;
        throw new TypeError("Generator functions may not be called on executing generators");
      } else if (tmp3 === 3) {
        if (arg0 === 1) {
          throw value;
        } else if (arg0 === 2) {
          const obj2 = { value, done: true };
          return obj2;
        } else {
          return { value: "IconComponent", done: null };
        }
      } else {
        let c5;
        try {
          let filter;
          c7 = 2;
          if (0 === v1) {
            if (arg0 === 1) {
              c7 = 3;
              throw value;
            } else if (arg0 === 2) {
              c7 = 3;
              const obj3 = { value, done: true };
              return obj3;
            } else {
              let closure_3 = tmp;
              let items = closure_0;
              c5 = 1;
              if (!closure_0) {
                items = [];
              }
              filter = items.filter;
              const found = filter((arg0) => closure_1_8.indexOf(arg0) < 0);
              if (found.length > 0) {
                filter = closure_1_10;
                const obj = { keys: found };
                closure_1_10("multiRemove", obj);
              }
              c5 = 0;
            }
          } else {
            c5 = 0;
          }
          filter = v1(closure_0, closure_1);
          c7 = 3;
          const obj4 = { value: filter, done: true };
          return obj4;
        } catch (tmp12) {
          let closure_4 = tmp12;
          if (0 === c5) {
            c7 = 3;
            throw tmp12;
          } else {
            v1 = 1;
          }
        }
      }
    });
    function multiRemove(arg0, arg1) {
      return closure_0(...arguments);
    }
    closure_0 = _asyncToGenerator(async (arg0, arg1) => {
      let tmp;
      let v3;
      closure_0 = arg0;
      closure_1 = arg1;
      if (v3 === 2) {
        v3 = 3;
        throw new TypeError("Generator functions may not be called on executing generators");
      } else if (tmp3 === 3) {
        if (arg0 === 1) {
          throw value;
        } else if (arg0 === 2) {
          const obj2 = { value, done: true };
          return obj2;
        } else {
          return { value: "IconComponent", done: null };
        }
      } else {
        let c5;
        try {
          let filter;
          v3 = 2;
          if (0 === c6) {
            if (arg0 === 1) {
              v3 = 3;
              throw value;
            } else if (arg0 === 2) {
              v3 = 3;
              const obj3 = { value, done: true };
              return obj3;
            } else {
              let closure_3 = tmp;
              let items = closure_0;
              c5 = 1;
              if (!closure_0) {
                items = [];
              }
              filter = items.filter;
              const found = filter((arg0) => {
                const tmp = arg0 && arg0[0] && closure_1_8.indexOf(arg0[0]) < 0;
                return tmp;
              });
              if (found.length > 0) {
                filter = closure_1_10;
                const obj = { pairs: found };
                closure_1_10("multiMerge", obj);
              }
              c5 = 0;
            }
          } else {
            c5 = 0;
          }
          filter = v3(closure_0, closure_1);
          v3 = 3;
          const obj4 = { value: filter, done: true };
          return obj4;
        } catch (tmp12) {
          let closure_4 = tmp12;
          if (0 === c5) {
            v3 = 3;
            throw tmp12;
          } else {
            c6 = 1;
          }
        }
      }
    });
    function multiMerge(arg0, arg1) {
      return closure_0(...arguments);
    }
    if (asyncStorageHandler.asyncStorageHandler) {
      const tmp3 = c9;
      if (!tmp3) {
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
    let obj2 = {
      features: {
        trackAsyncStorage() {
          const tmp = c9;
          if (!tmp) {
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
          const tmp = c9;
          if (tmp) {
            closure_0.asyncStorageHandler.setItem = setItem;
            closure_0.asyncStorageHandler.removeItem = removeItem;
            closure_0.asyncStorageHandler.mergeItem = mergeItem;
            closure_0.asyncStorageHandler.clear = clear;
            closure_0.asyncStorageHandler.multiSet = multiSet;
            closure_0.asyncStorageHandler.multiRemove = multiRemove;
            closure_0.asyncStorageHandler.multiMerge = multiMerge;
            c9 = false;
          }
        },
      },
    };
    return obj2;
  };
};
