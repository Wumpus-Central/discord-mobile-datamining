// discord_app/modules/quests/native/QuestAccessSuspendedBottomSheet.tsx
import util from "../../../intl/index.native.tsx";
import ActionSheetActionCreatorsDefault from "../../action_sheet/native/ActionSheetActionCreators.tsx";
import components_Button_Button from "../../../design/components/Button/native/Button.native.tsx";
import PromoSheet from "../../../design/components/Sheet/native/PromoSheet.native.tsx";
import openAccountStanding from "../../user_settings/core/native/openAccountStanding.tsx";
import openQuestAccessSuspendedBottomSheet from "openQuestAccessSuspendedBottomSheet.tsx";
import noop from "../../../../_runtime/metro/00019__.js";

require = fn;
const jsx = fn(21).jsx;
const size = fn(2);
const result = size.fileFinishedImporting("modules/quests/native/QuestAccessSuspendedBottomSheet.tsx");

export default function QuestAccessSuspendedBottomSheet() {
  const callback = noop.useCallback(() => {
    ActionSheetActionCreatorsDefault.hideActionSheet(openQuestAccessSuspendedBottomSheet.ACTION_SHEET_KEY);
    openAccountStanding.openAccountStanding();
  }, []);
  let obj = { title: null, description: null, actions: null };
  const intl = util.intl;
  obj.title = intl.string(util.t.WfwodX);
  const intl2 = util.intl;
  obj.description = intl2.string(util.t.I27WXW);
  obj = { grow: true, size: "lg", variant: "primary", text: null, onPress: null };
  const intl3 = util.intl;
  obj.text = intl3.string(util.t.hvVgAZ);
  obj.onPress = callback;
  obj.actions = jsx(components_Button_Button.Button, {
    grow: true,
    size: "lg",
    variant: "primary",
    text: null,
    onPress: null,
  });
  return jsx(PromoSheet.PromoSheet, { grow: true, size: "lg", variant: "primary", text: null, onPress: null });
}
