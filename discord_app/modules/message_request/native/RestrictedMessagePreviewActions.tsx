// discord_app/modules/message_request/native/RestrictedMessagePreviewActions.tsx
import nativeDefault from "../../../../discord_common/js/packages/tokens/native.tsx";
import asyncRequireImpl from "../../../../_runtime/01896_asyncRequireImpl.js";
import UserUtilsDefault from "../../../utils/UserUtils.tsx";
import ActionSheetActionCreatorsDefault from "../../action_sheet/native/ActionSheetActionCreators.tsx";
import ReportModals from "../../in_app_reports/ReportModals.tsx";
import RelationshipActionCreatorsDefault from "../../../actions/RelationshipActionCreators.tsx";
import PeopleUtilsDefault from "../../people/PeopleUtils.tsx";
import UserProfileAlertUtils from "../../user_profile/native/UserProfileAlertUtils.tsx";
import noop from "../../../../_runtime/metro/00019__.js";
import RelationshipStore from "../../../stores/RelationshipStore.tsx";

require = fn;
const View = fn(17).View;
const Constants = fn(1074);
({ AnalyticsPages: metroRequire, RelationshipTypes: closure_7 } = Constants);
let closure_8 = fn(11382).BLOCK_CONFIRMATION_ACTION_SHEET_KEY;
const jsxProd = fn(21);
({ jsx: closure_9, jsxs: c10 } = jsxProd);
fn(4560);
let createStyles = { container: null, buttonRow: null };
createStyles = { gap: nativeDefault.space.PX_8, marginVertical: nativeDefault.space.PX_12 };
createStyles.container = createStyles;
createStyles.buttonRow = { flexDirection: "row", flexWrap: "wrap", gap: nativeDefault.space.PX_8 };
let closure_11 = createStyles.createStyles(createStyles);
const size = fn(2);
let result = size.fileFinishedImporting("modules/message_request/native/RestrictedMessagePreviewActions.tsx");

