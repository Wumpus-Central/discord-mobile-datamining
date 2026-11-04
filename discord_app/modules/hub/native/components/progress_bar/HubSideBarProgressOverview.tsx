// === Module 18511: HubSideBarProgressOverview ===

// Module 18511 (HubSideBarProgressOverview)
import asyncRequireImpl from "asyncRequireImpl" /* 2123 */;
import ActionSheetActionCreatorsDefault from "ActionSheetActionCreators" /* 5382 */;
import noop from "module_19" /* 19 */;

require = fn;
const HubProgressBarConstants = fn(9276);
({ HUB_PROGRESS_ACTION_SHEET_ID: c3, HUB_PROGRESS_NUM_TOTAL_STEPS: closure_4 } = HubProgressBarConstants);
const jsx = fn(21).jsx;
let size = fn(2);
const result = size.fileFinishedImporting("modules/hub/native/components/progress_bar/HubSideBarProgressOverview.tsx");

export default function HubSidebarProgressOverview(guild) {
  guild = guild.guild;
  const hubProgressBarCompletedSteps = guild(14451).useHubProgressBarCompletedSteps(guild);
  const obj = guild(14451);
  const nextHubProgressStep = guild(14451).getNextHubProgressStep(hubProgressBarCompletedSteps);
  if (null == nextHubProgressStep) {
    return null;
  } else {
    const size = hubProgressBarCompletedSteps.size;
    const hubProgressTitleForStep = tmp(14451).getHubProgressTitleForStep(nextHubProgressStep);
    if (size < total) {
      const intl2 = tmp(1113).intl;
      const obj3 = { number: null, total: null };
      const _HermesInternal = HermesInternal;
      obj3.number = "" + size;
      obj3.total = total;
      let formatToPlainStringResult = intl2.formatToPlainString(tmp(1113).t["9j7xDu"], obj3);
    } else {
      const intl = tmp(1113).intl;
      formatToPlainStringResult = intl.string(tmp(1113).t["+Gyklt"]);
    }
    const _Math = Math;
    const bound = Math.max(tmp(14264).MIN_PROGRESS_PERCENT, 100 * size / total);
    const obj4 = {
      onPress: function handlePress() {
          ActionSheetActionCreatorsDefault.openLazy(asyncRequireImpl(14455, dependencyMap.paths), React3, { guild, analyticsSource: "Channels Sidebar" });
        },
      title: hubProgressTitleForStep,
      subtitle: formatToPlainStringResult,
      percentComplete: bound
    };
    return jsx(tmp(16039).GuildProgressOverviewView, {
      onPress: function handlePress() {
          ActionSheetActionCreatorsDefault.openLazy(asyncRequireImpl(14455, dependencyMap.paths), React3, { guild, analyticsSource: "Channels Sidebar" });
        },
      title: hubProgressTitleForStep,
      subtitle: formatToPlainStringResult,
      percentComplete: bound
    });
  }
  const obj2 = guild(14451);
};