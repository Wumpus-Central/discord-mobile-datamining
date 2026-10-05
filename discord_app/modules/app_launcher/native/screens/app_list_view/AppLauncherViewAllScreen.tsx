// === Module 11821: AppLauncherViewAllScreen ===

// Module 11821 (AppLauncherViewAllScreen)
import react_native from "react-native" /* 17 */;
import nativeDefault from "native" /* 587 */;
import intl2 from "intl" /* 1126 */;
import native from "native" /* 1188 */;
import Text_Text from "Text/Text" /* 4886 */;
import Pressables from "Pressables" /* 5909 */;
import ArrowLargeLeftIcon2 from "ArrowLargeLeftIcon" /* 6014 */;
import ApplicationCommandTypes from "ApplicationCommandTypes" /* 7034 */;
import AppLauncherContext from "AppLauncherContext" /* 10994 */;
import AppLauncherNativeUtils from "AppLauncherNativeUtils" /* 11665 */;
import AppLauncherBackButton from "AppLauncherBackButton" /* 11755 */;
import react from "react" /* 19 */;
import AppLauncherNativeConstants from "AppLauncherNativeConstants" /* 1489 */;
import Fragment from "Fragment" /* 21 */;
import createStyles_mod from "createStyles" /* 4890 */;
import ReactCompilerGating from "ReactCompilerGating" /* 558 */;
import size_mod from "module_2" /* 2 */;

let closure_12, navigation;

