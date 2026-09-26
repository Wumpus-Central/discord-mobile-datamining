// === Module 9273: DeleteEventAlert ===

// Module 9273 (DeleteEventAlert)
import asyncGeneratorStep from "asyncGeneratorStep" /* 5 */;
import noop from "module_19" /* 19 */;
import GuildScheduledEventStore from "GuildScheduledEventStore" /* 6946 */;

const require = globalThis.__r;

const require = fn;
const jsx = fn(21).jsx;
const createStyles = fn(4836);
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
        const obj3 = { value, done: true };
        return obj3;
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
            const obj4 = { value, done: true };
            return obj4;
          } else {
            closure_0 = tmp4;
            const obj8 = v1(8981);
            if (GuildScheduledEventStore) {
              v1 = 2;
              dependencyMap = 1;
              const obj5 = { value: obj8.deleteRecurrence(importDefault, require, recurrenceId, eventException), done: false };
              return obj5;
            } else {
              v1 = 1;
              dependencyMap = 1;
              const obj6 = { value: obj8.deleteGuildEvent(require, importDefault), done: false };
              return obj6;
            }
          }
        } else {
          if (1 === tmp4) {
            if (arg0 === 1) {
              dependencyMap = 3;
              throw value;
            } else if (arg0 === 2) {
              dependencyMap = 3;
              const obj7 = { value, done: true };
              return obj7;
            }
          } else if (arg0 === 1) {
            dependencyMap = 3;
            throw value;
          } else if (arg0 === 2) {
            dependencyMap = 3;
            const obj = { value, done: true };
            return obj;
          }
          v1(4800).hideActionSheet();
          dependencyMap = 3;
          return { value: "HermesInternal", done: null };
        }
      } catch (tmp16) {
        dependencyMap = tmp;
        throw tmp16;
      }
    }
  };
  const tmp = closure_6();
  const items = [closure_4];
  const stateFromStores = require("initialize").useStateFromStores(items, () => GuildScheduledEventStore.getGuildScheduledEvent(require));
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
  const obj2 = { title: stringResult, content: null, extraContent: null, actions: null };
  const intl2 = require("util").intl;
  obj2.content = intl2.string(require("util").t.v2GWNQ);
  let tmp8Result = null;
  if (null != recurrence_rule) {
    tmp8Result = null;
    if (!tmp7) {
      let obj3 = { variant: "text-md/medium", color: "text-default", style: tmp.contentText, children: null };
      const intl3 = require("util").intl;
      obj3.children = intl3.format(require("util").t.ZcpcyO, {});
      tmp8Result = tmp8(require("Text/Text").Text, obj3);
    }
  }
  obj2.extraContent = tmp8Result;
  let obj4 = {
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
    obj4.text = stringResult1;
    const items1 = [tmp8(tmp11, obj4, "delete"), ];
    let obj5 = { variant: "secondary", text: null };
    const intl6 = require("util").intl;
    obj5.text = intl6.string(require("util").t.oEAioF);
    items1[1] = tmp8(require("AlertModal").AlertActionButton, obj5, "cancel");
    obj2.actions = items1;
    return tmp8(require("AlertModal").AlertModal, obj2);
  }
  const intl5 = require("util").intl;
  stringResult1 = intl5.string(require("util").t.B9sJLX);
  let obj = require("initialize");
};