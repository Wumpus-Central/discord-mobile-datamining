// === Module 13286: ForLaterCardActionButtons ===

// Module 13286 (ForLaterCardActionButtons)
import asyncRequireImpl from "asyncRequireImpl" /* 1896 */;
import ActionSheetActionCreatorsDefault from "ActionSheetActionCreators" /* 4527 */;
import SavedMessageHelpers from "SavedMessageHelpers" /* 11704 */;
import noop from "module_19" /* 19 */;

require = fn;
const View = fn(17).View;
const jsx = fn(21).jsx;
const createStyles = fn(4560);
let closure_6 = createStyles.createStyles({ actionGroup: { flexDirection: "row", gap: 8 } });
const size = fn(2);
const result = size.fileFinishedImporting("modules/saved_messages/native/ForLaterCardActionButtons.tsx");

export default function ForLaterCardActionButtons(savedMessage) {
  savedMessage = savedMessage.savedMessage;
  const jumpToMessage = savedMessage.jumpToMessage;
  const items = [savedMessage];
  let obj = { label: null, IconComponent: null, action: null };
  const callback = noop.useCallback(() => {
    let obj = {
      createReminder(dueAt) {
        savedMessage(11704);
        const obj = {};
        const merged = Object.assign(closure_1_0.saveData);
        obj.dueAt = dueAt;
        obj.source = savedMessage(11709).SavedMessageSources.FOR_LATER_LIST;
        return obj.addOrUpdateSavedMessage(obj);
      },
      removeReminder() {
        savedMessage(11704);
        const obj = { channelId: closure_1_0.saveData.channelId, messageId: closure_1_0.saveData.messageId, displayToast: true, isReminder: true };
        return obj.removeSavedMessage(obj);
      },
      channelId: savedMessage.saveData.channelId,
      messageId: savedMessage.saveData.messageId
    };
    return obj.openLazy(asyncRequireImpl(11710, dependencyMap.paths), "MessageReminderDurationActionSheet", obj);
  }, items);
  let intl = savedMessage(1114).intl;
  obj.label = intl.string(savedMessage(1114).t["+TSRGD"]);
  obj.IconComponent = savedMessage(11736).ChatArrowRightIcon;
  obj.action = function action() {
    return jumpToMessage();
  };
  const items1 = [obj, ];
  const intl2 = savedMessage(1114).intl;
  if (null != savedMessage.saveData.dueAt) {
    let SvXS1Z = tmp3(1114).t["a6gcZ/"];
  } else {
    SvXS1Z = tmp3(1114).t.SvXS1Z;
  }
  obj = {
    label: intl2.string(SvXS1Z),
    IconComponent: tmp3(5680).XSmallIcon,
    action() {
      return SavedMessageHelpers.removeSavedMessage(savedMessage.saveData);
    },
    variant: "destructive"
  };
  items1[1] = obj;
  if (null == savedMessage.saveData.dueAt) {
    obj = { style: tmp.actionGroup, children: null };
    const obj1 = {
      items: items1,
      keyboardShouldPersistTaps: "handled",
      triggerOnTap: true,
      children(ref) {
          const merged = Object.assign(ref, Object.assign({ ref: 0 }));
          const obj = { ref: ref.ref };
          const merged1 = Object.assign(merged);
          obj.variant = "secondary";
          const intl = savedMessage(1114).intl;
          obj.accessibilityLabel = intl.string(savedMessage(1114).t.e1heBD);
          obj.size = "sm";
          obj.icon = jumpToMessage(8673);
          return jsx(savedMessage(8097).IconButton, { ref: ref.ref });
        }
    };
    obj.children = jsx(tmp3(8666).ContextMenu, {
      items: items1,
      keyboardShouldPersistTaps: "handled",
      triggerOnTap: true,
      children(ref) {
          const merged = Object.assign(ref, Object.assign({ ref: 0 }));
          const obj = { ref: ref.ref };
          const merged1 = Object.assign(merged);
          obj.variant = "secondary";
          const intl = savedMessage(1114).intl;
          obj.accessibilityLabel = intl.string(savedMessage(1114).t.e1heBD);
          obj.size = "sm";
          obj.icon = jumpToMessage(8673);
          return jsx(savedMessage(8097).IconButton, { ref: ref.ref });
        }
    });
    return <View style={tmp.actionGroup}>{null}</View>;
  } else {
    const intl3 = tmp3(1114).intl;
    const t = tmp3(1114).t;
    let obj2 = { label: intl3.string(savedMessage.throttledNow > savedMessage.saveData.dueAt ? t.GtBCnz : t.vrbqs1), IconComponent: null, action: null };
    if (savedMessage.throttledNow > savedMessage.saveData.dueAt) {
      let PencilIcon = tmp3(13287).BellZIcon;
    } else {
      PencilIcon = tmp3(10250).PencilIcon;
    }
    obj2.IconComponent = PencilIcon;
    obj2.action = callback;
    obj2 = items1.unshift(obj2);
  }
  tmp = closure_6();
};