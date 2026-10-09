// discord_app/modules/age_assurance/native/AgeVerificationRetryScreen.tsx
import nativeDefault from "../../../../discord_common/js/packages/tokens/native.tsx";
import HelpdeskUtilsDefault from "../../../utils/HelpdeskUtils.tsx";
import AgeVerificationAnalyticsUtils from "../AgeVerificationAnalyticsUtils.tsx";
import AgeVerificationActionCreatorsDefault from "../AgeVerificationActionCreators.native.tsx";
import asyncGeneratorStep from "../../../../_runtime/00005_asyncGeneratorStep.js";
import noop from "../../../../_runtime/metro/00019__.js";

require = fn;
get_ActivityIndicator = fn(17);
({ ActivityIndicator: hasOwnProperty, ScrollView: metroRequire, View: closure_7 } = get_ActivityIndicator);
const HelpdeskArticles = fn(1085).HelpdeskArticles;
const jsxProd = fn(21);
({ jsx: closure_9, jsxs: c10, Fragment: closure_11 } = jsxProd);
const createStyles = fn(5091);
let obj2 = {
  loadingIndicator: { position: "absolute", top: 0, left: 0, right: 0, bottom: 0, zIndex: 1 },
  container: { paddingHorizontal: nativeDefault.space.PX_16, flex: 1 },
  headerContainer: null,
  centerText: null,
  helpLink: null,
};
let obj3 = { paddingHorizontal: nativeDefault.space.PX_16, flex: 1 };
obj2.headerContainer = {
  paddingVertical: nativeDefault.space.PX_16,
  alignItems: "center",
  gap: nativeDefault.space.PX_8,
};
obj2.centerText = { textAlign: "center" };
let obj4 = { paddingVertical: nativeDefault.space.PX_16, alignItems: "center", gap: nativeDefault.space.PX_8 };
obj2.helpLink = { marginTop: nativeDefault.space.PX_8 };
let closure_12 = createStyles.createStyles(obj2);
const ReactCompilerGating = fn(558);
let obj5 = { marginTop: nativeDefault.space.PX_8 };
const size = fn(2);
let result = size.fileFinishedImporting("modules/age_assurance/native/AgeVerificationRetryScreen.tsx");

