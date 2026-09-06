// === Module 15195: ? ===

// Module 15195
import ThemesDefault from "Themes" /* 576 */;
import { View } from "get ActivityIndicator" /* 17 */;
import { jsx } from "jsxProd" /* 21 */;
import createCacheKey from "createCacheKey" /* 4560 */;
import importAllResult from "noop" /* 19 */;

let obj = { separator: null };
obj = { backgroundColor: ThemesDefault.colors.TEXT_DEFAULT, opacity: 0.2, height: 18, width: 1.5 };
obj[0] = obj;
let closure_2 = createCacheKey.createStyles(obj);
const memoResult = importAllResult.memo(function QuestDockHeaderSeparator() {
  return <View style={callback().separator} />;
});
const result = require("set").fileFinishedImporting("modules/quests/native/QuestDock/QuestDockHeaderSeparator.tsx");

export default memoResult;