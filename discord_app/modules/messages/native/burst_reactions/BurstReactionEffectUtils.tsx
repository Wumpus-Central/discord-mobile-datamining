// === Module 7423: burst_reactions/BurstReactionEffectUtils ===

// Module 7423 (burst_reactions/BurstReactionEffectUtils)
import react_native from "react-native" /* 17 */;
import EmojiUtils from "EmojiUtils" /* 4533 */;
import getBurstAnimation from "getBurstAnimation" /* 7424 */;
import _asyncToGenerator from "_asyncToGenerator" /* 5 */;
import _slicedToArray_mod from "_slicedToArray" /* 32 */;
import react from "react" /* 19 */;
import ReactCompilerGating_mod from "ReactCompilerGating" /* 558 */;
import size from "module_2" /* 2 */;

let c2, c3, channelId, dependencyMap, stringify;

function generateAnimationSource(arg0, arg1, arg2, arg3) {
  return obj(...arguments);
}
let obj = function _generateAnimationSource() {
  obj = _asyncToGenerator(async (arg0, arg1, uri, arg3) => {
    let closure_10;
    let closure_11;
    let closure_9;
    let user = arg0;
    let closure_1 = arg1;
    let closure_3 = arg3;
    let c10 = 0;
    let c11 = 0;
    let c9 = 0;
    return (async (arg0, value, arg2, arg3) => {
      if (c11 === 2) {
        c11 = 3;
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
        let c9;
        try {
          let obj13;
          let closure_4;
          let _var;
          let r;
          let g;
          let b;
          c11 = 2;
          if (0 === c10) {
            if (arg0 === 1) {
              c11 = 3;
              throw value;
            } else if (arg0 === 2) {
              c11 = 3;
              return { value, done: true };
            } else {
              user = uri;
              obj13 = undefined;
              uri = undefined;
              closure_3 = undefined;
              closure_4 = undefined;
              _var = undefined;
              stringify = undefined;
              closure_7 = undefined;
              closure_8 = undefined;
              r = undefined;
              g = undefined;
              b = undefined;
              c9 = 1;
              const obj4 = { animated: false };
              const getEmojiUrl = EmojiUtils.getEmojiUrl;
              EmojiUtils;
              const merged = Object.assign(uri);
              const emojiUrl = getEmojiUrl(obj4, 128);
              c4 = emojiUrl;
              const tmp69 = uri;
              if (emojiUrl == null) {
                c4 = "";
              }
              uri = c4;
              stringify = getBurstAnimation;
              c10 = 2;
              c11 = 1;
              const obj6 = { value: stringify.getBurstAnimation(user, closure_1, tmp69.name, closure_3), done: false };
              return obj6;
            }
          } else if (1 === c10) {
            c9 = 0;
            c11 = 3;
            return { value: null, done: true };
          } else if (2 === c10) {
            if (arg0 === 1) {
              c11 = 3;
              throw value;
            } else if (arg0 === 2) {
              c9 = 0;
              c11 = 3;
              return { value, done: true };
            } else {
              closure_3 = value;
              if ("" !== uri) {
                obj13 = { uri };
                const obj8 = { uri };
                stringify = closure_135_1(closure_135_2[8]);
                c10 = 3;
                c11 = 1;
                const obj9 = { value: stringify.getAvatarBase64(obj13), done: false };
                return obj9;
              } else {
                stringify = closure_135_1(closure_135_2[8]).getEmojiBase64;
                const name = user.name;
                let c5 = name;
                closure_135_1(closure_135_2[8]);
                if (name == null) {
                  c5 = "";
                }
                stringify = stringify(c5, 128);
                c10 = 4;
                c11 = 1;
                return { value: stringify, done: false };
              }
            }
          } else {
            if (3 === c10) {
              if (arg0 === 1) {
                c11 = 3;
                throw value;
              } else if (arg0 === 2) {
                c9 = 0;
                c11 = 3;
                return { value, done: true };
              } else {
                closure_4 = value;
                stringify = closure_4;
                const _HermesInternal2 = HermesInternal;
                closure_3.assets[0].p = "data:image/png;base64," + closure_4;
              }
            } else if (4 === c10) {
              if (arg0 === 1) {
                c11 = 3;
                throw value;
              } else if (arg0 === 2) {
                c9 = 0;
                c11 = 3;
                return { value, done: true };
              } else {
                const _HermesInternal = HermesInternal;
                _var = "data:image/png;base64," + value;
                closure_3.assets[0].p = _var;
                obj13 = { uri: _var };
                stringify = _var;
              }
            } else if (arg0 === 1) {
              c11 = 3;
              throw value;
            } else if (arg0 === 2) {
              c9 = 0;
              c11 = 3;
              return { value, done: true };
            } else {
              closure_7 = value;
              closure_8 = closure_135_4(closure_7[0], 3);
              r = closure_8[0];
              g = closure_8[1];
              b = closure_8[2];
              const obj16 = { r, g, b };
              const obj15 = closure_135_0(closure_135_2[10]);
              stringify = obj15.replaceAnimationColors(stringify, obj16);
              const _JSON2 = JSON;
              c9 = 0;
              c11 = 3;
              obj = { value: JSON.parse(stringify), done: true };
              return obj;
            }
            const _JSON = JSON;
            stringify = JSON.stringify;
            stringify = stringify(closure_3);
            if (null == user.id) {
              stringify = stringify.replace(/"a":{"a":0,"k":\[64,64/, "\"a\":{\"a\":0,\"k\":[36,36");
              const obj5 = closure_135_0(closure_135_2[9]);
              if (obj5.isAndroid()) {
                stringify = stringify.replace(/"w":128,"h":128/, "\"w\":72,\"h\":72");
              }
            }
            stringify = closure_135_1(closure_135_2[8]);
            c10 = 5;
            c11 = 1;
            const obj17 = { value: stringify.getDominantColors(obj13), done: false };
            return obj17;
          }
        } catch (tmp41) {
          closure_8 = tmp41;
          if (0 === c9) {
            c11 = 3;
            throw tmp41;
          } else {
            c10 = 1;
          }
        }
      }
    })();
  });
  return obj(...arguments);
};
function generateAnimationSourceFromLocalImage(arg0) {
  return obj(...arguments);
}
obj = function _generateAnimationSourceFromLocalImage() {
  obj = _asyncToGenerator(async (arg0) => {
    let closure_7;
    let closure_8;
    let closure_9;
    let assets = arg0;
    let c5 = 0;
    let c6 = 0;
    let c4 = 0;
    const iter = (async (arg0) => {
      let c0;
      let c1;
      let obj12;
      let obj5;
      if (c6 === 2) {
        c6 = 3;
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
          let closure_4;
          let closure_5;
          let closure_6;
          let r;
          let g;
          let b;
          c6 = 2;
          if (0 === c5) {
            if (arg0 === 1) {
              c6 = 3;
              throw value;
            } else if (arg0 === 2) {
              c6 = 3;
              return { value, done: true };
            } else {
              closure_1 = tmp4;
              assets = undefined;
              c1 = undefined;
              ({ animationSource: c0, localImageSource: c1 } = closure_0);
              closure_2 = undefined;
              closure_3 = undefined;
              closure_4 = undefined;
              closure_5 = undefined;
              closure_6 = undefined;
              r = undefined;
              g = undefined;
              b = undefined;
              c5 = 1;
              c6 = 1;
              return { value: "Reflect", done: true };
            }
          } else if (1 === c5) {
            if (arg0 === 1) {
              c6 = 3;
              throw value;
            } else if (arg0 === 2) {
              c6 = 3;
              return { value, done: true };
            } else {
              let first;
              c4 = 1;
              const _Array = Array;
              const resolveAssetSource = closure_130_6.resolveAssetSource;
              if (Array.isArray(c1)) {
                first = tmp47[0];
              } else {
                first = tmp47;
              }
              closure_2 = resolveAssetSource(first);
              c5 = 3;
              c6 = 1;
              const obj6 = { value: obj5.getAvatarBase64(closure_2), done: false };
              obj5 = closure_130_1(closure_130_2[8]);
              return obj6;
            }
          } else if (2 === c5) {
            c4 = 0;
            c6 = 3;
            return { value: null, done: true };
          } else if (3 === c5) {
            if (arg0 === 1) {
              c6 = 3;
              throw value;
            } else if (arg0 === 2) {
              c4 = 0;
              c6 = 3;
              return { value, done: true };
            } else {
              closure_3 = value;
              const _HermesInternal = HermesInternal;
              assets.assets[0].p = "data:image/png;base64," + closure_3;
              const _JSON2 = JSON;
              closure_4 = JSON.stringify(assets);
              c5 = 4;
              c6 = 1;
              const obj8 = { value: obj12.getDominantColors(closure_2), done: false };
              obj12 = closure_130_1(closure_130_2[8]);
              return obj8;
            }
          } else if (arg0 === 1) {
            c6 = 3;
            throw value;
          } else if (arg0 === 2) {
            c4 = 0;
            c6 = 3;
            return { value, done: true };
          } else {
            closure_5 = value;
            closure_6 = closure_130_4(closure_5[0], 3);
            r = closure_6[0];
            g = closure_6[1];
            b = closure_6[2];
            const obj11 = { r, g, b };
            const obj10 = closure_130_0(closure_130_2[10]);
            closure_4 = obj10.replaceAnimationColors(closure_4, obj11);
            const _JSON = JSON;
            c4 = 0;
            c6 = 3;
            obj = { value: JSON.parse(closure_4), done: true };
            return obj;
          }
        } catch (tmp13) {
          closure_3 = tmp13;
          if (0 === c4) {
            c6 = 3;
            throw tmp13;
          } else {
            c5 = 2;
          }
        }
      }
    })();
    iter.next();
    return iter;
  });
  return obj(...arguments);
};
let _slicedToArray = _slicedToArray_mod;
const Image = react_native.Image;
let ReactCompilerGating = ReactCompilerGating_mod;
const tmp2 = ReactCompilerGating.isReactCompilerEnabled() ? ((channelId) => {
  let closure_4;
  let emoji;
  obj = channelId(emoji[5]);
  const cResult = obj.c(6);
  channelId = channelId.channelId;
  const messageId = channelId.messageId;
  emoji = channelId.emoji;
  const isFullscreen = channelId.isFullscreen;
  [, _slicedToArray] = react.useState(null);
  if (cResult[0] === channelId) {
    if (cResult[1] === emoji) {
      if (cResult[2] === isFullscreen) {
        let tmp4;
        let tmp5;
        if (cResult[3] === messageId) {
          tmp4 = cResult[4];
          tmp5 = cResult[5];
        }
        const effect = react.useEffect(tmp4, tmp5);
        return tmp3;
      }
    }
  }
  const fn = function u() {
    function getSource() {
      return closure_0(...arguments);
    }
    let closure_0 = isFullscreen(function*() {
      if (c3 === 2) {
        c3 = 3;
        throw new TypeError("Generator functions may not be called on executing generators");
      } else if (tmp3 === 3) {
        if (arg0 === 1) {
          throw value;
        } else if (arg0 === 2) {
          const obj2 = { value, done: true };
          return obj2;
        } else {
          return { value: "IconComponent", done: null };
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
              let closure_1 = tmp;
              closure_0 = undefined;
              if (null != c2) {
                c2 = 1;
                c3 = 1;
                const obj4 = { value: generateAnimationSource(closure_0, closure_1, c2, c3), done: false };
                return obj4;
              }
            }
          } else if (arg0 === 1) {
            c3 = 3;
            throw value;
          } else if (arg0 === 2) {
            c3 = 3;
            obj = { value, done: true };
            return obj;
          } else {
            closure_0 = value;
            closure_1_4(closure_0);
          }
          c3 = 3;
          return { value: "IconComponent", done: null };
        } catch (tmp17) {
          c3 = 3;
          throw tmp17;
        }
      }
    });
    const tmp = getSource();
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
}) : ((channelId) => {
  let closure_4;
  let first;
  channelId = channelId.channelId;
  const messageId = channelId.messageId;
  const emoji = channelId.emoji;
  const isFullscreen = channelId.isFullscreen;
  _slicedToArray = undefined;
  [first, _slicedToArray] = react.useState(null);
  const items = [channelId, messageId, emoji, isFullscreen];
  const effect = react.useEffect(() => {
    function getSource() {
      return obj(...arguments);
    }
    obj = function _getSource2() {
      obj = _asyncToGenerator(async () => {
        if (c3 === 2) {
          c3 = 3;
          throw new TypeError("Generator functions may not be called on executing generators");
        } else if (tmp3 === 3) {
          if (arg0 === 1) {
            throw value;
          } else if (arg0 === 2) {
            const obj2 = { value, done: true };
            return obj2;
          } else {
            return { value: "IconComponent", done: null };
          }
        } else {
          try {
            let closure_0;
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
                let closure_1 = tmp;
                closure_0 = undefined;
                if (null != c2) {
                  c2 = 1;
                  c3 = 1;
                  const obj4 = { value: closure_2_7(closure_0, closure_1, c2, c3), done: false };
                  return obj4;
                }
              }
            } else if (arg0 === 1) {
              c3 = 3;
              throw value;
            } else if (arg0 === 2) {
              c3 = 3;
              obj = { value, done: true };
              return obj;
            } else {
              closure_0 = value;
              closure_1_4(closure_0);
            }
            c3 = 3;
            return { value: "IconComponent", done: null };
          } catch (tmp17) {
            c3 = 3;
            throw tmp17;
          }
        }
      });
      return obj(...arguments);
    };
    const tmp = !getSource();
  }, items);
  return first;
});
ReactCompilerGating = ReactCompilerGating_mod;
const tmp3 = ReactCompilerGating.isReactCompilerEnabled() ? (function useSuperReactionAnimationSourceFromLocalImage(animationSource) {
  let closure_2;
  obj = animationSource(576);
  const cResult = obj.c(4);
  animationSource = animationSource.animationSource;
  let localImageSource = animationSource.localImageSource;
  dependencyMap = _slicedToArray(react.useState(null), 2)[1];
  _slicedToArray(react.useState(null), 2);
  if (cResult[0] === animationSource) {
    let tmp4;
    let tmp5;
    if (cResult[1] === localImageSource) {
      tmp4 = cResult[2];
      tmp5 = cResult[3];
    }
    const effect = react.useEffect(tmp4, tmp5);
    return tmp3;
  }
  const fn = function u() {
    function getSource() {
      return closure_0(...arguments);
    }
    let closure_0 = _asyncToGenerator(async () => {
      let v1;
      if (c3 === 2) {
        c3 = 3;
        throw new TypeError("Generator functions may not be called on executing generators");
      } else if (tmp3 === 3) {
        if (arg0 === 1) {
          throw value;
        } else if (arg0 === 2) {
          const obj2 = { value, done: true };
          return obj2;
        } else {
          return { value: "IconComponent", done: null };
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
              localImageSource = tmp;
              animationSource = undefined;
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
            obj = { value, done: true };
            return obj;
          } else {
            animationSource = value;
            v1(animationSource);
            c3 = 3;
            return { value: "IconComponent", done: null };
          }
        } catch (tmp13) {
          c3 = 3;
          throw tmp13;
        }
      }
    });
    const tmp = getSource();
  };
  const items = [animationSource, localImageSource];
  cResult[0] = animationSource;
  cResult[1] = localImageSource;
  cResult[2] = fn;
  cResult[3] = items;
  tmp5 = items;
  tmp4 = fn;
}) : (function useSuperReactionAnimationSourceFromLocalImage(animationSource) {
  let closure_2;
  let first;
  animationSource = animationSource.animationSource;
  let localImageSource = animationSource.localImageSource;
  closure_2 = undefined;
  [first, closure_2] = react.useState(null);
  const items = [animationSource, localImageSource];
  const effect = react.useEffect(() => {
    function getSource() {
      return obj(...arguments);
    }
    obj = function _getSource4() {
      obj = _asyncToGenerator(async () => {
        let v1;
        if (c3 === 2) {
          c3 = 3;
          throw new TypeError("Generator functions may not be called on executing generators");
        } else if (tmp3 === 3) {
          if (arg0 === 1) {
            throw value;
          } else if (arg0 === 2) {
            const obj2 = { value, done: true };
            return obj2;
          } else {
            return { value: "IconComponent", done: null };
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
                localImageSource = tmp;
                animationSource = undefined;
                const obj4 = { animationSource, localImageSource };
                v1 = 1;
                c3 = 1;
                const obj5 = { value: closure_2_9(obj4), done: false };
                return obj5;
              }
            } else if (arg0 === 1) {
              c3 = 3;
              throw value;
            } else if (arg0 === 2) {
              c3 = 3;
              obj = { value, done: true };
              return obj;
            } else {
              animationSource = value;
              v1(animationSource);
              c3 = 3;
              return { value: "IconComponent", done: null };
            }
          } catch (tmp13) {
            c3 = 3;
            throw tmp13;
          }
        }
      });
      return obj(...arguments);
    };
    const tmp = !getSource();
  }, items);
  return first;
});
const result = size.fileFinishedImporting("modules/messages/native/burst_reactions/BurstReactionEffectUtils.tsx");

export const useBurstReactionAnimationSource = tmp2;
export const useSuperReactionAnimationSourceFromLocalImage = tmp3;
export const EMOJI_IN_ANIMATION_SIZE = 128;
export const BACKDROP_OPACITY = 0.8;