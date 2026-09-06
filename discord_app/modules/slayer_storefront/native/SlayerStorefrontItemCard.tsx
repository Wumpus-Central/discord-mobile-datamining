// === Module 8825: SlayerStorefrontItemCard ===

// Module 8825 (SlayerStorefrontItemCard)
import nativeDefault from "native" /* 576 */;
import SlayerStorefrontUtils from "SlayerStorefrontUtils" /* 7226 */;
import tinycolorDefault from "tinycolor" /* 7552 */;
import noop from "module_19" /* 19 */;

require = fn;
get_ActivityIndicator = fn(17);
({ ImageBackground: closure_4, View: hasOwnProperty } = get_ActivityIndicator);
const jsx = fn(21).jsx;
fn(4560);
let createStyles = { cardContainer: null, cardImageBackground: null, cardImage: null };
createStyles = { borderRadius: nativeDefault.radii.md, overflow: "hidden", shadowColor: "#000", shadowOffset: { width: 0, height: 4 }, shadowOpacity: 0.3, shadowRadius: 8, elevation: 8 };
createStyles.cardContainer = createStyles;
createStyles.cardImageBackground = { width: "100%", height: "100%", alignItems: "center", justifyContent: "center" };
createStyles.cardImage = { width: "100%", height: "100%", resizeMode: "cover" };
let closure_7 = createStyles.createStyles(createStyles);
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
    size = { width: num, height: num };
  }
  bound = Math.max(size.width, size.height);
  let items = [sku, bound];
  noop.useMemo(() => {
    const obj = { size: bound };
    return obj.getCardImageURL(sku, obj);
  }, items);
  let items1 = [sku, bound];
  const str2 = noop.useMemo(() => {
    const obj = { size: bound };
    return obj.getCardBackgroundImageURL(sku, obj);
  }, items1);
  let tmp7Result = dominantColorFromImage;
  let obj = sku(dominantColorFromImage[6]);
  let str;
  if (str != null) {
    str = str.toString();
  }
  dominantColorFromImage = obj.useDominantColorFromImage(str);
  [][0] = dominantColorFromImage;
  let tmp6 = null;
  if (null != sku) {
    tmp6 = null;
    if (null != str) {
      obj = { style: null, children: null };
      const items2 = [cardImage.cardContainer, size, sku.containerStyle];
      obj.style = items2;
      if (null != str2) {
        obj = { source: null, style: null, children: null };
        const obj1 = { uri: str2.toString() };
        obj.source = obj1;
        obj.style = cardImage.cardImageBackground;
        const obj2 = { source: null, style: null };
        const obj3 = { uri: str.toString() };
        obj2.source = obj3;
        cardImage = cardImage.cardImage;
        obj2.style = cardImage;
        tmp7Result = jsx(bound(tmp7Result[8]), { source: null, style: null });
        obj.children = tmp7Result;
        tmp7Result = <closure_4 source={null} style={null}>{null}</closure_4>;
        const tmp11 = bound(tmp7Result[8]);
      } else {
        const obj4 = { colors: tmp5, start: { x: 0, y: 0 }, end: { x: 1, y: 1 }, style: cardImage.cardImageBackground, children: null };
        let obj5 = { source: null, style: null };
        const obj6 = { uri: null };
        const tmp15 = bound(tmp7Result[9]);
        obj6.uri = str.toString();
        obj5.source = obj6;
        obj5.style = cardImage.cardImage;
        obj4.children = jsx(bound(tmp7Result[8]), { source: null, style: null });
        tmp7Result = <tmp15 colors={tmp5} start={{ x: 0, y: 0 }} end={{ x: 1, y: 1 }} style={cardImage.cardImageBackground}>{null}</tmp15>;
        const tmp16 = bound(tmp7Result[8]);
      }
      obj.children = tmp7Result;
      <closure_5 style={null}>{null}</closure_5>;
    }
  }
  return tmp6;
};