// discord_app/modules/orbs_arcade/native/OrbsArcadeRewardChain.tsx
import nativeDefault from "../../../../discord_common/js/packages/tokens/native.tsx";
import _modDef683 from "../../../../_runtime/metro/00683__.js";
import Text_Text from "../../../design/components/Text/native/Text.tsx";
import OrbsArcadeTypes from "../OrbsArcadeTypes.tsx";
import OrbsArcadeRewardUtils from "../utils/OrbsArcadeRewardUtils.tsx";
import OrbsArcadeRewardStatusLabelDefault from "OrbsArcadeRewardStatusLabel.tsx";
import useOrbsArcadeRewardAccentColorDefault from "useOrbsArcadeRewardAccentColor.tsx";
import OrbsArcadeRewardChainCellDefault from "OrbsArcadeRewardChainCell.tsx";
import noop from "../../../../_runtime/metro/00019__.js";

require = fn;
get_ActivityIndicator = fn(17);
({ StyleSheet: closure_4, View: hasOwnProperty } = get_ActivityIndicator);
const jsxProd = fn(21);
({ jsx: metroRequire, jsxs: closure_7 } = jsxProd);
const PX_16 = nativeDefault.space.PX_16;
let closure_8 = 2 * PX_16 + 1;
let start = { x: 0, y: 0 };
const end = { x: 0, y: 1 };
const createStyles = fn(5005);
let obj2 = {
  chain: {
    overflow: "hidden",
    padding: nativeDefault.space.PX_16,
    gap: PX_16,
    borderRadius: nativeDefault.radii.lg,
    borderWidth: 1,
    borderColor: nativeDefault.colors.BORDER_SUBTLE,
    backgroundColor: nativeDefault.colors.BACKGROUND_SURFACE_HIGH,
  },
  divider: null,
  row: null,
  dimmedRow: null,
  rewardCopy: null,
};
let obj3 = {
  overflow: "hidden",
  padding: nativeDefault.space.PX_16,
  gap: PX_16,
  borderRadius: nativeDefault.radii.lg,
  borderWidth: 1,
  borderColor: nativeDefault.colors.BORDER_SUBTLE,
  backgroundColor: nativeDefault.colors.BACKGROUND_SURFACE_HIGH,
};
obj2.divider = {
  height: 1,
  marginHorizontal: -nativeDefault.space.PX_16,
  backgroundColor: nativeDefault.colors.BORDER_SUBTLE,
};
let obj4 = {
  height: 1,
  marginHorizontal: -nativeDefault.space.PX_16,
  backgroundColor: nativeDefault.colors.BORDER_SUBTLE,
};
obj2.row = { flexDirection: "row", alignItems: "center", gap: nativeDefault.space.PX_12 };
obj2.dimmedRow = { opacity: 0.4 };
let obj5 = { flexDirection: "row", alignItems: "center", gap: nativeDefault.space.PX_12 };
obj2.rewardCopy = { flex: 1, gap: nativeDefault.space.PX_4 };
let closure_11 = createStyles.createStyles(obj2);
const ReactCompilerGating = fn(558);
let obj6 = { flex: 1, gap: nativeDefault.space.PX_4 };
const size = fn(2);
const result = size.fileFinishedImporting("modules/orbs_arcade/native/OrbsArcadeRewardChain.tsx");

