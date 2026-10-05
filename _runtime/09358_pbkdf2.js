// === Module 9358: pbkdf2 ===

// Module 9358 (pbkdf2)
import u8 from "u8" /* 9355 */;
import _mod9356 from "module_9356" /* 9356 */;
import HMAC from "HMAC" /* 9359 */;
import _asyncToGenerator from "_asyncToGenerator" /* 5 */;

let c12, c13, closure_12, value;

function pbkdf2Init(sha256, B, B2, arg3) {
  let _cloneIntoResult;
  let asyncTick;
  let c;
  let dkLen;
  _mod9356.hash(sha256);
  ({ c, dkLen, asyncTick } = u8.checkOpts({ dkLen: 32, asyncTick: 10 }, arg3));
  u8.checkOpts({ dkLen: 32, asyncTick: 10 }, arg3);
  _mod9356.number(c);
  _mod9356.number(dkLen);
  _mod9356.number(asyncTick);
  if (c < 1) {
    const _Error = Error;
    const self = this;
    const self2 = this;
    const error = new Error("PBKDF2: iterations (c) should be >= 1");
    throw error;
  } else {
    const _Uint8Array = Uint8Array;
    const self3 = this;
    const self4 = this;
    const toBytesResult = u8.toBytes(B);
    const toBytesResult1 = u8.toBytes(B);
    const uint8Array = new Uint8Array(dkLen);
    const hmac = HMAC.hmac;
    PRF = hmac.create(sha256, toBytesResult);
    const obj2 = { c, dkLen, asyncTick, DK: uint8Array, PRF, PRFSalt: _cloneIntoResult.update(toBytesResult1) };
    _cloneIntoResult = PRF._cloneInto();
    return obj2;
  }
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
let PRF = function _pbkdf2Async() {
  let obj = _asyncToGenerator(async function(arg0, arg1, arg2, arg3) {
    let c1;
    let c3;
    let c4;
    let dkLen;
    let closure_0 = arg0;
    let closure_1 = arg1;
    let closure_2 = arg2;
    let closure_3 = arg3;
    if (c13 === 2) {
      c13 = 3;
      throw new TypeError("Generator functions may not be called on executing generators");
    } else if (tmp3 === 3) {
      if (arg0 === 1) {
        throw value;
      } else if (arg0 === 2) {
        let obj2 = { value, done: true };
        return obj2;
      } else {
        return { value: "IconComponent", done: null };
      }
    } else {
      let c10;
      let closure_11;
      try {
        let next;
        let tmp16;
        let iter4;
        let num = 2;
        c13 = 2;
        const tmp4 = c12;
        if (0 === c12) {
          if (arg0 === 1) {
            c13 = 3;
            throw value;
          } else if (arg0 === 2) {
            c13 = 3;
            let obj3 = { value, done: true };
            return obj3;
          } else {
            let closure_9 = tmp;
            let c0;
            c1 = undefined;
            dkLen = undefined;
            c3 = undefined;
            value = undefined;
            PRF = undefined;
            const tmp63 = pbkdf2Init(closure_0, closure_1, closure_2, closure_3);
            ({ c: c1, dkLen } = tmp63);
            ({ asyncTick: c3, DK: c4, PRF } = tmp63);
            const PRFSalt = tmp63.PRFSalt;
            const _Uint8Array = Uint8Array;
            const self = this;
            const self2 = this;
            const uint8Array = new Uint8Array(4);
            let closure_8 = u8.createView(uint8Array);
            const _Uint8Array2 = Uint8Array;
            const self3 = this;
            const self4 = this;
            const uint8Array1 = new Uint8Array(PRF.outputLen);
            function* _loop() {
              let c1;
              let v3;
              if (v3 === 2) {
                v3 = 3;
                throw new TypeError("Generator functions may not be called on executing generators");
              } else if (tmp2 === 3) {
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
                  let num = 2;
                  v3 = 2;
                  if (0 === _undefined) {
                    if (arg0 === 1) {
                      v3 = 3;
                      throw value;
                    } else if (arg0 === 2) {
                      v3 = 3;
                      const obj3 = { value, done: true };
                      return obj3;
                    } else {
                      const subarrayResult = _undefined2.subarray(closure_12, closure_12 + PRF.outputLen);
                      int32.setInt32(0, closure_11, false);
                      let _cloneIntoResult = PRFSalt._cloneInto(v3);
                      let updateResult = _cloneIntoResult.update(uint8Array);
                      const digestIntoResult = updateResult.digestInto(uint8Array1);
                      const result = subarrayResult.set(uint8Array1.subarray(0, subarrayResult.length));
                      _undefined = 1;
                      v3 = 1;
                      const obj4 = {
                        value: v3(_undefined[2]).asyncLoop(_undefined - 1, c3, async () => {
                                  let length;
                                  const _cloneIntoResult = closure_2_5._cloneInto(v3);
                                  const updateResult = _cloneIntoResult.update(closure_2_9);
                                  updateResult.digestInto(closure_2_9);
                                  let num = 0;
                                  if (0 < subarrayResult.length) {
                                    do {
                                      subarrayResult[num] = subarrayResult[num] ^ closure_2_9[num];
                                      num = num + 1;
                                      length = subarrayResult.length;
                                    } while (num < length);
                                  }
                                }),
                        done: false
                      };
                      return obj4;
                    }
                  } else if (arg0 === 1) {
                    v3 = 3;
                    throw value;
                  } else if (arg0 === 2) {
                    v3 = 3;
                    const obj = { value, done: true };
                    return obj;
                  } else {
                    v3 = 3;
                    return { value: "IconComponent", done: null };
                  }
                } catch (tmp4) {
                  v3 = 3;
                  throw tmp4;
                }
              }
            }
            closure_11 = 1;
            closure_12 = 0;
            if (closure_12 < dkLen) {
              const tmp25 = _loop();
              const iter3 = tmp25[tmp56.iterator]();
              HermesBuiltin.ensureObject("iterator is not an object");
              next = iter3.next;
              value = undefined;
            }
            closure_137_4(PRF, PRFSalt, value, c0, uint8Array1);
            c13 = 3;
            let obj4 = { value, done: true };
            return obj4;
          }
        } else {
          if (1 === tmp4) {
            c10 = 1;
            if (arg0 === 1) {
              c13 = 3;
              throw value;
            } else if (arg0 === 2) {
              c10 = 0;
              const method = HermesBuiltin.getMethod("return");
              if (method === undefined) {
                c13 = 3;
                const obj5 = { value, done: true };
                return obj5;
              } else {
                const iter2 = method(value);
                HermesBuiltin.ensureObject("iterator.return() did not return an object");
                if (iter2.done) {
                  c13 = 3;
                  let obj = { value: iter2.value, done: true };
                  return obj;
                } else {
                  c12 = 1;
                  c13 = 1;
                  return iter2;
                }
              }
            } else {
              c10 = 0;
              tmp16 = value;
            }
          } else {
            c10 = 0;
            const str = "throw";
            const tmp6 = closure_11;
            const method1 = HermesBuiltin.getMethod("throw");
            if (method1 === undefined) {
              const method2 = HermesBuiltin.getMethod("return");
              if (method2 !== undefined) {
                HermesBuiltin.ensureObject("iterator.return() did not return an object");
              }
              throw new TypeError("yield* delegate must have a .throw() method");
            } else {
              const iter = method1(tmp6);
              HermesBuiltin.ensureObject("iterator.throw() did not return an object");
              if (iter.done) {
                iter4 = iter;
              } else {
                c12 = 1;
                c13 = 1;
                return iter;
              }
            }
          }
          value = iter4.value;
          closure_11 = closure_11 + 1;
          closure_12 = closure_12 + PRF.outputLen;
        }
        iter4 = next(tmp16);
        HermesBuiltin.ensureObject("iterator.next() did not return an object");
        if (!iter4.done) {
          c12 = 1;
          c13 = 1;
          return iter4;
        }
      } catch (tmp50) {
        closure_11 = tmp50;
        if (0 === c10) {
          c13 = 3;
          throw tmp50;
        } else {
          c12 = 2;
        }
      }
    }
  });
  return obj(...arguments);
};

export const pbkdf2 = function pbkdf2(sha256, B, B2, arg3) {
  let DK;
  let PRFSalt;
  let c;
  let dkLen;
  let length;
  let tmp3;
  ({ c, dkLen, DK, PRF, PRFSalt } = pbkdf2Init(sha256, B, B, arg3));
  pbkdf2Init(sha256, B, B, arg3);
  const uint8Array = new Uint8Array(4);
  const view = u8.createView(uint8Array);
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
  return obj(...arguments);
};