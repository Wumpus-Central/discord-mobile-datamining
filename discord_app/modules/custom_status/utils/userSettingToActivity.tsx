// discord_app/modules/custom_status/utils/userSettingToActivity.tsx
import _mod19 from "../../../../_runtime/metro/00019__.js";
import Constants from "../../../Constants.tsx";
import UnicodeEmojisDefault from "../../emojis/UnicodeEmojis.tsx";
import EmojiStore from "../../emojis/EmojiStore.tsx";
import ReactCompilerGating from "../../react_compiler/ReactCompilerGating.tsx";
import size from "../../../../_runtime/metro/00002__.js";

function _activityFromSetting(setting, stateFromStores) {
  if (null != stateFromStores) {
    ({ id: obj2.id, name: obj2.name, animated: obj2.animated } = stateFromStores);
    let tmp = { id: null, name: null, animated: null };
    const obj3 = { id: null, name: null, animated: null };
  } else {
    tmp = null;
    if (null != setting.emojiName) {
      tmp = null;
      if ("" !== setting.emojiName) {
        const obj5 = UnicodeEmojisDefault;
        const byName = obj5.getByName(UnicodeEmojisDefault.convertSurrogateToName(setting.emojiName, false));
        let tmp2 = null;
        if (null != byName) {
          const obj = { id: null, name: byName.surrogates, animated: false };
          tmp2 = obj;
        }
        tmp = tmp2;
      }
    }
  }
  const NumberResult = Number(setting.expiresAtMs);
  value = undefined;
  if (setting.label != null) {
    value = iter.value;
  }
  const obj4 = {
    name: "Custom Status",
    type: ActivityTypes.CUSTOM_STATUS,
    state: null,
    timestamps: null,
    emoji: null,
    details: null,
    metadata: null,
  };
  let text;
  if (setting.text.length > 0) {
    text = setting.text;
  }
  obj4.state = text;
  let tmp6;
  if (NumberResult > 0) {
    const obj9 = { end: NumberResult };
    tmp6 = obj9;
  }
  obj4.timestamps = tmp6;
  obj4.emoji = tmp;
  obj4.details = value;
  obj4.metadata = { label: value };
  return obj4;
}
const useMemo = _mod19.useMemo;
const ActivityTypes = Constants.ActivityTypes;
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
export const useCustomStatusActivity = ReactCompilerGating.isReactCompilerEnabled()
  ? function useCustomStatusActivity() {
      const cResult = emojiId(576).c(7);
      const CustomStatusSetting = emojiId(2040).CustomStatusSetting;
      const setting = CustomStatusSetting.useSetting();
      emojiId = undefined;
      if (setting != null) {
        emojiId = setting.emojiId;
      }
      if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
        const items = [EmojiStore];
        cResult[0] = items;
        let first = items;
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
        let tmp9 = items1;
        let tmp8 = fn;
      } else {
        tmp8 = cResult[2];
        tmp9 = cResult[3];
      }
      const obj = emojiId(576);
      const stateFromStores = emojiId(504).useStateFromStores(first, tmp8, tmp9);
      if (cResult[4] === stateFromStores) {
        if (cResult[5] === setting) {
          let tmp11 = cResult[6];
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
      const tmpResult = emojiId(504);
    }
  : function useCustomStatusActivity() {
      const CustomStatusSetting = setting(stateFromStores[6]).CustomStatusSetting;
      setting = CustomStatusSetting.useSetting();
      let emojiId;
      if (setting != null) {
        emojiId = setting.emojiId;
      }
      const items = [EmojiStore];
      const items1 = [emojiId];
      stateFromStores = setting(stateFromStores[7]).useStateFromStores(
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
