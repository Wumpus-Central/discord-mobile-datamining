// === Module 12951: useFriendRequestActions ===

// Module 12951 (useFriendRequestActions)
import PeopleUtilsDefault from "PeopleUtils" /* 10604 */;
import react from "react" /* 19 */;
import ReactCompilerGating from "ReactCompilerGating" /* 558 */;
import size from "module_2" /* 2 */;

let userId;

let tmp2 = ReactCompilerGating.isReactCompilerEnabled() ? ((userId) => {
  let isGameRelationship;
  let obj = userId(isGameRelationship[2]);
  const cResult = obj.c(16);
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
        let tmp2;
        if (cResult[3] === userId) {
          tmp2 = cResult[4];
        }
        if (cResult[5] === applicationId) {
          if (cResult[6] === isGameRelationship) {
            if (cResult[7] === _location) {
              if (cResult[8] === onCancel) {
                if (cResult[9] === onConfirm) {
                  if (cResult[10] === onFinally) {
                    let tmp3;
                    if (cResult[11] === userId) {
                      tmp3 = cResult[12];
                    }
                    if (cResult[13] === tmp3) {
                      let tmp4;
                      if (cResult[14] === tmp2) {
                        tmp4 = cResult[15];
                      }
                      return tmp4;
                    }
                    class I {
                      constructor() {
                        let tmp2;
                        const obj = { userId, applicationId: tmp2, location: _location, onConfirm, onCancel, onFinally };
                        tmp2 = null;
                        const maybeConfirmFriendRequestAccept = PeopleUtilsDefault.maybeConfirmFriendRequestAccept;
                        PeopleUtilsDefault;
                        if (isGameRelationship) {
                          tmp2 = applicationId;
                        }
                        const result = maybeConfirmFriendRequestAccept(obj);
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
        class I {
          constructor() {
            let tmp2;
            const obj = { userId, applicationId: tmp2, location: _location, onConfirm, onCancel, onFinally };
            tmp2 = null;
            const maybeConfirmFriendRequestAccept = PeopleUtilsDefault.maybeConfirmFriendRequestAccept;
            PeopleUtilsDefault;
            if (isGameRelationship) {
              tmp2 = applicationId;
            }
            const result = maybeConfirmFriendRequestAccept(obj);
          }
        }
        cResult[5] = applicationId;
        cResult[6] = isGameRelationship;
        cResult[7] = _location;
        cResult[8] = onCancel;
        cResult[9] = onConfirm;
        cResult[10] = onFinally;
        cResult[11] = userId;
        cResult[12] = I;
        tmp3 = I;
      }
    }
  }
  const fn = function o() {
    let tmp2;
    const obj = { userId, applicationId: tmp2, location: _location };
    tmp2 = null;
    const cancelFriendRequest = PeopleUtilsDefault.cancelFriendRequest;
    PeopleUtilsDefault;
    if (isGameRelationship) {
      tmp2 = applicationId;
    }
    cancelFriendRequest(obj);
  };
  cResult[0] = applicationId;
  cResult[1] = isGameRelationship;
  cResult[2] = _location;
  cResult[3] = userId;
  cResult[4] = fn;
  tmp2 = fn;
}) : ((userId) => {
  let callback;
  let items1;
  userId = userId.userId;
  const applicationId = userId.applicationId;
  const isGameRelationship = userId.isGameRelationship;
  const _location = userId.location;
  const onConfirm = userId.onConfirm;
  const onCancel = userId.onCancel;
  const onFinally = userId.onFinally;
  const items = [applicationId, isGameRelationship, _location, userId];
  let obj = {
    acceptFriendRequest: _location.useCallback(() => {
      let tmp2;
      const obj = { userId, applicationId: tmp2, location: _location, onConfirm, onCancel, onFinally };
      tmp2 = null;
      const maybeConfirmFriendRequestAccept = PeopleUtilsDefault.maybeConfirmFriendRequestAccept;
      PeopleUtilsDefault;
      if (isGameRelationship) {
        tmp2 = applicationId;
      }
      const result = maybeConfirmFriendRequestAccept(obj);
    }, items1),
    cancelFriendRequest: callback
  };
  items1 = [applicationId, isGameRelationship, _location, onCancel, onConfirm, onFinally, userId];
  callback = _location.useCallback(() => {
    let tmp2;
    const obj = { userId, applicationId: tmp2, location: _location };
    tmp2 = null;
    const cancelFriendRequest = PeopleUtilsDefault.cancelFriendRequest;
    PeopleUtilsDefault;
    if (isGameRelationship) {
      tmp2 = applicationId;
    }
    cancelFriendRequest(obj);
  }, items);
  return obj;
});
let result = size.fileFinishedImporting("modules/people/hooks/useFriendRequestActions.tsx");

export const useFriendRequestActions = tmp2;