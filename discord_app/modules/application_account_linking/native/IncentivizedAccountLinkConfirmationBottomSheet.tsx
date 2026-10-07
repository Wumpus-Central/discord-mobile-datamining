// === Module 17153: IncentivizedAccountLinkConfirmationBottomSheet ===

// Module 17153 (IncentivizedAccountLinkConfirmationBottomSheet)
import initialize from "initialize" /* 504 */;
import c from "c" /* 576 */;
import nativeDefault from "native" /* 587 */;
import util from "util" /* 1126 */;
import PlatformUtils from "PlatformUtils" /* 1369 */;
import HelpdeskUtilsDefault from "HelpdeskUtils" /* 2115 */;
import _modDef3297 from "module_3297" /* 3297 */;
import LinkingDefault from "Linking" /* 4571 */;
import ActionSheetActionCreatorsDefault from "ActionSheetActionCreators" /* 4860 */;
import components_Button_Button from "components/Button/Button" /* 5601 */;
import FastImageDefault from "FastImage" /* 5981 */;
import APNGDecorationNativeComponentDefault from "APNGDecorationNativeComponent" /* 8498 */;
import PromoSheet from "PromoSheet" /* 10058 */;
import WindowLaunchIcon from "WindowLaunchIcon" /* 12772 */;
import _modDef15777 from "module_15777" /* 15777 */;
import _modDef15778 from "module_15778" /* 15778 */;
import noop from "module_19" /* 19 */;
import AccessibilityStore from "AccessibilityStore" /* 4885 */;

require = fn;
const Image = fn(17).Image;
const HelpdeskArticles = fn(1085).HelpdeskArticles;
const jsx = fn(21).jsx;
let c7 = 150;
const ReactCompilerGating = fn(558);
let size = fn(2);
const result = size.fileFinishedImporting("modules/application_account_linking/native/IncentivizedAccountLinkConfirmationBottomSheet.tsx");

