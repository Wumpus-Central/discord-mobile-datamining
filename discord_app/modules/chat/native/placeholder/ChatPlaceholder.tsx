import importAllResult from "noop";
import { useChatInputContainerHeight as closure_3 } from "updateChatInputContainerHeight";
import { jsx } from "jsxProd";
import createCacheKey from "createCacheKey";

let obj = { placeholder: null };
obj = {};
const merged = Object.assign(require("get ActivityIndicator").StyleSheet.absoluteFillObject);
obj.paddingBottom = require("Themes").space.PX_24;
obj.flexDirection = "column-reverse";
obj.overflow = "hidden";
obj[0] = obj;
let closure_5 = createCacheKey.createStyles(obj);
const memoResult = importAllResult.memo(function ChatPlaceholder(screenIndex) {
  let importDefault;
  let height;
  let importAllResult;
  let callback;
  callback = undefined;
  let tmp2 = callback(screenIndex.screenIndex);
  importDefault = tmp2;
  height = importDefault(height[8])().height;
  const rect = importDefault(height[6])();
  const insets = importDefault(height[7])({ isKeyboardAwareOnAndroid: false, includeKeyboardHeight: true }).insets;
  let diff = insets.bottom - rect.bottom;
  let sum = rect.top + insets.bottom;
  importAllResult = diff;
  callback = sum;
  let items = [tmp2, diff];
  importDefault = undefined;
  const memo = importAllResult.useMemo(() => ({ marginBottom: closure_0 + c2 }), items);
  importDefault = importAllResult.useRef([]);
  callback = importAllResult.useCallback((arg0) => {
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
  let tmp = callback2();
  const children = importAllResult.useMemo(() => {
    let diff;
    const items = [];
    let num = 0;
    let num2 = 0;
    do {
      let tmp = callback;
      let tmp2 = callback(num);
      let tmp3 = ref;
      let tmp4 = height;
      num2 = num2 + ref(height[10])(tmp2);
      let tmp5 = callback;
      let obj = { lines: null };
      obj[0] = tmp2;
      let sum = num + 1;
      let arr = items.push(callback(ref(height[11]), obj, num));
      let tmp8 = height;
      let tmp9 = ref;
      let tmp10 = c3;
      num = sum;
      diff = height - ref - c3;
    } while (num2 < diff);
    return items;
  }, items1);
  const style = [tmp.placeholder, memo, importDefault(height[9])({ visible: true, animated: true })];
  return callback(importDefault(height[12]).View, { style, pointerEvents: "none", children });
});
const result = require("updateChatInputContainerHeight").fileFinishedImporting("modules/chat/native/placeholder/ChatPlaceholder.tsx");

export default memoResult;