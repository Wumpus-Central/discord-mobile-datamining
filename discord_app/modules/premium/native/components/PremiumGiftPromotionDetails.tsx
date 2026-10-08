// discord_app/modules/premium/native/components/PremiumGiftPromotionDetails.tsx
import c from "../../../../../_runtime/00576_c.js";
import nativeDefault from "../../../../../discord_common/js/packages/tokens/native.tsx";
import utils_PlatformUtils from "../../../../../discord_common/js/shared/utils/PlatformUtils.tsx";
import CollectiblesItemType from "../../../../../discord_common/js/shared/shared-constants/CollectiblesItemType.tsx";
import Text_Text from "../../../../design/components/Text/native/Text.tsx";
import SKUPreview from "../../../skus/native/SKUPreview.tsx";
import _objectWithoutProperties from "../../../../../_runtime/metro/00109__objectWithoutProperties.js";
import _slicedToArray from "../../../../../_runtime/metro/00032__.js";
import noop from "../../../../../_runtime/metro/00019__.js";
import AccessibilityStore from "../../../a11y/AccessibilityStore.tsx";

require = fn;
let closure_3 = ["imageUrl", "shouldAnimate"];
let closure_4 = ["product"];
const View = fn(17).View;
const jsxProd = fn(21);
({ jsx: c10, jsxs: closure_11 } = jsxProd);
const PX_40 = nativeDefault.space.PX_40;
let createStyles = fn(5090);
let closure_13 = createStyles.createStyles(() => {
  const obj = {
    container: { flexDirection: "row", alignItems: "flex-start", gap: nativeDefault.space.PX_12 },
    image: null,
    textContainer: null,
  };
  const size = { width: 64, height: 64, borderRadius: nativeDefault.radii.xs };
  obj.image = size;
  obj.textContainer = { flex: 1, alignSelf: "center" };
  return obj;
});
let ReactCompilerGating = fn(558);
let closure_14 = ReactCompilerGating.isReactCompilerEnabled()
  ? function PremiumGiftPromotionDetailsBase(arg0) {
      const cResult = c.c(20);
      ({ style, graphic, topContent, title, titleVariant, titleColor, subtitle, subtitleVariant, subtitleColor } =
        arg0);
      const tmp4 = closure_13();
      if (cResult[0] === style) {
        if (cResult[1] === tmp4.container) {
          let tmp5 = cResult[2];
        }
        if (titleVariant == null) {
          titleVariant = "text-md/semibold";
        }
        if (titleColor == null) {
          titleColor = "text-default";
        }
        if (cResult[3] === titleVariant) {
          if (cResult[4] === titleColor) {
            if (cResult[5] === title) {
              let tmp7 = cResult[6];
            }
            if (subtitleVariant == null) {
              subtitleVariant = "text-sm/medium";
            }
            if (subtitleColor == null) {
              subtitleColor = "text-subtle";
            }
            if (cResult[7] === subtitle) {
              if (cResult[8] === subtitleVariant) {
                if (cResult[9] === subtitleColor) {
                  let tmp10 = cResult[10];
                }
                if (cResult[11] === tmp4.textContainer) {
                  if (cResult[12] === tmp7) {
                    if (cResult[13] === tmp10) {
                      if (cResult[14] === topContent) {
                        let tmp13 = cResult[15];
                      }
                      if (cResult[16] === graphic) {
                        if (cResult[17] === tmp5) {
                          if (cResult[18] === tmp13) {
                            let tmp17 = cResult[19];
                          }
                          return tmp17;
                        }
                      }
                      const obj2 = { style: tmp5, children: null };
                      const items = [graphic, tmp13];
                      obj2.children = items;
                      const tmp20 = closure_1_11(View, obj2);
                      cResult[16] = graphic;
                      cResult[17] = tmp5;
                      cResult[18] = tmp13;
                      cResult[19] = tmp20;
                      tmp17 = tmp20;
                    }
                  }
                }
                const obj3 = { style: tmp4.textContainer, children: null };
                const items1 = [topContent, tmp7, tmp10];
                obj3.children = items1;
                const tmp16 = closure_1_11(View, obj3);
                cResult[11] = tmp4.textContainer;
                cResult[12] = tmp7;
                cResult[13] = tmp10;
                cResult[14] = topContent;
                cResult[15] = tmp16;
                tmp13 = tmp16;
              }
            }
            const obj4 = { variant: subtitleVariant, color: subtitleColor, children: subtitle };
            const tmp12 = collapsed(Text_Text.Text, obj4);
            cResult[7] = subtitle;
            cResult[8] = subtitleVariant;
            cResult[9] = subtitleColor;
            cResult[10] = tmp12;
            tmp10 = tmp12;
          }
        }
        const obj5 = { variant: titleVariant, color: titleColor, children: title };
        const tmp9 = collapsed(Text_Text.Text, obj5);
        cResult[3] = titleVariant;
        cResult[4] = titleColor;
        cResult[5] = title;
        cResult[6] = tmp9;
        tmp7 = tmp9;
      }
      const items2 = [tmp4.container, style];
      cResult[0] = style;
      cResult[1] = tmp4.container;
      cResult[2] = items2;
      tmp5 = items2;
    }
  : function PremiumGiftPromotionDetailsBase(arg0) {
      ({ titleVariant, titleColor, subtitleVariant, subtitleColor } = arg0);
      ({ style, graphic, topContent, title, subtitle } = arg0);
      const tmp = closure_13();
      const obj = { style: null, children: null };
      const items = [tmp.container, style];
      obj.style = items;
      const items1 = [graphic];
      const obj2 = { style: tmp.textContainer, children: null };
      const items2 = [topContent, ,];
      if (titleVariant == null) {
        titleVariant = "text-md/semibold";
      }
      const obj3 = { variant: titleVariant, color: null, children: null };
      if (titleColor == null) {
        titleColor = "text-default";
      }
      obj3.color = titleColor;
      obj3.children = title;
      items2[1] = collapsed(Text_Text.Text, obj3);
      if (subtitleVariant == null) {
        subtitleVariant = "text-sm/medium";
      }
      const obj4 = { variant: subtitleVariant, color: null, children: null };
      if (subtitleColor == null) {
        subtitleColor = "text-subtle";
      }
      obj4.color = subtitleColor;
      obj4.children = subtitle;
      items2[2] = collapsed(Text_Text.Text, obj4);
      obj2.children = items2;
      items1[1] = closure_1_11(View, obj2);
      obj.children = items1;
      return closure_1_11(View, obj);
    };
