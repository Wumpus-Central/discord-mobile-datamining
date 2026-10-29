// === Module 18883: OrbsArcadeGameScreen ===

// Module 18883 (OrbsArcadeGameScreen)
import nativeDefault from "native" /* 587 */;
import Link from "Link" /* 1504 */;
import leaveFrame from "leaveFrame" /* 10879 */;
import noop from "module_19" /* 19 */;
import FramesStore from "FramesStore" /* 6833 */;
import OrbsArcadeStore from "OrbsArcadeStore" /* 16900 */;

require = fn;
const View = fn(17).View;
const ThemeTypes = fn(1084).ThemeTypes;
const FramesConstants = fn(6834);
({ getFrameLaunchParams: closure_8, isLaunched: closure_9, FrameLayoutModes } = FramesConstants);
const jsxProd = fn(21);
({ jsx: c10, jsxs: closure_11 } = jsxProd);
const OrbsArcadeGame = "OrbsArcadeGame";
const presentation = { layoutMode: FrameLayoutModes.FOCUSED, portraitSafeAreasConfig: fn(18884).DEFAULT_PORTRAIT_SAFE_AREAS_CONFIG };
const createStyles = fn(5005);
let obj2 = { container: { flex: 1, backgroundColor: nativeDefault.colors.BLACK }, wrapper: null, header: null };
let obj3 = { flex: 1, backgroundColor: nativeDefault.colors.BLACK };
obj2.wrapper = { flex: 1, overflow: "hidden", borderTopStartRadius: nativeDefault.radii.lg, borderTopEndRadius: nativeDefault.radii.lg, backgroundColor: nativeDefault.colors.BACKGROUND_BASE_LOW };
let rect = { position: "absolute", top: 0, left: 0, right: 0, height: fn(5646).ACTIVITY_PANEL_PORTRAIT_HEADER_HEIGHT, flexDirection: "row", alignItems: "center", justifyContent: "space-between", gap: nativeDefault.space.PX_8, paddingVertical: nativeDefault.space.PX_8, backgroundColor: nativeDefault.colors.VOICE_VIDEO_VIDEO_TILE_BLUR_FALLBACK };
obj2.header = rect;
let closure_14 = createStyles.createStyles(obj2);
const ReactCompilerGating = fn(558);
let obj4 = { flex: 1, overflow: "hidden", borderTopStartRadius: nativeDefault.radii.lg, borderTopEndRadius: nativeDefault.radii.lg, backgroundColor: nativeDefault.colors.BACKGROUND_BASE_LOW };
const size = fn(2);
let result = size.fileFinishedImporting("modules/orbs_arcade/native/OrbsArcadeGameScreen.tsx");

