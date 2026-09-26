// === Module 10330: PeopleUtils ===

// Module 10330 (PeopleUtils)
import DispatcherDefault from "Dispatcher" /* 573 */;
import UserUtilsDefault from "UserUtils" /* 4678 */;
import RelationshipActionCreatorsDefault from "RelationshipActionCreators" /* 9195 */;
import GameRelationshipActionCreatorsDefault from "GameRelationshipActionCreators" /* 10331 */;
import AcceptFriendRequestModalActionCreators from "AcceptFriendRequestModalActionCreators" /* 10332 */;
import RelationshipStore from "RelationshipStore" /* 4479 */;

require = fn;
const AbortCodes = fn(1074).AbortCodes;
const size = fn(2);
let result = size.fileFinishedImporting("modules/people/PeopleUtils.tsx");

export default {
  removeFriend(arg0) {
    ({ userId, applicationId } = arg0);
    if (null != applicationId) {
      const obj2 = { userId, applicationId };
      GameRelationshipActionCreatorsDefault.removeGameFriend(obj2);
    } else {
      const obj4 = { location: tmp };
      RelationshipActionCreatorsDefault.removeFriend(userId, obj4);
    }
  },
  cancelFriendRequest(arg0) {
    ({ userId, applicationId } = arg0);
    if (null != applicationId) {
      const obj2 = { userId, applicationId };
      let result = GameRelationshipActionCreatorsDefault.cancelGameFriendRequest(obj2);
    } else {
      const obj4 = { location: tmp };
      result = RelationshipActionCreatorsDefault.cancelFriendRequest(userId, obj4);
    }
    return result;
  },
  acceptFriendRequest(location) {
    ({ userId, applicationId, confirmStrangerRequest } = location);
    if (confirmStrangerRequest === undefined) {
      confirmStrangerRequest = false;
    }
    if (null != applicationId) {
      const obj2 = { userId, applicationId };
      let result = GameRelationshipActionCreatorsDefault.acceptGameFriendRequest(obj2);
    } else {
      const obj3 = { userId, confirmStrangerRequest, context: null };
      const obj5 = { location: location.location };
      obj3.context = obj5;
      result = RelationshipActionCreatorsDefault.acceptFriendRequest(obj3);
    }
    return result;
  },
  maybeConfirmFriendRequestAccept(userId) {
    userId = userId.userId;
    const applicationId = userId.applicationId;
    const _location = userId.location;
    ({ onConfirm: RelationshipStore, onCancel: AbortCodes, onFinally: closure_5 } = userId);
    const isStrangerResult = RelationshipStore.isStranger(userId);
    if (null == applicationId) {
      if (false !== isStrangerResult) {
        if (isStrangerResult) {
          let obj3 = {
            onConfirm() {
                    if (null != applicationId) {
                      const obj2 = { userId, applicationId: tmp2 };
                      const result = GameRelationshipActionCreatorsDefault.acceptGameFriendRequest(obj2);
                    } else {
                      const obj3 = { userId, confirmStrangerRequest: true, context: null };
                      const obj5 = { location: tmp3 };
                      obj3.context = obj5;
                      RelationshipActionCreatorsDefault.acceptFriendRequest(obj3);
                    }
                    if (onConfirm != null) {
                      tmp10();
                    }
                  },
            onCancel() {
                    if (onCancel != null) {
                      tmp();
                    }
                  },
            onFinally() {
                    if (closure_1_5 != null) {
                      tmp();
                    }
                  }
          };
          let result = userId(_location[4]).openAcceptFriendRequestConfirmModal(obj3);
          let obj7 = userId(_location[4]);
        } else {
          let obj = { userId, applicationId, location: _location };
          ({ userId: userId2, applicationId: applicationId2, confirmStrangerRequest } = obj);
          if (confirmStrangerRequest === undefined) {
            confirmStrangerRequest = false;
          }
          if (null != applicationId2) {
            let obj4 = { userId: userId2, applicationId: applicationId2 };
            let result1 = applicationId(_location[2]).acceptGameFriendRequest(obj4);
            let obj5 = applicationId(_location[2]);
          } else {
            let obj6 = { userId: userId2, confirmStrangerRequest, context: null };
            const obj8 = { location: obj.location };
            obj6.context = obj8;
            result1 = applicationId(_location[3]).acceptFriendRequest(obj6);
            let obj2 = applicationId(_location[3]);
          }
          const nextPromise = result1.then((body) => {
            const obj = { userId, applicationId, location: _location, onConfirm, onCancel };
            let code;
            if (body != null) {
              body = body.body;
              if (body != null) {
                code = body.code;
              }
            }
            if (code === AbortCodes.RELATIONSHIP_INVALID_NO_CONFIRMATION) {
              const obj3 = { type: "UPDATE_STRANGER_STATUS", userId: obj.userId, isStranger: true };
              DispatcherDefault.dispatch(obj3);
              const obj5 = {
                onConfirm() {
                    obj = {};
                    const merged = Object.assign(obj);
                    obj.confirmStrangerRequest = true;
                    ({ userId, applicationId, confirmStrangerRequest } = obj);
                    if (confirmStrangerRequest === undefined) {
                      confirmStrangerRequest = false;
                    }
                    if (null != applicationId) {
                      const obj3 = { userId, applicationId };
                      const result = applicationId(_location[2]).acceptGameFriendRequest(obj3);
                      const obj5 = applicationId(_location[2]);
                    } else {
                      const obj4 = { userId, confirmStrangerRequest, context: null };
                      const obj6 = { location: obj.location };
                      obj4.context = obj6;
                      applicationId(_location[3]).acceptFriendRequest(obj4);
                      const obj2 = applicationId(_location[3]);
                    }
                    onConfirm = obj.onConfirm;
                    if (onConfirm != null) {
                      onConfirm();
                    }
                  },
                onCancel() {
                    onCancel = obj.onCancel;
                    if (onCancel != null) {
                      onCancel();
                    }
                  }
              };
              const result = AcceptFriendRequestModalActionCreators.openAcceptFriendRequestConfirmModal(obj5);
              let flag = true;
            } else {
              let ok;
              if (body != null) {
                ok = body.ok;
              }
              flag = false;
              if (ok) {
                const obj7 = { type: "UPDATE_STRANGER_STATUS", userId: obj.userId, isStranger: false };
                DispatcherDefault.dispatch(obj7);
                flag = false;
              }
            }
            if (!flag) {
              if (onConfirm != null) {
                onConfirm();
              }
            }
          });
          result1.then((body) => {
            const obj = { userId, applicationId, location: _location, onConfirm, onCancel };
            let code;
            if (body != null) {
              body = body.body;
              if (body != null) {
                code = body.code;
              }
            }
            if (code === AbortCodes.RELATIONSHIP_INVALID_NO_CONFIRMATION) {
              const obj3 = { type: "UPDATE_STRANGER_STATUS", userId: obj.userId, isStranger: true };
              DispatcherDefault.dispatch(obj3);
              const obj5 = {
                onConfirm() {
                    obj = {};
                    const merged = Object.assign(obj);
                    obj.confirmStrangerRequest = true;
                    ({ userId, applicationId, confirmStrangerRequest } = obj);
                    if (confirmStrangerRequest === undefined) {
                      confirmStrangerRequest = false;
                    }
                    if (null != applicationId) {
                      const obj3 = { userId, applicationId };
                      const result = applicationId(_location[2]).acceptGameFriendRequest(obj3);
                      const obj5 = applicationId(_location[2]);
                    } else {
                      const obj4 = { userId, confirmStrangerRequest, context: null };
                      const obj6 = { location: obj.location };
                      obj4.context = obj6;
                      applicationId(_location[3]).acceptFriendRequest(obj4);
                      const obj2 = applicationId(_location[3]);
                    }
                    onConfirm = obj.onConfirm;
                    if (onConfirm != null) {
                      onConfirm();
                    }
                  },
                onCancel() {
                    onCancel = obj.onCancel;
                    if (onCancel != null) {
                      onCancel();
                    }
                  }
              };
              const result = AcceptFriendRequestModalActionCreators.openAcceptFriendRequestConfirmModal(obj5);
              let flag = true;
            } else {
              let ok;
              if (body != null) {
                ok = body.ok;
              }
              flag = false;
              if (ok) {
                const obj7 = { type: "UPDATE_STRANGER_STATUS", userId: obj.userId, isStranger: false };
                DispatcherDefault.dispatch(obj7);
                flag = false;
              }
            }
            if (!flag) {
              if (onConfirm != null) {
                onConfirm();
              }
            }
          }).catch((error) => {
            let obj = { userId, applicationId, location: _location, onConfirm, onCancel };
            let code;
            if (error != null) {
              const body = error.body;
              if (body != null) {
                code = body.code;
              }
            }
            if (code === AbortCodes.RELATIONSHIP_INVALID_NO_CONFIRMATION) {
              let obj3 = { type: "UPDATE_STRANGER_STATUS", userId: obj.userId, isStranger: true };
              DispatcherDefault.dispatch(obj3);
              let obj5 = {
                onConfirm() {
                    obj = {};
                    const merged = Object.assign(obj);
                    obj.confirmStrangerRequest = true;
                    ({ userId, applicationId, confirmStrangerRequest } = obj);
                    if (confirmStrangerRequest === undefined) {
                      confirmStrangerRequest = false;
                    }
                    if (null != applicationId) {
                      const obj3 = { userId, applicationId };
                      const result = applicationId(_location[2]).acceptGameFriendRequest(obj3);
                      const obj5 = applicationId(_location[2]);
                    } else {
                      const obj4 = { userId, confirmStrangerRequest, context: null };
                      const obj6 = { location: obj.location };
                      obj4.context = obj6;
                      applicationId(_location[3]).acceptFriendRequest(obj4);
                      const obj2 = applicationId(_location[3]);
                    }
                    onConfirm = obj.onConfirm;
                    if (onConfirm != null) {
                      onConfirm();
                    }
                  },
                onCancel() {
                    onCancel = obj.onCancel;
                    if (onCancel != null) {
                      onCancel();
                    }
                  }
              };
              let result = AcceptFriendRequestModalActionCreators.openAcceptFriendRequestConfirmModal(obj5);
            } else {
              let ok;
              if (error != null) {
                ok = error.ok;
              }
              if (ok) {
                const obj7 = { type: "UPDATE_STRANGER_STATUS", userId: obj.userId, isStranger: false };
                DispatcherDefault.dispatch(obj7);
              }
            }
          }).finally(() => {
            if (closure_1_5 != null) {
              tmp();
            }
          });
          const catchPromise = result1.then((body) => {
            const obj = { userId, applicationId, location: _location, onConfirm, onCancel };
            let code;
            if (body != null) {
              body = body.body;
              if (body != null) {
                code = body.code;
              }
            }
            if (code === AbortCodes.RELATIONSHIP_INVALID_NO_CONFIRMATION) {
              const obj3 = { type: "UPDATE_STRANGER_STATUS", userId: obj.userId, isStranger: true };
              DispatcherDefault.dispatch(obj3);
              const obj5 = {
                onConfirm() {
                    obj = {};
                    const merged = Object.assign(obj);
                    obj.confirmStrangerRequest = true;
                    ({ userId, applicationId, confirmStrangerRequest } = obj);
                    if (confirmStrangerRequest === undefined) {
                      confirmStrangerRequest = false;
                    }
                    if (null != applicationId) {
                      const obj3 = { userId, applicationId };
                      const result = applicationId(_location[2]).acceptGameFriendRequest(obj3);
                      const obj5 = applicationId(_location[2]);
                    } else {
                      const obj4 = { userId, confirmStrangerRequest, context: null };
                      const obj6 = { location: obj.location };
                      obj4.context = obj6;
                      applicationId(_location[3]).acceptFriendRequest(obj4);
                      const obj2 = applicationId(_location[3]);
                    }
                    onConfirm = obj.onConfirm;
                    if (onConfirm != null) {
                      onConfirm();
                    }
                  },
                onCancel() {
                    onCancel = obj.onCancel;
                    if (onCancel != null) {
                      onCancel();
                    }
                  }
              };
              const result = AcceptFriendRequestModalActionCreators.openAcceptFriendRequestConfirmModal(obj5);
              let flag = true;
            } else {
              let ok;
              if (body != null) {
                ok = body.ok;
              }
              flag = false;
              if (ok) {
                const obj7 = { type: "UPDATE_STRANGER_STATUS", userId: obj.userId, isStranger: false };
                DispatcherDefault.dispatch(obj7);
                flag = false;
              }
            }
            if (!flag) {
              if (onConfirm != null) {
                onConfirm();
              }
            }
          }).catch((error) => {
            let obj = { userId, applicationId, location: _location, onConfirm, onCancel };
            let code;
            if (error != null) {
              const body = error.body;
              if (body != null) {
                code = body.code;
              }
            }
            if (code === AbortCodes.RELATIONSHIP_INVALID_NO_CONFIRMATION) {
              let obj3 = { type: "UPDATE_STRANGER_STATUS", userId: obj.userId, isStranger: true };
              DispatcherDefault.dispatch(obj3);
              let obj5 = {
                onConfirm() {
                    obj = {};
                    const merged = Object.assign(obj);
                    obj.confirmStrangerRequest = true;
                    ({ userId, applicationId, confirmStrangerRequest } = obj);
                    if (confirmStrangerRequest === undefined) {
                      confirmStrangerRequest = false;
                    }
                    if (null != applicationId) {
                      const obj3 = { userId, applicationId };
                      const result = applicationId(_location[2]).acceptGameFriendRequest(obj3);
                      const obj5 = applicationId(_location[2]);
                    } else {
                      const obj4 = { userId, confirmStrangerRequest, context: null };
                      const obj6 = { location: obj.location };
                      obj4.context = obj6;
                      applicationId(_location[3]).acceptFriendRequest(obj4);
                      const obj2 = applicationId(_location[3]);
                    }
                    onConfirm = obj.onConfirm;
                    if (onConfirm != null) {
                      onConfirm();
                    }
                  },
                onCancel() {
                    onCancel = obj.onCancel;
                    if (onCancel != null) {
                      onCancel();
                    }
                  }
              };
              let result = AcceptFriendRequestModalActionCreators.openAcceptFriendRequestConfirmModal(obj5);
            } else {
              let ok;
              if (error != null) {
                ok = error.ok;
              }
              if (ok) {
                const obj7 = { type: "UPDATE_STRANGER_STATUS", userId: obj.userId, isStranger: false };
                DispatcherDefault.dispatch(obj7);
              }
            }
          });
        }
      }
    }
    if (null != applicationId) {
      const obj10 = { userId, applicationId };
      let result2 = applicationId(_location[2]).acceptGameFriendRequest(obj10);
      const obj12 = applicationId(_location[2]);
    } else {
      const obj11 = { userId, confirmStrangerRequest: true, context: null };
      const obj13 = { location: _location };
      obj11.context = obj13;
      result2 = applicationId(_location[3]).acceptFriendRequest(obj11);
      const obj9 = applicationId(_location[3]);
    }
    return result2.then(() => {
      if (onConfirm != null) {
        tmp();
      }
      if (closure_1_5 != null) {
        tmp3();
      }
    });
  },
  getDisplayName(id) {
    let nickname = RelationshipStore.getNickname(id.id);
    if (nickname == null) {
      nickname = UserUtilsDefault.getName(id);
    }
    return nickname;
  }
};