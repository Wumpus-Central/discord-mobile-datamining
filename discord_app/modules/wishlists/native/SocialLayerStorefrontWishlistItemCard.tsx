// discord_app/modules/wishlists/native/SocialLayerStorefrontWishlistItemCard.tsx
import nativeDefault from "../../../../discord_common/js/packages/tokens/native.tsx";
import FastImageDefault from "../../../components_native/common/FastImage.tsx";
import SlayerStorefrontItemCardDefault from "../../slayer_storefront/native/SlayerStorefrontItemCard.tsx";
import noop from "../../../../_runtime/metro/00019__.js";
import ApplicationStore from "../../applications/ApplicationStore.tsx";
import SentGiftsStore from "../SentGiftsStore.tsx";

const require = fn;
const jsxProd = fn(21);
({ jsx: metroRequire, Fragment: closure_7, jsxs: closure_8 } = jsxProd);
fn(4560);
let createStyles = { applicationIcon: null, nestedCard: null };
let size = {
  position: "absolute",
  top: nativeDefault.space.PX_8,
  left: nativeDefault.space.PX_8,
  width: 24,
  height: 24,
  borderRadius: nativeDefault.radii.sm,
  zIndex: 1,
};
createStyles.applicationIcon = size;
createStyles = {
  shadowColor: "Array",
  shadowOffset: { width: 0, height: 0 },
  shadowOpacity: 0,
  shadowRadius: 0,
  elevation: "visible",
  overflow: null,
  borderRadius: nativeDefault.radii.none,
};
createStyles.nestedCard = createStyles;
let closure_9 = createStyles.createStyles(createStyles);
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
  let obj = sku(size[6]);
  const items = [memo];
  const items1 = [sku.id, wishlistOwnerId];
  const applicationId = sku.applicationId;
  const stateFromStores = obj.useStateFromStores(
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
  const items2 = [stateFromStores1];
  const items3 = [applicationId];
  stateFromStores1 = sku(size[6]).useStateFromStores(
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
  memo = applicationId.useMemo(() => {
    let iconSource;
    if (stateFromStores1 != null) {
      iconSource = stateFromStores1.getIconSource(24);
    }
    return iconSource;
  }, items4);
  const tmp7 = closure_9();
  const nestedCard = tmp7;
  const items5 = [sku, size, memo, ,];
  ({ applicationIcon: arr6[3], nestedCard: arr6[4] } = tmp7);
  const callback = applicationId.useCallback(() => {
    let obj = { sku, size, containerStyle: nestedCard.nestedCard };
    const children = [timestampProducer(SlayerStorefrontItemCardDefault, obj)];
    let tmp3Result = null != memo;
    if (tmp3Result) {
      obj = { source: tmp7, style: nestedCard.applicationIcon };
      tmp3Result = timestampProducer(FastImageDefault, obj);
    }
    children[1] = tmp3Result;
    return React6(React5, { children });
  }, items5);
  obj = { accessibilityLabel: sku.name, renderPreview: callback, source: sku.source, size };
  const obj2 = sku(size[6]);
  const tmp2 = sku;
  const tmp3 = size;
  const tmp9 = nestedCard;
  const merged1 = Object.assign(merged);
  if (!flag) {
    if (!stateFromStores) {
      let OWNED = merged.overlay;
    }
    obj.overlay = OWNED;
    return tmp9(tmp10, obj);
  }
  OWNED = tmp2(tmp3[9]).WishlistItemCardOverlay.OWNED;
}
