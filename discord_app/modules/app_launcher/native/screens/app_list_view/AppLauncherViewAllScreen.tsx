// === Module 12446: AppLauncherViewAllScreen ===

// Module 12446 (AppLauncherViewAllScreen)
import nativeDefault from "native" /* 576 */;
import util from "util" /* 1115 */;
import native from "native" /* 1177 */;
import Text_Text from "Text/Text" /* 4752 */;
import Pressables from "Pressables" /* 5334 */;
import ArrowLargeLeftIcon from "ArrowLargeLeftIcon" /* 5840 */;
import ApplicationCommandTypes from "ApplicationCommandTypes" /* 7763 */;
import AppLauncherContext from "AppLauncherContext" /* 11479 */;
import AppLauncherNativeUtils from "AppLauncherNativeUtils" /* 12302 */;
import AppLauncherBackButton from "AppLauncherBackButton" /* 12382 */;
import noop from "module_19" /* 19 */;

require = fn;
const View = fn(17).View;
const AppLauncherNativeConstants = fn(1483);
const DEFAULT_CONTENT_PADDING = AppLauncherNativeConstants.DEFAULT_CONTENT_PADDING;
let closure_6 = AppLauncherNativeConstants.FLASH_LIST_ITEM_IMPRESSION_VIEWABILITY_CONFIG;
const jsxProd = fn(21);
({ jsx: closure_7, jsxs: closure_8 } = jsxProd);
let closure_9 = { bottom: 4 };
const createStyles = fn(4756);
let obj2 = { container: { height: "100%", backgroundColor: nativeDefault.colors.MOBILE_KEYBOARD_PANEL_BACKGROUND, flex: 1, flexDirection: "column", paddingBottom: 12 }, header: null, list: null, backButton: null };
let obj3 = { height: "100%", backgroundColor: nativeDefault.colors.MOBILE_KEYBOARD_PANEL_BACKGROUND, flex: 1, flexDirection: "column", paddingBottom: 12 };
obj2.header = { flexDirection: "row", alignItems: "center", justifyContent: "space-between", height: 24, backgroundColor: nativeDefault.colors.MOBILE_KEYBOARD_PANEL_BACKGROUND, paddingHorizontal: DEFAULT_CONTENT_PADDING, marginBottom: 12 };
let obj4 = { flexDirection: "row", alignItems: "center", justifyContent: "space-between", height: 24, backgroundColor: nativeDefault.colors.MOBILE_KEYBOARD_PANEL_BACKGROUND, paddingHorizontal: DEFAULT_CONTENT_PADDING, marginBottom: 12 };
obj2.list = { paddingHorizontal: DEFAULT_CONTENT_PADDING, paddingBottom: nativeDefault.space.PX_4 };
let size = { width: fn(12382).BACK_BUTTON_SIZE, height: fn(12382).BACK_BUTTON_SIZE, alignItems: "center", justifyContent: "center" };
obj2.backButton = size;
let closure_10 = createStyles.createStyles(obj2);
size = fn(2);
let result = size.fileFinishedImporting("modules/app_launcher/native/screens/app_list_view/AppLauncherViewAllScreen.tsx");

