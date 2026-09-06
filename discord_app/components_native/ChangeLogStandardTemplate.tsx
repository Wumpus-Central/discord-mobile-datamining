// discord_app/components_native/ChangeLogStandardTemplate.tsx
import nativeDefault from "../../discord_common/js/packages/tokens/native.tsx";
import AnalyticsUtilsDefault from "../utils/AnalyticsUtils.tsx";
import getLocalizedLinkDefault from "../modules/links/getLocalizedLink.tsx";
import LinkingDefault from "../lib/native/Linking.tsx";
import _mod4257 from "../../_runtime/metro/04257__.js";
import MarkupUtilsDefault from "../modules/markup/MarkupUtils.tsx";
import ChangeLogUtilsDefault from "../utils/ChangeLogUtils.tsx";
import noop from "../../_runtime/metro/00019__.js";
import LocaleStore from "../modules/user_settings/LocaleStore.tsx";

require = fn;
function LHeading(children) {
  let obj = { style: closure_13().lheading, children: null };
  _require = true;
  let combined;
  if (null != children.className) {
    const parts = str.split(" ");
    const mapped = parts.map((item) => {
      if ("marginTop" === item) {
        let obj = { marginTop: 10 };
      } else if (c0) {
        obj = { color: null };
        obj.color = obj[item];
      } else {
        obj = { backgroundColor: null };
        obj.backgroundColor = obj[item];
      }
      return obj;
    });
    combined = mapped.concat(tmp5);
  }
  const items = [closure_10(require("native").LegacyText, { accessibilityRole: "header", style: combined, children: children.children }), ];
  closure_129_0 = false;
  let combined1;
  if (null != children.className) {
    const parts1 = str.split(" ");
    const mapped1 = parts1.map((item) => {
      if ("marginTop" === item) {
        let obj = { marginTop: 10 };
      } else if (c0) {
        obj = { color: null };
        obj.color = obj[item];
      } else {
        obj = { backgroundColor: null };
        obj.backgroundColor = obj[item];
      }
      return obj;
    });
    combined1 = mapped1.concat(tmp7);
  }
  items[1] = closure_10(closure_4, { style: combined1 });
  obj.children = items;
  return closure_11(closure_4, obj);
}
function LinkInner(target) {
  target = target.target;
  ({ changelogId, className, children } = target);
  let obj = target(563);
  const items = [LocaleStore];
  const stateFromStores = obj.useStateFromStores(items, () => locale.locale);
  const changelog = target(8091).useChangelog(changelogId, stateFromStores).changelog;
  obj = {
    accessibilityRole: "link",
    style: className,
    onPress() {
      let obj = AnalyticsUtilsDefault;
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
      obj.track(constants.CHANGE_LOG_CTA_CLICKED, obj);
      const tmpResult = LinkingDefault;
      tmpResult.openURL(_mod4257.sanitizeUrl(target));
    },
    children
  };
  return closure_10(target(1178).LegacyText, obj);
}
get_ActivityIndicator = fn(17);
({ View: closure_4, ScrollView: hasOwnProperty, StyleSheet } = get_ActivityIndicator);
const Constants = fn(1074);
({ LocalizedLinks: closure_7, SOCIAL_LINKS: closure_8, AnalyticEvents: closure_9, Fonts } = Constants);
const jsxProd = fn(21);
({ jsx: c10, jsxs: closure_11 } = jsxProd);
let components = { added: nativeDefault.unsafe_rawColors.GREEN_360, fixed: nativeDefault.unsafe_rawColors.RED_400, progress: nativeDefault.unsafe_rawColors.YELLOW_300, improved: nativeDefault.unsafe_rawColors.BRAND_500 };
fn(4560);
components = { flex: { flex: 1 }, container: { padding: 18, backgroundColor: nativeDefault.colors.BACKGROUND_BASE_LOW }, footer: null, scrollViewContainer: null, lheading: null, lheadingText: null, lheadingLine: null, bulletPoint: null, listItem: null, listText: null };
const createStyles = { flexDirection: "row", justifyContent: "center", borderTopWidth: StyleSheet.hairlineWidth, backgroundColor: nativeDefault.colors.BACKGROUND_SURFACE_HIGH, borderTopColor: nativeDefault.colors.BORDER_STRONG, gap: nativeDefault.space.PX_12, paddingHorizontal: 18, paddingVertical: nativeDefault.space.PX_12 };
components.footer = createStyles;
components.scrollViewContainer = { flex: 1 };
components.lheading = { marginBottom: 14, flexDirection: "row", alignItems: "center" };
components.lheadingText = { fontSize: 16, fontFamily: Fonts.PRIMARY_SEMIBOLD };
components.lheadingLine = { flexGrow: 1, flexShrink: 1, flexBasis: "auto", marginLeft: 10, height: 2 };
let size = { width: 7, height: 7, borderRadius: 3.5, marginRight: 13, marginTop: 7, backgroundColor: nativeDefault.colors.BACKGROUND_MOD_STRONG };
components.bulletPoint = size;
components.listItem = { flexDirection: "row", marginLeft: 4, marginBottom: 8 };
let obj1 = { padding: 18, backgroundColor: nativeDefault.colors.BACKGROUND_BASE_LOW };
components.listText = { color: nativeDefault.colors.TEXT_DEFAULT, fontSize: 14, lineHeight: 18, flex: 1 };
let closure_13 = createStyles.createStyles(components);
const memoResult = noop.memo((children) => {
  children = children.children;
  const tmp = closure_13();
  let obj = { style: tmp.listItem, children: null };
  obj = { style: tmp.bulletPoint };
  const items = [closure_1_10(React4, obj), ];
  obj = { style: tmp.listText, children: null };
  let childrenResult = children;
  if (typeof children === "function") {
    const obj1 = { style: tmp.listText };
    childrenResult = children(obj1);
  }
  obj.children = childrenResult;
  items[1] = closure_1_10(React4, obj);
  obj.children = items;
  return closure_1_11(React4, obj);
});
let obj3 = { color: nativeDefault.colors.TEXT_DEFAULT, fontSize: 14, lineHeight: 18, flex: 1 };
size = fn(2);
const result = size.fileFinishedImporting("components_native/ChangeLogStandardTemplate.tsx");

