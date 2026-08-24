// discord_app/modules/hub/native/components/progress_bar/HubProgressHeader.tsx
import noopAll from "../../../../../../_runtime/00019_noop.js";
import ThemesDefault from "../../../../../../discord_common/js/packages/tokens/native.tsx";
import { View } from "../../../../../../_runtime/00017_get_ActivityIndicator.js";
import items from "../../../HubProgressBarConstants.tsx";
import { jsx } from "../../../../../../_runtime/react/00021_jsxProd.js";
import createCacheKey from "../../../../../design/components/Styles/native/createStyles.tsx";

const require = arg1;
noopAll;
({ HUB_PROGRESS_ACTION_SHEET_ID: c4, HUB_PROGRESS_NUM_TOTAL_STEPS: c5 } = items);
createCacheKey = { container: { overflow: "hidden", height: require("GuildDirectoryCreate").GUILD_DIRECTORY_PROGRESS_BAR_HEIGHT, padding: 16 }, icon: { width: 48, height: 48 }, innerContainer: null };
createCacheKey = { paddingVertical: 8, paddingLeft: 8, paddingRight: 12, backgroundColor: ThemesDefault.colors.BACKGROUND_SURFACE_HIGH };
createCacheKey[2] = createCacheKey;
let closure_7 = createCacheKey.createStyles(createCacheKey);
const result = require("set").fileFinishedImporting("modules/hub/native/components/progress_bar/HubProgressHeader.tsx");

export default function HubProgressHeader(guild) {
  guild = guild.guild;
  let flag = guild.onDirectoryPage;
  if (flag === undefined) {
    flag = false;
  }
  let nextHubProgressStep;
  let tmp = callback();
  let obj = guild(nextHubProgressStep[7]);
  const hubProgressBarCompletedSteps = obj.useHubProgressBarCompletedSteps(guild);
  obj1 = guild(nextHubProgressStep[7]);
  nextHubProgressStep = obj1.getNextHubProgressStep(hubProgressBarCompletedSteps);
  if (null == nextHubProgressStep) {
    return null;
  } else {
    const size = hubProgressBarCompletedSteps.size;
    if (flag) {
      flag = nextHubProgressStep === tmp2(tmp3[8]).HubProgressStep.JOIN_GUILD;
    }
    const hubProgressTitleForStep = tmp2(tmp3[7]).getHubProgressTitleForStep(nextHubProgressStep);
    if (size < closure_5) {
      const intl2 = tmp2(tmp3[9]).intl;
      obj = { number: null, total: null };
      const _HermesInternal = HermesInternal;
      obj[0] = "" + size;
      obj[1] = tmp7;
      let formatToPlainStringResult = intl2.formatToPlainString(tmp2(tmp3[9]).t["9j7xDu"], obj);
    } else {
      const intl = tmp2(tmp3[9]).intl;
      formatToPlainStringResult = intl.string(tmp2(tmp3[9]).t["+Gyklt"]);
    }
    obj = { style: null, children: null };
    obj[0] = tmp.container;
    obj1 = { style: null, iconStyle: null, onPress: null, iconSource: null, title: null, subtitle: null, trailing: null };
    ({ innerContainer: obj6[0], icon: obj6[1] } = tmp);
    obj1[2] = function onPress() {
      let tmp = flag;
      if (flag) {
        tmp = nextHubProgressStep === guild(nextHubProgressStep[8]).HubProgressStep.JOIN_GUILD;
      }
      if (!tmp) {
        let obj = flag(nextHubProgressStep[11]);
        obj = { guild: null, analyticsSource: "Directory Channel Header" };
        obj[0] = guild;
        obj.openLazy(guild(nextHubProgressStep[13])(nextHubProgressStep[12], nextHubProgressStep.paths), closure_1_4, obj);
      }
    };
    obj1[3] = flag(tmp3[14]);
    obj1[4] = hubProgressTitleForStep;
    obj1[5] = formatToPlainStringResult;
    let tmp10Result;
    if (flag) {
      tmp10Result = tmp10(tmp11, {});
    }
    obj1[6] = tmp10Result;
    obj[1] = jsx(tmp2(tmp3[10]).FormCTA, { style: null, iconStyle: null, onPress: null, iconSource: null, title: null, subtitle: null, trailing: null });
    return <View style={null}>{null}</View>;
  }
};