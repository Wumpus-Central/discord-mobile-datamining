// discord_app/modules/age_assurance/native/AgeVerificationIntroScreen.tsx
import nativeDefault from "../../../../discord_common/js/packages/tokens/native.tsx";
import HelpdeskUtilsDefault from "../../../utils/HelpdeskUtils.tsx";
import AgeVerificationAnalyticsUtils from "../AgeVerificationAnalyticsUtils.tsx";
import AgeVerificationActionCreatorsDefault from "../AgeVerificationActionCreators.native.tsx";
import asyncGeneratorStep from "../../../../_runtime/00005_asyncGeneratorStep.js";
import noop from "../../../../_runtime/metro/00019__.js";

require = fn;
get_ActivityIndicator = fn(17);
({ ScrollView: closure_4, View: hasOwnProperty } = get_ActivityIndicator);
const HelpdeskArticles = fn(1085).HelpdeskArticles;
const jsxProd = fn(21);
({ jsx: closure_7, jsxs: closure_8, Fragment: closure_9 } = jsxProd);
const createStyles = fn(5090);
let obj2 = {
  getStartedContainer: { paddingHorizontal: nativeDefault.space.PX_16, gap: nativeDefault.space.PX_16, flex: 1 },
  getStartedHeaderContainer: null,
  ageGroupLearnMoreContainer: null,
  getStartedHeaderText: null,
  getStartedFooterContainer: null,
  getStartedFooterButtonsContainer: null,
};
let obj3 = { paddingHorizontal: nativeDefault.space.PX_16, gap: nativeDefault.space.PX_16, flex: 1 };
obj2.getStartedHeaderContainer = { alignItems: "center", gap: nativeDefault.space.PX_8 };
let obj4 = { alignItems: "center", gap: nativeDefault.space.PX_8 };
obj2.ageGroupLearnMoreContainer = { alignItems: "center", marginTop: -nativeDefault.space.PX_8 };
obj2.getStartedHeaderText = { textAlign: "center" };
let obj5 = { alignItems: "center", marginTop: -nativeDefault.space.PX_8 };
obj2.getStartedFooterContainer = {
  paddingHorizontal: nativeDefault.space.PX_16,
  paddingTop: nativeDefault.space.PX_48,
};
let obj6 = { paddingHorizontal: nativeDefault.space.PX_16, paddingTop: nativeDefault.space.PX_48 };
obj2.getStartedFooterButtonsContainer = { gap: nativeDefault.space.PX_8 };
let closure_10 = createStyles.createStyles(obj2);
const ReactCompilerGating = fn(558);
let obj7 = { gap: nativeDefault.space.PX_8 };
const size = fn(2);
let result = size.fileFinishedImporting("modules/age_assurance/native/AgeVerificationIntroScreen.tsx");

