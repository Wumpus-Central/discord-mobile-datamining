// === Module 14395: CollectiblesShopGiftBadgePostPurchaseModal ===

// Module 14395 (CollectiblesShopGiftBadgePostPurchaseModal)
import nativeDefault from "native" /* 575 */;
import util from "util" /* 1114 */;
import useSafeAreaInsetsDefault from "useSafeAreaInsets" /* 1626 */;
import _modDef2633 from "module_2633" /* 2633 */;
import Text_Text from "Text/Text" /* 5619 */;
import ModalActionCreatorsDefault from "ModalActionCreators" /* 6738 */;
import XSmallIcon from "XSmallIcon" /* 7048 */;
import AnalyticsLocationDefault from "AnalyticsLocation" /* 7345 */;
import CollectiblesActionCreators from "CollectiblesActionCreators" /* 7712 */;
import ModalScreen from "ModalScreen" /* 7964 */;
import GiftBadgePostPurchaseDefault from "GiftBadgePostPurchase" /* 14396 */;
import noop from "module_19" /* 19 */;

require = fn;
get_ActivityIndicator = fn(17);
({ Pressable: closure_4, View: hasOwnProperty } = get_ActivityIndicator);
const jsxProd = fn(21);
({ jsx: metroRequire, jsxs: closure_7 } = jsxProd);
const createStyles = fn(5009);
let closure_8 = createStyles.createStyles((paddingTop) => {
  const obj = { header: null, closeButton: null, closeIcon: null };
  const rect = { position: "absolute", top: 0, left: 0, right: 0, height: paddingTop + 56, paddingTop, zIndex: 1, flexDirection: "row", alignItems: "center", justifyContent: "center" };
  obj.header = rect;
  const rect1 = { position: "absolute", left: 0, top: paddingTop, bottom: 0, paddingHorizontal: nativeDefault.space.PX_16, justifyContent: "center" };
  obj.closeButton = rect1;
  obj.closeIcon = { tintColor: nativeDefault.colors.MOBILE_TEXT_HEADING_PRIMARY };
  return obj;
});
const size = fn(2);
let result = size.fileFinishedImporting("modules/collectibles/native/CollectiblesShopGiftBadgePostPurchaseModal.tsx");

export default function CollectiblesShopGiftBadgePostPurchaseModal(currentProgress) {
  const tmp = closure_8(useSafeAreaInsetsDefault().top);
  const callback = noop.useCallback(() => {
    ModalActionCreatorsDefault.pop();
  }, []);
  const callback1 = noop.useCallback(() => {
    const obj2 = { analyticsLocations: null, analyticsSource: null };
    const items = [AnalyticsLocationDefault.GIFTING_BADGE_POST_PURCHASE];
    obj2.analyticsLocations = items;
    obj2.analyticsSource = AnalyticsLocationDefault.GIFTING_BADGE_POST_PURCHASE;
    const result = CollectiblesActionCreators.openCollectiblesShopMobile(obj2);
  }, []);
  const obj = { children: null };
  let obj2 = { style: tmp.header, children: null };
  const obj3 = { onPress: callback, accessibilityRole: "button", accessibilityLabel: null, style: null, children: null };
  const intl = util.intl;
  obj3.accessibilityLabel = intl.string(util.t.cpT0Cq);
  obj3.style = tmp.closeButton;
  obj3.children = timestampProducer(XSmallIcon.XSmallIcon, { size: "md", style: tmp.closeIcon });
  let items = [timestampProducer(React4, obj3), ];
  const obj5 = { accessibilityRole: "header", "aria-level": "1", lineClamp: 1, variant: "redesign/heading-18/bold", color: "mobile-text-heading-primary", children: null };
  const intl2 = util.intl;
  obj5.children = intl2.string(_modDef2633.roVAey);
  items[1] = timestampProducer(Text_Text.Text, obj5);
  obj2.children = items;
  const items1 = [React5(hasOwnProperty, obj2), timestampProducer(GiftBadgePostPurchaseDefault, { currentProgress: currentProgress.giftBadgeProgress, onSendGift: callback1 })];
  obj.children = items1;
  return React5(ModalScreen.ModalScreen, obj);
};