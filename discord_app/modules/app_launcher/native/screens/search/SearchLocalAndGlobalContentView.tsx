// discord_app/modules/app_launcher/native/screens/search/SearchLocalAndGlobalContentView.tsx
import nativeDefault from "../../../../../../discord_common/js/packages/tokens/native.tsx";
import util from "../../../../../intl/index.native.tsx";
import AccessibilityAnnouncer2 from "../../../../../../discord_common/js/packages/design/components/AccessibilityAnnouncer/AccessibilityAnnouncer.android.tsx";
import TableRow from "../../../../../design/components/TableRow/native/TableRow.native.tsx";
import ApplicationCommandUtils from "../../../../application_commands/ApplicationCommandUtils.tsx";
import ApplicationCommandTypes from "../../../../application_commands/ApplicationCommandTypes.tsx";
import AppLauncherTypes from "../../../AppLauncherTypes.tsx";
import AppLauncherNativeUtils from "../../AppLauncherNativeUtils.tsx";
import usePlaceholderSize from "../../hooks/usePlaceholderSize.tsx";
import _slicedToArray from "../../../../../../_runtime/metro/00032__.js";
import noop from "../../../../../../_runtime/metro/00019__.js";

require = fn;
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
  let obj = hasOptions(12051);
  const appLauncherIconSource = obj.getAppLauncherIconSource(application);
  let tmp4 = null != appLauncherIconSource;
  if (tmp4) {
    obj = { iconSource: appLauncherIconSource };
    tmp4 = closure_10(onPressSend(12056), obj);
  }
  let tmpResult = tmp(12105);
  obj = {
    command,
    context,
    beforeExecuteCommand,
    onExecuteCommand,
    sectionName: tmp(9409).AppLauncherSectionName.SEARCH,
  };
  const commandRowSend = tmpResult.useCommandRowSend(obj);
  hasOptions = commandRowSend.hasOptions;
  onPressSend = commandRowSend.onPressSend;
  let items = [hasOptions];
  const items1 = [onPressSend];
  const memo = noop.useMemo(() => {
    let tmp;
    if (!hasOptions) {
      const obj = { name: "send", label: null };
      const intl = util.intl;
      obj.label = intl.string(util.t.TXNS7S);
      const items = [obj];
      tmp = items;
    }
    return tmp;
  }, items);
  const callback = noop.useCallback((nativeEvent) => {
    if ("send" === nativeEvent.nativeEvent.actionName) {
      onPressSend();
    }
  }, items1);
  const obj1 = {
    icon: tmp4,
    label: command.displayName,
    subLabel: null,
    subLabelLineClamp: 1,
    start: null,
    end: null,
    onPress: null,
    accessibilityActions: null,
    onAccessibilityAction: null,
    trailing: null,
  };
  tmpResult = tmp(9289);
  obj1.subLabel = tmpResult.getSectionName(application);
  obj1.start = isFirstRow;
  obj1.end = isLastRow;
  obj1.onPress = onPress;
  obj1.accessibilityActions = memo;
  obj1.onAccessibilityAction = callback;
  obj1.trailing = closure_10(onPressSend(12105), { hasOptions, sending: commandRowSend.sending, onPressSend });
  return closure_10(hasOptions(5605).TableRow, obj1);
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
  const tmp = closure_19();
  let obj = usePlaceholderSize;
  const placeholderWidth = obj.usePlaceholderWidth(10, 50);
  let obj1 = usePlaceholderSize;
  const placeholderWidth1 = obj1.usePlaceholderWidth(30, 90);
  obj = { icon: null, label: null, subLabel: null, subLabelLineClamp: 1, start: null, end: null, onPress: null };
  obj = { style: tmp.loadingCommandAppIcon };
  obj.icon = closure_1_10(View, obj);
  obj1 = { style: null };
  const items = [tmp.loadingTextPlaceholder, { width: "" + placeholderWidth + "%" }];
  obj1.style = items;
  obj.label = closure_1_10(View, obj1);
  const obj3 = { style: null };
  const items1 = [tmp.loadingTextPlaceholderSmall];
  const obj2 = { width: "" + placeholderWidth + "%" };
  items1[1] = { width: "" + placeholderWidth1 + "%" };
  obj3.style = items1;
  obj.subLabel = closure_1_10(View, obj3);
  obj.start = flag;
  obj.end = flag2;
  obj.onPress = function onPress() {};
  return closure_1_10(TableRow.TableRow, obj);
}
function keyExtractor(type, arg1) {
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
  items = onExecuteCommand.useMemo(
    () =>
      commandData.map((item, index) => {
        closure_0 = index;
        if (item === closure_1_16) {
          return (isLastRow) =>
            closure_3_10(PlaceholderCommandRow, { isFirstRow: 0 === closure_0, isLastRow: isLastRow.isLastRow });
        } else {
          ({ command: closure_1, application: closure_2 } = item);
          return (isLastRow) =>
            closure_3_10(CommandRow, {
              context,
              command,
              application,
              onPress() {
                return closure_2_3(command, searchResultsPosition);
              },
              isFirstRow: 0 === searchResultsPosition,
              isLastRow: isLastRow.isLastRow,
              beforeExecuteCommand() {
                return application({ command, searchResultsPosition });
              },
              onExecuteCommand,
            });
        }
      }),
    items,
  );
  return closure_10(context(beforeExecuteCommand[30]), {
    items,
    expandedOverride: expandedOverride.expanded,
    showsExpandCTAOverride: false,
  });
}
const View = fn(17).View;
const getSection = fn(9290).getSection;
const FetchState = fn(12068).FetchState;
const AppLauncherNativeConstants = fn(1482);
const DEFAULT_CONTENT_PADDING = AppLauncherNativeConstants.DEFAULT_CONTENT_PADDING;
const useAppLauncherNavigation = AppLauncherNativeConstants.useAppLauncherNavigation;
const jsxProd = fn(21);
({ jsx: c10, jsxs: closure_11, Fragment: closure_12 } = jsxProd);
let style = {
  PLACERHOLDER: 0,
  [0]: "PLACERHOLDER",
  LOCAL_APPLICATION: 1,
  [1]: "LOCAL_APPLICATION",
  GLOBAL_APPLICATION: 2,
  [2]: "GLOBAL_APPLICATION",
};
const placeholder = "placeholder";
let array = new Array(6);
let closure_17 = array.fill("placeholder");
array = new Array(3);
style = { type: style.PLACERHOLDER };
let closure_18 = array.fill(style);
fn(4560);
let obj1 = {
  sectionHeader: { marginBottom: 8 },
  list: {
    paddingHorizontal: DEFAULT_CONTENT_PADDING,
    backgroundColor: nativeDefault.colors.MOBILE_KEYBOARD_PANEL_BACKGROUND,
  },
  loadingCommandAppIcon: null,
  loadingTextPlaceholder: null,
  loadingTextPlaceholderSmall: null,
  divider: null,
  commandsHeaderContainer: null,
  commandsCTA: null,
  commandsCTAUnderlayColor: null,
};
let size = {
  width: 32,
  height: 32,
  borderRadius: nativeDefault.radii.sm,
  backgroundColor: nativeDefault.colors.BACKGROUND_MOD_SUBTLE,
};
obj1.loadingCommandAppIcon = size;
let obj2 = {
  paddingHorizontal: DEFAULT_CONTENT_PADDING,
  backgroundColor: nativeDefault.colors.MOBILE_KEYBOARD_PANEL_BACKGROUND,
};
obj1.loadingTextPlaceholder = {
  backgroundColor: nativeDefault.colors.BACKGROUND_MOD_SUBTLE,
  height: 16,
  marginBottom: 4,
  borderRadius: nativeDefault.radii.lg,
  alignSelf: "flex-start",
};
let obj3 = {
  backgroundColor: nativeDefault.colors.BACKGROUND_MOD_SUBTLE,
  height: 16,
  marginBottom: 4,
  borderRadius: nativeDefault.radii.lg,
  alignSelf: "flex-start",
};
obj1.loadingTextPlaceholderSmall = {
  backgroundColor: nativeDefault.colors.BACKGROUND_MOD_SUBTLE,
  height: 16,
  borderRadius: nativeDefault.radii.lg,
  alignSelf: "flex-start",
};
const createStyles = { marginTop: nativeDefault.space.PX_16 };
obj1.divider = createStyles;
obj1.commandsHeaderContainer = { justifyContent: "space-between", flexDirection: "row" };
let obj4 = {
  backgroundColor: nativeDefault.colors.BACKGROUND_MOD_SUBTLE,
  height: 16,
  borderRadius: nativeDefault.radii.lg,
  alignSelf: "flex-start",
};
obj1.commandsCTA = {
  borderRadius: nativeDefault.radii.sm,
  paddingHorizontal: nativeDefault.space.PX_4,
  marginBottom: nativeDefault.space.PX_4,
  justifyContent: "center",
};
let obj6 = {
  borderRadius: nativeDefault.radii.sm,
  paddingHorizontal: nativeDefault.space.PX_4,
  marginBottom: nativeDefault.space.PX_4,
  justifyContent: "center",
};
obj1.commandsCTAUnderlayColor = { color: nativeDefault.colors.BACKGROUND_SURFACE_HIGH };
let closure_19 = createStyles.createStyles(obj1);
let obj7 = { color: nativeDefault.colors.BACKGROUND_SURFACE_HIGH };
size = fn(2);
let result = size.fileFinishedImporting(
  "modules/app_launcher/native/screens/search/SearchLocalAndGlobalContentView.tsx",
);

