// discord_app/modules/safety_hub/native/ClassificationDetail.tsx
import react2 from "../../../../_runtime/00576_react.js";
import nativeDefault from "../../../../discord_common/js/packages/tokens/native.tsx";
import Constants from "../../../Constants.tsx";
import intl4 from "../../../intl/index.native.tsx";
import AnalyticsUtilsDefault from "../../../utils/AnalyticsUtils.tsx";
import _modDef3137 from "../../age_assurance/ManualReview.messages.js";
import LinkingDefault from "../../../lib/native/Linking.tsx";
import Text_Text from "../../../design/components/Text/native/Text.tsx";
import MonitoringAgentDefault from "../../monitoring/MonitoringAgent.tsx";
import MetricEvents from "../../../../discord_common/js/shared/shared-constants/MetricEvents.tsx";
import components_Button_Button from "../../../design/components/Button/native/Button.native.tsx";
import TableRow2 from "../../../design/components/TableRow/native/TableRow.native.tsx";
import SafetyHubModels from "../SafetyHubModels.tsx";
import TouchableHitBoxDefault from "../../../design/void/TouchableHitBox/native/TouchableHitBox.tsx";
import AutomatedUnderageAppealModalActionCreatorsDefault from "../AutomatedUnderageAppealModalActionCreators.native.tsx";
import AppealIngestionModalActionCreatorsDefault from "AppealIngestionModalActionCreators.tsx";
import react from "../../../../_runtime/00019_react.js";
import react_native from "../../../../_runtime/00017_react-native.js";
import LocaleStore from "../../user_settings/LocaleStore.tsx";
import SafetyHubStore from "../SafetyHubStore.tsx";
import SafetyHubConstants from "../SafetyHubConstants.tsx";
import Fragment from "../../../../_runtime/react/00021_Fragment.js";
import createStyles_mod from "../../../design/components/Styles/native/createStyles.tsx";
import ReactCompilerGating_mod from "../../react_compiler/ReactCompilerGating.tsx";
import size_mod from "../../../../_runtime/metro/00002__.js";

const require = globalThis.__r;
let _require, classificationId, closure_8, guildMetadata;

let c10;
let c9;
let closure_14;
let closure_15;
let closure_4;
let hasOwnProperty;
let map1;
let metroRequire;
let obj10;
let obj11;
let obj12;
let obj2;
let obj3;
let obj4;
let obj5;
let obj6;
let obj7;
let obj8;
let obj9;
let size;
let unpackModuleId;
function ClassificationPolicyCard(policyExplainerLink) {
  let ShieldIcon;
  let Text;
  let classificationTypeText2;
  let intl;
  let items1;
  let items2;
  let items3;
  let obj10;
  let obj12;
  let obj14;
  let obj15;
  let obj7;
  let tmp11;
  let tmp9;
  if (closure_25) {
    let tmp17;
    let tmp18;
    let tmp20;
    let tmp24;
    let tmp28;
    let tmp30;
    const obj8 = policyExplainerLink(576);
    const cResult = obj8.c(19);
    ({ classificationTypeText: classificationTypeText2, policyExplainerLink } = policyExplainerLink);
    const tmp16 = closure_16();
    if (cResult[0] !== policyExplainerLink) {
      const fn = function t() {
        const obj = LinkingDefault;
        obj.openURL(policyExplainerLink);
      };
      cResult[0] = policyExplainerLink;
      cResult[1] = fn;
      tmp17 = fn;
    } else {
      tmp17 = cResult[1];
    }
    if (cResult[2] !== tmp16.classificationPolicyCard) {
      const items = [tmp16.classificationPolicyCard];
      cResult[2] = tmp16.classificationPolicyCard;
      cResult[3] = items;
      tmp18 = items;
    } else {
      tmp18 = cResult[3];
    }
    const _Symbol = Symbol;
    if (cResult[4] === Symbol.for("react.memo_cache_sentinel")) {
      const obj2 = { size: "sm", color: nativeDefault.colors.TEXT_LINK };
      const ShieldIcon2 = tmp12(8952).ShieldIcon;
      const tmp23 = closure_13(ShieldIcon2, obj2);
      cResult[4] = tmp23;
      tmp20 = tmp23;
    } else {
      tmp20 = cResult[4];
    }
    if (cResult[5] !== tmp16.classificationPolicyCardIcon) {
      const obj3 = { style: tmp16.classificationPolicyCardIcon, children: tmp20 };
      const tmp27 = closure_13(closure_4, obj3);
      cResult[5] = tmp16.classificationPolicyCardIcon;
      cResult[6] = tmp27;
      tmp24 = tmp27;
    } else {
      tmp24 = cResult[6];
    }
    const classificationPolicyCardContent = tmp16.classificationPolicyCardContent;
    if (cResult[7] !== classificationTypeText2) {
      const intl2 = tmp12(1126).intl;
      const obj4 = { classificationDescription: classificationTypeText2 };
      const formatResult = intl2.format(policyExplainerLink(1126).t.zxUdpj, obj4);
      cResult[7] = classificationTypeText2;
      cResult[8] = formatResult;
      tmp28 = formatResult;
    } else {
      tmp28 = cResult[8];
    }
    if (cResult[9] !== tmp28) {
      const obj5 = { variant: "heading-md/semibold", color: "mobile-text-heading-primary", children: tmp28 };
      const tmp32 = closure_13(policyExplainerLink(4892).Text, obj5);
      cResult[9] = tmp28;
      cResult[10] = tmp32;
      tmp30 = tmp32;
    } else {
      tmp30 = cResult[10];
    }
    if (cResult[11] === tmp16.classificationPolicyCardContent) {
      let tmp33;
      if (cResult[12] === tmp30) {
        tmp33 = cResult[13];
      }
      if (cResult[14] === tmp17) {
        if (cResult[15] === tmp18) {
          if (cResult[16] === tmp24) {
            let tmp37;
            if (cResult[17] === tmp33) {
              tmp37 = cResult[18];
            }
            tmp11 = tmp37;
          }
        }
      }
      const obj6 = { children: closure_14(TouchableHitBoxDefault, obj7) };
      obj7 = { onPress: tmp17, style: tmp18, children: items1 };
      items1 = [tmp24, tmp33];
      const tmp42 = closure_13(closure_4, obj6);
      cResult[14] = tmp17;
      cResult[15] = tmp18;
      cResult[16] = tmp24;
      cResult[17] = tmp33;
      cResult[18] = tmp42;
      tmp37 = tmp42;
    }
    const obj9 = { style: classificationPolicyCardContent, children: tmp30 };
    const tmp36 = closure_13(closure_4, obj9);
    cResult[11] = tmp16.classificationPolicyCardContent;
    cResult[12] = tmp30;
    cResult[13] = tmp36;
    tmp33 = tmp36;
  } else {
    policyExplainerLink = policyExplainerLink.policyExplainerLink;
    const classificationTypeText = policyExplainerLink.classificationTypeText;
    const tmp3 = closure_16();
    let obj = { children: closure_14(tmp9, obj10) };
    obj10 = {
      onPress() {
        const obj = LinkingDefault;
        obj.openURL(policyExplainerLink);
      },
      style: items2,
      children: items3,
    };
    items2 = [tmp3.classificationPolicyCard];
    const obj11 = { style: tmp3.classificationPolicyCardIcon, children: closure_13(ShieldIcon, obj12) };
    obj12 = { size: "sm", color: nativeDefault.colors.TEXT_LINK };
    tmp9 = TouchableHitBoxDefault;
    ShieldIcon = policyExplainerLink(8952).ShieldIcon;
    items3 = [closure_13(closure_4, obj11)];
    const obj13 = { style: tmp3.classificationPolicyCardContent, children: closure_13(Text, obj14) };
    obj14 = {
      variant: "heading-md/semibold",
      color: "mobile-text-heading-primary",
      children: intl.format(policyExplainerLink(1126).t.zxUdpj, obj15),
    };
    Text = policyExplainerLink(4892).Text;
    intl = policyExplainerLink(1126).intl;
    obj15 = { classificationDescription: classificationTypeText };
    items3[1] = closure_13(closure_4, obj13);
    tmp11 = closure_13(closure_4, obj);
  }
  return tmp11;
}
({ View: closure_4, ActivityIndicator: hasOwnProperty, ScrollView: metroRequire } = react_native);
({
  SafetyHubAnalyticsActionSource: c9,
  SafetyHubAnalyticsActions: c10,
  SafetyHubLinks: unpackModuleId,
} = SafetyHubConstants);
const AnalyticEvents = Constants.AnalyticEvents;
({ jsx: map1, jsxs: closure_14, Fragment: closure_15 } = Fragment);
let createStyles = createStyles_mod;
let obj = {
  root: obj2,
  container: obj3,
  header: obj4,
  headerText: { textAlign: "center", maxWidth: 260 },
  sectionContainer: obj5,
  actionsTaken: obj6,
  classificationDetailContainer: obj7,
  letUsKnowContainer: { display: "flex", alignItems: "center" },
  confirmMinimumAgeSection: obj8,
  guidelinesFooter: obj9,
  classificationPolicyCard: obj10,
  classificationPolicyCardIcon: size,
  classificationPolicyCardContent: { flex: 1 },
  classificationActionDescription: obj11,
  bulletText: { flex: 1 },
  redirectButtonWrapper: obj12,
};
obj2 = { backgroundColor: nativeDefault.colors.BACKGROUND_BASE_LOWER };
createStyles = createStyles.createStyles;
obj3 = {
  display: "flex",
  flexDirection: "column",
  height: "100%",
  paddingTop: nativeDefault.space.PX_16,
  paddingHorizontal: nativeDefault.space.PX_16,
  gap: nativeDefault.space.PX_32,
};
obj4 = {
  display: "flex",
  textAlign: "center",
  alignItems: "center",
  flexDirection: "column",
  gap: nativeDefault.space.PX_8,
  marginBottom: nativeDefault.space.PX_8,
};
obj5 = { display: "flex", gap: nativeDefault.space.PX_8 };
obj6 = {
  display: "flex",
  paddingLeft: nativeDefault.space.PX_4,
  flexDirection: "column",
  gap: nativeDefault.space.PX_8,
};
obj7 = { display: "flex", flexDirection: "column", gap: nativeDefault.space.PX_32 };
obj8 = { display: "flex", gap: nativeDefault.space.PX_12 };
obj9 = { marginTop: nativeDefault.space.PX_12 };
obj10 = {
  display: "flex",
  flexDirection: "row",
  alignItems: "center",
  justifyContent: "space-between",
  gap: nativeDefault.space.PX_12,
  padding: nativeDefault.space.PX_12,
  marginTop: nativeDefault.space.PX_4,
  flexShrink: 1,
  backgroundColor: nativeDefault.colors.BACKGROUND_BASE_LOWEST,
};
size = {
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  backgroundColor: nativeDefault.colors.BACKGROUND_MOD_STRONG,
  width: 32,
  height: 32,
  borderRadius: nativeDefault.radii.xxl,
};
obj11 = { display: "flex", flexDirection: "row", gap: nativeDefault.space.PX_8 };
obj12 = { width: 300, alignSelf: "center", marginTop: nativeDefault.space.PX_32 };
let closure_16 = createStyles(obj);
let ReactCompilerGating = ReactCompilerGating_mod;
let closure_17 = ReactCompilerGating.isReactCompilerEnabled()
  ? (arg0) => {
      let classificationTypeText;
      let formatResult;
      let name;
      let name1;
      let tmp6;
      let obj = react2;
      const cResult = obj.c(10);
      ({ classificationTypeText, guildMetadata } = arg0);
      const tmp4 = closure_16();
      if (cResult[0] === classificationTypeText) {
        let tmp5;
        if (cResult[1] === guildMetadata) {
          tmp5 = cResult[2];
        }
        if (cResult[4] === tmp5) {
          let tmp18;
          if (cResult[5] === tmp4.headerText) {
            tmp18 = cResult[6];
          }
          if (cResult[7] === tmp4.header) {
            let tmp21;
            if (cResult[8] === tmp18) {
              tmp21 = cResult[9];
            }
            return tmp21;
          }
          const obj2 = { style: tmp4.header, children: tmp18 };
          const tmp24 = map1(React3, obj2);
          cResult[7] = tmp4.header;
          cResult[8] = tmp18;
          cResult[9] = tmp24;
          tmp21 = tmp24;
        }
        const obj3 = {
          variant: "text-lg/normal",
          style: tmp4.headerText,
          color: "mobile-text-heading-primary",
          children: tmp5,
        };
        const tmp20 = map1(Text_Text.Text, obj3);
        cResult[4] = tmp5;
        cResult[5] = tmp4.headerText;
        cResult[6] = tmp20;
        tmp18 = tmp20;
      }
      if (cResult[3] === Symbol.for("react.memo_cache_sentinel")) {
        const fn = function p(children, arg1) {
          const obj = { variant: "heading-xl/bold", children };
          return closure_1_13(require("Text/Text").Text, obj, arg1);
        };
        cResult[3] = fn;
        tmp6 = fn;
      } else {
        tmp6 = cResult[3];
      }
      const obj4 = { classification_type: classificationTypeText, classificationHook: tmp6 };
      if (null != guildMetadata) {
        let format2Result;
        let member_type;
        if (guildMetadata != null) {
          member_type = guildMetadata.member_type;
        }
        if (member_type === SafetyHubModels.MemberType.OWNER) {
          const intl3 = intl4.intl;
          const format2 = intl3.format;
          const obj5 = { guildName: name };
          const X1ngSd = intl4.t.X1ngSd;
          const merged = Object.assign(obj4);
          name = undefined;
          if (guildMetadata != null) {
            name = guildMetadata.name;
          }
          format2Result = format2(X1ngSd, obj5);
        } else {
          const intl2 = intl4.intl;
          const format = intl2.format;
          const obj6 = { guildName: name1 };
          const rmpEPD = intl4.t.rmpEPD;
          const merged1 = Object.assign(obj4);
          name1 = undefined;
          if (guildMetadata != null) {
            name1 = guildMetadata.name;
          }
          format2Result = format(rmpEPD, obj6);
        }
        formatResult = format2Result;
      } else {
        const intl = intl4.intl;
        formatResult = intl.format(intl4.t["39jfOz"], obj4);
      }
      cResult[0] = classificationTypeText;
      cResult[1] = guildMetadata;
      cResult[2] = formatResult;
      tmp5 = formatResult;
    }
  : (classificationTypeText) => {
      let obj2;
      classificationTypeText = classificationTypeText.classificationTypeText;
      guildMetadata = classificationTypeText.guildMetadata;
      const tmp = closure_16();
      const items = [classificationTypeText, guildMetadata];
      let obj = { style: tmp.header, children: closure_13(classificationTypeText(4892).Text, obj2) };
      const memo = react.useMemo(() => {
        let formatResult;
        let name;
        let name1;
        let obj = {
          classification_type: classificationTypeText,
          classificationHook(children, arg1) {
            const obj = { variant: "heading-xl/bold", children };
            return closure_1_13(classificationTypeText(closure_1_2[11]).Text, obj, arg1);
          },
        };
        if (null != guildMetadata) {
          let format2Result;
          let member_type;
          if (guildMetadata != null) {
            member_type = guildMetadata.member_type;
          }
          if (member_type === SafetyHubModels.MemberType.OWNER) {
            const intl3 = intl4.intl;
            const format2 = intl3.format;
            const obj2 = { guildName: name };
            const X1ngSd = intl4.t.X1ngSd;
            const merged = Object.assign(obj);
            name = undefined;
            if (guildMetadata != null) {
              name = guildMetadata.name;
            }
            format2Result = format2(X1ngSd, obj2);
          } else {
            const intl2 = intl4.intl;
            const format = intl2.format;
            const obj3 = { guildName: name1 };
            const rmpEPD = intl4.t.rmpEPD;
            const merged1 = Object.assign(obj);
            name1 = undefined;
            if (guildMetadata != null) {
              name1 = guildMetadata.name;
            }
            format2Result = format(rmpEPD, obj3);
          }
          formatResult = format2Result;
        } else {
          const intl = intl4.intl;
          formatResult = intl.format(intl4.t["39jfOz"], obj);
        }
        return formatResult;
      }, items);
      obj2 = { variant: "text-lg/normal", style: tmp.headerText, color: "mobile-text-heading-primary", children: memo };
      return closure_13(closure_4, obj);
    };
