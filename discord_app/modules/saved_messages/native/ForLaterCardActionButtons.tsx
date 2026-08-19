// === Module 12725: ForLaterCardActionButtons ===

// Module 12725 (ForLaterCardActionButtons)
import noop from "noop" /* 19 */;
import { View } from "get ActivityIndicator" /* 17 */;
import { jsx } from "jsxProd" /* 21 */;
import createCacheKey from "createCacheKey" /* 4661 */;

const require = fn;
let closure_6 = createCacheKey.createStyles({ actionGroup: { flexDirection: "row", gap: 8 } });
const result = require("obj132").fileFinishedImporting("modules/saved_messages/native/ForLaterCardActionButtons.tsx");

export default function ForLaterCardActionButtons(savedMessage) {
  savedMessage = savedMessage.savedMessage;
  const jumpToMessage = savedMessage.jumpToMessage;
  const items = [savedMessage];
  let obj = { label: null, IconComponent: null, action: null };
  const callback = React.useCallback(() => {
    jumpToMessage(dependencyMap[4]);
    let obj = {
      createReminder(dueAt) {
        savedMessage(closure_1_2[7]);
        const obj = {};
        const merged = Object.assign(closure_0.saveData);
        obj.dueAt = dueAt;
        obj.source = savedMessage(closure_1_2[8]).SavedMessageSources.FOR_LATER_LIST;
        return obj.addOrUpdateSavedMessage(obj);
      },
      removeReminder() {
        savedMessage(closure_1_2[7]);
        const obj = { channelId: closure_0.saveData.channelId, messageId: closure_0.saveData.messageId, displayToast: true, isReminder: true };
        return obj.removeSavedMessage(obj);
      },
      channelId: savedMessage.saveData.channelId,
      messageId: savedMessage.saveData.messageId
    };
    return obj.openLazy(savedMessage(dependencyMap[6])(dependencyMap[5], dependencyMap.paths), "MessageReminderDurationActionSheet", obj);
  }, items);
  let intl = savedMessage(1236).intl;
  obj[0] = intl.string(savedMessage(1236).t["+TSRGD"]);
  obj[1] = savedMessage(10899).ChatArrowRightIcon;
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
    IconComponent: tmp3(6368).XSmallIcon,
    action() {
      return savedMessage(dependencyMap[7]).removeSavedMessage(savedMessage.saveData);
    },
    variant: "destructive"
  };
  items1[1] = obj;
  if (null == savedMessage.saveData.dueAt) {
    obj = { style: null, children: null };
    obj[0] = tmp.actionGroup;
    obj1 = { items: null, keyboardShouldPersistTaps: "handled", triggerOnTap: true, children: null };
    obj1[0] = items1;
    obj1[3] = function children(ref) {
      const merged = Object.assign(ref, Object.create(null));
      const obj = { ref: ref.ref };
      const merged1 = Object.assign(merged);
      obj.variant = "secondary";
      const intl = savedMessage(1236).intl;
      obj.accessibilityLabel = intl.string(savedMessage(1236).t.e1heBD);
      obj.size = "sm";
      obj.icon = jumpToMessage(9416);
      return callback(savedMessage(8035).IconButton, obj);
    };
    obj[1] = jsx(tmp3(9958).ContextMenu, { items: null, keyboardShouldPersistTaps: "handled", triggerOnTap: true, children: null });
    return <View style={null}>{null}</View>;
  } else {
    const intl3 = tmp3(1236).intl;
    const t = tmp3(1236).t;
    let obj2 = { label: null, IconComponent: null, action: null };
    obj2[0] = intl3.string(savedMessage.throttledNow > savedMessage.saveData.dueAt ? t.GtBCnz : t.vrbqs1);
    if (savedMessage.throttledNow > savedMessage.saveData.dueAt) {
      let PencilIcon = tmp3(12726).BellZIcon;
    } else {
      PencilIcon = tmp3(9925).PencilIcon;
    }
    obj2[1] = PencilIcon;
    obj2[2] = callback;
    obj2 = items1.unshift(obj2);
  }
  tmp = callback();
};