export default ReactCompilerGating.isReactCompilerEnabled()
  ? function GetStartedScreen(modalSessionId) {
      const cResult = modalSessionId(576).c(57);
      modalSessionId = modalSessionId.modalSessionId;
      ({ onClose, entryPoint } = modalSessionId);
      const tmp4 = closure_10();
      const bottom = initiateAgeVerification(1630)().bottom;
      if (cResult[0] === entryPoint) {
        if (cResult[1] === onClose) {
          let tmp5 = cResult[2];
        }
        const initiateAgeVerification1 = tmp(7545).useInitiateAgeVerification(tmp5);
        ({ loading, initiateAgeVerification } = initiateAgeVerification1);
        const _Symbol = Symbol;
        ({ getStartedContainer, getStartedHeaderContainer } = tmp4);
        if (cResult[3] === Symbol.for("react.memo_cache_sentinel")) {
          const tmp10 = closure_7(tmp(7508).ShieldSpotIllustration, {});
          cResult[3] = tmp10;
          let tmp8 = tmp10;
        } else {
          tmp8 = cResult[3];
        }
        if (cResult[4] !== entryPoint) {
          const ageVerificationGetStartedTitle = tmp(5905).getAgeVerificationGetStartedTitle(entryPoint);
          cResult[4] = entryPoint;
          cResult[5] = ageVerificationGetStartedTitle;
          let tmp11 = ageVerificationGetStartedTitle;
          const tmpResult4 = tmp(5905);
        } else {
          tmp11 = cResult[5];
        }
        if (cResult[6] === tmp4.getStartedHeaderText) {
          if (cResult[7] === tmp11) {
            let tmp13 = cResult[8];
          }
          if (cResult[9] !== entryPoint) {
            const ageVerificationGetStartedSubtitle = tmp(5905).getAgeVerificationGetStartedSubtitle(entryPoint);
            cResult[9] = entryPoint;
            cResult[10] = ageVerificationGetStartedSubtitle;
            let tmp16 = ageVerificationGetStartedSubtitle;
            const tmpResult5 = tmp(5905);
          } else {
            tmp16 = cResult[10];
          }
          if (cResult[11] === tmp4.getStartedHeaderText) {
            if (cResult[12] === tmp16) {
              let tmp18 = cResult[13];
            }
            if (cResult[14] === tmp4.getStartedHeaderContainer) {
              if (cResult[15] === tmp18) {
                if (cResult[16] === tmp13) {
                  let tmp21 = cResult[17];
                }
                if (cResult[18] !== modalSessionId) {
                  const _Symbol2 = Symbol;
                  if (cResult[20] === Symbol.for("react.memo_cache_sentinel")) {
                    class F {
                      constructor(arg0, arg1) {
                        description = modalSessionId.description;
                        tmp = closure_1_7;
                        tmp2 = closure_1_2;
                        obj = { index: arg1 + 1, tip: null, description: null };
                        tmp3 = initiateAgeVerification(closure_1_2[14]);
                        tmp4 = closure_0;
                        obj.tip = closure_1_7(closure_0(closure_1_2[13]).Text, {
                          variant: "text-md/medium",
                          color: "mobile-text-heading-primary",
                          children: modalSessionId.title,
                        });
                        tmpResult = null;
                        if (null != description) {
                          obj1 = { variant: "text-xs/medium", color: "text-subtle", children: null };
                          obj1.children = description;
                          tmpResult = tmp(tmp4(tmp2[13]).Text, obj1);
                        }
                        obj.description = tmpResult;
                        return tmp(tmp3, obj, arg1);
                      }
                    }
                    cResult[20] = F;
                  } else {
                    class F {
                      constructor(arg0, arg1) {
                        description = modalSessionId.description;
                        tmp = closure_1_7;
                        tmp2 = closure_1_2;
                        obj = { index: arg1 + 1, tip: null, description: null };
                        tmp3 = initiateAgeVerification(closure_1_2[14]);
                        tmp4 = closure_0;
                        obj.tip = closure_1_7(closure_0(closure_1_2[13]).Text, {
                          variant: "text-md/medium",
                          color: "mobile-text-heading-primary",
                          children: modalSessionId.title,
                        });
                        tmpResult = null;
                        if (null != description) {
                          obj1 = { variant: "text-xs/medium", color: "text-subtle", children: null };
                          obj1.children = description;
                          tmpResult = tmp(tmp4(tmp2[13]).Text, obj1);
                        }
                        obj.description = tmpResult;
                        return tmp(tmp3, obj, arg1);
                      }
                    }
                  }
                  const ageVerificationGetStartedSteps = tmp(7678).getAgeVerificationGetStartedSteps(modalSessionId);
                  const mapped = ageVerificationGetStartedSteps.map(F);
                  cResult[18] = modalSessionId;
                  cResult[19] = mapped;
                  const tmpResult6 = tmp(7678);
                } else {
                  class F {
                    constructor(arg0, arg1) {
                      description = modalSessionId.description;
                      tmp = closure_1_7;
                      tmp2 = closure_1_2;
                      obj = { index: arg1 + 1, tip: null, description: null };
                      tmp3 = initiateAgeVerification(closure_1_2[14]);
                      tmp4 = closure_0;
                      obj.tip = closure_1_7(closure_0(closure_1_2[13]).Text, {
                        variant: "text-md/medium",
                        color: "mobile-text-heading-primary",
                        children: modalSessionId.title,
                      });
                      tmpResult = null;
                      if (null != description) {
                        obj1 = { variant: "text-xs/medium", color: "text-subtle", children: null };
                        obj1.children = description;
                        tmpResult = tmp(tmp4(tmp2[13]).Text, obj1);
                      }
                      obj.description = tmpResult;
                      return tmp(tmp3, obj, arg1);
                    }
                  }
                  if (cResult[21] !== tmp25) {
                    class F {
                      constructor(arg0, arg1) {
                        description = modalSessionId.description;
                        tmp = closure_1_7;
                        tmp2 = closure_1_2;
                        obj = { index: arg1 + 1, tip: null, description: null };
                        tmp3 = initiateAgeVerification(closure_1_2[14]);
                        tmp4 = closure_0;
                        obj.tip = closure_1_7(closure_0(closure_1_2[13]).Text, {
                          variant: "text-md/medium",
                          color: "mobile-text-heading-primary",
                          children: modalSessionId.title,
                        });
                        tmpResult = null;
                        if (null != description) {
                          obj1 = { variant: "text-xs/medium", color: "text-subtle", children: null };
                          obj1.children = description;
                          tmpResult = tmp(tmp4(tmp2[13]).Text, obj1);
                        }
                        obj.description = tmpResult;
                        return tmp(tmp3, obj, arg1);
                      }
                    }
                    let obj2 = { hasIcons: true, children: tmp25 };
                    const tmp30 = closure_7(tmp(6267).TableRowGroup, obj2);
                    cResult[21] = tmp25;
                    cResult[22] = tmp30;
                  } else {
                    class F {
                      constructor(arg0, arg1) {
                        description = modalSessionId.description;
                        tmp = closure_1_7;
                        tmp2 = closure_1_2;
                        obj = { index: arg1 + 1, tip: null, description: null };
                        tmp3 = initiateAgeVerification(closure_1_2[14]);
                        tmp4 = closure_0;
                        obj.tip = closure_1_7(closure_0(closure_1_2[13]).Text, {
                          variant: "text-md/medium",
                          color: "mobile-text-heading-primary",
                          children: modalSessionId.title,
                        });
                        tmpResult = null;
                        if (null != description) {
                          obj1 = { variant: "text-xs/medium", color: "text-subtle", children: null };
                          obj1.children = description;
                          tmpResult = tmp(tmp4(tmp2[13]).Text, obj1);
                        }
                        obj.description = tmpResult;
                        return tmp(tmp3, obj, arg1);
                      }
                    }
                  }
                  if (cResult[23] !== modalSessionId) {
                    class F {
                      constructor(arg0, arg1) {
                        description = modalSessionId.description;
                        tmp = closure_1_7;
                        tmp2 = closure_1_2;
                        obj = { index: arg1 + 1, tip: null, description: null };
                        tmp3 = initiateAgeVerification(closure_1_2[14]);
                        tmp4 = closure_0;
                        obj.tip = closure_1_7(closure_0(closure_1_2[13]).Text, {
                          variant: "text-md/medium",
                          color: "mobile-text-heading-primary",
                          children: modalSessionId.title,
                        });
                        tmpResult = null;
                        if (null != description) {
                          obj1 = { variant: "text-xs/medium", color: "text-subtle", children: null };
                          obj1.children = description;
                          tmpResult = tmp(tmp4(tmp2[13]).Text, obj1);
                        }
                        obj.description = tmpResult;
                        return tmp(tmp3, obj, arg1);
                      }
                    }
                    let obj3 = {
                      handleOnHelpUrlHook() {
                        const obj = AgeVerificationActionCreatorsDefault;
                        obj.openUrl(HelpdeskUtilsDefault.getArticleURL(HelpdeskArticles.TIGGER_PAWTECT_LEARN_MORE));
                        const result = AgeVerificationAnalyticsUtils.trackAgeVerificationModalClicked(
                          modalSessionId,
                          AgeVerificationAnalyticsUtils.AgeVerificationModalVersion.PRIMARY,
                          AgeVerificationAnalyticsUtils.AgeVerificationModalCta.LEARN_MORE,
                        );
                      },
                    };
                    const formatResult = obj11.format(tmp(1126).t["L+FgkZ"], obj3);
                    cResult[23] = modalSessionId;
                    cResult[24] = formatResult;
                  } else {
                    class F {
                      constructor(arg0, arg1) {
                        description = modalSessionId.description;
                        tmp = closure_1_7;
                        tmp2 = closure_1_2;
                        obj = { index: arg1 + 1, tip: null, description: null };
                        tmp3 = initiateAgeVerification(closure_1_2[14]);
                        tmp4 = closure_0;
                        obj.tip = closure_1_7(closure_0(closure_1_2[13]).Text, {
                          variant: "text-md/medium",
                          color: "mobile-text-heading-primary",
                          children: modalSessionId.title,
                        });
                        tmpResult = null;
                        if (null != description) {
                          obj1 = { variant: "text-xs/medium", color: "text-subtle", children: null };
                          obj1.children = description;
                          tmpResult = tmp(tmp4(tmp2[13]).Text, obj1);
                        }
                        obj.description = tmpResult;
                        return tmp(tmp3, obj, arg1);
                      }
                    }
                  }
                  if (cResult[25] !== tmp31) {
                    class F {
                      constructor(arg0, arg1) {
                        description = modalSessionId.description;
                        tmp = closure_1_7;
                        tmp2 = closure_1_2;
                        obj = { index: arg1 + 1, tip: null, description: null };
                        tmp3 = initiateAgeVerification(closure_1_2[14]);
                        tmp4 = closure_0;
                        obj.tip = closure_1_7(closure_0(closure_1_2[13]).Text, {
                          variant: "text-md/medium",
                          color: "mobile-text-heading-primary",
                          children: modalSessionId.title,
                        });
                        tmpResult = null;
                        if (null != description) {
                          obj1 = { variant: "text-xs/medium", color: "text-subtle", children: null };
                          obj1.children = description;
                          tmpResult = tmp(tmp4(tmp2[13]).Text, obj1);
                        }
                        obj.description = tmpResult;
                        return tmp(tmp3, obj, arg1);
                      }
                    }
                    let obj4 = { variant: "text-xs/medium", color: "text-muted", children: tmp31 };
                    const tmp34 = closure_7(tmp(5086).Text, obj4);
                    cResult[25] = tmp31;
                    cResult[26] = tmp34;
                  } else {
                    class F {
                      constructor(arg0, arg1) {
                        description = modalSessionId.description;
                        tmp = closure_1_7;
                        tmp2 = closure_1_2;
                        obj = { index: arg1 + 1, tip: null, description: null };
                        tmp3 = initiateAgeVerification(closure_1_2[14]);
                        tmp4 = closure_0;
                        obj.tip = closure_1_7(closure_0(closure_1_2[13]).Text, {
                          variant: "text-md/medium",
                          color: "mobile-text-heading-primary",
                          children: modalSessionId.title,
                        });
                        tmpResult = null;
                        if (null != description) {
                          obj1 = { variant: "text-xs/medium", color: "text-subtle", children: null };
                          obj1.children = description;
                          tmpResult = tmp(tmp4(tmp2[13]).Text, obj1);
                        }
                        obj.description = tmpResult;
                        return tmp(tmp3, obj, arg1);
                      }
                    }
                  }
                  if (cResult[27] === tmp4.ageGroupLearnMoreContainer) {
                    class F {
                      constructor(arg0, arg1) {
                        description = modalSessionId.description;
                        tmp = closure_1_7;
                        tmp2 = closure_1_2;
                        obj = { index: arg1 + 1, tip: null, description: null };
                        tmp3 = initiateAgeVerification(closure_1_2[14]);
                        tmp4 = closure_0;
                        obj.tip = closure_1_7(closure_0(closure_1_2[13]).Text, {
                          variant: "text-md/medium",
                          color: "mobile-text-heading-primary",
                          children: modalSessionId.title,
                        });
                        tmpResult = null;
                        if (null != description) {
                          obj1 = { variant: "text-xs/medium", color: "text-subtle", children: null };
                          obj1.children = description;
                          tmpResult = tmp(tmp4(tmp2[13]).Text, obj1);
                        }
                        obj.description = tmpResult;
                        return tmp(tmp3, obj, arg1);
                      }
                    }
                    if (cResult[30] === tmp4.getStartedContainer) {
                      class F {
                        constructor(arg0, arg1) {
                          description = modalSessionId.description;
                          tmp = closure_1_7;
                          tmp2 = closure_1_2;
                          obj = { index: arg1 + 1, tip: null, description: null };
                          tmp3 = initiateAgeVerification(closure_1_2[14]);
                          tmp4 = closure_0;
                          obj.tip = closure_1_7(closure_0(closure_1_2[13]).Text, {
                            variant: "text-md/medium",
                            color: "mobile-text-heading-primary",
                            children: modalSessionId.title,
                          });
                          tmpResult = null;
                          if (null != description) {
                            obj1 = { variant: "text-xs/medium", color: "text-subtle", children: null };
                            obj1.children = description;
                            tmpResult = tmp(tmp4(tmp2[13]).Text, obj1);
                          }
                          obj.description = tmpResult;
                          return tmp(tmp3, obj, arg1);
                        }
                      }
                    }
                    const obj5 = { children: null };
                    const obj6 = { style: getStartedContainer, children: null };
                    const items = [tmp21, tmp29, tmp35];
                    obj6.children = items;
                    obj5.children = closure_8(closure_5, obj6);
                    const tmp44 = closure_7(closure_4, obj5);
                    cResult[30] = tmp4.getStartedContainer;
                    cResult[31] = tmp21;
                    cResult[32] = tmp29;
                    cResult[33] = tmp35;
                    cResult[34] = tmp44;
                  }
                  const obj7 = { style: tmp4.ageGroupLearnMoreContainer, children: tmp33 };
                  const tmp38 = closure_7(closure_5, obj7);
                  cResult[27] = tmp4.ageGroupLearnMoreContainer;
                  cResult[28] = tmp33;
                  cResult[29] = tmp38;
                }
              }
            }
            const obj8 = { style: getStartedHeaderContainer, children: null };
            const items1 = [tmp8, tmp13, tmp18];
            obj8.children = items1;
            const tmp24 = closure_8(closure_5, obj8);
            cResult[14] = tmp4.getStartedHeaderContainer;
            cResult[15] = tmp18;
            cResult[16] = tmp13;
            cResult[17] = tmp24;
            tmp21 = tmp24;
          }
          const obj9 = {
            variant: "heading-md/medium",
            color: "text-default",
            style: tmp4.getStartedHeaderText,
            children: tmp16,
          };
          const tmp20 = closure_7(tmp(5086).Text, obj9);
          cResult[11] = tmp4.getStartedHeaderText;
          cResult[12] = tmp16;
          cResult[13] = tmp20;
          tmp18 = tmp20;
        }
        const obj10 = {
          variant: "heading-xl/bold",
          color: "mobile-text-heading-primary",
          style: tmp4.getStartedHeaderText,
          children: tmp11,
        };
        const tmp15 = closure_7(tmp(5086).Text, obj10);
        cResult[6] = tmp4.getStartedHeaderText;
        cResult[7] = tmp11;
        cResult[8] = tmp15;
        tmp13 = tmp15;
        let tmpResult = tmp(7545);
      }
      const obj12 = { onComplete: onClose, entryPoint };
      cResult[0] = entryPoint;
      cResult[1] = onClose;
      cResult[2] = obj12;
      tmp5 = obj12;
      let obj = modalSessionId(576);
    }
  : function GetStartedScreen(onComplete) {
      const modalSessionId = onComplete.modalSessionId;
      const entryPoint = onComplete.entryPoint;
      const tmp = closure_10();
      let initiateAgeVerification = modalSessionId(7545).useInitiateAgeVerification({
        onComplete: onComplete.onClose,
        entryPoint,
      });
      initiateAgeVerification = initiateAgeVerification.initiateAgeVerification;
      let obj2 = { children: null };
      let obj3 = { children: null };
      let obj4 = { style: tmp.getStartedContainer, children: null };
      let obj5 = { style: tmp.getStartedHeaderContainer, children: null };
      const items = [closure_7(modalSessionId(7508).ShieldSpotIllustration, {}), ,];
      const obj6 = {
        variant: "heading-xl/bold",
        color: "mobile-text-heading-primary",
        style: tmp.getStartedHeaderText,
        children: null,
      };
      let obj = modalSessionId(7545);
      obj6.children = modalSessionId(5905).getAgeVerificationGetStartedTitle(entryPoint);
      items[1] = closure_7(modalSessionId(5086).Text, obj6);
      const obj8 = {
        variant: "heading-md/medium",
        color: "text-default",
        style: tmp.getStartedHeaderText,
        children: null,
      };
      const obj7 = modalSessionId(5905);
      obj8.children = modalSessionId(5905).getAgeVerificationGetStartedSubtitle(entryPoint);
      items[2] = closure_7(modalSessionId(5086).Text, obj8);
      obj5.children = items;
      const items1 = [closure_8(closure_5, obj5), ,];
      const obj10 = { hasIcons: true, children: null };
      const obj9 = modalSessionId(5905);
      const ageVerificationGetStartedSteps = modalSessionId(7678).getAgeVerificationGetStartedSteps(modalSessionId);
      obj10.children = ageVerificationGetStartedSteps.map((children, index) => {
        const description = children.description;
        const obj = {
          index: index + 1,
          tip: closure_1_7(modalSessionId(5086).Text, {
            variant: "text-md/medium",
            color: "mobile-text-heading-primary",
            children: children.title,
          }),
          description: null,
        };
        let tmpResult = null;
        if (null != description) {
          const obj2 = { variant: "text-xs/medium", color: "text-subtle", children: description };
          tmpResult = closure_1_7(modalSessionId(5086).Text, obj2);
        }
        obj.description = tmpResult;
        return closure_1_7(initiateAgeVerification(7677), obj, index);
      });
      items1[1] = closure_7(modalSessionId(6267).TableRowGroup, obj10);
      const obj12 = { style: tmp.ageGroupLearnMoreContainer, children: null };
      const obj13 = { variant: "text-xs/medium", color: "text-muted", children: null };
      const intl = modalSessionId(1126).intl;
      obj13.children = intl.format(modalSessionId(1126).t["L+FgkZ"], {
        handleOnHelpUrlHook() {
          const obj = AgeVerificationActionCreatorsDefault;
          obj.openUrl(HelpdeskUtilsDefault.getArticleURL(HelpdeskArticles.TIGGER_PAWTECT_LEARN_MORE));
          const result = AgeVerificationAnalyticsUtils.trackAgeVerificationModalClicked(
            modalSessionId,
            AgeVerificationAnalyticsUtils.AgeVerificationModalVersion.PRIMARY,
            AgeVerificationAnalyticsUtils.AgeVerificationModalCta.LEARN_MORE,
          );
        },
      });
      obj12.children = closure_7(modalSessionId(5086).Text, obj13);
      items1[2] = closure_7(closure_5, obj12);
      obj4.children = items1;
      obj3.children = closure_8(closure_5, obj4);
      const items2 = [closure_7(closure_4, obj3)];
      const obj15 = { style: null, children: null };
      const items3 = [tmp.getStartedFooterContainer, { paddingBottom: initiateAgeVerification(1630)().bottom }];
      obj15.style = items3;
      const obj16 = { style: tmp.getStartedFooterButtonsContainer, children: null };
      const obj17 = {
        variant: "primary",
        size: "lg",
        text: null,
        onPress: null,
        icon: null,
        loading: null,
        iconPosition: "end",
      };
      const intl2 = modalSessionId(1126).intl;
      obj17.text = intl2.string(modalSessionId(1126).t.SJMnkX);
      obj17.onPress = asyncGeneratorStep(async () => {
        if (v3 === 2) {
          v3 = 3;
          throw new TypeError("Generator functions may not be called on executing generators");
        } else if (tmp3 === 3) {
          if (arg0 === 1) {
            throw value;
          } else if (arg0 === 2) {
            const obj3 = { value, done: true };
            return obj3;
          } else {
            return { value: "IconComponent", done: null };
          }
        } else {
          try {
            v3 = 2;
            if (0 === c1) {
              if (arg0 === 1) {
                v3 = 3;
                throw value;
              } else if (arg0 === 2) {
                v3 = 3;
                const obj4 = { value, done: true };
                return obj4;
              } else {
                const result = v3(5915).trackAgeVerificationModalClicked(
                  modalSessionId,
                  v3(5915).AgeVerificationModalVersion.PRIMARY,
                  v3(5915).AgeVerificationModalCta.GET_STARTED,
                );
                c1 = 1;
                v3 = 1;
                const obj5 = { value: initiateAgeVerification(), done: false };
                return obj5;
              }
            } else if (arg0 === 1) {
              v3 = 3;
              throw value;
            } else if (arg0 === 2) {
              v3 = 3;
              const obj = { value, done: true };
              return obj;
            } else {
              v3 = 3;
              return { value: "IconComponent", done: null };
            }
          } catch (tmp10) {
            v3 = tmp;
            throw tmp10;
          }
        }
      });
      const obj11 = modalSessionId(7678);
      const obj14 = {
        handleOnHelpUrlHook() {
          const obj = AgeVerificationActionCreatorsDefault;
          obj.openUrl(HelpdeskUtilsDefault.getArticleURL(HelpdeskArticles.TIGGER_PAWTECT_LEARN_MORE));
          const result = AgeVerificationAnalyticsUtils.trackAgeVerificationModalClicked(
            modalSessionId,
            AgeVerificationAnalyticsUtils.AgeVerificationModalVersion.PRIMARY,
            AgeVerificationAnalyticsUtils.AgeVerificationModalCta.LEARN_MORE,
          );
        },
      };
      obj17.icon = closure_7(modalSessionId(7679).LinkExternalSmallIcon, {
        color: initiateAgeVerification(587).colors.WHITE,
      });
      obj17.loading = initiateAgeVerification.loading;
      obj16.children = closure_7(modalSessionId(5375).Button, obj17);
      obj15.children = closure_7(closure_5, obj16);
      items2[1] = closure_7(closure_5, obj15);
      obj2.children = items2;
      return closure_8(closure_9, obj2);
    };