export default ReactCompilerGating.isReactCompilerEnabled() ? (function OrbsArcadeGameScreen(navigation) {
  const cResult = navigation(frameId[14]).c(43);
  navigation = navigation.navigation;
  const route = navigation.route;
  const params = route.params;
  frameId = params.frameId;
  const gameId = params.gameId;
  const claimableRewardIdsAtLaunch = params.claimableRewardIdsAtLaunch;
  const tmp4 = closure_14();
  const rect = route(frameId[15])();
  if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
    const items = [closure_5];
    cResult[0] = items;
    let first = items;
  } else {
    first = cResult[0];
  }
  if (cResult[1] !== frameId) {
    const fn = function p() {
      return FramesStore.getFrame(frameId);
    };
    const items1 = [frameId];
    cResult[1] = frameId;
    cResult[2] = fn;
    cResult[3] = items1;
    let tmp9 = items1;
    let tmp8 = fn;
  } else {
    tmp8 = cResult[2];
    tmp9 = cResult[3];
  }
  let obj = navigation(frameId[14]);
  let tmp5 = route;
  const stateFromStores = navigation(frameId[16]).useStateFromStores(first, tmp8, tmp9);
  closure_5 = tmp11;
  if (cResult[4] === null != stateFromStores) {
    if (cResult[5] === navigation) {
      if (cResult[6] === route.key) {
        let tmp12 = cResult[7];
        let tmp13 = cResult[8];
      }
      const effect = gameId.useEffect(tmp12, tmp13);
      let applicationId;
      if (stateFromStores != null) {
        applicationId = stateFromStores.applicationId;
      }
      if (applicationId == null) {
        applicationId = null;
      }
      tmp5(tmp2[18])(applicationId);
      if (cResult[9] === frameId) {
        if (cResult[10] === gameId) {
          let tmp18 = cResult[11];
          let tmp19 = cResult[12];
        }
        const effect1 = obj3.useEffect(tmp18, tmp19);
        if (cResult[13] === claimableRewardIdsAtLaunch) {
          if (cResult[14] === gameId) {
            if (cResult[15] === navigation) {
              let tmp21 = cResult[16];
              let tmp22 = cResult[17];
            }
            const effect2 = obj3.useEffect(tmp21, tmp22);
            if (cResult[18] !== frameId) {
              const fn2 = function x() {
                return leaveFrame.leaveFrame(frameId);
              };
              cResult[18] = frameId;
              class G {
                constructor() {
                  return navigation.addListener("beforeRemove", () => {
                    closure_0 = claimableRewardIdsAtLaunch;
                    game = game.getGame(gameId);
                    if (null != game) {
                      const _Set = Set;
                      const orbsArcadeClaimableRewards = navigation(frameId[11]).getOrbsArcadeClaimableRewards(game.rewards, obj.getGameStateForGame(gameId));
                      const mapped = orbsArcadeClaimableRewards.map(/* F138155 */ function() { ... });
                      const set = new Set(mapped.filter(/* F138156 */ function() { ... }));
                      if (set.size > 0) {
                        const result = navigation(frameId[12]).openOrbsArcadeRewardUnlockedSheet(gameId, set);
                        const tmp5Result = navigation(frameId[12]);
                      }
                      const obj3 = navigation(frameId[11]);
                    }
                    obj = game;
                  });
                }
              }
              cResult[19] = fn2;
              let tmp24 = fn2;
            } else {
              tmp24 = cResult[19];
            }
            class G {
              constructor() {
                return navigation.addListener("beforeRemove", () => {
                  closure_0 = claimableRewardIdsAtLaunch;
                  game = game.getGame(gameId);
                  if (null != game) {
                    const _Set = Set;
                    const orbsArcadeClaimableRewards = navigation(frameId[11]).getOrbsArcadeClaimableRewards(game.rewards, obj.getGameStateForGame(gameId));
                    const mapped = orbsArcadeClaimableRewards.map(/* F138155 */ function() { ... });
                    const set = new Set(mapped.filter(/* F138156 */ function() { ... }));
                    if (set.size > 0) {
                      const result = navigation(frameId[12]).openOrbsArcadeRewardUnlockedSheet(gameId, set);
                      const tmp5Result = navigation(frameId[12]);
                    }
                    const obj3 = navigation(frameId[11]);
                  }
                  obj = game;
                });
              }
            }
            if (cResult[22] === tmp4.container) {
              if (cResult[23] === tmp25) {
                let tmp26 = cResult[24];
              }
              const _Symbol = Symbol;
              class G {
                constructor() {
                  return navigation.addListener("beforeRemove", () => {
                    closure_0 = claimableRewardIdsAtLaunch;
                    game = game.getGame(gameId);
                    if (null != game) {
                      const _Set = Set;
                      const orbsArcadeClaimableRewards = navigation(frameId[11]).getOrbsArcadeClaimableRewards(game.rewards, obj.getGameStateForGame(gameId));
                      const mapped = orbsArcadeClaimableRewards.map(/* F138155 */ function() { ... });
                      const set = new Set(mapped.filter(/* F138156 */ function() { ... }));
                      if (set.size > 0) {
                        const result = navigation(frameId[12]).openOrbsArcadeRewardUnlockedSheet(gameId, set);
                        const tmp5Result = navigation(frameId[12]);
                      }
                      const obj3 = navigation(frameId[11]);
                    }
                    obj = game;
                  });
                }
              }
              if (cResult[26] === stateFromStores) {
                if (cResult[27] === frameId) {
                  let tmp29 = cResult[28];
                }
                if (cResult[29] === stateFromStores) {
                  if (cResult[30] === gameId) {
                    if (cResult[31] === tmp24) {
                      if (cResult[32] === rect.left) {
                        if (cResult[33] === rect.right) {
                          if (cResult[34] === tmp4.header) {
                            let tmp35 = cResult[35];
                          }
                          if (cResult[36] === tmp4.wrapper) {
                            if (cResult[37] === tmp29) {
                              if (cResult[38] === tmp35) {
                                let tmp37 = cResult[39];
                              }
                              if (cResult[40] === tmp26) {
                                if (cResult[41] === tmp37) {
                                  let tmp40 = cResult[42];
                                }
                                return tmp40;
                              }
                              class G {
                                constructor() {
                                  return navigation.addListener("beforeRemove", () => {
                                    closure_0 = claimableRewardIdsAtLaunch;
                                    game = game.getGame(gameId);
                                    if (null != game) {
                                      const _Set = Set;
                                      const orbsArcadeClaimableRewards = navigation(frameId[11]).getOrbsArcadeClaimableRewards(game.rewards, obj.getGameStateForGame(gameId));
                                      const mapped = orbsArcadeClaimableRewards.map(/* F138155 */ function() { ... });
                                      const set = new Set(mapped.filter(/* F138156 */ function() { ... }));
                                      if (set.size > 0) {
                                        const result = navigation(frameId[12]).openOrbsArcadeRewardUnlockedSheet(gameId, set);
                                        const tmp5Result = navigation(frameId[12]);
                                      }
                                      const obj3 = navigation(frameId[11]);
                                    }
                                    obj = game;
                                  });
                                }
                              }
                              tmp42[0] = ThemeTypes.DARK;
                              const obj2 = { style: null, children: null };
                              class P {
                                constructor() {
                                  return () => {
                                    frame = frame.getFrame(closure_1_2);
                                    let tmp3 = null != frame;
                                    if (tmp3) {
                                      const tmp5 = closure_2_8(frame);
                                      let customId;
                                      if (tmp5 != null) {
                                        customId = tmp5.customId;
                                      }
                                      tmp3 = customId === gameId;
                                    }
                                    if (tmp3) {
                                      navigation(frameId[19]).leaveFrame(closure_1_2);
                                      const obj = navigation(frameId[19]);
                                    }
                                  };
                                }
                              }
                              const items2 = [tmp28, tmp37];
                              obj2.children = items2;
                              tmp42[1] = closure_11(claimableRewardIdsAtLaunch, obj2);
                              const tmp46 = closure_10(tmp(tmp2[25]).ThemeContextProvider, tmp42);
                              cResult[40] = tmp26;
                              cResult[41] = tmp37;
                              cResult[42] = tmp46;
                              tmp40 = tmp46;
                            }
                          }
                          class G {
                            constructor() {
                              return navigation.addListener("beforeRemove", () => {
                                closure_0 = claimableRewardIdsAtLaunch;
                                game = game.getGame(gameId);
                                if (null != game) {
                                  const _Set = Set;
                                  const orbsArcadeClaimableRewards = navigation(frameId[11]).getOrbsArcadeClaimableRewards(game.rewards, obj.getGameStateForGame(gameId));
                                  const mapped = orbsArcadeClaimableRewards.map(/* F138155 */ function() { ... });
                                  const set = new Set(mapped.filter(/* F138156 */ function() { ... }));
                                  if (set.size > 0) {
                                    const result = navigation(frameId[12]).openOrbsArcadeRewardUnlockedSheet(gameId, set);
                                    const tmp5Result = navigation(frameId[12]);
                                  }
                                  const obj3 = navigation(frameId[11]);
                                }
                                obj = game;
                              });
                            }
                          }
                          const obj4 = { style: tmp4.wrapper, children: null };
                          const items3 = [tmp29, tmp35];
                          class P {
                            constructor() {
                              return () => {
                                frame = frame.getFrame(closure_1_2);
                                let tmp3 = null != frame;
                                if (tmp3) {
                                  const tmp5 = closure_2_8(frame);
                                  let customId;
                                  if (tmp5 != null) {
                                    customId = tmp5.customId;
                                  }
                                  tmp3 = customId === gameId;
                                }
                                if (tmp3) {
                                  navigation(frameId[19]).leaveFrame(closure_1_2);
                                  const obj = navigation(frameId[19]);
                                }
                              };
                            }
                          }
                          const tmp39 = closure_11(claimableRewardIdsAtLaunch, obj4);
                          cResult[36] = tmp4.wrapper;
                          cResult[37] = tmp29;
                          cResult[38] = tmp35;
                          cResult[39] = tmp39;
                          tmp37 = tmp39;
                        }
                      }
                    }
                  }
                }
                class G {
                  constructor() {
                    return navigation.addListener("beforeRemove", () => {
                      closure_0 = claimableRewardIdsAtLaunch;
                      game = game.getGame(gameId);
                      if (null != game) {
                        const _Set = Set;
                        const orbsArcadeClaimableRewards = navigation(frameId[11]).getOrbsArcadeClaimableRewards(game.rewards, obj.getGameStateForGame(gameId));
                        const mapped = orbsArcadeClaimableRewards.map(/* F138155 */ function() { ... });
                        const set = new Set(mapped.filter(/* F138156 */ function() { ... }));
                        if (set.size > 0) {
                          const result = navigation(frameId[12]).openOrbsArcadeRewardUnlockedSheet(gameId, set);
                          const tmp5Result = navigation(frameId[12]);
                        }
                        const obj3 = navigation(frameId[11]);
                      }
                      obj = game;
                    });
                  }
                }
                cResult[29] = stateFromStores;
                cResult[30] = gameId;
                class P {
                  constructor() {
                    return () => {
                      frame = frame.getFrame(closure_1_2);
                      let tmp3 = null != frame;
                      if (tmp3) {
                        const tmp5 = closure_2_8(frame);
                        let customId;
                        if (tmp5 != null) {
                          customId = tmp5.customId;
                        }
                        tmp3 = customId === gameId;
                      }
                      if (tmp3) {
                        navigation(frameId[19]).leaveFrame(closure_1_2);
                        const obj = navigation(frameId[19]);
                      }
                    };
                  }
                }
                cResult[32] = rect.left;
                cResult[33] = rect.right;
                cResult[34] = tmp4.header;
                cResult[35] = null;
                tmp35 = tmp36;
              }
              let tmp31 = null;
              if (closure_9(stateFromStores)) {
                const obj5 = { frameId, level: null, presentation: null };
                class G {
                  constructor() {
                    return navigation.addListener("beforeRemove", () => {
                      closure_0 = claimableRewardIdsAtLaunch;
                      game = game.getGame(gameId);
                      if (null != game) {
                        const _Set = Set;
                        const orbsArcadeClaimableRewards = navigation(frameId[11]).getOrbsArcadeClaimableRewards(game.rewards, obj.getGameStateForGame(gameId));
                        const mapped = orbsArcadeClaimableRewards.map(/* F138155 */ function() { ... });
                        const set = new Set(mapped.filter(/* F138156 */ function() { ... }));
                        if (set.size > 0) {
                          const result = navigation(frameId[12]).openOrbsArcadeRewardUnlockedSheet(gameId, set);
                          const tmp5Result = navigation(frameId[12]);
                        }
                        const obj3 = navigation(frameId[11]);
                      }
                      obj = game;
                    });
                  }
                }
                obj5.level = tmp(tmp2[22]).FrameStackLevel.AboveAppContent;
                obj5.presentation = presentation;
                tmp31 = closure_10(tmp33, obj5);
              }
              class P {
                constructor() {
                  return () => {
                    frame = frame.getFrame(closure_1_2);
                    let tmp3 = null != frame;
                    if (tmp3) {
                      const tmp5 = closure_2_8(frame);
                      let customId;
                      if (tmp5 != null) {
                        customId = tmp5.customId;
                      }
                      tmp3 = customId === gameId;
                    }
                    if (tmp3) {
                      navigation(frameId[19]).leaveFrame(closure_1_2);
                      const obj = navigation(frameId[19]);
                    }
                  };
                }
              }
              cResult[27] = frameId;
              cResult[28] = tmp31;
              tmp29 = tmp31;
            }
            const items4 = [tmp4.container, tmp25];
            class P {
              constructor() {
                return () => {
                  frame = frame.getFrame(closure_1_2);
                  let tmp3 = null != frame;
                  if (tmp3) {
                    const tmp5 = closure_2_8(frame);
                    let customId;
                    if (tmp5 != null) {
                      customId = tmp5.customId;
                    }
                    tmp3 = customId === gameId;
                  }
                  if (tmp3) {
                    navigation(frameId[19]).leaveFrame(closure_1_2);
                    const obj = navigation(frameId[19]);
                  }
                };
              }
            }
            cResult[23] = tmp25;
            cResult[24] = items4;
            tmp26 = items4;
          }
        }
        class G {
          constructor() {
            return navigation.addListener("beforeRemove", () => {
              closure_0 = claimableRewardIdsAtLaunch;
              game = game.getGame(gameId);
              if (null != game) {
                const _Set = Set;
                const orbsArcadeClaimableRewards = navigation(frameId[11]).getOrbsArcadeClaimableRewards(game.rewards, obj.getGameStateForGame(gameId));
                const mapped = orbsArcadeClaimableRewards.map(/* F138155 */ function() { ... });
                const set = new Set(mapped.filter(/* F138156 */ function() { ... }));
                if (set.size > 0) {
                  const result = navigation(frameId[12]).openOrbsArcadeRewardUnlockedSheet(gameId, set);
                  const tmp5Result = navigation(frameId[12]);
                }
                const obj3 = navigation(frameId[11]);
              }
              obj = game;
            });
          }
        }
        const items5 = [navigation, gameId, claimableRewardIdsAtLaunch];
        class P {
          constructor() {
            return () => {
              frame = frame.getFrame(closure_1_2);
              let tmp3 = null != frame;
              if (tmp3) {
                const tmp5 = closure_2_8(frame);
                let customId;
                if (tmp5 != null) {
                  customId = tmp5.customId;
                }
                tmp3 = customId === gameId;
              }
              if (tmp3) {
                navigation(frameId[19]).leaveFrame(closure_1_2);
                const obj = navigation(frameId[19]);
              }
            };
          }
        }
        cResult[14] = gameId;
        cResult[15] = navigation;
        cResult[16] = G;
        cResult[17] = items5;
        tmp22 = items5;
        tmp21 = G;
      }
      class P {
        constructor() {
          return () => {
            frame = frame.getFrame(closure_1_2);
            let tmp3 = null != frame;
            if (tmp3) {
              const tmp5 = closure_2_8(frame);
              let customId;
              if (tmp5 != null) {
                customId = tmp5.customId;
              }
              tmp3 = customId === gameId;
            }
            if (tmp3) {
              navigation(frameId[19]).leaveFrame(closure_1_2);
              const obj = navigation(frameId[19]);
            }
          };
        }
      }
      const items6 = [frameId, gameId];
      cResult[9] = frameId;
      cResult[10] = gameId;
      cResult[11] = P;
      cResult[12] = items6;
      tmp19 = items6;
      tmp18 = P;
      let tmp5Result = tmp5(tmp2[18]);
    }
  }
  class T {
    constructor() {
      if (!closure_5) {
        tmp = navigation;
        obj = {};
        tmp2 = closure_0;
        tmp3 = closure_2;
        CommonActions = closure_0(closure_2[17]).CommonActions;
        tmp4 = obj;
        merged = Object.assign(CommonActions.goBack());
        tmp6 = route;
        obj.source = route.key;
        dispatchResult = navigation.dispatch(obj);
      }
      return;
    }
  }
  const items7 = [null != stateFromStores, navigation, route.key];
  cResult[4] = null != stateFromStores;
  cResult[5] = navigation;
  cResult[6] = route.key;
  cResult[7] = T;
  cResult[8] = items7;
  tmp13 = items7;
  tmp12 = T;
  const tmpResult = navigation(frameId[16]);
}) : (function OrbsArcadeGameScreen(navigation) {
  navigation = navigation.navigation;
  const route = navigation.route;
  closure_5 = undefined;
  const params = route.params;
  const frameId = params.frameId;
  const gameId = params.gameId;
  const claimableRewardIdsAtLaunch = params.claimableRewardIdsAtLaunch;
  const tmp = closure_14();
  const rect = route(frameId[15])();
  const items = [closure_5];
  const items1 = [frameId];
  const stateFromStores = navigation(frameId[16]).useStateFromStores(items, () => FramesStore.getFrame(frameId), items1);
  closure_5 = tmp6;
  const items2 = [null != stateFromStores, navigation, route.key];
  const effect = gameId.useEffect(() => {
    if (!closure_5) {
      const obj = {};
      const CommonActions = Link.CommonActions;
      const merged = Object.assign(CommonActions.goBack());
      obj.source = route.key;
      navigation.dispatch(obj);
    }
  }, items2);
  let applicationId;
  let obj = navigation(frameId[16]);
  if (stateFromStores != null) {
    applicationId = stateFromStores.applicationId;
  }
  if (applicationId == null) {
    applicationId = null;
  }
  route(frameId[18])(applicationId);
  const items3 = [frameId, gameId];
  const effect1 = obj2.useEffect(() => () => {
    frame = frame.getFrame(closure_1_2);
    let tmp3 = null != frame;
    if (tmp3) {
      const tmp5 = closure_2_8(frame);
      let customId;
      if (tmp5 != null) {
        customId = tmp5.customId;
      }
      tmp3 = customId === gameId;
    }
    if (tmp3) {
      navigation(frameId[19]).leaveFrame(closure_1_2);
      const obj = navigation(frameId[19]);
    }
  }, items3);
  const items4 = [navigation, gameId, claimableRewardIdsAtLaunch];
  const effect2 = obj2.useEffect(() => navigation.addListener("beforeRemove", () => {
    closure_0 = claimableRewardIdsAtLaunch;
    game = game.getGame(gameId);
    if (null != game) {
      const _Set = Set;
      const orbsArcadeClaimableRewards = navigation(frameId[11]).getOrbsArcadeClaimableRewards(game.rewards, obj.getGameStateForGame(gameId));
      const mapped = orbsArcadeClaimableRewards.map((id) => id.id);
      const set = new Set(mapped.filter((item) => !closure_0.includes(item)));
      if (set.size > 0) {
        const result = navigation(frameId[12]).openOrbsArcadeRewardUnlockedSheet(gameId, set);
        const tmp5Result = navigation(frameId[12]);
      }
      const obj3 = navigation(frameId[11]);
    }
    obj = game;
  }), items4);
  const items5 = [frameId];
  const callback = obj2.useCallback(() => leaveFrame.leaveFrame(frameId), items5);
  let obj3 = { theme: ThemeTypes.DARK, children: null };
  const obj4 = { style: null, children: null };
  const items6 = [tmp.container, { paddingTop: rect.top }];
  obj4.style = items6;
  const items7 = [closure_10(route(frameId[20]), { wakeLockKey: OrbsArcadeGame }), ];
  const obj6 = { style: tmp.wrapper, children: null };
  let tmp14Result = null;
  if (closure_9(stateFromStores)) {
    const obj7 = { frameId, level: tmp4(tmp3[22]).FrameStackLevel.AboveAppContent, presentation };
    tmp14Result = closure_10(tmp2(tmp3[21]), obj7);
    const tmp2Result = tmp2(tmp3[21]);
  }
  const items8 = [tmp14Result, ];
  let tmp15Result = null;
  if (null != stateFromStores) {
    const obj8 = { style: null, children: null };
    const items9 = [tmp.header, ];
    const obj9 = { paddingLeft: tmp2(tmp3[10]).space.PX_8 + rect.left, paddingRight: tmp2(tmp3[10]).space.PX_8 + rect.right };
    items9[1] = obj9;
    obj8.style = items9;
    const obj10 = { gameId, applicationId: stateFromStores.applicationId };
    const items10 = [closure_10(tmp2(tmp3[23]), obj10), ];
    const obj11 = { onPress: callback };
    items10[1] = closure_10(tmp4(tmp3[24]).BaseLeaveActivityButton, obj11);
    obj8.children = items10;
    tmp15Result = closure_11(tmp16, obj8);
  }
  items8[1] = tmp15Result;
  obj6.children = items8;
  items7[1] = closure_11(claimableRewardIdsAtLaunch, obj6);
  obj4.children = items7;
  obj3.children = closure_11(claimableRewardIdsAtLaunch, obj4);
  return closure_10(navigation(frameId[25]).ThemeContextProvider, obj3);
});