// === Module 6561: useFastestListComputedStyles ===

// Module 6561 (useFastestListComputedStyles)
import react_native from "react-native" /* 17 */;
import react2 from "react" /* 576 */;
import react from "react" /* 19 */;
import ReactCompilerGating from "ReactCompilerGating" /* 558 */;
import size from "module_2" /* 2 */;

const StyleSheet = react_native.StyleSheet;
let tmp2 = ReactCompilerGating.isReactCompilerEnabled() ? (function(style) {
  let tmp2;
  const obj = react2;
  const cResult = obj.c(6);
  style = style.style;
  if (cResult[0] !== style) {
    let obj3;
    const flatten = StyleSheet.flatten;
    if (null != style) {
      let obj2 = style;
      if (style == null) {
        obj2 = { flex: 1 };
      }
      const items = [obj2];
      obj3 = items;
    } else {
      obj3 = { flex: 1 };
    }
    const flattenResult = flatten(obj3);
    cResult[0] = style;
    cResult[1] = flattenResult;
    tmp2 = flattenResult;
  } else {
    tmp2 = cResult[1];
  }
  let num3;
  if (tmp2 != null) {
    num3 = tmp2.marginStart;
  }
  if (num3 == null) {
    let marginLeft;
    if (tmp2 != null) {
      marginLeft = tmp2.marginLeft;
    }
    num3 = marginLeft;
  }
  if (num3 == null) {
    let marginHorizontal;
    if (tmp2 != null) {
      marginHorizontal = tmp2.marginHorizontal;
    }
    num3 = marginHorizontal;
  }
  if (num3 == null) {
    let margin;
    if (tmp2 != null) {
      margin = tmp2.margin;
    }
    num3 = margin;
  }
  if (num3 == null) {
    num3 = 0;
  }
  let num4;
  if (tmp2 != null) {
    num4 = tmp2.paddingStart;
  }
  if (num4 == null) {
    let paddingLeft;
    if (tmp2 != null) {
      paddingLeft = tmp2.paddingLeft;
    }
    num4 = paddingLeft;
  }
  if (num4 == null) {
    let paddingHorizontal;
    if (tmp2 != null) {
      paddingHorizontal = tmp2.paddingHorizontal;
    }
    num4 = paddingHorizontal;
  }
  if (num4 == null) {
    let padding;
    if (tmp2 != null) {
      padding = tmp2.padding;
    }
    num4 = padding;
  }
  if (num4 == null) {
    num4 = 0;
  }
  if (typeof num3 === "number") {
    if (typeof num4 === "number") {
      let num5;
      if (tmp2 != null) {
        num5 = tmp2.marginEnd;
      }
      if (num5 == null) {
        let marginRight;
        if (tmp2 != null) {
          marginRight = tmp2.marginRight;
        }
        num5 = marginRight;
      }
      if (num5 == null) {
        let marginHorizontal1;
        if (tmp2 != null) {
          marginHorizontal1 = tmp2.marginHorizontal;
        }
        num5 = marginHorizontal1;
      }
      if (num5 == null) {
        let margin1;
        if (tmp2 != null) {
          margin1 = tmp2.margin;
        }
        num5 = margin1;
      }
      if (num5 == null) {
        num5 = 0;
      }
      let num6;
      if (tmp2 != null) {
        num6 = tmp2.paddingEnd;
      }
      if (num6 == null) {
        let paddingRight;
        if (tmp2 != null) {
          paddingRight = tmp2.paddingRight;
        }
        num6 = paddingRight;
      }
      if (num6 == null) {
        let paddingHorizontal1;
        if (tmp2 != null) {
          paddingHorizontal1 = tmp2.paddingHorizontal;
        }
        num6 = paddingHorizontal1;
      }
      if (num6 == null) {
        let padding1;
        if (tmp2 != null) {
          padding1 = tmp2.padding;
        }
        num6 = padding1;
      }
      if (num6 == null) {
        num6 = 0;
      }
      if (typeof num5 === "number") {
        if (typeof num6 === "number") {
          const sum = num5 + num6;
          const sum1 = num3 + num4;
          if (cResult[2] === sum) {
            if (cResult[3] === sum1) {
              let tmp18;
              if (cResult[4] === tmp2) {
                tmp18 = cResult[5];
              }
              return tmp18;
            }
          }
          const obj4 = { style: tmp2, marginEnd: sum, marginStart: sum1 };
          cResult[2] = sum;
          cResult[3] = sum1;
          cResult[4] = tmp2;
          cResult[5] = obj4;
          tmp18 = obj4;
        }
      }
      const _Error = Error;
      const self = this;
      const self2 = this;
      const error = new Error("FastestList: paddingStart and paddingEnd must be numbers.");
      throw error;
    }
  }
  const error1 = new Error("FastestList: marginStart and marginEnd must be numbers.");
  throw error1;
}) : ((style) => {
  style = style.style;
  let items = [style];
  return react.useMemo(function() {
    let obj2;
    let obj = style;
    const flatten = StyleSheet.flatten;
    if (null != style) {
      if (obj == null) {
        obj = { flex: 1 };
      }
      const items = [obj];
      obj2 = items;
    } else {
      obj2 = { flex: 1 };
    }
    const flattenResult = flatten(obj2);
    let num;
    if (flattenResult != null) {
      num = flattenResult.marginStart;
    }
    if (num == null) {
      let marginLeft;
      if (flattenResult != null) {
        marginLeft = flattenResult.marginLeft;
      }
      num = marginLeft;
    }
    if (num == null) {
      let marginHorizontal;
      if (flattenResult != null) {
        marginHorizontal = flattenResult.marginHorizontal;
      }
      num = marginHorizontal;
    }
    if (num == null) {
      let margin;
      if (flattenResult != null) {
        margin = flattenResult.margin;
      }
      num = margin;
    }
    if (num == null) {
      num = 0;
    }
    let num2;
    if (flattenResult != null) {
      num2 = flattenResult.paddingStart;
    }
    if (num2 == null) {
      let paddingLeft;
      if (flattenResult != null) {
        paddingLeft = flattenResult.paddingLeft;
      }
      num2 = paddingLeft;
    }
    if (num2 == null) {
      let paddingHorizontal;
      if (flattenResult != null) {
        paddingHorizontal = flattenResult.paddingHorizontal;
      }
      num2 = paddingHorizontal;
    }
    if (num2 == null) {
      let padding;
      if (flattenResult != null) {
        padding = flattenResult.padding;
      }
      num2 = padding;
    }
    if (num2 == null) {
      num2 = 0;
    }
    if (typeof num === "number") {
      if (typeof num2 === "number") {
        let num3;
        if (flattenResult != null) {
          num3 = flattenResult.marginEnd;
        }
        if (num3 == null) {
          let marginRight;
          if (flattenResult != null) {
            marginRight = flattenResult.marginRight;
          }
          num3 = marginRight;
        }
        if (num3 == null) {
          let marginHorizontal1;
          if (flattenResult != null) {
            marginHorizontal1 = flattenResult.marginHorizontal;
          }
          num3 = marginHorizontal1;
        }
        if (num3 == null) {
          let margin1;
          if (flattenResult != null) {
            margin1 = flattenResult.margin;
          }
          num3 = margin1;
        }
        if (num3 == null) {
          num3 = 0;
        }
        let num4;
        if (flattenResult != null) {
          num4 = flattenResult.paddingEnd;
        }
        if (num4 == null) {
          let paddingRight;
          if (flattenResult != null) {
            paddingRight = flattenResult.paddingRight;
          }
          num4 = paddingRight;
        }
        if (num4 == null) {
          let paddingHorizontal1;
          if (flattenResult != null) {
            paddingHorizontal1 = flattenResult.paddingHorizontal;
          }
          num4 = paddingHorizontal1;
        }
        if (num4 == null) {
          let padding1;
          if (flattenResult != null) {
            padding1 = flattenResult.padding;
          }
          num4 = padding1;
        }
        if (num4 == null) {
          num4 = 0;
        }
        if (typeof num3 === "number") {
          if (typeof num4 === "number") {
            return { style: flattenResult, marginEnd: num3 + num4, marginStart: num + num2 };
          }
        }
        const _Error = Error;
        const self = this;
        const self2 = this;
        const error = new Error("FastestList: paddingStart and paddingEnd must be numbers.");
        throw error;
      }
    }
    const error1 = new Error("FastestList: marginStart and marginEnd must be numbers.");
    throw error1;
  }, items);
});
const result = size.fileFinishedImporting("modules/fastest_list/useFastestListComputedStyles.android.tsx");

export default tmp2;