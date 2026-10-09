// discord_app/modules/safety_hub/native/ClassificationDetail.tsx
import c from "../../../../_runtime/00576_c.js";
import nativeDefault from "../../../../discord_common/js/packages/tokens/native.tsx";
import util from "../../../intl/index.native.tsx";
import AnalyticsUtilsDefault from "../../../utils/AnalyticsUtils.tsx";
import _modDef3181 from "../../age_assurance/ManualReview.messages.js";
import LinkingDefault from "../../../lib/native/Linking.tsx";
import Text_Text from "../../../design/components/Text/native/Text.tsx";
import components_Button_Button from "../../../design/components/Button/native/Button.native.tsx";
import MonitoringAgentDefault from "../../monitoring/MonitoringAgent.tsx";
import MetricEvents from "../../../../discord_common/js/shared/shared-constants/MetricEvents.tsx";
import SafetyHubModels from "../SafetyHubModels.tsx";
import TableRow from "../../../design/components/TableRow/native/TableRow.native.tsx";
import TouchableHitBoxDefault from "../../../design/void/TouchableHitBox/native/TouchableHitBox.tsx";
import AutomatedUnderageAppealModalActionCreatorsDefault from "../AutomatedUnderageAppealModalActionCreators.native.tsx";
import AppealIngestionModalActionCreatorsDefault from "AppealIngestionModalActionCreators.tsx";
import noop from "../../../../_runtime/metro/00019__.js";
import LocaleStore from "../../user_settings/LocaleStore.tsx";
import SafetyHubStore from "../SafetyHubStore.tsx";

