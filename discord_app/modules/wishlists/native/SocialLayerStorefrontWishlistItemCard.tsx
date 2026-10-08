// discord_app/modules/wishlists/native/SocialLayerStorefrontWishlistItemCard.tsx
import nativeDefault from "../../../../discord_common/js/packages/tokens/native.tsx";
import FastImageDefault from "../../../components_native/common/FastImage.tsx";
import WishlistItemCardBaseDefault from "WishlistItemCardBase.tsx";
import SlayerStorefrontItemCardDefault from "../../slayer_storefront/native/SlayerStorefrontItemCard.tsx";
import _objectWithoutProperties from "../../../../_runtime/metro/00109__objectWithoutProperties.js";
import noop from "../../../../_runtime/metro/00019__.js";
import ApplicationStore from "../../applications/ApplicationStore.tsx";
import SentGiftsStore from "../SentGiftsStore.tsx";

const require = globalThis.__r;

const require = fn;
let closure_3 = ["sku", "isOwned", "source", "wishlistOwnerId", "size"];
const jsxProd = fn(21);
({ jsx: closure_8, Fragment: closure_9, jsxs: c10 } = jsxProd);
const createStyles = fn(5090);
let obj2 = { applicationIcon: null, nestedCard: null };
let size = {
  position: "absolute",
  top: nativeDefault.space.PX_8,
  left: nativeDefault.space.PX_8,
  width: 24,
  height: 24,
  borderRadius: nativeDefault.radii.sm,
  zIndex: 1,
};
obj2.applicationIcon = size;
let obj3 = {
  shadowColor: "Array",
  shadowOffset: { width: 0, height: 0 },
  shadowOpacity: 0,
  shadowRadius: 0,
  elevation: "visible",
  overflow: null,
  borderRadius: nativeDefault.radii.none,
};
obj2.nestedCard = obj3;
let closure_11 = createStyles.createStyles(obj2);
const ReactCompilerGating = fn(558);
size = fn(2);
const result = size.fileFinishedImporting("modules/wishlists/native/SocialLayerStorefrontWishlistItemCard.tsx");

