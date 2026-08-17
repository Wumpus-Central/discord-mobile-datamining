// discord_app/modules/explicit_media_redaction/ExplicitMediaActionCreators.native.tsx
import redactionSettingToRenderedString from "redactionSettingToRenderedString" /* 5001 */;
import closure_3 from "getFpMessageInfo" /* 5002 */;
import { EXPLICIT_MEDIA_SENDER_FALSE_POSITIVE_ACTION_SHEET_KEY as closure_4 } from "USER_SETTING_ACTION_SHEET_KEY" /* 5004 */;

require = arg1;
let result = require("set").fileFinishedImporting("modules/explicit_media_redaction/ExplicitMediaActionCreators.native.tsx");

export const handleSenderFalsePositiveFlow = function handleSenderFalsePositiveFlow(channelId, closure_1) {
  let obj = redactionSettingToRenderedString;
  obj = { action: redactionSettingToRenderedString.TrackMediaRedactionActionType.EXPLICIT_MEDIA_SENDER_FALSE_POSITIVE_BUTTON_CLICKED, messageId: closure_1, channelId };
  const result = obj.trackMediaRedactionAction(obj);
  if (closure_3.canSubmitFpReport(closure_1)) {
    let tmp4Result = tmp4(4342);
    obj = { channelId: null, messageId: null };
    obj[0] = channelId;
    obj[1] = closure_1;
    tmp4Result.openLazy(tmp(2007)(11100, tmp2.paths), closure_4, obj);
  } else {
    tmp4Result = tmp4(4656);
    obj1 = { title: null, body: null, confirmText: null };
    const intl = tmp(1236).intl;
    obj1[0] = intl.string(tmp(1236).t["iS/eFN"]);
    const intl2 = tmp(1236).intl;
    obj1[1] = intl2.string(tmp(1236).t.YrjcgR);
    const intl3 = tmp(1236).intl;
    obj1[2] = intl3.string(tmp(1236).t.BddRzS);
    tmp4Result.show(obj1);
    const result1 = tmp4(11099).disableFalsePositiveButton(channelId, closure_1);
  }
  tmp2 = dependencyMap;
};