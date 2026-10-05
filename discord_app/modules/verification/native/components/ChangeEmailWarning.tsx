// discord_app/modules/verification/native/components/ChangeEmailWarning.tsx
import nativeDefault from "../../../../../discord_common/js/packages/tokens/native.tsx";
import Constants from "../../../../Constants.tsx";
import ConstantsIOS from "../../../../ConstantsIOS.tsx";
import AnalyticsUtilsDefault from "../../../../utils/AnalyticsUtils.tsx";
import VerificationConstants from "../../VerificationConstants.tsx";
import react from "../../../../../_runtime/00019_react.js";
import react_native from "../../../../../_runtime/00017_react-native.js";
import UserStore from "../../../../stores/UserStore.tsx";
import Fragment from "../../../../../_runtime/react/00021_Fragment.js";
import createStyles_mod from "../../../../design/components/Styles/native/createStyles.tsx";
import ReactCompilerGating from "../../../react_compiler/ReactCompilerGating.tsx";
import size from "../../../../../_runtime/metro/00002__.js";

let changeEmailReason, navigation;

let c10;
let c9;
let closure_4;
let hasOwnProperty;
let obj2;
let obj3;
let obj4;
let obj5;
({ View: closure_4, ScrollView: hasOwnProperty } = react_native);
const hcArticle = VerificationConstants.COMMON_SCAMS_EDUCATION_HC_ARTICLE;
const AnalyticEvents = Constants.AnalyticEvents;
({ jsx: c9, jsxs: c10 } = Fragment);
let createStyles = createStyles_mod;
let obj = { container: obj2, title: obj3, body: obj4, buttonContainer: obj5 };
obj2 = { flex: 1, padding: nativeDefault.space.PX_16, alignItems: "center", justifyContent: "center" };
createStyles = createStyles.createStyles;
obj3 = { marginTop: nativeDefault.space.PX_16 };
obj4 = { marginTop: nativeDefault.space.PX_8, textAlign: "center" };
obj5 = { flexDirection: "row", gap: nativeDefault.space.PX_8, marginTop: nativeDefault.space.PX_16 };
let closure_11 = createStyles(obj);
const tmp5 = ReactCompilerGating.isReactCompilerEnabled()
  ? (changeEmailReason) => {
      let currentUser;
      let intl5;
      let items1;
      let items2;
      let items3;
      let obj8;
      let tmp6;
      let tmp7;
      let obj = changeEmailReason(576);
      const cResult = obj.c(26);
      changeEmailReason = changeEmailReason.changeEmailReason;
      const tmp4 = closure_11();
      let obj2 = changeEmailReason(1490);
      navigation = obj2.useNavigation();
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
        let tmp11;
        if (cResult[3] === navigation) {
          tmp11 = cResult[4];
        }
        if (null == tmp10) {
          return null;
        } else {
          let tmp13;
          let tmp16;
          let tmp18;
          let tmp21;
          let tmp24;
          const _Symbol6 = Symbol;
          const container = tmp4.container;
          if (cResult[5] === Symbol.for("react.memo_cache_sentinel")) {
            const tmp15 = closure_9(changeEmailReason(6078).TrafficConeSpotIllustration, {});
            cResult[5] = tmp15;
            tmp13 = tmp15;
          } else {
            tmp13 = cResult[5];
          }
          const _Symbol = Symbol;
          const title = tmp4.title;
          if (cResult[6] === Symbol.for("react.memo_cache_sentinel")) {
            const intl = tmp(1126).intl;
            const stringResult = intl.string(changeEmailReason(1126).t.hhR7gX);
            cResult[6] = stringResult;
            tmp16 = stringResult;
          } else {
            tmp16 = cResult[6];
          }
          if (cResult[7] !== tmp4.title) {
            const obj3 = {
              style: title,
              accessibilityRole: "header",
              variant: "heading-xl/extrabold",
              color: "mobile-text-heading-primary",
              children: tmp16,
            };
            const tmp20 = closure_9(changeEmailReason(4886).Text, obj3);
            cResult[7] = tmp4.title;
            cResult[8] = tmp20;
            tmp18 = tmp20;
          } else {
            tmp18 = cResult[8];
          }
          const _Symbol2 = Symbol;
          const body = tmp4.body;
          if (cResult[9] === Symbol.for("react.memo_cache_sentinel")) {
            const intl2 = tmp(1126).intl;
            const obj4 = { hcArticle };
            const formatResult = intl2.format(changeEmailReason(1126).t.rqWXUf, obj4);
            cResult[9] = formatResult;
            tmp21 = formatResult;
          } else {
            tmp21 = cResult[9];
          }
          const _Symbol3 = Symbol;
          if (cResult[10] === Symbol.for("react.memo_cache_sentinel")) {
            const intl3 = tmp(1126).intl;
            const stringResult1 = intl3.string(changeEmailReason(1126).t["3LW10C"]);
            cResult[10] = stringResult1;
            tmp24 = stringResult1;
          } else {
            tmp24 = cResult[10];
          }
          if (cResult[11] === tmp4.body) {
            let tmp26;
            let tmp29;
            let tmp31;
            let tmp34;
            if (cResult[12] === tmp21) {
              tmp26 = cResult[13];
            }
            const _Symbol4 = Symbol;
            const buttonContainer = tmp4.buttonContainer;
            if (cResult[14] === Symbol.for("react.memo_cache_sentinel")) {
              const intl4 = tmp(1126).intl;
              const stringResult2 = intl4.string(changeEmailReason(1126).t.rwTBFs);
              cResult[14] = stringResult2;
              tmp29 = stringResult2;
            } else {
              tmp29 = cResult[14];
            }
            if (cResult[15] !== tmp11) {
              const obj5 = { size: "md", variant: "tertiary", text: tmp29, onPress: tmp11, shrink: true };
              const tmp33 = closure_9(changeEmailReason(5594).Button, obj5);
              cResult[15] = tmp11;
              cResult[16] = tmp33;
              tmp31 = tmp33;
            } else {
              tmp31 = cResult[16];
            }
            const _Symbol5 = Symbol;
            if (cResult[17] === Symbol.for("react.memo_cache_sentinel")) {
              const obj6 = {
                size: "md",
                variant: "primary",
                text: intl5.string(changeEmailReason(1126).t["ETE/oC"]),
                onPress() {
                  const obj = navigation(dependencyMap[18]);
                  return obj.close();
                },
                shrink: true,
              };
              const Button = tmp(5594).Button;
              intl5 = tmp(1126).intl;
              const tmp36 = closure_9(Button, obj6);
              cResult[17] = tmp36;
              tmp34 = tmp36;
            } else {
              tmp34 = cResult[17];
            }
            if (cResult[18] === tmp4.buttonContainer) {
              let tmp37;
              if (cResult[19] === tmp31) {
                tmp37 = cResult[20];
              }
              if (cResult[21] === tmp4.container) {
                if (cResult[22] === tmp26) {
                  if (cResult[23] === tmp37) {
                    let tmp41;
                    if (cResult[24] === tmp18) {
                      tmp41 = cResult[25];
                    }
                    return tmp41;
                  }
                }
              }
              const obj7 = {
                keyboardShouldPersistTaps: "handled",
                alwaysBounceVertical: false,
                children: closure_10(closure_4, obj8),
              };
              obj8 = { style: container, children: items1 };
              items1 = [tmp13, tmp18, tmp26, tmp37];
              const tmp46 = closure_9(closure_5, obj7);
              cResult[21] = tmp4.container;
              cResult[22] = tmp26;
              cResult[23] = tmp37;
              cResult[24] = tmp18;
              cResult[25] = tmp46;
              tmp41 = tmp46;
            }
            const obj9 = { style: buttonContainer, children: items2 };
            items2 = [tmp31, tmp34];
            const tmp40 = closure_10(closure_4, obj9);
            cResult[18] = tmp4.buttonContainer;
            cResult[19] = tmp31;
            cResult[20] = tmp40;
            tmp37 = tmp40;
          }
          const obj10 = {
            style: body,
            accessibilityRole: "header",
            variant: "text-md/normal",
            color: "mobile-text-heading-primary",
            children: items3,
          };
          items3 = [tmp21, "\n\n", tmp24];
          const tmp28 = closure_10(changeEmailReason(4886).Text, obj10);
          cResult[11] = tmp4.body;
          cResult[12] = tmp21;
          cResult[13] = tmp28;
          tmp26 = tmp28;
        }
      }
      const fn2 = function x() {
        const obj = AnalyticsUtilsDefault;
        const obj2 = { change_email_reason_enum: changeEmailReason };
        obj.track(AnalyticEvents.USER_ACCOUNT_EMAIL_CHANGE_WARNING_CONTINUE, obj2);
        navigation.push(ConstantsIOS.VerificationModalScenes.ENTER_EMAIL);
      };
      cResult[2] = changeEmailReason;
      cResult[3] = navigation;
      cResult[4] = fn2;
      tmp11 = fn2;
    }
  : (changeEmailReason) => {
      let currentUser;
      let intl;
      let intl4;
      let intl5;
      let items2;
      let items3;
      let items4;
      let obj4;
      changeEmailReason = changeEmailReason.changeEmailReason;
      const tmp = closure_11();
      let obj = changeEmailReason(1490);
      navigation = obj.useNavigation();
      let obj2 = changeEmailReason(504);
      const items = [UserStore];
      const items1 = [navigation, changeEmailReason];
      const stateFromStores = obj2.useStateFromStores(items, () => currentUser.getCurrentUser());
      let tmp7 = null;
      if (null != stateFromStores) {
        const obj3 = {
          keyboardShouldPersistTaps: "handled",
          alwaysBounceVertical: false,
          children: closure_10(closure_4, obj4),
        };
        obj4 = { style: tmp.container, children: items2 };
        items2 = [closure_9(changeEmailReason(6078).TrafficConeSpotIllustration, {}), , ,];
        const obj5 = {
          style: tmp.title,
          accessibilityRole: "header",
          variant: "heading-xl/extrabold",
          color: "mobile-text-heading-primary",
          children: intl.string(changeEmailReason(1126).t.hhR7gX),
        };
        const Text = tmp2(4886).Text;
        intl = tmp2(1126).intl;
        items2[1] = closure_9(Text, obj5);
        const obj6 = {
          style: tmp.body,
          accessibilityRole: "header",
          variant: "text-md/normal",
          color: "mobile-text-heading-primary",
          children: items3,
        };
        const Text2 = tmp2(4886).Text;
        const intl2 = tmp2(1126).intl;
        const obj7 = { hcArticle };
        items3 = [intl2.format(changeEmailReason(1126).t.rqWXUf, obj7), "\n\n"];
        const intl3 = tmp2(1126).intl;
        items3[2] = intl3.string(changeEmailReason(1126).t["3LW10C"]);
        items2[2] = closure_10(Text2, obj6);
        const obj8 = { style: tmp.buttonContainer, children: items4 };
        const obj9 = {
          size: "md",
          variant: "tertiary",
          text: intl4.string(changeEmailReason(1126).t.rwTBFs),
          onPress: tmp6,
          shrink: true,
        };
        const Button = tmp2(5594).Button;
        intl4 = tmp2(1126).intl;
        items4 = [closure_9(Button, obj9)];
        const obj10 = {
          size: "md",
          variant: "primary",
          text: intl5.string(changeEmailReason(1126).t["ETE/oC"]),
          onPress() {
            const obj = navigation(dependencyMap[18]);
            return obj.close();
          },
          shrink: true,
        };
        const Button2 = tmp2(5594).Button;
        intl5 = tmp2(1126).intl;
        items4[1] = closure_9(Button2, obj10);
        items2[3] = closure_10(closure_4, obj8);
        tmp7 = closure_9(closure_5, obj3);
      }
      return tmp7;
    };
const result = size.fileFinishedImporting("modules/verification/native/components/ChangeEmailWarning.tsx");

export default tmp5;
