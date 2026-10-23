// discord_app/modules/orbs_arcade/native/OrbsArcadeGameTile.tsx
import c from "../../../../_runtime/00576_c.js";
import nativeDefault from "../../../../discord_common/js/packages/tokens/native.tsx";
import ColorUtils from "../../../utils/ColorUtils.tsx";
import native from "../../../../discord_common/js/packages/design/native.tsx";
import LinearGradientDefault from "../../../../_runtime/05244_LinearGradient.js";
import FastImageDefault from "../../../components_native/common/FastImage.tsx";
import OrbsArcadeRewardShelfDefault from "OrbsArcadeRewardShelf.tsx";
import openOrbsArcadeSheets from "openOrbsArcadeSheets.tsx";
import OrbsArcadePlayButtonDefault from "OrbsArcadePlayButton.tsx";
import _modDef16345 from "../../../../_runtime/metro/16345__.js";
import OrbsArcadeGameContextMenuDefault from "OrbsArcadeGameContextMenu.tsx";
import noop from "../../../../_runtime/metro/00019__.js";
import OrbsArcadeStore from "../OrbsArcadeStore.tsx";

require = fn;
get_ActivityIndicator = fn(17);
({ View: c3, StyleSheet } = get_ActivityIndicator);
const ThemeTypes = fn(1087).ThemeTypes;
const jsxProd = fn(21);
({ jsx: metroRequire, jsxs: closure_7 } = jsxProd);
let createStyles = fn(4969);
const result = createStyles.experimental_createToken((theme) => {
  const internal = nativeDefault.internal;
  const semanticColor = internal.resolveSemanticColor(theme.theme, nativeDefault.colors.BACKGROUND_SURFACE_HIGH);
  return ColorUtils.hexOpacityToRgba(semanticColor, 0);
});
createStyles = fn(4969);
const result1 = createStyles.experimental_createToken((theme) => {
  const internal = nativeDefault.internal;
  return internal.resolveSemanticColor(theme.theme, nativeDefault.colors.BACKGROUND_SURFACE_HIGH);
});
createStyles = fn(4969);
let closure_8 = createStyles.createStyleProperties({ gradientStart: result, gradientEnd: result1 });
createStyles = fn(4969);
let obj5 = {
  card: { padding: 0, overflow: "hidden", backgroundColor: nativeDefault.colors.BACKGROUND_SURFACE_HIGH },
  heroImage: { position: "absolute", top: 0, left: 0, right: 0, height: "79.567%", resizeMode: "cover" },
  heroGradient: StyleSheet.absoluteFillObject,
  hero: { minHeight: fn(16318).ORBS_ARCADE_GAME_TILE_MIN_HEIGHT, justifyContent: "flex-end" },
  overflowButton: null,
  content: null,
  copy: null,
  buttonGroup: null,
};
const rect = { position: "absolute", top: nativeDefault.space.PX_16, right: nativeDefault.space.PX_16 };
obj5.overflowButton = rect;
let obj6 = { padding: 0, overflow: "hidden", backgroundColor: nativeDefault.colors.BACKGROUND_SURFACE_HIGH };
obj5.content = { gap: nativeDefault.space.PX_12, padding: nativeDefault.space.PX_16 };
let obj7 = { gap: nativeDefault.space.PX_12, padding: nativeDefault.space.PX_16 };
obj5.copy = { gap: nativeDefault.space.PX_4 };
obj5.buttonGroup = { paddingVertical: 0 };
let closure_9 = createStyles.createStyles(obj5);
let ReactCompilerGating = fn(558);
let closure_10 = ReactCompilerGating.isReactCompilerEnabled()
  ? function OrbsArcadeGameTileContent(game) {
      const cResult = game(576).c(56);
      game = game.game;
      const tmp4 = closure_9();
      const obj = game(576);
      ({ gradientStart, gradientEnd } = closure_8());
      ({ name, asset, instructions } = game);
      let tmp6 = null;
      if (null != instructions) {
        tmp6 = null;
        if ("" !== instructions) {
          tmp6 = instructions;
        }
      }
      if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
        const items = [OrbsArcadeStore];
        cResult[0] = items;
        let first = items;
      } else {
        first = cResult[0];
      }
      if (cResult[1] !== game.id) {
        const fn = function s() {
          const gameStateForGame = OrbsArcadeStore.getGameStateForGame(game.id);
          let enrolledAt;
          if (gameStateForGame != null) {
            enrolledAt = gameStateForGame.enrolledAt;
          }
          return null != enrolledAt;
        };
        const items1 = [game.id];
        cResult[1] = game.id;
        cResult[2] = fn;
        cResult[3] = items1;
        let tmp10 = items1;
        let tmp9 = fn;
      } else {
        tmp9 = cResult[2];
        tmp10 = cResult[3];
      }
      const tmp5 = closure_8();
      const stateFromStores = game(504).useStateFromStores(first, tmp9, tmp10);
      if (cResult[4] === asset) {
        if (cResult[5] === tmp4.heroImage) {
          let tmp12 = cResult[6];
        }
        const _Symbol = Symbol;
        if (cResult[7] === Symbol.for("react.memo_cache_sentinel")) {
          const point = { x: 0, y: 0 };
          const point1 = { x: 0, y: 1 };
          const items2 = [0, 0.55];
          cResult[7] = point;
          cResult[8] = point1;
          cResult[9] = items2;
          let tmp18 = items2;
          let tmp17 = point1;
          let tmp16 = point;
        } else {
          tmp16 = cResult[7];
          tmp17 = cResult[8];
          tmp18 = cResult[9];
        }
        if (cResult[10] === gradientEnd) {
          if (cResult[11] === gradientStart) {
            let tmp19 = cResult[12];
          }
          if (cResult[13] === tmp4.heroGradient) {
            if (cResult[14] === tmp19) {
              let tmp20 = cResult[15];
            }
            if (cResult[16] !== name) {
              const obj2 = { variant: "heading-lg/semibold", color: "text-strong", children: name };
              const tmp26 = closure_6(tmp(5220).Heading, obj2);
              cResult[16] = name;
              cResult[17] = tmp26;
              let tmp24 = tmp26;
            } else {
              tmp24 = cResult[17];
            }
            if (cResult[18] !== tmp6) {
              let tmp28 = null;
              if (null != tmp6) {
                const obj3 = { variant: "text-xs/medium", color: "text-subtle", children: tmp6 };
                tmp28 = closure_6(tmp(5220).Text, obj3);
              }
              cResult[18] = tmp6;
              cResult[19] = tmp28;
              let tmp27 = tmp28;
            } else {
              tmp27 = cResult[19];
            }
            if (cResult[20] === tmp4.copy) {
              if (cResult[21] === tmp24) {
                if (cResult[22] === tmp27) {
                  let tmp30 = cResult[23];
                }
                if (cResult[24] !== game) {
                  const obj4 = { game };
                  const tmp37 = closure_6(OrbsArcadeRewardShelfDefault, obj4);
                  cResult[24] = game;
                  cResult[25] = tmp37;
                  let tmp34 = tmp37;
                } else {
                  tmp34 = cResult[25];
                }
                let str2 = "vertical";
                if (stateFromStores) {
                  str2 = "horizontal";
                }
                if (cResult[26] !== game) {
                  const obj5 = { game, size: "md" };
                  const tmp41 = closure_6(OrbsArcadePlayButtonDefault, obj5);
                  cResult[26] = game;
                  cResult[27] = tmp41;
                  let tmp38 = tmp41;
                } else {
                  tmp38 = cResult[27];
                }
                if (cResult[28] === game.id) {
                  if (cResult[29] === tmp6) {
                    if (cResult[30] === stateFromStores) {
                      if (cResult[32] === tmp4.buttonGroup) {
                        if (cResult[33] === str2) {
                          if (cResult[34] === tmp38) {
                            if (cResult[35] === tmp42) {
                              let tmp48 = cResult[36];
                            }
                            if (cResult[37] === tmp4.content) {
                              if (cResult[38] === tmp30) {
                                if (cResult[39] === tmp34) {
                                  if (cResult[40] === tmp48) {
                                    let tmp51 = cResult[41];
                                  }
                                  if (cResult[42] === tmp4.hero) {
                                    if (cResult[43] === tmp51) {
                                      if (cResult[44] === tmp12) {
                                        if (cResult[45] === tmp20) {
                                          let tmp55 = cResult[46];
                                        }
                                        if (cResult[47] !== game) {
                                          const obj6 = { game };
                                          const tmp62 = closure_6(OrbsArcadeGameContextMenuDefault, obj6);
                                          cResult[47] = game;
                                          cResult[48] = tmp62;
                                          let tmp59 = tmp62;
                                        } else {
                                          tmp59 = cResult[48];
                                        }
                                        if (cResult[49] === tmp4.overflowButton) {
                                          if (cResult[50] === tmp59) {
                                            let tmp63 = cResult[51];
                                          }
                                          if (cResult[52] === tmp4.card) {
                                            if (cResult[53] === tmp55) {
                                              if (cResult[54] === tmp63) {
                                                let tmp67 = cResult[55];
                                              }
                                              return tmp67;
                                            }
                                          }
                                          const obj7 = {
                                            style: tmp4.card,
                                            radius: 12,
                                            border: "subtle",
                                            children: null,
                                          };
                                          const items3 = [tmp55, tmp63];
                                          obj7.children = items3;
                                          const tmp69 = closure_7(tmp(6890).Card, obj7);
                                          cResult[52] = tmp4.card;
                                          cResult[53] = tmp55;
                                          cResult[54] = tmp63;
                                          cResult[55] = tmp69;
                                          tmp67 = tmp69;
                                        }
                                        const obj8 = { style: tmp4.overflowButton, children: tmp59 };
                                        const tmp66 = closure_6(closure_3, obj8);
                                        cResult[49] = tmp4.overflowButton;
                                        cResult[50] = tmp59;
                                        cResult[51] = tmp66;
                                        tmp63 = tmp66;
                                      }
                                    }
                                  }
                                  const obj9 = { style: tmp4.hero, children: null };
                                  const items4 = [tmp12, tmp20, tmp51];
                                  obj9.children = items4;
                                  const tmp58 = closure_7(closure_3, obj9);
                                  cResult[42] = tmp4.hero;
                                  cResult[43] = tmp51;
                                  cResult[44] = tmp12;
                                  cResult[45] = tmp20;
                                  cResult[46] = tmp58;
                                  tmp55 = tmp58;
                                }
                              }
                            }
                            const obj10 = { style: tmp4.content, children: null };
                            const items5 = [tmp30, tmp34, tmp48];
                            obj10.children = items5;
                            const tmp54 = closure_7(closure_3, obj10);
                            cResult[37] = tmp4.content;
                            cResult[38] = tmp30;
                            cResult[39] = tmp34;
                            cResult[40] = tmp48;
                            cResult[41] = tmp54;
                            tmp51 = tmp54;
                          }
                        }
                      }
                      const obj11 = { direction: str2, size: "md", style: tmp4.buttonGroup, children: null };
                      const items6 = [tmp38, cResult[31]];
                      obj11.children = items6;
                      const tmp50 = closure_7(tmp(6681).ButtonGroup, obj11);
                      cResult[32] = tmp4.buttonGroup;
                      cResult[33] = str2;
                      cResult[34] = tmp38;
                      cResult[35] = cResult[31];
                      cResult[36] = tmp50;
                      tmp48 = tmp50;
                    }
                  }
                }
                if (null == tmp6) {
                  let tmp43 = null;
                  if (null != tmp6) {
                    const obj12 = { grow: true, variant: "secondary", text: null, onPress: null };
                    const intl = tmp(1128).intl;
                    obj12.text = intl.string(tmp(1128).t["uz4M/z"]);
                    obj12.onPress = function onPress() {
                      return openOrbsArcadeSheets.openOrbsArcadeHowToPlaySheet(game.id);
                    };
                    tmp43 = closure_6(tmp(5230).Button, obj12);
                  }
                  cResult[28] = game.id;
                  cResult[29] = tmp6;
                  cResult[30] = stateFromStores;
                  cResult[31] = tmp43;
                }
                const obj13 = {
                  variant: "secondary",
                  size: "md",
                  icon: _modDef16345,
                  accessibilityLabel: null,
                  onPress: null,
                };
                const intl2 = tmp(1128).intl;
                obj13.accessibilityLabel = intl2.string(tmp(1128).t["uz4M/z"]);
                obj13.onPress = function onPress() {
                  return openOrbsArcadeSheets.openOrbsArcadeHowToPlaySheet(game.id);
                };
                tmp43 = closure_6(tmp(7944).IconButton, obj13);
              }
            }
            const obj14 = { style: tmp4.copy, children: null };
            const items7 = [tmp24, tmp27];
            obj14.children = items7;
            const tmp33 = closure_7(closure_3, obj14);
            cResult[20] = tmp4.copy;
            cResult[21] = tmp24;
            cResult[22] = tmp27;
            cResult[23] = tmp33;
            tmp30 = tmp33;
          }
          const obj15 = { style: tmp4.heroGradient, start: tmp16, end: tmp17, locations: tmp18, colors: tmp19 };
          const tmp23 = closure_6(LinearGradientDefault, obj15);
          cResult[13] = tmp4.heroGradient;
          cResult[14] = tmp19;
          cResult[15] = tmp23;
          tmp20 = tmp23;
        }
        const items8 = [gradientStart, gradientEnd];
        cResult[10] = gradientEnd;
        cResult[11] = gradientStart;
        cResult[12] = items8;
        tmp19 = items8;
      }
      let tmp13 = null;
      if (null != asset) {
        const obj16 = { source: null, style: null, accessible: false };
        const obj17 = { uri: asset };
        obj16.source = obj17;
        obj16.style = tmp4.heroImage;
        tmp13 = closure_6(FastImageDefault, obj16);
      }
      cResult[4] = asset;
      cResult[5] = tmp4.heroImage;
      cResult[6] = tmp13;
      tmp12 = tmp13;
      const tmpResult = game(504);
    }
  : function OrbsArcadeGameTileContent(game) {
      game = game.game;
      const tmp = closure_9();
      ({ asset, instructions } = game);
      let tmp3 = null;
      ({ gradientStart, gradientEnd } = closure_8());
      if (null != instructions) {
        tmp3 = null;
        if ("" !== instructions) {
          tmp3 = instructions;
        }
      }
      const tmp2 = closure_8();
      const items = [OrbsArcadeStore];
      const items1 = [game.id];
      const stateFromStores = game(504).useStateFromStores(
        items,
        () => {
          const gameStateForGame = OrbsArcadeStore.getGameStateForGame(game.id);
          let enrolledAt;
          if (gameStateForGame != null) {
            enrolledAt = gameStateForGame.enrolledAt;
          }
          return null != enrolledAt;
        },
        items1,
      );
      const obj2 = { style: tmp.card, radius: 12, border: "subtle", children: null };
      const obj3 = { style: tmp.hero, children: null };
      let tmp9 = null;
      if (null != asset) {
        const obj4 = { source: null, style: null, accessible: false };
        const obj5 = { uri: asset };
        obj4.source = obj5;
        obj4.style = tmp.heroImage;
        tmp9 = closure_6(FastImageDefault, obj4);
      }
      const items2 = [tmp9, ,];
      const obj6 = {
        style: tmp.heroGradient,
        start: { x: 0, y: 0 },
        end: { x: 0, y: 1 },
        locations: [0, 0.55],
        colors: null,
      };
      const items3 = [gradientStart, gradientEnd];
      obj6.colors = items3;
      items2[1] = closure_6(LinearGradientDefault, obj6);
      const obj7 = { style: tmp.content, children: null };
      const obj8 = { style: tmp.copy, children: null };
      const items4 = [
        closure_6(game(5220).Heading, { variant: "heading-lg/semibold", color: "text-strong", children: game.name }),
      ];
      let tmp12Result = null;
      if (null != tmp3) {
        const obj9 = { variant: "text-xs/medium", color: "text-subtle", children: tmp3 };
        tmp12Result = closure_6(tmp4(5220).Text, obj9);
      }
      items4[1] = tmp12Result;
      obj8.children = items4;
      const items5 = [closure_7(closure_3, obj8), closure_6(OrbsArcadeRewardShelfDefault, { game })];
      let str2 = "vertical";
      if (stateFromStores) {
        str2 = "horizontal";
      }
      const obj10 = { direction: str2, size: "md", style: tmp.buttonGroup, children: null };
      const items6 = [closure_6(OrbsArcadePlayButtonDefault, { game, size: "md" })];
      if (null != tmp3) {
        if (stateFromStores) {
          const obj11 = {
            variant: "secondary",
            size: "md",
            icon: _modDef16345,
            accessibilityLabel: null,
            onPress: null,
          };
          const intl2 = tmp4(1128).intl;
          obj11.accessibilityLabel = intl2.string(tmp4(1128).t["uz4M/z"]);
          obj11.onPress = function onPress() {
            return openOrbsArcadeSheets.openOrbsArcadeHowToPlaySheet(game.id);
          };
          let tmp12Result2 = closure_6(tmp4(7944).IconButton, obj11);
        }
        items6[1] = tmp12Result2;
        obj10.children = items6;
        items5[2] = closure_7(tmp4(6681).ButtonGroup, obj10);
        obj7.children = items5;
        items2[2] = closure_7(closure_3, obj7);
        obj3.children = items2;
        const items7 = [closure_7(closure_3, obj3)];
        const obj12 = { style: tmp.overflowButton, children: null };
        const obj13 = { game };
        obj12.children = closure_6(OrbsArcadeGameContextMenuDefault, obj13);
        items7[1] = closure_6(closure_3, obj12);
        obj2.children = items7;
        return closure_7(game(6890).Card, obj2);
      }
      tmp12Result2 = null;
      if (null != tmp3) {
        const obj14 = { grow: true, variant: "secondary", text: null, onPress: null };
        const intl = tmp4(1128).intl;
        obj14.text = intl.string(tmp4(1128).t["uz4M/z"]);
        obj14.onPress = function onPress() {
          return openOrbsArcadeSheets.openOrbsArcadeHowToPlaySheet(game.id);
        };
        tmp12Result2 = closure_6(tmp4(5230).Button, obj14);
      }
      const obj = game(504);
    };
ReactCompilerGating = fn(558);
let obj8 = { gap: nativeDefault.space.PX_4 };
const size = fn(2);
const result2 = size.fileFinishedImporting("modules/orbs_arcade/native/OrbsArcadeGameTile.tsx");

export default ReactCompilerGating.isReactCompilerEnabled()
  ? function OrbsArcadeGameTile(game) {
      const cResult = c.c(2);
      game = game.game;
      if (cResult[0] !== game) {
        const obj2 = { theme: ThemeTypes.ONYX, children: null };
        const obj3 = { game };
        obj2.children = timestampProducer(closure_10, obj3);
        const tmp8 = timestampProducer(native.ThemeContextProvider, obj2);
        cResult[0] = game;
        cResult[1] = tmp8;
        let tmp4 = tmp8;
      } else {
        tmp4 = cResult[1];
      }
      return tmp4;
    }
  : function OrbsArcadeGameTile(game) {
      return timestampProducer(native.ThemeContextProvider, {
        theme: ThemeTypes.ONYX,
        children: timestampProducer(closure_10, { game: game.game }),
      });
    };
