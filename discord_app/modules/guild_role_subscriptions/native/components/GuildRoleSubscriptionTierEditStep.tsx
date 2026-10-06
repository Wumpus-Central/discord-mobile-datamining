// discord_app/modules/guild_role_subscriptions/native/components/GuildRoleSubscriptionTierEditStep.tsx
import react2 from "../../../../../_runtime/00576_react.js";
import nativeDefault from "../../../../../discord_common/js/packages/tokens/native.tsx";
import intl3 from "../../../../intl/index.native.tsx";
import useNavigation from "../../../../design/components/Navigator/native/useNavigation.native.tsx";
import useSafeAreaInsetsDefault from "../../../safe_area/useSafeAreaInsets.native.tsx";
import Text_Text from "../../../../design/components/Text/native/Text.tsx";
import components_Button_Button from "../../../../design/components/Button/native/Button.native.tsx";
import common_SafeAreaView from "../../../../components_native/common/SafeAreaView.tsx";
import FormSeparatorDefault from "FormSeparator.tsx";
import _objectWithoutProperties from "../../../../../_runtime/metro/00109__objectWithoutProperties.js";
import react from "../../../../../_runtime/00019_react.js";
import react_native from "../../../../../_runtime/00017_react-native.js";
import Fragment from "../../../../../_runtime/react/00021_Fragment.js";
import createStyles from "../../../../design/components/Styles/native/createStyles.tsx";
import ReactCompilerGating_mod from "../../../react_compiler/ReactCompilerGating.tsx";
import size from "../../../../../_runtime/metro/00002__.js";

let navigation, scrollable;

let c9;
let metroImportAll;
let metroImportDefault;
let metroRequire;
let obj2;
let closure_3 = ["scrollable"];
({ View: metroRequire, ScrollView: metroImportDefault } = react_native);
({ jsx: metroImportAll, jsxs: c9 } = Fragment);
let obj = {
  container: obj2,
  scrollContainer: { flexGrow: 1 },
  headerContainer: {
    position: "relative",
    paddingTop: 48,
    paddingBottom: 8,
    paddingHorizontal: 16,
    alignItems: "center",
  },
  title: { marginTop: 12, textAlign: "center" },
  subtitle: { marginTop: 8, textAlign: "center" },
  separator: { marginTop: 24 },
  footerContainer: { width: "100%", padding: 16 },
};
obj2 = { backgroundColor: nativeDefault.colors.BACKGROUND_BASE_LOW, height: "100%" };
let closure_10 = createStyles.createStyles(obj);
let ReactCompilerGating = ReactCompilerGating_mod;
let closure_11 = ReactCompilerGating.isReactCompilerEnabled()
  ? (arg0) => {
      let description;
      let items;
      let title;
      const obj = react2;
      const cResult = obj.c(13);
      ({ description, title } = arg0);
      const tmp4 = closure_10();
      if (cResult[0] === tmp4.title) {
        let tmp5;
        if (cResult[1] === title) {
          tmp5 = cResult[2];
        }
        if (cResult[3] === description) {
          let tmp7;
          let tmp10;
          if (cResult[4] === tmp4.subtitle) {
            tmp7 = cResult[5];
          }
          if (cResult[6] !== tmp4.separator) {
            const obj2 = { style: tmp4.separator };
            const tmp13 = metroImportAll(FormSeparatorDefault, obj2);
            cResult[6] = tmp4.separator;
            cResult[7] = tmp13;
            tmp10 = tmp13;
          } else {
            tmp10 = cResult[7];
          }
          if (cResult[8] === tmp4.headerContainer) {
            if (cResult[9] === tmp5) {
              if (cResult[10] === tmp7) {
                let tmp14;
                if (cResult[11] === tmp10) {
                  tmp14 = cResult[12];
                }
                return tmp14;
              }
            }
          }
          const obj3 = { top: true, style: tmp4.headerContainer, children: items };
          items = [tmp5, tmp7, tmp10];
          const tmp16 = React4(common_SafeAreaView.SafeAreaPaddingView, obj3);
          cResult[8] = tmp4.headerContainer;
          cResult[9] = tmp5;
          cResult[10] = tmp7;
          cResult[11] = tmp10;
          cResult[12] = tmp16;
          tmp14 = tmp16;
        }
        const obj4 = { style: tmp4.subtitle, variant: "text-sm/medium", color: "text-default", children: description };
        const tmp9 = metroImportAll(Text_Text.Text, obj4);
        cResult[3] = description;
        cResult[4] = tmp4.subtitle;
        cResult[5] = tmp9;
        tmp7 = tmp9;
      }
      const obj5 = {
        style: tmp4.title,
        accessibilityRole: "header",
        variant: "heading-xl/extrabold",
        color: "mobile-text-heading-primary",
        children: title,
      };
      const tmp6 = metroImportAll(Text_Text.Text, obj5);
      cResult[0] = tmp4.title;
      cResult[1] = title;
      cResult[2] = tmp6;
      tmp5 = tmp6;
    }
  : (arg0) => {
      let description;
      let items;
      let title;
      ({ description, title } = arg0);
      const tmp = closure_10();
      const obj = { top: true, style: tmp.headerContainer, children: items };
      const SafeAreaPaddingView = common_SafeAreaView.SafeAreaPaddingView;
      items = [, ,];
      const obj2 = {
        style: tmp.title,
        accessibilityRole: "header",
        variant: "heading-xl/extrabold",
        color: "mobile-text-heading-primary",
        children: title,
      };
      items[0] = metroImportAll(Text_Text.Text, obj2);
      const obj3 = { style: tmp.subtitle, variant: "text-sm/medium", color: "text-default", children: description };
      items[1] = metroImportAll(Text_Text.Text, obj3);
      const obj4 = { style: tmp.separator };
      items[2] = metroImportAll(FormSeparatorDefault, obj4);
      return React4(SafeAreaPaddingView, obj);
    };
