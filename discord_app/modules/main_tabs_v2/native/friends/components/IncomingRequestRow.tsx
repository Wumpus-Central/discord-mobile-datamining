// discord_app/modules/main_tabs_v2/native/friends/components/IncomingRequestRow.tsx
import getSystemLocale from "../../../../../intl/index.native.tsx";
import nameFromUserDefault from "../../../../../utils/UserUtils.tsx";
import closure_3 from "../../../../../../_runtime/00019_noop.js";
import closure_4 from "../../../../a11y/AccessibilityStore.tsx";
import closure_5 from "../../../../applications/ApplicationStore.tsx";
import { UserRowModes } from "../../shared_components/user_list/UserRowConstants.tsx";
import { RelationshipTypes } from "../../../../../Constants.tsx";
import { jsx } from "../../../../../../_runtime/react/00021_jsxProd.js";

require = arg1;
function IncomingRequestRow(user) {
  user = user.user;
  const applicationId = user.applicationId;
  const accepted = user.accepted;
  const onAcceptIncomingRequest = user.onAcceptIncomingRequest;
  const onDeclineIncomingRequest = user.onDeclineIncomingRequest;
  const acceptRequestAccessibilityLabel = user.acceptRequestAccessibilityLabel;
  const ignoreRequestAccessibilityLabel = user.ignoreRequestAccessibilityLabel;
  ({ accessibilityLabel, acceptedRequestLabel, acceptedRequestAccessibilityLabel } = user);
  const merged = Object.assign(user, Object.create(null));
  let sharedValue;
  let userTag;
  let stateFromStores1;
  let obj = user(accepted[6]);
  sharedValue = obj.useSharedValue(false);
  obj1 = user(accepted[7]);
  let items = [onDeclineIncomingRequest];
  const stateFromStores = obj1.useStateFromStores(items, () => onDeclineIncomingRequest.useReducedMotion);
  let items1 = [accepted, sharedValue];
  const effect = onAcceptIncomingRequest.useEffect(() => {
    const result = sharedValue.set(accepted);
  }, items1);
  const items2 = [acceptRequestAccessibilityLabel, accepted, ignoreRequestAccessibilityLabel, user];
  const items3 = [applicationId, onAcceptIncomingRequest, onDeclineIncomingRequest, sharedValue, user];
  const memo = onAcceptIncomingRequest.useMemo(() => {
    let obj = { name: null, label: null };
    if (accepted) {
      obj[0] = tmp.WAVE;
      const intl = user(accepted[8]).intl;
      obj = { username: null };
      obj[0] = applicationId(accepted[9]).getName(user);
      obj[1] = intl.formatToPlainString(user(accepted[8]).t.m0zYbV, obj);
      const items = [obj];
      let items1 = items;
      const obj4 = applicationId(accepted[9]);
    } else {
      obj[0] = tmp.ACCEPT;
      obj[1] = acceptRequestAccessibilityLabel;
      items1 = [obj, ];
      obj = { name: null, label: null };
      obj[0] = stateFromStores1.DECLINE;
      obj[1] = ignoreRequestAccessibilityLabel;
      items1[1] = obj;
    }
    return items1;
  }, items2);
  const callback = onAcceptIncomingRequest.useCallback((nativeEvent) => {
    const actionName = nativeEvent.nativeEvent.actionName;
    if (stateFromStores1.ACCEPT === actionName) {
      const result = sharedValue.set(true);
      onAcceptIncomingRequest(user.id, applicationId);
      let obj = { userId: null, applicationId: null };
      obj[0] = user.id;
      obj[1] = applicationId;
      return user(accepted[10]).acceptIncomingRequest(obj);
    } else if (tmp.DECLINE === actionName) {
      onDeclineIncomingRequest(user.id, applicationId);
      obj = { userId: null, applicationId: null };
      obj[0] = user.id;
      obj[1] = applicationId;
      return user(accepted[10]).dismissIncomingRequest(obj);
    } else if (tmp.WAVE === actionName) {
      obj = user(accepted[10]);
      return obj.sendWave(user.id, true, "Incoming Friend Request");
    }
  }, items3);
  userTag = applicationId(accepted[9]).useUserTag(user);
  const obj3 = applicationId(accepted[9]);
  const items4 = [acceptRequestAccessibilityLabel];
  stateFromStores1 = user(accepted[7]).useStateFromStores(items4, () => acceptRequestAccessibilityLabel.getApplication(applicationId));
  const items5 = [stateFromStores1, applicationId, userTag];
  const memo1 = onAcceptIncomingRequest.useMemo(() => {
    if (null != stateFromStores1) {
      const obj = { application: null, textVariant: "text-xs/medium", iconSize: 12 };
      obj[0] = tmp;
      let str = userTag(applicationId(accepted[11]), obj, tmp.id);
    } else {
      str = "";
      if (null == applicationId) {
        str = userTag;
      }
    }
    return str;
  }, items5);
  obj = {};
  let obj4 = user(accepted[7]);
  const merged1 = Object.assign(merged);
  obj.user = user;
  obj.type = sharedValue.PENDING_INCOMING;
  obj.mode = ignoreRequestAccessibilityLabel.ACTIONS;
  obj.accessibilityActions = memo;
  obj.accessibilityLabel = accessibilityLabel;
  obj.onAccessibilityAction = callback;
  obj = { actioned: sharedValue, label: memo1, actionStatus: acceptedRequestLabel, actionStatusAccessibilityLabel: acceptedRequestAccessibilityLabel, animate: !stateFromStores };
  obj.subLabel = userTag(user(accepted[13]).ActionStatusSubLabel, obj);
  obj1 = { user, pressed: sharedValue, applicationId, onAcceptIncomingRequest, onDeclineIncomingRequest, animate: !stateFromStores, acceptRequestAccessibilityLabel, ignoreRequestAccessibilityLabel };
  obj.trailing = userTag(user(accepted[14]).IncomingRequestRowActions, obj1);
  return userTag(applicationId(accepted[12]), obj);
}
function IncomingGameFriendRequestRow(arg0) {
  ({ user, application } = arg0);
  const merged = Object.assign(arg0, Object.create(null));
  let obj = nameFromUserDefault;
  const userTag = obj.useUserTag(user);
  obj = { user, applicationId: application.id, accessibilityLabel: null, acceptedRequestLabel: null, acceptedRequestAccessibilityLabel: null, acceptRequestAccessibilityLabel: null, ignoreRequestAccessibilityLabel: null };
  const intl = application(1236).intl;
  obj[2] = intl.formatToPlainString(application(1236).t.u6lp4x, { name: userTag });
  const intl2 = application(1236).intl;
  obj = {
    applicationNameHook() {
      return closure_1_8(closure_1_1(closure_1_2[11]), { application, textVariant: "text-xs/medium", iconSize: 12 }, application.id);
    }
  };
  obj[3] = intl2.format(application(1236).t.gRgJGR, obj);
  const intl3 = application(1236).intl;
  obj[4] = intl3.formatToPlainString(application(1236).t.Ke6fRJ, { name: userTag, applicationName: application.name });
  const intl4 = application(1236).intl;
  obj[5] = intl4.formatToPlainString(application(1236).t.kMUpdH, { name: userTag, applicationName: application.name });
  const intl5 = application(1236).intl;
  obj[6] = intl5.formatToPlainString(application(1236).t.d8Cw5e, { name: userTag, applicationName: application.name });
  const merged1 = Object.assign(merged);
  return <IncomingRequestRow applicationNameHook={function applicationNameHook() {
    return closure_1_8(closure_1_1(closure_1_2[11]), { application, textVariant: "text-xs/medium", iconSize: 12 }, application.id);
  }} />;
}
let closure_9 = { ACCEPT: "accept", DECLINE: "decline", WAVE: "wave" };
let result = require("set").fileFinishedImporting("modules/main_tabs_v2/native/friends/components/IncomingRequestRow.tsx");

