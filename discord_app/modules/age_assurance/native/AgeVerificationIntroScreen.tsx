// discord_app/modules/age_assurance/native/AgeVerificationIntroScreen.tsx
import nativeDefault from "../../../../discord_common/js/packages/tokens/native.tsx";
import Constants from "../../../Constants.tsx";
import HelpdeskUtilsDefault from "../../../utils/HelpdeskUtils.tsx";
import AgeVerificationActionCreatorsDefault from "../AgeVerificationActionCreators.native.tsx";
import AgeVerificationConstants from "../AgeVerificationConstants.tsx";
import AgeVerificationAnalyticsUtils from "../AgeVerificationAnalyticsUtils.tsx";
import _asyncToGenerator from "../../../../_runtime/metro/00005__asyncToGenerator.js";
import react from "../../../../_runtime/00019_react.js";
import react_native from "../../../../_runtime/00017_react-native.js";
import Fragment from "../../../../_runtime/react/00021_Fragment.js";
import createStyles_mod from "../../../design/components/Styles/native/createStyles.tsx";
import ReactCompilerGating from "../../react_compiler/ReactCompilerGating.tsx";
import size from "../../../../_runtime/metro/00002__.js";

let c1, modalSessionId;

let c10;
let c9;
let closure_4;
let hasOwnProperty;
let metroImportAll;
let obj2;
let obj3;
let obj4;
let obj5;
let obj6;
({ ScrollView: closure_4, View: hasOwnProperty } = react_native);
let closure_6 = AgeVerificationConstants.getAgeVerificationGetStartedSteps;
const HelpdeskArticles = Constants.HelpdeskArticles;
({ jsx: metroImportAll, jsxs: c9, Fragment: c10 } = Fragment);
let createStyles = createStyles_mod;
let obj = {
  getStartedContainer: obj2,
  getStartedHeaderContainer: obj3,
  ageGroupLearnMoreContainer: obj4,
  getStartedHeaderText: { textAlign: "center" },
  getStartedFooterContainer: obj5,
  getStartedFooterButtonsContainer: obj6,
};
obj2 = { paddingHorizontal: nativeDefault.space.PX_16, gap: nativeDefault.space.PX_16, flex: 1 };
createStyles = createStyles.createStyles;
obj3 = { alignItems: "center", gap: nativeDefault.space.PX_8 };
obj4 = { alignItems: "center", marginTop: -nativeDefault.space.PX_8 };
obj5 = { paddingHorizontal: nativeDefault.space.PX_16, paddingTop: nativeDefault.space.PX_48 };
obj6 = { gap: nativeDefault.space.PX_8 };
let closure_11 = createStyles(obj);
let tmp6 = ReactCompilerGating.isReactCompilerEnabled()
  ? (modalSessionId) => {
      let entryPoint;
      let getStartedContainer;
      let getStartedHeaderContainer;
      let initiateAgeVerification;
      let items;
      let items1;
      let loading;
      let obj6;
      let onClose;
      const tmp = modalSessionId;
      let obj = modalSessionId(576);
      const cResult = obj.c(57);
      modalSessionId = modalSessionId.modalSessionId;
      ({ onClose, entryPoint } = modalSessionId);
      const tmp4 = closure_11();
      const bottom = initiateAgeVerification(1618)().bottom;
      if (cResult[0] === entryPoint) {
        let tmp5;
        let tmp8;
        let tmp11;
        if (cResult[1] === onClose) {
          tmp5 = cResult[2];
        }
        let tmpResult = tmp(5108);
        const initiateAgeVerification1 = tmpResult.useInitiateAgeVerification(tmp5);
        ({ loading, initiateAgeVerification } = initiateAgeVerification1);
        const _Symbol = Symbol;
        ({ getStartedContainer, getStartedHeaderContainer } = tmp4);
        if (cResult[3] === Symbol.for("react.memo_cache_sentinel")) {
          const tmp10 = closure_8(tmp(8130).ShieldSpotIllustration, {});
          cResult[3] = tmp10;
          tmp8 = tmp10;
        } else {
          tmp8 = cResult[3];
        }
        const getStartedHeaderText = tmp4.getStartedHeaderText;
        if (cResult[4] !== entryPoint) {
          const tmpResult3 = tmp(5108);
          const ageVerificationGetStartedTitle = tmpResult3.getAgeVerificationGetStartedTitle(entryPoint);
          cResult[4] = entryPoint;
          cResult[5] = ageVerificationGetStartedTitle;
          tmp11 = ageVerificationGetStartedTitle;
        } else {
          tmp11 = cResult[5];
        }
        if (cResult[6] === tmp4.getStartedHeaderText) {
          let tmp13;
          let tmp16;
          if (cResult[7] === tmp11) {
            tmp13 = cResult[8];
          }
          const getStartedHeaderText2 = tmp4.getStartedHeaderText;
          if (cResult[9] !== entryPoint) {
            const tmpResult4 = tmp(5108);
            const ageVerificationGetStartedSubtitle = tmpResult4.getAgeVerificationGetStartedSubtitle(entryPoint);
            cResult[9] = entryPoint;
            cResult[10] = ageVerificationGetStartedSubtitle;
            tmp16 = ageVerificationGetStartedSubtitle;
          } else {
            tmp16 = cResult[10];
          }
          if (cResult[11] === tmp4.getStartedHeaderText) {
            let tmp18;
            if (cResult[12] === tmp16) {
              tmp18 = cResult[13];
            }
            if (cResult[14] === tmp4.getStartedHeaderContainer) {
              if (cResult[15] === tmp18) {
                let tmp21;
                if (cResult[16] === tmp13) {
                  tmp21 = cResult[17];
                }
                if (cResult[18] !== modalSessionId) {
                  const _Symbol2 = Symbol;
                  if (cResult[20] === Symbol.for("react.memo_cache_sentinel")) {
                    class B {
                      constructor(description, arg1) {
                        let tmpResult;
                        description = description.description;
                        const title = description.title;
                        const obj = {
                          index: arg1 + 1,
                          tip: closure_1_8(modalSessionId(dependencyMap[13]).Text, {
                            variant: "text-md/medium",
                            color: "mobile-text-heading-primary",
                            children: title,
                          }),
                          description: tmpResult,
                        };
                        tmpResult = null;
                        const tmp3 = initiateAgeVerification(dependencyMap[14]);
                        if (null != description) {
                          const obj2 = { variant: "text-xs/medium", color: "text-subtle", children: description };
                          tmpResult = closure_1_8(modalSessionId(dependencyMap[13]).Text, obj2);
                        }
                        return closure_1_8(tmp3, obj, arg1);
                      }
                    }
                    cResult[20] = B;
                  } else {
                    class B {
                      constructor(description, arg1) {
                        let tmpResult;
                        description = description.description;
                        const title = description.title;
                        const obj = {
                          index: arg1 + 1,
                          tip: closure_1_8(modalSessionId(dependencyMap[13]).Text, {
                            variant: "text-md/medium",
                            color: "mobile-text-heading-primary",
                            children: title,
                          }),
                          description: tmpResult,
                        };
                        tmpResult = null;
                        const tmp3 = initiateAgeVerification(dependencyMap[14]);
                        if (null != description) {
                          const obj2 = { variant: "text-xs/medium", color: "text-subtle", children: description };
                          tmpResult = closure_1_8(modalSessionId(dependencyMap[13]).Text, obj2);
                        }
                        return closure_1_8(tmp3, obj, arg1);
                      }
                    }
                  }
                  const arr2 = closure_6(modalSessionId);
                  const mapped = arr2.map(B);
                  cResult[18] = modalSessionId;
                  cResult[19] = mapped;
                } else {
                  class B {
                    constructor(description, arg1) {
                      let tmpResult;
                      description = description.description;
                      const title = description.title;
                      const obj = {
                        index: arg1 + 1,
                        tip: closure_1_8(modalSessionId(dependencyMap[13]).Text, {
                          variant: "text-md/medium",
                          color: "mobile-text-heading-primary",
                          children: title,
                        }),
                        description: tmpResult,
                      };
                      tmpResult = null;
                      const tmp3 = initiateAgeVerification(dependencyMap[14]);
                      if (null != description) {
                        const obj2 = { variant: "text-xs/medium", color: "text-subtle", children: description };
                        tmpResult = closure_1_8(modalSessionId(dependencyMap[13]).Text, obj2);
                      }
                      return closure_1_8(tmp3, obj, arg1);
                    }
                  }
                }
                if (cResult[21] !== tmp25) {
                  class B {
                    constructor(description, arg1) {
                      let tmpResult;
                      description = description.description;
                      const title = description.title;
                      const obj = {
                        index: arg1 + 1,
                        tip: closure_1_8(modalSessionId(dependencyMap[13]).Text, {
                          variant: "text-md/medium",
                          color: "mobile-text-heading-primary",
                          children: title,
                        }),
                        description: tmpResult,
                      };
                      tmpResult = null;
                      const tmp3 = initiateAgeVerification(dependencyMap[14]);
                      if (null != description) {
                        const obj2 = { variant: "text-xs/medium", color: "text-subtle", children: description };
                        tmpResult = closure_1_8(modalSessionId(dependencyMap[13]).Text, obj2);
                      }
                      return closure_1_8(tmp3, obj, arg1);
                    }
                  }
                  let obj2 = { hasIcons: true, children: tmp25 };
                  cResult[21] = tmp25;
                  cResult[22] = closure_8(tmp(6081).TableRowGroup, obj2);
                  const tmp30 = closure_8(tmp(6081).TableRowGroup, obj2);
                } else {
                  class B {
                    constructor(description, arg1) {
                      let tmpResult;
                      description = description.description;
                      const title = description.title;
                      const obj = {
                        index: arg1 + 1,
                        tip: closure_1_8(modalSessionId(dependencyMap[13]).Text, {
                          variant: "text-md/medium",
                          color: "mobile-text-heading-primary",
                          children: title,
                        }),
                        description: tmpResult,
                      };
                      tmpResult = null;
                      const tmp3 = initiateAgeVerification(dependencyMap[14]);
                      if (null != description) {
                        const obj2 = { variant: "text-xs/medium", color: "text-subtle", children: description };
                        tmpResult = closure_1_8(modalSessionId(dependencyMap[13]).Text, obj2);
                      }
                      return closure_1_8(tmp3, obj, arg1);
                    }
                  }
                }
                const ageGroupLearnMoreContainer = tmp4.ageGroupLearnMoreContainer;
                if (cResult[23] !== modalSessionId) {
                  class B {
                    constructor(description, arg1) {
                      let tmpResult;
                      description = description.description;
                      const title = description.title;
                      const obj = {
                        index: arg1 + 1,
                        tip: closure_1_8(modalSessionId(dependencyMap[13]).Text, {
                          variant: "text-md/medium",
                          color: "mobile-text-heading-primary",
                          children: title,
                        }),
                        description: tmpResult,
                      };
                      tmpResult = null;
                      const tmp3 = initiateAgeVerification(dependencyMap[14]);
                      if (null != description) {
                        const obj2 = { variant: "text-xs/medium", color: "text-subtle", children: description };
                        tmpResult = closure_1_8(modalSessionId(dependencyMap[13]).Text, obj2);
                      }
                      return closure_1_8(tmp3, obj, arg1);
                    }
                  }
                  const obj3 = {
                    handleOnHelpUrlHook() {
                      const openUrl = AgeVerificationActionCreatorsDefault.openUrl;
                      AgeVerificationActionCreatorsDefault;
                      const obj = HelpdeskUtilsDefault;
                      openUrl(obj.getArticleURL(HelpdeskArticles.TIGGER_PAWTECT_LEARN_MORE));
                      const trackAgeVerificationModalClicked =
                        AgeVerificationAnalyticsUtils.trackAgeVerificationModalClicked;
                      AgeVerificationAnalyticsUtils;
                      const result = trackAgeVerificationModalClicked(
                        modalSessionId,
                        AgeVerificationAnalyticsUtils.AgeVerificationModalVersion.PRIMARY,
                        AgeVerificationAnalyticsUtils.AgeVerificationModalCta.LEARN_MORE,
                      );
                    },
                  };
                  cResult[23] = modalSessionId;
                  cResult[24] = obj10.format(tmp(1126).t["L+FgkZ"], obj3);
                  const formatResult = obj10.format(tmp(1126).t["L+FgkZ"], obj3);
                } else {
                  class B {
                    constructor(description, arg1) {
                      let tmpResult;
                      description = description.description;
                      const title = description.title;
                      const obj = {
                        index: arg1 + 1,
                        tip: closure_1_8(modalSessionId(dependencyMap[13]).Text, {
                          variant: "text-md/medium",
                          color: "mobile-text-heading-primary",
                          children: title,
                        }),
                        description: tmpResult,
                      };
                      tmpResult = null;
                      const tmp3 = initiateAgeVerification(dependencyMap[14]);
                      if (null != description) {
                        const obj2 = { variant: "text-xs/medium", color: "text-subtle", children: description };
                        tmpResult = closure_1_8(modalSessionId(dependencyMap[13]).Text, obj2);
                      }
                      return closure_1_8(tmp3, obj, arg1);
                    }
                  }
                }
                if (cResult[25] !== tmp31) {
                  class B {
                    constructor(description, arg1) {
                      let tmpResult;
                      description = description.description;
                      const title = description.title;
                      const obj = {
                        index: arg1 + 1,
                        tip: closure_1_8(modalSessionId(dependencyMap[13]).Text, {
                          variant: "text-md/medium",
                          color: "mobile-text-heading-primary",
                          children: title,
                        }),
                        description: tmpResult,
                      };
                      tmpResult = null;
                      const tmp3 = initiateAgeVerification(dependencyMap[14]);
                      if (null != description) {
                        const obj2 = { variant: "text-xs/medium", color: "text-subtle", children: description };
                        tmpResult = closure_1_8(modalSessionId(dependencyMap[13]).Text, obj2);
                      }
                      return closure_1_8(tmp3, obj, arg1);
                    }
                  }
                  const obj4 = { variant: "text-xs/medium", color: "text-muted", children: tmp31 };
                  cResult[25] = tmp31;
                  cResult[26] = closure_8(tmp(4892).Text, obj4);
                  const tmp34 = closure_8(tmp(4892).Text, obj4);
                } else {
                  class B {
                    constructor(description, arg1) {
                      let tmpResult;
                      description = description.description;
                      const title = description.title;
                      const obj = {
                        index: arg1 + 1,
                        tip: closure_1_8(modalSessionId(dependencyMap[13]).Text, {
                          variant: "text-md/medium",
                          color: "mobile-text-heading-primary",
                          children: title,
                        }),
                        description: tmpResult,
                      };
                      tmpResult = null;
                      const tmp3 = initiateAgeVerification(dependencyMap[14]);
                      if (null != description) {
                        const obj2 = { variant: "text-xs/medium", color: "text-subtle", children: description };
                        tmpResult = closure_1_8(modalSessionId(dependencyMap[13]).Text, obj2);
                      }
                      return closure_1_8(tmp3, obj, arg1);
                    }
                  }
                }
                if (cResult[27] === tmp4.ageGroupLearnMoreContainer) {
                  class B {
                    constructor(description, arg1) {
                      let tmpResult;
                      description = description.description;
                      const title = description.title;
                      const obj = {
                        index: arg1 + 1,
                        tip: closure_1_8(modalSessionId(dependencyMap[13]).Text, {
                          variant: "text-md/medium",
                          color: "mobile-text-heading-primary",
                          children: title,
                        }),
                        description: tmpResult,
                      };
                      tmpResult = null;
                      const tmp3 = initiateAgeVerification(dependencyMap[14]);
                      if (null != description) {
                        const obj2 = { variant: "text-xs/medium", color: "text-subtle", children: description };
                        tmpResult = closure_1_8(modalSessionId(dependencyMap[13]).Text, obj2);
                      }
                      return closure_1_8(tmp3, obj, arg1);
                    }
                  }
                  if (cResult[30] === tmp4.getStartedContainer) {
                    class B {
                      constructor(description, arg1) {
                        let tmpResult;
                        description = description.description;
                        const title = description.title;
                        const obj = {
                          index: arg1 + 1,
                          tip: closure_1_8(modalSessionId(dependencyMap[13]).Text, {
                            variant: "text-md/medium",
                            color: "mobile-text-heading-primary",
                            children: title,
                          }),
                          description: tmpResult,
                        };
                        tmpResult = null;
                        const tmp3 = initiateAgeVerification(dependencyMap[14]);
                        if (null != description) {
                          const obj2 = { variant: "text-xs/medium", color: "text-subtle", children: description };
                          tmpResult = closure_1_8(modalSessionId(dependencyMap[13]).Text, obj2);
                        }
                        return closure_1_8(tmp3, obj, arg1);
                      }
                    }
                  }
                  const obj5 = { children: closure_9(closure_5, obj6) };
                  obj6 = { style: getStartedContainer, children: items };
                  items = [tmp21, tmp29, tmp35];
                  cResult[30] = tmp4.getStartedContainer;
                  cResult[31] = tmp21;
                  cResult[32] = tmp29;
                  cResult[33] = tmp35;
                  cResult[34] = closure_8(closure_4, obj5);
                  const tmp44 = closure_8(closure_4, obj5);
                }
                const obj7 = { style: ageGroupLearnMoreContainer, children: tmp33 };
                cResult[27] = tmp4.ageGroupLearnMoreContainer;
                cResult[28] = tmp33;
                cResult[29] = closure_8(closure_5, obj7);
                const tmp38 = closure_8(closure_5, obj7);
              }
            }
            const obj8 = { style: getStartedHeaderContainer, children: items1 };
            items1 = [tmp8, tmp13, tmp18];
            const tmp24 = closure_9(closure_5, obj8);
            cResult[14] = tmp4.getStartedHeaderContainer;
            cResult[15] = tmp18;
            cResult[16] = tmp13;
            cResult[17] = tmp24;
            tmp21 = tmp24;
          }
          const obj9 = {
            variant: "heading-md/medium",
            color: "text-default",
            style: getStartedHeaderText2,
            children: tmp16,
          };
          const tmp20 = closure_8(tmp(4892).Text, obj9);
          cResult[11] = tmp4.getStartedHeaderText;
          cResult[12] = tmp16;
          cResult[13] = tmp20;
          tmp18 = tmp20;
        }
        const obj11 = {
          variant: "heading-xl/bold",
          color: "mobile-text-heading-primary",
          style: getStartedHeaderText,
          children: tmp11,
        };
        const tmp15 = closure_8(tmp(4892).Text, obj11);
        cResult[6] = tmp4.getStartedHeaderText;
        cResult[7] = tmp11;
        cResult[8] = tmp15;
        tmp13 = tmp15;
      }
      const obj12 = { onComplete: onClose, entryPoint };
      cResult[0] = entryPoint;
      cResult[1] = onClose;
      cResult[2] = obj12;
      tmp5 = obj12;
    }
  : (modalSessionId) => {
      let Button;
      let LinkExternalSmallIcon;
      let Text3;
      let arr3;
      let intl;
      let intl2;
      let items;
      let items1;
      let items2;
      let items3;
      let obj12;
      let obj13;
      let obj15;
      let obj16;
      let obj17;
      let obj4;
      let obj7;
      let obj9;
      modalSessionId = modalSessionId.modalSessionId;
      const entryPoint = modalSessionId.entryPoint;
      let initiateAgeVerification;
      const onClose = modalSessionId.onClose;
      const tmp = closure_11();
      const bottom = initiateAgeVerification(1618)().bottom;
      let obj = modalSessionId(5108);
      initiateAgeVerification = obj.useInitiateAgeVerification({ onComplete: onClose, entryPoint });
      initiateAgeVerification = initiateAgeVerification.initiateAgeVerification;
      let obj2 = { children: items2 };
      let obj3 = { children: closure_9(closure_5, obj4) };
      obj4 = { style: tmp.getStartedContainer, children: items1 };
      const loading = initiateAgeVerification.loading;
      const obj5 = { style: tmp.getStartedHeaderContainer, children: items };
      items = [closure_8(modalSessionId(8130).ShieldSpotIllustration, {}), ,];
      const obj6 = {
        variant: "heading-xl/bold",
        color: "mobile-text-heading-primary",
        style: tmp.getStartedHeaderText,
        children: obj7.getAgeVerificationGetStartedTitle(entryPoint),
      };
      const Text = modalSessionId(4892).Text;
      obj7 = modalSessionId(5108);
      items[1] = closure_8(Text, obj6);
      const obj8 = {
        variant: "heading-md/medium",
        color: "text-default",
        style: tmp.getStartedHeaderText,
        children: obj9.getAgeVerificationGetStartedSubtitle(entryPoint),
      };
      const Text2 = modalSessionId(4892).Text;
      obj9 = modalSessionId(5108);
      items[2] = closure_8(Text2, obj8);
      items1 = [closure_9(closure_5, obj5), ,];
      const obj10 = {
        hasIcons: true,
        children: arr3.map((description, index) => {
          let tmpResult;
          description = description.description;
          const title = description.title;
          const obj = {
            index: index + 1,
            tip: closure_1_8(modalSessionId(dependencyMap[13]).Text, {
              variant: "text-md/medium",
              color: "mobile-text-heading-primary",
              children: title,
            }),
            description: tmpResult,
          };
          tmpResult = null;
          const tmp3 = initiateAgeVerification(dependencyMap[14]);
          if (null != description) {
            const obj2 = { variant: "text-xs/medium", color: "text-subtle", children: description };
            tmpResult = closure_1_8(modalSessionId(dependencyMap[13]).Text, obj2);
          }
          return closure_1_8(tmp3, obj, index);
        }),
      };
      const TableRowGroup = modalSessionId(6081).TableRowGroup;
      arr3 = closure_6(modalSessionId);
      items1[1] = closure_8(TableRowGroup, obj10);
      const obj11 = { style: tmp.ageGroupLearnMoreContainer, children: closure_8(Text3, obj12) };
      obj12 = {
        variant: "text-xs/medium",
        color: "text-muted",
        children: intl.format(modalSessionId(1126).t["L+FgkZ"], obj13),
      };
      Text3 = modalSessionId(4892).Text;
      intl = modalSessionId(1126).intl;
      obj13 = {
        handleOnHelpUrlHook() {
          const openUrl = AgeVerificationActionCreatorsDefault.openUrl;
          AgeVerificationActionCreatorsDefault;
          const obj = HelpdeskUtilsDefault;
          openUrl(obj.getArticleURL(HelpdeskArticles.TIGGER_PAWTECT_LEARN_MORE));
          const trackAgeVerificationModalClicked = AgeVerificationAnalyticsUtils.trackAgeVerificationModalClicked;
          AgeVerificationAnalyticsUtils;
          const result = trackAgeVerificationModalClicked(
            modalSessionId,
            AgeVerificationAnalyticsUtils.AgeVerificationModalVersion.PRIMARY,
            AgeVerificationAnalyticsUtils.AgeVerificationModalCta.LEARN_MORE,
          );
        },
      };
      items1[2] = closure_8(closure_5, obj11);
      items2 = [closure_8(closure_4, obj3)];
      const obj14 = { style: items3, children: closure_8(closure_5, obj15) };
      items3 = [tmp.getStartedFooterContainer, { paddingBottom: bottom }];
      obj15 = { style: tmp.getStartedFooterButtonsContainer, children: closure_8(Button, obj16) };
      obj16 = {
        variant: "primary",
        size: "lg",
        text: intl2.string(modalSessionId(1126).t.SJMnkX),
        onPress: _asyncToGenerator(async () => {
          let v3;
          if (v3 === 2) {
            v3 = 3;
            throw new TypeError("Generator functions may not be called on executing generators");
          } else if (tmp2 === 3) {
            if (arg0 === 1) {
              throw value;
            } else if (arg0 === 2) {
              const obj2 = { value, done: true };
              return obj2;
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
                  const obj3 = { value, done: true };
                  return obj3;
                } else {
                  const trackAgeVerificationModalClicked = v3(dependencyMap[19]).trackAgeVerificationModalClicked;
                  const tmp6 = v3(dependencyMap[19]);
                  const result = trackAgeVerificationModalClicked(
                    modalSessionId,
                    v3(dependencyMap[19]).AgeVerificationModalVersion.PRIMARY,
                    v3(dependencyMap[19]).AgeVerificationModalCta.GET_STARTED,
                  );
                  c1 = 1;
                  v3 = 1;
                  const obj4 = { value: initiateAgeVerification(), done: false };
                  return obj4;
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
              v3 = 3;
              throw tmp10;
            }
          }
        }),
        icon: closure_8(LinkExternalSmallIcon, obj17),
        loading,
        iconPosition: "end",
      };
      Button = modalSessionId(5601).Button;
      intl2 = modalSessionId(1126).intl;
      obj17 = { color: initiateAgeVerification(587).colors.WHITE };
      LinkExternalSmallIcon = modalSessionId(8296).LinkExternalSmallIcon;
      items2[1] = closure_8(closure_5, obj14);
      return closure_9(closure_10, obj2);
    };
let result = size.fileFinishedImporting("modules/age_assurance/native/AgeVerificationIntroScreen.tsx");

export default tmp6;
