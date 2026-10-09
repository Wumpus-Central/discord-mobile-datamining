// === Module 15245: BountiesScrollRecapPage ===

// Module 15245 (BountiesScrollRecapPage)
import initialize from "initialize" /* 504 */;
import c from "c" /* 576 */;
import nativeDefault from "native" /* 587 */;
import util from "util" /* 1126 */;
import PlatformUtils from "PlatformUtils" /* 1382 */;
import useSafeAreaInsetsDefault from "useSafeAreaInsets" /* 1631 */;
import Text_Text from "Text/Text" /* 5087 */;
import components_Button_Button from "components/Button/Button" /* 5376 */;
import useTypeConsolidationTextTransform from "useTypeConsolidationTextTransform" /* 6661 */;
import common_Video from "common/Video" /* 8409 */;
import APNGPlayer from "APNGPlayer" /* 8992 */;
import OrbsIcon from "OrbsIcon" /* 9020 */;
import _modDef15246 from "module_15246" /* 15246 */;
import _modDef15247 from "module_15247" /* 15247 */;
import _modDef15248 from "module_15248" /* 15248 */;
import noop from "module_19" /* 19 */;
import AccessibilityStore from "AccessibilityStore" /* 5080 */;

require = fn;
get_ActivityIndicator = fn(17);
({ StyleSheet: c3, View: closure_4 } = get_ActivityIndicator);
const jsxProd = fn(21);
({ jsx: metroRequire, jsxs: closure_7 } = jsxProd);
const lg = nativeDefault.radii.lg;
const createStyles = fn(5091);
let closure_9 = createStyles.createStyles(() => {
  const obj = { root: { overflow: "hidden", borderRadius: lg, backgroundColor: nativeDefault.colors.MOBILE_ACTIONSHEET_BACKGROUND }, content: null, centeredCopy: null, orbsBackground: null, headerLabel: null, titleRow: null, actions: null, orbAmount: null };
  const obj2 = { overflow: "hidden", borderRadius: lg, backgroundColor: nativeDefault.colors.MOBILE_ACTIONSHEET_BACKGROUND };
  obj.content = { flex: 1, paddingHorizontal: nativeDefault.space.PX_24, justifyContent: "center", alignItems: "center" };
  obj.centeredCopy = { alignItems: "center", width: "100%" };
  obj.orbsBackground = { position: "absolute", top: 0, left: 0, right: 0, height: "40%", zIndex: 1 };
  const obj3 = { flex: 1, paddingHorizontal: nativeDefault.space.PX_24, justifyContent: "center", alignItems: "center" };
  obj.headerLabel = { paddingBottom: nativeDefault.space.PX_4, textTransform: "uppercase" };
  const obj4 = { paddingBottom: nativeDefault.space.PX_4, textTransform: "uppercase" };
  obj.titleRow = { flexDirection: "row", alignItems: "center", justifyContent: "center", paddingBottom: nativeDefault.space.PX_24, gap: nativeDefault.space.PX_8 };
  const rect = { position: "absolute", left: nativeDefault.space.PX_24, right: nativeDefault.space.PX_24, gap: nativeDefault.space.PX_12 };
  obj.actions = rect;
  const obj5 = { flexDirection: "row", alignItems: "center", justifyContent: "center", paddingBottom: nativeDefault.space.PX_24, gap: nativeDefault.space.PX_8 };
  let num = 0;
  if (obj7.isIOS()) {
    num = 6;
  }
  obj.orbAmount = { marginTop: num, lineHeight: 46 };
  return obj;
});
let ReactCompilerGating = fn(558);
let closure_10 = ReactCompilerGating.isReactCompilerEnabled() ? (function BountiesRecapOrbsBackground(arg0) {
  const cResult = c.c(9);
  ({ style, reducedMotion } = arg0);
  if (obj2.isAndroid()) {
    if (cResult[0] !== !reducedMotion) {
      const obj3 = { url: _modDef15246, style: React3.absoluteFillObject, autoplay: tmp10 };
      const tmp15 = timestampProducer(APNGPlayer.APNGPlayer, obj3);
      cResult[0] = tmp10;
      cResult[1] = tmp15;
      let tmp11 = tmp15;
    } else {
      tmp11 = cResult[1];
    }
    if (cResult[2] === style) {
      if (cResult[3] === tmp11) {
        let tmp16 = cResult[4];
      }
      return tmp16;
    }
    const obj4 = { style, needsOffscreenAlphaCompositing: true, renderToHardwareTextureAndroid: true, pointerEvents: "none", children: tmp11 };
    const tmp19 = timestampProducer(React4, obj4);
    cResult[2] = style;
    cResult[3] = tmp11;
    cResult[4] = tmp19;
    tmp16 = tmp19;
  } else {
    const _Symbol = Symbol;
    if (cResult[5] === Symbol.for("react.memo_cache_sentinel")) {
      const obj5 = { uri: _modDef15247 };
      cResult[5] = obj5;
      let tmp5 = obj5;
    } else {
      tmp5 = cResult[5];
    }
    if (cResult[6] === reducedMotion) {
      if (cResult[7] === style) {
        let tmp7 = cResult[8];
      }
      return tmp7;
    }
    const obj6 = { source: tmp5, style, resizeMode: "contain", paused: reducedMotion, disableFocus: true, preventsDisplaySleepDuringVideoPlayback: false, importantForAccessibility: "no-hide-descendants" };
    const tmp9 = timestampProducer(common_Video.VideoComponent, obj6);
    cResult[6] = reducedMotion;
    cResult[7] = style;
    cResult[8] = tmp9;
    tmp7 = tmp9;
  }
  obj2 = PlatformUtils;
}) : (function BountiesRecapOrbsBackground(arg0) {
  ({ style, reducedMotion } = arg0);
  if (obj.isAndroid()) {
    const obj2 = { style, needsOffscreenAlphaCompositing: true, renderToHardwareTextureAndroid: true, pointerEvents: "none", children: null };
    const obj3 = { url: _modDef15246, style: React3.absoluteFillObject, autoplay: !reducedMotion };
    obj2.children = timestampProducer(APNGPlayer.APNGPlayer, obj3);
    let tmp3Result = timestampProducer(React4, obj2);
  } else {
    const obj4 = { source: null, style: null, resizeMode: "contain", paused: null, disableFocus: true, preventsDisplaySleepDuringVideoPlayback: false, importantForAccessibility: "no-hide-descendants" };
    const obj5 = { uri: _modDef15247 };
    obj4.source = obj5;
    obj4.style = style;
    obj4.paused = reducedMotion;
    tmp3Result = timestampProducer(common_Video.VideoComponent, obj4);
  }
  return tmp3Result;
});
ReactCompilerGating = fn(558);
const size = fn(2);
const result = size.fileFinishedImporting("modules/quests/native/BountiesModal/BountiesScrollRecapPage.tsx");

