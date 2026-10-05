// discord_app/modules/quests/native/BountiesModal/BountiesScrollRecapPage.tsx
import get_initialized from "../../../../../discord_common/js/packages/flux/index.tsx";
import react2 from "../../../../../_runtime/00576_react.js";
import nativeDefault from "../../../../../discord_common/js/packages/tokens/native.tsx";
import intl4 from "../../../../intl/index.native.tsx";
import PlatformUtils from "../../../../utils/PlatformUtils.tsx";
import useSafeAreaInsetsDefault from "../../../safe_area/useSafeAreaInsets.native.tsx";
import Text_Text from "../../../../design/components/Text/native/Text.tsx";
import components_Button_Button from "../../../../design/components/Button/native/Button.native.tsx";
import useTypeConsolidationTextTransform from "../../../design/useTypeConsolidationTextTransform.tsx";
import common_Video from "../../../../components_native/common/Video.tsx";
import APNGPlayer2 from "../../../image/native/APNGPlayer.android.tsx";
import OrbsIcon from "../../../../design/components/Icon/native/redesign/generated/OrbsIcon.tsx";
import _modDef14858 from "../../../../../discord_assets/assets/quests/bounties/_3d_orbs.png.js";
import _modDef14859 from "../../../../../discord_assets/assets/quests/bounties/_3d_orbs.mov.js";
import _modDef14860 from "../../../../../discord_assets/assets/quests/bounties/starfield_bg.mp4.js";
import react from "../../../../../_runtime/00019_react.js";
import react_native from "../../../../../_runtime/00017_react-native.js";
import AccessibilityStore from "../../../a11y/AccessibilityStore.tsx";
import Fragment from "../../../../../_runtime/react/00021_Fragment.js";
import createStyles from "../../../../design/components/Styles/native/createStyles.tsx";
import ReactCompilerGating_mod from "../../../react_compiler/ReactCompilerGating.tsx";
import size from "../../../../../_runtime/metro/00002__.js";

