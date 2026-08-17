// discord_app/modules/people/hooks/useFriendRequestActions.tsx
import closure_2 from "noop" /* 19 */;

let result = require("set").fileFinishedImporting("modules/people/hooks/useFriendRequestActions.tsx");

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
    let obj = userId(applicationId[1]);
    obj = { userId, applicationId: null, location: null };
    let tmp = null;
    if (isGameRelationship) {
      tmp = applicationId;
    }
    obj[1] = tmp;
    obj[2] = _location;
    obj.cancelFriendRequest(obj);
  }, items);
  obj[0] = isGameRelationship.useCallback(() => {
    let obj = userId(applicationId[1]);
    obj = { userId, applicationId: null, location: null, onConfirm: null, onCancel: null, onFinally: null };
    let tmp = null;
    if (isGameRelationship) {
      tmp = applicationId;
    }
    obj[1] = tmp;
    obj[2] = _location;
    obj[3] = onConfirm;
    obj[4] = onCancel;
    obj[5] = onFinally;
    const result = obj.maybeConfirmFriendRequestAccept(obj);
  }, items1);
  obj[1] = callback;
  return obj;
};