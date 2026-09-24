// === Module 9593: ExplicitMediaActionCreators ===

// Module 9593 (ExplicitMediaActionCreators)
import util from "util" /* 1115 */;
import asyncRequireImpl from "asyncRequireImpl" /* 1980 */;
import ActionSheetActionCreatorsDefault from "ActionSheetActionCreators" /* 4796 */;
import actions_AlertActionCreatorsDefault from "actions/AlertActionCreators" /* 5196 */;
import ExplicitMediaRedactionUtils from "ExplicitMediaRedactionUtils" /* 7930 */;
import ExplicitMediaFalsePositiveActionCreatorsDefault from "ExplicitMediaFalsePositiveActionCreators" /* 9594 */;
import ExplicitMediaStore from "ExplicitMediaStore" /* 7623 */;

require = fn;
let closure_4 = fn(7931).EXPLICIT_MEDIA_SENDER_FALSE_POSITIVE_ACTION_SHEET_KEY;
const size = fn(2);
let result = size.fileFinishedImporting("modules/explicit_media_redaction/ExplicitMediaActionCreators.native.tsx");

export const handleSenderFalsePositiveFlow = function handleSenderFalsePositiveFlow(channelId, messageId) {
  const obj = ExplicitMediaRedactionUtils;
  const result = obj.trackMediaRedactionAction({ action: ExplicitMediaRedactionUtils.TrackMediaRedactionActionType.EXPLICIT_MEDIA_SENDER_FALSE_POSITIVE_BUTTON_CLICKED, messageId, channelId });
  if (ExplicitMediaStore.canSubmitFpReport(messageId)) {
    const obj3 = { channelId, messageId };
    ActionSheetActionCreatorsDefault.openLazy(asyncRequireImpl(9595, dependencyMap.paths), closure_4, obj3);
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
  const obj2 = { action: ExplicitMediaRedactionUtils.TrackMediaRedactionActionType.EXPLICIT_MEDIA_SENDER_FALSE_POSITIVE_BUTTON_CLICKED, messageId, channelId };
};