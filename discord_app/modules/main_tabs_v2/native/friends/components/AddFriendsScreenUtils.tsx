// === Module 16044: AddFriendsScreenUtils ===

// Module 16044 (AddFriendsScreenUtils)
import RelationshipActionCreatorsDefault from "RelationshipActionCreators" /* 9042 */;
import PeopleUtilsDefault from "PeopleUtils" /* 10870 */;
import asyncGeneratorStep from "asyncGeneratorStep" /* 5 */;
import ChannelStore from "ChannelStore" /* 1957 */;

const require = fn;
let closure_7 = async function _sendWave(arg0, value) {
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
            const obj1 = { value, done: true };
            return obj1;
          } else {
            dMFromUserId = closure_132_4.getDMFromUserId(closure_131_0);
            if (null == dMFromUserId) {
              c6 = 1;
              c7 = 4;
              c8 = 1;
              const obj2 = { value: closure_132_1(closure_132_2[5]).getDMChannel(closure_131_0), done: false };
              return obj2;
            } else {
              c6 = 2;
              if (null != dMFromUserId) {
                let obj7 = closure_132_0(closure_132_2[8]);
                const obj3 = { channelId: dMFromUserId, source: closure_131_2 };
                obj7.trackWaveCtaClicked(obj3);
                let obj9 = closure_132_1(closure_132_2[9]);
                let obj4 = { location: closure_132_6.SEND_WAVE };
                c7 = 5;
                c8 = 1;
                let obj5 = { value: obj9.sendStickers(dMFromUserId, ["749054660769218631"], "", obj4), done: false };
                return obj5;
              } else {
                c6 = 0;
              }
            }
          }
        } else {
          if (2 !== tmp8) {
            if (3 === tmp8) {
              c6 = 0;
              obj4 = closure_132_0(closure_132_2[6]);
              const intl = closure_132_0(closure_132_2[7]).intl;
              obj4.presentError(intl.string(closure_132_0(closure_132_2[7]).t.iufib1));
              c8 = 3;
            } else if (4 === tmp8) {
              if (arg0 === 1) {
                c8 = 3;
                throw value;
              } else if (arg0 === 2) {
                c6 = 0;
                c8 = 3;
                const obj6 = { value, done: true };
                return obj6;
              } else {
                dMFromUserId = value;
                c6 = 0;
              }
            } else if (arg0 === 1) {
              c8 = 3;
              throw value;
            } else if (arg0 !== 2) {
              if (closure_131_1) {
                obj = closure_132_1(closure_132_2[5]);
                obj7 = { recipientIds: closure_131_0 };
                obj.openPrivateChannel(obj7);
              }
            }
          }
          c6 = 0;
          obj5 = closure_132_0(closure_132_2[6]);
          const intl2 = closure_132_0(closure_132_2[7]).intl;
          obj5.presentError(intl2.string(closure_132_0(closure_132_2[7]).t.iufib1));
          c8 = 3;
          const obj8 = { value: undefined, done: true };
          return obj8;
        }
        c6 = 0;
        c8 = 3;
        obj9 = { value, done: true };
        return obj9;
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
const MessageSendLocation = fn(4553).MessageSendLocation;
const size = fn(2);
let result = size.fileFinishedImporting("modules/main_tabs_v2/native/friends/components/AddFriendsScreenUtils.tsx");

export const dismissIncomingRequest = function dismissIncomingRequest(arg0) {
  ({ userId, applicationId } = arg0);
  const obj = { userId, applicationId, location: AnalyticsSections.FRIENDS_ADD_FRIENDS_MODAL };
  obj.cancelFriendRequest(obj);
};
export const acceptIncomingRequest = function acceptIncomingRequest(arg0) {
  ({ userId, applicationId } = arg0);
  const obj = { userId, applicationId, location: AnalyticsSections.FRIENDS_ADD_FRIENDS_MODAL };
  const result = obj.maybeConfirmFriendRequestAccept(obj);
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
  let obj = { userId: user.id, context: null, type: "HermesInternal", fromFriendSuggestion: null };
  obj = { location: AnalyticsSections.FRIENDS_ADD_FRIENDS_MODAL };
  obj.context = obj;
  obj.addRelationship(obj);
};