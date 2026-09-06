// discord_app/modules/chat/native/placeholder/ChatPlaceholder.tsx
import nativeDefault from "../../../../../discord_common/js/packages/tokens/native.tsx";
import getChatPlaceholderRowHeightDefault from "getChatPlaceholderRowHeight.tsx";
import ChatPlaceholderRowDefault from "ChatPlaceholderRow.tsx";
import noop from "../../../../../_runtime/metro/00019__.js";

let closure_3 = fn(9485).useChatInputContainerHeight;
const jsx = fn(21).jsx;
const createStyles = fn(4560);
let obj = { placeholder: null };
obj = {};
const merged = Object.assign(fn(17).StyleSheet.absoluteFillObject);
obj.paddingBottom = nativeDefault.space.PX_24;
obj.flexDirection = "column-reverse";
obj.overflow = "hidden";
obj.placeholder = obj;
let closure_5 = createStyles.createStyles(obj);
const size = fn(2);
const result = size.fileFinishedImporting("modules/chat/native/placeholder/ChatPlaceholder.tsx");

export default noop.memo(function ChatPlaceholder(screenIndex) {
  let height;
  c3 = undefined;
  let tmp2 = c3(screenIndex.screenIndex);
  importDefault = tmp2;
  height = require("useWindowDimensions")().height;
  const rect = require("useSafeAreaInsets")();
  const insets = require("useSafeAreaInsetsKeyboardAware")({
    isKeyboardAwareOnAndroid: false,
    includeKeyboardHeight: true,
  }).insets;
  let diff = insets.bottom - rect.bottom;
  let sum = rect.top + insets.bottom;
  noop = diff;
  c3 = sum;
  let items = [tmp2, diff];
  const memo = noop.useMemo(() => ({ marginBottom: closure_0 + c2 }), items);
  importDefault = noop.useRef([]);
  const callback = noop.useCallback((arg0) => {
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
  const items1 = [height, sum, tmp2, callback];
  const tmp = closure_5();
  const memo1 = noop.useMemo(() => {
    let diff;
    const items = [];
    let num = 0;
    let num2 = 0;
    do {
      let tmp2 = callback(num);
      num2 = num2 + getChatPlaceholderRowHeightDefault(tmp2);
      let obj = { lines: tmp2 };
      let sum = num + 1;
      let arr = items.push(jsx(ChatPlaceholderRowDefault, { lines: tmp2 }, num));
      num = sum;
      diff = height - closure_0 - c3;
    } while (num2 < diff);
    return items;
  }, items1);
  let obj = { style: null, pointerEvents: "none", children: memo1 };
  const items2 = [
    tmp.placeholder,
    memo,
    require("useChatPlaceholderAnimatedStyles")({ visible: true, animated: true }),
  ];
  obj.style = items2;
  return callback(require("ReanimatedRexport").View, obj);
});
