// discord_app/modules/saved_messages/native/ForLaterCardActionButtons.tsx
import c from "../../../../_runtime/00576_c.js";
import util from "../../../intl/index.native.tsx";
import asyncRequireImpl from "../../../../_runtime/02000_asyncRequireImpl.js";
import ActionSheetActionCreatorsDefault from "../../action_sheet/native/ActionSheetActionCreators.tsx";
import IconButton from "../../../design/components/Button/native/IconButton.native.tsx";
import _modDef9175 from "../../../../_runtime/metro/09175__.js";
import ContextMenu from "../../../design/components/ContextMenu/native/ContextMenu.native.tsx";
import SavedMessageHelpers from "../SavedMessageHelpers.native.tsx";
import _objectWithoutProperties from "../../../../_runtime/metro/00109__objectWithoutProperties.js";
import noop from "../../../../_runtime/metro/00019__.js";

require = fn;
let closure_3 = ["menuItems"];
let closure_4 = ["ref"];
const View = fn(17).View;
const jsx = fn(21).jsx;
const createStyles = fn(5005);
let closure_9 = createStyles.createStyles({ actionGroup: { flexDirection: "row", gap: 8 } });
const ReactCompilerGating = fn(558);
const size = fn(2);
const result = size.fileFinishedImporting("modules/saved_messages/native/ForLaterCardActionButtons.tsx");

export default ReactCompilerGating.isReactCompilerEnabled()
  ? function ForLaterCardActionButtons(menuItems) {
      const cResult = c.c(10);
      if (cResult[0] !== menuItems) {
        menuItems = menuItems.menuItems;
        const tmp8 = _objectWithoutProperties(menuItems, closure_3);
        cResult[0] = menuItems;
        cResult[1] = tmp8;
        cResult[2] = menuItems;
        let tmp5 = menuItems;
        let tmp4 = tmp8;
      } else {
        tmp4 = cResult[1];
        tmp5 = cResult[2];
      }
      const tmp9 = closure_9();
      if (cResult[3] === Symbol.for("react.memo_cache_sentinel")) {
        const fn = function p(ref) {
          const obj = { ref: ref.ref };
          const merged = Object.assign(_objectWithoutProperties(ref, closure_1_4));
          obj.variant = "secondary";
          const intl = util.intl;
          obj.accessibilityLabel = intl.string(util.t.e1heBD);
          obj.size = "sm";
          obj.icon = _modDef9175;
          return jsx(IconButton.IconButton, { ref: ref.ref });
        };
        cResult[3] = fn;
        let tmp10 = fn;
      } else {
        tmp10 = cResult[3];
      }
      if (cResult[4] !== tmp5) {
        const obj2 = { items: tmp5, keyboardShouldPersistTaps: "handled", triggerOnTap: true, children: tmp10 };
        const tmp13 = jsx(ContextMenu.ContextMenu, {
          items: tmp5,
          keyboardShouldPersistTaps: "handled",
          triggerOnTap: true,
          children: tmp10,
        });
        cResult[4] = tmp5;
        cResult[5] = tmp13;
        let tmp11 = tmp13;
      } else {
        tmp11 = cResult[5];
      }
      if (cResult[6] === tmp4) {
        if (cResult[7] === tmp9.actionGroup) {
          if (cResult[8] === tmp11) {
            let tmp14 = cResult[9];
          }
          return tmp14;
        }
      }
      const obj3 = { style: tmp9.actionGroup };
      let merged = Object.assign(tmp4);
      obj3.children = tmp11;
      const tmp16 = <View style={tmp9.actionGroup} />;
      cResult[6] = tmp4;
      cResult[7] = tmp9.actionGroup;
      cResult[8] = tmp11;
      cResult[9] = tmp16;
      tmp14 = tmp16;
    }
  : function ForLaterCardActionButtons(items) {
      let merged = Object.assign(items, Object.assign({ menuItems: 0 }));
      let obj = { style: closure_9().actionGroup };
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
          obj.icon = _modDef9175;
          return jsx(IconButton.IconButton, { ref: ref.ref });
        },
      });
      return <View style={closure_9().actionGroup} />;
    };
export function useForLaterCardMenuItems(savedMessage) {
  savedMessage = savedMessage.savedMessage;
  const jumpToMessage = savedMessage.jumpToMessage;
  const items = [savedMessage];
  const obj = { label: null, IconComponent: null, action: null };
  let tmp2Result = dependencyMap;
  const callback = noop.useCallback(
    () =>
      ActionSheetActionCreatorsDefault.openLazy(
        asyncRequireImpl(14285, dependencyMap.paths),
        "MessageReminderDurationActionSheet",
        {
          createReminder(dueAt) {
            const obj2 = {};
            const merged = Object.assign(closure_1_0.saveData);
            obj2.dueAt = dueAt;
            obj2.source = savedMessage(14288).SavedMessageSources.FOR_LATER_LIST;
            return savedMessage(14278).addOrUpdateSavedMessage(obj2);
          },
          removeReminder() {
            return savedMessage(14278).removeSavedMessage({
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
  const intl = savedMessage(1125).intl;
  obj.label = intl.string(savedMessage(1125).t["+TSRGD"]);
  obj.IconComponent = savedMessage(12616).ChatArrowRightIcon;
  obj.action = function action() {
    return jumpToMessage();
  };
  const items1 = [obj];
  const intl2 = savedMessage(1125).intl;
  if (null != savedMessage.saveData.dueAt) {
    let SvXS1Z = tmp2(1125).t["a6gcZ/"];
  } else {
    SvXS1Z = tmp2(1125).t.SvXS1Z;
  }
  items1[1] = {
    label: intl2.string(SvXS1Z),
    IconComponent: savedMessage(6991).XSmallIcon,
    action() {
      return SavedMessageHelpers.removeSavedMessage(savedMessage.saveData);
    },
    variant: "destructive",
  };
  if (null == savedMessage.saveData.dueAt) {
    return items1;
  } else {
    const intl3 = tmp2(1125).intl;
    const t = tmp2(1125).t;
    let obj3 = {
      label: intl3.string(savedMessage.throttledNow > savedMessage.saveData.dueAt ? t.GtBCnz : t.vrbqs1),
      IconComponent: null,
      action: null,
    };
    if (savedMessage.throttledNow > savedMessage.saveData.dueAt) {
      tmp2Result = tmp2(14289);
      let PencilIcon = tmp2Result.BellZIcon;
    } else {
      PencilIcon = tmp2(10187).PencilIcon;
    }
    obj3.IconComponent = PencilIcon;
    obj3.action = callback;
    obj3 = items1.unshift(obj3);
  }
}
