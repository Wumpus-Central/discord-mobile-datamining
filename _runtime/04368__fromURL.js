// === Module 4368: _fromURL ===

// Module 4368 (_fromURL)
import "asyncGeneratorStep";

fn(17).Image;
const NitroModules = fn(4340).NitroModules;
NitroModules.createHybridObject("RiveFileFactory");
let obj = {};
let closure_0 = async function _fromURL() {
  closure_4 = tmp5;
  closure_131_0 = closure_0;
  closure_131_1 = closure_1;
  let flag = closure_2;
  if (closure_2 === undefined) {
    flag = true;
  }
  closure_131_2 = flag;
  await "PX_16";
  if (closure_131_1) {
    const tmp12 = { data: closure_131_1 };
  }
  return tmp2.fromURL(closure_131_0, closure_131_2, tmp12);
};
let asyncGeneratorStep = function _fromFileURL() {
  const self = this;
  const tmp = asyncGeneratorStep(async (arg0) => {
    closure_4 = tmp5;
    closure_131_0 = closure_0;
    closure_131_1 = closure_1;
    let flag = closure_2;
    if (closure_2 === undefined) {
      flag = true;
    }
    closure_131_2 = flag;
    await "PX_16";
    if (closure_131_1) {
      const tmp12 = { data: closure_131_1 };
    }
    return tmp2.fromFileURL(closure_131_0, closure_131_2, tmp12);
  });
  asyncGeneratorStep = tmp;
  const apply = tmp.apply;
  if (typeof apply === "unknown") {
    let applyArgumentsResult = HermesBuiltin.applyArguments(self);
  } else {
    applyArgumentsResult = apply(self, arguments);
  }
  return applyArgumentsResult;
};
const Image = async function _fromResource() {
  closure_4 = tmp5;
  closure_131_0 = closure_0;
  closure_131_1 = closure_1;
  let flag = closure_2;
  if (closure_2 === undefined) {
    flag = true;
  }
  closure_131_2 = flag;
  await "PX_16";
  if (closure_131_1) {
    const tmp12 = { data: closure_131_1 };
  }
  return tmp2.fromResource(closure_131_0, closure_131_2, tmp12);
};
let closure_3 = async function _fromBytes() {
  closure_4 = tmp5;
  closure_131_0 = closure_0;
  closure_131_1 = closure_1;
  let flag = closure_2;
  if (closure_2 === undefined) {
    flag = true;
  }
  closure_131_2 = flag;
  await "PX_16";
  if (closure_131_1) {
    const tmp12 = { data: closure_131_1 };
  }
  return tmp2.fromBytes(closure_131_0, closure_131_2, tmp12);
};
let closure_4 = async function _fromSource(arg0) {
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
          closure_3 = tmp7;
          closure_131_2 = undefined;
          closure_131_0 = closure_0;
          closure_131_1 = closure_1;
          let flag = closure_2;
          if (closure_2 === undefined) {
            flag = true;
          }
          closure_131_2 = flag;
          closure_131_3 = undefined;
          closure_131_4 = undefined;
          closure_131_5 = undefined;
          closure_131_6 = undefined;
          c7 = 1;
          c8 = 1;
          return { value: "PX_16", done: null };
        }
      } else if (1 === tmp7) {
        if (arg0 === 1) {
          c8 = 3;
          throw value;
        } else if (arg0 === 2) {
          c8 = 3;
          const obj1 = { value, done: true };
          return obj1;
        } else {
          let tmp70 = null;
          if (typeof closure_131_0 === "number") {
            tmp70 = closure_131_0;
          }
          closure_131_3 = tmp70;
          let uri = null;
          if (typeof closure_131_0 === "object") {
            uri = closure_131_0.uri;
          }
          closure_131_4 = uri;
          if (closure_131_3) {
            const assetSource = closure_2.resolveAssetSource(closure_131_3);
            let uri1;
            if (assetSource != null) {
              uri1 = assetSource.uri;
            }
            let tmp25 = uri1;
          } else {
            tmp25 = closure_131_4;
          }
          closure_131_5 = tmp25;
          if (closure_131_5) {
            c6 = 1;
            if (closure_131_5.match(/https?:\/\//)) {
              closure_0.fromURL(closure_131_5, closure_131_1, closure_131_2);
            } else {
              obj = closure_0;
              if (closure_131_5.match(/file:\/\//)) {
                obj.fromFileURL(closure_131_5, closure_131_1, closure_131_2);
              } else {
                obj.fromResource(closure_131_5, closure_131_1, closure_131_2);
              }
            }
            c6 = 0;
            c8 = 3;
          } else {
            const _Error3 = Error;
            const _HermesInternal2 = HermesInternal;
            const error = new Error("Invalid source: could not resolve asset " + closure_131_0 + ". Ensure 'riv' is in metro.config.js assetExts.");
            throw error;
          }
        }
      } else {
        c6 = 0;
        closure_131_7 = closure_5;
        const _Error = Error;
        if (closure_131_7 instanceof Error) {
          let message = closure_131_7.message;
        } else {
          const _String = String;
          message = String(closure_131_7);
        }
        closure_131_6 = message;
        const _Error2 = Error;
        const _HermesInternal = HermesInternal;
        const error1 = new Error("Failed to load Rive file from source: " + closure_131_6);
        throw error1;
      }
    } catch (tmp59) {
      closure_5 = tmp59;
      if (tmp4 === c6) {
        c8 = tmp2;
        throw tmp59;
      } else {
        c7 = tmp;
      }
    }
  }
};
obj.fromURL = function fromURL(arg0, current) {
  const self = this;
  const apply = closure_0.apply;
  if (typeof apply === "unknown") {
    let applyArgumentsResult = HermesBuiltin.applyArguments(self);
  } else {
    applyArgumentsResult = apply(self, arguments);
  }
  return applyArgumentsResult;
};
obj.fromFileURL = function fromFileURL(arg0) {
  const self = this;
  const apply = asyncGeneratorStep.apply;
  if (typeof apply === "unknown") {
    let applyArgumentsResult = HermesBuiltin.applyArguments(self);
  } else {
    applyArgumentsResult = apply(self, arguments);
  }
  return applyArgumentsResult;
};
obj.fromResource = function fromResource(arg0, current) {
  const self = this;
  const apply = closure_2.apply;
  if (typeof apply === "unknown") {
    let applyArgumentsResult = HermesBuiltin.applyArguments(self);
  } else {
    applyArgumentsResult = apply(self, arguments);
  }
  return applyArgumentsResult;
};
obj.fromBytes = function fromBytes(arg0, current) {
  const self = this;
  const apply = closure_3.apply;
  if (typeof apply === "unknown") {
    let applyArgumentsResult = HermesBuiltin.applyArguments(self);
  } else {
    applyArgumentsResult = apply(self, arguments);
  }
  return applyArgumentsResult;
};
obj.fromSource = function fromSource(arg0, arg1) {
  const self = this;
  const apply = closure_4.apply;
  if (typeof apply === "unknown") {
    let applyArgumentsResult = HermesBuiltin.applyArguments(self);
  } else {
    applyArgumentsResult = apply(self, arguments);
  }
  return applyArgumentsResult;
};

export const RiveFileFactory = obj;