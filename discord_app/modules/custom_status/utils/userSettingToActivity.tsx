// discord_app/modules/custom_status/utils/userSettingToActivity.tsx
import react from "../../../../_runtime/00019_react.js";
import Constants from "../../../Constants.tsx";
import UnicodeEmojisDefault from "../../emojis/UnicodeEmojis.tsx";
import EmojiStore from "../../emojis/EmojiStore.tsx";
import ReactCompilerGating from "../../react_compiler/ReactCompilerGating.tsx";
import size from "../../../../_runtime/metro/00002__.js";

function _activityFromSetting(setting, stateFromStores) {
  let text;
  let tmp;
  let tmp6;
  if (null != stateFromStores) {
    const obj3 = { id: null, name: null, animated: null };
    ({ id: obj2.id, name: obj2.name, animated: obj2.animated } = stateFromStores);
    tmp = obj3;
  } else {
    tmp = null;
    if (null != setting.emojiName) {
      tmp = null;
      if ("" !== setting.emojiName) {
        const getByName = UnicodeEmojisDefault.getByName;
        UnicodeEmojisDefault;
        const obj5 = UnicodeEmojisDefault;
        const byName = getByName(obj5.convertSurrogateToName(setting.emojiName, false));
        let tmp2 = null;
        if (null != byName) {
          tmp2 = { id: null, name: byName.surrogates, animated: false };
          const obj = { id: null, name: byName.surrogates, animated: false };
        }
        tmp = tmp2;
      }
    }
  }
  const NumberResult = Number(setting.expiresAtMs);
  let value;
  if (setting.label != null) {
    value = iter.value;
  }
  const obj4 = {
    name: "Custom Status",
    type: ActivityTypes.CUSTOM_STATUS,
    state: text,
    timestamps: tmp6,
    emoji: tmp,
    details: value,
    metadata: { label: value },
  };
  text = undefined;
  if (setting.text.length > 0) {
    text = setting.text;
  }
  tmp6 = undefined;
  if (NumberResult > 0) {
    tmp6 = { end: NumberResult };
    const obj8 = { end: NumberResult };
  }
  return obj4;
}
const useMemo = react.useMemo;
const ActivityTypes = Constants.ActivityTypes;
let tmp2 = ReactCompilerGating.isReactCompilerEnabled()
  ? () => {
      let emojiId;
      let first;
      let tmp8;
      let tmp9;
      const obj = emojiId(576);
      const cResult = obj.c(7);
      const CustomStatusSetting = emojiId(2028).CustomStatusSetting;
      const setting = CustomStatusSetting.useSetting();
      const tmp = emojiId;
      emojiId = undefined;
      if (setting != null) {
        emojiId = setting.emojiId;
      }
      if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
        const items = [EmojiStore];
        cResult[0] = items;
        first = items;
      } else {
        first = cResult[0];
      }
      if (cResult[1] !== emojiId) {
        const fn = function n() {
          let usableCustomEmojiById = null;
          if (null != emojiId) {
            usableCustomEmojiById = null;
            if ("0" !== emojiId) {
              usableCustomEmojiById = EmojiStore.getUsableCustomEmojiById(emojiId);
            }
          }
          return usableCustomEmojiById;
        };
        const items1 = [emojiId];
        cResult[1] = emojiId;
        cResult[2] = fn;
        cResult[3] = items1;
        tmp9 = items1;
        tmp8 = fn;
      } else {
        tmp8 = cResult[2];
        tmp9 = cResult[3];
      }
      const tmpResult = tmp(504);
      const stateFromStores = tmpResult.useStateFromStores(first, tmp8, tmp9);
      if (cResult[4] === stateFromStores) {
        let tmp11;
        if (cResult[5] === setting) {
          tmp11 = cResult[6];
        }
        return tmp11;
      }
      let tmp12 = null;
      if (null != setting) {
        tmp12 = _activityFromSetting(setting, stateFromStores);
      }
      cResult[4] = stateFromStores;
      cResult[5] = setting;
      cResult[6] = tmp12;
      tmp11 = tmp12;
    }
  : () => {
      let setting;
      let stateFromStores;
      const tmp = setting;
      let tmp2 = stateFromStores;
      const CustomStatusSetting = setting(stateFromStores[6]).CustomStatusSetting;
      setting = CustomStatusSetting.useSetting();
      let emojiId;
      if (setting != null) {
        emojiId = setting.emojiId;
      }
      const items = [EmojiStore];
      const items1 = [emojiId];
      const tmpResult = tmp(tmp2[7]);
      stateFromStores = tmpResult.useStateFromStores(
        items,
        () => {
          let usableCustomEmojiById = null;
          if (null != emojiId) {
            usableCustomEmojiById = null;
            if ("0" !== emojiId) {
              usableCustomEmojiById = EmojiStore.getUsableCustomEmojiById(emojiId);
            }
          }
          return usableCustomEmojiById;
        },
        items1,
      );
      const items2 = [setting, stateFromStores];
      return useMemo(() => {
        let tmp2 = null;
        if (null != setting) {
          tmp2 = _activityFromSetting(tmp, stateFromStores);
        }
        return tmp2;
      }, items2);
    };
const result = size.fileFinishedImporting("modules/custom_status/utils/userSettingToActivity.tsx");

export const getActivityFromCustomStatus = function getActivityFromCustomStatus(setting) {
  const emojiId = setting.emojiId;
  let usableCustomEmojiById = null;
  if (null != emojiId) {
    usableCustomEmojiById = null;
    if ("0" !== emojiId) {
      usableCustomEmojiById = EmojiStore.getUsableCustomEmojiById(emojiId);
    }
  }
  return _activityFromSetting(setting, usableCustomEmojiById);
};
export const useCustomStatusActivity = tmp2;
