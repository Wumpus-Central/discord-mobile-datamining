// === Module 7988: LHeading ===

// Module 7988 (LHeading)
import importAllResult from "getLocalizedLink";
import get_ActivityIndicator from "XNeutralIcon";
import _getSystemLocale from "_getSystemLocale";
import ME from "ME";
import jsxProd from "InstagramNeutralIcon";
import createCacheKey from "createCacheKey";

let Fonts;
let StyleSheet;
let c10;
let c4;
let c5;
let c9;
let error;
let metroImportAll;
let unpackModuleId;
const require = arg1;
function LHeading(children) {
  let obj = { style: callback2().lheading, children: null };
  let _require = true;
  let combined;
  if (null != children.className) {
    const parts = str.split(" ");
    const mapped = parts.map((arg0) => {
      if ("marginTop" === arg0) {
        let obj = { marginTop: 10 };
      } else if (c0) {
        obj = { color: null };
        obj[0] = outer1_12[arg0];
      } else {
        obj = { backgroundColor: null };
        obj[0] = outer1_12[arg0];
      }
      return obj;
    });
    combined = mapped.concat(tmp5);
  }
  const items = [closure_10(_require(1297).LegacyText, { accessibilityRole: "header", style: combined, children: children.children }), ];
  _require = false;
  let combined1;
  if (null != children.className) {
    const parts1 = str.split(" ");
    const mapped1 = parts1.map((arg0) => {
      if ("marginTop" === arg0) {
        let obj = { marginTop: 10 };
      } else if (c0) {
        obj = { color: null };
        obj[0] = outer1_12[arg0];
      } else {
        obj = { backgroundColor: null };
        obj[0] = outer1_12[arg0];
      }
      return obj;
    });
    combined1 = mapped1.concat(tmp7);
  }
  items[1] = closure_10(closure_4, { style: combined1 });
  obj[1] = items;
  return closure_11(closure_4, obj);
}
function LinkInner(target) {
  let changelogId;
  let children;
  let className;
  target = target.target;
  let changelog;
  ({ changelogId, className, children } = target);
  let obj = target(647);
  const items = [_getSystemLocale];
  const stateFromStores = obj.useStateFromStores(items, () => locale.locale);
  changelog = target(7989).useChangelog(changelogId, stateFromStores).changelog;
  obj = {
    accessibilityRole: "link",
    style: className,
    onPress() {
      let obj = changelog(outer1_2[10]);
      let date;
      if (changelog != null) {
        date = tmp3.date;
      }
      if (date == null) {
        const _Date = Date;
        const str = new Date();
        date = str.toString();
      }
      let num;
      if (changelog != null) {
        num = tmp3.revision;
      }
      if (num == null) {
        num = 1;
      }
      obj = { change_log_id: "" + date + ":" + num, cta_type: "inline_link", target };
      obj.track(outer1_9.CHANGE_LOG_CTA_CLICKED, obj);
      const tmp = changelog;
      const tmpResult = changelog(outer1_2[11]);
      tmpResult.openURL(target(outer1_2[12]).sanitizeUrl(target));
    },
    children
  };
  return callback(target(1297).LegacyText, obj);
}
let c3 = importAllResult;
({ View: c4, ScrollView: c5, StyleSheet } = get_ActivityIndicator);
({ LocalizedLinks: error, SOCIAL_LINKS: metroImportAll, AnalyticEvents: c9, Fonts } = ME);
({ jsx: c10, jsxs: unpackModuleId } = jsxProd);
let obj = { added: require("Themes").unsafe_rawColors.GREEN_360, fixed: require("Themes").unsafe_rawColors.RED_400, progress: require("Themes").unsafe_rawColors.YELLOW_300, improved: require("Themes").unsafe_rawColors.BRAND_500 };
obj = { flex: { flex: 1 }, container: null, footer: null, scrollViewContainer: null, lheading: null, lheadingText: null, lheadingLine: null, bulletPoint: null, listItem: null, listText: null };
obj[1] = { padding: 18, backgroundColor: require("Themes").colors.BACKGROUND_BASE_LOW };
createCacheKey = { flexDirection: "row", justifyContent: "center", borderTopWidth: StyleSheet.hairlineWidth, backgroundColor: require("Themes").colors.BACKGROUND_SURFACE_HIGH, borderTopColor: require("Themes").colors.BORDER_STRONG, gap: require("Themes").space.PX_12, paddingHorizontal: 18, paddingVertical: require("Themes").space.PX_12 };
obj[2] = createCacheKey;
obj[3] = { flex: 1 };
obj[4] = { marginBottom: 14, flexDirection: "row", alignItems: "center" };
obj[5] = { fontSize: 16, fontFamily: Fonts.PRIMARY_SEMIBOLD };
obj[6] = { flexGrow: 1, flexShrink: 1, flexBasis: "auto", marginLeft: 10, height: 2 };
let obj1 = { padding: 18, backgroundColor: require("Themes").colors.BACKGROUND_BASE_LOW };
obj[7] = { width: 7, height: 7, borderRadius: 3.5, marginRight: 13, marginTop: 7, backgroundColor: require("Themes").colors.BACKGROUND_MOD_STRONG };
obj[8] = { flexDirection: "row", marginLeft: 4, marginBottom: 8 };
let obj3 = { width: 7, height: 7, borderRadius: 3.5, marginRight: 13, marginTop: 7, backgroundColor: require("Themes").colors.BACKGROUND_MOD_STRONG };
obj[9] = { color: require("Themes").colors.TEXT_DEFAULT, fontSize: 14, lineHeight: 18, flex: 1 };
let closure_13 = createCacheKey.createStyles(obj);
const memoResult = importAllResult.memo((children) => {
  children = children.children;
  const tmp = callback2();
  let obj = { style: tmp.listItem, children: null };
  obj = { style: tmp.bulletPoint };
  const items = [callback(closure_4, obj), ];
  obj = { style: tmp.listText, children: null };
  let childrenResult = children;
  if (typeof children !== "HAS_APPLICATION") {
    const obj1 = { style: null };
    obj1[0] = tmp.listText;
    childrenResult = children(obj1);
  }
  obj[1] = childrenResult;
  items[1] = callback(closure_4, obj);
  obj[1] = items;
  return closure_11(closure_4, obj);
});
let obj4 = { color: require("Themes").colors.TEXT_DEFAULT, fontSize: 14, lineHeight: 18, flex: 1 };
const memoResult1 = importAllResult.memo((video) => {
  let changeLog;
  let onScroll;
  ({ changeLog, onScroll } = video);
  let id = onScroll;
  const tmp = callback2();
  const items = [onScroll];
  let obj = { style: tmp.flex, children: null };
  obj = {
    contentContainerStyle: tmp.container,
    style: tmp.scrollViewContainer,
    onScroll: importAllResult.useCallback((nativeEvent) => {
      id(nativeEvent.nativeEvent);
    }, items),
    scrollEventThrottle: 3,
    children: null
  };
  const items1 = [video.video, ];
  let obj2 = importDefault(4245);
  id = changeLog.id;
  let obj3 = importDefault(7991);
  {
    obj = { components: null };
    const obj1 = { Link: null, ListItem: null, LHeading: null, Heading: null };
    obj1[0] = (arg0) => {
      const obj = {};
      const merged = Object.assign(arg0);
      obj.changelogId = id;
      return outer1_10(outer1_16, obj);
    };
    obj1[1] = closure_15;
    obj1[2] = LHeading;
    obj1[3] = LHeading;
    obj[0] = obj1;
    const defaultRules = obj3.getDefaultRules(obj);
  }
  items1[1] = obj2.reactParserFor(defaultRules)(changeLog.body, false);
  obj[4] = items1;
  const items2 = [closure_11(closure_5, obj), ];
  obj2 = { bottom: true, style: tmp.footer, children: null };
  obj3 = { size: "sm", variant: "tertiary", accessibilityRole: "link", icon: null, accessibilityLabel: null, onPress: null };
  obj3[3] = callback(id(7993).XNeutralIcon, { size: "sm", color: "interactive-icon-default" });
  const intl = id(1236).intl;
  obj3[4] = intl.string(id(1236).t["/lXfom"]);
  obj3[5] = function onPress() {
    callback(3952).openURL(callback(3867)(constants.TWITTER));
  };
  const items3 = [callback(id(7660).IconButton, obj3), , ];
  const obj4 = { size: "sm", variant: "tertiary", accessibilityRole: "link", icon: null, accessibilityLabel: null, onPress: null };
  obj4[3] = callback(id(7995).FacebookNeutralIcon, { size: "sm", color: "interactive-icon-default" });
  const intl2 = id(1236).intl;
  obj4[4] = intl2.string(id(1236).t["h0or/l"]);
  obj4[5] = function onPress() {
    callback(3952).openURL(constants2.FACEBOOK_URL);
  };
  items3[1] = callback(id(7660).IconButton, obj4);
  const obj5 = { size: "sm", variant: "tertiary", accessibilityRole: "link", icon: null, accessibilityLabel: null, onPress: null };
  obj5[3] = callback(id(7997).InstagramNeutralIcon, { size: "sm", color: "interactive-icon-default" });
  const intl3 = id(1236).intl;
  obj5[4] = intl3.string(id(1236).t["5uVPyf"]);
  obj5[5] = function onPress() {
    callback(3952).openURL(constants2.INSTAGRAM_URL);
  };
  items3[2] = callback(id(7660).IconButton, obj5);
  obj2[2] = items3;
  items2[1] = closure_11(id(5243).SafeAreaPaddingView, obj2);
  obj[1] = items2;
  return closure_11(closure_4, obj);
});
const result = require("_getSystemLocale").fileFinishedImporting("components_native/ChangeLogStandardTemplate.tsx");