ReactCompilerGating = fn(558);
let closure_15 = ReactCompilerGating.isReactCompilerEnabled()
  ? function AnimatedImage(arg0) {
      let tmp2 = aPNGPlayerControls;
      const cResult = require("c").c(18);
      ({ imageUrl, style, shouldAnimate } = arg0);
      _require = tmp4;
      if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
        const items = [AccessibilityStore];
        const fn = function o() {
          return useReducedMotion.useReducedMotion;
        };
        cResult[0] = items;
        cResult[1] = fn;
        tmp5 = items;
        tmp6 = fn;
      } else {
        [tmp5, tmp6] = cResult;
      }
      let obj = require("c");
      const stateFromStores = require("initialize").useStateFromStores(tmp5, tmp6);
      const tmpResult = require("initialize");
      const ref = noop.useRef(null);
      aPNGPlayerControls = require("APNGPlayer").useAPNGPlayerControls(ref);
      [first, closure_4] = noop.useState(false);
      if (cResult[2] === aPNGPlayerControls) {
        if (cResult[3] === tmp4) {
          if (cResult[4] === stateFromStores) {
            let tmp13 = cResult[5];
            let tmp14 = cResult[6];
          }
          const effect = noop.useEffect(tmp13, tmp14);
          if (cResult[7] === aPNGPlayerControls) {
            if (cResult[8] === first) {
              let tmp16 = cResult[9];
            }
            let tmp17 = stateFromStores;
            let num6 = null;
            class C {
              constructor() {
                if (closure_3) {
                  tmp = closure_2;
                  playResult = closure_2.play();
                }
                return;
              }
            }
            if (first) {
              num6 = 100;
            }
            tmp18(tmp16, num6);
            if (tmpResult4.isAndroid()) {
              if (!stateFromStores) {
                if (cResult[10] === imageUrl) {
                  if (cResult[11] === style) {
                    let tmp20 = cResult[12];
                  }
                  return tmp20;
                }
                const obj2 = { ref: null, url: null, autoplay: false, style: null };
                class C {
                  constructor() {
                    if (closure_3) {
                      tmp = closure_2;
                      playResult = closure_2.play();
                    }
                    return;
                  }
                }
                obj2.url = imageUrl;
                obj2.style = style;
                const tmp22 = closure_10(tmp(tmp2[12]).APNGPlayer, obj2);
                cResult[10] = imageUrl;
                cResult[11] = style;
                cResult[12] = tmp22;
                tmp20 = tmp22;
              }
            }
            if (cResult[13] !== imageUrl) {
              const obj4 = { uri: imageUrl };
              class C {
                constructor() {
                  if (closure_3) {
                    tmp = closure_2;
                    playResult = closure_2.play();
                  }
                  return;
                }
              }
              cResult[14] = obj4;
              let tmp23 = obj4;
            } else {
              tmp23 = cResult[14];
            }
            if (cResult[15] === style) {
            }
            tmp17 = tmp17(tmp2[15]);
            const obj5 = { style, resizeMode: "contain", source: tmp23 };
            tmp2 = closure_10(tmp17, obj5);
            cResult[15] = style;
            cResult[16] = tmp23;
            cResult[17] = tmp2;
            tmpResult4 = tmp(tmp2[13]);
          }
          class C {
            constructor() {
              if (closure_3) {
                tmp = closure_2;
                playResult = closure_2.play();
              }
              return;
            }
          }
          cResult[7] = aPNGPlayerControls;
          cResult[8] = first;
          cResult[9] = C;
          tmp16 = C;
        }
      }
      const fn2 = function b() {
        let isAndroidResult = utils_PlatformUtils.isAndroid();
        if (isAndroidResult) {
          isAndroidResult = !stateFromStores;
        }
        if (isAndroidResult) {
          if (closure_0) {
            aPNGPlayerControls.seek(0);
            closure_4(true);
          } else {
            closure_4(false);
            aPNGPlayerControls.stop();
          }
        }
      };
      const items1 = [undefined === shouldAnimate || shouldAnimate, aPNGPlayerControls, stateFromStores];
      cResult[2] = aPNGPlayerControls;
      cResult[3] = undefined === shouldAnimate || shouldAnimate;
      cResult[4] = stateFromStores;
      cResult[5] = fn2;
      cResult[6] = items1;
      tmp14 = items1;
      tmp13 = fn2;
      const tmpResult3 = require("APNGPlayer");
    }
  : function AnimatedImage(arg0) {
      ({ imageUrl, style, shouldAnimate } = arg0);
      if (shouldAnimate === undefined) {
        shouldAnimate = true;
      }
      let aPNGPlayerControls;
      first = undefined;
      closure_4 = undefined;
      const items = [AccessibilityStore];
      const stateFromStores = shouldAnimate(aPNGPlayerControls[11]).useStateFromStores(
        items,
        () => useReducedMotion.useReducedMotion,
      );
      let num = null;
      const ref = noop.useRef(null);
      let obj = shouldAnimate(aPNGPlayerControls[11]);
      aPNGPlayerControls = shouldAnimate(aPNGPlayerControls[12]).useAPNGPlayerControls(ref);
      [first, closure_4] = noop.useState(false);
      const items1 = [shouldAnimate, aPNGPlayerControls, stateFromStores];
      const effect = noop.useEffect(() => {
        let isAndroidResult = utils_PlatformUtils.isAndroid();
        if (isAndroidResult) {
          isAndroidResult = !stateFromStores;
        }
        if (isAndroidResult) {
          if (shouldAnimate) {
            aPNGPlayerControls.seek(0);
            closure_4(true);
          } else {
            closure_4(false);
            aPNGPlayerControls.stop();
          }
        }
      }, items1);
      const obj2 = shouldAnimate(aPNGPlayerControls[12]);
      const tmp9 = stateFromStores;
      if (first) {
        num = 100;
      }
      stateFromStores(aPNGPlayerControls[14])(() => {
        if (first) {
          aPNGPlayerControls.play();
        }
      }, num);
      const tmp10 = stateFromStores(aPNGPlayerControls[14]);
      if (tmpResult.isAndroid()) {
        if (!stateFromStores) {
          const obj3 = { ref, url: imageUrl, autoplay: false, style };
          let tmp13 = closure_10(tmp(tmp2[12]).APNGPlayer, obj3);
        }
        return tmp13;
      }
      tmp13 = closure_10(tmp9(tmp2[15]), { style, resizeMode: "contain", source: { uri: imageUrl } });
      const obj4 = { style, resizeMode: "contain", source: { uri: imageUrl } };
      tmpResult = shouldAnimate(aPNGPlayerControls[13]);
    };