ReactCompilerGating = ReactCompilerGating_mod;
let closure_18 = ReactCompilerGating.isReactCompilerEnabled()
  ? (arg0) => {
      let children;
      let obj3;
      let plain;
      const obj = react2;
      const cResult = obj.c(3);
      ({ children, plain } = arg0);
      if (cResult[0] === children) {
        let tmp5;
        if (cResult[1] === (undefined !== plain && plain)) {
          tmp5 = cResult[2];
        }
        return tmp5;
      }
      const Text = Text_Text.Text;
      if (undefined !== plain && plain) {
        obj3 = { variant: "text-sm/medium", color: "text-subtle", children };
        const obj2 = { variant: "text-sm/medium", color: "text-subtle", children };
      } else {
        obj3 = { variant: "eyebrow", color: "text-muted", children };
      }
      const tmp6Result = map1(Text, obj3);
      cResult[0] = children;
      cResult[1] = undefined !== plain && plain;
      cResult[2] = tmp6Result;
      tmp5 = tmp6Result;
    }
  : (arg0) => {
      let children;
      let obj;
      let plain;
      ({ children, plain } = arg0);
      if (plain === undefined) {
        plain = false;
      }
      const Text = Text_Text.Text;
      if (plain) {
        obj = { variant: "text-sm/medium", color: "text-subtle", children };
        const obj2 = { variant: "text-sm/medium", color: "text-subtle", children };
      } else {
        obj = { variant: "eyebrow", color: "text-muted", children };
      }
      return map1(Text, obj);
    };
ReactCompilerGating = ReactCompilerGating_mod;
let closure_19 = ReactCompilerGating.isReactCompilerEnabled()
  ? (arg0) => {
      let children;
      let items;
      let large;
      let tmp6;
      const obj = react2;
      const cResult = obj.c(10);
      ({ children, large } = arg0);
      const tmp4 = undefined !== large && large;
      const tmp5 = closure_16();
      let str = "text-xs/normal";
      if (tmp4) {
        str = "text-md/medium";
      }
      if (cResult[0] !== str) {
        const obj2 = { variant: str, children: [" ", "\u2022"] };
        const tmp8 = authStore2(Text_Text.Text, obj2);
        cResult[0] = str;
        cResult[1] = tmp8;
        tmp6 = tmp8;
      } else {
        tmp6 = cResult[1];
      }
      if (cResult[2] === children) {
        if (cResult[3] === tmp5.bulletText) {
          let tmp9;
          if (cResult[4] === str) {
            tmp9 = cResult[5];
          }
          if (cResult[6] === tmp5.classificationActionDescription) {
            if (cResult[7] === tmp6) {
              let tmp11;
              if (cResult[8] === tmp9) {
                tmp11 = cResult[9];
              }
              return tmp11;
            }
          }
          const obj3 = { style: tmp5.classificationActionDescription, children: items };
          items = [tmp6, tmp9];
          const tmp14 = authStore2(React3, obj3);
          cResult[6] = tmp5.classificationActionDescription;
          cResult[7] = tmp6;
          cResult[8] = tmp9;
          cResult[9] = tmp14;
          tmp11 = tmp14;
        }
      }
      const obj4 = { variant: str, style: tmp5.bulletText, children };
      const tmp10 = map1(Text_Text.Text, obj4);
      cResult[2] = children;
      cResult[3] = tmp5.bulletText;
      cResult[4] = str;
      cResult[5] = tmp10;
      tmp9 = tmp10;
    }
  : (large) => {
      let items;
      let flag = large.large;
      const children = large.children;
      if (flag === undefined) {
        flag = false;
      }
      const tmp = closure_16();
      let str = "text-xs/normal";
      if (flag) {
        str = "text-md/medium";
      }
      const obj = { style: tmp.classificationActionDescription, children: items };
      items = [authStore2(Text_Text.Text, { variant: str, children: [" ", "\u2022"] })];
      const obj2 = { variant: str, style: tmp.bulletText, children };
      items[1] = map1(Text_Text.Text, obj2);
      return authStore2(React3, obj);
    };
