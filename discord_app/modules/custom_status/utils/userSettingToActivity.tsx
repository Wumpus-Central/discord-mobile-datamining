// === Module 11110: _activityFromSetting ===

// Module 11110 (_activityFromSetting)
import set from "set" /* 2 */;
import noop from "noop" /* 19 */;
import ME from "ME" /* 1074 */;
import parseRawEmojiObjectDefault from "parseRawEmojiObject" /* 4213 */;
import closure_4 from "getEmojiToGroupId" /* 5459 */;

function _activityFromSetting(emojiName) {
  if (null != arg1) {
    let obj = { id: null, name: null, animated: null };
    ({ id: obj2[0], name: obj2[1], animated: obj2[2] } = arg1);
    let tmp = obj;
  } else {
    tmp = null;
    if (null != emojiName.emojiName) {
      tmp = null;
      if ("" !== emojiName.emojiName) {
        const obj5 = parseRawEmojiObjectDefault;
        const byName = obj5.getByName(parseRawEmojiObjectDefault.convertSurrogateToName(emojiName.emojiName, false));
        let tmp2 = null;
        if (null != byName) {
          obj = { id: null, name: null, animated: false };
          obj[1] = byName.surrogates;
          tmp2 = obj;
        }
        tmp = tmp2;
        const obj6 = parseRawEmojiObjectDefault;
      }
    }
  }
  const NumberResult = Number(emojiName.expiresAtMs);
  let value;
  if (emojiName.label != null) {
    value = iter.value;
  }
  obj = { name: "Custom Status", type: ActivityTypes.CUSTOM_STATUS, state: null, timestamps: null, emoji: null, details: null, metadata: null };
  let text;
  if (emojiName.text.length > 0) {
    text = emojiName.text;
  }
  obj[2] = text;
  let tmp6;
  if (NumberResult > 0) {
    obj1 = { end: null };
    obj1[0] = NumberResult;
    tmp6 = obj1;
  }
  obj[3] = tmp6;
  obj[4] = tmp;
  obj[5] = value;
  obj[6] = { label: value };
  return obj;
}
const useMemo = noop.useMemo;
const ActivityTypes = ME.ActivityTypes;
const result = set.fileFinishedImporting("modules/custom_status/utils/userSettingToActivity.tsx");

export const getActivityFromCustomStatus = function getActivityFromCustomStatus(setting) {
  const emojiId = setting.emojiId;
  let usableCustomEmojiById = null;
  if (null != emojiId) {
    usableCustomEmojiById = null;
    if ("0" !== emojiId) {
      usableCustomEmojiById = usableCustomEmojiById.getUsableCustomEmojiById(emojiId);
    }
  }
  return _activityFromSetting(setting, usableCustomEmojiById);
};
export const useCustomStatusActivity = function useCustomStatusActivity() {
  const CustomStatusSetting = setting(stateFromStores[4]).CustomStatusSetting;
  setting = CustomStatusSetting.useSetting();
  let emojiId;
  if (setting != null) {
    emojiId = setting.emojiId;
  }
  const items = [closure_4];
  const items1 = [emojiId];
  stateFromStores = setting(stateFromStores[5]).useStateFromStores(items, () => {
    let usableCustomEmojiById = null;
    if (null != emojiId) {
      usableCustomEmojiById = null;
      if ("0" !== tmp) {
        usableCustomEmojiById = closure_1_4.getUsableCustomEmojiById(tmp);
      }
    }
    return usableCustomEmojiById;
  }, items1);
  const items2 = [setting, stateFromStores];
  return useMemo(() => {
    let tmp2 = null;
    if (null != setting) {
      tmp2 = closure_1_6(tmp, stateFromStores);
    }
    return tmp2;
  }, items2);
};