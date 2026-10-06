// === Module 13013: FractionalNitroCollectedActionSheet ===

// Module 13013 (FractionalNitroCollectedActionSheet)
import react2 from "react" /* 576 */;
import nativeDefault from "native" /* 587 */;
import Constants from "Constants" /* 1085 */;
import intl7 from "intl" /* 1126 */;
import HelpdeskUtilsDefault from "HelpdeskUtils" /* 2115 */;
import LinkingDefault from "Linking" /* 4571 */;
import shared from "shared" /* 4735 */;
import useThemeDefault from "useTheme" /* 4797 */;
import ActionSheetActionCreatorsDefault from "ActionSheetActionCreators" /* 4860 */;
import Text_Text from "Text/Text" /* 4892 */;
import components_Button_Button from "components/Button/Button" /* 5601 */;
import Pressables from "Pressables" /* 5916 */;
import FastImageDefault from "FastImage" /* 5981 */;
import Sheet_BottomSheet from "Sheet/BottomSheet" /* 6652 */;
import ActionSheetHeaderBar from "ActionSheetHeaderBar" /* 6656 */;
import PremiumPlanActionSheetHeaderDefault from "PremiumPlanActionSheetHeader" /* 6950 */;
import utils_CollectiblesUtils from "utils/CollectiblesUtils" /* 7110 */;
import FractionalNitroCoinIllustration2 from "FractionalNitroCoinIllustration" /* 8533 */;
import AssetRegistryDefault from "AssetRegistry" /* 10468 */;
import AssetRegistryDefault2 from "AssetRegistry" /* 10469 */;
import CircleQuestionIcon2 from "CircleQuestionIcon" /* 11028 */;
import AssetRegistryDefault3 from "AssetRegistry" /* 13014 */;
import react_mod from "react" /* 19 */;
import react_native from "react-native" /* 17 */;
import PremiumConstants from "PremiumConstants" /* 1379 */;
import Fragment from "Fragment" /* 21 */;
import createStyles_mod from "createStyles" /* 4896 */;
import ReactCompilerGating_mod from "ReactCompilerGating" /* 558 */;
import size_mod from "module_2" /* 2 */;

let BottomSheet, dependencyMap;

