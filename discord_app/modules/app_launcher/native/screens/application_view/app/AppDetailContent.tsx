// === Module 11753: AppDetailContent ===

// Module 11753 (AppDetailContent)
import c from "c" /* 576 */;
import nativeDefault from "native" /* 587 */;
import util from "util" /* 1126 */;
import PlatformUtils from "PlatformUtils" /* 1369 */;
import Text_Text from "Text/Text" /* 4886 */;
import AppAnalyticsUtils from "AppAnalyticsUtils" /* 5070 */;
import TableRow from "TableRow" /* 5993 */;
import ApplicationCommandUtils from "ApplicationCommandUtils" /* 7030 */;
import ApplicationCommandTypes from "ApplicationCommandTypes" /* 7034 */;
import AppLauncherUtils from "AppLauncherUtils" /* 8794 */;
import AppLauncherContext from "AppLauncherContext" /* 10994 */;
import AppLauncherNativeUtils from "AppLauncherNativeUtils" /* 11665 */;
import usePlaceholderSize from "usePlaceholderSize" /* 11668 */;
import CommandRowButtonDefault from "CommandRowButton" /* 11729 */;
import BillIcon from "BillIcon" /* 11760 */;
import ShopIcon from "ShopIcon" /* 11762 */;
import asyncGeneratorStep from "asyncGeneratorStep" /* 5 */;
import noop from "module_19" /* 19 */;

