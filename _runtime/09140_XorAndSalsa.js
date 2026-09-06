// === Module 9140: XorAndSalsa ===

// Module 9140 (XorAndSalsa)
import _asyncLoop from "_asyncLoop" /* 9141 */;
import number from "number" /* 9142 */;
import pbkdf2Init from "pbkdf2Init" /* 9144 */;
import _mod9146 from "module_9146" /* 9146 */;
import asyncGeneratorStep from "asyncGeneratorStep" /* 5 */;

function XorAndSalsa(B32, sum, V, result1, B322, sum13) {
  let tmp81;
  let tmp82;
  let tmp83;
  let tmp84;
  let tmp85;
  let tmp86;
  let tmp87;
  let tmp88;
  let tmp89;
  let tmp90;
  let tmp91;
  let tmp92;
  let tmp93;
  let tmp94;
  let tmp95;
  let tmp96;
  const tmp6 = B32[++sum + 1] ^ V[++result1 + 1];
  const tmp7 = +++sum + 1 + 1;
  const tmp8 = +++result1 + 1 + 1;
  const tmp15 = B32[++tmp7 + 1 + 1] ^ V[++tmp8 + 1 + 1];
  const tmp16 = +++tmp7 + 1 + 1 + 1;
  const tmp17 = +++tmp8 + 1 + 1 + 1;
  const tmp24 = B32[++tmp16 + 1 + 1] ^ V[++tmp17 + 1 + 1];
  const tmp25 = +++tmp16 + 1 + 1 + 1;
  const tmp26 = +++tmp17 + 1 + 1 + 1;
  const tmp33 = B32[++tmp25 + 1 + 1] ^ V[++tmp26 + 1 + 1];
  const tmp34 = +++tmp25 + 1 + 1 + 1;
  const tmp35 = +++tmp26 + 1 + 1 + 1;
  const tmp42 = B32[++tmp34 + 1 + 1] ^ V[++tmp35 + 1 + 1];
  const tmp43 = +++tmp34 + 1 + 1 + 1;
  const tmp44 = +++tmp35 + 1 + 1 + 1;
  let num = 0;
  let tmp47 = tmp46;
  let tmp48 = tmp45;
  let tmp49 = tmp42;
  let tmp50 = tmp39;
  let tmp51 = tmp36;
  let tmp52 = tmp33;
  let tmp53 = tmp30;
  let tmp54 = tmp27;
  let tmp55 = tmp24;
  let tmp56 = tmp21;
  let tmp57 = tmp18;
  let tmp58 = tmp15;
  let tmp59 = tmp12;
  let tmp60 = tmp9;
  let tmp61 = tmp6;
  let tmp62 = tmp3;
  do {
    let tmp65 = tmp58 ^ _asyncLoop.rotl(tmp62 + tmp50 | 0, 7);
    let tmp66 = tmp54 ^ _asyncLoop.rotl(tmp65 + tmp62 | 0, 9);
    let tmp67 = tmp50 ^ _asyncLoop.rotl(tmp66 + tmp65 | 0, 13);
    let tmp68 = tmp62 ^ _asyncLoop.rotl(tmp67 + tmp66 | 0, 18);
    let tmp69 = tmp53 ^ _asyncLoop.rotl(tmp57 + tmp61 | 0, 7);
    let tmp70 = tmp49 ^ _asyncLoop.rotl(tmp69 + tmp57 | 0, 9);
    let tmp71 = tmp61 ^ _asyncLoop.rotl(tmp70 + tmp69 | 0, 13);
    let tmp72 = tmp57 ^ _asyncLoop.rotl(tmp71 + tmp70 | 0, 18);
    let tmp73 = tmp48 ^ _asyncLoop.rotl(tmp52 + tmp56 | 0, 7);
    let tmp74 = tmp60 ^ _asyncLoop.rotl(tmp73 + tmp52 | 0, 9);
    let tmp75 = tmp56 ^ _asyncLoop.rotl(tmp74 + tmp73 | 0, 13);
    let tmp76 = tmp52 ^ _asyncLoop.rotl(tmp75 + tmp74 | 0, 18);
    let tmp77 = tmp59 ^ _asyncLoop.rotl(tmp47 + tmp51 | 0, 7);
    let tmp78 = tmp55 ^ _asyncLoop.rotl(tmp77 + tmp47 | 0, 9);
    let tmp79 = tmp51 ^ _asyncLoop.rotl(tmp78 + tmp77 | 0, 13);
    let tmp80 = tmp47 ^ _asyncLoop.rotl(tmp79 + tmp78 | 0, 18);
    tmp81 = tmp71 ^ _asyncLoop.rotl(tmp68 + tmp77 | 0, 7);
    tmp82 = tmp74 ^ _asyncLoop.rotl(tmp81 + tmp68 | 0, 9);
    tmp83 = tmp77 ^ _asyncLoop.rotl(tmp82 + tmp81 | 0, 13);
    tmp84 = tmp68 ^ _asyncLoop.rotl(tmp83 + tmp82 | 0, 18);
    tmp85 = tmp75 ^ _asyncLoop.rotl(tmp72 + tmp65 | 0, 7);
    tmp86 = tmp78 ^ _asyncLoop.rotl(tmp85 + tmp72 | 0, 9);
    tmp87 = tmp65 ^ _asyncLoop.rotl(tmp86 + tmp85 | 0, 13);
    tmp88 = tmp72 ^ _asyncLoop.rotl(tmp87 + tmp86 | 0, 18);
    tmp89 = tmp79 ^ _asyncLoop.rotl(tmp76 + tmp69 | 0, 7);
    tmp90 = tmp66 ^ _asyncLoop.rotl(tmp89 + tmp76 | 0, 9);
    tmp91 = tmp69 ^ _asyncLoop.rotl(tmp90 + tmp89 | 0, 13);
    tmp92 = tmp76 ^ _asyncLoop.rotl(tmp91 + tmp90 | 0, 18);
    tmp93 = tmp67 ^ _asyncLoop.rotl(tmp80 + tmp73 | 0, 7);
    tmp94 = tmp70 ^ _asyncLoop.rotl(tmp93 + tmp80 | 0, 9);
    tmp95 = tmp73 ^ _asyncLoop.rotl(tmp94 + tmp93 | 0, 13);
    tmp96 = tmp80 ^ _asyncLoop.rotl(tmp95 + tmp94 | 0, 18);
    num = num + 2;
    tmp47 = tmp96;
    tmp48 = tmp95;
    tmp49 = tmp94;
    tmp50 = tmp93;
    tmp51 = tmp89;
    tmp52 = tmp92;
    tmp53 = tmp91;
    tmp54 = tmp90;
    tmp55 = tmp86;
    tmp56 = tmp85;
    tmp57 = tmp88;
    tmp58 = tmp87;
    tmp59 = tmp83;
    tmp60 = tmp82;
    tmp61 = tmp81;
    tmp62 = tmp84;
  } while (num < 8);
  B322[+sum13] = (B32[+sum] ^ V[+result1]) + tmp84 | 0;
  B322[++sum13 + 1] = tmp6 + tmp81 | 0;
  const tmp99 = +++sum13 + 1 + 1;
  B322[tmp99] = (B32[tmp7] ^ V[tmp8]) + tmp82 | 0;
  B322[+tmp99 + 1] = (B32[+tmp7 + 1] ^ V[+tmp8 + 1]) + tmp83 | 0;
  B322[++tmp99 + 1 + 1] = tmp15 + tmp87 | 0;
  const tmp102 = +++tmp99 + 1 + 1 + 1;
  B322[tmp102] = (B32[tmp16] ^ V[tmp17]) + tmp88 | 0;
  B322[+tmp102 + 1] = (B32[+tmp16 + 1] ^ V[+tmp17 + 1]) + tmp85 | 0;
  B322[++tmp102 + 1 + 1] = tmp24 + tmp86 | 0;
  const tmp105 = +++tmp102 + 1 + 1 + 1;
  B322[tmp105] = (B32[tmp25] ^ V[tmp26]) + tmp90 | 0;
  B322[+tmp105 + 1] = (B32[+tmp25 + 1] ^ V[+tmp26 + 1]) + tmp91 | 0;
  B322[++tmp105 + 1 + 1] = tmp33 + tmp92 | 0;
  const tmp108 = +++tmp105 + 1 + 1 + 1;
  B322[tmp108] = (B32[tmp34] ^ V[tmp35]) + tmp89 | 0;
  B322[+tmp108 + 1] = (B32[+tmp34 + 1] ^ V[+tmp35 + 1]) + tmp93 | 0;
  B322[++tmp108 + 1 + 1] = tmp42 + tmp94 | 0;
  const tmp111 = +++tmp108 + 1 + 1 + 1;
  B322[tmp111] = (B32[tmp43] ^ V[tmp44]) + tmp95 | 0;
  B322[+tmp111 + 1] = (B32[+tmp43 + 1] ^ V[+tmp44 + 1]) + tmp96 | 0;
}
function BlockMix(V, result1, B32, sum13, arg4) {
  let sum4 = result1;
  let sum = sum13 + 16 * arg4;
  let num = 0;
  do {
    B32[sum + num] = V[sum4 + 16 * (2 * arg4 - 1) + num];
    num = num + 1;
  } while (num < 16);
  let sum3 = sum13;
  let num2 = 0;
  if (0 < arg4) {
    do {
      let tmp4 = XorAndSalsa;
      let tmp11 = XorAndSalsa(B32, sum, V, sum4, B32, sum3);
      let sum1 = sum;
      let tmp14 = sum3;
      if (0 < num2) {
        sum1 = sum + 16;
      }
      let sum2 = sum4 + 16;
      let tmp4Result = tmp4(B32, tmp14, V, sum2, B32, sum1);
      num2 = num2 + 1;
      sum3 = sum3 + 16;
      sum4 = sum2 + 16;
      sum = sum1;
    } while (num2 < arg4);
  }
}
function scryptInit(B, B, arg2) {
  ({ N, r, p, dkLen, asyncTick, maxmem, onProgress } = _asyncLoop.checkOpts({ dkLen: 32, asyncTick: 10, maxmem: 1073742848 }, arg2));
  number.number(N);
  number.number(r);
  number.number(p);
  number.number(dkLen);
  number.number(asyncTick);
  number.number(maxmem);
  if (undefined !== onProgress) {
    if (typeof onProgress !== "function") {
      const _Error4 = Error;
      const error = new Error("progressCb should be function");
      throw error;
    }
  }
  let result = 128 * r;
  if (N > 1) {
    if (!(N & N - 1)) {
      if (N <= 4294967296) {
        if (p >= 0) {
          if (p <= 137438953440 / result) {
            if (dkLen >= 0) {
              if (dkLen <= 137438953440) {
                const result1 = result * (N + p);
                if (result1 > maxmem) {
                  const _Error = Error;
                  const _HermesInternal = HermesInternal;
                  const error1 = new Error("Scrypt: parameters too large, " + result1 + " (128 * r * (N + p)) > " + maxmem + " (maxmem)");
                  throw error1;
                } else {
                  let obj = { c: 1, dkLen: result * p };
                  const pbkdf2Result = tmp(9144).pbkdf2(tmp(9146).sha256, B, B, obj);
                  const _Uint8Array = Uint8Array;
                  const uint8Array = new Uint8Array(result * N);
                  const u32Result = tmp(9141).u32(pbkdf2Result);
                  const _Uint8Array2 = Uint8Array;
                  const uint8Array1 = new Uint8Array(result);
                  function blockMixCb() {

                  }
                  const u32Result1 = tmp(9141).u32(uint8Array);
                  if (onProgress) {
                    const result2 = 2 * N * p;
                    const _Math = Math;
                    const _Math2 = Math;
                    closure_2 = Math.max(Math.floor(result2 / 10000), 1);
                    closure_3 = 0;
                    blockMixCb = function blockMixCb() {
                      closure_3 = closure_3 + 1;
                      let tmp2 = !onProgress;
                      if (onProgress) {
                        let result = closure_3 % closure_2;
                        if (result) {
                          result = closure_3 !== result2;
                        }
                        tmp2 = result;
                      }
                      if (!tmp2) {
                        onProgress(closure_3 / result2);
                      }
                    };
                  }
                  obj = { N, r, p, dkLen, blockSize32: result / 4, V: u32Result1, B32: u32Result, B: pbkdf2Result, tmp: tmp(9141).u32(uint8Array1), blockMixCb, asyncTick };
                  return obj;
                }
              }
            }
            const _Error2 = Error;
            const error2 = new Error("Scrypt: dkLen should be positive integer less than or equal to (2^32 - 1) * 32");
            throw error2;
          }
        }
        const _Error3 = Error;
        const error3 = new Error("Scrypt: p must be a positive integer less than or equal to ((2^32 - 1) * 32) / (128 * r)");
        throw error3;
      }
    }
  }
  const error4 = new Error("Scrypt: N must be larger than 1, a power of 2, and less than 2^32");
  throw error4;
}
function scryptOutput(B, dkLen, arr, arr2, arr3) {
  arr.fill(0);
  arr2.fill(0);
  arr3.fill(0);
  return pbkdf2Init.pbkdf2(_mod9146.sha256, B, arr, { c: 1, dkLen });
}
let closure_7 = async function _scryptAsync(arg0, value) {
  if (c12 === 2) {
    c12 = 3;
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
      c12 = 2;
      if (0 === c11) {
        if (arg0 === 1) {
          c12 = 3;
          throw value;
        } else if (arg0 === 2) {
          c12 = 3;
          obj = { value, done: true };
          return obj;
        } else {
          closure_8 = tmp3;
          closure_7 = tmp7;
          closure_135_0 = closure_0;
          closure_135_1 = undefined;
          closure_135_2 = undefined;
          closure_135_3 = undefined;
          closure_135_4 = undefined;
          closure_135_5 = undefined;
          closure_135_6 = undefined;
          closure_135_7 = undefined;
          closure_135_8 = undefined;
          closure_135_9 = undefined;
          closure_135_10 = undefined;
          closure_135_11 = undefined;
          closure_135_12 = undefined;
          closure_135_13 = undefined;
          const tmp73 = scryptInit(closure_0, closure_1, closure_2);
          ({ N: closure_135_1, r: closure_135_2, p } = tmp73);
          closure_135_3 = p;
          ({ dkLen: closure_135_4, blockSize32: closure_135_5, V: closure_135_6, B32 } = tmp73);
          closure_135_7 = B32;
          ({ B: closure_135_8, tmp: closure_135_9, blockMixCb: closure_135_10, asyncTick: closure_135_11 } = tmp73);
          if (!_asyncLoop.isLE) {
            _asyncLoop.byteSwap32(B32);
          }
          closure_135_12 = async function _loop(arg0, value) {
            if (c3 === 2) {
              c3 = 3;
              throw new TypeError("Generator functions may not be called on executing generators");
            } else if (tmp4 === 3) {
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
                c3 = 2;
                if (0 === c2) {
                  if (arg0 === 1) {
                    c3 = 3;
                    throw value;
                  } else if (arg0 === 2) {
                    c3 = 3;
                    obj = { value, done: true };
                    return obj;
                  } else {
                    closure_0 = tmp5;
                    closure_128_0 = undefined;
                    closure_128_1 = undefined;
                    const result = next * closure_2_13;
                    closure_128_0 = result;
                    let num9 = 0;
                    if (0 < next) {
                      do {
                        iter3[num9] = closure_2_7[result + num9];
                        num9 = num9 + 1;
                      } while (num9 < next);
                    }
                    closure_128_1 = 0;
                    c2 = 1;
                    c3 = 1;
                    const obj1 = {
                      value: closure_0(tmp2[1]).asyncLoop(closure_2_1 - 1, closure_2_11, async () => {
                                let sum5 = sum;
                                sum = sum + closure_2_5;
                                let sum1 = sum + 16 * c2;
                                let num = 0;
                                do {
                                  tmp[sum1 + num] = tmp[sum5 + 16 * (2 * tmp4 - 1) + num];
                                  num = num + 1;
                                } while (num < 16);
                                let sum4 = sum;
                                let num2 = 0;
                                if (0 < c2) {
                                  do {
                                    let tmp7 = closure_3_3;
                                    let tmp14 = closure_3_3(tmp, sum1, tmp, sum5, tmp, sum4);
                                    let sum2 = sum1;
                                    let tmp17 = sum4;
                                    if (0 < num2) {
                                      sum2 = sum1 + 16;
                                    }
                                    let sum3 = sum5 + 16;
                                    let tmp7Result = tmp7(tmp, tmp17, tmp, sum3, tmp, sum2);
                                    num2 = num2 + 1;
                                    sum4 = sum4 + 16;
                                    sum5 = sum3 + 16;
                                    sum1 = sum2;
                                  } while (num2 < tmp4);
                                }
                                closure_2_10();
                              }),
                      done: false
                    };
                    return obj1;
                  }
                } else if (1 === tmp5) {
                  if (arg0 === 1) {
                    c3 = 3;
                    throw value;
                  } else if (arg0 === 2) {
                    c3 = 3;
                    const obj2 = { value, done: true };
                    return obj2;
                  } else {
                    iter4(closure_129_6, (closure_129_1 - 1) * closure_129_5, closure_129_7, closure_128_0, closure_129_2);
                    closure_129_10();
                    c2 = 2;
                    c3 = 1;
                    const obj3 = {
                      value: closure_0(tmp2[1]).asyncLoop(closure_129_1, closure_129_11, async () => {
                                let tmp = closure_2_7;
                                let tmp2 = closure_1_0;
                                let num = 0;
                                if (0 < closure_2_5) {
                                  do {
                                    closure_2_9[num] = closure_2_7[closure_1_0 + num] ^ closure_2_6[tmp3 * closure_2_5 + num];
                                    num = num + 1;
                                    tmp = closure_2_7;
                                    tmp2 = closure_1_0;
                                  } while (num < closure_2_5);
                                }
                                sum = tmp2 + 16 * c2;
                                let num2 = 0;
                                do {
                                  tmp[sum + num2] = tmp9[16 * (2 * tmp10 - 1) + num2];
                                  num2 = num2 + 1;
                                } while (num2 < 16);
                                let sum3 = tmp2;
                                let num3 = 0;
                                let num4 = 0;
                                if (0 < c2) {
                                  do {
                                    let tmp13 = closure_3_3;
                                    let tmp20 = closure_3_3(tmp, sum, tmp9, num4, tmp, sum3);
                                    let sum1 = sum;
                                    let tmp23 = sum3;
                                    if (0 < num3) {
                                      sum1 = sum + 16;
                                    }
                                    let sum2 = num4 + 16;
                                    let tmp13Result = tmp13(tmp, tmp23, tmp9, sum2, tmp, sum1);
                                    num3 = num3 + 1;
                                    sum3 = sum3 + 16;
                                    num4 = sum2 + 16;
                                    sum = sum1;
                                  } while (num3 < tmp10);
                                }
                                closure_2_10();
                              }),
                      done: false
                    };
                    return obj3;
                  }
                } else if (arg0 === 1) {
                  c3 = 3;
                  throw value;
                } else if (arg0 === 2) {
                  c3 = 3;
                  obj = { value, done: true };
                  return obj;
                } else {
                  c3 = 3;
                  return { value: "HermesInternal", done: null };
                }
              } catch (tmp13) {
                c3 = tmp;
                throw tmp13;
              }
            }
          };
          closure_135_13 = 0;
          if (closure_135_13 < p) {
            const iter3 = closure_135_12()[tmp68.iterator]();
            HermesBuiltin.ensureObject("iterator is not an object");
            const next = iter3.next;
            closure_3 = undefined;
            let tmp32 = closure_135_12();
          }
          if (!closure_136_0(closure_136_1[1]).isLE) {
            closure_136_0(closure_136_1[1]).byteSwap32(closure_135_7);
          }
          c12 = 3;
          let obj1 = { value: closure_136_6(closure_135_0, closure_135_4, closure_135_8, closure_135_6, closure_135_9), done: true };
          return obj1;
        }
      } else {
        if (1 === tmp7) {
          c9 = 1;
          if (arg0 === 1) {
            c12 = 3;
            throw value;
          } else {
            closure_3 = value;
            if (arg0 === 2) {
              closure_3 = value;
              c9 = 0;
              const method = HermesBuiltin.getMethod("return");
              if (method === undefined) {
                c12 = 3;
                let obj2 = { value, done: true };
                return obj2;
              } else {
                const iter2 = method(closure_3);
                HermesBuiltin.ensureObject("iterator.return() did not return an object");
                if (iter2.done) {
                  c12 = 3;
                  obj = { value: iter2.value, done: true };
                  return obj;
                } else {
                  c11 = 1;
                  c12 = 1;
                  return iter2;
                }
              }
            } else {
              c9 = 0;
              let tmp19 = value;
            }
          }
        } else {
          c9 = 0;
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
              c11 = 1;
              c12 = 1;
              return iter;
            }
          }
          tmp9 = closure_10;
        }
        value = iter4.value;
        closure_135_13 = closure_135_13 + 1;
      }
      iter4 = next(tmp19);
      HermesBuiltin.ensureObject("iterator.next() did not return an object");
      if (!iter4.done) {
        c11 = 1;
        c12 = 1;
        return iter4;
      }
    } catch (tmp61) {
      closure_10 = tmp61;
      if (tmp4 === c9) {
        c12 = tmp2;
        throw tmp61;
      } else {
        c11 = tmp;
      }
    }
  }
};