let c10;
let c9;
let closure_4;
let hasOwnProperty;
let items;
let metroImportAll;
let metroImportDefault;
let obj2;
let obj3;
let obj4;
let size;
let size1;
let unpackModuleId;
let react = react_mod;
({ ActivityIndicator: closure_4, View: hasOwnProperty } = react_native);
const HelpdeskArticles = Constants.HelpdeskArticles;
({ FRACTIONAL_PREMIUM_SKU_INTERVAL_COUNTS: metroImportDefault, PremiumTypes: metroImportAll } = PremiumConstants);
({ jsx: c9, jsxs: c10, Fragment: unpackModuleId } = Fragment);
let createStyles = createStyles_mod;
let obj = { body: obj2, content: obj3, buttonContainer: obj4, description: { textAlign: "center" }, header: { height: 112, justifyContent: "center", alignItems: "center", overflow: "hidden" }, fractionNitroIcon: size, questionIconContainer: size1, questionIcon: { width: 18, height: 18 } };
obj2 = { flex: 1, padding: nativeDefault.space.PX_16 };
createStyles = createStyles.createStyles;
obj3 = { flex: 1, gap: nativeDefault.space.PX_16, alignItems: "center" };
obj4 = { flex: 1, gap: nativeDefault.space.PX_16, alignSelf: "stretch" };
size = { width: FractionalNitroCoinIllustration2.FRACTIONAL_NITRO_COIN_SIZE.COLLECTED_SHEET, height: FractionalNitroCoinIllustration2.FRACTIONAL_NITRO_COIN_SIZE.COLLECTED_SHEET, position: "absolute", top: "50%", left: "50%", transform: items };
let obj5 = { translateX: -FractionalNitroCoinIllustration2.FRACTIONAL_NITRO_COIN_SIZE.COLLECTED_SHEET / 2 };
items = [obj5, ];
let obj6 = { translateY: -FractionalNitroCoinIllustration2.FRACTIONAL_NITRO_COIN_SIZE.COLLECTED_SHEET / 2 };
items[1] = obj6;
size1 = { position: "absolute", right: nativeDefault.space.PX_16, top: nativeDefault.space.PX_16, width: 32, height: 32, backgroundColor: nativeDefault.colors.CONTROL_OVERLAY_SECONDARY_BACKGROUND_DEFAULT, justifyContent: "center", borderRadius: nativeDefault.radii.lg, alignItems: "center" };
let closure_12 = createStyles(obj);
let ReactCompilerGating = ReactCompilerGating_mod;
let closure_13 = ReactCompilerGating.isReactCompilerEnabled() ? ((skuId) => {
  let first;
  let items;
  let tmp10;
  const obj = react2;
  const cResult = obj.c(9);
  skuId = skuId.skuId;
  const tmp4 = closure_12();
  if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
    const obj2 = { source: AssetRegistryDefault3 };
    const tmp8 = FastImageDefault;
    const tmp9 = React4(tmp8, obj2);
    cResult[0] = tmp9;
    first = tmp9;
  } else {
    first = cResult[0];
  }
  if (cResult[1] !== skuId) {
    size = { skuId, width: FractionalNitroCoinIllustration2.FRACTIONAL_NITRO_COIN_SIZE.COLLECTED_SHEET, height: FractionalNitroCoinIllustration2.FRACTIONAL_NITRO_COIN_SIZE.COLLECTED_SHEET };
    const FractionalNitroCoinIllustration = FractionalNitroCoinIllustration2.FractionalNitroCoinIllustration;
    const tmp12 = React4(FractionalNitroCoinIllustration, size);
    cResult[1] = skuId;
    cResult[2] = tmp12;
    tmp10 = tmp12;
  } else {
    tmp10 = cResult[2];
  }
  if (cResult[3] === tmp4.fractionNitroIcon) {
    let tmp13;
    if (cResult[4] === tmp10) {
      tmp13 = cResult[5];
    }
    if (cResult[6] === tmp4.header) {
      let tmp15;
      if (cResult[7] === tmp13) {
        tmp15 = cResult[8];
      }
      return tmp15;
    }
    const obj3 = { style: tmp4.header, children: items };
    items = [first, tmp13];
    const tmp18 = authStore(hasOwnProperty, obj3);
    cResult[6] = tmp4.header;
    cResult[7] = tmp13;
    cResult[8] = tmp18;
    tmp15 = tmp18;
  }
  const obj4 = { style: tmp4.fractionNitroIcon, children: tmp10 };
  const tmp14 = React4(hasOwnProperty, obj4);
  cResult[3] = tmp4.fractionNitroIcon;
  cResult[4] = tmp10;
  cResult[5] = tmp14;
  tmp13 = tmp14;
}) : ((skuId) => {
  let FractionalNitroCoinIllustration;
  let items;
  skuId = skuId.skuId;
  const tmp = closure_12();
  const obj = { style: tmp.header, children: items };
  const obj2 = { source: AssetRegistryDefault3 };
  const tmp2 = FastImageDefault;
  items = [React4(tmp2, obj2), ];
  const obj3 = { style: tmp.fractionNitroIcon, children: React4(FractionalNitroCoinIllustration, size) };
  size = { skuId, width: FractionalNitroCoinIllustration2.FRACTIONAL_NITRO_COIN_SIZE.COLLECTED_SHEET, height: FractionalNitroCoinIllustration2.FRACTIONAL_NITRO_COIN_SIZE.COLLECTED_SHEET };
  FractionalNitroCoinIllustration = FractionalNitroCoinIllustration2.FractionalNitroCoinIllustration;
  items[1] = React4(hasOwnProperty, obj3);
  return authStore(hasOwnProperty, obj);
});
ReactCompilerGating = ReactCompilerGating_mod;
let tmp6 = ReactCompilerGating.isReactCompilerEnabled() ? ((arg0) => {
  let consumed;
  let expiresAt;
  let intl;
  let intl4;
  let intl6;
  let isFractionalPremiumActive;
  let isLoading;
  let items;
  let items1;
  let items2;
  let items3;
  let obj17;
  let onPressExplorePerks;
  let onPressViewCredits;
  let skuId;
  let tmp20;
  let tmp9;
  let obj = react2;
  const cResult = obj.c(40);
  ({ skuId, consumed, onPressExplorePerks, onPressViewCredits } = arg0);
  const tmp4 = closure_12();
  const tmp6 = useThemeDefault();
  let obj2 = utils_CollectiblesUtils;
  const fetchFractionalPremiumInfo = obj2.useFetchFractionalPremiumInfo();
  ({ isLoading, isFractionalPremiumActive, expiresAt } = fetchFractionalPremiumInfo);
  if (consumed) {
    let tmp5Result;
    let tmp13;
    const tmpResult = shared;
    if (tmpResult.isThemeDark(tmp6)) {
      tmp5Result = AssetRegistryDefault;
    } else {
      tmp5Result = AssetRegistryDefault2;
    }
    if (cResult[0] !== tmp5Result) {
      const obj3 = { source: tmp5Result };
      const tmp15 = React4(FastImageDefault, obj3);
      cResult[0] = tmp5Result;
      cResult[1] = tmp15;
      tmp13 = tmp15;
    } else {
      tmp13 = cResult[1];
    }
    tmp9 = tmp13;
  } else {
    const _Symbol = Symbol;
    if (cResult[2] === Symbol.for("react.memo_cache_sentinel")) {
      const obj4 = { variant: "heading-lg/bold", color: "text-default", children: intl.string(intl7.t.g5W1g8) };
      const Text = Text_Text.Text;
      intl = intl7.intl;
      const tmp11 = React4(Text, obj4);
      cResult[2] = tmp11;
      tmp9 = tmp11;
    } else {
      tmp9 = cResult[2];
    }
  }
  if (cResult[3] === consumed) {
    if (cResult[4] === expiresAt) {
      if (cResult[5] === isFractionalPremiumActive) {
        if (cResult[6] === skuId) {
          let tmp16;
          let tmp25;
          let tmp27Result;
          if (cResult[7] === tmp4.description) {
            tmp16 = cResult[8];
          }
          const _Symbol2 = Symbol;
          if (cResult[12] === Symbol.for("react.memo_cache_sentinel")) {
            const fn = function q() {
              const obj = HelpdeskUtilsDefault;
              const articleURL = obj.getArticleURL(constants.FRACTIONAL_PREMIUM_ABOUT);
              const obj2 = LinkingDefault;
              obj2.openURL(articleURL);
            };
            cResult[12] = fn;
            tmp25 = fn;
          } else {
            tmp25 = cResult[12];
          }
          if (cResult[13] === consumed) {
            let tmp26;
            let tmp31;
            if (cResult[14] === skuId) {
              tmp26 = cResult[15];
            }
            if (cResult[16] !== tmp4.questionIcon) {
              const obj5 = { style: tmp4.questionIcon, color: nativeDefault.colors.WHITE };
              const CircleQuestionIcon = CircleQuestionIcon2.CircleQuestionIcon;
              const tmp33 = React4(CircleQuestionIcon, obj5);
              cResult[16] = tmp4.questionIcon;
              cResult[17] = tmp33;
              tmp31 = tmp33;
            } else {
              tmp31 = cResult[17];
            }
            if (cResult[18] === tmp4.questionIconContainer) {
              let tmp34;
              if (cResult[19] === tmp31) {
                tmp34 = cResult[20];
              }
              if (cResult[21] === tmp26) {
                let tmp37;
                let tmp42Result;
                if (cResult[22] === tmp34) {
                  tmp37 = cResult[23];
                }
                if (cResult[24] === consumed) {
                  if (cResult[25] === tmp16) {
                    if (cResult[26] === isLoading) {
                      if (cResult[27] === onPressExplorePerks) {
                        if (cResult[28] === onPressViewCredits) {
                          if (cResult[29] === tmp4.buttonContainer) {
                            if (cResult[30] === tmp4.content) {
                              let tmp41;
                              if (cResult[31] === tmp9) {
                                tmp41 = cResult[32];
                              }
                              if (cResult[33] === tmp4.body) {
                                let tmp49;
                                let tmp53;
                                if (cResult[34] === tmp41) {
                                  tmp49 = cResult[35];
                                }
                                const _Symbol3 = Symbol;
                                if (cResult[36] === Symbol.for("react.memo_cache_sentinel")) {
                                  const tmp55 = React4(ActionSheetHeaderBar.ActionSheetHeaderBar, { variant: "floating" });
                                  cResult[36] = tmp55;
                                  tmp53 = tmp55;
                                } else {
                                  tmp53 = cResult[36];
                                }
                                if (cResult[37] === tmp37) {
                                  let tmp56;
                                  if (cResult[38] === tmp49) {
                                    tmp56 = cResult[39];
                                  }
                                  return tmp56;
                                }
                                const obj6 = { handleDisabled: true, children: items };
                                items = [tmp37, tmp49, tmp53];
                                const tmp58 = authStore(Sheet_BottomSheet.BottomSheet, obj6);
                                cResult[37] = tmp37;
                                cResult[38] = tmp49;
                                cResult[39] = tmp58;
                                tmp56 = tmp58;
                              }
                              const obj7 = { style: tmp4.body, children: tmp41 };
                              const tmp52 = React4(hasOwnProperty, obj7);
                              cResult[33] = tmp4.body;
                              cResult[34] = tmp41;
                              cResult[35] = tmp52;
                              tmp49 = tmp52;
                            }
                          }
                        }
                      }
                    }
                  }
                }
                if (isLoading) {
                  tmp42Result = React4(React3, { size: "large" });
                } else {
                  let tmp45;
                  const obj8 = { style: tmp4.content, children: items1 };
                  items1 = [tmp9, tmp16, ];
                  const obj10 = { size: "lg", text: null, onPress: null };
                  const obj9 = { style: tmp4.buttonContainer, children: items2 };
                  const Button = components_Button_Button.Button;
                  const intl5 = intl7.intl;
                  const string = intl5.string;
                  const t = intl7.t;
                  if (consumed) {
                    obj10.text = string(t.ERKK6v);
                    obj10.onPress = onPressExplorePerks;
                    tmp45 = obj10;
                  } else {
                    obj10.text = string(t["Jr6N+s"]);
                    obj10.onPress = onPressViewCredits;
                    tmp45 = obj10;
                  }
                  items2 = [React4(Button, tmp45), ];
                  const obj11 = {
                    size: "lg",
                    variant: "secondary",
                    text: intl6.string(intl7.t.TkTvBz),
                    onPress() {
                                      const obj = ActionSheetActionCreatorsDefault;
                                      return obj.hideActionSheet();
                                    }
                  };
                  const Button2 = components_Button_Button.Button;
                  intl6 = intl7.intl;
                  items2[1] = React4(Button2, obj11);
                  items1[2] = authStore(hasOwnProperty, obj9);
                  tmp42Result = authStore(hasOwnProperty, obj8);
                }
                cResult[24] = consumed;
                cResult[25] = tmp16;
                cResult[26] = isLoading;
                cResult[27] = onPressExplorePerks;
                cResult[28] = onPressViewCredits;
                cResult[29] = tmp4.buttonContainer;
                cResult[30] = tmp4.content;
                cResult[31] = tmp9;
                cResult[32] = tmp42Result;
                tmp41 = tmp42Result;
              }
              const obj12 = { children: items3 };
              items3 = [tmp26, tmp34];
              const tmp40 = authStore(unpackModuleId, obj12);
              cResult[21] = tmp26;
              cResult[22] = tmp34;
              cResult[23] = tmp40;
              tmp37 = tmp40;
            }
            const obj13 = { style: tmp4.questionIconContainer, onPress: tmp25, children: tmp31 };
            const tmp36 = React4(Pressables.PressableOpacity, obj13);
            cResult[18] = tmp4.questionIconContainer;
            cResult[19] = tmp31;
            cResult[20] = tmp36;
            tmp34 = tmp36;
          }
          if (consumed) {
            const obj14 = { premiumType: metroImportAll.TIER_2 };
            tmp27Result = React4(PremiumPlanActionSheetHeaderDefault, obj14);
          } else {
            const obj15 = { skuId };
            tmp27Result = React4(closure_13, obj15);
          }
          cResult[13] = consumed;
          cResult[14] = skuId;
          cResult[15] = tmp27Result;
          tmp26 = tmp27Result;
        }
      }
    }
  }
  let num4;
  if (metroImportDefault[skuId] != null) {
    num4 = tmp17[1];
  }
  if (num4 == null) {
    num4 = 3;
  }
  const intl2 = intl7.intl;
  const formatToPlainStringResult = intl2.formatToPlainString(intl7.t.Cz1G97, { days: num4 });
  if (consumed) {
    const obj16 = { variant: "text-md/normal", color: "text-default", style: tmp4.description, children: intl4.format(intl7.t["93PGOI"], obj17) };
    const Text2 = Text_Text.Text;
    intl4 = intl7.intl;
    obj17 = { duration: formatToPlainStringResult, expirationDate: expiresAt };
    tmp20 = React4(Text2, obj16);
  } else {
    let stringResult;
    const intl3 = intl7.intl;
    if (isFractionalPremiumActive) {
      stringResult = intl3.string(intl7.t.fBmhE9);
    } else {
      const obj18 = { duration: formatToPlainStringResult };
      stringResult = intl3.format(intl7.t["8fyBPf"], obj18);
    }
    if (cResult[9] === tmp4.description) {
      if (cResult[10] === stringResult) {
        tmp20 = cResult[11];
      }
    }
    const obj19 = { variant: "text-md/normal", color: "text-default", style: tmp4.description, children: stringResult };
    const tmp22 = React4(Text_Text.Text, obj19);
    cResult[9] = tmp4.description;
    cResult[10] = stringResult;
    cResult[11] = tmp22;
    tmp20 = tmp22;
  }
  cResult[3] = consumed;
  cResult[4] = expiresAt;
  cResult[5] = isFractionalPremiumActive;
  cResult[6] = skuId;
  cResult[7] = tmp4.description;
  cResult[8] = tmp20;
  tmp16 = tmp20;
}) : ((skuId) => {
  let CircleQuestionIcon;
  let closure_3;
  let description;
  let intl2;
  let items2;
  let items4;
  let items5;
  let obj6;
  let onPressExplorePerks;
  let onPressViewCredits;
  let tmp10Result;
  let tmp12Result;
  let tmp15;
  skuId = skuId.skuId;
  const consumed = skuId.consumed;
  ({ onPressExplorePerks, onPressViewCredits } = skuId);
  const tmp = closure_12();
  dependencyMap = tmp;
  const tmp4 = consumed(4797)();
  react = tmp4;
  let obj = skuId(7110);
  const fetchFractionalPremiumInfo = obj.useFetchFractionalPremiumInfo();
  const isFractionalPremiumActive = fetchFractionalPremiumInfo.isFractionalPremiumActive;
  const expiresAt = fetchFractionalPremiumInfo.expiresAt;
  const items = [consumed, tmp4];
  const isLoading = fetchFractionalPremiumInfo.isLoading;
  const items1 = [skuId, consumed, expiresAt, isFractionalPremiumActive, tmp.description];
  const memo = react.useMemo(() => {
    let intl;
    let tmpResult;
    if (consumed) {
      let tmp9Result;
      const tmp11 = FastImageDefault;
      const obj2 = shared;
      if (obj2.isThemeDark(closure_3)) {
        tmp9Result = AssetRegistryDefault;
      } else {
        tmp9Result = AssetRegistryDefault2;
      }
      const obj3 = { source: tmp9Result };
      tmpResult = React4(tmp11, obj3);
    } else {
      const obj = { variant: "heading-lg/bold", color: "text-default", children: intl.string(intl7.t.g5W1g8) };
      const Text = Text_Text.Text;
      intl = intl7.intl;
      tmpResult = React4(Text, obj);
    }
    return tmpResult;
  }, items);
  const memo1 = react.useMemo(() => {
    let tmp8;
    let num;
    if (metroImportDefault[skuId] != null) {
      num = tmp[1];
    }
    if (num == null) {
      num = 3;
    }
    const intl = intl7.intl;
    const formatToPlainStringResult = intl.formatToPlainString(intl7.t.Cz1G97, { days: num });
    const obj = { variant: "text-md/normal", color: "text-default", style: description.description, children: null };
    const Text = Text_Text.Text;
    if (consumed) {
      const intl3 = intl7.intl;
      const obj2 = { duration: formatToPlainStringResult, expirationDate: expiresAt };
      obj.children = intl3.format(intl7.t["93PGOI"], obj2);
      tmp8 = obj;
    } else {
      let stringResult;
      const intl2 = intl7.intl;
      if (isFractionalPremiumActive) {
        stringResult = intl2.string(intl7.t.fBmhE9);
      } else {
        const obj3 = { duration: formatToPlainStringResult };
        stringResult = intl2.format(intl7.t["8fyBPf"], obj3);
      }
      obj.children = stringResult;
      tmp8 = obj;
    }
    return React4(Text, tmp8);
  }, items1);
  const callback = react.useCallback(() => {
    const obj = consumed(description[19]);
    const articleURL = obj.getArticleURL(constants.FRACTIONAL_PREMIUM_ABOUT);
    const obj2 = consumed(description[20]);
    obj2.openURL(articleURL);
  }, []);
  BottomSheet = skuId(6652).BottomSheet;
  if (consumed) {
    let obj2 = { premiumType: TIER_2.TIER_2 };
    tmp12Result = closure_9(tmp2(6950), obj2);
    tmp15 = closure_9;
  } else {
    let obj3 = { skuId };
    tmp12Result = closure_9(closure_13, obj3);
    tmp15 = closure_9;
  }
  const obj4 = { children: items2 };
  items2 = [tmp12Result, ];
  const obj5 = { style: tmp.questionIconContainer, onPress: callback, children: tmp15(CircleQuestionIcon, obj6) };
  const PressableOpacity = tmp5(5916).PressableOpacity;
  obj6 = { style: tmp.questionIcon, color: consumed(587).colors.WHITE };
  CircleQuestionIcon = tmp5(11028).CircleQuestionIcon;
  items2[1] = tmp15(PressableOpacity, obj5);
  const items3 = [closure_10(closure_11, obj4), , ];
  const obj7 = { style: tmp.body, children: tmp10Result };
  if (isLoading) {
    tmp10Result = tmp15(isFractionalPremiumActive, { size: "large" });
  } else {
    let tmp18;
    const obj8 = { style: tmp.content, children: items4 };
    items4 = [memo, memo1, ];
    const obj10 = { size: "lg", text: null, onPress: null };
    const obj9 = { style: tmp.buttonContainer, children: items5 };
    const Button = tmp5(5601).Button;
    let intl = tmp5(1126).intl;
    const string = intl.string;
    const t = tmp5(1126).t;
    if (consumed) {
      obj10.text = string(t.ERKK6v);
      obj10.onPress = onPressExplorePerks;
      tmp18 = obj10;
    } else {
      obj10.text = string(t["Jr6N+s"]);
      obj10.onPress = onPressViewCredits;
      tmp18 = obj10;
    }
    items5 = [tmp15(Button, tmp18), ];
    const obj11 = {
      size: "lg",
      variant: "secondary",
      text: intl2.string(skuId(1126).t.TkTvBz),
      onPress() {
          const obj = consumed(description[25]);
          return obj.hideActionSheet();
        }
    };
    const Button2 = tmp5(5601).Button;
    intl2 = tmp5(1126).intl;
    items5[1] = tmp15(Button2, obj11);
    items4[2] = closure_10(expiresAt, obj9);
    tmp10Result = closure_10(tmp17, obj8);
  }
  const obj12 = { handleDisabled: true, children: items3 };
  items3[1] = tmp15(expiresAt, obj7);
  items3[2] = tmp15(skuId(6656).ActionSheetHeaderBar, { variant: "floating" });
  return closure_10(BottomSheet, obj12);
});
size = size_mod;
const result = size.fileFinishedImporting("modules/collectibles/native/FractionalNitroCollectedActionSheet.tsx");

export default tmp6;