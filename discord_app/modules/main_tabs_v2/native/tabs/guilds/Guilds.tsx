// === Module 16108: guilds/Guilds ===

// Module 16108 (guilds/Guilds)
import native from "native" /* 4347 */;
import useColorThemeBackgroundDefault from "useColorThemeBackground" /* 4490 */;
import QuestsEligibility from "QuestsEligibility" /* 11617 */;
import QuestDockExternalCoordinationContext from "QuestDockExternalCoordinationContext" /* 15179 */;
import QuestDockDefault from "QuestDock" /* 15263 */;
import TabsPerformanceTracker from "TabsPerformanceTracker" /* 16109 */;
import MainChannelsDefault from "MainChannels" /* 16110 */;
import YouBarDefault from "YouBar" /* 16458 */;
import noop from "module_19" /* 19 */;

require = fn;
const YouBarNavigatorScreens = fn(11218).YouBarNavigatorScreens;
const jsxProd = fn(21);
({ jsx: closure_4, jsxs: hasOwnProperty } = jsxProd);
const size = fn(2);
const result = size.fileFinishedImporting("modules/main_tabs_v2/native/tabs/guilds/Guilds.tsx");

export default noop.memo(function GuildsOnly() {
  let obj = TabsPerformanceTracker;
  const trackTabPerformance = obj.useTrackTabPerformance(YouBarNavigatorScreens.GUILDS);
  const tmp4 = useColorThemeBackgroundDefault();
  let isEligibleForQuests = QuestsEligibility.getIsEligibleForQuests();
  obj = { gradient: tmp4, children: null };
  const items = [React4(MainChannelsDefault, {}), React4(YouBarDefault, {}), ];
  if (isEligibleForQuests) {
    isEligibleForQuests = React4(QuestDockDefault, {});
  }
  items[2] = isEligibleForQuests;
  obj.children = hasOwnProperty(QuestDockExternalCoordinationContext.QuestDockExternalCoordinationContextProvider, { children: items });
  return React4(native.ThemeContextProvider, obj);
}, () => true);