// === Module 11728: SearchLocalAndGlobalContentView ===

// Module 11728 (SearchLocalAndGlobalContentView)
import react_native from "react-native" /* 17 */;
import react2 from "react" /* 576 */;
import nativeDefault from "native" /* 587 */;
import intl5 from "intl" /* 1126 */;
import AccessibilityAnnouncer2 from "AccessibilityAnnouncer" /* 4590 */;
import TableRow2 from "TableRow" /* 5993 */;
import ApplicationCommandUtils from "ApplicationCommandUtils" /* 7030 */;
import ApplicationCommandTypes from "ApplicationCommandTypes" /* 7034 */;
import AppLauncherUtils from "AppLauncherUtils" /* 8794 */;
import ApplicationCommandIndexStore from "ApplicationCommandIndexStore" /* 8795 */;
import AppLauncherTypes from "AppLauncherTypes" /* 8932 */;
import AppLauncherNativeUtils from "AppLauncherNativeUtils" /* 11665 */;
import usePlaceholderSize from "usePlaceholderSize" /* 11668 */;
import EntityBorderAppIconDefault from "EntityBorderAppIcon" /* 11670 */;
import ApplicationDirectorySearchStore from "ApplicationDirectorySearchStore" /* 11682 */;
import CommandRowButton from "CommandRowButton" /* 11729 */;
import _slicedToArray_mod from "_slicedToArray" /* 32 */;
import react_mod from "react" /* 19 */;
import AppLauncherNativeConstants from "AppLauncherNativeConstants" /* 1489 */;
import Fragment from "Fragment" /* 21 */;
import createStyles_mod from "createStyles" /* 4890 */;
import ReactCompilerGating_mod from "ReactCompilerGating" /* 558 */;
import size_mod from "module_2" /* 2 */;

const CommandRowButtonDefault = CommandRowButton;
let navigation, set;

