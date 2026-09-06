// === Module 10748: GiftingBadgeInfoActionSheet ===

// Module 10748 (GiftingBadgeInfoActionSheet)
import nativeDefault from "native" /* 576 */;
import util from "util" /* 1114 */;
import useSafeAreaInsetsDefault from "useSafeAreaInsets" /* 1611 */;
import _modDef2492 from "module_2492" /* 2492 */;
import Text_Text from "Text/Text" /* 4556 */;
import GiftingBadgeIconDefault from "GiftingBadgeIcon" /* 10749 */;
import noop from "module_19" /* 19 */;
import AccessibilityStore from "AccessibilityStore" /* 4552 */;
import BadgeDirectoryStore from "BadgeDirectoryStore" /* 8192 */;

require = fn;
const View = fn(17).View;
let closure_7 = fn(8192).getSingleRequirementThreshold;
const AnalyticEvents = fn(1074).AnalyticEvents;
const jsxProd = fn(21);
({ jsx: closure_9, jsxs: c10 } = jsxProd);
fn(4560);
let createStyles = { container: null, headerContainer: null, title: null, description: null, tierCards: null, tierCard: null, iconWrapper: null };
createStyles = { alignItems: "center", paddingTop: nativeDefault.space.PX_16, paddingHorizontal: nativeDefault.space.PX_16 };
createStyles.container = createStyles;
createStyles.headerContainer = { paddingHorizontal: nativeDefault.space.PX_8 };
let obj1 = { paddingHorizontal: nativeDefault.space.PX_8 };
createStyles.title = { textAlign: "center", marginBottom: nativeDefault.space.PX_8 };
let obj2 = { textAlign: "center", marginBottom: nativeDefault.space.PX_8 };
createStyles.description = { textAlign: "center", marginBottom: nativeDefault.space.PX_16 };
let obj3 = { textAlign: "center", marginBottom: nativeDefault.space.PX_16 };
createStyles.tierCards = { flexDirection: "row", flexWrap: "wrap", rowGap: nativeDefault.space.PX_8 };
let obj4 = { flexDirection: "row", flexWrap: "wrap", rowGap: nativeDefault.space.PX_8 };
createStyles.tierCard = { width: "33.33%", alignItems: "center", padding: nativeDefault.space.PX_8 };
let obj5 = { width: "33.33%", alignItems: "center", padding: nativeDefault.space.PX_8 };
createStyles.iconWrapper = { paddingVertical: nativeDefault.space.PX_8 };
let closure_11 = createStyles.createStyles(createStyles);
const size = fn(2);
const result = size.fileFinishedImporting("modules/premium/gifting/native/GiftingBadgeInfoActionSheet.tsx");

export default function GiftingBadgeInfoActionSheet() {
  const tmp = closure_11();
  _require = tmp;
  let obj = require("initialize");
  let items = [BadgeDirectoryStore];
  const stateFromStores = obj.useStateFromStores(items, () => badgeById.getBadgeById(closure_0(8184).BadgeId.GIFTING));
  let obj1 = require("initialize");
  const items1 = [AccessibilityStore];
  importDefault = obj1.useStateFromStores(items1, () => useReducedMotion.useReducedMotion);
  const effect = noop.useEffect(() => {
    closure_1(1242).track(constants.GIFTING_BADGE_INFO_ACTION_SHEET_OPENED);
  }, []);
  obj = { style: null, children: null };
  const items2 = [tmp.container, ];
  obj = { paddingBottom: useSafeAreaInsetsDefault().bottom + nativeDefault.space.PX_16 };
  items2[1] = obj;
  obj.style = items2;
  obj1 = { style: tmp.headerContainer, children: null };
  let obj2 = { style: tmp.title, variant: "heading-xl/semibold", color: "text-strong", accessibilityRole: "header", children: null };
  let intl = require("util").intl;
  obj2.children = intl.string(_modDef2492["0MB2C6"]);
  const items3 = [closure_9(require("Text/Text").Text, obj2), ];
  let obj3 = { style: tmp.description, variant: "text-md/medium", color: "text-default", children: null };
  const intl2 = require("util").intl;
  obj3.children = intl2.string(_modDef2492.k9sNVH);
  items3[1] = closure_9(require("Text/Text").Text, obj3);
  obj1.children = items3;
  const items4 = [closure_10(View, obj1), ];
  const obj4 = { style: tmp.tierCards, children: null };
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
        let obj = { style: closure_0.tierCard, children: null };
        let tmp7 = null != simple_icon_url;
        if (tmp7) {
          obj = { style: tmp6.iconWrapper, children: null };
          obj = { icon: simple_icon_url, size: 58 };
          obj.children = React7(GiftingBadgeIconDefault, obj);
          tmp7 = React7(View, obj);
        }
        const items = [tmp7, React7(Text_Text.Text, { variant: "text-lg/semibold", color: "text-strong", children: children.name }), ];
        let tmp11Result = null != tmp3;
        if (tmp11Result) {
          const obj2 = { variant: "text-md/normal", color: "text-subtle", children: null };
          const intl = util.intl;
          const obj3 = { count: tmp3 };
          obj2.children = intl.formatToPlainString(_modDef2492.qvx9E4, obj3);
          tmp11Result = React7(Text_Text.Text, obj2);
        }
        items[2] = tmp11Result;
        obj.children = items;
        return closure_2_10(View, obj, children.key);
      });
    }
  }
  const obj5 = { scrollable: false, startExpanded: true, children: null };
  obj4.children = mapped;
  items4[1] = closure_9(View, obj4);
  obj.children = items4;
  obj5.children = closure_10(View, obj);
  return closure_9(require("Sheet/BottomSheet").BottomSheet, obj5);
};