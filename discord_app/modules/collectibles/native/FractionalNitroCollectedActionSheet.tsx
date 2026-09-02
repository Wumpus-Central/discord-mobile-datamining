// discord_app/modules/collectibles/native/FractionalNitroCollectedActionSheet.tsx
import ThemesDefault from "../../../../discord_common/js/packages/tokens/native.tsx";
import preloadDefault from "../../../components_native/common/FastImage.tsx";
import FRACTIONAL_NITRO_COIN_SIZE from "FractionalNitroCoinIllustration.tsx";
import registerAssetDefault from "../../../../_runtime/12791_registerAsset.js";
import closure_3 from "../../../../_runtime/00019_noop.js";
import get_ActivityIndicator from "../../../../_runtime/00017_get_ActivityIndicator.js";
import { HelpdeskArticles } from "../../../Constants.tsx";
import GuildFeatures from "../../premium/PremiumConstants.tsx";
import jsxProd from "../../../../_runtime/react/00021_jsxProd.js";
import createCacheKey from "../../../design/components/Styles/native/createStyles.tsx";

require = arg1;
function NitroAcquiredHeader(skuId) {
  const tmp = callback3();
  let obj = { style: tmp.header, children: null };
  obj = { source: registerAssetDefault };
  const items = [callback(preloadDefault, obj)];
  obj = { style: tmp.fractionNitroIcon, children: null };
  const tmp2 = preloadDefault;
  obj[1] = callback(FRACTIONAL_NITRO_COIN_SIZE.FractionalNitroCoinIllustration, {
    skuId: skuId.skuId,
    width: FRACTIONAL_NITRO_COIN_SIZE.FRACTIONAL_NITRO_COIN_SIZE.COLLECTED_SHEET,
    height: FRACTIONAL_NITRO_COIN_SIZE.FRACTIONAL_NITRO_COIN_SIZE.COLLECTED_SHEET,
  });
  items[1] = callback(closure_5, obj);
  obj[1] = items;
  return callback2(closure_5, obj);
}
({ ActivityIndicator: c4, View: c5 } = get_ActivityIndicator);
({ FRACTIONAL_PREMIUM_SKU_INTERVAL_COUNTS: error, PremiumTypes: closure_8 } = GuildFeatures);
({ jsx: c9, jsxs: c10, Fragment: unpackModuleId } = jsxProd);
createCacheKey = {
  body: null,
  content: null,
  buttonContainer: null,
  description: null,
  header: null,
  fractionNitroIcon: null,
  questionIconContainer: null,
  questionIcon: null,
};
createCacheKey = { flex: 1, padding: ThemesDefault.space.PX_16 };
createCacheKey[0] = createCacheKey;
createCacheKey[1] = { flex: 1, gap: ThemesDefault.space.PX_16, alignItems: "center" };
let obj1 = { flex: 1, gap: ThemesDefault.space.PX_16, alignItems: "center" };
createCacheKey[2] = { flex: 1, gap: ThemesDefault.space.PX_16, alignSelf: "stretch" };
createCacheKey[3] = { textAlign: "center" };
createCacheKey[4] = { height: 112, justifyContent: "center", alignItems: "center", overflow: "hidden" };
const obj3 = {
  width: require("FRACTIONAL_NITRO_COIN_SIZE").FRACTIONAL_NITRO_COIN_SIZE.COLLECTED_SHEET,
  height: require("FRACTIONAL_NITRO_COIN_SIZE").FRACTIONAL_NITRO_COIN_SIZE.COLLECTED_SHEET,
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: null,
};
let obj2 = { flex: 1, gap: ThemesDefault.space.PX_16, alignSelf: "stretch" };
let items = [{ translateX: -require("FRACTIONAL_NITRO_COIN_SIZE").FRACTIONAL_NITRO_COIN_SIZE.COLLECTED_SHEET / 2 }];
let obj4 = { translateX: -require("FRACTIONAL_NITRO_COIN_SIZE").FRACTIONAL_NITRO_COIN_SIZE.COLLECTED_SHEET / 2 };
items[1] = { translateY: -require("FRACTIONAL_NITRO_COIN_SIZE").FRACTIONAL_NITRO_COIN_SIZE.COLLECTED_SHEET / 2 };
obj3[5] = items;
createCacheKey[5] = obj3;
let obj5 = { translateY: -require("FRACTIONAL_NITRO_COIN_SIZE").FRACTIONAL_NITRO_COIN_SIZE.COLLECTED_SHEET / 2 };
createCacheKey[6] = {
  position: "absolute",
  right: ThemesDefault.space.PX_16,
  top: ThemesDefault.space.PX_16,
  width: 32,
  height: 32,
  backgroundColor: ThemesDefault.colors.CONTROL_OVERLAY_SECONDARY_BACKGROUND_DEFAULT,
  justifyContent: "center",
  borderRadius: ThemesDefault.radii.lg,
  alignItems: "center",
};
createCacheKey[7] = { width: 18, height: 18 };
let closure_12 = createCacheKey.createStyles(createCacheKey);
let obj6 = {
  position: "absolute",
  right: ThemesDefault.space.PX_16,
  top: ThemesDefault.space.PX_16,
  width: 32,
  height: 32,
  backgroundColor: ThemesDefault.colors.CONTROL_OVERLAY_SECONDARY_BACKGROUND_DEFAULT,
  justifyContent: "center",
  borderRadius: ThemesDefault.radii.lg,
  alignItems: "center",
};
const result = require("set").fileFinishedImporting(
  "modules/collectibles/native/FractionalNitroCollectedActionSheet.tsx",
);

