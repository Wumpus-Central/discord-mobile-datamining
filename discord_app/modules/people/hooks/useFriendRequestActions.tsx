// === Module 13119: useFriendRequestActions ===

// Module 13119 (useFriendRequestActions)
import PeopleUtilsDefault from "PeopleUtils" /* 10870 */;
import noop from "module_19" /* 19 */;

const size = fn(2);
let result = size.fileFinishedImporting("modules/people/hooks/useFriendRequestActions.tsx");

export const useFriendRequestActions = function useFriendRequestActions(userId) {
  userId = userId.userId;
  const applicationId = userId.applicationId;
  const isGameRelationship = userId.isGameRelationship;
  const _location = userId.location;
  const onConfirm = userId.onConfirm;
  const onCancel = userId.onCancel;
  const onFinally = userId.onFinally;
  const items = [applicationId, isGameRelationship, _location, userId];
  let obj = { acceptFriendRequest: null, cancelFriendRequest: null };
  const items1 = [applicationId, isGameRelationship, _location, onCancel, onConfirm, onFinally, userId];
  const callback = isGameRelationship.useCallback(() => {
    const obj = { userId, applicationId: null, location: null };
    let tmp = null;
    if (isGameRelationship) {
      tmp = applicationId;
    }
    obj.applicationId = tmp;
    obj.location = _location;
    obj.cancelFriendRequest(obj);
  }, items);
  obj.acceptFriendRequest = isGameRelationship.useCallback(() => {
    const obj = { userId, applicationId: null, location: null, onConfirm: null, onCancel: null, onFinally: null };
    let tmp = null;
    if (isGameRelationship) {
      tmp = applicationId;
    }
    obj.applicationId = tmp;
    obj.location = _location;
    obj.onConfirm = onConfirm;
    obj.onCancel = onCancel;
    obj.onFinally = onFinally;
    const result = obj.maybeConfirmFriendRequestAccept(obj);
  }, items1);
  obj.cancelFriendRequest = callback;
  return obj;
};