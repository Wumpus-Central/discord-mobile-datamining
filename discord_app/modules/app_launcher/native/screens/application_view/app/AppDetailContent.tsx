// === Module 11753: AppDetailContent ===

// Module 11753 (AppDetailContent)
import react_native from "react-native" /* 17 */;
import react2 from "react" /* 576 */;
import nativeDefault from "native" /* 587 */;
import Constants from "Constants" /* 1085 */;
import intl3 from "intl" /* 1126 */;
import PlatformUtils from "PlatformUtils" /* 1369 */;
import Text_Text from "Text/Text" /* 4886 */;
import AppAnalyticsUtils from "AppAnalyticsUtils" /* 5070 */;
import ApplicationCommandConstants from "ApplicationCommandConstants" /* 5788 */;
import TableRow2 from "TableRow" /* 5993 */;
import ApplicationCommandUtils from "ApplicationCommandUtils" /* 7030 */;
import ApplicationCommandTypes from "ApplicationCommandTypes" /* 7034 */;
import AppLauncherUtils from "AppLauncherUtils" /* 8794 */;
import AppLauncherContext from "AppLauncherContext" /* 10994 */;
import AppLauncherNativeUtils from "AppLauncherNativeUtils" /* 11665 */;
import usePlaceholderSize from "usePlaceholderSize" /* 11668 */;
import CommandRowButtonDefault from "CommandRowButton" /* 11729 */;
import Header from "Header" /* 11754 */;
import BillIcon from "BillIcon" /* 11760 */;
import ShopIcon from "ShopIcon" /* 11762 */;
import _asyncToGenerator from "_asyncToGenerator" /* 5 */;
import react from "react" /* 19 */;
import ApplicationCommandIndexStore from "ApplicationCommandIndexStore" /* 8795 */;
import AppLauncherNativeConstants from "AppLauncherNativeConstants" /* 1489 */;
import Fragment from "Fragment" /* 21 */;
import createStyles_mod from "createStyles" /* 4890 */;
import ReactCompilerGating_mod from "ReactCompilerGating" /* 558 */;
import size from "module_2" /* 2 */;

let c2, c3, command, navigation;

