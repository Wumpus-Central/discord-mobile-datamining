// === Module 15359: QuestOrbMultiplierPerkInfoActionSheet ===

// Module 15359 (QuestOrbMultiplierPerkInfoActionSheet)
import c from "c" /* 576 */;
import nativeDefault from "native" /* 587 */;
import util from "util" /* 1126 */;
import useSafeAreaInsetsDefault from "useSafeAreaInsets" /* 1631 */;
import HelpdeskUtilsDefault from "HelpdeskUtils" /* 2127 */;
import _modDef3633 from "module_3633" /* 3633 */;
import LinkingDefault from "Linking" /* 4765 */;
import NitroQuestOrbsMultiplierRive from "NitroQuestOrbsMultiplierRive" /* 4883 */;
import ActionSheetActionCreatorsDefault from "ActionSheetActionCreators" /* 5055 */;
import Text_Text from "Text/Text" /* 5087 */;
import components_Button_Button from "components/Button/Button" /* 5376 */;
import useTypeConsolidationTextTransform from "useTypeConsolidationTextTransform" /* 6661 */;
import Sheet_BottomSheet from "Sheet/BottomSheet" /* 6836 */;
import ActionSheetHeaderBar from "ActionSheetHeaderBar" /* 6840 */;
import openUserSettings from "openUserSettings" /* 7087 */;
import QuestOrbMultiplierUtils from "QuestOrbMultiplierUtils" /* 9142 */;
import usePremiumFeatureUpsellGetNitroDefault from "usePremiumFeatureUpsellGetNitro" /* 9489 */;
import PremiumRewardGradientDefault from "PremiumRewardGradient" /* 15356 */;
import noop from "module_19" /* 19 */;

