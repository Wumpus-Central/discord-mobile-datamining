// === Module 13013: FractionalNitroCollectedActionSheet ===

// Module 13013 (FractionalNitroCollectedActionSheet)
import c from "c" /* 576 */;
import nativeDefault from "native" /* 587 */;
import util from "util" /* 1126 */;
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
import FractionalNitroCoinIllustration from "FractionalNitroCoinIllustration" /* 8533 */;
import _modDef10468 from "module_10468" /* 10468 */;
import _modDef10469 from "module_10469" /* 10469 */;
import CircleQuestionIcon from "CircleQuestionIcon" /* 11028 */;
import _modDef13014 from "module_13014" /* 13014 */;
import noop from "module_19" /* 19 */;

require = fn;
get_ActivityIndicator = fn(17);
({ ActivityIndicator: closure_4, View: hasOwnProperty } = get_ActivityIndicator);
const HelpdeskArticles = fn(1085).HelpdeskArticles;
const PremiumConstants = fn(1379);
({ FRACTIONAL_PREMIUM_SKU_INTERVAL_COUNTS: closure_7, PremiumTypes: closure_8 } = PremiumConstants);
const jsxProd = fn(21);
({ jsx: closure_9, jsxs: c10, Fragment: closure_11 } = jsxProd);
const createStyles = fn(4896);
let obj2 = { body: { flex: 1, padding: nativeDefault.space.PX_16 }, content: null, buttonContainer: null, description: null, header: null, fractionNitroIcon: null, questionIconContainer: null, questionIcon: null };
let obj3 = { flex: 1, padding: nativeDefault.space.PX_16 };
obj2.content = { flex: 1, gap: nativeDefault.space.PX_16, alignItems: "center" };
let obj4 = { flex: 1, gap: nativeDefault.space.PX_16, alignItems: "center" };
obj2.buttonContainer = { flex: 1, gap: nativeDefault.space.PX_16, alignSelf: "stretch" };
obj2.description = { textAlign: "center" };
obj2.header = { height: 112, justifyContent: "center", alignItems: "center", overflow: "hidden" };
let size = { width: fn(8533).FRACTIONAL_NITRO_COIN_SIZE.COLLECTED_SHEET, height: fn(8533).FRACTIONAL_NITRO_COIN_SIZE.COLLECTED_SHEET, position: "absolute", top: "50%", left: "50%", transform: null };
let obj5 = { flex: 1, gap: nativeDefault.space.PX_16, alignSelf: "stretch" };
let items = [{ translateX: -fn(8533).FRACTIONAL_NITRO_COIN_SIZE.COLLECTED_SHEET / 2 }, ];
let obj6 = { translateX: -fn(8533).FRACTIONAL_NITRO_COIN_SIZE.COLLECTED_SHEET / 2 };
items[1] = { translateY: -fn(8533).FRACTIONAL_NITRO_COIN_SIZE.COLLECTED_SHEET / 2 };
size.transform = items;
obj2.fractionNitroIcon = size;
const size1 = { position: "absolute", right: nativeDefault.space.PX_16, top: nativeDefault.space.PX_16, width: 32, height: 32, backgroundColor: nativeDefault.colors.CONTROL_OVERLAY_SECONDARY_BACKGROUND_DEFAULT, justifyContent: "center", borderRadius: nativeDefault.radii.lg, alignItems: "center" };
obj2.questionIconContainer = size1;
obj2.questionIcon = { width: 18, height: 18 };
let closure_12 = createStyles.createStyles(obj2);
let ReactCompilerGating = fn(558);
let closure_13 = ReactCompilerGating.isReactCompilerEnabled() ? ((skuId) => {
  const cResult = c.c(9);
  skuId = skuId.skuId;
  const tmp4 = closure_12();
  if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
    const obj2 = { source: _modDef13014 };
    const tmp9 = options(FastImageDefault, obj2);
    cResult[0] = tmp9;
    let first = tmp9;
  } else {
    first = cResult[0];
  }
  if (cResult[1] !== skuId) {
    const size = { skuId, width: FractionalNitroCoinIllustration.FRACTIONAL_NITRO_COIN_SIZE.COLLECTED_SHEET, height: FractionalNitroCoinIllustration.FRACTIONAL_NITRO_COIN_SIZE.COLLECTED_SHEET };
    const tmp12 = options(FractionalNitroCoinIllustration.FractionalNitroCoinIllustration, size);
    cResult[1] = skuId;
    cResult[2] = tmp12;
    let tmp10 = tmp12;
  } else {
    tmp10 = cResult[2];
  }
  if (cResult[3] === tmp4.fractionNitroIcon) {
    if (cResult[4] === tmp10) {
      let tmp13 = cResult[5];
    }
    if (cResult[6] === tmp4.header) {
      if (cResult[7] === tmp13) {
        let tmp15 = cResult[8];
      }
      return tmp15;
    }
    const obj3 = { style: tmp4.header, children: null };
    const items = [first, tmp13];
    obj3.children = items;
    const tmp18 = v65535(hasOwnProperty, obj3);
    cResult[6] = tmp4.header;
    cResult[7] = tmp13;
    cResult[8] = tmp18;
    tmp15 = tmp18;
  }
  const tmp14 = options(hasOwnProperty, { style: tmp4.fractionNitroIcon, children: tmp10 });
  cResult[3] = tmp4.fractionNitroIcon;
  cResult[4] = tmp10;
  cResult[5] = tmp14;
  tmp13 = tmp14;
  const obj4 = { style: tmp4.fractionNitroIcon, children: tmp10 };
}) : ((skuId) => {
  const tmp = closure_12();
  const obj = { style: tmp.header, children: null };
  const obj2 = { source: _modDef13014 };
  const items = [options(FastImageDefault, obj2), ];
  const obj3 = { style: tmp.fractionNitroIcon, children: null };
  const size = { skuId: skuId.skuId, width: FractionalNitroCoinIllustration.FRACTIONAL_NITRO_COIN_SIZE.COLLECTED_SHEET, height: FractionalNitroCoinIllustration.FRACTIONAL_NITRO_COIN_SIZE.COLLECTED_SHEET };
  obj3.children = options(FractionalNitroCoinIllustration.FractionalNitroCoinIllustration, size);
  items[1] = options(hasOwnProperty, obj3);
  obj.children = items;
  return v65535(hasOwnProperty, obj);
});
ReactCompilerGating = fn(558);
let obj7 = { translateY: -fn(8533).FRACTIONAL_NITRO_COIN_SIZE.COLLECTED_SHEET / 2 };
size = fn(2);
const result = size.fileFinishedImporting("modules/collectibles/native/FractionalNitroCollectedActionSheet.tsx");

