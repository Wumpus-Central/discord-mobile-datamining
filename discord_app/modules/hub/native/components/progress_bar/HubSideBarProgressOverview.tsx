// === Module 16470: HubSideBarProgressOverview ===

// Module 16470 (HubSideBarProgressOverview)
import asyncRequireImpl from "asyncRequireImpl" /* 1897 */;
import ActionSheetActionCreatorsDefault from "ActionSheetActionCreators" /* 4689 */;
import noop from "module_19" /* 19 */;

require = fn;
const HubProgressBarConstants = fn(10076);
({ HUB_PROGRESS_ACTION_SHEET_ID: c3, HUB_PROGRESS_NUM_TOTAL_STEPS: closure_4 } = HubProgressBarConstants);
const jsx = fn(21).jsx;
let size = fn(2);
const result = size.fileFinishedImporting("modules/hub/native/components/progress_bar/HubSideBarProgressOverview.tsx");

export default function HubSidebarProgressOverview(guild) {
  guild = guild.guild;
  const hubProgressBarCompletedSteps = guild(12911).useHubProgressBarCompletedSteps(guild);
  const obj = guild(12911);
  const nextHubProgressStep = guild(12911).getNextHubProgressStep(hubProgressBarCompletedSteps);
  if (null == nextHubProgressStep) {
    return null;
  } else {
    const size = hubProgressBarCompletedSteps.size;
    const hubProgressTitleForStep = tmp(12911).getHubProgressTitleForStep(nextHubProgressStep);
    if (size < total) {
      const intl2 = tmp(1115).intl;
      const obj3 = { number: null, total: null };
      const _HermesInternal = HermesInternal;
      obj3.number = "" + size;
      obj3.total = total;
      let formatToPlainStringResult = intl2.formatToPlainString(tmp(1115).t["9j7xDu"], obj3);
    } else {
      const intl = tmp(1115).intl;
      formatToPlainStringResult = intl.string(tmp(1115).t["+Gyklt"]);
    }
    const _Math = Math;
    const bound = Math.max(tmp(12717).MIN_PROGRESS_PERCENT, 100 * size / total);
    const obj4 = {
      onPress() {
          ActionSheetActionCreatorsDefault.openLazy(asyncRequireImpl(12915, dependencyMap.paths), React3, { guild, analyticsSource: "Channels Sidebar" });
        },
      title: hubProgressTitleForStep,
      subtitle: formatToPlainStringResult,
      percentComplete: bound
    };
    return jsx(tmp(14184).GuildProgressOverviewView, {
      onPress() {
          ActionSheetActionCreatorsDefault.openLazy(asyncRequireImpl(12915, dependencyMap.paths), React3, { guild, analyticsSource: "Channels Sidebar" });
        },
      title: hubProgressTitleForStep,
      subtitle: formatToPlainStringResult,
      percentComplete: bound
    });
  }
  const obj2 = guild(12911);
};