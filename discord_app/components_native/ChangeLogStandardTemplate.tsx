// === Module 8435: ChangeLogStandardTemplate ===

// Module 8435 (ChangeLogStandardTemplate)
import nativeDefault from "native" /* 576 */;
import native from "native" /* 1177 */;
import AnalyticsUtilsDefault from "AnalyticsUtils" /* 1241 */;
import _mod1929 from "module_1929" /* 1929 */;
import getLocalizedLinkDefault from "getLocalizedLink" /* 4444 */;
import LinkingDefault from "Linking" /* 4518 */;
import MarkupUtilsDefault from "MarkupUtils" /* 4817 */;
import ChangeLogUtilsDefault from "ChangeLogUtils" /* 8438 */;
import noop from "module_19" /* 19 */;
import LocaleStore from "LocaleStore" /* 2109 */;

require = fn;
function LHeading(children) {
  closure_12();
  let obj = { style: closure_13().lheading, children: null };
  c0 = true;
  let combined;
  if (null != children.className) {
    const parts = str.split(" ");
    const mapped = parts.map((item) => {
      if ("marginTop" === item) {
        let obj = { marginTop: 10 };
      } else if (c0) {
        const obj2 = { color: require[item] };
        obj = obj2;
      } else {
        obj = { backgroundColor: require[item] };
      }
      return obj;
    });
    combined = mapped.concat(tmp5);
  }
  const items = [closure_1_10(native.LegacyText, { accessibilityRole: "header", style: combined, children: children.children }), ];
  c0 = false;
  let combined1;
  if (null != children.className) {
    const parts1 = str.split(" ");
    const mapped1 = parts1.map((item) => {
      if ("marginTop" === item) {
        let obj = { marginTop: 10 };
      } else if (c0) {
        const obj2 = { color: require[item] };
        obj = obj2;
      } else {
        obj = { backgroundColor: require[item] };
      }
      return obj;
    });
    combined1 = mapped1.concat(tmp7);
  }
  items[1] = closure_1_10(React4, { style: combined1 });
  obj.children = items;
  return closure_1_11(React4, obj);
}
function LinkInner(target) {
  target = target.target;
  ({ changelogId, className, children } = target);
  const items = [LocaleStore];
  const stateFromStores = target(563).useStateFromStores(items, () => locale.locale);
  let obj = target(563);
  const changelog = target(8436).useChangelog(changelogId, stateFromStores).changelog;
  return closure_10(target(1177).LegacyText, {
    accessibilityRole: "link",
    style: className,
    onPress() {
      let date;
      if (changelog != null) {
        date = changelog.date;
      }
      if (date == null) {
        const _Date = Date;
        const str = new Date();
        date = str.toString();
      }
      let num;
      if (changelog != null) {
        num = changelog.revision;
      }
      if (num == null) {
        num = 1;
      }
      const obj = AnalyticsUtilsDefault;
      obj.track(constants.CHANGE_LOG_CTA_CLICKED, { change_log_id: "" + date + ":" + num, cta_type: "inline_link", target });
      const obj2 = { change_log_id: "" + date + ":" + num, cta_type: "inline_link", target };
      const tmpResult = LinkingDefault;
      tmpResult.openURL(_mod1929.sanitizeUrl(target));
    },
    children
  });
}
get_ActivityIndicator = fn(17);
({ View: closure_4, ScrollView: hasOwnProperty, StyleSheet } = get_ActivityIndicator);
const Constants = fn(1074);
({ LocalizedLinks: closure_7, SOCIAL_LINKS: closure_8, AnalyticEvents: closure_9, Fonts } = Constants);
const jsxProd = fn(21);
({ jsx: c10, jsxs: closure_11 } = jsxProd);
let createStyles = fn(4827);
let closure_12 = createStyles.createStyleProperties({ added: nativeDefault.colors.TEXT_FEEDBACK_POSITIVE, fixed: nativeDefault.colors.TEXT_FEEDBACK_CRITICAL, progress: nativeDefault.colors.TEXT_FEEDBACK_WARNING, improved: nativeDefault.colors.TEXT_BRAND });
createStyles = fn(4827);
let obj3 = { flex: { flex: 1 }, container: null, footer: null, scrollViewContainer: null, lheading: null, lheadingText: null, lheadingLine: null, bulletPoint: null, listItem: null, listText: null };
let obj = { added: nativeDefault.colors.TEXT_FEEDBACK_POSITIVE, fixed: nativeDefault.colors.TEXT_FEEDBACK_CRITICAL, progress: nativeDefault.colors.TEXT_FEEDBACK_WARNING, improved: nativeDefault.colors.TEXT_BRAND };
obj3.container = { padding: 18, backgroundColor: nativeDefault.colors.BACKGROUND_BASE_LOW };
let obj5 = { padding: 18, backgroundColor: nativeDefault.colors.BACKGROUND_BASE_LOW };
obj3.footer = { flexDirection: "row", justifyContent: "center", borderTopWidth: StyleSheet.hairlineWidth, backgroundColor: nativeDefault.colors.BACKGROUND_SURFACE_HIGH, borderTopColor: nativeDefault.colors.BORDER_STRONG, gap: nativeDefault.space.PX_12, paddingHorizontal: 18, paddingVertical: nativeDefault.space.PX_12 };
obj3.scrollViewContainer = { flex: 1 };
obj3.lheading = { marginBottom: 14, flexDirection: "row", alignItems: "center" };
obj3.lheadingText = { fontSize: 16, fontFamily: Fonts.PRIMARY_SEMIBOLD };
obj3.lheadingLine = { flexGrow: 1, flexShrink: 1, flexBasis: "auto", marginLeft: 10, height: 2 };
let size = { width: 7, height: 7, borderRadius: 3.5, marginRight: 13, marginTop: 7, backgroundColor: nativeDefault.colors.BACKGROUND_MOD_STRONG };
obj3.bulletPoint = size;
obj3.listItem = { flexDirection: "row", marginLeft: 4, marginBottom: 8 };
let obj6 = { flexDirection: "row", justifyContent: "center", borderTopWidth: StyleSheet.hairlineWidth, backgroundColor: nativeDefault.colors.BACKGROUND_SURFACE_HIGH, borderTopColor: nativeDefault.colors.BORDER_STRONG, gap: nativeDefault.space.PX_12, paddingHorizontal: 18, paddingVertical: nativeDefault.space.PX_12 };
obj3.listText = { color: nativeDefault.colors.TEXT_DEFAULT, fontSize: 14, lineHeight: 18, flex: 1 };
let closure_13 = createStyles.createStyles(obj3);
const memoResult = noop.memo((children) => {
  children = children.children;
  const tmp = closure_13();
  const obj = { style: tmp.listItem, children: null };
  const items = [closure_1_10(React4, { style: tmp.bulletPoint }), ];
  const obj3 = { style: tmp.listText, children: null };
  let childrenResult = children;
  if (typeof children === "function") {
    const obj4 = { style: tmp.listText };
    childrenResult = children(obj4);
  }
  obj3.children = childrenResult;
  items[1] = closure_1_10(React4, obj3);
  obj.children = items;
  return closure_1_11(React4, obj);
});
let obj7 = { color: nativeDefault.colors.TEXT_DEFAULT, fontSize: 14, lineHeight: 18, flex: 1 };
size = fn(2);
const result = size.fileFinishedImporting("components_native/ChangeLogStandardTemplate.tsx");

