// === Module 12551: ScheduledMessageCardActionButtons ===

// Module 12551 (ScheduledMessageCardActionButtons)
import jsxProd from "jsxProd" /* 21 */;
import util from "util" /* 1115 */;
import SendMessageIcon from "SendMessageIcon" /* 4771 */;
import ClockIcon from "ClockIcon" /* 4789 */;
import CircleXIcon from "CircleXIcon" /* 6944 */;
import ContextMenu from "ContextMenu" /* 8260 */;
import IconButton from "IconButton" /* 8265 */;
import _modDef8268 from "module_8268" /* 8268 */;
import PencilIcon from "PencilIcon" /* 10593 */;
import ScheduledMessagesUtils from "ScheduledMessagesUtils" /* 12544 */;
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
  const obj2 = { label: null, IconComponent: null, action: null };
  const intl2 = util.intl;
  obj2.label = intl2.string(util.t.ZXE1s4);
  obj2.IconComponent = PencilIcon.PencilIcon;
  obj2.action = function action() {
    return ScheduledMessagesUtils.openScheduledMessageEditContentModal(closure_1_0);
  };
  items[1] = obj2;
  const obj3 = { label: null, IconComponent: null, action: null };
  const intl3 = util.intl;
  obj3.label = intl3.string(util.t.SBcdAN);
  obj3.IconComponent = ClockIcon.ClockIcon;
  obj3.action = function action() {
    return ScheduledMessagesUtils.openRescheduleMessageActionSheet(closure_1_0.scheduledMessageId, closure_1_0.sendAtTimestamp, closure_1_0.createArgs.channelId);
  };
  items[2] = obj3;
  const obj4 = { label: null, IconComponent: null, action: null, variant: "destructive" };
  const intl4 = util.intl;
  obj4.label = intl4.string(util.t.O3sL8F);
  obj4.IconComponent = CircleXIcon.CircleXIcon;
  obj4.action = function action() {
    return ScheduledMessagesUtils.cancelScheduledMessage(closure_1_0.scheduledMessageId);
  };
  items[3] = obj4;
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
      obj.icon = _modDef8268;
      return jsx(IconButton.IconButton, { ref: ref.ref });
    }
  });
};