ReactCompilerGating = ReactCompilerGating_mod;
let closure_12 = ReactCompilerGating.isReactCompilerEnabled()
  ? (canProceedToNextStep) => {
      let nextStep;
      let onProceed;
      let submitting;
      let tmp5;
      let tmp8;
      const obj = react2;
      const cResult = obj.c(15);
      ({ nextStep, onProceed, submitting } = canProceedToNextStep);
      canProceedToNextStep = canProceedToNextStep.canProceedToNextStep;
      const tmp4 = closure_10();
      if (cResult[0] !== nextStep) {
        let stringResult;
        if (null == nextStep) {
          const intl2 = intl3.intl;
          stringResult = intl2.string(intl3.t["4cAsqe"]);
        } else {
          const intl = intl3.intl;
          stringResult = intl.string(intl3.t["bm6P5/"]);
        }
        cResult[0] = nextStep;
        cResult[1] = stringResult;
        tmp5 = stringResult;
      } else {
        tmp5 = cResult[1];
      }
      const bottom = useSafeAreaInsetsDefault().bottom;
      if (cResult[2] !== bottom) {
        const obj2 = { paddingBottom: bottom };
        cResult[2] = bottom;
        cResult[3] = obj2;
        tmp8 = obj2;
      } else {
        tmp8 = cResult[3];
      }
      if (cResult[4] === tmp4.footerContainer) {
        let tmp9;
        if (cResult[5] === tmp8) {
          tmp9 = cResult[6];
        }
        if (cResult[7] === tmp5) {
          if (cResult[8] === onProceed) {
            if (cResult[9] === submitting) {
              let tmp11;
              if (cResult[10] === !canProceedToNextStep) {
                tmp11 = cResult[11];
              }
              if (cResult[12] === tmp9) {
                let tmp14;
                if (cResult[13] === tmp11) {
                  tmp14 = cResult[14];
                }
                return tmp14;
              }
              const obj3 = { style: tmp9, children: tmp11 };
              const tmp17 = metroImportAll(metroRequire, obj3);
              cResult[12] = tmp9;
              cResult[13] = tmp11;
              cResult[14] = tmp17;
              tmp14 = tmp17;
            }
          }
        }
        const obj4 = { loading: submitting, disabled: !canProceedToNextStep, text: tmp5, onPress: onProceed };
        const tmp13 = metroImportAll(components_Button_Button.Button, obj4);
        cResult[7] = tmp5;
        cResult[8] = onProceed;
        cResult[9] = submitting;
        cResult[10] = !canProceedToNextStep;
        cResult[11] = tmp13;
        tmp11 = tmp13;
      }
      const items = [tmp4.footerContainer, tmp8];
      cResult[4] = tmp4.footerContainer;
      cResult[5] = tmp8;
      cResult[6] = items;
      tmp9 = items;
    }
  : (arg0) => {
      let canProceedToNextStep;
      let items;
      let nextStep;
      let obj3;
      let onProceed;
      let stringResult;
      let submitting;
      let tmp5;
      ({ canProceedToNextStep, nextStep, onProceed, submitting } = arg0);
      const tmp = closure_10();
      if (null == nextStep) {
        const intl2 = intl3.intl;
        stringResult = intl2.string(intl3.t["4cAsqe"]);
        tmp5 = require;
      } else {
        const intl = intl3.intl;
        stringResult = intl.string(intl3.t["bm6P5/"]);
        tmp5 = require;
      }
      const obj = { style: items, children: metroImportAll(tmp5(5601).Button, obj3) };
      items = [tmp.footerContainer, { paddingBottom: useSafeAreaInsetsDefault().bottom }];
      ({ paddingBottom: useSafeAreaInsetsDefault().bottom });
      obj3 = { loading: submitting, disabled: !canProceedToNextStep, text: stringResult, onPress: onProceed };
      return metroImportAll(metroRequire, obj);
    };
