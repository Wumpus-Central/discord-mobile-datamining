import TwinButtons from "TwinButtons";
import getShelfBadgeTypeIfActive from "getShelfBadgeTypeIfActive";
import get_ActivityIndicator from "getSystemLocale";
import participantFromServer from "participantFromServer";
import getIndexKey from "getIndexKey";
import getUserAgnosticState from "getUserAgnosticState";
import getLastFetchTimeMs from "getLastFetchTimeMs";
import getUncachedChannelPermissions from "getUncachedChannelPermissions";
import initialize from "initialize";
import APP_LAUNCHER_BUILT_IN_SECTION_ICON from "APP_LAUNCHER_BUILT_IN_SECTION_ICON";
import ME from "ME";
import { ContentDismissActionType } from "ContentDismissActionType";
import jsxProd from "ChannelListLayoutTypes";
import createCacheKey from "createCacheKey";

let StyleSheet;
let c9;
let closure_16;
let closure_17;
let closure_19;
let closure_20;
let closure_21;
let closure_6;
let metroImportAll;
const require = arg1;
function AppRowLabel(renderedName) {
  renderedName = renderedName.renderedName;
  const tmp = createCacheKey();
  if (renderedName.showsPromoted) {
    let obj = { style: null, children: null };
    obj[0] = tmp.appRowLabelWithPromotedContainer;
    obj = { style: null, variant: "text-md/semibold", color: "mobile-text-heading-primary", lineClamp: 1, children: null };
    obj[0] = tmp.appRowLabelWithPromotedTextContainer;
    obj[4] = renderedName;
    const items = [callback2(require(4189) /* Text */.Text, obj), ];
    const obj1 = { style: null, children: null };
    obj1[0] = tmp.promotedLabel;
    const obj2 = { variant: "text-xxs/semibold", color: "text-muted", children: null };
    const intl = require(1236) /* getSystemLocale */.intl;
    obj2[2] = intl.string(require(1236) /* getSystemLocale */.t["/eVltv"]);
    obj1[1] = callback2(require(4189) /* Text */.Text, obj2);
    items[1] = callback2(closure_6, obj1);
    obj[1] = items;
    let tmp5 = callback3(closure_6, obj);
  } else {
    obj = { variant: "text-md/semibold", color: "mobile-text-heading-primary", lineClamp: 1, children: null };
    obj[3] = renderedName;
    tmp5 = callback2(require(4189) /* Text */.Text, obj);
  }
  return tmp5;
}
class BaseAppRow {
  constructor(arg0) {
    application = global.application;
    ({ iconSource, isFirstRow } = global);
    if (isFirstRow === undefined) {
      isFirstRow = false;
    }
    flag = global.isLastRow;
    if (flag === undefined) {
      flag = false;
    }
    flag2 = global.showsPromoted;
    if (flag2 === undefined) {
      flag2 = false;
    }
    tmp = null != iconSource;
    if (tmp) {
      tmp2 = jsx;
      tmp3 = closure_1;
      tmp4 = closure_3;
      obj = { iconSource: null };
      obj[0] = iconSource;
      tmp = jsx(require("EntityBorderAppIcon"), obj);
    }
    tmp5 = application;
    tmp6 = closure_3;
    obj2 = require("getShelfBadgeTypeIfActive");
    FAKE_BUILT_IN_APP = application;
    if (application == null) {
      FAKE_BUILT_IN_APP = require("getShelfBadgeTypeIfActive").FAKE_BUILT_IN_APP;
    }
    sectionName = obj2.getSectionName(FAKE_BUILT_IN_APP);
    if (!flag2) {
      tmp5Result = require("getShelfBadgeTypeIfActive");
      FAKE_BUILT_IN_APP2 = application;
      if (application == null) {
        FAKE_BUILT_IN_APP2 = require("getShelfBadgeTypeIfActive").FAKE_BUILT_IN_APP;
      }
      flag2 = tmp5Result.isPromotedApplication(FAKE_BUILT_IN_APP2);
    }
    items = [];
    items[0] = application;
    memo = getRecommendationItemsWithViewAll.useMemo(() => {
      let obj = application(outer1_3[19]);
      let FAKE_BUILT_IN_APP = application;
      if (application == null) {
        FAKE_BUILT_IN_APP = tmp(tmp2[19]).FAKE_BUILT_IN_APP;
      }
      const sectionDescription = obj.getSectionDescription(FAKE_BUILT_IN_APP);
      let result = null;
      if (null != sectionDescription) {
        result = null;
        if ("" !== sectionDescription) {
          obj = { content: null, muted: false, layout: null, color: "text-muted" };
          obj[0] = sectionDescription;
          obj[2] = tmp(tmp2[21]).ChannelListLayoutTypes.COMPACT;
          result = tmp(tmp2[20]).renderMessagePreviewMarkup(obj);
          const tmpResult = tmp(tmp2[20]);
        }
      }
      return result;
    }, items);
    obj = { icon: tmp, label: null, labelLineClamp: 1, subLabel: null, subLabelLineClamp: 1, start: null, end: null, arrow: true, onPress: null };
    obj[1] = jsx(AppRowLabel, { renderedName: sectionName, showsPromoted: flag2 });
    obj[3] = memo;
    obj[5] = isFirstRow;
    obj[6] = flag;
    obj[8] = global.onPress;
    return jsx(require("TableRowInner").TableRow, obj);
  }
}
function AppRow(isLastRow) {
  let isFirstRow;
  let section;
  ({ section, isFirstRow } = isLastRow);
  if (isFirstRow === undefined) {
    isFirstRow = false;
  }
  let flag = isLastRow.isLastRow;
  if (flag === undefined) {
    flag = false;
  }
  let obj = require(11239) /* handleApplicationSelected */;
  obj = { application: section.application, iconSource: obj.getAppLauncherIconSource(section.application), onPress: isLastRow.onPress, isFirstRow, isLastRow: flag };
  return callback2(BaseAppRow, obj);
}
function ActivityRow(section) {
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
  let obj = onPress(1416);
  obj = { id: section.application.id, icon: section.application.icon, bot: null, botIconFirst: true };
  const application = section.application;
  let bot;
  if (application != null) {
    bot = application.bot;
  }
  obj[2] = bot;
  const applicationIconSource = obj.getApplicationIconSource(obj);
  let tmp5 = null != applicationIconSource;
  if (tmp5) {
    obj = { iconSource: null };
    obj[0] = applicationIconSource;
    tmp5 = callback2(onPress(11244), obj);
  }
  const items = [section];
  const items1 = [section, onPress];
  const memo = React.useMemo(() => {
    const description = section.application.description;
    let result = null;
    if (null != description) {
      result = null;
      if ("" !== description) {
        let obj = section(outer1_3[20]);
        obj = { content: null, muted: false, layout: null, color: "text-muted" };
        obj[0] = description;
        obj[2] = section(outer1_3[21]).ChannelListLayoutTypes.COMPACT;
        result = obj.renderMessagePreviewMarkup(obj);
      }
    }
    return result;
  }, items);
  const callback = React.useCallback(() => {
    onPress(section);
  }, items1);
  return callback2(section(5224).TableRow, { icon: tmp5, label: section.application.name, subLabel: memo, subLabelLineClamp: 1, start: flag, end: flag2, arrow: true, onPress: callback });
}
function ActivityItemTuple(arg0) {
  let containerWidth;
  let context;
  let entrypoint;
  let isLastTuple;
  let onActivityItemSelected;
  let onPress;
  let sectionName;
  let shelfItem1;
  let shelfItem2;
  let usesHandleActivityItemSelected;
  ({ context, sectionName, onPress, usesHandleActivityItemSelected, onActivityItemSelected, shelfItem2, entrypoint, containerWidth } = arg0);
  ({ shelfItem1, isLastTuple } = arg0);
  const tmp = createCacheKey();
  const items = [containerWidth];
  const size = React.useMemo(() => {
    if (null == containerWidth) {
      return { width: "Array", height: "HermesInternal" };
    } else {
      const tmp5 = outer1_1(outer1_3[25])(tmp / 2 - outer1_14 - 6);
      const obj = { width: null, height: null };
      obj[0] = tmp5;
      obj[1] = outer1_1(outer1_3[25])(tmp5 / outer1_22);
      return obj;
    }
  }, items);
  const items1 = [tmp.activityItemTupleContainer, ];
  let obj = { style: items1, children: null };
  items1[1] = { marginBottom: 12 };
  obj = { style: tmp.activityItemTupleShelfItemContainer, children: callback2(ActivityItem, obj) };
  obj = { context, sectionName, onPress, usesHandleActivityItemSelected, onActivityItemSelected, shelfItem: shelfItem1, entrypoint, imageWidth: size.width, imageHeight: size.height };
  const items2 = [callback2(closure_6, obj), ];
  let tmp4Result = null != shelfItem2;
  if (tmp4Result) {
    const obj1 = { style: null, children: null };
    obj1[0] = tmp.activityItemTupleShelfItemContainer;
    const obj2 = { context: null, sectionName: null, onPress: null, usesHandleActivityItemSelected: null, onActivityItemSelected: null, shelfItem: null, entrypoint: null, imageWidth: null, imageHeight: null };
    obj2[0] = context;
    obj2[1] = sectionName;
    obj2[2] = onPress;
    obj2[3] = usesHandleActivityItemSelected;
    obj2[4] = onActivityItemSelected;
    obj2[5] = shelfItem2;
    obj2[6] = entrypoint;
    ({ width: obj5[7], height: obj5[8] } = size);
    obj1[1] = tmp4(ActivityItem, obj2);
    tmp4Result = tmp4(tmp3, obj1);
  }
  items2[1] = tmp4Result;
  obj[1] = items2;
  return closure_20(closure_6, obj);
}
function ActivityItem(context) {
  let entrypoint;
  let imageHeight;
  let imageWidth;
  let onActivityItemSelected;
  context = context.context;
  const shelfItem = context.shelfItem;
  const onPress = context.onPress;
  let flag = context.usesHandleActivityItemSelected;
  if (flag === undefined) {
    flag = false;
  }
  ({ imageWidth, imageHeight } = context);
  let callback;
  let handleActivityItemSelected;
  ({ onActivityItemSelected, entrypoint } = context);
  const tmp = createCacheKey();
  let obj = context(flag[26]);
  let obj1 = handleActivityItemSelected;
  const heroMediaDimensions = obj.useHeroMediaDimensions();
  const tmp6 = callback(handleActivityItemSelected.useState(false), 2);
  callback = tmp6[1];
  obj = { applicationId: shelfItem.application.id, size: null, names: null };
  let width = imageWidth;
  if (imageWidth == null) {
    width = heroMediaDimensions.width;
  }
  obj[1] = width;
  obj[2] = ["embedded_cover"];
  const tmp8Result = shelfItem(flag[27])(obj);
  let id = obj1.useId();
  let tmp2Result = tmp2(tmp3[28]);
  let items = [participantFromServer];
  const tmp5Result = callback(tmp2Result.useStateFromStoresArray(items, () => {
    const items = [outer1_7.isLaunchingActivity(), ];
    let id;
    if ("channel" === context.type) {
      id = context.channel.id;
    }
    items[1] = outer1_7.getLaunchState(shelfItem.application.id, id);
    return items;
  }), 2);
  let isLaunching = null != tmp12;
  if (isLaunching) {
    isLaunching = tmp12.isLaunching;
  }
  if (isLaunching) {
    isLaunching = tmp12.componentId === id;
  }
  tmp2Result = tmp2(tmp3[19]);
  const shelfBadgeTypeIfActive = tmp2Result.getShelfBadgeTypeIfActive(shelfItem.application);
  const tmp5 = callback;
  const tmp8 = shelfItem(flag[27]);
  obj = { applicationId: shelfItem.application.id, context, sectionName: context.sectionName, onActivityItemSelected, location: tmp2(tmp3[29]).ApplicationCommandTriggerLocations.APP_LAUNCHER_HOME, entrypoint, launchingComponentId: id, fetchesApplication: false };
  handleActivityItemSelected = context(flag[23]).useHandleActivityItemSelected(obj).handleActivityItemSelected;
  const items1 = [handleActivityItemSelected, onPress, shelfItem, flag];
  let first = "not-found" === tmp8Result.state;
  callback = obj1.useCallback(() => {
    if (flag) {
      handleActivityItemSelected();
    }
    onPress(shelfItem);
  }, items1);
  if (!first) {
    first = tmp6[0];
  }
  if (first) {
    let tmp17 = callback2(tmp7(tmp3[30]), {});
  } else {
    tmp17 = null;
    if (!tmp16) {
      obj1 = { onError: null, style: null, source: null, resizeMode: "cover" };
      obj1[0] = function onError() {
        return callback(true);
      };
      obj1[1] = tmp.activityItemImage;
      const obj2 = { uri: null };
      obj2[0] = tmp8Result.url;
      obj1[2] = obj2;
      tmp17 = callback2(tmp7(tmp3[31]), obj1);
    }
  }
  const obj3 = { style: tmp.activityItemContainer, disabled: tmp5Result[0], onPress: callback, children: null };
  const items2 = [tmp.activityImageContainer, ];
  let tmp22 = null != imageWidth;
  if (tmp22) {
    tmp22 = null != imageHeight;
  }
  if (tmp22) {
    const obj4 = { width: null, height: null };
    obj4[0] = imageWidth;
    obj4[1] = imageHeight;
    tmp22 = obj4;
  }
  const obj5 = { style: items2, children: null };
  items2[1] = tmp22;
  const items3 = [tmp17, callback2(shelfItem(flag[33]), { labelType: shelfBadgeTypeIfActive }), callback2(context(flag[34]).SubmittingOverlay, { submitting: isLaunching, style: tmp.submittingOverlay })];
  obj5[1] = items3;
  const items4 = [closure_20(closure_6, obj5), ];
  const obj6 = { submitting: isLaunching, style: tmp.submittingOverlay };
  tmp16 = "loading" === tmp8Result.state || null == tmp8Result.url;
  const tmp2Result1 = context(flag[23]);
  items4[1] = callback2(closure_6, { style: tmp.activityDetailsContainer, children: callback2(context(flag[16]).Text, obj8) });
  obj3[3] = items4;
  return closure_20(context(flag[32]).PressableScale, obj3);
}
function RecommendationItemTuple(arg0) {
  let containerWidth;
  let context;
  let entrypoint;
  let isLastTuple;
  let item1;
  let item2;
  let onPress;
  let sectionName;
  ({ context, sectionName, onPress, item2, entrypoint, containerWidth } = arg0);
  ({ item1, isLastTuple } = arg0);
  const tmp = createCacheKey();
  const items = [containerWidth];
  const size = React.useMemo(() => {
    if (null == containerWidth) {
      return { width: "Array", height: "HermesInternal" };
    } else {
      const tmp5 = outer1_1(outer1_3[25])(tmp / 2 - outer1_14 - 6);
      const obj = { width: null, height: null };
      obj[0] = tmp5;
      obj[1] = outer1_1(outer1_3[25])(tmp5 / outer1_22);
      return obj;
    }
  }, items);
  const items1 = [tmp.activityItemTupleContainer, ];
  let obj = { style: items1, children: null };
  items1[1] = { marginBottom: 12 };
  obj = { style: tmp.activityItemTupleShelfItemContainer, children: callback2(RecommendationItem, obj) };
  obj = { context, sectionName, onPress, item: item1, entrypoint, imageWidth: size.width, imageHeight: size.height };
  const items2 = [callback2(closure_6, obj), ];
  let tmp4Result = null != item2;
  if (tmp4Result) {
    const obj1 = { style: null, children: null };
    obj1[0] = tmp.activityItemTupleShelfItemContainer;
    const obj2 = { context: null, sectionName: null, onPress: null, item: null, entrypoint: null, imageWidth: null, imageHeight: null };
    obj2[0] = context;
    obj2[1] = sectionName;
    obj2[2] = onPress;
    obj2[3] = item2;
    obj2[4] = entrypoint;
    ({ width: obj5[5], height: obj5[6] } = size);
    obj1[1] = tmp4(RecommendationItem, obj2);
    tmp4Result = tmp4(tmp3, obj1);
  }
  items2[1] = tmp4Result;
  obj[1] = items2;
  return closure_20(closure_6, obj);
}
function RecommendationItem(onPress) {
  let context;
  let entrypoint;
  let imageHeight;
  let imageWidth;
  let item;
  let sectionName;
  ({ item, sectionName } = onPress);
  onPress = onPress.onPress;
  ({ imageWidth, imageHeight, context, entrypoint } = onPress);
  let closure_2;
  let application;
  const tmp = createCacheKey();
  let obj = sectionName(application[26]);
  let obj1 = React;
  const heroMediaDimensions = obj.useHeroMediaDimensions();
  const tmp5 = callback(React.useState(false), 2);
  closure_2 = tmp5[1];
  application = item.application;
  let obj2 = sectionName(application[19]);
  let isEmbeddedAppResult = obj2.isEmbeddedApp(application);
  obj = { applicationId: application.id, size: null, names: null };
  let width = imageWidth;
  if (imageWidth == null) {
    width = heroMediaDimensions.width;
  }
  obj[1] = width;
  obj[2] = ["embedded_cover"];
  let tmp8Result = onPress(application[27])(obj);
  if (null != item.overrideImageUrl) {
    obj = { state: "loaded", url: null };
    obj[1] = item.overrideImageUrl;
    tmp8Result = obj;
  }
  const items = [onPress, application, sectionName];
  let first = "not-found" === tmp8Result.state;
  callback = obj1.useCallback(() => {
    onPress(application, sectionName);
  }, items);
  if (!first) {
    first = tmp5[0];
  }
  if (first) {
    let tmp13 = callback2(tmp7(tmp3[30]), {});
  } else {
    tmp13 = null;
    if (!tmp12) {
      obj1 = { onError: null, style: null, source: null, resizeMode: "cover" };
      obj1[0] = function onError() {
        return callback(true);
      };
      obj1[1] = tmp.activityItemImage;
      obj2 = { uri: null };
      obj2[0] = tmp8Result.url;
      obj1[2] = obj2;
      tmp13 = callback2(tmp7(tmp3[31]), obj1);
    }
  }
  const obj3 = { style: tmp.activityItemContainer, onPress: callback, children: null };
  const items1 = [tmp.activityImageContainer, ];
  let tmp18 = null != imageWidth;
  if (tmp18) {
    tmp18 = null != imageHeight;
  }
  if (tmp18) {
    const obj4 = { width: null, height: null };
    obj4[0] = imageWidth;
    obj4[1] = imageHeight;
    tmp18 = obj4;
  }
  const obj5 = { style: items1, children: null };
  items1[1] = tmp18;
  const items2 = [tmp13, ];
  if (isEmbeddedAppResult) {
    const obj6 = { labelType: null };
    const tmp7Result = tmp7(tmp3[33]);
    obj6[0] = tmp2(tmp3[19]).getShelfBadgeTypeIfActive(application);
    isEmbeddedAppResult = callback2(tmp7Result, obj6);
    const tmp2Result = tmp2(tmp3[19]);
  }
  items2[1] = isEmbeddedAppResult;
  obj5[1] = items2;
  const items3 = [closure_20(closure_6, obj5), ];
  tmp12 = "loading" === tmp8Result.state || null == tmp8Result.url;
  const tmp8 = onPress(application[27]);
  items3[1] = callback2(closure_6, { style: tmp.activityDetailsContainer, children: callback2(sectionName(application[16]).Text, obj8) });
  obj3[2] = items3;
  return closure_20(sectionName(application[32]).PressableScale, obj3);
}
function Divider() {
  const rect = importDefault(1581)();
  const style = [createCacheKey().divider, { marginLeft: -DEFAULT_CONTENT_PADDING - rect.left, marginRight: -DEFAULT_CONTENT_PADDING - rect.right }];
  return callback2(closure_6, { style });
}
function RecommendationSectionHeader(arg0) {
  let children;
  let index;
  ({ index, children } = arg0);
  const style = [createCacheKey().sectionHeader, ];
  let obj = null;
  if (0 !== index) {
    obj = { marginTop: 24 };
  }
  style[1] = obj;
  return closure_19(require(4189) /* Text */.Text, { accessibilityRole: "header", variant: "heading-lg/bold", color: "mobile-text-heading-primary", style, children });
}
function getRecommendationItemsWithViewAll(arr) {
  const _require = arg1;
  let COLLAPSED_LIST_ITEM_MAX = arg3;
  if (arg3 === undefined) {
    COLLAPSED_LIST_ITEM_MAX = _require(11295).COLLAPSED_LIST_ITEM_MAX;
  }
  const importDefault = tmp3;
  let bound;
  let dependencyMap;
  let items;
  if (0 === arr.length) {
    return [];
  } else {
    const _Math = Math;
    bound = Math.min(length, COLLAPSED_LIST_ITEM_MAX);
    dependencyMap = tmp12;
    items = [];
    let obj = { type: null, section: null, sectionName: null, numItems: null, numVisibleItems: null };
    obj[0] = _require(11275).AppLauncherHomeListItemType.RECOMMENDATION_SECTION_HEADER;
    obj[1] = arg2;
    obj[2] = arg1;
    obj[3] = length;
    obj[4] = bound;
    items.push(obj);
    const substr = arr.slice(0, bound);
    const item = substr.forEach((application) => {
      const obj = { type: callback(_undefined[44]).AppLauncherHomeListItemType.RECOMMENDATION_APP, application: application.application, showsPromoted: application.showsPromoted, isFirstRow: 0 === arg1, isLastRow: null, sectionName: null, sectionPosition: null, sectionOverallPosition: null };
      let tmp2 = arg1 === bound - 1;
      if (tmp2) {
        tmp2 = !_undefined;
      }
      obj[4] = tmp2;
      obj[5] = callback;
      obj[6] = arg1;
      obj[7] = closure_1;
      items.push(obj);
    });
    if (bound < length) {
      obj = { type: null, applications: null, promotedApplicationIds: null, sectionName: null, sectionOverallPosition: null, title: null };
      obj[0] = _require(11275).AppLauncherHomeListItemType.VIEW_ALL;
      obj[1] = arr.map((application) => application.application);
      const _Set = Set;
      const set = new Set();
      obj[2] = arr.reduce((add, showsPromoted) => {
        if (showsPromoted.showsPromoted) {
          add.add(showsPromoted.application.id);
        }
        return add;
      }, set);
      obj[3] = arg1;
      obj[4] = tmp3;
      obj[5] = arg2;
      items.push(obj);
    }
    return items;
  }
}
({ View: closure_6, StyleSheet } = get_ActivityIndicator);
({ useContextIndexState: metroImportAll, useUserIndexState: c9 } = getIndexKey);
const DEFAULT_CONTENT_PADDING = APP_LAUNCHER_BUILT_IN_SECTION_ICON.DEFAULT_CONTENT_PADDING;
let closure_15 = APP_LAUNCHER_BUILT_IN_SECTION_ICON.FLASH_LIST_ITEM_IMPRESSION_VIEWABILITY_CONFIG;
({ AnalyticEvents: closure_16, Permissions: closure_17 } = ME);
({ jsx: closure_19, jsxs: closure_20, Fragment: closure_21 } = jsxProd);
let c22 = 1.7777777777777777;
let closure_23 = [];
const APP_LAUNCHER_IN_TEXT = require("ApplicationCollectionSurface").ApplicationCollectionSurface.APP_LAUNCHER_IN_TEXT;
createCacheKey = { container: null, topBackgroundFill: null, sectionHeader: null, list: null, searchBarContainer: null, divider: null, appRowLabelWithPromotedContainer: null, appRowLabelWithPromotedTextContainer: null, promotedLabel: null, activityItemContainer: null, activityImageContainer: null, activityDetailsContainer: null, activityItemTupleContainer: null, activityItemTupleShelfItemContainer: null, activityItemImage: null, submittingOverlay: null };
createCacheKey = { backgroundColor: require("Themes").colors.MOBILE_KEYBOARD_PANEL_BACKGROUND, flex: 1 };
createCacheKey[0] = createCacheKey;
createCacheKey[1] = { backgroundColor: require("Themes").colors.MOBILE_KEYBOARD_PANEL_BACKGROUND, position: "absolute", top: -16, left: 0, right: 0, height: 16 };
createCacheKey[2] = { marginBottom: 8, marginTop: 8 };
let obj1 = { backgroundColor: require("Themes").colors.MOBILE_KEYBOARD_PANEL_BACKGROUND, position: "absolute", top: -16, left: 0, right: 0, height: 16 };
createCacheKey[3] = { paddingHorizontal: DEFAULT_CONTENT_PADDING, backgroundColor: require("Themes").colors.MOBILE_KEYBOARD_PANEL_BACKGROUND };
createCacheKey[4] = { paddingHorizontal: DEFAULT_CONTENT_PADDING, paddingBottom: DEFAULT_CONTENT_PADDING };
let obj2 = { paddingHorizontal: DEFAULT_CONTENT_PADDING, backgroundColor: require("Themes").colors.MOBILE_KEYBOARD_PANEL_BACKGROUND };
createCacheKey[5] = { borderColor: require("Themes").colors.BORDER_STRONG, borderTopWidth: 1, marginTop: require("Themes").space.PX_24 };
createCacheKey[6] = { overflow: "hidden", flexDirection: "row", alignItems: "center", gap: require("Themes").space.PX_4 };
createCacheKey[7] = { flexShrink: 1 };
let obj3 = { borderColor: require("Themes").colors.BORDER_STRONG, borderTopWidth: 1, marginTop: require("Themes").space.PX_24 };
createCacheKey[8] = { alignSelf: "center", justifyContent: "center", paddingVertical: 2, paddingHorizontal: require("Themes").space.PX_4, backgroundColor: require("Themes").colors.INTERACTIVE_BACKGROUND_ACTIVE, borderRadius: require("Themes").radii.lg };
let obj4 = { alignSelf: "center", justifyContent: "center", paddingVertical: 2, paddingHorizontal: require("Themes").space.PX_4, backgroundColor: require("Themes").colors.INTERACTIVE_BACKGROUND_ACTIVE, borderRadius: require("Themes").radii.lg };
createCacheKey[9] = { borderRadius: require("Themes").radii.md, overflow: "hidden", height: "100%", backgroundColor: require("Themes").colors.BACKGROUND_APP_LAUNCHER_CARD_DEFAULT, borderWidth: 1, borderColor: require("Themes").colors.BORDER_SUBTLE };
let obj5 = { borderRadius: require("Themes").radii.md, overflow: "hidden", height: "100%", backgroundColor: require("Themes").colors.BACKGROUND_APP_LAUNCHER_CARD_DEFAULT, borderWidth: 1, borderColor: require("Themes").colors.BORDER_SUBTLE };
createCacheKey[10] = { justifyContent: "center", alignItems: "center", height: 120, backgroundColor: require("Themes").colors.BACKGROUND_BASE_LOWEST, borderBottomWidth: StyleSheet.hairlineWidth, borderBottomColor: require("Themes").colors.BORDER_SUBTLE };
let obj6 = { justifyContent: "center", alignItems: "center", height: 120, backgroundColor: require("Themes").colors.BACKGROUND_BASE_LOWEST, borderBottomWidth: StyleSheet.hairlineWidth, borderBottomColor: require("Themes").colors.BORDER_SUBTLE };
createCacheKey[11] = { padding: require("Themes").space.PX_12, flexGrow: 1, flexShrink: 1 };
createCacheKey[12] = { flexDirection: "row", gap: 12 };
createCacheKey[13] = { width: "50%", flexShrink: 1 };
createCacheKey[14] = { height: "100%", width: "100%" };
createCacheKey[15] = { position: "absolute", top: 0, left: 0, height: "100%", width: "100%" };
createCacheKey = createCacheKey.createStyles(createCacheKey);
let obj7 = { padding: require("Themes").space.PX_12, flexGrow: 1, flexShrink: 1 };
let result = require("get ActivityIndicator").fileFinishedImporting("modules/app_launcher/native/screens/home/AppLauncherHomeScreen.tsx");

