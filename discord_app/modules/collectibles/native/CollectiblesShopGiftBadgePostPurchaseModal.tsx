// discord_app/modules/collectibles/native/CollectiblesShopGiftBadgePostPurchaseModal.tsx
import react2 from "../../../../_runtime/00576_react.js";
import nativeDefault from "../../../../discord_common/js/packages/tokens/native.tsx";
import intl3 from "../../../intl/index.native.tsx";
import useSafeAreaInsetsDefault from "../../safe_area/useSafeAreaInsets.native.tsx";
import _modDef2617 from "../../premium/gifting/GiftingBadge.messages.js";
import Text_Text from "../../../design/components/Text/native/Text.tsx";
import ModalActionCreatorsDefault from "../../../actions/ModalActionCreators.tsx";
import XSmallIcon from "../../../design/components/Icon/native/redesign/generated/XSmallIcon.tsx";
import AnalyticsLocationDefault from "../../app_analytics/AnalyticsLocation.tsx";
import CollectiblesActionCreators from "../CollectiblesActionCreators.tsx";
import ModalScreen2 from "../../../design/components/Modal/native/ModalScreen.native.tsx";
import GiftBadgePostPurchaseDefault from "../../premium/native/gifting/GiftBadgePostPurchase.tsx";
import react from "../../../../_runtime/00019_react.js";
import react_native from "../../../../_runtime/00017_react-native.js";
import Fragment from "../../../../_runtime/react/00021_Fragment.js";
import createStyles from "../../../design/components/Styles/native/createStyles.tsx";
import ReactCompilerGating from "../../react_compiler/ReactCompilerGating.tsx";
import size from "../../../../_runtime/metro/00002__.js";

let giftBadgeProgress;