export default noop.memo((video) => {
  ({ changeLog, onScroll } = video);
  const tmp = closure_13();
  const items = [onScroll];
  let obj = { style: tmp.flex, children: null };
  obj = {
    contentContainerStyle: tmp.container,
    style: tmp.scrollViewContainer,
    onScroll: noop.useCallback((nativeEvent) => {
      onScroll(nativeEvent.nativeEvent);
    }, items),
    scrollEventThrottle: 3,
    children: null
  };
  const items1 = [video.video, ];
  let obj2 = MarkupUtilsDefault;
  const id = changeLog.id;
  let obj3 = ChangeLogUtilsDefault;
  {
    obj = { components: null };
    const obj1 = { Link: null, ListItem: null, LHeading: null, Heading: null };
    closure_129_0 = id;
    obj1.Link = (arg0) => {
      const obj = {};
      const merged = Object.assign(arg0);
      obj.changelogId = onScroll;
      return closure_2_10(LinkInner, obj);
    };
    obj1.ListItem = ListItem;
    obj1.LHeading = LHeading;
    obj1.Heading = LHeading;
    obj.components = obj1;
    const defaultRules = obj3.getDefaultRules(obj);
  }
  items1[1] = obj2.reactParserFor(defaultRules)(changeLog.body, false);
  obj.children = items1;
  const items2 = [closure_11(closure_5, obj), ];
  obj2 = { bottom: true, style: tmp.footer, children: null };
  obj3 = { size: "sm", variant: "tertiary", accessibilityRole: "link", icon: closure_10(onScroll(8099).XNeutralIcon, { size: "sm", color: "interactive-icon-default" }), accessibilityLabel: null, onPress: null };
  const intl = onScroll(1114).intl;
  obj3.accessibilityLabel = intl.string(onScroll(1114).t["/lXfom"]);
  obj3.onPress = function onPress() {
    LinkingDefault.openURL(getLocalizedLinkDefault(constants.TWITTER));
  };
  const items3 = [closure_10(onScroll(8097).IconButton, obj3), , ];
  const obj4 = { size: "sm", variant: "tertiary", accessibilityRole: "link", icon: closure_10(onScroll(8101).FacebookNeutralIcon, { size: "sm", color: "interactive-icon-default" }), accessibilityLabel: null, onPress: null };
  const intl2 = onScroll(1114).intl;
  obj4.accessibilityLabel = intl2.string(onScroll(1114).t["h0or/l"]);
  obj4.onPress = function onPress() {
    LinkingDefault.openURL(constants2.FACEBOOK_URL);
  };
  items3[1] = closure_10(onScroll(8097).IconButton, obj4);
  const obj5 = { size: "sm", variant: "tertiary", accessibilityRole: "link", icon: closure_10(onScroll(8103).InstagramNeutralIcon, { size: "sm", color: "interactive-icon-default" }), accessibilityLabel: null, onPress: null };
  const intl3 = onScroll(1114).intl;
  obj5.accessibilityLabel = intl3.string(onScroll(1114).t["5uVPyf"]);
  obj5.onPress = function onPress() {
    LinkingDefault.openURL(constants2.INSTAGRAM_URL);
  };
  items3[2] = closure_10(onScroll(8097).IconButton, obj5);
  obj2.children = items3;
  items2[1] = closure_11(onScroll(7123).SafeAreaPaddingView, obj2);
  obj.children = items2;
  return closure_11(closure_4, obj);
});
export const ListItem = memoResult;
export const changelogRules = function changelogRules(changelogId, arg1) {
  let flag = arg1;
  if (arg1 === undefined) {
    flag = false;
  }
  components = ChangeLogUtilsDefault;
  if (flag) {
    components = { components: null };
    components = { Link: null, ListItem: null, LHeading: null, Heading: null };
    closure_129_0 = changelogId;
    components.Link = (arg0) => {
      const obj = {};
      const merged = Object.assign(arg0);
      obj.changelogId = onScroll;
      return closure_2_10(LinkInner, obj);
    };
    components.ListItem = ListItem;
    components.LHeading = LHeading;
    components.Heading = LHeading;
    components.components = components;
    let messageRules = components.getMessageRules(components);
  } else {
    const obj1 = { components: null };
    const obj2 = { Link: null, ListItem: null, LHeading: null, Heading: null };
    closure_0 = changelogId;
    obj2.Link = (arg0) => {
      const obj = {};
      const merged = Object.assign(arg0);
      obj.changelogId = onScroll;
      return closure_2_10(LinkInner, obj);
    };
    obj2.ListItem = ListItem;
    obj2.LHeading = LHeading;
    obj2.Heading = LHeading;
    obj1.components = obj2;
    messageRules = components.getDefaultRules(obj1);
  }
  return messageRules;
};
export const getRenderChangelog = function getRenderChangelog(id) {
  components = MarkupUtilsDefault;
  id = id.id;
  {
    components = { components: null };
    components = {
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
    components.components = components;
    const defaultRules = obj2.getDefaultRules(components);
  }
  return components.reactParserFor(defaultRules);
};