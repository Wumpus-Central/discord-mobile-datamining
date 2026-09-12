// discord_app/modules/messages/native/burst_reactions/BurstReactionEffectUtils.tsx
import EmojiUtils from "../../../../utils/EmojiUtils.tsx";
import getBurstAnimation from "../../getBurstAnimation.native.tsx";
import asyncGeneratorStep from "../../../../../_runtime/00005_asyncGeneratorStep.js";
import _slicedToArray from "../../../../../_runtime/metro/00032__.js";
import noop from "../../../../../_runtime/metro/00019__.js";

require = fn;
let closure_7 = async function _generateAnimationSource(arg0, arg1, arg2, arg3) {
  closure_0 = arg0;
  closure_1 = arg1;
  let name = arg2;
  closure_3 = arg3;
  c9 = 0;
  c10 = 0;
  c8 = 0;
  return (async (arg0, value, arg2, arg3) => {
    if (c10 === 2) {
      c10 = 3;
      throw new TypeError("Generator functions may not be called on executing generators");
    } else if (tmp7 === 3) {
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
        c10 = 2;
        if (0 === c9) {
          if (arg0 === 1) {
            c10 = 3;
            throw value;
          } else if (arg0 === 2) {
            c10 = 3;
            obj = { value, done: true };
            return obj;
          } else {
            closure_6 = tmp3;
            closure_5 = tmp5;
            closure_133_0 = name;
            closure_133_1 = undefined;
            closure_133_2 = undefined;
            closure_133_3 = undefined;
            closure_133_4 = undefined;
            closure_133_5 = undefined;
            closure_133_6 = undefined;
            closure_133_7 = undefined;
            closure_133_8 = undefined;
            closure_133_9 = undefined;
            closure_133_10 = undefined;
            closure_133_11 = undefined;
            c8 = 1;
            const obj1 = {};
            const merged = Object.assign(name);
            obj1.animated = false;
            const emojiUrl = EmojiUtils.getEmojiUrl(obj1, 128);
            c4 = emojiUrl;
            if (emojiUrl == null) {
              c4 = "";
            }
            closure_133_2 = c4;
            const obj12 = getBurstAnimation;
            c9 = 2;
            c10 = 1;
            let obj2 = { value: obj12.getBurstAnimation(closure_0, closure_1, name.name, closure_3), done: false };
            return obj2;
          }
        } else if (1 === tmp8) {
          c8 = 0;
          c10 = 3;
          return { value: null, done: true };
        } else if (2 === tmp8) {
          if (arg0 === 1) {
            c10 = 3;
            throw value;
          } else if (arg0 === 2) {
            c8 = 0;
            c10 = 3;
            const obj3 = { value, done: true };
            return obj3;
          } else {
            closure_133_3 = value;
            if ("" !== closure_133_2) {
              let obj8 = closure_134_0(closure_134_1[6]);
              closure_133_1 = obj8.makeSource(closure_133_2);
              const ImageManager3 = closure_134_5.ImageManager;
              c9 = 3;
              c10 = 1;
              let obj4 = { value: ImageManager3.getAvatarBase64(closure_133_1), done: false };
              return obj4;
            } else {
              const ImageManager2 = closure_134_5.ImageManager;
              c9 = 4;
              c10 = 1;
              const obj5 = { value: ImageManager2.getEmojiBase64(closure_133_0.name, 128), done: false };
              return obj5;
            }
          }
        } else {
          if (3 === tmp8) {
            if (arg0 === 1) {
              c10 = 3;
              throw value;
            } else if (arg0 === 2) {
              c8 = 0;
              c10 = 3;
              const obj6 = { value, done: true };
              return obj6;
            } else {
              closure_133_4 = value;
              const _HermesInternal2 = HermesInternal;
              closure_133_3.assets[0].p = "data:image/png;base64," + closure_133_4;
            }
          } else if (4 === tmp8) {
            if (arg0 === 1) {
              c10 = 3;
              throw value;
            } else if (arg0 === 2) {
              c8 = 0;
              c10 = 3;
              const obj7 = { value, done: true };
              return obj7;
            } else {
              const _HermesInternal = HermesInternal;
              closure_133_5 = "data:image/png;base64," + value;
              closure_133_3.assets[0].p = closure_133_5;
              obj2 = closure_134_0(closure_134_1[6]);
              closure_133_1 = obj2.makeSource(closure_133_5);
            }
          } else if (arg0 === 1) {
            c10 = 3;
            throw value;
          } else if (arg0 === 2) {
            c8 = 0;
            c10 = 3;
            obj8 = { value, done: true };
            return obj8;
          } else {
            closure_133_7 = value;
            closure_133_8 = closure_134_3(closure_133_7[0], 3);
            closure_133_9 = closure_133_8[0];
            closure_133_10 = closure_133_8[1];
            closure_133_11 = closure_133_8[2];
            const obj9 = { r: closure_133_9, g: closure_133_10, b: closure_133_11 };
            closure_133_6 = closure_134_0(closure_134_1[8]).replaceAnimationColors(closure_133_6, obj9);
            const _JSON2 = JSON;
            c8 = 0;
            c10 = 3;
            obj = { value: JSON.parse(closure_133_6), done: true };
            return obj;
          }
          const _JSON = JSON;
          closure_133_6 = JSON.stringify(closure_133_3);
          if (null == closure_133_0.id) {
            closure_133_6 = closure_133_6.replace(/"a":{"a":0,"k":\[64,64/, '"a":{"a":0,"k":[36,36');
            obj4 = closure_134_0(closure_134_1[7]);
            if (obj4.isAndroid()) {
              closure_133_6 = closure_133_6.replace(/"w":128,"h":128/, '"w":72,"h":72');
            }
          }
          const ImageManager = closure_134_5.ImageManager;
          c9 = 5;
          c10 = 1;
          const obj10 = { value: ImageManager.getDominantColors(closure_133_1), done: false };
          return obj10;
        }
      } catch (tmp47) {
        closure_7 = tmp47;
        if (tmp4 === c8) {
          c10 = tmp2;
          throw tmp47;
        } else {
          c9 = tmp;
        }
      }
    }
  })();
};
let closure_8 = async function _generateAnimationSourceFromLocalImage(arg0) {
  if (c6 === 2) {
    c6 = 3;
    throw new TypeError("Generator functions may not be called on executing generators");
  } else if (tmp6 === 3) {
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
      c6 = 2;
      if (0 === c5) {
        if (arg0 === 1) {
          c6 = 3;
          throw value;
        } else if (arg0 === 2) {
          c6 = 3;
          obj = { value, done: true };
          return obj;
        } else {
          closure_2 = tmp3;
          closure_1 = tmp7;
          closure_129_0 = undefined;
          closure_129_1 = undefined;
          ({ animationSource: closure_129_0, localImageSource: closure_129_1 } = closure_0);
          let uri;
          closure_129_3 = undefined;
          closure_129_4 = undefined;
          closure_129_5 = undefined;
          closure_129_6 = undefined;
          closure_129_7 = undefined;
          closure_129_8 = undefined;
          closure_129_9 = undefined;
          closure_129_10 = undefined;
          c5 = 1;
          c6 = 1;
          return { value: "PX_16", done: true };
        }
      } else if (1 === tmp7) {
        if (arg0 === 1) {
          c6 = 3;
          throw value;
        } else if (arg0 === 2) {
          c6 = 3;
          const obj1 = { value, done: true };
          return obj1;
        } else {
          c4 = 1;
          uri = closure_130_6.resolveAssetSource(closure_129_1).uri;
          closure_129_3 = closure_130_0(closure_130_1[6]).makeSource(uri);
          const ImageManager2 = closure_130_5.ImageManager;
          c5 = 3;
          c6 = 1;
          const obj2 = { value: ImageManager2.getAvatarBase64(closure_129_3), done: false };
          return obj2;
        }
      } else if (2 === tmp7) {
        c4 = 0;
        c6 = 3;
        return { value: null, done: true };
      } else if (3 === tmp7) {
        if (arg0 === 1) {
          c6 = 3;
          throw value;
        } else if (arg0 === 2) {
          c4 = 0;
          c6 = 3;
          const obj3 = { value, done: true };
          return obj3;
        } else {
          closure_129_4 = value;
          const _HermesInternal = HermesInternal;
          closure_129_0.assets[0].p = "data:image/png;base64," + closure_129_4;
          const _JSON2 = JSON;
          closure_129_5 = JSON.stringify(closure_129_0);
          const ImageManager = closure_130_5.ImageManager;
          c5 = 4;
          c6 = 1;
          const obj4 = { value: ImageManager.getDominantColors(closure_129_3), done: false };
          return obj4;
        }
      } else if (arg0 === 1) {
        c6 = 3;
        throw value;
      } else if (arg0 === 2) {
        c4 = 0;
        c6 = 3;
        const obj5 = { value, done: true };
        return obj5;
      } else {
        closure_129_6 = value;
        closure_129_7 = closure_130_3(closure_129_6[0], 3);
        closure_129_8 = closure_129_7[0];
        closure_129_9 = closure_129_7[1];
        closure_129_10 = closure_129_7[2];
        const obj6 = { r: closure_129_8, g: closure_129_9, b: closure_129_10 };
        closure_129_5 = closure_130_0(closure_130_1[8]).replaceAnimationColors(closure_129_5, obj6);
        const _JSON = JSON;
        c4 = 0;
        c6 = 3;
        obj = { value: JSON.parse(closure_129_5), done: true };
        return obj;
      }
    } catch (tmp10) {
      closure_3 = tmp10;
      if (tmp4 === c4) {
        c6 = tmp2;
        throw tmp10;
      } else {
        c5 = tmp;
      }
    }
  }
};
get_ActivityIndicator = fn(17);
({ NativeModules: hasOwnProperty, Image: metroRequire } = get_ActivityIndicator);
const size = fn(2);
const result = size.fileFinishedImporting("modules/messages/native/burst_reactions/BurstReactionEffectUtils.tsx");

