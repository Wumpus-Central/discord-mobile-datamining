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

const require = globalThis.__r;

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
  const appLauncherIconSource = hasOptions(12181).getAppLauncherIconSource(application);
  let tmp4 = null != appLauncherIconSource;
  if (tmp4) {
    const obj2 = { iconSource: appLauncherIconSource };
    tmp4 = closure_10(onPressSend(12186), obj2);
  }
  obj = hasOptions(12181);
  const tmpResult = hasOptions(12235);
  const commandRowSend = tmpResult.useCommandRowSend({
    command,
    context,
    beforeExecuteCommand,
    onExecuteCommand,
    sectionName: hasOptions(9539).AppLauncherSectionName.SEARCH,
  });
  hasOptions = commandRowSend.hasOptions;
  onPressSend = commandRowSend.onPressSend;
  let items = [hasOptions];
  const items1 = [onPressSend];
  const memo = noop.useMemo(() => {
    let tmp;
    if (!hasOptions) {
      obj = { name: "send", label: null };
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
  const obj4 = {
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
  const obj3 = {
    command,
    context,
    beforeExecuteCommand,
    onExecuteCommand,
    sectionName: hasOptions(9539).AppLauncherSectionName.SEARCH,
  };
  obj4.subLabel = hasOptions(9418).getSectionName(application);
  obj4.start = isFirstRow;
  obj4.end = isLastRow;
  obj4.onPress = onPress;
  obj4.accessibilityActions = memo;
  obj4.onAccessibilityAction = callback;
  obj4.trailing = closure_10(onPressSend(12235), { hasOptions, sending: commandRowSend.sending, onPressSend });
  return closure_10(hasOptions(5686).TableRow, obj4);
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
  const placeholderWidth = usePlaceholderSize.usePlaceholderWidth(10, 50);
  const placeholderWidth1 = usePlaceholderSize.usePlaceholderWidth(30, 90);
  const obj3 = {
    icon: closure_1_10(View, { style: tmp.loadingCommandAppIcon }),
    label: null,
    subLabel: null,
    subLabelLineClamp: 1,
    start: null,
    end: null,
    onPress: null,
  };
  const obj5 = { style: null };
  const items = [tmp.loadingTextPlaceholder];
  const obj4 = { style: tmp.loadingCommandAppIcon };
  items[1] = { width: "" + placeholderWidth + "%" };
  obj5.style = items;
  obj3.label = closure_1_10(View, obj5);
  const obj7 = { style: null };
  const items1 = [tmp.loadingTextPlaceholderSmall];
  const obj6 = { width: "" + placeholderWidth + "%" };
  items1[1] = { width: "" + placeholderWidth1 + "%" };
  obj7.style = items1;
  obj3.subLabel = closure_1_10(View, obj7);
  obj3.start = flag;
  obj3.end = flag2;
  obj3.onPress = function onPress() {};
  return closure_1_10(TableRow.TableRow, obj3);
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
  const items = [beforeExecuteCommand, context, commandData, onExecuteCommand, onPressCommand];
  const items1 = onExecuteCommand.useMemo(
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
    items: items1,
    expandedOverride: expandedOverride.expanded,
    showsExpandCTAOverride: false,
  });
}
const View = fn(17).View;
const getSection = fn(9419).getSection;
const FetchState = fn(12198).FetchState;
const AppLauncherNativeConstants = fn(1482);
const DEFAULT_CONTENT_PADDING = AppLauncherNativeConstants.DEFAULT_CONTENT_PADDING;
const useAppLauncherNavigation = AppLauncherNativeConstants.useAppLauncherNavigation;
const jsxProd = fn(21);
({ jsx: c10, jsxs: closure_11, Fragment: closure_12 } = jsxProd);
let obj = {
  PLACERHOLDER: 0,
  [0]: "PLACERHOLDER",
  LOCAL_APPLICATION: 1,
  [1]: "LOCAL_APPLICATION",
  GLOBAL_APPLICATION: 2,
  [2]: "GLOBAL_APPLICATION",
};
const placeholder = "placeholder";
const array = new Array(6);
let closure_17 = array.fill("placeholder");
const array2 = new Array(3);
let closure_18 = array2.fill({ type: obj.PLACERHOLDER });
const createStyles = fn(4636);
let obj3 = {
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
obj3.loadingCommandAppIcon = size;
let obj2 = { type: obj.PLACERHOLDER };
let obj4 = {
  paddingHorizontal: DEFAULT_CONTENT_PADDING,
  backgroundColor: nativeDefault.colors.MOBILE_KEYBOARD_PANEL_BACKGROUND,
};
obj3.loadingTextPlaceholder = {
  backgroundColor: nativeDefault.colors.BACKGROUND_MOD_SUBTLE,
  height: 16,
  marginBottom: 4,
  borderRadius: nativeDefault.radii.lg,
  alignSelf: "flex-start",
};
let obj5 = {
  backgroundColor: nativeDefault.colors.BACKGROUND_MOD_SUBTLE,
  height: 16,
  marginBottom: 4,
  borderRadius: nativeDefault.radii.lg,
  alignSelf: "flex-start",
};
obj3.loadingTextPlaceholderSmall = {
  backgroundColor: nativeDefault.colors.BACKGROUND_MOD_SUBTLE,
  height: 16,
  borderRadius: nativeDefault.radii.lg,
  alignSelf: "flex-start",
};
let obj7 = {
  backgroundColor: nativeDefault.colors.BACKGROUND_MOD_SUBTLE,
  height: 16,
  borderRadius: nativeDefault.radii.lg,
  alignSelf: "flex-start",
};
obj3.divider = { marginTop: nativeDefault.space.PX_16 };
obj3.commandsHeaderContainer = { justifyContent: "space-between", flexDirection: "row" };
let obj8 = { marginTop: nativeDefault.space.PX_16 };
obj3.commandsCTA = {
  borderRadius: nativeDefault.radii.sm,
  paddingHorizontal: nativeDefault.space.PX_4,
  marginBottom: nativeDefault.space.PX_4,
  justifyContent: "center",
};
let obj9 = {
  borderRadius: nativeDefault.radii.sm,
  paddingHorizontal: nativeDefault.space.PX_4,
  marginBottom: nativeDefault.space.PX_4,
  justifyContent: "center",
};
obj3.commandsCTAUnderlayColor = { color: nativeDefault.colors.BACKGROUND_SURFACE_HIGH };
let closure_19 = createStyles.createStyles(obj3);
let obj10 = { color: nativeDefault.colors.BACKGROUND_SURFACE_HIGH };
size = fn(2);
let result = size.fileFinishedImporting(
  "modules/app_launcher/native/screens/search/SearchLocalAndGlobalContentView.tsx",
);

export const SearchLocalAndGlobalContentView = noop.forwardRef((context, arg1) => {
  context = context.context;
  _require = context;
  const onScroll = context.onScroll;
  const entrypoint = context.entrypoint;
  query = undefined;
  setQuery = undefined;
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
  [query, setQuery] = noop.useState("");
  const imperativeHandle = noop.useImperativeHandle(arg1, () => ({ setQuery }));
  let id;
  if ("channel" === context.type) {
    id = context.channel.id;
  }
  const isActivitiesInTextEnabled = require("ActivitiesInTextUtils").useIsActivitiesInTextEnabled(id);
  let obj2 = require("ActivitiesInTextUtils");
  const tmp6 = _slicedToArray;
  let obj3 = {
    context,
    query,
    commandLimit: 20,
    applicationLimit: 10,
    searchesActivities: null,
    searchesCommands: null,
    searchesBots: null,
  };
  const tmp10Result = require("AppLauncherSearchUtils");
  obj3.searchesActivities =
    entrypoint === require("AppLauncherTypes").AppLauncherEntrypoint.VOICE || isActivitiesInTextEnabled;
  obj3.searchesCommands = entrypoint === require("AppLauncherTypes").AppLauncherEntrypoint.TEXT;
  obj3.searchesBots = entrypoint === require("AppLauncherTypes").AppLauncherEntrypoint.TEXT;
  const localSearchResults = tmp10Result.useLocalSearchResults(obj3);
  loading = localSearchResults.loading;
  commandResults = localSearchResults.commandResults;
  applicationResults = localSearchResults.applicationResults;
  const tmp13 = entrypoint === require("AppLauncherTypes").AppLauncherEntrypoint.VOICE || isActivitiesInTextEnabled;
  const globalSearchResults = require("AppLauncherSearchUtils").useGlobalSearchResults({
    query,
    context,
    fetches: true,
    entrypoint,
  });
  fetchState = globalSearchResults.fetchState;
  applicationResults2 = globalSearchResults.applicationResults;
  fetchNextPage = globalSearchResults.fetchNextPage;
  _require = undefined;
  const tmp10Result4 = require("AppLauncherSearchUtils");
  [tmp17, c0] = tmp6(noop.useState(false), 2);
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
    const obj2 = {
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
    obj2.sectionDescriptors = items;
    const result = AppLauncherNativeUtils.handleApplicationCommandSelected(obj2);
  }, items1);
  const items3 = [tmp5, context, query, entrypoint];
  const callback2 = obj.useCallback((command) => {
    command = command.command;
    const obj2 = {
      command,
      location: ApplicationCommandTypes.ApplicationCommandTriggerLocations.APP_LAUNCHER_HOME_SEARCH,
      triggerSection: null,
      queryLength: null,
      sectionName: null,
      query: null,
      searchResultsPosition: null,
    };
    obj = ApplicationCommandUtils;
    obj2.triggerSection = ApplicationCommandUtils.getCommandTriggerSection(
      getSection(c0, command.applicationId).descriptor,
    );
    obj2.queryLength = query.length;
    obj2.sectionName = AppLauncherTypes.AppLauncherSectionName.SEARCH;
    obj2.query = query;
    obj2.searchResultsPosition = command.searchResultsPosition;
    obj.trackCommandSelected(obj2);
  }, items2);
  callback3 = obj.useCallback((arg0) => {
    ({ section, installOnDemand, searchResultsPosition } = arg0);
    obj = AppLauncherNativeUtils;
    const result = obj.handleApplicationSelected({
      location: ApplicationCommandTypes.ApplicationCommandTriggerLocations.APP_LAUNCHER_HOME_SEARCH,
      application: section,
      navigation,
      context,
      sectionName: AppLauncherTypes.AppLauncherSectionName.SEARCH,
      installOnDemand,
      query,
      searchResultsPosition,
      entrypoint,
    });
  }, items3);
  const items4 = [loading, commandResults];
  const memo = obj.useMemo(() => (loading ? closure_17 : commandResults), items4);
  const tmp6Result = tmp6(noop.useState(false), 2);
  const items5 = [applicationResults, applicationResults2, loading, fetchState];
  memo1 = obj.useMemo(() => {
    const mapped = applicationResults.map((application) => ({ type: constants.LOCAL_APPLICATION, application }));
    new Set(applicationResults.map((id) => id.id));
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
            obj = { count: sum };
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
      const obj2 = { isFirstRow: 0 === index, isLastRow: index === memo1.length - 1, style: null };
      const obj3 = { height };
      obj2.style = obj3;
      return applicationResults(onScroll(entrypoint[26]), obj2);
    } else {
      if (fetchNextPage.LOCAL_APPLICATION !== type) {
        if (fetchNextPage.GLOBAL_APPLICATION !== type) {
          return null;
        }
      }
      application = item.application;
      const appLauncherIconSource = context(entrypoint[9]).getAppLauncherIconSource(application);
      const obj4 = {
        application,
        iconSource: appLauncherIconSource,
        onPress() {
          return callback3({ section: application, installOnDemand: true, searchResultsPosition: index });
        },
        isFirstRow: 0 === index,
        isLastRow: index === memo1.length - 1,
      };
      return applicationResults(context(entrypoint[27]).BaseAppRow, obj4);
    }
  }, items7);
  const tmp10Result5 = require("useTrackSearchItems");
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
    obj = {};
    const merged = Object.assign(list.list);
    obj.paddingBottom = _undefined;
    return obj;
  }, items9);
  const memo3 = obj.useMemo(() => ({ bottom: _undefined }), items10);
  let tmp33Result = null;
  const tmp10Result6 = require("AppLauncherFlashList");
  if (0 !== memo.length) {
    let obj4 = { style: tmp.commandsHeaderContainer, children: null };
    const obj5 = {
      accessibilityRole: "header",
      variant: "text-md/medium",
      color: "text-default",
      style: tmp.sectionHeader,
      children: null,
    };
    const intl4 = tmp10(tmp3[13]).intl;
    obj5.children = intl4.string(tmp10(tmp3[13]).t["0hKkS+"]);
    const items11 = [tmp31(tmp10(tmp3[29]).Text, obj5)];
    if (memo.length <= tmp10(tmp3[30]).COLLAPSED_LIST_ITEM_MAX) {
      const obj6 = { children: null };
      items11[1] = null;
      obj4.children = items11;
      const items12 = [tmp33(tmp45, obj4)];
      const obj7 = {
        commandData: memo,
        context,
        beforeExecuteCommand: callback2,
        onPressCommand: callback1,
        onExecuteCommand: context.onSend,
        expanded: tmp17,
      };
      items12[1] = tmp31(CommandsExpandableList, obj7);
      obj6.children = items12;
      tmp33Result = tmp33(tmp34, obj6);
    } else {
      const obj8 = {
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
      obj8.accessibilityLabel = stringResult;
      obj8.onPress = callback;
      const intl2 = tmp10(tmp3[13]).intl;
      const string2 = intl2.string;
      let t2 = tmp10(tmp3[13]).t;
      if (tmp17) {
        let string2Result = string2(t2.nPGLFQ);
      } else {
        string2Result = string2(t2.xal319);
      }
      const obj9 = { color: "text-brand", variant: "text-md/semibold", children: string2Result };
      t2 = tmp31(tmp10(tmp3[29]).Text, obj9);
      obj8.children = t2;
      tmp31(tmp10(tmp3[31]).AnimatedPressableHighlight, obj8);
    }
    tmp45 = navigation;
  }
  const items13 = [tmp33Result, , ,];
  let tmp31Result4 = null;
  if (memo.length > 0) {
    tmp31Result4 = null;
    if (memo1.length > 0) {
      const obj10 = { style: tmp.divider };
      tmp31Result4 = tmp31(navigation, obj10);
    }
  }
  items13[1] = tmp31Result4;
  let tmp31Result5 = null;
  if (0 !== memo1.length) {
    const obj11 = {
      accessibilityRole: "header",
      variant: "text-md/medium",
      color: "text-default",
      style: tmp.sectionHeader,
      children: null,
    };
    const intl3 = tmp10(tmp3[13]).intl;
    obj11.children = intl3.string(tmp10(tmp3[13]).t.PHjkRE);
    tmp31Result5 = tmp31(tmp10(tmp3[29]).Text, obj11);
  }
  items13[2] = tmp31Result5;
  let tmp31Result6 = null;
  if (tmp23) {
    const obj12 = { query, showsGenericMessage: entrypoint === tmp10(tmp3[12]).AppLauncherEntrypoint.VOICE };
    tmp31Result6 = tmp31(tmp2(tmp3[32]), obj12);
    const tmp2Result2 = tmp2(tmp3[32]);
  }
  const tmp2Result = onScroll(entrypoint[28]);
  items13[3] = tmp31Result6;
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
      onViewableItemsChanged: tmp10Result5.useTrackSearchItems(callback3, memo1, query).handleViewableItemsChanged,
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
