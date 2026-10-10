// discord_app/modules/premium/native/gifting/PremiumGiftBackgroundSelectTile.tsx
import c from "../../../../../_runtime/00576_c.js";
import nativeDefault from "../../../../../discord_common/js/packages/tokens/native.tsx";
import util from "../../../../intl/index.native.tsx";
import _modDef2632 from "../../gifting/PremiumGifting.messages.js";
import FastImageDefault from "../../../../components_native/common/FastImage.tsx";
import _modDef12713 from "../../../../../_runtime/metro/12713__.js";
import _modDef12714 from "../../../../../_runtime/metro/12714__.js";
import _modDef12715 from "../../../../../_runtime/metro/12715__.js";
import _modDef12716 from "../../../../../_runtime/metro/12716__.js";
import _modDef12717 from "../../../../../discord_assets/assets/premium/gifting/halloween-card-small.png.js";
import _modDef12718 from "../../../../../discord_assets/assets/premium/gifting/seasonal/gift_cake.png.js";
import _modDef12719 from "../../../../../discord_assets/assets/premium/gifting/seasonal/gift_chest.png.js";
import _modDef12720 from "../../../../../discord_assets/assets/premium/gifting/seasonal/gift_coffee.png.js";
import _modDef12721 from "../../../../../discord_assets/assets/premium/gifting/seasonal/gift_box.png.js";
import noop from "../../../../../_runtime/metro/00019__.js";

require = fn;
get_ActivityIndicator = fn(17);
({ View: c3, Pressable: closure_4 } = get_ActivityIndicator);
const PremiumGiftStyles = fn(1392).PremiumGiftStyles;
const GIFT_STYLE_DESCRIPTIONS = fn(12712).GIFT_STYLE_DESCRIPTIONS;
const jsxProd = fn(21);
({ jsx: metroRequire, jsxs: closure_7 } = jsxProd);
const GIFT_STYLE_IMG = {
  [STANDARD_BOX]: _modDef12713,
  [CAKE]: _modDef12714,
  [CHEST]: _modDef12715,
  [COFFEE]: _modDef12716,
};
({ STANDARD_BOX, CAKE, CHEST, COFFEE } = PremiumGiftStyles);
GIFT_STYLE_IMG[PremiumGiftStyles.NITROWEEN_STANDARD] = { uri: _modDef12717 };
GIFT_STYLE_IMG[PremiumGiftStyles.SNOWGLOBE] = null;
GIFT_STYLE_IMG[PremiumGiftStyles.BOX] = null;
GIFT_STYLE_IMG[PremiumGiftStyles.CUP] = null;
let obj2 = { uri: _modDef12717 };
GIFT_STYLE_IMG[PremiumGiftStyles.SEASONAL_CAKE] = { uri: _modDef12718 };
let obj3 = { uri: _modDef12718 };
GIFT_STYLE_IMG[PremiumGiftStyles.SEASONAL_CHEST] = { uri: _modDef12719 };
let obj4 = { uri: _modDef12719 };
GIFT_STYLE_IMG[PremiumGiftStyles.SEASONAL_COFFEE] = { uri: _modDef12720 };
let obj5 = { uri: _modDef12720 };
GIFT_STYLE_IMG[PremiumGiftStyles.SEASONAL_STANDARD_BOX] = { uri: _modDef12721 };
const createStyles = fn(5092);
let closure_9 = createStyles.createStyles((arg0) => {
  const size = {
    width: 78,
    height: 44,
    justifyContent: "center",
    marginEnd: nativeDefault.space.PX_8,
    marginStart: null,
  };
  let num = 0;
  if (0 === arg0) {
    num = 20;
  }
  const obj = { container: size, selected: null, image: null };
  size.marginStart = num;
  const size1 = {
    position: "absolute",
    borderColor: nativeDefault.colors.TEXT_BRAND,
    borderRadius: nativeDefault.radii.sm,
    borderWidth: 2,
    flex: 1,
    width: 78,
    height: 44,
  };
  obj.selected = size1;
  obj.image = { width: 72, height: 38, alignSelf: "center" };
  return obj;
});
const ReactCompilerGating = fn(558);
const obj6 = { uri: _modDef12721 };
let size = fn(2);
const result = size.fileFinishedImporting("modules/premium/native/gifting/PremiumGiftBackgroundSelectTile.tsx");

