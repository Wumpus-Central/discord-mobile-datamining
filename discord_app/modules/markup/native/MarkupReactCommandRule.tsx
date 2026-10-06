// === Module 11004: MarkupReactCommandRule ===

// Module 11004 (MarkupReactCommandRule)
import Fragment from "Fragment" /* 21 */;
import KeyboardTypes from "KeyboardTypes" /* 1616 */;
import ToastUtils from "ToastUtils" /* 4573 */;
import ActionSheetActionCreatorsDefault from "ActionSheetActionCreators" /* 4860 */;
import ApplicationCommandConstants from "ApplicationCommandConstants" /* 5795 */;
import ChannelAutocompleteConstants from "ChannelAutocompleteConstants" /* 5796 */;
import ClipboardUtils from "ClipboardUtils" /* 6695 */;
import ApplicationCommandTypes from "ApplicationCommandTypes" /* 7047 */;
import navigateToLastChannelDefault from "navigateToLastChannel" /* 11009 */;
import react from "react" /* 19 */;
import ChannelStore from "ChannelStore" /* 2051 */;
import AppLauncherNativeConstants from "AppLauncherNativeConstants" /* 1489 */;
import ReactCompilerGating from "ReactCompilerGating" /* 558 */;
import size from "module_2" /* 2 */;

const require = globalThis.__r;
let _require, dependencyMap, node;

