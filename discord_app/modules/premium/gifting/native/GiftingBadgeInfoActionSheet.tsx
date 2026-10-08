// === Module 10090: GiftingBadgeInfoActionSheet ===

// Module 10090 (GiftingBadgeInfoActionSheet)
import nativeDefault from "native" /* 587 */;
import util from "util" /* 1126 */;
import useSafeAreaInsetsDefault from "useSafeAreaInsets" /* 1630 */;
import _modDef2661 from "module_2661" /* 2661 */;
import Text_Text from "Text/Text" /* 5086 */;
import GiftingBadgesUtils from "GiftingBadgesUtils" /* 10085 */;
import GiftingBadgeIconDefault from "GiftingBadgeIcon" /* 10091 */;
import noop from "module_19" /* 19 */;
import AccessibilityStore from "AccessibilityStore" /* 5079 */;
import BadgeDirectoryStore from "BadgeDirectoryStore" /* 8292 */;

const require = globalThis.__r;

require = fn;
const View = fn(17).View;
let closure_7 = fn(8292).getSingleRequirementThreshold;
const AnalyticEvents = fn(1085).AnalyticEvents;
const jsxProd = fn(21);
({ jsx: closure_9, jsxs: c10 } = jsxProd);
const createStyles = fn(5090);
let obj2 = { container: { alignItems: "center", paddingTop: nativeDefault.space.PX_16, paddingHorizontal: nativeDefault.space.PX_16 }, headerContainer: null, title: null, description: null, tierCards: null, tierCard: null, iconWrapper: null };
let obj3 = { alignItems: "center", paddingTop: nativeDefault.space.PX_16, paddingHorizontal: nativeDefault.space.PX_16 };
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