export default function AppLauncherViewAllScreen(route) {
  const params = route.route.params;
  const context = params.context;
  const analyticsLocation = params.analyticsLocation;
  ({ sectionName, sectionOverallPosition } = params);
  const applications = params.applications;
  const commands = params.commands;
  const sectionDescriptors = params.sectionDescriptors;
  const title = params.title;
  const promotedApplicationIds = params.promotedApplicationIds;
  const navigation = route.navigation;
  sectionName = undefined;
  closure_10 = undefined;
  c11 = undefined;
  let chatInputRef;
  let keyboardCloseReasonRef;
  let entrypoint;
  let onPress;
  let callback1;
  let callback2;
  let callback4;
  let trackAppLauncherItemImpressionOnFirstView;
  if (sectionName == null) {
    sectionName = "frecency_view_all";
  }
  let tmp = closure_10();
  closure_10 = tmp;
  const sum = analyticsLocation(sectionOverallPosition[7])().bottom + sectionDescriptors;
  c11 = sum;
  const requiredAppLauncherContext = context(sectionOverallPosition[8]).useRequiredAppLauncherContext();
  chatInputRef = requiredAppLauncherContext.chatInputRef;
  keyboardCloseReasonRef = requiredAppLauncherContext.keyboardCloseReasonRef;
  entrypoint = requiredAppLauncherContext.entrypoint;
  let items = [chatInputRef, keyboardCloseReasonRef, navigation];
  onPress = applications.useCallback(() => {
    if (navigation.canGoBack()) {
      navigation.pop();
    } else {
      keyboardCloseReasonRef.current = AppLauncherContext.AppLauncherKeyboardCloseReason.BACK;
      const current = chatInputRef.current;
      if (current != null) {
        current.closeCustomKeyboard();
      }
    }
  }, items);
  const items1 = [analyticsLocation, context, entrypoint, navigation];
  callback1 = applications.useCallback((arg0) => {
    ({ application, sectionName } = arg0);
    let APP_LAUNCHER_APPLICATION_VIEW_FRECENCT = analyticsLocation;
    if (analyticsLocation == null) {
      APP_LAUNCHER_APPLICATION_VIEW_FRECENCT = ApplicationCommandTypes.ApplicationCommandTriggerLocations.APP_LAUNCHER_APPLICATION_VIEW_FRECENCT;
    }
    const result = AppLauncherNativeUtils.handleApplicationSelected({ location: APP_LAUNCHER_APPLICATION_VIEW_FRECENCT, application, navigation, context, sectionName, entrypoint });
    const obj2 = { location: APP_LAUNCHER_APPLICATION_VIEW_FRECENCT, application, navigation, context, sectionName, entrypoint };
  }, items1);
  const items2 = [analyticsLocation, context, entrypoint, navigation, sectionDescriptors];
  callback2 = applications.useCallback((command, section, sectionName) => {
    let APP_LAUNCHER_APPLICATION_VIEW_FRECENCT = analyticsLocation;
    if (analyticsLocation == null) {
      APP_LAUNCHER_APPLICATION_VIEW_FRECENCT = ApplicationCommandTypes.ApplicationCommandTriggerLocations.APP_LAUNCHER_APPLICATION_VIEW_FRECENCT;
    }
    const result = AppLauncherNativeUtils.handleApplicationCommandSelected({ location: APP_LAUNCHER_APPLICATION_VIEW_FRECENCT, context, command, section, sectionDescriptors, query: "", navigation, sectionName, entrypoint });
    const obj2 = { location: APP_LAUNCHER_APPLICATION_VIEW_FRECENCT, context, command, section, sectionDescriptors, query: "", navigation, sectionName, entrypoint };
  }, items2);
  const items3 = [onPress, , , ];
  ({ backButton: arr5[1], header: arr5[2] } = tmp);
  items3[3] = title;
  const items4 = [applications, promotedApplicationIds, callback1, sectionName];
  const memo = applications.useMemo(() => {
    const obj = { style: closure_10.header, children: null };
    const obj2 = { style: closure_10.backButton, accessibilityLabel: null, accessibilityRole: "button", onPress: null, children: null };
    const intl = util.intl;
    obj2.accessibilityLabel = intl.string(util.t["13/7kX"]);
    obj2.onPress = onPress;
    obj2.children = React5(ArrowLargeLeftIcon.ArrowLargeLeftIcon, { color: nativeDefault.colors.INTERACTIVE_TEXT_DEFAULT });
    const items = [React5(Pressables.PressableOpacity, obj2), React5(Text_Text.Text, { accessibilityRole: "header", lineClamp: 1, variant: "heading-lg/bold", color: "mobile-text-heading-primary", children: title }), ];
    const obj3 = { color: nativeDefault.colors.INTERACTIVE_TEXT_DEFAULT };
    const obj4 = { accessibilityRole: "header", lineClamp: 1, variant: "heading-lg/bold", color: "mobile-text-heading-primary", children: title };
    items[2] = React5(native.Spacer, { size: AppLauncherBackButton.BACK_BUTTON_SIZE });
    obj.children = items;
    return React6(View, obj);
  }, items3);
  const items5 = [chatInputRef, keyboardCloseReasonRef];
  const callback3 = applications.useCallback((item) => {
    item = item.item;
    const index = item.index;
    let tmp = null != applications;
    if (tmp) {
      tmp = index === applications.length - 1;
    }
    const obj = {
      application: item,
      onPress() {
        return callback1({ application: item, sectionName });
      },
      isFirstRow: 0 === index,
      isLastRow: tmp,
      showsPromoted: null
    };
    let hasItem;
    if (promotedApplicationIds != null) {
      hasItem = promotedApplicationIds.has(item.id);
    }
    obj.showsPromoted = hasItem;
    return promotedApplicationIds(analyticsLocation(sectionOverallPosition[16]), obj, item.id);
  }, items4);
  callback4 = applications.useCallback(() => {
    const current = chatInputRef.current;
    if (current != null) {
      current.closeCustomKeyboard();
    }
    keyboardCloseReasonRef.current = AppLauncherContext.AppLauncherKeyboardCloseReason.COMMAND;
  }, items5);
  const items6 = [sectionDescriptors, context, commands.length, callback4, sectionName, callback2];
  const callback5 = applications.useCallback((item) => {
    item = item.item;
    const index = item.index;
    let found;
    if (sectionDescriptors != null) {
      found = sectionDescriptors.find((id) => id.id === item.applicationId);
    }
    let application;
    if (found != null) {
      application = found.application;
    }
    const appLauncherIconSource = context(sectionOverallPosition[9]).getAppLauncherIconSource(application);
    if (null == found) {
      return null;
    } else {
      let tmp9 = null != appLauncherIconSource;
      if (tmp9) {
        const obj2 = { iconSource: appLauncherIconSource, iconSize: 36 };
        tmp9 = promotedApplicationIds(analyticsLocation(sectionOverallPosition[17]), obj2);
      }
      const obj3 = {
        command: item,
        onPressCommand() {
            return callback2(item, found, sectionName);
          },
        onExecuteCommand: callback4,
        isFirstRow: 0 === index,
        isLastRow: index === tmp6,
        context: item,
        section: found,
        location: context(sectionOverallPosition[10]).ApplicationCommandTriggerLocations.APP_LAUNCHER_FRECENTS_VIEW_ALL,
        sectionName,
        icon: tmp9
      };
      return promotedApplicationIds(context(sectionOverallPosition[18]).CommandRow, obj3);
    }
    const obj = context(sectionOverallPosition[9]);
  }, items6);
  let obj = context(sectionOverallPosition[8]);
  const bottomSheetFlashListBottomViewabilityInset = context(sectionOverallPosition[19]).useBottomSheetFlashListBottomViewabilityInset();
  ({ flashListRef, bottomVisibilityInsetRef } = bottomSheetFlashListBottomViewabilityInset);
  let obj2 = context(sectionOverallPosition[19]);
  trackAppLauncherItemImpressionOnFirstView = context(sectionOverallPosition[20]).useTrackAppLauncherItemImpressionOnFirstView().trackAppLauncherItemImpressionOnFirstView;
  let obj3 = context(sectionOverallPosition[20]);
  const appLauncherFlashListProps = context(sectionOverallPosition[21]).useAppLauncherFlashListProps();
  const items7 = [sum, tmp.list];
  const memo1 = applications.useMemo(() => {
    const obj = {};
    const merged = Object.assign(closure_10.list);
    obj.paddingBottom = paddingBottom;
    return obj;
  }, items7);
  const items8 = [sectionName, sectionOverallPosition, trackAppLauncherItemImpressionOnFirstView];
  const items9 = [sectionName, sectionOverallPosition, trackAppLauncherItemImpressionOnFirstView];
  const memo2 = applications.useMemo(() => {
    const items = [
      {
        viewabilityConfig,
        onViewableItemsChanged(viewableItems) {
          viewableItems = viewableItems.viewableItems;
          let item = viewableItems.forEach((sectionPosition) => {
            const item = sectionPosition.item;
            closure_1_19({ itemKey: "applicationId:" + item.id, sectionName, sectionPosition: sectionPosition.index, sectionOverallPosition, applicationId: item.id });
          });
        }
      }
    ];
    return items;
  }, items8);
  const memo3 = applications.useMemo(() => {
    const items = [
      {
        viewabilityConfig,
        onViewableItemsChanged(viewableItems) {
          viewableItems = viewableItems.viewableItems;
          let item = viewableItems.forEach((sectionPosition) => {
            const item = sectionPosition.item;
            closure_1_19({ itemKey: "commandId:" + item.id, sectionName, sectionPosition: sectionPosition.index, sectionOverallPosition, applicationId: item.applicationId, commandId: item.id });
          });
        }
      }
    ];
    return items;
  }, items9);
  if (params.sectionItemType === context(sectionOverallPosition[22]).SectionItemType.APPS) {
    const obj6 = {
      preserveScrollMomentum: true,
      contentContainerStyle: memo1,
      scrollIndicatorInsets: sectionName,
      keyExtractor(id) {
          return id.id;
        },
      data: applications,
      renderItem: callback3,
      accessibilityRole: "radiogroup",
      ref: null,
      bottomViewabilityInsetRef: null,
      viewabilityConfigCallbackPairs: null,
      animatedOnScroll: null,
      simultaneousHandlers: null,
      animatedProps: null
    };
    if (entrypoint === tmp5(tmp3[23]).AppLauncherEntrypoint.VOICE) {
      flashListRef = appLauncherFlashListProps.scrollerRef;
    }
    obj6.ref = flashListRef;
    obj6.bottomViewabilityInsetRef = bottomVisibilityInsetRef;
    obj6.viewabilityConfigCallbackPairs = memo2;
    ({ onScroll: obj5.animatedOnScroll, gestureRef: obj5.simultaneousHandlers, animatedProps: obj5.animatedProps } = appLauncherFlashListProps);
    let tmp23Result = promotedApplicationIds(tmp2(tmp3[21]), obj6);
    const tmp2Result = tmp2(tmp3[21]);
  } else {
    const obj10 = {
      preserveScrollMomentum: true,
      contentContainerStyle: memo1,
      scrollIndicatorInsets: sectionName,
      keyExtractor(id) {
          return id.id;
        },
      data: commands,
      renderItem: callback5,
      accessibilityRole: "radiogroup",
      ref: null,
      bottomViewabilityInsetRef: null,
      viewabilityConfigCallbackPairs: null,
      animatedOnScroll: null,
      simultaneousHandlers: null,
      animatedProps: null
    };
    let scrollerRef = flashListRef;
    if (entrypoint === tmp5(tmp3[23]).AppLauncherEntrypoint.VOICE) {
      scrollerRef = appLauncherFlashListProps.scrollerRef;
    }
    obj10.ref = scrollerRef;
    obj10.bottomViewabilityInsetRef = bottomVisibilityInsetRef;
    obj10.viewabilityConfigCallbackPairs = memo3;
    ({ onScroll: obj7.animatedOnScroll, gestureRef: obj7.simultaneousHandlers, animatedProps: obj7.animatedProps } = appLauncherFlashListProps);
    tmp23Result = promotedApplicationIds(tmp2(tmp3[21]), obj10);
    const tmp2Result2 = tmp2(tmp3[21]);
  }
  const obj11 = { style: tmp.container, children: null };
  const items10 = [memo, tmp23Result];
  obj11.children = items10;
  return navigation(commands, obj11);
};