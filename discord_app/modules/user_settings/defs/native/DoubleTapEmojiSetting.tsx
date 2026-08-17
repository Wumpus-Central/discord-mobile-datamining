// discord_app/modules/user_settings/defs/native/DoubleTapEmojiSetting.tsx
import noopAll from "../../../../../_runtime/00019_noop.js";
import ThemesDefault from "../../../../../discord_common/js/packages/tokens/native.tsx";
import getSystemLocale from "../../../../intl/index.native.tsx";
import getAvatarURLDefault from "../../../../utils/AvatarUtils.tsx";
import explicitContentFromProto from "../../UserSettings.tsx";
import EmojiDefault from "../../../emojis/native/Emoji.tsx";
import getFallbackDoubleTapDisambiguatedEmoji from "../../../double_tap_to_react/native/DoubleTapToReactUtils.tsx";
import closure_3 from "../../../../../_runtime/00005_asyncGeneratorStep.js";
import { AnalyticEvents } from "../../../../Constants.tsx";
import { EmojiIntention } from "../../../emojis/EmojiConstants.tsx";
import { jsx } from "../../../../../_runtime/react/00021_jsxProd.js";
import createCacheKey from "../../../../design/components/Styles/native/createStyles.tsx";
import createToggle from "../../../settings/native/renderer/SettingBuilders.tsx";
import { EMOJI_PICKER_ACTION_SHEET_KEY } from "../../../emoji_picker/native/openEmojiPickerActionSheet.tsx";