let closure_4;
let hasOwnProperty;
let metroImportDefault;
let metroRequire;
({ Pressable: closure_4, View: hasOwnProperty } = react_native);
({ jsx: metroRequire, jsxs: metroImportDefault } = Fragment);
let closure_8 = createStyles.createStyles((paddingTop) => {
  let rect;
  let rect1;
  const obj = {
    header: rect,
    closeButton: rect1,
    closeIcon: { tintColor: nativeDefault.colors.MOBILE_TEXT_HEADING_PRIMARY },
  };
  rect = {
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
  rect1 = {
    position: "absolute",
    left: 0,
    top: paddingTop,
    bottom: 0,
    paddingHorizontal: nativeDefault.space.PX_16,
    justifyContent: "center",
  };
  ({ tintColor: nativeDefault.colors.MOBILE_TEXT_HEADING_PRIMARY });
  return obj;
});
const tmp4 = ReactCompilerGating.isReactCompilerEnabled()
  ? (giftBadgeProgress) => {
      let first;
      let intl2;
      let items;
      let items1;
      let tmp10;
      let tmp7;
      let tmp8;
      let obj = react2;
      const cResult = obj.c(17);
      giftBadgeProgress = giftBadgeProgress.giftBadgeProgress;
      const tmp5 = closure_8(useSafeAreaInsetsDefault().top);
      if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
        const fn = function o() {
          const arr = ModalActionCreatorsDefault;
          arr.pop();
        };
        cResult[0] = fn;
        first = fn;
      } else {
        first = cResult[0];
      }
      if (cResult[1] === Symbol.for("react.memo_cache_sentinel")) {
        const fn2 = function _() {
          let items;
          const obj = {
            analyticsLocations: items,
            analyticsSource: AnalyticsLocationDefault.GIFTING_BADGE_POST_PURCHASE,
          };
          const openCollectiblesShopMobile = CollectiblesActionCreators.openCollectiblesShopMobile;
          items = [];
          CollectiblesActionCreators;
          items[0] = AnalyticsLocationDefault.GIFTING_BADGE_POST_PURCHASE;
          const result = openCollectiblesShopMobile(obj);
        };
        cResult[1] = fn2;
        tmp7 = fn2;
      } else {
        tmp7 = cResult[1];
      }
      const header = tmp5.header;
      if (cResult[2] === Symbol.for("react.memo_cache_sentinel")) {
        const intl = intl3.intl;
        const stringResult = intl.string(intl3.t.cpT0Cq);
        cResult[2] = stringResult;
        tmp8 = stringResult;
      } else {
        tmp8 = cResult[2];
      }
      if (cResult[3] !== tmp5.closeIcon) {
        const obj2 = { size: "md", style: tmp5.closeIcon };
        const tmp12 = metroRequire(XSmallIcon.XSmallIcon, obj2);
        cResult[3] = tmp5.closeIcon;
        cResult[4] = tmp12;
        tmp10 = tmp12;
      } else {
        tmp10 = cResult[4];
      }
      if (cResult[5] === tmp5.closeButton) {
        let tmp13;
        let tmp15;
        if (cResult[6] === tmp10) {
          tmp13 = cResult[7];
        }
        const _Symbol = Symbol;
        if (cResult[8] === Symbol.for("react.memo_cache_sentinel")) {
          const obj3 = {
            accessibilityRole: "header",
            "aria-level": "1",
            lineClamp: 1,
            variant: "redesign/heading-18/bold",
            color: "mobile-text-heading-primary",
            children: intl2.string(_modDef2617.roVAey),
          };
          const Text = Text_Text.Text;
          intl2 = intl3.intl;
          const tmp17 = metroRequire(Text, obj3);
          cResult[8] = tmp17;
          tmp15 = tmp17;
        } else {
          tmp15 = cResult[8];
        }
        if (cResult[9] === tmp5.header) {
          let tmp18;
          let tmp22;
          if (cResult[10] === tmp13) {
            tmp18 = cResult[11];
          }
          if (cResult[12] !== giftBadgeProgress) {
            const obj4 = { currentProgress: giftBadgeProgress, onSendGift: tmp7 };
            const tmp24 = metroRequire(GiftBadgePostPurchaseDefault, obj4);
            cResult[12] = giftBadgeProgress;
            cResult[13] = tmp24;
            tmp22 = tmp24;
          } else {
            tmp22 = cResult[13];
          }
          if (cResult[14] === tmp18) {
            let tmp25;
            if (cResult[15] === tmp22) {
              tmp25 = cResult[16];
            }
            return tmp25;
          }
          const obj5 = { children: items };
          items = [tmp18, tmp22];
          const tmp27 = metroImportDefault(ModalScreen2.ModalScreen, obj5);
          cResult[14] = tmp18;
          cResult[15] = tmp22;
          cResult[16] = tmp27;
          tmp25 = tmp27;
        }
        const obj6 = { style: header, children: items1 };
        items1 = [tmp13, tmp15];
        const tmp21 = metroImportDefault(hasOwnProperty, obj6);
        cResult[9] = tmp5.header;
        cResult[10] = tmp13;
        cResult[11] = tmp21;
        tmp18 = tmp21;
      }
      const obj7 = {
        onPress: first,
        accessibilityRole: "button",
        accessibilityLabel: tmp8,
        style: tmp5.closeButton,
        children: tmp10,
      };
      const tmp14 = metroRequire(React3, obj7);
      cResult[5] = tmp5.closeButton;
      cResult[6] = tmp10;
      cResult[7] = tmp14;
      tmp13 = tmp14;
    }
  : (giftBadgeProgress) => {
      let intl;
      let intl2;
      let items;
      let items1;
      let obj4;
      giftBadgeProgress = giftBadgeProgress.giftBadgeProgress;
      const tmp = closure_8(useSafeAreaInsetsDefault().top);
      const callback = react.useCallback(() => {
        const arr = ModalActionCreatorsDefault;
        arr.pop();
      }, []);
      const callback1 = react.useCallback(() => {
        let items;
        const obj = {
          analyticsLocations: items,
          analyticsSource: AnalyticsLocationDefault.GIFTING_BADGE_POST_PURCHASE,
        };
        const openCollectiblesShopMobile = CollectiblesActionCreators.openCollectiblesShopMobile;
        items = [];
        CollectiblesActionCreators;
        items[0] = AnalyticsLocationDefault.GIFTING_BADGE_POST_PURCHASE;
        const result = openCollectiblesShopMobile(obj);
      }, []);
      let obj = { children: items1 };
      const obj2 = { style: tmp.header, children: items };
      const obj3 = {
        onPress: callback,
        accessibilityRole: "button",
        accessibilityLabel: intl.string(intl3.t.cpT0Cq),
        style: tmp.closeButton,
        children: metroRequire(XSmallIcon.XSmallIcon, obj4),
      };
      const ModalScreen = ModalScreen2.ModalScreen;
      intl = intl3.intl;
      obj4 = { size: "md", style: tmp.closeIcon };
      items = [metroRequire(React3, obj3)];
      const obj5 = {
        accessibilityRole: "header",
        "aria-level": "1",
        lineClamp: 1,
        variant: "redesign/heading-18/bold",
        color: "mobile-text-heading-primary",
        children: intl2.string(_modDef2617.roVAey),
      };
      const Text = Text_Text.Text;
      intl2 = intl3.intl;
      items[1] = metroRequire(Text, obj5);
      items1 = [
        metroImportDefault(hasOwnProperty, obj2),
        metroRequire(GiftBadgePostPurchaseDefault, { currentProgress: giftBadgeProgress, onSendGift: callback1 }),
      ];
      return metroImportDefault(ModalScreen, obj);
    };
let result = size.fileFinishedImporting("modules/collectibles/native/CollectiblesShopGiftBadgePostPurchaseModal.tsx");

export default tmp4;