require = fn;
function ClassificationPolicyCard(policyExplainerLink) {
  if (closure_25) {
    let tmp11 = dependencyMap;
    const cResult = policyExplainerLink(576).c(17);
    ({ classificationTypeText, policyExplainerLink } = policyExplainerLink);
    closure_129_0 = policyExplainerLink;
    let classificationPolicyCard = closure_16();
    if (cResult[0] !== policyExplainerLink) {
      function openPolicyExplainer() {
        LinkingDefault.openURL(policyExplainerLink);
      }
      cResult[0] = policyExplainerLink;
      cResult[1] = openPolicyExplainer;
      let tmp14 = openPolicyExplainer;
    } else {
      tmp14 = cResult[1];
    }
    let prop = classificationPolicyCard.classificationPolicyCard;
    const _Symbol = Symbol;
    if (cResult[2] === Symbol.for("react.memo_cache_sentinel")) {
      const obj2 = { size: "sm", color: nativeDefault.colors.TEXT_LINK };
      const tmp19 = closure_13(tmp10(10375).ShieldIcon, obj2);
      cResult[2] = tmp19;
      let tmp16 = tmp19;
    } else {
      tmp16 = cResult[2];
    }
    if (cResult[3] !== classificationPolicyCard.classificationPolicyCardIcon) {
      const obj3 = { style: classificationPolicyCard.classificationPolicyCardIcon, children: tmp16 };
      const tmp23 = closure_13(closure_4, obj3);
      cResult[3] = classificationPolicyCard.classificationPolicyCardIcon;
      cResult[4] = tmp23;
      let tmp20 = tmp23;
    } else {
      tmp20 = cResult[4];
    }
    if (cResult[5] !== classificationTypeText) {
      const intl2 = tmp10(1126).intl;
      const obj4 = { classificationDescription: classificationTypeText };
      const formatResult = intl2.format(tmp10(1126).t.zxUdpj, obj4);
      cResult[5] = classificationTypeText;
      cResult[6] = formatResult;
      let tmp24 = formatResult;
    } else {
      tmp24 = cResult[6];
    }
    if (cResult[7] !== tmp24) {
      const obj5 = { variant: "heading-md/semibold", color: "mobile-text-heading-primary", children: tmp24 };
      const tmp28 = closure_13(tmp10(5087).Text, obj5);
      cResult[7] = tmp24;
      cResult[8] = tmp28;
      let tmp26 = tmp28;
    } else {
      tmp26 = cResult[8];
    }
    if (cResult[9] === classificationPolicyCard.classificationPolicyCardContent) {
      if (cResult[10] === tmp26) {
        let tmp29 = cResult[11];
      }
      if (cResult[12] === tmp14) {
        if (cResult[13] === classificationPolicyCard.classificationPolicyCard) {
          if (cResult[14] === tmp20) {
          }
        }
      }
      const obj6 = { children: null };
      const obj7 = { onPress: tmp14, style: prop, children: null };
      prop = [tmp20, tmp29];
      obj7.children = prop;
      tmp11 = closure_14(TouchableHitBoxDefault, obj7);
      obj6.children = tmp11;
      const tmp38 = closure_13(closure_4, obj6);
      cResult[12] = tmp14;
      classificationPolicyCard = classificationPolicyCard.classificationPolicyCard;
      cResult[13] = classificationPolicyCard;
      cResult[14] = tmp20;
      cResult[15] = tmp29;
      cResult[16] = tmp38;
    }
    const obj9 = { style: classificationPolicyCard.classificationPolicyCardContent, children: tmp26 };
    const tmp32 = closure_13(closure_4, obj9);
    cResult[9] = classificationPolicyCard.classificationPolicyCardContent;
    cResult[10] = tmp26;
    cResult[11] = tmp32;
    tmp29 = tmp32;
    const obj8 = policyExplainerLink(576);
  } else {
    policyExplainerLink = policyExplainerLink.policyExplainerLink;
    const tmp2 = closure_16();
    const obj = { children: null };
    const obj10 = {
      onPress: function openPolicyExplainer() {
        LinkingDefault.openURL(policyExplainerLink);
      },
      style: tmp2.classificationPolicyCard,
      children: null,
    };
    const obj11 = { style: tmp2.classificationPolicyCardIcon, children: null };
    const obj12 = { size: "sm", color: nativeDefault.colors.TEXT_LINK };
    obj11.children = closure_13(policyExplainerLink(10375).ShieldIcon, obj12);
    const items = [closure_13(closure_4, obj11)];
    const obj13 = { style: tmp2.classificationPolicyCardContent, children: null };
    const obj14 = { variant: "heading-md/semibold", color: "mobile-text-heading-primary", children: null };
    const intl = policyExplainerLink(1126).intl;
    const obj15 = { classificationDescription: policyExplainerLink.classificationTypeText };
    obj14.children = intl.format(policyExplainerLink(1126).t.zxUdpj, obj15);
    obj13.children = closure_13(policyExplainerLink(5087).Text, obj14);
    items[1] = closure_13(closure_4, obj13);
    obj10.children = items;
    obj.children = closure_14(TouchableHitBoxDefault, obj10);
    return closure_13(closure_4, obj);
  }
}
get_ActivityIndicator = fn(17);
({ View: closure_4, ActivityIndicator: hasOwnProperty, ScrollView: metroRequire } = get_ActivityIndicator);
const SafetyHubConstants = fn(5922);
({
  SafetyHubAnalyticsActionSource: closure_9,
  SafetyHubAnalyticsActions: c10,
  SafetyHubLinks: closure_11,
} = SafetyHubConstants);
const AnalyticEvents = fn(1085).AnalyticEvents;
const jsxProd = fn(21);
({ jsx: map1, jsxs: closure_14, Fragment: closure_15 } = jsxProd);
const createStyles = fn(5091);
let obj2 = {
  root: { backgroundColor: nativeDefault.colors.BACKGROUND_BASE_LOWER },
  container: null,
  header: null,
  headerText: null,
  sectionContainer: null,
  actionsTaken: null,
  classificationDetailContainer: null,
  letUsKnowContainer: null,
  confirmMinimumAgeSection: null,
  guidelinesFooter: null,
  classificationPolicyCard: null,
  classificationPolicyCardIcon: null,
  classificationPolicyCardContent: null,
  classificationActionDescription: null,
  bulletText: null,
  redirectButtonWrapper: null,
};
let obj3 = { backgroundColor: nativeDefault.colors.BACKGROUND_BASE_LOWER };
obj2.container = {
  display: "flex",
  flexDirection: "column",
  height: "100%",
  paddingTop: nativeDefault.space.PX_16,
  paddingHorizontal: nativeDefault.space.PX_16,
  gap: nativeDefault.space.PX_32,
};
let obj4 = {
  display: "flex",
  flexDirection: "column",
  height: "100%",
  paddingTop: nativeDefault.space.PX_16,
  paddingHorizontal: nativeDefault.space.PX_16,
  gap: nativeDefault.space.PX_32,
};
obj2.header = {
  display: "flex",
  textAlign: "center",
  alignItems: "center",
  flexDirection: "column",
  gap: nativeDefault.space.PX_8,
  marginBottom: nativeDefault.space.PX_8,
};
obj2.headerText = { textAlign: "center", maxWidth: 260 };
let obj5 = {
  display: "flex",
  textAlign: "center",
  alignItems: "center",
  flexDirection: "column",
  gap: nativeDefault.space.PX_8,
  marginBottom: nativeDefault.space.PX_8,
};
obj2.sectionContainer = { display: "flex", gap: nativeDefault.space.PX_8 };
let obj6 = { display: "flex", gap: nativeDefault.space.PX_8 };
obj2.actionsTaken = {
  display: "flex",
  paddingLeft: nativeDefault.space.PX_4,
  flexDirection: "column",
  gap: nativeDefault.space.PX_8,
};
let obj7 = {
  display: "flex",
  paddingLeft: nativeDefault.space.PX_4,
  flexDirection: "column",
  gap: nativeDefault.space.PX_8,
};
obj2.classificationDetailContainer = { display: "flex", flexDirection: "column", gap: nativeDefault.space.PX_32 };
obj2.letUsKnowContainer = { display: "flex", alignItems: "center" };
let obj8 = { display: "flex", flexDirection: "column", gap: nativeDefault.space.PX_32 };
obj2.confirmMinimumAgeSection = { display: "flex", gap: nativeDefault.space.PX_12 };
let obj9 = { display: "flex", gap: nativeDefault.space.PX_12 };
obj2.guidelinesFooter = { marginTop: nativeDefault.space.PX_12 };
let obj10 = { marginTop: nativeDefault.space.PX_12 };
obj2.classificationPolicyCard = {
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
let size = {
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  backgroundColor: nativeDefault.colors.BACKGROUND_MOD_STRONG,
  width: 32,
  height: 32,
  borderRadius: nativeDefault.radii.xxl,
};
obj2.classificationPolicyCardIcon = size;
obj2.classificationPolicyCardContent = { flex: 1 };
let obj11 = {
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
obj2.classificationActionDescription = { display: "flex", flexDirection: "row", gap: nativeDefault.space.PX_8 };
obj2.bulletText = { flex: 1 };
let obj12 = { display: "flex", flexDirection: "row", gap: nativeDefault.space.PX_8 };
obj2.redirectButtonWrapper = { width: 300, alignSelf: "center", marginTop: nativeDefault.space.PX_32 };
let closure_16 = createStyles.createStyles(obj2);
let ReactCompilerGating = fn(558);
let closure_17 = ReactCompilerGating.isReactCompilerEnabled()
  ? function ClassificationHeader(arg0) {
      const cResult = c.c(10);
      ({ classificationTypeText, guildMetadata } = arg0);
      const tmp4 = closure_16();
      if (cResult[0] === classificationTypeText) {
        if (cResult[1] === guildMetadata) {
          if (cResult[4] === cResult[2]) {
            if (cResult[5] === tmp4.headerText) {
              let tmp20 = cResult[6];
            }
            if (cResult[7] === tmp4.header) {
              if (cResult[8] === tmp20) {
                let tmp23 = cResult[9];
              }
              return tmp23;
            }
            const obj2 = { style: tmp4.header, children: tmp20 };
            const tmp26 = __initData2(React4, obj2);
            cResult[7] = tmp4.header;
            cResult[8] = tmp20;
            cResult[9] = tmp26;
            tmp23 = tmp26;
          }
          const obj3 = {
            variant: "text-lg/normal",
            style: tmp4.headerText,
            color: "mobile-text-heading-primary",
            children: cResult[2],
          };
          const tmp22 = __initData2(Text_Text.Text, obj3);
          cResult[4] = cResult[2];
          cResult[5] = tmp4.headerText;
          cResult[6] = tmp22;
          tmp20 = tmp22;
        }
      }
      if (cResult[3] === Symbol.for("react.memo_cache_sentinel")) {
        const fn = function p(children, arg1) {
          return closure_1_13(require("Text/Text").Text, { variant: "heading-xl/bold", children }, arg1);
        };
        cResult[3] = fn;
        let tmp6 = fn;
      } else {
        tmp6 = cResult[3];
      }
      let obj4 = { classification_type: classificationTypeText, classificationHook: tmp6 };
      let tmp8 = null;
      if (null == guildMetadata) {
        const intl = util.intl;
        const formatResult = intl.format(util.t["39jfOz"], obj4);
        cResult[0] = classificationTypeText;
        cResult[1] = guildMetadata;
        cResult[2] = formatResult;
      }
      let member_type;
      if (guildMetadata != tmp8) {
        member_type = guildMetadata.member_type;
      }
      if (member_type === SafetyHubModels.MemberType.OWNER) {
        const intl3 = util.intl;
        const obj5 = {};
        const merged = Object.assign(obj4);
        tmp8 = guildMetadata == tmp8;
        obj4 = undefined;
        if (!tmp8) {
          obj4 = guildMetadata.name;
        }
        obj5.guildName = obj4;
        intl3.format(util.t.X1ngSd, obj5);
      } else {
        const intl2 = util.intl;
        const obj10 = {};
        const merged1 = Object.assign(obj4);
        let name;
        if (guildMetadata != tmp8) {
          name = guildMetadata.name;
        }
        obj10.guildName = name;
        intl2.format(util.t.rmpEPD, obj10);
      }
    }
  : function ClassificationHeader(classificationTypeText) {
      classificationTypeText = classificationTypeText.classificationTypeText;
      const guildMetadata = classificationTypeText.guildMetadata;
      const tmp = closure_16();
      const items = [classificationTypeText, guildMetadata];
      let obj = { style: tmp.header, children: null };
      const memo = noop.useMemo(() => {
        let obj2 = {
          classification_type: classificationTypeText,
          classificationHook(children, arg1) {
            return closure_1_13(
              classificationTypeText(closure_1_2[11]).Text,
              { variant: "heading-xl/bold", children },
              arg1,
            );
          },
        };
        let tmp3 = null;
        if (null != guildMetadata) {
          let member_type;
          if (guildMetadata != tmp3) {
            member_type = guildMetadata.member_type;
          }
          let X1ngSd = require;
          let obj = dependencyMap;
          if (member_type === SafetyHubModels.MemberType.OWNER) {
            const intl3 = X1ngSd(1126).intl;
            X1ngSd = X1ngSd(1126).t.X1ngSd;
            obj = {};
            const merged = Object.assign(obj2);
            tmp3 = guildMetadata == tmp3;
            obj2 = undefined;
            if (!tmp3) {
              obj2 = guildMetadata.name;
            }
            obj.guildName = obj2;
            let formatResult = intl3.format(X1ngSd, obj);
          } else {
            const intl2 = X1ngSd(1126).intl;
            const obj4 = {};
            const merged1 = Object.assign(obj2);
            let name;
            if (guildMetadata != tmp3) {
              name = guildMetadata.name;
            }
            obj4.guildName = name;
            formatResult = intl2.format(X1ngSd(1126).t.rmpEPD, obj4);
          }
        } else {
          const intl = util.intl;
          return intl.format(util.t["39jfOz"], obj2);
        }
      }, items);
      obj.children = closure_13(classificationTypeText(5087).Text, {
        variant: "text-lg/normal",
        style: tmp.headerText,
        color: "mobile-text-heading-primary",
        children: memo,
      });
      return closure_13(closure_4, obj);
    };
ReactCompilerGating = fn(558);
let closure_18 = ReactCompilerGating.isReactCompilerEnabled()
  ? function SectionHeader(arg0) {
      const cResult = c.c(3);
      ({ children, plain } = arg0);
      if (cResult[0] === children) {
        if (cResult[1] === tmp4) {
          return cResult[2];
        }
      }
      if (undefined !== plain && plain) {
        const obj2 = { variant: "text-sm/medium", color: "text-subtle", children };
        let obj3 = obj2;
      } else {
        obj3 = { variant: "eyebrow", color: "text-muted", children };
      }
      cResult[0] = children;
      cResult[1] = undefined !== plain && plain;
      cResult[2] = __initData2(Text_Text.Text, obj3);
      const tmp5Result = __initData2(Text_Text.Text, obj3);
    }
  : function SectionHeader(arg0) {
      ({ children, plain } = arg0);
      if (plain === undefined) {
        plain = false;
      }
      if (plain) {
        const obj2 = { variant: "text-sm/medium", color: "text-subtle", children };
        let obj = obj2;
      } else {
        obj = { variant: "eyebrow", color: "text-muted", children };
      }
      return __initData2(Text_Text.Text, obj);
    };
ReactCompilerGating = fn(558);
let closure_19 = ReactCompilerGating.isReactCompilerEnabled()
  ? function BulletRow(arg0) {
      const cResult = c.c(10);
      ({ children, large } = arg0);
      const tmp5 = closure_16();
      let str = "text-xs/normal";
      if (tmp4) {
        str = "text-md/medium";
      }
      if (cResult[0] !== str) {
        const obj2 = { variant: str, children: [" ", "\u2022"] };
        const tmp8 = state(Text_Text.Text, obj2);
        cResult[0] = str;
        cResult[1] = tmp8;
        let tmp6 = tmp8;
      } else {
        tmp6 = cResult[1];
      }
      if (cResult[2] === children) {
        if (cResult[3] === tmp5.bulletText) {
          if (cResult[4] === str) {
            let tmp9 = cResult[5];
          }
          if (cResult[6] === tmp5.classificationActionDescription) {
            if (cResult[7] === tmp6) {
              if (cResult[8] === tmp9) {
                let tmp11 = cResult[9];
              }
              return tmp11;
            }
          }
          const obj3 = { style: tmp5.classificationActionDescription, children: null };
          const items = [tmp6, tmp9];
          obj3.children = items;
          const tmp14 = state(React4, obj3);
          cResult[6] = tmp5.classificationActionDescription;
          cResult[7] = tmp6;
          cResult[8] = tmp9;
          cResult[9] = tmp14;
          tmp11 = tmp14;
        }
      }
      const tmp10 = __initData2(Text_Text.Text, { variant: str, style: tmp5.bulletText, children });
      cResult[2] = children;
      cResult[3] = tmp5.bulletText;
      cResult[4] = str;
      cResult[5] = tmp10;
      tmp9 = tmp10;
      const obj4 = { variant: str, style: tmp5.bulletText, children };
      tmp4 = undefined !== large && large;
    }
  : function BulletRow(children) {
      let flag = children.large;
      if (flag === undefined) {
        flag = false;
      }
      const tmp = closure_16();
      let str = "text-xs/normal";
      if (flag) {
        str = "text-md/medium";
      }
      const obj = { style: tmp.classificationActionDescription, children: null };
      const items = [
        state(Text_Text.Text, { variant: str, children: [" ", "\u2022"] }),
        __initData2(Text_Text.Text, { variant: str, style: tmp.bulletText, children: children.children }),
      ];
      obj.children = items;
      return state(React4, obj);
    };
ReactCompilerGating = fn(558);
let closure_20 = ReactCompilerGating.isReactCompilerEnabled()
  ? function ClassificationActionsTaken(arg0) {
      const cResult = redesigned(576).c(33);
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
      const obj = redesigned(576);
      const stateFromStores = redesigned(504).useStateFromStores(tmp4, tmp5);
      const tmp8 = closure_16();
      if (cResult[2] === actions) {
        if (cResult[3] === classificationExpiration) {
          if (cResult[4] === redesigned) {
            if (cResult[5] === tmp8) {
              let tmp15 = cResult[12];
            }
            const _Symbol = Symbol;
            if (tmp15 !== Symbol.for("react.early_return_sentinel")) {
              return tmp15;
            } else {
              if (cResult[19] === classificationExpiration) {
                if (cResult[20] === stateFromStores) {
                  if (cResult[21] === redesigned) {
                    let tmp26 = cResult[22];
                  }
                  if (cResult[23] === tmp9) {
                    if (cResult[24] === tmp11) {
                      if (cResult[25] === tmp12) {
                        if (cResult[26] === tmp26) {
                          let tmp30 = cResult[27];
                        }
                        if (cResult[28] === tmp10) {
                          if (cResult[29] === tmp13) {
                            if (cResult[30] === tmp14) {
                            }
                          }
                        }
                        const obj2 = { style: tmp13, children: null };
                        const items1 = [tmp14, tmp30];
                        obj2.children = items1;
                        const tmp35 = closure_14(tmp10, obj2);
                        cResult[28] = tmp10;
                        cResult[29] = tmp13;
                        cResult[30] = tmp14;
                        cResult[31] = tmp30;
                        cResult[32] = tmp35;
                      }
                    }
                  }
                  const obj4 = { style: tmp11, children: null };
                  const items2 = [tmp12, tmp26];
                  obj4.children = items2;
                  const tmp32 = closure_14(tmp9, obj4);
                  cResult[23] = tmp9;
                  cResult[24] = tmp11;
                  cResult[25] = tmp12;
                  cResult[26] = tmp26;
                  cResult[27] = tmp32;
                  tmp30 = tmp32;
                }
              }
              let tmp27 = null;
              if (null != classificationExpiration) {
                const obj5 = { large: redesigned, children: null };
                const intl = redesigned(1126).intl;
                const obj6 = {
                  expirationDate: classificationExpiration.toLocaleDateString(stateFromStores, { dateStyle: "medium" }),
                };
                obj5.children = intl.format(redesigned(1126).t.TByIjT, obj6);
                tmp27 = closure_13(closure_19, obj5, "expiration");
              }
              cResult[19] = classificationExpiration;
              cResult[20] = stateFromStores;
              cResult[21] = redesigned;
              cResult[22] = tmp27;
              tmp26 = tmp27;
            }
          }
        }
      }
      Symbol.for("react.early_return_sentinel");
      if (cResult[13] === Symbol.for("react.memo_cache_sentinel")) {
        class R {
          constructor(arg0) {
            return arg0.descriptions.length > 0;
          }
        }
        cResult[13] = R;
      } else {
        class R {
          constructor(arg0) {
            return arg0.descriptions.length > 0;
          }
        }
      }
      const found = actions.filter(R);
      if (0 === found.length) {
        class R {
          constructor(arg0) {
            return arg0.descriptions.length > 0;
          }
        }
        if (null == classificationExpiration) {
          class R {
            constructor(arg0) {
              return arg0.descriptions.length > 0;
            }
          }
          cResult[2] = actions;
          cResult[3] = classificationExpiration;
          cResult[4] = redesigned;
          cResult[5] = tmp8;
          cResult[6] = undefined;
          cResult[7] = undefined;
          cResult[8] = undefined;
          cResult[9] = undefined;
          cResult[10] = undefined;
          cResult[11] = undefined;
          cResult[12] = null;
          tmp15 = null;
        }
      }
      const sectionContainer = tmp8.sectionContainer;
      if (cResult[14] === Symbol.for("react.memo_cache_sentinel")) {
        class R {
          constructor(arg0) {
            return arg0.descriptions.length > 0;
          }
        }
        const stringResult = obj3.string(redesigned(1126).t["O2nYk+"]);
        cResult[14] = stringResult;
        const tmp19 = stringResult;
      } else {
        class R {
          constructor(arg0) {
            return arg0.descriptions.length > 0;
          }
        }
      }
      if (cResult[15] !== redesigned) {
        class R {
          constructor(arg0) {
            return arg0.descriptions.length > 0;
          }
        }
        const obj7 = { plain: redesigned, children: tmp19 };
        const tmp23 = closure_13(closure_18, obj7);
        cResult[15] = redesigned;
        cResult[16] = tmp23;
      } else {
        class R {
          constructor(arg0) {
            return arg0.descriptions.length > 0;
          }
        }
      }
      const actionsTaken = tmp8.actionsTaken;
      if (cResult[17] !== redesigned) {
        class M {
          constructor(arg0) {
            obj = { action: arg0, large: redesigned };
            return jsx(ClassificationActionsTakenRows, obj, arg0.id);
          }
        }
        cResult[17] = redesigned;
        cResult[18] = M;
      } else {
        class M {
          constructor(arg0) {
            obj = { action: arg0, large: redesigned };
            return jsx(ClassificationActionsTakenRows, obj, arg0.id);
          }
        }
      }
      const mapped = found.map(M);
      const tmpResult = redesigned(504);
    }
  : function ClassificationActionsTaken(arg0) {
      ({ actions, classificationExpiration, redesigned } = arg0);
      const items = [LocaleStore];
      const stateFromStores = redesigned(504).useStateFromStores(items, () => locale.locale);
      const tmp4 = closure_16();
      const found = actions.filter((descriptions) => descriptions.descriptions.length > 0);
      if (0 !== found.length) {
        const obj2 = { style: tmp4.sectionContainer, children: null };
        const obj3 = { plain: redesigned, children: null };
        const intl = redesigned(1126).intl;
        obj3.children = intl.string(redesigned(1126).t["O2nYk+"]);
        const items1 = [closure_13(closure_18, obj3)];
        const obj4 = { style: tmp4.actionsTaken, children: null };
        const items2 = [found.map((action) => __initData2(closure_22, { action, large: redesigned }, action.id))];
        let tmp8Result = null;
        if (null != classificationExpiration) {
          const obj5 = { large: redesigned, children: null };
          const intl2 = redesigned(1126).intl;
          const obj6 = {
            expirationDate: classificationExpiration.toLocaleDateString(stateFromStores, { dateStyle: "medium" }),
          };
          obj5.children = intl2.format(redesigned(1126).t.TByIjT, obj6);
          tmp8Result = closure_13(closure_19, obj5, "expiration");
        }
        items2[1] = tmp8Result;
        obj4.children = items2;
        items1[1] = closure_14(closure_4, obj4);
        obj2.children = items1;
        let tmp6Result = closure_14(closure_4, obj2);
      } else {
        tmp6Result = null;
      }
      return tmp6Result;
    };
ReactCompilerGating = fn(558);
let closure_21 = ReactCompilerGating.isReactCompilerEnabled()
  ? function ManualReviewDecidedUnderageActionsTaken() {
      const cResult = c.c(7);
      const tmp4 = closure_16();
      if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
        const obj2 = { plain: true, children: null };
        const intl = util.intl;
        obj2.children = intl.string(util.t["O2nYk+"]);
        const tmp8 = __initData2(closure_18, obj2);
        cResult[0] = tmp8;
        let first = tmp8;
      } else {
        first = cResult[0];
      }
      if (cResult[1] === Symbol.for("react.memo_cache_sentinel")) {
        const obj3 = { large: true, children: null };
        const intl2 = util.intl;
        obj3.children = intl2.string(_modDef3181.rn3Gto);
        const tmp13 = __initData2(closure_19, obj3);
        cResult[1] = tmp13;
        let tmp9 = tmp13;
      } else {
        tmp9 = cResult[1];
      }
      if (cResult[2] !== tmp4.actionsTaken) {
        const obj4 = { style: tmp4.actionsTaken, children: tmp9 };
        const tmp17 = __initData2(React4, obj4);
        cResult[2] = tmp4.actionsTaken;
        cResult[3] = tmp17;
        let tmp14 = tmp17;
      } else {
        tmp14 = cResult[3];
      }
      if (cResult[4] === tmp4.sectionContainer) {
        if (cResult[5] === tmp14) {
          let tmp18 = cResult[6];
        }
        return tmp18;
      }
      const obj5 = { style: tmp4.sectionContainer, children: null };
      const items = [first, tmp14];
      obj5.children = items;
      const tmp19 = state(React4, obj5);
      cResult[4] = tmp4.sectionContainer;
      cResult[5] = tmp14;
      cResult[6] = tmp19;
      tmp18 = tmp19;
    }
  : function ManualReviewDecidedUnderageActionsTaken() {
      const tmp = closure_16();
      const obj = { style: tmp.sectionContainer, children: null };
      const obj2 = { plain: true, children: null };
      const intl = util.intl;
      obj2.children = intl.string(util.t["O2nYk+"]);
      const items = [__initData2(closure_18, obj2)];
      const obj3 = { style: tmp.actionsTaken, children: null };
      const obj4 = { large: true, children: null };
      const intl2 = util.intl;
      obj4.children = intl2.string(_modDef3181.rn3Gto);
      obj3.children = __initData2(closure_19, obj4);
      items[1] = __initData2(React4, obj3);
      obj.children = items;
      return state(React4, obj);
    };
ReactCompilerGating = fn(558);
let closure_22 = ReactCompilerGating.isReactCompilerEnabled()
  ? function ClassificationActionsTakenRows(arg0) {
      const cResult = large(576).c(7);
      ({ action, large } = arg0);
      if (cResult[0] === action.descriptions) {
        if (cResult[1] === large) {
          if (cResult[5] !== cResult[2]) {
            const obj2 = { children: tmp2 };
            const tmp8 = closure_13(closure_15, obj2);
            cResult[5] = tmp2;
            cResult[6] = tmp8;
            let tmp5 = tmp8;
          } else {
            tmp5 = cResult[6];
          }
          return tmp5;
        }
      }
      if (cResult[3] !== large) {
        const fn = function o(children, arg1) {
          return __initData2(closure_19, { large, children }, arg1);
        };
        cResult[3] = large;
        cResult[4] = fn;
        let tmp3 = fn;
      } else {
        tmp3 = cResult[4];
      }
      const descriptions = action.descriptions;
      const mapped = descriptions.map(tmp3);
      action = action.descriptions;
      cResult[0] = action;
      cResult[1] = large;
      cResult[2] = mapped;
      const obj = large(576);
    }
  : function ClassificationActionsTakenRows(large) {
      large = large.large;
      const obj = { children: null };
      const descriptions = large.action.descriptions;
      obj.children = descriptions.map((children, index) => __initData2(closure_19, { large, children }, index));
      return closure_13(closure_15, obj);
    };
ReactCompilerGating = fn(558);
let closure_23 = ReactCompilerGating.isReactCompilerEnabled()
  ? function ManualReviewDecidedUnderageGuidance() {
      const cResult = c.c(7);
      const tmp4 = closure_16();
      if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
        const obj2 = { plain: true, children: null };
        const intl = util.intl;
        obj2.children = intl.string(util.t["977iei"]);
        const tmp8 = __initData2(closure_18, obj2);
        cResult[0] = tmp8;
        let first = tmp8;
      } else {
        first = cResult[0];
      }
      if (cResult[1] === Symbol.for("react.memo_cache_sentinel")) {
        const obj3 = { large: true, children: null };
        const intl2 = util.intl;
        obj3.children = intl2.string(_modDef3181["yV/t/V"]);
        const tmp13 = __initData2(closure_19, obj3);
        cResult[1] = tmp13;
        let tmp9 = tmp13;
      } else {
        tmp9 = cResult[1];
      }
      if (cResult[2] !== tmp4.actionsTaken) {
        const obj4 = { style: tmp4.actionsTaken, children: tmp9 };
        const tmp17 = __initData2(React4, obj4);
        cResult[2] = tmp4.actionsTaken;
        cResult[3] = tmp17;
        let tmp14 = tmp17;
      } else {
        tmp14 = cResult[3];
      }
      if (cResult[4] === tmp4.sectionContainer) {
        if (cResult[5] === tmp14) {
          let tmp18 = cResult[6];
        }
        return tmp18;
      }
      const obj5 = { style: tmp4.sectionContainer, children: null };
      const items = [first, tmp14];
      obj5.children = items;
      const tmp19 = state(React4, obj5);
      cResult[4] = tmp4.sectionContainer;
      cResult[5] = tmp14;
      cResult[6] = tmp19;
      tmp18 = tmp19;
    }
  : function ManualReviewDecidedUnderageGuidance() {
      const tmp = closure_16();
      const obj = { style: tmp.sectionContainer, children: null };
      const obj2 = { plain: true, children: null };
      const intl = util.intl;
      obj2.children = intl.string(util.t["977iei"]);
      const items = [__initData2(closure_18, obj2)];
      const obj3 = { style: tmp.actionsTaken, children: null };
      const obj4 = { large: true, children: null };
      const intl2 = util.intl;
      obj4.children = intl2.string(_modDef3181["yV/t/V"]);
      obj3.children = __initData2(closure_19, obj4);
      items[1] = __initData2(React4, obj3);
      obj.children = items;
      return state(React4, obj);
    };
