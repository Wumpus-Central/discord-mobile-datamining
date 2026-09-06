// === Module 12105: CommandRowButton ===

// Module 12105 (CommandRowButton)
import util from "util" /* 1114 */;
import SendMessageIcon from "SendMessageIcon" /* 4505 */;
import components_Button_Button from "components/Button/Button" /* 4975 */;
import TableRowArrow from "TableRowArrow" /* 5612 */;
import asyncGeneratorStep from "asyncGeneratorStep" /* 5 */;
import _slicedToArray from "module_32" /* 32 */;
import noop from "module_19" /* 19 */;

require = fn;
const jsx = fn(21).jsx;
const size = fn(2);
const result = size.fileFinishedImporting("modules/app_launcher/native/base_components/CommandRowButton.tsx");

export default function CommandRowIcon(hasOptions) {
  if (hasOptions.hasOptions) {
    let tmp3Result = jsx(TableRowArrow.TableRowArrow, {});
  } else {
    const obj = { size: "sm", text: null, onPress: null, icon: null, iconPosition: "end", grow: false, variant: "tertiary", disabled: null };
    const intl = util.intl;
    obj.text = intl.string(util.t.TXNS7S);
    obj.onPress = tmp2;
    obj.icon = jsx(SendMessageIcon.SendMessageIcon, { size: "sm" });
    obj.disabled = tmp;
    tmp3Result = jsx(components_Button_Button.Button, { size: "sm", text: null, onPress: null, icon: null, iconPosition: "end", grow: false, variant: "tertiary", disabled: null });
  }
  return tmp3Result;
};
export const useCommandRowSend = function useCommandRowSend(command) {
  command = command.command;
  const beforeExecuteCommand = command.beforeExecuteCommand;
  const onExecuteCommand = command.onExecuteCommand;
  const tryExecuteCommand = command.tryExecuteCommand;
  const sectionName = command.sectionName;
  closure_5 = undefined;
  let commandContext;
  let callback;
  let options = command.options;
  if (options == null) {
    options = [];
  }
  const tmp2 = tryExecuteCommand(sectionName.useState(false), 2);
  closure_5 = tmp2[1];
  let obj = command(beforeExecuteCommand[4]);
  commandContext = obj.useCommandContext(command.context);
  const items = [onExecuteCommand, command, commandContext, beforeExecuteCommand, sectionName];
  callback = sectionName.useCallback(onExecuteCommand(function*() {
    if (c4 === 2) {
      c4 = 3;
      throw new TypeError("Generator functions may not be called on executing generators");
    } else if (tmp6 === 3) {
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
        c4 = 2;
        if (0 === dependencyMap) {
          if (arg0 === 1) {
            c4 = 3;
            throw value;
          } else if (arg0 === 2) {
            c4 = 3;
            obj = { value, done: true };
            return obj;
          } else {
            closure_5(true);
            if (beforeExecuteCommand != null) {
              beforeExecuteCommand();
            }
            c3 = 1;
            let obj1 = tmp3(9289);
            obj1 = { command, optionValues: tmp3(11993).parseOptionValuesForSend(commandContext.channel, command, {}), context: commandContext, sectionName, commandOrigin: tmp3(7523).CommandOrigin.APP_LAUNCHER_APPLICATION_VIEW };
            dependencyMap = 2;
            c4 = 1;
            const obj2 = { value: obj1.executeAppLauncherCommand(obj1), done: false };
            return obj2;
          }
        } else if (1 === tmp7) {
          c3 = 0;
          closure_128_5(false);
          throw closure_2;
        } else if (arg0 === 1) {
          c4 = 3;
          throw value;
        } else if (arg0 === 2) {
          c3 = 0;
          closure_128_5(false);
          c4 = 3;
          obj = { value, done: true };
          return obj;
        } else {
          if (closure_128_2 != null) {
            closure_128_2();
          }
          c3 = 0;
          closure_128_5(false);
          c4 = 3;
          return { value: "HermesInternal", done: null };
        }
      } catch (tmp27) {
        closure_2 = tmp27;
        if (tmp4 === c3) {
          c4 = tmp2;
          throw tmp27;
        } else {
          dependencyMap = tmp;
        }
      }
    }
  }), items);
  obj = { hasOptions: options.length > 0, sending: tmp2[0], onPressSend: null };
  const items1 = [tryExecuteCommand, callback];
  obj.onPressSend = sectionName.useCallback(() => {
    if (null != tryExecuteCommand) {
      tmp(callback);
    } else {
      callback();
    }
  }, items1);
  return obj;
};