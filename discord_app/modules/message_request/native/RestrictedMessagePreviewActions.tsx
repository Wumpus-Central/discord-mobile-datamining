// === Module 16477: RestrictedMessagePreviewActions ===

// Module 16477 (RestrictedMessagePreviewActions)
import ThemesDefault from "Themes" /* 712 */;
import closure_3 from "noop" /* 19 */;
import { View } from "get ActivityIndicator" /* 17 */;
import closure_5 from "markAllUserIdListsStale" /* 4130 */;
import ME from "ME" /* 676 */;
import { BLOCK_CONFIRMATION_ACTION_SHEET_KEY as closure_8 } from "IGNORE_CONFIRMATION_ACTION_SHEET_KEY" /* 9056 */;
import jsxProd from "jsxProd" /* 21 */;
import createCacheKey from "createCacheKey" /* 4478 */;

const require = arg1;
({ AnalyticsPages: closure_6, RelationshipTypes: error } = ME);
({ jsx: c9, jsxs: c10 } = jsxProd);
createCacheKey = { container: null, buttonRow: null };
createCacheKey = { gap: ThemesDefault.space.PX_8, marginVertical: ThemesDefault.space.PX_12 };
createCacheKey[0] = createCacheKey;
createCacheKey[1] = { flexDirection: "row", flexWrap: "wrap", gap: ThemesDefault.space.PX_8 };
let closure_11 = createCacheKey.createStyles(createCacheKey);
let obj1 = { flexDirection: "row", flexWrap: "wrap", gap: ThemesDefault.space.PX_8 };
let result = require("set").fileFinishedImporting("modules/message_request/native/RestrictedMessagePreviewActions.tsx");

