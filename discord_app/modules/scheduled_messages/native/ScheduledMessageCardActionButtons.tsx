// === Module 11718: ScheduledMessageCardActionButtons ===

// Module 11718 (ScheduledMessageCardActionButtons)
import set from "set" /* 2 */;
import jsxProd from "jsxProd" /* 21 */;

const jsx = jsxProd.jsx;
const result = set.fileFinishedImporting("modules/scheduled_messages/native/ScheduledMessageCardActionButtons.tsx");

export default function ScheduledMessageCardActionButtons(scheduledMessage) {
  scheduledMessage = scheduledMessage.scheduledMessage;
  let obj = { label: null, IconComponent: null, action: null };
  let intl = scheduledMessage(1236).intl;
  obj[0] = intl.string(scheduledMessage(1236).t.ZXE1s4);
  obj[1] = scheduledMessage(10246).PencilIcon;
  obj[2] = function action() {
    return scheduledMessage(closure_1_2[3]).openScheduledMessageEditContentModal(scheduledMessage);
  };
  const items = [obj, , ];
  obj = { label: null, IconComponent: null, action: null };
  const intl2 = scheduledMessage(1236).intl;
  obj[0] = intl2.string(scheduledMessage(1236).t.SBcdAN);
  obj[1] = scheduledMessage(4408).ClockIcon;
  obj[2] = function action() {
    return scheduledMessage(closure_1_2[3]).openRescheduleMessageActionSheet(scheduledMessage.scheduledMessageId, scheduledMessage.sendAtTimestamp);
  };
  items[1] = obj;
  obj = { label: null, IconComponent: null, action: null, variant: "destructive" };
  const intl3 = scheduledMessage(1236).intl;
  obj[0] = intl3.string(scheduledMessage(1236).t.O3sL8F);
  obj[1] = scheduledMessage(6177).CircleXIcon;
  obj[2] = function action() {
    return scheduledMessage(closure_1_2[3]).cancelScheduledMessage(scheduledMessage.scheduledMessageId);
  };
  items[2] = obj;
  return jsx(scheduledMessage(8717).ContextMenu, {
    items,
    keyboardShouldPersistTaps: "handled",
    triggerOnTap: true,
    children(ref) {
      const merged = Object.assign(ref, Object.create(null));
      const obj = { ref: ref.ref };
      const merged1 = Object.assign(merged);
      obj.variant = "secondary";
      const intl = scheduledMessage(1236).intl;
      obj.accessibilityLabel = intl.string(scheduledMessage(1236).t.sHmiIC);
      obj.size = "sm";
      obj.icon = callback(8724);
      return callback2(scheduledMessage(7938).IconButton, obj);
    }
  });
};