// _runtime/13654_flush_block_only.js
import assign from "13651_assign.js";
import _mod13655 from "metro/13655__.js";
import StaticTreeDesc from "13656_StaticTreeDesc.js";
import adler32 from "13657_adler32.js";
import _mod13658 from "metro/13658__.js";

require = arg1;
const dependencyMap = arg6;
function flush_block_only(state8, arg1) {
  let num = -1;
  if (state8.block_start >= 0) {
    num = state8.block_start;
  }
  StaticTreeDesc._tr_flush_block(state8, num, state8.strstart - state8.block_start, arg1);
  ({ strstart: state8.block_start, strm } = state8);
  const state = strm.state;
  let avail_out = state.pending;
  if (avail_out > strm.avail_out) {
    avail_out = strm.avail_out;
  }
  if (0 !== avail_out) {
    const tmpResult = assign;
    tmpResult.arraySet(strm.output, state.pending_buf, state.pending_out, avail_out, strm.next_out);
    strm.next_out = strm.next_out + avail_out;
    state.pending_out = state.pending_out + avail_out;
    strm.total_out = strm.total_out + avail_out;
    strm.avail_out = strm.avail_out - avail_out;
    state.pending = state.pending - avail_out;
    if (0 === state.pending) {
      state.pending_out = 0;
    }
  }
}
function longest_match(strstart, arg1) {
  ({ max_chain_length, strstart, prev_length, nice_match } = strstart);
  let num = 0;
  if (strstart.strstart > strstart.w_size - 262) {
    num = strstart.strstart - (strstart.w_size - 262);
  }
  const _window = strstart.window;
  const sum = strstart.strstart + 258;
  let tmp4 = max_chain_length;
  ({ w_mask, prev } = strstart);
  if (strstart.prev_length >= strstart.good_match) {
    tmp4 = max_chain_length >> 2;
  }
  const diff = sum - 258;
  let tmp6 = tmp3;
  let tmp7 = tmp2;
  let tmp8 = prev_length;
  let tmp9 = strstart;
  let diff2 = tmp4;
  let tmp11 = arg1;
  if (nice_match > strstart.lookahead) {
    nice_match = strstart.lookahead;
    tmp6 = tmp3;
    tmp7 = tmp2;
    tmp8 = prev_length;
    tmp9 = strstart;
    diff2 = tmp4;
    tmp11 = arg1;
  }
  while (true) {
    let tmp12 = tmp6;
    let tmp13 = tmp7;
    let tmp14 = nice_match;
    let tmp15 = tmp8;
    let tmp16 = tmp9;
    let tmp17 = diff2;
    let tmp18 = tmp11;
    let tmp19 = tmp6;
    let tmp20 = tmp7;
    let tmp21 = tmp8;
    let tmp22 = tmp9;
    if (_window[tmp11 + tmp8] === tmp6) {
      tmp19 = tmp6;
      tmp20 = tmp7;
      tmp21 = tmp8;
      tmp22 = tmp9;
      if (_window[tmp11 + tmp8 - 1] === tmp7) {
        tmp19 = tmp6;
        tmp20 = tmp7;
        tmp21 = tmp8;
        tmp22 = tmp9;
        if (_window[tmp11] === _window[tmp9]) {
          let sum1 = tmp11 + 1;
          tmp19 = tmp6;
          tmp20 = tmp7;
          tmp21 = tmp8;
          tmp22 = tmp9;
          if (_window[sum1] === _window[tmp9 + 1]) {
            let sum2 = tmp9 + 2;
            let sum3 = sum1 + 1;
            let sum4 = sum2 + 1;
            let sum5 = sum3 + 1;
            let tmp25 = sum4;
            while (_window[sum4] === _window[sum5]) {
              let sum6 = sum4 + 1;
              let sum7 = sum5 + 1;
              tmp25 = sum6;
              if (_window[sum6] !== _window[sum7]) {
                break;
              } else {
                let sum8 = sum6 + 1;
                let sum9 = sum7 + 1;
                tmp25 = sum8;
                if (_window[sum8] !== _window[sum9]) {
                  break;
                } else {
                  let sum10 = sum8 + 1;
                  let sum11 = sum9 + 1;
                  tmp25 = sum10;
                  if (_window[sum10] !== _window[sum11]) {
                    break;
                  } else {
                    let sum12 = sum10 + 1;
                    let sum13 = sum11 + 1;
                    tmp25 = sum12;
                    if (_window[sum12] !== _window[sum13]) {
                      break;
                    } else {
                      let sum14 = sum12 + 1;
                      let sum15 = sum13 + 1;
                      tmp25 = sum14;
                      if (_window[sum14] !== _window[sum15]) {
                        break;
                      } else {
                        let sum16 = sum14 + 1;
                        let sum17 = sum15 + 1;
                        tmp25 = sum16;
                        if (_window[sum16] !== _window[sum17]) {
                          break;
                        } else {
                          let sum18 = sum16 + 1;
                          let sum19 = sum17 + 1;
                          tmp25 = sum18;
                          if (_window[sum18] !== _window[sum19]) {
                            break;
                          } else {
                            sum2 = sum18;
                            sum3 = sum19;
                            tmp25 = sum18;
                            if (sum18 >= sum) {
                              break;
                            }
                          }
                        }
                      }
                    }
                  }
                }
              }
            }
            let diff1 = 258 - (sum - tmp25);
            tmp19 = tmp6;
            tmp20 = tmp7;
            tmp21 = tmp8;
            tmp22 = diff;
            if (diff1 > tmp8) {
              strstart.match_start = tmp11;
              let lookahead = diff1;
              if (diff1 >= nice_match) {
                break;
              } else {
                let sum20 = diff + diff1;
                tmp20 = _window[sum20 - 1];
                tmp19 = _window[sum20];
                tmp21 = diff1;
                tmp22 = diff;
              }
            }
            if (lookahead > strstart.lookahead) {
              lookahead = strstart.lookahead;
            }
            return lookahead;
          }
        }
      }
    }
    let tmp38 = prev[tmp11 & w_mask];
    lookahead = tmp21;
    if (tmp38 <= num) {
      break;
    } else {
      diff2 = diff2 - 1;
      tmp6 = tmp19;
      tmp7 = tmp20;
      tmp8 = tmp21;
      tmp9 = tmp22;
      tmp11 = tmp38;
      lookahead = tmp21;
      if (0 == diff2) {
        break;
      }
    }
  }
}
function fill_window(state) {
  const w_size = state.w_size;
  while (true) {
    let diff = state.window_size - state.lookahead - state.strstart;
    let sum = diff;
    if (state.strstart >= w_size + (w_size - 262)) {
      let tmp23 = require;
      let tmp24 = dependencyMap;
      let obj = assign;
      let tmp25 = obj;
      let tmp26 = w_size;
      let tmp27 = w_size;
      let num4 = 0;
      let arraySetResult = obj.arraySet(state.window, state.window, w_size, w_size, 0);
      state.match_start = state.match_start - w_size;
      state.strstart = state.strstart - w_size;
      state.block_start = state.block_start - w_size;
      let hash_size = state.hash_size;
      let tmp6 = hash_size;
      do {
        let diff1 = tmp6 - 1;
        let tmp4 = state.head[diff1];
        let tmp5 = hash_size;
        let num = 0;
        if (tmp4 >= w_size) {
          num = tmp4 - w_size;
        }
        state.head[diff1] = num;
        hash_size = hash_size - 1;
        tmp6 = diff1;
        let diff3 = w_size;
        let tmp8 = w_size;
      } while (hash_size);
      do {
        let diff2 = tmp8 - 1;
        let tmp10 = state.prev[diff2];
        let tmp11 = diff3;
        let num2 = 0;
        if (tmp10 >= w_size) {
          num2 = tmp10 - w_size;
        }
        state.prev[diff2] = num2;
        diff3 = diff3 - 1;
        tmp8 = diff2;
      } while (diff3);
      sum = diff + w_size;
    }
    if (0 === state.strm.avail_in) {
      break;
    } else {
      ({ strm, window: _window } = state);
      let sum1 = state.strstart + state.lookahead;
      let avail_in = strm.avail_in;
      if (avail_in > sum) {
        avail_in = sum;
      }
      let num3 = 0;
      if (0 === avail_in) {
        state.lookahead = state.lookahead;
        if (state.lookahead + state.insert >= 3) {
          let diff4 = state.strstart - state.insert;
          state.ins_h = state.window[diff4];
          state.ins_h = ((state.ins_h << state.hash_shift) ^ state.window[diff4 + 1]) & state.hash_mask;
          if (state.insert) {
            state.ins_h = ((state.ins_h << state.hash_shift) ^ state.window[diff4 + 3 - 1]) & state.hash_mask;
            state.prev[diff4 & state.w_mask] = state.head[state.ins_h];
            state.head[state.ins_h] = diff4;
            let sum2 = diff4 + 1;
            state.insert = state.insert - 1;
            if (state.lookahead + state.insert >= 3) {
              let tmp22 = sum2;
              while (state.insert) {
                state.ins_h = ((state.ins_h << state.hash_shift) ^ state.window[sum2 + 3 - 1]) & state.hash_mask;
                state.prev[sum2 & state.w_mask] = state.head[state.ins_h];
                state.head[state.ins_h] = sum2;
                sum2 = sum2 + 1;
                state.insert = state.insert - 1;
                if (state.lookahead + state.insert < 3) {
                  break;
                }
              }
            }
          }
        }
        if (state.lookahead >= 262) {
          break;
        } else if (0 === state.strm.avail_in) {
          break;
        }
      } else {
        strm.avail_in = strm.avail_in - avail_in;
        let tmp15 = require;
        let sum3 = dependencyMap;
        let obj2 = assign;
        let tmp30 = obj2;
        let tmp31 = _window;
        let tmp32 = avail_in;
        let tmp33 = sum1;
        arraySetResult = obj2.arraySet(_window, strm.input, strm.next_in, avail_in, sum1);
        if (1 === strm.state.wrap) {
          tmp15 = tmp15(13657);
          let tmp16 = _window;
          let tmp17 = avail_in;
          let tmp18 = sum1;
          strm.adler = tmp15(strm.adler, _window, avail_in, sum1);
        } else if (2 === strm.state.wrap) {
          let tmp12 = _window;
          let tmp13 = avail_in;
          let tmp14 = sum1;
          strm.adler = tmp15(13658)(strm.adler, _window, avail_in, sum1);
        }
        strm.next_in = strm.next_in + avail_in;
        sum3 = strm.total_in + avail_in;
        strm.total_in = sum3;
        let tmp20 = avail_in;
      }
    }
  }
}
function deflate_fast(lookahead) {
  while (true) {
    if (lookahead.lookahead < 262) {
      let tmp = fill_window;
      let tmp2 = fill_window(lookahead);
      if (lookahead.lookahead < 262) {
        if (0 === arg1) {
          break;
        }
      }
      if (0 === lookahead.lookahead) {
        let num2 = 2;
        let num3 = 2;
        if (lookahead.strstart < 2) {
          num3 = lookahead.strstart;
        }
        lookahead.insert = num3;
        let num4 = 4;
        if (4 === arg1) {
          let tmp17 = flush_block_only;
          let flag = true;
          let tmp18 = flush_block_only(lookahead, true);
          if (0 === lookahead.strm.avail_out) {
            num4 = 3;
          }
          let num5 = num4;
        } else {
          num5 = 2;
          if (lookahead.last_lit) {
            let tmp15 = flush_block_only;
            let tmp16 = flush_block_only(lookahead, false);
            num5 = 2;
            if (0 === lookahead.strm.avail_out) {
              num5 = 1;
            }
          }
        }
        return num5;
      }
    }
    let num = 0;
    if (lookahead.lookahead >= 3) {
      lookahead.ins_h =
        ((lookahead.ins_h << lookahead.hash_shift) ^ lookahead.window[lookahead.strstart + 3 - 1]) &
        lookahead.hash_mask;
      let tmp3 = lookahead.head[lookahead.ins_h];
      lookahead.prev[lookahead.strstart & lookahead.w_mask] = tmp3;
      lookahead.head[lookahead.ins_h] = lookahead.strstart;
      num = tmp3;
    }
    let tmp4 = 0 !== num && lookahead.strstart - num <= lookahead.w_size - 262;
    if (tmp4) {
      let tmp5 = longest_match;
      lookahead.match_length = longest_match(lookahead, num);
    }
    if (lookahead.match_length >= 3) {
      let tmp9 = require;
      let tmp10 = dependencyMap;
      let obj2 = StaticTreeDesc;
      let _tr_tallyResult = obj2._tr_tally(
        lookahead,
        lookahead.strstart - lookahead.match_start,
        lookahead.match_length - 3,
      );
      lookahead.lookahead = lookahead.lookahead - lookahead.match_length;
      if (lookahead.match_length <= lookahead.max_lazy_match) {
        if (lookahead.lookahead >= 3) {
          lookahead.match_length = lookahead.match_length - 1;
          do {
            lookahead.strstart = lookahead.strstart + 1;
            lookahead.ins_h =
              ((lookahead.ins_h << lookahead.hash_shift) ^ lookahead.window[lookahead.strstart + 3 - 1]) &
              lookahead.hash_mask;
            lookahead.prev[lookahead.strstart & lookahead.w_mask] = lookahead.head[lookahead.ins_h];
            lookahead.head[lookahead.ins_h] = lookahead.strstart;
            diff = lookahead.match_length - 1;
            lookahead.match_length = diff;
          } while (0 != diff);
          lookahead.strstart = lookahead.strstart + 1;
          let _tr_tallyResult1 = _tr_tallyResult;
        }
      }
      lookahead.strstart = lookahead.strstart + lookahead.match_length;
      lookahead.match_length = 0;
      lookahead.ins_h = lookahead.window[lookahead.strstart];
      lookahead.ins_h =
        ((lookahead.ins_h << lookahead.hash_shift) ^ lookahead.window[lookahead.strstart + 1]) & lookahead.hash_mask;
      _tr_tallyResult1 = _tr_tallyResult;
    } else {
      let tmp6 = require;
      let tmp7 = dependencyMap;
      let obj = StaticTreeDesc;
      _tr_tallyResult1 = obj._tr_tally(lookahead, 0, lookahead.window[lookahead.strstart]);
      lookahead.lookahead = lookahead.lookahead - 1;
      lookahead.strstart = lookahead.strstart + 1;
    }
    if (!_tr_tallyResult1) {
      continue;
    } else {
      let tmp13 = flush_block_only;
      let tmp14 = flush_block_only(lookahead, false);
      if (0 !== lookahead.strm.avail_out) {
        continue;
      } else {
        return 1;
      }
    }
    continue;
  }
  return 1;
}
function deflate_slow(lookahead) {
  while (true) {
    if (lookahead.lookahead < 262) {
      let tmp = fill_window;
      let tmp2 = fill_window(lookahead);
      if (lookahead.lookahead < 262) {
        if (0 === arg1) {
          break;
        }
      }
      if (0 === lookahead.lookahead) {
        if (lookahead.match_available) {
          let tmp21 = require;
          let tmp22 = dependencyMap;
          let obj3 = StaticTreeDesc;
          let _tr_tallyResult = obj3._tr_tally(lookahead, 0, lookahead.window[lookahead.strstart - 1]);
          lookahead.match_available = 0;
        }
        let num2 = 2;
        if (lookahead.strstart < 2) {
          num2 = lookahead.strstart;
        }
        lookahead.insert = num2;
        let num3 = 4;
        if (4 === arg1) {
          let tmp26 = flush_block_only;
          let flag = true;
          let tmp27 = flush_block_only(lookahead, true);
          if (0 === lookahead.strm.avail_out) {
            num3 = 3;
          }
          let num4 = num3;
        } else {
          num4 = 2;
          if (lookahead.last_lit) {
            let tmp24 = flush_block_only;
            let tmp25 = flush_block_only(lookahead, false);
            num4 = 2;
            if (0 === lookahead.strm.avail_out) {
              num4 = 1;
            }
          }
        }
        return num4;
      }
    }
    let num = 0;
    if (lookahead.lookahead >= 3) {
      lookahead.ins_h =
        ((lookahead.ins_h << lookahead.hash_shift) ^ lookahead.window[lookahead.strstart + 3 - 1]) &
        lookahead.hash_mask;
      let tmp3 = lookahead.head[lookahead.ins_h];
      lookahead.prev[lookahead.strstart & lookahead.w_mask] = tmp3;
      lookahead.head[lookahead.ins_h] = lookahead.strstart;
      num = tmp3;
    }
    ({ match_length: lookahead.prev_length, match_start: lookahead.prev_match } = lookahead);
    lookahead.match_length = 2;
    let tmp4 =
      0 !== num &&
      lookahead.prev_length < lookahead.max_lazy_match &&
      lookahead.strstart - num <= lookahead.w_size - 262;
    if (tmp4) {
      let tmp5 = longest_match;
      lookahead.match_length = longest_match(lookahead, num);
      let tmp6 = lookahead.match_length <= 5;
      if (tmp6) {
        let tmp7 = 1 === lookahead.strategy;
        if (!tmp7) {
          let tmp8 = 3 === lookahead.match_length && lookahead.strstart - lookahead.match_start > 4096;
          tmp7 = tmp8;
        }
        tmp6 = tmp7;
      }
      if (tmp6) {
        lookahead.match_length = 2;
      }
    }
    if (lookahead.prev_length >= 3) {
      if (lookahead.match_length <= lookahead.prev_length) {
        let tmp14 = require;
        let tmp15 = dependencyMap;
        let diff = lookahead.strstart + lookahead.lookahead - 3;
        let obj2 = StaticTreeDesc;
        lookahead.lookahead = lookahead.lookahead - (lookahead.prev_length - 1);
        lookahead.prev_length = lookahead.prev_length - 2;
        let _tr_tallyResult1 = obj2._tr_tally(
          lookahead,
          lookahead.strstart - 1 - lookahead.prev_match,
          lookahead.prev_length - 3,
        );
        do {
          let sum = lookahead.strstart + 1;
          lookahead.strstart = sum;
          if (sum <= diff) {
            lookahead.ins_h =
              ((lookahead.ins_h << lookahead.hash_shift) ^ lookahead.window[lookahead.strstart + 3 - 1]) &
              lookahead.hash_mask;
            lookahead.prev[lookahead.strstart & lookahead.w_mask] = lookahead.head[lookahead.ins_h];
            lookahead.head[lookahead.ins_h] = lookahead.strstart;
          }
          diff1 = lookahead.prev_length - 1;
          lookahead.prev_length = diff1;
        } while (0 != diff1);
        lookahead.match_available = 0;
        lookahead.match_length = 2;
        lookahead.strstart = lookahead.strstart + 1;
        if (!_tr_tallyResult1) {
          continue;
        } else {
          let tmp19 = flush_block_only;
          let tmp20 = flush_block_only(lookahead, false);
          if (0 !== lookahead.strm.avail_out) {
            continue;
          } else {
            return 1;
          }
        }
        continue;
      }
    }
    if (lookahead.match_available) {
      let tmp9 = require;
      let tmp10 = dependencyMap;
      let obj = StaticTreeDesc;
      if (obj._tr_tally(lookahead, 0, lookahead.window[lookahead.strstart - 1])) {
        let tmp11 = flush_block_only;
        let tmp12 = flush_block_only(lookahead, false);
      }
      lookahead.strstart = lookahead.strstart + 1;
      lookahead.lookahead = lookahead.lookahead - 1;
      if (0 !== lookahead.strm.avail_out) {
        continue;
      } else {
        return 1;
      }
    } else {
      lookahead.match_available = 1;
      lookahead.strstart = lookahead.strstart + 1;
      lookahead.lookahead = lookahead.lookahead - 1;
      continue;
    }
    continue;
  }
  return 1;
}
class Config {
  constructor(arg0, arg1, arg2, arg3, arg4) {
    return;
  }
}
function DeflateState() {
  const obj = {
    strm: null,
    status: 0,
    pending_buf: null,
    pending_buf_size: 0,
    pending_out: 0,
    pending: 0,
    wrap: 0,
    gzhead: null,
    gzindex: 0,
    method: 8,
    last_flush: -1,
    w_size: 0,
    w_bits: 0,
    w_mask: 0,
    window: null,
    window_size: 0,
    prev: null,
    head: null,
    ins_h: 0,
    hash_size: 0,
    hash_bits: 0,
    hash_mask: 0,
    hash_shift: 0,
    block_start: 0,
    match_length: 0,
    prev_match: 0,
    match_available: 0,
    strstart: 0,
    match_start: 0,
    lookahead: 0,
    prev_length: 0,
    max_chain_length: 0,
    max_lazy_match: 0,
    level: 0,
    strategy: 0,
    good_match: 0,
    nice_match: 0,
  };
  const buf16 = new assign.Buf16(1146);
  obj.dyn_ltree = buf16;
  const buf161 = new assign.Buf16(122);
  obj.dyn_dtree = buf161;
  const buf162 = new assign.Buf16(78);
  obj.bl_tree = buf162;
  const dyn_ltree = obj.dyn_ltree;
  let diff = dyn_ltree.length - 1;
  if (diff >= 0) {
    do {
      dyn_ltree[diff] = 0;
      diff = diff - 1;
    } while (diff >= 0);
  }
  const dyn_dtree = obj.dyn_dtree;
  let diff1 = dyn_dtree.length - 1;
  if (diff1 >= 0) {
    do {
      dyn_dtree[diff1] = 0;
      diff1 = diff1 - 1;
    } while (diff1 >= 0);
  }
  const bl_tree = obj.bl_tree;
  let diff2 = bl_tree.length - 1;
  if (diff2 >= 0) {
    do {
      bl_tree[diff2] = 0;
      diff2 = diff2 - 1;
    } while (diff2 >= 0);
  }
  obj.l_desc = null;
  obj.d_desc = null;
  obj.bl_desc = null;
  const buf163 = new tmp(13651).Buf16(16);
  obj.bl_count = buf163;
  const buf164 = new tmp(13651).Buf16(573);
  obj.heap = buf164;
  const heap = obj.heap;
  let diff3 = heap.length - 1;
  if (diff3 >= 0) {
    do {
      heap[diff3] = 0;
      diff3 = diff3 - 1;
    } while (diff3 >= 0);
  }
  obj.heap_len = 0;
  obj.heap_max = 0;
  const buf165 = new tmp(13651).Buf16(573);
  obj.depth = buf165;
  const depth = obj.depth;
  let diff4 = depth.length - 1;
  if (diff4 >= 0) {
    do {
      depth[diff4] = 0;
      diff4 = diff4 - 1;
    } while (diff4 >= 0);
  }
  obj.l_buf = 0;
  obj.lit_bufsize = 0;
  obj.last_lit = 0;
  obj.d_buf = 0;
  obj.opt_len = 0;
  obj.static_len = 0;
  obj.matches = 0;
  obj.insert = 0;
  obj.bi_buf = 0;
  obj.bi_valid = 0;
}
function deflateReset(state) {
  if (state) {
    if (state.state) {
      state.total_out = 0;
      state.total_in = 0;
      state.data_type = 2;
      state = state.state;
      state.pending = 0;
      state.pending_out = 0;
      if (state.wrap < 0) {
        state.wrap = -state.wrap;
      }
      let num4 = 42;
      if (!state.wrap) {
        num4 = 113;
      }
      state.status = num4;
      let num5 = 1;
      if (2 === state.wrap) {
        num5 = 0;
      }
      state.adler = num5;
      state.last_flush = 0;
      StaticTreeDesc._tr_init(state);
      let num = 0;
      const obj = StaticTreeDesc;
    }
    if (0 === num) {
      const state2 = state.state;
      state2.window_size = 2 * state2.w_size;
      const head = state2.head;
      let diff = head.length - 1;
      if (diff >= 0) {
        do {
          head[diff] = 0;
          diff = diff - 1;
        } while (diff >= 0);
      }
      state2.max_lazy_match = items[state2.level].max_lazy;
      state2.good_match = items[state2.level].good_length;
      state2.nice_match = items[state2.level].nice_length;
      state2.max_chain_length = items[state2.level].max_chain;
      state2.strstart = 0;
      state2.block_start = 0;
      state2.lookahead = 0;
      state2.insert = 0;
      state2.prev_length = 2;
      state2.match_length = 2;
      state2.match_available = 0;
      state2.ins_h = 0;
    }
    return num;
  }
  num = -2;
  state.msg = _mod13655[-2];
}
function deflateInit2(strm, level, method, windowBits, memLevel, strategy) {
  if (strm) {
    let num2 = level;
    if (-1 === level) {
      num2 = 6;
    }
    if (windowBits < 0) {
      let num7 = -windowBits;
      let num6 = 0;
    } else {
      num6 = 1;
      num7 = windowBits;
      if (windowBits > 15) {
        num7 = windowBits - 16;
        num6 = 2;
      }
    }
    if (memLevel >= 1) {
      if (memLevel <= 9) {
        if (8 === method) {
          if (num7 >= 8) {
            if (num7 <= 15) {
              if (num2 >= 0) {
                if (num2 <= 9) {
                  if (strategy >= 0) {
                    if (strategy <= 4) {
                      if (8 === num7) {
                        num7 = 9;
                      }
                      const obj = Object.create(DeflateState.prototype);
                      new DeflateState();
                      strm.state = obj;
                      obj.strm = strm;
                      obj.wrap = num6;
                      obj.gzhead = null;
                      obj.w_bits = num7;
                      obj.w_size = 1 << obj.w_bits;
                      obj.w_mask = obj.w_size - 1;
                      obj.hash_bits = memLevel + 7;
                      obj.hash_size = 1 << obj.hash_bits;
                      obj.hash_mask = obj.hash_size - 1;
                      obj.hash_shift = ~~(obj.hash_bits + 3 - 1) / 3;
                      const buf8 = new assign.Buf8(2 * obj.w_size);
                      obj.window = buf8;
                      const buf16 = new assign.Buf16(obj.hash_size);
                      obj.head = buf16;
                      const buf161 = new assign.Buf16(obj.w_size);
                      obj.prev = buf161;
                      obj.lit_bufsize = 1 << (memLevel + 6);
                      obj.pending_buf_size = 4 * obj.lit_bufsize;
                      const buf81 = new assign.Buf8(obj.pending_buf_size);
                      obj.pending_buf = buf81;
                      obj.d_buf = obj.lit_bufsize;
                      obj.l_buf = 3 * obj.lit_bufsize;
                      obj.level = num2;
                      obj.strategy = strategy;
                      obj.method = method;
                      return deflateReset(strm);
                    }
                  }
                }
              }
            }
          }
        }
      }
    }
    strm.msg = _mod13655[-2];
    return -2;
  } else {
    return -2;
  }
}
let obj = Object.create(Config.prototype);
obj = {
  good_length: 0,
  max_lazy: 0,
  nice_length: 0,
  max_chain: 0,
  func: function deflate_stored(pending_buf_size) {
    let num = 65535;
    if (pending_buf_size.pending_buf_size - 5 < 65535) {
      num = pending_buf_size.pending_buf_size - 5;
    }
    while (true) {
      let tmp = num;
      if (pending_buf_size.lookahead <= 1) {
        let tmp2 = fill_window;
        let tmp3 = fill_window(pending_buf_size);
        if (0 === pending_buf_size.lookahead) {
          if (0 === arg1) {
            break;
          }
        }
        if (0 === pending_buf_size.lookahead) {
          pending_buf_size.insert = 0;
          let num2 = 4;
          if (4 === arg1) {
            let tmp9 = flush_block_only;
            let flag = true;
            let tmp10 = flush_block_only(pending_buf_size, true);
            if (0 === pending_buf_size.strm.avail_out) {
              num2 = 3;
            }
            let num3 = num2;
          } else {
            num3 = 1;
            if (pending_buf_size.strstart > pending_buf_size.block_start) {
              let tmp7 = flush_block_only;
              let tmp8 = flush_block_only(pending_buf_size, false);
              let avail_out = pending_buf_size.strm.avail_out;
              num3 = 1;
            }
          }
          return num3;
        }
      }
      pending_buf_size.strstart = pending_buf_size.strstart + pending_buf_size.lookahead;
      pending_buf_size.lookahead = 0;
      let sum = pending_buf_size.block_start + num;
      if (0 === pending_buf_size.strstart) {
        pending_buf_size.lookahead = pending_buf_size.strstart - sum;
        pending_buf_size.strstart = sum;
        let tmp5 = flush_block_only;
        let tmp6 = flush_block_only(pending_buf_size, false);
        if (0 === pending_buf_size.strm.avail_out) {
          return 1;
        }
      }
      if (pending_buf_size.strstart - pending_buf_size.block_start < pending_buf_size.w_size - 262) {
        continue;
      } else {
        let tmp11 = flush_block_only;
        let tmp12 = flush_block_only(pending_buf_size, false);
        num = tmp;
        if (0 !== pending_buf_size.strm.avail_out) {
          continue;
        } else {
          return 1;
        }
      }
      continue;
    }
    return 1;
  },
};
const items = [obj, , , , , , , , ,];
obj = Object.create(Config.prototype);
items[1] = { good_length: 4, max_lazy: 4, nice_length: 8, max_chain: 4, func: deflate_fast };
Object.create(Config.prototype);
items[2] = { good_length: 4, max_lazy: 5, nice_length: 16, max_chain: 8, func: deflate_fast };
Object.create(Config.prototype);
items[3] = { good_length: 4, max_lazy: 6, nice_length: 32, max_chain: 32, func: deflate_fast };
Object.create(Config.prototype);
items[4] = { good_length: 4, max_lazy: 4, nice_length: 16, max_chain: 16, func: deflate_slow };
Object.create(Config.prototype);
items[5] = { good_length: 8, max_lazy: 16, nice_length: 32, max_chain: 32, func: deflate_slow };
Object.create(Config.prototype);
items[6] = { good_length: 8, max_lazy: 16, nice_length: 128, max_chain: 128, func: deflate_slow };
Object.create(Config.prototype);
items[7] = { good_length: 8, max_lazy: 32, nice_length: 128, max_chain: 256, func: deflate_slow };
Object.create(Config.prototype);
items[8] = { good_length: 32, max_lazy: 128, nice_length: 258, max_chain: 1024, func: deflate_slow };
Object.create(Config.prototype);
items[9] = { good_length: 32, max_lazy: 258, nice_length: 258, max_chain: 4096, func: deflate_slow };
arg5.deflateInit = function deflateInit(strm, level) {
  return deflateInit2(strm, level, 8, 15, 8, 0);
};
arg5.deflateInit2 = deflateInit2;
arg5.deflateReset = deflateReset;
arg5.deflateResetKeep = function deflateResetKeep(state) {
  if (state) {
    if (state.state) {
      state.total_out = 0;
      state.total_in = 0;
      state.data_type = 2;
      state = state.state;
      state.pending = 0;
      state.pending_out = 0;
      if (state.wrap < 0) {
        state.wrap = -state.wrap;
      }
      let num4 = 42;
      if (!state.wrap) {
        num4 = 113;
      }
      state.status = num4;
      let num5 = 1;
      if (2 === state.wrap) {
        num5 = 0;
      }
      state.adler = num5;
      state.last_flush = 0;
      StaticTreeDesc._tr_init(state);
      let num = 0;
      const obj = StaticTreeDesc;
    }
    return num;
  }
  num = -2;
  state.msg = _mod13655[-2];
};
arg5.deflateSetHeader = function deflateSetHeader(strm, header) {
  let num = -2;
  let num2 = -2;
  if (strm) {
    num2 = num;
    if (strm.state) {
      if (2 === strm.state.wrap) {
        strm.state.gzhead = header;
        num = 0;
      }
      num2 = num;
    }
  }
  return num2;
};
arg5.deflate = function deflate(state, last_flush) {
  if (state) {
    if (state.state) {
      let diff = last_flush;
      if (last_flush <= 5) {
        if (last_flush >= 0) {
          const state8 = state.state;
          if (state.output) {
            if (state.input) {
              state8.strm = state;
              last_flush = state8.last_flush;
              state8.last_flush = last_flush;
              if (42 === state8.status) {
                if (2 === state8.wrap) {
                  state.adler = 0;
                  state8.pending = +state8.pending + 1;
                  state8.pending_buf[+state8.pending] = 31;
                  state8.pending = +state8.pending + 1;
                  state8.pending_buf[+state8.pending] = 139;
                  state8.pending = +state8.pending + 1;
                  state8.pending_buf[+state8.pending] = 8;
                  if (state8.gzhead) {
                    let num24 = 0;
                    if (state8.gzhead.text) {
                      num24 = 1;
                    }
                    let num25 = 0;
                    if (state8.gzhead.hcrc) {
                      num25 = 2;
                    }
                    let num26 = 0;
                    if (state8.gzhead.extra) {
                      num26 = 4;
                    }
                    let num27 = 0;
                    if (state8.gzhead.name) {
                      num27 = 8;
                    }
                    let num28 = 0;
                    if (state8.gzhead.comment) {
                      num28 = 16;
                    }
                    state8.pending = +state8.pending + 1;
                    state8.pending_buf[+state8.pending] = num24 + num25 + num26 + num27 + num28;
                    state8.pending = +state8.pending + 1;
                    state8.pending_buf[+state8.pending] = 255 & state8.gzhead.time;
                    state8.pending = +state8.pending + 1;
                    state8.pending_buf[+state8.pending] = (state8.gzhead.time >> 8) & 255;
                    state8.pending = +state8.pending + 1;
                    state8.pending_buf[+state8.pending] = (state8.gzhead.time >> 16) & 255;
                    state8.pending = +state8.pending + 1;
                    state8.pending_buf[+state8.pending] = (state8.gzhead.time >> 24) & 255;
                    let num33 = 2;
                    if (9 !== state8.level) {
                      if (state8.strategy >= 2) {
                        let num34 = 4;
                      } else {
                        num34 = 0;
                      }
                      num33 = num34;
                    }
                    state8.pending = +state8.pending + 1;
                    state8.pending_buf[+state8.pending] = num33;
                    state8.pending = +state8.pending + 1;
                    state8.pending_buf[+state8.pending] = 255 & state8.gzhead.os;
                    if (tmp24) {
                      state8.pending = +state8.pending + 1;
                      state8.pending_buf[+state8.pending] = 255 & state8.gzhead.extra.length;
                      state8.pending = +state8.pending + 1;
                      state8.pending_buf[+state8.pending] = (state8.gzhead.extra.length >> 8) & 255;
                    }
                    if (state8.gzhead.hcrc) {
                      state.adler = _mod13658(state.adler, state8.pending_buf, state8.pending, 0);
                    }
                    state8.gzindex = 0;
                    state8.status = 69;
                    tmp24 = state8.gzhead.extra && state8.gzhead.extra.length;
                  } else {
                    state8.pending = +state8.pending + 1;
                    state8.pending_buf[+state8.pending] = 0;
                    state8.pending = +state8.pending + 1;
                    state8.pending_buf[+state8.pending] = 0;
                    state8.pending = +state8.pending + 1;
                    state8.pending_buf[+state8.pending] = 0;
                    state8.pending = +state8.pending + 1;
                    state8.pending_buf[+state8.pending] = 0;
                    state8.pending = +state8.pending + 1;
                    state8.pending_buf[+state8.pending] = 0;
                    let num20 = 2;
                    if (9 !== state8.level) {
                      if (state8.strategy >= 2) {
                        let num21 = 4;
                      } else {
                        num21 = 0;
                      }
                      num20 = num21;
                    }
                    state8.pending = +state8.pending + 1;
                    state8.pending_buf[+state8.pending] = num20;
                    state8.pending = +state8.pending + 1;
                    state8.pending_buf[+state8.pending] = 3;
                    state8.status = 113;
                  }
                } else {
                  let num5 = 0;
                  diff = state8.w_bits - 8;
                  if (state8.strategy < 2) {
                    num5 = 0;
                    if (state8.level >= 2) {
                      let num7 = 1;
                      if (state8.level >= 6) {
                        let num8 = 3;
                        if (6 === state8.level) {
                          num8 = 2;
                        }
                        num7 = num8;
                      }
                      num5 = num7;
                    }
                  }
                  let tmp3 = tmp2;
                  if (0 !== state8.strstart) {
                    tmp3 = tmp2 | 32;
                  }
                  const sum = tmp3 + (31 - (tmp3 % 31));
                  state8.status = 113;
                  state8.pending = +state8.pending + 1;
                  state8.pending_buf[+state8.pending] = (sum >>> 8) & 255;
                  state8.pending = +state8.pending + 1;
                  state8.pending_buf[+state8.pending] = 255 & sum;
                  if (0 !== state8.strstart) {
                    diff = state.adler >>> 16;
                    diff = +state8.pending;
                    state8.pending = diff + 1;
                    state8.pending_buf[diff] = (diff >>> 8) & 255;
                    diff = +state8.pending;
                    state8.pending = diff + 1;
                    state8.pending_buf[diff] = 255 & diff;
                    diff = 65535 & state.adler;
                    diff = +state8.pending;
                    state8.pending = diff + 1;
                    state8.pending_buf[diff] = (diff >>> 8) & 255;
                    diff = +state8.pending;
                    state8.pending = diff + 1;
                    state8.pending_buf[diff] = 255 & diff;
                  }
                  state.adler = 1;
                }
              }
              if (69 === state8.status) {
                if (state8.gzhead.extra) {
                  const pending = state8.pending;
                  let pending2 = pending;
                  if (state8.gzindex < (65535 & state8.gzhead.extra.length)) {
                    if (state8.pending !== state8.pending_buf_size) {
                      state8.pending = +state8.pending + 1;
                      state8.pending_buf[+state8.pending] = 255 & state8.gzhead.extra[state8.gzindex];
                      state8.gzindex = state8.gzindex + 1;
                      pending2 = tmp33;
                      while (state8.gzindex < (65535 & state8.gzhead.extra.length)) {
                        if (state8.pending !== state8.pending_buf_size) {
                          continue;
                        } else {
                          let tmp36 = state8.gzhead.hcrc && state8.pending > tmp35;
                          if (tmp36) {
                            let tmp37 = require;
                            let tmp38 = dependencyMap;
                            let tmp39 = tmp35;
                            state.adler = _mod13658(state.adler, state8.pending_buf, state8.pending - tmp35, tmp35);
                          }
                          let state2 = state.state;
                          let avail_out2 = state2.pending;
                          if (avail_out2 > state.avail_out) {
                            avail_out2 = state.avail_out;
                          }
                          if (0 !== avail_out2) {
                            diff = require;
                            diff = dependencyMap;
                            let obj7 = assign;
                            diff = obj7;
                            diff = avail_out2;
                            diff = obj7.arraySet(
                              state.output,
                              state2.pending_buf,
                              state2.pending_out,
                              avail_out2,
                              state.next_out,
                            );
                            state.next_out = state.next_out + avail_out2;
                            state2.pending_out = state2.pending_out + avail_out2;
                            state.total_out = state.total_out + avail_out2;
                            state.avail_out = state.avail_out - avail_out2;
                            state2.pending = state2.pending - avail_out2;
                            if (0 === state2.pending) {
                              state2.pending_out = 0;
                            }
                          }
                          pending2 = state8.pending;
                          if (state8.pending === state8.pending_buf_size) {
                            break;
                          }
                        }
                        continue;
                      }
                    } else {
                      if (tmp29) {
                        state.adler = _mod13658(state.adler, state8.pending_buf, state8.pending - pending, pending);
                      }
                      state = state.state;
                      let avail_out = state.pending;
                      if (avail_out > state.avail_out) {
                        avail_out = state.avail_out;
                      }
                      if (0 !== avail_out) {
                        diff = require;
                        diff = dependencyMap;
                        const obj6 = assign;
                        diff = obj6;
                        diff = avail_out;
                        diff = obj6.arraySet(
                          state.output,
                          state.pending_buf,
                          state.pending_out,
                          avail_out,
                          state.next_out,
                        );
                        state.next_out = state.next_out + avail_out;
                        state.pending_out = state.pending_out + avail_out;
                        state.total_out = state.total_out + avail_out;
                        state.avail_out = state.avail_out - avail_out;
                        state.pending = state.pending - avail_out;
                        if (0 === state.pending) {
                          state.pending_out = 0;
                        }
                      }
                      pending2 = state8.pending;
                      tmp29 = state8.gzhead.hcrc && state8.pending > pending;
                    }
                  }
                  if (tmp40) {
                    state.adler = _mod13658(state.adler, state8.pending_buf, state8.pending - pending2, pending2);
                  }
                  if (state8.gzindex === state8.gzhead.extra.length) {
                    state8.gzindex = 0;
                    state8.status = 73;
                  }
                  tmp40 = state8.gzhead.hcrc && state8.pending > pending2;
                } else {
                  state8.status = 73;
                }
              }
              if (73 === state8.status) {
                if (state8.gzhead.name) {
                  let pending3 = state8.pending;
                  while (true) {
                    let tmp45 = pending3;
                    if (state8.pending !== state8.pending_buf_size) {
                      let num47 = 0;
                      if (state8.gzindex < state8.gzhead.name.length) {
                        let name = state8.gzhead.name;
                        let tmp50 = +state8.gzindex;
                        state8.gzindex = tmp50 + 1;
                        num47 = 255 & name.charCodeAt(tmp50);
                      }
                      let tmp51 = +state8.pending;
                      state8.pending = tmp51 + 1;
                      state8.pending_buf[tmp51] = num47;
                      let num46 = num47;
                      pending3 = tmp45;
                      let pending4 = tmp45;
                      if (0 === num47) {
                        break;
                      }
                    } else {
                      let tmp46 = state8.gzhead.hcrc && state8.pending > pending3;
                      if (tmp46) {
                        let tmp47 = require;
                        let tmp48 = dependencyMap;
                        let tmp49 = pending3;
                        state.adler = _mod13658(state.adler, state8.pending_buf, state8.pending - pending3, tmp44);
                      }
                      let state3 = state.state;
                      let avail_out3 = state3.pending;
                      if (avail_out3 > state.avail_out) {
                        avail_out3 = state.avail_out;
                      }
                      if (0 !== avail_out3) {
                        diff = require;
                        diff = dependencyMap;
                        let obj8 = assign;
                        diff = obj8;
                        diff = avail_out3;
                        diff = obj8.arraySet(
                          state.output,
                          state3.pending_buf,
                          state3.pending_out,
                          avail_out3,
                          state.next_out,
                        );
                        state.next_out = state.next_out + avail_out3;
                        state3.pending_out = state3.pending_out + avail_out3;
                        state.total_out = state.total_out + avail_out3;
                        state.avail_out = state.avail_out - avail_out3;
                        state3.pending = state3.pending - avail_out3;
                        if (0 === state3.pending) {
                          state3.pending_out = 0;
                        }
                      }
                      num46 = 1;
                      pending4 = state8.pending;
                      if (state8.pending === state8.pending_buf_size) {
                        break;
                      }
                    }
                    let tmp52 = state8.gzhead.hcrc && state8.pending > pending4;
                    if (tmp52) {
                      let tmp53 = require;
                      let tmp54 = dependencyMap;
                      let tmp55 = pending4;
                      state.adler = _mod13658(state.adler, state8.pending_buf, state8.pending - pending4, pending4);
                    }
                    if (0 === num46) {
                      state8.gzindex = 0;
                      let num48 = 91;
                      state8.status = 91;
                    }
                  }
                } else {
                  state8.status = 91;
                }
              }
              if (91 === state8.status) {
                if (state8.gzhead.comment) {
                  let pending5 = state8.pending;
                  while (true) {
                    let tmp57 = pending5;
                    if (state8.pending !== state8.pending_buf_size) {
                      let num54 = 0;
                      if (state8.gzindex < state8.gzhead.comment.length) {
                        let comment = state8.gzhead.comment;
                        let tmp62 = +state8.gzindex;
                        state8.gzindex = tmp62 + 1;
                        num54 = 255 & comment.charCodeAt(tmp62);
                      }
                      let tmp63 = +state8.pending;
                      state8.pending = tmp63 + 1;
                      state8.pending_buf[tmp63] = num54;
                      let num53 = num54;
                      pending5 = tmp57;
                      let pending6 = tmp57;
                      if (0 === num54) {
                        break;
                      }
                    } else {
                      let tmp58 = state8.gzhead.hcrc && state8.pending > pending5;
                      if (tmp58) {
                        let tmp59 = require;
                        let tmp60 = dependencyMap;
                        let tmp61 = pending5;
                        state.adler = _mod13658(state.adler, state8.pending_buf, state8.pending - pending5, tmp56);
                      }
                      let state4 = state.state;
                      let avail_out4 = state4.pending;
                      if (avail_out4 > state.avail_out) {
                        avail_out4 = state.avail_out;
                      }
                      if (0 !== avail_out4) {
                        diff = require;
                        diff = dependencyMap;
                        let obj9 = assign;
                        diff = obj9;
                        diff = avail_out4;
                        diff = obj9.arraySet(
                          state.output,
                          state4.pending_buf,
                          state4.pending_out,
                          avail_out4,
                          state.next_out,
                        );
                        state.next_out = state.next_out + avail_out4;
                        state4.pending_out = state4.pending_out + avail_out4;
                        state.total_out = state.total_out + avail_out4;
                        state.avail_out = state.avail_out - avail_out4;
                        state4.pending = state4.pending - avail_out4;
                        if (0 === state4.pending) {
                          state4.pending_out = 0;
                        }
                      }
                      num53 = 1;
                      pending6 = state8.pending;
                      if (state8.pending === state8.pending_buf_size) {
                        break;
                      }
                    }
                    let tmp64 = state8.gzhead.hcrc && state8.pending > pending6;
                    if (tmp64) {
                      let tmp65 = require;
                      let tmp66 = dependencyMap;
                      let tmp67 = pending6;
                      state.adler = _mod13658(state.adler, state8.pending_buf, state8.pending - pending6, pending6);
                    }
                    if (0 === num53) {
                      let num55 = 103;
                      state8.status = 103;
                    }
                  }
                } else {
                  state8.status = 103;
                }
              }
              if (state8.status === 103) {
                if (state8.gzhead.hcrc) {
                  if (state8.pending + 2 > state8.pending_buf_size) {
                    const state9 = state.state;
                    let avail_out5 = state9.pending;
                    if (avail_out5 > state.avail_out) {
                      avail_out5 = state.avail_out;
                    }
                    if (0 !== avail_out5) {
                      diff = require;
                      diff = dependencyMap;
                      const obj10 = assign;
                      diff = obj10;
                      diff = avail_out5;
                      diff = obj10.arraySet(
                        state.output,
                        state9.pending_buf,
                        state9.pending_out,
                        avail_out5,
                        state.next_out,
                      );
                      state.next_out = state.next_out + avail_out5;
                      state9.pending_out = state9.pending_out + avail_out5;
                      state.total_out = state.total_out + avail_out5;
                      state.avail_out = state.avail_out - avail_out5;
                      state9.pending = state9.pending - avail_out5;
                      if (0 === state9.pending) {
                        state9.pending_out = 0;
                      }
                    }
                  }
                  if (state8.pending + 2 <= state8.pending_buf_size) {
                    state8.pending = +state8.pending + 1;
                    state8.pending_buf[+state8.pending] = 255 & state.adler;
                    state8.pending = +state8.pending + 1;
                    state8.pending_buf[+state8.pending] = (state.adler >> 8) & 255;
                    state.adler = 0;
                    state8.status = 113;
                  }
                } else {
                  state8.status = 113;
                }
              }
              if (0 !== state8.pending) {
                const state5 = state.state;
                let avail_out6 = state5.pending;
                if (avail_out6 > state.avail_out) {
                  avail_out6 = state.avail_out;
                }
                if (0 !== avail_out6) {
                  diff = require;
                  diff = dependencyMap;
                  const obj11 = assign;
                  diff = obj11;
                  diff = avail_out6;
                  diff = obj11.arraySet(
                    state.output,
                    state5.pending_buf,
                    state5.pending_out,
                    avail_out6,
                    state.next_out,
                  );
                  state.next_out = state.next_out + avail_out6;
                  state5.pending_out = state5.pending_out + avail_out6;
                  state.total_out = state.total_out + avail_out6;
                  state.avail_out = state.avail_out - avail_out6;
                  state5.pending = state5.pending - avail_out6;
                  if (0 === state5.pending) {
                    state5.pending_out = 0;
                  }
                }
                if (0 === state.avail_out) {
                  state8.last_flush = -1;
                  return 0;
                }
              } else if (0 === state.avail_in) {
                let num62 = 0;
                diff = last_flush << 1;
                if (last_flush > 4) {
                  num62 = 9;
                }
                let num63 = 0;
                if (last_flush > 4) {
                  num63 = 9;
                }
                if (diff - num62 <= tmp70 - num63) {
                  if (4 !== last_flush) {
                    diff = require;
                    diff = dependencyMap;
                    state.msg = _mod13655[-5];
                    return -5;
                  }
                }
                tmp70 = last_flush << 1;
              }
              if (state8.status === 666) {
                if (0 !== state.avail_in) {
                  diff = require;
                  diff = dependencyMap;
                  state.msg = _mod13655[-5];
                  return -5;
                }
              }
              if (0 === state.avail_in) {
                let num76 = 0;
                if (4 === last_flush) {
                  let num82 = 1;
                  let num83 = 1;
                  if (state8.wrap > 0) {
                    if (2 === state8.wrap) {
                      diff = +state8.pending;
                      state8.pending = diff + 1;
                      state8.pending_buf[diff] = 255 & state.adler;
                      diff = +state8.pending;
                      state8.pending = diff + 1;
                      state8.pending_buf[diff] = (state.adler >> 8) & 255;
                      diff = +state8.pending;
                      state8.pending = diff + 1;
                      state8.pending_buf[diff] = (state.adler >> 16) & 255;
                      diff = +state8.pending;
                      state8.pending = diff + 1;
                      state8.pending_buf[diff] = (state.adler >> 24) & 255;
                      diff = +state8.pending;
                      state8.pending = diff + 1;
                      state8.pending_buf[diff] = 255 & state.total_in;
                      diff = +state8.pending;
                      state8.pending = diff + 1;
                      state8.pending_buf[diff] = (state.total_in >> 8) & 255;
                      diff = +state8.pending;
                      state8.pending = diff + 1;
                      state8.pending_buf[diff] = (state.total_in >> 16) & 255;
                      diff = +state8.pending;
                      state8.pending = diff + 1;
                      state8.pending_buf[diff] = (state.total_in >> 24) & 255;
                    } else {
                      diff = state.adler >>> 16;
                      diff = +state8.pending;
                      state8.pending = diff + 1;
                      state8.pending_buf[diff] = (diff >>> 8) & 255;
                      diff = +state8.pending;
                      state8.pending = diff + 1;
                      state8.pending_buf[diff] = 255 & diff;
                      diff = 65535 & state.adler;
                      diff = +state8.pending;
                      state8.pending = diff + 1;
                      state8.pending_buf[diff] = (diff >>> 8) & 255;
                      diff = +state8.pending;
                      state8.pending = diff + 1;
                      state8.pending_buf[diff] = 255 & diff;
                    }
                    const state7 = state.state;
                    let avail_out8 = state7.pending;
                    if (avail_out8 > state.avail_out) {
                      avail_out8 = state.avail_out;
                    }
                    if (0 !== avail_out8) {
                      diff = require;
                      diff = dependencyMap;
                      const obj14 = assign;
                      diff = obj14;
                      diff = avail_out8;
                      diff = obj14.arraySet(
                        state.output,
                        state7.pending_buf,
                        state7.pending_out,
                        avail_out8,
                        state.next_out,
                      );
                      state.next_out = state.next_out + avail_out8;
                      state7.pending_out = state7.pending_out + avail_out8;
                      state.total_out = state.total_out + avail_out8;
                      state.avail_out = state.avail_out - avail_out8;
                      state7.pending = state7.pending - avail_out8;
                      if (0 === state7.pending) {
                        state7.pending_out = 0;
                      }
                    }
                    if (state8.wrap > 0) {
                      state8.wrap = -state8.wrap;
                    }
                    if (0 !== state8.pending) {
                      num82 = 0;
                    }
                    num83 = num82;
                  }
                  num76 = num83;
                }
                return num76;
              }
              if (2 === state8.strategy) {
                while (true) {
                  if (0 === state8.lookahead) {
                    let tmp97 = fill_window;
                    let tmp98 = fill_window(state8);
                    if (0 === state8.lookahead) {
                      break;
                    }
                  }
                  state8.match_length = 0;
                  let tmp99 = require;
                  diff = dependencyMap;
                  let obj4 = StaticTreeDesc;
                  state8.lookahead = state8.lookahead - 1;
                  state8.strstart = state8.strstart + 1;
                  if (!obj4._tr_tally(state8, 0, state8.window[state8.strstart])) {
                    continue;
                  } else {
                    diff = flush_block_only;
                    diff = flush_block_only(state8, false);
                    let num70 = 1;
                  }
                  let funcResult = num70;
                }
                num70 = 1;
                if (0 !== last_flush) {
                  state8.insert = 0;
                  let num71 = 4;
                  if (4 === last_flush) {
                    diff = flush_block_only;
                    diff = flush_block_only(state8, true);
                    if (0 === state8.strm.avail_out) {
                      num71 = 3;
                    }
                    let num72 = num71;
                  } else {
                    num72 = 2;
                    if (state8.last_lit) {
                      diff = flush_block_only;
                      diff = flush_block_only(state8, false);
                      num72 = 2;
                      if (0 === state8.strm.avail_out) {
                        num72 = 1;
                      }
                    }
                  }
                  diff = num72;
                }
              } else if (3 === state8.strategy) {
                const _window = state8.window;
                while (true) {
                  if (state8.lookahead <= 258) {
                    let tmp73 = fill_window;
                    let tmp74 = fill_window(state8);
                    if (state8.lookahead > 258) {
                      if (0 === state8.lookahead) {
                        state8.insert = 0;
                        let num68 = 4;
                        if (4 === last_flush) {
                          let tmp94 = flush_block_only;
                          let flag2 = true;
                          let tmp95 = flush_block_only(state8, true);
                          if (0 === state8.strm.avail_out) {
                            num68 = 3;
                          }
                          let num69 = num68;
                        } else {
                          num69 = 2;
                          if (state8.last_lit) {
                            let tmp92 = flush_block_only;
                            let tmp93 = flush_block_only(state8, false);
                            num69 = 2;
                            if (0 === state8.strm.avail_out) {
                              num69 = 1;
                            }
                          }
                        }
                        let tmp96 = num69;
                      }
                    } else {
                      let num67 = 1;
                      if (0 === last_flush) {
                        break;
                      }
                    }
                    funcResult = num67;
                  }
                  state8.match_length = 0;
                  if (state8.lookahead >= 3) {
                    if (state8.strstart > 0) {
                      diff = state8.strstart - 1;
                      diff = _window[diff];
                      diff = diff + 1;
                      if (diff === _window[diff]) {
                        diff = diff + 1;
                        if (diff === _window[diff]) {
                          let sum1 = diff + 1;
                          if (diff === _window[sum1]) {
                            diff = state8.strstart + 258;
                            let sum2 = sum1 + 1;
                            let tmp76 = sum2;
                            while (diff === _window[sum2]) {
                              let sum3 = sum2 + 1;
                              tmp76 = sum3;
                              if (diff !== _window[sum3]) {
                                break;
                              } else {
                                let sum4 = sum3 + 1;
                                tmp76 = sum4;
                                if (diff !== _window[sum4]) {
                                  break;
                                } else {
                                  let sum5 = sum4 + 1;
                                  tmp76 = sum5;
                                  if (diff !== _window[sum5]) {
                                    break;
                                  } else {
                                    let sum6 = sum5 + 1;
                                    tmp76 = sum6;
                                    if (diff !== _window[sum6]) {
                                      break;
                                    } else {
                                      let sum7 = sum6 + 1;
                                      tmp76 = sum7;
                                      if (diff !== _window[sum7]) {
                                        break;
                                      } else {
                                        let sum8 = sum7 + 1;
                                        tmp76 = sum8;
                                        if (diff !== _window[sum8]) {
                                          break;
                                        } else {
                                          let sum9 = sum8 + 1;
                                          tmp76 = sum9;
                                          if (diff !== _window[sum9]) {
                                            break;
                                          } else {
                                            sum1 = sum9;
                                            tmp76 = sum9;
                                            if (sum9 >= diff) {
                                              break;
                                            }
                                          }
                                        }
                                      }
                                    }
                                  }
                                }
                              }
                            }
                            state8.match_length = 258 - (diff - tmp76);
                            if (state8.match_length > state8.lookahead) {
                              state8.match_length = state8.lookahead;
                            }
                          }
                        }
                      }
                    }
                  }
                  if (state8.match_length >= 3) {
                    let tmp88 = require;
                    let tmp89 = dependencyMap;
                    let obj3 = StaticTreeDesc;
                    let _tr_tallyResult = obj3._tr_tally(state8, 1, state8.match_length - 3);
                    state8.lookahead = state8.lookahead - state8.match_length;
                    state8.strstart = state8.strstart + state8.match_length;
                    state8.match_length = 0;
                  } else {
                    let tmp85 = require;
                    let tmp86 = dependencyMap;
                    let obj2 = StaticTreeDesc;
                    _tr_tallyResult = obj2._tr_tally(state8, 0, state8.window[state8.strstart]);
                    state8.lookahead = state8.lookahead - 1;
                    state8.strstart = state8.strstart + 1;
                  }
                  if (!_tr_tallyResult) {
                    continue;
                  } else {
                    let tmp90 = flush_block_only;
                    let tmp91 = flush_block_only(state8, false);
                    num67 = 1;
                    if (0 === state8.strm.avail_out) {
                      break;
                    }
                  }
                  break;
                }
              } else {
                funcResult = items[state8.level].func(state8, last_flush);
                const obj = items[state8.level];
              }
              diff = 3 !== funcResult;
              if (diff) {
                diff = 4 !== funcResult;
              }
              if (!diff) {
                state8.status = 666;
              }
              if (1 !== funcResult) {
                if (3 !== funcResult) {
                  if (2 === funcResult) {
                    if (1 === last_flush) {
                      diff = require;
                      diff = dependencyMap;
                      diff = StaticTreeDesc._tr_align(state8);
                      const obj5 = StaticTreeDesc;
                    } else if (5 !== last_flush) {
                      diff = require;
                      diff = dependencyMap;
                      const obj12 = StaticTreeDesc;
                      diff = obj12;
                      diff = state8;
                      diff = obj12._tr_stored_block(state8, 0, 0, false);
                      if (3 === last_flush) {
                        const head = state8.head;
                        diff = head.length - 1;
                        if (diff >= 0) {
                          do {
                            head[diff] = 0;
                            diff = diff - 1;
                          } while (diff >= 0);
                        }
                        if (0 === state8.lookahead) {
                          state8.strstart = 0;
                          state8.block_start = 0;
                          state8.insert = 0;
                        }
                      }
                    }
                    const state6 = state.state;
                    let avail_out7 = state6.pending;
                    if (avail_out7 > state.avail_out) {
                      avail_out7 = state.avail_out;
                    }
                    if (0 !== avail_out7) {
                      diff = require;
                      diff = dependencyMap;
                      const obj13 = assign;
                      diff = obj13;
                      diff = avail_out7;
                      diff = obj13.arraySet(
                        state.output,
                        state6.pending_buf,
                        state6.pending_out,
                        avail_out7,
                        state.next_out,
                      );
                      state.next_out = state.next_out + avail_out7;
                      state6.pending_out = state6.pending_out + avail_out7;
                      state.total_out = state.total_out + avail_out7;
                      state.avail_out = state.avail_out - avail_out7;
                      state6.pending = state6.pending - avail_out7;
                      if (0 === state6.pending) {
                        state6.pending_out = 0;
                      }
                    }
                    if (0 === state.avail_out) {
                      state8.last_flush = -1;
                      return 0;
                    }
                  }
                }
              }
              if (0 === state.avail_out) {
                state8.last_flush = -1;
              }
              return 0;
            }
          }
          let num88 = -5;
          if (0 !== state.avail_out) {
            num88 = -2;
          }
          diff = require;
          diff = dependencyMap;
          state.msg = _mod13655[num88];
          return num88;
        }
      }
    }
  }
  if (state) {
    diff = require;
    diff = dependencyMap;
    state.msg = _mod13655[-2];
  }
  return -2;
};
arg5.deflateEnd = function deflateEnd(state) {
  let num = -2;
  if (state) {
    num = -2;
    if (state.state) {
      const status = state.state.status;
      if (42 !== status) {
        if (69 !== status) {
          if (73 !== status) {
            if (91 !== status) {
              if (status !== 103) {
                state.msg = _mod13655[-2];
                let num10 = -2;
              }
            }
          }
        }
      }
      state.state = null;
      num10 = 0;
      if (status === 113) {
        state.msg = _mod13655[-3];
        num10 = -3;
      }
    }
  }
  return num;
};
arg5.deflateSetDictionary = function deflateSetDictionary(strm, dictionary) {
  if (strm) {
    if (strm.state) {
      const state = strm.state;
      const wrap = state.wrap;
      if (2 !== wrap) {
        if (1 !== wrap) {
          if (!state.lookahead) {
            if (tmp23) {
              strm.adler = adler32(strm.adler, dictionary, length, 0);
            }
            state.wrap = 0;
            let tmp5 = dictionary;
            let w_size = length;
            if (length >= state.w_size) {
              if (0 === wrap) {
                const head = state.head;
                let diff = head.length - 1;
                if (diff >= 0) {
                  do {
                    head[diff] = 0;
                    diff = diff - 1;
                  } while (diff >= 0);
                }
                state.strstart = 0;
                state.block_start = 0;
                state.insert = 0;
              }
              const buf8 = new assign.Buf8(state.w_size);
              const obj = assign;
              obj.arraySet(buf8, dictionary, length - state.w_size, state.w_size, 0);
              w_size = state.w_size;
              tmp5 = buf8;
            }
            strm.avail_in = w_size;
            strm.next_in = 0;
            strm.input = tmp5;
            ({ avail_in, next_in, input } = strm);
            fill_window(state);
            if (state.lookahead >= 3) {
              let strstart = state.strstart;
              let diff1 = state.lookahead - 2;
              do {
                do {
                  state.ins_h = ((state.ins_h << state.hash_shift) ^ state.window[strstart + 3 - 1]) & state.hash_mask;
                  state.prev[strstart & state.w_mask] = state.head[state.ins_h];
                  state.head[state.ins_h] = strstart;
                  let sum = strstart + 1;
                  diff1 = diff1 - 1;
                  strstart = sum;
                } while (diff1);
                state.strstart = sum;
                state.lookahead = 2;
                let tmp21 = fill_window;
                let tmp22 = fill_window(state);
              } while (state.lookahead >= 3);
            }
            state.strstart = state.strstart + state.lookahead;
            ({ strstart: state.block_start, lookahead: state.insert } = state);
            state.lookahead = 0;
            state.prev_length = 2;
            state.match_length = 2;
            state.match_available = 0;
            strm.next_in = next_in;
            strm.input = input;
            strm.avail_in = avail_in;
            state.wrap = wrap;
            return 0;
          }
        }
      }
      return -2;
    }
  }
  return -2;
};
arg5.deflateInfo = "pako deflate (from Nodeca project)";
