// discord_app/modules/app_launcher/native/base_components/CommandRowButton.tsx
import getShelfBadgeTypeIfActive from "getShelfBadgeTypeIfActive";
import _slicedToArray from "_slicedToArray";
import noop from "noop";
import { jsx } from "jsxProd";

const require = arg1;
const result = require("noop").fileFinishedImporting("modules/app_launcher/native/base_components/CommandRowButton.tsx");

export default function CommandRowIcon(command) {
  command = command.command;
  const beforeExecuteCommand = command.beforeExecuteCommand;
  const onExecuteCommand = command.onExecuteCommand;
  const tryExecuteCommand = command.tryExecuteCommand;
  const sectionName = command.sectionName;
  let closure_5;
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
      HermesBuiltin.throwTypeError();
    } else if (tmp6 === 3) {
      if (arg0 === 1) {
        throw arg1;
      } else if (arg0 === 2) {
        let obj = { value: null, done: true };
        obj[0] = arg1;
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
            throw arg1;
          } else if (arg0 === 2) {
            c4 = 3;
            obj = { value: null, done: true };
            obj[0] = arg1;
            return obj;
          } else {
            let closure_0 = tmp3;
            outer1_5(true);
            if (dependencyMap != null) {
              dependencyMap();
            }
            let c3 = 1;
            let obj1 = outer1_0(8019);
            obj1 = { command: null, optionValues: null, context: null, sectionName: null, commandOrigin: null };
            obj1[0] = outer1_0;
            obj1[1] = outer1_0(11185).parseOptionValuesForSend(outer1_6.channel, outer1_0, {});
            obj1[2] = outer1_6;
            obj1[3] = c4;
            obj1[4] = outer1_0(5709).CommandOrigin.APP_LAUNCHER_APPLICATION_VIEW;
            dependencyMap = 2;
            c4 = 1;
            const obj2 = { value: null, done: false };
            obj2[0] = obj1.executeAppLauncherCommand(obj1);
            return obj2;
          }
        } else if (1 === tmp7) {
          c3 = 0;
          callback2(false);
          throw callback;
        } else if (arg0 === 1) {
          c4 = 3;
          throw arg1;
        } else if (arg0 === 2) {
          c3 = 0;
          callback2(false);
          c4 = 3;
          obj = { value: null, done: true };
          obj[0] = arg1;
          return obj;
        } else {
          if (callback != null) {
            callback();
          }
          c3 = 0;
          callback2(false);
          c4 = 3;
          return { value: "HermesInternal", done: null };
        }
      } catch (tmp27) {
        callback = tmp27;
        if (tmp4 === c3) {
          c4 = tmp2;
          throw tmp27;
        } else {
          dependencyMap = tmp;
        }
      }
    }
  }), items);
  const items1 = [tryExecuteCommand, callback];
  if (tmp) {
    let tmp8Result = tmp8(tmp3(tmp4[8]).TableRowArrow, {});
  } else {
    obj = { size: "sm", text: null, onPress: null, icon: null, iconPosition: "end", grow: false, variant: "tertiary", disabled: null };
    const intl = tmp3(tmp4[10]).intl;
    obj[1] = intl.string(tmp3(tmp4[10]).t.TXNS7S);
    obj[2] = tmp7;
    obj[3] = tmp8(tmp3(tmp4[11]).SendMessageIcon, { size: "sm" });
    obj[7] = tmp2[0];
    tmp8Result = tmp8(tmp3(tmp4[9]).Button, obj);
  }
  return tmp8Result;
};