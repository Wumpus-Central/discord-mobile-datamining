// === Module 17248: IncomingRequestRow ===

// Module 17248 (IncomingRequestRow)
import util from "util" /* 1115 */;
import UserUtilsDefault from "UserUtils" /* 4601 */;
import ApplicationIconAndNameDefault from "ApplicationIconAndName" /* 12885 */;
import AddFriendsScreenUtils from "AddFriendsScreenUtils" /* 16394 */;
import noop from "module_19" /* 19 */;
import AccessibilityStore from "AccessibilityStore" /* 4749 */;
import ApplicationStore from "ApplicationStore" /* 4984 */;

require = fn;
function IncomingRequestRow(user) {
  user = user.user;
  const applicationId = user.applicationId;
  const accepted = user.accepted;
  const onAcceptIncomingRequest = user.onAcceptIncomingRequest;
  const onDeclineIncomingRequest = user.onDeclineIncomingRequest;
  const acceptRequestAccessibilityLabel = user.acceptRequestAccessibilityLabel;
  const ignoreRequestAccessibilityLabel = user.ignoreRequestAccessibilityLabel;
  ({ accessibilityLabel, acceptedRequestLabel, acceptedRequestAccessibilityLabel } = user);
  const merged = Object.assign(user, Object.assign({ user: 0, applicationId: 0, accepted: 0, onAcceptIncomingRequest: 0, onDeclineIncomingRequest: 0, accessibilityLabel: 0, acceptRequestAccessibilityLabel: 0, ignoreRequestAccessibilityLabel: 0, acceptedRequestLabel: 0, acceptedRequestAccessibilityLabel: 0 }));
  const sharedValue = user(accepted[6]).useSharedValue(false);
  let obj = user(accepted[6]);
  let items = [onDeclineIncomingRequest];
  const stateFromStores = user(accepted[7]).useStateFromStores(items, () => onDeclineIncomingRequest.useReducedMotion);
  let items1 = [accepted, sharedValue];
  const effect = onAcceptIncomingRequest.useEffect(() => {
    const result = sharedValue.set(accepted);
  }, items1);
  const items2 = [acceptRequestAccessibilityLabel, accepted, ignoreRequestAccessibilityLabel, user];
  const items3 = [applicationId, onAcceptIncomingRequest, onDeclineIncomingRequest, sharedValue, user];
  const memo = onAcceptIncomingRequest.useMemo(() => {
    const obj = { name: null, label: null };
    if (accepted) {
      obj.name = stateFromStores1.WAVE;
      const intl = util.intl;
      const obj2 = { username: UserUtilsDefault.getName(user) };
      obj.label = intl.formatToPlainString(util.t.m0zYbV, obj2);
      const items = [obj];
      let items1 = items;
    } else {
      obj.name = stateFromStores1.ACCEPT;
      obj.label = acceptRequestAccessibilityLabel;
      items1 = [obj, ];
      const obj3 = { name: stateFromStores1.DECLINE, label: ignoreRequestAccessibilityLabel };
      items1[1] = obj3;
    }
    return items1;
  }, items2);
  const callback = onAcceptIncomingRequest.useCallback((nativeEvent) => {
    const actionName = nativeEvent.nativeEvent.actionName;
    if (stateFromStores1.ACCEPT === actionName) {
      const result = sharedValue.set(true);
      onAcceptIncomingRequest(user.id, applicationId);
      const obj3 = { userId: user.id, applicationId };
      return AddFriendsScreenUtils.acceptIncomingRequest(obj3);
    } else if (stateFromStores1.DECLINE === actionName) {
      onDeclineIncomingRequest(user.id, applicationId);
      const obj5 = { userId: user.id, applicationId };
      return AddFriendsScreenUtils.dismissIncomingRequest(obj5);
    } else if (stateFromStores1.WAVE === actionName) {
      return AddFriendsScreenUtils.sendWave(user.id, true, "Incoming Friend Request");
    }
  }, items3);
  let obj2 = user(accepted[7]);
  const userTag = applicationId(accepted[9]).useUserTag(user);
  let obj3 = applicationId(accepted[9]);
  const items4 = [acceptRequestAccessibilityLabel];
  const stateFromStores1 = user(accepted[7]).useStateFromStores(items4, () => ApplicationStore.getApplication(applicationId));
  const items5 = [stateFromStores1, applicationId, userTag];
  const memo1 = onAcceptIncomingRequest.useMemo(() => {
    if (null != stateFromStores1) {
      const obj = { application: stateFromStores1, textVariant: "text-xs/medium", iconSize: 12 };
      let str = jsx(ApplicationIconAndNameDefault, { application: stateFromStores1, textVariant: "text-xs/medium", iconSize: 12 }, stateFromStores1.id);
    } else {
      str = "";
      if (null == applicationId) {
        str = userTag;
      }
    }
    return str;
  }, items5);
  let obj5 = {};
  let obj4 = user(accepted[7]);
  const merged1 = Object.assign(merged);
  obj5.user = user;
  obj5.type = sharedValue.PENDING_INCOMING;
  obj5.mode = ignoreRequestAccessibilityLabel.ACTIONS;
  obj5.accessibilityActions = memo;
  obj5.accessibilityLabel = accessibilityLabel;
  obj5.onAccessibilityAction = callback;
  obj5.subLabel = userTag(user(accepted[13]).ActionStatusSubLabel, { actioned: sharedValue, label: memo1, actionStatus: acceptedRequestLabel, actionStatusAccessibilityLabel: acceptedRequestAccessibilityLabel, animate: !stateFromStores });
  obj5.trailing = userTag(user(accepted[14]).IncomingRequestRowActions, { user, pressed: sharedValue, applicationId, onAcceptIncomingRequest, onDeclineIncomingRequest, animate: !stateFromStores, acceptRequestAccessibilityLabel, ignoreRequestAccessibilityLabel });
  return userTag(applicationId(accepted[12]), obj5);
}
function IncomingGameFriendRequestRow(arg0) {
  ({ user, application } = arg0);
  const merged = Object.assign(arg0, Object.assign({ user: 0, application: 0 }));
  const userTag = UserUtilsDefault.useUserTag(user);
  const obj2 = { user, applicationId: application.id, accessibilityLabel: null, acceptedRequestLabel: null, acceptedRequestAccessibilityLabel: null, acceptRequestAccessibilityLabel: null, ignoreRequestAccessibilityLabel: null };
  const intl = application(1115).intl;
  obj2.accessibilityLabel = intl.formatToPlainString(application(1115).t.u6lp4x, { name: userTag });
  const intl2 = application(1115).intl;
  obj2.acceptedRequestLabel = intl2.format(application(1115).t.gRgJGR, {
    applicationNameHook() {
      return jsx(ApplicationIconAndNameDefault, { application, textVariant: "text-xs/medium", iconSize: 12 }, application.id);
    }
  });
  const intl3 = application(1115).intl;
  obj2.acceptedRequestAccessibilityLabel = intl3.formatToPlainString(application(1115).t.Ke6fRJ, { name: userTag, applicationName: application.name });
  const intl4 = application(1115).intl;
  obj2.acceptRequestAccessibilityLabel = intl4.formatToPlainString(application(1115).t.kMUpdH, { name: userTag, applicationName: application.name });
  const intl5 = application(1115).intl;
  obj2.ignoreRequestAccessibilityLabel = intl5.formatToPlainString(application(1115).t.d8Cw5e, { name: userTag, applicationName: application.name });
  const merged1 = Object.assign(merged);
  return <IncomingRequestRow user={user} applicationId={application.id} accessibilityLabel={null} acceptedRequestLabel={null} acceptedRequestAccessibilityLabel={null} acceptRequestAccessibilityLabel={null} ignoreRequestAccessibilityLabel={null} />;
}
const UserRowModes = fn(11128).UserRowModes;
const RelationshipTypes = fn(1074).RelationshipTypes;
const jsx = fn(21).jsx;
let closure_9 = { ACCEPT: "accept", DECLINE: "decline", WAVE: "wave" };
const size = fn(2);
let result = size.fileFinishedImporting("modules/main_tabs_v2/native/friends/components/IncomingRequestRow.tsx");

