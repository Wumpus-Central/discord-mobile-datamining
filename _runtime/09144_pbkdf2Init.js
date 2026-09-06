// _runtime/09144_pbkdf2Init.js
import _asyncLoop from "09141__asyncLoop.js";
import number from "09142_number.js";
import asyncGeneratorStep from "00005_asyncGeneratorStep.js";

function pbkdf2Init(sha256, B, B, arg3) {
  number.hash(sha256);
  ({ c, dkLen, asyncTick } = _asyncLoop.checkOpts({ dkLen: 32, asyncTick: 10 }, arg3));
  number.number(c);
  number.number(dkLen);
  number.number(asyncTick);
  if (c < 1) {
    const _Error = Error;
    const error = new Error("PBKDF2: iterations (c) should be >= 1");
    throw error;
  } else {
    const _Uint8Array = Uint8Array;
    const toBytesResult = tmp(9141).toBytes(B);
    const uint8Array = new Uint8Array(dkLen);
    const hmac = tmp(9145).hmac;
    hmac.create(sha256, toBytesResult);
    const toBytesResult1 = tmp(9141).toBytes(B);
    const obj = { c, dkLen, asyncTick, DK: uint8Array, PRF: null, PRFSalt: null };
    obj.PRF = obj;
    obj.PRFSalt = obj._cloneInto().update(toBytesResult1);
    return obj;
  }
  const checkOptsResult = _asyncLoop.checkOpts({ dkLen: 32, asyncTick: 10 }, arg3);
}
function pbkdf2Output(destroy, destroy2, arg2, destroy3, arr) {
  destroy.destroy();
  destroy2.destroy();
  if (destroy3) {
    destroy3.destroy();
  }
  arr.fill(0);
  return arg2;
}
let closure_5 = async function _pbkdf2Async(arg0, value) {
  if (c13 === 2) {
    c13 = 3;
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
      c13 = 2;
      if (0 === c12) {
        if (arg0 === 1) {
          c13 = 3;
          throw value;
        } else if (arg0 === 2) {
          c13 = 3;
          obj = { value, done: true };
          return obj;
        } else {
          closure_9 = tmp3;
          const int32 = tmp7;
          closure_136_0 = undefined;
          closure_136_1 = undefined;
          closure_136_2 = undefined;
          closure_136_3 = undefined;
          closure_136_4 = undefined;
          closure_136_5 = undefined;
          let PRFSalt;
          closure_136_7 = undefined;
          closure_136_8 = undefined;
          closure_136_9 = undefined;
          closure_136_10 = undefined;
          closure_136_11 = undefined;
          closure_136_12 = undefined;
          const tmp67 = pbkdf2Init(closure_0, closure_1, closure_2, closure_3);
          ({ c: closure_136_1, dkLen } = tmp67);
          closure_136_2 = dkLen;
          ({ asyncTick: closure_136_3, DK: closure_136_4, PRF } = tmp67);
          closure_136_5 = PRF;
          PRFSalt = tmp67.PRFSalt;
          const _Uint8Array = Uint8Array;
          const uint8Array = new Uint8Array(4);
          closure_136_7 = uint8Array;
          closure_136_8 = _asyncLoop.createView(uint8Array);
          const _Uint8Array2 = Uint8Array;
          const uint8Array1 = new Uint8Array(PRF.outputLen);
          closure_136_9 = uint8Array1;
          closure_136_10 = async function _loop(arg0, value) {
            if (v3 === 2) {
              v3 = 3;
              throw new TypeError("Generator functions may not be called on executing generators");
            } else if (tmp3 === 3) {
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
                if (0 === c1) {
                  if (arg0 === 1) {
                    v3 = 3;
                    throw value;
                  } else if (arg0 === 2) {
                    v3 = 3;
                    obj = { value, done: true };
                    return obj;
                  } else {
                    const subarrayResult = closure_2_4.subarray(closure_2_12, closure_2_12 + outputLen.outputLen);
                    v3 = subarrayResult;
                    int32.setInt32(0, closure_2_11, false);
                    _cloneIntoResult = next._cloneInto(_cloneIntoResult);
                    _cloneIntoResult.update(iter3).digestInto(tmp3);
                    const result = subarrayResult.set(tmp3.subarray(0, subarrayResult.length));
                    c1 = 1;
                    v3 = 1;
                    const obj1 = {
                      value: v3(c1[2]).asyncLoop(closure_2_1 - 1, closure_2_3, async () => {
                        let length;
                        _cloneIntoResult = outputLen._cloneInto(c0);
                        outputLen._cloneInto(c0).update(closure_2_9).digestInto(closure_2_9);
                        let num = 0;
                        if (0 < subarrayResult.length) {
                          do {
                            subarrayResult[num] = subarrayResult[num] ^ closure_2_9[num];
                            num = num + 1;
                            length = subarrayResult.length;
                          } while (num < length);
                        }
                      }),
                      done: false,
                    };
                    return obj1;
                  }
                } else if (arg0 === 1) {
                  v3 = 3;
                  throw value;
                } else if (arg0 === 2) {
                  v3 = 3;
                  obj = { value, done: true };
                  return obj;
                } else {
                  v3 = 3;
                  return { value: "HermesInternal", done: null };
                }
              } catch (tmp5) {
                v3 = tmp;
                throw tmp5;
              }
            }
          };
          closure_136_11 = 1;
          closure_136_12 = 0;
          if (closure_136_12 < dkLen) {
            const iter3 = closure_136_10()[tmp60.iterator]();
            HermesBuiltin.ensureObject("iterator is not an object");
            const next = iter3.next;
            closure_4 = undefined;
            const tmp28 = closure_136_10();
          }
          closure_137_4(closure_136_5, PRFSalt, closure_136_4, closure_136_0, closure_136_9);
          c13 = 3;
          let obj1 = { value: closure_136_4, done: true };
          return obj1;
        }
      } else {
        if (1 === tmp7) {
          c10 = 1;
          if (arg0 === 1) {
            c13 = 3;
            throw value;
          } else {
            closure_4 = value;
            if (arg0 === 2) {
              closure_4 = value;
              c10 = 0;
              const method = HermesBuiltin.getMethod("return");
              if (method === undefined) {
                c13 = 3;
                const obj2 = { value, done: true };
                return obj2;
              } else {
                const iter2 = method(closure_4);
                HermesBuiltin.ensureObject("iterator.return() did not return an object");
                if (iter2.done) {
                  c13 = 3;
                  obj = { value: iter2.value, done: true };
                  return obj;
                } else {
                  c12 = 1;
                  c13 = 1;
                  return iter2;
                }
              }
            } else {
              c10 = 0;
              const tmp19 = value;
            }
          }
        } else {
          c10 = 0;
          const method1 = HermesBuiltin.getMethod("throw");
          if (method1 === undefined) {
            const method2 = HermesBuiltin.getMethod("return");
            if (method2 !== undefined) {
              HermesBuiltin.ensureObject("iterator.return() did not return an object");
            }
            throw new TypeError("yield* delegate must have a .throw() method");
          } else {
            const iter = method1(tmp9);
            HermesBuiltin.ensureObject("iterator.throw() did not return an object");
            if (iter.done) {
              let iter4 = iter;
            } else {
              c12 = 1;
              c13 = 1;
              return iter;
            }
          }
          tmp9 = closure_11;
        }
        value = iter4.value;
        closure_136_11 = closure_136_11 + 1;
        closure_136_12 = closure_136_12 + closure_136_5.outputLen;
      }
      iter4 = next(tmp19);
      HermesBuiltin.ensureObject("iterator.next() did not return an object");
      if (!iter4.done) {
        c12 = 1;
        c13 = 1;
        return iter4;
      }
    } catch (tmp53) {
      closure_11 = tmp53;
      if (tmp4 === c10) {
        c13 = tmp2;
        throw tmp53;
      } else {
        c12 = tmp;
      }
    }
  }
};

