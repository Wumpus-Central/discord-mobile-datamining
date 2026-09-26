// === Module 16763: IncentivizedAccountLinkConfirmationBottomSheet ===

// Module 16763 (IncentivizedAccountLinkConfirmationBottomSheet)
import initialize from "initialize" /* 504 */;
import util from "util" /* 1115 */;
import PlatformUtils from "PlatformUtils" /* 1364 */;
import HelpdeskUtilsDefault from "HelpdeskUtils" /* 2111 */;
import LinkingDefault from "Linking" /* 4525 */;
import ActionSheetActionCreatorsDefault from "ActionSheetActionCreators" /* 4800 */;
import components_Button_Button from "components/Button/Button" /* 5281 */;
import FastImageDefault from "FastImage" /* 5899 */;
import APNGDecorationNativeComponentDefault from "APNGDecorationNativeComponent" /* 8272 */;
import PromoSheet from "PromoSheet" /* 9691 */;
import WindowLaunchIcon from "WindowLaunchIcon" /* 12512 */;
import _modDef15451 from "module_15451" /* 15451 */;
import _modDef15452 from "module_15452" /* 15452 */;
import noop from "module_19" /* 19 */;
import AccessibilityStore from "AccessibilityStore" /* 4825 */;

require = fn;
const Image = fn(17).Image;
const HelpdeskArticles = fn(1074).HelpdeskArticles;
const jsx = fn(21).jsx;
let c7 = 150;
let size = fn(2);
const result = size.fileFinishedImporting("modules/application_account_linking/native/IncentivizedAccountLinkConfirmationBottomSheet.tsx");

export default function IncentivizedAccountLinkConfirmationBottomSheet() {
  const items = [AccessibilityStore];
  if (obj.useStateFromStores(items, () => useReducedMotion.useReducedMotion)) {
    let obj2 = { source: null, style: null };
    const obj3 = { uri: _modDef15451 };
    obj2.source = obj3;
    const size = { width: v150, height: v150 };
    obj2.style = size;
    let tmp3Result = <Image source={null} style={null} />;
    let tmp8 = importDefault;
    let tmp9 = jsx;
  } else {
    if (tmpResult.isAndroid()) {
      const obj4 = { url: _modDef15452, style: null };
      const size1 = { width: v150, height: v150 };
      obj4.style = size1;
      tmp3Result = jsx(APNGDecorationNativeComponentDefault, { url: _modDef15452, style: null });
      tmp8 = importDefault;
      tmp9 = jsx;
      const tmp4Result = APNGDecorationNativeComponentDefault;
    } else {
      const obj5 = { source: null, resizeMode: "contain", style: null };
      const obj6 = { uri: _modDef15452 };
      obj5.source = obj6;
      const size2 = { width: v150, height: v150 };
      obj5.style = size2;
      tmp3Result = jsx(FastImageDefault, { source: null, resizeMode: "contain", style: null });
      tmp8 = importDefault;
      tmp9 = jsx;
      const tmp4Result2 = FastImageDefault;
    }
    tmpResult = PlatformUtils;
  }
  const obj7 = { text: null, icon: null, iconPosition: "end", size: "lg", onPress: null };
  const intl = util.intl;
  obj7.text = intl.string(util.t.aRIFWD);
  obj = initialize;
  obj7.icon = tmp9(WindowLaunchIcon.WindowLaunchIcon, { size: "sm", color: tmp8(576).colors.WHITE });
  obj7.onPress = function onPress() {
    ActionSheetActionCreatorsDefault.hideActionSheet();
    const obj2 = LinkingDefault;
    obj2.openURL(HelpdeskUtilsDefault.getArticleURL(constants.IN_GAME_FEATURES));
  };
  const obj8 = { size: "sm", color: tmp8(576).colors.WHITE };
  const obj9 = { title: null, description: null, actions: null, illustration: null, onDismiss: null };
  const intl2 = util.intl;
  obj9.title = intl2.string(tmp8(3263).ublzTG);
  const intl3 = util.intl;
  obj9.description = intl3.string(tmp8(3263).JgM2xu);
  obj9.actions = tmp9(components_Button_Button.Button, obj7);
  obj9.illustration = tmp3Result;
  obj9.onDismiss = function onDismiss() {
    ActionSheetActionCreatorsDefault.hideActionSheet();
  };
  return tmp9(PromoSheet.PromoSheet, obj9);
};