// === Module 16013: ? ===

// Module 16013
import ManaContext from "ManaContext" /* 4271 */;
import getGuildThemeNameDefault from "getGuildThemeName" /* 4413 */;
import getIsEligibleForQuests from "getIsEligibleForQuests" /* 11484 */;
import QuestDockMode from "QuestDockMode" /* 15099 */;
import QuestDockWithGestureAnimationDefault from "QuestDockWithGestureAnimation" /* 15183 */;
import trackTabPressed from "trackTabPressed" /* 16014 */;
import LeftPanelContentDefault from "LeftPanelContent" /* 16015 */;
import _modDef16362 from "module_16362" /* 16362 */;
import { YouBarNavigatorScreens } from "MODE_CHANGE_PHYSICS" /* 11084 */;
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
  const items = [callback(LeftPanelContentDefault, {}), callback(_modDef16362, {}), ];
  if (isEligibleForQuests) {
    isEligibleForQuests = tmp6(QuestDockWithGestureAnimationDefault, {});
  }
  items[2] = isEligibleForQuests;
  obj[1] = closure_5(QuestDockMode.QuestDockExternalCoordinationContextProvider, { children: items });
  return callback(ManaContext.ThemeContextProvider, obj);
}, () => true);
const result = require("set").fileFinishedImporting("modules/main_tabs_v2/native/tabs/guilds/Guilds.tsx");

export default memoResult;