// discord_app/modules/chat/native/placeholder/ChatPlaceholder.tsx
import nativeDefault from "../../../../../discord_common/js/packages/tokens/native.tsx";
import useWindowDimensionsDefault from "../../../screen/useWindowDimensions.native.tsx";
import useSafeAreaInsetsDefault from "../../../safe_area/useSafeAreaInsets.native.tsx";
import _modDef1655 from "../../../../../_runtime/metro/01655__.js";
import useSafeAreaInsetsKeyboardAwareDefault from "../../../safe_area/useSafeAreaInsetsKeyboardAware.native.tsx";
import useKeyboardAnimatedValueDefault from "../../../keyboard/native/useKeyboardAnimatedValue.tsx";
import useChatPlaceholderAnimatedStylesDefault from "useChatPlaceholderAnimatedStyles.tsx";
import getChatPlaceholderRowHeightDefault from "getChatPlaceholderRowHeight.tsx";
import ChatPlaceholderRowDefault from "ChatPlaceholderRow.tsx";
import noop from "../../../../../_runtime/metro/00019__.js";

const require = globalThis.__r;

const require = fn;
let closure_4 = fn(11865).useChatInputContainerHeight;
const jsx = fn(21).jsx;
const createStyles = fn(5306);
let obj = { placeholder: null };
const obj3 = {};
const merged = Object.assign(fn(17).StyleSheet.absoluteFillObject);
obj3.paddingBottom = nativeDefault.space.PX_24;
obj3.flexDirection = "column-reverse";
obj3.overflow = "hidden";
obj.placeholder = obj3;
let closure_6 = createStyles.createStyles(obj);
let closure_7 = {
  code: "(function ChatPlaceholderTsx1(){let[chatInputContainerHeight,animatedContainerBottomInset]=this.__closure;return{marginBottom:chatInputContainerHeight+animatedContainerBottomInset.get()};})",
};
const size = fn(2);
const result = size.fileFinishedImporting("modules/chat/native/placeholder/ChatPlaceholder.tsx");

export default noop.memo(function ChatPlaceholder(screenIndex) {
  let callback;
  let tmp2 = closure_4(screenIndex.screenIndex);
  const height = useWindowDimensionsDefault().height;
  const rect = useSafeAreaInsetsDefault();
  let sum = rect.top + rect.bottom;
  dependencyMap = sum;
  let diff =
    useSafeAreaInsetsKeyboardAwareDefault({ isKeyboardAwareOnAndroid: false, includeKeyboardHeight: true }).insets
      .bottom - rect.bottom;
  const tmp = closure_6();
  const tmp7 = useKeyboardAnimatedValueDefault(diff);
  items = [closure_7, tmp2, tmp7];
  _require = undefined;
  importDefault = undefined;
  [tmp8, tmp9, tmp10] = items;
  class ChatPlaceholderTsx1 {
    constructor() {
      obj = { marginBottom: closure_0 + closure_1.get() };
      return obj;
    }
  }
  const items1 = [tmp9, tmp10];
  ChatPlaceholderTsx1.__closure = items1;
  ChatPlaceholderTsx1.__workletHash = 13868441581206;
  ChatPlaceholderTsx1.__initData = tmp8;
  _require = undefined;
  const animatedStyle = require("../../../../../_runtime/metro/01655__.js").useAnimatedStyle(ChatPlaceholderTsx1);
  _require = callback.useRef([]);
  callback = callback.useCallback((arg0) => {
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
  const items2 = [height, sum, tmp2, callback];
  let obj = require("../../../../../_runtime/metro/01655__.js");
  const memo = callback.useMemo(() => {
    let diff;
    items = [];
    let num = 0;
    let num2 = 0;
    do {
      let tmp2 = callback(num);
      num2 = num2 + getChatPlaceholderRowHeightDefault(tmp2);
      let obj = { lines: tmp2 };
      let sum = num + 1;
      let arr = items.push(jsx(ChatPlaceholderRowDefault, { lines: tmp2 }, num));
      num = sum;
      diff = c1 - closure_0 - c2;
    } while (num2 < diff);
    return items;
  }, items2);
  const obj2 = { style: null, pointerEvents: "none", children: memo };
  const items3 = [
    tmp.placeholder,
    animatedStyle,
    useChatPlaceholderAnimatedStylesDefault({ visible: true, animated: true }),
  ];
  obj2.style = items3;
  return jsx(_modDef1655.View, { style: null, pointerEvents: "none", children: memo });
});
