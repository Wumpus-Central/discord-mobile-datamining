// discord_app/modules/app_launcher/native/screens/search/SearchLocalAndGlobalContentView.tsx
import c from "../../../../../../_runtime/00576_c.js";
import nativeDefault from "../../../../../../discord_common/js/packages/tokens/native.tsx";
import util from "../../../../../intl/index.native.tsx";
import AccessibilityAnnouncer2 from "../../../../../../discord_common/js/packages/design/components/AccessibilityAnnouncer/AccessibilityAnnouncer.android.tsx";
import TableRow from "../../../../../design/components/TableRow/native/TableRow.native.tsx";
import ApplicationCommandUtils from "../../../../application_commands/ApplicationCommandUtils.tsx";
import ApplicationCommandTypes from "../../../../application_commands/ApplicationCommandTypes.tsx";
import AppLauncherUtils from "../../../utils/AppLauncherUtils.tsx";
import AppLauncherTypes from "../../../AppLauncherTypes.tsx";
import AppLauncherNativeUtils from "../../AppLauncherNativeUtils.tsx";
import usePlaceholderSize from "../../hooks/usePlaceholderSize.tsx";
import EntityBorderAppIconDefault from "../../base_components/EntityBorderAppIcon.tsx";
import CommandRowButton from "../../base_components/CommandRowButton.tsx";
import _slicedToArray from "../../../../../../_runtime/metro/00032__.js";
import noop from "../../../../../../_runtime/metro/00019__.js";