let closure_14;
let closure_15;
let map1;
let metroImportAll;
let metroImportDefault;
let obj2;
let obj3;
let obj4;
let obj5;
let obj6;
let obj7;
let obj8;
const View = react_native.View;
({ useContextIndexState: metroImportDefault, useUserIndexState: metroImportAll } = ApplicationCommandIndexStore);
const DEFAULT_CONTENT_PADDING = AppLauncherNativeConstants.DEFAULT_CONTENT_PADDING;
const useAppLauncherNavigation = AppLauncherNativeConstants.useAppLauncherNavigation;
const AnalyticEvents = Constants.AnalyticEvents;
let closure_12 = ApplicationCommandConstants.DISCOVERY_COMMANDS_QUERY_LIMIT;
({ jsx: map1, jsxs: closure_14, Fragment: closure_15 } = Fragment);
let createStyles = createStyles_mod;
let obj = { headerSpacer: obj2, list: { paddingHorizontal: DEFAULT_CONTENT_PADDING }, commandsHeaderContainer: { flexDirection: "row", justifyContent: "space-between", alignItems: "center", marginBottom: 8 }, commandsHeaderTextContainer: { alignItems: "center", flexDirection: "row", gap: 8 }, viewContainerStyle: obj3, mainContainerStyle: obj4, monetizationDisclosureTextStyle: obj5, monetizationDisclosureContainerStyle: obj6, monetizationDisclosureStyle: { flexDirection: "row", alignItems: "center" }, loadingTextPlaceholder: obj7, loadingTextPlaceholderSmall: obj8, noCommandsTextContainer: { alignItems: "center" } };
obj2 = { height: Header.EXPANDED_HEADER_HEIGHT - Header.SHEET_HANDLE_CONTAINER_HEIGHT };
createStyles = createStyles.createStyles;
obj3 = { borderRadius: nativeDefault.radii.lg };
obj4 = { backgroundColor: nativeDefault.colors.CARD_BACKGROUND_DEFAULT, paddingHorizontal: 12, paddingVertical: 16 };
obj5 = { marginLeft: nativeDefault.space.PX_4 };
obj6 = { flexDirection: "row", alignItems: "center", marginBottom: nativeDefault.space.PX_24, gap: nativeDefault.space.PX_16 };
obj7 = { backgroundColor: nativeDefault.colors.BACKGROUND_MOD_SUBTLE, height: 16, marginBottom: 4, borderRadius: nativeDefault.radii.lg, alignSelf: "flex-start" };
obj8 = { backgroundColor: nativeDefault.colors.BACKGROUND_MOD_SUBTLE, height: 16, borderRadius: nativeDefault.radii.lg, alignSelf: "flex-start" };
let closure_16 = createStyles(obj);
let obj9 = { PLACEHOLDER: 0, [0]: "PLACEHOLDER", COMMAND: 1, [1]: "COMMAND" };
const array = new Array(6);
const obj10 = { type: obj9.PLACEHOLDER };
let closure_18 = array.fill(obj10);
let ReactCompilerGating = ReactCompilerGating_mod;
let closure_19 = ReactCompilerGating.isReactCompilerEnabled() ? ((arg0) => {
  let isFirstRow;
  let isLastRow;
  let items;
  let items1;
  let tmp10;
  const obj = react2;
  const cResult = obj.c(15);
  ({ isFirstRow, isLastRow } = arg0);
  const tmp6 = closure_16();
  const tmpResult = usePlaceholderSize;
  const placeholderWidth = tmpResult.usePlaceholderWidth(10, 50);
  const tmpResult2 = usePlaceholderSize;
  const placeholderWidth1 = tmpResult2.usePlaceholderWidth(30, 90);
  const combined = "" + placeholderWidth + "%";
  if (cResult[0] !== combined) {
    const obj2 = { width: combined };
    cResult[0] = combined;
    cResult[1] = obj2;
    tmp10 = obj2;
  } else {
    tmp10 = cResult[1];
  }
  if (cResult[2] === tmp6.loadingTextPlaceholder) {
    let tmp11;
    let tmp14;
    if (cResult[3] === tmp10) {
      tmp11 = cResult[4];
    }
    const _HermesInternal = HermesInternal;
    const combined1 = "" + placeholderWidth1 + "%";
    if (cResult[5] !== combined1) {
      const obj3 = { width: combined1 };
      cResult[5] = combined1;
      cResult[6] = obj3;
      tmp14 = obj3;
    } else {
      tmp14 = cResult[6];
    }
    if (cResult[7] === tmp6.loadingTextPlaceholderSmall) {
      let tmp15;
      if (cResult[8] === tmp14) {
        tmp15 = cResult[9];
      }
      if (cResult[10] === (undefined !== isFirstRow && isFirstRow)) {
        if (cResult[11] === (undefined !== isLastRow && isLastRow)) {
          if (cResult[12] === tmp11) {
            let tmp19;
            if (cResult[13] === tmp15) {
              tmp19 = cResult[14];
            }
            return tmp19;
          }
        }
      }
      const obj4 = { label: tmp11, subLabel: tmp15, subLabelLineClamp: 1, start: undefined !== isFirstRow && isFirstRow, end: undefined !== isLastRow && isLastRow };
      const tmp21 = map1(TableRow2.TableRow, obj4);
      cResult[10] = undefined !== isFirstRow && isFirstRow;
      cResult[11] = undefined !== isLastRow && isLastRow;
      cResult[12] = tmp11;
      cResult[13] = tmp15;
      cResult[14] = tmp21;
      tmp19 = tmp21;
    }
    const obj5 = { style: items };
    items = [tmp6.loadingTextPlaceholderSmall, tmp14];
    const tmp18 = map1(View, obj5);
    cResult[7] = tmp6.loadingTextPlaceholderSmall;
    cResult[8] = tmp14;
    cResult[9] = tmp18;
    tmp15 = tmp18;
  }
  const obj6 = { style: items1 };
  items1 = [tmp6.loadingTextPlaceholder, tmp10];
  const tmp12 = map1(View, obj6);
  cResult[2] = tmp6.loadingTextPlaceholder;
  cResult[3] = tmp10;
  cResult[4] = tmp12;
  tmp11 = tmp12;
}) : ((isFirstRow) => {
  let items;
  let items1;
  let obj4;
  let obj6;
  let flag = isFirstRow.isFirstRow;
  if (flag === undefined) {
    flag = false;
  }
  let flag2 = isFirstRow.isLastRow;
  if (flag2 === undefined) {
    flag2 = false;
  }
  const tmp = closure_16();
  const obj = usePlaceholderSize;
  const placeholderWidth = obj.usePlaceholderWidth(10, 50);
  const obj2 = usePlaceholderSize;
  const placeholderWidth1 = obj2.usePlaceholderWidth(30, 90);
  const obj3 = { label: map1(View, obj4), subLabel: map1(View, obj6), subLabelLineClamp: 1, start: flag, end: flag2 };
  obj4 = { style: items };
  items = [tmp.loadingTextPlaceholder, ];
  const obj5 = { width: "" + placeholderWidth + "%" };
  const TableRow = TableRow2.TableRow;
  items[1] = obj5;
  obj6 = { style: items1 };
  items1 = [tmp.loadingTextPlaceholderSmall, { width: "" + placeholderWidth1 + "%" }];
  ({ width: "" + placeholderWidth1 + "%" });
  return map1(TableRow, obj3);
});
ReactCompilerGating = ReactCompilerGating_mod;
let tmp6 = ReactCompilerGating.isReactCompilerEnabled() ? ((command) => {
  let context;
  let hasOptions;
  let installOnDemand;
  let intl;
  let isFirstRow;
  let isLastRow;
  let onExecuteCommand;
  let onPressSend;
  let section;
  let sectionName;
  let sending;
  const tmp = command;
  let obj = command(section[12]);
  const cResult = obj.c(43);
  command = command.command;
  const onPressCommand = command.onPressCommand;
  ({ isFirstRow, isLastRow, context } = command);
  ({ onExecuteCommand, section } = command);
  const _location = command.location;
  ({ installOnDemand, sectionName } = command);
  const icon = command.icon;
  let obj2 = command(section[15]);
  const entrypoint = obj2.useAppLauncherContext().entrypoint;
  closure_8(true, true);
  onPressSend(context, true, true);
  if (cResult[0] === command) {
    if (cResult[1] === _location) {
      if (cResult[2] === section) {
        let tmp6;
        if (cResult[3] === sectionName) {
          tmp6 = cResult[4];
        }
        if (cResult[5] === command.applicationId) {
          if (cResult[6] === command.integration_types) {
            if (cResult[7] === context) {
              if (cResult[8] === entrypoint) {
                if (cResult[9] === installOnDemand) {
                  if (cResult[10] === _location) {
                    let tmp7;
                    if (cResult[11] === sectionName) {
                      tmp7 = cResult[12];
                    }
                    if (cResult[13] === command) {
                      if (cResult[14] === context) {
                        if (cResult[15] === onExecuteCommand) {
                          if (cResult[16] === sectionName) {
                            if (cResult[17] === tmp6) {
                              let tmp9;
                              let tmp11;
                              let tmp13;
                              if (cResult[18] === tmp7) {
                                tmp9 = cResult[19];
                              }
                              const tmpResult = tmp(section[18]);
                              const commandRowSend = tmpResult.useCommandRowSend(tmp9);
                              ({ hasOptions, sending, onPressSend } = commandRowSend);
                              if (cResult[20] !== hasOptions) {
                                let tmp12;
                                if (!hasOptions) {
                                  let obj3 = { name: "send", label: intl.string(tmp(section[19]).t.TXNS7S) };
                                  intl = tmp(section[19]).intl;
                                  const items = [obj3];
                                  tmp12 = items;
                                }
                                cResult[20] = hasOptions;
                                cResult[21] = tmp12;
                                tmp11 = tmp12;
                              } else {
                                tmp11 = cResult[21];
                              }
                              if (cResult[22] !== onPressSend) {
                                const fn3 = function v(nativeEvent) {
                                  if ("send" === nativeEvent.nativeEvent.actionName) {
                                    onPressSend();
                                  }
                                };
                                cResult[22] = onPressSend;
                                cResult[23] = fn3;
                                tmp13 = fn3;
                              } else {
                                tmp13 = cResult[23];
                              }
                              if (cResult[24] === command) {
                                if (cResult[25] === _location) {
                                  if (cResult[26] === onPressCommand) {
                                    let tmp14;
                                    if (cResult[27] === section) {
                                      tmp14 = cResult[28];
                                    }
                                    if (cResult[29] === hasOptions) {
                                      if (cResult[30] === onPressSend) {
                                        let tmp15;
                                        if (cResult[31] === sending) {
                                          tmp15 = cResult[32];
                                        }
                                        if (cResult[33] === tmp11) {
                                          if (cResult[34] === command.displayDescription) {
                                            if (cResult[35] === command.displayName) {
                                              if (cResult[36] === icon) {
                                                if (cResult[37] === isFirstRow) {
                                                  if (cResult[38] === isLastRow) {
                                                    if (cResult[39] === tmp13) {
                                                      if (cResult[40] === tmp14) {
                                                        let tmp19;
                                                        if (cResult[41] === tmp15) {
                                                          tmp19 = cResult[42];
                                                        }
                                                        return tmp19;
                                                      }
                                                    }
                                                  }
                                                }
                                              }
                                            }
                                          }
                                        }
                                        let obj4 = { start: isFirstRow, end: isLastRow, label: null, labelLineClamp: 1, subLabel: null, subLabelLineClamp: 1, icon, onPress: tmp14, accessibilityActions: null, onAccessibilityAction: tmp13, trailing: tmp15 };
                                        ({ displayName: obj7.label, displayDescription: obj7.subLabel } = command);
                                        class M {
                                          constructor() {
                                            return onPressCommand(command, section, _location);
                                          }
                                        }
                                        const tmp21 = closure_13(tmp(section[14]).TableRow, obj4);
                                        cResult[33] = tmp11;
                                        cResult[34] = command.displayDescription;
                                        cResult[35] = command.displayName;
                                        cResult[36] = icon;
                                        cResult[37] = isFirstRow;
                                        cResult[38] = isLastRow;
                                        cResult[39] = tmp13;
                                        cResult[40] = tmp14;
                                        cResult[41] = tmp15;
                                        cResult[42] = tmp21;
                                        tmp19 = tmp21;
                                      }
                                    }
                                    let obj5 = { hasOptions, sending, onPressSend };
                                    const tmp18 = closure_13(onPressCommand(section[18]), obj5);
                                    class M {
                                      constructor() {
                                        return onPressCommand(command, section, _location);
                                      }
                                    }
                                    cResult[30] = onPressSend;
                                    cResult[31] = sending;
                                    cResult[32] = tmp18;
                                    tmp15 = tmp18;
                                  }
                                }
                              }
                              class M {
                                constructor() {
                                  return onPressCommand(command, section, _location);
                                }
                              }
                              cResult[24] = command;
                              cResult[25] = _location;
                              cResult[26] = onPressCommand;
                              cResult[27] = section;
                              cResult[28] = M;
                              tmp14 = M;
                            }
                          }
                        }
                      }
                    }
                    let obj6 = { command, context, beforeExecuteCommand: tmp6, onExecuteCommand, tryExecuteCommand: tmp7, sectionName };
                    cResult[14] = context;
                    cResult[15] = onExecuteCommand;
                    cResult[16] = sectionName;
                    cResult[17] = tmp6;
                    cResult[18] = tmp7;
                    cResult[19] = obj6;
                    tmp9 = obj6;
                  }
                }
              }
            }
          }
        }
        let fn2;
        if (installOnDemand) {
          let closure_0 = _location(function*(arg0) {
            let obj5;
            closure_0 = arg0;
            if (c3 === 2) {
              c3 = 3;
              throw new TypeError("Generator functions may not be called on executing generators");
            } else if (tmp3 === 3) {
              if (arg0 === 1) {
                throw value;
              } else if (arg0 === 2) {
                const obj2 = { value, done: true };
                return obj2;
              } else {
                return { value: "IconComponent", done: null };
              }
            } else {
              try {
                c3 = 2;
                if (0 === c2) {
                  if (arg0 === 1) {
                    c3 = 3;
                    throw value;
                  } else if (arg0 === 2) {
                    c3 = 3;
                    const obj3 = { value, done: true };
                    return obj3;
                  } else {
                    let closure_1 = tmp;
                    let channel;
                    const obj4 = { applicationId: closure_0.applicationId, channel, commandIntegrationTypes: closure_0.integration_types, appLauncherContext: obj5 };
                    const installApplicationOnDemandIfNeeded = closure_0(section[17]).installApplicationOnDemandIfNeeded;
                    const tmp19 = closure_0(section[17]);
                    if ("channel" === c2.type) {
                      channel = c2.channel;
                    }
                    obj5 = { entrypoint, location: _location, sectionName };
                    c2 = 1;
                    c3 = 1;
                    const obj6 = { value: installApplicationOnDemandIfNeeded(obj4), done: false };
                    return obj6;
                  }
                } else if (arg0 === 1) {
                  c3 = 3;
                  throw value;
                } else if (arg0 === 2) {
                  c3 = 3;
                  const obj = { value, done: true };
                  return obj;
                } else {
                  if (value.isAuthorized) {
                    closure_0();
                  }
                  c3 = 3;
                  return { value: "IconComponent", done: null };
                }
              } catch (tmp12) {
                c3 = 3;
                throw tmp12;
              }
            }
          });
          fn2 = function() {
            return closure_0(...arguments);
          };
        }
        cResult[5] = command.applicationId;
        cResult[6] = command.integration_types;
        cResult[7] = context;
        cResult[8] = entrypoint;
        cResult[9] = installOnDemand;
        cResult[10] = _location;
        cResult[11] = sectionName;
        cResult[12] = fn2;
        tmp7 = fn2;
      }
    }
  }
  const fn = function o() {
    let obj2;
    const obj = { command, location: _location, triggerSection: obj2.getCommandTriggerSection(section), sectionName };
    const trackCommandSelected = ApplicationCommandUtils.trackCommandSelected;
    ApplicationCommandUtils;
    obj2 = ApplicationCommandUtils;
    return trackCommandSelected(obj);
  };
  cResult[0] = command;
  cResult[1] = _location;
  cResult[2] = section;
  cResult[3] = sectionName;
  cResult[4] = fn;
  tmp6 = fn;
}) : ((command) => {
  let _location;
  let context;
  let fn;
  let icon;
  let installOnDemand;
  let isFirstRow;
  let isLastRow;
  let onExecuteCommand;
  let sectionName;
  command = command.command;
  ({ onPressCommand: importDefault, context } = command);
  ({ section: dependencyMap, location: _asyncToGenerator, sectionName } = command);
  let hasOptions;
  let onPressSend;
  ({ isFirstRow, isLastRow, onExecuteCommand, installOnDemand, icon } = command);
  let tmp = command;
  let obj = command(10994);
  const entrypoint = obj.useAppLauncherContext().entrypoint;
  const tmp3 = onPressSend(true, true);
  hasOptions(context, true, true);
  let obj2 = {
    command,
    context,
    beforeExecuteCommand() {
      let obj2;
      const obj = { command, location: _asyncToGenerator, triggerSection: obj2.getCommandTriggerSection(dependencyMap), sectionName };
      const trackCommandSelected = ApplicationCommandUtils.trackCommandSelected;
      ApplicationCommandUtils;
      obj2 = ApplicationCommandUtils;
      return trackCommandSelected(obj);
    },
    onExecuteCommand,
    tryExecuteCommand: fn,
    sectionName
  };
  fn = undefined;
  const useCommandRowSend = command(11729).useCommandRowSend;
  const tmp5 = command(11729);
  if (installOnDemand) {
    let closure_0 = _asyncToGenerator(async (arg0) => {
      let obj5;
      closure_0 = arg0;
      if (c3 === 2) {
        c3 = 3;
        throw new TypeError("Generator functions may not be called on executing generators");
      } else if (tmp3 === 3) {
        if (arg0 === 1) {
          throw value;
        } else if (arg0 === 2) {
          const obj2 = { value, done: true };
          return obj2;
        } else {
          return { value: "IconComponent", done: null };
        }
      } else {
        try {
          c3 = 2;
          if (0 === c2) {
            if (arg0 === 1) {
              c3 = 3;
              throw value;
            } else if (arg0 === 2) {
              c3 = 3;
              const obj3 = { value, done: true };
              return obj3;
            } else {
              let closure_1 = tmp;
              let channel;
              const obj4 = { applicationId: closure_0.applicationId, channel, commandIntegrationTypes: closure_0.integration_types, appLauncherContext: obj5 };
              const installApplicationOnDemandIfNeeded = closure_0(dependencyMap[17]).installApplicationOnDemandIfNeeded;
              const tmp19 = closure_0(dependencyMap[17]);
              if ("channel" === c2.type) {
                channel = c2.channel;
              }
              obj5 = { entrypoint, location: _location, sectionName };
              c2 = 1;
              c3 = 1;
              const obj6 = { value: installApplicationOnDemandIfNeeded(obj4), done: false };
              return obj6;
            }
          } else if (arg0 === 1) {
            c3 = 3;
            throw value;
          } else if (arg0 === 2) {
            c3 = 3;
            const obj = { value, done: true };
            return obj;
          } else {
            if (value.isAuthorized) {
              closure_0();
            }
            c3 = 3;
            return { value: "IconComponent", done: null };
          }
        } catch (tmp12) {
          c3 = 3;
          throw tmp12;
        }
      }
    });
    fn = function() {
      return closure_0(...arguments);
    };
  }
  const commandRowSend = useCommandRowSend(obj2);
  hasOptions = commandRowSend.hasOptions;
  onPressSend = commandRowSend.onPressSend;
  let items = [hasOptions];
  const sending = commandRowSend.sending;
  const items1 = [onPressSend];
  const memo = sectionName.useMemo(() => {
    let intl;
    let tmp;
    if (!hasOptions) {
      const obj = { name: "send", label: intl.string(intl3.t.TXNS7S) };
      intl = intl3.intl;
      const items = [obj];
      tmp = items;
    }
    return tmp;
  }, items);
  const callback = sectionName.useCallback((nativeEvent) => {
    if ("send" === nativeEvent.nativeEvent.actionName) {
      onPressSend();
    }
  }, items1);
  let obj3 = {
    start: isFirstRow,
    end: isLastRow,
    label: command.displayName,
    labelLineClamp: 1,
    subLabel: command.displayDescription,
    subLabelLineClamp: 1,
    icon,
    onPress() {
      return importDefault(command, dependencyMap, _asyncToGenerator);
    },
    accessibilityActions: memo,
    onAccessibilityAction: callback,
    trailing: closure_13(CommandRowButtonDefault, { hasOptions, sending, onPressSend })
  };
  const TableRow = tmp(5993).TableRow;
  return closure_13(TableRow, obj3);
});
let closure_20 = tmp6;
let result = size.fileFinishedImporting("modules/app_launcher/native/screens/application_view/app/AppDetailContent.tsx");

