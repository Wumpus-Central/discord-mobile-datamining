// discord_app/modules/hub/native/components/progress_bar/HubProgressHeader.tsx
import react_native from "../../../../../../_runtime/00017_react-native.js";
import Fragment from "../../../../../../_runtime/react/00021_Fragment.js";
import nativeDefault from "../../../../../../discord_common/js/packages/tokens/native.tsx";
import preloaded_user_settings from "../../../../../../discord_common/js/packages/protos/discord_protos/discord_users/v1/preloaded_user_settings.tsx";
import asyncRequire from "../../../../../../_runtime/01987_asyncRequire.js";
import ActionSheetActionCreatorsDefault from "../../../../action_sheet/native/ActionSheetActionCreators.tsx";
import directory_channels_GuildDirectoryConstants from "../../../../directory_channels/native/GuildDirectoryConstants.tsx";
import react from "../../../../../../_runtime/00019_react.js";
import HubProgressBarConstants from "../../../HubProgressBarConstants.tsx";
import createStyles from "../../../../../design/components/Styles/native/createStyles.tsx";
import size_mod from "../../../../../../_runtime/metro/00002__.js";

let closure_4;
let hasOwnProperty;
let obj2;
const View = react_native.View;
({ HUB_PROGRESS_ACTION_SHEET_ID: closure_4, HUB_PROGRESS_NUM_TOTAL_STEPS: hasOwnProperty } = HubProgressBarConstants);
const GUILD_DIRECTORY_PROGRESS_BAR_HEIGHT =
  directory_channels_GuildDirectoryConstants.GUILD_DIRECTORY_PROGRESS_BAR_HEIGHT;
const jsx = Fragment.jsx;
let obj = {
  container: { overflow: "hidden", height: GUILD_DIRECTORY_PROGRESS_BAR_HEIGHT, padding: 16 },
  icon: { width: 48, height: 48 },
  innerContainer: obj2,
};
obj2 = {
  paddingVertical: 8,
  paddingLeft: 8,
  paddingRight: 12,
  backgroundColor: nativeDefault.colors.BACKGROUND_SURFACE_HIGH,
};
let closure_7 = createStyles.createStyles(obj);
let size = size_mod;
const result = size.fileFinishedImporting("modules/hub/native/components/progress_bar/HubProgressHeader.tsx");

export default function HubProgressHeader(guild) {
  let tmp11Result;
  guild = guild.guild;
  let flag = guild.onDirectoryPage;
  if (flag === undefined) {
    flag = false;
  }
  let nextHubProgressStep;
  let tmp = closure_7();
  let obj = guild(nextHubProgressStep[7]);
  const hubProgressBarCompletedSteps = obj.useHubProgressBarCompletedSteps(guild);
  let obj2 = guild(nextHubProgressStep[7]);
  nextHubProgressStep = obj2.getNextHubProgressStep(hubProgressBarCompletedSteps);
  if (null == nextHubProgressStep) {
    return null;
  } else {
    let formatToPlainStringResult;
    size = hubProgressBarCompletedSteps.size;
    if (flag) {
      flag = nextHubProgressStep === tmp2(tmp3[8]).HubProgressStep.JOIN_GUILD;
    }
    const tmp2Result = guild(nextHubProgressStep[7]);
    const hubProgressTitleForStep = tmp2Result.getHubProgressTitleForStep(nextHubProgressStep);
    if (size < closure_5) {
      const intl2 = tmp2(tmp3[9]).intl;
      const formatToPlainString = intl2.formatToPlainString;
      const _HermesInternal = HermesInternal;
      const obj3 = { number: "" + size, total: tmp7 };
      const v9j7xDu = tmp2(tmp3[9]).t["9j7xDu"];
      formatToPlainStringResult = formatToPlainString(v9j7xDu, obj3);
    } else {
      const intl = tmp2(tmp3[9]).intl;
      formatToPlainStringResult = intl.string(tmp2(tmp3[9]).t["+Gyklt"]);
    }
    ({
      style: null,
      iconStyle: null,
      onPress() {
        const tmp = flag && nextHubProgressStep === preloaded_user_settings.HubProgressStep.JOIN_GUILD;
        if (!tmp) {
          const obj2 = { guild, analyticsSource: "Directory Channel Header" };
          const obj = ActionSheetActionCreatorsDefault;
          obj.openLazy(asyncRequire(12339, dependencyMap.paths), React3, obj2);
        }
      },
      iconSource: flag(nextHubProgressStep[14]),
      title: hubProgressTitleForStep,
      subtitle: formatToPlainStringResult,
      trailing: tmp11Result,
    });
    ({ innerContainer: obj6.style, icon: obj6.iconStyle } = tmp);
    const FormCTA = tmp2(tmp3[10]).FormCTA;
    tmp11Result = undefined;
    if (flag) {
      tmp11Result = <View />;
    }
    return <View style={tmp.container}>{null}</View>;
  }
}