let metroImportAll;
let metroImportDefault;
let obj2;
let obj3;
let obj4;
let size;
const View = react_native.View;
const DEFAULT_CONTENT_PADDING = AppLauncherNativeConstants.DEFAULT_CONTENT_PADDING;
const FLASH_LIST_ITEM_IMPRESSION_VIEWABILITY_CONFIG = AppLauncherNativeConstants.FLASH_LIST_ITEM_IMPRESSION_VIEWABILITY_CONFIG;
({ jsx: metroImportDefault, jsxs: metroImportAll } = Fragment);
let closure_9 = { bottom: 4 };
let createStyles = createStyles_mod;
let obj = { container: obj2, header: obj3, list: obj4, backButton: size };
obj2 = { height: "100%", backgroundColor: nativeDefault.colors.MOBILE_KEYBOARD_PANEL_BACKGROUND, flex: 1, flexDirection: "column", paddingBottom: 12 };
createStyles = createStyles.createStyles;
obj3 = { flexDirection: "row", alignItems: "center", justifyContent: "space-between", height: 24, backgroundColor: nativeDefault.colors.MOBILE_KEYBOARD_PANEL_BACKGROUND, paddingHorizontal: DEFAULT_CONTENT_PADDING, marginBottom: 12 };
obj4 = { paddingHorizontal: DEFAULT_CONTENT_PADDING, paddingBottom: nativeDefault.space.PX_4 };
size = { width: AppLauncherBackButton.BACK_BUTTON_SIZE, height: AppLauncherBackButton.BACK_BUTTON_SIZE, alignItems: "center", justifyContent: "center" };
let closure_10 = createStyles(obj);
const tmp5 = ReactCompilerGating.isReactCompilerEnabled() ? ((navigation) => {
  let analyticsLocation;
  let keyboardCloseReasonRef;
  let onExecuteCommand;
  let promotedApplicationIds;
  let sectionItemType;
  let sectionName;
  let sectionOverallPosition;
  let title;
  let tmp = navigation;
  let obj = navigation(analyticsLocation[8]);
  const cResult = obj.c(73);
  navigation = navigation.navigation;
  const params = navigation.route.params;
  const context = params.context;
  analyticsLocation = params.analyticsLocation;
  ({ sectionItemType, sectionName, sectionOverallPosition } = params);
  const applications = params.applications;
  const commands = params.commands;
  const sectionDescriptors = params.sectionDescriptors;
  ({ title, promotedApplicationIds } = params);
  if (sectionName == null) {
    sectionName = "frecency_view_all";
  }
  const tmp4 = keyboardCloseReasonRef();
  const sum = context(tmp2[9])().bottom + commands;
  const tmpResult = tmp(analyticsLocation[10]);
  const requiredAppLauncherContext = tmpResult.useRequiredAppLauncherContext();
  const chatInputRef = requiredAppLauncherContext.chatInputRef;
  keyboardCloseReasonRef = requiredAppLauncherContext.keyboardCloseReasonRef;
  const entrypoint = requiredAppLauncherContext.entrypoint;
  if (cResult[0] === chatInputRef) {
    if (cResult[1] === keyboardCloseReasonRef) {
      if (cResult[2] === navigation) {
        const tmp7 = cResult[3];
      }
      if (cResult[4] === analyticsLocation) {
        if (cResult[5] === context) {
          if (cResult[6] === entrypoint) {
            let tmp8;
            if (cResult[7] === navigation) {
              tmp8 = cResult[8];
            }
            closure_12 = tmp8;
            class F {
              constructor(arg0) {
                let application;
                ({ application, sectionName } = arg0);
                let APP_LAUNCHER_APPLICATION_VIEW_FRECENCT = analyticsLocation;
                const handleApplicationSelected = AppLauncherNativeUtils.handleApplicationSelected;
                AppLauncherNativeUtils;
                if (analyticsLocation == null) {
                  APP_LAUNCHER_APPLICATION_VIEW_FRECENCT = ApplicationCommandTypes.ApplicationCommandTriggerLocations.APP_LAUNCHER_APPLICATION_VIEW_FRECENCT;
                }
                const obj = { location: APP_LAUNCHER_APPLICATION_VIEW_FRECENCT, application, navigation, context, sectionName, entrypoint };
                const result = handleApplicationSelected(obj);
              }
            }
            class D {
              constructor(command, section, sectionName) {
                let APP_LAUNCHER_APPLICATION_VIEW_FRECENCT = analyticsLocation;
                const handleApplicationCommandSelected = AppLauncherNativeUtils.handleApplicationCommandSelected;
                AppLauncherNativeUtils;
                if (analyticsLocation == null) {
                  APP_LAUNCHER_APPLICATION_VIEW_FRECENCT = ApplicationCommandTypes.ApplicationCommandTriggerLocations.APP_LAUNCHER_APPLICATION_VIEW_FRECENCT;
                }
                const obj = { location: APP_LAUNCHER_APPLICATION_VIEW_FRECENCT, context, command, section, sectionDescriptors, query: "", navigation, sectionName, entrypoint };
                const result = handleApplicationCommandSelected(obj);
              }
            }
            cResult[9] = analyticsLocation;
            cResult[10] = context;
            cResult[11] = entrypoint;
            cResult[12] = navigation;
            cResult[13] = sectionDescriptors;
            cResult[14] = D;
          }
        }
      }
      class F {
        constructor(arg0) {
          let application;
          ({ application, sectionName } = arg0);
          let APP_LAUNCHER_APPLICATION_VIEW_FRECENCT = analyticsLocation;
          const handleApplicationSelected = AppLauncherNativeUtils.handleApplicationSelected;
          AppLauncherNativeUtils;
          if (analyticsLocation == null) {
            APP_LAUNCHER_APPLICATION_VIEW_FRECENCT = ApplicationCommandTypes.ApplicationCommandTriggerLocations.APP_LAUNCHER_APPLICATION_VIEW_FRECENCT;
          }
          const obj = { location: APP_LAUNCHER_APPLICATION_VIEW_FRECENCT, application, navigation, context, sectionName, entrypoint };
          const result = handleApplicationSelected(obj);
        }
      }
      cResult[4] = analyticsLocation;
      cResult[5] = context;
      cResult[6] = entrypoint;
      cResult[7] = navigation;
      cResult[8] = F;
      tmp8 = F;
    }
  }
  const fn = function n() {
    if (navigation.canGoBack()) {
      navigation.pop();
    } else {
      keyboardCloseReasonRef.current = AppLauncherContext.AppLauncherKeyboardCloseReason.BACK;
      const current = chatInputRef.current;
      if (current != null) {
        current.closeCustomKeyboard();
      }
    }
  };
  cResult[0] = chatInputRef;
  cResult[1] = keyboardCloseReasonRef;
  cResult[2] = navigation;
  cResult[3] = fn;
}) : ((route) => {
  let bottomVisibilityInsetRef;
  let flashListRef;
  let items10;
  let paddingBottom;
  let scrollerRef;
  let sectionName;
  let sectionOverallPosition;
  let tmp23Result;
  const params = route.route.params;
  const context = params.context;
  const analyticsLocation = params.analyticsLocation;
  ({ sectionName, sectionOverallPosition } = params);
  const applications = params.applications;
  const commands = params.commands;
  const sectionDescriptors = params.sectionDescriptors;
  const title = params.title;
  const promotedApplicationIds = params.promotedApplicationIds;
  navigation = route.navigation;
  sectionName = undefined;
  closure_10 = undefined;
  let c11;
  let chatInputRef;
  let keyboardCloseReasonRef;
  let entrypoint;
  let onPress;
  let callback1;
  let callback2;
  let callback4;
  let trackAppLauncherItemImpressionOnFirstView;
  const sectionItemType = params.sectionItemType;
  if (sectionName == null) {
    sectionName = "frecency_view_all";
  }
  let tmp = closure_10();
  closure_10 = tmp;
  let tmp3 = sectionOverallPosition;
  const sum = analyticsLocation(sectionOverallPosition[9])().bottom + sectionDescriptors;
  c11 = sum;
  let obj = context(sectionOverallPosition[10]);
  const requiredAppLauncherContext = obj.useRequiredAppLauncherContext();
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
    let application;
    ({ application, sectionName } = arg0);
    let APP_LAUNCHER_APPLICATION_VIEW_FRECENCT = analyticsLocation;
    const handleApplicationSelected = AppLauncherNativeUtils.handleApplicationSelected;
    AppLauncherNativeUtils;
    if (analyticsLocation == null) {
      APP_LAUNCHER_APPLICATION_VIEW_FRECENCT = ApplicationCommandTypes.ApplicationCommandTriggerLocations.APP_LAUNCHER_APPLICATION_VIEW_FRECENCT;
    }
    const obj = { location: APP_LAUNCHER_APPLICATION_VIEW_FRECENCT, application, navigation, context, sectionName, entrypoint };
    const result = handleApplicationSelected(obj);
  }, items1);
  const items2 = [analyticsLocation, context, entrypoint, navigation, sectionDescriptors];
  callback2 = applications.useCallback((command, section, sectionName) => {
    let APP_LAUNCHER_APPLICATION_VIEW_FRECENCT = analyticsLocation;
    const handleApplicationCommandSelected = AppLauncherNativeUtils.handleApplicationCommandSelected;
    AppLauncherNativeUtils;
    if (analyticsLocation == null) {
      APP_LAUNCHER_APPLICATION_VIEW_FRECENCT = ApplicationCommandTypes.ApplicationCommandTriggerLocations.APP_LAUNCHER_APPLICATION_VIEW_FRECENCT;
    }
    const obj = { location: APP_LAUNCHER_APPLICATION_VIEW_FRECENCT, context, command, section, sectionDescriptors, query: "", navigation, sectionName, entrypoint };
    const result = handleApplicationCommandSelected(obj);
  }, items2);
  const items3 = [onPress, , , ];
  ({ backButton: arr5[1], header: arr5[2] } = tmp);
  items3[3] = title;
  const items4 = [applications, promotedApplicationIds, callback1, sectionName];
  const memo = applications.useMemo(() => {
    let ArrowLargeLeftIcon;
    let intl;
    let items;
    let obj3;
    const obj = { style: closure_10.header, children: items };
    const obj2 = { style: closure_10.backButton, accessibilityLabel: intl.string(intl2.t["13/7kX"]), accessibilityRole: "button", onPress, children: metroImportDefault(ArrowLargeLeftIcon, obj3) };
    const PressableOpacity = Pressables.PressableOpacity;
    intl = intl2.intl;
    obj3 = { color: nativeDefault.colors.INTERACTIVE_TEXT_DEFAULT };
    ArrowLargeLeftIcon = ArrowLargeLeftIcon2.ArrowLargeLeftIcon;
    items = [metroImportDefault(PressableOpacity, obj2), , ];
    const obj4 = { accessibilityRole: "header", lineClamp: 1, variant: "heading-lg/bold", color: "mobile-text-heading-primary", children: title };
    items[1] = metroImportDefault(Text_Text.Text, obj4);
    const obj5 = { size: AppLauncherBackButton.BACK_BUTTON_SIZE };
    const Spacer = native.Spacer;
    items[2] = metroImportDefault(Spacer, obj5);
    return metroImportAll(View, obj);
  }, items3);
  const items5 = [chatInputRef, keyboardCloseReasonRef];
  const callback3 = applications.useCallback((item) => {
    let hasItem;
    item = item.item;
    const index = item.index;
    let obj = {
      application: item,
      onPress() {
        const obj = { application: item, sectionName };
        return callback1(obj);
      },
      isFirstRow: 0 === index,
      isLastRow: null != applications && index === applications.length - 1,
      showsPromoted: hasItem
    };
    hasItem = undefined;
    const tmp = null != applications && index === applications.length - 1;
    const tmp3 = analyticsLocation(sectionOverallPosition[18]);
    if (promotedApplicationIds != null) {
      hasItem = promotedApplicationIds.has(item.id);
    }
    return promotedApplicationIds(tmp3, obj, item.id);
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
    let tmp11;
    item = item.item;
    const index = item.index;
    let found;
    if (sectionDescriptors != null) {
      found = sectionDescriptors.find((id) => id.id === item.applicationId);
    }
    let application;
    const getAppLauncherIconSource = context(sectionOverallPosition[11]).getAppLauncherIconSource;
    context(sectionOverallPosition[11]);
    if (found != null) {
      application = found.application;
    }
    const appLauncherIconSource = getAppLauncherIconSource(application);
    if (null == found) {
      return null;
    } else {
      let tmp10 = null != appLauncherIconSource;
      if (tmp10) {
        const obj = { iconSource: appLauncherIconSource, iconSize: 36 };
        tmp10 = promotedApplicationIds(analyticsLocation(sectionOverallPosition[19]), obj);
      }
      const obj2 = {
        command: item,
        onPressCommand() {
            return callback2(item, found, sectionName);
          },
        onExecuteCommand: callback4,
        isFirstRow: 0 === index,
        isLastRow: tmp11,
        context: item,
        section: found,
        location: context(sectionOverallPosition[12]).ApplicationCommandTriggerLocations.APP_LAUNCHER_FRECENTS_VIEW_ALL,
        sectionName,
        icon: tmp10
      };
      tmp11 = index === tmp7;
      const CommandRow = context(sectionOverallPosition[20]).CommandRow;
      return promotedApplicationIds(CommandRow, obj2);
    }
  }, items6);
  let obj2 = context(sectionOverallPosition[21]);
  const bottomSheetFlashListBottomViewabilityInset = obj2.useBottomSheetFlashListBottomViewabilityInset();
  ({ flashListRef, bottomVisibilityInsetRef } = bottomSheetFlashListBottomViewabilityInset);
  let obj3 = context(sectionOverallPosition[22]);
  trackAppLauncherItemImpressionOnFirstView = obj3.useTrackAppLauncherItemImpressionOnFirstView().trackAppLauncherItemImpressionOnFirstView;
  let obj4 = context(sectionOverallPosition[23]);
  const appLauncherFlashListProps = obj4.useAppLauncherFlashListProps();
  const items7 = [sum, tmp.list];
  const memo1 = applications.useMemo(() => {
    const obj = { paddingBottom };
    const merged = Object.assign(closure_10.list);
    return obj;
  }, items7);
  const items8 = [sectionName, sectionOverallPosition, trackAppLauncherItemImpressionOnFirstView];
  const items9 = [sectionName, sectionOverallPosition, trackAppLauncherItemImpressionOnFirstView];
  const memo2 = applications.useMemo(() => {
    let obj = {
      viewabilityConfig: FLASH_LIST_ITEM_IMPRESSION_VIEWABILITY_CONFIG,
      onViewableItemsChanged(viewableItems) {
        viewableItems = viewableItems.viewableItems;
        let item = viewableItems.forEach((sectionPosition) => {
          const item = sectionPosition.item;
          const obj = { itemKey: "applicationId:" + item.id, sectionName, sectionPosition: sectionPosition.index, sectionOverallPosition, applicationId: item.id };
          closure_1_19(obj);
        });
      }
    };
    const items = [obj];
    return items;
  }, items8);
  const memo3 = applications.useMemo(() => {
    let obj = {
      viewabilityConfig: FLASH_LIST_ITEM_IMPRESSION_VIEWABILITY_CONFIG,
      onViewableItemsChanged(viewableItems) {
        viewableItems = viewableItems.viewableItems;
        let item = viewableItems.forEach((sectionPosition) => {
          const item = sectionPosition.item;
          const obj = { itemKey: "commandId:" + item.id, sectionName, sectionPosition: sectionPosition.index, sectionOverallPosition, applicationId: item.applicationId, commandId: item.id };
          closure_1_19(obj);
        });
      }
    };
    const items = [obj];
    return items;
  }, items9);
  if (sectionItemType === context(sectionOverallPosition[24]).SectionItemType.APPS) {
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
      ref: flashListRef,
      bottomViewabilityInsetRef: bottomVisibilityInsetRef,
      viewabilityConfigCallbackPairs: memo2,
      animatedOnScroll: null,
      simultaneousHandlers: null,
      animatedProps: null
    };
    const tmp20 = promotedApplicationIds;
    const tmp2Result = analyticsLocation(tmp3[23]);
    if (entrypoint === context(tmp3[25]).AppLauncherEntrypoint.VOICE) {
      flashListRef = appLauncherFlashListProps.scrollerRef;
    }
    ({ onScroll: obj5.animatedOnScroll, gestureRef: obj5.simultaneousHandlers, animatedProps: obj5.animatedProps } = appLauncherFlashListProps);
    tmp23Result = tmp20(tmp2Result, obj6);
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
      ref: scrollerRef,
      bottomViewabilityInsetRef: bottomVisibilityInsetRef,
      viewabilityConfigCallbackPairs: memo3,
      animatedOnScroll: null,
      simultaneousHandlers: null,
      animatedProps: null
    };
    scrollerRef = flashListRef;
    const tmp23 = promotedApplicationIds;
    const tmp2Result2 = analyticsLocation(tmp3[23]);
    if (entrypoint === context(tmp3[25]).AppLauncherEntrypoint.VOICE) {
      scrollerRef = appLauncherFlashListProps.scrollerRef;
    }
    ({ onScroll: obj7.animatedOnScroll, gestureRef: obj7.simultaneousHandlers, animatedProps: obj7.animatedProps } = appLauncherFlashListProps);
    tmp23Result = tmp23(tmp2Result2, obj10);
  }
  const obj11 = { style: tmp.container, children: items10 };
  items10 = [memo, tmp23Result];
  return navigation(commands, obj11);
});
size = size_mod;
let result = size.fileFinishedImporting("modules/app_launcher/native/screens/app_list_view/AppLauncherViewAllScreen.tsx");

export default tmp5;