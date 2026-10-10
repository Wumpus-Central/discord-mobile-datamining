// === Module 6267: ChangeEmailWarning ===

// Module 6267 (ChangeEmailWarning)
import nativeDefault from "native" /* 587 */;
import ConstantsIOS from "ConstantsIOS" /* 1105 */;
import AnalyticsUtilsDefault from "AnalyticsUtils" /* 1265 */;
import noop from "module_19" /* 19 */;
import UserStore from "UserStore" /* 1390 */;

require = fn;
get_ActivityIndicator = fn(17);
({ View: closure_4, ScrollView: hasOwnProperty } = get_ActivityIndicator);
const hcArticle = fn(6260).COMMON_SCAMS_EDUCATION_HC_ARTICLE;
const AnalyticEvents = fn(1085).AnalyticEvents;
const jsxProd = fn(21);
({ jsx: closure_9, jsxs: c10 } = jsxProd);
const createStyles = fn(5092);
let obj2 = { container: { flex: 1, padding: nativeDefault.space.PX_16, alignItems: "center", justifyContent: "center" }, title: null, body: null, buttonContainer: null };
let obj3 = { flex: 1, padding: nativeDefault.space.PX_16, alignItems: "center", justifyContent: "center" };
obj2.title = { marginTop: nativeDefault.space.PX_16 };
let obj4 = { marginTop: nativeDefault.space.PX_16 };
obj2.body = { marginTop: nativeDefault.space.PX_8, textAlign: "center" };
let obj5 = { marginTop: nativeDefault.space.PX_8, textAlign: "center" };
obj2.buttonContainer = { flexDirection: "row", gap: nativeDefault.space.PX_8, marginTop: nativeDefault.space.PX_16 };
let closure_11 = createStyles.createStyles(obj2);
const ReactCompilerGating = fn(558);
let obj6 = { flexDirection: "row", gap: nativeDefault.space.PX_8, marginTop: nativeDefault.space.PX_16 };
const size = fn(2);
const result = size.fileFinishedImporting("modules/verification/native/components/ChangeEmailWarning.tsx");

