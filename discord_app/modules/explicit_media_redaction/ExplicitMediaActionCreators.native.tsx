// === Module 9396: ExplicitMediaActionCreators ===

// Module 9396 (ExplicitMediaActionCreators)
import ExplicitMediaRedactionUtils from "ExplicitMediaRedactionUtils" /* 7600 */;
import ExplicitMediaStore from "ExplicitMediaStore" /* 7293 */;

require = fn;
let closure_4 = fn(7601).EXPLICIT_MEDIA_SENDER_FALSE_POSITIVE_ACTION_SHEET_KEY;
const size = fn(2);
let result = size.fileFinishedImporting("modules/explicit_media_redaction/ExplicitMediaActionCreators.native.tsx");

export const handleSenderFalsePositiveFlow = function handleSenderFalsePositiveFlow(channelId, messageId) {
  let obj = { action: ExplicitMediaRedactionUtils.TrackMediaRedactionActionType.EXPLICIT_MEDIA_SENDER_FALSE_POSITIVE_BUTTON_CLICKED, messageId, channelId };
  const result = obj.trackMediaRedactionAction(obj);
  if (ExplicitMediaStore.canSubmitFpReport(messageId)) {
    let tmp4Result = tmp4(4527);
    obj = { channelId, messageId };
    tmp4Result.openLazy(tmp(1896)(9398, tmp2.paths), closure_4, obj);
  } else {
    tmp4Result = tmp4(4905);
    const obj1 = { title: null, body: null, confirmText: null };
    const intl = tmp(1114).intl;
    obj1.title = intl.string(tmp(1114).t["iS/eFN"]);
    const intl2 = tmp(1114).intl;
    obj1.body = intl2.string(tmp(1114).t.YrjcgR);
    const intl3 = tmp(1114).intl;
    obj1.confirmText = intl3.string(tmp(1114).t.BddRzS);
    tmp4Result.show(obj1);
    const result1 = tmp4(9397).disableFalsePositiveButton(channelId, messageId);
  }
  tmp2 = dependencyMap;
};