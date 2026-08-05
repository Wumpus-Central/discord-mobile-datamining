// discord_app/utils/EmojiUtilsPlatformed.native.tsx
import _slicedToArray from "_slicedToArray";
import set from "set";
import get_ActivityIndicator from "get ActivityIndicator";
import defaultImageSrcGenerator from "defaultImageSrcGenerator";
import importDefaultResult from "set";
import { apply } from "../../_runtime/00012_apply.js";
import { onDismiss } from "../components_native/reactions/BurstReactionFirstSendActionSheet.tsx";
import { set } from "PlatformUtils.tsx";

let c5;
let closure_6;
const require = arg1;
function getURL(name) {
  if (null == name) {
    convert = convert.convert;
    const _HermesInternal = HermesInternal;
    let str = "asset:/emoji-" + convert.toCodePoint(name) + ".png";
  } else {
    str = "";
    const obj = set;
  }
  return str;
}
function _getEmojiColors() {
  const self = this;
  let tmp = callback((arg0) => {
    let closure_0 = arg0;
    let c3 = 0;
    let c4 = 0;
    return (function*(arg0) {
      if (c4 === 2) {
        c4 = 3;
        HermesBuiltin.throwTypeError();
      } else if (tmp4 === 3) {
        if (arg0 === 1) {
          throw arg1;
        } else if (arg0 === 2) {
          let obj = { value: null, done: true };
          obj[0] = arg1;
          return obj;
        } else {
          return { value: "T", done: null };
        }
      } else {
        try {
          c4 = 2;
          if (0 === c3) {
            if (arg0 === 1) {
              c4 = 3;
              throw arg1;
            } else if (arg0 === 2) {
              c4 = 3;
              obj = { value: null, done: true };
              obj[0] = arg1;
              return obj;
            } else {
              const table = tmp5;
              let closure_1 = tmp2;
              let emojiURL;
              closure_1 = undefined;
              const id = emojiURL.id;
              if (null != id) {
                let obj3 = outer1_1(outer1_2[7]);
                const obj1 = { id: null, size: 32, animated: false };
                obj1[0] = id;
                emojiURL = obj3.getEmojiURL(obj1);
              } else {
                emojiURL = outer1_8(tmp32);
              }
              if ("" === emojiURL) {
                const ImageManager = outer1_5.ImageManager;
                c3 = 1;
                c4 = 1;
                const obj2 = { value: null, done: false };
                obj2[0] = ImageManager.getEmojiBase64(tmp31.name, callback(outer1_2[8]).EMOJI_IN_ANIMATION_SIZE);
                return obj2;
              } else {
                const paletteForAvatar = emojiURL(table[9]).getPaletteForAvatar(emojiURL);
                c3 = 2;
                c4 = 1;
                const obj6 = emojiURL(table[9]);
              }
              tmp31 = emojiURL;
            }
          } else if (1 === tmp5) {
            if (arg0 === 1) {
              c4 = 3;
              throw arg1;
            } else if (arg0 !== 2) {
              const _HermesInternal = HermesInternal;
              callback = "data:image/png;base64," + arg1;
            }
          } else if (arg0 === 1) {
            c4 = 3;
            throw arg1;
          } else if (arg0 === 2) {
            c4 = 3;
            obj3 = { value: null, done: true };
            obj3[0] = arg1;
            return obj3;
          } else {
            closure_1 = arg1;
            let mapped;
            if (closure_1 != null) {
              mapped = closure_1.map((arg0) => {
                let tmp2;
                let tmp3;
                let tmp4;
                [tmp2, tmp3, tmp4] = v2(arg0, 3);
                const tmp = v2(arg0, 3);
                return emojiURL(tmp5[10]).rgbToHex(tmp2, tmp3, tmp4);
              });
            }
            c4 = 3;
            obj = { value: null, done: true };
            obj[0] = mapped;
            return obj;
          }
          c4 = 3;
          const obj4 = { value: null, done: true };
          obj4[0] = arg1;
          return obj4;
        } catch (tmp25) {
          c4 = tmp;
          throw tmp25;
        }
      }
    })();
  });
  const _getEmojiColors = tmp;
  const apply = tmp.apply;
  if (typeof apply === "unknown") {
    let applyArgumentsResult = HermesBuiltin.applyArguments(self);
  } else {
    applyArgumentsResult = apply(self, arguments);
  }
  return applyArgumentsResult;
}
({ NativeModules: c5, processColor: closure_6 } = get_ActivityIndicator);
let obj = { getURL: null, filterUnsupportedEmojis: null, applyPlatformToThemedEmojiColorPalette: null, getEmojiColors: null, triggerFullscreenAnimation: null };
obj[0] = require("set").makeMemoizer(getURL);
obj[1] = function filterUnsupportedEmojis(emojis) {
  let found = emojis;
  if (!obj.isAndroid()) {
    found = apply.filter(emojis, (unicodeVersion) => {
      unicodeVersion = unicodeVersion.unicodeVersion;
      const systemVersionMajor = callback(4235).getSystemVersionMajor();
      const obj = callback(4235);
      const systemVersionMinor = callback(4235).getSystemVersionMinor();
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
    const arr = apply;
  }
  return found;
};
obj[2] = function applyPlatformToThemedEmojiColorPalette(arg0) {
  let DARK;
  let LIGHT;
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
      let obj = { accentColor: null, backgroundColor: null, highlightColor: null, opacity: null };
      obj[0] = closure_6(accentColor);
      let backgroundColor;
      if (LIGHT != null) {
        backgroundColor = LIGHT.backgroundColor;
      }
      obj[1] = closure_6(backgroundColor);
      let highlightColor;
      if (LIGHT != null) {
        highlightColor = LIGHT.highlightColor;
      }
      obj[2] = closure_6(highlightColor);
      let opacity;
      if (LIGHT != null) {
        opacity = LIGHT.opacity;
      }
      obj = { LIGHT: null, DARK: null };
      obj[3] = opacity;
      obj[0] = obj;
      let accentColor1;
      if (DARK != null) {
        accentColor1 = DARK.accentColor;
      }
      obj = { accentColor: null, backgroundColor: null, highlightColor: null, opacity: null };
      obj[0] = closure_6(accentColor1);
      let backgroundColor1;
      if (DARK != null) {
        backgroundColor1 = DARK.backgroundColor;
      }
      obj[1] = closure_6(backgroundColor1);
      let highlightColor1;
      if (DARK != null) {
        highlightColor1 = DARK.highlightColor;
      }
      obj[2] = closure_6(highlightColor1);
      let opacity1;
      if (DARK != null) {
        opacity1 = DARK.opacity;
      }
      obj[3] = opacity1;
      obj[1] = obj;
      return obj;
    }
  }
  return palette;
};
obj[3] = function getEmojiColors() {
  const self = this;
  const apply = _getEmojiColors.apply;
  if (typeof apply === "unknown") {
    let applyArgumentsResult = HermesBuiltin.applyArguments(self);
  } else {
    applyArgumentsResult = apply(self, arguments);
  }
  return applyArgumentsResult;
};
obj[4] = function triggerFullscreenAnimation(arg0) {
  let channelId;
  let emoji;
  let messageId;
  ({ channelId, messageId, emoji } = arg0);
  const result = onDismiss.openBurstReactionFirstSendActionSheet({ channelId, messageId, emoji });
};
let result = require("get ActivityIndicator").fileFinishedImporting("utils/EmojiUtilsPlatformed.native.tsx");

export default obj;