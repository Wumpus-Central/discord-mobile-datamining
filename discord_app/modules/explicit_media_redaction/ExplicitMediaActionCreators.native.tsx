// === Module 9466: ExplicitMediaActionCreators ===

// Module 9466 (ExplicitMediaActionCreators)
import util from "util" /* 1114 */;
import asyncRequireImpl from "asyncRequireImpl" /* 1896 */;
import ActionSheetActionCreatorsDefault from "ActionSheetActionCreators" /* 4572 */;
import actions_AlertActionCreatorsDefault from "actions/AlertActionCreators" /* 4950 */;
import ExplicitMediaRedactionUtils from "ExplicitMediaRedactionUtils" /* 7651 */;
import ExplicitMediaFalsePositiveActionCreatorsDefault from "ExplicitMediaFalsePositiveActionCreators" /* 9467 */;
import ExplicitMediaStore from "ExplicitMediaStore" /* 7345 */;

require = fn;
let closure_4 = fn(7652).EXPLICIT_MEDIA_SENDER_FALSE_POSITIVE_ACTION_SHEET_KEY;
const size = fn(2);
let result = size.fileFinishedImporting("modules/explicit_media_redaction/ExplicitMediaActionCreators.native.tsx");

export const handleSenderFalsePositiveFlow = function handleSenderFalsePositiveFlow(channelId, messageId) {
  let obj = { action: ExplicitMediaRedactionUtils.TrackMediaRedactionActionType.EXPLICIT_MEDIA_SENDER_FALSE_POSITIVE_BUTTON_CLICKED, messageId, channelId };
  const result = obj.trackMediaRedactionAction(obj);
  if (ExplicitMediaStore.canSubmitFpReport(messageId)) {
    let tmp4Result = ActionSheetActionCreatorsDefault;
    obj = { channelId, messageId };
    tmp4Result.openLazy(asyncRequireImpl(9468, dependencyMap.paths), closure_4, obj);
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