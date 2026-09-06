// === Module 9735: useCreateChannelSubmit ===

// Module 9735 (useCreateChannelSubmit)
import CreateChannelActionCreatorsDefault from "CreateChannelActionCreators" /* 9736 */;
import asyncGeneratorStep from "asyncGeneratorStep" /* 5 */;
import _slicedToArray from "module_32" /* 32 */;
import noop from "module_19" /* 19 */;

const require = fn;
const Constants = fn(1074);
({ ChannelTypes: closure_7, Permissions: closure_8 } = Constants);
const CreateChannelMode = { PREMIUM_CHANNEL: 0, [0]: "PREMIUM_CHANNEL" };
const size = fn(2);
const result = size.fileFinishedImporting("modules/channel/useCreateChannelSubmit.tsx");

export default function useCreateChannelSubmit(arg0) {
  [tmp2, importDefault] = _slicedToArray(noop.useState(false), 2);
  const tmp3 = _slicedToArray(noop.useState({}), 2);
  closure_2 = tmp3[1];
  closure_0 = asyncGeneratorStep(async (arg0, value) => {
    if (c8 === 2) {
      c8 = 3;
      throw new TypeError("Generator functions may not be called on executing generators");
    } else if (tmp7 === 3) {
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
        c8 = 2;
        if (0 === c7) {
          if (arg0 === 1) {
            c8 = 3;
            throw value;
          } else if (arg0 === 2) {
            c8 = 3;
            obj = { value, done: true };
            return obj;
          } else {
            closure_4 = tmp4;
            closure_3 = tmp8;
            closure_131_0 = undefined;
            closure_131_1 = undefined;
            closure_131_2 = undefined;
            closure_131_3 = undefined;
            closure_131_4 = undefined;
            closure_131_5 = undefined;
            closure_131_6 = undefined;
            closure_131_7 = undefined;
            closure_131_8 = undefined;
            ({ overwrites: closure_131_0, bitrate: closure_131_1, userLimit: closure_131_2, createMode: closure_131_3, guildId: closure_131_4, name: closure_131_5, channelType: closure_131_6, categoryId: closure_131_7, applicationId: closure_131_8 } = closure_0);
            closure_131_9 = undefined;
            closure_131_10 = undefined;
            let id;
            let guild_id;
            c7 = 1;
            c8 = 1;
            return { value: "PX_16", done: true };
          }
        } else if (1 === tmp8) {
          if (arg0 === 1) {
            c8 = 3;
            throw value;
          } else if (arg0 === 2) {
            c8 = 3;
            let obj1 = { value, done: true };
            return obj1;
          } else {
            if (closure_131_3 === constants3.PREMIUM_CHANNEL) {
              const obj2 = { id: closure_131_4, type: closure_0(1894).PermissionOverwriteType.ROLE, deny: constants2.VIEW_CHANNEL, allow: closure_2(1086).getFlag(0) };
              closure_131_0.push(obj2);
              const obj10 = closure_2(1086);
            }
            closure_1(true);
            c6 = 2;
            obj1 = CreateChannelActionCreatorsDefault;
            const obj3 = { guildId: closure_131_4, type: closure_131_6, name: closure_131_5, permissionOverwrites: closure_131_0, bitrate: closure_131_1, userLimit: closure_131_2, parentId: null, applicationId: null };
            let tmp60 = null;
            if (closure_131_6 !== constants.GUILD_CATEGORY) {
              tmp60 = closure_131_7;
            }
            obj3.parentId = tmp60;
            obj3.applicationId = closure_131_8;
            c7 = 4;
            c8 = 1;
            const obj4 = { value: obj1.createChannel(obj3), done: false };
            return obj4;
          }
        } else if (2 === tmp8) {
          c6 = 0;
          closure_1(false);
          throw closure_5;
        } else {
          if (3 === tmp8) {
            c6 = 1;
            closure_131_13 = closure_5;
            const AccessibilityAnnouncer = closure_0(4411).AccessibilityAnnouncer;
            const intl = closure_0(1114).intl;
            AccessibilityAnnouncer.announce(intl.string(closure_0(1114).t["0SbUzm"]));
            const body = closure_131_13.body;
            let errors;
            if (body != null) {
              errors = body.errors;
            }
            closure_1 = errors;
            if (errors == null) {
              closure_1 = {};
            }
            closure_2(closure_1);
            c6 = 0;
            closure_1(false);
            c8 = 3;
          } else if (arg0 === 1) {
            c8 = 3;
            throw value;
          } else if (arg0 !== 2) {
            closure_131_9 = value;
            if (null != closure_131_9) {
              const body2 = closure_131_9.body;
              closure_2 = body2;
              if (body2 == null) {
                closure_2 = {};
              }
              closure_131_10 = closure_2;
              id = closure_131_10.id;
              guild_id = closure_131_10.guild_id;
              if (null != id) {
                const AccessibilityAnnouncer2 = closure_0(4411).AccessibilityAnnouncer;
                const intl2 = closure_0(1114).intl;
                const obj5 = { name: closure_131_5 };
                AccessibilityAnnouncer2.announce(intl2.formatToPlainString(closure_0(1114).t.Wke70b, obj5));
                if (closure_0 != null) {
                  tmp86(id, guild_id);
                }
              }
            }
            c6 = 1;
          }
          c6 = 0;
          closure_1(false);
          c8 = 3;
          obj = { value, done: true };
          return obj;
        }
      } catch (tmp64) {
        closure_5 = tmp64;
        if (tmp5 === c6) {
          c8 = tmp3;
          throw tmp64;
        } else if (tmp2 === tmp66) {
          c7 = tmp;
        } else {
          c7 = tmp3;
        }
      }
    }
  });
  const items = [arg0];
  const items1 = [
    tmp2,
    tmp3[0],
    noop.useCallback(function() {
      const self = this;
      const apply = closure_0.apply;
      if (typeof apply === "unknown") {
        let applyArgumentsResult = HermesBuiltin.applyArguments(self);
      } else {
        applyArgumentsResult = apply(self, arguments);
      }
      return applyArgumentsResult;
    }, items)
  ];
  return items1;
};
export { CreateChannelMode };