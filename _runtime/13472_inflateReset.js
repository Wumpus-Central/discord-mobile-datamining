// === Module 13472: inflateReset ===

// Module 13472 (inflateReset)
import _mod13462 from "module_13462" /* 13462 */;
import adler32 from "adler32" /* 13468 */;
import _mod13469 from "module_13469" /* 13469 */;
import inflate_table from "inflate_table" /* 13473 */;
import inflate_fast from "inflate_fast" /* 13474 */;

let buf32, buf321;

function InflateState() {
  const buf16 = new _mod13462.Buf16(320);
  const buf161 = new _mod13462.Buf16(288);
}
function inflateReset(state) {
  let num = -2;
  if (state) {
    num = -2;
    if (state.state) {
      state = state.state;
      state.wsize = 0;
      state.whave = 0;
      state.wnext = 0;
      let num3 = -2;
      if (state) {
        num3 = -2;
        if (state.state) {
          const state2 = state.state;
          state2.total = 0;
          state.total_out = 0;
          state.total_in = 0;
          state.msg = "";
          if (state2.wrap) {
            state.adler = 1 & state2.wrap;
          }
          state2.mode = 1;
          state2.last = 0;
          state2.havedict = 0;
          state2.dmax = 32768;
          state2.head = null;
          state2.hold = 0;
          state2.bits = 0;
          const self = this;
          const self2 = this;
          buf32 = new _mod13462.Buf32(852);
          state2.lendyn = buf32;
          state2.lencode = buf32;
          const self3 = this;
          const self4 = this;
          buf321 = new _mod13462.Buf32(592);
          state2.distdyn = buf321;
          state2.distcode = buf321;
          state2.sane = 1;
          state2.back = -1;
          num3 = 0;
        }
      }
      num = num3;
    }
  }
  return num;
}
function inflateInit2(strm, windowBits) {
  let num = -2;
  if (strm) {
    const obj = Object.create(InflateState.prototype);
    new InflateState();
    strm.state = obj;
    obj.window = null;
    let num2 = -2;
    if (strm) {
      num2 = -2;
      if (strm.state) {
        let tmp8;
        let num7;
        let num10;
        const state = strm.state;
        if (windowBits < 0) {
          tmp8 = -windowBits;
          num7 = 0;
        } else {
          const sum = 1 + (windowBits >> 4);
          num7 = sum;
          tmp8 = windowBits;
          if (windowBits < 48) {
            tmp8 = windowBits & 15;
            num7 = sum;
          }
        }
        if (!tmp8) {
          const tmp9 = null !== state.window && state.wbits !== tmp8;
          if (tmp9) {
            state.window = null;
          }
          state.wrap = num7;
          state.wbits = tmp8;
          num10 = inflateReset(strm);
        } else {
          num10 = -2;
          if (tmp8 >= 8) {
            num10 = -2;
          }
        }
        num2 = num10;
      }
    }
    num = num2;
    if (0 !== num2) {
      strm.state = null;
      num = num2;
    }
  }
  return num;
}
function updatewindow(state, output3, length, length2) {
  state = state.state;
  if (null === state.window) {
    state.wsize = 1 << state.wbits;
    state.wnext = 0;
    state.whave = 0;
    const self = this;
    const self2 = this;
    const buf8 = new _mod13462.Buf8(state.wsize);
    state.window = buf8;
  }
  if (length2 >= state.wsize) {
    const obj3 = _mod13462;
    obj3.arraySet(state.window, output3, length - state.wsize, state.wsize, 0);
    state.wnext = 0;
    state.whave = state.wsize;
  } else {
    let diff = state.wsize - state.wnext;
    if (diff > length2) {
      diff = length2;
    }
    const obj = _mod13462;
    obj.arraySet(state.window, output3, length - length2, diff, state.wnext);
    const diff1 = length2 - diff;
    if (diff1) {
      const tmp6Result = _mod13462;
      tmp6Result.arraySet(state.window, output3, length - diff1, diff1, 0);
      state.wnext = diff1;
      state.whave = state.wsize;
    } else {
      state.wnext = state.wnext + diff;
      if (state.wnext === state.wsize) {
        state.wnext = 0;
      }
      if (state.whave < state.wsize) {
        state.whave = state.whave + diff;
      }
    }
  }
  return 0;
}
let c7 = true;

