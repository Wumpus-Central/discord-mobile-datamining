// discord_app/modules/collectibles/native/FractionalNitroCollectedActionSheet.tsx
import nativeDefault from "../../../../discord_common/js/packages/tokens/native.tsx";
import util from "../../../intl/index.native.tsx";
import shared from "../../../design/shared.tsx";
import Text_Text from "../../../design/components/Text/native/Text.tsx";
import FastImageDefault from "../../../components_native/common/FastImage.tsx";
import FractionalNitroCoinIllustration from "FractionalNitroCoinIllustration.tsx";
import _modDef10772 from "../../../../_runtime/metro/10772__.js";
import _modDef10773 from "../../../../_runtime/metro/10773__.js";
import _modDef15283 from "../../../../_runtime/metro/15283__.js";
import noop from "../../../../_runtime/metro/00019__.js";

require = fn;
function NitroAcquiredHeader(skuId) {
  const tmp = closure_12();
  const obj = { style: tmp.header, children: null };
  const obj2 = { source: _modDef15283 };
  items = [React6(FastImageDefault, obj2)];
  const obj3 = { style: tmp.fractionNitroIcon, children: null };
  const size = {
    skuId: skuId.skuId,
    width: FractionalNitroCoinIllustration.FRACTIONAL_NITRO_COIN_SIZE.COLLECTED_SHEET,
    height: FractionalNitroCoinIllustration.FRACTIONAL_NITRO_COIN_SIZE.COLLECTED_SHEET,
  };
  obj3.children = React6(FractionalNitroCoinIllustration.FractionalNitroCoinIllustration, size);
  items[1] = React6(hasOwnProperty, obj3);
  obj.children = items;
  return closure_1_10(hasOwnProperty, obj);
}
get_ActivityIndicator = fn(17);
({ ActivityIndicator: closure_4, View: hasOwnProperty } = get_ActivityIndicator);
const HelpdeskArticles = fn(1072).HelpdeskArticles;
const PremiumConstants = fn(1387);
({ FRACTIONAL_PREMIUM_SKU_INTERVAL_COUNTS: metroImportDefault, PremiumTypes: closure_8 } = PremiumConstants);
const jsxProd = fn(21);
({ jsx: closure_9, jsxs: closure_10, Fragment: closure_11 } = jsxProd);
const createStyles = fn(5141);
let obj2 = {
  body: { flex: 1, padding: nativeDefault.space.PX_16 },
  content: null,
  buttonContainer: null,
  description: null,
  header: null,
  fractionNitroIcon: null,
  questionIconContainer: null,
  questionIcon: null,
};
let obj3 = { flex: 1, padding: nativeDefault.space.PX_16 };
obj2.content = { flex: 1, gap: nativeDefault.space.PX_16, alignItems: "center" };
let obj4 = { flex: 1, gap: nativeDefault.space.PX_16, alignItems: "center" };
obj2.buttonContainer = { flex: 1, gap: nativeDefault.space.PX_16, alignSelf: "stretch" };
obj2.description = { textAlign: "center" };
obj2.header = { height: 112, justifyContent: "center", alignItems: "center", overflow: "hidden" };
let size = {
  width: fn(9688).FRACTIONAL_NITRO_COIN_SIZE.COLLECTED_SHEET,
  height: fn(9688).FRACTIONAL_NITRO_COIN_SIZE.COLLECTED_SHEET,
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: null,
};
let obj5 = { flex: 1, gap: nativeDefault.space.PX_16, alignSelf: "stretch" };
let items = [{ translateX: -fn(9688).FRACTIONAL_NITRO_COIN_SIZE.COLLECTED_SHEET / 2 }];
const obj6 = { translateX: -fn(9688).FRACTIONAL_NITRO_COIN_SIZE.COLLECTED_SHEET / 2 };
items[1] = { translateY: -fn(9688).FRACTIONAL_NITRO_COIN_SIZE.COLLECTED_SHEET / 2 };
size.transform = items;
obj2.fractionNitroIcon = size;
const size1 = {
  position: "absolute",
  right: nativeDefault.space.PX_16,
  top: nativeDefault.space.PX_16,
  width: 32,
  height: 32,
  backgroundColor: nativeDefault.colors.CONTROL_OVERLAY_SECONDARY_BACKGROUND_DEFAULT,
  justifyContent: "center",
  borderRadius: nativeDefault.radii.lg,
  alignItems: "center",
};
obj2.questionIconContainer = size1;
obj2.questionIcon = { width: 18, height: 18 };
let closure_12 = createStyles.createStyles(obj2);
size = fn(2);
const result = size.fileFinishedImporting("modules/collectibles/native/FractionalNitroCollectedActionSheet.tsx");

