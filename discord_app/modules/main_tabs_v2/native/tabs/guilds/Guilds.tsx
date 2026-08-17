// discord_app/modules/main_tabs_v2/native/tabs/guilds/Guilds.tsx
import ManaContext from "ManaContext" /* 4104 */;
import getGuildThemeNameDefault from "getGuildThemeName" /* 4225 */;
import getIsEligibleForQuests from "getIsEligibleForQuests" /* 10685 */;
import QuestDockMode from "QuestDockMode" /* 14451 */;
import QuestDockWithGestureAnimationDefault from "QuestDockWithGestureAnimation" /* 14534 */;
import trackTabPressed from "trackTabPressed" /* 15280 */;
import LeftPanelContentDefault from "LeftPanelContent" /* 15281 */;
import _modDef15625 from "module_15625" /* 15625 */;
import { YouBarNavigatorScreens } from "MODE_CHANGE_PHYSICS" /* 9588 */;
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
  const items = [callback(LeftPanelContentDefault, {}), callback(_modDef15625, {}), ];
  if (isEligibleForQuests) {
    isEligibleForQuests = tmp6(QuestDockWithGestureAnimationDefault, {});
  }
  items[2] = isEligibleForQuests;
  obj[1] = closure_5(QuestDockMode.QuestDockExternalCoordinationContextProvider, { children: items });
  return callback(ManaContext.ThemeContextProvider, obj);
}, () => true);
const result = require("set").fileFinishedImporting("modules/main_tabs_v2/native/tabs/guilds/Guilds.tsx");

export default memoResult;