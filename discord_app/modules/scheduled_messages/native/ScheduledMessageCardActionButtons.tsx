// discord_app/modules/scheduled_messages/native/ScheduledMessageCardActionButtons.tsx
import jsxProd from "../../../../_runtime/react/00021_jsxProd.js";
import util from "../../../intl/index.native.tsx";
import SendMessageIcon from "../../../design/components/Icon/native/redesign/generated/SendMessageIcon.tsx";
import ClockIcon from "../../../design/components/Icon/native/redesign/generated/ClockIcon.tsx";
import CircleXIcon from "../../../design/components/Icon/native/redesign/generated/CircleXIcon.tsx";
import IconButton from "../../../design/components/Button/native/IconButton.native.tsx";
import ContextMenu from "../../../design/components/ContextMenu/native/ContextMenu.native.tsx";
import _modDef8673 from "../../../../_runtime/metro/08673__.js";
import PencilIcon from "../../../design/components/Icon/native/redesign/generated/PencilIcon.tsx";
import ScheduledMessagesUtils from "ScheduledMessagesUtils.native.tsx";
import size from "../../../../_runtime/metro/00002__.js";

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
  const items = [obj, , ,];
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
    return ScheduledMessagesUtils.openRescheduleMessageActionSheet(
      closure_1_0.scheduledMessageId,
      closure_1_0.sendAtTimestamp,
      closure_1_0.createArgs.channelId,
    );
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
      obj.icon = _modDef8673;
      return jsx(IconButton.IconButton, { ref: ref.ref });
    },
  });
}