export const IncomingFriendRequestRow = function IncomingFriendRequestRow(user) {
  user = user.user;
  const merged = Object.assign(user, Object.create(null));
  let obj = nameFromUserDefault;
  const userTag = obj.useUserTag(user);
  obj = { user, accessibilityLabel: null, acceptedRequestLabel: null, acceptedRequestAccessibilityLabel: null, acceptRequestAccessibilityLabel: null, ignoreRequestAccessibilityLabel: null };
  const intl = getSystemLocale.intl;
  obj[1] = intl.formatToPlainString(getSystemLocale.t.u6lp4x, { name: userTag });
  const intl2 = getSystemLocale.intl;
  obj[2] = intl2.string(getSystemLocale.t["0E614Z"]);
  const intl3 = getSystemLocale.intl;
  obj[3] = intl3.formatToPlainString(getSystemLocale.t.cRwkp7, { name: userTag });
  const intl4 = getSystemLocale.intl;
  obj[4] = intl4.formatToPlainString(getSystemLocale.t.MUfqsS, { name: userTag });
  const intl5 = getSystemLocale.intl;
  obj[5] = intl5.formatToPlainString(getSystemLocale.t["0OF9IB"], { name: userTag });
  const merged1 = Object.assign(merged);
  return <IncomingRequestRow user={user} accessibilityLabel={null} acceptedRequestLabel={null} acceptedRequestAccessibilityLabel={null} acceptRequestAccessibilityLabel={null} ignoreRequestAccessibilityLabel={null} />;
};
export const ConnectedIncomingGameFriendRequestRow = function ConnectedIncomingGameFriendRequestRow(applicationId) {
  applicationId = applicationId.applicationId;
  let tmp = null;
  const merged = Object.assign(applicationId, Object.create(null));
  let obj = applicationId(647);
  const items = [closure_5];
  const stateFromStores = obj.useStateFromStores(items, () => closure_1_5.getApplication(applicationId));
  if (null != stateFromStores) {
    obj = { user: null, application: null };
    obj[0] = applicationId.user;
    obj[1] = stateFromStores;
    const merged1 = Object.assign(merged);
    tmp = <IncomingGameFriendRequestRow user={null} application={null} />;
  }
  return tmp;
};