// === Module 8481: SlayerStorefrontItemCard ===

// Module 8481 (SlayerStorefrontItemCard)
import c from "c" /* 576 */;
import nativeDefault from "native" /* 587 */;
import LinearGradientDefault from "LinearGradient" /* 5605 */;
import FastImageDefault from "FastImage" /* 5974 */;
import SlayerStorefrontUtils from "SlayerStorefrontUtils" /* 6727 */;
import tinycolorDefault from "tinycolor" /* 7063 */;
import DominantColorUtils from "DominantColorUtils" /* 8482 */;
import noop from "module_19" /* 19 */;

require = fn;
get_ActivityIndicator = fn(17);
({ ImageBackground: closure_4, View: hasOwnProperty } = get_ActivityIndicator);
const jsx = fn(21).jsx;
const createStyles = fn(4890);
let obj2 = { cardContainer: { borderRadius: nativeDefault.radii.md, overflow: "hidden", shadowColor: "#000", shadowOffset: { width: 0, height: 4 }, shadowOpacity: 0.3, shadowRadius: 8, elevation: 8 }, cardImageBackground: { width: "100%", height: "100%", alignItems: "center", justifyContent: "center" }, cardImage: { width: "100%", height: "100%", resizeMode: "cover" } };
let closure_7 = createStyles.createStyles(obj2);
const ReactCompilerGating = fn(558);
let obj3 = { borderRadius: nativeDefault.radii.md, overflow: "hidden", shadowColor: "#000", shadowOffset: { width: 0, height: 4 }, shadowOpacity: 0.3, shadowRadius: 8, elevation: 8 };
let size = fn(2);
const result = size.fileFinishedImporting("modules/slayer_storefront/native/SlayerStorefrontItemCard.tsx");