ReactCompilerGating = fn(558);
let closure_24 = ReactCompilerGating.isReactCompilerEnabled()
  ? function ClassificationGuidance(arg0) {
      const cResult = c.c(14);
      ({ tosLink, communityGuidelinesLink, classificationTypeText, policyExplainerLink, appealComponent } = arg0);
      const tmp4 = closure_16();
      if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
        const obj2 = { variant: "eyebrow", color: "text-muted", children: null };
        const intl = util.intl;
        obj2.children = intl.string(util.t["977iei"]);
        const tmp7 = __initData2(Text_Text.Text, obj2);
        cResult[0] = tmp7;
        let first = tmp7;
      } else {
        first = cResult[0];
      }
      if (cResult[1] === communityGuidelinesLink) {
        if (cResult[2] === tosLink) {
          let tmp8 = cResult[3];
        }
        if (cResult[4] !== tmp8) {
          const obj3 = { variant: "text-sm/normal", children: tmp8 };
          const tmp12 = __initData2(Text_Text.Text, obj3);
          cResult[4] = tmp8;
          cResult[5] = tmp12;
          let tmp10 = tmp12;
        } else {
          tmp10 = cResult[5];
        }
        if (cResult[6] === classificationTypeText) {
          if (cResult[7] === policyExplainerLink) {
            let tmp13 = cResult[8];
          }
          if (cResult[9] === appealComponent) {
            if (cResult[10] === tmp4.sectionContainer) {
              if (cResult[11] === tmp10) {
                if (cResult[12] === tmp13) {
                  let tmp17 = cResult[13];
                }
                return tmp17;
              }
            }
          }
          const obj4 = { style: tmp4.sectionContainer, children: null };
          const items = [first, tmp10, tmp13, appealComponent];
          obj4.children = items;
          const tmp20 = state(React4, obj4);
          cResult[9] = appealComponent;
          cResult[10] = tmp4.sectionContainer;
          cResult[11] = tmp10;
          cResult[12] = tmp13;
          cResult[13] = tmp20;
          tmp17 = tmp20;
        }
        const obj5 = { classificationTypeText, policyExplainerLink };
        const tmp16 = __initData2(ClassificationPolicyCard, obj5);
        cResult[6] = classificationTypeText;
        cResult[7] = policyExplainerLink;
        cResult[8] = tmp16;
        tmp13 = tmp16;
      }
      const intl2 = util.intl;
      const formatResult = intl2.format(util.t["1Z/+aA"], { tosLink, communityGuidelinesLink });
      cResult[1] = communityGuidelinesLink;
      cResult[2] = tosLink;
      cResult[3] = formatResult;
      tmp8 = formatResult;
    }
  : function ClassificationGuidance(arg0) {
      ({ tosLink, communityGuidelinesLink, classificationTypeText, policyExplainerLink, appealComponent } = arg0);
      const obj = { style: closure_16().sectionContainer, children: null };
      const obj2 = { variant: "eyebrow", color: "text-muted", children: null };
      const intl = util.intl;
      obj2.children = intl.string(util.t["977iei"]);
      const items = [__initData2(Text_Text.Text, obj2), , ,];
      const obj3 = { variant: "text-sm/normal", children: null };
      const intl2 = util.intl;
      obj3.children = intl2.format(util.t["1Z/+aA"], { tosLink, communityGuidelinesLink });
      items[1] = __initData2(Text_Text.Text, obj3);
      items[2] = __initData2(ClassificationPolicyCard, { classificationTypeText, policyExplainerLink });
      items[3] = appealComponent;
      obj.children = items;
      return state(React4, obj);
    };
