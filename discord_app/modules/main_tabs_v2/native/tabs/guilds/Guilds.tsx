// discord_app/modules/main_tabs_v2/native/tabs/guilds/Guilds.tsx
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
const YouBarNavigatorScreens = fn(11338).YouBarNavigatorScreens;
const jsxProd = fn(21);
({ jsx: closure_4, jsxs: hasOwnProperty } = jsxProd);
const size = fn(2);
const result = size.fileFinishedImporting("modules/main_tabs_v2/native/tabs/guilds/Guilds.tsx");

export default noop.memo(
  function GuildsOnly() {
    const trackTabPerformance = TabsPerformanceTracker.useTrackTabPerformance(YouBarNavigatorScreens.GUILDS);
    const tmp4 = useColorThemeBackgroundDefault();
    let isEligibleForQuests = QuestsEligibility.getIsEligibleForQuests();
    const obj3 = { gradient: tmp4, children: null };
    const items = [React4(MainChannelsDefault, {}), React4(YouBarDefault, {})];
    if (isEligibleForQuests) {
      isEligibleForQuests = React4(QuestDockDefault, {});
    }
    items[2] = isEligibleForQuests;
    obj3.children = hasOwnProperty(QuestDockExternalCoordinationContext.QuestDockExternalCoordinationContextProvider, {
      children: items,
    });
    return React4(native.ThemeContextProvider, obj3);
  },
  () => true,
);
