// === Module 12151: HubProgressHeader ===

// Module 12151 (HubProgressHeader)
import nativeDefault from "native" /* 576 */;
import preloaded_user_settings from "preloaded_user_settings" /* 1186 */;
import asyncRequireImpl from "asyncRequireImpl" /* 1980 */;
import ActionSheetActionCreatorsDefault from "ActionSheetActionCreators" /* 4796 */;
import noop from "module_19" /* 19 */;

require = fn;
const View = fn(17).View;
const HubProgressBarConstants = fn(9275);
({ HUB_PROGRESS_ACTION_SHEET_ID: closure_4, HUB_PROGRESS_NUM_TOTAL_STEPS: hasOwnProperty } = HubProgressBarConstants);
const jsx = fn(21).jsx;
const createStyles = fn(4829);
let obj2 = { container: { overflow: "hidden", height: fn(11779).GUILD_DIRECTORY_PROGRESS_BAR_HEIGHT, padding: 16 }, icon: { width: 48, height: 48 }, innerContainer: { paddingVertical: 8, paddingLeft: 8, paddingRight: 12, backgroundColor: nativeDefault.colors.BACKGROUND_SURFACE_HIGH } };
let closure_7 = createStyles.createStyles(obj2);
let size = fn(2);
const result = size.fileFinishedImporting("modules/hub/native/components/progress_bar/HubProgressHeader.tsx");

export default function HubProgressHeader(guild) {
  guild = guild.guild;
  let flag = guild.onDirectoryPage;
  if (flag === undefined) {
    flag = false;
  }
  let nextHubProgressStep;
  let tmp = closure_7();
  const hubProgressBarCompletedSteps = guild(nextHubProgressStep[7]).useHubProgressBarCompletedSteps(guild);
  let obj = guild(nextHubProgressStep[7]);
  nextHubProgressStep = guild(nextHubProgressStep[7]).getNextHubProgressStep(hubProgressBarCompletedSteps);
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
      const obj3 = { number: null, total: null };
      const _HermesInternal = HermesInternal;
      obj3.number = "" + size;
      obj3.total = tmp7;
      let formatToPlainStringResult = intl2.formatToPlainString(tmp2(tmp3[9]).t["9j7xDu"], obj3);
    } else {
      const intl = tmp2(tmp3[9]).intl;
      formatToPlainStringResult = intl.string(tmp2(tmp3[9]).t["+Gyklt"]);
    }
    const obj4 = { style: tmp.container, children: null };
    const obj5 = { style: null, iconStyle: null, onPress: null, iconSource: null, title: null, subtitle: null, trailing: null };
    ({ innerContainer: obj6.style, icon: obj6.iconStyle } = tmp);
    obj5.onPress = function onPress() {
      let tmp = flag;
      if (flag) {
        tmp = nextHubProgressStep === preloaded_user_settings.HubProgressStep.JOIN_GUILD;
      }
      if (!tmp) {
        const obj2 = { guild, analyticsSource: "Directory Channel Header" };
        ActionSheetActionCreatorsDefault.openLazy(asyncRequireImpl(12152, dependencyMap.paths), React4, obj2);
      }
    };
    obj5.iconSource = flag(tmp3[14]);
    obj5.title = hubProgressTitleForStep;
    obj5.subtitle = formatToPlainStringResult;
    let tmp10Result;
    if (flag) {
      tmp10Result = <View />;
    }
    obj5.trailing = tmp10Result;
    obj4.children = jsx(tmp2(tmp3[10]).FormCTA, { style: null, iconStyle: null, onPress: null, iconSource: null, title: null, subtitle: null, trailing: null });
    return <View style={tmp.container}>{null}</View>;
  }
  let obj2 = guild(nextHubProgressStep[7]);
};