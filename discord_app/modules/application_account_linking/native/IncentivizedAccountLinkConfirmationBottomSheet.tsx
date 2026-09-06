// discord_app/modules/application_account_linking/native/IncentivizedAccountLinkConfirmationBottomSheet.tsx
import initialize from "../../../../discord_common/js/packages/flux/index.tsx";
import util from "../../../intl/index.native.tsx";
import HelpdeskUtilsDefault from "../../../utils/HelpdeskUtils.tsx";
import LinkingDefault from "../../../lib/native/Linking.tsx";
import ActionSheetActionCreatorsDefault from "../../action_sheet/native/ActionSheetActionCreators.tsx";
import components_Button_Button from "../../../design/components/Button/native/Button.native.tsx";
import PromoSheet from "../../../design/components/Sheet/native/PromoSheet.native.tsx";
import WindowLaunchIcon from "../../../design/components/Icon/native/redesign/generated/WindowLaunchIcon.tsx";
import _modDef15832 from "../../../../discord_assets/assets/orbs/orb_coachmark_asset_2x.png.js";
import noop from "../../../../_runtime/metro/00019__.js";
import AccessibilityStore from "../../a11y/AccessibilityStore.tsx";

require = fn;
const Image = fn(17).Image;
const HelpdeskArticles = fn(1074).HelpdeskArticles;
const jsx = fn(21).jsx;
let c7 = 150;
let size = fn(2);
const result = size.fileFinishedImporting(
  "modules/application_account_linking/native/IncentivizedAccountLinkConfirmationBottomSheet.tsx",
);

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
      let tmp4Result = tmp4(8809);
      obj1.url = tmp4(15833);
      const size1 = { width: v150, height: v150 };
      obj1.style = size1;
      tmp3Result = tmp3(tmp4Result, obj1);
      tmp8 = tmp4;
      tmp9 = tmp3;
    } else {
      let obj2 = { source: null, resizeMode: "contain", style: null };
      const obj3 = { uri: null };
      tmp4Result = tmp4(5587);
      obj3.uri = tmp4(15833);
      obj2.source = obj3;
      const size2 = { width: v150, height: v150 };
      obj2.style = size2;
      tmp3Result = tmp3(tmp4Result, obj2);
      tmp8 = tmp4;
      tmp9 = tmp3;
    }
    tmpResult = tmp(1115);
  }
  const obj4 = { text: null, icon: null, iconPosition: "end", size: "lg", onPress: null };
  const intl = tmp(1114).intl;
  obj4.text = intl.string(util.t.aRIFWD);
  obj4.icon = tmp9(WindowLaunchIcon.WindowLaunchIcon, { size: "sm", color: tmp8(576).colors.WHITE });
  obj4.onPress = function onPress() {
    ActionSheetActionCreatorsDefault.hideActionSheet();
    const obj2 = LinkingDefault;
    obj2.openURL(HelpdeskUtilsDefault.getArticleURL(constants.IN_GAME_FEATURES));
  };
  const obj5 = { size: "sm", color: tmp8(576).colors.WHITE };
  const obj6 = { title: null, description: null, actions: null, illustration: null, onDismiss: null };
  const intl2 = tmp(1114).intl;
  obj6.title = intl2.string(tmp8(3127).ublzTG);
  const intl3 = tmp(1114).intl;
  obj6.description = intl3.string(tmp8(3127).JgM2xu);
  obj6.actions = tmp9(components_Button_Button.Button, obj4);
  obj6.illustration = tmp3Result;
  obj6.onDismiss = function onDismiss() {
    ActionSheetActionCreatorsDefault.hideActionSheet();
  };
  return tmp9(PromoSheet.PromoSheet, obj6);
}
