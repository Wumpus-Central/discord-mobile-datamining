// === Module 12672: HubProgressHeader ===

// Module 12672 (HubProgressHeader)
import nativeDefault from "native" /* 576 */;
import preloaded_user_settings from "preloaded_user_settings" /* 1187 */;
import asyncRequireImpl from "asyncRequireImpl" /* 1896 */;
import ActionSheetActionCreatorsDefault from "ActionSheetActionCreators" /* 4527 */;
import noop from "module_19" /* 19 */;

require = fn;
const View = fn(17).View;
const HubProgressBarConstants = fn(9831);
({ HUB_PROGRESS_ACTION_SHEET_ID: closure_4, HUB_PROGRESS_NUM_TOTAL_STEPS: hasOwnProperty } = HubProgressBarConstants);
const jsx = fn(21).jsx;
fn(4560);
let createStyles = { container: { overflow: "hidden", height: fn(12310).GUILD_DIRECTORY_PROGRESS_BAR_HEIGHT, padding: 16 }, icon: { width: 48, height: 48 }, innerContainer: null };
createStyles = { paddingVertical: 8, paddingLeft: 8, paddingRight: 12, backgroundColor: nativeDefault.colors.BACKGROUND_SURFACE_HIGH };
createStyles.innerContainer = createStyles;
let closure_7 = createStyles.createStyles(createStyles);
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
  let obj = guild(nextHubProgressStep[7]);
  const hubProgressBarCompletedSteps = obj.useHubProgressBarCompletedSteps(guild);
  let obj1 = guild(nextHubProgressStep[7]);
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
      obj.number = "" + size;
      obj.total = tmp7;
      let formatToPlainStringResult = intl2.formatToPlainString(tmp2(tmp3[9]).t["9j7xDu"], obj);
    } else {
      const intl = tmp2(tmp3[9]).intl;
      formatToPlainStringResult = intl.string(tmp2(tmp3[9]).t["+Gyklt"]);
    }
    obj = { style: tmp.container, children: null };
    obj1 = { style: null, iconStyle: null, onPress: null, iconSource: null, title: null, subtitle: null, trailing: null };
    ({ innerContainer: obj6.style, icon: obj6.iconStyle } = tmp);
    obj1.onPress = function onPress() {
      let tmp = flag;
      if (flag) {
        tmp = nextHubProgressStep === preloaded_user_settings.HubProgressStep.JOIN_GUILD;
      }
      if (!tmp) {
        const obj = { guild, analyticsSource: "Directory Channel Header" };
        obj.openLazy(asyncRequireImpl(12673, dependencyMap.paths), React4, obj);
      }
    };
    obj1.iconSource = flag(tmp3[14]);
    obj1.title = hubProgressTitleForStep;
    obj1.subtitle = formatToPlainStringResult;
    let tmp10Result;
    if (flag) {
      tmp10Result = tmp10(tmp11, {});
    }
    obj1.trailing = tmp10Result;
    obj.children = jsx(tmp2(tmp3[10]).FormCTA, { style: null, iconStyle: null, onPress: null, iconSource: null, title: null, subtitle: null, trailing: null });
    return <View style={tmp.container}>{null}</View>;
  }
};