export const scrypt = function scrypt(B, B, arg2) {
  const tmp = scryptInit(B, B, arg2);
  ({ N, r, p, blockSize32, V, B32, B, tmp: tmp2, blockMixCb } = tmp);
  if (!_asyncLoop.isLE) {
    _asyncLoop.byteSwap32(B32);
  }
  for (let num = 0; num < p; num = num + 1) {
    let result = blockSize32 * num;
    for (let num2 = 0; num2 < blockSize32; num2 = num2 + 1) {
      V[num2] = B32[result + num2];
    }
    let num3 = 0;
    let num4 = 0;
    if (0 < N - 1) {
      let sum = num3 + blockSize32;
      let sum1 = sum + 16 * r;
      let sum5 = num3;
      let num5 = 0;
      do {
        do {
          V[sum1 + num5] = V[sum5 + 16 * (2 * r - 1) + num5];
          num5 = num5 + 1;
        } while (num5 < 16);
        let sum4 = sum;
        let num6 = 0;
        if (0 < r) {
          do {
            let tmp13 = XorAndSalsa;
            let tmp20 = XorAndSalsa(V, sum1, V, sum5, V, sum4);
            let sum2 = sum1;
            let tmp23 = sum4;
            if (0 < num6) {
              sum2 = sum1 + 16;
            }
            let sum3 = sum5 + 16;
            let tmp13Result = tmp13(V, tmp23, V, sum3, V, sum2);
            num6 = num6 + 1;
            sum4 = sum4 + 16;
            sum5 = sum3 + 16;
            sum1 = sum2;
          } while (num6 < r);
        }
        let blockMixCbResult = blockMixCb();
        num4 = num4 + 1;
        num3 = sum;
      } while (num4 < N - 1);
    }
    let result1 = (N - 1) * blockSize32;
    let sum6 = result + 16 * r;
    let num9 = 0;
    do {
      B32[sum6 + num9] = V[result1 + 16 * (2 * r - 1) + num9];
      num9 = num9 + 1;
    } while (num9 < 16);
    let tmp37 = result;
    let num10 = 0;
    let sum9 = tmp37;
    if (0 < r) {
      do {
        let tmp39 = XorAndSalsa;
        let tmp46 = XorAndSalsa(B32, sum6, V, result1, B32, sum9);
        let sum7 = sum6;
        let tmp49 = sum9;
        if (0 < num10) {
          sum7 = sum6 + 16;
        }
        let sum8 = result1 + 16;
        let tmp39Result = tmp39(B32, tmp49, V, sum8, B32, sum7);
        num10 = num10 + 1;
        sum9 = sum9 + 16;
        result1 = sum8 + 16;
        sum6 = sum7;
      } while (num10 < r);
    }
    let blockMixCbResult1 = blockMixCb();
    for (let num13 = 0; num13 < N; num13 = num13 + 1) {
      for (let num14 = 0; num14 < blockSize32; num14 = num14 + 1) {
        tmp2[num14] = B32[result + num14] ^ V[tmp61 * blockSize32 + num14];
      }
      let sum10 = result + 16 * r;
      let num15 = 0;
      do {
        B32[sum10 + num15] = tmp2[16 * (2 * r - 1) + num15];
        num15 = num15 + 1;
      } while (num15 < 16);
      let num16 = 0;
      let sum13 = tmp37;
      let num17 = 0;
      if (0 < r) {
        do {
          let tmp65 = XorAndSalsa;
          let tmp72 = XorAndSalsa(B32, sum10, tmp2, num17, B32, sum13);
          let sum11 = sum10;
          let tmp75 = sum13;
          if (0 < num16) {
            sum11 = sum10 + 16;
          }
          let sum12 = num17 + 16;
          let tmp65Result = tmp65(B32, tmp75, tmp2, sum12, B32, sum11);
          num16 = num16 + 1;
          sum13 = sum13 + 16;
          num17 = sum12 + 16;
          sum10 = sum11;
        } while (num16 < r);
      }
      let blockMixCbResult2 = blockMixCb();
    }
  }
  if (!_asyncLoop.isLE) {
    tmp87(9141).byteSwap32(B32);
  }
  B.fill(0);
  V.fill(0);
  tmp2.fill(0);
  return pbkdf2Init.pbkdf2(_mod9146.sha256, B, B, { c: 1, dkLen: tmp.dkLen });
};
export const scryptAsync = function scryptAsync(arg0, arg1, arg2) {
  const self = this;
  const apply = closure_7.apply;
  if (typeof apply === "unknown") {
    let applyArgumentsResult = HermesBuiltin.applyArguments(self);
  } else {
    applyArgumentsResult = apply(self, arguments);
  }
  return applyArgumentsResult;
};