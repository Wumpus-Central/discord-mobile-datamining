// discord_app/modules/saved_messages/native/ForLaterCardActionButtons.tsx
import asyncRequireImpl from "../../../../_runtime/01980_asyncRequireImpl.js";
import ActionSheetActionCreatorsDefault from "../../action_sheet/native/ActionSheetActionCreators.tsx";
import SavedMessageHelpers from "../SavedMessageHelpers.native.tsx";
import noop from "../../../../_runtime/metro/00019__.js";

require = fn;
const View = fn(17).View;
const jsx = fn(21).jsx;
const createStyles = fn(4757);
let closure_6 = createStyles.createStyles({ actionGroup: { flexDirection: "row", gap: 8 } });
const size = fn(2);
const result = size.fileFinishedImporting("modules/saved_messages/native/ForLaterCardActionButtons.tsx");

export default function ForLaterCardActionButtons(savedMessage) {
  savedMessage = savedMessage.savedMessage;
  const jumpToMessage = savedMessage.jumpToMessage;
  const items = [savedMessage];
  let obj = { label: null, IconComponent: null, action: null };
  const callback = noop.useCallback(
    () =>
      ActionSheetActionCreatorsDefault.openLazy(
        asyncRequireImpl(11967, dependencyMap.paths),
        "MessageReminderDurationActionSheet",
        {
          createReminder(dueAt) {
            const obj2 = {};
            const merged = Object.assign(closure_1_0.saveData);
            obj2.dueAt = dueAt;
            obj2.source = savedMessage(11966).SavedMessageSources.FOR_LATER_LIST;
            return savedMessage(11961).addOrUpdateSavedMessage(obj2);
          },
          removeReminder() {
            return savedMessage(11961).removeSavedMessage({
              channelId: closure_1_0.saveData.channelId,
              messageId: closure_1_0.saveData.messageId,
              displayToast: true,
              isReminder: true,
            });
          },
          channelId: savedMessage.saveData.channelId,
          messageId: savedMessage.saveData.messageId,
        },
      ),
    items,
  );
  let intl = savedMessage(1115).intl;
  obj.label = intl.string(savedMessage(1115).t["+TSRGD"]);
  obj.IconComponent = savedMessage(11993).ChatArrowRightIcon;
  obj.action = function action() {
    return jumpToMessage();
  };
  const items1 = [obj];
  const intl2 = savedMessage(1115).intl;
  if (null != savedMessage.saveData.dueAt) {
    let SvXS1Z = tmp3(1115).t["a6gcZ/"];
  } else {
    SvXS1Z = tmp3(1115).t.SvXS1Z;
  }
  const tmp = closure_6();
  items1[1] = {
    label: intl2.string(SvXS1Z),
    IconComponent: savedMessage(5899).XSmallIcon,
    action() {
      return SavedMessageHelpers.removeSavedMessage(savedMessage.saveData);
    },
    variant: "destructive",
  };
  if (null == savedMessage.saveData.dueAt) {
    const obj3 = { style: tmp.actionGroup, children: null };
    const obj4 = {
      items: items1,
      keyboardShouldPersistTaps: "handled",
      triggerOnTap: true,
      children(ref) {
        const merged = Object.assign(ref, Object.assign({ ref: 0 }));
        const obj = { ref: ref.ref };
        const merged1 = Object.assign(merged);
        obj.variant = "secondary";
        const intl = savedMessage(1115).intl;
        obj.accessibilityLabel = intl.string(savedMessage(1115).t.e1heBD);
        obj.size = "sm";
        obj.icon = jumpToMessage(8186);
        return jsx(savedMessage(8183).IconButton, { ref: ref.ref });
      },
    };
    obj3.children = jsx(tmp3(8178).ContextMenu, {
      items: items1,
      keyboardShouldPersistTaps: "handled",
      triggerOnTap: true,
      children(ref) {
        const merged = Object.assign(ref, Object.assign({ ref: 0 }));
        const obj = { ref: ref.ref };
        const merged1 = Object.assign(merged);
        obj.variant = "secondary";
        const intl = savedMessage(1115).intl;
        obj.accessibilityLabel = intl.string(savedMessage(1115).t.e1heBD);
        obj.size = "sm";
        obj.icon = jumpToMessage(8186);
        return jsx(savedMessage(8183).IconButton, { ref: ref.ref });
      },
    });
    return <View style={tmp.actionGroup}>{null}</View>;
  } else {
    const intl3 = tmp3(1115).intl;
    const t = tmp3(1115).t;
    let obj5 = {
      label: intl3.string(savedMessage.throttledNow > savedMessage.saveData.dueAt ? t.GtBCnz : t.vrbqs1),
      IconComponent: null,
      action: null,
    };
    if (savedMessage.throttledNow > savedMessage.saveData.dueAt) {
      let PencilIcon = tmp3(13604).BellZIcon;
    } else {
      PencilIcon = tmp3(10514).PencilIcon;
    }
    obj5.IconComponent = PencilIcon;
    obj5.action = callback;
    obj5 = items1.unshift(obj5);
  }
  let obj2 = {
    label: intl2.string(SvXS1Z),
    IconComponent: savedMessage(5899).XSmallIcon,
    action() {
      return SavedMessageHelpers.removeSavedMessage(savedMessage.saveData);
    },
    variant: "destructive",
  };
}