ReactCompilerGating = fn(558);
createStyles = fn(5090);
let obj6 = { preview: null };
let size = {
  width: PX_40,
  height: PX_40,
  borderRadius: nativeDefault.radii.xs,
  backgroundColor: nativeDefault.colors.BACKGROUND_MOD_SUBTLE,
  border: null,
  overflow: "hidden",
};
let tmp3 = ReactCompilerGating.isReactCompilerEnabled()
  ? function PremiumGiftPromotionDetails(arg0) {
      const cResult = c.c(11);
      if (cResult[0] !== arg0) {
        ({ imageUrl, shouldAnimate } = arg0);
        const tmp7 = _objectWithoutProperties(arg0, closure_3);
        cResult[0] = arg0;
        cResult[1] = imageUrl;
        cResult[2] = tmp7;
        cResult[3] = shouldAnimate;
        let tmp4 = shouldAnimate;
        let tmp3 = tmp7;
        let tmp2 = imageUrl;
      } else {
        tmp2 = cResult[1];
        tmp3 = cResult[2];
        tmp4 = cResult[3];
      }
      const tmp8 = closure_13();
      if (cResult[4] === tmp2) {
        if (cResult[5] === tmp4) {
          if (cResult[6] === tmp8) {
            let tmp9 = cResult[7];
          }
          if (cResult[8] === tmp3) {
            if (cResult[9] === tmp9) {
              let tmp13 = cResult[10];
            }
            return tmp13;
          }
          const obj2 = { graphic: tmp9 };
          const merged = Object.assign(tmp3);
          const tmp19 = collapsed(closure_14, obj2);
          cResult[8] = tmp3;
          cResult[9] = tmp9;
          cResult[10] = tmp19;
          tmp13 = tmp19;
        }
      }
      let tmp10 = null != tmp2;
      if (tmp10) {
        const obj3 = { style: tmp8.image, imageUrl: tmp2, shouldAnimate: tmp4 };
        tmp10 = collapsed(closure_15, obj3);
      }
      cResult[4] = tmp2;
      cResult[5] = tmp4;
      cResult[6] = tmp8;
      cResult[7] = tmp10;
      tmp9 = tmp10;
    }
  : function PremiumGiftPromotionDetails(imageUrl) {
      imageUrl = imageUrl.imageUrl;
      const merged = Object.assign(imageUrl, Object.assign({ imageUrl: 0, shouldAnimate: 0 }));
      let tmp3Result = null != imageUrl;
      if (tmp3Result) {
        const obj = { style: tmp2.image, imageUrl, shouldAnimate: imageUrl.shouldAnimate };
        tmp3Result = collapsed(closure_15, obj);
      }
      const merged1 = Object.assign(merged);
      return collapsed(closure_14, { graphic: tmp3Result });
    };
