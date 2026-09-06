// === Module 13157: FractionalNitroCollectedActionSheet ===

// Module 13157 (FractionalNitroCollectedActionSheet)
import nativeDefault from "native" /* 576 */;
import util from "util" /* 1114 */;
import shared from "shared" /* 4411 */;
import Text_Text from "Text/Text" /* 4556 */;
import FastImageDefault from "FastImage" /* 5587 */;
import FractionalNitroCoinIllustration from "FractionalNitroCoinIllustration" /* 8846 */;
import _modDef13158 from "module_13158" /* 13158 */;
import noop from "module_19" /* 19 */;

require = fn;
function NitroAcquiredHeader(skuId) {
  const tmp = closure_12();
  let obj = { style: tmp.header, children: null };
  obj = { source: _modDef13158 };
  const items = [React7(FastImageDefault, obj), ];
  obj = { style: tmp.fractionNitroIcon, children: null };
  const size = { skuId: skuId.skuId, width: FractionalNitroCoinIllustration.FRACTIONAL_NITRO_COIN_SIZE.COLLECTED_SHEET, height: FractionalNitroCoinIllustration.FRACTIONAL_NITRO_COIN_SIZE.COLLECTED_SHEET };
  obj.children = React7(FractionalNitroCoinIllustration.FractionalNitroCoinIllustration, size);
  items[1] = React7(hasOwnProperty, obj);
  obj.children = items;
  return closure_1_10(hasOwnProperty, obj);
}
get_ActivityIndicator = fn(17);
({ ActivityIndicator: closure_4, View: hasOwnProperty } = get_ActivityIndicator);
const HelpdeskArticles = fn(1074).HelpdeskArticles;
const PremiumConstants = fn(1373);
({ FRACTIONAL_PREMIUM_SKU_INTERVAL_COUNTS: closure_7, PremiumTypes: closure_8 } = PremiumConstants);
const jsxProd = fn(21);
({ jsx: closure_9, jsxs: c10, Fragment: closure_11 } = jsxProd);
fn(4560);
let createStyles = { body: null, content: null, buttonContainer: null, description: null, header: null, fractionNitroIcon: null, questionIconContainer: null, questionIcon: null };
createStyles = { flex: 1, padding: nativeDefault.space.PX_16 };
createStyles.body = createStyles;
createStyles.content = { flex: 1, gap: nativeDefault.space.PX_16, alignItems: "center" };
let obj1 = { flex: 1, gap: nativeDefault.space.PX_16, alignItems: "center" };
createStyles.buttonContainer = { flex: 1, gap: nativeDefault.space.PX_16, alignSelf: "stretch" };
createStyles.description = { textAlign: "center" };
createStyles.header = { height: 112, justifyContent: "center", alignItems: "center", overflow: "hidden" };
let size = { width: fn(8846).FRACTIONAL_NITRO_COIN_SIZE.COLLECTED_SHEET, height: fn(8846).FRACTIONAL_NITRO_COIN_SIZE.COLLECTED_SHEET, position: "absolute", top: "50%", left: "50%", transform: null };
let obj2 = { flex: 1, gap: nativeDefault.space.PX_16, alignSelf: "stretch" };
let items = [{ translateX: -fn(8846).FRACTIONAL_NITRO_COIN_SIZE.COLLECTED_SHEET / 2 }, ];
const obj3 = { translateX: -fn(8846).FRACTIONAL_NITRO_COIN_SIZE.COLLECTED_SHEET / 2 };
items[1] = { translateY: -fn(8846).FRACTIONAL_NITRO_COIN_SIZE.COLLECTED_SHEET / 2 };
size.transform = items;
createStyles.fractionNitroIcon = size;
const size1 = { position: "absolute", right: nativeDefault.space.PX_16, top: nativeDefault.space.PX_16, width: 32, height: 32, backgroundColor: nativeDefault.colors.CONTROL_OVERLAY_SECONDARY_BACKGROUND_DEFAULT, justifyContent: "center", borderRadius: nativeDefault.radii.lg, alignItems: "center" };
createStyles.questionIconContainer = size1;
createStyles.questionIcon = { width: 18, height: 18 };
let closure_12 = createStyles.createStyles(createStyles);
size = fn(2);
const result = size.fileFinishedImporting("modules/collectibles/native/FractionalNitroCollectedActionSheet.tsx");

