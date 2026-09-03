// === Module 15851: ? ===

// Module 15851
import ManaContext from "ManaContext" /* 4204 */;
import getGuildThemeNameDefault from "getGuildThemeName" /* 4328 */;
import getIsEligibleForQuests from "getIsEligibleForQuests" /* 11308 */;
import QuestDockMode from "QuestDockMode" /* 14941 */;
import QuestDockWithGestureAnimationDefault from "QuestDockWithGestureAnimation" /* 15025 */;
import trackTabPressed from "trackTabPressed" /* 15852 */;
import LeftPanelContentDefault from "LeftPanelContent" /* 15853 */;
import _modDef16200 from "module_16200" /* 16200 */;
import { YouBarNavigatorScreens } from "MODE_CHANGE_PHYSICS" /* 11055 */;
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
  const items = [callback(LeftPanelContentDefault, {}), callback(_modDef16200, {}), ];
  if (isEligibleForQuests) {
    isEligibleForQuests = tmp6(QuestDockWithGestureAnimationDefault, {});
  }
  items[2] = isEligibleForQuests;
  obj[1] = closure_5(QuestDockMode.QuestDockExternalCoordinationContextProvider, { children: items });
  return callback(ManaContext.ThemeContextProvider, obj);
}, () => true);
const result = require("set").fileFinishedImporting("modules/main_tabs_v2/native/tabs/guilds/Guilds.tsx");

export default memoResult;