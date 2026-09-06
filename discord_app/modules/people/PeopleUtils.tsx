// discord_app/modules/people/PeopleUtils.tsx
import DispatcherDefault from "../../Dispatcher.tsx";
import UserUtilsDefault from "../../utils/UserUtils.tsx";
import RelationshipActionCreatorsDefault from "../../actions/RelationshipActionCreators.tsx";
import GameRelationshipActionCreatorsDefault from "../game_relationships/GameRelationshipActionCreators.tsx";
import AcceptFriendRequestModalActionCreators from "strangers/AcceptFriendRequestModalActionCreators.native.tsx";
import RelationshipStore from "../../stores/RelationshipStore.tsx";

require = fn;
const AbortCodes = fn(1074).AbortCodes;
const size = fn(2);
let result = size.fileFinishedImporting("modules/people/PeopleUtils.tsx");

export default {
  removeFriend(arg0) {
    ({ userId, applicationId } = arg0);
    if (null != applicationId) {
      let obj = { userId, applicationId };
      GameRelationshipActionCreatorsDefault.removeGameFriend(obj);
    } else {
      obj = { location: tmp };
      obj.removeFriend(userId, obj);
    }
  },
  cancelFriendRequest(arg0) {
    ({ userId, applicationId } = arg0);
    if (null != applicationId) {
      let obj = { userId, applicationId };
      let result = GameRelationshipActionCreatorsDefault.cancelGameFriendRequest(obj);
    } else {
      obj = { location: tmp };
      result = obj.cancelFriendRequest(userId, obj);
    }
    return result;
  },
  acceptFriendRequest(location) {
    ({ userId, applicationId, confirmStrangerRequest } = location);
    if (confirmStrangerRequest === undefined) {
      confirmStrangerRequest = false;
    }
    if (null != applicationId) {
      let obj = { userId, applicationId };
      let result = GameRelationshipActionCreatorsDefault.acceptGameFriendRequest(obj);
    } else {
      obj = { userId, confirmStrangerRequest, context: null };
      const obj1 = { location: location.location };
      obj.context = obj1;
      result = obj.acceptFriendRequest(obj);
    }
    return result;
  },
  maybeConfirmFriendRequestAccept(userId) {
    userId = userId.userId;
    const applicationId = userId.applicationId;
    const _location = userId.location;
    ({ onConfirm: RelationshipStore, onCancel: AbortCodes, onFinally: closure_5 } = userId);
    let obj = userId(_location[4]);
    let result = obj.isSettingTeenByDefault(
      userId(_location[5]).SettingsDefaultFeature.FRIEND_REQUEST_STRANGER_CONFIRMATION,
    );
    let obj1 = userId(_location[6]);
    const result1 = obj1.isFriendRequestAlertsV2Enabled("maybeConfirmFriendRequestAccept");
    const isStrangerResult = RelationshipStore.isStranger(userId);
    if (null == applicationId) {
      if (result) {
        if (false !== isStrangerResult) {
          if (isStrangerResult) {
            obj = {
              onConfirm() {
                if (null != applicationId) {
                  let obj = { userId: tmp, applicationId: tmp2 };
                  const result = GameRelationshipActionCreatorsDefault.acceptGameFriendRequest(obj);
                } else {
                  obj = { userId: tmp, confirmStrangerRequest: true, context: null };
                  const obj1 = { location: tmp3 };
                  obj.context = obj1;
                  obj.acceptFriendRequest(obj);
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
              },
            };
            const result2 = userId(tmp2[7]).openAcceptFriendRequestConfirmModal(obj);
            const tmpResult = userId(tmp2[7]);
          } else {
            obj = { userId, applicationId, location: _location };
            ({ userId: userId2, applicationId: applicationId2, confirmStrangerRequest, location: _location2 } = obj);
            if (confirmStrangerRequest === undefined) {
              confirmStrangerRequest = false;
            }
            if (null != applicationId2) {
              let obj6 = applicationId(tmp2[2]);
              obj1 = { userId: userId2, applicationId: applicationId2 };
              let result3 = obj6.acceptGameFriendRequest(obj1);
            } else {
              applicationId(tmp2[3]);
              const obj2 = { userId: userId2, confirmStrangerRequest, context: null };
              const obj3 = { location: _location2 };
              obj2.context = obj3;
              result3 = obj3.acceptFriendRequest(obj2);
            }
            const nextPromise = result3.then((body) => {
              let obj = { userId, applicationId, location: _location, onConfirm, onCancel };
              let code;
              if (body != null) {
                body = body.body;
                if (body != null) {
                  code = body.code;
                }
              }
              if (code === AbortCodes.RELATIONSHIP_INVALID_NO_CONFIRMATION) {
                obj = { type: "UPDATE_STRANGER_STATUS", userId: null, isStranger: true };
                obj.userId = obj.userId;
                DispatcherDefault.dispatch(obj);
                obj = {
                  onConfirm() {
                    obj = {};
                    const merged = Object.assign(obj);
                    obj.confirmStrangerRequest = true;
                    ({ userId, applicationId, confirmStrangerRequest } = obj);
                    if (confirmStrangerRequest === undefined) {
                      confirmStrangerRequest = false;
                    }
                    if (null != applicationId) {
                      obj = { userId, applicationId };
                      const result = applicationId(_location[2]).acceptGameFriendRequest(obj);
                      const obj5 = applicationId(_location[2]);
                    } else {
                      applicationId(_location[3]);
                      obj = { userId, confirmStrangerRequest, context: null };
                      const obj1 = { location: obj.location };
                      obj.context = obj1;
                      obj1.acceptFriendRequest(obj);
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
                  },
                };
                const result = AcceptFriendRequestModalActionCreators.openAcceptFriendRequestConfirmModal(obj);
                let flag = true;
              } else {
                let ok;
                if (body != null) {
                  ok = body.ok;
                }
                flag = false;
                if (ok) {
                  const obj1 = { type: "UPDATE_STRANGER_STATUS", userId: obj.userId, isStranger: false };
                  obj1.dispatch(obj1);
                  flag = false;
                }
              }
              if (!flag) {
                if (tmp != null) {
                  tmp();
                }
              }
            });
            result3
              .then((body) => {
                let obj = { userId, applicationId, location: _location, onConfirm, onCancel };
                let code;
                if (body != null) {
                  body = body.body;
                  if (body != null) {
                    code = body.code;
                  }
                }
                if (code === AbortCodes.RELATIONSHIP_INVALID_NO_CONFIRMATION) {
                  obj = { type: "UPDATE_STRANGER_STATUS", userId: null, isStranger: true };
                  obj.userId = obj.userId;
                  DispatcherDefault.dispatch(obj);
                  obj = {
                    onConfirm() {
                      obj = {};
                      const merged = Object.assign(obj);
                      obj.confirmStrangerRequest = true;
                      ({ userId, applicationId, confirmStrangerRequest } = obj);
                      if (confirmStrangerRequest === undefined) {
                        confirmStrangerRequest = false;
                      }
                      if (null != applicationId) {
                        obj = { userId, applicationId };
                        const result = applicationId(_location[2]).acceptGameFriendRequest(obj);
                        const obj5 = applicationId(_location[2]);
                      } else {
                        applicationId(_location[3]);
                        obj = { userId, confirmStrangerRequest, context: null };
                        const obj1 = { location: obj.location };
                        obj.context = obj1;
                        obj1.acceptFriendRequest(obj);
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
                    },
                  };
                  const result = AcceptFriendRequestModalActionCreators.openAcceptFriendRequestConfirmModal(obj);
                  let flag = true;
                } else {
                  let ok;
                  if (body != null) {
                    ok = body.ok;
                  }
                  flag = false;
                  if (ok) {
                    const obj1 = { type: "UPDATE_STRANGER_STATUS", userId: obj.userId, isStranger: false };
                    obj1.dispatch(obj1);
                    flag = false;
                  }
                }
                if (!flag) {
                  if (tmp != null) {
                    tmp();
                  }
                }
              })
              .catch((error) => {
                let obj = { userId, applicationId, location: _location, onConfirm, onCancel };
                let code;
                if (error != null) {
                  const body = error.body;
                  if (body != null) {
                    code = body.code;
                  }
                }
                if (code === AbortCodes.RELATIONSHIP_INVALID_NO_CONFIRMATION) {
                  obj = { type: "UPDATE_STRANGER_STATUS", userId: null, isStranger: true };
                  obj.userId = obj.userId;
                  DispatcherDefault.dispatch(obj);
                  obj = {
                    onConfirm() {
                      obj = {};
                      const merged = Object.assign(obj);
                      obj.confirmStrangerRequest = true;
                      ({ userId, applicationId, confirmStrangerRequest } = obj);
                      if (confirmStrangerRequest === undefined) {
                        confirmStrangerRequest = false;
                      }
                      if (null != applicationId) {
                        obj = { userId, applicationId };
                        const result = applicationId(_location[2]).acceptGameFriendRequest(obj);
                        const obj5 = applicationId(_location[2]);
                      } else {
                        applicationId(_location[3]);
                        obj = { userId, confirmStrangerRequest, context: null };
                        const obj1 = { location: obj.location };
                        obj.context = obj1;
                        obj1.acceptFriendRequest(obj);
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
                    },
                  };
                  let result = AcceptFriendRequestModalActionCreators.openAcceptFriendRequestConfirmModal(obj);
                } else {
                  let ok;
                  if (error != null) {
                    ok = error.ok;
                  }
                  if (ok) {
                    let obj1 = { type: "UPDATE_STRANGER_STATUS", userId: obj.userId, isStranger: false };
                    obj1.dispatch(obj1);
                  }
                }
              })
              .finally(() => {
                if (closure_1_5 != null) {
                  tmp();
                }
              });
            const catchPromise = result3
              .then((body) => {
                let obj = { userId, applicationId, location: _location, onConfirm, onCancel };
                let code;
                if (body != null) {
                  body = body.body;
                  if (body != null) {
                    code = body.code;
                  }
                }
                if (code === AbortCodes.RELATIONSHIP_INVALID_NO_CONFIRMATION) {
                  obj = { type: "UPDATE_STRANGER_STATUS", userId: null, isStranger: true };
                  obj.userId = obj.userId;
                  DispatcherDefault.dispatch(obj);
                  obj = {
                    onConfirm() {
                      obj = {};
                      const merged = Object.assign(obj);
                      obj.confirmStrangerRequest = true;
                      ({ userId, applicationId, confirmStrangerRequest } = obj);
                      if (confirmStrangerRequest === undefined) {
                        confirmStrangerRequest = false;
                      }
                      if (null != applicationId) {
                        obj = { userId, applicationId };
                        const result = applicationId(_location[2]).acceptGameFriendRequest(obj);
                        const obj5 = applicationId(_location[2]);
                      } else {
                        applicationId(_location[3]);
                        obj = { userId, confirmStrangerRequest, context: null };
                        const obj1 = { location: obj.location };
                        obj.context = obj1;
                        obj1.acceptFriendRequest(obj);
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
                    },
                  };
                  const result = AcceptFriendRequestModalActionCreators.openAcceptFriendRequestConfirmModal(obj);
                  let flag = true;
                } else {
                  let ok;
                  if (body != null) {
                    ok = body.ok;
                  }
                  flag = false;
                  if (ok) {
                    const obj1 = { type: "UPDATE_STRANGER_STATUS", userId: obj.userId, isStranger: false };
                    obj1.dispatch(obj1);
                    flag = false;
                  }
                }
                if (!flag) {
                  if (tmp != null) {
                    tmp();
                  }
                }
              })
              .catch((error) => {
                let obj = { userId, applicationId, location: _location, onConfirm, onCancel };
                let code;
                if (error != null) {
                  const body = error.body;
                  if (body != null) {
                    code = body.code;
                  }
                }
                if (code === AbortCodes.RELATIONSHIP_INVALID_NO_CONFIRMATION) {
                  obj = { type: "UPDATE_STRANGER_STATUS", userId: null, isStranger: true };
                  obj.userId = obj.userId;
                  DispatcherDefault.dispatch(obj);
                  obj = {
                    onConfirm() {
                      obj = {};
                      const merged = Object.assign(obj);
                      obj.confirmStrangerRequest = true;
                      ({ userId, applicationId, confirmStrangerRequest } = obj);
                      if (confirmStrangerRequest === undefined) {
                        confirmStrangerRequest = false;
                      }
                      if (null != applicationId) {
                        obj = { userId, applicationId };
                        const result = applicationId(_location[2]).acceptGameFriendRequest(obj);
                        const obj5 = applicationId(_location[2]);
                      } else {
                        applicationId(_location[3]);
                        obj = { userId, confirmStrangerRequest, context: null };
                        const obj1 = { location: obj.location };
                        obj.context = obj1;
                        obj1.acceptFriendRequest(obj);
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
                    },
                  };
                  let result = AcceptFriendRequestModalActionCreators.openAcceptFriendRequestConfirmModal(obj);
                } else {
                  let ok;
                  if (error != null) {
                    ok = error.ok;
                  }
                  if (ok) {
                    let obj1 = { type: "UPDATE_STRANGER_STATUS", userId: obj.userId, isStranger: false };
                    obj1.dispatch(obj1);
                  }
                }
              });
          }
        }
      }
    }
    if (null != applicationId) {
      let obj4 = { userId, applicationId };
      let result4 = applicationId(tmp2[2]).acceptGameFriendRequest(obj4);
      const obj14 = applicationId(tmp2[2]);
    } else {
      let obj5 = { userId, confirmStrangerRequest: true, context: null };
      obj6 = { location: _location };
      obj5.context = obj6;
      result4 = applicationId(tmp2[3]).acceptFriendRequest(obj5);
      const obj11 = applicationId(tmp2[3]);
    }
    return result4.then(() => {
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
  },
};
