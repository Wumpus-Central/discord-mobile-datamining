// discord_app/modules/premium/gifting/native/GiftingBadgeInfoActionSheet.tsx
import nativeDefault from "../../../../../discord_common/js/packages/tokens/native.tsx";
import util from "../../../../intl/index.native.tsx";
import useSafeAreaInsetsDefault from "../../../safe_area/useSafeAreaInsets.native.tsx";
import _modDef2617 from "../GiftingBadge.messages.js";
import Text_Text from "../../../../design/components/Text/native/Text.tsx";
import GiftingBadgesUtils from "../GiftingBadgesUtils.tsx";
import GiftingBadgeIconDefault from "views/GiftingBadgeIcon.tsx";
import noop from "../../../../../_runtime/metro/00019__.js";
import AccessibilityStore from "../../../a11y/AccessibilityStore.tsx";
import BadgeDirectoryStore from "../../../badges/BadgeDirectoryStore.tsx";

const require = globalThis.__r;

require = fn;
const View = fn(17).View;
let closure_7 = fn(7874).getSingleRequirementThreshold;
const AnalyticEvents = fn(1085).AnalyticEvents;
const jsxProd = fn(21);
({ jsx: closure_9, jsxs: c10 } = jsxProd);
const createStyles = fn(4896);
let obj2 = {
  container: {
    alignItems: "center",
    paddingTop: nativeDefault.space.PX_16,
    paddingHorizontal: nativeDefault.space.PX_16,
  },
  headerContainer: null,
  title: null,
  description: null,
  tierCards: null,
  tierCard: null,
  iconWrapper: null,
};
let obj3 = {
  alignItems: "center",
  paddingTop: nativeDefault.space.PX_16,
  paddingHorizontal: nativeDefault.space.PX_16,
};
obj2.headerContainer = { paddingHorizontal: nativeDefault.space.PX_8 };
let obj4 = { paddingHorizontal: nativeDefault.space.PX_8 };
obj2.title = { textAlign: "center", marginBottom: nativeDefault.space.PX_8 };
let obj5 = { textAlign: "center", marginBottom: nativeDefault.space.PX_8 };
obj2.description = { textAlign: "center", marginBottom: nativeDefault.space.PX_16 };
let obj6 = { textAlign: "center", marginBottom: nativeDefault.space.PX_16 };
obj2.tierCards = { flexDirection: "row", flexWrap: "wrap", rowGap: nativeDefault.space.PX_8 };
let obj7 = { flexDirection: "row", flexWrap: "wrap", rowGap: nativeDefault.space.PX_8 };
obj2.tierCard = { width: "33.33%", alignItems: "center", padding: nativeDefault.space.PX_8 };
let obj8 = { width: "33.33%", alignItems: "center", padding: nativeDefault.space.PX_8 };
obj2.iconWrapper = { paddingVertical: nativeDefault.space.PX_8 };
let closure_11 = createStyles.createStyles(obj2);
const ReactCompilerGating = fn(558);
let obj9 = { paddingVertical: nativeDefault.space.PX_8 };
const size = fn(2);
const result = size.fileFinishedImporting("modules/premium/gifting/native/GiftingBadgeInfoActionSheet.tsx");

