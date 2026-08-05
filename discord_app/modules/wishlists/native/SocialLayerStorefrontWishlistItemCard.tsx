// discord_app/modules/wishlists/native/SocialLayerStorefrontWishlistItemCard.tsx
import noop from "noop";
import addApplication from "addApplication";
import initialize from "initialize";
import jsxProd from "jsxProd";
import createCacheKey from "createCacheKey";

let closure_6;
let error;
let metroImportAll;
const require = arg1;
({ jsx: closure_6, Fragment: error, jsxs: metroImportAll } = jsxProd);
createCacheKey = { applicationIcon: null, nestedCard: null };
createCacheKey = { position: "absolute", top: require("Themes").space.PX_8, left: require("Themes").space.PX_8, width: 24, height: 24, borderRadius: require("Themes").radii.sm, zIndex: 1 };
createCacheKey[0] = createCacheKey;
const obj1 = { shadowColor: "Array", shadowOffset: 0, shadowOpacity: 0, shadowRadius: 0, elevation: "visible", overflow: null, borderRadius: "\u{1F9DB}\u{1F3FC}" };
obj1[1] = { width: 0, height: 0 };
obj1[6] = require("Themes").radii.none;
createCacheKey[1] = obj1;
createCacheKey = createCacheKey.createStyles(createCacheKey);
const result = require("initialize").fileFinishedImporting("modules/wishlists/native/SocialLayerStorefrontWishlistItemCard.tsx");

export default function SocialLayerStorefrontWishlistItemCard(sku) {
  sku = sku.sku;
  let flag = sku.isOwned;
  if (flag === undefined) {
    flag = false;
  }
  const wishlistOwnerId = sku.wishlistOwnerId;
  const size = sku.size;
  const merged = Object.assign(sku, Object.create(null));
  let applicationId;
  let stateFromStores1;
  let memo;
  let c6;
  let obj = sku(size[6]);
  const items = [memo];
  const items1 = [sku.id, wishlistOwnerId];
  applicationId = sku.applicationId;
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
  const tmp5 = createCacheKey();
  c6 = tmp5;
  const items5 = [sku, size, memo, , ];
  ({ applicationIcon: arr6[3], nestedCard: arr6[4] } = tmp5);
  const callback = applicationId.useCallback(() => {
    let obj = { sku, size, containerStyle: _undefined.nestedCard };
    const children = [_undefined(wishlistOwnerId(size[7]), obj), ];
    let tmp3Result = null != memo;
    if (tmp3Result) {
      obj = { source: null, style: null };
      obj[0] = tmp7;
      obj[1] = _undefined.applicationIcon;
      tmp3Result = _undefined(wishlistOwnerId(size[8]), obj);
    }
    children[1] = tmp3Result;
    return outer1_8(outer1_7, { children });
  }, items5);
  obj = { accessibilityLabel: sku.name, renderPreview: callback, source: sku.source, isOwned: null, size: null };
  const obj2 = sku(size[6]);
  const tmp7 = c6;
  if (!flag) {
    flag = stateFromStores;
  }
  obj[3] = flag;
  obj[4] = size;
  const merged1 = Object.assign(merged);
  return tmp7(wishlistOwnerId(size[9]), obj);
};