// === Module 15835: ? ===

// Module 15835
import ManaContext from "ManaContext" /* 4204 */;
import getGuildThemeNameDefault from "getGuildThemeName" /* 4328 */;
import getIsEligibleForQuests from "getIsEligibleForQuests" /* 11304 */;
import QuestDockMode from "QuestDockMode" /* 14926 */;
import QuestDockWithGestureAnimationDefault from "QuestDockWithGestureAnimation" /* 15010 */;
import trackTabPressed from "trackTabPressed" /* 15836 */;
import LeftPanelContentDefault from "LeftPanelContent" /* 15837 */;
import _modDef16184 from "module_16184" /* 16184 */;
import { YouBarNavigatorScreens } from "MODE_CHANGE_PHYSICS" /* 11051 */;
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
  const items = [callback(LeftPanelContentDefault, {}), callback(_modDef16184, {}), ];
  if (isEligibleForQuests) {
    isEligibleForQuests = tmp6(QuestDockWithGestureAnimationDefault, {});
  }
  items[2] = isEligibleForQuests;
  obj[1] = closure_5(QuestDockMode.QuestDockExternalCoordinationContextProvider, { children: items });
  return callback(ManaContext.ThemeContextProvider, obj);
}, () => true);
const result = require("set").fileFinishedImporting("modules/main_tabs_v2/native/tabs/guilds/Guilds.tsx");

export default memoResult;