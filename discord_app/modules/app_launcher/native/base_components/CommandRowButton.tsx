// === Module 11746: CommandRowButton ===

// Module 11746 (CommandRowButton)
import c from "c" /* 576 */;
import asyncGeneratorStep from "asyncGeneratorStep" /* 5 */;
import _slicedToArray from "module_32" /* 32 */;
import noop from "module_19" /* 19 */;

const util = TableRowArrow(1126);
const SendMessageIcon = TableRowArrow(5042);
const components_Button_Button = TableRowArrow(5376);
const TableRowArrow2 = TableRowArrow(6195);
require = fn;
const jsx = fn(21).jsx;
const ReactCompilerGating = fn(558);
const size = fn(2);
const result = size.fileFinishedImporting("modules/app_launcher/native/base_components/CommandRowButton.tsx");

export default ReactCompilerGating.isReactCompilerEnabled() ? (function CommandRowIcon(arg0) {
  let TableRowArrow = require;
  const cResult = c.c(4);
  ({ hasOptions, sending, onPressSend } = arg0);
  if (cResult[0] === hasOptions) {
    if (cResult[1] === onPressSend) {
      if (cResult[2] === sending) {
        return cResult[3];
      }
    }
  }
  if (hasOptions) {
    TableRowArrow = TableRowArrow2.TableRowArrow;
    const obj = {};
    let tmp2Result = <TableRowArrow />;
  } else {
    const obj3 = { size: "sm", text: null, onPress: null, icon: null, iconPosition: "end", grow: false, variant: "tertiary", disabled: null };
    const intl = util.intl;
    obj3.text = intl.string(util.t.TXNS7S);
    obj3.onPress = onPressSend;
    obj3.icon = jsx(SendMessageIcon.SendMessageIcon, { size: "sm" });
    obj3.disabled = sending;
    tmp2Result = jsx(components_Button_Button.Button, { size: "sm", text: null, onPress: null, icon: null, iconPosition: "end", grow: false, variant: "tertiary", disabled: null });
  }
  cResult[0] = hasOptions;
  cResult[1] = onPressSend;
  cResult[2] = sending;
  cResult[3] = tmp2Result;
}) : (function CommandRowIcon(hasOptions) {
  if (hasOptions.hasOptions) {
    let tmp3Result = jsx(TableRowArrow2.TableRowArrow, {});
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
});
export const useCommandRowSend = function useCommandRowSend(command) {
  command = command.command;
  const beforeExecuteCommand = command.beforeExecuteCommand;
  const onExecuteCommand = command.onExecuteCommand;
  const tryExecuteCommand = command.tryExecuteCommand;
  const sectionName = command.sectionName;
  closure_5 = undefined;
  let commandContext;
  let callback;
  options = command.options;
  if (options == null) {
    options = [];
  }
  const tmp2 = tryExecuteCommand(sectionName.useState(false), 2);
  closure_5 = tmp2[1];
  commandContext = command(beforeExecuteCommand[4]).useCommandContext(command.context);
  const items = [onExecuteCommand, command, commandContext, beforeExecuteCommand, sectionName];
  callback = sectionName.useCallback(onExecuteCommand(function*() {
    if (c4 === 2) {
      c4 = 3;
      throw new TypeError("Generator functions may not be called on executing generators");
    } else if (tmp6 === 3) {
      if (arg0 === 1) {
        throw value;
      } else if (arg0 === 2) {
        const obj3 = { value, done: true };
        return obj3;
      } else {
        return { value: "IconComponent", done: null };
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
            const obj5 = { value, done: true };
            return obj5;
          } else {
            closure_5(true);
            if (beforeExecuteCommand != null) {
              beforeExecuteCommand();
            }
            c3 = 1;
            const obj6 = { command, optionValues: null, context: null, sectionName: null, commandOrigin: null };
            const obj2 = tmp3(9219);
            obj6.optionValues = tmp3(11621).parseOptionValuesForSend(commandContext.channel, command, {});
            obj6.context = commandContext;
            obj6.sectionName = sectionName;
            obj6.commandOrigin = tmp3(7240).CommandOrigin.APP_LAUNCHER_APPLICATION_VIEW;
            dependencyMap = 2;
            c4 = 1;
            const obj7 = { value: obj2.executeAppLauncherCommand(obj6), done: false };
            return obj7;
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
          const obj = { value, done: true };
          return obj;
        } else {
          if (closure_128_2 != null) {
            closure_128_2();
          }
          c3 = 0;
          closure_128_5(false);
          c4 = 3;
          return { value: "IconComponent", done: null };
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
  let obj2 = { hasOptions: options.length > 0, sending: tmp2[0], onPressSend: null };
  const items1 = [tryExecuteCommand, callback];
  obj2.onPressSend = sectionName.useCallback(() => {
    if (null != tryExecuteCommand) {
      tmp(callback);
    } else {
      callback();
    }
  }, items1);
  return obj2;
};