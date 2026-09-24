// discord_app/modules/app_launcher/native/screens/home/AppLauncherHomeScreen.tsx
import _modDef12 from "../../../../../../_runtime/metro/00012__.js";
import nativeDefault from "../../../../../../discord_common/js/packages/tokens/native.tsx";
import util from "../../../../../intl/index.native.tsx";
import GlobalUtils from "../../../../../utils/GlobalUtils.tsx";
import FlagUtils from "../../../../../../discord_common/js/shared/utils/FlagUtils.tsx";
import useSafeAreaInsetsDefault from "../../../../safe_area/useSafeAreaInsets.native.tsx";
import dismissible_content from "../../../../../../discord_common/js/packages/protos/discord_protos/discord_users/v1/dismissible_content.tsx";
import DismissibleContentUnsafeUtils from "../../../../dismissible_content/DismissibleContentUnsafeUtils.tsx";
import Text_Text from "../../../../../design/components/Text/native/Text.tsx";
import AppAnalyticsUtils from "../../../../app_analytics/AppAnalyticsUtils.tsx";
import FastImageDefault from "../../../../../components_native/common/FastImage.tsx";
import useIsWindowLargeDefault from "../../../../screen/native/useIsWindowLarge.tsx";
import ApplicationCommandTypes from "../../../../application_commands/ApplicationCommandTypes.tsx";
import ChannelListLayoutTypes from "../../../../main_tabs_v2/ChannelListLayoutTypes.tsx";
import native from "../../../../../design/components/experimental/native.tsx";
import AppLauncherUtils from "../../../utils/AppLauncherUtils.tsx";
import AppLauncherTypes from "../../../AppLauncherTypes.tsx";
import EmbeddedActivitiesActionCreators from "../../../../activities/EmbeddedActivitiesActionCreators.tsx";
import useEmbeddedActivityBackgroundDefault from "../../../../activities/utils/useEmbeddedActivityBackground.tsx";
import MessagePreviewMarkup from "../../../../message_previews/native/MessagePreviewMarkup.tsx";
import roundToNearestPixelDefault from "../../../../voice_panel/native/utils/roundToNearestPixel.tsx";
import AppLauncherContext from "../../AppLauncherContext.tsx";
import AppLauncherNativeUtils from "../../AppLauncherNativeUtils.tsx";
import FrecencySection from "FrecencySection.tsx";
import EntityBorderAppIconDefault from "../../base_components/EntityBorderAppIcon.tsx";
import ApplicationDirectoryActionCreators from "../../../../global_discovery_apps/ApplicationDirectoryActionCreators.tsx";
import HeroMedia from "../application_view/activity/HeroMedia.tsx";
import BrokenImageDefault from "../../../../image/native/BrokenImage.tsx";
import ActivityShelfBadgeDefault from "../../../../activities/native/ActivityShelfBadge.tsx";
import AppLauncherHomeTypes from "AppLauncherHomeTypes.tsx";
import AppLauncherOnboardingActionCreators from "../../onboarding/AppLauncherOnboardingActionCreators.tsx";
import ExpandableList from "../../base_components/ExpandableList.tsx";
import InThisServerSection from "InThisServerSection.tsx";
import ApplicationDirectoryCollectionType from "../../../../../../discord_common/js/shared/shared-constants/ApplicationDirectoryCollectionType.tsx";
import ApplicationCollectionFlags from "../../../../../../discord_common/js/shared/shared-constants/ApplicationCollectionFlags.tsx";
import _slicedToArray from "../../../../../../_runtime/metro/00032__.js";
import noop from "../../../../../../_runtime/metro/00019__.js";
import EmbeddedActivitiesStore from "../../../../activities/EmbeddedActivitiesStore.tsx";
import DevSettingsStore from "../../../../devtools/dev_settings/DevSettingsStore.tsx";
import ApplicationDirectoryCollectionsStore from "../../../../global_discovery_apps/stores/ApplicationDirectoryCollectionsStore.tsx";
import PermissionStore from "../../../../../stores/PermissionStore.tsx";
import AppLauncherOnboardingPersistedStore from "../../onboarding/stores/AppLauncherOnboardingPersistedStore.tsx";

const EmbeddedActivitiesActionCreatorsAll = EmbeddedActivitiesActionCreators;

