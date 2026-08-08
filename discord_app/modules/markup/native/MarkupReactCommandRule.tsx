// discord_app/modules/markup/native/MarkupReactCommandRule.tsx
import context from "context";
import ensureGuildLoaded from "ensureGuildLoaded";
import APP_LAUNCHER_BUILT_IN_SECTION_ICON from "APP_LAUNCHER_BUILT_IN_SECTION_ICON";
import { SUB_COMMAND_KEY_SEPARATOR } from "TRUE_OPTION_NAME";
import { COMMAND_SENTINEL } from "regExp";
import { jsxs } from "getBestActiveInput";
import { SlashBoxIcon } from "../../../design/components/Icon/native/redesign/generated/SlashBoxIcon.tsx";
import { getSystemLocale } from "../../../intl/index.native.tsx";
import { showSimpleActionSheet } from "../../action_sheet/native/showSimpleActionSheet.tsx";
import { explicitContentFromProto } from "../../user_settings/UserSettings.tsx";

let c5;
let closure_6;
const require = arg1;
function handleTapCommandMention(channelId) {
  let appLauncherNavigator;
  let commandId;
  let commandName;
  let importDefault;
  let onSetCommand;
  ({ appLauncherNavigator, onSetCommand } = channelId);
  ({ onOpenCustomKeyboard: importDefault, commandId, commandName } = channelId);
  let sum1;
  channel = channel.getChannel(channelId.channelId);
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
          let obj = { analyticsLocation: null, preSelectedCommand: null, context: null };
          obj[0] = onSetCommand(sum1[6]).ApplicationCommandTriggerLocations.MENTION;
          obj = { commandId: null };
          obj[0] = sum1;
          obj[1] = obj;
          let obj1 = { type: "channel", channel: null };
          obj1[1] = channel;
          obj[2] = obj1;
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
      importDefault(sum1[8]).hideActionSheet();
      const _setTimeout = setTimeout;
      const timerId = setTimeout(() => {
        let obj = { type: onSetCommand(sum1[9]).KeyboardTypes.APP_LAUNCHER, context: null };
        obj = { initialRouteName: outer1_5.COMMAND_VIEW, analyticsLocation: onSetCommand(sum1[6]).ApplicationCommandTriggerLocations.MENTION, preSelectedCommand: obj };
        obj = { commandId: sum1 };
        obj[1] = obj;
        return callback(obj);
      }, 0);
      const obj4 = importDefault(sum1[8]);
    }
  }
  if ("" === channelId.currentText) {
    onSetCommand();
  } else {
    const obj2 = { title: null, confirmText: null, onConfirm: null, cancelText: null, confirmColor: null, body: null };
    const intl = onSetCommand(sum1[11]).intl;
    obj2[0] = intl.string(onSetCommand(sum1[11]).t.pe26Cj);
    const intl2 = onSetCommand(sum1[11]).intl;
    obj2[1] = intl2.string(onSetCommand(sum1[11]).t.VkKicb);
    obj2[2] = function onConfirm() {
      return onSetCommand();
    };
    const intl3 = onSetCommand(sum1[11]).intl;
    obj2[3] = intl3.string(onSetCommand(sum1[11]).t["ETE/oC"]);
    obj2[4] = onSetCommand(sum1[12]).ButtonColors.BRAND;
    const intl4 = onSetCommand(sum1[11]).intl;
    obj2[5] = intl4.string(onSetCommand(sum1[11]).t["+awCIy"]);
    importDefault(sum1[10]).show(obj2);
    const obj8 = importDefault(sum1[10]);
  }
}
function handleLongPressCommandMention(arg0, arg1) {
  const _require = arg0;
  let closure_1 = arg1;
  let obj = { label: null, IconComponent: null, onPress: null };
  const intl = _getSystemLocale.intl;
  obj[0] = intl.string(_getSystemLocale.t["42H+Nb"]);
  obj[1] = _SlashBoxIcon.SlashBoxIcon;
  obj[2] = function onPress() {
    callback(outer1_2[14]).presentCommandCopied();
    const obj = callback(outer1_2[14]);
    callback(outer1_2[15]).copy("" + outer1_8 + callback);
  };
  const items = [obj];
  const DeveloperMode = _explicitContentFromProto.DeveloperMode;
  if (DeveloperMode.getSetting()) {
    obj = { label: null, IconComponent: null, onPress: null };
    const intl2 = tmp(1236).intl;
    obj[0] = intl2.string(tmp(1236).t.oJ1Muw);
    obj[1] = tmp(9546).IdIcon;
    obj[2] = function onPress() {
      callback(outer1_2[14]).presentIdCopied();
      const obj = callback(outer1_2[14]);
      callback(outer1_2[15]).copy(closure_1);
    };
    items.push(obj);
  }
  const result = _showSimpleActionSheet.showSimpleActionSheet({ key: "LongPressCommandMention", options: items, hasIcons: true });
}
({ AppLauncherRouteName: c5, useAppLauncherNavigation: closure_6 } = APP_LAUNCHER_BUILT_IN_SECTION_ICON);
let result = require("APP_LAUNCHER_BUILT_IN_SECTION_ICON").fileFinishedImporting("modules/markup/native/MarkupReactCommandRule.tsx");

