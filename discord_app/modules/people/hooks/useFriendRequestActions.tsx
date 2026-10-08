// === Module 13249: useFriendRequestActions ===

// Module 13249 (useFriendRequestActions)
import PeopleUtilsDefault from "PeopleUtils" /* 10215 */;
import noop from "module_19" /* 19 */;

const require = fn;
const ReactCompilerGating = fn(558);
const size = fn(2);
let result = size.fileFinishedImporting("modules/people/hooks/useFriendRequestActions.tsx");

export const useFriendRequestActions = ReactCompilerGating.isReactCompilerEnabled() ? (function useFriendRequestActions(userId) {
  const cResult = userId(isGameRelationship[2]).c(16);
  userId = userId.userId;
  const applicationId = userId.applicationId;
  isGameRelationship = userId.isGameRelationship;
  const _location = userId.location;
  const onConfirm = userId.onConfirm;
  const onCancel = userId.onCancel;
  const onFinally = userId.onFinally;
  if (cResult[0] === applicationId) {
    if (cResult[1] === isGameRelationship) {
      if (cResult[2] === _location) {
        if (cResult[3] === userId) {
          let tmp2 = cResult[4];
        }
        if (cResult[5] === applicationId) {
          if (cResult[6] === isGameRelationship) {
            if (cResult[7] === _location) {
              if (cResult[8] === onCancel) {
                if (cResult[9] === onConfirm) {
                  if (cResult[10] === onFinally) {
                    if (cResult[11] === userId) {
                      let tmp3 = cResult[12];
                    }
                    if (cResult[13] === tmp3) {
                      if (cResult[14] === tmp2) {
                        let tmp4 = cResult[15];
                      }
                      return tmp4;
                    }
                    class C {
                      constructor() {
                        obj = closure_1(closure_2[3]);
                        obj1 = { userId, applicationId: null, location: null, onConfirm: null, onCancel: null, onFinally: null };
                        tmp = null;
                        if (isGameRelationship) {
                          tmp = applicationId;
                        }
                        obj1.applicationId = tmp;
                        obj1.location = location;
                        obj1.onConfirm = onConfirm;
                        obj1.onCancel = onCancel;
                        obj1.onFinally = onFinally;
                        result = obj.maybeConfirmFriendRequestAccept(obj1);
                        return;
                      }
                    }
                    tmp5[0] = tmp3;
                    tmp5[1] = tmp2;
                    cResult[13] = tmp3;
                    cResult[14] = tmp2;
                    cResult[15] = tmp5;
                    tmp4 = tmp5;
                  }
                }
              }
            }
          }
        }
        class C {
          constructor() {
            obj = closure_1(closure_2[3]);
            obj1 = { userId, applicationId: null, location: null, onConfirm: null, onCancel: null, onFinally: null };
            tmp = null;
            if (isGameRelationship) {
              tmp = applicationId;
            }
            obj1.applicationId = tmp;
            obj1.location = location;
            obj1.onConfirm = onConfirm;
            obj1.onCancel = onCancel;
            obj1.onFinally = onFinally;
            result = obj.maybeConfirmFriendRequestAccept(obj1);
            return;
          }
        }
        cResult[5] = applicationId;
        cResult[6] = isGameRelationship;
        cResult[7] = _location;
        cResult[8] = onCancel;
        cResult[9] = onConfirm;
        cResult[10] = onFinally;
        cResult[11] = userId;
        cResult[12] = C;
        tmp3 = C;
      }
    }
  }
  const fn = function o() {
    const obj2 = { userId, applicationId: null, location: null };
    let tmp = null;
    if (isGameRelationship) {
      tmp = applicationId;
    }
    obj2.applicationId = tmp;
    obj2.location = _location;
    PeopleUtilsDefault.cancelFriendRequest(obj2);
  };
  cResult[0] = applicationId;
  cResult[1] = isGameRelationship;
  cResult[2] = _location;
  cResult[3] = userId;
  cResult[4] = fn;
  tmp2 = fn;
}) : (function useFriendRequestActions(userId) {
  userId = userId.userId;
  const applicationId = userId.applicationId;
  const isGameRelationship = userId.isGameRelationship;
  const _location = userId.location;
  const onConfirm = userId.onConfirm;
  const onCancel = userId.onCancel;
  const onFinally = userId.onFinally;
  const items = [applicationId, isGameRelationship, _location, userId];
  const obj = { acceptFriendRequest: null, cancelFriendRequest: null };
  const items1 = [applicationId, isGameRelationship, _location, onCancel, onConfirm, onFinally, userId];
  const callback = _location.useCallback(() => {
    const obj2 = { userId, applicationId: null, location: null };
    let tmp = null;
    if (isGameRelationship) {
      tmp = applicationId;
    }
    obj2.applicationId = tmp;
    obj2.location = _location;
    PeopleUtilsDefault.cancelFriendRequest(obj2);
  }, items);
  obj.acceptFriendRequest = _location.useCallback(() => {
    const obj2 = { userId, applicationId: null, location: null, onConfirm: null, onCancel: null, onFinally: null };
    let tmp = null;
    if (isGameRelationship) {
      tmp = applicationId;
    }
    obj2.applicationId = tmp;
    obj2.location = _location;
    obj2.onConfirm = onConfirm;
    obj2.onCancel = onCancel;
    obj2.onFinally = onFinally;
    const result = PeopleUtilsDefault.maybeConfirmFriendRequestAccept(obj2);
  }, items1);
  obj.cancelFriendRequest = callback;
  return obj;
});