let c3;
let closure_4;
let metroImportDefault;
let metroRequire;
({ StyleSheet: c3, View: closure_4 } = react_native);
({ jsx: metroRequire, jsxs: metroImportDefault } = Fragment);
const lg = nativeDefault.radii.lg;
let closure_9 = createStyles.createStyles(() => {
  let num;
  let rect;
  const obj = {
    root: { overflow: "hidden", borderRadius: lg, backgroundColor: nativeDefault.colors.MOBILE_ACTIONSHEET_BACKGROUND },
    content: { flex: 1, paddingHorizontal: nativeDefault.space.PX_24, justifyContent: "center", alignItems: "center" },
    centeredCopy: { alignItems: "center", width: "100%" },
    orbsBackground: { position: "absolute", top: 0, left: 0, right: 0, height: "40%", zIndex: 1 },
    headerLabel: { paddingBottom: nativeDefault.space.PX_4, textTransform: "uppercase" },
    titleRow: {
      flexDirection: "row",
      alignItems: "center",
      justifyContent: "center",
      paddingBottom: nativeDefault.space.PX_24,
      gap: nativeDefault.space.PX_8,
    },
    actions: rect,
    orbAmount: { marginTop: num, lineHeight: 46 },
  };
  ({ overflow: "hidden", borderRadius: lg, backgroundColor: nativeDefault.colors.MOBILE_ACTIONSHEET_BACKGROUND });
  ({ flex: 1, paddingHorizontal: nativeDefault.space.PX_24, justifyContent: "center", alignItems: "center" });
  ({ paddingBottom: nativeDefault.space.PX_4, textTransform: "uppercase" });
  ({
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    paddingBottom: nativeDefault.space.PX_24,
    gap: nativeDefault.space.PX_8,
  });
  rect = {
    position: "absolute",
    left: nativeDefault.space.PX_24,
    right: nativeDefault.space.PX_24,
    gap: nativeDefault.space.PX_12,
  };
  num = 0;
  const obj7 = PlatformUtils;
  if (obj7.isIOS()) {
    num = 6;
  }
  return obj;
});
let ReactCompilerGating = ReactCompilerGating_mod;
let closure_10 = ReactCompilerGating.isReactCompilerEnabled()
  ? (arg0) => {
      let reducedMotion;
      let style;
      const obj = react2;
      const cResult = obj.c(9);
      ({ style, reducedMotion } = arg0);
      const obj2 = PlatformUtils;
      if (obj2.isAndroid()) {
        let tmp11;
        if (cResult[0] !== !reducedMotion) {
          const obj3 = { url: _modDef14858, style: _false.absoluteFillObject, autoplay: !reducedMotion };
          const APNGPlayer = APNGPlayer2.APNGPlayer;
          const tmp15 = metroRequire(APNGPlayer, obj3);
          cResult[0] = !reducedMotion;
          cResult[1] = tmp15;
          tmp11 = tmp15;
        } else {
          tmp11 = cResult[1];
        }
        if (cResult[2] === style) {
          let tmp16;
          if (cResult[3] === tmp11) {
            tmp16 = cResult[4];
          }
          return tmp16;
        }
        const obj4 = {
          style,
          needsOffscreenAlphaCompositing: true,
          renderToHardwareTextureAndroid: true,
          pointerEvents: "none",
          children: tmp11,
        };
        const tmp19 = metroRequire(React3, obj4);
        cResult[2] = style;
        cResult[3] = tmp11;
        cResult[4] = tmp19;
        tmp16 = tmp19;
      } else {
        let tmp5;
        const _Symbol = Symbol;
        if (cResult[5] === Symbol.for("react.memo_cache_sentinel")) {
          const obj5 = { uri: _modDef14859 };
          cResult[5] = obj5;
          tmp5 = obj5;
        } else {
          tmp5 = cResult[5];
        }
        if (cResult[6] === reducedMotion) {
          let tmp7;
          if (cResult[7] === style) {
            tmp7 = cResult[8];
          }
          return tmp7;
        }
        const obj6 = {
          source: tmp5,
          style,
          resizeMode: "contain",
          paused: reducedMotion,
          disableFocus: true,
          preventsDisplaySleepDuringVideoPlayback: false,
          importantForAccessibility: "no-hide-descendants",
        };
        const tmp9 = metroRequire(common_Video.VideoComponent, obj6);
        cResult[6] = reducedMotion;
        cResult[7] = style;
        cResult[8] = tmp9;
        tmp7 = tmp9;
      }
    }
  : (arg0) => {
      let APNGPlayer;
      let obj3;
      let obj5;
      let reducedMotion;
      let style;
      let tmp3Result;
      ({ style, reducedMotion } = arg0);
      const obj = PlatformUtils;
      if (obj.isAndroid()) {
        const obj2 = {
          style,
          needsOffscreenAlphaCompositing: true,
          renderToHardwareTextureAndroid: true,
          pointerEvents: "none",
          children: metroRequire(APNGPlayer, obj3),
        };
        obj3 = { url: _modDef14858, style: _false.absoluteFillObject, autoplay: !reducedMotion };
        APNGPlayer = APNGPlayer2.APNGPlayer;
        tmp3Result = metroRequire(React3, obj2);
      } else {
        const obj4 = {
          source: obj5,
          style,
          resizeMode: "contain",
          paused: reducedMotion,
          disableFocus: true,
          preventsDisplaySleepDuringVideoPlayback: false,
          importantForAccessibility: "no-hide-descendants",
        };
        obj5 = { uri: _modDef14859 };
        const VideoComponent = common_Video.VideoComponent;
        tmp3Result = metroRequire(VideoComponent, obj4);
      }
      return tmp3Result;
    };
