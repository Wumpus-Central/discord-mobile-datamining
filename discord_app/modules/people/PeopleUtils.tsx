// discord_app/modules/people/PeopleUtils.tsx
import DispatcherDefault from "../../Dispatcher.tsx";
import Constants from "../../Constants.tsx";
import UserUtilsDefault from "../../utils/UserUtils.tsx";
import RelationshipActionCreatorsDefault from "../../actions/RelationshipActionCreators.tsx";
import GameRelationshipActionCreatorsDefault from "../game_relationships/GameRelationshipActionCreators.tsx";
import AcceptFriendRequestModalActionCreators from "strangers/AcceptFriendRequestModalActionCreators.native.tsx";
import RelationshipStore from "../../stores/RelationshipStore.tsx";
import size from "../../../_runtime/metro/00002__.js";

let onCancel;

const AbortCodes = Constants.AbortCodes;
let obj = {
  removeFriend(arg0) {
    let applicationId;
    let userId;
    ({ userId, applicationId } = arg0);
    if (null != applicationId) {
      const obj2 = { userId, applicationId };
      const obj3 = GameRelationshipActionCreatorsDefault;
      obj3.removeGameFriend(obj2);
    } else {
      const obj4 = { location: tmp };
      const obj = RelationshipActionCreatorsDefault;
      obj.removeFriend(userId, obj4);
    }
  },
  cancelFriendRequest(arg0) {
    let applicationId;
    let result;
    let userId;
    ({ userId, applicationId } = arg0);
    if (null != applicationId) {
      const obj2 = { userId, applicationId };
      const obj3 = GameRelationshipActionCreatorsDefault;
      result = obj3.cancelGameFriendRequest(obj2);
    } else {
      const obj4 = { location: tmp };
      const obj = RelationshipActionCreatorsDefault;
      result = obj.cancelFriendRequest(userId, obj4);
    }
    return result;
  },
  acceptFriendRequest(location) {
    let applicationId;
    let confirmStrangerRequest;
    let obj5;
    let result;
    let userId;
    ({ userId, applicationId, confirmStrangerRequest } = location);
    const _location = location.location;
    if (confirmStrangerRequest === undefined) {
      confirmStrangerRequest = false;
    }
    if (null != applicationId) {
      const obj2 = { userId, applicationId };
      const obj4 = GameRelationshipActionCreatorsDefault;
      result = obj4.acceptGameFriendRequest(obj2);
    } else {
      const obj3 = { userId, confirmStrangerRequest, context: obj5 };
      obj5 = { location: _location };
      const obj = RelationshipActionCreatorsDefault;
      result = obj.acceptFriendRequest(obj3);
    }
    return result;
  },
  maybeConfirmFriendRequestAccept(userId) {
    let applicationId2;
    let closure_5;
    let confirmStrangerRequest;
    let obj13;
    let obj8;
    let result2;
    let userId2;
    const onConfirm2 = function onConfirm() {
      let confirmStrangerRequest;
      let obj6;
      obj = { confirmStrangerRequest: true };
      const merged = Object.assign(obj);
      ({ userId, applicationId, confirmStrangerRequest } = obj);
      _location = obj.location;
      const tmp = obj;
      if (confirmStrangerRequest === undefined) {
        confirmStrangerRequest = false;
      }
      if (null != applicationId) {
        const obj3 = { userId, applicationId };
        const obj5 = closure_2_1(closure_2_2[2]);
        const result = obj5.acceptGameFriendRequest(obj3);
      } else {
        const obj4 = { userId, confirmStrangerRequest, context: obj6 };
        obj6 = { location: _location };
        const obj2 = closure_2_1(closure_2_2[3]);
        obj2.acceptFriendRequest(obj4);
      }
      onConfirm = tmp.onConfirm;
      if (onConfirm != null) {
        onConfirm();
      }
    };
    userId = userId.userId;
    const applicationId = userId.applicationId;
    let _location = userId.location;
    ({ onConfirm: RelationshipStore, onCancel: AbortCodes, onFinally: closure_5 } = userId);
    const isStrangerResult = RelationshipStore.isStranger(userId);
    if (null == applicationId) {
      if (false !== isStrangerResult) {
        if (isStrangerResult) {
          let obj7 = userId(_location[4]);
          let obj3 = {
            onConfirm() {
              let obj5;
              if (null != applicationId) {
                const obj2 = { userId, applicationId: tmp2 };
                const obj4 = GameRelationshipActionCreatorsDefault;
                const result = obj4.acceptGameFriendRequest(obj2);
              } else {
                const obj3 = { userId, confirmStrangerRequest: true, context: obj5 };
                obj5 = { location: tmp3 };
                const obj = RelationshipActionCreatorsDefault;
                obj.acceptFriendRequest(obj3);
              }
              if (RelationshipStore != null) {
                tmp10();
              }
            },
            onCancel() {
              if (AbortCodes != null) {
                tmp();
              }
            },
            onFinally() {
              if (closure_5 != null) {
                tmp();
              }
            },
          };
          let result = obj7.openAcceptFriendRequestConfirmModal(obj3);
        } else {
          let result1;
          let obj = { userId, applicationId, location: _location };
          ({ userId: userId2, applicationId: applicationId2, confirmStrangerRequest } = obj);
          const _location2 = obj.location;
          if (confirmStrangerRequest === undefined) {
            confirmStrangerRequest = false;
          }
          if (null != applicationId2) {
            let obj5 = applicationId(_location[2]);
            let obj4 = { userId: userId2, applicationId: applicationId2 };
            result1 = obj5.acceptGameFriendRequest(obj4);
          } else {
            const tmp2 = applicationId;
            const tmp3 = _location;
            let obj2 = applicationId(_location[3]);
            let obj6 = { userId: userId2, confirmStrangerRequest, context: obj8 };
            obj8 = { location: _location2 };
            result1 = obj2.acceptFriendRequest(obj6);
          }
          const nextPromise = result1.then((body) => {
            let flag;
            const obj = {
              userId,
              applicationId,
              location: _location,
              onConfirm: RelationshipStore,
              onCancel: AbortCodes,
            };
            let code;
            if (body != null) {
              body = body.body;
              if (body != null) {
                code = body.code;
              }
            }
            if (code === AbortCodes.RELATIONSHIP_INVALID_NO_CONFIRMATION) {
              const obj3 = { type: "UPDATE_STRANGER_STATUS", userId: obj.userId, isStranger: true };
              const obj4 = DispatcherDefault;
              obj4.dispatch(obj3);
              const obj5 = {
                onConfirm: onConfirm2,
                onCancel() {
                  onCancel = obj.onCancel;
                  if (onCancel != null) {
                    onCancel();
                  }
                },
              };
              const obj6 = AcceptFriendRequestModalActionCreators;
              const result = obj6.openAcceptFriendRequestConfirmModal(obj5);
              flag = true;
            } else {
              let ok;
              if (body != null) {
                ok = body.ok;
              }
              flag = false;
              if (ok) {
                const obj7 = { type: "UPDATE_STRANGER_STATUS", userId: obj.userId, isStranger: false };
                const obj2 = DispatcherDefault;
                obj2.dispatch(obj7);
                flag = false;
              }
            }
            if (!flag) {
              if (RelationshipStore != null) {
                RelationshipStore();
              }
            }
          });
          const catchPromise = nextPromise.catch((error) => {
            let obj = {
              userId,
              applicationId,
              location: _location,
              onConfirm: RelationshipStore,
              onCancel: AbortCodes,
            };
            let code;
            if (error != null) {
              const body = error.body;
              if (body != null) {
                code = body.code;
              }
            }
            if (code === AbortCodes.RELATIONSHIP_INVALID_NO_CONFIRMATION) {
              let obj4 = DispatcherDefault;
              let obj3 = { type: "UPDATE_STRANGER_STATUS", userId: obj.userId, isStranger: true };
              obj4.dispatch(obj3);
              let obj6 = AcceptFriendRequestModalActionCreators;
              let obj5 = {
                onConfirm: onConfirm2,
                onCancel() {
                  onCancel = obj.onCancel;
                  if (onCancel != null) {
                    onCancel();
                  }
                },
              };
              let result = obj6.openAcceptFriendRequestConfirmModal(obj5);
            } else {
              let ok;
              if (error != null) {
                ok = error.ok;
              }
              if (ok) {
                let obj2 = DispatcherDefault;
                const obj7 = { type: "UPDATE_STRANGER_STATUS", userId: obj.userId, isStranger: false };
                obj2.dispatch(obj7);
              }
            }
          });
          catchPromise.finally(() => {
            if (closure_5 != null) {
              tmp();
            }
          });
        }
      }
    }
    if (null != applicationId) {
      const obj10 = { userId, applicationId };
      const obj12 = applicationId(_location[2]);
      result2 = obj12.acceptGameFriendRequest(obj10);
    } else {
      const tmp10 = applicationId;
      let flag = true;
      const obj11 = { userId, confirmStrangerRequest: true, context: obj13 };
      obj13 = { location: _location };
      const obj9 = applicationId(_location[3]);
      result2 = obj9.acceptFriendRequest(obj11);
    }
    return result2.then(() => {
      if (RelationshipStore != null) {
        tmp();
      }
      if (closure_5 != null) {
        tmp3();
      }
    });
  },
  getDisplayName(id) {
    let nickname = RelationshipStore.getNickname(id.id);
    if (nickname == null) {
      const obj = UserUtilsDefault;
      nickname = obj.getName(id);
    }
    return nickname;
  },
};
let result = size.fileFinishedImporting("modules/people/PeopleUtils.tsx");

export default obj;