export const SearchLocalAndGlobalContentView = noop.forwardRef((context, ref) => {
  context = context.context;
  _require = context;
  const onScroll = context.onScroll;
  const entrypoint = context.entrypoint;
  let loading;
  let commandResults;
  let applicationResults;
  let fetchState;
  let applicationResults2;
  let fetchNextPage;
  let callback3;
  let memo1;
  c16 = undefined;
  let tmp = closure_19();
  _slicedToArray = tmp;
  const tmp4 = onScroll(entrypoint[18])();
  noop = tmp4;
  const tmp5 = commandResults();
  const navigation = tmp5;
  let obj = noop;
  const tmp7 = _slicedToArray(noop.useState(""), 2);
  const query = tmp7[0];
  const setQuery = tmp7[1];
  const imperativeHandle = noop.useImperativeHandle(ref, () => ({ setQuery }));
  let obj1 = require("ActivitiesInTextUtils");
  let id;
  if ("channel" === context.type) {
    id = context.channel.id;
  }
  const isActivitiesInTextEnabled = obj1.useIsActivitiesInTextEnabled(id);
  let tmp10Result = tmp10(tmp3[20]);
  obj = {
    context,
    query,
    commandLimit: 20,
    applicationLimit: 10,
    searchesActivities:
      entrypoint === require("AppLauncherTypes").AppLauncherEntrypoint.VOICE || isActivitiesInTextEnabled,
    searchesCommands: entrypoint === require("AppLauncherTypes").AppLauncherEntrypoint.TEXT,
    searchesBots: entrypoint === require("AppLauncherTypes").AppLauncherEntrypoint.TEXT,
  };
  const localSearchResults = tmp10Result.useLocalSearchResults(obj);
  loading = localSearchResults.loading;
  commandResults = localSearchResults.commandResults;
  applicationResults = localSearchResults.applicationResults;
  tmp10Result = tmp10(tmp3[20]);
  const globalSearchResults = tmp10Result.useGlobalSearchResults({ query, context, fetches: true, entrypoint });
  fetchState = globalSearchResults.fetchState;
  applicationResults2 = globalSearchResults.applicationResults;
  fetchNextPage = globalSearchResults.fetchNextPage;
  _require = undefined;
  const tmp13 = entrypoint === require("AppLauncherTypes").AppLauncherEntrypoint.VOICE || isActivitiesInTextEnabled;
  [tmp17, c0] = _slicedToArray(obj.useState(false), 2);
  let items = [query];
  const effect = obj.useEffect(() => {
    context(false);
  }, items);
  let items1 = [context, entrypoint, tmp5, query];
  const callback = obj.useCallback(() => {
    context((arg0) => !arg0);
  }, []);
  let items2 = [context, query];
  const callback1 = obj.useCallback((applicationId, searchResultsPosition) => {
    const descriptor = getSection(context, applicationId.applicationId).descriptor;
    const obj = {
      location: ApplicationCommandTypes.ApplicationCommandTriggerLocations.APP_LAUNCHER_HOME_SEARCH,
      context,
      command: applicationId,
      section: descriptor,
      sectionDescriptors: null,
      query,
      navigation,
      sectionName: AppLauncherTypes.AppLauncherSectionName.SEARCH,
      searchResultsPosition,
      entrypoint,
    };
    const items = [descriptor];
    obj.sectionDescriptors = items;
    const result = obj.handleApplicationCommandSelected(obj);
  }, items1);
  const items3 = [tmp5, context, query, entrypoint];
  const callback2 = obj.useCallback((command) => {
    command = command.command;
    const obj = {
      command,
      location: ApplicationCommandTypes.ApplicationCommandTriggerLocations.APP_LAUNCHER_HOME_SEARCH,
      triggerSection: ApplicationCommandUtils.getCommandTriggerSection(
        getSection(c0, command.applicationId).descriptor,
      ),
      queryLength: query.length,
      sectionName: AppLauncherTypes.AppLauncherSectionName.SEARCH,
      query,
      searchResultsPosition: command.searchResultsPosition,
    };
    obj.trackCommandSelected(obj);
  }, items2);
  callback3 = obj.useCallback((arg0) => {
    ({ section, installOnDemand, searchResultsPosition } = arg0);
    const obj = {
      location: ApplicationCommandTypes.ApplicationCommandTriggerLocations.APP_LAUNCHER_HOME_SEARCH,
      application: section,
      navigation,
      context,
      sectionName: AppLauncherTypes.AppLauncherSectionName.SEARCH,
      installOnDemand,
      query,
      searchResultsPosition,
      entrypoint,
    };
    const result = obj.handleApplicationSelected(obj);
  }, items3);
  const items4 = [loading, commandResults];
  const memo = obj.useMemo(() => (loading ? closure_17 : commandResults), items4);
  const tmp6Result = _slicedToArray(obj.useState(false), 2);
  const items5 = [applicationResults, applicationResults2, loading, fetchState];
  memo1 = obj.useMemo(() => {
    const mapped = applicationResults.map((application) => ({ type: constants.LOCAL_APPLICATION, application }));
    const set = new Set(applicationResults.map((id) => id.id));
    let items = applicationResults2;
    if (applicationResults2 == null) {
      items = [];
    }
    const found = items.filter((type) => {
      let tmp = type.type !== set(entrypoint[24]).ApplicationDirectorySearchResultType.CONNECTION;
      if (tmp) {
        tmp = !set.has(type.data.id);
      }
      return tmp;
    });
    const mapped1 = found.map((application) => ({ type: constants.GLOBAL_APPLICATION, application: application.data }));
    if (loading) {
      let items1 = closure_18;
    } else {
      if (null != fetchState) {
        if (tmp4 !== FetchState.FETCHING) {
          items1 = [];
          HermesBuiltin.arraySpread(mapped1, HermesBuiltin.arraySpread(mapped, 0));
        }
      }
      const items2 = [];
      HermesBuiltin.arraySpread(closure_18, HermesBuiltin.arraySpread(mapped1, HermesBuiltin.arraySpread(mapped, 0)));
      items1 = items2;
    }
    return items1;
  }, items5);
  const items6 = [query, commandResults.length, memo1.length, loading, fetchState];
  const effect1 = obj.useEffect(() => {
    if (0 !== first.length) {
      if (!loading) {
        if (fetchState !== FetchState.FETCHING) {
          const sum = commandResults.length + memo1.length;
          if (sum > 0) {
            const intl = util.intl;
            const obj = { count: sum };
            const AccessibilityAnnouncer = AccessibilityAnnouncer2.AccessibilityAnnouncer;
            AccessibilityAnnouncer.announce(intl.formatToPlainString(util.t.ZGVL3g, obj), "polite");
            const formatToPlainStringResult = intl.formatToPlainString(util.t.ZGVL3g, obj);
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
      style = { isFirstRow: 0 === index, isLastRow: index === memo1.length - 1, style: null };
      style = { height };
      style.style = style;
      return applicationResults(onScroll(entrypoint[26]), style);
    } else {
      if (tmp.LOCAL_APPLICATION !== type) {
        if (tmp.GLOBAL_APPLICATION !== type) {
          return null;
        }
      }
      application = item.application;
      style = context(entrypoint[9]);
      const appLauncherIconSource = style.getAppLauncherIconSource(application);
      const obj1 = {
        application,
        iconSource: appLauncherIconSource,
        onPress() {
          return callback3({ section: application, installOnDemand: true, searchResultsPosition: index });
        },
        isFirstRow: 0 === index,
        isLastRow: index === memo1.length - 1,
      };
      return applicationResults(context(entrypoint[27]).BaseAppRow, obj1);
    }
  }, items7);
  const tmp10Result1 = require("useTrackSearchItems");
  const tmp23 = 0 === memo.length && 0 === memo1.length;
  const appLauncherFlashListProps = require("AppLauncherFlashList").useAppLauncherFlashListProps();
  const items8 = [fetchNextPage, onScroll, tmp4];
  const items9 = [tmp.list, sum];
  const callback5 = obj.useCallback((nativeEvent) => {
    nativeEvent = nativeEvent.nativeEvent;
    if (
      nativeEvent.layoutMeasurement.height + nativeEvent.contentOffset.y >=
      nativeEvent.contentSize.height - 3 * closure_4
    ) {
      fetchNextPage();
    }
    if (onScroll != null) {
      tmp3(nativeEvent);
    }
  }, items8);
  const items10 = [sum];
  const memo2 = obj.useMemo(() => {
    const obj = {};
    const merged = Object.assign(list.list);
    obj.paddingBottom = _undefined;
    return obj;
  }, items9);
  const memo3 = obj.useMemo(() => ({ bottom: _undefined }), items10);
  let tmp33Result = null;
  let tmp2Result = tmp2(tmp3[28]);
  if (0 !== memo.length) {
    obj = { style: tmp.commandsHeaderContainer, children: null };
    obj1 = {
      accessibilityRole: "header",
      variant: "text-md/medium",
      color: "text-default",
      style: tmp.sectionHeader,
      children: null,
    };
    const intl4 = tmp10(tmp3[13]).intl;
    obj1.children = intl4.string(tmp10(tmp3[13]).t["0hKkS+"]);
    const items11 = [tmp31(tmp10(tmp3[29]).Text, obj1)];
    if (memo.length <= tmp10(tmp3[30]).COLLAPSED_LIST_ITEM_MAX) {
      const obj2 = { children: null };
      items11[1] = null;
      obj.children = items11;
      const items12 = [tmp33(tmp45, obj)];
      const obj3 = {
        commandData: memo,
        context,
        beforeExecuteCommand: callback2,
        onPressCommand: callback1,
        onExecuteCommand: context.onSend,
        expanded: tmp17,
      };
      items12[1] = tmp31(CommandsExpandableList, obj3);
      obj2.children = items12;
      tmp33Result = tmp33(tmp34, obj2);
    } else {
      const obj4 = {
        style: tmp.commandsCTA,
        underlayColor: tmp.commandsCTAUnderlayColor.color,
        accessibilityLabel: null,
        onPress: null,
        children: null,
      };
      let intl = tmp10(tmp3[13]).intl;
      const string = intl.string;
      const t = tmp10(tmp3[13]).t;
      if (tmp17) {
        let stringResult = string(t.nPGLFQ);
      } else {
        stringResult = string(t.xal319);
      }
      obj4.accessibilityLabel = stringResult;
      obj4.onPress = callback;
      const intl2 = tmp10(tmp3[13]).intl;
      const string2 = intl2.string;
      let t2 = tmp10(tmp3[13]).t;
      if (tmp17) {
        let string2Result = string2(t2.nPGLFQ);
      } else {
        string2Result = string2(t2.xal319);
      }
      const obj5 = { color: "text-brand", variant: "text-md/semibold", children: string2Result };
      t2 = tmp31(tmp10(tmp3[29]).Text, obj5);
      obj4.children = t2;
      let tmp31Result = tmp31(tmp10(tmp3[31]).AnimatedPressableHighlight, obj4);
    }
    tmp45 = navigation;
  }
  const items13 = [tmp33Result, , ,];
  tmp31Result = null;
  if (memo.length > 0) {
    tmp31Result = null;
    if (memo1.length > 0) {
      const obj6 = { style: tmp.divider };
      tmp31Result = tmp31(navigation, obj6);
    }
  }
  items13[1] = tmp31Result;
  let tmp31Result1 = null;
  if (0 !== memo1.length) {
    const obj7 = {
      accessibilityRole: "header",
      variant: "text-md/medium",
      color: "text-default",
      style: tmp.sectionHeader,
      children: null,
    };
    const intl3 = tmp10(tmp3[13]).intl;
    obj7.children = intl3.string(tmp10(tmp3[13]).t.PHjkRE);
    tmp31Result1 = tmp31(tmp10(tmp3[29]).Text, obj7);
  }
  items13[2] = tmp31Result1;
  let tmp31Result2 = null;
  if (tmp23) {
    const obj8 = { query, showsGenericMessage: null };
    tmp2Result = tmp2(tmp3[32]);
    obj8.showsGenericMessage = entrypoint === tmp10(tmp3[12]).AppLauncherEntrypoint.VOICE;
    tmp31Result2 = tmp31(tmp2Result, obj8);
  }
  const tmp10Result2 = require("AppLauncherFlashList");
  items13[3] = tmp31Result2;
  return applicationResults(
    tmp2Result,
    {
      ListHeaderComponent: fetchState(applicationResults2, { children: items13 }),
      contentContainerStyle: memo2,
      scrollIndicatorInsets: memo3,
      renderItem: callback4,
      keyExtractor,
      data: memo1,
      keyboardDismissMode: "on-drag",
      keyboardShouldPersistTaps: "always",
      automaticallyAdjustsScrollIndicatorInsets: false,
      showsVerticalScrollIndicator: false,
      onViewableItemsChanged: tmp10Result1.useTrackSearchItems(callback3, memo1, query).handleViewableItemsChanged,
      preserveScrollMomentum: true,
      onScroll: callback5,
      animatedOnScroll: appLauncherFlashListProps.onScroll,
      ref: appLauncherFlashListProps.scrollerRef,
      simultaneousHandlers: appLauncherFlashListProps.gestureRef,
      animatedProps: appLauncherFlashListProps.animatedProps,
    },
    query,
  );
});
