// === Module 15941: guilds/Guilds ===

// Module 15941 (guilds/Guilds)
import c from "c" /* 576 */;
import native from "native" /* 4589 */;
import useColorThemeBackgroundDefault from "useColorThemeBackground" /* 4732 */;
import QuestsEligibility from "QuestsEligibility" /* 10912 */;
import QuestDockExternalCoordinationContext from "QuestDockExternalCoordinationContext" /* 14900 */;
import QuestDockDefault from "QuestDock" /* 14985 */;
import TabsPerformanceTracker from "TabsPerformanceTracker" /* 15942 */;
import MainChannelsDefault from "MainChannels" /* 15943 */;
import YouBarDefault from "YouBar" /* 16304 */;
import noop from "module_19" /* 19 */;

require = fn;
const YouBarNavigatorScreens = fn(10820).YouBarNavigatorScreens;
const jsxProd = fn(21);
({ jsx: closure_4, jsxs: hasOwnProperty } = jsxProd);
const ReactCompilerGating = fn(558);
const size = fn(2);
const result = size.fileFinishedImporting("modules/main_tabs_v2/native/tabs/guilds/Guilds.tsx");

export default noop.memo(ReactCompilerGating.isReactCompilerEnabled() ? (() => {
  const cResult = c.c(4);
  const trackTabPerformance = TabsPerformanceTracker.useTrackTabPerformance(YouBarNavigatorScreens.GUILDS);
  const tmp6 = useColorThemeBackgroundDefault();
  if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
    const isEligibleForQuests = QuestsEligibility.getIsEligibleForQuests();
    cResult[0] = isEligibleForQuests;
    let first = isEligibleForQuests;
    const tmpResult = QuestsEligibility;
  } else {
    first = cResult[0];
  }
  if (cResult[1] === Symbol.for("react.memo_cache_sentinel")) {
    const items = [React4(MainChannelsDefault, {}), React4(YouBarDefault, {}), ];
    if (first) {
      first = React4(QuestDockDefault, {});
    }
    const obj3 = { children: null };
    items[2] = first;
    obj3.children = items;
    const tmp10Result = hasOwnProperty(QuestDockExternalCoordinationContext.QuestDockExternalCoordinationContextProvider, obj3);
    cResult[1] = tmp10Result;
    let tmp9 = tmp10Result;
  } else {
    tmp9 = cResult[1];
  }
  if (cResult[2] !== tmp6) {
    const obj4 = { gradient: tmp6, children: tmp9 };
    const tmp15 = React4(native.ThemeContextProvider, obj4);
    cResult[2] = tmp6;
    cResult[3] = tmp15;
    let tmp13 = tmp15;
  } else {
    tmp13 = cResult[3];
  }
  return tmp13;
}) : (() => {
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
}), () => true);