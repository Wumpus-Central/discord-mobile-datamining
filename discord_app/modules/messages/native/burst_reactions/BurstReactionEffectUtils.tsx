// === Module 7925: burst_reactions/BurstReactionEffectUtils ===

// Module 7925 (burst_reactions/BurstReactionEffectUtils)
import EmojiUtils from "EmojiUtils" /* 4768 */;
import getBurstAnimation from "getBurstAnimation" /* 7926 */;
import asyncGeneratorStep from "asyncGeneratorStep" /* 5 */;
import _slicedToArray from "module_32" /* 32 */;
import noop from "module_19" /* 19 */;

require = fn;
function generateAnimationSource(arg0, arg1, arg2, arg3) {
  const self = this;
  const apply = closure_8.apply;
  if (typeof apply === "unknown") {
    let applyArgumentsResult = HermesBuiltin.applyArguments(self);
  } else {
    applyArgumentsResult = apply(self, arguments);
  }
  return applyArgumentsResult;
}
let closure_8 = async function _generateAnimationSource(arg0, arg1, arg2, arg3) {
  closure_0 = arg0;
  closure_1 = arg1;
  let name = arg2;
  closure_3 = arg3;
  c10 = 0;
  c11 = 0;
  c9 = 0;
  return (async (arg0, value, arg2, arg3) => {
    if (c11 === 2) {
      c11 = 3;
      throw new TypeError("Generator functions may not be called on executing generators");
    } else if (tmp7 === 3) {
      if (arg0 === 1) {
        throw value;
      } else if (arg0 === 2) {
        const obj2 = { value, done: true };
        return obj2;
      } else {
        return { value: "IconComponent", done: "+51" };
      }
    } else {
      try {
        c11 = 2;
        if (0 === c10) {
          if (arg0 === 1) {
            c11 = 3;
            throw value;
          } else if (arg0 === 2) {
            c11 = 3;
            const obj3 = { value, done: true };
            return obj3;
          } else {
            closure_7 = tmp3;
            closure_6 = tmp5;
            closure_134_0 = name;
            closure_134_1 = undefined;
            closure_134_2 = undefined;
            closure_134_3 = undefined;
            closure_134_4 = undefined;
            closure_134_5 = undefined;
            closure_134_6 = undefined;
            closure_134_7 = undefined;
            closure_134_8 = undefined;
            closure_134_9 = undefined;
            closure_134_10 = undefined;
            closure_134_11 = undefined;
            c9 = 1;
            const obj4 = {};
            const merged = Object.assign(name);
            obj4.animated = false;
            const emojiUrl = EmojiUtils.getEmojiUrl(obj4, 128);
            c4 = emojiUrl;
            if (emojiUrl == null) {
              c4 = "";
            }
            closure_134_2 = c4;
            const obj15 = getBurstAnimation;
            c10 = 2;
            c11 = 1;
            const obj7 = { value: obj15.getBurstAnimation(closure_0, closure_1, name.name, closure_3), done: false };
            return obj7;
          }
        } else if (1 === tmp8) {
          c9 = 0;
          c11 = 3;
          return { value: null, done: true };
        } else if (2 === tmp8) {
          if (arg0 === 1) {
            c11 = 3;
            throw value;
          } else if (arg0 === 2) {
            c9 = 0;
            c11 = 3;
            const obj8 = { value, done: true };
            return obj8;
          } else {
            closure_134_3 = value;
            if ("" !== closure_134_2) {
              const obj10 = { uri: closure_134_2 };
              closure_134_1 = obj10;
              c10 = 3;
              c11 = 1;
              const obj11 = { value: closure_135_1(closure_135_2[8]).getAvatarBase64(closure_134_1), done: false };
              return obj11;
            } else {
              name = closure_134_0.name;
              c5 = name;
              if (name == null) {
                c5 = "";
              }
              c10 = 4;
              c11 = 1;
              const obj13 = { value: closure_135_1(closure_135_2[8]).getEmojiBase64(c5, 128), done: false };
              return obj13;
            }
          }
        } else {
          if (3 === tmp8) {
            if (arg0 === 1) {
              c11 = 3;
              throw value;
            } else if (arg0 === 2) {
              c9 = 0;
              c11 = 3;
              const obj14 = { value, done: true };
              return obj14;
            } else {
              closure_134_4 = value;
              const _HermesInternal2 = HermesInternal;
              closure_134_3.assets[0].p = "data:image/png;base64," + closure_134_4;
            }
          } else if (4 === tmp8) {
            if (arg0 === 1) {
              c11 = 3;
              throw value;
            } else if (arg0 === 2) {
              c9 = 0;
              c11 = 3;
              const obj16 = { value, done: true };
              return obj16;
            } else {
              const _HermesInternal = HermesInternal;
              closure_134_5 = "data:image/png;base64," + value;
              closure_134_3.assets[0].p = closure_134_5;
              const obj17 = { uri: closure_134_5 };
              closure_134_1 = obj17;
            }
          } else if (arg0 === 1) {
            c11 = 3;
            throw value;
          } else if (arg0 === 2) {
            c9 = 0;
            c11 = 3;
            const obj18 = { value, done: true };
            return obj18;
          } else {
            closure_134_7 = value;
            closure_134_8 = closure_135_4(closure_134_7[0], 3);
            closure_134_9 = closure_134_8[0];
            closure_134_10 = closure_134_8[1];
            closure_134_11 = closure_134_8[2];
            const obj20 = { r: closure_134_9, g: closure_134_10, b: closure_134_11 };
            closure_134_6 = closure_135_0(closure_135_2[10]).replaceAnimationColors(closure_134_6, obj20);
            const _JSON2 = JSON;
            c9 = 0;
            c11 = 3;
            const obj = { value: JSON.parse(closure_134_6), done: true };
            return obj;
          }
          const _JSON = JSON;
          closure_134_6 = JSON.stringify(closure_134_3);
          if (null == closure_134_0.id) {
            closure_134_6 = closure_134_6.replace(/"a":{"a":0,"k":\[64,64/, "\"a\":{\"a\":0,\"k\":[36,36");
            if (obj5.isAndroid()) {
              closure_134_6 = closure_134_6.replace(/"w":128,"h":128/, "\"w\":72,\"h\":72");
            }
            obj5 = closure_135_0(closure_135_2[9]);
          }
          c10 = 5;
          c11 = 1;
          const obj22 = { value: closure_135_1(closure_135_2[8]).getDominantColors(closure_134_1), done: false };
          return obj22;
        }
      } catch (tmp46) {
        closure_8 = tmp46;
        if (tmp4 === c9) {
          c11 = tmp2;
          throw tmp46;
        } else {
          c10 = tmp;
        }
      }
    }
  })();
};
function generateAnimationSourceFromLocalImage(arg0) {
  const self = this;
  const apply = closure_10.apply;
  if (typeof apply === "unknown") {
    let applyArgumentsResult = HermesBuiltin.applyArguments(self);
  } else {
    applyArgumentsResult = apply(self, arguments);
  }
  return applyArgumentsResult;
}
let closure_10 = async function _generateAnimationSourceFromLocalImage(arg0) {
  if (c6 === 2) {
    c6 = 3;
    throw new TypeError("Generator functions may not be called on executing generators");
  } else if (tmp6 === 3) {
    if (arg0 === 1) {
      throw value;
    } else if (arg0 === 2) {
      const obj2 = { value, done: true };
      return obj2;
    } else {
      return { value: "IconComponent", done: "+51" };
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
          const obj3 = { value, done: true };
          return obj3;
        } else {
          closure_2 = tmp3;
          closure_1 = tmp7;
          closure_129_0 = undefined;
          closure_129_1 = undefined;
          ({ animationSource: closure_129_0, localImageSource: closure_129_1 } = closure_0);
          closure_129_2 = undefined;
          closure_129_3 = undefined;
          closure_129_4 = undefined;
          closure_129_5 = undefined;
          closure_129_6 = undefined;
          closure_129_7 = undefined;
          closure_129_8 = undefined;
          closure_129_9 = undefined;
          c5 = 1;
          c6 = 1;
          return { value: "Set", done: true };
        }
      } else if (1 === tmp7) {
        if (arg0 === 1) {
          c6 = 3;
          throw value;
        } else if (arg0 === 2) {
          c6 = 3;
          const obj4 = { value, done: true };
          return obj4;
        } else {
          c4 = 1;
          const _Array = Array;
          let tmp14 = closure_129_1;
          if (Array.isArray(closure_129_1)) {
            let first = tmp14[0];
          } else {
            first = tmp14;
          }
          closure_129_2 = closure_130_6.resolveAssetSource(first);
          tmp14 = closure_129_2;
          const avatarBase64 = closure_130_1(closure_130_2[8]).getAvatarBase64(closure_129_2);
          c5 = 3;
          c6 = 1;
          const obj5 = closure_130_1(closure_130_2[8]);
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
          const obj6 = { value, done: true };
          return obj6;
        } else {
          closure_129_3 = value;
          const _HermesInternal = HermesInternal;
          closure_129_0.assets[0].p = "data:image/png;base64," + closure_129_3;
          const _JSON2 = JSON;
          closure_129_4 = JSON.stringify(closure_129_0);
          c5 = 4;
          c6 = 1;
          const obj7 = { value: closure_130_1(closure_130_2[8]).getDominantColors(closure_129_2), done: false };
          return obj7;
        }
      } else if (arg0 === 1) {
        c6 = 3;
        throw value;
      } else if (arg0 === 2) {
        c4 = 0;
        c6 = 3;
        const obj8 = { value, done: true };
        return obj8;
      } else {
        closure_129_5 = value;
        closure_129_6 = closure_130_4(closure_129_5[0], 3);
        closure_129_7 = closure_129_6[0];
        closure_129_8 = closure_129_6[1];
        closure_129_9 = closure_129_6[2];
        const obj10 = { r: closure_129_7, g: closure_129_8, b: closure_129_9 };
        closure_129_4 = closure_130_0(closure_130_2[10]).replaceAnimationColors(closure_129_4, obj10);
        const _JSON = JSON;
        c4 = 0;
        c6 = 3;
        const obj = { value: JSON.parse(closure_129_4), done: true };
        return obj;
      }
    } catch (tmp17) {
      closure_3 = tmp17;
      if (tmp4 === c4) {
        c6 = tmp2;
        throw tmp17;
      } else {
        c5 = tmp;
      }
    }
  }
};
const Image = fn(17).Image;
fn(558);
const ReactCompilerGating = fn(558);
let tmp2 = ReactCompilerGating.isReactCompilerEnabled() ? (function useBurstReactionAnimationSource(channelId) {
  const cResult = channelId(emoji[5]).c(6);
  channelId = channelId.channelId;
  const messageId = channelId.messageId;
  emoji = channelId.emoji;
  const isFullscreen = channelId.isFullscreen;
  let obj = channelId(emoji[5]);
  _slicedToArray = _slicedToArray(noop.useState(null), 2)[1];
  if (cResult[0] === channelId) {
    if (cResult[1] === emoji) {
      if (cResult[2] === isFullscreen) {
        if (cResult[3] === messageId) {
          let tmp4 = cResult[4];
          let tmp5 = cResult[5];
        }
        const effect = noop.useEffect(tmp4, tmp5);
        return tmp3;
      }
    }
  }
  const fn = function u() {
    closure_0 = isFullscreen(function*() {
      if (c3 === 2) {
        c3 = 3;
        throw new TypeError("Generator functions may not be called on executing generators");
      } else if (tmp4 === 3) {
        if (arg0 === 1) {
          throw value;
        } else if (arg0 === 2) {
          const obj2 = { value, done: true };
          return obj2;
        } else {
          return { value: "IconComponent", done: "+51" };
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
              const obj3 = { value, done: true };
              return obj3;
            } else {
              closure_1 = tmp2;
              closure_0 = tmp5;
              closure_128_0 = undefined;
              if (null != c2) {
                c2 = 1;
                c3 = 1;
                const obj4 = { value: generateAnimationSource(closure_0, closure_1, tmp11, c3), done: false };
                return obj4;
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
          const obj = { value, done: true };
          return obj;
        } catch (tmp18) {
          c3 = tmp;
          throw tmp18;
        }
      }
    });
    (function getSource() {
      const self = this;
      const apply = closure_0.apply;
      if (typeof apply === "unknown") {
        let applyArgumentsResult = HermesBuiltin.applyArguments(self);
      } else {
        applyArgumentsResult = apply(self, arguments);
      }
      return applyArgumentsResult;
    })();
  };
  const items = [channelId, messageId, emoji, isFullscreen];
  cResult[0] = channelId;
  cResult[1] = emoji;
  cResult[2] = isFullscreen;
  cResult[3] = messageId;
  cResult[4] = fn;
  cResult[5] = items;
  tmp5 = items;
  tmp4 = fn;
  const tmp2 = _slicedToArray(noop.useState(null), 2);
}) : (function useBurstReactionAnimationSource(channelId) {
  channelId = channelId.channelId;
  const messageId = channelId.messageId;
  const emoji = channelId.emoji;
  const isFullscreen = channelId.isFullscreen;
  _slicedToArray = undefined;
  const tmp = _slicedToArray(noop.useState(null), 2);
  _slicedToArray = tmp[1];
  const items = [channelId, messageId, emoji, isFullscreen];
  const effect = noop.useEffect(() => {
    closure_0 = async function _getSource2() {
      if (c3 === 2) {
        c3 = 3;
        throw new TypeError("Generator functions may not be called on executing generators");
      } else if (tmp4 === 3) {
        if (arg0 === 1) {
          throw value;
        } else if (arg0 === 2) {
          const obj2 = { value, done: true };
          return obj2;
        } else {
          return { value: "IconComponent", done: "+51" };
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
              const obj3 = { value, done: true };
              return obj3;
            } else {
              closure_1 = tmp2;
              closure_0 = tmp5;
              closure_128_0 = undefined;
              if (null != c2) {
                c2 = 1;
                c3 = 1;
                const obj4 = { value: generateAnimationSource(closure_0, closure_1, tmp11, c3), done: false };
                return obj4;
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
          const obj = { value, done: true };
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
});
const size = fn(2);
const result = size.fileFinishedImporting("modules/messages/native/burst_reactions/BurstReactionEffectUtils.tsx");

export const useBurstReactionAnimationSource = tmp2;
export const useSuperReactionAnimationSourceFromLocalImage = ReactCompilerGating.isReactCompilerEnabled() ? (function useSuperReactionAnimationSourceFromLocalImage(animationSource) {
  const cResult = animationSource(576).c(4);
  animationSource = animationSource.animationSource;
  let localImageSource = animationSource.localImageSource;
  let obj = animationSource(576);
  dependencyMap = _slicedToArray(noop.useState(null), 2)[1];
  if (cResult[0] === animationSource) {
    if (cResult[1] === localImageSource) {
      let tmp4 = cResult[2];
      let tmp5 = cResult[3];
    }
    const effect = noop.useEffect(tmp4, tmp5);
    return tmp3;
  }
  const fn = function u() {
    closure_0 = asyncGeneratorStep(async () => {
      if (c3 === 2) {
        c3 = 3;
        throw new TypeError("Generator functions may not be called on executing generators");
      } else if (tmp4 === 3) {
        if (arg0 === 1) {
          throw value;
        } else if (arg0 === 2) {
          const obj2 = { value, done: true };
          return obj2;
        } else {
          return { value: "IconComponent", done: "+51" };
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
              const obj3 = { value, done: true };
              return obj3;
            } else {
              localImageSource = tmp2;
              animationSource = tmp5;
              closure_128_0 = undefined;
              const obj4 = { animationSource, localImageSource };
              v1 = 1;
              c3 = 1;
              const obj5 = { value: generateAnimationSourceFromLocalImage(obj4), done: false };
              return obj5;
            }
          } else if (arg0 === 1) {
            c3 = 3;
            throw value;
          } else if (arg0 === 2) {
            c3 = 3;
            const obj = { value, done: true };
            return obj;
          } else {
            closure_128_0 = value;
            v1(closure_128_0);
            c3 = 3;
            return { value: "IconComponent", done: "+51" };
          }
        } catch (tmp14) {
          c3 = tmp;
          throw tmp14;
        }
      }
    });
    (function getSource() {
      const self = this;
      const apply = closure_0.apply;
      if (typeof apply === "unknown") {
        let applyArgumentsResult = HermesBuiltin.applyArguments(self);
      } else {
        applyArgumentsResult = apply(self, arguments);
      }
      return applyArgumentsResult;
    })();
  };
  const items = [animationSource, localImageSource];
  cResult[0] = animationSource;
  cResult[1] = localImageSource;
  cResult[2] = fn;
  cResult[3] = items;
  tmp5 = items;
  tmp4 = fn;
  const tmp2 = _slicedToArray(noop.useState(null), 2);
}) : (function useSuperReactionAnimationSourceFromLocalImage(animationSource) {
  animationSource = animationSource.animationSource;
  let localImageSource = animationSource.localImageSource;
  const tmp = _slicedToArray(noop.useState(null), 2);
  closure_2 = tmp[1];
  const items = [animationSource, localImageSource];
  const effect = noop.useEffect(() => {
    closure_0 = async function _getSource4() {
      if (c3 === 2) {
        c3 = 3;
        throw new TypeError("Generator functions may not be called on executing generators");
      } else if (tmp4 === 3) {
        if (arg0 === 1) {
          throw value;
        } else if (arg0 === 2) {
          const obj2 = { value, done: true };
          return obj2;
        } else {
          return { value: "IconComponent", done: "+51" };
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
              const obj3 = { value, done: true };
              return obj3;
            } else {
              localImageSource = tmp2;
              animationSource = tmp5;
              closure_128_0 = undefined;
              const obj4 = { animationSource, localImageSource };
              v1 = 1;
              c3 = 1;
              const obj5 = { value: generateAnimationSourceFromLocalImage(obj4), done: false };
              return obj5;
            }
          } else if (arg0 === 1) {
            c3 = 3;
            throw value;
          } else if (arg0 === 2) {
            c3 = 3;
            const obj = { value, done: true };
            return obj;
          } else {
            closure_128_0 = value;
            v1(closure_128_0);
            c3 = 3;
            return { value: "IconComponent", done: "+51" };
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
});
export const EMOJI_IN_ANIMATION_SIZE = 128;
export const BACKDROP_OPACITY = 0.8;