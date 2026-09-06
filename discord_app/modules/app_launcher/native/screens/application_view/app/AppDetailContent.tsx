// === Module 12129: AppDetailContent ===

// Module 12129 (AppDetailContent)
import nativeDefault from "native" /* 576 */;
import util from "util" /* 1114 */;
import PlatformUtils from "PlatformUtils" /* 1115 */;
import AppAnalyticsUtils from "AppAnalyticsUtils" /* 4740 */;
import TableRow from "TableRow" /* 5605 */;
import ApplicationCommandUtils from "ApplicationCommandUtils" /* 7521 */;
import ApplicationCommandTypes from "ApplicationCommandTypes" /* 7523 */;
import AppLauncherContext from "AppLauncherContext" /* 11215 */;
import AppLauncherNativeUtils from "AppLauncherNativeUtils" /* 12051 */;
import usePlaceholderSize from "usePlaceholderSize" /* 12054 */;
import CommandRowButtonDefault from "CommandRowButton" /* 12105 */;
import asyncGeneratorStep from "asyncGeneratorStep" /* 5 */;
import noop from "module_19" /* 19 */;

require = fn;
function PlaceholderCommandRow(isFirstRow) {
  let flag = isFirstRow.isFirstRow;
  if (flag === undefined) {
    flag = false;
  }
  let flag2 = isFirstRow.isLastRow;
  if (flag2 === undefined) {
    flag2 = false;
  }
  const tmp = closure_16();
  let obj = usePlaceholderSize;
  const placeholderWidth = obj.usePlaceholderWidth(10, 50);
  let obj1 = usePlaceholderSize;
  const placeholderWidth1 = obj1.usePlaceholderWidth(30, 90);
  obj = { label: null, subLabel: null, subLabelLineClamp: 1, start: null, end: null };
  obj = { style: null };
  const items = [tmp.loadingTextPlaceholder, ];
  obj1 = { width: "" + placeholderWidth + "%" };
  items[1] = obj1;
  obj.style = items;
  obj.label = map1(View, obj);
  const obj2 = { style: null };
  const items1 = [tmp.loadingTextPlaceholderSmall, { width: "" + placeholderWidth1 + "%" }];
  obj2.style = items1;
  obj.subLabel = map1(View, obj2);
  obj.start = flag;
  obj.end = flag2;
  return map1(TableRow.TableRow, obj);
}
class CommandRow {
  constructor(arg0) {
    command = global.command;
    closure_0 = command;
    ({ onPressCommand, context } = global);
    ({ section, location, sectionName } = global);
    entrypoint = undefined;
    hasOptions = undefined;
    onPressSend = undefined;
    tmp2 = section;
    ({ isFirstRow, isLastRow, onExecuteCommand, installOnDemand, icon } = global);
    tmp = closure_0;
    obj = closure_0(section[13]);
    entrypoint = obj.useAppLauncherContext().entrypoint;
    tmp3 = onPressSend(true, true);
    tmp4 = hasOptions(context, true, true);
    obj2 = closure_0(section[14]);
    obj = {
      command,
      context,
      beforeExecuteCommand() {
            const obj = { command, location: _location, triggerSection: ApplicationCommandUtils.getCommandTriggerSection(dependencyMap), sectionName };
            return obj.trackCommandSelected(obj);
          },
      onExecuteCommand,
      tryExecuteCommand: null,
      sectionName: null
    };
    fn = undefined;
    if (installOnDemand) {
      tmp5 = location;
      closure_0 = location(async (arg0, value) => {
        if (c3 === 2) {
          c3 = 3;
          throw new TypeError("Generator functions may not be called on executing generators");
        } else if (tmp4 === 3) {
          if (arg0 === 1) {
            throw value;
          } else if (arg0 === 2) {
            let obj = { value, done: true };
            return obj;
          } else {
            return { value: "HermesInternal", done: null };
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
                obj = { value, done: true };
                return obj;
              } else {
                closure_1 = tmp2;
                closure_129_0 = command;
                let channel;
                const obj1 = { applicationId: command.applicationId, channel: null, commandIntegrationTypes: null, appLauncherContext: null };
                if ("channel" === context.type) {
                  channel = context.channel;
                }
                obj1.channel = channel;
                obj1.commandIntegrationTypes = command.integration_types;
                const obj2 = { entrypoint, location: _location, sectionName };
                obj1.appLauncherContext = obj2;
                context = 1;
                c3 = 1;
                const obj3 = { value: command(dependencyMap[16]).installApplicationOnDemandIfNeeded(obj1), done: false };
                return obj3;
              }
            } else if (arg0 === 1) {
              c3 = 3;
              throw value;
            } else if (arg0 === 2) {
              c3 = 3;
              obj = { value, done: true };
              return obj;
            } else {
              if (value.isAuthorized) {
                closure_129_0();
              }
              c3 = 3;
              return { value: "HermesInternal", done: null };
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
    obj.tryExecuteCommand = fn;
    obj.sectionName = sectionName;
    commandRowSend = obj2.useCommandRowSend(obj);
    hasOptions = commandRowSend.hasOptions;
    onPressSend = commandRowSend.onPressSend;
    items = [];
    items[0] = hasOptions;
    items1 = [];
    items1[0] = onPressSend;
    memo = sectionName.useMemo(() => {
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
    callback = sectionName.useCallback((nativeEvent) => {
      if ("send" === nativeEvent.nativeEvent.actionName) {
        onPressSend();
      }
    }, items1);
    obj1 = {
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
      trailing: jsx(onPressCommand(tmp2[14]), { hasOptions, sending: commandRowSend.sending, onPressSend })
    };
    return jsx(tmp(tmp2[12]).TableRow, obj1);
  }
}
const View = fn(17).View;
const ApplicationCommandIndexStore = fn(9290);
({ useContextIndexState: closure_7, useUserIndexState: closure_8 } = ApplicationCommandIndexStore);
const AppLauncherNativeConstants = fn(1482);
const DEFAULT_CONTENT_PADDING = AppLauncherNativeConstants.DEFAULT_CONTENT_PADDING;
const useAppLauncherNavigation = AppLauncherNativeConstants.useAppLauncherNavigation;
const AnalyticEvents = fn(1074).AnalyticEvents;
let closure_12 = fn(4999).DISCOVERY_COMMANDS_QUERY_LIMIT;
const jsxProd = fn(21);
({ jsx: map1, jsxs: closure_14, Fragment: closure_15 } = jsxProd);
fn(4560);
let createStyles = { headerSpacer: null, list: null, commandsHeaderContainer: null, commandsHeaderTextContainer: null, viewContainerStyle: null, mainContainerStyle: null, monetizationDisclosureTextStyle: null, monetizationDisclosureContainerStyle: null, monetizationDisclosureStyle: null, loadingTextPlaceholder: null, loadingTextPlaceholderSmall: null, noCommandsTextContainer: null };
createStyles = { height: fn(12130).EXPANDED_HEADER_HEIGHT - fn(12130).SHEET_HANDLE_CONTAINER_HEIGHT };
createStyles.headerSpacer = createStyles;
createStyles.list = { paddingHorizontal: DEFAULT_CONTENT_PADDING };
createStyles.commandsHeaderContainer = { flexDirection: "row", justifyContent: "space-between", alignItems: "center", marginBottom: 8 };
createStyles.commandsHeaderTextContainer = { alignItems: "center", flexDirection: "row", gap: 8 };
createStyles.viewContainerStyle = { borderRadius: nativeDefault.radii.lg };
let obj1 = { borderRadius: nativeDefault.radii.lg };
createStyles.mainContainerStyle = { backgroundColor: nativeDefault.colors.CARD_BACKGROUND_DEFAULT, paddingHorizontal: 12, paddingVertical: 16 };
let obj2 = { backgroundColor: nativeDefault.colors.CARD_BACKGROUND_DEFAULT, paddingHorizontal: 12, paddingVertical: 16 };
createStyles.monetizationDisclosureTextStyle = { marginLeft: nativeDefault.space.PX_4 };
let obj3 = { marginLeft: nativeDefault.space.PX_4 };
createStyles.monetizationDisclosureContainerStyle = { flexDirection: "row", alignItems: "center", marginBottom: nativeDefault.space.PX_24, gap: nativeDefault.space.PX_16 };
createStyles.monetizationDisclosureStyle = { flexDirection: "row", alignItems: "center" };
let obj4 = { flexDirection: "row", alignItems: "center", marginBottom: nativeDefault.space.PX_24, gap: nativeDefault.space.PX_16 };
createStyles.loadingTextPlaceholder = { backgroundColor: nativeDefault.colors.BACKGROUND_MOD_SUBTLE, height: 16, marginBottom: 4, borderRadius: nativeDefault.radii.lg, alignSelf: "flex-start" };
let obj5 = { backgroundColor: nativeDefault.colors.BACKGROUND_MOD_SUBTLE, height: 16, marginBottom: 4, borderRadius: nativeDefault.radii.lg, alignSelf: "flex-start" };
createStyles.loadingTextPlaceholderSmall = { backgroundColor: nativeDefault.colors.BACKGROUND_MOD_SUBTLE, height: 16, borderRadius: nativeDefault.radii.lg, alignSelf: "flex-start" };
createStyles.noCommandsTextContainer = { alignItems: "center" };
let closure_16 = createStyles.createStyles(createStyles);
let obj7 = { PLACEHOLDER: 0, [0]: "PLACEHOLDER", COMMAND: 1, [1]: "COMMAND" };
const array = new Array(6);
let closure_18 = array.fill({ type: obj7.PLACEHOLDER });
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
  let obj = context(sectionName[13]);
  const requiredAppLauncherContext = obj.useRequiredAppLauncherContext();
  const chatInputRef = requiredAppLauncherContext.chatInputRef;
  const keyboardCloseReasonRef = requiredAppLauncherContext.keyboardCloseReasonRef;
  installOnDemand(sectionName[19]);
  obj = { context, filters: null, options: null, allowFetch: true };
  obj = { commandTypes: null };
  let items = [context(sectionName[20]).ApplicationCommandType.CHAT];
  obj.commandTypes = items;
  obj.filters = obj;
  let obj1 = { placeholderCount: 0, limit: loading, includeFrecency: true, allowApplicationState: installOnDemand, installOnDemand, applicationId: application.id };
  obj.options = obj1;
  const discovery = obj1.useDiscovery(obj);
  const filterSection = discovery.filterSection;
  const sectionDescriptors = discovery.sectionDescriptors;
  loading = discovery.loading;
  const tmp7 = application(sectionName[21])({ sectionId: application.id, commandsByActiveSection: discovery.commandsByActiveSection });
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
    let tmp4Result = tmp4(tmp3[22]);
    tmp11 = !tmp4Result.isEmbeddedApp(application);
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
    const obj = { location: APP_LAUNCHER_APPLICATION_VIEW, context, command, section, sectionDescriptors, query: "", navigation, installOnDemand, sectionName, entrypoint, onCommandExecuted };
    const result = obj.handleApplicationCommandSelected(obj);
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
  const sum = application(sectionName[18])().bottom + keyboardCloseReasonRef;
  c19 = sum;
  const items6 = [application, , , ];
  ({ monetizationDisclosureContainerStyle: arr8[1], monetizationDisclosureStyle: arr8[2], monetizationDisclosureTextStyle: arr8[3] } = tmp);
  const callback2 = onCommandExecuted.useCallback((arg0) => {
    ({ item, index } = arg0);
    const type = item.type;
    if (obj7.PLACEHOLDER === type) {
      let obj = { isFirstRow: 0 === index, isLastRow: index === length.length - 1 };
      return map1(PlaceholderCommandRow, obj);
    } else if (tmp.COMMAND === type) {
      obj = { command: item.command, onPressCommand, isFirstRow: 0 === index, isLastRow: index === commands.length - 1, context, onExecuteCommand: callback1, section: found, location: ApplicationCommandTypes.ApplicationCommandTriggerLocations.APP_LAUNCHER_APPLICATION_VIEW, installOnDemand, sectionName };
      return map1(CommandRow, obj);
    } else {
      return null;
    }
  }, items5);
  const memo1 = onCommandExecuted.useMemo(() => {
    let obj = PlatformUtils;
    let isAndroidResult = obj.isAndroid();
    if (isAndroidResult) {
      let tmpResult = tmp(9289);
      isAndroidResult = tmpResult.isApplicationMonetizedWithIAP(application);
    }
    tmpResult = tmp(9289);
    const result = tmpResult.isApplicationAdSupported(application);
    let tmp6 = null;
    if (result) {
      obj = { style: closure_7.monetizationDisclosureStyle, children: null };
      const items = [map1(tmp(12136).BillIcon, { size: "sm", color: "icon-muted" }), ];
      obj = { style: closure_7.monetizationDisclosureTextStyle, variant: "text-xs/normal", color: "text-subtle", lineClamp: 1, children: null };
      const intl = tmp(1114).intl;
      obj.children = intl.string(tmp(1114).t["5khEk8"]);
      items[1] = map1(tmp(4556).Text, obj);
      obj.children = items;
      tmp6 = closure_2_14(View, obj);
    }
    let tmp11 = null;
    if (isAndroidResult) {
      const obj1 = { style: closure_7.monetizationDisclosureStyle, children: null };
      const items1 = [map1(tmp(12138).ShopIcon, { size: "sm", color: "icon-muted" }), ];
      const obj2 = { style: closure_7.monetizationDisclosureTextStyle, variant: "text-xs/normal", color: "text-subtle", lineClamp: 1, children: null };
      const intl2 = tmp(1114).intl;
      obj2.children = intl2.string(tmp(1114).t["8z5B2U"]);
      items1[1] = map1(tmp(4556).Text, obj2);
      obj1.children = items1;
      tmp11 = closure_2_14(View, obj1);
    }
    if (isAndroidResult) {
      const obj3 = { style: closure_7.monetizationDisclosureContainerStyle, children: null };
      const items2 = [tmp11, tmp6];
      obj3.children = items2;
      let tmp16 = closure_2_14(View, obj3);
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
  tmp4Result = tmp4(tmp3[29]);
  const appLauncherFlashListProps = tmp4Result.useAppLauncherFlashListProps();
  const items9 = [c13(onAauth2Cancel, { style: tmp.headerSpacer }), , , , , , ];
  let obj2 = { sectionId: application.id, commandsByActiveSection: discovery.commandsByActiveSection };
  let obj3 = { style: tmp.headerSpacer };
  const tmp2Result = application(sectionName[29]);
  tmp9 = null == tmp8;
  if (tmp4Result1.isEmbeddedApp(application)) {
    const obj4 = { application, context, sectionName, onActivityItemSelected, entrypoint, hasCommands: commands.length > 0 };
    let tmp26Result = tmp26(tmp2(tmp3[30]), obj4);
  } else {
    const obj5 = { application, viewContainerStyle: null, mainContainerStyle: null };
    ({ viewContainerStyle: obj11.viewContainerStyle, mainContainerStyle: obj11.mainContainerStyle } = tmp);
    tmp26Result = tmp26(tmp2(tmp3[31]), obj5);
  }
  items9[1] = tmp26Result;
  let num3 = 24;
  if (null != memo1) {
    num3 = tmp2(tmp3[10]).space.PX_16;
  }
  items9[2] = c13(context(sectionName[32]).Spacer, { size: num3 });
  items9[3] = memo1;
  tmp26Result = commands.length > 1 && !loading;
  if (tmp26Result) {
    tmp26Result = "channel" === context.type;
  }
  if (tmp26Result) {
    const obj6 = { context, allCommands: commands, onPressCommand, section: found, onExecuteCommand: callback1, installOnDemand, sectionName };
    tmp26Result = tmp26(tmp2(tmp3[33]), obj6);
  }
  items9[4] = tmp26Result;
  let tmp26Result1 = null;
  if (tmp10) {
    tmp26Result1 = null;
    if (!tmp4Result2.isEmbeddedApp(application)) {
      obj7 = { style: tmp.noCommandsTextContainer, children: null };
      const obj8 = { variant: "text-sm/normal", color: "text-default", children: null };
      let intl = tmp4(tmp3[17]).intl;
      obj8.children = intl.string(tmp4(tmp3[17]).t["w8+YDM"]);
      obj7.children = tmp26(tmp4(tmp3[27]).Text, obj8);
      tmp26Result1 = tmp26(tmp28, obj7);
    }
    tmp4Result2 = tmp4(tmp3[22]);
  }
  items9[5] = tmp26Result1;
  let tmp24Result = null;
  if (!tmp10) {
    tmp24Result = null;
    if ("channel" === context.type) {
      const obj9 = { style: tmp.commandsHeaderContainer, children: null };
      const obj10 = { style: tmp.commandsHeaderTextContainer, children: null };
      const obj11 = { variant: "text-md/medium", color: "text-default", children: null };
      let intl2 = tmp4(tmp3[17]).intl;
      obj11.children = intl2.string(tmp4(tmp3[17]).t.GOXqks);
      obj10.children = tmp26(tmp4(tmp3[27]).Heading, obj11);
      const items10 = [tmp26(tmp28, obj10), ];
      if (canSort) {
        const obj12 = {
          sortOrder: tmp7.sortOrder,
          onSortOptionPress(dependencyMap) {
                  _undefined(dependencyMap);
                }
        };
        canSort = tmp26(tmp2(tmp3[34]), obj12);
      }
      items10[1] = canSort;
      obj9.children = items10;
      tmp24Result = tmp24(tmp28, obj9);
    }
  }
  tmp4Result1 = context(sectionName[22]);
  items9[6] = tmp24Result;
  let str3;
  if (loading) {
    str3 = "loading";
  }
  const obj14 = { children: null };
  const items11 = [
    c13(tmp2Result, { ListHeaderComponent: commands(navigation, { children: items9 }), contentContainerStyle: memo2, scrollIndicatorInsets: memo3, renderItem: callback2, data: memo, preserveScrollMomentum: true, lockableScrollableContentOffsetY, automaticallyAdjustsScrollIndicatorInsets: false, keyboardDismissMode: "none", animatedOnScroll: appLauncherFlashListProps.onScroll, ref: appLauncherFlashListProps.scrollerRef, simultaneousHandlers: appLauncherFlashListProps.gestureRef, animatedProps: appLauncherFlashListProps.animatedProps }, str3),
    c13(application(sectionName[9]), {
      application,
      onPressBack,
      scrollOffsetY: lockableScrollableContentOffsetY,
      showsAddCTA: tmp11,
      onAddAppMenuClick(installAppProps) {
        installAppProps = installAppProps.installAppProps;
        let obj = application(sectionName[35]);
        obj.hideActionSheet();
        keyboardCloseReasonRef.current = context(sectionName[13]).AppLauncherKeyboardCloseReason.OAUTH_MODAL;
        const current = chatInputRef.current;
        if (current != null) {
          current.closeCustomKeyboard();
        }
        obj = { location: tmp3(tmp[23]).ApplicationCommandTriggerLocations.APP_LAUNCHER_APPLICATION_VIEW_MORE_MENU, application_id: application.id, section_name: sectionName, source: entrypoint };
        if (null == installAppProps.customInstallUrl) {
          let tmp3Result = tmp3(tmp[36]);
          tmp3Result.trackWithMetadata(sectionDescriptors.APP_LAUNCHER_OAUTH2_AUTHORIZE_OPENED, obj);
        }
        tmp3Result = tmp3(tmp[37]);
        obj = {};
        const merged = Object.assign(installAppProps);
        obj.source = "app_launcher_app_details";
        obj.oauth2Callback = function oauth2Callback(canceled) {
          if (canceled.canceled) {
            if (onAauth2Cancel != null) {
              tmp7();
            }
          } else if (null != tmp) {
            obj = AppAnalyticsUtils;
            obj.trackWithMetadata(AnalyticEvents.APP_LAUNCHER_OAUTH2_AUTHORIZE_SUCCEEDED, obj);
          }
        };
        tmp3Result.installApplication(obj);
      }
    })
  ];
  obj14.children = items11;
  return commands(navigation, obj14);
};
export const BETWEEN_SECTIONS_MARGIN = 24;
export { CommandRow };