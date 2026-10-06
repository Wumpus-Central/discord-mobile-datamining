// === Module 8298: AgeVerificationRetryScreen ===

// Module 8298 (AgeVerificationRetryScreen)
import nativeDefault from "native" /* 587 */;
import Constants from "Constants" /* 1085 */;
import HelpdeskUtilsDefault from "HelpdeskUtils" /* 2115 */;
import AgeVerificationActionCreatorsDefault from "AgeVerificationActionCreators" /* 8117 */;
import AgeVerificationAnalyticsUtils from "AgeVerificationAnalyticsUtils" /* 8119 */;
import _asyncToGenerator from "_asyncToGenerator" /* 5 */;
import react from "react" /* 19 */;
import react_native from "react-native" /* 17 */;
import Fragment from "Fragment" /* 21 */;
import createStyles_mod from "createStyles" /* 4896 */;
import ReactCompilerGating from "ReactCompilerGating" /* 558 */;
import size from "module_2" /* 2 */;

let c0, c1, dependencyMap;

let c10;
let c9;
let hasOwnProperty;
let metroImportDefault;
let metroRequire;
let obj2;
let obj3;
let obj4;
let unpackModuleId;
({ ActivityIndicator: hasOwnProperty, ScrollView: metroRequire, View: metroImportDefault } = react_native);
const HelpdeskArticles = Constants.HelpdeskArticles;
({ jsx: c9, jsxs: c10, Fragment: unpackModuleId } = Fragment);
let createStyles = createStyles_mod;
let obj = { loadingIndicator: { position: "absolute", top: 0, left: 0, right: 0, bottom: 0, zIndex: 1 }, container: obj2, headerContainer: obj3, centerText: { textAlign: "center" }, helpLink: obj4 };
obj2 = { paddingHorizontal: nativeDefault.space.PX_16, flex: 1 };
createStyles = createStyles.createStyles;
obj3 = { paddingVertical: nativeDefault.space.PX_16, alignItems: "center", gap: nativeDefault.space.PX_8 };
obj4 = { marginTop: nativeDefault.space.PX_8 };
let closure_12 = createStyles(obj);
let tmp5 = ReactCompilerGating.isReactCompilerEnabled() ? ((arg0) => {
  let WHITE;
  let closure_2;
  let initiateAgeVerification;
  let items;
  let items1;
  let items3;
  let loading;
  let modalSessionId;
  let onClose;
  let tmp11;
  let tmp13;
  let tmp5;
  let tmp7;
  let tmp9;
  const tmp2 = dependencyMap;
  let obj = modalSessionId(576);
  const cResult = obj.c(38);
  ({ onClose, modalSessionId } = arg0);
  const tmp4 = closure_12();
  if (cResult[0] !== onClose) {
    let obj2 = { onComplete: onClose, entryPoint: modalSessionId(8119).AgeVerificationModalEntryPoint.RETRY_MODAL };
    cResult[0] = onClose;
    cResult[1] = obj2;
    tmp5 = obj2;
  } else {
    tmp5 = cResult[1];
  }
  const tmpResult = modalSessionId(5108);
  const initiateAgeVerification1 = tmpResult.useInitiateAgeVerification(tmp5);
  ({ loading, initiateAgeVerification } = initiateAgeVerification1);
  if (cResult[2] === Symbol.for("react.memo_cache_sentinel")) {
    const intl = modalSessionId(1126).intl;
    const stringResult = intl.string(modalSessionId(1126).t.JSdbBe);
    cResult[2] = stringResult;
    tmp7 = stringResult;
  } else {
    tmp7 = cResult[2];
  }
  if (cResult[3] === Symbol.for("react.memo_cache_sentinel")) {
    const intl2 = modalSessionId(1126).intl;
    const stringResult1 = intl2.string(modalSessionId(1126).t.JNK1ue);
    cResult[3] = stringResult1;
    tmp9 = stringResult1;
  } else {
    tmp9 = cResult[3];
  }
  if (cResult[4] === Symbol.for("react.memo_cache_sentinel")) {
    const intl3 = modalSessionId(1126).intl;
    const stringResult2 = intl3.string(modalSessionId(1126).t.mFvt9M);
    cResult[4] = stringResult2;
    tmp11 = stringResult2;
  } else {
    tmp11 = cResult[4];
  }
  if (cResult[5] === Symbol.for("react.memo_cache_sentinel")) {
    const intl4 = modalSessionId(1126).intl;
    const stringResult3 = intl4.string(modalSessionId(1126).t.ecdUKD);
    cResult[5] = stringResult3;
    tmp13 = stringResult3;
  } else {
    tmp13 = cResult[5];
  }
  if (cResult[6] === initiateAgeVerification) {
    let arr;
    if (cResult[7] === modalSessionId) {
      arr = cResult[8];
    }
    if (cResult[9] === loading) {
      let tmp15;
      let tmp21;
      let tmp25;
      let tmp24;
      if (cResult[10] === tmp4.loadingIndicator) {
        tmp15 = cResult[11];
      }
      const _Symbol = Symbol;
      const container = tmp4.container;
      if (cResult[12] === Symbol.for("react.memo_cache_sentinel")) {
        const tmp23 = closure_9(modalSessionId(8130).ShieldSpotIllustration, {});
        cResult[12] = tmp23;
        tmp21 = tmp23;
      } else {
        tmp21 = cResult[12];
      }
      if (cResult[13] !== tmp4.centerText) {
        let obj3 = { variant: "heading-xl/bold", color: "mobile-text-heading-primary", style: tmp4.centerText, children: tmp7 };
        const tmp27 = closure_9(modalSessionId(4892).Text, obj3);
        let obj4 = { variant: "heading-md/medium", color: "text-strong", style: tmp4.centerText, children: tmp9 };
        const tmp28 = closure_9(modalSessionId(4892).Text, obj4);
        cResult[13] = tmp4.centerText;
        cResult[14] = tmp27;
        cResult[15] = tmp28;
        tmp25 = tmp28;
        tmp24 = tmp27;
      } else {
        tmp24 = cResult[14];
        tmp25 = cResult[15];
      }
      if (cResult[16] === tmp4.headerContainer) {
        if (cResult[17] === tmp24) {
          let tmp29;
          let tmp33;
          if (cResult[18] === tmp25) {
            tmp29 = cResult[19];
          }
          if (cResult[20] !== arr) {
            const obj5 = {
              hasIcons: false,
              children: arr.map((item, index) => {
                          let description;
                          let onPress;
                          let title;
                          ({ title, description, onPress } = item);
                          return closure_1_9(modalSessionId(closure_2[16]).TableRow, { arrow: true, label, subLabel, onPress }, index);
                        })
            };
            const TableRowGroup = modalSessionId(6081).TableRowGroup;
            const tmp35 = closure_9(TableRowGroup, obj5);
            cResult[20] = arr;
            cResult[21] = tmp35;
            tmp33 = tmp35;
          } else {
            tmp33 = cResult[21];
          }
          if (cResult[22] === tmp4.centerText) {
            let tmp36;
            let tmp37;
            if (cResult[23] === tmp4.helpLink) {
              tmp36 = cResult[24];
            }
            if (cResult[25] !== modalSessionId) {
              const intl5 = modalSessionId(1126).intl;
              const obj6 = {
                handleOnHelpUrlHook() {
                              const openUrl = AgeVerificationActionCreatorsDefault.openUrl;
                              AgeVerificationActionCreatorsDefault;
                              const obj = HelpdeskUtilsDefault;
                              openUrl(obj.getArticleURL(HelpdeskArticles.TIGGER_PAWTECT_LEARN_MORE));
                              const trackAgeVerificationModalClicked = AgeVerificationAnalyticsUtils.trackAgeVerificationModalClicked;
                              AgeVerificationAnalyticsUtils;
                              const result = trackAgeVerificationModalClicked(modalSessionId, AgeVerificationAnalyticsUtils.AgeVerificationModalVersion.RETRY, AgeVerificationAnalyticsUtils.AgeVerificationModalCta.LEARN_MORE);
                            }
              };
              const formatResult = intl5.format(modalSessionId(1126).t["L+FgkZ"], obj6);
              cResult[25] = modalSessionId;
              cResult[26] = formatResult;
              tmp37 = formatResult;
            } else {
              tmp37 = cResult[26];
            }
            if (cResult[27] === tmp36) {
              let tmp39;
              if (cResult[28] === tmp37) {
                tmp39 = cResult[29];
              }
              if (cResult[30] === tmp4.container) {
                if (cResult[31] === tmp29) {
                  if (cResult[32] === tmp33) {
                    let tmp42;
                    if (cResult[33] === tmp39) {
                      tmp42 = cResult[34];
                    }
                    if (cResult[35] === tmp42) {
                      let tmp46;
                      if (cResult[36] === tmp15) {
                        tmp46 = cResult[37];
                      }
                      return tmp46;
                    }
                    const obj7 = { children: items };
                    items = [tmp15, tmp42];
                    const tmp49 = closure_10(closure_11, obj7);
                    cResult[35] = tmp42;
                    cResult[36] = tmp15;
                    cResult[37] = tmp49;
                    tmp46 = tmp49;
                  }
                }
              }
              const obj8 = { style: container, children: items1 };
              items1 = [tmp29, tmp33, tmp39];
              const tmp45 = closure_10(closure_6, obj8);
              cResult[30] = tmp4.container;
              cResult[31] = tmp29;
              cResult[32] = tmp33;
              cResult[33] = tmp39;
              cResult[34] = tmp45;
              tmp42 = tmp45;
            }
            const obj9 = { variant: "text-xs/medium", color: "text-muted", style: tmp36, children: tmp37 };
            const tmp41 = closure_9(modalSessionId(4892).Text, obj9);
            cResult[27] = tmp36;
            cResult[28] = tmp37;
            cResult[29] = tmp41;
            tmp39 = tmp41;
          }
          const items2 = [, ];
          ({ centerText: arr4[0], helpLink: arr4[1] } = tmp4);
          cResult[22] = tmp4.centerText;
          cResult[23] = tmp4.helpLink;
          cResult[24] = items2;
          tmp36 = items2;
        }
      }
      const obj10 = { style: tmp4.headerContainer, children: items3 };
      items3 = [tmp21, tmp24, tmp25];
      const tmp32 = closure_10(closure_7, obj10);
      cResult[16] = tmp4.headerContainer;
      cResult[17] = tmp24;
      cResult[18] = tmp25;
      cResult[19] = tmp32;
      tmp29 = tmp32;
    }
    let tmp17Result = loading;
    if (tmp17Result) {
      const obj11 = { style: tmp4.loadingIndicator, size: "small", color: WHITE };
      WHITE = undefined;
      const tmpResult2 = modalSessionId(1369);
      if (tmpResult2.isAndroid()) {
        WHITE = initiateAgeVerification(587).unsafe_rawColors.WHITE;
      }
      tmp17Result = closure_9(closure_5, obj11);
    }
    cResult[9] = loading;
    cResult[10] = tmp4.loadingIndicator;
    cResult[11] = tmp17Result;
    tmp15 = tmp17Result;
  }
  const obj12 = {
    title: tmp11,
    description: tmp13,
    onPress: function() {
      return closure_2(...arguments);
    }
  };
  dependencyMap = _asyncToGenerator(async () => {
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
            const trackAgeVerificationModalClicked = v3(closure_1_2[9]).trackAgeVerificationModalClicked;
            const tmp6 = v3(closure_1_2[9]);
            const result = trackAgeVerificationModalClicked(modalSessionId, v3(closure_1_2[9]).AgeVerificationModalVersion.RETRY, v3(closure_1_2[9]).AgeVerificationModalCta.GET_STARTED);
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
  });
  const items4 = [obj12];
  cResult[6] = initiateAgeVerification;
  cResult[7] = modalSessionId;
  cResult[8] = items4;
  arr = items4;
}) : ((modalSessionId) => {
  let WHITE;
  let initiateAgeVerification;
  let intl4;
  let items1;
  let items2;
  let items3;
  let items4;
  let loading;
  let obj11;
  modalSessionId = modalSessionId.modalSessionId;
  initiateAgeVerification = undefined;
  let stringResult2;
  const onClose = modalSessionId.onClose;
  const tmp = closure_12();
  const tmp2 = modalSessionId;
  const tmp3 = stringResult2;
  let obj = modalSessionId(stringResult2[10]);
  let obj2 = { onComplete: onClose, entryPoint: modalSessionId(stringResult2[9]).AgeVerificationModalEntryPoint.RETRY_MODAL };
  const initiateAgeVerification1 = obj.useInitiateAgeVerification(obj2);
  ({ loading, initiateAgeVerification } = initiateAgeVerification1);
  let intl = modalSessionId(stringResult2[11]).intl;
  const stringResult = intl.string(modalSessionId(stringResult2[11]).t.JSdbBe);
  const intl2 = modalSessionId(stringResult2[11]).intl;
  const stringResult1 = intl2.string(modalSessionId(stringResult2[11]).t.JNK1ue);
  const intl3 = modalSessionId(stringResult2[11]).intl;
  stringResult2 = intl3.string(modalSessionId(stringResult2[11]).t.mFvt9M);
  let items = [initiateAgeVerification, modalSessionId, stringResult2];
  const memo = react.useMemo(() => {
    let intl;
    let obj = {
      title: stringResult2,
      description: intl.string(modalSessionId(stringResult2[11]).t.ecdUKD),
      onPress: function() {
        return closure_0(...arguments);
      }
    };
    intl = modalSessionId(stringResult2[11]).intl;
    let closure_0 = _asyncToGenerator(async () => {
      let v1;
      if (c0 === 2) {
        c0 = 3;
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
              const trackAgeVerificationModalClicked = v3(stringResult2[9]).trackAgeVerificationModalClicked;
              const tmp10 = v3(stringResult2[9]);
              const result = trackAgeVerificationModalClicked(c0, v3(stringResult2[9]).AgeVerificationModalVersion.RETRY, v3(stringResult2[9]).AgeVerificationModalCta.GET_STARTED);
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
        } catch (tmp4) {
          c0 = 3;
          throw tmp4;
        }
      }
    });
    const items = [obj];
    return items;
  }, items);
  if (loading) {
    let obj3 = { style: tmp.loadingIndicator, size: "small", color: WHITE };
    WHITE = undefined;
    const tmp2Result = tmp2(tmp3[12]);
    if (tmp2Result.isAndroid()) {
      WHITE = initiateAgeVerification(tmp3[6]).unsafe_rawColors.WHITE;
    }
    loading = closure_9(closure_5, obj3);
  }
  let obj4 = { children: items1 };
  items1 = [loading, ];
  const obj5 = { style: tmp.container, children: items3 };
  const obj6 = { style: tmp.headerContainer, children: items2 };
  items2 = [closure_9(tmp2(tmp3[13]).ShieldSpotIllustration, {}), , ];
  const obj7 = { variant: "heading-xl/bold", color: "mobile-text-heading-primary", style: tmp.centerText, children: stringResult };
  items2[1] = closure_9(tmp2(tmp3[14]).Text, obj7);
  const obj8 = { variant: "heading-md/medium", color: "text-strong", style: tmp.centerText, children: stringResult1 };
  items2[2] = closure_9(tmp2(tmp3[14]).Text, obj8);
  items3 = [closure_10(closure_7, obj6), , ];
  const obj9 = {
    hasIcons: false,
    children: memo.map((item, index) => {
      let description;
      let onPress;
      let title;
      ({ title, description, onPress } = item);
      return closure_1_9(modalSessionId(stringResult2[16]).TableRow, { arrow: true, label, subLabel, onPress }, index);
    })
  };
  const TableRowGroup = tmp2(tmp3[15]).TableRowGroup;
  items3[1] = closure_9(TableRowGroup, obj9);
  const obj10 = { variant: "text-xs/medium", color: "text-muted", style: items4, children: intl4.format(tmp2(tmp3[11]).t["L+FgkZ"], obj11) };
  items4 = [, ];
  ({ centerText: arr6[0], helpLink: arr6[1] } = tmp);
  const Text = tmp2(tmp3[14]).Text;
  intl4 = tmp2(tmp3[11]).intl;
  obj11 = {
    handleOnHelpUrlHook() {
      const openUrl = AgeVerificationActionCreatorsDefault.openUrl;
      AgeVerificationActionCreatorsDefault;
      const obj = HelpdeskUtilsDefault;
      openUrl(obj.getArticleURL(HelpdeskArticles.TIGGER_PAWTECT_LEARN_MORE));
      const trackAgeVerificationModalClicked = AgeVerificationAnalyticsUtils.trackAgeVerificationModalClicked;
      AgeVerificationAnalyticsUtils;
      const result = trackAgeVerificationModalClicked(modalSessionId, AgeVerificationAnalyticsUtils.AgeVerificationModalVersion.RETRY, AgeVerificationAnalyticsUtils.AgeVerificationModalCta.LEARN_MORE);
    }
  };
  items3[2] = closure_9(Text, obj10);
  items1[1] = closure_10(closure_6, obj5);
  return closure_10(closure_11, obj4);
});
let result = size.fileFinishedImporting("modules/age_assurance/native/AgeVerificationRetryScreen.tsx");

export default tmp5;