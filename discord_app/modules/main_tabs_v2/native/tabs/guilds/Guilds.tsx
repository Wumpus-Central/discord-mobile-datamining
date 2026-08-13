// discord_app/modules/main_tabs_v2/native/tabs/guilds/Guilds.tsx
import { YouBarNavigatorScreens } from "MODE_CHANGE_PHYSICS";
import jsxProd from "jsxProd";
import importAllResult from "noop";
import { ManaContext } from "../../../../../../discord_common/js/packages/design/native.tsx";
import { LeftPanelContent } from "../../../../../components_native/MainChannels.tsx";
import { getGuildThemeName } from "../../../../client_themes/native/useColorThemeBackground.tsx";
import { getIsEligibleForQuests } from "../../../../quests/lib/QuestsEligibility.tsx";
import { QuestDockMode } from "../../../../quests/native/QuestDock/QuestDockExternalCoordinationContext.tsx";
import { YouBar } from "../../you_bar/YouBar.tsx";
import { trackTabPressed } from "../TabsPerformanceTracker.tsx";

let c4;
let c5;
const require = arg1;
({ jsx: c4, jsxs: c5 } = jsxProd);
const memoResult = require("noop").memo(function GuildsOnly() {
  let obj = trackTabPressed;
  const trackTabPerformance = obj.useTrackTabPerformance(YouBarNavigatorScreens.GUILDS);
  const tmp3 = importDefault;
  const tmp4 = getGuildThemeName();
  let isEligibleForQuests = getIsEligibleForQuests.getIsEligibleForQuests();
  obj = { gradient: tmp4, children: null };
  const items = [callback(LeftPanelContent, {}), callback(YouBar, {}), ];
  if (isEligibleForQuests) {
    isEligibleForQuests = tmp6(tmp3(14498), {});
  }
  items[2] = isEligibleForQuests;
  obj[1] = closure_5(QuestDockMode.QuestDockExternalCoordinationContextProvider, { children: items });
  return callback(ManaContext.ThemeContextProvider, obj);
}, () => true);
const result = require("jsxProd").fileFinishedImporting("modules/main_tabs_v2/native/tabs/guilds/Guilds.tsx");

export default memoResult;