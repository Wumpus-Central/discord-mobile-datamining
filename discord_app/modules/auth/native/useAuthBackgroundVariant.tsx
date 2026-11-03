// discord_app/modules/auth/native/useAuthBackgroundVariant.tsx
import useWindowDimensionsDefault from "../../screen/useWindowDimensions.native.tsx";
import _slicedToArray from "../../../../_runtime/metro/00032__.js";
import noop from "../../../../_runtime/metro/00019__.js";

const size = fn(2);
let result = size.fileFinishedImporting("modules/auth/native/useAuthBackgroundVariant.tsx");

export default function useAuthBackgroundVariant() {
  ({ width, height } = useWindowDimensionsDefault({ ignoreKeyboard: true }));
  let result = null;
  if (width > 0) {
    result = null;
    if (height > 0) {
      result = width / height;
    }
  }
  importDefault = result;
  const tmp = useWindowDimensionsDefault({ ignoreKeyboard: true });
  const first = _slicedToArray(
    noop.useState(() => {
      let str = "tall";
      if (null != result) {
        str = "tall";
        if (tmp >= 0.72) {
          str = "square";
        }
      }
      return str;
    }),
    2,
  )[0];
  if (null == result) {
    // // eliminated: always false
    return first;
  } else {
    let str = "square";
    if ("square" === first) {
      if (result < 0.68) {
        str = "tall";
      }
    } else {
      const str2 = "tall";
    }
  }
}
export const AUTH_BACKGROUND_SQUARE_ASPECT_RATIO = 0.72;
export const AUTH_BACKGROUND_ENTER_SQUARE_ASPECT_RATIO = 0.78;
export const AUTH_BACKGROUND_EXIT_SQUARE_ASPECT_RATIO = 0.68;
export function getInitialAuthBackgroundVariant(arg0) {
  let str = "tall";
  if (null != arg0) {
    str = "tall";
    if (arg0 >= 0.72) {
      str = "square";
    }
  }
  return str;
}
export function getNextAuthBackgroundVariant(arg0, arg1) {
  if (null == arg1) {
    return arg0;
  } else {
    let str = "square";
    if ("square" === arg0) {
      if (arg1 < 0.68) {
        str = "tall";
      }
    } else {
      const str2 = "tall";
    }
  }
}
