// discord_app/modules/quests/native/QuestDock/QuestDockHeaderSeparator.tsx
import ThemesDefault from "../../../../../discord_common/js/packages/tokens/native.tsx";
import { View } from "../../../../../_runtime/00017_get_ActivityIndicator.js";
import { jsx } from "../../../../../_runtime/react/00021_jsxProd.js";
import createCacheKey from "../../../../design/components/Styles/native/createStyles.tsx";
import importAllResult from "../../../../../_runtime/00019_noop.js";

let obj = { separator: null };
obj = { backgroundColor: ThemesDefault.colors.TEXT_DEFAULT, opacity: 0.2, height: 18, width: 1.5 };
obj[0] = obj;
let closure_2 = createCacheKey.createStyles(obj);
const memoResult = importAllResult.memo(function QuestDockHeaderSeparator() {
  return <View style={callback().separator} />;
});
const result = require("set").fileFinishedImporting("modules/quests/native/QuestDock/QuestDockHeaderSeparator.tsx");

export default memoResult;
