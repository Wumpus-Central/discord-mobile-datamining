// === Module 12335: ChatPlaceholder ===

// Module 12335 (ChatPlaceholder)
import c from "c" /* 576 */;
import nativeDefault from "native" /* 587 */;
import useWindowDimensionsDefault from "useWindowDimensions" /* 1497 */;
import useSafeAreaInsetsDefault from "useSafeAreaInsets" /* 1631 */;
import useSafeAreaInsetsKeyboardAwareDefault from "useSafeAreaInsetsKeyboardAware" /* 6663 */;
import useChatPlaceholderAnimatedStylesDefault from "useChatPlaceholderAnimatedStyles" /* 12336 */;
import getChatPlaceholderRowHeightDefault from "getChatPlaceholderRowHeight" /* 12337 */;
import ChatPlaceholderRowDefault from "ChatPlaceholderRow" /* 12338 */;
import noop from "module_19" /* 19 */;

const ReanimatedRexportDefault = tmp14(4811);
require = fn;
let closure_4 = fn(9356).useChatInputContainerHeight;
const jsx = fn(21).jsx;
const createStyles = fn(5091);
let obj = { placeholder: null };
let obj3 = {};
const merged = Object.assign(fn(17).StyleSheet.absoluteFillObject);
obj3.paddingBottom = nativeDefault.space.PX_24;
obj3.flexDirection = "column-reverse";
obj3.overflow = "hidden";
obj.placeholder = obj3;
let closure_6 = createStyles.createStyles(obj);
let ReactCompilerGating = fn(558);
let closure_7 = ReactCompilerGating.isReactCompilerEnabled() ? (function useLinesForRowIndexCallback() {
  const cResult = c.c(2);
  if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
    const items = [];
    cResult[0] = items;
    let first = items;
  } else {
    first = cResult[0];
  }
  noop.useRef(first);
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
    let tmp3 = fn;
  } else {
    tmp3 = cResult[1];
  }
  return tmp3;
}) : (function useLinesForRowIndexCallback() {
  noop.useRef([]);
  return noop.useCallback((arg0) => {
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
});
ReactCompilerGating = fn(558);
let closure_8 = ReactCompilerGating.isReactCompilerEnabled() ? (function useBottomSafeAreaInset() {
  const cResult = c.c(4);
  const rect = useSafeAreaInsetsDefault();
  if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
    const obj2 = { isKeyboardAwareOnAndroid: false, includeKeyboardHeight: true };
    cResult[0] = obj2;
    let first = obj2;
  } else {
    first = cResult[0];
  }
  const insets = useSafeAreaInsetsKeyboardAwareDefault(first).insets;
  const diff = insets.bottom - rect.bottom;
  const sum = rect.top + insets.bottom;
  if (cResult[1] === diff) {
    if (cResult[2] === sum) {
      let tmp7 = cResult[3];
    }
    return tmp7;
  }
  const obj3 = { containerBottomInset: diff, windowVerticalInset: sum };
  cResult[1] = diff;
  cResult[2] = sum;
  cResult[3] = obj3;
  tmp7 = obj3;
}) : (function useBottomSafeAreaInset() {
  const rect = useSafeAreaInsetsDefault();
  const insets = useSafeAreaInsetsKeyboardAwareDefault({ isKeyboardAwareOnAndroid: false, includeKeyboardHeight: true }).insets;
  return { containerBottomInset: insets.bottom - rect.bottom, windowVerticalInset: rect.top + insets.bottom };
});
ReactCompilerGating = fn(558);
const size = fn(2);
const result = size.fileFinishedImporting("modules/chat/native/placeholder/ChatPlaceholder.tsx");

export default noop.memo(ReactCompilerGating.isReactCompilerEnabled() ? (function ChatPlaceholder(screenIndex) {
  let diff;
  let sum1;
  let sum2;
  const cResult = c.c(18);
  const tmp3 = closure_6();
  const tmp4 = closure_4(screenIndex.screenIndex);
  const height = useWindowDimensionsDefault().height;
  const tmp6 = closure_8();
  const windowVerticalInset = tmp6.windowVerticalInset;
  const sum = tmp4 + tmp6.containerBottomInset;
  if (cResult[0] !== sum) {
    const obj2 = { marginBottom: sum };
    cResult[0] = sum;
    cResult[1] = obj2;
    let tmp8 = obj2;
  } else {
    tmp8 = cResult[1];
  }
  const tmp9 = closure_7();
  if (cResult[2] === Symbol.for("react.memo_cache_sentinel")) {
    const obj3 = { visible: true, animated: true };
    cResult[2] = obj3;
    let tmp10 = obj3;
  } else {
    tmp10 = cResult[2];
  }
  const tmp11 = useChatPlaceholderAnimatedStylesDefault(tmp10);
  if (cResult[3] === tmp4) {
    if (cResult[4] === tmp9) {
      if (cResult[5] === 0) {
        if (cResult[6] === 0) {
          if (cResult[7] === height) {
            if (cResult[8] === windowVerticalInset) {
              let tmp12 = cResult[9];
            }
            if (cResult[11] === tmp8) {
              if (cResult[12] === tmp11) {
                if (cResult[13] === tmp3.placeholder) {
                  let tmp23 = cResult[14];
                }
                if (cResult[15] === tmp12) {
                  if (cResult[16] === tmp23) {
                    let tmp24 = cResult[17];
                  }
                  return tmp24;
                }
                const obj4 = { style: tmp23, pointerEvents: "none", children: tmp12 };
                const tmp26 = jsx(ReanimatedRexportDefault.View, { style: tmp23, pointerEvents: "none", children: tmp12 });
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
    let obj5 = { lines: tmp9Result };
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
}) : (function ChatPlaceholder(screenIndex) {
  let height;
  let containerBottomInset;
  closure_4 = undefined;
  let tmp2 = closure_4(screenIndex.screenIndex);
  closure_0 = tmp2;
  height = height(containerBottomInset[10])().height;
  const tmp3 = closure_8();
  containerBottomInset = tmp3.containerBottomInset;
  const windowVerticalInset = tmp3.windowVerticalInset;
  let items = [tmp2, containerBottomInset];
  const memo = windowVerticalInset.useMemo(() => ({ marginBottom: closure_0 + containerBottomInset }), items);
  const tmp5 = closure_7();
  closure_4 = tmp5;
  const items1 = [height, windowVerticalInset, tmp2, tmp5];
  const tmp = closure_6();
  const memo1 = windowVerticalInset.useMemo(() => {
    let diff;
    const items = [];
    let num = 0;
    let num2 = 0;
    do {
      let tmp2 = closure_4(num);
      num2 = num2 + getChatPlaceholderRowHeightDefault(tmp2);
      let obj = { lines: tmp2 };
      let sum = num + 1;
      let arr = items.push(jsx(ChatPlaceholderRowDefault, { lines: tmp2 }, num));
      num = sum;
      diff = height - closure_0 - windowVerticalInset;
    } while (num2 < diff);
    return items;
  }, items1);
  let obj = { style: null, pointerEvents: "none", children: memo1 };
  const items2 = [tmp.placeholder, memo, height(containerBottomInset[11])({ visible: true, animated: true })];
  obj.style = items2;
  return jsx(height(containerBottomInset[14]).View, { style: null, pointerEvents: "none", children: memo1 });
}));