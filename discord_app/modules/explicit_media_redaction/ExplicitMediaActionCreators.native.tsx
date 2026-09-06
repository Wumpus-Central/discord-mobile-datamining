// === Module 9396: ExplicitMediaActionCreators ===

// Module 9396 (ExplicitMediaActionCreators)
import util from "util" /* 1114 */;
import asyncRequireImpl from "asyncRequireImpl" /* 1896 */;
import ActionSheetActionCreatorsDefault from "ActionSheetActionCreators" /* 4527 */;
import actions_AlertActionCreatorsDefault from "actions/AlertActionCreators" /* 4905 */;
import ExplicitMediaRedactionUtils from "ExplicitMediaRedactionUtils" /* 7600 */;
import ExplicitMediaFalsePositiveActionCreatorsDefault from "ExplicitMediaFalsePositiveActionCreators" /* 9397 */;
import ExplicitMediaStore from "ExplicitMediaStore" /* 7293 */;

require = fn;
let closure_4 = fn(7601).EXPLICIT_MEDIA_SENDER_FALSE_POSITIVE_ACTION_SHEET_KEY;
const size = fn(2);
let result = size.fileFinishedImporting("modules/explicit_media_redaction/ExplicitMediaActionCreators.native.tsx");

export const handleSenderFalsePositiveFlow = function handleSenderFalsePositiveFlow(channelId, messageId) {
  let obj = { action: ExplicitMediaRedactionUtils.TrackMediaRedactionActionType.EXPLICIT_MEDIA_SENDER_FALSE_POSITIVE_BUTTON_CLICKED, messageId, channelId };
  const result = obj.trackMediaRedactionAction(obj);
  if (ExplicitMediaStore.canSubmitFpReport(messageId)) {
    let tmp4Result = ActionSheetActionCreatorsDefault;
    obj = { channelId, messageId };
    tmp4Result.openLazy(asyncRequireImpl(9398, dependencyMap.paths), closure_4, obj);
  } else {
    tmp4Result = actions_AlertActionCreatorsDefault;
    const obj1 = { title: null, body: null, confirmText: null };
    const intl = util.intl;
    obj1.title = intl.string(util.t["iS/eFN"]);
    const intl2 = util.intl;
    obj1.body = intl2.string(util.t.YrjcgR);
    const intl3 = util.intl;
    obj1.confirmText = intl3.string(util.t.BddRzS);
    tmp4Result.show(obj1);
    const result1 = ExplicitMediaFalsePositiveActionCreatorsDefault.disableFalsePositiveButton(channelId, messageId);
    const tmp4Result1 = ExplicitMediaFalsePositiveActionCreatorsDefault;
  }
};