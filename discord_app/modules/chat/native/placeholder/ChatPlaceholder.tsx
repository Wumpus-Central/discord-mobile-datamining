// === Module 11809: ? ===

// Module 11809
import ThemesDefault from "Themes" /* 712 */;
import importAllResult from "noop" /* 19 */;
import { useChatInputContainerHeight as closure_3 } from "updateChatInputContainerHeight" /* 8682 */;
import { jsx } from "jsxProd" /* 21 */;
import createCacheKey from "createCacheKey" /* 4661 */;

let obj = {};
const merged = Object.assign(require("get ActivityIndicator").StyleSheet.absoluteFillObject);
obj.paddingBottom = ThemesDefault.space.PX_24;
obj.flexDirection = "column-reverse";
obj.overflow = "hidden";
obj[0] = obj;
let closure_5 = createCacheKey.createStyles(obj);
const memoResult = importAllResult.memo(function ChatPlaceholder(screenIndex) {
  let height;
  let callback;
  let tmp2 = callback(screenIndex.screenIndex);
  importDefault = tmp2;
  height = importDefault(height[8])().height;
  const rect = importDefault(height[6])();
  const insets = importDefault(height[7])({ isKeyboardAwareOnAndroid: false, includeKeyboardHeight: true }).insets;
  let diff = insets.bottom - rect.bottom;
  let sum = rect.top + insets.bottom;
  importAllResult = diff;
  let items = [tmp2, diff];
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
  const tmp = callback2();
  const children = importAllResult.useMemo(() => {
    let diff;
    const items = [];
    let num = 0;
    let num2 = 0;
    do {
      let tmp2 = callback(num);
      num2 = num2 + ref(height[10])(tmp2);
      let obj = { lines: null };
      obj[0] = tmp2;
      let sum = num + 1;
      let arr = items.push(callback(ref(height[11]), obj, num));
      num = sum;
      diff = height - ref - c3;
    } while (num2 < diff);
    return items;
  }, items1);
  const style = [tmp.placeholder, memo, importDefault(height[9])({ visible: true, animated: true })];
  return callback(importDefault(height[12]).View, { style, pointerEvents: "none", children });
});
const result = require("obj132").fileFinishedImporting("modules/chat/native/placeholder/ChatPlaceholder.tsx");

export default memoResult;