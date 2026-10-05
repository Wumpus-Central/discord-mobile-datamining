// === Module 14969: QuestOrbMultiplierPerkInfoActionSheet ===

// Module 14969 (QuestOrbMultiplierPerkInfoActionSheet)
import react_native from "react-native" /* 17 */;
import react2 from "react" /* 576 */;
import nativeDefault from "native" /* 587 */;
import intl6 from "intl" /* 1126 */;
import useSafeAreaInsetsDefault from "useSafeAreaInsets" /* 1618 */;
import HelpdeskUtilsDefault from "HelpdeskUtils" /* 2115 */;
import _modDef3529 from "module_3529" /* 3529 */;
import LinkingDefault from "Linking" /* 4565 */;
import NitroQuestOrbsMultiplierRive from "NitroQuestOrbsMultiplierRive" /* 4682 */;
import ActionSheetActionCreatorsDefault from "ActionSheetActionCreators" /* 4854 */;
import Text_Text from "Text/Text" /* 4886 */;
import components_Button_Button from "components/Button/Button" /* 5594 */;
import useTypeConsolidationTextTransform from "useTypeConsolidationTextTransform" /* 6469 */;
import Sheet_BottomSheet from "Sheet/BottomSheet" /* 6645 */;
import ActionSheetHeaderBar from "ActionSheetHeaderBar" /* 6649 */;
import openUserSettings from "openUserSettings" /* 6885 */;
import usePremiumFeatureUpsellGetNitroDefault from "usePremiumFeatureUpsellGetNitro" /* 9645 */;
import QuestOrbMultiplierUtils from "QuestOrbMultiplierUtils" /* 10008 */;
import PremiumRewardGradientDefault from "PremiumRewardGradient" /* 14966 */;
import react from "react" /* 19 */;
import Constants from "Constants" /* 1085 */;
import Fragment from "Fragment" /* 21 */;
import createStyles_mod from "createStyles" /* 4890 */;
import ReactCompilerGating_mod from "ReactCompilerGating" /* 558 */;
import size from "module_2" /* 2 */;

let BottomSheet, dependencyMap;

