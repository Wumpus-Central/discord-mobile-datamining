// === Module 11307: PlaceholderCommandRow ===

// Module 11307 (PlaceholderCommandRow)
import ThemesDefault from "Themes" /* 712 */;
import TableRowInner from "TableRowInner" /* 6291 */;
import usePlaceholderWidth from "usePlaceholderWidth" /* 11227 */;
import CommandRowIconDefault from "CommandRowIcon" /* 11282 */;
import closure_4 from "asyncGeneratorStep" /* 5 */;
import closure_5 from "noop" /* 19 */;
import { View } from "get ActivityIndicator" /* 17 */;
import getIndexKey from "getIndexKey" /* 8448 */;
import APP_LAUNCHER_BUILT_IN_SECTION_ICON from "APP_LAUNCHER_BUILT_IN_SECTION_ICON" /* 1499 */;
import { AnalyticEvents } from "ME" /* 676 */;
import { DISCOVERY_COMMANDS_QUERY_LIMIT as closure_12 } from "TRUE_OPTION_NAME" /* 5246 */;
import jsxProd from "jsxProd" /* 21 */;
import createCacheKey from "createCacheKey" /* 4661 */;

require = arg1;
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
  let obj = usePlaceholderWidth;
  const placeholderWidth = obj.usePlaceholderWidth(10, 50);
  obj1 = usePlaceholderWidth;
  const placeholderWidth1 = obj1.usePlaceholderWidth(30, 90);
  obj = { label: null, subLabel: null, subLabelLineClamp: 1, start: null, end: null };
  obj = { style: null };
  const items = [tmp.loadingTextPlaceholder, ];
  obj1 = { width: "" + placeholderWidth + "%" };
  items[1] = obj1;
  obj[0] = items;
  obj[0] = callback2(View, obj);
  const obj2 = { style: null };
  const items1 = [tmp.loadingTextPlaceholderSmall, { width: "" + placeholderWidth1 + "%" }];
  obj2[0] = items1;
  obj[1] = callback2(View, obj2);
  obj[3] = flag;
  obj[4] = flag2;
  return callback2(TableRowInner.TableRow, obj);
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
    obj = require("context");
    entrypoint = obj.useAppLauncherContext().entrypoint;
    tmp3 = onPressSend(true, true);
    tmp4 = hasOptions(context, true, true);
    obj2 = require("CommandRowIcon");
    obj = {
      command,
      context,
      beforeExecuteCommand() {
            let obj = callback(closure_1_3[15]);
            obj = { command: callback, location: closure_4, triggerSection: callback(closure_1_3[15]).getCommandTriggerSection(closure_3), sectionName };
            return obj.trackCommandSelected(obj);
          },
      onExecuteCommand,
      tryExecuteCommand: null,
      sectionName: null
    };
    fn = undefined;
    if (installOnDemand) {
      tmp5 = location;
      closure_0 = location((arg0) => {
        closure_0 = arg0;
        c2 = 0;
        c3 = 0;
        return (function*(arg0, isAuthorized) {
          if (c3 === 2) {
            c3 = 3;
            HermesBuiltin.throwTypeError();
          } else if (tmp4 === 3) {
            if (arg0 === 1) {
              throw isAuthorized;
            } else if (arg0 === 2) {
              let obj = { value: null, done: true };
              obj[0] = isAuthorized;
              return obj;
            } else {
              return { value: "HermesInternal", done: "HermesInternal" };
            }
          } else {
            try {
              c3 = 2;
              if (0 === c2) {
                if (arg0 === 1) {
                  c3 = 3;
                  throw isAuthorized;
                } else if (arg0 === 2) {
                  c3 = 3;
                  obj = { value: null, done: true };
                  obj[0] = isAuthorized;
                  return obj;
                } else {
                  closure_1 = tmp2;
                  let channel;
                  obj1 = { applicationId: null, channel: null, commandIntegrationTypes: null, appLauncherContext: null };
                  obj1[0] = lib.applicationId;
                  if ("channel" === c2.type) {
                    channel = c2.channel;
                  }
                  obj1[1] = channel;
                  obj1[2] = lib.integration_types;
                  const obj2 = { entrypoint: null, location: null, sectionName: null };
                  obj2[0] = closure_1_6;
                  obj2[1] = closure_1_4;
                  obj2[2] = closure_1_5;
                  obj1[3] = obj2;
                  c2 = 1;
                  c3 = 1;
                  const obj3 = { value: null, done: false };
                  obj3[0] = lib(closure_2_3[16]).installApplicationOnDemandIfNeeded(obj1);
                  return obj3;
                }
              } else if (arg0 === 1) {
                c3 = 3;
                throw isAuthorized;
              } else if (arg0 === 2) {
                c3 = 3;
                obj = { value: null, done: true };
                obj[0] = isAuthorized;
                return obj;
              } else {
                if (isAuthorized.isAuthorized) {
                  lib();
                }
                c3 = 3;
                return { value: "HermesInternal", done: "HermesInternal" };
              }
            } catch (tmp13) {
              c3 = tmp;
              throw tmp13;
            }
          }
        })();
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
    obj[4] = fn;
    obj[5] = sectionName;
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
        const intl = callback(closure_1_3[17]).intl;
        obj[1] = intl.string(callback(closure_1_3[17]).t.TXNS7S);
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
            return callback2(closure_0, closure_3, closure_4);
          },
      accessibilityActions: memo,
      onAccessibilityAction: callback,
      trailing: jsx(require("CommandRowIcon"), { hasOptions, sending: commandRowSend.sending, onPressSend })
    };
    return jsx(require("TableRowInner").TableRow, obj1);
  }
}
({ useContextIndexState: error, useUserIndexState: closure_8 } = getIndexKey);
const DEFAULT_CONTENT_PADDING = APP_LAUNCHER_BUILT_IN_SECTION_ICON.DEFAULT_CONTENT_PADDING;
const useAppLauncherNavigation = APP_LAUNCHER_BUILT_IN_SECTION_ICON.useAppLauncherNavigation;
({ jsx: map1, jsxs: closure_14, Fragment: closure_15 } = jsxProd);
createCacheKey = { headerSpacer: null, list: null, commandsHeaderContainer: null, commandsHeaderTextContainer: null, viewContainerStyle: null, mainContainerStyle: null, monetizationDisclosureTextStyle: null, monetizationDisclosureContainerStyle: null, monetizationDisclosureStyle: null, loadingTextPlaceholder: null, loadingTextPlaceholderSmall: null, noCommandsTextContainer: null };
createCacheKey = { height: require("xl").EXPANDED_HEADER_HEIGHT - require("xl").SHEET_HANDLE_CONTAINER_HEIGHT };
createCacheKey[0] = createCacheKey;
createCacheKey[1] = { paddingHorizontal: DEFAULT_CONTENT_PADDING };
createCacheKey[2] = { flexDirection: "row", justifyContent: "space-between", alignItems: "center", marginBottom: 8 };
createCacheKey[3] = { alignItems: "center", flexDirection: "row", gap: 8 };
createCacheKey[4] = { borderRadius: ThemesDefault.radii.lg };
let obj1 = { borderRadius: ThemesDefault.radii.lg };
createCacheKey[5] = { backgroundColor: ThemesDefault.colors.CARD_BACKGROUND_DEFAULT, paddingHorizontal: 12, paddingVertical: 16 };
let obj2 = { backgroundColor: ThemesDefault.colors.CARD_BACKGROUND_DEFAULT, paddingHorizontal: 12, paddingVertical: 16 };
createCacheKey[6] = { marginLeft: ThemesDefault.space.PX_4 };
let obj3 = { marginLeft: ThemesDefault.space.PX_4 };
createCacheKey[7] = { flexDirection: "row", alignItems: "center", marginBottom: ThemesDefault.space.PX_24, gap: ThemesDefault.space.PX_16 };
createCacheKey[8] = { flexDirection: "row", alignItems: "center" };
let obj4 = { flexDirection: "row", alignItems: "center", marginBottom: ThemesDefault.space.PX_24, gap: ThemesDefault.space.PX_16 };
createCacheKey[9] = { backgroundColor: ThemesDefault.colors.BACKGROUND_MOD_SUBTLE, height: 16, marginBottom: 4, borderRadius: ThemesDefault.radii.lg, alignSelf: "flex-start" };
let obj5 = { backgroundColor: ThemesDefault.colors.BACKGROUND_MOD_SUBTLE, height: 16, marginBottom: 4, borderRadius: ThemesDefault.radii.lg, alignSelf: "flex-start" };
createCacheKey[10] = { backgroundColor: ThemesDefault.colors.BACKGROUND_MOD_SUBTLE, height: 16, borderRadius: ThemesDefault.radii.lg, alignSelf: "flex-start" };
createCacheKey[11] = { alignItems: "center" };
let closure_16 = createCacheKey.createStyles(createCacheKey);
let obj7 = { PLACEHOLDER: 0, [0]: "PLACEHOLDER", COMMAND: 1, [1]: "COMMAND" };
const array = new Array(6);
let closure_18 = array.fill({ type: obj7.PLACEHOLDER });
let obj6 = { backgroundColor: ThemesDefault.colors.BACKGROUND_MOD_SUBTLE, height: 16, borderRadius: ThemesDefault.radii.lg, alignSelf: "flex-start" };
let obj8 = { type: obj7.PLACEHOLDER };
let result = require("set").fileFinishedImporting("modules/app_launcher/native/screens/application_view/app/AppDetailContent.tsx");

