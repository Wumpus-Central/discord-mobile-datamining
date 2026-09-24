// discord_app/modules/collectibles/native/CollectiblesShopGiftBadgePostPurchaseModal.tsx
import nativeDefault from "../../../../discord_common/js/packages/tokens/native.tsx";
import util from "../../../intl/index.native.tsx";
import useSafeAreaInsetsDefault from "../../safe_area/useSafeAreaInsets.native.tsx";
import _modDef2582 from "../../premium/gifting/GiftingBadge.messages.js";
import Text_Text from "../../../design/components/Text/native/Text.tsx";
import ModalActionCreatorsDefault from "../../../actions/ModalActionCreators.tsx";
import XSmallIcon from "../../../design/components/Icon/native/redesign/generated/XSmallIcon.tsx";
import AnalyticsLocationDefault from "../../app_analytics/AnalyticsLocation.tsx";
import CollectiblesActionCreators from "../CollectiblesActionCreators.tsx";
import ModalScreen from "../../../design/components/Modal/native/ModalScreen.native.tsx";
import GiftBadgePostPurchaseDefault from "../../premium/native/gifting/GiftBadgePostPurchase.tsx";
import noop from "../../../../_runtime/metro/00019__.js";

require = fn;
get_ActivityIndicator = fn(17);
({ Pressable: closure_4, View: hasOwnProperty } = get_ActivityIndicator);
const jsxProd = fn(21);
({ jsx: metroRequire, jsxs: closure_7 } = jsxProd);
const createStyles = fn(4829);
let closure_8 = createStyles.createStyles((paddingTop) => {
  const obj = { header: null, closeButton: null, closeIcon: null };
  const rect = {
    position: "absolute",
    top: 0,
    left: 0,
    right: 0,
    height: paddingTop + 56,
    paddingTop,
    zIndex: 1,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
  };
  obj.header = rect;
  const rect1 = {
    position: "absolute",
    left: 0,
    top: paddingTop,
    bottom: 0,
    paddingHorizontal: nativeDefault.space.PX_16,
    justifyContent: "center",
  };
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
  const obj3 = {
    onPress: callback,
    accessibilityRole: "button",
    accessibilityLabel: null,
    style: null,
    children: null,
  };
  const intl = util.intl;
  obj3.accessibilityLabel = intl.string(util.t.cpT0Cq);
  obj3.style = tmp.closeButton;
  obj3.children = timestampProducer(XSmallIcon.XSmallIcon, { size: "md", style: tmp.closeIcon });
  let items = [timestampProducer(React4, obj3)];
  const obj5 = {
    accessibilityRole: "header",
    "aria-level": "1",
    lineClamp: 1,
    variant: "redesign/heading-18/bold",
    color: "mobile-text-heading-primary",
    children: null,
  };
  const intl2 = util.intl;
  obj5.children = intl2.string(_modDef2582.roVAey);
  items[1] = timestampProducer(Text_Text.Text, obj5);
  obj2.children = items;
  const items1 = [
    React5(hasOwnProperty, obj2),
    timestampProducer(GiftBadgePostPurchaseDefault, {
      currentProgress: currentProgress.giftBadgeProgress,
      onSendGift: callback1,
    }),
  ];
  obj.children = items1;
  return React5(ModalScreen.ModalScreen, obj);
}