export default ReactCompilerGating.isReactCompilerEnabled() ? (() => {
  const cResult = c.c(11);
  if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
    const items = [AccessibilityStore];
    const fn = function u() {
      return useReducedMotion.useReducedMotion;
    };
    cResult[0] = items;
    cResult[1] = fn;
    tmp4 = items;
    tmp5 = fn;
  } else {
    [tmp4, tmp5] = cResult;
  }
  const stateFromStores = initialize.useStateFromStores(tmp4, tmp5);
  if (cResult[2] === Symbol.for("react.memo_cache_sentinel")) {
    const fn2 = function _() {
      ActionSheetActionCreatorsDefault.hideActionSheet();
      const obj2 = LinkingDefault;
      obj2.openURL(HelpdeskUtilsDefault.getArticleURL(constants.IN_GAME_FEATURES));
    };
    cResult[2] = fn2;
    let tmp8 = fn2;
  } else {
    tmp8 = cResult[2];
  }
  if (cResult[3] === Symbol.for("react.memo_cache_sentinel")) {
    const fn3 = function f() {
      ActionSheetActionCreatorsDefault.hideActionSheet();
    };
    cResult[3] = fn3;
    let tmp9 = fn3;
  } else {
    tmp9 = cResult[3];
  }
  if (cResult[4] !== stateFromStores) {
    if (stateFromStores) {
      let obj2 = { source: null, style: null };
      const obj3 = { uri: _modDef15777 };
      obj2.source = obj3;
      const size = { width: v150, height: v150 };
      obj2.style = size;
      let tmp11Result = <Image source={null} style={null} />;
    } else {
      if (tmpResult2.isAndroid()) {
        const obj4 = { url: _modDef15778, style: null };
        const size1 = { width: v150, height: v150 };
        obj4.style = size1;
        tmp11Result = jsx(APNGDecorationNativeComponentDefault, { url: _modDef15778, style: null });
        const tmp12Result = APNGDecorationNativeComponentDefault;
      } else {
        const obj5 = { source: null, resizeMode: "contain", style: null };
        const obj6 = { uri: _modDef15778 };
        obj5.source = obj6;
        const size2 = { width: v150, height: v150 };
        obj5.style = size2;
        tmp11Result = jsx(FastImageDefault, { source: null, resizeMode: "contain", style: null });
        const tmp12Result2 = FastImageDefault;
      }
      tmpResult2 = PlatformUtils;
    }
    cResult[4] = stateFromStores;
    cResult[5] = tmp11Result;
  } else {
    const _Symbol = Symbol;
    if (cResult[6] === Symbol.for("react.memo_cache_sentinel")) {
      const obj7 = { text: null, icon: null, iconPosition: "end", size: "lg", onPress: null };
      const intl = util.intl;
      obj7.text = intl.string(util.t.aRIFWD);
      const obj8 = { size: "sm", color: nativeDefault.colors.WHITE };
      obj7.icon = jsx(WindowLaunchIcon.WindowLaunchIcon, { size: "sm", color: nativeDefault.colors.WHITE });
      obj7.onPress = tmp8;
      const tmp26 = jsx(components_Button_Button.Button, { text: null, icon: null, iconPosition: "end", size: "lg", onPress: null });
      cResult[6] = tmp26;
      let tmp23 = tmp26;
    } else {
      tmp23 = cResult[6];
    }
    const _Symbol2 = Symbol;
    if (cResult[7] === Symbol.for("react.memo_cache_sentinel")) {
      const intl2 = util.intl;
      const stringResult = intl2.string(_modDef3297.ublzTG);
      const intl3 = util.intl;
      const stringResult1 = intl3.string(_modDef3297.JgM2xu);
      cResult[7] = stringResult;
      cResult[8] = stringResult1;
      let tmp28 = stringResult1;
      let tmp27 = stringResult;
    } else {
      tmp27 = cResult[7];
      tmp28 = cResult[8];
    }
    if (cResult[9] !== cResult[5]) {
      const obj9 = { title: tmp27, description: tmp28, actions: tmp23, illustration: tmp10, onDismiss: tmp9 };
      const tmp34 = jsx(PromoSheet.PromoSheet, { title: tmp27, description: tmp28, actions: tmp23, illustration: tmp10, onDismiss: tmp9 });
      cResult[9] = tmp10;
      cResult[10] = tmp34;
      let tmp32 = tmp34;
    } else {
      tmp32 = cResult[10];
    }
    return tmp32;
  }
  const tmpResult = initialize;
}) : (() => {
  const items = [AccessibilityStore];
  if (obj.useStateFromStores(items, () => useReducedMotion.useReducedMotion)) {
    let obj2 = { source: null, style: null };
    const obj3 = { uri: _modDef15777 };
    obj2.source = obj3;
    const size = { width: v150, height: v150 };
    obj2.style = size;
    let tmp3Result = <Image source={null} style={null} />;
    let tmp8 = importDefault;
    let tmp9 = jsx;
  } else {
    if (tmpResult.isAndroid()) {
      const obj4 = { url: _modDef15778, style: null };
      const size1 = { width: v150, height: v150 };
      obj4.style = size1;
      tmp3Result = jsx(APNGDecorationNativeComponentDefault, { url: _modDef15778, style: null });
      tmp8 = importDefault;
      tmp9 = jsx;
      const tmp4Result = APNGDecorationNativeComponentDefault;
    } else {
      const obj5 = { source: null, resizeMode: "contain", style: null };
      const obj6 = { uri: _modDef15778 };
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
  obj7.icon = tmp9(WindowLaunchIcon.WindowLaunchIcon, { size: "sm", color: tmp8(587).colors.WHITE });
  obj7.onPress = function onPress() {
    ActionSheetActionCreatorsDefault.hideActionSheet();
    const obj2 = LinkingDefault;
    obj2.openURL(HelpdeskUtilsDefault.getArticleURL(constants.IN_GAME_FEATURES));
  };
  const obj8 = { size: "sm", color: tmp8(587).colors.WHITE };
  const obj9 = { title: null, description: null, actions: null, illustration: null, onDismiss: null };
  const intl2 = util.intl;
  obj9.title = intl2.string(tmp8(3297).ublzTG);
  const intl3 = util.intl;
  obj9.description = intl3.string(tmp8(3297).JgM2xu);
  obj9.actions = tmp9(components_Button_Button.Button, obj7);
  obj9.illustration = tmp3Result;
  obj9.onDismiss = function onDismiss() {
    ActionSheetActionCreatorsDefault.hideActionSheet();
  };
  return tmp9(PromoSheet.PromoSheet, obj9);
});