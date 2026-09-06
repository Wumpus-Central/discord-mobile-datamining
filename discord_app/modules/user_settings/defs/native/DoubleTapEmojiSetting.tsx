// === Module 15888: DoubleTapEmojiSetting ===

// Module 15888 (DoubleTapEmojiSetting)
import nativeDefault from "native" /* 576 */;
import util from "util" /* 1114 */;
import AvatarUtilsDefault from "AvatarUtils" /* 1396 */;
import UserSettings from "UserSettings" /* 1935 */;
import EmojiDefault from "Emoji" /* 7130 */;
import DoubleTapToReactUtils from "DoubleTapToReactUtils" /* 7968 */;
import asyncGeneratorStep from "asyncGeneratorStep" /* 5 */;
import noop from "module_19" /* 19 */;

require = fn;
function SettingsEmoji(emoji) {
  emoji = emoji.emoji;
  if (null != emoji.id) {
    let obj = { id: emoji.id, size: 24, animated: false };
    let url = obj.getEmojiURL(obj);
  } else {
    url = emoji.url;
  }
  obj = { fastImageStyle: { height: 24, width: 24 }, src: url, name: null, adjustsFontSizeToFit: true, textEmojiStyle: null };
  let str = "";
  const tmp = closure_7();
  const tmp4 = jsx;
  if (null == emoji.id) {
    str = emoji.surrogates;
  }
  obj.name = str;
  obj.textEmojiStyle = tmp.textEmoji;
  return tmp4(EmojiDefault, obj);
}
const AnalyticEvents = fn(1074).AnalyticEvents;
const EmojiIntention = fn(1374).EmojiIntention;
const jsx = fn(21).jsx;
fn(4560);
let createStyles = { textEmoji: null };
createStyles = { color: nativeDefault.colors.INTERACTIVE_TEXT_DEFAULT };
createStyles.textEmoji = createStyles;
let closure_7 = createStyles.createStyles(createStyles);
const SettingBuilders = fn(11468);
const pressable = SettingBuilders.createPressable({
  useTitle() {
    const intl = util.intl;
    return intl.string(util.t["96WKNB"]);
  },
  parent: fn(7975).MobileUserSettings.CHAT,
  useTrailing: function useDoubleTapEmojiSettingTrailing() {
    const DoubleTapReactionEmoji = UserSettings.DoubleTapReactionEmoji;
    const setting = DoubleTapReactionEmoji.useSetting();
    let obj = DoubleTapToReactUtils;
    const result = obj.disambiguatedEmojiFromSettingsValue(setting);
    const fallbackDoubleTapDisambiguatedEmoji = DoubleTapToReactUtils.getFallbackDoubleTapDisambiguatedEmoji();
    if (null == result) {
      if (null != fallbackDoubleTapDisambiguatedEmoji) {
        obj = { emoji: fallbackDoubleTapDisambiguatedEmoji };
        let tmp4 = <SettingsEmoji emoji={fallbackDoubleTapDisambiguatedEmoji} />;
      }
      return tmp4;
    }
    tmp4 = null;
    if (null != result) {
      obj = { emoji: result };
      tmp4 = <SettingsEmoji emoji={result} />;
    }
  },
  onPress: function onPressSetting() {
    require("openEmojiPickerActionSheet");
    let obj = { pickerIntention: EmojiIntention.DEFAULT_REACT_EMOJI, onPressEmoji: null, startExpanded: true };
    _require = asyncGeneratorStep(async (arg0, value) => {
      if (constants === 2) {
        constants = 3;
        throw new TypeError("Generator functions may not be called on executing generators");
      } else if (tmp4 === 3) {
        if (arg0 === 1) {
          throw value;
        } else if (arg0 === 2) {
          let obj = { value, done: true };
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
              throw value;
            } else if (arg0 === 2) {
              constants = 3;
              obj = { value, done: true };
              return obj;
            } else {
              closure_129_0 = closure_0;
              const obj1 = { emoji_id: null, emoji_name: null, emoji_animated: null, recommended: false, location: null };
              ({ id: obj8.emoji_id, name: obj8.emoji_name, animated: obj8.emoji_animated } = closure_0);
              obj1.location = tmp2(tmp5[14]).USER_SETTINGS;
              tmp2(tmp5[13]).track(constants.DOUBLE_TAP_REACT_EMOJI_UPDATED, obj1);
              const DoubleTapReactionEmoji = closure_0(tmp5[8]).DoubleTapReactionEmoji;
              ({ id: obj9.emojiId, name: obj9.emojiName, animated: obj9.animated } = closure_0);
              c3 = 1;
              constants = 1;
              const obj3 = { value: DoubleTapReactionEmoji.updateSetting({ emojiId: null, emojiName: null, animated: null, disableDoubleTap: false }), done: false };
              return obj3;
            }
          } else if (arg0 === 1) {
            constants = 3;
            throw value;
          } else if (arg0 === 2) {
            constants = 3;
            const obj4 = { value, done: true };
            return obj4;
          } else {
            obj = closure_0(tmp5[15]);
            const obj5 = { emoji: closure_129_0 };
            const result = obj.showDoubleTapEmojiUpdatedToast(obj5);
            constants = 3;
            return { value: "HermesInternal", done: null };
          }
        } catch (tmp12) {
          constants = tmp;
          throw tmp12;
        }
      }
    });
    obj.onPressEmoji = function() {
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
    const DoubleTapReactionEmoji = UserSettings.DoubleTapReactionEmoji;
    const setting = DoubleTapReactionEmoji.useSetting();
    const result = DoubleTapToReactUtils.disambiguatedEmojiFromSettingsValue(setting);
    let combined = null;
    if (null != result) {
      const _HermesInternal = HermesInternal;
      combined = ":" + result.name + ":";
    }
    return combined;
  },
  useIsDisabled: function useDoubleTapDisabled() {
    const DoubleTapReactionEmoji = UserSettings.DoubleTapReactionEmoji;
    let flag = DoubleTapReactionEmoji.useSetting().disableDoubleTap;
    if (flag == null) {
      flag = false;
    }
    return flag;
  },
  usePredicate: function useShouldShowSetting() {
    const DoubleTapReactionEmoji = UserSettings.DoubleTapReactionEmoji;
    let flag = DoubleTapReactionEmoji.useSetting().disableDoubleTap;
    if (flag == null) {
      flag = false;
    }
    return !flag;
  }
});
const size = fn(2);
let result = size.fileFinishedImporting("modules/user_settings/defs/native/DoubleTapEmojiSetting.tsx");

export default pressable;