let c10;
let c9;
let hasOwnProperty;
let metroImportAll;
let metroImportDefault;
let metroRequire;
let obj2;
let obj3;
let obj4;
let obj5;
const View = react_native.View;
({ AnalyticsPages: hasOwnProperty, HelpdeskArticles: metroRequire, UserSettingsSections: metroImportDefault } = Constants);
({ jsx: metroImportAll, jsxs: c9, Fragment: c10 } = Fragment);
const contentStyles = { marginBottom: 0 };
let createStyles = createStyles_mod;
let obj = { container: obj2, contentContainer: obj3, text: obj4, buttonContainer: obj5, title: { textTransform: "uppercase", textAlign: "center", lineHeight: 34, paddingHorizontal: 0 }, riveContainer: { width: "100%", height: 160 } };
obj2 = { alignItems: "center", paddingHorizontal: nativeDefault.space.PX_16 };
createStyles = createStyles.createStyles;
obj3 = { alignItems: "center", width: "100%", marginTop: nativeDefault.space.PX_48 };
obj4 = { textAlign: "center", paddingHorizontal: nativeDefault.space.PX_24, paddingBottom: nativeDefault.space.PX_16 };
obj5 = { width: "100%", gap: nativeDefault.space.PX_12, marginVertical: nativeDefault.space.PX_16 };
let closure_12 = createStyles(obj);
let ReactCompilerGating = ReactCompilerGating_mod;
let closure_13 = ReactCompilerGating.isReactCompilerEnabled() ? ((eligibleToReceivePremiumRewards) => {
  let first;
  let intl;
  let intl2;
  let intl3;
  let items;
  let items1;
  let loading;
  let obj2;
  let onPress;
  let tmp17;
  let obj = react2;
  const cResult = obj.c(15);
  eligibleToReceivePremiumRewards = eligibleToReceivePremiumRewards.eligibleToReceivePremiumRewards;
  const tmp4 = closure_12();
  if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
    const fn = function l() {
      const obj = ActionSheetActionCreatorsDefault;
      obj.hideActionSheet();
      const obj2 = openUserSettings;
      const obj3 = { screen: constants2.PREMIUM };
      obj2.openUserSettings(obj3);
    };
    cResult[0] = fn;
    first = fn;
  } else {
    first = cResult[0];
  }
  ({ loading, onPress } = usePremiumFeatureUpsellGetNitroDefault(false, first, hasOwnProperty.QUEST_ORB_MULTIPLIER_PERK_INFO));
  usePremiumFeatureUpsellGetNitroDefault(false, first, hasOwnProperty.QUEST_ORB_MULTIPLIER_PERK_INFO);
  if (cResult[1] === Symbol.for("react.memo_cache_sentinel")) {
    class R {
      constructor() {
        const obj = ActionSheetActionCreatorsDefault;
        obj.hideActionSheet();
        const openURL = LinkingDefault.openURL;
        LinkingDefault;
        const obj2 = HelpdeskUtilsDefault;
        openURL(obj2.getArticleURL(constants.VIRTUAL_CURRENCY_ORB_MULTIPLIER_LEARN_MORE));
      }
    }
    cResult[1] = R;
  } else {
    class R {
      constructor() {
        const obj = ActionSheetActionCreatorsDefault;
        obj.hideActionSheet();
        const openURL = LinkingDefault.openURL;
        LinkingDefault;
        const obj2 = HelpdeskUtilsDefault;
        openURL(obj2.getArticleURL(constants.VIRTUAL_CURRENCY_ORB_MULTIPLIER_LEARN_MORE));
      }
    }
  }
  if (cResult[2] === Symbol.for("react.memo_cache_sentinel")) {
    class R {
      constructor() {
        const obj = ActionSheetActionCreatorsDefault;
        obj.hideActionSheet();
        const openURL = LinkingDefault.openURL;
        LinkingDefault;
        const obj2 = HelpdeskUtilsDefault;
        openURL(obj2.getArticleURL(constants.VIRTUAL_CURRENCY_ORB_MULTIPLIER_LEARN_MORE));
      }
    }
    cResult[2] = tmp9;
  } else {
    class R {
      constructor() {
        const obj = ActionSheetActionCreatorsDefault;
        obj.hideActionSheet();
        const openURL = LinkingDefault.openURL;
        LinkingDefault;
        const obj2 = HelpdeskUtilsDefault;
        openURL(obj2.getArticleURL(constants.VIRTUAL_CURRENCY_ORB_MULTIPLIER_LEARN_MORE));
      }
    }
  }
  if (eligibleToReceivePremiumRewards) {
    let tmp21;
    let tmp23;
    let tmp25;
    class R {
      constructor() {
        const obj = ActionSheetActionCreatorsDefault;
        obj.hideActionSheet();
        const openURL = LinkingDefault.openURL;
        LinkingDefault;
        const obj2 = HelpdeskUtilsDefault;
        openURL(obj2.getArticleURL(constants.VIRTUAL_CURRENCY_ORB_MULTIPLIER_LEARN_MORE));
      }
    }
    if (cResult[3] === Symbol.for("react.memo_cache_sentinel")) {
      class R {
        constructor() {
          const obj = ActionSheetActionCreatorsDefault;
          obj.hideActionSheet();
          const openURL = LinkingDefault.openURL;
          LinkingDefault;
          const obj2 = HelpdeskUtilsDefault;
          openURL(obj2.getArticleURL(constants.VIRTUAL_CURRENCY_ORB_MULTIPLIER_LEARN_MORE));
        }
      }
      let obj3 = { size: "lg", text: intl2.string(intl6.t.hvVgAZ), variant: "primary", onPress: R };
      const Button2 = components_Button_Button.Button;
      intl2 = intl6.intl;
      const tmp22 = metroImportAll(Button2, obj3);
      cResult[3] = tmp22;
      tmp21 = tmp22;
    } else {
      class R {
        constructor() {
          const obj = ActionSheetActionCreatorsDefault;
          obj.hideActionSheet();
          const openURL = LinkingDefault.openURL;
          LinkingDefault;
          const obj2 = HelpdeskUtilsDefault;
          openURL(obj2.getArticleURL(constants.VIRTUAL_CURRENCY_ORB_MULTIPLIER_LEARN_MORE));
        }
      }
    }
    const _Symbol2 = Symbol;
    if (cResult[4] === Symbol.for("react.memo_cache_sentinel")) {
      class R {
        constructor() {
          const obj = ActionSheetActionCreatorsDefault;
          obj.hideActionSheet();
          const openURL = LinkingDefault.openURL;
          LinkingDefault;
          const obj2 = HelpdeskUtilsDefault;
          openURL(obj2.getArticleURL(constants.VIRTUAL_CURRENCY_ORB_MULTIPLIER_LEARN_MORE));
        }
      }
      const obj4 = { size: "lg", variant: "secondary", text: intl3.string(intl6.t.cpT0Cq), onPress: tmp9 };
      const Button3 = components_Button_Button.Button;
      intl3 = intl6.intl;
      const tmp24 = metroImportAll(Button3, obj4);
      cResult[4] = tmp24;
      tmp23 = tmp24;
    } else {
      class R {
        constructor() {
          const obj = ActionSheetActionCreatorsDefault;
          obj.hideActionSheet();
          const openURL = LinkingDefault.openURL;
          LinkingDefault;
          const obj2 = HelpdeskUtilsDefault;
          openURL(obj2.getArticleURL(constants.VIRTUAL_CURRENCY_ORB_MULTIPLIER_LEARN_MORE));
        }
      }
    }
    if (cResult[5] !== tmp4.buttonContainer) {
      class R {
        constructor() {
          const obj = ActionSheetActionCreatorsDefault;
          obj.hideActionSheet();
          const openURL = LinkingDefault.openURL;
          LinkingDefault;
          const obj2 = HelpdeskUtilsDefault;
          openURL(obj2.getArticleURL(constants.VIRTUAL_CURRENCY_ORB_MULTIPLIER_LEARN_MORE));
        }
      }
      const obj5 = { style: tmp4.buttonContainer, children: items };
      items = [tmp21, tmp23];
      const tmp27 = React4(View, obj5);
      cResult[5] = tmp4.buttonContainer;
      cResult[6] = tmp27;
      tmp25 = tmp27;
    } else {
      class R {
        constructor() {
          const obj = ActionSheetActionCreatorsDefault;
          obj.hideActionSheet();
          const openURL = LinkingDefault.openURL;
          LinkingDefault;
          const obj2 = HelpdeskUtilsDefault;
          openURL(obj2.getArticleURL(constants.VIRTUAL_CURRENCY_ORB_MULTIPLIER_LEARN_MORE));
        }
      }
    }
    return tmp25;
  } else {
    let tmp10;
    class R {
      constructor() {
        const obj = ActionSheetActionCreatorsDefault;
        obj.hideActionSheet();
        const openURL = LinkingDefault.openURL;
        LinkingDefault;
        const obj2 = HelpdeskUtilsDefault;
        openURL(obj2.getArticleURL(constants.VIRTUAL_CURRENCY_ORB_MULTIPLIER_LEARN_MORE));
      }
    }
    const buttonContainer = tmp4.buttonContainer;
    if (cResult[7] === Symbol.for("react.memo_cache_sentinel")) {
      class R {
        constructor() {
          const obj = ActionSheetActionCreatorsDefault;
          obj.hideActionSheet();
          const openURL = LinkingDefault.openURL;
          LinkingDefault;
          const obj2 = HelpdeskUtilsDefault;
          openURL(obj2.getArticleURL(constants.VIRTUAL_CURRENCY_ORB_MULTIPLIER_LEARN_MORE));
        }
      }
      const stringResult = obj2.string(intl6.t.pj0XBN);
      cResult[7] = stringResult;
      tmp10 = stringResult;
    } else {
      class R {
        constructor() {
          const obj = ActionSheetActionCreatorsDefault;
          obj.hideActionSheet();
          const openURL = LinkingDefault.openURL;
          LinkingDefault;
          const obj2 = HelpdeskUtilsDefault;
          openURL(obj2.getArticleURL(constants.VIRTUAL_CURRENCY_ORB_MULTIPLIER_LEARN_MORE));
        }
      }
    }
    if (cResult[8] === onPress) {
      let tmp15;
      class R {
        constructor() {
          const obj = ActionSheetActionCreatorsDefault;
          obj.hideActionSheet();
          const openURL = LinkingDefault.openURL;
          LinkingDefault;
          const obj2 = HelpdeskUtilsDefault;
          openURL(obj2.getArticleURL(constants.VIRTUAL_CURRENCY_ORB_MULTIPLIER_LEARN_MORE));
        }
      }
      const _Symbol = Symbol;
      if (cResult[11] === Symbol.for("react.memo_cache_sentinel")) {
        class R {
          constructor() {
            const obj = ActionSheetActionCreatorsDefault;
            obj.hideActionSheet();
            const openURL = LinkingDefault.openURL;
            LinkingDefault;
            const obj2 = HelpdeskUtilsDefault;
            openURL(obj2.getArticleURL(constants.VIRTUAL_CURRENCY_ORB_MULTIPLIER_LEARN_MORE));
          }
        }
        const obj6 = { size: "lg", variant: "secondary", text: intl.string(intl6.t.PcTCB7), onPress: first };
        const Button = components_Button_Button.Button;
        intl = intl6.intl;
        const tmp16 = metroImportAll(Button, obj6);
        cResult[11] = tmp16;
        tmp15 = tmp16;
      } else {
        class R {
          constructor() {
            const obj = ActionSheetActionCreatorsDefault;
            obj.hideActionSheet();
            const openURL = LinkingDefault.openURL;
            LinkingDefault;
            const obj2 = HelpdeskUtilsDefault;
            openURL(obj2.getArticleURL(constants.VIRTUAL_CURRENCY_ORB_MULTIPLIER_LEARN_MORE));
          }
        }
      }
      if (cResult[12] === tmp4.buttonContainer) {
        class R {
          constructor() {
            const obj = ActionSheetActionCreatorsDefault;
            obj.hideActionSheet();
            const openURL = LinkingDefault.openURL;
            LinkingDefault;
            const obj2 = HelpdeskUtilsDefault;
            openURL(obj2.getArticleURL(constants.VIRTUAL_CURRENCY_ORB_MULTIPLIER_LEARN_MORE));
          }
        }
        return tmp17;
      }
      const obj7 = { style: buttonContainer, children: items1 };
      items1 = [tmp12, tmp15];
      const tmp20 = React4(View, obj7);
      cResult[12] = tmp4.buttonContainer;
      cResult[13] = tmp12;
      cResult[14] = tmp20;
      tmp17 = tmp20;
    }
    const obj8 = { size: "lg", variant: "primary", text: tmp10, onPress, loading };
    cResult[8] = onPress;
    cResult[9] = loading;
    cResult[10] = metroImportAll(components_Button_Button.Button, obj8);
    const tmp14 = metroImportAll(components_Button_Button.Button, obj8);
  }
}) : ((eligibleToReceivePremiumRewards) => {
  let intl;
  let intl2;
  let intl3;
  let intl4;
  let loading;
  let onPress;
  let tmp11;
  eligibleToReceivePremiumRewards = eligibleToReceivePremiumRewards.eligibleToReceivePremiumRewards;
  const tmp = closure_12();
  const callback = react.useCallback(() => {
    const obj = ActionSheetActionCreatorsDefault;
    obj.hideActionSheet();
    const obj2 = openUserSettings;
    const obj3 = { screen: constants2.PREMIUM };
    obj2.openUserSettings(obj3);
  }, []);
  ({ loading, onPress } = usePremiumFeatureUpsellGetNitroDefault(false, callback, hasOwnProperty.QUEST_ORB_MULTIPLIER_PERK_INFO));
  usePremiumFeatureUpsellGetNitroDefault(false, callback, hasOwnProperty.QUEST_ORB_MULTIPLIER_PERK_INFO);
  const callback1 = react.useCallback(() => {
    const obj = ActionSheetActionCreatorsDefault;
    obj.hideActionSheet();
    const openURL = LinkingDefault.openURL;
    LinkingDefault;
    const obj2 = HelpdeskUtilsDefault;
    openURL(obj2.getArticleURL(constants.VIRTUAL_CURRENCY_ORB_MULTIPLIER_LEARN_MORE));
  }, []);
  let obj = { style: tmp.buttonContainer, children: null };
  const callback2 = react.useCallback(() => {
    const obj = ActionSheetActionCreatorsDefault;
    obj.hideActionSheet();
  }, []);
  const Button = components_Button_Button.Button;
  if (eligibleToReceivePremiumRewards) {
    let obj2 = { size: "lg", text: intl3.string(intl6.t.hvVgAZ), variant: "primary", onPress: callback1 };
    intl3 = intl6.intl;
    const items = [metroImportAll(Button, obj2), ];
    let obj3 = { size: "lg", variant: "secondary", text: intl4.string(intl6.t.cpT0Cq), onPress: callback2 };
    const Button3 = components_Button_Button.Button;
    intl4 = intl6.intl;
    items[1] = metroImportAll(Button3, obj3);
    obj.children = items;
    tmp11 = obj;
  } else {
    const obj4 = { size: "lg", variant: "primary", text: intl.string(intl6.t.pj0XBN), onPress, loading };
    intl = intl6.intl;
    const items1 = [metroImportAll(Button, obj4), ];
    const obj5 = { size: "lg", variant: "secondary", text: intl2.string(intl6.t.PcTCB7), onPress: callback };
    const Button2 = components_Button_Button.Button;
    intl2 = intl6.intl;
    items1[1] = metroImportAll(Button2, obj5);
    obj.children = items1;
    tmp11 = obj;
  }
  return React4(View, tmp11);
});
ReactCompilerGating = ReactCompilerGating_mod;
let closure_14 = ReactCompilerGating.isReactCompilerEnabled() ? ((arg0) => {
  let body;
  let eligibleToReceivePremiumRewards;
  let first;
  let items;
  let items1;
  let title;
  let tmp9;
  const obj = react2;
  const cResult = obj.c(30);
  ({ title, body, eligibleToReceivePremiumRewards } = arg0);
  const tmp4 = closure_12();
  const obj2 = useTypeConsolidationTextTransform;
  const typeConsolidationTextTransform = obj2.useTypeConsolidationTextTransform("QuestOrbMultiplierPerkInfo");
  const bottom = useSafeAreaInsetsDefault().bottom;
  if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
    const tmp8 = metroImportAll(ActionSheetHeaderBar.ActionSheetHeaderBar, { variant: "floating" });
    cResult[0] = tmp8;
    first = tmp8;
  } else {
    first = cResult[0];
  }
  if (cResult[1] !== bottom) {
    const obj3 = { marginBottom: bottom };
    cResult[1] = bottom;
    cResult[2] = obj3;
    tmp9 = obj3;
  } else {
    tmp9 = cResult[2];
  }
  if (cResult[3] === tmp4.container) {
    let tmp10;
    let tmp11;
    let tmp14;
    if (cResult[4] === tmp9) {
      tmp10 = cResult[5];
    }
    const _Symbol = Symbol;
    if (cResult[6] === Symbol.for("react.memo_cache_sentinel")) {
      const tmp13 = metroImportAll(NitroQuestOrbsMultiplierRive.NitroQuestOrbsMultiplierRive, {});
      cResult[6] = tmp13;
      tmp11 = tmp13;
    } else {
      tmp11 = cResult[6];
    }
    if (cResult[7] !== tmp4.riveContainer) {
      const obj4 = { style: tmp4.riveContainer, children: tmp11 };
      const tmp17 = metroImportAll(View, obj4);
      cResult[7] = tmp4.riveContainer;
      cResult[8] = tmp17;
      tmp14 = tmp17;
    } else {
      tmp14 = cResult[8];
    }
    if (cResult[9] === tmp4.text) {
      if (cResult[10] === tmp4.title) {
        let tmp18;
        if (cResult[11] === typeConsolidationTextTransform) {
          tmp18 = cResult[12];
        }
        if (cResult[13] === tmp18) {
          let tmp19;
          if (cResult[14] === title) {
            tmp19 = cResult[15];
          }
          if (cResult[16] === body) {
            let tmp22;
            let tmp25;
            if (cResult[17] === tmp4.text) {
              tmp22 = cResult[18];
            }
            if (cResult[19] !== eligibleToReceivePremiumRewards) {
              const obj5 = { eligibleToReceivePremiumRewards };
              const tmp28 = metroImportAll(closure_13, obj5);
              cResult[19] = eligibleToReceivePremiumRewards;
              cResult[20] = tmp28;
              tmp25 = tmp28;
            } else {
              tmp25 = cResult[20];
            }
            if (cResult[21] === tmp4.contentContainer) {
              if (cResult[22] === tmp14) {
                if (cResult[23] === tmp19) {
                  if (cResult[24] === tmp22) {
                    let tmp29;
                    if (cResult[25] === tmp25) {
                      tmp29 = cResult[26];
                    }
                    if (cResult[27] === tmp29) {
                      let tmp33;
                      if (cResult[28] === tmp10) {
                        tmp33 = cResult[29];
                      }
                      return tmp33;
                    }
                    const obj6 = { children: items };
                    items = [first, ];
                    const obj7 = { style: tmp10, children: tmp29 };
                    items[1] = metroImportAll(View, obj7);
                    const tmp38 = React4(authStore, obj6);
                    cResult[27] = tmp29;
                    cResult[28] = tmp10;
                    cResult[29] = tmp38;
                    tmp33 = tmp38;
                  }
                }
              }
            }
            const obj8 = { style: tmp4.contentContainer, children: items1 };
            items1 = [tmp14, tmp19, tmp22, tmp25];
            const tmp32 = React4(View, obj8);
            cResult[21] = tmp4.contentContainer;
            cResult[22] = tmp14;
            cResult[23] = tmp19;
            cResult[24] = tmp22;
            cResult[25] = tmp25;
            cResult[26] = tmp32;
            tmp29 = tmp32;
          }
          const obj9 = { style: tmp4.text, variant: "text-sm/normal", children: body };
          const tmp24 = metroImportAll(Text_Text.Text, obj9);
          cResult[16] = body;
          cResult[17] = tmp4.text;
          cResult[18] = tmp24;
          tmp22 = tmp24;
        }
        const obj10 = { style: tmp18, variant: "display-md", color: "mobile-text-heading-primary", accessibilityRole: "header", children: title };
        const tmp21 = metroImportAll(Text_Text.Text, obj10);
        cResult[13] = tmp18;
        cResult[14] = title;
        cResult[15] = tmp21;
        tmp19 = tmp21;
      }
    }
    const items2 = [, , ];
    ({ text: arr2[0], title: arr2[1] } = tmp4);
    items2[2] = typeConsolidationTextTransform;
    cResult[9] = tmp4.text;
    cResult[10] = tmp4.title;
    cResult[11] = typeConsolidationTextTransform;
    cResult[12] = items2;
    tmp18 = items2;
  }
  const items3 = [tmp4.container, tmp9];
  cResult[3] = tmp4.container;
  cResult[4] = tmp9;
  cResult[5] = items3;
  tmp10 = items3;
}) : ((arg0) => {
  let body;
  let eligibleToReceivePremiumRewards;
  let items;
  let items1;
  let items2;
  let items3;
  let obj4;
  let title;
  ({ title, body, eligibleToReceivePremiumRewards } = arg0);
  const tmp = closure_12();
  const obj = useTypeConsolidationTextTransform;
  const typeConsolidationTextTransform = obj.useTypeConsolidationTextTransform("QuestOrbMultiplierPerkInfo");
  const obj2 = { children: items };
  const bottom = useSafeAreaInsetsDefault().bottom;
  items = [metroImportAll(ActionSheetHeaderBar.ActionSheetHeaderBar, { variant: "floating" }), ];
  const obj3 = { style: items1, children: React4(View, obj4) };
  items1 = [tmp.container, { marginBottom: bottom }];
  obj4 = { style: tmp.contentContainer, children: items2 };
  items2 = [, , , ];
  const obj5 = { style: tmp.riveContainer, children: metroImportAll(NitroQuestOrbsMultiplierRive.NitroQuestOrbsMultiplierRive, {}) };
  items2[0] = metroImportAll(View, obj5);
  const obj6 = { style: items3, variant: "display-md", color: "mobile-text-heading-primary", accessibilityRole: "header", children: title };
  items3 = [, , ];
  ({ text: arr4[0], title: arr4[1] } = tmp);
  items3[2] = typeConsolidationTextTransform;
  items2[1] = metroImportAll(Text_Text.Text, obj6);
  const obj7 = { style: tmp.text, variant: "text-sm/normal", children: body };
  items2[2] = metroImportAll(Text_Text.Text, obj7);
  items2[3] = metroImportAll(closure_13, { eligibleToReceivePremiumRewards });
  items[1] = metroImportAll(View, obj3);
  return React4(authStore, obj2);
});
ReactCompilerGating = ReactCompilerGating_mod;
const tmp5 = ReactCompilerGating.isReactCompilerEnabled() ? ((arg0) => {
  let multiplier;
  let obj6;
  let orbMultiplierEligibility;
  let tmp14;
  let tmp4;
  let tmp8;
  const obj = react2;
  const cResult = obj.c(17);
  ({ multiplier, orbMultiplierEligibility } = arg0);
  if (cResult[0] !== orbMultiplierEligibility) {
    const tmpResult = QuestOrbMultiplierUtils;
    const result = tmpResult.shouldReceiveQuestOrbMultiplier(orbMultiplierEligibility);
    cResult[0] = orbMultiplierEligibility;
    cResult[1] = result;
    tmp4 = result;
  } else {
    tmp4 = cResult[1];
  }
  const tmp6 = orbMultiplierEligibility === QuestOrbMultiplierUtils.QuestOrbMultiplierEligibilityType.NITRO || orbMultiplierEligibility === QuestOrbMultiplierUtils.QuestOrbMultiplierEligibilityType.UPSELL;
  if (orbMultiplierEligibility !== QuestOrbMultiplierUtils.QuestOrbMultiplierEligibilityType.XBOX_GAME_PASS) {
    let tmp12;
    const _Symbol2 = Symbol;
    if (cResult[3] === Symbol.for("react.memo_cache_sentinel")) {
      const intl2 = intl6.intl;
      const stringResult = intl2.string(intl6.t.Csf5Ol);
      cResult[3] = stringResult;
      tmp12 = stringResult;
    } else {
      tmp12 = cResult[3];
    }
    tmp8 = tmp12;
  } else {
    const _Symbol = Symbol;
    if (cResult[2] === Symbol.for("react.memo_cache_sentinel")) {
      const intl = intl6.intl;
      const stringResult1 = intl.string(_modDef3529.c5usUr);
      cResult[2] = stringResult1;
      tmp8 = stringResult1;
    } else {
      tmp8 = cResult[2];
    }
  }
  if (orbMultiplierEligibility !== QuestOrbMultiplierUtils.QuestOrbMultiplierEligibilityType.XBOX_GAME_PASS) {
    if (tmp4) {
      let tmp19;
      if (cResult[6] !== multiplier) {
        const intl5 = intl6.intl;
        const obj2 = { bonusOrbMultiplier: multiplier };
        const formatResult = intl5.format(intl6.t.NpUfej, obj2);
        cResult[6] = multiplier;
        cResult[7] = formatResult;
        tmp19 = formatResult;
      } else {
        tmp19 = cResult[7];
      }
      tmp14 = tmp19;
    } else {
      let tmp17;
      if (cResult[8] !== multiplier) {
        const intl4 = intl6.intl;
        const obj3 = { bonusOrbMultiplier: multiplier };
        const formatResult1 = intl4.format(intl6.t["G5k+lZ"], obj3);
        cResult[8] = multiplier;
        cResult[9] = formatResult1;
        tmp17 = formatResult1;
      } else {
        tmp17 = cResult[9];
      }
      tmp14 = tmp17;
    }
  } else if (cResult[4] !== multiplier) {
    const intl3 = intl6.intl;
    const obj4 = { bonusOrbMultiplier: multiplier };
    const formatResult2 = intl3.format(_modDef3529.UkrcSH, obj4);
    cResult[4] = multiplier;
    cResult[5] = formatResult2;
    tmp14 = formatResult2;
  } else {
    tmp14 = cResult[5];
  }
  if (cResult[10] === tmp14) {
    if (cResult[11] === tmp4) {
      let tmp21;
      if (cResult[12] === tmp8) {
        tmp21 = cResult[13];
      }
      if (cResult[14] === tmp6) {
        let tmp23;
        if (cResult[15] === tmp21) {
          tmp23 = cResult[16];
        }
        return tmp23;
      }
      const obj5 = { scrollable: false, handleDisabled: true, startExpanded: true, contentStyles, children: metroImportAll(PremiumRewardGradientDefault, obj6) };
      BottomSheet = Sheet_BottomSheet.BottomSheet;
      obj6 = { visible: tmp6, children: tmp21 };
      const tmp27 = metroImportAll(BottomSheet, obj5);
      cResult[14] = tmp6;
      cResult[15] = tmp21;
      cResult[16] = tmp27;
      tmp23 = tmp27;
    }
  }
  const tmp22 = metroImportAll(closure_14, { title: tmp8, body: tmp14, eligibleToReceivePremiumRewards: tmp4 });
  cResult[10] = tmp14;
  cResult[11] = tmp4;
  cResult[12] = tmp8;
  cResult[13] = tmp22;
  tmp21 = tmp22;
}) : ((multiplier) => {
  let c2;
  let obj3;
  let tmp7;
  multiplier = multiplier.multiplier;
  const orbMultiplierEligibility = multiplier.orbMultiplierEligibility;
  let obj = multiplier(10008);
  const result = obj.shouldReceiveQuestOrbMultiplier(orbMultiplierEligibility);
  dependencyMap = result;
  const items = [orbMultiplierEligibility];
  const items1 = [result, orbMultiplierEligibility, multiplier];
  const tmp4 = orbMultiplierEligibility === multiplier(10008).QuestOrbMultiplierEligibilityType.NITRO || orbMultiplierEligibility === multiplier(10008).QuestOrbMultiplierEligibilityType.UPSELL;
  const memo = react.useMemo(() => {
    let stringResult;
    if (orbMultiplierEligibility === QuestOrbMultiplierUtils.QuestOrbMultiplierEligibilityType.XBOX_GAME_PASS) {
      const intl2 = intl6.intl;
      stringResult = intl2.string(_modDef3529.c5usUr);
    } else {
      const intl = intl6.intl;
      stringResult = intl.string(intl6.t.Csf5Ol);
    }
    return stringResult;
  }, items);
  const memo1 = react.useMemo(() => {
    let formatResult;
    if (orbMultiplierEligibility === QuestOrbMultiplierUtils.QuestOrbMultiplierEligibilityType.XBOX_GAME_PASS) {
      const intl2 = intl6.intl;
      const obj2 = { bonusOrbMultiplier: multiplier };
      formatResult = intl2.format(_modDef3529.UkrcSH, obj2);
    } else {
      const intl = intl6.intl;
      const format = intl.format;
      const t = intl6.t;
      if (c2) {
        const obj3 = { bonusOrbMultiplier: multiplier };
        formatResult = format(t.NpUfej, obj3);
      } else {
        const obj = { bonusOrbMultiplier: multiplier };
        formatResult = format(t["G5k+lZ"], obj);
      }
    }
    return formatResult;
  }, items1);
  let obj2 = { scrollable: false, handleDisabled: true, startExpanded: true, contentStyles, children: closure_8(tmp7, obj3) };
  BottomSheet = tmp(6645).BottomSheet;
  obj3 = { visible: tmp4, children: closure_8(closure_14, { title: memo, body: memo1, eligibleToReceivePremiumRewards: result }) };
  tmp7 = orbMultiplierEligibility(14966);
  return closure_8(BottomSheet, obj2);
});
let result = size.fileFinishedImporting("modules/quests/native/QuestOrbMultiplierPerkInfoActionSheet.tsx");

export default tmp5;