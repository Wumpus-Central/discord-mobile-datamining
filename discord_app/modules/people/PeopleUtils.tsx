// discord_app/modules/people/PeopleUtils.tsx
import upsertRelationship from "upsertRelationship";
import { AbortCodes } from "ME";

const require = arg1;
let result = require("showRequestFailedAlert").fileFinishedImporting("modules/people/PeopleUtils.tsx");

export default {
  removeFriend(arg0) {
    let applicationId;
    let userId;
    ({ userId, applicationId } = arg0);
    if (null != applicationId) {
      let obj = { userId: null, applicationId: null };
      obj[0] = userId;
      obj[1] = applicationId;
      importDefault(9066).removeGameFriend(obj);
      const obj3 = importDefault(9066);
    } else {
      obj = importDefault(8927);
      obj = { location: null };
      obj[0] = tmp;
      obj.removeFriend(userId, obj);
    }
  },
  cancelFriendRequest(arg0) {
    let applicationId;
    let userId;
    ({ userId, applicationId } = arg0);
    if (null != applicationId) {
      let obj = { userId: null, applicationId: null };
      obj[0] = userId;
      obj[1] = applicationId;
      let result = importDefault(9066).cancelGameFriendRequest(obj);
      const obj3 = importDefault(9066);
    } else {
      obj = importDefault(8927);
      obj = { location: null };
      obj[0] = tmp;
      result = obj.cancelFriendRequest(userId, obj);
    }
    return result;
  },
  acceptFriendRequest(location) {
    let applicationId;
    let confirmStrangerRequest;
    let userId;
    ({ userId, applicationId, confirmStrangerRequest } = location);
    if (confirmStrangerRequest === undefined) {
      confirmStrangerRequest = false;
    }
    if (null != applicationId) {
      let obj = { userId: null, applicationId: null };
      obj[0] = userId;
      obj[1] = applicationId;
      let result = importDefault(9066).acceptGameFriendRequest(obj);
      const obj4 = importDefault(9066);
    } else {
      obj = importDefault(8927);
      obj = { userId: null, confirmStrangerRequest: null, context: null };
      obj[0] = userId;
      obj[1] = confirmStrangerRequest;
      const obj1 = { location: null };
      obj1[0] = location.location;
      obj[2] = obj1;
      result = obj.acceptFriendRequest(obj);
    }
    return result;
  },
  maybeConfirmFriendRequestAccept(userId) {
    let AbortCodes;
    let _location2;
    let applicationId2;
    let upsertRelationship;
    let closure_5;
    let confirmStrangerRequest;
    let userId2;
    userId = userId.userId;
    const applicationId = userId.applicationId;
    const _location = userId.location;
    ({ onConfirm: upsertRelationship, onCancel: AbortCodes, onFinally: closure_5 } = userId);
    let obj = userId(_location[4]);
    let result = obj.isSettingTeenByDefault(userId(_location[5]).SettingsDefaultFeature.FRIEND_REQUEST_STRANGER_CONFIRMATION);
    let obj1 = userId(_location[6]);
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
                obj[0] = tmp;
                obj[1] = tmp2;
                const result = applicationId(_location[2]).acceptGameFriendRequest(obj);
                const obj4 = applicationId(_location[2]);
              } else {
                obj = applicationId(_location[3]);
                obj = { userId: null, confirmStrangerRequest: null, context: null };
                obj[0] = tmp;
                obj[1] = true;
                const obj1 = { location: null };
                obj1[0] = tmp3;
                obj[2] = obj1;
                obj.acceptFriendRequest(obj);
              }
              if (upsertRelationship != null) {
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
              let obj3 = applicationId(tmp2[3]);
              const obj2 = { userId: null, confirmStrangerRequest: null, context: null };
              obj2[0] = userId2;
              obj2[1] = confirmStrangerRequest;
              obj3 = { location: null };
              obj3[0] = _location2;
              obj2[2] = obj3;
              result3 = obj3.acceptFriendRequest(obj2);
            }
            const nextPromise = result3.then((body) => {
              obj = { userId: obj, applicationId, location: _location, onConfirm: upsertRelationship, onCancel: closure_4 };
              let code;
              if (body != null) {
                body = body.body;
                if (body != null) {
                  code = body.code;
                }
              }
              if (code === outer1_4.RELATIONSHIP_INVALID_NO_CONFIRMATION) {
                obj = { type: "UPDATE_STRANGER_STATUS", userId: null, isStranger: true };
                obj[1] = obj.userId;
                applicationId(_location[8]).dispatch(obj);
                const obj4 = applicationId(_location[8]);
                obj = { onConfirm: null, onCancel: null };
                obj[0] = function onConfirm() {
                  let applicationId;
                  let confirmStrangerRequest;
                  let userId;
                  let obj = {};
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
                    const result = outer1_1(outer1_2[2]).acceptGameFriendRequest(obj);
                    const obj5 = outer1_1(outer1_2[2]);
                  } else {
                    let obj1 = outer1_1(outer1_2[3]);
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
                const result = userId(_location[7]).openAcceptFriendRequestConfirmModal(obj);
                let flag = true;
                const obj6 = userId(_location[7]);
              } else {
                let ok;
                if (body != null) {
                  ok = body.ok;
                }
                flag = false;
                if (ok) {
                  let obj1 = applicationId(_location[8]);
                  obj1 = { type: "UPDATE_STRANGER_STATUS", userId: null, isStranger: false };
                  obj1[1] = obj.userId;
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
            result3.then((body) => {
              obj = { userId: obj, applicationId, location: _location, onConfirm: upsertRelationship, onCancel: closure_4 };
              let code;
              if (body != null) {
                body = body.body;
                if (body != null) {
                  code = body.code;
                }
              }
              if (code === outer1_4.RELATIONSHIP_INVALID_NO_CONFIRMATION) {
                obj = { type: "UPDATE_STRANGER_STATUS", userId: null, isStranger: true };
                obj[1] = obj.userId;
                applicationId(_location[8]).dispatch(obj);
                const obj4 = applicationId(_location[8]);
                obj = { onConfirm: null, onCancel: null };
                obj[0] = function onConfirm() {
                  let applicationId;
                  let confirmStrangerRequest;
                  let userId;
                  let obj = {};
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
                    const result = outer1_1(outer1_2[2]).acceptGameFriendRequest(obj);
                    const obj5 = outer1_1(outer1_2[2]);
                  } else {
                    let obj1 = outer1_1(outer1_2[3]);
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
                const result = userId(_location[7]).openAcceptFriendRequestConfirmModal(obj);
                let flag = true;
                const obj6 = userId(_location[7]);
              } else {
                let ok;
                if (body != null) {
                  ok = body.ok;
                }
                flag = false;
                if (ok) {
                  let obj1 = applicationId(_location[8]);
                  obj1 = { type: "UPDATE_STRANGER_STATUS", userId: null, isStranger: false };
                  obj1[1] = obj.userId;
                  obj1.dispatch(obj1);
                  flag = false;
                }
              }
              if (!flag) {
                if (tmp != null) {
                  tmp();
                }
              }
            }).catch((body) => {
              obj = { userId: obj, applicationId, location: _location, onConfirm: upsertRelationship, onCancel: closure_4 };
              let code;
              if (body != null) {
                body = body.body;
                if (body != null) {
                  code = body.code;
                }
              }
              if (code === outer1_4.RELATIONSHIP_INVALID_NO_CONFIRMATION) {
                obj = { type: "UPDATE_STRANGER_STATUS", userId: null, isStranger: true };
                obj[1] = obj.userId;
                applicationId(_location[8]).dispatch(obj);
                const obj4 = applicationId(_location[8]);
                obj = { onConfirm: null, onCancel: null };
                obj[0] = function onConfirm() {
                  let applicationId;
                  let confirmStrangerRequest;
                  let userId;
                  let obj = {};
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
                    const result = outer1_1(outer1_2[2]).acceptGameFriendRequest(obj);
                    const obj5 = outer1_1(outer1_2[2]);
                  } else {
                    let obj1 = outer1_1(outer1_2[3]);
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
                if (body != null) {
                  ok = body.ok;
                }
                if (ok) {
                  let obj1 = applicationId(_location[8]);
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
            const catchPromise = result3.then((body) => {
              obj = { userId: obj, applicationId, location: _location, onConfirm: upsertRelationship, onCancel: closure_4 };
              let code;
              if (body != null) {
                body = body.body;
                if (body != null) {
                  code = body.code;
                }
              }
              if (code === outer1_4.RELATIONSHIP_INVALID_NO_CONFIRMATION) {
                obj = { type: "UPDATE_STRANGER_STATUS", userId: null, isStranger: true };
                obj[1] = obj.userId;
                applicationId(_location[8]).dispatch(obj);
                const obj4 = applicationId(_location[8]);
                obj = { onConfirm: null, onCancel: null };
                obj[0] = function onConfirm() {
                  let applicationId;
                  let confirmStrangerRequest;
                  let userId;
                  let obj = {};
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
                    const result = outer1_1(outer1_2[2]).acceptGameFriendRequest(obj);
                    const obj5 = outer1_1(outer1_2[2]);
                  } else {
                    let obj1 = outer1_1(outer1_2[3]);
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
                const result = userId(_location[7]).openAcceptFriendRequestConfirmModal(obj);
                let flag = true;
                const obj6 = userId(_location[7]);
              } else {
                let ok;
                if (body != null) {
                  ok = body.ok;
                }
                flag = false;
                if (ok) {
                  let obj1 = applicationId(_location[8]);
                  obj1 = { type: "UPDATE_STRANGER_STATUS", userId: null, isStranger: false };
                  obj1[1] = obj.userId;
                  obj1.dispatch(obj1);
                  flag = false;
                }
              }
              if (!flag) {
                if (tmp != null) {
                  tmp();
                }
              }
            }).catch((body) => {
              obj = { userId: obj, applicationId, location: _location, onConfirm: upsertRelationship, onCancel: closure_4 };
              let code;
              if (body != null) {
                body = body.body;
                if (body != null) {
                  code = body.code;
                }
              }
              if (code === outer1_4.RELATIONSHIP_INVALID_NO_CONFIRMATION) {
                obj = { type: "UPDATE_STRANGER_STATUS", userId: null, isStranger: true };
                obj[1] = obj.userId;
                applicationId(_location[8]).dispatch(obj);
                const obj4 = applicationId(_location[8]);
                obj = { onConfirm: null, onCancel: null };
                obj[0] = function onConfirm() {
                  let applicationId;
                  let confirmStrangerRequest;
                  let userId;
                  let obj = {};
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
                    const result = outer1_1(outer1_2[2]).acceptGameFriendRequest(obj);
                    const obj5 = outer1_1(outer1_2[2]);
                  } else {
                    let obj1 = outer1_1(outer1_2[3]);
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
                if (body != null) {
                  ok = body.ok;
                }
                if (ok) {
                  let obj1 = applicationId(_location[8]);
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
    return result4.then(() => {
      if (upsertRelationship != null) {
        tmp();
      }
      if (closure_5 != null) {
        tmp3();
      }
    });
  }
};