// discord_app/modules/main_tabs_v2/native/tabs/guilds/Guilds.tsx
import ManaContext from "../../../../../../discord_common/js/packages/design/native.tsx";
import getGuildThemeNameDefault from "../../../../client_themes/native/useColorThemeBackground.tsx";
import getIsEligibleForQuests from "../../../../quests/lib/QuestsEligibility.tsx";
import QuestDockMode from "../../../../quests/native/QuestDock/QuestDockExternalCoordinationContext.tsx";
import QuestDockWithGestureAnimationDefault from "../../../../quests/native/QuestDock/QuestDock.tsx";
import trackTabPressed from "../TabsPerformanceTracker.tsx";
import LeftPanelContentDefault from "../../../../../components_native/MainChannels.tsx";
import _modDef15884 from "../../you_bar/YouBar.tsx";
import { YouBarNavigatorScreens } from "../../MainTabsConstants.tsx";
import jsxProd from "../../../../../../_runtime/react/00021_jsxProd.js";
import importAllResult from "../../../../../../_runtime/00019_noop.js";

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