ReactCompilerGating = fn(558);
let closure_25 = ReactCompilerGating.isReactCompilerEnabled();
ReactCompilerGating = fn(558);
let closure_27 = ReactCompilerGating.isReactCompilerEnabled()
  ? function AppealStatus() {
      const cResult = c.c(1);
      if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
        const obj2 = { variant: "text-md/normal", color: "text-muted", children: null };
        const intl = util.intl;
        obj2.children = intl.string(util.t["I2H0/E"]);
        const tmp6 = __initData2(Text_Text.Text, obj2);
        cResult[0] = tmp6;
        let first = tmp6;
      } else {
        first = cResult[0];
      }
      return first;
    }
  : function AppealStatus() {
      const obj = { variant: "text-md/normal", color: "text-muted", children: null };
      const intl = util.intl;
      obj.children = intl.string(util.t["I2H0/E"]);
      return __initData2(Text_Text.Text, obj);
    };
ReactCompilerGating = fn(558);
let closure_28 = ReactCompilerGating.isReactCompilerEnabled()
  ? function LetUsKnow(onPressLetUsKnow) {
      _require = onPressLetUsKnow;
      const cResult = require("c").c(4);
      if (cResult[0] !== onPressLetUsKnow.onPressLetUsKnow) {
        const intl = tmp(1126).intl;
        const obj2 = {
          letUsKnowHook(children, arg1) {
            return __initData2(
              Text_Text.Text,
              { onPress: onPressLetUsKnow.onPressLetUsKnow, variant: "text-sm/normal", color: "text-link", children },
              arg1,
            );
          },
        };
        const formatResult = intl.format(tmp(1126).t.IFxUaT, obj2);
        cResult[0] = onPressLetUsKnow.onPressLetUsKnow;
        cResult[1] = formatResult;
        let tmp4 = formatResult;
      } else {
        tmp4 = cResult[1];
      }
      if (cResult[2] !== tmp4) {
        const obj3 = { variant: "text-sm/normal", color: "text-muted", children: tmp4 };
        const tmp8 = closure_13(tmp(5087).Text, obj3);
        cResult[2] = tmp4;
        cResult[3] = tmp8;
        let tmp6 = tmp8;
      } else {
        tmp6 = cResult[3];
      }
      return tmp6;
    }
  : function LetUsKnow(arg0) {
      _require = arg0;
      const obj = { variant: "text-sm/normal", color: "text-muted", children: null };
      const intl = require("util").intl;
      obj.children = intl.format(require("util").t.IFxUaT, {
        letUsKnowHook(children, arg1) {
          return __initData2(
            Text_Text.Text,
            { onPress: onPressLetUsKnow.onPressLetUsKnow, variant: "text-sm/normal", color: "text-link", children },
            arg1,
          );
        },
      });
      return closure_13(require("Text/Text").Text, obj);
    };
