// discord_app/utils/EmojiUtilsPlatformed.native.tsx
import _modDef12 from "../../_runtime/metro/00012__.js";
import react_native from "../../_runtime/00017_react-native.js";
import PlatformUtils from "PlatformUtils.tsx";
import AvatarUtilsDefault from "AvatarUtils.tsx";
import react_nativeDefault from "../../discord_common/js/packages/rtn-codegen/js/NativeImageManagerModule.tsx";
import DeviceUtils from "native/DeviceUtils.tsx";
import burst_reactions_BurstReactionEffectUtils from "../modules/messages/native/burst_reactions/BurstReactionEffectUtils.tsx";
import BurstReactionFirstSendActionSheet from "../components_native/reactions/BurstReactionFirstSendActionSheet.tsx";
import _slicedToArray from "../../_runtime/metro/00032__slicedToArray.js";
import _asyncToGenerator from "../../_runtime/metro/00005__asyncToGenerator.js";
import twemoji.npm from "../../node_modules/.pnpm/@discordapp+twemoji@16.0.1/node_modules/@discordapp/twemoji/dist/twemoji.npm.js";
import MemoizerUtils_mod from "MemoizerUtils.tsx";
import size from "../../_runtime/metro/00002__.js";

let closure_1, closure_2, unicodeVersion;

