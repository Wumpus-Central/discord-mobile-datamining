// _runtime/09121_XorAndSalsa.js
import asyncGeneratorStep from "asyncGeneratorStep";

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
  let tmp = +sum;
  const tmp6 = B32[+tmp + 1] ^ V[++result1 + 1];
  const tmp8 = +++result1 + 1 + 1;
  const tmp9 = B32[++tmp + 1 + 1] ^ V[tmp8];
  const tmp10 = +++tmp + 1 + 1 + 1;
  const tmp15 = B32[+tmp10 + 1] ^ V[++tmp8 + 1 + 1];
  const tmp17 = +++tmp8 + 1 + 1 + 1;
  const tmp18 = B32[++tmp10 + 1 + 1] ^ V[tmp17];
  const tmp19 = +++tmp10 + 1 + 1 + 1;
  const tmp24 = B32[+tmp19 + 1] ^ V[++tmp17 + 1 + 1];
  const tmp26 = +++tmp17 + 1 + 1 + 1;
  const tmp27 = B32[++tmp19 + 1 + 1] ^ V[tmp26];
  const tmp28 = +++tmp19 + 1 + 1 + 1;
  const tmp33 = B32[+tmp28 + 1] ^ V[++tmp26 + 1 + 1];
  const tmp35 = +++tmp26 + 1 + 1 + 1;
  const tmp36 = B32[++tmp28 + 1 + 1] ^ V[tmp35];
  const tmp37 = +++tmp28 + 1 + 1 + 1;
  const tmp42 = B32[+tmp37 + 1] ^ V[++tmp35 + 1 + 1];
  const tmp44 = +++tmp35 + 1 + 1 + 1;
  const tmp45 = B32[++tmp37 + 1 + 1] ^ V[tmp44];
  const tmp46 = B32[+++tmp37 + 1 + 1 + 1] ^ V[+tmp44 + 1];
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
    let tmp63 = require;
    let tmp64 = dependencyMap;
    let tmp65 = tmp58 ^ require("09122__asyncLoop.js") /* _asyncLoop */.rotl(tmp62 + tmp50 | 0, 7);
    let tmp66 = tmp54 ^ require("09122__asyncLoop.js") /* _asyncLoop */.rotl(tmp65 + tmp62 | 0, 9);
    let tmp67 = tmp50 ^ require("09122__asyncLoop.js") /* _asyncLoop */.rotl(tmp66 + tmp65 | 0, 13);
    let tmp68 = tmp62 ^ require("09122__asyncLoop.js") /* _asyncLoop */.rotl(tmp67 + tmp66 | 0, 18);
    let tmp69 = tmp53 ^ require("09122__asyncLoop.js") /* _asyncLoop */.rotl(tmp57 + tmp61 | 0, 7);
    let tmp70 = tmp49 ^ require("09122__asyncLoop.js") /* _asyncLoop */.rotl(tmp69 + tmp57 | 0, 9);
    let tmp71 = tmp61 ^ require("09122__asyncLoop.js") /* _asyncLoop */.rotl(tmp70 + tmp69 | 0, 13);
    let tmp72 = tmp57 ^ require("09122__asyncLoop.js") /* _asyncLoop */.rotl(tmp71 + tmp70 | 0, 18);
    let tmp73 = tmp48 ^ require("09122__asyncLoop.js") /* _asyncLoop */.rotl(tmp52 + tmp56 | 0, 7);
    let tmp74 = tmp60 ^ require("09122__asyncLoop.js") /* _asyncLoop */.rotl(tmp73 + tmp52 | 0, 9);
    let tmp75 = tmp56 ^ require("09122__asyncLoop.js") /* _asyncLoop */.rotl(tmp74 + tmp73 | 0, 13);
    let tmp76 = tmp52 ^ require("09122__asyncLoop.js") /* _asyncLoop */.rotl(tmp75 + tmp74 | 0, 18);
    let tmp77 = tmp59 ^ require("09122__asyncLoop.js") /* _asyncLoop */.rotl(tmp47 + tmp51 | 0, 7);
    let tmp78 = tmp55 ^ require("09122__asyncLoop.js") /* _asyncLoop */.rotl(tmp77 + tmp47 | 0, 9);
    let tmp79 = tmp51 ^ require("09122__asyncLoop.js") /* _asyncLoop */.rotl(tmp78 + tmp77 | 0, 13);
    let tmp80 = tmp47 ^ require("09122__asyncLoop.js") /* _asyncLoop */.rotl(tmp79 + tmp78 | 0, 18);
    tmp81 = tmp71 ^ require("09122__asyncLoop.js") /* _asyncLoop */.rotl(tmp68 + tmp77 | 0, 7);
    tmp82 = tmp74 ^ require("09122__asyncLoop.js") /* _asyncLoop */.rotl(tmp81 + tmp68 | 0, 9);
    tmp83 = tmp77 ^ require("09122__asyncLoop.js") /* _asyncLoop */.rotl(tmp82 + tmp81 | 0, 13);
    tmp84 = tmp68 ^ require("09122__asyncLoop.js") /* _asyncLoop */.rotl(tmp83 + tmp82 | 0, 18);
    tmp85 = tmp75 ^ require("09122__asyncLoop.js") /* _asyncLoop */.rotl(tmp72 + tmp65 | 0, 7);
    tmp86 = tmp78 ^ require("09122__asyncLoop.js") /* _asyncLoop */.rotl(tmp85 + tmp72 | 0, 9);
    tmp87 = tmp65 ^ require("09122__asyncLoop.js") /* _asyncLoop */.rotl(tmp86 + tmp85 | 0, 13);
    tmp88 = tmp72 ^ require("09122__asyncLoop.js") /* _asyncLoop */.rotl(tmp87 + tmp86 | 0, 18);
    tmp89 = tmp79 ^ require("09122__asyncLoop.js") /* _asyncLoop */.rotl(tmp76 + tmp69 | 0, 7);
    tmp90 = tmp66 ^ require("09122__asyncLoop.js") /* _asyncLoop */.rotl(tmp89 + tmp76 | 0, 9);
    tmp91 = tmp69 ^ require("09122__asyncLoop.js") /* _asyncLoop */.rotl(tmp90 + tmp89 | 0, 13);
    tmp92 = tmp76 ^ require("09122__asyncLoop.js") /* _asyncLoop */.rotl(tmp91 + tmp90 | 0, 18);
    tmp93 = tmp67 ^ require("09122__asyncLoop.js") /* _asyncLoop */.rotl(tmp80 + tmp73 | 0, 7);
    tmp94 = tmp70 ^ require("09122__asyncLoop.js") /* _asyncLoop */.rotl(tmp93 + tmp80 | 0, 9);
    tmp95 = tmp73 ^ require("09122__asyncLoop.js") /* _asyncLoop */.rotl(tmp94 + tmp93 | 0, 13);
    tmp96 = tmp80 ^ require("09122__asyncLoop.js") /* _asyncLoop */.rotl(tmp95 + tmp94 | 0, 18);
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
  B322[+sum13] = (B32[tmp] ^ V[+result1]) + tmp84 | 0;
  B322[++sum13 + 1] = tmp6 + tmp81 | 0;
  const tmp99 = +++sum13 + 1 + 1;
  B322[tmp99] = tmp9 + tmp82 | 0;
  tmp = +tmp99 + 1;
  B322[tmp] = (B32[tmp10] ^ V[+tmp8 + 1]) + tmp83 | 0;
  tmp = +tmp + 1;
  B322[tmp] = tmp15 + tmp87 | 0;
  tmp = +tmp + 1;
  B322[tmp] = tmp18 + tmp88 | 0;
  tmp = +tmp + 1;
  B322[tmp] = (B32[tmp19] ^ V[+tmp17 + 1]) + tmp85 | 0;
  tmp = +tmp + 1;
  B322[tmp] = tmp24 + tmp86 | 0;
  tmp = +tmp + 1;
  B322[tmp] = tmp27 + tmp90 | 0;
  tmp = +tmp + 1;
  B322[tmp] = (B32[tmp28] ^ V[+tmp26 + 1]) + tmp91 | 0;
  tmp = +tmp + 1;
  B322[tmp] = tmp33 + tmp92 | 0;
  tmp = +tmp + 1;
  B322[tmp] = tmp36 + tmp89 | 0;
  tmp = +tmp + 1;
  B322[tmp] = (B32[tmp37] ^ V[+tmp35 + 1]) + tmp93 | 0;
  tmp = +tmp + 1;
  B322[tmp] = tmp42 + tmp94 | 0;
  tmp = +tmp + 1;
  B322[tmp] = tmp45 + tmp95 | 0;
  B322[+tmp + 1] = tmp46 + tmp96 | 0;
}
function BlockMix(V, result1, B32, sum13) {
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
      let num3 = 0;
      let tmp5 = B32;
      let tmp6 = sum;
      let tmp7 = V;
      let tmp8 = sum4;
      let tmp9 = B32;
      let tmp10 = sum3;
      let tmp4 = XorAndSalsa;
      let tmp11 = XorAndSalsa(B32, sum, V, sum4, B32, sum3);
      let tmp12 = num2;
      let tmp13 = sum;
      let tmp15 = sum4;
      let sum1 = sum;
      let tmp14 = sum3;
      if (0 < num2) {
        sum1 = sum + 16;
      }
      let sum2 = sum4 + 16;
      let num4 = 0;
      let tmp18 = B32;
      let tmp19 = sum3;
      let tmp20 = V;
      let tmp21 = sum2;
      let tmp22 = B32;
      let tmp23 = sum1;
      let tmp4Result = tmp4(B32, tmp14, V, sum2, B32, sum1);
      num2 = num2 + 1;
      sum3 = sum3 + 16;
      sum4 = sum2 + 16;
      sum = sum1;
    } while (num2 < arg4);
  }
}
function scryptInit(B, B, arg2) {
  let N;
  let asyncTick;
  let dkLen;
  let maxmem;
  let onProgress;
  let p;
  let r;
  ({ N, r, p, dkLen, asyncTick, maxmem, onProgress } = onProgress(result2[1]).checkOpts({ dkLen: 32, asyncTick: 10, maxmem: 1073742848 }, arg2));
  onProgress(result2[2]).number(N);
  onProgress(result2[2]).number(r);
  onProgress(result2[2]).number(p);
  onProgress(result2[2]).number(dkLen);
  onProgress(result2[2]).number(asyncTick);
  onProgress(result2[2]).number(maxmem);
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
                  let obj = { c: 1, dkLen: null };
                  obj[1] = result * p;
                  const pbkdf2Result = tmp(tmp2[3]).pbkdf2(tmp(tmp2[4]).sha256, B, B, obj);
                  const _Uint8Array = Uint8Array;
                  const uint8Array = new Uint8Array(result * N);
                  const u32Result = tmp(tmp2[1]).u32(pbkdf2Result);
                  const _Uint8Array2 = Uint8Array;
                  const uint8Array1 = new Uint8Array(result);
                  function blockMixCb() {

                  }
                  const u32Result1 = tmp(tmp2[1]).u32(uint8Array);
                  if (onProgress) {
                    result2 = 2 * N * p;
                    const _Math = Math;
                    const _Math2 = Math;
                    let closure_2 = Math.max(Math.floor(result2 / 10000), 1);
                    let c3 = 0;
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
                  obj = { N: null, r: null, p: null, dkLen: null, blockSize32: null, V: null, B32: null, B: null, tmp: null, blockMixCb: null, asyncTick: null };
                  obj[0] = N;
                  obj[1] = r;
                  obj[2] = p;
                  obj[3] = dkLen;
                  obj[4] = result / 4;
                  obj[5] = u32Result1;
                  obj[6] = u32Result;
                  obj[7] = pbkdf2Result;
                  obj[8] = tmp(tmp2[1]).u32(uint8Array1);
                  obj[9] = blockMixCb;
                  obj[10] = asyncTick;
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
  return require("09125_pbkdf2Init.js") /* pbkdf2Init */.pbkdf2(require("09127__isNativeReflectConstruct.js") /* _isNativeReflectConstruct */.sha256, B, arr, { c: 1, dkLen });
}
function _scryptAsync() {
  const self = this;
  let tmp = asyncGeneratorStep((arg0, arg1, arg2) => {
    let closure_0 = arg0;
    let closure_1 = arg1;
    let closure_2 = arg2;
    let c11 = 0;
    let c12 = 0;
    let c9 = 0;
    return (function*(arg0, arg1, arg2) {
      let B32;
      let c1;
      let c10;
      let c11;
      let c2;
      let c8;
      let c9;
      let iter3;
      let iter4;
      let next;
      let p;
      if (v0 === 2) {
        v0 = 3;
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
          v0 = 2;
          if (0 === c11) {
            if (arg0 === 1) {
              v0 = 3;
              throw arg1;
            } else if (arg0 === 2) {
              v0 = 3;
              obj = { value: null, done: true };
              obj[0] = arg1;
              return obj;
            } else {
              c8 = tmp3;
              B32 = tmp7;
              let dependencyMap;
              c2 = undefined;
              let closure_3;
              iter4 = undefined;
              next = undefined;
              iter3 = undefined;
              B32 = undefined;
              c8 = undefined;
              c9 = undefined;
              c10 = undefined;
              c11 = undefined;
              v0 = undefined;
              let closure_13;
              const tmp75 = outer1_5(callback, dependencyMap, c2);
              ({ N: c1, r: c2, p } = tmp75);
              closure_3 = p;
              ({ dkLen: iter4, blockSize32: next, V: iter3, B32 } = tmp75);
              ({ B: c8, tmp: c9, blockMixCb: c10, asyncTick: c11 } = tmp75);
              if (!callback(9122).isLE) {
                callback(9122).byteSwap32(B32);
              }
              v0 = function* _loop() {
                if (c3 === 2) {
                  c3 = 3;
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
                    c3 = 2;
                    if (0 === c2) {
                      if (arg0 === 1) {
                        c3 = 3;
                        throw arg1;
                      } else if (arg0 === 2) {
                        c3 = 3;
                        obj = { value: null, done: true };
                        obj[0] = arg1;
                        return obj;
                      } else {
                        let c1 = tmp2;
                        let c0 = tmp5;
                        c0 = undefined;
                        c1 = undefined;
                        const result = outer1_5 * outer1_13;
                        c0 = result;
                        let num9 = 0;
                        if (0 < outer1_5) {
                          do {
                            let tmp6 = outer1_6;
                            let tmp7 = outer1_7;
                            outer1_6[num9] = outer1_7[result + num9];
                            num9 = num9 + 1;
                            let tmp8 = outer1_5;
                          } while (num9 < outer1_5);
                        }
                        c1 = 0;
                        c2 = 1;
                        c3 = 1;
                        const obj1 = { value: null, done: false };
                        obj1[0] = outer1_0(outer1_1[1]).asyncLoop(outer1_1 - 1, outer1_11, () => {
                          let sum5 = c1;
                          const sum = c1 + outer1_5;
                          c1 = sum;
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
                              let num3 = 0;
                              let tmp8 = tmp;
                              let tmp9 = sum1;
                              let tmp10 = tmp;
                              let tmp11 = sum5;
                              let tmp12 = tmp;
                              let tmp13 = sum4;
                              let tmp7 = v3;
                              let tmp14 = v3(tmp, sum1, tmp, sum5, tmp, sum4);
                              let tmp15 = num2;
                              let tmp16 = sum1;
                              let tmp18 = sum5;
                              let sum2 = sum1;
                              let tmp17 = sum4;
                              if (0 < num2) {
                                sum2 = sum1 + 16;
                              }
                              let sum3 = sum5 + 16;
                              let num4 = 0;
                              let tmp21 = tmp;
                              let tmp22 = sum4;
                              let tmp23 = tmp;
                              let tmp24 = sum3;
                              let tmp25 = tmp;
                              let tmp26 = sum2;
                              let tmp7Result = tmp7(tmp, tmp17, tmp, sum3, tmp, sum2);
                              num2 = num2 + 1;
                              sum4 = sum4 + 16;
                              sum5 = sum3 + 16;
                              sum1 = sum2;
                            } while (num2 < tmp4);
                          }
                          outer1_10();
                        });
                        return obj1;
                      }
                    } else if (1 === tmp5) {
                      if (arg0 === 1) {
                        c3 = 3;
                        throw arg1;
                      } else if (arg0 === 2) {
                        c3 = 3;
                        const obj2 = { value: null, done: true };
                        obj2[0] = arg1;
                        return obj2;
                      } else {
                        outer1_4(closure_6, (c1 - 1) * closure_5, closure_7, c0, c2);
                        callback();
                        c2 = 2;
                        c3 = 1;
                        const obj3 = { value: null, done: false };
                        obj3[0] = outer1_0(outer1_1[1]).asyncLoop(c1, closure_11, () => {
                          let tmp = outer1_7;
                          let tmp2 = c0;
                          let num = 0;
                          if (0 < outer1_5) {
                            do {
                              let tmp4 = outer1_9;
                              let tmp5 = outer1_7;
                              let tmp6 = c0;
                              let tmp7 = outer1_6;
                              let tmp8 = outer1_5;
                              outer1_9[num] = outer1_7[c0 + num] ^ outer1_6[tmp3 * outer1_5 + num];
                              num = num + 1;
                              tmp = outer1_7;
                              tmp2 = c0;
                            } while (num < outer1_5);
                          }
                          let sum = tmp2 + 16 * c2;
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
                              let num5 = 0;
                              let tmp14 = tmp;
                              let tmp15 = sum;
                              let tmp16 = tmp9;
                              let tmp17 = num4;
                              let tmp18 = tmp;
                              let tmp19 = sum3;
                              let tmp13 = v3;
                              let tmp20 = v3(tmp, sum, tmp9, num4, tmp, sum3);
                              let tmp21 = num3;
                              let tmp22 = sum;
                              let tmp24 = num4;
                              let sum1 = sum;
                              let tmp23 = sum3;
                              if (0 < num3) {
                                sum1 = sum + 16;
                              }
                              let sum2 = num4 + 16;
                              let num6 = 0;
                              let tmp27 = tmp;
                              let tmp28 = sum3;
                              let tmp29 = tmp9;
                              let tmp30 = sum2;
                              let tmp31 = tmp;
                              let tmp32 = sum1;
                              let tmp13Result = tmp13(tmp, tmp23, tmp9, sum2, tmp, sum1);
                              num3 = num3 + 1;
                              sum3 = sum3 + 16;
                              num4 = sum2 + 16;
                              sum = sum1;
                            } while (num3 < tmp10);
                          }
                          outer1_10();
                        });
                        return obj3;
                      }
                    } else if (arg0 === 1) {
                      c3 = 3;
                      throw arg1;
                    } else if (arg0 === 2) {
                      c3 = 3;
                      obj = { value: null, done: true };
                      obj[0] = arg1;
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
              closure_13 = 0;
              if (closure_13 < p) {
                iter3 = v0()[tmp70.iterator]();
                HermesBuiltin.ensureObject("iterator is not an object");
                next = iter3.next;
                closure_3 = undefined;
                const tmp33 = v0();
              }
              if (!callback(9122).isLE) {
                callback(9122).byteSwap32(B32);
              }
              v0 = 3;
              let obj1 = { value: null, done: true };
              obj1[0] = iter3(callback, iter4, c8, iter3, c9);
              return obj1;
            }
          } else {
            if (1 !== tmp7) {
              c9 = 0;
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
                  c11 = 1;
                  v0 = 1;
                  return iter;
                }
              }
              const value = iter4.value;
              closure_13 = closure_13 + 1;
              tmp9 = c10;
            }
            c9 = 1;
            if (arg0 === 1) {
              v0 = 3;
              throw arg1;
            } else {
              closure_3 = arg1;
              if (arg0 === 2) {
                closure_3 = arg1;
                c9 = 0;
                const method2 = HermesBuiltin.getMethod("return");
                if (method2 === undefined) {
                  v0 = 3;
                  let obj2 = { value: null, done: true };
                  obj2[0] = arg1;
                  return obj2;
                } else {
                  const iter2 = method2(closure_3);
                  HermesBuiltin.ensureObject("iterator.return() did not return an object");
                  if (iter2.done) {
                    v0 = 3;
                    obj = { value: null, done: true };
                    obj[0] = iter2.value;
                    return obj;
                  } else {
                    c11 = 1;
                    v0 = 1;
                    return iter2;
                  }
                }
              } else {
                c9 = 0;
                let tmp20 = arg1;
              }
            }
          }
          iter4 = next(tmp20);
          HermesBuiltin.ensureObject("iterator.next() did not return an object");
          if (!iter4.done) {
            c11 = 1;
            v0 = 1;
            return iter4;
          }
        } catch (tmp62) {
          c10 = tmp62;
          if (tmp4 === c9) {
            v0 = tmp2;
            throw tmp62;
          } else {
            c11 = tmp;
          }
        }
      }
    })();
  });
  const _scryptAsync = tmp;
  const apply = tmp.apply;
  if (typeof apply === "unknown") {
    let applyArgumentsResult = HermesBuiltin.applyArguments(self);
  } else {
    applyArgumentsResult = apply(self, arguments);
  }
  return applyArgumentsResult;
}

