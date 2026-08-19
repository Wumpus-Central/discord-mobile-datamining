// === Module 10274: ? ===

// Module 10274
import ThemesDefault from "Themes" /* 712 */;
import _modDef10275 from "module_10275" /* 10275 */;
import { View } from "get ActivityIndicator" /* 17 */;
import { jsx } from "jsxProd" /* 21 */;
import createCacheKey from "createCacheKey" /* 4661 */;
import importAllResult from "noop" /* 19 */;

const obj = { height: require("DRAG_HANDLE").HEADER_HANDLE_HEIGHT, paddingBottom: ThemesDefault.space.PX_4 };
obj[0] = obj;
let closure_4 = createCacheKey.createStyles(obj);
const memoResult = importAllResult.memo(function MediaKeyboardBottomSheetHeaderSimple(arg0) {
  ({ animatedIndex, onPress } = arg0);
  return <View style={callback().headerHandleOnlyWrap}>{jsx(_modDef10275, { animatedIndex, onPress })}</View>;
});
const result = require("obj132").fileFinishedImporting("modules/media_keyboard/native/components/MediaKeyboardBottomSheetHeaderSimple.tsx");

export default memoResult;