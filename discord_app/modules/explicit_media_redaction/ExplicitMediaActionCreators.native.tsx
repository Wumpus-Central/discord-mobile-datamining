// discord_app/modules/explicit_media_redaction/ExplicitMediaActionCreators.native.tsx
import getSystemLocale from "../../intl/index.native.tsx";
import asyncRequireImpl from "../../../_runtime/02007_asyncRequireImpl.js";
import ACTION_SHEET_HEIGHT_HALFDefault from "../action_sheet/native/ActionSheetActionCreators.tsx";
import _modDef4656 from "../../actions/native/AlertActionCreators.tsx";
import redactionSettingToRenderedString from "ExplicitMediaRedactionUtils.tsx";
import disableFalsePositiveButtonDefault from "ExplicitMediaFalsePositiveActionCreators.tsx";
import getFpMessageInfo from "ExplicitMediaStore.tsx";
import { EXPLICIT_MEDIA_SENDER_FALSE_POSITIVE_ACTION_SHEET_KEY as closure_4 } from "ExplicitMediaRedactionConstants.tsx";

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