let c10;
let closure_12;
let obj4;
let obj5;
let obj6;
let obj7;
let obj8;
let obj9;
let size;
let unpackModuleId;
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
function keyExtractor(type, arg1) {
  let id;
  if (type.type === obj.PLACERHOLDER) {
    id = arg1.toString();
  } else {
    id = type.application.id;
  }
  return id;
}
let _slicedToArray = _slicedToArray_mod;
let react = react_mod;
const View = react_native.View;
const getSection = ApplicationCommandIndexStore.getSection;
const FetchState = ApplicationDirectorySearchStore.FetchState;
const DEFAULT_CONTENT_PADDING = AppLauncherNativeConstants.DEFAULT_CONTENT_PADDING;
const useAppLauncherNavigation = AppLauncherNativeConstants.useAppLauncherNavigation;
({ jsx: c10, jsxs: unpackModuleId, Fragment: closure_12 } = Fragment);
let obj = { PLACERHOLDER: 0, [0]: "PLACERHOLDER", LOCAL_APPLICATION: 1, [1]: "LOCAL_APPLICATION", GLOBAL_APPLICATION: 2, [2]: "GLOBAL_APPLICATION" };
const placeholder = "placeholder";
const array = new Array(6);
let closure_17 = array.fill("placeholder");
const array2 = new Array(3);
let obj2 = { type: obj.PLACERHOLDER };
let closure_18 = array2.fill(obj2);
let createStyles = createStyles_mod;
let obj3 = { sectionHeader: { marginBottom: 8 }, list: obj4, loadingCommandAppIcon: size, loadingTextPlaceholder: obj5, loadingTextPlaceholderSmall: obj6, divider: obj7, commandsHeaderContainer: { justifyContent: "space-between", flexDirection: "row" }, commandsCTA: obj8, commandsCTAUnderlayColor: obj9 };
obj4 = { paddingHorizontal: DEFAULT_CONTENT_PADDING, backgroundColor: nativeDefault.colors.MOBILE_KEYBOARD_PANEL_BACKGROUND };
createStyles = createStyles.createStyles;
size = { width: 32, height: 32, borderRadius: nativeDefault.radii.sm, backgroundColor: nativeDefault.colors.BACKGROUND_MOD_SUBTLE };
obj5 = { backgroundColor: nativeDefault.colors.BACKGROUND_MOD_SUBTLE, height: 16, marginBottom: 4, borderRadius: nativeDefault.radii.lg, alignSelf: "flex-start" };
obj6 = { backgroundColor: nativeDefault.colors.BACKGROUND_MOD_SUBTLE, height: 16, borderRadius: nativeDefault.radii.lg, alignSelf: "flex-start" };
obj7 = { marginTop: nativeDefault.space.PX_16 };
obj8 = { borderRadius: nativeDefault.radii.sm, paddingHorizontal: nativeDefault.space.PX_4, marginBottom: nativeDefault.space.PX_4, justifyContent: "center" };
obj9 = { color: nativeDefault.colors.BACKGROUND_SURFACE_HIGH };
let closure_19 = createStyles(obj3);
let ReactCompilerGating = ReactCompilerGating_mod;
let closure_20 = ReactCompilerGating.isReactCompilerEnabled() ? ((arg0) => {
  let application;
  let beforeExecuteCommand;
  let command;
  let context;
  let hasOptions;
  let intl;
  let isFirstRow;
  let isLastRow;
  let onExecuteCommand;
  let onPress;
  let onPressSend;
  let sending;
  let tmp4;
  let tmp6;
  obj = react2;
  const cResult = obj.c(29);
  ({ context, command, application, onPress, isFirstRow, isLastRow, beforeExecuteCommand, onExecuteCommand } = arg0);
  if (cResult[0] !== application) {
    const tmpResult = AppLauncherNativeUtils;
    const appLauncherIconSource = tmpResult.getAppLauncherIconSource(application);
    cResult[0] = application;
    cResult[1] = appLauncherIconSource;
    tmp4 = appLauncherIconSource;
  } else {
    tmp4 = cResult[1];
  }
  if (cResult[2] !== tmp4) {
    let tmp8 = null != tmp4;
    if (tmp8) {
      const obj2 = { iconSource: tmp4 };
      tmp8 = authStore(EntityBorderAppIconDefault, obj2);
    }
    cResult[2] = tmp4;
    cResult[3] = tmp8;
    tmp6 = tmp8;
  } else {
    tmp6 = cResult[3];
  }
  if (cResult[4] === beforeExecuteCommand) {
    if (cResult[5] === command) {
      if (cResult[6] === context) {
        let tmp11;
        let tmp13;
        let tmp15;
        let tmp16;
        if (cResult[7] === onExecuteCommand) {
          tmp11 = cResult[8];
        }
        const tmpResult3 = CommandRowButton;
        const commandRowSend = tmpResult3.useCommandRowSend(tmp11);
        ({ hasOptions, sending, onPressSend } = commandRowSend);
        if (cResult[9] !== hasOptions) {
          let tmp14;
          if (!hasOptions) {
            const obj3 = { name: "send", label: intl.string(intl5.t.TXNS7S) };
            intl = intl5.intl;
            const items = [obj3];
            tmp14 = items;
          }
          cResult[9] = hasOptions;
          cResult[10] = tmp14;
          tmp13 = tmp14;
        } else {
          tmp13 = cResult[10];
        }
        if (cResult[11] !== onPressSend) {
          const fn = function f(nativeEvent) {
            if ("send" === nativeEvent.nativeEvent.actionName) {
              onPressSend();
            }
          };
          cResult[11] = onPressSend;
          cResult[12] = fn;
          tmp15 = fn;
        } else {
          tmp15 = cResult[12];
        }
        const displayName = command.displayName;
        if (cResult[13] !== application) {
          const tmpResult4 = AppLauncherUtils;
          const sectionName = tmpResult4.getSectionName(application);
          cResult[13] = application;
          cResult[14] = sectionName;
          tmp16 = sectionName;
        } else {
          tmp16 = cResult[14];
        }
        if (cResult[15] === hasOptions) {
          if (cResult[16] === onPressSend) {
            let tmp18;
            if (cResult[17] === sending) {
              tmp18 = cResult[18];
            }
            if (cResult[19] === tmp13) {
              if (cResult[20] === command.displayName) {
                if (cResult[21] === tmp6) {
                  if (cResult[22] === isFirstRow) {
                    if (cResult[23] === isLastRow) {
                      if (cResult[24] === tmp15) {
                        if (cResult[25] === onPress) {
                          if (cResult[26] === tmp16) {
                            let tmp22;
                            if (cResult[27] === tmp18) {
                              tmp22 = cResult[28];
                            }
                            return tmp22;
                          }
                        }
                      }
                    }
                  }
                }
              }
            }
            const obj4 = { icon: tmp6, label: displayName, subLabel: tmp16, subLabelLineClamp: 1, start: isFirstRow, end: isLastRow, onPress, accessibilityActions: tmp13, onAccessibilityAction: tmp15, trailing: tmp18 };
            const tmp24 = authStore(TableRow2.TableRow, obj4);
            cResult[19] = tmp13;
            cResult[20] = command.displayName;
            cResult[21] = tmp6;
            cResult[22] = isFirstRow;
            cResult[23] = isLastRow;
            cResult[24] = tmp15;
            cResult[25] = onPress;
            cResult[26] = tmp16;
            cResult[27] = tmp18;
            cResult[28] = tmp24;
            tmp22 = tmp24;
          }
        }
        const obj5 = { hasOptions, sending, onPressSend };
        const tmp21 = authStore(CommandRowButtonDefault, obj5);
        cResult[15] = hasOptions;
        cResult[16] = onPressSend;
        cResult[17] = sending;
        cResult[18] = tmp21;
        tmp18 = tmp21;
      }
    }
  }
  const obj6 = { command, context, beforeExecuteCommand, onExecuteCommand, sectionName: AppLauncherTypes.AppLauncherSectionName.SEARCH };
  cResult[4] = beforeExecuteCommand;
  cResult[5] = command;
  cResult[6] = context;
  cResult[7] = onExecuteCommand;
  cResult[8] = obj6;
  tmp11 = obj6;
}) : ((arg0) => {
  let application;
  let beforeExecuteCommand;
  let command;
  let context;
  let isFirstRow;
  let isLastRow;
  let onExecuteCommand;
  let onPress;
  let tmpResult2;
  ({ command, application } = arg0);
  let hasOptions;
  let onPressSend;
  let tmp = hasOptions;
  ({ context, onPress, isFirstRow, isLastRow, beforeExecuteCommand, onExecuteCommand } = arg0);
  obj = hasOptions(11665);
  const appLauncherIconSource = obj.getAppLauncherIconSource(application);
  let tmp4 = null != appLauncherIconSource;
  if (tmp4) {
    const obj2 = { iconSource: appLauncherIconSource };
    tmp4 = closure_10(onPressSend(11670), obj2);
  }
  const tmpResult = tmp(11729);
  const obj3 = { command, context, beforeExecuteCommand, onExecuteCommand, sectionName: tmp(8932).AppLauncherSectionName.SEARCH };
  const commandRowSend = tmpResult.useCommandRowSend(obj3);
  hasOptions = commandRowSend.hasOptions;
  onPressSend = commandRowSend.onPressSend;
  let items = [hasOptions];
  const sending = commandRowSend.sending;
  const items1 = [onPressSend];
  const memo = react.useMemo(() => {
    let intl;
    let tmp;
    if (!hasOptions) {
      obj = { name: "send", label: intl.string(intl5.t.TXNS7S) };
      intl = intl5.intl;
      const items = [obj];
      tmp = items;
    }
    return tmp;
  }, items);
  const callback = react.useCallback((nativeEvent) => {
    if ("send" === nativeEvent.nativeEvent.actionName) {
      onPressSend();
    }
  }, items1);
  const obj4 = { icon: tmp4, label: command.displayName, subLabel: tmpResult2.getSectionName(application), subLabelLineClamp: 1, start: isFirstRow, end: isLastRow, onPress, accessibilityActions: memo, onAccessibilityAction: callback, trailing: closure_10(onPressSend(11729), { hasOptions, sending, onPressSend }) };
  const TableRow = tmp(5993).TableRow;
  tmpResult2 = tmp(8794);
  return closure_10(TableRow, obj4);
});
ReactCompilerGating = ReactCompilerGating_mod;
let closure_21 = ReactCompilerGating.isReactCompilerEnabled() ? ((arg0) => {
  let isFirstRow;
  let isLastRow;
  let items;
  let items1;
  let tmp14;
  let tmp9;
  obj = react2;
  const cResult = obj.c(19);
  ({ isFirstRow, isLastRow } = arg0);
  const tmp6 = closure_19();
  const tmpResult = usePlaceholderSize;
  const placeholderWidth = tmpResult.usePlaceholderWidth(10, 50);
  const tmpResult2 = usePlaceholderSize;
  const placeholderWidth1 = tmpResult2.usePlaceholderWidth(30, 90);
  if (cResult[0] !== tmp6.loadingCommandAppIcon) {
    const obj2 = { style: tmp6.loadingCommandAppIcon };
    const tmp12 = authStore(View, obj2);
    cResult[0] = tmp6.loadingCommandAppIcon;
    cResult[1] = tmp12;
    tmp9 = tmp12;
  } else {
    tmp9 = cResult[1];
  }
  const combined = "" + placeholderWidth + "%";
  if (cResult[2] !== combined) {
    const obj3 = { width: combined };
    cResult[2] = combined;
    cResult[3] = obj3;
    tmp14 = obj3;
  } else {
    tmp14 = cResult[3];
  }
  if (cResult[4] === tmp6.loadingTextPlaceholder) {
    let tmp15;
    let tmp18;
    if (cResult[5] === tmp14) {
      tmp15 = cResult[6];
    }
    const _HermesInternal = HermesInternal;
    const combined1 = "" + placeholderWidth1 + "%";
    if (cResult[7] !== combined1) {
      const obj4 = { width: combined1 };
      cResult[7] = combined1;
      cResult[8] = obj4;
      tmp18 = obj4;
    } else {
      tmp18 = cResult[8];
    }
    if (cResult[9] === tmp6.loadingTextPlaceholderSmall) {
      let tmp19;
      let tmp23;
      if (cResult[10] === tmp18) {
        tmp19 = cResult[11];
      }
      const _Symbol = Symbol;
      if (cResult[12] === Symbol.for("react.memo_cache_sentinel")) {
        const fn = function x() {

        };
        cResult[12] = fn;
        tmp23 = fn;
      } else {
        tmp23 = cResult[12];
      }
      if (cResult[13] === (undefined !== isFirstRow && isFirstRow)) {
        if (cResult[14] === (undefined !== isLastRow && isLastRow)) {
          if (cResult[15] === tmp9) {
            if (cResult[16] === tmp15) {
              let tmp24;
              if (cResult[17] === tmp19) {
                tmp24 = cResult[18];
              }
              return tmp24;
            }
          }
        }
      }
      const obj5 = { icon: tmp9, label: tmp15, subLabel: tmp19, subLabelLineClamp: 1, start: undefined !== isFirstRow && isFirstRow, end: undefined !== isLastRow && isLastRow, onPress: tmp23 };
      const tmp26 = authStore(TableRow2.TableRow, obj5);
      cResult[13] = undefined !== isFirstRow && isFirstRow;
      cResult[14] = undefined !== isLastRow && isLastRow;
      cResult[15] = tmp9;
      cResult[16] = tmp15;
      cResult[17] = tmp19;
      cResult[18] = tmp26;
      tmp24 = tmp26;
    }
    const obj6 = { style: items };
    items = [tmp6.loadingTextPlaceholderSmall, tmp18];
    const tmp22 = authStore(View, obj6);
    cResult[9] = tmp6.loadingTextPlaceholderSmall;
    cResult[10] = tmp18;
    cResult[11] = tmp22;
    tmp19 = tmp22;
  }
  const obj7 = { style: items1 };
  items1 = [tmp6.loadingTextPlaceholder, tmp14];
  const tmp16 = authStore(View, obj7);
  cResult[4] = tmp6.loadingTextPlaceholder;
  cResult[5] = tmp14;
  cResult[6] = tmp16;
  tmp15 = tmp16;
}) : ((isFirstRow) => {
  let items;
  let items1;
  let obj4;
  let obj5;
  let obj7;
  let flag = isFirstRow.isFirstRow;
  if (flag === undefined) {
    flag = false;
  }
  let flag2 = isFirstRow.isLastRow;
  if (flag2 === undefined) {
    flag2 = false;
  }
  const tmp = closure_19();
  obj = usePlaceholderSize;
  const placeholderWidth = obj.usePlaceholderWidth(10, 50);
  const obj2 = usePlaceholderSize;
  const placeholderWidth1 = obj2.usePlaceholderWidth(30, 90);
  const obj3 = {
    icon: authStore(View, obj4),
    label: authStore(View, obj5),
    subLabel: authStore(View, obj7),
    subLabelLineClamp: 1,
    start: flag,
    end: flag2,
    onPress() {

    }
  };
  obj4 = { style: tmp.loadingCommandAppIcon };
  const TableRow = TableRow2.TableRow;
  obj5 = { style: items };
  items = [tmp.loadingTextPlaceholder, { width: "" + placeholderWidth + "%" }];
  ({ width: "" + placeholderWidth + "%" });
  obj7 = { style: items1 };
  items1 = [tmp.loadingTextPlaceholderSmall, { width: "" + placeholderWidth1 + "%" }];
  ({ width: "" + placeholderWidth1 + "%" });
  return authStore(TableRow, obj3);
});
ReactCompilerGating = ReactCompilerGating_mod;
let closure_22 = ReactCompilerGating.isReactCompilerEnabled() ? ((arg0) => {
  let closure_129_0;
  let first;
  let tmp3;
  let tmp5;
  let tmp7;
  let tmp8;
  obj = react2;
  const cResult = obj.c(6);
  [tmp3, closure_129_0] = react.useState(false);
  _slicedToArray(react.useState(false), 2);
  if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
    const fn = function o() {
      closure_1_0(false);
    };
    cResult[0] = fn;
    first = fn;
  } else {
    first = cResult[0];
  }
  if (cResult[1] !== arg0) {
    const items = [arg0];
    cResult[1] = arg0;
    cResult[2] = items;
    tmp5 = items;
  } else {
    tmp5 = cResult[2];
  }
  const effect = react.useEffect(first, tmp5);
  if (cResult[3] === Symbol.for("react.memo_cache_sentinel")) {
    const fn2 = function l() {
      closure_1_0((arg0) => !arg0);
    };
    cResult[3] = fn2;
    tmp7 = fn2;
  } else {
    tmp7 = cResult[3];
  }
  if (cResult[4] !== tmp3) {
    const obj3 = { isCommandsExpanded: tmp3, toggleCommandsExpanded: tmp7 };
    cResult[4] = tmp3;
    cResult[5] = obj3;
    tmp8 = obj3;
  } else {
    tmp8 = cResult[5];
  }
  return tmp8;
}) : ((arg0) => {
  let closure_0;
  let first;
  [first, closure_0] = react.useState(false);
  const items = [arg0];
  const effect = react.useEffect(() => {
    closure_0(false);
  }, items);
  obj = {
    isCommandsExpanded: first,
    toggleCommandsExpanded: react.useCallback(() => {
      closure_0((arg0) => !arg0);
    }, [])
  };
  return obj;
});
const forwardRefResult = react.forwardRef((context, arg1) => {
  let Text;
  let _undefined;
  let height;
  let intl3;
  let intl4;
  let items10;
  let items11;
  let list;
  let obj6;
  let query;
  let setQuery;
  let stringResult;
  let tmp14;
  context = context.context;
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
  let callback2;
  let memo1;
  let c16;
  const onSend = context.onSend;
  let tmp = closure_19();
  _slicedToArray = tmp;
  const tmp3 = entrypoint;
  const bottom = onScroll(entrypoint[19])().bottom;
  const tmp4 = onScroll(entrypoint[20])();
  react = tmp4;
  const tmp5 = commandResults();
  navigation = tmp5;
  obj = react;
  [query, setQuery] = react.useState("");
  const imperativeHandle = react.useImperativeHandle(arg1, () => ({ setQuery }));
  let id;
  const useIsActivitiesInTextEnabled = context(entrypoint[21]).useIsActivitiesInTextEnabled;
  const tmp10 = context(entrypoint[21]);
  if ("channel" === context.type) {
    id = context.channel.id;
  }
  const isActivitiesInTextEnabled = useIsActivitiesInTextEnabled(id);
  let obj2 = { context, query, commandLimit: 20, applicationLimit: 10, searchesActivities: tmp14, searchesCommands: entrypoint === tmp9(tmp3[13]).AppLauncherEntrypoint.TEXT, searchesBots: entrypoint === tmp9(tmp3[13]).AppLauncherEntrypoint.TEXT };
  const useLocalSearchResults = context(tmp3[22]).useLocalSearchResults;
  tmp14 = entrypoint === context(tmp3[13]).AppLauncherEntrypoint.VOICE || isActivitiesInTextEnabled;
  const localSearchResults = useLocalSearchResults(obj2);
  loading = localSearchResults.loading;
  commandResults = localSearchResults.commandResults;
  applicationResults = localSearchResults.applicationResults;
  const tmp9Result4 = context(tmp3[22]);
  const globalSearchResults = tmp9Result4.useGlobalSearchResults({ query, context, fetches: true, entrypoint });
  fetchState = globalSearchResults.fetchState;
  applicationResults2 = globalSearchResults.applicationResults;
  fetchNextPage = globalSearchResults.fetchNextPage;
  const tmp17 = closure_22(query);
  const isCommandsExpanded = tmp17.isCommandsExpanded;
  let items = [context, entrypoint, tmp5, query];
  const toggleCommandsExpanded = tmp17.toggleCommandsExpanded;
  let items1 = [context, query];
  const callback = obj.useCallback((applicationId, searchResultsPosition) => {
    let items;
    const descriptor = getSection(context, applicationId.applicationId).descriptor;
    obj = AppLauncherNativeUtils;
    const obj2 = { location: ApplicationCommandTypes.ApplicationCommandTriggerLocations.APP_LAUNCHER_HOME_SEARCH, context, command: applicationId, section: descriptor, sectionDescriptors: items, query, navigation, sectionName: AppLauncherTypes.AppLauncherSectionName.SEARCH, searchResultsPosition, entrypoint };
    items = [descriptor];
    const result = obj.handleApplicationCommandSelected(obj2);
  }, items);
  let items2 = [tmp5, context, query, entrypoint];
  const callback1 = obj.useCallback((command) => {
    let obj2;
    command = command.command;
    const searchResultsPosition = command.searchResultsPosition;
    const descriptor = getSection(context, command.applicationId).descriptor;
    const tmp = ApplicationCommandUtils;
    const trackCommandSelected = tmp.trackCommandSelected;
    obj = { command, location: ApplicationCommandTypes.ApplicationCommandTriggerLocations.APP_LAUNCHER_HOME_SEARCH, triggerSection: obj2.getCommandTriggerSection(descriptor), queryLength: query.length, sectionName: AppLauncherTypes.AppLauncherSectionName.SEARCH, query, searchResultsPosition };
    obj2 = ApplicationCommandUtils;
    trackCommandSelected(obj);
  }, items1);
  callback2 = obj.useCallback((arg0) => {
    let installOnDemand;
    let searchResultsPosition;
    let section;
    ({ section, installOnDemand, searchResultsPosition } = arg0);
    obj = AppLauncherNativeUtils;
    const obj2 = { location: ApplicationCommandTypes.ApplicationCommandTriggerLocations.APP_LAUNCHER_HOME_SEARCH, application: section, navigation, context, sectionName: AppLauncherTypes.AppLauncherSectionName.SEARCH, installOnDemand, query, searchResultsPosition, entrypoint };
    const result = obj.handleApplicationSelected(obj2);
  }, items2);
  const items3 = [loading, commandResults];
  const memo = obj.useMemo(() => loading ? closure_17 : commandResults, items3);
  const items4 = [applicationResults, applicationResults2, loading, fetchState];
  const tmp9Result5 = context(tmp3[25]);
  const handleViewableItemsChanged = tmp9Result5.useTrackSearchItems(callback2, memo1, query).handleViewableItemsChanged;
  memo1 = obj.useMemo(function() {
    let items1;
    const mapped = applicationResults.map((application) => ({ type: constants.LOCAL_APPLICATION, application }));
    const self = this;
    set = new Set(applicationResults.map((id) => id.id));
    let items = applicationResults2;
    if (applicationResults2 == null) {
      items = [];
    }
    const found = items.filter((type) => {
      const tmp = type.type !== context(entrypoint[26]).ApplicationDirectorySearchResultType.CONNECTION && !set.has(type.data.id);
      return tmp;
    });
    const mapped1 = found.map((application) => ({ type: constants.GLOBAL_APPLICATION, application: application.data }));
    if (loading) {
      items1 = closure_18;
    } else {
      if (null != fetchState) {
        if (tmp5 !== FetchState.FETCHING) {
          items1 = [];
          HermesBuiltin.arraySpread(items1, mapped1, HermesBuiltin.arraySpread(items1, mapped, 0));
        }
      }
      const items2 = [];
      HermesBuiltin.arraySpread(items2, closure_18, HermesBuiltin.arraySpread(items2, mapped1, HermesBuiltin.arraySpread(items2, mapped, 0)));
      items1 = items2;
    }
    return items1;
  }, items4);
  const items5 = [, , , , ];
  const tmp21 = 0 === memo.length && 0 === memo1.length;
  items5[0] = query;
  items5[1] = commandResults.length;
  items5[2] = memo1.length;
  items5[3] = loading;
  items5[4] = fetchState;
  const effect = obj.useEffect(() => {
    if (0 !== first.length) {
      if (!loading) {
        if (fetchState !== FetchState.FETCHING) {
          const sum = commandResults.length + memo1.length;
          if (sum > 0) {
            const intl = intl5.intl;
            obj = { count: sum };
            const formatToPlainStringResult = intl.formatToPlainString(intl5.t.ZGVL3g, obj);
            const AccessibilityAnnouncer = AccessibilityAnnouncer2.AccessibilityAnnouncer;
            AccessibilityAnnouncer.announce(formatToPlainStringResult, "polite");
          }
        }
      }
    }
  }, items5);
  const items6 = [memo1.length, callback2, tmp4];
  let sum = bottom + loading;
  c16 = sum;
  const callback3 = obj.useCallback((arg0) => {
    let index;
    let item;
    let obj3;
    ({ item, index } = arg0);
    let application;
    const type = item.type;
    if (fetchNextPage.PLACERHOLDER === type) {
      const obj2 = { isFirstRow: 0 === index, isLastRow: index === memo1.length - 1, style: obj3 };
      obj3 = { height };
      return applicationResults(onScroll(entrypoint[28]), obj2);
    } else {
      if (fetchNextPage.LOCAL_APPLICATION !== type) {
        if (fetchNextPage.GLOBAL_APPLICATION !== type) {
          return null;
        }
      }
      application = item.application;
      obj = context(entrypoint[11]);
      const appLauncherIconSource = obj.getAppLauncherIconSource(application);
      const obj4 = {
        application,
        iconSource: appLauncherIconSource,
        onPress() {
            obj = { section: application, installOnDemand: true, searchResultsPosition: index };
            return callback2(obj);
          },
        isFirstRow: 0 === index,
        isLastRow: index === memo1.length - 1
      };
      return applicationResults(context(entrypoint[29]).BaseAppRow, obj4);
    }
  }, items6);
  const tmp9Result6 = context(tmp3[30]);
  const appLauncherFlashListProps = tmp9Result6.useAppLauncherFlashListProps();
  const items7 = [fetchNextPage, onScroll, tmp4];
  const items8 = [tmp.list, sum];
  const callback4 = obj.useCallback((nativeEvent) => {
    nativeEvent = nativeEvent.nativeEvent;
    if (nativeEvent.layoutMeasurement.height + nativeEvent.contentOffset.y >= nativeEvent.contentSize.height - 3 * height) {
      fetchNextPage();
    }
    if (onScroll != null) {
      tmp3(nativeEvent);
    }
  }, items7);
  const items9 = [sum];
  const memo2 = obj.useMemo(() => {
    obj = { paddingBottom: _undefined };
    const merged = Object.assign(list.list);
    return obj;
  }, items8);
  const memo3 = obj.useMemo(() => ({ bottom: _undefined }), items9);
  let tmp31Result = null;
  const tmp2Result = onScroll(tmp3[30]);
  if (0 !== memo.length) {
    let obj3 = { style: tmp.commandsHeaderContainer, children: items10 };
    let obj4 = { accessibilityRole: "header", variant: "text-md/medium", color: "text-default", style: tmp.sectionHeader, children: intl4.string(tmp9(tmp3[15]).t["0hKkS+"]) };
    const Text3 = tmp9(tmp3[31]).Text;
    intl4 = tmp9(tmp3[15]).intl;
    items10 = [applicationResults(Text3, obj4), ];
    let tmp29Result = null;
    const tmp43 = navigation;
    if (memo.length > context(tmp3[32]).COLLAPSED_LIST_ITEM_MAX) {
      let string2Result;
      const obj5 = { style: tmp.commandsCTA, underlayColor: tmp.commandsCTAUnderlayColor.color, accessibilityLabel: stringResult, onPress: toggleCommandsExpanded, children: applicationResults(Text, obj6) };
      const AnimatedPressableHighlight = tmp9(tmp3[33]).AnimatedPressableHighlight;
      let intl = tmp9(tmp3[15]).intl;
      const string = intl.string;
      const t = tmp9(tmp3[15]).t;
      if (isCommandsExpanded) {
        stringResult = string(t.nPGLFQ);
      } else {
        stringResult = string(t.xal319);
      }
      Text = tmp9(tmp3[31]).Text;
      const intl2 = tmp9(tmp3[15]).intl;
      const string2 = intl2.string;
      const t2 = tmp9(tmp3[15]).t;
      if (isCommandsExpanded) {
        string2Result = string2(t2.nPGLFQ);
      } else {
        string2Result = string2(t2.xal319);
      }
      obj6 = { color: "text-brand", variant: "text-md/semibold", children: string2Result };
      tmp29Result = tmp29(AnimatedPressableHighlight, obj5);
    }
    const obj7 = { children: items11 };
    items10[1] = tmp29Result;
    items11 = [fetchState(tmp43, obj3), ];
    const obj8 = { commandData: memo, context, beforeExecuteCommand: callback1, onPressCommand: callback, onExecuteCommand: onSend, expanded: isCommandsExpanded };
    items11[1] = applicationResults(closure_24, obj8);
    tmp31Result = tmp31(tmp32, obj7);
  }
  const items12 = [tmp31Result, , , ];
  let tmp29Result4 = null;
  if (memo.length > 0) {
    tmp29Result4 = null;
    if (memo1.length > 0) {
      const obj9 = { style: tmp.divider };
      tmp29Result4 = tmp29(navigation, obj9);
    }
  }
  items12[1] = tmp29Result4;
  let tmp29Result5 = null;
  if (0 !== memo1.length) {
    const obj10 = { accessibilityRole: "header", variant: "text-md/medium", color: "text-default", style: tmp.sectionHeader, children: intl3.string(context(tmp3[15]).t.PHjkRE) };
    const Text2 = tmp9(tmp3[31]).Text;
    intl3 = tmp9(tmp3[15]).intl;
    tmp29Result5 = tmp29(Text2, obj10);
  }
  items12[2] = tmp29Result5;
  let tmp29Result6 = null;
  if (tmp21) {
    const obj11 = { query, showsGenericMessage: entrypoint === context(tmp3[13]).AppLauncherEntrypoint.VOICE };
    const tmp2Result2 = onScroll(tmp3[34]);
    tmp29Result6 = tmp29(tmp2Result2, obj11);
  }
  items12[3] = tmp29Result6;
  const obj12 = { ListHeaderComponent: fetchState(applicationResults2, { children: items12 }), contentContainerStyle: memo2, scrollIndicatorInsets: memo3, renderItem: callback3, keyExtractor, data: memo1, keyboardDismissMode: "on-drag", keyboardShouldPersistTaps: "always", automaticallyAdjustsScrollIndicatorInsets: false, showsVerticalScrollIndicator: false, onViewableItemsChanged: handleViewableItemsChanged, preserveScrollMomentum: true, onScroll: callback4, animatedOnScroll: appLauncherFlashListProps.onScroll, ref: appLauncherFlashListProps.scrollerRef, simultaneousHandlers: appLauncherFlashListProps.gestureRef, animatedProps: appLauncherFlashListProps.animatedProps };
  return applicationResults(tmp2Result, obj12, query);
});
ReactCompilerGating = ReactCompilerGating_mod;
let closure_24 = ReactCompilerGating.isReactCompilerEnabled() ? ((beforeExecuteCommand) => {
  let commandData;
  let context;
  let onPressCommand;
  let tmp3;
  obj = context(onPressCommand[10]);
  const cResult = obj.c(14);
  ({ commandData, context } = beforeExecuteCommand);
  beforeExecuteCommand = beforeExecuteCommand.beforeExecuteCommand;
  const tmp = onPressCommand;
  onPressCommand = beforeExecuteCommand.onPressCommand;
  const onExecuteCommand = beforeExecuteCommand.onExecuteCommand;
  const expanded = beforeExecuteCommand.expanded;
  if (cResult[0] === beforeExecuteCommand) {
    if (cResult[1] === commandData) {
      if (cResult[2] === context) {
        if (cResult[3] === onExecuteCommand) {
          if (cResult[4] === onPressCommand) {
            tmp3 = cResult[5];
          }
          if (cResult[11] === expanded) {
            let tmp6;
            if (cResult[12] === tmp3) {
              tmp6 = cResult[13];
            }
            return tmp6;
          }
          const obj2 = { items: tmp3, expandedOverride: expanded, showsExpandCTAOverride: false };
          const tmp9 = closure_10(beforeExecuteCommand(tmp[32]), obj2);
          cResult[11] = expanded;
          cResult[12] = tmp3;
          cResult[13] = tmp9;
          tmp6 = tmp9;
        }
      }
    }
  }
  if (cResult[6] === beforeExecuteCommand) {
    if (cResult[7] === context) {
      if (cResult[8] === onExecuteCommand) {
        let tmp4;
        if (cResult[9] === onPressCommand) {
          tmp4 = cResult[10];
        }
        const mapped = commandData.map(tmp4);
        cResult[0] = beforeExecuteCommand;
        cResult[1] = commandData;
        cResult[2] = context;
        cResult[3] = onExecuteCommand;
        cResult[4] = onPressCommand;
        cResult[5] = mapped;
        tmp3 = mapped;
      }
    }
  }
  const fn = function t(arg0, arg1) {
    let application;
    let command;
    let closure_0 = arg1;
    if (arg0 === placeholder) {
      return (isLastRow) => {
        obj = { isFirstRow: 0 === closure_0, isLastRow: isLastRow.isLastRow };
        return authStore(closure_21, obj);
      };
    } else {
      ({ command: beforeExecuteCommand, application: onPressCommand } = arg0);
      return (isLastRow) => {
        obj = {
          context,
          command: beforeExecuteCommand,
          application: onPressCommand,
          onPress() {
            return onPressCommand(command, searchResultsPosition);
          },
          isFirstRow: 0 === searchResultsPosition,
          isLastRow: isLastRow.isLastRow,
          beforeExecuteCommand() {
            obj = { command: beforeExecuteCommand, searchResultsPosition };
            return beforeExecuteCommand(obj);
          },
          onExecuteCommand
        };
        return authStore(closure_20, obj);
      };
    }
  };
  cResult[6] = beforeExecuteCommand;
  cResult[7] = context;
  cResult[8] = onExecuteCommand;
  cResult[9] = onPressCommand;
  cResult[10] = fn;
  tmp4 = fn;
}) : ((commandData) => {
  commandData = commandData.commandData;
  const context = commandData.context;
  const beforeExecuteCommand = commandData.beforeExecuteCommand;
  const onPressCommand = commandData.onPressCommand;
  const onExecuteCommand = commandData.onExecuteCommand;
  const items = [beforeExecuteCommand, context, commandData, onExecuteCommand, onPressCommand];
  const expandedOverride = commandData.expanded;
  const items1 = onExecuteCommand.useMemo(() => commandData.map((item, index) => {
    let application;
    let closure_1;
    let closure_2;
    let command;
    let closure_0 = index;
    if (item === closure_1_16) {
      return (isLastRow) => {
        obj = { isFirstRow: 0 === index, isLastRow: isLastRow.isLastRow };
        return closure_3_10(closure_3_21, obj);
      };
    } else {
      ({ command: closure_1, application: closure_2 } = item);
      return (isLastRow) => {
        obj = {
          context,
          command,
          application,
          onPress() {
            return closure_2_3(command, searchResultsPosition);
          },
          isFirstRow: 0 === searchResultsPosition,
          isLastRow: isLastRow.isLastRow,
          beforeExecuteCommand() {
            obj = { command, searchResultsPosition };
            return closure_2(obj);
          },
          onExecuteCommand
        };
        return closure_3_10(closure_3_20, obj);
      };
    }
  }), items);
  return closure_10(context(beforeExecuteCommand[32]), { items: items1, expandedOverride, showsExpandCTAOverride: false });
});
size = size_mod;
let result = size.fileFinishedImporting("modules/app_launcher/native/screens/search/SearchLocalAndGlobalContentView.tsx");

export const SearchLocalAndGlobalContentView = forwardRefResult;