require = fn;
function AppRowLabel(renderedName) {
  renderedName = renderedName.renderedName;
  const tmp = closure_25();
  if (renderedName.showsPromoted) {
    const obj2 = { style: tmp.appRowLabelWithPromotedContainer, children: null };
    const obj3 = {
      style: tmp.appRowLabelWithPromotedTextContainer,
      variant: "text-md/semibold",
      color: "mobile-text-heading-primary",
      lineClamp: 1,
      children: renderedName,
    };
    const items = [closure_1_19(Text_Text.Text, obj3)];
    const obj4 = { style: tmp.promotedLabel, children: null };
    const obj5 = { variant: "text-xxs/semibold", color: "text-muted", children: null };
    const intl = util.intl;
    obj5.children = intl.string(util.t["/eVltv"]);
    obj4.children = closure_1_19(Text_Text.Text, obj5);
    items[1] = closure_1_19(timestampProducer, obj4);
    obj2.children = items;
    let tmp5 = closure_1_20(timestampProducer, obj2);
  } else {
    const obj = {
      variant: "text-md/semibold",
      color: "mobile-text-heading-primary",
      lineClamp: 1,
      children: renderedName,
    };
    tmp5 = closure_1_19(Text_Text.Text, obj);
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
      obj.iconSource = iconSource;
      tmp = jsx(closure_1(closure_3[18]), obj);
    }
    tmp5 = application;
    tmp6 = closure_3;
    obj2 = application(closure_3[19]);
    FAKE_BUILT_IN_APP = application;
    if (application == null) {
      FAKE_BUILT_IN_APP = tmp5(tmp6[19]).FAKE_BUILT_IN_APP;
    }
    sectionName = obj2.getSectionName(FAKE_BUILT_IN_APP);
    if (!flag2) {
      tmp5Result = tmp5(tmp6[19]);
      FAKE_BUILT_IN_APP2 = application;
      if (application == null) {
        FAKE_BUILT_IN_APP2 = tmp5(tmp6[19]).FAKE_BUILT_IN_APP;
      }
      flag2 = tmp5Result.isPromotedApplication(FAKE_BUILT_IN_APP2);
    }
    items = [];
    items[0] = application;
    memo = closure_5.useMemo(() => {
      let FAKE_BUILT_IN_APP = application;
      if (application == null) {
        FAKE_BUILT_IN_APP = AppLauncherUtils.FAKE_BUILT_IN_APP;
      }
      const sectionDescription = AppLauncherUtils.getSectionDescription(FAKE_BUILT_IN_APP);
      let result = null;
      if (null != sectionDescription) {
        result = null;
        if ("" !== sectionDescription) {
          const obj2 = {
            content: sectionDescription,
            muted: false,
            layout: ChannelListLayoutTypes.ChannelListLayoutTypes.COMPACT,
            color: "text-muted",
          };
          result = MessagePreviewMarkup.renderMessagePreviewMarkup(obj2);
          const tmpResult = MessagePreviewMarkup;
        }
      }
      return result;
    }, items);
    obj1 = {
      icon: tmp,
      label: jsx(AppRowLabel, { renderedName: sectionName, showsPromoted: flag2 }),
      labelLineClamp: 1,
      subLabel: memo,
      subLabelLineClamp: 1,
      start: isFirstRow,
      end: flag,
      arrow: true,
      onPress: global.onPress,
    };
    return jsx(tmp5(tmp6[22]).TableRow, obj1);
  }
}
function AppRow(isLastRow) {
  ({ section, isFirstRow } = isLastRow);
  if (isFirstRow === undefined) {
    isFirstRow = false;
  }
  let flag = isLastRow.isLastRow;
  if (flag === undefined) {
    flag = false;
  }
  return closure_1_19(BaseAppRow, {
    application: section.application,
    iconSource: AppLauncherNativeUtils.getAppLauncherIconSource(section.application),
    onPress: isLastRow.onPress,
    isFirstRow,
    isLastRow: flag,
  });
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
  let obj2 = { id: section.application.id, icon: section.application.icon, bot: null, botIconFirst: true };
  const application = section.application;
  let bot;
  if (application != null) {
    bot = application.bot;
  }
  obj2.bot = bot;
  const applicationIconSource = onPress(1397).getApplicationIconSource(obj2);
  let tmp5 = null != applicationIconSource;
  if (tmp5) {
    const obj3 = { iconSource: applicationIconSource };
    tmp5 = closure_19(onPress(12398), obj3);
  }
  const items = [section];
  const items1 = [section, onPress];
  const memo = noop.useMemo(() => {
    const description = section.application.description;
    let result = null;
    if (null != description) {
      result = null;
      if ("" !== description) {
        const obj2 = {
          content: description,
          muted: false,
          layout: ChannelListLayoutTypes.ChannelListLayoutTypes.COMPACT,
          color: "text-muted",
        };
        result = MessagePreviewMarkup.renderMessagePreviewMarkup(obj2);
      }
    }
    return result;
  }, items);
  const callback = noop.useCallback(() => {
    onPress(section);
  }, items1);
  return closure_19(section(5910).TableRow, {
    icon: tmp5,
    label: section.application.name,
    subLabel: memo,
    subLabelLineClamp: 1,
    start: flag,
    end: flag2,
    arrow: true,
    onPress: callback,
  });
}
function ActivityItemTuple(arg0) {
  ({
    context,
    sectionName,
    onPress,
    usesHandleActivityItemSelected,
    onActivityItemSelected,
    shelfItem2,
    entrypoint,
    containerWidth,
  } = arg0);
  ({ shelfItem1, isLastTuple } = arg0);
  const tmp = closure_25();
  const items = [containerWidth];
  let size = noop.useMemo(() => {
    if (null == containerWidth) {
      return { width: "channel", height: "channelId" };
    } else {
      const tmp5 = roundToNearestPixelDefault(tmp / 2 - DEFAULT_CONTENT_PADDING - 6);
      const size = { width: tmp5, height: roundToNearestPixelDefault(tmp5 / c22) };
      return size;
    }
  }, items);
  const items1 = [tmp.activityItemTupleContainer];
  const obj = { style: items1, children: null };
  items1[1] = { marginBottom: 12 };
  const obj2 = {
    style: tmp.activityItemTupleShelfItemContainer,
    children: closure_19(ActivityItem, {
      context,
      sectionName,
      onPress,
      usesHandleActivityItemSelected,
      onActivityItemSelected,
      shelfItem: shelfItem1,
      entrypoint,
      imageWidth: size.width,
      imageHeight: size.height,
    }),
  };
  const items2 = [closure_19(closure_6, obj2)];
  let tmp4Result = null != shelfItem2;
  if (tmp4Result) {
    const obj4 = { style: tmp.activityItemTupleShelfItemContainer, children: null };
    const obj9 = {
      context,
      sectionName,
      onPress,
      usesHandleActivityItemSelected,
      onActivityItemSelected,
      shelfItem: shelfItem2,
      entrypoint,
      imageWidth: null,
      imageHeight: null,
    };
    ({ width: obj5.imageWidth, height: obj5.imageHeight } = size);
    obj4.children = closure_19(ActivityItem, obj9);
    tmp4Result = closure_19(closure_6, obj4);
  }
  items2[1] = tmp4Result;
  obj.children = items2;
  return closure_20(closure_6, obj);
}
function ActivityItem(context) {
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
  const tmp = closure_25();
  const heroMediaDimensions = context(flag[26]).useHeroMediaDimensions();
  const tmp6 = _slicedToArray(handleActivityItemSelected.useState(false), 2);
  _slicedToArray = tmp6[1];
  const obj3 = { applicationId: shelfItem.application.id, size: null, names: null };
  let width = imageWidth;
  const obj = context(flag[26]);
  const tmp5 = _slicedToArray;
  if (imageWidth == null) {
    width = heroMediaDimensions.width;
  }
  obj3.size = width;
  obj3.names = ["embedded_cover"];
  const tmp8Result = shelfItem(flag[27])(obj3);
  let id = obj2.useId();
  const tmp8 = shelfItem(flag[27]);
  let items = [EmbeddedActivitiesStore];
  const tmp5Result = tmp5(
    context(flag[28]).useStateFromStoresArray(items, () => {
      const items = [EmbeddedActivitiesStore.isLaunchingActivity()];
      let id;
      if ("channel" === context.type) {
        id = context.channel.id;
      }
      items[1] = EmbeddedActivitiesStore.getLaunchState(shelfItem.application.id, id);
      return items;
    }),
    2,
  );
  let isLaunching = null != tmp12;
  if (isLaunching) {
    isLaunching = tmp12.isLaunching;
  }
  if (isLaunching) {
    isLaunching = tmp12.componentId === id;
  }
  const tmp2Result = context(flag[28]);
  const shelfBadgeTypeIfActive = context(flag[19]).getShelfBadgeTypeIfActive(shelfItem.application);
  const tmp2Result3 = context(flag[19]);
  const tmp2Result4 = context(flag[23]);
  handleActivityItemSelected = tmp2Result4.useHandleActivityItemSelected({
    applicationId: shelfItem.application.id,
    context,
    sectionName: context.sectionName,
    onActivityItemSelected,
    location: context(flag[29]).ApplicationCommandTriggerLocations.APP_LAUNCHER_HOME,
    entrypoint,
    launchingComponentId: id,
    fetchesApplication: false,
  }).handleActivityItemSelected;
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
    let tmp17 = closure_19(tmp7(tmp3[30]), {});
  } else {
    tmp17 = null;
    if (!tmp16) {
      const obj5 = {
        onError() {
          return closure_4(true);
        },
        style: tmp.activityItemImage,
        source: null,
        resizeMode: "cover",
      };
      const obj6 = { uri: tmp8Result.url };
      obj5.source = obj6;
      tmp17 = closure_19(tmp7(tmp3[31]), obj5);
    }
  }
  const obj7 = { style: tmp.activityItemContainer, disabled: tmp5Result[0], onPress: callback, children: null };
  const items2 = [tmp.activityImageContainer];
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
  const items3 = [
    tmp17,
    closure_19(shelfItem(flag[33]), { labelType: shelfBadgeTypeIfActive }),
    closure_19(context(flag[34]).SubmittingOverlay, { submitting: isLaunching, style: tmp.submittingOverlay }),
  ];
  obj8.children = items3;
  const items4 = [closure_20(closure_6, obj8)];
  const obj10 = {
    style: tmp.activityDetailsContainer,
    children: closure_19(context(flag[16]).Text, {
      variant: "heading-sm/bold",
      color: "mobile-text-heading-primary",
      children: shelfItem.application.name,
    }),
  };
  items4[1] = closure_19(closure_6, obj10);
  obj7.children = items4;
  return closure_20(context(flag[32]).PressableScale, obj7);
}
function RecommendationItemTuple(isLastTuple) {
  ({
    context: require,
    sectionName: importDefault,
    onPress: importAll,
    items,
    entrypoint: dependencyMap,
    containerWidth,
  } = isLastTuple);
  let styles;
  const tmp = closure_25();
  noop = tmp;
  let num = 2;
  if (useIsWindowLargeDefault()) {
    num = 4;
  }
  const items1 = [containerWidth, num];
  styles = noop.useMemo(() => {
    if (null == containerWidth) {
      return { width: "channel", height: "channelId" };
    } else {
      const tmp6 = roundToNearestPixelDefault((tmp - 2 * DEFAULT_CONTENT_PADDING - 12 * (2 - 1)) / 2);
      const size = { width: tmp6, height: roundToNearestPixelDefault(tmp6 / c22) };
      return size;
    }
  }, items1);
  const items2 = [tmp.activityItemTupleContainer, { marginBottom: 12 }];
  return closure_19(num, {
    style: items2,
    children: items.map((item, index) => {
      const obj = {
        style: null,
        children: closure_2_19(RecommendationItem, {
          context,
          sectionName,
          onPress,
          item,
          entrypoint,
          imageWidth: styles.width,
          imageHeight: styles.height,
        }),
      };
      const items = [closure_5.activityItemTupleShelfItemContainer, { width: styles.width }];
      obj.style = items;
      return closure_2_19(timestampProducer, obj, "" + item.application.id + "-" + index);
    }),
  });
}
function RecommendationItem(onPress) {
  ({ item, sectionName } = onPress);
  onPress = onPress.onPress;
  ({ imageWidth, imageHeight, context, entrypoint } = onPress);
  const tmp = closure_25();
  const heroMediaDimensions = HeroMedia.useHeroMediaDimensions();
  const tmp5 = _slicedToArray(noop.useState(false), 2);
  closure_2 = tmp5[1];
  const application = item.application;
  let isEmbeddedAppResult = AppLauncherUtils.isEmbeddedApp(application);
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
        resizeMode: "cover",
      };
      const obj7 = { uri: tmp8Result.url };
      obj6.source = obj7;
      tmp13 = closure_1_19(FastImageDefault, obj6);
    }
  }
  const obj8 = { style: tmp.activityItemContainer, onPress: callback, children: null };
  const items1 = [tmp.activityImageContainer];
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
  const items2 = [tmp13];
  if (isEmbeddedAppResult) {
    const obj10 = { labelType: null };
    const tmp7Result = ActivityShelfBadgeDefault;
    obj10.labelType = AppLauncherUtils.getShelfBadgeTypeIfActive(application);
    isEmbeddedAppResult = closure_1_19(tmp7Result, obj10);
    const tmp2Result = AppLauncherUtils;
  }
  items2[1] = isEmbeddedAppResult;
  obj9.children = items2;
  const items3 = [closure_1_20(timestampProducer, obj9)];
  const obj11 = {
    style: tmp.activityDetailsContainer,
    children: closure_1_19(Text_Text.Text, {
      variant: "heading-sm/bold",
      color: "mobile-text-heading-primary",
      children: application.name,
    }),
  };
  items3[1] = closure_1_19(timestampProducer, obj11);
  obj8.children = items3;
  return closure_1_20(native.PressableScale, obj8);
}
function Divider() {
  const rect = useSafeAreaInsetsDefault();
  const obj = { style: null };
  const items = [
    closure_25().divider,
    { marginLeft: -DEFAULT_CONTENT_PADDING - rect.left, marginRight: -DEFAULT_CONTENT_PADDING - rect.right },
  ];
  obj.style = items;
  return closure_1_19(timestampProducer, obj);
}
function RecommendationSectionHeader(arg0) {
  ({ index, children } = arg0);
  const style = [closure_25().sectionHeader];
  let obj = null;
  if (0 !== index) {
    obj = { marginTop: 24 };
  }
  style[1] = obj;
  return closure_1_19(Text_Text.Text, {
    accessibilityRole: "header",
    variant: "heading-lg/bold",
    color: "mobile-text-heading-primary",
    style,
    children,
  });
}
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
    const obj2 = {
      type: require("AppLauncherHomeTypes").AppLauncherHomeListItemType.RECOMMENDATION_SECTION_HEADER,
      section: stringResult,
      sectionName: in_this_server,
      numItems: length,
      numVisibleItems: bound,
    };
    items.push(obj2);
    const substr = found1.slice(0, bound);
    const item = substr.forEach((application, sectionPosition) => {
      const obj = {
        type: AppLauncherHomeTypes.AppLauncherHomeListItemType.RECOMMENDATION_APP,
        application: application.application,
        showsPromoted: application.showsPromoted,
        isFirstRow: 0 === sectionPosition,
        isLastRow: null,
        sectionName: null,
        sectionPosition: null,
        sectionOverallPosition: null,
      };
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
      let obj = {
        type: require("AppLauncherHomeTypes").AppLauncherHomeListItemType.VIEW_ALL,
        applications: found1.map((application) => application.application),
        promotedApplicationIds: null,
        sectionName: null,
        sectionOverallPosition: null,
        title: null,
      };
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
const ApplicationCommandIndexStore = fn(9485);
({ useContextIndexState: closure_8, useUserIndexState: closure_9 } = ApplicationCommandIndexStore);
const AppLauncherNativeConstants = fn(1483);
const DEFAULT_CONTENT_PADDING = AppLauncherNativeConstants.DEFAULT_CONTENT_PADDING;
let closure_15 = AppLauncherNativeConstants.FLASH_LIST_ITEM_IMPRESSION_VIEWABILITY_CONFIG;
const Constants = fn(1074);
({ AnalyticEvents: closure_16, Permissions: closure_17 } = Constants);
const ContentDismissActionType = fn(2041).ContentDismissActionType;
const jsxProd = fn(21);
({ jsx: closure_19, jsxs: closure_20, Fragment: closure_21 } = jsxProd);
let c22 = 1.7777777777777777;
let closure_23 = [];
const APP_LAUNCHER_IN_TEXT = fn(12419).ApplicationCollectionSurface.APP_LAUNCHER_IN_TEXT;
const createStyles = fn(4829);
let obj2 = {
  container: { backgroundColor: nativeDefault.colors.MOBILE_KEYBOARD_PANEL_BACKGROUND, flex: 1 },
  topBackgroundFill: null,
  sectionHeader: null,
  list: null,
  searchBarContainer: null,
  divider: null,
  appRowLabelWithPromotedContainer: null,
  appRowLabelWithPromotedTextContainer: null,
  promotedLabel: null,
  activityItemContainer: null,
  activityImageContainer: null,
  activityDetailsContainer: null,
  activityItemTupleContainer: null,
  activityItemTupleShelfItemContainer: null,
  activityItemImage: null,
  submittingOverlay: null,
};
let rect = {
  backgroundColor: nativeDefault.colors.MOBILE_KEYBOARD_PANEL_BACKGROUND,
  position: "absolute",
  top: -16,
  left: 0,
  right: 0,
  height: 16,
};
obj2.topBackgroundFill = rect;
obj2.sectionHeader = { marginBottom: 8, marginTop: 8 };
let obj3 = { backgroundColor: nativeDefault.colors.MOBILE_KEYBOARD_PANEL_BACKGROUND, flex: 1 };
obj2.list = {
  paddingHorizontal: DEFAULT_CONTENT_PADDING,
  backgroundColor: nativeDefault.colors.MOBILE_KEYBOARD_PANEL_BACKGROUND,
};
obj2.searchBarContainer = { paddingHorizontal: DEFAULT_CONTENT_PADDING, paddingBottom: DEFAULT_CONTENT_PADDING };
let obj4 = {
  paddingHorizontal: DEFAULT_CONTENT_PADDING,
  backgroundColor: nativeDefault.colors.MOBILE_KEYBOARD_PANEL_BACKGROUND,
};
obj2.divider = {
  borderColor: nativeDefault.colors.BORDER_STRONG,
  borderTopWidth: 1,
  marginTop: nativeDefault.space.PX_24,
};
obj2.appRowLabelWithPromotedContainer = {
  overflow: "hidden",
  flexDirection: "row",
  alignItems: "center",
  gap: nativeDefault.space.PX_4,
};
obj2.appRowLabelWithPromotedTextContainer = { flexShrink: 1 };
let obj5 = { borderColor: nativeDefault.colors.BORDER_STRONG, borderTopWidth: 1, marginTop: nativeDefault.space.PX_24 };
obj2.promotedLabel = {
  alignSelf: "center",
  justifyContent: "center",
  paddingVertical: 2,
  paddingHorizontal: nativeDefault.space.PX_4,
  backgroundColor: nativeDefault.colors.INTERACTIVE_BACKGROUND_ACTIVE,
  borderRadius: nativeDefault.radii.lg,
};
let obj6 = {
  alignSelf: "center",
  justifyContent: "center",
  paddingVertical: 2,
  paddingHorizontal: nativeDefault.space.PX_4,
  backgroundColor: nativeDefault.colors.INTERACTIVE_BACKGROUND_ACTIVE,
  borderRadius: nativeDefault.radii.lg,
};
obj2.activityItemContainer = {
  borderRadius: nativeDefault.radii.md,
  overflow: "hidden",
  height: "100%",
  backgroundColor: nativeDefault.colors.BACKGROUND_APP_LAUNCHER_CARD_DEFAULT,
  borderWidth: 1,
  borderColor: nativeDefault.colors.BORDER_SUBTLE,
};
let obj7 = {
  borderRadius: nativeDefault.radii.md,
  overflow: "hidden",
  height: "100%",
  backgroundColor: nativeDefault.colors.BACKGROUND_APP_LAUNCHER_CARD_DEFAULT,
  borderWidth: 1,
  borderColor: nativeDefault.colors.BORDER_SUBTLE,
};
obj2.activityImageContainer = {
  justifyContent: "center",
  alignItems: "center",
  height: 120,
  backgroundColor: nativeDefault.colors.BACKGROUND_BASE_LOWEST,
  borderBottomWidth: StyleSheet.hairlineWidth,
  borderBottomColor: nativeDefault.colors.BORDER_SUBTLE,
};
let obj8 = {
  justifyContent: "center",
  alignItems: "center",
  height: 120,
  backgroundColor: nativeDefault.colors.BACKGROUND_BASE_LOWEST,
  borderBottomWidth: StyleSheet.hairlineWidth,
  borderBottomColor: nativeDefault.colors.BORDER_SUBTLE,
};
obj2.activityDetailsContainer = { padding: nativeDefault.space.PX_12, flexGrow: 1, flexShrink: 1 };
obj2.activityItemTupleContainer = { flexDirection: "row", gap: 12 };
obj2.activityItemTupleShelfItemContainer = { width: "50%", flexShrink: 1 };
obj2.activityItemImage = { height: "100%", width: "100%" };
obj2.submittingOverlay = { position: "absolute", top: 0, left: 0, height: "100%", width: "100%" };
let closure_25 = createStyles.createStyles(obj2);
let size = fn(2);
let result = size.fileFinishedImporting("modules/app_launcher/native/screens/home/AppLauncherHomeScreen.tsx");

export default function AppLauncherHomeScreen(route) {
  const params = route.route.params;
  const context = params.context;
  const initialSearchQuery = params.initialSearchQuery;
  const navigation = route.navigation;
  let handleViewableItemsChanged;
  let memo8;
  frecencyCommands = undefined;
  let memo1;
  sectionDescriptors = undefined;
  let memo;
  let callback3;
  let clickOnHomeActivityOpensAppDetails;
  c23 = undefined;
  let memo9;
  let ref;
  let callback5;
  closure_28 = undefined;
  let pinnedSearchBarBottomBorder;
  let ref1;
  c31 = undefined;
  c32 = undefined;
  let stateFromStores3;
  let callback6;
  let trackAppLauncherHomeItemImpression;
  let callback8;
  const viewableAppLauncherHomeItems = context(handleViewableItemsChanged[37]).useViewableAppLauncherHomeItems();
  handleViewableItemsChanged = viewableAppLauncherHomeItems.handleViewableItemsChanged;
  ({ hasViewedActivityItem, hasViewedLearnMoreItem } = viewableAppLauncherHomeItems);
  const tmp5 = initialSearchQuery(handleViewableItemsChanged[38])(hasViewedActivityItem);
  const tmp6 = initialSearchQuery(handleViewableItemsChanged[38])(hasViewedLearnMoreItem);
  _slicedToArray = tmp6;
  let tmp7 = ref();
  noop = tmp7;
  let tmp8 = initialSearchQuery(handleViewableItemsChanged[39])();
  const height = tmp8;
  let obj = context(handleViewableItemsChanged[37]);
  const requiredAppLauncherContext = context(handleViewableItemsChanged[40]).useRequiredAppLauncherContext();
  const chatInputRef = requiredAppLauncherContext.chatInputRef;
  const keyboardCloseReasonRef = requiredAppLauncherContext.keyboardCloseReasonRef;
  const width = requiredAppLauncherContext.width;
  const entrypoint = requiredAppLauncherContext.entrypoint;
  const onActivityItemSelected = requiredAppLauncherContext.onActivityItemSelected;
  let size = initialSearchQuery(handleViewableItemsChanged[41])();
  const isLandscape = tmp10;
  let items = [entrypoint];
  const effect = noop.useEffect(() => {
    if (entrypoint === AppLauncherTypes.AppLauncherEntrypoint.VOICE) {
      const result = EmbeddedActivitiesActionCreatorsAll.dismissNewActivityIndicator();
    }
  }, items);
  let items1 = [chatInputRef, keyboardCloseReasonRef];
  const items2 = [context, entrypoint, navigation];
  const callback = noop.useCallback(() => {
    keyboardCloseReasonRef.current = AppLauncherContext.AppLauncherKeyboardCloseReason.COMMAND;
    const current = chatInputRef.current;
    if (current != null) {
      current.closeCustomKeyboard();
    }
  }, items1);
  const callback1 = noop.useCallback((application, sectionName) => {
    const obj2 = {
      location: ApplicationCommandTypes.ApplicationCommandTriggerLocations.APP_LAUNCHER_HOME,
      application: null,
      navigation: null,
      context: null,
      sectionName: null,
      entrypoint: null,
    };
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
  const callback2 = noop.useCallback((navigates) => {
    let flag = navigates.navigates;
    ({ shelfData, sectionName } = navigates);
    if (flag === undefined) {
      flag = true;
    }
    const obj = AppLauncherNativeUtils;
    const result = obj.handleApplicationSelected({
      location: ApplicationCommandTypes.ApplicationCommandTriggerLocations.APP_LAUNCHER_HOME,
      application: shelfData.application,
      navigation,
      context,
      sectionName,
      navigates: flag,
      entrypoint,
    });
  }, items3);
  closure_129_0 = context;
  closure_129_1 = entrypoint;
  closure_129_2 = undefined;
  closure_129_3 = undefined;
  closure_129_4 = undefined;
  closure_129_5 = undefined;
  closure_129_6 = undefined;
  closure_129_7 = undefined;
  closure_129_8 = undefined;
  closure_129_9 = undefined;
  closure_129_10 = undefined;
  closure_129_11 = undefined;
  closure_129_12 = undefined;
  closure_129_13 = undefined;
  closure_129_14 = undefined;
  closure_129_15 = undefined;
  closure_129_16 = undefined;
  closure_129_17 = undefined;
  let obj2 = context(handleViewableItemsChanged[40]);
  const fetchDeveloperActivityShelfItems = context(
    handleViewableItemsChanged[74],
  ).useFetchDeveloperActivityShelfItems();
  let num = 2;
  if (initialSearchQuery(handleViewableItemsChanged[35])()) {
    num = 4;
  }
  closure_129_2 = num;
  let guild_id;
  let obj4 = context(handleViewableItemsChanged[74]);
  if ("channel" === context.type) {
    guild_id = context.channel.guild_id;
  }
  const tmp4ResultResult = initialSearchQuery(handleViewableItemsChanged[75])({ guildId: guild_id });
  closure_129_3 = tmp4ResultResult;
  let tmp19 = entrypoint === context(handleViewableItemsChanged[42]).AppLauncherEntrypoint.VOICE;
  closure_129_4 = tmp19;
  const tmp20 = initialSearchQuery(handleViewableItemsChanged[76])({ context, onlyActivityApps: tmp19 });
  ({ frecencyCommands, frecentApps } = tmp20);
  closure_129_5 = frecentApps;
  ({ sectionDescriptors, loading } = tmp20);
  const tmp21 = entrypoint === context(handleViewableItemsChanged[42]).AppLauncherEntrypoint.TEXT;
  closure_129_6 = tmp21;
  const appsInThisServer = tmp4(tmp2[77])({ context }).appsInThisServer;
  closure_129_7 = appsInThisServer;
  const items4 = [appsInThisServer, tmp21];
  memo = obj3.useMemo(() => {
    const intl = util.intl;
    const mapped = closure_6
      ? chatInputRef
      : closure_23.map((application) => ({ application: application.application }));
    return getRecommendationItemsWithViewAll(
      mapped,
      "in_this_server",
      intl.string(util.t.oJyzCu),
      InThisServerSection.IN_THIS_SERVER_ITEM_MAX,
    );
  }, items4);
  const items5 = [frecentApps];
  memo1 = obj3.useMemo(
    () =>
      length.map((applicationId, index) => ({
        type: context(handleViewableItemsChanged[45]).AppLauncherHomeListItemType.APP,
        applicationId: applicationId.id,
        section: applicationId,
        isFirstRow: 0 === index,
        isLastRow: index === length.length - 1,
        sectionName: "recents",
      })),
    items5,
  );
  const items6 = [tmp21, frecentApps];
  let memo2 = obj3.useMemo(() => {
    let tmp = !closure_6;
    if (closure_6) {
      tmp = !closure_5.some((application) => null != application.application);
    }
    return tmp;
  }, items6);
  const tmp4Result = initialSearchQuery(handleViewableItemsChanged[75]);
  let id;
  if ("channel" === context.type) {
    id = context.channel.id;
  }
  const isActivitiesInTextEnabled = context(handleViewableItemsChanged[78]).useIsActivitiesInTextEnabled(id);
  closure_129_8 = isActivitiesInTextEnabled;
  const items7 = [isActivitiesInTextEnabled, context, entrypoint];
  const effect1 = obj3.useEffect(() => {
    let tmp = keyboardCloseReasonRef;
    if (!keyboardCloseReasonRef) {
      tmp = initialSearchQuery === AppLauncherTypes.AppLauncherEntrypoint.VOICE;
    }
    if (tmp) {
      let guild_id;
      if ("channel" === context.type) {
        guild_id = context.channel.guild_id;
      }
      const obj2 = { guildId: guild_id, force: true };
      const shelf = EmbeddedActivitiesActionCreators.fetchShelf(obj2);
    }
  }, items7);
  let tmpResult = context(handleViewableItemsChanged[78]);
  const items8 = [entrypoint];
  const stateFromStores = context(handleViewableItemsChanged[28]).useStateFromStores(items8, () =>
    entrypoint.get("only_show_preview_app_collections"),
  );
  const tmpResult10 = context(handleViewableItemsChanged[28]);
  const ApplicationCollectionActiveState = tmp(tmp2[73]).ApplicationCollectionActiveState;
  if (stateFromStores) {
    let PREVIEW = ApplicationCollectionActiveState.PREVIEW;
  } else {
    PREVIEW = tmp4Result4.getConfig({ location: "App Launcher Home (Mobile)" }).enabled
      ? ApplicationCollectionActiveState.NON_STAFF_PREVIEW
      : ApplicationCollectionActiveState.ACTIVE;
  }
  closure_129_9 = PREVIEW;
  tmp4Result4 = initialSearchQuery(handleViewableItemsChanged[72]);
  const items9 = [onActivityItemSelected];
  const stateFromStores1 = context(handleViewableItemsChanged[28]).useStateFromStores(items9, () =>
    ApplicationDirectoryCollectionsStore.getCollections({ surface: APP_LAUNCHER_IN_TEXT, activeState: width }),
  );
  closure_129_10 = stateFromStores1;
  const items10 = [stateFromStores1, tmp19];
  const memo3 = obj3.useMemo(() => {
    if (closure_4) {
      let result = AppLauncherUtils.ensureRecommendationSectionsOnlyContainActivities(entrypoint);
    } else {
      result = entrypoint;
    }
    return result;
  }, items10);
  closure_129_11 = memo3;
  const items11 = [PREVIEW, entrypoint];
  const effect2 = obj3.useEffect(() => {
    if (obj.appLauncherShowsRecommendations(initialSearchQuery)) {
      const obj2 = { surface: APP_LAUNCHER_IN_TEXT, activeState: width };
      const collections = ApplicationDirectoryActionCreators.fetchCollections(obj2);
      const tmpResult = ApplicationDirectoryActionCreators;
    }
    obj = AppLauncherUtils;
  }, items11);
  const items12 = [entrypoint, tmp4ResultResult];
  const memo4 = obj3.useMemo(() => {
    let diff;
    let arr = handleViewableItemsChanged;
    if (0 !== handleViewableItemsChanged.length) {
      if (initialSearchQuery === AppLauncherTypes.AppLauncherEntrypoint.VOICE) {
        const items = [];
        let tmp8 = require;
        let num = 0;
        if (0 < arr.length - 1) {
          do {
            let sum = num + 1;
            let obj = {
              type: AppLauncherHomeTypes.AppLauncherHomeListItemType.SHELF_ITEM_TUPLE,
              shelfItem1: handleViewableItemsChanged[num],
              shelfItem2: handleViewableItemsChanged[sum],
              sectionName: "activities",
              shelfItem1SectionPosition: num,
              shelfItem2SectionPosition: sum,
              sectionOverallPosition: 0,
              isLastTuple: false,
            };
            let arr2 = items.push(obj);
            num = num + 2;
            tmp8 = require;
            arr = handleViewableItemsChanged;
            diff = handleViewableItemsChanged.length - 1;
          } while (num < diff);
        }
        if (arr.length % 2 === 1) {
          const obj2 = {
            type: null,
            shelfItem1: null,
            shelfItem2: null,
            sectionName: "activities",
            shelfItem1SectionPosition: null,
            shelfItem2SectionPosition: null,
            sectionOverallPosition: 0,
            isLastTuple: false,
          };
          const diff1 = arr.length - 1;
          obj2.type = tmp8(12430).AppLauncherHomeListItemType.SHELF_ITEM_TUPLE;
          obj2.shelfItem1 = arr[arr.length - 1];
          obj2.shelfItem2 = undefined;
          obj2.shelfItem1SectionPosition = diff1;
          obj2.shelfItem2SectionPosition = undefined;
          items.push(obj2);
        }
        items[items.length - 1].isLastTuple = true;
        const obj5 = {
          type: tmp8(12430).AppLauncherHomeListItemType.SECTION_HEADER,
          section: null,
          sectionName: "activities",
          numItems: null,
          numVisibleItems: null,
        };
        const intl = tmp8(1115).intl;
        obj5.section = intl.string(tmp8(1115).t.aeuOoh);
        ({ length: obj3.numItems, length: obj3.numVisibleItems } = arr);
        const items1 = [obj5];
        HermesBuiltin.arraySpread(items, 1);
        return items1;
      }
    }
    return [];
  }, items12);
  closure_129_12 = memo4;
  const tmp33 = keyboardCloseReasonRef(context, true, false);
  closure_129_13 = tmp33;
  const tmp34 = width(true, false);
  closure_129_14 = tmp34;
  let result = tmp33.result;
  let sections;
  if (result != null) {
    sections = result.sections;
  }
  const items13 = [sections];
  let result2 = tmp34.result;
  let sections1;
  if (result2 != null) {
    sections1 = result2.sections;
  }
  items13[1] = sections1;
  let memo5 = obj3.useMemo(() => {
    const result = callback1.result;
    let sections;
    if (result != null) {
      sections = result.sections;
    }
    if (sections == null) {
      sections = {};
    }
    const result2 = callback2.result;
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
  }, items13);
  const tmpResult11 = context(handleViewableItemsChanged[28]);
  const items14 = [isLandscape];
  let channel = null;
  const stateFromStores2 = context(handleViewableItemsChanged[28]).useStateFromStores(items14, () => {
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
  closure_129_15 = memo2;
  const items15 = [memo3, tmp4ResultResult, memo2];
  const memo6 = obj3.useMemo(() => {
    const items = [];
    if (memo8) {
      return items;
    } else {
      const _Set = Set;
      let item = onActivityItemSelected.forEach((application_directory_collection_items) => {
        const prop = application_directory_collection_items.application_directory_collection_items;
        const item = prop.forEach((type) => {
          if (type.type === items(handleViewableItemsChanged[80]).ApplicationDirectoryCollectionItemType.APPLICATION) {
            set.add(type.application.id);
          }
        });
      });
      const item1 = handleViewableItemsChanged.forEach((application) => {
        if (!set.has(application.application.id)) {
          items.push(application);
        }
      });
      return items;
    }
  }, items15);
  closure_129_16 = memo6;
  const items16 = [num, memo6, memo3, memo2];
  const memo7 = obj3.useMemo(() => {
    let items = [];
    if (memo8) {
      items = [];
    } else {
      let item = onActivityItemSelected.forEach((title, sectionOverallPosition) => {
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
            if (type.type === found1(9614).ApplicationDirectoryCollectionItemType.APPLICATION) {
              let collectionItemAssetUrl;
              if (tmp4) {
                ({ id: obj2.itemId, image_hash: obj2.hash } = type);
                collectionItemAssetUrl = found1(12466).getCollectionItemAssetUrl({ itemId: null, hash: null });
                const obj = { itemId: null, hash: null };
                const tmpResult = found1(12466);
              }
              const obj3 = {
                application: type.application,
                showsPromoted: found1(1385).hasFlag(type.flags, found1(12467).ApplicationCollectionItemFlags.PROMOTED),
                overrideImageUrl: collectionItemAssetUrl,
                sectionPosition,
              };
              return obj3;
            }
          });
          const found = mapped.filter(GlobalUtils.isNotNullish);
          let num3 = 0;
          if (0 < found.length) {
            do {
              let obj2 = {
                type: AppLauncherHomeTypes.AppLauncherHomeListItemType.RECOMMENDATION_TUPLE,
                sectionName: title.title,
                sectionOverallPosition,
                items: null,
                isLastTuple: null,
              };
              sum = num3 + navigation;
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
            if (type.type === found1(9614).ApplicationDirectoryCollectionItemType.APPLICATION) {
              const obj = {
                application: type.application,
                showsPromoted: found1(1385).hasFlag(type.flags, found1(12467).ApplicationCollectionItemFlags.PROMOTED),
              };
              return obj;
            }
          });
          const found1 = mapped1.filter(GlobalUtils.isNotNullish);
          if (
            tmpResult.hasFlag(
              title.flags,
              ApplicationCollectionFlags.ApplicationCollectionFlags.APPENDS_REMAINING_ACTIVITIES,
            )
          ) {
            const item = frecencyCommands.forEach((application) => {
              found1.push({ application: application.application, showsPromoted: false });
            });
          }
          const push = items.push;
          items = [];
          HermesBuiltin.arraySpread(
            getRecommendationItemsWithViewAll(found1, title.title, title.title, undefined, sectionOverallPosition),
            0,
          );
          HermesBuiltin.apply(items, items);
          tmpResult = FlagUtils;
        }
      });
    }
    return items;
  }, items16);
  closure_129_17 = memo7;
  const items17 = [entrypoint, memo7, memo4];
  memo8 = obj3.useMemo(() => {
    if (obj.appLauncherShowsRecommendations(initialSearchQuery)) {
      const obj2 = { type: AppLauncherHomeTypes.AppLauncherHomeListItemType.LEARN_MORE };
      const items = [];
      items[HermesBuiltin.arraySpread(memo1, 0)] = obj2;
      return items;
    } else {
      const items1 = [];
      HermesBuiltin.arraySpread(closure_12, 0);
      return items1;
    }
    obj = AppLauncherUtils;
  }, items17);
  const items18 = [context, entrypoint, navigation, sectionDescriptors];
  callback3 = obj3.useCallback((application) => {
    application = application.application;
    const isEmbeddedAppResult = AppLauncherUtils.isEmbeddedApp(application);
    let tmp4 = !isEmbeddedAppResult;
    if (!isEmbeddedAppResult) {
      tmp4 = null != sectionDescriptors.find((id) => id.id === application.id);
    }
    const tmpResult = AppLauncherNativeUtils;
    const result = tmpResult.handleApplicationSelected({
      location: ApplicationCommandTypes.ApplicationCommandTriggerLocations.APP_LAUNCHER_HOME,
      application,
      navigation,
      context,
      installOnDemand: !tmp4,
      sectionName: application.sectionName,
      entrypoint,
    });
    const obj2 = {
      location: ApplicationCommandTypes.ApplicationCommandTriggerLocations.APP_LAUNCHER_HOME,
      application,
      navigation,
      context,
      installOnDemand: !tmp4,
      sectionName: application.sectionName,
      entrypoint,
    };
  }, items18);
  const tmpResult12 = context(handleViewableItemsChanged[28]);
  clickOnHomeActivityOpensAppDetails = context(handleViewableItemsChanged[44]).useClickOnHomeActivityOpensAppDetails();
  const items19 = [
    clickOnHomeActivityOpensAppDetails,
    context,
    entrypoint,
    tmp6,
    size.width > size.height,
    memo8.length,
    navigation,
    onActivityItemSelected,
    callback2,
    callback1,
    callback3,
    tmp8,
    tmp7.sectionHeader,
    width,
  ];
  const callback4 = obj3.useCallback((item) => {
    item = item.item;
    const index = item.index;
    const type = item.type;
    if (context(handleViewableItemsChanged[45]).AppLauncherHomeListItemType.PLACEHOLDER === type) {
      const obj2 = { isFirstRow: 0 === index, isLastRow: index === memo8.length - 1, style: null };
      const obj5 = { height };
      obj2.style = obj5;
      return memo(initialSearchQuery(handleViewableItemsChanged[46]), obj2);
    } else if (context(handleViewableItemsChanged[45]).AppLauncherHomeListItemType.SECTION_HEADER === type) {
      const items = [closure_5.sectionHeader];
      let obj7 = null;
      if (0 !== index) {
        obj7 = { marginTop: 24 };
      }
      const obj11 = {
        accessibilityRole: "header",
        variant: "text-lg/bold",
        color: "mobile-text-heading-primary",
        style: null,
        children: null,
      };
      items[1] = obj7;
      obj11.style = items;
      obj11.children = item.section;
      return memo(context(handleViewableItemsChanged[16]).Text, obj11);
    } else if (context(handleViewableItemsChanged[45]).AppLauncherHomeListItemType.SHELF_ITEM === type) {
      const obj12 = {
        section: item.section,
        onPress(shelfData) {
          callback2({ shelfData, sectionName: item.sectionName });
        },
        isFirstRow: null,
        isLastRow: null,
      };
      ({ isFirstRow: obj10.isFirstRow, isLastRow: obj10.isLastRow } = item);
      return memo(pinnedSearchBarBottomBorder, obj12, item.section.application.id);
    } else if (context(handleViewableItemsChanged[45]).AppLauncherHomeListItemType.SHELF_ITEM_TUPLE === type) {
      const obj13 = {
        context: item,
        sectionName: context(handleViewableItemsChanged[42]).AppLauncherSectionName.ACTIVITIES,
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
        containerWidth: null,
      };
      let tmp31 = !clickOnHomeActivityOpensAppDetails;
      if (!clickOnHomeActivityOpensAppDetails) {
        tmp31 = entrypoint === context(handleViewableItemsChanged[42]).AppLauncherEntrypoint.VOICE;
      }
      obj13.usesHandleActivityItemSelected = tmp31;
      obj13.onActivityItemSelected = onActivityItemSelected;
      ({ shelfItem1: obj9.shelfItem1, shelfItem2: obj9.shelfItem2, isLastTuple: obj9.isLastTuple } = item);
      obj13.entrypoint = entrypoint;
      obj13.containerWidth = width;
      return memo(ref1, obj13, item.shelfItem1.application.id);
    } else if (context(handleViewableItemsChanged[45]).AppLauncherHomeListItemType.RECOMMENDATION_TUPLE === type) {
      const obj14 = {
        context: item,
        sectionName: item.sectionName,
        onPress(application, sectionName) {
          return callback3({ application, sectionName });
        },
        items: null,
        isLastTuple: null,
        entrypoint: null,
        containerWidth: null,
      };
      ({ items: obj8.items, isLastTuple: obj8.isLastTuple } = item);
      obj14.entrypoint = entrypoint;
      obj14.containerWidth = width;
      return memo(c32, obj14);
    } else if (context(handleViewableItemsChanged[45]).AppLauncherHomeListItemType.APP === type) {
      const obj27 = {
        section: item.section,
        onPress() {
          callback1(item.section, AppLauncherTypes.AppLauncherSectionName.INSTALLED);
        },
        isFirstRow: null,
        isLastRow: null,
        style: null,
      };
      ({ isFirstRow: obj6.isFirstRow, isLastRow: obj6.isLastRow } = item);
      const obj28 = { height };
      obj27.style = obj28;
      return memo(closure_28, obj27, item.section.id);
    } else if (
      context(handleViewableItemsChanged[45]).AppLauncherHomeListItemType.RECOMMENDATION_SECTION_HEADER === type
    ) {
      const obj29 = { index, children: item.section };
      return memo(trackAppLauncherHomeItemImpression, obj29);
    } else if (
      context(handleViewableItemsChanged[45]).AppLauncherHomeListItemType.RECOMMENDATION_BANNER_CARD === type
    ) {
      const obj30 = {
        application: item.item.application,
        isFirst: null,
        isLast: null,
        onPress: null,
        isLandscape: null,
        showsPromoted: null,
        overrideImageUrl: null,
      };
      ({ isFirst: obj4.isFirst, isLast: obj4.isLast } = item);
      obj30.onPress = function onPress() {
        return callback3({ application: item.item.application, sectionName: item.sectionName });
      };
      obj30.isLandscape = isLandscape;
      ({ showsPromoted: obj4.showsPromoted, overrideImageUrl: obj4.overrideImageUrl } = item);
      return memo(initialSearchQuery(handleViewableItemsChanged[47]), obj30);
    } else if (context(handleViewableItemsChanged[45]).AppLauncherHomeListItemType.RECOMMENDATION_APP === type) {
      const obj31 = { application: null, isFirstRow: null, isLastRow: null, onPress: null, showsPromoted: null };
      ({ application: obj3.application, isFirstRow: obj3.isFirstRow, isLastRow: obj3.isLastRow } = item);
      obj31.onPress = function onPress() {
        return callback3({ application: item.application, sectionName: item.sectionName });
      };
      obj31.showsPromoted = item.showsPromoted;
      return memo(initialSearchQuery(handleViewableItemsChanged[48]), obj31, item.application.id);
    } else if (context(handleViewableItemsChanged[45]).AppLauncherHomeListItemType.VIEW_ALL === type) {
      const obj32 = {
        title: item.title,
        onPress() {
          const applications = item.applications;
          const mapped = applications.map((item) => item);
          const obj = AppLauncherNativeUtils;
          const result = obj.handleViewAllSelected({
            location: ApplicationCommandTypes.ApplicationCommandTriggerLocations.APP_LAUNCHER_HOME,
            navigation,
            context,
            sectionName: item.sectionName,
            sectionOverallPosition: item.sectionOverallPosition,
            applications: mapped,
            sectionItemType: FrecencySection.SectionItemType.APPS,
            commands: [],
            sectionDescriptors: mapped.map((item) => item(closure_1_3[51]).getApplicationCommandSection(item)),
            title: item.title,
            promotedApplicationIds: item.promotedApplicationIds,
          });
        },
      };
      return memo(initialSearchQuery(handleViewableItemsChanged[49]), obj32);
    } else if (context(handleViewableItemsChanged[45]).AppLauncherHomeListItemType.DIVIDER_ITEM === type) {
      return memo(callback6, {});
    } else if (context(handleViewableItemsChanged[45]).AppLauncherHomeListItemType.LEARN_MORE === type) {
      let obj = { visible: closure_4.valueOf() };
      return memo(initialSearchQuery(handleViewableItemsChanged[52]), obj);
    } else {
      return null;
    }
  }, items19);
  obj3.useRef(null);
  const tmp49 = _slicedToArray;
  const tmpResult13 = context(handleViewableItemsChanged[44]);
  [tmp51, c23] = noop.useState(false);
  const items20 = [entrypoint];
  memo9 = obj3.useMemo(
    () =>
      _modDef12.debounce(
        (query) => {
          context(handleViewableItemsChanged[54]).trackWithMetadata(frecencyCommands.APP_LAUNCHER_SEARCH_QUERY_TYPED, {
            query,
            source,
          });
        },
        400,
        { leading: false, trailing: true },
      ),
    items20,
  );
  ref = obj3.useRef(null);
  const effect3 = obj3.useEffect(
    () => () => {
      const current = ref.current;
      if (current != null) {
        current.cancel();
      }
    },
    [],
  );
  const items21 = [memo9];
  callback5 = obj3.useCallback((arg0) => {
    closure_0 = arg0;
    _undefined(0 !== arg0.length);
    let current = ref.current;
    if (current != null) {
      current.cancel();
    }
    ref.current = context(handleViewableItemsChanged[55]).runAfterInteractions(() => {
      const current = ref.current;
      if (current != null) {
        current.setQuery(closure_0);
      }
    }, 100);
    memo9(arg0);
    const obj = context(handleViewableItemsChanged[55]);
  }, items21);
  noop.useRef(callback5);
  const items22 = [callback5];
  const effect4 = obj3.useEffect(() => {
    closure_27.current = callback5;
  }, items22);
  const items23 = [entrypoint];
  closure_28 = obj3.useCallback(() => {
    AppAnalyticsUtils.trackWithMetadata(constants.APP_LAUNCHER_SEARCH_FOCUSED, { source: entrypoint });
  }, items23);
  const tmp50 = _slicedToArray(noop.useState(false), 2);
  let str = "home-scroller";
  if (tmp51) {
    str = "search-scroller";
  }
  pinnedSearchBarBottomBorder = context(handleViewableItemsChanged[56]).usePinnedSearchBarBottomBorder({
    key: str,
    triggerScrollHeight: 5,
  });
  ref1 = obj3.useRef(null);
  const items24 = [initialSearchQuery];
  const layoutEffect = obj3.useLayoutEffect(() => {
    if (null != initialSearchQuery) {
      const current = ref1.current;
      if (current != null) {
        current.setText(initialSearchQuery);
      }
      const current2 = ref1.current;
      if (current2 != null) {
        current2.focus();
      }
      ref2.current(initialSearchQuery);
    }
  }, items24);
  let sum = initialSearchQuery(handleViewableItemsChanged[36])().bottom + callback2;
  c31 = sum;
  const tmpResult14 = context(handleViewableItemsChanged[56]);
  const bottomSheetFlashListBottomViewabilityInset = context(
    handleViewableItemsChanged[57],
  ).useBottomSheetFlashListBottomViewabilityInset();
  ({ flashListRef, bottomVisibilityInsetRef } = bottomSheetFlashListBottomViewabilityInset);
  let obj5 = { type: null, name: null };
  const tmpResult15 = context(handleViewableItemsChanged[57]);
  obj5.type = context(handleViewableItemsChanged[59]).ImpressionTypes.VIEW;
  obj5.name = context(handleViewableItemsChanged[59]).ImpressionNames.APP_LAUNCHER_HOME_ACTIVITY_ITEM;
  const items25 = [tmp5];
  initialSearchQuery(handleViewableItemsChanged[58])(obj5, { disableTrack: !tmp5 }, items25);
  const obj6 = { disableTrack: !tmp5 };
  const tmp4Result5 = initialSearchQuery(handleViewableItemsChanged[58]);
  [tmp64, c32] = tmp49(noop.useState(false), 2);
  const effect5 = obj3.useEffect(() => {
    _undefined3(true);
  }, []);
  const tmp49Result = tmp49(noop.useState(false), 2);
  const items26 = [callback1];
  stateFromStores3 = context(handleViewableItemsChanged[28]).useStateFromStores(
    items26,
    () => callback1.getTriggeredOnboardingContentMetadata().willShowGlobalSearchOnboarding,
  );
  const items27 = [stateFromStores3];
  callback6 = obj3.useCallback((arg0) => {
    if (stateFromStores3) {
      const obj2 = { dismissAction: tmp };
      const result = DismissibleContentUnsafeUtils.UNSAFE_markDismissibleContentAsDismissed(
        dismissible_content.DismissibleContent.APP_LAUNCHER_GLOBAL_SEARCH_ONBOARDING,
        obj2,
      );
      const obj4 = {};
      const merged = Object.assign(AppLauncherOnboardingPersistedStore.getTriggeredOnboardingContentMetadata());
      obj4.willShowGlobalSearchOnboarding = false;
      const result1 = AppLauncherOnboardingActionCreators.setTriggeredOnboardingContentMetadata(obj4);
    }
  }, items27);
  const tmpResult16 = context(handleViewableItemsChanged[28]);
  trackAppLauncherHomeItemImpression = context(handleViewableItemsChanged[63]).useTrackAppLauncherHomeItemImpression()
    .trackAppLauncherHomeItemImpression;
  const items28 = [sum, tmp7.list];
  const items29 = [sum];
  const memo10 = obj3.useMemo(() => {
    const obj = {};
    const merged = Object.assign(closure_5.list);
    obj.paddingBottom = _undefined2;
    return obj;
  }, items28);
  const memo11 = obj3.useMemo(() => ({ bottom: _undefined2 }), items29);
  const items30 = [pinnedSearchBarBottomBorder];
  const callback7 = obj3.useCallback((type) => type.type, []);
  callback8 = obj3.useCallback((arg0) => {
    pinnedSearchBarBottomBorder.scrollHandler(arg0);
  }, items30);
  const items31 = [callback8];
  const callback9 = obj3.useCallback((nativeEvent) => {
    nativeEvent = nativeEvent.nativeEvent;
    const size = {
      width: nativeEvent.layoutMeasurement.width,
      height: nativeEvent.layoutMeasurement.height,
      offset: nativeEvent.contentOffset.y,
      contentWidth: nativeEvent.contentSize.width,
      contentHeight: nativeEvent.contentSize.height,
    };
    callback8(size);
  }, items31);
  const tmpResult17 = context(handleViewableItemsChanged[63]);
  const appLauncherFlashListProps = context(handleViewableItemsChanged[64]).useAppLauncherFlashListProps({
    onScrollHandler: callback8,
  });
  const items32 = [handleViewableItemsChanged, trackAppLauncherHomeItemImpression];
  let obj7 = { style: tmp7.container, children: null };
  const memo12 = obj3.useMemo(() => {
    const items = [
      { viewabilityConfig: {}, onViewableItemsChanged: handleViewableItemsChanged },
      { viewabilityConfig, onViewableItemsChanged: trackAppLauncherHomeItemImpression },
    ];
    return items;
  }, items32);
  const items33 = [memo(height, { style: tmp7.topBackgroundFill }), , ,];
  const obj9 = { style: tmp7.searchBarContainer, children: null };
  const obj10 = { ref: ref1, placeholder: null, round: true, size: "md", onChange: null, onFocus: null };
  if (entrypoint === context(handleViewableItemsChanged[42]).AppLauncherEntrypoint.VOICE) {
    let intl2 = tmp(tmp2[17]).intl;
    let stringResult = intl2.string(tmp(tmp2[17]).t["pw+r5b"]);
  } else {
    let intl = tmp(tmp2[17]).intl;
    stringResult = intl.string(tmp(tmp2[17]).t.ziyFv2);
  }
  let obj11 = { children: null };
  obj10.placeholder = stringResult;
  obj10.onChange = callback5;
  obj10.onFocus = function onFocus() {
    closure_28();
    callback6({ actionType: ContentDismissActionType.TAKE_ACTION });
  };
  obj9.children = memo(context(handleViewableItemsChanged[65]).SearchField, obj10);
  const items34 = [memo(height, obj9), pinnedSearchBarBottomBorder.bottomBorderComponent];
  obj11.children = items34;
  items33[1] = callback3(clickOnHomeActivityOpensAppDetails, obj11);
  if (tmp51) {
    let obj12 = { ref, context, onScroll: callback9, onSend: callback, entrypoint };
    let tmp77Result = tmp77(tmp(tmp2[66]).SearchLocalAndGlobalContentView, obj12);
  } else {
    let obj13 = {
      context,
      sectionDescriptors,
      commands: frecencyCommands,
      loading,
      apps: memo1,
      onAppSelected: callback3,
      onCommandSelected(command, section) {
        const obj = AppLauncherNativeUtils;
        const result = obj.handleApplicationCommandSelected({
          location: ApplicationCommandTypes.ApplicationCommandTriggerLocations.APP_LAUNCHER_HOME,
          context,
          command,
          section,
          sectionDescriptors,
          query: "",
          navigation,
          sectionName: AppLauncherTypes.AppLauncherSectionName.RECENT_COMMANDS,
          entrypoint,
        });
      },
      onViewAllSelected(sectionItemType) {
        const obj2 = {
          location: ApplicationCommandTypes.ApplicationCommandTriggerLocations.APP_LAUNCHER_APPLICATION_VIEW_FRECENCT,
          navigation,
          context,
          sectionName: null,
          applications: null,
          sectionItemType: null,
          commands: null,
          sectionDescriptors: null,
          title: null,
        };
        let str = "recent_apps_view_more";
        if (sectionItemType === FrecencySection.SectionItemType.COMMANDS) {
          str = "recent_commands_view_more";
        }
        obj2.sectionName = str;
        const mapped = memo1.map((section) => {
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
      },
    };
    const items35 = [tmp77(tmp4(tmp2[50]), obj13), , ,];
    let obj14 = {
      items: memo,
      onAppSelected: callback3,
      onViewAllSelected() {
        const found = memo.find((type) => type.type === context(12430).AppLauncherHomeListItemType.VIEW_ALL);
        let mapped;
        if (found != null) {
          const applications = found.applications;
          if (applications != null) {
            mapped = applications.map((item) => item);
          }
        }
        if (null != mapped) {
          const obj2 = {
            location: ApplicationCommandTypes.ApplicationCommandTriggerLocations.APP_LAUNCHER_HOME,
            navigation,
            context,
            sectionName: AppLauncherTypes.AppLauncherSectionName.APPS_IN_THIS_SERVER,
            applications: mapped,
            sectionItemType: FrecencySection.SectionItemType.APPS,
            commands: [],
            sectionDescriptors: mapped.map((item) => context(7851).getApplicationCommandSection(item)),
            title: null,
          };
          const intl = util.intl;
          obj2.title = intl.string(util.t.oJyzCu);
          const result = AppLauncherNativeUtils.handleViewAllSelected(obj2);
        }
      },
    };
    items35[1] = tmp77(tmp4(tmp2[68]), obj14);
    let tmp77Result4 = null;
    if (tmp40) {
      tmp77Result4 = null;
      if (tmp64) {
        tmp77Result4 = tmp77(tmp4(tmp2[69]), {});
      }
    }
    items35[2] = tmp77Result4;
    let tmp77Result5 = null;
    if (memo2) {
      tmp77Result5 = tmp77(tmp4(tmp2[70]), {});
    }
    const obj15 = {
      ListHeaderComponent: null,
      contentContainerStyle: null,
      scrollIndicatorInsets: null,
      renderItem: null,
      getItemType: null,
      data: null,
      preserveScrollMomentum: true,
      automaticallyAdjustsScrollIndicatorInsets: false,
      keyboardDismissMode: "on-drag",
      keyboardShouldPersistTaps: "always",
      showsVerticalScrollIndicator: false,
      viewabilityConfigCallbackPairs: null,
      bottomViewabilityInsetRef: null,
      ref: null,
      onScroll: null,
      animatedOnScroll: null,
      simultaneousHandlers: null,
      animatedProps: null,
    };
    const obj16 = { children: null };
    items35[3] = tmp77Result5;
    obj16.children = items35;
    obj15.ListHeaderComponent = tmp75(tmp78, obj16);
    obj15.contentContainerStyle = memo10;
    obj15.scrollIndicatorInsets = memo11;
    obj15.renderItem = callback4;
    obj15.getItemType = callback7;
    obj15.data = memo8;
    obj15.viewabilityConfigCallbackPairs = memo12;
    obj15.bottomViewabilityInsetRef = bottomVisibilityInsetRef;
    if (entrypoint === tmp(tmp2[42]).AppLauncherEntrypoint.VOICE) {
      flashListRef = appLauncherFlashListProps.scrollerRef;
    }
    obj15.ref = flashListRef;
    obj15.onScroll = callback9;
    ({
      onScroll: obj25.animatedOnScroll,
      gestureRef: obj25.simultaneousHandlers,
      animatedProps: obj25.animatedProps,
    } = appLauncherFlashListProps);
    tmp77Result = tmp77(tmp4(tmp2[64]), obj15);
    const tmp4Result6 = tmp4(tmp2[64]);
  }
  items33[2] = tmp77Result;
  let tmp77Result6 = entrypoint === tmp(tmp2[42]).AppLauncherEntrypoint.TEXT;
  if (tmp77Result6) {
    const obj17 = { windowDimensions: size, visible: stateFromStores3, markAsDismissed: callback6 };
    tmp77Result6 = tmp77(tmp4(tmp2[71]), obj17);
  }
  items33[3] = tmp77Result6;
  obj7.children = items33;
  return callback3(height, obj7);
}
export { BaseAppRow };
