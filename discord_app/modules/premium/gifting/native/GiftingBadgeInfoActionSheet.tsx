// === Module 10493: GiftingBadgeInfoActionSheet ===

// Module 10493 (GiftingBadgeInfoActionSheet)
import react_native from "react-native" /* 17 */;
import nativeDefault from "native" /* 587 */;
import Constants from "Constants" /* 1085 */;
import intl3 from "intl" /* 1126 */;
import useSafeAreaInsetsDefault from "useSafeAreaInsets" /* 1618 */;
import _modDef2617 from "module_2617" /* 2617 */;
import Text_Text from "Text/Text" /* 4892 */;
import BadgeDirectoryStore2 from "BadgeDirectoryStore" /* 7874 */;
import GiftingBadgesUtils from "GiftingBadgesUtils" /* 10488 */;
import GiftingBadgeIconDefault from "GiftingBadgeIcon" /* 10494 */;
import react from "react" /* 19 */;
import AccessibilityStore from "AccessibilityStore" /* 4885 */;
import Fragment from "Fragment" /* 21 */;
import createStyles_mod from "createStyles" /* 4896 */;
import ReactCompilerGating from "ReactCompilerGating" /* 558 */;
import size from "module_2" /* 2 */;

const require = globalThis.__r;
const BadgeDirectoryStore = BadgeDirectoryStore2;
let BottomSheet, _require, importDefault;