ReactCompilerGating = ReactCompilerGating_mod;
let closure_20 = ReactCompilerGating.isReactCompilerEnabled()
  ? (arg0) => {
      let TByIjT;
      let actions;
      let classificationExpiration;
      let format;
      let items1;
      let items2;
      let locale;
      let mapped;
      let obj6;
      let redesigned;
      let tmp4;
      let tmp5;
      let obj = redesigned(576);
      const cResult = obj.c(35);
      ({ actions, classificationExpiration, redesigned } = arg0);
      if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
        const items = [LocaleStore];
        const fn = function l() {
          return locale.locale;
        };
        cResult[0] = items;
        cResult[1] = fn;
        tmp4 = items;
        tmp5 = fn;
      } else {
        [tmp4, tmp5] = cResult;
      }
      const tmpResult = redesigned(504);
      const stateFromStores = tmpResult.useStateFromStores(tmp4, tmp5);
      const tmp8 = closure_16();
      if (cResult[2] === actions) {
        if (cResult[3] === classificationExpiration) {
          if (cResult[4] === redesigned) {
            let tmp9;
            let tmp10;
            let tmp11;
            let tmp12;
            let tmp13;
            let tmp14;
            let tmp15;
            if (cResult[5] === tmp8) {
              tmp9 = cResult[6];
              tmp10 = cResult[7];
              tmp11 = cResult[8];
              tmp12 = cResult[9];
              tmp13 = cResult[10];
              tmp14 = cResult[11];
              tmp15 = cResult[12];
            }
            const _Symbol2 = Symbol;
            if (tmp15 === Symbol.for("react.early_return_sentinel")) {
              if (cResult[21] === classificationExpiration) {
                if (cResult[22] === stateFromStores) {
                  let tmp34;
                  if (cResult[23] === redesigned) {
                    tmp34 = cResult[24];
                  }
                  if (cResult[25] === tmp9) {
                    if (cResult[26] === tmp11) {
                      if (cResult[27] === tmp12) {
                        let tmp38;
                        if (cResult[28] === tmp34) {
                          tmp38 = cResult[29];
                        }
                        if (cResult[30] === tmp10) {
                          if (cResult[31] === tmp13) {
                            if (cResult[32] === tmp14) {
                              let tmp41;
                              if (cResult[33] === tmp38) {
                                tmp41 = cResult[34];
                              }
                              tmp15 = tmp41;
                            }
                          }
                        }
                        const obj2 = { style: tmp13, children: items1 };
                        items1 = [tmp14, tmp38];
                        const tmp43 = closure_14(tmp10, obj2);
                        cResult[30] = tmp10;
                        cResult[31] = tmp13;
                        cResult[32] = tmp14;
                        cResult[33] = tmp38;
                        cResult[34] = tmp43;
                        tmp41 = tmp43;
                      }
                    }
                  }
                  const obj4 = { style: tmp11, children: items2 };
                  items2 = [tmp12, tmp34];
                  const tmp40 = closure_14(tmp9, obj4);
                  cResult[25] = tmp9;
                  cResult[26] = tmp11;
                  cResult[27] = tmp12;
                  cResult[28] = tmp34;
                  cResult[29] = tmp40;
                  tmp38 = tmp40;
                }
              }
              let tmp35 = null;
              if (null != classificationExpiration) {
                const obj5 = { large: redesigned, children: format(TByIjT, obj6) };
                const intl = redesigned(1126).intl;
                format = intl.format;
                obj6 = {
                  expirationDate: classificationExpiration.toLocaleDateString(stateFromStores, { dateStyle: "medium" }),
                };
                TByIjT = redesigned(1126).t.TByIjT;
                tmp35 = closure_13(closure_19, obj5, "expiration");
              }
              cResult[21] = classificationExpiration;
              cResult[22] = stateFromStores;
              cResult[23] = redesigned;
              cResult[24] = tmp35;
              tmp34 = tmp35;
            }
            return tmp15;
          }
        }
      }
      Symbol.for("react.early_return_sentinel");
      if (cResult[13] === Symbol.for("react.memo_cache_sentinel")) {
        class N {
          constructor(descriptions) {
            return descriptions.descriptions.length > 0;
          }
        }
        cResult[13] = N;
      } else {
        class N {
          constructor(descriptions) {
            return descriptions.descriptions.length > 0;
          }
        }
      }
      const found = actions.filter(N);
      if (0 !== found.length) {
        let tmp26;
        class N {
          constructor(descriptions) {
            return descriptions.descriptions.length > 0;
          }
        }
        const _Symbol = Symbol;
        const sectionContainer = tmp8.sectionContainer;
        if (cResult[14] === Symbol.for("react.memo_cache_sentinel")) {
          class N {
            constructor(descriptions) {
              return descriptions.descriptions.length > 0;
            }
          }
          const stringResult = obj3.string(redesigned(1126).t["O2nYk+"]);
          cResult[14] = stringResult;
          tmp26 = stringResult;
        } else {
          class N {
            constructor(descriptions) {
              return descriptions.descriptions.length > 0;
            }
          }
        }
        if (cResult[15] !== redesigned) {
          class N {
            constructor(descriptions) {
              return descriptions.descriptions.length > 0;
            }
          }
          const obj7 = { plain: redesigned, children: tmp26 };
          const tmp30 = closure_13(closure_18, obj7);
          cResult[15] = redesigned;
          cResult[16] = tmp30;
        } else {
          class N {
            constructor(descriptions) {
              return descriptions.descriptions.length > 0;
            }
          }
        }
        if (cResult[17] !== tmp8.actionsTaken) {
          class N {
            constructor(descriptions) {
              return descriptions.descriptions.length > 0;
            }
          }
          tmp32[0] = tmp8.actionsTaken;
          cResult[17] = tmp8.actionsTaken;
          cResult[18] = tmp32;
        } else {
          class N {
            constructor(descriptions) {
              return descriptions.descriptions.length > 0;
            }
          }
        }
        if (cResult[19] !== redesigned) {
          class G {
            constructor(action) {
              const obj = { action, large: redesigned };
              return map1(closure_22, obj, action.id);
            }
          }
          cResult[19] = redesigned;
          cResult[20] = G;
        } else {
          class G {
            constructor(action) {
              const obj = { action, large: redesigned };
              return map1(closure_22, obj, action.id);
            }
          }
        }
        mapped = found.map(G);
      } else {
        class G {
          constructor(action) {
            const obj = { action, large: redesigned };
            return map1(closure_22, obj, action.id);
          }
        }
      }
      cResult[2] = actions;
      cResult[3] = classificationExpiration;
      cResult[4] = redesigned;
      cResult[5] = tmp8;
      cResult[6] = tmp25;
      cResult[7] = tmp25;
      cResult[8] = tmp32;
      cResult[9] = mapped;
      cResult[10] = tmp20;
      cResult[11] = tmp19;
      cResult[12] = tmp18;
      tmp15 = tmp18;
      tmp14 = tmp19;
      tmp13 = tmp20;
      tmp12 = mapped;
      tmp11 = tmp32;
      tmp10 = tmp25;
      tmp9 = tmp25;
    }
  : (arg0) => {
      let TByIjT;
      let actions;
      let classificationExpiration;
      let format;
      let intl;
      let items1;
      let items2;
      let items3;
      let locale;
      let obj6;
      let redesigned;
      let tmp6Result;
      ({ actions, classificationExpiration, redesigned } = arg0);
      let obj = redesigned(504);
      const items = [LocaleStore];
      const stateFromStores = obj.useStateFromStores(items, () => locale.locale);
      const tmp4 = closure_16();
      const found = actions.filter((descriptions) => descriptions.descriptions.length > 0);
      if (0 !== found.length) {
        const obj2 = { style: tmp4.sectionContainer, children: items1 };
        const obj3 = { plain: redesigned, children: intl.string(redesigned(1126).t["O2nYk+"]) };
        intl = redesigned(1126).intl;
        items1 = [closure_13(closure_18, obj3)];
        const obj4 = { style: items2, children: items3 };
        items2 = [tmp4.actionsTaken];
        items3 = [
          found.map((action) => {
            const obj = { action, large: redesigned };
            return map1(closure_22, obj, action.id);
          }),
        ];
        let tmp8Result = null;
        if (null != classificationExpiration) {
          const obj5 = { large: redesigned, children: format(TByIjT, obj6) };
          const intl2 = redesigned(1126).intl;
          format = intl2.format;
          obj6 = {
            expirationDate: classificationExpiration.toLocaleDateString(stateFromStores, { dateStyle: "medium" }),
          };
          TByIjT = redesigned(1126).t.TByIjT;
          tmp8Result = closure_13(closure_19, obj5, "expiration");
        }
        items3[1] = tmp8Result;
        items1[1] = closure_14(closure_4, obj4);
        tmp6Result = closure_14(closure_4, obj2);
      } else {
        tmp6Result = null;
      }
      return tmp6Result;
    };
