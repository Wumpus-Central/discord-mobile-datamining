// === Module 16347: HexagonCampaignQuestHomeHeader ===

// Module 16347 (HexagonCampaignQuestHomeHeader)
import nativeDefault from "native" /* 587 */;
import _modDef683 from "module_683" /* 683 */;
import LinearGradientDefault from "LinearGradient" /* 5256 */;
import FastImageDefault from "FastImage" /* 5667 */;
import _modDef16348 from "module_16348" /* 16348 */;
import _modDef16349 from "module_16349" /* 16349 */;
import noop from "module_19" /* 19 */;

const require = fn;
get_ActivityIndicator = fn(17);
({ StyleSheet: closure_4, View: hasOwnProperty } = get_ActivityIndicator);
const jsxProd = fn(21);
({ jsx: metroRequire, jsxs: closure_7 } = jsxProd);
const createStyles = fn(4969);
let obj2 = { container: { width: "100%", maxWidth: 448, alignSelf: "center", marginBottom: nativeDefault.space.PX_40 }, banner: { width: "100%", aspectRatio: 1 }, bannerImage: { width: "100%", height: "100%" }, logo: null, sponsoredTag: null, cardShadow: null, card: null, cardArt: null, cardContent: null, cardBody: null };
let size = { position: "absolute", top: nativeDefault.space.PX_4, left: nativeDefault.space.PX_8, width: 88, height: 88 };
obj2.logo = size;
const rect = { position: "absolute", top: nativeDefault.space.PX_16, right: nativeDefault.space.PX_16, paddingHorizontal: nativeDefault.space.PX_8, paddingVertical: nativeDefault.space.PX_4, borderRadius: nativeDefault.radii.sm, borderWidth: 1, borderColor: nativeDefault.colors.BORDER_MUTED, backgroundColor: nativeDefault.colors.CONTROL_OVERLAY_SECONDARY_BACKGROUND_DEFAULT };
obj2.sponsoredTag = rect;
let obj3 = { width: "100%", maxWidth: 448, alignSelf: "center", marginBottom: nativeDefault.space.PX_40 };
const merged = Object.assign(nativeDefault.shadows.SHADOW_HIGH);
obj2.cardShadow = { marginTop: -146, marginHorizontal: nativeDefault.space.PX_16, borderRadius: nativeDefault.radii.xl, backgroundColor: nativeDefault.colors.BACKGROUND_SURFACE_HIGH };
let obj4 = { marginTop: -146, marginHorizontal: nativeDefault.space.PX_16, borderRadius: nativeDefault.radii.xl, backgroundColor: nativeDefault.colors.BACKGROUND_SURFACE_HIGH };
obj2.card = { borderRadius: nativeDefault.radii.xl, borderWidth: 1, borderColor: nativeDefault.colors.BORDER_SUBTLE, overflow: "hidden", backgroundColor: nativeDefault.colors.BACKGROUND_SURFACE_HIGH };
let obj5 = { borderRadius: nativeDefault.radii.xl, borderWidth: 1, borderColor: nativeDefault.colors.BORDER_SUBTLE, overflow: "hidden", backgroundColor: nativeDefault.colors.BACKGROUND_SURFACE_HIGH };
obj2.cardArt = { alignItems: "center", paddingTop: nativeDefault.space.PX_12 };
let obj6 = { alignItems: "center", paddingTop: nativeDefault.space.PX_12 };
obj2.cardContent = { paddingTop: nativeDefault.space.PX_10, paddingHorizontal: nativeDefault.space.PX_16, paddingBottom: nativeDefault.space.PX_16 };
obj2.cardBody = { opacity: 0.8 };
let closure_8 = createStyles.createStyles(obj2);
const ReactCompilerGating = fn(558);
let obj7 = { paddingTop: nativeDefault.space.PX_10, paddingHorizontal: nativeDefault.space.PX_16, paddingBottom: nativeDefault.space.PX_16 };
size = fn(2);
const result = size.fileFinishedImporting("modules/hexagon_campaign/native/HexagonCampaignQuestHomeHeader.tsx");