let MemoizerUtils;
function getURL(name) {
  let str;
  if (null == name) {
    const convert = module_4524.convert;
    const _HermesInternal = HermesInternal;
    str = "asset:/emoji-" + convert.toCodePoint(name) + ".png";
  } else {
    PlatformUtils;
    str = "";
  }
  return str;
}
let LIGHT = function _getEmojiColors() {
  let obj = _asyncToGenerator(async (arg0) => {
    let id = arg0;
    let c3 = 0;
    let c4 = 0;
    return (async (arg0) => {
      let obj6;
      let obj8;
      if (c4 === 2) {
        c4 = 3;
        throw new TypeError("Generator functions may not be called on executing generators");
      } else if (tmp3 === 3) {
        if (arg0 === 1) {
          throw value;
        } else if (arg0 === 2) {
          return { value, done: true };
        } else {
          return { value: "IconComponent", done: null };
        }
      } else {
        try {
          c4 = 2;
          const tmp4 = c3;
          if (0 === c3) {
            if (arg0 === 1) {
              c4 = 3;
              throw value;
            } else if (arg0 === 2) {
              c4 = 3;
              return { value, done: true };
            } else {
              let emojiURL;
              closure_2 = tmp4;
              id = undefined;
              closure_1 = undefined;
              id = id.id;
              const tmp28 = id;
              if (null != id) {
                const obj5 = { id, size: 32, animated: false };
                const obj4 = AvatarUtilsDefault;
                emojiURL = obj4.getEmojiURL(obj5);
              } else {
                emojiURL = getURL(tmp29);
              }
              id = emojiURL;
              if ("" === emojiURL) {
                c3 = 1;
                c4 = 1;
                const obj7 = { value: obj8.getEmojiBase64(tmp28.name, burst_reactions_BurstReactionEffectUtils.EMOJI_IN_ANIMATION_SIZE), done: false };
                obj8 = react_nativeDefault;
                return obj7;
              }
            }
          } else if (1 === tmp4) {
            if (arg0 === 1) {
              c4 = 3;
              throw value;
            } else if (arg0 === 2) {
              c4 = 3;
              return { value, done: true };
            } else {
              const _HermesInternal = HermesInternal;
              id = "data:image/png;base64," + value;
            }
          } else if (arg0 === 1) {
            c4 = 3;
            throw value;
          } else if (arg0 === 2) {
            c4 = 3;
            return { value, done: true };
          } else {
            closure_1 = value;
            let mapped;
            const arr = closure_1;
            if (closure_1 != null) {
              mapped = arr.map((item) => {
                let tmp2;
                let tmp3;
                let tmp4;
                [tmp2, tmp3, tmp4] = closure_1_3(item, 3);
                closure_1_3(item, 3);
                const obj = id(closure_1_2[11]);
                return obj.rgbToHex(tmp2, tmp3, tmp4);
              });
            }
            c4 = 3;
            let obj = { value: mapped, done: true };
            return obj;
          }
          c3 = 2;
          c4 = 1;
          const obj11 = { value: obj6.getPaletteForAvatar(id), done: false };
          obj6 = closure_130_0(closure_130_2[10]);
          return obj11;
        } catch (tmp24) {
          c4 = 3;
          throw tmp24;
        }
      }
    })();
  });
  return obj(...arguments);
};
const processColor = react_native.processColor;
LIGHT = {
  getURL: MemoizerUtils.makeMemoizer(getURL),
  filterUnsupportedEmojis(arg0) {
    let obj = PlatformUtils;
    let found = arg0;
    if (!obj.isAndroid()) {
      const arr = _modDef12;
      found = arr.filter(arg0, (unicodeVersion) => {
        unicodeVersion = unicodeVersion.unicodeVersion;
        const obj = DeviceUtils;
        const systemVersionMajor = obj.getSystemVersionMajor();
        const obj2 = DeviceUtils;
        const systemVersionMinor = obj2.getSystemVersionMinor();
        let flag = true;
        if (unicodeVersion > 8) {
          if (9 === unicodeVersion) {
            let tmp21 = systemVersionMajor > 10;
            if (!tmp21) {
              tmp21 = 10 === systemVersionMajor && systemVersionMinor >= 2;
              const tmp22 = 10 === systemVersionMajor && systemVersionMinor >= 2;
            }
            flag = tmp21;
          } else if (10 === unicodeVersion) {
            let tmp19 = systemVersionMajor > 11;
            if (!tmp19) {
              tmp19 = 11 === systemVersionMajor && systemVersionMinor >= 1;
              const tmp20 = 11 === systemVersionMajor && systemVersionMinor >= 1;
            }
            flag = tmp19;
          } else if (11 === unicodeVersion) {
            let tmp17 = systemVersionMajor > 12;
            if (!tmp17) {
              tmp17 = 12 === systemVersionMajor && systemVersionMinor >= 1;
              const tmp18 = 12 === systemVersionMajor && systemVersionMinor >= 1;
            }
            flag = tmp17;
          } else {
            if (12 !== unicodeVersion) {
              if (12.1 !== unicodeVersion) {
                if (13 === unicodeVersion) {
                  let tmp13 = systemVersionMajor > 14;
                  if (!tmp13) {
                    tmp13 = 14 === systemVersionMajor && systemVersionMinor >= 2;
                    const tmp14 = 14 === systemVersionMajor && systemVersionMinor >= 2;
                  }
                  flag = tmp13;
                } else if (13.1 === unicodeVersion) {
                  let tmp11 = systemVersionMajor > 14;
                  if (!tmp11) {
                    tmp11 = 14 === systemVersionMajor && systemVersionMinor >= 5;
                    const tmp12 = 14 === systemVersionMajor && systemVersionMinor >= 5;
                  }
                  flag = tmp11;
                } else if (14 === unicodeVersion) {
                  let tmp9 = systemVersionMajor > 15;
                  if (!tmp9) {
                    tmp9 = 15 === systemVersionMajor && systemVersionMinor >= 4;
                    const tmp10 = 15 === systemVersionMajor && systemVersionMinor >= 4;
                  }
                  flag = tmp9;
                } else if (15 === unicodeVersion) {
                  let tmp7 = systemVersionMajor > 16;
                  if (!tmp7) {
                    tmp7 = 16 === systemVersionMajor && systemVersionMinor >= 4;
                    const tmp8 = 16 === systemVersionMajor && systemVersionMinor >= 4;
                  }
                  flag = tmp7;
                } else if (15.1 === unicodeVersion) {
                  let tmp5 = systemVersionMajor > 17;
                  if (!tmp5) {
                    tmp5 = 17 === systemVersionMajor && systemVersionMinor >= 4;
                    const tmp6 = 17 === systemVersionMajor && systemVersionMinor >= 4;
                  }
                  flag = tmp5;
                } else {
                  flag = false;
                  if (16 === unicodeVersion) {
                    let tmp4 = systemVersionMajor > 18;
                    if (!tmp4) {
                      tmp4 = 18 === systemVersionMajor && systemVersionMinor >= 4;
                      const tmp3 = 18 === systemVersionMajor && systemVersionMinor >= 4;
                    }
                    flag = tmp4;
                  }
                }
              }
            }
            let tmp15 = systemVersionMajor > 13;
            if (!tmp15) {
              tmp15 = 13 === systemVersionMajor && systemVersionMinor >= 2;
              const tmp16 = 13 === systemVersionMajor && systemVersionMinor >= 2;
            }
            flag = tmp15;
          }
        }
        return flag;
      });
    }
    return found;
  },
  applyPlatformToThemedEmojiColorPalette(arg0) {
    let DARK;
    let backgroundColor;
    let backgroundColor1;
    let highlightColor;
    let highlightColor1;
    let obj3;
    let opacity;
    let opacity1;
    let palette;
    let shouldProcessMobileColors;
    ({ palette, shouldProcessMobileColors } = arg0);
    if (shouldProcessMobileColors === undefined) {
      shouldProcessMobileColors = false;
    }
    if (shouldProcessMobileColors) {
      if (null != palette) {
        ({ LIGHT, DARK } = palette);
        let accentColor;
        if (LIGHT != null) {
          accentColor = LIGHT.accentColor;
        }
        LIGHT = { accentColor: processColor(accentColor), backgroundColor: processColor(backgroundColor), highlightColor: processColor(highlightColor), opacity };
        backgroundColor = undefined;
        if (LIGHT != null) {
          backgroundColor = LIGHT.backgroundColor;
        }
        highlightColor = undefined;
        if (LIGHT != null) {
          highlightColor = LIGHT.highlightColor;
        }
        opacity = undefined;
        if (LIGHT != null) {
          opacity = LIGHT.opacity;
        }
        let accentColor1;
        const obj2 = { LIGHT, DARK: obj3 };
        if (DARK != null) {
          accentColor1 = DARK.accentColor;
        }
        obj3 = { accentColor: processColor(accentColor1), backgroundColor: processColor(backgroundColor1), highlightColor: processColor(highlightColor1), opacity: opacity1 };
        backgroundColor1 = undefined;
        if (DARK != null) {
          backgroundColor1 = DARK.backgroundColor;
        }
        highlightColor1 = undefined;
        if (DARK != null) {
          highlightColor1 = DARK.highlightColor;
        }
        opacity1 = undefined;
        if (DARK != null) {
          opacity1 = DARK.opacity;
        }
        return obj2;
      }
    }
    return palette;
  },
  getEmojiColors() {
    return obj(...arguments);
  },
  triggerFullscreenAnimation(arg0) {
    let channelId;
    let emoji;
    let messageId;
    ({ channelId, messageId, emoji } = arg0);
    const obj = BurstReactionFirstSendActionSheet;
    const result = obj.openBurstReactionFirstSendActionSheet({ channelId, messageId, emoji });
  }
};
MemoizerUtils = MemoizerUtils_mod;
let result = size.fileFinishedImporting("utils/EmojiUtilsPlatformed.native.tsx");

export default LIGHT;