export default ReactCompilerGating.isReactCompilerEnabled() ? (function ChangeEmailWarning(changeEmailReason) {
  const cResult = changeEmailReason(576).c(26);
  changeEmailReason = changeEmailReason.changeEmailReason;
  const tmp4 = closure_11();
  const obj = changeEmailReason(576);
  const navigation = changeEmailReason(1503).useNavigation();
  if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
    const items = [UserStore];
    const fn = function _() {
      return currentUser.getCurrentUser();
    };
    cResult[0] = items;
    cResult[1] = fn;
  } else {
    [tmp6, tmp7] = cResult;
  }
  changeEmailReason(504);
  if (cResult[2] === changeEmailReason) {
    if (cResult[3] === navigation) {
      let tmp11 = cResult[4];
    }
    if (null == tmp10) {
      return null;
    } else {
      const _Symbol6 = Symbol;
      if (cResult[5] === Symbol.for("react.memo_cache_sentinel")) {
        const tmp15 = closure_9(tmp(6268).TrafficConeSpotIllustration, {});
        cResult[5] = tmp15;
        let tmp13 = tmp15;
      } else {
        tmp13 = cResult[5];
      }
      const _Symbol = Symbol;
      if (cResult[6] === Symbol.for("react.memo_cache_sentinel")) {
        const intl = tmp(1126).intl;
        const stringResult = intl.string(tmp(1126).t.hhR7gX);
        cResult[6] = stringResult;
        let tmp16 = stringResult;
      } else {
        tmp16 = cResult[6];
      }
      if (cResult[7] !== tmp4.title) {
        const obj3 = { style: tmp4.title, accessibilityRole: "header", variant: "heading-xl/extrabold", color: "mobile-text-heading-primary", children: tmp16 };
        const tmp20 = closure_9(tmp(5088).Text, obj3);
        cResult[7] = tmp4.title;
        cResult[8] = tmp20;
        let tmp18 = tmp20;
      } else {
        tmp18 = cResult[8];
      }
      const _Symbol2 = Symbol;
      if (cResult[9] === Symbol.for("react.memo_cache_sentinel")) {
        const intl2 = tmp(1126).intl;
        const obj4 = { hcArticle };
        const formatResult = intl2.format(tmp(1126).t.rqWXUf, obj4);
        cResult[9] = formatResult;
        let tmp21 = formatResult;
      } else {
        tmp21 = cResult[9];
      }
      const _Symbol3 = Symbol;
      if (cResult[10] === Symbol.for("react.memo_cache_sentinel")) {
        const intl3 = tmp(1126).intl;
        const stringResult1 = intl3.string(tmp(1126).t["3LW10C"]);
        cResult[10] = stringResult1;
        let tmp24 = stringResult1;
      } else {
        tmp24 = cResult[10];
      }
      if (cResult[11] === tmp4.body) {
        if (cResult[12] === tmp21) {
          let tmp26 = cResult[13];
        }
        const _Symbol4 = Symbol;
        if (cResult[14] === Symbol.for("react.memo_cache_sentinel")) {
          const intl4 = tmp(1126).intl;
          const stringResult2 = intl4.string(tmp(1126).t.rwTBFs);
          cResult[14] = stringResult2;
          let tmp29 = stringResult2;
        } else {
          tmp29 = cResult[14];
        }
        if (cResult[15] !== tmp11) {
          const obj5 = { size: "md", variant: "tertiary", text: tmp29, onPress: tmp11, shrink: true };
          const tmp33 = closure_9(tmp(5379).Button, obj5);
          cResult[15] = tmp11;
          cResult[16] = tmp33;
          let tmp31 = tmp33;
        } else {
          tmp31 = cResult[16];
        }
        const _Symbol5 = Symbol;
        if (cResult[17] === Symbol.for("react.memo_cache_sentinel")) {
          const obj6 = { size: "md", variant: "primary", text: null, onPress: null, shrink: true };
          const intl5 = tmp(1126).intl;
          obj6.text = intl5.string(tmp(1126).t["ETE/oC"]);
          obj6.onPress = function onPress() {
            return navigation(dependencyMap[18]).close();
          };
          const tmp36 = closure_9(tmp(5379).Button, obj6);
          cResult[17] = tmp36;
          let tmp34 = tmp36;
        } else {
          tmp34 = cResult[17];
        }
        if (cResult[18] === tmp4.buttonContainer) {
          if (cResult[19] === tmp31) {
            let tmp37 = cResult[20];
          }
          if (cResult[21] === tmp4.container) {
            if (cResult[22] === tmp26) {
              if (cResult[23] === tmp37) {
                if (cResult[24] === tmp18) {
                  let tmp41 = cResult[25];
                }
                return tmp41;
              }
            }
          }
          const obj7 = { keyboardShouldPersistTaps: "handled", alwaysBounceVertical: false, children: null };
          const obj8 = { style: tmp4.container, children: null };
          const items1 = [tmp13, tmp18, tmp26, tmp37];
          obj8.children = items1;
          obj7.children = closure_10(closure_4, obj8);
          const tmp46 = closure_9(closure_5, obj7);
          cResult[21] = tmp4.container;
          cResult[22] = tmp26;
          cResult[23] = tmp37;
          cResult[24] = tmp18;
          cResult[25] = tmp46;
          tmp41 = tmp46;
        }
        const obj9 = { style: tmp4.buttonContainer, children: null };
        const items2 = [tmp31, tmp34];
        obj9.children = items2;
        const tmp40 = closure_10(closure_4, obj9);
        cResult[18] = tmp4.buttonContainer;
        cResult[19] = tmp31;
        cResult[20] = tmp40;
        tmp37 = tmp40;
      }
      const obj10 = { style: tmp4.body, accessibilityRole: "header", variant: "text-md/normal", color: "mobile-text-heading-primary", children: null };
      const items3 = [tmp21, "\n\n", tmp24];
      obj10.children = items3;
      const tmp28 = closure_10(tmp(5088).Text, obj10);
      cResult[11] = tmp4.body;
      cResult[12] = tmp21;
      cResult[13] = tmp28;
      tmp26 = tmp28;
    }
  }
  const fn2 = function x() {
    AnalyticsUtilsDefault.track(AnalyticEvents.USER_ACCOUNT_EMAIL_CHANGE_WARNING_CONTINUE, { change_email_reason_enum: changeEmailReason });
    navigation.push(ConstantsIOS.VerificationModalScenes.ENTER_EMAIL);
  };
  cResult[2] = changeEmailReason;
  cResult[3] = navigation;
  cResult[4] = fn2;
  tmp11 = fn2;
  const obj2 = changeEmailReason(1503);
}) : (function ChangeEmailWarning(changeEmailReason) {
  changeEmailReason = changeEmailReason.changeEmailReason;
  const tmp = closure_11();
  const navigation = changeEmailReason(1503).useNavigation();
  const obj = changeEmailReason(1503);
  const items = [UserStore];
  const items1 = [navigation, changeEmailReason];
  const stateFromStores = changeEmailReason(504).useStateFromStores(items, () => currentUser.getCurrentUser());
  let tmp7 = null;
  if (null != stateFromStores) {
    const obj3 = { keyboardShouldPersistTaps: "handled", alwaysBounceVertical: false, children: null };
    const obj4 = { style: tmp.container, children: null };
    const items2 = [closure_9(tmp2(6268).TrafficConeSpotIllustration, {}), , , ];
    const obj5 = { style: tmp.title, accessibilityRole: "header", variant: "heading-xl/extrabold", color: "mobile-text-heading-primary", children: null };
    const intl = tmp2(1126).intl;
    obj5.children = intl.string(tmp2(1126).t.hhR7gX);
    items2[1] = closure_9(tmp2(5088).Text, obj5);
    const obj6 = { style: tmp.body, accessibilityRole: "header", variant: "text-md/normal", color: "mobile-text-heading-primary", children: null };
    const intl2 = tmp2(1126).intl;
    const obj7 = { hcArticle };
    const items3 = [intl2.format(tmp2(1126).t.rqWXUf, obj7), "\n\n", ];
    const intl3 = tmp2(1126).intl;
    items3[2] = intl3.string(tmp2(1126).t["3LW10C"]);
    obj6.children = items3;
    items2[2] = closure_10(tmp2(5088).Text, obj6);
    const obj8 = { style: tmp.buttonContainer, children: null };
    const obj9 = { size: "md", variant: "tertiary", text: null, onPress: null, shrink: true };
    const intl4 = tmp2(1126).intl;
    obj9.text = intl4.string(tmp2(1126).t.rwTBFs);
    obj9.onPress = tmp6;
    const items4 = [closure_9(tmp2(5379).Button, obj9), ];
    const obj10 = { size: "md", variant: "primary", text: null, onPress: null, shrink: true };
    const intl5 = tmp2(1126).intl;
    obj10.text = intl5.string(tmp2(1126).t["ETE/oC"]);
    obj10.onPress = function onPress() {
      return navigation(dependencyMap[18]).close();
    };
    items4[1] = closure_9(tmp2(5379).Button, obj10);
    obj8.children = items4;
    items2[3] = closure_10(closure_4, obj8);
    obj4.children = items2;
    obj3.children = closure_10(closure_4, obj4);
    tmp7 = closure_9(closure_5, obj3);
  }
  return tmp7;
});