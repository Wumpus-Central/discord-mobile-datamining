// === Module 8762: navigateToGameAnnouncement ===

// Module 8762 (navigateToGameAnnouncement)
import asyncGeneratorStep from "asyncGeneratorStep" /* 5 */;
import GuildStore from "GuildStore" /* 1979 */;

const require = fn;
let closure_8 = async function _navigateToGameAnnouncement(arg0) {
  if (c4 === 2) {
    c4 = 3;
    throw new TypeError("Generator functions may not be called on executing generators");
  } else if (tmp4 === 3) {
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
      c4 = 2;
      if (0 === c3) {
        if (arg0 === 1) {
          c4 = 3;
          throw value;
        } else if (arg0 === 2) {
          c4 = 3;
          obj = { value, done: true };
          return obj;
        } else {
          closure_2 = tmp5;
          closure_1 = tmp2;
          closure_129_0 = undefined;
          closure_129_1 = undefined;
          closure_129_2 = undefined;
          closure_129_3 = undefined;
          closure_129_4 = undefined;
          ({ invite: closure_129_0, guildId: closure_129_1, channelId: closure_129_2, messageId: closure_129_3, analyticsLocationStack: closure_129_4 } = closure_0);
          closure_129_5 = undefined;
          closure_129_6 = undefined;
          let guild3;
          c3 = 1;
          c4 = 1;
          return { value: "PX_16", done: true };
        }
      } else {
        if (1 === tmp5) {
          if (arg0 === 1) {
            c4 = 3;
            throw value;
          } else if (arg0 === 2) {
            c4 = 3;
            const obj1 = { value, done: true };
            return obj1;
          } else {
            closure_130_1(closure_130_2[3])(closure_129_4.length > 0, "analyticsLocationStack must have at least one location");
            closure_129_5 = closure_129_4[closure_129_4.length - 1];
            closure_129_6 = null;
            if (null != closure_129_0) {
              const guild = closure_129_0.guild;
              let id;
              if (guild != null) {
                id = guild.id;
              }
              closure_129_1 = id;
              const guild2 = closure_129_0.guild;
              let features;
              if (guild2 != null) {
                features = guild2.features;
              }
              const set = new Set(features);
              closure_129_6 = set;
            }
            if (null != closure_129_1) {
              guild3 = closure_130_4.getGuild(closure_129_1);
              let joinedAt;
              if (guild3 != null) {
                joinedAt = guild3.joinedAt;
              }
              if (null == joinedAt) {
                if (null != closure_129_6) {
                  if (!closure_129_6.has(closure_130_5.PREVIEW_ENABLED)) {
                    if (null != closure_129_0) {
                      let obj5 = closure_130_1(closure_130_2[5]);
                      const obj2 = { inviteKey: closure_129_0.code, context: null, skipOnboarding: true };
                      let obj3 = { location: closure_129_5 };
                      obj2.context = obj3;
                      c3 = 3;
                      c4 = 1;
                      const obj4 = { value: obj5.acceptInvite(obj2), done: false };
                      return obj4;
                    }
                  }
                }
                let obj9 = closure_130_0(closure_130_2[4]);
                obj5 = { shouldNavigate: true, channelId: closure_129_2, messageId: closure_129_3, joinSource: closure_130_6.GAME_PROFILE_ANNOUNCEMENTS };
                c3 = 2;
                c4 = 1;
                const obj6 = { value: obj9.startLurking(closure_129_1, {}, obj5, closure_129_4), done: false };
                return obj6;
              }
            }
            c4 = 3;
            return { value: "HermesInternal", done: null };
          }
        } else if (2 === tmp5) {
          if (arg0 === 1) {
            c4 = 3;
            throw value;
          } else if (arg0 === 2) {
            c4 = 3;
            const obj7 = { value, done: true };
            return obj7;
          } else {
            c4 = 3;
            const obj8 = { value: undefined, done: true };
            return obj8;
          }
        } else if (arg0 === 1) {
          c4 = 3;
          throw value;
        } else if (arg0 === 2) {
          c4 = 3;
          obj = { value, done: true };
          return obj;
        }
        obj3 = closure_130_0(closure_130_2[6]);
        obj9 = { sourceLocationStack: closure_129_4 };
        obj3.transitionTo(closure_130_7.CHANNEL(closure_129_1, closure_129_2, closure_129_3), obj9);
      }
    } catch (tmp53) {
      c4 = tmp;
      throw tmp53;
    }
  }
};
const Constants = fn(1074);
({ GuildFeatures: hasOwnProperty, JoinGuildSources: metroRequire, Routes: closure_7 } = Constants);
const size = fn(2);
const result = size.fileFinishedImporting("modules/game_profile/navigateToGameAnnouncement.tsx");

export default function navigateToGameAnnouncement() {
  const self = this;
  const apply = closure_8.apply;
  if (typeof apply === "unknown") {
    let applyArgumentsResult = HermesBuiltin.applyArguments(self);
  } else {
    applyArgumentsResult = apply(self, arguments);
  }
  return applyArgumentsResult;
};