export default function RestrictedMessagePreviewActions(channel) {
  channel = channel.channel;
  const user = channel.user;
  let message;
  const tmp = closure_11();
  let obj = channel(message[8]);
  const dMMessageToReport = obj.useDMMessageToReport(channel, user.id, true === user.bot);
  message = dMMessageToReport.message;
  ({ isReportable, isLoaded } = dMMessageToReport);
  let obj1 = channel(message[9]);
  const items = [RelationshipStore];
  const items1 = [user.id];
  const stateFromStores = obj1.useStateFromStores(items, () => RelationshipStore.getRelationshipType(user.id), items1);
  const items2 = [user.id];
  const items3 = [user.id];
  const callback = noop.useCallback(() => {
    let obj = { userId: user.id, context: null };
    obj = { location: constants.DM_CHANNEL };
    obj.context = obj;
    obj.addRelationship(obj);
  }, items2);
  const items4 = [user.id];
  const callback1 = noop.useCallback(() => {
    const obj = { userId: user.id, location: constants.DM_CHANNEL };
    const result = obj.maybeConfirmFriendRequestAccept(obj);
  }, items3);
  const items5 = [user];
  const callback2 = noop.useCallback(() => {
    const obj = { location: constants.DM_CHANNEL };
    obj.cancelFriendRequest(user.id, obj);
  }, items4);
  const items6 = [user.id, channel.id];
  const callback3 = noop.useCallback(() => {
    let obj = {
      userDisplayName: UserUtilsDefault.getName(user),
      onConfirm() {
        user(message[10]);
        const obj = { location: constants.DM_CHANNEL };
        obj.removeFriend(id.id, obj);
      },
    };
    obj.confirmRemoveFriend(obj);
  }, items5);
  const items7 = [user.id];
  const callback4 = noop.useCallback(() => {
    const obj = { userId: user.id, channelId: channel.id };
    obj.openLazy(asyncRequireImpl(11383, dependencyMap.paths), closure_8, obj);
  }, items6);
  const items8 = [message, channel.id];
  const callback5 = noop.useCallback(() => {
    const obj = { location: constants.DM_CHANNEL };
    obj.unblockUser(user.id, obj);
  }, items7);
  let tmp14 = null;
  const callback6 = noop.useCallback(() => {
    if (null != message) {
      const result = ReportModals.showReportModalForFirstDM(tmp, () => {
        user(message[18]).closePrivateChannel(id.id, true);
      });
    }
  }, items8);
  if (stateFromStores !== constants2.BLOCKED) {
    obj = { size: "sm", variant: "secondary", text: null, onPress: null };
    const intl = tmp2(tmp3[20]).intl;
    obj.text = intl.string(tmp2(tmp3[20]).t.l4Emac);
    obj.onPress = callback4;
    tmp14 = closure_9(tmp2(tmp3[19]).Button, obj);
  }
  let tmp16 = null;
  if (isReportable) {
    if (null != message) {
      obj = { size: "sm", variant: "destructive", text: null, disabled: null, onPress: null };
      const intl2 = tmp2(tmp3[20]).intl;
      obj.text = intl2.string(tmp2(tmp3[20]).t.HHZmDn);
      obj.disabled = null == message;
      obj.onPress = callback6;
      tmp16 = closure_9(tmp2(tmp3[19]).Button, obj);
    } else {
      tmp16 = null;
    }
  }
  if (constants2.NONE === stateFromStores) {
    let tmp18 = null;
    let tmp19 = null;
    let formatResult = null;
    if (!user.bot) {
      obj1 = { size: "sm", variant: "active", text: null, onPress: null };
      const intl8 = tmp2(tmp3[20]).intl;
      obj1.text = intl8.string(tmp2(tmp3[20]).t["PMsq/b"]);
      obj1.onPress = callback;
      tmp19 = closure_9(tmp2(tmp3[19]).Button, obj1);
      tmp18 = null;
      formatResult = null;
    }
  } else if (tmp13.PENDING_INCOMING === stateFromStores) {
    const intl5 = tmp2(tmp3[20]).intl;
    const obj2 = { username: null };
    let obj7 = user(tmp3[13]);
    obj2.username = obj7.getName(user);
    formatResult = intl5.format(tmp2(tmp3[20]).t.uIomXw, obj2);
    const obj3 = { size: "sm", variant: "active", text: null, onPress: null };
    const intl6 = tmp2(tmp3[20]).intl;
    obj3.text = intl6.string(tmp2(tmp3[20]).t["+WbSn5"]);
    obj3.onPress = callback1;
    tmp19 = closure_9(tmp2(tmp3[19]).Button, obj3);
    const obj4 = { size: "sm", variant: "secondary", text: null, onPress: null };
    const intl7 = tmp2(tmp3[20]).intl;
    obj4.text = intl7.string(tmp2(tmp3[20]).t.rQSndv);
    obj4.onPress = callback2;
    tmp18 = closure_9(tmp2(tmp3[19]).Button, obj4);
  } else if (tmp13.FRIEND === stateFromStores) {
    const obj5 = { size: "sm", variant: "secondary", text: null, onPress: null };
    const intl4 = tmp2(tmp3[20]).intl;
    obj5.text = intl4.string(tmp2(tmp3[20]).t.cvSt1J);
    obj5.onPress = callback3;
    tmp19 = closure_9(tmp2(tmp3[19]).Button, obj5);
    tmp18 = null;
    formatResult = null;
  } else if (tmp13.PENDING_OUTGOING === stateFromStores) {
    const obj6 = { size: "sm", variant: "active", text: null, disabled: true, onPress: "a" };
    const intl3 = tmp2(tmp3[20]).intl;
    obj6.text = intl3.string(tmp2(tmp3[20]).t.xMH6vD);
    tmp19 = closure_9(tmp2(tmp3[19]).Button, obj6);
    tmp18 = null;
    formatResult = null;
  } else {
    tmp18 = null;
    tmp19 = null;
    formatResult = null;
    if (tmp13.BLOCKED === stateFromStores) {
      obj7 = { size: "sm", variant: "secondary", text: null, onPress: null };
      const intl9 = tmp2(tmp3[20]).intl;
      obj7.text = intl9.string(tmp2(tmp3[20]).t.XyHpKH);
      obj7.onPress = callback5;
      tmp19 = closure_9(tmp2(tmp3[19]).Button, obj7);
      tmp18 = null;
      formatResult = null;
    }
  }
  const obj8 = { style: tmp.container, children: null };
  let tmp28 = null != formatResult;
  if (tmp28) {
    const obj9 = { variant: "text-sm/normal", color: "text-default", children: formatResult };
    tmp28 = closure_9(tmp2(tmp3[21]).Text, obj9);
  }
  const items9 = [tmp28];
  const obj10 = { style: tmp.buttonRow, children: null };
  const items10 = [tmp19, tmp18, tmp14, tmp16];
  obj10.children = items10;
  items9[1] = closure_10(View, obj10);
  obj8.children = items9;
  return closure_10(View, obj8);
}
