// discord_app/modules/saved_messages/native/ForLaterCardActionButtons.tsx
import util from "../../../intl/index.native.tsx";
import asyncRequireImpl from "../../../../_runtime/01995_asyncRequireImpl.js";
import ActionSheetActionCreatorsDefault from "../../action_sheet/native/ActionSheetActionCreators.tsx";
import IconButton from "../../../design/components/Button/native/IconButton.native.tsx";
import _modDef9188 from "../../../../_runtime/metro/09188__.js";
import ContextMenu from "../../../design/components/ContextMenu/native/ContextMenu.native.tsx";
import SavedMessageHelpers from "../SavedMessageHelpers.native.tsx";
import noop from "../../../../_runtime/metro/00019__.js";

require = fn;
const View = fn(17).View;
const jsx = fn(21).jsx;
const createStyles = fn(5009);
let closure_6 = createStyles.createStyles({ actionGroup: { flexDirection: "row", gap: 8 } });
const size = fn(2);
const result = size.fileFinishedImporting("modules/saved_messages/native/ForLaterCardActionButtons.tsx");

export default function ForLaterCardActionButtons(items) {
  let merged = Object.assign(items, Object.assign({ menuItems: 0 }));
  let obj = { style: closure_6().actionGroup };
  let merged1 = Object.assign(merged);
  obj.children = jsx(ContextMenu.ContextMenu, {
    items: items.menuItems,
    keyboardShouldPersistTaps: "handled",
    triggerOnTap: true,
    children(ref) {
      const merged = Object.assign(ref, Object.assign({ ref: 0 }));
      const obj = { ref: ref.ref };
      const merged1 = Object.assign(merged);
      obj.variant = "secondary";
      const intl = util.intl;
      obj.accessibilityLabel = intl.string(util.t.e1heBD);
      obj.size = "sm";
      obj.icon = _modDef9188;
      return jsx(IconButton.IconButton, { ref: ref.ref });
    },
  });
  return <View style={closure_6().actionGroup} />;
}
export function useForLaterCardMenuItems(savedMessage) {
  savedMessage = savedMessage.savedMessage;
  const jumpToMessage = savedMessage.jumpToMessage;
  const items = [savedMessage];
  const obj = { label: null, IconComponent: null, action: null };
  let tmp2Result = dependencyMap;
  const callback = noop.useCallback(
    () =>
      ActionSheetActionCreatorsDefault.openLazy(
        asyncRequireImpl(11147, dependencyMap.paths),
        "MessageReminderDurationActionSheet",
        {
          createReminder(dueAt) {
            const obj2 = {};
            const merged = Object.assign(closure_1_0.saveData);
            obj2.dueAt = dueAt;
            obj2.source = savedMessage(11150).SavedMessageSources.FOR_LATER_LIST;
            return savedMessage(11140).addOrUpdateSavedMessage(obj2);
          },
          removeReminder() {
            return savedMessage(11140).removeSavedMessage({
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
  const intl = savedMessage(1114).intl;
  obj.label = intl.string(savedMessage(1114).t["+TSRGD"]);
  obj.IconComponent = savedMessage(11151).ChatArrowRightIcon;
  obj.action = function action() {
    return jumpToMessage();
  };
  const items1 = [obj];
  const intl2 = savedMessage(1114).intl;
  if (null != savedMessage.saveData.dueAt) {
    let SvXS1Z = tmp2(1114).t["a6gcZ/"];
  } else {
    SvXS1Z = tmp2(1114).t.SvXS1Z;
  }
  items1[1] = {
    label: intl2.string(SvXS1Z),
    IconComponent: savedMessage(7048).XSmallIcon,
    action() {
      return SavedMessageHelpers.removeSavedMessage(savedMessage.saveData);
    },
    variant: "destructive",
  };
  if (null == savedMessage.saveData.dueAt) {
    return items1;
  } else {
    const intl3 = tmp2(1114).intl;
    const t = tmp2(1114).t;
    let obj3 = {
      label: intl3.string(savedMessage.throttledNow > savedMessage.saveData.dueAt ? t.GtBCnz : t.vrbqs1),
      IconComponent: null,
      action: null,
    };
    if (savedMessage.throttledNow > savedMessage.saveData.dueAt) {
      tmp2Result = tmp2(11153);
      let PencilIcon = tmp2Result.BellZIcon;
    } else {
      PencilIcon = tmp2(10212).PencilIcon;
    }
    obj3.IconComponent = PencilIcon;
    obj3.action = callback;
    obj3 = items1.unshift(obj3);
  }
}
