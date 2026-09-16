// === Module 16174: AddFriendsScreenUtils ===

// Module 16174 (AddFriendsScreenUtils)
import RelationshipActionCreatorsDefault from "RelationshipActionCreators" /* 9185 */;
import PeopleUtilsDefault from "PeopleUtils" /* 11016 */;
import asyncGeneratorStep from "asyncGeneratorStep" /* 5 */;
import ChannelStore from "ChannelStore" /* 1958 */;

const require = fn;
let closure_7 = async function _sendWave(arg0) {
  if (c8 === 2) {
    c8 = 3;
    throw new TypeError("Generator functions may not be called on executing generators");
  } else if (tmp7 === 3) {
    if (arg0 === 1) {
      throw value;
    } else if (arg0 === 2) {
      const obj2 = { value, done: true };
      return obj2;
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
          const obj3 = { value, done: true };
          return obj3;
        } else {
          closure_4 = tmp4;
          closure_3 = tmp8;
          closure_131_1 = undefined;
          closure_131_2 = undefined;
          closure_131_0 = closure_0;
          let flag = closure_1;
          if (closure_1 === undefined) {
            flag = true;
          }
          closure_131_1 = flag;
          closure_131_2 = closure_2;
          let dMFromUserId;
          c7 = 1;
          c8 = 1;
          return { value: "PX_16", done: true };
        }
      } else {
        if (1 === tmp8) {
          if (arg0 === 1) {
            c8 = 3;
            throw value;
          } else if (arg0 === 2) {
            c8 = 3;
            const obj4 = { value, done: true };
            return obj4;
          } else {
            dMFromUserId = closure_132_4.getDMFromUserId(closure_131_0);
            if (null == dMFromUserId) {
              c6 = 1;
              c7 = 4;
              c8 = 1;
              const obj7 = { value: closure_132_1(closure_132_2[5]).getDMChannel(closure_131_0), done: false };
              return obj7;
            } else {
              c6 = 2;
              if (null != dMFromUserId) {
                const obj9 = { channelId: dMFromUserId, source: closure_131_2 };
                closure_132_0(closure_132_2[8]).trackWaveCtaClicked(obj9);
                const obj10 = closure_132_1(closure_132_2[9]);
                const obj11 = { location: closure_132_6.SEND_WAVE };
                c7 = 5;
                c8 = 1;
                const obj12 = { value: obj10.sendStickers(dMFromUserId, ["749054660769218631"], "", obj11), done: false };
                return obj12;
              } else {
                c6 = 0;
              }
            }
          }
        } else {
          if (2 !== tmp8) {
            if (3 === tmp8) {
              c6 = 0;
              const intl = closure_132_0(closure_132_2[7]).intl;
              closure_132_0(closure_132_2[6]).presentError(intl.string(closure_132_0(closure_132_2[7]).t.iufib1));
              c8 = 3;
              const obj5 = closure_132_0(closure_132_2[6]);
            } else if (4 === tmp8) {
              if (arg0 === 1) {
                c8 = 3;
                throw value;
              } else if (arg0 === 2) {
                c6 = 0;
                c8 = 3;
                const obj14 = { value, done: true };
                return obj14;
              } else {
                dMFromUserId = value;
                c6 = 0;
              }
            } else if (arg0 === 1) {
              c8 = 3;
              throw value;
            } else if (arg0 !== 2) {
              if (closure_131_1) {
                const obj15 = { recipientIds: closure_131_0 };
                closure_132_1(closure_132_2[5]).openPrivateChannel(obj15);
                const obj = closure_132_1(closure_132_2[5]);
              }
            }
          }
          c6 = 0;
          const intl2 = closure_132_0(closure_132_2[7]).intl;
          closure_132_0(closure_132_2[6]).presentError(intl2.string(closure_132_0(closure_132_2[7]).t.iufib1));
          c8 = 3;
          const obj16 = { value: undefined, done: true };
          return obj16;
        }
        c6 = 0;
        c8 = 3;
        const obj17 = { value, done: true };
        return obj17;
      }
    } catch (tmp57) {
      closure_5 = tmp57;
      if (tmp5 === c6) {
        c8 = tmp3;
        throw tmp57;
      } else if (tmp2 === tmp59) {
        c7 = tmp;
      } else {
        c7 = tmp3;
      }
    }
  }
};
const AnalyticsSections = fn(1074).AnalyticsSections;
const MessageSendLocation = fn(4631).MessageSendLocation;
const size = fn(2);
let result = size.fileFinishedImporting("modules/main_tabs_v2/native/friends/components/AddFriendsScreenUtils.tsx");

export const dismissIncomingRequest = function dismissIncomingRequest(arg0) {
  ({ userId, applicationId } = arg0);
  PeopleUtilsDefault.cancelFriendRequest({ userId, applicationId, location: AnalyticsSections.FRIENDS_ADD_FRIENDS_MODAL });
};
export const acceptIncomingRequest = function acceptIncomingRequest(arg0) {
  ({ userId, applicationId } = arg0);
  const result = PeopleUtilsDefault.maybeConfirmFriendRequestAccept({ userId, applicationId, location: AnalyticsSections.FRIENDS_ADD_FRIENDS_MODAL });
};
export const sendWave = function sendWave() {
  const self = this;
  const apply = closure_7.apply;
  if (typeof apply === "unknown") {
    let applyArgumentsResult = HermesBuiltin.applyArguments(self);
  } else {
    applyArgumentsResult = apply(self, arguments);
  }
  return applyArgumentsResult;
};
export const addContactSuggestion = function addContactSuggestion(user) {
  const obj2 = { userId: user.id, context: { location: AnalyticsSections.FRIENDS_ADD_FRIENDS_MODAL }, type: "HermesInternal", fromFriendSuggestion: null };
  RelationshipActionCreatorsDefault.addRelationship(obj2);
};