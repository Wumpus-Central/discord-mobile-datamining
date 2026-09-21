// === Module 17366: RestrictedMessagePreviewActions ===

// Module 17366 (RestrictedMessagePreviewActions)
import nativeDefault from "native" /* 576 */;
import asyncRequireImpl from "asyncRequireImpl" /* 1980 */;
import UserUtilsDefault from "UserUtils" /* 4600 */;
import ActionSheetActionCreatorsDefault from "ActionSheetActionCreators" /* 4723 */;
import ReportModals from "ReportModals" /* 8907 */;
import RelationshipActionCreatorsDefault from "RelationshipActionCreators" /* 10003 */;
import PeopleUtilsDefault from "PeopleUtils" /* 11132 */;
import UserProfileAlertUtils from "UserProfileAlertUtils" /* 12873 */;
import noop from "module_19" /* 19 */;
import RelationshipStore from "RelationshipStore" /* 4405 */;

require = fn;
const View = fn(17).View;
const Constants = fn(1074);
({ AnalyticsPages: metroRequire, RelationshipTypes: closure_7 } = Constants);
let closure_8 = fn(11645).BLOCK_CONFIRMATION_ACTION_SHEET_KEY;
const jsxProd = fn(21);
({ jsx: closure_9, jsxs: c10 } = jsxProd);
const createStyles = fn(4756);
let obj2 = { container: { gap: nativeDefault.space.PX_8, marginVertical: nativeDefault.space.PX_12 }, buttonRow: null };
let obj3 = { gap: nativeDefault.space.PX_8, marginVertical: nativeDefault.space.PX_12 };
obj2.buttonRow = { flexDirection: "row", flexWrap: "wrap", gap: nativeDefault.space.PX_8 };
let closure_11 = createStyles.createStyles(obj2);
const size = fn(2);
let result = size.fileFinishedImporting("modules/message_request/native/RestrictedMessagePreviewActions.tsx");

