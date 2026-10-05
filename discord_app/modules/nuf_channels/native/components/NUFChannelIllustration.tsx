// === Module 13580: NUFChannelIllustration ===

// Module 13580 (NUFChannelIllustration)
import nativeDefault from "native" /* 587 */;
import ReanimatedRexport from "ReanimatedRexport" /* 4612 */;
import Text_Text from "Text/Text" /* 4886 */;
import timing from "timing" /* 4891 */;
import _slicedToArray from "module_32" /* 32 */;
import noop from "module_19" /* 19 */;

const require = globalThis.__r;

require = fn;
get_ActivityIndicator = fn(17);
({ View: hasOwnProperty, Image: metroRequire } = get_ActivityIndicator);
const jsxProd = fn(21);
({ jsx: closure_7, jsxs: closure_8 } = jsxProd);
const createStyles = fn(4890);
let obj2 = { container: { width: "100%", maxWidth: 275, position: "relative", display: "flex", justifyContent: "center", alignItems: "center", marginTop: 24, marginBottom: 24 }, card: { padding: 0, width: "100%" }, cardBackground: null, header: null, content: null, message: null, messageAvatar: null, messageContent: null, starMedium: null, starSmall: null, starGreen: null, starBlue: null, starPink: null, starPurple: null };
let size = { width: "90%", height: 12, borderTopLeftRadius: nativeDefault.radii.lg, borderTopRightRadius: nativeDefault.radii.lg, backgroundColor: nativeDefault.colors.BACKGROUND_BASE_LOWEST };
obj2.cardBackground = size;
obj2.header = { paddingVertical: 12, paddingHorizontal: 16, display: "flex", alignItems: "center", flexDirection: "row", borderBottomColor: nativeDefault.colors.BORDER_SUBTLE, borderBottomWidth: 1 };
obj2.content = { height: 150, paddingVertical: 8, paddingHorizontal: 16, display: "flex", justifyContent: "flex-end", overflow: "hidden" };
obj2.message = { display: "flex", paddingVertical: 8, flexDirection: "row" };
obj2.messageAvatar = { width: 40, height: 40, marginRight: 12 };
obj2.messageContent = { display: "flex", flex: 1 };
obj2.starMedium = { height: 25, width: 15 };
obj2.starSmall = { height: 15, width: 10 };
obj2.starGreen = { position: "absolute", top: 5, left: -28 };
obj2.starBlue = { position: "absolute", top: -15, left: -10 };
obj2.starPink = { position: "absolute", bottom: -18, right: -22 };
obj2.starPurple = { position: "absolute", bottom: -30, right: -2 };
let closure_9 = createStyles.createStyles(obj2);
const __initData = { code: "function NUFChannelIllustrationTsx1(){const{interpolate,messageListAnimation}=this.__closure;return{transform:[{translateY:interpolate(messageListAnimation.get(),[0,1],[50,0])}]};}" };
const __initData2 = { code: "function NUFChannelIllustrationTsx2(){const{interpolate,messageListAnimation}=this.__closure;return{transform:[{translateY:interpolate(messageListAnimation.get(),[0,1],[50,0])}]};}" };
const ReactCompilerGating = fn(558);
let obj3 = { paddingVertical: 12, paddingHorizontal: 16, display: "flex", alignItems: "center", flexDirection: "row", borderBottomColor: nativeDefault.colors.BORDER_SUBTLE, borderBottomWidth: 1 };
size = fn(2);
let result = size.fileFinishedImporting("modules/nuf_channels/native/components/NUFChannelIllustration.tsx");