export default ReactCompilerGating.isReactCompilerEnabled()
  ? function GetStartedScreen(arg0) {
      const cResult = modalSessionId(576).c(38);
      ({ onClose, modalSessionId } = arg0);
      const tmp4 = closure_12();
      if (cResult[0] !== onClose) {
        let obj2 = { onComplete: onClose, entryPoint: modalSessionId(5916).AgeVerificationModalEntryPoint.RETRY_MODAL };
        cResult[0] = onClose;
        cResult[1] = obj2;
        let tmp5 = obj2;
      } else {
        tmp5 = cResult[1];
      }
      let obj = modalSessionId(576);
      const initiateAgeVerification1 = modalSessionId(7552).useInitiateAgeVerification(tmp5);
      ({ loading, initiateAgeVerification } = initiateAgeVerification1);
      if (cResult[2] === Symbol.for("react.memo_cache_sentinel")) {
        const intl = modalSessionId(1126).intl;
        const stringResult = intl.string(modalSessionId(1126).t.JSdbBe);
        cResult[2] = stringResult;
        let tmp7 = stringResult;
      } else {
        tmp7 = cResult[2];
      }
      if (cResult[3] === Symbol.for("react.memo_cache_sentinel")) {
        const intl2 = modalSessionId(1126).intl;
        const stringResult1 = intl2.string(modalSessionId(1126).t.JNK1ue);
        cResult[3] = stringResult1;
        let tmp9 = stringResult1;
      } else {
        tmp9 = cResult[3];
      }
      if (cResult[4] === Symbol.for("react.memo_cache_sentinel")) {
        const intl3 = modalSessionId(1126).intl;
        const stringResult2 = intl3.string(modalSessionId(1126).t.mFvt9M);
        cResult[4] = stringResult2;
        let tmp11 = stringResult2;
      } else {
        tmp11 = cResult[4];
      }
      if (cResult[5] === Symbol.for("react.memo_cache_sentinel")) {
        const intl4 = modalSessionId(1126).intl;
        const stringResult3 = intl4.string(modalSessionId(1126).t.ecdUKD);
        cResult[5] = stringResult3;
        let tmp13 = stringResult3;
      } else {
        tmp13 = cResult[5];
      }
      if (cResult[6] === initiateAgeVerification) {
        if (cResult[7] === modalSessionId) {
          let arr = cResult[8];
        }
        if (cResult[9] === loading) {
          if (cResult[10] === tmp4.loadingIndicator) {
            let tmp15 = cResult[11];
          }
          const _Symbol = Symbol;
          if (cResult[12] === Symbol.for("react.memo_cache_sentinel")) {
            const tmp23 = closure_9(modalSessionId(7513).ShieldSpotIllustration, {});
            cResult[12] = tmp23;
            let tmp21 = tmp23;
          } else {
            tmp21 = cResult[12];
          }
          if (cResult[13] !== tmp4.centerText) {
            let obj3 = {
              variant: "heading-xl/bold",
              color: "mobile-text-heading-primary",
              style: tmp4.centerText,
              children: tmp7,
            };
            const tmp27 = closure_9(modalSessionId(5087).Text, obj3);
            let obj4 = { variant: "heading-md/medium", color: "text-strong", style: tmp4.centerText, children: tmp9 };
            const tmp28 = closure_9(modalSessionId(5087).Text, obj4);
            cResult[13] = tmp4.centerText;
            cResult[14] = tmp27;
            cResult[15] = tmp28;
            let tmp25 = tmp28;
            let tmp24 = tmp27;
          } else {
            tmp24 = cResult[14];
            tmp25 = cResult[15];
          }
          if (cResult[16] === tmp4.headerContainer) {
            if (cResult[17] === tmp24) {
              if (cResult[18] === tmp25) {
                let tmp29 = cResult[19];
              }
              if (cResult[20] !== arr) {
                let obj5 = {
                  hasIcons: false,
                  children: arr.map((item, index) => {
                    ({ title, description, onPress } = item);
                    return closure_1_9(
                      modalSessionId(closure_2[16]).TableRow,
                      { arrow: true, label, subLabel, onPress },
                      index,
                    );
                  }),
                };
                const tmp35 = closure_9(modalSessionId(6269).TableRowGroup, obj5);
                cResult[20] = arr;
                cResult[21] = tmp35;
                let tmp33 = tmp35;
              } else {
                tmp33 = cResult[21];
              }
              if (cResult[22] === tmp4.centerText) {
                if (cResult[23] === tmp4.helpLink) {
                  let tmp36 = cResult[24];
                }
                if (cResult[25] !== modalSessionId) {
                  const intl5 = modalSessionId(1126).intl;
                  const obj6 = {
                    handleOnHelpUrlHook() {
                      const obj = AgeVerificationActionCreatorsDefault;
                      obj.openUrl(HelpdeskUtilsDefault.getArticleURL(HelpdeskArticles.TIGGER_PAWTECT_LEARN_MORE));
                      const result = AgeVerificationAnalyticsUtils.trackAgeVerificationModalClicked(
                        modalSessionId,
                        AgeVerificationAnalyticsUtils.AgeVerificationModalVersion.RETRY,
                        AgeVerificationAnalyticsUtils.AgeVerificationModalCta.LEARN_MORE,
                      );
                    },
                  };
                  const formatResult = intl5.format(modalSessionId(1126).t["L+FgkZ"], obj6);
                  cResult[25] = modalSessionId;
                  cResult[26] = formatResult;
                  let tmp37 = formatResult;
                } else {
                  tmp37 = cResult[26];
                }
                if (cResult[27] === tmp36) {
                  if (cResult[28] === tmp37) {
                    let tmp39 = cResult[29];
                  }
                  if (cResult[30] === tmp4.container) {
                    if (cResult[31] === tmp29) {
                      if (cResult[32] === tmp33) {
                        if (cResult[33] === tmp39) {
                          let tmp42 = cResult[34];
                        }
                        if (cResult[35] === tmp42) {
                          if (cResult[36] === tmp15) {
                            let tmp46 = cResult[37];
                          }
                          return tmp46;
                        }
                        const obj7 = { children: null };
                        const items = [tmp15, tmp42];
                        obj7.children = items;
                        const tmp49 = closure_10(closure_11, obj7);
                        cResult[35] = tmp42;
                        cResult[36] = tmp15;
                        cResult[37] = tmp49;
                        tmp46 = tmp49;
                      }
                    }
                  }
                  const obj8 = { style: tmp4.container, children: null };
                  const items1 = [tmp29, tmp33, tmp39];
                  obj8.children = items1;
                  const tmp45 = closure_10(closure_6, obj8);
                  cResult[30] = tmp4.container;
                  cResult[31] = tmp29;
                  cResult[32] = tmp33;
                  cResult[33] = tmp39;
                  cResult[34] = tmp45;
                  tmp42 = tmp45;
                }
                const obj9 = { variant: "text-xs/medium", color: "text-muted", style: tmp36, children: tmp37 };
                const tmp41 = closure_9(modalSessionId(5087).Text, obj9);
                cResult[27] = tmp36;
                cResult[28] = tmp37;
                cResult[29] = tmp41;
                tmp39 = tmp41;
              }
              const items2 = [,];
              ({ centerText: arr4[0], helpLink: arr4[1] } = tmp4);
              cResult[22] = tmp4.centerText;
              cResult[23] = tmp4.helpLink;
              cResult[24] = items2;
              tmp36 = items2;
            }
          }
          const obj10 = { style: tmp4.headerContainer, children: null };
          const items3 = [tmp21, tmp24, tmp25];
          obj10.children = items3;
          const tmp32 = closure_10(closure_7, obj10);
          cResult[16] = tmp4.headerContainer;
          cResult[17] = tmp24;
          cResult[18] = tmp25;
          cResult[19] = tmp32;
          tmp29 = tmp32;
        }
        let tmp17Result = loading;
        if (loading) {
          const obj11 = { style: tmp4.loadingIndicator, size: "small", color: null };
          let WHITE;
          if (tmpResult2.isAndroid()) {
            WHITE = initiateAgeVerification(587).unsafe_rawColors.WHITE;
          }
          obj11.color = WHITE;
          tmp17Result = closure_9(closure_5, obj11);
          tmpResult2 = modalSessionId(1382);
        }
        cResult[9] = loading;
        cResult[10] = tmp4.loadingIndicator;
        cResult[11] = tmp17Result;
        tmp15 = tmp17Result;
      }
      const obj12 = { title: tmp11, description: tmp13, onPress: null };
      dependencyMap = asyncGeneratorStep(async () => {
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
                const result = v3(5916).trackAgeVerificationModalClicked(
                  modalSessionId,
                  v3(5916).AgeVerificationModalVersion.RETRY,
                  v3(5916).AgeVerificationModalCta.GET_STARTED,
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
      obj12.onPress = function onPress() {
        const self = this;
        const apply = closure_2.apply;
        if (typeof apply === "unknown") {
          let applyArgumentsResult = HermesBuiltin.applyArguments(self);
        } else {
          applyArgumentsResult = apply(self, arguments);
        }
        return applyArgumentsResult;
      };
      const items4 = [obj12];
      cResult[6] = initiateAgeVerification;
      cResult[7] = modalSessionId;
      cResult[8] = items4;
      arr = items4;
      const tmpResult = modalSessionId(7552);
    }
  : function GetStartedScreen(modalSessionId) {
      modalSessionId = modalSessionId.modalSessionId;
      initiateAgeVerification = undefined;
      let stringResult2;
      const tmp = closure_12();
      let obj = modalSessionId(stringResult2[10]);
      const initiateAgeVerification1 = obj.useInitiateAgeVerification({
        onComplete: modalSessionId.onClose,
        entryPoint: modalSessionId(stringResult2[9]).AgeVerificationModalEntryPoint.RETRY_MODAL,
      });
      ({ loading, initiateAgeVerification } = initiateAgeVerification1);
      let intl = modalSessionId(stringResult2[11]).intl;
      let obj2 = {
        onComplete: modalSessionId.onClose,
        entryPoint: modalSessionId(stringResult2[9]).AgeVerificationModalEntryPoint.RETRY_MODAL,
      };
      const intl2 = modalSessionId(stringResult2[11]).intl;
      const stringResult = intl.string(modalSessionId(stringResult2[11]).t.JSdbBe);
      const intl3 = modalSessionId(stringResult2[11]).intl;
      stringResult2 = intl3.string(modalSessionId(stringResult2[11]).t.mFvt9M);
      let items = [initiateAgeVerification, modalSessionId, stringResult2];
      const memo = noop.useMemo(() => {
        let obj = { title: stringResult2, description: null, onPress: null };
        const intl = modalSessionId(stringResult2[11]).intl;
        obj.description = intl.string(modalSessionId(stringResult2[11]).t.ecdUKD);
        closure_0 = asyncGeneratorStep(async () => {
          if (c0 === 2) {
            c0 = 3;
            throw new TypeError("Generator functions may not be called on executing generators");
          } else if (tmp3 === 3) {
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
              c0 = 2;
              if (0 === v1) {
                if (arg0 === 1) {
                  c0 = 3;
                  throw value;
                } else if (arg0 === 2) {
                  c0 = 3;
                  const obj3 = { value, done: true };
                  return obj3;
                } else {
                  const result = v3(5916).trackAgeVerificationModalClicked(
                    c0,
                    v3(5916).AgeVerificationModalVersion.RETRY,
                    v3(5916).AgeVerificationModalCta.GET_STARTED,
                  );
                  v1 = 1;
                  c0 = 1;
                  const obj4 = { value: v1(), done: false };
                  return obj4;
                }
              } else if (arg0 === 1) {
                c0 = 3;
                throw value;
              } else if (arg0 === 2) {
                c0 = 3;
                const obj = { value, done: true };
                return obj;
              } else {
                c0 = 3;
                return { value: "IconComponent", done: null };
              }
            } catch (tmp5) {
              c0 = tmp;
              throw tmp5;
            }
          }
        });
        obj.onPress = function onPress() {
          const self = this;
          const apply = closure_0.apply;
          if (typeof apply === "unknown") {
            let applyArgumentsResult = HermesBuiltin.applyArguments(self);
          } else {
            applyArgumentsResult = apply(self, arguments);
          }
          return applyArgumentsResult;
        };
        const items = [obj];
        return items;
      }, items);
      if (loading) {
        let obj3 = { style: tmp.loadingIndicator, size: "small", color: null };
        let WHITE;
        if (tmp2Result.isAndroid()) {
          WHITE = initiateAgeVerification(tmp3[6]).unsafe_rawColors.WHITE;
        }
        obj3.color = WHITE;
        loading = closure_9(closure_5, obj3);
        tmp2Result = tmp2(tmp3[12]);
      }
      let obj4 = { children: null };
      const items1 = [loading];
      const obj5 = { style: tmp.container, children: null };
      const obj6 = { style: tmp.headerContainer, children: null };
      const items2 = [
        closure_9(modalSessionId(stringResult2[13]).ShieldSpotIllustration, {}),
        closure_9(modalSessionId(stringResult2[14]).Text, {
          variant: "heading-xl/bold",
          color: "mobile-text-heading-primary",
          style: tmp.centerText,
          children: stringResult,
        }),
      ];
      const obj7 = {
        variant: "heading-xl/bold",
        color: "mobile-text-heading-primary",
        style: tmp.centerText,
        children: stringResult,
      };
      const stringResult1 = intl2.string(modalSessionId(stringResult2[11]).t.JNK1ue);
      items2[2] = closure_9(modalSessionId(stringResult2[14]).Text, {
        variant: "heading-md/medium",
        color: "text-strong",
        style: tmp.centerText,
        children: intl2.string(modalSessionId(stringResult2[11]).t.JNK1ue),
      });
      obj6.children = items2;
      const items3 = [closure_10(closure_7, obj6), ,];
      const obj8 = {
        variant: "heading-md/medium",
        color: "text-strong",
        style: tmp.centerText,
        children: intl2.string(modalSessionId(stringResult2[11]).t.JNK1ue),
      };
      items3[1] = closure_9(modalSessionId(stringResult2[15]).TableRowGroup, {
        hasIcons: false,
        children: memo.map((item, index) => {
          ({ title, description, onPress } = item);
          return closure_1_9(
            modalSessionId(stringResult2[16]).TableRow,
            { arrow: true, label, subLabel, onPress },
            index,
          );
        }),
      });
      const obj10 = { variant: "text-xs/medium", color: "text-muted", style: null, children: null };
      const items4 = [,];
      ({ centerText: arr6[0], helpLink: arr6[1] } = tmp);
      obj10.style = items4;
      const intl4 = tmp2(tmp3[11]).intl;
      obj10.children = intl4.format(modalSessionId(stringResult2[11]).t["L+FgkZ"], {
        handleOnHelpUrlHook() {
          const obj = AgeVerificationActionCreatorsDefault;
          obj.openUrl(HelpdeskUtilsDefault.getArticleURL(HelpdeskArticles.TIGGER_PAWTECT_LEARN_MORE));
          const result = AgeVerificationAnalyticsUtils.trackAgeVerificationModalClicked(
            modalSessionId,
            AgeVerificationAnalyticsUtils.AgeVerificationModalVersion.RETRY,
            AgeVerificationAnalyticsUtils.AgeVerificationModalCta.LEARN_MORE,
          );
        },
      });
      items3[2] = closure_9(modalSessionId(stringResult2[14]).Text, obj10);
      obj5.children = items3;
      items1[1] = closure_10(closure_6, obj5);
      obj4.children = items1;
      return closure_10(closure_11, obj4);
    };