export default function FractionalNitroCollectedActionSheet(skuId) {
  skuId = skuId.skuId;
  const consumed = skuId.consumed;
  ({ onPressExplorePerks, onPressViewCredits } = skuId);
  const tmp = closure_12();
  dependencyMap = tmp;
  const tmp4 = consumed(4495)();
  noop = tmp4;
  let obj = skuId(7588);
  const fetchFractionalPremiumInfo = obj.useFetchFractionalPremiumInfo();
  const isFractionalPremiumActive = fetchFractionalPremiumInfo.isFractionalPremiumActive;
  const expiresAt = fetchFractionalPremiumInfo.expiresAt;
  const items = [consumed, tmp4];
  const items1 = [skuId, consumed, expiresAt, isFractionalPremiumActive, tmp.description];
  const memo = noop.useMemo(() => {
    if (consumed) {
      const tmp10 = FastImageDefault;
      let obj = dependencyMap;
      if (obj2.isThemeDark(closure_3)) {
        let tmp8Result = tmp8(10724);
      } else {
        tmp8Result = tmp8(10725);
      }
      obj = { source: tmp8Result };
      tmp(tmp10, obj);
      obj2 = shared;
    } else {
      obj = { variant: "heading-lg/bold", color: "text-default", children: null };
      const intl = util.intl;
      obj.children = intl.string(util.t.g5W1g8);
      return tmp(Text_Text.Text, obj);
    }
  }, items);
  const memo1 = noop.useMemo(() => {
    let num;
    if (React5[skuId] != null) {
      num = tmp[1];
    }
    if (num == null) {
      num = 3;
    }
    const intl = util.intl;
    const formatToPlainStringResult = intl.formatToPlainString(util.t.Cz1G97, { days: num });
    let obj = { variant: "text-md/normal", color: "text-default", style: description.description, children: null };
    if (consumed) {
      const intl3 = tmp2(1114).intl;
      obj = { duration: formatToPlainStringResult, expirationDate: expiresAt };
      obj.children = intl3.format(tmp2(1114).t["93PGOI"], obj);
      let tmp8 = obj;
    } else {
      const intl2 = tmp2(1114).intl;
      if (isFractionalPremiumActive) {
        let stringResult = intl2.string(tmp2(1114).t.fBmhE9);
      } else {
        obj = { duration: formatToPlainStringResult };
        stringResult = intl2.format(tmp2(1114).t["8fyBPf"], obj);
      }
      obj.children = stringResult;
      tmp8 = obj;
    }
    return React7(Text_Text.Text, tmp8);
  }, items1);
  const callback = noop.useCallback(() => {
    const articleURL = consumed(description[17]).getArticleURL(constants.FRACTIONAL_PREMIUM_ABOUT);
    const obj = consumed(description[17]);
    consumed(description[18]).openURL(articleURL);
  }, []);
  if (consumed) {
    obj = { premiumType: TIER_2.TIER_2 };
    let tmp12Result = tmp12(tmp2(7431), obj);
    let tmp15 = tmp12;
  } else {
    obj = { skuId };
    tmp12Result = tmp12(NitroAcquiredHeader, obj);
    tmp15 = tmp12;
  }
  const obj1 = { children: null };
  const items2 = [tmp12Result, ];
  let obj2 = { style: tmp.questionIconContainer, onPress: callback, children: tmp15(skuId(11105).CircleQuestionIcon, { style: tmp.questionIcon, color: consumed(576).colors.WHITE }) };
  items2[1] = tmp15(skuId(5123).PressableOpacity, obj2);
  obj1.children = items2;
  const items3 = [closure_10(closure_11, obj1), , ];
  const obj4 = { style: tmp.body, children: null };
  if (fetchFractionalPremiumInfo.isLoading) {
    let tmp10Result = tmp15(isFractionalPremiumActive, { size: "large" });
  } else {
    const obj5 = { style: tmp.content, children: null };
    const items4 = [memo, memo1, ];
    const obj6 = { style: tmp.buttonContainer, children: null };
    const obj7 = { size: "lg", text: null, onPress: null };
    let intl = tmp5(1114).intl;
    const string = intl.string;
    const t = tmp5(1114).t;
    if (consumed) {
      obj7.text = string(t.ERKK6v);
      obj7.onPress = onPressExplorePerks;
      let tmp18 = obj7;
    } else {
      obj7.text = string(t["Jr6N+s"]);
      obj7.onPress = onPressViewCredits;
      tmp18 = obj7;
    }
    const items5 = [tmp15(tmp5(4975).Button, tmp18), ];
    const obj8 = { size: "lg", variant: "secondary", text: null, onPress: null };
    let intl2 = tmp5(1114).intl;
    obj8.text = intl2.string(tmp5(1114).t.TkTvBz);
    obj8.onPress = function onPress() {
      return consumed(description[24]).hideActionSheet();
    };
    items5[1] = tmp15(tmp5(4975).Button, obj8);
    obj6.children = items5;
    items4[2] = tmp10(tmp17, obj6);
    obj5.children = items4;
    tmp10Result = tmp10(tmp17, obj5);
  }
  const obj9 = { handleDisabled: true, children: null };
  obj4.children = tmp10Result;
  items3[1] = tmp15(expiresAt, obj4);
  items3[2] = tmp15(skuId(7154).ActionSheetHeaderBar, { variant: "floating" });
  obj9.children = items3;
  return closure_10(skuId(7150).BottomSheet, obj9);
};