export default function RestrictedMessagePreviewActions(channel) {
  channel = channel.channel;
  const user = channel.user;
  let message;
  const tmp = callback2();
  let obj = channel(message[8]);
  const dMMessageToReport = obj.useDMMessageToReport(channel, user.id, true === user.bot);
  message = dMMessageToReport.message;
  ({ isReportable, isLoaded } = dMMessageToReport);
  obj1 = channel(message[9]);
  const items = [closure_5];
  const items1 = [user.id];
  const stateFromStores = obj1.useStateFromStores(items, () => closure_1_5.getRelationshipType(user.id), items1);
  const items2 = [user.id];
  const items3 = [user.id];
  const callback = React.useCallback(() => {
    let obj = user(message[10]);
    obj = { userId: user.id, context: obj };
    obj = { location: closure_1_6.DM_CHANNEL };
    obj.addRelationship(obj);
  }, items2);
  const items4 = [user.id];
  const callback1 = React.useCallback(() => {
    let obj = user(message[11]);
    obj = { userId: user.id, location: closure_1_6.DM_CHANNEL };
    const result = obj.maybeConfirmFriendRequestAccept(obj);
  }, items3);
  const items5 = [user];
  callback2 = React.useCallback(() => {
    let obj = user(message[10]);
    obj = { location: closure_1_6.DM_CHANNEL };
    obj.cancelFriendRequest(user.id, obj);
  }, items4);
  const items6 = [user.id, channel.id];
  const callback3 = React.useCallback(() => {
    let obj = channel(message[12]);
    obj = {
      userDisplayName: user(message[13]).getName(user),
      onConfirm() {
        let obj = closure_1_1(closure_1_2[10]);
        obj = { location: closure_1_6.DM_CHANNEL };
        obj.removeFriend(id.id, obj);
      }
    };
    obj.confirmRemoveFriend(obj);
  }, items5);
  const items7 = [user.id];
  const callback4 = React.useCallback(() => {
    let obj = user(message[14]);
    obj = { userId: user.id, channelId: channel.id };
    obj.openLazy(channel(message[16])(message[15], message.paths), closure_1_8, obj);
  }, items6);
  const items8 = [message, channel.id];
  const callback5 = React.useCallback(() => {
    let obj = user(message[10]);
    obj = { location: closure_1_6.DM_CHANNEL };
    obj.unblockUser(user.id, obj);
  }, items7);
  let tmp14 = null;
  const callback6 = React.useCallback(() => {
    if (null != message) {
      const result = channel(message[17]).showReportModalForFirstDM(tmp, () => {
        closure_1_1(closure_1_2[18]).closePrivateChannel(id.id, true);
      });
      const obj = channel(message[17]);
    }
  }, items8);
  if (stateFromStores !== constants.BLOCKED) {
    obj = { size: "sm", variant: "secondary", text: null, onPress: null };
    const intl = tmp2(tmp3[20]).intl;
    obj[2] = intl.string(tmp2(tmp3[20]).t.l4Emac);
    obj[3] = callback4;
    tmp14 = callback(tmp2(tmp3[19]).Button, obj);
  }
  let tmp16 = null;
  if (isReportable) {
    if (null != message) {
      obj = { size: "sm", variant: "destructive", text: null, disabled: null, onPress: null };
      const intl2 = tmp2(tmp3[20]).intl;
      obj[2] = intl2.string(tmp2(tmp3[20]).t.HHZmDn);
      obj[3] = null == message;
      obj[4] = callback6;
      tmp16 = callback(tmp2(tmp3[19]).Button, obj);
    } else {
      tmp16 = null;
    }
  }
  if (constants.NONE === stateFromStores) {
    let tmp18 = null;
    let tmp19 = null;
    let formatResult = null;
    if (!user.bot) {
      obj1 = { size: "sm", variant: "active", text: null, onPress: null };
      const intl8 = tmp2(tmp3[20]).intl;
      obj1[2] = intl8.string(tmp2(tmp3[20]).t["PMsq/b"]);
      obj1[3] = callback;
      tmp19 = callback(tmp2(tmp3[19]).Button, obj1);
      tmp18 = null;
      formatResult = null;
    }
  } else if (tmp13.PENDING_INCOMING === stateFromStores) {
    const intl5 = tmp2(tmp3[20]).intl;
    const obj2 = { username: null };
    let obj7 = user(tmp3[13]);
    obj2[0] = obj7.getName(user);
    formatResult = intl5.format(tmp2(tmp3[20]).t.uIomXw, obj2);
    const obj3 = { size: "sm", variant: "active", text: null, onPress: null };
    const intl6 = tmp2(tmp3[20]).intl;
    obj3[2] = intl6.string(tmp2(tmp3[20]).t["+WbSn5"]);
    obj3[3] = callback1;
    tmp19 = callback(tmp2(tmp3[19]).Button, obj3);
    const obj4 = { size: "sm", variant: "secondary", text: null, onPress: null };
    const intl7 = tmp2(tmp3[20]).intl;
    obj4[2] = intl7.string(tmp2(tmp3[20]).t.rQSndv);
    obj4[3] = callback2;
    tmp18 = callback(tmp2(tmp3[19]).Button, obj4);
  } else if (tmp13.FRIEND === stateFromStores) {
    const obj5 = { size: "sm", variant: "secondary", text: null, onPress: null };
    const intl4 = tmp2(tmp3[20]).intl;
    obj5[2] = intl4.string(tmp2(tmp3[20]).t.cvSt1J);
    obj5[3] = callback3;
    tmp19 = callback(tmp2(tmp3[19]).Button, obj5);
    tmp18 = null;
    formatResult = null;
  } else if (tmp13.PENDING_OUTGOING === stateFromStores) {
    const obj6 = { size: "sm", variant: "active", text: null, disabled: true, onPress: "a" };
    const intl3 = tmp2(tmp3[20]).intl;
    obj6[2] = intl3.string(tmp2(tmp3[20]).t.xMH6vD);
    tmp19 = callback(tmp2(tmp3[19]).Button, obj6);
    tmp18 = null;
    formatResult = null;
  } else {
    tmp18 = null;
    tmp19 = null;
    formatResult = null;
    if (tmp13.BLOCKED === stateFromStores) {
      obj7 = { size: "sm", variant: "secondary", text: null, onPress: null };
      const intl9 = tmp2(tmp3[20]).intl;
      obj7[2] = intl9.string(tmp2(tmp3[20]).t.XyHpKH);
      obj7[3] = callback5;
      tmp19 = callback(tmp2(tmp3[19]).Button, obj7);
      tmp18 = null;
      formatResult = null;
    }
  }
  const obj8 = { style: tmp.container, children: null };
  let tmp28 = null != formatResult;
  if (tmp28) {
    const obj9 = { variant: "text-sm/normal", color: "text-default", children: null };
    obj9[2] = formatResult;
    tmp28 = callback(tmp2(tmp3[21]).Text, obj9);
  }
  const items9 = [tmp28, ];
  const items10 = [tmp19, tmp18, tmp14, tmp16];
  items9[1] = closure_10(View, { style: tmp.buttonRow, children: items10 });
  obj8[1] = items9;
  return closure_10(View, obj8);
};