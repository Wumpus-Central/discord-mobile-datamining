// discord_app/modules/guild_scheduled_events/native/components/DeleteEventAlert.tsx
import initialize from "initialize";
import "noop";
import scheduledEventSort from "scheduledEventSort";
import { jsx } from "jsxProd";
import createCacheKey from "createCacheKey";

const require = arg1;
let closure_6 = createCacheKey.createStyles({ contentText: { textAlign: "center" } });
const result = require("scheduledEventSort").fileFinishedImporting("modules/guild_scheduled_events/native/components/DeleteEventAlert.tsx");

export default function DeleteEventAlert(eventException) {
  let importDefault;
  let recurrenceId;
  let require;
  ({ eventId: require, guildId: importDefault, recurrenceId } = eventException);
  eventException = eventException.eventException;
  let c4;
  function _handleConfirmClick() {
    const self = this;
    const tmp = eventException(function*() {
      if (dependencyMap === 2) {
        dependencyMap = 3;
        HermesBuiltin.throwTypeError();
      } else if (tmp3 === 3) {
        if (arg0 === 1) {
          throw arg1;
        } else if (arg0 === 2) {
          let obj = { value: null, done: true };
          obj[0] = arg1;
          return obj;
        } else {
          return { value: "T", done: null };
        }
      } else {
        try {
          dependencyMap = 2;
          if (0 === v0) {
            if (arg0 === 1) {
              dependencyMap = 3;
              throw arg1;
            } else if (arg0 === 2) {
              dependencyMap = 3;
              obj = { value: null, done: true };
              obj[0] = arg1;
              return obj;
            } else {
              let closure_0 = tmp4;
              const obj8 = v0(8880);
              if (outer1_4) {
                v0 = 2;
                dependencyMap = 1;
                let obj1 = { value: null, done: false };
                obj1[0] = obj8.deleteRecurrence(v0, outer1_0, dependencyMap, outer1_3);
                return obj1;
              } else {
                v0 = 1;
                dependencyMap = 1;
                const obj2 = { value: null, done: false };
                obj2[0] = obj8.deleteGuildEvent(outer1_0, v0);
                return obj2;
              }
            }
          } else {
            if (1 === tmp4) {
              if (arg0 === 1) {
                dependencyMap = 3;
                throw arg1;
              } else if (arg0 === 2) {
                dependencyMap = 3;
                const obj3 = { value: null, done: true };
                obj3[0] = arg1;
                return obj3;
              }
            } else if (arg0 === 1) {
              dependencyMap = 3;
              throw arg1;
            } else if (arg0 === 2) {
              dependencyMap = 3;
              obj = { value: null, done: true };
              obj[0] = arg1;
              return obj;
            }
            obj1 = v0(4270);
            obj1.hideActionSheet();
            dependencyMap = 3;
            return { value: "T", done: null };
          }
        } catch (tmp16) {
          dependencyMap = tmp;
          throw tmp16;
        }
      }
    });
    const _handleConfirmClick = tmp;
    const apply = tmp.apply;
    if (typeof apply === "unknown") {
      let applyArgumentsResult = HermesBuiltin.applyArguments(self);
    } else {
      applyArgumentsResult = apply(self, arguments);
    }
    return applyArgumentsResult;
  }
  let obj = require(recurrenceId[5]);
  const items = [c4];
  const stateFromStores = obj.useStateFromStores(items, () => _undefined.getGuildScheduledEvent(closure_0));
  let recurrence_rule;
  if (stateFromStores != null) {
    recurrence_rule = stateFromStores.recurrence_rule;
  }
  c4 = tmp7;
  const intl = tmp2(tmp3[9]).intl;
  const string = intl.string;
  const t = tmp2(tmp3[9]).t;
  if (null != recurrenceId) {
    let stringResult = string(t.tqClly);
  } else if (tmp6) {
    stringResult = string(t.wr33rW);
  } else {
    stringResult = string(t.B9sJLX);
  }
  obj = { title: stringResult, content: null, extraContent: null, actions: null };
  const intl2 = tmp2(tmp3[9]).intl;
  obj[1] = intl2.string(require(recurrenceId[9]).t.v2GWNQ);
  let tmp8Result = null;
  if (null != recurrence_rule) {
    tmp8Result = null;
    if (!tmp7) {
      obj = { variant: "text-md/medium", color: "text-default", style: null, children: null };
      obj[2] = tmp.contentText;
      const intl3 = tmp2(tmp3[9]).intl;
      obj[3] = intl3.format(tmp2(tmp3[9]).t.ZcpcyO, {});
      tmp8Result = tmp8(tmp2(tmp3[10]).Text, obj);
    }
  }
  obj[2] = tmp8Result;
  let obj1 = {
    variant: "destructive",
    onPress: function handleConfirmClick() {
      const self = this;
      const apply = _handleConfirmClick.apply;
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
      const intl4 = tmp2(tmp3[9]).intl;
      let stringResult1 = intl4.string(tmp2(tmp3[9]).t["8ZsNv5"]);
    }
    obj1[2] = stringResult1;
    const items1 = [tmp8(tmp11, obj1, "delete"), ];
    let obj2 = { variant: "secondary", text: null };
    const intl6 = tmp2(tmp3[9]).intl;
    obj2[1] = intl6.string(tmp2(tmp3[9]).t.oEAioF);
    items1[1] = tmp8(tmp2(tmp3[8]).AlertActionButton, obj2, "cancel");
    obj[3] = items1;
    return tmp8(tmp2(tmp3[8]).AlertModal, obj);
  }
  const intl5 = tmp2(tmp3[9]).intl;
  stringResult1 = intl5.string(tmp2(tmp3[9]).t.B9sJLX);
};