export default ReactCompilerGating.isReactCompilerEnabled()
  ? function OrbsArcadeRewardChain(grantAnimatedOnOpenRewardIds) {
      const cResult = gameState(576).c(55);
      ({ game, gameState } = grantAnimatedOnOpenRewardIds);
      grantAnimatedOnOpenRewardIds = grantAnimatedOnOpenRewardIds.grantAnimatedOnOpenRewardIds;
      const tmp4 = closure_11();
      importDefault = tmp4;
      let obj = gameState(576);
      const theme = gameState(5012).useThemeContext().theme;
      if (cResult[0] !== game.rewards) {
        const _Symbol = Symbol;
        if (cResult[2] === Symbol.for("react.memo_cache_sentinel")) {
          const fn = function u(scoreTarget, scoreTarget2) {
            return scoreTarget2.scoreTarget - scoreTarget.scoreTarget;
          };
          cResult[2] = fn;
          let tmp6 = fn;
        } else {
          tmp6 = cResult[2];
        }
        let items = [];
        HermesBuiltin.arraySpread(game.rewards, 0);
        const sorted = items.sort(tmp6);
        game = game.rewards;
        cResult[0] = game;
        cResult[1] = sorted;
      } else {
        if (cResult[3] === gameState) {
          if (cResult[4] === arr) {
            dependencyMap = tmp11;
            if (cResult[8] === arr) {
              if (cResult[9] === tmp11) {
                let id = tmp15;
                let first = tmp15;
                if (cResult[10] == null) {
                  first = arr[0];
                }
                const tmp21Result = useOrbsArcadeRewardAccentColorDefault(first);
                if (cResult[13] === arr) {
                  if (cResult[14] === tmp11) {
                    id = undefined;
                    if (tmp15 != null) {
                      id = tmp15.id;
                    }
                    if (id == null) {
                      id = null;
                    }
                    if (cResult[19] === grantAnimatedOnOpenRewardIds) {
                      if (cResult[20] === tmp25) {
                        if (cResult[21] === id) {
                          let tmp31 = cResult[22];
                        }
                        const orbsArcadeRewardChainTimeline = gameState(16929).useOrbsArcadeRewardChainTimeline(tmp31);
                        const timeline = orbsArcadeRewardChainTimeline.timeline;
                        const getGrantAtMs = orbsArcadeRewardChainTimeline.getGrantAtMs;
                        const getFocusRingAtMs = orbsArcadeRewardChainTimeline.getFocusRingAtMs;
                        if (cResult[23] !== tmp21Result) {
                          let obj6 = tmp20(683)(tmp21Result);
                          const cssResult = tmp20(683)(tmp21Result).alpha(0.3).css();
                          cResult[23] = tmp21Result;
                          cResult[24] = cssResult;
                          let tmp33 = cssResult;
                          const alphaResult = tmp20(683)(tmp21Result).alpha(0.3);
                        } else {
                          tmp33 = cResult[24];
                        }
                        if (cResult[25] !== tmp33) {
                          let items1 = [tmp20(587).unsafe_rawColors.TRANSPARENT, tmp33];
                          cResult[25] = tmp33;
                          cResult[26] = items1;
                          let tmp35 = items1;
                        } else {
                          tmp35 = cResult[26];
                        }
                        if (cResult[27] === tmp35) {
                          if (cResult[28] === theme) {
                            let tmp37 = cResult[29];
                          }
                          let id1;
                          if (tmp15 != null) {
                            id1 = tmp15.id;
                          }
                          if (cResult[30] === id1) {
                            if (cResult[31] === getFocusRingAtMs) {
                              if (cResult[32] === getGrantAtMs) {
                                if (cResult[33] === arr) {
                                  if (cResult[34] === tmp11) {
                                    if (cResult[35] === tmp4.dimmedRow) {
                                      if (cResult[36] === tmp4.divider) {
                                        if (cResult[37] === tmp4.rewardCopy) {
                                          if (cResult[38] === tmp4.row) {
                                            if (cResult[39] === timeline) {
                                              let tmp44 = cResult[40];
                                            }
                                            if (cResult[51] === tmp4.chain) {
                                              if (cResult[52] === tmp37) {
                                                if (cResult[53] === tmp44) {
                                                  let tmp50 = cResult[54];
                                                }
                                                return tmp50;
                                              }
                                            }
                                            let obj3 = { style: tmp36, children: null };
                                            let items2 = [tmp37, tmp44];
                                            obj3.children = items2;
                                            const tmp53 = closure_7(getGrantAtMs, obj3);
                                            cResult[51] = tmp4.chain;
                                            cResult[52] = tmp37;
                                            cResult[53] = tmp44;
                                            cResult[54] = tmp53;
                                            tmp50 = tmp53;
                                          }
                                        }
                                      }
                                    }
                                  }
                                }
                              }
                            }
                          }
                          let id2;
                          if (tmp15 != null) {
                            id2 = tmp15.id;
                          }
                          if (cResult[41] === id2) {
                            if (cResult[42] === getFocusRingAtMs) {
                              if (cResult[43] === getGrantAtMs) {
                                if (cResult[44] === tmp11) {
                                  if (cResult[45] === tmp4.dimmedRow) {
                                    if (cResult[46] === tmp4.divider) {
                                      if (cResult[47] === tmp4.rewardCopy) {
                                        if (cResult[48] === tmp4.row) {
                                          if (cResult[49] === timeline) {
                                            let tmp46 = cResult[50];
                                          }
                                          const mapped = arr.map(tmp46);
                                          let id3;
                                          if (tmp15 != null) {
                                            id3 = tmp15.id;
                                          }
                                          cResult[30] = id3;
                                          cResult[31] = getFocusRingAtMs;
                                          cResult[32] = getGrantAtMs;
                                          cResult[33] = arr;
                                          cResult[34] = tmp11;
                                          cResult[35] = tmp4.dimmedRow;
                                          cResult[36] = tmp4.divider;
                                          cResult[37] = tmp4.rewardCopy;
                                          cResult[38] = tmp4.row;
                                          cResult[39] = timeline;
                                          cResult[40] = mapped;
                                          tmp44 = mapped;
                                        }
                                      }
                                    }
                                  }
                                }
                              }
                            }
                          }
                          let id4;
                          if (tmp15 != null) {
                            id4 = tmp15.id;
                          }
                          const fn2 = function z(reward, arg1) {
                            id = undefined;
                            if (id != null) {
                              id = id.id;
                            }
                            let tmp6 = null;
                            if (arg1 > 0) {
                              const obj = { style: closure_1.divider };
                              tmp6 = timestampProducer(hasOwnProperty, obj);
                            }
                            const tmp10 = dependencyMap[arg1] !== OrbsArcadeTypes.OrbsArcadeRewardStatus.LOCKED;
                            const items = [tmp6];
                            const items1 = [closure_1.row];
                            let dimmedRow;
                            if (!tmp10) {
                              if (!tmp11) {
                                dimmedRow = closure_1.dimmedRow;
                              }
                            }
                            const obj2 = { style: items1, children: null };
                            items1[1] = dimmedRow;
                            const obj3 = {
                              reward,
                              status: dependencyMap[arg1],
                              isFocused: reward.id === id,
                              stemLength: null,
                              timeline: null,
                              grantAtMs: null,
                              focusRingAtMs: null,
                            };
                            let tmp18 = null;
                            if (arg1 > 0) {
                              tmp18 = null;
                              if (tmp10) {
                                tmp18 = closure_8;
                              }
                            }
                            const obj4 = { children: null };
                            obj3.stemLength = tmp18;
                            obj3.timeline = timeline;
                            obj3.grantAtMs = getGrantAtMs(reward.id);
                            obj3.focusRingAtMs = getFocusRingAtMs(reward.id);
                            const items2 = [timestampProducer(OrbsArcadeRewardChainCellDefault, obj3)];
                            const obj5 = { style: closure_1.rewardCopy, children: null };
                            const items3 = [
                              timestampProducer(OrbsArcadeRewardStatusLabelDefault, {
                                reward,
                                status: dependencyMap[arg1],
                                color: "text-subtle",
                              }),
                              timestampProducer(Text_Text.Text, {
                                variant: "heading-sm/semibold",
                                color: "text-strong",
                                children: reward.name,
                              }),
                            ];
                            const obj8 = { variant: "text-xxs/medium", color: "text-muted", children: null };
                            const obj6 = { reward, status: dependencyMap[arg1], color: "text-subtle" };
                            const obj7 = {
                              variant: "heading-sm/semibold",
                              color: "text-strong",
                              children: reward.name,
                            };
                            obj8.children = OrbsArcadeRewardUtils.getOrbsArcadeRewardScoreLabel(
                              reward,
                              dependencyMap[arg1],
                            );
                            items3[2] = timestampProducer(Text_Text.Text, obj8);
                            obj5.children = items3;
                            items2[1] = React5(hasOwnProperty, obj5);
                            obj2.children = items2;
                            items[1] = React5(hasOwnProperty, obj2);
                            obj4.children = items;
                            return React5(noop.Fragment, obj4, reward.id);
                          };
                          cResult[41] = id4;
                          cResult[42] = getFocusRingAtMs;
                          cResult[43] = getGrantAtMs;
                          cResult[44] = tmp11;
                          cResult[45] = tmp4.dimmedRow;
                          cResult[46] = tmp4.divider;
                          cResult[47] = tmp4.rewardCopy;
                          cResult[48] = tmp4.row;
                          cResult[49] = timeline;
                          cResult[50] = fn2;
                          tmp46 = fn2;
                        }
                        const tmpResult = gameState(16929);
                        let tmp38 = null;
                        if (!tmpResult2.isThemeLight(theme)) {
                          let obj4 = { style: timeline.absoluteFill, start, end, colors: tmp35 };
                          tmp38 = getFocusRingAtMs(tmp20(5295), obj4);
                        }
                        cResult[27] = tmp35;
                        cResult[28] = theme;
                        cResult[29] = tmp38;
                        tmp37 = tmp38;
                        tmpResult2 = gameState(5012);
                      }
                    }
                    let obj5 = { grantedRewardIds: cResult[15], focusedRewardId: id, grantAnimatedOnOpenRewardIds };
                    cResult[19] = grantAnimatedOnOpenRewardIds;
                    cResult[20] = cResult[15];
                    cResult[21] = id;
                    cResult[22] = obj5;
                    tmp31 = obj5;
                  }
                }
                if (cResult[16] !== tmp11) {
                  class M {
                    constructor(arg0, arg1) {
                      return closure_2[arg1] !== closure_0(closure_2[9]).OrbsArcadeRewardStatus.LOCKED;
                    }
                  }
                  cResult[16] = tmp11;
                  cResult[17] = M;
                  let mapped1 = M;
                } else {
                  class M {
                    constructor(arg0, arg1) {
                      return closure_2[arg1] !== closure_0(closure_2[9]).OrbsArcadeRewardStatus.LOCKED;
                    }
                  }
                }
                const _Symbol2 = Symbol;
                if (cResult[18] === Symbol.for("react.memo_cache_sentinel")) {
                  class I {
                    constructor(arg0) {
                      return grantAnimatedOnOpenRewardIds.id;
                    }
                  }
                  cResult[18] = I;
                } else {
                  class I {
                    constructor(arg0) {
                      return grantAnimatedOnOpenRewardIds.id;
                    }
                  }
                }
                const found = arr.filter(mapped1);
                mapped1 = found.map(I);
                const reversed = mapped1.reverse();
                cResult[13] = arr;
                cResult[14] = tmp11;
                cResult[15] = reversed;
              }
            }
            if (cResult[11] !== cResult[5]) {
              class I {
                constructor(arg0) {
                  return grantAnimatedOnOpenRewardIds.id;
                }
              }
              cResult[11] = tmp11;
              cResult[12] = tmp17;
            } else {
              class I {
                constructor(arg0) {
                  return grantAnimatedOnOpenRewardIds.id;
                }
              }
            }
            const findLastResult = arr.findLast(tmp17);
            cResult[8] = arr;
            cResult[9] = cResult[5];
            cResult[10] = findLastResult;
          }
        }
        if (cResult[6] !== gameState) {
          class I {
            constructor(arg0) {
              return grantAnimatedOnOpenRewardIds.id;
            }
          }
          cResult[6] = gameState;
          cResult[7] = S;
        } else {
          class I {
            constructor(arg0) {
              return grantAnimatedOnOpenRewardIds.id;
            }
          }
        }
        const mapped2 = arr.map(S);
        cResult[3] = gameState;
        cResult[4] = cResult[1];
        cResult[5] = mapped2;
      }
      let obj2 = gameState(5012);
    }
  : function OrbsArcadeRewardChain(game) {
      game = game.game;
      const gameState = game.gameState;
      let memo;
      closure_6 = undefined;
      c7 = undefined;
      c8 = undefined;
      start = undefined;
      const tmp = closure_11();
      dependencyMap = tmp;
      let items = [game.rewards];
      memo = memo.useMemo(() => {
        const items = [...game.rewards];
        return items.sort((scoreTarget, scoreTarget2) => scoreTarget2.scoreTarget - scoreTarget.scoreTarget);
      }, items);
      let items1 = [memo, gameState];
      absoluteFill = memo.useMemo(
        () => memo.map((id) => game(closure_2[8]).getOrbsArcadeRewardStatus(id.id, gameState)),
        items1,
      );
      const findLastResult = memo.findLast(
        (arg0, arg1) => dependencyMap[arg1] === OrbsArcadeTypes.OrbsArcadeRewardStatus.LOCKED,
      );
      c5 = findLastResult;
      let first = findLastResult;
      let obj = game(5012);
      let obj2 = memo;
      const tmp5 = gameState;
      if (findLastResult == null) {
        first = memo[0];
      }
      const tmp6Result = gameState(16916)(first);
      closure_6 = tmp6Result;
      let tmp6 = gameState(16916);
      let obj3 = { grantedRewardIds: null, focusedRewardId: null, grantAnimatedOnOpenRewardIds: null };
      const found = memo.filter(
        (item, index) => dependencyMap[index] !== OrbsArcadeTypes.OrbsArcadeRewardStatus.LOCKED,
      );
      const mapped = found.map((id) => id.id);
      obj3.grantedRewardIds = mapped.reverse();
      let id;
      if (findLastResult != null) {
        id = findLastResult.id;
      }
      if (id == null) {
        id = null;
      }
      obj3.focusedRewardId = id;
      obj3.grantAnimatedOnOpenRewardIds = game.grantAnimatedOnOpenRewardIds;
      const orbsArcadeRewardChainTimeline = game(16929).useOrbsArcadeRewardChainTimeline(obj3);
      ({ timeline: c7, getGrantAtMs: c8, getFocusRingAtMs: c9 } = orbsArcadeRewardChainTimeline);
      let items2 = [tmp6Result];
      let obj4 = { style: tmp.chain, children: null };
      const memo1 = obj2.useMemo(() => {
        const items = [nativeDefault.unsafe_rawColors.TRANSPARENT];
        const obj = _modDef683(closure_6);
        items[1] = _modDef683(closure_6).alpha(0.3).css();
        return items;
      }, items2);
      const tmp12 = c7;
      const tmp13 = c5;
      const tmp2Result = game(16929);
      let tmp14 = null;
      if (!tmp2Result2.isThemeLight(obj.useThemeContext().theme)) {
        let obj5 = { style: absoluteFill.absoluteFill, start, end, colors: memo1 };
        tmp14 = closure_6(tmp5(5295), obj5);
      }
      let items3 = [
        tmp14,
        memo.map((reward, index) => {
          let id;
          if (_undefined != null) {
            id = _undefined.id;
          }
          let tmp6 = null;
          if (index > 0) {
            const obj = { style: closure_2.divider };
            tmp6 = timestampProducer(hasOwnProperty, obj);
          }
          const tmp10 = dependencyMap[index] !== OrbsArcadeTypes.OrbsArcadeRewardStatus.LOCKED;
          const items = [tmp6];
          const items1 = [closure_2.row];
          let dimmedRow;
          if (!tmp10) {
            if (!tmp11) {
              dimmedRow = closure_2.dimmedRow;
            }
          }
          const obj2 = { style: items1, children: null };
          items1[1] = dimmedRow;
          const obj3 = {
            reward,
            status: dependencyMap[index],
            isFocused: reward.id === id,
            stemLength: null,
            timeline: null,
            grantAtMs: null,
            focusRingAtMs: null,
          };
          let tmp18 = null;
          if (index > 0) {
            tmp18 = null;
            if (tmp10) {
              tmp18 = closure_8;
            }
          }
          const obj4 = { children: null };
          obj3.stemLength = tmp18;
          obj3.timeline = timeline;
          obj3.grantAtMs = _undefined2(reward.id);
          obj3.focusRingAtMs = _undefined3(reward.id);
          const items2 = [timestampProducer(OrbsArcadeRewardChainCellDefault, obj3)];
          const obj5 = { style: closure_2.rewardCopy, children: null };
          const items3 = [
            timestampProducer(OrbsArcadeRewardStatusLabelDefault, {
              reward,
              status: dependencyMap[index],
              color: "text-subtle",
            }),
            timestampProducer(Text_Text.Text, {
              variant: "heading-sm/semibold",
              color: "text-strong",
              children: reward.name,
            }),
          ];
          const obj8 = { variant: "text-xxs/medium", color: "text-muted", children: null };
          const obj6 = { reward, status: dependencyMap[index], color: "text-subtle" };
          const obj7 = { variant: "heading-sm/semibold", color: "text-strong", children: reward.name };
          obj8.children = OrbsArcadeRewardUtils.getOrbsArcadeRewardScoreLabel(reward, dependencyMap[index]);
          items3[2] = timestampProducer(Text_Text.Text, obj8);
          obj5.children = items3;
          items2[1] = React5(hasOwnProperty, obj5);
          obj2.children = items2;
          items[1] = React5(hasOwnProperty, obj2);
          obj4.children = items;
          return React5(noop.Fragment, obj4, reward.id);
        }),
      ];
      obj4.children = items3;
      return tmp12(tmp13, obj4);
    };
