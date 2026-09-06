// === Module 9818: DeleteEventAlert ===

// Module 9818 (DeleteEventAlert)
import asyncGeneratorStep from "asyncGeneratorStep" /* 5 */;
import noop from "module_19" /* 19 */;
import GuildScheduledEventStore from "GuildScheduledEventStore" /* 7526 */;

const require = fn;
const jsx = fn(21).jsx;
const createStyles = fn(4560);
let closure_6 = createStyles.createStyles({ contentText: { textAlign: "center" } });
const size = fn(2);
const result = size.fileFinishedImporting("modules/guild_scheduled_events/native/components/DeleteEventAlert.tsx");

export default function DeleteEventAlert(eventException) {
  ({ eventId: require, guildId: importDefault, recurrenceId } = eventException);
  eventException = eventException.eventException;
  closure_4 = undefined;
  closure_5 = async function _handleConfirmClick() {
    if (dependencyMap === 2) {
      dependencyMap = 3;
      throw new TypeError("Generator functions may not be called on executing generators");
    } else if (tmp3 === 3) {
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
        dependencyMap = 2;
        if (0 === v1) {
          if (arg0 === 1) {
            dependencyMap = 3;
            throw value;
          } else if (arg0 === 2) {
            dependencyMap = 3;
            obj = { value, done: true };
            return obj;
          } else {
            closure_0 = tmp4;
            const obj8 = v1(9703);
            if (GuildScheduledEventStore) {
              v1 = 2;
              dependencyMap = 1;
              let obj1 = { value: obj8.deleteRecurrence(importDefault, require, recurrenceId, eventException), done: false };
              return obj1;
            } else {
              v1 = 1;
              dependencyMap = 1;
              const obj2 = { value: obj8.deleteGuildEvent(require, importDefault), done: false };
              return obj2;
            }
          }
        } else {
          if (1 === tmp4) {
            if (arg0 === 1) {
              dependencyMap = 3;
              throw value;
            } else if (arg0 === 2) {
              dependencyMap = 3;
              const obj3 = { value, done: true };
              return obj3;
            }
          } else if (arg0 === 1) {
            dependencyMap = 3;
            throw value;
          } else if (arg0 === 2) {
            dependencyMap = 3;
            obj = { value, done: true };
            return obj;
          }
          obj1 = v1(4527);
          obj1.hideActionSheet();
          dependencyMap = 3;
          return { value: "HermesInternal", done: null };
        }
      } catch (tmp16) {
        dependencyMap = tmp;
        throw tmp16;
      }
    }
  };
  let obj = require("initialize");
  const items = [closure_4];
  const stateFromStores = obj.useStateFromStores(items, () => GuildScheduledEventStore.getGuildScheduledEvent(require));
  let recurrence_rule;
  if (stateFromStores != null) {
    recurrence_rule = stateFromStores.recurrence_rule;
  }
  closure_4 = tmp7;
  const intl = require("util").intl;
  const string = intl.string;
  const t = require("util").t;
  if (null != recurrenceId) {
    let stringResult = string(t.tqClly);
  } else if (tmp6) {
    stringResult = string(t.wr33rW);
  } else {
    stringResult = string(t.B9sJLX);
  }
  obj = { title: stringResult, content: null, extraContent: null, actions: null };
  const intl2 = require("util").intl;
  obj.content = intl2.string(require("util").t.v2GWNQ);
  let tmp8Result = null;
  if (null != recurrence_rule) {
    tmp8Result = null;
    if (!tmp7) {
      obj = { variant: "text-md/medium", color: "text-default", style: tmp.contentText, children: null };
      const intl3 = require("util").intl;
      obj.children = intl3.format(require("util").t.ZcpcyO, {});
      tmp8Result = tmp8(require("Text/Text").Text, obj);
    }
  }
  obj.extraContent = tmp8Result;
  let obj1 = {
    variant: "destructive",
    onPress: function handleConfirmClick() {
      const self = this;
      const apply = closure_5.apply;
      if (typeof apply === "unknown") {
        let applyArgumentsResult = HermesBuiltin.applyArguments(self);
      } else {
        applyArgumentsResult = apply(self, arguments);
      }
      return applyArgumentsResult;
    },
    text: null
  };
  if (null != recurrence_rule) {
    if (!tmp7) {
      const intl4 = require("util").intl;
      let stringResult1 = intl4.string(require("util").t["8ZsNv5"]);
    }
    obj1.text = stringResult1;
    const items1 = [tmp8(tmp11, obj1, "delete"), ];
    let obj2 = { variant: "secondary", text: null };
    const intl6 = require("util").intl;
    obj2.text = intl6.string(require("util").t.oEAioF);
    items1[1] = tmp8(require("AlertModal").AlertActionButton, obj2, "cancel");
    obj.actions = items1;
    return tmp8(require("AlertModal").AlertModal, obj);
  }
  const intl5 = require("util").intl;
  stringResult1 = intl5.string(require("util").t.B9sJLX);
  tmp = closure_6();
};