ReactCompilerGating = ReactCompilerGating_mod;
let tmp5 = ReactCompilerGating.isReactCompilerEnabled()
  ? (arg0) => {
      let intl2;
      let items1;
      let items2;
      let items4;
      let items5;
      let items7;
      let onClose;
      let orbAmount;
      let style;
      let tmp8;
      let tmp9;
      let useReducedMotion;
      const obj = react2;
      const cResult = obj.c(55);
      ({ orbAmount, onClose, style } = arg0);
      const tmp4 = closure_9();
      const obj2 = useTypeConsolidationTextTransform;
      const typeConsolidationEyebrow = obj2.useTypeConsolidationEyebrow("BountiesScrollRecapPage", "text-xs/bold");
      const tmp7 = useSafeAreaInsetsDefault();
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
      const tmpResult = get_initialized;
      const stateFromStores = tmpResult.useStateFromStores(tmp8, tmp9);
      if (cResult[2] === style) {
        let tmp12;
        let tmp13;
        let tmp14;
        if (cResult[3] === tmp4.root) {
          tmp12 = cResult[4];
        }
        const _Symbol = Symbol;
        if (cResult[5] === Symbol.for("react.memo_cache_sentinel")) {
          const obj3 = { uri: _modDef14860 };
          cResult[5] = obj3;
          tmp13 = obj3;
        } else {
          tmp13 = cResult[5];
        }
        if (cResult[6] !== stateFromStores) {
          const obj4 = {
            source: tmp13,
            style: _false.absoluteFillObject,
            resizeMode: "cover",
            paused: stateFromStores,
            disableFocus: true,
            preventsDisplaySleepDuringVideoPlayback: false,
            importantForAccessibility: "no-hide-descendants",
          };
          const tmp17 = metroRequire(common_Video.VideoComponent, obj4);
          cResult[6] = stateFromStores;
          cResult[7] = tmp17;
          tmp14 = tmp17;
        } else {
          tmp14 = cResult[7];
        }
        if (cResult[8] === stateFromStores) {
          let tmp18;
          if (cResult[9] === tmp4.orbsBackground) {
            tmp18 = cResult[10];
          }
          if (cResult[11] === tmp14) {
            let tmp22;
            if (cResult[12] === tmp18) {
              tmp22 = cResult[13];
            }
            if (cResult[14] === typeConsolidationEyebrow.style) {
              let tmp30;
              let tmp31;
              if (cResult[15] === tmp4.headerLabel) {
                tmp30 = cResult[16];
              }
              const _Symbol2 = Symbol;
              if (cResult[17] === Symbol.for("react.memo_cache_sentinel")) {
                const intl = intl4.intl;
                const stringResult = intl.string(intl4.t.d6Rrn6);
                cResult[17] = stringResult;
                tmp31 = stringResult;
              } else {
                tmp31 = cResult[17];
              }
              if (cResult[18] === typeConsolidationEyebrow.variant) {
                let tmp33;
                let tmp37;
                if (cResult[19] === tmp30) {
                  tmp33 = cResult[20];
                }
                const _HermesInternal = HermesInternal;
                const combined = "+" + orbAmount;
                const _Symbol3 = Symbol;
                if (cResult[21] === Symbol.for("react.memo_cache_sentinel")) {
                  const tmp39 = metroRequire(OrbsIcon.OrbsIcon, {
                    size: "lg",
                    color: "icon-strong",
                    accessible: false,
                  });
                  cResult[21] = tmp39;
                  tmp37 = tmp39;
                } else {
                  tmp37 = cResult[21];
                }
                const _HermesInternal2 = HermesInternal;
                const combined1 = "+" + orbAmount;
                if (cResult[22] === tmp4.orbAmount) {
                  let tmp41;
                  if (cResult[23] === combined1) {
                    tmp41 = cResult[24];
                  }
                  if (cResult[25] === tmp4.titleRow) {
                    let tmp44;
                    if (cResult[26] === tmp41) {
                      tmp44 = cResult[27];
                    }
                    if (cResult[28] === combined) {
                      let tmp48;
                      let tmp52;
                      if (cResult[29] === tmp44) {
                        tmp48 = cResult[30];
                      }
                      const _Symbol4 = Symbol;
                      if (cResult[31] === Symbol.for("react.memo_cache_sentinel")) {
                        const obj5 = {
                          variant: "text-md/medium",
                          color: "text-muted",
                          style: { textAlign: "center" },
                          children: intl2.string(intl4.t.x0Ffz3),
                        };
                        const Text = Text_Text.Text;
                        intl2 = intl4.intl;
                        const tmp54 = metroRequire(Text, obj5);
                        cResult[31] = tmp54;
                        tmp52 = tmp54;
                      } else {
                        tmp52 = cResult[31];
                      }
                      if (cResult[32] === tmp4.centeredCopy) {
                        if (cResult[33] === tmp33) {
                          let tmp55;
                          let tmp60;
                          if (cResult[34] === tmp48) {
                            tmp55 = cResult[35];
                          }
                          const sum = tmp7.bottom + nativeDefault.space.PX_8;
                          if (cResult[36] !== sum) {
                            const obj6 = { bottom: sum };
                            cResult[36] = sum;
                            cResult[37] = obj6;
                            tmp60 = obj6;
                          } else {
                            tmp60 = cResult[37];
                          }
                          if (cResult[38] === tmp4.actions) {
                            let tmp61;
                            let tmp62;
                            let tmp64;
                            if (cResult[39] === tmp60) {
                              tmp61 = cResult[40];
                            }
                            const _Symbol5 = Symbol;
                            if (cResult[41] === Symbol.for("react.memo_cache_sentinel")) {
                              const intl3 = intl4.intl;
                              const stringResult1 = intl3.string(intl4.t.i4jeWR);
                              cResult[41] = stringResult1;
                              tmp62 = stringResult1;
                            } else {
                              tmp62 = cResult[41];
                            }
                            if (cResult[42] !== onClose) {
                              const obj7 = {
                                grow: true,
                                variant: "primary",
                                text: tmp62,
                                size: "lg",
                                onPress: onClose,
                              };
                              const tmp66 = metroRequire(components_Button_Button.Button, obj7);
                              cResult[42] = onClose;
                              cResult[43] = tmp66;
                              tmp64 = tmp66;
                            } else {
                              tmp64 = cResult[43];
                            }
                            if (cResult[44] === tmp61) {
                              let tmp67;
                              if (cResult[45] === tmp64) {
                                tmp67 = cResult[46];
                              }
                              if (cResult[47] === tmp4.content) {
                                if (cResult[48] === tmp55) {
                                  let tmp71;
                                  if (cResult[49] === tmp67) {
                                    tmp71 = cResult[50];
                                  }
                                  if (cResult[51] === tmp71) {
                                    if (cResult[52] === tmp12) {
                                      let tmp75;
                                      if (cResult[53] === tmp22) {
                                        tmp75 = cResult[54];
                                      }
                                      return tmp75;
                                    }
                                  }
                                  const obj8 = { style: tmp12, pointerEvents: "box-none", children: items1 };
                                  items1 = [tmp22, tmp71];
                                  const tmp78 = metroImportDefault(React3, obj8);
                                  cResult[51] = tmp71;
                                  cResult[52] = tmp12;
                                  cResult[53] = tmp22;
                                  cResult[54] = tmp78;
                                  tmp75 = tmp78;
                                }
                              }
                              const obj9 = { style: tmp27, pointerEvents: "box-none", children: items2 };
                              items2 = [tmp55, tmp67];
                              const tmp74 = metroImportDefault(React3, obj9);
                              cResult[47] = tmp4.content;
                              cResult[48] = tmp55;
                              cResult[49] = tmp67;
                              cResult[50] = tmp74;
                              tmp71 = tmp74;
                            }
                            const obj10 = { style: tmp61, children: tmp64 };
                            const tmp70 = metroRequire(React3, obj10);
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
                      const obj11 = { style: tmp28, pointerEvents: "none", children: items4 };
                      items4 = [tmp33, tmp48, tmp52];
                      const tmp58 = metroImportDefault(React3, obj11);
                      cResult[32] = tmp4.centeredCopy;
                      cResult[33] = tmp33;
                      cResult[34] = tmp48;
                      cResult[35] = tmp58;
                      tmp55 = tmp58;
                    }
                    const obj12 = {
                      accessible: true,
                      accessibilityRole: "text",
                      accessibilityLabel: combined,
                      children: tmp44,
                    };
                    const tmp51 = metroRequire(React3, obj12);
                    cResult[28] = combined;
                    cResult[29] = tmp44;
                    cResult[30] = tmp51;
                    tmp48 = tmp51;
                  }
                  const obj13 = { style: tmp4.titleRow, children: items5 };
                  items5 = [tmp37, tmp41];
                  const tmp47 = metroImportDefault(React3, obj13);
                  cResult[25] = tmp4.titleRow;
                  cResult[26] = tmp41;
                  cResult[27] = tmp47;
                  tmp44 = tmp47;
                }
                const obj14 = {
                  variant: "display-lg",
                  color: "text-strong",
                  accessible: false,
                  style: tmp4.orbAmount,
                  children: combined1,
                };
                const tmp43 = metroRequire(Text_Text.Text, obj14);
                cResult[22] = tmp4.orbAmount;
                cResult[23] = combined1;
                cResult[24] = tmp43;
                tmp41 = tmp43;
              }
              const obj15 = { variant: tmp29, color: "text-brand", style: tmp30, children: tmp31 };
              const tmp35 = metroRequire(Text_Text.Text, obj15);
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
          const obj16 = { style: _false.absoluteFillObject, pointerEvents: "none", children: items7 };
          items7 = [tmp14, tmp18];
          const tmp26 = metroImportDefault(React3, obj16);
          cResult[11] = tmp14;
          cResult[12] = tmp18;
          cResult[13] = tmp26;
          tmp22 = tmp26;
        }
        const obj17 = { style: tmp4.orbsBackground, reducedMotion: stateFromStores };
        const tmp21 = metroRequire(closure_10, obj17);
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
    }
  : (orbAmount) => {
      let Button;
      let intl;
      let intl2;
      let intl3;
      let items1;
      let items2;
      let items3;
      let items4;
      let items5;
      let items6;
      let items7;
      let items8;
      let obj12;
      let obj17;
      let obj6;
      let onClose;
      let style;
      let useReducedMotion;
      orbAmount = orbAmount.orbAmount;
      ({ onClose, style } = orbAmount);
      const tmp = closure_9();
      const obj = useTypeConsolidationTextTransform;
      const typeConsolidationEyebrow = obj.useTypeConsolidationEyebrow("BountiesScrollRecapPage", "text-xs/bold");
      const tmp3 = useSafeAreaInsetsDefault();
      const items = [AccessibilityStore];
      const obj2 = get_initialized;
      const stateFromStores = obj2.useStateFromStores(items, () => useReducedMotion.useReducedMotion);
      const obj3 = { style: items1, pointerEvents: "box-none", children: items3 };
      items1 = [tmp.root, style];
      const obj4 = { style: _false.absoluteFillObject, pointerEvents: "none", children: items2 };
      const obj5 = {
        source: obj6,
        style: _false.absoluteFillObject,
        resizeMode: "cover",
        paused: stateFromStores,
        disableFocus: true,
        preventsDisplaySleepDuringVideoPlayback: false,
        importantForAccessibility: "no-hide-descendants",
      };
      obj6 = { uri: _modDef14860 };
      const VideoComponent = common_Video.VideoComponent;
      items2 = [metroRequire(VideoComponent, obj5)];
      const obj7 = { style: tmp.orbsBackground, reducedMotion: stateFromStores };
      items2[1] = metroRequire(closure_10, obj7);
      items3 = [metroImportDefault(React3, obj4)];
      const obj8 = { style: tmp.content, pointerEvents: "box-none", children: items7 };
      const obj9 = { style: tmp.centeredCopy, pointerEvents: "none", children: items5 };
      const obj10 = {
        variant: typeConsolidationEyebrow.variant,
        color: "text-brand",
        style: items4,
        children: intl.string(intl4.t.d6Rrn6),
      };
      items4 = [tmp.headerLabel, typeConsolidationEyebrow.style];
      const Text = Text_Text.Text;
      intl = intl4.intl;
      items5 = [metroRequire(Text, obj10), ,];
      const obj11 = {
        accessible: true,
        accessibilityRole: "text",
        accessibilityLabel: "+" + orbAmount,
        children: metroImportDefault(React3, obj12),
      };
      obj12 = { style: tmp.titleRow, children: items6 };
      items6 = [metroRequire(OrbsIcon.OrbsIcon, { size: "lg", color: "icon-strong", accessible: false })];
      const obj13 = {
        variant: "display-lg",
        color: "text-strong",
        accessible: false,
        style: tmp.orbAmount,
        children: "+" + orbAmount,
      };
      const Text2 = Text_Text.Text;
      items6[1] = metroRequire(Text2, obj13);
      items5[1] = metroRequire(React3, obj11);
      const obj14 = {
        variant: "text-md/medium",
        color: "text-muted",
        style: { textAlign: "center" },
        children: intl2.string(intl4.t.x0Ffz3),
      };
      const Text3 = Text_Text.Text;
      intl2 = intl4.intl;
      items5[2] = metroRequire(Text3, obj14);
      items7 = [metroImportDefault(React3, obj9)];
      const obj15 = { style: items8, children: metroRequire(Button, obj17) };
      items8 = [tmp.actions, { bottom: tmp3.bottom + nativeDefault.space.PX_8 }];
      obj17 = { grow: true, variant: "primary", text: intl3.string(intl4.t.i4jeWR), size: "lg", onPress: onClose };
      ({ bottom: tmp3.bottom + nativeDefault.space.PX_8 });
      Button = components_Button_Button.Button;
      intl3 = intl4.intl;
      items7[1] = metroRequire(React3, obj15);
      items3[1] = metroImportDefault(React3, obj8);
      return metroImportDefault(React3, obj3);
    };
const result = size.fileFinishedImporting("modules/quests/native/BountiesModal/BountiesScrollRecapPage.tsx");

export const BountiesScrollRecapPage = tmp5;