let hasOwnProperty;
let metroRequire;
function handleTapCommandMention(currentText) {
  let appLauncherNavigator;
  let commandId;
  let commandName;
  let intl;
  let intl2;
  let intl3;
  let intl4;
  let obj3;
  let obj5;
  let onSetCommand;
  ({ appLauncherNavigator, onSetCommand } = currentText);
  ({ onOpenCustomKeyboard: importDefault, commandId, commandName } = currentText);
  let sum1;
  currentText = currentText.currentText;
  const channel = ChannelStore.getChannel(currentText.channelId);
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
          let obj = { analyticsLocation: onSetCommand(sum1[6]).ApplicationCommandTriggerLocations.MENTION, preSelectedCommand: obj3, context: obj5 };
          const navigate = appLauncherNavigator.navigate;
          const COMMAND_VIEW = constants.COMMAND_VIEW;
          obj3 = { commandId: sum1 };
          obj5 = { type: "channel", channel };
          navigate(COMMAND_VIEW, obj);
        }
      }
      let obj2 = onSetCommand(sum1[7]);
      const rootNavigationRef = obj2.getRootNavigationRef();
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
      const obj4 = require("ActionSheetActionCreators");
      obj4.hideActionSheet();
      const _setTimeout = setTimeout;
      const timerId = setTimeout(() => {
        let obj2;
        let obj3;
        const obj = { type: KeyboardTypes.KeyboardTypes.APP_LAUNCHER, context: obj2 };
        obj2 = { initialRouteName: hasOwnProperty.COMMAND_VIEW, analyticsLocation: ApplicationCommandTypes.ApplicationCommandTriggerLocations.MENTION, preSelectedCommand: obj3 };
        obj3 = { commandId: sum1 };
        return importDefault(obj);
      }, 0);
    }
  }
  if ("" === currentText) {
    onSetCommand();
  } else {
    const obj6 = {
      title: intl.string(onSetCommand(sum1[11]).t.pe26Cj),
      confirmText: intl2.string(onSetCommand(sum1[11]).t.VkKicb),
      onConfirm() {
          return onSetCommand();
        },
      cancelText: intl3.string(onSetCommand(sum1[11]).t["ETE/oC"]),
      confirmColor: onSetCommand(sum1[12]).ButtonColors.BRAND,
      body: intl4.string(onSetCommand(sum1[11]).t["+awCIy"])
    };
    const show = require("actions/AlertActionCreators").show;
    require("actions/AlertActionCreators");
    intl = onSetCommand(sum1[11]).intl;
    intl2 = onSetCommand(sum1[11]).intl;
    intl3 = onSetCommand(sum1[11]).intl;
    intl4 = onSetCommand(sum1[11]).intl;
    show(obj6);
  }
}
function handleLongPressCommandMention(arg0, arg1) {
  let closure_0;
  let intl;
  let intl2;
  _require = arg0;
  let closure_1 = arg1;
  let obj = {
    label: intl.string(require("intl").t["42H+Nb"]),
    IconComponent: require("SlashBoxIcon").SlashBoxIcon,
    onPress() {
      const obj = ToastUtils;
      obj.presentCommandCopied();
      const obj2 = ClipboardUtils;
      obj2.copy("" + COMMAND_SENTINEL + closure_0);
    }
  };
  intl = require("intl").intl;
  const items = [obj];
  const DeveloperMode = require("UserSettings").DeveloperMode;
  if (DeveloperMode.getSetting()) {
    let obj2 = {
      label: intl2.string(require("intl").t.oJ1Muw),
      IconComponent: require("IdIcon").IdIcon,
      onPress() {
          const obj = ToastUtils;
          obj.presentIdCopied();
          const obj2 = ClipboardUtils;
          obj2.copy(closure_1);
        }
    };
    const push = items.push;
    intl2 = tmp(1126).intl;
    push(obj2);
  }
  const tmpResult = require("showSimpleActionSheet");
  const result = tmpResult.showSimpleActionSheet({ key: "LongPressCommandMention", options: items, hasIcons: true });
}
({ AppLauncherRouteName: hasOwnProperty, useAppLauncherNavigation: metroRequire } = AppLauncherNativeConstants);
const SUB_COMMAND_KEY_SEPARATOR = ApplicationCommandConstants.SUB_COMMAND_KEY_SEPARATOR;
const COMMAND_SENTINEL = ChannelAutocompleteConstants.COMMAND_SENTINEL;
const jsxs = Fragment.jsxs;
const tmp3 = ReactCompilerGating.isReactCompilerEnabled() ? ((node) => {
  let closure_2;
  let output;
  let state;
  let style;
  let tmp2 = dependencyMap;
  let obj = node(576);
  const cResult = obj.c(18);
  node = node.node;
  ({ output, state, style } = node);
  const tmp4 = null != react.useContext(node(11007).AppLauncherContext);
  let closure_1 = tmp4;
  const tmp5 = closure_6();
  dependencyMap = tmp5;
  if (cResult[0] === tmp4) {
    if (cResult[1] === tmp5) {
      if (cResult[2] === node.channelId) {
        if (cResult[3] === node.commandId) {
          let tmp6;
          if (cResult[4] === node.commandName) {
            tmp6 = cResult[5];
          }
          if (cResult[6] === node.commandId) {
            let tmp7;
            if (cResult[7] === node.commandName) {
              tmp7 = cResult[8];
            }
            if (cResult[9] === node) {
              if (cResult[10] === output) {
                let tmp8;
                if (cResult[11] === state) {
                  tmp8 = cResult[12];
                }
                if (cResult[13] === style) {
                  if (cResult[14] === tmp6) {
                    if (cResult[15] === tmp7) {
                      let tmp10;
                      if (cResult[16] === tmp8) {
                        tmp10 = cResult[17];
                      }
                      return tmp10;
                    }
                  }
                }
                const items = ["/", tmp8];
                const tmp12 = jsxs(node(4892).Text, { style, variant: "text-md/bold", onPress: tmp6, onLongPress: tmp7, children: items });
                cResult[13] = style;
                cResult[14] = tmp6;
                cResult[15] = tmp7;
                cResult[16] = tmp8;
                cResult[17] = tmp12;
                tmp10 = tmp12;
              }
            }
            const tmpResult = node(7779);
            const smartOutputResult = tmpResult.smartOutput(node, output, state);
            cResult[9] = node;
            cResult[10] = output;
            cResult[11] = state;
            cResult[12] = smartOutputResult;
            tmp8 = smartOutputResult;
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
    let str;
    let obj = node(closure_2[22]);
    const bestActiveInput = obj.getBestActiveInput();
    let tmp2;
    if (closure_1) {
      tmp2 = closure_2;
    }
    const obj2 = {
      appLauncherNavigator: tmp2,
      channelId: bestActiveInput.channelId,
      commandId: bestActiveInput.commandId,
      commandName: bestActiveInput.commandName,
      currentText: str,
      onOpenCustomKeyboard(arg0) {
        let openCustomKeyboardResult;
        if (bestActiveInput != null) {
          openCustomKeyboardResult = bestActiveInput.openCustomKeyboard(arg0);
        }
        return openCustomKeyboardResult;
      },
      onSetCommand() {
        let commandId;
        let commandName;
        navigateToLastChannelDefault();
        const obj = ActionSheetActionCreatorsDefault;
        obj.hideActionSheet();
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
      }
    };
    str = undefined;
    if (bestActiveInput != null) {
      str = bestActiveInput.getText();
    }
    if (str == null) {
      str = "";
    }
    handleTapCommandMention(obj2);
  };
  cResult[0] = tmp4;
  cResult[1] = tmp5;
  cResult[2] = node.channelId;
  cResult[3] = node.commandId;
  cResult[4] = node.commandName;
  cResult[5] = fn;
  tmp6 = fn;
}) : ((node) => {
  let closure_2;
  let output;
  let state;
  let style;
  node = node.node;
  ({ output, state, style } = node);
  let closure_1 = null != react.useContext(node(11007).AppLauncherContext);
  dependencyMap = closure_6();
  const Text = node(4892).Text;
  let obj2 = node(7779);
  const items = ["/", obj2.smartOutput(node, output, state)];
  return <Text style={style} variant="text-md/bold" onPress={function onPress() {
    let str;
    let obj = node(closure_2[22]);
    const bestActiveInput = obj.getBestActiveInput();
    let tmp2;
    if (closure_1) {
      tmp2 = closure_2;
    }
    const obj2 = {
      appLauncherNavigator: tmp2,
      channelId: bestActiveInput.channelId,
      commandId: bestActiveInput.commandId,
      commandName: bestActiveInput.commandName,
      currentText: str,
      onOpenCustomKeyboard(arg0) {
        let openCustomKeyboardResult;
        if (bestActiveInput != null) {
          openCustomKeyboardResult = bestActiveInput.openCustomKeyboard(arg0);
        }
        return openCustomKeyboardResult;
      },
      onSetCommand() {
        let commandId;
        let commandName;
        navigateToLastChannelDefault();
        const obj = ActionSheetActionCreatorsDefault;
        obj.hideActionSheet();
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
      }
    };
    str = undefined;
    if (bestActiveInput != null) {
      str = bestActiveInput.getText();
    }
    if (str == null) {
      str = "";
    }
    handleTapCommandMention(obj2);
  }} onLongPress={function onLongPress() {
    handleLongPressCommandMention(node.commandName, node.commandId);
  }}>{items}</Text>;
});
let result = size.fileFinishedImporting("modules/markup/native/MarkupReactCommandRule.tsx");

export default tmp3;
export { handleTapCommandMention };
export { handleLongPressCommandMention };