// === Module 17322: IncentivizedAccountLinkConfirmationBottomSheet ===

// Module 17322 (IncentivizedAccountLinkConfirmationBottomSheet)
import initialize from "initialize" /* 504 */;
import util from "util" /* 1115 */;
import PlatformUtils from "PlatformUtils" /* 1364 */;
import HelpdeskUtilsDefault from "HelpdeskUtils" /* 2025 */;
import LinkingDefault from "Linking" /* 4417 */;
import ActionSheetActionCreatorsDefault from "ActionSheetActionCreators" /* 4689 */;
import components_Button_Button from "components/Button/Button" /* 5144 */;
import FastImageDefault from "FastImage" /* 5757 */;
import APNGDecorationNativeComponentDefault from "APNGDecorationNativeComponent" /* 9050 */;
import PromoSheet from "PromoSheet" /* 10471 */;
import WindowLaunchIcon from "WindowLaunchIcon" /* 13199 */;
import _modDef16075 from "module_16075" /* 16075 */;
import _modDef16076 from "module_16076" /* 16076 */;
import noop from "module_19" /* 19 */;
import AccessibilityStore from "AccessibilityStore" /* 4714 */;

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
    const obj3 = { uri: _modDef16075 };
    obj2.source = obj3;
    const size = { width: v150, height: v150 };
    obj2.style = size;
    let tmp3Result = <Image source={null} style={null} />;
    let tmp8 = importDefault;
    let tmp9 = jsx;
  } else {
    if (tmpResult.isAndroid()) {
      const obj4 = { url: _modDef16076, style: null };
      const size1 = { width: v150, height: v150 };
      obj4.style = size1;
      tmp3Result = jsx(APNGDecorationNativeComponentDefault, { url: _modDef16076, style: null });
      tmp8 = importDefault;
      tmp9 = jsx;
      const tmp4Result = APNGDecorationNativeComponentDefault;
    } else {
      const obj5 = { source: null, resizeMode: "contain", style: null };
      const obj6 = { uri: _modDef16076 };
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
  obj9.title = intl2.string(tmp8(3224).ublzTG);
  const intl3 = util.intl;
  obj9.description = intl3.string(tmp8(3224).JgM2xu);
  obj9.actions = tmp9(components_Button_Button.Button, obj7);
  obj9.illustration = tmp3Result;
  obj9.onDismiss = function onDismiss() {
    ActionSheetActionCreatorsDefault.hideActionSheet();
  };
  return tmp9(PromoSheet.PromoSheet, obj9);
};