export default ReactCompilerGating.isReactCompilerEnabled()
  ? function SocialLayerStorefrontWishlistItemCard(sku) {
      const cResult = require("c").c(31);
      if (cResult[0] !== sku) {
        sku = sku.sku;
        importDefault = sku;
        ({ isOwned, source, wishlistOwnerId } = sku);
        dependencyMap = wishlistOwnerId;
        const size = sku.size;
        _require = size;
        const tmp12 = _objectWithoutProperties(sku, applicationId);
        cResult[0] = sku;
        cResult[1] = tmp12;
        class O {
          constructor() {
            hasSentGiftResult = null != closure_2;
            if (hasSentGiftResult) {
              tmp3 = closure_7;
              tmp4 = closure_1;
              hasSentGiftResult = closure_7.hasSentGift(closure_1.id, tmp);
            }
            return hasSentGiftResult;
          }
        }
        cResult[2] = size;
        cResult[3] = sku;
        cResult[4] = source;
        cResult[5] = isOwned;
        cResult[6] = wishlistOwnerId;
        let tmp8 = isOwned;
        let tmp7 = source;
        let tmp4 = tmp12;
      } else {
        tmp4 = cResult[1];
        _require = cResult[2];
        importDefault = cResult[3];
        tmp7 = cResult[4];
        tmp8 = cResult[5];
        dependencyMap = cResult[6];
      }
      if (cResult[7] === Symbol.for("react.memo_cache_sentinel")) {
        const items = [SentGiftsStore];
        cResult[7] = items;
        let tmp14 = items;
      } else {
        tmp14 = cResult[7];
      }
      if (cResult[8] === tmp6.id) {
        if (cResult[9] === wishlistOwnerId) {
          let tmp16 = cResult[10];
          let tmp17 = cResult[11];
        }
        applicationId = tmp6.applicationId;
        const _Symbol = Symbol;
        const stateFromStores = tmp(504).useStateFromStores(tmp14, tmp16, tmp17);
        if (cResult[12] === Symbol.for("react.memo_cache_sentinel")) {
          const items1 = [ApplicationStore];
          cResult[12] = items1;
          let tmp19 = items1;
        } else {
          tmp19 = cResult[12];
        }
        if (cResult[13] !== applicationId) {
          const fn = function k() {
            let application = null;
            if (null != applicationId) {
              application = ApplicationStore.getApplication(tmp);
            }
            return application;
          };
          const items2 = [applicationId];
          cResult[13] = applicationId;
          cResult[14] = fn;
          cResult[15] = items2;
          let tmp22 = items2;
          let tmp21 = fn;
        } else {
          tmp21 = cResult[14];
          tmp22 = cResult[15];
        }
        const tmpResult = tmp(504);
        const stateFromStores1 = tmp(504).useStateFromStores(tmp19, tmp21, tmp22);
        if (cResult[16] !== stateFromStores1) {
          let iconSource;
          if (stateFromStores1 != null) {
            iconSource = stateFromStores1.getIconSource(24);
          }
          cResult[16] = stateFromStores1;
          cResult[17] = iconSource;
          let tmp23 = iconSource;
        } else {
          tmp23 = cResult[17];
        }
        _objectWithoutProperties = tmp23;
        const tmp27 = closure_11();
        class O {
          constructor() {
            hasSentGiftResult = null != closure_2;
            if (hasSentGiftResult) {
              tmp3 = closure_7;
              tmp4 = closure_1;
              hasSentGiftResult = closure_7.hasSentGift(closure_1.id, tmp);
            }
            return hasSentGiftResult;
          }
        }
        if (cResult[18] === tmp23) {
          if (cResult[19] === tmp5) {
            if (cResult[20] === tmp6) {
              if (cResult[21] === tmp27.applicationIcon) {
                if (cResult[22] === tmp27.nestedCard) {
                  let tmp28 = cResult[23];
                }
                if (!tmp13) {
                  if (!stateFromStores) {
                    let OWNED = tmp4.overlay;
                  }
                  if (cResult[24] === tmp4) {
                    if (cResult[25] === tmp28) {
                      if (cResult[26] === tmp5) {
                        if (cResult[27] === tmp6.name) {
                          if (cResult[28] === tmp7) {
                            if (cResult[29] === OWNED) {
                              let tmp29 = cResult[30];
                            }
                            return tmp29;
                          }
                        }
                      }
                    }
                  }
                  let obj2 = { accessibilityLabel: tmp6.name, renderPreview: tmp28, source: tmp7, size: tmp5 };
                  const merged = Object.assign(tmp4);
                  obj2.overlay = OWNED;
                  const tmp36 = closure_8(WishlistItemCardBaseDefault, obj2);
                  class O {
                    constructor() {
                      hasSentGiftResult = null != closure_2;
                      if (hasSentGiftResult) {
                        tmp3 = closure_7;
                        tmp4 = closure_1;
                        hasSentGiftResult = closure_7.hasSentGift(closure_1.id, tmp);
                      }
                      return hasSentGiftResult;
                    }
                  }
                  cResult[24] = tmp4;
                  cResult[25] = tmp28;
                  cResult[26] = tmp5;
                  cResult[27] = tmp6.name;
                  cResult[28] = tmp7;
                  cResult[29] = OWNED;
                  cResult[30] = tmp36;
                  tmp29 = tmp36;
                }
                OWNED = tmp(8946).WishlistItemCardOverlay.OWNED;
              }
            }
          }
        }
        const fn2 = function j() {
          const children = [
            closure_2_8(SlayerStorefrontItemCardDefault, { sku, size, containerStyle: nestedCard.nestedCard }),
          ];
          let tmp3Result = null != closure_4;
          if (tmp3Result) {
            const obj2 = { source: tmp7, style: nestedCard.applicationIcon };
            tmp3Result = closure_2_8(FastImageDefault, obj2);
          }
          children[1] = tmp3Result;
          return collapsed(options, { children });
        };
        cResult[18] = tmp23;
        cResult[19] = tmp5;
        cResult[20] = tmp6;
        cResult[21] = tmp27.applicationIcon;
        cResult[22] = tmp27.nestedCard;
        cResult[23] = fn2;
        tmp28 = fn2;
        const tmpResult2 = tmp(504);
      }
      class O {
        constructor() {
          hasSentGiftResult = null != closure_2;
          if (hasSentGiftResult) {
            tmp3 = closure_7;
            tmp4 = closure_1;
            hasSentGiftResult = closure_7.hasSentGift(closure_1.id, tmp);
          }
          return hasSentGiftResult;
        }
      }
      const items3 = [tmp6.id, wishlistOwnerId];
      cResult[8] = tmp6.id;
      cResult[9] = wishlistOwnerId;
      cResult[10] = O;
      cResult[11] = items3;
      tmp17 = items3;
      tmp16 = O;
      const obj = require("c");
      tmp13 = undefined !== tmp8 && tmp8;
    }
  : function SocialLayerStorefrontWishlistItemCard(sku) {
      sku = sku.sku;
      let flag = sku.isOwned;
      if (flag === undefined) {
        flag = false;
      }
      const wishlistOwnerId = sku.wishlistOwnerId;
      const size = sku.size;
      const merged = Object.assign(sku, Object.assign({ sku: 0, isOwned: 0, source: 0, wishlistOwnerId: 0, size: 0 }));
      let memo;
      let nestedCard;
      const items = [SentGiftsStore];
      const items1 = [sku.id, wishlistOwnerId];
      const applicationId = sku.applicationId;
      const stateFromStores = sku(size[9]).useStateFromStores(
        items,
        () => {
          let hasSentGiftResult = null != wishlistOwnerId;
          if (hasSentGiftResult) {
            hasSentGiftResult = SentGiftsStore.hasSentGift(sku.id, tmp);
          }
          return hasSentGiftResult;
        },
        items1,
      );
      const obj = sku(size[9]);
      const tmp2 = sku;
      const tmp3 = size;
      const items2 = [nestedCard];
      const items3 = [applicationId];
      const stateFromStores1 = sku(size[9]).useStateFromStores(
        items2,
        () => {
          let application = null;
          if (null != applicationId) {
            application = ApplicationStore.getApplication(tmp);
          }
          return application;
        },
        items3,
      );
      const items4 = [stateFromStores1];
      memo = memo.useMemo(() => {
        let iconSource;
        if (stateFromStores1 != null) {
          iconSource = stateFromStores1.getIconSource(24);
        }
        return iconSource;
      }, items4);
      const tmp7 = closure_11();
      nestedCard = tmp7;
      const items5 = [sku, size, memo, ,];
      ({ applicationIcon: arr6[3], nestedCard: arr6[4] } = tmp7);
      const callback = memo.useCallback(() => {
        const children = [
          closure_2_8(SlayerStorefrontItemCardDefault, { sku, size, containerStyle: nestedCard.nestedCard }),
        ];
        let tmp3Result = null != memo;
        if (tmp3Result) {
          const obj2 = { source: tmp7, style: nestedCard.applicationIcon };
          tmp3Result = closure_2_8(FastImageDefault, obj2);
        }
        children[1] = tmp3Result;
        return collapsed(options, { children });
      }, items5);
      const obj3 = { accessibilityLabel: sku.name, renderPreview: callback, source: sku.source, size };
      let obj2 = sku(size[9]);
      const merged1 = Object.assign(merged);
      if (!flag) {
        if (!stateFromStores) {
          let OWNED = merged.overlay;
        }
        obj3.overlay = OWNED;
        return closure_8(tmp10, obj3);
      }
      OWNED = tmp2(tmp3[12]).WishlistItemCardOverlay.OWNED;
      tmp10 = wishlistOwnerId(size[12]);
    };