require = fn;
const View = fn(17).View;
const Constants = fn(1085);
({ AnalyticsPages: hasOwnProperty, HelpdeskArticles: metroRequire, UserSettingsSections: closure_7 } = Constants);
const jsxProd = fn(21);
({ jsx: closure_8, jsxs: closure_9, Fragment: c10 } = jsxProd);
const contentStyles = { marginBottom: 0 };
const createStyles = fn(5091);
let obj2 = { container: { alignItems: "center", paddingHorizontal: nativeDefault.space.PX_16 }, contentContainer: null, text: null, buttonContainer: null, title: null, riveContainer: null };
let obj3 = { alignItems: "center", paddingHorizontal: nativeDefault.space.PX_16 };
obj2.contentContainer = { alignItems: "center", width: "100%", marginTop: nativeDefault.space.PX_48 };
let obj4 = { alignItems: "center", width: "100%", marginTop: nativeDefault.space.PX_48 };
obj2.text = { textAlign: "center", paddingHorizontal: nativeDefault.space.PX_24, paddingBottom: nativeDefault.space.PX_16 };
let obj5 = { textAlign: "center", paddingHorizontal: nativeDefault.space.PX_24, paddingBottom: nativeDefault.space.PX_16 };
obj2.buttonContainer = { width: "100%", gap: nativeDefault.space.PX_12, marginVertical: nativeDefault.space.PX_16 };
obj2.title = { textTransform: "uppercase", textAlign: "center", lineHeight: 34, paddingHorizontal: 0 };
obj2.riveContainer = { width: "100%", height: 160 };
let closure_12 = createStyles.createStyles(obj2);
let ReactCompilerGating = fn(558);
let closure_13 = ReactCompilerGating.isReactCompilerEnabled() ? (function Footer(eligibleToReceivePremiumRewards) {
  const cResult = c.c(15);
  const tmp4 = closure_12();
  if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
    const fn = function l() {
      ActionSheetActionCreatorsDefault.hideActionSheet();
      openUserSettings.openUserSettings({ screen: constants2.PREMIUM });
    };
    cResult[0] = fn;
    let first = fn;
  } else {
    first = cResult[0];
  }
  ({ loading, onPress } = usePremiumFeatureUpsellGetNitroDefault(false, first, constants.QUEST_ORB_MULTIPLIER_PERK_INFO));
  if (cResult[1] === Symbol.for("react.memo_cache_sentinel")) {
    class R {
      constructor() {
        obj = closure_1_1(closure_1_2[8]);
        hideActionSheetResult = obj.hideActionSheet();
        obj2 = closure_1_1(closure_1_2[11]);
        obj3 = closure_1_1(closure_1_2[12]);
        openURLResult = obj2.openURL(obj3.getArticleURL(closure_1_6.VIRTUAL_CURRENCY_ORB_MULTIPLIER_LEARN_MORE));
        return;
      }
    }
    cResult[1] = R;
  } else {
    class R {
      constructor() {
        obj = closure_1_1(closure_1_2[8]);
        hideActionSheetResult = obj.hideActionSheet();
        obj2 = closure_1_1(closure_1_2[11]);
        obj3 = closure_1_1(closure_1_2[12]);
        openURLResult = obj2.openURL(obj3.getArticleURL(closure_1_6.VIRTUAL_CURRENCY_ORB_MULTIPLIER_LEARN_MORE));
        return;
      }
    }
  }
  if (cResult[2] === Symbol.for("react.memo_cache_sentinel")) {
    class M {
      constructor() {
        obj = closure_1_1(closure_1_2[8]);
        hideActionSheetResult = obj.hideActionSheet();
        return;
      }
    }
    cResult[2] = M;
  } else {
    class M {
      constructor() {
        obj = closure_1_1(closure_1_2[8]);
        hideActionSheetResult = obj.hideActionSheet();
        return;
      }
    }
  }
  if (eligibleToReceivePremiumRewards.eligibleToReceivePremiumRewards) {
    class M {
      constructor() {
        obj = closure_1_1(closure_1_2[8]);
        hideActionSheetResult = obj.hideActionSheet();
        return;
      }
    }
    if (cResult[3] === Symbol.for("react.memo_cache_sentinel")) {
      class M {
        constructor() {
          obj = closure_1_1(closure_1_2[8]);
          hideActionSheetResult = obj.hideActionSheet();
          return;
        }
      }
      const obj3 = { size: "lg", text: null, variant: "primary", onPress: null };
      const intl2 = util.intl;
      obj3.text = intl2.string(util.t.hvVgAZ);
      obj3.onPress = R;
      const tmp21 = closure_1_8(components_Button_Button.Button, obj3);
      cResult[3] = tmp21;
      const tmp20 = tmp21;
    } else {
      class M {
        constructor() {
          obj = closure_1_1(closure_1_2[8]);
          hideActionSheetResult = obj.hideActionSheet();
          return;
        }
      }
    }
    const _Symbol2 = Symbol;
    if (cResult[4] === Symbol.for("react.memo_cache_sentinel")) {
      class M {
        constructor() {
          obj = closure_1_1(closure_1_2[8]);
          hideActionSheetResult = obj.hideActionSheet();
          return;
        }
      }
      const obj4 = { size: "lg", variant: "secondary", text: null, onPress: null };
      const intl3 = util.intl;
      obj4.text = intl3.string(util.t.cpT0Cq);
      obj4.onPress = M;
      const tmp23 = closure_1_8(components_Button_Button.Button, obj4);
      cResult[4] = tmp23;
      const tmp22 = tmp23;
    } else {
      class M {
        constructor() {
          obj = closure_1_1(closure_1_2[8]);
          hideActionSheetResult = obj.hideActionSheet();
          return;
        }
      }
    }
    if (cResult[5] !== tmp4.buttonContainer) {
      class M {
        constructor() {
          obj = closure_1_1(closure_1_2[8]);
          hideActionSheetResult = obj.hideActionSheet();
          return;
        }
      }
      const obj5 = { style: tmp4.buttonContainer, children: null };
      const items = [tmp20, tmp22];
      obj5.children = items;
      const tmp26 = options(View, obj5);
      cResult[5] = tmp4.buttonContainer;
      cResult[6] = tmp26;
      const tmp24 = tmp26;
    } else {
      class M {
        constructor() {
          obj = closure_1_1(closure_1_2[8]);
          hideActionSheetResult = obj.hideActionSheet();
          return;
        }
      }
    }
    return tmp24;
  } else {
    class M {
      constructor() {
        obj = closure_1_1(closure_1_2[8]);
        hideActionSheetResult = obj.hideActionSheet();
        return;
      }
    }
    if (cResult[7] === Symbol.for("react.memo_cache_sentinel")) {
      class M {
        constructor() {
          obj = closure_1_1(closure_1_2[8]);
          hideActionSheetResult = obj.hideActionSheet();
          return;
        }
      }
      const stringResult = obj2.string(util.t.pj0XBN);
      cResult[7] = stringResult;
      const tmp9 = stringResult;
    } else {
      class M {
        constructor() {
          obj = closure_1_1(closure_1_2[8]);
          hideActionSheetResult = obj.hideActionSheet();
          return;
        }
      }
    }
    if (cResult[8] === onPress) {
      class M {
        constructor() {
          obj = closure_1_1(closure_1_2[8]);
          hideActionSheetResult = obj.hideActionSheet();
          return;
        }
      }
      const _Symbol = Symbol;
      if (cResult[11] === Symbol.for("react.memo_cache_sentinel")) {
        class M {
          constructor() {
            obj = closure_1_1(closure_1_2[8]);
            hideActionSheetResult = obj.hideActionSheet();
            return;
          }
        }
        const obj6 = { size: "lg", variant: "secondary", text: null, onPress: null };
        const intl = util.intl;
        obj6.text = intl.string(util.t.PcTCB7);
        obj6.onPress = first;
        const tmp15 = closure_1_8(components_Button_Button.Button, obj6);
        cResult[11] = tmp15;
        const tmp14 = tmp15;
      } else {
        class M {
          constructor() {
            obj = closure_1_1(closure_1_2[8]);
            hideActionSheetResult = obj.hideActionSheet();
            return;
          }
        }
      }
      if (cResult[12] === tmp4.buttonContainer) {
        class M {
          constructor() {
            obj = closure_1_1(closure_1_2[8]);
            hideActionSheetResult = obj.hideActionSheet();
            return;
          }
        }
        return tmp16;
      }
      const obj7 = { style: tmp4.buttonContainer, children: null };
      const items1 = [tmp11, tmp14];
      obj7.children = items1;
      const tmp19 = options(View, obj7);
      cResult[12] = tmp4.buttonContainer;
      cResult[13] = tmp11;
      cResult[14] = tmp19;
      tmp16 = tmp19;
    }
    const obj8 = { size: "lg", variant: "primary", text: tmp9, onPress, loading };
    const tmp13 = closure_1_8(components_Button_Button.Button, obj8);
    cResult[8] = onPress;
    cResult[9] = loading;
    cResult[10] = tmp13;
  }
  const tmp6 = usePremiumFeatureUpsellGetNitroDefault(false, first, constants.QUEST_ORB_MULTIPLIER_PERK_INFO);
}) : (function Footer(eligibleToReceivePremiumRewards) {
  const callback = noop.useCallback(() => {
    ActionSheetActionCreatorsDefault.hideActionSheet();
    openUserSettings.openUserSettings({ screen: constants2.PREMIUM });
  }, []);
  const tmp = closure_12();
  ({ loading, onPress } = usePremiumFeatureUpsellGetNitroDefault(false, callback, constants.QUEST_ORB_MULTIPLIER_PERK_INFO));
  const callback1 = noop.useCallback(() => {
    ActionSheetActionCreatorsDefault.hideActionSheet();
    const obj2 = LinkingDefault;
    obj2.openURL(HelpdeskUtilsDefault.getArticleURL(constants.VIRTUAL_CURRENCY_ORB_MULTIPLIER_LEARN_MORE));
  }, []);
  let obj = { style: tmp.buttonContainer, children: null };
  const callback2 = noop.useCallback(() => {
    ActionSheetActionCreatorsDefault.hideActionSheet();
  }, []);
  const Button = components_Button_Button.Button;
  if (eligibleToReceivePremiumRewards.eligibleToReceivePremiumRewards) {
    let obj2 = { size: "lg", text: null, variant: "primary", onPress: null };
    const intl3 = util.intl;
    obj2.text = intl3.string(util.t.hvVgAZ);
    obj2.onPress = callback1;
    const items = [closure_1_8(Button, obj2), ];
    const obj3 = { size: "lg", variant: "secondary", text: null, onPress: null };
    const intl4 = util.intl;
    obj3.text = intl4.string(util.t.cpT0Cq);
    obj3.onPress = callback2;
    items[1] = closure_1_8(components_Button_Button.Button, obj3);
    obj.children = items;
    let tmp11 = obj;
  } else {
    const obj4 = { size: "lg", variant: "primary", text: null, onPress: null, loading: null };
    const intl = util.intl;
    obj4.text = intl.string(util.t.pj0XBN);
    obj4.onPress = onPress;
    obj4.loading = loading;
    const items1 = [closure_1_8(Button, obj4), ];
    const obj5 = { size: "lg", variant: "secondary", text: null, onPress: null };
    const intl2 = util.intl;
    obj5.text = intl2.string(util.t.PcTCB7);
    obj5.onPress = callback;
    items1[1] = closure_1_8(components_Button_Button.Button, obj5);
    obj.children = items1;
    tmp11 = obj;
  }
  return options(View, tmp11);
});
ReactCompilerGating = fn(558);
let closure_14 = ReactCompilerGating.isReactCompilerEnabled() ? (function SheetContent(arg0) {
  const cResult = c.c(30);
  ({ title, body, eligibleToReceivePremiumRewards } = arg0);
  const tmp4 = closure_12();
  const typeConsolidationTextTransform = useTypeConsolidationTextTransform.useTypeConsolidationTextTransform("QuestOrbMultiplierPerkInfo");
  const bottom = useSafeAreaInsetsDefault().bottom;
  if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
    const tmp8 = closure_1_8(ActionSheetHeaderBar.ActionSheetHeaderBar, { variant: "floating" });
    cResult[0] = tmp8;
    let first = tmp8;
  } else {
    first = cResult[0];
  }
  if (cResult[1] !== bottom) {
    const obj3 = { marginBottom: bottom };
    cResult[1] = bottom;
    cResult[2] = obj3;
    let tmp9 = obj3;
  } else {
    tmp9 = cResult[2];
  }
  if (cResult[3] === tmp4.container) {
    if (cResult[4] === tmp9) {
      let tmp10 = cResult[5];
    }
    const _Symbol = Symbol;
    if (cResult[6] === Symbol.for("react.memo_cache_sentinel")) {
      const tmp13 = closure_1_8(NitroQuestOrbsMultiplierRive.NitroQuestOrbsMultiplierRive, {});
      cResult[6] = tmp13;
      let tmp11 = tmp13;
    } else {
      tmp11 = cResult[6];
    }
    if (cResult[7] !== tmp4.riveContainer) {
      const obj4 = { style: tmp4.riveContainer, children: tmp11 };
      const tmp17 = closure_1_8(View, obj4);
      cResult[7] = tmp4.riveContainer;
      cResult[8] = tmp17;
      let tmp14 = tmp17;
    } else {
      tmp14 = cResult[8];
    }
    if (cResult[9] === tmp4.text) {
      if (cResult[10] === tmp4.title) {
        if (cResult[11] === typeConsolidationTextTransform) {
          let tmp18 = cResult[12];
        }
        if (cResult[13] === tmp18) {
          if (cResult[14] === title) {
            let tmp19 = cResult[15];
          }
          if (cResult[16] === body) {
            if (cResult[17] === tmp4.text) {
              let tmp22 = cResult[18];
            }
            if (cResult[19] !== eligibleToReceivePremiumRewards) {
              const obj5 = { eligibleToReceivePremiumRewards };
              const tmp28 = closure_1_8(closure_13, obj5);
              cResult[19] = eligibleToReceivePremiumRewards;
              cResult[20] = tmp28;
              let tmp25 = tmp28;
            } else {
              tmp25 = cResult[20];
            }
            if (cResult[21] === tmp4.contentContainer) {
              if (cResult[22] === tmp14) {
                if (cResult[23] === tmp19) {
                  if (cResult[24] === tmp22) {
                    if (cResult[25] === tmp25) {
                      let tmp29 = cResult[26];
                    }
                    if (cResult[27] === tmp29) {
                      if (cResult[28] === tmp10) {
                        let tmp33 = cResult[29];
                      }
                      return tmp33;
                    }
                    const obj6 = { children: null };
                    const items = [first, ];
                    const obj7 = { style: tmp10, children: tmp29 };
                    items[1] = closure_1_8(View, obj7);
                    obj6.children = items;
                    const tmp38 = options(collapsed, obj6);
                    cResult[27] = tmp29;
                    cResult[28] = tmp10;
                    cResult[29] = tmp38;
                    tmp33 = tmp38;
                  }
                }
              }
            }
            const obj8 = { style: tmp4.contentContainer, children: null };
            const items1 = [tmp14, tmp19, tmp22, tmp25];
            obj8.children = items1;
            const tmp32 = options(View, obj8);
            cResult[21] = tmp4.contentContainer;
            cResult[22] = tmp14;
            cResult[23] = tmp19;
            cResult[24] = tmp22;
            cResult[25] = tmp25;
            cResult[26] = tmp32;
            tmp29 = tmp32;
          }
          const obj9 = { style: tmp4.text, variant: "text-sm/normal", children: body };
          const tmp24 = closure_1_8(Text_Text.Text, obj9);
          cResult[16] = body;
          cResult[17] = tmp4.text;
          cResult[18] = tmp24;
          tmp22 = tmp24;
        }
        const obj10 = { style: tmp18, variant: "display-md", color: "mobile-text-heading-primary", accessibilityRole: "header", children: title };
        const tmp21 = closure_1_8(Text_Text.Text, obj10);
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
}) : (function SheetContent(arg0) {
  ({ title, body, eligibleToReceivePremiumRewards } = arg0);
  const tmp = closure_12();
  const typeConsolidationTextTransform = useTypeConsolidationTextTransform.useTypeConsolidationTextTransform("QuestOrbMultiplierPerkInfo");
  const obj2 = { children: null };
  const items = [closure_1_8(ActionSheetHeaderBar.ActionSheetHeaderBar, { variant: "floating" }), ];
  const obj3 = { style: null, children: null };
  const items1 = [tmp.container, { marginBottom: useSafeAreaInsetsDefault().bottom }];
  obj3.style = items1;
  const obj4 = { style: tmp.contentContainer, children: null };
  const items2 = [closure_1_8(View, { style: tmp.riveContainer, children: closure_1_8(NitroQuestOrbsMultiplierRive.NitroQuestOrbsMultiplierRive, {}) }), , , ];
  const obj6 = { style: null, variant: "display-md", color: "mobile-text-heading-primary", accessibilityRole: "header", children: title };
  const items3 = [, , ];
  ({ text: arr4[0], title: arr4[1] } = tmp);
  items3[2] = typeConsolidationTextTransform;
  obj6.style = items3;
  items2[1] = closure_1_8(Text_Text.Text, obj6);
  items2[2] = closure_1_8(Text_Text.Text, { style: tmp.text, variant: "text-sm/normal", children: body });
  items2[3] = closure_1_8(closure_13, { eligibleToReceivePremiumRewards });
  obj4.children = items2;
  obj3.children = options(View, obj4);
  items[1] = closure_1_8(View, obj3);
  obj2.children = items;
  return options(collapsed, obj2);
});
ReactCompilerGating = fn(558);
let obj6 = { width: "100%", gap: nativeDefault.space.PX_12, marginVertical: nativeDefault.space.PX_16 };
const size = fn(2);
let result = size.fileFinishedImporting("modules/quests/native/QuestOrbMultiplierPerkInfoActionSheet.tsx");

export default ReactCompilerGating.isReactCompilerEnabled() ? (function QuestOrbMultiplierPerkInfoActionSheet(arg0) {
  const cResult = c.c(17);
  ({ multiplier, orbMultiplierEligibility } = arg0);
  if (cResult[0] !== orbMultiplierEligibility) {
    const result = QuestOrbMultiplierUtils.shouldReceiveQuestOrbMultiplier(orbMultiplierEligibility);
    cResult[0] = orbMultiplierEligibility;
    cResult[1] = result;
    let tmp4 = result;
    const tmpResult = QuestOrbMultiplierUtils;
  } else {
    tmp4 = cResult[1];
  }
  const tmp6 = orbMultiplierEligibility === QuestOrbMultiplierUtils.QuestOrbMultiplierEligibilityType.NITRO || orbMultiplierEligibility === QuestOrbMultiplierUtils.QuestOrbMultiplierEligibilityType.UPSELL;
  if (orbMultiplierEligibility !== QuestOrbMultiplierUtils.QuestOrbMultiplierEligibilityType.XBOX_GAME_PASS) {
    const _Symbol2 = Symbol;
    if (cResult[3] === Symbol.for("react.memo_cache_sentinel")) {
      const intl2 = util.intl;
      const stringResult = intl2.string(util.t.Csf5Ol);
      cResult[3] = stringResult;
    }
  } else {
    const _Symbol = Symbol;
    if (cResult[2] === Symbol.for("react.memo_cache_sentinel")) {
      const intl = util.intl;
      const stringResult1 = intl.string(_modDef3633.c5usUr);
      cResult[2] = stringResult1;
      let tmp8 = stringResult1;
    } else {
      tmp8 = cResult[2];
    }
    if (orbMultiplierEligibility !== QuestOrbMultiplierUtils.QuestOrbMultiplierEligibilityType.XBOX_GAME_PASS) {
      if (tmp4) {
        if (cResult[6] !== multiplier) {
          const intl5 = util.intl;
          const obj2 = { bonusOrbMultiplier: multiplier };
          const formatResult = intl5.format(util.t.NpUfej, obj2);
          cResult[6] = multiplier;
          cResult[7] = formatResult;
        }
      } else {
        if (cResult[8] !== multiplier) {
          const intl4 = util.intl;
          const obj3 = { bonusOrbMultiplier: multiplier };
          const formatResult1 = intl4.format(util.t["G5k+lZ"], obj3);
          cResult[8] = multiplier;
          cResult[9] = formatResult1;
          let tmp18 = formatResult1;
        } else {
          tmp18 = cResult[9];
        }
        let tmp15 = tmp18;
      }
    } else if (cResult[4] !== multiplier) {
      const intl3 = util.intl;
      const obj4 = { bonusOrbMultiplier: multiplier };
      const formatResult2 = intl3.format(_modDef3633.UkrcSH, obj4);
      cResult[4] = multiplier;
      cResult[5] = formatResult2;
      tmp15 = formatResult2;
    } else {
      tmp15 = cResult[5];
    }
    if (cResult[10] === tmp15) {
      if (cResult[11] === tmp4) {
        if (cResult[12] === tmp8) {
          let tmp23 = cResult[13];
        }
        if (cResult[14] === tmp6) {
          if (cResult[15] === tmp23) {
            let tmp27 = cResult[16];
          }
          return tmp27;
        }
        const obj5 = { scrollable: false, handleDisabled: true, startExpanded: true, contentStyles, children: null };
        const obj6 = { visible: tmp6, children: tmp23 };
        obj5.children = closure_1_8(PremiumRewardGradientDefault, obj6);
        const tmp31 = closure_1_8(Sheet_BottomSheet.BottomSheet, obj5);
        cResult[14] = tmp6;
        cResult[15] = tmp23;
        cResult[16] = tmp31;
        tmp27 = tmp31;
      }
    }
    const obj7 = { title: tmp8, body: tmp15, eligibleToReceivePremiumRewards: tmp4 };
    const tmp26 = closure_1_8(closure_14, obj7);
    cResult[10] = tmp15;
    cResult[11] = tmp4;
    cResult[12] = tmp8;
    cResult[13] = tmp26;
    tmp23 = tmp26;
  }
}) : (function QuestOrbMultiplierPerkInfoActionSheet(multiplier) {
  multiplier = multiplier.multiplier;
  const orbMultiplierEligibility = multiplier.orbMultiplierEligibility;
  const result = multiplier(9142).shouldReceiveQuestOrbMultiplier(orbMultiplierEligibility);
  dependencyMap = result;
  let obj = multiplier(9142);
  const items = [orbMultiplierEligibility];
  const items1 = [result, orbMultiplierEligibility, multiplier];
  const memo = noop.useMemo(() => {
    if (orbMultiplierEligibility === QuestOrbMultiplierUtils.QuestOrbMultiplierEligibilityType.XBOX_GAME_PASS) {
      const intl2 = util.intl;
      let stringResult = intl2.string(_modDef3633.c5usUr);
    } else {
      const intl = util.intl;
      stringResult = intl.string(util.t.Csf5Ol);
    }
    return stringResult;
  }, items);
  const memo1 = noop.useMemo(() => {
    if (orbMultiplierEligibility === QuestOrbMultiplierUtils.QuestOrbMultiplierEligibilityType.XBOX_GAME_PASS) {
      const intl2 = util.intl;
      const obj2 = { bonusOrbMultiplier: multiplier };
      let formatResult = intl2.format(_modDef3633.UkrcSH, obj2);
    } else {
      const intl = util.intl;
      const format = intl.format;
      const t = util.t;
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
  let obj2 = { scrollable: false, handleDisabled: true, startExpanded: true, contentStyles, children: null };
  let obj3 = { visible: orbMultiplierEligibility === multiplier(9142).QuestOrbMultiplierEligibilityType.NITRO || orbMultiplierEligibility === multiplier(9142).QuestOrbMultiplierEligibilityType.UPSELL, children: null };
  const tmp4 = orbMultiplierEligibility === multiplier(9142).QuestOrbMultiplierEligibilityType.NITRO || orbMultiplierEligibility === multiplier(9142).QuestOrbMultiplierEligibilityType.UPSELL;
  obj3.children = closure_8(closure_14, { title: memo, body: memo1, eligibleToReceivePremiumRewards: result });
  obj2.children = closure_8(orbMultiplierEligibility(15356), obj3);
  return closure_8(multiplier(6836).BottomSheet, obj2);
});