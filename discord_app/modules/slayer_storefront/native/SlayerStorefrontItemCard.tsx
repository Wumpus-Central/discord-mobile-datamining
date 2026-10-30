// === Module 9499: SlayerStorefrontItemCard ===

// Module 9499 (SlayerStorefrontItemCard)
import nativeDefault from "native" /* 575 */;
import SlayerStorefrontUtils from "SlayerStorefrontUtils" /* 7398 */;
import tinycolorDefault from "tinycolor" /* 7723 */;
import noop from "module_19" /* 19 */;

require = fn;
get_ActivityIndicator = fn(17);
({ View: closure_4, StyleSheet } = get_ActivityIndicator);
const jsxProd = fn(21);
({ jsx: hasOwnProperty, jsxs: metroRequire } = jsxProd);
const createStyles = fn(5009);
let obj2 = { cardContainer: { borderRadius: nativeDefault.radii.md, overflow: "hidden", shadowColor: "#000", shadowOffset: { width: 0, height: 4 }, shadowOpacity: 0.3, shadowRadius: 8, elevation: 8 }, cardImageBackground: { width: "100%", height: "100%", alignItems: "center", justifyContent: "center" }, backgroundImage: null, cardImage: null };
let obj4 = {};
const merged = Object.assign(StyleSheet.absoluteFillObject);
obj4.width = "100%";
obj4.height = "100%";
obj2.backgroundImage = obj4;
obj2.cardImage = { width: "100%", height: "100%", resizeMode: "cover" };
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
        const obj3 = { style: cardImage.cardImageBackground, children: null };
        const obj4 = { source: null, style: null };
        let obj5 = { uri: str2.toString() };
        obj4.source = obj5;
        obj4.style = cardImage.backgroundImage;
        const items3 = [closure_5(bound(tmp7Result[8]), obj4), ];
        const obj6 = { source: null, style: null };
        const obj7 = { uri: null };
        const tmp11 = bound(tmp7Result[8]);
        obj7.uri = str.toString();
        obj6.source = obj7;
        cardImage = cardImage.cardImage;
        obj6.style = cardImage;
        tmp7Result = closure_5(bound(tmp7Result[8]), obj6);
        items3[1] = tmp7Result;
        obj3.children = items3;
        let tmp7Result3 = closure_6(closure_4, obj3);
        const tmp12 = bound(tmp7Result[8]);
      } else {
        const obj8 = { colors: tmp5, start: { x: 0, y: 0 }, end: { x: 1, y: 1 }, style: cardImage.cardImageBackground, children: null };
        const obj9 = { source: null, style: null };
        const obj10 = { uri: null };
        const tmp16 = bound(tmp7Result[9]);
        obj10.uri = str.toString();
        obj9.source = obj10;
        obj9.style = cardImage.cardImage;
        obj8.children = closure_5(bound(tmp7Result[8]), obj9);
        tmp7Result3 = closure_5(tmp16, obj8);
        const tmp17 = bound(tmp7Result[8]);
      }
      obj2.children = tmp7Result3;
      closure_5(closure_4, obj2);
    }
  }
  return tmp6;
};