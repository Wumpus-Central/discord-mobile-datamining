// === Module 12222: ScheduledMessageCardActionButtons ===

// Module 12222 (ScheduledMessageCardActionButtons)
import jsxProd from "jsxProd" /* 21 */;
import util from "util" /* 1114 */;
import SendMessageIcon from "SendMessageIcon" /* 4505 */;
import ClockIcon from "ClockIcon" /* 4523 */;
import CircleXIcon from "CircleXIcon" /* 6616 */;
import IconButton from "IconButton" /* 8097 */;
import ContextMenu from "ContextMenu" /* 8671 */;
import _modDef8678 from "module_8678" /* 8678 */;
import PencilIcon from "PencilIcon" /* 10255 */;
import ScheduledMessagesUtils from "ScheduledMessagesUtils" /* 12215 */;
import size from "module_2" /* 2 */;

const jsx = jsxProd.jsx;
const result = size.fileFinishedImporting("modules/scheduled_messages/native/ScheduledMessageCardActionButtons.tsx");

export default function ScheduledMessageCardActionButtons(arg0) {
  ({ scheduledMessage: require, isPendingRemoval: importDefault } = arg0);
  let obj = { label: null, IconComponent: null, action: null };
  let intl = util.intl;
  obj.label = intl.string(util.t.JLba51);
  obj.IconComponent = SendMessageIcon.SendMessageIcon;
  obj.action = function action() {
    return ScheduledMessagesUtils.sendScheduledMessageNow(closure_1_0.scheduledMessageId);
  };
  const items = [obj, , , ];
  obj = { label: null, IconComponent: null, action: null };
  const intl2 = util.intl;
  obj.label = intl2.string(util.t.ZXE1s4);
  obj.IconComponent = PencilIcon.PencilIcon;
  obj.action = function action() {
    return ScheduledMessagesUtils.openScheduledMessageEditContentModal(closure_1_0);
  };
  items[1] = obj;
  obj = { label: null, IconComponent: null, action: null };
  const intl3 = util.intl;
  obj.label = intl3.string(util.t.SBcdAN);
  obj.IconComponent = ClockIcon.ClockIcon;
  obj.action = function action() {
    return ScheduledMessagesUtils.openRescheduleMessageActionSheet(closure_1_0.scheduledMessageId, closure_1_0.sendAtTimestamp, closure_1_0.createArgs.channelId);
  };
  items[2] = obj;
  const obj1 = { label: null, IconComponent: null, action: null, variant: "destructive" };
  const intl4 = util.intl;
  obj1.label = intl4.string(util.t.O3sL8F);
  obj1.IconComponent = CircleXIcon.CircleXIcon;
  obj1.action = function action() {
    return ScheduledMessagesUtils.cancelScheduledMessage(closure_1_0.scheduledMessageId);
  };
  items[3] = obj1;
  return jsx(ContextMenu.ContextMenu, {
    items,
    keyboardShouldPersistTaps: "handled",
    triggerOnTap: true,
    children(ref) {
      const merged = Object.assign(ref, Object.assign({ ref: 0 }));
      const obj = { ref: ref.ref };
      const merged1 = Object.assign(merged);
      obj.variant = "secondary";
      const intl = util.intl;
      obj.accessibilityLabel = intl.string(util.t.sHmiIC);
      obj.size = "sm";
      obj.disabled = disabled;
      obj.icon = _modDef8678;
      return jsx(IconButton.IconButton, { ref: ref.ref });
    }
  });
};