// === Module 8103: ChangeLogStandardTemplate ===

// Module 8103 (ChangeLogStandardTemplate)
import c from "c" /* 576 */;
import nativeDefault from "native" /* 587 */;
import native from "native" /* 1200 */;
import AnalyticsUtilsDefault from "AnalyticsUtils" /* 1265 */;
import _mod1949 from "module_1949" /* 1949 */;
import getLocalizedLinkDefault from "getLocalizedLink" /* 4691 */;
import LinkingDefault from "Linking" /* 4765 */;
import MarkupUtilsDefault from "MarkupUtils" /* 5078 */;
import ChangeLogUtilsDefault from "ChangeLogUtils" /* 8106 */;
import noop from "module_19" /* 19 */;
import LocaleStore from "LocaleStore" /* 2128 */;

require = fn;
get_ActivityIndicator = fn(17);
({ View: closure_4, ScrollView: hasOwnProperty, StyleSheet } = get_ActivityIndicator);
const Constants = fn(1085);
({ LocalizedLinks: closure_7, SOCIAL_LINKS: closure_8, AnalyticEvents: closure_9, Fonts } = Constants);
const jsxProd = fn(21);
({ jsx: c10, jsxs: closure_11 } = jsxProd);
let createStyles = fn(5091);
let closure_12 = createStyles.createStyleProperties({ added: nativeDefault.colors.TEXT_FEEDBACK_POSITIVE, fixed: nativeDefault.colors.TEXT_FEEDBACK_CRITICAL, progress: nativeDefault.colors.TEXT_FEEDBACK_WARNING, improved: nativeDefault.colors.TEXT_BRAND });
createStyles = fn(5091);
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
let ReactCompilerGating = fn(558);
let closure_14 = ReactCompilerGating.isReactCompilerEnabled() ? (function LHeading(className) {
  const cResult = c.c(18);
  className = className.className;
  const children = className.children;
  const tmp4 = closure_13();
  const tmp5 = closure_12();
  closure_1 = tmp5;
  if (cResult[0] === className) {
    if (cResult[1] === tmp5) {
      let tmp6 = cResult[2];
    }
    if (cResult[3] === tmp6) {
      if (cResult[4] === tmp4.lheadingText) {
        let tmp8 = cResult[5];
      }
      if (cResult[6] === children) {
        if (cResult[7] === tmp8) {
          let tmp10 = cResult[8];
        }
        if (cResult[9] === tmp6) {
          if (cResult[10] === tmp4.lheadingLine) {
            let tmp13 = cResult[11];
          }
          if (cResult[12] !== tmp13) {
            let obj2 = { style: tmp13 };
            const tmp18 = collapsed(React4, obj2);
            cResult[12] = tmp13;
            cResult[13] = tmp18;
            let tmp15 = tmp18;
          } else {
            tmp15 = cResult[13];
          }
          if (cResult[14] === tmp4.lheading) {
            if (cResult[15] === tmp10) {
              if (cResult[16] === tmp15) {
                let tmp19 = cResult[17];
              }
              return tmp19;
            }
          }
          const obj3 = { style: tmp7, children: null };
          const items = [tmp10, tmp15];
          obj3.children = items;
          const tmp22 = closure_1_11(React4, obj3);
          cResult[14] = tmp4.lheading;
          cResult[15] = tmp10;
          cResult[16] = tmp15;
          cResult[17] = tmp22;
          tmp19 = tmp22;
        }
        const tmp6Result = tmp6(tmp4.lheadingLine, false);
        cResult[9] = tmp6;
        cResult[10] = tmp4.lheadingLine;
        cResult[11] = tmp6Result;
        tmp13 = tmp6Result;
      }
      const obj4 = { accessibilityRole: "header", style: tmp8, children };
      const tmp12 = collapsed(native.LegacyText, obj4);
      cResult[6] = children;
      cResult[7] = tmp8;
      cResult[8] = tmp12;
      tmp10 = tmp12;
    }
    const tmp6Result2 = tmp6(tmp4.lheadingText, true);
    cResult[3] = tmp6;
    cResult[4] = tmp4.lheadingText;
    cResult[5] = tmp6Result2;
    tmp8 = tmp6Result2;
  }
  function getStyles(arg0, arg1) {
    closure_0 = arg1;
    if (null != closure_0) {
      const parts = str.split(" ");
      const mapped = parts.map((item) => {
        if ("marginTop" === item) {
          let obj = { marginTop: 10 };
        } else if (closure_0) {
          const obj2 = { color: dependencyMap[item] };
          obj = obj2;
        } else {
          obj = { backgroundColor: dependencyMap[item] };
        }
        return obj;
      });
      return mapped.concat(arg0);
    }
    str = closure_0;
  }
  cResult[0] = className;
  cResult[1] = tmp5;
  cResult[2] = getStyles;
  tmp6 = getStyles;
}) : (function LHeading(children) {
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
  const items = [collapsed(native.LegacyText, { accessibilityRole: "header", style: combined, children: children.children }), ];
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
  items[1] = collapsed(React4, { style: combined1 });
  obj.children = items;
  return closure_1_11(React4, obj);
});
ReactCompilerGating = fn(558);
const memoResult = noop.memo(ReactCompilerGating.isReactCompilerEnabled() ? ((children) => {
  const cResult = c.c(12);
  children = children.children;
  const tmp2 = closure_13();
  if (cResult[0] !== tmp2.bulletPoint) {
    const obj2 = { style: tmp2.bulletPoint };
    const tmp6 = collapsed(React4, obj2);
    cResult[0] = tmp2.bulletPoint;
    cResult[1] = tmp6;
    let tmp3 = tmp6;
  } else {
    tmp3 = cResult[1];
  }
  if (cResult[2] === children) {
    if (cResult[3] === tmp2.listText) {
      let tmp7 = cResult[4];
    }
    if (cResult[5] === tmp2.listText) {
      if (cResult[6] === tmp7) {
        let tmp9 = cResult[7];
      }
      if (cResult[8] === tmp2.listItem) {
        if (cResult[9] === tmp3) {
          if (cResult[10] === tmp9) {
            let tmp13 = cResult[11];
          }
          return tmp13;
        }
      }
      const obj3 = { style: tmp2.listItem, children: null };
      const items = [tmp3, tmp9];
      obj3.children = items;
      const tmp16 = closure_1_11(React4, obj3);
      cResult[8] = tmp2.listItem;
      cResult[9] = tmp3;
      cResult[10] = tmp9;
      cResult[11] = tmp16;
      tmp13 = tmp16;
    }
    const obj4 = { style: tmp2.listText, children: tmp7 };
    const tmp12 = collapsed(React4, obj4);
    cResult[5] = tmp2.listText;
    cResult[6] = tmp7;
    cResult[7] = tmp12;
    tmp9 = tmp12;
  }
  let childrenResult = children;
  if (typeof children === "function") {
    const obj5 = { style: tmp2.listText };
    childrenResult = children(obj5);
  }
  cResult[2] = children;
  cResult[3] = tmp2.listText;
  cResult[4] = childrenResult;
  tmp7 = childrenResult;
}) : ((children) => {
  children = children.children;
  const tmp = closure_13();
  const obj = { style: tmp.listItem, children: null };
  const items = [collapsed(React4, { style: tmp.bulletPoint }), ];
  const obj3 = { style: tmp.listText, children: null };
  let childrenResult = children;
  if (typeof children === "function") {
    const obj4 = { style: tmp.listText };
    childrenResult = children(obj4);
  }
  obj3.children = childrenResult;
  items[1] = collapsed(React4, obj3);
  obj.children = items;
  return closure_1_11(React4, obj);
}));
ReactCompilerGating = fn(558);
let closure_16 = ReactCompilerGating.isReactCompilerEnabled() ? (function LinkInner(target) {
  const cResult = target(576).c(10);
  target = target.target;
  ({ className, children } = target);
  if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
    const items = [LocaleStore];
    const fn = function l() {
      return locale.locale;
    };
    cResult[0] = items;
    cResult[1] = fn;
    tmp4 = items;
    tmp5 = fn;
  } else {
    [tmp4, tmp5] = cResult;
  }
  let obj = target(576);
  const stateFromStores = target(573).useStateFromStores(tmp4, tmp5);
  let tmpResult = target(573);
  const changelog = target(8104).useChangelog(target.changelogId, stateFromStores).changelog;
  let date;
  if (changelog != null) {
    date = changelog.date;
  }
  if (cResult[2] === date) {
    let revision;
    if (changelog != null) {
      revision = changelog.revision;
    }
    if (cResult[3] === revision) {
      if (cResult[4] === target) {
        let tmp10 = cResult[5];
      }
      if (cResult[6] === children) {
        if (cResult[7] === className) {
          if (cResult[8] === tmp10) {
            let tmp13 = cResult[9];
          }
          return tmp13;
        }
      }
      let obj2 = { accessibilityRole: "link", style: className, onPress: tmp10, children };
      const tmp15 = closure_10(tmp(1200).LegacyText, obj2);
      cResult[6] = children;
      cResult[7] = className;
      cResult[8] = tmp10;
      cResult[9] = tmp15;
      tmp13 = tmp15;
    }
  }
  let date1;
  if (changelog != null) {
    date1 = changelog.date;
  }
  cResult[2] = date1;
  let revision1;
  if (changelog != null) {
    revision1 = changelog.revision;
  }
  class L {
    constructor() {
      tmp2 = closure_2;
      tmp = closure_1;
      obj = closure_1(closure_2[12]);
      tmp3 = changelog;
      date = undefined;
      if (changelog != null) {
        date = tmp3.date;
      }
      if (date == null) {
        tmp5 = globalThis;
        _Date = Date;
        tmp6 = new.target;
        tmp7 = new.target;
        str = new Date();
        tmp8 = str;
        date = str.toString();
      }
      num = undefined;
      if (tmp3 != null) {
        num = tmp3.revision;
      }
      if (num == null) {
        num = 1;
      }
      obj1 = { change_log_id: "" + date + ":" + num, cta_type: "inline_link", target };
      trackResult = obj.track(AnalyticEvents.CHANGE_LOG_CTA_CLICKED, obj1);
      tmpResult = tmp(tmp2[13]);
      obj4 = closure_0(tmp2[14]);
      openURLResult = tmpResult.openURL(obj4.sanitizeUrl(target));
      return;
    }
  }
  cResult[3] = revision1;
  cResult[4] = target;
  cResult[5] = L;
  tmp10 = L;
  const tmpResult2 = target(8104);
}) : (function LinkInner(target) {
  target = target.target;
  ({ changelogId, className, children } = target);
  const items = [LocaleStore];
  const stateFromStores = target(573).useStateFromStores(items, () => locale.locale);
  let obj = target(573);
  const changelog = target(8104).useChangelog(changelogId, stateFromStores).changelog;
  return closure_10(target(1200).LegacyText, {
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
      tmpResult.openURL(_mod1949.sanitizeUrl(target));
    },
    children
  });
});
ReactCompilerGating = fn(558);
function changelogRules(changelogId, arg1) {
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
      return collapsed(closure_16, obj);
    };
    obj3.ListItem = ListItem;
    obj3.LHeading = Heading;
    obj3.Heading = Heading;
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
      return collapsed(closure_16, obj);
    };
    obj5.ListItem = ListItem;
    obj5.LHeading = Heading;
    obj5.Heading = Heading;
    obj4.components = obj5;
    messageRules = obj.getDefaultRules(obj4);
  }
  return messageRules;
}
function getRenderChangelog(id) {
  id = id.id;
  const obj = MarkupUtilsDefault;
  {
    const obj3 = { components: null };
    const obj4 = {
      (arg0) => {
          const obj = {};
          const merged = Object.assign(arg0);
          obj.changelogId = onScroll;
          return collapsed(closure_16, obj);
        },
      ListItem,
      LHeading: Heading,
      Heading
    };
    obj3.components = obj4;
    const defaultRules = obj2.getDefaultRules(obj3);
  }
  return obj.reactParserFor(defaultRules);
}
let obj7 = { color: nativeDefault.colors.TEXT_DEFAULT, fontSize: 14, lineHeight: 18, flex: 1 };
size = fn(2);
const result = size.fileFinishedImporting("components_native/ChangeLogStandardTemplate.tsx");

