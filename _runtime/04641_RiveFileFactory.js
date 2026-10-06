// === Module 4641: RiveFileFactory ===

// Module 4641 (RiveFileFactory)
import react_native from "react-native" /* 17 */;
import _mod4615 from "module_4615" /* 4615 */;
import _asyncToGenerator from "_asyncToGenerator" /* 5 */;

let c5, c7, c8, obj;

const Image = react_native.Image;
const NitroModules = _mod4615.NitroModules;
let closure_3 = NitroModules.createHybridObject("RiveFileFactory");
let RiveFileFactory = {};
RiveFileFactory = function _fromURL() {
  obj = _asyncToGenerator(async (arg0, data) => {
    let closure_0 = arg0;
    let closure_2 = arg2;
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
      try {
        let fromURL;
        let flag;
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
            let closure_4 = tmp4;
            fromURL = tmp;
            flag = closure_2;
            if (closure_2 === undefined) {
              flag = true;
            }
            c5 = 1;
            c6 = 1;
            return { value: "Reflect", done: true };
          }
        } else if (arg0 === 1) {
          c6 = 3;
          throw value;
        } else if (arg0 === 2) {
          c6 = 3;
          const obj4 = { value, done: true };
          return obj4;
        } else {
          let tmp11;
          fromURL = fromURL.fromURL;
          const tmp9 = flag;
          if (data) {
            obj = { data };
            tmp11 = obj;
          }
          c6 = 3;
          const obj5 = { value: fromURL(closure_0, tmp9, tmp11), done: true };
          return obj5;
        }
      } catch (tmp16) {
        c6 = 3;
        throw tmp16;
      }
    }
  });
  return obj(...arguments);
};
RiveFileFactory = function _fromFileURL() {
  obj = _asyncToGenerator(async (arg0) => {
    let closure_0 = arg0;
    let closure_2 = arg2;
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
      try {
        let fromFileURL;
        let data;
        let flag;
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
            let closure_4 = tmp4;
            fromFileURL = tmp;
            data = undefined;
            const tmp15 = data;
            data = tmp15;
            flag = closure_2;
            if (closure_2 === undefined) {
              flag = true;
            }
            c5 = 1;
            c6 = 1;
            return { value: "Reflect", done: true };
          }
        } else if (arg0 === 1) {
          c6 = 3;
          throw value;
        } else if (arg0 === 2) {
          c6 = 3;
          const obj4 = { value, done: true };
          return obj4;
        } else {
          let tmp11;
          fromFileURL = fromFileURL.fromFileURL;
          const tmp9 = flag;
          if (data) {
            obj = { data };
            tmp11 = obj;
          }
          c6 = 3;
          const obj5 = { value: fromFileURL(closure_0, tmp9, tmp11), done: true };
          return obj5;
        }
      } catch (tmp16) {
        c6 = 3;
        throw tmp16;
      }
    }
  });
  return obj(...arguments);
};
RiveFileFactory = function _fromResource() {
  obj = _asyncToGenerator(async (arg0, data) => {
    let closure_0 = arg0;
    let closure_2 = arg2;
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
      try {
        let fromResource;
        let flag;
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
            let closure_4 = tmp4;
            fromResource = tmp;
            flag = closure_2;
            if (closure_2 === undefined) {
              flag = true;
            }
            c5 = 1;
            c6 = 1;
            return { value: "Reflect", done: true };
          }
        } else if (arg0 === 1) {
          c6 = 3;
          throw value;
        } else if (arg0 === 2) {
          c6 = 3;
          const obj4 = { value, done: true };
          return obj4;
        } else {
          let tmp11;
          fromResource = fromResource.fromResource;
          const tmp9 = flag;
          if (data) {
            obj = { data };
            tmp11 = obj;
          }
          c6 = 3;
          const obj5 = { value: fromResource(closure_0, tmp9, tmp11), done: true };
          return obj5;
        }
      } catch (tmp16) {
        c6 = 3;
        throw tmp16;
      }
    }
  });
  return obj(...arguments);
};
RiveFileFactory = function _fromBytes() {
  obj = _asyncToGenerator(async (arg0, data) => {
    let closure_0 = arg0;
    let closure_2 = arg2;
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
      try {
        let fromBytes;
        let flag;
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
            let closure_4 = tmp4;
            fromBytes = tmp;
            flag = closure_2;
            if (closure_2 === undefined) {
              flag = true;
            }
            c5 = 1;
            c6 = 1;
            return { value: "Reflect", done: true };
          }
        } else if (arg0 === 1) {
          c6 = 3;
          throw value;
        } else if (arg0 === 2) {
          c6 = 3;
          const obj4 = { value, done: true };
          return obj4;
        } else {
          let tmp11;
          fromBytes = fromBytes.fromBytes;
          const tmp9 = flag;
          if (data) {
            obj = { data };
            tmp11 = obj;
          }
          c6 = 3;
          const obj5 = { value: fromBytes(closure_0, tmp9, tmp11), done: true };
          return obj5;
        }
      } catch (tmp16) {
        c6 = 3;
        throw tmp16;
      }
    }
  });
  return obj(...arguments);
};
RiveFileFactory = function _fromSource() {
  obj = _asyncToGenerator(async function(arg0, arg1) {
    let closure_5;
    let closure_0 = arg0;
    let closure_1 = arg1;
    let closure_2 = arg2;
    if (c8 === 2) {
      c8 = 3;
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
      let tmp50;
      let c6;
      try {
        let flag;
        let uri;
        let message;
        c8 = 2;
        if (0 === c7) {
          if (arg0 === 1) {
            c8 = 3;
            throw value;
          } else if (arg0 === 2) {
            c8 = 3;
            const obj3 = { value, done: true };
            return obj3;
          } else {
            let closure_4 = tmp;
            closure_3 = tmp4;
            flag = closure_2;
            if (closure_2 === undefined) {
              flag = true;
            }
            closure_3 = undefined;
            uri = undefined;
            tmp50 = undefined;
            message = undefined;
            c7 = 1;
            c8 = 1;
            return { value: "Reflect", done: true };
          }
        } else if (1 === c7) {
          if (arg0 === 1) {
            c8 = 3;
            throw value;
          } else if (arg0 === 2) {
            c8 = 3;
            const obj4 = { value, done: true };
            return obj4;
          } else {
            let tmp20;
            let tmp60 = null;
            if (typeof closure_0 === "number") {
              tmp60 = closure_0;
            }
            closure_3 = tmp60;
            uri = null;
            if (typeof closure_0 === "object") {
              uri = closure_0.uri;
            }
            const tmp19 = closure_3;
            if (tmp19) {
              const assetSource = closure_2.resolveAssetSource(closure_3);
              let uri1;
              if (assetSource != null) {
                uri1 = assetSource.uri;
              }
              tmp20 = uri1;
            } else {
              tmp20 = uri;
            }
            tmp50 = tmp20;
            const tmp27 = tmp50;
            if (tmp27) {
              let fromURLResult;
              c6 = 1;
              if (tmp50.match(/https?:\/\//)) {
                fromURLResult = closure_0.fromURL(tmp50, closure_1, flag);
              } else if (tmp50.match(/file:\/\//)) {
                fromURLResult = closure_0.fromFileURL(tmp50, closure_1, flag);
              } else {
                fromURLResult = closure_0.fromResource(tmp50, closure_1, flag);
              }
              c6 = 0;
              c8 = 3;
              const obj5 = { value: fromURLResult, done: true };
              return obj5;
            } else {
              const _Error3 = Error;
              const _HermesInternal2 = HermesInternal;
              const self3 = this;
              const self4 = this;
              const error = new Error("Invalid source: could not resolve asset " + closure_0 + ". Ensure 'riv' is in metro.config.js assetExts.");
              throw error;
            }
          }
        } else {
          c6 = 0;
          message = tmp50;
          const _Error = Error;
          if (message instanceof Error) {
            message = message.message;
          } else {
            const _String = String;
            message = String(message);
          }
          const _Error2 = Error;
          const _HermesInternal = HermesInternal;
          const self = this;
          const self2 = this;
          const error1 = new Error("Failed to load Rive file from source: " + message);
          throw error1;
        }
      } catch (tmp50) {
        if (0 === c6) {
          c8 = 3;
          throw tmp50;
        } else {
          c7 = 2;
        }
      }
    }
  });
  return obj(...arguments);
};
RiveFileFactory.fromURL = function fromURL(arg0, current) {
  return obj(...arguments);
};
RiveFileFactory.fromFileURL = function fromFileURL(arg0) {
  return obj(...arguments);
};
RiveFileFactory.fromResource = function fromResource(arg0, current) {
  return obj(...arguments);
};
RiveFileFactory.fromBytes = function fromBytes(arg0, current) {
  return obj(...arguments);
};
RiveFileFactory.fromSource = function fromSource(arg0, arg1) {
  return obj(...arguments);
};

export { RiveFileFactory };