ReactCompilerGating = ReactCompilerGating_mod;
let closure_21 = ReactCompilerGating.isReactCompilerEnabled()
  ? () => {
      let first;
      let intl;
      let intl2;
      let items1;
      let tmp10;
      let tmp15;
      let tmp9;
      const obj = react2;
      const cResult = obj.c(9);
      const tmp4 = closure_16();
      if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
        const obj2 = { plain: true, children: intl.string(intl4.t["O2nYk+"]) };
        intl = intl4.intl;
        const tmp8 = map1(closure_18, obj2);
        cResult[0] = tmp8;
        first = tmp8;
      } else {
        first = cResult[0];
      }
      if (cResult[1] !== tmp4.actionsTaken) {
        const items = [tmp4.actionsTaken];
        cResult[1] = tmp4.actionsTaken;
        cResult[2] = items;
        tmp9 = items;
      } else {
        tmp9 = cResult[2];
      }
      if (cResult[3] === Symbol.for("react.memo_cache_sentinel")) {
        const obj3 = { large: true, children: intl2.string(_modDef3137.rn3Gto) };
        intl2 = intl4.intl;
        const tmp14 = map1(closure_19, obj3);
        cResult[3] = tmp14;
        tmp10 = tmp14;
      } else {
        tmp10 = cResult[3];
      }
      if (cResult[4] !== tmp9) {
        const obj4 = { style: tmp9, children: tmp10 };
        const tmp18 = map1(React3, obj4);
        cResult[4] = tmp9;
        cResult[5] = tmp18;
        tmp15 = tmp18;
      } else {
        tmp15 = cResult[5];
      }
      if (cResult[6] === tmp4.sectionContainer) {
        let tmp19;
        if (cResult[7] === tmp15) {
          tmp19 = cResult[8];
        }
        return tmp19;
      }
      const obj5 = { style: tmp4.sectionContainer, children: items1 };
      items1 = [first, tmp15];
      const tmp20 = authStore2(React3, obj5);
      cResult[6] = tmp4.sectionContainer;
      cResult[7] = tmp15;
      cResult[8] = tmp20;
      tmp19 = tmp20;
    }
  : () => {
      let intl;
      let intl2;
      let items;
      let items1;
      let obj4;
      const tmp = closure_16();
      const obj = { style: tmp.sectionContainer, children: items };
      const obj2 = { plain: true, children: intl.string(intl4.t["O2nYk+"]) };
      intl = intl4.intl;
      items = [map1(closure_18, obj2)];
      const obj3 = { style: items1, children: map1(closure_19, obj4) };
      items1 = [tmp.actionsTaken];
      obj4 = { large: true, children: intl2.string(_modDef3137.rn3Gto) };
      intl2 = intl4.intl;
      items[1] = map1(React3, obj3);
      return authStore2(React3, obj);
    };
ReactCompilerGating = ReactCompilerGating_mod;
let closure_22 = ReactCompilerGating.isReactCompilerEnabled()
  ? (arg0) => {
      let action;
      let large;
      let tmp3;
      let obj = large(576);
      const cResult = obj.c(7);
      ({ action, large } = arg0);
      if (cResult[0] === action.descriptions) {
        let tmp2;
        let tmp5;
        if (cResult[1] === large) {
          tmp2 = cResult[2];
        }
        if (cResult[5] !== tmp2) {
          const obj2 = { children: tmp2 };
          const tmp8 = closure_13(closure_15, obj2);
          cResult[5] = tmp2;
          cResult[6] = tmp8;
          tmp5 = tmp8;
        } else {
          tmp5 = cResult[6];
        }
        return tmp5;
      }
      if (cResult[3] !== large) {
        const fn = function o(children, arg1) {
          const obj = { large, children };
          return map1(closure_19, obj, arg1);
        };
        cResult[3] = large;
        cResult[4] = fn;
        tmp3 = fn;
      } else {
        tmp3 = cResult[4];
      }
      const descriptions = action.descriptions;
      const mapped = descriptions.map(tmp3);
      cResult[0] = action.descriptions;
      cResult[1] = large;
      cResult[2] = mapped;
      tmp2 = mapped;
    }
  : (large) => {
      let descriptions;
      large = large.large;
      let obj = {
        children: descriptions.map((children, index) => {
          const obj = { large, children };
          return map1(closure_19, obj, index);
        }),
      };
      descriptions = large.action.descriptions;
      return closure_13(closure_15, obj);
    };
ReactCompilerGating = ReactCompilerGating_mod;
let closure_23 = ReactCompilerGating.isReactCompilerEnabled()
  ? () => {
      let first;
      let intl;
      let intl2;
      let items1;
      let tmp10;
      let tmp15;
      let tmp9;
      const obj = react2;
      const cResult = obj.c(9);
      const tmp4 = closure_16();
      if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
        const obj2 = { plain: true, children: intl.string(intl4.t["977iei"]) };
        intl = intl4.intl;
        const tmp8 = map1(closure_18, obj2);
        cResult[0] = tmp8;
        first = tmp8;
      } else {
        first = cResult[0];
      }
      if (cResult[1] !== tmp4.actionsTaken) {
        const items = [tmp4.actionsTaken];
        cResult[1] = tmp4.actionsTaken;
        cResult[2] = items;
        tmp9 = items;
      } else {
        tmp9 = cResult[2];
      }
      if (cResult[3] === Symbol.for("react.memo_cache_sentinel")) {
        const obj3 = { large: true, children: intl2.string(_modDef3137["yV/t/V"]) };
        intl2 = intl4.intl;
        const tmp14 = map1(closure_19, obj3);
        cResult[3] = tmp14;
        tmp10 = tmp14;
      } else {
        tmp10 = cResult[3];
      }
      if (cResult[4] !== tmp9) {
        const obj4 = { style: tmp9, children: tmp10 };
        const tmp18 = map1(React3, obj4);
        cResult[4] = tmp9;
        cResult[5] = tmp18;
        tmp15 = tmp18;
      } else {
        tmp15 = cResult[5];
      }
      if (cResult[6] === tmp4.sectionContainer) {
        let tmp19;
        if (cResult[7] === tmp15) {
          tmp19 = cResult[8];
        }
        return tmp19;
      }
      const obj5 = { style: tmp4.sectionContainer, children: items1 };
      items1 = [first, tmp15];
      const tmp20 = authStore2(React3, obj5);
      cResult[6] = tmp4.sectionContainer;
      cResult[7] = tmp15;
      cResult[8] = tmp20;
      tmp19 = tmp20;
    }
  : () => {
      let intl;
      let intl2;
      let items;
      let items1;
      let obj4;
      const tmp = closure_16();
      const obj = { style: tmp.sectionContainer, children: items };
      const obj2 = { plain: true, children: intl.string(intl4.t["977iei"]) };
      intl = intl4.intl;
      items = [map1(closure_18, obj2)];
      const obj3 = { style: items1, children: map1(closure_19, obj4) };
      items1 = [tmp.actionsTaken];
      obj4 = { large: true, children: intl2.string(_modDef3137["yV/t/V"]) };
      intl2 = intl4.intl;
      items[1] = map1(React3, obj3);
      return authStore2(React3, obj);
    };
ReactCompilerGating = ReactCompilerGating_mod;
let closure_24 = ReactCompilerGating.isReactCompilerEnabled()
  ? (arg0) => {
      let appealComponent;
      let classificationTypeText;
      let communityGuidelinesLink;
      let first;
      let intl;
      let items;
      let policyExplainerLink;
      let tosLink;
      const obj = react2;
      const cResult = obj.c(14);
      ({ tosLink, communityGuidelinesLink, classificationTypeText, policyExplainerLink, appealComponent } = arg0);
      const tmp4 = closure_16();
      const sectionContainer = tmp4.sectionContainer;
      if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
        const obj2 = { variant: "eyebrow", color: "text-muted", children: intl.string(intl4.t["977iei"]) };
        const Text = Text_Text.Text;
        intl = intl4.intl;
        const tmp7 = map1(Text, obj2);
        cResult[0] = tmp7;
        first = tmp7;
      } else {
        first = cResult[0];
      }
      if (cResult[1] === communityGuidelinesLink) {
        let tmp8;
        let tmp10;
        if (cResult[2] === tosLink) {
          tmp8 = cResult[3];
        }
        if (cResult[4] !== tmp8) {
          const obj3 = { variant: "text-sm/normal", children: tmp8 };
          const tmp12 = map1(Text_Text.Text, obj3);
          cResult[4] = tmp8;
          cResult[5] = tmp12;
          tmp10 = tmp12;
        } else {
          tmp10 = cResult[5];
        }
        if (cResult[6] === classificationTypeText) {
          let tmp13;
          if (cResult[7] === policyExplainerLink) {
            tmp13 = cResult[8];
          }
          if (cResult[9] === appealComponent) {
            if (cResult[10] === tmp4.sectionContainer) {
              if (cResult[11] === tmp10) {
                let tmp17;
                if (cResult[12] === tmp13) {
                  tmp17 = cResult[13];
                }
                return tmp17;
              }
            }
          }
          const obj4 = { style: sectionContainer, children: items };
          items = [first, tmp10, tmp13, appealComponent];
          const tmp20 = authStore2(React3, obj4);
          cResult[9] = appealComponent;
          cResult[10] = tmp4.sectionContainer;
          cResult[11] = tmp10;
          cResult[12] = tmp13;
          cResult[13] = tmp20;
          tmp17 = tmp20;
        }
        const obj5 = { classificationTypeText, policyExplainerLink };
        const tmp16 = map1(ClassificationPolicyCard, obj5);
        cResult[6] = classificationTypeText;
        cResult[7] = policyExplainerLink;
        cResult[8] = tmp16;
        tmp13 = tmp16;
      }
      const intl2 = intl4.intl;
      const formatResult = intl2.format(intl4.t["1Z/+aA"], { tosLink, communityGuidelinesLink });
      cResult[1] = communityGuidelinesLink;
      cResult[2] = tosLink;
      cResult[3] = formatResult;
      tmp8 = formatResult;
    }
  : (arg0) => {
      let appealComponent;
      let classificationTypeText;
      let communityGuidelinesLink;
      let intl;
      let intl2;
      let items;
      let policyExplainerLink;
      let tosLink;
      ({ tosLink, communityGuidelinesLink, classificationTypeText, policyExplainerLink, appealComponent } = arg0);
      const obj = { style: closure_16().sectionContainer, children: items };
      const obj2 = { variant: "eyebrow", color: "text-muted", children: intl.string(intl4.t["977iei"]) };
      const Text = Text_Text.Text;
      intl = intl4.intl;
      items = [map1(Text, obj2), , ,];
      const obj3 = {
        variant: "text-sm/normal",
        children: intl2.format(intl4.t["1Z/+aA"], { tosLink, communityGuidelinesLink }),
      };
      const Text2 = Text_Text.Text;
      intl2 = intl4.intl;
      items[1] = map1(Text2, obj3);
      items[2] = map1(ClassificationPolicyCard, { classificationTypeText, policyExplainerLink });
      items[3] = appealComponent;
      return authStore2(React3, obj);
    };
