// === Module 8847: useCreateChannelSubmit ===

// Module 8847 (useCreateChannelSubmit)
import closure_4 from "asyncGeneratorStep" /* 5 */;
import closure_5 from "_slicedToArray" /* 32 */;
import closure_6 from "noop" /* 19 */;
import ME from "ME" /* 676 */;

const require = arg1;
({ ChannelTypes: error, Permissions: closure_8 } = ME);
let obj = { PREMIUM_CHANNEL: 0, [0]: "PREMIUM_CHANNEL" };
const result = require("set").fileFinishedImporting("modules/channel/useCreateChannelSubmit.tsx");

export default function useCreateChannelSubmit(arg0) {
  closure_0 = arg0;
  [tmp2, importDefault] = callback2(React.useState(false), 2);
  const tmp3 = callback2(React.useState({}), 2);
  closure_2 = tmp3[1];
  closure_0 = undefined;
  closure_0 = callback((arg0) => {
    closure_0 = arg0;
    c7 = 0;
    c8 = 0;
    c6 = 0;
    const iter = (function*(arg0) {
      if (body === 2) {
        body = 3;
        HermesBuiltin.throwTypeError();
      } else if (tmp7 === 3) {
        if (arg0 === 1) {
          throw arg1;
        } else if (arg0 === 2) {
          obj = { value: null, done: true };
          obj[0] = arg1;
          return obj;
        } else {
          return { value: "HermesInternal", done: "HermesInternal" };
        }
      } else {
        try {
          body = 2;
          if (0 === c7) {
            if (arg0 === 1) {
              body = 3;
              throw arg1;
            } else if (arg0 === 2) {
              body = 3;
              obj = { value: null, done: true };
              obj[0] = arg1;
              return obj;
            } else {
              c4 = tmp4;
              c3 = tmp8;
              let arr;
              closure_1 = undefined;
              let callback;
              c3 = undefined;
              c4 = undefined;
              c5 = undefined;
              c6 = undefined;
              c7 = undefined;
              ({ overwrites: c0, bitrate: closure_1, userLimit: closure_2, createMode: c3, guildId: c4, name: c5, channelType: c6, categoryId: c7 } = arr);
              body = undefined;
              closure_9 = undefined;
              let id;
              let guild_id;
              c7 = 1;
              body = 1;
              return { value: "ct", done: true };
            }
          } else if (1 === tmp8) {
            if (arg0 === 1) {
              body = 3;
              throw arg1;
            } else if (arg0 === 2) {
              body = 3;
              obj1 = { value: null, done: true };
              obj1[0] = arg1;
              return obj1;
            } else {
              if (closure_1_3 === closure_2_9.PREMIUM_CHANNEL) {
                const obj2 = { id: null, type: null, deny: null, allow: null };
                obj2[0] = c4;
                obj2[1] = arr(closure_2_3[4]).PermissionOverwriteType.ROLE;
                obj2[2] = closure_2_8.VIEW_CHANNEL;
                obj2[3] = callback(closure_2_3[5]).getFlag(0);
                arr = arr.push(obj2);
                const obj10 = callback(closure_2_3[5]);
              }
              closure_1_1(true);
              c6 = 2;
              obj1 = closure_2_1(closure_2_3[6]);
              const obj3 = { guildId: null, type: null, name: null, permissionOverwrites: null, bitrate: null, userLimit: null, parentId: null };
              obj3[0] = c4;
              obj3[1] = c6;
              obj3[2] = c5;
              obj3[3] = arr;
              obj3[4] = closure_1;
              obj3[5] = callback;
              let tmp60 = null;
              if (c6 !== closure_2_7.GUILD_CATEGORY) {
                tmp60 = c7;
              }
              obj3[6] = tmp60;
              c7 = 4;
              body = 1;
              const obj4 = { value: null, done: false };
              obj4[0] = obj1.createChannel(obj3);
              return obj4;
            }
          } else if (2 === tmp8) {
            c6 = 0;
            closure_1_1(false);
            throw c5;
          } else {
            if (3 === tmp8) {
              c6 = 1;
              let body2 = c5;
              const AccessibilityAnnouncer = arr(closure_2_3[7]).AccessibilityAnnouncer;
              const intl = arr(closure_2_3[8]).intl;
              AccessibilityAnnouncer.announce(intl.string(arr(closure_2_3[8]).t["0SbUzm"]));
              body = body2.body;
              let errors;
              if (body != null) {
                errors = body.errors;
              }
              closure_1 = errors;
              if (errors == null) {
                closure_1 = {};
              }
              closure_1_2(closure_1);
              c6 = 0;
              closure_1_1(false);
              body = 3;
              const tmp32 = closure_1_2;
            } else if (arg0 === 1) {
              body = 3;
              throw arg1;
            } else if (arg0 !== 2) {
              body = arg1;
              if (null != body) {
                body2 = body.body;
                callback = body2;
                if (body2 == null) {
                  callback = {};
                }
                closure_9 = callback;
                id = closure_9.id;
                guild_id = closure_9.guild_id;
                if (null != id) {
                  const AccessibilityAnnouncer2 = arr(closure_2_3[7]).AccessibilityAnnouncer;
                  const intl2 = arr(closure_2_3[8]).intl;
                  const obj5 = { name: null };
                  obj5[0] = c5;
                  AccessibilityAnnouncer2.announce(intl2.formatToPlainString(arr(closure_2_3[8]).t.Wke70b, obj5));
                  if (arr != null) {
                    tmp85(closure_1_10, closure_1_11);
                  }
                }
              }
              c6 = 1;
            }
            c6 = 0;
            closure_1_1(false);
            body = 3;
            obj = { value: null, done: true };
            obj[0] = arg1;
            return obj;
          }
        } catch (tmp62) {
          c5 = tmp62;
          if (tmp5 === c6) {
            body = tmp3;
            throw tmp62;
          } else if (tmp2 === tmp64) {
            c7 = tmp;
          } else {
            c7 = tmp3;
          }
        }
      }
    })();
    iter.next();
    return iter;
  });
  const items = [arg0];
  const items1 = [
    tmp2,
    tmp3[0],
    React.useCallback(function() {
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
export const CreateChannelMode = obj;