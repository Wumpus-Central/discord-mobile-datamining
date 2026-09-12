// === Module 16308: HubSideBarProgressOverview ===

// Module 16308 (HubSideBarProgressOverview)
import asyncRequireImpl from "asyncRequireImpl" /* 1896 */;
import ActionSheetActionCreatorsDefault from "ActionSheetActionCreators" /* 4603 */;
import noop from "module_19" /* 19 */;

require = fn;
const HubProgressBarConstants = fn(9961);
({ HUB_PROGRESS_ACTION_SHEET_ID: c3, HUB_PROGRESS_NUM_TOTAL_STEPS: closure_4 } = HubProgressBarConstants);
const jsx = fn(21).jsx;
let size = fn(2);
const result = size.fileFinishedImporting("modules/hub/native/components/progress_bar/HubSideBarProgressOverview.tsx");

export default function HubSidebarProgressOverview(guild) {
  guild = guild.guild;
  let obj = guild(12798);
  const hubProgressBarCompletedSteps = obj.useHubProgressBarCompletedSteps(guild);
  const nextHubProgressStep = guild(12798).getNextHubProgressStep(hubProgressBarCompletedSteps);
  if (null == nextHubProgressStep) {
    return null;
  } else {
    const size = hubProgressBarCompletedSteps.size;
    const hubProgressTitleForStep = tmp(12798).getHubProgressTitleForStep(nextHubProgressStep);
    if (size < total) {
      const intl2 = tmp(1114).intl;
      obj = { number: null, total: null };
      const _HermesInternal = HermesInternal;
      obj.number = "" + size;
      obj.total = total;
      let formatToPlainStringResult = intl2.formatToPlainString(tmp(1114).t["9j7xDu"], obj);
    } else {
      const intl = tmp(1114).intl;
      formatToPlainStringResult = intl.string(tmp(1114).t["+Gyklt"]);
    }
    const _Math = Math;
    const bound = Math.max(tmp(12603).MIN_PROGRESS_PERCENT, 100 * size / total);
    obj = {
      onPress() {
          const obj = { guild, analyticsSource: "Channels Sidebar" };
          obj.openLazy(asyncRequireImpl(12802, dependencyMap.paths), React3, obj);
        },
      title: hubProgressTitleForStep,
      subtitle: formatToPlainStringResult,
      percentComplete: bound
    };
    return jsx(tmp(14062).GuildProgressOverviewView, {
      onPress() {
          const obj = { guild, analyticsSource: "Channels Sidebar" };
          obj.openLazy(asyncRequireImpl(12802, dependencyMap.paths), React3, obj);
        },
      title: hubProgressTitleForStep,
      subtitle: formatToPlainStringResult,
      percentComplete: bound
    });
  }
  const obj2 = guild(12798);
};