// === Module 313: elementsThatOverlapOffsets ===

// Module 313 (elementsThatOverlapOffsets)
import javaScriptFlagGetterAll from "javaScriptFlagGetter" /* 27 */;
import _slicedToArray from "_slicedToArray" /* 32 */;

function elementsThatOverlapOffsets(items, getItemCount, getCellMetricsApprox) {
  let num2;
  let num = zoomScale;
  if (zoomScale === undefined) {
    num = 1;
  }
  items = [];
  for (let num2 = 0; num2 < items.length; num2 = num2 + 1) {
    let tmp2 = items[num2];
    let diff = tmp - 1;
    let num3 = 0;
    if (0 <= diff) {
      let sum;
      while (true) {
        let _Math = Math;
        sum = num3 + Math.floor((diff - num3) / 2);
        let cellMetricsApprox = getCellMetricsApprox.getCellMetricsApprox(sum, getItemCount);
        let result = cellMetricsApprox.offset * num;
        let diff1 = diff;
        if (0 !== sum) {
          if (0 === sum) {
            if (tmp2 <= (cellMetricsApprox.offset + cellMetricsApprox.length) * num) {
              break;
            } else {
              let sum1 = sum + 1;
              diff = diff1;
              num3 = sum1;
            }
          }
        }
        diff1 = sum - 1;
        sum1 = num3;
      }
      items[num2] = sum;
    }
  }
  return items;
}

