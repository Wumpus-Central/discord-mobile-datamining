// === Module 11212: MarkupReactCommandRule ===

// Module 11212 (MarkupReactCommandRule)
import KeyboardTypes from "KeyboardTypes" /* 1609 */;
import ToastUtils from "ToastUtils" /* 4258 */;
import ActionSheetActionCreatorsDefault from "ActionSheetActionCreators" /* 4527 */;
import ClipboardUtils from "ClipboardUtils" /* 7190 */;
import ApplicationCommandTypes from "ApplicationCommandTypes" /* 7523 */;
import navigateToLastChannelDefault from "navigateToLastChannel" /* 11217 */;
import noop from "module_19" /* 19 */;
import ChannelStore from "ChannelStore" /* 1957 */;

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
          let obj = { analyticsLocation: onSetCommand(sum1[6]).ApplicationCommandTriggerLocations.MENTION, preSelectedCommand: null, context: null };
          obj = { commandId: sum1 };
          obj.preSelectedCommand = obj;
          let obj1 = { type: "channel", channel };
          obj.context = obj1;
          appLauncherNavigator.navigate(constants.COMMAND_VIEW, obj);
        }
      }
      obj1 = onSetCommand(sum1[7]);
      const rootNavigationRef = obj1.getRootNavigationRef();
      if (null != rootNavigationRef) {
        const state = rootNavigationRef.getState();
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
      require("ActionSheetActionCreators").hideActionSheet();
      const _setTimeout = setTimeout;
      const timerId = setTimeout(() => {
        let obj = { type: KeyboardTypes.KeyboardTypes.APP_LAUNCHER, context: null };
        obj = { initialRouteName: constants.COMMAND_VIEW, analyticsLocation: ApplicationCommandTypes.ApplicationCommandTriggerLocations.MENTION, preSelectedCommand: null };
        obj = { commandId: sum1 };
        obj.preSelectedCommand = obj;
        obj.context = obj;
        return importDefault(obj);
      }, 0);
      const obj4 = require("ActionSheetActionCreators");
    }
  }
  if ("" === channelId.currentText) {
    onSetCommand();
  } else {
    const obj2 = { title: null, confirmText: null, onConfirm: null, cancelText: null, confirmColor: null, body: null };
    const intl = onSetCommand(sum1[11]).intl;
    obj2.title = intl.string(onSetCommand(sum1[11]).t.pe26Cj);
    const intl2 = onSetCommand(sum1[11]).intl;
    obj2.confirmText = intl2.string(onSetCommand(sum1[11]).t.VkKicb);
    obj2.onConfirm = function onConfirm() {
      return onSetCommand();
    };
    const intl3 = onSetCommand(sum1[11]).intl;
    obj2.cancelText = intl3.string(onSetCommand(sum1[11]).t["ETE/oC"]);
    obj2.confirmColor = onSetCommand(sum1[12]).ButtonColors.BRAND;
    const intl4 = onSetCommand(sum1[11]).intl;
    obj2.body = intl4.string(onSetCommand(sum1[11]).t["+awCIy"]);
    require("actions/AlertActionCreators").show(obj2);
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
    obj = { label: null, IconComponent: null, onPress: null };
    const intl2 = tmp(1114).intl;
    obj.label = intl2.string(tmp(1114).t.oJ1Muw);
    obj.IconComponent = tmp(10629).IdIcon;
    obj.onPress = function onPress() {
      ToastUtils.presentIdCopied();
      ClipboardUtils.copy(closure_1);
    };
    items.push(obj);
  }
  const result = require("showSimpleActionSheet").showSimpleActionSheet({ key: "LongPressCommandMention", options: items, hasIcons: true });
  const tmpResult = require("showSimpleActionSheet");
}
const AppLauncherNativeConstants = fn(1482);
({ AppLauncherRouteName: hasOwnProperty, useAppLauncherNavigation: metroRequire } = AppLauncherNativeConstants);
const SUB_COMMAND_KEY_SEPARATOR = fn(4999).SUB_COMMAND_KEY_SEPARATOR;
const COMMAND_SENTINEL = fn(5000).COMMAND_SENTINEL;
const jsxs = fn(21).jsxs;
const size = fn(2);
let result = size.fileFinishedImporting("modules/markup/native/MarkupReactCommandRule.tsx");