export const useBurstReactionAnimationSource = function useBurstReactionAnimationSource(channelId) {
  channelId = channelId.channelId;
  const messageId = channelId.messageId;
  const emoji = channelId.emoji;
  const isFullscreen = channelId.isFullscreen;
  noop = undefined;
  const tmp = isFullscreen(noop.useState(null), 2);
  noop = tmp[1];
  const items = [channelId, messageId, emoji, isFullscreen];
  const effect = noop.useEffect(() => {
    closure_0 = async function _getSource() {
      if (c3 === 2) {
        c3 = 3;
        throw new TypeError("Generator functions may not be called on executing generators");
      } else if (tmp5 === 3) {
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
          c3 = 2;
          if (0 === c2) {
            if (arg0 === 1) {
              c3 = 3;
              throw value;
            } else if (arg0 === 2) {
              c3 = 3;
              obj = { value, done: true };
              return obj;
            } else {
              closure_1 = tmp2;
              closure_0 = tmp3;
              closure_128_0 = undefined;
              if (null != c2) {
                c2 = 1;
                c3 = 1;
                const obj1 = {
                  value: (function generateAnimationSource(arg0, arg1, arg2, c3) {
                    const self = this;
                    const apply = closure_1_7.apply;
                    if (typeof apply === "unknown") {
                      let applyArgumentsResult = HermesBuiltin.applyArguments(self);
                    } else {
                      applyArgumentsResult = apply(self, arguments);
                    }
                    return applyArgumentsResult;
                  })(closure_0, closure_1, tmp12, c3),
                  done: false,
                };
                return obj1;
              } else {
                c3 = 3;
              }
            }
          } else if (arg0 === 1) {
            c3 = 3;
            throw value;
          } else if (arg0 !== 2) {
            closure_128_0 = value;
            closure_1_4(closure_128_0);
          }
          c3 = 3;
          obj = { value, done: true };
          return obj;
        } catch (tmp18) {
          c3 = tmp;
          throw tmp18;
        }
      }
    };
    !(function getSource() {
      const self = this;
      const apply = closure_0.apply;
      if (typeof apply === "unknown") {
        let applyArgumentsResult = HermesBuiltin.applyArguments(self);
      } else {
        applyArgumentsResult = apply(self, arguments);
      }
      return applyArgumentsResult;
    })();
  }, items);
  return tmp[0];
};
export const useSuperReactionAnimationSourceFromLocalImage = function useSuperReactionAnimationSourceFromLocalImage(
  animationSource,
) {
  animationSource = animationSource.animationSource;
  let localImageSource = animationSource.localImageSource;
  const tmp = _slicedToArray(noop.useState(null), 2);
  closure_2 = tmp[1];
  const items = [animationSource, localImageSource];
  const effect = noop.useEffect(() => {
    closure_0 = async function _getSource2() {
      if (c3 === 2) {
        c3 = 3;
        throw new TypeError("Generator functions may not be called on executing generators");
      } else if (tmp5 === 3) {
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
          c3 = 2;
          if (0 === v1) {
            if (arg0 === 1) {
              c3 = 3;
              throw value;
            } else if (arg0 === 2) {
              c3 = 3;
              obj = { value, done: true };
              return obj;
            } else {
              localImageSource = tmp3;
              animationSource = tmp2;
              closure_128_0 = undefined;
              const obj1 = { animationSource, localImageSource };
              v1 = 1;
              c3 = 1;
              const obj2 = {
                value: (function generateAnimationSourceFromLocalImage(arg0) {
                  const self = this;
                  const apply = closure_1_8.apply;
                  if (typeof apply === "unknown") {
                    let applyArgumentsResult = HermesBuiltin.applyArguments(self);
                  } else {
                    applyArgumentsResult = apply(self, arguments);
                  }
                  return applyArgumentsResult;
                })(obj1),
                done: false,
              };
              return obj2;
            }
          } else if (arg0 === 1) {
            c3 = 3;
            throw value;
          } else if (arg0 === 2) {
            c3 = 3;
            obj = { value, done: true };
            return obj;
          } else {
            closure_128_0 = value;
            v1(closure_128_0);
            c3 = 3;
            return { value: "HermesInternal", done: null };
          }
        } catch (tmp14) {
          c3 = tmp;
          throw tmp14;
        }
      }
    };
    !(function getSource() {
      const self = this;
      const apply = closure_0.apply;
      if (typeof apply === "unknown") {
        let applyArgumentsResult = HermesBuiltin.applyArguments(self);
      } else {
        applyArgumentsResult = apply(self, arguments);
      }
      return applyArgumentsResult;
    })();
  }, items);
  return tmp[0];
};
export const EMOJI_IN_ANIMATION_SIZE = 128;
export const BACKDROP_OPACITY = 0.8;