export default memoResult1;
export const ListItem = memoResult;
export const changelogRules = function changelogRules(changelogId, arg1) {
  let flag = arg1;
  if (arg1 === undefined) {
    flag = false;
  }
  let obj = importDefault(7991);
  if (flag) {
    obj = { components: null };
    obj = { Link: null, ListItem: null, LHeading: null, Heading: null };
    let closure_0 = changelogId;
    obj[0] = (arg0) => {
      const obj = {};
      const merged = Object.assign(arg0);
      obj.changelogId = id;
      return outer1_10(outer1_16, obj);
    };
    obj[1] = closure_15;
    obj[2] = LHeading;
    obj[3] = LHeading;
    obj[0] = obj;
    let messageRules = obj.getMessageRules(obj);
  } else {
    const obj1 = { components: null };
    const obj2 = { Link: null, ListItem: null, LHeading: null, Heading: null };
    closure_0 = changelogId;
    obj2[0] = (arg0) => {
      const obj = {};
      const merged = Object.assign(arg0);
      obj.changelogId = id;
      return outer1_10(outer1_16, obj);
    };
    obj2[1] = closure_15;
    obj2[2] = LHeading;
    obj2[3] = LHeading;
    obj1[0] = obj2;
    messageRules = obj.getDefaultRules(obj1);
  }
  return messageRules;
};
export const getRenderChangelog = function getRenderChangelog(id) {
  let obj = importDefault(4245);
  id = id.id;
  {
    obj = { components: null };
    obj = { Link: null, ListItem: null, LHeading: null, Heading: null };
    obj[0] = (arg0) => {
      const obj = {};
      const merged = Object.assign(arg0);
      obj.changelogId = id;
      return outer1_10(outer1_16, obj);
    };
    obj[1] = closure_15;
    obj[2] = LHeading;
    obj[3] = LHeading;
    obj[0] = obj;
    const defaultRules = obj2.getDefaultRules(obj);
  }
  return obj.reactParserFor(defaultRules);
};