// === Module 15821: guilds/Guilds ===

// Module 15821 (guilds/Guilds)
import native from "native" /* 4540 */;
import useColorThemeBackgroundDefault from "useColorThemeBackground" /* 4688 */;
import QuestsEligibility from "QuestsEligibility" /* 10851 */;
import QuestDockExternalCoordinationContext from "QuestDockExternalCoordinationContext" /* 14803 */;
import QuestDockDefault from "QuestDock" /* 14887 */;
import TabsPerformanceTracker from "TabsPerformanceTracker" /* 15822 */;
import MainChannelsDefault from "MainChannels" /* 15823 */;
import YouBarDefault from "YouBar" /* 16176 */;
import noop from "module_19" /* 19 */;

require = fn;
const YouBarNavigatorScreens = fn(10718).YouBarNavigatorScreens;
const jsxProd = fn(21);
({ jsx: closure_4, jsxs: hasOwnProperty } = jsxProd);
const size = fn(2);
const result = size.fileFinishedImporting("modules/main_tabs_v2/native/tabs/guilds/Guilds.tsx");

export default noop.memo(function GuildsOnly() {
  const trackTabPerformance = TabsPerformanceTracker.useTrackTabPerformance(YouBarNavigatorScreens.GUILDS);
  const tmp4 = useColorThemeBackgroundDefault();
  let isEligibleForQuests = QuestsEligibility.getIsEligibleForQuests();
  const obj3 = { gradient: tmp4, children: null };
  const items = [React4(MainChannelsDefault, {}), React4(YouBarDefault, {}), ];
  if (isEligibleForQuests) {
    isEligibleForQuests = React4(QuestDockDefault, {});
  }
  items[2] = isEligibleForQuests;
  obj3.children = hasOwnProperty(QuestDockExternalCoordinationContext.QuestDockExternalCoordinationContextProvider, { children: items });
  return React4(native.ThemeContextProvider, obj3);
}, () => true);