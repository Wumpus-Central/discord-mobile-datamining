// discord_app/modules/main_tabs_v2/native/friends/components/AddFriendsScreenUtils.tsx
import Constants from "../../../../../Constants.tsx";
import MessageConstants from "../../../../messages/MessageConstants.tsx";
import RelationshipActionCreatorsDefault from "../../../../../actions/RelationshipActionCreators.tsx";
import PeopleUtilsDefault from "../../../../people/PeopleUtils.tsx";
import _asyncToGenerator from "../../../../../../_runtime/metro/00005__asyncToGenerator.js";
import ChannelStore from "../../../../../stores/ChannelStore.tsx";
import size from "../../../../../../_runtime/metro/00002__.js";

let c7;

let obj = function _sendWave() {
  obj = _asyncToGenerator(async (recipientIds, arg1) => {
    let channelId;
    let closure_4;
    let closure_5;
    let flag;
    let obj11;
    let closure_1 = arg1;
    if (1 === c7) {
      if (recipientIds === 1) {
        let c8 = 3;
        throw value;
      } else if (recipientIds === 2) {
        c8 = 3;
        const obj4 = { value, done: true };
        return obj4;
      } else {
        channelId = closure_132_4.getDMFromUserId(recipientIds);
        if (null == channelId) {
          let c6 = 1;
          c7 = 4;
          c8 = 1;
          const obj5 = { value: obj11.getDMChannel(recipientIds), done: false };
          obj11 = closure_132_1(closure_132_2[5]);
          return obj5;
        } else {
          c6 = 2;
          if (null != channelId) {
            const obj7 = { channelId, source };
            const obj6 = closure_132_0(closure_132_2[8]);
            obj6.trackWaveCtaClicked(obj7);
            const obj8 = closure_132_1(closure_132_2[9]);
            const obj9 = { location: closure_132_6.SEND_WAVE };
            c7 = 5;
            c8 = 1;
            const obj10 = { value: obj8.sendStickers(channelId, ["749054660769218631"], "", obj9), done: false };
            return obj10;
          } else {
            c6 = 0;
          }
        }
      }
    } else if (2 === c7) {
      c6 = 0;
      const presentError2 = closure_132_0(closure_132_2[6]).presentError;
      const tmp27 = closure_132_0(closure_132_2[6]);
      const intl2 = closure_132_0(closure_132_2[7]).intl;
      presentError2(intl2.string(closure_132_0(closure_132_2[7]).t.iufib1));
      c8 = 3;
      const obj12 = { value: undefined, done: true };
      return obj12;
    } else if (3 === c7) {
      c6 = 0;
      const presentError = closure_132_0(closure_132_2[6]).presentError;
      const tmp17 = closure_132_0(closure_132_2[6]);
      const intl = closure_132_0(closure_132_2[7]).intl;
      presentError(intl.string(closure_132_0(closure_132_2[7]).t.iufib1));
    } else if (4 === c7) {
      if (recipientIds === 1) {
        c8 = 3;
        throw value;
      } else if (recipientIds === 2) {
        c6 = 0;
        c8 = 3;
        const obj13 = { value, done: true };
        return obj13;
      } else {
        channelId = value;
        c6 = 0;
      }
    } else if (recipientIds === 1) {
      c8 = 3;
      throw value;
    } else if (recipientIds === 2) {
      c6 = 0;
      c8 = 3;
      const obj14 = { value, done: true };
      return obj14;
    } else {
      const tmp6 = flag;
      if (tmp6) {
        const obj15 = { recipientIds };
        obj = closure_132_1(closure_132_2[5]);
        obj.openPrivateChannel(obj15);
      }
    }
    await "IconComponent";
    channelId = tmp4;
    flag = closure_1;
    if (closure_1 === undefined) {
      flag = true;
    }
    return "Reflect";
  });
  return obj(...arguments);
};
const AnalyticsSections = Constants.AnalyticsSections;
const MessageSendLocation = MessageConstants.MessageSendLocation;
let result = size.fileFinishedImporting("modules/main_tabs_v2/native/friends/components/AddFriendsScreenUtils.tsx");

export const dismissIncomingRequest = function dismissIncomingRequest(arg0) {
  let applicationId;
  let userId;
  ({ userId, applicationId } = arg0);
  obj = PeopleUtilsDefault;
  const obj2 = { userId, applicationId, location: AnalyticsSections.FRIENDS_ADD_FRIENDS_MODAL };
  obj.cancelFriendRequest(obj2);
};
export const acceptIncomingRequest = function acceptIncomingRequest(arg0) {
  let applicationId;
  let userId;
  ({ userId, applicationId } = arg0);
  obj = PeopleUtilsDefault;
  const obj2 = { userId, applicationId, location: AnalyticsSections.FRIENDS_ADD_FRIENDS_MODAL };
  const result = obj.maybeConfirmFriendRequestAccept(obj2);
};
export const sendWave = function sendWave() {
  return obj(...arguments);
};
export const addContactSuggestion = function addContactSuggestion(user) {
  let obj3;
  const obj2 = { userId: user.id, context: obj3, type: "IconComponent", fromFriendSuggestion: null };
  obj3 = { location: AnalyticsSections.FRIENDS_ADD_FRIENDS_MODAL };
  obj = RelationshipActionCreatorsDefault;
  obj.addRelationship(obj2);
};