export default function AppLauncherHomeScreen(route) {
  let bottomVisibilityInsetRef;
  let c23;
  let c32;
  let flashListRef;
  let frecencyCommands;
  let frecentApps;
  let hasViewedActivityItem;
  let hasViewedLearnMoreItem;
  let loading;
  let sectionDescriptors;
  let tmp51;
  let tmp64;
  const params = route.route.params;
  const context = params.context;
  const initialSearchQuery = params.initialSearchQuery;
  let entrypoint = initialSearchQuery;
  const navigation = route.navigation;
  let c2 = navigation;
  let dependencyMap;
  frecentApps = undefined;
  let React;
  let appsInThisServer;
  let isActivitiesInTextEnabled;
  let PREVIEW;
  let stateFromStores1;
  let memo3;
  let memo4;
  let c12;
  let c13;
  let memo2;
  let memo8;
  frecencyCommands = undefined;
  let memo1;
  sectionDescriptors = undefined;
  let memo;
  let callback3;
  let clickOnHomeActivityOpensAppDetails;
  let ref;
  c23 = undefined;
  let memo9;
  let createCacheKey;
  let callback5;
  let closure_27;
  let closure_28;
  let pinnedSearchBarBottomBorder;
  let ref1;
  let c31;
  c32 = undefined;
  let stateFromStores3;
  let callback6;
  let trackAppLauncherHomeItemImpression;
  let callback8;
  let obj = context(11274);
  const viewableAppLauncherHomeItems = obj.useViewableAppLauncherHomeItems();
  const handleViewableItemsChanged = viewableAppLauncherHomeItems.handleViewableItemsChanged;
  dependencyMap = handleViewableItemsChanged;
  ({ hasViewedActivityItem, hasViewedLearnMoreItem } = viewableAppLauncherHomeItems);
  const tmp5 = entrypoint(8122)(hasViewedActivityItem);
  const tmp6 = entrypoint(8122)(hasViewedLearnMoreItem);
  frecentApps = tmp6;
  let tmp7 = createCacheKey();
  React = tmp7;
  let tmp8 = entrypoint(8836)();
  appsInThisServer = tmp8;
  let obj1 = context(10938);
  const requiredAppLauncherContext = obj1.useRequiredAppLauncherContext();
  const chatInputRef = requiredAppLauncherContext.chatInputRef;
  isActivitiesInTextEnabled = chatInputRef;
  const keyboardCloseReasonRef = requiredAppLauncherContext.keyboardCloseReasonRef;
  PREVIEW = keyboardCloseReasonRef;
  const width = requiredAppLauncherContext.width;
  stateFromStores1 = width;
  entrypoint = requiredAppLauncherContext.entrypoint;
  memo3 = entrypoint;
  const onActivityItemSelected = requiredAppLauncherContext.onActivityItemSelected;
  memo4 = onActivityItemSelected;
  const size = entrypoint(1474)();
  c12 = tmp10;
  let obj2 = React;
  let items = [entrypoint];
  const effect = React.useEffect(() => {
    if (memo3 === context(_undefined2[41]).AppLauncherEntrypoint.VOICE) {
      const result = _undefined(_undefined2[42]).dismissNewActivityIndicator();
      const obj = _undefined(_undefined2[42]);
    }
  }, items);
  let items1 = [chatInputRef, keyboardCloseReasonRef];
  const items2 = [context, entrypoint, navigation];
  const callback = React.useCallback(() => {
    PREVIEW.current = context(_undefined2[39]).AppLauncherKeyboardCloseReason.COMMAND;
    const current = isActivitiesInTextEnabled.current;
    if (current != null) {
      current.closeCustomKeyboard();
    }
  }, items1);
  const callback1 = React.useCallback((application) => {
    let obj = context(_undefined2[23]);
    obj = { location: context(_undefined2[29]).ApplicationCommandTriggerLocations.APP_LAUNCHER_HOME, application: null, navigation: null, context: null, sectionName: null, entrypoint: null };
    let FAKE_BUILT_IN_APP = application.application;
    if (FAKE_BUILT_IN_APP == null) {
      FAKE_BUILT_IN_APP = context(_undefined2[19]).FAKE_BUILT_IN_APP;
    }
    obj[1] = FAKE_BUILT_IN_APP;
    obj[2] = c2;
    obj[3] = context;
    obj[4] = arg1;
    obj[5] = memo3;
    const result = obj.handleApplicationSelected(obj);
  }, items2);
  c13 = callback1;
  const items3 = [context, entrypoint, navigation];
  const callback2 = React.useCallback((navigates) => {
    let sectionName;
    let shelfData;
    let flag = navigates.navigates;
    ({ shelfData, sectionName } = navigates);
    if (flag === undefined) {
      flag = true;
    }
    let obj = context(_undefined2[23]);
    obj = { location: context(_undefined2[29]).ApplicationCommandTriggerLocations.APP_LAUNCHER_HOME, application: shelfData.application, navigation: c2, context, sectionName, navigates: flag, entrypoint: memo3 };
    const result = obj.handleApplicationSelected(obj);
  }, items3);
  memo2 = callback2;
  c2 = undefined;
  dependencyMap = undefined;
  frecentApps = undefined;
  React = undefined;
  appsInThisServer = undefined;
  isActivitiesInTextEnabled = undefined;
  PREVIEW = undefined;
  stateFromStores1 = undefined;
  memo3 = undefined;
  memo4 = undefined;
  c12 = undefined;
  c13 = undefined;
  memo2 = undefined;
  memo8 = undefined;
  frecencyCommands = undefined;
  let obj3 = context(11305);
  const fetchDeveloperActivityShelfItems = obj3.useFetchDeveloperActivityShelfItems();
  let guild_id;
  if ("channel" === context.type) {
    guild_id = context.channel.guild_id;
  }
  const tmp16Result = entrypoint(11227)({ guildId: guild_id });
  c2 = tmp16Result;
  const tmp19 = entrypoint === context(8021).AppLauncherEntrypoint.VOICE;
  dependencyMap = tmp19;
  let tmp20 = entrypoint(11306)({ context, onlyActivityApps: tmp19 });
  ({ frecencyCommands, frecentApps } = tmp20);
  ({ sectionDescriptors, loading } = tmp20);
  const tmp21 = entrypoint === context(8021).AppLauncherEntrypoint.TEXT;
  React = tmp21;
  appsInThisServer = tmp4(11310)({ context }).appsInThisServer;
  const items4 = [appsInThisServer, tmp21];
  memo = obj2.useMemo(() => {
    const intl = context(_undefined2[17]).intl;
    const mapped = c5 ? appsInThisServer : c23.map((application) => ({ application: application.application }));
    return callback8(mapped, "in_this_server", intl.string(context(_undefined2[17]).t.oJyzCu), context(_undefined2[67]).IN_THIS_SERVER_ITEM_MAX);
  }, items4);
  const items5 = [frecentApps];
  memo1 = obj2.useMemo(() => frecentApps.map((applicationId) => ({ type: outer1_0(outer1_3[44]).AppLauncherHomeListItemType.APP, applicationId: applicationId.id, section: applicationId, isFirstRow: 0 === arg1, isLastRow: arg1 === length.length - 1, sectionName: "recents" })), items5);
  const items6 = [tmp21, frecentApps];
  memo2 = obj2.useMemo(() => {
    let tmp = !c5;
    if (c5) {
      tmp = !frecentApps.some((application) => null != application.application);
    }
    return tmp;
  }, items6);
  let tmpResult = tmp(8018);
  let id;
  if ("channel" === context.type) {
    id = context.channel.id;
  }
  isActivitiesInTextEnabled = tmpResult.useIsActivitiesInTextEnabled(id);
  const items7 = [isActivitiesInTextEnabled, context, entrypoint];
  const effect1 = obj2.useEffect(() => {
    let tmp = isActivitiesInTextEnabled;
    if (!isActivitiesInTextEnabled) {
      tmp = entrypoint === context(_undefined2[41]).AppLauncherEntrypoint.VOICE;
    }
    if (tmp) {
      let obj = context(_undefined2[42]);
      let guild_id;
      if ("channel" === context.type) {
        guild_id = context.channel.guild_id;
      }
      obj = { guildId: null, force: true };
      obj[0] = guild_id;
      const shelf = obj.fetchShelf(obj);
    }
  }, items7);
  tmpResult = tmp(589);
  const items8 = [memo3];
  const stateFromStores = tmpResult.useStateFromStores(items8, () => memo3.get("only_show_preview_app_collections"));
  let tmp4Result = tmp4(11304);
  const ApplicationCollectionActiveState = tmp(11266).ApplicationCollectionActiveState;
  if (stateFromStores) {
    PREVIEW = ApplicationCollectionActiveState.PREVIEW;
  } else {
    PREVIEW = tmp4Result.getConfig({ location: "App Launcher Home (Mobile)" }).enabled ? ApplicationCollectionActiveState.NON_STAFF_PREVIEW : ApplicationCollectionActiveState.ACTIVE;
  }
  const tmp16 = entrypoint(11227);
  const items9 = [memo4];
  stateFromStores1 = context(589).useStateFromStores(items9, () => memo4.getCollections({ surface: memo9, activeState: PREVIEW }));
  const items10 = [stateFromStores1, tmp19];
  memo3 = obj2.useMemo(() => {
    if (_undefined2) {
      let result = context(_undefined2[19]).ensureRecommendationSectionsOnlyContainActivities(stateFromStores1);
      const obj = context(_undefined2[19]);
    } else {
      result = stateFromStores1;
    }
    return result;
  }, items10);
  const items11 = [PREVIEW, entrypoint];
  const effect2 = obj2.useEffect(() => {
    let obj = context(_undefined2[19]);
    if (obj.appLauncherShowsRecommendations(entrypoint)) {
      obj = { surface: null, activeState: null };
      obj[0] = memo9;
      obj[1] = PREVIEW;
      const collections = context(_undefined2[78]).fetchCollections(obj);
      const tmpResult = context(_undefined2[78]);
    }
  }, items11);
  const items12 = [entrypoint, tmp16Result];
  memo4 = obj2.useMemo(() => {
    let diff;
    let arr = _undefined;
    if (0 !== _undefined.length) {
      let tmp7 = _undefined2;
      if (entrypoint === context(_undefined2[41]).AppLauncherEntrypoint.VOICE) {
        const items = [];
        let tmp8 = tmp15;
        let num = 0;
        if (0 < arr.length - 1) {
          do {
            let sum = num + 1;
            let tmp2 = _undefined;
            let obj = { type: null, shelfItem1: null, shelfItem2: null, sectionName: "activities", shelfItem1SectionPosition: null, shelfItem2SectionPosition: null, sectionOverallPosition: 0, isLastTuple: false };
            let tmp3 = context;
            let tmp4 = _undefined2;
            obj[0] = context(_undefined2[44]).AppLauncherHomeListItemType.SHELF_ITEM_TUPLE;
            obj[1] = _undefined[num];
            obj[2] = _undefined[sum];
            obj[4] = num;
            obj[5] = sum;
            arr = items.push(obj);
            num = num + 2;
            tmp7 = _undefined2;
            tmp8 = context;
            arr = _undefined;
            diff = _undefined.length - 1;
          } while (num < diff);
        }
        if (arr.length % 2 === 1) {
          obj = { type: null, shelfItem1: null, shelfItem2: null, sectionName: "activities", shelfItem1SectionPosition: null, shelfItem2SectionPosition: null, sectionOverallPosition: 0, isLastTuple: false };
          const diff1 = arr.length - 1;
          obj[0] = tmp8(tmp7[44]).AppLauncherHomeListItemType.SHELF_ITEM_TUPLE;
          obj[1] = arr[arr.length - 1];
          obj[2] = undefined;
          obj[4] = diff1;
          obj[5] = undefined;
          arr = items.push(obj);
        }
        items[items.length - 1].isLastTuple = true;
        obj = { type: null, section: null, sectionName: "activities", numItems: null, numVisibleItems: null };
        obj[0] = tmp8(tmp7[44]).AppLauncherHomeListItemType.SECTION_HEADER;
        const intl = tmp8(tmp7[17]).intl;
        obj[1] = intl.string(tmp8(tmp7[17]).t.aeuOoh);
        ({ length: obj3[3], length: obj3[4] } = arr);
        const items1 = [obj];
        HermesBuiltin.arraySpread(items, 1);
        return items1;
      }
      tmp15 = context;
    }
    return [];
  }, items12);
  const tmp33 = PREVIEW(context, true, false);
  c12 = tmp33;
  const tmp34 = stateFromStores1(true, false);
  c13 = tmp34;
  let result = tmp33.result;
  let sections;
  if (result != null) {
    sections = result.sections;
  }
  const items13 = [sections, ];
  let result2 = tmp34.result;
  let sections1;
  if (result2 != null) {
    sections1 = result2.sections;
  }
  items13[1] = sections1;
  let memo5 = obj2.useMemo(() => {
    const result = _undefined4.result;
    let sections;
    if (result != null) {
      sections = result.sections;
    }
    if (sections == null) {
      sections = {};
    }
    const result2 = _undefined5.result;
    let sections1;
    if (result2 != null) {
      sections1 = result2.sections;
    }
    if (sections1 == null) {
      sections1 = {};
    }
    let values = Object.values(sections);
    let someResult = values.some((commands) => Object.keys(commands.commands).length > 0);
    if (!someResult) {
      const _Object = Object;
      values = Object.values(sections1);
      someResult = values.some((commands) => Object.keys(commands.commands).length > 0);
    }
    return someResult;
  }, items13);
  const tmpResult1 = context(589);
  const items14 = [c12];
  let channel = null;
  const stateFromStores2 = context(589).useStateFromStores(items14, () => {
    let tmp2 = "channel" === context.type;
    if (tmp2) {
      const channel = tmp.channel;
      let isDMResult = channel.isDM();
      if (!isDMResult) {
        const channel2 = tmp.channel;
        isDMResult = channel2.isMultiUserDM();
      }
      if (!isDMResult) {
        isDMResult = _undefined4.can(memo1.USE_APPLICATION_COMMANDS, tmp.channel);
      }
      tmp2 = isDMResult;
    }
    return tmp2;
  });
  if ("channel" === context.type) {
    channel = context.channel;
  }
  if (memo5) {
    memo5 = memo2;
  }
  if (!memo5) {
    memo5 = !stateFromStores2;
  }
  let tmp40 = memo2;
  if (memo2) {
    tmp40 = !memo5;
  }
  if (tmp40) {
    let isPrivateResult;
    if (channel != null) {
      isPrivateResult = channel.isPrivate();
    }
    tmp40 = !isPrivateResult;
  }
  if (tmp40) {
    tmp40 = !tmp19;
  }
  if (memo2) {
    memo2 = memo5;
  }
  if (memo2) {
    let isPrivateResult1;
    if (channel != null) {
      isPrivateResult1 = channel.isPrivate();
    }
    memo2 = !isPrivateResult1;
  }
  if (memo2) {
    memo2 = !tmp19;
  }
  const items15 = [memo3, tmp16Result, memo2];
  const memo6 = obj2.useMemo(() => {
    const items = [];
    if (memo2) {
      return items;
    } else {
      const _Set = Set;
      const set = new Set();
      let item = memo3.forEach((application_directory_collection_items) => {
        const prop = application_directory_collection_items.application_directory_collection_items;
        const item = prop.forEach((type) => {
          if (type.type === outer1_0(outer1_3[79]).ApplicationDirectoryCollectionItemType.APPLICATION) {
            set.add(type.application.id);
          }
        });
      });
      const item1 = _undefined.forEach((application) => {
        if (!set.has(application.application.id)) {
          items.push(application);
        }
      });
      return items;
    }
  }, items15);
  memo8 = memo6;
  const items16 = [memo6, memo3, memo2];
  const memo7 = obj2.useMemo(() => {
    let items = [];
    if (memo2) {
      items = [];
    } else {
      let item = memo3.forEach((title) => {
        let application_directory_collection_items;
        let type;
        ({ type, application_directory_collection_items } = title);
        if (type === context(11311).ApplicationDirectoryCollectionType.BANNER_CARDS) {
          const _Math = Math;
          let obj = { type: null, section: null, sectionName: null, numItems: null, numVisibleItems: null };
          const bound = Math.min(length, tmp(11295).COLLAPSED_LIST_ITEM_MAX);
          obj[0] = tmp(11275).AppLauncherHomeListItemType.RECOMMENDATION_SECTION_HEADER;
          ({ title: obj[1], title: obj[2] } = title);
          obj[3] = application_directory_collection_items.length;
          obj[4] = bound;
          found.push(obj);
          for (let num3 = 0; num3 < application_directory_collection_items.length; num3 = num3 + 2) {
            let tmp20 = application_directory_collection_items[num3];
            let sum = num3 + 1;
            let tmp22 = num3;
            if (sum < application_directory_collection_items.length) {
              let tmp23 = application_directory_collection_items[sum];
            }
            let tmp24 = context;
            let tmp25 = dependencyMap;
            if (tmp20.type === context(8033).ApplicationDirectoryCollectionItemType.APPLICATION) {
              let tmp26 = null != tmp20.id && null != tmp20.image_hash;
              let collectionItemAssetUrl;
              if (tmp26) {
                let tmp24Result = tmp24(11312);
                obj = { itemId: null, hash: null };
                ({ id: obj3[0], image_hash: obj3[1] } = tmp20);
                collectionItemAssetUrl = tmp24Result.getCollectionItemAssetUrl(obj);
              }
              obj = { application: null, showsPromoted: null, overrideImageUrl: null };
              obj[0] = tmp20.application;
              tmp24Result = tmp24(1384);
              obj[1] = tmp24Result.hasFlag(tmp20.flags, tmp24(11313).ApplicationCollectionItemFlags.PROMOTED);
              obj[2] = collectionItemAssetUrl;
              let tmp28;
              if (null != tmp23) {
                if (tmp23.type === tmp24(8033).ApplicationDirectoryCollectionItemType.APPLICATION) {
                  let tmp29 = null != tmp23.id && null != tmp23.image_hash;
                  let collectionItemAssetUrl1;
                  if (tmp29) {
                    let tmp24Result1 = tmp24(11312);
                    let obj1 = { itemId: null, hash: null };
                    ({ id: obj7[0], image_hash: obj7[1] } = tmp23);
                    collectionItemAssetUrl1 = tmp24Result1.getCollectionItemAssetUrl(obj1);
                  }
                  let obj2 = { application: null, showsPromoted: null, overrideImageUrl: null };
                  obj2[0] = tmp23.application;
                  let tmp24Result2 = tmp24(1384);
                  obj2[1] = tmp24Result2.hasFlag(tmp23.flags, tmp24(11313).ApplicationCollectionItemFlags.PROMOTED);
                  obj2[2] = collectionItemAssetUrl1;
                  tmp28 = obj2;
                }
              }
              let obj3 = { type: null, sectionName: null, sectionOverallPosition: null, item1: null, item2: null, isLastTuple: null, item1SectionPosition: null, item2SectionPosition: null };
              let tmp31 = found;
              obj3[0] = tmp24(11275).AppLauncherHomeListItemType.RECOMMENDATION_TUPLE;
              obj3[1] = title.title;
              obj3[2] = arg1;
              obj3[3] = obj;
              obj3[4] = tmp28;
              obj3[5] = num3 + 2 >= application_directory_collection_items.length;
              obj3[6] = num3;
              let tmp32;
              if (null != tmp28) {
                tmp32 = sum;
              }
              obj3[7] = tmp32;
              let arr = found.push(obj3);
            }
          }
        } else if (type === tmp(11311).ApplicationDirectoryCollectionType.EXPANDABLE_LIST) {
          const prop = title.application_directory_collection_items;
          const mapped = prop.map((type) => {
            if (type.type === found(table[79]).ApplicationDirectoryCollectionItemType.APPLICATION) {
              const obj = { application: null, showsPromoted: null };
              obj[0] = type.application;
              obj[1] = tmp(tmp2[83]).hasFlag(type.flags, tmp(tmp2[84]).ApplicationCollectionItemFlags.PROMOTED);
              return obj;
            }
          });
          found = mapped.filter(tmp(1351).isNotNullish);
          if (tmpResult.hasFlag(title.flags, tmp(11314).ApplicationCollectionFlags.APPENDS_REMAINING_ACTIVITIES)) {
            const item = outer1_15.forEach((application) => {
              found.push({ application: application.application, showsPromoted: false });
            });
          }
          const push = found.push;
          const items = [];
          HermesBuiltin.arraySpread(callback8(found, title.title, title.title, undefined, arg1), 0);
          HermesBuiltin.apply(items, found);
          tmpResult = tmp(1384);
        }
      });
    }
    return items;
  }, items16);
  frecencyCommands = memo7;
  const items17 = [entrypoint, memo7, memo4];
  memo8 = obj2.useMemo(() => {
    let obj = context(_undefined2[19]);
    if (obj.appLauncherShowsRecommendations(entrypoint)) {
      obj = { type: null };
      obj[0] = tmp(tmp2[44]).AppLauncherHomeListItemType.LEARN_MORE;
      const items = [];
      items[HermesBuiltin.arraySpread(frecencyCommands, 0)] = obj;
      return items;
    } else {
      const items1 = [];
      HermesBuiltin.arraySpread(memo4, 0);
      return items1;
    }
    tmp = context;
    tmp2 = _undefined2;
  }, items17);
  const items18 = [context, entrypoint, navigation, sectionDescriptors];
  callback3 = obj2.useCallback((application) => {
    application = application.application;
    let obj = context(_undefined2[19]);
    const isEmbeddedAppResult = obj.isEmbeddedApp(application);
    let tmp4 = !isEmbeddedAppResult;
    if (!isEmbeddedAppResult) {
      tmp4 = null != sectionDescriptors.find((id) => id.id === application.id);
    }
    obj = { location: tmp(tmp2[29]).ApplicationCommandTriggerLocations.APP_LAUNCHER_HOME, application, navigation: c2, context: application, installOnDemand: !tmp4, sectionName: application.sectionName, entrypoint: memo3 };
    const result = context(_undefined2[23]).handleApplicationSelected(obj);
  }, items18);
  const tmpResult2 = context(589);
  clickOnHomeActivityOpensAppDetails = context(11276).useClickOnHomeActivityOpensAppDetails();
  const items19 = [clickOnHomeActivityOpensAppDetails, context, entrypoint, tmp6, size.width > size.height, memo8.length, navigation, onActivityItemSelected, callback2, callback1, callback3, tmp8, tmp7.sectionHeader, width];
  const callback4 = obj2.useCallback((item) => {
    item = item.item;
    const index = item.index;
    const type = item.type;
    if (context(_undefined2[44]).AppLauncherHomeListItemType.PLACEHOLDER === type) {
      let obj = { isFirstRow: null, isLastRow: null, style: null };
      obj[0] = 0 === index;
      obj[1] = index === memo8.length - 1;
      obj = { height: null };
      obj[0] = appsInThisServer;
      obj[2] = obj;
      return memo(entrypoint(tmp2[45]), obj);
    } else if (tmp(tmp2[44]).AppLauncherHomeListItemType.SECTION_HEADER === type) {
      const items = [_undefined3.sectionHeader, ];
      let obj1 = null;
      if (0 !== index) {
        obj1 = { marginTop: 24 };
      }
      const obj2 = { accessibilityRole: "header", variant: "text-lg/bold", color: "mobile-text-heading-primary", style: null, children: null };
      items[1] = obj1;
      obj2[3] = items;
      obj2[4] = item.section;
      return memo(tmp(tmp2[16]).Text, obj2);
    } else if (tmp(tmp2[44]).AppLauncherHomeListItemType.SHELF_ITEM === type) {
      const obj3 = { section: null, onPress: null, isFirstRow: null, isLastRow: null };
      obj3[0] = item.section;
      obj3[1] = function onPress(shelfData) {
        outer1_14({ shelfData, sectionName: item.sectionName });
      };
      ({ isFirstRow: obj10[2], isLastRow: obj10[3] } = item);
      return memo(pinnedSearchBarBottomBorder, obj3, item.section.application.id);
    } else if (tmp(tmp2[44]).AppLauncherHomeListItemType.SHELF_ITEM_TUPLE === type) {
      const obj4 = { context: null, sectionName: null, onPress: null, usesHandleActivityItemSelected: null, onActivityItemSelected: null, shelfItem1: null, shelfItem2: null, isLastTuple: null, entrypoint: null, containerWidth: null };
      obj4[0] = item;
      obj4[1] = tmp(tmp2[41]).AppLauncherSectionName.ACTIVITIES;
      obj4[2] = function onPress(shelfData) {
        const obj = { shelfData, sectionName: item.sectionName, navigates: null };
        let tmp2 = outer1_21;
        if (!tmp2) {
          tmp2 = outer1_10 !== context(8021).AppLauncherEntrypoint.VOICE;
        }
        obj[2] = tmp2;
        outer1_14(obj);
      };
      let tmp31 = !clickOnHomeActivityOpensAppDetails;
      if (!clickOnHomeActivityOpensAppDetails) {
        tmp31 = memo3 === tmp(tmp2[41]).AppLauncherEntrypoint.VOICE;
      }
      obj4[3] = tmp31;
      obj4[4] = memo4;
      ({ shelfItem1: obj9[5], shelfItem2: obj9[6], isLastTuple: obj9[7] } = item);
      obj4[8] = memo3;
      obj4[9] = stateFromStores1;
      return memo(ref1, obj4, item.shelfItem1.application.id);
    } else if (tmp(tmp2[44]).AppLauncherHomeListItemType.RECOMMENDATION_TUPLE === type) {
      const obj5 = { context: null, sectionName: null, onPress: null, item1: null, item2: null, isLastTuple: null, entrypoint: null, containerWidth: null };
      obj5[0] = item;
      obj5[1] = item.sectionName;
      obj5[2] = function onPress(application, sectionName) {
        return callback({ application, sectionName });
      };
      ({ item1: obj8[3], item2: obj8[4], isLastTuple: obj8[5] } = item);
      obj5[6] = memo3;
      obj5[7] = stateFromStores1;
      return memo(c32, obj5);
    } else if (tmp(tmp2[44]).AppLauncherHomeListItemType.APP === type) {
      const obj6 = { section: null, onPress: null, isFirstRow: null, isLastRow: null, style: null };
      obj6[0] = item.section;
      obj6[1] = function onPress() {
        outer1_13(item.section, context(8021).AppLauncherSectionName.INSTALLED);
      };
      ({ isFirstRow: obj6[2], isLastRow: obj6[3] } = item);
      const obj7 = { height: null };
      obj7[0] = appsInThisServer;
      obj6[4] = obj7;
      return memo(closure_28, obj6, item.section.id);
    } else if (tmp(tmp2[44]).AppLauncherHomeListItemType.RECOMMENDATION_SECTION_HEADER === type) {
      const obj8 = { index: null, children: null };
      obj8[0] = index;
      obj8[1] = item.section;
      return memo(trackAppLauncherHomeItemImpression, obj8);
    } else if (tmp(tmp2[44]).AppLauncherHomeListItemType.RECOMMENDATION_BANNER_CARD === type) {
      const obj9 = { application: null, isFirst: null, isLast: null, onPress: null, isLandscape: null, showsPromoted: null, overrideImageUrl: null };
      obj9[0] = item.item.application;
      ({ isFirst: obj4[1], isLast: obj4[2] } = item);
      obj9[3] = function onPress() {
        return outer1_20({ application: item.item.application, sectionName: item.sectionName });
      };
      obj9[4] = c12;
      ({ showsPromoted: obj4[5], overrideImageUrl: obj4[6] } = item);
      return memo(entrypoint(tmp2[46]), obj9);
    } else if (tmp(tmp2[44]).AppLauncherHomeListItemType.RECOMMENDATION_APP === type) {
      const obj10 = { application: null, isFirstRow: null, isLastRow: null, onPress: null, showsPromoted: null };
      ({ application: obj3[0], isFirstRow: obj3[1], isLastRow: obj3[2] } = item);
      obj10[3] = function onPress() {
        return outer1_20({ application: item.application, sectionName: item.sectionName });
      };
      obj10[4] = item.showsPromoted;
      return memo(entrypoint(tmp2[47]), obj10, item.application.id);
    } else if (tmp(tmp2[44]).AppLauncherHomeListItemType.VIEW_ALL === type) {
      const obj11 = { title: null, onPress: null };
      obj11[0] = item.title;
      obj11[1] = function onPress() {
        const applications = item.applications;
        const mapped = applications.map((arg0) => arg0);
        let obj = context(11239);
        obj = { location: context(5709).ApplicationCommandTriggerLocations.APP_LAUNCHER_HOME, navigation: outer1_2, context: item, sectionName: item.sectionName, sectionOverallPosition: item.sectionOverallPosition, applications: mapped, sectionItemType: context(11240).SectionItemType.APPS, commands: [], sectionDescriptors: mapped.map((application) => callback(table[50]).getApplicationCommandSection(application)), title: item.title, promotedApplicationIds: item.promotedApplicationIds };
        const result = obj.handleViewAllSelected(obj);
      };
      return memo(entrypoint(tmp2[48]), obj11);
    } else if (tmp(tmp2[44]).AppLauncherHomeListItemType.DIVIDER_ITEM === type) {
      return memo(callback6, {});
    } else if (tmp(tmp2[44]).AppLauncherHomeListItemType.LEARN_MORE === type) {
      obj = { visible: null };
      obj[0] = frecentApps.valueOf();
      return memo(entrypoint(tmp2[51]), obj);
    } else {
      return null;
    }
  }, items19);
  ref = obj2.useRef(null);
  const tmp49 = frecentApps;
  const tmpResult3 = context(11276);
  [tmp51, c23] = frecentApps(obj2.useState(false), 2);
  const items20 = [entrypoint];
  memo9 = obj2.useMemo(() => entrypoint(_undefined2[52]).debounce((query) => {
    let obj = outer1_0(outer1_3[53]);
    obj = { query, source: getUserAgnosticState };
    obj.trackWithMetadata(outer1_16.APP_LAUNCHER_SEARCH_QUERY_TYPED, obj);
  }, 400, { leading: false, trailing: true }), items20);
  createCacheKey = obj2.useRef(null);
  const effect3 = obj2.useEffect(() => () => {
    const current = ref.current;
    if (current != null) {
      current.cancel();
    }
  }, []);
  const items21 = [memo9];
  callback5 = obj2.useCallback((arg0) => {
    let closure_0 = arg0;
    _undefined6(0 !== arg0.length);
    let current = ref.current;
    if (current != null) {
      current.cancel();
    }
    ref.current = context(_undefined2[54]).runAfterInteractions(() => {
      const current = outer1_22.current;
      if (current != null) {
        current.setQuery(closure_0);
      }
    }, 100);
    memo9(arg0);
  }, items21);
  closure_27 = obj2.useRef(callback5);
  const items22 = [callback5];
  const effect4 = obj2.useEffect(() => {
    closure_27.current = callback5;
  }, items22);
  const items23 = [entrypoint];
  closure_28 = obj2.useCallback(() => {
    let obj = context(_undefined2[53]);
    obj = { source: memo3 };
    obj.trackWithMetadata(frecencyCommands.APP_LAUNCHER_SEARCH_FOCUSED, obj);
  }, items23);
  const tmp50 = frecentApps(obj2.useState(false), 2);
  let str = "home-scroller";
  if (tmp51) {
    str = "search-scroller";
  }
  pinnedSearchBarBottomBorder = context(11284).usePinnedSearchBarBottomBorder({ key: str, triggerScrollHeight: 5 });
  ref1 = obj2.useRef(null);
  const items24 = [initialSearchQuery];
  const layoutEffect = obj2.useLayoutEffect(() => {
    if (null != entrypoint) {
      const current = ref1.current;
      if (current != null) {
        current.setText(tmp);
      }
      const current2 = ref1.current;
      if (current2 != null) {
        current2.focus();
      }
      ref2.current(tmp);
      const tmp2 = ref1;
    }
  }, items24);
  let sum = entrypoint(1581)().bottom + memo2;
  c31 = sum;
  const tmpResult4 = context(11284);
  const bottomSheetFlashListBottomViewabilityInset = context(11285).useBottomSheetFlashListBottomViewabilityInset();
  ({ flashListRef, bottomVisibilityInsetRef } = bottomSheetFlashListBottomViewabilityInset);
  obj = { type: null, name: null };
  tmp4Result = tmp4(8436);
  obj[0] = context(503).ImpressionTypes.VIEW;
  obj[1] = context(503).ImpressionNames.APP_LAUNCHER_HOME_ACTIVITY_ITEM;
  obj = { disableTrack: !tmp5 };
  const items25 = [tmp5];
  tmp4Result(obj, obj, items25);
  const tmpResult5 = context(11285);
  [tmp64, c32] = tmp49(obj2.useState(false), 2);
  const effect5 = obj2.useEffect(() => {
    _undefined7(true);
  }, []);
  const tmp49Result = tmp49(obj2.useState(false), 2);
  const items26 = [c13];
  stateFromStores3 = context(589).useStateFromStores(items26, () => _undefined5.getTriggeredOnboardingContentMetadata().willShowGlobalSearchOnboarding);
  const items27 = [stateFromStores3];
  callback6 = obj2.useCallback((arg0) => {
    if (stateFromStores3) {
      let obj = context(_undefined2[59]);
      obj = { dismissAction: null };
      obj[0] = tmp;
      const result = obj.UNSAFE_markDismissibleContentAsDismissed(context(_undefined2[60]).DismissibleContent.APP_LAUNCHER_GLOBAL_SEARCH_ONBOARDING, obj);
      obj = {};
      const merged = Object.assign(_undefined5.getTriggeredOnboardingContentMetadata());
      obj.willShowGlobalSearchOnboarding = false;
      const result1 = context(_undefined2[61]).setTriggeredOnboardingContentMetadata(obj);
      const obj3 = context(_undefined2[61]);
    }
  }, items27);
  const tmpResult6 = context(589);
  trackAppLauncherHomeItemImpression = context(11287).useTrackAppLauncherHomeItemImpression().trackAppLauncherHomeItemImpression;
  const items28 = [sum, tmp7.list];
  const items29 = [sum];
  const memo10 = obj2.useMemo(() => {
    const obj = {};
    const merged = Object.assign(_undefined3.list);
    obj.paddingBottom = c31;
    return obj;
  }, items28);
  const memo11 = obj2.useMemo(() => ({ bottom: c31 }), items29);
  const items30 = [pinnedSearchBarBottomBorder];
  const callback7 = obj2.useCallback((type) => type.type, []);
  callback8 = obj2.useCallback((arg0) => {
    pinnedSearchBarBottomBorder.scrollHandler(arg0);
  }, items30);
  const items31 = [callback8];
  const callback9 = obj2.useCallback((nativeEvent) => {
    nativeEvent = nativeEvent.nativeEvent;
    callback8({ width: nativeEvent.layoutMeasurement.width, height: nativeEvent.layoutMeasurement.height, offset: nativeEvent.contentOffset.y, contentWidth: nativeEvent.contentSize.width, contentHeight: nativeEvent.contentSize.height });
  }, items31);
  const tmpResult7 = context(11287);
  const appLauncherFlashListProps = context(11289).useAppLauncherFlashListProps({ onScrollHandler: callback8 });
  const items32 = [handleViewableItemsChanged, trackAppLauncherHomeItemImpression];
  obj1 = { style: tmp7.container, children: null };
  obj2 = { style: tmp7.topBackgroundFill };
  const memo12 = obj2.useMemo(() => {
    let obj = { viewabilityConfig: {}, onViewableItemsChanged: c3 };
    const items = [obj, ];
    obj = { viewabilityConfig: memo8, onViewableItemsChanged: trackAppLauncherHomeItemImpression };
    items[1] = obj;
    return items;
  }, items32);
  const items33 = [memo(appsInThisServer, obj2), , , ];
  obj3 = { style: tmp7.searchBarContainer, children: null };
  let obj4 = { ref: ref1, placeholder: null, isRound: true, size: "md", onChange: null, onFocus: null };
  if (entrypoint === context(8021).AppLauncherEntrypoint.VOICE) {
    let intl2 = tmp(1236).intl;
    let stringResult = intl2.string(tmp(1236).t["pw+r5b"]);
  } else {
    let intl = tmp(1236).intl;
    stringResult = intl.string(tmp(1236).t.ziyFv2);
  }
  let obj5 = { children: null };
  obj4[1] = stringResult;
  obj4[4] = callback5;
  obj4[5] = function onFocus() {
    callback();
    callback6({ actionType: sectionDescriptors.TAKE_ACTION });
  };
  obj3[1] = memo(context(9248).SearchField, obj4);
  const items34 = [memo(appsInThisServer, obj3), pinnedSearchBarBottomBorder.bottomBorderComponent];
  obj5[0] = items34;
  items33[1] = callback3(clickOnHomeActivityOpensAppDetails, obj5);
  if (tmp51) {
    let obj6 = { ref: null, context: null, onScroll: null, onSend: null, entrypoint: null };
    obj6[0] = ref;
    obj6[1] = context;
    obj6[2] = callback9;
    obj6[3] = callback;
    obj6[4] = entrypoint;
    let tmp77Result = tmp77(tmp(11291).SearchLocalAndGlobalContentView, obj6);
  } else {
    let obj7 = { context: null, sectionDescriptors: null, commands: null, loading: null, apps: null, onAppSelected: null, onCommandSelected: null, onViewAllSelected: null };
    obj7[0] = context;
    obj7[1] = sectionDescriptors;
    obj7[2] = frecencyCommands;
    obj7[3] = loading;
    obj7[4] = memo1;
    obj7[5] = callback3;
    obj7[6] = function onCommandSelected(command, section) {
      let obj = context(_undefined2[23]);
      obj = { location: context(_undefined2[29]).ApplicationCommandTriggerLocations.APP_LAUNCHER_HOME, context, command, section, sectionDescriptors, query: "", navigation: c2, sectionName: context(_undefined2[41]).AppLauncherSectionName.RECENT_COMMANDS, entrypoint: memo3 };
      const result = obj.handleApplicationCommandSelected(obj);
    };
    obj7[7] = function onViewAllSelected(arg0) {
      let obj = context(_undefined2[23]);
      obj = { location: context(_undefined2[29]).ApplicationCommandTriggerLocations.APP_LAUNCHER_APPLICATION_VIEW_FRECENCT, navigation: c2, context, sectionName: null, applications: null, sectionItemType: null, commands: null, sectionDescriptors: null, title: null };
      let str = "recent_apps_view_more";
      if (arg0 === context(_undefined2[49]).SectionItemType.COMMANDS) {
        str = "recent_commands_view_more";
      }
      obj[3] = str;
      const mapped = memo1.map((section) => {
        section = section.section;
        let application;
        if (section != null) {
          application = section.application;
        }
        return application;
      });
      obj[4] = mapped.filter(context(_undefined2[66]).isNotNullish);
      obj[5] = arg0;
      obj[6] = frecencyCommands;
      obj[7] = sectionDescriptors;
      if (memo3 === context(_undefined2[41]).AppLauncherEntrypoint.VOICE) {
        const intl3 = tmp(tmp2[17]).intl;
        let stringResult = intl3.string(tmp(tmp2[17]).t["2pFD8L"]);
      } else if (arg0 === tmp(tmp2[49]).SectionItemType.COMMANDS) {
        const intl2 = tmp(tmp2[17]).intl;
        stringResult = intl2.string(tmp(tmp2[17]).t.V3Sq95);
      } else {
        const intl = tmp(tmp2[17]).intl;
        stringResult = intl.string(tmp(tmp2[17]).t.SCViVk);
      }
      obj[8] = stringResult;
      const result = obj.handleViewAllSelected(obj);
    };
    const items35 = [tmp77(tmp4(11240), obj7), , , ];
    let obj8 = { items: null, onAppSelected: null, onViewAllSelected: null };
    obj8[0] = memo;
    obj8[1] = callback3;
    obj8[2] = function onViewAllSelected() {
      const found = memo.find((type) => type.type === callback(11275).AppLauncherHomeListItemType.VIEW_ALL);
      let mapped;
      if (found != null) {
        const applications = found.applications;
        if (applications != null) {
          mapped = applications.map((arg0) => arg0);
        }
      }
      if (null != mapped) {
        let obj = context(_undefined2[23]);
        obj = { location: null, navigation: null, context: null, sectionName: null, applications: null, sectionItemType: null, commands: null, sectionDescriptors: null, title: null };
        obj[0] = context(_undefined2[29]).ApplicationCommandTriggerLocations.APP_LAUNCHER_HOME;
        obj[1] = c2;
        obj[2] = context;
        obj[3] = context(_undefined2[41]).AppLauncherSectionName.APPS_IN_THIS_SERVER;
        obj[4] = mapped;
        obj[5] = context(_undefined2[49]).SectionItemType.APPS;
        obj[6] = [];
        obj[7] = mapped.map((application) => callback(5707).getApplicationCommandSection(application));
        const intl = context(_undefined2[17]).intl;
        obj[8] = intl.string(context(_undefined2[17]).t.oJyzCu);
        const result = obj.handleViewAllSelected(obj);
      }
    };
    items35[1] = tmp77(tmp4(11297), obj8);
    tmp77Result = null;
    if (tmp40) {
      tmp77Result = null;
      if (tmp64) {
        tmp77Result = tmp77(tmp4(11298), {});
      }
    }
    items35[2] = tmp77Result;
    let tmp77Result1 = null;
    if (memo2) {
      tmp77Result1 = tmp77(tmp4(11300), {});
    }
    let obj9 = { ListHeaderComponent: null, contentContainerStyle: null, scrollIndicatorInsets: null, renderItem: null, getItemType: null, data: null, preserveScrollMomentum: true, automaticallyAdjustsScrollIndicatorInsets: false, keyboardDismissMode: "on-drag", keyboardShouldPersistTaps: "always", showsVerticalScrollIndicator: false, viewabilityConfigCallbackPairs: null, bottomViewabilityInsetRef: null, ref: null, onScroll: null, animatedOnScroll: null, simultaneousHandlers: null, animatedProps: null };
    let obj10 = { children: null };
    items35[3] = tmp77Result1;
    obj10[0] = items35;
    obj9[0] = tmp75(tmp78, obj10);
    obj9[1] = memo10;
    obj9[2] = memo11;
    obj9[3] = callback4;
    obj9[4] = callback7;
    obj9[5] = memo8;
    obj9[11] = memo12;
    obj9[12] = bottomVisibilityInsetRef;
    if (entrypoint === tmp(8021).AppLauncherEntrypoint.VOICE) {
      flashListRef = appLauncherFlashListProps.scrollerRef;
    }
    obj9[13] = flashListRef;
    obj9[14] = callback9;
    ({ onScroll: obj25[15], gestureRef: obj25[16], animatedProps: obj25[17] } = appLauncherFlashListProps);
    tmp77Result = tmp77(tmp4(11289), obj9);
    const tmp4Result1 = tmp4(11289);
  }
  items33[2] = tmp77Result;
  let tmp77Result2 = entrypoint === tmp(8021).AppLauncherEntrypoint.TEXT;
  if (tmp77Result2) {
    let obj11 = { windowDimensions: null, visible: null, markAsDismissed: null };
    obj11[0] = size;
    obj11[1] = stateFromStores3;
    obj11[2] = callback6;
    tmp77Result2 = tmp77(tmp4(11303), obj11);
  }
  items33[3] = tmp77Result2;
  obj1[1] = items33;
  return callback3(appsInThisServer, obj1);
};
export { BaseAppRow };