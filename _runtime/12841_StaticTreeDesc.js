// _runtime/12841_StaticTreeDesc.js
import { assign } from "12836_assign.js";
const require = arg1;
const dependencyMap = arg6;
function StaticTreeDesc(static_tree, extra_bits, extra_base, elems, max_length) {
  let length = static_tree;
  if (static_tree) {
    length = static_tree.length;
  }
  { static_tree, extra_bits, extra_base, elems, max_length }.has_stree = length;
}
function TreeDesc(arg0, arg1) {

}
function send_code(bi_valid, dyn_dtree, bl_tree) {
  if (bi_valid.bi_valid > 16 - bl_tree[2 * dyn_dtree + 1]) {
    bi_valid.bi_buf = bi_valid.bi_buf | tmp << bi_valid.bi_valid & 65535;
    const bi_buf = bi_valid.bi_buf;
    bi_valid.pending = +bi_valid.pending + 1;
    bi_valid.pending_buf[+bi_valid.pending] = 255 & bi_buf;
    bi_valid.pending = +bi_valid.pending + 1;
    bi_valid.pending_buf[+bi_valid.pending] = bi_buf >>> 8 & 255;
    bi_valid.bi_buf = tmp >> 16 - bi_valid.bi_valid;
    bi_valid.bi_valid = bi_valid.bi_valid + (tmp2 - 16);
  } else {
    bi_valid.bi_buf = bi_valid.bi_buf | tmp << bi_valid.bi_valid & 65535;
    bi_valid.bi_valid = bi_valid.bi_valid + tmp2;
  }
}
function pqdownheap(heap_len, dyn_tree, diff) {
  let tmp3 = diff;
  if (diff << 1 <= heap_len.heap_len) {
    let tmp10 = tmp2 < heap_len.heap_len;
    if (tmp10) {
      const depth = heap_len.depth;
      const result = 2 * tmp4;
      const result1 = 2 * tmp5;
      let tmp8 = dyn_tree[result] < dyn_tree[result1];
      if (!tmp8) {
        tmp8 = dyn_tree[result] === dyn_tree[result1] && depth[tmp4] <= depth[tmp5];
        const tmp9 = dyn_tree[result] === dyn_tree[result1] && depth[tmp4] <= depth[tmp5];
      }
      tmp10 = tmp8;
    }
    let sum = tmp2;
    if (tmp10) {
      sum = tmp2 + 1;
    }
    const depth2 = heap_len.depth;
    const result2 = 2 * tmp;
    const result3 = 2 * tmp12;
    let tmp15 = dyn_tree[result2] < dyn_tree[result3];
    if (!tmp15) {
      tmp15 = dyn_tree[result2] === dyn_tree[result3] && depth2[tmp] <= depth2[tmp12];
      const tmp16 = dyn_tree[result2] === dyn_tree[result3] && depth2[tmp] <= depth2[tmp12];
    }
    let tmp17 = diff;
    tmp3 = diff;
    if (!tmp15) {
      heap_len.heap[tmp17] = heap_len.heap[sum];
      tmp3 = sum;
      while (sum << 1 <= heap_len.heap_len) {
        let tmp26 = tmp18 < heap_len.heap_len;
        if (tmp26) {
          let tmp20 = heap_len.heap[tmp18 + 1];
          let tmp21 = heap_len.heap[tmp18];
          let depth3 = heap_len.depth;
          let result4 = 2 * tmp20;
          let result5 = 2 * tmp21;
          let tmp24 = dyn_tree[result4] < dyn_tree[result5];
          if (!tmp24) {
            let tmp25 = dyn_tree[result4] === dyn_tree[result5] && depth3[tmp20] <= depth3[tmp21];
            tmp24 = tmp25;
          }
          tmp26 = tmp24;
        }
        let sum1 = tmp18;
        if (tmp26) {
          sum1 = tmp18 + 1;
        }
        let tmp28 = heap_len.heap[sum1];
        let depth4 = heap_len.depth;
        let result6 = 2 * tmp;
        let result7 = 2 * tmp28;
        let tmp31 = dyn_tree[result6] < dyn_tree[result7];
        if (!tmp31) {
          let tmp32 = dyn_tree[result6] === dyn_tree[result7] && depth4[tmp] <= depth4[tmp28];
          tmp31 = tmp32;
        }
        sum = sum1;
        tmp17 = tmp19;
        tmp3 = tmp19;
        if (tmp31) {
          break;
        }
      }
    }
  }
  heap_len.heap[tmp3] = heap_len.heap[diff];
}
function compress_block(last_lit, arr, array) {
  let num = 0;
  if (0 !== last_lit.last_lit) {
    do {
      let result = 2 * num;
      let tmp2 = last_lit.pending_buf[last_lit.d_buf + result] << 8 | last_lit.pending_buf[last_lit.d_buf + result + 1];
      let tmp3 = last_lit.pending_buf[last_lit.l_buf + num];
      let tmp4 = num;
      if (0 === tmp2) {
        let tmp17 = send_code;
        let tmp18 = send_code(last_lit, tmp3, arr);
      } else {
        let tmp21 = array1;
        let tmp22 = array1[tmp3];
        let tmp20 = send_code;
        let tmp23 = send_code(last_lit, tmp22 + 256 + 1, arr);
        let tmp24 = dependencyMap;
        let tmp25 = dependencyMap[tmp22];
        if (0 !== tmp25) {
          let tmp26 = array2;
          let diff = tmp3 - array2[tmp22];
          if (last_lit.bi_valid > 16 - tmp25) {
            last_lit.bi_buf = last_lit.bi_buf | diff << last_lit.bi_valid & 65535;
            let bi_buf = last_lit.bi_buf;
            let tmp5 = +last_lit.pending;
            last_lit.pending = tmp5 + 1;
            last_lit.pending_buf[tmp5] = 255 & bi_buf;
            let tmp6 = +last_lit.pending;
            last_lit.pending = tmp6 + 1;
            last_lit.pending_buf[tmp6] = bi_buf >>> 8 & 255;
            last_lit.bi_buf = diff >> 16 - last_lit.bi_valid;
            last_lit.bi_valid = last_lit.bi_valid + (tmp25 - 16);
          } else {
            last_lit.bi_buf = last_lit.bi_buf | diff << last_lit.bi_valid & 65535;
            last_lit.bi_valid = last_lit.bi_valid + tmp25;
          }
        }
        let diff1 = tmp2 - 1;
        if (diff1 < 256) {
          let tmp10 = array;
          let tmp9 = array[diff1];
        } else {
          let tmp8 = array;
          tmp9 = array[256 + (diff1 >>> 7)];
        }
        let tmp20Result = tmp20(last_lit, tmp9, array);
        let tmp12 = dependencyMap2;
        let tmp13 = dependencyMap2[tmp9];
        let tmp14 = tmp9;
        if (0 !== tmp13) {
          let tmp28 = array3;
          let diff2 = diff1 - array3[tmp9];
          if (last_lit.bi_valid > 16 - tmp13) {
            last_lit.bi_buf = last_lit.bi_buf | diff2 << last_lit.bi_valid & 65535;
            let bi_buf2 = last_lit.bi_buf;
            let tmp15 = +last_lit.pending;
            last_lit.pending = tmp15 + 1;
            last_lit.pending_buf[tmp15] = 255 & bi_buf2;
            let tmp16 = +last_lit.pending;
            last_lit.pending = tmp16 + 1;
            last_lit.pending_buf[tmp16] = bi_buf2 >>> 8 & 255;
            last_lit.bi_buf = diff2 >> 16 - last_lit.bi_valid;
            last_lit.bi_valid = last_lit.bi_valid + (tmp13 - 16);
          } else {
            last_lit.bi_buf = last_lit.bi_buf | diff2 << last_lit.bi_valid & 65535;
            last_lit.bi_valid = last_lit.bi_valid + tmp13;
          }
        }
      }
      num = num + 1;
    } while (num < last_lit.last_lit);
  }
  send_code(last_lit, 256, arr);
}
function build_tree(heap_len, bl_desc) {
  let dyn_tree2;
  let max_code;
  const dyn_tree = bl_desc.dyn_tree;
  const elems = bl_desc.stat_desc.elems;
  heap_len.heap_len = 0;
  heap_len.heap_max = 573;
  let num = -1;
  let num2 = 0;
  let num3 = -1;
  if (0 < elems) {
    do {
      let result = 2 * num2;
      let tmp4 = num;
      let tmp5 = num2;
      if (0 !== dyn_tree[result]) {
        let sum = heap_len.heap_len + 1;
        heap_len.heap_len = sum;
        heap_len.heap[sum] = num2;
        heap_len.depth[num2] = 0;
        tmp4 = num2;
      } else {
        dyn_tree[result + 1] = 0;
      }
      num2 = num2 + 1;
      num = tmp4;
      num3 = tmp4;
    } while (num2 < elems);
  }
  let tmp7 = num3;
  let tmp8 = num3;
  if (heap_len.heap_len < 2) {
    do {
      let sum1 = heap_len.heap_len + 1;
      heap_len.heap_len = sum1;
      let tmp10 = tmp7;
      let num4 = 0;
      let sum2 = tmp7;
      if (tmp7 < 2) {
        sum2 = tmp7 + 1;
        num4 = sum2;
      }
      heap_len.heap[sum1] = num4;
      let result1 = 2 * num4;
      dyn_tree[result1] = 1;
      heap_len.depth[num4] = 0;
      heap_len.opt_len = heap_len.opt_len - 1;
      if (tmp2) {
        heap_len.static_len = heap_len.static_len - tmp[result1 + 1];
      }
      tmp7 = sum2;
      tmp8 = sum2;
    } while (heap_len.heap_len < 2);
  }
  bl_desc.max_code = tmp8;
  let diff = heap_len.heap_len >> 1;
  let sum3 = elems;
  if (1 <= diff) {
    do {
      let tmp15 = pqdownheap;
      let tmp16 = pqdownheap(heap_len, dyn_tree, diff);
      diff = diff - 1;
      sum3 = elems;
    } while (1 <= diff);
  }
  do {
    let tmp17 = heap_len.heap[1];
    let tmp18 = +heap_len.heap_len;
    heap_len.heap_len = tmp18 - 1;
    heap_len.heap[1] = heap_len.heap[tmp18];
    let tmp19 = pqdownheap;
    let tmp20 = pqdownheap(heap_len, dyn_tree, 1);
    let tmp21 = heap_len.heap[1];
    let diff1 = heap_len.heap_max - 1;
    heap_len.heap_max = diff1;
    heap_len.heap[diff1] = tmp17;
    let diff2 = heap_len.heap_max - 1;
    heap_len.heap_max = diff2;
    heap_len.heap[diff2] = tmp21;
    dyn_tree[2 * sum3] = dyn_tree[2 * tmp17] + dyn_tree[2 * tmp21];
    let tmp24 = sum3;
    if (heap_len.depth[tmp17] >= heap_len.depth[tmp21]) {
      let tmp25 = heap_len.depth[tmp17];
    } else {
      tmp25 = heap_len.depth[tmp21];
    }
    heap_len.depth[sum3] = tmp25 + 1;
    dyn_tree[2 * tmp21 + 1] = sum3;
    dyn_tree[2 * tmp17 + 1] = sum3;
    let tmp26 = +sum3;
    sum3 = tmp26 + 1;
    heap_len.heap[1] = tmp26;
    let tmp19Result = tmp19(heap_len, dyn_tree, 1);
  } while (heap_len.heap_len >= 2);
  const diff3 = heap_len.heap_max - 1;
  heap_len.heap_max = diff3;
  heap_len.heap[diff3] = heap_len.heap[1];
  ({ dyn_tree: dyn_tree2, max_code } = bl_desc);
  const extra_base = bl_desc.stat_desc.extra_base;
  let max_length = bl_desc.stat_desc.max_length;
  let num5 = 0;
  do {
    heap_len.bl_count[num5] = 0;
    num5 = num5 + 1;
  } while (num5 <= 15);
  dyn_tree2[2 * heap_len.heap[heap_len.heap_max] + 1] = 0;
  let sum4 = heap_len.heap_max + 1;
  let num6 = 0;
  let num7 = 0;
  let tmp29 = sum4;
  if (sum4 < 573) {
    do {
      let tmp30 = heap_len.heap[sum4];
      let sum5 = dyn_tree2[2 * dyn_tree2[2 * tmp30 + 1] + 1] + 1;
      let tmp32 = num6;
      let tmp33 = sum4;
      let sum6 = num6;
      if (sum5 > max_length) {
        sum6 = num6 + 1;
        sum5 = max_length;
      }
      dyn_tree2[2 * tmp30 + 1] = sum5;
      if (tmp30 <= max_code) {
        let bl_count = heap_len.bl_count;
        bl_count[sum5] = bl_count[sum5] + 1;
        let num8 = 0;
        if (tmp30 >= extra_base) {
          num8 = tmp63[tmp30 - extra_base];
        }
        let tmp35 = dyn_tree2[2 * tmp30];
        heap_len.opt_len = heap_len.opt_len + tmp35 * (sum5 + num8);
        if (tmp62) {
          heap_len.static_len = heap_len.static_len + tmp35 * (tmp61[2 * tmp30 + 1] + num8);
        }
      }
      sum4 = sum4 + 1;
      num6 = sum6;
      num7 = sum6;
      tmp29 = sum4;
    } while (sum4 < 573);
  }
  if (0 !== num7) {
    do {
      let diff4 = max_length - 1;
      let tmp37 = num7;
      let tmp38 = diff4;
      let tmp39 = diff4;
      if (0 === heap_len.bl_count[diff4]) {
        do {
          let diff5 = tmp38 - 1;
          tmp38 = diff5;
          tmp39 = diff5;
          tmp41 = heap_len.bl_count[diff5];
        } while (0 === tmp41);
      }
      let bl_count2 = heap_len.bl_count;
      bl_count2[tmp39] = bl_count2[tmp39] - 1;
      let bl_count3 = heap_len.bl_count;
      let sum7 = tmp39 + 1;
      bl_count3[sum7] = bl_count3[sum7] + 2;
      let bl_count4 = heap_len.bl_count;
      bl_count4[max_length] = bl_count4[max_length] - 1;
      num7 = num7 - 2;
    } while (0 < num7);
    if (0 !== max_length) {
      do {
        let tmp43 = heap_len.bl_count[max_length];
        let tmp44 = max_length;
        let tmp45 = tmp29;
        let tmp46 = tmp29;
        if (0 !== tmp43) {
          do {
            let diff6 = tmp45 - 1;
            let tmp48 = heap_len.heap[diff6];
            let tmp49 = tmp43;
            diff7 = tmp43;
            if (tmp48 <= max_code) {
              if (dyn_tree2[2 * tmp48 + 1] !== max_length) {
                heap_len.opt_len = heap_len.opt_len + (max_length - dyn_tree2[2 * tmp48 + 1]) * dyn_tree2[2 * tmp48];
                dyn_tree2[2 * tmp48 + 1] = max_length;
              }
              diff7 = tmp43 - 1;
            }
            tmp43 = diff7;
            tmp45 = diff6;
            tmp46 = diff6;
          } while (0 !== diff7);
        }
        max_length = max_length - 1;
        tmp29 = tmp46;
      } while (0 !== max_length);
    }
  }
  const array = new Array(16);
  let num9 = 0;
  let num10 = 1;
  do {
    let tmp53 = num9 + tmp51[num10 - 1] << 1;
    array[num10] = tmp53;
    num10 = num10 + 1;
    num9 = tmp53;
  } while (num10 <= 15);
  let num11 = 0;
  if (0 <= tmp8) {
    do {
      let result2 = 2 * num11;
      let diff8 = dyn_tree[result2 + 1];
      let tmp56 = num11;
      if (0 !== diff8) {
        let tmp57 = +array[diff8];
        array[diff8] = tmp57 + 1;
        let num12 = 0;
        do {
          let tmp58 = 1 & tmp57;
          tmp57 = tmp57 >>> 1;
          let tmp59 = (num12 | tmp58) << 1;
          diff8 = diff8 - 1;
          num12 = tmp59;
        } while (diff8 > 0);
        dyn_tree[result2] = tmp59 >>> 1;
      }
      num11 = num11 + 1;
    } while (num11 <= tmp8);
  }
}
function scan_tree(bl_tree, dyn_dtree, max_code) {
  let sum;
  let tmp = dyn_dtree[1];
  let num = 4;
  let num2 = 7;
  if (0 === tmp) {
    num = 3;
    num2 = 138;
  }
  dyn_dtree[2 * (max_code + 1) + 1] = 65535;
  let num3 = -1;
  let num4 = 0;
  let num5 = 0;
  if (0 <= max_code) {
    do {
      sum = num5 + 1;
      let tmp3 = dyn_dtree[2 * sum + 1];
      let sum1 = num4 + 1;
      let tmp5 = sum1 < num2;
      let tmp6 = num;
      let tmp7 = num2;
      let tmp8 = tmp;
      let tmp9 = num3;
      if (sum1 < num2) {
        tmp5 = tmp === tmp3;
      }
      let tmp10 = num;
      let num6 = sum1;
      let tmp11 = num3;
      if (!tmp5) {
        if (sum1 < num) {
          let bl_tree5 = bl_tree.bl_tree;
          let result = 2 * tmp;
          bl_tree5[result] = bl_tree5[result] + sum1;
        } else if (0 !== tmp) {
          if (tmp !== num3) {
            let bl_tree3 = bl_tree.bl_tree;
            let result1 = 2 * tmp;
            bl_tree3[result1] = bl_tree3[result1] + 1;
          }
          let bl_tree4 = bl_tree.bl_tree;
          bl_tree4[32] = bl_tree4[32] + 1;
        } else if (sum1 <= 10) {
          let bl_tree2 = bl_tree.bl_tree;
          bl_tree2[34] = bl_tree2[34] + 1;
        } else {
          bl_tree = bl_tree.bl_tree;
          bl_tree[36] = bl_tree[36] + 1;
        }
        let num7 = 3;
        let num8 = 138;
        if (0 !== tmp3) {
          let num9 = 4;
          let num10 = 7;
          if (tmp === tmp3) {
            num9 = 3;
            num10 = 6;
          }
          num7 = num9;
          num8 = num10;
        }
        tmp10 = num7;
        tmp7 = num8;
        num6 = 0;
        tmp11 = tmp;
      }
      num = tmp10;
      num2 = tmp7;
      num4 = num6;
      num3 = tmp11;
      tmp = tmp3;
      num5 = sum;
    } while (sum <= max_code);
  }
}
function send_tree(bl_tree, dyn_dtree, diff2) {
  let sum;
  let tmp = dyn_dtree[1];
  let num = 4;
  let num2 = 7;
  if (0 === tmp) {
    num = 3;
    num2 = 138;
  }
  let num3 = -1;
  let num4 = 0;
  let num5 = 0;
  if (0 <= diff2) {
    do {
      sum = num5 + 1;
      let tmp3 = dyn_dtree[2 * sum + 1];
      let sum1 = num4 + 1;
      let tmp5 = num;
      let num6 = num2;
      let tmp6 = tmp;
      let tmp7 = num3;
      if (sum1 >= num2) {
        let diff = sum1;
        if (sum1 < num) {
          do {
            let tmp25 = send_code;
            let tmp26 = send_code(bl_tree, tmp, bl_tree.bl_tree);
            diff = diff - 1;
          } while (0 !== diff);
        } else if (0 !== tmp) {
          let diff1 = sum1;
          if (tmp !== num3) {
            let tmp18 = send_code;
            let tmp19 = send_code(bl_tree, tmp, bl_tree.bl_tree);
            diff1 = sum1 - 1;
          }
          let tmp20 = send_code;
          let tmp21 = send_code(bl_tree, 16, bl_tree.bl_tree);
          diff2 = diff1 - 3;
          if (bl_tree.bi_valid > 14) {
            bl_tree.bi_buf = bl_tree.bi_buf | diff2 << bl_tree.bi_valid & 65535;
            let bi_buf3 = bl_tree.bi_buf;
            let tmp23 = +bl_tree.pending;
            bl_tree.pending = tmp23 + 1;
            bl_tree.pending_buf[tmp23] = 255 & bi_buf3;
            let tmp24 = +bl_tree.pending;
            bl_tree.pending = tmp24 + 1;
            bl_tree.pending_buf[tmp24] = bi_buf3 >>> 8 & 255;
            bl_tree.bi_buf = diff2 >> 16 - bl_tree.bi_valid;
            bl_tree.bi_valid = bl_tree.bi_valid + -14;
          } else {
            bl_tree.bi_buf = bl_tree.bi_buf | diff2 << bl_tree.bi_valid & 65535;
            bl_tree.bi_valid = bl_tree.bi_valid + 2;
          }
        } else if (sum1 <= 10) {
          let tmp12 = send_code;
          let tmp13 = send_code(bl_tree, 17, bl_tree.bl_tree);
          let diff3 = sum1 - 3;
          if (bl_tree.bi_valid > 13) {
            bl_tree.bi_buf = bl_tree.bi_buf | diff3 << bl_tree.bi_valid & 65535;
            let bi_buf2 = bl_tree.bi_buf;
            let tmp15 = +bl_tree.pending;
            bl_tree.pending = tmp15 + 1;
            bl_tree.pending_buf[tmp15] = 255 & bi_buf2;
            let tmp16 = +bl_tree.pending;
            bl_tree.pending = tmp16 + 1;
            bl_tree.pending_buf[tmp16] = bi_buf2 >>> 8 & 255;
            bl_tree.bi_buf = diff3 >> 16 - bl_tree.bi_valid;
            bl_tree.bi_valid = bl_tree.bi_valid + -13;
          } else {
            bl_tree.bi_buf = bl_tree.bi_buf | diff3 << bl_tree.bi_valid & 65535;
            bl_tree.bi_valid = bl_tree.bi_valid + 3;
          }
        } else {
          let tmp27 = send_code;
          let tmp28 = send_code(bl_tree, 18, bl_tree.bl_tree);
          let diff4 = sum1 - 11;
          if (bl_tree.bi_valid > 9) {
            bl_tree.bi_buf = bl_tree.bi_buf | diff4 << bl_tree.bi_valid & 65535;
            let bi_buf = bl_tree.bi_buf;
            let tmp10 = +bl_tree.pending;
            bl_tree.pending = tmp10 + 1;
            bl_tree.pending_buf[tmp10] = 255 & bi_buf;
            let tmp11 = +bl_tree.pending;
            bl_tree.pending = tmp11 + 1;
            bl_tree.pending_buf[tmp11] = bi_buf >>> 8 & 255;
            bl_tree.bi_buf = diff4 >> 16 - bl_tree.bi_valid;
            bl_tree.bi_valid = bl_tree.bi_valid + -9;
          } else {
            bl_tree.bi_buf = bl_tree.bi_buf | diff4 << bl_tree.bi_valid & 65535;
            bl_tree.bi_valid = bl_tree.bi_valid + 7;
          }
        }
        let num7 = 3;
        num6 = 138;
        let num8 = 0;
        let tmp8 = tmp;
        if (0 !== tmp3) {
          num7 = 4;
          num6 = 7;
          num8 = 0;
          tmp8 = tmp;
          if (tmp === tmp3) {
            num7 = 3;
            num6 = 6;
            num8 = 0;
            tmp8 = tmp;
          }
        }
      } else {
        num7 = num;
        num8 = sum1;
        tmp8 = num3;
      }
      num = num7;
      num2 = num6;
      num4 = num8;
      num3 = tmp8;
      tmp = tmp3;
      num5 = sum;
    } while (sum <= diff2);
  }
}
function _tr_stored_block(state8, state8, arg2, arg3) {
  let num = 0;
  if (arg3) {
    num = 1;
  }
  if (state8.bi_valid > 13) {
    state8.bi_buf = state8.bi_buf | tmp << state8.bi_valid & 65535;
    const bi_buf = state8.bi_buf;
    state8.pending = +state8.pending + 1;
    state8.pending_buf[+state8.pending] = 255 & bi_buf;
    state8.pending = +state8.pending + 1;
    state8.pending_buf[+state8.pending] = bi_buf >>> 8 & 255;
    state8.bi_buf = tmp >> 16 - state8.bi_valid;
    state8.bi_valid = state8.bi_valid + -13;
  } else {
    state8.bi_buf = state8.bi_buf | tmp << state8.bi_valid & 65535;
    state8.bi_valid = state8.bi_valid + 3;
  }
  if (state8.bi_valid > 8) {
    const bi_buf2 = state8.bi_buf;
    state8.pending = +state8.pending + 1;
    state8.pending_buf[+state8.pending] = 255 & bi_buf2;
    state8.pending = +state8.pending + 1;
    state8.pending_buf[+state8.pending] = bi_buf2 >>> 8 & 255;
  } else if (state8.bi_valid > 0) {
    state8.pending = +state8.pending + 1;
    state8.pending_buf[+state8.pending] = state8.bi_buf;
  }
  state8.bi_buf = 0;
  state8.bi_valid = 0;
  state8.pending = +state8.pending + 1;
  state8.pending_buf[+state8.pending] = 255 & arg2;
  state8.pending = +state8.pending + 1;
  state8.pending_buf[+state8.pending] = arg2 >>> 8 & 255;
  state8.pending = +state8.pending + 1;
  state8.pending_buf[+state8.pending] = 255 & ~arg2;
  state8.pending = +state8.pending + 1;
  state8.pending_buf[+state8.pending] = ~arg2 >>> 8 & 255;
  assign.arraySet(state8.pending_buf, state8.window, state8, arg2, state8.pending);
  state8.pending = state8.pending + arg2;
}
let closure_2 = [0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 2, 2, 2, 2, 3, 3, 3, 3, 4, 4, 4, 4, 5, 5, 5, 5, 0];
let closure_3 = [0, 0, 0, 0, 1, 1, 2, 2, 3, 3, 4, 4, 5, 5, 6, 6, 7, 7, 8, 8, 9, 9, 10, 10, 11, 11, 12, 12, 13, 13];
let closure_4 = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 2, 3, 7];
let closure_5 = [16, 17, 18, 0, 8, 7, 9, 6, 10, 5, 11, 4, 12, 3, 13, 2, 14, 1, 15];
const arr = new Array(576);
let diff = arr.length - 1;
if (diff >= 0) {
  do {
    arr[diff] = 0;
    diff = diff - 1;
  } while (diff >= 0);
}
let array = new Array(60);
let diff1 = array.length - 1;
if (diff1 >= 0) {
  do {
    array[diff1] = 0;
    diff1 = diff1 - 1;
  } while (diff1 >= 0);
}
array = new Array(512);
let diff2 = array.length - 1;
if (diff2 >= 0) {
  do {
    array[diff2] = 0;
    diff2 = diff2 - 1;
  } while (diff2 >= 0);
}
const array1 = new Array(256);
let diff3 = array1.length - 1;
if (diff3 >= 0) {
  do {
    array1[diff3] = 0;
    diff3 = diff3 - 1;
  } while (diff3 >= 0);
}
const array2 = new Array(29);
let diff4 = array2.length - 1;
if (diff4 >= 0) {
  do {
    array2[diff4] = 0;
    diff4 = diff4 - 1;
  } while (diff4 >= 0);
}
const array3 = new Array(30);
let diff5 = array3.length - 1;
if (diff5 >= 0) {
  do {
    array3[diff5] = 0;
    diff5 = diff5 - 1;
  } while (diff5 >= 0);
}
let c23 = false;
arg5._tr_init = function _tr_init(state) {
  let num30;
  let num32;
  let num36;
  let num37;
  let sum1;
  let sum3;
  let sum5;
  let tmp21;
  if (!c23) {
    const _Array = Array;
    let array = new Array(16);
    let num6 = 0;
    let num7 = 0;
    do {
      let tmp6 = array2;
      array2[num6] = num7;
      let tmp7 = dependencyMap;
      let tmp8 = num6;
      let tmp9 = num7;
      let num8 = 0;
      let tmp10 = num7;
      if (0 < 1 << dependencyMap[num6]) {
        do {
          let tmp11 = array1;
          let sum = tmp9 + 1;
          array1[tmp9] = num6;
          num8 = num8 + 1;
          let tmp13 = dependencyMap;
          tmp9 = sum;
          tmp10 = sum;
          tmp14 = 1 << dependencyMap[num6];
        } while (num8 < tmp14);
      }
      sum1 = num6 + 1;
      num7 = tmp10;
      num6 = sum1;
    } while (sum1 < 28);
    array1[tmp10 - 1] = sum1;
    let num9 = 0;
    let num10 = 0;
    do {
      let tmp17 = array3;
      array3[num10] = num9;
      let tmp18 = dependencyMap2;
      let tmp19 = num9;
      let tmp20 = num10;
      let num11 = 0;
      tmp21 = num9;
      if (0 < 1 << dependencyMap2[num10]) {
        do {
          let tmp22 = array;
          let sum2 = tmp19 + 1;
          array[tmp19] = num10;
          num11 = num11 + 1;
          let tmp24 = dependencyMap2;
          tmp19 = sum2;
          tmp21 = sum2;
          tmp25 = 1 << dependencyMap2[num10];
        } while (num11 < tmp25);
      }
      sum3 = num10 + 1;
      num9 = tmp21;
      num10 = sum3;
    } while (sum3 < 16);
    let tmp27 = tmp21 >> 7;
    let num19 = 0;
    if (sum3 < 30) {
      do {
        let tmp28 = array3;
        array3[sum3] = tmp27 << 7;
        let tmp29 = dependencyMap2;
        let tmp30 = tmp27;
        let tmp31 = sum3;
        let num20 = 0;
        let tmp32 = tmp27;
        if (0 < 1 << dependencyMap2[sum3] - 7) {
          do {
            let tmp33 = array;
            let sum4 = tmp30 + 1;
            array[256 + tmp30] = sum3;
            num20 = num20 + 1;
            let tmp35 = dependencyMap2;
            tmp30 = sum4;
            tmp32 = sum4;
            tmp36 = 1 << dependencyMap2[sum3] - 7;
          } while (num20 < tmp36);
        }
        sum3 = sum3 + 1;
        tmp27 = tmp32;
        num19 = 0;
      } while (sum3 < 30);
    }
    do {
      array[num19] = 0;
      num19 = num19 + 1;
      let num21 = 0;
    } while (num19 <= 15);
    do {
      let tmp37 = arr;
      arr[2 * num21 + 1] = 8;
      sum5 = num21 + 1;
      array[8] = array[8] + 1;
      num21 = sum5;
    } while (sum5 <= 143);
    let sum6 = sum5;
    let tmp40 = sum5;
    if (sum5 <= 255) {
      do {
        let tmp41 = arr;
        arr[2 * sum6 + 1] = 9;
        sum6 = sum6 + 1;
        array[9] = array[9] + 1;
        tmp37 = arr;
        tmp40 = sum6;
      } while (sum6 <= 255);
    }
    let sum7 = tmp40;
    let sum8 = tmp40;
    if (tmp40 <= 279) {
      do {
        let tmp44 = arr;
        arr[2 * sum7 + 1] = 7;
        sum7 = sum7 + 1;
        array[7] = array[7] + 1;
        tmp37 = arr;
        sum8 = sum7;
      } while (sum7 <= 279);
    }
    if (sum8 <= 287) {
      do {
        let tmp45 = arr;
        arr[2 * sum8 + 1] = 8;
        sum8 = sum8 + 1;
        array[8] = array[8] + 1;
        tmp37 = arr;
      } while (sum8 <= 287);
    }
    const _Array2 = Array;
    array = new Array(16);
    let num28 = 0;
    let num29 = 1;
    do {
      let tmp50 = num28 + array[num29 - 1] << 1;
      array[num29] = tmp50;
      num29 = num29 + 1;
      num28 = tmp50;
      num30 = 0;
    } while (num29 <= 15);
    do {
      let result = 2 * num30;
      let diff = tmp37[result + 1];
      let tmp53 = num30;
      if (0 !== diff) {
        let tmp54 = +array[diff];
        array[diff] = tmp54 + 1;
        let num31 = 0;
        do {
          let tmp55 = 1 & tmp54;
          tmp54 = tmp54 >>> 1;
          let tmp56 = (num31 | tmp55) << 1;
          diff = diff - 1;
          num31 = tmp56;
        } while (diff > 0);
        tmp37[result] = tmp56 >>> 1;
      }
      num30 = num30 + 1;
      num32 = 0;
    } while (num30 <= 287);
    const result1 = 2 * num32;
    array[result1 + 1] = 5;
    let num33 = 0;
    let num34 = 5;
    let tmp60 = num32;
    do {
      do {
        let tmp61 = (num33 | 1 & tmp60) << 1;
        num34 = num34 - 1;
        num33 = tmp61;
        tmp60 = tmp60 >>> 1;
      } while (0 < num34);
      tmp57[result1] = tmp61 >>> 1;
      num32 = num32 + 1;
    } while (num32 < 30);
  }
  let obj = Object.create(TreeDesc.prototype);
  obj = { dyn_tree: state.dyn_ltree, max_code: 0, stat_desc: closure_11 };
  state.l_desc = obj;
  obj = Object.create(TreeDesc.prototype);
  state.d_desc = { dyn_tree: state.dyn_dtree, max_code: 0, stat_desc: closure_12 };
  Object.create(TreeDesc.prototype);
  state.bl_desc = { dyn_tree: state.bl_tree, max_code: 0, stat_desc: closure_13 };
  state.bi_buf = 0;
  state.bi_valid = 0;
  let num35 = 0;
  do {
    state.dyn_ltree[2 * num35] = 0;
    num35 = num35 + 1;
    num36 = 0;
  } while (num35 < 286);
  do {
    state.dyn_dtree[2 * num36] = 0;
    num36 = num36 + 1;
    num37 = 0;
  } while (num36 < 30);
  do {
    state.bl_tree[2 * num37] = 0;
    num37 = num37 + 1;
  } while (num37 < 19);
  state.dyn_ltree[512] = 1;
  state.static_len = 0;
  state.opt_len = 0;
  state.matches = 0;
  state.last_lit = 0;
};
arg5._tr_stored_block = _tr_stored_block;
arg5._tr_flush_block = function _tr_flush_block(level, state8, arg2, arg3) {
  let num72;
  let num73;
  if (level.level > 0) {
    if (2 === level.strm.data_type) {
      let num6 = 4093624447;
      let num5 = 0;
      while (true) {
        let tmp3 = num6;
        let tmp4 = num5;
        if (!(1 & num6)) {
          num5 = num5 + 1;
          num6 = num6 >>> 1;
          if (num5 <= 31) {
            continue;
          } else {
            let num4 = 1;
            if (0 !== level.dyn_ltree[18]) {
              break;
            } else {
              num4 = 1;
              if (0 !== level.dyn_ltree[20]) {
                break;
              } else {
                let num7 = 32;
                let num8 = 256;
                num4 = 1;
                if (0 !== level.dyn_ltree[26]) {
                  break;
                } else {
                  let tmp5 = num7;
                  num4 = 1;
                  while (0 === level.dyn_ltree[2 * num7]) {
                    num7 = num7 + 1;
                    num4 = 0;
                    if (num7 >= 256) {
                      break;
                    }
                  }
                }
              }
            }
          }
          break;
        } else {
          num4 = 0;
          if (0 !== level.dyn_ltree[2 * num5]) {
            break;
          }
        }
        tmp56.data_type = num4;
      }
    }
    build_tree(level, level.l_desc);
    build_tree(level, level.d_desc);
    scan_tree(level, level.dyn_ltree, level.l_desc.max_code);
    scan_tree(level, level.dyn_dtree, level.d_desc.max_code);
    build_tree(level, level.bl_desc);
    let num10 = 18;
    let num12 = 18;
    if (0 === level.bl_tree[2 * dependencyMap3[18] + 1]) {
      const diff = num10 - 1;
      num12 = diff;
      while (3 <= diff) {
        let tmp15 = dependencyMap3;
        num10 = diff;
        num12 = diff;
        if (0 !== level.bl_tree[2 * dependencyMap3[diff] + 1]) {
          break;
        }
      }
    }
    level.opt_len = level.opt_len + (3 * (num12 + 1) + 5 + 5 + 4);
    let tmp2 = level.opt_len + 3 + 7 >>> 3;
    let num2 = num12;
    let sum = tmp16;
    if (level.static_len + 3 + 7 >>> 3 <= tmp2) {
      num2 = num12;
      sum = tmp16;
      tmp2 = tmp16;
    }
  } else {
    sum = arg2 + 5;
    num2 = 0;
    tmp2 = sum;
  }
  if (arg2 + 4 <= tmp2) {
    if (-1 !== state8) {
      _tr_stored_block(level, state8, arg2, arg3);
      let num58 = 0;
    }
    do {
      let num67 = 2;
      level.dyn_ltree[2 * num58] = 0;
      let num68 = 1;
      num58 = num58 + 1;
      let num69 = 286;
      let num70 = 30;
      let num71 = 19;
      num72 = 0;
    } while (num58 < 286);
    do {
      level.dyn_dtree[2 * num72] = 0;
      num72 = num72 + 1;
      num73 = 0;
    } while (num72 < 30);
    do {
      level.bl_tree[2 * num73] = 0;
      num73 = num73 + 1;
    } while (num73 < 19);
    level.dyn_ltree[512] = 1;
    level.static_len = 0;
    level.opt_len = 0;
    level.matches = 0;
    level.last_lit = 0;
    if (arg3) {
      let num75 = 8;
      if (level.bi_valid > 8) {
        const bi_buf7 = level.bi_buf;
        level.pending = +level.pending + 1;
        level.pending_buf[+level.pending] = 255 & bi_buf7;
        level.pending = +level.pending + 1;
        num75 = bi_buf7 >>> num75 & 255;
        level.pending_buf[+level.pending] = num75;
      } else if (level.bi_valid > 0) {
        level.pending = +level.pending + 1;
        level.pending_buf[+level.pending] = level.bi_buf;
      }
      level.bi_buf = 0;
      level.bi_valid = 0;
    }
  }
  if (4 !== level.strategy) {
    if (sum !== tmp2) {
      let num17 = 0;
      if (arg3) {
        num17 = 1;
      }
      const sum1 = 4 + num17;
      if (level.bi_valid > 13) {
        level.bi_buf = level.bi_buf | sum1 << level.bi_valid & 65535;
        const bi_buf = level.bi_buf;
        level.pending = +level.pending + 1;
        level.pending_buf[+level.pending] = 255 & bi_buf;
        level.pending = +level.pending + 1;
        level.pending_buf[+level.pending] = bi_buf >>> 8 & 255;
        level.bi_buf = sum1 >> 16 - level.bi_valid;
        level.bi_valid = level.bi_valid + -13;
      } else {
        level.bi_buf = level.bi_buf | sum1 << level.bi_valid & 65535;
        level.bi_valid = level.bi_valid + 3;
      }
      const sum2 = level.l_desc.max_code + 1;
      const diff1 = sum2 - 257;
      const sum3 = level.d_desc.max_code + 1;
      if (level.bi_valid > 11) {
        level.bi_buf = level.bi_buf | diff1 << level.bi_valid & 65535;
        const bi_buf2 = level.bi_buf;
        level.pending = +level.pending + 1;
        level.pending_buf[+level.pending] = 255 & bi_buf2;
        level.pending = +level.pending + 1;
        level.pending_buf[+level.pending] = bi_buf2 >>> 8 & 255;
        level.bi_buf = diff1 >> 16 - level.bi_valid;
        level.bi_valid = level.bi_valid + -11;
      } else {
        level.bi_buf = level.bi_buf | diff1 << level.bi_valid & 65535;
        level.bi_valid = level.bi_valid + 5;
      }
      const diff2 = sum3 - 1;
      if (level.bi_valid > 11) {
        level.bi_buf = level.bi_buf | diff2 << level.bi_valid & 65535;
        const bi_buf3 = level.bi_buf;
        level.pending = +level.pending + 1;
        level.pending_buf[+level.pending] = 255 & bi_buf3;
        level.pending = +level.pending + 1;
        level.pending_buf[+level.pending] = bi_buf3 >>> 8 & 255;
        level.bi_buf = diff2 >> 16 - level.bi_valid;
        level.bi_valid = level.bi_valid + -11;
      } else {
        level.bi_buf = level.bi_buf | diff2 << level.bi_valid & 65535;
        level.bi_valid = level.bi_valid + 5;
      }
      const sum4 = num2 + 1;
      const diff3 = sum4 - 4;
      if (level.bi_valid > 12) {
        level.bi_buf = level.bi_buf | diff3 << level.bi_valid & 65535;
        const bi_buf4 = level.bi_buf;
        level.pending = +level.pending + 1;
        level.pending_buf[+level.pending] = 255 & bi_buf4;
        level.pending = +level.pending + 1;
        level.pending_buf[+level.pending] = bi_buf4 >>> 8 & 255;
        level.bi_buf = diff3 >> 16 - level.bi_valid;
        level.bi_valid = level.bi_valid + -12;
      } else {
        level.bi_buf = level.bi_buf | diff3 << level.bi_valid & 65535;
        level.bi_valid = level.bi_valid + 4;
      }
      let num57 = 0;
      if (0 < sum4) {
        do {
          let tmp33 = dependencyMap3;
          let tmp34 = level.bl_tree[2 * dependencyMap3[num57] + 1];
          let tmp35 = num57;
          if (level.bi_valid > 13) {
            level.bi_buf = level.bi_buf | tmp34 << level.bi_valid & 65535;
            let bi_buf5 = level.bi_buf;
            let tmp36 = +level.pending;
            level.pending = tmp36 + 1;
            level.pending_buf[tmp36] = 255 & bi_buf5;
            let tmp37 = +level.pending;
            level.pending = tmp37 + 1;
            level.pending_buf[tmp37] = bi_buf5 >>> 8 & 255;
            level.bi_buf = tmp34 >> 16 - level.bi_valid;
            level.bi_valid = level.bi_valid + -13;
          } else {
            level.bi_buf = level.bi_buf | tmp34 << level.bi_valid & 65535;
            level.bi_valid = level.bi_valid + 3;
          }
          num57 = num57 + 1;
        } while (num57 < sum4);
      }
      send_tree(level, level.dyn_ltree, sum2 - 1);
      send_tree(level, level.dyn_dtree, diff2);
      compress_block(level, level.dyn_ltree, level.dyn_dtree);
      num58 = 0;
    }
  }
  let num59 = 0;
  if (arg3) {
    num59 = 1;
  }
  const sum5 = 2 + num59;
  if (level.bi_valid > 13) {
    level.bi_buf = level.bi_buf | sum5 << level.bi_valid & 65535;
    const bi_buf6 = level.bi_buf;
    level.pending = +level.pending + 1;
    level.pending_buf[+level.pending] = 255 & bi_buf6;
    level.pending = +level.pending + 1;
    level.pending_buf[+level.pending] = bi_buf6 >>> 8 & 255;
    level.bi_buf = sum5 >> 16 - level.bi_valid;
    level.bi_valid = level.bi_valid + -13;
  } else {
    level.bi_buf = level.bi_buf | sum5 << level.bi_valid & 65535;
    level.bi_valid = level.bi_valid + 3;
  }
  compress_block(level, arr, array);
  num58 = 0;
};
arg5._tr_tally = function _tr_tally(state8, arg1, arg2) {
  state8.pending_buf[state8.d_buf + 2 * state8.last_lit] = arg1 >>> 8 & 255;
  state8.pending_buf[state8.d_buf + 2 * state8.last_lit + 1] = 255 & arg1;
  state8.pending_buf[state8.l_buf + state8.last_lit] = 255 & arg2;
  state8.last_lit = state8.last_lit + 1;
  if (0 === arg1) {
    const dyn_ltree2 = state8.dyn_ltree;
    const result = 2 * arg2;
    dyn_ltree2[result] = dyn_ltree2[result] + 1;
  } else {
    state8.matches = state8.matches + 1;
    const diff = arg1 - 1;
    const dyn_ltree = state8.dyn_ltree;
    const result1 = 2 * (array1[arg2] + 256 + 1);
    dyn_ltree[result1] = dyn_ltree[result1] + 1;
    const dyn_dtree = state8.dyn_dtree;
    if (diff < 256) {
      let tmp5 = array[diff];
    } else {
      tmp5 = array[256 + (diff >>> 7)];
    }
    const result2 = 2 * tmp5;
    dyn_dtree[result2] = dyn_dtree[result2] + 1;
  }
  return state8.last_lit === state8.lit_bufsize - 1;
};
arg5._tr_align = function _tr_align(state8) {
  if (state8.bi_valid > 13) {
    state8.bi_buf = state8.bi_buf | 2 << state8.bi_valid & 65535;
    const bi_buf = state8.bi_buf;
    state8.pending = +state8.pending + 1;
    state8.pending_buf[+state8.pending] = 255 & bi_buf;
    state8.pending = +state8.pending + 1;
    state8.pending_buf[+state8.pending] = bi_buf >>> 8 & 255;
    state8.bi_buf = 2 >> 16 - state8.bi_valid;
    state8.bi_valid = state8.bi_valid + -13;
  } else {
    state8.bi_buf = state8.bi_buf | 2 << state8.bi_valid & 65535;
    state8.bi_valid = state8.bi_valid + 3;
  }
  send_code(state8, 256, arr);
  if (16 === state8.bi_valid) {
    const bi_buf2 = state8.bi_buf;
    state8.pending = +state8.pending + 1;
    state8.pending_buf[+state8.pending] = 255 & bi_buf2;
    state8.pending = +state8.pending + 1;
    state8.pending_buf[+state8.pending] = bi_buf2 >>> 8 & 255;
    state8.bi_buf = 0;
    state8.bi_valid = 0;
  } else if (state8.bi_valid >= 8) {
    state8.pending = +state8.pending + 1;
    state8.pending_buf[+state8.pending] = 255 & state8.bi_buf;
    state8.bi_buf = state8.bi_buf >> 8;
    state8.bi_valid = state8.bi_valid - 8;
  }
};