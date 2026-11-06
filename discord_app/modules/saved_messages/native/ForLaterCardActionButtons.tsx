// === Module 11315: ForLaterCardActionButtons ===

// Module 11315 (ForLaterCardActionButtons)
import util from "util" /* 1113 */;
import asyncRequireImpl from "asyncRequireImpl" /* 2118 */;
import ActionSheetActionCreatorsDefault from "ActionSheetActionCreators" /* 5404 */;
import IconButton from "IconButton" /* 8119 */;
import _modDef9305 from "module_9305" /* 9305 */;
import ContextMenu from "ContextMenu" /* 10012 */;
import SavedMessageHelpers from "SavedMessageHelpers" /* 11309 */;
import noop from "module_19" /* 19 */;

require = fn;
const View = fn(17).View;
const jsx = fn(21).jsx;
const createStyles = fn(5170);
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
      obj.icon = _modDef9305;
      return jsx(IconButton.IconButton, { ref: ref.ref });
    }
  });
  return <View style={closure_6().actionGroup} />;
};
export function useForLaterCardMenuItems(savedMessage) {
  savedMessage = savedMessage.savedMessage;
  const jumpToMessage = savedMessage.jumpToMessage;
  items = [savedMessage];
  const obj = { label: null, IconComponent: null, action: null };
  let tmp2Result = dependencyMap;
  const callback = noop.useCallback(() => ActionSheetActionCreatorsDefault.openLazy(asyncRequireImpl(11316, dependencyMap.paths), "MessageReminderDurationActionSheet", {
    createReminder(dueAt) {
      const obj2 = {};
      const merged = Object.assign(closure_1_0.saveData);
      obj2.dueAt = dueAt;
      obj2.source = savedMessage(11319).SavedMessageSources.FOR_LATER_LIST;
      return savedMessage(11309).addOrUpdateSavedMessage(obj2);
    },
    removeReminder() {
      return savedMessage(11309).removeSavedMessage({ channelId: closure_1_0.saveData.channelId, messageId: closure_1_0.saveData.messageId, displayToast: true, isReminder: true });
    },
    channelId: savedMessage.saveData.channelId,
    messageId: savedMessage.saveData.messageId
  }), items);
  const intl = savedMessage(1113).intl;
  obj.label = intl.string(savedMessage(1113).t["+TSRGD"]);
  obj.IconComponent = savedMessage(11320).ChatArrowRightIcon;
  obj.action = function action() {
    return jumpToMessage();
  };
  const items1 = [obj, ];
  const intl2 = savedMessage(1113).intl;
  if (null != savedMessage.saveData.dueAt) {
    let SvXS1Z = tmp2(1113).t["a6gcZ/"];
  } else {
    SvXS1Z = tmp2(1113).t.SvXS1Z;
  }
  items1[1] = {
    label: intl2.string(SvXS1Z),
    IconComponent: savedMessage(7145).XSmallIcon,
    action() {
      return SavedMessageHelpers.removeSavedMessage(savedMessage.saveData);
    },
    variant: "destructive"
  };
  if (null == savedMessage.saveData.dueAt) {
    return items1;
  } else {
    const intl3 = tmp2(1113).intl;
    const t = tmp2(1113).t;
    let obj3 = { label: intl3.string(savedMessage.throttledNow > savedMessage.saveData.dueAt ? t.GtBCnz : t.vrbqs1), IconComponent: null, action: null };
    if (savedMessage.throttledNow > savedMessage.saveData.dueAt) {
      tmp2Result = tmp2(11322);
      let PencilIcon = tmp2Result.BellZIcon;
    } else {
      PencilIcon = tmp2(10368).PencilIcon;
    }
    obj3.IconComponent = PencilIcon;
    obj3.action = callback;
    obj3 = items1.unshift(obj3);
  }
}