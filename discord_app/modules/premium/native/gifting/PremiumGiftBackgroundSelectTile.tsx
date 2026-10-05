// discord_app/modules/premium/native/gifting/PremiumGiftBackgroundSelectTile.tsx
import react2 from "../../../../../_runtime/00576_react.js";
import nativeDefault from "../../../../../discord_common/js/packages/tokens/native.tsx";
import intl3 from "../../../../intl/index.native.tsx";
import PremiumConstants from "../../PremiumConstants.tsx";
import _modDef2557 from "../../gifting/PremiumGifting.messages.js";
import FastImageDefault from "../../../../components_native/common/FastImage.tsx";
import PremiumGiftingConstants from "../../gifting/PremiumGiftingConstants.tsx";
import AssetRegistryDefault from "../../../../../_runtime/10754_AssetRegistry.js";
import AssetRegistryDefault2 from "../../../../../_runtime/10755_AssetRegistry.js";
import AssetRegistryDefault3 from "../../../../../_runtime/10756_AssetRegistry.js";
import AssetRegistryDefault4 from "../../../../../_runtime/10757_AssetRegistry.js";
import _modDef10758 from "../../../../../discord_assets/assets/premium/gifting/halloween-card-small.png.js";
import _modDef10759 from "../../../../../discord_assets/assets/premium/gifting/seasonal/gift_cake.png.js";
import _modDef10760 from "../../../../../discord_assets/assets/premium/gifting/seasonal/gift_chest.png.js";
import _modDef10761 from "../../../../../discord_assets/assets/premium/gifting/seasonal/gift_coffee.png.js";
import _modDef10762 from "../../../../../discord_assets/assets/premium/gifting/seasonal/gift_box.png.js";
import react from "../../../../../_runtime/00019_react.js";
import react_native from "../../../../../_runtime/00017_react-native.js";
import Fragment from "../../../../../_runtime/react/00021_Fragment.js";
import createStyles from "../../../../design/components/Styles/native/createStyles.tsx";
import ReactCompilerGating from "../../../react_compiler/ReactCompilerGating.tsx";
import size_mod from "../../../../../_runtime/metro/00002__.js";

