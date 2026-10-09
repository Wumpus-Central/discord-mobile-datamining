// discord_app/modules/collectibles/native/CollectiblesShopGiftBadgePostPurchaseModal.tsx
import c from "../../../../_runtime/00576_c.js";
import nativeDefault from "../../../../discord_common/js/packages/tokens/native.tsx";
import util from "../../../intl/index.native.tsx";
import useSafeAreaInsetsDefault from "../../safe_area/useSafeAreaInsets.native.tsx";
import _modDef2661 from "../../premium/gifting/GiftingBadge.messages.js";
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
const createStyles = fn(5091);
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
const ReactCompilerGating = fn(558);
const size = fn(2);
let result = size.fileFinishedImporting("modules/collectibles/native/CollectiblesShopGiftBadgePostPurchaseModal.tsx");

export default ReactCompilerGating.isReactCompilerEnabled()
  ? function CollectiblesShopGiftBadgePostPurchaseModal(giftBadgeProgress) {
      const cResult = c.c(17);
      giftBadgeProgress = giftBadgeProgress.giftBadgeProgress;
      const tmp5 = closure_8(useSafeAreaInsetsDefault().top);
      if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
        const fn = function t() {
          ModalActionCreatorsDefault.pop();
        };
        cResult[0] = fn;
        let first = fn;
      } else {
        first = cResult[0];
      }
      if (cResult[1] === Symbol.for("react.memo_cache_sentinel")) {
        const fn2 = function _() {
          const obj2 = { analyticsLocations: null, analyticsSource: null };
          const items = [AnalyticsLocationDefault.GIFTING_BADGE_POST_PURCHASE];
          obj2.analyticsLocations = items;
          obj2.analyticsSource = AnalyticsLocationDefault.GIFTING_BADGE_POST_PURCHASE;
          const result = CollectiblesActionCreators.openCollectiblesShopMobile(obj2);
        };
        cResult[1] = fn2;
        let tmp7 = fn2;
      } else {
        tmp7 = cResult[1];
      }
      if (cResult[2] === Symbol.for("react.memo_cache_sentinel")) {
        const intl = util.intl;
        const stringResult = intl.string(util.t.cpT0Cq);
        cResult[2] = stringResult;
        let tmp8 = stringResult;
      } else {
        tmp8 = cResult[2];
      }
      if (cResult[3] !== tmp5.closeIcon) {
        let obj2 = { size: "md", style: tmp5.closeIcon };
        const tmp12 = timestampProducer(XSmallIcon.XSmallIcon, obj2);
        cResult[3] = tmp5.closeIcon;
        cResult[4] = tmp12;
        let tmp10 = tmp12;
      } else {
        tmp10 = cResult[4];
      }
      if (cResult[5] === tmp5.closeButton) {
        if (cResult[6] === tmp10) {
          let tmp13 = cResult[7];
        }
        const _Symbol = Symbol;
        if (cResult[8] === Symbol.for("react.memo_cache_sentinel")) {
          const obj3 = {
            accessibilityRole: "header",
            "aria-level": "1",
            lineClamp: 1,
            variant: "redesign/heading-18/bold",
            color: "mobile-text-heading-primary",
            children: null,
          };
          const intl2 = util.intl;
          obj3.children = intl2.string(_modDef2661.roVAey);
          const tmp17 = timestampProducer(Text_Text.Text, obj3);
          cResult[8] = tmp17;
          let tmp15 = tmp17;
        } else {
          tmp15 = cResult[8];
        }
        if (cResult[9] === tmp5.header) {
          if (cResult[10] === tmp13) {
            let tmp18 = cResult[11];
          }
          if (cResult[12] !== giftBadgeProgress) {
            const obj4 = { currentProgress: giftBadgeProgress, onSendGift: tmp7 };
            const tmp24 = timestampProducer(GiftBadgePostPurchaseDefault, obj4);
            cResult[12] = giftBadgeProgress;
            cResult[13] = tmp24;
            let tmp22 = tmp24;
          } else {
            tmp22 = cResult[13];
          }
          if (cResult[14] === tmp18) {
            if (cResult[15] === tmp22) {
              let tmp25 = cResult[16];
            }
            return tmp25;
          }
          const obj5 = { children: null };
          let items = [tmp18, tmp22];
          obj5.children = items;
          const tmp27 = React5(ModalScreen.ModalScreen, obj5);
          cResult[14] = tmp18;
          cResult[15] = tmp22;
          cResult[16] = tmp27;
          tmp25 = tmp27;
        }
        const obj6 = { style: tmp5.header, children: null };
        const items1 = [tmp13, tmp15];
        obj6.children = items1;
        const tmp21 = React5(hasOwnProperty, obj6);
        cResult[9] = tmp5.header;
        cResult[10] = tmp13;
        cResult[11] = tmp21;
        tmp18 = tmp21;
      }
      const tmp14 = timestampProducer(React4, {
        onPress: first,
        accessibilityRole: "button",
        accessibilityLabel: tmp8,
        style: tmp5.closeButton,
        children: tmp10,
      });
      cResult[5] = tmp5.closeButton;
      cResult[6] = tmp10;
      cResult[7] = tmp14;
      tmp13 = tmp14;
      const obj7 = {
        onPress: first,
        accessibilityRole: "button",
        accessibilityLabel: tmp8,
        style: tmp5.closeButton,
        children: tmp10,
      };
    }
  : function CollectiblesShopGiftBadgePostPurchaseModal(currentProgress) {
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
      obj5.children = intl2.string(_modDef2661.roVAey);
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
    };
