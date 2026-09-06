// === Module 12214: ScheduledMessageCard ===

// Module 12214 (ScheduledMessageCard)
import nativeDefault from "native" /* 576 */;
import router_utils from "router_utils" /* 1100 */;
import ModalActionCreatorsDefault from "ModalActionCreators" /* 4763 */;
import ScheduledMessageUtils from "ScheduledMessageUtils" /* 7845 */;
import CalendarPlusIcon from "CalendarPlusIcon" /* 12209 */;
import ForLaterCardStatusHeader from "ForLaterCardStatusHeader" /* 12217 */;
import ScheduledMessageCardActionButtonsDefault from "ScheduledMessageCardActionButtons" /* 12218 */;
import noop from "module_19" /* 19 */;
import ChannelStore from "ChannelStore" /* 1957 */;

require = fn;
function ScheduledMessageCardStatusHeader(isPendingRemoval) {
  const scheduledMessage = isPendingRemoval.scheduledMessage;
  let obj = ScheduledMessageUtils;
  const messageForState = obj.getMessageForState(scheduledMessage.state);
  ({ isError, stateMessage } = messageForState);
  obj = { IconComponent: CalendarPlusIcon.CalendarPlusIcon, label: null, isCritical: null, lineClamp: 2, actions: null };
  if (!isError) {
    const intl = tmp(1114).intl;
    obj = { timestamp: null };
    const _Date = Date;
    const date = new Date(scheduledMessage.sendAtTimestamp);
    obj.timestamp = date.valueOf();
    stateMessage = intl.formatToPlainString(tmp(1114).t.ZN3tIx, obj);
  }
  obj.label = stateMessage;
  obj.isCritical = isError;
  obj.actions = React5(ScheduledMessageCardActionButtonsDefault, { scheduledMessage, isPendingRemoval: isPendingRemoval.isPendingRemoval });
  return React5(ForLaterCardStatusHeader.ForLaterCardStatusHeader, obj);
}
const View = fn(17).View;
const Routes = fn(1074).Routes;
const jsxProd = fn(21);
({ jsx: closure_7, jsxs: closure_8 } = jsxProd);
const createStyles = fn(4560);
let obj = { card: { gap: 16, marginBottom: 16 }, cardDivider: null, attachmentCount: null, pendingRemoval: null };
obj = { marginHorizontal: -16, height: 1, alignSelf: "stretch", backgroundColor: nativeDefault.colors.BACKGROUND_MOD_MUTED };
obj.cardDivider = obj;
obj.attachmentCount = { flexDirection: "row", alignItems: "center", gap: 4 };
obj.pendingRemoval = { alignItems: "center", paddingVertical: 16 };
let closure_9 = createStyles.createStyles(obj);
const size = fn(2);
const result = size.fileFinishedImporting("modules/scheduled_messages/native/ScheduledMessageCard.tsx");

export default noop.memo(function ScheduledMessageCard(scheduledMessage) {
  scheduledMessage = scheduledMessage.scheduledMessage;
  const isPendingRemoval = scheduledMessage.isPendingRemoval;
  const tmp = closure_9();
  let obj = scheduledMessage(504);
  const items = [ChannelStore];
  const stateFromStores = obj.useStateFromStores(items, () => ChannelStore.getChannel(scheduledMessage.createArgs.channelId));
  [][0] = stateFromStores;
  if (null == stateFromStores) {
    return null;
  } else {
    obj = { variant: "primary", border: "subtle", shadow: "none", style: tmp.card, onPress: tmp5, children: null };
    obj = { scheduledMessage, isPendingRemoval };
    const items1 = [closure_7(ScheduledMessageCardStatusHeader, obj), , , ];
    const obj1 = { channel: stateFromStores, actions: null };
    items1[1] = closure_7(tmp2(12215).ForLaterCardHeader, obj1);
    let obj2 = { style: tmp.cardDivider };
    items1[2] = closure_7(View, obj2);
    if (isPendingRemoval) {
      const obj3 = { style: tmp.pendingRemoval, children: tmp10(tmp2(5577).ActivityIndicator, { size: "small" }) };
      let tmp10Result = tmp10(tmp12, obj3);
    } else {
      const obj4 = { message: scheduledMessage.record, lineClamp: 10, maxHeight: 400, footer: null };
      let tmp9Result;
      if (length > 0) {
        const obj5 = { style: tmp.attachmentCount, children: null };
        const obj6 = { size: "xxs", color: stateFromStores(576).colors.TEXT_MUTED };
        const items2 = [tmp10(tmp2(10112).AttachmentIcon, obj6), ];
        const obj7 = { variant: "text-sm/normal", color: "text-muted", children: null };
        const intl = tmp2(1114).intl;
        const obj8 = { count: length };
        obj7.children = intl.format(tmp2(1114).t.ZJ1tPW, obj8);
        items2[1] = tmp10(tmp2(4556).Text, obj7);
        obj5.children = items2;
        tmp9Result = tmp9(tmp12, obj5);
      }
      obj4.footer = tmp9Result;
      tmp10Result = tmp10(tmp2(12216).ForLaterMessageRow, obj4);
    }
    items1[3] = tmp10Result;
    obj.children = items1;
    return closure_8(tmp2(5607).Card, obj);
  }
});