const CommandRowButtonDefault = CommandRowButton;

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
function keyExtractor(type, arg1) {
  if (type.type === obj.PLACERHOLDER) {
    let id = arg1.toString();
  } else {
    id = type.application.id;
  }
  return id;
}
const View = fn(17).View;
const getSection = fn(8827).getSection;
const FetchState = fn(11696).FetchState;
const AppLauncherNativeConstants = fn(1489);
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
const createStyles = fn(4896);
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
let ReactCompilerGating = fn(558);
let closure_20 = ReactCompilerGating.isReactCompilerEnabled()
  ? (arg0) => {
      const cResult = c.c(29);
      ({ context, command, application, onPress, isFirstRow, isLastRow, beforeExecuteCommand, onExecuteCommand } =
        arg0);
      if (cResult[0] !== application) {
        const appLauncherIconSource = AppLauncherNativeUtils.getAppLauncherIconSource(application);
        cResult[0] = application;
        cResult[1] = appLauncherIconSource;
        let tmp4 = appLauncherIconSource;
        const tmpResult = AppLauncherNativeUtils;
      } else {
        tmp4 = cResult[1];
      }
      if (cResult[2] !== tmp4) {
        let tmp8 = null != tmp4;
        if (tmp8) {
          const obj2 = { iconSource: tmp4 };
          tmp8 = v65535(EntityBorderAppIconDefault, obj2);
        }
        cResult[2] = tmp4;
        cResult[3] = tmp8;
        let tmp6 = tmp8;
      } else {
        tmp6 = cResult[3];
      }
      if (cResult[4] === beforeExecuteCommand) {
        if (cResult[5] === command) {
          if (cResult[6] === context) {
            if (cResult[7] === onExecuteCommand) {
              let tmp11 = cResult[8];
            }
            const commandRowSend = CommandRowButton.useCommandRowSend(tmp11);
            ({ hasOptions, sending, onPressSend } = commandRowSend);
            if (cResult[9] !== hasOptions) {
              let tmp14;
              if (!hasOptions) {
                const obj3 = { name: "send", label: null };
                const intl = util.intl;
                obj3.label = intl.string(util.t.TXNS7S);
                const items = [obj3];
                tmp14 = items;
              }
              cResult[9] = hasOptions;
              cResult[10] = tmp14;
              let tmp13 = tmp14;
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
              let tmp15 = fn;
            } else {
              tmp15 = cResult[12];
            }
            if (cResult[13] !== application) {
              const sectionName = AppLauncherUtils.getSectionName(application);
              cResult[13] = application;
              cResult[14] = sectionName;
              let tmp16 = sectionName;
              const tmpResult4 = AppLauncherUtils;
            } else {
              tmp16 = cResult[14];
            }
            if (cResult[15] === hasOptions) {
              if (cResult[16] === onPressSend) {
                if (cResult[17] === sending) {
                  let tmp18 = cResult[18];
                }
                if (cResult[19] === tmp13) {
                  if (cResult[20] === command.displayName) {
                    if (cResult[21] === tmp6) {
                      if (cResult[22] === isFirstRow) {
                        if (cResult[23] === isLastRow) {
                          if (cResult[24] === tmp15) {
                            if (cResult[25] === onPress) {
                              if (cResult[26] === tmp16) {
                                if (cResult[27] === tmp18) {
                                  let tmp22 = cResult[28];
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
                const obj4 = {
                  icon: tmp6,
                  label: command.displayName,
                  subLabel: tmp16,
                  subLabelLineClamp: 1,
                  start: isFirstRow,
                  end: isLastRow,
                  onPress,
                  accessibilityActions: tmp13,
                  onAccessibilityAction: tmp15,
                  trailing: tmp18,
                };
                const tmp24 = v65535(TableRow.TableRow, obj4);
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
            const tmp21 = v65535(CommandRowButtonDefault, obj5);
            cResult[15] = hasOptions;
            cResult[16] = onPressSend;
            cResult[17] = sending;
            cResult[18] = tmp21;
            tmp18 = tmp21;
            const tmpResult3 = CommandRowButton;
          }
        }
      }
      const obj6 = {
        command,
        context,
        beforeExecuteCommand,
        onExecuteCommand,
        sectionName: AppLauncherTypes.AppLauncherSectionName.SEARCH,
      };
      cResult[4] = beforeExecuteCommand;
      cResult[5] = command;
      cResult[6] = context;
      cResult[7] = onExecuteCommand;
      cResult[8] = obj6;
      tmp11 = obj6;
    }
  : (arg0) => {
      ({ command, application } = arg0);
      let hasOptions;
      let onPressSend;
      ({ context, onPress, isFirstRow, isLastRow, beforeExecuteCommand, onExecuteCommand } = arg0);
      const appLauncherIconSource = hasOptions(11679).getAppLauncherIconSource(application);
      let tmp4 = null != appLauncherIconSource;
      if (tmp4) {
        const obj2 = { iconSource: appLauncherIconSource };
        tmp4 = closure_10(onPressSend(11684), obj2);
      }
      obj = hasOptions(11679);
      const tmpResult = hasOptions(11743);
      const commandRowSend = tmpResult.useCommandRowSend({
        command,
        context,
        beforeExecuteCommand,
        onExecuteCommand,
        sectionName: hasOptions(8961).AppLauncherSectionName.SEARCH,
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
        sectionName: hasOptions(8961).AppLauncherSectionName.SEARCH,
      };
      obj4.subLabel = hasOptions(8826).getSectionName(application);
      obj4.start = isFirstRow;
      obj4.end = isLastRow;
      obj4.onPress = onPress;
      obj4.accessibilityActions = memo;
      obj4.onAccessibilityAction = callback;
      obj4.trailing = closure_10(onPressSend(11743), { hasOptions, sending: commandRowSend.sending, onPressSend });
      return closure_10(hasOptions(6000).TableRow, obj4);
    };
ReactCompilerGating = fn(558);
let closure_21 = ReactCompilerGating.isReactCompilerEnabled()
  ? (arg0) => {
      const cResult = c.c(19);
      ({ isFirstRow, isLastRow } = arg0);
      const tmp6 = closure_19();
      const placeholderWidth = usePlaceholderSize.usePlaceholderWidth(10, 50);
      const tmpResult = usePlaceholderSize;
      const placeholderWidth1 = usePlaceholderSize.usePlaceholderWidth(30, 90);
      if (cResult[0] !== tmp6.loadingCommandAppIcon) {
        const obj2 = { style: tmp6.loadingCommandAppIcon };
        const tmp12 = v65535(View, obj2);
        cResult[0] = tmp6.loadingCommandAppIcon;
        cResult[1] = tmp12;
        let tmp9 = tmp12;
      } else {
        tmp9 = cResult[1];
      }
      const combined = "" + placeholderWidth + "%";
      if (cResult[2] !== combined) {
        const obj3 = { width: combined };
        cResult[2] = combined;
        cResult[3] = obj3;
        let tmp14 = obj3;
      } else {
        tmp14 = cResult[3];
      }
      if (cResult[4] === tmp6.loadingTextPlaceholder) {
        if (cResult[5] === tmp14) {
          let tmp15 = cResult[6];
        }
        const _HermesInternal = HermesInternal;
        const combined1 = "" + placeholderWidth1 + "%";
        if (cResult[7] !== combined1) {
          const obj4 = { width: combined1 };
          cResult[7] = combined1;
          cResult[8] = obj4;
          let tmp18 = obj4;
        } else {
          tmp18 = cResult[8];
        }
        if (cResult[9] === tmp6.loadingTextPlaceholderSmall) {
          if (cResult[10] === tmp18) {
            let tmp19 = cResult[11];
          }
          const _Symbol = Symbol;
          if (cResult[12] === Symbol.for("react.memo_cache_sentinel")) {
            const fn = function x() {};
            cResult[12] = fn;
            let tmp23 = fn;
          } else {
            tmp23 = cResult[12];
          }
          if (cResult[13] === tmp4) {
            if (cResult[14] === tmp5) {
              if (cResult[15] === tmp9) {
                if (cResult[16] === tmp15) {
                  if (cResult[17] === tmp19) {
                    let tmp24 = cResult[18];
                  }
                  return tmp24;
                }
              }
            }
          }
          const obj5 = {
            icon: tmp9,
            label: tmp15,
            subLabel: tmp19,
            subLabelLineClamp: 1,
            start: tmp4,
            end: tmp5,
            onPress: tmp23,
          };
          const tmp26 = v65535(TableRow.TableRow, obj5);
          cResult[13] = tmp4;
          cResult[14] = tmp5;
          cResult[15] = tmp9;
          cResult[16] = tmp15;
          cResult[17] = tmp19;
          cResult[18] = tmp26;
          tmp24 = tmp26;
        }
        const obj6 = { style: null };
        const items = [tmp6.loadingTextPlaceholderSmall, tmp18];
        obj6.style = items;
        const tmp22 = v65535(View, obj6);
        cResult[9] = tmp6.loadingTextPlaceholderSmall;
        cResult[10] = tmp18;
        cResult[11] = tmp22;
        tmp19 = tmp22;
      }
      const obj7 = { style: null };
      const items1 = [tmp6.loadingTextPlaceholder, tmp14];
      obj7.style = items1;
      const tmp16 = v65535(View, obj7);
      cResult[4] = tmp6.loadingTextPlaceholder;
      cResult[5] = tmp14;
      cResult[6] = tmp16;
      tmp15 = tmp16;
      const tmpResult2 = usePlaceholderSize;
    }
  : (isFirstRow) => {
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
        icon: v65535(View, { style: tmp.loadingCommandAppIcon }),
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
      obj3.label = v65535(View, obj5);
      const obj7 = { style: null };
      const items1 = [tmp.loadingTextPlaceholderSmall];
      const obj6 = { width: "" + placeholderWidth + "%" };
      items1[1] = { width: "" + placeholderWidth1 + "%" };
      obj7.style = items1;
      obj3.subLabel = v65535(View, obj7);
      obj3.start = flag;
      obj3.end = flag2;
      obj3.onPress = function onPress() {};
      return v65535(TableRow.TableRow, obj3);
    };
ReactCompilerGating = fn(558);
let closure_22 = ReactCompilerGating.isReactCompilerEnabled()
  ? (arg0) => {
      const cResult = c.c(6);
      [tmp3, require] = noop.useState(false);
      if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
        const fn = function o() {
          require(false);
        };
        cResult[0] = fn;
        let first = fn;
      } else {
        first = cResult[0];
      }
      if (cResult[1] !== arg0) {
        const items = [arg0];
        cResult[1] = arg0;
        cResult[2] = items;
        let tmp5 = items;
      } else {
        tmp5 = cResult[2];
      }
      const effect = noop.useEffect(first, tmp5);
      if (cResult[3] === Symbol.for("react.memo_cache_sentinel")) {
        const fn2 = function l() {
          require((arg0) => !arg0);
        };
        cResult[3] = fn2;
        let tmp7 = fn2;
      } else {
        tmp7 = cResult[3];
      }
      if (cResult[4] !== tmp3) {
        const obj3 = { isCommandsExpanded: tmp3, toggleCommandsExpanded: tmp7 };
        cResult[4] = tmp3;
        cResult[5] = obj3;
        let tmp8 = obj3;
      } else {
        tmp8 = cResult[5];
      }
      return tmp8;
    }
  : (arg0) => {
      const tmp = _slicedToArray(noop.useState(false), 2);
      closure_0 = tmp[1];
      const items = [arg0];
      const effect = noop.useEffect(() => {
        closure_0(false);
      }, items);
      return {
        isCommandsExpanded: tmp[0],
        toggleCommandsExpanded: noop.useCallback(() => {
          closure_0((arg0) => !arg0);
        }, []),
      };
    };
let obj10 = { color: nativeDefault.colors.BACKGROUND_SURFACE_HIGH };
ReactCompilerGating = fn(558);
let closure_24 = ReactCompilerGating.isReactCompilerEnabled()
  ? (beforeExecuteCommand) => {
      const cResult = context(onPressCommand[10]).c(14);
      ({ commandData, context } = beforeExecuteCommand);
      beforeExecuteCommand = beforeExecuteCommand.beforeExecuteCommand;
      onPressCommand = beforeExecuteCommand.onPressCommand;
      const onExecuteCommand = beforeExecuteCommand.onExecuteCommand;
      const expanded = beforeExecuteCommand.expanded;
      if (cResult[0] === beforeExecuteCommand) {
        if (cResult[1] === commandData) {
          if (cResult[2] === context) {
            if (cResult[3] === onExecuteCommand) {
              if (cResult[4] === onPressCommand) {
                if (cResult[11] === expanded) {
                  if (cResult[12] === tmp3) {
                    let tmp7 = cResult[13];
                  }
                  return tmp7;
                }
                const obj2 = { items: cResult[5], expandedOverride: expanded, showsExpandCTAOverride: false };
                const tmp10 = closure_10(beforeExecuteCommand(tmp[32]), obj2);
                cResult[11] = expanded;
                cResult[12] = cResult[5];
                cResult[13] = tmp10;
                tmp7 = tmp10;
              }
            }
          }
        }
      }
      if (cResult[6] === beforeExecuteCommand) {
        if (cResult[7] === context) {
          if (cResult[8] === onExecuteCommand) {
            if (cResult[9] === onPressCommand) {
              let tmp4 = cResult[10];
            }
            const mapped = commandData.map(tmp4);
            cResult[0] = beforeExecuteCommand;
            cResult[1] = commandData;
            cResult[2] = context;
            cResult[3] = onExecuteCommand;
            cResult[4] = onPressCommand;
            cResult[5] = mapped;
          }
        }
      }
      const fn = function t(arg0, arg1) {
        closure_0 = arg1;
        if (arg0 === placeholder) {
          return (isLastRow) => v65535(closure_21, { isFirstRow: 0 === closure_0, isLastRow: isLastRow.isLastRow });
        } else {
          ({ command: beforeExecuteCommand, application: onPressCommand } = arg0);
          return (isLastRow) =>
            v65535(closure_20, {
              context,
              command,
              application,
              onPress() {
                return application(command, searchResultsPosition);
              },
              isFirstRow: 0 === searchResultsPosition,
              isLastRow: isLastRow.isLastRow,
              beforeExecuteCommand() {
                return command({ command, searchResultsPosition });
              },
              onExecuteCommand,
            });
        }
      };
      cResult[6] = beforeExecuteCommand;
      cResult[7] = context;
      cResult[8] = onExecuteCommand;
      cResult[9] = onPressCommand;
      cResult[10] = fn;
      tmp4 = fn;
      obj = context(onPressCommand[10]);
      tmp = onPressCommand;
    }
  : (expandedOverride) => {
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
                closure_3_10(closure_3_21, { isFirstRow: 0 === closure_0, isLastRow: isLastRow.isLastRow });
            } else {
              ({ command: closure_1, application: closure_2 } = item);
              return (isLastRow) =>
                closure_3_10(closure_3_20, {
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
      return closure_10(context(beforeExecuteCommand[32]), {
        items: items1,
        expandedOverride: expandedOverride.expanded,
        showsExpandCTAOverride: false,
      });
    };
size = fn(2);
let result = size.fileFinishedImporting(
  "modules/app_launcher/native/screens/search/SearchLocalAndGlobalContentView.tsx",
);

export const SearchLocalAndGlobalContentView = noop.forwardRef((context, arg1) => {
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
  c16 = undefined;
  let tmp = closure_19();
  _slicedToArray = tmp;
  const tmp4 = onScroll(entrypoint[20])();
  noop = tmp4;
  const tmp5 = commandResults();
  const navigation = tmp5;
  [query, setQuery] = noop.useState("");
  const imperativeHandle = noop.useImperativeHandle(arg1, () => ({ setQuery }));
  let id;
  if ("channel" === context.type) {
    id = context.channel.id;
  }
  const isActivitiesInTextEnabled = context(entrypoint[21]).useIsActivitiesInTextEnabled(id);
  let obj2 = context(entrypoint[21]);
  let obj3 = {
    context,
    query,
    commandLimit: 20,
    applicationLimit: 10,
    searchesActivities: null,
    searchesCommands: null,
    searchesBots: null,
  };
  const tmp9Result = context(entrypoint[22]);
  obj3.searchesActivities =
    entrypoint === context(entrypoint[13]).AppLauncherEntrypoint.VOICE || isActivitiesInTextEnabled;
  obj3.searchesCommands = entrypoint === context(entrypoint[13]).AppLauncherEntrypoint.TEXT;
  obj3.searchesBots = entrypoint === context(entrypoint[13]).AppLauncherEntrypoint.TEXT;
  const localSearchResults = tmp9Result.useLocalSearchResults(obj3);
  loading = localSearchResults.loading;
  commandResults = localSearchResults.commandResults;
  applicationResults = localSearchResults.applicationResults;
  const tmp12 = entrypoint === context(entrypoint[13]).AppLauncherEntrypoint.VOICE || isActivitiesInTextEnabled;
  const globalSearchResults = context(entrypoint[22]).useGlobalSearchResults({
    query,
    context,
    fetches: true,
    entrypoint,
  });
  fetchState = globalSearchResults.fetchState;
  applicationResults2 = globalSearchResults.applicationResults;
  fetchNextPage = globalSearchResults.fetchNextPage;
  const tmp15 = closure_22(query);
  const isCommandsExpanded = tmp15.isCommandsExpanded;
  let items = [context, entrypoint, tmp5, query];
  let items1 = [context, query];
  const callback = obj.useCallback((applicationId, searchResultsPosition) => {
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
  }, items);
  let items2 = [tmp5, context, query, entrypoint];
  const callback1 = obj.useCallback((command) => {
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
      getSection(context, command.applicationId).descriptor,
    );
    obj2.queryLength = query.length;
    obj2.sectionName = AppLauncherTypes.AppLauncherSectionName.SEARCH;
    obj2.query = query;
    obj2.searchResultsPosition = command.searchResultsPosition;
    obj.trackCommandSelected(obj2);
  }, items1);
  callback2 = obj.useCallback((arg0) => {
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
  }, items2);
  const items3 = [loading, commandResults];
  const memo = obj.useMemo(() => (loading ? closure_17 : commandResults), items3);
  const tmp9Result4 = context(entrypoint[22]);
  const items4 = [applicationResults, applicationResults2, loading, fetchState];
  memo1 = obj.useMemo(() => {
    const mapped = applicationResults.map((application) => ({ type: constants.LOCAL_APPLICATION, application }));
    new Set(applicationResults.map((id) => id.id));
    let items = applicationResults2;
    if (applicationResults2 == null) {
      items = [];
    }
    const found = items.filter((type) => {
      let tmp = type.type !== context(entrypoint[26]).ApplicationDirectorySearchResultType.CONNECTION;
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
  }, items4);
  const items5 = [query, commandResults.length, memo1.length, loading, fetchState];
  const effect = obj.useEffect(() => {
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
  }, items5);
  const items6 = [memo1.length, callback2, tmp4];
  let sum = onScroll(entrypoint[19])().bottom + loading;
  c16 = sum;
  const callback3 = obj.useCallback((arg0) => {
    ({ item, index } = arg0);
    let application;
    const type = item.type;
    if (fetchNextPage.PLACERHOLDER === type) {
      const obj2 = { isFirstRow: 0 === index, isLastRow: index === memo1.length - 1, style: null };
      const obj3 = { height };
      obj2.style = obj3;
      return applicationResults(onScroll(entrypoint[28]), obj2);
    } else {
      if (fetchNextPage.LOCAL_APPLICATION !== type) {
        if (fetchNextPage.GLOBAL_APPLICATION !== type) {
          return null;
        }
      }
      application = item.application;
      const appLauncherIconSource = context(entrypoint[11]).getAppLauncherIconSource(application);
      const obj4 = {
        application,
        iconSource: appLauncherIconSource,
        onPress() {
          return callback2({ section: application, installOnDemand: true, searchResultsPosition: index });
        },
        isFirstRow: 0 === index,
        isLastRow: index === memo1.length - 1,
      };
      return applicationResults(context(entrypoint[29]).BaseAppRow, obj4);
    }
  }, items6);
  const tmp19 = 0 === memo.length && 0 === memo1.length;
  const tmp9Result5 = context(entrypoint[25]);
  const appLauncherFlashListProps = context(entrypoint[30]).useAppLauncherFlashListProps();
  const items7 = [fetchNextPage, onScroll, tmp4];
  const items8 = [tmp.list, sum];
  const callback4 = obj.useCallback((nativeEvent) => {
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
  }, items7);
  const items9 = [sum];
  const memo2 = obj.useMemo(() => {
    obj = {};
    const merged = Object.assign(list.list);
    obj.paddingBottom = _undefined;
    return obj;
  }, items8);
  const memo3 = obj.useMemo(() => ({ bottom: _undefined }), items9);
  let tmp29Result = null;
  const tmp9Result6 = context(entrypoint[30]);
  if (0 !== memo.length) {
    let obj4 = { style: tmp.commandsHeaderContainer, children: null };
    const obj5 = {
      accessibilityRole: "header",
      variant: "text-md/medium",
      color: "text-default",
      style: tmp.sectionHeader,
      children: null,
    };
    const intl4 = tmp9(tmp3[15]).intl;
    obj5.children = intl4.string(tmp9(tmp3[15]).t["0hKkS+"]);
    const items10 = [tmp27(tmp9(tmp3[31]).Text, obj5)];
    if (memo.length <= tmp9(tmp3[32]).COLLAPSED_LIST_ITEM_MAX) {
      const obj6 = { children: null };
      items10[1] = null;
      obj4.children = items10;
      const items11 = [tmp29(tmp41, obj4)];
      const obj7 = {
        commandData: memo,
        context,
        beforeExecuteCommand: callback1,
        onPressCommand: callback,
        onExecuteCommand: context.onSend,
        expanded: isCommandsExpanded,
      };
      items11[1] = tmp27(closure_24, obj7);
      obj6.children = items11;
      tmp29Result = tmp29(tmp30, obj6);
    } else {
      const obj8 = {
        style: tmp.commandsCTA,
        underlayColor: tmp.commandsCTAUnderlayColor.color,
        accessibilityLabel: null,
        onPress: null,
        children: null,
      };
      let intl = tmp9(tmp3[15]).intl;
      const string = intl.string;
      const t = tmp9(tmp3[15]).t;
      if (isCommandsExpanded) {
        let stringResult = string(t.nPGLFQ);
      } else {
        stringResult = string(t.xal319);
      }
      obj8.accessibilityLabel = stringResult;
      obj8.onPress = tmp15.toggleCommandsExpanded;
      const intl2 = tmp9(tmp3[15]).intl;
      const string2 = intl2.string;
      let t2 = tmp9(tmp3[15]).t;
      if (isCommandsExpanded) {
        let string2Result = string2(t2.nPGLFQ);
      } else {
        string2Result = string2(t2.xal319);
      }
      const obj9 = { color: "text-brand", variant: "text-md/semibold", children: string2Result };
      t2 = tmp27(tmp9(tmp3[31]).Text, obj9);
      obj8.children = t2;
      tmp27(tmp9(tmp3[33]).AnimatedPressableHighlight, obj8);
    }
    tmp41 = navigation;
  }
  const items12 = [tmp29Result, , ,];
  let tmp27Result4 = null;
  if (memo.length > 0) {
    tmp27Result4 = null;
    if (memo1.length > 0) {
      const obj10 = { style: tmp.divider };
      tmp27Result4 = tmp27(navigation, obj10);
    }
  }
  items12[1] = tmp27Result4;
  let tmp27Result5 = null;
  if (0 !== memo1.length) {
    const obj11 = {
      accessibilityRole: "header",
      variant: "text-md/medium",
      color: "text-default",
      style: tmp.sectionHeader,
      children: null,
    };
    const intl3 = tmp9(tmp3[15]).intl;
    obj11.children = intl3.string(tmp9(tmp3[15]).t.PHjkRE);
    tmp27Result5 = tmp27(tmp9(tmp3[31]).Text, obj11);
  }
  items12[2] = tmp27Result5;
  let tmp27Result6 = null;
  if (tmp19) {
    const obj12 = { query, showsGenericMessage: entrypoint === tmp9(tmp3[13]).AppLauncherEntrypoint.VOICE };
    tmp27Result6 = tmp27(tmp2(tmp3[34]), obj12);
    const tmp2Result2 = tmp2(tmp3[34]);
  }
  const tmp2Result = onScroll(entrypoint[30]);
  items12[3] = tmp27Result6;
  return applicationResults(
    tmp2Result,
    {
      ListHeaderComponent: fetchState(applicationResults2, { children: items12 }),
      contentContainerStyle: memo2,
      scrollIndicatorInsets: memo3,
      renderItem: callback3,
      keyExtractor,
      data: memo1,
      keyboardDismissMode: "on-drag",
      keyboardShouldPersistTaps: "always",
      automaticallyAdjustsScrollIndicatorInsets: false,
      showsVerticalScrollIndicator: false,
      onViewableItemsChanged: tmp9Result5.useTrackSearchItems(callback2, memo1, query).handleViewableItemsChanged,
      preserveScrollMomentum: true,
      onScroll: callback4,
      animatedOnScroll: appLauncherFlashListProps.onScroll,
      ref: appLauncherFlashListProps.scrollerRef,
      simultaneousHandlers: appLauncherFlashListProps.gestureRef,
      animatedProps: appLauncherFlashListProps.animatedProps,
    },
    query,
  );
});
