// === Module 11027: CollectiblesShopGiftBadgePostPurchaseModal ===

// Module 11027 (CollectiblesShopGiftBadgePostPurchaseModal)
import nativeDefault from "native" /* 576 */;
import util from "util" /* 1114 */;
import useSafeAreaInsetsDefault from "useSafeAreaInsets" /* 1611 */;
import _modDef2492 from "module_2492" /* 2492 */;
import Text_Text from "Text/Text" /* 4556 */;
import ModalActionCreatorsDefault from "ModalActionCreators" /* 4763 */;
import XSmallIcon from "XSmallIcon" /* 5680 */;
import AnalyticsLocationDefault from "AnalyticsLocation" /* 7182 */;
import CollectiblesActionCreators from "CollectiblesActionCreators" /* 7541 */;
import ModalScreen from "ModalScreen" /* 8421 */;
import GiftBadgePostPurchaseDefault from "GiftBadgePostPurchase" /* 11028 */;
import noop from "module_19" /* 19 */;

require = fn;
get_ActivityIndicator = fn(17);
({ Pressable: closure_4, View: hasOwnProperty } = get_ActivityIndicator);
const jsxProd = fn(21);
({ jsx: metroRequire, jsxs: closure_7 } = jsxProd);
const createStyles = fn(4560);
let closure_8 = createStyles.createStyles((paddingTop) => {
  let obj = { header: null, closeButton: null, closeIcon: null };
  const rect = { position: "absolute", top: 0, left: 0, right: 0, height: paddingTop + 56, paddingTop, zIndex: 1, flexDirection: "row", alignItems: "center", justifyContent: "center" };
  obj.header = rect;
  const rect1 = { position: "absolute", left: 0, top: paddingTop, bottom: 0, paddingHorizontal: nativeDefault.space.PX_16, justifyContent: "center" };
  obj.closeButton = rect1;
  obj = { tintColor: nativeDefault.colors.MOBILE_TEXT_HEADING_PRIMARY };
  obj.closeIcon = obj;
  return obj;
});
const size = fn(2);
let result = size.fileFinishedImporting("modules/collectibles/native/CollectiblesShopGiftBadgePostPurchaseModal.tsx");

export default function CollectiblesShopGiftBadgePostPurchaseModal(currentProgress) {
  const tmp = closure_8(useSafeAreaInsetsDefault().top);
  const callback = noop.useCallback(() => {
    let arr = ModalActionCreatorsDefault;
    arr = arr.pop();
  }, []);
  const callback1 = noop.useCallback(() => {
    const obj = { analyticsLocations: null, analyticsSource: null };
    const items = [AnalyticsLocationDefault.GIFTING_BADGE_POST_PURCHASE];
    obj.analyticsLocations = items;
    obj.analyticsSource = AnalyticsLocationDefault.GIFTING_BADGE_POST_PURCHASE;
    const result = obj.openCollectiblesShopMobile(obj);
  }, []);
  let obj = { children: null };
  obj = { style: tmp.header, children: null };
  obj = { onPress: callback, accessibilityRole: "button", accessibilityLabel: null, style: null, children: null };
  const intl = util.intl;
  obj.accessibilityLabel = intl.string(util.t.cpT0Cq);
  obj.style = tmp.closeButton;
  obj.children = timestampProducer(XSmallIcon.XSmallIcon, { size: "md", style: tmp.closeIcon });
  let items = [timestampProducer(React4, obj), ];
  const obj2 = { accessibilityRole: "header", "aria-level": "1", lineClamp: 1, variant: "redesign/heading-18/bold", color: "mobile-text-heading-primary", children: null };
  const intl2 = util.intl;
  obj2.children = intl2.string(_modDef2492.roVAey);
  items[1] = timestampProducer(Text_Text.Text, obj2);
  obj.children = items;
  const items1 = [React5(hasOwnProperty, obj), timestampProducer(GiftBadgePostPurchaseDefault, { currentProgress: currentProgress.giftBadgeProgress, onSendGift: callback1 })];
  obj.children = items1;
  return React5(ModalScreen.ModalScreen, obj);
};