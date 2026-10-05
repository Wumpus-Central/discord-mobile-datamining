// discord_app/modules/explicit_media_redaction/ExplicitMediaActionCreators.native.tsx
import intl4 from "../../intl/index.native.tsx";
import asyncRequire from "../../../_runtime/01987_asyncRequire.js";
import ActionSheetActionCreatorsDefault from "../action_sheet/native/ActionSheetActionCreators.tsx";
import actions_AlertActionCreatorsDefault from "../../actions/native/AlertActionCreators.tsx";
import ExplicitMediaRedactionUtils from "ExplicitMediaRedactionUtils.tsx";
import ExplicitMediaRedactionConstants from "ExplicitMediaRedactionConstants.tsx";
import ExplicitMediaFalsePositiveActionCreatorsDefault from "ExplicitMediaFalsePositiveActionCreators.tsx";
import ExplicitMediaStore from "ExplicitMediaStore.tsx";
import size from "../../../_runtime/metro/00002__.js";

let closure_4 = ExplicitMediaRedactionConstants.EXPLICIT_MEDIA_SENDER_FALSE_POSITIVE_ACTION_SHEET_KEY;
let result = size.fileFinishedImporting("modules/explicit_media_redaction/ExplicitMediaActionCreators.native.tsx");

export const handleSenderFalsePositiveFlow = function handleSenderFalsePositiveFlow(channelId, messageId) {
  let intl;
  let intl2;
  let intl3;
  const obj = ExplicitMediaRedactionUtils;
  const obj2 = {
    action:
      ExplicitMediaRedactionUtils.TrackMediaRedactionActionType.EXPLICIT_MEDIA_SENDER_FALSE_POSITIVE_BUTTON_CLICKED,
    messageId,
    channelId,
  };
  const result = obj.trackMediaRedactionAction(obj2);
  if (ExplicitMediaStore.canSubmitFpReport(messageId)) {
    const obj3 = { channelId, messageId };
    const tmp4Result = ActionSheetActionCreatorsDefault;
    tmp4Result.openLazy(asyncRequire(8920, dependencyMap.paths), closure_4, obj3);
  } else {
    const obj4 = {
      title: intl.string(intl4.t["iS/eFN"]),
      body: intl2.string(intl4.t.YrjcgR),
      confirmText: intl3.string(intl4.t.BddRzS),
    };
    const show = actions_AlertActionCreatorsDefault.show;
    actions_AlertActionCreatorsDefault;
    intl = intl4.intl;
    intl2 = intl4.intl;
    intl3 = intl4.intl;
    show(obj4);
    const tmp4Result4 = ExplicitMediaFalsePositiveActionCreatorsDefault;
    const result1 = tmp4Result4.disableFalsePositiveButton(channelId, messageId);
  }
};