export const scrypt = function scrypt(B, B) {
  let B32;
  let N;
  let V;
  let blockMixCb;
  let blockSize32;
  let p;
  let r;
  let tmp2;
  const tmp = scryptInit(B, B, arg2);
  ({ N, r, p, blockSize32, V, B32, B, tmp: tmp2, blockMixCb } = tmp);
  if (!require("09122__asyncLoop.js") /* _asyncLoop */.isLE) {
    require("09122__asyncLoop.js") /* _asyncLoop */.byteSwap32(B32);
  }
  for (let num = 0; num < p; num = num + 1) {
    let result = blockSize32 * num;
    let tmp7 = num;
    for (let num2 = 0; num2 < blockSize32; num2 = num2 + 1) {
      V[num2] = B32[result + num2];
    }
    let num3 = 0;
    let num4 = 0;
    if (0 < N - 1) {
      let sum = num3 + blockSize32;
      let sum1 = sum + 16 * r;
      let sum5 = num3;
      let tmp11 = num4;
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
            let num7 = 0;
            let tmp14 = V;
            let tmp15 = sum1;
            let tmp16 = V;
            let tmp17 = sum5;
            let tmp18 = V;
            let tmp19 = sum4;
            let tmp13 = XorAndSalsa;
            let tmp20 = XorAndSalsa(V, sum1, V, sum5, V, sum4);
            let tmp21 = num6;
            let tmp22 = sum1;
            let tmp24 = sum5;
            let sum2 = sum1;
            let tmp23 = sum4;
            if (0 < num6) {
              sum2 = sum1 + 16;
            }
            let sum3 = sum5 + 16;
            let num8 = 0;
            let tmp27 = V;
            let tmp28 = sum4;
            let tmp29 = V;
            let tmp30 = sum3;
            let tmp31 = V;
            let tmp32 = sum2;
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
        let num11 = 0;
        let tmp40 = B32;
        let tmp41 = sum6;
        let tmp42 = V;
        let tmp43 = result1;
        let tmp44 = B32;
        let tmp45 = sum9;
        let tmp39 = XorAndSalsa;
        let tmp46 = XorAndSalsa(B32, sum6, V, result1, B32, sum9);
        let tmp47 = num10;
        let tmp48 = sum6;
        let tmp50 = result1;
        let sum7 = sum6;
        let tmp49 = sum9;
        if (0 < num10) {
          sum7 = sum6 + 16;
        }
        let sum8 = result1 + 16;
        let num12 = 0;
        let tmp53 = B32;
        let tmp54 = sum9;
        let tmp55 = V;
        let tmp56 = sum8;
        let tmp57 = B32;
        let tmp58 = sum7;
        let tmp39Result = tmp39(B32, tmp49, V, sum8, B32, sum7);
        num10 = num10 + 1;
        sum9 = sum9 + 16;
        result1 = sum8 + 16;
        sum6 = sum7;
      } while (num10 < r);
    }
    let blockMixCbResult1 = blockMixCb();
    for (let num13 = 0; num13 < N; num13 = num13 + 1) {
      let tmp62 = num13;
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
          let num18 = 0;
          let tmp66 = B32;
          let tmp67 = sum10;
          let tmp68 = tmp2;
          let tmp69 = num17;
          let tmp70 = B32;
          let tmp71 = sum13;
          let tmp65 = XorAndSalsa;
          let tmp72 = XorAndSalsa(B32, sum10, tmp2, num17, B32, sum13);
          let tmp73 = num16;
          let tmp74 = sum10;
          let tmp76 = num17;
          let sum11 = sum10;
          let tmp75 = sum13;
          if (0 < num16) {
            sum11 = sum10 + 16;
          }
          let sum12 = num17 + 16;
          let num19 = 0;
          let tmp79 = B32;
          let tmp80 = sum13;
          let tmp81 = tmp2;
          let tmp82 = sum12;
          let tmp83 = B32;
          let tmp84 = sum11;
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
  if (!require("09122__asyncLoop.js") /* _asyncLoop */.isLE) {
    tmp87(9122).byteSwap32(B32);
  }
  B.fill(0);
  V.fill(0);
  tmp2.fill(0);
  return require("09125_pbkdf2Init.js") /* pbkdf2Init */.pbkdf2(require("09127__isNativeReflectConstruct.js") /* _isNativeReflectConstruct */.sha256, B, B, { c: 1, dkLen: tmp.dkLen });
};
export const scryptAsync = function scryptAsync(uint8Array, closure_3, closure_4) {
  const self = this;
  const apply = _scryptAsync.apply;
  if (typeof apply === "unknown") {
    let applyArgumentsResult = HermesBuiltin.applyArguments(self);
  } else {
    applyArgumentsResult = apply(self, arguments);
  }
  return applyArgumentsResult;
};