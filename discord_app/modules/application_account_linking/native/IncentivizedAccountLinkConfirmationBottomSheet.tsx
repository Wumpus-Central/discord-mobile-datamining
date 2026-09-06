// === Module 16943: IncentivizedAccountLinkConfirmationBottomSheet ===

// Module 16943 (IncentivizedAccountLinkConfirmationBottomSheet)
import initialize from "initialize" /* 504 */;
import util from "util" /* 1114 */;
import PlatformUtils from "PlatformUtils" /* 1115 */;
import HelpdeskUtilsDefault from "HelpdeskUtils" /* 2024 */;
import LinkingDefault from "Linking" /* 4255 */;
import ActionSheetActionCreatorsDefault from "ActionSheetActionCreators" /* 4527 */;
import components_Button_Button from "components/Button/Button" /* 4975 */;
import FastImageDefault from "FastImage" /* 5587 */;
import APNGDecorationNativeComponentDefault from "APNGDecorationNativeComponent" /* 8809 */;
import PromoSheet from "PromoSheet" /* 10230 */;
import WindowLaunchIcon from "WindowLaunchIcon" /* 12956 */;
import _modDef15832 from "module_15832" /* 15832 */;
import _modDef15833 from "module_15833" /* 15833 */;
import noop from "module_19" /* 19 */;
import AccessibilityStore from "AccessibilityStore" /* 4552 */;

require = fn;
const Image = fn(17).Image;
const HelpdeskArticles = fn(1074).HelpdeskArticles;
const jsx = fn(21).jsx;
let c7 = 150;
let size = fn(2);
const result = size.fileFinishedImporting("modules/application_account_linking/native/IncentivizedAccountLinkConfirmationBottomSheet.tsx");

export default function IncentivizedAccountLinkConfirmationBottomSheet() {
  let obj = initialize;
  const items = [AccessibilityStore];
  if (obj.useStateFromStores(items, () => useReducedMotion.useReducedMotion)) {
    obj = { source: null, style: null };
    obj = { uri: _modDef15832 };
    obj.source = obj;
    const size = { width: v150, height: v150 };
    obj.style = size;
    let tmp3Result = <Image uri={_modDef15832} />;
    let tmp8 = importDefault;
    let tmp9 = jsx;
  } else {
    if (tmpResult.isAndroid()) {
      const obj1 = { url: null, style: null };
      let tmp4Result = APNGDecorationNativeComponentDefault;
      obj1.url = _modDef15833;
      const size1 = { width: v150, height: v150 };
      obj1.style = size1;
      tmp3Result = <tmp4Result url={null} style={null} />;
      tmp8 = importDefault;
      tmp9 = jsx;
    } else {
      let obj2 = { source: null, resizeMode: "contain", style: null };
      const obj3 = { uri: null };
      tmp4Result = FastImageDefault;
      obj3.uri = _modDef15833;
      obj2.source = obj3;
      const size2 = { width: v150, height: v150 };
      obj2.style = size2;
      tmp3Result = <tmp4Result source={null} resizeMode="contain" style={null} />;
      tmp8 = importDefault;
      tmp9 = jsx;
    }
    tmpResult = PlatformUtils;
  }
  const obj4 = { text: null, icon: null, iconPosition: "end", size: "lg", onPress: null };
  const intl = util.intl;
  obj4.text = intl.string(util.t.aRIFWD);
  obj4.icon = tmp9(WindowLaunchIcon.WindowLaunchIcon, { size: "sm", color: tmp8(576).colors.WHITE });
  obj4.onPress = function onPress() {
    ActionSheetActionCreatorsDefault.hideActionSheet();
    const obj2 = LinkingDefault;
    obj2.openURL(HelpdeskUtilsDefault.getArticleURL(constants.IN_GAME_FEATURES));
  };
  const obj5 = { size: "sm", color: tmp8(576).colors.WHITE };
  const obj6 = { title: null, description: null, actions: null, illustration: null, onDismiss: null };
  const intl2 = util.intl;
  obj6.title = intl2.string(tmp8(3127).ublzTG);
  const intl3 = util.intl;
  obj6.description = intl3.string(tmp8(3127).JgM2xu);
  obj6.actions = tmp9(components_Button_Button.Button, obj4);
  obj6.illustration = tmp3Result;
  obj6.onDismiss = function onDismiss() {
    ActionSheetActionCreatorsDefault.hideActionSheet();
  };
  return tmp9(PromoSheet.PromoSheet, obj6);
};