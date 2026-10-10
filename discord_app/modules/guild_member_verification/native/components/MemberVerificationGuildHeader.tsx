// === Module 6154: MemberVerificationGuildHeader ===

// Module 6154 (MemberVerificationGuildHeader)
import nativeDefault from "native" /* 587 */;
import ReanimatedRexport from "ReanimatedRexport" /* 4850 */;
import noop from "module_19" /* 19 */;

const require = globalThis.__r;

require = fn;
const View = fn(17).View;
const MemberVerificationFormConstants = fn(6149);
({ AVATAR_BORDER_WIDTH, AVATAR_SIZE } = MemberVerificationFormConstants);
const useBannerHeight = MemberVerificationFormConstants.useBannerHeight;
const jsxProd = fn(21);
({ jsx: metroRequire, jsxs: closure_7 } = jsxProd);
let c8 = 1.20225424859375;
const createStyles = fn(5092);
let obj2 = { header: { flex: 1, flexDirection: "column", justifyContent: "flex-end", alignItems: "center", marginBottom: 12 }, headerContent: { alignItems: "center", marginTop: -48, paddingTop: 20, paddingBottom: 0, paddingHorizontal: 16 }, linearGradient: { position: "absolute", height: 140, top: 0, right: 0, left: 0 }, avatar: null, avatarContainer: null, featureIcon: null, headerTitle: null, headerDescription: null };
let size = { borderRadius: nativeDefault.radii.lg, borderWidth: 0, borderColor: nativeDefault.colors.BACKGROUND_BASE_LOWER, height: AVATAR_SIZE, width: AVATAR_SIZE, margin: 0, backgroundColor: nativeDefault.colors.BACKGROUND_SCRIM };
obj2.avatar = size;
const size1 = { borderRadius: 20, borderWidth: AVATAR_BORDER_WIDTH, borderColor: nativeDefault.colors.BACKGROUND_BASE_LOWER, height: AVATAR_SIZE + 2 * AVATAR_BORDER_WIDTH, width: AVATAR_SIZE + 2 * AVATAR_BORDER_WIDTH, marginBottom: 16, marginTop: -16, marginLeft: -4, backgroundColor: nativeDefault.colors.BACKGROUND_BASE_LOWER };
obj2.avatarContainer = size1;
obj2.featureIcon = { position: "absolute", top: 56, right: -8 };
obj2.headerTitle = { textAlign: "center", marginBottom: 8 };
obj2.headerDescription = { lineHeight: 18, textAlign: "center" };
let closure_9 = createStyles.createStyles(obj2);
const __initData = { code: "function MemberVerificationGuildHeaderTsx1(){const{scrollTop}=this.__closure;return scrollTop.get()*-1;}" };
const __initData2 = { code: "function MemberVerificationGuildHeaderTsx2(){const{height,interpolate,scrollTop,safeAreaTop,scrollTopNegative}=this.__closure;return{width:\"100%\",height:height,opacity:interpolate(scrollTop.get(),[0,height-safeAreaTop],[1,0],\"clamp\"),transform:[{translateY:interpolate(scrollTopNegative.get(),[0,height],[0,-height],\"clamp\")},{scale:interpolate(scrollTopNegative.get(),[0,height],[1,1.08],\"clamp\")}]};}" };
const __initData3 = { code: "function MemberVerificationGuildHeaderTsx3(){const{interpolate,scrollTopNegative,height,ANIMATION_GOLDEN_RATIO,AVATAR_SIZE}=this.__closure;return{transform:[{translateY:interpolate(scrollTopNegative.get(),[0,height],[0,-(height/ANIMATION_GOLDEN_RATIO)],\"clamp\")},{scale:interpolate(scrollTopNegative.get(),[0,AVATAR_SIZE],[1,ANIMATION_GOLDEN_RATIO],\"clamp\")}]};}" };
const __initData4 = { code: "function MemberVerificationGuildHeaderTsx4(){const{scrollTop}=this.__closure;return scrollTop.get()*-1;}" };
const __initData5 = { code: "function MemberVerificationGuildHeaderTsx5(){const{height,interpolate,scrollTop,safeAreaTop,scrollTopNegative}=this.__closure;return{width:'100%',height:height,opacity:interpolate(scrollTop.get(),[0,height-safeAreaTop],[1,0],'clamp'),transform:[{translateY:interpolate(scrollTopNegative.get(),[0,height],[0,-height],'clamp')},{scale:interpolate(scrollTopNegative.get(),[0,height],[1,1.08],'clamp')}]};}" };
const __initData6 = { code: "function MemberVerificationGuildHeaderTsx6(){const{interpolate,scrollTopNegative,height,ANIMATION_GOLDEN_RATIO,AVATAR_SIZE}=this.__closure;return{transform:[{translateY:interpolate(scrollTopNegative.get(),[0,height],[0,-(height/ANIMATION_GOLDEN_RATIO)],'clamp')},{scale:interpolate(scrollTopNegative.get(),[0,AVATAR_SIZE],[1,ANIMATION_GOLDEN_RATIO],'clamp')}]};}" };
const ReactCompilerGating = fn(558);
size = fn(2);
const result = size.fileFinishedImporting("modules/guild_member_verification/native/components/MemberVerificationGuildHeader.tsx");

