// _runtime/09833_pbkdf2Init.js
import _asyncLoop from "09830__asyncLoop.js";
import number from "09831_number.js";
import closure_2 from "00005_asyncGeneratorStep.js";

function pbkdf2Init(sha256, B, B, arg3) {
  number.hash(sha256);
  ({ c, dkLen, asyncTick } = _asyncLoop.checkOpts({ dkLen: 32, asyncTick: 10 }, arg3));
  number.number(c);
  number.number(dkLen);
  number.number(asyncTick);
  if (c < 1) {
    const _Error = Error;
    error = new Error("PBKDF2: iterations (c) should be >= 1");
    throw error;
  } else {
    const _Uint8Array = Uint8Array;
    const toBytesResult = tmp(9830).toBytes(B);
    const uint8Array = new Uint8Array(dkLen);
    const hmac = tmp(9834).hmac;
    let obj = hmac.create(sha256, toBytesResult);
    const toBytesResult1 = tmp(9830).toBytes(B);
    obj = { c: null, dkLen: null, asyncTick: null, DK: null, PRF: null, PRFSalt: null };
    obj[0] = c;
    obj[1] = dkLen;
    obj[2] = asyncTick;
    obj[3] = uint8Array;
    obj[4] = obj;
    obj[5] = obj._cloneInto().update(toBytesResult1);
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
function _pbkdf2Async() {
  const self = this;
  const tmp = callback((arg0, arg1, arg2, arg3) => {
    closure_0 = arg0;
    closure_1 = arg1;
    closure_2 = arg2;
    closure_3 = arg3;
    c12 = 0;
    c13 = 0;
    c10 = 0;
    return (function*(arg0, arg1, arg2, arg3) {
      if (c13 === 2) {
        c13 = 3;
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
          c13 = 2;
          if (0 === c12) {
            if (arg0 === 1) {
              c13 = 3;
              throw arg1;
            } else if (arg0 === 2) {
              c13 = 3;
              obj = { value: null, done: true };
              obj[0] = arg1;
              return obj;
            } else {
              let uint8Array1 = tmp3;
              closure_8 = tmp7;
              c0 = undefined;
              c1 = undefined;
              dkLen = undefined;
              c3 = undefined;
              let callback3;
              let iter4;
              let next;
              let iter3;
              closure_8 = undefined;
              uint8Array1 = undefined;
              let v0;
              closure_11 = undefined;
              c12 = undefined;
              const tmp69 = callback2(c0, c1, dkLen, c3);
              ({ c: c1, dkLen } = tmp69);
              ({ asyncTick: c3, DK: closure_4, PRF } = tmp69);
              iter4 = PRF;
              next = tmp69.PRFSalt;
              const _Uint8Array = Uint8Array;
              const uint8Array = new Uint8Array(4);
              iter3 = uint8Array;
              closure_8 = callback(table[2]).createView(uint8Array);
              const _Uint8Array2 = Uint8Array;
              uint8Array1 = new Uint8Array(PRF.outputLen);
              v0 = function* _loop() {
                if (v0 === 2) {
                  v0 = 3;
                  HermesBuiltin.throwTypeError();
                } else if (tmp3 === 3) {
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
                    v0 = 2;
                    if (0 === table) {
                      if (arg0 === 1) {
                        v0 = 3;
                        throw arg1;
                      } else if (arg0 === 2) {
                        v0 = 3;
                        obj = { value: null, done: true };
                        obj[0] = arg1;
                        return obj;
                      } else {
                        const subarrayResult = closure_1_4.subarray(closure_1_12, closure_1_12 + closure_1_5.outputLen);
                        v0 = subarrayResult;
                        closure_1_8.setInt32(0, closure_1_11, false);
                        let _cloneIntoResult = closure_1_6._cloneInto(v0);
                        v0 = _cloneIntoResult;
                        _cloneIntoResult.update(closure_1_7).digestInto(closure_1_9);
                        const result = subarrayResult.set(closure_1_9.subarray(0, subarrayResult.length));
                        table = 1;
                        v0 = 1;
                        obj1 = { value: null, done: false };
                        obj1[0] = v0(table[2]).asyncLoop(table - 1, closure_1_3, () => {
                          let length;
                          const _cloneIntoResult = closure_1_5._cloneInto(c0);
                          closure_1_5._cloneInto(c0).update(closure_1_9).digestInto(closure_1_9);
                          let num = 0;
                          if (0 < c0.length) {
                            do {
                              let tmp2 = c0;
                              let tmp3 = closure_1_9;
                              c0[num] = c0[num] ^ closure_1_9[num];
                              num = num + 1;
                              length = c0.length;
                            } while (num < length);
                          }
                        });
                        return obj1;
                      }
                    } else if (arg0 === 1) {
                      v0 = 3;
                      throw arg1;
                    } else if (arg0 === 2) {
                      v0 = 3;
                      obj = { value: null, done: true };
                      obj[0] = arg1;
                      return obj;
                    } else {
                      v0 = 3;
                      return { value: "HermesInternal", done: null };
                    }
                  } catch (tmp5) {
                    v0 = tmp;
                    throw tmp5;
                  }
                }
              };
              closure_11 = 1;
              c12 = 0;
              if (c12 < dkLen) {
                iter3 = v0()[tmp62.iterator]();
                HermesBuiltin.ensureObject("iterator is not an object");
                next = iter3.next;
                callback3 = undefined;
                const tmp29 = v0();
              }
              callback3(iter4, next, callback3, c0, uint8Array1);
              c13 = 3;
              obj1 = { value: null, done: true };
              obj1[0] = callback3;
              return obj1;
            }
          } else {
            if (1 !== tmp7) {
              v0 = 0;
              const method = HermesBuiltin.getMethod("throw");
              if (method === undefined) {
                const method1 = HermesBuiltin.getMethod("return");
                if (method1 !== undefined) {
                  HermesBuiltin.ensureObject("iterator.return() did not return an object");
                }
                HermesBuiltin.throwTypeError();
              } else {
                const iter = method(tmp9);
                HermesBuiltin.ensureObject("iterator.throw() did not return an object");
                if (iter.done) {
                  iter4 = iter;
                } else {
                  c12 = 1;
                  c13 = 1;
                  return iter;
                }
              }
              const value = iter4.value;
              closure_11 = closure_11 + 1;
              c12 = c12 + iter4.outputLen;
              tmp9 = closure_11;
            }
            v0 = 1;
            if (arg0 === 1) {
              c13 = 3;
              throw arg1;
            } else {
              callback3 = arg1;
              if (arg0 === 2) {
                callback3 = arg1;
                v0 = 0;
                const method2 = HermesBuiltin.getMethod("return");
                if (method2 === undefined) {
                  c13 = 3;
                  const obj2 = { value: null, done: true };
                  obj2[0] = arg1;
                  return obj2;
                } else {
                  const iter2 = method2(callback3);
                  HermesBuiltin.ensureObject("iterator.return() did not return an object");
                  if (iter2.done) {
                    c13 = 3;
                    obj = { value: null, done: true };
                    obj[0] = iter2.value;
                    return obj;
                  } else {
                    c12 = 1;
                    c13 = 1;
                    return iter2;
                  }
                }
              } else {
                v0 = 0;
                const tmp20 = arg1;
              }
            }
          }
          iter4 = next(tmp20);
          HermesBuiltin.ensureObject("iterator.next() did not return an object");
          if (!iter4.done) {
            c12 = 1;
            c13 = 1;
            return iter4;
          }
        } catch (tmp54) {
          closure_11 = tmp54;
          if (tmp4 === v0) {
            c13 = tmp2;
            throw tmp54;
          } else {
            c12 = tmp;
          }
        }
      }
    })();
  });
  closure_5 = tmp;
  const apply = tmp.apply;
  if (typeof apply === "unknown") {
    let applyArgumentsResult = HermesBuiltin.applyArguments(self);
  } else {
    applyArgumentsResult = apply(self, arguments);
  }
  return applyArgumentsResult;
}

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
      let tmp8 = num;
      let tmp9 = num2;
      for (let num3 = 1; num3 < c; num3 = num3 + 1) {
        let _cloneIntoResult1 = PRF._cloneInto(_cloneIntoResult);
        let updateResult1 = _cloneIntoResult1.update(uint8Array1);
        let digestIntoResult1 = updateResult1.digestInto(uint8Array1);
        let tmp11 = num3;
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
  const apply = _pbkdf2Async.apply;
  if (typeof apply === "unknown") {
    let applyArgumentsResult = HermesBuiltin.applyArguments(self);
  } else {
    applyArgumentsResult = apply(self, arguments);
  }
  return applyArgumentsResult;
};