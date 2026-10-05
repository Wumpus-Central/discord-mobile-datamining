// === Module 11729: CommandRowButton ===

// Module 11729 (CommandRowButton)
import Fragment from "Fragment" /* 21 */;
import react2 from "react" /* 576 */;
import intl2 from "intl" /* 1126 */;
import components_Button_Button from "components/Button/Button" /* 5594 */;
import TableRowArrow from "TableRowArrow" /* 6000 */;
import _asyncToGenerator from "_asyncToGenerator" /* 5 */;
import _slicedToArray from "_slicedToArray" /* 32 */;
import react from "react" /* 19 */;
import ReactCompilerGating from "ReactCompilerGating" /* 558 */;
import size from "module_2" /* 2 */;

let c4, closure_2;

const jsx = Fragment.jsx;
let tmp2 = ReactCompilerGating.isReactCompilerEnabled() ? ((arg0) => {
  let hasOptions;
  let onPressSend;
  let sending;
  let tmp5Result;
  const obj = react2;
  const cResult = obj.c(4);
  ({ hasOptions, sending, onPressSend } = arg0);
  if (cResult[0] === hasOptions) {
    if (cResult[1] === onPressSend) {
      let tmp4;
      if (cResult[2] === sending) {
        tmp4 = cResult[3];
      }
      return tmp4;
    }
  }
  if (hasOptions) {
    tmp5Result = jsx(TableRowArrow.TableRowArrow, {});
  } else {
    const Button = components_Button_Button.Button;
    const intl = intl2.intl;
    tmp5Result = <Button size="sm" text={intl.string(intl2.t.TXNS7S)} onPress={onPressSend} icon={null} iconPosition="end" grow={false} variant="tertiary" disabled={sending} />;
  }
  cResult[0] = hasOptions;
  cResult[1] = onPressSend;
  cResult[2] = sending;
  cResult[3] = tmp5Result;
  tmp4 = tmp5Result;
}) : ((hasOptions) => {
  let tmp3Result;
  if (hasOptions.hasOptions) {
    tmp3Result = jsx(TableRowArrow.TableRowArrow, {});
  } else {
    const Button = components_Button_Button.Button;
    const intl = intl2.intl;
    tmp3Result = <Button size="sm" text={intl.string(intl2.t.TXNS7S)} onPress={tmp2} icon={null} iconPosition="end" grow={false} variant="tertiary" disabled={tmp} />;
  }
  return tmp3Result;
});
const result = size.fileFinishedImporting("modules/app_launcher/native/base_components/CommandRowButton.tsx");

export default tmp2;
export const useCommandRowSend = function useCommandRowSend(command) {
  let items1;
  command = command.command;
  let beforeExecuteCommand = command.beforeExecuteCommand;
  const onExecuteCommand = command.onExecuteCommand;
  const tryExecuteCommand = command.tryExecuteCommand;
  const sectionName = command.sectionName;
  let closure_5;
  let commandContext;
  let callback;
  let options = command.options;
  const context = command.context;
  if (options == null) {
    options = [];
  }
  const tmp = options.length > 0;
  const tmp2 = tryExecuteCommand(sectionName.useState(false), 2);
  closure_5 = tmp2[1];
  const first = tmp2[0];
  let obj = command(beforeExecuteCommand[4]);
  commandContext = obj.useCommandContext(context);
  const items = [onExecuteCommand, command, commandContext, beforeExecuteCommand, sectionName];
  callback = sectionName.useCallback(onExecuteCommand(function*() {
    let c1;
    let closure_0;
    let obj3;
    if (c4 === 2) {
      c4 = 3;
      throw new TypeError("Generator functions may not be called on executing generators");
    } else if (tmp3 === 3) {
      if (arg0 === 1) {
        throw value;
      } else if (arg0 === 2) {
        const obj2 = { value, done: true };
        return obj2;
      } else {
        return { value: "IconComponent", done: null };
      }
    } else {
      let c3;
      try {
        c4 = 2;
        if (0 === beforeExecuteCommand) {
          if (arg0 === 1) {
            c4 = 3;
            throw value;
          } else if (arg0 === 2) {
            c4 = 3;
            const obj4 = { value, done: true };
            return obj4;
          } else {
            closure_5(true);
            if (beforeExecuteCommand != null) {
              beforeExecuteCommand();
            }
            c3 = 1;
            const obj5 = { command, optionValues: obj3.parseOptionValuesForSend(commandContext.channel, command, {}), context: commandContext, sectionName, commandOrigin: tmp(beforeExecuteCommand[7]).CommandOrigin.APP_LAUNCHER_APPLICATION_VIEW };
            const executeAppLauncherCommand = tmp(beforeExecuteCommand[5]).executeAppLauncherCommand;
            const tmp21 = tmp(beforeExecuteCommand[5]);
            obj3 = tmp(beforeExecuteCommand[6]);
            beforeExecuteCommand = 2;
            c4 = 1;
            const obj6 = { value: executeAppLauncherCommand(obj5), done: false };
            return obj6;
          }
        } else if (1 === tmp4) {
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
      } catch (tmp25) {
        closure_2 = tmp25;
        if (0 === c3) {
          c4 = 3;
          throw tmp25;
        } else {
          beforeExecuteCommand = 1;
        }
      }
    }
  }), items);
  let obj2 = {
    hasOptions: tmp,
    sending: first,
    onPressSend: sectionName.useCallback(() => {
      if (null != tryExecuteCommand) {
        tmp(callback);
      } else {
        callback();
      }
    }, items1)
  };
  items1 = [tryExecuteCommand, callback];
  return obj2;
};