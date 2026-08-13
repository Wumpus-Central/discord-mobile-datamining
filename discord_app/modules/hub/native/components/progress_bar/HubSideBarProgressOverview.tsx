// discord_app/modules/hub/native/components/progress_bar/HubSideBarProgressOverview.tsx
import "noop";
import items from "items";
import { jsx } from "jsxProd";

let c3;
let c4;
const require = arg1;
({ HUB_PROGRESS_ACTION_SHEET_ID: c3, HUB_PROGRESS_NUM_TOTAL_STEPS: c4 } = items);
const result = require("jsxProd").fileFinishedImporting("modules/hub/native/components/progress_bar/HubSideBarProgressOverview.tsx");

export default function HubSidebarProgressOverview(guild) {
  guild = guild.guild;
  let obj = guild(12087);
  const hubProgressBarCompletedSteps = obj.useHubProgressBarCompletedSteps(guild);
  const nextHubProgressStep = guild(12087).getNextHubProgressStep(hubProgressBarCompletedSteps);
  if (null == nextHubProgressStep) {
    return null;
  } else {
    const size = hubProgressBarCompletedSteps.size;
    const hubProgressTitleForStep = tmp(12087).getHubProgressTitleForStep(nextHubProgressStep);
    if (size < closure_4) {
      const intl2 = tmp(1236).intl;
      obj = { number: null, total: null };
      const _HermesInternal = HermesInternal;
      obj[0] = "" + size;
      obj[1] = tmp11;
      let formatToPlainStringResult = intl2.formatToPlainString(tmp(1236).t["9j7xDu"], obj);
    } else {
      const intl = tmp(1236).intl;
      formatToPlainStringResult = intl.string(tmp(1236).t["+Gyklt"]);
    }
    const _Math = Math;
    const bound = Math.max(tmp(11898).MIN_PROGRESS_PERCENT, 100 * size / tmp11);
    obj = { onPress: null, title: null, subtitle: null, percentComplete: null };
    obj[0] = function onPress() {
      let obj = outer1_1(outer1_2[7]);
      obj = { guild, analyticsSource: "Channels Sidebar" };
      obj.openLazy(guild(outer1_2[9])(outer1_2[8], outer1_2.paths), outer1_3, obj);
    };
    obj[1] = hubProgressTitleForStep;
    obj[2] = formatToPlainStringResult;
    obj[3] = bound;
    return jsx(tmp(13391).GuildProgressOverviewView, { onPress: null, title: null, subtitle: null, percentComplete: null });
  }
  const obj2 = guild(12087);
};