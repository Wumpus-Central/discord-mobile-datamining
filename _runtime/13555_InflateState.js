// === Module 13555: InflateState ===

// Module 13555 (InflateState)
import assign from "assign" /* 13545 */;
import _mod13552 from "module_13552" /* 13552 */;
import inflate_table from "inflate_table" /* 13556 */;
import inflate_fast from "inflate_fast" /* 13557 */;

require = arg1;
const dependencyMap = arg6;
function InflateState() {
  const obj = { mode: 0, last: false, wrap: 0, havedict: false, flags: 0, dmax: 0, check: 0, total: 0, head: null, wbits: 0, wsize: 0, whave: 0, wnext: 0, window: null, hold: 0, bits: 0, length: 0, offset: 0, extra: 0, lencode: null, distcode: null, lenbits: 0, distbits: 0, ncode: 0, nlen: 0, ndist: 0, have: 0, next: null };
  const buf16 = new assign.Buf16(320);
  obj.lens = buf16;
  const buf161 = new assign.Buf16(288);
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
          const buf32 = new assign.Buf32(852);
          state2.lendyn = buf32;
          state2.lencode = buf32;
          const buf321 = new assign.Buf32(592);
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
    const buf8 = new assign.Buf8(state.wsize);
    state.window = buf8;
  }
  if (length2 >= state.wsize) {
    const obj3 = assign;
    obj3.arraySet(state.window, output3, length - state.wsize, state.wsize, 0);
    state.wnext = 0;
    state.whave = state.wsize;
  } else {
    let diff = state.wsize - state.wnext;
    if (diff > length2) {
      diff = length2;
    }
    const obj = assign;
    obj.arraySet(state.window, output3, length - length2, diff, state.wnext);
    const diff1 = length2 - diff;
    if (diff1) {
      const tmp8Result = tmp8(13545);
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
arg5.inflateReset = inflateReset;
arg5.inflateReset2 = function inflateReset2(state) {
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
arg5.inflateResetKeep = function inflateResetKeep(state) {
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
      const buf32 = new assign.Buf32(852);
      state.lendyn = buf32;
      state.lencode = buf32;
      const buf321 = new assign.Buf32(592);
      state.distdyn = buf321;
      state.distcode = buf321;
      state.sane = 1;
      state.back = -1;
      num = 0;
    }
  }
  return num;
};
arg5.inflateInit = function inflateInit(strm) {
  return inflateInit2(strm, 15);
};
arg5.inflateInit2 = inflateInit2;
arg5.inflate = function inflate(state) {
  let mode;
  let buf8 = new assign.Buf8(4);
  const items = [16, 17, 18, 0, 8, 7, 9, 6, 10, 5, 11, 4, 12, 3, 13, 2, 14, 1, 15];
  if (state) {
    if (state.state) {
      if (state.output) {
        if (!state.input) {
          let num = 0;
        }
        state = state.state;
        if (state.mode === 12) {
          state.mode = 13;
        }
        ({ next_out, output, avail_out, next_in, input, avail_in } = state);
        ({ hold, bits } = state);
        let num56 = 0;
        let diff2 = avail_out;
        let diff8 = avail_in;
        while (true) {
          mode = state.mode;
          let tmp7 = num56;
          let tmp8 = avail_out;
          let tmp9 = bits;
          let tmp10 = hold;
          let tmp11 = diff2;
          let tmp12 = diff8;
          let tmp13 = next_out;
          let tmp14 = next_in;
          let tmp15 = output;
          let tmp16 = input;
          if (1 === mode) {
            if (0 === state.wrap) {
              state.mode = 13;
              continue;
            } else {
              buf8 = bits;
              buf8 = hold;
              buf8 = diff8;
              buf8 = next_in;
              buf8 = bits;
              buf8 = hold;
              buf8 = diff8;
              buf8 = next_in;
              if (bits >= 16) {
                if (2 & state.wrap) {
                  if (35615 === buf8) {
                    state.check = 0;
                    buf8[0] = 255 & buf8;
                    buf8[1] = buf8 >>> 8 & 255;
                    buf8 = require;
                    buf8 = dependencyMap;
                    let check10 = state.check;
                    buf8 = check10;
                    num = 2;
                    num = 0;
                    state.check = _mod13552(check10, tmp2, 2, 0);
                    state.mode = 2;
                    bits = 0;
                    hold = 0;
                    diff8 = buf8;
                    next_in = buf8;
                    continue;
                  }
                }
                state.flags = 0;
                if (state.head) {
                  state.head.done = false;
                }
                if (1 & state.wrap) {
                  if (!((((255 & buf8) << 8) + (buf8 >> 8)) % 31)) {
                    if (8 !== (15 & buf8)) {
                      state.msg = "unknown compression method";
                      state.mode = 30;
                      bits = buf8;
                      hold = buf8;
                      diff8 = buf8;
                      next_in = buf8;
                      continue;
                    } else {
                      buf8 = buf8 >>> 4;
                      buf8 = 8 + (15 & buf8);
                      if (0 === state.wbits) {
                        state.wbits = buf8;
                      } else {
                        if (buf8 > state.wbits) {
                          state.msg = "invalid window size";
                          state.mode = 30;
                          bits = buf8;
                          hold = buf8;
                          diff8 = buf8;
                          next_in = buf8;
                          continue;
                        }
                        continue;
                      }
                      state.dmax = 1 << buf8;
                      state.check = 1;
                      state.adler = 1;
                      num = 10;
                      if (!(512 & buf8)) {
                        num = 12;
                      }
                      state.mode = num;
                      bits = 0;
                      hold = 0;
                      diff8 = buf8;
                      next_in = buf8;
                      continue;
                    }
                    continue;
                  }
                  continue;
                }
                state.msg = "incorrect header check";
                state.mode = 30;
                bits = buf8;
                hold = buf8;
                diff8 = buf8;
                next_in = buf8;
                continue;
              } else {
                let num61 = num56;
                let tmp37 = avail_out;
                let num62 = buf8;
                let num63 = buf8;
                let tmp38 = buf8;
                let tmp39 = buf8;
                while (0 !== buf8) {
                  buf8 = buf8 - 1;
                  buf8 = +buf8;
                  buf8 = buf8 + 1;
                  buf8 = buf8 + (input[buf8] << buf8);
                  buf8 = buf8 + 8;
                  continue;
                }
              }
            }
          } else {
            if (2 === mode) {
              buf8 = bits;
              buf8 = hold;
              buf8 = diff8;
              buf8 = next_in;
              buf8 = bits;
              buf8 = hold;
              buf8 = diff8;
              buf8 = next_in;
              if (bits >= 16) {
                state.flags = buf8;
                if (8 !== (255 & state.flags)) {
                  state.msg = "unknown compression method";
                  state.mode = 30;
                  bits = buf8;
                  hold = buf8;
                  diff8 = buf8;
                  next_in = buf8;
                  continue;
                } else if (57344 & state.flags) {
                  state.msg = "unknown header flags set";
                  state.mode = 30;
                  bits = buf8;
                  hold = buf8;
                  diff8 = buf8;
                  next_in = buf8;
                  continue;
                } else {
                  if (state.head) {
                    state.head.text = buf8 >> 8 & 1;
                  }
                  if (512 & state.flags) {
                    buf8[0] = 255 & buf8;
                    buf8[1] = buf8 >>> 8 & 255;
                    buf8 = require;
                    buf8 = dependencyMap;
                    let check3 = state.check;
                    buf8 = check3;
                    let num89 = 2;
                    let num90 = 0;
                    state.check = _mod13552(check3, tmp2, 2, 0);
                  }
                  state.mode = 3;
                  let num91 = 0;
                  let num92 = 0;
                }
                continue;
              } else {
                num61 = num56;
                tmp37 = avail_out;
                num62 = buf8;
                num63 = buf8;
                tmp38 = buf8;
                tmp39 = buf8;
                while (0 !== buf8) {
                  buf8 = buf8 - 1;
                  buf8 = +buf8;
                  buf8 = buf8 + 1;
                  buf8 = buf8 + (input[buf8] << buf8);
                  buf8 = buf8 + 8;
                  continue;
                }
              }
            } else {
              num91 = bits;
              num92 = hold;
              buf8 = diff8;
              buf8 = next_in;
              if (3 !== mode) {
                let num95 = bits;
                let num96 = hold;
                buf8 = diff8;
                buf8 = next_in;
                if (4 !== mode) {
                  let num99 = bits;
                  num = hold;
                  buf8 = diff8;
                  buf8 = next_in;
                  if (5 !== mode) {
                    buf8 = bits;
                    buf8 = hold;
                    buf8 = diff8;
                    buf8 = next_in;
                    if (6 === mode) {
                      buf8 = tmp12;
                      buf8 = tmp14;
                      if (!(1024 & state.flags)) {
                        state.length = 0;
                        state.mode = 7;
                        buf8 = tmp9;
                        buf8 = tmp10;
                      } else {
                        let length4 = state.length;
                        if (length4 > tmp12) {
                          length4 = tmp12;
                        }
                        buf8 = tmp12;
                        buf8 = tmp14;
                        if (length4) {
                          if (state.head) {
                            buf8 = state.head.extra_len - state.length;
                            if (!state.head.extra) {
                              let _Array = Array;
                              let extra_len = state.head.extra_len;
                              buf8 = extra_len;
                              buf8 = new.target;
                              buf8 = new.target;
                              buf8 = new Array(extra_len);
                              state.head.extra = buf8;
                            }
                            buf8 = require;
                            buf8 = dependencyMap;
                            let obj3 = assign;
                            let extra3 = state.head.extra;
                            buf8 = extra3;
                            buf8 = obj3;
                            buf8 = input;
                            buf8 = tmp14;
                            buf8 = length4;
                            buf8 = obj3.arraySet(extra3, tmp16, buf8, length4, buf8);
                          }
                          if (512 & state.flags) {
                            buf8 = require;
                            buf8 = dependencyMap;
                            let check7 = state.check;
                            buf8 = check7;
                            buf8 = input;
                            buf8 = length4;
                            buf8 = tmp14;
                            state.check = _mod13552(check7, tmp16, length4, buf8);
                          }
                          buf8 = tmp12 - length4;
                          buf8 = tmp14 + length4;
                          state.length = state.length - length4;
                        }
                        num61 = num56;
                        tmp37 = avail_out;
                        num62 = tmp9;
                        num63 = tmp10;
                        tmp39 = buf8;
                        tmp38 = buf8;
                      }
                    } else {
                      buf8 = bits;
                      buf8 = hold;
                      buf8 = diff8;
                      buf8 = next_in;
                      if (7 !== mode) {
                        buf8 = bits;
                        buf8 = hold;
                        buf8 = diff8;
                        if (8 === mode) {
                          if (4096 & state.flags) {
                            num = 0;
                            num61 = num56;
                            tmp37 = avail_out;
                            num62 = tmp9;
                            num63 = tmp10;
                            tmp38 = tmp14;
                            tmp39 = tmp12;
                            if (0 !== tmp12) {
                              while (true) {
                                buf8 = input[tmp14 + num];
                                let head3 = state.head;
                                buf8 = num;
                                if (head3) {
                                  head3 = buf8;
                                }
                                if (head3) {
                                  head3 = state.length < 65536;
                                }
                                if (head3) {
                                  let head4 = state.head;
                                  let _String2 = String;
                                  head4.comment = head4.comment + String.fromCharCode(buf8);
                                }
                                buf8 = num + 1;
                                if (!buf8) {
                                  break;
                                } else {
                                  num = buf8;
                                  if (buf8 >= tmp12) {
                                    break;
                                  }
                                }
                              }
                              if (512 & state.flags) {
                                buf8 = require;
                                buf8 = dependencyMap;
                                let check9 = state.check;
                                buf8 = check9;
                                buf8 = input;
                                buf8 = tmp14;
                                state.check = _mod13552(check9, tmp16, buf8, buf8);
                              }
                              buf8 = tmp12 - buf8;
                              buf8 = tmp14 + buf8;
                              num61 = num56;
                              tmp37 = avail_out;
                              num62 = tmp9;
                              num63 = tmp10;
                              tmp39 = buf8;
                              tmp38 = buf8;
                            }
                          } else {
                            buf8 = tmp12;
                            buf8 = tmp14;
                            if (state.head) {
                              state.head.comment = null;
                              buf8 = tmp12;
                              buf8 = tmp14;
                            }
                          }
                          state.mode = 9;
                          buf8 = tmp9;
                          buf8 = tmp10;
                        } else {
                          buf8 = bits;
                          buf8 = hold;
                          buf8 = diff8;
                          buf8 = next_in;
                          if (9 === mode) {
                            num = tmp9;
                            num = tmp10;
                            buf8 = tmp12;
                            buf8 = tmp14;
                            if (512 & state.flags) {
                              buf8 = tmp9;
                              buf8 = tmp10;
                              buf8 = tmp12;
                              buf8 = tmp14;
                              buf8 = tmp9;
                              buf8 = tmp10;
                              buf8 = tmp12;
                              buf8 = tmp14;
                              if (tmp9 >= 16) {
                                num = 0;
                                num = 0;
                                if (buf8 !== (65535 & state.check)) {
                                  state.msg = "header crc mismatch";
                                  state.mode = 30;
                                  bits = buf8;
                                  hold = buf8;
                                  diff8 = buf8;
                                  next_in = buf8;
                                  continue;
                                }
                              } else {
                                num61 = num56;
                                tmp37 = avail_out;
                                num62 = buf8;
                                num63 = buf8;
                                tmp38 = buf8;
                                tmp39 = buf8;
                                while (0 !== buf8) {
                                  buf8 = buf8 - 1;
                                  buf8 = +buf8;
                                  buf8 = buf8 + 1;
                                  buf8 = buf8 + (input[buf8] << buf8);
                                  buf8 = buf8 + 8;
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
                            bits = num;
                            hold = num;
                            diff8 = buf8;
                            next_in = buf8;
                            continue;
                          } else {
                            if (10 === mode) {
                              buf8 = bits;
                              buf8 = hold;
                              buf8 = diff8;
                              buf8 = next_in;
                              buf8 = hold;
                              buf8 = diff8;
                              buf8 = next_in;
                              if (bits >= 32) {
                                buf8 = (buf8 >>> 24 & 255) + (buf8 >>> 8 & 65280) + ((65280 & buf8) << 8) + ((255 & buf8) << 24);
                                state.check = buf8;
                                state.adler = buf8;
                                state.mode = 11;
                                let num75 = 0;
                                let num76 = 0;
                              } else {
                                num61 = num56;
                                tmp37 = avail_out;
                                num62 = buf8;
                                num63 = buf8;
                                tmp38 = buf8;
                                tmp39 = buf8;
                                while (0 !== buf8) {
                                  buf8 = buf8 - 1;
                                  buf8 = +buf8;
                                  buf8 = buf8 + 1;
                                  buf8 = buf8 + (input[buf8] << buf8);
                                  buf8 = buf8 + 8;
                                  break;
                                }
                              }
                            } else {
                              num75 = bits;
                              num76 = hold;
                              buf8 = diff8;
                              buf8 = next_in;
                              if (11 !== mode) {
                                buf8 = bits;
                                buf8 = hold;
                                buf8 = diff8;
                                buf8 = next_in;
                                if (12 !== mode) {
                                  buf8 = bits;
                                  buf8 = hold;
                                  buf8 = diff8;
                                  buf8 = next_in;
                                  if (13 !== mode) {
                                    if (14 === mode) {
                                      buf8 = hold >>> (7 & bits);
                                      buf8 = bits - (7 & bits);
                                      buf8 = diff8;
                                      buf8 = next_in;
                                      buf8 = diff8;
                                      buf8 = next_in;
                                      if (buf8 >= 32) {
                                        buf8 = 65535 & buf8;
                                        if (buf8 !== (buf8 >>> 16 ^ 65535)) {
                                          state.msg = "invalid stored block lengths";
                                          state.mode = 30;
                                          bits = buf8;
                                          hold = buf8;
                                          diff8 = buf8;
                                          next_in = buf8;
                                          continue;
                                        } else {
                                          state.length = buf8;
                                          state.mode = 15;
                                          num = 0;
                                          num = 0;
                                          num61 = num56;
                                          tmp37 = avail_out;
                                          num62 = 0;
                                          num63 = 0;
                                          tmp39 = buf8;
                                          tmp38 = buf8;
                                        }
                                      } else {
                                        num61 = num56;
                                        tmp37 = avail_out;
                                        num62 = buf8;
                                        num63 = buf8;
                                        tmp38 = buf8;
                                        tmp39 = buf8;
                                        while (0 !== buf8) {
                                          buf8 = buf8 - 1;
                                          buf8 = +buf8;
                                          buf8 = buf8 + 1;
                                          buf8 = buf8 + (input[buf8] << buf8);
                                          buf8 = buf8 + 8;
                                          break;
                                        }
                                      }
                                    } else {
                                      num = bits;
                                      num = hold;
                                      buf8 = diff8;
                                      buf8 = next_in;
                                      if (15 !== mode) {
                                        buf8 = bits;
                                        buf8 = hold;
                                        buf8 = diff8;
                                        buf8 = next_in;
                                        if (16 !== mode) {
                                          if (17 === mode) {
                                            let sum2 = bits;
                                            let sum1 = hold;
                                            let diff1 = diff8;
                                            let sum = next_in;
                                            let tmp74 = bits;
                                            let tmp75 = hold;
                                            let tmp76 = diff8;
                                            let tmp77 = next_in;
                                            if (bits >= 14) {
                                              state.nlen = 257 + (31 & tmp75);
                                              let tmp82 = tmp75 >>> 5;
                                              state.ndist = 1 + (31 & tmp82);
                                              let tmp83 = tmp82 >>> 5;
                                              state.ncode = 4 + (15 & tmp83);
                                              let tmp84 = tmp83 >>> 4;
                                              let diff = tmp74 - 5 - 5 - 4;
                                              if (state.nlen <= 286) {
                                                if (state.ndist <= 30) {
                                                  state.have = 0;
                                                  state.mode = 18;
                                                  buf8 = diff;
                                                  buf8 = tmp84;
                                                  buf8 = tmp76;
                                                  buf8 = tmp77;
                                                }
                                              }
                                              state.msg = "too many length or distance symbols";
                                              state.mode = 30;
                                              bits = diff;
                                              hold = tmp84;
                                              diff8 = tmp76;
                                              next_in = tmp77;
                                              continue;
                                            } else {
                                              let tmp78 = sum2;
                                              let tmp79 = sum1;
                                              let tmp80 = diff1;
                                              let tmp81 = sum;
                                              num61 = num56;
                                              tmp37 = avail_out;
                                              num62 = sum2;
                                              num63 = sum1;
                                              tmp38 = sum;
                                              tmp39 = diff1;
                                              while (0 !== diff1) {
                                                diff1 = diff1 - 1;
                                                buf8 = +sum;
                                                sum = buf8 + 1;
                                                sum1 = sum1 + (input[buf8] << sum2);
                                                sum2 = sum2 + 8;
                                                tmp75 = sum1;
                                                tmp76 = diff1;
                                                tmp77 = sum;
                                                tmp74 = sum2;
                                                break;
                                              }
                                            }
                                          } else {
                                            buf8 = bits;
                                            buf8 = hold;
                                            buf8 = diff8;
                                            buf8 = next_in;
                                            if (18 !== mode) {
                                              buf8 = num56;
                                              buf8 = bits;
                                              buf8 = hold;
                                              buf8 = diff8;
                                              buf8 = next_in;
                                              if (19 !== mode) {
                                                buf8 = num56;
                                                buf8 = bits;
                                                buf8 = hold;
                                                buf8 = diff8;
                                                buf8 = next_in;
                                                if (20 !== mode) {
                                                  buf8 = num56;
                                                  buf8 = bits;
                                                  buf8 = hold;
                                                  buf8 = diff8;
                                                  buf8 = next_in;
                                                  if (21 !== mode) {
                                                    buf8 = num56;
                                                    buf8 = bits;
                                                    buf8 = hold;
                                                    buf8 = diff8;
                                                    buf8 = next_in;
                                                    if (22 !== mode) {
                                                      buf8 = num56;
                                                      buf8 = bits;
                                                      buf8 = hold;
                                                      buf8 = diff8;
                                                      buf8 = next_in;
                                                      if (23 !== mode) {
                                                        buf8 = num56;
                                                        buf8 = bits;
                                                        buf8 = hold;
                                                        buf8 = diff8;
                                                        buf8 = next_in;
                                                        if (24 !== mode) {
                                                          buf8 = num56;
                                                          buf8 = bits;
                                                          buf8 = hold;
                                                          buf8 = diff8;
                                                          buf8 = next_in;
                                                          if (25 !== mode) {
                                                            if (26 === mode) {
                                                              num61 = num56;
                                                              tmp37 = avail_out;
                                                              num62 = bits;
                                                              num63 = hold;
                                                              tmp39 = diff8;
                                                              tmp38 = next_in;
                                                              if (0 !== diff2) {
                                                                buf8 = +next_out;
                                                                next_out = buf8 + 1;
                                                                output[buf8] = state.length;
                                                                diff2 = diff2 - 1;
                                                                state.mode = 21;
                                                                continue;
                                                              }
                                                            } else {
                                                              if (27 === mode) {
                                                                let tmp22 = avail_out;
                                                                let num59 = bits;
                                                                let num60 = hold;
                                                                let tmp23 = diff8;
                                                                let tmp24 = next_in;
                                                                if (!state.wrap) {
                                                                  state.mode = 28;
                                                                  let tmp17 = tmp22;
                                                                  let tmp18 = num59;
                                                                  let tmp19 = num60;
                                                                  let tmp20 = tmp23;
                                                                  let tmp21 = tmp24;
                                                                } else {
                                                                  let sum5 = bits;
                                                                  let tmp26 = hold;
                                                                  let diff4 = diff8;
                                                                  let sum4 = next_in;
                                                                  let tmp29 = bits;
                                                                  let tmp30 = hold;
                                                                  let tmp31 = diff8;
                                                                  let tmp32 = next_in;
                                                                  if (bits >= 32) {
                                                                    let diff3 = avail_out - diff2;
                                                                    state.total_out = state.total_out + diff3;
                                                                    state.total = state.total + diff3;
                                                                    if (!diff3) {
                                                                      let sum3 = tmp30;
                                                                      if (!state.flags) {
                                                                        sum3 = (tmp30 >>> 24 & 255) + (tmp30 >>> 8 & 65280) + ((65280 & tmp30) << 8) + ((255 & tmp30) << 24);
                                                                      }
                                                                      tmp22 = diff2;
                                                                      num59 = 0;
                                                                      num60 = 0;
                                                                      tmp23 = tmp31;
                                                                      tmp24 = tmp32;
                                                                      if (sum3 !== state.check) {
                                                                        state.msg = "incorrect data check";
                                                                        state.mode = 30;
                                                                        avail_out = diff2;
                                                                        bits = tmp29;
                                                                        hold = tmp30;
                                                                        diff8 = tmp31;
                                                                        next_in = tmp32;
                                                                        continue;
                                                                      }
                                                                    } else {
                                                                      let tmp41 = require;
                                                                      let tmp42 = dependencyMap;
                                                                      if (state.flags) {
                                                                        tmp42 = 13552;
                                                                        let check2 = state.check;
                                                                        let tmp47 = check2;
                                                                        let tmp48 = output;
                                                                        let tmp49 = diff3;
                                                                        let tmp46 = tmp41(tmp42)(check2, tmp15, diff3, next_out - diff3);
                                                                      } else {
                                                                        let check = state.check;
                                                                        let tmp43 = check;
                                                                        let tmp44 = output;
                                                                        let tmp45 = diff3;
                                                                        tmp46 = tmp41(13551)(check, tmp15, diff3, next_out - diff3);
                                                                      }
                                                                      state.check = tmp46;
                                                                      state.adler = tmp46;
                                                                    }
                                                                  } else {
                                                                    let tmp33 = sum5;
                                                                    let tmp34 = tmp26;
                                                                    let tmp35 = diff4;
                                                                    let tmp36 = sum4;
                                                                    num61 = num56;
                                                                    tmp37 = avail_out;
                                                                    num62 = sum5;
                                                                    num63 = tmp26;
                                                                    tmp38 = sum4;
                                                                    tmp39 = diff4;
                                                                    while (0 !== diff4) {
                                                                      diff4 = diff4 - 1;
                                                                      buf8 = +sum4;
                                                                      sum4 = buf8 + 1;
                                                                      tmp26 = tmp26 | input[buf8] << sum5;
                                                                      sum5 = sum5 + 8;
                                                                      tmp30 = tmp26;
                                                                      tmp31 = diff4;
                                                                      tmp32 = sum4;
                                                                      tmp29 = sum5;
                                                                      break;
                                                                    }
                                                                  }
                                                                }
                                                              } else {
                                                                tmp17 = avail_out;
                                                                tmp18 = bits;
                                                                tmp19 = hold;
                                                                tmp20 = diff8;
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
                                                                  let sum8 = tmp18;
                                                                  let sum7 = tmp19;
                                                                  let diff5 = tmp20;
                                                                  let sum6 = tmp21;
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
                                                                      diff8 = tmp59;
                                                                      next_in = tmp60;
                                                                      continue;
                                                                    }
                                                                  } else {
                                                                    let tmp61 = sum8;
                                                                    let tmp62 = sum7;
                                                                    let tmp63 = diff5;
                                                                    let tmp64 = sum6;
                                                                    num61 = num56;
                                                                    tmp37 = tmp17;
                                                                    num62 = sum8;
                                                                    num63 = sum7;
                                                                    tmp38 = sum6;
                                                                    tmp39 = diff5;
                                                                    while (0 !== diff5) {
                                                                      diff5 = diff5 - 1;
                                                                      buf8 = +sum6;
                                                                      sum6 = buf8 + 1;
                                                                      sum7 = sum7 + (input[buf8] << sum8);
                                                                      sum8 = sum8 + 8;
                                                                      tmp58 = sum7;
                                                                      tmp59 = diff5;
                                                                      tmp60 = sum6;
                                                                      tmp57 = sum8;
                                                                      break;
                                                                    }
                                                                  }
                                                                }
                                                              }
                                                              let num66 = 29;
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
                                                        num61 = buf8;
                                                        tmp37 = avail_out;
                                                        num62 = buf8;
                                                        num63 = buf8;
                                                        tmp39 = buf8;
                                                        tmp38 = buf8;
                                                        if (0 !== diff2) {
                                                          buf8 = avail_out - diff2;
                                                          if (state.offset > buf8) {
                                                            buf8 = state.offset - buf8;
                                                            if (buf8 > state.whave) {
                                                              if (state.sane) {
                                                                state.msg = "invalid distance too far back";
                                                                state.mode = 30;
                                                                num56 = buf8;
                                                                bits = buf8;
                                                                hold = buf8;
                                                                diff8 = buf8;
                                                                next_in = buf8;
                                                                continue;
                                                              }
                                                            }
                                                            if (buf8 > state.wnext) {
                                                              buf8 = buf8 - state.wnext;
                                                              buf8 = state.wsize - buf8;
                                                              let length2 = buf8;
                                                            } else {
                                                              buf8 = state.wnext - buf8;
                                                              length2 = buf8;
                                                            }
                                                            if (length2 > state.length) {
                                                              length2 = state.length;
                                                            }
                                                            let _window = state.window;
                                                            let length = length2;
                                                          } else {
                                                            buf8 = next_out - state.offset;
                                                            length = state.length;
                                                            _window = output;
                                                          }
                                                          if (length > diff2) {
                                                            length = diff2;
                                                          }
                                                          buf8 = diff2 - length;
                                                          state.length = state.length - length;
                                                          buf8 = next_out;
                                                          do {
                                                            buf8 = +buf8;
                                                            buf8 = buf8 + 1;
                                                            buf8 = +buf8;
                                                            buf8 = buf8 + 1;
                                                            output[buf8] = _window[buf8];
                                                            length = length - 1;
                                                          } while (length);
                                                          num56 = buf8;
                                                          bits = buf8;
                                                          hold = buf8;
                                                          diff2 = buf8;
                                                          diff8 = buf8;
                                                          next_out = buf8;
                                                          next_in = buf8;
                                                          if (0 !== state.length) {
                                                            continue;
                                                          } else {
                                                            state.mode = 21;
                                                            num56 = buf8;
                                                            avail_out = tmp8;
                                                            bits = buf8;
                                                            hold = buf8;
                                                            diff2 = buf8;
                                                            diff8 = buf8;
                                                            next_out = buf8;
                                                            next_in = buf8;
                                                            output = tmp15;
                                                            input = tmp16;
                                                            continue;
                                                          }
                                                          continue;
                                                        }
                                                      }
                                                      if (state.extra) {
                                                        let extra2 = state.extra;
                                                        if (buf8 >= extra2) {
                                                          state.offset = state.offset + (buf8 & (1 << state.extra) - 1);
                                                          buf8 = buf8 >>> state.extra;
                                                          buf8 = buf8 - state.extra;
                                                          state.back = state.back + state.extra;
                                                        } else {
                                                          num61 = buf8;
                                                          tmp37 = avail_out;
                                                          num62 = buf8;
                                                          num63 = buf8;
                                                          tmp38 = buf8;
                                                          tmp39 = buf8;
                                                          while (0 !== buf8) {
                                                            buf8 = buf8 - 1;
                                                            buf8 = +buf8;
                                                            buf8 = buf8 + 1;
                                                            buf8 = buf8 + (input[buf8] << buf8);
                                                            buf8 = buf8 + 8;
                                                            break;
                                                          }
                                                        }
                                                      }
                                                      if (state.offset > state.dmax) {
                                                        state.msg = "invalid distance too far back";
                                                        state.mode = 30;
                                                        num56 = buf8;
                                                        bits = buf8;
                                                        hold = buf8;
                                                        diff8 = buf8;
                                                        next_in = buf8;
                                                        continue;
                                                      } else {
                                                        state.mode = 25;
                                                      }
                                                    }
                                                    buf8 = state.distcode[buf8 & (1 << state.distbits) - 1];
                                                    buf8 = buf8 >>> 16 & 255;
                                                    buf8 = 65535 & buf8;
                                                    buf8 = buf8 >>> 24;
                                                    if (buf8 <= buf8) {
                                                      if (!(240 & buf8)) {
                                                        buf8 = (1 << buf8 + buf8) - 1;
                                                        buf8 = state.distcode[buf8 + ((buf8 & buf8) >> buf8)];
                                                        buf8 = buf8 >>> 16 & 255;
                                                        buf8 = 65535 & buf8;
                                                        buf8 = buf8 >>> 24;
                                                        if (buf8 + buf8 <= buf8) {
                                                          buf8 = buf8 >>> buf8;
                                                          buf8 = buf8 - buf8;
                                                          state.back = state.back + buf8;
                                                        } else {
                                                          num61 = buf8;
                                                          tmp37 = avail_out;
                                                          num62 = buf8;
                                                          num63 = buf8;
                                                          tmp38 = buf8;
                                                          tmp39 = buf8;
                                                          while (0 !== buf8) {
                                                            buf8 = buf8 - 1;
                                                            buf8 = +buf8;
                                                            buf8 = buf8 + 1;
                                                            buf8 = buf8 + (input[buf8] << buf8);
                                                            buf8 = buf8 + 8;
                                                            buf8 = state.distcode[buf8 + ((buf8 & buf8) >> buf8)];
                                                            buf8 = buf8 >>> 16 & 255;
                                                            buf8 = 65535 & buf8;
                                                            buf8 = buf8 >>> 24;
                                                            break;
                                                          }
                                                        }
                                                      }
                                                      buf8 = buf8 >>> buf8;
                                                      buf8 = buf8 - buf8;
                                                      state.back = state.back + buf8;
                                                      if (64 & buf8) {
                                                        state.msg = "invalid distance code";
                                                        state.mode = 30;
                                                        num56 = buf8;
                                                        bits = buf8;
                                                        hold = buf8;
                                                        diff8 = buf8;
                                                        next_in = buf8;
                                                        continue;
                                                      } else {
                                                        state.offset = buf8;
                                                        state.extra = 15 & buf8;
                                                        state.mode = 24;
                                                      }
                                                    } else {
                                                      num61 = buf8;
                                                      tmp37 = avail_out;
                                                      num62 = buf8;
                                                      num63 = buf8;
                                                      tmp38 = buf8;
                                                      tmp39 = buf8;
                                                      while (0 !== buf8) {
                                                        buf8 = buf8 - 1;
                                                        buf8 = +buf8;
                                                        buf8 = buf8 + 1;
                                                        buf8 = buf8 + (input[buf8] << buf8);
                                                        buf8 = buf8 + 8;
                                                        buf8 = state.distcode[buf8 & (1 << state.distbits) - 1];
                                                        buf8 = buf8 >>> 16 & 255;
                                                        buf8 = 65535 & buf8;
                                                        buf8 = buf8 >>> 24;
                                                        break;
                                                      }
                                                    }
                                                  }
                                                  if (state.extra) {
                                                    let extra = state.extra;
                                                    if (buf8 >= extra) {
                                                      state.length = state.length + (buf8 & (1 << state.extra) - 1);
                                                      buf8 = buf8 >>> state.extra;
                                                      buf8 = buf8 - state.extra;
                                                      state.back = state.back + state.extra;
                                                    } else {
                                                      num61 = buf8;
                                                      tmp37 = avail_out;
                                                      num62 = buf8;
                                                      num63 = buf8;
                                                      tmp38 = buf8;
                                                      tmp39 = buf8;
                                                      while (0 !== buf8) {
                                                        buf8 = buf8 - 1;
                                                        buf8 = +buf8;
                                                        buf8 = buf8 + 1;
                                                        buf8 = buf8 + (input[buf8] << buf8);
                                                        buf8 = buf8 + 8;
                                                        break;
                                                      }
                                                    }
                                                  }
                                                  state.was = state.length;
                                                  state.mode = 23;
                                                }
                                                if (buf8 >= 6) {
                                                  if (diff2 >= 258) {
                                                    state.next_out = next_out;
                                                    state.avail_out = diff2;
                                                    state.next_in = buf8;
                                                    state.avail_in = buf8;
                                                    state.hold = buf8;
                                                    state.bits = buf8;
                                                    buf8 = require;
                                                    buf8 = dependencyMap;
                                                    buf8 = inflate_fast(state, avail_out);
                                                    ({ next_out: next_out2, output: output2, avail_out: avail_out2, next_in: next_in2, input: input2, avail_in: avail_in2 } = state);
                                                    ({ hold: hold2, bits: bits2 } = state);
                                                    num56 = buf8;
                                                    bits = bits2;
                                                    hold = hold2;
                                                    diff2 = avail_out2;
                                                    diff8 = avail_in2;
                                                    next_out = next_out2;
                                                    next_in = next_in2;
                                                    output = output2;
                                                    input = input2;
                                                    if (state.mode !== 12) {
                                                      continue;
                                                    } else {
                                                      state.back = -1;
                                                      num56 = buf8;
                                                      avail_out = tmp8;
                                                      bits = bits2;
                                                      hold = hold2;
                                                      diff2 = avail_out2;
                                                      diff8 = avail_in2;
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
                                                buf8 = state.lencode[buf8 & (1 << state.lenbits) - 1];
                                                buf8 = buf8 >>> 16 & 255;
                                                buf8 = 65535 & buf8;
                                                buf8 = buf8 >>> 24;
                                                if (buf8 <= buf8) {
                                                  if (buf8) {
                                                    if (!(240 & buf8)) {
                                                      buf8 = (1 << buf8 + buf8) - 1;
                                                      buf8 = state.lencode[buf8 + ((buf8 & buf8) >> buf8)];
                                                      buf8 = buf8 >>> 16 & 255;
                                                      buf8 = 65535 & buf8;
                                                      buf8 = buf8 >>> 24;
                                                      if (buf8 + buf8 <= buf8) {
                                                        buf8 = buf8 >>> buf8;
                                                        buf8 = buf8 - buf8;
                                                        state.back = state.back + buf8;
                                                      } else {
                                                        num61 = buf8;
                                                        tmp37 = avail_out;
                                                        num62 = buf8;
                                                        num63 = buf8;
                                                        tmp38 = buf8;
                                                        tmp39 = buf8;
                                                        while (0 !== buf8) {
                                                          buf8 = buf8 - 1;
                                                          buf8 = +buf8;
                                                          buf8 = buf8 + 1;
                                                          buf8 = buf8 + (input[buf8] << buf8);
                                                          buf8 = buf8 + 8;
                                                          buf8 = state.lencode[buf8 + ((buf8 & buf8) >> buf8)];
                                                          buf8 = buf8 >>> 16 & 255;
                                                          buf8 = 65535 & buf8;
                                                          buf8 = buf8 >>> 24;
                                                          break;
                                                        }
                                                      }
                                                    }
                                                  }
                                                  buf8 = buf8 >>> buf8;
                                                  buf8 = buf8 - buf8;
                                                  state.back = state.back + buf8;
                                                  state.length = buf8;
                                                  if (0 === buf8) {
                                                    state.mode = 26;
                                                    num56 = buf8;
                                                    bits = buf8;
                                                    hold = buf8;
                                                    diff8 = buf8;
                                                    next_in = buf8;
                                                    continue;
                                                  } else {
                                                    if (32 & buf8) {
                                                      state.back = -1;
                                                      state.mode = 12;
                                                      num56 = buf8;
                                                      bits = buf8;
                                                      hold = buf8;
                                                      diff8 = buf8;
                                                      next_in = buf8;
                                                      continue;
                                                    } else if (64 & buf8) {
                                                      state.msg = "invalid literal/length code";
                                                      state.mode = 30;
                                                      num56 = buf8;
                                                      bits = buf8;
                                                      hold = buf8;
                                                      diff8 = buf8;
                                                      next_in = buf8;
                                                      continue;
                                                    } else {
                                                      state.extra = 15 & buf8;
                                                      state.mode = 22;
                                                    }
                                                    continue;
                                                  }
                                                  continue;
                                                } else {
                                                  num61 = buf8;
                                                  tmp37 = avail_out;
                                                  num62 = buf8;
                                                  num63 = buf8;
                                                  tmp38 = buf8;
                                                  tmp39 = buf8;
                                                  while (0 !== buf8) {
                                                    buf8 = buf8 - 1;
                                                    buf8 = +buf8;
                                                    buf8 = buf8 + 1;
                                                    buf8 = buf8 + (input[buf8] << buf8);
                                                    buf8 = buf8 + 8;
                                                    buf8 = state.lencode[buf8 & (1 << state.lenbits) - 1];
                                                    buf8 = buf8 >>> 16 & 255;
                                                    buf8 = 65535 & buf8;
                                                    buf8 = buf8 >>> 24;
                                                    break;
                                                  }
                                                }
                                              }
                                              state.mode = 21;
                                            }
                                            if (state.have >= state.nlen + state.ndist) {
                                              num56 = buf8;
                                              bits = buf8;
                                              hold = buf8;
                                              diff8 = buf8;
                                              next_in = buf8;
                                              if (state.mode === 30) {
                                                continue;
                                              } else {
                                                if (0 === state.lens[256]) {
                                                  state.msg = "invalid code -- missing end-of-block";
                                                  state.mode = 30;
                                                  num56 = buf8;
                                                  avail_out = tmp8;
                                                  bits = buf8;
                                                  hold = buf8;
                                                  diff2 = tmp11;
                                                  diff8 = buf8;
                                                  next_out = tmp13;
                                                  next_in = buf8;
                                                  output = tmp15;
                                                  input = tmp16;
                                                  continue;
                                                } else {
                                                  state.lenbits = 9;
                                                  let obj = { bits: null };
                                                  obj[0] = state.lenbits;
                                                  buf8 = require;
                                                  buf8 = dependencyMap;
                                                  let lens5 = state.lens;
                                                  buf8 = lens5;
                                                  num = 1;
                                                  num = 0;
                                                  num = 0;
                                                  buf8 = obj;
                                                  buf8 = inflate_table(1, lens5, 0, state.nlen, state.lencode, 0, state.work, obj);
                                                  state.lenbits = obj.bits;
                                                  if (buf8) {
                                                    state.msg = "invalid literal/lengths set";
                                                    state.mode = 30;
                                                    num56 = buf8;
                                                    avail_out = tmp8;
                                                    bits = buf8;
                                                    hold = buf8;
                                                    diff2 = tmp11;
                                                    diff8 = buf8;
                                                    next_out = tmp13;
                                                    next_in = buf8;
                                                    output = tmp15;
                                                    input = tmp16;
                                                    continue;
                                                  } else {
                                                    state.distbits = 6;
                                                    state.distcode = state.distdyn;
                                                    obj = { bits: null };
                                                    ({ distbits: obj2[0], lens: lens2 } = state);
                                                    buf8 = lens2;
                                                    let num73 = 2;
                                                    let num74 = 0;
                                                    buf8 = obj;
                                                    buf8 = buf8(13556)(2, lens2, state.nlen, state.ndist, state.distcode, 0, state.work, obj);
                                                    state.distbits = obj.bits;
                                                    if (buf8) {
                                                      state.msg = "invalid distances set";
                                                      state.mode = 30;
                                                      num56 = buf8;
                                                      avail_out = tmp8;
                                                      bits = buf8;
                                                      hold = buf8;
                                                      diff2 = tmp11;
                                                      diff8 = buf8;
                                                      next_out = tmp13;
                                                      next_in = buf8;
                                                      output = tmp15;
                                                      input = tmp16;
                                                      continue;
                                                    } else {
                                                      state.mode = 20;
                                                      num61 = buf8;
                                                      tmp37 = tmp8;
                                                      num62 = buf8;
                                                      num63 = buf8;
                                                      tmp39 = buf8;
                                                      tmp38 = buf8;
                                                    }
                                                  }
                                                  continue;
                                                }
                                                continue;
                                              }
                                              continue;
                                            } else {
                                              while (true) {
                                                buf8 = state.lencode[buf8 & (1 << state.lenbits) - 1];
                                                buf8 = buf8 >>> 16;
                                                buf8 = 65535 & buf8;
                                                buf8 = buf8 >>> 24;
                                                if (buf8 <= buf8) {
                                                  if (buf8 < 16) {
                                                    buf8 = buf8 >>> buf8;
                                                    buf8 = buf8 - buf8;
                                                    buf8 = +state.have;
                                                    state.have = buf8 + 1;
                                                    state.lens[buf8] = buf8;
                                                  } else {
                                                    if (16 === buf8) {
                                                      buf8 = buf8 + 2;
                                                      if (buf8 >= buf8) {
                                                        buf8 = buf8 >>> buf8;
                                                        buf8 = buf8 - buf8;
                                                        if (0 === state.have) {
                                                          state.msg = "invalid bit length repeat";
                                                          state.mode = 30;
                                                        } else {
                                                          let num72 = state.lens[state.have - 1];
                                                          buf8 = 3 + (3 & buf8);
                                                          buf8 = buf8 >>> 2;
                                                          buf8 = buf8 - 2;
                                                        }
                                                      } else {
                                                        num61 = buf8;
                                                        tmp37 = avail_out;
                                                        num62 = buf8;
                                                        num63 = buf8;
                                                        tmp38 = buf8;
                                                        tmp39 = buf8;
                                                        while (0 !== buf8) {
                                                          buf8 = buf8 - 1;
                                                          buf8 = +buf8;
                                                          buf8 = buf8 + 1;
                                                          buf8 = buf8 + (input[buf8] << buf8);
                                                          buf8 = buf8 + 8;
                                                          break;
                                                        }
                                                      }
                                                      break;
                                                    } else if (17 === buf8) {
                                                      buf8 = buf8 + 3;
                                                      if (buf8 >= buf8) {
                                                        buf8 = buf8 >>> buf8;
                                                        buf8 = 3 + (7 & buf8);
                                                        buf8 = buf8 >>> 3;
                                                        buf8 = buf8 - buf8 - 3;
                                                        num72 = 0;
                                                      } else {
                                                        num61 = buf8;
                                                        tmp37 = avail_out;
                                                        num62 = buf8;
                                                        num63 = buf8;
                                                        tmp38 = buf8;
                                                        tmp39 = buf8;
                                                        while (0 !== buf8) {
                                                          buf8 = buf8 - 1;
                                                          buf8 = +buf8;
                                                          buf8 = buf8 + 1;
                                                          buf8 = buf8 + (input[buf8] << buf8);
                                                          buf8 = buf8 + 8;
                                                          break;
                                                        }
                                                      }
                                                      break;
                                                    } else {
                                                      buf8 = buf8 + 7;
                                                      if (buf8 >= buf8) {
                                                        buf8 = buf8 >>> buf8;
                                                        buf8 = 11 + (127 & buf8);
                                                        buf8 = buf8 >>> 7;
                                                        buf8 = buf8 - buf8 - 7;
                                                        num72 = 0;
                                                      } else {
                                                        num61 = buf8;
                                                        tmp37 = avail_out;
                                                        num62 = buf8;
                                                        num63 = buf8;
                                                        tmp38 = buf8;
                                                        tmp39 = buf8;
                                                        while (0 !== buf8) {
                                                          buf8 = buf8 - 1;
                                                          buf8 = +buf8;
                                                          buf8 = buf8 + 1;
                                                          buf8 = buf8 + (input[buf8] << buf8);
                                                          buf8 = buf8 + 8;
                                                          break;
                                                        }
                                                      }
                                                      break;
                                                    }
                                                    if (state.have + buf8 > state.nlen + state.ndist) {
                                                      state.msg = "invalid bit length repeat";
                                                      state.mode = 30;
                                                    } else {
                                                      buf8 = buf8 - 1;
                                                      for (let buf8 = buf8; buf8; buf8 = buf8) {
                                                        buf8 = +state.have;
                                                        state.have = buf8 + 1;
                                                        state.lens[buf8] = num72;
                                                        buf8 = buf8 - 1;
                                                      }
                                                    }
                                                  }
                                                  break;
                                                } else {
                                                  num61 = buf8;
                                                  tmp37 = avail_out;
                                                  num62 = buf8;
                                                  num63 = buf8;
                                                  tmp38 = buf8;
                                                  tmp39 = buf8;
                                                  while (0 !== buf8) {
                                                    buf8 = buf8 - 1;
                                                    buf8 = +buf8;
                                                    buf8 = buf8 + 1;
                                                    buf8 = buf8 + (input[buf8] << buf8);
                                                    buf8 = buf8 + 8;
                                                    buf8 = state.lencode[buf8 & (1 << state.lenbits) - 1];
                                                    buf8 = buf8 >>> 16;
                                                    buf8 = 65535 & buf8;
                                                    buf8 = buf8 >>> 24;
                                                    continue;
                                                  }
                                                }
                                                break;
                                              }
                                            }
                                          }
                                          let diff6 = buf8;
                                          let tmp87 = buf8;
                                          let tmp88 = buf8;
                                          let tmp89 = buf8;
                                          let tmp90 = buf8;
                                          let tmp91 = buf8;
                                          let tmp92 = buf8;
                                          let tmp93 = buf8;
                                          if (state.have < state.ncode) {
                                            while (true) {
                                              let sum11 = diff6;
                                              let sum10 = tmp87;
                                              let diff7 = tmp88;
                                              let sum9 = tmp89;
                                              let tmp98 = tmp87;
                                              let tmp99 = tmp88;
                                              buf8 = tmp89;
                                              buf8 = diff6;
                                              if (diff6 >= 3) {
                                                buf8 = +state.have;
                                                state.have = buf8 + 1;
                                                state.lens[items[buf8]] = 7 & tmp98;
                                                tmp87 = tmp98 >>> 3;
                                                diff6 = buf8 - 3;
                                                tmp88 = tmp99;
                                                tmp89 = buf8;
                                                tmp90 = diff6;
                                                tmp91 = tmp87;
                                                tmp92 = tmp99;
                                                tmp93 = buf8;
                                                break;
                                              } else {
                                                buf8 = sum11;
                                                buf8 = sum10;
                                                buf8 = diff7;
                                                buf8 = sum9;
                                                num61 = num56;
                                                tmp37 = avail_out;
                                                num62 = sum11;
                                                num63 = sum10;
                                                tmp38 = sum9;
                                                tmp39 = diff7;
                                                while (0 !== diff7) {
                                                  diff7 = diff7 - 1;
                                                  buf8 = +sum9;
                                                  sum9 = buf8 + 1;
                                                  sum10 = sum10 + (input[buf8] << sum11);
                                                  sum11 = sum11 + 8;
                                                  tmp98 = sum10;
                                                  tmp99 = diff7;
                                                  buf8 = sum9;
                                                  buf8 = sum11;
                                                  continue;
                                                }
                                              }
                                              break;
                                            }
                                          }
                                          if (state.have < 19) {
                                            do {
                                              buf8 = +state.have;
                                              state.have = buf8 + 1;
                                              state.lens[items[buf8]] = 0;
                                              have = state.have;
                                            } while (have < 19);
                                          }
                                          state.lencode = state.lendyn;
                                          state.lenbits = 7;
                                          obj = { bits: null };
                                          obj[0] = state.lenbits;
                                          buf8 = require;
                                          buf8 = dependencyMap;
                                          let lens = state.lens;
                                          buf8 = lens;
                                          let num67 = 0;
                                          let num68 = 0;
                                          let num69 = 0;
                                          let num70 = 19;
                                          let num71 = 0;
                                          buf8 = obj;
                                          buf8 = inflate_table(0, lens, 0, 19, state.lencode, 0, state.work, obj);
                                          state.lenbits = obj.bits;
                                          if (buf8) {
                                            state.msg = "invalid code lengths set";
                                            state.mode = 30;
                                            num56 = buf8;
                                            bits = tmp90;
                                            hold = tmp91;
                                            diff8 = tmp92;
                                            next_in = tmp93;
                                            continue;
                                          } else {
                                            state.have = 0;
                                            state.mode = 19;
                                            buf8 = tmp90;
                                            buf8 = tmp91;
                                            buf8 = tmp92;
                                            buf8 = tmp93;
                                          }
                                        }
                                      }
                                      let length3 = state.length;
                                      if (length3) {
                                        if (length3 > buf8) {
                                          length3 = buf8;
                                        }
                                        if (length3 > diff2) {
                                          length3 = diff2;
                                        }
                                        num61 = num56;
                                        tmp37 = avail_out;
                                        num62 = buf8;
                                        num63 = buf8;
                                        tmp39 = buf8;
                                        tmp38 = buf8;
                                        if (0 !== length3) {
                                          buf8 = require;
                                          buf8 = dependencyMap;
                                          let obj5 = assign;
                                          buf8 = obj5;
                                          buf8 = output;
                                          buf8 = input;
                                          buf8 = length3;
                                          buf8 = next_out;
                                          buf8 = obj5.arraySet(tmp15, tmp16, buf8, length3, tmp13);
                                          diff8 = buf8 - length3;
                                          next_in = buf8 + length3;
                                          diff2 = diff2 - length3;
                                          next_out = next_out + length3;
                                          state.length = state.length - length3;
                                          bits = buf8;
                                          hold = buf8;
                                          continue;
                                        }
                                      } else {
                                        state.mode = 12;
                                        bits = buf8;
                                        hold = buf8;
                                        diff8 = buf8;
                                        next_in = buf8;
                                        continue;
                                      }
                                      continue;
                                    }
                                    state.mode = 16;
                                    buf8 = num;
                                    buf8 = num;
                                  }
                                }
                                if (state.last) {
                                  hold = buf8 >>> (7 & buf8);
                                  bits = buf8 - (7 & buf8);
                                  state.mode = 27;
                                  diff8 = buf8;
                                  next_in = buf8;
                                  continue;
                                } else if (buf8 >= 3) {
                                  state.last = 1 & buf8;
                                  buf8 = buf8 - 1;
                                  buf8 = buf8 >>> 1;
                                  buf8 = 3 & buf8;
                                  if (0 === buf8) {
                                    state.mode = 14;
                                  } else if (1 === buf8) {
                                    buf8 = c7;
                                    if (c7) {
                                      buf8 = require;
                                      buf8 = dependencyMap;
                                      buf8 = new.target;
                                      buf8 = new.target;
                                      let num77 = 512;
                                      buf8 = new assign.Buf32(512);
                                      buf8 = new.target;
                                      buf8 = new.target;
                                      let num78 = 32;
                                      buf8 = new assign.Buf32(32);
                                      let num79 = 0;
                                      do {
                                        buf8 = num79 + 1;
                                        state.lens[num79] = 8;
                                        num79 = buf8;
                                      } while (buf8 < 144);
                                      if (buf8 < 256) {
                                        do {
                                          buf8 = buf8 + 1;
                                          state.lens[buf8] = 9;
                                        } while (buf8 < 256);
                                      }
                                      if (buf8 < 280) {
                                        do {
                                          buf8 = buf8 + 1;
                                          state.lens[buf8] = 7;
                                        } while (buf8 < 280);
                                      }
                                      if (buf8 < 288) {
                                        do {
                                          buf8 = buf8 + 1;
                                          state.lens[buf8] = 8;
                                        } while (buf8 < 288);
                                      }
                                      buf8 = require;
                                      buf8 = dependencyMap;
                                      let lens3 = state.lens;
                                      buf8 = lens3;
                                      let num80 = 1;
                                      let num81 = 0;
                                      let num82 = 288;
                                      let num83 = 0;
                                      buf8 = inflate_table(1, lens3, 0, 288, buf8, 0, state.work, { bits: 9 });
                                      let num84 = 0;
                                      do {
                                        buf8 = num84 + 1;
                                        state.lens[num84] = 5;
                                        num84 = buf8;
                                      } while (buf8 < 32);
                                      buf8 = require;
                                      buf8 = dependencyMap;
                                      let lens4 = state.lens;
                                      buf8 = lens4;
                                      let num85 = 2;
                                      let num86 = 0;
                                      let num87 = 32;
                                      let num88 = 0;
                                      buf8 = inflate_table(2, lens4, 0, 32, buf8, 0, state.work, { bits: 5 });
                                      c7 = false;
                                    }
                                    state.lencode = buf8;
                                    state.lenbits = 9;
                                    state.distcode = buf8;
                                    state.distbits = 5;
                                    state.mode = 20;
                                    if (6 === arg1) {
                                      num63 = buf8 >>> 2;
                                      num62 = buf8 - 2;
                                      num61 = num56;
                                      tmp37 = avail_out;
                                      tmp39 = buf8;
                                      tmp38 = buf8;
                                    }
                                  } else if (2 === buf8) {
                                    state.mode = 17;
                                  } else if (3 === buf8) {
                                    state.msg = "invalid block type";
                                    state.mode = 30;
                                  }
                                  hold = buf8 >>> 2;
                                  bits = buf8 - 2;
                                  diff8 = buf8;
                                  next_in = buf8;
                                  continue;
                                } else {
                                  num61 = num56;
                                  tmp37 = avail_out;
                                  num62 = buf8;
                                  num63 = buf8;
                                  tmp38 = buf8;
                                  tmp39 = buf8;
                                  while (0 !== buf8) {
                                    buf8 = buf8 - 1;
                                    buf8 = +buf8;
                                    buf8 = buf8 + 1;
                                    buf8 = buf8 + (input[buf8] << buf8);
                                    buf8 = buf8 + 8;
                                    break;
                                  }
                                }
                              }
                              num61 = num56;
                              tmp37 = avail_out;
                              num62 = buf8;
                              num63 = buf8;
                              tmp39 = buf8;
                              tmp38 = buf8;
                              if (5 !== arg1) {
                                num61 = num56;
                                tmp37 = avail_out;
                                num62 = buf8;
                                num63 = buf8;
                                tmp39 = buf8;
                                tmp38 = buf8;
                              }
                            }
                            if (0 === state.havedict) {
                              state.next_out = next_out;
                              state.avail_out = diff2;
                              state.next_in = buf8;
                              state.avail_in = buf8;
                              state.hold = num76;
                              state.bits = num75;
                              return 2;
                            } else {
                              state.check = 1;
                              state.adler = 1;
                              state.mode = 12;
                              buf8 = num75;
                              buf8 = num76;
                            }
                          }
                        }
                      }
                    }
                    if (2048 & state.flags) {
                      num = 0;
                      num61 = num56;
                      tmp37 = avail_out;
                      num62 = buf8;
                      num63 = buf8;
                      tmp38 = buf8;
                      tmp39 = buf8;
                      if (0 !== buf8) {
                        while (true) {
                          buf8 = input[buf8 + num];
                          let head = state.head;
                          buf8 = num;
                          if (head) {
                            head = buf8;
                          }
                          if (head) {
                            head = state.length < 65536;
                          }
                          if (head) {
                            let head2 = state.head;
                            let _String = String;
                            head2.name = head2.name + String.fromCharCode(buf8);
                          }
                          buf8 = num + 1;
                          if (!buf8) {
                            break;
                          } else {
                            num = buf8;
                            if (buf8 >= buf8) {
                              break;
                            }
                          }
                        }
                        if (512 & state.flags) {
                          buf8 = require;
                          buf8 = dependencyMap;
                          let check8 = state.check;
                          buf8 = check8;
                          buf8 = input;
                          state.check = _mod13552(check8, tmp16, buf8, buf8);
                        }
                        buf8 = buf8 - buf8;
                        buf8 = buf8 + buf8;
                        num61 = num56;
                        tmp37 = avail_out;
                        num62 = buf8;
                        num63 = buf8;
                        tmp39 = buf8;
                        tmp38 = buf8;
                      }
                    } else if (state.head) {
                      state.head.name = null;
                    }
                    state.length = 0;
                    state.mode = 8;
                  }
                }
                if (1024 & state.flags) {
                  buf8 = num99;
                  buf8 = num;
                  if (num99 < 16) {
                    num99 = buf8;
                    num61 = num56;
                    tmp37 = avail_out;
                    num62 = buf8;
                    num63 = buf8;
                    tmp38 = buf8;
                    tmp39 = buf8;
                    while (0 !== buf8) {
                      buf8 = buf8 - 1;
                      buf8 = +buf8;
                      buf8 = buf8 + 1;
                      buf8 = buf8 + (input[buf8] << num99);
                      buf8 = num99 + 8;
                      num = buf8;
                      continue;
                    }
                  }
                  state.length = num;
                  if (state.head) {
                    state.head.extra_len = num;
                  }
                  num = 0;
                  num = 0;
                  if (512 & state.flags) {
                    buf8[0] = 255 & num;
                    buf8[1] = num >>> 8 & 255;
                    buf8 = require;
                    buf8 = dependencyMap;
                    let check6 = state.check;
                    buf8 = check6;
                    num = 2;
                    num = 0;
                    num = _mod13552(check6, tmp2, 2, 0);
                    state.check = num;
                    num = 0;
                    num = 0;
                  }
                } else {
                  num = num99;
                  if (state.head) {
                    state.head.extra = null;
                    num = num99;
                  }
                }
                state.mode = 6;
                buf8 = num;
                buf8 = num;
              }
              buf8 = num96;
              buf8 = num96;
              if (num95 >= 16) {
                if (state.head) {
                  state.head.xflags = 255 & buf8;
                  state.head.os = buf8 >> 8;
                }
                if (512 & state.flags) {
                  buf8[0] = 255 & buf8;
                  buf8[1] = buf8 >>> 8 & 255;
                  buf8 = require;
                  buf8 = dependencyMap;
                  let check5 = state.check;
                  buf8 = check5;
                  let num97 = 2;
                  let num98 = 0;
                  state.check = _mod13552(check5, tmp2, 2, 0);
                }
                state.mode = 5;
                num99 = 0;
                num = 0;
              } else {
                buf8 = num95;
                num61 = num56;
                tmp37 = avail_out;
                num62 = num95;
                num63 = buf8;
                tmp38 = buf8;
                tmp39 = buf8;
                while (0 !== buf8) {
                  buf8 = buf8 - 1;
                  buf8 = +buf8;
                  buf8 = buf8 + 1;
                  buf8 = buf8 + (input[buf8] << num95);
                  num95 = num95 + 8;
                  break;
                }
              }
            }
            buf8 = num92;
            buf8 = num92;
            if (num91 >= 32) {
              if (state.head) {
                state.head.time = buf8;
              }
              if (512 & state.flags) {
                buf8[0] = 255 & buf8;
                buf8[1] = buf8 >>> 8 & 255;
                buf8[2] = buf8 >>> 16 & 255;
                buf8[3] = buf8 >>> 24 & 255;
                buf8 = require;
                buf8 = dependencyMap;
                let check4 = state.check;
                buf8 = check4;
                let num93 = 4;
                let num94 = 0;
                state.check = _mod13552(check4, tmp2, 4, 0);
              }
              state.mode = 4;
              num95 = 0;
              num96 = 0;
            } else {
              buf8 = num91;
              num61 = num56;
              tmp37 = avail_out;
              num62 = num91;
              num63 = buf8;
              tmp38 = buf8;
              tmp39 = buf8;
              while (0 !== buf8) {
                buf8 = buf8 - 1;
                buf8 = +buf8;
                buf8 = buf8 + 1;
                buf8 = buf8 + (input[buf8] << num91);
                num91 = num91 + 8;
                break;
              }
            }
          }
          state.next_out = next_out;
          state.avail_out = diff2;
          state.next_in = tmp38;
          state.avail_in = tmp39;
          state.hold = num63;
          state.bits = num62;
          if (state.wsize) {
            buf8 = updatewindow;
            let output3 = state.output;
            buf8 = output3;
            num = 0;
            num = 0;
            buf8 = state;
            buf8 = updatewindow(state, output3, state.next_out, tmp37 - state.avail_out);
          }
          buf8 = avail_in - state.avail_in;
          buf8 = tmp37 - state.avail_out;
          state.total_in = state.total_in + buf8;
          state.total_out = state.total_out + buf8;
          state.total = state.total + buf8;
          buf8 = state.wrap && buf8;
          if (!buf8) {
            num = 0;
            if (state.last) {
              num = 64;
            }
            num = 0;
            buf8 = state.bits + num;
            if (state.mode === 12) {
              num = 128;
            }
            if (20 === state.mode) {
              num = 256;
            } else {
              num = 0;
            }
            state.data_type = buf8 + num + num;
            buf8 = (0 === buf8 && 0 === buf8 || 4 === arg1) && 0 === num61;
            if (buf8) {
              num61 = -5;
            }
            return num61;
          } else {
            buf8 = require;
            let next_out3 = dependencyMap;
            if (state.flags) {
              let check12 = state.check;
              buf8 = check12;
              buf8 = buf8(13552);
              next_out3 = state.next_out;
              buf8 = output;
              buf8 = buf8(check12, tmp15, buf8, next_out3 - buf8);
            } else {
              let check11 = state.check;
              buf8 = check11;
              buf8 = output;
              buf8 = buf8(13551)(check11, tmp15, buf8, state.next_out - buf8);
            }
            state.check = buf8;
            state.adler = buf8;
          }
        }
        num = 29;
        tmp69 = avail_out;
        tmp65 = bits;
        tmp66 = hold;
        tmp67 = diff8;
        tmp68 = next_in;
        if (29 !== mode) {
          num61 = -3;
          tmp37 = avail_out;
          num62 = bits;
          num63 = hold;
          tmp39 = diff8;
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
arg5.inflateEnd = function inflateEnd(state) {
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
arg5.inflateGetHeader = function inflateGetHeader(strm, header) {
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
arg5.inflateSetDictionary = function inflateSetDictionary(state, output3) {
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
arg5.inflateInfo = "pako inflate (from Nodeca project)";