// === Module 16352: guilds/Guilds ===

// Module 16352 (guilds/Guilds)
import native from "native" /* 4466 */;
import useColorThemeBackgroundDefault from "useColorThemeBackground" /* 4609 */;
import QuestsEligibility from "QuestsEligibility" /* 11739 */;
import QuestDockExternalCoordinationContext from "QuestDockExternalCoordinationContext" /* 15366 */;
import QuestDockDefault from "QuestDock" /* 15450 */;
import TabsPerformanceTracker from "TabsPerformanceTracker" /* 16353 */;
import MainChannelsDefault from "MainChannels" /* 16354 */;
import YouBarDefault from "YouBar" /* 16702 */;
import noop from "module_19" /* 19 */;

require = fn;
const YouBarNavigatorScreens = fn(11352).YouBarNavigatorScreens;
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