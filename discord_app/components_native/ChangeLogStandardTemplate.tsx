// discord_app/components_native/ChangeLogStandardTemplate.tsx
import react2 from "../../_runtime/00576_react.js";
import nativeDefault from "../../discord_common/js/packages/tokens/native.tsx";
import native from "../design/void/native.tsx";
import AnalyticsUtilsDefault from "../utils/AnalyticsUtils.tsx";
import _mod1936 from "../../_runtime/metro/01936__.js";
import getLocalizedLinkDefault from "../modules/links/getLocalizedLink.tsx";
import LinkingDefault from "../lib/native/Linking.tsx";
import MarkupUtilsDefault from "../modules/markup/MarkupUtils.tsx";
import ChangeLogUtilsDefault from "../utils/ChangeLogUtils.tsx";
import react from "../../_runtime/00019_react.js";
import react_native from "../../_runtime/00017_react-native.js";
import LocaleStore from "../modules/user_settings/LocaleStore.tsx";
import Constants from "../Constants.tsx";
import Fragment from "../../_runtime/react/00021_Fragment.js";
import createStyles_mod from "../design/components/Styles/native/createStyles.tsx";
import ReactCompilerGating_mod from "../modules/react_compiler/ReactCompilerGating.tsx";
import size_mod from "../../_runtime/metro/00002__.js";

let target;

