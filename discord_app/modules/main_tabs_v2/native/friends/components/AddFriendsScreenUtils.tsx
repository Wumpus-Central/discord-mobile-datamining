// discord_app/modules/main_tabs_v2/native/friends/components/AddFriendsScreenUtils.tsx
import ChannelActionCreators from "../../../../../actions/ChannelActionCreators.tsx";
import ensureGuildLoaded from "ensureGuildLoaded";
import { AnalyticsSections } from "ME";
import { MessageSendLocation } from "MESSAGE_GROUP_SPACING";
import { handleRelationshipAddError } from "../../../../../actions/RelationshipActionCreators.tsx";
import { PeopleUtils } from "../../../../people/PeopleUtils.tsx";

const require = arg1;
function _sendWave() {
  const self = this;
  const tmp = callback((arg0) => {
    let closure_0 = arg0;
    let closure_1 = arg1;
    let closure_2 = arg2;
    let c7 = 0;
    let c8 = 0;
    let c6 = 0;
    const iter = (function*(arg0) {
      if (c8 === 2) {
        c8 = 3;
        HermesBuiltin.throwTypeError();
      } else if (tmp7 === 3) {
        if (arg0 === 1) {
          throw arg1;
        } else if (arg0 === 2) {
          let obj = { value: null, done: true };
          obj[0] = arg1;
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
              throw arg1;
            } else if (arg0 === 2) {
              c8 = 3;
              obj = { value: null, done: true };
              obj[0] = arg1;
              return obj;
            } else {
              const dMFromUserId = tmp4;
              let dMFromUserId2 = tmp8;
              let flag;
              let dependencyMap;
              if (flag === undefined) {
                flag = true;
              }
              dMFromUserId2 = undefined;
              c7 = 1;
              c8 = 1;
              return { value: "ct", done: true };
            }
          } else {
            if (1 === tmp8) {
              if (arg0 === 1) {
                c8 = 3;
                throw arg1;
              } else if (arg0 === 2) {
                c8 = 3;
                const obj1 = { value: null, done: true };
                obj1[0] = arg1;
                return obj1;
              } else {
                dMFromUserId2 = dMFromUserId.getDMFromUserId(callback);
                if (null == dMFromUserId2) {
                  let constants = 1;
                  c7 = 4;
                  c8 = 1;
                  const obj2 = { value: null, done: false };
                  obj2[0] = flag(4355).getDMChannel(callback);
                  return obj2;
                } else {
                  constants = 2;
                  if (null != dMFromUserId2) {
                    let obj7 = callback(11694);
                    const obj3 = { channelId: null, source: null };
                    obj3[0] = dMFromUserId2;
                    obj3[1] = dependencyMap;
                    obj7.trackWaveCtaClicked(obj3);
                    let obj9 = flag(6965);
                    let obj4 = { location: null };
                    obj4[0] = constants.SEND_WAVE;
                    c7 = 5;
                    c8 = 1;
                    let obj5 = { value: null, done: false };
                    obj5[0] = obj9.sendStickers(dMFromUserId2, ["749054660769218631"], "", obj4);
                    return obj5;
                  } else {
                    constants = 0;
                  }
                }
              }
            } else {
              if (2 !== tmp8) {
                if (3 === tmp8) {
                  constants = 0;
                  obj4 = callback(4061);
                  const intl = callback(1236).intl;
                  obj4.presentError(intl.string(callback(1236).t.iufib1));
                  c8 = 3;
                } else if (4 === tmp8) {
                  if (arg0 === 1) {
                    c8 = 3;
                    throw arg1;
                  } else if (arg0 === 2) {
                    constants = 0;
                    c8 = 3;
                    const obj6 = { value: null, done: true };
                    obj6[0] = arg1;
                    return obj6;
                  } else {
                    dMFromUserId2 = arg1;
                    constants = 0;
                  }
                } else if (arg0 === 1) {
                  c8 = 3;
                  throw arg1;
                } else if (arg0 !== 2) {
                  if (flag) {
                    obj = flag(4355);
                    obj7 = { recipientIds: null };
                    obj7[0] = callback;
                    obj.openPrivateChannel(obj7);
                  }
                }
              }
              constants = 0;
              obj5 = callback(4061);
              const intl2 = callback(1236).intl;
              obj5.presentError(intl2.string(callback(1236).t.iufib1));
              c8 = 3;
              const obj8 = { value: null, done: true };
              obj8[0] = undefined;
              return obj8;
            }
            constants = 0;
            c8 = 3;
            obj9 = { value: null, done: true };
            obj9[0] = arg1;
            return obj9;
          }
        } catch (tmp57) {
          let closure_5 = tmp57;
          if (tmp5 === constants) {
            c8 = tmp3;
            throw tmp57;
          } else if (tmp2 === tmp59) {
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
  const _sendWave = tmp;
  const apply = tmp.apply;
  if (typeof apply === "unknown") {
    let applyArgumentsResult = HermesBuiltin.applyArguments(self);
  } else {
    applyArgumentsResult = apply(self, arguments);
  }
  return applyArgumentsResult;
}
let result = require("ME").fileFinishedImporting("modules/main_tabs_v2/native/friends/components/AddFriendsScreenUtils.tsx");

export const dismissIncomingRequest = function dismissIncomingRequest(arg0) {
  let applicationId;
  let userId;
  ({ userId, applicationId } = arg0);
  let obj = PeopleUtils;
  obj = { userId, applicationId, location: AnalyticsSections.FRIENDS_ADD_FRIENDS_MODAL };
  obj.cancelFriendRequest(obj);
};
export const acceptIncomingRequest = function acceptIncomingRequest(arg0) {
  let applicationId;
  let userId;
  ({ userId, applicationId } = arg0);
  let obj = PeopleUtils;
  obj = { userId, applicationId, location: AnalyticsSections.FRIENDS_ADD_FRIENDS_MODAL };
  const result = obj.maybeConfirmFriendRequestAccept(obj);
};
export const sendWave = function sendWave(id, arg1, arg2) {
  const self = this;
  const apply = _sendWave.apply;
  if (typeof apply === "unknown") {
    let applyArgumentsResult = HermesBuiltin.applyArguments(self);
  } else {
    applyArgumentsResult = apply(self, arguments);
  }
  return applyArgumentsResult;
};
export const addContactSuggestion = function addContactSuggestion(user) {
  let obj = handleRelationshipAddError;
  obj = { userId: user.id, context: obj, type: "HermesInternal", fromFriendSuggestion: null };
  obj = { location: AnalyticsSections.FRIENDS_ADD_FRIENDS_MODAL };
  obj.addRelationship(obj);
};