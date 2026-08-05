import { getSystemLocale } from "../../../../intl/index.native.tsx";
import { getAvatarURL } from "../../../../utils/AvatarUtils.tsx";
import { getFallbackDoubleTapDisambiguatedEmoji } from "../../../double_tap_to_react/native/DoubleTapToReactUtils.tsx";
import { EMOJI_PICKER_ACTION_SHEET_KEY } from "../../../emoji_picker/native/openEmojiPickerActionSheet.tsx";
import { Emoji } from "../../../emojis/native/Emoji.tsx";
import { explicitContentFromProto } from "../../UserSettings.tsx";
// discord_app/modules/user_settings/defs/native/DoubleTapEmojiSetting.tsx
import jsxProd from "jsxProd";
import "noop";
import { AnalyticEvents } from "ME";
import { EmojiIntention } from "set";
import { jsx } from "jsxProd";
import createCacheKey from "createCacheKey";
import createToggle from "createToggle";

const require = arg1;
function SettingsEmoji(emoji) {
  emoji = emoji.emoji;
  if (null != emoji.id) {
    let obj = getAvatarURL;
    obj = { id: null, size: 24, animated: false };
    obj[0] = emoji.id;
    let url = obj.getEmojiURL(obj);
  } else {
    url = emoji.url;
  }
  obj = { fastImageStyle: { height: 24, width: 24 }, src: url, name: null, adjustsFontSizeToFit: true, textEmojiStyle: null };
  let str = "";
  const tmp = createCacheKey();
  const tmp4 = jsx;
  if (null == emoji.id) {
    str = emoji.surrogates;
  }
  obj[2] = str;
  obj[4] = tmp.textEmoji;
  return tmp4(Emoji, obj);
}
createCacheKey = { textEmoji: null };
createCacheKey = { color: require("Themes").colors.INTERACTIVE_TEXT_DEFAULT };
createCacheKey[0] = createCacheKey;
createCacheKey = createCacheKey.createStyles(createCacheKey);
const pressable = createToggle.createPressable({
  useTitle() {
    const intl = getSystemLocale /* getSystemLocale */.intl;
    return intl.string(getSystemLocale /* getSystemLocale */.t["96WKNB"]);
  },
  parent: require("MobileSetting").MobileSetting.CHAT,
  useTrailing: function useDoubleTapEmojiSettingTrailing() {
    const DoubleTapReactionEmoji = explicitContentFromProto /* explicitContentFromProto */.DoubleTapReactionEmoji;
    const setting = DoubleTapReactionEmoji.useSetting();
    let obj = getFallbackDoubleTapDisambiguatedEmoji /* getFallbackDoubleTapDisambiguatedEmoji */;
    const result = obj.disambiguatedEmojiFromSettingsValue(setting);
    const fallbackDoubleTapDisambiguatedEmoji = getFallbackDoubleTapDisambiguatedEmoji /* getFallbackDoubleTapDisambiguatedEmoji */.getFallbackDoubleTapDisambiguatedEmoji();
    if (null == result) {
      if (null != fallbackDoubleTapDisambiguatedEmoji) {
        obj = { emoji: null };
        obj[0] = fallbackDoubleTapDisambiguatedEmoji;
        let tmp4 = <SettingsEmoji emoji={null} />;
      }
      return tmp4;
    }
    tmp4 = null;
    if (null != result) {
      obj = { emoji: null };
      obj[0] = result;
      tmp4 = <SettingsEmoji emoji={null} />;
    }
  },
  onPress: function onPressSetting() {
    let obj = _EMOJI_PICKER_ACTION_SHEET_KEY;
    obj = { pickerIntention: EmojiIntention.DEFAULT_REACT_EMOJI, onPressEmoji: null, startExpanded: true };
    _require = callback((arg0) => {
      let closure_0 = arg0;
      let c3 = 0;
      let c4 = 0;
      return (function*(arg0) {
        if (constants === 2) {
          constants = 3;
          HermesBuiltin.throwTypeError();
        } else if (tmp4 === 3) {
          if (arg0 === 1) {
            throw arg1;
          } else if (arg0 === 2) {
            let obj = { value: null, done: true };
            obj[0] = arg1;
            return obj;
          } else {
            return { value: "HermesInternal", done: null };
          }
        } else {
          try {
            constants = 2;
            if (0 === c3) {
              if (arg0 === 1) {
                constants = 3;
                throw arg1;
              } else if (arg0 === 2) {
                constants = 3;
                obj = { value: null, done: true };
                obj[0] = arg1;
                return obj;
              } else {
                let closure_2 = tmp5;
                let closure_1 = tmp2;
                const obj1 = { emoji_id: null, emoji_name: null, emoji_animated: null, recommended: false, location: null };
                ({ id: obj8[0], name: obj8[1], animated: obj8[2] } = callback);
                obj1[4] = outer1_1(outer1_2[14]).USER_SETTINGS;
                outer1_1(outer1_2[13]).track(constants.DOUBLE_TAP_REACT_EMOJI_UPDATED, obj1);
                const DoubleTapReactionEmoji = callback(outer1_2[8]).DoubleTapReactionEmoji;
                ({ id: obj9[0], name: obj9[1], animated: obj9[2] } = callback);
                c3 = 1;
                constants = 1;
                const obj3 = { value: null, done: false };
                obj3[0] = DoubleTapReactionEmoji.updateSetting({ emojiId: null, emojiName: null, animated: null, disableDoubleTap: false });
                return obj3;
              }
            } else if (arg0 === 1) {
              constants = 3;
              throw arg1;
            } else if (arg0 === 2) {
              constants = 3;
              const obj4 = { value: null, done: true };
              obj4[0] = arg1;
              return obj4;
            } else {
              obj = callback(outer1_2[15]);
              const obj5 = { emoji: null };
              obj5[0] = callback;
              const result = obj.showDoubleTapEmojiUpdatedToast(obj5);
              constants = 3;
              return { value: "HermesInternal", done: null };
            }
          } catch (tmp12) {
            constants = tmp;
            throw tmp12;
          }
        }
      })();
    });
    obj[1] = function() {
      const self = this;
      const apply = closure_0.apply;
      if (typeof apply === "unknown") {
        let applyArgumentsResult = HermesBuiltin.applyArguments(self);
      } else {
        applyArgumentsResult = apply(self, arguments);
      }
      return applyArgumentsResult;
    };
    let result = obj.openEmojiPickerActionSheet(obj);
  },
  withArrow: true,
  useDescription: function useDoubleTapEmojiDescription() {
    const DoubleTapReactionEmoji = explicitContentFromProto /* explicitContentFromProto */.DoubleTapReactionEmoji;
    const setting = DoubleTapReactionEmoji.useSetting();
    const result = getFallbackDoubleTapDisambiguatedEmoji /* getFallbackDoubleTapDisambiguatedEmoji */.disambiguatedEmojiFromSettingsValue(setting);
    let combined = null;
    if (null != result) {
      const _HermesInternal = HermesInternal;
      combined = ":" + result.name + ":";
    }
    return combined;
  },
  useIsDisabled: function useDoubleTapDisabled() {
    const DoubleTapReactionEmoji = explicitContentFromProto /* explicitContentFromProto */.DoubleTapReactionEmoji;
    let flag = DoubleTapReactionEmoji.useSetting().disableDoubleTap;
    if (flag == null) {
      flag = false;
    }
    return flag;
  },
  usePredicate: function useShouldShowSetting() {
    const DoubleTapReactionEmoji = explicitContentFromProto /* explicitContentFromProto */.DoubleTapReactionEmoji;
    let flag = DoubleTapReactionEmoji.useSetting().disableDoubleTap;
    if (flag == null) {
      flag = false;
    }
    return !flag;
  }
});
let obj1 = {
  useTitle() {
    const intl = getSystemLocale /* getSystemLocale */.intl;
    return intl.string(getSystemLocale /* getSystemLocale */.t["96WKNB"]);
  },
  parent: require("MobileSetting").MobileSetting.CHAT,
  useTrailing: function useDoubleTapEmojiSettingTrailing() {
    const DoubleTapReactionEmoji = explicitContentFromProto /* explicitContentFromProto */.DoubleTapReactionEmoji;
    const setting = DoubleTapReactionEmoji.useSetting();
    let obj = getFallbackDoubleTapDisambiguatedEmoji /* getFallbackDoubleTapDisambiguatedEmoji */;
    const result = obj.disambiguatedEmojiFromSettingsValue(setting);
    const fallbackDoubleTapDisambiguatedEmoji = getFallbackDoubleTapDisambiguatedEmoji /* getFallbackDoubleTapDisambiguatedEmoji */.getFallbackDoubleTapDisambiguatedEmoji();
    if (null == result) {
      if (null != fallbackDoubleTapDisambiguatedEmoji) {
        obj = { emoji: null };
        obj[0] = fallbackDoubleTapDisambiguatedEmoji;
        let tmp4 = <SettingsEmoji emoji={null} />;
      }
      return tmp4;
    }
    tmp4 = null;
    if (null != result) {
      obj = { emoji: null };
      obj[0] = result;
      tmp4 = <SettingsEmoji emoji={null} />;
    }
  },
  onPress: function onPressSetting() {
    let obj = _EMOJI_PICKER_ACTION_SHEET_KEY;
    obj = { pickerIntention: EmojiIntention.DEFAULT_REACT_EMOJI, onPressEmoji: null, startExpanded: true };
    _require = callback((arg0) => {
      let closure_0 = arg0;
      let c3 = 0;
      let c4 = 0;
      return (function*(arg0) {
        if (constants === 2) {
          constants = 3;
          HermesBuiltin.throwTypeError();
        } else if (tmp4 === 3) {
          if (arg0 === 1) {
            throw arg1;
          } else if (arg0 === 2) {
            let obj = { value: null, done: true };
            obj[0] = arg1;
            return obj;
          } else {
            return { value: "HermesInternal", done: null };
          }
        } else {
          try {
            constants = 2;
            if (0 === c3) {
              if (arg0 === 1) {
                constants = 3;
                throw arg1;
              } else if (arg0 === 2) {
                constants = 3;
                obj = { value: null, done: true };
                obj[0] = arg1;
                return obj;
              } else {
                let closure_2 = tmp5;
                let closure_1 = tmp2;
                const obj1 = { emoji_id: null, emoji_name: null, emoji_animated: null, recommended: false, location: null };
                ({ id: obj8[0], name: obj8[1], animated: obj8[2] } = callback);
                obj1[4] = outer1_1(outer1_2[14]).USER_SETTINGS;
                outer1_1(outer1_2[13]).track(constants.DOUBLE_TAP_REACT_EMOJI_UPDATED, obj1);
                const DoubleTapReactionEmoji = callback(outer1_2[8]).DoubleTapReactionEmoji;
                ({ id: obj9[0], name: obj9[1], animated: obj9[2] } = callback);
                c3 = 1;
                constants = 1;
                const obj3 = { value: null, done: false };
                obj3[0] = DoubleTapReactionEmoji.updateSetting({ emojiId: null, emojiName: null, animated: null, disableDoubleTap: false });
                return obj3;
              }
            } else if (arg0 === 1) {
              constants = 3;
              throw arg1;
            } else if (arg0 === 2) {
              constants = 3;
              const obj4 = { value: null, done: true };
              obj4[0] = arg1;
              return obj4;
            } else {
              obj = callback(outer1_2[15]);
              const obj5 = { emoji: null };
              obj5[0] = callback;
              const result = obj.showDoubleTapEmojiUpdatedToast(obj5);
              constants = 3;
              return { value: "HermesInternal", done: null };
            }
          } catch (tmp12) {
            constants = tmp;
            throw tmp12;
          }
        }
      })();
    });
    obj[1] = function() {
      const self = this;
      const apply = closure_0.apply;
      if (typeof apply === "unknown") {
        let applyArgumentsResult = HermesBuiltin.applyArguments(self);
      } else {
        applyArgumentsResult = apply(self, arguments);
      }
      return applyArgumentsResult;
    };
    let result = obj.openEmojiPickerActionSheet(obj);
  },
  withArrow: true,
  useDescription: function useDoubleTapEmojiDescription() {
    const DoubleTapReactionEmoji = explicitContentFromProto /* explicitContentFromProto */.DoubleTapReactionEmoji;
    const setting = DoubleTapReactionEmoji.useSetting();
    const result = getFallbackDoubleTapDisambiguatedEmoji /* getFallbackDoubleTapDisambiguatedEmoji */.disambiguatedEmojiFromSettingsValue(setting);
    let combined = null;
    if (null != result) {
      const _HermesInternal = HermesInternal;
      combined = ":" + result.name + ":";
    }
    return combined;
  },
  useIsDisabled: function useDoubleTapDisabled() {
    const DoubleTapReactionEmoji = explicitContentFromProto /* explicitContentFromProto */.DoubleTapReactionEmoji;
    let flag = DoubleTapReactionEmoji.useSetting().disableDoubleTap;
    if (flag == null) {
      flag = false;
    }
    return flag;
  },
  usePredicate: function useShouldShowSetting() {
    const DoubleTapReactionEmoji = explicitContentFromProto /* explicitContentFromProto */.DoubleTapReactionEmoji;
    let flag = DoubleTapReactionEmoji.useSetting().disableDoubleTap;
    if (flag == null) {
      flag = false;
    }
    return !flag;
  }
};
let result = require("MobileSetting").fileFinishedImporting("modules/user_settings/defs/native/DoubleTapEmojiSetting.tsx");

export default pressable;