export default function AppDetailContent(context) {
  let Heading;
  let Text;
  let _undefined;
  let _undefined2;
  let c13;
  let commands;
  let installOnDemand;
  let intl;
  let intl2;
  let items;
  let items10;
  let items11;
  let lockableScrollableContentOffsetY;
  let obj12;
  let obj15;
  let obj3;
  let obj4;
  let onActivityItemSelected;
  let onPressBack;
  let tmp27Result;
  context = context.context;
  const application = context.application;
  ({ lockableScrollableContentOffsetY, installOnDemand } = context);
  const sectionName = context.sectionName;
  const entrypoint = context.entrypoint;
  const onCommandExecuted = context.onCommandExecuted;
  const onAauth2Cancel = context.onAauth2Cancel;
  let loading;
  c13 = undefined;
  commands = undefined;
  navigation = undefined;
  let onPressCommand;
  let callback1;
  let found;
  let c19;
  ({ onPressBack, onActivityItemSelected } = context);
  const tmp = onPressCommand();
  let closure_7 = tmp;
  const bottom = application(sectionName[20])().bottom;
  let obj = context(sectionName[15]);
  const requiredAppLauncherContext = obj.useRequiredAppLauncherContext();
  const chatInputRef = requiredAppLauncherContext.chatInputRef;
  const keyboardCloseReasonRef = requiredAppLauncherContext.keyboardCloseReasonRef;
  let tmp6 = installOnDemand(sectionName[21]);
  let obj2 = { context, filters: obj3, options: obj4, allowFetch: true };
  obj3 = { commandTypes: items };
  const useDiscovery = tmp6.useDiscovery;
  items = [context(sectionName[22]).ApplicationCommandType.CHAT];
  obj4 = { placeholderCount: 0, limit: loading, includeFrecency: true, allowApplicationState: installOnDemand, installOnDemand, applicationId: application.id };
  const discovery = useDiscovery(obj2);
  const filterSection = discovery.filterSection;
  const sectionDescriptors = discovery.sectionDescriptors;
  loading = discovery.loading;
  let obj5 = { sectionId: application.id, commandsByActiveSection: discovery.commandsByActiveSection };
  const tmp8 = application(sectionName[23])(obj5);
  ({ setSortOrder: c13, commands } = tmp8);
  let canSort = tmp8.canSort;
  const sortOrder = tmp8.sortOrder;
  let result = chatInputRef(true, true).result;
  let tmp9;
  if (result != null) {
    tmp9 = result.sections[application.id];
  }
  let tmp11 = !loading;
  const tmp10 = null == tmp9;
  if (!loading) {
    tmp11 = 0 === commands.length;
  }
  let tmp12 = tmp11 && tmp10;
  if (tmp12) {
    const tmp4Result = context(sectionName[24]);
    tmp12 = !tmp4Result.isActivityApp(application);
  }
  let items1 = [loading, commands, context.type];
  let items2 = [application.id, filterSection];
  const memo = onCommandExecuted.useMemo(() => {
    let items;
    if ("channel" !== context.type) {
      items = [];
    } else if (loading) {
      items = closure_18;
    } else {
      items = commands.map((command) => ({ type: constants.COMMAND, command }));
    }
    return items;
  }, items1);
  const effect = onCommandExecuted.useEffect(() => {
    filterSection(application.id);
  }, items2);
  const tmp15 = filterSection();
  navigation = tmp15;
  const items3 = [context, entrypoint, installOnDemand, tmp15, onCommandExecuted, sectionDescriptors, sectionName];
  onPressCommand = onCommandExecuted.useCallback((command, section) => {
    let APP_LAUNCHER_APPLICATION_VIEW = arg2;
    if (arg2 === undefined) {
      APP_LAUNCHER_APPLICATION_VIEW = ApplicationCommandTypes.ApplicationCommandTriggerLocations.APP_LAUNCHER_APPLICATION_VIEW;
    }
    const obj = AppLauncherNativeUtils;
    const obj2 = { location: APP_LAUNCHER_APPLICATION_VIEW, context, command, section, sectionDescriptors, query: "", navigation, installOnDemand, sectionName, entrypoint, onCommandExecuted };
    const result = obj.handleApplicationCommandSelected(obj2);
  }, items3);
  const items4 = [chatInputRef, keyboardCloseReasonRef, onCommandExecuted];
  callback1 = onCommandExecuted.useCallback(() => {
    const current = chatInputRef.current;
    if (current != null) {
      current.closeCustomKeyboard();
    }
    keyboardCloseReasonRef.current = AppLauncherContext.AppLauncherKeyboardCloseReason.COMMAND;
    if (onCommandExecuted != null) {
      onCommandExecuted();
    }
  }, items4);
  found = sectionDescriptors.find((id) => id.id === application.id);
  const items5 = [onPressCommand, commands.length, context, callback1, found, installOnDemand, sectionName];
  const sum = bottom + keyboardCloseReasonRef;
  c19 = sum;
  const items6 = [application, , , ];
  ({ monetizationDisclosureContainerStyle: arr8[1], monetizationDisclosureStyle: arr8[2], monetizationDisclosureTextStyle: arr8[3] } = tmp);
  const callback2 = onCommandExecuted.useCallback((arg0) => {
    let index;
    let item;
    ({ item, index } = arg0);
    const type = item.type;
    if (obj9.PLACEHOLDER === type) {
      const obj2 = { isFirstRow: 0 === index, isLastRow: index === found.length - 1 };
      return map1(closure_19, obj2);
    } else if (tmp.COMMAND === type) {
      const obj = { command: item.command, onPressCommand, isFirstRow: 0 === index, isLastRow: index === commands.length - 1, context, onExecuteCommand: callback1, section: found, location: ApplicationCommandTypes.ApplicationCommandTriggerLocations.APP_LAUNCHER_APPLICATION_VIEW, installOnDemand, sectionName };
      return map1(closure_20, obj);
    } else {
      return null;
    }
  }, items5);
  const memo1 = onCommandExecuted.useMemo(() => {
    let intl;
    let intl2;
    let items;
    let items1;
    let items2;
    let tmp16;
    const obj = PlatformUtils;
    let isAndroidResult = obj.isAndroid();
    if (isAndroidResult) {
      const tmpResult = AppLauncherUtils;
      isAndroidResult = tmpResult.isApplicationMonetizedWithIAP(application);
    }
    const tmpResult2 = AppLauncherUtils;
    const result = tmpResult2.isApplicationAdSupported(application);
    let tmp6 = null;
    if (result) {
      const obj2 = { style: closure_7.monetizationDisclosureStyle, children: items };
      items = [map1(BillIcon.BillIcon, { size: "sm", color: "icon-muted" }), ];
      const obj3 = { style: closure_7.monetizationDisclosureTextStyle, variant: "text-xs/normal", color: "text-subtle", lineClamp: 1, children: intl.string(intl3.t["5khEk8"]) };
      const Text = Text_Text.Text;
      intl = intl3.intl;
      items[1] = map1(Text, obj3);
      tmp6 = authStore2(View, obj2);
    }
    let tmp11 = null;
    if (isAndroidResult) {
      const obj4 = { style: closure_7.monetizationDisclosureStyle, children: items1 };
      items1 = [map1(ShopIcon.ShopIcon, { size: "sm", color: "icon-muted" }), ];
      const obj5 = { style: closure_7.monetizationDisclosureTextStyle, variant: "text-xs/normal", color: "text-subtle", lineClamp: 1, children: intl2.string(intl3.t["8z5B2U"]) };
      const Text2 = Text_Text.Text;
      intl2 = intl3.intl;
      items1[1] = map1(Text2, obj5);
      tmp11 = authStore2(View, obj4);
    }
    if (isAndroidResult) {
      const obj6 = { style: closure_7.monetizationDisclosureContainerStyle, children: items2 };
      items2 = [tmp11, tmp6];
      tmp16 = authStore2(View, obj6);
    } else {
      tmp16 = null;
    }
    return tmp16;
  }, items6);
  const items7 = [sum, tmp.list];
  const items8 = [sum];
  const memo2 = onCommandExecuted.useMemo(() => {
    const obj = { paddingBottom: _undefined2 };
    const merged = Object.assign(closure_7.list);
    return obj;
  }, items7);
  const memo3 = onCommandExecuted.useMemo(() => ({ bottom: _undefined2 }), items8);
  const tmp4Result4 = context(sectionName[31]);
  const appLauncherFlashListProps = tmp4Result4.useAppLauncherFlashListProps();
  let obj6 = { style: tmp.headerSpacer };
  const items9 = [, , , , , , ];
  const tmp2Result = application(sectionName[31]);
  items9[0] = c13(onAauth2Cancel, obj6);
  const tmp4Result5 = context(sectionName[24]);
  if (tmp4Result5.isActivityApp(application)) {
    const obj7 = { application, context, sectionName, onActivityItemSelected, entrypoint, hasCommands: commands.length > 0 };
    tmp27Result = tmp27(tmp2(tmp3[32]), obj7);
  } else {
    const obj8 = { application, viewContainerStyle: null, mainContainerStyle: null };
    ({ viewContainerStyle: obj10.viewContainerStyle, mainContainerStyle: obj10.mainContainerStyle } = tmp);
    tmp27Result = tmp27(tmp2(tmp3[33]), obj8);
  }
  items9[1] = tmp27Result;
  let num3 = 24;
  const Spacer = tmp4(tmp3[34]).Spacer;
  if (null != memo1) {
    num3 = tmp2(tmp3[10]).space.PX_16;
  }
  items9[2] = c13(Spacer, { size: num3 });
  items9[3] = memo1;
  let tmp27Result3 = commands.length > 1 && !loading && "channel" === context.type;
  if (tmp27Result3) {
    obj9 = { context, allCommands: commands, onPressCommand, section: found, onExecuteCommand: callback1, installOnDemand, sectionName };
    tmp27Result3 = tmp27(tmp2(tmp3[35]), obj9);
  }
  items9[4] = tmp27Result3;
  let tmp27Result4 = null;
  if (tmp11) {
    tmp27Result4 = null;
    const tmp4Result6 = context(sectionName[24]);
    if (!tmp4Result6.isActivityApp(application)) {
      const obj11 = { style: tmp.noCommandsTextContainer, children: c13(Text, obj12) };
      obj12 = { variant: "text-sm/normal", color: "text-default", children: intl.string(context(sectionName[19]).t["w8+YDM"]) };
      Text = tmp4(tmp3[29]).Text;
      intl = tmp4(tmp3[19]).intl;
      tmp27Result4 = tmp27(tmp29, obj11);
    }
  }
  items9[5] = tmp27Result4;
  let tmp25Result = null;
  if (!tmp11) {
    tmp25Result = null;
    if ("channel" === context.type) {
      const obj13 = { style: tmp.commandsHeaderContainer, children: items10 };
      const obj14 = { style: tmp.commandsHeaderTextContainer, children: c13(Heading, obj15) };
      obj15 = { variant: "text-md/medium", color: "text-default", children: intl2.string(context(sectionName[19]).t.GOXqks) };
      Heading = tmp4(tmp3[29]).Heading;
      intl2 = tmp4(tmp3[19]).intl;
      items10 = [c13(onAauth2Cancel, obj14), ];
      if (canSort) {
        const obj16 = {
          sortOrder,
          onSortOptionPress(dependencyMap) {
                  _undefined(dependencyMap);
                }
        };
        canSort = tmp27(tmp2(tmp3[36]), obj16);
      }
      items10[1] = canSort;
      tmp25Result = tmp25(tmp29, obj13);
    }
  }
  items9[6] = tmp25Result;
  let str3;
  const obj17 = { ListHeaderComponent: commands(navigation, { children: items9 }), contentContainerStyle: memo2, scrollIndicatorInsets: memo3, renderItem: callback2, data: memo, preserveScrollMomentum: true, lockableScrollableContentOffsetY, automaticallyAdjustsScrollIndicatorInsets: false, keyboardDismissMode: "none", animatedOnScroll: appLauncherFlashListProps.onScroll, ref: appLauncherFlashListProps.scrollerRef, simultaneousHandlers: appLauncherFlashListProps.gestureRef, animatedProps: appLauncherFlashListProps.animatedProps };
  if (loading) {
    str3 = "loading";
  }
  const obj18 = { children: items11 };
  items11 = [c13(tmp2Result, obj17, str3), ];
  const obj19 = {
    application,
    onPressBack,
    scrollOffsetY: lockableScrollableContentOffsetY,
    showsAddCTA: tmp12,
    onAddAppMenuClick(installAppProps) {
      installAppProps = installAppProps.installAppProps;
      let obj2;
      let obj = application(sectionName[37]);
      obj.hideActionSheet();
      keyboardCloseReasonRef.current = context(sectionName[15]).AppLauncherKeyboardCloseReason.OAUTH_MODAL;
      const current = chatInputRef.current;
      if (current != null) {
        current.closeCustomKeyboard();
      }
      obj2 = { location: context(sectionName[25]).ApplicationCommandTriggerLocations.APP_LAUNCHER_APPLICATION_VIEW_MORE_MENU, application_id: application.id, section_name: sectionName, source: entrypoint };
      if (null == installAppProps.customInstallUrl) {
        const tmp3Result = context(sectionName[38]);
        tmp3Result.trackWithMetadata(sectionDescriptors.APP_LAUNCHER_OAUTH2_AUTHORIZE_OPENED, obj2);
      }
      const obj3 = {
        source: "app_launcher_app_details",
        oauth2Callback(canceled) {
          if (canceled.canceled) {
            if (onAauth2Cancel != null) {
              tmp7();
            }
          } else if (null != tmp) {
            const obj = AppAnalyticsUtils;
            obj.trackWithMetadata(AnalyticEvents.APP_LAUNCHER_OAUTH2_AUTHORIZE_SUCCEEDED, obj2);
          }
        }
      };
      const installApplication = context(sectionName[39]).installApplication;
      context(sectionName[39]);
      const merged = Object.assign(installAppProps);
      installApplication(obj3);
    }
  };
  items11[1] = c13(application(sectionName[9]), obj19);
  return commands(navigation, obj18);
};
export const BETWEEN_SECTIONS_MARGIN = 24;
export const CommandRow = tmp6;