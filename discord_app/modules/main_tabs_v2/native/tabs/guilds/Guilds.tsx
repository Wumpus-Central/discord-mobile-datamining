// discord_app/modules/main_tabs_v2/native/tabs/guilds/Guilds.tsx
import c from "../../../../../../_runtime/00576_c.js";
import native from "../../../../../../discord_common/js/packages/design/native.tsx";
import useColorThemeBackgroundDefault from "../../../../client_themes/native/useColorThemeBackground.tsx";
import QuestsEligibility from "../../../../quests/lib/QuestsEligibility.tsx";
import QuestDockExternalCoordinationContext from "../../../../quests/native/QuestDock/QuestDockExternalCoordinationContext.tsx";
import QuestDockDefault from "../../../../quests/native/QuestDock/QuestDock.tsx";
import TabsPerformanceTracker from "../TabsPerformanceTracker.tsx";
import MainChannelsDefault from "../../../../../components_native/MainChannels.tsx";
import YouBarDefault from "../../you_bar/YouBar.tsx";
import noop from "../../../../../../_runtime/metro/00019__.js";

require = fn;
const YouBarNavigatorScreens = fn(11182).YouBarNavigatorScreens;
const jsxProd = fn(21);
({ jsx: closure_4, jsxs: hasOwnProperty } = jsxProd);
const ReactCompilerGating = fn(558);
const size = fn(2);
const result = size.fileFinishedImporting("modules/main_tabs_v2/native/tabs/guilds/Guilds.tsx");

export default noop.memo(
  ReactCompilerGating.isReactCompilerEnabled()
    ? function GuildsOnly() {
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
          const items = [React4(MainChannelsDefault, {}), React4(YouBarDefault, {})];
          if (first) {
            first = React4(QuestDockDefault, {});
          }
          const obj3 = { children: null };
          items[2] = first;
          obj3.children = items;
          const tmp10Result = hasOwnProperty(
            QuestDockExternalCoordinationContext.QuestDockExternalCoordinationContextProvider,
            obj3,
          );
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
      }
    : function GuildsOnly() {
        const trackTabPerformance = TabsPerformanceTracker.useTrackTabPerformance(YouBarNavigatorScreens.GUILDS);
        const tmp4 = useColorThemeBackgroundDefault();
        let isEligibleForQuests = QuestsEligibility.getIsEligibleForQuests();
        const obj3 = { gradient: tmp4, children: null };
        const items = [React4(MainChannelsDefault, {}), React4(YouBarDefault, {})];
        if (isEligibleForQuests) {
          isEligibleForQuests = React4(QuestDockDefault, {});
        }
        items[2] = isEligibleForQuests;
        obj3.children = hasOwnProperty(
          QuestDockExternalCoordinationContext.QuestDockExternalCoordinationContextProvider,
          { children: items },
        );
        return React4(native.ThemeContextProvider, obj3);
      },
  () => true,
);