let Fonts;
let StyleSheet;
let c10;
let c9;
let closure_4;
let hasOwnProperty;
let metroImportAll;
let metroImportDefault;
let obj3;
let obj4;
let obj5;
let size;
let unpackModuleId;
const Link = (arg0) => {
  const obj = { changelogId };
  const merged = Object.assign(arg0);
  return closure_2_10(closure_2_16, obj);
};
({ View: closure_4, ScrollView: hasOwnProperty, StyleSheet } = react_native);
({ LocalizedLinks: metroImportDefault, SOCIAL_LINKS: metroImportAll, AnalyticEvents: c9, Fonts } = Constants);
({ jsx: c10, jsxs: unpackModuleId } = Fragment);
let createStyles = createStyles_mod;
let obj = {
  added: nativeDefault.colors.TEXT_FEEDBACK_POSITIVE,
  fixed: nativeDefault.colors.TEXT_FEEDBACK_CRITICAL,
  progress: nativeDefault.colors.TEXT_FEEDBACK_WARNING,
  improved: nativeDefault.colors.TEXT_BRAND,
};
let closure_12 = createStyles.createStyleProperties(obj);
createStyles = createStyles_mod;
let obj2 = {
  flex: { flex: 1 },
  container: obj3,
  footer: obj4,
  scrollViewContainer: { flex: 1 },
  lheading: { marginBottom: 14, flexDirection: "row", alignItems: "center" },
  lheadingText: { fontSize: 16, fontFamily: Fonts.PRIMARY_SEMIBOLD },
  lheadingLine: { flexGrow: 1, flexShrink: 1, flexBasis: "auto", marginLeft: 10, height: 2 },
  bulletPoint: size,
  listItem: { flexDirection: "row", marginLeft: 4, marginBottom: 8 },
  listText: obj5,
};
obj3 = { padding: 18, backgroundColor: nativeDefault.colors.BACKGROUND_BASE_LOW };
createStyles = createStyles.createStyles;
obj4 = {
  flexDirection: "row",
  justifyContent: "center",
  borderTopWidth: StyleSheet.hairlineWidth,
  backgroundColor: nativeDefault.colors.BACKGROUND_SURFACE_HIGH,
  borderTopColor: nativeDefault.colors.BORDER_STRONG,
  gap: nativeDefault.space.PX_12,
  paddingHorizontal: 18,
  paddingVertical: nativeDefault.space.PX_12,
};
size = {
  width: 7,
  height: 7,
  borderRadius: 3.5,
  marginRight: 13,
  marginTop: 7,
  backgroundColor: nativeDefault.colors.BACKGROUND_MOD_STRONG,
};
obj5 = { color: nativeDefault.colors.TEXT_DEFAULT, fontSize: 14, lineHeight: 18, flex: 1 };
let closure_13 = createStyles(obj2);
let ReactCompilerGating = ReactCompilerGating_mod;
let closure_14 = ReactCompilerGating.isReactCompilerEnabled()
  ? (className) => {
      let items;
      let obj = react2;
      const cResult = obj.c(18);
      className = className.className;
      const children = className.children;
      const tmp4 = closure_13();
      const tmp5 = closure_12();
      let closure_1 = tmp5;
      if (cResult[0] === className) {
        let tmp6;
        if (cResult[1] === tmp5) {
          tmp6 = cResult[2];
        }
        if (cResult[3] === tmp6) {
          let tmp8;
          if (cResult[4] === tmp4.lheadingText) {
            tmp8 = cResult[5];
          }
          if (cResult[6] === children) {
            let tmp10;
            if (cResult[7] === tmp8) {
              tmp10 = cResult[8];
            }
            if (cResult[9] === tmp6) {
              let tmp13;
              let tmp15;
              if (cResult[10] === tmp4.lheadingLine) {
                tmp13 = cResult[11];
              }
              if (cResult[12] !== tmp13) {
                let obj2 = { style: tmp13 };
                const tmp18 = authStore(React3, obj2);
                cResult[12] = tmp13;
                cResult[13] = tmp18;
                tmp15 = tmp18;
              } else {
                tmp15 = cResult[13];
              }
              if (cResult[14] === tmp4.lheading) {
                if (cResult[15] === tmp10) {
                  let tmp19;
                  if (cResult[16] === tmp15) {
                    tmp19 = cResult[17];
                  }
                  return tmp19;
                }
              }
              const obj3 = { style: tmp7, children: items };
              items = [tmp10, tmp15];
              const tmp22 = unpackModuleId(React3, obj3);
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
          const tmp12 = authStore(native.LegacyText, obj4);
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
      const fn = function n(arg0, arg1) {
        let closure_0 = arg1;
        const str = closure_0;
        if (null != closure_0) {
          const parts = str.split(" ");
          const mapped = parts.map((item) => {
            let obj;
            if ("marginTop" === item) {
              obj = { marginTop: 10 };
            } else if (closure_0) {
              obj = { color: closure_1[item] };
              const obj2 = { color: closure_1[item] };
            } else {
              obj = { backgroundColor: closure_1[item] };
            }
            return obj;
          });
          return mapped.concat(arg0);
        }
      };
      cResult[0] = className;
      cResult[1] = tmp5;
      cResult[2] = fn;
      tmp6 = fn;
    }
  : (className) => {
      let items;
      const f138326 = (item) => {
        let obj;
        if ("marginTop" === item) {
          obj = { marginTop: 10 };
        } else if (c0) {
          obj = { color: _require[item] };
          const obj2 = { color: _require[item] };
        } else {
          obj = { backgroundColor: _require[item] };
        }
        return obj;
      };
      const children = className.children;
      const tmp = closure_13();
      let closure_0 = closure_12();
      let obj = { style: tmp.lheading, children: items };
      let c0 = true;
      let combined;
      const LegacyText = native.LegacyText;
      if (null != className.className) {
        const parts = str.split(" ");
        const mapped = parts.map(f138326);
        combined = mapped.concat(tmp5);
      }
      items = [authStore(LegacyText, { accessibilityRole: "header", style: combined, children })];
      c0 = false;
      let combined1;
      if (null != className.className) {
        const parts1 = str.split(" ");
        const mapped1 = parts1.map(f138326);
        combined1 = mapped1.concat(tmp7);
      }
      items[1] = authStore(React3, { style: combined1 });
      return unpackModuleId(React3, obj);
    };
const memo = react.memo;
ReactCompilerGating = ReactCompilerGating_mod;
const memoResult = memo(
  ReactCompilerGating.isReactCompilerEnabled()
    ? (children) => {
        let items;
        let tmp3;
        const obj = react2;
        const cResult = obj.c(12);
        children = children.children;
        const tmp2 = closure_13();
        if (cResult[0] !== tmp2.bulletPoint) {
          const obj2 = { style: tmp2.bulletPoint };
          const tmp6 = authStore(React3, obj2);
          cResult[0] = tmp2.bulletPoint;
          cResult[1] = tmp6;
          tmp3 = tmp6;
        } else {
          tmp3 = cResult[1];
        }
        if (cResult[2] === children) {
          let tmp7;
          if (cResult[3] === tmp2.listText) {
            tmp7 = cResult[4];
          }
          if (cResult[5] === tmp2.listText) {
            let tmp9;
            if (cResult[6] === tmp7) {
              tmp9 = cResult[7];
            }
            if (cResult[8] === tmp2.listItem) {
              if (cResult[9] === tmp3) {
                let tmp13;
                if (cResult[10] === tmp9) {
                  tmp13 = cResult[11];
                }
                return tmp13;
              }
            }
            const obj3 = { style: tmp2.listItem, children: items };
            items = [tmp3, tmp9];
            const tmp16 = unpackModuleId(React3, obj3);
            cResult[8] = tmp2.listItem;
            cResult[9] = tmp3;
            cResult[10] = tmp9;
            cResult[11] = tmp16;
            tmp13 = tmp16;
          }
          const obj4 = { style: tmp2.listText, children: tmp7 };
          const tmp12 = authStore(React3, obj4);
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
      }
    : (children) => {
        let childrenResult;
        let items;
        children = children.children;
        const tmp = closure_13();
        const obj = { style: tmp.listItem, children: items };
        items = [,];
        const obj2 = { style: tmp.bulletPoint };
        items[0] = authStore(React3, obj2);
        const obj3 = { style: tmp.listText, children: childrenResult };
        childrenResult = children;
        if (typeof children === "function") {
          const obj4 = { style: tmp.listText };
          childrenResult = children(obj4);
        }
        items[1] = authStore(React3, obj3);
        return unpackModuleId(React3, obj);
      },
);
ReactCompilerGating = ReactCompilerGating_mod;
let closure_16 = ReactCompilerGating.isReactCompilerEnabled()
  ? (target) => {
      let children;
      let className;
      let locale;
      let tmp4;
      let tmp5;
      let obj = target(576);
      const cResult = obj.c(10);
      target = target.target;
      ({ className, children } = target);
      const changelogId = target.changelogId;
      if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
        const items = [LocaleStore];
        const fn = function l() {
          return locale.locale;
        };
        let num = 0;
        cResult[0] = items;
        cResult[1] = fn;
        tmp4 = items;
        tmp5 = fn;
      } else {
        [tmp4, tmp5] = cResult;
      }
      const tmpResult = tmp(573);
      const stateFromStores = tmpResult.useStateFromStores(tmp4, tmp5);
      const tmpResult2 = target(7764);
      const changelog = tmpResult2.useChangelog(changelogId, stateFromStores).changelog;
      let date;
      const tmp8 = cResult[2];
      if (changelog != null) {
        date = changelog.date;
      }
      if (tmp8 === date) {
        let revision;
        const tmp10 = cResult[3];
        if (changelog != null) {
          revision = changelog.revision;
        }
        if (tmp10 === revision) {
          let tmp12;
          if (cResult[4] === target) {
            tmp12 = cResult[5];
          }
          if (cResult[6] === children) {
            if (cResult[7] === className) {
              let tmp15;
              if (cResult[8] === tmp12) {
                tmp15 = cResult[9];
              }
              return tmp15;
            }
          }
          let obj2 = { accessibilityRole: "link", style: className, onPress: tmp12, children };
          const tmp17 = closure_10(target(1188).LegacyText, obj2);
          cResult[6] = children;
          cResult[7] = className;
          cResult[8] = tmp12;
          cResult[9] = tmp17;
          tmp15 = tmp17;
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
      class R {
        constructor() {
          let date;
          const track = AnalyticsUtilsDefault.track;
          const CHANGE_LOG_CTA_CLICKED = constants.CHANGE_LOG_CTA_CLICKED;
          AnalyticsUtilsDefault;
          if (changelog != null) {
            date = changelog.date;
          }
          if (date == null) {
            const _Date = Date;
            const self = this;
            const self2 = this;
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
          const obj = { change_log_id: "" + date + ":" + num, cta_type: "inline_link", target };
          track(CHANGE_LOG_CTA_CLICKED, obj);
          const openURL = LinkingDefault.openURL;
          LinkingDefault;
          const obj2 = _mod1936;
          openURL(obj2.sanitizeUrl(target));
        }
      }
      cResult[3] = revision1;
      cResult[4] = target;
      cResult[5] = R;
      tmp12 = R;
    }
  : (target) => {
      let changelogId;
      let children;
      let className;
      let locale;
      target = target.target;
      ({ changelogId, className, children } = target);
      let obj = target(573);
      const items = [LocaleStore];
      const stateFromStores = obj.useStateFromStores(items, () => locale.locale);
      let obj2 = target(7764);
      const changelog = obj2.useChangelog(changelogId, stateFromStores).changelog;
      const obj3 = {
        accessibilityRole: "link",
        style: className,
        onPress() {
          let date;
          const track = AnalyticsUtilsDefault.track;
          const CHANGE_LOG_CTA_CLICKED = constants.CHANGE_LOG_CTA_CLICKED;
          AnalyticsUtilsDefault;
          if (changelog != null) {
            date = changelog.date;
          }
          if (date == null) {
            const _Date = Date;
            const self = this;
            const self2 = this;
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
          const obj = { change_log_id: "" + date + ":" + num, cta_type: "inline_link", target };
          track(CHANGE_LOG_CTA_CLICKED, obj);
          const openURL = LinkingDefault.openURL;
          LinkingDefault;
          const obj2 = _mod1936;
          openURL(obj2.sanitizeUrl(target));
        },
        children,
      };
      return closure_10(target(1188).LegacyText, obj3);
    };
const memo2 = react.memo;
ReactCompilerGating = ReactCompilerGating_mod;
function changelogRules(changelogId, arg1) {
  let messageRules;
  let obj3;
  let obj5;
  let flag = arg1;
  if (arg1 === undefined) {
    flag = false;
  }
  const obj = ChangeLogUtilsDefault;
  if (flag) {
    const obj2 = { components: obj3 };
    let closure_0 = changelogId;
    obj3 = { Link, ListItem, LHeading: Heading, Heading };
    messageRules = obj.getMessageRules(obj2);
  } else {
    const obj4 = { components: obj5 };
    closure_0 = changelogId;
    obj5 = { Link, ListItem, LHeading: Heading, Heading };
    messageRules = obj.getDefaultRules(obj4);
  }
  return messageRules;
}
function getRenderChangelog(id) {
  let defaultRules;
  let obj3;
  id = id.id;
  const reactParserFor = MarkupUtilsDefault.reactParserFor;
  MarkupUtilsDefault;
  const obj = ChangeLogUtilsDefault;
  {
    const obj2 = { components: obj3 };
    obj3 = { Link, ListItem, LHeading: Heading, Heading };
    defaultRules = obj.getDefaultRules(obj2);
  }
  return reactParserFor(defaultRules);
}
const memo2Result = memo2(
  ReactCompilerGating.isReactCompilerEnabled()
    ? (arg0) => {
        let changeLog;
        let constants2;
        let container;
        let flex;
        let intl;
        let intl2;
        let intl3;
        let items;
        let items1;
        let items2;
        let obj4;
        let obj6;
        let onScroll;
        let scrollViewContainer;
        let tmp5;
        let tmp6;
        let video;
        let obj = onScroll(576);
        const cResult = obj.c(19);
        ({ changeLog, video, onScroll } = arg0);
        const tmp4 = closure_13();
        if (cResult[0] !== onScroll) {
          const fn = function n(nativeEvent) {
            onScroll(nativeEvent.nativeEvent);
          };
          cResult[0] = onScroll;
          cResult[1] = fn;
          tmp5 = fn;
        } else {
          tmp5 = cResult[1];
        }
        ({ flex, container, scrollViewContainer } = tmp4);
        if (cResult[2] !== changeLog) {
          let messageRules;
          const id = changeLog.id;
          const reactParserFor = MarkupUtilsDefault.reactParserFor;
          MarkupUtilsDefault;
          const obj2 = ChangeLogUtilsDefault;
          if (false) {
            const obj3 = { components: obj4 };
            obj4 = { Link, ListItem, LHeading: Heading, Heading };
            messageRules = obj2.getMessageRules(obj3);
          } else {
            const obj5 = { components: obj6 };
            obj6 = { Link, ListItem, LHeading: Heading, Heading };
            messageRules = obj2.getDefaultRules(obj5);
          }
          const tmp14 = reactParserFor(messageRules)(changeLog.body, false);
          cResult[2] = changeLog;
          cResult[3] = tmp14;
          tmp6 = tmp14;
        } else {
          tmp6 = cResult[3];
        }
        if (cResult[4] === tmp5) {
          if (cResult[5] === tmp4.container) {
            if (cResult[6] === tmp4.scrollViewContainer) {
              if (cResult[7] === tmp6) {
                let tmp15;
                let tmp18;
                let tmp21;
                let tmp24;
                let tmp27;
                if (cResult[8] === video) {
                  tmp15 = cResult[9];
                }
                const _Symbol = Symbol;
                if (cResult[10] === Symbol.for("react.memo_cache_sentinel")) {
                  const obj7 = {
                    size: "sm",
                    variant: "tertiary",
                    accessibilityRole: "link",
                    icon: closure_10(onScroll(7769).XNeutralIcon, { size: "sm", color: "interactive-icon-default" }),
                    accessibilityLabel: intl.string(onScroll(1126).t["/lXfom"]),
                    onPress() {
                      const obj = LinkingDefault;
                      obj.openURL(getLocalizedLinkDefault(constants.TWITTER));
                    },
                  };
                  const IconButton = onScroll(7575).IconButton;
                  intl = onScroll(1126).intl;
                  const tmp20 = closure_10(IconButton, obj7);
                  cResult[10] = tmp20;
                  tmp18 = tmp20;
                } else {
                  tmp18 = cResult[10];
                }
                const _Symbol2 = Symbol;
                if (cResult[11] === Symbol.for("react.memo_cache_sentinel")) {
                  const obj8 = {
                    size: "sm",
                    variant: "tertiary",
                    accessibilityRole: "link",
                    icon: closure_10(onScroll(7771).FacebookNeutralIcon, {
                      size: "sm",
                      color: "interactive-icon-default",
                    }),
                    accessibilityLabel: intl2.string(onScroll(1126).t["h0or/l"]),
                    onPress() {
                      const obj = LinkingDefault;
                      obj.openURL(constants2.FACEBOOK_URL);
                    },
                  };
                  const IconButton2 = onScroll(7575).IconButton;
                  intl2 = onScroll(1126).intl;
                  const tmp23 = closure_10(IconButton2, obj8);
                  cResult[11] = tmp23;
                  tmp21 = tmp23;
                } else {
                  tmp21 = cResult[11];
                }
                const _Symbol3 = Symbol;
                if (cResult[12] === Symbol.for("react.memo_cache_sentinel")) {
                  const obj9 = {
                    size: "sm",
                    variant: "tertiary",
                    accessibilityRole: "link",
                    icon: closure_10(onScroll(7773).InstagramNeutralIcon, {
                      size: "sm",
                      color: "interactive-icon-default",
                    }),
                    accessibilityLabel: intl3.string(onScroll(1126).t["5uVPyf"]),
                    onPress() {
                      const obj = LinkingDefault;
                      obj.openURL(constants2.INSTAGRAM_URL);
                    },
                  };
                  const IconButton3 = onScroll(7575).IconButton;
                  intl3 = onScroll(1126).intl;
                  const tmp26 = closure_10(IconButton3, obj9);
                  cResult[12] = tmp26;
                  tmp24 = tmp26;
                } else {
                  tmp24 = cResult[12];
                }
                if (cResult[13] !== tmp4.footer) {
                  const obj10 = { bottom: true, style: tmp4.footer, children: items };
                  items = [tmp18, tmp21, tmp24];
                  const tmp29 = closure_11(onScroll(6619).SafeAreaPaddingView, obj10);
                  cResult[13] = tmp4.footer;
                  cResult[14] = tmp29;
                  tmp27 = tmp29;
                } else {
                  tmp27 = cResult[14];
                }
                if (cResult[15] === tmp4.flex) {
                  if (cResult[16] === tmp27) {
                    let tmp30;
                    if (cResult[17] === tmp15) {
                      tmp30 = cResult[18];
                    }
                    return tmp30;
                  }
                }
                const obj11 = { style: flex, children: items1 };
                items1 = [tmp15, tmp27];
                const tmp33 = closure_11(closure_4, obj11);
                cResult[15] = tmp4.flex;
                cResult[16] = tmp27;
                cResult[17] = tmp15;
                cResult[18] = tmp33;
                tmp30 = tmp33;
              }
            }
          }
        }
        const obj12 = {
          contentContainerStyle: container,
          style: scrollViewContainer,
          onScroll: tmp5,
          scrollEventThrottle: 3,
          children: items2,
        };
        items2 = [video, tmp6];
        const tmp16 = closure_11(closure_5, obj12);
        cResult[4] = tmp5;
        cResult[5] = tmp4.container;
        cResult[6] = tmp4.scrollViewContainer;
        cResult[7] = tmp6;
        cResult[8] = video;
        cResult[9] = tmp16;
        tmp15 = tmp16;
      }
    : (video) => {
        let changeLog;
        let constants2;
        let defaultRules;
        let intl;
        let intl2;
        let intl3;
        let items1;
        let items2;
        let items3;
        let obj5;
        let onScroll;
        ({ changeLog, onScroll } = video);
        video = video.video;
        const tmp = closure_13();
        const items = [onScroll];
        let obj = { style: tmp.flex, children: items2 };
        const obj2 = {
          contentContainerStyle: tmp.container,
          style: tmp.scrollViewContainer,
          onScroll: react.useCallback((nativeEvent) => {
            onScroll(nativeEvent.nativeEvent);
          }, items),
          scrollEventThrottle: 3,
          children: items1,
        };
        items1 = [video];
        const id = changeLog.id;
        const reactParserFor = MarkupUtilsDefault.reactParserFor;
        MarkupUtilsDefault;
        const obj3 = ChangeLogUtilsDefault;
        {
          const obj4 = { components: obj5 };
          obj5 = { Link, ListItem, LHeading: Heading, Heading };
          defaultRules = obj3.getDefaultRules(obj4);
        }
        items1[1] = reactParserFor(defaultRules)(changeLog.body, false);
        items2 = [closure_11(closure_5, obj2)];
        const obj6 = { bottom: true, style: tmp.footer, children: items3 };
        const SafeAreaPaddingView = onScroll(6619).SafeAreaPaddingView;
        const obj7 = {
          size: "sm",
          variant: "tertiary",
          accessibilityRole: "link",
          icon: closure_10(onScroll(7769).XNeutralIcon, { size: "sm", color: "interactive-icon-default" }),
          accessibilityLabel: intl.string(onScroll(1126).t["/lXfom"]),
          onPress() {
            const obj = LinkingDefault;
            obj.openURL(getLocalizedLinkDefault(constants.TWITTER));
          },
        };
        const IconButton = onScroll(7575).IconButton;
        intl = onScroll(1126).intl;
        items3 = [closure_10(IconButton, obj7), ,];
        const obj8 = {
          size: "sm",
          variant: "tertiary",
          accessibilityRole: "link",
          icon: closure_10(onScroll(7771).FacebookNeutralIcon, { size: "sm", color: "interactive-icon-default" }),
          accessibilityLabel: intl2.string(onScroll(1126).t["h0or/l"]),
          onPress() {
            const obj = LinkingDefault;
            obj.openURL(constants2.FACEBOOK_URL);
          },
        };
        const IconButton2 = onScroll(7575).IconButton;
        intl2 = onScroll(1126).intl;
        items3[1] = closure_10(IconButton2, obj8);
        const obj9 = {
          size: "sm",
          variant: "tertiary",
          accessibilityRole: "link",
          icon: closure_10(onScroll(7773).InstagramNeutralIcon, { size: "sm", color: "interactive-icon-default" }),
          accessibilityLabel: intl3.string(onScroll(1126).t["5uVPyf"]),
          onPress() {
            const obj = LinkingDefault;
            obj.openURL(constants2.INSTAGRAM_URL);
          },
        };
        const IconButton3 = onScroll(7575).IconButton;
        intl3 = onScroll(1126).intl;
        items3[2] = closure_10(IconButton3, obj9);
        items2[1] = closure_11(SafeAreaPaddingView, obj6);
        return closure_11(closure_4, obj);
      },
);
size = size_mod;
const result = size.fileFinishedImporting("components_native/ChangeLogStandardTemplate.tsx");

export default memo2Result;
export const ListItem = memoResult;
export { changelogRules };
export { getRenderChangelog };
