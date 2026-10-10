// discord_app/modules/slayer_storefront/native/SlayerStorefrontItemCard.tsx
import c from "../../../../_runtime/00576_c.js";
import nativeDefault from "../../../../discord_common/js/packages/tokens/native.tsx";
import LinearGradientDefault from "../../../../_runtime/05391_LinearGradient.js";
import FastImageDefault from "../../../components_native/common/FastImage.tsx";
import SlayerStorefrontUtils from "../SlayerStorefrontUtils.tsx";
import tinycolorDefault from "../../../../_runtime/07273_tinycolor.js";
import DominantColorUtils from "../../voice_panel/native/card/DominantColorUtils.tsx";
import noop from "../../../../_runtime/metro/00019__.js";

require = fn;
get_ActivityIndicator = fn(17);
({ View: closure_4, StyleSheet } = get_ActivityIndicator);
const jsxProd = fn(21);
({ jsx: hasOwnProperty, jsxs: metroRequire } = jsxProd);
const createStyles = fn(5092);
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
  backgroundImage: null,
  cardImage: null,
};
let obj4 = {};
const merged = Object.assign(StyleSheet.absoluteFillObject);
obj4.width = "100%";
obj4.height = "100%";
obj2.backgroundImage = obj4;
obj2.cardImage = { width: "100%", height: "100%", resizeMode: "cover" };
let closure_7 = createStyles.createStyles(obj2);
const ReactCompilerGating = fn(558);
let obj3 = {
  borderRadius: nativeDefault.radii.md,
  overflow: "hidden",
  shadowColor: "#000",
  shadowOffset: { width: 0, height: 4 },
  shadowOpacity: 0.3,
  shadowRadius: 8,
  elevation: 8,
};
let size = fn(2);
const result = size.fileFinishedImporting("modules/slayer_storefront/native/SlayerStorefrontItemCard.tsx");

export default ReactCompilerGating.isReactCompilerEnabled()
  ? function SlayerStorefrontItemCard(arg0) {
      let tmp2 = dependencyMap;
      const cResult = c.c(32);
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
              const toRgbStringResult = tinycolorDefault(dominantColorFromImage)
                .brighten(20)
                .saturate(30)
                .setAlpha(0.8)
                .toRgbString();
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
              const toRgbStringResult1 = tinycolorDefault(dominantColorFromImage)
                .saturate(50)
                .setAlpha(0.9)
                .toRgbString();
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
              const items1 = [
                nativeDefault.colors.BACKGROUND_SURFACE_HIGH,
                nativeDefault.colors.BACKGROUND_BASE_LOWEST,
              ];
              cResult[10] = items1;
              cardImage = items1;
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
                          if (cResult[25] === cardImageBackground.backgroundImage) {
                            if (cResult[26] === cardImageBackground.cardImage) {
                              if (cResult[27] === cardImageBackground.cardImageBackground) {
                                if (cResult[29] === tmp23) {
                                }
                                const obj2 = { style: tmp23, children: cResult[28] };
                                const tmp36 = hasOwnProperty(React4, obj2);
                                cResult[29] = tmp23;
                                cResult[30] = cResult[28];
                                cResult[31] = tmp36;
                              }
                            }
                          }
                        }
                      }
                    }
                    if (null != str2) {
                      const obj3 = { style: cardImageBackground.cardImageBackground, children: null };
                      const obj4 = { source: null, style: null };
                      const obj5 = { uri: str2.toString() };
                      obj4.source = obj5;
                      obj4.style = cardImageBackground.backgroundImage;
                      const items2 = [hasOwnProperty(FastImageDefault, obj4)];
                      const obj7 = { source: null, style: null };
                      const obj8 = { uri: null };
                      obj8.uri = str.toString();
                      obj7.source = obj8;
                      obj7.style = cardImageBackground.cardImage;
                      tmp2 = hasOwnProperty(FastImageDefault, obj7);
                      items2[1] = tmp2;
                      obj3.children = items2;
                      let tmp31 = timestampProducer(React4, obj3);
                    } else {
                      const obj9 = {
                        colors: cardImage,
                        start: { x: 0, y: 0 },
                        end: { x: 1, y: 1 },
                        style: cardImageBackground.cardImageBackground,
                        children: null,
                      };
                      const obj11 = { source: null, style: null };
                      const obj12 = { uri: null };
                      const tmp40 = LinearGradientDefault;
                      obj12.uri = str.toString();
                      obj11.source = obj12;
                      obj11.style = cardImageBackground.cardImage;
                      obj9.children = hasOwnProperty(FastImageDefault, obj11);
                      tmp31 = hasOwnProperty(tmp40, obj9);
                    }
                    cResult[22] = str2;
                    cResult[23] = str;
                    cResult[24] = cardImage;
                    ({ backgroundImage: tmp3[25], cardImage } = cardImageBackground);
                    cResult[26] = cardImage;
                    cardImageBackground = cardImageBackground.cardImageBackground;
                    cResult[27] = cardImageBackground;
                    cResult[28] = tmp31;
                  }
                }
                const items3 = [cardImageBackground.cardContainer, size2, containerStyle];
                cResult[18] = containerStyle;
                cResult[19] = size2;
                cResult[20] = cardImageBackground.cardContainer;
                cResult[21] = items3;
                tmp23 = items3;
              }
            }
            return tmp22;
          }
          const tmpResult = DominantColorUtils;
        }
        const obj13 = { size: bound };
        const cardBackgroundImageURL = SlayerStorefrontUtils.getCardBackgroundImageURL(sku, obj13);
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
    }
  : function SlayerStorefrontItemCard(sku) {
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
            const obj3 = { style: cardImage.cardImageBackground, children: null };
            const obj4 = { source: null, style: null };
            let obj5 = { uri: str2.toString() };
            obj4.source = obj5;
            obj4.style = cardImage.backgroundImage;
            const items3 = [closure_5(bound(tmp7Result[10]), obj4)];
            const obj6 = { source: null, style: null };
            const obj7 = { uri: null };
            const tmp11 = bound(tmp7Result[10]);
            obj7.uri = str.toString();
            obj6.source = obj7;
            cardImage = cardImage.cardImage;
            obj6.style = cardImage;
            tmp7Result = closure_5(bound(tmp7Result[10]), obj6);
            items3[1] = tmp7Result;
            obj3.children = items3;
            let tmp7Result3 = closure_6(closure_4, obj3);
            const tmp12 = bound(tmp7Result[10]);
          } else {
            const obj8 = {
              colors: tmp5,
              start: { x: 0, y: 0 },
              end: { x: 1, y: 1 },
              style: cardImage.cardImageBackground,
              children: null,
            };
            const obj9 = { source: null, style: null };
            const obj10 = { uri: null };
            const tmp16 = bound(tmp7Result[11]);
            obj10.uri = str.toString();
            obj9.source = obj10;
            obj9.style = cardImage.cardImage;
            obj8.children = closure_5(bound(tmp7Result[10]), obj9);
            tmp7Result3 = closure_5(tmp16, obj8);
            const tmp17 = bound(tmp7Result[10]);
          }
          obj2.children = tmp7Result3;
          closure_5(closure_4, obj2);
        }
      }
      return tmp6;
    };