export { elementsThatOverlapOffsets };
export const newRangeCount = function newRangeCount(arg0, arg1) {
  const sum = arg1.last - arg1.first + 1;
  const sum1 = 1 + Math.min(arg1.last, arg0.last);
  return sum - max(0, sum1 - Math.max(arg1.first, arg0.first));
};
export const computeWindowedRenderLimits = function computeWindowedRenderLimits(getItemCount, result2, tmpResult6, cellsAroundViewport, _listMetrics, _scrollMetrics) {
  let bound3;
  let bound4;
  let diff;
  let tmp12;
  let tmp13;
  let tmp14;
  let tmp59;
  let velocity;
  let visibleLength;
  let zoomScale;
  const itemCount = getItemCount.getItemCount(getItemCount.data);
  if (0 === itemCount) {
    return { first: 0, last: -1 };
  } else {
    ({ velocity, visibleLength, zoomScale } = _scrollMetrics);
    let num = 1;
    const offset = _scrollMetrics.offset;
    if (undefined !== zoomScale) {
      num = zoomScale;
    }
    const _Math = Math;
    const bound = Math.max(0, offset);
    const sum = bound + visibleLength;
    let str2 = "after";
    const result = (tmpResult6 - 1) * visibleLength;
    if (velocity <= 1) {
      let str3 = "none";
      if (velocity < -1) {
        str3 = "before";
      }
      str2 = str3;
    }
    const _Math2 = Math;
    const result1 = 0.5 * result;
    const bound1 = Math.max(0, bound - result1);
    const _Math3 = Math;
    const bound2 = Math.max(0, sum + result1);
    if (_listMetrics.getCellMetricsApprox(itemCount - 1, getItemCount).offset * num < bound1) {
      const _Math9 = Math;
      const obj3 = { first: Math.max(0, itemCount - 1 - result2), last: itemCount - 1 };
      return obj3;
    } else {
      let tmp25;
      let tmp24;
      const items = [bound1, bound, sum, bound2];
      [tmp59, tmp13, tmp14, tmp12] = elementsThatOverlapOffsets(items, getItemCount, _listMetrics, num);
      let num4 = 0;
      _slicedToArray(elementsThatOverlapOffsets(items, getItemCount, _listMetrics, num), 4);
      if (null != tmp59) {
        num4 = tmp59;
      }
      if (null == diff) {
        diff = itemCount - 1;
      }
      if (null == bound3) {
        const _Math4 = Math;
        bound3 = Math.max(0, num4);
      }
      const obj = { first: bound3, last: bound4 };
      if (null == bound4) {
        const _Math5 = Math;
        bound4 = Math.min(diff, bound3 + result2 - 1);
      }
      const _Math6 = Math;
      const _Math7 = Math;
      const sum1 = obj.last - obj.first + 1;
      const _Math8 = Math;
      const sum2 = 1 + Math.min(obj.last, cellsAroundViewport.last);
      const diff1 = sum1 - max(0, sum2 - Math.max(obj.first, cellsAroundViewport.first));
      let tmp21 = diff1;
      let tmp22 = bound4;
      let tmp23 = bound3;
      const tmp19 = "before" === str2;
      const tmp20 = "after" === str2;
      if (bound3 > num4) {
        while (true) {
          let tmp34;
          let tmp33;
          let tmp26 = tmp21 >= result2;
          let obj2 = javaScriptFlagGetterAll;
          let tmp29 = tmp23 <= cellsAroundViewport.first;
          if (obj2.fixVirtualizeListCollapseWindowSize()) {
            tmp34 = tmp22 >= cellsAroundViewport.last;
            tmp33 = tmp29;
          } else {
            tmp33 = tmp29 || tmp23 > cellsAroundViewport.last;
            tmp34 = tmp22 >= cellsAroundViewport.last || tmp22 < cellsAroundViewport.first;
          }
          let tmp35 = tmp23 > num4;
          if (tmp35) {
            let tmp36 = !tmp26;
            if (tmp26) {
              tmp36 = !tmp33;
            }
            tmp35 = tmp36;
          }
          let tmp37 = tmp22 < diff;
          if (tmp37) {
            let tmp38 = !tmp26;
            if (tmp26) {
              tmp38 = !tmp34;
            }
            tmp37 = tmp38;
          }
          if (tmp26) {
            if (!tmp35) {
              tmp25 = tmp22;
              tmp24 = tmp23;
              if (!tmp37) {
                break;
              }
            }
            break;
          }
          let tmp39 = !tmp35;
          if (tmp35) {
            let tmp40 = tmp20 && tmp37 && tmp34;
            tmp39 = tmp40;
          }
          let tmp41 = tmp21;
          let diff2 = tmp23;
          if (!tmp39) {
            let sum3 = tmp21;
            if (tmp33) {
              sum3 = tmp21 + 1;
            }
            diff2 = tmp23 - 1;
            tmp41 = sum3;
          }
          let tmp44 = !tmp37;
          if (tmp37) {
            let tmp45 = tmp19 && tmp35 && tmp33;
            tmp44 = tmp45;
          }
          let tmp46 = tmp41;
          let sum5 = tmp22;
          if (!tmp44) {
            let sum4 = tmp41;
            if (tmp34) {
              sum4 = tmp41 + 1;
            }
            sum5 = tmp22 + 1;
            tmp46 = sum4;
          }
          tmp21 = tmp46;
          tmp22 = sum5;
          tmp23 = diff2;
          if (diff2 > num4) {
            continue;
          } else {
            tmp21 = tmp46;
            tmp22 = sum5;
            tmp23 = diff2;
            tmp24 = diff2;
            tmp25 = sum5;
            if (sum5 >= diff) {
              break;
            }
          }
          continue;
        }
      } else {
        tmp21 = diff1;
        tmp22 = bound4;
        tmp23 = bound3;
        tmp24 = bound3;
        tmp25 = bound4;
      }
      if (tmp25 >= tmp24) {
        if (tmp24 >= 0) {
          if (tmp25 < itemCount) {
            if (tmp24 >= num4) {
              if (tmp25 <= diff) {
                if (tmp24 <= obj.first) {
                  if (tmp25 >= obj.last) {
                    return { first: tmp24, last: tmp25 };
                  }
                }
              }
            }
          }
        }
      }
      const _Error = Error;
      const _JSON = JSON;
      const self = this;
      const self2 = this;
      const obj5 = { first: tmp24, last: tmp25, itemCount, overscanFirst: num4, overscanLast: diff, visible: obj };
      const error = new Error("Bad window calculation " + JSON.stringify(obj5));
      throw error;
    }
  }
};
export const keyExtractor = function keyExtractor(key, sum) {
  let id;
  if (typeof key === "object") {
    key = undefined;
    if (key != null) {
      key = key.key;
    }
    if (null != key) {
      id = key.key;
    }
    return id;
  }
  if (typeof key === "object") {
    let id1;
    if (key != null) {
      id1 = key.id;
    }
    if (null != id1) {
      id = key.id;
    }
  }
  id = String(sum);
};