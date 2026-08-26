// discord_app/modules/custom_status/setCustomStatus.tsx
import set from "../../../_runtime/00002_set.js";
import ME from "../../Constants.tsx";
import expandEventPropertiesDefault from "../../utils/AnalyticsUtils.tsx";
import hooksDefault from "../../../_runtime/04043_hooks.js";
import explicitContentFromProto from "../user_settings/UserSettings.tsx";
import StatusTypes from "Constants.tsx";
import getClearAfterDurationDefault from "utils/getClearAfterDuration.tsx";

const ClearAfterValues = StatusTypes.ClearAfterValues;
const AnalyticEvents = ME.AnalyticEvents;
const result = set.fileFinishedImporting("modules/custom_status/setCustomStatus.tsx");

export default function setCustomStatus(arg0) {
  ({ text, emojiInfo, clearAfter, analyticsContext, createdAtMs, prompt: _prompt, analyticsLocations } = arg0);
  const trimmed = text.trim();
  if (trimmed.length <= 0) {
    if (null == emojiInfo) {
      const CustomStatusSetting = explicitContentFromProto.CustomStatusSetting;
      return CustomStatusSetting.updateSetting(undefined);
    }
  }
  const CustomStatusSetting2 = explicitContentFromProto.CustomStatusSetting;
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
      const obj2 = hooksDefault();
      const addResult = hooksDefault().add(getClearAfterDurationDefault(clearAfter), "ms");
      str2 = String(hooksDefault().add(getClearAfterDurationDefault(clearAfter), "ms").toDate().getTime());
      const toDateResult = hooksDefault().add(getClearAfterDurationDefault(clearAfter), "ms").toDate();
    }
  }
  obj[1] = str2;
  let str4 = "0";
  if (null != emojiInfo) {
    str4 = "0";
    if (null != emojiInfo.id) {
      str4 = emojiInfo.id;
    }
  }
  obj[2] = str4;
  let str5 = "";
  if (null != emojiInfo) {
    str5 = emojiInfo.name;
  }
  obj[3] = str5;
  if (createdAtMs == null) {
    const obj5 = hooksDefault();
    createdAtMs = hooksDefault().toDate().getTime();
    const toDateResult1 = hooksDefault().toDate();
  }
  obj[4] = String(createdAtMs);
  const updateSettingResult = CustomStatusSetting2.updateSetting(obj);
  let _location = null;
  if (null != analyticsContext) {
    _location = analyticsContext.location;
  }
  obj = { location: _location, emoji_type: null, text_len: null, clear_after: null, prompt_type: null, location_stack: null };
  let tmp11 = null;
  if (null != emojiInfo) {
    let str6 = "unicode";
    if (null != emojiInfo.id) {
      str6 = "custom";
    }
    tmp11 = str6;
  }
  obj[1] = tmp11;
  obj[2] = trimmed.length;
  let combined = null;
  if (null != clearAfter) {
    const _HermesInternal = HermesInternal;
    combined = "" + clearAfter;
  }
  obj[3] = combined;
  let value;
  if (_prompt != null) {
    value = _prompt.value;
  }
  obj[4] = value;
  obj[5] = analyticsLocations;
  expandEventPropertiesDefault.track(AnalyticEvents.CUSTOM_STATUS_UPDATED, obj);
  return updateSettingResult;
};