export const pbkdf2 = function pbkdf2(sha256, B, B, arg3) {
  ({ c, dkLen, DK, PRF, PRFSalt } = pbkdf2Init(sha256, B, B, arg3));
  const uint8Array = new Uint8Array(4);
  const view = _asyncLoop.createView(uint8Array);
  const uint8Array1 = new Uint8Array(PRF.outputLen);
  let num = 0;
  let num2 = 1;
  let tmp4;
  if (0 < dkLen) {
    do {
      let subarrayResult = DK.subarray(num, num + PRF.outputLen);
      let setInt32Result = view.setInt32(0, num2, false);
      let _cloneIntoResult = PRFSalt._cloneInto(tmp3);
      let updateResult = _cloneIntoResult.update(uint8Array);
      let digestIntoResult = updateResult.digestInto(uint8Array1);
      let result = subarrayResult.set(uint8Array1.subarray(0, subarrayResult.length));
      for (let num3 = 1; num3 < c; num3 = num3 + 1) {
        let _cloneIntoResult1 = PRF._cloneInto(_cloneIntoResult);
        let updateResult1 = _cloneIntoResult1.update(uint8Array1);
        let digestIntoResult1 = updateResult1.digestInto(uint8Array1);
        let num4 = 0;
        if (0 < subarrayResult.length) {
          do {
            subarrayResult[num4] = subarrayResult[num4] ^ uint8Array1[num4];
            num4 = num4 + 1;
            length = subarrayResult.length;
          } while (num4 < length);
        }
      }
      num2 = num2 + 1;
      num = num + PRF.outputLen;
      tmp3 = _cloneIntoResult;
      tmp4 = _cloneIntoResult;
    } while (num < dkLen);
  }
  PRF.destroy();
  PRFSalt.destroy();
  if (tmp4) {
    tmp4.destroy();
  }
  uint8Array1.fill(0);
  return DK;
};
export const pbkdf2Async = function pbkdf2Async(arg0, arg1, arg2, arg3) {
  const self = this;
  const apply = closure_5.apply;
  if (typeof apply === "unknown") {
    let applyArgumentsResult = HermesBuiltin.applyArguments(self);
  } else {
    applyArgumentsResult = apply(self, arguments);
  }
  return applyArgumentsResult;
};
