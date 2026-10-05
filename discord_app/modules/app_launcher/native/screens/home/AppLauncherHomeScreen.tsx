// === Module 11694: AppLauncherHomeScreen ===

// Module 11694 (AppLauncherHomeScreen)
import _modDef12 from "module_12" /* 12 */;
import initialize from "initialize" /* 504 */;
import c from "c" /* 576 */;
import nativeDefault from "native" /* 587 */;
import util from "util" /* 1126 */;
import GlobalUtils from "GlobalUtils" /* 1375 */;
import FlagUtils from "FlagUtils" /* 1390 */;
import AvatarUtilsDefault from "AvatarUtils" /* 1402 */;
import useSafeAreaInsetsDefault from "useSafeAreaInsets" /* 1618 */;
import dismissible_content from "dismissible_content" /* 2036 */;
import DismissibleContentUnsafeUtils from "DismissibleContentUnsafeUtils" /* 4698 */;
import Text_Text from "Text/Text" /* 4886 */;
import AppAnalyticsUtils from "AppAnalyticsUtils" /* 5070 */;
import FastImageDefault from "FastImage" /* 5974 */;
import TableRow from "TableRow" /* 5993 */;
import useIsWindowLargeDefault from "useIsWindowLarge" /* 6433 */;
import ApplicationCommandTypes from "ApplicationCommandTypes" /* 7034 */;
import ChannelListLayoutTypes from "ChannelListLayoutTypes" /* 7514 */;
import native from "native" /* 8567 */;
import AppLauncherUtils from "AppLauncherUtils" /* 8794 */;
import AppLauncherTypes from "AppLauncherTypes" /* 8932 */;
import EmbeddedActivitiesActionCreators from "EmbeddedActivitiesActionCreators" /* 8993 */;
import useEmbeddedActivityBackgroundDefault from "useEmbeddedActivityBackground" /* 9149 */;
import roundToNearestPixelDefault from "roundToNearestPixel" /* 10725 */;
import AppLauncherContext from "AppLauncherContext" /* 10994 */;
import AppLauncherNativeUtils from "AppLauncherNativeUtils" /* 11665 */;
import FrecencySection from "FrecencySection" /* 11666 */;
import EntityBorderAppIconDefault from "EntityBorderAppIcon" /* 11670 */;
import ApplicationDirectoryActionCreators from "ApplicationDirectoryActionCreators" /* 11685 */;
import ApplicationCollectionActiveState2 from "ApplicationCollectionActiveState" /* 11692 */;
import MessagePreviewMarkup from "MessagePreviewMarkup" /* 11695 */;
import HeroMedia from "HeroMedia" /* 11708 */;
import BrokenImageDefault from "BrokenImage" /* 11709 */;
import ActivityShelfBadgeDefault from "ActivityShelfBadge" /* 11710 */;
import AppLauncherHomeTypes from "AppLauncherHomeTypes" /* 11712 */;
import AppLauncherOnboardingActionCreators from "AppLauncherOnboardingActionCreators" /* 11723 */;
import ExpandableList from "ExpandableList" /* 11732 */;
import InThisServerSection from "InThisServerSection" /* 11734 */;
import ApplicationDirectoryCollectionType from "ApplicationDirectoryCollectionType" /* 11747 */;
import ApplicationCollectionFlags from "ApplicationCollectionFlags" /* 11750 */;
import _slicedToArray from "module_32" /* 32 */;
import noop from "module_19" /* 19 */;
import EmbeddedActivitiesStore from "EmbeddedActivitiesStore" /* 2050 */;
import DevSettingsStore from "DevSettingsStore" /* 4889 */;
import ApplicationDirectoryCollectionsStore from "ApplicationDirectoryCollectionsStore" /* 11687 */;
import PermissionStore from "PermissionStore" /* 4509 */;
import AppLauncherOnboardingPersistedStore from "AppLauncherOnboardingPersistedStore" /* 11658 */;

const EmbeddedActivitiesActionCreatorsAll = EmbeddedActivitiesActionCreators;

require = fn;
function getRecommendationItemsWithViewAll(found1, in_this_server, stringResult) {
  _require = in_this_server;
  let COLLAPSED_LIST_ITEM_MAX = IN_THIS_SERVER_ITEM_MAX;
  if (IN_THIS_SERVER_ITEM_MAX === undefined) {
    COLLAPSED_LIST_ITEM_MAX = require("ExpandableList").COLLAPSED_LIST_ITEM_MAX;
  }
  const sectionOverallPosition = tmp3;
  let bound;
  dependencyMap = undefined;
  let items;
  if (0 === found1.length) {
    return [];
  } else {
    const _Math = Math;
    bound = Math.min(length, COLLAPSED_LIST_ITEM_MAX);
    dependencyMap = tmp12;
    items = [];
    const obj2 = { type: require("AppLauncherHomeTypes").AppLauncherHomeListItemType.RECOMMENDATION_SECTION_HEADER, section: stringResult, sectionName: in_this_server, numItems: length, numVisibleItems: bound };
    items.push(obj2);
    const substr = found1.slice(0, bound);
    const item = substr.forEach((application, sectionPosition) => {
      const obj = { type: AppLauncherHomeTypes.AppLauncherHomeListItemType.RECOMMENDATION_APP, application: application.application, showsPromoted: application.showsPromoted, isFirstRow: 0 === sectionPosition, isLastRow: null, sectionName: null, sectionPosition: null, sectionOverallPosition: null };
      let tmp2 = sectionPosition === bound - 1;
      if (tmp2) {
        tmp2 = !closure_3;
      }
      obj.isLastRow = tmp2;
      obj.sectionName = sectionName;
      obj.sectionPosition = sectionPosition;
      obj.sectionOverallPosition = sectionOverallPosition;
      items.push(obj);
    });
    if (bound < length) {
      let obj = { type: require("AppLauncherHomeTypes").AppLauncherHomeListItemType.VIEW_ALL, applications: found1.map((application) => application.application), promotedApplicationIds: null, sectionName: null, sectionOverallPosition: null, title: null };
      const _Set = Set;
      const set = new Set();
      obj.promotedApplicationIds = found1.reduce((add, showsPromoted) => {
        if (showsPromoted.showsPromoted) {
          add.add(showsPromoted.application.id);
        }
        return add;
      }, set);
      obj.sectionName = in_this_server;
      obj.sectionOverallPosition = tmp3;
      obj.title = stringResult;
      items.push(obj);
    }
    return items;
  }
}
get_ActivityIndicator = fn(17);
({ View: metroRequire, StyleSheet } = get_ActivityIndicator);
const ApplicationCommandIndexStore = fn(8795);
({ useContextIndexState: closure_8, useUserIndexState: closure_9 } = ApplicationCommandIndexStore);
const AppLauncherNativeConstants = fn(1489);
const DEFAULT_CONTENT_PADDING = AppLauncherNativeConstants.DEFAULT_CONTENT_PADDING;
let closure_15 = AppLauncherNativeConstants.FLASH_LIST_ITEM_IMPRESSION_VIEWABILITY_CONFIG;
const Constants = fn(1085);
({ AnalyticEvents: closure_16, Permissions: closure_17 } = Constants);
const ContentDismissActionType = fn(2048).ContentDismissActionType;
const jsxProd = fn(21);
({ jsx: closure_19, jsxs: closure_20, Fragment: closure_21 } = jsxProd);
let c22 = 12;
let c23 = 1.7777777777777777;
const APP_LAUNCHER_IN_TEXT = fn(11691).ApplicationCollectionSurface.APP_LAUNCHER_IN_TEXT;
const createStyles = fn(4890);
let obj2 = { container: { backgroundColor: nativeDefault.colors.MOBILE_KEYBOARD_PANEL_BACKGROUND, flex: 1 }, topBackgroundFill: null, sectionHeader: null, list: null, searchBarContainer: null, divider: null, appRowLabelWithPromotedContainer: null, appRowLabelWithPromotedTextContainer: null, promotedLabel: null, activityItemContainer: null, activityImageContainer: null, activityDetailsContainer: null, activityItemTupleContainer: null, activityItemTupleShelfItemContainer: null, activityItemImage: null, submittingOverlay: null };
let rect = { backgroundColor: nativeDefault.colors.MOBILE_KEYBOARD_PANEL_BACKGROUND, position: "absolute", top: -16, left: 0, right: 0, height: 16 };
obj2.topBackgroundFill = rect;
obj2.sectionHeader = { marginBottom: 8, marginTop: 8 };
let obj3 = { backgroundColor: nativeDefault.colors.MOBILE_KEYBOARD_PANEL_BACKGROUND, flex: 1 };
obj2.list = { paddingHorizontal: DEFAULT_CONTENT_PADDING, backgroundColor: nativeDefault.colors.MOBILE_KEYBOARD_PANEL_BACKGROUND };
obj2.searchBarContainer = { paddingHorizontal: DEFAULT_CONTENT_PADDING, paddingBottom: DEFAULT_CONTENT_PADDING };
let obj4 = { paddingHorizontal: DEFAULT_CONTENT_PADDING, backgroundColor: nativeDefault.colors.MOBILE_KEYBOARD_PANEL_BACKGROUND };
obj2.divider = { borderColor: nativeDefault.colors.BORDER_STRONG, borderTopWidth: 1, marginTop: nativeDefault.space.PX_24 };
obj2.appRowLabelWithPromotedContainer = { overflow: "hidden", flexDirection: "row", alignItems: "center", gap: nativeDefault.space.PX_4 };
obj2.appRowLabelWithPromotedTextContainer = { flexShrink: 1 };
let obj5 = { borderColor: nativeDefault.colors.BORDER_STRONG, borderTopWidth: 1, marginTop: nativeDefault.space.PX_24 };
obj2.promotedLabel = { alignSelf: "center", justifyContent: "center", paddingVertical: 2, paddingHorizontal: nativeDefault.space.PX_4, backgroundColor: nativeDefault.colors.INTERACTIVE_BACKGROUND_ACTIVE, borderRadius: nativeDefault.radii.lg };
let obj6 = { alignSelf: "center", justifyContent: "center", paddingVertical: 2, paddingHorizontal: nativeDefault.space.PX_4, backgroundColor: nativeDefault.colors.INTERACTIVE_BACKGROUND_ACTIVE, borderRadius: nativeDefault.radii.lg };
obj2.activityItemContainer = { borderRadius: nativeDefault.radii.md, overflow: "hidden", height: "100%", backgroundColor: nativeDefault.colors.BACKGROUND_APP_LAUNCHER_CARD_DEFAULT, borderWidth: 1, borderColor: nativeDefault.colors.BORDER_SUBTLE };
let obj7 = { borderRadius: nativeDefault.radii.md, overflow: "hidden", height: "100%", backgroundColor: nativeDefault.colors.BACKGROUND_APP_LAUNCHER_CARD_DEFAULT, borderWidth: 1, borderColor: nativeDefault.colors.BORDER_SUBTLE };
obj2.activityImageContainer = { justifyContent: "center", alignItems: "center", height: 120, backgroundColor: nativeDefault.colors.BACKGROUND_BASE_LOWEST, borderBottomWidth: StyleSheet.hairlineWidth, borderBottomColor: nativeDefault.colors.BORDER_SUBTLE };
let obj8 = { justifyContent: "center", alignItems: "center", height: 120, backgroundColor: nativeDefault.colors.BACKGROUND_BASE_LOWEST, borderBottomWidth: StyleSheet.hairlineWidth, borderBottomColor: nativeDefault.colors.BORDER_SUBTLE };
obj2.activityDetailsContainer = { padding: nativeDefault.space.PX_12, flexGrow: 1, flexShrink: 1 };
obj2.activityItemTupleContainer = { flexDirection: "row", gap: 12 };
obj2.activityItemTupleShelfItemContainer = { width: "50%", flexShrink: 1 };
obj2.activityItemImage = { height: "100%", width: "100%" };
obj2.submittingOverlay = { position: "absolute", top: 0, left: 0, height: "100%", width: "100%" };
let closure_26 = createStyles.createStyles(obj2);
let ReactCompilerGating = fn(558);
let closure_27 = ReactCompilerGating.isReactCompilerEnabled() ? ((renderedName) => {
  const cResult = c.c(12);
  renderedName = renderedName.renderedName;
  let appRowLabelWithPromotedContainer = closure_26();
  if (renderedName.showsPromoted) {
    if (cResult[2] === renderedName) {
      if (cResult[3] === appRowLabelWithPromotedContainer.appRowLabelWithPromotedTextContainer) {
        let tmp7 = cResult[4];
      }
      const _Symbol = Symbol;
      if (cResult[5] === Symbol.for("react.memo_cache_sentinel")) {
        const obj2 = { variant: "text-xxs/semibold", color: "text-muted", children: null };
        const intl = util.intl;
        obj2.children = intl.string(util.t["/eVltv"]);
        const tmp13 = closure_1_19(Text_Text.Text, obj2);
        cResult[5] = tmp13;
        let tmp11 = tmp13;
      } else {
        tmp11 = cResult[5];
      }
      if (cResult[6] !== appRowLabelWithPromotedContainer.promotedLabel) {
        const obj3 = { style: appRowLabelWithPromotedContainer.promotedLabel, children: tmp11 };
        const tmp17 = closure_1_19(timestampProducer, obj3);
        cResult[6] = appRowLabelWithPromotedContainer.promotedLabel;
        cResult[7] = tmp17;
        let tmp14 = tmp17;
      } else {
        tmp14 = cResult[7];
      }
      if (cResult[8] === appRowLabelWithPromotedContainer.appRowLabelWithPromotedContainer) {
        if (cResult[9] === tmp7) {
        }
      }
      const obj4 = { style: appRowLabelWithPromotedContainer.appRowLabelWithPromotedContainer, children: null };
      const items = [tmp7, tmp14];
      obj4.children = items;
      const tmp21 = closure_1_20(timestampProducer, obj4);
      appRowLabelWithPromotedContainer = appRowLabelWithPromotedContainer.appRowLabelWithPromotedContainer;
      cResult[8] = appRowLabelWithPromotedContainer;
      cResult[9] = tmp7;
      cResult[10] = tmp14;
      cResult[11] = tmp21;
    }
    const obj5 = { style: appRowLabelWithPromotedContainer.appRowLabelWithPromotedTextContainer, variant: "text-md/semibold", color: "mobile-text-heading-primary", lineClamp: 1, children: renderedName };
    const tmp9 = closure_1_19(Text_Text.Text, obj5);
    cResult[2] = renderedName;
    cResult[3] = appRowLabelWithPromotedContainer.appRowLabelWithPromotedTextContainer;
    cResult[4] = tmp9;
    tmp7 = tmp9;
  } else {
    if (cResult[0] !== renderedName) {
      const obj6 = { variant: "text-md/semibold", color: "mobile-text-heading-primary", lineClamp: 1, children: renderedName };
      const tmp6 = closure_1_19(Text_Text.Text, obj6);
      cResult[0] = renderedName;
      cResult[1] = tmp6;
      let tmp4 = tmp6;
    } else {
      tmp4 = cResult[1];
    }
    return tmp4;
  }
}) : ((renderedName) => {
  renderedName = renderedName.renderedName;
  const tmp = closure_26();
  if (renderedName.showsPromoted) {
    const obj2 = { style: tmp.appRowLabelWithPromotedContainer, children: null };
    const obj3 = { style: tmp.appRowLabelWithPromotedTextContainer, variant: "text-md/semibold", color: "mobile-text-heading-primary", lineClamp: 1, children: renderedName };
    const items = [closure_1_19(Text_Text.Text, obj3), ];
    const obj4 = { style: tmp.promotedLabel, children: null };
    const obj5 = { variant: "text-xxs/semibold", color: "text-muted", children: null };
    const intl = util.intl;
    obj5.children = intl.string(util.t["/eVltv"]);
    obj4.children = closure_1_19(Text_Text.Text, obj5);
    items[1] = closure_1_19(timestampProducer, obj4);
    obj2.children = items;
    let tmp5 = closure_1_20(timestampProducer, obj2);
  } else {
    const obj = { variant: "text-md/semibold", color: "mobile-text-heading-primary", lineClamp: 1, children: renderedName };
    tmp5 = closure_1_19(Text_Text.Text, obj);
  }
  return tmp5;
});
ReactCompilerGating = fn(558);
let tmp7 = ReactCompilerGating.isReactCompilerEnabled() ? ((arg0) => {
  const cResult = c.c(19);
  ({ application, iconSource, onPress, isFirstRow, isLastRow, showsPromoted } = arg0);
  if (cResult[0] !== iconSource) {
    let tmp9 = null != iconSource;
    if (tmp9) {
      const obj2 = { iconSource };
      tmp9 = closure_1_19(EntityBorderAppIconDefault, obj2);
    }
    cResult[0] = iconSource;
    cResult[1] = tmp9;
    let tmp7 = tmp9;
  } else {
    tmp7 = cResult[1];
  }
  let FAKE_BUILT_IN_APP = application;
  if (application == null) {
    FAKE_BUILT_IN_APP = AppLauncherUtils.FAKE_BUILT_IN_APP;
  }
  if (cResult[2] !== FAKE_BUILT_IN_APP) {
    const sectionName = AppLauncherUtils.getSectionName(FAKE_BUILT_IN_APP);
    cResult[2] = FAKE_BUILT_IN_APP;
    cResult[3] = sectionName;
    let tmp12 = sectionName;
    const tmpResult = AppLauncherUtils;
  } else {
    tmp12 = cResult[3];
  }
  if (cResult[4] === application) {
    if (cResult[5] === tmp6) {
      let tmp14 = cResult[6];
    }
    if (cResult[7] !== application) {
      let FAKE_BUILT_IN_APP3 = application;
      if (application == null) {
        FAKE_BUILT_IN_APP3 = AppLauncherUtils.FAKE_BUILT_IN_APP;
      }
      const sectionDescription = AppLauncherUtils.getSectionDescription(FAKE_BUILT_IN_APP3);
      let result = null;
      if (null != sectionDescription) {
        result = null;
        if ("" !== sectionDescription) {
          const obj3 = { content: sectionDescription, muted: false, layout: ChannelListLayoutTypes.ChannelListLayoutTypes.COMPACT, color: "text-muted" };
          result = MessagePreviewMarkup.renderMessagePreviewMarkup(obj3);
          const tmpResult5 = MessagePreviewMarkup;
        }
      }
      cResult[7] = application;
      cResult[8] = result;
      let tmp16 = result;
      const tmpResult4 = AppLauncherUtils;
    } else {
      tmp16 = cResult[8];
    }
    if (cResult[9] === tmp12) {
      if (cResult[10] === tmp14) {
        let tmp19 = cResult[11];
      }
      if (cResult[12] === tmp7) {
        if (cResult[13] === tmp4) {
          if (cResult[14] === tmp5) {
            if (cResult[15] === onPress) {
              if (cResult[16] === tmp16) {
                if (cResult[17] === tmp19) {
                  let tmp23 = cResult[18];
                }
                return tmp23;
              }
            }
          }
        }
      }
      const obj4 = { icon: tmp7, label: tmp19, labelLineClamp: 1, subLabel: tmp16, subLabelLineClamp: 1, start: tmp4, end: tmp5, arrow: true, onPress };
      const tmp25 = closure_1_19(TableRow.TableRow, obj4);
      cResult[12] = tmp7;
      cResult[13] = tmp4;
      cResult[14] = tmp5;
      cResult[15] = onPress;
      cResult[16] = tmp16;
      cResult[17] = tmp19;
      cResult[18] = tmp25;
      tmp23 = tmp25;
    }
    const obj5 = { renderedName: tmp12, showsPromoted: tmp14 };
    const tmp22 = closure_1_19(closure_27, obj5);
    cResult[9] = tmp12;
    cResult[10] = tmp14;
    cResult[11] = tmp22;
    tmp19 = tmp22;
  }
  let result1 = tmp6;
  if (!(undefined !== showsPromoted && showsPromoted)) {
    let FAKE_BUILT_IN_APP2 = application;
    if (application == null) {
      FAKE_BUILT_IN_APP2 = AppLauncherUtils.FAKE_BUILT_IN_APP;
    }
    result1 = AppLauncherUtils.isPromotedApplication(FAKE_BUILT_IN_APP2);
    const tmpResult6 = AppLauncherUtils;
  }
  cResult[4] = application;
  cResult[5] = undefined !== showsPromoted && showsPromoted;
  cResult[6] = result1;
  tmp14 = result1;
}) : ((application) => {
  application = application.application;
  ({ iconSource, isFirstRow } = application);
  if (isFirstRow === undefined) {
    isFirstRow = false;
  }
  let flag = application.isLastRow;
  if (flag === undefined) {
    flag = false;
  }
  let flag2 = application.showsPromoted;
  if (flag2 === undefined) {
    flag2 = false;
  }
  let tmp = null != iconSource;
  if (tmp) {
    const obj = { iconSource };
    tmp = closure_19(EntityBorderAppIconDefault, obj);
  }
  let FAKE_BUILT_IN_APP = application;
  if (application == null) {
    FAKE_BUILT_IN_APP = tmp5(8794).FAKE_BUILT_IN_APP;
  }
  const sectionName = application(8794).getSectionName(FAKE_BUILT_IN_APP);
  if (!flag2) {
    let FAKE_BUILT_IN_APP2 = application;
    if (application == null) {
      FAKE_BUILT_IN_APP2 = tmp5(8794).FAKE_BUILT_IN_APP;
    }
    flag2 = tmp5(8794).isPromotedApplication(FAKE_BUILT_IN_APP2);
    const tmp5Result = tmp5(8794);
  }
  const items = [application];
  const memo = noop.useMemo(() => {
    let FAKE_BUILT_IN_APP = application;
    if (application == null) {
      FAKE_BUILT_IN_APP = AppLauncherUtils.FAKE_BUILT_IN_APP;
    }
    const sectionDescription = AppLauncherUtils.getSectionDescription(FAKE_BUILT_IN_APP);
    let result = null;
    if (null != sectionDescription) {
      result = null;
      if ("" !== sectionDescription) {
        const obj2 = { content: sectionDescription, muted: false, layout: ChannelListLayoutTypes.ChannelListLayoutTypes.COMPACT, color: "text-muted" };
        result = MessagePreviewMarkup.renderMessagePreviewMarkup(obj2);
        const tmpResult = MessagePreviewMarkup;
      }
    }
    return result;
  }, items);
  let obj2 = application(8794);
  return closure_19(application(5993).TableRow, { icon: tmp, label: closure_19(closure_27, { renderedName: sectionName, showsPromoted: flag2 }), labelLineClamp: 1, subLabel: memo, subLabelLineClamp: 1, start: isFirstRow, end: flag, arrow: true, onPress: application.onPress });
});
let closure_28 = tmp7;
ReactCompilerGating = fn(558);
let closure_29 = ReactCompilerGating.isReactCompilerEnabled() ? ((arg0) => {
  const cResult = c.c(8);
  ({ section, onPress, isFirstRow, isLastRow } = arg0);
  if (cResult[0] !== section.application) {
    const appLauncherIconSource = AppLauncherNativeUtils.getAppLauncherIconSource(section.application);
    cResult[0] = section.application;
    cResult[1] = appLauncherIconSource;
    let tmp6 = appLauncherIconSource;
    const tmpResult = AppLauncherNativeUtils;
  } else {
    tmp6 = cResult[1];
  }
  if (cResult[2] === tmp6) {
    if (cResult[3] === tmp4) {
      if (cResult[4] === tmp5) {
        if (cResult[5] === onPress) {
          if (cResult[6] === section.application) {
            let tmp8 = cResult[7];
          }
          return tmp8;
        }
      }
    }
  }
  const tmp9 = closure_1_19(closure_28, { application: section.application, iconSource: tmp6, onPress, isFirstRow: undefined !== isFirstRow && isFirstRow, isLastRow: undefined !== isLastRow && isLastRow });
  cResult[2] = tmp6;
  cResult[3] = undefined !== isFirstRow && isFirstRow;
  cResult[4] = undefined !== isLastRow && isLastRow;
  cResult[5] = onPress;
  cResult[6] = section.application;
  cResult[7] = tmp9;
  tmp8 = tmp9;
  const obj2 = { application: section.application, iconSource: tmp6, onPress, isFirstRow: undefined !== isFirstRow && isFirstRow, isLastRow: undefined !== isLastRow && isLastRow };
}) : ((isLastRow) => {
  ({ section, isFirstRow } = isLastRow);
  if (isFirstRow === undefined) {
    isFirstRow = false;
  }
  let flag = isLastRow.isLastRow;
  if (flag === undefined) {
    flag = false;
  }
  return closure_1_19(closure_28, { application: section.application, iconSource: AppLauncherNativeUtils.getAppLauncherIconSource(section.application), onPress: isLastRow.onPress, isFirstRow, isLastRow: flag });
});
ReactCompilerGating = fn(558);
let closure_30 = ReactCompilerGating.isReactCompilerEnabled() ? ((section) => {
  const cResult = c.c(18);
  section = section.section;
  const onPress = section.onPress;
  ({ isFirstRow, isLastRow } = section);
  if (cResult[0] === section.application.bot) {
    if (cResult[1] === section.application.icon) {
      if (cResult[2] === section.application.id) {
        let tmp6 = cResult[3];
      }
      if (cResult[4] !== tmp6) {
        let tmp11 = null != tmp6;
        if (tmp11) {
          const obj3 = { iconSource: tmp6 };
          tmp11 = closure_1_19(EntityBorderAppIconDefault, obj3);
        }
        cResult[4] = tmp6;
        class C {
          constructor() {
            tmp = onPress(section);
            return;
          }
        }
        cResult[5] = tmp11;
        let tmp9 = tmp11;
      } else {
        tmp9 = cResult[5];
      }
      const description = section.application.description;
      if (cResult[6] !== description) {
        let tmp16 = null;
        if (null != description) {
          tmp16 = null;
          if ("" !== description) {
            const obj4 = { content: description, muted: false, layout: null, color: "text-muted" };
            const renderMessagePreviewMarkup = MessagePreviewMarkup.renderMessagePreviewMarkup;
            obj4.layout = ChannelListLayoutTypes.ChannelListLayoutTypes.COMPACT;
            class C {
              constructor() {
                tmp = onPress(section);
                return;
              }
            }
            const tmpResult = MessagePreviewMarkup;
          }
        }
        cResult[6] = description;
        class C {
          constructor() {
            tmp = onPress(section);
            return;
          }
        }
        cResult[7] = tmp16;
        let tmp14 = tmp16;
      } else {
        tmp14 = cResult[7];
      }
      if (cResult[8] === onPress) {
        if (cResult[9] === section) {
          let tmp18 = cResult[10];
        }
        if (cResult[11] === tmp9) {
          if (cResult[12] === tmp4) {
            if (cResult[13] === tmp5) {
              if (cResult[14] === tmp18) {
                if (cResult[15] === tmp14) {
                  if (cResult[16] === section.application.name) {
                    let tmp19 = cResult[17];
                  }
                  return tmp19;
                }
              }
            }
          }
        }
        const obj5 = { icon: tmp9, label: null, subLabel: null, subLabelLineClamp: 1, start: null, end: null, arrow: true, onPress: null };
        class C {
          constructor() {
            tmp = onPress(section);
            return;
          }
        }
        obj5.subLabel = tmp14;
        obj5.start = tmp4;
        obj5.end = tmp5;
        obj5.onPress = tmp18;
        const tmp21 = closure_1_19(TableRow.TableRow, obj5);
        cResult[11] = tmp9;
        cResult[12] = tmp4;
        cResult[13] = tmp5;
        cResult[14] = tmp18;
        cResult[15] = tmp14;
        cResult[16] = section.application.name;
        cResult[17] = tmp21;
        tmp19 = tmp21;
      }
      class C {
        constructor() {
          tmp = onPress(section);
          return;
        }
      }
      cResult[8] = onPress;
      cResult[9] = section;
      cResult[10] = C;
      tmp18 = C;
    }
  }
  const obj6 = { id: section.application.id, icon: section.application.icon, bot: null, botIconFirst: true };
  const application = section.application;
  let bot;
  if (application != null) {
    bot = application.bot;
  }
  obj6.bot = bot;
  const applicationIconSource = AvatarUtilsDefault.getApplicationIconSource(obj6);
  cResult[0] = section.application.bot;
  cResult[1] = section.application.icon;
  cResult[2] = section.application.id;
  cResult[3] = applicationIconSource;
  tmp6 = applicationIconSource;
}) : ((section) => {
  section = section.section;
  const onPress = section.onPress;
  let flag = section.isFirstRow;
  if (flag === undefined) {
    flag = false;
  }
  let flag2 = section.isLastRow;
  if (flag2 === undefined) {
    flag2 = false;
  }
  let obj2 = { id: section.application.id, icon: section.application.icon, bot: null, botIconFirst: true };
  const application = section.application;
  let bot;
  if (application != null) {
    bot = application.bot;
  }
  obj2.bot = bot;
  const applicationIconSource = onPress(1402).getApplicationIconSource(obj2);
  let tmp5 = null != applicationIconSource;
  if (tmp5) {
    const obj3 = { iconSource: applicationIconSource };
    tmp5 = closure_19(onPress(11670), obj3);
  }
  const items = [section];
  const items1 = [section, onPress];
  const memo = noop.useMemo(() => {
    const description = section.application.description;
    let result = null;
    if (null != description) {
      result = null;
      if ("" !== description) {
        const obj2 = { content: description, muted: false, layout: ChannelListLayoutTypes.ChannelListLayoutTypes.COMPACT, color: "text-muted" };
        result = MessagePreviewMarkup.renderMessagePreviewMarkup(obj2);
      }
    }
    return result;
  }, items);
  const callback = noop.useCallback(() => {
    onPress(section);
  }, items1);
  return closure_19(section(5993).TableRow, { icon: tmp5, label: section.application.name, subLabel: memo, subLabelLineClamp: 1, start: flag, end: flag2, arrow: true, onPress: callback });
});
ReactCompilerGating = fn(558);
let closure_31 = ReactCompilerGating.isReactCompilerEnabled() ? ((isLastTuple) => {
  const cResult = c.c(39);
  ({ context, sectionName, onPress, usesHandleActivityItemSelected, onActivityItemSelected, shelfItem1, shelfItem2, entrypoint, containerWidth } = isLastTuple);
  const tmp3 = closure_26();
  if (null != containerWidth) {
    const tmp7 = roundToNearestPixelDefault(containerWidth / 2 - DEFAULT_CONTENT_PADDING - 6);
    const result = tmp7 / c23;
    if (cResult[1] !== result) {
      const tmp11 = roundToNearestPixelDefault(result);
      cResult[1] = result;
      cResult[2] = tmp11;
      let tmp10 = tmp11;
    } else {
      tmp10 = cResult[2];
    }
    if (cResult[3] === tmp10) {
    }
    const size1 = { width: tmp7, height: tmp10 };
    cResult[3] = tmp10;
    cResult[4] = tmp7;
    cResult[5] = size1;
  } else {
    const _Symbol = Symbol;
    if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
      const size2 = { width: "Array", height: "Set" };
      cResult[0] = size2;
      let size = size2;
    } else {
      size = cResult[0];
    }
    let tmp14;
    if (!isLastTuple.isLastTuple) {
      tmp14 = c22;
    }
    if (cResult[6] !== tmp14) {
      const obj2 = { marginBottom: tmp14 };
      cResult[6] = tmp14;
      cResult[7] = obj2;
      let tmp15 = obj2;
    } else {
      tmp15 = cResult[7];
    }
    if (cResult[8] === tmp3.activityItemTupleContainer) {
      if (cResult[9] === tmp15) {
        let tmp16 = cResult[10];
      }
      if (cResult[11] === context) {
        if (cResult[12] === entrypoint) {
          if (cResult[13] === size.height) {
            if (cResult[14] === size.width) {
              if (cResult[15] === onActivityItemSelected) {
                if (cResult[16] === onPress) {
                  if (cResult[17] === sectionName) {
                    if (cResult[18] === shelfItem1) {
                      if (cResult[19] === usesHandleActivityItemSelected) {
                        let tmp17 = cResult[20];
                      }
                      if (cResult[21] === tmp3.activityItemTupleShelfItemContainer) {
                        if (cResult[22] === tmp17) {
                          let tmp21 = cResult[23];
                        }
                        if (cResult[24] === context) {
                          if (cResult[25] === entrypoint) {
                            if (cResult[26] === size.height) {
                              if (cResult[27] === size.width) {
                                if (cResult[28] === onActivityItemSelected) {
                                  if (cResult[29] === onPress) {
                                    if (cResult[30] === sectionName) {
                                      if (cResult[31] === shelfItem2) {
                                        if (cResult[32] === tmp3.activityItemTupleShelfItemContainer) {
                                          if (cResult[33] === usesHandleActivityItemSelected) {
                                            let tmp25 = cResult[34];
                                          }
                                          if (cResult[35] === tmp16) {
                                            if (cResult[36] === tmp21) {
                                              if (cResult[37] === tmp25) {
                                                let tmp30 = cResult[38];
                                              }
                                              return tmp30;
                                            }
                                          }
                                          const obj3 = { style: tmp16, children: null };
                                          const items = [tmp21, tmp25];
                                          obj3.children = items;
                                          const tmp33 = closure_1_20(timestampProducer, obj3);
                                          cResult[35] = tmp16;
                                          cResult[36] = tmp21;
                                          cResult[37] = tmp25;
                                          cResult[38] = tmp33;
                                          tmp30 = tmp33;
                                        }
                                      }
                                    }
                                  }
                                }
                              }
                            }
                          }
                        }
                        let tmp26 = null != shelfItem2;
                        if (tmp26) {
                          const obj4 = { style: tmp3.activityItemTupleShelfItemContainer, children: null };
                          const obj6 = { context, sectionName, onPress, usesHandleActivityItemSelected, onActivityItemSelected, shelfItem: shelfItem2, entrypoint, imageWidth: null, imageHeight: null };
                          ({ width: obj8.imageWidth, height: obj8.imageHeight } = size);
                          obj4.children = closure_1_19(closure_32, obj6);
                          tmp26 = closure_1_19(timestampProducer, obj4);
                        }
                        cResult[24] = context;
                        cResult[25] = entrypoint;
                        cResult[26] = size.height;
                        cResult[27] = size.width;
                        cResult[28] = onActivityItemSelected;
                        cResult[29] = onPress;
                        cResult[30] = sectionName;
                        cResult[31] = shelfItem2;
                        cResult[32] = tmp3.activityItemTupleShelfItemContainer;
                        cResult[33] = usesHandleActivityItemSelected;
                        cResult[34] = tmp26;
                        tmp25 = tmp26;
                      }
                      const obj7 = { style: tmp3.activityItemTupleShelfItemContainer, children: tmp17 };
                      const tmp24 = closure_1_19(timestampProducer, obj7);
                      cResult[21] = tmp3.activityItemTupleShelfItemContainer;
                      cResult[22] = tmp17;
                      cResult[23] = tmp24;
                      tmp21 = tmp24;
                    }
                  }
                }
              }
            }
          }
        }
      }
      const obj9 = { context, sectionName, onPress, usesHandleActivityItemSelected, onActivityItemSelected, shelfItem: shelfItem1, entrypoint, imageWidth: null, imageHeight: null };
      ({ width: obj5.imageWidth, height: obj5.imageHeight } = size);
      const tmp20 = closure_1_19(closure_32, obj9);
      cResult[11] = context;
      cResult[12] = entrypoint;
      cResult[13] = size.height;
      cResult[14] = size.width;
      cResult[15] = onActivityItemSelected;
      cResult[16] = onPress;
      cResult[17] = sectionName;
      cResult[18] = shelfItem1;
      cResult[19] = usesHandleActivityItemSelected;
      cResult[20] = tmp20;
      tmp17 = tmp20;
    }
    const items1 = [tmp3.activityItemTupleContainer, tmp15];
    cResult[8] = tmp3.activityItemTupleContainer;
    cResult[9] = tmp15;
    cResult[10] = items1;
    tmp16 = items1;
  }
}) : ((arg0) => {
  ({ context, sectionName, onPress, usesHandleActivityItemSelected, onActivityItemSelected, shelfItem2, entrypoint, containerWidth } = arg0);
  ({ shelfItem1, isLastTuple } = arg0);
  const tmp = closure_26();
  const items = [containerWidth];
  let size = noop.useMemo(() => {
    if (null == containerWidth) {
      return { width: "Array", height: "Set" };
    } else {
      const tmp5 = roundToNearestPixelDefault(tmp / 2 - DEFAULT_CONTENT_PADDING - 6);
      const size = { width: tmp5, height: roundToNearestPixelDefault(tmp5 / c23) };
      return size;
    }
  }, items);
  const items1 = [tmp.activityItemTupleContainer, ];
  let tmp4;
  if (!isLastTuple) {
    tmp4 = c22;
  }
  const obj = { style: items1, children: null };
  items1[1] = { marginBottom: tmp4 };
  const obj2 = { style: tmp.activityItemTupleShelfItemContainer, children: closure_19(closure_32, { context, sectionName, onPress, usesHandleActivityItemSelected, onActivityItemSelected, shelfItem: shelfItem1, entrypoint, imageWidth: size.width, imageHeight: size.height }) };
  const items2 = [closure_19(closure_6, obj2), ];
  let tmp5Result = null != shelfItem2;
  if (tmp5Result) {
    const obj4 = { style: tmp.activityItemTupleShelfItemContainer, children: null };
    const obj9 = { context, sectionName, onPress, usesHandleActivityItemSelected, onActivityItemSelected, shelfItem: shelfItem2, entrypoint, imageWidth: null, imageHeight: null };
    ({ width: obj5.imageWidth, height: obj5.imageHeight } = size);
    obj4.children = closure_19(closure_32, obj9);
    tmp5Result = closure_19(closure_6, obj4);
  }
  items2[1] = tmp5Result;
  obj.children = items2;
  return closure_20(closure_6, obj);
});
ReactCompilerGating = fn(558);
let closure_32 = ReactCompilerGating.isReactCompilerEnabled() ? ((context) => {
  const cResult = context(576).c(57);
  context = context.context;
  const shelfItem = context.shelfItem;
  ({ sectionName, onPress } = context);
  ({ usesHandleActivityItemSelected, onActivityItemSelected, entrypoint, imageWidth, imageHeight } = context);
  dependencyMap = tmp4;
  closure_26();
  const obj = context(576);
  const heroMediaDimensions = context(11708).useHeroMediaDimensions();
  [, _slicedToArray] = handleActivityItemSelected.useState(false);
  let width = imageWidth;
  if (imageWidth == null) {
    width = heroMediaDimensions.width;
  }
  if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
    let items = ["embedded_cover"];
    cResult[0] = items;
    let first = items;
  } else {
    first = cResult[0];
  }
  if (cResult[1] === shelfItem.application.id) {
    if (cResult[2] === width) {
      let tmp10 = cResult[3];
    }
    const tmp12 = shelfItem(9149)(tmp10);
    let id = obj3.useId();
    const _Symbol = Symbol;
    if (cResult[4] === Symbol.for("react.memo_cache_sentinel")) {
      const items1 = [EmbeddedActivitiesStore];
      cResult[4] = items1;
      let tmp14 = items1;
    } else {
      tmp14 = cResult[4];
    }
    if (cResult[5] === context.channel) {
      if (cResult[6] === context.type) {
        if (cResult[7] === shelfItem.application.id) {
          let tmp16 = cResult[8];
        }
        const tmpResult4 = tmp(504);
        [r10093, tmp18] = tmp7(tmp(504).useStateFromStoresArray(tmp14, tmp16), 2);
        if (cResult[9] !== shelfItem.application) {
          const shelfBadgeTypeIfActive = tmp(8794).getShelfBadgeTypeIfActive(shelfItem.application);
          cResult[9] = shelfItem.application;
          cResult[10] = shelfBadgeTypeIfActive;
          const tmpResult5 = tmp(8794);
        }
        if (cResult[11] === context) {
          if (cResult[12] === entrypoint) {
            if (cResult[13] === id) {
              if (cResult[14] === onActivityItemSelected) {
                if (cResult[15] === sectionName) {
                  if (cResult[16] === shelfItem.application.id) {
                    let tmp22 = cResult[17];
                  }
                  handleActivityItemSelected = tmp(11665).useHandleActivityItemSelected(tmp22).handleActivityItemSelected;
                  if (cResult[18] === handleActivityItemSelected) {
                    if (cResult[19] === onPress) {
                      if (cResult[20] === shelfItem) {
                        class X {
                          constructor() {
                            if (closure_3) {
                              tmp = closure_5;
                              tmp2 = closure_5();
                            }
                            tmp3 = onPress(shelfItem);
                            return;
                          }
                        }
                      }
                    }
                  }
                  class X {
                    constructor() {
                      if (closure_3) {
                        tmp = closure_5;
                        tmp2 = closure_5();
                      }
                      tmp3 = onPress(shelfItem);
                      return;
                    }
                  }
                  cResult[18] = handleActivityItemSelected;
                  class M {
                    constructor() {
                      tmp = closure_7;
                      items = [, ];
                      items[0] = closure_7.isLaunchingActivity();
                      id = undefined;
                      if ("channel" === context.type) {
                        id = context.channel.id;
                      }
                      items[1] = closure_7.getLaunchState(shelfItem.application.id, id);
                      return items;
                    }
                  }
                  cResult[19] = onPress;
                  cResult[20] = shelfItem;
                  cResult[21] = tmp4;
                  cResult[22] = X;
                  const tmpResult6 = tmp(11665);
                }
              }
            }
          }
        }
        class M {
          constructor() {
            tmp = closure_7;
            items = [, ];
            items[0] = closure_7.isLaunchingActivity();
            id = undefined;
            if ("channel" === context.type) {
              id = context.channel.id;
            }
            items[1] = closure_7.getLaunchState(shelfItem.application.id, id);
            return items;
          }
        }
        tmp23[0] = shelfItem.application.id;
        tmp23[1] = context;
        tmp23[2] = sectionName;
        tmp23[3] = onActivityItemSelected;
        tmp23[4] = tmp(7034).ApplicationCommandTriggerLocations.APP_LAUNCHER_HOME;
        tmp23[5] = entrypoint;
        tmp23[6] = id;
        cResult[11] = context;
        cResult[12] = entrypoint;
        cResult[13] = id;
        cResult[14] = onActivityItemSelected;
        cResult[15] = sectionName;
        cResult[16] = shelfItem.application.id;
        cResult[17] = tmp23;
        tmp22 = tmp23;
        const tmp7Result = tmp7(tmp(504).useStateFromStoresArray(tmp14, tmp16), 2);
      }
    }
    class M {
      constructor() {
        tmp = closure_7;
        items = [, ];
        items[0] = closure_7.isLaunchingActivity();
        id = undefined;
        if ("channel" === context.type) {
          id = context.channel.id;
        }
        items[1] = closure_7.getLaunchState(shelfItem.application.id, id);
        return items;
      }
    }
    cResult[5] = context.channel;
    cResult[6] = context.type;
    cResult[7] = shelfItem.application.id;
    cResult[8] = M;
    tmp16 = M;
  }
  const obj2 = { applicationId: shelfItem.application.id, size: width, names: first };
  cResult[1] = shelfItem.application.id;
  cResult[2] = width;
  cResult[3] = obj2;
  tmp10 = obj2;
  obj3 = handleActivityItemSelected;
  tmp7 = _slicedToArray;
  const tmpResult = context(11708);
}) : ((context) => {
  context = context.context;
  const shelfItem = context.shelfItem;
  const onPress = context.onPress;
  let flag = context.usesHandleActivityItemSelected;
  if (flag === undefined) {
    flag = false;
  }
  ({ imageWidth, imageHeight } = context);
  _slicedToArray = undefined;
  let handleActivityItemSelected;
  ({ onActivityItemSelected, entrypoint } = context);
  const tmp = closure_26();
  const heroMediaDimensions = context(flag[28]).useHeroMediaDimensions();
  const tmp6 = _slicedToArray(handleActivityItemSelected.useState(false), 2);
  _slicedToArray = tmp6[1];
  const obj3 = { applicationId: shelfItem.application.id, size: null, names: null };
  let width = imageWidth;
  const obj = context(flag[28]);
  const tmp5 = _slicedToArray;
  if (imageWidth == null) {
    width = heroMediaDimensions.width;
  }
  obj3.size = width;
  obj3.names = ["embedded_cover"];
  const tmp8Result = shelfItem(flag[29])(obj3);
  let id = obj2.useId();
  const tmp8 = shelfItem(flag[29]);
  let items = [EmbeddedActivitiesStore];
  const tmp5Result = tmp5(context(flag[30]).useStateFromStoresArray(items, () => {
    const items = [EmbeddedActivitiesStore.isLaunchingActivity(), ];
    let id;
    if ("channel" === context.type) {
      id = context.channel.id;
    }
    items[1] = EmbeddedActivitiesStore.getLaunchState(shelfItem.application.id, id);
    return items;
  }), 2);
  let isLaunching = null != tmp12;
  if (isLaunching) {
    isLaunching = tmp12.isLaunching;
  }
  if (isLaunching) {
    isLaunching = tmp12.componentId === id;
  }
  const tmp2Result = context(flag[30]);
  const shelfBadgeTypeIfActive = context(flag[21]).getShelfBadgeTypeIfActive(shelfItem.application);
  const tmp2Result3 = context(flag[21]);
  const tmp2Result4 = context(flag[25]);
  handleActivityItemSelected = tmp2Result4.useHandleActivityItemSelected({ applicationId: shelfItem.application.id, context, sectionName: context.sectionName, onActivityItemSelected, location: context(flag[31]).ApplicationCommandTriggerLocations.APP_LAUNCHER_HOME, entrypoint, launchingComponentId: id, fetchesApplication: false }).handleActivityItemSelected;
  const items1 = [handleActivityItemSelected, onPress, shelfItem, flag];
  let first = "not-found" === tmp8Result.state;
  const callback = obj2.useCallback(() => {
    if (flag) {
      handleActivityItemSelected();
    }
    onPress(shelfItem);
  }, items1);
  if (!first) {
    first = tmp6[0];
  }
  if (first) {
    let tmp17 = closure_19(tmp7(tmp3[32]), {});
  } else {
    tmp17 = null;
    if (!tmp16) {
      const obj5 = {
        onError() {
              return closure_4(true);
            },
        style: tmp.activityItemImage,
        source: null,
        resizeMode: "cover"
      };
      const obj6 = { uri: tmp8Result.url };
      obj5.source = obj6;
      tmp17 = closure_19(tmp7(tmp3[33]), obj5);
    }
  }
  const obj7 = { style: tmp.activityItemContainer, disabled: tmp5Result[0], onPress: callback, children: null };
  const items2 = [tmp.activityImageContainer, ];
  let tmp22 = null != imageWidth;
  if (tmp22) {
    tmp22 = null != imageHeight;
  }
  if (tmp22) {
    const size = { width: imageWidth, height: imageHeight };
    tmp22 = size;
  }
  const obj8 = { style: items2, children: null };
  items2[1] = tmp22;
  const items3 = [tmp17, closure_19(shelfItem(flag[34]), { labelType: shelfBadgeTypeIfActive }), closure_19(context(flag[35]).SubmittingOverlay, { submitting: isLaunching, style: tmp.submittingOverlay })];
  obj8.children = items3;
  const items4 = [closure_20(closure_6, obj8), ];
  const obj10 = { style: tmp.activityDetailsContainer, children: closure_19(context(flag[18]).Text, { variant: "heading-sm/bold", color: "mobile-text-heading-primary", children: shelfItem.application.name }) };
  items4[1] = closure_19(closure_6, obj10);
  obj7.children = items4;
  return closure_20(context(flag[36]).PressableScale, obj7);
});
ReactCompilerGating = fn(558);
let closure_33 = ReactCompilerGating.isReactCompilerEnabled() ? ((context) => {
  const cResult = context(entrypoint[17]).c(29);
  context = context.context;
  const sectionName = context.sectionName;
  const onPress = context.onPress;
  ({ items, entrypoint } = context);
  const containerWidth = context.containerWidth;
  let activityItemTupleShelfItemContainer = closure_26();
  let num = 2;
  if (sectionName(entrypoint[37])()) {
    num = 4;
  }
  if (null != containerWidth) {
    const tmp8 = tmp3(entrypoint[27])((containerWidth - 2 * DEFAULT_CONTENT_PADDING - c22 * (num - 1)) / num);
    const result = tmp8 / c23;
    if (cResult[1] !== result) {
      const tmp12 = tmp3(entrypoint[27])(result);
      cResult[1] = result;
      cResult[2] = tmp12;
      let tmp11 = tmp12;
    } else {
      tmp11 = cResult[2];
    }
    if (cResult[3] === tmp11) {
    }
    const size = { width: tmp8, height: tmp11 };
    cResult[3] = tmp11;
    cResult[4] = tmp8;
    cResult[5] = size;
  } else {
    const _Symbol = Symbol;
    if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
      const size1 = { width: "Array", height: "Set" };
      cResult[0] = size1;
      let first = size1;
    } else {
      first = cResult[0];
    }
    let tmp15;
    if (!context.isLastTuple) {
      tmp15 = c22;
    }
    if (cResult[6] !== tmp15) {
      const obj2 = { marginBottom: tmp15 };
      cResult[6] = tmp15;
      cResult[7] = obj2;
      let tmp16 = obj2;
    } else {
      tmp16 = cResult[7];
    }
    if (cResult[8] === activityItemTupleShelfItemContainer.activityItemTupleContainer) {
      if (cResult[9] === tmp16) {
        let tmp17 = cResult[10];
      }
      if (cResult[11] === context) {
        if (cResult[12] === entrypoint) {
          if (cResult[13] === first) {
            if (cResult[14] === items) {
              if (cResult[15] === onPress) {
                if (cResult[16] === sectionName) {
                  if (cResult[17] === activityItemTupleShelfItemContainer.activityItemTupleShelfItemContainer) {
                    if (cResult[26] === tmp17) {
                      if (cResult[27] === tmp18) {
                        let tmp22 = cResult[28];
                      }
                      return tmp22;
                    }
                    class R {
                      constructor(arg0, arg1) {
                        obj = { style: null, children: null };
                        items = [, ];
                        items[0] = closure_4.activityItemTupleShelfItemContainer;
                        obj1 = { width: closure_5.width };
                        items[1] = obj1;
                        obj.style = items;
                        obj4 = { context, sectionName, onPress, item: context, entrypoint, imageWidth: closure_5.width, imageHeight: closure_5.height };
                        obj.children = jsx(f58744, obj4);
                        return jsx(View, obj, "" + context.application.id + "-" + arg1);
                      }
                    }
                    const obj3 = { style: tmp17, children: cResult[18] };
                    const tmp24 = closure_19(closure_6, obj3);
                    cResult[26] = tmp17;
                    cResult[27] = cResult[18];
                    cResult[28] = tmp24;
                    tmp22 = tmp24;
                  }
                }
              }
            }
          }
        }
      }
      if (cResult[19] === context) {
        if (cResult[20] === entrypoint) {
          if (cResult[21] === first) {
            if (cResult[22] === onPress) {
              if (cResult[23] === sectionName) {
                if (cResult[24] === activityItemTupleShelfItemContainer.activityItemTupleShelfItemContainer) {
                  let tmp19 = cResult[25];
                }
                const mapped = items.map(tmp19);
                class R {
                  constructor(arg0, arg1) {
                    obj = { style: null, children: null };
                    items = [, ];
                    items[0] = closure_4.activityItemTupleShelfItemContainer;
                    obj1 = { width: closure_5.width };
                    items[1] = obj1;
                    obj.style = items;
                    obj4 = { context, sectionName, onPress, item: context, entrypoint, imageWidth: closure_5.width, imageHeight: closure_5.height };
                    obj.children = jsx(f58744, obj4);
                    return jsx(View, obj, "" + context.application.id + "-" + arg1);
                  }
                }
                cResult[12] = entrypoint;
                cResult[13] = first;
                cResult[14] = items;
                cResult[15] = onPress;
                cResult[16] = sectionName;
                activityItemTupleShelfItemContainer = activityItemTupleShelfItemContainer.activityItemTupleShelfItemContainer;
                cResult[17] = activityItemTupleShelfItemContainer;
                cResult[18] = mapped;
              }
            }
          }
        }
      }
      class R {
        constructor(arg0, arg1) {
          obj = { style: null, children: null };
          items = [, ];
          items[0] = closure_4.activityItemTupleShelfItemContainer;
          obj1 = { width: closure_5.width };
          items[1] = obj1;
          obj.style = items;
          obj4 = { context, sectionName, onPress, item: context, entrypoint, imageWidth: closure_5.width, imageHeight: closure_5.height };
          obj.children = jsx(f58744, obj4);
          return jsx(View, obj, "" + context.application.id + "-" + arg1);
        }
      }
      cResult[19] = context;
      cResult[20] = entrypoint;
      cResult[21] = first;
      cResult[22] = onPress;
      cResult[23] = sectionName;
      cResult[24] = activityItemTupleShelfItemContainer.activityItemTupleShelfItemContainer;
      cResult[25] = R;
      tmp19 = R;
    }
    const items1 = [activityItemTupleShelfItemContainer.activityItemTupleContainer, tmp16];
    cResult[8] = activityItemTupleShelfItemContainer.activityItemTupleContainer;
    cResult[9] = tmp16;
    cResult[10] = items1;
    tmp17 = items1;
  }
  let obj = context(entrypoint[17]);
}) : ((isLastTuple) => {
  ({ context: require, sectionName: importDefault, onPress: importAll, items, entrypoint: dependencyMap, containerWidth } = isLastTuple);
  let styles;
  const tmp = closure_26();
  height = tmp;
  let num = 2;
  if (useIsWindowLargeDefault()) {
    num = 4;
  }
  const items1 = [containerWidth, num];
  styles = height.useMemo(() => {
    if (null == containerWidth) {
      return { width: "Array", height: "Set" };
    } else {
      const tmp7 = roundToNearestPixelDefault((tmp - 2 * DEFAULT_CONTENT_PADDING - c22 * (2 - 1)) / 2);
      const size = { width: tmp7, height: roundToNearestPixelDefault(tmp7 / c23) };
      return size;
    }
  }, items1);
  const items2 = [tmp.activityItemTupleContainer, ];
  let tmp4;
  if (!isLastTuple.isLastTuple) {
    tmp4 = c22;
  }
  items2[1] = { marginBottom: tmp4 };
  return closure_19(num, {
    style: items2,
    children: items.map((item, index) => {
      const obj = { style: null, children: closure_2_19(closure_34, { context, sectionName, onPress, item, entrypoint, imageWidth: styles.width, imageHeight: styles.height }) };
      const items = [closure_5.activityItemTupleShelfItemContainer, { width: styles.width }];
      obj.style = items;
      return closure_2_19(timestampProducer, obj, "" + item.application.id + "-" + index);
    })
  });
});
ReactCompilerGating = fn(558);
let closure_34 = ReactCompilerGating.isReactCompilerEnabled() ? ((onPress) => {
  const cResult = c.c(43);
  ({ item, sectionName } = onPress);
  onPress = onPress.onPress;
  ({ imageWidth, imageHeight } = onPress);
  const tmp4 = closure_26();
  const heroMediaDimensions = HeroMedia.useHeroMediaDimensions();
  closure_2 = _slicedToArray(noop.useState(false), 2)[1];
  const application = item.application;
  if (cResult[0] !== application) {
    const isActivityAppResult = AppLauncherUtils.isActivityApp(application);
    cResult[0] = application;
    cResult[1] = isActivityAppResult;
    const tmpResult = AppLauncherUtils;
  }
  let width = imageWidth;
  if (imageWidth == null) {
    width = heroMediaDimensions.width;
  }
  if (cResult[2] === Symbol.for("react.memo_cache_sentinel")) {
    const items = ["embedded_cover"];
    cResult[2] = items;
    let tmp9 = items;
  } else {
    tmp9 = cResult[2];
  }
  if (cResult[3] === application.id) {
    if (cResult[4] === width) {
      let tmp10 = cResult[5];
    }
    const tmp12 = useEmbeddedActivityBackgroundDefault(tmp10);
    if (cResult[6] === tmp12) {
      if (cResult[7] === item.overrideImageUrl) {
        let tmp13 = cResult[8];
      }
      if (cResult[9] === application) {
        if (cResult[10] === onPress) {
          class O {
            constructor() {
              tmp = onPress(application, sectionName);
              return;
            }
          }
          if (tmp16) {
            const _Symbol2 = Symbol;
            class O {
              constructor() {
                tmp = onPress(application, sectionName);
                return;
              }
            }
          } else {
            if (!tmp17) {
              const _Symbol = Symbol;
              class O {
                constructor() {
                  tmp = onPress(application, sectionName);
                  return;
                }
              }
              if (cResult[15] !== tmp13.url) {
                const obj3 = { uri: tmp13.url };
                class O {
                  constructor() {
                    tmp = onPress(application, sectionName);
                    return;
                  }
                }
                cResult[15] = tmp13.url;
                cResult[16] = obj3;
                let tmp21 = obj3;
              } else {
                tmp21 = cResult[16];
              }
              if (cResult[17] === tmp4.activityItemImage) {
              }
              const obj4 = { onError: tmp20, style: tmp4.activityItemImage, source: tmp21, resizeMode: "cover" };
              const tmp24 = closure_1_19(FastImageDefault, obj4);
              cResult[17] = tmp4.activityItemImage;
              cResult[18] = tmp21;
              cResult[19] = tmp24;
            }
            class O {
              constructor() {
                tmp = onPress(application, sectionName);
                return;
              }
            }
            let tmp29 = null != imageWidth && null != imageHeight;
            if (tmp29) {
              const size = { width: imageWidth, height: null };
              class O {
                constructor() {
                  tmp = onPress(application, sectionName);
                  return;
                }
              }
              tmp29 = size;
            }
            cResult[20] = imageHeight;
            cResult[21] = imageWidth;
            cResult[22] = tmp29;
          }
          tmp17 = "loading" === tmp13.state || null == tmp13.url;
        }
      }
      class O {
        constructor() {
          tmp = onPress(application, sectionName);
          return;
        }
      }
      cResult[9] = application;
      cResult[10] = onPress;
      cResult[11] = sectionName;
      cResult[12] = O;
    }
    if (null != item.overrideImageUrl) {
      { state: "loaded", url: null }.url = item.overrideImageUrl;
      class O {
        constructor() {
          tmp = onPress(application, sectionName);
          return;
        }
      }
      const obj5 = { state: "loaded", url: null };
    }
    cResult[6] = tmp12;
    cResult[7] = item.overrideImageUrl;
    cResult[8] = tmp12;
    tmp13 = tmp14;
  }
  const obj6 = { applicationId: application.id, size: width, names: tmp9 };
  cResult[3] = application.id;
  cResult[4] = width;
  cResult[5] = obj6;
  tmp10 = obj6;
  const tmp6 = _slicedToArray(noop.useState(false), 2);
}) : ((onPress) => {
  ({ item, sectionName } = onPress);
  onPress = onPress.onPress;
  ({ imageWidth, imageHeight, context, entrypoint } = onPress);
  const tmp = closure_26();
  const heroMediaDimensions = HeroMedia.useHeroMediaDimensions();
  const tmp5 = _slicedToArray(noop.useState(false), 2);
  closure_2 = tmp5[1];
  const application = item.application;
  let isActivityAppResult = AppLauncherUtils.isActivityApp(application);
  const obj4 = { applicationId: application.id, size: null, names: null };
  let width = imageWidth;
  if (imageWidth == null) {
    width = heroMediaDimensions.width;
  }
  obj4.size = width;
  obj4.names = ["embedded_cover"];
  let tmp8Result = useEmbeddedActivityBackgroundDefault(obj4);
  if (null != item.overrideImageUrl) {
    const obj5 = { state: "loaded", url: item.overrideImageUrl };
    tmp8Result = obj5;
  }
  const items = [onPress, application, sectionName];
  let first = "not-found" === tmp8Result.state;
  const callback = noop.useCallback(() => {
    onPress(application, sectionName);
  }, items);
  if (!first) {
    first = tmp5[0];
  }
  if (first) {
    let tmp13 = closure_1_19(BrokenImageDefault, {});
  } else {
    tmp13 = null;
    if (!tmp12) {
      const obj6 = {
        onError() {
              return closure_2(true);
            },
        style: tmp.activityItemImage,
        source: null,
        resizeMode: "cover"
      };
      const obj7 = { uri: tmp8Result.url };
      obj6.source = obj7;
      tmp13 = closure_1_19(FastImageDefault, obj6);
    }
  }
  const obj8 = { style: tmp.activityItemContainer, onPress: callback, children: null };
  const items1 = [tmp.activityImageContainer, ];
  let tmp18 = null != imageWidth;
  if (tmp18) {
    tmp18 = null != imageHeight;
  }
  if (tmp18) {
    const size = { width: imageWidth, height: imageHeight };
    tmp18 = size;
  }
  const obj9 = { style: items1, children: null };
  items1[1] = tmp18;
  const items2 = [tmp13, ];
  if (isActivityAppResult) {
    const obj10 = { labelType: null };
    const tmp7Result = ActivityShelfBadgeDefault;
    obj10.labelType = AppLauncherUtils.getShelfBadgeTypeIfActive(application);
    isActivityAppResult = closure_1_19(tmp7Result, obj10);
    const tmp2Result = AppLauncherUtils;
  }
  items2[1] = isActivityAppResult;
  obj9.children = items2;
  const items3 = [closure_1_20(timestampProducer, obj9), ];
  const obj11 = { style: tmp.activityDetailsContainer, children: closure_1_19(Text_Text.Text, { variant: "heading-sm/bold", color: "mobile-text-heading-primary", children: application.name }) };
  items3[1] = closure_1_19(timestampProducer, obj11);
  obj8.children = items3;
  return closure_1_20(native.PressableScale, obj8);
});
ReactCompilerGating = fn(558);
let closure_35 = ReactCompilerGating.isReactCompilerEnabled() ? (() => {
  const cResult = c.c(6);
  const tmp2 = closure_26();
  const rect = useSafeAreaInsetsDefault();
  const diff = -DEFAULT_CONTENT_PADDING - rect.left;
  const diff1 = -DEFAULT_CONTENT_PADDING - rect.right;
  if (cResult[0] === diff) {
    if (cResult[1] === diff1) {
      let tmp5 = cResult[2];
    }
    if (cResult[3] === tmp2.divider) {
      if (cResult[4] === tmp5) {
        let tmp6 = cResult[5];
      }
      return tmp6;
    }
    const obj2 = { style: null };
    const items = [tmp2.divider, tmp5];
    obj2.style = items;
    const tmp9 = closure_1_19(timestampProducer, obj2);
    cResult[3] = tmp2.divider;
    cResult[4] = tmp5;
    cResult[5] = tmp9;
    tmp6 = tmp9;
  }
  const obj3 = { marginLeft: diff, marginRight: diff1 };
  cResult[0] = diff;
  cResult[1] = diff1;
  cResult[2] = obj3;
  tmp5 = obj3;
}) : (() => {
  const rect = useSafeAreaInsetsDefault();
  const obj = { style: null };
  const items = [closure_26().divider, { marginLeft: -DEFAULT_CONTENT_PADDING - rect.left, marginRight: -DEFAULT_CONTENT_PADDING - rect.right }];
  obj.style = items;
  return closure_1_19(timestampProducer, obj);
});
ReactCompilerGating = fn(558);
let closure_36 = ReactCompilerGating.isReactCompilerEnabled() ? ((arg0) => {
  const cResult = c.c(8);
  ({ index, children } = arg0);
  const tmp4 = closure_26();
  if (cResult[0] !== index) {
    let obj2 = null;
    if (0 !== index) {
      obj2 = { marginTop: 24 };
    }
    cResult[0] = index;
    cResult[1] = obj2;
    let tmp5 = obj2;
  } else {
    tmp5 = cResult[1];
  }
  if (cResult[2] === tmp4.sectionHeader) {
    if (cResult[3] === tmp5) {
      let tmp6 = cResult[4];
    }
    if (cResult[5] === children) {
      if (cResult[6] === tmp6) {
        let tmp7 = cResult[7];
      }
      return tmp7;
    }
    const obj3 = { accessibilityRole: "header", variant: "heading-lg/bold", color: "mobile-text-heading-primary", style: tmp6, children };
    const tmp9 = closure_1_19(Text_Text.Text, obj3);
    cResult[5] = children;
    cResult[6] = tmp6;
    cResult[7] = tmp9;
    tmp7 = tmp9;
  }
  const items = [tmp4.sectionHeader, tmp5];
  cResult[2] = tmp4.sectionHeader;
  cResult[3] = tmp5;
  cResult[4] = items;
  tmp6 = items;
}) : ((arg0) => {
  ({ index, children } = arg0);
  const style = [closure_26().sectionHeader, ];
  let obj = null;
  if (0 !== index) {
    obj = { marginTop: 24 };
  }
  style[1] = obj;
  return closure_1_19(Text_Text.Text, { accessibilityRole: "header", variant: "heading-lg/bold", color: "mobile-text-heading-primary", style, children });
});
fn(558);
let obj9 = { padding: nativeDefault.space.PX_12, flexGrow: 1, flexShrink: 1 };
ReactCompilerGating = fn(558);
let closure_37 = ReactCompilerGating.isReactCompilerEnabled() ? (() => {
  const cResult = c.c(2);
  if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
    const items = [DevSettingsStore];
    const fn = function i() {
      return DevSettingsStore.get("only_show_preview_app_collections");
    };
    cResult[0] = items;
    cResult[1] = fn;
    tmp4 = items;
    tmp5 = fn;
  } else {
    [tmp4, tmp5] = cResult;
  }
  const stateFromStores = initialize.useStateFromStores(tmp4, tmp5);
  const tmpResult = initialize;
  const ApplicationCollectionActiveState = ApplicationCollectionActiveState2.ApplicationCollectionActiveState;
  if (stateFromStores) {
    let PREVIEW = ApplicationCollectionActiveState.PREVIEW;
  } else {
    PREVIEW = obj3.getConfig({ location: "App Launcher Home (Mobile)" }).enabled ? ApplicationCollectionActiveState.NON_STAFF_PREVIEW : ApplicationCollectionActiveState.ACTIVE;
  }
  return PREVIEW;
}) : (() => {
  const items = [DevSettingsStore];
  const stateFromStores = initialize.useStateFromStores(items, () => DevSettingsStore.get("only_show_preview_app_collections"));
  const ApplicationCollectionActiveState = ApplicationCollectionActiveState2.ApplicationCollectionActiveState;
  if (stateFromStores) {
    let PREVIEW = ApplicationCollectionActiveState.PREVIEW;
  } else {
    PREVIEW = obj2.getConfig({ location: "App Launcher Home (Mobile)" }).enabled ? ApplicationCollectionActiveState.NON_STAFF_PREVIEW : ApplicationCollectionActiveState.ACTIVE;
  }
  return PREVIEW;
});
ReactCompilerGating = fn(558);
let closure_38 = ReactCompilerGating.isReactCompilerEnabled() ? ((context) => {
  const cResult = context(frecentApps[17]).c(91);
  context = context.context;
  const entrypoint = context.entrypoint;
  let obj = context(frecentApps[17]);
  const fetchDeveloperActivityShelfItems = context(frecentApps[76]).useFetchDeveloperActivityShelfItems();
  let guild_id;
  if ("channel" === context.type) {
    guild_id = context.channel.guild_id;
  }
  if (cResult[0] !== guild_id) {
    let obj3 = { guildId: guild_id };
    cResult[0] = guild_id;
    cResult[1] = obj3;
    let tmp7 = obj3;
  } else {
    tmp7 = cResult[1];
  }
  entrypoint(frecentApps[77])(tmp7);
  const tmp9 = entrypoint === context(frecentApps[44]).AppLauncherEntrypoint.VOICE;
  if (cResult[2] === context) {
    if (cResult[3] === tmp9) {
      let tmp10 = cResult[4];
    }
    const tmp11 = tmp5(frecentApps[78])(tmp10);
    ({ frecencyCommands, frecentApps } = tmp11);
    ({ sectionDescriptors, loading } = tmp11);
    if (cResult[5] !== context) {
      const obj4 = { context };
      cResult[5] = context;
      cResult[6] = obj4;
      let tmp12 = obj4;
    } else {
      tmp12 = cResult[6];
    }
    const tmp13 = entrypoint === tmp(frecentApps[44]).AppLauncherEntrypoint.TEXT;
    let appsInThisServer = tmp5(frecentApps[79])(tmp12).appsInThisServer;
    if (!tmp13) {
      appsInThisServer = closure_24;
    }
    if (cResult[7] !== appsInThisServer) {
      const intl = tmp(frecentApps[19]).intl;
      const stringResult = intl.string(tmp(frecentApps[19]).t.oJyzCu);
      const _Symbol = Symbol;
      if (cResult[9] === Symbol.for("react.memo_cache_sentinel")) {
        class O {
          constructor(arg0) {
            obj = { application: context.application };
            return obj;
          }
        }
        cResult[9] = O;
      } else {
        class O {
          constructor(arg0) {
            obj = { application: context.application };
            return obj;
          }
        }
      }
      let mapped = appsInThisServer.map(O);
      const tmp21 = getRecommendationItemsWithViewAll(mapped, "in_this_server", stringResult, tmp(frecentApps[70]).IN_THIS_SERVER_ITEM_MAX);
      cResult[7] = appsInThisServer;
      cResult[8] = tmp21;
    } else {
      class O {
        constructor(arg0) {
          obj = { application: context.application };
          return obj;
        }
      }
      if (cResult[10] !== frecentApps) {
        class O {
          constructor(arg0) {
            obj = { application: context.application };
            return obj;
          }
        }
        let mapped1 = frecentApps.map(tmp23);
        cResult[10] = frecentApps;
        cResult[11] = mapped1;
      } else {
        class O {
          constructor(arg0) {
            obj = { application: context.application };
            return obj;
          }
        }
        if (cResult[14] === tmp13) {
          class O {
            constructor(arg0) {
              obj = { application: context.application };
              return obj;
            }
          }
          if ("channel" === context.type) {
            class O {
              constructor(arg0) {
                obj = { application: context.application };
                return obj;
              }
            }
          }
          const isActivitiesInTextEnabled = tmp(frecentApps[80]).useIsActivitiesInTextEnabled(tmp28);
          if (cResult[17] === context.channel) {
            class O {
              constructor(arg0) {
                obj = { application: context.application };
                return obj;
              }
            }
          }
          const fn = function k() {
            let tmp = isActivitiesInTextEnabled;
            if (!isActivitiesInTextEnabled) {
              tmp = entrypoint === AppLauncherTypes.AppLauncherEntrypoint.VOICE;
            }
            if (tmp) {
              let guild_id;
              if ("channel" === context.type) {
                guild_id = context.channel.guild_id;
              }
              const obj2 = { guildId: guild_id, force: true };
              const shelf = EmbeddedActivitiesActionCreators.fetchShelf(obj2);
            }
          };
          cResult[17] = context.channel;
          cResult[18] = context.type;
          cResult[19] = entrypoint;
          cResult[20] = isActivitiesInTextEnabled;
          cResult[21] = fn;
          let tmpResult = tmp(frecentApps[80]);
        }
        if (tmp13) {
          class O {
            constructor(arg0) {
              obj = { application: context.application };
              return obj;
            }
          }
        }
        cResult[14] = tmp13;
        cResult[15] = frecentApps;
        cResult[16] = !tmp13;
      }
    }
  }
  const obj5 = { context, onlyActivityApps: tmp9 };
  cResult[2] = context;
  cResult[3] = tmp9;
  cResult[4] = obj5;
  tmp10 = obj5;
  let obj2 = context(frecentApps[76]);
}) : ((context) => {
  context = context.context;
  const entrypoint = context.entrypoint;
  dependencyMap = undefined;
  closure_4 = undefined;
  let frecentApps;
  closure_6 = undefined;
  let appsInThisServer;
  let isActivitiesInTextEnabled;
  let activeState;
  let stateFromStores;
  let memo3;
  let memo4;
  let result;
  let result2;
  closure_15 = undefined;
  let memo6;
  let memo7;
  const fetchDeveloperActivityShelfItems = context(11742).useFetchDeveloperActivityShelfItems();
  let num = 2;
  if (entrypoint(6433)()) {
    num = 4;
  }
  let guild_id;
  let obj = context(11742);
  if ("channel" === context.type) {
    guild_id = context.channel.guild_id;
  }
  const tmp4ResultResult = entrypoint(11653)({ guildId: guild_id });
  dependencyMap = tmp4ResultResult;
  let tmp7 = entrypoint === context(8932).AppLauncherEntrypoint.VOICE;
  closure_4 = tmp7;
  let tmp8 = entrypoint(11743)({ context, onlyActivityApps: tmp7 });
  frecentApps = tmp8.frecentApps;
  ({ frecencyCommands, sectionDescriptors, loading } = tmp8);
  const tmp9 = entrypoint === context(8932).AppLauncherEntrypoint.TEXT;
  closure_6 = tmp9;
  appsInThisServer = tmp4(11746)({ context }).appsInThisServer;
  let items = [appsInThisServer, tmp9];
  let items1 = [frecentApps];
  const memo = frecentApps.useMemo(() => {
    const intl = util.intl;
    const mapped = closure_6 ? appsInThisServer : closure_24.map((application) => ({ application: application.application }));
    return getRecommendationItemsWithViewAll(mapped, "in_this_server", intl.string(util.t.oJyzCu), InThisServerSection.IN_THIS_SERVER_ITEM_MAX);
  }, items);
  const items2 = [tmp9, frecentApps];
  const memo1 = frecentApps.useMemo(() => frecentApps.map((applicationId, index) => ({ type: context(closure_3[48]).AppLauncherHomeListItemType.APP, applicationId: applicationId.id, section: applicationId, isFirstRow: 0 === index, isLastRow: index === length.length - 1, sectionName: "recents" })), items1);
  const memo2 = frecentApps.useMemo(() => {
    let tmp = !closure_6;
    if (closure_6) {
      tmp = !frecentApps.some((application) => null != application.application);
    }
    return tmp;
  }, items2);
  const tmp4Result = entrypoint(11653);
  let id;
  if ("channel" === context.type) {
    id = context.channel.id;
  }
  isActivitiesInTextEnabled = context(9000).useIsActivitiesInTextEnabled(id);
  const items3 = [isActivitiesInTextEnabled, context, entrypoint];
  const effect = obj2.useEffect(() => {
    let tmp = isActivitiesInTextEnabled;
    if (!isActivitiesInTextEnabled) {
      tmp = entrypoint === AppLauncherTypes.AppLauncherEntrypoint.VOICE;
    }
    if (tmp) {
      let guild_id;
      if ("channel" === context.type) {
        guild_id = context.channel.guild_id;
      }
      const obj2 = { guildId: guild_id, force: true };
      const shelf = EmbeddedActivitiesActionCreators.fetchShelf(obj2);
    }
  }, items3);
  const tmp16 = closure_37();
  activeState = tmp16;
  let tmpResult = context(9000);
  const items4 = [memo3];
  stateFromStores = context(504).useStateFromStores(items4, () => ApplicationDirectoryCollectionsStore.getCollections({ surface: APP_LAUNCHER_IN_TEXT, activeState }));
  const items5 = [stateFromStores, tmp7];
  memo3 = obj2.useMemo(() => {
    if (closure_4) {
      result = AppLauncherUtils.ensureRecommendationSectionsOnlyContainActivities(stateFromStores);
    } else {
      result = stateFromStores;
    }
    return result;
  }, items5);
  const items6 = [tmp16, entrypoint];
  const effect1 = obj2.useEffect(() => {
    if (obj.appLauncherShowsRecommendations(entrypoint)) {
      const obj2 = { surface: APP_LAUNCHER_IN_TEXT, activeState };
      const collections = ApplicationDirectoryActionCreators.fetchCollections(obj2);
      const tmpResult = ApplicationDirectoryActionCreators;
    }
    obj = AppLauncherUtils;
  }, items6);
  const items7 = [entrypoint, tmp4ResultResult];
  memo4 = obj2.useMemo(() => {
    let diff;
    let arr = closure_3;
    if (0 !== closure_3.length) {
      if (entrypoint === AppLauncherTypes.AppLauncherEntrypoint.VOICE) {
        const items = [];
        let tmp8 = require;
        num = 0;
        if (0 < arr.length - 1) {
          do {
            let sum = num + 1;
            let obj = { type: AppLauncherHomeTypes.AppLauncherHomeListItemType.SHELF_ITEM_TUPLE, shelfItem1: closure_3[num], shelfItem2: closure_3[sum], sectionName: "activities", shelfItem1SectionPosition: num, shelfItem2SectionPosition: sum, sectionOverallPosition: 0, isLastTuple: false };
            let arr2 = items.push(obj);
            num = num + 2;
            tmp8 = require;
            arr = closure_3;
            diff = closure_3.length - 1;
          } while (num < diff);
        }
        if (arr.length % 2 === 1) {
          const obj2 = { type: null, shelfItem1: null, shelfItem2: null, sectionName: "activities", shelfItem1SectionPosition: null, shelfItem2SectionPosition: null, sectionOverallPosition: 0, isLastTuple: false };
          const diff1 = arr.length - 1;
          obj2.type = tmp8(11712).AppLauncherHomeListItemType.SHELF_ITEM_TUPLE;
          obj2.shelfItem1 = arr[arr.length - 1];
          obj2.shelfItem2 = undefined;
          obj2.shelfItem1SectionPosition = diff1;
          obj2.shelfItem2SectionPosition = undefined;
          items.push(obj2);
        }
        items[items.length - 1].isLastTuple = true;
        const obj5 = { type: tmp8(11712).AppLauncherHomeListItemType.SECTION_HEADER, section: null, sectionName: "activities", numItems: null, numVisibleItems: null };
        const intl = tmp8(1126).intl;
        obj5.section = intl.string(tmp8(1126).t.aeuOoh);
        ({ length: obj3.numItems, length: obj3.numVisibleItems } = arr);
        const items1 = [obj5];
        HermesBuiltin.arraySpread(items, 1);
        return items1;
      }
    }
    return [];
  }, items7);
  const tmp21 = isActivitiesInTextEnabled(context, true, false);
  let tmp22 = activeState(true, false);
  result2 = tmp22;
  result = tmp21.result;
  let sections;
  if (result != null) {
    sections = result.sections;
  }
  const items8 = [sections, ];
  result2 = tmp22.result;
  let sections1;
  if (result2 != null) {
    sections1 = result2.sections;
  }
  items8[1] = sections1;
  const memo5 = obj2.useMemo(() => {
    result = result.result;
    let sections;
    if (result != null) {
      sections = result.sections;
    }
    if (sections == null) {
      sections = {};
    }
    result2 = result2.result;
    let sections1;
    if (result2 != null) {
      sections1 = result2.sections;
    }
    if (sections1 == null) {
      sections1 = {};
    }
    const values = Object.values(sections);
    let someResult = values.some((commands) => Object.keys(commands.commands).length > 0);
    if (!someResult) {
      const _Object = Object;
      const values2 = Object.values(sections1);
      someResult = values2.some((commands) => Object.keys(commands.commands).length > 0);
    }
    return someResult;
  }, items8);
  const tmpResult3 = context(504);
  const items9 = [memo4];
  let channel = null;
  const stateFromStores1 = context(504).useStateFromStores(items9, () => {
    let tmp2 = "channel" === context.type;
    if (tmp2) {
      const channel = context.channel;
      let isDMResult = channel.isDM();
      if (!isDMResult) {
        const channel2 = context.channel;
        isDMResult = channel2.isMultiUserDM();
      }
      if (!isDMResult) {
        isDMResult = PermissionStore.can(constants2.USE_APPLICATION_COMMANDS, context.channel);
      }
      tmp2 = isDMResult;
    }
    return tmp2;
  });
  if ("channel" === context.type) {
    channel = context.channel;
  }
  let tmp28 = memo5;
  if (memo5) {
    tmp28 = memo2;
  }
  if (!tmp28) {
    tmp28 = !stateFromStores1;
  }
  let tmp29 = memo2;
  if (memo2) {
    tmp29 = !tmp28;
  }
  if (tmp29) {
    let isPrivateResult;
    if (channel != null) {
      isPrivateResult = channel.isPrivate();
    }
    tmp29 = !isPrivateResult;
  }
  if (tmp29) {
    tmp29 = !tmp7;
  }
  let tmp31 = memo2;
  if (memo2) {
    tmp31 = tmp28;
  }
  if (tmp31) {
    let isPrivateResult1;
    if (channel != null) {
      isPrivateResult1 = channel.isPrivate();
    }
    tmp31 = !isPrivateResult1;
  }
  if (tmp31) {
    tmp31 = !tmp7;
  }
  closure_15 = tmp31;
  const items10 = [memo3, tmp4ResultResult, tmp31];
  memo6 = obj2.useMemo(() => {
    const items = [];
    if (closure_15) {
      return items;
    } else {
      const _Set = Set;
      let item = memo3.forEach((application_directory_collection_items) => {
        const prop = application_directory_collection_items.application_directory_collection_items;
        const item = prop.forEach((type) => {
          if (type.type === items(closure_2_3[82]).ApplicationDirectoryCollectionItemType.APPLICATION) {
            set.add(type.application.id);
          }
        });
      });
      const item1 = closure_3.forEach((application) => {
        if (!set.has(application.application.id)) {
          items.push(application);
        }
      });
      return items;
    }
  }, items10);
  const items11 = [num, memo6, memo3, tmp31];
  memo7 = obj2.useMemo(() => {
    let items = [];
    if (closure_15) {
      items = [];
    } else {
      let item = memo3.forEach((title, sectionOverallPosition) => {
        let length2;
        let sum;
        ({ type, application_directory_collection_items } = title);
        if (type === ApplicationDirectoryCollectionType.ApplicationDirectoryCollectionType.BANNER_CARDS) {
          const _Math = Math;
          let obj = { type: null, section: null, sectionName: null, numItems: null, numVisibleItems: null };
          const bound = Math.min(length, ExpandableList.COLLAPSED_LIST_ITEM_MAX);
          obj.type = AppLauncherHomeTypes.AppLauncherHomeListItemType.RECOMMENDATION_SECTION_HEADER;
          ({ title: obj.section, title: obj.sectionName } = title);
          obj.numItems = application_directory_collection_items.length;
          obj.numVisibleItems = bound;
          items.push(obj);
          const mapped = application_directory_collection_items.map((type, sectionPosition) => {
            if (type.type === found1(8940).ApplicationDirectoryCollectionItemType.APPLICATION) {
              let collectionItemAssetUrl;
              if (tmp4) {
                ({ id: obj2.itemId, image_hash: obj2.hash } = type);
                collectionItemAssetUrl = found1(11748).getCollectionItemAssetUrl({ itemId: null, hash: null });
                const obj = { itemId: null, hash: null };
                const tmpResult = found1(11748);
              }
              const obj3 = { application: type.application, showsPromoted: found1(1390).hasFlag(type.flags, found1(11749).ApplicationCollectionItemFlags.PROMOTED), overrideImageUrl: collectionItemAssetUrl, sectionPosition };
              return obj3;
            }
          });
          const found = mapped.filter(GlobalUtils.isNotNullish);
          let num3 = 0;
          if (0 < found.length) {
            do {
              let obj2 = { type: AppLauncherHomeTypes.AppLauncherHomeListItemType.RECOMMENDATION_TUPLE, sectionName: title.title, sectionOverallPosition, items: null, isLastTuple: null };
              sum = num3 + num;
              obj2.items = found.slice(num3, sum);
              obj2.isLastTuple = sum >= found.length;
              let arr2 = items.push(obj2);
              num3 = sum;
              length2 = found.length;
            } while (sum < length2);
          }
        } else if (type === ApplicationDirectoryCollectionType.ApplicationDirectoryCollectionType.EXPANDABLE_LIST) {
          const prop = title.application_directory_collection_items;
          const mapped1 = prop.map((type) => {
            if (type.type === found1(8940).ApplicationDirectoryCollectionItemType.APPLICATION) {
              const obj = { application: type.application, showsPromoted: found1(1390).hasFlag(type.flags, found1(11749).ApplicationCollectionItemFlags.PROMOTED) };
              return obj;
            }
          });
          const found1 = mapped1.filter(GlobalUtils.isNotNullish);
          if (tmpResult.hasFlag(title.flags, ApplicationCollectionFlags.ApplicationCollectionFlags.APPENDS_REMAINING_ACTIVITIES)) {
            const item = memo6.forEach((application) => {
              found1.push({ application: application.application, showsPromoted: false });
            });
          }
          const push = items.push;
          items = [];
          HermesBuiltin.arraySpread(getRecommendationItemsWithViewAll(found1, title.title, title.title, undefined, sectionOverallPosition), 0);
          HermesBuiltin.apply(items, items);
          tmpResult = FlagUtils;
        }
      });
    }
    return items;
  }, items11);
  let obj3 = { list: null, frecencyCommands, frecencyUsedAppList: memo1, sectionDescriptors, loading, hasNoCommands: memo2, hasNoShelfItems: 0 === tmp4ResultResult.length, showsEmptyState: tmp29, showNoPermsState: tmp31, inThisServerItems: memo };
  const items12 = [entrypoint, memo7, memo4];
  obj3.list = frecentApps.useMemo(() => {
    if (obj.appLauncherShowsRecommendations(entrypoint)) {
      const obj2 = { type: AppLauncherHomeTypes.AppLauncherHomeListItemType.LEARN_MORE };
      const items = [];
      items[HermesBuiltin.arraySpread(memo7, 0)] = obj2;
      return items;
    } else {
      const items1 = [];
      HermesBuiltin.arraySpread(memo4, 0);
      return items1;
    }
    obj = AppLauncherUtils;
  }, items12);
  return obj3;
});
let size = fn(2);
let result = size.fileFinishedImporting("modules/app_launcher/native/screens/home/AppLauncherHomeScreen.tsx");

export default ReactCompilerGating.isReactCompilerEnabled() ? ((navigation) => {
  const cResult = navigation(576).c(154);
  navigation = navigation.navigation;
  const params = navigation.route.params;
  const context = params.context;
  const initialSearchQuery = params.initialSearchQuery;
  let obj = navigation(576);
  const viewableAppLauncherHomeItems = navigation(11711).useViewableAppLauncherHomeItems();
  const handleViewableItemsChanged = viewableAppLauncherHomeItems.handleViewableItemsChanged;
  ({ hasViewedActivityItem, hasViewedLearnMoreItem } = viewableAppLauncherHomeItems);
  const tmp6 = context(7941)(hasViewedActivityItem);
  const tmp7 = context(7941)(hasViewedLearnMoreItem);
  dependencyMap = tmp7;
  const tmp8 = ref2();
  _slicedToArray = tmp8;
  const tmp9 = context(6546)();
  height = tmp9;
  let obj2 = navigation(11711);
  const requiredAppLauncherContext = navigation(10994).useRequiredAppLauncherContext();
  const chatInputRef = requiredAppLauncherContext.chatInputRef;
  const keyboardCloseReasonRef = requiredAppLauncherContext.keyboardCloseReasonRef;
  const width = requiredAppLauncherContext.width;
  const entrypoint = requiredAppLauncherContext.entrypoint;
  const onActivityItemSelected = requiredAppLauncherContext.onActivityItemSelected;
  let size = context(1484)();
  isLandscape = tmp11;
  if (cResult[0] !== entrypoint) {
    const fn = function o() {
      if (entrypoint === AppLauncherTypes.AppLauncherEntrypoint.VOICE) {
        const result = EmbeddedActivitiesActionCreatorsAll.dismissNewActivityIndicator();
      }
    };
    let items = [entrypoint];
    cResult[0] = entrypoint;
    cResult[1] = fn;
    cResult[2] = items;
    let tmp13 = items;
    let tmp12 = fn;
  } else {
    tmp12 = cResult[1];
    tmp13 = cResult[2];
  }
  const effect = height.useEffect(tmp12, tmp13);
  if (cResult[3] === chatInputRef) {
    if (cResult[6] === context) {
      if (cResult[7] === entrypoint) {
        if (cResult[8] === navigation) {
          let tmp16 = cResult[9];
        }
        closure_12 = tmp16;
        if (cResult[10] === context) {
          if (cResult[11] === entrypoint) {
            if (cResult[12] === navigation) {
              let tmp17 = cResult[13];
            }
            const triggeredOnboardingContentMetadata = tmp17;
            if (cResult[14] === context) {
              if (cResult[15] === entrypoint) {
                let tmp18 = cResult[16];
              }
              const tmp20 = closure_38(tmp18);
              const list = tmp20.list;
              const frecencyCommands = tmp20.frecencyCommands;
              const frecencyUsedAppList = tmp20.frecencyUsedAppList;
              const sectionDescriptors = tmp20.sectionDescriptors;
              ({ loading, showsEmptyState, showNoPermsState, inThisServerItems } = tmp20);
              if (cResult[17] === context) {
                if (cResult[18] === entrypoint) {
                  if (cResult[19] === navigation) {
                    if (cResult[20] === sectionDescriptors) {
                      let tmp21 = cResult[21];
                    }
                    closure_19 = tmp21;
                    if (cResult[22] === context) {
                      if (cResult[23] === entrypoint) {
                        if (cResult[24] === frecencyCommands) {
                          if (cResult[25] === frecencyUsedAppList) {
                            if (cResult[26] === navigation) {
                              if (cResult[29] === context) {
                                if (cResult[30] === inThisServerItems) {
                                  if (cResult[33] === context) {
                                    if (cResult[34] === entrypoint) {
                                      if (cResult[35] === navigation) {
                                        const clickOnHomeActivityOpensAppDetails = tmp(11713).useClickOnHomeActivityOpensAppDetails();
                                        if (cResult[38] === clickOnHomeActivityOpensAppDetails) {
                                          if (cResult[39] === context) {
                                            if (cResult[40] === entrypoint) {
                                              if (cResult[41] === tmp7) {
                                                if (cResult[42] === tmp11) {
                                                  if (cResult[43] === list.length) {
                                                    if (cResult[44] === navigation) {
                                                      if (cResult[45] === onActivityItemSelected) {
                                                        if (cResult[46] === tmp17) {
                                                          if (cResult[47] === tmp16) {
                                                            if (cResult[48] === tmp21) {
                                                              if (cResult[49] === tmp9) {
                                                                if (cResult[50] === tmp8.sectionHeader) {
                                                                  obj4.useRef(null);
                                                                  class Ce {
                                                                    constructor(arg0) {
                                                                      item = navigation.item;
                                                                      index = navigation.index;
                                                                      type = item.type;
                                                                      tmp = navigation;
                                                                      tmp2 = closure_3;
                                                                      if (navigation(closure_3[48]).AppLauncherHomeListItemType.PLACEHOLDER === type) {
                                                                        tmp40 = closure_19;
                                                                        tmp41 = context;
                                                                        obj1 = { isFirstRow: null, isLastRow: null, style: null };
                                                                        num2 = 0;
                                                                        obj1.isFirstRow = 0 === index;
                                                                        tmp42 = list;
                                                                        num3 = 1;
                                                                        obj1.isLastRow = index === list.length - 1;
                                                                        obj15 = { height: null };
                                                                        tmp43 = closure_5;
                                                                        obj15.height = closure_5;
                                                                        obj1.style = obj15;
                                                                        return closure_19(context(tmp2[51]), obj1);
                                                                      } else if (tmp(tmp2[48]).AppLauncherHomeListItemType.SECTION_HEADER === type) {
                                                                        tmp38 = closure_19;
                                                                        tmp39 = closure_4;
                                                                        items = [, ];
                                                                        items[0] = closure_4.sectionHeader;
                                                                        num = 0;
                                                                        obj16 = null;
                                                                        if (0 !== index) {
                                                                          obj16 = { marginTop: 24 };
                                                                        }
                                                                        obj17 = { accessibilityRole: "header", variant: "text-lg/bold", color: "mobile-text-heading-primary", style: null, children: null };
                                                                        items[1] = obj16;
                                                                        obj17.style = items;
                                                                        obj17.children = item.section;
                                                                        return tmp38(tmp(tmp2[18]).Text, obj17);
                                                                      } else if (tmp(tmp2[48]).AppLauncherHomeListItemType.SHELF_ITEM === type) {
                                                                        tmp36 = closure_19;
                                                                        tmp37 = closure_30;
                                                                        obj18 = { section: null, onPress: null, isFirstRow: null, isLastRow: null };
                                                                        obj18.section = item.section;
                                                                        obj18.onPress = function onPress(shelfData) {
                                                                          closure_13({ shelfData, sectionName: item.sectionName });
                                                                        };
                                                                        ({ isFirstRow: obj10.isFirstRow, isLastRow: obj10.isLastRow } = item);
                                                                        return closure_19(closure_30, obj18, item.section.application.id);
                                                                      } else if (tmp(tmp2[48]).AppLauncherHomeListItemType.SHELF_ITEM_TUPLE === type) {
                                                                        obj19 = { context: null, sectionName: null, onPress: null, usesHandleActivityItemSelected: null, onActivityItemSelected: null, shelfItem1: null, shelfItem2: null, isLastTuple: null, entrypoint: null, containerWidth: null };
                                                                        tmp29 = context;
                                                                        obj19.context = context;
                                                                        tmp27 = closure_19;
                                                                        tmp28 = closure_31;
                                                                        obj19.sectionName = tmp(tmp2[44]).AppLauncherSectionName.ACTIVITIES;
                                                                        obj19.onPress = function onPress(shelfData) {
                                                                          const obj = { shelfData, sectionName: item.sectionName, navigates: null };
                                                                          let tmp2 = clickOnHomeActivityOpensAppDetails;
                                                                          if (!tmp2) {
                                                                            tmp2 = entrypoint !== AppLauncherTypes.AppLauncherEntrypoint.VOICE;
                                                                          }
                                                                          obj.navigates = tmp2;
                                                                          closure_13(obj);
                                                                        };
                                                                        tmp30 = closure_20;
                                                                        tmp31 = !closure_20;
                                                                        if (!closure_20) {
                                                                          tmp32 = entrypoint;
                                                                          tmp31 = entrypoint === tmp(tmp2[44]).AppLauncherEntrypoint.VOICE;
                                                                        }
                                                                        obj19.usesHandleActivityItemSelected = tmp31;
                                                                        tmp33 = onActivityItemSelected;
                                                                        obj19.onActivityItemSelected = onActivityItemSelected;
                                                                        ({ shelfItem1: obj9.shelfItem1, shelfItem2: obj9.shelfItem2, isLastTuple: obj9.isLastTuple } = item);
                                                                        tmp34 = entrypoint;
                                                                        obj19.entrypoint = entrypoint;
                                                                        tmp35 = width;
                                                                        obj19.containerWidth = width;
                                                                        return tmp27(tmp28, obj19, item.shelfItem1.application.id);
                                                                      } else if (tmp(tmp2[48]).AppLauncherHomeListItemType.RECOMMENDATION_TUPLE === type) {
                                                                        tmp22 = closure_19;
                                                                        tmp23 = closure_33;
                                                                        obj20 = { context: null, sectionName: null, onPress: null, items: null, isLastTuple: null, entrypoint: null, containerWidth: null };
                                                                        tmp24 = context;
                                                                        obj20.context = context;
                                                                        obj20.sectionName = item.sectionName;
                                                                        obj20.onPress = function onPress(application, sectionName) {
                                                                          return closure_1_19({ application, sectionName });
                                                                        };
                                                                        ({ items: obj8.items, isLastTuple: obj8.isLastTuple } = item);
                                                                        tmp25 = entrypoint;
                                                                        obj20.entrypoint = entrypoint;
                                                                        tmp26 = width;
                                                                        obj20.containerWidth = width;
                                                                        return closure_19(closure_33, obj20);
                                                                      } else if (tmp(tmp2[48]).AppLauncherHomeListItemType.APP === type) {
                                                                        tmp19 = closure_19;
                                                                        tmp20 = closure_29;
                                                                        obj21 = { section: null, onPress: null, isFirstRow: null, isLastRow: null, style: null };
                                                                        obj21.section = item.section;
                                                                        obj21.onPress = function onPress() {
                                                                          closure_12(item.section, AppLauncherTypes.AppLauncherSectionName.INSTALLED);
                                                                        };
                                                                        ({ isFirstRow: obj6.isFirstRow, isLastRow: obj6.isLastRow } = item);
                                                                        obj22 = { height: null };
                                                                        tmp21 = closure_5;
                                                                        obj22.height = closure_5;
                                                                        obj21.style = obj22;
                                                                        return closure_19(closure_29, obj21, item.section.id);
                                                                      } else if (tmp(tmp2[48]).AppLauncherHomeListItemType.RECOMMENDATION_SECTION_HEADER === type) {
                                                                        tmp17 = closure_19;
                                                                        tmp18 = closure_1_36;
                                                                        obj23 = { index: null, children: null };
                                                                        obj23.index = index;
                                                                        obj23.children = item.section;
                                                                        return closure_19(closure_1_36, obj23);
                                                                      } else if (tmp(tmp2[48]).AppLauncherHomeListItemType.RECOMMENDATION_BANNER_CARD === type) {
                                                                        tmp14 = closure_19;
                                                                        tmp15 = context;
                                                                        obj24 = { application: null, isFirst: null, isLast: null, onPress: null, isLandscape: null, showsPromoted: null, overrideImageUrl: null };
                                                                        obj24.application = item.item.application;
                                                                        ({ isFirst: obj4.isFirst, isLast: obj4.isLast } = item);
                                                                        obj24.onPress = function onPress() {
                                                                          return closure_19({ application: item.item.application, sectionName: item.sectionName });
                                                                        };
                                                                        tmp16 = closure_11;
                                                                        obj24.isLandscape = closure_11;
                                                                        ({ showsPromoted: obj4.showsPromoted, overrideImageUrl: obj4.overrideImageUrl } = item);
                                                                        return closure_19(context(tmp2[52]), obj24);
                                                                      } else if (tmp(tmp2[48]).AppLauncherHomeListItemType.RECOMMENDATION_APP === type) {
                                                                        tmp12 = closure_19;
                                                                        tmp13 = context;
                                                                        obj25 = { application: null, isFirstRow: null, isLastRow: null, onPress: null, showsPromoted: null };
                                                                        ({ application: obj3.application, isFirstRow: obj3.isFirstRow, isLastRow: obj3.isLastRow } = item);
                                                                        obj25.onPress = function onPress() {
                                                                          return closure_19({ application: item.application, sectionName: item.sectionName });
                                                                        };
                                                                        obj25.showsPromoted = item.showsPromoted;
                                                                        return closure_19(context(tmp2[53]), obj25, item.application.id);
                                                                      } else if (tmp(tmp2[48]).AppLauncherHomeListItemType.VIEW_ALL === type) {
                                                                        tmp10 = closure_19;
                                                                        tmp11 = context;
                                                                        obj26 = { title: null, onPress: null };
                                                                        obj26.title = item.title;
                                                                        obj26.onPress = function onPress() {
                                                                          const applications = item.applications;
                                                                          const mapped = applications.map((item) => item);
                                                                          const obj = AppLauncherNativeUtils;
                                                                          const result = obj.handleViewAllSelected({ location: ApplicationCommandTypes.ApplicationCommandTriggerLocations.APP_LAUNCHER_HOME, navigation, context, sectionName: item.sectionName, sectionOverallPosition: item.sectionOverallPosition, applications: mapped, sectionItemType: FrecencySection.SectionItemType.APPS, commands: [], sectionDescriptors: mapped.map((item) => item(closure_1_3[49]).getApplicationCommandSection(item)), title: item.title, promotedApplicationIds: item.promotedApplicationIds });
                                                                        };
                                                                        return closure_19(context(tmp2[54]), obj26);
                                                                      } else if (tmp(tmp2[48]).AppLauncherHomeListItemType.DIVIDER_ITEM === type) {
                                                                        tmp8 = closure_19;
                                                                        tmp9 = closure_1_35;
                                                                        return closure_19(closure_1_35, {});
                                                                      } else if (tmp(tmp2[48]).AppLauncherHomeListItemType.LEARN_MORE === type) {
                                                                        tmp4 = closure_19;
                                                                        tmp5 = context;
                                                                        obj = { visible: null };
                                                                        tmp7 = closure_3;
                                                                        tmp6 = context(tmp2[55]);
                                                                        obj.visible = closure_3.valueOf();
                                                                        return closure_19(tmp6, obj);
                                                                      } else {
                                                                        tmp3 = null;
                                                                        return null;
                                                                      }
                                                                    }
                                                                  }
                                                                  [tmp31, c22] = obj4.useState(false);
                                                                  if (cResult[53] !== entrypoint) {
                                                                    const debounceResult = tmp5(12).debounce((query) => {
                                                                      AppAnalyticsUtils.trackWithMetadata(constants.APP_LAUNCHER_SEARCH_QUERY_TYPED, { query, source: entrypoint });
                                                                    }, 400, { leading: false, trailing: true });
                                                                    cResult[53] = entrypoint;
                                                                    class Ce {
                                                                      constructor(arg0) {
                                                                        item = navigation.item;
                                                                        index = navigation.index;
                                                                        type = item.type;
                                                                        tmp = navigation;
                                                                        tmp2 = closure_3;
                                                                        if (navigation(closure_3[48]).AppLauncherHomeListItemType.PLACEHOLDER === type) {
                                                                          tmp40 = closure_19;
                                                                          tmp41 = context;
                                                                          obj1 = { isFirstRow: null, isLastRow: null, style: null };
                                                                          num2 = 0;
                                                                          obj1.isFirstRow = 0 === index;
                                                                          tmp42 = list;
                                                                          num3 = 1;
                                                                          obj1.isLastRow = index === list.length - 1;
                                                                          obj15 = { height: null };
                                                                          tmp43 = closure_5;
                                                                          obj15.height = closure_5;
                                                                          obj1.style = obj15;
                                                                          return closure_19(context(tmp2[51]), obj1);
                                                                        } else if (tmp(tmp2[48]).AppLauncherHomeListItemType.SECTION_HEADER === type) {
                                                                          tmp38 = closure_19;
                                                                          tmp39 = closure_4;
                                                                          items = [, ];
                                                                          items[0] = closure_4.sectionHeader;
                                                                          num = 0;
                                                                          obj16 = null;
                                                                          if (0 !== index) {
                                                                            obj16 = { marginTop: 24 };
                                                                          }
                                                                          obj17 = { accessibilityRole: "header", variant: "text-lg/bold", color: "mobile-text-heading-primary", style: null, children: null };
                                                                          items[1] = obj16;
                                                                          obj17.style = items;
                                                                          obj17.children = item.section;
                                                                          return tmp38(tmp(tmp2[18]).Text, obj17);
                                                                        } else if (tmp(tmp2[48]).AppLauncherHomeListItemType.SHELF_ITEM === type) {
                                                                          tmp36 = closure_19;
                                                                          tmp37 = closure_30;
                                                                          obj18 = { section: null, onPress: null, isFirstRow: null, isLastRow: null };
                                                                          obj18.section = item.section;
                                                                          obj18.onPress = function onPress(shelfData) {
                                                                            closure_13({ shelfData, sectionName: item.sectionName });
                                                                          };
                                                                          ({ isFirstRow: obj10.isFirstRow, isLastRow: obj10.isLastRow } = item);
                                                                          return closure_19(closure_30, obj18, item.section.application.id);
                                                                        } else if (tmp(tmp2[48]).AppLauncherHomeListItemType.SHELF_ITEM_TUPLE === type) {
                                                                          obj19 = { context: null, sectionName: null, onPress: null, usesHandleActivityItemSelected: null, onActivityItemSelected: null, shelfItem1: null, shelfItem2: null, isLastTuple: null, entrypoint: null, containerWidth: null };
                                                                          tmp29 = context;
                                                                          obj19.context = context;
                                                                          tmp27 = closure_19;
                                                                          tmp28 = closure_31;
                                                                          obj19.sectionName = tmp(tmp2[44]).AppLauncherSectionName.ACTIVITIES;
                                                                          obj19.onPress = function onPress(shelfData) {
                                                                            const obj = { shelfData, sectionName: item.sectionName, navigates: null };
                                                                            let tmp2 = clickOnHomeActivityOpensAppDetails;
                                                                            if (!tmp2) {
                                                                              tmp2 = entrypoint !== AppLauncherTypes.AppLauncherEntrypoint.VOICE;
                                                                            }
                                                                            obj.navigates = tmp2;
                                                                            closure_13(obj);
                                                                          };
                                                                          tmp30 = closure_20;
                                                                          tmp31 = !closure_20;
                                                                          if (!closure_20) {
                                                                            tmp32 = entrypoint;
                                                                            tmp31 = entrypoint === tmp(tmp2[44]).AppLauncherEntrypoint.VOICE;
                                                                          }
                                                                          obj19.usesHandleActivityItemSelected = tmp31;
                                                                          tmp33 = onActivityItemSelected;
                                                                          obj19.onActivityItemSelected = onActivityItemSelected;
                                                                          ({ shelfItem1: obj9.shelfItem1, shelfItem2: obj9.shelfItem2, isLastTuple: obj9.isLastTuple } = item);
                                                                          tmp34 = entrypoint;
                                                                          obj19.entrypoint = entrypoint;
                                                                          tmp35 = width;
                                                                          obj19.containerWidth = width;
                                                                          return tmp27(tmp28, obj19, item.shelfItem1.application.id);
                                                                        } else if (tmp(tmp2[48]).AppLauncherHomeListItemType.RECOMMENDATION_TUPLE === type) {
                                                                          tmp22 = closure_19;
                                                                          tmp23 = closure_33;
                                                                          obj20 = { context: null, sectionName: null, onPress: null, items: null, isLastTuple: null, entrypoint: null, containerWidth: null };
                                                                          tmp24 = context;
                                                                          obj20.context = context;
                                                                          obj20.sectionName = item.sectionName;
                                                                          obj20.onPress = function onPress(application, sectionName) {
                                                                            return closure_1_19({ application, sectionName });
                                                                          };
                                                                          ({ items: obj8.items, isLastTuple: obj8.isLastTuple } = item);
                                                                          tmp25 = entrypoint;
                                                                          obj20.entrypoint = entrypoint;
                                                                          tmp26 = width;
                                                                          obj20.containerWidth = width;
                                                                          return closure_19(closure_33, obj20);
                                                                        } else if (tmp(tmp2[48]).AppLauncherHomeListItemType.APP === type) {
                                                                          tmp19 = closure_19;
                                                                          tmp20 = closure_29;
                                                                          obj21 = { section: null, onPress: null, isFirstRow: null, isLastRow: null, style: null };
                                                                          obj21.section = item.section;
                                                                          obj21.onPress = function onPress() {
                                                                            closure_12(item.section, AppLauncherTypes.AppLauncherSectionName.INSTALLED);
                                                                          };
                                                                          ({ isFirstRow: obj6.isFirstRow, isLastRow: obj6.isLastRow } = item);
                                                                          obj22 = { height: null };
                                                                          tmp21 = closure_5;
                                                                          obj22.height = closure_5;
                                                                          obj21.style = obj22;
                                                                          return closure_19(closure_29, obj21, item.section.id);
                                                                        } else if (tmp(tmp2[48]).AppLauncherHomeListItemType.RECOMMENDATION_SECTION_HEADER === type) {
                                                                          tmp17 = closure_19;
                                                                          tmp18 = closure_1_36;
                                                                          obj23 = { index: null, children: null };
                                                                          obj23.index = index;
                                                                          obj23.children = item.section;
                                                                          return closure_19(closure_1_36, obj23);
                                                                        } else if (tmp(tmp2[48]).AppLauncherHomeListItemType.RECOMMENDATION_BANNER_CARD === type) {
                                                                          tmp14 = closure_19;
                                                                          tmp15 = context;
                                                                          obj24 = { application: null, isFirst: null, isLast: null, onPress: null, isLandscape: null, showsPromoted: null, overrideImageUrl: null };
                                                                          obj24.application = item.item.application;
                                                                          ({ isFirst: obj4.isFirst, isLast: obj4.isLast } = item);
                                                                          obj24.onPress = function onPress() {
                                                                            return closure_19({ application: item.item.application, sectionName: item.sectionName });
                                                                          };
                                                                          tmp16 = closure_11;
                                                                          obj24.isLandscape = closure_11;
                                                                          ({ showsPromoted: obj4.showsPromoted, overrideImageUrl: obj4.overrideImageUrl } = item);
                                                                          return closure_19(context(tmp2[52]), obj24);
                                                                        } else if (tmp(tmp2[48]).AppLauncherHomeListItemType.RECOMMENDATION_APP === type) {
                                                                          tmp12 = closure_19;
                                                                          tmp13 = context;
                                                                          obj25 = { application: null, isFirstRow: null, isLastRow: null, onPress: null, showsPromoted: null };
                                                                          ({ application: obj3.application, isFirstRow: obj3.isFirstRow, isLastRow: obj3.isLastRow } = item);
                                                                          obj25.onPress = function onPress() {
                                                                            return closure_19({ application: item.application, sectionName: item.sectionName });
                                                                          };
                                                                          obj25.showsPromoted = item.showsPromoted;
                                                                          return closure_19(context(tmp2[53]), obj25, item.application.id);
                                                                        } else if (tmp(tmp2[48]).AppLauncherHomeListItemType.VIEW_ALL === type) {
                                                                          tmp10 = closure_19;
                                                                          tmp11 = context;
                                                                          obj26 = { title: null, onPress: null };
                                                                          obj26.title = item.title;
                                                                          obj26.onPress = function onPress() {
                                                                            const applications = item.applications;
                                                                            const mapped = applications.map((item) => item);
                                                                            const obj = AppLauncherNativeUtils;
                                                                            const result = obj.handleViewAllSelected({ location: ApplicationCommandTypes.ApplicationCommandTriggerLocations.APP_LAUNCHER_HOME, navigation, context, sectionName: item.sectionName, sectionOverallPosition: item.sectionOverallPosition, applications: mapped, sectionItemType: FrecencySection.SectionItemType.APPS, commands: [], sectionDescriptors: mapped.map((item) => item(closure_1_3[49]).getApplicationCommandSection(item)), title: item.title, promotedApplicationIds: item.promotedApplicationIds });
                                                                          };
                                                                          return closure_19(context(tmp2[54]), obj26);
                                                                        } else if (tmp(tmp2[48]).AppLauncherHomeListItemType.DIVIDER_ITEM === type) {
                                                                          tmp8 = closure_19;
                                                                          tmp9 = closure_1_35;
                                                                          return closure_19(closure_1_35, {});
                                                                        } else if (tmp(tmp2[48]).AppLauncherHomeListItemType.LEARN_MORE === type) {
                                                                          tmp4 = closure_19;
                                                                          tmp5 = context;
                                                                          obj = { visible: null };
                                                                          tmp7 = closure_3;
                                                                          tmp6 = context(tmp2[55]);
                                                                          obj.visible = closure_3.valueOf();
                                                                          return closure_19(tmp6, obj);
                                                                        } else {
                                                                          tmp3 = null;
                                                                          return null;
                                                                        }
                                                                      }
                                                                    }
                                                                    cResult[54] = debounceResult;
                                                                    let tmp32 = debounceResult;
                                                                    const tmp5Result = tmp5(12);
                                                                  } else {
                                                                    tmp32 = cResult[54];
                                                                  }
                                                                  v17777777777777777 = tmp32;
                                                                  obj4.useRef(null);
                                                                  const _Symbol = Symbol;
                                                                  if (cResult[55] === Symbol.for("react.memo_cache_sentinel")) {
                                                                    class Re {
                                                                      constructor() {
                                                                        return () => {
                                                                          current = ref.current;
                                                                          if (current != null) {
                                                                            current.cancel();
                                                                          }
                                                                        };
                                                                      }
                                                                    }
                                                                    const items1 = [];
                                                                    cResult[55] = Re;
                                                                    class Ce {
                                                                      constructor(arg0) {
                                                                        item = navigation.item;
                                                                        index = navigation.index;
                                                                        type = item.type;
                                                                        tmp = navigation;
                                                                        tmp2 = closure_3;
                                                                        if (navigation(closure_3[48]).AppLauncherHomeListItemType.PLACEHOLDER === type) {
                                                                          tmp40 = closure_19;
                                                                          tmp41 = context;
                                                                          obj1 = { isFirstRow: null, isLastRow: null, style: null };
                                                                          num2 = 0;
                                                                          obj1.isFirstRow = 0 === index;
                                                                          tmp42 = list;
                                                                          num3 = 1;
                                                                          obj1.isLastRow = index === list.length - 1;
                                                                          obj15 = { height: null };
                                                                          tmp43 = closure_5;
                                                                          obj15.height = closure_5;
                                                                          obj1.style = obj15;
                                                                          return closure_19(context(tmp2[51]), obj1);
                                                                        } else if (tmp(tmp2[48]).AppLauncherHomeListItemType.SECTION_HEADER === type) {
                                                                          tmp38 = closure_19;
                                                                          tmp39 = closure_4;
                                                                          items = [, ];
                                                                          items[0] = closure_4.sectionHeader;
                                                                          num = 0;
                                                                          obj16 = null;
                                                                          if (0 !== index) {
                                                                            obj16 = { marginTop: 24 };
                                                                          }
                                                                          obj17 = { accessibilityRole: "header", variant: "text-lg/bold", color: "mobile-text-heading-primary", style: null, children: null };
                                                                          items[1] = obj16;
                                                                          obj17.style = items;
                                                                          obj17.children = item.section;
                                                                          return tmp38(tmp(tmp2[18]).Text, obj17);
                                                                        } else if (tmp(tmp2[48]).AppLauncherHomeListItemType.SHELF_ITEM === type) {
                                                                          tmp36 = closure_19;
                                                                          tmp37 = closure_30;
                                                                          obj18 = { section: null, onPress: null, isFirstRow: null, isLastRow: null };
                                                                          obj18.section = item.section;
                                                                          obj18.onPress = function onPress(shelfData) {
                                                                            closure_13({ shelfData, sectionName: item.sectionName });
                                                                          };
                                                                          ({ isFirstRow: obj10.isFirstRow, isLastRow: obj10.isLastRow } = item);
                                                                          return closure_19(closure_30, obj18, item.section.application.id);
                                                                        } else if (tmp(tmp2[48]).AppLauncherHomeListItemType.SHELF_ITEM_TUPLE === type) {
                                                                          obj19 = { context: null, sectionName: null, onPress: null, usesHandleActivityItemSelected: null, onActivityItemSelected: null, shelfItem1: null, shelfItem2: null, isLastTuple: null, entrypoint: null, containerWidth: null };
                                                                          tmp29 = context;
                                                                          obj19.context = context;
                                                                          tmp27 = closure_19;
                                                                          tmp28 = closure_31;
                                                                          obj19.sectionName = tmp(tmp2[44]).AppLauncherSectionName.ACTIVITIES;
                                                                          obj19.onPress = function onPress(shelfData) {
                                                                            const obj = { shelfData, sectionName: item.sectionName, navigates: null };
                                                                            let tmp2 = clickOnHomeActivityOpensAppDetails;
                                                                            if (!tmp2) {
                                                                              tmp2 = entrypoint !== AppLauncherTypes.AppLauncherEntrypoint.VOICE;
                                                                            }
                                                                            obj.navigates = tmp2;
                                                                            closure_13(obj);
                                                                          };
                                                                          tmp30 = closure_20;
                                                                          tmp31 = !closure_20;
                                                                          if (!closure_20) {
                                                                            tmp32 = entrypoint;
                                                                            tmp31 = entrypoint === tmp(tmp2[44]).AppLauncherEntrypoint.VOICE;
                                                                          }
                                                                          obj19.usesHandleActivityItemSelected = tmp31;
                                                                          tmp33 = onActivityItemSelected;
                                                                          obj19.onActivityItemSelected = onActivityItemSelected;
                                                                          ({ shelfItem1: obj9.shelfItem1, shelfItem2: obj9.shelfItem2, isLastTuple: obj9.isLastTuple } = item);
                                                                          tmp34 = entrypoint;
                                                                          obj19.entrypoint = entrypoint;
                                                                          tmp35 = width;
                                                                          obj19.containerWidth = width;
                                                                          return tmp27(tmp28, obj19, item.shelfItem1.application.id);
                                                                        } else if (tmp(tmp2[48]).AppLauncherHomeListItemType.RECOMMENDATION_TUPLE === type) {
                                                                          tmp22 = closure_19;
                                                                          tmp23 = closure_33;
                                                                          obj20 = { context: null, sectionName: null, onPress: null, items: null, isLastTuple: null, entrypoint: null, containerWidth: null };
                                                                          tmp24 = context;
                                                                          obj20.context = context;
                                                                          obj20.sectionName = item.sectionName;
                                                                          obj20.onPress = function onPress(application, sectionName) {
                                                                            return closure_1_19({ application, sectionName });
                                                                          };
                                                                          ({ items: obj8.items, isLastTuple: obj8.isLastTuple } = item);
                                                                          tmp25 = entrypoint;
                                                                          obj20.entrypoint = entrypoint;
                                                                          tmp26 = width;
                                                                          obj20.containerWidth = width;
                                                                          return closure_19(closure_33, obj20);
                                                                        } else if (tmp(tmp2[48]).AppLauncherHomeListItemType.APP === type) {
                                                                          tmp19 = closure_19;
                                                                          tmp20 = closure_29;
                                                                          obj21 = { section: null, onPress: null, isFirstRow: null, isLastRow: null, style: null };
                                                                          obj21.section = item.section;
                                                                          obj21.onPress = function onPress() {
                                                                            closure_12(item.section, AppLauncherTypes.AppLauncherSectionName.INSTALLED);
                                                                          };
                                                                          ({ isFirstRow: obj6.isFirstRow, isLastRow: obj6.isLastRow } = item);
                                                                          obj22 = { height: null };
                                                                          tmp21 = closure_5;
                                                                          obj22.height = closure_5;
                                                                          obj21.style = obj22;
                                                                          return closure_19(closure_29, obj21, item.section.id);
                                                                        } else if (tmp(tmp2[48]).AppLauncherHomeListItemType.RECOMMENDATION_SECTION_HEADER === type) {
                                                                          tmp17 = closure_19;
                                                                          tmp18 = closure_1_36;
                                                                          obj23 = { index: null, children: null };
                                                                          obj23.index = index;
                                                                          obj23.children = item.section;
                                                                          return closure_19(closure_1_36, obj23);
                                                                        } else if (tmp(tmp2[48]).AppLauncherHomeListItemType.RECOMMENDATION_BANNER_CARD === type) {
                                                                          tmp14 = closure_19;
                                                                          tmp15 = context;
                                                                          obj24 = { application: null, isFirst: null, isLast: null, onPress: null, isLandscape: null, showsPromoted: null, overrideImageUrl: null };
                                                                          obj24.application = item.item.application;
                                                                          ({ isFirst: obj4.isFirst, isLast: obj4.isLast } = item);
                                                                          obj24.onPress = function onPress() {
                                                                            return closure_19({ application: item.item.application, sectionName: item.sectionName });
                                                                          };
                                                                          tmp16 = closure_11;
                                                                          obj24.isLandscape = closure_11;
                                                                          ({ showsPromoted: obj4.showsPromoted, overrideImageUrl: obj4.overrideImageUrl } = item);
                                                                          return closure_19(context(tmp2[52]), obj24);
                                                                        } else if (tmp(tmp2[48]).AppLauncherHomeListItemType.RECOMMENDATION_APP === type) {
                                                                          tmp12 = closure_19;
                                                                          tmp13 = context;
                                                                          obj25 = { application: null, isFirstRow: null, isLastRow: null, onPress: null, showsPromoted: null };
                                                                          ({ application: obj3.application, isFirstRow: obj3.isFirstRow, isLastRow: obj3.isLastRow } = item);
                                                                          obj25.onPress = function onPress() {
                                                                            return closure_19({ application: item.application, sectionName: item.sectionName });
                                                                          };
                                                                          obj25.showsPromoted = item.showsPromoted;
                                                                          return closure_19(context(tmp2[53]), obj25, item.application.id);
                                                                        } else if (tmp(tmp2[48]).AppLauncherHomeListItemType.VIEW_ALL === type) {
                                                                          tmp10 = closure_19;
                                                                          tmp11 = context;
                                                                          obj26 = { title: null, onPress: null };
                                                                          obj26.title = item.title;
                                                                          obj26.onPress = function onPress() {
                                                                            const applications = item.applications;
                                                                            const mapped = applications.map((item) => item);
                                                                            const obj = AppLauncherNativeUtils;
                                                                            const result = obj.handleViewAllSelected({ location: ApplicationCommandTypes.ApplicationCommandTriggerLocations.APP_LAUNCHER_HOME, navigation, context, sectionName: item.sectionName, sectionOverallPosition: item.sectionOverallPosition, applications: mapped, sectionItemType: FrecencySection.SectionItemType.APPS, commands: [], sectionDescriptors: mapped.map((item) => item(closure_1_3[49]).getApplicationCommandSection(item)), title: item.title, promotedApplicationIds: item.promotedApplicationIds });
                                                                          };
                                                                          return closure_19(context(tmp2[54]), obj26);
                                                                        } else if (tmp(tmp2[48]).AppLauncherHomeListItemType.DIVIDER_ITEM === type) {
                                                                          tmp8 = closure_19;
                                                                          tmp9 = closure_1_35;
                                                                          return closure_19(closure_1_35, {});
                                                                        } else if (tmp(tmp2[48]).AppLauncherHomeListItemType.LEARN_MORE === type) {
                                                                          tmp4 = closure_19;
                                                                          tmp5 = context;
                                                                          obj = { visible: null };
                                                                          tmp7 = closure_3;
                                                                          tmp6 = context(tmp2[55]);
                                                                          obj.visible = closure_3.valueOf();
                                                                          return closure_19(tmp6, obj);
                                                                        } else {
                                                                          tmp3 = null;
                                                                          return null;
                                                                        }
                                                                      }
                                                                    }
                                                                    let tmp36 = items1;
                                                                  } else {
                                                                    class Re {
                                                                      constructor() {
                                                                        return () => {
                                                                          current = ref.current;
                                                                          if (current != null) {
                                                                            current.cancel();
                                                                          }
                                                                        };
                                                                      }
                                                                    }
                                                                    tmp36 = cResult[56];
                                                                  }
                                                                  const effect1 = obj4.useEffect(Re, tmp36);
                                                                  if (cResult[57] !== tmp32) {
                                                                    class Oe {
                                                                      constructor(arg0) {
                                                                        closure_0 = navigation;
                                                                        tmp = closure_22(0 !== navigation.length);
                                                                        current = closure_24.current;
                                                                        tmp2 = closure_24;
                                                                        if (current != null) {
                                                                          cancelResult = current.cancel();
                                                                        }
                                                                        obj = navigation(closure_3[58]);
                                                                        tmp2.current = obj.runAfterInteractions(() => {
                                                                          current = ref.current;
                                                                          if (current != null) {
                                                                            current.setQuery(closure_0);
                                                                          }
                                                                        }, 100);
                                                                        tmp4 = closure_23(navigation);
                                                                        return;
                                                                      }
                                                                    }
                                                                    cResult[57] = tmp32;
                                                                    cResult[58] = Oe;
                                                                    class Ce {
                                                                      constructor(arg0) {
                                                                        item = navigation.item;
                                                                        index = navigation.index;
                                                                        type = item.type;
                                                                        tmp = navigation;
                                                                        tmp2 = closure_3;
                                                                        if (navigation(closure_3[48]).AppLauncherHomeListItemType.PLACEHOLDER === type) {
                                                                          tmp40 = closure_19;
                                                                          tmp41 = context;
                                                                          obj1 = { isFirstRow: null, isLastRow: null, style: null };
                                                                          num2 = 0;
                                                                          obj1.isFirstRow = 0 === index;
                                                                          tmp42 = list;
                                                                          num3 = 1;
                                                                          obj1.isLastRow = index === list.length - 1;
                                                                          obj15 = { height: null };
                                                                          tmp43 = closure_5;
                                                                          obj15.height = closure_5;
                                                                          obj1.style = obj15;
                                                                          return closure_19(context(tmp2[51]), obj1);
                                                                        } else if (tmp(tmp2[48]).AppLauncherHomeListItemType.SECTION_HEADER === type) {
                                                                          tmp38 = closure_19;
                                                                          tmp39 = closure_4;
                                                                          items = [, ];
                                                                          items[0] = closure_4.sectionHeader;
                                                                          num = 0;
                                                                          obj16 = null;
                                                                          if (0 !== index) {
                                                                            obj16 = { marginTop: 24 };
                                                                          }
                                                                          obj17 = { accessibilityRole: "header", variant: "text-lg/bold", color: "mobile-text-heading-primary", style: null, children: null };
                                                                          items[1] = obj16;
                                                                          obj17.style = items;
                                                                          obj17.children = item.section;
                                                                          return tmp38(tmp(tmp2[18]).Text, obj17);
                                                                        } else if (tmp(tmp2[48]).AppLauncherHomeListItemType.SHELF_ITEM === type) {
                                                                          tmp36 = closure_19;
                                                                          tmp37 = closure_30;
                                                                          obj18 = { section: null, onPress: null, isFirstRow: null, isLastRow: null };
                                                                          obj18.section = item.section;
                                                                          obj18.onPress = function onPress(shelfData) {
                                                                            closure_13({ shelfData, sectionName: item.sectionName });
                                                                          };
                                                                          ({ isFirstRow: obj10.isFirstRow, isLastRow: obj10.isLastRow } = item);
                                                                          return closure_19(closure_30, obj18, item.section.application.id);
                                                                        } else if (tmp(tmp2[48]).AppLauncherHomeListItemType.SHELF_ITEM_TUPLE === type) {
                                                                          obj19 = { context: null, sectionName: null, onPress: null, usesHandleActivityItemSelected: null, onActivityItemSelected: null, shelfItem1: null, shelfItem2: null, isLastTuple: null, entrypoint: null, containerWidth: null };
                                                                          tmp29 = context;
                                                                          obj19.context = context;
                                                                          tmp27 = closure_19;
                                                                          tmp28 = closure_31;
                                                                          obj19.sectionName = tmp(tmp2[44]).AppLauncherSectionName.ACTIVITIES;
                                                                          obj19.onPress = function onPress(shelfData) {
                                                                            const obj = { shelfData, sectionName: item.sectionName, navigates: null };
                                                                            let tmp2 = clickOnHomeActivityOpensAppDetails;
                                                                            if (!tmp2) {
                                                                              tmp2 = entrypoint !== AppLauncherTypes.AppLauncherEntrypoint.VOICE;
                                                                            }
                                                                            obj.navigates = tmp2;
                                                                            closure_13(obj);
                                                                          };
                                                                          tmp30 = closure_20;
                                                                          tmp31 = !closure_20;
                                                                          if (!closure_20) {
                                                                            tmp32 = entrypoint;
                                                                            tmp31 = entrypoint === tmp(tmp2[44]).AppLauncherEntrypoint.VOICE;
                                                                          }
                                                                          obj19.usesHandleActivityItemSelected = tmp31;
                                                                          tmp33 = onActivityItemSelected;
                                                                          obj19.onActivityItemSelected = onActivityItemSelected;
                                                                          ({ shelfItem1: obj9.shelfItem1, shelfItem2: obj9.shelfItem2, isLastTuple: obj9.isLastTuple } = item);
                                                                          tmp34 = entrypoint;
                                                                          obj19.entrypoint = entrypoint;
                                                                          tmp35 = width;
                                                                          obj19.containerWidth = width;
                                                                          return tmp27(tmp28, obj19, item.shelfItem1.application.id);
                                                                        } else if (tmp(tmp2[48]).AppLauncherHomeListItemType.RECOMMENDATION_TUPLE === type) {
                                                                          tmp22 = closure_19;
                                                                          tmp23 = closure_33;
                                                                          obj20 = { context: null, sectionName: null, onPress: null, items: null, isLastTuple: null, entrypoint: null, containerWidth: null };
                                                                          tmp24 = context;
                                                                          obj20.context = context;
                                                                          obj20.sectionName = item.sectionName;
                                                                          obj20.onPress = function onPress(application, sectionName) {
                                                                            return closure_1_19({ application, sectionName });
                                                                          };
                                                                          ({ items: obj8.items, isLastTuple: obj8.isLastTuple } = item);
                                                                          tmp25 = entrypoint;
                                                                          obj20.entrypoint = entrypoint;
                                                                          tmp26 = width;
                                                                          obj20.containerWidth = width;
                                                                          return closure_19(closure_33, obj20);
                                                                        } else if (tmp(tmp2[48]).AppLauncherHomeListItemType.APP === type) {
                                                                          tmp19 = closure_19;
                                                                          tmp20 = closure_29;
                                                                          obj21 = { section: null, onPress: null, isFirstRow: null, isLastRow: null, style: null };
                                                                          obj21.section = item.section;
                                                                          obj21.onPress = function onPress() {
                                                                            closure_12(item.section, AppLauncherTypes.AppLauncherSectionName.INSTALLED);
                                                                          };
                                                                          ({ isFirstRow: obj6.isFirstRow, isLastRow: obj6.isLastRow } = item);
                                                                          obj22 = { height: null };
                                                                          tmp21 = closure_5;
                                                                          obj22.height = closure_5;
                                                                          obj21.style = obj22;
                                                                          return closure_19(closure_29, obj21, item.section.id);
                                                                        } else if (tmp(tmp2[48]).AppLauncherHomeListItemType.RECOMMENDATION_SECTION_HEADER === type) {
                                                                          tmp17 = closure_19;
                                                                          tmp18 = closure_1_36;
                                                                          obj23 = { index: null, children: null };
                                                                          obj23.index = index;
                                                                          obj23.children = item.section;
                                                                          return closure_19(closure_1_36, obj23);
                                                                        } else if (tmp(tmp2[48]).AppLauncherHomeListItemType.RECOMMENDATION_BANNER_CARD === type) {
                                                                          tmp14 = closure_19;
                                                                          tmp15 = context;
                                                                          obj24 = { application: null, isFirst: null, isLast: null, onPress: null, isLandscape: null, showsPromoted: null, overrideImageUrl: null };
                                                                          obj24.application = item.item.application;
                                                                          ({ isFirst: obj4.isFirst, isLast: obj4.isLast } = item);
                                                                          obj24.onPress = function onPress() {
                                                                            return closure_19({ application: item.item.application, sectionName: item.sectionName });
                                                                          };
                                                                          tmp16 = closure_11;
                                                                          obj24.isLandscape = closure_11;
                                                                          ({ showsPromoted: obj4.showsPromoted, overrideImageUrl: obj4.overrideImageUrl } = item);
                                                                          return closure_19(context(tmp2[52]), obj24);
                                                                        } else if (tmp(tmp2[48]).AppLauncherHomeListItemType.RECOMMENDATION_APP === type) {
                                                                          tmp12 = closure_19;
                                                                          tmp13 = context;
                                                                          obj25 = { application: null, isFirstRow: null, isLastRow: null, onPress: null, showsPromoted: null };
                                                                          ({ application: obj3.application, isFirstRow: obj3.isFirstRow, isLastRow: obj3.isLastRow } = item);
                                                                          obj25.onPress = function onPress() {
                                                                            return closure_19({ application: item.application, sectionName: item.sectionName });
                                                                          };
                                                                          obj25.showsPromoted = item.showsPromoted;
                                                                          return closure_19(context(tmp2[53]), obj25, item.application.id);
                                                                        } else if (tmp(tmp2[48]).AppLauncherHomeListItemType.VIEW_ALL === type) {
                                                                          tmp10 = closure_19;
                                                                          tmp11 = context;
                                                                          obj26 = { title: null, onPress: null };
                                                                          obj26.title = item.title;
                                                                          obj26.onPress = function onPress() {
                                                                            const applications = item.applications;
                                                                            const mapped = applications.map((item) => item);
                                                                            const obj = AppLauncherNativeUtils;
                                                                            const result = obj.handleViewAllSelected({ location: ApplicationCommandTypes.ApplicationCommandTriggerLocations.APP_LAUNCHER_HOME, navigation, context, sectionName: item.sectionName, sectionOverallPosition: item.sectionOverallPosition, applications: mapped, sectionItemType: FrecencySection.SectionItemType.APPS, commands: [], sectionDescriptors: mapped.map((item) => item(closure_1_3[49]).getApplicationCommandSection(item)), title: item.title, promotedApplicationIds: item.promotedApplicationIds });
                                                                          };
                                                                          return closure_19(context(tmp2[54]), obj26);
                                                                        } else if (tmp(tmp2[48]).AppLauncherHomeListItemType.DIVIDER_ITEM === type) {
                                                                          tmp8 = closure_19;
                                                                          tmp9 = closure_1_35;
                                                                          return closure_19(closure_1_35, {});
                                                                        } else if (tmp(tmp2[48]).AppLauncherHomeListItemType.LEARN_MORE === type) {
                                                                          tmp4 = closure_19;
                                                                          tmp5 = context;
                                                                          obj = { visible: null };
                                                                          tmp7 = closure_3;
                                                                          tmp6 = context(tmp2[55]);
                                                                          obj.visible = closure_3.valueOf();
                                                                          return closure_19(tmp6, obj);
                                                                        } else {
                                                                          tmp3 = null;
                                                                          return null;
                                                                        }
                                                                      }
                                                                    }
                                                                  } else {
                                                                    class Oe {
                                                                      constructor(arg0) {
                                                                        closure_0 = navigation;
                                                                        tmp = closure_22(0 !== navigation.length);
                                                                        current = closure_24.current;
                                                                        tmp2 = closure_24;
                                                                        if (current != null) {
                                                                          cancelResult = current.cancel();
                                                                        }
                                                                        obj = navigation(closure_3[58]);
                                                                        tmp2.current = obj.runAfterInteractions(() => {
                                                                          current = ref.current;
                                                                          if (current != null) {
                                                                            current.setQuery(closure_0);
                                                                          }
                                                                        }, 100);
                                                                        tmp4 = closure_23(navigation);
                                                                        return;
                                                                      }
                                                                    }
                                                                  }
                                                                  current = tmp38;
                                                                  const tmp29 = _slicedToArray;
                                                                  const tmp30 = _slicedToArray(obj4.useState(false), 2);
                                                                  if (cResult[59] !== tmp38) {
                                                                    class De {
                                                                      constructor() {
                                                                        closure_26.current = closure_25;
                                                                        return;
                                                                      }
                                                                    }
                                                                    const items2 = [tmp38];
                                                                    cResult[59] = tmp38;
                                                                    class Ce {
                                                                      constructor(arg0) {
                                                                        item = navigation.item;
                                                                        index = navigation.index;
                                                                        type = item.type;
                                                                        tmp = navigation;
                                                                        tmp2 = closure_3;
                                                                        if (navigation(closure_3[48]).AppLauncherHomeListItemType.PLACEHOLDER === type) {
                                                                          tmp40 = closure_19;
                                                                          tmp41 = context;
                                                                          obj1 = { isFirstRow: null, isLastRow: null, style: null };
                                                                          num2 = 0;
                                                                          obj1.isFirstRow = 0 === index;
                                                                          tmp42 = list;
                                                                          num3 = 1;
                                                                          obj1.isLastRow = index === list.length - 1;
                                                                          obj15 = { height: null };
                                                                          tmp43 = closure_5;
                                                                          obj15.height = closure_5;
                                                                          obj1.style = obj15;
                                                                          return closure_19(context(tmp2[51]), obj1);
                                                                        } else if (tmp(tmp2[48]).AppLauncherHomeListItemType.SECTION_HEADER === type) {
                                                                          tmp38 = closure_19;
                                                                          tmp39 = closure_4;
                                                                          items = [, ];
                                                                          items[0] = closure_4.sectionHeader;
                                                                          num = 0;
                                                                          obj16 = null;
                                                                          if (0 !== index) {
                                                                            obj16 = { marginTop: 24 };
                                                                          }
                                                                          obj17 = { accessibilityRole: "header", variant: "text-lg/bold", color: "mobile-text-heading-primary", style: null, children: null };
                                                                          items[1] = obj16;
                                                                          obj17.style = items;
                                                                          obj17.children = item.section;
                                                                          return tmp38(tmp(tmp2[18]).Text, obj17);
                                                                        } else if (tmp(tmp2[48]).AppLauncherHomeListItemType.SHELF_ITEM === type) {
                                                                          tmp36 = closure_19;
                                                                          tmp37 = closure_30;
                                                                          obj18 = { section: null, onPress: null, isFirstRow: null, isLastRow: null };
                                                                          obj18.section = item.section;
                                                                          obj18.onPress = function onPress(shelfData) {
                                                                            closure_13({ shelfData, sectionName: item.sectionName });
                                                                          };
                                                                          ({ isFirstRow: obj10.isFirstRow, isLastRow: obj10.isLastRow } = item);
                                                                          return closure_19(closure_30, obj18, item.section.application.id);
                                                                        } else if (tmp(tmp2[48]).AppLauncherHomeListItemType.SHELF_ITEM_TUPLE === type) {
                                                                          obj19 = { context: null, sectionName: null, onPress: null, usesHandleActivityItemSelected: null, onActivityItemSelected: null, shelfItem1: null, shelfItem2: null, isLastTuple: null, entrypoint: null, containerWidth: null };
                                                                          tmp29 = context;
                                                                          obj19.context = context;
                                                                          tmp27 = closure_19;
                                                                          tmp28 = closure_31;
                                                                          obj19.sectionName = tmp(tmp2[44]).AppLauncherSectionName.ACTIVITIES;
                                                                          obj19.onPress = function onPress(shelfData) {
                                                                            const obj = { shelfData, sectionName: item.sectionName, navigates: null };
                                                                            let tmp2 = clickOnHomeActivityOpensAppDetails;
                                                                            if (!tmp2) {
                                                                              tmp2 = entrypoint !== AppLauncherTypes.AppLauncherEntrypoint.VOICE;
                                                                            }
                                                                            obj.navigates = tmp2;
                                                                            closure_13(obj);
                                                                          };
                                                                          tmp30 = closure_20;
                                                                          tmp31 = !closure_20;
                                                                          if (!closure_20) {
                                                                            tmp32 = entrypoint;
                                                                            tmp31 = entrypoint === tmp(tmp2[44]).AppLauncherEntrypoint.VOICE;
                                                                          }
                                                                          obj19.usesHandleActivityItemSelected = tmp31;
                                                                          tmp33 = onActivityItemSelected;
                                                                          obj19.onActivityItemSelected = onActivityItemSelected;
                                                                          ({ shelfItem1: obj9.shelfItem1, shelfItem2: obj9.shelfItem2, isLastTuple: obj9.isLastTuple } = item);
                                                                          tmp34 = entrypoint;
                                                                          obj19.entrypoint = entrypoint;
                                                                          tmp35 = width;
                                                                          obj19.containerWidth = width;
                                                                          return tmp27(tmp28, obj19, item.shelfItem1.application.id);
                                                                        } else if (tmp(tmp2[48]).AppLauncherHomeListItemType.RECOMMENDATION_TUPLE === type) {
                                                                          tmp22 = closure_19;
                                                                          tmp23 = closure_33;
                                                                          obj20 = { context: null, sectionName: null, onPress: null, items: null, isLastTuple: null, entrypoint: null, containerWidth: null };
                                                                          tmp24 = context;
                                                                          obj20.context = context;
                                                                          obj20.sectionName = item.sectionName;
                                                                          obj20.onPress = function onPress(application, sectionName) {
                                                                            return closure_1_19({ application, sectionName });
                                                                          };
                                                                          ({ items: obj8.items, isLastTuple: obj8.isLastTuple } = item);
                                                                          tmp25 = entrypoint;
                                                                          obj20.entrypoint = entrypoint;
                                                                          tmp26 = width;
                                                                          obj20.containerWidth = width;
                                                                          return closure_19(closure_33, obj20);
                                                                        } else if (tmp(tmp2[48]).AppLauncherHomeListItemType.APP === type) {
                                                                          tmp19 = closure_19;
                                                                          tmp20 = closure_29;
                                                                          obj21 = { section: null, onPress: null, isFirstRow: null, isLastRow: null, style: null };
                                                                          obj21.section = item.section;
                                                                          obj21.onPress = function onPress() {
                                                                            closure_12(item.section, AppLauncherTypes.AppLauncherSectionName.INSTALLED);
                                                                          };
                                                                          ({ isFirstRow: obj6.isFirstRow, isLastRow: obj6.isLastRow } = item);
                                                                          obj22 = { height: null };
                                                                          tmp21 = closure_5;
                                                                          obj22.height = closure_5;
                                                                          obj21.style = obj22;
                                                                          return closure_19(closure_29, obj21, item.section.id);
                                                                        } else if (tmp(tmp2[48]).AppLauncherHomeListItemType.RECOMMENDATION_SECTION_HEADER === type) {
                                                                          tmp17 = closure_19;
                                                                          tmp18 = closure_1_36;
                                                                          obj23 = { index: null, children: null };
                                                                          obj23.index = index;
                                                                          obj23.children = item.section;
                                                                          return closure_19(closure_1_36, obj23);
                                                                        } else if (tmp(tmp2[48]).AppLauncherHomeListItemType.RECOMMENDATION_BANNER_CARD === type) {
                                                                          tmp14 = closure_19;
                                                                          tmp15 = context;
                                                                          obj24 = { application: null, isFirst: null, isLast: null, onPress: null, isLandscape: null, showsPromoted: null, overrideImageUrl: null };
                                                                          obj24.application = item.item.application;
                                                                          ({ isFirst: obj4.isFirst, isLast: obj4.isLast } = item);
                                                                          obj24.onPress = function onPress() {
                                                                            return closure_19({ application: item.item.application, sectionName: item.sectionName });
                                                                          };
                                                                          tmp16 = closure_11;
                                                                          obj24.isLandscape = closure_11;
                                                                          ({ showsPromoted: obj4.showsPromoted, overrideImageUrl: obj4.overrideImageUrl } = item);
                                                                          return closure_19(context(tmp2[52]), obj24);
                                                                        } else if (tmp(tmp2[48]).AppLauncherHomeListItemType.RECOMMENDATION_APP === type) {
                                                                          tmp12 = closure_19;
                                                                          tmp13 = context;
                                                                          obj25 = { application: null, isFirstRow: null, isLastRow: null, onPress: null, showsPromoted: null };
                                                                          ({ application: obj3.application, isFirstRow: obj3.isFirstRow, isLastRow: obj3.isLastRow } = item);
                                                                          obj25.onPress = function onPress() {
                                                                            return closure_19({ application: item.application, sectionName: item.sectionName });
                                                                          };
                                                                          obj25.showsPromoted = item.showsPromoted;
                                                                          return closure_19(context(tmp2[53]), obj25, item.application.id);
                                                                        } else if (tmp(tmp2[48]).AppLauncherHomeListItemType.VIEW_ALL === type) {
                                                                          tmp10 = closure_19;
                                                                          tmp11 = context;
                                                                          obj26 = { title: null, onPress: null };
                                                                          obj26.title = item.title;
                                                                          obj26.onPress = function onPress() {
                                                                            const applications = item.applications;
                                                                            const mapped = applications.map((item) => item);
                                                                            const obj = AppLauncherNativeUtils;
                                                                            const result = obj.handleViewAllSelected({ location: ApplicationCommandTypes.ApplicationCommandTriggerLocations.APP_LAUNCHER_HOME, navigation, context, sectionName: item.sectionName, sectionOverallPosition: item.sectionOverallPosition, applications: mapped, sectionItemType: FrecencySection.SectionItemType.APPS, commands: [], sectionDescriptors: mapped.map((item) => item(closure_1_3[49]).getApplicationCommandSection(item)), title: item.title, promotedApplicationIds: item.promotedApplicationIds });
                                                                          };
                                                                          return closure_19(context(tmp2[54]), obj26);
                                                                        } else if (tmp(tmp2[48]).AppLauncherHomeListItemType.DIVIDER_ITEM === type) {
                                                                          tmp8 = closure_19;
                                                                          tmp9 = closure_1_35;
                                                                          return closure_19(closure_1_35, {});
                                                                        } else if (tmp(tmp2[48]).AppLauncherHomeListItemType.LEARN_MORE === type) {
                                                                          tmp4 = closure_19;
                                                                          tmp5 = context;
                                                                          obj = { visible: null };
                                                                          tmp7 = closure_3;
                                                                          tmp6 = context(tmp2[55]);
                                                                          obj.visible = closure_3.valueOf();
                                                                          return closure_19(tmp6, obj);
                                                                        } else {
                                                                          tmp3 = null;
                                                                          return null;
                                                                        }
                                                                      }
                                                                    }
                                                                    cResult[60] = De;
                                                                    cResult[61] = items2;
                                                                    let tmp41 = items2;
                                                                  } else {
                                                                    class De {
                                                                      constructor() {
                                                                        closure_26.current = closure_25;
                                                                        return;
                                                                      }
                                                                    }
                                                                    tmp41 = cResult[61];
                                                                  }
                                                                  const effect2 = obj4.useEffect(De, tmp41);
                                                                  if (cResult[62] !== entrypoint) {
                                                                    class Fe {
                                                                      constructor() {
                                                                        obj = closure_0(closure_3[57]);
                                                                        obj1 = { source: entrypoint };
                                                                        trackWithMetadataResult = obj.trackWithMetadata(AnalyticEvents.APP_LAUNCHER_SEARCH_FOCUSED, obj1);
                                                                        return;
                                                                      }
                                                                    }
                                                                    cResult[62] = entrypoint;
                                                                    cResult[63] = Fe;
                                                                    class Ce {
                                                                      constructor(arg0) {
                                                                        item = navigation.item;
                                                                        index = navigation.index;
                                                                        type = item.type;
                                                                        tmp = navigation;
                                                                        tmp2 = closure_3;
                                                                        if (navigation(closure_3[48]).AppLauncherHomeListItemType.PLACEHOLDER === type) {
                                                                          tmp40 = closure_19;
                                                                          tmp41 = context;
                                                                          obj1 = { isFirstRow: null, isLastRow: null, style: null };
                                                                          num2 = 0;
                                                                          obj1.isFirstRow = 0 === index;
                                                                          tmp42 = list;
                                                                          num3 = 1;
                                                                          obj1.isLastRow = index === list.length - 1;
                                                                          obj15 = { height: null };
                                                                          tmp43 = closure_5;
                                                                          obj15.height = closure_5;
                                                                          obj1.style = obj15;
                                                                          return closure_19(context(tmp2[51]), obj1);
                                                                        } else if (tmp(tmp2[48]).AppLauncherHomeListItemType.SECTION_HEADER === type) {
                                                                          tmp38 = closure_19;
                                                                          tmp39 = closure_4;
                                                                          items = [, ];
                                                                          items[0] = closure_4.sectionHeader;
                                                                          num = 0;
                                                                          obj16 = null;
                                                                          if (0 !== index) {
                                                                            obj16 = { marginTop: 24 };
                                                                          }
                                                                          obj17 = { accessibilityRole: "header", variant: "text-lg/bold", color: "mobile-text-heading-primary", style: null, children: null };
                                                                          items[1] = obj16;
                                                                          obj17.style = items;
                                                                          obj17.children = item.section;
                                                                          return tmp38(tmp(tmp2[18]).Text, obj17);
                                                                        } else if (tmp(tmp2[48]).AppLauncherHomeListItemType.SHELF_ITEM === type) {
                                                                          tmp36 = closure_19;
                                                                          tmp37 = closure_30;
                                                                          obj18 = { section: null, onPress: null, isFirstRow: null, isLastRow: null };
                                                                          obj18.section = item.section;
                                                                          obj18.onPress = function onPress(shelfData) {
                                                                            closure_13({ shelfData, sectionName: item.sectionName });
                                                                          };
                                                                          ({ isFirstRow: obj10.isFirstRow, isLastRow: obj10.isLastRow } = item);
                                                                          return closure_19(closure_30, obj18, item.section.application.id);
                                                                        } else if (tmp(tmp2[48]).AppLauncherHomeListItemType.SHELF_ITEM_TUPLE === type) {
                                                                          obj19 = { context: null, sectionName: null, onPress: null, usesHandleActivityItemSelected: null, onActivityItemSelected: null, shelfItem1: null, shelfItem2: null, isLastTuple: null, entrypoint: null, containerWidth: null };
                                                                          tmp29 = context;
                                                                          obj19.context = context;
                                                                          tmp27 = closure_19;
                                                                          tmp28 = closure_31;
                                                                          obj19.sectionName = tmp(tmp2[44]).AppLauncherSectionName.ACTIVITIES;
                                                                          obj19.onPress = function onPress(shelfData) {
                                                                            const obj = { shelfData, sectionName: item.sectionName, navigates: null };
                                                                            let tmp2 = clickOnHomeActivityOpensAppDetails;
                                                                            if (!tmp2) {
                                                                              tmp2 = entrypoint !== AppLauncherTypes.AppLauncherEntrypoint.VOICE;
                                                                            }
                                                                            obj.navigates = tmp2;
                                                                            closure_13(obj);
                                                                          };
                                                                          tmp30 = closure_20;
                                                                          tmp31 = !closure_20;
                                                                          if (!closure_20) {
                                                                            tmp32 = entrypoint;
                                                                            tmp31 = entrypoint === tmp(tmp2[44]).AppLauncherEntrypoint.VOICE;
                                                                          }
                                                                          obj19.usesHandleActivityItemSelected = tmp31;
                                                                          tmp33 = onActivityItemSelected;
                                                                          obj19.onActivityItemSelected = onActivityItemSelected;
                                                                          ({ shelfItem1: obj9.shelfItem1, shelfItem2: obj9.shelfItem2, isLastTuple: obj9.isLastTuple } = item);
                                                                          tmp34 = entrypoint;
                                                                          obj19.entrypoint = entrypoint;
                                                                          tmp35 = width;
                                                                          obj19.containerWidth = width;
                                                                          return tmp27(tmp28, obj19, item.shelfItem1.application.id);
                                                                        } else if (tmp(tmp2[48]).AppLauncherHomeListItemType.RECOMMENDATION_TUPLE === type) {
                                                                          tmp22 = closure_19;
                                                                          tmp23 = closure_33;
                                                                          obj20 = { context: null, sectionName: null, onPress: null, items: null, isLastTuple: null, entrypoint: null, containerWidth: null };
                                                                          tmp24 = context;
                                                                          obj20.context = context;
                                                                          obj20.sectionName = item.sectionName;
                                                                          obj20.onPress = function onPress(application, sectionName) {
                                                                            return closure_1_19({ application, sectionName });
                                                                          };
                                                                          ({ items: obj8.items, isLastTuple: obj8.isLastTuple } = item);
                                                                          tmp25 = entrypoint;
                                                                          obj20.entrypoint = entrypoint;
                                                                          tmp26 = width;
                                                                          obj20.containerWidth = width;
                                                                          return closure_19(closure_33, obj20);
                                                                        } else if (tmp(tmp2[48]).AppLauncherHomeListItemType.APP === type) {
                                                                          tmp19 = closure_19;
                                                                          tmp20 = closure_29;
                                                                          obj21 = { section: null, onPress: null, isFirstRow: null, isLastRow: null, style: null };
                                                                          obj21.section = item.section;
                                                                          obj21.onPress = function onPress() {
                                                                            closure_12(item.section, AppLauncherTypes.AppLauncherSectionName.INSTALLED);
                                                                          };
                                                                          ({ isFirstRow: obj6.isFirstRow, isLastRow: obj6.isLastRow } = item);
                                                                          obj22 = { height: null };
                                                                          tmp21 = closure_5;
                                                                          obj22.height = closure_5;
                                                                          obj21.style = obj22;
                                                                          return closure_19(closure_29, obj21, item.section.id);
                                                                        } else if (tmp(tmp2[48]).AppLauncherHomeListItemType.RECOMMENDATION_SECTION_HEADER === type) {
                                                                          tmp17 = closure_19;
                                                                          tmp18 = closure_1_36;
                                                                          obj23 = { index: null, children: null };
                                                                          obj23.index = index;
                                                                          obj23.children = item.section;
                                                                          return closure_19(closure_1_36, obj23);
                                                                        } else if (tmp(tmp2[48]).AppLauncherHomeListItemType.RECOMMENDATION_BANNER_CARD === type) {
                                                                          tmp14 = closure_19;
                                                                          tmp15 = context;
                                                                          obj24 = { application: null, isFirst: null, isLast: null, onPress: null, isLandscape: null, showsPromoted: null, overrideImageUrl: null };
                                                                          obj24.application = item.item.application;
                                                                          ({ isFirst: obj4.isFirst, isLast: obj4.isLast } = item);
                                                                          obj24.onPress = function onPress() {
                                                                            return closure_19({ application: item.item.application, sectionName: item.sectionName });
                                                                          };
                                                                          tmp16 = closure_11;
                                                                          obj24.isLandscape = closure_11;
                                                                          ({ showsPromoted: obj4.showsPromoted, overrideImageUrl: obj4.overrideImageUrl } = item);
                                                                          return closure_19(context(tmp2[52]), obj24);
                                                                        } else if (tmp(tmp2[48]).AppLauncherHomeListItemType.RECOMMENDATION_APP === type) {
                                                                          tmp12 = closure_19;
                                                                          tmp13 = context;
                                                                          obj25 = { application: null, isFirstRow: null, isLastRow: null, onPress: null, showsPromoted: null };
                                                                          ({ application: obj3.application, isFirstRow: obj3.isFirstRow, isLastRow: obj3.isLastRow } = item);
                                                                          obj25.onPress = function onPress() {
                                                                            return closure_19({ application: item.application, sectionName: item.sectionName });
                                                                          };
                                                                          obj25.showsPromoted = item.showsPromoted;
                                                                          return closure_19(context(tmp2[53]), obj25, item.application.id);
                                                                        } else if (tmp(tmp2[48]).AppLauncherHomeListItemType.VIEW_ALL === type) {
                                                                          tmp10 = closure_19;
                                                                          tmp11 = context;
                                                                          obj26 = { title: null, onPress: null };
                                                                          obj26.title = item.title;
                                                                          obj26.onPress = function onPress() {
                                                                            const applications = item.applications;
                                                                            const mapped = applications.map((item) => item);
                                                                            const obj = AppLauncherNativeUtils;
                                                                            const result = obj.handleViewAllSelected({ location: ApplicationCommandTypes.ApplicationCommandTriggerLocations.APP_LAUNCHER_HOME, navigation, context, sectionName: item.sectionName, sectionOverallPosition: item.sectionOverallPosition, applications: mapped, sectionItemType: FrecencySection.SectionItemType.APPS, commands: [], sectionDescriptors: mapped.map((item) => item(closure_1_3[49]).getApplicationCommandSection(item)), title: item.title, promotedApplicationIds: item.promotedApplicationIds });
                                                                          };
                                                                          return closure_19(context(tmp2[54]), obj26);
                                                                        } else if (tmp(tmp2[48]).AppLauncherHomeListItemType.DIVIDER_ITEM === type) {
                                                                          tmp8 = closure_19;
                                                                          tmp9 = closure_1_35;
                                                                          return closure_19(closure_1_35, {});
                                                                        } else if (tmp(tmp2[48]).AppLauncherHomeListItemType.LEARN_MORE === type) {
                                                                          tmp4 = closure_19;
                                                                          tmp5 = context;
                                                                          obj = { visible: null };
                                                                          tmp7 = closure_3;
                                                                          tmp6 = context(tmp2[55]);
                                                                          obj.visible = closure_3.valueOf();
                                                                          return closure_19(tmp6, obj);
                                                                        } else {
                                                                          tmp3 = null;
                                                                          return null;
                                                                        }
                                                                      }
                                                                    }
                                                                  } else {
                                                                    class Fe {
                                                                      constructor() {
                                                                        obj = closure_0(closure_3[57]);
                                                                        obj1 = { source: entrypoint };
                                                                        trackWithMetadataResult = obj.trackWithMetadata(AnalyticEvents.APP_LAUNCHER_SEARCH_FOCUSED, obj1);
                                                                        return;
                                                                      }
                                                                    }
                                                                  }
                                                                  closure_27 = tmp43;
                                                                  if (tmp31) {
                                                                    class Fe {
                                                                      constructor() {
                                                                        obj = closure_0(closure_3[57]);
                                                                        obj1 = { source: entrypoint };
                                                                        trackWithMetadataResult = obj.trackWithMetadata(AnalyticEvents.APP_LAUNCHER_SEARCH_FOCUSED, obj1);
                                                                        return;
                                                                      }
                                                                    }
                                                                  }
                                                                  if (cResult[64] !== "home-scroller") {
                                                                    class Fe {
                                                                      constructor() {
                                                                        obj = closure_0(closure_3[57]);
                                                                        obj1 = { source: entrypoint };
                                                                        trackWithMetadataResult = obj.trackWithMetadata(AnalyticEvents.APP_LAUNCHER_SEARCH_FOCUSED, obj1);
                                                                        return;
                                                                      }
                                                                    }
                                                                    tmp45[0] = str2;
                                                                    cResult[64] = str2;
                                                                    class Ce {
                                                                      constructor(arg0) {
                                                                        item = navigation.item;
                                                                        index = navigation.index;
                                                                        type = item.type;
                                                                        tmp = navigation;
                                                                        tmp2 = closure_3;
                                                                        if (navigation(closure_3[48]).AppLauncherHomeListItemType.PLACEHOLDER === type) {
                                                                          tmp40 = closure_19;
                                                                          tmp41 = context;
                                                                          obj1 = { isFirstRow: null, isLastRow: null, style: null };
                                                                          num2 = 0;
                                                                          obj1.isFirstRow = 0 === index;
                                                                          tmp42 = list;
                                                                          num3 = 1;
                                                                          obj1.isLastRow = index === list.length - 1;
                                                                          obj15 = { height: null };
                                                                          tmp43 = closure_5;
                                                                          obj15.height = closure_5;
                                                                          obj1.style = obj15;
                                                                          return closure_19(context(tmp2[51]), obj1);
                                                                        } else if (tmp(tmp2[48]).AppLauncherHomeListItemType.SECTION_HEADER === type) {
                                                                          tmp38 = closure_19;
                                                                          tmp39 = closure_4;
                                                                          items = [, ];
                                                                          items[0] = closure_4.sectionHeader;
                                                                          num = 0;
                                                                          obj16 = null;
                                                                          if (0 !== index) {
                                                                            obj16 = { marginTop: 24 };
                                                                          }
                                                                          obj17 = { accessibilityRole: "header", variant: "text-lg/bold", color: "mobile-text-heading-primary", style: null, children: null };
                                                                          items[1] = obj16;
                                                                          obj17.style = items;
                                                                          obj17.children = item.section;
                                                                          return tmp38(tmp(tmp2[18]).Text, obj17);
                                                                        } else if (tmp(tmp2[48]).AppLauncherHomeListItemType.SHELF_ITEM === type) {
                                                                          tmp36 = closure_19;
                                                                          tmp37 = closure_30;
                                                                          obj18 = { section: null, onPress: null, isFirstRow: null, isLastRow: null };
                                                                          obj18.section = item.section;
                                                                          obj18.onPress = function onPress(shelfData) {
                                                                            closure_13({ shelfData, sectionName: item.sectionName });
                                                                          };
                                                                          ({ isFirstRow: obj10.isFirstRow, isLastRow: obj10.isLastRow } = item);
                                                                          return closure_19(closure_30, obj18, item.section.application.id);
                                                                        } else if (tmp(tmp2[48]).AppLauncherHomeListItemType.SHELF_ITEM_TUPLE === type) {
                                                                          obj19 = { context: null, sectionName: null, onPress: null, usesHandleActivityItemSelected: null, onActivityItemSelected: null, shelfItem1: null, shelfItem2: null, isLastTuple: null, entrypoint: null, containerWidth: null };
                                                                          tmp29 = context;
                                                                          obj19.context = context;
                                                                          tmp27 = closure_19;
                                                                          tmp28 = closure_31;
                                                                          obj19.sectionName = tmp(tmp2[44]).AppLauncherSectionName.ACTIVITIES;
                                                                          obj19.onPress = function onPress(shelfData) {
                                                                            const obj = { shelfData, sectionName: item.sectionName, navigates: null };
                                                                            let tmp2 = clickOnHomeActivityOpensAppDetails;
                                                                            if (!tmp2) {
                                                                              tmp2 = entrypoint !== AppLauncherTypes.AppLauncherEntrypoint.VOICE;
                                                                            }
                                                                            obj.navigates = tmp2;
                                                                            closure_13(obj);
                                                                          };
                                                                          tmp30 = closure_20;
                                                                          tmp31 = !closure_20;
                                                                          if (!closure_20) {
                                                                            tmp32 = entrypoint;
                                                                            tmp31 = entrypoint === tmp(tmp2[44]).AppLauncherEntrypoint.VOICE;
                                                                          }
                                                                          obj19.usesHandleActivityItemSelected = tmp31;
                                                                          tmp33 = onActivityItemSelected;
                                                                          obj19.onActivityItemSelected = onActivityItemSelected;
                                                                          ({ shelfItem1: obj9.shelfItem1, shelfItem2: obj9.shelfItem2, isLastTuple: obj9.isLastTuple } = item);
                                                                          tmp34 = entrypoint;
                                                                          obj19.entrypoint = entrypoint;
                                                                          tmp35 = width;
                                                                          obj19.containerWidth = width;
                                                                          return tmp27(tmp28, obj19, item.shelfItem1.application.id);
                                                                        } else if (tmp(tmp2[48]).AppLauncherHomeListItemType.RECOMMENDATION_TUPLE === type) {
                                                                          tmp22 = closure_19;
                                                                          tmp23 = closure_33;
                                                                          obj20 = { context: null, sectionName: null, onPress: null, items: null, isLastTuple: null, entrypoint: null, containerWidth: null };
                                                                          tmp24 = context;
                                                                          obj20.context = context;
                                                                          obj20.sectionName = item.sectionName;
                                                                          obj20.onPress = function onPress(application, sectionName) {
                                                                            return closure_1_19({ application, sectionName });
                                                                          };
                                                                          ({ items: obj8.items, isLastTuple: obj8.isLastTuple } = item);
                                                                          tmp25 = entrypoint;
                                                                          obj20.entrypoint = entrypoint;
                                                                          tmp26 = width;
                                                                          obj20.containerWidth = width;
                                                                          return closure_19(closure_33, obj20);
                                                                        } else if (tmp(tmp2[48]).AppLauncherHomeListItemType.APP === type) {
                                                                          tmp19 = closure_19;
                                                                          tmp20 = closure_29;
                                                                          obj21 = { section: null, onPress: null, isFirstRow: null, isLastRow: null, style: null };
                                                                          obj21.section = item.section;
                                                                          obj21.onPress = function onPress() {
                                                                            closure_12(item.section, AppLauncherTypes.AppLauncherSectionName.INSTALLED);
                                                                          };
                                                                          ({ isFirstRow: obj6.isFirstRow, isLastRow: obj6.isLastRow } = item);
                                                                          obj22 = { height: null };
                                                                          tmp21 = closure_5;
                                                                          obj22.height = closure_5;
                                                                          obj21.style = obj22;
                                                                          return closure_19(closure_29, obj21, item.section.id);
                                                                        } else if (tmp(tmp2[48]).AppLauncherHomeListItemType.RECOMMENDATION_SECTION_HEADER === type) {
                                                                          tmp17 = closure_19;
                                                                          tmp18 = closure_1_36;
                                                                          obj23 = { index: null, children: null };
                                                                          obj23.index = index;
                                                                          obj23.children = item.section;
                                                                          return closure_19(closure_1_36, obj23);
                                                                        } else if (tmp(tmp2[48]).AppLauncherHomeListItemType.RECOMMENDATION_BANNER_CARD === type) {
                                                                          tmp14 = closure_19;
                                                                          tmp15 = context;
                                                                          obj24 = { application: null, isFirst: null, isLast: null, onPress: null, isLandscape: null, showsPromoted: null, overrideImageUrl: null };
                                                                          obj24.application = item.item.application;
                                                                          ({ isFirst: obj4.isFirst, isLast: obj4.isLast } = item);
                                                                          obj24.onPress = function onPress() {
                                                                            return closure_19({ application: item.item.application, sectionName: item.sectionName });
                                                                          };
                                                                          tmp16 = closure_11;
                                                                          obj24.isLandscape = closure_11;
                                                                          ({ showsPromoted: obj4.showsPromoted, overrideImageUrl: obj4.overrideImageUrl } = item);
                                                                          return closure_19(context(tmp2[52]), obj24);
                                                                        } else if (tmp(tmp2[48]).AppLauncherHomeListItemType.RECOMMENDATION_APP === type) {
                                                                          tmp12 = closure_19;
                                                                          tmp13 = context;
                                                                          obj25 = { application: null, isFirstRow: null, isLastRow: null, onPress: null, showsPromoted: null };
                                                                          ({ application: obj3.application, isFirstRow: obj3.isFirstRow, isLastRow: obj3.isLastRow } = item);
                                                                          obj25.onPress = function onPress() {
                                                                            return closure_19({ application: item.application, sectionName: item.sectionName });
                                                                          };
                                                                          obj25.showsPromoted = item.showsPromoted;
                                                                          return closure_19(context(tmp2[53]), obj25, item.application.id);
                                                                        } else if (tmp(tmp2[48]).AppLauncherHomeListItemType.VIEW_ALL === type) {
                                                                          tmp10 = closure_19;
                                                                          tmp11 = context;
                                                                          obj26 = { title: null, onPress: null };
                                                                          obj26.title = item.title;
                                                                          obj26.onPress = function onPress() {
                                                                            const applications = item.applications;
                                                                            const mapped = applications.map((item) => item);
                                                                            const obj = AppLauncherNativeUtils;
                                                                            const result = obj.handleViewAllSelected({ location: ApplicationCommandTypes.ApplicationCommandTriggerLocations.APP_LAUNCHER_HOME, navigation, context, sectionName: item.sectionName, sectionOverallPosition: item.sectionOverallPosition, applications: mapped, sectionItemType: FrecencySection.SectionItemType.APPS, commands: [], sectionDescriptors: mapped.map((item) => item(closure_1_3[49]).getApplicationCommandSection(item)), title: item.title, promotedApplicationIds: item.promotedApplicationIds });
                                                                          };
                                                                          return closure_19(context(tmp2[54]), obj26);
                                                                        } else if (tmp(tmp2[48]).AppLauncherHomeListItemType.DIVIDER_ITEM === type) {
                                                                          tmp8 = closure_19;
                                                                          tmp9 = closure_1_35;
                                                                          return closure_19(closure_1_35, {});
                                                                        } else if (tmp(tmp2[48]).AppLauncherHomeListItemType.LEARN_MORE === type) {
                                                                          tmp4 = closure_19;
                                                                          tmp5 = context;
                                                                          obj = { visible: null };
                                                                          tmp7 = closure_3;
                                                                          tmp6 = context(tmp2[55]);
                                                                          obj.visible = closure_3.valueOf();
                                                                          return closure_19(tmp6, obj);
                                                                        } else {
                                                                          tmp3 = null;
                                                                          return null;
                                                                        }
                                                                      }
                                                                    }
                                                                  } else {
                                                                    class Fe {
                                                                      constructor() {
                                                                        obj = closure_0(closure_3[57]);
                                                                        obj1 = { source: entrypoint };
                                                                        trackWithMetadataResult = obj.trackWithMetadata(AnalyticEvents.APP_LAUNCHER_SEARCH_FOCUSED, obj1);
                                                                        return;
                                                                      }
                                                                    }
                                                                  }
                                                                  ref2 = obj4.useRef(tmp38);
                                                                  const pinnedSearchBarBottomBorder = tmp(11721).usePinnedSearchBarBottomBorder(tmp45);
                                                                  const tmpResult6 = tmp(11721);
                                                                  if (cResult[66] !== initialSearchQuery) {
                                                                    class Fe {
                                                                      constructor() {
                                                                        obj = closure_0(closure_3[57]);
                                                                        obj1 = { source: entrypoint };
                                                                        trackWithMetadataResult = obj.trackWithMetadata(AnalyticEvents.APP_LAUNCHER_SEARCH_FOCUSED, obj1);
                                                                        return;
                                                                      }
                                                                    }
                                                                    const items3 = [initialSearchQuery];
                                                                    cResult[66] = initialSearchQuery;
                                                                    class Ce {
                                                                      constructor(arg0) {
                                                                        item = navigation.item;
                                                                        index = navigation.index;
                                                                        type = item.type;
                                                                        tmp = navigation;
                                                                        tmp2 = closure_3;
                                                                        if (navigation(closure_3[48]).AppLauncherHomeListItemType.PLACEHOLDER === type) {
                                                                          tmp40 = closure_19;
                                                                          tmp41 = context;
                                                                          obj1 = { isFirstRow: null, isLastRow: null, style: null };
                                                                          num2 = 0;
                                                                          obj1.isFirstRow = 0 === index;
                                                                          tmp42 = list;
                                                                          num3 = 1;
                                                                          obj1.isLastRow = index === list.length - 1;
                                                                          obj15 = { height: null };
                                                                          tmp43 = closure_5;
                                                                          obj15.height = closure_5;
                                                                          obj1.style = obj15;
                                                                          return closure_19(context(tmp2[51]), obj1);
                                                                        } else if (tmp(tmp2[48]).AppLauncherHomeListItemType.SECTION_HEADER === type) {
                                                                          tmp38 = closure_19;
                                                                          tmp39 = closure_4;
                                                                          items = [, ];
                                                                          items[0] = closure_4.sectionHeader;
                                                                          num = 0;
                                                                          obj16 = null;
                                                                          if (0 !== index) {
                                                                            obj16 = { marginTop: 24 };
                                                                          }
                                                                          obj17 = { accessibilityRole: "header", variant: "text-lg/bold", color: "mobile-text-heading-primary", style: null, children: null };
                                                                          items[1] = obj16;
                                                                          obj17.style = items;
                                                                          obj17.children = item.section;
                                                                          return tmp38(tmp(tmp2[18]).Text, obj17);
                                                                        } else if (tmp(tmp2[48]).AppLauncherHomeListItemType.SHELF_ITEM === type) {
                                                                          tmp36 = closure_19;
                                                                          tmp37 = closure_30;
                                                                          obj18 = { section: null, onPress: null, isFirstRow: null, isLastRow: null };
                                                                          obj18.section = item.section;
                                                                          obj18.onPress = function onPress(shelfData) {
                                                                            closure_13({ shelfData, sectionName: item.sectionName });
                                                                          };
                                                                          ({ isFirstRow: obj10.isFirstRow, isLastRow: obj10.isLastRow } = item);
                                                                          return closure_19(closure_30, obj18, item.section.application.id);
                                                                        } else if (tmp(tmp2[48]).AppLauncherHomeListItemType.SHELF_ITEM_TUPLE === type) {
                                                                          obj19 = { context: null, sectionName: null, onPress: null, usesHandleActivityItemSelected: null, onActivityItemSelected: null, shelfItem1: null, shelfItem2: null, isLastTuple: null, entrypoint: null, containerWidth: null };
                                                                          tmp29 = context;
                                                                          obj19.context = context;
                                                                          tmp27 = closure_19;
                                                                          tmp28 = closure_31;
                                                                          obj19.sectionName = tmp(tmp2[44]).AppLauncherSectionName.ACTIVITIES;
                                                                          obj19.onPress = function onPress(shelfData) {
                                                                            const obj = { shelfData, sectionName: item.sectionName, navigates: null };
                                                                            let tmp2 = clickOnHomeActivityOpensAppDetails;
                                                                            if (!tmp2) {
                                                                              tmp2 = entrypoint !== AppLauncherTypes.AppLauncherEntrypoint.VOICE;
                                                                            }
                                                                            obj.navigates = tmp2;
                                                                            closure_13(obj);
                                                                          };
                                                                          tmp30 = closure_20;
                                                                          tmp31 = !closure_20;
                                                                          if (!closure_20) {
                                                                            tmp32 = entrypoint;
                                                                            tmp31 = entrypoint === tmp(tmp2[44]).AppLauncherEntrypoint.VOICE;
                                                                          }
                                                                          obj19.usesHandleActivityItemSelected = tmp31;
                                                                          tmp33 = onActivityItemSelected;
                                                                          obj19.onActivityItemSelected = onActivityItemSelected;
                                                                          ({ shelfItem1: obj9.shelfItem1, shelfItem2: obj9.shelfItem2, isLastTuple: obj9.isLastTuple } = item);
                                                                          tmp34 = entrypoint;
                                                                          obj19.entrypoint = entrypoint;
                                                                          tmp35 = width;
                                                                          obj19.containerWidth = width;
                                                                          return tmp27(tmp28, obj19, item.shelfItem1.application.id);
                                                                        } else if (tmp(tmp2[48]).AppLauncherHomeListItemType.RECOMMENDATION_TUPLE === type) {
                                                                          tmp22 = closure_19;
                                                                          tmp23 = closure_33;
                                                                          obj20 = { context: null, sectionName: null, onPress: null, items: null, isLastTuple: null, entrypoint: null, containerWidth: null };
                                                                          tmp24 = context;
                                                                          obj20.context = context;
                                                                          obj20.sectionName = item.sectionName;
                                                                          obj20.onPress = function onPress(application, sectionName) {
                                                                            return closure_1_19({ application, sectionName });
                                                                          };
                                                                          ({ items: obj8.items, isLastTuple: obj8.isLastTuple } = item);
                                                                          tmp25 = entrypoint;
                                                                          obj20.entrypoint = entrypoint;
                                                                          tmp26 = width;
                                                                          obj20.containerWidth = width;
                                                                          return closure_19(closure_33, obj20);
                                                                        } else if (tmp(tmp2[48]).AppLauncherHomeListItemType.APP === type) {
                                                                          tmp19 = closure_19;
                                                                          tmp20 = closure_29;
                                                                          obj21 = { section: null, onPress: null, isFirstRow: null, isLastRow: null, style: null };
                                                                          obj21.section = item.section;
                                                                          obj21.onPress = function onPress() {
                                                                            closure_12(item.section, AppLauncherTypes.AppLauncherSectionName.INSTALLED);
                                                                          };
                                                                          ({ isFirstRow: obj6.isFirstRow, isLastRow: obj6.isLastRow } = item);
                                                                          obj22 = { height: null };
                                                                          tmp21 = closure_5;
                                                                          obj22.height = closure_5;
                                                                          obj21.style = obj22;
                                                                          return closure_19(closure_29, obj21, item.section.id);
                                                                        } else if (tmp(tmp2[48]).AppLauncherHomeListItemType.RECOMMENDATION_SECTION_HEADER === type) {
                                                                          tmp17 = closure_19;
                                                                          tmp18 = closure_1_36;
                                                                          obj23 = { index: null, children: null };
                                                                          obj23.index = index;
                                                                          obj23.children = item.section;
                                                                          return closure_19(closure_1_36, obj23);
                                                                        } else if (tmp(tmp2[48]).AppLauncherHomeListItemType.RECOMMENDATION_BANNER_CARD === type) {
                                                                          tmp14 = closure_19;
                                                                          tmp15 = context;
                                                                          obj24 = { application: null, isFirst: null, isLast: null, onPress: null, isLandscape: null, showsPromoted: null, overrideImageUrl: null };
                                                                          obj24.application = item.item.application;
                                                                          ({ isFirst: obj4.isFirst, isLast: obj4.isLast } = item);
                                                                          obj24.onPress = function onPress() {
                                                                            return closure_19({ application: item.item.application, sectionName: item.sectionName });
                                                                          };
                                                                          tmp16 = closure_11;
                                                                          obj24.isLandscape = closure_11;
                                                                          ({ showsPromoted: obj4.showsPromoted, overrideImageUrl: obj4.overrideImageUrl } = item);
                                                                          return closure_19(context(tmp2[52]), obj24);
                                                                        } else if (tmp(tmp2[48]).AppLauncherHomeListItemType.RECOMMENDATION_APP === type) {
                                                                          tmp12 = closure_19;
                                                                          tmp13 = context;
                                                                          obj25 = { application: null, isFirstRow: null, isLastRow: null, onPress: null, showsPromoted: null };
                                                                          ({ application: obj3.application, isFirstRow: obj3.isFirstRow, isLastRow: obj3.isLastRow } = item);
                                                                          obj25.onPress = function onPress() {
                                                                            return closure_19({ application: item.application, sectionName: item.sectionName });
                                                                          };
                                                                          obj25.showsPromoted = item.showsPromoted;
                                                                          return closure_19(context(tmp2[53]), obj25, item.application.id);
                                                                        } else if (tmp(tmp2[48]).AppLauncherHomeListItemType.VIEW_ALL === type) {
                                                                          tmp10 = closure_19;
                                                                          tmp11 = context;
                                                                          obj26 = { title: null, onPress: null };
                                                                          obj26.title = item.title;
                                                                          obj26.onPress = function onPress() {
                                                                            const applications = item.applications;
                                                                            const mapped = applications.map((item) => item);
                                                                            const obj = AppLauncherNativeUtils;
                                                                            const result = obj.handleViewAllSelected({ location: ApplicationCommandTypes.ApplicationCommandTriggerLocations.APP_LAUNCHER_HOME, navigation, context, sectionName: item.sectionName, sectionOverallPosition: item.sectionOverallPosition, applications: mapped, sectionItemType: FrecencySection.SectionItemType.APPS, commands: [], sectionDescriptors: mapped.map((item) => item(closure_1_3[49]).getApplicationCommandSection(item)), title: item.title, promotedApplicationIds: item.promotedApplicationIds });
                                                                          };
                                                                          return closure_19(context(tmp2[54]), obj26);
                                                                        } else if (tmp(tmp2[48]).AppLauncherHomeListItemType.DIVIDER_ITEM === type) {
                                                                          tmp8 = closure_19;
                                                                          tmp9 = closure_1_35;
                                                                          return closure_19(closure_1_35, {});
                                                                        } else if (tmp(tmp2[48]).AppLauncherHomeListItemType.LEARN_MORE === type) {
                                                                          tmp4 = closure_19;
                                                                          tmp5 = context;
                                                                          obj = { visible: null };
                                                                          tmp7 = closure_3;
                                                                          tmp6 = context(tmp2[55]);
                                                                          obj.visible = closure_3.valueOf();
                                                                          return closure_19(tmp6, obj);
                                                                        } else {
                                                                          tmp3 = null;
                                                                          return null;
                                                                        }
                                                                      }
                                                                    }
                                                                    cResult[67] = tmp50;
                                                                    cResult[68] = items3;
                                                                    let tmp49 = items3;
                                                                  } else {
                                                                    class Fe {
                                                                      constructor() {
                                                                        obj = closure_0(closure_3[57]);
                                                                        obj1 = { source: entrypoint };
                                                                        trackWithMetadataResult = obj.trackWithMetadata(AnalyticEvents.APP_LAUNCHER_SEARCH_FOCUSED, obj1);
                                                                        return;
                                                                      }
                                                                    }
                                                                    tmp49 = cResult[68];
                                                                  }
                                                                  const layoutEffect = obj4.useLayoutEffect(tmp50, tmp49);
                                                                  const sum = context(1618)().bottom + list;
                                                                  const ref1 = obj4.useRef(null);
                                                                  const bottomSheetFlashListBottomViewabilityInset = tmp(11722).useBottomSheetFlashListBottomViewabilityInset();
                                                                  ({ flashListRef, bottomVisibilityInsetRef } = bottomSheetFlashListBottomViewabilityInset);
                                                                  const _Symbol2 = Symbol;
                                                                  if (cResult[69] === Symbol.for("react.memo_cache_sentinel")) {
                                                                    class Fe {
                                                                      constructor() {
                                                                        obj = closure_0(closure_3[57]);
                                                                        obj1 = { source: entrypoint };
                                                                        trackWithMetadataResult = obj.trackWithMetadata(AnalyticEvents.APP_LAUNCHER_SEARCH_FOCUSED, obj1);
                                                                        return;
                                                                      }
                                                                    }
                                                                    tmp56[0] = tmp(1260).ImpressionTypes.VIEW;
                                                                    tmp56[1] = tmp(1260).ImpressionNames.APP_LAUNCHER_HOME_ACTIVITY_ITEM;
                                                                    cResult[69] = tmp56;
                                                                    class Ce {
                                                                      constructor(arg0) {
                                                                        item = navigation.item;
                                                                        index = navigation.index;
                                                                        type = item.type;
                                                                        tmp = navigation;
                                                                        tmp2 = closure_3;
                                                                        if (navigation(closure_3[48]).AppLauncherHomeListItemType.PLACEHOLDER === type) {
                                                                          tmp40 = closure_19;
                                                                          tmp41 = context;
                                                                          obj1 = { isFirstRow: null, isLastRow: null, style: null };
                                                                          num2 = 0;
                                                                          obj1.isFirstRow = 0 === index;
                                                                          tmp42 = list;
                                                                          num3 = 1;
                                                                          obj1.isLastRow = index === list.length - 1;
                                                                          obj15 = { height: null };
                                                                          tmp43 = closure_5;
                                                                          obj15.height = closure_5;
                                                                          obj1.style = obj15;
                                                                          return closure_19(context(tmp2[51]), obj1);
                                                                        } else if (tmp(tmp2[48]).AppLauncherHomeListItemType.SECTION_HEADER === type) {
                                                                          tmp38 = closure_19;
                                                                          tmp39 = closure_4;
                                                                          items = [, ];
                                                                          items[0] = closure_4.sectionHeader;
                                                                          num = 0;
                                                                          obj16 = null;
                                                                          if (0 !== index) {
                                                                            obj16 = { marginTop: 24 };
                                                                          }
                                                                          obj17 = { accessibilityRole: "header", variant: "text-lg/bold", color: "mobile-text-heading-primary", style: null, children: null };
                                                                          items[1] = obj16;
                                                                          obj17.style = items;
                                                                          obj17.children = item.section;
                                                                          return tmp38(tmp(tmp2[18]).Text, obj17);
                                                                        } else if (tmp(tmp2[48]).AppLauncherHomeListItemType.SHELF_ITEM === type) {
                                                                          tmp36 = closure_19;
                                                                          tmp37 = closure_30;
                                                                          obj18 = { section: null, onPress: null, isFirstRow: null, isLastRow: null };
                                                                          obj18.section = item.section;
                                                                          obj18.onPress = function onPress(shelfData) {
                                                                            closure_13({ shelfData, sectionName: item.sectionName });
                                                                          };
                                                                          ({ isFirstRow: obj10.isFirstRow, isLastRow: obj10.isLastRow } = item);
                                                                          return closure_19(closure_30, obj18, item.section.application.id);
                                                                        } else if (tmp(tmp2[48]).AppLauncherHomeListItemType.SHELF_ITEM_TUPLE === type) {
                                                                          obj19 = { context: null, sectionName: null, onPress: null, usesHandleActivityItemSelected: null, onActivityItemSelected: null, shelfItem1: null, shelfItem2: null, isLastTuple: null, entrypoint: null, containerWidth: null };
                                                                          tmp29 = context;
                                                                          obj19.context = context;
                                                                          tmp27 = closure_19;
                                                                          tmp28 = closure_31;
                                                                          obj19.sectionName = tmp(tmp2[44]).AppLauncherSectionName.ACTIVITIES;
                                                                          obj19.onPress = function onPress(shelfData) {
                                                                            const obj = { shelfData, sectionName: item.sectionName, navigates: null };
                                                                            let tmp2 = clickOnHomeActivityOpensAppDetails;
                                                                            if (!tmp2) {
                                                                              tmp2 = entrypoint !== AppLauncherTypes.AppLauncherEntrypoint.VOICE;
                                                                            }
                                                                            obj.navigates = tmp2;
                                                                            closure_13(obj);
                                                                          };
                                                                          tmp30 = closure_20;
                                                                          tmp31 = !closure_20;
                                                                          if (!closure_20) {
                                                                            tmp32 = entrypoint;
                                                                            tmp31 = entrypoint === tmp(tmp2[44]).AppLauncherEntrypoint.VOICE;
                                                                          }
                                                                          obj19.usesHandleActivityItemSelected = tmp31;
                                                                          tmp33 = onActivityItemSelected;
                                                                          obj19.onActivityItemSelected = onActivityItemSelected;
                                                                          ({ shelfItem1: obj9.shelfItem1, shelfItem2: obj9.shelfItem2, isLastTuple: obj9.isLastTuple } = item);
                                                                          tmp34 = entrypoint;
                                                                          obj19.entrypoint = entrypoint;
                                                                          tmp35 = width;
                                                                          obj19.containerWidth = width;
                                                                          return tmp27(tmp28, obj19, item.shelfItem1.application.id);
                                                                        } else if (tmp(tmp2[48]).AppLauncherHomeListItemType.RECOMMENDATION_TUPLE === type) {
                                                                          tmp22 = closure_19;
                                                                          tmp23 = closure_33;
                                                                          obj20 = { context: null, sectionName: null, onPress: null, items: null, isLastTuple: null, entrypoint: null, containerWidth: null };
                                                                          tmp24 = context;
                                                                          obj20.context = context;
                                                                          obj20.sectionName = item.sectionName;
                                                                          obj20.onPress = function onPress(application, sectionName) {
                                                                            return closure_1_19({ application, sectionName });
                                                                          };
                                                                          ({ items: obj8.items, isLastTuple: obj8.isLastTuple } = item);
                                                                          tmp25 = entrypoint;
                                                                          obj20.entrypoint = entrypoint;
                                                                          tmp26 = width;
                                                                          obj20.containerWidth = width;
                                                                          return closure_19(closure_33, obj20);
                                                                        } else if (tmp(tmp2[48]).AppLauncherHomeListItemType.APP === type) {
                                                                          tmp19 = closure_19;
                                                                          tmp20 = closure_29;
                                                                          obj21 = { section: null, onPress: null, isFirstRow: null, isLastRow: null, style: null };
                                                                          obj21.section = item.section;
                                                                          obj21.onPress = function onPress() {
                                                                            closure_12(item.section, AppLauncherTypes.AppLauncherSectionName.INSTALLED);
                                                                          };
                                                                          ({ isFirstRow: obj6.isFirstRow, isLastRow: obj6.isLastRow } = item);
                                                                          obj22 = { height: null };
                                                                          tmp21 = closure_5;
                                                                          obj22.height = closure_5;
                                                                          obj21.style = obj22;
                                                                          return closure_19(closure_29, obj21, item.section.id);
                                                                        } else if (tmp(tmp2[48]).AppLauncherHomeListItemType.RECOMMENDATION_SECTION_HEADER === type) {
                                                                          tmp17 = closure_19;
                                                                          tmp18 = closure_1_36;
                                                                          obj23 = { index: null, children: null };
                                                                          obj23.index = index;
                                                                          obj23.children = item.section;
                                                                          return closure_19(closure_1_36, obj23);
                                                                        } else if (tmp(tmp2[48]).AppLauncherHomeListItemType.RECOMMENDATION_BANNER_CARD === type) {
                                                                          tmp14 = closure_19;
                                                                          tmp15 = context;
                                                                          obj24 = { application: null, isFirst: null, isLast: null, onPress: null, isLandscape: null, showsPromoted: null, overrideImageUrl: null };
                                                                          obj24.application = item.item.application;
                                                                          ({ isFirst: obj4.isFirst, isLast: obj4.isLast } = item);
                                                                          obj24.onPress = function onPress() {
                                                                            return closure_19({ application: item.item.application, sectionName: item.sectionName });
                                                                          };
                                                                          tmp16 = closure_11;
                                                                          obj24.isLandscape = closure_11;
                                                                          ({ showsPromoted: obj4.showsPromoted, overrideImageUrl: obj4.overrideImageUrl } = item);
                                                                          return closure_19(context(tmp2[52]), obj24);
                                                                        } else if (tmp(tmp2[48]).AppLauncherHomeListItemType.RECOMMENDATION_APP === type) {
                                                                          tmp12 = closure_19;
                                                                          tmp13 = context;
                                                                          obj25 = { application: null, isFirstRow: null, isLastRow: null, onPress: null, showsPromoted: null };
                                                                          ({ application: obj3.application, isFirstRow: obj3.isFirstRow, isLastRow: obj3.isLastRow } = item);
                                                                          obj25.onPress = function onPress() {
                                                                            return closure_19({ application: item.application, sectionName: item.sectionName });
                                                                          };
                                                                          obj25.showsPromoted = item.showsPromoted;
                                                                          return closure_19(context(tmp2[53]), obj25, item.application.id);
                                                                        } else if (tmp(tmp2[48]).AppLauncherHomeListItemType.VIEW_ALL === type) {
                                                                          tmp10 = closure_19;
                                                                          tmp11 = context;
                                                                          obj26 = { title: null, onPress: null };
                                                                          obj26.title = item.title;
                                                                          obj26.onPress = function onPress() {
                                                                            const applications = item.applications;
                                                                            const mapped = applications.map((item) => item);
                                                                            const obj = AppLauncherNativeUtils;
                                                                            const result = obj.handleViewAllSelected({ location: ApplicationCommandTypes.ApplicationCommandTriggerLocations.APP_LAUNCHER_HOME, navigation, context, sectionName: item.sectionName, sectionOverallPosition: item.sectionOverallPosition, applications: mapped, sectionItemType: FrecencySection.SectionItemType.APPS, commands: [], sectionDescriptors: mapped.map((item) => item(closure_1_3[49]).getApplicationCommandSection(item)), title: item.title, promotedApplicationIds: item.promotedApplicationIds });
                                                                          };
                                                                          return closure_19(context(tmp2[54]), obj26);
                                                                        } else if (tmp(tmp2[48]).AppLauncherHomeListItemType.DIVIDER_ITEM === type) {
                                                                          tmp8 = closure_19;
                                                                          tmp9 = closure_1_35;
                                                                          return closure_19(closure_1_35, {});
                                                                        } else if (tmp(tmp2[48]).AppLauncherHomeListItemType.LEARN_MORE === type) {
                                                                          tmp4 = closure_19;
                                                                          tmp5 = context;
                                                                          obj = { visible: null };
                                                                          tmp7 = closure_3;
                                                                          tmp6 = context(tmp2[55]);
                                                                          obj.visible = closure_3.valueOf();
                                                                          return closure_19(tmp6, obj);
                                                                        } else {
                                                                          tmp3 = null;
                                                                          return null;
                                                                        }
                                                                      }
                                                                    }
                                                                  } else {
                                                                    class Fe {
                                                                      constructor() {
                                                                        obj = closure_0(closure_3[57]);
                                                                        obj1 = { source: entrypoint };
                                                                        trackWithMetadataResult = obj.trackWithMetadata(AnalyticEvents.APP_LAUNCHER_SEARCH_FOCUSED, obj1);
                                                                        return;
                                                                      }
                                                                    }
                                                                  }
                                                                  if (cResult[70] !== !tmp6) {
                                                                    class Fe {
                                                                      constructor() {
                                                                        obj = closure_0(closure_3[57]);
                                                                        obj1 = { source: entrypoint };
                                                                        trackWithMetadataResult = obj.trackWithMetadata(AnalyticEvents.APP_LAUNCHER_SEARCH_FOCUSED, obj1);
                                                                        return;
                                                                      }
                                                                    }
                                                                    tmp59[0] = tmp57;
                                                                    cResult[70] = tmp57;
                                                                    class Ce {
                                                                      constructor(arg0) {
                                                                        item = navigation.item;
                                                                        index = navigation.index;
                                                                        type = item.type;
                                                                        tmp = navigation;
                                                                        tmp2 = closure_3;
                                                                        if (navigation(closure_3[48]).AppLauncherHomeListItemType.PLACEHOLDER === type) {
                                                                          tmp40 = closure_19;
                                                                          tmp41 = context;
                                                                          obj1 = { isFirstRow: null, isLastRow: null, style: null };
                                                                          num2 = 0;
                                                                          obj1.isFirstRow = 0 === index;
                                                                          tmp42 = list;
                                                                          num3 = 1;
                                                                          obj1.isLastRow = index === list.length - 1;
                                                                          obj15 = { height: null };
                                                                          tmp43 = closure_5;
                                                                          obj15.height = closure_5;
                                                                          obj1.style = obj15;
                                                                          return closure_19(context(tmp2[51]), obj1);
                                                                        } else if (tmp(tmp2[48]).AppLauncherHomeListItemType.SECTION_HEADER === type) {
                                                                          tmp38 = closure_19;
                                                                          tmp39 = closure_4;
                                                                          items = [, ];
                                                                          items[0] = closure_4.sectionHeader;
                                                                          num = 0;
                                                                          obj16 = null;
                                                                          if (0 !== index) {
                                                                            obj16 = { marginTop: 24 };
                                                                          }
                                                                          obj17 = { accessibilityRole: "header", variant: "text-lg/bold", color: "mobile-text-heading-primary", style: null, children: null };
                                                                          items[1] = obj16;
                                                                          obj17.style = items;
                                                                          obj17.children = item.section;
                                                                          return tmp38(tmp(tmp2[18]).Text, obj17);
                                                                        } else if (tmp(tmp2[48]).AppLauncherHomeListItemType.SHELF_ITEM === type) {
                                                                          tmp36 = closure_19;
                                                                          tmp37 = closure_30;
                                                                          obj18 = { section: null, onPress: null, isFirstRow: null, isLastRow: null };
                                                                          obj18.section = item.section;
                                                                          obj18.onPress = function onPress(shelfData) {
                                                                            closure_13({ shelfData, sectionName: item.sectionName });
                                                                          };
                                                                          ({ isFirstRow: obj10.isFirstRow, isLastRow: obj10.isLastRow } = item);
                                                                          return closure_19(closure_30, obj18, item.section.application.id);
                                                                        } else if (tmp(tmp2[48]).AppLauncherHomeListItemType.SHELF_ITEM_TUPLE === type) {
                                                                          obj19 = { context: null, sectionName: null, onPress: null, usesHandleActivityItemSelected: null, onActivityItemSelected: null, shelfItem1: null, shelfItem2: null, isLastTuple: null, entrypoint: null, containerWidth: null };
                                                                          tmp29 = context;
                                                                          obj19.context = context;
                                                                          tmp27 = closure_19;
                                                                          tmp28 = closure_31;
                                                                          obj19.sectionName = tmp(tmp2[44]).AppLauncherSectionName.ACTIVITIES;
                                                                          obj19.onPress = function onPress(shelfData) {
                                                                            const obj = { shelfData, sectionName: item.sectionName, navigates: null };
                                                                            let tmp2 = clickOnHomeActivityOpensAppDetails;
                                                                            if (!tmp2) {
                                                                              tmp2 = entrypoint !== AppLauncherTypes.AppLauncherEntrypoint.VOICE;
                                                                            }
                                                                            obj.navigates = tmp2;
                                                                            closure_13(obj);
                                                                          };
                                                                          tmp30 = closure_20;
                                                                          tmp31 = !closure_20;
                                                                          if (!closure_20) {
                                                                            tmp32 = entrypoint;
                                                                            tmp31 = entrypoint === tmp(tmp2[44]).AppLauncherEntrypoint.VOICE;
                                                                          }
                                                                          obj19.usesHandleActivityItemSelected = tmp31;
                                                                          tmp33 = onActivityItemSelected;
                                                                          obj19.onActivityItemSelected = onActivityItemSelected;
                                                                          ({ shelfItem1: obj9.shelfItem1, shelfItem2: obj9.shelfItem2, isLastTuple: obj9.isLastTuple } = item);
                                                                          tmp34 = entrypoint;
                                                                          obj19.entrypoint = entrypoint;
                                                                          tmp35 = width;
                                                                          obj19.containerWidth = width;
                                                                          return tmp27(tmp28, obj19, item.shelfItem1.application.id);
                                                                        } else if (tmp(tmp2[48]).AppLauncherHomeListItemType.RECOMMENDATION_TUPLE === type) {
                                                                          tmp22 = closure_19;
                                                                          tmp23 = closure_33;
                                                                          obj20 = { context: null, sectionName: null, onPress: null, items: null, isLastTuple: null, entrypoint: null, containerWidth: null };
                                                                          tmp24 = context;
                                                                          obj20.context = context;
                                                                          obj20.sectionName = item.sectionName;
                                                                          obj20.onPress = function onPress(application, sectionName) {
                                                                            return closure_1_19({ application, sectionName });
                                                                          };
                                                                          ({ items: obj8.items, isLastTuple: obj8.isLastTuple } = item);
                                                                          tmp25 = entrypoint;
                                                                          obj20.entrypoint = entrypoint;
                                                                          tmp26 = width;
                                                                          obj20.containerWidth = width;
                                                                          return closure_19(closure_33, obj20);
                                                                        } else if (tmp(tmp2[48]).AppLauncherHomeListItemType.APP === type) {
                                                                          tmp19 = closure_19;
                                                                          tmp20 = closure_29;
                                                                          obj21 = { section: null, onPress: null, isFirstRow: null, isLastRow: null, style: null };
                                                                          obj21.section = item.section;
                                                                          obj21.onPress = function onPress() {
                                                                            closure_12(item.section, AppLauncherTypes.AppLauncherSectionName.INSTALLED);
                                                                          };
                                                                          ({ isFirstRow: obj6.isFirstRow, isLastRow: obj6.isLastRow } = item);
                                                                          obj22 = { height: null };
                                                                          tmp21 = closure_5;
                                                                          obj22.height = closure_5;
                                                                          obj21.style = obj22;
                                                                          return closure_19(closure_29, obj21, item.section.id);
                                                                        } else if (tmp(tmp2[48]).AppLauncherHomeListItemType.RECOMMENDATION_SECTION_HEADER === type) {
                                                                          tmp17 = closure_19;
                                                                          tmp18 = closure_1_36;
                                                                          obj23 = { index: null, children: null };
                                                                          obj23.index = index;
                                                                          obj23.children = item.section;
                                                                          return closure_19(closure_1_36, obj23);
                                                                        } else if (tmp(tmp2[48]).AppLauncherHomeListItemType.RECOMMENDATION_BANNER_CARD === type) {
                                                                          tmp14 = closure_19;
                                                                          tmp15 = context;
                                                                          obj24 = { application: null, isFirst: null, isLast: null, onPress: null, isLandscape: null, showsPromoted: null, overrideImageUrl: null };
                                                                          obj24.application = item.item.application;
                                                                          ({ isFirst: obj4.isFirst, isLast: obj4.isLast } = item);
                                                                          obj24.onPress = function onPress() {
                                                                            return closure_19({ application: item.item.application, sectionName: item.sectionName });
                                                                          };
                                                                          tmp16 = closure_11;
                                                                          obj24.isLandscape = closure_11;
                                                                          ({ showsPromoted: obj4.showsPromoted, overrideImageUrl: obj4.overrideImageUrl } = item);
                                                                          return closure_19(context(tmp2[52]), obj24);
                                                                        } else if (tmp(tmp2[48]).AppLauncherHomeListItemType.RECOMMENDATION_APP === type) {
                                                                          tmp12 = closure_19;
                                                                          tmp13 = context;
                                                                          obj25 = { application: null, isFirstRow: null, isLastRow: null, onPress: null, showsPromoted: null };
                                                                          ({ application: obj3.application, isFirstRow: obj3.isFirstRow, isLastRow: obj3.isLastRow } = item);
                                                                          obj25.onPress = function onPress() {
                                                                            return closure_19({ application: item.application, sectionName: item.sectionName });
                                                                          };
                                                                          obj25.showsPromoted = item.showsPromoted;
                                                                          return closure_19(context(tmp2[53]), obj25, item.application.id);
                                                                        } else if (tmp(tmp2[48]).AppLauncherHomeListItemType.VIEW_ALL === type) {
                                                                          tmp10 = closure_19;
                                                                          tmp11 = context;
                                                                          obj26 = { title: null, onPress: null };
                                                                          obj26.title = item.title;
                                                                          obj26.onPress = function onPress() {
                                                                            const applications = item.applications;
                                                                            const mapped = applications.map((item) => item);
                                                                            const obj = AppLauncherNativeUtils;
                                                                            const result = obj.handleViewAllSelected({ location: ApplicationCommandTypes.ApplicationCommandTriggerLocations.APP_LAUNCHER_HOME, navigation, context, sectionName: item.sectionName, sectionOverallPosition: item.sectionOverallPosition, applications: mapped, sectionItemType: FrecencySection.SectionItemType.APPS, commands: [], sectionDescriptors: mapped.map((item) => item(closure_1_3[49]).getApplicationCommandSection(item)), title: item.title, promotedApplicationIds: item.promotedApplicationIds });
                                                                          };
                                                                          return closure_19(context(tmp2[54]), obj26);
                                                                        } else if (tmp(tmp2[48]).AppLauncherHomeListItemType.DIVIDER_ITEM === type) {
                                                                          tmp8 = closure_19;
                                                                          tmp9 = closure_1_35;
                                                                          return closure_19(closure_1_35, {});
                                                                        } else if (tmp(tmp2[48]).AppLauncherHomeListItemType.LEARN_MORE === type) {
                                                                          tmp4 = closure_19;
                                                                          tmp5 = context;
                                                                          obj = { visible: null };
                                                                          tmp7 = closure_3;
                                                                          tmp6 = context(tmp2[55]);
                                                                          obj.visible = closure_3.valueOf();
                                                                          return closure_19(tmp6, obj);
                                                                        } else {
                                                                          tmp3 = null;
                                                                          return null;
                                                                        }
                                                                      }
                                                                    }
                                                                  } else {
                                                                    class Fe {
                                                                      constructor() {
                                                                        obj = closure_0(closure_3[57]);
                                                                        obj1 = { source: entrypoint };
                                                                        trackWithMetadataResult = obj.trackWithMetadata(AnalyticEvents.APP_LAUNCHER_SEARCH_FOCUSED, obj1);
                                                                        return;
                                                                      }
                                                                    }
                                                                  }
                                                                  if (cResult[72] !== tmp6) {
                                                                    class Fe {
                                                                      constructor() {
                                                                        obj = closure_0(closure_3[57]);
                                                                        obj1 = { source: entrypoint };
                                                                        trackWithMetadataResult = obj.trackWithMetadata(AnalyticEvents.APP_LAUNCHER_SEARCH_FOCUSED, obj1);
                                                                        return;
                                                                      }
                                                                    }
                                                                    tmp61[0] = tmp6;
                                                                    cResult[72] = tmp6;
                                                                    class Ce {
                                                                      constructor(arg0) {
                                                                        item = navigation.item;
                                                                        index = navigation.index;
                                                                        type = item.type;
                                                                        tmp = navigation;
                                                                        tmp2 = closure_3;
                                                                        if (navigation(closure_3[48]).AppLauncherHomeListItemType.PLACEHOLDER === type) {
                                                                          tmp40 = closure_19;
                                                                          tmp41 = context;
                                                                          obj1 = { isFirstRow: null, isLastRow: null, style: null };
                                                                          num2 = 0;
                                                                          obj1.isFirstRow = 0 === index;
                                                                          tmp42 = list;
                                                                          num3 = 1;
                                                                          obj1.isLastRow = index === list.length - 1;
                                                                          obj15 = { height: null };
                                                                          tmp43 = closure_5;
                                                                          obj15.height = closure_5;
                                                                          obj1.style = obj15;
                                                                          return closure_19(context(tmp2[51]), obj1);
                                                                        } else if (tmp(tmp2[48]).AppLauncherHomeListItemType.SECTION_HEADER === type) {
                                                                          tmp38 = closure_19;
                                                                          tmp39 = closure_4;
                                                                          items = [, ];
                                                                          items[0] = closure_4.sectionHeader;
                                                                          num = 0;
                                                                          obj16 = null;
                                                                          if (0 !== index) {
                                                                            obj16 = { marginTop: 24 };
                                                                          }
                                                                          obj17 = { accessibilityRole: "header", variant: "text-lg/bold", color: "mobile-text-heading-primary", style: null, children: null };
                                                                          items[1] = obj16;
                                                                          obj17.style = items;
                                                                          obj17.children = item.section;
                                                                          return tmp38(tmp(tmp2[18]).Text, obj17);
                                                                        } else if (tmp(tmp2[48]).AppLauncherHomeListItemType.SHELF_ITEM === type) {
                                                                          tmp36 = closure_19;
                                                                          tmp37 = closure_30;
                                                                          obj18 = { section: null, onPress: null, isFirstRow: null, isLastRow: null };
                                                                          obj18.section = item.section;
                                                                          obj18.onPress = function onPress(shelfData) {
                                                                            closure_13({ shelfData, sectionName: item.sectionName });
                                                                          };
                                                                          ({ isFirstRow: obj10.isFirstRow, isLastRow: obj10.isLastRow } = item);
                                                                          return closure_19(closure_30, obj18, item.section.application.id);
                                                                        } else if (tmp(tmp2[48]).AppLauncherHomeListItemType.SHELF_ITEM_TUPLE === type) {
                                                                          obj19 = { context: null, sectionName: null, onPress: null, usesHandleActivityItemSelected: null, onActivityItemSelected: null, shelfItem1: null, shelfItem2: null, isLastTuple: null, entrypoint: null, containerWidth: null };
                                                                          tmp29 = context;
                                                                          obj19.context = context;
                                                                          tmp27 = closure_19;
                                                                          tmp28 = closure_31;
                                                                          obj19.sectionName = tmp(tmp2[44]).AppLauncherSectionName.ACTIVITIES;
                                                                          obj19.onPress = function onPress(shelfData) {
                                                                            const obj = { shelfData, sectionName: item.sectionName, navigates: null };
                                                                            let tmp2 = clickOnHomeActivityOpensAppDetails;
                                                                            if (!tmp2) {
                                                                              tmp2 = entrypoint !== AppLauncherTypes.AppLauncherEntrypoint.VOICE;
                                                                            }
                                                                            obj.navigates = tmp2;
                                                                            closure_13(obj);
                                                                          };
                                                                          tmp30 = closure_20;
                                                                          tmp31 = !closure_20;
                                                                          if (!closure_20) {
                                                                            tmp32 = entrypoint;
                                                                            tmp31 = entrypoint === tmp(tmp2[44]).AppLauncherEntrypoint.VOICE;
                                                                          }
                                                                          obj19.usesHandleActivityItemSelected = tmp31;
                                                                          tmp33 = onActivityItemSelected;
                                                                          obj19.onActivityItemSelected = onActivityItemSelected;
                                                                          ({ shelfItem1: obj9.shelfItem1, shelfItem2: obj9.shelfItem2, isLastTuple: obj9.isLastTuple } = item);
                                                                          tmp34 = entrypoint;
                                                                          obj19.entrypoint = entrypoint;
                                                                          tmp35 = width;
                                                                          obj19.containerWidth = width;
                                                                          return tmp27(tmp28, obj19, item.shelfItem1.application.id);
                                                                        } else if (tmp(tmp2[48]).AppLauncherHomeListItemType.RECOMMENDATION_TUPLE === type) {
                                                                          tmp22 = closure_19;
                                                                          tmp23 = closure_33;
                                                                          obj20 = { context: null, sectionName: null, onPress: null, items: null, isLastTuple: null, entrypoint: null, containerWidth: null };
                                                                          tmp24 = context;
                                                                          obj20.context = context;
                                                                          obj20.sectionName = item.sectionName;
                                                                          obj20.onPress = function onPress(application, sectionName) {
                                                                            return closure_1_19({ application, sectionName });
                                                                          };
                                                                          ({ items: obj8.items, isLastTuple: obj8.isLastTuple } = item);
                                                                          tmp25 = entrypoint;
                                                                          obj20.entrypoint = entrypoint;
                                                                          tmp26 = width;
                                                                          obj20.containerWidth = width;
                                                                          return closure_19(closure_33, obj20);
                                                                        } else if (tmp(tmp2[48]).AppLauncherHomeListItemType.APP === type) {
                                                                          tmp19 = closure_19;
                                                                          tmp20 = closure_29;
                                                                          obj21 = { section: null, onPress: null, isFirstRow: null, isLastRow: null, style: null };
                                                                          obj21.section = item.section;
                                                                          obj21.onPress = function onPress() {
                                                                            closure_12(item.section, AppLauncherTypes.AppLauncherSectionName.INSTALLED);
                                                                          };
                                                                          ({ isFirstRow: obj6.isFirstRow, isLastRow: obj6.isLastRow } = item);
                                                                          obj22 = { height: null };
                                                                          tmp21 = closure_5;
                                                                          obj22.height = closure_5;
                                                                          obj21.style = obj22;
                                                                          return closure_19(closure_29, obj21, item.section.id);
                                                                        } else if (tmp(tmp2[48]).AppLauncherHomeListItemType.RECOMMENDATION_SECTION_HEADER === type) {
                                                                          tmp17 = closure_19;
                                                                          tmp18 = closure_1_36;
                                                                          obj23 = { index: null, children: null };
                                                                          obj23.index = index;
                                                                          obj23.children = item.section;
                                                                          return closure_19(closure_1_36, obj23);
                                                                        } else if (tmp(tmp2[48]).AppLauncherHomeListItemType.RECOMMENDATION_BANNER_CARD === type) {
                                                                          tmp14 = closure_19;
                                                                          tmp15 = context;
                                                                          obj24 = { application: null, isFirst: null, isLast: null, onPress: null, isLandscape: null, showsPromoted: null, overrideImageUrl: null };
                                                                          obj24.application = item.item.application;
                                                                          ({ isFirst: obj4.isFirst, isLast: obj4.isLast } = item);
                                                                          obj24.onPress = function onPress() {
                                                                            return closure_19({ application: item.item.application, sectionName: item.sectionName });
                                                                          };
                                                                          tmp16 = closure_11;
                                                                          obj24.isLandscape = closure_11;
                                                                          ({ showsPromoted: obj4.showsPromoted, overrideImageUrl: obj4.overrideImageUrl } = item);
                                                                          return closure_19(context(tmp2[52]), obj24);
                                                                        } else if (tmp(tmp2[48]).AppLauncherHomeListItemType.RECOMMENDATION_APP === type) {
                                                                          tmp12 = closure_19;
                                                                          tmp13 = context;
                                                                          obj25 = { application: null, isFirstRow: null, isLastRow: null, onPress: null, showsPromoted: null };
                                                                          ({ application: obj3.application, isFirstRow: obj3.isFirstRow, isLastRow: obj3.isLastRow } = item);
                                                                          obj25.onPress = function onPress() {
                                                                            return closure_19({ application: item.application, sectionName: item.sectionName });
                                                                          };
                                                                          obj25.showsPromoted = item.showsPromoted;
                                                                          return closure_19(context(tmp2[53]), obj25, item.application.id);
                                                                        } else if (tmp(tmp2[48]).AppLauncherHomeListItemType.VIEW_ALL === type) {
                                                                          tmp10 = closure_19;
                                                                          tmp11 = context;
                                                                          obj26 = { title: null, onPress: null };
                                                                          obj26.title = item.title;
                                                                          obj26.onPress = function onPress() {
                                                                            const applications = item.applications;
                                                                            const mapped = applications.map((item) => item);
                                                                            const obj = AppLauncherNativeUtils;
                                                                            const result = obj.handleViewAllSelected({ location: ApplicationCommandTypes.ApplicationCommandTriggerLocations.APP_LAUNCHER_HOME, navigation, context, sectionName: item.sectionName, sectionOverallPosition: item.sectionOverallPosition, applications: mapped, sectionItemType: FrecencySection.SectionItemType.APPS, commands: [], sectionDescriptors: mapped.map((item) => item(closure_1_3[49]).getApplicationCommandSection(item)), title: item.title, promotedApplicationIds: item.promotedApplicationIds });
                                                                          };
                                                                          return closure_19(context(tmp2[54]), obj26);
                                                                        } else if (tmp(tmp2[48]).AppLauncherHomeListItemType.DIVIDER_ITEM === type) {
                                                                          tmp8 = closure_19;
                                                                          tmp9 = closure_1_35;
                                                                          return closure_19(closure_1_35, {});
                                                                        } else if (tmp(tmp2[48]).AppLauncherHomeListItemType.LEARN_MORE === type) {
                                                                          tmp4 = closure_19;
                                                                          tmp5 = context;
                                                                          obj = { visible: null };
                                                                          tmp7 = closure_3;
                                                                          tmp6 = context(tmp2[55]);
                                                                          obj.visible = closure_3.valueOf();
                                                                          return closure_19(tmp6, obj);
                                                                        } else {
                                                                          tmp3 = null;
                                                                          return null;
                                                                        }
                                                                      }
                                                                    }
                                                                  } else {
                                                                    class Fe {
                                                                      constructor() {
                                                                        obj = closure_0(closure_3[57]);
                                                                        obj1 = { source: entrypoint };
                                                                        trackWithMetadataResult = obj.trackWithMetadata(AnalyticEvents.APP_LAUNCHER_SEARCH_FOCUSED, obj1);
                                                                        return;
                                                                      }
                                                                    }
                                                                  }
                                                                  tmp5(8422)(tmp55, tmp59, tmp61);
                                                                  const tmpResult7 = tmp(11722);
                                                                  [r10312, closure_30] = tmp29(obj4.useState(false), 2);
                                                                  const _Symbol3 = Symbol;
                                                                  if (cResult[74] === Symbol.for("react.memo_cache_sentinel")) {
                                                                    class Fe {
                                                                      constructor() {
                                                                        obj = closure_0(closure_3[57]);
                                                                        obj1 = { source: entrypoint };
                                                                        trackWithMetadataResult = obj.trackWithMetadata(AnalyticEvents.APP_LAUNCHER_SEARCH_FOCUSED, obj1);
                                                                        return;
                                                                      }
                                                                    }
                                                                    const items4 = [];
                                                                    cResult[74] = tmp66;
                                                                    class Ce {
                                                                      constructor(arg0) {
                                                                        item = navigation.item;
                                                                        index = navigation.index;
                                                                        type = item.type;
                                                                        tmp = navigation;
                                                                        tmp2 = closure_3;
                                                                        if (navigation(closure_3[48]).AppLauncherHomeListItemType.PLACEHOLDER === type) {
                                                                          tmp40 = closure_19;
                                                                          tmp41 = context;
                                                                          obj1 = { isFirstRow: null, isLastRow: null, style: null };
                                                                          num2 = 0;
                                                                          obj1.isFirstRow = 0 === index;
                                                                          tmp42 = list;
                                                                          num3 = 1;
                                                                          obj1.isLastRow = index === list.length - 1;
                                                                          obj15 = { height: null };
                                                                          tmp43 = closure_5;
                                                                          obj15.height = closure_5;
                                                                          obj1.style = obj15;
                                                                          return closure_19(context(tmp2[51]), obj1);
                                                                        } else if (tmp(tmp2[48]).AppLauncherHomeListItemType.SECTION_HEADER === type) {
                                                                          tmp38 = closure_19;
                                                                          tmp39 = closure_4;
                                                                          items = [, ];
                                                                          items[0] = closure_4.sectionHeader;
                                                                          num = 0;
                                                                          obj16 = null;
                                                                          if (0 !== index) {
                                                                            obj16 = { marginTop: 24 };
                                                                          }
                                                                          obj17 = { accessibilityRole: "header", variant: "text-lg/bold", color: "mobile-text-heading-primary", style: null, children: null };
                                                                          items[1] = obj16;
                                                                          obj17.style = items;
                                                                          obj17.children = item.section;
                                                                          return tmp38(tmp(tmp2[18]).Text, obj17);
                                                                        } else if (tmp(tmp2[48]).AppLauncherHomeListItemType.SHELF_ITEM === type) {
                                                                          tmp36 = closure_19;
                                                                          tmp37 = closure_30;
                                                                          obj18 = { section: null, onPress: null, isFirstRow: null, isLastRow: null };
                                                                          obj18.section = item.section;
                                                                          obj18.onPress = function onPress(shelfData) {
                                                                            closure_13({ shelfData, sectionName: item.sectionName });
                                                                          };
                                                                          ({ isFirstRow: obj10.isFirstRow, isLastRow: obj10.isLastRow } = item);
                                                                          return closure_19(closure_30, obj18, item.section.application.id);
                                                                        } else if (tmp(tmp2[48]).AppLauncherHomeListItemType.SHELF_ITEM_TUPLE === type) {
                                                                          obj19 = { context: null, sectionName: null, onPress: null, usesHandleActivityItemSelected: null, onActivityItemSelected: null, shelfItem1: null, shelfItem2: null, isLastTuple: null, entrypoint: null, containerWidth: null };
                                                                          tmp29 = context;
                                                                          obj19.context = context;
                                                                          tmp27 = closure_19;
                                                                          tmp28 = closure_31;
                                                                          obj19.sectionName = tmp(tmp2[44]).AppLauncherSectionName.ACTIVITIES;
                                                                          obj19.onPress = function onPress(shelfData) {
                                                                            const obj = { shelfData, sectionName: item.sectionName, navigates: null };
                                                                            let tmp2 = clickOnHomeActivityOpensAppDetails;
                                                                            if (!tmp2) {
                                                                              tmp2 = entrypoint !== AppLauncherTypes.AppLauncherEntrypoint.VOICE;
                                                                            }
                                                                            obj.navigates = tmp2;
                                                                            closure_13(obj);
                                                                          };
                                                                          tmp30 = closure_20;
                                                                          tmp31 = !closure_20;
                                                                          if (!closure_20) {
                                                                            tmp32 = entrypoint;
                                                                            tmp31 = entrypoint === tmp(tmp2[44]).AppLauncherEntrypoint.VOICE;
                                                                          }
                                                                          obj19.usesHandleActivityItemSelected = tmp31;
                                                                          tmp33 = onActivityItemSelected;
                                                                          obj19.onActivityItemSelected = onActivityItemSelected;
                                                                          ({ shelfItem1: obj9.shelfItem1, shelfItem2: obj9.shelfItem2, isLastTuple: obj9.isLastTuple } = item);
                                                                          tmp34 = entrypoint;
                                                                          obj19.entrypoint = entrypoint;
                                                                          tmp35 = width;
                                                                          obj19.containerWidth = width;
                                                                          return tmp27(tmp28, obj19, item.shelfItem1.application.id);
                                                                        } else if (tmp(tmp2[48]).AppLauncherHomeListItemType.RECOMMENDATION_TUPLE === type) {
                                                                          tmp22 = closure_19;
                                                                          tmp23 = closure_33;
                                                                          obj20 = { context: null, sectionName: null, onPress: null, items: null, isLastTuple: null, entrypoint: null, containerWidth: null };
                                                                          tmp24 = context;
                                                                          obj20.context = context;
                                                                          obj20.sectionName = item.sectionName;
                                                                          obj20.onPress = function onPress(application, sectionName) {
                                                                            return closure_1_19({ application, sectionName });
                                                                          };
                                                                          ({ items: obj8.items, isLastTuple: obj8.isLastTuple } = item);
                                                                          tmp25 = entrypoint;
                                                                          obj20.entrypoint = entrypoint;
                                                                          tmp26 = width;
                                                                          obj20.containerWidth = width;
                                                                          return closure_19(closure_33, obj20);
                                                                        } else if (tmp(tmp2[48]).AppLauncherHomeListItemType.APP === type) {
                                                                          tmp19 = closure_19;
                                                                          tmp20 = closure_29;
                                                                          obj21 = { section: null, onPress: null, isFirstRow: null, isLastRow: null, style: null };
                                                                          obj21.section = item.section;
                                                                          obj21.onPress = function onPress() {
                                                                            closure_12(item.section, AppLauncherTypes.AppLauncherSectionName.INSTALLED);
                                                                          };
                                                                          ({ isFirstRow: obj6.isFirstRow, isLastRow: obj6.isLastRow } = item);
                                                                          obj22 = { height: null };
                                                                          tmp21 = closure_5;
                                                                          obj22.height = closure_5;
                                                                          obj21.style = obj22;
                                                                          return closure_19(closure_29, obj21, item.section.id);
                                                                        } else if (tmp(tmp2[48]).AppLauncherHomeListItemType.RECOMMENDATION_SECTION_HEADER === type) {
                                                                          tmp17 = closure_19;
                                                                          tmp18 = closure_1_36;
                                                                          obj23 = { index: null, children: null };
                                                                          obj23.index = index;
                                                                          obj23.children = item.section;
                                                                          return closure_19(closure_1_36, obj23);
                                                                        } else if (tmp(tmp2[48]).AppLauncherHomeListItemType.RECOMMENDATION_BANNER_CARD === type) {
                                                                          tmp14 = closure_19;
                                                                          tmp15 = context;
                                                                          obj24 = { application: null, isFirst: null, isLast: null, onPress: null, isLandscape: null, showsPromoted: null, overrideImageUrl: null };
                                                                          obj24.application = item.item.application;
                                                                          ({ isFirst: obj4.isFirst, isLast: obj4.isLast } = item);
                                                                          obj24.onPress = function onPress() {
                                                                            return closure_19({ application: item.item.application, sectionName: item.sectionName });
                                                                          };
                                                                          tmp16 = closure_11;
                                                                          obj24.isLandscape = closure_11;
                                                                          ({ showsPromoted: obj4.showsPromoted, overrideImageUrl: obj4.overrideImageUrl } = item);
                                                                          return closure_19(context(tmp2[52]), obj24);
                                                                        } else if (tmp(tmp2[48]).AppLauncherHomeListItemType.RECOMMENDATION_APP === type) {
                                                                          tmp12 = closure_19;
                                                                          tmp13 = context;
                                                                          obj25 = { application: null, isFirstRow: null, isLastRow: null, onPress: null, showsPromoted: null };
                                                                          ({ application: obj3.application, isFirstRow: obj3.isFirstRow, isLastRow: obj3.isLastRow } = item);
                                                                          obj25.onPress = function onPress() {
                                                                            return closure_19({ application: item.application, sectionName: item.sectionName });
                                                                          };
                                                                          obj25.showsPromoted = item.showsPromoted;
                                                                          return closure_19(context(tmp2[53]), obj25, item.application.id);
                                                                        } else if (tmp(tmp2[48]).AppLauncherHomeListItemType.VIEW_ALL === type) {
                                                                          tmp10 = closure_19;
                                                                          tmp11 = context;
                                                                          obj26 = { title: null, onPress: null };
                                                                          obj26.title = item.title;
                                                                          obj26.onPress = function onPress() {
                                                                            const applications = item.applications;
                                                                            const mapped = applications.map((item) => item);
                                                                            const obj = AppLauncherNativeUtils;
                                                                            const result = obj.handleViewAllSelected({ location: ApplicationCommandTypes.ApplicationCommandTriggerLocations.APP_LAUNCHER_HOME, navigation, context, sectionName: item.sectionName, sectionOverallPosition: item.sectionOverallPosition, applications: mapped, sectionItemType: FrecencySection.SectionItemType.APPS, commands: [], sectionDescriptors: mapped.map((item) => item(closure_1_3[49]).getApplicationCommandSection(item)), title: item.title, promotedApplicationIds: item.promotedApplicationIds });
                                                                          };
                                                                          return closure_19(context(tmp2[54]), obj26);
                                                                        } else if (tmp(tmp2[48]).AppLauncherHomeListItemType.DIVIDER_ITEM === type) {
                                                                          tmp8 = closure_19;
                                                                          tmp9 = closure_1_35;
                                                                          return closure_19(closure_1_35, {});
                                                                        } else if (tmp(tmp2[48]).AppLauncherHomeListItemType.LEARN_MORE === type) {
                                                                          tmp4 = closure_19;
                                                                          tmp5 = context;
                                                                          obj = { visible: null };
                                                                          tmp7 = closure_3;
                                                                          tmp6 = context(tmp2[55]);
                                                                          obj.visible = closure_3.valueOf();
                                                                          return closure_19(tmp6, obj);
                                                                        } else {
                                                                          tmp3 = null;
                                                                          return null;
                                                                        }
                                                                      }
                                                                    }
                                                                    let tmp65 = items4;
                                                                  } else {
                                                                    class Fe {
                                                                      constructor() {
                                                                        obj = closure_0(closure_3[57]);
                                                                        obj1 = { source: entrypoint };
                                                                        trackWithMetadataResult = obj.trackWithMetadata(AnalyticEvents.APP_LAUNCHER_SEARCH_FOCUSED, obj1);
                                                                        return;
                                                                      }
                                                                    }
                                                                    tmp65 = cResult[75];
                                                                  }
                                                                  const effect3 = obj4.useEffect(tmp66, tmp65);
                                                                  const _Symbol4 = Symbol;
                                                                  if (cResult[76] === Symbol.for("react.memo_cache_sentinel")) {
                                                                    class Fe {
                                                                      constructor() {
                                                                        obj = closure_0(closure_3[57]);
                                                                        obj1 = { source: entrypoint };
                                                                        trackWithMetadataResult = obj.trackWithMetadata(AnalyticEvents.APP_LAUNCHER_SEARCH_FOCUSED, obj1);
                                                                        return;
                                                                      }
                                                                    }
                                                                    const items5 = [triggeredOnboardingContentMetadata];
                                                                    function ot() {
                                                                      return triggeredOnboardingContentMetadata.getTriggeredOnboardingContentMetadata().willShowGlobalSearchOnboarding;
                                                                    }
                                                                    class Ce {
                                                                      constructor(arg0) {
                                                                        item = navigation.item;
                                                                        index = navigation.index;
                                                                        type = item.type;
                                                                        tmp = navigation;
                                                                        tmp2 = closure_3;
                                                                        if (navigation(closure_3[48]).AppLauncherHomeListItemType.PLACEHOLDER === type) {
                                                                          tmp40 = closure_19;
                                                                          tmp41 = context;
                                                                          obj1 = { isFirstRow: null, isLastRow: null, style: null };
                                                                          num2 = 0;
                                                                          obj1.isFirstRow = 0 === index;
                                                                          tmp42 = list;
                                                                          num3 = 1;
                                                                          obj1.isLastRow = index === list.length - 1;
                                                                          obj15 = { height: null };
                                                                          tmp43 = closure_5;
                                                                          obj15.height = closure_5;
                                                                          obj1.style = obj15;
                                                                          return closure_19(context(tmp2[51]), obj1);
                                                                        } else if (tmp(tmp2[48]).AppLauncherHomeListItemType.SECTION_HEADER === type) {
                                                                          tmp38 = closure_19;
                                                                          tmp39 = closure_4;
                                                                          items = [, ];
                                                                          items[0] = closure_4.sectionHeader;
                                                                          num = 0;
                                                                          obj16 = null;
                                                                          if (0 !== index) {
                                                                            obj16 = { marginTop: 24 };
                                                                          }
                                                                          obj17 = { accessibilityRole: "header", variant: "text-lg/bold", color: "mobile-text-heading-primary", style: null, children: null };
                                                                          items[1] = obj16;
                                                                          obj17.style = items;
                                                                          obj17.children = item.section;
                                                                          return tmp38(tmp(tmp2[18]).Text, obj17);
                                                                        } else if (tmp(tmp2[48]).AppLauncherHomeListItemType.SHELF_ITEM === type) {
                                                                          tmp36 = closure_19;
                                                                          tmp37 = closure_30;
                                                                          obj18 = { section: null, onPress: null, isFirstRow: null, isLastRow: null };
                                                                          obj18.section = item.section;
                                                                          obj18.onPress = function onPress(shelfData) {
                                                                            closure_13({ shelfData, sectionName: item.sectionName });
                                                                          };
                                                                          ({ isFirstRow: obj10.isFirstRow, isLastRow: obj10.isLastRow } = item);
                                                                          return closure_19(closure_30, obj18, item.section.application.id);
                                                                        } else if (tmp(tmp2[48]).AppLauncherHomeListItemType.SHELF_ITEM_TUPLE === type) {
                                                                          obj19 = { context: null, sectionName: null, onPress: null, usesHandleActivityItemSelected: null, onActivityItemSelected: null, shelfItem1: null, shelfItem2: null, isLastTuple: null, entrypoint: null, containerWidth: null };
                                                                          tmp29 = context;
                                                                          obj19.context = context;
                                                                          tmp27 = closure_19;
                                                                          tmp28 = closure_31;
                                                                          obj19.sectionName = tmp(tmp2[44]).AppLauncherSectionName.ACTIVITIES;
                                                                          obj19.onPress = function onPress(shelfData) {
                                                                            const obj = { shelfData, sectionName: item.sectionName, navigates: null };
                                                                            let tmp2 = clickOnHomeActivityOpensAppDetails;
                                                                            if (!tmp2) {
                                                                              tmp2 = entrypoint !== AppLauncherTypes.AppLauncherEntrypoint.VOICE;
                                                                            }
                                                                            obj.navigates = tmp2;
                                                                            closure_13(obj);
                                                                          };
                                                                          tmp30 = closure_20;
                                                                          tmp31 = !closure_20;
                                                                          if (!closure_20) {
                                                                            tmp32 = entrypoint;
                                                                            tmp31 = entrypoint === tmp(tmp2[44]).AppLauncherEntrypoint.VOICE;
                                                                          }
                                                                          obj19.usesHandleActivityItemSelected = tmp31;
                                                                          tmp33 = onActivityItemSelected;
                                                                          obj19.onActivityItemSelected = onActivityItemSelected;
                                                                          ({ shelfItem1: obj9.shelfItem1, shelfItem2: obj9.shelfItem2, isLastTuple: obj9.isLastTuple } = item);
                                                                          tmp34 = entrypoint;
                                                                          obj19.entrypoint = entrypoint;
                                                                          tmp35 = width;
                                                                          obj19.containerWidth = width;
                                                                          return tmp27(tmp28, obj19, item.shelfItem1.application.id);
                                                                        } else if (tmp(tmp2[48]).AppLauncherHomeListItemType.RECOMMENDATION_TUPLE === type) {
                                                                          tmp22 = closure_19;
                                                                          tmp23 = closure_33;
                                                                          obj20 = { context: null, sectionName: null, onPress: null, items: null, isLastTuple: null, entrypoint: null, containerWidth: null };
                                                                          tmp24 = context;
                                                                          obj20.context = context;
                                                                          obj20.sectionName = item.sectionName;
                                                                          obj20.onPress = function onPress(application, sectionName) {
                                                                            return closure_1_19({ application, sectionName });
                                                                          };
                                                                          ({ items: obj8.items, isLastTuple: obj8.isLastTuple } = item);
                                                                          tmp25 = entrypoint;
                                                                          obj20.entrypoint = entrypoint;
                                                                          tmp26 = width;
                                                                          obj20.containerWidth = width;
                                                                          return closure_19(closure_33, obj20);
                                                                        } else if (tmp(tmp2[48]).AppLauncherHomeListItemType.APP === type) {
                                                                          tmp19 = closure_19;
                                                                          tmp20 = closure_29;
                                                                          obj21 = { section: null, onPress: null, isFirstRow: null, isLastRow: null, style: null };
                                                                          obj21.section = item.section;
                                                                          obj21.onPress = function onPress() {
                                                                            closure_12(item.section, AppLauncherTypes.AppLauncherSectionName.INSTALLED);
                                                                          };
                                                                          ({ isFirstRow: obj6.isFirstRow, isLastRow: obj6.isLastRow } = item);
                                                                          obj22 = { height: null };
                                                                          tmp21 = closure_5;
                                                                          obj22.height = closure_5;
                                                                          obj21.style = obj22;
                                                                          return closure_19(closure_29, obj21, item.section.id);
                                                                        } else if (tmp(tmp2[48]).AppLauncherHomeListItemType.RECOMMENDATION_SECTION_HEADER === type) {
                                                                          tmp17 = closure_19;
                                                                          tmp18 = closure_1_36;
                                                                          obj23 = { index: null, children: null };
                                                                          obj23.index = index;
                                                                          obj23.children = item.section;
                                                                          return closure_19(closure_1_36, obj23);
                                                                        } else if (tmp(tmp2[48]).AppLauncherHomeListItemType.RECOMMENDATION_BANNER_CARD === type) {
                                                                          tmp14 = closure_19;
                                                                          tmp15 = context;
                                                                          obj24 = { application: null, isFirst: null, isLast: null, onPress: null, isLandscape: null, showsPromoted: null, overrideImageUrl: null };
                                                                          obj24.application = item.item.application;
                                                                          ({ isFirst: obj4.isFirst, isLast: obj4.isLast } = item);
                                                                          obj24.onPress = function onPress() {
                                                                            return closure_19({ application: item.item.application, sectionName: item.sectionName });
                                                                          };
                                                                          tmp16 = closure_11;
                                                                          obj24.isLandscape = closure_11;
                                                                          ({ showsPromoted: obj4.showsPromoted, overrideImageUrl: obj4.overrideImageUrl } = item);
                                                                          return closure_19(context(tmp2[52]), obj24);
                                                                        } else if (tmp(tmp2[48]).AppLauncherHomeListItemType.RECOMMENDATION_APP === type) {
                                                                          tmp12 = closure_19;
                                                                          tmp13 = context;
                                                                          obj25 = { application: null, isFirstRow: null, isLastRow: null, onPress: null, showsPromoted: null };
                                                                          ({ application: obj3.application, isFirstRow: obj3.isFirstRow, isLastRow: obj3.isLastRow } = item);
                                                                          obj25.onPress = function onPress() {
                                                                            return closure_19({ application: item.application, sectionName: item.sectionName });
                                                                          };
                                                                          obj25.showsPromoted = item.showsPromoted;
                                                                          return closure_19(context(tmp2[53]), obj25, item.application.id);
                                                                        } else if (tmp(tmp2[48]).AppLauncherHomeListItemType.VIEW_ALL === type) {
                                                                          tmp10 = closure_19;
                                                                          tmp11 = context;
                                                                          obj26 = { title: null, onPress: null };
                                                                          obj26.title = item.title;
                                                                          obj26.onPress = function onPress() {
                                                                            const applications = item.applications;
                                                                            const mapped = applications.map((item) => item);
                                                                            const obj = AppLauncherNativeUtils;
                                                                            const result = obj.handleViewAllSelected({ location: ApplicationCommandTypes.ApplicationCommandTriggerLocations.APP_LAUNCHER_HOME, navigation, context, sectionName: item.sectionName, sectionOverallPosition: item.sectionOverallPosition, applications: mapped, sectionItemType: FrecencySection.SectionItemType.APPS, commands: [], sectionDescriptors: mapped.map((item) => item(closure_1_3[49]).getApplicationCommandSection(item)), title: item.title, promotedApplicationIds: item.promotedApplicationIds });
                                                                          };
                                                                          return closure_19(context(tmp2[54]), obj26);
                                                                        } else if (tmp(tmp2[48]).AppLauncherHomeListItemType.DIVIDER_ITEM === type) {
                                                                          tmp8 = closure_19;
                                                                          tmp9 = closure_1_35;
                                                                          return closure_19(closure_1_35, {});
                                                                        } else if (tmp(tmp2[48]).AppLauncherHomeListItemType.LEARN_MORE === type) {
                                                                          tmp4 = closure_19;
                                                                          tmp5 = context;
                                                                          obj = { visible: null };
                                                                          tmp7 = closure_3;
                                                                          tmp6 = context(tmp2[55]);
                                                                          obj.visible = closure_3.valueOf();
                                                                          return closure_19(tmp6, obj);
                                                                        } else {
                                                                          tmp3 = null;
                                                                          return null;
                                                                        }
                                                                      }
                                                                    }
                                                                    cResult[77] = ot;
                                                                    let tmp69 = ot;
                                                                    const tmp68 = items5;
                                                                  } else {
                                                                    class Fe {
                                                                      constructor() {
                                                                        obj = closure_0(closure_3[57]);
                                                                        obj1 = { source: entrypoint };
                                                                        trackWithMetadataResult = obj.trackWithMetadata(AnalyticEvents.APP_LAUNCHER_SEARCH_FOCUSED, obj1);
                                                                        return;
                                                                      }
                                                                    }
                                                                    tmp69 = cResult[77];
                                                                  }
                                                                  const tmp29Result = tmp29(obj4.useState(false), 2);
                                                                  const stateFromStores = tmp(504).useStateFromStores(tmp68, tmp69);
                                                                  if (cResult[78] !== stateFromStores) {
                                                                    class Fe {
                                                                      constructor() {
                                                                        obj = closure_0(closure_3[57]);
                                                                        obj1 = { source: entrypoint };
                                                                        trackWithMetadataResult = obj.trackWithMetadata(AnalyticEvents.APP_LAUNCHER_SEARCH_FOCUSED, obj1);
                                                                        return;
                                                                      }
                                                                    }
                                                                    cResult[78] = stateFromStores;
                                                                    cResult[79] = tmp72;
                                                                    class Ce {
                                                                      constructor(arg0) {
                                                                        item = navigation.item;
                                                                        index = navigation.index;
                                                                        type = item.type;
                                                                        tmp = navigation;
                                                                        tmp2 = closure_3;
                                                                        if (navigation(closure_3[48]).AppLauncherHomeListItemType.PLACEHOLDER === type) {
                                                                          tmp40 = closure_19;
                                                                          tmp41 = context;
                                                                          obj1 = { isFirstRow: null, isLastRow: null, style: null };
                                                                          num2 = 0;
                                                                          obj1.isFirstRow = 0 === index;
                                                                          tmp42 = list;
                                                                          num3 = 1;
                                                                          obj1.isLastRow = index === list.length - 1;
                                                                          obj15 = { height: null };
                                                                          tmp43 = closure_5;
                                                                          obj15.height = closure_5;
                                                                          obj1.style = obj15;
                                                                          return closure_19(context(tmp2[51]), obj1);
                                                                        } else if (tmp(tmp2[48]).AppLauncherHomeListItemType.SECTION_HEADER === type) {
                                                                          tmp38 = closure_19;
                                                                          tmp39 = closure_4;
                                                                          items = [, ];
                                                                          items[0] = closure_4.sectionHeader;
                                                                          num = 0;
                                                                          obj16 = null;
                                                                          if (0 !== index) {
                                                                            obj16 = { marginTop: 24 };
                                                                          }
                                                                          obj17 = { accessibilityRole: "header", variant: "text-lg/bold", color: "mobile-text-heading-primary", style: null, children: null };
                                                                          items[1] = obj16;
                                                                          obj17.style = items;
                                                                          obj17.children = item.section;
                                                                          return tmp38(tmp(tmp2[18]).Text, obj17);
                                                                        } else if (tmp(tmp2[48]).AppLauncherHomeListItemType.SHELF_ITEM === type) {
                                                                          tmp36 = closure_19;
                                                                          tmp37 = closure_30;
                                                                          obj18 = { section: null, onPress: null, isFirstRow: null, isLastRow: null };
                                                                          obj18.section = item.section;
                                                                          obj18.onPress = function onPress(shelfData) {
                                                                            closure_13({ shelfData, sectionName: item.sectionName });
                                                                          };
                                                                          ({ isFirstRow: obj10.isFirstRow, isLastRow: obj10.isLastRow } = item);
                                                                          return closure_19(closure_30, obj18, item.section.application.id);
                                                                        } else if (tmp(tmp2[48]).AppLauncherHomeListItemType.SHELF_ITEM_TUPLE === type) {
                                                                          obj19 = { context: null, sectionName: null, onPress: null, usesHandleActivityItemSelected: null, onActivityItemSelected: null, shelfItem1: null, shelfItem2: null, isLastTuple: null, entrypoint: null, containerWidth: null };
                                                                          tmp29 = context;
                                                                          obj19.context = context;
                                                                          tmp27 = closure_19;
                                                                          tmp28 = closure_31;
                                                                          obj19.sectionName = tmp(tmp2[44]).AppLauncherSectionName.ACTIVITIES;
                                                                          obj19.onPress = function onPress(shelfData) {
                                                                            const obj = { shelfData, sectionName: item.sectionName, navigates: null };
                                                                            let tmp2 = clickOnHomeActivityOpensAppDetails;
                                                                            if (!tmp2) {
                                                                              tmp2 = entrypoint !== AppLauncherTypes.AppLauncherEntrypoint.VOICE;
                                                                            }
                                                                            obj.navigates = tmp2;
                                                                            closure_13(obj);
                                                                          };
                                                                          tmp30 = closure_20;
                                                                          tmp31 = !closure_20;
                                                                          if (!closure_20) {
                                                                            tmp32 = entrypoint;
                                                                            tmp31 = entrypoint === tmp(tmp2[44]).AppLauncherEntrypoint.VOICE;
                                                                          }
                                                                          obj19.usesHandleActivityItemSelected = tmp31;
                                                                          tmp33 = onActivityItemSelected;
                                                                          obj19.onActivityItemSelected = onActivityItemSelected;
                                                                          ({ shelfItem1: obj9.shelfItem1, shelfItem2: obj9.shelfItem2, isLastTuple: obj9.isLastTuple } = item);
                                                                          tmp34 = entrypoint;
                                                                          obj19.entrypoint = entrypoint;
                                                                          tmp35 = width;
                                                                          obj19.containerWidth = width;
                                                                          return tmp27(tmp28, obj19, item.shelfItem1.application.id);
                                                                        } else if (tmp(tmp2[48]).AppLauncherHomeListItemType.RECOMMENDATION_TUPLE === type) {
                                                                          tmp22 = closure_19;
                                                                          tmp23 = closure_33;
                                                                          obj20 = { context: null, sectionName: null, onPress: null, items: null, isLastTuple: null, entrypoint: null, containerWidth: null };
                                                                          tmp24 = context;
                                                                          obj20.context = context;
                                                                          obj20.sectionName = item.sectionName;
                                                                          obj20.onPress = function onPress(application, sectionName) {
                                                                            return closure_1_19({ application, sectionName });
                                                                          };
                                                                          ({ items: obj8.items, isLastTuple: obj8.isLastTuple } = item);
                                                                          tmp25 = entrypoint;
                                                                          obj20.entrypoint = entrypoint;
                                                                          tmp26 = width;
                                                                          obj20.containerWidth = width;
                                                                          return closure_19(closure_33, obj20);
                                                                        } else if (tmp(tmp2[48]).AppLauncherHomeListItemType.APP === type) {
                                                                          tmp19 = closure_19;
                                                                          tmp20 = closure_29;
                                                                          obj21 = { section: null, onPress: null, isFirstRow: null, isLastRow: null, style: null };
                                                                          obj21.section = item.section;
                                                                          obj21.onPress = function onPress() {
                                                                            closure_12(item.section, AppLauncherTypes.AppLauncherSectionName.INSTALLED);
                                                                          };
                                                                          ({ isFirstRow: obj6.isFirstRow, isLastRow: obj6.isLastRow } = item);
                                                                          obj22 = { height: null };
                                                                          tmp21 = closure_5;
                                                                          obj22.height = closure_5;
                                                                          obj21.style = obj22;
                                                                          return closure_19(closure_29, obj21, item.section.id);
                                                                        } else if (tmp(tmp2[48]).AppLauncherHomeListItemType.RECOMMENDATION_SECTION_HEADER === type) {
                                                                          tmp17 = closure_19;
                                                                          tmp18 = closure_1_36;
                                                                          obj23 = { index: null, children: null };
                                                                          obj23.index = index;
                                                                          obj23.children = item.section;
                                                                          return closure_19(closure_1_36, obj23);
                                                                        } else if (tmp(tmp2[48]).AppLauncherHomeListItemType.RECOMMENDATION_BANNER_CARD === type) {
                                                                          tmp14 = closure_19;
                                                                          tmp15 = context;
                                                                          obj24 = { application: null, isFirst: null, isLast: null, onPress: null, isLandscape: null, showsPromoted: null, overrideImageUrl: null };
                                                                          obj24.application = item.item.application;
                                                                          ({ isFirst: obj4.isFirst, isLast: obj4.isLast } = item);
                                                                          obj24.onPress = function onPress() {
                                                                            return closure_19({ application: item.item.application, sectionName: item.sectionName });
                                                                          };
                                                                          tmp16 = closure_11;
                                                                          obj24.isLandscape = closure_11;
                                                                          ({ showsPromoted: obj4.showsPromoted, overrideImageUrl: obj4.overrideImageUrl } = item);
                                                                          return closure_19(context(tmp2[52]), obj24);
                                                                        } else if (tmp(tmp2[48]).AppLauncherHomeListItemType.RECOMMENDATION_APP === type) {
                                                                          tmp12 = closure_19;
                                                                          tmp13 = context;
                                                                          obj25 = { application: null, isFirstRow: null, isLastRow: null, onPress: null, showsPromoted: null };
                                                                          ({ application: obj3.application, isFirstRow: obj3.isFirstRow, isLastRow: obj3.isLastRow } = item);
                                                                          obj25.onPress = function onPress() {
                                                                            return closure_19({ application: item.application, sectionName: item.sectionName });
                                                                          };
                                                                          obj25.showsPromoted = item.showsPromoted;
                                                                          return closure_19(context(tmp2[53]), obj25, item.application.id);
                                                                        } else if (tmp(tmp2[48]).AppLauncherHomeListItemType.VIEW_ALL === type) {
                                                                          tmp10 = closure_19;
                                                                          tmp11 = context;
                                                                          obj26 = { title: null, onPress: null };
                                                                          obj26.title = item.title;
                                                                          obj26.onPress = function onPress() {
                                                                            const applications = item.applications;
                                                                            const mapped = applications.map((item) => item);
                                                                            const obj = AppLauncherNativeUtils;
                                                                            const result = obj.handleViewAllSelected({ location: ApplicationCommandTypes.ApplicationCommandTriggerLocations.APP_LAUNCHER_HOME, navigation, context, sectionName: item.sectionName, sectionOverallPosition: item.sectionOverallPosition, applications: mapped, sectionItemType: FrecencySection.SectionItemType.APPS, commands: [], sectionDescriptors: mapped.map((item) => item(closure_1_3[49]).getApplicationCommandSection(item)), title: item.title, promotedApplicationIds: item.promotedApplicationIds });
                                                                          };
                                                                          return closure_19(context(tmp2[54]), obj26);
                                                                        } else if (tmp(tmp2[48]).AppLauncherHomeListItemType.DIVIDER_ITEM === type) {
                                                                          tmp8 = closure_19;
                                                                          tmp9 = closure_1_35;
                                                                          return closure_19(closure_1_35, {});
                                                                        } else if (tmp(tmp2[48]).AppLauncherHomeListItemType.LEARN_MORE === type) {
                                                                          tmp4 = closure_19;
                                                                          tmp5 = context;
                                                                          obj = { visible: null };
                                                                          tmp7 = closure_3;
                                                                          tmp6 = context(tmp2[55]);
                                                                          obj.visible = closure_3.valueOf();
                                                                          return closure_19(tmp6, obj);
                                                                        } else {
                                                                          tmp3 = null;
                                                                          return null;
                                                                        }
                                                                      }
                                                                    }
                                                                  } else {
                                                                    class Fe {
                                                                      constructor() {
                                                                        obj = closure_0(closure_3[57]);
                                                                        obj1 = { source: entrypoint };
                                                                        trackWithMetadataResult = obj.trackWithMetadata(AnalyticEvents.APP_LAUNCHER_SEARCH_FOCUSED, obj1);
                                                                        return;
                                                                      }
                                                                    }
                                                                  }
                                                                  const tmpResult8 = tmp(504);
                                                                  const trackAppLauncherHomeItemImpression = tmp(11724).useTrackAppLauncherHomeItemImpression().trackAppLauncherHomeItemImpression;
                                                                  if (cResult[80] === sum) {
                                                                    class Fe {
                                                                      constructor() {
                                                                        obj = closure_0(closure_3[57]);
                                                                        obj1 = { source: entrypoint };
                                                                        trackWithMetadataResult = obj.trackWithMetadata(AnalyticEvents.APP_LAUNCHER_SEARCH_FOCUSED, obj1);
                                                                        return;
                                                                      }
                                                                    }
                                                                    if (cResult[83] !== sum) {
                                                                      class Fe {
                                                                        constructor() {
                                                                          obj = closure_0(closure_3[57]);
                                                                          obj1 = { source: entrypoint };
                                                                          trackWithMetadataResult = obj.trackWithMetadata(AnalyticEvents.APP_LAUNCHER_SEARCH_FOCUSED, obj1);
                                                                          return;
                                                                        }
                                                                      }
                                                                      tmp77[0] = sum;
                                                                      cResult[83] = sum;
                                                                      class Ce {
                                                                        constructor(arg0) {
                                                                          item = navigation.item;
                                                                          index = navigation.index;
                                                                          type = item.type;
                                                                          tmp = navigation;
                                                                          tmp2 = closure_3;
                                                                          if (navigation(closure_3[48]).AppLauncherHomeListItemType.PLACEHOLDER === type) {
                                                                            tmp40 = closure_19;
                                                                            tmp41 = context;
                                                                            obj1 = { isFirstRow: null, isLastRow: null, style: null };
                                                                            num2 = 0;
                                                                            obj1.isFirstRow = 0 === index;
                                                                            tmp42 = list;
                                                                            num3 = 1;
                                                                            obj1.isLastRow = index === list.length - 1;
                                                                            obj15 = { height: null };
                                                                            tmp43 = closure_5;
                                                                            obj15.height = closure_5;
                                                                            obj1.style = obj15;
                                                                            return closure_19(context(tmp2[51]), obj1);
                                                                          } else if (tmp(tmp2[48]).AppLauncherHomeListItemType.SECTION_HEADER === type) {
                                                                            tmp38 = closure_19;
                                                                            tmp39 = closure_4;
                                                                            items = [, ];
                                                                            items[0] = closure_4.sectionHeader;
                                                                            num = 0;
                                                                            obj16 = null;
                                                                            if (0 !== index) {
                                                                              obj16 = { marginTop: 24 };
                                                                            }
                                                                            obj17 = { accessibilityRole: "header", variant: "text-lg/bold", color: "mobile-text-heading-primary", style: null, children: null };
                                                                            items[1] = obj16;
                                                                            obj17.style = items;
                                                                            obj17.children = item.section;
                                                                            return tmp38(tmp(tmp2[18]).Text, obj17);
                                                                          } else if (tmp(tmp2[48]).AppLauncherHomeListItemType.SHELF_ITEM === type) {
                                                                            tmp36 = closure_19;
                                                                            tmp37 = closure_30;
                                                                            obj18 = { section: null, onPress: null, isFirstRow: null, isLastRow: null };
                                                                            obj18.section = item.section;
                                                                            obj18.onPress = function onPress(shelfData) {
                                                                              closure_13({ shelfData, sectionName: item.sectionName });
                                                                            };
                                                                            ({ isFirstRow: obj10.isFirstRow, isLastRow: obj10.isLastRow } = item);
                                                                            return closure_19(closure_30, obj18, item.section.application.id);
                                                                          } else if (tmp(tmp2[48]).AppLauncherHomeListItemType.SHELF_ITEM_TUPLE === type) {
                                                                            obj19 = { context: null, sectionName: null, onPress: null, usesHandleActivityItemSelected: null, onActivityItemSelected: null, shelfItem1: null, shelfItem2: null, isLastTuple: null, entrypoint: null, containerWidth: null };
                                                                            tmp29 = context;
                                                                            obj19.context = context;
                                                                            tmp27 = closure_19;
                                                                            tmp28 = closure_31;
                                                                            obj19.sectionName = tmp(tmp2[44]).AppLauncherSectionName.ACTIVITIES;
                                                                            obj19.onPress = function onPress(shelfData) {
                                                                              const obj = { shelfData, sectionName: item.sectionName, navigates: null };
                                                                              let tmp2 = clickOnHomeActivityOpensAppDetails;
                                                                              if (!tmp2) {
                                                                                tmp2 = entrypoint !== AppLauncherTypes.AppLauncherEntrypoint.VOICE;
                                                                              }
                                                                              obj.navigates = tmp2;
                                                                              closure_13(obj);
                                                                            };
                                                                            tmp30 = closure_20;
                                                                            tmp31 = !closure_20;
                                                                            if (!closure_20) {
                                                                              tmp32 = entrypoint;
                                                                              tmp31 = entrypoint === tmp(tmp2[44]).AppLauncherEntrypoint.VOICE;
                                                                            }
                                                                            obj19.usesHandleActivityItemSelected = tmp31;
                                                                            tmp33 = onActivityItemSelected;
                                                                            obj19.onActivityItemSelected = onActivityItemSelected;
                                                                            ({ shelfItem1: obj9.shelfItem1, shelfItem2: obj9.shelfItem2, isLastTuple: obj9.isLastTuple } = item);
                                                                            tmp34 = entrypoint;
                                                                            obj19.entrypoint = entrypoint;
                                                                            tmp35 = width;
                                                                            obj19.containerWidth = width;
                                                                            return tmp27(tmp28, obj19, item.shelfItem1.application.id);
                                                                          } else if (tmp(tmp2[48]).AppLauncherHomeListItemType.RECOMMENDATION_TUPLE === type) {
                                                                            tmp22 = closure_19;
                                                                            tmp23 = closure_33;
                                                                            obj20 = { context: null, sectionName: null, onPress: null, items: null, isLastTuple: null, entrypoint: null, containerWidth: null };
                                                                            tmp24 = context;
                                                                            obj20.context = context;
                                                                            obj20.sectionName = item.sectionName;
                                                                            obj20.onPress = function onPress(application, sectionName) {
                                                                              return closure_1_19({ application, sectionName });
                                                                            };
                                                                            ({ items: obj8.items, isLastTuple: obj8.isLastTuple } = item);
                                                                            tmp25 = entrypoint;
                                                                            obj20.entrypoint = entrypoint;
                                                                            tmp26 = width;
                                                                            obj20.containerWidth = width;
                                                                            return closure_19(closure_33, obj20);
                                                                          } else if (tmp(tmp2[48]).AppLauncherHomeListItemType.APP === type) {
                                                                            tmp19 = closure_19;
                                                                            tmp20 = closure_29;
                                                                            obj21 = { section: null, onPress: null, isFirstRow: null, isLastRow: null, style: null };
                                                                            obj21.section = item.section;
                                                                            obj21.onPress = function onPress() {
                                                                              closure_12(item.section, AppLauncherTypes.AppLauncherSectionName.INSTALLED);
                                                                            };
                                                                            ({ isFirstRow: obj6.isFirstRow, isLastRow: obj6.isLastRow } = item);
                                                                            obj22 = { height: null };
                                                                            tmp21 = closure_5;
                                                                            obj22.height = closure_5;
                                                                            obj21.style = obj22;
                                                                            return closure_19(closure_29, obj21, item.section.id);
                                                                          } else if (tmp(tmp2[48]).AppLauncherHomeListItemType.RECOMMENDATION_SECTION_HEADER === type) {
                                                                            tmp17 = closure_19;
                                                                            tmp18 = closure_1_36;
                                                                            obj23 = { index: null, children: null };
                                                                            obj23.index = index;
                                                                            obj23.children = item.section;
                                                                            return closure_19(closure_1_36, obj23);
                                                                          } else if (tmp(tmp2[48]).AppLauncherHomeListItemType.RECOMMENDATION_BANNER_CARD === type) {
                                                                            tmp14 = closure_19;
                                                                            tmp15 = context;
                                                                            obj24 = { application: null, isFirst: null, isLast: null, onPress: null, isLandscape: null, showsPromoted: null, overrideImageUrl: null };
                                                                            obj24.application = item.item.application;
                                                                            ({ isFirst: obj4.isFirst, isLast: obj4.isLast } = item);
                                                                            obj24.onPress = function onPress() {
                                                                              return closure_19({ application: item.item.application, sectionName: item.sectionName });
                                                                            };
                                                                            tmp16 = closure_11;
                                                                            obj24.isLandscape = closure_11;
                                                                            ({ showsPromoted: obj4.showsPromoted, overrideImageUrl: obj4.overrideImageUrl } = item);
                                                                            return closure_19(context(tmp2[52]), obj24);
                                                                          } else if (tmp(tmp2[48]).AppLauncherHomeListItemType.RECOMMENDATION_APP === type) {
                                                                            tmp12 = closure_19;
                                                                            tmp13 = context;
                                                                            obj25 = { application: null, isFirstRow: null, isLastRow: null, onPress: null, showsPromoted: null };
                                                                            ({ application: obj3.application, isFirstRow: obj3.isFirstRow, isLastRow: obj3.isLastRow } = item);
                                                                            obj25.onPress = function onPress() {
                                                                              return closure_19({ application: item.application, sectionName: item.sectionName });
                                                                            };
                                                                            obj25.showsPromoted = item.showsPromoted;
                                                                            return closure_19(context(tmp2[53]), obj25, item.application.id);
                                                                          } else if (tmp(tmp2[48]).AppLauncherHomeListItemType.VIEW_ALL === type) {
                                                                            tmp10 = closure_19;
                                                                            tmp11 = context;
                                                                            obj26 = { title: null, onPress: null };
                                                                            obj26.title = item.title;
                                                                            obj26.onPress = function onPress() {
                                                                              const applications = item.applications;
                                                                              const mapped = applications.map((item) => item);
                                                                              const obj = AppLauncherNativeUtils;
                                                                              const result = obj.handleViewAllSelected({ location: ApplicationCommandTypes.ApplicationCommandTriggerLocations.APP_LAUNCHER_HOME, navigation, context, sectionName: item.sectionName, sectionOverallPosition: item.sectionOverallPosition, applications: mapped, sectionItemType: FrecencySection.SectionItemType.APPS, commands: [], sectionDescriptors: mapped.map((item) => item(closure_1_3[49]).getApplicationCommandSection(item)), title: item.title, promotedApplicationIds: item.promotedApplicationIds });
                                                                            };
                                                                            return closure_19(context(tmp2[54]), obj26);
                                                                          } else if (tmp(tmp2[48]).AppLauncherHomeListItemType.DIVIDER_ITEM === type) {
                                                                            tmp8 = closure_19;
                                                                            tmp9 = closure_1_35;
                                                                            return closure_19(closure_1_35, {});
                                                                          } else if (tmp(tmp2[48]).AppLauncherHomeListItemType.LEARN_MORE === type) {
                                                                            tmp4 = closure_19;
                                                                            tmp5 = context;
                                                                            obj = { visible: null };
                                                                            tmp7 = closure_3;
                                                                            tmp6 = context(tmp2[55]);
                                                                            obj.visible = closure_3.valueOf();
                                                                            return closure_19(tmp6, obj);
                                                                          } else {
                                                                            tmp3 = null;
                                                                            return null;
                                                                          }
                                                                        }
                                                                      }
                                                                    } else {
                                                                      class Fe {
                                                                        constructor() {
                                                                          obj = closure_0(closure_3[57]);
                                                                          obj1 = { source: entrypoint };
                                                                          trackWithMetadataResult = obj.trackWithMetadata(AnalyticEvents.APP_LAUNCHER_SEARCH_FOCUSED, obj1);
                                                                          return;
                                                                        }
                                                                      }
                                                                    }
                                                                    const _Symbol5 = Symbol;
                                                                    if (cResult[85] === Symbol.for("react.memo_cache_sentinel")) {
                                                                      class Fe {
                                                                        constructor() {
                                                                          obj = closure_0(closure_3[57]);
                                                                          obj1 = { source: entrypoint };
                                                                          trackWithMetadataResult = obj.trackWithMetadata(AnalyticEvents.APP_LAUNCHER_SEARCH_FOCUSED, obj1);
                                                                          return;
                                                                        }
                                                                      }
                                                                      cResult[85] = tmp79;
                                                                    } else {
                                                                      class Fe {
                                                                        constructor() {
                                                                          obj = closure_0(closure_3[57]);
                                                                          obj1 = { source: entrypoint };
                                                                          trackWithMetadataResult = obj.trackWithMetadata(AnalyticEvents.APP_LAUNCHER_SEARCH_FOCUSED, obj1);
                                                                          return;
                                                                        }
                                                                      }
                                                                    }
                                                                    class Ce {
                                                                      constructor(arg0) {
                                                                        item = navigation.item;
                                                                        index = navigation.index;
                                                                        type = item.type;
                                                                        tmp = navigation;
                                                                        tmp2 = closure_3;
                                                                        if (navigation(closure_3[48]).AppLauncherHomeListItemType.PLACEHOLDER === type) {
                                                                          tmp40 = closure_19;
                                                                          tmp41 = context;
                                                                          obj1 = { isFirstRow: null, isLastRow: null, style: null };
                                                                          num2 = 0;
                                                                          obj1.isFirstRow = 0 === index;
                                                                          tmp42 = list;
                                                                          num3 = 1;
                                                                          obj1.isLastRow = index === list.length - 1;
                                                                          obj15 = { height: null };
                                                                          tmp43 = closure_5;
                                                                          obj15.height = closure_5;
                                                                          obj1.style = obj15;
                                                                          return closure_19(context(tmp2[51]), obj1);
                                                                        } else if (tmp(tmp2[48]).AppLauncherHomeListItemType.SECTION_HEADER === type) {
                                                                          tmp38 = closure_19;
                                                                          tmp39 = closure_4;
                                                                          items = [, ];
                                                                          items[0] = closure_4.sectionHeader;
                                                                          num = 0;
                                                                          obj16 = null;
                                                                          if (0 !== index) {
                                                                            obj16 = { marginTop: 24 };
                                                                          }
                                                                          obj17 = { accessibilityRole: "header", variant: "text-lg/bold", color: "mobile-text-heading-primary", style: null, children: null };
                                                                          items[1] = obj16;
                                                                          obj17.style = items;
                                                                          obj17.children = item.section;
                                                                          return tmp38(tmp(tmp2[18]).Text, obj17);
                                                                        } else if (tmp(tmp2[48]).AppLauncherHomeListItemType.SHELF_ITEM === type) {
                                                                          tmp36 = closure_19;
                                                                          tmp37 = closure_30;
                                                                          obj18 = { section: null, onPress: null, isFirstRow: null, isLastRow: null };
                                                                          obj18.section = item.section;
                                                                          obj18.onPress = function onPress(shelfData) {
                                                                            closure_13({ shelfData, sectionName: item.sectionName });
                                                                          };
                                                                          ({ isFirstRow: obj10.isFirstRow, isLastRow: obj10.isLastRow } = item);
                                                                          return closure_19(closure_30, obj18, item.section.application.id);
                                                                        } else if (tmp(tmp2[48]).AppLauncherHomeListItemType.SHELF_ITEM_TUPLE === type) {
                                                                          obj19 = { context: null, sectionName: null, onPress: null, usesHandleActivityItemSelected: null, onActivityItemSelected: null, shelfItem1: null, shelfItem2: null, isLastTuple: null, entrypoint: null, containerWidth: null };
                                                                          tmp29 = context;
                                                                          obj19.context = context;
                                                                          tmp27 = closure_19;
                                                                          tmp28 = closure_31;
                                                                          obj19.sectionName = tmp(tmp2[44]).AppLauncherSectionName.ACTIVITIES;
                                                                          obj19.onPress = function onPress(shelfData) {
                                                                            const obj = { shelfData, sectionName: item.sectionName, navigates: null };
                                                                            let tmp2 = clickOnHomeActivityOpensAppDetails;
                                                                            if (!tmp2) {
                                                                              tmp2 = entrypoint !== AppLauncherTypes.AppLauncherEntrypoint.VOICE;
                                                                            }
                                                                            obj.navigates = tmp2;
                                                                            closure_13(obj);
                                                                          };
                                                                          tmp30 = closure_20;
                                                                          tmp31 = !closure_20;
                                                                          if (!closure_20) {
                                                                            tmp32 = entrypoint;
                                                                            tmp31 = entrypoint === tmp(tmp2[44]).AppLauncherEntrypoint.VOICE;
                                                                          }
                                                                          obj19.usesHandleActivityItemSelected = tmp31;
                                                                          tmp33 = onActivityItemSelected;
                                                                          obj19.onActivityItemSelected = onActivityItemSelected;
                                                                          ({ shelfItem1: obj9.shelfItem1, shelfItem2: obj9.shelfItem2, isLastTuple: obj9.isLastTuple } = item);
                                                                          tmp34 = entrypoint;
                                                                          obj19.entrypoint = entrypoint;
                                                                          tmp35 = width;
                                                                          obj19.containerWidth = width;
                                                                          return tmp27(tmp28, obj19, item.shelfItem1.application.id);
                                                                        } else if (tmp(tmp2[48]).AppLauncherHomeListItemType.RECOMMENDATION_TUPLE === type) {
                                                                          tmp22 = closure_19;
                                                                          tmp23 = closure_33;
                                                                          obj20 = { context: null, sectionName: null, onPress: null, items: null, isLastTuple: null, entrypoint: null, containerWidth: null };
                                                                          tmp24 = context;
                                                                          obj20.context = context;
                                                                          obj20.sectionName = item.sectionName;
                                                                          obj20.onPress = function onPress(application, sectionName) {
                                                                            return closure_1_19({ application, sectionName });
                                                                          };
                                                                          ({ items: obj8.items, isLastTuple: obj8.isLastTuple } = item);
                                                                          tmp25 = entrypoint;
                                                                          obj20.entrypoint = entrypoint;
                                                                          tmp26 = width;
                                                                          obj20.containerWidth = width;
                                                                          return closure_19(closure_33, obj20);
                                                                        } else if (tmp(tmp2[48]).AppLauncherHomeListItemType.APP === type) {
                                                                          tmp19 = closure_19;
                                                                          tmp20 = closure_29;
                                                                          obj21 = { section: null, onPress: null, isFirstRow: null, isLastRow: null, style: null };
                                                                          obj21.section = item.section;
                                                                          obj21.onPress = function onPress() {
                                                                            closure_12(item.section, AppLauncherTypes.AppLauncherSectionName.INSTALLED);
                                                                          };
                                                                          ({ isFirstRow: obj6.isFirstRow, isLastRow: obj6.isLastRow } = item);
                                                                          obj22 = { height: null };
                                                                          tmp21 = closure_5;
                                                                          obj22.height = closure_5;
                                                                          obj21.style = obj22;
                                                                          return closure_19(closure_29, obj21, item.section.id);
                                                                        } else if (tmp(tmp2[48]).AppLauncherHomeListItemType.RECOMMENDATION_SECTION_HEADER === type) {
                                                                          tmp17 = closure_19;
                                                                          tmp18 = closure_1_36;
                                                                          obj23 = { index: null, children: null };
                                                                          obj23.index = index;
                                                                          obj23.children = item.section;
                                                                          return closure_19(closure_1_36, obj23);
                                                                        } else if (tmp(tmp2[48]).AppLauncherHomeListItemType.RECOMMENDATION_BANNER_CARD === type) {
                                                                          tmp14 = closure_19;
                                                                          tmp15 = context;
                                                                          obj24 = { application: null, isFirst: null, isLast: null, onPress: null, isLandscape: null, showsPromoted: null, overrideImageUrl: null };
                                                                          obj24.application = item.item.application;
                                                                          ({ isFirst: obj4.isFirst, isLast: obj4.isLast } = item);
                                                                          obj24.onPress = function onPress() {
                                                                            return closure_19({ application: item.item.application, sectionName: item.sectionName });
                                                                          };
                                                                          tmp16 = closure_11;
                                                                          obj24.isLandscape = closure_11;
                                                                          ({ showsPromoted: obj4.showsPromoted, overrideImageUrl: obj4.overrideImageUrl } = item);
                                                                          return closure_19(context(tmp2[52]), obj24);
                                                                        } else if (tmp(tmp2[48]).AppLauncherHomeListItemType.RECOMMENDATION_APP === type) {
                                                                          tmp12 = closure_19;
                                                                          tmp13 = context;
                                                                          obj25 = { application: null, isFirstRow: null, isLastRow: null, onPress: null, showsPromoted: null };
                                                                          ({ application: obj3.application, isFirstRow: obj3.isFirstRow, isLastRow: obj3.isLastRow } = item);
                                                                          obj25.onPress = function onPress() {
                                                                            return closure_19({ application: item.application, sectionName: item.sectionName });
                                                                          };
                                                                          obj25.showsPromoted = item.showsPromoted;
                                                                          return closure_19(context(tmp2[53]), obj25, item.application.id);
                                                                        } else if (tmp(tmp2[48]).AppLauncherHomeListItemType.VIEW_ALL === type) {
                                                                          tmp10 = closure_19;
                                                                          tmp11 = context;
                                                                          obj26 = { title: null, onPress: null };
                                                                          obj26.title = item.title;
                                                                          obj26.onPress = function onPress() {
                                                                            const applications = item.applications;
                                                                            const mapped = applications.map((item) => item);
                                                                            const obj = AppLauncherNativeUtils;
                                                                            const result = obj.handleViewAllSelected({ location: ApplicationCommandTypes.ApplicationCommandTriggerLocations.APP_LAUNCHER_HOME, navigation, context, sectionName: item.sectionName, sectionOverallPosition: item.sectionOverallPosition, applications: mapped, sectionItemType: FrecencySection.SectionItemType.APPS, commands: [], sectionDescriptors: mapped.map((item) => item(closure_1_3[49]).getApplicationCommandSection(item)), title: item.title, promotedApplicationIds: item.promotedApplicationIds });
                                                                          };
                                                                          return closure_19(context(tmp2[54]), obj26);
                                                                        } else if (tmp(tmp2[48]).AppLauncherHomeListItemType.DIVIDER_ITEM === type) {
                                                                          tmp8 = closure_19;
                                                                          tmp9 = closure_1_35;
                                                                          return closure_19(closure_1_35, {});
                                                                        } else if (tmp(tmp2[48]).AppLauncherHomeListItemType.LEARN_MORE === type) {
                                                                          tmp4 = closure_19;
                                                                          tmp5 = context;
                                                                          obj = { visible: null };
                                                                          tmp7 = closure_3;
                                                                          tmp6 = context(tmp2[55]);
                                                                          obj.visible = closure_3.valueOf();
                                                                          return closure_19(tmp6, obj);
                                                                        } else {
                                                                          tmp3 = null;
                                                                          return null;
                                                                        }
                                                                      }
                                                                    }
                                                                    if (cResult[88] !== tmp80) {
                                                                      class Ct {
                                                                        constructor(arg0) {
                                                                          nativeEvent = navigation.nativeEvent;
                                                                          size = { width: nativeEvent.layoutMeasurement.width, height: nativeEvent.layoutMeasurement.height, offset: nativeEvent.contentOffset.y, contentWidth: nativeEvent.contentSize.width, contentHeight: nativeEvent.contentSize.height };
                                                                          tmp = closure_33(size);
                                                                          return;
                                                                        }
                                                                      }
                                                                      cResult[88] = tmp80;
                                                                      cResult[89] = Ct;
                                                                      class Ce {
                                                                        constructor(arg0) {
                                                                          item = navigation.item;
                                                                          index = navigation.index;
                                                                          type = item.type;
                                                                          tmp = navigation;
                                                                          tmp2 = closure_3;
                                                                          if (navigation(closure_3[48]).AppLauncherHomeListItemType.PLACEHOLDER === type) {
                                                                            tmp40 = closure_19;
                                                                            tmp41 = context;
                                                                            obj1 = { isFirstRow: null, isLastRow: null, style: null };
                                                                            num2 = 0;
                                                                            obj1.isFirstRow = 0 === index;
                                                                            tmp42 = list;
                                                                            num3 = 1;
                                                                            obj1.isLastRow = index === list.length - 1;
                                                                            obj15 = { height: null };
                                                                            tmp43 = closure_5;
                                                                            obj15.height = closure_5;
                                                                            obj1.style = obj15;
                                                                            return closure_19(context(tmp2[51]), obj1);
                                                                          } else if (tmp(tmp2[48]).AppLauncherHomeListItemType.SECTION_HEADER === type) {
                                                                            tmp38 = closure_19;
                                                                            tmp39 = closure_4;
                                                                            items = [, ];
                                                                            items[0] = closure_4.sectionHeader;
                                                                            num = 0;
                                                                            obj16 = null;
                                                                            if (0 !== index) {
                                                                              obj16 = { marginTop: 24 };
                                                                            }
                                                                            obj17 = { accessibilityRole: "header", variant: "text-lg/bold", color: "mobile-text-heading-primary", style: null, children: null };
                                                                            items[1] = obj16;
                                                                            obj17.style = items;
                                                                            obj17.children = item.section;
                                                                            return tmp38(tmp(tmp2[18]).Text, obj17);
                                                                          } else if (tmp(tmp2[48]).AppLauncherHomeListItemType.SHELF_ITEM === type) {
                                                                            tmp36 = closure_19;
                                                                            tmp37 = closure_30;
                                                                            obj18 = { section: null, onPress: null, isFirstRow: null, isLastRow: null };
                                                                            obj18.section = item.section;
                                                                            obj18.onPress = function onPress(shelfData) {
                                                                              closure_13({ shelfData, sectionName: item.sectionName });
                                                                            };
                                                                            ({ isFirstRow: obj10.isFirstRow, isLastRow: obj10.isLastRow } = item);
                                                                            return closure_19(closure_30, obj18, item.section.application.id);
                                                                          } else if (tmp(tmp2[48]).AppLauncherHomeListItemType.SHELF_ITEM_TUPLE === type) {
                                                                            obj19 = { context: null, sectionName: null, onPress: null, usesHandleActivityItemSelected: null, onActivityItemSelected: null, shelfItem1: null, shelfItem2: null, isLastTuple: null, entrypoint: null, containerWidth: null };
                                                                            tmp29 = context;
                                                                            obj19.context = context;
                                                                            tmp27 = closure_19;
                                                                            tmp28 = closure_31;
                                                                            obj19.sectionName = tmp(tmp2[44]).AppLauncherSectionName.ACTIVITIES;
                                                                            obj19.onPress = function onPress(shelfData) {
                                                                              const obj = { shelfData, sectionName: item.sectionName, navigates: null };
                                                                              let tmp2 = clickOnHomeActivityOpensAppDetails;
                                                                              if (!tmp2) {
                                                                                tmp2 = entrypoint !== AppLauncherTypes.AppLauncherEntrypoint.VOICE;
                                                                              }
                                                                              obj.navigates = tmp2;
                                                                              closure_13(obj);
                                                                            };
                                                                            tmp30 = closure_20;
                                                                            tmp31 = !closure_20;
                                                                            if (!closure_20) {
                                                                              tmp32 = entrypoint;
                                                                              tmp31 = entrypoint === tmp(tmp2[44]).AppLauncherEntrypoint.VOICE;
                                                                            }
                                                                            obj19.usesHandleActivityItemSelected = tmp31;
                                                                            tmp33 = onActivityItemSelected;
                                                                            obj19.onActivityItemSelected = onActivityItemSelected;
                                                                            ({ shelfItem1: obj9.shelfItem1, shelfItem2: obj9.shelfItem2, isLastTuple: obj9.isLastTuple } = item);
                                                                            tmp34 = entrypoint;
                                                                            obj19.entrypoint = entrypoint;
                                                                            tmp35 = width;
                                                                            obj19.containerWidth = width;
                                                                            return tmp27(tmp28, obj19, item.shelfItem1.application.id);
                                                                          } else if (tmp(tmp2[48]).AppLauncherHomeListItemType.RECOMMENDATION_TUPLE === type) {
                                                                            tmp22 = closure_19;
                                                                            tmp23 = closure_33;
                                                                            obj20 = { context: null, sectionName: null, onPress: null, items: null, isLastTuple: null, entrypoint: null, containerWidth: null };
                                                                            tmp24 = context;
                                                                            obj20.context = context;
                                                                            obj20.sectionName = item.sectionName;
                                                                            obj20.onPress = function onPress(application, sectionName) {
                                                                              return closure_1_19({ application, sectionName });
                                                                            };
                                                                            ({ items: obj8.items, isLastTuple: obj8.isLastTuple } = item);
                                                                            tmp25 = entrypoint;
                                                                            obj20.entrypoint = entrypoint;
                                                                            tmp26 = width;
                                                                            obj20.containerWidth = width;
                                                                            return closure_19(closure_33, obj20);
                                                                          } else if (tmp(tmp2[48]).AppLauncherHomeListItemType.APP === type) {
                                                                            tmp19 = closure_19;
                                                                            tmp20 = closure_29;
                                                                            obj21 = { section: null, onPress: null, isFirstRow: null, isLastRow: null, style: null };
                                                                            obj21.section = item.section;
                                                                            obj21.onPress = function onPress() {
                                                                              closure_12(item.section, AppLauncherTypes.AppLauncherSectionName.INSTALLED);
                                                                            };
                                                                            ({ isFirstRow: obj6.isFirstRow, isLastRow: obj6.isLastRow } = item);
                                                                            obj22 = { height: null };
                                                                            tmp21 = closure_5;
                                                                            obj22.height = closure_5;
                                                                            obj21.style = obj22;
                                                                            return closure_19(closure_29, obj21, item.section.id);
                                                                          } else if (tmp(tmp2[48]).AppLauncherHomeListItemType.RECOMMENDATION_SECTION_HEADER === type) {
                                                                            tmp17 = closure_19;
                                                                            tmp18 = closure_1_36;
                                                                            obj23 = { index: null, children: null };
                                                                            obj23.index = index;
                                                                            obj23.children = item.section;
                                                                            return closure_19(closure_1_36, obj23);
                                                                          } else if (tmp(tmp2[48]).AppLauncherHomeListItemType.RECOMMENDATION_BANNER_CARD === type) {
                                                                            tmp14 = closure_19;
                                                                            tmp15 = context;
                                                                            obj24 = { application: null, isFirst: null, isLast: null, onPress: null, isLandscape: null, showsPromoted: null, overrideImageUrl: null };
                                                                            obj24.application = item.item.application;
                                                                            ({ isFirst: obj4.isFirst, isLast: obj4.isLast } = item);
                                                                            obj24.onPress = function onPress() {
                                                                              return closure_19({ application: item.item.application, sectionName: item.sectionName });
                                                                            };
                                                                            tmp16 = closure_11;
                                                                            obj24.isLandscape = closure_11;
                                                                            ({ showsPromoted: obj4.showsPromoted, overrideImageUrl: obj4.overrideImageUrl } = item);
                                                                            return closure_19(context(tmp2[52]), obj24);
                                                                          } else if (tmp(tmp2[48]).AppLauncherHomeListItemType.RECOMMENDATION_APP === type) {
                                                                            tmp12 = closure_19;
                                                                            tmp13 = context;
                                                                            obj25 = { application: null, isFirstRow: null, isLastRow: null, onPress: null, showsPromoted: null };
                                                                            ({ application: obj3.application, isFirstRow: obj3.isFirstRow, isLastRow: obj3.isLastRow } = item);
                                                                            obj25.onPress = function onPress() {
                                                                              return closure_19({ application: item.application, sectionName: item.sectionName });
                                                                            };
                                                                            obj25.showsPromoted = item.showsPromoted;
                                                                            return closure_19(context(tmp2[53]), obj25, item.application.id);
                                                                          } else if (tmp(tmp2[48]).AppLauncherHomeListItemType.VIEW_ALL === type) {
                                                                            tmp10 = closure_19;
                                                                            tmp11 = context;
                                                                            obj26 = { title: null, onPress: null };
                                                                            obj26.title = item.title;
                                                                            obj26.onPress = function onPress() {
                                                                              const applications = item.applications;
                                                                              const mapped = applications.map((item) => item);
                                                                              const obj = AppLauncherNativeUtils;
                                                                              const result = obj.handleViewAllSelected({ location: ApplicationCommandTypes.ApplicationCommandTriggerLocations.APP_LAUNCHER_HOME, navigation, context, sectionName: item.sectionName, sectionOverallPosition: item.sectionOverallPosition, applications: mapped, sectionItemType: FrecencySection.SectionItemType.APPS, commands: [], sectionDescriptors: mapped.map((item) => item(closure_1_3[49]).getApplicationCommandSection(item)), title: item.title, promotedApplicationIds: item.promotedApplicationIds });
                                                                            };
                                                                            return closure_19(context(tmp2[54]), obj26);
                                                                          } else if (tmp(tmp2[48]).AppLauncherHomeListItemType.DIVIDER_ITEM === type) {
                                                                            tmp8 = closure_19;
                                                                            tmp9 = closure_1_35;
                                                                            return closure_19(closure_1_35, {});
                                                                          } else if (tmp(tmp2[48]).AppLauncherHomeListItemType.LEARN_MORE === type) {
                                                                            tmp4 = closure_19;
                                                                            tmp5 = context;
                                                                            obj = { visible: null };
                                                                            tmp7 = closure_3;
                                                                            tmp6 = context(tmp2[55]);
                                                                            obj.visible = closure_3.valueOf();
                                                                            return closure_19(tmp6, obj);
                                                                          } else {
                                                                            tmp3 = null;
                                                                            return null;
                                                                          }
                                                                        }
                                                                      }
                                                                    } else {
                                                                      class Ct {
                                                                        constructor(arg0) {
                                                                          nativeEvent = navigation.nativeEvent;
                                                                          size = { width: nativeEvent.layoutMeasurement.width, height: nativeEvent.layoutMeasurement.height, offset: nativeEvent.contentOffset.y, contentWidth: nativeEvent.contentSize.width, contentHeight: nativeEvent.contentSize.height };
                                                                          tmp = closure_33(size);
                                                                          return;
                                                                        }
                                                                      }
                                                                    }
                                                                    if (cResult[90] !== tmp80) {
                                                                      class Ct {
                                                                        constructor(arg0) {
                                                                          nativeEvent = navigation.nativeEvent;
                                                                          size = { width: nativeEvent.layoutMeasurement.width, height: nativeEvent.layoutMeasurement.height, offset: nativeEvent.contentOffset.y, contentWidth: nativeEvent.contentSize.width, contentHeight: nativeEvent.contentSize.height };
                                                                          tmp = closure_33(size);
                                                                          return;
                                                                        }
                                                                      }
                                                                      tmp82[0] = tmp80;
                                                                      cResult[90] = tmp80;
                                                                      class Ce {
                                                                        constructor(arg0) {
                                                                          item = navigation.item;
                                                                          index = navigation.index;
                                                                          type = item.type;
                                                                          tmp = navigation;
                                                                          tmp2 = closure_3;
                                                                          if (navigation(closure_3[48]).AppLauncherHomeListItemType.PLACEHOLDER === type) {
                                                                            tmp40 = closure_19;
                                                                            tmp41 = context;
                                                                            obj1 = { isFirstRow: null, isLastRow: null, style: null };
                                                                            num2 = 0;
                                                                            obj1.isFirstRow = 0 === index;
                                                                            tmp42 = list;
                                                                            num3 = 1;
                                                                            obj1.isLastRow = index === list.length - 1;
                                                                            obj15 = { height: null };
                                                                            tmp43 = closure_5;
                                                                            obj15.height = closure_5;
                                                                            obj1.style = obj15;
                                                                            return closure_19(context(tmp2[51]), obj1);
                                                                          } else if (tmp(tmp2[48]).AppLauncherHomeListItemType.SECTION_HEADER === type) {
                                                                            tmp38 = closure_19;
                                                                            tmp39 = closure_4;
                                                                            items = [, ];
                                                                            items[0] = closure_4.sectionHeader;
                                                                            num = 0;
                                                                            obj16 = null;
                                                                            if (0 !== index) {
                                                                              obj16 = { marginTop: 24 };
                                                                            }
                                                                            obj17 = { accessibilityRole: "header", variant: "text-lg/bold", color: "mobile-text-heading-primary", style: null, children: null };
                                                                            items[1] = obj16;
                                                                            obj17.style = items;
                                                                            obj17.children = item.section;
                                                                            return tmp38(tmp(tmp2[18]).Text, obj17);
                                                                          } else if (tmp(tmp2[48]).AppLauncherHomeListItemType.SHELF_ITEM === type) {
                                                                            tmp36 = closure_19;
                                                                            tmp37 = closure_30;
                                                                            obj18 = { section: null, onPress: null, isFirstRow: null, isLastRow: null };
                                                                            obj18.section = item.section;
                                                                            obj18.onPress = function onPress(shelfData) {
                                                                              closure_13({ shelfData, sectionName: item.sectionName });
                                                                            };
                                                                            ({ isFirstRow: obj10.isFirstRow, isLastRow: obj10.isLastRow } = item);
                                                                            return closure_19(closure_30, obj18, item.section.application.id);
                                                                          } else if (tmp(tmp2[48]).AppLauncherHomeListItemType.SHELF_ITEM_TUPLE === type) {
                                                                            obj19 = { context: null, sectionName: null, onPress: null, usesHandleActivityItemSelected: null, onActivityItemSelected: null, shelfItem1: null, shelfItem2: null, isLastTuple: null, entrypoint: null, containerWidth: null };
                                                                            tmp29 = context;
                                                                            obj19.context = context;
                                                                            tmp27 = closure_19;
                                                                            tmp28 = closure_31;
                                                                            obj19.sectionName = tmp(tmp2[44]).AppLauncherSectionName.ACTIVITIES;
                                                                            obj19.onPress = function onPress(shelfData) {
                                                                              const obj = { shelfData, sectionName: item.sectionName, navigates: null };
                                                                              let tmp2 = clickOnHomeActivityOpensAppDetails;
                                                                              if (!tmp2) {
                                                                                tmp2 = entrypoint !== AppLauncherTypes.AppLauncherEntrypoint.VOICE;
                                                                              }
                                                                              obj.navigates = tmp2;
                                                                              closure_13(obj);
                                                                            };
                                                                            tmp30 = closure_20;
                                                                            tmp31 = !closure_20;
                                                                            if (!closure_20) {
                                                                              tmp32 = entrypoint;
                                                                              tmp31 = entrypoint === tmp(tmp2[44]).AppLauncherEntrypoint.VOICE;
                                                                            }
                                                                            obj19.usesHandleActivityItemSelected = tmp31;
                                                                            tmp33 = onActivityItemSelected;
                                                                            obj19.onActivityItemSelected = onActivityItemSelected;
                                                                            ({ shelfItem1: obj9.shelfItem1, shelfItem2: obj9.shelfItem2, isLastTuple: obj9.isLastTuple } = item);
                                                                            tmp34 = entrypoint;
                                                                            obj19.entrypoint = entrypoint;
                                                                            tmp35 = width;
                                                                            obj19.containerWidth = width;
                                                                            return tmp27(tmp28, obj19, item.shelfItem1.application.id);
                                                                          } else if (tmp(tmp2[48]).AppLauncherHomeListItemType.RECOMMENDATION_TUPLE === type) {
                                                                            tmp22 = closure_19;
                                                                            tmp23 = closure_33;
                                                                            obj20 = { context: null, sectionName: null, onPress: null, items: null, isLastTuple: null, entrypoint: null, containerWidth: null };
                                                                            tmp24 = context;
                                                                            obj20.context = context;
                                                                            obj20.sectionName = item.sectionName;
                                                                            obj20.onPress = function onPress(application, sectionName) {
                                                                              return closure_1_19({ application, sectionName });
                                                                            };
                                                                            ({ items: obj8.items, isLastTuple: obj8.isLastTuple } = item);
                                                                            tmp25 = entrypoint;
                                                                            obj20.entrypoint = entrypoint;
                                                                            tmp26 = width;
                                                                            obj20.containerWidth = width;
                                                                            return closure_19(closure_33, obj20);
                                                                          } else if (tmp(tmp2[48]).AppLauncherHomeListItemType.APP === type) {
                                                                            tmp19 = closure_19;
                                                                            tmp20 = closure_29;
                                                                            obj21 = { section: null, onPress: null, isFirstRow: null, isLastRow: null, style: null };
                                                                            obj21.section = item.section;
                                                                            obj21.onPress = function onPress() {
                                                                              closure_12(item.section, AppLauncherTypes.AppLauncherSectionName.INSTALLED);
                                                                            };
                                                                            ({ isFirstRow: obj6.isFirstRow, isLastRow: obj6.isLastRow } = item);
                                                                            obj22 = { height: null };
                                                                            tmp21 = closure_5;
                                                                            obj22.height = closure_5;
                                                                            obj21.style = obj22;
                                                                            return closure_19(closure_29, obj21, item.section.id);
                                                                          } else if (tmp(tmp2[48]).AppLauncherHomeListItemType.RECOMMENDATION_SECTION_HEADER === type) {
                                                                            tmp17 = closure_19;
                                                                            tmp18 = closure_1_36;
                                                                            obj23 = { index: null, children: null };
                                                                            obj23.index = index;
                                                                            obj23.children = item.section;
                                                                            return closure_19(closure_1_36, obj23);
                                                                          } else if (tmp(tmp2[48]).AppLauncherHomeListItemType.RECOMMENDATION_BANNER_CARD === type) {
                                                                            tmp14 = closure_19;
                                                                            tmp15 = context;
                                                                            obj24 = { application: null, isFirst: null, isLast: null, onPress: null, isLandscape: null, showsPromoted: null, overrideImageUrl: null };
                                                                            obj24.application = item.item.application;
                                                                            ({ isFirst: obj4.isFirst, isLast: obj4.isLast } = item);
                                                                            obj24.onPress = function onPress() {
                                                                              return closure_19({ application: item.item.application, sectionName: item.sectionName });
                                                                            };
                                                                            tmp16 = closure_11;
                                                                            obj24.isLandscape = closure_11;
                                                                            ({ showsPromoted: obj4.showsPromoted, overrideImageUrl: obj4.overrideImageUrl } = item);
                                                                            return closure_19(context(tmp2[52]), obj24);
                                                                          } else if (tmp(tmp2[48]).AppLauncherHomeListItemType.RECOMMENDATION_APP === type) {
                                                                            tmp12 = closure_19;
                                                                            tmp13 = context;
                                                                            obj25 = { application: null, isFirstRow: null, isLastRow: null, onPress: null, showsPromoted: null };
                                                                            ({ application: obj3.application, isFirstRow: obj3.isFirstRow, isLastRow: obj3.isLastRow } = item);
                                                                            obj25.onPress = function onPress() {
                                                                              return closure_19({ application: item.application, sectionName: item.sectionName });
                                                                            };
                                                                            obj25.showsPromoted = item.showsPromoted;
                                                                            return closure_19(context(tmp2[53]), obj25, item.application.id);
                                                                          } else if (tmp(tmp2[48]).AppLauncherHomeListItemType.VIEW_ALL === type) {
                                                                            tmp10 = closure_19;
                                                                            tmp11 = context;
                                                                            obj26 = { title: null, onPress: null };
                                                                            obj26.title = item.title;
                                                                            obj26.onPress = function onPress() {
                                                                              const applications = item.applications;
                                                                              const mapped = applications.map((item) => item);
                                                                              const obj = AppLauncherNativeUtils;
                                                                              const result = obj.handleViewAllSelected({ location: ApplicationCommandTypes.ApplicationCommandTriggerLocations.APP_LAUNCHER_HOME, navigation, context, sectionName: item.sectionName, sectionOverallPosition: item.sectionOverallPosition, applications: mapped, sectionItemType: FrecencySection.SectionItemType.APPS, commands: [], sectionDescriptors: mapped.map((item) => item(closure_1_3[49]).getApplicationCommandSection(item)), title: item.title, promotedApplicationIds: item.promotedApplicationIds });
                                                                            };
                                                                            return closure_19(context(tmp2[54]), obj26);
                                                                          } else if (tmp(tmp2[48]).AppLauncherHomeListItemType.DIVIDER_ITEM === type) {
                                                                            tmp8 = closure_19;
                                                                            tmp9 = closure_1_35;
                                                                            return closure_19(closure_1_35, {});
                                                                          } else if (tmp(tmp2[48]).AppLauncherHomeListItemType.LEARN_MORE === type) {
                                                                            tmp4 = closure_19;
                                                                            tmp5 = context;
                                                                            obj = { visible: null };
                                                                            tmp7 = closure_3;
                                                                            tmp6 = context(tmp2[55]);
                                                                            obj.visible = closure_3.valueOf();
                                                                            return closure_19(tmp6, obj);
                                                                          } else {
                                                                            tmp3 = null;
                                                                            return null;
                                                                          }
                                                                        }
                                                                      }
                                                                    } else {
                                                                      class Ct {
                                                                        constructor(arg0) {
                                                                          nativeEvent = navigation.nativeEvent;
                                                                          size = { width: nativeEvent.layoutMeasurement.width, height: nativeEvent.layoutMeasurement.height, offset: nativeEvent.contentOffset.y, contentWidth: nativeEvent.contentSize.width, contentHeight: nativeEvent.contentSize.height };
                                                                          tmp = closure_33(size);
                                                                          return;
                                                                        }
                                                                      }
                                                                    }
                                                                    const appLauncherFlashListProps = tmp(11726).useAppLauncherFlashListProps(tmp82);
                                                                    const _Symbol6 = Symbol;
                                                                    if (cResult[92] === Symbol.for("react.memo_cache_sentinel")) {
                                                                      class Ct {
                                                                        constructor(arg0) {
                                                                          nativeEvent = navigation.nativeEvent;
                                                                          size = { width: nativeEvent.layoutMeasurement.width, height: nativeEvent.layoutMeasurement.height, offset: nativeEvent.contentOffset.y, contentWidth: nativeEvent.contentSize.width, contentHeight: nativeEvent.contentSize.height };
                                                                          tmp = closure_33(size);
                                                                          return;
                                                                        }
                                                                      }
                                                                      cResult[92] = tmp85;
                                                                    } else {
                                                                      class Ct {
                                                                        constructor(arg0) {
                                                                          nativeEvent = navigation.nativeEvent;
                                                                          size = { width: nativeEvent.layoutMeasurement.width, height: nativeEvent.layoutMeasurement.height, offset: nativeEvent.contentOffset.y, contentWidth: nativeEvent.contentSize.width, contentHeight: nativeEvent.contentSize.height };
                                                                          tmp = closure_33(size);
                                                                          return;
                                                                        }
                                                                      }
                                                                    }
                                                                    if (cResult[93] !== handleViewableItemsChanged) {
                                                                      class Ct {
                                                                        constructor(arg0) {
                                                                          nativeEvent = navigation.nativeEvent;
                                                                          size = { width: nativeEvent.layoutMeasurement.width, height: nativeEvent.layoutMeasurement.height, offset: nativeEvent.contentOffset.y, contentWidth: nativeEvent.contentSize.width, contentHeight: nativeEvent.contentSize.height };
                                                                          tmp = closure_33(size);
                                                                          return;
                                                                        }
                                                                      }
                                                                      tmp87[0] = tmp85;
                                                                      tmp87[1] = handleViewableItemsChanged;
                                                                      cResult[93] = handleViewableItemsChanged;
                                                                      class Ce {
                                                                        constructor(arg0) {
                                                                          item = navigation.item;
                                                                          index = navigation.index;
                                                                          type = item.type;
                                                                          tmp = navigation;
                                                                          tmp2 = closure_3;
                                                                          if (navigation(closure_3[48]).AppLauncherHomeListItemType.PLACEHOLDER === type) {
                                                                            tmp40 = closure_19;
                                                                            tmp41 = context;
                                                                            obj1 = { isFirstRow: null, isLastRow: null, style: null };
                                                                            num2 = 0;
                                                                            obj1.isFirstRow = 0 === index;
                                                                            tmp42 = list;
                                                                            num3 = 1;
                                                                            obj1.isLastRow = index === list.length - 1;
                                                                            obj15 = { height: null };
                                                                            tmp43 = closure_5;
                                                                            obj15.height = closure_5;
                                                                            obj1.style = obj15;
                                                                            return closure_19(context(tmp2[51]), obj1);
                                                                          } else if (tmp(tmp2[48]).AppLauncherHomeListItemType.SECTION_HEADER === type) {
                                                                            tmp38 = closure_19;
                                                                            tmp39 = closure_4;
                                                                            items = [, ];
                                                                            items[0] = closure_4.sectionHeader;
                                                                            num = 0;
                                                                            obj16 = null;
                                                                            if (0 !== index) {
                                                                              obj16 = { marginTop: 24 };
                                                                            }
                                                                            obj17 = { accessibilityRole: "header", variant: "text-lg/bold", color: "mobile-text-heading-primary", style: null, children: null };
                                                                            items[1] = obj16;
                                                                            obj17.style = items;
                                                                            obj17.children = item.section;
                                                                            return tmp38(tmp(tmp2[18]).Text, obj17);
                                                                          } else if (tmp(tmp2[48]).AppLauncherHomeListItemType.SHELF_ITEM === type) {
                                                                            tmp36 = closure_19;
                                                                            tmp37 = closure_30;
                                                                            obj18 = { section: null, onPress: null, isFirstRow: null, isLastRow: null };
                                                                            obj18.section = item.section;
                                                                            obj18.onPress = function onPress(shelfData) {
                                                                              closure_13({ shelfData, sectionName: item.sectionName });
                                                                            };
                                                                            ({ isFirstRow: obj10.isFirstRow, isLastRow: obj10.isLastRow } = item);
                                                                            return closure_19(closure_30, obj18, item.section.application.id);
                                                                          } else if (tmp(tmp2[48]).AppLauncherHomeListItemType.SHELF_ITEM_TUPLE === type) {
                                                                            obj19 = { context: null, sectionName: null, onPress: null, usesHandleActivityItemSelected: null, onActivityItemSelected: null, shelfItem1: null, shelfItem2: null, isLastTuple: null, entrypoint: null, containerWidth: null };
                                                                            tmp29 = context;
                                                                            obj19.context = context;
                                                                            tmp27 = closure_19;
                                                                            tmp28 = closure_31;
                                                                            obj19.sectionName = tmp(tmp2[44]).AppLauncherSectionName.ACTIVITIES;
                                                                            obj19.onPress = function onPress(shelfData) {
                                                                              const obj = { shelfData, sectionName: item.sectionName, navigates: null };
                                                                              let tmp2 = clickOnHomeActivityOpensAppDetails;
                                                                              if (!tmp2) {
                                                                                tmp2 = entrypoint !== AppLauncherTypes.AppLauncherEntrypoint.VOICE;
                                                                              }
                                                                              obj.navigates = tmp2;
                                                                              closure_13(obj);
                                                                            };
                                                                            tmp30 = closure_20;
                                                                            tmp31 = !closure_20;
                                                                            if (!closure_20) {
                                                                              tmp32 = entrypoint;
                                                                              tmp31 = entrypoint === tmp(tmp2[44]).AppLauncherEntrypoint.VOICE;
                                                                            }
                                                                            obj19.usesHandleActivityItemSelected = tmp31;
                                                                            tmp33 = onActivityItemSelected;
                                                                            obj19.onActivityItemSelected = onActivityItemSelected;
                                                                            ({ shelfItem1: obj9.shelfItem1, shelfItem2: obj9.shelfItem2, isLastTuple: obj9.isLastTuple } = item);
                                                                            tmp34 = entrypoint;
                                                                            obj19.entrypoint = entrypoint;
                                                                            tmp35 = width;
                                                                            obj19.containerWidth = width;
                                                                            return tmp27(tmp28, obj19, item.shelfItem1.application.id);
                                                                          } else if (tmp(tmp2[48]).AppLauncherHomeListItemType.RECOMMENDATION_TUPLE === type) {
                                                                            tmp22 = closure_19;
                                                                            tmp23 = closure_33;
                                                                            obj20 = { context: null, sectionName: null, onPress: null, items: null, isLastTuple: null, entrypoint: null, containerWidth: null };
                                                                            tmp24 = context;
                                                                            obj20.context = context;
                                                                            obj20.sectionName = item.sectionName;
                                                                            obj20.onPress = function onPress(application, sectionName) {
                                                                              return closure_1_19({ application, sectionName });
                                                                            };
                                                                            ({ items: obj8.items, isLastTuple: obj8.isLastTuple } = item);
                                                                            tmp25 = entrypoint;
                                                                            obj20.entrypoint = entrypoint;
                                                                            tmp26 = width;
                                                                            obj20.containerWidth = width;
                                                                            return closure_19(closure_33, obj20);
                                                                          } else if (tmp(tmp2[48]).AppLauncherHomeListItemType.APP === type) {
                                                                            tmp19 = closure_19;
                                                                            tmp20 = closure_29;
                                                                            obj21 = { section: null, onPress: null, isFirstRow: null, isLastRow: null, style: null };
                                                                            obj21.section = item.section;
                                                                            obj21.onPress = function onPress() {
                                                                              closure_12(item.section, AppLauncherTypes.AppLauncherSectionName.INSTALLED);
                                                                            };
                                                                            ({ isFirstRow: obj6.isFirstRow, isLastRow: obj6.isLastRow } = item);
                                                                            obj22 = { height: null };
                                                                            tmp21 = closure_5;
                                                                            obj22.height = closure_5;
                                                                            obj21.style = obj22;
                                                                            return closure_19(closure_29, obj21, item.section.id);
                                                                          } else if (tmp(tmp2[48]).AppLauncherHomeListItemType.RECOMMENDATION_SECTION_HEADER === type) {
                                                                            tmp17 = closure_19;
                                                                            tmp18 = closure_1_36;
                                                                            obj23 = { index: null, children: null };
                                                                            obj23.index = index;
                                                                            obj23.children = item.section;
                                                                            return closure_19(closure_1_36, obj23);
                                                                          } else if (tmp(tmp2[48]).AppLauncherHomeListItemType.RECOMMENDATION_BANNER_CARD === type) {
                                                                            tmp14 = closure_19;
                                                                            tmp15 = context;
                                                                            obj24 = { application: null, isFirst: null, isLast: null, onPress: null, isLandscape: null, showsPromoted: null, overrideImageUrl: null };
                                                                            obj24.application = item.item.application;
                                                                            ({ isFirst: obj4.isFirst, isLast: obj4.isLast } = item);
                                                                            obj24.onPress = function onPress() {
                                                                              return closure_19({ application: item.item.application, sectionName: item.sectionName });
                                                                            };
                                                                            tmp16 = closure_11;
                                                                            obj24.isLandscape = closure_11;
                                                                            ({ showsPromoted: obj4.showsPromoted, overrideImageUrl: obj4.overrideImageUrl } = item);
                                                                            return closure_19(context(tmp2[52]), obj24);
                                                                          } else if (tmp(tmp2[48]).AppLauncherHomeListItemType.RECOMMENDATION_APP === type) {
                                                                            tmp12 = closure_19;
                                                                            tmp13 = context;
                                                                            obj25 = { application: null, isFirstRow: null, isLastRow: null, onPress: null, showsPromoted: null };
                                                                            ({ application: obj3.application, isFirstRow: obj3.isFirstRow, isLastRow: obj3.isLastRow } = item);
                                                                            obj25.onPress = function onPress() {
                                                                              return closure_19({ application: item.application, sectionName: item.sectionName });
                                                                            };
                                                                            obj25.showsPromoted = item.showsPromoted;
                                                                            return closure_19(context(tmp2[53]), obj25, item.application.id);
                                                                          } else if (tmp(tmp2[48]).AppLauncherHomeListItemType.VIEW_ALL === type) {
                                                                            tmp10 = closure_19;
                                                                            tmp11 = context;
                                                                            obj26 = { title: null, onPress: null };
                                                                            obj26.title = item.title;
                                                                            obj26.onPress = function onPress() {
                                                                              const applications = item.applications;
                                                                              const mapped = applications.map((item) => item);
                                                                              const obj = AppLauncherNativeUtils;
                                                                              const result = obj.handleViewAllSelected({ location: ApplicationCommandTypes.ApplicationCommandTriggerLocations.APP_LAUNCHER_HOME, navigation, context, sectionName: item.sectionName, sectionOverallPosition: item.sectionOverallPosition, applications: mapped, sectionItemType: FrecencySection.SectionItemType.APPS, commands: [], sectionDescriptors: mapped.map((item) => item(closure_1_3[49]).getApplicationCommandSection(item)), title: item.title, promotedApplicationIds: item.promotedApplicationIds });
                                                                            };
                                                                            return closure_19(context(tmp2[54]), obj26);
                                                                          } else if (tmp(tmp2[48]).AppLauncherHomeListItemType.DIVIDER_ITEM === type) {
                                                                            tmp8 = closure_19;
                                                                            tmp9 = closure_1_35;
                                                                            return closure_19(closure_1_35, {});
                                                                          } else if (tmp(tmp2[48]).AppLauncherHomeListItemType.LEARN_MORE === type) {
                                                                            tmp4 = closure_19;
                                                                            tmp5 = context;
                                                                            obj = { visible: null };
                                                                            tmp7 = closure_3;
                                                                            tmp6 = context(tmp2[55]);
                                                                            obj.visible = closure_3.valueOf();
                                                                            return closure_19(tmp6, obj);
                                                                          } else {
                                                                            tmp3 = null;
                                                                            return null;
                                                                          }
                                                                        }
                                                                      }
                                                                      cResult[94] = tmp87;
                                                                    } else {
                                                                      class Ct {
                                                                        constructor(arg0) {
                                                                          nativeEvent = navigation.nativeEvent;
                                                                          size = { width: nativeEvent.layoutMeasurement.width, height: nativeEvent.layoutMeasurement.height, offset: nativeEvent.contentOffset.y, contentWidth: nativeEvent.contentSize.width, contentHeight: nativeEvent.contentSize.height };
                                                                          tmp = closure_33(size);
                                                                          return;
                                                                        }
                                                                      }
                                                                    }
                                                                    if (cResult[95] !== trackAppLauncherHomeItemImpression) {
                                                                      class Ct {
                                                                        constructor(arg0) {
                                                                          nativeEvent = navigation.nativeEvent;
                                                                          size = { width: nativeEvent.layoutMeasurement.width, height: nativeEvent.layoutMeasurement.height, offset: nativeEvent.contentOffset.y, contentWidth: nativeEvent.contentSize.width, contentHeight: nativeEvent.contentSize.height };
                                                                          tmp = closure_33(size);
                                                                          return;
                                                                        }
                                                                      }
                                                                      tmp89[0] = frecencyCommands;
                                                                      tmp89[1] = trackAppLauncherHomeItemImpression;
                                                                      class Ce {
                                                                        constructor(arg0) {
                                                                          item = navigation.item;
                                                                          index = navigation.index;
                                                                          type = item.type;
                                                                          tmp = navigation;
                                                                          tmp2 = closure_3;
                                                                          if (navigation(closure_3[48]).AppLauncherHomeListItemType.PLACEHOLDER === type) {
                                                                            tmp40 = closure_19;
                                                                            tmp41 = context;
                                                                            obj1 = { isFirstRow: null, isLastRow: null, style: null };
                                                                            num2 = 0;
                                                                            obj1.isFirstRow = 0 === index;
                                                                            tmp42 = list;
                                                                            num3 = 1;
                                                                            obj1.isLastRow = index === list.length - 1;
                                                                            obj15 = { height: null };
                                                                            tmp43 = closure_5;
                                                                            obj15.height = closure_5;
                                                                            obj1.style = obj15;
                                                                            return closure_19(context(tmp2[51]), obj1);
                                                                          } else if (tmp(tmp2[48]).AppLauncherHomeListItemType.SECTION_HEADER === type) {
                                                                            tmp38 = closure_19;
                                                                            tmp39 = closure_4;
                                                                            items = [, ];
                                                                            items[0] = closure_4.sectionHeader;
                                                                            num = 0;
                                                                            obj16 = null;
                                                                            if (0 !== index) {
                                                                              obj16 = { marginTop: 24 };
                                                                            }
                                                                            obj17 = { accessibilityRole: "header", variant: "text-lg/bold", color: "mobile-text-heading-primary", style: null, children: null };
                                                                            items[1] = obj16;
                                                                            obj17.style = items;
                                                                            obj17.children = item.section;
                                                                            return tmp38(tmp(tmp2[18]).Text, obj17);
                                                                          } else if (tmp(tmp2[48]).AppLauncherHomeListItemType.SHELF_ITEM === type) {
                                                                            tmp36 = closure_19;
                                                                            tmp37 = closure_30;
                                                                            obj18 = { section: null, onPress: null, isFirstRow: null, isLastRow: null };
                                                                            obj18.section = item.section;
                                                                            obj18.onPress = function onPress(shelfData) {
                                                                              closure_13({ shelfData, sectionName: item.sectionName });
                                                                            };
                                                                            ({ isFirstRow: obj10.isFirstRow, isLastRow: obj10.isLastRow } = item);
                                                                            return closure_19(closure_30, obj18, item.section.application.id);
                                                                          } else if (tmp(tmp2[48]).AppLauncherHomeListItemType.SHELF_ITEM_TUPLE === type) {
                                                                            obj19 = { context: null, sectionName: null, onPress: null, usesHandleActivityItemSelected: null, onActivityItemSelected: null, shelfItem1: null, shelfItem2: null, isLastTuple: null, entrypoint: null, containerWidth: null };
                                                                            tmp29 = context;
                                                                            obj19.context = context;
                                                                            tmp27 = closure_19;
                                                                            tmp28 = closure_31;
                                                                            obj19.sectionName = tmp(tmp2[44]).AppLauncherSectionName.ACTIVITIES;
                                                                            obj19.onPress = function onPress(shelfData) {
                                                                              const obj = { shelfData, sectionName: item.sectionName, navigates: null };
                                                                              let tmp2 = clickOnHomeActivityOpensAppDetails;
                                                                              if (!tmp2) {
                                                                                tmp2 = entrypoint !== AppLauncherTypes.AppLauncherEntrypoint.VOICE;
                                                                              }
                                                                              obj.navigates = tmp2;
                                                                              closure_13(obj);
                                                                            };
                                                                            tmp30 = closure_20;
                                                                            tmp31 = !closure_20;
                                                                            if (!closure_20) {
                                                                              tmp32 = entrypoint;
                                                                              tmp31 = entrypoint === tmp(tmp2[44]).AppLauncherEntrypoint.VOICE;
                                                                            }
                                                                            obj19.usesHandleActivityItemSelected = tmp31;
                                                                            tmp33 = onActivityItemSelected;
                                                                            obj19.onActivityItemSelected = onActivityItemSelected;
                                                                            ({ shelfItem1: obj9.shelfItem1, shelfItem2: obj9.shelfItem2, isLastTuple: obj9.isLastTuple } = item);
                                                                            tmp34 = entrypoint;
                                                                            obj19.entrypoint = entrypoint;
                                                                            tmp35 = width;
                                                                            obj19.containerWidth = width;
                                                                            return tmp27(tmp28, obj19, item.shelfItem1.application.id);
                                                                          } else if (tmp(tmp2[48]).AppLauncherHomeListItemType.RECOMMENDATION_TUPLE === type) {
                                                                            tmp22 = closure_19;
                                                                            tmp23 = closure_33;
                                                                            obj20 = { context: null, sectionName: null, onPress: null, items: null, isLastTuple: null, entrypoint: null, containerWidth: null };
                                                                            tmp24 = context;
                                                                            obj20.context = context;
                                                                            obj20.sectionName = item.sectionName;
                                                                            obj20.onPress = function onPress(application, sectionName) {
                                                                              return closure_1_19({ application, sectionName });
                                                                            };
                                                                            ({ items: obj8.items, isLastTuple: obj8.isLastTuple } = item);
                                                                            tmp25 = entrypoint;
                                                                            obj20.entrypoint = entrypoint;
                                                                            tmp26 = width;
                                                                            obj20.containerWidth = width;
                                                                            return closure_19(closure_33, obj20);
                                                                          } else if (tmp(tmp2[48]).AppLauncherHomeListItemType.APP === type) {
                                                                            tmp19 = closure_19;
                                                                            tmp20 = closure_29;
                                                                            obj21 = { section: null, onPress: null, isFirstRow: null, isLastRow: null, style: null };
                                                                            obj21.section = item.section;
                                                                            obj21.onPress = function onPress() {
                                                                              closure_12(item.section, AppLauncherTypes.AppLauncherSectionName.INSTALLED);
                                                                            };
                                                                            ({ isFirstRow: obj6.isFirstRow, isLastRow: obj6.isLastRow } = item);
                                                                            obj22 = { height: null };
                                                                            tmp21 = closure_5;
                                                                            obj22.height = closure_5;
                                                                            obj21.style = obj22;
                                                                            return closure_19(closure_29, obj21, item.section.id);
                                                                          } else if (tmp(tmp2[48]).AppLauncherHomeListItemType.RECOMMENDATION_SECTION_HEADER === type) {
                                                                            tmp17 = closure_19;
                                                                            tmp18 = closure_1_36;
                                                                            obj23 = { index: null, children: null };
                                                                            obj23.index = index;
                                                                            obj23.children = item.section;
                                                                            return closure_19(closure_1_36, obj23);
                                                                          } else if (tmp(tmp2[48]).AppLauncherHomeListItemType.RECOMMENDATION_BANNER_CARD === type) {
                                                                            tmp14 = closure_19;
                                                                            tmp15 = context;
                                                                            obj24 = { application: null, isFirst: null, isLast: null, onPress: null, isLandscape: null, showsPromoted: null, overrideImageUrl: null };
                                                                            obj24.application = item.item.application;
                                                                            ({ isFirst: obj4.isFirst, isLast: obj4.isLast } = item);
                                                                            obj24.onPress = function onPress() {
                                                                              return closure_19({ application: item.item.application, sectionName: item.sectionName });
                                                                            };
                                                                            tmp16 = closure_11;
                                                                            obj24.isLandscape = closure_11;
                                                                            ({ showsPromoted: obj4.showsPromoted, overrideImageUrl: obj4.overrideImageUrl } = item);
                                                                            return closure_19(context(tmp2[52]), obj24);
                                                                          } else if (tmp(tmp2[48]).AppLauncherHomeListItemType.RECOMMENDATION_APP === type) {
                                                                            tmp12 = closure_19;
                                                                            tmp13 = context;
                                                                            obj25 = { application: null, isFirstRow: null, isLastRow: null, onPress: null, showsPromoted: null };
                                                                            ({ application: obj3.application, isFirstRow: obj3.isFirstRow, isLastRow: obj3.isLastRow } = item);
                                                                            obj25.onPress = function onPress() {
                                                                              return closure_19({ application: item.application, sectionName: item.sectionName });
                                                                            };
                                                                            obj25.showsPromoted = item.showsPromoted;
                                                                            return closure_19(context(tmp2[53]), obj25, item.application.id);
                                                                          } else if (tmp(tmp2[48]).AppLauncherHomeListItemType.VIEW_ALL === type) {
                                                                            tmp10 = closure_19;
                                                                            tmp11 = context;
                                                                            obj26 = { title: null, onPress: null };
                                                                            obj26.title = item.title;
                                                                            obj26.onPress = function onPress() {
                                                                              const applications = item.applications;
                                                                              const mapped = applications.map((item) => item);
                                                                              const obj = AppLauncherNativeUtils;
                                                                              const result = obj.handleViewAllSelected({ location: ApplicationCommandTypes.ApplicationCommandTriggerLocations.APP_LAUNCHER_HOME, navigation, context, sectionName: item.sectionName, sectionOverallPosition: item.sectionOverallPosition, applications: mapped, sectionItemType: FrecencySection.SectionItemType.APPS, commands: [], sectionDescriptors: mapped.map((item) => item(closure_1_3[49]).getApplicationCommandSection(item)), title: item.title, promotedApplicationIds: item.promotedApplicationIds });
                                                                            };
                                                                            return closure_19(context(tmp2[54]), obj26);
                                                                          } else if (tmp(tmp2[48]).AppLauncherHomeListItemType.DIVIDER_ITEM === type) {
                                                                            tmp8 = closure_19;
                                                                            tmp9 = closure_1_35;
                                                                            return closure_19(closure_1_35, {});
                                                                          } else if (tmp(tmp2[48]).AppLauncherHomeListItemType.LEARN_MORE === type) {
                                                                            tmp4 = closure_19;
                                                                            tmp5 = context;
                                                                            obj = { visible: null };
                                                                            tmp7 = closure_3;
                                                                            tmp6 = context(tmp2[55]);
                                                                            obj.visible = closure_3.valueOf();
                                                                            return closure_19(tmp6, obj);
                                                                          } else {
                                                                            tmp3 = null;
                                                                            return null;
                                                                          }
                                                                        }
                                                                      }
                                                                      cResult[96] = tmp89;
                                                                    } else {
                                                                      class Ct {
                                                                        constructor(arg0) {
                                                                          nativeEvent = navigation.nativeEvent;
                                                                          size = { width: nativeEvent.layoutMeasurement.width, height: nativeEvent.layoutMeasurement.height, offset: nativeEvent.contentOffset.y, contentWidth: nativeEvent.contentSize.width, contentHeight: nativeEvent.contentSize.height };
                                                                          tmp = closure_33(size);
                                                                          return;
                                                                        }
                                                                      }
                                                                    }
                                                                    if (cResult[97] === tmp87) {
                                                                      class Ct {
                                                                        constructor(arg0) {
                                                                          nativeEvent = navigation.nativeEvent;
                                                                          size = { width: nativeEvent.layoutMeasurement.width, height: nativeEvent.layoutMeasurement.height, offset: nativeEvent.contentOffset.y, contentWidth: nativeEvent.contentSize.width, contentHeight: nativeEvent.contentSize.height };
                                                                          tmp = closure_33(size);
                                                                          return;
                                                                        }
                                                                      }
                                                                      if (cResult[100] !== tmp8.topBackgroundFill) {
                                                                        class Ct {
                                                                          constructor(arg0) {
                                                                            nativeEvent = navigation.nativeEvent;
                                                                            size = { width: nativeEvent.layoutMeasurement.width, height: nativeEvent.layoutMeasurement.height, offset: nativeEvent.contentOffset.y, contentWidth: nativeEvent.contentSize.width, contentHeight: nativeEvent.contentSize.height };
                                                                            tmp = closure_33(size);
                                                                            return;
                                                                          }
                                                                        }
                                                                        let obj5 = { style: tmp8.topBackgroundFill };
                                                                        const tmp94 = closure_19(chatInputRef, obj5);
                                                                        class Ce {
                                                                          constructor(arg0) {
                                                                            item = navigation.item;
                                                                            index = navigation.index;
                                                                            type = item.type;
                                                                            tmp = navigation;
                                                                            tmp2 = closure_3;
                                                                            if (navigation(closure_3[48]).AppLauncherHomeListItemType.PLACEHOLDER === type) {
                                                                              tmp40 = closure_19;
                                                                              tmp41 = context;
                                                                              obj1 = { isFirstRow: null, isLastRow: null, style: null };
                                                                              num2 = 0;
                                                                              obj1.isFirstRow = 0 === index;
                                                                              tmp42 = list;
                                                                              num3 = 1;
                                                                              obj1.isLastRow = index === list.length - 1;
                                                                              obj15 = { height: null };
                                                                              tmp43 = closure_5;
                                                                              obj15.height = closure_5;
                                                                              obj1.style = obj15;
                                                                              return closure_19(context(tmp2[51]), obj1);
                                                                            } else if (tmp(tmp2[48]).AppLauncherHomeListItemType.SECTION_HEADER === type) {
                                                                              tmp38 = closure_19;
                                                                              tmp39 = closure_4;
                                                                              items = [, ];
                                                                              items[0] = closure_4.sectionHeader;
                                                                              num = 0;
                                                                              obj16 = null;
                                                                              if (0 !== index) {
                                                                                obj16 = { marginTop: 24 };
                                                                              }
                                                                              obj17 = { accessibilityRole: "header", variant: "text-lg/bold", color: "mobile-text-heading-primary", style: null, children: null };
                                                                              items[1] = obj16;
                                                                              obj17.style = items;
                                                                              obj17.children = item.section;
                                                                              return tmp38(tmp(tmp2[18]).Text, obj17);
                                                                            } else if (tmp(tmp2[48]).AppLauncherHomeListItemType.SHELF_ITEM === type) {
                                                                              tmp36 = closure_19;
                                                                              tmp37 = closure_30;
                                                                              obj18 = { section: null, onPress: null, isFirstRow: null, isLastRow: null };
                                                                              obj18.section = item.section;
                                                                              obj18.onPress = function onPress(shelfData) {
                                                                                closure_13({ shelfData, sectionName: item.sectionName });
                                                                              };
                                                                              ({ isFirstRow: obj10.isFirstRow, isLastRow: obj10.isLastRow } = item);
                                                                              return closure_19(closure_30, obj18, item.section.application.id);
                                                                            } else if (tmp(tmp2[48]).AppLauncherHomeListItemType.SHELF_ITEM_TUPLE === type) {
                                                                              obj19 = { context: null, sectionName: null, onPress: null, usesHandleActivityItemSelected: null, onActivityItemSelected: null, shelfItem1: null, shelfItem2: null, isLastTuple: null, entrypoint: null, containerWidth: null };
                                                                              tmp29 = context;
                                                                              obj19.context = context;
                                                                              tmp27 = closure_19;
                                                                              tmp28 = closure_31;
                                                                              obj19.sectionName = tmp(tmp2[44]).AppLauncherSectionName.ACTIVITIES;
                                                                              obj19.onPress = function onPress(shelfData) {
                                                                                const obj = { shelfData, sectionName: item.sectionName, navigates: null };
                                                                                let tmp2 = clickOnHomeActivityOpensAppDetails;
                                                                                if (!tmp2) {
                                                                                  tmp2 = entrypoint !== AppLauncherTypes.AppLauncherEntrypoint.VOICE;
                                                                                }
                                                                                obj.navigates = tmp2;
                                                                                closure_13(obj);
                                                                              };
                                                                              tmp30 = closure_20;
                                                                              tmp31 = !closure_20;
                                                                              if (!closure_20) {
                                                                                tmp32 = entrypoint;
                                                                                tmp31 = entrypoint === tmp(tmp2[44]).AppLauncherEntrypoint.VOICE;
                                                                              }
                                                                              obj19.usesHandleActivityItemSelected = tmp31;
                                                                              tmp33 = onActivityItemSelected;
                                                                              obj19.onActivityItemSelected = onActivityItemSelected;
                                                                              ({ shelfItem1: obj9.shelfItem1, shelfItem2: obj9.shelfItem2, isLastTuple: obj9.isLastTuple } = item);
                                                                              tmp34 = entrypoint;
                                                                              obj19.entrypoint = entrypoint;
                                                                              tmp35 = width;
                                                                              obj19.containerWidth = width;
                                                                              return tmp27(tmp28, obj19, item.shelfItem1.application.id);
                                                                            } else if (tmp(tmp2[48]).AppLauncherHomeListItemType.RECOMMENDATION_TUPLE === type) {
                                                                              tmp22 = closure_19;
                                                                              tmp23 = closure_33;
                                                                              obj20 = { context: null, sectionName: null, onPress: null, items: null, isLastTuple: null, entrypoint: null, containerWidth: null };
                                                                              tmp24 = context;
                                                                              obj20.context = context;
                                                                              obj20.sectionName = item.sectionName;
                                                                              obj20.onPress = function onPress(application, sectionName) {
                                                                                return closure_1_19({ application, sectionName });
                                                                              };
                                                                              ({ items: obj8.items, isLastTuple: obj8.isLastTuple } = item);
                                                                              tmp25 = entrypoint;
                                                                              obj20.entrypoint = entrypoint;
                                                                              tmp26 = width;
                                                                              obj20.containerWidth = width;
                                                                              return closure_19(closure_33, obj20);
                                                                            } else if (tmp(tmp2[48]).AppLauncherHomeListItemType.APP === type) {
                                                                              tmp19 = closure_19;
                                                                              tmp20 = closure_29;
                                                                              obj21 = { section: null, onPress: null, isFirstRow: null, isLastRow: null, style: null };
                                                                              obj21.section = item.section;
                                                                              obj21.onPress = function onPress() {
                                                                                closure_12(item.section, AppLauncherTypes.AppLauncherSectionName.INSTALLED);
                                                                              };
                                                                              ({ isFirstRow: obj6.isFirstRow, isLastRow: obj6.isLastRow } = item);
                                                                              obj22 = { height: null };
                                                                              tmp21 = closure_5;
                                                                              obj22.height = closure_5;
                                                                              obj21.style = obj22;
                                                                              return closure_19(closure_29, obj21, item.section.id);
                                                                            } else if (tmp(tmp2[48]).AppLauncherHomeListItemType.RECOMMENDATION_SECTION_HEADER === type) {
                                                                              tmp17 = closure_19;
                                                                              tmp18 = closure_1_36;
                                                                              obj23 = { index: null, children: null };
                                                                              obj23.index = index;
                                                                              obj23.children = item.section;
                                                                              return closure_19(closure_1_36, obj23);
                                                                            } else if (tmp(tmp2[48]).AppLauncherHomeListItemType.RECOMMENDATION_BANNER_CARD === type) {
                                                                              tmp14 = closure_19;
                                                                              tmp15 = context;
                                                                              obj24 = { application: null, isFirst: null, isLast: null, onPress: null, isLandscape: null, showsPromoted: null, overrideImageUrl: null };
                                                                              obj24.application = item.item.application;
                                                                              ({ isFirst: obj4.isFirst, isLast: obj4.isLast } = item);
                                                                              obj24.onPress = function onPress() {
                                                                                return closure_19({ application: item.item.application, sectionName: item.sectionName });
                                                                              };
                                                                              tmp16 = closure_11;
                                                                              obj24.isLandscape = closure_11;
                                                                              ({ showsPromoted: obj4.showsPromoted, overrideImageUrl: obj4.overrideImageUrl } = item);
                                                                              return closure_19(context(tmp2[52]), obj24);
                                                                            } else if (tmp(tmp2[48]).AppLauncherHomeListItemType.RECOMMENDATION_APP === type) {
                                                                              tmp12 = closure_19;
                                                                              tmp13 = context;
                                                                              obj25 = { application: null, isFirstRow: null, isLastRow: null, onPress: null, showsPromoted: null };
                                                                              ({ application: obj3.application, isFirstRow: obj3.isFirstRow, isLastRow: obj3.isLastRow } = item);
                                                                              obj25.onPress = function onPress() {
                                                                                return closure_19({ application: item.application, sectionName: item.sectionName });
                                                                              };
                                                                              obj25.showsPromoted = item.showsPromoted;
                                                                              return closure_19(context(tmp2[53]), obj25, item.application.id);
                                                                            } else if (tmp(tmp2[48]).AppLauncherHomeListItemType.VIEW_ALL === type) {
                                                                              tmp10 = closure_19;
                                                                              tmp11 = context;
                                                                              obj26 = { title: null, onPress: null };
                                                                              obj26.title = item.title;
                                                                              obj26.onPress = function onPress() {
                                                                                const applications = item.applications;
                                                                                const mapped = applications.map((item) => item);
                                                                                const obj = AppLauncherNativeUtils;
                                                                                const result = obj.handleViewAllSelected({ location: ApplicationCommandTypes.ApplicationCommandTriggerLocations.APP_LAUNCHER_HOME, navigation, context, sectionName: item.sectionName, sectionOverallPosition: item.sectionOverallPosition, applications: mapped, sectionItemType: FrecencySection.SectionItemType.APPS, commands: [], sectionDescriptors: mapped.map((item) => item(closure_1_3[49]).getApplicationCommandSection(item)), title: item.title, promotedApplicationIds: item.promotedApplicationIds });
                                                                              };
                                                                              return closure_19(context(tmp2[54]), obj26);
                                                                            } else if (tmp(tmp2[48]).AppLauncherHomeListItemType.DIVIDER_ITEM === type) {
                                                                              tmp8 = closure_19;
                                                                              tmp9 = closure_1_35;
                                                                              return closure_19(closure_1_35, {});
                                                                            } else if (tmp(tmp2[48]).AppLauncherHomeListItemType.LEARN_MORE === type) {
                                                                              tmp4 = closure_19;
                                                                              tmp5 = context;
                                                                              obj = { visible: null };
                                                                              tmp7 = closure_3;
                                                                              tmp6 = context(tmp2[55]);
                                                                              obj.visible = closure_3.valueOf();
                                                                              return closure_19(tmp6, obj);
                                                                            } else {
                                                                              tmp3 = null;
                                                                              return null;
                                                                            }
                                                                          }
                                                                        }
                                                                        cResult[100] = tmp8.topBackgroundFill;
                                                                        cResult[101] = tmp94;
                                                                      } else {
                                                                        class Ct {
                                                                          constructor(arg0) {
                                                                            nativeEvent = navigation.nativeEvent;
                                                                            size = { width: nativeEvent.layoutMeasurement.width, height: nativeEvent.layoutMeasurement.height, offset: nativeEvent.contentOffset.y, contentWidth: nativeEvent.contentSize.width, contentHeight: nativeEvent.contentSize.height };
                                                                            tmp = closure_33(size);
                                                                            return;
                                                                          }
                                                                        }
                                                                      }
                                                                      if (cResult[102] !== entrypoint) {
                                                                        class Ct {
                                                                          constructor(arg0) {
                                                                            nativeEvent = navigation.nativeEvent;
                                                                            size = { width: nativeEvent.layoutMeasurement.width, height: nativeEvent.layoutMeasurement.height, offset: nativeEvent.contentOffset.y, contentWidth: nativeEvent.contentSize.width, contentHeight: nativeEvent.contentSize.height };
                                                                            tmp = closure_33(size);
                                                                            return;
                                                                          }
                                                                        }
                                                                        cResult[102] = entrypoint;
                                                                        cResult[103] = tmp96;
                                                                        class Ce {
                                                                          constructor(arg0) {
                                                                            item = navigation.item;
                                                                            index = navigation.index;
                                                                            type = item.type;
                                                                            tmp = navigation;
                                                                            tmp2 = closure_3;
                                                                            if (navigation(closure_3[48]).AppLauncherHomeListItemType.PLACEHOLDER === type) {
                                                                              tmp40 = closure_19;
                                                                              tmp41 = context;
                                                                              obj1 = { isFirstRow: null, isLastRow: null, style: null };
                                                                              num2 = 0;
                                                                              obj1.isFirstRow = 0 === index;
                                                                              tmp42 = list;
                                                                              num3 = 1;
                                                                              obj1.isLastRow = index === list.length - 1;
                                                                              obj15 = { height: null };
                                                                              tmp43 = closure_5;
                                                                              obj15.height = closure_5;
                                                                              obj1.style = obj15;
                                                                              return closure_19(context(tmp2[51]), obj1);
                                                                            } else if (tmp(tmp2[48]).AppLauncherHomeListItemType.SECTION_HEADER === type) {
                                                                              tmp38 = closure_19;
                                                                              tmp39 = closure_4;
                                                                              items = [, ];
                                                                              items[0] = closure_4.sectionHeader;
                                                                              num = 0;
                                                                              obj16 = null;
                                                                              if (0 !== index) {
                                                                                obj16 = { marginTop: 24 };
                                                                              }
                                                                              obj17 = { accessibilityRole: "header", variant: "text-lg/bold", color: "mobile-text-heading-primary", style: null, children: null };
                                                                              items[1] = obj16;
                                                                              obj17.style = items;
                                                                              obj17.children = item.section;
                                                                              return tmp38(tmp(tmp2[18]).Text, obj17);
                                                                            } else if (tmp(tmp2[48]).AppLauncherHomeListItemType.SHELF_ITEM === type) {
                                                                              tmp36 = closure_19;
                                                                              tmp37 = closure_30;
                                                                              obj18 = { section: null, onPress: null, isFirstRow: null, isLastRow: null };
                                                                              obj18.section = item.section;
                                                                              obj18.onPress = function onPress(shelfData) {
                                                                                closure_13({ shelfData, sectionName: item.sectionName });
                                                                              };
                                                                              ({ isFirstRow: obj10.isFirstRow, isLastRow: obj10.isLastRow } = item);
                                                                              return closure_19(closure_30, obj18, item.section.application.id);
                                                                            } else if (tmp(tmp2[48]).AppLauncherHomeListItemType.SHELF_ITEM_TUPLE === type) {
                                                                              obj19 = { context: null, sectionName: null, onPress: null, usesHandleActivityItemSelected: null, onActivityItemSelected: null, shelfItem1: null, shelfItem2: null, isLastTuple: null, entrypoint: null, containerWidth: null };
                                                                              tmp29 = context;
                                                                              obj19.context = context;
                                                                              tmp27 = closure_19;
                                                                              tmp28 = closure_31;
                                                                              obj19.sectionName = tmp(tmp2[44]).AppLauncherSectionName.ACTIVITIES;
                                                                              obj19.onPress = function onPress(shelfData) {
                                                                                const obj = { shelfData, sectionName: item.sectionName, navigates: null };
                                                                                let tmp2 = clickOnHomeActivityOpensAppDetails;
                                                                                if (!tmp2) {
                                                                                  tmp2 = entrypoint !== AppLauncherTypes.AppLauncherEntrypoint.VOICE;
                                                                                }
                                                                                obj.navigates = tmp2;
                                                                                closure_13(obj);
                                                                              };
                                                                              tmp30 = closure_20;
                                                                              tmp31 = !closure_20;
                                                                              if (!closure_20) {
                                                                                tmp32 = entrypoint;
                                                                                tmp31 = entrypoint === tmp(tmp2[44]).AppLauncherEntrypoint.VOICE;
                                                                              }
                                                                              obj19.usesHandleActivityItemSelected = tmp31;
                                                                              tmp33 = onActivityItemSelected;
                                                                              obj19.onActivityItemSelected = onActivityItemSelected;
                                                                              ({ shelfItem1: obj9.shelfItem1, shelfItem2: obj9.shelfItem2, isLastTuple: obj9.isLastTuple } = item);
                                                                              tmp34 = entrypoint;
                                                                              obj19.entrypoint = entrypoint;
                                                                              tmp35 = width;
                                                                              obj19.containerWidth = width;
                                                                              return tmp27(tmp28, obj19, item.shelfItem1.application.id);
                                                                            } else if (tmp(tmp2[48]).AppLauncherHomeListItemType.RECOMMENDATION_TUPLE === type) {
                                                                              tmp22 = closure_19;
                                                                              tmp23 = closure_33;
                                                                              obj20 = { context: null, sectionName: null, onPress: null, items: null, isLastTuple: null, entrypoint: null, containerWidth: null };
                                                                              tmp24 = context;
                                                                              obj20.context = context;
                                                                              obj20.sectionName = item.sectionName;
                                                                              obj20.onPress = function onPress(application, sectionName) {
                                                                                return closure_1_19({ application, sectionName });
                                                                              };
                                                                              ({ items: obj8.items, isLastTuple: obj8.isLastTuple } = item);
                                                                              tmp25 = entrypoint;
                                                                              obj20.entrypoint = entrypoint;
                                                                              tmp26 = width;
                                                                              obj20.containerWidth = width;
                                                                              return closure_19(closure_33, obj20);
                                                                            } else if (tmp(tmp2[48]).AppLauncherHomeListItemType.APP === type) {
                                                                              tmp19 = closure_19;
                                                                              tmp20 = closure_29;
                                                                              obj21 = { section: null, onPress: null, isFirstRow: null, isLastRow: null, style: null };
                                                                              obj21.section = item.section;
                                                                              obj21.onPress = function onPress() {
                                                                                closure_12(item.section, AppLauncherTypes.AppLauncherSectionName.INSTALLED);
                                                                              };
                                                                              ({ isFirstRow: obj6.isFirstRow, isLastRow: obj6.isLastRow } = item);
                                                                              obj22 = { height: null };
                                                                              tmp21 = closure_5;
                                                                              obj22.height = closure_5;
                                                                              obj21.style = obj22;
                                                                              return closure_19(closure_29, obj21, item.section.id);
                                                                            } else if (tmp(tmp2[48]).AppLauncherHomeListItemType.RECOMMENDATION_SECTION_HEADER === type) {
                                                                              tmp17 = closure_19;
                                                                              tmp18 = closure_1_36;
                                                                              obj23 = { index: null, children: null };
                                                                              obj23.index = index;
                                                                              obj23.children = item.section;
                                                                              return closure_19(closure_1_36, obj23);
                                                                            } else if (tmp(tmp2[48]).AppLauncherHomeListItemType.RECOMMENDATION_BANNER_CARD === type) {
                                                                              tmp14 = closure_19;
                                                                              tmp15 = context;
                                                                              obj24 = { application: null, isFirst: null, isLast: null, onPress: null, isLandscape: null, showsPromoted: null, overrideImageUrl: null };
                                                                              obj24.application = item.item.application;
                                                                              ({ isFirst: obj4.isFirst, isLast: obj4.isLast } = item);
                                                                              obj24.onPress = function onPress() {
                                                                                return closure_19({ application: item.item.application, sectionName: item.sectionName });
                                                                              };
                                                                              tmp16 = closure_11;
                                                                              obj24.isLandscape = closure_11;
                                                                              ({ showsPromoted: obj4.showsPromoted, overrideImageUrl: obj4.overrideImageUrl } = item);
                                                                              return closure_19(context(tmp2[52]), obj24);
                                                                            } else if (tmp(tmp2[48]).AppLauncherHomeListItemType.RECOMMENDATION_APP === type) {
                                                                              tmp12 = closure_19;
                                                                              tmp13 = context;
                                                                              obj25 = { application: null, isFirstRow: null, isLastRow: null, onPress: null, showsPromoted: null };
                                                                              ({ application: obj3.application, isFirstRow: obj3.isFirstRow, isLastRow: obj3.isLastRow } = item);
                                                                              obj25.onPress = function onPress() {
                                                                                return closure_19({ application: item.application, sectionName: item.sectionName });
                                                                              };
                                                                              obj25.showsPromoted = item.showsPromoted;
                                                                              return closure_19(context(tmp2[53]), obj25, item.application.id);
                                                                            } else if (tmp(tmp2[48]).AppLauncherHomeListItemType.VIEW_ALL === type) {
                                                                              tmp10 = closure_19;
                                                                              tmp11 = context;
                                                                              obj26 = { title: null, onPress: null };
                                                                              obj26.title = item.title;
                                                                              obj26.onPress = function onPress() {
                                                                                const applications = item.applications;
                                                                                const mapped = applications.map((item) => item);
                                                                                const obj = AppLauncherNativeUtils;
                                                                                const result = obj.handleViewAllSelected({ location: ApplicationCommandTypes.ApplicationCommandTriggerLocations.APP_LAUNCHER_HOME, navigation, context, sectionName: item.sectionName, sectionOverallPosition: item.sectionOverallPosition, applications: mapped, sectionItemType: FrecencySection.SectionItemType.APPS, commands: [], sectionDescriptors: mapped.map((item) => item(closure_1_3[49]).getApplicationCommandSection(item)), title: item.title, promotedApplicationIds: item.promotedApplicationIds });
                                                                              };
                                                                              return closure_19(context(tmp2[54]), obj26);
                                                                            } else if (tmp(tmp2[48]).AppLauncherHomeListItemType.DIVIDER_ITEM === type) {
                                                                              tmp8 = closure_19;
                                                                              tmp9 = closure_1_35;
                                                                              return closure_19(closure_1_35, {});
                                                                            } else if (tmp(tmp2[48]).AppLauncherHomeListItemType.LEARN_MORE === type) {
                                                                              tmp4 = closure_19;
                                                                              tmp5 = context;
                                                                              obj = { visible: null };
                                                                              tmp7 = closure_3;
                                                                              tmp6 = context(tmp2[55]);
                                                                              obj.visible = closure_3.valueOf();
                                                                              return closure_19(tmp6, obj);
                                                                            } else {
                                                                              tmp3 = null;
                                                                              return null;
                                                                            }
                                                                          }
                                                                        }
                                                                      } else {
                                                                        class Ct {
                                                                          constructor(arg0) {
                                                                            nativeEvent = navigation.nativeEvent;
                                                                            size = { width: nativeEvent.layoutMeasurement.width, height: nativeEvent.layoutMeasurement.height, offset: nativeEvent.contentOffset.y, contentWidth: nativeEvent.contentSize.width, contentHeight: nativeEvent.contentSize.height };
                                                                            tmp = closure_33(size);
                                                                            return;
                                                                          }
                                                                        }
                                                                        if (cResult[104] === tmp43) {
                                                                          class Ct {
                                                                            constructor(arg0) {
                                                                              nativeEvent = navigation.nativeEvent;
                                                                              size = { width: nativeEvent.layoutMeasurement.width, height: nativeEvent.layoutMeasurement.height, offset: nativeEvent.contentOffset.y, contentWidth: nativeEvent.contentSize.width, contentHeight: nativeEvent.contentSize.height };
                                                                              tmp = closure_33(size);
                                                                              return;
                                                                            }
                                                                          }
                                                                          if (cResult[107] === tmp38) {
                                                                            class Ct {
                                                                              constructor(arg0) {
                                                                                nativeEvent = navigation.nativeEvent;
                                                                                size = { width: nativeEvent.layoutMeasurement.width, height: nativeEvent.layoutMeasurement.height, offset: nativeEvent.contentOffset.y, contentWidth: nativeEvent.contentSize.width, contentHeight: nativeEvent.contentSize.height };
                                                                                tmp = closure_33(size);
                                                                                return;
                                                                              }
                                                                            }
                                                                          }
                                                                          const obj6 = { ref: ref1, placeholder: null, round: true, size: "md", onChange: null, onFocus: null };
                                                                          class Ce {
                                                                            constructor(arg0) {
                                                                              item = navigation.item;
                                                                              index = navigation.index;
                                                                              type = item.type;
                                                                              tmp = navigation;
                                                                              tmp2 = closure_3;
                                                                              if (navigation(closure_3[48]).AppLauncherHomeListItemType.PLACEHOLDER === type) {
                                                                                tmp40 = closure_19;
                                                                                tmp41 = context;
                                                                                obj1 = { isFirstRow: null, isLastRow: null, style: null };
                                                                                num2 = 0;
                                                                                obj1.isFirstRow = 0 === index;
                                                                                tmp42 = list;
                                                                                num3 = 1;
                                                                                obj1.isLastRow = index === list.length - 1;
                                                                                obj15 = { height: null };
                                                                                tmp43 = closure_5;
                                                                                obj15.height = closure_5;
                                                                                obj1.style = obj15;
                                                                                return closure_19(context(tmp2[51]), obj1);
                                                                              } else if (tmp(tmp2[48]).AppLauncherHomeListItemType.SECTION_HEADER === type) {
                                                                                tmp38 = closure_19;
                                                                                tmp39 = closure_4;
                                                                                items = [, ];
                                                                                items[0] = closure_4.sectionHeader;
                                                                                num = 0;
                                                                                obj16 = null;
                                                                                if (0 !== index) {
                                                                                  obj16 = { marginTop: 24 };
                                                                                }
                                                                                obj17 = { accessibilityRole: "header", variant: "text-lg/bold", color: "mobile-text-heading-primary", style: null, children: null };
                                                                                items[1] = obj16;
                                                                                obj17.style = items;
                                                                                obj17.children = item.section;
                                                                                return tmp38(tmp(tmp2[18]).Text, obj17);
                                                                              } else if (tmp(tmp2[48]).AppLauncherHomeListItemType.SHELF_ITEM === type) {
                                                                                tmp36 = closure_19;
                                                                                tmp37 = closure_30;
                                                                                obj18 = { section: null, onPress: null, isFirstRow: null, isLastRow: null };
                                                                                obj18.section = item.section;
                                                                                obj18.onPress = function onPress(shelfData) {
                                                                                  closure_13({ shelfData, sectionName: item.sectionName });
                                                                                };
                                                                                ({ isFirstRow: obj10.isFirstRow, isLastRow: obj10.isLastRow } = item);
                                                                                return closure_19(closure_30, obj18, item.section.application.id);
                                                                              } else if (tmp(tmp2[48]).AppLauncherHomeListItemType.SHELF_ITEM_TUPLE === type) {
                                                                                obj19 = { context: null, sectionName: null, onPress: null, usesHandleActivityItemSelected: null, onActivityItemSelected: null, shelfItem1: null, shelfItem2: null, isLastTuple: null, entrypoint: null, containerWidth: null };
                                                                                tmp29 = context;
                                                                                obj19.context = context;
                                                                                tmp27 = closure_19;
                                                                                tmp28 = closure_31;
                                                                                obj19.sectionName = tmp(tmp2[44]).AppLauncherSectionName.ACTIVITIES;
                                                                                obj19.onPress = function onPress(shelfData) {
                                                                                  const obj = { shelfData, sectionName: item.sectionName, navigates: null };
                                                                                  let tmp2 = clickOnHomeActivityOpensAppDetails;
                                                                                  if (!tmp2) {
                                                                                    tmp2 = entrypoint !== AppLauncherTypes.AppLauncherEntrypoint.VOICE;
                                                                                  }
                                                                                  obj.navigates = tmp2;
                                                                                  closure_13(obj);
                                                                                };
                                                                                tmp30 = closure_20;
                                                                                tmp31 = !closure_20;
                                                                                if (!closure_20) {
                                                                                  tmp32 = entrypoint;
                                                                                  tmp31 = entrypoint === tmp(tmp2[44]).AppLauncherEntrypoint.VOICE;
                                                                                }
                                                                                obj19.usesHandleActivityItemSelected = tmp31;
                                                                                tmp33 = onActivityItemSelected;
                                                                                obj19.onActivityItemSelected = onActivityItemSelected;
                                                                                ({ shelfItem1: obj9.shelfItem1, shelfItem2: obj9.shelfItem2, isLastTuple: obj9.isLastTuple } = item);
                                                                                tmp34 = entrypoint;
                                                                                obj19.entrypoint = entrypoint;
                                                                                tmp35 = width;
                                                                                obj19.containerWidth = width;
                                                                                return tmp27(tmp28, obj19, item.shelfItem1.application.id);
                                                                              } else if (tmp(tmp2[48]).AppLauncherHomeListItemType.RECOMMENDATION_TUPLE === type) {
                                                                                tmp22 = closure_19;
                                                                                tmp23 = closure_33;
                                                                                obj20 = { context: null, sectionName: null, onPress: null, items: null, isLastTuple: null, entrypoint: null, containerWidth: null };
                                                                                tmp24 = context;
                                                                                obj20.context = context;
                                                                                obj20.sectionName = item.sectionName;
                                                                                obj20.onPress = function onPress(application, sectionName) {
                                                                                  return closure_1_19({ application, sectionName });
                                                                                };
                                                                                ({ items: obj8.items, isLastTuple: obj8.isLastTuple } = item);
                                                                                tmp25 = entrypoint;
                                                                                obj20.entrypoint = entrypoint;
                                                                                tmp26 = width;
                                                                                obj20.containerWidth = width;
                                                                                return closure_19(closure_33, obj20);
                                                                              } else if (tmp(tmp2[48]).AppLauncherHomeListItemType.APP === type) {
                                                                                tmp19 = closure_19;
                                                                                tmp20 = closure_29;
                                                                                obj21 = { section: null, onPress: null, isFirstRow: null, isLastRow: null, style: null };
                                                                                obj21.section = item.section;
                                                                                obj21.onPress = function onPress() {
                                                                                  closure_12(item.section, AppLauncherTypes.AppLauncherSectionName.INSTALLED);
                                                                                };
                                                                                ({ isFirstRow: obj6.isFirstRow, isLastRow: obj6.isLastRow } = item);
                                                                                obj22 = { height: null };
                                                                                tmp21 = closure_5;
                                                                                obj22.height = closure_5;
                                                                                obj21.style = obj22;
                                                                                return closure_19(closure_29, obj21, item.section.id);
                                                                              } else if (tmp(tmp2[48]).AppLauncherHomeListItemType.RECOMMENDATION_SECTION_HEADER === type) {
                                                                                tmp17 = closure_19;
                                                                                tmp18 = closure_1_36;
                                                                                obj23 = { index: null, children: null };
                                                                                obj23.index = index;
                                                                                obj23.children = item.section;
                                                                                return closure_19(closure_1_36, obj23);
                                                                              } else if (tmp(tmp2[48]).AppLauncherHomeListItemType.RECOMMENDATION_BANNER_CARD === type) {
                                                                                tmp14 = closure_19;
                                                                                tmp15 = context;
                                                                                obj24 = { application: null, isFirst: null, isLast: null, onPress: null, isLandscape: null, showsPromoted: null, overrideImageUrl: null };
                                                                                obj24.application = item.item.application;
                                                                                ({ isFirst: obj4.isFirst, isLast: obj4.isLast } = item);
                                                                                obj24.onPress = function onPress() {
                                                                                  return closure_19({ application: item.item.application, sectionName: item.sectionName });
                                                                                };
                                                                                tmp16 = closure_11;
                                                                                obj24.isLandscape = closure_11;
                                                                                ({ showsPromoted: obj4.showsPromoted, overrideImageUrl: obj4.overrideImageUrl } = item);
                                                                                return closure_19(context(tmp2[52]), obj24);
                                                                              } else if (tmp(tmp2[48]).AppLauncherHomeListItemType.RECOMMENDATION_APP === type) {
                                                                                tmp12 = closure_19;
                                                                                tmp13 = context;
                                                                                obj25 = { application: null, isFirstRow: null, isLastRow: null, onPress: null, showsPromoted: null };
                                                                                ({ application: obj3.application, isFirstRow: obj3.isFirstRow, isLastRow: obj3.isLastRow } = item);
                                                                                obj25.onPress = function onPress() {
                                                                                  return closure_19({ application: item.application, sectionName: item.sectionName });
                                                                                };
                                                                                obj25.showsPromoted = item.showsPromoted;
                                                                                return closure_19(context(tmp2[53]), obj25, item.application.id);
                                                                              } else if (tmp(tmp2[48]).AppLauncherHomeListItemType.VIEW_ALL === type) {
                                                                                tmp10 = closure_19;
                                                                                tmp11 = context;
                                                                                obj26 = { title: null, onPress: null };
                                                                                obj26.title = item.title;
                                                                                obj26.onPress = function onPress() {
                                                                                  const applications = item.applications;
                                                                                  const mapped = applications.map((item) => item);
                                                                                  const obj = AppLauncherNativeUtils;
                                                                                  const result = obj.handleViewAllSelected({ location: ApplicationCommandTypes.ApplicationCommandTriggerLocations.APP_LAUNCHER_HOME, navigation, context, sectionName: item.sectionName, sectionOverallPosition: item.sectionOverallPosition, applications: mapped, sectionItemType: FrecencySection.SectionItemType.APPS, commands: [], sectionDescriptors: mapped.map((item) => item(closure_1_3[49]).getApplicationCommandSection(item)), title: item.title, promotedApplicationIds: item.promotedApplicationIds });
                                                                                };
                                                                                return closure_19(context(tmp2[54]), obj26);
                                                                              } else if (tmp(tmp2[48]).AppLauncherHomeListItemType.DIVIDER_ITEM === type) {
                                                                                tmp8 = closure_19;
                                                                                tmp9 = closure_1_35;
                                                                                return closure_19(closure_1_35, {});
                                                                              } else if (tmp(tmp2[48]).AppLauncherHomeListItemType.LEARN_MORE === type) {
                                                                                tmp4 = closure_19;
                                                                                tmp5 = context;
                                                                                obj = { visible: null };
                                                                                tmp7 = closure_3;
                                                                                tmp6 = context(tmp2[55]);
                                                                                obj.visible = closure_3.valueOf();
                                                                                return closure_19(tmp6, obj);
                                                                              } else {
                                                                                tmp3 = null;
                                                                                return null;
                                                                              }
                                                                            }
                                                                          }
                                                                          obj6.onChange = tmp38;
                                                                          obj6.onFocus = tmp97;
                                                                          const tmp100 = closure_19(tmp(6547).SearchField, obj6);
                                                                          cResult[107] = tmp38;
                                                                          cResult[108] = tmp95;
                                                                          cResult[109] = tmp97;
                                                                          cResult[110] = tmp100;
                                                                        }
                                                                        function wt() {
                                                                          closure_27();
                                                                          tmp71({ actionType: ContentDismissActionType.TAKE_ACTION });
                                                                        }
                                                                        cResult[104] = tmp43;
                                                                        class Ce {
                                                                          constructor(arg0) {
                                                                            item = navigation.item;
                                                                            index = navigation.index;
                                                                            type = item.type;
                                                                            tmp = navigation;
                                                                            tmp2 = closure_3;
                                                                            if (navigation(closure_3[48]).AppLauncherHomeListItemType.PLACEHOLDER === type) {
                                                                              tmp40 = closure_19;
                                                                              tmp41 = context;
                                                                              obj1 = { isFirstRow: null, isLastRow: null, style: null };
                                                                              num2 = 0;
                                                                              obj1.isFirstRow = 0 === index;
                                                                              tmp42 = list;
                                                                              num3 = 1;
                                                                              obj1.isLastRow = index === list.length - 1;
                                                                              obj15 = { height: null };
                                                                              tmp43 = closure_5;
                                                                              obj15.height = closure_5;
                                                                              obj1.style = obj15;
                                                                              return closure_19(context(tmp2[51]), obj1);
                                                                            } else if (tmp(tmp2[48]).AppLauncherHomeListItemType.SECTION_HEADER === type) {
                                                                              tmp38 = closure_19;
                                                                              tmp39 = closure_4;
                                                                              items = [, ];
                                                                              items[0] = closure_4.sectionHeader;
                                                                              num = 0;
                                                                              obj16 = null;
                                                                              if (0 !== index) {
                                                                                obj16 = { marginTop: 24 };
                                                                              }
                                                                              obj17 = { accessibilityRole: "header", variant: "text-lg/bold", color: "mobile-text-heading-primary", style: null, children: null };
                                                                              items[1] = obj16;
                                                                              obj17.style = items;
                                                                              obj17.children = item.section;
                                                                              return tmp38(tmp(tmp2[18]).Text, obj17);
                                                                            } else if (tmp(tmp2[48]).AppLauncherHomeListItemType.SHELF_ITEM === type) {
                                                                              tmp36 = closure_19;
                                                                              tmp37 = closure_30;
                                                                              obj18 = { section: null, onPress: null, isFirstRow: null, isLastRow: null };
                                                                              obj18.section = item.section;
                                                                              obj18.onPress = function onPress(shelfData) {
                                                                                closure_13({ shelfData, sectionName: item.sectionName });
                                                                              };
                                                                              ({ isFirstRow: obj10.isFirstRow, isLastRow: obj10.isLastRow } = item);
                                                                              return closure_19(closure_30, obj18, item.section.application.id);
                                                                            } else if (tmp(tmp2[48]).AppLauncherHomeListItemType.SHELF_ITEM_TUPLE === type) {
                                                                              obj19 = { context: null, sectionName: null, onPress: null, usesHandleActivityItemSelected: null, onActivityItemSelected: null, shelfItem1: null, shelfItem2: null, isLastTuple: null, entrypoint: null, containerWidth: null };
                                                                              tmp29 = context;
                                                                              obj19.context = context;
                                                                              tmp27 = closure_19;
                                                                              tmp28 = closure_31;
                                                                              obj19.sectionName = tmp(tmp2[44]).AppLauncherSectionName.ACTIVITIES;
                                                                              obj19.onPress = function onPress(shelfData) {
                                                                                const obj = { shelfData, sectionName: item.sectionName, navigates: null };
                                                                                let tmp2 = clickOnHomeActivityOpensAppDetails;
                                                                                if (!tmp2) {
                                                                                  tmp2 = entrypoint !== AppLauncherTypes.AppLauncherEntrypoint.VOICE;
                                                                                }
                                                                                obj.navigates = tmp2;
                                                                                closure_13(obj);
                                                                              };
                                                                              tmp30 = closure_20;
                                                                              tmp31 = !closure_20;
                                                                              if (!closure_20) {
                                                                                tmp32 = entrypoint;
                                                                                tmp31 = entrypoint === tmp(tmp2[44]).AppLauncherEntrypoint.VOICE;
                                                                              }
                                                                              obj19.usesHandleActivityItemSelected = tmp31;
                                                                              tmp33 = onActivityItemSelected;
                                                                              obj19.onActivityItemSelected = onActivityItemSelected;
                                                                              ({ shelfItem1: obj9.shelfItem1, shelfItem2: obj9.shelfItem2, isLastTuple: obj9.isLastTuple } = item);
                                                                              tmp34 = entrypoint;
                                                                              obj19.entrypoint = entrypoint;
                                                                              tmp35 = width;
                                                                              obj19.containerWidth = width;
                                                                              return tmp27(tmp28, obj19, item.shelfItem1.application.id);
                                                                            } else if (tmp(tmp2[48]).AppLauncherHomeListItemType.RECOMMENDATION_TUPLE === type) {
                                                                              tmp22 = closure_19;
                                                                              tmp23 = closure_33;
                                                                              obj20 = { context: null, sectionName: null, onPress: null, items: null, isLastTuple: null, entrypoint: null, containerWidth: null };
                                                                              tmp24 = context;
                                                                              obj20.context = context;
                                                                              obj20.sectionName = item.sectionName;
                                                                              obj20.onPress = function onPress(application, sectionName) {
                                                                                return closure_1_19({ application, sectionName });
                                                                              };
                                                                              ({ items: obj8.items, isLastTuple: obj8.isLastTuple } = item);
                                                                              tmp25 = entrypoint;
                                                                              obj20.entrypoint = entrypoint;
                                                                              tmp26 = width;
                                                                              obj20.containerWidth = width;
                                                                              return closure_19(closure_33, obj20);
                                                                            } else if (tmp(tmp2[48]).AppLauncherHomeListItemType.APP === type) {
                                                                              tmp19 = closure_19;
                                                                              tmp20 = closure_29;
                                                                              obj21 = { section: null, onPress: null, isFirstRow: null, isLastRow: null, style: null };
                                                                              obj21.section = item.section;
                                                                              obj21.onPress = function onPress() {
                                                                                closure_12(item.section, AppLauncherTypes.AppLauncherSectionName.INSTALLED);
                                                                              };
                                                                              ({ isFirstRow: obj6.isFirstRow, isLastRow: obj6.isLastRow } = item);
                                                                              obj22 = { height: null };
                                                                              tmp21 = closure_5;
                                                                              obj22.height = closure_5;
                                                                              obj21.style = obj22;
                                                                              return closure_19(closure_29, obj21, item.section.id);
                                                                            } else if (tmp(tmp2[48]).AppLauncherHomeListItemType.RECOMMENDATION_SECTION_HEADER === type) {
                                                                              tmp17 = closure_19;
                                                                              tmp18 = closure_1_36;
                                                                              obj23 = { index: null, children: null };
                                                                              obj23.index = index;
                                                                              obj23.children = item.section;
                                                                              return closure_19(closure_1_36, obj23);
                                                                            } else if (tmp(tmp2[48]).AppLauncherHomeListItemType.RECOMMENDATION_BANNER_CARD === type) {
                                                                              tmp14 = closure_19;
                                                                              tmp15 = context;
                                                                              obj24 = { application: null, isFirst: null, isLast: null, onPress: null, isLandscape: null, showsPromoted: null, overrideImageUrl: null };
                                                                              obj24.application = item.item.application;
                                                                              ({ isFirst: obj4.isFirst, isLast: obj4.isLast } = item);
                                                                              obj24.onPress = function onPress() {
                                                                                return closure_19({ application: item.item.application, sectionName: item.sectionName });
                                                                              };
                                                                              tmp16 = closure_11;
                                                                              obj24.isLandscape = closure_11;
                                                                              ({ showsPromoted: obj4.showsPromoted, overrideImageUrl: obj4.overrideImageUrl } = item);
                                                                              return closure_19(context(tmp2[52]), obj24);
                                                                            } else if (tmp(tmp2[48]).AppLauncherHomeListItemType.RECOMMENDATION_APP === type) {
                                                                              tmp12 = closure_19;
                                                                              tmp13 = context;
                                                                              obj25 = { application: null, isFirstRow: null, isLastRow: null, onPress: null, showsPromoted: null };
                                                                              ({ application: obj3.application, isFirstRow: obj3.isFirstRow, isLastRow: obj3.isLastRow } = item);
                                                                              obj25.onPress = function onPress() {
                                                                                return closure_19({ application: item.application, sectionName: item.sectionName });
                                                                              };
                                                                              obj25.showsPromoted = item.showsPromoted;
                                                                              return closure_19(context(tmp2[53]), obj25, item.application.id);
                                                                            } else if (tmp(tmp2[48]).AppLauncherHomeListItemType.VIEW_ALL === type) {
                                                                              tmp10 = closure_19;
                                                                              tmp11 = context;
                                                                              obj26 = { title: null, onPress: null };
                                                                              obj26.title = item.title;
                                                                              obj26.onPress = function onPress() {
                                                                                const applications = item.applications;
                                                                                const mapped = applications.map((item) => item);
                                                                                const obj = AppLauncherNativeUtils;
                                                                                const result = obj.handleViewAllSelected({ location: ApplicationCommandTypes.ApplicationCommandTriggerLocations.APP_LAUNCHER_HOME, navigation, context, sectionName: item.sectionName, sectionOverallPosition: item.sectionOverallPosition, applications: mapped, sectionItemType: FrecencySection.SectionItemType.APPS, commands: [], sectionDescriptors: mapped.map((item) => item(closure_1_3[49]).getApplicationCommandSection(item)), title: item.title, promotedApplicationIds: item.promotedApplicationIds });
                                                                              };
                                                                              return closure_19(context(tmp2[54]), obj26);
                                                                            } else if (tmp(tmp2[48]).AppLauncherHomeListItemType.DIVIDER_ITEM === type) {
                                                                              tmp8 = closure_19;
                                                                              tmp9 = closure_1_35;
                                                                              return closure_19(closure_1_35, {});
                                                                            } else if (tmp(tmp2[48]).AppLauncherHomeListItemType.LEARN_MORE === type) {
                                                                              tmp4 = closure_19;
                                                                              tmp5 = context;
                                                                              obj = { visible: null };
                                                                              tmp7 = closure_3;
                                                                              tmp6 = context(tmp2[55]);
                                                                              obj.visible = closure_3.valueOf();
                                                                              return closure_19(tmp6, obj);
                                                                            } else {
                                                                              tmp3 = null;
                                                                              return null;
                                                                            }
                                                                          }
                                                                        }
                                                                        cResult[105] = tmp71;
                                                                        cResult[106] = wt;
                                                                      }
                                                                    }
                                                                    const items6 = [tmp87, tmp89];
                                                                    cResult[97] = tmp87;
                                                                    cResult[98] = tmp89;
                                                                    cResult[99] = items6;
                                                                    const tmpResult10 = tmp(11726);
                                                                  }
                                                                  let obj7 = {};
                                                                  let merged = Object.assign(tmp8.list);
                                                                  obj7.paddingBottom = sum;
                                                                  cResult[80] = sum;
                                                                  cResult[81] = tmp8.list;
                                                                  cResult[82] = obj7;
                                                                  const tmpResult9 = tmp(11724);
                                                                }
                                                              }
                                                            }
                                                          }
                                                        }
                                                      }
                                                    }
                                                  }
                                                }
                                              }
                                            }
                                          }
                                        }
                                        class Ce {
                                          constructor(arg0) {
                                            item = navigation.item;
                                            index = navigation.index;
                                            type = item.type;
                                            tmp = navigation;
                                            tmp2 = closure_3;
                                            if (navigation(closure_3[48]).AppLauncherHomeListItemType.PLACEHOLDER === type) {
                                              tmp40 = closure_19;
                                              tmp41 = context;
                                              obj1 = { isFirstRow: null, isLastRow: null, style: null };
                                              num2 = 0;
                                              obj1.isFirstRow = 0 === index;
                                              tmp42 = list;
                                              num3 = 1;
                                              obj1.isLastRow = index === list.length - 1;
                                              obj15 = { height: null };
                                              tmp43 = closure_5;
                                              obj15.height = closure_5;
                                              obj1.style = obj15;
                                              return closure_19(context(tmp2[51]), obj1);
                                            } else if (tmp(tmp2[48]).AppLauncherHomeListItemType.SECTION_HEADER === type) {
                                              tmp38 = closure_19;
                                              tmp39 = closure_4;
                                              items = [, ];
                                              items[0] = closure_4.sectionHeader;
                                              num = 0;
                                              obj16 = null;
                                              if (0 !== index) {
                                                obj16 = { marginTop: 24 };
                                              }
                                              obj17 = { accessibilityRole: "header", variant: "text-lg/bold", color: "mobile-text-heading-primary", style: null, children: null };
                                              items[1] = obj16;
                                              obj17.style = items;
                                              obj17.children = item.section;
                                              return tmp38(tmp(tmp2[18]).Text, obj17);
                                            } else if (tmp(tmp2[48]).AppLauncherHomeListItemType.SHELF_ITEM === type) {
                                              tmp36 = closure_19;
                                              tmp37 = closure_30;
                                              obj18 = { section: null, onPress: null, isFirstRow: null, isLastRow: null };
                                              obj18.section = item.section;
                                              obj18.onPress = function onPress(shelfData) {
                                                closure_13({ shelfData, sectionName: item.sectionName });
                                              };
                                              ({ isFirstRow: obj10.isFirstRow, isLastRow: obj10.isLastRow } = item);
                                              return closure_19(closure_30, obj18, item.section.application.id);
                                            } else if (tmp(tmp2[48]).AppLauncherHomeListItemType.SHELF_ITEM_TUPLE === type) {
                                              obj19 = { context: null, sectionName: null, onPress: null, usesHandleActivityItemSelected: null, onActivityItemSelected: null, shelfItem1: null, shelfItem2: null, isLastTuple: null, entrypoint: null, containerWidth: null };
                                              tmp29 = context;
                                              obj19.context = context;
                                              tmp27 = closure_19;
                                              tmp28 = closure_31;
                                              obj19.sectionName = tmp(tmp2[44]).AppLauncherSectionName.ACTIVITIES;
                                              obj19.onPress = function onPress(shelfData) {
                                                const obj = { shelfData, sectionName: item.sectionName, navigates: null };
                                                let tmp2 = clickOnHomeActivityOpensAppDetails;
                                                if (!tmp2) {
                                                  tmp2 = entrypoint !== AppLauncherTypes.AppLauncherEntrypoint.VOICE;
                                                }
                                                obj.navigates = tmp2;
                                                closure_13(obj);
                                              };
                                              tmp30 = closure_20;
                                              tmp31 = !closure_20;
                                              if (!closure_20) {
                                                tmp32 = entrypoint;
                                                tmp31 = entrypoint === tmp(tmp2[44]).AppLauncherEntrypoint.VOICE;
                                              }
                                              obj19.usesHandleActivityItemSelected = tmp31;
                                              tmp33 = onActivityItemSelected;
                                              obj19.onActivityItemSelected = onActivityItemSelected;
                                              ({ shelfItem1: obj9.shelfItem1, shelfItem2: obj9.shelfItem2, isLastTuple: obj9.isLastTuple } = item);
                                              tmp34 = entrypoint;
                                              obj19.entrypoint = entrypoint;
                                              tmp35 = width;
                                              obj19.containerWidth = width;
                                              return tmp27(tmp28, obj19, item.shelfItem1.application.id);
                                            } else if (tmp(tmp2[48]).AppLauncherHomeListItemType.RECOMMENDATION_TUPLE === type) {
                                              tmp22 = closure_19;
                                              tmp23 = closure_33;
                                              obj20 = { context: null, sectionName: null, onPress: null, items: null, isLastTuple: null, entrypoint: null, containerWidth: null };
                                              tmp24 = context;
                                              obj20.context = context;
                                              obj20.sectionName = item.sectionName;
                                              obj20.onPress = function onPress(application, sectionName) {
                                                return closure_1_19({ application, sectionName });
                                              };
                                              ({ items: obj8.items, isLastTuple: obj8.isLastTuple } = item);
                                              tmp25 = entrypoint;
                                              obj20.entrypoint = entrypoint;
                                              tmp26 = width;
                                              obj20.containerWidth = width;
                                              return closure_19(closure_33, obj20);
                                            } else if (tmp(tmp2[48]).AppLauncherHomeListItemType.APP === type) {
                                              tmp19 = closure_19;
                                              tmp20 = closure_29;
                                              obj21 = { section: null, onPress: null, isFirstRow: null, isLastRow: null, style: null };
                                              obj21.section = item.section;
                                              obj21.onPress = function onPress() {
                                                closure_12(item.section, AppLauncherTypes.AppLauncherSectionName.INSTALLED);
                                              };
                                              ({ isFirstRow: obj6.isFirstRow, isLastRow: obj6.isLastRow } = item);
                                              obj22 = { height: null };
                                              tmp21 = closure_5;
                                              obj22.height = closure_5;
                                              obj21.style = obj22;
                                              return closure_19(closure_29, obj21, item.section.id);
                                            } else if (tmp(tmp2[48]).AppLauncherHomeListItemType.RECOMMENDATION_SECTION_HEADER === type) {
                                              tmp17 = closure_19;
                                              tmp18 = closure_1_36;
                                              obj23 = { index: null, children: null };
                                              obj23.index = index;
                                              obj23.children = item.section;
                                              return closure_19(closure_1_36, obj23);
                                            } else if (tmp(tmp2[48]).AppLauncherHomeListItemType.RECOMMENDATION_BANNER_CARD === type) {
                                              tmp14 = closure_19;
                                              tmp15 = context;
                                              obj24 = { application: null, isFirst: null, isLast: null, onPress: null, isLandscape: null, showsPromoted: null, overrideImageUrl: null };
                                              obj24.application = item.item.application;
                                              ({ isFirst: obj4.isFirst, isLast: obj4.isLast } = item);
                                              obj24.onPress = function onPress() {
                                                return closure_19({ application: item.item.application, sectionName: item.sectionName });
                                              };
                                              tmp16 = closure_11;
                                              obj24.isLandscape = closure_11;
                                              ({ showsPromoted: obj4.showsPromoted, overrideImageUrl: obj4.overrideImageUrl } = item);
                                              return closure_19(context(tmp2[52]), obj24);
                                            } else if (tmp(tmp2[48]).AppLauncherHomeListItemType.RECOMMENDATION_APP === type) {
                                              tmp12 = closure_19;
                                              tmp13 = context;
                                              obj25 = { application: null, isFirstRow: null, isLastRow: null, onPress: null, showsPromoted: null };
                                              ({ application: obj3.application, isFirstRow: obj3.isFirstRow, isLastRow: obj3.isLastRow } = item);
                                              obj25.onPress = function onPress() {
                                                return closure_19({ application: item.application, sectionName: item.sectionName });
                                              };
                                              obj25.showsPromoted = item.showsPromoted;
                                              return closure_19(context(tmp2[53]), obj25, item.application.id);
                                            } else if (tmp(tmp2[48]).AppLauncherHomeListItemType.VIEW_ALL === type) {
                                              tmp10 = closure_19;
                                              tmp11 = context;
                                              obj26 = { title: null, onPress: null };
                                              obj26.title = item.title;
                                              obj26.onPress = function onPress() {
                                                const applications = item.applications;
                                                const mapped = applications.map((item) => item);
                                                const obj = AppLauncherNativeUtils;
                                                const result = obj.handleViewAllSelected({ location: ApplicationCommandTypes.ApplicationCommandTriggerLocations.APP_LAUNCHER_HOME, navigation, context, sectionName: item.sectionName, sectionOverallPosition: item.sectionOverallPosition, applications: mapped, sectionItemType: FrecencySection.SectionItemType.APPS, commands: [], sectionDescriptors: mapped.map((item) => item(closure_1_3[49]).getApplicationCommandSection(item)), title: item.title, promotedApplicationIds: item.promotedApplicationIds });
                                              };
                                              return closure_19(context(tmp2[54]), obj26);
                                            } else if (tmp(tmp2[48]).AppLauncherHomeListItemType.DIVIDER_ITEM === type) {
                                              tmp8 = closure_19;
                                              tmp9 = closure_1_35;
                                              return closure_19(closure_1_35, {});
                                            } else if (tmp(tmp2[48]).AppLauncherHomeListItemType.LEARN_MORE === type) {
                                              tmp4 = closure_19;
                                              tmp5 = context;
                                              obj = { visible: null };
                                              tmp7 = closure_3;
                                              tmp6 = context(tmp2[55]);
                                              obj.visible = closure_3.valueOf();
                                              return closure_19(tmp6, obj);
                                            } else {
                                              tmp3 = null;
                                              return null;
                                            }
                                          }
                                        }
                                        cResult[38] = clickOnHomeActivityOpensAppDetails;
                                        cResult[39] = context;
                                        cResult[40] = entrypoint;
                                        cResult[41] = tmp7;
                                        cResult[42] = tmp11;
                                        cResult[43] = list.length;
                                        cResult[44] = navigation;
                                        cResult[45] = onActivityItemSelected;
                                        cResult[46] = tmp17;
                                        cResult[47] = tmp16;
                                        cResult[48] = tmp21;
                                        cResult[49] = tmp9;
                                        cResult[50] = tmp8.sectionHeader;
                                        cResult[51] = width;
                                        cResult[52] = Ce;
                                        let tmpResult = tmp(11713);
                                      }
                                    }
                                  }
                                  function ve(command, section) {
                                    const obj = AppLauncherNativeUtils;
                                    const result = obj.handleApplicationCommandSelected({ location: ApplicationCommandTypes.ApplicationCommandTriggerLocations.APP_LAUNCHER_HOME, context, command, section, sectionDescriptors, query: "", navigation, sectionName: AppLauncherTypes.AppLauncherSectionName.RECENT_COMMANDS, entrypoint });
                                  }
                                  cResult[33] = context;
                                  cResult[34] = entrypoint;
                                  cResult[35] = navigation;
                                  cResult[36] = sectionDescriptors;
                                  cResult[37] = ve;
                                }
                              }
                              function ye() {
                                const found = inThisServerItems.find((type) => type.type === navigation(11712).AppLauncherHomeListItemType.VIEW_ALL);
                                let mapped;
                                if (found != null) {
                                  const applications = found.applications;
                                  if (applications != null) {
                                    mapped = applications.map((item) => item);
                                  }
                                }
                                if (null != mapped) {
                                  const obj2 = { location: ApplicationCommandTypes.ApplicationCommandTriggerLocations.APP_LAUNCHER_HOME, navigation, context, sectionName: AppLauncherTypes.AppLauncherSectionName.APPS_IN_THIS_SERVER, applications: mapped, sectionItemType: FrecencySection.SectionItemType.APPS, commands: [], sectionDescriptors: mapped.map((item) => navigation(7030).getApplicationCommandSection(item)), title: null };
                                  const intl = util.intl;
                                  obj2.title = intl.string(util.t.oJyzCu);
                                  const result = AppLauncherNativeUtils.handleViewAllSelected(obj2);
                                }
                              }
                              cResult[29] = context;
                              cResult[30] = inThisServerItems;
                              cResult[31] = navigation;
                              cResult[32] = ye;
                            }
                          }
                        }
                      }
                    }
                    function ue(sectionItemType) {
                      const obj2 = { location: ApplicationCommandTypes.ApplicationCommandTriggerLocations.APP_LAUNCHER_APPLICATION_VIEW_FRECENCT, navigation, context, sectionName: null, applications: null, sectionItemType: null, commands: null, sectionDescriptors: null, title: null };
                      let str = "recent_apps_view_more";
                      if (sectionItemType === FrecencySection.SectionItemType.COMMANDS) {
                        str = "recent_commands_view_more";
                      }
                      obj2.sectionName = str;
                      const mapped = frecencyUsedAppList.map((section) => {
                        section = section.section;
                        let application;
                        if (section != null) {
                          application = section.application;
                        }
                        return application;
                      });
                      obj2.applications = mapped.filter(GlobalUtils.isNotNullish);
                      obj2.sectionItemType = sectionItemType;
                      obj2.commands = frecencyCommands;
                      obj2.sectionDescriptors = sectionDescriptors;
                      if (entrypoint === AppLauncherTypes.AppLauncherEntrypoint.VOICE) {
                        const intl3 = util.intl;
                        let stringResult = intl3.string(util.t["2pFD8L"]);
                      } else if (sectionItemType === FrecencySection.SectionItemType.COMMANDS) {
                        const intl2 = util.intl;
                        stringResult = intl2.string(util.t.V3Sq95);
                      } else {
                        const intl = util.intl;
                        stringResult = intl.string(util.t.SCViVk);
                      }
                      obj2.title = stringResult;
                      const result = AppLauncherNativeUtils.handleViewAllSelected(obj2);
                    }
                    cResult[23] = entrypoint;
                    cResult[24] = frecencyCommands;
                    cResult[25] = frecencyUsedAppList;
                    cResult[26] = navigation;
                    cResult[27] = sectionDescriptors;
                    cResult[28] = ue;
                  }
                }
              }
              function oe(application) {
                application = application.application;
                const isActivityAppResult = AppLauncherUtils.isActivityApp(application);
                let tmp4 = !isActivityAppResult;
                if (!isActivityAppResult) {
                  tmp4 = null != sectionDescriptors.find((id) => id.id === application.id);
                }
                const tmpResult = AppLauncherNativeUtils;
                const result = tmpResult.handleApplicationSelected({ location: ApplicationCommandTypes.ApplicationCommandTriggerLocations.APP_LAUNCHER_HOME, application, navigation, context, installOnDemand: !tmp4, sectionName: application.sectionName, entrypoint });
                const obj2 = { location: ApplicationCommandTypes.ApplicationCommandTriggerLocations.APP_LAUNCHER_HOME, application, navigation, context, installOnDemand: !tmp4, sectionName: application.sectionName, entrypoint };
              }
              cResult[17] = context;
              cResult[18] = entrypoint;
              cResult[19] = navigation;
              cResult[20] = sectionDescriptors;
              cResult[21] = oe;
              tmp21 = oe;
            }
            const obj8 = { context, entrypoint: null };
            cResult[14] = context;
            cResult[15] = entrypoint;
            cResult[16] = obj8;
            tmp18 = obj8;
          }
        }
        function ee(navigates) {
          navigates = navigates.navigates;
          let tmp = undefined === navigates;
          ({ shelfData, sectionName } = navigates);
          if (!tmp) {
            tmp = navigates;
          }
          const obj = AppLauncherNativeUtils;
          const result = obj.handleApplicationSelected({ location: ApplicationCommandTypes.ApplicationCommandTriggerLocations.APP_LAUNCHER_HOME, application: shelfData.application, navigation, context, sectionName, navigates: tmp, entrypoint });
        }
        cResult[11] = entrypoint;
        cResult[12] = navigation;
        cResult[13] = ee;
        tmp17 = ee;
      }
    }
    const fn3 = function $(application, sectionName) {
      const obj2 = { location: ApplicationCommandTypes.ApplicationCommandTriggerLocations.APP_LAUNCHER_HOME, application: null, navigation: null, context: null, sectionName: null, entrypoint: null };
      let FAKE_BUILT_IN_APP = application.application;
      if (FAKE_BUILT_IN_APP == null) {
        FAKE_BUILT_IN_APP = AppLauncherUtils.FAKE_BUILT_IN_APP;
      }
      obj2.application = FAKE_BUILT_IN_APP;
      obj2.navigation = navigation;
      obj2.context = context;
      obj2.sectionName = sectionName;
      obj2.entrypoint = entrypoint;
      const result = AppLauncherNativeUtils.handleApplicationSelected(obj2);
    };
    cResult[6] = context;
    cResult[7] = entrypoint;
    cResult[8] = navigation;
    cResult[9] = fn3;
    tmp16 = fn3;
  }
  const fn2 = function c() {
    keyboardCloseReasonRef.current = AppLauncherContext.AppLauncherKeyboardCloseReason.COMMAND;
    current = chatInputRef.current;
    if (current != null) {
      current.closeCustomKeyboard();
    }
  };
  cResult[3] = chatInputRef;
  cResult[4] = keyboardCloseReasonRef;
  cResult[5] = fn2;
  let obj3 = navigation(10994);
}) : ((route) => {
  const params = route.route.params;
  const context = params.context;
  const initialSearchQuery = params.initialSearchQuery;
  const navigation = route.navigation;
  let handleViewableItemsChanged;
  c23 = undefined;
  let callback5;
  let pinnedSearchBarBottomBorder;
  let ref1;
  c31 = undefined;
  c32 = undefined;
  let stateFromStores;
  let callback6;
  let trackAppLauncherHomeItemImpression;
  let callback8;
  const viewableAppLauncherHomeItems = context(handleViewableItemsChanged[39]).useViewableAppLauncherHomeItems();
  handleViewableItemsChanged = viewableAppLauncherHomeItems.handleViewableItemsChanged;
  ({ hasViewedActivityItem, hasViewedLearnMoreItem } = viewableAppLauncherHomeItems);
  const tmp5 = initialSearchQuery(handleViewableItemsChanged[40])(hasViewedActivityItem);
  const tmp6 = initialSearchQuery(handleViewableItemsChanged[40])(hasViewedLearnMoreItem);
  _slicedToArray = tmp6;
  const tmp7 = callback5();
  const tmp8 = initialSearchQuery(handleViewableItemsChanged[41])();
  height = tmp8;
  let obj = context(handleViewableItemsChanged[39]);
  const requiredAppLauncherContext = context(handleViewableItemsChanged[42]).useRequiredAppLauncherContext();
  const chatInputRef = requiredAppLauncherContext.chatInputRef;
  const keyboardCloseReasonRef = requiredAppLauncherContext.keyboardCloseReasonRef;
  const width = requiredAppLauncherContext.width;
  const entrypoint = requiredAppLauncherContext.entrypoint;
  const onActivityItemSelected = requiredAppLauncherContext.onActivityItemSelected;
  let size = initialSearchQuery(handleViewableItemsChanged[43])();
  isLandscape = tmp10;
  let items = [entrypoint];
  const effect = height.useEffect(() => {
    if (entrypoint === AppLauncherTypes.AppLauncherEntrypoint.VOICE) {
      const result = EmbeddedActivitiesActionCreatorsAll.dismissNewActivityIndicator();
    }
  }, items);
  const items1 = [chatInputRef, keyboardCloseReasonRef];
  const items2 = [context, entrypoint, navigation];
  const callback = height.useCallback(() => {
    keyboardCloseReasonRef.current = AppLauncherContext.AppLauncherKeyboardCloseReason.COMMAND;
    current = chatInputRef.current;
    if (current != null) {
      current.closeCustomKeyboard();
    }
  }, items1);
  const callback1 = height.useCallback((application, sectionName) => {
    const obj2 = { location: ApplicationCommandTypes.ApplicationCommandTriggerLocations.APP_LAUNCHER_HOME, application: null, navigation: null, context: null, sectionName: null, entrypoint: null };
    let FAKE_BUILT_IN_APP = application.application;
    if (FAKE_BUILT_IN_APP == null) {
      FAKE_BUILT_IN_APP = AppLauncherUtils.FAKE_BUILT_IN_APP;
    }
    obj2.application = FAKE_BUILT_IN_APP;
    obj2.navigation = navigation;
    obj2.context = context;
    obj2.sectionName = sectionName;
    obj2.entrypoint = entrypoint;
    const result = AppLauncherNativeUtils.handleApplicationSelected(obj2);
  }, items2);
  const items3 = [context, entrypoint, navigation];
  const callback2 = height.useCallback((navigates) => {
    let flag = navigates.navigates;
    ({ shelfData, sectionName } = navigates);
    if (flag === undefined) {
      flag = true;
    }
    const obj = AppLauncherNativeUtils;
    const result = obj.handleApplicationSelected({ location: ApplicationCommandTypes.ApplicationCommandTriggerLocations.APP_LAUNCHER_HOME, application: shelfData.application, navigation, context, sectionName, navigates: flag, entrypoint });
  }, items3);
  const tmp15 = closure_38({ context, entrypoint });
  const list = tmp15.list;
  const frecencyCommands = tmp15.frecencyCommands;
  const frecencyUsedAppList = tmp15.frecencyUsedAppList;
  const sectionDescriptors = tmp15.sectionDescriptors;
  const inThisServerItems = tmp15.inThisServerItems;
  const items4 = [context, entrypoint, navigation, sectionDescriptors];
  ({ loading, showsEmptyState, showNoPermsState } = tmp15);
  const callback3 = height.useCallback((application) => {
    application = application.application;
    const isActivityAppResult = AppLauncherUtils.isActivityApp(application);
    let tmp4 = !isActivityAppResult;
    if (!isActivityAppResult) {
      tmp4 = null != sectionDescriptors.find((id) => id.id === application.id);
    }
    const tmpResult = AppLauncherNativeUtils;
    const result = tmpResult.handleApplicationSelected({ location: ApplicationCommandTypes.ApplicationCommandTriggerLocations.APP_LAUNCHER_HOME, application, navigation, context, installOnDemand: !tmp4, sectionName: application.sectionName, entrypoint });
    const obj2 = { location: ApplicationCommandTypes.ApplicationCommandTriggerLocations.APP_LAUNCHER_HOME, application, navigation, context, installOnDemand: !tmp4, sectionName: application.sectionName, entrypoint };
  }, items4);
  let obj2 = context(handleViewableItemsChanged[42]);
  const clickOnHomeActivityOpensAppDetails = context(handleViewableItemsChanged[50]).useClickOnHomeActivityOpensAppDetails();
  const items5 = [clickOnHomeActivityOpensAppDetails, context, entrypoint, tmp6, size.width > size.height, list.length, navigation, onActivityItemSelected, callback2, callback1, callback3, tmp8, tmp7.sectionHeader, width];
  const callback4 = height.useCallback((item) => {
    item = item.item;
    const index = item.index;
    const type = item.type;
    if (context(handleViewableItemsChanged[48]).AppLauncherHomeListItemType.PLACEHOLDER === type) {
      const obj2 = { isFirstRow: 0 === index, isLastRow: index === list.length - 1, style: null };
      const obj5 = { height };
      obj2.style = obj5;
      return inThisServerItems(initialSearchQuery(handleViewableItemsChanged[51]), obj2);
    } else if (context(handleViewableItemsChanged[48]).AppLauncherHomeListItemType.SECTION_HEADER === type) {
      const items = [closure_5.sectionHeader, ];
      let obj7 = null;
      if (0 !== index) {
        obj7 = { marginTop: 24 };
      }
      const obj11 = { accessibilityRole: "header", variant: "text-lg/bold", color: "mobile-text-heading-primary", style: null, children: null };
      items[1] = obj7;
      obj11.style = items;
      obj11.children = item.section;
      return inThisServerItems(context(handleViewableItemsChanged[18]).Text, obj11);
    } else if (context(handleViewableItemsChanged[48]).AppLauncherHomeListItemType.SHELF_ITEM === type) {
      const obj12 = {
        section: item.section,
        onPress(shelfData) {
            callback2({ shelfData, sectionName: item.sectionName });
          },
        isFirstRow: null,
        isLastRow: null
      };
      ({ isFirstRow: obj10.isFirstRow, isLastRow: obj10.isLastRow } = item);
      return inThisServerItems(ref1, obj12, item.section.application.id);
    } else if (context(handleViewableItemsChanged[48]).AppLauncherHomeListItemType.SHELF_ITEM_TUPLE === type) {
      const obj13 = {
        context: item,
        sectionName: context(handleViewableItemsChanged[44]).AppLauncherSectionName.ACTIVITIES,
        onPress(shelfData) {
            const obj = { shelfData, sectionName: item.sectionName, navigates: null };
            let tmp2 = clickOnHomeActivityOpensAppDetails;
            if (!tmp2) {
              tmp2 = entrypoint !== AppLauncherTypes.AppLauncherEntrypoint.VOICE;
            }
            obj.navigates = tmp2;
            callback2(obj);
          },
        usesHandleActivityItemSelected: null,
        onActivityItemSelected: null,
        shelfItem1: null,
        shelfItem2: null,
        isLastTuple: null,
        entrypoint: null,
        containerWidth: null
      };
      let tmp31 = !clickOnHomeActivityOpensAppDetails;
      if (!clickOnHomeActivityOpensAppDetails) {
        tmp31 = entrypoint === context(handleViewableItemsChanged[44]).AppLauncherEntrypoint.VOICE;
      }
      obj13.usesHandleActivityItemSelected = tmp31;
      obj13.onActivityItemSelected = onActivityItemSelected;
      ({ shelfItem1: obj9.shelfItem1, shelfItem2: obj9.shelfItem2, isLastTuple: obj9.isLastTuple } = item);
      obj13.entrypoint = entrypoint;
      obj13.containerWidth = width;
      return inThisServerItems(c31, obj13, item.shelfItem1.application.id);
    } else if (context(handleViewableItemsChanged[48]).AppLauncherHomeListItemType.RECOMMENDATION_TUPLE === type) {
      const obj14 = {
        context: item,
        sectionName: item.sectionName,
        onPress(application, sectionName) {
            return callback3({ application, sectionName });
          },
        items: null,
        isLastTuple: null,
        entrypoint: null,
        containerWidth: null
      };
      ({ items: obj8.items, isLastTuple: obj8.isLastTuple } = item);
      obj14.entrypoint = entrypoint;
      obj14.containerWidth = width;
      return inThisServerItems(stateFromStores, obj14);
    } else if (context(handleViewableItemsChanged[48]).AppLauncherHomeListItemType.APP === type) {
      const obj27 = {
        section: item.section,
        onPress() {
            callback1(item.section, AppLauncherTypes.AppLauncherSectionName.INSTALLED);
          },
        isFirstRow: null,
        isLastRow: null,
        style: null
      };
      ({ isFirstRow: obj6.isFirstRow, isLastRow: obj6.isLastRow } = item);
      const obj28 = { height };
      obj27.style = obj28;
      return inThisServerItems(pinnedSearchBarBottomBorder, obj27, item.section.id);
    } else if (context(handleViewableItemsChanged[48]).AppLauncherHomeListItemType.RECOMMENDATION_SECTION_HEADER === type) {
      const obj29 = { index, children: item.section };
      return inThisServerItems(callback8, obj29);
    } else if (context(handleViewableItemsChanged[48]).AppLauncherHomeListItemType.RECOMMENDATION_BANNER_CARD === type) {
      const obj30 = { application: item.item.application, isFirst: null, isLast: null, onPress: null, isLandscape: null, showsPromoted: null, overrideImageUrl: null };
      ({ isFirst: obj4.isFirst, isLast: obj4.isLast } = item);
      obj30.onPress = function onPress() {
        return callback3({ application: item.item.application, sectionName: item.sectionName });
      };
      obj30.isLandscape = isLandscape;
      ({ showsPromoted: obj4.showsPromoted, overrideImageUrl: obj4.overrideImageUrl } = item);
      return inThisServerItems(initialSearchQuery(handleViewableItemsChanged[52]), obj30);
    } else if (context(handleViewableItemsChanged[48]).AppLauncherHomeListItemType.RECOMMENDATION_APP === type) {
      const obj31 = { application: null, isFirstRow: null, isLastRow: null, onPress: null, showsPromoted: null };
      ({ application: obj3.application, isFirstRow: obj3.isFirstRow, isLastRow: obj3.isLastRow } = item);
      obj31.onPress = function onPress() {
        return callback3({ application: item.application, sectionName: item.sectionName });
      };
      obj31.showsPromoted = item.showsPromoted;
      return inThisServerItems(initialSearchQuery(handleViewableItemsChanged[53]), obj31, item.application.id);
    } else if (context(handleViewableItemsChanged[48]).AppLauncherHomeListItemType.VIEW_ALL === type) {
      const obj32 = {
        title: item.title,
        onPress() {
            const applications = item.applications;
            const mapped = applications.map((item) => item);
            const obj = AppLauncherNativeUtils;
            const result = obj.handleViewAllSelected({ location: ApplicationCommandTypes.ApplicationCommandTriggerLocations.APP_LAUNCHER_HOME, navigation, context, sectionName: item.sectionName, sectionOverallPosition: item.sectionOverallPosition, applications: mapped, sectionItemType: FrecencySection.SectionItemType.APPS, commands: [], sectionDescriptors: mapped.map((item) => item(closure_1_3[49]).getApplicationCommandSection(item)), title: item.title, promotedApplicationIds: item.promotedApplicationIds });
          }
      };
      return inThisServerItems(initialSearchQuery(handleViewableItemsChanged[54]), obj32);
    } else if (context(handleViewableItemsChanged[48]).AppLauncherHomeListItemType.DIVIDER_ITEM === type) {
      return inThisServerItems(trackAppLauncherHomeItemImpression, {});
    } else if (context(handleViewableItemsChanged[48]).AppLauncherHomeListItemType.LEARN_MORE === type) {
      let obj = { visible: closure_4.valueOf() };
      return inThisServerItems(initialSearchQuery(handleViewableItemsChanged[55]), obj);
    } else {
      return null;
    }
  }, items5);
  height.useRef(null);
  let obj4 = context(handleViewableItemsChanged[50]);
  const tmp20 = _slicedToArray;
  [tmp22, c23] = height.useState(false);
  const items6 = [entrypoint];
  const memo = height.useMemo(() => _modDef12.debounce((query) => {
    context(handleViewableItemsChanged[57]).trackWithMetadata(frecencyCommands.APP_LAUNCHER_SEARCH_QUERY_TYPED, { query, source });
  }, 400, { leading: false, trailing: true }), items6);
  ref = height.useRef(null);
  const effect1 = height.useEffect(() => () => {
    current = ref.current;
    if (current != null) {
      current.cancel();
    }
  }, []);
  const items7 = [memo];
  callback5 = height.useCallback((noop) => {
    closure_0 = noop;
    _undefined(0 !== noop.length);
    current = ref.current;
    if (current != null) {
      current.cancel();
    }
    ref.current = context(handleViewableItemsChanged[58]).runAfterInteractions(() => {
      current = ref.current;
      if (current != null) {
        current.setQuery(closure_0);
      }
    }, 100);
    memo(noop);
    const obj = context(handleViewableItemsChanged[58]);
  }, items7);
  height.useRef(callback5);
  const items8 = [callback5];
  const effect2 = height.useEffect(() => {
    closure_27.current = callback5;
  }, items8);
  const items9 = [entrypoint];
  closure_28 = height.useCallback(() => {
    AppAnalyticsUtils.trackWithMetadata(constants.APP_LAUNCHER_SEARCH_FOCUSED, { source: entrypoint });
  }, items9);
  const tmp21 = _slicedToArray(height.useState(false), 2);
  let str = "home-scroller";
  if (tmp22) {
    str = "search-scroller";
  }
  pinnedSearchBarBottomBorder = context(handleViewableItemsChanged[59]).usePinnedSearchBarBottomBorder({ key: str, triggerScrollHeight: 5 });
  ref1 = obj3.useRef(null);
  const items10 = [initialSearchQuery];
  const layoutEffect = obj3.useLayoutEffect(() => {
    if (null != initialSearchQuery) {
      current = ref1.current;
      if (current != null) {
        current.setText(initialSearchQuery);
      }
      const current2 = ref1.current;
      if (current2 != null) {
        current2.focus();
      }
      ref2.current(initialSearchQuery);
    }
  }, items10);
  const sum = initialSearchQuery(handleViewableItemsChanged[38])().bottom + callback2;
  c31 = sum;
  let obj5 = context(handleViewableItemsChanged[59]);
  const bottomSheetFlashListBottomViewabilityInset = context(handleViewableItemsChanged[60]).useBottomSheetFlashListBottomViewabilityInset();
  ({ flashListRef, bottomVisibilityInsetRef } = bottomSheetFlashListBottomViewabilityInset);
  const obj6 = { type: null, name: null };
  let tmpResult = context(handleViewableItemsChanged[60]);
  obj6.type = context(handleViewableItemsChanged[61]).ImpressionTypes.VIEW;
  obj6.name = context(handleViewableItemsChanged[61]).ImpressionNames.APP_LAUNCHER_HOME_ACTIVITY_ITEM;
  const items11 = [tmp5];
  initialSearchQuery(handleViewableItemsChanged[62])(obj6, { disableTrack: !tmp5 }, items11);
  let obj7 = { disableTrack: !tmp5 };
  const tmp4Result = initialSearchQuery(handleViewableItemsChanged[62]);
  [tmp35, c32] = tmp20(height.useState(false), 2);
  const effect3 = obj3.useEffect(() => {
    _undefined3(true);
  }, []);
  const tmp20Result = tmp20(height.useState(false), 2);
  const items12 = [callback1];
  stateFromStores = context(handleViewableItemsChanged[30]).useStateFromStores(items12, () => callback1.getTriggeredOnboardingContentMetadata().willShowGlobalSearchOnboarding);
  const items13 = [stateFromStores];
  callback6 = obj3.useCallback((arg0) => {
    if (stateFromStores) {
      const obj2 = { dismissAction: tmp };
      const result = DismissibleContentUnsafeUtils.UNSAFE_markDismissibleContentAsDismissed(dismissible_content.DismissibleContent.APP_LAUNCHER_GLOBAL_SEARCH_ONBOARDING, obj2);
      const obj4 = {};
      const merged = Object.assign(AppLauncherOnboardingPersistedStore.getTriggeredOnboardingContentMetadata());
      obj4.willShowGlobalSearchOnboarding = false;
      const result1 = AppLauncherOnboardingActionCreators.setTriggeredOnboardingContentMetadata(obj4);
    }
  }, items13);
  const tmpResult4 = context(handleViewableItemsChanged[30]);
  trackAppLauncherHomeItemImpression = context(handleViewableItemsChanged[66]).useTrackAppLauncherHomeItemImpression().trackAppLauncherHomeItemImpression;
  const items14 = [sum, tmp7.list];
  const items15 = [sum];
  const memo1 = obj3.useMemo(() => {
    const obj = {};
    const merged = Object.assign(closure_5.list);
    obj.paddingBottom = _undefined2;
    return obj;
  }, items14);
  const memo2 = obj3.useMemo(() => ({ bottom: _undefined2 }), items15);
  const items16 = [pinnedSearchBarBottomBorder];
  const callback7 = obj3.useCallback((type) => type.type, []);
  callback8 = obj3.useCallback((arg0) => {
    pinnedSearchBarBottomBorder.scrollHandler(arg0);
  }, items16);
  const items17 = [callback8];
  const callback9 = obj3.useCallback((nativeEvent) => {
    nativeEvent = nativeEvent.nativeEvent;
    const size = { width: nativeEvent.layoutMeasurement.width, height: nativeEvent.layoutMeasurement.height, offset: nativeEvent.contentOffset.y, contentWidth: nativeEvent.contentSize.width, contentHeight: nativeEvent.contentSize.height };
    callback8(size);
  }, items17);
  const tmpResult5 = context(handleViewableItemsChanged[66]);
  const appLauncherFlashListProps = context(handleViewableItemsChanged[67]).useAppLauncherFlashListProps({ onScrollHandler: callback8 });
  const items18 = [handleViewableItemsChanged, trackAppLauncherHomeItemImpression];
  const obj8 = { style: tmp7.container, children: null };
  const memo3 = obj3.useMemo(() => {
    const items = [{ viewabilityConfig: {}, onViewableItemsChanged: handleViewableItemsChanged }, { viewabilityConfig, onViewableItemsChanged: trackAppLauncherHomeItemImpression }];
    return items;
  }, items18);
  const items19 = [inThisServerItems(height, { style: tmp7.topBackgroundFill }), , , ];
  const obj10 = { style: tmp7.searchBarContainer, children: null };
  let obj11 = { ref: ref1, placeholder: null, round: true, size: "md", onChange: null, onFocus: null };
  if (entrypoint === context(handleViewableItemsChanged[44]).AppLauncherEntrypoint.VOICE) {
    let intl2 = tmp(tmp2[19]).intl;
    let stringResult = intl2.string(tmp(tmp2[19]).t["pw+r5b"]);
  } else {
    let intl = tmp(tmp2[19]).intl;
    stringResult = intl.string(tmp(tmp2[19]).t.ziyFv2);
  }
  let obj12 = { children: null };
  obj11.placeholder = stringResult;
  obj11.onChange = callback5;
  obj11.onFocus = function onFocus() {
    closure_28();
    callback6({ actionType: ContentDismissActionType.TAKE_ACTION });
  };
  obj10.children = inThisServerItems(context(handleViewableItemsChanged[68]).SearchField, obj11);
  const items20 = [inThisServerItems(height, obj10), pinnedSearchBarBottomBorder.bottomBorderComponent];
  obj12.children = items20;
  items19[1] = callback3(clickOnHomeActivityOpensAppDetails, obj12);
  if (tmp22) {
    let obj13 = { ref, context, onScroll: callback9, onSend: callback, entrypoint };
    let tmp48Result = tmp48(tmp(tmp2[69]).SearchLocalAndGlobalContentView, obj13);
  } else {
    let obj14 = {
      context,
      sectionDescriptors,
      commands: frecencyCommands,
      loading,
      apps: frecencyUsedAppList,
      onAppSelected: callback3,
      onCommandSelected(command, found) {
          const obj = AppLauncherNativeUtils;
          const result = obj.handleApplicationCommandSelected({ location: ApplicationCommandTypes.ApplicationCommandTriggerLocations.APP_LAUNCHER_HOME, context, command, section: found, sectionDescriptors, query: "", navigation, sectionName: AppLauncherTypes.AppLauncherSectionName.RECENT_COMMANDS, entrypoint });
        },
      onViewAllSelected(sectionItemType) {
          const obj2 = { location: ApplicationCommandTypes.ApplicationCommandTriggerLocations.APP_LAUNCHER_APPLICATION_VIEW_FRECENCT, navigation, context, sectionName: null, applications: null, sectionItemType: null, commands: null, sectionDescriptors: null, title: null };
          let str = "recent_apps_view_more";
          if (sectionItemType === FrecencySection.SectionItemType.COMMANDS) {
            str = "recent_commands_view_more";
          }
          obj2.sectionName = str;
          const mapped = frecencyUsedAppList.map((section) => {
            section = section.section;
            let application;
            if (section != null) {
              application = section.application;
            }
            return application;
          });
          obj2.applications = mapped.filter(GlobalUtils.isNotNullish);
          obj2.sectionItemType = sectionItemType;
          obj2.commands = frecencyCommands;
          obj2.sectionDescriptors = sectionDescriptors;
          if (entrypoint === AppLauncherTypes.AppLauncherEntrypoint.VOICE) {
            const intl3 = util.intl;
            let stringResult = intl3.string(util.t["2pFD8L"]);
          } else if (sectionItemType === FrecencySection.SectionItemType.COMMANDS) {
            const intl2 = util.intl;
            stringResult = intl2.string(util.t.V3Sq95);
          } else {
            const intl = util.intl;
            stringResult = intl.string(util.t.SCViVk);
          }
          obj2.title = stringResult;
          const result = AppLauncherNativeUtils.handleViewAllSelected(obj2);
        }
    };
    const items21 = [tmp48(tmp4(tmp2[46]), obj14), , , ];
    const obj15 = {
      items: inThisServerItems,
      onAppSelected: callback3,
      onViewAllSelected() {
          const found = inThisServerItems.find((type) => type.type === context(11712).AppLauncherHomeListItemType.VIEW_ALL);
          let mapped;
          if (found != null) {
            const applications = found.applications;
            if (applications != null) {
              mapped = applications.map((item) => item);
            }
          }
          if (null != mapped) {
            const obj2 = { location: ApplicationCommandTypes.ApplicationCommandTriggerLocations.APP_LAUNCHER_HOME, navigation, context, sectionName: AppLauncherTypes.AppLauncherSectionName.APPS_IN_THIS_SERVER, applications: mapped, sectionItemType: FrecencySection.SectionItemType.APPS, commands: [], sectionDescriptors: mapped.map((item) => context(7030).getApplicationCommandSection(item)), title: null };
            const intl = util.intl;
            obj2.title = intl.string(util.t.oJyzCu);
            const result = AppLauncherNativeUtils.handleViewAllSelected(obj2);
          }
        }
    };
    items21[1] = tmp48(tmp4(tmp2[70]), obj15);
    let tmp48Result4 = null;
    if (showsEmptyState) {
      tmp48Result4 = null;
      if (tmp35) {
        tmp48Result4 = tmp48(tmp4(tmp2[71]), {});
      }
    }
    items21[2] = tmp48Result4;
    let tmp48Result5 = null;
    if (showNoPermsState) {
      tmp48Result5 = tmp48(tmp4(tmp2[72]), {});
    }
    const obj16 = { ListHeaderComponent: null, contentContainerStyle: null, scrollIndicatorInsets: null, renderItem: null, getItemType: null, data: null, preserveScrollMomentum: true, automaticallyAdjustsScrollIndicatorInsets: false, keyboardDismissMode: "on-drag", keyboardShouldPersistTaps: "always", showsVerticalScrollIndicator: false, viewabilityConfigCallbackPairs: null, bottomViewabilityInsetRef: null, ref: null, onScroll: null, animatedOnScroll: null, simultaneousHandlers: null, animatedProps: null };
    const obj17 = { children: null };
    items21[3] = tmp48Result5;
    obj17.children = items21;
    obj16.ListHeaderComponent = tmp46(tmp49, obj17);
    obj16.contentContainerStyle = memo1;
    obj16.scrollIndicatorInsets = memo2;
    obj16.renderItem = callback4;
    obj16.getItemType = callback7;
    obj16.data = list;
    obj16.viewabilityConfigCallbackPairs = memo3;
    obj16.bottomViewabilityInsetRef = bottomVisibilityInsetRef;
    if (entrypoint === tmp(tmp2[44]).AppLauncherEntrypoint.VOICE) {
      flashListRef = appLauncherFlashListProps.scrollerRef;
    }
    obj16.ref = flashListRef;
    obj16.onScroll = callback9;
    ({ onScroll: obj19.animatedOnScroll, gestureRef: obj19.simultaneousHandlers, animatedProps: obj19.animatedProps } = appLauncherFlashListProps);
    tmp48Result = tmp48(tmp4(tmp2[67]), obj16);
    const tmp4Result2 = tmp4(tmp2[67]);
  }
  items19[2] = tmp48Result;
  let tmp48Result6 = entrypoint === tmp(tmp2[44]).AppLauncherEntrypoint.TEXT;
  if (tmp48Result6) {
    const obj18 = { windowDimensions: size, visible: stateFromStores, markAsDismissed: callback6 };
    tmp48Result6 = tmp48(tmp4(tmp2[73]), obj18);
  }
  items19[3] = tmp48Result6;
  obj8.children = items19;
  return callback3(height, obj8);
});
export const BaseAppRow = tmp7;