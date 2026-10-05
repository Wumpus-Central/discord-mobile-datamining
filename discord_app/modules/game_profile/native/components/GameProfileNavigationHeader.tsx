// === Module 8566: GameProfileNavigationHeader ===

// Module 8566 (GameProfileNavigationHeader)
import nativeDefault from "native" /* 587 */;
import AvatarUtils from "AvatarUtils" /* 1402 */;
import timing from "timing" /* 4891 */;
import react from "react" /* 19 */;
import react_native from "react-native" /* 17 */;
import Fragment from "Fragment" /* 21 */;
import createStyles_mod from "createStyles" /* 4890 */;
import ReactCompilerGating from "ReactCompilerGating" /* 558 */;
import size_mod from "module_2" /* 2 */;

const require = globalThis.__r;
let _require, dependencyMap, set;

let StyleSheet;
let closure_4;
let hasOwnProperty;
let metroImportAll;
let metroImportDefault;
let obj2;
let obj3;
let obj4;
let size;
({ Image: closure_4, View: hasOwnProperty, StyleSheet } = react_native);
({ jsx: metroImportDefault, jsxs: metroImportAll } = Fragment);
let c9 = 32;
let createStyles = createStyles_mod;
let obj = { headerContainer: obj2, headerRow: obj3, icon: size, titleContainer: obj4, headerRight: { flexDirection: "row", alignItems: "center" }, rankPillContainer: { flex: 1, flexDirection: "row", alignItems: "center" } };
obj2 = { height: 56, paddingHorizontal: nativeDefault.space.PX_16, borderBottomWidth: StyleSheet.hairlineWidth, borderBottomColor: nativeDefault.colors.BORDER_SUBTLE, overflow: "hidden", justifyContent: "center" };
createStyles = createStyles.createStyles;
obj3 = { flexDirection: "row", alignItems: "center", gap: nativeDefault.space.PX_8 };
size = { width: 32, height: 32, borderRadius: nativeDefault.radii.sm };
obj4 = { flex: 1, flexDirection: "row", alignItems: "center", gap: nativeDefault.space.PX_8, minWidth: 0 };
let closure_10 = createStyles(obj);
const __initData = { code: "function GameProfileNavigationHeaderTsx1(){const{headerRightProgress}=this.__closure;return{opacity:headerRightProgress.get()};}" };
const __initData2 = { code: "function GameProfileNavigationHeaderTsx2(){const{headerRightProgress}=this.__closure;return{opacity:1-headerRightProgress.get()};}" };
const __initData3 = { code: "function GameProfileNavigationHeaderTsx3(){const{headerRightProgress}=this.__closure;return{opacity:headerRightProgress.get()};}" };
const __initData4 = { code: "function GameProfileNavigationHeaderTsx4(){const{headerRightProgress}=this.__closure;return{opacity:1-headerRightProgress.get()};}" };
const tmp5 = ReactCompilerGating.isReactCompilerEnabled() ? ((arg0) => {
  let application;
  let closure_0;
  let game;
  let headerRight;
  let items;
  let items1;
  let items2;
  let items3;
  let items4;
  let obj14;
  let obj16;
  let sharedValue;
  let obj = require("react");
  const cResult = obj.c(35);
  ({ game, application, headerRight } = arg0);
  const tmp4 = closure_10();
  const obj2 = require("useToken");
  const token = obj2.useToken(sharedValue(587).colors.LEGACY_BLUR_FALLBACK_ULTRA_THIN);
  _require = tmp7;
  let num = 0;
  const useSharedValue = require("ReanimatedRexport").useSharedValue;
  require("ReanimatedRexport");
  if (null != headerRight) {
    num = 1;
  }
  sharedValue = useSharedValue(num);
  if (cResult[0] === null != headerRight) {
    let tmp10;
    let tmp11;
    if (cResult[1] === sharedValue) {
      tmp10 = cResult[2];
      tmp11 = cResult[3];
    }
    const effect = react.useEffect(tmp10, tmp11);
    const fn2 = function v() {
      const obj = { opacity: sharedValue.get() };
      return obj;
    };
    const obj3 = { headerRightProgress: sharedValue };
    fn2.__closure = obj3;
    fn2.__workletHash = 16001524280109;
    fn2.__initData = __initData;
    const tmpResult = require("ReanimatedRexport");
    const animatedStyle = tmpResult.useAnimatedStyle(fn2);
    const tmpResult2 = require("ReanimatedRexport");
    class B {
      constructor() {
        const obj = { opacity: 1 - sharedValue.get() };
        return obj;
      }
    }
    const obj4 = { headerRightProgress: sharedValue };
    B.__closure = obj4;
    B.__workletHash = 5182160908530;
    B.__initData = __initData2;
    const animatedStyle1 = tmpResult2.useAnimatedStyle(B);
    if (cResult[4] === application) {
      let tmp18;
      if (cResult[5] === game) {
        tmp18 = cResult[6];
      }
      let name;
      if (game != null) {
        name = game.name;
      }
      if (name == null) {
        let name1;
        if (application != null) {
          name1 = application.name;
        }
        name = name1;
      }
      let tmp25 = null;
      if (null != name) {
        let tmp26;
        if (cResult[7] !== token) {
          const obj5 = { android_fallbackColor: token };
          const tmp28 = closure_7(require("native").BackgroundBlurFill, obj5);
          cResult[7] = token;
          cResult[8] = tmp28;
          tmp26 = tmp28;
        } else {
          tmp26 = cResult[8];
        }
        if (cResult[9] === tmp18) {
          let tmp29;
          let tmp33;
          if (cResult[10] === tmp4.icon) {
            tmp29 = cResult[11];
          }
          if (cResult[12] !== name) {
            const obj6 = { variant: "redesign/heading-18/bold", color: "mobile-text-heading-primary", lineClamp: 1, children: name };
            const tmp35 = closure_7(require("Text/Text").Heading, obj6);
            cResult[12] = name;
            cResult[13] = tmp35;
            tmp33 = tmp35;
          } else {
            tmp33 = cResult[13];
          }
          if (cResult[14] === game) {
            if (cResult[15] === animatedStyle1) {
              let tmp36;
              if (cResult[16] === tmp4.rankPillContainer) {
                tmp36 = cResult[17];
              }
              if (cResult[18] === tmp4.titleContainer) {
                if (cResult[19] === tmp33) {
                  let tmp43;
                  if (cResult[20] === tmp36) {
                    tmp43 = cResult[21];
                  }
                  if (cResult[22] === headerRight) {
                    if (cResult[23] === animatedStyle) {
                      let tmp47;
                      if (cResult[24] === tmp4.headerRight) {
                        tmp47 = cResult[25];
                      }
                      if (cResult[26] === tmp4.headerRow) {
                        if (cResult[27] === tmp29) {
                          if (cResult[28] === tmp43) {
                            let tmp50;
                            if (cResult[29] === tmp47) {
                              tmp50 = cResult[30];
                            }
                            if (cResult[31] === tmp4.headerContainer) {
                              if (cResult[32] === tmp50) {
                                let tmp54;
                                if (cResult[33] === tmp26) {
                                  tmp54 = cResult[34];
                                }
                                tmp25 = tmp54;
                              }
                            }
                            const obj7 = { style: tmp4.headerContainer, children: items };
                            items = [tmp26, tmp50];
                            const tmp57 = closure_8(closure_5, obj7);
                            cResult[31] = tmp4.headerContainer;
                            class B {
                              constructor() {
                                const obj = { opacity: 1 - sharedValue.get() };
                                return obj;
                              }
                            }
                            cResult[33] = tmp26;
                            cResult[34] = tmp57;
                            tmp54 = tmp57;
                          }
                        }
                      }
                      const obj8 = { style: tmp4.headerRow, children: items1 };
                      items1 = [tmp29, tmp43, tmp47];
                      const tmp53 = closure_8(closure_5, obj8);
                      cResult[26] = tmp4.headerRow;
                      class B {
                        constructor() {
                          const obj = { opacity: 1 - sharedValue.get() };
                          return obj;
                        }
                      }
                      cResult[27] = tmp29;
                      cResult[28] = tmp43;
                      cResult[29] = tmp47;
                      cResult[30] = tmp53;
                      tmp50 = tmp53;
                    }
                  }
                  let tmp48 = null != headerRight;
                  if (tmp48) {
                    const obj9 = { style: items2, children: headerRight() };
                    items2 = [tmp4.headerRight, animatedStyle];
                    const View2 = tmp5(4612).View;
                    tmp48 = closure_7(View2, obj9);
                  }
                  cResult[22] = headerRight;
                  cResult[23] = animatedStyle;
                  cResult[24] = tmp4.headerRight;
                  cResult[25] = tmp48;
                  tmp47 = tmp48;
                }
              }
              const obj10 = { style: tmp4.titleContainer, children: items3 };
              items3 = [tmp33, tmp36];
              const tmp46 = closure_8(closure_5, obj10);
              cResult[18] = tmp4.titleContainer;
              class B {
                constructor() {
                  const obj = { opacity: 1 - sharedValue.get() };
                  return obj;
                }
              }
              cResult[20] = tmp36;
              cResult[21] = tmp46;
              tmp43 = tmp46;
            }
          }
          let l30Rank;
          if (game != null) {
            l30Rank = game.l30Rank;
          }
          let tmp38 = null != l30Rank;
          if (tmp38) {
            const obj11 = { style: tmp4.rankPillContainer, children: items4 };
            const obj12 = { rank: game.l30Rank, compact: true };
            items4 = [closure_7(sharedValue(8363), obj12), ];
            const items5 = [StyleSheet.absoluteFill, animatedStyle1];
            const obj13 = { style: null, children: closure_7(sharedValue(8363), obj14) };
            class B {
              constructor() {
                const obj = { opacity: 1 - sharedValue.get() };
                return obj;
              }
            }
            const View = tmp5(4612).View;
            obj14 = { rank: game.l30Rank };
            items4[1] = closure_7(View, obj13);
            tmp38 = closure_8(closure_5, obj11);
          }
          cResult[14] = game;
          cResult[15] = animatedStyle1;
          cResult[16] = tmp4.rankPillContainer;
          class B {
            constructor() {
              const obj = { opacity: 1 - sharedValue.get() };
              return obj;
            }
          }
          tmp36 = tmp38;
        }
        let tmp30 = null != tmp18;
        if (tmp30) {
          const obj15 = { source: obj16, style: tmp4.icon };
          obj16 = { uri: tmp18 };
          tmp30 = closure_7(closure_4, obj15);
        }
        cResult[9] = tmp18;
        cResult[10] = tmp4.icon;
        cResult[11] = tmp30;
        tmp29 = tmp30;
      }
      return tmp25;
    }
    let iconURL;
    if (game != null) {
      const getIconURL = game.getIconURL;
      let str = "png";
      if (require("AvatarUtils").SUPPORTS_WEBP) {
        str = "webp";
      }
      iconURL = getIconURL(c9, str);
    }
    if (iconURL == null) {
      let iconURL2;
      if (application != null) {
        const getIconURL2 = application.getIconURL;
        let str2 = "png";
        if (require("AvatarUtils").SUPPORTS_WEBP) {
          str2 = "webp";
        }
        iconURL2 = getIconURL2(c9, str2);
      }
      iconURL = iconURL2;
    }
    if (iconURL == null) {
      iconURL = null;
    }
    cResult[4] = application;
    cResult[5] = game;
    cResult[6] = iconURL;
    tmp18 = iconURL;
  }
  const fn = function c() {
    let num = 0;
    set = sharedValue.set;
    const withTiming = timing.withTiming;
    timing;
    if (closure_0) {
      num = 1;
    }
    const result = set(withTiming(num, { duration: 200 }));
  };
  const items6 = [null != headerRight, sharedValue];
  cResult[0] = null != headerRight;
  cResult[1] = sharedValue;
  cResult[2] = fn;
  cResult[3] = items6;
  tmp11 = items6;
  tmp10 = fn;
}) : ((game) => {
  let closure_2;
  let items2;
  let items3;
  let items4;
  let items5;
  let items6;
  let items7;
  let obj12;
  let obj6;
  game = game.game;
  const application = game.application;
  const headerRight = game.headerRight;
  let sharedValue;
  const tmp = closure_10();
  const tmp2 = game;
  let obj = game(4580);
  dependencyMap = tmp6;
  const token = obj.useToken(application(587).colors.LEGACY_BLUR_FALLBACK_ULTRA_THIN);
  let num = 0;
  const useSharedValue = game(4612).useSharedValue;
  game(4612);
  if (null != headerRight) {
    num = 1;
  }
  sharedValue = useSharedValue(num);
  const items = [null != headerRight, sharedValue];
  const effect = sharedValue.useEffect(() => {
    let num = 0;
    set = sharedValue.set;
    const withTiming = timing.withTiming;
    timing;
    if (closure_2) {
      num = 1;
    }
    const result = set(withTiming(num, { duration: 200 }));
  }, items);
  const fn = function b() {
    const obj = { opacity: sharedValue.get() };
    return obj;
  };
  fn.__closure = { headerRightProgress: sharedValue };
  fn.__workletHash = 7824413274607;
  fn.__initData = __initData3;
  const tmp2Result = tmp2(4612);
  const animatedStyle = tmp2Result.useAnimatedStyle(fn);
  const tmp2Result2 = tmp2(4612);
  class S {
    constructor() {
      const obj = { opacity: 1 - sharedValue.get() };
      return obj;
    }
  }
  S.__closure = { headerRightProgress: sharedValue };
  S.__workletHash = 12417398077364;
  S.__initData = __initData4;
  const items1 = [game, application];
  const animatedStyle1 = tmp2Result2.useAnimatedStyle(S);
  const memo = sharedValue.useMemo(() => {
    let iconURL;
    if (game != null) {
      const getIconURL = game.getIconURL;
      let str = "png";
      if (AvatarUtils.SUPPORTS_WEBP) {
        str = "webp";
      }
      iconURL = getIconURL(c9, str);
    }
    if (iconURL == null) {
      let iconURL2;
      if (application != null) {
        const getIconURL2 = application.getIconURL;
        let str2 = "png";
        if (AvatarUtils.SUPPORTS_WEBP) {
          str2 = "webp";
        }
        iconURL2 = getIconURL2(c9, str2);
      }
      iconURL = iconURL2;
    }
    if (iconURL == null) {
      iconURL = null;
    }
    return iconURL;
  }, items1);
  let name;
  if (game != null) {
    name = game.name;
  }
  if (name == null) {
    let name1;
    if (application != null) {
      name1 = application.name;
    }
    name = name1;
  }
  let tmp16Result2 = null;
  if (null != name) {
    const obj2 = { style: tmp.headerContainer, children: items2 };
    const obj3 = { android_fallbackColor: token };
    items2 = [closure_7(tmp2(8567).BackgroundBlurFill, obj3), ];
    let tmp18Result = null != memo;
    const obj4 = { style: tmp.headerRow, children: items3 };
    if (tmp18Result) {
      const obj5 = { source: obj6, style: tmp.icon };
      obj6 = { uri: memo };
      tmp18Result = closure_7(closure_4, obj5);
    }
    items3 = [tmp18Result, , ];
    const obj7 = { style: tmp.titleContainer, children: items4 };
    const obj8 = { variant: "redesign/heading-18/bold", color: "mobile-text-heading-primary", lineClamp: 1, children: name };
    items4 = [closure_7(tmp2(4886).Heading, obj8), ];
    let l30Rank;
    if (game != null) {
      l30Rank = game.l30Rank;
    }
    let tmp16Result = null != l30Rank;
    if (tmp16Result) {
      const obj10 = { rank: game.l30Rank, compact: true };
      const obj9 = { style: tmp.rankPillContainer, children: items5 };
      items5 = [closure_7(application(8363), obj10), ];
      const obj11 = { style: items6, children: closure_7(application(8363), obj12) };
      items6 = [StyleSheet.absoluteFill, animatedStyle1];
      const View = tmp4(4612).View;
      obj12 = { rank: game.l30Rank };
      items5[1] = closure_7(View, obj11);
      tmp16Result = closure_8(closure_5, obj9);
    }
    items4[1] = tmp16Result;
    items3[1] = closure_8(closure_5, obj7);
    let tmp18Result2 = null != headerRight;
    if (tmp18Result2) {
      const obj13 = { style: items7, children: headerRight() };
      items7 = [tmp.headerRight, animatedStyle];
      const View2 = tmp4(4612).View;
      tmp18Result2 = closure_7(View2, obj13);
    }
    items3[2] = tmp18Result2;
    items2[1] = closure_8(closure_5, obj4);
    tmp16Result2 = closure_8(closure_5, obj2);
  }
  return tmp16Result2;
});
size = size_mod;
let result = size.fileFinishedImporting("modules/game_profile/native/components/GameProfileNavigationHeader.tsx");

export default tmp5;