export { inflateReset };
export const inflateReset2 = function inflateReset2(state, arg1) {
  let num = -2;
  if (state) {
    num = -2;
    if (state.state) {
      let tmp3;
      let num6;
      let num9;
      state = state.state;
      if (arg1 < 0) {
        tmp3 = -arg1;
        num6 = 0;
      } else {
        const sum = 1 + (arg1 >> 4);
        num6 = sum;
        tmp3 = arg1;
        if (arg1 < 48) {
          tmp3 = arg1 & 15;
          num6 = sum;
        }
      }
      if (!tmp3) {
        const tmp5 = null !== state.window && state.wbits !== tmp3;
        if (tmp5) {
          state.window = null;
        }
        state.wrap = num6;
        state.wbits = tmp3;
        num9 = inflateReset(state);
      } else {
        num9 = -2;
        if (tmp3 >= 8) {
          num9 = -2;
        }
      }
      num = num9;
    }
  }
  return num;
};
export const inflateResetKeep = function inflateResetKeep(state) {
  let num = -2;
  if (state) {
    num = -2;
    if (state.state) {
      state = state.state;
      state.total = 0;
      state.total_out = 0;
      state.total_in = 0;
      state.msg = "";
      if (state.wrap) {
        state.adler = 1 & state.wrap;
      }
      state.mode = 1;
      state.last = 0;
      state.havedict = 0;
      state.dmax = 32768;
      state.head = null;
      state.hold = 0;
      state.bits = 0;
      const self = this;
      const self2 = this;
      buf32 = new _mod13462.Buf32(852);
      state.lendyn = buf32;
      state.lencode = buf32;
      const self3 = this;
      const self4 = this;
      buf321 = new _mod13462.Buf32(592);
      state.distdyn = buf321;
      state.distcode = buf321;
      state.sane = 1;
      state.back = -1;
      num = 0;
    }
  }
  return num;
};
export const inflateInit = function inflateInit(strm) {
  return inflateInit2(strm, 15);
};
export { inflateInit2 };
export const inflate = function inflate(state, Z_NO_FLUSH) {
  let avail_in;
  let avail_in2;
  let avail_out;
  let avail_out2;
  let bits;
  let bits2;
  let have;
  let hold;
  let hold2;
  let input;
  let input2;
  let lens2;
  let mode;
  let next_in;
  let next_in2;
  let next_out;
  let next_out2;
  let output;
  let output2;
  let sum60;
  let sum61;
  let sum62;
  let sum63;
  let sum64;
  let tmp187;
  const buf8 = new _mod13462.Buf8(4);
  const items = [16, 17, 18, 0, 8, 7, 9, 6, 10, 5, 11, 4, 12, 3, 13, 2, 14, 1, 15];
  if (state) {
    if (state.state) {
      if (state.output) {
        let num61;
        let tmp37;
        let num62;
        let num63;
        let tmp39;
        let tmp38;
        state = state.state;
        if (state.mode === 12) {
          state.mode = 13;
        }
        ({ next_out, output, avail_out, next_in, input, avail_in } = state);
        ({ hold, bits } = state);
        let num56 = 0;
        let diff7 = avail_out;
        let diff41 = avail_in;
        while (true) {
          let num116;
          mode = state.mode;
          let tmp8 = avail_out;
          let tmp11 = diff7;
          let tmp13 = next_out;
          let tmp15 = output;
          let tmp16 = input;
          if (1 === mode) {
            if (0 === state.wrap) {
              state.mode = 13;
              continue;
            } else {
              let sum3 = bits;
              let sum2 = hold;
              let diff = diff41;
              let sum1 = next_in;
              let tmp668 = bits;
              let tmp669 = hold;
              let tmp670 = diff41;
              let tmp671 = next_in;
              if (bits >= 16) {
                if (2 & state.wrap) {
                  if (35615 === tmp669) {
                    state.check = 0;
                    buf8[0] = 255 & tmp669;
                    buf8[1] = tmp669 >>> 8 & 255;
                    let check10 = state.check;
                    state.check = _mod13469(check10, tmp2, 2, 0);
                    state.mode = 2;
                    bits = 0;
                    hold = 0;
                    diff41 = tmp670;
                    next_in = tmp671;
                    continue;
                  }
                }
                state.flags = 0;
                if (state.head) {
                  state.head.done = false;
                }
                if (1 & state.wrap) {
                  if (!((((255 & tmp669) << 8) + (tmp669 >> 8)) % 31)) {
                    if (8 !== (15 & tmp669)) {
                      state.msg = "unknown compression method";
                      state.mode = 30;
                      bits = tmp668;
                      hold = tmp669;
                      diff41 = tmp670;
                      next_in = tmp671;
                      continue;
                    } else {
                      let tmp674 = tmp669 >>> 4;
                      let sum = 8 + (15 & tmp674);
                      if (0 === state.wbits) {
                        state.wbits = sum;
                      } else {
                        if (sum > state.wbits) {
                          state.msg = "invalid window size";
                          state.mode = 30;
                          bits = tmp673;
                          hold = tmp674;
                          diff41 = tmp670;
                          next_in = tmp671;
                          continue;
                        }
                        continue;
                      }
                      state.dmax = 1 << sum;
                      state.check = 1;
                      state.adler = 1;
                      let num109 = 10;
                      if (!(512 & tmp674)) {
                        num109 = 12;
                      }
                      state.mode = num109;
                      bits = 0;
                      hold = 0;
                      diff41 = tmp670;
                      next_in = tmp671;
                      continue;
                    }
                    continue;
                  }
                  continue;
                }
                state.msg = "incorrect header check";
                state.mode = 30;
                bits = tmp668;
                hold = tmp669;
                diff41 = tmp670;
                next_in = tmp671;
                continue;
              } else {
                num61 = num56;
                tmp37 = avail_out;
                num62 = sum3;
                num63 = sum2;
                tmp38 = sum1;
                tmp39 = diff;
                while (0 !== diff) {
                  diff = diff - 1;
                  let tmp672 = +sum1;
                  sum1 = tmp672 + 1;
                  sum2 = sum2 + (input[tmp672] << sum3);
                  sum3 = sum3 + 8;
                  tmp669 = sum2;
                  tmp670 = diff;
                  tmp671 = sum1;
                  tmp668 = sum3;
                  continue;
                }
              }
            }
          } else {
            let num91;
            let num92;
            let tmp435;
            let tmp436;
            let num95;
            let num96;
            let tmp451;
            let tmp452;
            if (2 === mode) {
              let sum6 = bits;
              let sum5 = hold;
              let diff1 = diff41;
              let sum4 = next_in;
              let tmp423 = bits;
              let tmp424 = hold;
              let tmp425 = diff41;
              let tmp426 = next_in;
              if (bits >= 16) {
                state.flags = tmp424;
                if (8 !== (255 & state.flags)) {
                  state.msg = "unknown compression method";
                  state.mode = 30;
                  bits = tmp423;
                  hold = tmp424;
                  diff41 = tmp425;
                  next_in = tmp426;
                  continue;
                } else if (57344 & state.flags) {
                  state.msg = "unknown header flags set";
                  state.mode = 30;
                  bits = tmp423;
                  hold = tmp424;
                  diff41 = tmp425;
                  next_in = tmp426;
                  continue;
                } else {
                  if (state.head) {
                    state.head.text = tmp424 >> 8 & 1;
                  }
                  if (512 & state.flags) {
                    buf8[0] = 255 & tmp424;
                    buf8[1] = tmp424 >>> 8 & 255;
                    let check3 = state.check;
                    state.check = _mod13469(check3, tmp2, 2, 0);
                  }
                  state.mode = 3;
                  num91 = 0;
                  num92 = 0;
                  tmp435 = tmp425;
                  tmp436 = tmp426;
                }
                continue;
              } else {
                num61 = num56;
                tmp37 = avail_out;
                num62 = sum6;
                num63 = sum5;
                tmp38 = sum4;
                tmp39 = diff1;
                while (0 !== diff1) {
                  diff1 = diff1 - 1;
                  let tmp659 = +sum4;
                  sum4 = tmp659 + 1;
                  sum5 = sum5 + (input[tmp659] << sum6);
                  sum6 = sum6 + 8;
                  tmp424 = sum5;
                  tmp425 = diff1;
                  tmp426 = sum4;
                  tmp423 = sum6;
                  continue;
                }
              }
            } else {
              let num99;
              let num100;
              let tmp467;
              let tmp468;
              num91 = bits;
              num92 = hold;
              tmp435 = diff41;
              tmp436 = next_in;
              if (3 !== mode) {
                let num101;
                let num102;
                let tmp469;
                let tmp470;
                num95 = bits;
                num96 = hold;
                tmp451 = diff41;
                tmp452 = next_in;
                if (4 !== mode) {
                  let tmp486;
                  let tmp487;
                  let tmp488;
                  let tmp489;
                  let tmp513;
                  let tmp514;
                  let tmp515;
                  let tmp516;
                  num99 = bits;
                  num100 = hold;
                  tmp467 = diff41;
                  tmp468 = next_in;
                  if (5 !== mode) {
                    let diff46;
                    let sum74;
                    tmp486 = bits;
                    tmp487 = hold;
                    tmp488 = diff41;
                    tmp489 = next_in;
                    if (6 !== mode) {
                      let tmp530;
                      let tmp531;
                      let tmp528;
                      let tmp529;
                      let diff45;
                      let sum72;
                      tmp515 = bits;
                      tmp516 = hold;
                      tmp513 = diff41;
                      tmp514 = next_in;
                      if (7 !== mode) {
                        let tmp545;
                        let tmp546;
                        let tmp543;
                        let tmp544;
                        tmp530 = bits;
                        tmp531 = hold;
                        tmp528 = diff41;
                        tmp529 = next_in;
                        if (8 !== mode) {
                          tmp545 = bits;
                          tmp546 = hold;
                          tmp543 = diff41;
                          tmp544 = next_in;
                          if (9 !== mode) {
                            let tmp374;
                            let tmp375;
                            let num75;
                            let num76;
                            let tmp587;
                            let tmp588;
                            let tmp589;
                            let tmp590;
                            if (10 === mode) {
                              let sum10 = bits;
                              let sum9 = hold;
                              let diff2 = diff41;
                              let sum8 = next_in;
                              let tmp366 = hold;
                              let tmp367 = diff41;
                              let tmp368 = next_in;
                              if (bits >= 32) {
                                let sum7 = (tmp366 >>> 24 & 255) + (tmp366 >>> 8 & 65280) + ((65280 & tmp366) << 8) + ((255 & tmp366) << 24);
                                state.check = sum7;
                                state.adler = sum7;
                                state.mode = 11;
                                tmp374 = tmp367;
                                tmp375 = tmp368;
                                num75 = 0;
                                num76 = 0;
                              } else {
                                num61 = num56;
                                tmp37 = avail_out;
                                num62 = sum10;
                                num63 = sum9;
                                tmp38 = sum8;
                                tmp39 = diff2;
                                while (0 !== diff2) {
                                  diff2 = diff2 - 1;
                                  let tmp657 = +sum8;
                                  sum8 = tmp657 + 1;
                                  sum9 = sum9 + (input[tmp657] << sum10);
                                  sum10 = sum10 + 8;
                                  tmp366 = sum9;
                                  tmp367 = diff2;
                                  tmp368 = sum8;
                                  break;
                                }
                              }
                            } else {
                              let tmp591;
                              let tmp592;
                              let tmp593;
                              let tmp594;
                              num75 = bits;
                              num76 = hold;
                              tmp374 = diff41;
                              tmp375 = next_in;
                              if (11 !== mode) {
                                tmp587 = bits;
                                tmp588 = hold;
                                tmp589 = diff41;
                                tmp590 = next_in;
                                if (12 !== mode) {
                                  tmp591 = bits;
                                  tmp592 = hold;
                                  tmp593 = diff41;
                                  tmp594 = next_in;
                                  if (13 !== mode) {
                                    let num117;
                                    let num118;
                                    let tmp595;
                                    let tmp596;
                                    if (14 === mode) {
                                      let sum12 = hold >>> (7 & bits);
                                      let diff3 = bits - (7 & bits);
                                      let diff4 = diff41;
                                      let sum11 = next_in;
                                      let tmp349 = sum12;
                                      let tmp350 = diff41;
                                      let tmp351 = next_in;
                                      let tmp352 = diff3;
                                      if (diff3 >= 32) {
                                        let tmp357 = 65535 & tmp349;
                                        if (tmp357 !== (tmp349 >>> 16 ^ 65535)) {
                                          state.msg = "invalid stored block lengths";
                                          state.mode = 30;
                                          bits = tmp352;
                                          hold = tmp349;
                                          diff41 = tmp350;
                                          next_in = tmp351;
                                          continue;
                                        } else {
                                          state.length = tmp357;
                                          state.mode = 15;
                                          num117 = 0;
                                          num118 = 0;
                                          tmp595 = tmp350;
                                          tmp596 = tmp351;
                                          num61 = num56;
                                          tmp37 = avail_out;
                                          num62 = 0;
                                          num63 = 0;
                                          tmp39 = tmp350;
                                          tmp38 = tmp351;
                                        }
                                      } else {
                                        num61 = num56;
                                        tmp37 = avail_out;
                                        num62 = diff3;
                                        num63 = sum12;
                                        tmp38 = sum11;
                                        tmp39 = diff4;
                                        while (0 !== diff4) {
                                          diff4 = diff4 - 1;
                                          let tmp647 = +sum11;
                                          sum11 = tmp647 + 1;
                                          sum12 = sum12 + (input[tmp647] << diff3);
                                          diff3 = diff3 + 8;
                                          tmp349 = sum12;
                                          tmp350 = diff4;
                                          tmp351 = sum11;
                                          tmp352 = diff3;
                                          break;
                                        }
                                      }
                                    } else {
                                      let tmp358;
                                      let tmp359;
                                      let tmp360;
                                      let tmp361;
                                      num117 = bits;
                                      num118 = hold;
                                      tmp595 = diff41;
                                      tmp596 = next_in;
                                      if (15 !== mode) {
                                        tmp358 = bits;
                                        tmp359 = hold;
                                        tmp360 = diff41;
                                        tmp361 = next_in;
                                        if (16 !== mode) {
                                          let tmp597;
                                          let tmp598;
                                          let tmp599;
                                          let tmp600;
                                          let tmp113;
                                          let tmp114;
                                          let tmp115;
                                          let tmp116;
                                          let tmp117;
                                          if (17 === mode) {
                                            let sum15 = bits;
                                            let sum14 = hold;
                                            let diff6 = diff41;
                                            let sum13 = next_in;
                                            let tmp74 = bits;
                                            let tmp75 = hold;
                                            let tmp76 = diff41;
                                            let tmp77 = next_in;
                                            if (bits >= 14) {
                                              state.nlen = 257 + (31 & tmp75);
                                              let tmp82 = tmp75 >>> 5;
                                              state.ndist = 1 + (31 & tmp82);
                                              let tmp83 = tmp82 >>> 5;
                                              state.ncode = 4 + (15 & tmp83);
                                              let tmp84 = tmp83 >>> 4;
                                              let diff5 = tmp74 - 5 - 5 - 4;
                                              if (state.nlen <= 286) {
                                                if (state.ndist <= 30) {
                                                  state.have = 0;
                                                  state.mode = 18;
                                                  tmp597 = diff5;
                                                  tmp598 = tmp84;
                                                  tmp599 = tmp76;
                                                  tmp600 = tmp77;
                                                }
                                              }
                                              state.msg = "too many length or distance symbols";
                                              state.mode = 30;
                                              bits = diff5;
                                              hold = tmp84;
                                              diff41 = tmp76;
                                              next_in = tmp77;
                                              continue;
                                            } else {
                                              num61 = num56;
                                              tmp37 = avail_out;
                                              num62 = sum15;
                                              num63 = sum14;
                                              tmp38 = sum13;
                                              tmp39 = diff6;
                                              while (0 !== diff6) {
                                                diff6 = diff6 - 1;
                                                let tmp609 = +sum13;
                                                sum13 = tmp609 + 1;
                                                sum14 = sum14 + (input[tmp609] << sum15);
                                                sum15 = sum15 + 8;
                                                tmp75 = sum14;
                                                tmp76 = diff6;
                                                tmp77 = sum13;
                                                tmp74 = sum15;
                                                break;
                                              }
                                            }
                                          } else {
                                            let tmp192;
                                            let tmp193;
                                            let tmp194;
                                            let tmp195;
                                            let tmp196;
                                            tmp597 = bits;
                                            tmp598 = hold;
                                            tmp599 = diff41;
                                            tmp600 = next_in;
                                            if (18 !== mode) {
                                              tmp113 = num56;
                                              tmp114 = bits;
                                              tmp115 = hold;
                                              tmp116 = diff41;
                                              tmp117 = next_in;
                                              if (19 !== mode) {
                                                let tmp197;
                                                let tmp198;
                                                let tmp199;
                                                let tmp200;
                                                let tmp201;
                                                let tmp244;
                                                let tmp245;
                                                let tmp246;
                                                let tmp247;
                                                let tmp248;
                                                tmp192 = num56;
                                                tmp193 = bits;
                                                tmp194 = hold;
                                                tmp195 = diff41;
                                                tmp196 = next_in;
                                                if (20 !== mode) {
                                                  tmp197 = num56;
                                                  tmp198 = bits;
                                                  tmp199 = hold;
                                                  tmp200 = diff41;
                                                  tmp201 = next_in;
                                                  if (21 !== mode) {
                                                    let tmp269;
                                                    let tmp265;
                                                    let tmp266;
                                                    let tmp267;
                                                    let tmp268;
                                                    let tmp312;
                                                    let tmp313;
                                                    let tmp314;
                                                    let tmp315;
                                                    let tmp316;
                                                    tmp244 = num56;
                                                    tmp245 = bits;
                                                    tmp246 = hold;
                                                    tmp247 = diff41;
                                                    tmp248 = next_in;
                                                    if (22 !== mode) {
                                                      let tmp601;
                                                      let tmp602;
                                                      let tmp603;
                                                      let tmp604;
                                                      let tmp605;
                                                      tmp269 = num56;
                                                      tmp265 = bits;
                                                      tmp266 = hold;
                                                      tmp267 = diff41;
                                                      tmp268 = next_in;
                                                      if (23 !== mode) {
                                                        tmp312 = num56;
                                                        tmp313 = bits;
                                                        tmp314 = hold;
                                                        tmp315 = diff41;
                                                        tmp316 = next_in;
                                                        if (24 !== mode) {
                                                          tmp601 = num56;
                                                          tmp602 = bits;
                                                          tmp603 = hold;
                                                          tmp604 = diff41;
                                                          tmp605 = next_in;
                                                          if (25 !== mode) {
                                                            if (26 === mode) {
                                                              num61 = num56;
                                                              tmp37 = avail_out;
                                                              num62 = bits;
                                                              num63 = hold;
                                                              tmp39 = diff41;
                                                              tmp38 = next_in;
                                                              if (0 !== diff7) {
                                                                let tmp608 = +next_out;
                                                                next_out = tmp608 + 1;
                                                                output[tmp608] = state.length;
                                                                diff7 = diff7 - 1;
                                                                state.mode = 21;
                                                                continue;
                                                              }
                                                            } else {
                                                              let tmp17;
                                                              let tmp18;
                                                              let tmp19;
                                                              let tmp20;
                                                              let tmp21;
                                                              if (27 === mode) {
                                                                let tmp22 = avail_out;
                                                                let num59 = bits;
                                                                let num60 = hold;
                                                                let tmp23 = diff41;
                                                                let tmp24 = next_in;
                                                                if (!state.wrap) {
                                                                  state.mode = 28;
                                                                  tmp17 = tmp22;
                                                                  tmp18 = num59;
                                                                  tmp19 = num60;
                                                                  tmp20 = tmp23;
                                                                  tmp21 = tmp24;
                                                                } else {
                                                                  let sum18 = bits;
                                                                  let tmp26 = hold;
                                                                  let diff9 = diff41;
                                                                  let sum17 = next_in;
                                                                  let tmp29 = bits;
                                                                  let tmp30 = hold;
                                                                  let tmp31 = diff41;
                                                                  let tmp32 = next_in;
                                                                  if (bits >= 32) {
                                                                    let diff8 = avail_out - diff7;
                                                                    state.total_out = state.total_out + diff8;
                                                                    state.total = state.total + diff8;
                                                                    if (diff8) {
                                                                      let tmp46;
                                                                      if (state.flags) {
                                                                        let check2 = state.check;
                                                                        tmp46 = _mod13469(check2, tmp15, diff8, next_out - diff8);
                                                                      } else {
                                                                        let check = state.check;
                                                                        tmp46 = adler32(check, tmp15, diff8, next_out - diff8);
                                                                      }
                                                                      state.check = tmp46;
                                                                      state.adler = tmp46;
                                                                    }
                                                                    let sum16 = tmp30;
                                                                    if (!state.flags) {
                                                                      sum16 = (tmp30 >>> 24 & 255) + (tmp30 >>> 8 & 65280) + ((65280 & tmp30) << 8) + ((255 & tmp30) << 24);
                                                                    }
                                                                    tmp22 = diff7;
                                                                    num59 = 0;
                                                                    num60 = 0;
                                                                    tmp23 = tmp31;
                                                                    tmp24 = tmp32;
                                                                    if (sum16 !== state.check) {
                                                                      state.msg = "incorrect data check";
                                                                      state.mode = 30;
                                                                      avail_out = diff7;
                                                                      bits = tmp29;
                                                                      hold = tmp30;
                                                                      diff41 = tmp31;
                                                                      next_in = tmp32;
                                                                      continue;
                                                                    }
                                                                  } else {
                                                                    num61 = num56;
                                                                    tmp37 = avail_out;
                                                                    num62 = sum18;
                                                                    num63 = tmp26;
                                                                    tmp38 = sum17;
                                                                    tmp39 = diff9;
                                                                    while (0 !== diff9) {
                                                                      diff9 = diff9 - 1;
                                                                      let tmp606 = +sum17;
                                                                      sum17 = tmp606 + 1;
                                                                      tmp26 = tmp26 | input[tmp606] << sum18;
                                                                      sum18 = sum18 + 8;
                                                                      tmp30 = tmp26;
                                                                      tmp31 = diff9;
                                                                      tmp32 = sum17;
                                                                      tmp29 = sum18;
                                                                      break;
                                                                    }
                                                                  }
                                                                }
                                                              } else {
                                                                tmp17 = avail_out;
                                                                tmp18 = bits;
                                                                tmp19 = hold;
                                                                tmp20 = diff41;
                                                                tmp21 = next_in;
                                                                if (28 !== mode) {
                                                                  break;
                                                                }
                                                              }
                                                              let num64 = tmp18;
                                                              let num65 = tmp19;
                                                              let tmp51 = tmp20;
                                                              let tmp52 = tmp21;
                                                              if (state.wrap) {
                                                                num64 = tmp18;
                                                                num65 = tmp19;
                                                                tmp51 = tmp20;
                                                                tmp52 = tmp21;
                                                                if (state.flags) {
                                                                  let sum21 = tmp18;
                                                                  let sum20 = tmp19;
                                                                  let diff10 = tmp20;
                                                                  let sum19 = tmp21;
                                                                  let tmp57 = tmp18;
                                                                  let tmp58 = tmp19;
                                                                  let tmp59 = tmp20;
                                                                  let tmp60 = tmp21;
                                                                  if (tmp18 >= 32) {
                                                                    num64 = 0;
                                                                    num65 = 0;
                                                                    tmp51 = tmp59;
                                                                    tmp52 = tmp60;
                                                                    if (tmp58 !== (4294967295 & state.total)) {
                                                                      state.msg = "incorrect length check";
                                                                      state.mode = 30;
                                                                      avail_out = tmp17;
                                                                      bits = tmp57;
                                                                      hold = tmp58;
                                                                      diff41 = tmp59;
                                                                      next_in = tmp60;
                                                                      continue;
                                                                    }
                                                                  } else {
                                                                    num61 = num56;
                                                                    tmp37 = tmp17;
                                                                    num62 = sum21;
                                                                    num63 = sum20;
                                                                    tmp38 = sum19;
                                                                    tmp39 = diff10;
                                                                    while (0 !== diff10) {
                                                                      diff10 = diff10 - 1;
                                                                      let tmp607 = +sum19;
                                                                      sum19 = tmp607 + 1;
                                                                      sum20 = sum20 + (input[tmp607] << sum21);
                                                                      sum21 = sum21 + 8;
                                                                      tmp58 = sum20;
                                                                      tmp59 = diff10;
                                                                      tmp60 = sum19;
                                                                      tmp57 = sum21;
                                                                      break;
                                                                    }
                                                                  }
                                                                }
                                                              }
                                                              state.mode = 29;
                                                              let tmp65 = num64;
                                                              let tmp66 = num65;
                                                              let tmp67 = tmp51;
                                                              let tmp68 = tmp52;
                                                              let tmp69 = tmp17;
                                                              tmp37 = tmp69;
                                                              num62 = tmp65;
                                                              num63 = tmp66;
                                                              tmp39 = tmp67;
                                                              tmp38 = tmp68;
                                                              num61 = 1;
                                                            }
                                                          }
                                                        }
                                                        num61 = tmp601;
                                                        tmp37 = avail_out;
                                                        num62 = tmp602;
                                                        num63 = tmp603;
                                                        tmp39 = tmp604;
                                                        tmp38 = tmp605;
                                                        if (0 !== diff7) {
                                                          let _window;
                                                          let length;
                                                          let diff15;
                                                          let sum22;
                                                          let diff11 = avail_out - diff7;
                                                          if (state.offset > diff11) {
                                                            let diff14;
                                                            let length2;
                                                            let diff12 = state.offset - diff11;
                                                            if (diff12 > state.whave) {
                                                              if (state.sane) {
                                                                state.msg = "invalid distance too far back";
                                                                state.mode = 30;
                                                                num56 = tmp601;
                                                                bits = tmp602;
                                                                hold = tmp603;
                                                                diff41 = tmp604;
                                                                next_in = tmp605;
                                                                continue;
                                                              }
                                                            }
                                                            if (diff12 > state.wnext) {
                                                              let diff13 = diff12 - state.wnext;
                                                              diff14 = state.wsize - diff13;
                                                              length2 = diff13;
                                                            } else {
                                                              diff14 = state.wnext - diff12;
                                                              length2 = diff12;
                                                            }
                                                            if (length2 > state.length) {
                                                              length2 = state.length;
                                                            }
                                                            _window = state.window;
                                                            length = length2;
                                                            diff15 = diff14;
                                                          } else {
                                                            diff15 = next_out - state.offset;
                                                            length = state.length;
                                                            _window = output;
                                                          }
                                                          if (length > diff7) {
                                                            length = diff7;
                                                          }
                                                          let diff16 = diff7 - length;
                                                          state.length = state.length - length;
                                                          let tmp338 = next_out;
                                                          do {
                                                            let tmp339 = +tmp338;
                                                            sum22 = tmp339 + 1;
                                                            let tmp341 = +diff15;
                                                            diff15 = tmp341 + 1;
                                                            output[tmp339] = _window[tmp341];
                                                            length = length - 1;
                                                            tmp338 = sum22;
                                                          } while (length);
                                                          num56 = tmp601;
                                                          bits = tmp602;
                                                          hold = tmp603;
                                                          diff7 = diff16;
                                                          diff41 = tmp604;
                                                          next_out = sum22;
                                                          next_in = tmp605;
                                                          if (0 !== state.length) {
                                                            continue;
                                                          } else {
                                                            state.mode = 21;
                                                            num56 = tmp601;
                                                            avail_out = tmp8;
                                                            bits = tmp602;
                                                            hold = tmp603;
                                                            diff7 = diff16;
                                                            diff41 = tmp604;
                                                            next_out = sum22;
                                                            next_in = tmp605;
                                                            output = tmp15;
                                                            input = tmp16;
                                                            continue;
                                                          }
                                                          continue;
                                                        }
                                                      }
                                                      let diff17 = tmp313;
                                                      let tmp318 = tmp314;
                                                      let tmp319 = tmp315;
                                                      let tmp320 = tmp316;
                                                      if (state.extra) {
                                                        let extra2 = state.extra;
                                                        let sum25 = tmp313;
                                                        let sum24 = tmp314;
                                                        let diff18 = tmp315;
                                                        let sum23 = tmp316;
                                                        let tmp325 = tmp313;
                                                        let tmp326 = tmp314;
                                                        let tmp327 = tmp315;
                                                        let tmp328 = tmp316;
                                                        if (tmp313 >= extra2) {
                                                          state.offset = state.offset + (tmp326 & (1 << state.extra) - 1);
                                                          tmp318 = tmp326 >>> state.extra;
                                                          diff17 = tmp325 - state.extra;
                                                          state.back = state.back + state.extra;
                                                          tmp319 = tmp327;
                                                          tmp320 = tmp328;
                                                        } else {
                                                          num61 = tmp312;
                                                          tmp37 = avail_out;
                                                          num62 = sum25;
                                                          num63 = sum24;
                                                          tmp38 = sum23;
                                                          tmp39 = diff18;
                                                          while (0 !== diff18) {
                                                            diff18 = diff18 - 1;
                                                            let tmp645 = +sum23;
                                                            sum23 = tmp645 + 1;
                                                            sum24 = sum24 + (input[tmp645] << sum25);
                                                            sum25 = sum25 + 8;
                                                            tmp326 = sum24;
                                                            tmp327 = diff18;
                                                            tmp328 = sum23;
                                                            tmp325 = sum25;
                                                            break;
                                                          }
                                                        }
                                                      }
                                                      if (state.offset > state.dmax) {
                                                        state.msg = "invalid distance too far back";
                                                        state.mode = 30;
                                                        num56 = tmp312;
                                                        bits = diff17;
                                                        hold = tmp318;
                                                        diff41 = tmp319;
                                                        next_in = tmp320;
                                                        continue;
                                                      } else {
                                                        state.mode = 25;
                                                        tmp601 = tmp312;
                                                        tmp602 = diff17;
                                                        tmp603 = tmp318;
                                                        tmp604 = tmp319;
                                                        tmp605 = tmp320;
                                                      }
                                                    }
                                                    let tmp270 = state.distcode[tmp266 & (1 << state.distbits) - 1];
                                                    let tmp271 = tmp270 >>> 16 & 255;
                                                    let tmp272 = 65535 & tmp270;
                                                    let tmp273 = tmp270 >>> 24;
                                                    let sum31 = tmp265;
                                                    let tmp275 = tmp266;
                                                    let diff23 = tmp267;
                                                    let sum29 = tmp268;
                                                    let tmp278 = tmp266;
                                                    let tmp279 = tmp267;
                                                    let tmp280 = tmp268;
                                                    let tmp281 = tmp265;
                                                    if (tmp273 <= tmp265) {
                                                      let tmp286 = tmp272;
                                                      let tmp287 = tmp271;
                                                      let tmp288 = tmp273;
                                                      let diff20 = tmp281;
                                                      let tmp290 = tmp278;
                                                      let tmp291 = tmp279;
                                                      let tmp292 = tmp280;
                                                      if (!(240 & tmp271)) {
                                                        let diff19 = (1 << tmp273 + tmp271) - 1;
                                                        let tmp294 = state.distcode[tmp272 + ((tmp278 & diff19) >> tmp273)];
                                                        let tmp295 = tmp294 >>> 16 & 255;
                                                        let tmp296 = 65535 & tmp294;
                                                        let tmp297 = tmp294 >>> 24;
                                                        let sum28 = tmp281;
                                                        let tmp299 = tmp278;
                                                        let diff21 = tmp279;
                                                        let sum26 = tmp280;
                                                        let tmp302 = tmp281;
                                                        let tmp303 = tmp278;
                                                        let tmp304 = tmp279;
                                                        let tmp305 = tmp280;
                                                        if (tmp273 + tmp297 <= tmp281) {
                                                          tmp290 = tmp303 >>> tmp273;
                                                          diff20 = tmp302 - tmp273;
                                                          state.back = state.back + tmp273;
                                                          tmp286 = tmp296;
                                                          tmp287 = tmp295;
                                                          tmp288 = tmp297;
                                                          tmp291 = tmp304;
                                                          tmp292 = tmp305;
                                                        } else {
                                                          num61 = tmp269;
                                                          tmp37 = avail_out;
                                                          num62 = sum28;
                                                          num63 = tmp299;
                                                          tmp38 = sum26;
                                                          tmp39 = diff21;
                                                          while (0 !== diff21) {
                                                            diff21 = diff21 - 1;
                                                            let tmp641 = +sum26;
                                                            sum26 = tmp641 + 1;
                                                            let sum27 = tmp299 + (input[tmp641] << sum28);
                                                            sum28 = sum28 + 8;
                                                            let tmp643 = state.distcode[tmp272 + ((sum27 & diff19) >> tmp273)];
                                                            tmp295 = tmp643 >>> 16 & 255;
                                                            tmp296 = 65535 & tmp643;
                                                            let tmp644 = tmp643 >>> 24;
                                                            tmp299 = sum27;
                                                            tmp297 = tmp644;
                                                            tmp303 = sum27;
                                                            tmp304 = diff21;
                                                            tmp305 = sum26;
                                                            tmp302 = sum28;
                                                            break;
                                                          }
                                                        }
                                                      }
                                                      let tmp310 = tmp290 >>> tmp288;
                                                      let diff22 = diff20 - tmp288;
                                                      state.back = state.back + tmp288;
                                                      if (64 & tmp287) {
                                                        state.msg = "invalid distance code";
                                                        state.mode = 30;
                                                        num56 = tmp269;
                                                        bits = diff22;
                                                        hold = tmp310;
                                                        diff41 = tmp291;
                                                        next_in = tmp292;
                                                        continue;
                                                      } else {
                                                        state.offset = tmp286;
                                                        state.extra = 15 & tmp287;
                                                        state.mode = 24;
                                                        tmp312 = tmp269;
                                                        tmp313 = diff22;
                                                        tmp314 = tmp310;
                                                        tmp315 = tmp291;
                                                        tmp316 = tmp292;
                                                      }
                                                    } else {
                                                      num61 = tmp269;
                                                      tmp37 = avail_out;
                                                      num62 = sum31;
                                                      num63 = tmp275;
                                                      tmp38 = sum29;
                                                      tmp39 = diff23;
                                                      while (0 !== diff23) {
                                                        diff23 = diff23 - 1;
                                                        let tmp638 = +sum29;
                                                        sum29 = tmp638 + 1;
                                                        let sum30 = tmp275 + (input[tmp638] << sum31);
                                                        sum31 = sum31 + 8;
                                                        let tmp640 = state.distcode[sum30 & (1 << state.distbits) - 1];
                                                        tmp271 = tmp640 >>> 16 & 255;
                                                        tmp272 = 65535 & tmp640;
                                                        tmp273 = tmp640 >>> 24;
                                                        tmp275 = sum30;
                                                        tmp278 = sum30;
                                                        tmp279 = diff23;
                                                        tmp280 = sum29;
                                                        tmp281 = sum31;
                                                        break;
                                                      }
                                                    }
                                                  }
                                                  let diff24 = tmp245;
                                                  let tmp250 = tmp246;
                                                  let tmp251 = tmp247;
                                                  let tmp252 = tmp248;
                                                  if (state.extra) {
                                                    let extra = state.extra;
                                                    let sum34 = tmp245;
                                                    let sum33 = tmp246;
                                                    let diff25 = tmp247;
                                                    let sum32 = tmp248;
                                                    let tmp257 = tmp245;
                                                    let tmp258 = tmp246;
                                                    let tmp259 = tmp247;
                                                    let tmp260 = tmp248;
                                                    if (tmp245 >= extra) {
                                                      state.length = state.length + (tmp258 & (1 << state.extra) - 1);
                                                      tmp250 = tmp258 >>> state.extra;
                                                      diff24 = tmp257 - state.extra;
                                                      state.back = state.back + state.extra;
                                                      tmp251 = tmp259;
                                                      tmp252 = tmp260;
                                                    } else {
                                                      num61 = tmp244;
                                                      tmp37 = avail_out;
                                                      num62 = sum34;
                                                      num63 = sum33;
                                                      tmp38 = sum32;
                                                      tmp39 = diff25;
                                                      while (0 !== diff25) {
                                                        diff25 = diff25 - 1;
                                                        let tmp637 = +sum32;
                                                        sum32 = tmp637 + 1;
                                                        sum33 = sum33 + (input[tmp637] << sum34);
                                                        sum34 = sum34 + 8;
                                                        tmp258 = sum33;
                                                        tmp259 = diff25;
                                                        tmp260 = sum32;
                                                        tmp257 = sum34;
                                                        break;
                                                      }
                                                    }
                                                  }
                                                  state.was = state.length;
                                                  state.mode = 23;
                                                  tmp265 = diff24;
                                                  tmp266 = tmp250;
                                                  tmp267 = tmp251;
                                                  tmp268 = tmp252;
                                                  tmp269 = tmp244;
                                                }
                                                if (tmp200 >= 6) {
                                                  if (diff7 >= 258) {
                                                    state.next_out = next_out;
                                                    state.avail_out = diff7;
                                                    state.next_in = tmp201;
                                                    state.avail_in = tmp200;
                                                    state.hold = tmp199;
                                                    state.bits = tmp198;
                                                    let tmp344 = inflate_fast(state, avail_out);
                                                    ({ next_out: next_out2, output: output2, avail_out: avail_out2, next_in: next_in2, input: input2, avail_in: avail_in2 } = state);
                                                    ({ hold: hold2, bits: bits2 } = state);
                                                    num56 = tmp197;
                                                    bits = bits2;
                                                    hold = hold2;
                                                    diff7 = avail_out2;
                                                    diff41 = avail_in2;
                                                    next_out = next_out2;
                                                    next_in = next_in2;
                                                    output = output2;
                                                    input = input2;
                                                    if (state.mode !== 12) {
                                                      continue;
                                                    } else {
                                                      state.back = -1;
                                                      num56 = tmp197;
                                                      avail_out = tmp8;
                                                      bits = bits2;
                                                      hold = hold2;
                                                      diff7 = avail_out2;
                                                      diff41 = avail_in2;
                                                      next_out = next_out2;
                                                      next_in = next_in2;
                                                      output = output2;
                                                      input = input2;
                                                      continue;
                                                    }
                                                    continue;
                                                  }
                                                }
                                                state.back = 0;
                                                let tmp202 = state.lencode[tmp199 & (1 << state.lenbits) - 1];
                                                let tmp203 = tmp202 >>> 16 & 255;
                                                let tmp204 = 65535 & tmp202;
                                                let tmp205 = tmp202 >>> 24;
                                                let sum40 = tmp198;
                                                let tmp207 = tmp199;
                                                let diff30 = tmp200;
                                                let sum38 = tmp201;
                                                let tmp210 = tmp199;
                                                let tmp211 = tmp200;
                                                let tmp212 = tmp201;
                                                let tmp213 = tmp198;
                                                if (tmp205 <= tmp198) {
                                                  let tmp218 = tmp204;
                                                  let tmp219 = tmp203;
                                                  let tmp220 = tmp205;
                                                  let diff27 = tmp213;
                                                  let tmp222 = tmp210;
                                                  let tmp223 = tmp211;
                                                  let tmp224 = tmp212;
                                                  if (tmp203) {
                                                    tmp218 = tmp204;
                                                    tmp219 = tmp203;
                                                    tmp220 = tmp205;
                                                    diff27 = tmp213;
                                                    tmp222 = tmp210;
                                                    tmp223 = tmp211;
                                                    tmp224 = tmp212;
                                                    if (!(240 & tmp203)) {
                                                      let diff26 = (1 << tmp205 + tmp203) - 1;
                                                      let tmp226 = state.lencode[tmp204 + ((tmp210 & diff26) >> tmp205)];
                                                      let tmp227 = tmp226 >>> 16 & 255;
                                                      let tmp228 = 65535 & tmp226;
                                                      let tmp229 = tmp226 >>> 24;
                                                      let sum37 = tmp213;
                                                      let tmp231 = tmp210;
                                                      let diff28 = tmp211;
                                                      let sum35 = tmp212;
                                                      let tmp234 = tmp213;
                                                      let tmp235 = tmp210;
                                                      let tmp236 = tmp211;
                                                      let tmp237 = tmp212;
                                                      if (tmp205 + tmp229 <= tmp213) {
                                                        tmp222 = tmp235 >>> tmp205;
                                                        diff27 = tmp234 - tmp205;
                                                        state.back = state.back + tmp205;
                                                        tmp218 = tmp228;
                                                        tmp219 = tmp227;
                                                        tmp220 = tmp229;
                                                        tmp223 = tmp236;
                                                        tmp224 = tmp237;
                                                      } else {
                                                        num61 = tmp197;
                                                        tmp37 = avail_out;
                                                        num62 = sum37;
                                                        num63 = tmp231;
                                                        tmp38 = sum35;
                                                        tmp39 = diff28;
                                                        while (0 !== diff28) {
                                                          diff28 = diff28 - 1;
                                                          let tmp633 = +sum35;
                                                          sum35 = tmp633 + 1;
                                                          let sum36 = tmp231 + (input[tmp633] << sum37);
                                                          sum37 = sum37 + 8;
                                                          let tmp635 = state.lencode[tmp204 + ((sum36 & diff26) >> tmp205)];
                                                          tmp227 = tmp635 >>> 16 & 255;
                                                          tmp228 = 65535 & tmp635;
                                                          let tmp636 = tmp635 >>> 24;
                                                          tmp231 = sum36;
                                                          tmp229 = tmp636;
                                                          tmp235 = sum36;
                                                          tmp236 = diff28;
                                                          tmp237 = sum35;
                                                          tmp234 = sum37;
                                                          break;
                                                        }
                                                      }
                                                    }
                                                  }
                                                  let tmp242 = tmp222 >>> tmp220;
                                                  let diff29 = diff27 - tmp220;
                                                  state.back = state.back + tmp220;
                                                  state.length = tmp218;
                                                  if (0 === tmp219) {
                                                    state.mode = 26;
                                                    num56 = tmp197;
                                                    bits = diff29;
                                                    hold = tmp242;
                                                    diff41 = tmp223;
                                                    next_in = tmp224;
                                                    continue;
                                                  } else {
                                                    if (32 & tmp219) {
                                                      state.back = -1;
                                                      state.mode = 12;
                                                      num56 = tmp197;
                                                      bits = diff29;
                                                      hold = tmp242;
                                                      diff41 = tmp223;
                                                      next_in = tmp224;
                                                      continue;
                                                    } else if (64 & tmp219) {
                                                      state.msg = "invalid literal/length code";
                                                      state.mode = 30;
                                                      num56 = tmp197;
                                                      bits = diff29;
                                                      hold = tmp242;
                                                      diff41 = tmp223;
                                                      next_in = tmp224;
                                                      continue;
                                                    } else {
                                                      state.extra = 15 & tmp219;
                                                      state.mode = 22;
                                                      tmp244 = tmp197;
                                                      tmp245 = diff29;
                                                      tmp246 = tmp242;
                                                      tmp247 = tmp223;
                                                      tmp248 = tmp224;
                                                    }
                                                    continue;
                                                  }
                                                  continue;
                                                } else {
                                                  num61 = tmp197;
                                                  tmp37 = avail_out;
                                                  num62 = sum40;
                                                  num63 = tmp207;
                                                  tmp38 = sum38;
                                                  tmp39 = diff30;
                                                  while (0 !== diff30) {
                                                    diff30 = diff30 - 1;
                                                    let tmp630 = +sum38;
                                                    sum38 = tmp630 + 1;
                                                    let sum39 = tmp207 + (input[tmp630] << sum40);
                                                    sum40 = sum40 + 8;
                                                    let tmp632 = state.lencode[sum39 & (1 << state.lenbits) - 1];
                                                    tmp203 = tmp632 >>> 16 & 255;
                                                    tmp204 = 65535 & tmp632;
                                                    tmp205 = tmp632 >>> 24;
                                                    tmp207 = sum39;
                                                    tmp210 = sum39;
                                                    tmp211 = diff30;
                                                    tmp212 = sum38;
                                                    tmp213 = sum40;
                                                    break;
                                                  }
                                                }
                                              }
                                              state.mode = 21;
                                              tmp197 = tmp192;
                                              tmp198 = tmp193;
                                              tmp199 = tmp194;
                                              tmp200 = tmp195;
                                              tmp201 = tmp196;
                                            }
                                            let tmp118 = tmp114;
                                            let tmp119 = tmp115;
                                            let tmp120 = tmp116;
                                            let tmp121 = tmp117;
                                            let tmp122 = tmp114;
                                            let tmp123 = tmp115;
                                            let tmp124 = tmp116;
                                            let tmp125 = tmp117;
                                            if (state.have >= state.nlen + state.ndist) {
                                              num56 = tmp113;
                                              bits = tmp122;
                                              hold = tmp123;
                                              diff41 = tmp124;
                                              next_in = tmp125;
                                              if (state.mode === 30) {
                                                continue;
                                              } else {
                                                if (0 === state.lens[256]) {
                                                  state.msg = "invalid code -- missing end-of-block";
                                                  state.mode = 30;
                                                  num56 = tmp113;
                                                  avail_out = tmp8;
                                                  bits = tmp122;
                                                  hold = tmp123;
                                                  diff7 = tmp11;
                                                  diff41 = tmp124;
                                                  next_out = tmp13;
                                                  next_in = tmp125;
                                                  output = tmp15;
                                                  input = tmp16;
                                                  continue;
                                                } else {
                                                  state.lenbits = 9;
                                                  let obj4 = { bits: state.lenbits };
                                                  let lens5 = state.lens;
                                                  let tmp629 = inflate_table(1, lens5, 0, state.nlen, state.lencode, 0, state.work, obj4);
                                                  state.lenbits = obj4.bits;
                                                  if (tmp629) {
                                                    state.msg = "invalid literal/lengths set";
                                                    state.mode = 30;
                                                    num56 = tmp629;
                                                    avail_out = tmp8;
                                                    bits = tmp122;
                                                    hold = tmp123;
                                                    diff7 = tmp11;
                                                    diff41 = tmp124;
                                                    next_out = tmp13;
                                                    next_in = tmp125;
                                                    output = tmp15;
                                                    input = tmp16;
                                                    continue;
                                                  } else {
                                                    state.distbits = 6;
                                                    state.distcode = state.distdyn;
                                                    let obj7 = { bits: null };
                                                    ({ distbits: obj2.bits, lens: lens2 } = state);
                                                    let tmp191 = inflate_table(2, lens2, state.nlen, state.ndist, state.distcode, 0, state.work, obj7);
                                                    state.distbits = obj7.bits;
                                                    if (tmp191) {
                                                      state.msg = "invalid distances set";
                                                      state.mode = 30;
                                                      num56 = tmp191;
                                                      avail_out = tmp8;
                                                      bits = tmp122;
                                                      hold = tmp123;
                                                      diff7 = tmp11;
                                                      diff41 = tmp124;
                                                      next_out = tmp13;
                                                      next_in = tmp125;
                                                      output = tmp15;
                                                      input = tmp16;
                                                      continue;
                                                    } else {
                                                      state.mode = 20;
                                                      tmp192 = tmp191;
                                                      tmp193 = tmp122;
                                                      tmp194 = tmp123;
                                                      tmp195 = tmp124;
                                                      tmp196 = tmp125;
                                                      num61 = tmp191;
                                                      tmp37 = tmp8;
                                                      num62 = tmp122;
                                                      num63 = tmp123;
                                                      tmp39 = tmp124;
                                                      tmp38 = tmp125;
                                                    }
                                                  }
                                                  continue;
                                                }
                                                continue;
                                              }
                                              continue;
                                            } else {
                                              while (true) {
                                                let tmp126 = state.lencode[tmp119 & (1 << state.lenbits) - 1];
                                                let tmp127 = tmp126 >>> 16;
                                                let tmp128 = 65535 & tmp126;
                                                let tmp129 = tmp126 >>> 24;
                                                let sum56 = tmp118;
                                                let tmp131 = tmp119;
                                                let diff38 = tmp120;
                                                let sum54 = tmp121;
                                                let tmp134 = tmp119;
                                                let tmp135 = tmp120;
                                                let tmp136 = tmp121;
                                                let tmp137 = tmp118;
                                                if (tmp129 <= tmp118) {
                                                  let diff31;
                                                  let tmp183;
                                                  let tmp184;
                                                  let tmp185;
                                                  if (tmp128 < 16) {
                                                    tmp183 = tmp134 >>> tmp129;
                                                    diff31 = tmp137 - tmp129;
                                                    let tmp188 = +state.have;
                                                    state.have = tmp188 + 1;
                                                    state.lens[tmp188] = tmp128;
                                                    tmp184 = tmp135;
                                                    tmp185 = tmp136;
                                                    tmp118 = diff31;
                                                    tmp119 = tmp183;
                                                    tmp120 = tmp184;
                                                    tmp121 = tmp185;
                                                    tmp122 = diff31;
                                                    tmp123 = tmp183;
                                                    tmp124 = tmp184;
                                                    tmp125 = tmp185;
                                                  } else {
                                                    let num72;
                                                    let sum42;
                                                    let tmp148;
                                                    let diff33;
                                                    let tmp164;
                                                    let tmp165;
                                                    if (16 === tmp128) {
                                                      let sum41 = tmp129 + 2;
                                                      let sum45 = tmp137;
                                                      let sum44 = tmp134;
                                                      let diff34 = tmp135;
                                                      let sum43 = tmp136;
                                                      let tmp171 = tmp134;
                                                      let tmp172 = tmp135;
                                                      let tmp173 = tmp136;
                                                      let tmp174 = tmp137;
                                                      if (tmp137 >= sum41) {
                                                        let tmp179 = tmp171 >>> tmp129;
                                                        let diff32 = tmp174 - tmp129;
                                                        if (0 === state.have) {
                                                          state.msg = "invalid bit length repeat";
                                                          state.mode = 30;
                                                          tmp122 = diff32;
                                                          tmp123 = tmp179;
                                                          tmp124 = tmp172;
                                                          tmp125 = tmp173;
                                                        } else {
                                                          num72 = state.lens[state.have - 1];
                                                          sum42 = 3 + (3 & tmp179);
                                                          tmp148 = tmp179 >>> 2;
                                                          diff33 = diff32 - 2;
                                                          tmp164 = tmp172;
                                                          tmp165 = tmp173;
                                                        }
                                                      } else {
                                                        num61 = tmp113;
                                                        tmp37 = avail_out;
                                                        num62 = sum45;
                                                        num63 = sum44;
                                                        tmp38 = sum43;
                                                        tmp39 = diff34;
                                                        while (0 !== diff34) {
                                                          diff34 = diff34 - 1;
                                                          let tmp624 = +sum43;
                                                          sum43 = tmp624 + 1;
                                                          sum44 = sum44 + (input[tmp624] << sum45);
                                                          sum45 = sum45 + 8;
                                                          tmp171 = sum44;
                                                          tmp172 = diff34;
                                                          tmp173 = sum43;
                                                          tmp174 = sum45;
                                                          break;
                                                        }
                                                      }
                                                      break;
                                                    } else if (17 === tmp128) {
                                                      let sum46 = tmp129 + 3;
                                                      let sum49 = tmp137;
                                                      let sum48 = tmp134;
                                                      let diff35 = tmp135;
                                                      let sum47 = tmp136;
                                                      let tmp155 = tmp137;
                                                      let tmp156 = tmp134;
                                                      let tmp157 = tmp135;
                                                      let tmp158 = tmp136;
                                                      if (tmp137 >= sum46) {
                                                        let tmp163 = tmp156 >>> tmp129;
                                                        sum42 = 3 + (7 & tmp163);
                                                        tmp148 = tmp163 >>> 3;
                                                        diff33 = tmp155 - tmp129 - 3;
                                                        tmp164 = tmp157;
                                                        tmp165 = tmp158;
                                                        num72 = 0;
                                                      } else {
                                                        num61 = tmp113;
                                                        tmp37 = avail_out;
                                                        num62 = sum49;
                                                        num63 = sum48;
                                                        tmp38 = sum47;
                                                        tmp39 = diff35;
                                                        while (0 !== diff35) {
                                                          diff35 = diff35 - 1;
                                                          let tmp623 = +sum47;
                                                          sum47 = tmp623 + 1;
                                                          sum48 = sum48 + (input[tmp623] << sum49);
                                                          sum49 = sum49 + 8;
                                                          tmp156 = sum48;
                                                          tmp157 = diff35;
                                                          tmp158 = sum47;
                                                          tmp155 = sum49;
                                                          break;
                                                        }
                                                      }
                                                      break;
                                                    } else {
                                                      let sum50 = tmp129 + 7;
                                                      let sum53 = tmp137;
                                                      let sum52 = tmp134;
                                                      let diff36 = tmp135;
                                                      let sum51 = tmp136;
                                                      let tmp620 = tmp137;
                                                      let tmp621 = tmp134;
                                                      tmp164 = tmp135;
                                                      tmp165 = tmp136;
                                                      if (tmp137 >= sum50) {
                                                        let tmp146 = tmp621 >>> tmp129;
                                                        sum42 = 11 + (127 & tmp146);
                                                        tmp148 = tmp146 >>> 7;
                                                        diff33 = tmp620 - tmp129 - 7;
                                                        num72 = 0;
                                                      } else {
                                                        num61 = tmp113;
                                                        tmp37 = avail_out;
                                                        num62 = sum53;
                                                        num63 = sum52;
                                                        tmp38 = sum51;
                                                        tmp39 = diff36;
                                                        while (0 !== diff36) {
                                                          diff36 = diff36 - 1;
                                                          let tmp622 = +sum51;
                                                          sum51 = tmp622 + 1;
                                                          sum52 = sum52 + (input[tmp622] << sum53);
                                                          sum53 = sum53 + 8;
                                                          tmp621 = sum52;
                                                          tmp164 = diff36;
                                                          tmp165 = sum51;
                                                          tmp620 = sum53;
                                                          break;
                                                        }
                                                      }
                                                      break;
                                                    }
                                                    if (state.have + sum42 > state.nlen + state.ndist) {
                                                      state.msg = "invalid bit length repeat";
                                                      state.mode = 30;
                                                      tmp122 = diff33;
                                                      tmp123 = tmp148;
                                                      tmp124 = tmp164;
                                                      tmp125 = tmp165;
                                                    } else {
                                                      let diff37 = sum42 - 1;
                                                      diff31 = diff33;
                                                      tmp183 = tmp148;
                                                      tmp184 = tmp164;
                                                      tmp185 = tmp165;
                                                      if (sum42) {
                                                        do {
                                                          let tmp186 = +state.have;
                                                          state.have = tmp186 + 1;
                                                          state.lens[tmp186] = num72;
                                                          tmp187 = diff37;
                                                          diff37 = diff37 - 1;
                                                          diff31 = diff33;
                                                          tmp183 = tmp148;
                                                          tmp184 = tmp164;
                                                          tmp185 = tmp165;
                                                        } while (tmp187);
                                                      }
                                                    }
                                                  }
                                                  break;
                                                } else {
                                                  num61 = tmp113;
                                                  tmp37 = avail_out;
                                                  num62 = sum56;
                                                  num63 = tmp131;
                                                  tmp38 = sum54;
                                                  tmp39 = diff38;
                                                  while (0 !== diff38) {
                                                    diff38 = diff38 - 1;
                                                    let tmp611 = +sum54;
                                                    sum54 = tmp611 + 1;
                                                    let sum55 = tmp131 + (input[tmp611] << sum56);
                                                    sum56 = sum56 + 8;
                                                    let tmp613 = state.lencode[sum55 & (1 << state.lenbits) - 1];
                                                    let tmp614 = tmp613 >>> 16;
                                                    tmp128 = 65535 & tmp613;
                                                    tmp129 = tmp613 >>> 24;
                                                    tmp131 = sum55;
                                                    tmp134 = sum55;
                                                    tmp135 = diff38;
                                                    tmp136 = sum54;
                                                    tmp137 = sum56;
                                                    continue;
                                                  }
                                                }
                                                break;
                                              }
                                            }
                                          }
                                          let diff39 = tmp597;
                                          let tmp87 = tmp598;
                                          let tmp88 = tmp599;
                                          let tmp89 = tmp600;
                                          let tmp90 = tmp597;
                                          let tmp91 = tmp598;
                                          let tmp92 = tmp599;
                                          let tmp93 = tmp600;
                                          if (state.have < state.ncode) {
                                            while (true) {
                                              let sum59 = diff39;
                                              let sum58 = tmp87;
                                              let diff40 = tmp88;
                                              let sum57 = tmp89;
                                              let tmp98 = tmp87;
                                              let tmp99 = tmp88;
                                              let tmp100 = tmp89;
                                              let tmp101 = diff39;
                                              if (diff39 >= 3) {
                                                let tmp106 = +state.have;
                                                state.have = tmp106 + 1;
                                                state.lens[items[tmp106]] = 7 & tmp98;
                                                tmp87 = tmp98 >>> 3;
                                                diff39 = tmp101 - 3;
                                                tmp88 = tmp99;
                                                tmp89 = tmp100;
                                                tmp90 = diff39;
                                                tmp91 = tmp87;
                                                tmp92 = tmp99;
                                                tmp93 = tmp100;
                                                break;
                                              } else {
                                                num61 = num56;
                                                tmp37 = avail_out;
                                                num62 = sum59;
                                                num63 = sum58;
                                                tmp38 = sum57;
                                                tmp39 = diff40;
                                                while (0 !== diff40) {
                                                  diff40 = diff40 - 1;
                                                  let tmp610 = +sum57;
                                                  sum57 = tmp610 + 1;
                                                  sum58 = sum58 + (input[tmp610] << sum59);
                                                  sum59 = sum59 + 8;
                                                  tmp98 = sum58;
                                                  tmp99 = diff40;
                                                  tmp100 = sum57;
                                                  tmp101 = sum59;
                                                  continue;
                                                }
                                              }
                                              break;
                                            }
                                          }
                                          if (state.have < 19) {
                                            do {
                                              let tmp107 = +state.have;
                                              state.have = tmp107 + 1;
                                              state.lens[items[tmp107]] = 0;
                                              have = state.have;
                                            } while (have < 19);
                                          }
                                          state.lencode = state.lendyn;
                                          state.lenbits = 7;
                                          let obj = { bits: state.lenbits };
                                          let lens = state.lens;
                                          let tmp112 = inflate_table(0, lens, 0, 19, state.lencode, 0, state.work, obj);
                                          state.lenbits = obj.bits;
                                          if (tmp112) {
                                            state.msg = "invalid code lengths set";
                                            state.mode = 30;
                                            num56 = tmp112;
                                            bits = tmp90;
                                            hold = tmp91;
                                            diff41 = tmp92;
                                            next_in = tmp93;
                                            continue;
                                          } else {
                                            state.have = 0;
                                            state.mode = 19;
                                            tmp113 = tmp112;
                                            tmp114 = tmp90;
                                            tmp115 = tmp91;
                                            tmp116 = tmp92;
                                            tmp117 = tmp93;
                                          }
                                        }
                                      }
                                      let length3 = state.length;
                                      if (length3) {
                                        if (length3 > tmp360) {
                                          length3 = tmp360;
                                        }
                                        if (length3 > diff7) {
                                          length3 = diff7;
                                        }
                                        num61 = num56;
                                        tmp37 = avail_out;
                                        num62 = tmp358;
                                        num63 = tmp359;
                                        tmp39 = tmp360;
                                        tmp38 = tmp361;
                                        if (0 !== length3) {
                                          let obj5 = _mod13462;
                                          let arraySetResult = obj5.arraySet(tmp15, tmp16, tmp361, length3, tmp13);
                                          diff41 = tmp360 - length3;
                                          next_in = tmp361 + length3;
                                          diff7 = diff7 - length3;
                                          next_out = next_out + length3;
                                          state.length = state.length - length3;
                                          bits = tmp358;
                                          hold = tmp359;
                                          continue;
                                        }
                                      } else {
                                        state.mode = 12;
                                        bits = tmp358;
                                        hold = tmp359;
                                        diff41 = tmp360;
                                        next_in = tmp361;
                                        continue;
                                      }
                                      continue;
                                    }
                                    state.mode = 16;
                                    tmp358 = num117;
                                    tmp359 = num118;
                                    tmp360 = tmp595;
                                    tmp361 = tmp596;
                                  }
                                }
                                if (state.last) {
                                  hold = tmp592 >>> (7 & tmp591);
                                  bits = tmp591 - (7 & tmp591);
                                  state.mode = 27;
                                  diff41 = tmp593;
                                  next_in = tmp594;
                                  continue;
                                } else {
                                  let sum67 = tmp591;
                                  let sum66 = tmp592;
                                  let diff43 = tmp593;
                                  let sum65 = tmp594;
                                  let tmp380 = tmp592;
                                  let tmp381 = tmp593;
                                  let tmp382 = tmp594;
                                  let tmp383 = tmp591;
                                  if (tmp591 >= 3) {
                                    state.last = 1 & tmp380;
                                    let diff42 = tmp383 - 1;
                                    let tmp389 = tmp380 >>> 1;
                                    let tmp390 = 3 & tmp389;
                                    if (0 === tmp390) {
                                      state.mode = 14;
                                    } else if (1 === tmp390) {
                                      let tmp391 = c7;
                                      if (tmp391) {
                                        let self = this;
                                        let self2 = this;
                                        buf32 = new _mod13462.Buf32(512);
                                        let self3 = this;
                                        let self4 = this;
                                        buf321 = new _mod13462.Buf32(32);
                                        let num79 = 0;
                                        do {
                                          sum60 = num79 + 1;
                                          state.lens[num79] = 8;
                                          num79 = sum60;
                                        } while (sum60 < 144);
                                        let tmp399 = sum60;
                                        let tmp400 = sum60;
                                        if (sum60 < 256) {
                                          do {
                                            sum61 = tmp399 + 1;
                                            state.lens[tmp399] = 9;
                                            tmp399 = sum61;
                                            tmp400 = sum61;
                                          } while (sum61 < 256);
                                        }
                                        let tmp402 = tmp400;
                                        let tmp403 = tmp400;
                                        if (tmp400 < 280) {
                                          do {
                                            sum62 = tmp402 + 1;
                                            state.lens[tmp402] = 7;
                                            tmp402 = sum62;
                                            tmp403 = sum62;
                                          } while (sum62 < 280);
                                        }
                                        if (tmp403 < 288) {
                                          do {
                                            sum63 = tmp403 + 1;
                                            state.lens[tmp403] = 8;
                                            tmp403 = sum63;
                                          } while (sum63 < 288);
                                        }
                                        let lens3 = state.lens;
                                        let tmp410 = inflate_table(1, lens3, 0, 288, buf32, 0, state.work, { bits: 9 });
                                        let num84 = 0;
                                        do {
                                          sum64 = num84 + 1;
                                          state.lens[num84] = 5;
                                          num84 = sum64;
                                        } while (sum64 < 32);
                                        let lens4 = state.lens;
                                        let tmp416 = inflate_table(2, lens4, 0, 32, buf321, 0, state.work, { bits: 5 });
                                        c7 = false;
                                      }
                                      state.lencode = buf32;
                                      state.lenbits = 9;
                                      state.distcode = buf321;
                                      state.distbits = 5;
                                      state.mode = 20;
                                      if (6 === Z_NO_FLUSH) {
                                        num63 = tmp389 >>> 2;
                                        num62 = diff42 - 2;
                                        num61 = num56;
                                        tmp37 = avail_out;
                                        tmp39 = tmp381;
                                        tmp38 = tmp382;
                                      }
                                    } else if (2 === tmp390) {
                                      state.mode = 17;
                                    } else if (3 === tmp390) {
                                      state.msg = "invalid block type";
                                      state.mode = 30;
                                    }
                                    hold = tmp389 >>> 2;
                                    bits = diff42 - 2;
                                    diff41 = tmp381;
                                    next_in = tmp382;
                                    continue;
                                  } else {
                                    num61 = num56;
                                    tmp37 = avail_out;
                                    num62 = sum67;
                                    num63 = sum66;
                                    tmp38 = sum65;
                                    tmp39 = diff43;
                                    while (0 !== diff43) {
                                      diff43 = diff43 - 1;
                                      let tmp658 = +sum65;
                                      sum65 = tmp658 + 1;
                                      sum66 = sum66 + (input[tmp658] << sum67);
                                      sum67 = sum67 + 8;
                                      tmp380 = sum66;
                                      tmp381 = diff43;
                                      tmp382 = sum65;
                                      tmp383 = sum67;
                                      break;
                                    }
                                  }
                                }
                              }
                              num61 = num56;
                              tmp37 = avail_out;
                              num62 = tmp587;
                              num63 = tmp588;
                              tmp39 = tmp589;
                              tmp38 = tmp590;
                              if (5 !== Z_NO_FLUSH) {
                                tmp591 = tmp587;
                                tmp592 = tmp588;
                                tmp593 = tmp589;
                                tmp594 = tmp590;
                                num61 = num56;
                                tmp37 = avail_out;
                                num62 = tmp587;
                                num63 = tmp588;
                                tmp39 = tmp589;
                                tmp38 = tmp590;
                              }
                            }
                            if (0 === state.havedict) {
                              state.next_out = next_out;
                              state.avail_out = diff7;
                              state.next_in = tmp375;
                              state.avail_in = tmp374;
                              state.hold = num76;
                              state.bits = num75;
                              return 2;
                            } else {
                              state.check = 1;
                              state.adler = 1;
                              state.mode = 12;
                              tmp587 = num75;
                              tmp588 = num76;
                              tmp589 = tmp374;
                              tmp590 = tmp375;
                            }
                          }
                        }
                        let num107 = tmp545;
                        let num108 = tmp546;
                        let tmp547 = tmp543;
                        let tmp548 = tmp544;
                        if (512 & state.flags) {
                          let sum70 = tmp545;
                          let sum69 = tmp546;
                          let diff44 = tmp543;
                          let sum68 = tmp544;
                          let tmp553 = tmp545;
                          let tmp554 = tmp546;
                          let tmp555 = tmp543;
                          let tmp556 = tmp544;
                          if (tmp545 >= 16) {
                            num107 = 0;
                            num108 = 0;
                            tmp547 = tmp555;
                            tmp548 = tmp556;
                            if (tmp554 !== (65535 & state.check)) {
                              state.msg = "header crc mismatch";
                              state.mode = 30;
                              bits = tmp553;
                              hold = tmp554;
                              diff41 = tmp555;
                              next_in = tmp556;
                              continue;
                            }
                          } else {
                            num61 = num56;
                            tmp37 = avail_out;
                            num62 = sum70;
                            num63 = sum69;
                            tmp38 = sum68;
                            tmp39 = diff44;
                            while (0 !== diff44) {
                              diff44 = diff44 - 1;
                              let tmp663 = +sum68;
                              sum68 = tmp663 + 1;
                              sum69 = sum69 + (input[tmp663] << sum70);
                              sum70 = sum70 + 8;
                              tmp554 = sum69;
                              tmp555 = diff44;
                              tmp556 = sum68;
                              tmp553 = sum70;
                              break;
                            }
                          }
                        }
                        if (state.head) {
                          state.head.hcrc = state.flags >> 9 & 1;
                          state.head.done = true;
                        }
                        state.check = 0;
                        state.adler = 0;
                        state.mode = 12;
                        bits = num107;
                        hold = num108;
                        diff41 = tmp547;
                        next_in = tmp548;
                        continue;
                      }
                      if (4096 & state.flags) {
                        let num106 = 0;
                        num61 = num56;
                        tmp37 = avail_out;
                        num62 = tmp530;
                        num63 = tmp531;
                        tmp38 = tmp529;
                        tmp39 = tmp528;
                        if (0 !== tmp528) {
                          let sum71;
                          while (true) {
                            let tmp534 = input[tmp529 + num106];
                            let head4 = state.head;
                            if (head4) {
                              head4 = tmp534;
                            }
                            if (head4) {
                              head4 = state.length < 65536;
                            }
                            if (head4) {
                              let head5 = state.head;
                              let _String2 = String;
                              head5.comment = head5.comment + String.fromCharCode(tmp534);
                            }
                            sum71 = num106 + 1;
                            if (!tmp534) {
                              break;
                            } else {
                              num106 = sum71;
                              if (sum71 >= tmp528) {
                                break;
                              }
                            }
                          }
                          if (512 & state.flags) {
                            let check9 = state.check;
                            state.check = _mod13469(check9, tmp16, sum71, tmp529);
                          }
                          diff45 = tmp528 - sum71;
                          sum72 = tmp529 + sum71;
                          num61 = num56;
                          tmp37 = avail_out;
                          num62 = tmp530;
                          num63 = tmp531;
                          tmp39 = diff45;
                          tmp38 = sum72;
                        }
                      } else {
                        diff45 = tmp528;
                        sum72 = tmp529;
                        if (state.head) {
                          state.head.comment = null;
                          diff45 = tmp528;
                          sum72 = tmp529;
                        }
                      }
                      state.mode = 9;
                      tmp543 = diff45;
                      tmp544 = sum72;
                      tmp545 = tmp530;
                      tmp546 = tmp531;
                    }
                    if (2048 & state.flags) {
                      let num105 = 0;
                      num61 = num56;
                      tmp37 = avail_out;
                      num62 = tmp515;
                      num63 = tmp516;
                      tmp38 = tmp514;
                      tmp39 = tmp513;
                      if (0 !== tmp513) {
                        let sum73;
                        while (true) {
                          let tmp519 = input[tmp514 + num105];
                          let head2 = state.head;
                          if (head2) {
                            head2 = tmp519;
                          }
                          if (head2) {
                            head2 = state.length < 65536;
                          }
                          if (head2) {
                            let head3 = state.head;
                            let _String = String;
                            head3.name = head3.name + String.fromCharCode(tmp519);
                          }
                          sum73 = num105 + 1;
                          if (!tmp519) {
                            break;
                          } else {
                            num105 = sum73;
                            if (sum73 >= tmp513) {
                              break;
                            }
                          }
                        }
                        if (512 & state.flags) {
                          let check8 = state.check;
                          state.check = _mod13469(check8, tmp16, sum73, tmp514);
                        }
                        diff46 = tmp513 - sum73;
                        sum74 = tmp514 + sum73;
                        num61 = num56;
                        tmp37 = avail_out;
                        num62 = tmp515;
                        num63 = tmp516;
                        tmp39 = diff46;
                        tmp38 = sum74;
                      }
                    } else {
                      diff46 = tmp513;
                      sum74 = tmp514;
                      if (state.head) {
                        state.head.name = null;
                        diff46 = tmp513;
                        sum74 = tmp514;
                      }
                    }
                    state.length = 0;
                    state.mode = 8;
                    tmp528 = diff46;
                    tmp529 = sum74;
                    tmp530 = tmp515;
                    tmp531 = tmp516;
                  }
                  let tmp490 = tmp488;
                  let tmp491 = tmp489;
                  if (!(1024 & state.flags)) {
                    state.length = 0;
                    state.mode = 7;
                    tmp513 = tmp490;
                    tmp514 = tmp491;
                    tmp515 = tmp486;
                    tmp516 = tmp487;
                  } else {
                    let length4 = state.length;
                    if (length4 > tmp488) {
                      length4 = tmp488;
                    }
                    let diff48 = tmp488;
                    let sum75 = tmp489;
                    if (length4) {
                      if (state.head) {
                        let diff47 = state.head.extra_len - state.length;
                        if (!state.head.extra) {
                          let _Array = Array;
                          let extra_len = state.head.extra_len;
                          let self5 = this;
                          let self6 = this;
                          let head = state.head;
                          let array = new Array(extra_len);
                          head.extra = array;
                        }
                        let obj3 = _mod13462;
                        let extra3 = state.head.extra;
                        let arraySetResult2 = obj3.arraySet(extra3, tmp16, tmp489, length4, diff47);
                      }
                      if (512 & state.flags) {
                        let check7 = state.check;
                        state.check = _mod13469(check7, tmp16, length4, tmp489);
                      }
                      diff48 = tmp488 - length4;
                      sum75 = tmp489 + length4;
                      state.length = state.length - length4;
                    }
                    tmp490 = diff48;
                    tmp491 = sum75;
                    num61 = num56;
                    tmp37 = avail_out;
                    num62 = tmp486;
                    num63 = tmp487;
                    tmp39 = diff48;
                    tmp38 = sum75;
                  }
                }
                if (1024 & state.flags) {
                  let sum78 = num99;
                  let sum77 = num100;
                  let diff49 = tmp467;
                  let sum76 = tmp468;
                  let tmp475 = num100;
                  let tmp476 = tmp467;
                  let tmp477 = tmp468;
                  if (num99 >= 16) {
                    state.length = tmp475;
                    if (state.head) {
                      state.head.extra_len = tmp475;
                    }
                    num101 = 0;
                    num102 = 0;
                    tmp469 = tmp476;
                    tmp470 = tmp477;
                    if (512 & state.flags) {
                      buf8[0] = 255 & tmp475;
                      buf8[1] = tmp475 >>> 8 & 255;
                      let check6 = state.check;
                      state.check = _mod13469(check6, tmp2, 2, 0);
                      num101 = 0;
                      num102 = 0;
                      tmp469 = tmp476;
                      tmp470 = tmp477;
                    }
                  } else {
                    num61 = num56;
                    tmp37 = avail_out;
                    num62 = sum78;
                    num63 = sum77;
                    tmp38 = sum76;
                    tmp39 = diff49;
                    while (0 !== diff49) {
                      diff49 = diff49 - 1;
                      let tmp662 = +sum76;
                      sum76 = tmp662 + 1;
                      sum77 = sum77 + (input[tmp662] << sum78);
                      sum78 = sum78 + 8;
                      tmp475 = sum77;
                      tmp476 = diff49;
                      tmp477 = sum76;
                      break;
                    }
                  }
                } else {
                  num101 = num99;
                  num102 = num100;
                  tmp469 = tmp467;
                  tmp470 = tmp468;
                  if (state.head) {
                    state.head.extra = null;
                    num101 = num99;
                    num102 = num100;
                    tmp469 = tmp467;
                    tmp470 = tmp468;
                  }
                }
                state.mode = 6;
                tmp486 = num101;
                tmp487 = num102;
                tmp488 = tmp469;
                tmp489 = tmp470;
              }
              let sum80 = num96;
              let diff50 = tmp451;
              let sum79 = tmp452;
              let tmp456 = num96;
              let tmp457 = tmp451;
              let tmp458 = tmp452;
              if (num95 >= 16) {
                if (state.head) {
                  state.head.xflags = 255 & tmp456;
                  state.head.os = tmp456 >> 8;
                }
                if (512 & state.flags) {
                  buf8[0] = 255 & tmp456;
                  buf8[1] = tmp456 >>> 8 & 255;
                  let check5 = state.check;
                  state.check = _mod13469(check5, tmp2, 2, 0);
                }
                state.mode = 5;
                num99 = 0;
                num100 = 0;
                tmp467 = tmp457;
                tmp468 = tmp458;
              } else {
                num61 = num56;
                tmp37 = avail_out;
                num62 = num95;
                num63 = sum80;
                tmp38 = sum79;
                tmp39 = diff50;
                while (0 !== diff50) {
                  diff50 = diff50 - 1;
                  let tmp661 = +sum79;
                  sum79 = tmp661 + 1;
                  sum80 = sum80 + (input[tmp661] << num95);
                  num95 = num95 + 8;
                  tmp456 = sum80;
                  tmp457 = diff50;
                  tmp458 = sum79;
                  break;
                }
              }
            }
            let sum82 = num92;
            let diff51 = tmp435;
            let sum81 = tmp436;
            let tmp440 = num92;
            let tmp441 = tmp435;
            let tmp442 = tmp436;
            if (num91 >= 32) {
              if (state.head) {
                state.head.time = tmp440;
              }
              if (512 & state.flags) {
                buf8[0] = 255 & tmp440;
                buf8[1] = tmp440 >>> 8 & 255;
                buf8[2] = tmp440 >>> 16 & 255;
                buf8[3] = tmp440 >>> 24 & 255;
                let check4 = state.check;
                state.check = _mod13469(check4, tmp2, 4, 0);
              }
              state.mode = 4;
              num95 = 0;
              num96 = 0;
              tmp451 = tmp441;
              tmp452 = tmp442;
            } else {
              num61 = num56;
              tmp37 = avail_out;
              num62 = num91;
              num63 = sum82;
              tmp38 = sum81;
              tmp39 = diff51;
              while (0 !== diff51) {
                diff51 = diff51 - 1;
                let tmp660 = +sum81;
                sum81 = tmp660 + 1;
                sum82 = sum82 + (input[tmp660] << num91);
                num91 = num91 + 8;
                tmp440 = sum82;
                tmp441 = diff51;
                tmp442 = sum81;
                break;
              }
            }
          }
          state.next_out = next_out;
          state.avail_out = diff7;
          state.next_in = tmp38;
          state.avail_in = tmp39;
          state.hold = num63;
          state.bits = num62;
          if (state.wsize) {
            let output3 = state.output;
            let tmp572 = updatewindow(state, output3, state.next_out, tmp37 - state.avail_out);
          }
          let diff52 = avail_in - state.avail_in;
          let diff53 = tmp37 - state.avail_out;
          state.total_in = state.total_in + diff52;
          state.total_out = state.total_out + diff53;
          state.total = state.total + diff53;
          let tmp575 = state.wrap && diff53;
          if (tmp575) {
            let tmp581;
            if (state.flags) {
              let check12 = state.check;
              tmp581 = _mod13469(check12, tmp15, diff53, state.next_out - diff53);
            } else {
              let check11 = state.check;
              tmp581 = adler32(check11, tmp15, diff53, state.next_out - diff53);
            }
            state.check = tmp581;
            state.adler = tmp581;
          }
          let num114 = 0;
          let bits3 = state.bits;
          if (state.last) {
            num114 = 64;
          }
          let num115 = 0;
          let sum83 = bits3 + num114;
          if (state.mode === 12) {
            num115 = 128;
          }
          if (20 === state.mode) {
            num116 = 256;
          } else {
            num116 = 0;
          }
          state.data_type = sum83 + num115 + num116;
          let tmp586 = (0 === diff52 && 0 === diff53 || 4 === Z_NO_FLUSH) && 0 === num61;
          if (tmp586) {
            num61 = -5;
          }
          return num61;
        }
        tmp69 = avail_out;
        tmp65 = bits;
        tmp66 = hold;
        tmp67 = diff41;
        tmp68 = next_in;
        if (29 !== mode) {
          num61 = -3;
          tmp37 = avail_out;
          num62 = bits;
          num63 = hold;
          tmp39 = diff41;
          tmp38 = next_in;
          if (30 !== mode) {
            if (31 === mode) {
              return -4;
            } else {
              return -2;
            }
          }
        }
      }
    }
  }
  return -2;
};
export const inflateEnd = function inflateEnd(strm) {
  const tmp = strm;
  if (tmp) {
    if (strm.state) {
      const state = strm.state;
      if (state.window) {
        state.window = null;
      }
      strm.state = null;
      return 0;
    }
  }
  return -2;
};
export const inflateGetHeader = function inflateGetHeader(strm, header) {
  let num = -2;
  if (strm) {
    num = -2;
    if (strm.state) {
      const state = strm.state;
      num = -2;
      if (2 & state.wrap) {
        state.head = header;
        header.done = false;
        num = 0;
      }
    }
  }
  return num;
};
export const inflateSetDictionary = function inflateSetDictionary(strm, string2bufResult) {
  let num = -2;
  let num2 = -2;
  if (strm) {
    num2 = num;
    if (strm.state) {
      const state = strm.state;
      if (0 === state.wrap) {
        let num8;
        if (11 !== state.mode) {
          updatewindow(strm, string2bufResult, string2bufResult.length, string2bufResult.length);
          state.havedict = 1;
          num8 = 0;
        } else {
          num8 = -3;
        }
        num = num8;
      }
      num2 = num;
    }
  }
  return num2;
};
export const inflateInfo = "pako inflate (from Nodeca project)";