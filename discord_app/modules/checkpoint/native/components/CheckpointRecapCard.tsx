// discord_app/modules/checkpoint/native/components/CheckpointRecapCard.tsx
import nativeDefault from "../../../../../discord_common/js/packages/tokens/native.tsx";
import getDevicePixelRatioDefault from "../../../../utils/getDevicePixelRatio.native.tsx";
import timing from "../../../../design/animation/reanimated/timing/timing.tsx";
import checkpoint_CheckpointMessageComponentUtils from "../../CheckpointMessageComponentUtils.tsx";
import _slicedToArray from "../../../../../_runtime/metro/00032__.js";
import noop from "../../../../../_runtime/metro/00019__.js";

require = fn;
get_ActivityIndicator = fn(17);
({ StyleSheet: hasOwnProperty, View: metroRequire } = get_ActivityIndicator);
const jsxProd = fn(21);
({ jsx: closure_7, jsxs: closure_8 } = jsxProd);
let c9 = 200;
let c10 = 268;
let c11 = 284;
let c12 = "M44 34V0H200V284H0V43.5H34L38 38L44 34Z";
let c13 = 40;
let c14 = "M0 40H30L40 30V0H10L0 10V40Z";
let c15 = 240;
let c16 = 150;
let c17 = 2026;
const CheckpointStatNumber = fn(12976);
const checkpointStatNumberWidth = CheckpointStatNumber.getCheckpointStatNumberWidth(2026, 64);
const createStyles = fn(4971);
let obj3 = {
  card: { width: 200, height: 268, overflow: "hidden", transformOrigin: "top left" },
  container: { position: "absolute", top: 0, left: 0 },
  year: null,
  logo: null,
  clyde: null,
  character: null,
};
const rect = { position: "absolute", left: 178 - checkpointStatNumberWidth / 2, top: 22.5, transform: null };
let items = [{ rotate: "90deg" }];
rect.transform = items;
obj3.year = rect;
let size = {
  position: "absolute",
  top: nativeDefault.space.PX_4,
  left: nativeDefault.space.PX_4,
  width: 40,
  height: 40,
  alignItems: "center",
  justifyContent: "center",
};
obj3.logo = size;
obj3.clyde = { width: 28, height: 28 };
let size1 = { position: "absolute", top: nativeDefault.space.PX_16, left: -20, width: 240, height: 240 };
obj3.character = size1;
let closure_18 = createStyles.createStyles(obj3);
const __initData = {
  code: "function CheckpointRecapCardTsx1(){const{isCardArtLoaded,withTiming,CARD_ART_FADE_IN_DURATION_MS}=this.__closure;return{opacity:isCardArtLoaded?withTiming(1,{duration:CARD_ART_FADE_IN_DURATION_MS}):0};}",
};
const __initData2 = {
  code: "function CheckpointRecapCardTsx2(){const{isCardArtLoaded,withTiming,CARD_ART_FADE_IN_DURATION_MS}=this.__closure;return{opacity:isCardArtLoaded?withTiming(1,{duration:CARD_ART_FADE_IN_DURATION_MS}):0};}",
};
const ReactCompilerGating = fn(558);
size = fn(2);
let result = size.fileFinishedImporting("modules/checkpoint/native/components/CheckpointRecapCard.tsx");

