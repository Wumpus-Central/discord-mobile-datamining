// === Module 4931: IconSizes ===

// Module 4931 (IconSizes)
import ThemesDefault from "Themes" /* 709 */;
import importAllResult from "noop" /* 19 */;
import { Image } from "get ActivityIndicator" /* 17 */;
import { jsx } from "jsxProd" /* 21 */;
import createCacheKey from "createCacheKey" /* 4478 */;

let obj = { EXTRA_SMALL_10: "extraSmall10", EXTRA_SMALL: "extraSmall", SMALL: "small", SMALL_20: "small20", MEDIUM: "medium", LARGE: "large", CUSTOM: "custom", REFRESH_SMALL_16: "refreshSmall16", SMALL_14: "small14" };
let closure_5 = createCacheKey.createStyles(() => {
  obj = { iconColor: null };
  obj = { tintColor: ThemesDefault.colors.INTERACTIVE_TEXT_DEFAULT };
  obj[0] = obj;
  return obj;
});
const memoResult = importAllResult.memo(importAllResult.forwardRef((size) => {
  ({ color, disableColor } = size);
  if (disableColor === undefined) {
    disableColor = false;
  }
  let MEDIUM = size.size;
  if (MEDIUM === undefined) {
    MEDIUM = obj.MEDIUM;
  }
  ({ resizeMode, style } = size);
  if (resizeMode === undefined) {
    resizeMode = "cover";
  }
  ({ accessible, accessibilityLabel } = size);
  if (disableColor) {
    obj = { resizeMode: null, source: null, style: null, accessible: null, accessibilityLabel: null, fadeDuration: 0, ref: null };
    obj[0] = resizeMode;
    obj[1] = size.source;
    let num = 10;
    if (obj.EXTRA_SMALL_10 !== MEDIUM) {
      num = 12;
      if (tmp7.EXTRA_SMALL !== MEDIUM) {
        num = 18;
        if (tmp7.SMALL !== MEDIUM) {
          num = 14;
          if (tmp7.SMALL_14 !== MEDIUM) {
            num = 20;
            if (tmp7.SMALL_20 !== MEDIUM) {
              num = 24;
              if (tmp7.MEDIUM !== MEDIUM) {
                num = 32;
                if (tmp7.LARGE !== MEDIUM) {
                  num = 16;
                  if (tmp7.REFRESH_SMALL_16 !== MEDIUM) {
                    const CUSTOM = tmp7.CUSTOM;
                  }
                }
              }
            }
          }
        }
      }
    }
    obj = { width: null, height: null };
    obj[0] = num;
    obj[1] = num;
    const items = [obj, undefined, style];
    obj[2] = items;
    obj[3] = accessible;
    obj[4] = accessibilityLabel;
    obj[6] = arg1;
    return <Image width={null} height={null} />;
  } else if (null != color) {
    obj = { tintColor: null };
    obj[0] = color;
    let iconColor = obj;
  } else {
    iconColor = tmp2.iconColor;
  }
}));
memoResult.displayName = "Icon";
memoResult.Sizes = obj;
const result = require("set").fileFinishedImporting("design/void/Icon/native/Icon.tsx");

export default memoResult;
export const IconSizes = obj;
export const getIconSize = function getIconSize(arg0) {
  if (obj.EXTRA_SMALL_10 === arg0) {
    return 10;
  } else if (tmp.EXTRA_SMALL === arg0) {
    return 12;
  } else if (tmp.SMALL === arg0) {
    return 18;
  } else if (tmp.SMALL_14 === arg0) {
    return 14;
  } else if (tmp.SMALL_20 === arg0) {
    return 20;
  } else if (tmp.MEDIUM === arg0) {
    return 24;
  } else if (tmp.LARGE === arg0) {
    return 32;
  } else if (tmp.REFRESH_SMALL_16 === arg0) {
    return 16;
  }
};
export const getIconStyle = function getIconStyle(MEDIUM) {
  let width = 10;
  if (obj.EXTRA_SMALL_10 !== MEDIUM) {
    width = 12;
    if (tmp.EXTRA_SMALL !== MEDIUM) {
      width = 18;
      if (tmp.SMALL !== MEDIUM) {
        width = 14;
        if (tmp.SMALL_14 !== MEDIUM) {
          width = 20;
          if (tmp.SMALL_20 !== MEDIUM) {
            width = 24;
            if (tmp.MEDIUM !== MEDIUM) {
              width = 32;
              if (tmp.LARGE !== MEDIUM) {
                width = 16;
                if (tmp.REFRESH_SMALL_16 !== MEDIUM) {
                  const CUSTOM = tmp.CUSTOM;
                }
              }
            }
          }
        }
      }
    }
  }
  return { width, height: width };
};