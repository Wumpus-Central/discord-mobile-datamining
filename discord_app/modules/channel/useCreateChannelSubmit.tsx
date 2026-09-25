// === Module 9002: useCreateChannelSubmit ===

// Module 9002 (useCreateChannelSubmit)
import CreateChannelActionCreatorsDefault from "CreateChannelActionCreators" /* 9003 */;
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
  [tmp2, importDefault] = noop.useState(false);
  const tmp3 = _slicedToArray(noop.useState({}), 2);
  closure_2 = tmp3[1];
  closure_0 = asyncGeneratorStep(async (arg0) => {
    if (c8 === 2) {
      c8 = 3;
      throw new TypeError("Generator functions may not be called on executing generators");
    } else if (tmp7 === 3) {
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
        c8 = 2;
        if (0 === c7) {
          if (arg0 === 1) {
            c8 = 3;
            throw value;
          } else if (arg0 === 2) {
            c8 = 3;
            const obj4 = { value, done: true };
            return obj4;
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
            return { value: "flex", done: true };
          }
        } else if (1 === tmp8) {
          if (arg0 === 1) {
            c8 = 3;
            throw value;
          } else if (arg0 === 2) {
            c8 = 3;
            const obj5 = { value, done: true };
            return obj5;
          } else {
            if (closure_131_3 === constants3.PREMIUM_CHANNEL) {
              const obj6 = { id: closure_131_4, type: closure_0(1978).PermissionOverwriteType.ROLE, deny: constants2.VIEW_CHANNEL, allow: closure_2(1086).getFlag(0) };
              closure_131_0.push(obj6);
              const obj10 = closure_2(1086);
            }
            closure_1(true);
            c6 = 2;
            const obj7 = { guildId: closure_131_4, type: closure_131_6, name: closure_131_5, permissionOverwrites: closure_131_0, bitrate: closure_131_1, userLimit: closure_131_2, parentId: null, applicationId: null };
            let tmp60 = null;
            if (closure_131_6 !== constants.GUILD_CATEGORY) {
              tmp60 = closure_131_7;
            }
            obj7.parentId = tmp60;
            obj7.applicationId = closure_131_8;
            c7 = 4;
            c8 = 1;
            const obj8 = { value: CreateChannelActionCreatorsDefault.createChannel(obj7), done: false };
            return obj8;
          }
        } else if (2 === tmp8) {
          c6 = 0;
          closure_1(false);
          throw closure_5;
        } else {
          if (3 === tmp8) {
            c6 = 1;
            closure_131_13 = closure_5;
            const AccessibilityAnnouncer = closure_0(4682).AccessibilityAnnouncer;
            const intl = closure_0(1115).intl;
            AccessibilityAnnouncer.announce(intl.string(closure_0(1115).t["0SbUzm"]));
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
                const AccessibilityAnnouncer2 = closure_0(4682).AccessibilityAnnouncer;
                const intl2 = closure_0(1115).intl;
                const obj9 = { name: closure_131_5 };
                AccessibilityAnnouncer2.announce(intl2.formatToPlainString(closure_0(1115).t.Wke70b, obj9));
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
          const obj = { value, done: true };
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