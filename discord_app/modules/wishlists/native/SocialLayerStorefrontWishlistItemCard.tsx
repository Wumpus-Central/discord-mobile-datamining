// discord_app/modules/wishlists/native/SocialLayerStorefrontWishlistItemCard.tsx
import ThemesDefault from "../../../../discord_common/js/packages/tokens/native.tsx";
import noop from "../../../../_runtime/00019_noop.js";
import addApplication from "../../applications/ApplicationStore.tsx";
import initialize from "../SentGiftsStore.tsx";
import jsxProd from "../../../../_runtime/react/00021_jsxProd.js";
import "createCacheKey";

const require = fn;
({ jsx: closure_6, Fragment: error, jsxs: closure_8 } = jsxProd);
const createCacheKey = { position: "absolute", top: ThemesDefault.space.PX_8, left: ThemesDefault.space.PX_8, width: 24, height: 24, borderRadius: ThemesDefault.radii.sm, zIndex: 1 };
createCacheKey[0] = createCacheKey;
const obj1 = { shadowColor: "Array", shadowOffset: 0, shadowOpacity: 0, shadowRadius: 0, elevation: "visible", overflow: null, borderRadius: "\u{1F9DB}\u{1F3FB}\u200D\u2642\uFE0F" };
obj1[1] = { width: 0, height: 0 };
obj1[6] = ThemesDefault.radii.none;
createCacheKey[1] = obj1;
let closure_9 = createCacheKey.createStyles(createCacheKey);
const result = require("obj132").fileFinishedImporting("modules/wishlists/native/SocialLayerStorefrontWishlistItemCard.tsx");

export default function SocialLayerStorefrontWishlistItemCard(sku) {
  sku = sku.sku;
  let flag = sku.isOwned;
  if (flag === undefined) {
    flag = false;
  }
  const wishlistOwnerId = sku.wishlistOwnerId;
  const size = sku.size;
  const merged = Object.assign(sku, Object.create(null));
  let stateFromStores1;
  let memo;
  let obj = sku(size[6]);
  const items = [memo];
  const items1 = [sku.id, wishlistOwnerId];
  const applicationId = sku.applicationId;
  const stateFromStores = obj.useStateFromStores(items, () => {
    let hasSentGiftResult = null != wishlistOwnerId;
    if (hasSentGiftResult) {
      hasSentGiftResult = memo.hasSentGift(sku.id, tmp);
    }
    return hasSentGiftResult;
  }, items1);
  const items2 = [stateFromStores1];
  const items3 = [applicationId];
  stateFromStores1 = sku(size[6]).useStateFromStores(items2, () => {
    let application = null;
    if (null != applicationId) {
      application = stateFromStores1.getApplication(tmp);
    }
    return application;
  }, items3);
  const items4 = [stateFromStores1];
  memo = applicationId.useMemo(() => {
    let iconSource;
    if (stateFromStores1 != null) {
      iconSource = stateFromStores1.getIconSource(24);
    }
    return iconSource;
  }, items4);
  const tmp7 = callback();
  closure_6 = tmp7;
  const items5 = [sku, size, memo, , ];
  ({ applicationIcon: arr6[3], nestedCard: arr6[4] } = tmp7);
  callback = applicationId.useCallback(() => {
    let obj = { sku, size, containerStyle: lib.nestedCard };
    const children = [lib(wishlistOwnerId(size[7]), obj), ];
    let tmp3Result = null != memo;
    if (tmp3Result) {
      obj = { source: null, style: null };
      obj[0] = tmp7;
      obj[1] = lib.applicationIcon;
      tmp3Result = lib(wishlistOwnerId(size[8]), obj);
    }
    children[1] = tmp3Result;
    return closure_1_8(closure_1_7, { children });
  }, items5);
  obj = { accessibilityLabel: sku.name, renderPreview: callback, source: sku.source, size };
  const obj2 = sku(size[6]);
  const tmp2 = sku;
  const tmp3 = size;
  const tmp9 = closure_6;
  const merged1 = Object.assign(merged);
  if (!flag) {
    if (!stateFromStores) {
      let OWNED = merged.overlay;
    }
    obj.overlay = OWNED;
    return tmp9(tmp10, obj);
  }
  OWNED = tmp2(tmp3[9]).WishlistItemCardOverlay.OWNED;
};