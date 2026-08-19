// === Module 9887: ? ===

// Module 9887
import handleRelationshipAddErrorDefault from "handleRelationshipAddError" /* 9736 */;
import showRequestFailedAlertDefault from "showRequestFailedAlert" /* 9888 */;
import markAllUserIdListsStale from "markAllUserIdListsStale" /* 4030 */;
import { AbortCodes } from "ME" /* 676 */;

const require = fn;
let result = require("obj132").fileFinishedImporting("modules/people/PeopleUtils.tsx");

export default {
  removeFriend(arg0) {
    ({ userId, applicationId } = arg0);
    if (null != applicationId) {
      let obj = { userId: null, applicationId: null };
      obj[0] = userId;
      obj[1] = applicationId;
      showRequestFailedAlertDefault.removeGameFriend(obj);
    } else {
      obj = { location: null };
      obj[0] = tmp;
      obj.removeFriend(userId, obj);
    }
  },
  cancelFriendRequest(arg0) {
    ({ userId, applicationId } = arg0);
    if (null != applicationId) {
      let obj = { userId: null, applicationId: null };
      obj[0] = userId;
      obj[1] = applicationId;
      let result = showRequestFailedAlertDefault.cancelGameFriendRequest(obj);
    } else {
      obj = { location: null };
      obj[0] = tmp;
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
      let obj = { userId: null, applicationId: null };
      obj[0] = userId;
      obj[1] = applicationId;
      let result = showRequestFailedAlertDefault.acceptGameFriendRequest(obj);
    } else {
      obj = { userId: null, confirmStrangerRequest: null, context: null };
      obj[0] = userId;
      obj[1] = confirmStrangerRequest;
      obj1 = { location: null };
      obj1[0] = location.location;
      obj[2] = obj1;
      result = obj.acceptFriendRequest(obj);
    }
    return result;
  },
  maybeConfirmFriendRequestAccept(userId) {
    userId = userId.userId;
    const applicationId = userId.applicationId;
    const _location = userId.location;
    ({ onConfirm: closure_3, onCancel: AbortCodes, onFinally: closure_5 } = userId);
    let obj = userId(_location[4]);
    let result = obj.isSettingTeenByDefault(userId(_location[5]).SettingsDefaultFeature.FRIEND_REQUEST_STRANGER_CONFIRMATION);
    obj1 = userId(_location[6]);
    const result1 = obj1.isFriendRequestAlertsV2Enabled("maybeConfirmFriendRequestAccept");
    const isStrangerResult = stranger.isStranger(userId);
    if (null == applicationId) {
      if (result) {
        if (false !== isStrangerResult) {
          if (isStrangerResult) {
            obj = { onConfirm: null, onCancel: null, onFinally: null };
            obj[0] = function onConfirm() {
              if (null != applicationId) {
                let obj = { userId: null, applicationId: null };
                obj[0] = userId;
                obj[1] = tmp2;
                const result = applicationId(_location[2]).acceptGameFriendRequest(obj);
                const obj4 = applicationId(_location[2]);
              } else {
                applicationId(_location[3]);
                obj = { userId: null, confirmStrangerRequest: null, context: null };
                obj[0] = userId;
                obj[1] = true;
                obj1 = { location: null };
                obj1[0] = tmp3;
                obj[2] = obj1;
                obj.acceptFriendRequest(obj);
              }
              if (closure_3 != null) {
                tmp10();
              }
            };
            obj[1] = function onCancel() {
              if (closure_4 != null) {
                tmp();
              }
            };
            obj[2] = function onFinally() {
              if (closure_5 != null) {
                tmp();
              }
            };
            const result2 = userId(tmp2[7]).openAcceptFriendRequestConfirmModal(obj);
            const tmpResult = userId(tmp2[7]);
          } else {
            obj = { userId: null, applicationId: null, location: null };
            obj[0] = userId;
            obj[1] = applicationId;
            obj[2] = _location;
            ({ userId: userId2, applicationId: applicationId2, confirmStrangerRequest, location: _location2 } = obj);
            if (confirmStrangerRequest === undefined) {
              confirmStrangerRequest = false;
            }
            if (null != applicationId2) {
              let obj6 = applicationId(tmp2[2]);
              obj1 = { userId: null, applicationId: null };
              obj1[0] = userId2;
              obj1[1] = applicationId2;
              let result3 = obj6.acceptGameFriendRequest(obj1);
            } else {
              applicationId(tmp2[3]);
              const obj2 = { userId: null, confirmStrangerRequest: null, context: null };
              obj2[0] = userId2;
              obj2[1] = confirmStrangerRequest;
              const obj3 = { location: null };
              obj3[0] = _location2;
              obj2[2] = obj3;
              result3 = obj3.acceptFriendRequest(obj2);
            }
            const nextPromise = result3.then((result) => {
              obj = { userId: obj, applicationId, location: _location, onConfirm: callback, onCancel: closure_4 };
              let code;
              if (result != null) {
                const body = result.body;
                if (body != null) {
                  code = body.code;
                }
              }
              if (code === AbortCodes.RELATIONSHIP_INVALID_NO_CONFIRMATION) {
                obj = { type: "UPDATE_STRANGER_STATUS", userId: null, isStranger: true };
                obj[1] = obj.userId;
                applicationId(_location[8]).dispatch(obj);
                const obj4 = applicationId(_location[8]);
                obj = { onConfirm: null, onCancel: null };
                obj[0] = function onConfirm() {
                  obj = {};
                  const merged = Object.assign(obj);
                  obj.confirmStrangerRequest = true;
                  ({ userId, applicationId, confirmStrangerRequest } = obj);
                  if (confirmStrangerRequest === undefined) {
                    confirmStrangerRequest = false;
                  }
                  if (null != applicationId) {
                    obj = { userId: null, applicationId: null };
                    obj[0] = userId;
                    obj[1] = applicationId;
                    const result = closure_1_1(_location[2]).acceptGameFriendRequest(obj);
                    const obj5 = closure_1_1(_location[2]);
                  } else {
                    closure_1_1(_location[3]);
                    obj = { userId: null, confirmStrangerRequest: null, context: null };
                    obj[0] = userId;
                    obj[1] = confirmStrangerRequest;
                    obj1 = { location: null };
                    obj1[0] = obj.location;
                    obj[2] = obj1;
                    obj1.acceptFriendRequest(obj);
                  }
                  const onConfirm = obj.onConfirm;
                  if (onConfirm != null) {
                    onConfirm();
                  }
                };
                obj[1] = function onCancel() {
                  const onCancel = obj.onCancel;
                  if (onCancel != null) {
                    onCancel();
                  }
                };
                result = userId(_location[7]).openAcceptFriendRequestConfirmModal(obj);
                let flag = true;
                const obj6 = userId(_location[7]);
              } else {
                let ok;
                if (result != null) {
                  ok = result.ok;
                }
                flag = false;
                if (ok) {
                  applicationId(_location[8]);
                  obj1 = { type: "UPDATE_STRANGER_STATUS", userId: null, isStranger: false };
                  obj1[1] = obj.userId;
                  obj1.dispatch(obj1);
                  flag = false;
                }
              }
              if (!flag) {
                if (callback != null) {
                  callback();
                }
              }
            });
            result3.then((result) => {
              obj = { userId: obj, applicationId, location: _location, onConfirm: callback, onCancel: closure_4 };
              let code;
              if (result != null) {
                const body = result.body;
                if (body != null) {
                  code = body.code;
                }
              }
              if (code === AbortCodes.RELATIONSHIP_INVALID_NO_CONFIRMATION) {
                obj = { type: "UPDATE_STRANGER_STATUS", userId: null, isStranger: true };
                obj[1] = obj.userId;
                applicationId(_location[8]).dispatch(obj);
                const obj4 = applicationId(_location[8]);
                obj = { onConfirm: null, onCancel: null };
                obj[0] = function onConfirm() {
                  obj = {};
                  const merged = Object.assign(obj);
                  obj.confirmStrangerRequest = true;
                  ({ userId, applicationId, confirmStrangerRequest } = obj);
                  if (confirmStrangerRequest === undefined) {
                    confirmStrangerRequest = false;
                  }
                  if (null != applicationId) {
                    obj = { userId: null, applicationId: null };
                    obj[0] = userId;
                    obj[1] = applicationId;
                    const result = closure_1_1(_location[2]).acceptGameFriendRequest(obj);
                    const obj5 = closure_1_1(_location[2]);
                  } else {
                    closure_1_1(_location[3]);
                    obj = { userId: null, confirmStrangerRequest: null, context: null };
                    obj[0] = userId;
                    obj[1] = confirmStrangerRequest;
                    obj1 = { location: null };
                    obj1[0] = obj.location;
                    obj[2] = obj1;
                    obj1.acceptFriendRequest(obj);
                  }
                  const onConfirm = obj.onConfirm;
                  if (onConfirm != null) {
                    onConfirm();
                  }
                };
                obj[1] = function onCancel() {
                  const onCancel = obj.onCancel;
                  if (onCancel != null) {
                    onCancel();
                  }
                };
                result = userId(_location[7]).openAcceptFriendRequestConfirmModal(obj);
                let flag = true;
                const obj6 = userId(_location[7]);
              } else {
                let ok;
                if (result != null) {
                  ok = result.ok;
                }
                flag = false;
                if (ok) {
                  applicationId(_location[8]);
                  obj1 = { type: "UPDATE_STRANGER_STATUS", userId: null, isStranger: false };
                  obj1[1] = obj.userId;
                  obj1.dispatch(obj1);
                  flag = false;
                }
              }
              if (!flag) {
                if (callback != null) {
                  callback();
                }
              }
            }).catch((error) => {
              obj = { userId: obj, applicationId, location: _location, onConfirm: closure_3, onCancel: closure_4 };
              let code;
              if (error != null) {
                const body = error.body;
                if (body != null) {
                  code = body.code;
                }
              }
              if (code === AbortCodes.RELATIONSHIP_INVALID_NO_CONFIRMATION) {
                obj = { type: "UPDATE_STRANGER_STATUS", userId: null, isStranger: true };
                obj[1] = obj.userId;
                applicationId(_location[8]).dispatch(obj);
                const obj4 = applicationId(_location[8]);
                obj = { onConfirm: null, onCancel: null };
                obj[0] = function onConfirm() {
                  obj = {};
                  const merged = Object.assign(obj);
                  obj.confirmStrangerRequest = true;
                  ({ userId, applicationId, confirmStrangerRequest } = obj);
                  if (confirmStrangerRequest === undefined) {
                    confirmStrangerRequest = false;
                  }
                  if (null != applicationId) {
                    obj = { userId: null, applicationId: null };
                    obj[0] = userId;
                    obj[1] = applicationId;
                    const result = closure_1_1(_location[2]).acceptGameFriendRequest(obj);
                    const obj5 = closure_1_1(_location[2]);
                  } else {
                    closure_1_1(_location[3]);
                    obj = { userId: null, confirmStrangerRequest: null, context: null };
                    obj[0] = userId;
                    obj[1] = confirmStrangerRequest;
                    obj1 = { location: null };
                    obj1[0] = obj.location;
                    obj[2] = obj1;
                    obj1.acceptFriendRequest(obj);
                  }
                  const onConfirm = obj.onConfirm;
                  if (onConfirm != null) {
                    onConfirm();
                  }
                };
                obj[1] = function onCancel() {
                  const onCancel = obj.onCancel;
                  if (onCancel != null) {
                    onCancel();
                  }
                };
                let result = userId(_location[7]).openAcceptFriendRequestConfirmModal(obj);
                const obj6 = userId(_location[7]);
              } else {
                let ok;
                if (error != null) {
                  ok = error.ok;
                }
                if (ok) {
                  applicationId(_location[8]);
                  obj1 = { type: "UPDATE_STRANGER_STATUS", userId: null, isStranger: false };
                  obj1[1] = obj.userId;
                  obj1.dispatch(obj1);
                }
              }
            }).finally(() => {
              if (closure_5 != null) {
                tmp();
              }
            });
            const catchPromise = result3.then((result) => {
              obj = { userId: obj, applicationId, location: _location, onConfirm: callback, onCancel: closure_4 };
              let code;
              if (result != null) {
                const body = result.body;
                if (body != null) {
                  code = body.code;
                }
              }
              if (code === AbortCodes.RELATIONSHIP_INVALID_NO_CONFIRMATION) {
                obj = { type: "UPDATE_STRANGER_STATUS", userId: null, isStranger: true };
                obj[1] = obj.userId;
                applicationId(_location[8]).dispatch(obj);
                const obj4 = applicationId(_location[8]);
                obj = { onConfirm: null, onCancel: null };
                obj[0] = function onConfirm() {
                  obj = {};
                  const merged = Object.assign(obj);
                  obj.confirmStrangerRequest = true;
                  ({ userId, applicationId, confirmStrangerRequest } = obj);
                  if (confirmStrangerRequest === undefined) {
                    confirmStrangerRequest = false;
                  }
                  if (null != applicationId) {
                    obj = { userId: null, applicationId: null };
                    obj[0] = userId;
                    obj[1] = applicationId;
                    const result = closure_1_1(_location[2]).acceptGameFriendRequest(obj);
                    const obj5 = closure_1_1(_location[2]);
                  } else {
                    closure_1_1(_location[3]);
                    obj = { userId: null, confirmStrangerRequest: null, context: null };
                    obj[0] = userId;
                    obj[1] = confirmStrangerRequest;
                    obj1 = { location: null };
                    obj1[0] = obj.location;
                    obj[2] = obj1;
                    obj1.acceptFriendRequest(obj);
                  }
                  const onConfirm = obj.onConfirm;
                  if (onConfirm != null) {
                    onConfirm();
                  }
                };
                obj[1] = function onCancel() {
                  const onCancel = obj.onCancel;
                  if (onCancel != null) {
                    onCancel();
                  }
                };
                result = userId(_location[7]).openAcceptFriendRequestConfirmModal(obj);
                let flag = true;
                const obj6 = userId(_location[7]);
              } else {
                let ok;
                if (result != null) {
                  ok = result.ok;
                }
                flag = false;
                if (ok) {
                  applicationId(_location[8]);
                  obj1 = { type: "UPDATE_STRANGER_STATUS", userId: null, isStranger: false };
                  obj1[1] = obj.userId;
                  obj1.dispatch(obj1);
                  flag = false;
                }
              }
              if (!flag) {
                if (callback != null) {
                  callback();
                }
              }
            }).catch((error) => {
              obj = { userId: obj, applicationId, location: _location, onConfirm: closure_3, onCancel: closure_4 };
              let code;
              if (error != null) {
                const body = error.body;
                if (body != null) {
                  code = body.code;
                }
              }
              if (code === AbortCodes.RELATIONSHIP_INVALID_NO_CONFIRMATION) {
                obj = { type: "UPDATE_STRANGER_STATUS", userId: null, isStranger: true };
                obj[1] = obj.userId;
                applicationId(_location[8]).dispatch(obj);
                const obj4 = applicationId(_location[8]);
                obj = { onConfirm: null, onCancel: null };
                obj[0] = function onConfirm() {
                  obj = {};
                  const merged = Object.assign(obj);
                  obj.confirmStrangerRequest = true;
                  ({ userId, applicationId, confirmStrangerRequest } = obj);
                  if (confirmStrangerRequest === undefined) {
                    confirmStrangerRequest = false;
                  }
                  if (null != applicationId) {
                    obj = { userId: null, applicationId: null };
                    obj[0] = userId;
                    obj[1] = applicationId;
                    const result = closure_1_1(_location[2]).acceptGameFriendRequest(obj);
                    const obj5 = closure_1_1(_location[2]);
                  } else {
                    closure_1_1(_location[3]);
                    obj = { userId: null, confirmStrangerRequest: null, context: null };
                    obj[0] = userId;
                    obj[1] = confirmStrangerRequest;
                    obj1 = { location: null };
                    obj1[0] = obj.location;
                    obj[2] = obj1;
                    obj1.acceptFriendRequest(obj);
                  }
                  const onConfirm = obj.onConfirm;
                  if (onConfirm != null) {
                    onConfirm();
                  }
                };
                obj[1] = function onCancel() {
                  const onCancel = obj.onCancel;
                  if (onCancel != null) {
                    onCancel();
                  }
                };
                let result = userId(_location[7]).openAcceptFriendRequestConfirmModal(obj);
                const obj6 = userId(_location[7]);
              } else {
                let ok;
                if (error != null) {
                  ok = error.ok;
                }
                if (ok) {
                  applicationId(_location[8]);
                  obj1 = { type: "UPDATE_STRANGER_STATUS", userId: null, isStranger: false };
                  obj1[1] = obj.userId;
                  obj1.dispatch(obj1);
                }
              }
            });
          }
        }
      }
    }
    if (null != applicationId) {
      let obj4 = { userId: null, applicationId: null };
      obj4[0] = userId;
      obj4[1] = applicationId;
      let result4 = applicationId(tmp2[2]).acceptGameFriendRequest(obj4);
      const obj14 = applicationId(tmp2[2]);
    } else {
      let obj5 = { userId: null, confirmStrangerRequest: null, context: null };
      obj5[0] = userId;
      obj5[1] = true;
      obj6 = { location: null };
      obj6[0] = _location;
      obj5[2] = obj6;
      result4 = applicationId(tmp2[3]).acceptFriendRequest(obj5);
      const obj11 = applicationId(tmp2[3]);
    }
    return result4.then((result) => {
      if (closure_3 != null) {
        tmp();
      }
      if (closure_5 != null) {
        tmp3();
      }
    });
  }
};