require = fn;
const View = fn(17).View;
const ApplicationCommandIndexStore = fn(8795);
({ useContextIndexState: closure_7, useUserIndexState: closure_8 } = ApplicationCommandIndexStore);
const AppLauncherNativeConstants = fn(1489);
const DEFAULT_CONTENT_PADDING = AppLauncherNativeConstants.DEFAULT_CONTENT_PADDING;
const useAppLauncherNavigation = AppLauncherNativeConstants.useAppLauncherNavigation;
const AnalyticEvents = fn(1085).AnalyticEvents;
let closure_12 = fn(5788).DISCOVERY_COMMANDS_QUERY_LIMIT;
const jsxProd = fn(21);
({ jsx: map1, jsxs: closure_14, Fragment: closure_15 } = jsxProd);
const createStyles = fn(4890);
let obj2 = { headerSpacer: { height: fn(11754).EXPANDED_HEADER_HEIGHT - fn(11754).SHEET_HANDLE_CONTAINER_HEIGHT }, list: { paddingHorizontal: DEFAULT_CONTENT_PADDING }, commandsHeaderContainer: { flexDirection: "row", justifyContent: "space-between", alignItems: "center", marginBottom: 8 }, commandsHeaderTextContainer: { alignItems: "center", flexDirection: "row", gap: 8 }, viewContainerStyle: null, mainContainerStyle: null, monetizationDisclosureTextStyle: null, monetizationDisclosureContainerStyle: null, monetizationDisclosureStyle: null, loadingTextPlaceholder: null, loadingTextPlaceholderSmall: null, noCommandsTextContainer: null };
let obj3 = { height: fn(11754).EXPANDED_HEADER_HEIGHT - fn(11754).SHEET_HANDLE_CONTAINER_HEIGHT };
obj2.viewContainerStyle = { borderRadius: nativeDefault.radii.lg };
let obj4 = { borderRadius: nativeDefault.radii.lg };
obj2.mainContainerStyle = { backgroundColor: nativeDefault.colors.CARD_BACKGROUND_DEFAULT, paddingHorizontal: 12, paddingVertical: 16 };
let obj5 = { backgroundColor: nativeDefault.colors.CARD_BACKGROUND_DEFAULT, paddingHorizontal: 12, paddingVertical: 16 };
obj2.monetizationDisclosureTextStyle = { marginLeft: nativeDefault.space.PX_4 };
let obj6 = { marginLeft: nativeDefault.space.PX_4 };
obj2.monetizationDisclosureContainerStyle = { flexDirection: "row", alignItems: "center", marginBottom: nativeDefault.space.PX_24, gap: nativeDefault.space.PX_16 };
obj2.monetizationDisclosureStyle = { flexDirection: "row", alignItems: "center" };
let obj7 = { flexDirection: "row", alignItems: "center", marginBottom: nativeDefault.space.PX_24, gap: nativeDefault.space.PX_16 };
obj2.loadingTextPlaceholder = { backgroundColor: nativeDefault.colors.BACKGROUND_MOD_SUBTLE, height: 16, marginBottom: 4, borderRadius: nativeDefault.radii.lg, alignSelf: "flex-start" };
let obj8 = { backgroundColor: nativeDefault.colors.BACKGROUND_MOD_SUBTLE, height: 16, marginBottom: 4, borderRadius: nativeDefault.radii.lg, alignSelf: "flex-start" };
obj2.loadingTextPlaceholderSmall = { backgroundColor: nativeDefault.colors.BACKGROUND_MOD_SUBTLE, height: 16, borderRadius: nativeDefault.radii.lg, alignSelf: "flex-start" };
obj2.noCommandsTextContainer = { alignItems: "center" };
let closure_16 = createStyles.createStyles(obj2);
let obj10 = { PLACEHOLDER: 0, [0]: "PLACEHOLDER", COMMAND: 1, [1]: "COMMAND" };
const array = new Array(6);
let closure_18 = array.fill({ type: obj10.PLACEHOLDER });
let ReactCompilerGating = fn(558);
let closure_19 = ReactCompilerGating.isReactCompilerEnabled() ? ((arg0) => {
  const cResult = c.c(15);
  ({ isFirstRow, isLastRow } = arg0);
  const tmp6 = closure_16();
  const placeholderWidth = usePlaceholderSize.usePlaceholderWidth(10, 50);
  const tmpResult = usePlaceholderSize;
  const placeholderWidth1 = usePlaceholderSize.usePlaceholderWidth(30, 90);
  const combined = "" + placeholderWidth + "%";
  if (cResult[0] !== combined) {
    const obj2 = { width: combined };
    cResult[0] = combined;
    cResult[1] = obj2;
    let tmp10 = obj2;
  } else {
    tmp10 = cResult[1];
  }
  if (cResult[2] === tmp6.loadingTextPlaceholder) {
    if (cResult[3] === tmp10) {
      let tmp11 = cResult[4];
    }
    const _HermesInternal = HermesInternal;
    const combined1 = "" + placeholderWidth1 + "%";
    if (cResult[5] !== combined1) {
      const obj3 = { width: combined1 };
      cResult[5] = combined1;
      cResult[6] = obj3;
      let tmp14 = obj3;
    } else {
      tmp14 = cResult[6];
    }
    if (cResult[7] === tmp6.loadingTextPlaceholderSmall) {
      if (cResult[8] === tmp14) {
        let tmp15 = cResult[9];
      }
      if (cResult[10] === tmp4) {
        if (cResult[11] === tmp5) {
          if (cResult[12] === tmp11) {
            if (cResult[13] === tmp15) {
              let tmp19 = cResult[14];
            }
            return tmp19;
          }
        }
      }
      const obj4 = { label: tmp11, subLabel: tmp15, subLabelLineClamp: 1, start: tmp4, end: tmp5 };
      const tmp21 = __initData2(TableRow.TableRow, obj4);
      cResult[10] = tmp4;
      cResult[11] = tmp5;
      cResult[12] = tmp11;
      cResult[13] = tmp15;
      cResult[14] = tmp21;
      tmp19 = tmp21;
    }
    const obj5 = { style: null };
    const items = [tmp6.loadingTextPlaceholderSmall, tmp14];
    obj5.style = items;
    const tmp18 = __initData2(View, obj5);
    cResult[7] = tmp6.loadingTextPlaceholderSmall;
    cResult[8] = tmp14;
    cResult[9] = tmp18;
    tmp15 = tmp18;
  }
  const obj6 = { style: null };
  const items1 = [tmp6.loadingTextPlaceholder, tmp10];
  obj6.style = items1;
  const tmp12 = __initData2(View, obj6);
  cResult[2] = tmp6.loadingTextPlaceholder;
  cResult[3] = tmp10;
  cResult[4] = tmp12;
  tmp11 = tmp12;
  const tmpResult2 = usePlaceholderSize;
}) : ((isFirstRow) => {
  let flag = isFirstRow.isFirstRow;
  if (flag === undefined) {
    flag = false;
  }
  let flag2 = isFirstRow.isLastRow;
  if (flag2 === undefined) {
    flag2 = false;
  }
  const tmp = closure_16();
  const placeholderWidth = usePlaceholderSize.usePlaceholderWidth(10, 50);
  const placeholderWidth1 = usePlaceholderSize.usePlaceholderWidth(30, 90);
  const obj3 = { label: null, subLabel: null, subLabelLineClamp: 1, start: null, end: null };
  const obj4 = { style: null };
  const items = [tmp.loadingTextPlaceholder, ];
  items[1] = { width: "" + placeholderWidth + "%" };
  obj4.style = items;
  obj3.label = __initData2(View, obj4);
  const obj6 = { style: null };
  const items1 = [tmp.loadingTextPlaceholderSmall, ];
  const obj5 = { width: "" + placeholderWidth + "%" };
  items1[1] = { width: "" + placeholderWidth1 + "%" };
  obj6.style = items1;
  obj3.subLabel = __initData2(View, obj6);
  obj3.start = flag;
  obj3.end = flag2;
  return __initData2(TableRow.TableRow, obj3);
});
ReactCompilerGating = fn(558);
const tmp5 = ReactCompilerGating.isReactCompilerEnabled() ? ((command) => {
  const cResult = require("c").c(43);
  command = command.command;
  _require = command;
  const onPressCommand = command.onPressCommand;
  ({ isFirstRow, isLastRow, context } = command);
  ({ onExecuteCommand, section } = command);
  const _location = command.location;
  ({ installOnDemand, sectionName } = command);
  const icon = command.icon;
  let obj = require("c");
  const entrypoint = require("AppLauncherContext").useAppLauncherContext().entrypoint;
  closure_8(true, true);
  onPressSend(context, true, true);
  if (cResult[0] === command) {
    if (cResult[1] === _location) {
      if (cResult[2] === section) {
        if (cResult[3] === sectionName) {
          let tmp6 = cResult[4];
        }
        if (cResult[5] === command.applicationId) {
          if (cResult[6] === command.integration_types) {
            if (cResult[7] === context) {
              if (cResult[8] === entrypoint) {
                if (cResult[9] === installOnDemand) {
                  if (cResult[10] === _location) {
                    if (cResult[11] === sectionName) {
                      let tmp7 = cResult[12];
                    }
                    if (cResult[13] === command) {
                      if (cResult[14] === context) {
                        if (cResult[15] === onExecuteCommand) {
                          if (cResult[16] === sectionName) {
                            if (cResult[17] === tmp6) {
                              if (cResult[18] === tmp7) {
                                let tmp9 = cResult[19];
                              }
                              const commandRowSend = tmp(section[18]).useCommandRowSend(tmp9);
                              ({ hasOptions, sending, onPressSend } = commandRowSend);
                              if (cResult[20] !== hasOptions) {
                                let tmp12;
                                if (!hasOptions) {
                                  let obj3 = { name: "send", label: null };
                                  const intl = tmp(section[19]).intl;
                                  obj3.label = intl.string(tmp(section[19]).t.TXNS7S);
                                  const items = [obj3];
                                  tmp12 = items;
                                }
                                cResult[20] = hasOptions;
                                cResult[21] = tmp12;
                                let tmp11 = tmp12;
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
                                let tmp13 = fn3;
                              } else {
                                tmp13 = cResult[23];
                              }
                              if (cResult[24] === command) {
                                if (cResult[25] === _location) {
                                  if (cResult[26] === onPressCommand) {
                                    if (cResult[27] === section) {
                                      let tmp14 = cResult[28];
                                    }
                                    if (cResult[29] === hasOptions) {
                                      if (cResult[30] === onPressSend) {
                                        if (cResult[31] === sending) {
                                          let tmp15 = cResult[32];
                                        }
                                        if (cResult[33] === tmp11) {
                                          if (cResult[34] === command.displayDescription) {
                                            if (cResult[35] === command.displayName) {
                                              if (cResult[36] === icon) {
                                                if (cResult[37] === isFirstRow) {
                                                  if (cResult[38] === isLastRow) {
                                                    if (cResult[39] === tmp13) {
                                                      if (cResult[40] === tmp14) {
                                                        if (cResult[41] === tmp15) {
                                                          let tmp19 = cResult[42];
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
                                        let obj4 = { start: isFirstRow, end: isLastRow, label: null, labelLineClamp: 1, subLabel: null, subLabelLineClamp: 1, icon: null, onPress: null, accessibilityActions: null, onAccessibilityAction: null, trailing: null };
                                        ({ displayName: obj7.label, displayDescription: obj7.subLabel } = command);
                                        obj4.icon = icon;
                                        obj4.onPress = tmp14;
                                        class M {
                                          constructor() {
                                            return onPressCommand(closure_0, section, location);
                                          }
                                        }
                                        obj4.onAccessibilityAction = tmp13;
                                        obj4.trailing = tmp15;
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
                                        return onPressCommand(closure_0, section, location);
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
                                  return onPressCommand(closure_0, section, location);
                                }
                              }
                              cResult[24] = command;
                              cResult[25] = _location;
                              cResult[26] = onPressCommand;
                              cResult[27] = section;
                              cResult[28] = M;
                              tmp14 = M;
                              const tmpResult = tmp(section[18]);
                            }
                          }
                        }
                      }
                    }
                    const obj6 = { command, context, beforeExecuteCommand: tmp6, onExecuteCommand, tryExecuteCommand: tmp7, sectionName };
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
          _require = _location(function*(arg0) {
            if (c3 === 2) {
              c3 = 3;
              throw new TypeError("Generator functions may not be called on executing generators");
            } else if (tmp4 === 3) {
              if (arg0 === 1) {
                throw value;
              } else if (arg0 === 2) {
                const obj2 = { value, done: true };
                return obj2;
              } else {
                return { value: "IconComponent", done: "IconComponent" };
              }
            } else {
              try {
                c3 = 2;
                if (0 === context) {
                  if (arg0 === 1) {
                    c3 = 3;
                    throw value;
                  } else if (arg0 === 2) {
                    c3 = 3;
                    const obj3 = { value, done: true };
                    return obj3;
                  } else {
                    closure_1 = tmp2;
                    closure_129_0 = command;
                    let channel;
                    const obj4 = { applicationId: command.applicationId, channel: null, commandIntegrationTypes: null, appLauncherContext: null };
                    if ("channel" === context.type) {
                      channel = context.channel;
                    }
                    obj4.channel = channel;
                    obj4.commandIntegrationTypes = command.integration_types;
                    const obj5 = { entrypoint, location: _location, sectionName };
                    obj4.appLauncherContext = obj5;
                    context = 1;
                    c3 = 1;
                    const obj7 = { value: command(section[17]).installApplicationOnDemandIfNeeded(obj4), done: false };
                    return obj7;
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
                    closure_129_0();
                  }
                  c3 = 3;
                  return { value: "IconComponent", done: "IconComponent" };
                }
              } catch (tmp13) {
                c3 = tmp;
                throw tmp13;
              }
            }
          });
          fn2 = function() {
            const self = this;
            const apply = closure_0.apply;
            if (typeof apply === "unknown") {
              let applyArgumentsResult = HermesBuiltin.applyArguments(self);
            } else {
              applyArgumentsResult = apply(self, arguments);
            }
            return applyArgumentsResult;
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
    const obj2 = { command, location: _location, triggerSection: null, sectionName: null };
    const obj = ApplicationCommandUtils;
    obj2.triggerSection = ApplicationCommandUtils.getCommandTriggerSection(section);
    obj2.sectionName = sectionName;
    return obj.trackCommandSelected(obj2);
  };
  cResult[0] = command;
  cResult[1] = _location;
  cResult[2] = section;
  cResult[3] = sectionName;
  cResult[4] = fn;
  tmp6 = fn;
  let obj2 = require("AppLauncherContext");
}) : ((command) => {
  command = command.command;
  _require = command;
  ({ onPressCommand: importDefault, context } = command);
  ({ section: dependencyMap, location: asyncGeneratorStep, sectionName } = command);
  let hasOptions;
  let onPressSend;
  ({ isFirstRow, isLastRow, onExecuteCommand, installOnDemand, icon } = command);
  const entrypoint = require("AppLauncherContext").useAppLauncherContext().entrypoint;
  onPressSend(true, true);
  hasOptions(context, true, true);
  let obj = require("AppLauncherContext");
  let tmp = _require;
  let obj3 = {
    command,
    context,
    beforeExecuteCommand() {
      const obj2 = { command, location: _location, triggerSection: null, sectionName: null };
      const obj = ApplicationCommandUtils;
      obj2.triggerSection = ApplicationCommandUtils.getCommandTriggerSection(dependencyMap);
      obj2.sectionName = sectionName;
      return obj.trackCommandSelected(obj2);
    },
    onExecuteCommand,
    tryExecuteCommand: null,
    sectionName: null
  };
  let fn;
  if (installOnDemand) {
    _require = asyncGeneratorStep(async (arg0) => {
      if (c3 === 2) {
        c3 = 3;
        throw new TypeError("Generator functions may not be called on executing generators");
      } else if (tmp4 === 3) {
        if (arg0 === 1) {
          throw value;
        } else if (arg0 === 2) {
          const obj2 = { value, done: true };
          return obj2;
        } else {
          return { value: "IconComponent", done: "IconComponent" };
        }
      } else {
        try {
          c3 = 2;
          if (0 === context) {
            if (arg0 === 1) {
              c3 = 3;
              throw value;
            } else if (arg0 === 2) {
              c3 = 3;
              const obj3 = { value, done: true };
              return obj3;
            } else {
              closure_1 = tmp2;
              closure_129_0 = command;
              let channel;
              const obj4 = { applicationId: command.applicationId, channel: null, commandIntegrationTypes: null, appLauncherContext: null };
              if ("channel" === context.type) {
                channel = context.channel;
              }
              obj4.channel = channel;
              obj4.commandIntegrationTypes = command.integration_types;
              const obj5 = { entrypoint, location: _location, sectionName };
              obj4.appLauncherContext = obj5;
              context = 1;
              c3 = 1;
              const obj7 = { value: command(dependencyMap[17]).installApplicationOnDemandIfNeeded(obj4), done: false };
              return obj7;
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
              closure_129_0();
            }
            c3 = 3;
            return { value: "IconComponent", done: "IconComponent" };
          }
        } catch (tmp13) {
          c3 = tmp;
          throw tmp13;
        }
      }
    });
    fn = function() {
      const self = this;
      const apply = closure_0.apply;
      if (typeof apply === "unknown") {
        let applyArgumentsResult = HermesBuiltin.applyArguments(self);
      } else {
        applyArgumentsResult = apply(self, arguments);
      }
      return applyArgumentsResult;
    };
  }
  obj3.tryExecuteCommand = fn;
  obj3.sectionName = sectionName;
  const commandRowSend = require("CommandRowButton").useCommandRowSend(obj3);
  hasOptions = commandRowSend.hasOptions;
  onPressSend = commandRowSend.onPressSend;
  let items = [hasOptions];
  const items1 = [onPressSend];
  const memo = sectionName.useMemo(() => {
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
  const callback = sectionName.useCallback((nativeEvent) => {
    if ("send" === nativeEvent.nativeEvent.actionName) {
      onPressSend();
    }
  }, items1);
  let obj2 = require("CommandRowButton");
  return closure_13(tmp(5993).TableRow, {
    start: isFirstRow,
    end: isLastRow,
    label: command.displayName,
    labelLineClamp: 1,
    subLabel: command.displayDescription,
    subLabelLineClamp: 1,
    icon,
    onPress() {
      return importDefault(closure_0, dependencyMap, _location);
    },
    accessibilityActions: memo,
    onAccessibilityAction: callback,
    trailing: closure_13(CommandRowButtonDefault, { hasOptions, sending: commandRowSend.sending, onPressSend })
  });
});
let closure_20 = tmp5;
const size = fn(2);
let result = size.fileFinishedImporting("modules/app_launcher/native/screens/application_view/app/AppDetailContent.tsx");

export default function AppDetailContent(context) {
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
  let navigation;
  let onPressCommand;
  let callback1;
  let found;
  c19 = undefined;
  ({ onPressBack, onActivityItemSelected } = context);
  const tmp = onPressCommand();
  closure_7 = tmp;
  const requiredAppLauncherContext = context(sectionName[15]).useRequiredAppLauncherContext();
  const chatInputRef = requiredAppLauncherContext.chatInputRef;
  const keyboardCloseReasonRef = requiredAppLauncherContext.keyboardCloseReasonRef;
  let obj = context(sectionName[15]);
  let obj3 = { context, filters: null, options: null, allowFetch: true };
  let obj4 = { commandTypes: null };
  let items = [context(sectionName[22]).ApplicationCommandType.CHAT];
  obj4.commandTypes = items;
  obj3.filters = obj4;
  obj3.options = { placeholderCount: 0, limit: loading, includeFrecency: true, allowApplicationState: installOnDemand, installOnDemand, applicationId: application.id };
  const discovery = installOnDemand(sectionName[21]).useDiscovery(obj3);
  const filterSection = discovery.filterSection;
  const sectionDescriptors = discovery.sectionDescriptors;
  loading = discovery.loading;
  const tmp7 = application(sectionName[23])({ sectionId: application.id, commandsByActiveSection: discovery.commandsByActiveSection });
  ({ setSortOrder: c13, commands } = tmp7);
  let canSort = tmp7.canSort;
  let result = chatInputRef(true, true).result;
  let tmp8;
  if (result != null) {
    tmp8 = result.sections[application.id];
  }
  let tmp10 = !loading;
  if (!loading) {
    tmp10 = 0 === commands.length;
  }
  let tmp11 = tmp10;
  if (tmp10) {
    tmp11 = tmp9;
  }
  if (tmp11) {
    tmp11 = !tmp4(tmp3[24]).isActivityApp(application);
    const tmp4Result = tmp4(tmp3[24]);
  }
  let items1 = [loading, commands, context.type];
  let items2 = [application.id, filterSection];
  const memo = onCommandExecuted.useMemo(() => {
    if ("channel" !== context.type) {
      let items = [];
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
  const tmp14 = filterSection();
  navigation = tmp14;
  const items3 = [context, entrypoint, installOnDemand, tmp14, onCommandExecuted, sectionDescriptors, sectionName];
  onPressCommand = onCommandExecuted.useCallback((command, section) => {
    let APP_LAUNCHER_APPLICATION_VIEW = arg2;
    if (arg2 === undefined) {
      APP_LAUNCHER_APPLICATION_VIEW = ApplicationCommandTypes.ApplicationCommandTriggerLocations.APP_LAUNCHER_APPLICATION_VIEW;
    }
    const result = AppLauncherNativeUtils.handleApplicationCommandSelected({ location: APP_LAUNCHER_APPLICATION_VIEW, context, command, section, sectionDescriptors, query: "", navigation, installOnDemand, sectionName, entrypoint, onCommandExecuted });
    const obj2 = { location: APP_LAUNCHER_APPLICATION_VIEW, context, command, section, sectionDescriptors, query: "", navigation, installOnDemand, sectionName, entrypoint, onCommandExecuted };
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
  const sum = application(sectionName[20])().bottom + keyboardCloseReasonRef;
  c19 = sum;
  const items6 = [application, , , ];
  ({ monetizationDisclosureContainerStyle: arr8[1], monetizationDisclosureStyle: arr8[2], monetizationDisclosureTextStyle: arr8[3] } = tmp);
  const callback2 = onCommandExecuted.useCallback((arg0) => {
    ({ item, index } = arg0);
    const type = item.type;
    if (obj10.PLACEHOLDER === type) {
      const obj2 = { isFirstRow: 0 === index, isLastRow: index === length.length - 1 };
      return __initData2(closure_19, obj2);
    } else if (tmp.COMMAND === type) {
      const obj = { command: item.command, onPressCommand, isFirstRow: 0 === index, isLastRow: index === commands.length - 1, context, onExecuteCommand: callback1, section: found, location: ApplicationCommandTypes.ApplicationCommandTriggerLocations.APP_LAUNCHER_APPLICATION_VIEW, installOnDemand, sectionName };
      return __initData2(closure_20, obj);
    } else {
      return null;
    }
  }, items5);
  const memo1 = onCommandExecuted.useMemo(() => {
    let isAndroidResult = PlatformUtils.isAndroid();
    if (isAndroidResult) {
      isAndroidResult = AppLauncherUtils.isApplicationMonetizedWithIAP(application);
      const tmpResult = AppLauncherUtils;
    }
    const result = AppLauncherUtils.isApplicationAdSupported(application);
    let tmp6 = null;
    if (result) {
      const obj2 = { style: closure_7.monetizationDisclosureStyle, children: null };
      const items = [__initData2(BillIcon.BillIcon, { size: "sm", color: "icon-muted" }), ];
      const obj3 = { style: closure_7.monetizationDisclosureTextStyle, variant: "text-xs/normal", color: "text-subtle", lineClamp: 1, children: null };
      const intl = util.intl;
      obj3.children = intl.string(util.t["5khEk8"]);
      items[1] = __initData2(Text_Text.Text, obj3);
      obj2.children = items;
      tmp6 = state(View, obj2);
    }
    let tmp11 = null;
    if (isAndroidResult) {
      const obj4 = { style: closure_7.monetizationDisclosureStyle, children: null };
      const items1 = [__initData2(ShopIcon.ShopIcon, { size: "sm", color: "icon-muted" }), ];
      const obj5 = { style: closure_7.monetizationDisclosureTextStyle, variant: "text-xs/normal", color: "text-subtle", lineClamp: 1, children: null };
      const intl2 = util.intl;
      obj5.children = intl2.string(util.t["8z5B2U"]);
      items1[1] = __initData2(Text_Text.Text, obj5);
      obj4.children = items1;
      tmp11 = state(View, obj4);
    }
    if (isAndroidResult) {
      const obj6 = { style: closure_7.monetizationDisclosureContainerStyle, children: null };
      const items2 = [tmp11, tmp6];
      obj6.children = items2;
      let tmp16 = state(View, obj6);
    } else {
      tmp16 = null;
    }
    return tmp16;
  }, items6);
  const items7 = [sum, tmp.list];
  const items8 = [sum];
  const memo2 = onCommandExecuted.useMemo(() => {
    const obj = {};
    const merged = Object.assign(closure_7.list);
    obj.paddingBottom = _undefined2;
    return obj;
  }, items7);
  const memo3 = onCommandExecuted.useMemo(() => ({ bottom: _undefined2 }), items8);
  let obj2 = installOnDemand(sectionName[21]);
  let obj5 = { placeholderCount: 0, limit: loading, includeFrecency: true, allowApplicationState: installOnDemand, installOnDemand, applicationId: application.id };
  let obj6 = { sectionId: application.id, commandsByActiveSection: discovery.commandsByActiveSection };
  tmp9 = null == tmp8;
  const appLauncherFlashListProps = context(sectionName[31]).useAppLauncherFlashListProps();
  const obj7 = { style: tmp.headerSpacer };
  const tmp4Result4 = context(sectionName[31]);
  const items9 = [c13(onAauth2Cancel, obj7), , , , , , ];
  const tmp2Result = application(sectionName[31]);
  if (tmp4Result5.isActivityApp(application)) {
    const obj8 = { application, context, sectionName, onActivityItemSelected, entrypoint, hasCommands: commands.length > 0 };
    let tmp26Result = tmp26(tmp2(tmp3[32]), obj8);
  } else {
    const obj9 = { application, viewContainerStyle: null, mainContainerStyle: null };
    ({ viewContainerStyle: obj11.viewContainerStyle, mainContainerStyle: obj11.mainContainerStyle } = tmp);
    tmp26Result = tmp26(tmp2(tmp3[33]), obj9);
  }
  items9[1] = tmp26Result;
  let num3 = 24;
  if (null != memo1) {
    num3 = tmp2(tmp3[10]).space.PX_16;
  }
  items9[2] = c13(context(sectionName[34]).Spacer, { size: num3 });
  items9[3] = memo1;
  let tmp26Result3 = commands.length > 1 && !loading;
  if (tmp26Result3) {
    tmp26Result3 = "channel" === context.type;
  }
  if (tmp26Result3) {
    obj10 = { context, allCommands: commands, onPressCommand, section: found, onExecuteCommand: callback1, installOnDemand, sectionName };
    tmp26Result3 = tmp26(tmp2(tmp3[35]), obj10);
  }
  items9[4] = tmp26Result3;
  let tmp26Result4 = null;
  if (tmp10) {
    tmp26Result4 = null;
    if (!tmp4Result6.isActivityApp(application)) {
      const obj12 = { style: tmp.noCommandsTextContainer, children: null };
      const obj13 = { variant: "text-sm/normal", color: "text-default", children: null };
      let intl = tmp4(tmp3[19]).intl;
      obj13.children = intl.string(tmp4(tmp3[19]).t["w8+YDM"]);
      obj12.children = tmp26(tmp4(tmp3[29]).Text, obj13);
      tmp26Result4 = tmp26(tmp28, obj12);
    }
    tmp4Result6 = tmp4(tmp3[24]);
  }
  items9[5] = tmp26Result4;
  let tmp24Result = null;
  if (!tmp10) {
    tmp24Result = null;
    if ("channel" === context.type) {
      const obj14 = { style: tmp.commandsHeaderContainer, children: null };
      const obj15 = { style: tmp.commandsHeaderTextContainer, children: null };
      const obj16 = { variant: "text-md/medium", color: "text-default", children: null };
      let intl2 = tmp4(tmp3[19]).intl;
      obj16.children = intl2.string(tmp4(tmp3[19]).t.GOXqks);
      obj15.children = tmp26(tmp4(tmp3[29]).Heading, obj16);
      const items10 = [tmp26(tmp28, obj15), ];
      if (canSort) {
        const obj17 = {
          sortOrder: tmp7.sortOrder,
          onSortOptionPress(dependencyMap) {
                  _undefined(dependencyMap);
                }
        };
        canSort = tmp26(tmp2(tmp3[36]), obj17);
      }
      items10[1] = canSort;
      obj14.children = items10;
      tmp24Result = tmp24(tmp28, obj14);
    }
  }
  tmp4Result5 = context(sectionName[24]);
  items9[6] = tmp24Result;
  let str3;
  if (loading) {
    str3 = "loading";
  }
  const obj19 = { children: null };
  const items11 = [
    c13(tmp2Result, { ListHeaderComponent: commands(navigation, { children: items9 }), contentContainerStyle: memo2, scrollIndicatorInsets: memo3, renderItem: callback2, data: memo, preserveScrollMomentum: true, lockableScrollableContentOffsetY, automaticallyAdjustsScrollIndicatorInsets: false, keyboardDismissMode: "none", animatedOnScroll: appLauncherFlashListProps.onScroll, ref: appLauncherFlashListProps.scrollerRef, simultaneousHandlers: appLauncherFlashListProps.gestureRef, animatedProps: appLauncherFlashListProps.animatedProps }, str3),
    c13(application(sectionName[9]), {
      application,
      onPressBack,
      scrollOffsetY: lockableScrollableContentOffsetY,
      showsAddCTA: tmp11,
      onAddAppMenuClick(installAppProps) {
        installAppProps = installAppProps.installAppProps;
        let obj2;
        application(sectionName[37]).hideActionSheet();
        keyboardCloseReasonRef.current = context(sectionName[15]).AppLauncherKeyboardCloseReason.OAUTH_MODAL;
        const current = chatInputRef.current;
        if (current != null) {
          current.closeCustomKeyboard();
        }
        obj2 = { location: context(sectionName[25]).ApplicationCommandTriggerLocations.APP_LAUNCHER_APPLICATION_VIEW_MORE_MENU, application_id: application.id, section_name: sectionName, source: entrypoint };
        if (null == installAppProps.customInstallUrl) {
          context(sectionName[38]).trackWithMetadata(sectionDescriptors.APP_LAUNCHER_OAUTH2_AUTHORIZE_OPENED, obj2);
          const tmp3Result = context(sectionName[38]);
        }
        let obj = application(sectionName[37]);
        const obj3 = {};
        const merged = Object.assign(installAppProps);
        obj3.source = "app_launcher_app_details";
        obj3.oauth2Callback = function oauth2Callback(canceled) {
          if (canceled.canceled) {
            if (onAauth2Cancel != null) {
              tmp7();
            }
          } else if (null != tmp) {
            AppAnalyticsUtils.trackWithMetadata(AnalyticEvents.APP_LAUNCHER_OAUTH2_AUTHORIZE_SUCCEEDED, obj2);
          }
        };
        context(sectionName[39]).installApplication(obj3);
        const tmp3Result2 = context(sectionName[39]);
      }
    })
  ];
  obj19.children = items11;
  return commands(navigation, obj19);
};
export const BETWEEN_SECTIONS_MARGIN = 24;
export const CommandRow = tmp5;