// discord_app/modules/hub/native/components/progress_bar/HubSideBarProgressOverview.tsx
import Fragment from "../../../../../../_runtime/react/00021_Fragment.js";
import asyncRequire from "../../../../../../_runtime/01987_asyncRequire.js";
import ActionSheetActionCreatorsDefault from "../../../../action_sheet/native/ActionSheetActionCreators.tsx";
import react from "../../../../../../_runtime/00019_react.js";
import HubProgressBarConstants from "../../../HubProgressBarConstants.tsx";
import size_mod from "../../../../../../_runtime/metro/00002__.js";

let c3;
let closure_4;
({ HUB_PROGRESS_ACTION_SHEET_ID: c3, HUB_PROGRESS_NUM_TOTAL_STEPS: closure_4 } = HubProgressBarConstants);
const jsx = Fragment.jsx;
let size = size_mod;
const result = size.fileFinishedImporting("modules/hub/native/components/progress_bar/HubSideBarProgressOverview.tsx");

export default function HubSidebarProgressOverview(guild) {
  guild = guild.guild;
  let obj = guild(12335);
  const hubProgressBarCompletedSteps = obj.useHubProgressBarCompletedSteps(guild);
  let obj2 = guild(12335);
  const nextHubProgressStep = obj2.getNextHubProgressStep(hubProgressBarCompletedSteps);
  if (null == nextHubProgressStep) {
    return null;
  } else {
    let formatToPlainStringResult;
    size = hubProgressBarCompletedSteps.size;
    const tmpResult = guild(12335);
    const hubProgressTitleForStep = tmpResult.getHubProgressTitleForStep(nextHubProgressStep);
    if (size < total) {
      const intl2 = tmp(1126).intl;
      const formatToPlainString = intl2.formatToPlainString;
      const _HermesInternal = HermesInternal;
      const obj3 = { number: "" + size, total };
      const v9j7xDu = tmp(1126).t["9j7xDu"];
      formatToPlainStringResult = formatToPlainString(v9j7xDu, obj3);
    } else {
      const intl = tmp(1126).intl;
      formatToPlainStringResult = intl.string(tmp(1126).t["+Gyklt"]);
    }
    const _Math = Math;
    const bound = Math.max(tmp(12145).MIN_PROGRESS_PERCENT, (100 * size) / total);
    return jsx(guild(13809).GuildProgressOverviewView, {
      onPress() {
        const obj = ActionSheetActionCreatorsDefault;
        const obj2 = { guild, analyticsSource: "Channels Sidebar" };
        obj.openLazy(asyncRequire(12339, dependencyMap.paths), _false, obj2);
      },
      title: hubProgressTitleForStep,
      subtitle: formatToPlainStringResult,
      percentComplete: bound,
    });
  }
}