export default function AppDetailContent(context) {
  context = context.context;
  const application = context.application;
  ({ lockableScrollableContentOffsetY, installOnDemand } = context);
  const sectionName = context.sectionName;
  const entrypoint = context.entrypoint;
  const onCommandExecuted = context.onCommandExecuted;
  const onAauth2Cancel = context.onAauth2Cancel;
  closure_7 = undefined;
  let chatInputRef;
  let keyboardCloseReasonRef;
  let filterSection;
  let sectionDescriptors;
  let loading;
  let callback2;
  commands = undefined;
  closure_15 = undefined;
  let callback;
  let callback1;
  let found;
  c19 = undefined;
  ({ onPressBack, onActivityItemSelected } = context);
  const tmp = callback();
  closure_7 = tmp;
  let obj = context(sectionName[13]);
  const requiredAppLauncherContext = obj.useRequiredAppLauncherContext();
  chatInputRef = requiredAppLauncherContext.chatInputRef;
  keyboardCloseReasonRef = requiredAppLauncherContext.keyboardCloseReasonRef;
  obj1 = installOnDemand(sectionName[19]);
  obj = { context, filters: null, options: null, allowFetch: true };
  obj = { commandTypes: null };
  let items = [context(sectionName[20]).ApplicationCommandType.CHAT];
  obj[0] = items;
  obj[1] = obj;
  obj1 = { placeholderCount: 0, limit: loading, includeFrecency: true, allowApplicationState: installOnDemand, installOnDemand, applicationId: application.id };
  obj[2] = obj1;
  const discovery = obj1.useDiscovery(obj);
  filterSection = discovery.filterSection;
  sectionDescriptors = discovery.sectionDescriptors;
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
      items = found;
    } else {
      items = commands.map((command) => ({ type: constants.COMMAND, command }));
    }
    return items;
  }, items1);
  const effect = onCommandExecuted.useEffect(() => {
    filterSection(application.id);
  }, items2);
  const tmp14 = filterSection();
  closure_15 = tmp14;
  const items3 = [context, entrypoint, installOnDemand, tmp14, onCommandExecuted, sectionDescriptors, sectionName];
  callback = onCommandExecuted.useCallback((command, section) => {
    let APP_LAUNCHER_APPLICATION_VIEW = arg2;
    if (arg2 === undefined) {
      APP_LAUNCHER_APPLICATION_VIEW = context(sectionName[23]).ApplicationCommandTriggerLocations.APP_LAUNCHER_APPLICATION_VIEW;
    }
    let obj = context(sectionName[24]);
    obj = { location: APP_LAUNCHER_APPLICATION_VIEW, context, command, section, sectionDescriptors, query: "", navigation: closure_15, installOnDemand, sectionName, entrypoint, onCommandExecuted };
    const result = obj.handleApplicationCommandSelected(obj);
  }, items3);
  const items4 = [chatInputRef, keyboardCloseReasonRef, onCommandExecuted];
  callback1 = onCommandExecuted.useCallback(() => {
    const current = chatInputRef.current;
    if (current != null) {
      current.closeCustomKeyboard();
    }
    keyboardCloseReasonRef.current = context(sectionName[13]).AppLauncherKeyboardCloseReason.COMMAND;
    if (onCommandExecuted != null) {
      onCommandExecuted();
    }
  }, items4);
  found = sectionDescriptors.find((id) => id.id === application.id);
  const items5 = [callback, commands.length, context, callback1, found, installOnDemand, sectionName];
  const sum = application(sectionName[18])().bottom + keyboardCloseReasonRef;
  c19 = sum;
  const items6 = [application, , , ];
  ({ monetizationDisclosureContainerStyle: arr8[1], monetizationDisclosureStyle: arr8[2], monetizationDisclosureTextStyle: arr8[3] } = tmp);
  callback2 = onCommandExecuted.useCallback((arg0) => {
    ({ item, index } = arg0);
    const type = item.type;
    if (callback1.PLACEHOLDER === type) {
      let obj = { isFirstRow: null, isLastRow: null };
      obj[0] = 0 === index;
      obj[1] = index === found.length - 1;
      return _undefined(c19, obj);
    } else if (tmp.COMMAND === type) {
      obj = { command: null, onPressCommand: null, isFirstRow: null, isLastRow: null, context: null, onExecuteCommand: null, section: null, location: null, installOnDemand: null, sectionName: null };
      obj[0] = item.command;
      obj[1] = callback;
      obj[2] = 0 === index;
      obj[3] = index === commands.length - 1;
      obj[4] = context;
      obj[5] = callback1;
      obj[6] = found;
      obj[7] = context(sectionName[23]).ApplicationCommandTriggerLocations.APP_LAUNCHER_APPLICATION_VIEW;
      obj[8] = installOnDemand;
      obj[9] = sectionName;
      return _undefined(closure_1_20, obj);
    } else {
      return null;
    }
  }, items5);
  const memo1 = onCommandExecuted.useMemo(() => {
    let obj = context(sectionName[25]);
    let isAndroidResult = obj.isAndroid();
    if (isAndroidResult) {
      let tmpResult = tmp(tmp2[22]);
      isAndroidResult = tmpResult.isApplicationMonetizedWithIAP(application);
    }
    tmpResult = tmp(tmp2[22]);
    const result = tmpResult.isApplicationAdSupported(application);
    let tmp6 = null;
    if (result) {
      obj = { style: null, children: null };
      obj[0] = closure_7.monetizationDisclosureStyle;
      const items = [_undefined(tmp(tmp2[26]).BillIcon, { size: "sm", color: "icon-muted" }), ];
      obj = { style: null, variant: "text-xs/normal", color: "text-subtle", lineClamp: 1, children: null };
      obj[0] = closure_7.monetizationDisclosureTextStyle;
      const intl = tmp(tmp2[17]).intl;
      obj[4] = intl.string(tmp(tmp2[17]).t["5khEk8"]);
      items[1] = _undefined(tmp(tmp2[27]).Text, obj);
      obj[1] = items;
      tmp6 = commands(onAauth2Cancel, obj);
    }
    let tmp11 = null;
    if (isAndroidResult) {
      obj1 = { style: null, children: null };
      obj1[0] = closure_7.monetizationDisclosureStyle;
      const items1 = [_undefined(tmp(tmp2[28]).ShopIcon, { size: "sm", color: "icon-muted" }), ];
      const obj2 = { style: null, variant: "text-xs/normal", color: "text-subtle", lineClamp: 1, children: null };
      obj2[0] = closure_7.monetizationDisclosureTextStyle;
      const intl2 = tmp(tmp2[17]).intl;
      obj2[4] = intl2.string(tmp(tmp2[17]).t["8z5B2U"]);
      items1[1] = _undefined(tmp(tmp2[27]).Text, obj2);
      obj1[1] = items1;
      tmp11 = commands(onAauth2Cancel, obj1);
    }
    if (isAndroidResult) {
      const obj3 = { style: null, children: null };
      obj3[0] = closure_7.monetizationDisclosureContainerStyle;
      const items2 = [tmp11, tmp6];
      obj3[1] = items2;
      let tmp16 = commands(onAauth2Cancel, obj3);
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
    obj.paddingBottom = c19;
    return obj;
  }, items7);
  const memo3 = onCommandExecuted.useMemo(() => ({ bottom: c19 }), items8);
  tmp4Result = tmp4(tmp3[29]);
  const appLauncherFlashListProps = tmp4Result.useAppLauncherFlashListProps();
  const items9 = [callback2(onAauth2Cancel, { style: tmp.headerSpacer }), , , , , , ];
  let obj2 = { sectionId: application.id, commandsByActiveSection: discovery.commandsByActiveSection };
  let obj3 = { style: tmp.headerSpacer };
  const tmp2Result = application(sectionName[29]);
  tmp9 = null == tmp8;
  if (tmp4Result1.isEmbeddedApp(application)) {
    const obj4 = { application: null, context: null, sectionName: null, onActivityItemSelected: null, entrypoint: null, hasCommands: null };
    obj4[0] = application;
    obj4[1] = context;
    obj4[2] = sectionName;
    obj4[3] = onActivityItemSelected;
    obj4[4] = entrypoint;
    obj4[5] = commands.length > 0;
    let tmp26Result = tmp26(tmp2(tmp3[30]), obj4);
  } else {
    const obj5 = { application: null, viewContainerStyle: null, mainContainerStyle: null };
    obj5[0] = application;
    ({ viewContainerStyle: obj11[1], mainContainerStyle: obj11[2] } = tmp);
    tmp26Result = tmp26(tmp2(tmp3[31]), obj5);
  }
  items9[1] = tmp26Result;
  let num3 = 24;
  if (null != memo1) {
    num3 = tmp2(tmp3[10]).space.PX_16;
  }
  items9[2] = callback2(context(sectionName[32]).Spacer, { size: num3 });
  items9[3] = memo1;
  tmp26Result = commands.length > 1 && !loading;
  if (tmp26Result) {
    tmp26Result = "channel" === context.type;
  }
  if (tmp26Result) {
    const obj6 = { context: null, allCommands: null, onPressCommand: null, section: null, onExecuteCommand: null, installOnDemand: null, sectionName: null };
    obj6[0] = context;
    obj6[1] = commands;
    obj6[2] = callback;
    obj6[3] = found;
    obj6[4] = callback1;
    obj6[5] = installOnDemand;
    obj6[6] = sectionName;
    tmp26Result = tmp26(tmp2(tmp3[33]), obj6);
  }
  items9[4] = tmp26Result;
  let tmp26Result1 = null;
  if (tmp10) {
    tmp26Result1 = null;
    if (!tmp4Result2.isEmbeddedApp(application)) {
      obj7 = { style: null, children: null };
      obj7[0] = tmp.noCommandsTextContainer;
      const obj8 = { variant: "text-sm/normal", color: "text-default", children: null };
      let intl = tmp4(tmp3[17]).intl;
      obj8[2] = intl.string(tmp4(tmp3[17]).t["w8+YDM"]);
      obj7[1] = tmp26(tmp4(tmp3[27]).Text, obj8);
      tmp26Result1 = tmp26(tmp28, obj7);
    }
    tmp4Result2 = tmp4(tmp3[22]);
  }
  items9[5] = tmp26Result1;
  let tmp24Result = null;
  if (!tmp10) {
    tmp24Result = null;
    if ("channel" === context.type) {
      const obj9 = { style: null, children: null };
      obj9[0] = tmp.commandsHeaderContainer;
      const obj10 = { style: null, children: null };
      obj10[0] = tmp.commandsHeaderTextContainer;
      const obj11 = { variant: "text-md/medium", color: "text-default", children: null };
      let intl2 = tmp4(tmp3[17]).intl;
      obj11[2] = intl2.string(tmp4(tmp3[17]).t.GOXqks);
      obj10[1] = tmp26(tmp4(tmp3[27]).Heading, obj11);
      const items10 = [tmp26(tmp28, obj10), ];
      if (canSort) {
        const obj12 = { sortOrder: null, onSortOptionPress: null };
        obj12[0] = tmp7.sortOrder;
        obj12[1] = function onSortOptionPress(arg0) {
          _undefined(arg0);
        };
        canSort = tmp26(tmp2(tmp3[34]), obj12);
      }
      items10[1] = canSort;
      obj9[1] = items10;
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
    callback2(tmp2Result, { ListHeaderComponent: commands(closure_15, { children: items9 }), contentContainerStyle: memo2, scrollIndicatorInsets: memo3, renderItem: callback2, data: memo, preserveScrollMomentum: true, lockableScrollableContentOffsetY, automaticallyAdjustsScrollIndicatorInsets: false, keyboardDismissMode: "none", animatedOnScroll: appLauncherFlashListProps.onScroll, ref: appLauncherFlashListProps.scrollerRef, simultaneousHandlers: appLauncherFlashListProps.gestureRef, animatedProps: appLauncherFlashListProps.animatedProps }, str3),
    callback2(application(sectionName[9]), {
      application,
      onPressBack,
      scrollOffsetY: lockableScrollableContentOffsetY,
      showsAddCTA: tmp11,
      onAddAppMenuClick(installAppProps) {
        installAppProps = installAppProps.installAppProps;
        let obj;
        obj = application(sectionName[35]);
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
            if (closure_1_6 != null) {
              tmp7();
            }
          } else if (null != tmp) {
            obj = context(sectionName[36]);
            obj.trackWithMetadata(sectionDescriptors.APP_LAUNCHER_OAUTH2_AUTHORIZE_SUCCEEDED, obj);
          }
        };
        tmp3Result.installApplication(obj);
      }
    })
  ];
  obj14[0] = items11;
  return commands(closure_15, obj14);
};
export const BETWEEN_SECTIONS_MARGIN = 24;
export { CommandRow };