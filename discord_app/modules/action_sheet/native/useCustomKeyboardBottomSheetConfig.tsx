// discord_app/modules/action_sheet/native/useCustomKeyboardBottomSheetConfig.tsx
import PlatformUtils from "../../../utils/PlatformUtils.tsx";
import KeyboardTypes from "../../keyboard/native/KeyboardTypes.tsx";
import useSystemKeyboardHeight from "../../keyboard/native/useSystemKeyboardHeight.native.tsx";
import useKeyboardType from "../../keyboard/native/useKeyboardType.tsx";
import react from "../../../../_runtime/00019_react.js";
import AccessibilityStore from "../../a11y/AccessibilityStore.tsx";
import ReactCompilerGating from "../../react_compiler/ReactCompilerGating.tsx";
import size from "../../../../_runtime/metro/00002__.js";

const require = globalThis.__r;
let _require, importDefault;

let tmp2 = ReactCompilerGating.isReactCompilerEnabled()
  ? (arg0) => {
      let animateOnMount;
      let enablePanDownToClose;
      let first;
      let forceMaxHeight;
      let initialPosition;
      let minimum;
      let str;
      let styles;
      let tmpResult;
      let obj = require("react");
      const cResult = obj.c(15);
      ({ forceMaxHeight, enablePanDownToClose } = arg0);
      if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
        let obj2 = { ignoreKeyboard: true };
        cResult[0] = obj2;
        first = obj2;
      } else {
        first = cResult[0];
      }
      const tmp8 = minimum(1484)(first);
      _require = tmp8;
      const tmp9 = minimum(9776)();
      minimum = tmp9.minimum;
      const maximum = tmp9.maximum;
      if (cResult[1] === minimum) {
        let tmp10;
        let tmp13;
        if (cResult[2] === tmp8.height) {
          tmp10 = cResult[3];
        }
        ({ initialPosition, animateOnMount } = minimum(5984)(tmp10));
        minimum(5984)(tmp10);
        if (cResult[4] === maximum) {
          if (cResult[5] === minimum) {
            let tmp12;
            if (cResult[6] === (undefined !== forceMaxHeight && forceMaxHeight)) {
              tmp12 = cResult[7];
            }
            if (cResult[8] === maximum) {
              if (cResult[9] === animateOnMount) {
                if (cResult[10] === (undefined !== enablePanDownToClose && enablePanDownToClose)) {
                  if (cResult[11] === initialPosition) {
                    if (cResult[12] === tmp12) {
                      let tmp14;
                      if (cResult[13] === tmp8.height) {
                        tmp14 = cResult[14];
                      }
                      return tmp14;
                    }
                  }
                }
              }
            }
            let obj3 = {
              animateOnMount,
              enablePanDownToClose: undefined !== enablePanDownToClose && enablePanDownToClose,
              accessible: tmpResult.isAndroid() && undefined,
              contentHeight: maximum,
              containerHeight: tmp8.height,
              enableDynamicSizing: false,
              initialPosition,
              keyboardBehavior: "extend",
              android_keyboardInputMode: str,
              snapPoints: tmp12,
            };
            tmpResult = tmp(1369);
            str = undefined;
            tmpResult.isAndroid() && undefined;
            if (require("useSafeAreaBottomKeyboardInfoController").IS_SYSTEM_KEYBOARD_EXTERNAL) {
              str = "adjustResize";
            }
            cResult[8] = maximum;
            cResult[9] = animateOnMount;
            cResult[10] = undefined !== enablePanDownToClose && enablePanDownToClose;
            cResult[11] = initialPosition;
            cResult[12] = tmp12;
            cResult[13] = tmp8.height;
            cResult[14] = obj3;
            tmp14 = obj3;
          }
        }
        const items = [,];
        if (undefined !== forceMaxHeight && forceMaxHeight) {
          items[0] = maximum;
          items[1] = maximum;
          tmp13 = items;
        } else {
          items[0] = minimum;
          items[1] = maximum;
          tmp13 = items;
        }
        cResult[4] = maximum;
        cResult[5] = minimum;
        cResult[6] = undefined !== forceMaxHeight && forceMaxHeight;
        cResult[7] = tmp13;
        tmp12 = tmp13;
      }
      const fn = function c() {
        const obj = { initialPosition: styles.height - minimum, animateOnMount: false };
        let tmp3 = obj;
        const obj2 = PlatformUtils;
        if (!obj2.isAndroid()) {
          tmp3 = obj;
          if (!AccessibilityStore.useReducedMotion) {
            let obj3 = obj;
            const tmpResult = useSystemKeyboardHeight;
            if (0 === tmpResult.getSystemKeyboardHeight()) {
              const tmpResult2 = useKeyboardType;
              const keyboardTypePrevious = tmpResult2.getKeyboardTypePrevious();
              obj3 = obj;
              if (keyboardTypePrevious === KeyboardTypes.KeyboardTypes.SYSTEM) {
                obj3 = { animateOnMount: true };
              }
            }
            tmp3 = obj3;
          }
        }
        return tmp3;
      };
      cResult[1] = minimum;
      cResult[2] = tmp8.height;
      cResult[3] = fn;
      tmp10 = fn;
    }
  : (forceMaxHeight) => {
      let animateOnMount;
      let initialPosition;
      let memo;
      let obj2;
      let str;
      let styles;
      const f109372 = () => {
        const obj = { initialPosition: styles.height - minimum, animateOnMount: false };
        let tmp3 = obj;
        const obj2 = PlatformUtils;
        if (!obj2.isAndroid()) {
          tmp3 = obj;
          if (!AccessibilityStore.useReducedMotion) {
            let obj3 = obj;
            const tmpResult = useSystemKeyboardHeight;
            if (0 === tmpResult.getSystemKeyboardHeight()) {
              const tmpResult2 = useKeyboardType;
              const keyboardTypePrevious = tmpResult2.getKeyboardTypePrevious();
              obj3 = obj;
              if (keyboardTypePrevious === KeyboardTypes.KeyboardTypes.SYSTEM) {
                obj3 = { animateOnMount: true };
              }
            }
            tmp3 = obj3;
          }
        }
        return tmp3;
      };
      let flag = forceMaxHeight.forceMaxHeight;
      if (flag === undefined) {
        flag = false;
      }
      let flag2 = forceMaxHeight.enablePanDownToClose;
      if (flag2 === undefined) {
        flag2 = false;
      }
      importDefault = undefined;
      let minimum;
      const tmp2 = require("useWindowDimensions")({ ignoreKeyboard: true });
      importDefault = tmp2;
      let tmp3 = require("useKeyboardActionSheetHeight")();
      const tmp = minimum;
      minimum = tmp3.minimum;
      const maximum = tmp3.maximum;
      let items = [flag, maximum, minimum];
      ({ initialPosition, animateOnMount } = require("useInitialValue")(f109372));
      let obj = {
        animateOnMount,
        enablePanDownToClose: flag2,
        accessible: obj2.isAndroid() && undefined,
        contentHeight: maximum,
        containerHeight: tmp2.height,
        enableDynamicSizing: false,
        initialPosition,
        keyboardBehavior: "extend",
        android_keyboardInputMode: str,
        snapPoints: memo,
      };
      require("useInitialValue")(f109372);
      memo = maximum.useMemo(() => {
        let items1;
        if (flag) {
          const items = [maximum, maximum];
          items1 = items;
        } else {
          items1 = [minimum, maximum];
        }
        return items1;
      }, items);
      obj2 = flag(minimum[2]);
      str = undefined;
      obj2.isAndroid() && undefined;
      const tmp6 = flag;
      if (tmp6(tmp[11]).IS_SYSTEM_KEYBOARD_EXTERNAL) {
        str = "adjustResize";
      }
      return obj;
    };
const result = size.fileFinishedImporting("modules/action_sheet/native/useCustomKeyboardBottomSheetConfig.tsx");

export default tmp2;
