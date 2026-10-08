// discord_app/modules/game_profile/native/components/GameProfileNavigationHeader.tsx
import nativeDefault from "../../../../../discord_common/js/packages/tokens/native.tsx";
import AvatarUtils from "../../../../utils/AvatarUtils.tsx";
import timing from "../../../../design/animation/reanimated/timing/timing.tsx";
import noop from "../../../../../_runtime/metro/00019__.js";

const require = globalThis.__r;

require = fn;
get_ActivityIndicator = fn(17);
({ View: closure_4, StyleSheet } = get_ActivityIndicator);
const jsxProd = fn(21);
({ jsx: metroRequire, jsxs: closure_7 } = jsxProd);
let c8 = 32;
const createStyles = fn(5090);
let obj2 = {
  headerContainer: {
    height: 56,
    paddingHorizontal: nativeDefault.space.PX_16,
    borderBottomWidth: StyleSheet.hairlineWidth,
    borderBottomColor: nativeDefault.colors.BORDER_SUBTLE,
    overflow: "hidden",
    justifyContent: "center",
  },
  headerRow: null,
  icon: null,
  titleContainer: null,
  headerRight: null,
  rankPillContainer: null,
};
let obj3 = {
  height: 56,
  paddingHorizontal: nativeDefault.space.PX_16,
  borderBottomWidth: StyleSheet.hairlineWidth,
  borderBottomColor: nativeDefault.colors.BORDER_SUBTLE,
  overflow: "hidden",
  justifyContent: "center",
};
obj2.headerRow = { flexDirection: "row", alignItems: "center", gap: nativeDefault.space.PX_8 };
let size = { width: 32, height: 32, borderRadius: nativeDefault.radii.sm };
obj2.icon = size;
let obj4 = { flexDirection: "row", alignItems: "center", gap: nativeDefault.space.PX_8 };
obj2.titleContainer = {
  flex: 1,
  flexDirection: "row",
  alignItems: "center",
  gap: nativeDefault.space.PX_8,
  minWidth: 0,
};
obj2.headerRight = { flexDirection: "row", alignItems: "center" };
obj2.rankPillContainer = { flex: 1, flexDirection: "row", alignItems: "center" };
let closure_9 = createStyles.createStyles(obj2);
const __initData = {
  code: "function GameProfileNavigationHeaderTsx1(){const{headerRightProgress}=this.__closure;return{opacity:headerRightProgress.get()};}",
};
const __initData2 = {
  code: "function GameProfileNavigationHeaderTsx2(){const{headerRightProgress}=this.__closure;return{opacity:1-headerRightProgress.get()};}",
};
const __initData3 = {
  code: "function GameProfileNavigationHeaderTsx3(){const{headerRightProgress}=this.__closure;return{opacity:headerRightProgress.get()};}",
};
const __initData4 = {
  code: "function GameProfileNavigationHeaderTsx4(){const{headerRightProgress}=this.__closure;return{opacity:1-headerRightProgress.get()};}",
};
const ReactCompilerGating = fn(558);
let obj5 = { flex: 1, flexDirection: "row", alignItems: "center", gap: nativeDefault.space.PX_8, minWidth: 0 };
size = fn(2);
let result = size.fileFinishedImporting("modules/game_profile/native/components/GameProfileNavigationHeader.tsx");