export default function FractionalNitroCollectedActionSheet(skuId) {
  skuId = skuId.skuId;
  const consumed = skuId.consumed;
  dependencyMap = undefined;
  let React;
  let isFractionalPremiumActive;
  let expiresAt;
  ({ onPressExplorePerks, onPressViewCredits } = skuId);
  const tmp = callback3();
  dependencyMap = tmp;
  const tmp4 = consumed(4413)();
  React = tmp4;
  let obj = skuId(7342);
  const fetchFractionalPremiumInfo = obj.useFetchFractionalPremiumInfo();
  isFractionalPremiumActive = fetchFractionalPremiumInfo.isFractionalPremiumActive;
  expiresAt = fetchFractionalPremiumInfo.expiresAt;
  const items = [consumed, tmp4];
  const items1 = [skuId, consumed, expiresAt, isFractionalPremiumActive, tmp.description];
  const memo = React.useMemo(() => {
    if (consumed) {
      const tmp10 = consumed(description[8]);
      let obj = description;
      if (obj2.isThemeDark(closure_3)) {
        let tmp8Result = tmp8(obj[13]);
      } else {
        tmp8Result = tmp8(obj[14]);
      }
      obj = { source: null };
      obj[0] = tmp8Result;
      tmp(tmp10, obj);
      obj2 = skuId(description[12]);
    } else {
      obj = { variant: "heading-lg/bold", color: "text-default", children: null };
      const intl = skuId(description[16]).intl;
      obj[2] = intl.string(skuId(description[16]).t.g5W1g8);
      return tmp(skuId(description[15]).Text, obj);
    }
  }, items);
  const memo1 = React.useMemo(() => {
    let num;
    if (closure_1_7[skuId] != null) {
      num = tmp[1];
    }
    if (num == null) {
      num = 3;
    }
    const intl = skuId(description[16]).intl;
    const formatToPlainStringResult = intl.formatToPlainString(skuId(description[16]).t.Cz1G97, { days: num });
    let obj = { variant: "text-md/normal", color: "text-default", style: description.description, children: null };
    if (consumed) {
      const intl3 = tmp2(tmp3[16]).intl;
      obj = { duration: null, expirationDate: null };
      obj[0] = formatToPlainStringResult;
      obj[1] = expiresAt;
      obj[3] = intl3.format(tmp2(tmp3[16]).t["93PGOI"], obj);
      let tmp8 = obj;
    } else {
      const intl2 = tmp2(tmp3[16]).intl;
      if (isFractionalPremiumActive) {
        let stringResult = intl2.string(tmp2(tmp3[16]).t.fBmhE9);
      } else {
        obj = { duration: null };
        obj[0] = formatToPlainStringResult;
        stringResult = intl2.format(tmp2(tmp3[16]).t["8fyBPf"], obj);
      }
      obj[3] = stringResult;
      tmp8 = obj;
    }
    return closure_1_9(skuId(description[15]).Text, tmp8);
  }, items1);
  const callback = React.useCallback(() => {
    const articleURL = consumed(description[17]).getArticleURL(constants.FRACTIONAL_PREMIUM_ABOUT);
    const obj = consumed(description[17]);
    consumed(description[18]).openURL(articleURL);
  }, []);
  if (consumed) {
    obj = { premiumType: null };
    obj[0] = TIER_2.TIER_2;
    let tmp12Result = tmp12(tmp2(7185), obj);
    let tmp15 = tmp12;
  } else {
    obj = { skuId: null };
    obj[0] = skuId;
    tmp12Result = tmp12(NitroAcquiredHeader, obj);
    tmp15 = tmp12;
  }
  obj1 = { children: null };
  const items2 = [tmp12Result];
  let obj2 = {
    style: tmp.questionIconContainer,
    onPress: callback,
    children: tmp15(skuId(11074).CircleQuestionIcon, { style: tmp.questionIcon, color: consumed(709).colors.WHITE }),
  };
  items2[1] = tmp15(skuId(5076).PressableOpacity, obj2);
  obj1[0] = items2;
  const items3 = [closure_10(closure_11, obj1), ,];
  const obj4 = { style: tmp.body, children: null };
  if (fetchFractionalPremiumInfo.isLoading) {
    let tmp10Result = tmp15(isFractionalPremiumActive, { size: "large" });
  } else {
    const obj5 = { style: null, children: null };
    obj5[0] = tmp.content;
    const items4 = [memo, memo1];
    const obj6 = { style: null, children: null };
    obj6[0] = tmp.buttonContainer;
    const obj7 = { size: "lg", text: null, onPress: null };
    let intl = tmp5(1233).intl;
    const string = intl.string;
    const t = tmp5(1233).t;
    if (consumed) {
      obj7[1] = string(t.ERKK6v);
      obj7[2] = onPressExplorePerks;
      let tmp18 = obj7;
    } else {
      obj7[1] = string(t["Jr6N+s"]);
      obj7[2] = onPressViewCredits;
      tmp18 = obj7;
    }
    const items5 = [tmp15(tmp5(4928).Button, tmp18)];
    const obj8 = { size: "lg", variant: "secondary", text: null, onPress: null };
    let intl2 = tmp5(1233).intl;
    obj8[2] = intl2.string(tmp5(1233).t.TkTvBz);
    obj8[3] = function onPress() {
      return consumed(description[24]).hideActionSheet();
    };
    items5[1] = tmp15(tmp5(4928).Button, obj8);
    obj6[1] = items5;
    items4[2] = tmp10(tmp17, obj6);
    obj5[1] = items4;
    tmp10Result = tmp10(tmp17, obj5);
  }
  const obj9 = { handleDisabled: true, children: null };
  obj4[1] = tmp10Result;
  items3[1] = tmp15(expiresAt, obj4);
  items3[2] = tmp15(skuId(5945).ActionSheetHeaderBar, { variant: "floating" });
  obj9[1] = items3;
  return closure_10(skuId(5630).BottomSheet, obj9);
}
