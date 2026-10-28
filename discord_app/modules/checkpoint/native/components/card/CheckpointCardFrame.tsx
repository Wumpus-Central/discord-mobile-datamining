// discord_app/modules/checkpoint/native/components/card/CheckpointCardFrame.tsx
import getDevicePixelRatioDefault from "../../../../../utils/getDevicePixelRatio.native.tsx";
import timing from "../../../../../design/animation/reanimated/timing/timing.tsx";
import checkpoint_CheckpointMessageComponentUtils from "../../../CheckpointMessageComponentUtils.tsx";
import _slicedToArray from "../../../../../../_runtime/metro/00032__.js";
import noop from "../../../../../../_runtime/metro/00019__.js";

require = fn;
get_ActivityIndicator = fn(17);
({ StyleSheet: hasOwnProperty, View: metroRequire } = get_ActivityIndicator);
const jsxProd = fn(21);
({ jsx: closure_7, jsxs: closure_8 } = jsxProd);
let c9 = 284;
let c10 = 43.5;
let c11 = 40;
let c12 = "M0 40H30L40 30V0H10L0 10V40Z";
let c13 = 150;
const createStyles = fn(5004);
let closure_14 = createStyles.createStyles({
  canvas: { overflow: "hidden", transformOrigin: "top left" },
  layer: { position: "absolute", top: 0, left: 0 },
  logo: {
    position: "absolute",
    top: 4,
    left: 4,
    width: 40,
    height: 40,
    alignItems: "center",
    justifyContent: "center",
  },
});
const __initData = {
  code: "function CheckpointCardFrameTsx1(){const{isArtLoaded,withTiming,CARD_ART_FADE_IN_DURATION_MS}=this.__closure;return{opacity:isArtLoaded?withTiming(1,{duration:CARD_ART_FADE_IN_DURATION_MS}):0};}",
};
const __initData2 = {
  code: "function CheckpointCardFrameTsx2(){const{isArtLoaded,withTiming,CARD_ART_FADE_IN_DURATION_MS}=this.__closure;return{opacity:isArtLoaded?withTiming(1,{duration:CARD_ART_FADE_IN_DURATION_MS}):0};}",
};
const ReactCompilerGating = fn(558);
let size = fn(2);
let result = size.fileFinishedImporting("modules/checkpoint/native/components/card/CheckpointCardFrame.tsx");