export default ReactCompilerGating.isReactCompilerEnabled() ? ((arg0) => {
  let tmp2 = dependencyMap;
  const cResult = c.c(31);
  ({ sku, size, containerStyle } = arg0);
  let num = 220;
  if (undefined !== size) {
    num = size;
  }
  let cardImageBackground = closure_7();
  if (cResult[0] !== num) {
    let tmp4 = num;
    if (typeof num !== "object") {
      const size1 = { width: num, height: num };
      tmp4 = size1;
    }
    cResult[0] = num;
    cResult[1] = tmp4;
    let size2 = tmp4;
  } else {
    size2 = cResult[1];
  }
  const bound = Math.max(size2.width, size2.height);
  if (cResult[2] === bound) {
    if (cResult[3] === sku) {
      let str = cResult[4];
    }
    if (cResult[5] === bound) {
      if (cResult[6] === sku) {
        let str2 = cResult[7];
      }
      if (cResult[8] !== str) {
        let str1;
        if (str != null) {
          str1 = str.toString();
        }
        cResult[8] = str;
        cResult[9] = str1;
        let tmp8 = str1;
      } else {
        tmp8 = cResult[9];
      }
      const dominantColorFromImage = DominantColorUtils.useDominantColorFromImage(tmp8);
      if (null != dominantColorFromImage) {
        if (cResult[11] !== dominantColorFromImage) {
          const obj6 = tinycolorDefault(dominantColorFromImage);
          const brightenResult = tinycolorDefault(dominantColorFromImage).brighten(20);
          const saturateResult = tinycolorDefault(dominantColorFromImage).brighten(20).saturate(30);
          const toRgbStringResult = tinycolorDefault(dominantColorFromImage).brighten(20).saturate(30).setAlpha(0.8).toRgbString();
          cResult[11] = dominantColorFromImage;
          cResult[12] = toRgbStringResult;
          let tmp14 = toRgbStringResult;
          const setAlphaResult = tinycolorDefault(dominantColorFromImage).brighten(20).saturate(30).setAlpha(0.8);
        } else {
          tmp14 = cResult[12];
        }
        if (cResult[13] !== dominantColorFromImage) {
          const obj10 = tinycolorDefault(dominantColorFromImage);
          const saturateResult1 = tinycolorDefault(dominantColorFromImage).saturate(50);
          const toRgbStringResult1 = tinycolorDefault(dominantColorFromImage).saturate(50).setAlpha(0.9).toRgbString();
          cResult[13] = dominantColorFromImage;
          cResult[14] = toRgbStringResult1;
          let tmp17 = toRgbStringResult1;
          const setAlphaResult1 = tinycolorDefault(dominantColorFromImage).saturate(50).setAlpha(0.9);
        } else {
          tmp17 = cResult[14];
        }
        if (cResult[15] === tmp17) {
        }
        const items = [tmp14, tmp17];
        cResult[15] = tmp17;
        cResult[16] = tmp14;
        cResult[17] = items;
      } else {
        const _Symbol = Symbol;
        if (cResult[10] === Symbol.for("react.memo_cache_sentinel")) {
          const items1 = [nativeDefault.colors.BACKGROUND_SURFACE_HIGH, nativeDefault.colors.BACKGROUND_BASE_LOWEST];
          cResult[10] = items1;
          let cardImage = items1;
        } else {
          cardImage = cResult[10];
        }
        let tmp22 = null;
        if (null != sku) {
          tmp22 = null;
          if (null != str) {
            if (cResult[18] === containerStyle) {
              if (cResult[19] === size2) {
                if (cResult[20] === cardImageBackground.cardContainer) {
                  let tmp23 = cResult[21];
                }
                if (cResult[22] === str2) {
                  if (cResult[23] === str) {
                    if (cResult[24] === cardImage) {
                      if (cResult[25] === cardImageBackground.cardImage) {
                        if (cResult[26] === cardImageBackground.cardImageBackground) {
                          if (cResult[28] === tmp23) {
                          }
                          const obj2 = { style: tmp23, children: cResult[27] };
                          const tmp34 = <hasOwnProperty style={tmp23}>{cResult[27]}</hasOwnProperty>;
                          cResult[28] = tmp23;
                          cResult[29] = cResult[27];
                          cResult[30] = tmp34;
                        }
                      }
                    }
                  }
                }
                if (null != str2) {
                  const obj3 = { source: null, style: null, children: null };
                  const obj4 = { uri: str2.toString() };
                  obj3.source = obj4;
                  obj3.style = cardImageBackground.cardImageBackground;
                  const obj5 = { source: null, style: null };
                  const obj7 = { uri: str.toString() };
                  obj5.source = obj7;
                  obj5.style = cardImageBackground.cardImage;
                  tmp2 = jsx(FastImageDefault, { source: null, style: null });
                  obj3.children = tmp2;
                  let tmp29 = <React4 source={null} style={null}>{null}</React4>;
                } else {
                  const obj8 = { colors: cardImage, start: { x: 0, y: 0 }, end: { x: 1, y: 1 }, style: cardImageBackground.cardImageBackground, children: null };
                  const obj9 = { source: null, style: null };
                  const obj11 = { uri: null };
                  obj11.uri = str.toString();
                  obj9.source = obj11;
                  obj9.style = cardImageBackground.cardImage;
                  obj8.children = jsx(FastImageDefault, { source: null, style: null });
                  tmp29 = <tmp38 colors={cardImage} start={{ x: 0, y: 0 }} end={{ x: 1, y: 1 }} style={cardImageBackground.cardImageBackground}>{null}</tmp38>;
                }
                cResult[22] = str2;
                cResult[23] = str;
                cResult[24] = cardImage;
                cardImage = cardImageBackground.cardImage;
                cResult[25] = cardImage;
                cardImageBackground = cardImageBackground.cardImageBackground;
                cResult[26] = cardImageBackground;
                cResult[27] = tmp29;
              }
            }
            const items2 = [cardImageBackground.cardContainer, size2, containerStyle];
            cResult[18] = containerStyle;
            cResult[19] = size2;
            cResult[20] = cardImageBackground.cardContainer;
            cResult[21] = items2;
            tmp23 = items2;
          }
        }
        return tmp22;
      }
      const tmpResult = DominantColorUtils;
    }
    const obj12 = { size: bound };
    const cardBackgroundImageURL = SlayerStorefrontUtils.getCardBackgroundImageURL(sku, obj12);
    cResult[5] = bound;
    cResult[6] = sku;
    cResult[7] = cardBackgroundImageURL;
    str2 = cardBackgroundImageURL;
    const tmpResult3 = SlayerStorefrontUtils;
  }
  const cardImageURL = SlayerStorefrontUtils.getCardImageURL(sku, { size: bound });
  cResult[2] = bound;
  cResult[3] = sku;
  cResult[4] = cardImageURL;
  str = cardImageURL;
  const tmpResult4 = SlayerStorefrontUtils;
}) : ((sku) => {
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
  dominantColorFromImage = sku(dominantColorFromImage[8]).useDominantColorFromImage(str1);
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
        tmp7Result = jsx(bound(tmp7Result[10]), { source: null, style: null });
        obj3.children = tmp7Result;
        let tmp7Result3 = <closure_4 source={null} style={null}>{null}</closure_4>;
        const tmp11 = bound(tmp7Result[10]);
      } else {
        const obj7 = { colors: tmp5, start: { x: 0, y: 0 }, end: { x: 1, y: 1 }, style: cardImage.cardImageBackground, children: null };
        const obj8 = { source: null, style: null };
        const obj9 = { uri: null };
        const tmp15 = bound(tmp7Result[11]);
        obj9.uri = str.toString();
        obj8.source = obj9;
        obj8.style = cardImage.cardImage;
        obj7.children = jsx(bound(tmp7Result[10]), { source: null, style: null });
        tmp7Result3 = <tmp15 colors={tmp5} start={{ x: 0, y: 0 }} end={{ x: 1, y: 1 }} style={cardImage.cardImageBackground}>{null}</tmp15>;
        const tmp16 = bound(tmp7Result[10]);
      }
      obj2.children = tmp7Result3;
      <closure_5 style={null}>{null}</closure_5>;
    }
  }
  return tmp6;
});