ReactCompilerGating = ReactCompilerGating_mod;
let closure_25 = ReactCompilerGating.isReactCompilerEnabled();
ReactCompilerGating = ReactCompilerGating_mod;
let closure_27 = ReactCompilerGating.isReactCompilerEnabled()
  ? () => {
      let first;
      let intl;
      const obj = react2;
      const cResult = obj.c(1);
      if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
        const obj2 = { variant: "text-md/normal", color: "text-muted", children: intl.string(intl4.t["I2H0/E"]) };
        const Text = Text_Text.Text;
        intl = intl4.intl;
        const tmp6 = map1(Text, obj2);
        cResult[0] = tmp6;
        first = tmp6;
      } else {
        first = cResult[0];
      }
      return first;
    }
  : () => {
      let intl;
      const obj = { variant: "text-md/normal", color: "text-muted", children: intl.string(intl4.t["I2H0/E"]) };
      const Text = Text_Text.Text;
      intl = intl4.intl;
      return map1(Text, obj);
    };
ReactCompilerGating = ReactCompilerGating_mod;
let closure_28 = ReactCompilerGating.isReactCompilerEnabled()
  ? (onPressLetUsKnow) => {
      let tmp4;
      let tmp6;
      _require = onPressLetUsKnow;
      let obj = require("react");
      const cResult = obj.c(4);
      if (cResult[0] !== onPressLetUsKnow.onPressLetUsKnow) {
        const intl = tmp(1126).intl;
        const obj2 = {
          letUsKnowHook(children, arg1) {
            const obj = {
              onPress: onPressLetUsKnow.onPressLetUsKnow,
              variant: "text-sm/normal",
              color: "text-link",
              children,
            };
            return map1(Text_Text.Text, obj, arg1);
          },
        };
        const formatResult = intl.format(require("intl").t.IFxUaT, obj2);
        cResult[0] = onPressLetUsKnow.onPressLetUsKnow;
        cResult[1] = formatResult;
        tmp4 = formatResult;
      } else {
        tmp4 = cResult[1];
      }
      if (cResult[2] !== tmp4) {
        const obj3 = { variant: "text-sm/normal", color: "text-muted", children: tmp4 };
        const tmp8 = closure_13(require("Text/Text").Text, obj3);
        cResult[2] = tmp4;
        cResult[3] = tmp8;
        tmp6 = tmp8;
      } else {
        tmp6 = cResult[3];
      }
      return tmp6;
    }
  : (arg0) => {
      let intl;
      let obj2;
      let onPressLetUsKnow;
      _require = arg0;
      let obj = {
        variant: "text-sm/normal",
        color: "text-muted",
        children: intl.format(require("intl").t.IFxUaT, obj2),
      };
      const Text = require("Text/Text").Text;
      intl = require("intl").intl;
      obj2 = {
        letUsKnowHook(children, arg1) {
          const obj = {
            onPress: onPressLetUsKnow.onPressLetUsKnow,
            variant: "text-sm/normal",
            color: "text-link",
            children,
          };
          return map1(Text_Text.Text, obj, arg1);
        },
      };
      return closure_13(Text, obj);
    };
ReactCompilerGating = ReactCompilerGating_mod;
let closure_29 = ReactCompilerGating.isReactCompilerEnabled()
  ? (hasBeenAppealed) => {
      let tmp4Result;
      const obj = react2;
      const cResult = obj.c(6);
      const tmp2 = closure_16();
      if (cResult[0] === hasBeenAppealed.hasBeenAppealed) {
        let tmp3;
        if (cResult[1] === hasBeenAppealed.onPressLetUsKnow) {
          tmp3 = cResult[2];
        }
        if (cResult[3] === tmp2.letUsKnowContainer) {
          let tmp8;
          if (cResult[4] === tmp3) {
            tmp8 = cResult[5];
          }
          return tmp8;
        }
        const obj2 = { style: tmp2.letUsKnowContainer, children: tmp3 };
        const tmp11 = map1(React3, obj2);
        cResult[3] = tmp2.letUsKnowContainer;
        cResult[4] = tmp3;
        cResult[5] = tmp11;
        tmp8 = tmp11;
      }
      if (hasBeenAppealed.hasBeenAppealed) {
        tmp4Result = map1(closure_27, {});
      } else {
        const obj3 = { onPressLetUsKnow: hasBeenAppealed.onPressLetUsKnow };
        tmp4Result = map1(closure_28, obj3);
      }
      cResult[0] = hasBeenAppealed.hasBeenAppealed;
      cResult[1] = hasBeenAppealed.onPressLetUsKnow;
      cResult[2] = tmp4Result;
      tmp3 = tmp4Result;
    }
  : (hasBeenAppealed) => {
      let tmpResult;
      const obj = { style: closure_16().letUsKnowContainer, children: tmpResult };
      if (hasBeenAppealed.hasBeenAppealed) {
        tmpResult = map1(closure_27, {});
      } else {
        const obj2 = { onPressLetUsKnow: hasBeenAppealed.onPressLetUsKnow };
        tmpResult = map1(closure_28, obj2);
      }
      return map1(React3, obj);
    };
ReactCompilerGating = ReactCompilerGating_mod;
let closure_30 = ReactCompilerGating.isReactCompilerEnabled()
  ? (arg0) => {
      let communityGuidelinesLink;
      let first;
      let intl;
      let items;
      let onPressLetUsKnow;
      let tmp11;
      let tmp9;
      let tosLink;
      const obj = react2;
      const cResult = obj.c(14);
      ({ tosLink, communityGuidelinesLink, onPressLetUsKnow } = arg0);
      const tmp4 = closure_16();
      const confirmMinimumAgeSection = tmp4.confirmMinimumAgeSection;
      if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
        const obj2 = { plain: true, children: intl.string(intl4.t.RVEiD0) };
        intl = intl4.intl;
        const tmp8 = map1(closure_18, obj2);
        cResult[0] = tmp8;
        first = tmp8;
      } else {
        first = cResult[0];
      }
      if (cResult[1] === Symbol.for("react.memo_cache_sentinel")) {
        const intl2 = intl4.intl;
        const stringResult = intl2.string(intl4.t.YQPbuc);
        cResult[1] = stringResult;
        tmp9 = stringResult;
      } else {
        tmp9 = cResult[1];
      }
      if (cResult[2] !== onPressLetUsKnow) {
        const obj3 = { label: tmp9, onPress: onPressLetUsKnow, arrow: true, start: true, end: true };
        const tmp13 = map1(TableRow2.TableRow, obj3);
        cResult[2] = onPressLetUsKnow;
        cResult[3] = tmp13;
        tmp11 = tmp13;
      } else {
        tmp11 = cResult[3];
      }
      if (cResult[4] === communityGuidelinesLink) {
        let tmp15;
        if (cResult[5] === tosLink) {
          tmp15 = cResult[6];
        }
        if (cResult[7] === tmp4.guidelinesFooter) {
          let tmp17;
          if (cResult[8] === tmp15) {
            tmp17 = cResult[9];
          }
          if (cResult[10] === tmp4.confirmMinimumAgeSection) {
            if (cResult[11] === tmp11) {
              let tmp20;
              if (cResult[12] === tmp17) {
                tmp20 = cResult[13];
              }
              return tmp20;
            }
          }
          const obj4 = { style: confirmMinimumAgeSection, children: items };
          items = [first, tmp11, tmp17];
          const tmp23 = authStore2(React3, obj4);
          cResult[10] = tmp4.confirmMinimumAgeSection;
          cResult[11] = tmp11;
          cResult[12] = tmp17;
          cResult[13] = tmp23;
          tmp20 = tmp23;
        }
        const obj5 = { variant: "text-sm/normal", color: "text-muted", style: tmp14, children: tmp15 };
        const tmp19 = map1(Text_Text.Text, obj5);
        cResult[7] = tmp4.guidelinesFooter;
        cResult[8] = tmp15;
        cResult[9] = tmp19;
        tmp17 = tmp19;
      }
      const intl3 = intl4.intl;
      const formatResult = intl3.format(intl4.t["1Z/+aA"], { tosLink, communityGuidelinesLink });
      cResult[4] = communityGuidelinesLink;
      cResult[5] = tosLink;
      cResult[6] = formatResult;
      tmp15 = formatResult;
    }
  : (arg0) => {
      let communityGuidelinesLink;
      let intl;
      let intl2;
      let intl3;
      let items;
      let onPressLetUsKnow;
      let tosLink;
      ({ tosLink, communityGuidelinesLink, onPressLetUsKnow } = arg0);
      const tmp = closure_16();
      const obj = { style: tmp.confirmMinimumAgeSection, children: items };
      const obj2 = { plain: true, children: intl.string(intl4.t.RVEiD0) };
      intl = intl4.intl;
      items = [map1(closure_18, obj2), ,];
      const obj3 = {
        label: intl2.string(intl4.t.YQPbuc),
        onPress: onPressLetUsKnow,
        arrow: true,
        start: true,
        end: true,
      };
      const TableRow = TableRow2.TableRow;
      intl2 = intl4.intl;
      items[1] = map1(TableRow, obj3);
      const obj4 = {
        variant: "text-sm/normal",
        color: "text-muted",
        style: tmp.guidelinesFooter,
        children: intl3.format(intl4.t["1Z/+aA"], { tosLink, communityGuidelinesLink }),
      };
      const Text = Text_Text.Text;
      intl3 = intl4.intl;
      items[2] = map1(Text, obj4);
      return authStore2(React3, obj);
    };
