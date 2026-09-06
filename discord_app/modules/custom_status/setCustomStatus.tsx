// discord_app/modules/custom_status/setCustomStatus.tsx
import Constants from "../../Constants.tsx";
import AnalyticsUtilsDefault from "../../utils/AnalyticsUtils.tsx";
import UserSettings from "../user_settings/UserSettings.tsx";
import _modDef4153 from "../../../_runtime/metro/04153__.js";
import Constants2 from "Constants.tsx";
import getClearAfterDurationDefault from "utils/getClearAfterDuration.tsx";
import size from "../../../_runtime/metro/00002__.js";

const ClearAfterValues = Constants2.ClearAfterValues;
const AnalyticEvents = Constants.AnalyticEvents;
const result = size.fileFinishedImporting("modules/custom_status/setCustomStatus.tsx");

export default function setCustomStatus(arg0) {
  ({ text, emojiInfo, clearAfter, analyticsContext, createdAtMs, prompt: _prompt, analyticsLocations } = arg0);
  const trimmed = text.trim();
  if (trimmed.length <= 0) {
    if (null == emojiInfo) {
      const CustomStatusSetting = UserSettings.CustomStatusSetting;
      return CustomStatusSetting.updateSetting(undefined);
    }
  }
  const CustomStatusSetting2 = UserSettings.CustomStatusSetting;
  let str = "";
  if (trimmed.length > 0) {
    str = trimmed;
  }
  let obj = { text: str, expiresAtMs: null, emojiId: null, emojiName: null, createdAtMs: null };
  let str2 = "0";
  if (null != clearAfter) {
    str2 = "0";
    if (clearAfter !== ClearAfterValues.DONT_CLEAR) {
      const _String = String;
      const obj2 = _modDef4153();
      const addResult = _modDef4153().add(getClearAfterDurationDefault(clearAfter), "ms");
      str2 = String(_modDef4153().add(getClearAfterDurationDefault(clearAfter), "ms").toDate().getTime());
      const toDateResult = _modDef4153().add(getClearAfterDurationDefault(clearAfter), "ms").toDate();
    }
  }
  obj.expiresAtMs = str2;
  let str4 = "0";
  if (null != emojiInfo) {
    str4 = "0";
    if (null != emojiInfo.id) {
      str4 = emojiInfo.id;
    }
  }
  obj.emojiId = str4;
  let str5 = "";
  if (null != emojiInfo) {
    str5 = emojiInfo.name;
  }
  obj.emojiName = str5;
  if (createdAtMs == null) {
    const obj5 = _modDef4153();
    createdAtMs = _modDef4153().toDate().getTime();
    const toDateResult1 = _modDef4153().toDate();
  }
  obj.createdAtMs = String(createdAtMs);
  const updateSettingResult = CustomStatusSetting2.updateSetting(obj);
  let _location = null;
  if (null != analyticsContext) {
    _location = analyticsContext.location;
  }
  obj = {
    location: _location,
    emoji_type: null,
    text_len: null,
    clear_after: null,
    prompt_type: null,
    location_stack: null,
  };
  let tmp11 = null;
  if (null != emojiInfo) {
    let str6 = "unicode";
    if (null != emojiInfo.id) {
      str6 = "custom";
    }
    tmp11 = str6;
  }
  obj.emoji_type = tmp11;
  obj.text_len = trimmed.length;
  let combined = null;
  if (null != clearAfter) {
    const _HermesInternal = HermesInternal;
    combined = "" + clearAfter;
  }
  obj.clear_after = combined;
  value = undefined;
  if (_prompt != null) {
    value = _prompt.value;
  }
  obj.prompt_type = value;
  obj.location_stack = analyticsLocations;
  AnalyticsUtilsDefault.track(AnalyticEvents.CUSTOM_STATUS_UPDATED, obj);
  return updateSettingResult;
}
