// _runtime/00313_elementsThatOverlapOffsets.js
import javaScriptFlagGetterAll from "00027_javaScriptFlagGetter.js";
import closure_2 from "metro/00032__slicedToArray.js";

function elementsThatOverlapOffsets(items, getItemCount, getCellMetricsApprox, arg3) {
  let num = arg3;
  if (arg3 === undefined) {
    num = 1;
  }
  items = [];
  for (let num2 = 0; num2 < items.length; num2 = num2 + 1) {
    let tmp2 = items[num2];
    let diff = tmp - 1;
    let tmp4 = num2;
    let num3 = 0;
    if (0 <= diff) {
      while (true) {
        let _Math = Math;
        let sum = num3 + Math.floor((diff - num3) / 2);
        let cellMetricsApprox = getCellMetricsApprox.getCellMetricsApprox(sum, getItemCount);
        let result = cellMetricsApprox.offset * num;
        let diff1 = diff;
        let tmp8 = num3;
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
export const newRangeCount = function newRangeCount(last, last2) {
  const sum = last2.last - last2.first + 1;
  const sum1 = 1 + Math.min(last2.last, last.last);
  return sum - Math.max(0, sum1 - Math.max(last2.first, last.first));
};
export const computeWindowedRenderLimits = function computeWindowedRenderLimits(
  getItemCount,
  result2,
  tmpResult2,
  last,
  _listMetrics,
  _scrollMetrics,
) {
  const itemCount = getItemCount.getItemCount(getItemCount.data);
  if (0 === itemCount) {
    return { first: 0, last: -1 };
  } else {
    ({ velocity, visibleLength, zoomScale } = _scrollMetrics);
    let num = 1;
    if (undefined !== zoomScale) {
      num = zoomScale;
    }
    const _Math = Math;
    const bound = Math.max(0, _scrollMetrics.offset);
    const sum = bound + visibleLength;
    let str2 = "after";
    const result = (tmpResult2 - 1) * visibleLength;
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
      let obj = { first: null, last: null };
      const _Math9 = Math;
      obj[0] = Math.max(0, itemCount - 1 - result2);
      obj[1] = itemCount - 1;
      return obj;
    } else {
      const items = [bound1, bound, sum, bound2];
      [tmp61, tmp13, tmp14, tmp12] = callback(elementsThatOverlapOffsets(items, getItemCount, _listMetrics, num), 4);
      let num4 = 0;
      if (null != tmp61) {
        num4 = tmp61;
      }
      if (null == diff) {
        diff = itemCount - 1;
      }
      if (null == bound3) {
        const _Math4 = Math;
        bound3 = Math.max(0, num4);
      }
      obj = { first: null, last: null };
      obj[0] = bound3;
      if (null == bound4) {
        const _Math5 = Math;
        bound4 = Math.min(diff, bound3 + result2 - 1);
      }
      obj[1] = bound4;
      const _Math6 = Math;
      const _Math7 = Math;
      const sum1 = obj.last - obj.first + 1;
      const _Math8 = Math;
      const sum2 = 1 + Math.min(obj.last, last.last);
      const diff1 = sum1 - Math.max(0, sum2 - Math.max(obj.first, last.first));
      let tmp21 = diff1;
      let tmp22 = bound4;
      let tmp23 = bound3;
      if (bound3 > num4) {
        while (true) {
          let tmp26 = tmp21 >= result2;
          let tmp27 = importAll;
          let tmp28 = dependencyMap;
          obj1 = javaScriptFlagGetterAll;
          let tmp29 = tmp23 <= last.first;
          let tmp30 = tmp21;
          let tmp31 = tmp22;
          let tmp32 = tmp23;
          if (obj1.fixVirtualizeListCollapseWindowSize()) {
            let tmp34 = tmp22 >= last.last;
            let tmp33 = tmp29;
          } else {
            tmp33 = tmp29;
            if (!tmp29) {
              tmp33 = tmp23 > last.last;
            }
            tmp34 = tmp22 >= last.last || tmp22 < last.first;
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
              let tmp25 = tmp22;
              let tmp24 = tmp23;
              if (!tmp37) {
                break;
              }
            }
            break;
          }
          let tmp39 = !tmp35;
          if (tmp35) {
            let tmp40 = tmp20;
            if (tmp20) {
              tmp40 = tmp37;
            }
            if (tmp40) {
              tmp40 = tmp34;
            }
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
            let tmp45 = tmp19;
            if (tmp19) {
              tmp45 = tmp35;
            }
            if (tmp45) {
              tmp45 = tmp33;
            }
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
                    obj = { first: null, last: null };
                    obj[0] = tmp24;
                    obj[1] = tmp25;
                    return obj;
                  }
                }
              }
            }
          }
        }
      }
      const _Error = Error;
      const _JSON = JSON;
      obj1 = { first: null, last: null, itemCount: null, overscanFirst: null, overscanLast: null, visible: null };
      obj1[0] = tmp24;
      obj1[1] = tmp25;
      obj1[2] = itemCount;
      obj1[3] = num4;
      obj1[4] = diff;
      obj1[5] = obj;
      error = new Error("Bad window calculation " + JSON.stringify(obj1));
      throw error;
    }
  }
};
export const keyExtractor = function keyExtractor(obj) {
  if (typeof obj === "object") {
    let key;
    if (obj != null) {
      key = obj.key;
    }
    if (null != key) {
      let id = obj.key;
    }
    return id;
  }
  if (typeof obj === "object") {
    id = undefined;
    if (obj != null) {
      id = obj.id;
    }
    if (null != id) {
      id = obj.id;
    }
  }
  id = String(arg1);
};
