// === Module 12382: AppDetailContent ===

// Module 12382 (AppDetailContent)
import nativeDefault from "native" /* 576 */;
import util from "util" /* 1115 */;
import PlatformUtils from "PlatformUtils" /* 1364 */;
import Text_Text from "Text/Text" /* 4752 */;
import AppAnalyticsUtils from "AppAnalyticsUtils" /* 4936 */;
import TableRow from "TableRow" /* 5822 */;
import ApplicationCommandUtils from "ApplicationCommandUtils" /* 7763 */;
import ApplicationCommandTypes from "ApplicationCommandTypes" /* 7765 */;
import AppLauncherUtils from "AppLauncherUtils" /* 9403 */;
import AppLauncherContext from "AppLauncherContext" /* 11481 */;
import AppLauncherNativeUtils from "AppLauncherNativeUtils" /* 12304 */;
import usePlaceholderSize from "usePlaceholderSize" /* 12307 */;
import CommandRowButtonDefault from "CommandRowButton" /* 12358 */;
import BillIcon from "BillIcon" /* 12389 */;
import ShopIcon from "ShopIcon" /* 12391 */;
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
  const placeholderWidth = usePlaceholderSize.usePlaceholderWidth(10, 50);
  const placeholderWidth1 = usePlaceholderSize.usePlaceholderWidth(30, 90);
  const obj3 = { label: null, subLabel: null, subLabelLineClamp: 1, start: null, end: null };
  const obj4 = { style: null };
  const items = [tmp.loadingTextPlaceholder, ];
  items[1] = { width: "" + placeholderWidth + "%" };
  obj4.style = items;
  obj3.label = map1(View, obj4);
  const obj6 = { style: null };
  const items1 = [tmp.loadingTextPlaceholderSmall, ];
  const obj5 = { width: "" + placeholderWidth + "%" };
  items1[1] = { width: "" + placeholderWidth1 + "%" };
  obj6.style = items1;
  obj3.subLabel = map1(View, obj6);
  obj3.start = flag;
  obj3.end = flag2;
  return map1(TableRow.TableRow, obj3);
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
    obj1 = {
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
    fn = undefined;
    if (installOnDemand) {
      tmp5 = location;
      closure_0 = location(async (arg0) => {
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
                const obj7 = { value: command(dependencyMap[16]).installApplicationOnDemandIfNeeded(obj4), done: false };
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
    obj1.tryExecuteCommand = fn;
    obj1.sectionName = sectionName;
    commandRowSend = obj2.useCommandRowSend(obj1);
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
    obj5 = {
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
    return jsx(tmp(tmp2[12]).TableRow, obj5);
  }
}
const View = fn(17).View;
const ApplicationCommandIndexStore = fn(9404);
({ useContextIndexState: closure_7, useUserIndexState: closure_8 } = ApplicationCommandIndexStore);
const AppLauncherNativeConstants = fn(1483);
const DEFAULT_CONTENT_PADDING = AppLauncherNativeConstants.DEFAULT_CONTENT_PADDING;
const useAppLauncherNavigation = AppLauncherNativeConstants.useAppLauncherNavigation;
const AnalyticEvents = fn(1074).AnalyticEvents;
let closure_12 = fn(5210).DISCOVERY_COMMANDS_QUERY_LIMIT;
const jsxProd = fn(21);
({ jsx: map1, jsxs: closure_14, Fragment: closure_15 } = jsxProd);
const createStyles = fn(4756);
let obj2 = { headerSpacer: { height: fn(12383).EXPANDED_HEADER_HEIGHT - fn(12383).SHEET_HANDLE_CONTAINER_HEIGHT }, list: { paddingHorizontal: DEFAULT_CONTENT_PADDING }, commandsHeaderContainer: { flexDirection: "row", justifyContent: "space-between", alignItems: "center", marginBottom: 8 }, commandsHeaderTextContainer: { alignItems: "center", flexDirection: "row", gap: 8 }, viewContainerStyle: null, mainContainerStyle: null, monetizationDisclosureTextStyle: null, monetizationDisclosureContainerStyle: null, monetizationDisclosureStyle: null, loadingTextPlaceholder: null, loadingTextPlaceholderSmall: null, noCommandsTextContainer: null };
let obj3 = { height: fn(12383).EXPANDED_HEADER_HEIGHT - fn(12383).SHEET_HANDLE_CONTAINER_HEIGHT };
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
  const requiredAppLauncherContext = context(sectionName[13]).useRequiredAppLauncherContext();
  const chatInputRef = requiredAppLauncherContext.chatInputRef;
  const keyboardCloseReasonRef = requiredAppLauncherContext.keyboardCloseReasonRef;
  let obj = context(sectionName[13]);
  let obj3 = { context, filters: null, options: null, allowFetch: true };
  let obj4 = { commandTypes: null };
  let items = [context(sectionName[20]).ApplicationCommandType.CHAT];
  obj4.commandTypes = items;
  obj3.filters = obj4;
  obj3.options = { placeholderCount: 0, limit: loading, includeFrecency: true, allowApplicationState: installOnDemand, installOnDemand, applicationId: application.id };
  const discovery = installOnDemand(sectionName[19]).useDiscovery(obj3);
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
    tmp11 = !tmp4(tmp3[22]).isEmbeddedApp(application);
    const tmp4Result = tmp4(tmp3[22]);
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
  const sum = application(sectionName[18])().bottom + keyboardCloseReasonRef;
  c19 = sum;
  const items6 = [application, , , ];
  ({ monetizationDisclosureContainerStyle: arr8[1], monetizationDisclosureStyle: arr8[2], monetizationDisclosureTextStyle: arr8[3] } = tmp);
  const callback2 = onCommandExecuted.useCallback((arg0) => {
    ({ item, index } = arg0);
    const type = item.type;
    if (obj10.PLACEHOLDER === type) {
      const obj2 = { isFirstRow: 0 === index, isLastRow: index === length.length - 1 };
      return map1(PlaceholderCommandRow, obj2);
    } else if (tmp.COMMAND === type) {
      const obj = { command: item.command, onPressCommand, isFirstRow: 0 === index, isLastRow: index === commands.length - 1, context, onExecuteCommand: callback1, section: found, location: ApplicationCommandTypes.ApplicationCommandTriggerLocations.APP_LAUNCHER_APPLICATION_VIEW, installOnDemand, sectionName };
      return map1(CommandRow, obj);
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
      const items = [map1(BillIcon.BillIcon, { size: "sm", color: "icon-muted" }), ];
      const obj3 = { style: closure_7.monetizationDisclosureTextStyle, variant: "text-xs/normal", color: "text-subtle", lineClamp: 1, children: null };
      const intl = util.intl;
      obj3.children = intl.string(util.t["5khEk8"]);
      items[1] = map1(Text_Text.Text, obj3);
      obj2.children = items;
      tmp6 = closure_2_14(View, obj2);
    }
    let tmp11 = null;
    if (isAndroidResult) {
      const obj4 = { style: closure_7.monetizationDisclosureStyle, children: null };
      const items1 = [map1(ShopIcon.ShopIcon, { size: "sm", color: "icon-muted" }), ];
      const obj5 = { style: closure_7.monetizationDisclosureTextStyle, variant: "text-xs/normal", color: "text-subtle", lineClamp: 1, children: null };
      const intl2 = util.intl;
      obj5.children = intl2.string(util.t["8z5B2U"]);
      items1[1] = map1(Text_Text.Text, obj5);
      obj4.children = items1;
      tmp11 = closure_2_14(View, obj4);
    }
    if (isAndroidResult) {
      const obj6 = { style: closure_7.monetizationDisclosureContainerStyle, children: null };
      const items2 = [tmp11, tmp6];
      obj6.children = items2;
      let tmp16 = closure_2_14(View, obj6);
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
  let obj2 = installOnDemand(sectionName[19]);
  let obj5 = { placeholderCount: 0, limit: loading, includeFrecency: true, allowApplicationState: installOnDemand, installOnDemand, applicationId: application.id };
  let obj6 = { sectionId: application.id, commandsByActiveSection: discovery.commandsByActiveSection };
  tmp9 = null == tmp8;
  const appLauncherFlashListProps = context(sectionName[29]).useAppLauncherFlashListProps();
  const obj7 = { style: tmp.headerSpacer };
  const tmp4Result4 = context(sectionName[29]);
  const items9 = [c13(onAauth2Cancel, obj7), , , , , , ];
  const tmp2Result = application(sectionName[29]);
  if (tmp4Result5.isEmbeddedApp(application)) {
    const obj8 = { application, context, sectionName, onActivityItemSelected, entrypoint, hasCommands: commands.length > 0 };
    let tmp26Result = tmp26(tmp2(tmp3[30]), obj8);
  } else {
    const obj9 = { application, viewContainerStyle: null, mainContainerStyle: null };
    ({ viewContainerStyle: obj11.viewContainerStyle, mainContainerStyle: obj11.mainContainerStyle } = tmp);
    tmp26Result = tmp26(tmp2(tmp3[31]), obj9);
  }
  items9[1] = tmp26Result;
  let num3 = 24;
  if (null != memo1) {
    num3 = tmp2(tmp3[10]).space.PX_16;
  }
  items9[2] = c13(context(sectionName[32]).Spacer, { size: num3 });
  items9[3] = memo1;
  let tmp26Result3 = commands.length > 1 && !loading;
  if (tmp26Result3) {
    tmp26Result3 = "channel" === context.type;
  }
  if (tmp26Result3) {
    obj10 = { context, allCommands: commands, onPressCommand, section: found, onExecuteCommand: callback1, installOnDemand, sectionName };
    tmp26Result3 = tmp26(tmp2(tmp3[33]), obj10);
  }
  items9[4] = tmp26Result3;
  let tmp26Result4 = null;
  if (tmp10) {
    tmp26Result4 = null;
    if (!tmp4Result6.isEmbeddedApp(application)) {
      const obj12 = { style: tmp.noCommandsTextContainer, children: null };
      const obj13 = { variant: "text-sm/normal", color: "text-default", children: null };
      let intl = tmp4(tmp3[17]).intl;
      obj13.children = intl.string(tmp4(tmp3[17]).t["w8+YDM"]);
      obj12.children = tmp26(tmp4(tmp3[27]).Text, obj13);
      tmp26Result4 = tmp26(tmp28, obj12);
    }
    tmp4Result6 = tmp4(tmp3[22]);
  }
  items9[5] = tmp26Result4;
  let tmp24Result = null;
  if (!tmp10) {
    tmp24Result = null;
    if ("channel" === context.type) {
      const obj14 = { style: tmp.commandsHeaderContainer, children: null };
      const obj15 = { style: tmp.commandsHeaderTextContainer, children: null };
      const obj16 = { variant: "text-md/medium", color: "text-default", children: null };
      let intl2 = tmp4(tmp3[17]).intl;
      obj16.children = intl2.string(tmp4(tmp3[17]).t.GOXqks);
      obj15.children = tmp26(tmp4(tmp3[27]).Heading, obj16);
      const items10 = [tmp26(tmp28, obj15), ];
      if (canSort) {
        const obj17 = {
          sortOrder: tmp7.sortOrder,
          onSortOptionPress(dependencyMap) {
                  _undefined(dependencyMap);
                }
        };
        canSort = tmp26(tmp2(tmp3[34]), obj17);
      }
      items10[1] = canSort;
      obj14.children = items10;
      tmp24Result = tmp24(tmp28, obj14);
    }
  }
  tmp4Result5 = context(sectionName[22]);
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
        application(sectionName[35]).hideActionSheet();
        keyboardCloseReasonRef.current = context(sectionName[13]).AppLauncherKeyboardCloseReason.OAUTH_MODAL;
        const current = chatInputRef.current;
        if (current != null) {
          current.closeCustomKeyboard();
        }
        obj2 = { location: context(sectionName[23]).ApplicationCommandTriggerLocations.APP_LAUNCHER_APPLICATION_VIEW_MORE_MENU, application_id: application.id, section_name: sectionName, source: entrypoint };
        if (null == installAppProps.customInstallUrl) {
          context(sectionName[36]).trackWithMetadata(sectionDescriptors.APP_LAUNCHER_OAUTH2_AUTHORIZE_OPENED, obj2);
          const tmp3Result = context(sectionName[36]);
        }
        let obj = application(sectionName[35]);
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
        context(sectionName[37]).installApplication(obj3);
        const tmp3Result2 = context(sectionName[37]);
      }
    })
  ];
  obj19.children = items11;
  return commands(navigation, obj19);
};
export const BETWEEN_SECTIONS_MARGIN = 24;
export { CommandRow };