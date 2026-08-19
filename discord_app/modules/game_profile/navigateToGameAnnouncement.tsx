// === Module 9170: _navigateToGameAnnouncement ===

// Module 9170 (_navigateToGameAnnouncement)
import asyncGeneratorStep from "asyncGeneratorStep" /* 5 */;
import createGuildRecordFromRust from "createGuildRecordFromRust" /* 1910 */;
import ME from "ME" /* 676 */;

const require = fn;
function _navigateToGameAnnouncement() {
  const self = this;
  const tmp = callback((arg0) => {
    closure_0 = arg0;
    c3 = 0;
    c4 = 0;
    const iter = (function*(arg0) {
      if (guild === 2) {
        guild = 3;
        HermesBuiltin.throwTypeError();
      } else if (tmp4 === 3) {
        if (arg0 === 1) {
          throw arg1;
        } else if (arg0 === 2) {
          let obj = { value: null, done: true };
          obj[0] = arg1;
          return obj;
        } else {
          return { value: "HermesInternal", done: "HermesInternal" };
        }
      } else {
        try {
          guild = 2;
          if (0 === c3) {
            if (arg0 === 1) {
              guild = 3;
              throw arg1;
            } else if (arg0 === 2) {
              guild = 3;
              obj = { value: null, done: true };
              obj[0] = arg1;
              return obj;
            } else {
              dependencyMap = tmp5;
              id = tmp2;
              let lib;
              id = undefined;
              dependencyMap = undefined;
              c3 = undefined;
              guild = undefined;
              ({ invite: c0, guildId: id, channelId: c2, messageId: c3, analyticsLocationStack: c4 } = lib);
              let constants;
              let set;
              let guild3;
              c3 = 1;
              guild = 1;
              return { value: "ct", done: true };
            }
          } else {
            if (1 === tmp5) {
              if (arg0 === 1) {
                guild = 3;
                throw arg1;
              } else if (arg0 === 2) {
                guild = 3;
                obj1 = { value: null, done: true };
                obj1[0] = arg1;
                return obj1;
              } else {
                id(38)(guild.length > 0, "analyticsLocationStack must have at least one location");
                constants = guild[guild.length - 1];
                set = null;
                if (null != lib) {
                  guild = lib.guild;
                  id = undefined;
                  if (guild != null) {
                    id = guild.id;
                  }
                  const guild2 = lib.guild;
                  let features;
                  if (guild2 != null) {
                    features = guild2.features;
                  }
                  set = new Set(features);
                }
                if (null != id) {
                  guild3 = guild.getGuild(id);
                  let joinedAt;
                  if (guild3 != null) {
                    joinedAt = guild3.joinedAt;
                  }
                  if (null == joinedAt) {
                    if (null != set) {
                      if (!set.has(constants.PREVIEW_ENABLED)) {
                        if (null != lib) {
                          let obj5 = id(8042);
                          const obj2 = { inviteKey: null, context: null, skipOnboarding: true };
                          obj2[0] = lib.code;
                          let obj3 = { location: null };
                          obj3[0] = constants;
                          obj2[1] = obj3;
                          c3 = 3;
                          guild = 1;
                          const obj4 = { value: null, done: false };
                          obj4[0] = obj5.acceptInvite(obj2);
                          return obj4;
                        }
                      }
                    }
                    let obj9 = lib(7301);
                    obj5 = { shouldNavigate: true, channelId: null, messageId: null, joinSource: null };
                    obj5[1] = dependencyMap;
                    obj5[2] = c3;
                    obj5[3] = set.GAME_PROFILE_ANNOUNCEMENTS;
                    c3 = 2;
                    guild = 1;
                    const obj6 = { value: null, done: false };
                    obj6[0] = obj9.startLurking(id, {}, obj5, guild);
                    return obj6;
                  }
                }
                guild = 3;
                return { value: "HermesInternal", done: "HermesInternal" };
              }
            } else if (2 === tmp5) {
              if (arg0 === 1) {
                guild = 3;
                throw arg1;
              } else if (arg0 === 2) {
                guild = 3;
                const obj7 = { value: null, done: true };
                obj7[0] = arg1;
                return obj7;
              } else {
                guild = 3;
                const obj8 = { value: null, done: true };
                obj8[0] = undefined;
                return obj8;
              }
            } else if (arg0 === 1) {
              guild = 3;
              throw arg1;
            } else if (arg0 === 2) {
              guild = 3;
              obj = { value: null, done: true };
              obj[0] = arg1;
              return obj;
            }
            obj3 = lib(1222);
            obj9 = { sourceLocationStack: null };
            obj9[0] = guild;
            obj3.transitionTo(guild3.CHANNEL(id, dependencyMap, c3), obj9);
          }
        } catch (tmp53) {
          guild = tmp;
          throw tmp53;
        }
      }
    })();
    iter.next();
    return iter;
  });
  closure_8 = tmp;
  const apply = tmp.apply;
  if (typeof apply === "unknown") {
    let applyArgumentsResult = HermesBuiltin.applyArguments(self);
  } else {
    applyArgumentsResult = apply(self, arguments);
  }
  return applyArgumentsResult;
}
({ GuildFeatures: c5, JoinGuildSources: closure_6, Routes: error } = ME);
const result = require("obj132").fileFinishedImporting("modules/game_profile/navigateToGameAnnouncement.tsx");

export default function navigateToGameAnnouncement() {
  const self = this;
  const apply = _navigateToGameAnnouncement.apply;
  if (typeof apply === "unknown") {
    let applyArgumentsResult = HermesBuiltin.applyArguments(self);
  } else {
    applyArgumentsResult = apply(self, arguments);
  }
  return applyArgumentsResult;
};