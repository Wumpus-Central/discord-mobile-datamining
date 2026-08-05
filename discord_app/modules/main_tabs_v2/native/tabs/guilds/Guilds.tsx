// discord_app/modules/main_tabs_v2/native/tabs/guilds/Guilds.tsx
import { YouBarNavigatorScreens } from "MODE_CHANGE_PHYSICS";
import jsxProd from "jsxProd";
import importAllResult from "noop";

let c4;
let c5;
const require = arg1;
({ jsx: c4, jsxs: c5 } = jsxProd);
const memoResult = require("noop").memo(function GuildsOnly() {
  let obj = require("../TabsPerformanceTracker.tsx") /* trackTabPressed */;
  const trackTabPerformance = obj.useTrackTabPerformance(YouBarNavigatorScreens.GUILDS);
  const tmp3 = importDefault;
  const tmp4 = require("../../../../client_themes/native/useColorThemeBackground.tsx")();
  let isEligibleForQuests = require("../../../../quests/lib/QuestsEligibility.tsx") /* getIsEligibleForQuests */.getIsEligibleForQuests();
  obj = { gradient: tmp4, children: null };
  const items = [callback(require("../../../../../components_native/MainChannels.tsx"), {}), callback(require("../../you_bar/YouBar.tsx"), {}), ];
  if (isEligibleForQuests) {
    isEligibleForQuests = tmp6(tmp3(14324), {});
  }
  items[2] = isEligibleForQuests;
  obj[1] = closure_5(require("../../../../quests/native/QuestDock/QuestDockExternalCoordinationContext.tsx") /* QuestDockMode */.QuestDockExternalCoordinationContextProvider, { children: items });
  return callback(require("../../../../../../discord_common/js/packages/design/native.tsx") /* ManaContext */.ThemeContextProvider, obj);
}, () => true);
const result = require("jsxProd").fileFinishedImporting("modules/main_tabs_v2/native/tabs/guilds/Guilds.tsx");

export default memoResult;