let c10;
let c9;
let obj2;
let obj3;
let obj4;
let obj5;
let obj6;
let obj7;
let obj8;
const View = react_native.View;
let closure_7 = BadgeDirectoryStore2.getSingleRequirementThreshold;
const AnalyticEvents = Constants.AnalyticEvents;
({ jsx: c9, jsxs: c10 } = Fragment);
let createStyles = createStyles_mod;
let obj = { container: obj2, headerContainer: obj3, title: obj4, description: obj5, tierCards: obj6, tierCard: obj7, iconWrapper: obj8 };
obj2 = { alignItems: "center", paddingTop: nativeDefault.space.PX_16, paddingHorizontal: nativeDefault.space.PX_16 };
createStyles = createStyles.createStyles;
obj3 = { paddingHorizontal: nativeDefault.space.PX_8 };
obj4 = { textAlign: "center", marginBottom: nativeDefault.space.PX_8 };
obj5 = { textAlign: "center", marginBottom: nativeDefault.space.PX_16 };
obj6 = { flexDirection: "row", flexWrap: "wrap", rowGap: nativeDefault.space.PX_8 };
obj7 = { width: "33.33%", alignItems: "center", padding: nativeDefault.space.PX_8 };
obj8 = { paddingVertical: nativeDefault.space.PX_8 };
let closure_11 = createStyles(obj);
let tmp4 = ReactCompilerGating.isReactCompilerEnabled() ? (() => {
  let badgeById;
  let closure_0;
  let items3;
  let obj4;
  let obj6;
  let stateFromStores1;
  let tmp10;
  let tmp11;
  let tmp15;
  let tmp6;
  let tmp7;
  let useReducedMotion;
  let obj = require("react");
  const cResult = obj.c(33);
  let tmp4 = closure_11();
  _require = tmp4;
  const bottom = stateFromStores1(1618)().bottom;
  if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
    let items = [BadgeDirectoryStore];
    const fn = function x() {
      return badgeById.getBadgeById(closure_0(dependencyMap[11]).BadgeId.GIFTING);
    };
    cResult[0] = items;
    cResult[1] = fn;
    tmp6 = items;
    tmp7 = fn;
  } else {
    [tmp6, tmp7] = cResult;
  }
  const tmpResult = require("get initialized");
  const stateFromStores = tmpResult.useStateFromStores(tmp6, tmp7);
  if (cResult[2] === Symbol.for("react.memo_cache_sentinel")) {
    const items1 = [AccessibilityStore];
    class S {
      constructor() {
        return useReducedMotion.useReducedMotion;
      }
    }
    cResult[2] = items1;
    cResult[3] = S;
    tmp11 = S;
    tmp10 = items1;
  } else {
    tmp10 = cResult[2];
    tmp11 = cResult[3];
  }
  const tmpResult2 = require("get initialized");
  stateFromStores1 = tmpResult2.useStateFromStores(tmp10, tmp11);
  if (cResult[4] === Symbol.for("react.memo_cache_sentinel")) {
    class I {
      constructor() {
        const obj = stateFromStores1(dependencyMap[13]);
        obj.track(constants.GIFTING_BADGE_INFO_ACTION_SHEET_OPENED);
      }
    }
    const items2 = [];
    class S {
      constructor() {
        return useReducedMotion.useReducedMotion;
      }
    }
    cResult[5] = items2;
    tmp15 = items2;
  } else {
    class I {
      constructor() {
        const obj = stateFromStores1(dependencyMap[13]);
        obj.track(constants.GIFTING_BADGE_INFO_ACTION_SHEET_OPENED);
      }
    }
    tmp15 = cResult[5];
  }
  const effect = react.useEffect(I, tmp15);
  const sum = bottom + tmp5(587).space.PX_16;
  if (cResult[6] !== sum) {
    class I {
      constructor() {
        const obj = stateFromStores1(dependencyMap[13]);
        obj.track(constants.GIFTING_BADGE_INFO_ACTION_SHEET_OPENED);
      }
    }
    tmp19[0] = sum;
    class S {
      constructor() {
        return useReducedMotion.useReducedMotion;
      }
    }
    cResult[7] = tmp19;
  } else {
    class I {
      constructor() {
        const obj = stateFromStores1(dependencyMap[13]);
        obj.track(constants.GIFTING_BADGE_INFO_ACTION_SHEET_OPENED);
      }
    }
  }
  if (cResult[8] === tmp4.container) {
    class I {
      constructor() {
        const obj = stateFromStores1(dependencyMap[13]);
        obj.track(constants.GIFTING_BADGE_INFO_ACTION_SHEET_OPENED);
      }
    }
    const _Symbol = Symbol;
    const headerContainer = tmp4.headerContainer;
    class S {
      constructor() {
        return useReducedMotion.useReducedMotion;
      }
    }
    if (cResult[11] === Symbol.for("react.memo_cache_sentinel")) {
      class I {
        constructor() {
          const obj = stateFromStores1(dependencyMap[13]);
          obj.track(constants.GIFTING_BADGE_INFO_ACTION_SHEET_OPENED);
        }
      }
      const stringResult = obj4.string(stateFromStores1(2617)["0MB2C6"]);
      class S {
        constructor() {
          return useReducedMotion.useReducedMotion;
        }
      }
      cResult[11] = stringResult;
    } else {
      class I {
        constructor() {
          const obj = stateFromStores1(dependencyMap[13]);
          obj.track(constants.GIFTING_BADGE_INFO_ACTION_SHEET_OPENED);
        }
      }
    }
    if (cResult[12] !== tmp4.title) {
      class I {
        constructor() {
          const obj = stateFromStores1(dependencyMap[13]);
          obj.track(constants.GIFTING_BADGE_INFO_ACTION_SHEET_OPENED);
        }
      }
      let obj2 = { style: tmp20, variant: "heading-xl/semibold", color: "text-strong", accessibilityRole: "header", children: null };
      class S {
        constructor() {
          return useReducedMotion.useReducedMotion;
        }
      }
      cResult[12] = tmp4.title;
      cResult[13] = closure_9(require("Text/Text").Text, obj2);
      const tmp24 = closure_9(require("Text/Text").Text, obj2);
    } else {
      class I {
        constructor() {
          const obj = stateFromStores1(dependencyMap[13]);
          obj.track(constants.GIFTING_BADGE_INFO_ACTION_SHEET_OPENED);
        }
      }
    }
    const _Symbol2 = Symbol;
    const description = tmp4.description;
    if (cResult[14] === Symbol.for("react.memo_cache_sentinel")) {
      class I {
        constructor() {
          const obj = stateFromStores1(dependencyMap[13]);
          obj.track(constants.GIFTING_BADGE_INFO_ACTION_SHEET_OPENED);
        }
      }
      const stringResult1 = obj6.string(stateFromStores1(2617).k9sNVH);
      class S {
        constructor() {
          return useReducedMotion.useReducedMotion;
        }
      }
      cResult[14] = stringResult1;
    } else {
      class I {
        constructor() {
          const obj = stateFromStores1(dependencyMap[13]);
          obj.track(constants.GIFTING_BADGE_INFO_ACTION_SHEET_OPENED);
        }
      }
    }
    if (cResult[15] !== tmp4.description) {
      class I {
        constructor() {
          const obj = stateFromStores1(dependencyMap[13]);
          obj.track(constants.GIFTING_BADGE_INFO_ACTION_SHEET_OPENED);
        }
      }
      let obj3 = { style: description, variant: "text-md/medium", color: "text-default", children: null };
      class S {
        constructor() {
          return useReducedMotion.useReducedMotion;
        }
      }
      cResult[15] = tmp4.description;
      cResult[16] = closure_9(require("Text/Text").Text, obj3);
      const tmp28 = closure_9(require("Text/Text").Text, obj3);
    } else {
      class I {
        constructor() {
          const obj = stateFromStores1(dependencyMap[13]);
          obj.track(constants.GIFTING_BADGE_INFO_ACTION_SHEET_OPENED);
        }
      }
    }
    if (cResult[17] === tmp4.headerContainer) {
      class I {
        constructor() {
          const obj = stateFromStores1(dependencyMap[13]);
          obj.track(constants.GIFTING_BADGE_INFO_ACTION_SHEET_OPENED);
        }
      }
    }
    let obj5 = { style: headerContainer, children: items3 };
    items3 = [tmp23, tmp27];
    cResult[17] = tmp4.headerContainer;
    cResult[18] = tmp23;
    cResult[19] = tmp27;
    cResult[20] = closure_10(View, obj5);
    const tmp32 = closure_10(View, obj5);
  }
  const items4 = [tmp4.container, tmp19];
  cResult[8] = tmp4.container;
  cResult[9] = tmp19;
  cResult[10] = items4;
}) : (() => {
  let badgeById;
  let closure_0;
  let closure_1;
  let intl;
  let intl2;
  let items2;
  let items3;
  let items4;
  let mapped;
  let useReducedMotion;
  const tmp = closure_11();
  _require = tmp;
  const bottom = useSafeAreaInsetsDefault().bottom;
  let obj = require("get initialized");
  let items = [BadgeDirectoryStore];
  const stateFromStores = obj.useStateFromStores(items, () => badgeById.getBadgeById(closure_0(dependencyMap[11]).BadgeId.GIFTING));
  let obj2 = require("get initialized");
  const items1 = [AccessibilityStore];
  importDefault = obj2.useStateFromStores(items1, () => useReducedMotion.useReducedMotion);
  const effect = react.useEffect(() => {
    const obj = closure_1(dependencyMap[13]);
    obj.track(constants.GIFTING_BADGE_INFO_ACTION_SHEET_OPENED);
  }, []);
  let obj3 = { style: items2, children: items4 };
  items2 = [tmp.container, ];
  let obj4 = { paddingBottom: bottom + nativeDefault.space.PX_16 };
  BottomSheet = require("Sheet/BottomSheet").BottomSheet;
  items2[1] = obj4;
  let obj5 = { style: tmp.headerContainer, children: items3 };
  let obj6 = { style: tmp.title, variant: "heading-xl/semibold", color: "text-strong", accessibilityRole: "header", children: intl.string(_modDef2617["0MB2C6"]) };
  let Text = require("Text/Text").Text;
  intl = require("intl").intl;
  items3 = [closure_9(Text, obj6), ];
  let obj7 = { style: tmp.description, variant: "text-md/medium", color: "text-default", children: intl2.string(_modDef2617.k9sNVH) };
  const Text2 = require("Text/Text").Text;
  intl2 = require("intl").intl;
  items3[1] = closure_9(Text2, obj7);
  items4 = [closure_10(View, obj5), ];
  const obj8 = { style: tmp.tierCards, children: mapped };
  mapped = undefined;
  if (stateFromStores != null) {
    const tiers = stateFromStores.tiers;
    if (tiers != null) {
      mapped = tiers.map((children) => {
        let intl;
        let items;
        let obj2;
        let obj4;
        let obj7;
        let simple_icon_url;
        if (closure_1) {
          let simple_icon_url2 = children.complex_icon_static_url;
          if (simple_icon_url2 == null) {
            simple_icon_url2 = children.simple_icon_url;
          }
          simple_icon_url = simple_icon_url2;
        } else {
          simple_icon_url = children.complex_icon_animated_url;
          if (simple_icon_url == null) {
            simple_icon_url = children.complex_icon_static_url;
          }
          if (simple_icon_url == null) {
            simple_icon_url = children.simple_icon_url;
          }
        }
        const tmp4 = closure_7(children);
        const obj = { style: closure_0.tierCard, accessible: true, accessibilityLabel: obj2.getGiftingBadgeAccessibilityLabel(children), children: items };
        let tmp10 = null != simple_icon_url;
        obj2 = GiftingBadgesUtils;
        if (tmp10) {
          const obj3 = { style: closure_0.iconWrapper, children: React4(GiftingBadgeIconDefault, obj4) };
          obj4 = { icon: simple_icon_url, size: 58 };
          tmp10 = React4(View, obj3);
        }
        items = [tmp10, , ];
        const obj5 = { variant: "text-lg/semibold", color: "text-strong", children: children.name };
        items[1] = React4(Text_Text.Text, obj5);
        let tmp13Result = null != tmp4;
        if (tmp13Result) {
          const obj6 = { variant: "text-md/normal", color: "text-subtle", children: intl.formatToPlainString(_modDef2617.qvx9E4, obj7) };
          const Text = Text_Text.Text;
          intl = intl3.intl;
          obj7 = { count: tmp4 };
          tmp13Result = React4(Text, obj6);
        }
        items[2] = tmp13Result;
        return authStore(View, obj, children.key);
      });
    }
  }
  const obj9 = { scrollable: false, startExpanded: true, children: closure_10(View, obj3) };
  items4[1] = closure_9(View, obj8);
  return closure_9(BottomSheet, obj9);
});
const result = size.fileFinishedImporting("modules/premium/gifting/native/GiftingBadgeInfoActionSheet.tsx");

export default tmp4;