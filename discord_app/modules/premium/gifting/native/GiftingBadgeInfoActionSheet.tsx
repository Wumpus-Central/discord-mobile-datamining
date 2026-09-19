// === Module 11007: GiftingBadgeInfoActionSheet ===

// Module 11007 (GiftingBadgeInfoActionSheet)
import nativeDefault from "native" /* 576 */;
import util from "util" /* 1115 */;
import useSafeAreaInsetsDefault from "useSafeAreaInsets" /* 1612 */;
import _modDef2578 from "module_2578" /* 2578 */;
import Text_Text from "Text/Text" /* 4752 */;
import GiftingBadgeIconDefault from "GiftingBadgeIcon" /* 11008 */;
import noop from "module_19" /* 19 */;
import AccessibilityStore from "AccessibilityStore" /* 4748 */;
import BadgeDirectoryStore from "BadgeDirectoryStore" /* 8460 */;

const require = globalThis.__r;

require = fn;
const View = fn(17).View;
let closure_7 = fn(8460).getSingleRequirementThreshold;
const AnalyticEvents = fn(1074).AnalyticEvents;
const jsxProd = fn(21);
({ jsx: closure_9, jsxs: c10 } = jsxProd);
const createStyles = fn(4756);
let obj2 = { container: { alignItems: "center", paddingTop: nativeDefault.space.PX_16, paddingHorizontal: nativeDefault.space.PX_16 }, headerContainer: null, title: null, description: null, tierCards: null, tierCard: null, iconWrapper: null };
let obj3 = { alignItems: "center", paddingTop: nativeDefault.space.PX_16, paddingHorizontal: nativeDefault.space.PX_16 };
obj2.headerContainer = { paddingHorizontal: nativeDefault.space.PX_8 };
const obj4 = { paddingHorizontal: nativeDefault.space.PX_8 };
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
const size = fn(2);
const result = size.fileFinishedImporting("modules/premium/gifting/native/GiftingBadgeInfoActionSheet.tsx");

export default function GiftingBadgeInfoActionSheet() {
  const tmp = closure_11();
  _require = tmp;
  let items = [BadgeDirectoryStore];
  const stateFromStores = require("initialize").useStateFromStores(items, () => badgeById.getBadgeById(closure_0(8452).BadgeId.GIFTING));
  let obj = require("initialize");
  const items1 = [AccessibilityStore];
  importDefault = require("initialize").useStateFromStores(items1, () => useReducedMotion.useReducedMotion);
  const effect = noop.useEffect(() => {
    closure_1(1241).track(constants.GIFTING_BADGE_INFO_ACTION_SHEET_OPENED);
  }, []);
  let obj3 = { style: null, children: null };
  const items2 = [tmp.container, ];
  let obj2 = require("initialize");
  items2[1] = { paddingBottom: useSafeAreaInsetsDefault().bottom + nativeDefault.space.PX_16 };
  obj3.style = items2;
  let obj5 = { style: tmp.headerContainer, children: null };
  let obj6 = { style: tmp.title, variant: "heading-xl/semibold", color: "text-strong", accessibilityRole: "header", children: null };
  let intl = require("util").intl;
  obj6.children = intl.string(_modDef2578["0MB2C6"]);
  const items3 = [closure_9(require("Text/Text").Text, obj6), ];
  const obj7 = { style: tmp.description, variant: "text-md/medium", color: "text-default", children: null };
  const intl2 = require("util").intl;
  obj7.children = intl2.string(_modDef2578.k9sNVH);
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
        const obj = { style: closure_0.tierCard, children: null };
        let tmp7 = null != simple_icon_url;
        if (tmp7) {
          const obj2 = { style: tmp6.iconWrapper, children: null };
          const obj3 = { icon: simple_icon_url, size: 58 };
          obj2.children = React7(GiftingBadgeIconDefault, obj3);
          tmp7 = React7(View, obj2);
        }
        const items = [tmp7, React7(Text_Text.Text, { variant: "text-lg/semibold", color: "text-strong", children: children.name }), ];
        let tmp11Result = null != tmp3;
        if (tmp11Result) {
          const obj5 = { variant: "text-md/normal", color: "text-subtle", children: null };
          const intl = util.intl;
          const obj6 = { count: tmp3 };
          obj5.children = intl.formatToPlainString(_modDef2578.qvx9E4, obj6);
          tmp11Result = React7(Text_Text.Text, obj5);
        }
        items[2] = tmp11Result;
        obj.children = items;
        return closure_2_10(View, obj, children.key);
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