export default ReactCompilerGating.isReactCompilerEnabled() ? ((arg0) => {
  const cResult = c.c(40);
  ({ skuId, consumed, onPressExplorePerks, onPressViewCredits: content } = arg0);
  const tmp4 = closure_12();
  const tmp6 = useThemeDefault();
  const fetchFractionalPremiumInfo = utils_CollectiblesUtils.useFetchFractionalPremiumInfo();
  ({ isLoading, isFractionalPremiumActive, expiresAt } = fetchFractionalPremiumInfo);
  if (consumed) {
    if (tmpResult.isThemeDark(tmp6)) {
      let tmp5Result = _modDef10468;
    } else {
      tmp5Result = _modDef10469;
    }
    if (cResult[0] !== tmp5Result) {
      const obj3 = { source: tmp5Result };
      const tmp15 = options(FastImageDefault, obj3);
      cResult[0] = tmp5Result;
      cResult[1] = tmp15;
    }
    tmpResult = shared;
  } else {
    const _Symbol = Symbol;
    if (cResult[2] === Symbol.for("react.memo_cache_sentinel")) {
      const obj4 = { variant: "heading-lg/bold", color: "text-default", children: null };
      const intl = util.intl;
      obj4.children = intl.string(util.t.g5W1g8);
      const tmp11 = options(Text_Text.Text, obj4);
      cResult[2] = tmp11;
      let tmp9 = tmp11;
    } else {
      tmp9 = cResult[2];
    }
    if (cResult[3] === consumed) {
      if (cResult[4] === expiresAt) {
        if (cResult[5] === isFractionalPremiumActive) {
          if (cResult[6] === skuId) {
            if (cResult[7] === tmp4.description) {
              const _Symbol2 = Symbol;
              if (cResult[12] === Symbol.for("react.memo_cache_sentinel")) {
                const fn = function q() {
                  const articleURL = HelpdeskUtilsDefault.getArticleURL(constants.FRACTIONAL_PREMIUM_ABOUT);
                  LinkingDefault.openURL(articleURL);
                };
                cResult[12] = fn;
                let tmp29 = fn;
              } else {
                tmp29 = cResult[12];
              }
              if (cResult[13] === consumed) {
                if (cResult[14] === skuId) {
                  if (cResult[16] !== tmp4.questionIcon) {
                    const obj5 = { style: tmp4.questionIcon, color: nativeDefault.colors.WHITE };
                    const tmp38 = options(CircleQuestionIcon.CircleQuestionIcon, obj5);
                    cResult[16] = tmp4.questionIcon;
                    cResult[17] = tmp38;
                    let tmp36 = tmp38;
                  } else {
                    tmp36 = cResult[17];
                  }
                  if (cResult[18] === tmp4.questionIconContainer) {
                    if (cResult[19] === tmp36) {
                      let tmp39 = cResult[20];
                    }
                    if (cResult[21] === tmp30) {
                      if (cResult[22] === tmp39) {
                        let tmp42 = cResult[23];
                      }
                      if (cResult[24] === consumed) {
                        if (cResult[25] === tmp17) {
                          if (cResult[26] === isLoading) {
                            if (cResult[27] === onPressExplorePerks) {
                              if (cResult[28] === content) {
                                if (cResult[29] === tmp4.buttonContainer) {
                                  if (cResult[30] === tmp4.content) {
                                    if (cResult[31] === tmp9) {
                                      if (cResult[33] === tmp4.body) {
                                        if (cResult[34] === tmp46) {
                                          let tmp55 = cResult[35];
                                        }
                                        const _Symbol3 = Symbol;
                                        if (cResult[36] === Symbol.for("react.memo_cache_sentinel")) {
                                          const tmp61 = options(ActionSheetHeaderBar.ActionSheetHeaderBar, { variant: "floating" });
                                          cResult[36] = tmp61;
                                          let tmp59 = tmp61;
                                        } else {
                                          tmp59 = cResult[36];
                                        }
                                        if (cResult[37] === tmp42) {
                                          if (cResult[38] === tmp55) {
                                            let tmp62 = cResult[39];
                                          }
                                          return tmp62;
                                        }
                                        const obj6 = { handleDisabled: true, children: null };
                                        const items = [tmp42, tmp55, tmp59];
                                        obj6.children = items;
                                        const tmp64 = v65535(Sheet_BottomSheet.BottomSheet, obj6);
                                        cResult[37] = tmp42;
                                        cResult[38] = tmp55;
                                        cResult[39] = tmp64;
                                        tmp62 = tmp64;
                                      }
                                      const obj7 = { style: tmp4.body, children: cResult[32] };
                                      const tmp58 = options(hasOwnProperty, obj7);
                                      cResult[33] = tmp4.body;
                                      cResult[34] = cResult[32];
                                      cResult[35] = tmp58;
                                      tmp55 = tmp58;
                                    }
                                  }
                                }
                              }
                            }
                          }
                        }
                      }
                      if (isLoading) {
                        let tmp47Result = options(React4, { size: "large" });
                      } else {
                        const obj8 = { style: tmp4.content, children: null };
                        const items1 = [tmp9, tmp17, ];
                        const obj9 = { style: tmp4.buttonContainer, children: null };
                        const obj10 = { size: "lg", text: null, onPress: null };
                        const intl5 = util.intl;
                        const string = intl5.string;
                        const t = util.t;
                        if (consumed) {
                          obj10.text = string(t.ERKK6v);
                          obj10.onPress = onPressExplorePerks;
                          let tmp50 = obj10;
                        } else {
                          obj10.text = string(t["Jr6N+s"]);
                          obj10.onPress = content;
                          tmp50 = obj10;
                        }
                        const items2 = [options(components_Button_Button.Button, tmp50), ];
                        const obj11 = { size: "lg", variant: "secondary", text: null, onPress: null };
                        const intl6 = util.intl;
                        obj11.text = intl6.string(util.t.TkTvBz);
                        obj11.onPress = function onPress() {
                          return ActionSheetActionCreatorsDefault.hideActionSheet();
                        };
                        items2[1] = options(components_Button_Button.Button, obj11);
                        obj9.children = items2;
                        items1[2] = v65535(hasOwnProperty, obj9);
                        obj8.children = items1;
                        tmp47Result = v65535(hasOwnProperty, obj8);
                      }
                      cResult[24] = consumed;
                      cResult[25] = tmp17;
                      cResult[26] = isLoading;
                      cResult[27] = onPressExplorePerks;
                      cResult[28] = content;
                      ({ buttonContainer: tmp3[29], content } = tmp4);
                      cResult[30] = content;
                      cResult[31] = tmp9;
                      cResult[32] = tmp47Result;
                    }
                    const obj12 = { children: null };
                    const items3 = [tmp30, tmp39];
                    obj12.children = items3;
                    const tmp45 = v65535(closure_1_11, obj12);
                    cResult[21] = tmp30;
                    cResult[22] = tmp39;
                    cResult[23] = tmp45;
                    tmp42 = tmp45;
                  }
                  const obj13 = { style: tmp4.questionIconContainer, onPress: tmp29, children: tmp36 };
                  const tmp41 = options(Pressables.PressableOpacity, obj13);
                  cResult[18] = tmp4.questionIconContainer;
                  cResult[19] = tmp36;
                  cResult[20] = tmp41;
                  tmp39 = tmp41;
                }
              }
              if (consumed) {
                const obj14 = { premiumType: closure_1_8.TIER_2 };
                let tmp31Result = options(PremiumPlanActionSheetHeaderDefault, obj14);
              } else {
                const obj15 = { skuId };
                tmp31Result = options(closure_13, obj15);
              }
              cResult[13] = consumed;
              cResult[14] = skuId;
              cResult[15] = tmp31Result;
            }
          }
        }
      }
    }
    let num4;
    if (dependencyMap2[skuId] != null) {
      num4 = tmp19[1];
    }
    if (num4 == null) {
      num4 = 3;
    }
    const intl2 = util.intl;
    const obj16 = { days: num4 };
    const formatToPlainStringResult = intl2.formatToPlainString(util.t.Cz1G97, obj16);
    if (consumed) {
      const obj17 = { variant: "text-md/normal", color: "text-default", style: tmp4.description, children: null };
      const intl4 = util.intl;
      const obj18 = { duration: formatToPlainStringResult, expirationDate: expiresAt };
      obj17.children = intl4.format(util.t["93PGOI"], obj18);
      let tmp23 = options(Text_Text.Text, obj17);
    } else {
      const intl3 = util.intl;
      if (isFractionalPremiumActive) {
        let stringResult = intl3.string(util.t.fBmhE9);
      } else {
        const obj19 = { duration: formatToPlainStringResult };
        stringResult = intl3.format(util.t["8fyBPf"], obj19);
      }
      if (cResult[9] === tmp4.description) {
        if (cResult[10] === stringResult) {
          tmp23 = cResult[11];
        }
      }
      const obj20 = { variant: "text-md/normal", color: "text-default", style: tmp4.description, children: stringResult };
      const tmp25 = options(Text_Text.Text, obj20);
      cResult[9] = tmp4.description;
      cResult[10] = stringResult;
      cResult[11] = tmp25;
      tmp23 = tmp25;
    }
    cResult[3] = consumed;
    cResult[4] = expiresAt;
    cResult[5] = isFractionalPremiumActive;
    cResult[6] = skuId;
    isFractionalPremiumActive = tmp4.description;
    cResult[7] = isFractionalPremiumActive;
    cResult[8] = tmp23;
  }
}) : ((skuId) => {
  skuId = skuId.skuId;
  const consumed = skuId.consumed;
  ({ onPressExplorePerks, onPressViewCredits } = skuId);
  const tmp = closure_12();
  dependencyMap = tmp;
  const tmp4 = consumed(4797)();
  noop = tmp4;
  const fetchFractionalPremiumInfo = skuId(7110).useFetchFractionalPremiumInfo();
  const isFractionalPremiumActive = fetchFractionalPremiumInfo.isFractionalPremiumActive;
  const expiresAt = fetchFractionalPremiumInfo.expiresAt;
  const items = [consumed, tmp4];
  const items1 = [skuId, consumed, expiresAt, isFractionalPremiumActive, tmp.description];
  const memo = noop.useMemo(() => {
    if (consumed) {
      const tmp10 = FastImageDefault;
      let obj3 = dependencyMap;
      if (obj2.isThemeDark(closure_3)) {
        let tmp8Result = _modDef10468;
      } else {
        tmp8Result = _modDef10469;
      }
      obj3 = { source: tmp8Result };
      options(tmp10, obj3);
      obj2 = shared;
    } else {
      const obj = { variant: "heading-lg/bold", color: "text-default", children: null };
      const intl = util.intl;
      obj.children = intl.string(util.t.g5W1g8);
      return options(Text_Text.Text, obj);
    }
  }, items);
  const memo1 = noop.useMemo(() => {
    let num;
    if (dependencyMap2[skuId] != null) {
      num = tmp[1];
    }
    if (num == null) {
      num = 3;
    }
    const intl = util.intl;
    const formatToPlainStringResult = intl.formatToPlainString(util.t.Cz1G97, { days: num });
    const obj = { variant: "text-md/normal", color: "text-default", style: description.description, children: null };
    if (consumed) {
      const intl3 = util.intl;
      const obj2 = { duration: formatToPlainStringResult, expirationDate: expiresAt };
      obj.children = intl3.format(util.t["93PGOI"], obj2);
      let tmp8 = obj;
    } else {
      const intl2 = util.intl;
      if (isFractionalPremiumActive) {
        let stringResult = intl2.string(util.t.fBmhE9);
      } else {
        const obj3 = { duration: formatToPlainStringResult };
        stringResult = intl2.format(util.t["8fyBPf"], obj3);
      }
      obj.children = stringResult;
      tmp8 = obj;
    }
    return options(Text_Text.Text, tmp8);
  }, items1);
  const callback = noop.useCallback(() => {
    const articleURL = consumed(description[19]).getArticleURL(constants.FRACTIONAL_PREMIUM_ABOUT);
    const obj = consumed(description[19]);
    consumed(description[20]).openURL(articleURL);
  }, []);
  if (consumed) {
    let obj2 = { premiumType: closure_8.TIER_2 };
    let tmp12Result = closure_9(tmp2(6950), obj2);
    let tmp15 = closure_9;
  } else {
    let obj3 = { skuId };
    tmp12Result = closure_9(closure_13, obj3);
    tmp15 = closure_9;
  }
  const obj4 = { children: null };
  const items2 = [tmp12Result, ];
  const obj5 = { style: tmp.questionIconContainer, onPress: callback, children: null };
  let obj = skuId(7110);
  obj5.children = tmp15(skuId(11028).CircleQuestionIcon, { style: tmp.questionIcon, color: consumed(587).colors.WHITE });
  items2[1] = tmp15(skuId(5916).PressableOpacity, obj5);
  obj4.children = items2;
  const items3 = [closure_10(closure_11, obj4), , ];
  const obj7 = { style: tmp.body, children: null };
  if (fetchFractionalPremiumInfo.isLoading) {
    let tmp10Result = tmp15(isFractionalPremiumActive, { size: "large" });
  } else {
    const obj8 = { style: tmp.content, children: null };
    const items4 = [memo, memo1, ];
    const obj9 = { style: tmp.buttonContainer, children: null };
    const obj10 = { size: "lg", text: null, onPress: null };
    let intl = tmp5(1126).intl;
    const string = intl.string;
    const t = tmp5(1126).t;
    if (consumed) {
      obj10.text = string(t.ERKK6v);
      obj10.onPress = onPressExplorePerks;
      let tmp18 = obj10;
    } else {
      obj10.text = string(t["Jr6N+s"]);
      obj10.onPress = onPressViewCredits;
      tmp18 = obj10;
    }
    const items5 = [tmp15(tmp5(5601).Button, tmp18), ];
    const obj11 = { size: "lg", variant: "secondary", text: null, onPress: null };
    let intl2 = tmp5(1126).intl;
    obj11.text = intl2.string(tmp5(1126).t.TkTvBz);
    obj11.onPress = function onPress() {
      return consumed(description[25]).hideActionSheet();
    };
    items5[1] = tmp15(tmp5(5601).Button, obj11);
    obj9.children = items5;
    items4[2] = closure_10(tmp17, obj9);
    obj8.children = items4;
    tmp10Result = closure_10(tmp17, obj8);
  }
  const obj12 = { handleDisabled: true, children: null };
  obj7.children = tmp10Result;
  items3[1] = tmp15(expiresAt, obj7);
  items3[2] = tmp15(skuId(6656).ActionSheetHeaderBar, { variant: "floating" });
  obj12.children = items3;
  return closure_10(skuId(6652).BottomSheet, obj12);
});