export default ReactCompilerGating.isReactCompilerEnabled()
  ? function GameProfileNavigationHeader(arg0) {
      const cResult = require("c").c(35);
      ({ game, application, headerRight } = arg0);
      let headerContainer = closure_9();
      let obj = require("c");
      const token = require("useToken").useToken(sharedValue(587).colors.LEGACY_BLUR_FALLBACK_ULTRA_THIN);
      _require = tmp6;
      const obj2 = require("useToken");
      let num = 0;
      if (null != headerRight) {
        num = 1;
      }
      sharedValue = require("ReanimatedRexport").useSharedValue(num);
      if ((cResult[0] === null) != headerRight) {
        if (cResult[1] === sharedValue) {
          let tmp8 = cResult[2];
          let tmp9 = cResult[3];
        }
        const effect = noop.useEffect(tmp8, tmp9);
        const fn2 = function x() {
          return { opacity: sharedValue.get() };
        };
        const obj4 = { headerRightProgress: sharedValue };
        fn2.__closure = obj4;
        fn2.__workletHash = 16001524280109;
        fn2.__initData = __initData;
        const animatedStyle = tmp(4810).useAnimatedStyle(fn2);
        const tmpResult = tmp(4810);
        class T {
          constructor() {
            obj = { opacity: 1 - closure_1.get() };
            return obj;
          }
        }
        const obj5 = { headerRightProgress: sharedValue };
        T.__closure = obj5;
        T.__workletHash = 5182160908530;
        T.__initData = __initData2;
        const animatedStyle1 = tmp(4810).useAnimatedStyle(T);
        if (cResult[4] === application) {
          if (cResult[5] === game) {
            let tmp16 = cResult[6];
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
          if (null == name) {
            return null;
          } else {
            if (cResult[7] !== token) {
              const obj6 = { android_fallbackColor: token };
              const tmp26 = closure_6(tmp(8517).BackgroundBlurFill, obj6);
              cResult[7] = token;
              cResult[8] = tmp26;
              let tmp24 = tmp26;
            } else {
              tmp24 = cResult[8];
            }
            if (cResult[9] === tmp16) {
              if (cResult[10] === headerContainer.icon) {
                let tmp27 = cResult[11];
              }
              if (cResult[12] !== name) {
                const obj7 = {
                  variant: "redesign/heading-18/bold",
                  color: "mobile-text-heading-primary",
                  lineClamp: 1,
                  children: name,
                };
                const tmp32 = closure_6(tmp(5086).Heading, obj7);
                cResult[12] = name;
                cResult[13] = tmp32;
                let tmp30 = tmp32;
              } else {
                tmp30 = cResult[13];
              }
              if (cResult[14] === game) {
                if (cResult[15] === animatedStyle1) {
                  if (cResult[16] === headerContainer.rankPillContainer) {
                    let tmp33 = cResult[17];
                  }
                  if (cResult[18] === headerContainer.titleContainer) {
                    if (cResult[19] === tmp30) {
                      if (cResult[20] === tmp33) {
                        let tmp40 = cResult[21];
                      }
                      if (cResult[22] === headerRight) {
                        if (cResult[23] === animatedStyle) {
                          if (cResult[24] === headerContainer.headerRight) {
                            let tmp44 = cResult[25];
                          }
                          if (cResult[26] === headerContainer.headerRow) {
                            if (cResult[27] === tmp27) {
                              if (cResult[28] === tmp40) {
                                if (cResult[29] === tmp44) {
                                  let tmp47 = cResult[30];
                                }
                                if (cResult[31] === headerContainer.headerContainer) {
                                  if (cResult[32] === tmp47) {
                                  }
                                }
                                const obj8 = { style: headerContainer.headerContainer, children: null };
                                const items = [tmp24, tmp47];
                                obj8.children = items;
                                const tmp54 = closure_7(closure_4, obj8);
                                headerContainer = headerContainer.headerContainer;
                                cResult[31] = headerContainer;
                                class T {
                                  constructor() {
                                    obj = { opacity: 1 - closure_1.get() };
                                    return obj;
                                  }
                                }
                                cResult[32] = tmp47;
                                cResult[33] = tmp24;
                                cResult[34] = tmp54;
                              }
                            }
                          }
                          const obj9 = { style: headerContainer.headerRow, children: null };
                          const items1 = [tmp27, tmp40, tmp44];
                          obj9.children = items1;
                          const tmp50 = closure_7(closure_4, obj9);
                          cResult[26] = headerContainer.headerRow;
                          class T {
                            constructor() {
                              obj = { opacity: 1 - closure_1.get() };
                              return obj;
                            }
                          }
                          cResult[27] = tmp27;
                          cResult[28] = tmp40;
                          cResult[29] = tmp44;
                          cResult[30] = tmp50;
                          tmp47 = tmp50;
                        }
                      }
                      let tmp45 = null != headerRight;
                      if (tmp45) {
                        const obj10 = { style: null, children: null };
                        const items2 = [headerContainer.headerRight, animatedStyle];
                        obj10.style = items2;
                        obj10.children = headerRight();
                        tmp45 = closure_6(tmp4(4810).View, obj10);
                      }
                      cResult[22] = headerRight;
                      cResult[23] = animatedStyle;
                      cResult[24] = headerContainer.headerRight;
                      cResult[25] = tmp45;
                      tmp44 = tmp45;
                    }
                  }
                  const obj11 = { style: headerContainer.titleContainer, children: null };
                  const items3 = [tmp30, tmp33];
                  obj11.children = items3;
                  const tmp43 = closure_7(closure_4, obj11);
                  cResult[18] = headerContainer.titleContainer;
                  class T {
                    constructor() {
                      obj = { opacity: 1 - closure_1.get() };
                      return obj;
                    }
                  }
                  cResult[20] = tmp33;
                  cResult[21] = tmp43;
                  tmp40 = tmp43;
                }
              }
              let l30Rank;
              if (game != null) {
                l30Rank = game.l30Rank;
              }
              let tmp35 = null != l30Rank;
              if (tmp35) {
                const obj12 = { style: headerContainer.rankPillContainer, children: null };
                const obj13 = { rank: game.l30Rank, compact: true };
                const items4 = [closure_6(tmp4(8894), obj13)];
                const obj14 = { style: null, children: null };
                const items5 = [StyleSheet.absoluteFill, animatedStyle1];
                class T {
                  constructor() {
                    obj = { opacity: 1 - closure_1.get() };
                    return obj;
                  }
                }
                const obj15 = { rank: game.l30Rank };
                obj14.children = closure_6(tmp4(8894), obj15);
                items4[1] = closure_6(tmp4(4810).View, obj14);
                obj12.children = items4;
                tmp35 = closure_7(closure_4, obj12);
              }
              cResult[14] = game;
              cResult[15] = animatedStyle1;
              cResult[16] = headerContainer.rankPillContainer;
              class T {
                constructor() {
                  obj = { opacity: 1 - closure_1.get() };
                  return obj;
                }
              }
              tmp33 = tmp35;
            }
            let tmp28 = null != tmp16;
            if (tmp28) {
              const obj16 = { source: null, style: null };
              const obj17 = { uri: tmp16 };
              obj16.source = obj17;
              obj16.style = headerContainer.icon;
              tmp28 = closure_6(tmp4(6164), obj16);
            }
            cResult[9] = tmp16;
            cResult[10] = headerContainer.icon;
            cResult[11] = tmp28;
            tmp27 = tmp28;
          }
        }
        let iconURL;
        if (game != null) {
          let str = "png";
          if (tmp(1414).SUPPORTS_WEBP) {
            str = "webp";
          }
          iconURL = game.getIconURL(c8, str);
        }
        if (iconURL == null) {
          let iconURL1;
          if (application != null) {
            let str2 = "png";
            if (tmp(1414).SUPPORTS_WEBP) {
              str2 = "webp";
            }
            iconURL1 = application.getIconURL(c8, str2);
          }
          iconURL = iconURL1;
        }
        if (iconURL == null) {
          iconURL = null;
        }
        cResult[4] = application;
        cResult[5] = game;
        cResult[6] = iconURL;
        tmp16 = iconURL;
        const tmpResult2 = tmp(4810);
      }
      const fn = function s() {
        let num = 0;
        if (closure_0) {
          num = 1;
        }
        const result = sharedValue.set(timing.withTiming(num, { duration: 200 }));
      };
      const items6 = [null != headerRight, sharedValue];
      cResult[0] = null != headerRight;
      cResult[1] = sharedValue;
      cResult[2] = fn;
      cResult[3] = items6;
      tmp9 = items6;
      tmp8 = fn;
      const obj3 = require("ReanimatedRexport");
    }
  : function GameProfileNavigationHeader(game) {
      game = game.game;
      const application = game.application;
      const headerRight = game.headerRight;
      let sharedValue;
      const tmp = closure_9();
      dependencyMap = tmp6;
      const token = game(4778).useToken(application(587).colors.LEGACY_BLUR_FALLBACK_ULTRA_THIN);
      let obj = game(4778);
      let num = 0;
      if (null != headerRight) {
        num = 1;
      }
      sharedValue = game(4810).useSharedValue(num);
      const items = [null != headerRight, sharedValue];
      const effect = sharedValue.useEffect(() => {
        let num = 0;
        if (closure_2) {
          num = 1;
        }
        const result = sharedValue.set(timing.withTiming(num, { duration: 200 }));
      }, items);
      const obj2 = game(4810);
      const fn = function k() {
        return { opacity: sharedValue.get() };
      };
      fn.__closure = { headerRightProgress: sharedValue };
      fn.__workletHash = 7824413274607;
      fn.__initData = __initData3;
      const animatedStyle = game(4810).useAnimatedStyle(fn);
      const tmp2Result = game(4810);
      const fn2 = function b() {
        return { opacity: 1 - sharedValue.get() };
      };
      fn2.__closure = { headerRightProgress: sharedValue };
      fn2.__workletHash = 12417398077364;
      fn2.__initData = __initData4;
      const items1 = [game, application];
      const animatedStyle1 = game(4810).useAnimatedStyle(fn2);
      const memo = sharedValue.useMemo(() => {
        let iconURL;
        if (game != null) {
          let str = "png";
          if (AvatarUtils.SUPPORTS_WEBP) {
            str = "webp";
          }
          iconURL = game.getIconURL(c8, str);
        }
        if (iconURL == null) {
          let iconURL1;
          if (application != null) {
            let str2 = "png";
            if (AvatarUtils.SUPPORTS_WEBP) {
              str2 = "webp";
            }
            iconURL1 = application.getIconURL(c8, str2);
          }
          iconURL = iconURL1;
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
      let tmp15Result2 = null;
      if (null != name) {
        const obj3 = { style: tmp.headerContainer, children: null };
        const obj4 = { android_fallbackColor: token };
        const items2 = [closure_6(tmp2(8517).BackgroundBlurFill, obj4)];
        const obj5 = { style: tmp.headerRow, children: null };
        let tmp17Result = null != memo;
        if (tmp17Result) {
          const obj6 = { source: null, style: null };
          const obj7 = { uri: memo };
          obj6.source = obj7;
          obj6.style = tmp.icon;
          tmp17Result = closure_6(tmp4(6164), obj6);
        }
        const items3 = [tmp17Result, ,];
        const obj8 = { style: tmp.titleContainer, children: null };
        const obj9 = {
          variant: "redesign/heading-18/bold",
          color: "mobile-text-heading-primary",
          lineClamp: 1,
          children: name,
        };
        const items4 = [closure_6(tmp2(5086).Heading, obj9)];
        let l30Rank;
        if (game != null) {
          l30Rank = game.l30Rank;
        }
        let tmp15Result = null != l30Rank;
        if (tmp15Result) {
          const obj10 = { style: tmp.rankPillContainer, children: null };
          const obj11 = { rank: game.l30Rank, compact: true };
          const items5 = [closure_6(tmp4(8894), obj11)];
          const obj12 = { style: null, children: null };
          const items6 = [StyleSheet.absoluteFill, animatedStyle1];
          obj12.style = items6;
          const obj13 = { rank: game.l30Rank };
          obj12.children = closure_6(tmp4(8894), obj13);
          items5[1] = closure_6(tmp4(4810).View, obj12);
          obj10.children = items5;
          tmp15Result = closure_7(closure_4, obj10);
        }
        items4[1] = tmp15Result;
        obj8.children = items4;
        items3[1] = closure_7(closure_4, obj8);
        let tmp17Result2 = null != headerRight;
        if (tmp17Result2) {
          const obj14 = { style: null, children: null };
          const items7 = [tmp.headerRight, animatedStyle];
          obj14.style = items7;
          obj14.children = headerRight();
          tmp17Result2 = closure_6(tmp4(4810).View, obj14);
        }
        items3[2] = tmp17Result2;
        obj5.children = items3;
        items2[1] = closure_7(closure_4, obj5);
        obj3.children = items2;
        tmp15Result2 = closure_7(closure_4, obj3);
      }
      return tmp15Result2;
    };
