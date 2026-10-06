// discord_app/modules/chat/native/placeholder/ChatPlaceholder.tsx
import react_native from "../../../../../_runtime/00017_react-native.js";
import Fragment from "../../../../../_runtime/react/00021_Fragment.js";
import react2 from "../../../../../_runtime/00576_react.js";
import nativeDefault from "../../../../../discord_common/js/packages/tokens/native.tsx";
import useWindowDimensionsDefault from "../../../screen/useWindowDimensions.native.tsx";
import useSafeAreaInsetsDefault from "../../../safe_area/useSafeAreaInsets.native.tsx";
import useSafeAreaInsetsKeyboardAwareDefault from "../../../safe_area/useSafeAreaInsetsKeyboardAware.native.tsx";
import useChatBottomManagerUIStore from "../../../chat_input/native/useChatBottomManagerUIStore.tsx";
import useChatPlaceholderAnimatedStylesDefault from "useChatPlaceholderAnimatedStyles.tsx";
import getChatPlaceholderRowHeightDefault from "getChatPlaceholderRowHeight.tsx";
import ChatPlaceholderRowDefault from "ChatPlaceholderRow.tsx";
import react from "../../../../../_runtime/00019_react.js";
import createStyles_mod from "../../../../design/components/Styles/native/createStyles.tsx";
import ReactCompilerGating_mod from "../../../react_compiler/ReactCompilerGating.tsx";
import size from "../../../../../_runtime/metro/00002__.js";

let screenIndex;

let obj2;
let tmp14;
const ReanimatedRexportDefault = tmp14(4618);
const StyleSheet = react_native.StyleSheet;
let closure_4 = useChatBottomManagerUIStore.useChatInputContainerHeight;
const jsx = Fragment.jsx;
let createStyles = createStyles_mod;
let obj = { placeholder: obj2 };
obj2 = { paddingBottom: nativeDefault.space.PX_24, flexDirection: "column-reverse", overflow: "hidden" };
createStyles = createStyles.createStyles;
const merged = Object.assign(StyleSheet.absoluteFillObject);
let closure_6 = createStyles(obj);
let ReactCompilerGating = ReactCompilerGating_mod;
let closure_7 = ReactCompilerGating.isReactCompilerEnabled()
  ? () => {
      let first;
      let tmp3;
      const obj = react2;
      const cResult = obj.c(2);
      if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
        const items = [];
        cResult[0] = items;
        first = items;
      } else {
        first = cResult[0];
      }
      let closure_0 = react.useRef(first);
      if (cResult[1] === Symbol.for("react.memo_cache_sentinel")) {
        const fn = function l(arg0) {
          let tmp2 = ref.current[arg0];
          if (null == tmp2) {
            const _Math = Math;
            const _Math2 = Math;
            const sum = Math.floor(3 * Math.random()) + 1;
            tmp.current[arg0] = sum;
            tmp2 = sum;
          }
          return tmp2;
        };
        cResult[1] = fn;
        tmp3 = fn;
      } else {
        tmp3 = cResult[1];
      }
      return tmp3;
    }
  : () => {
      let closure_0 = react.useRef([]);
      return react.useCallback((arg0) => {
        let tmp2 = ref.current[arg0];
        if (null == tmp2) {
          const _Math = Math;
          const _Math2 = Math;
          const sum = Math.floor(3 * Math.random()) + 1;
          tmp.current[arg0] = sum;
          tmp2 = sum;
        }
        return tmp2;
      }, []);
    };
ReactCompilerGating = ReactCompilerGating_mod;
let closure_8 = ReactCompilerGating.isReactCompilerEnabled()
  ? () => {
      let first;
      const obj = react2;
      const cResult = obj.c(4);
      const rect = useSafeAreaInsetsDefault();
      if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
        const obj2 = { isKeyboardAwareOnAndroid: false, includeKeyboardHeight: true };
        cResult[0] = obj2;
        first = obj2;
      } else {
        first = cResult[0];
      }
      const insets = useSafeAreaInsetsKeyboardAwareDefault(first).insets;
      const diff = insets.bottom - rect.bottom;
      const sum = rect.top + insets.bottom;
      if (cResult[1] === diff) {
        let tmp7;
        if (cResult[2] === sum) {
          tmp7 = cResult[3];
        }
        return tmp7;
      }
      const obj3 = { containerBottomInset: diff, windowVerticalInset: sum };
      cResult[1] = diff;
      cResult[2] = sum;
      cResult[3] = obj3;
      tmp7 = obj3;
    }
  : () => {
      const rect = useSafeAreaInsetsDefault();
      const insets = useSafeAreaInsetsKeyboardAwareDefault({
        isKeyboardAwareOnAndroid: false,
        includeKeyboardHeight: true,
      }).insets;
      return { containerBottomInset: insets.bottom - rect.bottom, windowVerticalInset: rect.top + insets.bottom };
    };