require = arg1;
function SettingsEmoji(emoji) {
  emoji = emoji.emoji;
  if (null != emoji.id) {
    let obj = getAvatarURLDefault;
    obj = { id: null, size: 24, animated: false };
    obj[0] = emoji.id;
    let url = obj.getEmojiURL(obj);
  } else {
    url = emoji.url;
  }
  obj = { fastImageStyle: { height: 24, width: 24 }, src: url, name: null, adjustsFontSizeToFit: true, textEmojiStyle: null };
  let str = "";
  const tmp = callback2();
  const tmp4 = jsx;
  if (null == emoji.id) {
    str = emoji.surrogates;
  }
  obj[2] = str;
  obj[4] = tmp.textEmoji;
  return tmp4(EmojiDefault, obj);
}
noopAll;
createCacheKey = { textEmoji: null };
createCacheKey = { color: ThemesDefault.colors.INTERACTIVE_TEXT_DEFAULT };
createCacheKey[0] = createCacheKey;
let closure_7 = createCacheKey.createStyles(createCacheKey);
const pressable = createToggle.createPressable({
  useTitle() {
    const intl = getSystemLocale.intl;
    return intl.string(getSystemLocale.t["96WKNB"]);
  },
  parent: require("MobileUserSettings").MobileUserSettings.CHAT,
  useTrailing: function useDoubleTapEmojiSettingTrailing() {
    const DoubleTapReactionEmoji = explicitContentFromProto.DoubleTapReactionEmoji;
    const setting = DoubleTapReactionEmoji.useSetting();
    let obj = getFallbackDoubleTapDisambiguatedEmoji;
    const result = obj.disambiguatedEmojiFromSettingsValue(setting);
    const fallbackDoubleTapDisambiguatedEmoji = getFallbackDoubleTapDisambiguatedEmoji.getFallbackDoubleTapDisambiguatedEmoji();
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
      closure_0 = arg0;
      c3 = 0;
      c4 = 0;
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
            return { value: "HermesInternal", done: "HermesInternal" };
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
                closure_2 = tmp5;
                closure_1 = tmp2;
                obj1 = { emoji_id: null, emoji_name: null, emoji_animated: null, recommended: false, location: null };
                ({ id: obj8[0], name: obj8[1], animated: obj8[2] } = callback);
                obj1[4] = closure_1_1(closure_1_2[14]).USER_SETTINGS;
                closure_1_1(closure_1_2[13]).track(constants.DOUBLE_TAP_REACT_EMOJI_UPDATED, obj1);
                const DoubleTapReactionEmoji = callback(closure_1_2[8]).DoubleTapReactionEmoji;
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
              obj = callback(closure_1_2[15]);
              const obj5 = { emoji: null };
              obj5[0] = callback;
              const result = obj.showDoubleTapEmojiUpdatedToast(obj5);
              constants = 3;
              return { value: "HermesInternal", done: "HermesInternal" };
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
    const DoubleTapReactionEmoji = explicitContentFromProto.DoubleTapReactionEmoji;
    const setting = DoubleTapReactionEmoji.useSetting();
    const result = getFallbackDoubleTapDisambiguatedEmoji.disambiguatedEmojiFromSettingsValue(setting);
    let combined = null;
    if (null != result) {
      const _HermesInternal = HermesInternal;
      combined = ":" + result.name + ":";
    }
    return combined;
  },
  useIsDisabled: function useDoubleTapDisabled() {
    const DoubleTapReactionEmoji = explicitContentFromProto.DoubleTapReactionEmoji;
    let flag = DoubleTapReactionEmoji.useSetting().disableDoubleTap;
    if (flag == null) {
      flag = false;
    }
    return flag;
  },
  usePredicate: function useShouldShowSetting() {
    const DoubleTapReactionEmoji = explicitContentFromProto.DoubleTapReactionEmoji;
    let flag = DoubleTapReactionEmoji.useSetting().disableDoubleTap;
    if (flag == null) {
      flag = false;
    }
    return !flag;
  }
});
let obj1 = {
  useTitle() {
    const intl = getSystemLocale.intl;
    return intl.string(getSystemLocale.t["96WKNB"]);
  },
  parent: require("MobileUserSettings").MobileUserSettings.CHAT,
  useTrailing: function useDoubleTapEmojiSettingTrailing() {
    const DoubleTapReactionEmoji = explicitContentFromProto.DoubleTapReactionEmoji;
    const setting = DoubleTapReactionEmoji.useSetting();
    let obj = getFallbackDoubleTapDisambiguatedEmoji;
    const result = obj.disambiguatedEmojiFromSettingsValue(setting);
    const fallbackDoubleTapDisambiguatedEmoji = getFallbackDoubleTapDisambiguatedEmoji.getFallbackDoubleTapDisambiguatedEmoji();
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
      closure_0 = arg0;
      c3 = 0;
      c4 = 0;
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
            return { value: "HermesInternal", done: "HermesInternal" };
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
                closure_2 = tmp5;
                closure_1 = tmp2;
                obj1 = { emoji_id: null, emoji_name: null, emoji_animated: null, recommended: false, location: null };
                ({ id: obj8[0], name: obj8[1], animated: obj8[2] } = callback);
                obj1[4] = closure_1_1(closure_1_2[14]).USER_SETTINGS;
                closure_1_1(closure_1_2[13]).track(constants.DOUBLE_TAP_REACT_EMOJI_UPDATED, obj1);
                const DoubleTapReactionEmoji = callback(closure_1_2[8]).DoubleTapReactionEmoji;
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
              obj = callback(closure_1_2[15]);
              const obj5 = { emoji: null };
              obj5[0] = callback;
              const result = obj.showDoubleTapEmojiUpdatedToast(obj5);
              constants = 3;
              return { value: "HermesInternal", done: "HermesInternal" };
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
    const DoubleTapReactionEmoji = explicitContentFromProto.DoubleTapReactionEmoji;
    const setting = DoubleTapReactionEmoji.useSetting();
    const result = getFallbackDoubleTapDisambiguatedEmoji.disambiguatedEmojiFromSettingsValue(setting);
    let combined = null;
    if (null != result) {
      const _HermesInternal = HermesInternal;
      combined = ":" + result.name + ":";
    }
    return combined;
  },
  useIsDisabled: function useDoubleTapDisabled() {
    const DoubleTapReactionEmoji = explicitContentFromProto.DoubleTapReactionEmoji;
    let flag = DoubleTapReactionEmoji.useSetting().disableDoubleTap;
    if (flag == null) {
      flag = false;
    }
    return flag;
  },
  usePredicate: function useShouldShowSetting() {
    const DoubleTapReactionEmoji = explicitContentFromProto.DoubleTapReactionEmoji;
    let flag = DoubleTapReactionEmoji.useSetting().disableDoubleTap;
    if (flag == null) {
      flag = false;
    }
    return !flag;
  }
};
let result = require("set").fileFinishedImporting("modules/user_settings/defs/native/DoubleTapEmojiSetting.tsx");

export default pressable;