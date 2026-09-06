// discord_app/utils/EmojiUtilsPlatformed.native.tsx
import _modDef12 from "../../_runtime/metro/00012__.js";
import PlatformUtils from "PlatformUtils.tsx";
import AvatarUtilsDefault from "AvatarUtils.tsx";
import DeviceUtils from "native/DeviceUtils.tsx";
import burst_reactions_BurstReactionEffectUtils from "../modules/messages/native/burst_reactions/BurstReactionEffectUtils.tsx";
import BurstReactionFirstSendActionSheet from "../components_native/reactions/BurstReactionFirstSendActionSheet.tsx";
import _slicedToArray from "../../_runtime/metro/00032__.js";
import asyncGeneratorStep from "../../_runtime/00005_asyncGeneratorStep.js";
import defaultImageSrcGenerator from "../../node_modules/.pnpm/@discordapp+twemoji@16.0.1/node_modules/@discordapp/twemoji/dist/twemoji.npm.js";
import MemoizerUtils from "MemoizerUtils.tsx";

require = fn;
function getURL(name) {
  if (null == name) {
    const convert = defaultImageSrcGenerator.convert;
    const _HermesInternal = HermesInternal;
    let str = "asset:/emoji-" + convert.toCodePoint(name) + ".png";
  } else {
    str = "";
  }
  return str;
}
let closure_9 = async function _getEmojiColors(arg0) {
  let id = arg0;
  c3 = 0;
  c4 = 0;
  return (async (arg0, value) => {
    if (c4 === 2) {
      c4 = 3;
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
        c4 = 2;
        if (0 === c3) {
          if (arg0 === 1) {
            c4 = 3;
            throw value;
          } else if (arg0 === 2) {
            c4 = 3;
            obj = { value, done: true };
            return obj;
          } else {
            closure_2 = tmp5;
            closure_1 = tmp2;
            closure_129_0 = undefined;
            closure_129_1 = undefined;
            id = id.id;
            if (null != id) {
              let obj3 = AvatarUtilsDefault;
              const obj1 = { id, size: 32, animated: false };
              let emojiURL = obj3.getEmojiURL(obj1);
            } else {
              emojiURL = getURL(tmp31);
            }
            closure_129_0 = emojiURL;
            if ("" === emojiURL) {
              ImageManager = ImageManager.ImageManager;
              c3 = 1;
              c4 = 1;
              const obj2 = {
                value: ImageManager.getEmojiBase64(
                  tmp30.name,
                  burst_reactions_BurstReactionEffectUtils.EMOJI_IN_ANIMATION_SIZE,
                ),
                done: false,
              };
              return obj2;
            } else {
              const paletteForAvatar = closure_130_0(closure_130_2[9]).getPaletteForAvatar(closure_129_0);
              c3 = 2;
              c4 = 1;
              const obj6 = closure_130_0(closure_130_2[9]);
            }
            tmp30 = id;
          }
        } else if (1 === tmp5) {
          if (arg0 === 1) {
            c4 = 3;
            throw value;
          } else if (arg0 !== 2) {
            const _HermesInternal = HermesInternal;
            closure_129_0 = "data:image/png;base64," + value;
          }
        } else if (arg0 === 1) {
          c4 = 3;
          throw value;
        } else if (arg0 === 2) {
          c4 = 3;
          obj3 = { value, done: true };
          return obj3;
        } else {
          closure_129_1 = value;
          let mapped;
          if (closure_129_1 != null) {
            mapped = closure_129_1.map((item) => {
              [tmp2, tmp3, tmp4] = closure_1_3(item, 3);
              const tmp = closure_1_3(item, 3);
              return id(closure_1_2[10]).rgbToHex(tmp2, tmp3, tmp4);
            });
          }
          c4 = 3;
          obj = { value: mapped, done: true };
          return obj;
        }
        c4 = 3;
        const obj4 = { value, done: true };
        return obj4;
      } catch (tmp25) {
        c4 = tmp;
        throw tmp25;
      }
    }
  })();
};
get_ActivityIndicator = fn(17);
({ NativeModules: hasOwnProperty, processColor: metroRequire } = get_ActivityIndicator);
let obj = {
  getURL: null,
  filterUnsupportedEmojis: null,
  applyPlatformToThemedEmojiColorPalette: null,
  getEmojiColors: null,
  triggerFullscreenAnimation: null,
};
obj.getURL = MemoizerUtils.makeMemoizer(getURL);
obj.filterUnsupportedEmojis = function filterUnsupportedEmojis(arg0) {
  let found = arg0;
  if (!obj.isAndroid()) {
    found = _modDef12.filter(arg0, (unicodeVersion) => {
      unicodeVersion = unicodeVersion.unicodeVersion;
      const systemVersionMajor = DeviceUtils.getSystemVersionMajor();
      const systemVersionMinor = DeviceUtils.getSystemVersionMinor();
      let flag = true;
      if (unicodeVersion > 8) {
        if (9 === unicodeVersion) {
          let tmp21 = systemVersionMajor > 10;
          if (!tmp21) {
            let tmp22 = 10 === systemVersionMajor;
            if (tmp22) {
              tmp22 = systemVersionMinor >= 2;
            }
            tmp21 = tmp22;
          }
          flag = tmp21;
        } else if (10 === unicodeVersion) {
          let tmp19 = systemVersionMajor > 11;
          if (!tmp19) {
            let tmp20 = 11 === systemVersionMajor;
            if (tmp20) {
              tmp20 = systemVersionMinor >= 1;
            }
            tmp19 = tmp20;
          }
          flag = tmp19;
        } else if (11 === unicodeVersion) {
          let tmp17 = systemVersionMajor > 12;
          if (!tmp17) {
            let tmp18 = 12 === systemVersionMajor;
            if (tmp18) {
              tmp18 = systemVersionMinor >= 1;
            }
            tmp17 = tmp18;
          }
          flag = tmp17;
        } else {
          if (12 !== unicodeVersion) {
            if (12.1 !== unicodeVersion) {
              if (13 === unicodeVersion) {
                let tmp13 = systemVersionMajor > 14;
                if (!tmp13) {
                  let tmp14 = 14 === systemVersionMajor;
                  if (tmp14) {
                    tmp14 = systemVersionMinor >= 2;
                  }
                  tmp13 = tmp14;
                }
                flag = tmp13;
              } else if (13.1 === unicodeVersion) {
                let tmp11 = systemVersionMajor > 14;
                if (!tmp11) {
                  let tmp12 = 14 === systemVersionMajor;
                  if (tmp12) {
                    tmp12 = systemVersionMinor >= 5;
                  }
                  tmp11 = tmp12;
                }
                flag = tmp11;
              } else if (14 === unicodeVersion) {
                let tmp9 = systemVersionMajor > 15;
                if (!tmp9) {
                  let tmp10 = 15 === systemVersionMajor;
                  if (tmp10) {
                    tmp10 = systemVersionMinor >= 4;
                  }
                  tmp9 = tmp10;
                }
                flag = tmp9;
              } else if (15 === unicodeVersion) {
                let tmp7 = systemVersionMajor > 16;
                if (!tmp7) {
                  let tmp8 = 16 === systemVersionMajor;
                  if (tmp8) {
                    tmp8 = systemVersionMinor >= 4;
                  }
                  tmp7 = tmp8;
                }
                flag = tmp7;
              } else if (15.1 === unicodeVersion) {
                let tmp5 = systemVersionMajor > 17;
                if (!tmp5) {
                  let tmp6 = 17 === systemVersionMajor;
                  if (tmp6) {
                    tmp6 = systemVersionMinor >= 4;
                  }
                  tmp5 = tmp6;
                }
                flag = tmp5;
              } else {
                flag = false;
                if (16 === unicodeVersion) {
                  let tmp4 = systemVersionMajor > 18;
                  if (!tmp4) {
                    let tmp3 = 18 === systemVersionMajor;
                    if (tmp3) {
                      tmp3 = systemVersionMinor >= 4;
                    }
                    tmp4 = tmp3;
                  }
                  flag = tmp4;
                }
              }
            }
          }
          let tmp15 = systemVersionMajor > 13;
          if (!tmp15) {
            let tmp16 = 13 === systemVersionMajor;
            if (tmp16) {
              tmp16 = systemVersionMinor >= 2;
            }
            tmp15 = tmp16;
          }
          flag = tmp15;
        }
      }
      return flag;
    });
  }
  return found;
};
obj.applyPlatformToThemedEmojiColorPalette = function applyPlatformToThemedEmojiColorPalette(arg0) {
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
      let obj = {
        accentColor: timestampProducer(accentColor),
        backgroundColor: null,
        highlightColor: null,
        opacity: null,
      };
      let backgroundColor;
      if (LIGHT != null) {
        backgroundColor = LIGHT.backgroundColor;
      }
      obj.backgroundColor = timestampProducer(backgroundColor);
      let highlightColor;
      if (LIGHT != null) {
        highlightColor = LIGHT.highlightColor;
      }
      obj.highlightColor = timestampProducer(highlightColor);
      let opacity;
      if (LIGHT != null) {
        opacity = LIGHT.opacity;
      }
      obj = { LIGHT: null, DARK: null, opacity };
      obj.LIGHT = obj;
      let accentColor1;
      if (DARK != null) {
        accentColor1 = DARK.accentColor;
      }
      obj = {
        accentColor: timestampProducer(accentColor1),
        backgroundColor: null,
        highlightColor: null,
        opacity: null,
      };
      let backgroundColor1;
      if (DARK != null) {
        backgroundColor1 = DARK.backgroundColor;
      }
      obj.backgroundColor = timestampProducer(backgroundColor1);
      let highlightColor1;
      if (DARK != null) {
        highlightColor1 = DARK.highlightColor;
      }
      obj.highlightColor = timestampProducer(highlightColor1);
      let opacity1;
      if (DARK != null) {
        opacity1 = DARK.opacity;
      }
      obj.opacity = opacity1;
      obj.DARK = obj;
      return obj;
    }
  }
  return palette;
};
obj.getEmojiColors = function getEmojiColors() {
  const self = this;
  const apply = closure_9.apply;
  if (typeof apply === "unknown") {
    let applyArgumentsResult = HermesBuiltin.applyArguments(self);
  } else {
    applyArgumentsResult = apply(self, arguments);
  }
  return applyArgumentsResult;
};
obj.triggerFullscreenAnimation = function triggerFullscreenAnimation(arg0) {
  ({ channelId, messageId, emoji } = arg0);
  const result = BurstReactionFirstSendActionSheet.openBurstReactionFirstSendActionSheet({
    channelId,
    messageId,
    emoji,
  });
};
const size = fn(2);
let result = size.fileFinishedImporting("utils/EmojiUtilsPlatformed.native.tsx");

export default obj;
