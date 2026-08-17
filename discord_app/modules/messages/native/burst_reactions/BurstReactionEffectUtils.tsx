// discord_app/modules/messages/native/burst_reactions/BurstReactionEffectUtils.tsx
import closure_2 from "asyncGeneratorStep" /* 5 */;
import closure_3 from "_slicedToArray" /* 32 */;
import closure_4 from "noop" /* 19 */;
import get_ActivityIndicator from "get ActivityIndicator" /* 17 */;

const require = arg1;
function _generateAnimationSource() {
  const self = this;
  const tmp = callback((arg0, arg1, arg2, arg3) => {
    closure_0 = arg0;
    closure_1 = arg1;
    closure_2 = arg2;
    closure_3 = arg3;
    c9 = 0;
    c10 = 0;
    c8 = 0;
    return (function*(arg0, arg1, arg2, arg3) {
      if (c10 === 2) {
        c10 = 3;
        HermesBuiltin.throwTypeError();
      } else if (tmp7 === 3) {
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
          c10 = 2;
          if (0 === c9) {
            if (arg0 === 1) {
              c10 = 3;
              throw arg1;
            } else if (arg0 === 2) {
              c10 = 3;
              obj = { value: null, done: true };
              obj[0] = arg1;
              return obj;
            } else {
              closure_6 = tmp3;
              closure_5 = tmp5;
              const lib = closure_2;
              dependencyMap = undefined;
              closure_2 = undefined;
              let lib2;
              closure_4 = undefined;
              closure_5 = undefined;
              closure_6 = undefined;
              let table;
              let dependencyMap2;
              c9 = undefined;
              c10 = undefined;
              closure_11 = undefined;
              dependencyMap2 = 1;
              obj1 = {};
              const merged = Object.assign(closure_2);
              obj1.animated = false;
              const emojiUrl = lib(4038).getEmojiUrl(obj1, 128);
              closure_4 = emojiUrl;
              if (emojiUrl == null) {
                closure_4 = "";
              }
              closure_2 = closure_4;
              const obj12 = lib(7532);
              c9 = 2;
              c10 = 1;
              let obj2 = { value: null, done: false };
              obj2[0] = obj12.getBurstAnimation(lib, dependencyMap, closure_2.name, lib2);
              return obj2;
            }
          } else if (1 === tmp8) {
            dependencyMap2 = 0;
            c10 = 3;
            return { value: null, done: true };
          } else if (2 === tmp8) {
            if (arg0 === 1) {
              c10 = 3;
              throw arg1;
            } else if (arg0 === 2) {
              dependencyMap2 = 0;
              c10 = 3;
              const obj3 = { value: null, done: true };
              obj3[0] = arg1;
              return obj3;
            } else {
              lib2 = arg1;
              if ("" !== closure_2) {
                let obj8 = lib(1435);
                dependencyMap = obj8.makeSource(closure_2);
                const ImageManager3 = closure_5.ImageManager;
                c9 = 3;
                c10 = 1;
                let obj4 = { value: null, done: false };
                obj4[0] = ImageManager3.getAvatarBase64(dependencyMap);
                return obj4;
              } else {
                const ImageManager2 = closure_5.ImageManager;
                c9 = 4;
                c10 = 1;
                const obj5 = { value: null, done: false };
                obj5[0] = ImageManager2.getEmojiBase64(lib.name, 128);
                return obj5;
              }
            }
          } else {
            if (3 === tmp8) {
              if (arg0 === 1) {
                c10 = 3;
                throw arg1;
              } else if (arg0 === 2) {
                dependencyMap2 = 0;
                c10 = 3;
                const obj6 = { value: null, done: true };
                obj6[0] = arg1;
                return obj6;
              } else {
                closure_4 = arg1;
                const _HermesInternal2 = HermesInternal;
                lib2.assets[0].p = "data:image/png;base64," + closure_4;
              }
            } else if (4 === tmp8) {
              if (arg0 === 1) {
                c10 = 3;
                throw arg1;
              } else if (arg0 === 2) {
                dependencyMap2 = 0;
                c10 = 3;
                const obj7 = { value: null, done: true };
                obj7[0] = arg1;
                return obj7;
              } else {
                const _HermesInternal = HermesInternal;
                closure_5 = "data:image/png;base64," + arg1;
                lib2.assets[0].p = closure_5;
                obj2 = lib(1435);
                dependencyMap = obj2.makeSource(closure_5);
              }
            } else if (arg0 === 1) {
              c10 = 3;
              throw arg1;
            } else if (arg0 === 2) {
              dependencyMap2 = 0;
              c10 = 3;
              obj8 = { value: null, done: true };
              obj8[0] = arg1;
              return obj8;
            } else {
              table = arg1;
              dependencyMap2 = lib2(table[0], 3);
              c9 = 5;
              c10 = 32;
              closure_11 = 19;
              const obj9 = { r: null, g: null, b: null };
              obj9[0] = c9;
              obj9[1] = c10;
              obj9[2] = closure_11;
              closure_6 = lib(7569).replaceAnimationColors(closure_6, obj9);
              const _JSON2 = JSON;
              dependencyMap2 = 0;
              c10 = 3;
              obj = { value: null, done: true };
              obj[0] = JSON.parse(closure_6);
              return obj;
            }
            const _JSON = JSON;
            closure_6 = JSON.stringify(lib2);
            if (null == lib.id) {
              closure_6 = closure_6.replace(/"a":{"a":0,"k":\[64,64/, "\"a\":{\"a\":0,\"k\":[36,36");
              obj4 = lib(500);
              if (obj4.isAndroid()) {
                closure_6 = closure_6.replace(/"w":128,"h":128/, "\"w\":72,\"h\":72");
              }
            }
            const ImageManager = closure_5.ImageManager;
            c9 = 5;
            c10 = 1;
            const obj10 = { value: null, done: false };
            obj10[0] = ImageManager.getDominantColors(dependencyMap);
            return obj10;
          }
        } catch (tmp47) {
          table = tmp47;
          if (tmp4 === dependencyMap2) {
            c10 = tmp2;
            throw tmp47;
          } else {
            c9 = tmp;
          }
        }
      }
    })();
  });
  closure_7 = tmp;
  const apply = tmp.apply;
  if (typeof apply === "unknown") {
    let applyArgumentsResult = HermesBuiltin.applyArguments(self);
  } else {
    applyArgumentsResult = apply(self, arguments);
  }
  return applyArgumentsResult;
}
function _generateAnimationSourceFromLocalImage() {
  const self = this;
  const tmp = callback((arg0) => {
    closure_0 = arg0;
    c5 = 0;
    c6 = 0;
    c4 = 0;
    const iter = (function*(arg0) {
      if (c6 === 2) {
        c6 = 3;
        HermesBuiltin.throwTypeError();
      } else if (tmp6 === 3) {
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
          c6 = 2;
          if (0 === c5) {
            if (arg0 === 1) {
              c6 = 3;
              throw arg1;
            } else if (arg0 === 2) {
              c6 = 3;
              obj = { value: null, done: true };
              obj[0] = arg1;
              return obj;
            } else {
              let uri = tmp3;
              dependencyMap = tmp7;
              let lib;
              dependencyMap = undefined;
              ({ animationSource: c0, localImageSource: c1 } = lib);
              uri = undefined;
              let callback;
              c4 = undefined;
              c5 = undefined;
              c6 = undefined;
              let dependencyMap2;
              closure_8 = undefined;
              closure_9 = undefined;
              closure_10 = undefined;
              c5 = 1;
              c6 = 1;
              return { value: "ct", done: true };
            }
          } else if (1 === tmp7) {
            if (arg0 === 1) {
              c6 = 3;
              throw arg1;
            } else if (arg0 === 2) {
              c6 = 3;
              obj1 = { value: null, done: true };
              obj1[0] = arg1;
              return obj1;
            } else {
              c4 = 1;
              uri = c6.resolveAssetSource(dependencyMap).uri;
              callback = lib(1435).makeSource(uri);
              const ImageManager2 = c5.ImageManager;
              c5 = 3;
              c6 = 1;
              const obj2 = { value: null, done: false };
              obj2[0] = ImageManager2.getAvatarBase64(callback);
              return obj2;
            }
          } else if (2 === tmp7) {
            c4 = 0;
            c6 = 3;
            return { value: null, done: true };
          } else if (3 === tmp7) {
            if (arg0 === 1) {
              c6 = 3;
              throw arg1;
            } else if (arg0 === 2) {
              c4 = 0;
              c6 = 3;
              const obj3 = { value: null, done: true };
              obj3[0] = arg1;
              return obj3;
            } else {
              c4 = arg1;
              const _HermesInternal = HermesInternal;
              lib.assets[0].p = "data:image/png;base64," + c4;
              const _JSON2 = JSON;
              c5 = JSON.stringify(lib);
              const ImageManager = c5.ImageManager;
              c5 = 4;
              c6 = 1;
              const obj4 = { value: null, done: false };
              obj4[0] = ImageManager.getDominantColors(callback);
              return obj4;
            }
          } else if (arg0 === 1) {
            c6 = 3;
            throw arg1;
          } else if (arg0 === 2) {
            c4 = 0;
            c6 = 3;
            const obj5 = { value: null, done: true };
            obj5[0] = arg1;
            return obj5;
          } else {
            c6 = arg1;
            dependencyMap2 = callback(c6[0], 3);
            closure_8 = 5;
            closure_9 = 32;
            closure_10 = 19;
            const obj6 = { r: null, g: null, b: null };
            obj6[0] = closure_8;
            obj6[1] = closure_9;
            obj6[2] = closure_10;
            c5 = lib(7569).replaceAnimationColors(c5, obj6);
            const _JSON = JSON;
            c4 = 0;
            c6 = 3;
            obj = { value: null, done: true };
            obj[0] = JSON.parse(c5);
            return obj;
          }
        } catch (tmp10) {
          callback = tmp10;
          if (tmp4 === c4) {
            c6 = tmp2;
            throw tmp10;
          } else {
            c5 = tmp;
          }
        }
      }
    })();
    iter.next();
    return iter;
  });
  closure_8 = tmp;
  const apply = tmp.apply;
  if (typeof apply === "unknown") {
    let applyArgumentsResult = HermesBuiltin.applyArguments(self);
  } else {
    applyArgumentsResult = apply(self, arguments);
  }
  return applyArgumentsResult;
}
({ NativeModules: c5, Image: closure_6 } = get_ActivityIndicator);
const result = require("set").fileFinishedImporting("modules/messages/native/burst_reactions/BurstReactionEffectUtils.tsx");