export default function MarkupReactCommandRule(node) {
  node = node.node;
  ({ output, state, style } = node);
  closure_1 = null != noop.useContext(node(11215).AppLauncherContext);
  dependencyMap = closure_6();
  let obj = {
    style,
    variant: "text-md/bold",
    onPress() {
      let obj = node(closure_2[21]);
      const bestActiveInput = obj.getBestActiveInput();
      let tmp2;
      if (closure_1) {
        tmp2 = closure_2;
      }
      obj = { appLauncherNavigator: tmp2, channelId: bestActiveInput.channelId, commandId: bestActiveInput.commandId, commandName: bestActiveInput.commandName, currentText: null, onOpenCustomKeyboard: null, onSetCommand: null };
      let str;
      if (bestActiveInput != null) {
        str = bestActiveInput.getText();
      }
      if (str == null) {
        str = "";
      }
      obj.currentText = str;
      obj.onOpenCustomKeyboard = function onOpenCustomKeyboard(arg0) {
        let openCustomKeyboardResult;
        if (bestActiveInput != null) {
          openCustomKeyboardResult = bestActiveInput.openCustomKeyboard(arg0);
        }
        return openCustomKeyboardResult;
      };
      obj.onSetCommand = function onSetCommand() {
        navigateToLastChannelDefault();
        ActionSheetActionCreatorsDefault.hideActionSheet();
        if (bestActiveInput != null) {
          bestActiveInput.openSystemKeyboard();
        }
        if (bestActiveInput != null) {
          const applicationCommandManager = bestActiveInput.getApplicationCommandManager();
          if (applicationCommandManager != null) {
            ({ commandId, commandName } = node);
            applicationCommandManager.setPartialCommand(commandId, commandName, ApplicationCommandTypes.ApplicationCommandTriggerLocations.MENTION);
          }
        }
      };
      handleTapCommandMention(obj);
    },
    onLongPress() {
      handleLongPressCommandMention(node.commandName, node.commandId);
    },
    children: null
  };
  const items = ["/", node(8096).smartOutput(node, output, state)];
  obj.children = items;
  return jsxs(node(4556).Text, {
    style,
    variant: "text-md/bold",
    onPress() {
      let obj = node(closure_2[21]);
      const bestActiveInput = obj.getBestActiveInput();
      let tmp2;
      if (closure_1) {
        tmp2 = closure_2;
      }
      obj = { appLauncherNavigator: tmp2, channelId: bestActiveInput.channelId, commandId: bestActiveInput.commandId, commandName: bestActiveInput.commandName, currentText: null, onOpenCustomKeyboard: null, onSetCommand: null };
      let str;
      if (bestActiveInput != null) {
        str = bestActiveInput.getText();
      }
      if (str == null) {
        str = "";
      }
      obj.currentText = str;
      obj.onOpenCustomKeyboard = function onOpenCustomKeyboard(arg0) {
        let openCustomKeyboardResult;
        if (bestActiveInput != null) {
          openCustomKeyboardResult = bestActiveInput.openCustomKeyboard(arg0);
        }
        return openCustomKeyboardResult;
      };
      obj.onSetCommand = function onSetCommand() {
        navigateToLastChannelDefault();
        ActionSheetActionCreatorsDefault.hideActionSheet();
        if (bestActiveInput != null) {
          bestActiveInput.openSystemKeyboard();
        }
        if (bestActiveInput != null) {
          const applicationCommandManager = bestActiveInput.getApplicationCommandManager();
          if (applicationCommandManager != null) {
            ({ commandId, commandName } = node);
            applicationCommandManager.setPartialCommand(commandId, commandName, ApplicationCommandTypes.ApplicationCommandTriggerLocations.MENTION);
          }
        }
      };
      handleTapCommandMention(obj);
    },
    onLongPress() {
      handleLongPressCommandMention(node.commandName, node.commandId);
    },
    children: null
  });
};
export { handleTapCommandMention };
export { handleLongPressCommandMention };