ReactCompilerGating = ReactCompilerGating_mod;
let closure_31 = ReactCompilerGating.isReactCompilerEnabled()
  ? (arg0) => {
      let communityGuidelinesLink;
      let tosLink;
      const obj = react2;
      const cResult = obj.c(5);
      ({ tosLink, communityGuidelinesLink } = arg0);
      if (cResult[0] === communityGuidelinesLink) {
        let tmp4;
        let tmp6;
        if (cResult[1] === tosLink) {
          tmp4 = cResult[2];
        }
        if (cResult[3] !== tmp4) {
          const obj2 = { variant: "text-sm/normal", color: "text-muted", children: tmp4 };
          const tmp8 = map1(Text_Text.Text, obj2);
          cResult[3] = tmp4;
          cResult[4] = tmp8;
          tmp6 = tmp8;
        } else {
          tmp6 = cResult[4];
        }
        return tmp6;
      }
      const intl = intl4.intl;
      const formatResult = intl.format(_modDef3137.vPOpia, { tosLink, communityGuidelinesLink });
      cResult[0] = communityGuidelinesLink;
      cResult[1] = tosLink;
      cResult[2] = formatResult;
      tmp4 = formatResult;
    }
  : (arg0) => {
      let communityGuidelinesLink;
      let intl;
      let tosLink;
      ({ tosLink, communityGuidelinesLink } = arg0);
      const obj = {
        variant: "text-sm/normal",
        color: "text-muted",
        children: intl.format(_modDef3137.vPOpia, { tosLink, communityGuidelinesLink }),
      };
      const Text = Text_Text.Text;
      intl = intl4.intl;
      return map1(Text, obj);
    };
ReactCompilerGating = ReactCompilerGating_mod;
let closure_32 = ReactCompilerGating.isReactCompilerEnabled()
  ? () => {
      let first;
      let items;
      const obj = react2;
      const cResult = obj.c(1);
      if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
        const obj2 = { children: items };
        items = [map1(closure_21, {}), map1(closure_23, {})];
        const obj5 = { tosLink: null, communityGuidelinesLink: null };
        ({ TOS_LINK: obj3.tosLink, COMMUNITY_GUIDELINES: obj3.communityGuidelinesLink } = unpackModuleId);
        items[2] = map1(closure_31, obj5);
        const tmp10 = authStore2(closure_15, obj2);
        cResult[0] = tmp10;
        first = tmp10;
      } else {
        first = cResult[0];
      }
      return first;
    }
  : () => {
      let items;
      const obj = { children: items };
      items = [map1(closure_21, {}), map1(closure_23, {})];
      const obj2 = { tosLink: unpackModuleId.TOS_LINK, communityGuidelinesLink: unpackModuleId.COMMUNITY_GUIDELINES };
      items[2] = map1(closure_31, obj2);
      return authStore2(closure_15, obj);
    };
ReactCompilerGating = ReactCompilerGating_mod;
let closure_33 = ReactCompilerGating.isReactCompilerEnabled()
  ? (onClose) => {
      let first;
      let tmp7;
      const obj = react2;
      const cResult = obj.c(6);
      onClose = onClose.onClose;
      const tmp4 = closure_16();
      const redirectButtonWrapper = tmp4.redirectButtonWrapper;
      if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
        const intl = intl4.intl;
        const stringResult = intl.string(intl4.t.elrEjL);
        cResult[0] = stringResult;
        first = stringResult;
      } else {
        first = cResult[0];
      }
      if (cResult[1] !== onClose) {
        const obj2 = { size: "md", text: first, onPress: onClose, grow: true };
        const tmp9 = map1(components_Button_Button.Button, obj2);
        cResult[1] = onClose;
        cResult[2] = tmp9;
        tmp7 = tmp9;
      } else {
        tmp7 = cResult[2];
      }
      if (cResult[3] === tmp4.redirectButtonWrapper) {
        let tmp10;
        if (cResult[4] === tmp7) {
          tmp10 = cResult[5];
        }
        return tmp10;
      }
      const tmp11 = map1(React3, { style: redirectButtonWrapper, children: tmp7 });
      cResult[3] = tmp4.redirectButtonWrapper;
      cResult[4] = tmp7;
      cResult[5] = tmp11;
      tmp10 = tmp11;
    }
  : (onClose) => {
      let Button;
      let intl;
      let obj2;
      onClose = onClose.onClose;
      const obj = { style: closure_16().redirectButtonWrapper, children: map1(Button, obj2) };
      obj2 = { size: "md", text: intl.string(intl4.t.elrEjL), onPress: onClose, grow: true };
      Button = components_Button_Button.Button;
      intl = intl4.intl;
      return map1(React3, obj);
    };
