// discord_app/modules/slayer_storefront/native/SlayerStorefrontItemCard.tsx
import nativeDefault from "../../../../discord_common/js/packages/tokens/native.tsx";
import SlayerStorefrontUtils from "../SlayerStorefrontUtils.tsx";
import tinycolorDefault from "../../../../_runtime/07655_tinycolor.js";
import noop from "../../../../_runtime/metro/00019__.js";

require = fn;
get_ActivityIndicator = fn(17);
({ ImageBackground: closure_4, View: hasOwnProperty } = get_ActivityIndicator);
const jsx = fn(21).jsx;
const createStyles = fn(4636);
let obj2 = {
  cardContainer: {
    borderRadius: nativeDefault.radii.md,
    overflow: "hidden",
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.3,
    shadowRadius: 8,
    elevation: 8,
  },
  cardImageBackground: { width: "100%", height: "100%", alignItems: "center", justifyContent: "center" },
  cardImage: { width: "100%", height: "100%", resizeMode: "cover" },
};
let closure_7 = createStyles.createStyles(obj2);
let size = fn(2);
const result = size.fileFinishedImporting("modules/slayer_storefront/native/SlayerStorefrontItemCard.tsx");

export default function SlayerStorefrontItemCard(sku) {
  sku = sku.sku;
  let num = sku.size;
  if (num === undefined) {
    num = 220;
  }
  let bound;
  let dominantColorFromImage;
  let cardImage = closure_7();
  let size = num;
  if (typeof num !== "object") {
    const size1 = { width: num, height: num };
    size = size1;
  }
  bound = Math.max(size.width, size.height);
  let items = [sku, bound];
  const str = noop.useMemo(() => SlayerStorefrontUtils.getCardImageURL(sku, { size: bound }), items);
  let items1 = [sku, bound];
  const str2 = noop.useMemo(() => SlayerStorefrontUtils.getCardBackgroundImageURL(sku, { size: bound }), items1);
  let tmp7Result = dominantColorFromImage;
  let str1;
  if (str != null) {
    str1 = str.toString();
  }
  dominantColorFromImage = sku(dominantColorFromImage[6]).useDominantColorFromImage(str1);
  [][0] = dominantColorFromImage;
  let tmp6 = null;
  if (null != sku) {
    tmp6 = null;
    if (null != str) {
      const obj2 = { style: null, children: null };
      const items2 = [cardImage.cardContainer, size, sku.containerStyle];
      obj2.style = items2;
      if (null != str2) {
        const obj3 = { source: null, style: null, children: null };
        const obj4 = { uri: str2.toString() };
        obj3.source = obj4;
        obj3.style = cardImage.cardImageBackground;
        let obj5 = { source: null, style: null };
        const obj6 = { uri: str.toString() };
        obj5.source = obj6;
        cardImage = cardImage.cardImage;
        obj5.style = cardImage;
        tmp7Result = jsx(bound(tmp7Result[8]), { source: null, style: null });
        obj3.children = tmp7Result;
        let tmp7Result3 = (
          <closure_4 source={null} style={null}>
            {null}
          </closure_4>
        );
        const tmp11 = bound(tmp7Result[8]);
      } else {
        const obj7 = {
          colors: tmp5,
          start: { x: 0, y: 0 },
          end: { x: 1, y: 1 },
          style: cardImage.cardImageBackground,
          children: null,
        };
        const obj8 = { source: null, style: null };
        const obj9 = { uri: null };
        const tmp15 = bound(tmp7Result[9]);
        obj9.uri = str.toString();
        obj8.source = obj9;
        obj8.style = cardImage.cardImage;
        obj7.children = jsx(bound(tmp7Result[8]), { source: null, style: null });
        tmp7Result3 = (
          <tmp15 colors={tmp5} start={{ x: 0, y: 0 }} end={{ x: 1, y: 1 }} style={cardImage.cardImageBackground}>
            {null}
          </tmp15>
        );
        const tmp16 = bound(tmp7Result[8]);
      }
      obj2.children = tmp7Result3;
      <closure_5 style={null}>{null}</closure_5>;
    }
  }
  return tmp6;
}
