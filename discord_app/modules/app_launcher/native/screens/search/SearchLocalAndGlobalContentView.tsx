// === Module 11593: getApplicationIdFromApplicationItem ===

// Module 11593 (getApplicationIdFromApplicationItem)
import ThemesDefault from "Themes" /* 712 */;
import TableRowInner from "TableRowInner" /* 5551 */;
import usePlaceholderWidth from "usePlaceholderWidth" /* 11543 */;
import closure_3 from "_slicedToArray" /* 32 */;
import importAllResult from "noop" /* 19 */;
import { View } from "get ActivityIndicator" /* 17 */;
import { getSection } from "getIndexKey" /* 8078 */;
import { FetchState } from "getSearchResults" /* 11557 */;
import APP_LAUNCHER_BUILT_IN_SECTION_ICON from "APP_LAUNCHER_BUILT_IN_SECTION_ICON" /* 1499 */;
import jsxProd from "jsxProd" /* 21 */;
import createCacheKey from "createCacheKey" /* 4445 */;

require = arg1;
function getApplicationIdFromApplicationItem(type) {
  let id;
  if (type.type !== obj.PLACERHOLDER) {
    if (null != type.application) {
      id = type.application.id;
    }
  }
  return id;
}
function getImpressionPropsFromApplicationItem(type) {
  let applicationId;
  if (type.type !== obj.PLACERHOLDER) {
    if (null != type.application) {
      applicationId = type.application.id;
    }
  }
  return { applicationId };
}
function CommandRow(arg0) {
  ({ command, application } = arg0);
  let hasOptions;
  let onPressSend;
  ({ context, onPress, isFirstRow, isLastRow, beforeExecuteCommand, onExecuteCommand } = arg0);
  obj = hasOptions(11540);
  const appLauncherIconSource = obj.getAppLauncherIconSource(application);
  let tmp4 = null != appLauncherIconSource;
  if (tmp4) {
    obj = { iconSource: null };
    obj[0] = appLauncherIconSource;
    tmp4 = callback2(onPressSend(11545), obj);
  }
  let tmpResult = tmp(11594);
  obj = { command, context, beforeExecuteCommand, onExecuteCommand, sectionName: tmp(8367).AppLauncherSectionName.SEARCH };
  const commandRowSend = tmpResult.useCommandRowSend(obj);
  hasOptions = commandRowSend.hasOptions;
  onPressSend = commandRowSend.onPressSend;
  let items = [hasOptions];
  const items1 = [onPressSend];
  const memo = importAllResult.useMemo(() => {
    let tmp;
    if (!hasOptions) {
      obj = { name: "send", label: null };
      const intl = hasOptions(closure_1_2[13]).intl;
      obj[1] = intl.string(hasOptions(closure_1_2[13]).t.TXNS7S);
      const items = [obj];
      tmp = items;
    }
    return tmp;
  }, items);
  const callback = importAllResult.useCallback((nativeEvent) => {
    if ("send" === nativeEvent.nativeEvent.actionName) {
      onPressSend();
    }
  }, items1);
  obj1 = { icon: tmp4, label: command.displayName, subLabel: null, subLabelLineClamp: 1, start: null, end: null, onPress: null, accessibilityActions: null, onAccessibilityAction: null, trailing: null };
  tmpResult = tmp(8077);
  obj1[2] = tmpResult.getSectionName(application);
  obj1[4] = isFirstRow;
  obj1[5] = isLastRow;
  obj1[6] = onPress;
  obj1[7] = memo;
  obj1[8] = callback;
  obj1[9] = callback2(onPressSend(11594), { hasOptions, sending: commandRowSend.sending, onPressSend });
  return callback2(hasOptions(5551).TableRow, obj1);
}
function PlaceholderCommandRow(isFirstRow) {
  let flag = isFirstRow.isFirstRow;
  if (flag === undefined) {
    flag = false;
  }
  let flag2 = isFirstRow.isLastRow;
  if (flag2 === undefined) {
    flag2 = false;
  }
  const tmp = callback3();
  obj = usePlaceholderWidth;
  const placeholderWidth = obj.usePlaceholderWidth(10, 50);
  obj1 = usePlaceholderWidth;
  const placeholderWidth1 = obj1.usePlaceholderWidth(30, 90);
  obj = { icon: callback2(View, obj), label: null, subLabel: null, subLabelLineClamp: 1, start: null, end: null, onPress: null };
  obj = { style: tmp.loadingCommandAppIcon };
  obj1 = { style: null };
  const items = [tmp.loadingTextPlaceholder, { width: "" + placeholderWidth + "%" }];
  obj1[0] = items;
  obj[1] = callback2(View, obj1);
  const obj3 = { style: null };
  const items1 = [tmp.loadingTextPlaceholderSmall, ];
  const obj2 = { width: "" + placeholderWidth + "%" };
  items1[1] = { width: "" + placeholderWidth1 + "%" };
  obj3[0] = items1;
  obj[2] = callback2(View, obj3);
  obj[4] = flag;
  obj[5] = flag2;
  obj[6] = function onPress() {

  };
  return callback2(TableRowInner.TableRow, obj);
}
function keyExtractor(type) {
  if (type.type === obj.PLACERHOLDER) {
    let id = arg1.toString();
  } else {
    id = type.application.id;
  }
  return id;
}
function CommandsExpandableList(expandedOverride) {
  const commandData = expandedOverride.commandData;
  const context = expandedOverride.context;
  const beforeExecuteCommand = expandedOverride.beforeExecuteCommand;
  const onPressCommand = expandedOverride.onPressCommand;
  const onExecuteCommand = expandedOverride.onExecuteCommand;
  let items = [beforeExecuteCommand, context, commandData, onExecuteCommand, onPressCommand];
  items = onExecuteCommand.useMemo(() => commandData.map((arg0, arg1) => {
    closure_0 = arg1;
    if (arg0 === closure_1_16) {
      return (isLastRow) => closure_2_10(closure_2_21, { isFirstRow: 0 === closure_0, isLastRow: isLastRow.isLastRow });
    } else {
      ({ command: closure_1, application: closure_2 } = arg0);
      return (isLastRow) => closure_2_10(closure_2_20, {
        context: closure_1_1,
        command: closure_1,
        application: closure_2,
        onPress() {
          return closure_1_3(closure_1, closure_0);
        },
        isFirstRow: 0 === closure_0,
        isLastRow: isLastRow.isLastRow,
        beforeExecuteCommand() {
          return closure_1_2({ command: closure_1, searchResultsPosition: closure_0 });
        },
        onExecuteCommand: closure_1_4
      });
    }
  }), items);
  return callback2(context(beforeExecuteCommand[30]), { items, expandedOverride: expandedOverride.expanded, showsExpandCTAOverride: false });
}
let c4 = importAllResult;
const DEFAULT_CONTENT_PADDING = APP_LAUNCHER_BUILT_IN_SECTION_ICON.DEFAULT_CONTENT_PADDING;
const useAppLauncherNavigation = APP_LAUNCHER_BUILT_IN_SECTION_ICON.useAppLauncherNavigation;
({ jsx: c10, jsxs: unpackModuleId, Fragment: closure_12 } = jsxProd);
let obj = { PLACERHOLDER: 0, [0]: "PLACERHOLDER", LOCAL_APPLICATION: 1, [1]: "LOCAL_APPLICATION", GLOBAL_APPLICATION: 2, [2]: "GLOBAL_APPLICATION" };
const placeholder = "placeholder";
let array = new Array(6);
let closure_17 = array.fill("placeholder");
array = new Array(3);
obj = { type: obj.PLACERHOLDER };
let closure_18 = array.fill(obj);
let obj1 = { sectionHeader: { marginBottom: 8 }, list: { paddingHorizontal: DEFAULT_CONTENT_PADDING, backgroundColor: ThemesDefault.colors.MOBILE_KEYBOARD_PANEL_BACKGROUND }, loadingCommandAppIcon: null, loadingTextPlaceholder: null, loadingTextPlaceholderSmall: null, divider: null, commandsHeaderContainer: null, commandsCTA: null, commandsCTAUnderlayColor: null };
let obj2 = { paddingHorizontal: DEFAULT_CONTENT_PADDING, backgroundColor: ThemesDefault.colors.MOBILE_KEYBOARD_PANEL_BACKGROUND };
obj1[2] = { width: 32, height: 32, borderRadius: ThemesDefault.radii.sm, backgroundColor: ThemesDefault.colors.BACKGROUND_MOD_SUBTLE };
let obj3 = { width: 32, height: 32, borderRadius: ThemesDefault.radii.sm, backgroundColor: ThemesDefault.colors.BACKGROUND_MOD_SUBTLE };
obj1[3] = { backgroundColor: ThemesDefault.colors.BACKGROUND_MOD_SUBTLE, height: 16, marginBottom: 4, borderRadius: ThemesDefault.radii.lg, alignSelf: "flex-start" };
createCacheKey = { backgroundColor: ThemesDefault.colors.BACKGROUND_MOD_SUBTLE, height: 16, borderRadius: ThemesDefault.radii.lg, alignSelf: "flex-start" };
obj1[4] = createCacheKey;
let obj4 = { backgroundColor: ThemesDefault.colors.BACKGROUND_MOD_SUBTLE, height: 16, marginBottom: 4, borderRadius: ThemesDefault.radii.lg, alignSelf: "flex-start" };
obj1[5] = { marginTop: ThemesDefault.space.PX_16 };
obj1[6] = { justifyContent: "space-between", flexDirection: "row" };
let obj6 = { marginTop: ThemesDefault.space.PX_16 };
obj1[7] = { borderRadius: ThemesDefault.radii.sm, paddingHorizontal: ThemesDefault.space.PX_4, marginBottom: ThemesDefault.space.PX_4, justifyContent: "center" };
let obj7 = { borderRadius: ThemesDefault.radii.sm, paddingHorizontal: ThemesDefault.space.PX_4, marginBottom: ThemesDefault.space.PX_4, justifyContent: "center" };
obj1[8] = { color: ThemesDefault.colors.BACKGROUND_SURFACE_HIGH };
let closure_19 = createCacheKey.createStyles(obj1);
let obj8 = { color: ThemesDefault.colors.BACKGROUND_SURFACE_HIGH };
const forwardRefResult = importAllResult.forwardRef((context, ref) => {
  context = context.context;
  let _require = context;
  const onScroll = context.onScroll;
  const entrypoint = context.entrypoint;
  let callback;
  importAllResult = undefined;
  closure_5 = undefined;
  let first;
  closure_7 = undefined;
  let loading;
  let commandResults;
  let applicationResults;
  let fetchState;
  let applicationResults2;
  let fetchNextPage;
  let callback3;
  let memo1;
  c16 = undefined;
  let tmp = callback3();
  callback = tmp;
  const tmp4 = onScroll(entrypoint[18])();
  importAllResult = tmp4;
  const tmp5 = commandResults();
  closure_5 = tmp5;
  obj = importAllResult;
  const tmp7 = callback(importAllResult.useState(""), 2);
  first = tmp7[0];
  closure_7 = tmp7[1];
  const imperativeHandle = importAllResult.useImperativeHandle(ref, () => ({ setQuery: closure_7 }));
  obj1 = _require(entrypoint[19]);
  let id;
  if ("channel" === context.type) {
    id = context.channel.id;
  }
  const isActivitiesInTextEnabled = obj1.useIsActivitiesInTextEnabled(id);
  let tmp10Result = tmp10(tmp3[20]);
  obj = { context, query: first, commandLimit: 20, applicationLimit: 10, searchesActivities: entrypoint === _require(entrypoint[12]).AppLauncherEntrypoint.VOICE || isActivitiesInTextEnabled, searchesCommands: entrypoint === _require(entrypoint[12]).AppLauncherEntrypoint.TEXT, searchesBots: entrypoint === _require(entrypoint[12]).AppLauncherEntrypoint.TEXT };
  const localSearchResults = tmp10Result.useLocalSearchResults(obj);
  loading = localSearchResults.loading;
  commandResults = localSearchResults.commandResults;
  applicationResults = localSearchResults.applicationResults;
  tmp10Result = tmp10(tmp3[20]);
  const globalSearchResults = tmp10Result.useGlobalSearchResults({ query: first, context, fetches: true, entrypoint });
  fetchState = globalSearchResults.fetchState;
  applicationResults2 = globalSearchResults.applicationResults;
  fetchNextPage = globalSearchResults.fetchNextPage;
  _require = undefined;
  const tmp13 = entrypoint === _require(entrypoint[12]).AppLauncherEntrypoint.VOICE || isActivitiesInTextEnabled;
  const tmp6 = callback;
  [tmp17, c0] = callback(obj.useState(false), 2);
  let items = [first];
  const effect = obj.useEffect(() => {
    _undefined(false);
  }, items);
  let items1 = [context, entrypoint, tmp5, first];
  callback = obj.useCallback(() => {
    _undefined((arg0) => !arg0);
  }, []);
  let items2 = [context, first];
  const callback1 = obj.useCallback((applicationId, searchResultsPosition) => {
    const descriptor = first(_undefined, applicationId.applicationId).descriptor;
    obj = _undefined(entrypoint[9]);
    obj = { location: _undefined(entrypoint[21]).ApplicationCommandTriggerLocations.APP_LAUNCHER_HOME_SEARCH, context: _undefined, command: applicationId, section: descriptor, sectionDescriptors: items, query: first, navigation: closure_5, sectionName: _undefined(entrypoint[12]).AppLauncherSectionName.SEARCH, searchResultsPosition, entrypoint };
    items = [descriptor];
    const result = obj.handleApplicationCommandSelected(obj);
  }, items1);
  const items3 = [tmp5, context, first, entrypoint];
  const callback2 = obj.useCallback((command) => {
    command = command.command;
    obj = _undefined(entrypoint[22]);
    obj = { command, location: _undefined(entrypoint[21]).ApplicationCommandTriggerLocations.APP_LAUNCHER_HOME_SEARCH, triggerSection: _undefined(entrypoint[22]).getCommandTriggerSection(first(_undefined, command.applicationId).descriptor), queryLength: first.length, sectionName: _undefined(entrypoint[12]).AppLauncherSectionName.SEARCH, query: first, searchResultsPosition: command.searchResultsPosition };
    obj.trackCommandSelected(obj);
  }, items2);
  callback3 = obj.useCallback((arg0) => {
    ({ section, installOnDemand, searchResultsPosition } = arg0);
    obj = _undefined(entrypoint[9]);
    obj = { location: _undefined(entrypoint[21]).ApplicationCommandTriggerLocations.APP_LAUNCHER_HOME_SEARCH, application: section, navigation: closure_5, context: _undefined, sectionName: _undefined(entrypoint[12]).AppLauncherSectionName.SEARCH, installOnDemand, query: first, searchResultsPosition, entrypoint };
    const result = obj.handleApplicationSelected(obj);
  }, items3);
  const items4 = [loading, commandResults];
  const memo = obj.useMemo(() => loading ? closure_1_17 : commandResults, items4);
  const tmp6Result = callback(obj.useState(false), 2);
  const items5 = [applicationResults, applicationResults2, loading, fetchState];
  memo1 = obj.useMemo(() => {
    const mapped = applicationResults.map((application) => ({ type: constants.LOCAL_APPLICATION, application }));
    const set = new Set(applicationResults.map((id) => id.id));
    let items = applicationResults2;
    if (applicationResults2 == null) {
      items = [];
    }
    const found = items.filter((type) => {
      let tmp = type.type !== set(closure_1_2[24]).ApplicationDirectorySearchResultType.CONNECTION;
      if (tmp) {
        tmp = !set.has(type.data.id);
      }
      return tmp;
    });
    const mapped1 = found.map((application) => ({ type: constants.GLOBAL_APPLICATION, application: application.data }));
    if (loading) {
      let items1 = closure_1_18;
    } else {
      if (null != fetchState) {
        if (tmp4 !== constants.FETCHING) {
          items1 = [];
          HermesBuiltin.arraySpread(mapped1, HermesBuiltin.arraySpread(mapped, 0));
        }
      }
      const items2 = [];
      HermesBuiltin.arraySpread(closure_1_18, HermesBuiltin.arraySpread(mapped1, HermesBuiltin.arraySpread(mapped, 0)));
      items1 = items2;
    }
    return items1;
  }, items5);
  const items6 = [first, commandResults.length, memo1.length, loading, fetchState];
  const effect1 = obj.useEffect(() => {
    if (0 !== first.length) {
      if (!loading) {
        if (fetchState !== constants.FETCHING) {
          const sum = commandResults.length + memo1.length;
          if (sum > 0) {
            const intl = _undefined(entrypoint[13]).intl;
            obj = { count: null };
            obj[0] = sum;
            const AccessibilityAnnouncer = _undefined(entrypoint[25]).AccessibilityAnnouncer;
            AccessibilityAnnouncer.announce(intl.formatToPlainString(_undefined(entrypoint[13]).t.ZGVL3g, obj), "polite");
            const formatToPlainStringResult = intl.formatToPlainString(_undefined(entrypoint[13]).t.ZGVL3g, obj);
          }
        }
      }
    }
  }, items6);
  const items7 = [memo1.length, callback3, tmp4];
  let sum = onScroll(entrypoint[17])().bottom + loading;
  c16 = sum;
  const callback4 = obj.useCallback((arg0) => {
    ({ item, index } = arg0);
    let application;
    const type = item.type;
    if (fetchNextPage.PLACERHOLDER === type) {
      obj = { isFirstRow: null, isLastRow: null, style: null };
      obj[0] = 0 === index;
      obj[1] = index === memo1.length - 1;
      obj = { height: null };
      obj[0] = closure_4;
      obj[2] = obj;
      return applicationResults(onScroll(entrypoint[26]), obj);
    } else {
      if (tmp.LOCAL_APPLICATION !== type) {
        if (tmp.GLOBAL_APPLICATION !== type) {
          return null;
        }
      }
      application = item.application;
      obj = _undefined(entrypoint[9]);
      const appLauncherIconSource = obj.getAppLauncherIconSource(application);
      obj1 = { application: null, iconSource: null, onPress: null, isFirstRow: null, isLastRow: null };
      obj1[0] = application;
      obj1[1] = appLauncherIconSource;
      obj1[2] = function onPress() {
        return closure_1_14({ section: application, installOnDemand: true, searchResultsPosition: index });
      };
      obj1[3] = 0 === index;
      obj1[4] = index === memo1.length - 1;
      return applicationResults(_undefined(entrypoint[27]).BaseAppRow, obj1);
    }
  }, items7);
  const tmp10Result1 = _require(entrypoint[23]);
  const tmp23 = 0 === memo.length && 0 === memo1.length;
  const appLauncherFlashListProps = _require(entrypoint[28]).useAppLauncherFlashListProps();
  const items8 = [fetchNextPage, onScroll, tmp4];
  const items9 = [tmp.list, sum];
  const callback5 = obj.useCallback((nativeEvent) => {
    nativeEvent = nativeEvent.nativeEvent;
    if (nativeEvent.layoutMeasurement.height + nativeEvent.contentOffset.y >= nativeEvent.contentSize.height - 3 * closure_4) {
      fetchNextPage();
    }
    if (onScroll != null) {
      tmp3(nativeEvent);
    }
  }, items8);
  const items10 = [sum];
  const memo2 = obj.useMemo(() => {
    obj = {};
    const merged = Object.assign(list.list);
    obj.paddingBottom = c16;
    return obj;
  }, items9);
  const memo3 = obj.useMemo(() => ({ bottom: c16 }), items10);
  let tmp33Result = null;
  let tmp2Result = tmp2(tmp3[28]);
  if (0 !== memo.length) {
    obj = { style: null, children: null };
    obj[0] = tmp.commandsHeaderContainer;
    obj1 = { accessibilityRole: "header", variant: "text-md/medium", color: "text-default", style: null, children: null };
    obj1[3] = tmp.sectionHeader;
    const intl4 = tmp10(tmp3[13]).intl;
    obj1[4] = intl4.string(tmp10(tmp3[13]).t["0hKkS+"]);
    const items11 = [tmp31(tmp10(tmp3[29]).Text, obj1), ];
    if (memo.length <= tmp10(tmp3[30]).COLLAPSED_LIST_ITEM_MAX) {
      const obj2 = { children: null };
      items11[1] = null;
      obj[1] = items11;
      const items12 = [tmp33(tmp45, obj), ];
      const obj3 = { commandData: null, context: null, beforeExecuteCommand: null, onPressCommand: null, onExecuteCommand: null, expanded: null };
      obj3[0] = memo;
      obj3[1] = context;
      obj3[2] = callback2;
      obj3[3] = callback1;
      obj3[4] = context.onSend;
      obj3[5] = tmp17;
      items12[1] = tmp31(CommandsExpandableList, obj3);
      obj2[0] = items12;
      tmp33Result = tmp33(tmp34, obj2);
    } else {
      const obj4 = { style: null, underlayColor: null, accessibilityLabel: null, onPress: null, children: null };
      obj4[0] = tmp.commandsCTA;
      obj4[1] = tmp.commandsCTAUnderlayColor.color;
      let intl = tmp10(tmp3[13]).intl;
      const string = intl.string;
      const t = tmp10(tmp3[13]).t;
      if (tmp17) {
        let stringResult = string(t.nPGLFQ);
      } else {
        stringResult = string(t.xal319);
      }
      obj4[2] = stringResult;
      obj4[3] = callback;
      const intl2 = tmp10(tmp3[13]).intl;
      const string2 = intl2.string;
      let t2 = tmp10(tmp3[13]).t;
      if (tmp17) {
        let string2Result = string2(t2.nPGLFQ);
      } else {
        string2Result = string2(t2.xal319);
      }
      const obj5 = { color: "text-brand", variant: "text-md/semibold", children: null };
      obj5[2] = string2Result;
      t2 = tmp31(tmp10(tmp3[29]).Text, obj5);
      obj4[4] = t2;
      let tmp31Result = tmp31(tmp10(tmp3[31]).AnimatedPressableHighlight, obj4);
    }
    tmp45 = closure_5;
  }
  const items13 = [tmp33Result, , , ];
  tmp31Result = null;
  if (memo.length > 0) {
    tmp31Result = null;
    if (memo1.length > 0) {
      const obj6 = { style: null };
      obj6[0] = tmp.divider;
      tmp31Result = tmp31(closure_5, obj6);
    }
  }
  items13[1] = tmp31Result;
  let tmp31Result1 = null;
  if (0 !== memo1.length) {
    const obj7 = { accessibilityRole: "header", variant: "text-md/medium", color: "text-default", style: null, children: null };
    obj7[3] = tmp.sectionHeader;
    const intl3 = tmp10(tmp3[13]).intl;
    obj7[4] = intl3.string(tmp10(tmp3[13]).t.PHjkRE);
    tmp31Result1 = tmp31(tmp10(tmp3[29]).Text, obj7);
  }
  items13[2] = tmp31Result1;
  let tmp31Result2 = null;
  if (tmp23) {
    const obj8 = { query: null, showsGenericMessage: null };
    obj8[0] = first;
    tmp2Result = tmp2(tmp3[32]);
    obj8[1] = entrypoint === tmp10(tmp3[12]).AppLauncherEntrypoint.VOICE;
    tmp31Result2 = tmp31(tmp2Result, obj8);
  }
  const tmp10Result2 = _require(entrypoint[28]);
  items13[3] = tmp31Result2;
  return applicationResults(tmp2Result, { ListHeaderComponent: fetchState(applicationResults2, { children: items13 }), contentContainerStyle: memo2, scrollIndicatorInsets: memo3, renderItem: callback4, keyExtractor, data: memo1, keyboardDismissMode: "on-drag", keyboardShouldPersistTaps: "always", automaticallyAdjustsScrollIndicatorInsets: false, showsVerticalScrollIndicator: false, onViewableItemsChanged: tmp10Result1.useTrackSearchItems(callback3, memo1, first).handleViewableItemsChanged, preserveScrollMomentum: true, onScroll: callback5, animatedOnScroll: appLauncherFlashListProps.onScroll, ref: appLauncherFlashListProps.scrollerRef, simultaneousHandlers: appLauncherFlashListProps.gestureRef, animatedProps: appLauncherFlashListProps.animatedProps }, first);
});
let result = require("set").fileFinishedImporting("modules/app_launcher/native/screens/search/SearchLocalAndGlobalContentView.tsx");

export const SearchLocalAndGlobalContentView = forwardRefResult;