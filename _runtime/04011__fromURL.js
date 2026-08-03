import _fromFileURL from "asyncGeneratorStep";
import { Image as _fromResource } from "get ActivityIndicator";
import { NitroModules } from "module_3987";

let _fromBytes = NitroModules.createHybridObject("RiveFileFactory");
let obj = {};
function _fromURL() {
  const self = this;
  const tmp = _fromFileURL((arg0, arg1) => {
    let closure_0 = arg0;
    let closure_1 = arg1;
    let closure_2 = arg2;
    let c5 = 0;
    let c6 = 0;
    const iter = (function*(arg0, arg1) {
      if (c6 === 2) {
        c6 = 3;
        HermesBuiltin.throwTypeError();
      } else if (tmp4 === 3) {
        if (arg0 === 1) {
          throw arg1;
        } else if (arg0 === 2) {
          let obj = { value: null, done: true };
          obj[0] = arg1;
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
              throw arg1;
            } else if (arg0 === 2) {
              c6 = 3;
              obj = { value: null, done: true };
              obj[0] = arg1;
              return obj;
            } else {
              let closure_4 = tmp5;
              let closure_3 = tmp2;
              let flag;
              if (flag === undefined) {
                flag = true;
              }
              c5 = 1;
              c6 = 1;
              return { value: "ct", done: "Array" };
            }
          } else if (arg0 === 1) {
            c6 = 3;
            throw arg1;
          } else if (arg0 === 2) {
            c6 = 3;
            const obj1 = { value: null, done: true };
            obj1[0] = arg1;
            return obj1;
          } else {
            let tmp12;
            if (closure_1) {
              obj = { data: null };
              obj[0] = closure_1;
              tmp12 = obj;
            }
            c6 = 3;
            const obj2 = { value: null, done: true };
            obj2[0] = outer1_3.fromURL(closure_0, flag, tmp12);
            return obj2;
          }
        } catch (tmp17) {
          c6 = tmp;
          throw tmp17;
        }
      }
    })();
    iter.next();
    return iter;
  });
  const _fromURL = tmp;
  const apply = tmp.apply;
  if (typeof apply === "unknown") {
    let applyArgumentsResult = HermesBuiltin.applyArguments(self);
  } else {
    applyArgumentsResult = apply(self, arguments);
  }
  return applyArgumentsResult;
}
_fromFileURL = function _fromFileURL(arg0) {
  const self = this;
  const tmp = _fromFileURL((arg0) => {
    let closure_0 = arg0;
    let closure_1 = arg1;
    let closure_2 = arg2;
    let c5 = 0;
    let c6 = 0;
    const iter = (function*(arg0) {
      if (c6 === 2) {
        c6 = 3;
        HermesBuiltin.throwTypeError();
      } else if (tmp4 === 3) {
        if (arg0 === 1) {
          throw arg1;
        } else if (arg0 === 2) {
          let obj = { value: null, done: true };
          obj[0] = arg1;
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
              throw arg1;
            } else if (arg0 === 2) {
              c6 = 3;
              obj = { value: null, done: true };
              obj[0] = arg1;
              return obj;
            } else {
              let closure_4 = tmp5;
              let closure_3 = tmp2;
              let c1;
              let flag;
              if (flag === undefined) {
                flag = true;
              }
              c5 = 1;
              c6 = 1;
              return { value: "ct", done: "Array" };
            }
          } else if (arg0 === 1) {
            c6 = 3;
            throw arg1;
          } else if (arg0 === 2) {
            c6 = 3;
            const obj1 = { value: null, done: true };
            obj1[0] = arg1;
            return obj1;
          } else {
            let tmp12;
            if (c1) {
              obj = { data: null };
              obj[0] = c1;
              tmp12 = obj;
            }
            c6 = 3;
            const obj2 = { value: null, done: true };
            obj2[0] = outer1_3.fromFileURL(closure_0, flag, tmp12);
            return obj2;
          }
        } catch (tmp17) {
          c6 = tmp;
          throw tmp17;
        }
      }
    })();
    iter.next();
    return iter;
  });
  _fromFileURL = tmp;
  const apply = tmp.apply;
  if (typeof apply === "unknown") {
    let applyArgumentsResult = HermesBuiltin.applyArguments(self);
  } else {
    applyArgumentsResult = apply(self, arguments);
  }
  return applyArgumentsResult;
};
_fromResource = function _fromResource() {
  const self = this;
  const tmp = _fromFileURL((arg0, arg1) => {
    let closure_0 = arg0;
    let closure_1 = arg1;
    let closure_2 = arg2;
    let c5 = 0;
    let c6 = 0;
    const iter = (function*(arg0, arg1) {
      if (c6 === 2) {
        c6 = 3;
        HermesBuiltin.throwTypeError();
      } else if (tmp4 === 3) {
        if (arg0 === 1) {
          throw arg1;
        } else if (arg0 === 2) {
          let obj = { value: null, done: true };
          obj[0] = arg1;
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
              throw arg1;
            } else if (arg0 === 2) {
              c6 = 3;
              obj = { value: null, done: true };
              obj[0] = arg1;
              return obj;
            } else {
              let closure_4 = tmp5;
              let closure_3 = tmp2;
              let flag;
              if (flag === undefined) {
                flag = true;
              }
              c5 = 1;
              c6 = 1;
              return { value: "ct", done: "Array" };
            }
          } else if (arg0 === 1) {
            c6 = 3;
            throw arg1;
          } else if (arg0 === 2) {
            c6 = 3;
            const obj1 = { value: null, done: true };
            obj1[0] = arg1;
            return obj1;
          } else {
            let tmp12;
            if (closure_1) {
              obj = { data: null };
              obj[0] = closure_1;
              tmp12 = obj;
            }
            c6 = 3;
            const obj2 = { value: null, done: true };
            obj2[0] = outer1_3.fromResource(closure_0, flag, tmp12);
            return obj2;
          }
        } catch (tmp17) {
          c6 = tmp;
          throw tmp17;
        }
      }
    })();
    iter.next();
    return iter;
  });
  const _fromResource = tmp;
  const apply = tmp.apply;
  if (typeof apply === "unknown") {
    let applyArgumentsResult = HermesBuiltin.applyArguments(self);
  } else {
    applyArgumentsResult = apply(self, arguments);
  }
  return applyArgumentsResult;
};
_fromBytes = function _fromBytes() {
  const self = this;
  const tmp = _fromFileURL((arg0, arg1) => {
    let closure_0 = arg0;
    let closure_1 = arg1;
    let closure_2 = arg2;
    let c5 = 0;
    let c6 = 0;
    const iter = (function*(arg0, arg1) {
      if (c6 === 2) {
        c6 = 3;
        HermesBuiltin.throwTypeError();
      } else if (tmp4 === 3) {
        if (arg0 === 1) {
          throw arg1;
        } else if (arg0 === 2) {
          let obj = { value: null, done: true };
          obj[0] = arg1;
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
              throw arg1;
            } else if (arg0 === 2) {
              c6 = 3;
              obj = { value: null, done: true };
              obj[0] = arg1;
              return obj;
            } else {
              let closure_4 = tmp5;
              let closure_3 = tmp2;
              let flag;
              if (flag === undefined) {
                flag = true;
              }
              c5 = 1;
              c6 = 1;
              return { value: "ct", done: "Array" };
            }
          } else if (arg0 === 1) {
            c6 = 3;
            throw arg1;
          } else if (arg0 === 2) {
            c6 = 3;
            const obj1 = { value: null, done: true };
            obj1[0] = arg1;
            return obj1;
          } else {
            let tmp12;
            if (closure_1) {
              obj = { data: null };
              obj[0] = closure_1;
              tmp12 = obj;
            }
            c6 = 3;
            const obj2 = { value: null, done: true };
            obj2[0] = outer1_3.fromBytes(closure_0, flag, tmp12);
            return obj2;
          }
        } catch (tmp17) {
          c6 = tmp;
          throw tmp17;
        }
      }
    })();
    iter.next();
    return iter;
  });
  const _fromBytes = tmp;
  const apply = tmp.apply;
  if (typeof apply === "unknown") {
    let applyArgumentsResult = HermesBuiltin.applyArguments(self);
  } else {
    applyArgumentsResult = apply(self, arguments);
  }
  return applyArgumentsResult;
};
function _fromSource() {
  const self = this;
  const tmp = _fromFileURL((arg0, arg1) => {
    let closure_0 = arg0;
    let closure_1 = arg1;
    let closure_2 = arg2;
    let c7 = 0;
    let c8 = 0;
    let c6 = 0;
    const iter = (function*(arg0, arg1) {
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
          return { value: "HermesInternal", done: null };
        }
      } else {
        try {
          c8 = 2;
          if (0 === message) {
            if (arg0 === 1) {
              c8 = 3;
              throw arg1;
            } else if (arg0 === 2) {
              c8 = 3;
              obj = { value: null, done: true };
              obj[0] = arg1;
              return obj;
            } else {
              let uri = tmp3;
              let c3 = tmp7;
              let flag;
              if (flag === undefined) {
                flag = true;
              }
              c3 = undefined;
              uri = undefined;
              let c5;
              message = undefined;
              message = 1;
              c8 = 1;
              return { value: "ct", done: "Array" };
            }
          } else if (1 === tmp7) {
            if (arg0 === 1) {
              c8 = 3;
              throw arg1;
            } else if (arg0 === 2) {
              c8 = 3;
              const obj1 = { value: null, done: true };
              obj1[0] = arg1;
              return obj1;
            } else {
              let tmp71 = null;
              if (typeof closure_0 !== "SENTRY_RELEASE") {
                tmp71 = closure_0;
              }
              c3 = tmp71;
              uri = null;
              if (typeof closure_0 !== "window") {
                uri = closure_0.uri;
              }
              if (c3) {
                const assetSource = closure_2.resolveAssetSource(c3);
                let uri1;
                if (assetSource != null) {
                  uri1 = assetSource.uri;
                }
                let tmp25 = uri1;
              } else {
                tmp25 = uri;
              }
              c5 = tmp25;
              if (c5) {
                message = 1;
                if (c5.match(/https?:\/\//)) {
                  closure_0.fromURL(c5, closure_1, flag);
                } else {
                  obj = closure_0;
                  if (c5.match(/file:\/\//)) {
                    obj.fromFileURL(outer1_5, closure_1, closure_2);
                  } else {
                    obj.fromResource(outer1_5, closure_1, closure_2);
                  }
                }
                message = 0;
                c8 = 3;
              } else {
                const _Error3 = Error;
                const _HermesInternal2 = HermesInternal;
                const error = new Error("Invalid source: could not resolve asset " + closure_0 + ". Ensure 'riv' is in metro.config.js assetExts.");
                throw error;
              }
            }
          } else {
            message = 0;
            message = c5;
            const _Error = Error;
            if (message instanceof Error) {
              message = message.message;
            } else {
              const _String = String;
              message = String(message);
            }
            const _Error2 = Error;
            const _HermesInternal = HermesInternal;
            const error1 = new Error("Failed to load Rive file from source: " + message);
            throw error1;
          }
        } catch (tmp59) {
          c5 = tmp59;
          if (tmp4 === message) {
            c8 = tmp2;
            throw tmp59;
          } else {
            message = tmp;
          }
        }
      }
    })();
    iter.next();
    return iter;
  });
  const _fromSource = tmp;
  const apply = tmp.apply;
  if (typeof apply === "unknown") {
    let applyArgumentsResult = HermesBuiltin.applyArguments(self);
  } else {
    applyArgumentsResult = apply(self, arguments);
  }
  return applyArgumentsResult;
}
obj.fromURL = function fromURL(c5, closure_1, flag) {
  const self = this;
  const apply = _fromURL.apply;
  if (typeof apply === "unknown") {
    let applyArgumentsResult = HermesBuiltin.applyArguments(self);
  } else {
    applyArgumentsResult = apply(self, arguments);
  }
  return applyArgumentsResult;
};
obj.fromFileURL = function fromFileURL(outer1_5, closure_1, closure_2) {
  const self = this;
  const apply = _fromFileURL.apply;
  if (typeof apply === "unknown") {
    let applyArgumentsResult = HermesBuiltin.applyArguments(self);
  } else {
    applyArgumentsResult = apply(self, arguments);
  }
  return applyArgumentsResult;
};
obj.fromResource = function fromResource(outer1_5, closure_1, closure_2) {
  const self = this;
  const apply = _fromResource.apply;
  if (typeof apply === "unknown") {
    let applyArgumentsResult = HermesBuiltin.applyArguments(self);
  } else {
    applyArgumentsResult = apply(self, arguments);
  }
  return applyArgumentsResult;
};
obj.fromBytes = function fromBytes(arg0, current, arg2) {
  const self = this;
  const apply = _fromBytes.apply;
  if (typeof apply === "unknown") {
    let applyArgumentsResult = HermesBuiltin.applyArguments(self);
  } else {
    applyArgumentsResult = apply(self, arguments);
  }
  return applyArgumentsResult;
};
obj.fromSource = function fromSource(arg0, arg1) {
  const self = this;
  const apply = _fromSource.apply;
  if (typeof apply === "unknown") {
    let applyArgumentsResult = HermesBuiltin.applyArguments(self);
  } else {
    applyArgumentsResult = apply(self, arguments);
  }
  return applyArgumentsResult;
};

export const RiveFileFactory = obj;