// === Module 11576: ScheduledMessageCardStatusHeader ===

// Module 11576 (ScheduledMessageCardStatusHeader)
import ThemesDefault from "Themes" /* 712 */;
import ScheduledMessagesConfig from "ScheduledMessagesConfig" /* 11572 */;
import ForLaterCardStatusHeader from "ForLaterCardStatusHeader" /* 11579 */;
import HourglassIcon from "HourglassIcon" /* 11580 */;
import ScheduledMessageCardActionButtonsDefault from "ScheduledMessageCardActionButtons" /* 11582 */;
import importAllResult from "noop" /* 19 */;
import { View } from "get ActivityIndicator" /* 17 */;
import closure_5 from "ensureGuildLoaded" /* 1391 */;
import { Routes } from "ME" /* 676 */;
import jsxProd from "jsxProd" /* 21 */;
import createCacheKey from "createCacheKey" /* 4380 */;

require = arg1;
function ScheduledMessageCardStatusHeader(scheduledMessage) {
  scheduledMessage = scheduledMessage.scheduledMessage;
  let obj = ScheduledMessagesConfig;
  const messageForState = obj.getMessageForState(scheduledMessage.state);
  ({ isError, stateMessage } = messageForState);
  obj = { IconComponent: HourglassIcon.HourglassIcon, label: null, isCritical: null, lineClamp: 2, actions: null };
  if (!isError) {
    const intl = tmp(1236).intl;
    obj = { timestamp: null };
    const _Date = Date;
    const date = new Date(scheduledMessage.sendAtTimestamp);
    obj[0] = date.valueOf();
    stateMessage = intl.formatToPlainString(tmp(1236).t.ZN3tIx, obj);
  }
  obj[1] = stateMessage;
  obj[2] = isError;
  obj[4] = closure_7(ScheduledMessageCardActionButtonsDefault, { scheduledMessage });
  return closure_7(ForLaterCardStatusHeader.ForLaterCardStatusHeader, obj);
}
let c3 = importAllResult;
({ jsx: error, jsxs: closure_8 } = jsxProd);
let obj = { card: { gap: 16, marginBottom: 16 }, cardDivider: null, attachmentCount: null, pendingDeletion: null };
obj = { marginHorizontal: -16, height: 1, alignSelf: "stretch", backgroundColor: ThemesDefault.colors.BACKGROUND_MOD_MUTED };
obj[1] = obj;
obj[2] = { flexDirection: "row", alignItems: "center", gap: 4 };
obj[3] = { alignItems: "center", paddingVertical: 16 };
let closure_9 = createCacheKey.createStyles(obj);
const memoResult = importAllResult.memo(function ScheduledMessageCard(scheduledMessage) {
  scheduledMessage = scheduledMessage.scheduledMessage;
  let stateFromStores;
  const tmp = callback2();
  let obj = scheduledMessage(589);
  const items = [closure_5];
  stateFromStores = obj.useStateFromStores(items, () => closure_1_5.getChannel(scheduledMessage.scheduledMessage.channelId));
  [][0] = stateFromStores;
  if (null == stateFromStores) {
    return null;
  } else {
    obj = { variant: "primary", border: "subtle", shadow: "none", style: null, onPress: null, children: null };
    obj[3] = tmp.card;
    obj[4] = tmp5;
    obj = { scheduledMessage: null };
    obj[0] = scheduledMessage;
    const items1 = [callback(ScheduledMessageCardStatusHeader, obj), , , ];
    obj1 = { channel: null, actions: null };
    obj1[0] = stateFromStores;
    items1[1] = callback(tmp2(11577).ForLaterCardHeader, obj1);
    let obj2 = { style: null };
    obj2[0] = tmp.cardDivider;
    items1[2] = callback(View, obj2);
    if (scheduledMessage.isPendingDeletion) {
      const obj3 = { style: null, children: null };
      obj3[0] = tmp.pendingDeletion;
      obj3[1] = tmp10(tmp2(5929).ActivityIndicator, { size: "small" });
      let tmp10Result = tmp10(tmp12, obj3);
    } else {
      const obj4 = { message: null, lineClamp: 10, maxHeight: 400, footer: null };
      obj4[0] = scheduledMessage.record;
      let tmp9Result;
      if (length > 0) {
        const obj5 = { style: null, children: null };
        obj5[0] = tmp.attachmentCount;
        const obj6 = { size: "xxs", color: null };
        obj6[1] = stateFromStores(712).colors.TEXT_MUTED;
        const items2 = [tmp10(tmp2(9946).AttachmentIcon, obj6), ];
        const obj7 = { variant: "text-sm/normal", color: "text-muted", children: null };
        const intl = tmp2(1236).intl;
        const obj8 = { count: null };
        obj8[0] = length;
        obj7[2] = intl.format(tmp2(1236).t.ZJ1tPW, obj8);
        items2[1] = tmp10(tmp2(4376).Text, obj7);
        obj5[1] = items2;
        tmp9Result = tmp9(tmp12, obj5);
      }
      obj4[3] = tmp9Result;
      tmp10Result = tmp10(tmp2(11578).ForLaterMessageRow, obj4);
    }
    items1[3] = tmp10Result;
    obj[5] = items1;
    return closure_8(tmp2(5482).Card, obj);
  }
});
const result = require("set").fileFinishedImporting("modules/scheduled_messages/native/ScheduledMessageCard.tsx");

export default memoResult;