export default ReactCompilerGating.isReactCompilerEnabled()
  ? function CheckpointRecapCard(arg0) {
      const cResult = recapCardBackgroundImage(576).c(68);
      ({ character, maxHeight } = arg0);
      const tmp4 = closure_18();
      let num = 1;
      if (null != maxHeight) {
        const _Math = Math;
        const _Math2 = Math;
        num = Math.min(Math.max(maxHeight / c10, 0.75), 1);
      }
      const result = c9 * num;
      const result1 = c10 * num;
      if (cResult[0] === result) {
        if (cResult[3] !== num) {
          let obj2 = { transform: null };
          const obj3 = { scale: num };
          const items = [obj3];
          obj2.transform = items;
          cResult[3] = num;
          cResult[4] = obj2;
          let tmp11 = obj2;
        } else {
          tmp11 = cResult[4];
        }
        const cardColors = recapCardBackgroundImage(8624).getCardColors(character);
        ({ primaryBackgroundColor, secondaryBackgroundColor, recapCardBackgroundImage } = cardColors);
        if (cResult[5] !== character) {
          if (null != character) {
            const _Math3 = Math;
            let characterLayerUrls = recapCardBackgroundImage(6036).getCharacterLayerUrls(
              character,
              Math.round(c15 * first(1900)()),
            );
            const tmpResult3 = recapCardBackgroundImage(6036);
          } else {
            characterLayerUrls = [];
          }
          cResult[5] = character;
          cResult[6] = characterLayerUrls;
        } else {
          const _Symbol = Symbol;
          if (cResult[7] === Symbol.for("react.memo_cache_sentinel")) {
            class U {
              constructor() {
                set = new Set();
                return set;
              }
            }
            cResult[7] = U;
          } else {
            class U {
              constructor() {
                set = new Set();
                return set;
              }
            }
          }
          const tmp21 = hasItem(noop.useState(U), 2);
          first = tmp21[0];
          dependencyMap = tmp22;
          hasItem = first.has(recapCardBackgroundImage);
          if (hasItem) {
            class U {
              constructor() {
                set = new Set();
                return set;
              }
            }
            hasItem = cResult[6].length > 0;
          }
          if (hasItem) {
            class U {
              constructor() {
                set = new Set();
                return set;
              }
            }
          }
          const fn = function z() {
            let opacity = 0;
            if (hasItem) {
              const obj2 = { duration };
              opacity = timing.withTiming(1, obj2);
            }
            return { opacity };
          };
          const obj4 = {
            isCardArtLoaded: hasItem,
            withTiming: recapCardBackgroundImage(5206).withTiming,
            CARD_ART_FADE_IN_DURATION_MS: v150,
          };
          fn.__closure = obj4;
          fn.__workletHash = 7330466380212;
          fn.__initData = __initData;
          const animatedStyle = recapCardBackgroundImage(5052).useAnimatedStyle(fn);
          if (cResult[8] !== tmp21[1]) {
            class U {
              constructor() {
                set = new Set();
                return set;
              }
            }
            cResult[8] = tmp22;
            cResult[9] = tmp28;
          } else {
            class U {
              constructor() {
                set = new Set();
                return set;
              }
            }
          }
          noop = tmp28;
          if (cResult[10] === tmp11) {
            class U {
              constructor() {
                set = new Set();
                return set;
              }
            }
            if (cResult[13] !== secondaryBackgroundColor) {
              class U {
                constructor() {
                  set = new Set();
                  return set;
                }
              }
              const obj5 = { d, fill: secondaryBackgroundColor };
              const tmp32 = closure_7(recapCardBackgroundImage(7962).Path, obj5);
              cResult[13] = secondaryBackgroundColor;
              cResult[14] = tmp32;
            } else {
              class U {
                constructor() {
                  set = new Set();
                  return set;
                }
              }
            }
            if (cResult[15] === tmp4.container) {
              class U {
                constructor() {
                  set = new Set();
                  return set;
                }
              }
              if (cResult[18] !== animatedStyle) {
                class U {
                  constructor() {
                    set = new Set();
                    return set;
                  }
                }
                const items1 = [absoluteFill.absoluteFill, animatedStyle];
                cResult[18] = animatedStyle;
                cResult[19] = items1;
              } else {
                class U {
                  constructor() {
                    set = new Set();
                    return set;
                  }
                }
              }
              if (cResult[20] !== recapCardBackgroundImage) {
                class U {
                  constructor() {
                    set = new Set();
                    return set;
                  }
                }
                tmp40[0] = recapCardBackgroundImage;
                cResult[20] = recapCardBackgroundImage;
                cResult[21] = tmp40;
              } else {
                class U {
                  constructor() {
                    set = new Set();
                    return set;
                  }
                }
              }
              if (cResult[22] === tmp28) {
                class U {
                  constructor() {
                    set = new Set();
                    return set;
                  }
                }
                if (cResult[25] === tmp40) {
                  class U {
                    constructor() {
                      set = new Set();
                      return set;
                    }
                  }
                  if (cResult[28] === tmp38) {
                    class U {
                      constructor() {
                        set = new Set();
                        return set;
                      }
                    }
                    if (cResult[31] !== primaryBackgroundColor) {
                      class U {
                        constructor() {
                          set = new Set();
                          return set;
                        }
                      }
                      const obj6 = { value, color: primaryBackgroundColor, size: 64 };
                      const tmp54 = closure_7(first(12976), obj6);
                      cResult[31] = primaryBackgroundColor;
                      cResult[32] = tmp54;
                    } else {
                      class U {
                        constructor() {
                          set = new Set();
                          return set;
                        }
                      }
                    }
                    if (cResult[33] === tmp4.year) {
                      class U {
                        constructor() {
                          set = new Set();
                          return set;
                        }
                      }
                      if (cResult[36] !== primaryBackgroundColor) {
                        class U {
                          constructor() {
                            set = new Set();
                            return set;
                          }
                        }
                        const obj7 = { d: d2, fill: primaryBackgroundColor };
                        const tmp61 = closure_7(recapCardBackgroundImage(7962).Path, obj7);
                        cResult[36] = primaryBackgroundColor;
                        cResult[37] = tmp61;
                      } else {
                        class U {
                          constructor() {
                            set = new Set();
                            return set;
                          }
                        }
                      }
                      if (cResult[38] === tmp4.container) {
                        class U {
                          constructor() {
                            set = new Set();
                            return set;
                          }
                        }
                        if (cResult[41] !== tmp4.clyde) {
                          class U {
                            constructor() {
                              set = new Set();
                              return set;
                            }
                          }
                          const obj8 = { size: "custom", color: first(587).colors.BLACK, style: tmp4.clyde };
                          const tmp69 = closure_7(recapCardBackgroundImage(10571).ClydeIcon, obj8);
                          cResult[41] = tmp4.clyde;
                          cResult[42] = tmp69;
                        } else {
                          class U {
                            constructor() {
                              set = new Set();
                              return set;
                            }
                          }
                        }
                        if (cResult[43] === tmp4.logo) {
                          class U {
                            constructor() {
                              set = new Set();
                              return set;
                            }
                          }
                        }
                        const obj9 = { style: tmp4.logo, children: null };
                        const items2 = [tmp62, tmp67];
                        obj9.children = items2;
                        const tmp73 = closure_8(closure_6, obj9);
                        cResult[43] = tmp4.logo;
                        cResult[44] = tmp62;
                        cResult[45] = tmp67;
                        cResult[46] = tmp73;
                      }
                      const size = {
                        style: tmp4.container,
                        width: v40,
                        height: v40,
                        viewBox: "0 0 40 40",
                        children: tmp59,
                      };
                      const tmp66 = closure_7(first(7962), size);
                      cResult[38] = tmp4.container;
                      cResult[39] = tmp59;
                      cResult[40] = tmp66;
                    }
                    const obj10 = { style: tmp4.year, children: tmp51 };
                    const tmp58 = closure_7(closure_6, obj10);
                    cResult[33] = tmp4.year;
                    cResult[34] = tmp51;
                    cResult[35] = tmp58;
                  }
                  const obj11 = { style: tmp38, children: tmp42 };
                  const tmp50 = closure_7(first(5052).View, obj11);
                  cResult[28] = tmp38;
                  cResult[29] = tmp42;
                  cResult[30] = tmp50;
                }
                const obj12 = { source: tmp40, style: absoluteFill.absoluteFill, onLoad: tmp41 };
                const tmp46 = closure_7(first(5669), obj12);
                cResult[25] = tmp40;
                cResult[26] = tmp41;
                cResult[27] = tmp46;
              }
              function ie() {
                return tmp28(recapCardBackgroundImage);
              }
              cResult[22] = tmp28;
              cResult[23] = recapCardBackgroundImage;
              cResult[24] = ie;
            }
            const size1 = { style: tmp4.container, width: tmp7, height, viewBox: "0 0 200 284", children: tmp30 };
            const tmp37 = closure_7(first(7962), size1);
            cResult[15] = tmp4.container;
            cResult[16] = tmp30;
            cResult[17] = tmp37;
          }
          const items3 = [tmp4.card, tmp11];
          cResult[10] = tmp11;
          cResult[11] = tmp4.card;
          cResult[12] = items3;
          const tmpResult4 = recapCardBackgroundImage(5052);
        }
        const tmpResult = recapCardBackgroundImage(8624);
      }
      const size2 = { width: result, height: result1 };
      cResult[0] = result;
      cResult[1] = result1;
      cResult[2] = size2;
      let obj = recapCardBackgroundImage(576);
    }
  : function CheckpointRecapCard(character) {
      character = character.character;
      const maxHeight = character.maxHeight;
      recapCardBackgroundImage = undefined;
      let first;
      noop = undefined;
      let hasItem;
      const tmp = closure_18();
      let num = 1;
      if (null != maxHeight) {
        let _Math = Math;
        const _Math2 = Math;
        num = Math.min(Math.max(maxHeight / c10, 0.75), 1);
      }
      let items = [num];
      const items1 = [num];
      const memo = noop.useMemo(() => {
        const size = { width: c9 * num, height: c10 * num };
        return size;
      }, items);
      const memo1 = noop.useMemo(() => {
        const obj = { transform: null };
        const items = [{ scale: num }];
        obj.transform = items;
        return obj;
      }, items1);
      const cardColors = character(recapCardBackgroundImage[9]).getCardColors(character);
      ({ primaryBackgroundColor, recapCardBackgroundImage } = cardColors);
      const items2 = [character];
      const memo2 = noop.useMemo(() => {
        if (null != character) {
          const _Math = Math;
          let characterLayerUrls = checkpoint_CheckpointMessageComponentUtils.getCharacterLayerUrls(
            tmp,
            Math.round(c15 * getDevicePixelRatioDefault()),
          );
        } else {
          characterLayerUrls = [];
        }
        return characterLayerUrls;
      }, items2);
      const tmp9 = first(
        noop.useState(() => new Set()),
        2,
      );
      first = tmp9[0];
      noop = tmp9[1];
      hasItem = first.has(recapCardBackgroundImage);
      if (hasItem) {
        hasItem = memo2.length > 0;
      }
      if (hasItem) {
        hasItem = memo2.every((item) => first.has(item));
      }
      let obj = character(recapCardBackgroundImage[9]);
      class I {
        constructor() {
          opacity = 0;
          if (closure_5) {
            tmp = closure_0;
            tmp2 = closure_2;
            obj = closure_0(closure_2[13]);
            obj1 = { duration: null };
            tmp3 = c16;
            obj1.duration = c16;
            num2 = 1;
            opacity = obj.withTiming(1, obj1);
          }
          return { opacity };
        }
      }
      const tmp6Result = character(recapCardBackgroundImage[12]);
      I.__closure = {
        isCardArtLoaded: hasItem,
        withTiming: character(recapCardBackgroundImage[13]).withTiming,
        CARD_ART_FADE_IN_DURATION_MS: v150,
      };
      I.__workletHash = 7432945806679;
      I.__initData = __initData2;
      const animatedStyle = tmp6Result.useAnimatedStyle(I);
      const obj3 = {
        style: memo,
        accessibilityElementsHidden: true,
        importantForAccessibility: "no-hide-descendants",
        children: null,
      };
      const obj4 = { style: null, children: null };
      const items3 = [tmp.card, memo1];
      obj4.style = items3;
      let size = { style: tmp.container, width, height, viewBox: "0 0 200 284", children: null };
      let obj2 = {
        isCardArtLoaded: hasItem,
        withTiming: character(recapCardBackgroundImage[13]).withTiming,
        CARD_ART_FADE_IN_DURATION_MS: v150,
      };
      size.children = closure_7(character(recapCardBackgroundImage[14]).Path, {
        d,
        fill: cardColors.secondaryBackgroundColor,
      });
      const items4 = [closure_7(num(recapCardBackgroundImage[14]), size), , , ,];
      const obj6 = {
        style: null,
        children: closure_7(num(recapCardBackgroundImage[15]), {
          source: { uri: recapCardBackgroundImage },
          style: hasItem.absoluteFill,
          onLoad() {
            closure_0 = recapCardBackgroundImage;
            closure_4((items) => new Set(items).add(closure_0));
          },
        }),
      };
      const items5 = [hasItem.absoluteFill, animatedStyle];
      obj6.style = items5;
      items4[1] = closure_7(num(recapCardBackgroundImage[12]).View, obj6);
      const obj8 = {
        style: tmp.year,
        children: closure_7(num(recapCardBackgroundImage[4]), { value, color: primaryBackgroundColor, size: 64 }),
      };
      items4[2] = closure_7(closure_6, obj8);
      const obj10 = { style: tmp.logo, children: null };
      const size1 = { style: tmp.container, width: v40, height: v40, viewBox: "0 0 40 40", children: null };
      const obj5 = { d, fill: cardColors.secondaryBackgroundColor };
      const obj7 = {
        source: { uri: recapCardBackgroundImage },
        style: hasItem.absoluteFill,
        onLoad() {
          closure_0 = recapCardBackgroundImage;
          closure_4((items) => new Set(items).add(closure_0));
        },
      };
      const obj9 = { value, color: primaryBackgroundColor, size: 64 };
      const tmp12 = num(recapCardBackgroundImage[14]);
      size1.children = closure_7(character(recapCardBackgroundImage[14]).Path, { d: d2, fill: primaryBackgroundColor });
      const items6 = [closure_7(num(recapCardBackgroundImage[14]), size1)];
      const obj11 = { d: d2, fill: primaryBackgroundColor };
      const tmp13 = num(recapCardBackgroundImage[14]);
      items6[1] = closure_7(character(recapCardBackgroundImage[16]).ClydeIcon, {
        size: "custom",
        color: num(recapCardBackgroundImage[6]).colors.BLACK,
        style: tmp.clyde,
      });
      obj10.children = items6;
      items4[3] = closure_8(closure_6, obj10);
      const obj13 = {
        style: null,
        children: memo2.map((uri) => {
          closure_0 = uri;
          return closure_1_7(
            num(recapCardBackgroundImage[15]),
            {
              source: { uri },
              style: hasItem.absoluteFill,
              onLoad() {
                closure_4((items) => new Set(items).add(closure_0));
              },
            },
            uri,
          );
        }),
      };
      const items7 = [tmp.character, animatedStyle];
      obj13.style = items7;
      items4[4] = closure_7(num(recapCardBackgroundImage[12]).View, obj13);
      obj4.children = items4;
      obj3.children = closure_8(closure_6, obj4);
      return closure_7(closure_6, obj3);
    };