export default noop.memo(ReactCompilerGating.isReactCompilerEnabled() ? ((arg0) => {
  const cResult = onScroll(576).c(19);
  ({ changeLog, video, onScroll } = arg0);
  const tmp4 = closure_13();
  if (cResult[0] !== onScroll) {
    const fn = function n(nativeEvent) {
      onScroll(nativeEvent.nativeEvent);
    };
    cResult[0] = onScroll;
    cResult[1] = fn;
    let tmp5 = fn;
  } else {
    tmp5 = cResult[1];
  }
  if (cResult[2] !== changeLog) {
    let reactParserFor = MarkupUtilsDefault.reactParserFor;
    const id = changeLog.id;
    {
      const obj3 = { components: null };
      const obj4 = { Link: null, ListItem: null, LHeading: null, Heading: null };
      closure_129_0 = id;
      obj4.Link = (arg0) => {
        const obj = {};
        const merged = Object.assign(arg0);
        obj.changelogId = onScroll;
        return collapsed(closure_16, obj);
      };
      obj4.ListItem = ListItem;
      obj4.LHeading = Heading;
      obj4.Heading = Heading;
      obj3.components = obj4;
      const defaultRules = obj2.getDefaultRules(obj3);
    }
    reactParserFor = reactParserFor(defaultRules);
    const reactParserForResult = reactParserFor(changeLog.body, false);
    cResult[2] = changeLog;
    cResult[3] = reactParserForResult;
    obj2 = ChangeLogUtilsDefault;
  } else {
    if (cResult[4] === tmp5) {
      if (cResult[5] === tmp4.container) {
        if (cResult[6] === tmp4.scrollViewContainer) {
          if (cResult[7] === tmp9) {
            if (cResult[8] === video) {
              let tmp17 = cResult[9];
            }
            const _Symbol = Symbol;
            if (cResult[10] === Symbol.for("react.memo_cache_sentinel")) {
              const obj5 = { size: "sm", variant: "tertiary", accessibilityRole: "link", icon: closure_10(onScroll(8116).XNeutralIcon, { size: "sm", color: "interactive-icon-default" }), accessibilityLabel: null, onPress: null };
              const intl = onScroll(1126).intl;
              obj5.accessibilityLabel = intl.string(onScroll(1126).t["/lXfom"]);
              obj5.onPress = function onPress() {
                LinkingDefault.openURL(getLocalizedLinkDefault(constants.TWITTER));
              };
              const tmp24 = closure_10(onScroll(8114).IconButton, obj5);
              cResult[10] = tmp24;
              let tmp22 = tmp24;
            } else {
              tmp22 = cResult[10];
            }
            const _Symbol2 = Symbol;
            if (cResult[11] === Symbol.for("react.memo_cache_sentinel")) {
              const obj6 = { size: "sm", variant: "tertiary", accessibilityRole: "link", icon: closure_10(onScroll(8118).FacebookNeutralIcon, { size: "sm", color: "interactive-icon-default" }), accessibilityLabel: null, onPress: null };
              const intl2 = onScroll(1126).intl;
              obj6.accessibilityLabel = intl2.string(onScroll(1126).t["h0or/l"]);
              obj6.onPress = function onPress() {
                LinkingDefault.openURL(constants2.FACEBOOK_URL);
              };
              const tmp27 = closure_10(onScroll(8114).IconButton, obj6);
              cResult[11] = tmp27;
              let tmp25 = tmp27;
            } else {
              tmp25 = cResult[11];
            }
            const _Symbol3 = Symbol;
            if (cResult[12] === Symbol.for("react.memo_cache_sentinel")) {
              const obj7 = { size: "sm", variant: "tertiary", accessibilityRole: "link", icon: closure_10(onScroll(8120).InstagramNeutralIcon, { size: "sm", color: "interactive-icon-default" }), accessibilityLabel: null, onPress: null };
              const intl3 = onScroll(1126).intl;
              obj7.accessibilityLabel = intl3.string(onScroll(1126).t["5uVPyf"]);
              obj7.onPress = function onPress() {
                LinkingDefault.openURL(constants2.INSTAGRAM_URL);
              };
              const tmp30 = closure_10(onScroll(8114).IconButton, obj7);
              cResult[12] = tmp30;
              let tmp28 = tmp30;
            } else {
              tmp28 = cResult[12];
            }
            if (cResult[13] !== tmp4.footer) {
              const obj8 = { bottom: true, style: tmp4.footer, children: null };
              const items = [tmp22, tmp25, tmp28];
              obj8.children = items;
              const tmp33 = closure_11(onScroll(6810).SafeAreaPaddingView, obj8);
              cResult[13] = tmp4.footer;
              cResult[14] = tmp33;
              let tmp31 = tmp33;
            } else {
              tmp31 = cResult[14];
            }
            if (cResult[15] === tmp4.flex) {
              if (cResult[16] === tmp31) {
                if (cResult[17] === tmp17) {
                  let tmp34 = cResult[18];
                }
                return tmp34;
              }
            }
            const obj9 = { style: tmp6, children: null };
            const items1 = [tmp17, tmp31];
            obj9.children = items1;
            const tmp37 = closure_11(closure_4, obj9);
            cResult[15] = tmp4.flex;
            cResult[16] = tmp31;
            cResult[17] = tmp17;
            cResult[18] = tmp37;
            tmp34 = tmp37;
          }
        }
      }
    }
    const obj10 = { contentContainerStyle: tmp7, style: tmp8, onScroll: tmp5, scrollEventThrottle: 3, children: null };
    const items2 = [video, cResult[3]];
    obj10.children = items2;
    const tmp20 = closure_11(closure_5, obj10);
    cResult[4] = tmp5;
    cResult[5] = tmp4.container;
    cResult[6] = tmp4.scrollViewContainer;
    cResult[7] = cResult[3];
    cResult[8] = video;
    cResult[9] = tmp20;
    tmp17 = tmp20;
  }
  const obj = onScroll(576);
}) : ((video) => {
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
      return collapsed(closure_16, obj);
    };
    obj6.ListItem = ListItem;
    obj6.LHeading = Heading;
    obj6.Heading = Heading;
    obj5.components = obj6;
    const defaultRules = obj4.getDefaultRules(obj5);
  }
  items1[1] = obj3.reactParserFor(defaultRules)(changeLog.body, false);
  obj2.children = items1;
  const items2 = [closure_11(closure_5, obj2), ];
  const obj7 = { bottom: true, style: tmp.footer, children: null };
  const obj8 = { size: "sm", variant: "tertiary", accessibilityRole: "link", icon: closure_10(onScroll(8116).XNeutralIcon, { size: "sm", color: "interactive-icon-default" }), accessibilityLabel: null, onPress: null };
  const intl = onScroll(1126).intl;
  obj8.accessibilityLabel = intl.string(onScroll(1126).t["/lXfom"]);
  obj8.onPress = function onPress() {
    LinkingDefault.openURL(getLocalizedLinkDefault(constants.TWITTER));
  };
  const items3 = [closure_10(onScroll(8114).IconButton, obj8), , ];
  const obj9 = { size: "sm", variant: "tertiary", accessibilityRole: "link", icon: closure_10(onScroll(8118).FacebookNeutralIcon, { size: "sm", color: "interactive-icon-default" }), accessibilityLabel: null, onPress: null };
  const intl2 = onScroll(1126).intl;
  obj9.accessibilityLabel = intl2.string(onScroll(1126).t["h0or/l"]);
  obj9.onPress = function onPress() {
    LinkingDefault.openURL(constants2.FACEBOOK_URL);
  };
  items3[1] = closure_10(onScroll(8114).IconButton, obj9);
  const obj10 = { size: "sm", variant: "tertiary", accessibilityRole: "link", icon: closure_10(onScroll(8120).InstagramNeutralIcon, { size: "sm", color: "interactive-icon-default" }), accessibilityLabel: null, onPress: null };
  const intl3 = onScroll(1126).intl;
  obj10.accessibilityLabel = intl3.string(onScroll(1126).t["5uVPyf"]);
  obj10.onPress = function onPress() {
    LinkingDefault.openURL(constants2.INSTAGRAM_URL);
  };
  items3[2] = closure_10(onScroll(8114).IconButton, obj10);
  obj7.children = items3;
  items2[1] = closure_11(onScroll(6810).SafeAreaPaddingView, obj7);
  obj.children = items2;
  return closure_11(closure_4, obj);
}));
export const ListItem = memoResult;
export { changelogRules };
export { getRenderChangelog };