size.border = { borderBottomColor: nativeDefault.colors.BORDER_SUBTLE, borderBottomWidth: 1 };
obj6.preview = size;
let closure_16 = createStyles.createStyles(obj6);
ReactCompilerGating = fn(558);
const obj7 = { borderBottomColor: nativeDefault.colors.BORDER_SUBTLE, borderBottomWidth: 1 };
size = fn(2);
const result = size.fileFinishedImporting("modules/premium/native/components/PremiumGiftPromotionDetails.tsx");

export default tmp3;
export const PremiumGiftPromotionCollectibleRewardDetails = ReactCompilerGating.isReactCompilerEnabled()
  ? function PremiumGiftPromotionCollectibleRewardDetails(product) {
      const cResult = c.c(14);
      if (cResult[0] !== product) {
        product = product.product;
        const tmp8 = _objectWithoutProperties(product, closure_4);
        cResult[0] = product;
        cResult[1] = product;
        cResult[2] = tmp8;
        let tmp5 = tmp8;
        let first = product;
      } else {
        first = cResult[1];
        tmp5 = cResult[2];
      }
      const tmp9 = closure_16();
      let tmp10;
      if (null != first) {
        if (0 !== first.items.length) {
          if (first.type !== CollectiblesItemType.CollectiblesItemType.BUNDLE) {
            if (cResult[6] !== first.items[0]) {
              const obj3 = { type: "single", item: first.items[0] };
              first = first.items[0];
              cResult[6] = first;
              cResult[7] = obj3;
            }
          } else {
            if (cResult[3] === first.items) {
              if (cResult[4] === first.previewAssets) {
                let tmp11 = cResult[5];
              }
              tmp10 = tmp11;
            }
            const obj4 = { type: "bundle", items: null, previewAssets: null };
            ({ items: obj2.items, previewAssets: obj2.previewAssets } = first);
            cResult[3] = first.items;
            cResult[4] = first.previewAssets;
            cResult[5] = obj4;
            tmp11 = obj4;
          }
        }
      }
      if (cResult[8] === tmp10) {
        if (cResult[9] === tmp9) {
          let tmp14 = cResult[10];
        }
        if (cResult[11] === tmp5) {
          if (cResult[12] === tmp14) {
            let tmp23 = cResult[13];
          }
          return tmp23;
        }
        const obj5 = { graphic: tmp14 };
        const merged = Object.assign(tmp5);
        const tmp29 = collapsed(closure_14, obj5);
        cResult[11] = tmp5;
        cResult[12] = tmp14;
        cResult[13] = tmp29;
        tmp23 = tmp29;
      }
      if (null == tmp10) {
        cResult[8] = tmp10;
        cResult[9] = tmp9;
        cResult[10] = tmp15;
        tmp14 = tmp15;
      } else {
        const obj6 = { style: tmp9.preview, children: null };
        let obj11 = { collectiblesItemData: tmp10, size: null };
        if ("bundle" === tmp10.type) {
          const _Math2 = Math;
          let rounded = Math.floor(1.2 * PX_40);
        } else {
          rounded = PX_40;
          if (tmp10.item.type === CollectiblesItemType.CollectiblesItemType.AVATAR_DECORATION) {
            const _Math = Math;
            rounded = Math.floor(1.5 * PX_40);
          }
        }
        obj11.size = rounded;
        obj11 = collapsed(SKUPreview.CollectiblesPreview, obj11);
        obj6.children = obj11;
        collapsed(View, obj6);
      }
    }
  : function PremiumGiftPromotionCollectibleRewardDetails(product) {
      product = product.product;
      const require = product;
      const merged = Object.assign(product, Object.assign({ product: 0 }));
      const items = [product];
      const memo = noop.useMemo(() => {
        if (null != product) {
          if (0 !== product.items.length) {
            if (product.type === CollectiblesItemType.CollectiblesItemType.BUNDLE) {
              ({ items: obj2.items, previewAssets: obj2.previewAssets } = product);
              let obj = { type: "bundle", items: null, previewAssets: null };
              const obj3 = { type: "bundle", items: null, previewAssets: null };
            } else {
              obj = { type: "single", item: product.items[0] };
            }
            return obj;
          }
        }
      }, items);
      if (null == memo) {
        const obj2 = { graphic: tmp6 };
        const merged1 = Object.assign(merged);
        return closure_10(tmp5, obj2);
      } else {
        let obj = { style: tmp2.preview, children: null };
        let obj3 = { collectiblesItemData: memo, size: null };
        if ("bundle" === memo.type) {
          const _Math2 = Math;
          let rounded = Math.floor(1.2 * PX_40);
        } else {
          rounded = PX_40;
          if (memo.item.type === tmp8(1992).CollectiblesItemType.AVATAR_DECORATION) {
            const _Math = Math;
            rounded = Math.floor(1.5 * PX_40);
          }
        }
        obj3.size = rounded;
        obj3 = closure_10(SKUPreview.CollectiblesPreview, obj3);
        obj.children = obj3;
        closure_10(View, obj);
        tmp8 = require;
      }
      tmp2 = closure_16();
    };
