// === Module 15373: ? ===

// Module 15373
import ManaContext from "ManaContext" /* 4108 */;
import getGuildThemeNameDefault from "getGuildThemeName" /* 4230 */;
import getIsEligibleForQuests from "getIsEligibleForQuests" /* 10532 */;
import QuestDockMode from "QuestDockMode" /* 14549 */;
import QuestDockWithGestureAnimationDefault from "QuestDockWithGestureAnimation" /* 14632 */;
import trackTabPressed from "trackTabPressed" /* 15374 */;
import LeftPanelContentDefault from "LeftPanelContent" /* 15375 */;
import _modDef15723 from "module_15723" /* 15723 */;
import { YouBarNavigatorScreens } from "MODE_CHANGE_PHYSICS" /* 9721 */;
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
  const items = [callback(LeftPanelContentDefault, {}), callback(_modDef15723, {}), ];
  if (isEligibleForQuests) {
    isEligibleForQuests = tmp6(QuestDockWithGestureAnimationDefault, {});
  }
  items[2] = isEligibleForQuests;
  obj[1] = closure_5(QuestDockMode.QuestDockExternalCoordinationContextProvider, { children: items });
  return callback(ManaContext.ThemeContextProvider, obj);
}, () => true);
const result = require("set").fileFinishedImporting("modules/main_tabs_v2/native/tabs/guilds/Guilds.tsx");

export default memoResult;