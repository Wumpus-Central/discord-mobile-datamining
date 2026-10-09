// discord_app/modules/markup/native/MarkupReactCommandRule.tsx
import KeyboardTypes from "../../keyboard/native/KeyboardTypes.tsx";
import ToastUtils from "../../toast/native/ToastUtils.tsx";
import ActionSheetActionCreatorsDefault from "../../action_sheet/native/ActionSheetActionCreators.tsx";
import ClipboardUtils from "../../../utils/ClipboardUtils.native.tsx";
import ApplicationCommandTypes from "../../application_commands/ApplicationCommandTypes.tsx";
import navigateToLastChannelDefault from "../../main_tabs_v2/native/navigateToLastChannel.tsx";
import noop from "../../../../_runtime/metro/00019__.js";
import ChannelStore from "../../../stores/ChannelStore.tsx";

require = fn;
function handleTapCommandMention(channelId) {
  ({ appLauncherNavigator, onSetCommand } = channelId);
  ({ onOpenCustomKeyboard: importDefault, commandId, commandName } = channelId);
  let sum1;
  const channel = ChannelStore.getChannel(channelId.channelId);
  if (null != channel) {
    if (null != channel.guild_id) {
      sum1 = commandId;
      if (commandName.includes(" ")) {
        const sum = commandId + SUB_COMMAND_KEY_SEPARATOR;
        const parts = commandName.split(" ");
        const substr = parts.slice(1);
        sum1 = sum + substr.join(SUB_COMMAND_KEY_SEPARATOR);
      }
      if (null != appLauncherNavigator) {
        if (null != channel) {
          let obj = {
            analyticsLocation: onSetCommand(sum1[6]).ApplicationCommandTriggerLocations.MENTION,
            preSelectedCommand: null,
            context: null,
          };
          const obj3 = { commandId: sum1 };
          obj.preSelectedCommand = obj3;
          const obj5 = { type: "channel", channel };
          obj.context = obj5;
          appLauncherNavigator.navigate(constants.COMMAND_VIEW, obj);
        }
      }
      const rootNavigationRef = onSetCommand(sum1[7]).getRootNavigationRef();
      if (null != rootNavigationRef) {
        state = rootNavigationRef.getState();
        let length;
        if (state != null) {
          const routes = state.routes;
          if (routes != null) {
            length = routes.length;
          }
        }
        if (length > 1) {
          const state1 = rootNavigationRef.getState();
          let num3;
          if (state1 != null) {
            const routes1 = state1.routes;
            if (routes1 != null) {
              num3 = routes1.length;
            }
          }
          if (num3 == null) {
            num3 = 0;
          }
          if (num3 > 1) {
            do {
              let goBackResult = rootNavigationRef.goBack();
              num3 = num3 - 1;
            } while (num3 > 1);
          }
        }
      }
      let obj2 = onSetCommand(sum1[7]);
      require("ActionSheetActionCreators").hideActionSheet();
      const _setTimeout = setTimeout;
      const timerId = setTimeout(() => {
        const obj = { type: KeyboardTypes.KeyboardTypes.APP_LAUNCHER, context: null };
        const obj2 = {
          initialRouteName: constants.COMMAND_VIEW,
          analyticsLocation: ApplicationCommandTypes.ApplicationCommandTriggerLocations.MENTION,
          preSelectedCommand: { commandId: sum1 },
        };
        obj.context = obj2;
        return importDefault(obj);
      }, 0);
      const obj4 = require("ActionSheetActionCreators");
    }
  }
  if ("" === channelId.currentText) {
    onSetCommand();
  } else {
    const obj6 = { title: null, confirmText: null, onConfirm: null, cancelText: null, confirmColor: null, body: null };
    const intl = onSetCommand(sum1[11]).intl;
    obj6.title = intl.string(onSetCommand(sum1[11]).t.pe26Cj);
    const intl2 = onSetCommand(sum1[11]).intl;
    obj6.confirmText = intl2.string(onSetCommand(sum1[11]).t.VkKicb);
    obj6.onConfirm = function onConfirm() {
      return onSetCommand();
    };
    const intl3 = onSetCommand(sum1[11]).intl;
    obj6.cancelText = intl3.string(onSetCommand(sum1[11]).t["ETE/oC"]);
    obj6.confirmColor = onSetCommand(sum1[12]).ButtonColors.BRAND;
    const intl4 = onSetCommand(sum1[11]).intl;
    obj6.body = intl4.string(onSetCommand(sum1[11]).t["+awCIy"]);
    require("actions/AlertActionCreators").show(obj6);
    const obj8 = require("actions/AlertActionCreators");
  }
}
function handleLongPressCommandMention(arg0, arg1) {
  _require = arg0;
  closure_1 = arg1;
  let obj = { label: null, IconComponent: null, onPress: null };
  const intl = require("util").intl;
  obj.label = intl.string(require("util").t["42H+Nb"]);
  obj.IconComponent = require("SlashBoxIcon").SlashBoxIcon;
  obj.onPress = function onPress() {
    ToastUtils.presentCommandCopied();
    ClipboardUtils.copy("" + COMMAND_SENTINEL + closure_0);
  };
  const items = [obj];
  const DeveloperMode = require("UserSettings").DeveloperMode;
  if (DeveloperMode.getSetting()) {
    const obj2 = { label: null, IconComponent: null, onPress: null };
    const intl2 = tmp(1126).intl;
    obj2.label = intl2.string(tmp(1126).t.oJ1Muw);
    obj2.IconComponent = tmp(9987).IdIcon;
    obj2.onPress = function onPress() {
      ToastUtils.presentIdCopied();
      ClipboardUtils.copy(closure_1);
    };
    items.push(obj2);
  }
  const result = require("showSimpleActionSheet").showSimpleActionSheet({
    key: "LongPressCommandMention",
    options: items,
    hasIcons: true,
  });
  const tmpResult = require("showSimpleActionSheet");
}
const AppLauncherNativeConstants = fn(1502);
({ AppLauncherRouteName: hasOwnProperty, useAppLauncherNavigation: metroRequire } = AppLauncherNativeConstants);
const SUB_COMMAND_KEY_SEPARATOR = fn(5400).SUB_COMMAND_KEY_SEPARATOR;
const COMMAND_SENTINEL = fn(5401).COMMAND_SENTINEL;
const jsxs = fn(21).jsxs;
const ReactCompilerGating = fn(558);
const size = fn(2);
let result = size.fileFinishedImporting("modules/markup/native/MarkupReactCommandRule.tsx");

