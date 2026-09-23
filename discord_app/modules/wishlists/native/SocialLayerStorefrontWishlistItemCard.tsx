// === Module 11388: SocialLayerStorefrontWishlistItemCard ===

// Module 11388 (SocialLayerStorefrontWishlistItemCard)
import nativeDefault from "native" /* 576 */;
import FastImageDefault from "FastImage" /* 5890 */;
import SlayerStorefrontItemCardDefault from "SlayerStorefrontItemCard" /* 9182 */;
import noop from "module_19" /* 19 */;
import ApplicationStore from "ApplicationStore" /* 5054 */;
import SentGiftsStore from "SentGiftsStore" /* 11386 */;

const require = fn;
const jsxProd = fn(21);
({ jsx: metroRequire, Fragment: closure_7, jsxs: closure_8 } = jsxProd);
const createStyles = fn(4827);
let obj2 = { applicationIcon: null, nestedCard: null };
let size = { position: "absolute", top: nativeDefault.space.PX_8, left: nativeDefault.space.PX_8, width: 24, height: 24, borderRadius: nativeDefault.radii.sm, zIndex: 1 };
obj2.applicationIcon = size;
let obj3 = { shadowColor: "Array", shadowOffset: { width: 0, height: 0 }, shadowOpacity: 0, shadowRadius: 0, elevation: "visible", overflow: null, borderRadius: nativeDefault.radii.none };
obj2.nestedCard = obj3;
let closure_9 = createStyles.createStyles(obj2);
size = fn(2);
const result = size.fileFinishedImporting("modules/wishlists/native/SocialLayerStorefrontWishlistItemCard.tsx");

export default function SocialLayerStorefrontWishlistItemCard(sku) {
  sku = sku.sku;
  let flag = sku.isOwned;
  if (flag === undefined) {
    flag = false;
  }
  const wishlistOwnerId = sku.wishlistOwnerId;
  const size = sku.size;
  const merged = Object.assign(sku, Object.assign({ sku: 0, isOwned: 0, source: 0, wishlistOwnerId: 0, size: 0 }));
  let stateFromStores1;
  let memo;
  const items = [memo];
  const items1 = [sku.id, wishlistOwnerId];
  const applicationId = sku.applicationId;
  const stateFromStores = sku(size[6]).useStateFromStores(items, () => {
    let hasSentGiftResult = null != wishlistOwnerId;
    if (hasSentGiftResult) {
      hasSentGiftResult = SentGiftsStore.hasSentGift(sku.id, tmp);
    }
    return hasSentGiftResult;
  }, items1);
  const obj = sku(size[6]);
  const tmp2 = sku;
  const tmp3 = size;
  const items2 = [stateFromStores1];
  const items3 = [applicationId];
  stateFromStores1 = sku(size[6]).useStateFromStores(items2, () => {
    let application = null;
    if (null != applicationId) {
      application = ApplicationStore.getApplication(tmp);
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
  const tmp7 = closure_9();
  const nestedCard = tmp7;
  const items5 = [sku, size, memo, , ];
  ({ applicationIcon: arr6[3], nestedCard: arr6[4] } = tmp7);
  const callback = applicationId.useCallback(() => {
    const children = [timestampProducer(SlayerStorefrontItemCardDefault, { sku, size, containerStyle: nestedCard.nestedCard }), ];
    let tmp3Result = null != memo;
    if (tmp3Result) {
      const obj2 = { source: tmp7, style: nestedCard.applicationIcon };
      tmp3Result = timestampProducer(FastImageDefault, obj2);
    }
    children[1] = tmp3Result;
    return React6(React5, { children });
  }, items5);
  const obj3 = { accessibilityLabel: sku.name, renderPreview: callback, source: sku.source, size };
  let obj2 = sku(size[6]);
  const tmp9 = nestedCard;
  const merged1 = Object.assign(merged);
  if (!flag) {
    if (!stateFromStores) {
      let OWNED = merged.overlay;
    }
    obj3.overlay = OWNED;
    return tmp9(tmp10, obj3);
  }
  OWNED = tmp2(tmp3[9]).WishlistItemCardOverlay.OWNED;
};