// === Module 13661: InflateState ===

// Module 13661 (InflateState)
import _mod13651 from "module_13651" /* 13651 */;
import _mod13658 from "module_13658" /* 13658 */;
import inflate_table from "inflate_table" /* 13662 */;
import inflate_fast from "inflate_fast" /* 13663 */;

require = arg1;
const dependencyMap = arg6;
function InflateState() {
  const obj = { mode: 0, last: false, wrap: 0, havedict: false, flags: 0, dmax: 0, check: 0, total: 0, head: null, wbits: 0, wsize: 0, whave: 0, wnext: 0, window: null, hold: 0, bits: 0, length: 0, offset: 0, extra: 0, lencode: null, distcode: null, lenbits: 0, distbits: 0, ncode: 0, nlen: 0, ndist: 0, have: 0, next: null };
  const buf16 = new _mod13651.Buf16(320);
  obj.lens = buf16;
  const buf161 = new _mod13651.Buf16(288);
  obj.work = buf161;
  obj.lendyn = null;
  obj.distdyn = null;
  obj.sane = 0;
  obj.back = 0;
  obj.was = 0;
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
          buf32 = new _mod13651.Buf32(852);
          state2.lendyn = buf32;
          state2.lencode = buf32;
          buf321 = new _mod13651.Buf32(592);
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
        const state = strm.state;
        if (windowBits < 0) {
          let tmp8 = -windowBits;
          let num7 = 0;
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
          if (tmp9) {
            state.window = null;
          }
          state.wrap = num7;
          state.wbits = tmp8;
          let num10 = inflateReset(strm);
          tmp9 = null !== state.window && state.wbits !== tmp8;
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
    const buf8 = new _mod13651.Buf8(state.wsize);
    state.window = buf8;
  }
  if (length2 >= state.wsize) {
    const obj3 = _mod13651;
    obj3.arraySet(state.window, output3, length - state.wsize, state.wsize, 0);
    state.wnext = 0;
    state.whave = state.wsize;
  } else {
    let diff = state.wsize - state.wnext;
    if (diff > length2) {
      diff = length2;
    }
    const obj = _mod13651;
    obj.arraySet(state.window, output3, length - length2, diff, state.wnext);
    const diff1 = length2 - diff;
    if (diff1) {
      const tmp8Result = tmp8(13651);
      tmp8Result.arraySet(state.window, output3, length - diff1, diff1, 0);
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
    tmp8 = require;
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
      state = state.state;
      if (arg1 < 0) {
        let tmp3 = -arg1;
        let num6 = 0;
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
        if (tmp5) {
          state.window = null;
        }
        state.wrap = num6;
        state.wbits = tmp3;
        let num9 = inflateReset(state);
        tmp5 = null !== state.window && state.wbits !== tmp3;
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
      buf32 = new _mod13651.Buf32(852);
      state.lendyn = buf32;
      state.lencode = buf32;
      buf321 = new _mod13651.Buf32(592);
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
export const inflate = function inflate(state, arg1) {
  let mode;
  const buf8 = new _mod13651.Buf8(4);
  const items = [16, 17, 18, 0, 8, 7, 9, 6, 10, 5, 11, 4, 12, 3, 13, 2, 14, 1, 15];
  if (state) {
    if (state.state) {
      if (state.output) {
        state = state.state;
        if (state.mode === 12) {
          state.mode = 13;
        }
        ({ next_out, output, avail_out, next_in, input, avail_in } = state);
        ({ hold, bits } = state);
        let num56 = 0;
        let diff11 = avail_out;
        let diff45 = avail_in;
        while (true) {
          mode = state.mode;
          let tmp8 = avail_out;
          let tmp9 = bits;
          let tmp10 = hold;
          let tmp11 = diff11;
          let tmp12 = diff45;
          let tmp13 = next_out;
          let tmp14 = next_in;
          let tmp15 = output;
          let tmp16 = input;
          if (1 === mode) {
            if (0 === state.wrap) {
              state.mode = 13;
              continue;
            } else {
              let sum3 = bits;
              let sum2 = hold;
              let diff = diff45;
              let sum1 = next_in;
              let tmp682 = bits;
              let tmp683 = hold;
              let tmp684 = diff45;
              let tmp685 = next_in;
              if (bits >= 16) {
                if (2 & state.wrap) {
                  if (35615 === tmp683) {
                    state.check = 0;
                    buf8[0] = 255 & tmp683;
                    buf8[1] = tmp683 >>> 8 & 255;
                    let check10 = state.check;
                    state.check = _mod13658(check10, tmp2, 2, 0);
                    state.mode = 2;
                    bits = 0;
                    hold = 0;
                    diff45 = tmp684;
                    next_in = tmp685;
                    continue;
                  }
                }
                state.flags = 0;
                if (state.head) {
                  state.head.done = false;
                }
                if (1 & state.wrap) {
                  if (!((((255 & tmp683) << 8) + (tmp683 >> 8)) % 31)) {
                    if (8 !== (15 & tmp683)) {
                      state.msg = "unknown compression method";
                      state.mode = 30;
                      bits = tmp682;
                      hold = tmp683;
                      diff45 = tmp684;
                      next_in = tmp685;
                      continue;
                    } else {
                      let tmp688 = tmp683 >>> 4;
                      let sum = 8 + (15 & tmp688);
                      if (0 === state.wbits) {
                        state.wbits = sum;
                      } else {
                        if (sum > state.wbits) {
                          state.msg = "invalid window size";
                          state.mode = 30;
                          bits = tmp687;
                          hold = tmp688;
                          diff45 = tmp684;
                          next_in = tmp685;
                          continue;
                        }
                        continue;
                      }
                      state.dmax = 1 << sum;
                      state.check = 1;
                      state.adler = 1;
                      let num109 = 10;
                      if (!(512 & tmp688)) {
                        num109 = 12;
                      }
                      state.mode = num109;
                      bits = 0;
                      hold = 0;
                      diff45 = tmp684;
                      next_in = tmp685;
                      continue;
                    }
                    continue;
                  }
                  continue;
                }
                state.msg = "incorrect header check";
                state.mode = 30;
                bits = tmp682;
                hold = tmp683;
                diff45 = tmp684;
                next_in = tmp685;
                continue;
              } else {
                let num61 = num56;
                let tmp37 = avail_out;
                let num62 = sum3;
                let num63 = sum2;
                let tmp38 = sum1;
                let tmp39 = diff;
                while (0 !== diff) {
                  diff = diff - 1;
                  let tmp686 = +sum1;
                  sum1 = tmp686 + 1;
                  sum2 = sum2 + (input[tmp686] << sum3);
                  sum3 = sum3 + 8;
                  tmp683 = sum2;
                  tmp684 = diff;
                  tmp685 = sum1;
                  tmp682 = sum3;
                  continue;
                }
              }
            }
          } else {
            if (2 === mode) {
              let sum6 = bits;
              let sum5 = hold;
              let diff1 = diff45;
              let sum4 = next_in;
              let tmp427 = bits;
              let tmp428 = hold;
              let tmp429 = diff45;
              let tmp430 = next_in;
              if (bits >= 16) {
                state.flags = tmp428;
                if (8 !== (255 & state.flags)) {
                  state.msg = "unknown compression method";
                  state.mode = 30;
                  bits = tmp427;
                  hold = tmp428;
                  diff45 = tmp429;
                  next_in = tmp430;
                  continue;
                } else if (57344 & state.flags) {
                  state.msg = "unknown header flags set";
                  state.mode = 30;
                  bits = tmp427;
                  hold = tmp428;
                  diff45 = tmp429;
                  next_in = tmp430;
                  continue;
                } else {
                  if (state.head) {
                    state.head.text = tmp428 >> 8 & 1;
                  }
                  if (512 & state.flags) {
                    buf8[0] = 255 & tmp428;
                    buf8[1] = tmp428 >>> 8 & 255;
                    let check3 = state.check;
                    state.check = _mod13658(check3, tmp2, 2, 0);
                  }
                  state.mode = 3;
                  let num91 = 0;
                  let num92 = 0;
                  let tmp439 = tmp429;
                  let tmp440 = tmp430;
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
                  let tmp673 = +sum4;
                  sum4 = tmp673 + 1;
                  sum5 = sum5 + (input[tmp673] << sum6);
                  sum6 = sum6 + 8;
                  tmp428 = sum5;
                  tmp429 = diff1;
                  tmp430 = sum4;
                  tmp427 = sum6;
                  continue;
                }
              }
            } else {
              num91 = bits;
              num92 = hold;
              tmp439 = diff45;
              tmp440 = next_in;
              if (3 !== mode) {
                let num95 = bits;
                let num96 = hold;
                let tmp455 = diff45;
                let tmp456 = next_in;
                if (4 !== mode) {
                  let num99 = bits;
                  let num100 = hold;
                  let tmp471 = diff45;
                  let tmp472 = next_in;
                  if (5 !== mode) {
                    let tmp592 = next_in;
                    if (6 === mode) {
                      let tmp490 = tmp12;
                      let tmp491 = tmp14;
                      if (!(1024 & state.flags)) {
                        state.length = 0;
                        state.mode = 7;
                        let tmp515 = tmp490;
                        let tmp516 = tmp491;
                        let tmp517 = tmp9;
                        let tmp518 = tmp10;
                      } else {
                        let length4 = state.length;
                        if (length4 > tmp12) {
                          length4 = tmp12;
                        }
                        let diff3 = tmp12;
                        let sum7 = tmp14;
                        if (length4) {
                          if (state.head) {
                            let diff2 = state.head.extra_len - state.length;
                            if (!state.head.extra) {
                              let _Array = Array;
                              let extra_len = state.head.extra_len;
                              let tmp496 = new.target;
                              let tmp497 = new.target;
                              let array = new Array(extra_len);
                              state.head.extra = array;
                            }
                            let obj3 = _mod13651;
                            let extra3 = state.head.extra;
                            let arraySetResult = obj3.arraySet(extra3, tmp16, tmp592, length4, diff2);
                          }
                          if (512 & state.flags) {
                            let check7 = state.check;
                            state.check = _mod13658(check7, tmp16, length4, tmp592);
                          }
                          diff3 = tmp12 - length4;
                          sum7 = tmp14 + length4;
                          state.length = state.length - length4;
                        }
                        tmp490 = diff3;
                        tmp491 = sum7;
                        num61 = num56;
                        tmp37 = avail_out;
                        num62 = tmp9;
                        num63 = tmp10;
                        tmp39 = diff3;
                        tmp38 = sum7;
                      }
                    } else {
                      tmp517 = bits;
                      tmp518 = hold;
                      tmp515 = diff45;
                      tmp516 = next_in;
                      if (7 !== mode) {
                        if (8 === mode) {
                          if (4096 & state.flags) {
                            let num106 = 0;
                            num61 = num56;
                            tmp37 = avail_out;
                            num62 = tmp9;
                            num63 = tmp10;
                            tmp38 = tmp14;
                            tmp39 = tmp12;
                            if (0 !== tmp12) {
                              while (true) {
                                let tmp536 = input[tmp14 + num106];
                                let head3 = state.head;
                                if (head3) {
                                  head3 = tmp536;
                                }
                                if (head3) {
                                  head3 = state.length < 65536;
                                }
                                if (head3) {
                                  let head4 = state.head;
                                  let _String2 = String;
                                  head4.comment = head4.comment + String.fromCharCode(tmp536);
                                }
                                let sum8 = num106 + 1;
                                if (!tmp536) {
                                  break;
                                } else {
                                  num106 = sum8;
                                  if (sum8 >= tmp12) {
                                    break;
                                  }
                                }
                              }
                              if (512 & state.flags) {
                                let check9 = state.check;
                                state.check = _mod13658(check9, tmp16, sum8, tmp596);
                              }
                              let diff4 = tmp12 - sum8;
                              let sum9 = tmp14 + sum8;
                              num61 = num56;
                              tmp37 = avail_out;
                              num62 = tmp9;
                              num63 = tmp10;
                              tmp39 = diff4;
                              tmp38 = sum9;
                            }
                          } else {
                            diff4 = tmp12;
                            sum9 = tmp14;
                            if (state.head) {
                              state.head.comment = null;
                              diff4 = tmp12;
                              sum9 = tmp14;
                            }
                          }
                          state.mode = 9;
                        } else if (9 === mode) {
                          let num107 = tmp9;
                          let num108 = tmp10;
                          let tmp549 = tmp12;
                          let tmp550 = tmp14;
                          if (512 & state.flags) {
                            let sum12 = tmp9;
                            let sum11 = tmp10;
                            let diff5 = tmp12;
                            let sum10 = tmp14;
                            let tmp555 = tmp9;
                            let tmp556 = tmp10;
                            let tmp557 = tmp12;
                            let tmp558 = tmp14;
                            if (tmp9 >= 16) {
                              num107 = 0;
                              num108 = 0;
                              tmp549 = tmp557;
                              tmp550 = tmp558;
                              if (tmp556 !== (65535 & state.check)) {
                                state.msg = "header crc mismatch";
                                state.mode = 30;
                                bits = tmp555;
                                hold = tmp556;
                                diff45 = tmp557;
                                next_in = tmp558;
                                continue;
                              }
                            } else {
                              num61 = num56;
                              tmp37 = avail_out;
                              num62 = sum12;
                              num63 = sum11;
                              tmp38 = sum10;
                              tmp39 = diff5;
                              while (0 !== diff5) {
                                diff5 = diff5 - 1;
                                let tmp677 = +sum10;
                                sum10 = tmp677 + 1;
                                sum11 = sum11 + (input[tmp677] << sum12);
                                sum12 = sum12 + 8;
                                tmp556 = sum11;
                                tmp557 = diff5;
                                tmp558 = sum10;
                                tmp555 = sum12;
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
                          diff45 = tmp549;
                          next_in = tmp550;
                          continue;
                        } else {
                          if (10 === mode) {
                            let sum16 = bits;
                            let sum15 = hold;
                            let diff6 = diff45;
                            let sum14 = next_in;
                            let tmp366 = hold;
                            let tmp367 = diff45;
                            let tmp368 = next_in;
                            if (bits >= 32) {
                              let sum13 = (tmp366 >>> 24 & 255) + (tmp366 >>> 8 & 65280) + ((65280 & tmp366) << 8) + ((255 & tmp366) << 24);
                              state.check = sum13;
                              state.adler = sum13;
                              state.mode = 11;
                              let tmp374 = tmp367;
                              let tmp375 = tmp368;
                              let num75 = 0;
                              let num76 = 0;
                            } else {
                              num61 = num56;
                              tmp37 = avail_out;
                              num62 = sum16;
                              num63 = sum15;
                              tmp38 = sum14;
                              tmp39 = diff6;
                              while (0 !== diff6) {
                                diff6 = diff6 - 1;
                                let tmp671 = +sum14;
                                sum14 = tmp671 + 1;
                                sum15 = sum15 + (input[tmp671] << sum16);
                                sum16 = sum16 + 8;
                                tmp366 = sum15;
                                tmp367 = diff6;
                                tmp368 = sum14;
                                break;
                              }
                            }
                          } else {
                            num75 = bits;
                            num76 = hold;
                            tmp374 = diff45;
                            tmp375 = next_in;
                            if (11 !== mode) {
                              let tmp601 = bits;
                              let tmp602 = hold;
                              let tmp603 = diff45;
                              let tmp604 = next_in;
                              if (12 !== mode) {
                                let tmp605 = bits;
                                let tmp606 = hold;
                                let tmp607 = diff45;
                                let tmp608 = next_in;
                                if (13 !== mode) {
                                  if (14 === mode) {
                                    let sum18 = hold >>> (7 & bits);
                                    let diff7 = bits - (7 & bits);
                                    let diff8 = diff45;
                                    let sum17 = next_in;
                                    let tmp349 = sum18;
                                    let tmp350 = diff45;
                                    let tmp351 = next_in;
                                    let tmp352 = diff7;
                                    if (diff7 >= 32) {
                                      let tmp357 = 65535 & tmp349;
                                      if (tmp357 !== (tmp349 >>> 16 ^ 65535)) {
                                        state.msg = "invalid stored block lengths";
                                        state.mode = 30;
                                        bits = tmp352;
                                        hold = tmp349;
                                        diff45 = tmp350;
                                        next_in = tmp351;
                                        continue;
                                      } else {
                                        state.length = tmp357;
                                        state.mode = 15;
                                        let num117 = 0;
                                        let num118 = 0;
                                        let tmp609 = tmp350;
                                        let tmp610 = tmp351;
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
                                      num62 = diff7;
                                      num63 = sum18;
                                      tmp38 = sum17;
                                      tmp39 = diff8;
                                      while (0 !== diff8) {
                                        diff8 = diff8 - 1;
                                        let tmp661 = +sum17;
                                        sum17 = tmp661 + 1;
                                        sum18 = sum18 + (input[tmp661] << diff7);
                                        diff7 = diff7 + 8;
                                        tmp349 = sum18;
                                        tmp350 = diff8;
                                        tmp351 = sum17;
                                        tmp352 = diff7;
                                        break;
                                      }
                                    }
                                  } else {
                                    num117 = bits;
                                    num118 = hold;
                                    tmp609 = diff45;
                                    tmp610 = next_in;
                                    if (15 !== mode) {
                                      let tmp358 = bits;
                                      let tmp359 = hold;
                                      let tmp360 = diff45;
                                      let tmp361 = next_in;
                                      if (16 !== mode) {
                                        if (17 === mode) {
                                          let sum21 = bits;
                                          let sum20 = hold;
                                          let diff10 = diff45;
                                          let sum19 = next_in;
                                          let tmp74 = bits;
                                          let tmp75 = hold;
                                          let tmp76 = diff45;
                                          let tmp77 = next_in;
                                          if (bits >= 14) {
                                            state.nlen = 257 + (31 & tmp75);
                                            let tmp82 = tmp75 >>> 5;
                                            state.ndist = 1 + (31 & tmp82);
                                            let tmp83 = tmp82 >>> 5;
                                            state.ncode = 4 + (15 & tmp83);
                                            let tmp84 = tmp83 >>> 4;
                                            let diff9 = tmp74 - 5 - 5 - 4;
                                            if (state.nlen <= 286) {
                                              if (state.ndist <= 30) {
                                                state.have = 0;
                                                state.mode = 18;
                                                let tmp611 = diff9;
                                                let tmp612 = tmp84;
                                                let tmp613 = tmp76;
                                                let tmp614 = tmp77;
                                              }
                                            }
                                            state.msg = "too many length or distance symbols";
                                            state.mode = 30;
                                            bits = diff9;
                                            hold = tmp84;
                                            diff45 = tmp76;
                                            next_in = tmp77;
                                            continue;
                                          } else {
                                            num61 = num56;
                                            tmp37 = avail_out;
                                            num62 = sum21;
                                            num63 = sum20;
                                            tmp38 = sum19;
                                            tmp39 = diff10;
                                            while (0 !== diff10) {
                                              diff10 = diff10 - 1;
                                              let tmp623 = +sum19;
                                              sum19 = tmp623 + 1;
                                              sum20 = sum20 + (input[tmp623] << sum21);
                                              sum21 = sum21 + 8;
                                              tmp75 = sum20;
                                              tmp76 = diff10;
                                              tmp77 = sum19;
                                              tmp74 = sum21;
                                              break;
                                            }
                                          }
                                        } else {
                                          tmp611 = bits;
                                          tmp612 = hold;
                                          tmp613 = diff45;
                                          tmp614 = next_in;
                                          if (18 !== mode) {
                                            let tmp113 = num56;
                                            let tmp114 = bits;
                                            let tmp115 = hold;
                                            let tmp116 = diff45;
                                            let tmp117 = next_in;
                                            if (19 !== mode) {
                                              let tmp192 = num56;
                                              let tmp193 = bits;
                                              let tmp194 = hold;
                                              let tmp195 = diff45;
                                              let tmp196 = next_in;
                                              if (20 !== mode) {
                                                let tmp197 = num56;
                                                let tmp198 = bits;
                                                let tmp199 = hold;
                                                let tmp200 = diff45;
                                                let tmp201 = next_in;
                                                if (21 !== mode) {
                                                  let tmp244 = num56;
                                                  let tmp245 = bits;
                                                  let tmp246 = hold;
                                                  let tmp247 = diff45;
                                                  let tmp248 = next_in;
                                                  if (22 !== mode) {
                                                    let tmp269 = num56;
                                                    let tmp265 = bits;
                                                    let tmp266 = hold;
                                                    let tmp267 = diff45;
                                                    let tmp268 = next_in;
                                                    if (23 !== mode) {
                                                      let tmp312 = num56;
                                                      let tmp313 = bits;
                                                      let tmp314 = hold;
                                                      let tmp315 = diff45;
                                                      let tmp316 = next_in;
                                                      if (24 !== mode) {
                                                        let tmp615 = num56;
                                                        let tmp616 = bits;
                                                        let tmp617 = hold;
                                                        let tmp618 = diff45;
                                                        let tmp619 = next_in;
                                                        if (25 !== mode) {
                                                          if (26 === mode) {
                                                            num61 = num56;
                                                            tmp37 = avail_out;
                                                            num62 = bits;
                                                            num63 = hold;
                                                            tmp39 = diff45;
                                                            tmp38 = next_in;
                                                            if (0 !== diff11) {
                                                              let tmp622 = +next_out;
                                                              next_out = tmp622 + 1;
                                                              output[tmp622] = state.length;
                                                              diff11 = diff11 - 1;
                                                              state.mode = 21;
                                                              continue;
                                                            }
                                                          } else {
                                                            if (27 === mode) {
                                                              let tmp22 = avail_out;
                                                              let num59 = bits;
                                                              let num60 = hold;
                                                              let tmp23 = diff45;
                                                              let tmp24 = next_in;
                                                              if (!state.wrap) {
                                                                state.mode = 28;
                                                                let tmp17 = tmp22;
                                                                let tmp18 = num59;
                                                                let tmp19 = num60;
                                                                let tmp20 = tmp23;
                                                                let tmp21 = tmp24;
                                                              } else {
                                                                let sum24 = bits;
                                                                let tmp26 = hold;
                                                                let diff13 = diff45;
                                                                let sum23 = next_in;
                                                                let tmp29 = bits;
                                                                let tmp30 = hold;
                                                                let tmp31 = diff45;
                                                                let tmp32 = next_in;
                                                                if (bits >= 32) {
                                                                  let diff12 = avail_out - diff11;
                                                                  state.total_out = state.total_out + diff12;
                                                                  state.total = state.total + diff12;
                                                                  if (!diff12) {
                                                                    let sum22 = tmp30;
                                                                    if (!state.flags) {
                                                                      sum22 = (tmp30 >>> 24 & 255) + (tmp30 >>> 8 & 65280) + ((65280 & tmp30) << 8) + ((255 & tmp30) << 24);
                                                                    }
                                                                    tmp22 = diff11;
                                                                    num59 = 0;
                                                                    num60 = 0;
                                                                    tmp23 = tmp31;
                                                                    tmp24 = tmp32;
                                                                    if (sum22 !== state.check) {
                                                                      state.msg = "incorrect data check";
                                                                      state.mode = 30;
                                                                      avail_out = diff11;
                                                                      bits = tmp29;
                                                                      hold = tmp30;
                                                                      diff45 = tmp31;
                                                                      next_in = tmp32;
                                                                      continue;
                                                                    }
                                                                  } else {
                                                                    let tmp41 = require;
                                                                    let tmp42 = dependencyMap;
                                                                    if (state.flags) {
                                                                      tmp42 = 13658;
                                                                      let check2 = state.check;
                                                                      let tmp46 = tmp41(tmp42)(check2, tmp15, diff12, next_out - diff12);
                                                                    } else {
                                                                      let check = state.check;
                                                                      tmp46 = tmp41(13657)(check, tmp15, diff12, next_out - diff12);
                                                                    }
                                                                    state.check = tmp46;
                                                                    state.adler = tmp46;
                                                                  }
                                                                } else {
                                                                  num61 = num56;
                                                                  tmp37 = avail_out;
                                                                  num62 = sum24;
                                                                  num63 = tmp26;
                                                                  tmp38 = sum23;
                                                                  tmp39 = diff13;
                                                                  while (0 !== diff13) {
                                                                    diff13 = diff13 - 1;
                                                                    let tmp620 = +sum23;
                                                                    sum23 = tmp620 + 1;
                                                                    tmp26 = tmp26 | input[tmp620] << sum24;
                                                                    sum24 = sum24 + 8;
                                                                    tmp30 = tmp26;
                                                                    tmp31 = diff13;
                                                                    tmp32 = sum23;
                                                                    tmp29 = sum24;
                                                                    break;
                                                                  }
                                                                }
                                                              }
                                                            } else {
                                                              tmp17 = avail_out;
                                                              tmp18 = bits;
                                                              tmp19 = hold;
                                                              tmp20 = diff45;
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
                                                                let sum27 = tmp18;
                                                                let sum26 = tmp19;
                                                                let diff14 = tmp20;
                                                                let sum25 = tmp21;
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
                                                                    diff45 = tmp59;
                                                                    next_in = tmp60;
                                                                    continue;
                                                                  }
                                                                } else {
                                                                  num61 = num56;
                                                                  tmp37 = tmp17;
                                                                  num62 = sum27;
                                                                  num63 = sum26;
                                                                  tmp38 = sum25;
                                                                  tmp39 = diff14;
                                                                  while (0 !== diff14) {
                                                                    diff14 = diff14 - 1;
                                                                    let tmp621 = +sum25;
                                                                    sum25 = tmp621 + 1;
                                                                    sum26 = sum26 + (input[tmp621] << sum27);
                                                                    sum27 = sum27 + 8;
                                                                    tmp58 = sum26;
                                                                    tmp59 = diff14;
                                                                    tmp60 = sum25;
                                                                    tmp57 = sum27;
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
                                                      num61 = tmp615;
                                                      tmp37 = avail_out;
                                                      num62 = tmp616;
                                                      num63 = tmp617;
                                                      tmp39 = tmp618;
                                                      tmp38 = tmp619;
                                                      if (0 !== diff11) {
                                                        let diff15 = avail_out - diff11;
                                                        if (state.offset > diff15) {
                                                          let diff16 = state.offset - diff15;
                                                          if (diff16 > state.whave) {
                                                            if (state.sane) {
                                                              state.msg = "invalid distance too far back";
                                                              state.mode = 30;
                                                              num56 = tmp615;
                                                              bits = tmp616;
                                                              hold = tmp617;
                                                              diff45 = tmp618;
                                                              next_in = tmp619;
                                                              continue;
                                                            }
                                                          }
                                                          if (diff16 > state.wnext) {
                                                            let diff17 = diff16 - state.wnext;
                                                            let diff18 = state.wsize - diff17;
                                                            let length2 = diff17;
                                                          } else {
                                                            diff18 = state.wnext - diff16;
                                                            length2 = diff16;
                                                          }
                                                          if (length2 > state.length) {
                                                            length2 = state.length;
                                                          }
                                                          let _window = state.window;
                                                          let length = length2;
                                                          let diff19 = diff18;
                                                        } else {
                                                          diff19 = next_out - state.offset;
                                                          length = state.length;
                                                          _window = output;
                                                        }
                                                        if (length > diff11) {
                                                          length = diff11;
                                                        }
                                                        let diff20 = diff11 - length;
                                                        state.length = state.length - length;
                                                        let tmp338 = next_out;
                                                        do {
                                                          let tmp339 = +tmp338;
                                                          let sum28 = tmp339 + 1;
                                                          let tmp341 = +diff19;
                                                          diff19 = tmp341 + 1;
                                                          output[tmp339] = _window[tmp341];
                                                          length = length - 1;
                                                          tmp338 = sum28;
                                                        } while (length);
                                                        num56 = tmp615;
                                                        bits = tmp616;
                                                        hold = tmp617;
                                                        diff11 = diff20;
                                                        diff45 = tmp618;
                                                        next_out = sum28;
                                                        next_in = tmp619;
                                                        if (0 !== state.length) {
                                                          continue;
                                                        } else {
                                                          state.mode = 21;
                                                          num56 = tmp615;
                                                          avail_out = tmp8;
                                                          bits = tmp616;
                                                          hold = tmp617;
                                                          diff11 = diff20;
                                                          diff45 = tmp618;
                                                          next_out = sum28;
                                                          next_in = tmp619;
                                                          output = tmp15;
                                                          input = tmp16;
                                                          continue;
                                                        }
                                                        continue;
                                                      }
                                                    }
                                                    let diff21 = tmp313;
                                                    let tmp318 = tmp314;
                                                    let tmp319 = tmp315;
                                                    let tmp320 = tmp316;
                                                    if (state.extra) {
                                                      let extra2 = state.extra;
                                                      let sum31 = tmp313;
                                                      let sum30 = tmp314;
                                                      let diff22 = tmp315;
                                                      let sum29 = tmp316;
                                                      let tmp325 = tmp313;
                                                      let tmp326 = tmp314;
                                                      let tmp327 = tmp315;
                                                      let tmp328 = tmp316;
                                                      if (tmp313 >= extra2) {
                                                        state.offset = state.offset + (tmp326 & (1 << state.extra) - 1);
                                                        tmp318 = tmp326 >>> state.extra;
                                                        diff21 = tmp325 - state.extra;
                                                        state.back = state.back + state.extra;
                                                        tmp319 = tmp327;
                                                        tmp320 = tmp328;
                                                      } else {
                                                        num61 = tmp312;
                                                        tmp37 = avail_out;
                                                        num62 = sum31;
                                                        num63 = sum30;
                                                        tmp38 = sum29;
                                                        tmp39 = diff22;
                                                        while (0 !== diff22) {
                                                          diff22 = diff22 - 1;
                                                          let tmp659 = +sum29;
                                                          sum29 = tmp659 + 1;
                                                          sum30 = sum30 + (input[tmp659] << sum31);
                                                          sum31 = sum31 + 8;
                                                          tmp326 = sum30;
                                                          tmp327 = diff22;
                                                          tmp328 = sum29;
                                                          tmp325 = sum31;
                                                          break;
                                                        }
                                                      }
                                                    }
                                                    if (state.offset > state.dmax) {
                                                      state.msg = "invalid distance too far back";
                                                      state.mode = 30;
                                                      num56 = tmp312;
                                                      bits = diff21;
                                                      hold = tmp318;
                                                      diff45 = tmp319;
                                                      next_in = tmp320;
                                                      continue;
                                                    } else {
                                                      state.mode = 25;
                                                      tmp615 = tmp312;
                                                      tmp616 = diff21;
                                                      tmp617 = tmp318;
                                                      tmp618 = tmp319;
                                                      tmp619 = tmp320;
                                                    }
                                                  }
                                                  let tmp270 = state.distcode[tmp266 & (1 << state.distbits) - 1];
                                                  let tmp271 = tmp270 >>> 16 & 255;
                                                  let tmp272 = 65535 & tmp270;
                                                  let tmp273 = tmp270 >>> 24;
                                                  let sum37 = tmp265;
                                                  let tmp275 = tmp266;
                                                  let diff27 = tmp267;
                                                  let sum35 = tmp268;
                                                  let tmp278 = tmp266;
                                                  let tmp279 = tmp267;
                                                  let tmp280 = tmp268;
                                                  let tmp281 = tmp265;
                                                  if (tmp273 <= tmp265) {
                                                    let tmp286 = tmp272;
                                                    let tmp287 = tmp271;
                                                    let tmp288 = tmp273;
                                                    let diff24 = tmp281;
                                                    let tmp290 = tmp278;
                                                    let tmp291 = tmp279;
                                                    let tmp292 = tmp280;
                                                    if (!(240 & tmp271)) {
                                                      let diff23 = (1 << tmp273 + tmp271) - 1;
                                                      let tmp294 = state.distcode[tmp272 + ((tmp278 & diff23) >> tmp273)];
                                                      let tmp295 = tmp294 >>> 16 & 255;
                                                      let tmp296 = 65535 & tmp294;
                                                      let tmp297 = tmp294 >>> 24;
                                                      let sum34 = tmp281;
                                                      let tmp299 = tmp278;
                                                      let diff25 = tmp279;
                                                      let sum32 = tmp280;
                                                      let tmp302 = tmp281;
                                                      let tmp303 = tmp278;
                                                      let tmp304 = tmp279;
                                                      let tmp305 = tmp280;
                                                      if (tmp273 + tmp297 <= tmp281) {
                                                        tmp290 = tmp303 >>> tmp273;
                                                        diff24 = tmp302 - tmp273;
                                                        state.back = state.back + tmp273;
                                                        tmp286 = tmp296;
                                                        tmp287 = tmp295;
                                                        tmp288 = tmp297;
                                                        tmp291 = tmp304;
                                                        tmp292 = tmp305;
                                                      } else {
                                                        num61 = tmp269;
                                                        tmp37 = avail_out;
                                                        num62 = sum34;
                                                        num63 = tmp299;
                                                        tmp38 = sum32;
                                                        tmp39 = diff25;
                                                        while (0 !== diff25) {
                                                          diff25 = diff25 - 1;
                                                          let tmp655 = +sum32;
                                                          sum32 = tmp655 + 1;
                                                          let sum33 = tmp299 + (input[tmp655] << sum34);
                                                          sum34 = sum34 + 8;
                                                          let tmp657 = state.distcode[tmp272 + ((sum33 & diff23) >> tmp273)];
                                                          tmp295 = tmp657 >>> 16 & 255;
                                                          tmp296 = 65535 & tmp657;
                                                          let tmp658 = tmp657 >>> 24;
                                                          tmp299 = sum33;
                                                          tmp297 = tmp658;
                                                          tmp303 = sum33;
                                                          tmp304 = diff25;
                                                          tmp305 = sum32;
                                                          tmp302 = sum34;
                                                          break;
                                                        }
                                                      }
                                                    }
                                                    let tmp310 = tmp290 >>> tmp288;
                                                    let diff26 = diff24 - tmp288;
                                                    state.back = state.back + tmp288;
                                                    if (64 & tmp287) {
                                                      state.msg = "invalid distance code";
                                                      state.mode = 30;
                                                      num56 = tmp269;
                                                      bits = diff26;
                                                      hold = tmp310;
                                                      diff45 = tmp291;
                                                      next_in = tmp292;
                                                      continue;
                                                    } else {
                                                      state.offset = tmp286;
                                                      state.extra = 15 & tmp287;
                                                      state.mode = 24;
                                                      tmp312 = tmp269;
                                                      tmp313 = diff26;
                                                      tmp314 = tmp310;
                                                      tmp315 = tmp291;
                                                      tmp316 = tmp292;
                                                    }
                                                  } else {
                                                    num61 = tmp269;
                                                    tmp37 = avail_out;
                                                    num62 = sum37;
                                                    num63 = tmp275;
                                                    tmp38 = sum35;
                                                    tmp39 = diff27;
                                                    while (0 !== diff27) {
                                                      diff27 = diff27 - 1;
                                                      let tmp652 = +sum35;
                                                      sum35 = tmp652 + 1;
                                                      let sum36 = tmp275 + (input[tmp652] << sum37);
                                                      sum37 = sum37 + 8;
                                                      let tmp654 = state.distcode[sum36 & (1 << state.distbits) - 1];
                                                      tmp271 = tmp654 >>> 16 & 255;
                                                      tmp272 = 65535 & tmp654;
                                                      tmp273 = tmp654 >>> 24;
                                                      tmp275 = sum36;
                                                      tmp278 = sum36;
                                                      tmp279 = diff27;
                                                      tmp280 = sum35;
                                                      tmp281 = sum37;
                                                      break;
                                                    }
                                                  }
                                                }
                                                let diff28 = tmp245;
                                                let tmp250 = tmp246;
                                                let tmp251 = tmp247;
                                                let tmp252 = tmp248;
                                                if (state.extra) {
                                                  let extra = state.extra;
                                                  let sum40 = tmp245;
                                                  let sum39 = tmp246;
                                                  let diff29 = tmp247;
                                                  let sum38 = tmp248;
                                                  let tmp257 = tmp245;
                                                  let tmp258 = tmp246;
                                                  let tmp259 = tmp247;
                                                  let tmp260 = tmp248;
                                                  if (tmp245 >= extra) {
                                                    state.length = state.length + (tmp258 & (1 << state.extra) - 1);
                                                    tmp250 = tmp258 >>> state.extra;
                                                    diff28 = tmp257 - state.extra;
                                                    state.back = state.back + state.extra;
                                                    tmp251 = tmp259;
                                                    tmp252 = tmp260;
                                                  } else {
                                                    num61 = tmp244;
                                                    tmp37 = avail_out;
                                                    num62 = sum40;
                                                    num63 = sum39;
                                                    tmp38 = sum38;
                                                    tmp39 = diff29;
                                                    while (0 !== diff29) {
                                                      diff29 = diff29 - 1;
                                                      let tmp651 = +sum38;
                                                      sum38 = tmp651 + 1;
                                                      sum39 = sum39 + (input[tmp651] << sum40);
                                                      sum40 = sum40 + 8;
                                                      tmp258 = sum39;
                                                      tmp259 = diff29;
                                                      tmp260 = sum38;
                                                      tmp257 = sum40;
                                                      break;
                                                    }
                                                  }
                                                }
                                                state.was = state.length;
                                                state.mode = 23;
                                                tmp265 = diff28;
                                                tmp266 = tmp250;
                                                tmp267 = tmp251;
                                                tmp268 = tmp252;
                                                tmp269 = tmp244;
                                              }
                                              if (tmp200 >= 6) {
                                                if (diff11 >= 258) {
                                                  state.next_out = next_out;
                                                  state.avail_out = diff11;
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
                                                  diff11 = avail_out2;
                                                  diff45 = avail_in2;
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
                                                    diff11 = avail_out2;
                                                    diff45 = avail_in2;
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
                                              let sum46 = tmp198;
                                              let tmp207 = tmp199;
                                              let diff34 = tmp200;
                                              let sum44 = tmp201;
                                              let tmp210 = tmp199;
                                              let tmp211 = tmp200;
                                              let tmp212 = tmp201;
                                              let tmp213 = tmp198;
                                              if (tmp205 <= tmp198) {
                                                let tmp218 = tmp204;
                                                let tmp219 = tmp203;
                                                let tmp220 = tmp205;
                                                let diff31 = tmp213;
                                                let tmp222 = tmp210;
                                                let tmp223 = tmp211;
                                                let tmp224 = tmp212;
                                                if (tmp203) {
                                                  tmp218 = tmp204;
                                                  tmp219 = tmp203;
                                                  tmp220 = tmp205;
                                                  diff31 = tmp213;
                                                  tmp222 = tmp210;
                                                  tmp223 = tmp211;
                                                  tmp224 = tmp212;
                                                  if (!(240 & tmp203)) {
                                                    let diff30 = (1 << tmp205 + tmp203) - 1;
                                                    let tmp226 = state.lencode[tmp204 + ((tmp210 & diff30) >> tmp205)];
                                                    let tmp227 = tmp226 >>> 16 & 255;
                                                    let tmp228 = 65535 & tmp226;
                                                    let tmp229 = tmp226 >>> 24;
                                                    let sum43 = tmp213;
                                                    let tmp231 = tmp210;
                                                    let diff32 = tmp211;
                                                    let sum41 = tmp212;
                                                    let tmp234 = tmp213;
                                                    let tmp235 = tmp210;
                                                    let tmp236 = tmp211;
                                                    let tmp237 = tmp212;
                                                    if (tmp205 + tmp229 <= tmp213) {
                                                      tmp222 = tmp235 >>> tmp205;
                                                      diff31 = tmp234 - tmp205;
                                                      state.back = state.back + tmp205;
                                                      tmp218 = tmp228;
                                                      tmp219 = tmp227;
                                                      tmp220 = tmp229;
                                                      tmp223 = tmp236;
                                                      tmp224 = tmp237;
                                                    } else {
                                                      num61 = tmp197;
                                                      tmp37 = avail_out;
                                                      num62 = sum43;
                                                      num63 = tmp231;
                                                      tmp38 = sum41;
                                                      tmp39 = diff32;
                                                      while (0 !== diff32) {
                                                        diff32 = diff32 - 1;
                                                        let tmp647 = +sum41;
                                                        sum41 = tmp647 + 1;
                                                        let sum42 = tmp231 + (input[tmp647] << sum43);
                                                        sum43 = sum43 + 8;
                                                        let tmp649 = state.lencode[tmp204 + ((sum42 & diff30) >> tmp205)];
                                                        tmp227 = tmp649 >>> 16 & 255;
                                                        tmp228 = 65535 & tmp649;
                                                        let tmp650 = tmp649 >>> 24;
                                                        tmp231 = sum42;
                                                        tmp229 = tmp650;
                                                        tmp235 = sum42;
                                                        tmp236 = diff32;
                                                        tmp237 = sum41;
                                                        tmp234 = sum43;
                                                        break;
                                                      }
                                                    }
                                                  }
                                                }
                                                let tmp242 = tmp222 >>> tmp220;
                                                let diff33 = diff31 - tmp220;
                                                state.back = state.back + tmp220;
                                                state.length = tmp218;
                                                if (0 === tmp219) {
                                                  state.mode = 26;
                                                  num56 = tmp197;
                                                  bits = diff33;
                                                  hold = tmp242;
                                                  diff45 = tmp223;
                                                  next_in = tmp224;
                                                  continue;
                                                } else {
                                                  if (32 & tmp219) {
                                                    state.back = -1;
                                                    state.mode = 12;
                                                    num56 = tmp197;
                                                    bits = diff33;
                                                    hold = tmp242;
                                                    diff45 = tmp223;
                                                    next_in = tmp224;
                                                    continue;
                                                  } else if (64 & tmp219) {
                                                    state.msg = "invalid literal/length code";
                                                    state.mode = 30;
                                                    num56 = tmp197;
                                                    bits = diff33;
                                                    hold = tmp242;
                                                    diff45 = tmp223;
                                                    next_in = tmp224;
                                                    continue;
                                                  } else {
                                                    state.extra = 15 & tmp219;
                                                    state.mode = 22;
                                                    tmp244 = tmp197;
                                                    tmp245 = diff33;
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
                                                num62 = sum46;
                                                num63 = tmp207;
                                                tmp38 = sum44;
                                                tmp39 = diff34;
                                                while (0 !== diff34) {
                                                  diff34 = diff34 - 1;
                                                  let tmp644 = +sum44;
                                                  sum44 = tmp644 + 1;
                                                  let sum45 = tmp207 + (input[tmp644] << sum46);
                                                  sum46 = sum46 + 8;
                                                  let tmp646 = state.lencode[sum45 & (1 << state.lenbits) - 1];
                                                  tmp203 = tmp646 >>> 16 & 255;
                                                  tmp204 = 65535 & tmp646;
                                                  tmp205 = tmp646 >>> 24;
                                                  tmp207 = sum45;
                                                  tmp210 = sum45;
                                                  tmp211 = diff34;
                                                  tmp212 = sum44;
                                                  tmp213 = sum46;
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
                                            diff45 = tmp124;
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
                                                diff11 = tmp11;
                                                diff45 = tmp124;
                                                next_out = tmp13;
                                                next_in = tmp125;
                                                output = tmp15;
                                                input = tmp16;
                                                continue;
                                              } else {
                                                state.lenbits = 9;
                                                let obj = { bits: state.lenbits };
                                                let tmp639 = require;
                                                let lens5 = state.lens;
                                                let tmp643 = inflate_table(1, lens5, 0, state.nlen, state.lencode, 0, state.work, obj);
                                                state.lenbits = obj.bits;
                                                if (tmp643) {
                                                  state.msg = "invalid literal/lengths set";
                                                  state.mode = 30;
                                                  num56 = tmp643;
                                                  avail_out = tmp8;
                                                  bits = tmp122;
                                                  hold = tmp123;
                                                  diff11 = tmp11;
                                                  diff45 = tmp124;
                                                  next_out = tmp13;
                                                  next_in = tmp125;
                                                  output = tmp15;
                                                  input = tmp16;
                                                  continue;
                                                } else {
                                                  state.distbits = 6;
                                                  state.distcode = state.distdyn;
                                                  obj = { bits: null };
                                                  ({ distbits: obj2.bits, lens: lens2 } = state);
                                                  let tmp191 = tmp639(13662)(2, lens2, state.nlen, state.ndist, state.distcode, 0, state.work, obj);
                                                  state.distbits = obj.bits;
                                                  if (tmp191) {
                                                    state.msg = "invalid distances set";
                                                    state.mode = 30;
                                                    num56 = tmp191;
                                                    avail_out = tmp8;
                                                    bits = tmp122;
                                                    hold = tmp123;
                                                    diff11 = tmp11;
                                                    diff45 = tmp124;
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
                                              let sum62 = tmp118;
                                              let tmp131 = tmp119;
                                              let diff42 = tmp120;
                                              let sum60 = tmp121;
                                              let tmp134 = tmp119;
                                              let tmp135 = tmp120;
                                              let tmp136 = tmp121;
                                              let tmp137 = tmp118;
                                              if (tmp129 <= tmp118) {
                                                if (tmp128 < 16) {
                                                  let tmp183 = tmp134 >>> tmp129;
                                                  let diff35 = tmp137 - tmp129;
                                                  let tmp188 = +state.have;
                                                  state.have = tmp188 + 1;
                                                  state.lens[tmp188] = tmp128;
                                                  let tmp184 = tmp135;
                                                  let tmp185 = tmp136;
                                                  tmp118 = diff35;
                                                  tmp119 = tmp183;
                                                  tmp120 = tmp184;
                                                  tmp121 = tmp185;
                                                  tmp122 = diff35;
                                                  tmp123 = tmp183;
                                                  tmp124 = tmp184;
                                                  tmp125 = tmp185;
                                                } else {
                                                  if (16 === tmp128) {
                                                    let sum47 = tmp129 + 2;
                                                    let sum51 = tmp137;
                                                    let sum50 = tmp134;
                                                    let diff38 = tmp135;
                                                    let sum49 = tmp136;
                                                    let tmp171 = tmp134;
                                                    let tmp172 = tmp135;
                                                    let tmp173 = tmp136;
                                                    let tmp174 = tmp137;
                                                    if (tmp137 >= sum47) {
                                                      let tmp179 = tmp171 >>> tmp129;
                                                      let diff36 = tmp174 - tmp129;
                                                      if (0 === state.have) {
                                                        state.msg = "invalid bit length repeat";
                                                        state.mode = 30;
                                                        tmp122 = diff36;
                                                        tmp123 = tmp179;
                                                        tmp124 = tmp172;
                                                        tmp125 = tmp173;
                                                      } else {
                                                        let num72 = state.lens[state.have - 1];
                                                        let sum48 = 3 + (3 & tmp179);
                                                        let tmp148 = tmp179 >>> 2;
                                                        let diff37 = diff36 - 2;
                                                        let tmp164 = tmp172;
                                                        let tmp165 = tmp173;
                                                      }
                                                    } else {
                                                      num61 = tmp113;
                                                      tmp37 = avail_out;
                                                      num62 = sum51;
                                                      num63 = sum50;
                                                      tmp38 = sum49;
                                                      tmp39 = diff38;
                                                      while (0 !== diff38) {
                                                        diff38 = diff38 - 1;
                                                        let tmp638 = +sum49;
                                                        sum49 = tmp638 + 1;
                                                        sum50 = sum50 + (input[tmp638] << sum51);
                                                        sum51 = sum51 + 8;
                                                        tmp171 = sum50;
                                                        tmp172 = diff38;
                                                        tmp173 = sum49;
                                                        tmp174 = sum51;
                                                        break;
                                                      }
                                                    }
                                                    break;
                                                  } else if (17 === tmp128) {
                                                    let sum52 = tmp129 + 3;
                                                    let sum55 = tmp137;
                                                    let sum54 = tmp134;
                                                    let diff39 = tmp135;
                                                    let sum53 = tmp136;
                                                    let tmp155 = tmp137;
                                                    let tmp156 = tmp134;
                                                    let tmp157 = tmp135;
                                                    let tmp158 = tmp136;
                                                    if (tmp137 >= sum52) {
                                                      let tmp163 = tmp156 >>> tmp129;
                                                      sum48 = 3 + (7 & tmp163);
                                                      tmp148 = tmp163 >>> 3;
                                                      diff37 = tmp155 - tmp129 - 3;
                                                      tmp164 = tmp157;
                                                      tmp165 = tmp158;
                                                      num72 = 0;
                                                    } else {
                                                      num61 = tmp113;
                                                      tmp37 = avail_out;
                                                      num62 = sum55;
                                                      num63 = sum54;
                                                      tmp38 = sum53;
                                                      tmp39 = diff39;
                                                      while (0 !== diff39) {
                                                        diff39 = diff39 - 1;
                                                        let tmp637 = +sum53;
                                                        sum53 = tmp637 + 1;
                                                        sum54 = sum54 + (input[tmp637] << sum55);
                                                        sum55 = sum55 + 8;
                                                        tmp156 = sum54;
                                                        tmp157 = diff39;
                                                        tmp158 = sum53;
                                                        tmp155 = sum55;
                                                        break;
                                                      }
                                                    }
                                                    break;
                                                  } else {
                                                    let sum56 = tmp129 + 7;
                                                    let sum59 = tmp137;
                                                    let sum58 = tmp134;
                                                    let diff40 = tmp135;
                                                    let sum57 = tmp136;
                                                    let tmp634 = tmp137;
                                                    let tmp635 = tmp134;
                                                    tmp164 = tmp135;
                                                    tmp165 = tmp136;
                                                    if (tmp137 >= sum56) {
                                                      let tmp146 = tmp635 >>> tmp129;
                                                      sum48 = 11 + (127 & tmp146);
                                                      tmp148 = tmp146 >>> 7;
                                                      diff37 = tmp634 - tmp129 - 7;
                                                      num72 = 0;
                                                    } else {
                                                      num61 = tmp113;
                                                      tmp37 = avail_out;
                                                      num62 = sum59;
                                                      num63 = sum58;
                                                      tmp38 = sum57;
                                                      tmp39 = diff40;
                                                      while (0 !== diff40) {
                                                        diff40 = diff40 - 1;
                                                        let tmp636 = +sum57;
                                                        sum57 = tmp636 + 1;
                                                        sum58 = sum58 + (input[tmp636] << sum59);
                                                        sum59 = sum59 + 8;
                                                        tmp635 = sum58;
                                                        tmp164 = diff40;
                                                        tmp165 = sum57;
                                                        tmp634 = sum59;
                                                        break;
                                                      }
                                                    }
                                                    break;
                                                  }
                                                  if (state.have + sum48 > state.nlen + state.ndist) {
                                                    state.msg = "invalid bit length repeat";
                                                    state.mode = 30;
                                                    tmp122 = diff37;
                                                    tmp123 = tmp148;
                                                    tmp124 = tmp164;
                                                    tmp125 = tmp165;
                                                  } else {
                                                    let diff41 = sum48 - 1;
                                                    diff35 = diff37;
                                                    tmp183 = tmp148;
                                                    tmp184 = tmp164;
                                                    tmp185 = tmp165;
                                                    if (sum48) {
                                                      do {
                                                        let tmp186 = +state.have;
                                                        state.have = tmp186 + 1;
                                                        state.lens[tmp186] = num72;
                                                        tmp187 = diff41;
                                                        diff41 = diff41 - 1;
                                                        diff35 = diff37;
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
                                                num62 = sum62;
                                                num63 = tmp131;
                                                tmp38 = sum60;
                                                tmp39 = diff42;
                                                while (0 !== diff42) {
                                                  diff42 = diff42 - 1;
                                                  let tmp625 = +sum60;
                                                  sum60 = tmp625 + 1;
                                                  let sum61 = tmp131 + (input[tmp625] << sum62);
                                                  sum62 = sum62 + 8;
                                                  let tmp627 = state.lencode[sum61 & (1 << state.lenbits) - 1];
                                                  let tmp628 = tmp627 >>> 16;
                                                  tmp128 = 65535 & tmp627;
                                                  tmp129 = tmp627 >>> 24;
                                                  tmp131 = sum61;
                                                  tmp134 = sum61;
                                                  tmp135 = diff42;
                                                  tmp136 = sum60;
                                                  tmp137 = sum62;
                                                  continue;
                                                }
                                              }
                                              break;
                                            }
                                          }
                                        }
                                        let diff43 = tmp611;
                                        let tmp87 = tmp612;
                                        let tmp88 = tmp613;
                                        let tmp89 = tmp614;
                                        let tmp90 = tmp611;
                                        let tmp91 = tmp612;
                                        let tmp92 = tmp613;
                                        let tmp93 = tmp614;
                                        if (state.have < state.ncode) {
                                          while (true) {
                                            let sum65 = diff43;
                                            let sum64 = tmp87;
                                            let diff44 = tmp88;
                                            let sum63 = tmp89;
                                            let tmp98 = tmp87;
                                            let tmp99 = tmp88;
                                            let tmp100 = tmp89;
                                            let tmp101 = diff43;
                                            if (diff43 >= 3) {
                                              let tmp106 = +state.have;
                                              state.have = tmp106 + 1;
                                              state.lens[items[tmp106]] = 7 & tmp98;
                                              tmp87 = tmp98 >>> 3;
                                              diff43 = tmp101 - 3;
                                              tmp88 = tmp99;
                                              tmp89 = tmp100;
                                              tmp90 = diff43;
                                              tmp91 = tmp87;
                                              tmp92 = tmp99;
                                              tmp93 = tmp100;
                                              break;
                                            } else {
                                              num61 = num56;
                                              tmp37 = avail_out;
                                              num62 = sum65;
                                              num63 = sum64;
                                              tmp38 = sum63;
                                              tmp39 = diff44;
                                              while (0 !== diff44) {
                                                diff44 = diff44 - 1;
                                                let tmp624 = +sum63;
                                                sum63 = tmp624 + 1;
                                                sum64 = sum64 + (input[tmp624] << sum65);
                                                sum65 = sum65 + 8;
                                                tmp98 = sum64;
                                                tmp99 = diff44;
                                                tmp100 = sum63;
                                                tmp101 = sum65;
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
                                        obj = { bits: state.lenbits };
                                        let lens = state.lens;
                                        let tmp112 = inflate_table(0, lens, 0, 19, state.lencode, 0, state.work, obj);
                                        state.lenbits = obj.bits;
                                        if (tmp112) {
                                          state.msg = "invalid code lengths set";
                                          state.mode = 30;
                                          num56 = tmp112;
                                          bits = tmp90;
                                          hold = tmp91;
                                          diff45 = tmp92;
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
                                      if (length3 > diff11) {
                                        length3 = diff11;
                                      }
                                      num61 = num56;
                                      tmp37 = avail_out;
                                      num62 = tmp358;
                                      num63 = tmp359;
                                      tmp39 = tmp360;
                                      tmp38 = tmp361;
                                      if (0 !== length3) {
                                        let obj5 = _mod13651;
                                        arraySetResult = obj5.arraySet(tmp15, tmp16, tmp361, length3, tmp13);
                                        diff45 = tmp360 - length3;
                                        next_in = tmp361 + length3;
                                        diff11 = diff11 - length3;
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
                                      diff45 = tmp360;
                                      next_in = tmp361;
                                      continue;
                                    }
                                    continue;
                                  }
                                  state.mode = 16;
                                  tmp358 = num117;
                                  tmp359 = num118;
                                  tmp360 = tmp609;
                                  tmp361 = tmp610;
                                }
                              }
                              if (state.last) {
                                hold = tmp606 >>> (7 & tmp605);
                                bits = tmp605 - (7 & tmp605);
                                state.mode = 27;
                                diff45 = tmp607;
                                next_in = tmp608;
                                continue;
                              } else {
                                let sum73 = tmp605;
                                let sum72 = tmp606;
                                let diff47 = tmp607;
                                let sum71 = tmp608;
                                let tmp380 = tmp606;
                                let tmp381 = tmp607;
                                let tmp382 = tmp608;
                                let tmp383 = tmp605;
                                if (tmp605 >= 3) {
                                  state.last = 1 & tmp380;
                                  let diff46 = tmp383 - 1;
                                  let tmp389 = tmp380 >>> 1;
                                  let tmp390 = 3 & tmp389;
                                  if (0 === tmp390) {
                                    state.mode = 14;
                                  } else if (1 === tmp390) {
                                    if (c7) {
                                      let tmp394 = new.target;
                                      let tmp395 = new.target;
                                      buf32 = new _mod13651.Buf32(512);
                                      let tmp398 = new.target;
                                      let tmp399 = new.target;
                                      buf321 = new _mod13651.Buf32(32);
                                      let num79 = 0;
                                      do {
                                        sum66 = num79 + 1;
                                        state.lens[num79] = 8;
                                        num79 = sum66;
                                      } while (sum66 < 144);
                                      let tmp403 = sum66;
                                      let tmp404 = sum66;
                                      if (sum66 < 256) {
                                        do {
                                          sum67 = tmp403 + 1;
                                          state.lens[tmp403] = 9;
                                          tmp403 = sum67;
                                          tmp404 = sum67;
                                        } while (sum67 < 256);
                                      }
                                      let tmp406 = tmp404;
                                      let tmp407 = tmp404;
                                      if (tmp404 < 280) {
                                        do {
                                          sum68 = tmp406 + 1;
                                          state.lens[tmp406] = 7;
                                          tmp406 = sum68;
                                          tmp407 = sum68;
                                        } while (sum68 < 280);
                                      }
                                      if (tmp407 < 288) {
                                        do {
                                          sum69 = tmp407 + 1;
                                          state.lens[tmp407] = 8;
                                          tmp407 = sum69;
                                        } while (sum69 < 288);
                                      }
                                      let lens3 = state.lens;
                                      let tmp414 = inflate_table(1, lens3, 0, 288, buf32, 0, state.work, { bits: 9 });
                                      let num84 = 0;
                                      do {
                                        sum70 = num84 + 1;
                                        state.lens[num84] = 5;
                                        num84 = sum70;
                                      } while (sum70 < 32);
                                      let lens4 = state.lens;
                                      let tmp420 = inflate_table(2, lens4, 0, 32, buf321, 0, state.work, { bits: 5 });
                                      c7 = false;
                                    }
                                    state.lencode = buf32;
                                    state.lenbits = 9;
                                    state.distcode = buf321;
                                    state.distbits = 5;
                                    state.mode = 20;
                                    if (6 === arg1) {
                                      num63 = tmp389 >>> 2;
                                      num62 = diff46 - 2;
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
                                  bits = diff46 - 2;
                                  diff45 = tmp381;
                                  next_in = tmp382;
                                  continue;
                                } else {
                                  num61 = num56;
                                  tmp37 = avail_out;
                                  num62 = sum73;
                                  num63 = sum72;
                                  tmp38 = sum71;
                                  tmp39 = diff47;
                                  while (0 !== diff47) {
                                    diff47 = diff47 - 1;
                                    let tmp672 = +sum71;
                                    sum71 = tmp672 + 1;
                                    sum72 = sum72 + (input[tmp672] << sum73);
                                    sum73 = sum73 + 8;
                                    tmp380 = sum72;
                                    tmp381 = diff47;
                                    tmp382 = sum71;
                                    tmp383 = sum73;
                                    break;
                                  }
                                }
                              }
                            }
                            num61 = num56;
                            tmp37 = avail_out;
                            num62 = tmp601;
                            num63 = tmp602;
                            tmp39 = tmp603;
                            tmp38 = tmp604;
                            if (5 !== arg1) {
                              tmp605 = tmp601;
                              tmp606 = tmp602;
                              tmp607 = tmp603;
                              tmp608 = tmp604;
                              num61 = num56;
                              tmp37 = avail_out;
                              num62 = tmp601;
                              num63 = tmp602;
                              tmp39 = tmp603;
                              tmp38 = tmp604;
                            }
                          }
                          if (0 === state.havedict) {
                            state.next_out = next_out;
                            state.avail_out = diff11;
                            state.next_in = tmp375;
                            state.avail_in = tmp374;
                            state.hold = num76;
                            state.bits = num75;
                            return 2;
                          } else {
                            state.check = 1;
                            state.adler = 1;
                            state.mode = 12;
                            tmp601 = num75;
                            tmp602 = num76;
                            tmp603 = tmp374;
                            tmp604 = tmp375;
                          }
                        }
                      }
                    }
                    if (2048 & state.flags) {
                      let num105 = 0;
                      num61 = num56;
                      tmp37 = avail_out;
                      num62 = tmp517;
                      num63 = tmp518;
                      tmp38 = tmp516;
                      tmp39 = tmp515;
                      if (0 !== tmp515) {
                        while (true) {
                          let tmp521 = input[tmp516 + num105];
                          let head = state.head;
                          if (head) {
                            head = tmp521;
                          }
                          if (head) {
                            head = state.length < 65536;
                          }
                          if (head) {
                            let head2 = state.head;
                            let _String = String;
                            head2.name = head2.name + String.fromCharCode(tmp521);
                          }
                          let sum74 = num105 + 1;
                          if (!tmp521) {
                            break;
                          } else {
                            num105 = sum74;
                            if (sum74 >= tmp515) {
                              break;
                            }
                          }
                        }
                        if (512 & state.flags) {
                          let check8 = state.check;
                          state.check = _mod13658(check8, tmp16, sum74, tmp516);
                        }
                        let diff48 = tmp515 - sum74;
                        let sum75 = tmp516 + sum74;
                        num61 = num56;
                        tmp37 = avail_out;
                        num62 = tmp517;
                        num63 = tmp518;
                        tmp39 = diff48;
                        tmp38 = sum75;
                      }
                    } else {
                      diff48 = tmp515;
                      sum75 = tmp516;
                      if (state.head) {
                        state.head.name = null;
                        diff48 = tmp515;
                        sum75 = tmp516;
                      }
                    }
                    state.length = 0;
                    state.mode = 8;
                  }
                }
                if (1024 & state.flags) {
                  let sum78 = num99;
                  let sum77 = num100;
                  let diff49 = tmp471;
                  let sum76 = tmp472;
                  if (num99 < 16) {
                    num99 = sum78;
                    num61 = num56;
                    tmp37 = avail_out;
                    num62 = sum78;
                    num63 = sum77;
                    tmp38 = sum76;
                    tmp39 = diff49;
                    while (0 !== diff49) {
                      diff49 = diff49 - 1;
                      let tmp676 = +sum76;
                      sum76 = tmp676 + 1;
                      sum77 = sum77 + (input[tmp676] << num99);
                      sum78 = num99 + 8;
                      num100 = sum77;
                      tmp471 = diff49;
                      tmp472 = sum76;
                      continue;
                    }
                  }
                  state.length = num100;
                  if (state.head) {
                    state.head.extra_len = num100;
                  }
                  if (512 & state.flags) {
                    buf8[0] = 255 & num100;
                    buf8[1] = num100 >>> 8 & 255;
                    let check6 = state.check;
                    num100 = _mod13658(check6, tmp2, 2, 0);
                    state.check = num100;
                  }
                } else if (state.head) {
                  state.head.extra = null;
                }
                state.mode = 6;
              }
              let sum80 = num96;
              let diff50 = tmp455;
              let sum79 = tmp456;
              let tmp460 = num96;
              let tmp461 = tmp455;
              let tmp462 = tmp456;
              if (num95 >= 16) {
                if (state.head) {
                  state.head.xflags = 255 & tmp460;
                  state.head.os = tmp460 >> 8;
                }
                if (512 & state.flags) {
                  buf8[0] = 255 & tmp460;
                  buf8[1] = tmp460 >>> 8 & 255;
                  let check5 = state.check;
                  state.check = _mod13658(check5, tmp2, 2, 0);
                }
                state.mode = 5;
                num99 = 0;
                num100 = 0;
                tmp471 = tmp461;
                tmp472 = tmp462;
              } else {
                num61 = num56;
                tmp37 = avail_out;
                num62 = num95;
                num63 = sum80;
                tmp38 = sum79;
                tmp39 = diff50;
                while (0 !== diff50) {
                  diff50 = diff50 - 1;
                  let tmp675 = +sum79;
                  sum79 = tmp675 + 1;
                  sum80 = sum80 + (input[tmp675] << num95);
                  num95 = num95 + 8;
                  tmp460 = sum80;
                  tmp461 = diff50;
                  tmp462 = sum79;
                  break;
                }
              }
            }
            let sum82 = num92;
            let diff51 = tmp439;
            let sum81 = tmp440;
            let tmp444 = num92;
            let tmp445 = tmp439;
            let tmp446 = tmp440;
            if (num91 >= 32) {
              if (state.head) {
                state.head.time = tmp444;
              }
              if (512 & state.flags) {
                buf8[0] = 255 & tmp444;
                buf8[1] = tmp444 >>> 8 & 255;
                buf8[2] = tmp444 >>> 16 & 255;
                buf8[3] = tmp444 >>> 24 & 255;
                let check4 = state.check;
                state.check = _mod13658(check4, tmp2, 4, 0);
              }
              state.mode = 4;
              num95 = 0;
              num96 = 0;
              tmp455 = tmp445;
              tmp456 = tmp446;
            } else {
              num61 = num56;
              tmp37 = avail_out;
              num62 = num91;
              num63 = sum82;
              tmp38 = sum81;
              tmp39 = diff51;
              while (0 !== diff51) {
                diff51 = diff51 - 1;
                let tmp674 = +sum81;
                sum81 = tmp674 + 1;
                sum82 = sum82 + (input[tmp674] << num91);
                num91 = num91 + 8;
                tmp444 = sum82;
                tmp445 = diff51;
                tmp446 = sum81;
                break;
              }
            }
          }
          state.next_out = next_out;
          state.avail_out = diff11;
          state.next_in = tmp38;
          state.avail_in = tmp39;
          state.hold = num63;
          state.bits = num62;
          if (state.wsize) {
            let output3 = state.output;
            let tmp574 = updatewindow(state, output3, state.next_out, tmp37 - state.avail_out);
          }
          let diff52 = avail_in - state.avail_in;
          let diff53 = tmp37 - state.avail_out;
          state.total_in = state.total_in + diff52;
          state.total_out = state.total_out + diff53;
          state.total = state.total + diff53;
          let tmp577 = state.wrap && diff53;
          if (!tmp577) {
            let num114 = 0;
            if (state.last) {
              num114 = 64;
            }
            let num115 = 0;
            let sum83 = state.bits + num114;
            if (state.mode === 12) {
              num115 = 128;
            }
            if (20 === state.mode) {
              let num116 = 256;
            } else {
              num116 = 0;
            }
            state.data_type = sum83 + num115 + num116;
            let tmp588 = (0 === diff52 && 0 === diff53 || 4 === arg1) && 0 === num61;
            if (tmp588) {
              num61 = -5;
            }
            return num61;
          } else {
            let tmp578 = require;
            let next_out3 = dependencyMap;
            if (state.flags) {
              let check12 = state.check;
              let tmp578Result = tmp578(13658);
              next_out3 = state.next_out;
              let tmp578ResultResult = tmp578Result(check12, tmp15, diff53, next_out3 - diff53);
            } else {
              let check11 = state.check;
              tmp578ResultResult = tmp578(13657)(check11, tmp15, diff53, state.next_out - diff53);
            }
            state.check = tmp578ResultResult;
            state.adler = tmp578ResultResult;
          }
        }
        tmp69 = avail_out;
        tmp65 = bits;
        tmp66 = hold;
        tmp67 = diff45;
        tmp68 = next_in;
        if (29 !== mode) {
          num61 = -3;
          tmp37 = avail_out;
          num62 = bits;
          num63 = hold;
          tmp39 = diff45;
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
export const inflateEnd = function inflateEnd(state) {
  if (state) {
    if (state.state) {
      state = state.state;
      if (state.window) {
        state.window = null;
      }
      state.state = null;
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
export const inflateSetDictionary = function inflateSetDictionary(state, output3) {
  let num = -2;
  let num2 = -2;
  if (state) {
    num2 = num;
    if (state.state) {
      state = state.state;
      if (0 === state.wrap) {
        if (11 !== state.mode) {
          updatewindow(state, output3, length, length);
          state.havedict = 1;
          let num8 = 0;
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