export default ReactCompilerGating.isReactCompilerEnabled()
  ? function MarkupReactCommandRule(node) {
      const cResult = node(576).c(18);
      node = node.node;
      ({ output, state, style } = node);
      const tmp4 = null != noop.useContext(node(10587).AppLauncherContext);
      closure_1 = tmp4;
      const tmp5 = closure_6();
      dependencyMap = tmp5;
      if (cResult[0] === tmp4) {
        if (cResult[1] === tmp5) {
          if (cResult[2] === node.channelId) {
            if (cResult[3] === node.commandId) {
              if (cResult[4] === node.commandName) {
                let tmp6 = cResult[5];
              }
              if (cResult[6] === node.commandId) {
                if (cResult[7] === node.commandName) {
                  let tmp7 = cResult[8];
                }
                if (cResult[9] === node) {
                  if (cResult[10] === output) {
                    if (cResult[11] === state) {
                      let tmp8 = cResult[12];
                    }
                    if (cResult[13] === style) {
                      if (cResult[14] === tmp6) {
                        if (cResult[15] === tmp7) {
                          if (cResult[16] === tmp8) {
                            let tmp10 = cResult[17];
                          }
                          return tmp10;
                        }
                      }
                    }
                    let obj2 = { style, variant: "text-md/bold", onPress: tmp6, onLongPress: tmp7, children: null };
                    const items = ["/", tmp8];
                    obj2.children = items;
                    const tmp12 = jsxs(tmp(5087).Text, {
                      style,
                      variant: "text-md/bold",
                      onPress: tmp6,
                      onLongPress: tmp7,
                      children: null,
                    });
                    cResult[13] = style;
                    cResult[14] = tmp6;
                    cResult[15] = tmp7;
                    cResult[16] = tmp8;
                    cResult[17] = tmp12;
                    tmp10 = tmp12;
                  }
                }
                const smartOutputResult = tmp(8109).smartOutput(node, output, state);
                cResult[9] = node;
                cResult[10] = output;
                cResult[11] = state;
                cResult[12] = smartOutputResult;
                tmp8 = smartOutputResult;
                const tmpResult = tmp(8109);
              }
              const fn2 = function i() {
                handleLongPressCommandMention(node.commandName, node.commandId);
              };
              cResult[6] = node.commandId;
              cResult[7] = node.commandName;
              cResult[8] = fn2;
              tmp7 = fn2;
            }
          }
        }
      }
      const fn = function t() {
        const bestActiveInput = node(dependencyMap[22]).getBestActiveInput();
        let tmp2;
        if (closure_1) {
          tmp2 = dependencyMap;
        }
        const obj2 = {
          appLauncherNavigator: tmp2,
          channelId: bestActiveInput.channelId,
          commandId: bestActiveInput.commandId,
          commandName: bestActiveInput.commandName,
          currentText: null,
          onOpenCustomKeyboard: null,
          onSetCommand: null,
        };
        let str;
        if (bestActiveInput != null) {
          str = bestActiveInput.getText();
        }
        if (str == null) {
          str = "";
        }
        obj2.currentText = str;
        obj2.onOpenCustomKeyboard = function onOpenCustomKeyboard(arg0) {
          let openCustomKeyboardResult;
          if (bestActiveInput != null) {
            openCustomKeyboardResult = bestActiveInput.openCustomKeyboard(arg0);
          }
          return openCustomKeyboardResult;
        };
        obj2.onSetCommand = function onSetCommand() {
          navigateToLastChannelDefault();
          ActionSheetActionCreatorsDefault.hideActionSheet();
          if (bestActiveInput != null) {
            bestActiveInput.openSystemKeyboard();
          }
          if (bestActiveInput != null) {
            const applicationCommandManager = bestActiveInput.getApplicationCommandManager();
            if (applicationCommandManager != null) {
              ({ commandId, commandName } = node);
              applicationCommandManager.setPartialCommand(
                commandId,
                commandName,
                ApplicationCommandTypes.ApplicationCommandTriggerLocations.MENTION,
              );
            }
          }
        };
        handleTapCommandMention(obj2);
        let obj = node(dependencyMap[22]);
      };
      cResult[0] = tmp4;
      cResult[1] = tmp5;
      cResult[2] = node.channelId;
      cResult[3] = node.commandId;
      cResult[4] = node.commandName;
      cResult[5] = fn;
      tmp6 = fn;
      let obj = node(576);
    }
  : function MarkupReactCommandRule(node) {
      node = node.node;
      ({ output, state, style } = node);
      closure_1 = null != noop.useContext(node(10587).AppLauncherContext);
      dependencyMap = closure_6();
      let obj = {
        style,
        variant: "text-md/bold",
        onPress() {
          const bestActiveInput = node(dependencyMap[22]).getBestActiveInput();
          let tmp2;
          if (closure_1) {
            tmp2 = dependencyMap;
          }
          const obj2 = {
            appLauncherNavigator: tmp2,
            channelId: bestActiveInput.channelId,
            commandId: bestActiveInput.commandId,
            commandName: bestActiveInput.commandName,
            currentText: null,
            onOpenCustomKeyboard: null,
            onSetCommand: null,
          };
          let str;
          if (bestActiveInput != null) {
            str = bestActiveInput.getText();
          }
          if (str == null) {
            str = "";
          }
          obj2.currentText = str;
          obj2.onOpenCustomKeyboard = function onOpenCustomKeyboard(arg0) {
            let openCustomKeyboardResult;
            if (bestActiveInput != null) {
              openCustomKeyboardResult = bestActiveInput.openCustomKeyboard(arg0);
            }
            return openCustomKeyboardResult;
          };
          obj2.onSetCommand = function onSetCommand() {
            navigateToLastChannelDefault();
            ActionSheetActionCreatorsDefault.hideActionSheet();
            if (bestActiveInput != null) {
              bestActiveInput.openSystemKeyboard();
            }
            if (bestActiveInput != null) {
              const applicationCommandManager = bestActiveInput.getApplicationCommandManager();
              if (applicationCommandManager != null) {
                ({ commandId, commandName } = node);
                applicationCommandManager.setPartialCommand(
                  commandId,
                  commandName,
                  ApplicationCommandTypes.ApplicationCommandTriggerLocations.MENTION,
                );
              }
            }
          };
          handleTapCommandMention(obj2);
          let obj = node(dependencyMap[22]);
        },
        onLongPress() {
          handleLongPressCommandMention(node.commandName, node.commandId);
        },
        children: null,
      };
      const items = ["/", node(8109).smartOutput(node, output, state)];
      obj.children = items;
      return jsxs(node(5087).Text, {
        style,
        variant: "text-md/bold",
        onPress() {
          const bestActiveInput = node(dependencyMap[22]).getBestActiveInput();
          let tmp2;
          if (closure_1) {
            tmp2 = dependencyMap;
          }
          const obj2 = {
            appLauncherNavigator: tmp2,
            channelId: bestActiveInput.channelId,
            commandId: bestActiveInput.commandId,
            commandName: bestActiveInput.commandName,
            currentText: null,
            onOpenCustomKeyboard: null,
            onSetCommand: null,
          };
          let str;
          if (bestActiveInput != null) {
            str = bestActiveInput.getText();
          }
          if (str == null) {
            str = "";
          }
          obj2.currentText = str;
          obj2.onOpenCustomKeyboard = function onOpenCustomKeyboard(arg0) {
            let openCustomKeyboardResult;
            if (bestActiveInput != null) {
              openCustomKeyboardResult = bestActiveInput.openCustomKeyboard(arg0);
            }
            return openCustomKeyboardResult;
          };
          obj2.onSetCommand = function onSetCommand() {
            navigateToLastChannelDefault();
            ActionSheetActionCreatorsDefault.hideActionSheet();
            if (bestActiveInput != null) {
              bestActiveInput.openSystemKeyboard();
            }
            if (bestActiveInput != null) {
              const applicationCommandManager = bestActiveInput.getApplicationCommandManager();
              if (applicationCommandManager != null) {
                ({ commandId, commandName } = node);
                applicationCommandManager.setPartialCommand(
                  commandId,
                  commandName,
                  ApplicationCommandTypes.ApplicationCommandTriggerLocations.MENTION,
                );
              }
            }
          };
          handleTapCommandMention(obj2);
          let obj = node(dependencyMap[22]);
        },
        onLongPress() {
          handleLongPressCommandMention(node.commandName, node.commandId);
        },
        children: null,
      });
    };
export { handleTapCommandMention };
export { handleLongPressCommandMention };