export default function RestrictedMessagePreviewActions(channel) {
  channel = channel.channel;
  const user = channel.user;
  let message;
  const tmp = closure_11();
  const dMMessageToReport = channel(message[8]).useDMMessageToReport(channel, user.id, true === user.bot);
  message = dMMessageToReport.message;
  ({ isReportable, isLoaded } = dMMessageToReport);
  let obj = channel(message[8]);
  const items = [RelationshipStore];
  const items1 = [user.id];
  const stateFromStores = channel(message[9]).useStateFromStores(items, () => RelationshipStore.getRelationshipType(user.id), items1);
  const items2 = [user.id];
  const items3 = [user.id];
  const callback = noop.useCallback(() => {
    const obj2 = { userId: user.id, context: { location: constants.DM_CHANNEL } };
    RelationshipActionCreatorsDefault.addRelationship(obj2);
  }, items2);
  const items4 = [user.id];
  const callback1 = noop.useCallback(() => {
    const result = PeopleUtilsDefault.maybeConfirmFriendRequestAccept({ userId: user.id, location: constants.DM_CHANNEL });
  }, items3);
  const items5 = [user];
  const callback2 = noop.useCallback(() => {
    RelationshipActionCreatorsDefault.cancelFriendRequest(user.id, { location: constants.DM_CHANNEL });
  }, items4);
  const items6 = [user.id, channel.id];
  const callback3 = noop.useCallback(() => {
    const obj2 = { userDisplayName: null, onConfirm: null };
    const obj = UserProfileAlertUtils;
    obj2.userDisplayName = UserUtilsDefault.getName(user);
    obj2.onConfirm = function onConfirm() {
      user(message[10]).removeFriend(id.id, { location: constants.DM_CHANNEL });
    };
    obj.confirmRemoveFriend(obj2);
  }, items5);
  const items7 = [user.id];
  const callback4 = noop.useCallback(() => {
    ActionSheetActionCreatorsDefault.openLazy(asyncRequireImpl(11646, dependencyMap.paths), closure_8, { userId: user.id, channelId: channel.id });
  }, items6);
  const items8 = [message, channel.id];
  const callback5 = noop.useCallback(() => {
    RelationshipActionCreatorsDefault.unblockUser(user.id, { location: constants.DM_CHANNEL });
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
    const obj3 = { size: "sm", variant: "secondary", text: null, onPress: null };
    const intl = tmp2(tmp3[20]).intl;
    obj3.text = intl.string(tmp2(tmp3[20]).t.l4Emac);
    obj3.onPress = callback4;
    tmp14 = closure_9(tmp2(tmp3[19]).Button, obj3);
  }
  let tmp16 = null;
  if (isReportable) {
    if (null != message) {
      const obj4 = { size: "sm", variant: "destructive", text: null, disabled: null, onPress: null };
      const intl2 = tmp2(tmp3[20]).intl;
      obj4.text = intl2.string(tmp2(tmp3[20]).t.HHZmDn);
      obj4.disabled = null == message;
      obj4.onPress = callback6;
      tmp16 = closure_9(tmp2(tmp3[19]).Button, obj4);
    } else {
      tmp16 = null;
    }
  }
  if (constants2.NONE === stateFromStores) {
    let tmp18 = null;
    let tmp19 = null;
    let formatResult = null;
    if (!user.bot) {
      const obj5 = { size: "sm", variant: "active", text: null, onPress: null };
      const intl8 = tmp2(tmp3[20]).intl;
      obj5.text = intl8.string(tmp2(tmp3[20]).t["PMsq/b"]);
      obj5.onPress = callback;
      tmp19 = closure_9(tmp2(tmp3[19]).Button, obj5);
      tmp18 = null;
      formatResult = null;
    }
  } else if (constants2.PENDING_INCOMING === stateFromStores) {
    const intl5 = tmp2(tmp3[20]).intl;
    const obj6 = { username: user(tmp3[13]).getName(user) };
    formatResult = intl5.format(tmp2(tmp3[20]).t.uIomXw, obj6);
    const obj7 = { size: "sm", variant: "active", text: null, onPress: null };
    const intl6 = tmp2(tmp3[20]).intl;
    obj7.text = intl6.string(tmp2(tmp3[20]).t["+WbSn5"]);
    obj7.onPress = callback1;
    tmp19 = closure_9(tmp2(tmp3[19]).Button, obj7);
    const obj9 = { size: "sm", variant: "secondary", text: null, onPress: null };
    const intl7 = tmp2(tmp3[20]).intl;
    obj9.text = intl7.string(tmp2(tmp3[20]).t.rQSndv);
    obj9.onPress = callback2;
    tmp18 = closure_9(tmp2(tmp3[19]).Button, obj9);
    const obj8 = user(tmp3[13]);
  } else if (constants2.FRIEND === stateFromStores) {
    const obj10 = { size: "sm", variant: "secondary", text: null, onPress: null };
    const intl4 = tmp2(tmp3[20]).intl;
    obj10.text = intl4.string(tmp2(tmp3[20]).t.cvSt1J);
    obj10.onPress = callback3;
    tmp19 = closure_9(tmp2(tmp3[19]).Button, obj10);
    tmp18 = null;
    formatResult = null;
  } else if (constants2.PENDING_OUTGOING === stateFromStores) {
    const obj11 = { size: "sm", variant: "active", text: null, disabled: true, onPress: "Boolean" };
    const intl3 = tmp2(tmp3[20]).intl;
    obj11.text = intl3.string(tmp2(tmp3[20]).t.xMH6vD);
    tmp19 = closure_9(tmp2(tmp3[19]).Button, obj11);
    tmp18 = null;
    formatResult = null;
  } else {
    tmp18 = null;
    tmp19 = null;
    formatResult = null;
    if (constants2.BLOCKED === stateFromStores) {
      const obj12 = { size: "sm", variant: "secondary", text: null, onPress: null };
      const intl9 = tmp2(tmp3[20]).intl;
      obj12.text = intl9.string(tmp2(tmp3[20]).t.XyHpKH);
      obj12.onPress = callback5;
      tmp19 = closure_9(tmp2(tmp3[19]).Button, obj12);
      tmp18 = null;
      formatResult = null;
    }
  }
  const obj13 = { style: tmp.container, children: null };
  let tmp28 = null != formatResult;
  if (tmp28) {
    const obj14 = { variant: "text-sm/normal", color: "text-default", children: formatResult };
    tmp28 = closure_9(tmp2(tmp3[21]).Text, obj14);
  }
  const items9 = [tmp28, ];
  const obj15 = { style: tmp.buttonRow, children: null };
  const items10 = [tmp19, tmp18, tmp14, tmp16];
  obj15.children = items10;
  items9[1] = closure_10(View, obj15);
  obj13.children = items9;
  return closure_10(View, obj13);
};