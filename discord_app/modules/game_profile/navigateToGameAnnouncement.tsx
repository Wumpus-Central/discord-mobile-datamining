// === Module 8449: navigateToGameAnnouncement ===

// Module 8449 (navigateToGameAnnouncement)
import _asyncToGenerator from "_asyncToGenerator" /* 5 */;
import GuildStore from "GuildStore" /* 2074 */;
import Constants from "Constants" /* 1085 */;
import size from "module_2" /* 2 */;

let hasOwnProperty;
let metroImportDefault;
let metroRequire;
let obj = function _navigateToGameAnnouncement() {
  obj = _asyncToGenerator(async function(arg0) {
    let c0;
    let c2;
    let c3;
    let c4;
    let id;
    let messageId;
    let obj6;
    let obj8;
    let sourceLocationStack;
    let closure_0 = arg0;
    if (sourceLocationStack === 2) {
      sourceLocationStack = 3;
      throw new TypeError("Generator functions may not be called on executing generators");
    } else if (tmp3 === 3) {
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
        let channelId;
        let _location;
        let _Set1;
        let joinedAt;
        sourceLocationStack = 2;
        if (0 === messageId) {
          if (arg0 === 1) {
            sourceLocationStack = 3;
            throw value;
          } else if (arg0 === 2) {
            sourceLocationStack = 3;
            const obj3 = { value, done: true };
            return obj3;
          } else {
            let closure_2 = tmp4;
            let closure_1 = tmp;
            c0 = undefined;
            id = undefined;
            channelId = undefined;
            ({ invite: c0, guildId: id, channelId: c2, messageId: c3, analyticsLocationStack: c4 } = closure_0);
            _location = undefined;
            _Set1 = undefined;
            joinedAt = undefined;
            messageId = 1;
            sourceLocationStack = 1;
            return { value: "Reflect", done: true };
          }
        } else {
          if (1 === messageId) {
            if (arg0 === 1) {
              sourceLocationStack = 3;
              throw value;
            } else if (arg0 === 2) {
              sourceLocationStack = 3;
              const obj5 = { value, done: true };
              return obj5;
            } else {
              closure_130_1(closure_130_2[3])(sourceLocationStack.length > 0, "analyticsLocationStack must have at least one location");
              _location = sourceLocationStack[sourceLocationStack.length - 1];
              _Set1 = null;
              if (null != c0) {
                const guild = c0.guild;
                id = undefined;
                if (guild != null) {
                  id = guild.id;
                }
                const guild2 = c0.guild;
                let features;
                const _Set = Set;
                if (guild2 != null) {
                  features = guild2.features;
                }
                const self = this;
                const self2 = this;
                _Set1 = new _Set(features);
              }
              if (null != id) {
                closure_130_4.getGuild(id);
                joinedAt = undefined;
                if (joinedAt != null) {
                  joinedAt = joinedAt.joinedAt;
                }
                if (null == joinedAt) {
                  if (null != _Set1) {
                    if (!_Set1.has(closure_130_5.PREVIEW_ENABLED)) {
                      if (null != c0) {
                        const obj7 = { inviteKey: c0.code, context: obj8, skipOnboarding: true };
                        obj8 = { location: _location };
                        messageId = 3;
                        sourceLocationStack = 1;
                        const obj9 = { value: obj6.acceptInvite(obj7), done: false };
                        obj6 = closure_130_1(closure_130_2[5]);
                        return obj9;
                      }
                    }
                  }
                  const obj10 = closure_130_0(closure_130_2[4]);
                  const obj11 = { shouldNavigate: true, channelId, messageId, joinSource: closure_130_6.GAME_PROFILE_ANNOUNCEMENTS };
                  messageId = 2;
                  sourceLocationStack = 1;
                  const obj12 = { value: obj10.startLurking(id, {}, obj11, sourceLocationStack), done: false };
                  return obj12;
                }
              }
              sourceLocationStack = 3;
              return { value: "IconComponent", done: null };
            }
          } else if (2 === messageId) {
            if (arg0 === 1) {
              sourceLocationStack = 3;
              throw value;
            } else if (arg0 === 2) {
              sourceLocationStack = 3;
              const obj13 = { value, done: true };
              return obj13;
            } else {
              sourceLocationStack = 3;
              const obj14 = { value: undefined, done: true };
              return obj14;
            }
          } else if (arg0 === 1) {
            sourceLocationStack = 3;
            throw value;
          } else if (arg0 === 2) {
            sourceLocationStack = 3;
            obj = { value, done: true };
            return obj;
          }
          const obj15 = { sourceLocationStack };
          const obj4 = closure_130_0(closure_130_2[6]);
          obj4.transitionTo(closure_130_7.CHANNEL(id, channelId, messageId), obj15);
        }
      } catch (tmp50) {
        sourceLocationStack = 3;
        throw tmp50;
      }
    }
  });
  return obj(...arguments);
};
({ GuildFeatures: hasOwnProperty, JoinGuildSources: metroRequire, Routes: metroImportDefault } = Constants);
const result = size.fileFinishedImporting("modules/game_profile/navigateToGameAnnouncement.tsx");

export default function navigateToGameAnnouncement() {
  return obj(...arguments);
};