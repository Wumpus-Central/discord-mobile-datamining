// === Module 15893: AddFriendsScreenUtils ===

// Module 15893 (AddFriendsScreenUtils)
import RelationshipActionCreatorsDefault from "RelationshipActionCreators" /* 9388 */;
import PeopleUtilsDefault from "PeopleUtils" /* 10525 */;
import asyncGeneratorStep from "asyncGeneratorStep" /* 5 */;
import ChannelStore from "ChannelStore" /* 2044 */;

const require = fn;
let closure_7 = async function _sendWave(arg0) {
  closure_4 = tmp4;
  closure_131_0 = closure_0;
  let flag = closure_1;
  if (closure_1 === undefined) {
    flag = true;
  }
  closure_131_1 = flag;
  closure_131_2 = closure_2;
  await "flex";
  if (1 === tmp8) {
    if (arg0 === 1) {
      c8 = 3;
      throw value;
    } else if (arg0 === 2) {
      c8 = 3;
      return { value, done: true };
    } else {
      let dMFromUserId = closure_132_4.getDMFromUserId(closure_131_0);
      if (null == dMFromUserId) {
        c6 = 1;
        c7 = 4;
        c8 = 1;
        return { value: closure_132_1(closure_132_2[5]).getDMChannel(closure_131_0), done: false };
      } else {
        c6 = 2;
        if (null != dMFromUserId) {
          closure_132_0(closure_132_2[8]).trackWaveCtaClicked({ channelId: dMFromUserId, source: closure_131_2 });
          c7 = 5;
          c8 = 1;
          closure_132_1(closure_132_2[9]);
          return { value: closure_132_1(closure_132_2[9]).sendStickers(dMFromUserId, ["749054660769218631"], "", { location: closure_132_6.SEND_WAVE }), done: false };
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
        closure_132_0(closure_132_2[6]);
      } else if (4 === tmp8) {
        if (arg0 === 1) {
          c8 = 3;
          throw value;
        } else if (arg0 === 2) {
          c6 = 0;
          c8 = 3;
          return { value, done: true };
        } else {
          dMFromUserId = value;
          c6 = 0;
        }
      } else if (arg0 === 1) {
        c8 = 3;
        throw value;
      } else if (arg0 !== 2) {
        if (closure_131_1) {
          closure_132_1(closure_132_2[5]).openPrivateChannel({ recipientIds: closure_131_0 });
          closure_132_1(closure_132_2[5]);
        }
      }
    }
    c6 = 0;
    const intl2 = closure_132_0(closure_132_2[7]).intl;
    closure_132_0(closure_132_2[6]).presentError(intl2.string(closure_132_0(closure_132_2[7]).t.iufib1));
    c8 = 3;
    return { value: undefined, done: true };
  }
  return value;
};
const AnalyticsSections = fn(1074).AnalyticsSections;
const MessageSendLocation = fn(4838).MessageSendLocation;
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