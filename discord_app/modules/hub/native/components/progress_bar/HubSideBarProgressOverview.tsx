// discord_app/modules/hub/native/components/progress_bar/HubSideBarProgressOverview.tsx
import asyncRequireImpl from "../../../../../../_runtime/02000_asyncRequireImpl.js";
import ActionSheetActionCreatorsDefault from "../../../../action_sheet/native/ActionSheetActionCreators.tsx";
import noop from "../../../../../../_runtime/metro/00019__.js";

require = fn;
const HubProgressBarConstants = fn(8680);
({ HUB_PROGRESS_ACTION_SHEET_ID: c3, HUB_PROGRESS_NUM_TOTAL_STEPS: closure_4 } = HubProgressBarConstants);
const jsx = fn(21).jsx;
let size = fn(2);
const result = size.fileFinishedImporting("modules/hub/native/components/progress_bar/HubSideBarProgressOverview.tsx");

export default function HubSidebarProgressOverview(guild) {
  guild = guild.guild;
  const hubProgressBarCompletedSteps = guild(12349).useHubProgressBarCompletedSteps(guild);
  const obj = guild(12349);
  const nextHubProgressStep = guild(12349).getNextHubProgressStep(hubProgressBarCompletedSteps);
  if (null == nextHubProgressStep) {
    return null;
  } else {
    const size = hubProgressBarCompletedSteps.size;
    const hubProgressTitleForStep = tmp(12349).getHubProgressTitleForStep(nextHubProgressStep);
    if (size < total) {
      const intl2 = tmp(1126).intl;
      const obj3 = { number: null, total: null };
      const _HermesInternal = HermesInternal;
      obj3.number = "" + size;
      obj3.total = total;
      let formatToPlainStringResult = intl2.formatToPlainString(tmp(1126).t["9j7xDu"], obj3);
    } else {
      const intl = tmp(1126).intl;
      formatToPlainStringResult = intl.string(tmp(1126).t["+Gyklt"]);
    }
    const _Math = Math;
    const bound = Math.max(tmp(12163).MIN_PROGRESS_PERCENT, (100 * size) / total);
    const obj4 = {
      onPress: function handlePress() {
        ActionSheetActionCreatorsDefault.openLazy(asyncRequireImpl(12353, dependencyMap.paths), React3, {
          guild,
          analyticsSource: "Channels Sidebar",
        });
      },
      title: hubProgressTitleForStep,
      subtitle: formatToPlainStringResult,
      percentComplete: bound,
    };
    return jsx(tmp(14131).GuildProgressOverviewView, {
      onPress: function handlePress() {
        ActionSheetActionCreatorsDefault.openLazy(asyncRequireImpl(12353, dependencyMap.paths), React3, {
          guild,
          analyticsSource: "Channels Sidebar",
        });
      },
      title: hubProgressTitleForStep,
      subtitle: formatToPlainStringResult,
      percentComplete: bound,
    });
  }
  const obj2 = guild(12349);
}
