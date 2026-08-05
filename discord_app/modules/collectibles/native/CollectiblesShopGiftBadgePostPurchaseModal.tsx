// discord_app/modules/collectibles/native/CollectiblesShopGiftBadgePostPurchaseModal.tsx
import noop from "noop";
import get_ActivityIndicator from "get ActivityIndicator";
import jsxProd from "jsxProd";
import createCacheKey from "createCacheKey";
import { Themes } from "../../../../discord_common/js/packages/tokens/native.tsx";
import { XSmallIcon } from "../../../design/components/Icon/native/redesign/generated/XSmallIcon.tsx";
import { ModalScreen } from "../../../design/components/Modal/native/ModalScreen.native.tsx";
import { Text } from "../../../design/components/Text/native/Text.tsx";
import { getSystemLocale } from "../../../intl/index.native.tsx";
import { messagesProxy } from "../../premium/gifting/GiftingBadge.messages.js";
import { PostPurchaseFooter } from "../../premium/native/gifting/GiftBadgePostPurchase.tsx";
import { useSafeAreaInsets } from "../../safe_area/useSafeAreaInsets.native.tsx";

let c4;
let c5;
let closure_6;
let error;
const require = arg1;
({ Pressable: c4, View: c5 } = get_ActivityIndicator);
({ jsx: closure_6, jsxs: error } = jsxProd);
let closure_8 = createCacheKey.createStyles((paddingTop) => {
  obj = { header: obj, closeButton: null, closeIcon: null };
  obj = { position: "absolute", top: 0, left: 0, right: 0, height: paddingTop + 56, paddingTop, zIndex: 1, flexDirection: "row", alignItems: "center", justifyContent: "center" };
  obj = { position: "absolute", left: 0, top: paddingTop, bottom: 0, paddingHorizontal: Themes.space.PX_16, justifyContent: "center" };
  obj[1] = obj;
  obj[2] = { tintColor: Themes.colors.MOBILE_TEXT_HEADING_PRIMARY };
  return obj;
});
let result = require("jsxProd").fileFinishedImporting("modules/collectibles/native/CollectiblesShopGiftBadgePostPurchaseModal.tsx");

export default function CollectiblesShopGiftBadgePostPurchaseModal(currentProgress) {
  const tmp = callback3(useSafeAreaInsets().top);
  const callback = React.useCallback(() => {
    let arr = callback2(4460);
    arr = arr.pop();
  }, []);
  const callback1 = React.useCallback(() => {
    let obj = callback(6894);
    obj = { analyticsLocations: null, analyticsSource: null };
    const items = [callback2(5615).GIFTING_BADGE_POST_PURCHASE];
    obj[0] = items;
    obj[1] = callback2(5615).GIFTING_BADGE_POST_PURCHASE;
    const result = obj.openCollectiblesShopMobile(obj);
  }, []);
  let obj = { children: null };
  obj = { style: tmp.header, children: null };
  obj = { onPress: callback, accessibilityRole: "button", accessibilityLabel: null, style: null, children: null };
  const intl = getSystemLocale.intl;
  obj[2] = intl.string(getSystemLocale.t.cpT0Cq);
  obj[3] = tmp.closeButton;
  obj[4] = callback(XSmallIcon.XSmallIcon, { size: "md", style: tmp.closeIcon });
  let items = [callback(closure_4, obj), ];
  const obj2 = { accessibilityRole: "header", "aria-level": "1", lineClamp: 1, variant: "redesign/heading-18/bold", color: "mobile-text-heading-primary", children: null };
  const intl2 = getSystemLocale.intl;
  obj2[5] = intl2.string(messagesProxy.roVAey);
  items[1] = callback(Text.Text, obj2);
  obj[1] = items;
  const items1 = [callback2(closure_5, obj), callback(PostPurchaseFooter, { currentProgress: currentProgress.giftBadgeProgress, onSendGift: callback1 })];
  obj[0] = items1;
  return callback2(ModalScreen.ModalScreen, obj);
};