ReactCompilerGating = fn(558);
let closure_29 = ReactCompilerGating.isReactCompilerEnabled()
  ? function AppealFooter(hasBeenAppealed) {
      onPressLetUsKnow = hasBeenAppealed;
      const cResult = c.c(6);
      const tmp2 = closure_16();
      if (cResult[0] === hasBeenAppealed.hasBeenAppealed) {
        if (cResult[1] === onPressLetUsKnow.onPressLetUsKnow) {
          if (cResult[3] === tmp2.letUsKnowContainer) {
            if (cResult[4] === tmp3) {
              let tmp8 = cResult[5];
            }
            return tmp8;
          }
          const obj2 = { style: tmp2.letUsKnowContainer, children: cResult[2] };
          const tmp11 = __initData2(React4, obj2);
          cResult[3] = tmp2.letUsKnowContainer;
          cResult[4] = cResult[2];
          cResult[5] = tmp11;
          tmp8 = tmp11;
        }
      }
      if (onPressLetUsKnow.hasBeenAppealed) {
        let tmp4Result = __initData2(closure_27, {});
      } else {
        const obj3 = { onPressLetUsKnow: onPressLetUsKnow.onPressLetUsKnow };
        tmp4Result = __initData2(closure_28, obj3);
      }
      ({ hasBeenAppealed: tmp[0], onPressLetUsKnow } = onPressLetUsKnow);
      cResult[1] = onPressLetUsKnow;
      cResult[2] = tmp4Result;
    }
  : function AppealFooter(hasBeenAppealed) {
      const obj = { style: closure_16().letUsKnowContainer, children: null };
      if (hasBeenAppealed.hasBeenAppealed) {
        let tmpResult = __initData2(closure_27, {});
      } else {
        const obj2 = { onPressLetUsKnow: hasBeenAppealed.onPressLetUsKnow };
        tmpResult = __initData2(closure_28, obj2);
      }
      obj.children = tmpResult;
      return __initData2(React4, obj);
    };
ReactCompilerGating = fn(558);
let closure_30 = ReactCompilerGating.isReactCompilerEnabled()
  ? function ConfirmMinimumAgeGuidance(arg0) {
      const cResult = c.c(14);
      ({ tosLink, communityGuidelinesLink, onPressLetUsKnow } = arg0);
      const tmp4 = closure_16();
      if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
        const obj2 = { plain: true, children: null };
        const intl = util.intl;
        obj2.children = intl.string(util.t.RVEiD0);
        const tmp8 = __initData2(closure_18, obj2);
        cResult[0] = tmp8;
        let first = tmp8;
      } else {
        first = cResult[0];
      }
      if (cResult[1] === Symbol.for("react.memo_cache_sentinel")) {
        const intl2 = util.intl;
        const stringResult = intl2.string(util.t.YQPbuc);
        cResult[1] = stringResult;
        let tmp9 = stringResult;
      } else {
        tmp9 = cResult[1];
      }
      if (cResult[2] !== onPressLetUsKnow) {
        const obj3 = { label: tmp9, onPress: onPressLetUsKnow, arrow: true, start: true, end: true };
        const tmp13 = __initData2(TableRow.TableRow, obj3);
        cResult[2] = onPressLetUsKnow;
        cResult[3] = tmp13;
        let tmp11 = tmp13;
      } else {
        tmp11 = cResult[3];
      }
      if (cResult[4] === communityGuidelinesLink) {
        if (cResult[5] === tosLink) {
          let tmp15 = cResult[6];
        }
        if (cResult[7] === tmp4.guidelinesFooter) {
          if (cResult[8] === tmp15) {
            let tmp17 = cResult[9];
          }
          if (cResult[10] === tmp4.confirmMinimumAgeSection) {
            if (cResult[11] === tmp11) {
              if (cResult[12] === tmp17) {
                let tmp20 = cResult[13];
              }
              return tmp20;
            }
          }
          const obj4 = { style: tmp4.confirmMinimumAgeSection, children: null };
          const items = [first, tmp11, tmp17];
          obj4.children = items;
          const tmp23 = state(React4, obj4);
          cResult[10] = tmp4.confirmMinimumAgeSection;
          cResult[11] = tmp11;
          cResult[12] = tmp17;
          cResult[13] = tmp23;
          tmp20 = tmp23;
        }
        const obj5 = { variant: "text-sm/normal", color: "text-muted", style: tmp14, children: tmp15 };
        const tmp19 = __initData2(Text_Text.Text, obj5);
        cResult[7] = tmp4.guidelinesFooter;
        cResult[8] = tmp15;
        cResult[9] = tmp19;
        tmp17 = tmp19;
      }
      const intl3 = util.intl;
      const formatResult = intl3.format(util.t["1Z/+aA"], { tosLink, communityGuidelinesLink });
      cResult[4] = communityGuidelinesLink;
      cResult[5] = tosLink;
      cResult[6] = formatResult;
      tmp15 = formatResult;
    }
  : function ConfirmMinimumAgeGuidance(arg0) {
      ({ tosLink, communityGuidelinesLink, onPressLetUsKnow } = arg0);
      const tmp = closure_16();
      const obj = { style: tmp.confirmMinimumAgeSection, children: null };
      const obj2 = { plain: true, children: null };
      const intl = util.intl;
      obj2.children = intl.string(util.t.RVEiD0);
      const items = [__initData2(closure_18, obj2), ,];
      const obj3 = { label: null, onPress: null, arrow: true, start: true, end: true };
      const intl2 = util.intl;
      obj3.label = intl2.string(util.t.YQPbuc);
      obj3.onPress = onPressLetUsKnow;
      items[1] = __initData2(TableRow.TableRow, obj3);
      const obj4 = { variant: "text-sm/normal", color: "text-muted", style: tmp.guidelinesFooter, children: null };
      const intl3 = util.intl;
      obj4.children = intl3.format(util.t["1Z/+aA"], { tosLink, communityGuidelinesLink });
      items[2] = __initData2(Text_Text.Text, obj4);
      obj.children = items;
      return state(React4, obj);
    };
