// === Module 15475: HubSidebarProgressOverview ===

// Module 15475 (HubSidebarProgressOverview)
import noopAll from "noop" /* 19 */;
import ACTION_SHEET_HEIGHT_HALFDefault from "ACTION_SHEET_HEIGHT_HALF" /* 4342 */;
import items from "items" /* 11506 */;
import { jsx } from "jsxProd" /* 21 */;

const require = fn;
noopAll;
({ HUB_PROGRESS_ACTION_SHEET_ID: c3, HUB_PROGRESS_NUM_TOTAL_STEPS: c4 } = items);
const result = require("obj132").fileFinishedImporting("modules/hub/native/components/progress_bar/HubSideBarProgressOverview.tsx");

export default function HubSidebarProgressOverview(guild) {
  guild = guild.guild;
  let obj = guild(11842);
  const hubProgressBarCompletedSteps = obj.useHubProgressBarCompletedSteps(guild);
  const nextHubProgressStep = guild(11842).getNextHubProgressStep(hubProgressBarCompletedSteps);
  if (null == nextHubProgressStep) {
    return null;
  } else {
    const size = hubProgressBarCompletedSteps.size;
    const hubProgressTitleForStep = tmp(11842).getHubProgressTitleForStep(nextHubProgressStep);
    if (size < closure_4) {
      const intl2 = tmp(1236).intl;
      obj = { number: null, total: null };
      const _HermesInternal = HermesInternal;
      obj[0] = "" + size;
      obj[1] = closure_4;
      let formatToPlainStringResult = intl2.formatToPlainString(tmp(1236).t["9j7xDu"], obj);
    } else {
      const intl = tmp(1236).intl;
      formatToPlainStringResult = intl.string(tmp(1236).t["+Gyklt"]);
    }
    const _Math = Math;
    const bound = Math.max(tmp(11643).MIN_PROGRESS_PERCENT, 100 * size / closure_4);
    obj = { onPress: null, title: null, subtitle: null, percentComplete: null };
    obj[0] = function onPress() {
      const obj = { guild, analyticsSource: "Channels Sidebar" };
      obj.openLazy(guild(dependencyMap[9])(dependencyMap[8], dependencyMap.paths), closure_1_3, obj);
    };
    obj[1] = hubProgressTitleForStep;
    obj[2] = formatToPlainStringResult;
    obj[3] = bound;
    return jsx(tmp(13435).GuildProgressOverviewView, { onPress: null, title: null, subtitle: null, percentComplete: null });
  }
  const obj2 = guild(11842);
};