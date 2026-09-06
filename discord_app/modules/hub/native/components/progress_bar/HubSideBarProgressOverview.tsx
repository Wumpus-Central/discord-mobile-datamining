// === Module 16213: HubSideBarProgressOverview ===

// Module 16213 (HubSideBarProgressOverview)
import asyncRequireImpl from "asyncRequireImpl" /* 1896 */;
import ActionSheetActionCreatorsDefault from "ActionSheetActionCreators" /* 4527 */;
import noop from "module_19" /* 19 */;

require = fn;
const HubProgressBarConstants = fn(9831);
({ HUB_PROGRESS_ACTION_SHEET_ID: c3, HUB_PROGRESS_NUM_TOTAL_STEPS: closure_4 } = HubProgressBarConstants);
const jsx = fn(21).jsx;
let size = fn(2);
const result = size.fileFinishedImporting("modules/hub/native/components/progress_bar/HubSideBarProgressOverview.tsx");

export default function HubSidebarProgressOverview(guild) {
  guild = guild.guild;
  let obj = guild(12669);
  const hubProgressBarCompletedSteps = obj.useHubProgressBarCompletedSteps(guild);
  const nextHubProgressStep = guild(12669).getNextHubProgressStep(hubProgressBarCompletedSteps);
  if (null == nextHubProgressStep) {
    return null;
  } else {
    const size = hubProgressBarCompletedSteps.size;
    const hubProgressTitleForStep = tmp(12669).getHubProgressTitleForStep(nextHubProgressStep);
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
    const bound = Math.max(tmp(12474).MIN_PROGRESS_PERCENT, 100 * size / total);
    obj = {
      onPress() {
          const obj = { guild, analyticsSource: "Channels Sidebar" };
          obj.openLazy(asyncRequireImpl(12673, dependencyMap.paths), React3, obj);
        },
      title: hubProgressTitleForStep,
      subtitle: formatToPlainStringResult,
      percentComplete: bound
    };
    return jsx(tmp(13975).GuildProgressOverviewView, {
      onPress() {
          const obj = { guild, analyticsSource: "Channels Sidebar" };
          obj.openLazy(asyncRequireImpl(12673, dependencyMap.paths), React3, obj);
        },
      title: hubProgressTitleForStep,
      subtitle: formatToPlainStringResult,
      percentComplete: bound
    });
  }
  const obj2 = guild(12669);
};