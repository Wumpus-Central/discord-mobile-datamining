// discord_app/modules/main_tabs_v2/native/tabs/guilds/Guilds.tsx
import react2 from "../../../../../../_runtime/00576_react.js";
import native from "../../../../../../discord_common/js/packages/design/native.tsx";
import useColorThemeBackgroundDefault from "../../../../client_themes/native/useColorThemeBackground.tsx";
import MainTabsConstants from "../../MainTabsConstants.tsx";
import QuestsEligibility from "../../../../quests/lib/QuestsEligibility.tsx";
import QuestDockExternalCoordinationContext from "../../../../quests/native/QuestDock/QuestDockExternalCoordinationContext.tsx";
import QuestDockDefault from "../../../../quests/native/QuestDock/QuestDock.tsx";
import TabsPerformanceTracker from "../TabsPerformanceTracker.tsx";
import MainChannelsDefault from "../../../../../components_native/MainChannels.tsx";
import YouBarDefault from "../../you_bar/YouBar.tsx";
import react from "../../../../../../_runtime/00019_react.js";
import Fragment from "../../../../../../_runtime/react/00021_Fragment.js";
import ReactCompilerGating from "../../../../react_compiler/ReactCompilerGating.tsx";
import size from "../../../../../../_runtime/metro/00002__.js";

let closure_4;
let hasOwnProperty;
const YouBarNavigatorScreens = MainTabsConstants.YouBarNavigatorScreens;
({ jsx: closure_4, jsxs: hasOwnProperty } = Fragment);
const memoResult = react.memo(
  ReactCompilerGating.isReactCompilerEnabled()
    ? () => {
        let first;
        let tmp13;
        let tmp9;
        const obj = react2;
        const cResult = obj.c(4);
        const obj2 = TabsPerformanceTracker;
        const trackTabPerformance = obj2.useTrackTabPerformance(YouBarNavigatorScreens.GUILDS);
        const tmp6 = useColorThemeBackgroundDefault();
        if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
          const tmpResult = QuestsEligibility;
          const isEligibleForQuests = tmpResult.getIsEligibleForQuests();
          cResult[0] = isEligibleForQuests;
          first = isEligibleForQuests;
        } else {
          first = cResult[0];
        }
        if (cResult[1] === Symbol.for("react.memo_cache_sentinel")) {
          const QuestDockExternalCoordinationContextProvider =
            QuestDockExternalCoordinationContext.QuestDockExternalCoordinationContextProvider;
          const items = [React3(MainChannelsDefault, {}), React3(YouBarDefault, {})];
          if (first) {
            first = React3(QuestDockDefault, {});
          }
          const obj3 = { children: items };
          items[2] = first;
          const tmp10Result = hasOwnProperty(QuestDockExternalCoordinationContextProvider, obj3);
          cResult[1] = tmp10Result;
          tmp9 = tmp10Result;
        } else {
          tmp9 = cResult[1];
        }
        if (cResult[2] !== tmp6) {
          const obj4 = { gradient: tmp6, children: tmp9 };
          const tmp15 = React3(native.ThemeContextProvider, obj4);
          cResult[2] = tmp6;
          cResult[3] = tmp15;
          tmp13 = tmp15;
        } else {
          tmp13 = cResult[3];
        }
        return tmp13;
      }
    : () => {
        let QuestDockExternalCoordinationContextProvider;
        let items;
        const obj = TabsPerformanceTracker;
        const trackTabPerformance = obj.useTrackTabPerformance(YouBarNavigatorScreens.GUILDS);
        const tmp4 = useColorThemeBackgroundDefault();
        const obj2 = QuestsEligibility;
        let isEligibleForQuests = obj2.getIsEligibleForQuests();
        const obj3 = {
          gradient: tmp4,
          children: hasOwnProperty(QuestDockExternalCoordinationContextProvider, { children: items }),
        };
        const ThemeContextProvider = native.ThemeContextProvider;
        QuestDockExternalCoordinationContextProvider =
          QuestDockExternalCoordinationContext.QuestDockExternalCoordinationContextProvider;
        items = [React3(MainChannelsDefault, {}), React3(YouBarDefault, {})];
        if (isEligibleForQuests) {
          isEligibleForQuests = React3(QuestDockDefault, {});
        }
        items[2] = isEligibleForQuests;
        return React3(ThemeContextProvider, obj3);
      },
  () => true,
);
const result = size.fileFinishedImporting("modules/main_tabs_v2/native/tabs/guilds/Guilds.tsx");

export default memoResult;
