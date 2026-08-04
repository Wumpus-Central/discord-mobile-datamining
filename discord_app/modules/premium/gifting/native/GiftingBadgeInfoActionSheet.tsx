// discord_app/modules/premium/gifting/native/GiftingBadgeInfoActionSheet.tsx
import noop from "noop";
import { View } from "set";
import maybeApplyNoTextColorForLightCustomTheme from "maybeApplyNoTextColorForLightCustomTheme";
import map from "map";
import { getSingleRequirementThreshold as closure_7 } from "map";
import { AnalyticEvents } from "ME";
import jsxProd from "jsxProd";
import createCacheKey from "createCacheKey";

let c10;
let c9;
let require = arg1;
({ jsx: c9, jsxs: c10 } = jsxProd);
createCacheKey = { container: null, headerContainer: null, title: null, description: null, tierCards: null, tierCard: null, iconWrapper: null };
createCacheKey = { alignItems: "center", paddingTop: require("Themes").space.PX_16, paddingHorizontal: require("Themes").space.PX_16 };
createCacheKey[0] = createCacheKey;
createCacheKey[1] = { paddingHorizontal: require("Themes").space.PX_8 };
let obj1 = { paddingHorizontal: require("Themes").space.PX_8 };
createCacheKey[2] = { textAlign: "center", marginBottom: require("Themes").space.PX_8 };
let obj2 = { textAlign: "center", marginBottom: require("Themes").space.PX_8 };
createCacheKey[3] = { textAlign: "center", marginBottom: require("Themes").space.PX_16 };
let obj3 = { textAlign: "center", marginBottom: require("Themes").space.PX_16 };
createCacheKey[4] = { flexDirection: "row", flexWrap: "wrap", rowGap: require("Themes").space.PX_8 };
let obj4 = { flexDirection: "row", flexWrap: "wrap", rowGap: require("Themes").space.PX_8 };
createCacheKey[5] = { width: "33.33%", alignItems: "center", padding: require("Themes").space.PX_8 };
let obj5 = { width: "33.33%", alignItems: "center", padding: require("Themes").space.PX_8 };
createCacheKey[6] = { paddingVertical: require("Themes").space.PX_8 };
createCacheKey = createCacheKey.createStyles(createCacheKey);
const obj6 = { paddingVertical: require("Themes").space.PX_8 };
const result = require("maybeApplyNoTextColorForLightCustomTheme").fileFinishedImporting("modules/premium/gifting/native/GiftingBadgeInfoActionSheet.tsx");

export default function GiftingBadgeInfoActionSheet() {
  const tmp = createCacheKey();
  const require = tmp;
  let obj = require(589) /* initialize */;
  let items = [map];
  const stateFromStores = obj.useStateFromStores(items, () => badgeById.getBadgeById(tmp(8110).BadgeId.GIFTING));
  let obj1 = require(589) /* initialize */;
  const items1 = [maybeApplyNoTextColorForLightCustomTheme];
  const importDefault = obj1.useStateFromStores(items1, () => useReducedMotion.useReducedMotion);
  const effect = React.useEffect(() => {
    callback(698).track(constants.GIFTING_BADGE_INFO_ACTION_SHEET_OPENED);
  }, []);
  obj = { style: null, children: null };
  const items2 = [tmp.container, ];
  obj = { paddingBottom: null };
  obj[0] = importDefault(1581)().bottom + importDefault(712).space.PX_16;
  items2[1] = obj;
  obj[0] = items2;
  obj1 = { style: tmp.headerContainer, children: null };
  let obj2 = { style: tmp.title, variant: "heading-xl/semibold", color: "text-strong", accessibilityRole: "header", children: null };
  let intl = require(1236) /* getSystemLocale */.intl;
  obj2[4] = intl.string(importDefault(2321)["0MB2C6"]);
  const items3 = [callback(require(4189) /* Text */.Text, obj2), ];
  let obj3 = { style: tmp.description, variant: "text-md/medium", color: "text-default", children: null };
  const intl2 = require(1236) /* getSystemLocale */.intl;
  obj3[3] = intl2.string(importDefault(2321).k9sNVH);
  items3[1] = callback(require(4189) /* Text */.Text, obj3);
  obj1[1] = items3;
  const items4 = [callback2(View, obj1), ];
  const obj4 = { style: tmp.tierCards, children: null };
  let mapped;
  if (stateFromStores != null) {
    const tiers = stateFromStores.tiers;
    if (tiers != null) {
      mapped = tiers.map((children) => {
        if (callback) {
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
        const tmp3 = outer1_7(children);
        let obj = { style: tmp.tierCard, children: null };
        let tmp7 = null != simple_icon_url;
        if (tmp7) {
          obj = { style: null, children: null };
          obj[0] = tmp6.iconWrapper;
          obj = { icon: null, size: 58 };
          obj[0] = simple_icon_url;
          obj[1] = outer1_9(callback(outer1_2[16]), obj);
          tmp7 = outer1_9(tmp5, obj);
        }
        const items = [tmp7, outer1_9(tmp(outer1_2[13]).Text, { variant: "text-lg/semibold", color: "text-strong", children: children.name }), ];
        let tmp11Result = null != tmp3;
        if (tmp11Result) {
          const obj2 = { variant: "text-md/normal", color: "text-subtle", children: null };
          const intl = tmp12(tmp13[14]).intl;
          const obj3 = { count: null };
          obj3[0] = tmp3;
          obj2[2] = intl.formatToPlainString(callback(tmp13[15]).qvx9E4, obj3);
          tmp11Result = outer1_9(tmp12(tmp13[13]).Text, obj2);
        }
        items[2] = tmp11Result;
        obj[1] = items;
        return outer1_10(outer1_4, obj, children.key);
      });
    }
  }
  const obj5 = { scrollable: false, startExpanded: true, children: null };
  obj4[1] = mapped;
  items4[1] = callback(View, obj4);
  obj[1] = items4;
  obj5[2] = callback2(View, obj);
  return callback(require(5247) /* Background */.BottomSheet, obj5);
};