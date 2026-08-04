// discord_app/modules/saved_messages/native/ForLaterCardActionButtons.tsx
import noop from "noop";
import { View } from "get ActivityIndicator";
import { jsx } from "jsxProd";
import createCacheKey from "createCacheKey";

const require = arg1;
let closure_6 = createCacheKey.createStyles({ actionGroup: { flexDirection: "row", gap: 8 } });
const result = require("jsxProd").fileFinishedImporting("modules/saved_messages/native/ForLaterCardActionButtons.tsx");

export default function ForLaterCardActionButtons(savedMessage) {
  savedMessage = savedMessage.savedMessage;
  const jumpToMessage = savedMessage.jumpToMessage;
  const items = [savedMessage];
  let obj = { label: null, IconComponent: null, action: null };
  const callback = React.useCallback(() => {
    let obj = jumpToMessage(outer1_2[4]);
    obj = {
      createReminder(dueAt) {
        let obj = outer1_0(outer1_2[7]);
        obj = {};
        const merged = Object.assign(closure_0.saveData);
        obj.dueAt = dueAt;
        return obj.addOrUpdateSavedMessage(obj);
      },
      removeReminder() {
        let obj = outer1_0(outer1_2[7]);
        obj = { channelId: closure_0.saveData.channelId, messageId: closure_0.saveData.messageId, displayToast: true, isReminder: true };
        return obj.removeSavedMessage(obj);
      },
      channelId: savedMessage.saveData.channelId,
      messageId: savedMessage.saveData.messageId
    };
    return obj.openLazy(savedMessage(outer1_2[6])(outer1_2[5], outer1_2.paths), "MessageReminderDurationActionSheet", obj);
  }, items);
  let intl = savedMessage(1236).intl;
  obj[0] = intl.string(savedMessage(1236).t["+TSRGD"]);
  obj[1] = savedMessage(9961).ChatArrowRightIcon;
  obj[2] = function action() {
    return jumpToMessage();
  };
  const items1 = [obj, ];
  const intl2 = savedMessage(1236).intl;
  if (null != savedMessage.saveData.dueAt) {
    let SvXS1Z = tmp3(1236).t["a6gcZ/"];
  } else {
    SvXS1Z = tmp3(1236).t.SvXS1Z;
  }
  obj = {
    label: intl2.string(SvXS1Z),
    IconComponent: tmp3(5179).XSmallIcon,
    action() {
      return savedMessage(outer1_2[7]).removeSavedMessage(savedMessage.saveData);
    },
    variant: "destructive"
  };
  items1[1] = obj;
  if (null != savedMessage.saveData.dueAt) {
    obj = { label: null, IconComponent: null, action: null };
    const intl3 = tmp3(1236).intl;
    obj[0] = intl3.string(tmp3(1236).t.vrbqs1);
    obj[1] = tmp3(9111).PencilIcon;
    obj[2] = callback;
    items1.unshift(obj);
  }
  const tmp = callback();
  return <View style={callback().actionGroup}>{jsx(savedMessage(9310).ContextMenu, obj2)}</View>;
};