export default function MarkupReactCommandRule(node) {
  let output;
  let state;
  let style;
  node = node.node;
  let closure_1;
  let dependencyMap;
  ({ output, state, style } = node);
  closure_1 = null != React.useContext(node(9548).AppLauncherContext);
  dependencyMap = callback();
  let obj = {
    style,
    variant: "text-md/bold",
    onPress() {
      let obj = node(table[21]);
      const bestActiveInput = obj.getBestActiveInput();
      let tmp2;
      if (closure_1) {
        tmp2 = table;
      }
      obj = { appLauncherNavigator: tmp2, channelId: bestActiveInput.channelId, commandId: bestActiveInput.commandId, commandName: bestActiveInput.commandName, currentText: null, onOpenCustomKeyboard: null, onSetCommand: null };
      let str;
      if (bestActiveInput != null) {
        str = bestActiveInput.getText();
      }
      if (str == null) {
        str = "";
      }
      obj[4] = str;
      obj[5] = function onOpenCustomKeyboard(arg0) {
        let openCustomKeyboardResult;
        if (bestActiveInput != null) {
          openCustomKeyboardResult = bestActiveInput.openCustomKeyboard(arg0);
        }
        return openCustomKeyboardResult;
      };
      obj[6] = function onSetCommand() {
        let commandId;
        let commandName;
        callback(9551)();
        callback(4271).hideActionSheet();
        if (bestActiveInput != null) {
          obj2.openSystemKeyboard();
        }
        if (bestActiveInput != null) {
          const applicationCommandManager = obj2.getApplicationCommandManager();
          if (applicationCommandManager != null) {
            ({ commandId, commandName } = bestActiveInput);
            applicationCommandManager.setPartialCommand(commandId, commandName, node(6982).ApplicationCommandTriggerLocations.MENTION);
          }
        }
      };
      outer1_10(obj);
    },
    onLongPress() {
      outer1_11(node.commandName, node.commandId);
    },
    children: null
  };
  const items = ["/", node(9553).smartOutput(node, output, state)];
  obj[4] = items;
  return jsxs(node(4299).Text, {
    style,
    variant: "text-md/bold",
    onPress() {
      let obj = node(table[21]);
      const bestActiveInput = obj.getBestActiveInput();
      let tmp2;
      if (closure_1) {
        tmp2 = table;
      }
      obj = { appLauncherNavigator: tmp2, channelId: bestActiveInput.channelId, commandId: bestActiveInput.commandId, commandName: bestActiveInput.commandName, currentText: null, onOpenCustomKeyboard: null, onSetCommand: null };
      let str;
      if (bestActiveInput != null) {
        str = bestActiveInput.getText();
      }
      if (str == null) {
        str = "";
      }
      obj[4] = str;
      obj[5] = function onOpenCustomKeyboard(arg0) {
        let openCustomKeyboardResult;
        if (bestActiveInput != null) {
          openCustomKeyboardResult = bestActiveInput.openCustomKeyboard(arg0);
        }
        return openCustomKeyboardResult;
      };
      obj[6] = function onSetCommand() {
        let commandId;
        let commandName;
        callback(9551)();
        callback(4271).hideActionSheet();
        if (bestActiveInput != null) {
          obj2.openSystemKeyboard();
        }
        if (bestActiveInput != null) {
          const applicationCommandManager = obj2.getApplicationCommandManager();
          if (applicationCommandManager != null) {
            ({ commandId, commandName } = bestActiveInput);
            applicationCommandManager.setPartialCommand(commandId, commandName, node(6982).ApplicationCommandTriggerLocations.MENTION);
          }
        }
      };
      outer1_10(obj);
    },
    onLongPress() {
      outer1_11(node.commandName, node.commandId);
    },
    children: null
  });
};
export { handleTapCommandMention };
export { handleLongPressCommandMention };