export const BountiesScrollRecapPage = ReactCompilerGating.isReactCompilerEnabled() ? (function BountiesScrollRecapPage(arg0) {
  const cResult = c.c(55);
  ({ orbAmount, onClose, style } = arg0);
  const tmp4 = closure_9();
  const typeConsolidationEyebrow = useTypeConsolidationTextTransform.useTypeConsolidationEyebrow("BountiesScrollRecapPage", "text-xs/bold");
  if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
    const items = [AccessibilityStore];
    const fn = function b() {
      return useReducedMotion.useReducedMotion;
    };
    cResult[0] = items;
    cResult[1] = fn;
    tmp8 = items;
    tmp9 = fn;
  } else {
    [tmp8, tmp9] = cResult;
  }
  const tmp7 = useSafeAreaInsetsDefault();
  const stateFromStores = initialize.useStateFromStores(tmp8, tmp9);
  if (cResult[2] === style) {
    if (cResult[3] === tmp4.root) {
      let tmp12 = cResult[4];
    }
    const _Symbol = Symbol;
    if (cResult[5] === Symbol.for("react.memo_cache_sentinel")) {
      const obj3 = { uri: _modDef15248 };
      cResult[5] = obj3;
      let tmp13 = obj3;
    } else {
      tmp13 = cResult[5];
    }
    if (cResult[6] !== stateFromStores) {
      const obj4 = { source: tmp13, style: React3.absoluteFillObject, resizeMode: "cover", paused: stateFromStores, disableFocus: true, preventsDisplaySleepDuringVideoPlayback: false, importantForAccessibility: "no-hide-descendants" };
      const tmp17 = timestampProducer(common_Video.VideoComponent, obj4);
      cResult[6] = stateFromStores;
      cResult[7] = tmp17;
      let tmp14 = tmp17;
    } else {
      tmp14 = cResult[7];
    }
    if (cResult[8] === stateFromStores) {
      if (cResult[9] === tmp4.orbsBackground) {
        let tmp18 = cResult[10];
      }
      if (cResult[11] === tmp14) {
        if (cResult[12] === tmp18) {
          let tmp22 = cResult[13];
        }
        if (cResult[14] === typeConsolidationEyebrow.style) {
          if (cResult[15] === tmp4.headerLabel) {
            let tmp30 = cResult[16];
          }
          const _Symbol2 = Symbol;
          if (cResult[17] === Symbol.for("react.memo_cache_sentinel")) {
            const intl = util.intl;
            const stringResult = intl.string(util.t.d6Rrn6);
            cResult[17] = stringResult;
            let tmp31 = stringResult;
          } else {
            tmp31 = cResult[17];
          }
          if (cResult[18] === typeConsolidationEyebrow.variant) {
            if (cResult[19] === tmp30) {
              let tmp33 = cResult[20];
            }
            const _HermesInternal = HermesInternal;
            const combined = "+" + orbAmount;
            const _Symbol3 = Symbol;
            if (cResult[21] === Symbol.for("react.memo_cache_sentinel")) {
              const tmp39 = timestampProducer(OrbsIcon.OrbsIcon, { size: "lg", color: "icon-strong", accessible: false });
              cResult[21] = tmp39;
              let tmp37 = tmp39;
            } else {
              tmp37 = cResult[21];
            }
            const _HermesInternal2 = HermesInternal;
            const combined1 = "+" + orbAmount;
            if (cResult[22] === tmp4.orbAmount) {
              if (cResult[23] === combined1) {
                let tmp41 = cResult[24];
              }
              if (cResult[25] === tmp4.titleRow) {
                if (cResult[26] === tmp41) {
                  let tmp44 = cResult[27];
                }
                if (cResult[28] === combined) {
                  if (cResult[29] === tmp44) {
                    let tmp48 = cResult[30];
                  }
                  const _Symbol4 = Symbol;
                  if (cResult[31] === Symbol.for("react.memo_cache_sentinel")) {
                    const obj5 = { variant: "text-md/medium", color: "text-muted", style: { textAlign: "center" }, children: null };
                    const intl2 = util.intl;
                    obj5.children = intl2.string(util.t.x0Ffz3);
                    const tmp54 = timestampProducer(Text_Text.Text, obj5);
                    cResult[31] = tmp54;
                    let tmp52 = tmp54;
                  } else {
                    tmp52 = cResult[31];
                  }
                  if (cResult[32] === tmp4.centeredCopy) {
                    if (cResult[33] === tmp33) {
                      if (cResult[34] === tmp48) {
                        let tmp55 = cResult[35];
                      }
                      const sum = tmp7.bottom + nativeDefault.space.PX_8;
                      if (cResult[36] !== sum) {
                        const obj6 = { bottom: sum };
                        cResult[36] = sum;
                        cResult[37] = obj6;
                        let tmp60 = obj6;
                      } else {
                        tmp60 = cResult[37];
                      }
                      if (cResult[38] === tmp4.actions) {
                        if (cResult[39] === tmp60) {
                          let tmp61 = cResult[40];
                        }
                        const _Symbol5 = Symbol;
                        if (cResult[41] === Symbol.for("react.memo_cache_sentinel")) {
                          const intl3 = util.intl;
                          const stringResult1 = intl3.string(util.t.i4jeWR);
                          cResult[41] = stringResult1;
                          let tmp62 = stringResult1;
                        } else {
                          tmp62 = cResult[41];
                        }
                        if (cResult[42] !== onClose) {
                          const obj7 = { grow: true, variant: "primary", text: tmp62, size: "lg", onPress: onClose };
                          const tmp66 = timestampProducer(components_Button_Button.Button, obj7);
                          cResult[42] = onClose;
                          cResult[43] = tmp66;
                          let tmp64 = tmp66;
                        } else {
                          tmp64 = cResult[43];
                        }
                        if (cResult[44] === tmp61) {
                          if (cResult[45] === tmp64) {
                            let tmp67 = cResult[46];
                          }
                          if (cResult[47] === tmp4.content) {
                            if (cResult[48] === tmp55) {
                              if (cResult[49] === tmp67) {
                                let tmp71 = cResult[50];
                              }
                              if (cResult[51] === tmp71) {
                                if (cResult[52] === tmp12) {
                                  if (cResult[53] === tmp22) {
                                    let tmp75 = cResult[54];
                                  }
                                  return tmp75;
                                }
                              }
                              const obj8 = { style: tmp12, pointerEvents: "box-none", children: null };
                              const items1 = [tmp22, tmp71];
                              obj8.children = items1;
                              const tmp78 = React5(React4, obj8);
                              cResult[51] = tmp71;
                              cResult[52] = tmp12;
                              cResult[53] = tmp22;
                              cResult[54] = tmp78;
                              tmp75 = tmp78;
                            }
                          }
                          const obj9 = { style: tmp27, pointerEvents: "box-none", children: null };
                          const items2 = [tmp55, tmp67];
                          obj9.children = items2;
                          const tmp74 = React5(React4, obj9);
                          cResult[47] = tmp4.content;
                          cResult[48] = tmp55;
                          cResult[49] = tmp67;
                          cResult[50] = tmp74;
                          tmp71 = tmp74;
                        }
                        const obj10 = { style: tmp61, children: tmp64 };
                        const tmp70 = timestampProducer(React4, obj10);
                        cResult[44] = tmp61;
                        cResult[45] = tmp64;
                        cResult[46] = tmp70;
                        tmp67 = tmp70;
                      }
                      const items3 = [tmp4.actions, tmp60];
                      cResult[38] = tmp4.actions;
                      cResult[39] = tmp60;
                      cResult[40] = items3;
                      tmp61 = items3;
                    }
                  }
                  const obj11 = { style: tmp28, pointerEvents: "none", children: null };
                  const items4 = [tmp33, tmp48, tmp52];
                  obj11.children = items4;
                  const tmp58 = React5(React4, obj11);
                  cResult[32] = tmp4.centeredCopy;
                  cResult[33] = tmp33;
                  cResult[34] = tmp48;
                  cResult[35] = tmp58;
                  tmp55 = tmp58;
                }
                const obj12 = { accessible: true, accessibilityRole: "text", accessibilityLabel: combined, children: tmp44 };
                const tmp51 = timestampProducer(React4, obj12);
                cResult[28] = combined;
                cResult[29] = tmp44;
                cResult[30] = tmp51;
                tmp48 = tmp51;
              }
              const obj13 = { style: tmp4.titleRow, children: null };
              const items5 = [tmp37, tmp41];
              obj13.children = items5;
              const tmp47 = React5(React4, obj13);
              cResult[25] = tmp4.titleRow;
              cResult[26] = tmp41;
              cResult[27] = tmp47;
              tmp44 = tmp47;
            }
            const obj14 = { variant: "display-lg", color: "text-strong", accessible: false, style: tmp4.orbAmount, children: combined1 };
            const tmp43 = timestampProducer(Text_Text.Text, obj14);
            cResult[22] = tmp4.orbAmount;
            cResult[23] = combined1;
            cResult[24] = tmp43;
            tmp41 = tmp43;
          }
          const obj15 = { variant: tmp29, color: "text-brand", style: tmp30, children: tmp31 };
          const tmp35 = timestampProducer(Text_Text.Text, obj15);
          cResult[18] = typeConsolidationEyebrow.variant;
          cResult[19] = tmp30;
          cResult[20] = tmp35;
          tmp33 = tmp35;
        }
        const items6 = [tmp4.headerLabel, typeConsolidationEyebrow.style];
        cResult[14] = typeConsolidationEyebrow.style;
        cResult[15] = tmp4.headerLabel;
        cResult[16] = items6;
        tmp30 = items6;
      }
      const obj16 = { style: React3.absoluteFillObject, pointerEvents: "none", children: null };
      const items7 = [tmp14, tmp18];
      obj16.children = items7;
      const tmp26 = React5(React4, obj16);
      cResult[11] = tmp14;
      cResult[12] = tmp18;
      cResult[13] = tmp26;
      tmp22 = tmp26;
    }
    const obj17 = { style: tmp4.orbsBackground, reducedMotion: stateFromStores };
    const tmp21 = timestampProducer(closure_10, obj17);
    cResult[8] = stateFromStores;
    cResult[9] = tmp4.orbsBackground;
    cResult[10] = tmp21;
    tmp18 = tmp21;
  }
  const items8 = [tmp4.root, style];
  cResult[2] = style;
  cResult[3] = tmp4.root;
  cResult[4] = items8;
  tmp12 = items8;
  const tmpResult = initialize;
}) : (function BountiesScrollRecapPage(orbAmount) {
  orbAmount = orbAmount.orbAmount;
  ({ onClose, style } = orbAmount);
  const tmp = closure_9();
  const typeConsolidationEyebrow = useTypeConsolidationTextTransform.useTypeConsolidationEyebrow("BountiesScrollRecapPage", "text-xs/bold");
  const tmp3 = useSafeAreaInsetsDefault();
  const items = [AccessibilityStore];
  const stateFromStores = initialize.useStateFromStores(items, () => useReducedMotion.useReducedMotion);
  const obj3 = { style: null, pointerEvents: "box-none", children: null };
  const items1 = [tmp.root, style];
  obj3.style = items1;
  const obj4 = { style: React3.absoluteFillObject, pointerEvents: "none", children: null };
  const obj5 = { source: null, style: null, resizeMode: "cover", paused: null, disableFocus: true, preventsDisplaySleepDuringVideoPlayback: false, importantForAccessibility: "no-hide-descendants" };
  obj5.source = { uri: _modDef15248 };
  obj5.style = React3.absoluteFillObject;
  obj5.paused = stateFromStores;
  const items2 = [timestampProducer(common_Video.VideoComponent, obj5), timestampProducer(closure_10, { style: tmp.orbsBackground, reducedMotion: stateFromStores })];
  obj4.children = items2;
  const items3 = [React5(React4, obj4), ];
  const obj8 = { style: tmp.content, pointerEvents: "box-none", children: null };
  const obj9 = { style: tmp.centeredCopy, pointerEvents: "none", children: null };
  const obj10 = { variant: typeConsolidationEyebrow.variant, color: "text-brand", style: null, children: null };
  const items4 = [tmp.headerLabel, typeConsolidationEyebrow.style];
  obj10.style = items4;
  const intl = util.intl;
  obj10.children = intl.string(util.t.d6Rrn6);
  const items5 = [timestampProducer(Text_Text.Text, obj10), , ];
  const obj11 = { accessible: true, accessibilityRole: "text", accessibilityLabel: "+" + orbAmount, children: null };
  const obj12 = { style: tmp.titleRow, children: null };
  const items6 = [timestampProducer(OrbsIcon.OrbsIcon, { size: "lg", color: "icon-strong", accessible: false }), ];
  const obj6 = { uri: _modDef15248 };
  const obj7 = { style: tmp.orbsBackground, reducedMotion: stateFromStores };
  items6[1] = timestampProducer(Text_Text.Text, { variant: "display-lg", color: "text-strong", accessible: false, style: tmp.orbAmount, children: "+" + orbAmount });
  obj12.children = items6;
  obj11.children = React5(React4, obj12);
  items5[1] = timestampProducer(React4, obj11);
  const obj14 = { variant: "text-md/medium", color: "text-muted", style: { textAlign: "center" }, children: null };
  const intl2 = util.intl;
  obj14.children = intl2.string(util.t.x0Ffz3);
  items5[2] = timestampProducer(Text_Text.Text, obj14);
  obj9.children = items5;
  const items7 = [React5(React4, obj9), ];
  const obj15 = { style: null, children: null };
  const items8 = [tmp.actions, ];
  const obj13 = { variant: "display-lg", color: "text-strong", accessible: false, style: tmp.orbAmount, children: "+" + orbAmount };
  items8[1] = { bottom: tmp3.bottom + nativeDefault.space.PX_8 };
  obj15.style = items8;
  const obj17 = { grow: true, variant: "primary", text: null, size: "lg", onPress: null };
  const intl3 = util.intl;
  obj17.text = intl3.string(util.t.i4jeWR);
  obj17.onPress = onClose;
  obj15.children = timestampProducer(components_Button_Button.Button, obj17);
  items7[1] = timestampProducer(React4, obj15);
  obj8.children = items7;
  items3[1] = React5(React4, obj8);
  obj3.children = items3;
  return React5(React4, obj3);
});