export const useBurstReactionAnimationSource = function useBurstReactionAnimationSource(channelId) {
  channelId = channelId.channelId;
  const messageId = channelId.messageId;
  const emoji = channelId.emoji;
  const isFullscreen = channelId.isFullscreen;
  let React;
  let tmp = isFullscreen(React.useState(null), 2);
  React = tmp[1];
  const items = [channelId, messageId, emoji, isFullscreen];
  const effect = React.useEffect(() => {
    function _getSource() {
      let self = this;
      const tmp = emoji(function*() {
        if (c3 === 2) {
          c3 = 3;
          HermesBuiltin.throwTypeError();
        } else if (tmp5 === 3) {
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
            c3 = 2;
            if (0 === c2) {
              if (arg0 === 1) {
                c3 = 3;
                throw arg1;
              } else if (arg0 === 2) {
                c3 = 3;
                obj = { value: null, done: true };
                obj[0] = arg1;
                return obj;
              } else {
                closure_1 = tmp2;
                closure_0 = tmp3;
                closure_0 = undefined;
                if (null != c2) {
                  c2 = 1;
                  c3 = 1;
                  obj1 = { value: null, done: false };
                  obj1[0] = (function generateAnimationSource(closure_1_0, closure_1_1, arg2, c3) {
                    const self = this;
                    const apply = closure_7.apply;
                    if (typeof apply === "unknown") {
                      let applyArgumentsResult = HermesBuiltin.applyArguments(self);
                    } else {
                      applyArgumentsResult = apply(self, arguments);
                    }
                    return applyArgumentsResult;
                  })(closure_1_0, closure_1_1, tmp12, c3);
                  return obj1;
                } else {
                  c3 = 3;
                }
              }
            } else if (arg0 === 1) {
              c3 = 3;
              throw arg1;
            } else if (arg0 !== 2) {
              closure_0 = arg1;
              closure_1_4(closure_0);
            }
            c3 = 3;
            obj = { value: null, done: true };
            obj[0] = arg1;
            return obj;
          } catch (tmp18) {
            c3 = tmp;
            throw tmp18;
          }
        }
      });
      closure_0 = tmp;
      let apply = tmp.apply;
      if (typeof apply === "unknown") {
        let applyArgumentsResult = HermesBuiltin.applyArguments(self);
      } else {
        applyArgumentsResult = apply(self, arguments);
      }
      return applyArgumentsResult;
    }
    !(function getSource() {
      const self = this;
      const apply = _getSource.apply;
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
export const useSuperReactionAnimationSourceFromLocalImage = function useSuperReactionAnimationSourceFromLocalImage(animationSource) {
  animationSource = animationSource.animationSource;
  const localImageSource = animationSource.localImageSource;
  closure_2 = undefined;
  let tmp = callback2(React.useState(null), 2);
  closure_2 = tmp[1];
  const items = [animationSource, localImageSource];
  const effect = React.useEffect(() => {
    function _getSource2() {
      let self = this;
      const tmp = callback(function*() {
        if (c3 === 2) {
          c3 = 3;
          HermesBuiltin.throwTypeError();
        } else if (tmp5 === 3) {
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
            c3 = 2;
            if (0 === v0) {
              if (arg0 === 1) {
                c3 = 3;
                throw arg1;
              } else if (arg0 === 2) {
                c3 = 3;
                obj = { value: null, done: true };
                obj[0] = arg1;
                return obj;
              } else {
                closure_1 = tmp3;
                closure_0 = tmp2;
                closure_0 = undefined;
                obj1 = { animationSource: null, localImageSource: null };
                obj1[0] = closure_1_0;
                obj1[1] = closure_1_1;
                v0 = 1;
                c3 = 1;
                const obj2 = { value: null, done: false };
                obj2[0] = (function generateAnimationSourceFromLocalImage(arg0) {
                  const self = this;
                  const apply = closure_8.apply;
                  if (typeof apply === "unknown") {
                    let applyArgumentsResult = HermesBuiltin.applyArguments(self);
                  } else {
                    applyArgumentsResult = apply(self, arguments);
                  }
                  return applyArgumentsResult;
                })(obj1);
                return obj2;
              }
            } else if (arg0 === 1) {
              c3 = 3;
              throw arg1;
            } else if (arg0 === 2) {
              c3 = 3;
              obj = { value: null, done: true };
              obj[0] = arg1;
              return obj;
            } else {
              closure_0 = arg1;
              v0(closure_0);
              c3 = 3;
              return { value: "HermesInternal", done: "HermesInternal" };
            }
          } catch (tmp14) {
            c3 = tmp;
            throw tmp14;
          }
        }
      });
      closure_0 = tmp;
      let apply = tmp.apply;
      if (typeof apply === "unknown") {
        let applyArgumentsResult = HermesBuiltin.applyArguments(self);
      } else {
        applyArgumentsResult = apply(self, arguments);
      }
      return applyArgumentsResult;
    }
    !(function getSource() {
      const self = this;
      const apply = _getSource2.apply;
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