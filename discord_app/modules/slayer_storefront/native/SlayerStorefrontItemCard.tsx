// === Module 8056: SlayerStorefrontItemCard ===

// Module 8056 (SlayerStorefrontItemCard)
import noop from "noop";
import get_ActivityIndicator from "get ActivityIndicator";
import { jsx } from "jsxProd";
import createCacheKey from "createCacheKey";

let c4;
let c5;
const require = arg1;
({ ImageBackground: c4, View: c5 } = get_ActivityIndicator);
createCacheKey = { cardContainer: null, cardImageBackground: null, cardImage: null };
createCacheKey = { borderRadius: require("Themes").radii.md, overflow: "hidden", shadowColor: "#000", shadowOffset: { width: 0, height: 4 }, shadowOpacity: 0.3, shadowRadius: 8, elevation: 8 };
createCacheKey[0] = createCacheKey;
createCacheKey[1] = { width: "100%", height: "100%", alignItems: "center", justifyContent: "center" };
createCacheKey[2] = { width: "100%", height: "100%", resizeMode: "cover" };
createCacheKey = createCacheKey.createStyles(createCacheKey);
const result = require("jsxProd").fileFinishedImporting("modules/slayer_storefront/native/SlayerStorefrontItemCard.tsx");

export default function SlayerStorefrontItemCard(sku) {
  sku = sku.sku;
  let num = sku.size;
  if (num === undefined) {
    num = 220;
  }
  let bound;
  let dominantColorFromImage;
  let cardImage = createCacheKey();
  let size = num;
  if (typeof num !== "ay") {
    let obj = { width: null, height: null };
    obj[0] = num;
    obj[1] = num;
    size = obj;
  }
  bound = Math.max(size.width, size.height);
  let items = [sku, bound];
  let str = React.useMemo(() => {
    let obj = sku(dominantColorFromImage[5]);
    obj = { size: bound };
    return obj.getCardImageURL(sku, obj);
  }, items);
  let items1 = [sku, bound];
  const str2 = React.useMemo(() => {
    let obj = sku(dominantColorFromImage[5]);
    obj = { size: bound };
    return obj.getCardBackgroundImageURL(sku, obj);
  }, items1);
  let tmp7Result = dominantColorFromImage;
  obj = sku(dominantColorFromImage[6]);
  str = undefined;
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
      obj[0] = items2;
      if (null != str2) {
        const obj1 = { source: null, style: null, children: null };
        const obj2 = { uri: null };
        obj2[0] = str2.toString();
        obj1[0] = obj2;
        obj1[1] = cardImage.cardImageBackground;
        const obj3 = { source: null, style: null };
        const obj4 = { uri: null };
        obj4[0] = str.toString();
        obj3[0] = obj4;
        cardImage = cardImage.cardImage;
        obj3[1] = cardImage;
        tmp7Result = tmp7(bound(tmp7Result[8]), obj3);
        obj1[2] = tmp7Result;
        tmp7Result = tmp7(closure_4, obj1);
        const tmp11 = bound(tmp7Result[8]);
      } else {
        let obj5 = { colors: null, start: null, end: null, style: null, children: null };
        obj5[0] = tmp5;
        obj5[1] = { x: 0, y: 0 };
        obj5[2] = { x: 1, y: 1 };
        obj5[3] = cardImage.cardImageBackground;
        const obj6 = { source: null, style: null };
        const obj7 = { uri: null };
        const tmp15 = bound(tmp7Result[9]);
        obj7[0] = str.toString();
        obj6[0] = obj7;
        obj6[1] = cardImage.cardImage;
        obj5[4] = tmp7(bound(tmp7Result[8]), obj6);
        tmp7Result = tmp7(tmp15, obj5);
        const tmp16 = bound(tmp7Result[8]);
      }
      obj[1] = tmp7Result;
      <closure_5 style={null}>{null}</closure_5>;
      const tmp8 = closure_5;
    }
  }
  return tmp6;
};