let CAKE;
let CHEST;
let COFFEE;
let STANDARD_BOX;
let c3;
let closure_4;
let metroImportDefault;
let metroRequire;
({ View: c3, Pressable: closure_4 } = react_native);
const PremiumGiftStyles = PremiumConstants.PremiumGiftStyles;
const GIFT_STYLE_DESCRIPTIONS = PremiumGiftingConstants.GIFT_STYLE_DESCRIPTIONS;
({ jsx: metroRequire, jsxs: metroImportDefault } = Fragment);
const GIFT_STYLE_IMG = {
  [STANDARD_BOX]: AssetRegistryDefault,
  [CAKE]: AssetRegistryDefault2,
  [CHEST]: AssetRegistryDefault3,
  [COFFEE]: AssetRegistryDefault4,
};
({ STANDARD_BOX, CAKE, CHEST, COFFEE } = PremiumGiftStyles);
let obj2 = { uri: _modDef10758 };
GIFT_STYLE_IMG[PremiumGiftStyles.NITROWEEN_STANDARD] = obj2;
GIFT_STYLE_IMG[PremiumGiftStyles.SNOWGLOBE] = null;
GIFT_STYLE_IMG[PremiumGiftStyles.BOX] = null;
GIFT_STYLE_IMG[PremiumGiftStyles.CUP] = null;
let obj3 = { uri: _modDef10759 };
GIFT_STYLE_IMG[PremiumGiftStyles.SEASONAL_CAKE] = obj3;
let obj4 = { uri: _modDef10760 };
GIFT_STYLE_IMG[PremiumGiftStyles.SEASONAL_CHEST] = obj4;
let obj5 = { uri: _modDef10761 };
GIFT_STYLE_IMG[PremiumGiftStyles.SEASONAL_COFFEE] = obj5;
GIFT_STYLE_IMG[PremiumGiftStyles.SEASONAL_STANDARD_BOX] = { uri: _modDef10762 };
({ uri: _modDef10762 });
let closure_9 = createStyles.createStyles((arg0) => {
  let num;
  let size1;
  size = { width: 78, height: 44, justifyContent: "center", marginEnd: nativeDefault.space.PX_8, marginStart: num };
  num = 0;
  if (0 === arg0) {
    num = 20;
  }
  const obj = { container: size, selected: size1, image: { width: 72, height: 38, alignSelf: "center" } };
  size1 = {
    position: "absolute",
    borderColor: nativeDefault.colors.TEXT_BRAND,
    borderRadius: nativeDefault.radii.sm,
    borderWidth: 2,
    flex: 1,
    width: 78,
    height: 44,
  };
  return obj;
});
const tmp5 = ReactCompilerGating.isReactCompilerEnabled()
  ? (index) => {
      let giftStyle;
      let intl2;
      let items;
      let onPress;
      let selected;
      const obj = react2;
      const cResult = obj.c(15);
      ({ selected, giftStyle, onPress } = index);
      const tmp4 = closure_9(index.index);
      let tmp6 = null;
      if (null != obj[giftStyle]) {
        let tmp7;
        if (cResult[0] !== giftStyle) {
          const intl = intl3.intl;
          const formatToPlainString = intl.formatToPlainString;
          const obj2 = { giftStyle: intl2.string(GIFT_STYLE_DESCRIPTIONS[giftStyle]) };
          const prop = _modDef2557["+utqaz"];
          intl2 = intl3.intl;
          const formatToPlainStringResult = formatToPlainString(prop, obj2);
          cResult[0] = giftStyle;
          cResult[1] = formatToPlainStringResult;
          tmp7 = formatToPlainStringResult;
        } else {
          tmp7 = cResult[1];
        }
        if (cResult[2] === selected) {
          let tmp12;
          if (cResult[3] === tmp4.selected) {
            tmp12 = cResult[4];
          }
          if (cResult[5] === obj[giftStyle]) {
            let tmp16;
            if (cResult[6] === tmp4.image) {
              tmp16 = cResult[7];
            }
            if (cResult[8] === onPress) {
              if (cResult[9] === selected) {
                if (cResult[10] === tmp4.container) {
                  if (cResult[11] === tmp7) {
                    if (cResult[12] === tmp12) {
                      let tmp20;
                      if (cResult[13] === tmp16) {
                        tmp20 = cResult[14];
                      }
                      tmp6 = tmp20;
                    }
                  }
                }
              }
            }
            const obj3 = {
              "aria-label": tmp7,
              "aria-selected": selected,
              style: tmp4.container,
              onPress,
              children: items,
            };
            items = [tmp12, tmp16];
            const tmp23 = metroImportDefault(React3, obj3);
            cResult[8] = onPress;
            cResult[9] = selected;
            cResult[10] = tmp4.container;
            cResult[11] = tmp7;
            cResult[12] = tmp12;
            cResult[13] = tmp16;
            cResult[14] = tmp23;
            tmp20 = tmp23;
          }
          const obj4 = { resizeMode: "contain", style: tmp4.image, source: obj[giftStyle] };
          const tmp19 = metroRequire(FastImageDefault, obj4);
          cResult[5] = obj[giftStyle];
          cResult[6] = tmp4.image;
          cResult[7] = tmp19;
          tmp16 = tmp19;
        }
        let tmp13 = selected;
        if (tmp13) {
          const obj5 = { style: tmp4.selected };
          tmp13 = metroRequire(_false, obj5);
        }
        cResult[2] = selected;
        cResult[3] = tmp4.selected;
        cResult[4] = tmp13;
        tmp12 = tmp13;
      }
      return tmp6;
    }
  : (onPress) => {
      let formatToPlainString;
      let giftStyle;
      let intl2;
      let items;
      let obj;
      let obj2;
      let prop;
      let selected;
      ({ selected, giftStyle } = onPress);
      onPress = onPress.onPress;
      const tmp = closure_9(onPress.index);
      let tmp4Result = null;
      if (null != obj[giftStyle]) {
        obj = {
          "aria-label": formatToPlainString(prop, obj2),
          "aria-selected": selected,
          style: tmp.container,
          onPress,
          children: items,
        };
        const intl = intl3.intl;
        formatToPlainString = intl.formatToPlainString;
        obj2 = { giftStyle: intl2.string(GIFT_STYLE_DESCRIPTIONS[giftStyle]) };
        prop = _modDef2557["+utqaz"];
        intl2 = intl3.intl;
        if (selected) {
          const obj3 = { style: tmp.selected };
          selected = metroRequire(_false, obj3);
        }
        items = [selected];
        const obj4 = { resizeMode: "contain", style: tmp.image, source: obj[giftStyle] };
        items[1] = metroRequire(FastImageDefault, obj4);
        tmp4Result = metroImportDefault(React3, obj);
      }
      return tmp4Result;
    };
let size = size_mod;
const result = size.fileFinishedImporting("modules/premium/native/gifting/PremiumGiftBackgroundSelectTile.tsx");

export default tmp5;
export { GIFT_STYLE_IMG };
