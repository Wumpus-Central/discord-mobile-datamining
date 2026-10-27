// === Module 17683: HubSideBarProgressOverview ===

// Module 17683 (HubSideBarProgressOverview)
import asyncRequireImpl from "asyncRequireImpl" /* 1999 */;
import ActionSheetActionCreatorsDefault from "ActionSheetActionCreators" /* 5211 */;
import noop from "module_19" /* 19 */;

require = fn;
const HubProgressBarConstants = fn(9063);
({ HUB_PROGRESS_ACTION_SHEET_ID: c3, HUB_PROGRESS_NUM_TOTAL_STEPS: closure_4 } = HubProgressBarConstants);
const jsx = fn(21).jsx;
let size = fn(2);
const result = size.fileFinishedImporting("modules/hub/native/components/progress_bar/HubSideBarProgressOverview.tsx");

export default function HubSidebarProgressOverview(guild) {
  guild = guild.guild;
  const hubProgressBarCompletedSteps = guild(13590).useHubProgressBarCompletedSteps(guild);
  const obj = guild(13590);
  const nextHubProgressStep = guild(13590).getNextHubProgressStep(hubProgressBarCompletedSteps);
  if (null == nextHubProgressStep) {
    return null;
  } else {
    const size = hubProgressBarCompletedSteps.size;
    const hubProgressTitleForStep = tmp(13590).getHubProgressTitleForStep(nextHubProgressStep);
    if (size < total) {
      const intl2 = tmp(1125).intl;
      const obj3 = { number: null, total: null };
      const _HermesInternal = HermesInternal;
      obj3.number = "" + size;
      obj3.total = total;
      let formatToPlainStringResult = intl2.formatToPlainString(tmp(1125).t["9j7xDu"], obj3);
    } else {
      const intl = tmp(1125).intl;
      formatToPlainStringResult = intl.string(tmp(1125).t["+Gyklt"]);
    }
    const _Math = Math;
    const bound = Math.max(tmp(13411).MIN_PROGRESS_PERCENT, 100 * size / total);
    const obj4 = {
      onPress: function handlePress() {
          ActionSheetActionCreatorsDefault.openLazy(asyncRequireImpl(13594, dependencyMap.paths), React3, { guild, analyticsSource: "Channels Sidebar" });
        },
      title: hubProgressTitleForStep,
      subtitle: formatToPlainStringResult,
      percentComplete: bound
    };
    return jsx(tmp(15263).GuildProgressOverviewView, {
      onPress: function handlePress() {
          ActionSheetActionCreatorsDefault.openLazy(asyncRequireImpl(13594, dependencyMap.paths), React3, { guild, analyticsSource: "Channels Sidebar" });
        },
      title: hubProgressTitleForStep,
      subtitle: formatToPlainStringResult,
      percentComplete: bound
    });
  }
  const obj2 = guild(13590);
};