export default ReactCompilerGating.isReactCompilerEnabled()
  ? () => {
      const cResult = require("c").c(33);
      const tmp4 = closure_11();
      _require = tmp4;
      if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
        let items = [BadgeDirectoryStore];
        const fn = function x() {
          return badgeById.getBadgeById(closure_0(7866).BadgeId.GIFTING);
        };
        cResult[0] = items;
        cResult[1] = fn;
        tmp6 = items;
        tmp7 = fn;
      } else {
        [tmp6, tmp7] = cResult;
      }
      let obj = require("c");
      const stateFromStores = require("initialize").useStateFromStores(tmp6, tmp7);
      if (cResult[2] === Symbol.for("react.memo_cache_sentinel")) {
        const items1 = [AccessibilityStore];
        class S {
          constructor() {
            return closure_1_5.useReducedMotion;
          }
        }
        cResult[2] = items1;
        cResult[3] = S;
        let tmp11 = S;
        let tmp10 = items1;
      } else {
        tmp10 = cResult[2];
        tmp11 = cResult[3];
      }
      const tmpResult = require("initialize");
      const stateFromStores1 = require("initialize").useStateFromStores(tmp10, tmp11);
      if (cResult[4] === Symbol.for("react.memo_cache_sentinel")) {
        class I {
          constructor() {
            obj = closure_1(closure_1_2[13]);
            trackResult = obj.track(closure_1_8.GIFTING_BADGE_INFO_ACTION_SHEET_OPENED);
            return;
          }
        }
        const items2 = [];
        class S {
          constructor() {
            return closure_1_5.useReducedMotion;
          }
        }
        cResult[5] = items2;
        let tmp15 = items2;
      } else {
        class I {
          constructor() {
            obj = closure_1(closure_1_2[13]);
            trackResult = obj.track(closure_1_8.GIFTING_BADGE_INFO_ACTION_SHEET_OPENED);
            return;
          }
        }
        tmp15 = cResult[5];
      }
      const effect = noop.useEffect(I, tmp15);
      const sum = stateFromStores1(1618)().bottom + tmp5(587).space.PX_16;
      if (cResult[6] !== sum) {
        class I {
          constructor() {
            obj = closure_1(closure_1_2[13]);
            trackResult = obj.track(closure_1_8.GIFTING_BADGE_INFO_ACTION_SHEET_OPENED);
            return;
          }
        }
        tmp19[0] = sum;
        class S {
          constructor() {
            return closure_1_5.useReducedMotion;
          }
        }
        cResult[7] = tmp19;
      } else {
        class I {
          constructor() {
            obj = closure_1(closure_1_2[13]);
            trackResult = obj.track(closure_1_8.GIFTING_BADGE_INFO_ACTION_SHEET_OPENED);
            return;
          }
        }
      }
      if (cResult[8] === tmp4.container) {
        class I {
          constructor() {
            obj = closure_1(closure_1_2[13]);
            trackResult = obj.track(closure_1_8.GIFTING_BADGE_INFO_ACTION_SHEET_OPENED);
            return;
          }
        }
        const _Symbol = Symbol;
        class S {
          constructor() {
            return closure_1_5.useReducedMotion;
          }
        }
        if (cResult[11] === Symbol.for("react.memo_cache_sentinel")) {
          class I {
            constructor() {
              obj = closure_1(closure_1_2[13]);
              trackResult = obj.track(closure_1_8.GIFTING_BADGE_INFO_ACTION_SHEET_OPENED);
              return;
            }
          }
          const stringResult = obj4.string(tmp5(2617)["0MB2C6"]);
          class S {
            constructor() {
              return closure_1_5.useReducedMotion;
            }
          }
          cResult[11] = stringResult;
        } else {
          class I {
            constructor() {
              obj = closure_1(closure_1_2[13]);
              trackResult = obj.track(closure_1_8.GIFTING_BADGE_INFO_ACTION_SHEET_OPENED);
              return;
            }
          }
        }
        if (cResult[12] !== tmp4.title) {
          class I {
            constructor() {
              obj = closure_1(closure_1_2[13]);
              trackResult = obj.track(closure_1_8.GIFTING_BADGE_INFO_ACTION_SHEET_OPENED);
              return;
            }
          }
          const obj2 = {
            style: tmp20,
            variant: "heading-xl/semibold",
            color: "text-strong",
            accessibilityRole: "header",
            children: null,
          };
          class S {
            constructor() {
              return closure_1_5.useReducedMotion;
            }
          }
          const tmp24 = closure_9(tmp(4892).Text, obj2);
          cResult[12] = tmp4.title;
          cResult[13] = tmp24;
        } else {
          class I {
            constructor() {
              obj = closure_1(closure_1_2[13]);
              trackResult = obj.track(closure_1_8.GIFTING_BADGE_INFO_ACTION_SHEET_OPENED);
              return;
            }
          }
        }
        const _Symbol2 = Symbol;
        if (cResult[14] === Symbol.for("react.memo_cache_sentinel")) {
          class I {
            constructor() {
              obj = closure_1(closure_1_2[13]);
              trackResult = obj.track(closure_1_8.GIFTING_BADGE_INFO_ACTION_SHEET_OPENED);
              return;
            }
          }
          const stringResult1 = obj6.string(tmp5(2617).k9sNVH);
          class S {
            constructor() {
              return closure_1_5.useReducedMotion;
            }
          }
          cResult[14] = stringResult1;
        } else {
          class I {
            constructor() {
              obj = closure_1(closure_1_2[13]);
              trackResult = obj.track(closure_1_8.GIFTING_BADGE_INFO_ACTION_SHEET_OPENED);
              return;
            }
          }
        }
        if (cResult[15] !== tmp4.description) {
          class I {
            constructor() {
              obj = closure_1(closure_1_2[13]);
              trackResult = obj.track(closure_1_8.GIFTING_BADGE_INFO_ACTION_SHEET_OPENED);
              return;
            }
          }
          let obj3 = { style: tmp4.description, variant: "text-md/medium", color: "text-default", children: null };
          class S {
            constructor() {
              return closure_1_5.useReducedMotion;
            }
          }
          const tmp28 = closure_9(tmp(4892).Text, obj3);
          cResult[15] = tmp4.description;
          cResult[16] = tmp28;
        } else {
          class I {
            constructor() {
              obj = closure_1(closure_1_2[13]);
              trackResult = obj.track(closure_1_8.GIFTING_BADGE_INFO_ACTION_SHEET_OPENED);
              return;
            }
          }
        }
        if (cResult[17] === tmp4.headerContainer) {
          class I {
            constructor() {
              obj = closure_1(closure_1_2[13]);
              trackResult = obj.track(closure_1_8.GIFTING_BADGE_INFO_ACTION_SHEET_OPENED);
              return;
            }
          }
        }
        const obj5 = { style: tmp4.headerContainer, children: null };
        const items3 = [tmp23, tmp27];
        obj5.children = items3;
        const tmp32 = closure_10(View, obj5);
        cResult[17] = tmp4.headerContainer;
        cResult[18] = tmp23;
        cResult[19] = tmp27;
        cResult[20] = tmp32;
      }
      const items4 = [tmp4.container, tmp19];
      cResult[8] = tmp4.container;
      cResult[9] = tmp19;
      cResult[10] = items4;
      const tmpResult2 = require("initialize");
    }
  : () => {
      const tmp = closure_11();
      _require = tmp;
      let items = [BadgeDirectoryStore];
      const stateFromStores = require("initialize").useStateFromStores(items, () =>
        badgeById.getBadgeById(closure_0(7866).BadgeId.GIFTING),
      );
      let obj = require("initialize");
      const items1 = [AccessibilityStore];
      importDefault = require("initialize").useStateFromStores(items1, () => useReducedMotion.useReducedMotion);
      const effect = noop.useEffect(() => {
        closure_1(1252).track(constants.GIFTING_BADGE_INFO_ACTION_SHEET_OPENED);
      }, []);
      let obj3 = { style: null, children: null };
      const items2 = [tmp.container];
      const obj2 = require("initialize");
      items2[1] = { paddingBottom: useSafeAreaInsetsDefault().bottom + nativeDefault.space.PX_16 };
      obj3.style = items2;
      const obj5 = { style: tmp.headerContainer, children: null };
      let obj6 = {
        style: tmp.title,
        variant: "heading-xl/semibold",
        color: "text-strong",
        accessibilityRole: "header",
        children: null,
      };
      let intl = require("util").intl;
      obj6.children = intl.string(_modDef2617["0MB2C6"]);
      const items3 = [closure_9(require("Text/Text").Text, obj6)];
      let obj7 = { style: tmp.description, variant: "text-md/medium", color: "text-default", children: null };
      const intl2 = require("util").intl;
      obj7.children = intl2.string(_modDef2617.k9sNVH);
      items3[1] = closure_9(require("Text/Text").Text, obj7);
      obj5.children = items3;
      const items4 = [closure_10(View, obj5)];
      const obj8 = { style: tmp.tierCards, children: null };
      let mapped;
      if (stateFromStores != null) {
        const tiers = stateFromStores.tiers;
        if (tiers != null) {
          mapped = tiers.map((children) => {
            if (closure_1) {
              let simple_icon_url2 = children.complex_icon_static_url;
              if (simple_icon_url2 == null) {
                simple_icon_url2 = children.simple_icon_url;
              }
              let simple_icon_url = simple_icon_url2;
            } else {
              simple_icon_url = children.complex_icon_animated_url;
              if (simple_icon_url == null) {
                simple_icon_url = children.complex_icon_static_url;
              }
              if (simple_icon_url == null) {
                simple_icon_url = children.simple_icon_url;
              }
            }
            const tmp3 = closure_7(children);
            const obj = {
              style: closure_0.tierCard,
              accessible: true,
              accessibilityLabel: GiftingBadgesUtils.getGiftingBadgeAccessibilityLabel(children),
              children: null,
            };
            let tmp9 = null != simple_icon_url;
            if (tmp9) {
              const obj3 = { style: closure_0.iconWrapper, children: null };
              const obj4 = { icon: simple_icon_url, size: 58 };
              obj3.children = options(GiftingBadgeIconDefault, obj4);
              tmp9 = options(View, obj3);
            }
            const items = [
              tmp9,
              options(Text_Text.Text, { variant: "text-lg/semibold", color: "text-strong", children: children.name }),
            ];
            let tmp12Result = null != tmp3;
            if (tmp12Result) {
              const obj6 = { variant: "text-md/normal", color: "text-subtle", children: null };
              const intl = util.intl;
              const obj7 = { count: tmp3 };
              obj6.children = intl.formatToPlainString(_modDef2617.qvx9E4, obj7);
              tmp12Result = options(Text_Text.Text, obj6);
            }
            items[2] = tmp12Result;
            obj.children = items;
            return v65535(View, obj, children.key);
          });
        }
      }
      const obj9 = { scrollable: false, startExpanded: true, children: null };
      obj8.children = mapped;
      items4[1] = closure_9(View, obj8);
      obj3.children = items4;
      obj9.children = closure_10(View, obj3);
      return closure_9(require("Sheet/BottomSheet").BottomSheet, obj9);
    };