export default ReactCompilerGating.isReactCompilerEnabled() ? (function GiftingBadgeInfoActionSheet() {
  const cResult = require("c").c(33);
  const tmp4 = closure_11();
  _require = tmp4;
  if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
    let items = [BadgeDirectoryStore];
    const fn = function x() {
      return badgeById.getBadgeById(closure_0(8284).BadgeId.GIFTING);
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
    const fn2 = function v() {
      return useReducedMotion.useReducedMotion;
    };
    cResult[2] = items1;
    cResult[3] = fn2;
    let tmp11 = fn2;
    let tmp10 = items1;
  } else {
    tmp10 = cResult[2];
    tmp11 = cResult[3];
  }
  const tmpResult = require("initialize");
  const stateFromStores1 = require("initialize").useStateFromStores(tmp10, tmp11);
  if (cResult[4] === Symbol.for("react.memo_cache_sentinel")) {
    class B {
      constructor() {
        obj = closure_1(closure_1_2[13]);
        trackResult = obj.track(closure_1_8.GIFTING_BADGE_INFO_ACTION_SHEET_OPENED);
        return;
      }
    }
    const items2 = [];
    cResult[4] = B;
    cResult[5] = items2;
    let tmp15 = items2;
  } else {
    class B {
      constructor() {
        obj = closure_1(closure_1_2[13]);
        trackResult = obj.track(closure_1_8.GIFTING_BADGE_INFO_ACTION_SHEET_OPENED);
        return;
      }
    }
    tmp15 = cResult[5];
  }
  const effect = noop.useEffect(B, tmp15);
  const sum = stateFromStores1(1630)().bottom + tmp5(587).space.PX_16;
  if (cResult[6] !== sum) {
    class B {
      constructor() {
        obj = closure_1(closure_1_2[13]);
        trackResult = obj.track(closure_1_8.GIFTING_BADGE_INFO_ACTION_SHEET_OPENED);
        return;
      }
    }
    tmp19[0] = sum;
    cResult[6] = sum;
    cResult[7] = tmp19;
  } else {
    class B {
      constructor() {
        obj = closure_1(closure_1_2[13]);
        trackResult = obj.track(closure_1_8.GIFTING_BADGE_INFO_ACTION_SHEET_OPENED);
        return;
      }
    }
  }
  if (cResult[8] === tmp4.container) {
    class B {
      constructor() {
        obj = closure_1(closure_1_2[13]);
        trackResult = obj.track(closure_1_8.GIFTING_BADGE_INFO_ACTION_SHEET_OPENED);
        return;
      }
    }
    const _Symbol = Symbol;
    ({ headerContainer, title } = tmp4);
    if (cResult[11] === Symbol.for("react.memo_cache_sentinel")) {
      class B {
        constructor() {
          obj = closure_1(closure_1_2[13]);
          trackResult = obj.track(closure_1_8.GIFTING_BADGE_INFO_ACTION_SHEET_OPENED);
          return;
        }
      }
      const stringResult = obj4.string(tmp5(2661)["0MB2C6"]);
      cResult[11] = stringResult;
      const tmp20 = stringResult;
    } else {
      class B {
        constructor() {
          obj = closure_1(closure_1_2[13]);
          trackResult = obj.track(closure_1_8.GIFTING_BADGE_INFO_ACTION_SHEET_OPENED);
          return;
        }
      }
    }
    if (cResult[12] !== tmp4.title) {
      class B {
        constructor() {
          obj = closure_1(closure_1_2[13]);
          trackResult = obj.track(closure_1_8.GIFTING_BADGE_INFO_ACTION_SHEET_OPENED);
          return;
        }
      }
      const obj2 = { style: title, variant: "heading-xl/semibold", color: "text-strong", accessibilityRole: "header", children: tmp20 };
      const tmp23 = closure_9(tmp(5086).Text, obj2);
      cResult[12] = tmp4.title;
      cResult[13] = tmp23;
    } else {
      class B {
        constructor() {
          obj = closure_1(closure_1_2[13]);
          trackResult = obj.track(closure_1_8.GIFTING_BADGE_INFO_ACTION_SHEET_OPENED);
          return;
        }
      }
    }
    const _Symbol2 = Symbol;
    if (cResult[14] === Symbol.for("react.memo_cache_sentinel")) {
      class B {
        constructor() {
          obj = closure_1(closure_1_2[13]);
          trackResult = obj.track(closure_1_8.GIFTING_BADGE_INFO_ACTION_SHEET_OPENED);
          return;
        }
      }
      const stringResult1 = obj6.string(tmp5(2661).k9sNVH);
      cResult[14] = stringResult1;
      const tmp24 = stringResult1;
    } else {
      class B {
        constructor() {
          obj = closure_1(closure_1_2[13]);
          trackResult = obj.track(closure_1_8.GIFTING_BADGE_INFO_ACTION_SHEET_OPENED);
          return;
        }
      }
    }
    if (cResult[15] !== tmp4.description) {
      class B {
        constructor() {
          obj = closure_1(closure_1_2[13]);
          trackResult = obj.track(closure_1_8.GIFTING_BADGE_INFO_ACTION_SHEET_OPENED);
          return;
        }
      }
      let obj3 = { style: tmp4.description, variant: "text-md/medium", color: "text-default", children: tmp24 };
      const tmp27 = closure_9(tmp(5086).Text, obj3);
      cResult[15] = tmp4.description;
      cResult[16] = tmp27;
    } else {
      class B {
        constructor() {
          obj = closure_1(closure_1_2[13]);
          trackResult = obj.track(closure_1_8.GIFTING_BADGE_INFO_ACTION_SHEET_OPENED);
          return;
        }
      }
    }
    if (cResult[17] === tmp4.headerContainer) {
      class B {
        constructor() {
          obj = closure_1(closure_1_2[13]);
          trackResult = obj.track(closure_1_8.GIFTING_BADGE_INFO_ACTION_SHEET_OPENED);
          return;
        }
      }
    }
    const obj5 = { style: headerContainer, children: null };
    const items3 = [tmp22, tmp26];
    obj5.children = items3;
    const tmp31 = closure_10(View, obj5);
    cResult[17] = tmp4.headerContainer;
    cResult[18] = tmp22;
    cResult[19] = tmp26;
    cResult[20] = tmp31;
  }
  const items4 = [tmp4.container, tmp19];
  cResult[8] = tmp4.container;
  cResult[9] = tmp19;
  cResult[10] = items4;
  const tmpResult2 = require("initialize");
}) : (function GiftingBadgeInfoActionSheet() {
  const tmp = closure_11();
  _require = tmp;
  let items = [BadgeDirectoryStore];
  const stateFromStores = require("initialize").useStateFromStores(items, () => badgeById.getBadgeById(closure_0(8284).BadgeId.GIFTING));
  let obj = require("initialize");
  const items1 = [AccessibilityStore];
  importDefault = require("initialize").useStateFromStores(items1, () => useReducedMotion.useReducedMotion);
  const effect = noop.useEffect(() => {
    closure_1(1264).track(constants.GIFTING_BADGE_INFO_ACTION_SHEET_OPENED);
  }, []);
  let obj3 = { style: null, children: null };
  const items2 = [tmp.container, ];
  const obj2 = require("initialize");
  items2[1] = { paddingBottom: useSafeAreaInsetsDefault().bottom + nativeDefault.space.PX_16 };
  obj3.style = items2;
  const obj5 = { style: tmp.headerContainer, children: null };
  let obj6 = { style: tmp.title, variant: "heading-xl/semibold", color: "text-strong", accessibilityRole: "header", children: null };
  let intl = require("util").intl;
  obj6.children = intl.string(_modDef2661["0MB2C6"]);
  const items3 = [closure_9(require("Text/Text").Text, obj6), ];
  let obj7 = { style: tmp.description, variant: "text-md/medium", color: "text-default", children: null };
  const intl2 = require("util").intl;
  obj7.children = intl2.string(_modDef2661.k9sNVH);
  items3[1] = closure_9(require("Text/Text").Text, obj7);
  obj5.children = items3;
  const items4 = [closure_10(View, obj5), ];
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
        const obj = { style: closure_0.tierCard, accessible: true, accessibilityLabel: GiftingBadgesUtils.getGiftingBadgeAccessibilityLabel(children), children: null };
        let tmp9 = null != simple_icon_url;
        if (tmp9) {
          const obj3 = { style: closure_0.iconWrapper, children: null };
          const obj4 = { icon: simple_icon_url, size: 58 };
          obj3.children = options(GiftingBadgeIconDefault, obj4);
          tmp9 = options(View, obj3);
        }
        const items = [tmp9, options(Text_Text.Text, { variant: "text-lg/semibold", color: "text-strong", children: children.name }), ];
        let tmp12Result = null != tmp3;
        if (tmp12Result) {
          const obj6 = { variant: "text-md/normal", color: "text-subtle", children: null };
          const intl = util.intl;
          const obj7 = { count: tmp3 };
          obj6.children = intl.formatToPlainString(_modDef2661.qvx9E4, obj7);
          tmp12Result = options(Text_Text.Text, obj6);
        }
        items[2] = tmp12Result;
        obj.children = items;
        return collapsed(View, obj, children.key);
      });
    }
  }
  const obj9 = { scrollable: false, startExpanded: true, children: null };
  obj8.children = mapped;
  items4[1] = closure_9(View, obj8);
  obj3.children = items4;
  obj9.children = closure_10(View, obj3);
  return closure_9(require("Sheet/BottomSheet").BottomSheet, obj9);
});