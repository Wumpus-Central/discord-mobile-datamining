// discord_app/modules/saved_messages/native/ForLaterCardActionButtons.tsx
import react_native from "../../../../_runtime/00017_react-native.js";
import Fragment from "../../../../_runtime/react/00021_Fragment.js";
import asyncRequire from "../../../../_runtime/01987_asyncRequire.js";
import ActionSheetActionCreatorsDefault from "../../action_sheet/native/ActionSheetActionCreators.tsx";
import SavedMessageHelpers from "../SavedMessageHelpers.native.tsx";
import react from "../../../../_runtime/00019_react.js";
import createStyles from "../../../design/components/Styles/native/createStyles.tsx";
import size from "../../../../_runtime/metro/00002__.js";

const View = react_native.View;
const jsx = Fragment.jsx;
let closure_6 = createStyles.createStyles({ actionGroup: { flexDirection: "row", gap: 8 } });
const result = size.fileFinishedImporting("modules/saved_messages/native/ForLaterCardActionButtons.tsx");

export default function ForLaterCardActionButtons(savedMessage) {
  let PencilIcon;
  let SvXS1Z;
  let intl;
  savedMessage = savedMessage.savedMessage;
  const jumpToMessage = savedMessage.jumpToMessage;
  const throttledNow = savedMessage.throttledNow;
  const items = [savedMessage];
  const tmp = closure_6();
  let obj = {
    label: intl.string(savedMessage(1126).t["+TSRGD"]),
    IconComponent: savedMessage(11381).ChatArrowRightIcon,
    action() {
      return jumpToMessage();
    },
  };
  const callback = react.useCallback(() => {
    let obj = ActionSheetActionCreatorsDefault;
    let obj2 = {
      createReminder(dueAt) {
        const obj = { dueAt, source: savedMessage(dependencyMap[8]).SavedMessageSources.FOR_LATER_LIST };
        const addOrUpdateSavedMessage = savedMessage(dependencyMap[7]).addOrUpdateSavedMessage;
        savedMessage(dependencyMap[7]);
        const merged = Object.assign(closure_1_0.saveData);
        return addOrUpdateSavedMessage(obj);
      },
      removeReminder() {
        const obj = savedMessage(dependencyMap[7]);
        const obj2 = {
          channelId: closure_1_0.saveData.channelId,
          messageId: closure_1_0.saveData.messageId,
          displayToast: true,
          isReminder: true,
        };
        return obj.removeSavedMessage(obj2);
      },
      channelId: savedMessage.saveData.channelId,
      messageId: savedMessage.saveData.messageId,
    };
    return obj.openLazy(asyncRequire(11353, dependencyMap.paths), "MessageReminderDurationActionSheet", obj2);
  }, items);
  intl = savedMessage(1126).intl;
  const items1 = [obj];
  const intl2 = savedMessage(1126).intl;
  const string = intl2.string;
  if (null != savedMessage.saveData.dueAt) {
    SvXS1Z = tmp3(1126).t["a6gcZ/"];
  } else {
    SvXS1Z = tmp3(1126).t.SvXS1Z;
  }
  let obj2 = {
    label: string(SvXS1Z),
    IconComponent: tmp3(6024).XSmallIcon,
    action() {
      const obj = SavedMessageHelpers;
      return obj.removeSavedMessage(savedMessage.saveData);
    },
    variant: "destructive",
  };
  items1[1] = obj2;
  if (null != savedMessage.saveData.dueAt) {
    const unshift = items1.unshift;
    const intl3 = tmp3(1126).intl;
    const string2 = intl3.string;
    const t = tmp3(1126).t;
    const obj3 = {
      label: string2(throttledNow > savedMessage.saveData.dueAt ? t.GtBCnz : t.vrbqs1),
      IconComponent: PencilIcon,
      action: callback,
    };
    if (throttledNow > savedMessage.saveData.dueAt) {
      PencilIcon = tmp3(13148).BellZIcon;
    } else {
      PencilIcon = tmp3(10071).PencilIcon;
    }
    unshift(obj3);
  }
  return <View style={tmp.actionGroup}>{null}</View>;
}