ReactCompilerGating = fn(558);
let closure_31 = ReactCompilerGating.isReactCompilerEnabled()
  ? function ManualReviewDecidedUnderageFooter(arg0) {
      const cResult = c.c(5);
      ({ tosLink, communityGuidelinesLink } = arg0);
      if (cResult[0] === communityGuidelinesLink) {
        if (cResult[1] === tosLink) {
          let tmp4 = cResult[2];
        }
        if (cResult[3] !== tmp4) {
          const obj2 = { variant: "text-sm/normal", color: "text-muted", children: tmp4 };
          const tmp8 = __initData2(Text_Text.Text, obj2);
          cResult[3] = tmp4;
          cResult[4] = tmp8;
          let tmp6 = tmp8;
        } else {
          tmp6 = cResult[4];
        }
        return tmp6;
      }
      const intl = util.intl;
      const formatResult = intl.format(_modDef3181.vPOpia, { tosLink, communityGuidelinesLink });
      cResult[0] = communityGuidelinesLink;
      cResult[1] = tosLink;
      cResult[2] = formatResult;
      tmp4 = formatResult;
    }
  : function ManualReviewDecidedUnderageFooter(arg0) {
      ({ tosLink, communityGuidelinesLink } = arg0);
      const obj = { variant: "text-sm/normal", color: "text-muted", children: null };
      const intl = util.intl;
      obj.children = intl.format(_modDef3181.vPOpia, { tosLink, communityGuidelinesLink });
      return __initData2(Text_Text.Text, obj);
    };
ReactCompilerGating = fn(558);
let closure_32 = ReactCompilerGating.isReactCompilerEnabled()
  ? function ManualReviewDecidedUnderageView() {
      const cResult = c.c(1);
      if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
        const obj2 = { children: null };
        const items = [__initData2(closure_21, {}), __initData2(closure_23, {})];
        ({ TOS_LINK: obj3.tosLink, COMMUNITY_GUIDELINES: obj3.communityGuidelinesLink } = constants);
        items[2] = __initData2(closure_31, { tosLink: null, communityGuidelinesLink: null });
        obj2.children = items;
        const tmp10 = state(closure_1_15, obj2);
        cResult[0] = tmp10;
        let first = tmp10;
        const obj5 = { tosLink: null, communityGuidelinesLink: null };
      } else {
        first = cResult[0];
      }
      return first;
    }
  : function ManualReviewDecidedUnderageView() {
      const obj = { children: null };
      const items = [
        __initData2(closure_21, {}),
        __initData2(closure_23, {}),
        __initData2(closure_31, {
          tosLink: constants.TOS_LINK,
          communityGuidelinesLink: constants.COMMUNITY_GUIDELINES,
        }),
      ];
      obj.children = items;
      return state(closure_1_15, obj);
    };
ReactCompilerGating = fn(558);
let closure_33 = ReactCompilerGating.isReactCompilerEnabled()
  ? function ClassificationDetailFooter(onClose) {
      const cResult = c.c(6);
      onClose = onClose.onClose;
      const tmp4 = closure_16();
      if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
        const intl = util.intl;
        const stringResult = intl.string(util.t.elrEjL);
        cResult[0] = stringResult;
        let first = stringResult;
      } else {
        first = cResult[0];
      }
      if (cResult[1] !== onClose) {
        const obj2 = { size: "md", text: first, onPress: onClose, grow: true };
        const tmp9 = __initData2(components_Button_Button.Button, obj2);
        cResult[1] = onClose;
        cResult[2] = tmp9;
        let tmp7 = tmp9;
      } else {
        tmp7 = cResult[2];
      }
      if (cResult[3] === tmp4.redirectButtonWrapper) {
        if (cResult[4] === tmp7) {
          let tmp10 = cResult[5];
        }
        return tmp10;
      }
      const tmp11 = __initData2(React4, { style: tmp4.redirectButtonWrapper, children: tmp7 });
      cResult[3] = tmp4.redirectButtonWrapper;
      cResult[4] = tmp7;
      cResult[5] = tmp11;
      tmp10 = tmp11;
    }
  : function ClassificationDetailFooter(onClose) {
      const obj = { style: closure_16().redirectButtonWrapper, children: null };
      const obj2 = { size: "md", text: null, onPress: null, grow: true };
      const intl = util.intl;
      obj2.text = intl.string(util.t.elrEjL);
      obj2.onPress = onClose.onClose;
      obj.children = __initData2(components_Button_Button.Button, obj2);
      return __initData2(React4, obj);
    };
ReactCompilerGating = fn(558);
let obj13 = { width: 300, alignSelf: "center", marginTop: nativeDefault.space.PX_32 };
size = fn(2);
const result = size.fileFinishedImporting("modules/safety_hub/native/ClassificationDetail.tsx");

