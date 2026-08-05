// _runtime/09123_number.js
function number(NumberResult) {
  const error = new Error("positive integer expected, not " + NumberResult);
  throw error;
}
function bool(flag) {
  if (typeof flag !== "boolean") {
    const _Error = Error;
    const _HermesInternal = HermesInternal;
    const error = new Error("boolean expected, not " + flag);
    throw error;
  }
}
function bytes(obj) {
  const substr = [...arguments].slice();
  let tmp = obj instanceof Uint8Array;
  if (!tmp) {
    let tmp3 = null != obj && typeof obj === "object";
    if (tmp3) {
      tmp3 = "Uint8Array" === obj.constructor.name;
    }
    tmp = tmp3;
  }
  if (tmp) {
    if (substr.length > 0) {
      if (!substr.includes(obj.length)) {
        const _Error2 = Error;
        const _HermesInternal = HermesInternal;
        const error = new Error("Uint8Array expected of length " + substr + ", not of length=" + obj.length);
        throw error;
      }
    }
  } else {
    const _Error = Error;
    const error1 = new Error("Uint8Array expected");
    throw error1;
  }
}
function hash(fn) {
  if (typeof fn === "function") {
    if (typeof fn.create === "function") {
      const outputLen = fn.outputLen;
      const _Number2 = Number;
      if (Number.isSafeInteger(outputLen)) {
        if (outputLen >= 0) {
          const blockLen = fn.blockLen;
          const _Number = Number;
          const _Error = Error;
          const _HermesInternal = HermesInternal;
          const error = new Error("positive integer expected, not " + blockLen);
          throw error;
        }
      }
      const _Error2 = Error;
      const _HermesInternal2 = HermesInternal;
      const error1 = new Error("positive integer expected, not " + outputLen);
      throw error1;
    }
  }
  const error2 = new Error("Hash should be wrapped by utils.wrapConstructor");
  throw error2;
}
function exists(destroyed) {
  let flag = arg1;
  if (arg1 === undefined) {
    flag = true;
  }
  if (destroyed.destroyed) {
    const _Error2 = Error;
    const error = new Error("Hash instance has been destroyed");
    throw error;
  } else if (flag) {
    if (destroyed.finished) {
      const _Error = Error;
      const error1 = new Error("Hash#digest() has already been called");
      throw error1;
    }
  }
}
function output(content, state) {
  bytes(content);
  const outputLen = state.outputLen;
  if (content.length < outputLen) {
    const _Error = Error;
    const _HermesInternal = HermesInternal;
    const error = new Error("digestInto() expects output buffer of length at least " + outputLen);
    throw error;
  }
}
arg5.isBytes = function isBytes(obj) {
  let tmp = obj instanceof Uint8Array;
  if (!tmp) {
    let tmp3 = null != obj && typeof obj === "object";
    if (tmp3) {
      tmp3 = "Uint8Array" === obj.constructor.name;
    }
    tmp = tmp3;
  }
  return tmp;
};
arg5.number = number;
arg5.bool = bool;
arg5.bytes = bytes;
arg5.hash = hash;
arg5.exists = exists;
arg5.output = output;
arg5.default = { number, bool, bytes, hash, exists, output };