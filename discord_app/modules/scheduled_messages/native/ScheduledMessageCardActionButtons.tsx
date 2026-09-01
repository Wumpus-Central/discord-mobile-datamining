// discord_app/modules/scheduled_messages/native/ScheduledMessageCardActionButtons.tsx
import set from "../../../../_runtime/00002_set.js";
import jsxProd from "../../../../_runtime/react/00021_jsxProd.js";
import getSystemLocale from "../../../intl/index.native.tsx";
import SendMessageIcon from "../../../design/components/Icon/native/redesign/generated/SendMessageIcon.tsx";
import ClockIcon from "../../../design/components/Icon/native/redesign/generated/ClockIcon.tsx";
import CircleXIcon from "../../../design/components/Icon/native/redesign/generated/CircleXIcon.tsx";
import ContextMenu from "../../../design/components/ContextMenu/native/ContextMenu.native.tsx";
import PencilIcon from "../../../design/components/Icon/native/redesign/generated/PencilIcon.tsx";

const jsx = jsxProd.jsx;
const result = set.fileFinishedImporting("modules/scheduled_messages/native/ScheduledMessageCardActionButtons.tsx");

export default function ScheduledMessageCardActionButtons(arg0) {
  ({ scheduledMessage: require, isPendingRemoval: importDefault } = arg0);
  let obj = { label: null, IconComponent: null, action: null };
  let intl = getSystemLocale.intl;
  obj[0] = intl.string(getSystemLocale.t.JLba51);
  obj[1] = SendMessageIcon.SendMessageIcon;
  obj[2] = function action() {
    return closure_1_0(closure_1_2[3]).sendScheduledMessageNow(closure_0.scheduledMessageId);
  };
  const items = [obj, , , ];
  obj = { label: null, IconComponent: null, action: null };
  const intl2 = getSystemLocale.intl;
  obj[0] = intl2.string(getSystemLocale.t.ZXE1s4);
  obj[1] = PencilIcon.PencilIcon;
  obj[2] = function action() {
    return closure_1_0(closure_1_2[3]).openScheduledMessageEditContentModal(closure_0);
  };
  items[1] = obj;
  obj = { label: null, IconComponent: null, action: null };
  const intl3 = getSystemLocale.intl;
  obj[0] = intl3.string(getSystemLocale.t.SBcdAN);
  obj[1] = ClockIcon.ClockIcon;
  obj[2] = function action() {
    return closure_1_0(closure_1_2[3]).openRescheduleMessageActionSheet(closure_0.scheduledMessageId, closure_0.sendAtTimestamp, closure_0.createArgs.channelId);
  };
  items[2] = obj;
  obj1 = { label: null, IconComponent: null, action: null, variant: "destructive" };
  const intl4 = getSystemLocale.intl;
  obj1[0] = intl4.string(getSystemLocale.t.O3sL8F);
  obj1[1] = CircleXIcon.CircleXIcon;
  obj1[2] = function action() {
    return closure_1_0(closure_1_2[3]).cancelScheduledMessage(closure_0.scheduledMessageId);
  };
  items[3] = obj1;
  return jsx(ContextMenu.ContextMenu, {
    items,
    keyboardShouldPersistTaps: "handled",
    triggerOnTap: true,
    children(ref) {
      const merged = Object.assign(ref, Object.create(null));
      const obj = { ref: ref.ref };
      const merged1 = Object.assign(merged);
      obj.variant = "secondary";
      const intl = closure_1_0(closure_1_2[1]).intl;
      obj.accessibilityLabel = intl.string(closure_1_0(closure_1_2[1]).t.sHmiIC);
      obj.size = "sm";
      obj.disabled = closure_1;
      obj.icon = closure_1_1(closure_1_2[9]);
      return closure_1_3(closure_1_0(closure_1_2[8]).IconButton, obj);
    }
  });
};