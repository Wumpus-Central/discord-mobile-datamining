// === Module 15517: ? ===

// Module 15517
import ManaContext from "ManaContext" /* 4172 */;
import getGuildThemeNameDefault from "getGuildThemeName" /* 4295 */;
import getIsEligibleForQuests from "getIsEligibleForQuests" /* 11004 */;
import QuestDockMode from "QuestDockMode" /* 14649 */;
import QuestDockWithGestureAnimationDefault from "QuestDockWithGestureAnimation" /* 14732 */;
import trackTabPressed from "trackTabPressed" /* 15518 */;
import LeftPanelContentDefault from "LeftPanelContent" /* 15519 */;
import _modDef15866 from "module_15866" /* 15866 */;
import { YouBarNavigatorScreens } from "MODE_CHANGE_PHYSICS" /* 10751 */;
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
  const items = [callback(LeftPanelContentDefault, {}), callback(_modDef15866, {}), ];
  if (isEligibleForQuests) {
    isEligibleForQuests = tmp6(QuestDockWithGestureAnimationDefault, {});
  }
  items[2] = isEligibleForQuests;
  obj[1] = closure_5(QuestDockMode.QuestDockExternalCoordinationContextProvider, { children: items });
  return callback(ManaContext.ThemeContextProvider, obj);
}, () => true);
const result = require("set").fileFinishedImporting("modules/main_tabs_v2/native/tabs/guilds/Guilds.tsx");

export default memoResult;