export default ReactCompilerGating.isReactCompilerEnabled()
  ? function GiftBackgroundSelectTile(index) {
      const obj = c;
      const cResult = obj.c(15);
      ({ selected, giftStyle, onPress } = index);
      let container = closure_9(index.index);
      if (null == obj[giftStyle]) {
        return null;
      } else {
        if (cResult[0] !== giftStyle) {
          const intl = util.intl;
          const obj2 = { giftStyle: null };
          const intl2 = util.intl;
          obj2.giftStyle = intl2.string(GIFT_STYLE_DESCRIPTIONS[giftStyle]);
          const formatToPlainStringResult = intl.formatToPlainString(_modDef2632["+utqaz"], obj2);
          cResult[0] = giftStyle;
          cResult[1] = formatToPlainStringResult;
          let tmp5 = formatToPlainStringResult;
        } else {
          tmp5 = cResult[1];
        }
        if (cResult[2] === selected) {
          if (cResult[3] === container.selected) {
            let tmp9 = cResult[4];
          }
          if (cResult[5] === tmp4) {
            if (cResult[6] === container.image) {
              let tmp13 = cResult[7];
            }
            if (cResult[8] === onPress) {
              if (cResult[9] === selected) {
                if (cResult[10] === container.container) {
                  if (cResult[11] === tmp5) {
                    if (cResult[12] === tmp9) {
                    }
                  }
                }
              }
            }
            const obj3 = {
              "aria-label": tmp5,
              "aria-selected": selected,
              style: container.container,
              onPress,
              children: null,
            };
            const items = [tmp9, tmp13];
            obj3.children = items;
            const tmp20 = React5(React4, obj3);
            cResult[8] = onPress;
            cResult[9] = selected;
            container = container.container;
            cResult[10] = container;
            cResult[11] = tmp5;
            cResult[12] = tmp9;
            cResult[13] = tmp13;
            cResult[14] = tmp20;
          }
          const obj4 = { resizeMode: "contain", style: container.image, source: tmp4 };
          const tmp16 = timestampProducer(FastImageDefault, obj4);
          cResult[5] = tmp4;
          cResult[6] = container.image;
          cResult[7] = tmp16;
          tmp13 = tmp16;
        }
        let tmp10 = selected;
        if (selected) {
          const obj5 = { style: container.selected };
          tmp10 = timestampProducer(React3, obj5);
        }
        cResult[2] = selected;
        cResult[3] = container.selected;
        cResult[4] = tmp10;
        tmp9 = tmp10;
      }
    }
  : function GiftBackgroundSelectTile(index) {
      ({ selected, giftStyle } = index);
      const tmp = closure_9(index.index);
      let tmp4Result = null;
      if (null != obj[giftStyle]) {
        obj = { "aria-label": null, "aria-selected": null, style: null, onPress: null, children: null };
        const intl = util.intl;
        const obj2 = { giftStyle: null };
        const intl2 = util.intl;
        obj2.giftStyle = intl2.string(GIFT_STYLE_DESCRIPTIONS[giftStyle]);
        obj["aria-label"] = intl.formatToPlainString(_modDef2632["+utqaz"], obj2);
        obj["aria-selected"] = selected;
        obj.style = tmp.container;
        obj.onPress = index.onPress;
        if (selected) {
          const obj3 = { style: tmp.selected };
          selected = timestampProducer(React3, obj3);
        }
        const items = [selected];
        const obj4 = { resizeMode: "contain", style: tmp.image, source: tmp2 };
        items[1] = timestampProducer(FastImageDefault, obj4);
        obj.children = items;
        tmp4Result = React5(React4, obj);
      }
      return tmp4Result;
    };
export { GIFT_STYLE_IMG };
