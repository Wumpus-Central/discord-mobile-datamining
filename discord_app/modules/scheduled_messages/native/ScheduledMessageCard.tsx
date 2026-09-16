// discord_app/modules/scheduled_messages/native/ScheduledMessageCard.tsx
import nativeDefault from "../../../../discord_common/js/packages/tokens/native.tsx";
import router_utils from "../../routing/router_utils.tsx";
import util from "../../../intl/index.native.tsx";
import ModalActionCreatorsDefault from "../../../actions/ModalActionCreators.tsx";
import ScheduledMessageUtils from "../ScheduledMessageUtils.tsx";
import CalendarPlusIcon from "../../../design/components/Icon/native/redesign/generated/CalendarPlusIcon.tsx";
import ForLaterCardStatusHeader from "../../saved_messages/native/ForLaterCardStatusHeader.tsx";
import ScheduledMessageCardActionButtonsDefault from "ScheduledMessageCardActionButtons.tsx";
import noop from "../../../../_runtime/metro/00019__.js";
import ChannelStore from "../../../stores/ChannelStore.tsx";

require = fn;
function ScheduledMessageCardStatusHeader(isPendingRemoval) {
  const scheduledMessage = isPendingRemoval.scheduledMessage;
  const messageForState = ScheduledMessageUtils.getMessageForState(scheduledMessage.state);
  ({ isError, stateMessage } = messageForState);
  const obj2 = {
    IconComponent: CalendarPlusIcon.CalendarPlusIcon,
    label: null,
    isCritical: null,
    lineClamp: 2,
    actions: null,
  };
  if (!isError) {
    const intl = util.intl;
    const obj3 = { timestamp: null };
    const _Date = Date;
    const date = new Date(scheduledMessage.sendAtTimestamp);
    obj3.timestamp = date.valueOf();
    stateMessage = intl.formatToPlainString(util.t.ZN3tIx, obj3);
  }
  obj2.label = stateMessage;
  obj2.isCritical = isError;
  obj2.actions = React5(ScheduledMessageCardActionButtonsDefault, {
    scheduledMessage,
    isPendingRemoval: isPendingRemoval.isPendingRemoval,
  });
  return React5(ForLaterCardStatusHeader.ForLaterCardStatusHeader, obj2);
}
const View = fn(17).View;
const Routes = fn(1074).Routes;
const jsxProd = fn(21);
({ jsx: closure_7, jsxs: closure_8 } = jsxProd);
const createStyles = fn(4638);
let obj = {
  card: { gap: 16, marginBottom: 16 },
  cardDivider: {
    marginHorizontal: -16,
    height: 1,
    alignSelf: "stretch",
    backgroundColor: nativeDefault.colors.BACKGROUND_MOD_MUTED,
  },
  attachmentCount: { flexDirection: "row", alignItems: "center", gap: 4 },
  pendingRemoval: { alignItems: "center", paddingVertical: 16 },
};
let closure_9 = createStyles.createStyles(obj);
let obj3 = {
  marginHorizontal: -16,
  height: 1,
  alignSelf: "stretch",
  backgroundColor: nativeDefault.colors.BACKGROUND_MOD_MUTED,
};
const size = fn(2);
const result = size.fileFinishedImporting("modules/scheduled_messages/native/ScheduledMessageCard.tsx");

export default noop.memo(function ScheduledMessageCard(scheduledMessage) {
  scheduledMessage = scheduledMessage.scheduledMessage;
  const isPendingRemoval = scheduledMessage.isPendingRemoval;
  const tmp = closure_9();
  const items = [ChannelStore];
  const stateFromStores = scheduledMessage(504).useStateFromStores(items, () =>
    ChannelStore.getChannel(scheduledMessage.createArgs.channelId),
  );
  [][0] = stateFromStores;
  if (null == stateFromStores) {
    return null;
  } else {
    let obj2 = { variant: "primary", border: "subtle", shadow: "none", style: tmp.card, onPress: tmp5, children: null };
    const obj3 = { scheduledMessage, isPendingRemoval };
    const items1 = [closure_7(ScheduledMessageCardStatusHeader, obj3), , ,];
    const obj4 = { channel: stateFromStores, actions: null };
    items1[1] = closure_7(tmp2(12357).ForLaterCardHeader, obj4);
    const obj5 = { style: tmp.cardDivider };
    items1[2] = closure_7(View, obj5);
    if (isPendingRemoval) {
      const obj6 = { style: tmp.pendingRemoval, children: closure_7(tmp2(5663).ActivityIndicator, { size: "small" }) };
      let tmp10Result = closure_7(View, obj6);
    } else {
      const obj7 = { message: scheduledMessage.record, lineClamp: 10, maxHeight: 400, footer: null };
      let tmp9Result;
      if (length > 0) {
        const obj8 = { style: tmp.attachmentCount, children: null };
        const obj9 = { size: "xxs", color: stateFromStores(576).colors.TEXT_MUTED };
        const items2 = [closure_7(tmp2(10250).AttachmentIcon, obj9)];
        const obj10 = { variant: "text-sm/normal", color: "text-muted", children: null };
        const intl = tmp2(1115).intl;
        const obj11 = { count: length };
        obj10.children = intl.format(tmp2(1115).t.ZJ1tPW, obj11);
        items2[1] = closure_7(tmp2(4634).Text, obj10);
        obj8.children = items2;
        tmp9Result = closure_8(View, obj8);
      }
      obj7.footer = tmp9Result;
      tmp10Result = closure_7(tmp2(12358).ForLaterMessageRow, obj7);
    }
    items1[3] = tmp10Result;
    obj2.children = items1;
    return closure_8(tmp2(5693).Card, obj2);
  }
  const obj = scheduledMessage(504);
});