export const IncomingFriendRequestRow = function IncomingFriendRequestRow(user) {
  user = user.user;
  const merged = Object.assign(user, Object.assign({ user: 0 }));
  const userTag = UserUtilsDefault.useUserTag(user);
  const obj2 = { user, accessibilityLabel: null, acceptedRequestLabel: null, acceptedRequestAccessibilityLabel: null, acceptRequestAccessibilityLabel: null, ignoreRequestAccessibilityLabel: null };
  const intl = util.intl;
  obj2.accessibilityLabel = intl.formatToPlainString(util.t.u6lp4x, { name: userTag });
  const intl2 = util.intl;
  obj2.acceptedRequestLabel = intl2.string(util.t["0E614Z"]);
  const intl3 = util.intl;
  obj2.acceptedRequestAccessibilityLabel = intl3.formatToPlainString(util.t.cRwkp7, { name: userTag });
  const intl4 = util.intl;
  obj2.acceptRequestAccessibilityLabel = intl4.formatToPlainString(util.t.MUfqsS, { name: userTag });
  const intl5 = util.intl;
  obj2.ignoreRequestAccessibilityLabel = intl5.formatToPlainString(util.t["0OF9IB"], { name: userTag });
  const merged1 = Object.assign(merged);
  return <IncomingRequestRow user={user} accessibilityLabel={null} acceptedRequestLabel={null} acceptedRequestAccessibilityLabel={null} acceptRequestAccessibilityLabel={null} ignoreRequestAccessibilityLabel={null} />;
};
export const ConnectedIncomingGameFriendRequestRow = function ConnectedIncomingGameFriendRequestRow(applicationId) {
  applicationId = applicationId.applicationId;
  let tmp = null;
  const merged = Object.assign(applicationId, Object.assign({ user: 0, applicationId: 0 }));
  const items = [ApplicationStore];
  const stateFromStores = applicationId(563).useStateFromStores(items, () => ApplicationStore.getApplication(applicationId));
  if (null != stateFromStores) {
    const obj2 = { user: applicationId.user, application: stateFromStores };
    const merged1 = Object.assign(merged);
    tmp = <IncomingGameFriendRequestRow user={applicationId.user} application={stateFromStores} />;
  }
  return tmp;
};