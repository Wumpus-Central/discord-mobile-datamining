// === Module 15423: PX_12 ===

// Module 15423 (PX_12)
import ThemesDefault from "Themes" /* 712 */;
import get_ActivityIndicator from "get ActivityIndicator" /* 17 */;
import { jsx } from "jsxProd" /* 21 */;
import createCacheKey from "createCacheKey" /* 4668 */;
import importAllResult from "noop" /* 19 */;

({ StyleSheet, View: c0 } = get_ActivityIndicator);
const PX_12 = ThemesDefault.space.PX_12;
let obj = { container: { height: PX_12 }, separator: null };
obj = { backgroundColor: ThemesDefault.colors.BORDER_SUBTLE, height: StyleSheet.hairlineWidth };
const merged = Object.assign(StyleSheet.absoluteFillObject);
obj.top = undefined;
obj[1] = obj;
let closure_2 = createCacheKey.createStyles(obj);
const memoResult = importAllResult.memo(function MessagesItemSeperator() {
  const tmp = callback();
  obj = { style: tmp.container, collapsable: false, children: <closure_0 {...obj} /> };
  obj = { style: tmp.separator };
  return <closure_0 style={tmp.separator} />;
});
const result = require("set").fileFinishedImporting("modules/main_tabs_v2/native/tabs/messages/items/MessagesItemSeparator.tsx");

export default memoResult;
export const MESSAGES_ITEM_SEPERATOR_HEIGHT = PX_12;