// discord_app/modules/main_tabs_v2/native/friends/components/IncomingRequestRow.tsx
import util from "../../../../../intl/index.native.tsx";
import UserUtilsDefault from "../../../../../utils/UserUtils.tsx";
import ApplicationIconAndNameDefault from "../../../../user_profile/native/ApplicationIconAndName.tsx";
import AddFriendsScreenUtils from "AddFriendsScreenUtils.tsx";
import noop from "../../../../../../_runtime/metro/00019__.js";
import AccessibilityStore from "../../../../a11y/AccessibilityStore.tsx";
import ApplicationStore from "../../../../applications/ApplicationStore.tsx";

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
  const merged = Object.assign(
    user,
    Object.assign({
      user: 0,
      applicationId: 0,
      accepted: 0,
      onAcceptIncomingRequest: 0,
      onDeclineIncomingRequest: 0,
      accessibilityLabel: 0,
      acceptRequestAccessibilityLabel: 0,
      ignoreRequestAccessibilityLabel: 0,
      acceptedRequestLabel: 0,
      acceptedRequestAccessibilityLabel: 0,
    }),
  );
  let obj = user(accepted[6]);
  const sharedValue = obj.useSharedValue(false);
  let obj1 = user(accepted[7]);
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
      obj.name = tmp.WAVE;
      const intl = util.intl;
      obj = { username: UserUtilsDefault.getName(user) };
      obj.label = intl.formatToPlainString(util.t.m0zYbV, obj);
      const items = [obj];
      let items1 = items;
    } else {
      obj.name = tmp.ACCEPT;
      obj.label = acceptRequestAccessibilityLabel;
      items1 = [obj];
      obj = { name: stateFromStores1.DECLINE, label: ignoreRequestAccessibilityLabel };
      items1[1] = obj;
    }
    return items1;
  }, items2);
  const callback = onAcceptIncomingRequest.useCallback((nativeEvent) => {
    const actionName = nativeEvent.nativeEvent.actionName;
    if (stateFromStores1.ACCEPT === actionName) {
      const result = sharedValue.set(true);
      onAcceptIncomingRequest(user.id, applicationId);
      let obj = { userId: user.id, applicationId };
      return AddFriendsScreenUtils.acceptIncomingRequest(obj);
    } else if (tmp.DECLINE === actionName) {
      onDeclineIncomingRequest(user.id, applicationId);
      obj = { userId: user.id, applicationId };
      return AddFriendsScreenUtils.dismissIncomingRequest(obj);
    } else if (tmp.WAVE === actionName) {
      obj = AddFriendsScreenUtils;
      return obj.sendWave(user.id, true, "Incoming Friend Request");
    }
  }, items3);
  const userTag = applicationId(accepted[9]).useUserTag(user);
  const obj3 = applicationId(accepted[9]);
  const items4 = [acceptRequestAccessibilityLabel];
  const stateFromStores1 = user(accepted[7]).useStateFromStores(items4, () =>
    ApplicationStore.getApplication(applicationId),
  );
  const items5 = [stateFromStores1, applicationId, userTag];
  const memo1 = onAcceptIncomingRequest.useMemo(() => {
    if (null != stateFromStores1) {
      const obj = { application: tmp, textVariant: "text-xs/medium", iconSize: 12 };
      let str = jsx(
        ApplicationIconAndNameDefault,
        { application: tmp, textVariant: "text-xs/medium", iconSize: 12 },
        tmp.id,
      );
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
  obj = {
    actioned: sharedValue,
    label: memo1,
    actionStatus: acceptedRequestLabel,
    actionStatusAccessibilityLabel: acceptedRequestAccessibilityLabel,
    animate: !stateFromStores,
  };
  obj.subLabel = userTag(user(accepted[13]).ActionStatusSubLabel, obj);
  obj1 = {
    user,
    pressed: sharedValue,
    applicationId,
    onAcceptIncomingRequest,
    onDeclineIncomingRequest,
    animate: !stateFromStores,
    acceptRequestAccessibilityLabel,
    ignoreRequestAccessibilityLabel,
  };
  obj.trailing = userTag(user(accepted[14]).IncomingRequestRowActions, obj1);
  return userTag(applicationId(accepted[12]), obj);
}
function IncomingGameFriendRequestRow(arg0) {
  ({ user, application } = arg0);
  const merged = Object.assign(arg0, Object.assign({ user: 0, application: 0 }));
  let obj = UserUtilsDefault;
  const userTag = obj.useUserTag(user);
  obj = {
    user,
    applicationId: application.id,
    accessibilityLabel: null,
    acceptedRequestLabel: null,
    acceptedRequestAccessibilityLabel: null,
    acceptRequestAccessibilityLabel: null,
    ignoreRequestAccessibilityLabel: null,
  };
  const intl = application(1114).intl;
  obj.accessibilityLabel = intl.formatToPlainString(application(1114).t.u6lp4x, { name: userTag });
  const intl2 = application(1114).intl;
  obj = {
    applicationNameHook() {
      return jsx(
        ApplicationIconAndNameDefault,
        { application, textVariant: "text-xs/medium", iconSize: 12 },
        application.id,
      );
    },
  };
  obj.acceptedRequestLabel = intl2.format(application(1114).t.gRgJGR, obj);
  const intl3 = application(1114).intl;
  obj.acceptedRequestAccessibilityLabel = intl3.formatToPlainString(application(1114).t.Ke6fRJ, {
    name: userTag,
    applicationName: application.name,
  });
  const intl4 = application(1114).intl;
  obj.acceptRequestAccessibilityLabel = intl4.formatToPlainString(application(1114).t.kMUpdH, {
    name: userTag,
    applicationName: application.name,
  });
  const intl5 = application(1114).intl;
  obj.ignoreRequestAccessibilityLabel = intl5.formatToPlainString(application(1114).t.d8Cw5e, {
    name: userTag,
    applicationName: application.name,
  });
  const merged1 = Object.assign(merged);
  return (
    <IncomingRequestRow
      applicationNameHook={function applicationNameHook() {
        return jsx(
          ApplicationIconAndNameDefault,
          { application, textVariant: "text-xs/medium", iconSize: 12 },
          application.id,
        );
      }}
    />
  );
}
const UserRowModes = fn(10860).UserRowModes;
const RelationshipTypes = fn(1074).RelationshipTypes;
const jsx = fn(21).jsx;
let closure_9 = { ACCEPT: "accept", DECLINE: "decline", WAVE: "wave" };
const size = fn(2);
let result = size.fileFinishedImporting("modules/main_tabs_v2/native/friends/components/IncomingRequestRow.tsx");

export const IncomingFriendRequestRow = function IncomingFriendRequestRow(user) {
  user = user.user;
  const merged = Object.assign(user, Object.assign({ user: 0 }));
  let obj = UserUtilsDefault;
  const userTag = obj.useUserTag(user);
  obj = {
    user,
    accessibilityLabel: null,
    acceptedRequestLabel: null,
    acceptedRequestAccessibilityLabel: null,
    acceptRequestAccessibilityLabel: null,
    ignoreRequestAccessibilityLabel: null,
  };
  const intl = util.intl;
  obj.accessibilityLabel = intl.formatToPlainString(util.t.u6lp4x, { name: userTag });
  const intl2 = util.intl;
  obj.acceptedRequestLabel = intl2.string(util.t["0E614Z"]);
  const intl3 = util.intl;
  obj.acceptedRequestAccessibilityLabel = intl3.formatToPlainString(util.t.cRwkp7, { name: userTag });
  const intl4 = util.intl;
  obj.acceptRequestAccessibilityLabel = intl4.formatToPlainString(util.t.MUfqsS, { name: userTag });
  const intl5 = util.intl;
  obj.ignoreRequestAccessibilityLabel = intl5.formatToPlainString(util.t["0OF9IB"], { name: userTag });
  const merged1 = Object.assign(merged);
  return (
    <IncomingRequestRow
      user={user}
      accessibilityLabel={null}
      acceptedRequestLabel={null}
      acceptedRequestAccessibilityLabel={null}
      acceptRequestAccessibilityLabel={null}
      ignoreRequestAccessibilityLabel={null}
    />
  );
};
export const ConnectedIncomingGameFriendRequestRow = function ConnectedIncomingGameFriendRequestRow(applicationId) {
  applicationId = applicationId.applicationId;
  let tmp = null;
  const merged = Object.assign(applicationId, Object.assign({ user: 0, applicationId: 0 }));
  let obj = applicationId(563);
  const items = [ApplicationStore];
  const stateFromStores = obj.useStateFromStores(items, () => ApplicationStore.getApplication(applicationId));
  if (null != stateFromStores) {
    obj = { user: applicationId.user, application: stateFromStores };
    const merged1 = Object.assign(merged);
    tmp = <IncomingGameFriendRequestRow user={arg0.user} application={stateFromStores} />;
  }
  return tmp;
};