export default function FractionalNitroCollectedActionSheet(skuId) {
  skuId = skuId.skuId;
  const consumed = skuId.consumed;
  ({ onPressExplorePerks, onPressViewCredits } = skuId);
  const tmp = closure_12();
  dependencyMap = tmp;
  const tmp4 = consumed(5377)();
  noop = tmp4;
  const fetchFractionalPremiumInfo = skuId(7901).useFetchFractionalPremiumInfo();
  const isFractionalPremiumActive = fetchFractionalPremiumInfo.isFractionalPremiumActive;
  const expiresAt = fetchFractionalPremiumInfo.expiresAt;
  items = [consumed, tmp4];
  const items1 = [skuId, consumed, expiresAt, isFractionalPremiumActive, tmp.description];
  const memo = noop.useMemo(() => {
    if (consumed) {
      const tmp10 = FastImageDefault;
      let obj3 = dependencyMap;
      if (obj2.isThemeDark(closure_3)) {
        let tmp8Result = _modDef10772;
      } else {
        tmp8Result = _modDef10773;
      }
      obj3 = { source: tmp8Result };
      React6(tmp10, obj3);
      obj2 = shared;
    } else {
      const obj = { variant: "heading-lg/semibold", color: "text-default", children: null };
      const intl = util.intl;
      obj.children = intl.string(util.t.g5W1g8);
      return React6(Text_Text.Text, obj);
    }
  }, items);
  const memo1 = noop.useMemo(() => {
    let num;
    if (metroImportDefault[skuId] != null) {
      num = tmp[1];
    }
    if (num == null) {
      num = 3;
    }
    const intl = util.intl;
    const formatToPlainStringResult = intl.formatToPlainString(util.t.Cz1G97, { days: num });
    const obj = { variant: "body-md/normal", color: "text-default", style: description.description, children: null };
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
    return React6(Text_Text.Text, tmp8);
  }, items1);
  const callback = noop.useCallback(() => {
    const articleURL = consumed(description[17]).getArticleURL(constants.FRACTIONAL_PREMIUM_ABOUT);
    const obj = consumed(description[17]);
    consumed(description[18]).openURL(articleURL);
  }, []);
  if (consumed) {
    let obj2 = { premiumType: TIER_2.TIER_2 };
    let tmp12Result = closure_9(tmp2(7756), obj2);
    let tmp15 = closure_9;
  } else {
    let obj3 = { skuId };
    tmp12Result = closure_9(NitroAcquiredHeader, obj3);
    tmp15 = closure_9;
  }
  const obj4 = { children: null };
  const items2 = [tmp12Result];
  const obj5 = { style: tmp.questionIconContainer, onPress: callback, children: null };
  let obj = skuId(7901);
  obj5.children = tmp15(skuId(14727).CircleQuestionIcon, {
    style: tmp.questionIcon,
    color: consumed(575).colors.WHITE,
  });
  items2[1] = tmp15(skuId(7121).PressableOpacity, obj5);
  obj4.children = items2;
  const items3 = [closure_10(closure_11, obj4), ,];
  const obj7 = { style: tmp.body, children: null };
  if (fetchFractionalPremiumInfo.isLoading) {
    let tmp10Result = tmp15(isFractionalPremiumActive, { size: "large" });
  } else {
    const obj8 = { style: tmp.content, children: null };
    const items4 = [memo, memo1];
    const obj9 = { style: tmp.buttonContainer, children: null };
    const obj10 = { size: "lg", text: null, onPress: null };
    let intl = tmp5(1113).intl;
    const string = intl.string;
    const t = tmp5(1113).t;
    if (consumed) {
      obj10.text = string(t.ERKK6v);
      obj10.onPress = onPressExplorePerks;
      let tmp18 = obj10;
    } else {
      obj10.text = string(t["Jr6N+s"]);
      obj10.onPress = onPressViewCredits;
      tmp18 = obj10;
    }
    const items5 = [tmp15(tmp5(5768).Button, tmp18)];
    const obj11 = { size: "lg", variant: "secondary", text: null, onPress: null };
    let intl2 = tmp5(1113).intl;
    obj11.text = intl2.string(tmp5(1113).t.TkTvBz);
    obj11.onPress = function onPress() {
      return consumed(description[24]).hideActionSheet();
    };
    items5[1] = tmp15(tmp5(5768).Button, obj11);
    obj9.children = items5;
    items4[2] = closure_10(tmp17, obj9);
    obj8.children = items4;
    tmp10Result = closure_10(tmp17, obj8);
  }
  const obj12 = { handleDisabled: true, children: null };
  obj7.children = tmp10Result;
  items3[1] = tmp15(expiresAt, obj7);
  items3[2] = tmp15(skuId(5731).ActionSheetHeaderBar, { variant: "floating" });
  obj12.children = items3;
  return closure_10(skuId(5396).BottomSheet, obj12);
}