ReactCompilerGating = ReactCompilerGating_mod;
let tmp4 = ReactCompilerGating.isReactCompilerEnabled()
  ? (scrollable) => {
      let items1;
      let items2;
      let tmp4;
      let tmp5;
      const obj = react2;
      const cResult = obj.c(32);
      if (cResult[0] !== scrollable) {
        scrollable = scrollable.scrollable;
        const tmp8 = _objectWithoutProperties(scrollable, closure_3);
        cResult[0] = scrollable;
        cResult[1] = tmp8;
        cResult[2] = scrollable;
        tmp5 = scrollable;
        tmp4 = tmp8;
      } else {
        tmp4 = cResult[1];
        tmp5 = cResult[2];
      }
      const tmp9 = closure_10();
      const tmpResult = useNavigation;
      navigation = tmpResult.useNavigation();
      const nextStep = tmp4.nextStep;
      const onProceed = tmp4.onProceed;
      if (cResult[3] === navigation) {
        if (cResult[4] === nextStep) {
          let tmp11;
          let tmp26;
          if (cResult[5] === onProceed) {
            tmp11 = cResult[6];
          }
          if (false !== tmp5) {
            let tmp30;
            let tmp37;
            if (cResult[7] !== tmp4) {
              const obj2 = {};
              const merged = Object.assign(tmp4);
              const tmp36 = metroImportAll(closure_11, obj2);
              cResult[7] = tmp4;
              cResult[8] = tmp36;
              tmp30 = tmp36;
            } else {
              tmp30 = cResult[8];
            }
            if (cResult[9] !== tmp9.scrollContainer) {
              const items = [tmp9.scrollContainer];
              cResult[9] = tmp9.scrollContainer;
              cResult[10] = items;
              tmp37 = items;
            } else {
              tmp37 = cResult[10];
            }
            if (cResult[11] === tmp4.children) {
              let tmp38;
              if (cResult[12] === tmp37) {
                tmp38 = cResult[13];
              }
              if (cResult[14] === tmp11) {
                let tmp42;
                if (cResult[15] === tmp4) {
                  tmp42 = cResult[16];
                }
                if (cResult[17] === tmp9.container) {
                  if (cResult[18] === tmp30) {
                    if (cResult[19] === tmp38) {
                      let tmp49;
                      if (cResult[20] === tmp42) {
                        tmp49 = cResult[21];
                      }
                      tmp26 = tmp49;
                    }
                  }
                }
                const obj3 = { style: tmp9.container, children: items1 };
                items1 = [tmp30, tmp38, tmp42];
                const tmp52 = React4(metroRequire, obj3);
                cResult[17] = tmp9.container;
                cResult[18] = tmp30;
                cResult[19] = tmp38;
                cResult[20] = tmp42;
                cResult[21] = tmp52;
                tmp49 = tmp52;
              }
              const obj4 = { onProceed: tmp11 };
              const merged1 = Object.assign(tmp4);
              const tmp48 = metroImportAll(closure_12, obj4);
              cResult[14] = tmp11;
              cResult[15] = tmp4;
              cResult[16] = tmp48;
              tmp42 = tmp48;
            }
            const obj5 = {
              keyboardShouldPersistTaps: "handled",
              showsVerticalScrollIndicator: false,
              alwaysBounceVertical: false,
              contentContainerStyle: tmp37,
              children: tmp4.children,
            };
            const tmp41 = metroImportAll(metroImportDefault, obj5);
            cResult[11] = tmp4.children;
            cResult[12] = tmp37;
            cResult[13] = tmp41;
            tmp38 = tmp41;
          } else {
            let tmp12;
            if (cResult[22] !== tmp4) {
              const obj6 = {};
              const merged2 = Object.assign(tmp4);
              const tmp18 = metroImportAll(closure_11, obj6);
              cResult[22] = tmp4;
              cResult[23] = tmp18;
              tmp12 = tmp18;
            } else {
              tmp12 = cResult[23];
            }
            if (cResult[24] === tmp11) {
              let tmp19;
              if (cResult[25] === tmp4) {
                tmp19 = cResult[26];
              }
              if (cResult[27] === tmp4.children) {
                if (cResult[28] === tmp9.container) {
                  if (cResult[29] === tmp12) {
                    if (cResult[30] === tmp19) {
                      tmp26 = cResult[31];
                    }
                  }
                }
              }
              const obj7 = { style: tmp9.container, children: items2 };
              items2 = [tmp12, tmp4.children, tmp19];
              const tmp29 = React4(metroRequire, obj7);
              cResult[27] = tmp4.children;
              cResult[28] = tmp9.container;
              cResult[29] = tmp12;
              cResult[30] = tmp19;
              cResult[31] = tmp29;
              tmp26 = tmp29;
            }
            const obj8 = { onProceed: tmp11 };
            const merged3 = Object.assign(tmp4);
            const tmp25 = metroImportAll(closure_12, obj8);
            cResult[24] = tmp11;
            cResult[25] = tmp4;
            cResult[26] = tmp25;
            tmp19 = tmp25;
          }
          return tmp26;
        }
      }
      const fn = function v() {
        if (null != onProceed) {
          tmp();
        } else if (null != nextStep) {
          navigation.push(tmp2);
        }
      };
      cResult[3] = navigation;
      cResult[4] = nextStep;
      cResult[5] = onProceed;
      cResult[6] = fn;
      tmp11 = fn;
    }
  : (scrollable) => {
      let items1;
      let items2;
      let items3;
      let obj6;
      scrollable = scrollable.scrollable;
      const merged = Object.assign(scrollable, Object.assign({ scrollable: 0 }));
      const tmp2 = closure_10();
      const obj = useNavigation;
      navigation = obj.useNavigation();
      const nextStep = merged.nextStep;
      const onProceed = merged.onProceed;
      const items = [navigation, nextStep, onProceed];
      const callback = react.useCallback(() => {
        if (null != onProceed) {
          tmp();
        } else if (null != nextStep) {
          navigation.push(tmp2);
        }
      }, items);
      if (false !== scrollable) {
        const obj2 = { style: tmp2.container, children: items1 };
        const obj3 = {};
        const merged1 = Object.assign(merged);
        items1 = [metroImportAll(closure_11, obj3), ,];
        const obj4 = {
          keyboardShouldPersistTaps: "handled",
          showsVerticalScrollIndicator: false,
          alwaysBounceVertical: false,
          contentContainerStyle: items2,
          children: merged.children,
        };
        items2 = [tmp2.scrollContainer];
        items1[1] = metroImportAll(metroImportDefault, obj4);
        const obj5 = { onProceed: callback };
        const merged2 = Object.assign(merged);
        items1[2] = metroImportAll(closure_12, obj5);
        obj6 = obj2;
      } else {
        obj6 = { style: tmp2.container, children: items3 };
        const obj7 = {};
        const merged3 = Object.assign(merged);
        items3 = [metroImportAll(closure_11, obj7), merged.children];
        const obj8 = { onProceed: callback };
        const merged4 = Object.assign(merged);
        items3[2] = metroImportAll(closure_12, obj8);
      }
      return React4(metroRequire, obj6);
    };
const result = size.fileFinishedImporting(
  "modules/guild_role_subscriptions/native/components/GuildRoleSubscriptionTierEditStep.tsx",
);

export default tmp4;