export default ReactCompilerGating.isReactCompilerEnabled()
  ? function ConnectedClassificationDetail(classificationId) {
      const cResult = classificationId(onClose[10]).c(45);
      classificationId = classificationId.classificationId;
      const source = classificationId.source;
      onClose = classificationId.onClose;
      let obj = classificationId(onClose[10]);
      const safetyHubClassification = classificationId(onClose[21]).useSafetyHubClassification(classificationId);
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
      const obj2 = classificationId(onClose[21]);
      const stateFromStores = classificationId(onClose[14]).useStateFromStores(tmp6, tmp7);
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
      let tmpResult = classificationId(onClose[14]);
      const safetyHubAccountStanding = classificationId(onClose[22]).useSafetyHubAccountStanding();
      if (cResult[2] === stateFromStores) {
        let is_coppa;
        if (classification != null) {
          is_coppa = classification.is_coppa;
        }
        if (cResult[3] === is_coppa) {
          let tmp14 = cResult[4];
        }
        closure_8 = tmp14;
        if (cResult[5] === stateFromStores) {
          let is_coppa1;
          if (classification != null) {
            is_coppa1 = classification.is_coppa;
          }
          if (cResult[6] === is_coppa1) {
            let tmp19 = cResult[7];
          }
          closure_9 = tmp19;
          let isExpressiveModalV2Enabled = tmp19;
          if (tmp19) {
            isExpressiveModalV2Enabled = tmpResult6.useIsExpressiveModalV2Enabled(
              tmp(tmp2[24]).AgeVerificationModalEntryPoint.AUTOMATED_UNDERAGE_APPEALS,
            );
          }
          const _Symbol = Symbol;
          if (cResult[8] === Symbol.for("react.memo_cache_sentinel")) {
            const items1 = [closure_8];
            const fn2 = function j() {
              return closure_8.getIsManualReviewDecidedUnderage();
            };
            cResult[8] = items1;
            cResult[9] = fn2;
            let tmp25 = fn2;
            let tmp24 = items1;
          } else {
            tmp24 = cResult[8];
            tmp25 = cResult[9];
          }
          tmpResult6 = tmp(tmp2[23]);
          let is_coppa2;
          const stateFromStores1 = tmp(tmp2[14]).useStateFromStores(tmp24, tmp25);
          if (classification != null) {
            is_coppa2 = classification.is_coppa;
          }
          let classificationDetailContainer = is_coppa2 && stateFromStores1;
          if (cResult[10] === safetyHubAccountStanding) {
            if (cResult[11] === classificationId) {
              if (cResult[12] === safetyHubClassification) {
                if (cResult[13] === tmp10) {
                  if (cResult[14] === source) {
                    let tmp29 = cResult[15];
                  }
                  let current = tmp29;
                  const ref = safetyHubClassification.useRef(tmp29);
                  if (cResult[16] !== tmp29) {
                    const fn3 = function $() {
                      closure_11.current = current;
                    };
                    cResult[16] = tmp29;
                    cResult[17] = fn3;
                    let tmp31 = fn3;
                  } else {
                    tmp31 = cResult[17];
                  }
                  const effect = obj9.useEffect(tmp31);
                  if (cResult[18] !== classification) {
                    function ee() {
                      if (null != classification) {
                        current = ref.current;
                        ({ classificationState, source } = current);
                        ({ accountStanding, classificationId, hasFlaggedContent } = current);
                        const obj3 = {
                          action: collapsed.ViewViolationDetail,
                          account_standing: accountStanding.state,
                          classification_ids: null,
                          source: null,
                          is_violative_content_shown: null,
                          is_dsa_eligible: null,
                          violation_type: null,
                        };
                        const _Number = Number;
                        const items = [Number(classificationId)];
                        obj3.classification_ids = items;
                        if (source == null) {
                          source = options.SystemDM;
                        }
                        obj3.source = source;
                        obj3.is_violative_content_shown = hasFlaggedContent;
                        ({ isDsaEligible: obj2.is_dsa_eligible, violationType: obj2.violation_type } =
                          classificationState);
                        AnalyticsUtilsDefault.track(AnalyticEvents.SAFETY_HUB_ACTION, obj3);
                      }
                    }
                    const items2 = [classification];
                    cResult[18] = classification;
                    cResult[19] = ee;
                    cResult[20] = items2;
                    let tmp34 = items2;
                    let tmp33 = ee;
                  } else {
                    tmp33 = cResult[19];
                    tmp34 = cResult[20];
                  }
                  const effect1 = obj9.useEffect(tmp33, tmp34);
                  if (cResult[21] === safetyHubAccountStanding.state) {
                    if (cResult[22] === isAppealEligible) {
                      if (cResult[23] === classificationId) {
                        if (cResult[24] === safetyHubClassification.isDsaEligible) {
                          if (cResult[25] === safetyHubClassification.violationType) {
                            if (cResult[26] === tmp10) {
                              if (cResult[27] === tmp19) {
                                if (cResult[28] === tmp14) {
                                  if (cResult[29] === onClose) {
                                    if (cResult[30] === source) {
                                      let tmp36 = cResult[31];
                                    }
                                    if (null == classification) {
                                      if (
                                        safetyHubClassification.classificationRequestState ===
                                        tmp(tmp2[12]).ClassificationRequestState.FAILED
                                      ) {
                                        classificationId.onError();
                                        let tmp57 = null;
                                      }
                                      return tmp57;
                                    }
                                    if (cResult[32] === classification) {
                                      if (cResult[33] === onClose) {
                                        if (cResult[34] === tmp36) {
                                          if (cResult[35] === classificationDetailContainer) {
                                            if (cResult[36] === tmp5.classificationDetailContainer) {
                                              if (cResult[37] === isExpressiveModalV2Enabled) {
                                                if (cResult[39] === tmp5.container) {
                                                  if (cResult[40] === tmp37) {
                                                    let tmp54 = cResult[41];
                                                  }
                                                  if (cResult[42] === tmp5.root) {
                                                    if (cResult[43] === tmp54) {
                                                      tmp57 = cResult[44];
                                                    }
                                                  }
                                                  let obj3 = { style: tmp5.root, children: tmp54 };
                                                  const tmp60 = closure_13(is_violative_content_shown, obj3);
                                                  cResult[42] = tmp5.root;
                                                  cResult[43] = tmp54;
                                                  cResult[44] = tmp60;
                                                  tmp57 = tmp60;
                                                }
                                                let obj4 = {
                                                  style: tmp5.container,
                                                  bottom: true,
                                                  children: cResult[38],
                                                };
                                                const tmp56 = closure_13(tmp(tmp2[32]).SafeAreaPaddingView, obj4);
                                                cResult[39] = tmp5.container;
                                                cResult[40] = cResult[38];
                                                cResult[41] = tmp56;
                                                tmp54 = tmp56;
                                              }
                                            }
                                          }
                                        }
                                      }
                                    }
                                    if (null == classification) {
                                      let tmp62Result = closure_13(isAppealEligible, { size: "large" });
                                    } else {
                                      let obj5 = { style: tmp5.classificationDetailContainer, children: null };
                                      ({
                                        description: obj21.classificationTypeText,
                                        guild_metadata: obj21.guildMetadata,
                                      } = classification);
                                      const items3 = [
                                        closure_13(closure_17, { classificationTypeText: null, guildMetadata: null }),
                                        ,
                                        ,
                                      ];
                                      let flagged_content1 = classification.flagged_content;
                                      if (flagged_content1 == null) {
                                        flagged_content1 = [];
                                      }
                                      const obj7 = { flaggedContent: flagged_content1 };
                                      items3[1] = closure_13(source(tmp2[30]), obj7);
                                      if (classificationDetailContainer) {
                                        let tmp62Result1 = closure_13(closure_32, {});
                                      } else {
                                        const obj8 = {
                                          actions: classification.actions,
                                          classificationExpiration: tmp(
                                            tmp2[31],
                                          ).getClassificationAccountStatusExpiration(classification),
                                          redesigned: isExpressiveModalV2Enabled,
                                        };
                                        const items4 = [closure_13(closure_20, obj8)];
                                        if (isExpressiveModalV2Enabled) {
                                          const obj10 = {
                                            tosLink: null,
                                            communityGuidelinesLink: null,
                                            onPressLetUsKnow: null,
                                          };
                                          ({
                                            TOS_LINK: obj15.tosLink,
                                            COMMUNITY_GUIDELINES: obj15.communityGuidelinesLink,
                                          } = ref);
                                          obj10.onPressLetUsKnow = tmp36;
                                          let tmp64Result3 = closure_13(closure_30, obj10);
                                        } else {
                                          const obj11 = {
                                            appealLink: null,
                                            communityGuidelinesLink: null,
                                            tosLink: null,
                                            classificationTypeText: null,
                                            policyExplainerLink: null,
                                            appealComponent: null,
                                          };
                                          ({
                                            APPEALS_LINK: obj13.appealLink,
                                            COMMUNITY_GUIDELINES: obj13.communityGuidelinesLink,
                                            TOS_LINK: obj13.tosLink,
                                          } = ref);
                                          ({
                                            description: obj13.classificationTypeText,
                                            explainer_link: obj13.policyExplainerLink,
                                          } = classification);
                                          const obj12 = {
                                            hasBeenAppealed: null != classification.appeal_status,
                                            onPressLetUsKnow: tmp36,
                                          };
                                          obj11.appealComponent = closure_13(closure_29, obj12);
                                          tmp64Result3 = closure_13(closure_24, obj11);
                                        }
                                        const obj14 = { children: null };
                                        items4[1] = tmp64Result3;
                                        obj14.children = items4;
                                        tmp62Result1 = closure_14(closure_15, obj14);
                                        let tmpResult8 = tmp(tmp2[31]);
                                      }
                                      items3[2] = tmp62Result1;
                                      let tmp64Result4 = !isExpressiveModalV2Enabled;
                                      if (!isExpressiveModalV2Enabled) {
                                        const obj16 = { onClose };
                                        tmp64Result4 = closure_13(closure_33, obj16);
                                      }
                                      items3[3] = tmp64Result4;
                                      obj5.children = items3;
                                      tmp62Result = closure_14(classification, obj5);
                                      const obj6 = { classificationTypeText: null, guildMetadata: null };
                                      const tmp67 = source(tmp2[30]);
                                    }
                                    cResult[32] = classification;
                                    cResult[33] = onClose;
                                    cResult[34] = tmp36;
                                    cResult[35] = classificationDetailContainer;
                                    classificationDetailContainer = tmp5.classificationDetailContainer;
                                    cResult[36] = classificationDetailContainer;
                                    cResult[37] = isExpressiveModalV2Enabled;
                                    cResult[38] = tmp62Result;
                                  }
                                }
                              }
                            }
                          }
                        }
                      }
                    }
                  }
                  function onPressLetUsKnow() {
                    const obj3 = {
                      action: collapsed.ClickLetUsKnow,
                      account_standing: safetyHubAccountStanding.state,
                      classification_ids: null,
                      source: null,
                      is_violative_content_shown: null,
                      is_dsa_eligible: null,
                      violation_type: null,
                    };
                    const items = [Number(classificationId)];
                    obj3.classification_ids = items;
                    let SystemDM = source;
                    if (source == null) {
                      SystemDM = options.SystemDM;
                    }
                    obj3.source = SystemDM;
                    obj3.is_violative_content_shown = is_violative_content_shown;
                    ({ isDsaEligible: obj2.is_dsa_eligible, violationType: obj2.violation_type } =
                      safetyHubClassification);
                    AnalyticsUtilsDefault.track(AnalyticEvents.SAFETY_HUB_ACTION, obj3);
                    if (closure_9) {
                      AutomatedUnderageAppealModalActionCreatorsDefault.openV2(classificationId, onClose);
                      const tmpResult = AutomatedUnderageAppealModalActionCreatorsDefault;
                    } else if (closure_8) {
                      AutomatedUnderageAppealModalActionCreatorsDefault.open(classificationId, onClose);
                      const tmpResult5 = AutomatedUnderageAppealModalActionCreatorsDefault;
                    } else if (isAppealEligible) {
                      const obj4 = { name: MetricEvents.MetricEvents.APPEAL_INGESTION_VIEW };
                      MonitoringAgentDefault.increment(obj4);
                      const tmpResult6 = MonitoringAgentDefault;
                      const obj5 = { classificationId };
                      AppealIngestionModalActionCreatorsDefault.open(obj5);
                      const tmpResult7 = AppealIngestionModalActionCreatorsDefault;
                    } else {
                      LinkingDefault.openURL(constants.APPEALS_LINK);
                      const tmpResult8 = LinkingDefault;
                    }
                  }
                  cResult[21] = safetyHubAccountStanding.state;
                  cResult[22] = isAppealEligible;
                  cResult[23] = classificationId;
                  cResult[24] = safetyHubClassification.isDsaEligible;
                  cResult[25] = safetyHubClassification.violationType;
                  cResult[26] = tmp10;
                  cResult[27] = tmp19;
                  cResult[28] = tmp14;
                  cResult[29] = onClose;
                  cResult[30] = source;
                  cResult[31] = onPressLetUsKnow;
                  tmp36 = onPressLetUsKnow;
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
          tmp29 = obj17;
          let tmpResult7 = tmp(tmp2[14]);
        }
        let is_coppa3;
        if (classification != null) {
          is_coppa3 = classification.is_coppa;
        }
        let hasItem = is_coppa3;
        if (hasItem) {
          hasItem = stateFromStores.includes(tmp(tmp2[12]).AppealEligibility.AGE_VERIFY_GLOBAL_ELIGIBLE);
        }
        cResult[5] = stateFromStores;
        let is_coppa4;
        if (classification != null) {
          is_coppa4 = classification.is_coppa;
        }
        cResult[6] = is_coppa4;
        cResult[7] = hasItem;
        tmp19 = hasItem;
      }
      let is_coppa5;
      if (classification != null) {
        is_coppa5 = classification.is_coppa;
      }
      let hasItem1 = is_coppa5;
      if (hasItem1) {
        hasItem1 = stateFromStores.includes(tmp(tmp2[12]).AppealEligibility.AGE_VERIFY_ELIGIBLE);
      }
      cResult[2] = stateFromStores;
      let is_coppa6;
      if (classification != null) {
        is_coppa6 = classification.is_coppa;
      }
      cResult[3] = is_coppa6;
      cResult[4] = hasItem1;
      tmp14 = hasItem1;
      let tmpResult5 = classificationId(onClose[22]);
    }
  : function ConnectedClassificationDetail(classificationId) {
      classificationId = classificationId.classificationId;
      const source = classificationId.source;
      const onClose = classificationId.onClose;
      const safetyHubClassification = classificationId(onClose[21]).useSafetyHubClassification(classificationId);
      const classification = safetyHubClassification.classification;
      const isAppealEligible = safetyHubClassification.isAppealEligible;
      const tmp4 = closure_16();
      let obj = classificationId(onClose[21]);
      let items = [hasItem];
      const stateFromStores = classificationId(onClose[14]).useStateFromStores(items, () =>
        hasItem.getAppealEligibility(),
      );
      let flagged_content;
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
      const obj2 = classificationId(onClose[14]);
      const tmp5 = hasItem;
      const safetyHubAccountStanding = classificationId(onClose[22]).useSafetyHubAccountStanding();
      let is_coppa;
      if (classification != null) {
        is_coppa = classification.is_coppa;
      }
      hasItem = is_coppa;
      if (hasItem) {
        hasItem = stateFromStores.includes(tmp(tmp2[12]).AppealEligibility.AGE_VERIFY_ELIGIBLE);
      }
      let is_coppa1;
      if (classification != null) {
        is_coppa1 = classification.is_coppa;
      }
      let hasItem1 = is_coppa1;
      if (hasItem1) {
        hasItem1 = stateFromStores.includes(tmp(tmp2[12]).AppealEligibility.AGE_VERIFY_GLOBAL_ELIGIBLE);
      }
      let tmpResult = classificationId(onClose[22]);
      if (hasItem1) {
        hasItem1 = tmpResult4.useIsExpressiveModalV2Enabled(
          tmp(tmp2[24]).AgeVerificationModalEntryPoint.AUTOMATED_UNDERAGE_APPEALS,
        );
      }
      tmpResult4 = classificationId(onClose[23]);
      const items1 = [tmp5];
      let is_coppa2;
      const stateFromStores1 = classificationId(onClose[14]).useStateFromStores(items1, () =>
        hasItem.getIsManualReviewDecidedUnderage(),
      );
      if (classification != null) {
        is_coppa2 = classification.is_coppa;
      }
      const ref = safetyHubClassification.useRef({
        accountStanding: safetyHubAccountStanding,
        classificationId,
        classificationState: safetyHubClassification,
        hasFlaggedContent: tmp7,
        source,
      });
      const effect = safetyHubClassification.useEffect(() => {
        closure_11.current = obj3;
      });
      const items2 = [classification];
      const effect1 = safetyHubClassification.useEffect(() => {
        if (null != classification) {
          const current = ref.current;
          ({ classificationState, source } = current);
          ({ accountStanding, classificationId, hasFlaggedContent } = current);
          obj3 = {
            action: collapsed.ViewViolationDetail,
            account_standing: accountStanding.state,
            classification_ids: null,
            source: null,
            is_violative_content_shown: null,
            is_dsa_eligible: null,
            violation_type: null,
          };
          const _Number = Number;
          const items = [Number(classificationId)];
          obj3.classification_ids = items;
          if (source == null) {
            source = options.SystemDM;
          }
          obj3.source = source;
          obj3.is_violative_content_shown = hasFlaggedContent;
          ({ isDsaEligible: obj2.is_dsa_eligible, violationType: obj2.violation_type } = classificationState);
          AnalyticsUtilsDefault.track(AnalyticEvents.SAFETY_HUB_ACTION, obj3);
        }
      }, items2);
      if (null == classification) {
        if (safetyHubClassification.classificationRequestState === tmp(tmp2[12]).ClassificationRequestState.FAILED) {
          classificationId.onError();
          let tmp19Result8 = null;
        }
        return tmp19Result8;
      }
      let obj4 = { style: tmp4.root, children: null };
      let obj5 = { style: tmp4.container, bottom: true, children: null };
      if (null == classification) {
        let tmp37Result = closure_13(isAppealEligible, { size: "large" });
      } else {
        const obj6 = { style: tmp4.classificationDetailContainer, children: null };
        ({ description: obj19.classificationTypeText, guild_metadata: obj19.guildMetadata } = classification);
        const items3 = [closure_13(closure_17, { classificationTypeText: null, guildMetadata: null }), , ,];
        let flagged_content1 = classification.flagged_content;
        if (flagged_content1 == null) {
          flagged_content1 = [];
        }
        const obj8 = { flaggedContent: flagged_content1 };
        items3[1] = closure_13(source(tmp2[30]), obj8);
        if (tmp16) {
          let tmp19Result5 = closure_13(closure_32, {});
        } else {
          function onPressLetUsKnow() {
            obj3 = {
              action: collapsed.ClickLetUsKnow,
              account_standing: safetyHubAccountStanding.state,
              classification_ids: null,
              source: null,
              is_violative_content_shown: null,
              is_dsa_eligible: null,
              violation_type: null,
            };
            const items = [Number(classificationId)];
            obj3.classification_ids = items;
            let SystemDM = source;
            if (source == null) {
              SystemDM = options.SystemDM;
            }
            obj3.source = SystemDM;
            obj3.is_violative_content_shown = is_violative_content_shown;
            ({ isDsaEligible: obj2.is_dsa_eligible, violationType: obj2.violation_type } = safetyHubClassification);
            AnalyticsUtilsDefault.track(AnalyticEvents.SAFETY_HUB_ACTION, obj3);
            if (hasItem1) {
              AutomatedUnderageAppealModalActionCreatorsDefault.openV2(classificationId, onClose);
              const tmpResult = AutomatedUnderageAppealModalActionCreatorsDefault;
            } else if (hasItem) {
              AutomatedUnderageAppealModalActionCreatorsDefault.open(classificationId, onClose);
              const tmpResult5 = AutomatedUnderageAppealModalActionCreatorsDefault;
            } else if (isAppealEligible) {
              const obj4 = { name: MetricEvents.MetricEvents.APPEAL_INGESTION_VIEW };
              MonitoringAgentDefault.increment(obj4);
              const tmpResult6 = MonitoringAgentDefault;
              const obj5 = { classificationId };
              AppealIngestionModalActionCreatorsDefault.open(obj5);
              const tmpResult7 = AppealIngestionModalActionCreatorsDefault;
            } else {
              LinkingDefault.openURL(constants.APPEALS_LINK);
              const tmpResult8 = LinkingDefault;
            }
          }
          const obj9 = {
            actions: classification.actions,
            classificationExpiration: tmp(tmp2[31]).getClassificationAccountStatusExpiration(classification),
            redesigned: hasItem1,
          };
          const items4 = [closure_13(closure_20, obj9)];
          if (hasItem1) {
            const obj10 = { tosLink: null, communityGuidelinesLink: null, onPressLetUsKnow: null };
            ({ TOS_LINK: obj15.tosLink, COMMUNITY_GUIDELINES: obj15.communityGuidelinesLink } = ref);
            obj10.onPressLetUsKnow = onPressLetUsKnow;
            let tmp19Result6 = closure_13(closure_30, obj10);
          } else {
            const obj11 = {
              appealLink: null,
              communityGuidelinesLink: null,
              tosLink: null,
              classificationTypeText: null,
              policyExplainerLink: null,
              appealComponent: null,
            };
            ({
              APPEALS_LINK: obj13.appealLink,
              COMMUNITY_GUIDELINES: obj13.communityGuidelinesLink,
              TOS_LINK: obj13.tosLink,
            } = ref);
            ({ description: obj13.classificationTypeText, explainer_link: obj13.policyExplainerLink } = classification);
            const obj12 = { hasBeenAppealed: null != classification.appeal_status, onPressLetUsKnow };
            obj11.appealComponent = closure_13(closure_29, obj12);
            tmp19Result6 = closure_13(closure_24, obj11);
          }
          const obj14 = { children: null };
          items4[1] = tmp19Result6;
          obj14.children = items4;
          tmp19Result5 = closure_14(closure_15, obj14);
          let tmpResult6 = tmp(tmp2[31]);
        }
        items3[2] = tmp19Result5;
        let tmp19Result7 = !hasItem1;
        if (!hasItem1) {
          const obj16 = { onClose };
          tmp19Result7 = closure_13(closure_33, obj16);
        }
        items3[3] = tmp19Result7;
        obj6.children = items3;
        tmp37Result = closure_14(classification, obj6);
        const obj7 = { classificationTypeText: null, guildMetadata: null };
        const tmp41 = source(tmp2[30]);
      }
      obj5.children = tmp37Result;
      obj4.children = closure_13(classificationId(onClose[32]).SafeAreaPaddingView, obj5);
      tmp19Result8 = closure_13(is_violative_content_shown, obj4);
      let obj3 = {
        accountStanding: safetyHubAccountStanding,
        classificationId,
        classificationState: safetyHubClassification,
        hasFlaggedContent: tmp7,
        source,
      };
      tmp16 = is_coppa2 && stateFromStores1;
      let tmpResult5 = classificationId(onClose[14]);
    };
