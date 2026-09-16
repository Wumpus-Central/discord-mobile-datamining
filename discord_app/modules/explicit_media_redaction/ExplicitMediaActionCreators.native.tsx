// discord_app/modules/explicit_media_redaction/ExplicitMediaActionCreators.native.tsx
import util from "../../intl/index.native.tsx";
import asyncRequireImpl from "../../../_runtime/01897_asyncRequireImpl.js";
import ActionSheetActionCreatorsDefault from "../action_sheet/native/ActionSheetActionCreators.tsx";
import actions_AlertActionCreatorsDefault from "../../actions/native/AlertActionCreators.tsx";
import ExplicitMediaRedactionUtils from "ExplicitMediaRedactionUtils.tsx";
import ExplicitMediaFalsePositiveActionCreatorsDefault from "ExplicitMediaFalsePositiveActionCreators.tsx";
import ExplicitMediaStore from "ExplicitMediaStore.tsx";

require = fn;
let closure_4 = fn(7709).EXPLICIT_MEDIA_SENDER_FALSE_POSITIVE_ACTION_SHEET_KEY;
const size = fn(2);
let result = size.fileFinishedImporting("modules/explicit_media_redaction/ExplicitMediaActionCreators.native.tsx");

export const handleSenderFalsePositiveFlow = function handleSenderFalsePositiveFlow(channelId, messageId) {
  const obj = ExplicitMediaRedactionUtils;
  const result = obj.trackMediaRedactionAction({
    action:
      ExplicitMediaRedactionUtils.TrackMediaRedactionActionType.EXPLICIT_MEDIA_SENDER_FALSE_POSITIVE_BUTTON_CLICKED,
    messageId,
    channelId,
  });
  if (ExplicitMediaStore.canSubmitFpReport(messageId)) {
    const obj3 = { channelId, messageId };
    ActionSheetActionCreatorsDefault.openLazy(asyncRequireImpl(9541, dependencyMap.paths), closure_4, obj3);
    const tmp4Result = ActionSheetActionCreatorsDefault;
  } else {
    const obj4 = { title: null, body: null, confirmText: null };
    const intl = util.intl;
    obj4.title = intl.string(util.t["iS/eFN"]);
    const intl2 = util.intl;
    obj4.body = intl2.string(util.t.YrjcgR);
    const intl3 = util.intl;
    obj4.confirmText = intl3.string(util.t.BddRzS);
    actions_AlertActionCreatorsDefault.show(obj4);
    const tmp4Result3 = actions_AlertActionCreatorsDefault;
    const result1 = ExplicitMediaFalsePositiveActionCreatorsDefault.disableFalsePositiveButton(channelId, messageId);
    const tmp4Result4 = ExplicitMediaFalsePositiveActionCreatorsDefault;
  }
  const obj2 = {
    action:
      ExplicitMediaRedactionUtils.TrackMediaRedactionActionType.EXPLICIT_MEDIA_SENDER_FALSE_POSITIVE_BUTTON_CLICKED,
    messageId,
    channelId,
  };
};
