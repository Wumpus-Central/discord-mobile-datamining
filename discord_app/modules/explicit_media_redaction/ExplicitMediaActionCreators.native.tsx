// === Module 8699: ExplicitMediaActionCreators ===

// Module 8699 (ExplicitMediaActionCreators)
import util from "util" /* 1115 */;
import asyncRequireImpl from "asyncRequireImpl" /* 1981 */;
import ActionSheetActionCreatorsDefault from "ActionSheetActionCreators" /* 4800 */;
import actions_AlertActionCreatorsDefault from "actions/AlertActionCreators" /* 5204 */;
import ExplicitMediaRedactionUtils from "ExplicitMediaRedactionUtils" /* 7020 */;
import ExplicitMediaFalsePositiveActionCreatorsDefault from "ExplicitMediaFalsePositiveActionCreators" /* 8700 */;
import ExplicitMediaStore from "ExplicitMediaStore" /* 6711 */;

require = fn;
let closure_4 = fn(7021).EXPLICIT_MEDIA_SENDER_FALSE_POSITIVE_ACTION_SHEET_KEY;
const size = fn(2);
let result = size.fileFinishedImporting("modules/explicit_media_redaction/ExplicitMediaActionCreators.native.tsx");

export const handleSenderFalsePositiveFlow = function handleSenderFalsePositiveFlow(channelId, messageId) {
  const obj = ExplicitMediaRedactionUtils;
  const result = obj.trackMediaRedactionAction({ action: ExplicitMediaRedactionUtils.TrackMediaRedactionActionType.EXPLICIT_MEDIA_SENDER_FALSE_POSITIVE_BUTTON_CLICKED, messageId, channelId });
  if (ExplicitMediaStore.canSubmitFpReport(messageId)) {
    const obj3 = { channelId, messageId };
    ActionSheetActionCreatorsDefault.openLazy(asyncRequireImpl(8701, dependencyMap.paths), closure_4, obj3);
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