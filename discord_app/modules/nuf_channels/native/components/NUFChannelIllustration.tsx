// === Module 13596: NUFChannelIllustration ===

// Module 13596 (NUFChannelIllustration)
import nativeDefault from "native" /* 587 */;
import ReanimatedRexport from "ReanimatedRexport" /* 4618 */;
import Text_Text from "Text/Text" /* 4892 */;
import timing from "timing" /* 4897 */;
import _slicedToArray from "_slicedToArray" /* 32 */;
import react from "react" /* 19 */;
import react_native from "react-native" /* 17 */;
import Fragment from "Fragment" /* 21 */;
import createStyles_mod from "createStyles" /* 4896 */;
import ReactCompilerGating from "ReactCompilerGating" /* 558 */;
import size_mod from "module_2" /* 2 */;

const require = globalThis.__r;
let _require, dependencyMap, set;

let hasOwnProperty;
let metroImportAll;
let metroImportDefault;
let metroRequire;
let obj2;
let size;
({ View: hasOwnProperty, Image: metroRequire } = react_native);
({ jsx: metroImportDefault, jsxs: metroImportAll } = Fragment);
let createStyles = createStyles_mod;
let obj = { container: { width: "100%", maxWidth: 275, position: "relative", display: "flex", justifyContent: "center", alignItems: "center", marginTop: 24, marginBottom: 24 }, card: { padding: 0, width: "100%" }, cardBackground: size, header: obj2, content: { height: 150, paddingVertical: 8, paddingHorizontal: 16, display: "flex", justifyContent: "flex-end", overflow: "hidden" }, message: { display: "flex", paddingVertical: 8, flexDirection: "row" }, messageAvatar: { width: 40, height: 40, marginRight: 12 }, messageContent: { display: "flex", flex: 1 }, starMedium: { height: 25, width: 15 }, starSmall: { height: 15, width: 10 }, starGreen: { position: "absolute", top: 5, left: -28 }, starBlue: { position: "absolute", top: -15, left: -10 }, starPink: { position: "absolute", bottom: -18, right: -22 }, starPurple: { position: "absolute", bottom: -30, right: -2 } };
size = { width: "90%", height: 12, borderTopLeftRadius: nativeDefault.radii.lg, borderTopRightRadius: nativeDefault.radii.lg, backgroundColor: nativeDefault.colors.BACKGROUND_BASE_LOWEST };
createStyles = createStyles.createStyles;
obj2 = { paddingVertical: 12, paddingHorizontal: 16, display: "flex", alignItems: "center", flexDirection: "row", borderBottomColor: nativeDefault.colors.BORDER_SUBTLE, borderBottomWidth: 1 };
let closure_9 = createStyles(obj);
const __initData = { code: "function NUFChannelIllustrationTsx1(){const{interpolate,messageListAnimation}=this.__closure;return{transform:[{translateY:interpolate(messageListAnimation.get(),[0,1],[50,0])}]};}" };
const __initData2 = { code: "function NUFChannelIllustrationTsx2(){const{interpolate,messageListAnimation}=this.__closure;return{transform:[{translateY:interpolate(messageListAnimation.get(),[0,1],[50,0])}]};}" };
const tmp5 = ReactCompilerGating.isReactCompilerEnabled() ? (() => {
  let closure_0;
  let closure_2;
  let first;
  let items2;
  let items3;
  let items4;
  let items6;
  let items7;
  let items8;
  let items9;
  let sharedValue;
  let sharedValue1;
  let tmp10;
  let tmp9;
  const tmp = _require;
  let obj = require("react");
  const cResult = obj.c(59);
  const tmp4 = closure_9();
  _require = tmp4;
  if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
    let items = [];
    cResult[0] = items;
    first = items;
  } else {
    first = cResult[0];
  }
  let obj2 = sharedValue1;
  const tmp6 = sharedValue(sharedValue1.useState(first), 2);
  const first1 = tmp6[0];
  dependencyMap = tmp6[1];
  const tmpResult = tmp(4618);
  sharedValue = tmpResult.useSharedValue(0);
  const tmpResult3 = tmp(4618);
  sharedValue1 = tmpResult3.useSharedValue(0);
  if (cResult[1] === Symbol.for("react.memo_cache_sentinel")) {
    const fn = function p() {
      let closure_1;
      const timeout = setTimeout(() => closure_1_2((arg0) => {
        let intl2;
        let stringResult;
        const items = [...arg0];
        const intl = closure_1_0(closure_1_2[6]).intl;
        const obj = { name: intl2.string(closure_1_0(closure_1_2[6]).t["9m/HsX"]), avatar: closure_1_1(closure_1_2[7]), message: stringResult };
        stringResult = intl.string(closure_1_0(closure_1_2[6]).t["5alrl0"]);
        intl2 = closure_1_0(closure_1_2[6]).intl;
        items[tmp] = obj;
        return items;
      }), 500);
      const timeout2 = setTimeout(() => closure_1_2((arg0) => {
        let intl2;
        let stringResult;
        const items = [...arg0];
        const intl = closure_1_0(closure_1_2[6]).intl;
        const obj = { name: intl2.string(closure_1_0(closure_1_2[6]).t["AW1kM+"]), avatar: closure_1_1(closure_1_2[8]), message: stringResult };
        stringResult = intl.string(closure_1_0(closure_1_2[6]).t["5Oo+vS"]);
        intl2 = closure_1_0(closure_1_2[6]).intl;
        items[tmp] = obj;
        return items;
      }), 2000);
      return () => {
        clearTimeout(closure_0);
        clearTimeout(closure_1);
      };
    };
    let items1 = [];
    cResult[1] = fn;
    cResult[2] = items1;
    tmp10 = items1;
    tmp9 = fn;
  } else {
    tmp9 = cResult[1];
    tmp10 = cResult[2];
  }
  const effect = obj2.useEffect(tmp9, tmp10);
  if (cResult[3] === first1.length) {
    let tmp12;
    if (cResult[4] === sharedValue1) {
      tmp12 = cResult[5];
    }
    if (cResult[6] === first1) {
      let tmp13;
      let tmp15;
      if (cResult[7] === sharedValue1) {
        tmp13 = cResult[8];
      }
      const effect1 = obj2.useEffect(tmp12, tmp13);
      if (cResult[9] !== sharedValue) {
        const fn2 = function x() {
          const result = sharedValue.set(0);
          set = sharedValue.set;
          const obj = timing;
          const result1 = set(obj.withTiming(1, { duration: 200 }));
        };
        cResult[9] = sharedValue;
        cResult[10] = fn2;
        tmp15 = fn2;
      } else {
        tmp15 = cResult[10];
      }
      if (cResult[11] === sharedValue) {
        let tmp16;
        if (cResult[12] === first1) {
          tmp16 = cResult[13];
        }
        const effect2 = obj2.useEffect(tmp15, tmp16);
        const tmpResult4 = tmp(4618);
        class M {
          constructor() {
            let items;
            let obj3;
            const obj = { transform: items };
            const obj2 = { translateY: obj3.interpolate(sharedValue.get(), [0, 1], [50, 0]) };
            items = [obj2];
            obj3 = ReanimatedRexport;
            return obj;
          }
        }
        let obj3 = { interpolate: tmp(4618).interpolate, messageListAnimation: sharedValue };
        const useAnimatedStyle = tmpResult4.useAnimatedStyle;
        M.__closure = obj3;
        M.__workletHash = 1240710065054;
        M.__initData = __initData;
        const animatedStyle = useAnimatedStyle(M);
        if (cResult[14] === tmp4.starBlue) {
          let tmp22;
          if (cResult[15] === tmp4.starSmall) {
            tmp22 = cResult[16];
          }
          if (cResult[17] === tmp4.starMedium) {
            let tmp27;
            if (cResult[18] === tmp4.starPink) {
              tmp27 = cResult[19];
            }
            if (cResult[20] === tmp4.starGreen) {
              let tmp31;
              if (cResult[21] === tmp4.starMedium) {
                tmp31 = cResult[22];
              }
              if (cResult[23] === tmp4.starPurple) {
                let tmp35;
                let tmp39;
                let tmp44;
                let tmp47;
                let tmp50;
                let tmp55;
                if (cResult[24] === tmp4.starSmall) {
                  tmp35 = cResult[25];
                }
                if (cResult[26] !== tmp4.cardBackground) {
                  let obj4 = { style: null };
                  class M {
                    constructor() {
                      let items;
                      let obj3;
                      const obj = { transform: items };
                      const obj2 = { translateY: obj3.interpolate(sharedValue.get(), [0, 1], [50, 0]) };
                      items = [obj2];
                      obj3 = ReanimatedRexport;
                      return obj;
                    }
                  }
                  const tmp42 = closure_7(closure_5, obj4);
                  cResult[26] = tmp4.cardBackground;
                  cResult[27] = tmp42;
                  tmp39 = tmp42;
                } else {
                  tmp39 = cResult[27];
                }
                const _Symbol = Symbol;
                class M {
                  constructor() {
                    let items;
                    let obj3;
                    const obj = { transform: items };
                    const obj2 = { translateY: obj3.interpolate(sharedValue.get(), [0, 1], [50, 0]) };
                    items = [obj2];
                    obj3 = ReanimatedRexport;
                    return obj;
                  }
                }
                if (cResult[28] === Symbol.for("react.memo_cache_sentinel")) {
                  const tmp46 = closure_7(tmp(5871).TextIcon, { size: "sm" });
                  class M {
                    constructor() {
                      let items;
                      let obj3;
                      const obj = { transform: items };
                      const obj2 = { translateY: obj3.interpolate(sharedValue.get(), [0, 1], [50, 0]) };
                      items = [obj2];
                      obj3 = ReanimatedRexport;
                      return obj;
                    }
                  }
                  tmp44 = tmp46;
                } else {
                  tmp44 = cResult[28];
                }
                const _Symbol2 = Symbol;
                if (cResult[29] === Symbol.for("react.memo_cache_sentinel")) {
                  let obj5 = { variant: "text-md/bold", allowFontScaling: false, children: items2 };
                  const Text = tmp(4892).Text;
                  class M {
                    constructor() {
                      let items;
                      let obj3;
                      const obj = { transform: items };
                      const obj2 = { translateY: obj3.interpolate(sharedValue.get(), [0, 1], [50, 0]) };
                      items = [obj2];
                      obj3 = ReanimatedRexport;
                      return obj;
                    }
                  }
                  items2 = [" ", obj12.string(tmp(1126).t.aLOLry)];
                  const tmp49 = closure_8(Text, obj5);
                  cResult[29] = tmp49;
                  tmp47 = tmp49;
                } else {
                  tmp47 = cResult[29];
                }
                if (cResult[30] !== tmp4.header) {
                  const obj6 = { style: null, children: items3 };
                  class M {
                    constructor() {
                      let items;
                      let obj3;
                      const obj = { transform: items };
                      const obj2 = { translateY: obj3.interpolate(sharedValue.get(), [0, 1], [50, 0]) };
                      items = [obj2];
                      obj3 = ReanimatedRexport;
                      return obj;
                    }
                  }
                  items3 = [tmp44, tmp47];
                  const tmp53 = closure_8(closure_5, obj6);
                  cResult[30] = tmp4.header;
                  cResult[31] = tmp53;
                  tmp50 = tmp53;
                } else {
                  tmp50 = cResult[31];
                }
                if (cResult[32] === first1) {
                  if (cResult[33] === tmp4.message) {
                    if (cResult[34] === tmp4.messageAvatar) {
                      if (cResult[35] === tmp4.messageContent) {
                        tmp55 = cResult[36];
                      }
                      if (cResult[41] === animatedStyle) {
                        let tmp58;
                        if (cResult[42] === tmp55) {
                          tmp58 = cResult[43];
                        }
                        if (cResult[44] === tmp4.content) {
                          let tmp61;
                          if (cResult[45] === tmp58) {
                            tmp61 = cResult[46];
                          }
                          if (cResult[47] === tmp4.card) {
                            if (cResult[48] === tmp50) {
                              let tmp64;
                              if (cResult[49] === tmp61) {
                                tmp64 = cResult[50];
                              }
                              if (cResult[51] === tmp4.container) {
                                if (cResult[52] === tmp31) {
                                  if (cResult[53] === tmp35) {
                                    if (cResult[54] === tmp39) {
                                      if (cResult[55] === tmp64) {
                                        if (cResult[56] === tmp22) {
                                          let tmp68;
                                          if (cResult[57] === tmp27) {
                                            tmp68 = cResult[58];
                                          }
                                          return tmp68;
                                        }
                                      }
                                    }
                                  }
                                }
                              }
                              class M {
                                constructor() {
                                  let items;
                                  let obj3;
                                  const obj = { transform: items };
                                  const obj2 = { translateY: obj3.interpolate(sharedValue.get(), [0, 1], [50, 0]) };
                                  items = [obj2];
                                  obj3 = ReanimatedRexport;
                                  return obj;
                                }
                              }
                              const obj7 = { style: tmp21, children: items4 };
                              items4 = [tmp22, tmp27, tmp31, tmp35, tmp39, tmp64];
                              const tmp70 = closure_8(closure_5, obj7);
                              cResult[51] = tmp4.container;
                              cResult[52] = tmp31;
                              cResult[53] = tmp35;
                              cResult[54] = tmp39;
                              cResult[55] = tmp64;
                              cResult[56] = tmp22;
                              cResult[57] = tmp27;
                              cResult[58] = tmp70;
                              tmp68 = tmp70;
                            }
                          }
                          class M {
                            constructor() {
                              let items;
                              let obj3;
                              const obj = { transform: items };
                              const obj2 = { translateY: obj3.interpolate(sharedValue.get(), [0, 1], [50, 0]) };
                              items = [obj2];
                              obj3 = ReanimatedRexport;
                              return obj;
                            }
                          }
                          tmp66[0] = tmp43;
                          const items5 = [tmp50, tmp61];
                          tmp66[3] = items5;
                          const tmp67 = closure_8(tmp(6002).Card, tmp66);
                          cResult[47] = tmp4.card;
                          cResult[48] = tmp50;
                          cResult[49] = tmp61;
                          cResult[50] = tmp67;
                          tmp64 = tmp67;
                        }
                        class M {
                          constructor() {
                            let items;
                            let obj3;
                            const obj = { transform: items };
                            const obj2 = { translateY: obj3.interpolate(sharedValue.get(), [0, 1], [50, 0]) };
                            items = [obj2];
                            obj3 = ReanimatedRexport;
                            return obj;
                          }
                        }
                        const obj8 = { style: tmp54, children: tmp58 };
                        const tmp63 = closure_7(closure_5, obj8);
                        cResult[44] = tmp4.content;
                        cResult[45] = tmp58;
                        cResult[46] = tmp63;
                        tmp61 = tmp63;
                      }
                      class M {
                        constructor() {
                          let items;
                          let obj3;
                          const obj = { transform: items };
                          const obj2 = { translateY: obj3.interpolate(sharedValue.get(), [0, 1], [50, 0]) };
                          items = [obj2];
                          obj3 = ReanimatedRexport;
                          return obj;
                        }
                      }
                      const obj9 = { style: animatedStyle, children: tmp55 };
                      const tmp60 = closure_7(first1(4618).View, obj9);
                      cResult[41] = animatedStyle;
                      cResult[42] = tmp55;
                      cResult[43] = tmp60;
                      tmp58 = tmp60;
                    }
                  }
                }
                if (cResult[37] === tmp4.message) {
                  if (cResult[38] === tmp4.messageAvatar) {
                    let tmp56;
                    if (cResult[39] === tmp4.messageContent) {
                      tmp56 = cResult[40];
                    }
                    const mapped = first1.map(tmp56);
                    class M {
                      constructor() {
                        let items;
                        let obj3;
                        const obj = { transform: items };
                        const obj2 = { translateY: obj3.interpolate(sharedValue.get(), [0, 1], [50, 0]) };
                        items = [obj2];
                        obj3 = ReanimatedRexport;
                        return obj;
                      }
                    }
                    cResult[33] = tmp4.message;
                    cResult[34] = tmp4.messageAvatar;
                    cResult[35] = tmp4.messageContent;
                    cResult[36] = mapped;
                    tmp55 = mapped;
                  }
                }
                const fn3 = function j(children) {
                  let items;
                  let items1;
                  const obj = { style: closure_0.message, children: items };
                  items = [, ];
                  const obj2 = { source: children.avatar, style: closure_0.messageAvatar };
                  items[0] = metroImportDefault(metroRequire, obj2);
                  const obj3 = { style: closure_0.messageContent, children: items1 };
                  items1 = [, ];
                  const obj4 = { variant: "text-md/semibold", allowFontScaling: false, children: children.name };
                  items1[0] = metroImportDefault(Text_Text.Text, obj4);
                  const obj5 = { variant: "text-md/medium", allowFontScaling: false, children: children.message };
                  items1[1] = metroImportDefault(Text_Text.Text, obj5);
                  items[1] = metroImportAll(hasOwnProperty, obj3);
                  return metroImportAll(hasOwnProperty, obj, children.message);
                };
                cResult[37] = tmp4.message;
                cResult[38] = tmp4.messageAvatar;
                cResult[39] = tmp4.messageContent;
                cResult[40] = fn3;
                tmp56 = fn3;
              }
              class M {
                constructor() {
                  let items;
                  let obj3;
                  const obj = { transform: items };
                  const obj2 = { translateY: obj3.interpolate(sharedValue.get(), [0, 1], [50, 0]) };
                  items = [obj2];
                  obj3 = ReanimatedRexport;
                  return obj;
                }
              }
              const obj10 = { source: first1(13602), style: items6 };
              items6 = [, ];
              ({ starSmall: arr9[0], starPurple: arr9[1] } = tmp4);
              const tmp38 = closure_7(closure_6, obj10);
              cResult[23] = tmp4.starPurple;
              cResult[24] = tmp4.starSmall;
              cResult[25] = tmp38;
              tmp35 = tmp38;
            }
            class M {
              constructor() {
                let items;
                let obj3;
                const obj = { transform: items };
                const obj2 = { translateY: obj3.interpolate(sharedValue.get(), [0, 1], [50, 0]) };
                items = [obj2];
                obj3 = ReanimatedRexport;
                return obj;
              }
            }
            const obj11 = { source: first1(13601), style: items7 };
            items7 = [, ];
            ({ starMedium: arr8[0], starGreen: arr8[1] } = tmp4);
            const tmp34 = closure_7(closure_6, obj11);
            cResult[20] = tmp4.starGreen;
            cResult[21] = tmp4.starMedium;
            cResult[22] = tmp34;
            tmp31 = tmp34;
          }
          class M {
            constructor() {
              let items;
              let obj3;
              const obj = { transform: items };
              const obj2 = { translateY: obj3.interpolate(sharedValue.get(), [0, 1], [50, 0]) };
              items = [obj2];
              obj3 = ReanimatedRexport;
              return obj;
            }
          }
          const obj13 = { source: first1(13600), style: items8 };
          items8 = [, ];
          ({ starMedium: arr7[0], starPink: arr7[1] } = tmp4);
          const tmp30 = closure_7(closure_6, obj13);
          cResult[17] = tmp4.starMedium;
          cResult[18] = tmp4.starPink;
          cResult[19] = tmp30;
          tmp27 = tmp30;
        }
        const obj14 = { source: first1(13599), style: items9 };
        items9 = [, ];
        ({ starSmall: arr6[0], starBlue: arr6[1] } = tmp4);
        const tmp26 = closure_7(closure_6, obj14);
        cResult[14] = tmp4.starBlue;
        cResult[15] = tmp4.starSmall;
        cResult[16] = tmp26;
        tmp22 = tmp26;
      }
      const items10 = [sharedValue, first1];
      cResult[11] = sharedValue;
      cResult[12] = first1;
      cResult[13] = items10;
      tmp16 = items10;
    }
    const items11 = [, first1];
    cResult[6] = first1;
    cResult[7] = sharedValue1;
    cResult[8] = items11;
    tmp13 = items11;
  }
  class S {
    constructor() {
      if (first1.length >= 2) {
        set = sharedValue1.set;
        const obj = timing;
        const result = set(obj.withTiming(1, { duration: 250 }));
      }
    }
  }
  cResult[3] = first1.length;
  cResult[4] = sharedValue1;
  cResult[5] = S;
  tmp12 = S;
}) : (() => {
  let View;
  let closure_0;
  let closure_2;
  let items2;
  let items3;
  let items4;
  let items5;
  let items6;
  let items7;
  let items8;
  let items9;
  let obj15;
  let sharedValue;
  let sharedValue1;
  const tmp = closure_9();
  _require = tmp;
  const tmp2 = sharedValue(sharedValue1.useState([]), 2);
  const first = tmp2[0];
  dependencyMap = tmp2[1];
  let obj = require("ReanimatedRexport");
  sharedValue = obj.useSharedValue(0);
  let obj2 = require("ReanimatedRexport");
  sharedValue1 = obj2.useSharedValue(0);
  const effect = sharedValue1.useEffect(() => {
    let closure_1;
    const timeout = setTimeout(() => closure_1_2((arg0) => {
      let intl2;
      let stringResult;
      const items = [...arg0];
      const intl = closure_1_0(closure_1_2[6]).intl;
      const obj = { name: intl2.string(closure_1_0(closure_1_2[6]).t["9m/HsX"]), avatar: closure_1_1(closure_1_2[7]), message: stringResult };
      stringResult = intl.string(closure_1_0(closure_1_2[6]).t["5alrl0"]);
      intl2 = closure_1_0(closure_1_2[6]).intl;
      items[tmp] = obj;
      return items;
    }), 500);
    const timeout2 = setTimeout(() => closure_1_2((arg0) => {
      let intl2;
      let stringResult;
      const items = [...arg0];
      const intl = closure_1_0(closure_1_2[6]).intl;
      const obj = { name: intl2.string(closure_1_0(closure_1_2[6]).t["AW1kM+"]), avatar: closure_1_1(closure_1_2[8]), message: stringResult };
      stringResult = intl.string(closure_1_0(closure_1_2[6]).t["5Oo+vS"]);
      intl2 = closure_1_0(closure_1_2[6]).intl;
      items[tmp] = obj;
      return items;
    }), 2000);
    return () => {
      clearTimeout(closure_0);
      clearTimeout(closure_1);
    };
  }, []);
  let items = [sharedValue1, first];
  const effect1 = sharedValue1.useEffect(() => {
    if (first.length >= 2) {
      set = sharedValue1.set;
      const obj = timing;
      const result = set(obj.withTiming(1, { duration: 250 }));
    }
  }, items);
  let items1 = [sharedValue, first];
  const effect2 = sharedValue1.useEffect(() => {
    const result = sharedValue.set(0);
    set = sharedValue.set;
    const obj = timing;
    const result1 = set(obj.withTiming(1, { duration: 200 }));
  }, items1);
  let obj3 = require("ReanimatedRexport");
  const fn = function x() {
    let items;
    let obj3;
    const obj = { transform: items };
    const obj2 = { translateY: obj3.interpolate(sharedValue.get(), [0, 1], [50, 0]) };
    items = [obj2];
    obj3 = ReanimatedRexport;
    return obj;
  };
  let obj4 = { interpolate: require("ReanimatedRexport").interpolate, messageListAnimation: sharedValue };
  fn.__closure = obj4;
  fn.__workletHash = 14664640545757;
  fn.__initData = __initData2;
  let obj5 = { style: tmp.container, children: items3 };
  const obj6 = { source: first(13599), style: items2 };
  const animatedStyle = obj3.useAnimatedStyle(fn);
  items2 = [, ];
  ({ starSmall: arr4[0], starBlue: arr4[1] } = tmp);
  items3 = [closure_7(closure_6, obj6), , , , , ];
  const obj7 = { source: first(13600), style: items4 };
  items4 = [, ];
  ({ starMedium: arr6[0], starPink: arr6[1] } = tmp);
  items3[1] = closure_7(closure_6, obj7);
  const obj8 = { source: first(13601), style: items5 };
  items5 = [, ];
  ({ starMedium: arr7[0], starGreen: arr7[1] } = tmp);
  items3[2] = closure_7(closure_6, obj8);
  const obj9 = { source: first(13602), style: items6 };
  items6 = [, ];
  ({ starSmall: arr8[0], starPurple: arr8[1] } = tmp);
  items3[3] = closure_7(closure_6, obj9);
  const obj10 = { style: tmp.cardBackground };
  items3[4] = closure_7(closure_5, obj10);
  const obj11 = { style: tmp.card, shadow: "low", border: "subtle", children: items9 };
  const obj12 = { style: tmp.header, children: items7 };
  const Card = require("Card/Card").Card;
  items7 = [closure_7(require("TextIcon").TextIcon, { size: "sm" }), ];
  const obj13 = { variant: "text-md/bold", allowFontScaling: false, children: items8 };
  const Text = require("Text/Text").Text;
  let intl = require("intl").intl;
  items8 = [" ", intl.string(require("intl").t.aLOLry)];
  items7[1] = closure_8(Text, obj13);
  items9 = [closure_8(closure_5, obj12), ];
  const obj14 = { style: tmp.content, children: closure_7(View, obj15) };
  obj15 = {
    style: animatedStyle,
    children: first.map((children) => {
      let items;
      let items1;
      const obj = { style: closure_0.message, children: items };
      items = [, ];
      const obj2 = { source: children.avatar, style: closure_0.messageAvatar };
      items[0] = metroImportDefault(metroRequire, obj2);
      const obj3 = { style: closure_0.messageContent, children: items1 };
      items1 = [, ];
      const obj4 = { variant: "text-md/semibold", allowFontScaling: false, children: children.name };
      items1[0] = metroImportDefault(Text_Text.Text, obj4);
      const obj5 = { variant: "text-md/medium", allowFontScaling: false, children: children.message };
      items1[1] = metroImportDefault(Text_Text.Text, obj5);
      items[1] = metroImportAll(hasOwnProperty, obj3);
      return metroImportAll(hasOwnProperty, obj, children.message);
    })
  };
  View = first(4618).View;
  items9[1] = closure_7(closure_5, obj14);
  items3[5] = closure_8(Card, obj11);
  return closure_8(closure_5, obj5);
});
size = size_mod;
let result = size.fileFinishedImporting("modules/nuf_channels/native/components/NUFChannelIllustration.tsx");

export default tmp5;