export default ReactCompilerGating.isReactCompilerEnabled() ? (() => {
  const cResult = require("c").c(59);
  const tmp4 = closure_9();
  _require = tmp4;
  if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
    let items = [];
    cResult[0] = items;
    let first = items;
  } else {
    first = cResult[0];
  }
  const tmp6 = sharedValue(sharedValue1.useState(first), 2);
  messageContent = tmp6[0];
  dependencyMap = tmp6[1];
  let obj = require("c");
  sharedValue = require("ReanimatedRexport").useSharedValue(0);
  const tmpResult = require("ReanimatedRexport");
  sharedValue1 = require("ReanimatedRexport").useSharedValue(0);
  if (cResult[1] === Symbol.for("react.memo_cache_sentinel")) {
    const fn = function p() {
      const timeout = setTimeout(() => closure_1_2((arg0) => {
        const items = [...arg0];
        const intl = closure_1_0(1126).intl;
        const obj = { name: null, avatar: null, message: null };
        const intl2 = closure_1_0(1126).intl;
        obj.name = intl2.string(closure_1_0(1126).t["9m/HsX"]);
        obj.avatar = closure_1_1(13581);
        obj.message = intl.string(closure_1_0(1126).t["5alrl0"]);
        items[tmp] = obj;
        return items;
      }), 500);
      const timeout2 = setTimeout(() => closure_1_2((arg0) => {
        const items = [...arg0];
        const intl = closure_1_0(1126).intl;
        const obj = { name: null, avatar: null, message: null };
        const intl2 = closure_1_0(1126).intl;
        obj.name = intl2.string(closure_1_0(1126).t["AW1kM+"]);
        obj.avatar = closure_1_1(13582);
        obj.message = intl.string(closure_1_0(1126).t["5Oo+vS"]);
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
    let tmp10 = items1;
    let tmp9 = fn;
  } else {
    tmp9 = cResult[1];
    tmp10 = cResult[2];
  }
  const effect = obj2.useEffect(tmp9, tmp10);
  if (cResult[3] === messageContent.length) {
    if (cResult[4] === sharedValue1) {
      let tmp12 = cResult[5];
    }
    if (cResult[6] === messageContent) {
      if (cResult[7] === sharedValue1) {
        let tmp13 = cResult[8];
      }
      const effect1 = obj2.useEffect(tmp12, tmp13);
      if (cResult[9] !== sharedValue) {
        const fn2 = function x() {
          const result = sharedValue.set(0);
          const result1 = sharedValue.set(timing.withTiming(1, { duration: 200 }));
        };
        cResult[9] = sharedValue;
        cResult[10] = fn2;
        let tmp15 = fn2;
      } else {
        tmp15 = cResult[10];
      }
      if (cResult[11] === sharedValue) {
        if (cResult[12] === messageContent) {
          let tmp16 = cResult[13];
        }
        const effect2 = obj2.useEffect(tmp15, tmp16);
        class M {
          constructor() {
            obj = { transform: null };
            obj1 = { translateY: null };
            obj3 = closure_0(closure_2[11]);
            obj1.translateY = obj3.interpolate(closure_3.get(), [0, 1], [50, 0]);
            items = [];
            items[0] = obj1;
            obj.transform = items;
            return obj;
          }
        }
        let obj3 = { interpolate: tmp(4612).interpolate, messageListAnimation: sharedValue };
        M.__closure = obj3;
        M.__workletHash = 1240710065054;
        M.__initData = __initData;
        const animatedStyle = tmp(4612).useAnimatedStyle(M);
        if (cResult[14] === tmp4.starBlue) {
          if (cResult[15] === tmp4.starSmall) {
            let tmp21 = cResult[16];
          }
          if (cResult[17] === tmp4.starMedium) {
            if (cResult[18] === tmp4.starPink) {
              let tmp26 = cResult[19];
            }
            if (cResult[20] === tmp4.starGreen) {
              if (cResult[21] === tmp4.starMedium) {
                let tmp30 = cResult[22];
              }
              if (cResult[23] === tmp4.starPurple) {
                if (cResult[24] === tmp4.starSmall) {
                  let tmp34 = cResult[25];
                }
                if (cResult[26] !== tmp4.cardBackground) {
                  class M {
                    constructor() {
                      obj = { transform: null };
                      obj1 = { translateY: null };
                      obj3 = closure_0(closure_2[11]);
                      obj1.translateY = obj3.interpolate(closure_3.get(), [0, 1], [50, 0]);
                      items = [];
                      items[0] = obj1;
                      obj.transform = items;
                      return obj;
                    }
                  }
                  const tmp41 = closure_7(closure_5, { style: null });
                  cResult[26] = tmp4.cardBackground;
                  cResult[27] = tmp41;
                  let tmp38 = tmp41;
                  const obj4 = { style: null };
                } else {
                  tmp38 = cResult[27];
                }
                const _Symbol = Symbol;
                class M {
                  constructor() {
                    obj = { transform: null };
                    obj1 = { translateY: null };
                    obj3 = closure_0(closure_2[11]);
                    obj1.translateY = obj3.interpolate(closure_3.get(), [0, 1], [50, 0]);
                    items = [];
                    items[0] = obj1;
                    obj.transform = items;
                    return obj;
                  }
                }
                if (cResult[28] === Symbol.for("react.memo_cache_sentinel")) {
                  class M {
                    constructor() {
                      obj = { transform: null };
                      obj1 = { translateY: null };
                      obj3 = closure_0(closure_2[11]);
                      obj1.translateY = obj3.interpolate(closure_3.get(), [0, 1], [50, 0]);
                      items = [];
                      items[0] = obj1;
                      obj.transform = items;
                      return obj;
                    }
                  }
                  let tmp43 = closure_7(tmp(5864).TextIcon, { size: "sm" });
                  const tmp45 = closure_7(tmp(5864).TextIcon, { size: "sm" });
                } else {
                  tmp43 = cResult[28];
                }
                const _Symbol2 = Symbol;
                if (cResult[29] === Symbol.for("react.memo_cache_sentinel")) {
                  const obj5 = { variant: "text-md/bold", allowFontScaling: false, children: null };
                  class M {
                    constructor() {
                      obj = { transform: null };
                      obj1 = { translateY: null };
                      obj3 = closure_0(closure_2[11]);
                      obj1.translateY = obj3.interpolate(closure_3.get(), [0, 1], [50, 0]);
                      items = [];
                      items[0] = obj1;
                      obj.transform = items;
                      return obj;
                    }
                  }
                  const items2 = [" ", obj13.string(tmp(1126).t.aLOLry)];
                  obj5.children = items2;
                  const tmp48 = closure_8(tmp(4886).Text, obj5);
                  cResult[29] = tmp48;
                  let tmp46 = tmp48;
                } else {
                  tmp46 = cResult[29];
                }
                if (cResult[30] !== tmp4.header) {
                  const obj6 = { style: null, children: null };
                  class M {
                    constructor() {
                      obj = { transform: null };
                      obj1 = { translateY: null };
                      obj3 = closure_0(closure_2[11]);
                      obj1.translateY = obj3.interpolate(closure_3.get(), [0, 1], [50, 0]);
                      items = [];
                      items[0] = obj1;
                      obj.transform = items;
                      return obj;
                    }
                  }
                  const items3 = [tmp43, tmp46];
                  obj6.children = items3;
                  const tmp52 = closure_8(closure_5, obj6);
                  cResult[30] = tmp4.header;
                  cResult[31] = tmp52;
                  let tmp49 = tmp52;
                } else {
                  tmp49 = cResult[31];
                }
                if (cResult[32] === messageContent) {
                  if (cResult[33] === tmp4.message) {
                    if (cResult[34] === tmp4.messageAvatar) {
                      if (cResult[35] === tmp4.messageContent) {
                        if (cResult[41] === animatedStyle) {
                          if (cResult[42] === tmp54) {
                            let tmp58 = cResult[43];
                          }
                          if (cResult[44] === tmp4.content) {
                            if (cResult[45] === tmp58) {
                              let tmp61 = cResult[46];
                            }
                            if (cResult[47] === tmp4.card) {
                              if (cResult[48] === tmp49) {
                                if (cResult[49] === tmp61) {
                                  let tmp64 = cResult[50];
                                }
                                if (cResult[51] === tmp4.container) {
                                  if (cResult[52] === tmp30) {
                                    if (cResult[53] === tmp34) {
                                      if (cResult[54] === tmp38) {
                                        if (cResult[55] === tmp64) {
                                          if (cResult[56] === tmp21) {
                                            if (cResult[57] === tmp26) {
                                              let tmp68 = cResult[58];
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
                                    obj = { transform: null };
                                    obj1 = { translateY: null };
                                    obj3 = closure_0(closure_2[11]);
                                    obj1.translateY = obj3.interpolate(closure_3.get(), [0, 1], [50, 0]);
                                    items = [];
                                    items[0] = obj1;
                                    obj.transform = items;
                                    return obj;
                                  }
                                }
                                const obj7 = { style: tmp20, children: null };
                                const items4 = [tmp21, tmp26, tmp30, tmp34, tmp38, tmp64];
                                obj7.children = items4;
                                const tmp70 = closure_8(closure_5, obj7);
                                cResult[51] = tmp4.container;
                                cResult[52] = tmp30;
                                cResult[53] = tmp34;
                                cResult[54] = tmp38;
                                cResult[55] = tmp64;
                                cResult[56] = tmp21;
                                cResult[57] = tmp26;
                                cResult[58] = tmp70;
                                tmp68 = tmp70;
                              }
                            }
                            class M {
                              constructor() {
                                obj = { transform: null };
                                obj1 = { translateY: null };
                                obj3 = closure_0(closure_2[11]);
                                obj1.translateY = obj3.interpolate(closure_3.get(), [0, 1], [50, 0]);
                                items = [];
                                items[0] = obj1;
                                obj.transform = items;
                                return obj;
                              }
                            }
                            tmp66[0] = tmp42;
                            const items5 = [tmp49, tmp61];
                            tmp66[3] = items5;
                            const tmp67 = closure_8(tmp(5995).Card, tmp66);
                            cResult[47] = tmp4.card;
                            cResult[48] = tmp49;
                            cResult[49] = tmp61;
                            cResult[50] = tmp67;
                            tmp64 = tmp67;
                          }
                          class M {
                            constructor() {
                              obj = { transform: null };
                              obj1 = { translateY: null };
                              obj3 = closure_0(closure_2[11]);
                              obj1.translateY = obj3.interpolate(closure_3.get(), [0, 1], [50, 0]);
                              items = [];
                              items[0] = obj1;
                              obj.transform = items;
                              return obj;
                            }
                          }
                          const obj8 = { style: tmp53, children: tmp58 };
                          const tmp63 = closure_7(closure_5, obj8);
                          cResult[44] = tmp4.content;
                          cResult[45] = tmp58;
                          cResult[46] = tmp63;
                          tmp61 = tmp63;
                        }
                        class M {
                          constructor() {
                            obj = { transform: null };
                            obj1 = { translateY: null };
                            obj3 = closure_0(closure_2[11]);
                            obj1.translateY = obj3.interpolate(closure_3.get(), [0, 1], [50, 0]);
                            items = [];
                            items[0] = obj1;
                            obj.transform = items;
                            return obj;
                          }
                        }
                        const obj9 = { style: animatedStyle, children: cResult[36] };
                        const tmp60 = closure_7(messageContent(4612).View, obj9);
                        cResult[41] = animatedStyle;
                        cResult[42] = cResult[36];
                        cResult[43] = tmp60;
                        tmp58 = tmp60;
                      }
                    }
                  }
                }
                if (cResult[37] === tmp4.message) {
                  if (cResult[38] === tmp4.messageAvatar) {
                    if (cResult[39] === tmp4.messageContent) {
                      let tmp55 = cResult[40];
                    }
                    const mapped = messageContent.map(tmp55);
                    class M {
                      constructor() {
                        obj = { transform: null };
                        obj1 = { translateY: null };
                        obj3 = closure_0(closure_2[11]);
                        obj1.translateY = obj3.interpolate(closure_3.get(), [0, 1], [50, 0]);
                        items = [];
                        items[0] = obj1;
                        obj.transform = items;
                        return obj;
                      }
                    }
                    cResult[33] = tmp4.message;
                    ({ messageAvatar: tmp3[34], messageContent } = tmp4);
                    cResult[35] = messageContent;
                    cResult[36] = mapped;
                  }
                }
                const fn3 = function j(children) {
                  const obj = { style: closure_0.message, children: null };
                  const items = [React5(timestampProducer, { source: children.avatar, style: closure_0.messageAvatar }), ];
                  const obj3 = { style: closure_0.messageContent, children: null };
                  const items1 = [React5(Text_Text.Text, { variant: "text-md/semibold", allowFontScaling: false, children: children.name }), React5(Text_Text.Text, { variant: "text-md/medium", allowFontScaling: false, children: children.message })];
                  obj3.children = items1;
                  items[1] = closure_2_8(hasOwnProperty, obj3);
                  obj.children = items;
                  return closure_2_8(hasOwnProperty, obj, children.message);
                };
                cResult[37] = tmp4.message;
                cResult[38] = tmp4.messageAvatar;
                cResult[39] = tmp4.messageContent;
                cResult[40] = fn3;
                tmp55 = fn3;
              }
              class M {
                constructor() {
                  obj = { transform: null };
                  obj1 = { translateY: null };
                  obj3 = closure_0(closure_2[11]);
                  obj1.translateY = obj3.interpolate(closure_3.get(), [0, 1], [50, 0]);
                  items = [];
                  items[0] = obj1;
                  obj.transform = items;
                  return obj;
                }
              }
              const obj10 = { source: messageContent(13586), style: null };
              const items6 = [, ];
              ({ starSmall: arr8[0], starPurple: arr8[1] } = tmp4);
              obj10.style = items6;
              const tmp37 = closure_7(closure_6, obj10);
              cResult[23] = tmp4.starPurple;
              cResult[24] = tmp4.starSmall;
              cResult[25] = tmp37;
              tmp34 = tmp37;
            }
            class M {
              constructor() {
                obj = { transform: null };
                obj1 = { translateY: null };
                obj3 = closure_0(closure_2[11]);
                obj1.translateY = obj3.interpolate(closure_3.get(), [0, 1], [50, 0]);
                items = [];
                items[0] = obj1;
                obj.transform = items;
                return obj;
              }
            }
            const obj11 = { source: messageContent(13585), style: null };
            const items7 = [, ];
            ({ starMedium: arr7[0], starGreen: arr7[1] } = tmp4);
            obj11.style = items7;
            const tmp33 = closure_7(closure_6, obj11);
            cResult[20] = tmp4.starGreen;
            cResult[21] = tmp4.starMedium;
            cResult[22] = tmp33;
            tmp30 = tmp33;
          }
          class M {
            constructor() {
              obj = { transform: null };
              obj1 = { translateY: null };
              obj3 = closure_0(closure_2[11]);
              obj1.translateY = obj3.interpolate(closure_3.get(), [0, 1], [50, 0]);
              items = [];
              items[0] = obj1;
              obj.transform = items;
              return obj;
            }
          }
          const obj12 = { source: messageContent(13584), style: null };
          const items8 = [, ];
          ({ starMedium: arr6[0], starPink: arr6[1] } = tmp4);
          obj12.style = items8;
          const tmp29 = closure_7(closure_6, obj12);
          cResult[17] = tmp4.starMedium;
          cResult[18] = tmp4.starPink;
          cResult[19] = tmp29;
          tmp26 = tmp29;
        }
        const obj14 = { source: messageContent(13583), style: null };
        const items9 = [, ];
        ({ starSmall: arr5[0], starBlue: arr5[1] } = tmp4);
        obj14.style = items9;
        const tmp25 = closure_7(closure_6, obj14);
        cResult[14] = tmp4.starBlue;
        cResult[15] = tmp4.starSmall;
        cResult[16] = tmp25;
        tmp21 = tmp25;
        const tmpResult4 = tmp(4612);
      }
      const items10 = [sharedValue, messageContent];
      cResult[11] = sharedValue;
      cResult[12] = messageContent;
      cResult[13] = items10;
      tmp16 = items10;
    }
    const items11 = [, messageContent];
    cResult[6] = messageContent;
    cResult[7] = sharedValue1;
    cResult[8] = items11;
    tmp13 = items11;
  }
  class S {
    constructor() {
      if (closure_1.length >= 2) {
        tmp = closure_4;
        tmp2 = closure_0;
        tmp3 = closure_2;
        obj = closure_0(closure_2[12]);
        num = 1;
        result = closure_4.set(obj.withTiming(1, { duration: 250 }));
      }
      return;
    }
  }
  cResult[3] = messageContent.length;
  cResult[4] = sharedValue1;
  cResult[5] = S;
  tmp12 = S;
  const tmpResult3 = require("ReanimatedRexport");
}) : (() => {
  const tmp = closure_9();
  _require = tmp;
  const tmp2 = sharedValue(sharedValue1.useState([]), 2);
  const first = tmp2[0];
  dependencyMap = tmp2[1];
  sharedValue = require("ReanimatedRexport").useSharedValue(0);
  let obj = require("ReanimatedRexport");
  sharedValue1 = require("ReanimatedRexport").useSharedValue(0);
  const effect = sharedValue1.useEffect(() => {
    const timeout = setTimeout(() => closure_1_2((arg0) => {
      const items = [...arg0];
      const intl = closure_1_0(1126).intl;
      const obj = { name: null, avatar: null, message: null };
      const intl2 = closure_1_0(1126).intl;
      obj.name = intl2.string(closure_1_0(1126).t["9m/HsX"]);
      obj.avatar = closure_1_1(13581);
      obj.message = intl.string(closure_1_0(1126).t["5alrl0"]);
      items[tmp] = obj;
      return items;
    }), 500);
    const timeout2 = setTimeout(() => closure_1_2((arg0) => {
      const items = [...arg0];
      const intl = closure_1_0(1126).intl;
      const obj = { name: null, avatar: null, message: null };
      const intl2 = closure_1_0(1126).intl;
      obj.name = intl2.string(closure_1_0(1126).t["AW1kM+"]);
      obj.avatar = closure_1_1(13582);
      obj.message = intl.string(closure_1_0(1126).t["5Oo+vS"]);
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
      const result = sharedValue1.set(timing.withTiming(1, { duration: 250 }));
    }
  }, items);
  let items1 = [sharedValue, first];
  const effect2 = sharedValue1.useEffect(() => {
    const result = sharedValue.set(0);
    const result1 = sharedValue.set(timing.withTiming(1, { duration: 200 }));
  }, items1);
  let obj2 = require("ReanimatedRexport");
  const fn = function x() {
    const obj = { transform: null };
    const obj2 = { translateY: ReanimatedRexport.interpolate(sharedValue.get(), [0, 1], [50, 0]) };
    const items = [obj2];
    obj.transform = items;
    return obj;
  };
  let obj3 = require("ReanimatedRexport");
  fn.__closure = { interpolate: require("ReanimatedRexport").interpolate, messageListAnimation: sharedValue };
  fn.__workletHash = 14664640545757;
  fn.__initData = __initData2;
  const obj5 = { style: tmp.container, children: null };
  const obj6 = { source: null, style: null };
  const animatedStyle = obj3.useAnimatedStyle(fn);
  obj6.source = first(13583);
  const items2 = [, ];
  ({ starSmall: arr4[0], starBlue: arr4[1] } = tmp);
  obj6.style = items2;
  const items3 = [closure_7(closure_6, obj6), , , , , ];
  const obj7 = { source: first(13584), style: null };
  const items4 = [, ];
  ({ starMedium: arr6[0], starPink: arr6[1] } = tmp);
  obj7.style = items4;
  items3[1] = closure_7(closure_6, obj7);
  const obj8 = { source: first(13585), style: null };
  const items5 = [, ];
  ({ starMedium: arr7[0], starGreen: arr7[1] } = tmp);
  obj8.style = items5;
  items3[2] = closure_7(closure_6, obj8);
  const obj9 = { source: first(13586), style: null };
  const items6 = [, ];
  ({ starSmall: arr8[0], starPurple: arr8[1] } = tmp);
  obj9.style = items6;
  items3[3] = closure_7(closure_6, obj9);
  items3[4] = closure_7(closure_5, { style: tmp.cardBackground });
  const obj11 = { style: tmp.card, shadow: "low", border: "subtle", children: null };
  const obj12 = { style: tmp.header, children: null };
  const items7 = [closure_7(require("TextIcon").TextIcon, { size: "sm" }), ];
  const obj13 = { variant: "text-md/bold", allowFontScaling: false, children: null };
  let intl = require("util").intl;
  const items8 = [" ", intl.string(require("util").t.aLOLry)];
  obj13.children = items8;
  items7[1] = closure_8(require("Text/Text").Text, obj13);
  obj12.children = items7;
  const items9 = [closure_8(closure_5, obj12), ];
  const obj14 = { style: tmp.content, children: null };
  const obj10 = { style: tmp.cardBackground };
  const obj4 = { interpolate: require("ReanimatedRexport").interpolate, messageListAnimation: sharedValue };
  obj14.children = closure_7(first(4612).View, {
    style: animatedStyle,
    children: first.map((children) => {
      const obj = { style: closure_0.message, children: null };
      const items = [React5(timestampProducer, { source: children.avatar, style: closure_0.messageAvatar }), ];
      const obj3 = { style: closure_0.messageContent, children: null };
      const items1 = [React5(Text_Text.Text, { variant: "text-md/semibold", allowFontScaling: false, children: children.name }), React5(Text_Text.Text, { variant: "text-md/medium", allowFontScaling: false, children: children.message })];
      obj3.children = items1;
      items[1] = closure_2_8(hasOwnProperty, obj3);
      obj.children = items;
      return closure_2_8(hasOwnProperty, obj, children.message);
    })
  });
  items9[1] = closure_7(closure_5, obj14);
  obj11.children = items9;
  items3[5] = closure_8(require("Card").Card, obj11);
  obj5.children = items3;
  return closure_8(closure_5, obj5);
});