export default ReactCompilerGating.isReactCompilerEnabled()
  ? function CheckpointCardFrame(arg0) {
      const cResult = recapCardBackgroundImage(joined[6]).c(92);
      ({ character, canvasWidth, canvasHeight, scale, clydeSize, characterLayout, children } = arg0);
      if (undefined === canvasHeight) {
        canvasHeight = height;
      }
      let num = 1;
      if (undefined !== scale) {
        num = scale;
      }
      const tmp4 = closure_14();
      const id = noop.useId();
      if (cResult[0] !== character) {
        const cardColors = recapCardBackgroundImage(tmp2[7]).getCardColors(character);
        cResult[0] = character;
        cResult[1] = cardColors;
        let tmp6 = cardColors;
        const tmpResult = recapCardBackgroundImage(tmp2[7]);
      } else {
        tmp6 = cResult[1];
      }
      ({ primaryBackgroundColor, secondaryBackgroundColor, recapCardBackgroundImage } = tmp6);
      if (cResult[2] !== canvasWidth) {
        const _HermesInternal = HermesInternal;
        const combined = "M44 34V0H" + canvasWidth + "V284H0V43.5H34L38 38L44 34Z";
        cResult[2] = canvasWidth;
        cResult[3] = combined;
        let tmp8 = combined;
      } else {
        tmp8 = cResult[3];
      }
      if (cResult[4] === canvasHeight) {
        if (cResult[5] === canvasWidth) {
          let tmp11 = cResult[6];
        }
        let size;
        if (characterLayout != null) {
          size = characterLayout.size;
        }
        if (cResult[7] === character) {
          if (cResult[8] === size) {
            if (cResult[10] === cResult[9]) {
              if (cResult[11] === recapCardBackgroundImage) {
                let obj6 = cResult[12];
              }
              joined = obj6.join("\n");
              const _Symbol = Symbol;
              if (cResult[13] === Symbol.for("react.memo_cache_sentinel")) {
                let _Set = Set;
                let set = new Set();
                cResult[13] = set;
                let tmp20 = set;
              } else {
                tmp20 = cResult[13];
              }
              if (cResult[14] !== joined) {
                const obj3 = { artKey: joined, urls: tmp20 };
                cResult[14] = joined;
                cResult[15] = obj3;
                let tmp25 = obj3;
              } else {
                tmp25 = cResult[15];
              }
              _slicedToArray = obj2.useRef(tmp25);
              const tmp27 = _slicedToArray(obj2.useState(null), 2);
              noop = tmp27[1];
              absoluteFill = tmp28;
              class G {
                constructor() {
                  opacity = 0;
                  if (closure_5) {
                    tmp = closure_0;
                    tmp2 = closure_2;
                    obj = closure_0(closure_2[11]);
                    obj1 = { duration: null };
                    tmp3 = c13;
                    obj1.duration = c13;
                    num2 = 1;
                    opacity = obj.withTiming(1, obj1);
                  }
                  return { opacity };
                }
              }
              const obj4 = {
                isArtLoaded: tmp27[0] === joined,
                withTiming: recapCardBackgroundImage(tmp2[11]).withTiming,
                CARD_ART_FADE_IN_DURATION_MS: v150,
              };
              G.__closure = obj4;
              G.__workletHash = 7810000693516;
              G.__initData = __initData;
              const animatedStyle = recapCardBackgroundImage(tmp2[10]).useAnimatedStyle(G);
              const result = canvasWidth * num;
              const result1 = canvasHeight * num;
              if (cResult[16] === result) {
                if (cResult[17] === result1) {
                  let tmp34 = cResult[18];
                }
                if (cResult[19] !== num) {
                  const obj5 = { scale: num };
                  const items = [obj5];
                  cResult[19] = num;
                  cResult[20] = items;
                  let tmp35 = items;
                } else {
                  tmp35 = cResult[20];
                }
                if (cResult[21] === canvasHeight) {
                  if (cResult[22] === canvasWidth) {
                    if (cResult[23] === tmp35) {
                      let tmp36 = cResult[24];
                    }
                    if (cResult[25] !== clydeSize) {
                      const size1 = { width: clydeSize, height: clydeSize };
                      cResult[25] = clydeSize;
                      cResult[26] = size1;
                      let tmp37 = size1;
                    } else {
                      tmp37 = cResult[26];
                    }
                    if (cResult[27] !== characterLayout) {
                      let tmp39;
                      if (null != characterLayout) {
                        const size2 = { position: "absolute", top: null, left: null, width: null, height: null };
                        ({ top: obj14.top, left: obj14.left, size: obj14.width, size: obj14.height } = characterLayout);
                        tmp39 = size2;
                      }
                      cResult[27] = characterLayout;
                      cResult[28] = tmp39;
                      let tmp38 = tmp39;
                    } else {
                      tmp38 = cResult[28];
                    }
                    if (cResult[29] === joined) {
                      if (cResult[30] === obj6) {
                        let tmp40 = cResult[31];
                      }
                      closure_6 = tmp40;
                      if (cResult[32] === tmp36) {
                        if (cResult[33] === tmp4.canvas) {
                          let tmp41 = cResult[34];
                        }
                        if (cResult[35] === tmp8) {
                          if (cResult[36] === secondaryBackgroundColor) {
                            let tmp42 = cResult[37];
                          }
                          if (cResult[38] === canvasWidth) {
                            if (cResult[39] === tmp4.layer) {
                              if (cResult[40] === tmp42) {
                                const tmp45 = cResult[41];
                              }
                              if (cResult[42] === animatedStyle) {
                                if (cResult[43] === tmp4.layer) {
                                  let tmp49 = cResult[44];
                                }
                                if (cResult[45] !== tmp8) {
                                  const obj7 = { d: tmp8 };
                                  const tmp52 = closure_7(recapCardBackgroundImage(tmp2[12]).Path, obj7);
                                  cResult[45] = tmp8;
                                  cResult[46] = tmp52;
                                  let tmp50 = tmp52;
                                } else {
                                  tmp50 = cResult[46];
                                }
                                if (cResult[47] === id) {
                                  if (cResult[48] === tmp50) {
                                    let tmp53 = cResult[49];
                                  }
                                  if (cResult[50] !== recapCardBackgroundImage) {
                                    const obj8 = { uri: recapCardBackgroundImage };
                                    cResult[50] = recapCardBackgroundImage;
                                    cResult[51] = obj8;
                                    let tmp56 = obj8;
                                  } else {
                                    tmp56 = cResult[51];
                                  }
                                  const _HermesInternal2 = HermesInternal;
                                  const combined1 = "url(#" + id + ")";
                                  if (cResult[52] === tmp40) {
                                    if (cResult[53] === recapCardBackgroundImage) {
                                      let tmp58 = cResult[54];
                                    }
                                    if (cResult[55] === tmp56) {
                                      if (cResult[56] === combined1) {
                                        if (cResult[57] === tmp58) {
                                          if (cResult[58] === tmp11) {
                                            let tmp59 = cResult[59];
                                          }
                                          if (cResult[60] === canvasWidth) {
                                            if (cResult[61] === tmp53) {
                                              if (cResult[62] === tmp59) {
                                                let tmp66 = cResult[63];
                                              }
                                              if (cResult[64] === joined) {
                                                if (cResult[65] === tmp49) {
                                                  if (cResult[66] === tmp66) {
                                                    let tmp71 = cResult[67];
                                                  }
                                                  if (cResult[68] !== primaryBackgroundColor) {
                                                    const size3 = {
                                                      style: absoluteFill.absoluteFill,
                                                      width: v40,
                                                      height: null,
                                                      children: null,
                                                    };
                                                    class Te {
                                                      constructor() {
                                                        return closure_6(recapCardBackgroundImage);
                                                      }
                                                    }
                                                    const obj9 = { d, fill: primaryBackgroundColor };
                                                    size3.children = closure_7(
                                                      recapCardBackgroundImage(tmp2[12]).Path,
                                                      obj9,
                                                    );
                                                    const tmp78 = obj6(tmp2[12]);
                                                    cResult[68] = primaryBackgroundColor;
                                                    cResult[69] = closure_7(obj6(tmp2[12]), size3);
                                                    class G {
                                                      constructor() {
                                                        opacity = 0;
                                                        if (closure_5) {
                                                          tmp = closure_0;
                                                          tmp2 = closure_2;
                                                          obj = closure_0(closure_2[11]);
                                                          obj1 = { duration: null };
                                                          tmp3 = c13;
                                                          obj1.duration = c13;
                                                          num2 = 1;
                                                          opacity = obj.withTiming(1, obj1);
                                                        }
                                                        return { opacity };
                                                      }
                                                    }
                                                    const tmp82 = closure_7(obj6(tmp2[12]), size3);
                                                  }
                                                  if (cResult[70] !== tmp37) {
                                                    const obj10 = {
                                                      size: "custom",
                                                      color: obj6(tmp2[14]).colors.BLACK,
                                                      style: tmp37,
                                                    };
                                                    const tmp86 = closure_7(
                                                      recapCardBackgroundImage(tmp2[13]).ClydeIcon,
                                                      obj10,
                                                    );
                                                    class Te {
                                                      constructor() {
                                                        return closure_6(recapCardBackgroundImage);
                                                      }
                                                    }
                                                    cResult[70] = tmp37;
                                                    cResult[71] = tmp86;
                                                    let tmp83 = tmp86;
                                                  } else {
                                                    tmp83 = cResult[71];
                                                  }
                                                  if (cResult[72] === tmp4.logo) {
                                                    if (cResult[73] === tmp75) {
                                                      if (cResult[74] === tmp83) {
                                                        let tmp87 = cResult[75];
                                                      }
                                                      if (cResult[76] === animatedStyle) {
                                                        if (cResult[77] === joined) {
                                                          if (cResult[78] === tmp38) {
                                                            if (cResult[79] === tmp40) {
                                                              if (cResult[80] === arr) {
                                                                let tmp91 = cResult[81];
                                                              }
                                                              if (cResult[82] === children) {
                                                                if (cResult[83] === tmp41) {
                                                                  if (cResult[84] === tmp45) {
                                                                    if (cResult[85] === tmp71) {
                                                                      if (cResult[86] === tmp87) {
                                                                        if (cResult[87] === tmp91) {
                                                                          let tmp96 = cResult[88];
                                                                        }
                                                                        if (cResult[89] === tmp34) {
                                                                          if (cResult[90] === tmp96) {
                                                                            let tmp100 = cResult[91];
                                                                          }
                                                                          return tmp100;
                                                                        }
                                                                        const obj11 = { style: tmp34, children: tmp96 };
                                                                        class Te {
                                                                          constructor() {
                                                                            return closure_6(recapCardBackgroundImage);
                                                                          }
                                                                        }
                                                                        cResult[89] = tmp34;
                                                                        cResult[90] = tmp96;
                                                                        cResult[91] = tmp103;
                                                                        tmp100 = tmp103;
                                                                      }
                                                                    }
                                                                  }
                                                                }
                                                              }
                                                              const obj12 = { style: tmp41, children: null };
                                                              const items1 = [, , , ,];
                                                              class Te {
                                                                constructor() {
                                                                  return closure_6(recapCardBackgroundImage);
                                                                }
                                                              }
                                                              items1[1] = tmp71;
                                                              items1[2] = tmp87;
                                                              items1[3] = children;
                                                              items1[4] = tmp91;
                                                              obj12.children = items1;
                                                              const tmp99 = closure_8(closure_6, obj12);
                                                              cResult[82] = children;
                                                              cResult[83] = tmp41;
                                                              class G {
                                                                constructor() {
                                                                  opacity = 0;
                                                                  if (closure_5) {
                                                                    tmp = closure_0;
                                                                    tmp2 = closure_2;
                                                                    obj = closure_0(closure_2[11]);
                                                                    obj1 = { duration: null };
                                                                    tmp3 = c13;
                                                                    obj1.duration = c13;
                                                                    num2 = 1;
                                                                    opacity = obj.withTiming(1, obj1);
                                                                  }
                                                                  return { opacity };
                                                                }
                                                              }
                                                              cResult[85] = tmp71;
                                                              cResult[86] = tmp87;
                                                              cResult[87] = tmp91;
                                                              cResult[88] = tmp99;
                                                              tmp96 = tmp99;
                                                            }
                                                          }
                                                        }
                                                      }
                                                      let tmp92 = null != tmp38;
                                                      if (tmp92) {
                                                        tmp92 = arr.length > 0;
                                                      }
                                                      if (tmp92) {
                                                        const obj13 = { style: null, children: null };
                                                        const items2 = [tmp38, animatedStyle];
                                                        obj13.style = items2;
                                                        class Te {
                                                          constructor() {
                                                            return closure_6(recapCardBackgroundImage);
                                                          }
                                                        }
                                                        obj13.children = arr.map((uri) => {
                                                          closure_0 = uri;
                                                          return closure_1_7(
                                                            obj6(joined[15]),
                                                            {
                                                              source: { uri },
                                                              style: absoluteFill.absoluteFill,
                                                              onLoad() {
                                                                return closure_6(closure_0);
                                                              },
                                                            },
                                                            uri,
                                                          );
                                                        });
                                                        tmp92 = closure_7(tmp95, obj13, joined);
                                                      }
                                                      cResult[76] = animatedStyle;
                                                      class Te {
                                                        constructor() {
                                                          return closure_6(recapCardBackgroundImage);
                                                        }
                                                      }
                                                      cResult[77] = joined;
                                                      cResult[78] = tmp38;
                                                      cResult[79] = tmp40;
                                                      cResult[80] = arr;
                                                      cResult[81] = tmp92;
                                                      tmp91 = tmp92;
                                                    }
                                                  }
                                                  const obj15 = { style: null, children: null };
                                                  class Te {
                                                    constructor() {
                                                      return closure_6(recapCardBackgroundImage);
                                                    }
                                                  }
                                                  const items3 = [tmp75, tmp83];
                                                  obj15.children = items3;
                                                  const tmp90 = closure_8(closure_6, obj15);
                                                  cResult[72] = tmp4.logo;
                                                  cResult[73] = tmp75;
                                                  cResult[74] = tmp83;
                                                  class G {
                                                    constructor() {
                                                      opacity = 0;
                                                      if (closure_5) {
                                                        tmp = closure_0;
                                                        tmp2 = closure_2;
                                                        obj = closure_0(closure_2[11]);
                                                        obj1 = { duration: null };
                                                        tmp3 = c13;
                                                        obj1.duration = c13;
                                                        num2 = 1;
                                                        opacity = obj.withTiming(1, obj1);
                                                      }
                                                      return { opacity };
                                                    }
                                                  }
                                                  cResult[75] = tmp90;
                                                  tmp87 = tmp90;
                                                }
                                              }
                                              const obj16 = { style: tmp49, children: tmp66 };
                                              class Te {
                                                constructor() {
                                                  return closure_6(recapCardBackgroundImage);
                                                }
                                              }
                                              cResult[64] = joined;
                                              cResult[65] = tmp49;
                                              cResult[66] = tmp66;
                                              cResult[67] = tmp74;
                                              tmp71 = tmp74;
                                            }
                                          }
                                          const size4 = { width: canvasWidth, height: null, children: null };
                                          class Te {
                                            constructor() {
                                              return closure_6(recapCardBackgroundImage);
                                            }
                                          }
                                          const items4 = [tmp53, tmp59];
                                          size4.children = items4;
                                          const tmp70 = closure_8(obj6(tmp2[12]), size4);
                                          cResult[60] = canvasWidth;
                                          cResult[61] = tmp53;
                                          cResult[62] = tmp59;
                                          class G {
                                            constructor() {
                                              opacity = 0;
                                              if (closure_5) {
                                                tmp = closure_0;
                                                tmp2 = closure_2;
                                                obj = closure_0(closure_2[11]);
                                                obj1 = { duration: null };
                                                tmp3 = c13;
                                                obj1.duration = c13;
                                                num2 = 1;
                                                opacity = obj.withTiming(1, obj1);
                                              }
                                              return { opacity };
                                            }
                                          }
                                          cResult[63] = tmp70;
                                          tmp66 = tmp70;
                                        }
                                      }
                                    }
                                    const obj17 = { href: tmp56 };
                                    class Te {
                                      constructor() {
                                        return closure_6(recapCardBackgroundImage);
                                      }
                                    }
                                    const merged = Object.assign(tmp11);
                                    obj17.preserveAspectRatio = "xMidYMid slice";
                                    obj17.clipPath = combined1;
                                    obj17.onLoad = tmp58;
                                    const tmp65 = closure_7(tmp61, obj17);
                                    cResult[55] = tmp56;
                                    cResult[56] = combined1;
                                    class G {
                                      constructor() {
                                        opacity = 0;
                                        if (closure_5) {
                                          tmp = closure_0;
                                          tmp2 = closure_2;
                                          obj = closure_0(closure_2[11]);
                                          obj1 = { duration: null };
                                          tmp3 = c13;
                                          obj1.duration = c13;
                                          num2 = 1;
                                          opacity = obj.withTiming(1, obj1);
                                        }
                                        return { opacity };
                                      }
                                    }
                                    cResult[58] = tmp11;
                                    cResult[59] = tmp65;
                                    tmp59 = tmp65;
                                  }
                                  class Te {
                                    constructor() {
                                      return closure_6(recapCardBackgroundImage);
                                    }
                                  }
                                  cResult[52] = tmp40;
                                  cResult[53] = recapCardBackgroundImage;
                                  cResult[54] = Te;
                                  tmp58 = Te;
                                }
                                const obj18 = { children: null };
                                const obj19 = { id: null, children: tmp50 };
                                obj18.children = closure_7(recapCardBackgroundImage(tmp2[12]).ClipPath, obj19);
                                const tmp55 = closure_7(recapCardBackgroundImage(tmp2[12]).Defs, obj18);
                                cResult[47] = id;
                                cResult[48] = tmp50;
                                cResult[49] = tmp55;
                                tmp53 = tmp55;
                              }
                              const items5 = [tmp4.layer, animatedStyle];
                              cResult[42] = animatedStyle;
                              cResult[43] = tmp4.layer;
                              cResult[44] = items5;
                              tmp49 = items5;
                            }
                          }
                          const size5 = { style: tmp4.layer, width: canvasWidth, height, children: tmp42 };
                          cResult[38] = canvasWidth;
                          cResult[39] = tmp4.layer;
                          cResult[40] = tmp42;
                          cResult[41] = closure_7(obj6(tmp2[12]), size5);
                          class G {
                            constructor() {
                              opacity = 0;
                              if (closure_5) {
                                tmp = closure_0;
                                tmp2 = closure_2;
                                obj = closure_0(closure_2[11]);
                                obj1 = { duration: null };
                                tmp3 = c13;
                                obj1.duration = c13;
                                num2 = 1;
                                opacity = obj.withTiming(1, obj1);
                              }
                              return { opacity };
                            }
                          }
                          const tmp48 = closure_7(obj6(tmp2[12]), size5);
                        }
                        const obj20 = { d: tmp8, fill: secondaryBackgroundColor };
                        const tmp44 = closure_7(recapCardBackgroundImage(tmp2[12]).Path, obj20);
                        cResult[35] = tmp8;
                        cResult[36] = secondaryBackgroundColor;
                        cResult[37] = tmp44;
                        tmp42 = tmp44;
                      }
                      const items6 = [tmp4.canvas, tmp36];
                      cResult[33] = tmp4.canvas;
                      cResult[34] = items6;
                      tmp41 = items6;
                    }
                    function handleArtLoad(arg0) {
                      if (ref.current.artKey !== joined) {
                        const obj = { artKey: joined, urls: null };
                        const _Set = Set;
                        const set = new Set();
                        obj.urls = set;
                        ref.current = obj;
                      }
                      const urls = ref.current.urls;
                      urls.add(arg0);
                      if (obj6.every((item) => urls.has(item))) {
                        closure_4(joined);
                      }
                    }
                    cResult[29] = joined;
                    cResult[30] = obj6;
                    cResult[31] = handleArtLoad;
                    tmp40 = handleArtLoad;
                  }
                }
                const size6 = { width: canvasWidth, height: canvasHeight, transform: tmp35 };
                cResult[21] = canvasHeight;
                cResult[22] = canvasWidth;
                cResult[23] = tmp35;
                cResult[24] = size6;
                tmp36 = size6;
              }
              const size7 = { width: result, height: result1 };
              cResult[16] = result;
              cResult[17] = result1;
              cResult[18] = size7;
              tmp34 = size7;
              const tmpResult3 = recapCardBackgroundImage(tmp2[10]);
            }
            const items7 = [recapCardBackgroundImage];
            cResult[10] = cResult[9];
            cResult[11] = recapCardBackgroundImage;
            cResult[12] = items7;
            obj6 = items7;
          }
        }
        if (null == character) {
          let items8 = [];
          cResult[7] = character;
          cResult[8] = size;
          cResult[9] = items8;
          class Te {
            constructor() {
              return closure_6(recapCardBackgroundImage);
            }
          }
        }
        const _Math = Math;
        items8 = recapCardBackgroundImage(tmp2[8]).getCharacterLayerUrls(character, Math.round(size * obj6(tmp2[9])()));
        const tmpResult4 = recapCardBackgroundImage(tmp2[8]);
      }
      const bound = Math.max(1, (canvasWidth - 44) / 156, (canvasHeight - c10) / 224.5);
      const size8 = { x: 44 * (1 - bound), y: c10 * (1 - bound), width: 200 * bound, height: 268 * bound };
      cResult[4] = canvasHeight;
      cResult[5] = canvasWidth;
      cResult[6] = size8;
      tmp11 = size8;
      let obj = recapCardBackgroundImage(joined[6]);
    }
  : function CheckpointCardFrame(character) {
      character = character.character;
      const canvasWidth = character.canvasWidth;
      let num = character.canvasHeight;
      if (num === undefined) {
        num = 284;
      }
      let num2 = character.scale;
      if (num2 === undefined) {
        num2 = 1;
      }
      const clydeSize = character.clydeSize;
      const characterLayout = character.characterLayout;
      let memo;
      let memo1;
      let joined;
      v40 = undefined;
      let d;
      let v150;
      const tmp = closure_14();
      const id = clydeSize.useId();
      const cardColors = character(num[7]).getCardColors(character);
      const recapCardBackgroundImage = cardColors.recapCardBackgroundImage;
      ({ primaryBackgroundColor, secondaryBackgroundColor } = cardColors);
      const combined = "M44 34V0H" + canvasWidth + "V284H0V43.5H34L38 38L44 34Z";
      const bound = Math.max(1, (canvasWidth - 44) / 156, (num - joined) / 224.5);
      let size = { x: 44 * (1 - bound), y: joined * (1 - bound), width: 200 * bound, height: 268 * bound };
      let size1;
      if (characterLayout != null) {
        size1 = characterLayout.size;
      }
      let items = [character, size1];
      memo = obj.useMemo(() => {
        if (null != character) {
          if (null != size1) {
            const _Math = Math;
            const characterLayerUrls = checkpoint_CheckpointMessageComponentUtils.getCharacterLayerUrls(
              tmp,
              Math.round(tmp2 * getDevicePixelRatioDefault()),
            );
          }
          return [];
        }
      }, items);
      const items1 = [recapCardBackgroundImage, memo];
      memo1 = obj.useMemo(() => {
        const items = [recapCardBackgroundImage, ...memo];
        return items;
      }, items1);
      joined = memo1.join("\n");
      const obj3 = { artKey: joined, urls: null };
      let obj2 = character(num[7]);
      obj3.urls = new Set();
      v40 = obj.useRef(obj3);
      const tmp11 = num2(clydeSize.useState(null), 2);
      d = tmp11[1];
      v150 = tmp12;
      let set = new Set();
      class L {
        constructor() {
          opacity = 0;
          if (closure_13) {
            tmp = closure_0;
            tmp2 = closure_2;
            obj = closure_0(closure_2[11]);
            obj1 = { duration: null };
            tmp3 = c13;
            obj1.duration = c13;
            num2 = 1;
            opacity = obj.withTiming(1, obj1);
          }
          return { opacity };
        }
      }
      const tmp3Result = character(num[10]);
      L.__closure = {
        isArtLoaded: tmp11[0] === joined,
        withTiming: character(num[11]).withTiming,
        CARD_ART_FADE_IN_DURATION_MS: v150,
      };
      L.__workletHash = 11056092560943;
      L.__initData = __initData2;
      const animatedStyle = tmp3Result.useAnimatedStyle(L);
      const items2 = [canvasWidth, num, num2];
      const items3 = [canvasWidth, num, num2];
      const memo2 = obj.useMemo(() => {
        const size = { width: canvasWidth * num2, height: num * num2 };
        return size;
      }, items2);
      const items4 = [clydeSize];
      const memo3 = obj.useMemo(() => {
        const size = { width: canvasWidth, height: num, transform: null };
        const items = [{ scale: num2 }];
        size.transform = items;
        return size;
      }, items3);
      const items5 = [characterLayout];
      const memo4 = obj.useMemo(() => {
        const size = { width: clydeSize, height: clydeSize };
        return size;
      }, items4);
      const memo5 = obj.useMemo(() => {
        let tmp2;
        if (null != characterLayout) {
          const size = { position: "absolute", top: null, left: null, width: null, height: null };
          ({ top: obj.top, left: obj.left, size: obj.width, size: obj.height } = characterLayout);
          tmp2 = size;
        }
        return tmp2;
      }, items5);
      const obj5 = { style: memo2, children: null };
      const obj6 = { style: null, children: null };
      const items6 = [tmp.canvas, memo3];
      obj6.style = items6;
      const size2 = { style: tmp.layer, width: canvasWidth, height: memo1, children: null };
      const obj4 = {
        isArtLoaded: tmp11[0] === joined,
        withTiming: character(num[11]).withTiming,
        CARD_ART_FADE_IN_DURATION_MS: v150,
      };
      const tmp20 = memo;
      const tmp21 = canvasWidth;
      size2.children = size1(character(num[12]).Path, { d: combined, fill: secondaryBackgroundColor });
      const items7 = [size1(canvasWidth(num[12]), size2), , , ,];
      const obj7 = { style: null, children: null };
      const items8 = [tmp.layer, animatedStyle];
      obj7.style = items8;
      const size3 = { width: canvasWidth, height: memo1, children: null };
      const tmp22 = canvasWidth(num[12]);
      const obj8 = { children: null };
      const tmp23 = canvasWidth(num[12]);
      obj8.children = size1(character(num[12]).ClipPath, {
        id,
        children: size1(character(num[12]).Path, { d: combined }),
      });
      const items9 = [size1(character(num[12]).Defs, obj8)];
      const obj10 = { href: { uri: recapCardBackgroundImage } };
      const merged = Object.assign(size);
      obj10.preserveAspectRatio = "xMidYMid slice";
      obj10.clipPath = "url(#" + id + ")";
      obj10.onLoad = function onLoad() {
        if (ref.current.artKey !== joined) {
          const obj = { artKey: joined, urls: null };
          const _Set = Set;
          const set = new Set();
          obj.urls = set;
          ref.current = obj;
        }
        const urls = ref.current.urls;
        urls.add(recapCardBackgroundImage);
        if (memo1.every((item) => urls.has(item))) {
          closure_12(joined);
        }
      };
      items9[1] = size1(character(num[12]).Image, obj10);
      size3.children = items9;
      obj7.children = memo(tmp23, size3);
      items7[1] = size1(canvasWidth(num[10]).View, obj7, joined);
      const obj11 = { style: tmp.logo, children: null };
      const size4 = { style: characterLayout.absoluteFill, width: v40, height: v40, children: null };
      const obj9 = { id, children: size1(character(num[12]).Path, { d: combined }) };
      size4.children = size1(character(num[12]).Path, { d, fill: primaryBackgroundColor });
      const items10 = [size1(canvasWidth(num[12]), size4)];
      const obj12 = { d, fill: primaryBackgroundColor };
      const tmp25 = canvasWidth(num[12]);
      items10[1] = size1(character(num[13]).ClydeIcon, {
        size: "custom",
        color: canvasWidth(num[14]).colors.BLACK,
        style: memo4,
      });
      obj11.children = items10;
      items7[2] = memo(recapCardBackgroundImage, obj11);
      items7[3] = character.children;
      let tmp18Result = null != memo5;
      if (tmp18Result) {
        tmp18Result = memo.length > 0;
      }
      if (tmp18Result) {
        const obj14 = { style: null, children: null };
        const items11 = [memo5, animatedStyle];
        obj14.style = items11;
        obj14.children = memo.map((uri) => {
          closure_0 = uri;
          return size1(
            canvasWidth(num[15]),
            {
              source: { uri },
              style: characterLayout.absoluteFill,
              onLoad() {
                if (ref.current.artKey !== joined) {
                  const obj = { artKey: joined, urls: null };
                  const _Set = Set;
                  const set = new Set();
                  obj.urls = set;
                  ref.current = obj;
                }
                const urls = ref.current.urls;
                urls.add(closure_0);
                if (memo1.every((item) => urls.has(item))) {
                  closure_12(joined);
                }
              },
            },
            uri,
          );
        });
        tmp18Result = tmp18(tmp21(tmp4[10]).View, obj14, joined);
      }
      items7[4] = tmp18Result;
      obj6.children = items7;
      obj5.children = tmp20(recapCardBackgroundImage, obj6);
      return size1(recapCardBackgroundImage, obj5);
    };
export const CHECKPOINT_CARD_HEIGHT = 284;
