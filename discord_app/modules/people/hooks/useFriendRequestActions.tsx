// === Module 12674: useFriendRequestActions ===

// Module 12674 (useFriendRequestActions)
import PeopleUtilsDefault from "PeopleUtils" /* 10318 */;
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
  const obj = { acceptFriendRequest: null, cancelFriendRequest: null };
  const items1 = [applicationId, isGameRelationship, _location, onCancel, onConfirm, onFinally, userId];
  const callback = isGameRelationship.useCallback(() => {
    const obj2 = { userId, applicationId: null, location: null };
    let tmp = null;
    if (isGameRelationship) {
      tmp = applicationId;
    }
    obj2.applicationId = tmp;
    obj2.location = _location;
    PeopleUtilsDefault.cancelFriendRequest(obj2);
  }, items);
  obj.acceptFriendRequest = isGameRelationship.useCallback(() => {
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
};