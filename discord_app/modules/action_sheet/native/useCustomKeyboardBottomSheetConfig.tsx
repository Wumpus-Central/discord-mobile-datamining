// discord_app/modules/action_sheet/native/useCustomKeyboardBottomSheetConfig.tsx
import KeyboardTypes from "../../keyboard/native/KeyboardTypes.tsx";
import useSystemKeyboardHeight from "../../keyboard/native/useSystemKeyboardHeight.native.tsx";
import useKeyboardType from "../../keyboard/native/useKeyboardType.tsx";
import noop from "../../../../_runtime/metro/00019__.js";
import AccessibilityStore from "../../a11y/AccessibilityStore.tsx";

const require = globalThis.__r;

require = fn;
const ReactCompilerGating = fn(558);
const size = fn(2);
const result = size.fileFinishedImporting("modules/action_sheet/native/useCustomKeyboardBottomSheetConfig.tsx");

export default ReactCompilerGating.isReactCompilerEnabled()
  ? (arg0) => {
      const cResult = require("c").c(15);
      ({ forceMaxHeight, enablePanDownToClose } = arg0);
      if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
        const obj2 = { ignoreKeyboard: true };
        cResult[0] = obj2;
        let first = obj2;
      } else {
        first = cResult[0];
      }
      const tmp8 = minimum(1484)(first);
      _require = tmp8;
      const tmp9 = minimum(9789)();
      minimum = tmp9.minimum;
      const maximum = tmp9.maximum;
      if (cResult[1] === minimum) {
        if (cResult[2] === tmp8.height) {
          let tmp10 = cResult[3];
        }
        ({ initialPosition, animateOnMount } = tmp7(5991)(tmp10));
        if (cResult[4] === maximum) {
          if (cResult[5] === minimum) {
            if (cResult[6] === tmp4) {
              if (cResult[8] === maximum) {
                if (cResult[9] === animateOnMount) {
                  if (cResult[10] === tmp5) {
                    if (cResult[11] === initialPosition) {
                      if (cResult[12] === tmp12) {
                        if (cResult[13] === tmp8.height) {
                          let tmp15 = cResult[14];
                        }
                        return tmp15;
                      }
                    }
                  }
                }
              }
              let obj3 = {
                animateOnMount,
                enablePanDownToClose: tmp5,
                accessible: null,
                contentHeight: null,
                containerHeight: null,
                enableDynamicSizing: false,
                initialPosition: null,
                keyboardBehavior: "extend",
                android_keyboardInputMode: null,
                snapPoints: null,
              };
              let tmpResult = tmp(1369);
              obj3.accessible = tmp(1369).isAndroid() && undefined;
              obj3.contentHeight = maximum;
              obj3.containerHeight = tmp8.height;
              obj3.initialPosition = initialPosition;
              let str;
              if (tmp(9788).IS_SYSTEM_KEYBOARD_EXTERNAL) {
                str = "adjustResize";
              }
              obj3.android_keyboardInputMode = str;
              obj3.snapPoints = cResult[7];
              cResult[8] = maximum;
              cResult[9] = animateOnMount;
              cResult[10] = tmp5;
              cResult[11] = initialPosition;
              cResult[12] = cResult[7];
              cResult[13] = tmp8.height;
              cResult[14] = obj3;
              tmp15 = obj3;
              const tmp16 = tmp(1369).isAndroid() && undefined;
            }
          }
        }
        const items = [,];
        if (tmp4) {
          items[0] = maximum;
          items[1] = maximum;
          let tmp13 = items;
        } else {
          items[0] = minimum;
          items[1] = maximum;
          tmp13 = items;
        }
        cResult[4] = maximum;
        cResult[5] = minimum;
        cResult[6] = tmp4;
        cResult[7] = tmp13;
        const tmp11 = tmp7(5991)(tmp10);
      }
      const fn = function c() {
        const obj = { initialPosition: styles.height - minimum, animateOnMount: false };
        let tmp3 = obj;
        if (!obj2.isAndroid()) {
          tmp3 = obj;
          if (!AccessibilityStore.useReducedMotion) {
            let obj3 = obj;
            if (0 === tmpResult.getSystemKeyboardHeight()) {
              const keyboardTypePrevious = useKeyboardType.getKeyboardTypePrevious();
              obj3 = obj;
              if (keyboardTypePrevious === KeyboardTypes.KeyboardTypes.SYSTEM) {
                obj3 = { animateOnMount: true };
              }
              const tmpResult2 = useKeyboardType;
            }
            tmp3 = obj3;
            tmpResult = useSystemKeyboardHeight;
          }
        }
        return tmp3;
      };
      cResult[1] = minimum;
      cResult[2] = tmp8.height;
      cResult[3] = fn;
      tmp10 = fn;
      let obj = require("c");
      tmp7 = minimum;
    }
  : (forceMaxHeight) => {
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
      minimum = tmp3.minimum;
      const maximum = tmp3.maximum;
      let items = [flag, maximum, minimum];
      ({ initialPosition, animateOnMount } = require("useInitialValue")(() => {
        const obj = { initialPosition: styles.height - minimum, animateOnMount: false };
        let tmp3 = obj;
        if (!obj2.isAndroid()) {
          tmp3 = obj;
          if (!AccessibilityStore.useReducedMotion) {
            let obj3 = obj;
            if (0 === tmpResult.getSystemKeyboardHeight()) {
              const keyboardTypePrevious = useKeyboardType.getKeyboardTypePrevious();
              obj3 = obj;
              if (keyboardTypePrevious === KeyboardTypes.KeyboardTypes.SYSTEM) {
                obj3 = { animateOnMount: true };
              }
              const tmpResult2 = useKeyboardType;
            }
            tmp3 = obj3;
            tmpResult = useSystemKeyboardHeight;
          }
        }
        return tmp3;
      }));
      let obj = {
        animateOnMount,
        enablePanDownToClose: flag2,
        accessible: null,
        contentHeight: null,
        containerHeight: null,
        enableDynamicSizing: false,
        initialPosition: null,
        keyboardBehavior: "extend",
        android_keyboardInputMode: null,
        snapPoints: null,
      };
      const memo = maximum.useMemo(() => {
        if (flag) {
          const items = [maximum, maximum];
          let items1 = items;
        } else {
          items1 = [minimum, maximum];
        }
        return items1;
      }, items);
      const tmp = minimum;
      const tmp4 = require("useInitialValue")(() => {
        const obj = { initialPosition: styles.height - minimum, animateOnMount: false };
        let tmp3 = obj;
        if (!obj2.isAndroid()) {
          tmp3 = obj;
          if (!AccessibilityStore.useReducedMotion) {
            let obj3 = obj;
            if (0 === tmpResult.getSystemKeyboardHeight()) {
              const keyboardTypePrevious = useKeyboardType.getKeyboardTypePrevious();
              obj3 = obj;
              if (keyboardTypePrevious === KeyboardTypes.KeyboardTypes.SYSTEM) {
                obj3 = { animateOnMount: true };
              }
              const tmpResult2 = useKeyboardType;
            }
            tmp3 = obj3;
            tmpResult = useSystemKeyboardHeight;
          }
        }
        return tmp3;
      });
      const tmp6 = flag;
      const obj2 = flag(minimum[2]);
      obj.accessible = flag(minimum[2]).isAndroid() && undefined;
      obj.contentHeight = maximum;
      obj.containerHeight = tmp2.height;
      obj.initialPosition = initialPosition;
      let str;
      if (tmp6(tmp[11]).IS_SYSTEM_KEYBOARD_EXTERNAL) {
        str = "adjustResize";
      }
      obj.android_keyboardInputMode = str;
      obj.snapPoints = memo;
      return obj;
    };
