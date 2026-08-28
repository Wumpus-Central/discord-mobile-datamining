// discord_app/modules/hub/native/components/progress_bar/HubSideBarProgressOverview.tsx
import noopAll from "../../../../../../_runtime/00019_noop.js";
import items from "../../../HubProgressBarConstants.tsx";
import { jsx } from "../../../../../../_runtime/react/00021_jsxProd.js";

const require = arg1;
noopAll;
({ HUB_PROGRESS_ACTION_SHEET_ID: c3, HUB_PROGRESS_NUM_TOTAL_STEPS: c4 } = items);
const result = require("set").fileFinishedImporting("modules/hub/native/components/progress_bar/HubSideBarProgressOverview.tsx");

export default function HubSidebarProgressOverview(guild) {
  guild = guild.guild;
  let obj = guild(12140);
  const hubProgressBarCompletedSteps = obj.useHubProgressBarCompletedSteps(guild);
  const nextHubProgressStep = guild(12140).getNextHubProgressStep(hubProgressBarCompletedSteps);
  if (null == nextHubProgressStep) {
    return null;
  } else {
    const size = hubProgressBarCompletedSteps.size;
    const hubProgressTitleForStep = tmp(12140).getHubProgressTitleForStep(nextHubProgressStep);
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
    const bound = Math.max(tmp(11972).MIN_PROGRESS_PERCENT, 100 * size / tmp11);
    obj = { onPress: null, title: null, subtitle: null, percentComplete: null };
    obj[0] = function onPress() {
      let obj = closure_1_1(closure_1_2[7]);
      obj = { guild, analyticsSource: "Channels Sidebar" };
      obj.openLazy(guild(closure_1_2[9])(closure_1_2[8], closure_1_2.paths), closure_1_3, obj);
    };
    obj[1] = hubProgressTitleForStep;
    obj[2] = formatToPlainStringResult;
    obj[3] = bound;
    return jsx(tmp(13647).GuildProgressOverviewView, { onPress: null, title: null, subtitle: null, percentComplete: null });
  }
  const obj2 = guild(12140);
};