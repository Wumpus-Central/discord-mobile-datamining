// === Module 7057: useFastestListComputedStyles ===

// Module 7057 (useFastestListComputedStyles)
import closure_0 from "noop" /* 19 */;
import { StyleSheet } from "get ActivityIndicator" /* 17 */;

const result = require("set").fileFinishedImporting("modules/fastest_list/useFastestListComputedStyles.android.tsx");

export default function useFastestListComputedStyles(style) {
  style = style.style;
  let items = [style];
  return style.useMemo(() => {
    let obj = style;
    if (null != style) {
      if (obj == null) {
        obj = { flex: 1 };
      }
      const items = [obj];
      obj = items;
    } else {
      obj = { flex: 1 };
    }
    const flattenResult = closure_1_1.flatten(obj);
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
            obj = { style: null, marginEnd: null, marginStart: null };
            obj[0] = flattenResult;
            obj[1] = num3 + num4;
            obj[2] = num + num2;
            return obj;
          }
        }
        const _Error = Error;
        error = new Error("FastestList: paddingStart and paddingEnd must be numbers.");
        throw error;
      }
    }
    const error1 = new Error("FastestList: marginStart and marginEnd must be numbers.");
    throw error1;
  }, items);
};