export default noop.memo((video) => {
  ({ changeLog, onScroll } = video);
  const tmp = closure_13();
  const items = [onScroll];
  let obj = { style: tmp.flex, children: null };
  const obj2 = {
    contentContainerStyle: tmp.container,
    style: tmp.scrollViewContainer,
    onScroll: noop.useCallback((nativeEvent) => {
      onScroll(nativeEvent.nativeEvent);
    }, items),
    scrollEventThrottle: 3,
    children: null
  };
  const items1 = [video.video, ];
  const id = changeLog.id;
  const obj3 = MarkupUtilsDefault;
  {
    const obj5 = { components: null };
    const obj6 = { Link: null, ListItem: null, LHeading: null, Heading: null };
    closure_129_0 = id;
    obj6.Link = (arg0) => {
      const obj = {};
      const merged = Object.assign(arg0);
      obj.changelogId = onScroll;
      return closure_2_10(LinkInner, obj);
    };
    obj6.ListItem = ListItem;
    obj6.LHeading = LHeading;
    obj6.Heading = LHeading;
    obj5.components = obj6;
    const defaultRules = obj4.getDefaultRules(obj5);
  }
  items1[1] = obj3.reactParserFor(defaultRules)(changeLog.body, false);
  obj2.children = items1;
  const items2 = [closure_11(closure_5, obj2), ];
  const obj7 = { bottom: true, style: tmp.footer, children: null };
  const obj8 = { size: "sm", variant: "tertiary", accessibilityRole: "link", icon: closure_10(onScroll(8441).XNeutralIcon, { size: "sm", color: "interactive-icon-default" }), accessibilityLabel: null, onPress: null };
  const intl = onScroll(1115).intl;
  obj8.accessibilityLabel = intl.string(onScroll(1115).t["/lXfom"]);
  obj8.onPress = function onPress() {
    LinkingDefault.openURL(getLocalizedLinkDefault(constants.TWITTER));
  };
  const items3 = [closure_10(onScroll(8265).IconButton, obj8), , ];
  const obj9 = { size: "sm", variant: "tertiary", accessibilityRole: "link", icon: closure_10(onScroll(8443).FacebookNeutralIcon, { size: "sm", color: "interactive-icon-default" }), accessibilityLabel: null, onPress: null };
  const intl2 = onScroll(1115).intl;
  obj9.accessibilityLabel = intl2.string(onScroll(1115).t["h0or/l"]);
  obj9.onPress = function onPress() {
    LinkingDefault.openURL(constants2.FACEBOOK_URL);
  };
  items3[1] = closure_10(onScroll(8265).IconButton, obj9);
  const obj10 = { size: "sm", variant: "tertiary", accessibilityRole: "link", icon: closure_10(onScroll(8445).InstagramNeutralIcon, { size: "sm", color: "interactive-icon-default" }), accessibilityLabel: null, onPress: null };
  const intl3 = onScroll(1115).intl;
  obj10.accessibilityLabel = intl3.string(onScroll(1115).t["5uVPyf"]);
  obj10.onPress = function onPress() {
    LinkingDefault.openURL(constants2.INSTAGRAM_URL);
  };
  items3[2] = closure_10(onScroll(8265).IconButton, obj10);
  obj7.children = items3;
  items2[1] = closure_11(onScroll(7454).SafeAreaPaddingView, obj7);
  obj.children = items2;
  return closure_11(closure_4, obj);
});
export const ListItem = memoResult;
export const changelogRules = function changelogRules(changelogId, arg1) {
  let flag = arg1;
  if (arg1 === undefined) {
    flag = false;
  }
  const obj = ChangeLogUtilsDefault;
  if (flag) {
    const obj2 = { components: null };
    const obj3 = { Link: null, ListItem: null, LHeading: null, Heading: null };
    closure_129_0 = changelogId;
    obj3.Link = (arg0) => {
      const obj = {};
      const merged = Object.assign(arg0);
      obj.changelogId = onScroll;
      return closure_2_10(LinkInner, obj);
    };
    obj3.ListItem = ListItem;
    obj3.LHeading = LHeading;
    obj3.Heading = LHeading;
    obj2.components = obj3;
    let messageRules = obj.getMessageRules(obj2);
  } else {
    const obj4 = { components: null };
    const obj5 = { Link: null, ListItem: null, LHeading: null, Heading: null };
    closure_0 = changelogId;
    obj5.Link = (arg0) => {
      const obj = {};
      const merged = Object.assign(arg0);
      obj.changelogId = onScroll;
      return closure_2_10(LinkInner, obj);
    };
    obj5.ListItem = ListItem;
    obj5.LHeading = LHeading;
    obj5.Heading = LHeading;
    obj4.components = obj5;
    messageRules = obj.getDefaultRules(obj4);
  }
  return messageRules;
};
export const getRenderChangelog = function getRenderChangelog(id) {
  id = id.id;
  const obj = MarkupUtilsDefault;
  {
    const obj3 = { components: null };
    const obj4 = {
      (arg0) => {
          const obj = {};
          const merged = Object.assign(arg0);
          obj.changelogId = onScroll;
          return closure_2_10(LinkInner, obj);
        },
      ListItem,
      LHeading,
      Heading: LHeading
    };
    obj3.components = obj4;
    const defaultRules = obj2.getDefaultRules(obj3);
  }
  return obj.reactParserFor(defaultRules);
};