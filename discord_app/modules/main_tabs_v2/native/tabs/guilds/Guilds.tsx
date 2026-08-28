// === Module 15535: ? ===

// Module 15535
import ManaContext from "ManaContext" /* 4173 */;
import getGuildThemeNameDefault from "getGuildThemeName" /* 4296 */;
import getIsEligibleForQuests from "getIsEligibleForQuests" /* 11022 */;
import QuestDockMode from "QuestDockMode" /* 14633 */;
import QuestDockWithGestureAnimationDefault from "QuestDockWithGestureAnimation" /* 14717 */;
import trackTabPressed from "trackTabPressed" /* 15536 */;
import LeftPanelContentDefault from "LeftPanelContent" /* 15537 */;
import _modDef15884 from "module_15884" /* 15884 */;
import { YouBarNavigatorScreens } from "MODE_CHANGE_PHYSICS" /* 10769 */;
import jsxProd from "jsxProd" /* 21 */;
import importAllResult from "noop" /* 19 */;

require = arg1;
({ jsx: c4, jsxs: c5 } = jsxProd);
const memoResult = importAllResult.memo(function GuildsOnly() {
  let obj = trackTabPressed;
  const trackTabPerformance = obj.useTrackTabPerformance(YouBarNavigatorScreens.GUILDS);
  const tmp3 = importDefault;
  const tmp4 = getGuildThemeNameDefault();
  let isEligibleForQuests = getIsEligibleForQuests.getIsEligibleForQuests();
  obj = { gradient: tmp4, children: null };
  const items = [callback(LeftPanelContentDefault, {}), callback(_modDef15884, {}), ];
  if (isEligibleForQuests) {
    isEligibleForQuests = tmp6(QuestDockWithGestureAnimationDefault, {});
  }
  items[2] = isEligibleForQuests;
  obj[1] = closure_5(QuestDockMode.QuestDockExternalCoordinationContextProvider, { children: items });
  return callback(ManaContext.ThemeContextProvider, obj);
}, () => true);
const result = require("set").fileFinishedImporting("modules/main_tabs_v2/native/tabs/guilds/Guilds.tsx");

export default memoResult;