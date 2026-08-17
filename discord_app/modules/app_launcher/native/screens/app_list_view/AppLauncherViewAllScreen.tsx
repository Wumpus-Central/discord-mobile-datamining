// discord_app/modules/app_launcher/native/screens/app_list_view/AppLauncherViewAllScreen.tsx
import ThemesDefault from "Themes" /* 712 */;
import closure_3 from "noop" /* 19 */;
import { View } from "get ActivityIndicator" /* 17 */;
import APP_LAUNCHER_BUILT_IN_SECTION_ICON from "APP_LAUNCHER_BUILT_IN_SECTION_ICON" /* 1499 */;
import jsxProd from "jsxProd" /* 21 */;
import createCacheKey from "createCacheKey" /* 4661 */;

const require = arg1;
const DEFAULT_CONTENT_PADDING = APP_LAUNCHER_BUILT_IN_SECTION_ICON.DEFAULT_CONTENT_PADDING;
let closure_6 = APP_LAUNCHER_BUILT_IN_SECTION_ICON.FLASH_LIST_ITEM_IMPRESSION_VIEWABILITY_CONFIG;
({ jsx: error, jsxs: closure_8 } = jsxProd);
let closure_9 = { bottom: 4 };
createCacheKey = { container: null, header: null, list: null, backButton: null };
createCacheKey = { height: "100%", backgroundColor: ThemesDefault.colors.MOBILE_KEYBOARD_PANEL_BACKGROUND, flex: 1, flexDirection: "column", paddingBottom: 12 };
createCacheKey[0] = createCacheKey;
createCacheKey[1] = { flexDirection: "row", alignItems: "center", justifyContent: "space-between", height: 24, backgroundColor: ThemesDefault.colors.MOBILE_KEYBOARD_PANEL_BACKGROUND, paddingHorizontal: DEFAULT_CONTENT_PADDING, marginBottom: 12 };
let obj1 = { flexDirection: "row", alignItems: "center", justifyContent: "space-between", height: 24, backgroundColor: ThemesDefault.colors.MOBILE_KEYBOARD_PANEL_BACKGROUND, paddingHorizontal: DEFAULT_CONTENT_PADDING, marginBottom: 12 };
createCacheKey[2] = { paddingHorizontal: DEFAULT_CONTENT_PADDING, paddingBottom: ThemesDefault.space.PX_4 };
const obj2 = { paddingHorizontal: DEFAULT_CONTENT_PADDING, paddingBottom: ThemesDefault.space.PX_4 };
createCacheKey[3] = { width: require("AppLauncherBackButton").BACK_BUTTON_SIZE, height: require("AppLauncherBackButton").BACK_BUTTON_SIZE, alignItems: "center", justifyContent: "center" };
let closure_10 = createCacheKey.createStyles(createCacheKey);
let obj3 = { width: require("AppLauncherBackButton").BACK_BUTTON_SIZE, height: require("AppLauncherBackButton").BACK_BUTTON_SIZE, alignItems: "center", justifyContent: "center" };
let result = require("set").fileFinishedImporting("modules/app_launcher/native/screens/app_list_view/AppLauncherViewAllScreen.tsx");

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
  let callback;
  c11 = undefined;
  let chatInputRef;
  let keyboardCloseReasonRef;
  let entrypoint;
  callback = undefined;
  let callback1;
  let callback2;
  let callback4;
  let trackAppLauncherItemImpressionOnFirstView;
  if (sectionName == null) {
    sectionName = "frecency_view_all";
  }
  let tmp = callback();
  callback = tmp;
  const sum = analyticsLocation(sectionOverallPosition[7])().bottom + sectionDescriptors;
  c11 = sum;
  let obj = context(sectionOverallPosition[8]);
  const requiredAppLauncherContext = obj.useRequiredAppLauncherContext();
  chatInputRef = requiredAppLauncherContext.chatInputRef;
  keyboardCloseReasonRef = requiredAppLauncherContext.keyboardCloseReasonRef;
  entrypoint = requiredAppLauncherContext.entrypoint;
  let items = [chatInputRef, keyboardCloseReasonRef, navigation];
  callback = applications.useCallback(() => {
    let arr = navigation;
    if (navigation.canGoBack()) {
      arr = arr.pop();
    } else {
      keyboardCloseReasonRef.current = context(sectionOverallPosition[8]).AppLauncherKeyboardCloseReason.BACK;
      const current = chatInputRef.current;
      if (current != null) {
        current.closeCustomKeyboard();
      }
    }
  }, items);
  const items1 = [analyticsLocation, context, entrypoint, navigation];
  callback1 = applications.useCallback((arg0) => {
    ({ application, sectionName } = arg0);
    let obj = context(sectionOverallPosition[9]);
    let APP_LAUNCHER_APPLICATION_VIEW_FRECENCT = analyticsLocation;
    if (analyticsLocation == null) {
      APP_LAUNCHER_APPLICATION_VIEW_FRECENCT = context(sectionOverallPosition[10]).ApplicationCommandTriggerLocations.APP_LAUNCHER_APPLICATION_VIEW_FRECENCT;
    }
    obj = { location: APP_LAUNCHER_APPLICATION_VIEW_FRECENCT, application, navigation, context, sectionName, entrypoint };
    const result = obj.handleApplicationSelected(obj);
  }, items1);
  const items2 = [analyticsLocation, context, entrypoint, navigation, sectionDescriptors];
  callback2 = applications.useCallback((command, section, sectionName) => {
    let obj = context(sectionOverallPosition[9]);
    let APP_LAUNCHER_APPLICATION_VIEW_FRECENCT = analyticsLocation;
    if (analyticsLocation == null) {
      APP_LAUNCHER_APPLICATION_VIEW_FRECENCT = context(sectionOverallPosition[10]).ApplicationCommandTriggerLocations.APP_LAUNCHER_APPLICATION_VIEW_FRECENCT;
    }
    obj = { location: APP_LAUNCHER_APPLICATION_VIEW_FRECENCT, context, command, section, sectionDescriptors, query: "", navigation, sectionName, entrypoint };
    const result = obj.handleApplicationCommandSelected(obj);
  }, items2);
  const items3 = [callback, , , ];
  ({ backButton: arr5[1], header: arr5[2] } = tmp);
  items3[3] = title;
  const items4 = [applications, promotedApplicationIds, callback1, sectionName];
  const memo = applications.useMemo(() => {
    let obj = { style: closure_10.header, children: null };
    obj = { style: closure_10.backButton, accessibilityLabel: null, accessibilityRole: "button", onPress: null, children: null };
    const intl = context(sectionOverallPosition[12]).intl;
    obj[1] = intl.string(context(sectionOverallPosition[12]).t["13/7kX"]);
    obj[3] = callback;
    obj = { color: analyticsLocation(sectionOverallPosition[5]).colors.INTERACTIVE_TEXT_DEFAULT };
    obj[4] = promotedApplicationIds(context(sectionOverallPosition[13]).ArrowLargeLeftIcon, obj);
    const items = [promotedApplicationIds(context(sectionOverallPosition[11]).PressableOpacity, obj), promotedApplicationIds(context(sectionOverallPosition[14]).Text, { accessibilityRole: "header", lineClamp: 1, variant: "heading-lg/bold", color: "mobile-text-heading-primary", children: title }), promotedApplicationIds(context(sectionOverallPosition[15]).Spacer, { size: context(sectionOverallPosition[6]).BACK_BUTTON_SIZE })];
    obj[1] = items;
    return navigation(commands, obj);
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
        return closure_1_16({ application: item, sectionName: closure_1_9 });
      },
      isFirstRow: 0 === index,
      isLastRow: tmp,
      showsPromoted: null
    };
    let hasItem;
    if (promotedApplicationIds != null) {
      hasItem = promotedApplicationIds.has(item.id);
    }
    obj[4] = hasItem;
    return promotedApplicationIds(analyticsLocation(sectionOverallPosition[16]), obj, item.id);
  }, items4);
  callback4 = applications.useCallback(() => {
    const current = chatInputRef.current;
    if (current != null) {
      current.closeCustomKeyboard();
    }
    keyboardCloseReasonRef.current = context(sectionOverallPosition[8]).AppLauncherKeyboardCloseReason.COMMAND;
  }, items5);
  const items6 = [sectionDescriptors, context, commands.length, callback4, sectionName, callback2];
  const callback5 = applications.useCallback((item) => {
    item = item.item;
    const index = item.index;
    let found;
    found = undefined;
    if (sectionDescriptors != null) {
      found = arr.find((id) => id.id === item.applicationId);
    }
    let obj = context(sectionOverallPosition[9]);
    let application;
    if (found != null) {
      application = found.application;
    }
    const appLauncherIconSource = obj.getAppLauncherIconSource(application);
    if (null == found) {
      return null;
    } else {
      let tmp9 = null != appLauncherIconSource;
      if (tmp9) {
        obj = { iconSource: null, iconSize: 36 };
        obj[0] = appLauncherIconSource;
        tmp9 = promotedApplicationIds(analyticsLocation(tmp3[17]), obj);
      }
      obj = { command: null, onPressCommand: null, onExecuteCommand: null, isFirstRow: null, isLastRow: null, context: null, section: null, location: null, sectionName: null, icon: null };
      obj[0] = item;
      obj[1] = function onPressCommand() {
        return closure_1_17(item, found, closure_1_9);
      };
      obj[2] = callback4;
      obj[3] = 0 === index;
      obj[4] = index === tmp6;
      obj[5] = item;
      obj[6] = found;
      obj[7] = tmp2(tmp3[10]).ApplicationCommandTriggerLocations.APP_LAUNCHER_FRECENTS_VIEW_ALL;
      obj[8] = sectionName;
      obj[9] = tmp9;
      return promotedApplicationIds(tmp2(tmp3[18]).CommandRow, obj);
    }
    arr = sectionDescriptors;
  }, items6);
  obj1 = context(sectionOverallPosition[19]);
  const bottomSheetFlashListBottomViewabilityInset = obj1.useBottomSheetFlashListBottomViewabilityInset();
  ({ flashListRef, bottomVisibilityInsetRef } = bottomSheetFlashListBottomViewabilityInset);
  trackAppLauncherItemImpressionOnFirstView = context(sectionOverallPosition[20]).useTrackAppLauncherItemImpressionOnFirstView().trackAppLauncherItemImpressionOnFirstView;
  const obj3 = context(sectionOverallPosition[20]);
  const appLauncherFlashListProps = context(sectionOverallPosition[21]).useAppLauncherFlashListProps();
  const items7 = [sum, tmp.list];
  const memo1 = applications.useMemo(() => {
    const obj = {};
    const merged = Object.assign(closure_10.list);
    obj.paddingBottom = c11;
    return obj;
  }, items7);
  const items8 = [sectionName, sectionOverallPosition, trackAppLauncherItemImpressionOnFirstView];
  const items9 = [sectionName, sectionOverallPosition, trackAppLauncherItemImpressionOnFirstView];
  const memo2 = applications.useMemo(() => {
    const items = [
      {
        viewabilityConfig: title,
        onViewableItemsChanged(viewableItems) {
          viewableItems = viewableItems.viewableItems;
          let item = viewableItems.forEach((item) => {
            item = item.item;
            callback({ itemKey: "applicationId:" + item.id, sectionName: closure_9, sectionPosition: item.index, sectionOverallPosition: closure_2, applicationId: item.id });
          });
        }
      }
    ];
    return items;
  }, items8);
  const memo3 = applications.useMemo(() => {
    const items = [
      {
        viewabilityConfig: title,
        onViewableItemsChanged(viewableItems) {
          viewableItems = viewableItems.viewableItems;
          let item = viewableItems.forEach((item) => {
            item = item.item;
            callback({ itemKey: "commandId:" + item.id, sectionName: closure_9, sectionPosition: item.index, sectionOverallPosition: closure_2, applicationId: item.applicationId, commandId: item.id });
          });
        }
      }
    ];
    return items;
  }, items9);
  if (params.sectionItemType === context(sectionOverallPosition[22]).SectionItemType.APPS) {
    obj = { preserveScrollMomentum: true, contentContainerStyle: null, scrollIndicatorInsets: null, keyExtractor: null, data: null, renderItem: null, accessibilityRole: "radiogroup", ref: null, bottomViewabilityInsetRef: null, viewabilityConfigCallbackPairs: null, animatedOnScroll: null, simultaneousHandlers: null, animatedProps: null };
    obj[1] = memo1;
    obj[2] = sectionName;
    obj[3] = function keyExtractor(id) {
      return id.id;
    };
    obj[4] = applications;
    obj[5] = callback3;
    let tmp2Result = tmp2(tmp3[21]);
    if (entrypoint === tmp5(tmp3[23]).AppLauncherEntrypoint.VOICE) {
      flashListRef = appLauncherFlashListProps.scrollerRef;
    }
    obj[7] = flashListRef;
    obj[8] = bottomVisibilityInsetRef;
    obj[9] = memo2;
    ({ onScroll: obj5[10], gestureRef: obj5[11], animatedProps: obj5[12] } = appLauncherFlashListProps);
    let tmp23Result = promotedApplicationIds(tmp2Result, obj);
    const tmp20 = promotedApplicationIds;
  } else {
    obj = { preserveScrollMomentum: true, contentContainerStyle: null, scrollIndicatorInsets: null, keyExtractor: null, data: null, renderItem: null, accessibilityRole: "radiogroup", ref: null, bottomViewabilityInsetRef: null, viewabilityConfigCallbackPairs: null, animatedOnScroll: null, simultaneousHandlers: null, animatedProps: null };
    obj[1] = memo1;
    obj[2] = sectionName;
    obj[3] = function keyExtractor(id) {
      return id.id;
    };
    obj[4] = commands;
    obj[5] = callback5;
    tmp2Result = tmp2(tmp3[21]);
    let scrollerRef = flashListRef;
    if (entrypoint === tmp5(tmp3[23]).AppLauncherEntrypoint.VOICE) {
      scrollerRef = appLauncherFlashListProps.scrollerRef;
    }
    obj[7] = scrollerRef;
    obj[8] = bottomVisibilityInsetRef;
    obj[9] = memo3;
    ({ onScroll: obj7[10], gestureRef: obj7[11], animatedProps: obj7[12] } = appLauncherFlashListProps);
    tmp23Result = promotedApplicationIds(tmp2Result, obj);
    const tmp23 = promotedApplicationIds;
  }
  obj1 = { style: tmp.container, children: items10 };
  items10 = [memo, tmp23Result];
  return navigation(commands, obj1);
};