export default ReactCompilerGating.isReactCompilerEnabled() ? (function HexagonCampaignQuestHomeHeader() {
  const cResult = token(576).c(48);
  const tmp4 = closure_8();
  let obj = token(576);
  const obj2 = token(5035);
  const isHexagonCampaignQuestHomeHeaderEnabled = token(4998).useIsHexagonCampaignQuestHomeHeaderEnabled("HexagonCampaignQuestHomeHeader");
  const obj3 = token(4998);
  token = token(5250).useToken(nativeDefault.colors.BACKGROUND_BASE_LOWEST);
  if (cResult[0] !== token) {
    const items = [0, 0.83, 1];
    const mapped = items.map((item) => {
      const obj = _modDef683(token);
      return _modDef683(token).alpha(item).css();
    });
    cResult[0] = token;
    cResult[1] = mapped;
    let tmp8 = mapped;
  } else {
    tmp8 = cResult[1];
  }
  if (isHexagonCampaignQuestHomeHeaderEnabled) {
    const _Symbol = Symbol;
    if (cResult[2] === Symbol.for("react.memo_cache_sentinel")) {
      function learnMoreHook(children, arg1) {
        return closure_1_6(token(5232).Text, { variant: "text-xs/medium", color: "text-link", accessibilityRole: "link", onPress: token(15845).openHexagonCampaignLearnMore, children }, arg1);
      }
      cResult[2] = learnMoreHook;
      let tmp12 = learnMoreHook;
    } else {
      tmp12 = cResult[2];
    }
    if (cResult[3] !== tmp4.bannerImage) {
      const obj5 = { source: _modDef16348, style: tmp4.bannerImage, resizeMode: "cover", accessible: false };
      const tmp16 = closure_6(FastImageDefault, obj5);
      cResult[3] = tmp4.bannerImage;
      cResult[4] = tmp16;
      let tmp13 = tmp16;
      const tmp6Result = FastImageDefault;
    } else {
      tmp13 = cResult[4];
    }
    const _Symbol2 = Symbol;
    if (cResult[5] === Symbol.for("react.memo_cache_sentinel")) {
      const items1 = [0.716, 0.823, 1];
      cResult[5] = items1;
      let tmp17 = items1;
    } else {
      tmp17 = cResult[5];
    }
    if (cResult[6] !== tmp8) {
      const obj6 = { colors: tmp8, locations: tmp17, style: closure_4.absoluteFill, pointerEvents: "none" };
      const tmp21 = closure_6(LinearGradientDefault, obj6);
      cResult[6] = tmp8;
      cResult[7] = tmp21;
      let tmp18 = tmp21;
    } else {
      tmp18 = cResult[7];
    }
    if (cResult[8] !== tmp4.logo) {
      const obj7 = { source: _modDef16349, style: tmp4.logo, resizeMode: "contain", accessible: false };
      const tmp25 = closure_6(FastImageDefault, obj7);
      cResult[8] = tmp4.logo;
      cResult[9] = tmp25;
      let tmp22 = tmp25;
      const tmp6Result2 = FastImageDefault;
    } else {
      tmp22 = cResult[9];
    }
    const _Symbol3 = Symbol;
    if (cResult[10] === Symbol.for("react.memo_cache_sentinel")) {
      const obj8 = { variant: "text-sm/semibold", color: "text-overlay-light", children: null };
      const intl = tmp(1128).intl;
      obj8.children = intl.string(tmp(1128).t.kVJc0r);
      const tmp28 = closure_6(tmp(5232).Text, obj8);
      cResult[10] = tmp28;
      let tmp26 = tmp28;
    } else {
      tmp26 = cResult[10];
    }
    if (cResult[11] !== tmp4.sponsoredTag) {
      const obj9 = { style: tmp4.sponsoredTag, children: tmp26 };
      const tmp32 = closure_6(closure_5, obj9);
      cResult[11] = tmp4.sponsoredTag;
      cResult[12] = tmp32;
      let tmp29 = tmp32;
    } else {
      tmp29 = cResult[12];
    }
    if (cResult[13] === tmp4.banner) {
      if (cResult[14] === tmp13) {
        if (cResult[15] === tmp18) {
          if (cResult[16] === tmp22) {
            if (cResult[17] === tmp29) {
              let tmp33 = cResult[18];
            }
            const _Symbol4 = Symbol;
            ({ cardShadow, card } = tmp4);
            if (cResult[19] === Symbol.for("react.memo_cache_sentinel")) {
              const tmp39 = closure_6(tmp(16350).BundleAbstractUI, { accessible: false });
              cResult[19] = tmp39;
              let tmp37 = tmp39;
            } else {
              tmp37 = cResult[19];
            }
            if (cResult[20] !== tmp4.cardArt) {
              const obj10 = { style: tmp4.cardArt, children: tmp37 };
              const tmp43 = closure_6(closure_5, obj10);
              cResult[20] = tmp4.cardArt;
              cResult[21] = tmp43;
              let tmp40 = tmp43;
            } else {
              tmp40 = cResult[21];
            }
            const _Symbol5 = Symbol;
            if (cResult[22] === Symbol.for("react.memo_cache_sentinel")) {
              const obj11 = { variant: "text-lg/semibold", color: "text-strong", children: null };
              const intl2 = tmp(1128).intl;
              obj11.children = intl2.string(tmp(1128).t["fShp/D"]);
              const tmp46 = closure_6(tmp(5232).Heading, obj11);
              cResult[22] = tmp46;
              let tmp44 = tmp46;
            } else {
              tmp44 = cResult[22];
            }
            const _Symbol6 = Symbol;
            if (cResult[23] === Symbol.for("react.memo_cache_sentinel")) {
              const intl3 = tmp(1128).intl;
              const stringResult = intl3.string(tmp(1128).t.XLqMej);
              cResult[23] = stringResult;
              let tmp47 = stringResult;
            } else {
              tmp47 = cResult[23];
            }
            if (cResult[24] !== tmp4.cardBody) {
              const obj12 = { direction: "vertical", spacing: nativeDefault.space.PX_4, children: null };
              const items2 = [tmp44, ];
              const obj13 = { variant: "text-sm/medium", color: "text-default", style: tmp4.cardBody, children: tmp47 };
              items2[1] = closure_6(tmp(5232).Text, obj13);
              obj12.children = items2;
              const tmp52 = closure_7(tmp(5975).Stack, obj12);
              cResult[24] = tmp4.cardBody;
              cResult[25] = tmp52;
              let tmp49 = tmp52;
            } else {
              tmp49 = cResult[25];
            }
            const _Symbol7 = Symbol;
            if (cResult[26] === Symbol.for("react.memo_cache_sentinel")) {
              const obj14 = { variant: "text-xs/medium", color: "text-subtle", children: null };
              const intl4 = tmp(1128).intl;
              const obj15 = { learnMoreHook: tmp12 };
              obj14.children = intl4.format(tmp(1128).t.uL0TOA, obj15);
              const tmp55 = closure_6(tmp(5232).Text, obj14);
              cResult[26] = tmp55;
              let tmp53 = tmp55;
            } else {
              tmp53 = cResult[26];
            }
            if (cResult[27] === tmp49) {
              if (cResult[28] === tmp53) {
                let tmp56 = cResult[29];
              }
              let str2 = "primary-overlay";
              if (tmpResult.isThemeLight(obj2.useThemeContext().theme)) {
                str2 = "primary";
              }
              const _Symbol8 = Symbol;
              if (cResult[30] === Symbol.for("react.memo_cache_sentinel")) {
                const intl5 = tmp(1128).intl;
                const stringResult1 = intl5.string(tmp(1128).t["KX1/jp"]);
                cResult[30] = stringResult1;
                let tmp59 = stringResult1;
              } else {
                tmp59 = cResult[30];
              }
              if (cResult[31] !== str2) {
                const obj16 = { variant: str2, text: tmp59, onPress: tmp(16354).openHexagonCampaignSheet, grow: true };
                const tmp63 = closure_6(tmp(5242).Button, obj16);
                cResult[31] = str2;
                cResult[32] = tmp63;
                let tmp61 = tmp63;
              } else {
                tmp61 = cResult[32];
              }
              if (cResult[33] === tmp4.cardContent) {
                if (cResult[34] === tmp56) {
                  if (cResult[35] === tmp61) {
                    let tmp64 = cResult[36];
                  }
                  if (cResult[37] === tmp4.card) {
                    if (cResult[38] === tmp40) {
                      if (cResult[39] === tmp64) {
                        let tmp67 = cResult[40];
                      }
                      if (cResult[41] === tmp4.cardShadow) {
                        if (cResult[42] === tmp67) {
                          let tmp71 = cResult[43];
                        }
                        if (cResult[44] === tmp4.container) {
                          if (cResult[45] === tmp71) {
                            if (cResult[46] === tmp33) {
                              let tmp75 = cResult[47];
                            }
                            return tmp75;
                          }
                        }
                        const obj17 = { style: tmp4.container, children: null };
                        const items3 = [tmp33, tmp71];
                        obj17.children = items3;
                        const tmp78 = closure_7(closure_5, obj17);
                        cResult[44] = tmp4.container;
                        cResult[45] = tmp71;
                        cResult[46] = tmp33;
                        cResult[47] = tmp78;
                        tmp75 = tmp78;
                      }
                      const obj18 = { style: cardShadow, children: tmp67 };
                      const tmp74 = closure_6(closure_5, obj18);
                      cResult[41] = tmp4.cardShadow;
                      cResult[42] = tmp67;
                      cResult[43] = tmp74;
                      tmp71 = tmp74;
                    }
                  }
                  const obj19 = { style: card, children: null };
                  const items4 = [tmp40, tmp64];
                  obj19.children = items4;
                  const tmp70 = closure_7(closure_5, obj19);
                  cResult[37] = tmp4.card;
                  cResult[38] = tmp40;
                  cResult[39] = tmp64;
                  cResult[40] = tmp70;
                  tmp67 = tmp70;
                }
              }
              const obj20 = { direction: "vertical", spacing: nativeDefault.space.PX_12, style: tmp4.cardContent, children: null };
              const items5 = [tmp56, tmp61];
              obj20.children = items5;
              const tmp66 = closure_7(tmp(5975).Stack, obj20);
              cResult[33] = tmp4.cardContent;
              cResult[34] = tmp56;
              cResult[35] = tmp61;
              cResult[36] = tmp66;
              tmp64 = tmp66;
              tmpResult = tmp(4976);
            }
            const obj21 = { direction: "vertical", spacing: nativeDefault.space.PX_8, children: null };
            const items6 = [tmp49, tmp53];
            obj21.children = items6;
            const tmp58 = closure_7(tmp(5975).Stack, obj21);
            cResult[27] = tmp49;
            cResult[28] = tmp53;
            cResult[29] = tmp58;
            tmp56 = tmp58;
          }
        }
      }
    }
    const obj22 = { style: tmp4.banner, children: null };
    const items7 = [tmp13, tmp18, tmp22, tmp29];
    obj22.children = items7;
    const tmp36 = closure_7(closure_5, obj22);
    cResult[13] = tmp4.banner;
    cResult[14] = tmp13;
    cResult[15] = tmp18;
    cResult[16] = tmp22;
    cResult[17] = tmp29;
    cResult[18] = tmp36;
    tmp33 = tmp36;
  } else {
    return null;
  }
  const obj4 = token(5250);
}) : (function HexagonCampaignQuestHomeHeader() {
  const tmp = closure_8();
  let obj = token(5035);
  const isHexagonCampaignQuestHomeHeaderEnabled = token(4998).useIsHexagonCampaignQuestHomeHeaderEnabled("HexagonCampaignQuestHomeHeader");
  const obj2 = token(4998);
  token = token(5250).useToken(nativeDefault.colors.BACKGROUND_BASE_LOWEST);
  [][0] = token;
  let tmp9Result = null;
  if (isHexagonCampaignQuestHomeHeaderEnabled) {
    const obj4 = { style: tmp.container, children: null };
    const obj5 = { style: tmp.banner, children: null };
    const obj6 = { source: _modDef16348, style: tmp.bannerImage, resizeMode: "cover", accessible: false };
    let items = [closure_6(FastImageDefault, obj6), , , ];
    const obj7 = { colors: tmp7, locations: [0.716, 0.823, 1], style: closure_4.absoluteFill, pointerEvents: "none" };
    items[1] = closure_6(LinearGradientDefault, obj7);
    const obj8 = { source: null, style: null, resizeMode: "contain", accessible: false };
    const tmp5Result = FastImageDefault;
    obj8.source = _modDef16349;
    obj8.style = tmp.logo;
    items[2] = closure_6(FastImageDefault, obj8);
    const obj9 = { style: tmp.sponsoredTag, children: null };
    const obj10 = { variant: "text-sm/semibold", color: "text-overlay-light", children: null };
    const intl = tmp2(1128).intl;
    obj10.children = intl.string(tmp2(1128).t.kVJc0r);
    obj9.children = closure_6(tmp2(5232).Text, obj10);
    items[3] = closure_6(closure_5, obj9);
    obj5.children = items;
    const items1 = [closure_7(closure_5, obj5), ];
    const obj11 = { style: tmp.cardShadow, children: null };
    const obj12 = { style: tmp.card, children: null };
    const obj13 = { style: tmp.cardArt, children: closure_6(tmp2(16350).BundleAbstractUI, { accessible: false }) };
    const items2 = [closure_6(closure_5, obj13), ];
    const obj14 = { direction: "vertical", spacing: nativeDefault.space.PX_12, style: tmp.cardContent, children: null };
    const obj15 = { direction: "vertical", spacing: nativeDefault.space.PX_8, children: null };
    const obj16 = { direction: "vertical", spacing: nativeDefault.space.PX_4, children: null };
    const obj17 = { variant: "text-lg/semibold", color: "text-strong", children: null };
    const intl2 = tmp2(1128).intl;
    obj17.children = intl2.string(tmp2(1128).t["fShp/D"]);
    const items3 = [closure_6(tmp2(5232).Heading, obj17), ];
    const obj18 = { variant: "text-sm/medium", color: "text-default", style: tmp.cardBody, children: null };
    const intl3 = tmp2(1128).intl;
    obj18.children = intl3.string(tmp2(1128).t.XLqMej);
    items3[1] = closure_6(tmp2(5232).Text, obj18);
    obj16.children = items3;
    const items4 = [closure_7(tmp2(5975).Stack, obj16), ];
    const obj19 = { variant: "text-xs/medium", color: "text-subtle", children: null };
    const intl4 = tmp2(1128).intl;
    const obj20 = {
      learnMoreHook(children, arg1) {
          return closure_1_6(token(5232).Text, { variant: "text-xs/medium", color: "text-link", accessibilityRole: "link", onPress: token(15845).openHexagonCampaignLearnMore, children }, arg1);
        }
    };
    obj19.children = intl4.format(tmp2(1128).t.uL0TOA, obj20);
    items4[1] = closure_6(tmp2(5232).Text, obj19);
    obj15.children = items4;
    const items5 = [closure_7(tmp2(5975).Stack, obj15), ];
    const tmp5Result2 = FastImageDefault;
    let str = "primary-overlay";
    if (tmp2Result.isThemeLight(obj.useThemeContext().theme)) {
      str = "primary";
    }
    const obj21 = { variant: str, text: null, onPress: null, grow: true };
    const intl5 = tmp2(1128).intl;
    obj21.text = intl5.string(tmp2(1128).t["KX1/jp"]);
    obj21.onPress = tmp2(16354).openHexagonCampaignSheet;
    items5[1] = closure_6(tmp2(5242).Button, obj21);
    obj14.children = items5;
    items2[1] = closure_7(tmp2(5975).Stack, obj14);
    obj12.children = items2;
    obj11.children = closure_7(closure_5, obj12);
    items1[1] = closure_6(closure_5, obj11);
    obj4.children = items1;
    tmp9Result = closure_7(closure_5, obj4);
    tmp2Result = tmp2(4976);
  }
  return tmp9Result;
});