ReactCompilerGating = ReactCompilerGating_mod;
const memoResult = react.memo(
  ReactCompilerGating.isReactCompilerEnabled()
    ? (screenIndex) => {
        let diff;
        let sum1;
        let sum2;
        let tmp10;
        let tmp8;
        const obj = react2;
        const cResult = obj.c(18);
        screenIndex = screenIndex.screenIndex;
        const tmp3 = closure_6();
        const tmp4 = closure_4(screenIndex);
        const height = useWindowDimensionsDefault().height;
        const tmp6 = closure_8();
        const windowVerticalInset = tmp6.windowVerticalInset;
        const sum = tmp4 + tmp6.containerBottomInset;
        if (cResult[0] !== sum) {
          const obj2 = { marginBottom: sum };
          cResult[0] = sum;
          cResult[1] = obj2;
          tmp8 = obj2;
        } else {
          tmp8 = cResult[1];
        }
        const tmp9 = closure_7();
        if (cResult[2] === Symbol.for("react.memo_cache_sentinel")) {
          const obj3 = { visible: true, animated: true };
          cResult[2] = obj3;
          tmp10 = obj3;
        } else {
          tmp10 = cResult[2];
        }
        const tmp11 = useChatPlaceholderAnimatedStylesDefault(tmp10);
        if (cResult[3] === tmp4) {
          if (cResult[4] === tmp9) {
            if (cResult[5] === 0) {
              if (cResult[6] === 0) {
                if (cResult[7] === height) {
                  let tmp12;
                  if (cResult[8] === windowVerticalInset) {
                    tmp12 = cResult[9];
                  }
                  if (cResult[11] === tmp8) {
                    if (cResult[12] === tmp11) {
                      let tmp23;
                      if (cResult[13] === tmp3.placeholder) {
                        tmp23 = cResult[14];
                      }
                      if (cResult[15] === tmp12) {
                        let tmp24;
                        if (cResult[16] === tmp23) {
                          tmp24 = cResult[17];
                        }
                        return tmp24;
                      }
                      const tmp26 = jsx(ReanimatedRexportDefault.View, {
                        style: tmp23,
                        pointerEvents: "none",
                        children: tmp12,
                      });
                      cResult[15] = tmp12;
                      cResult[16] = tmp23;
                      cResult[17] = tmp26;
                      tmp24 = tmp26;
                    }
                  }
                  const items = [tmp3.placeholder, tmp8, tmp11];
                  cResult[11] = tmp8;
                  cResult[12] = tmp11;
                  cResult[13] = tmp3.placeholder;
                  cResult[14] = items;
                  tmp23 = items;
                }
              }
            }
          }
        }
        const items1 = [];
        let num5 = 0;
        let num6 = 0;
        do {
          let tmp9Result = tmp9(num5);
          sum1 = num6 + getChatPlaceholderRowHeightDefault(tmp9Result);
          sum2 = num5 + 1;
          let arr = items1.push(jsx(ChatPlaceholderRowDefault, { lines: tmp9Result }, num5));
          num5 = sum2;
          num6 = sum1;
          diff = height - tmp4 - windowVerticalInset;
        } while (sum1 < diff);
        cResult[3] = tmp4;
        cResult[4] = tmp9;
        cResult[5] = sum2;
        cResult[6] = sum1;
        cResult[7] = height;
        cResult[8] = windowVerticalInset;
        cResult[9] = items1;
        cResult[10] = sum1;
        tmp12 = items1;
      }
    : (screenIndex) => {
        let height;
        let containerBottomInset;
        closure_4 = undefined;
        screenIndex = screenIndex.screenIndex;
        const tmp = closure_6();
        let tmp2 = closure_4(screenIndex);
        let closure_0 = tmp2;
        height = height(containerBottomInset[10])().height;
        const tmp3 = closure_8();
        containerBottomInset = tmp3.containerBottomInset;
        const windowVerticalInset = tmp3.windowVerticalInset;
        let items = [tmp2, containerBottomInset];
        const memo = windowVerticalInset.useMemo(() => ({ marginBottom: closure_0 + containerBottomInset }), items);
        const tmp5 = closure_7();
        closure_4 = tmp5;
        const items1 = [height, windowVerticalInset, tmp2, tmp5];
        const tmp6 = height(containerBottomInset[11])({ visible: true, animated: true });
        const memo1 = windowVerticalInset.useMemo(() => {
          let diff;
          const items = [];
          let num = 0;
          let num2 = 0;
          do {
            let tmp2 = closure_4(num);
            num2 = num2 + getChatPlaceholderRowHeightDefault(tmp2);
            let sum = num + 1;
            let arr = items.push(jsx(ChatPlaceholderRowDefault, { lines: tmp2 }, num));
            num = sum;
            diff = height - closure_0 - windowVerticalInset;
          } while (num2 < diff);
          return items;
        }, items1);
        const items2 = [tmp.placeholder, memo, tmp6];
        return jsx(height(containerBottomInset[14]).View, { style: items2, pointerEvents: "none", children: memo1 });
      },
);
const result = size.fileFinishedImporting("modules/chat/native/placeholder/ChatPlaceholder.tsx");

export default memoResult;
