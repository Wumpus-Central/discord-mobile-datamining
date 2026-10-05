// === Module 5969: MemberVerificationGuildHeader ===

// Module 5969 (MemberVerificationGuildHeader)
import react_native from "react-native" /* 17 */;
import nativeDefault from "native" /* 587 */;
import ReanimatedRexport from "ReanimatedRexport" /* 4612 */;
import react from "react" /* 19 */;
import MemberVerificationFormConstants from "MemberVerificationFormConstants" /* 5964 */;
import Fragment from "Fragment" /* 21 */;
import createStyles_mod from "createStyles" /* 4890 */;
import ReactCompilerGating from "ReactCompilerGating" /* 558 */;
import size_mod from "module_2" /* 2 */;

const require = globalThis.__r;
let hasManualFormFields, importDefault;

let AVATAR_BORDER_WIDTH;
let AVATAR_SIZE;
let metroImportDefault;
let metroRequire;
let size;
let size1;
let View = react_native.View;
({ AVATAR_BORDER_WIDTH, AVATAR_SIZE } = MemberVerificationFormConstants);
const useBannerHeight = MemberVerificationFormConstants.useBannerHeight;
({ jsx: metroRequire, jsxs: metroImportDefault } = Fragment);
let c8 = 1.20225424859375;
let createStyles = createStyles_mod;
let obj = { header: { flex: 1, flexDirection: "column", justifyContent: "flex-end", alignItems: "center", marginBottom: 12 }, headerContent: { alignItems: "center", marginTop: -48, paddingTop: 20, paddingBottom: 0, paddingHorizontal: 16 }, linearGradient: { position: "absolute", height: 140, top: 0, right: 0, left: 0 }, avatar: size, avatarContainer: size1, featureIcon: { position: "absolute", top: 56, right: -8 }, headerTitle: { textAlign: "center", marginBottom: 8 }, headerDescription: { lineHeight: 18, textAlign: "center" } };
size = { borderRadius: nativeDefault.radii.lg, borderWidth: 0, borderColor: nativeDefault.colors.BACKGROUND_BASE_LOWER, height: AVATAR_SIZE, width: AVATAR_SIZE, margin: 0, backgroundColor: nativeDefault.colors.BACKGROUND_SCRIM };
createStyles = createStyles.createStyles;
size1 = { borderRadius: 20, borderWidth: AVATAR_BORDER_WIDTH, borderColor: nativeDefault.colors.BACKGROUND_BASE_LOWER, height: AVATAR_SIZE + 2 * AVATAR_BORDER_WIDTH, width: AVATAR_SIZE + 2 * AVATAR_BORDER_WIDTH, marginBottom: 16, marginTop: -16, marginLeft: -4, backgroundColor: nativeDefault.colors.BACKGROUND_BASE_LOWER };
let closure_9 = createStyles(obj);
const __initData = { code: "function MemberVerificationGuildHeaderTsx1(){const{scrollTop}=this.__closure;return scrollTop.get()*-1;}" };
const __initData2 = { code: "function MemberVerificationGuildHeaderTsx2(){const{height,interpolate,scrollTop,safeAreaTop,scrollTopNegative}=this.__closure;return{width:\"100%\",height:height,opacity:interpolate(scrollTop.get(),[0,height-safeAreaTop],[1,0],\"clamp\"),transform:[{translateY:interpolate(scrollTopNegative.get(),[0,height],[0,-height],\"clamp\")},{scale:interpolate(scrollTopNegative.get(),[0,height],[1,1.08],\"clamp\")}]};}" };
const __initData3 = { code: "function MemberVerificationGuildHeaderTsx3(){const{interpolate,scrollTopNegative,height,ANIMATION_GOLDEN_RATIO,AVATAR_SIZE}=this.__closure;return{transform:[{translateY:interpolate(scrollTopNegative.get(),[0,height],[0,-(height/ANIMATION_GOLDEN_RATIO)],\"clamp\")},{scale:interpolate(scrollTopNegative.get(),[0,AVATAR_SIZE],[1,ANIMATION_GOLDEN_RATIO],\"clamp\")}]};}" };
const __initData4 = { code: "function MemberVerificationGuildHeaderTsx4(){const{scrollTop}=this.__closure;return scrollTop.get()*-1;}" };
const __initData5 = { code: "function MemberVerificationGuildHeaderTsx5(){const{height,interpolate,scrollTop,safeAreaTop,scrollTopNegative}=this.__closure;return{width:'100%',height:height,opacity:interpolate(scrollTop.get(),[0,height-safeAreaTop],[1,0],'clamp'),transform:[{translateY:interpolate(scrollTopNegative.get(),[0,height],[0,-height],'clamp')},{scale:interpolate(scrollTopNegative.get(),[0,height],[1,1.08],'clamp')}]};}" };
const __initData6 = { code: "function MemberVerificationGuildHeaderTsx6(){const{interpolate,scrollTopNegative,height,ANIMATION_GOLDEN_RATIO,AVATAR_SIZE}=this.__closure;return{transform:[{translateY:interpolate(scrollTopNegative.get(),[0,height],[0,-(height/ANIMATION_GOLDEN_RATIO)],'clamp')},{scale:interpolate(scrollTopNegative.get(),[0,AVATAR_SIZE],[1,ANIMATION_GOLDEN_RATIO],'clamp')}]};}" };
const tmp6 = ReactCompilerGating.isReactCompilerEnabled() ? ((hasManualFormFields) => {
  let guild;
  let guildBannerSource;
  let height;
  let items1;
  let items2;
  let items3;
  let items5;
  let scrollTop;
  let tmp12;
  let tmp5;
  let top;
  let obj = scrollTop(top[9]);
  const cResult = obj.c(47);
  ({ guild, scrollTop } = hasManualFormFields);
  hasManualFormFields = hasManualFormFields.hasManualFormFields;
  const tmp4 = closure_9();
  if (null != guild.banner) {
    let obj2 = require("AvatarUtils");
    guildBannerSource = obj2.getGuildBannerSource(guild);
    tmp5 = importDefault;
  } else {
    tmp5 = importDefault;
    guildBannerSource = require("AssetRegistry");
  }
  const tmp8 = useBannerHeight();
  importDefault = tmp8;
  top = tmp5(tmp2[10])().top;
  const fn = function o() {
    return -1 * scrollTop.get();
  };
  fn.__closure = { scrollTop };
  fn.__workletHash = 6997429707371;
  fn.__initData = __initData;
  const tmpResult = scrollTop(top[11]);
  const derivedValue = tmpResult.useDerivedValue(fn);
  const fn2 = function c() {
    let items;
    let items1;
    let items2;
    let items3;
    let items4;
    let obj2;
    let obj4;
    let obj6;
    size = { width: "100%", height, opacity: obj2.interpolate(scrollTop.get(), items, [1, 0], "clamp"), transform: items3 };
    items = [0, height - top];
    obj2 = ReanimatedRexport;
    const obj = { translateY: obj4.interpolate(derivedValue.get(), items1, items2, "clamp") };
    items1 = [0, height];
    items2 = [0, -height];
    items3 = [obj, ];
    obj4 = ReanimatedRexport;
    const obj3 = { scale: obj6.interpolate(derivedValue.get(), items4, [1, 1.08], "clamp") };
    items4 = [0, height];
    items3[1] = obj3;
    obj6 = ReanimatedRexport;
    return size;
  };
  const tmpResult3 = scrollTop(top[11]);
  let obj3 = { height: tmp8, interpolate: scrollTop(tmp2[11]).interpolate, scrollTop, safeAreaTop: top, scrollTopNegative: derivedValue };
  fn2.__closure = obj3;
  fn2.__workletHash = 5221051003229;
  fn2.__initData = __initData2;
  const animatedStyle = tmpResult3.useAnimatedStyle(fn2);
  const tmpResult4 = scrollTop(top[11]);
  class N {
    constructor() {
      let items;
      let items1;
      let items2;
      let items3;
      let items4;
      let obj3;
      let obj5;
      const obj = { transform: items2 };
      const obj2 = { translateY: obj3.interpolate(derivedValue.get(), items, items1, "clamp") };
      items = [0, height];
      items1 = [0, -height / c8];
      items2 = [obj2, ];
      obj3 = ReanimatedRexport;
      const obj4 = { scale: obj5.interpolate(derivedValue.get(), items3, items4, "clamp") };
      items3 = [0, AVATAR_SIZE];
      items4 = [1, c8];
      items2[1] = obj4;
      obj5 = ReanimatedRexport;
      return obj;
    }
  }
  let obj4 = { interpolate: scrollTop(tmp2[11]).interpolate, scrollTopNegative: derivedValue, height: tmp8, ANIMATION_GOLDEN_RATIO, AVATAR_SIZE };
  N.__closure = obj4;
  N.__workletHash = 10331364193080;
  N.__initData = __initData3;
  const animatedStyle1 = tmpResult4.useAnimatedStyle(N);
  if (cResult[0] !== tmp8) {
    size = { width: "100%", height: tmp8 };
    cResult[0] = tmp8;
    cResult[1] = size;
    tmp12 = size;
  } else {
    tmp12 = cResult[1];
  }
  if (cResult[2] === guildBannerSource) {
    let tmp13;
    let tmp17;
    let tmp16;
    let tmp18;
    let tmp19;
    if (cResult[3] === tmp12) {
      tmp13 = cResult[4];
    }
    const _Symbol = Symbol;
    if (cResult[5] === Symbol.for("react.memo_cache_sentinel")) {
      const point = { x: 0, y: 0 };
      const point1 = { x: 0, y: 1 };
      cResult[5] = point;
      cResult[6] = point1;
      tmp17 = point1;
      tmp16 = point;
    } else {
      tmp16 = cResult[5];
      tmp17 = cResult[6];
    }
    const _Symbol2 = Symbol;
    if (cResult[7] === Symbol.for("react.memo_cache_sentinel")) {
      let items = ["rgba(0,0,0,0.7)", "transparent"];
      cResult[7] = items;
      tmp18 = items;
    } else {
      tmp18 = cResult[7];
    }
    if (cResult[8] !== tmp4.linearGradient) {
      let obj5 = { start: tmp16, end: tmp17, style: tmp4.linearGradient, colors: tmp18 };
      const tmp21 = closure_6(tmp5(top[12]), obj5);
      cResult[8] = tmp4.linearGradient;
      cResult[9] = tmp21;
      tmp19 = tmp21;
    } else {
      tmp19 = cResult[9];
    }
    if (cResult[10] === animatedStyle) {
      if (cResult[11] === tmp13) {
        let tmp22;
        if (cResult[12] === tmp19) {
          tmp22 = cResult[13];
        }
        if (cResult[14] === animatedStyle1) {
          let tmp25;
          if (cResult[15] === tmp4.avatarContainer) {
            tmp25 = cResult[16];
          }
          if (cResult[17] === guild) {
            let tmp26;
            if (cResult[18] === tmp4.avatar) {
              tmp26 = cResult[19];
            }
            if (cResult[20] === guild) {
              let tmp30;
              if (cResult[21] === tmp4.featureIcon) {
                tmp30 = cResult[22];
              }
              if (cResult[23] === tmp30) {
                if (cResult[24] === tmp25) {
                  let tmp33;
                  let formatResult;
                  if (cResult[25] === tmp26) {
                    tmp33 = cResult[26];
                  }
                  if (cResult[27] === guild.name) {
                    let tmp36;
                    if (cResult[28] === hasManualFormFields) {
                      tmp36 = cResult[29];
                    }
                    if (cResult[30] === tmp4.headerTitle) {
                      let tmp38;
                      let tmp41;
                      if (cResult[31] === tmp36) {
                        tmp38 = cResult[32];
                      }
                      if (cResult[33] !== hasManualFormFields) {
                        let stringResult;
                        const intl2 = scrollTop(tmp2[15]).intl;
                        const string = intl2.string;
                        const t2 = scrollTop(tmp2[15]).t;
                        if (hasManualFormFields) {
                          stringResult = string(t2["3smSPP"]);
                        } else {
                          stringResult = string(t2["7D3C5p"]);
                        }
                        cResult[33] = hasManualFormFields;
                        cResult[34] = stringResult;
                        tmp41 = stringResult;
                      } else {
                        tmp41 = cResult[34];
                      }
                      if (cResult[35] === tmp4.headerDescription) {
                        let tmp43;
                        if (cResult[36] === tmp41) {
                          tmp43 = cResult[37];
                        }
                        if (cResult[38] === tmp4.headerContent) {
                          if (cResult[39] === tmp33) {
                            if (cResult[40] === tmp38) {
                              let tmp46;
                              if (cResult[41] === tmp43) {
                                tmp46 = cResult[42];
                              }
                              if (cResult[43] === tmp4.header) {
                                if (cResult[44] === tmp46) {
                                  let tmp50;
                                  if (cResult[45] === tmp22) {
                                    tmp50 = cResult[46];
                                  }
                                  return tmp50;
                                }
                              }
                              let obj6 = { style: tmp4.header, children: items1 };
                              items1 = [tmp22, tmp46];
                              const tmp53 = closure_7(derivedValue, obj6);
                              cResult[43] = tmp4.header;
                              cResult[44] = tmp46;
                              cResult[45] = tmp22;
                              cResult[46] = tmp53;
                              tmp50 = tmp53;
                            }
                          }
                        }
                        const obj7 = { style: tmp4.headerContent, children: items2 };
                        items2 = [tmp33, tmp38, tmp43];
                        const tmp49 = closure_7(derivedValue, obj7);
                        cResult[38] = tmp4.headerContent;
                        cResult[39] = tmp33;
                        cResult[40] = tmp38;
                        cResult[41] = tmp43;
                        cResult[42] = tmp49;
                        tmp46 = tmp49;
                      }
                      const obj8 = { style: tmp4.headerDescription, variant: "text-sm/medium", color: "text-default", children: tmp41 };
                      const tmp45 = closure_6(scrollTop(top[16]).Text, obj8);
                      cResult[35] = tmp4.headerDescription;
                      cResult[36] = tmp41;
                      cResult[37] = tmp45;
                      tmp43 = tmp45;
                    }
                    const obj9 = { style: tmp4.headerTitle, variant: "heading-xl/extrabold", color: "mobile-text-heading-primary", children: tmp36 };
                    const tmp40 = closure_6(scrollTop(top[16]).Heading, obj9);
                    cResult[30] = tmp4.headerTitle;
                    cResult[31] = tmp36;
                    cResult[32] = tmp40;
                    tmp38 = tmp40;
                  }
                  const intl = scrollTop(tmp2[15]).intl;
                  const format = intl.format;
                  const t = scrollTop(tmp2[15]).t;
                  if (hasManualFormFields) {
                    const obj10 = { guildName: guild.name };
                    formatResult = format(t.cgX47Z, obj10);
                  } else {
                    const obj11 = { guildName: guild.name };
                    formatResult = format(t.VnxBOA, obj11);
                  }
                  cResult[27] = guild.name;
                  cResult[28] = hasManualFormFields;
                  cResult[29] = formatResult;
                  tmp36 = formatResult;
                }
              }
              const obj12 = { style: tmp25, children: items3 };
              items3 = [tmp26, tmp30];
              const tmp35 = closure_7(tmp5(top[11]).View, obj12);
              cResult[23] = tmp30;
              cResult[24] = tmp25;
              cResult[25] = tmp26;
              cResult[26] = tmp35;
              tmp33 = tmp35;
            }
            const obj13 = { style: tmp4.featureIcon, guild, disableColor: true };
            const tmp32 = closure_6(tmp5(top[14]), obj13);
            cResult[20] = guild;
            cResult[21] = tmp4.featureIcon;
            cResult[22] = tmp32;
            tmp30 = tmp32;
          }
          const obj14 = { style: tmp4.avatar, guild, size: scrollTop(top[13]).GuildIconSizes.XLARGE, animate: true };
          const tmp5Result = tmp5(top[13]);
          const tmp29 = closure_6(tmp5Result, obj14);
          cResult[17] = guild;
          cResult[18] = tmp4.avatar;
          cResult[19] = tmp29;
          tmp26 = tmp29;
        }
        let items4 = [tmp4.avatarContainer, animatedStyle1];
        cResult[14] = animatedStyle1;
        cResult[15] = tmp4.avatarContainer;
        cResult[16] = items4;
        tmp25 = items4;
      }
    }
    const obj15 = { style: animatedStyle, children: items5 };
    items5 = [tmp13, tmp19];
    const tmp24 = closure_7(tmp5(top[11]).View, obj15);
    cResult[10] = animatedStyle;
    cResult[11] = tmp13;
    cResult[12] = tmp19;
    cResult[13] = tmp24;
    tmp22 = tmp24;
  }
  const tmp14 = closure_6(tmp5(top[11]).Image, { style: tmp12, resizeMode: "cover", source: guildBannerSource });
  cResult[2] = guildBannerSource;
  cResult[3] = tmp12;
  cResult[4] = tmp14;
  tmp13 = tmp14;
}) : ((hasManualFormFields) => {
  let formatResult;
  let guild;
  let guildBannerSource;
  let height;
  let items;
  let items1;
  let items2;
  let items3;
  let items4;
  let scrollTop;
  let stringResult;
  let tmp3;
  let tmp5;
  ({ guild, scrollTop } = hasManualFormFields);
  hasManualFormFields = hasManualFormFields.hasManualFormFields;
  importDefault = undefined;
  let top;
  let derivedValue;
  const tmp = closure_9();
  if (null != guild.banner) {
    let obj = require("AvatarUtils");
    guildBannerSource = obj.getGuildBannerSource(guild);
    tmp3 = top;
    tmp5 = importDefault;
  } else {
    tmp3 = top;
    guildBannerSource = require("AssetRegistry");
    tmp5 = importDefault;
  }
  const tmp8 = useBannerHeight();
  importDefault = tmp8;
  top = tmp5(tmp3[10])().top;
  let obj2 = scrollTop(tmp3[11]);
  class T {
    constructor() {
      return -1 * scrollTop.get();
    }
  }
  T.__closure = { scrollTop };
  T.__workletHash = 7012036582414;
  T.__initData = __initData4;
  derivedValue = obj2.useDerivedValue(T);
  let obj3 = scrollTop(tmp3[11]);
  class A {
    constructor() {
      let items;
      let items1;
      let items2;
      let items3;
      let items4;
      let obj2;
      let obj4;
      let obj6;
      size = { width: "100%", height, opacity: obj2.interpolate(scrollTop.get(), items, [1, 0], "clamp"), transform: items3 };
      items = [0, height - top];
      obj2 = ReanimatedRexport;
      const obj = { translateY: obj4.interpolate(derivedValue.get(), items1, items2, "clamp") };
      items1 = [0, height];
      items2 = [0, -height];
      items3 = [obj, ];
      obj4 = ReanimatedRexport;
      const obj3 = { scale: obj6.interpolate(derivedValue.get(), items4, [1, 1.08], "clamp") };
      items4 = [0, height];
      items3[1] = obj3;
      obj6 = ReanimatedRexport;
      return size;
    }
  }
  let obj4 = { height: tmp8, interpolate: scrollTop(tmp3[11]).interpolate, scrollTop, safeAreaTop: top, scrollTopNegative: derivedValue };
  A.__closure = obj4;
  A.__workletHash = 12118572600090;
  A.__initData = __initData5;
  const animatedStyle = obj3.useAnimatedStyle(A);
  let obj5 = scrollTop(tmp3[11]);
  const fn = function f() {
    let items;
    let items1;
    let items2;
    let items3;
    let items4;
    let obj3;
    let obj5;
    const obj = { transform: items2 };
    const obj2 = { translateY: obj3.interpolate(derivedValue.get(), items, items1, "clamp") };
    items = [0, height];
    items1 = [0, -height / c8];
    items2 = [obj2, ];
    obj3 = ReanimatedRexport;
    const obj4 = { scale: obj5.interpolate(derivedValue.get(), items3, items4, "clamp") };
    items3 = [0, AVATAR_SIZE];
    items4 = [1, c8];
    items2[1] = obj4;
    obj5 = ReanimatedRexport;
    return obj;
  };
  let obj6 = { interpolate: scrollTop(tmp3[11]).interpolate, scrollTopNegative: derivedValue, height: tmp8, ANIMATION_GOLDEN_RATIO, AVATAR_SIZE };
  fn.__closure = obj6;
  fn.__workletHash = 2524545236253;
  fn.__initData = __initData6;
  const obj7 = { style: tmp.header, children: items1 };
  const animatedStyle1 = obj5.useAnimatedStyle(fn);
  const obj8 = { style: animatedStyle, children: items };
  View = tmp5(tmp3[11]).View;
  items = [, ];
  const obj9 = { style: { width: "100%", height: tmp8 }, resizeMode: "cover", source: guildBannerSource };
  items[0] = closure_6(tmp5(tmp3[11]).Image, obj9);
  const obj10 = { start: { x: 0, y: 0 }, end: { x: 0, y: 1 }, style: tmp.linearGradient, colors: ["rgba(0,0,0,0.7)", "transparent"] };
  items[1] = closure_6(tmp5(tmp3[12]), obj10);
  items1 = [closure_7(View, obj8), ];
  const obj12 = { style: items2, children: items3 };
  items2 = [tmp.avatarContainer, animatedStyle1];
  const obj11 = { style: tmp.headerContent, children: items4 };
  const View2 = tmp5(tmp3[11]).View;
  const obj13 = { style: tmp.avatar, guild, size: scrollTop(tmp3[13]).GuildIconSizes.XLARGE, animate: true };
  const tmp5Result = tmp5(tmp3[13]);
  items3 = [closure_6(tmp5Result, obj13), ];
  const obj14 = { style: tmp.featureIcon, guild, disableColor: true };
  items3[1] = closure_6(tmp5(tmp3[14]), obj14);
  items4 = [closure_7(View2, obj12), , ];
  const obj15 = { style: tmp.headerTitle, variant: "heading-xl/extrabold", color: "mobile-text-heading-primary", children: formatResult };
  const Heading = scrollTop(tmp3[16]).Heading;
  const intl = scrollTop(tmp3[15]).intl;
  const format = intl.format;
  const t = scrollTop(tmp3[15]).t;
  if (hasManualFormFields) {
    const obj16 = { guildName: guild.name };
    formatResult = format(t.cgX47Z, obj16);
  } else {
    const obj17 = { guildName: guild.name };
    formatResult = format(t.VnxBOA, obj17);
  }
  items4[1] = closure_6(Heading, obj15);
  const obj18 = { style: tmp.headerDescription, variant: "text-sm/medium", color: "text-default", children: stringResult };
  const Text = scrollTop(tmp3[16]).Text;
  const intl2 = scrollTop(tmp3[15]).intl;
  const string = intl2.string;
  const t2 = scrollTop(tmp3[15]).t;
  if (hasManualFormFields) {
    stringResult = string(t2["3smSPP"]);
  } else {
    stringResult = string(t2["7D3C5p"]);
  }
  items4[2] = closure_6(Text, obj18);
  items1[1] = closure_7(derivedValue, obj11);
  return closure_7(derivedValue, obj7);
});
size = size_mod;
const result = size.fileFinishedImporting("modules/guild_member_verification/native/components/MemberVerificationGuildHeader.tsx");

export default tmp6;