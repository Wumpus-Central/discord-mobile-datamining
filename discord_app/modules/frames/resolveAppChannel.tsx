// === Module 11440: resolveAppChannel ===

// Module 11440 (resolveAppChannel)
import asyncGeneratorStep from "asyncGeneratorStep" /* 5 */;
import ChannelStore from "ChannelStore" /* 4856 */;
import PermissionStore from "PermissionStore" /* 4936 */;

const require = fn;
let closure_7 = async function _resolveAppChannel(arg0) {
  if (c6 === 2) {
    c6 = 3;
    throw new TypeError("Generator functions may not be called on executing generators");
  } else if (tmp4 === 3) {
    if (arg0 === 1) {
      throw value;
    } else if (arg0 === 2) {
      const obj2 = { value, done: true };
      return obj2;
    } else {
      return { value: "IconComponent", done: null };
    }
  } else {
    try {
      c6 = 2;
      if (0 === c5) {
        if (arg0 === 1) {
          c6 = 3;
          throw value;
        } else if (arg0 === 2) {
          c6 = 3;
          const obj3 = { value, done: true };
          return obj3;
        } else {
          closure_4 = tmp5;
          closure_3 = tmp2;
          closure_131_1 = undefined;
          closure_131_2 = undefined;
          closure_131_0 = closure_0;
          let obj5 = closure_1;
          if (closure_1 === undefined) {
            obj5 = {};
          }
          ({ preferredChannelId: closure_131_1, fallback } = obj5);
          if (fallback === undefined) {
            fallback = true;
          }
          closure_131_2 = fallback;
          closure_131_3 = undefined;
          closure_131_4 = undefined;
          closure_131_5 = undefined;
          closure_131_6 = undefined;
          closure_131_7 = undefined;
          c5 = 1;
          c6 = 1;
          return { value: "Reflect", done: true };
        }
      } else if (1 === tmp5) {
        if (arg0 === 1) {
          c6 = 3;
          throw value;
        } else if (arg0 === 2) {
          c6 = 3;
          const obj6 = { value, done: true };
          return obj6;
        } else {
          let channel = null;
          if (null != closure_131_1) {
            channel = closure_132_3.getChannel(closure_131_1);
          }
          closure_131_3 = channel;
          if (null != closure_131_3) {
            if (closure_131_3.type === closure_132_5.GUILD_APP) {
              if (closure_131_3.application_id === closure_131_0) {
                if (closure_132_4.can(closure_132_6.VIEW_CHANNEL, closure_131_3)) {
                  const obj7 = { guildId: closure_131_3.guild_id, channelId: closure_131_3.id };
                  c6 = 3;
                  const obj8 = { value: obj7, done: true };
                  return obj8;
                }
              }
            }
          }
          let tmp43 = null != closure_131_1;
          if (tmp43) {
            tmp43 = null == closure_131_3;
          }
          closure_131_4 = tmp43;
          if (!closure_131_4) {
            if (!closure_131_2) {
              c6 = 3;
              return { value: null, done: true };
            }
          }
          c5 = 2;
          c6 = 1;
          const obj9 = { value: closure_132_0(closure_132_1[4]).fetchApplicationChannels(closure_131_0), done: false };
          return obj9;
        }
      } else if (arg0 === 1) {
        c6 = 3;
        throw value;
      } else if (arg0 === 2) {
        c6 = 3;
        const obj10 = { value, done: true };
        return obj10;
      } else {
        closure_131_5 = value;
        let found;
        if (closure_131_4) {
          found = closure_131_5.find((channel_id) => channel_id.channel_id === closure_1_1);
        }
        closure_131_6 = found;
        let first = closure_131_6;
        if (closure_131_6 == null) {
          first = undefined;
          if (closure_131_2) {
            first = closure_131_5[0];
          }
        }
        closure_131_7 = first;
        let tmp18 = null;
        if (null != closure_131_7) {
          const obj = { guildId: closure_131_7.guild_id, channelId: closure_131_7.channel_id };
          tmp18 = obj;
        }
        c6 = 3;
        const obj11 = { value: tmp18, done: true };
        return obj11;
      }
    } catch (tmp57) {
      c6 = tmp;
      throw tmp57;
    }
  }
};
const Constants = fn(1084);
({ ChannelTypes: hasOwnProperty, Permissions: metroRequire } = Constants);
const size = fn(2);
const result = size.fileFinishedImporting("modules/frames/resolveAppChannel.tsx");

export default function resolveAppChannel() {
  const self = this;
  const apply = closure_7.apply;
  if (typeof apply === "unknown") {
    let applyArgumentsResult = HermesBuiltin.applyArguments(self);
  } else {
    applyArgumentsResult = apply(self, arguments);
  }
  return applyArgumentsResult;
};