ReactCompilerGating = ReactCompilerGating_mod;
let tmp6 = ReactCompilerGating.isReactCompilerEnabled()
  ? (classificationId) => {
      let items3;
      let items4;
      let obj12;
      let onClose;
      let tmp6;
      let tmp7;
      let tmpResult8;
      let obj = classificationId(onClose[10]);
      const cResult = obj.c(45);
      classificationId = classificationId.classificationId;
      let source = classificationId.source;
      onClose = classificationId.onClose;
      const onError = classificationId.onError;
      let obj2 = classificationId(onClose[21]);
      const safetyHubClassification = obj2.useSafetyHubClassification(classificationId);
      const classification = safetyHubClassification.classification;
      const isAppealEligible = safetyHubClassification.isAppealEligible;
      const tmp5 = closure_16();
      if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
        let items = [closure_8];
        const fn = function p() {
          return closure_8.getAppealEligibility();
        };
        cResult[0] = items;
        cResult[1] = fn;
        tmp6 = items;
        tmp7 = fn;
      } else {
        [tmp6, tmp7] = cResult;
      }
      let tmpResult = tmp(tmp2[14]);
      const stateFromStores = tmpResult.useStateFromStores(tmp6, tmp7);
      let flagged_content;
      if (classification != null) {
        flagged_content = classification.flagged_content;
      }
      let tmp10 = null != flagged_content;
      if (tmp10) {
        let length;
        if (classification != null) {
          length = classification.flagged_content.length;
        }
        tmp10 = length > 0;
      }
      const is_violative_content_shown = tmp10;
      let tmpResult5 = tmp(tmp2[22]);
      const safetyHubAccountStanding = tmpResult5.useSafetyHubAccountStanding();
      if (cResult[2] === stateFromStores) {
        let tmp15;
        let is_coppa;
        const tmp13 = cResult[3];
        if (classification != null) {
          is_coppa = classification.is_coppa;
        }
        if (tmp13 === is_coppa) {
          tmp15 = cResult[4];
        }
        closure_8 = tmp15;
        if (cResult[5] === stateFromStores) {
          let tmp21;
          let tmp27;
          let tmp26;
          let is_coppa1;
          const tmp19 = cResult[6];
          if (classification != null) {
            is_coppa1 = classification.is_coppa;
          }
          if (tmp19 === is_coppa1) {
            tmp21 = cResult[7];
          }
          let closure_9 = tmp21;
          const tmpResult6 = tmp(tmp2[23]);
          const tmp25 =
            tmp21 &&
            tmpResult6.useIsExpressiveModalV2Enabled(
              classificationId(onClose[24]).AgeVerificationModalEntryPoint.AUTOMATED_UNDERAGE_APPEALS,
            );
          const _Symbol = Symbol;
          if (cResult[8] === Symbol.for("react.memo_cache_sentinel")) {
            const items1 = [closure_8];
            const fn2 = function j() {
              return closure_8.getIsManualReviewDecidedUnderage();
            };
            cResult[8] = items1;
            cResult[9] = fn2;
            tmp27 = fn2;
            tmp26 = items1;
          } else {
            tmp26 = cResult[8];
            tmp27 = cResult[9];
          }
          let tmpResult7 = tmp(tmp2[14]);
          let is_coppa2;
          const stateFromStores1 = tmpResult7.useStateFromStores(tmp26, tmp27);
          if (classification != null) {
            is_coppa2 = classification.is_coppa;
          }
          if (cResult[10] === safetyHubAccountStanding) {
            if (cResult[11] === classificationId) {
              if (cResult[12] === safetyHubClassification) {
                if (cResult[13] === tmp10) {
                  let tmp32;
                  let tmp34;
                  let tmp37;
                  let tmp36;
                  if (cResult[14] === source) {
                    tmp32 = cResult[15];
                  }
                  let current = tmp32;
                  const ref = safetyHubClassification.useRef(tmp32);
                  if (cResult[16] !== tmp32) {
                    const fn3 = function $() {
                      ref.current = current;
                    };
                    cResult[16] = tmp32;
                    cResult[17] = fn3;
                    tmp34 = fn3;
                  } else {
                    tmp34 = cResult[17];
                  }
                  const effect = obj9.useEffect(tmp34);
                  if (cResult[18] !== classification) {
                    function ee() {
                      let accountStanding;
                      let classificationState;
                      let hasFlaggedContent;
                      let items;
                      if (null != classification) {
                        current = ref.current;
                        ({ classificationState, source } = current);
                        ({ accountStanding, classificationId, hasFlaggedContent } = current);
                        const obj = {
                          action: authStore.ViewViolationDetail,
                          account_standing: accountStanding.state,
                          classification_ids: items,
                          source,
                          is_violative_content_shown: hasFlaggedContent,
                          is_dsa_eligible: null,
                          violation_type: null,
                        };
                        const _Number = Number;
                        const track = AnalyticsUtilsDefault.track;
                        const SAFETY_HUB_ACTION = AnalyticEvents.SAFETY_HUB_ACTION;
                        items = [];
                        AnalyticsUtilsDefault;
                        items[0] = Number(classificationId);
                        if (source == null) {
                          source = React4.SystemDM;
                        }
                        ({ isDsaEligible: obj.is_dsa_eligible, violationType: obj.violation_type } =
                          classificationState);
                        track(SAFETY_HUB_ACTION, obj);
                      }
                    }
                    const items2 = [classification];
                    cResult[18] = classification;
                    cResult[19] = ee;
                    cResult[20] = items2;
                    tmp37 = items2;
                    tmp36 = ee;
                  } else {
                    tmp36 = cResult[19];
                    tmp37 = cResult[20];
                  }
                  const effect1 = obj9.useEffect(tmp36, tmp37);
                  if (cResult[21] === safetyHubAccountStanding.state) {
                    if (cResult[22] === isAppealEligible) {
                      if (cResult[23] === classificationId) {
                        if (cResult[24] === safetyHubClassification.isDsaEligible) {
                          if (cResult[25] === safetyHubClassification.violationType) {
                            if (cResult[26] === tmp10) {
                              if (cResult[27] === tmp21) {
                                if (cResult[28] === tmp15) {
                                  if (cResult[29] === onClose) {
                                    let tmp39;
                                    let tmp59;
                                    let tmp64Result;
                                    if (cResult[30] === source) {
                                      tmp39 = cResult[31];
                                    }
                                    if (null == classification) {
                                      if (
                                        safetyHubClassification.classificationRequestState ===
                                        classificationId(onClose[12]).ClassificationRequestState.FAILED
                                      ) {
                                        onError();
                                        tmp59 = null;
                                      }
                                      return tmp59;
                                    }
                                    if (cResult[32] === classification) {
                                      if (cResult[33] === onClose) {
                                        if (cResult[34] === tmp39) {
                                          if (cResult[35] === (is_coppa2 && stateFromStores1)) {
                                            if (cResult[36] === tmp5.classificationDetailContainer) {
                                              let tmp40;
                                              if (cResult[37] === tmp25) {
                                                tmp40 = cResult[38];
                                              }
                                              if (cResult[39] === tmp5.container) {
                                                let tmp56;
                                                if (cResult[40] === tmp40) {
                                                  tmp56 = cResult[41];
                                                }
                                                if (cResult[42] === tmp5.root) {
                                                  if (cResult[43] === tmp56) {
                                                    tmp59 = cResult[44];
                                                  }
                                                }
                                                let obj3 = { style: tmp5.root, children: tmp56 };
                                                const tmp62 = closure_13(is_violative_content_shown, obj3);
                                                cResult[42] = tmp5.root;
                                                cResult[43] = tmp56;
                                                cResult[44] = tmp62;
                                                tmp59 = tmp62;
                                              }
                                              const obj4 = { style: tmp5.container, bottom: true, children: tmp40 };
                                              const tmp58 = closure_13(
                                                classificationId(onClose[32]).SafeAreaPaddingView,
                                                obj4,
                                              );
                                              cResult[39] = tmp5.container;
                                              cResult[40] = tmp40;
                                              cResult[41] = tmp58;
                                              tmp56 = tmp58;
                                            }
                                          }
                                        }
                                      }
                                    }
                                    if (null == classification) {
                                      tmp64Result = closure_13(isAppealEligible, { size: "large" });
                                    } else {
                                      let tmp64Result1;
                                      const obj5 = { style: items3, children: items4 };
                                      items3 = [tmp5.classificationDetailContainer];
                                      const obj6 = { classificationTypeText: null, guildMetadata: null };
                                      ({
                                        description: obj21.classificationTypeText,
                                        guild_metadata: obj21.guildMetadata,
                                      } = classification);
                                      items4 = [closure_13(closure_17, obj6), , ,];
                                      let flagged_content1 = classification.flagged_content;
                                      const tmp65 = classification;
                                      const tmp69 = source(onClose[30]);
                                      if (flagged_content1 == null) {
                                        flagged_content1 = [];
                                      }
                                      const obj7 = { flaggedContent: flagged_content1 };
                                      items4[1] = closure_13(tmp69, obj7);
                                      if (is_coppa2 && stateFromStores1) {
                                        tmp64Result1 = closure_13(closure_32, {});
                                      } else {
                                        let tmp66Result3;
                                        const obj8 = {
                                          actions: classification.actions,
                                          classificationExpiration:
                                            tmpResult8.getClassificationAccountStatusExpiration(classification),
                                          redesigned: tmp25,
                                        };
                                        tmpResult8 = tmp(tmp2[31]);
                                        const items5 = [closure_13(closure_20, obj8)];
                                        if (tmp25) {
                                          const obj10 = {
                                            tosLink: null,
                                            communityGuidelinesLink: null,
                                            onPressLetUsKnow: tmp39,
                                          };
                                          ({
                                            TOS_LINK: obj15.tosLink,
                                            COMMUNITY_GUIDELINES: obj15.communityGuidelinesLink,
                                          } = ref);
                                          tmp66Result3 = closure_13(closure_30, obj10);
                                        } else {
                                          ({
                                            APPEALS_LINK: obj13.appealLink,
                                            COMMUNITY_GUIDELINES: obj13.communityGuidelinesLink,
                                            TOS_LINK: obj13.tosLink,
                                          } = ref);
                                          ({
                                            description: obj13.classificationTypeText,
                                            explainer_link: obj13.policyExplainerLink,
                                          } = classification);
                                          const obj11 = {
                                            appealLink: null,
                                            communityGuidelinesLink: null,
                                            tosLink: null,
                                            classificationTypeText: null,
                                            policyExplainerLink: null,
                                            appealComponent: closure_13(closure_29, obj12),
                                          };
                                          obj12 = {
                                            hasBeenAppealed: null != classification.appeal_status,
                                            onPressLetUsKnow: tmp39,
                                          };
                                          tmp66Result3 = closure_13(closure_24, obj11);
                                        }
                                        const obj14 = { children: items5 };
                                        items5[1] = tmp66Result3;
                                        tmp64Result1 = closure_14(closure_15, obj14);
                                      }
                                      items4[2] = tmp64Result1;
                                      let tmp66Result4 = !tmp25;
                                      if (tmp66Result4) {
                                        const obj16 = { onClose };
                                        tmp66Result4 = closure_13(closure_33, obj16);
                                      }
                                      items4[3] = tmp66Result4;
                                      tmp64Result = closure_14(tmp65, obj5);
                                    }
                                    cResult[32] = classification;
                                    cResult[33] = onClose;
                                    cResult[34] = tmp39;
                                    cResult[35] = is_coppa2 && stateFromStores1;
                                    cResult[36] = tmp5.classificationDetailContainer;
                                    cResult[37] = tmp25;
                                    cResult[38] = tmp64Result;
                                    tmp40 = tmp64Result;
                                  }
                                }
                              }
                            }
                          }
                        }
                      }
                    }
                  }
                  function ne() {
                    let SystemDM;
                    let items;
                    const obj = {
                      action: authStore.ClickLetUsKnow,
                      account_standing: safetyHubAccountStanding.state,
                      classification_ids: items,
                      source: SystemDM,
                      is_violative_content_shown,
                      is_dsa_eligible: null,
                      violation_type: null,
                    };
                    const track = AnalyticsUtilsDefault.track;
                    const SAFETY_HUB_ACTION = AnalyticEvents.SAFETY_HUB_ACTION;
                    items = [];
                    AnalyticsUtilsDefault;
                    items[0] = Number(classificationId);
                    SystemDM = source;
                    if (source == null) {
                      SystemDM = React4.SystemDM;
                    }
                    ({ isDsaEligible: obj.is_dsa_eligible, violationType: obj.violation_type } =
                      safetyHubClassification);
                    track(SAFETY_HUB_ACTION, obj);
                    if (c9) {
                      const tmpResult = AutomatedUnderageAppealModalActionCreatorsDefault;
                      tmpResult.openV2(classificationId, onClose);
                    } else if (closure_8) {
                      const tmpResult5 = AutomatedUnderageAppealModalActionCreatorsDefault;
                      tmpResult5.open(classificationId, onClose);
                    } else if (isAppealEligible) {
                      const obj2 = { name: MetricEvents.MetricEvents.APPEAL_INGESTION_VIEW };
                      const increment = MonitoringAgentDefault.increment;
                      MonitoringAgentDefault;
                      increment(obj2);
                      const obj3 = { classificationId };
                      const tmpResult7 = AppealIngestionModalActionCreatorsDefault;
                      tmpResult7.open(obj3);
                    } else {
                      const tmpResult8 = LinkingDefault;
                      tmpResult8.openURL(unpackModuleId.APPEALS_LINK);
                    }
                  }
                  cResult[21] = safetyHubAccountStanding.state;
                  cResult[22] = isAppealEligible;
                  cResult[23] = classificationId;
                  cResult[24] = safetyHubClassification.isDsaEligible;
                  cResult[25] = safetyHubClassification.violationType;
                  cResult[26] = tmp10;
                  cResult[27] = tmp21;
                  cResult[28] = tmp15;
                  cResult[29] = onClose;
                  cResult[30] = source;
                  cResult[31] = ne;
                  tmp39 = ne;
                }
              }
            }
          }
          const obj17 = {
            accountStanding: safetyHubAccountStanding,
            classificationId,
            classificationState: safetyHubClassification,
            hasFlaggedContent: tmp10,
            source,
          };
          cResult[10] = safetyHubAccountStanding;
          cResult[11] = classificationId;
          cResult[12] = safetyHubClassification;
          cResult[13] = tmp10;
          cResult[14] = source;
          cResult[15] = obj17;
          tmp32 = obj17;
        }
        let is_coppa3;
        if (classification != null) {
          is_coppa3 = classification.is_coppa;
        }
        const hasItem =
          is_coppa3 && stateFromStores.includes(tmp(tmp2[12]).AppealEligibility.AGE_VERIFY_GLOBAL_ELIGIBLE);
        cResult[5] = stateFromStores;
        let is_coppa4;
        if (classification != null) {
          is_coppa4 = classification.is_coppa;
        }
        cResult[6] = is_coppa4;
        cResult[7] = hasItem;
        tmp21 = hasItem;
      }
      let is_coppa5;
      if (classification != null) {
        is_coppa5 = classification.is_coppa;
      }
      const hasItem1 = is_coppa5 && stateFromStores.includes(tmp(tmp2[12]).AppealEligibility.AGE_VERIFY_ELIGIBLE);
      cResult[2] = stateFromStores;
      let is_coppa6;
      if (classification != null) {
        is_coppa6 = classification.is_coppa;
      }
      cResult[3] = is_coppa6;
      cResult[4] = hasItem1;
      tmp15 = hasItem1;
    }
  : (classificationId) => {
      let SafeAreaPaddingView;
      let hasItem;
      let items3;
      let items4;
      let obj13;
      let obj5;
      let tmp38Result;
      let tmpResult6;
      classificationId = classificationId.classificationId;
      let source = classificationId.source;
      const onClose = classificationId.onClose;
      const onError = classificationId.onError;
      let obj = classificationId(onClose[21]);
      const safetyHubClassification = obj.useSafetyHubClassification(classificationId);
      const classification = safetyHubClassification.classification;
      const isAppealEligible = safetyHubClassification.isAppealEligible;
      const tmp4 = closure_16();
      let obj2 = classificationId(onClose[14]);
      let items = [hasItem];
      const stateFromStores = obj2.useStateFromStores(items, () => hasItem.getAppealEligibility());
      let flagged_content;
      const tmp5 = hasItem;
      if (classification != null) {
        flagged_content = classification.flagged_content;
      }
      let tmp7 = null != flagged_content;
      if (tmp7) {
        let length;
        if (classification != null) {
          length = classification.flagged_content.length;
        }
        tmp7 = length > 0;
      }
      const is_violative_content_shown = tmp7;
      let tmpResult = tmp(tmp2[22]);
      const safetyHubAccountStanding = tmpResult.useSafetyHubAccountStanding();
      let is_coppa;
      if (classification != null) {
        is_coppa = classification.is_coppa;
      }
      hasItem = is_coppa && stateFromStores.includes(tmp(tmp2[12]).AppealEligibility.AGE_VERIFY_ELIGIBLE);
      let is_coppa1;
      if (classification != null) {
        is_coppa1 = classification.is_coppa;
      }
      let hasItem1 = is_coppa1 && stateFromStores.includes(tmp(tmp2[12]).AppealEligibility.AGE_VERIFY_GLOBAL_ELIGIBLE);
      const useIsExpressiveModalV2Enabled = classificationId(onClose[23]).useIsExpressiveModalV2Enabled;
      classificationId(onClose[23]);
      if (hasItem1) {
        hasItem1 = useIsExpressiveModalV2Enabled(
          tmp(tmp2[24]).AgeVerificationModalEntryPoint.AUTOMATED_UNDERAGE_APPEALS,
        );
      }
      let tmpResult5 = tmp(tmp2[14]);
      const items1 = [tmp5];
      let is_coppa2;
      const stateFromStores1 = tmpResult5.useStateFromStores(items1, () => hasItem.getIsManualReviewDecidedUnderage());
      if (classification != null) {
        is_coppa2 = classification.is_coppa;
      }
      let obj3 = {
        accountStanding: safetyHubAccountStanding,
        classificationId,
        classificationState: safetyHubClassification,
        hasFlaggedContent: tmp7,
        source,
      };
      const tmp17 = is_coppa2 && stateFromStores1;
      const ref = safetyHubClassification.useRef(obj3);
      const effect = safetyHubClassification.useEffect(() => {
        ref.current = obj3;
      });
      const items2 = [classification];
      const effect1 = safetyHubClassification.useEffect(() => {
        let accountStanding;
        let classificationState;
        let hasFlaggedContent;
        let items;
        if (null != classification) {
          const current = ref.current;
          ({ classificationState, source } = current);
          ({ accountStanding, classificationId, hasFlaggedContent } = current);
          const obj = {
            action: authStore.ViewViolationDetail,
            account_standing: accountStanding.state,
            classification_ids: items,
            source,
            is_violative_content_shown: hasFlaggedContent,
            is_dsa_eligible: null,
            violation_type: null,
          };
          const _Number = Number;
          const track = AnalyticsUtilsDefault.track;
          const SAFETY_HUB_ACTION = AnalyticEvents.SAFETY_HUB_ACTION;
          items = [];
          AnalyticsUtilsDefault;
          items[0] = Number(classificationId);
          if (source == null) {
            source = React4.SystemDM;
          }
          ({ isDsaEligible: obj.is_dsa_eligible, violationType: obj.violation_type } = classificationState);
          track(SAFETY_HUB_ACTION, obj);
        }
      }, items2);
      if (null == classification) {
        let tmp20Result8;
        if (
          safetyHubClassification.classificationRequestState ===
          classificationId(onClose[12]).ClassificationRequestState.FAILED
        ) {
          onError();
          tmp20Result8 = null;
        }
        return tmp20Result8;
      }
      const obj4 = { style: tmp4.root, children: closure_13(SafeAreaPaddingView, obj5) };
      obj5 = { style: tmp4.container, bottom: true, children: tmp38Result };
      SafeAreaPaddingView = tmp(tmp2[32]).SafeAreaPaddingView;
      const tmp21 = is_violative_content_shown;
      if (null == classification) {
        tmp38Result = closure_13(isAppealEligible, { size: "large" });
      } else {
        let tmp20Result5;
        const obj6 = { style: items3, children: items4 };
        items3 = [tmp4.classificationDetailContainer];
        const obj7 = { classificationTypeText: null, guildMetadata: null };
        ({ description: obj18.classificationTypeText, guild_metadata: obj18.guildMetadata } = classification);
        items4 = [closure_13(closure_17, obj7), , ,];
        let flagged_content1 = classification.flagged_content;
        const tmp39 = classification;
        const tmp42 = source(onClose[30]);
        if (flagged_content1 == null) {
          flagged_content1 = [];
        }
        const obj8 = { flaggedContent: flagged_content1 };
        items4[1] = closure_13(tmp42, obj8);
        if (tmp17) {
          tmp20Result5 = closure_13(closure_32, {});
        } else {
          let tmp20Result6;
          function onPressLetUsKnow() {
            let SystemDM;
            let items;
            const obj = {
              action: authStore.ClickLetUsKnow,
              account_standing: safetyHubAccountStanding.state,
              classification_ids: items,
              source: SystemDM,
              is_violative_content_shown,
              is_dsa_eligible: null,
              violation_type: null,
            };
            const track = AnalyticsUtilsDefault.track;
            const SAFETY_HUB_ACTION = AnalyticEvents.SAFETY_HUB_ACTION;
            items = [];
            AnalyticsUtilsDefault;
            items[0] = Number(classificationId);
            SystemDM = source;
            if (source == null) {
              SystemDM = React4.SystemDM;
            }
            ({ isDsaEligible: obj.is_dsa_eligible, violationType: obj.violation_type } = safetyHubClassification);
            track(SAFETY_HUB_ACTION, obj);
            if (hasItem1) {
              const tmpResult = AutomatedUnderageAppealModalActionCreatorsDefault;
              tmpResult.openV2(classificationId, onClose);
            } else if (hasItem) {
              const tmpResult5 = AutomatedUnderageAppealModalActionCreatorsDefault;
              tmpResult5.open(classificationId, onClose);
            } else if (isAppealEligible) {
              const obj2 = { name: MetricEvents.MetricEvents.APPEAL_INGESTION_VIEW };
              const increment = MonitoringAgentDefault.increment;
              MonitoringAgentDefault;
              increment(obj2);
              obj3 = { classificationId };
              const tmpResult7 = AppealIngestionModalActionCreatorsDefault;
              tmpResult7.open(obj3);
            } else {
              const tmpResult8 = LinkingDefault;
              tmpResult8.openURL(unpackModuleId.APPEALS_LINK);
            }
          }
          const obj9 = {
            actions: classification.actions,
            classificationExpiration: tmpResult6.getClassificationAccountStatusExpiration(classification),
            redesigned: hasItem1,
          };
          tmpResult6 = tmp(tmp2[31]);
          const items5 = [closure_13(closure_20, obj9)];
          if (hasItem1) {
            const obj10 = { tosLink: null, communityGuidelinesLink: null, onPressLetUsKnow };
            ({ TOS_LINK: obj14.tosLink, COMMUNITY_GUIDELINES: obj14.communityGuidelinesLink } = ref);
            tmp20Result6 = closure_13(closure_30, obj10);
          } else {
            ({
              APPEALS_LINK: obj12.appealLink,
              COMMUNITY_GUIDELINES: obj12.communityGuidelinesLink,
              TOS_LINK: obj12.tosLink,
            } = ref);
            ({ description: obj12.classificationTypeText, explainer_link: obj12.policyExplainerLink } = classification);
            const obj11 = {
              appealLink: null,
              communityGuidelinesLink: null,
              tosLink: null,
              classificationTypeText: null,
              policyExplainerLink: null,
              appealComponent: closure_13(closure_29, obj13),
            };
            obj13 = { hasBeenAppealed: null != classification.appeal_status, onPressLetUsKnow };
            tmp20Result6 = closure_13(closure_24, obj11);
          }
          const obj15 = { children: items5 };
          items5[1] = tmp20Result6;
          tmp20Result5 = closure_14(closure_15, obj15);
        }
        items4[2] = tmp20Result5;
        let tmp20Result7 = !hasItem1;
        if (tmp20Result7) {
          const obj16 = { onClose };
          tmp20Result7 = closure_13(closure_33, obj16);
        }
        items4[3] = tmp20Result7;
        tmp38Result = closure_14(tmp39, obj6);
      }
      tmp20Result8 = closure_13(tmp21, obj4);
    };
size = size_mod;
const result = size.fileFinishedImporting("modules/safety_hub/native/ClassificationDetail.tsx");

export default tmp6;