export default ReactCompilerGating.isReactCompilerEnabled() ? (function MemberVerificationGuildHeader(hasManualFormFields) {
  const cResult = scrollTop(top[9]).c(47);
  ({ guild, scrollTop } = hasManualFormFields);
  hasManualFormFields = hasManualFormFields.hasManualFormFields;
  const tmp4 = closure_9();
  if (null != guild.banner) {
    let guildBannerSource = require("AvatarUtils").getGuildBannerSource(guild);
    let tmp5 = importDefault;
    let obj2 = require("AvatarUtils");
  } else {
    tmp5 = importDefault;
    guildBannerSource = require("module_6155");
  }
  const tmp8 = useBannerHeight();
  importDefault = tmp8;
  top = tmp5(tmp2[10])().top;
  let obj = scrollTop(top[9]);
  const fn = function o() {
    return -1 * scrollTop.get();
  };
  fn.__closure = { scrollTop };
  fn.__workletHash = 6997429707371;
  fn.__initData = __initData;
  const derivedValue = scrollTop(top[11]).useDerivedValue(fn);
  const tmpResult = scrollTop(top[11]);
  const fn2 = function c() {
    const size = { width: "100%", height, opacity: null, transform: null };
    const items = [0, height - top];
    size.opacity = ReanimatedRexport.interpolate(scrollTop.get(), items, [1, 0], "clamp");
    const obj = { translateY: null };
    const items1 = [0, height];
    const items2 = [0, -height];
    obj.translateY = ReanimatedRexport.interpolate(derivedValue.get(), items1, items2, "clamp");
    const items3 = [obj, ];
    const obj3 = { scale: null };
    const items4 = [0, height];
    obj3.scale = ReanimatedRexport.interpolate(derivedValue.get(), items4, [1, 1.08], "clamp");
    items3[1] = obj3;
    size.transform = items3;
    return size;
  };
  const tmpResult3 = scrollTop(top[11]);
  fn2.__closure = { height: tmp8, interpolate: scrollTop(top[11]).interpolate, scrollTop, safeAreaTop: top, scrollTopNegative: derivedValue };
  fn2.__workletHash = 5221051003229;
  fn2.__initData = __initData2;
  const animatedStyle = tmpResult3.useAnimatedStyle(fn2);
  let obj3 = { height: tmp8, interpolate: scrollTop(top[11]).interpolate, scrollTop, safeAreaTop: top, scrollTopNegative: derivedValue };
  class N {
    constructor() {
      obj = { transform: null };
      obj1 = { translateY: null };
      obj3 = closure_0(closure_2[11]);
      items = [0];
      items[1] = closure_1;
      items1 = [0];
      items1[1] = -closure_1 / c8;
      obj1.translateY = obj3.interpolate(closure_3.get(), items, items1, "clamp");
      items2 = [, ];
      items2[0] = obj1;
      obj6 = { scale: null };
      obj5 = closure_0(closure_2[11]);
      items3 = [0];
      items3[1] = AVATAR_SIZE;
      items4 = [1];
      items4[1] = c8;
      obj6.scale = obj5.interpolate(closure_3.get(), items3, items4, "clamp");
      items2[1] = obj6;
      obj.transform = items2;
      return obj;
    }
  }
  const tmpResult4 = scrollTop(top[11]);
  N.__closure = { interpolate: scrollTop(top[11]).interpolate, scrollTopNegative: derivedValue, height: tmp8, ANIMATION_GOLDEN_RATIO, AVATAR_SIZE };
  N.__workletHash = 10331364193080;
  N.__initData = __initData3;
  const animatedStyle1 = tmpResult4.useAnimatedStyle(N);
  if (cResult[0] !== tmp8) {
    let size = { width: "100%", height: tmp8 };
    cResult[0] = tmp8;
    cResult[1] = size;
    let tmp12 = size;
  } else {
    tmp12 = cResult[1];
  }
  if (cResult[2] === guildBannerSource) {
    if (cResult[3] === tmp12) {
      let tmp13 = cResult[4];
    }
    const _Symbol = Symbol;
    if (cResult[5] === Symbol.for("react.memo_cache_sentinel")) {
      const point = { x: 0, y: 0 };
      const point1 = { x: 0, y: 1 };
      cResult[5] = point;
      cResult[6] = point1;
      let tmp17 = point1;
      let tmp16 = point;
    } else {
      tmp16 = cResult[5];
      tmp17 = cResult[6];
    }
    const _Symbol2 = Symbol;
    if (cResult[7] === Symbol.for("react.memo_cache_sentinel")) {
      let items = ["rgba(0,0,0,0.7)", "transparent"];
      cResult[7] = items;
      let tmp18 = items;
    } else {
      tmp18 = cResult[7];
    }
    if (cResult[8] !== tmp4.linearGradient) {
      const obj5 = { start: tmp16, end: tmp17, style: tmp4.linearGradient, colors: tmp18 };
      const tmp21 = closure_6(tmp5(tmp2[13]), obj5);
      cResult[8] = tmp4.linearGradient;
      cResult[9] = tmp21;
      let tmp19 = tmp21;
    } else {
      tmp19 = cResult[9];
    }
    if (cResult[10] === animatedStyle) {
      if (cResult[11] === tmp13) {
        if (cResult[12] === tmp19) {
          let tmp22 = cResult[13];
        }
        if (cResult[14] === animatedStyle1) {
          if (cResult[15] === tmp4.avatarContainer) {
            let tmp25 = cResult[16];
          }
          if (cResult[17] === guild) {
            if (cResult[18] === tmp4.avatar) {
              let tmp26 = cResult[19];
            }
            if (cResult[20] === guild) {
              if (cResult[21] === tmp4.featureIcon) {
                let tmp30 = cResult[22];
              }
              if (cResult[23] === tmp30) {
                if (cResult[24] === tmp25) {
                  if (cResult[25] === tmp26) {
                    let tmp33 = cResult[26];
                  }
                  if (cResult[27] === guild.name) {
                    if (cResult[28] === hasManualFormFields) {
                      if (cResult[30] === tmp4.headerTitle) {
                        if (cResult[31] === tmp36) {
                          let tmp39 = cResult[32];
                        }
                        if (cResult[33] !== hasManualFormFields) {
                          const intl2 = scrollTop(tmp2[16]).intl;
                          const string = intl2.string;
                          let t = scrollTop(tmp2[16]).t;
                          if (hasManualFormFields) {
                            t = t["3smSPP"];
                            let stringResult = string(t);
                          } else {
                            stringResult = string(t["7D3C5p"]);
                          }
                          cResult[33] = hasManualFormFields;
                          cResult[34] = stringResult;
                        } else {
                          if (cResult[35] === tmp4.headerDescription) {
                            if (cResult[36] === tmp42) {
                              let tmp46 = cResult[37];
                            }
                            if (cResult[38] === tmp4.headerContent) {
                              if (cResult[39] === tmp33) {
                                if (cResult[40] === tmp39) {
                                  if (cResult[41] === tmp46) {
                                    let tmp49 = cResult[42];
                                  }
                                  if (cResult[43] === tmp4.header) {
                                    if (cResult[44] === tmp49) {
                                      if (cResult[45] === tmp22) {
                                        let tmp53 = cResult[46];
                                      }
                                      return tmp53;
                                    }
                                  }
                                  const obj6 = { style: tmp4.header, children: null };
                                  let items1 = [tmp22, tmp49];
                                  obj6.children = items1;
                                  const tmp56 = closure_7(derivedValue, obj6);
                                  cResult[43] = tmp4.header;
                                  cResult[44] = tmp49;
                                  cResult[45] = tmp22;
                                  cResult[46] = tmp56;
                                  tmp53 = tmp56;
                                }
                              }
                            }
                            const obj7 = { style: tmp4.headerContent, children: null };
                            let items2 = [tmp33, tmp39, tmp46];
                            obj7.children = items2;
                            const tmp52 = closure_7(derivedValue, obj7);
                            cResult[38] = tmp4.headerContent;
                            cResult[39] = tmp33;
                            cResult[40] = tmp39;
                            cResult[41] = tmp46;
                            cResult[42] = tmp52;
                            tmp49 = tmp52;
                          }
                          const obj8 = { style: tmp4.headerDescription, variant: "text-sm/medium", color: "text-default", children: cResult[34] };
                          const tmp48 = closure_6(scrollTop(tmp2[17]).Text, obj8);
                          cResult[35] = tmp4.headerDescription;
                          cResult[36] = cResult[34];
                          cResult[37] = tmp48;
                          tmp46 = tmp48;
                        }
                      }
                      const obj9 = { style: tmp4.headerTitle, variant: "heading-xl/extrabold", color: "mobile-text-heading-primary", children: cResult[29] };
                      const tmp41 = closure_6(scrollTop(tmp2[17]).Heading, obj9);
                      cResult[30] = tmp4.headerTitle;
                      cResult[31] = cResult[29];
                      cResult[32] = tmp41;
                      tmp39 = tmp41;
                    }
                  }
                  const intl = scrollTop(tmp2[16]).intl;
                  const format = intl.format;
                  let t1 = scrollTop(tmp2[16]).t;
                  if (hasManualFormFields) {
                    t1 = { guildName: guild.name };
                    let formatResult = format(t1.cgX47Z, t1);
                  } else {
                    const obj10 = { guildName: guild.name };
                    formatResult = format(t1.VnxBOA, obj10);
                  }
                  guild = guild.name;
                  cResult[27] = guild;
                  cResult[28] = hasManualFormFields;
                  cResult[29] = formatResult;
                }
              }
              const obj11 = { style: tmp25, children: null };
              let items3 = [tmp26, tmp30];
              obj11.children = items3;
              const tmp35 = closure_7(tmp5(tmp2[11]).View, obj11);
              cResult[23] = tmp30;
              cResult[24] = tmp25;
              cResult[25] = tmp26;
              cResult[26] = tmp35;
              tmp33 = tmp35;
            }
            const obj12 = { style: tmp4.featureIcon, guild, disableColor: true };
            const tmp32 = closure_6(tmp5(tmp2[15]), obj12);
            cResult[20] = guild;
            cResult[21] = tmp4.featureIcon;
            cResult[22] = tmp32;
            tmp30 = tmp32;
          }
          const obj13 = { style: tmp4.avatar, guild, size: scrollTop(tmp2[14]).GuildIconSizes.XLARGE, animate: true };
          const tmp29 = closure_6(tmp5(tmp2[14]), obj13);
          cResult[17] = guild;
          cResult[18] = tmp4.avatar;
          cResult[19] = tmp29;
          tmp26 = tmp29;
          const tmp5Result = tmp5(tmp2[14]);
        }
        let items4 = [tmp4.avatarContainer, animatedStyle1];
        cResult[14] = animatedStyle1;
        cResult[15] = tmp4.avatarContainer;
        cResult[16] = items4;
        tmp25 = items4;
      }
    }
    const obj14 = { style: animatedStyle, children: null };
    const items5 = [tmp13, tmp19];
    obj14.children = items5;
    const tmp24 = closure_7(tmp5(tmp2[11]).View, obj14);
    cResult[10] = animatedStyle;
    cResult[11] = tmp13;
    cResult[12] = tmp19;
    cResult[13] = tmp24;
    tmp22 = tmp24;
  }
  const tmp14 = closure_6(tmp5(top[12]), { style: tmp12, resizeMode: "cover", source: guildBannerSource });
  cResult[2] = guildBannerSource;
  cResult[3] = tmp12;
  cResult[4] = tmp14;
  tmp13 = tmp14;
  let obj4 = { interpolate: scrollTop(top[11]).interpolate, scrollTopNegative: derivedValue, height: tmp8, ANIMATION_GOLDEN_RATIO, AVATAR_SIZE };
}) : (function MemberVerificationGuildHeader(hasManualFormFields) {
  ({ guild, scrollTop } = hasManualFormFields);
  hasManualFormFields = hasManualFormFields.hasManualFormFields;
  importDefault = undefined;
  let top;
  let derivedValue;
  const tmp = closure_9();
  if (null != guild.banner) {
    let guildBannerSource = require("AvatarUtils").getGuildBannerSource(guild);
    let tmp3 = top;
    let tmp5 = importDefault;
    let obj = require("AvatarUtils");
  } else {
    tmp3 = top;
    guildBannerSource = require("module_6155");
    tmp5 = importDefault;
  }
  const tmp8 = useBannerHeight();
  importDefault = tmp8;
  top = tmp5(tmp3[10])().top;
  class T {
    constructor() {
      return -1 * scrollTop.get();
    }
  }
  T.__closure = { scrollTop };
  T.__workletHash = 7012036582414;
  T.__initData = __initData4;
  derivedValue = scrollTop(tmp3[11]).useDerivedValue(T);
  let obj2 = scrollTop(tmp3[11]);
  class A {
    constructor() {
      size = { width: "100%", height: closure_1, opacity: null, transform: null };
      obj2 = closure_0(closure_2[11]);
      items = [0];
      items[1] = closure_1 - top;
      size.opacity = obj2.interpolate(scrollTop.get(), items, [1, 0], "clamp");
      obj1 = { translateY: null };
      obj4 = closure_0(closure_2[11]);
      items1 = [0];
      items1[1] = closure_1;
      items2 = [0];
      items2[1] = -closure_1;
      obj1.translateY = obj4.interpolate(closure_3.get(), items1, items2, "clamp");
      items3 = [, ];
      items3[0] = obj1;
      obj7 = { scale: null };
      obj6 = closure_0(closure_2[11]);
      items4 = [0];
      items4[1] = closure_1;
      obj7.scale = obj6.interpolate(closure_3.get(), items4, [1, 1.08], "clamp");
      items3[1] = obj7;
      size.transform = items3;
      return size;
    }
  }
  let obj3 = scrollTop(tmp3[11]);
  A.__closure = { height: tmp8, interpolate: scrollTop(tmp3[11]).interpolate, scrollTop, safeAreaTop: top, scrollTopNegative: derivedValue };
  A.__workletHash = 12118572600090;
  A.__initData = __initData5;
  const animatedStyle = obj3.useAnimatedStyle(A);
  let obj4 = { height: tmp8, interpolate: scrollTop(tmp3[11]).interpolate, scrollTop, safeAreaTop: top, scrollTopNegative: derivedValue };
  const fn = function f() {
    const obj = { transform: null };
    const obj2 = { translateY: null };
    const items = [0, closure_1];
    const items1 = [0, -closure_1 / c8];
    obj2.translateY = ReanimatedRexport.interpolate(derivedValue.get(), items, items1, "clamp");
    const items2 = [obj2, ];
    const obj4 = { scale: null };
    const items3 = [0, AVATAR_SIZE];
    const items4 = [1, c8];
    obj4.scale = ReanimatedRexport.interpolate(derivedValue.get(), items3, items4, "clamp");
    items2[1] = obj4;
    obj.transform = items2;
    return obj;
  };
  const obj5 = scrollTop(tmp3[11]);
  fn.__closure = { interpolate: scrollTop(tmp3[11]).interpolate, scrollTopNegative: derivedValue, height: tmp8, ANIMATION_GOLDEN_RATIO, AVATAR_SIZE };
  fn.__workletHash = 2524545236253;
  fn.__initData = __initData6;
  const obj7 = { style: tmp.header, children: null };
  const animatedStyle1 = obj5.useAnimatedStyle(fn);
  const obj8 = { style: animatedStyle, children: null };
  let items = [closure_6(tmp5(tmp3[12]), { style: { width: "100%", height: tmp8 }, resizeMode: "cover", source: guildBannerSource }), closure_6(tmp5(tmp3[13]), { start: { x: 0, y: 0 }, end: { x: 0, y: 1 }, style: tmp.linearGradient, colors: ["rgba(0,0,0,0.7)", "transparent"] })];
  obj8.children = items;
  let items1 = [closure_7(tmp5(tmp3[11]).View, obj8), ];
  const obj11 = { style: tmp.headerContent, children: null };
  const obj12 = { style: null, children: null };
  let items2 = [tmp.avatarContainer, animatedStyle1];
  obj12.style = items2;
  const obj13 = { style: tmp.avatar, guild, size: null, animate: true };
  const obj10 = { start: { x: 0, y: 0 }, end: { x: 0, y: 1 }, style: tmp.linearGradient, colors: ["rgba(0,0,0,0.7)", "transparent"] };
  const obj6 = { interpolate: scrollTop(tmp3[11]).interpolate, scrollTopNegative: derivedValue, height: tmp8, ANIMATION_GOLDEN_RATIO, AVATAR_SIZE };
  const obj9 = { style: { width: "100%", height: tmp8 }, resizeMode: "cover", source: guildBannerSource };
  obj13.size = scrollTop(tmp3[14]).GuildIconSizes.XLARGE;
  let items3 = [closure_6(tmp5(tmp3[14]), obj13), closure_6(tmp5(tmp3[15]), { style: tmp.featureIcon, guild, disableColor: true })];
  obj12.children = items3;
  let items4 = [closure_7(tmp5(tmp3[11]).View, obj12), , ];
  const obj15 = { style: tmp.headerTitle, variant: "heading-xl/extrabold", color: "mobile-text-heading-primary", children: null };
  const intl = scrollTop(tmp3[16]).intl;
  const format = intl.format;
  const t = scrollTop(tmp3[16]).t;
  if (hasManualFormFields) {
    const obj16 = { guildName: guild.name };
    let formatResult = format(t.cgX47Z, obj16);
  } else {
    const obj17 = { guildName: guild.name };
    formatResult = format(t.VnxBOA, obj17);
  }
  obj15.children = formatResult;
  items4[1] = closure_6(scrollTop(tmp3[17]).Heading, obj15);
  const obj18 = { style: tmp.headerDescription, variant: "text-sm/medium", color: "text-default", children: null };
  const intl2 = scrollTop(tmp3[16]).intl;
  const string = intl2.string;
  const t2 = scrollTop(tmp3[16]).t;
  if (hasManualFormFields) {
    let stringResult = string(t2["3smSPP"]);
  } else {
    stringResult = string(t2["7D3C5p"]);
  }
  obj18.children = stringResult;
  items4[2] = closure_6(scrollTop(tmp3[17]).Text, obj18);
  obj11.children = items4;
  items1[1] = closure_7(derivedValue, obj11);
  obj7.children = items1;
  return closure_7(derivedValue, obj7);
});