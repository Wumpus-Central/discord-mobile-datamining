// === Module 11098: handleSenderFalsePositiveFlow ===

// Module 11098 (handleSenderFalsePositiveFlow)
import getSystemLocale from "getSystemLocale" /* 1236 */;
import asyncRequireImpl from "asyncRequireImpl" /* 2007 */;
import ACTION_SHEET_HEIGHT_HALFDefault from "ACTION_SHEET_HEIGHT_HALF" /* 4342 */;
import _modDef4656 from "module_4656" /* 4656 */;
import redactionSettingToRenderedString from "redactionSettingToRenderedString" /* 5001 */;
import disableFalsePositiveButtonDefault from "disableFalsePositiveButton" /* 11099 */;
import getFpMessageInfo from "getFpMessageInfo" /* 5002 */;
import { EXPLICIT_MEDIA_SENDER_FALSE_POSITIVE_ACTION_SHEET_KEY as closure_4 } from "USER_SETTING_ACTION_SHEET_KEY" /* 5004 */;

require = fn;
let result = require("obj132").fileFinishedImporting("modules/explicit_media_redaction/ExplicitMediaActionCreators.native.tsx");

export const handleSenderFalsePositiveFlow = function handleSenderFalsePositiveFlow(channelId, closure_1) {
  let obj = { action: redactionSettingToRenderedString.TrackMediaRedactionActionType.EXPLICIT_MEDIA_SENDER_FALSE_POSITIVE_BUTTON_CLICKED, messageId: closure_1, channelId };
  const result = obj.trackMediaRedactionAction(obj);
  if (closure_3.canSubmitFpReport(closure_1)) {
    let tmp4Result = ACTION_SHEET_HEIGHT_HALFDefault;
    obj = { channelId: null, messageId: null };
    obj[0] = channelId;
    obj[1] = closure_1;
    tmp4Result.openLazy(asyncRequireImpl(11100, dependencyMap.paths), closure_4, obj);
  } else {
    tmp4Result = _modDef4656;
    obj1 = { title: null, body: null, confirmText: null };
    const intl = getSystemLocale.intl;
    obj1[0] = intl.string(getSystemLocale.t["iS/eFN"]);
    const intl2 = getSystemLocale.intl;
    obj1[1] = intl2.string(getSystemLocale.t.YrjcgR);
    const intl3 = getSystemLocale.intl;
    obj1[2] = intl3.string(getSystemLocale.t.BddRzS);
    tmp4Result.show(obj1);
    const result1 = disableFalsePositiveButtonDefault.disableFalsePositiveButton(channelId, closure_1);
    const tmp4Result1 = disableFalsePositiveButtonDefault;
  }
};