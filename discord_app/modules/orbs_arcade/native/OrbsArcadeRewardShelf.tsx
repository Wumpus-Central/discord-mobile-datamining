// === Module 16306: OrbsArcadeRewardShelf ===

// Module 16306 (OrbsArcadeRewardShelf)
import c from "c" /* 576 */;
import nativeDefault from "native" /* 587 */;
import _modDef683 from "module_683" /* 683 */;
import util from "util" /* 1128 */;
import Text_Text from "Text/Text" /* 5220 */;
import LinearGradientDefault from "LinearGradient" /* 5244 */;
import useCountdownDefault from "useCountdown" /* 7538 */;
import NitroCoinSpotIllustration from "NitroCoinSpotIllustration" /* 9408 */;
import OrbsArcadeTypes from "OrbsArcadeTypes" /* 16299 */;
import OrbsArcadeRewardUtils from "OrbsArcadeRewardUtils" /* 16304 */;
import OrbsArcadeRewardPreviewDefault from "OrbsArcadeRewardPreview" /* 16307 */;
import OrbsArcadeRewardStatusLabelDefault from "OrbsArcadeRewardStatusLabel" /* 16308 */;
import ChestLogoSpotIllustration from "ChestLogoSpotIllustration" /* 16309 */;
import useOrbsArcadeRewardAccentColorDefault from "useOrbsArcadeRewardAccentColor" /* 16313 */;
import noop from "module_19" /* 19 */;
import OrbsArcadeStore from "OrbsArcadeStore" /* 16298 */;

require = fn;
function formatTimeUntil(tmp3Result) {
  ({ days, hours } = tmp3Result);
  if (days > 0) {
    const intl3 = util.intl;
    const obj2 = { days };
    let formatToPlainStringResult = intl3.formatToPlainString(util.t.GBLpQ8, obj2);
  } else if (hours > 0) {
    const intl2 = util.intl;
    const obj3 = { hours };
    formatToPlainStringResult = intl2.formatToPlainString(util.t.rhY1Rs, obj3);
  } else {
    const intl = util.intl;
    const obj = { minutes: null };
    const _Math = Math;
    obj.minutes = Math.max(tmp, 1);
    formatToPlainStringResult = intl.formatToPlainString(util.t["XIGt+W"], obj);
  }
  return formatToPlainStringResult;
}
get_ActivityIndicator = fn(17);
({ StyleSheet: closure_4, View: hasOwnProperty } = get_ActivityIndicator);
const jsxProd = fn(21);
({ jsx: closure_7, jsxs: closure_8, Fragment: closure_9 } = jsxProd);
let c10 = 50;
let items = [nativeDefault.unsafe_rawColors.TRANSPARENT, "rgba(16, 142, 77, 0.5)"];
let createStyles = fn(4969);
let obj2 = { rewardShelf: { flexDirection: "row", alignItems: "center", gap: nativeDefault.space.PX_12, overflow: "hidden", paddingHorizontal: nativeDefault.space.PX_10, paddingVertical: nativeDefault.space.PX_6, borderRadius: nativeDefault.radii.lg, borderWidth: 1, borderColor: nativeDefault.colors.BORDER_SUBTLE, backgroundColor: nativeDefault.colors.BACKGROUND_SURFACE_HIGH }, rewardShelfCopy: { flex: 1 }, allRewardsClaimedShelf: { backgroundColor: "rgba(151, 151, 159, 0.08)" }, rewardShelfGlowContainer: null, chestLogo: null, chestLogoMirrored: null };
let obj4 = { borderRadius: nativeDefault.radii.lg, boxShadow: null };
let items1 = [{ offsetX: 0, offsetY: 0, blurRadius: 10, color: "#0E482B" }];
obj4.boxShadow = items1;
obj2.rewardShelfGlowContainer = obj4;
obj2.chestLogo = { width: 50, height: 50, overflow: "hidden", alignItems: "center", justifyContent: "center" };
let obj5 = { transform: null };
let items2 = [{ scaleX: -1 }];
obj5.transform = items2;
obj2.chestLogoMirrored = obj5;
let closure_12 = createStyles.createStyles(obj2);
let ReactCompilerGating = fn(558);
let closure_13 = ReactCompilerGating.isReactCompilerEnabled() ? (function OrbsArcadeFocusedRewardShelfContent(arg0) {
  const cResult = c.c(23);
  ({ reward, gameState } = arg0);
  const tmp4 = closure_12();
  if (cResult[0] === gameState) {
    if (cResult[1] === reward.id) {
      let tmp5 = cResult[2];
    }
    if (cResult[3] !== reward) {
      const obj2 = { reward, size: v50 };
      const tmp11 = React5(OrbsArcadeRewardPreviewDefault, obj2);
      cResult[3] = reward;
      cResult[4] = tmp11;
      let tmp7 = tmp11;
    } else {
      tmp7 = cResult[4];
    }
    if (cResult[5] === reward) {
      if (cResult[6] === tmp5) {
        let tmp13 = cResult[7];
      }
      if (cResult[8] !== reward.name) {
        const obj3 = { variant: "heading-sm/semibold", color: "text-subtle", children: reward.name };
        const tmp19 = React5(Text_Text.Text, obj3);
        cResult[8] = reward.name;
        cResult[9] = tmp19;
        let tmp17 = tmp19;
      } else {
        tmp17 = cResult[9];
      }
      if (cResult[10] === reward) {
        if (cResult[11] === tmp5) {
          let tmp20 = cResult[12];
        }
        if (cResult[13] !== tmp20) {
          const obj4 = { variant: "text-xs/medium", color: "text-muted", children: tmp20 };
          const tmp24 = React5(Text_Text.Text, obj4);
          cResult[13] = tmp20;
          cResult[14] = tmp24;
          let tmp22 = tmp24;
        } else {
          tmp22 = cResult[14];
        }
        if (cResult[15] === tmp4.rewardShelfCopy) {
          if (cResult[16] === tmp13) {
            if (cResult[17] === tmp17) {
              if (cResult[18] === tmp22) {
                let tmp25 = cResult[19];
              }
              if (cResult[20] === tmp7) {
                if (cResult[21] === tmp25) {
                  let tmp29 = cResult[22];
                }
                return tmp29;
              }
              const obj5 = { children: null };
              items = [tmp7, tmp25];
              obj5.children = items;
              const tmp32 = closure_1_8(React6, obj5);
              cResult[20] = tmp7;
              cResult[21] = tmp25;
              cResult[22] = tmp32;
              tmp29 = tmp32;
            }
          }
        }
        const obj6 = { style: tmp12, children: null };
        const items1 = [tmp13, tmp17, tmp22];
        obj6.children = items1;
        const tmp28 = closure_1_8(hasOwnProperty, obj6);
        cResult[15] = tmp4.rewardShelfCopy;
        cResult[16] = tmp13;
        cResult[17] = tmp17;
        cResult[18] = tmp22;
        cResult[19] = tmp28;
        tmp25 = tmp28;
      }
      const orbsArcadeRewardScoreLabel = OrbsArcadeRewardUtils.getOrbsArcadeRewardScoreLabel(reward, tmp5);
      cResult[10] = reward;
      cResult[11] = tmp5;
      cResult[12] = orbsArcadeRewardScoreLabel;
      tmp20 = orbsArcadeRewardScoreLabel;
      const tmpResult = OrbsArcadeRewardUtils;
    }
    const obj7 = { reward, status: tmp5, color: "text-default" };
    const tmp16 = React5(OrbsArcadeRewardStatusLabelDefault, obj7);
    cResult[5] = reward;
    cResult[6] = tmp5;
    cResult[7] = tmp16;
    tmp13 = tmp16;
  }
  const orbsArcadeRewardStatus = OrbsArcadeRewardUtils.getOrbsArcadeRewardStatus(reward.id, gameState);
  cResult[0] = gameState;
  cResult[1] = reward.id;
  cResult[2] = orbsArcadeRewardStatus;
  tmp5 = orbsArcadeRewardStatus;
  const tmpResult2 = OrbsArcadeRewardUtils;
}) : (function OrbsArcadeFocusedRewardShelfContent(reward) {
  reward = reward.reward;
  const tmp = closure_12();
  const orbsArcadeRewardStatus = OrbsArcadeRewardUtils.getOrbsArcadeRewardStatus(reward.id, reward.gameState);
  const obj2 = { children: null };
  items = [React5(OrbsArcadeRewardPreviewDefault, { reward, size: v50 }), ];
  const obj4 = { style: tmp.rewardShelfCopy, children: null };
  const items1 = [React5(OrbsArcadeRewardStatusLabelDefault, { reward, status: orbsArcadeRewardStatus, color: "text-default" }), React5(Text_Text.Text, { variant: "heading-sm/semibold", color: "text-subtle", children: reward.name }), ];
  const obj6 = { variant: "text-xs/medium", color: "text-muted", children: null };
  const obj3 = { reward, size: v50 };
  const obj5 = { variant: "heading-sm/semibold", color: "text-subtle", children: reward.name };
  obj6.children = OrbsArcadeRewardUtils.getOrbsArcadeRewardScoreLabel(reward, orbsArcadeRewardStatus);
  items1[2] = React5(Text_Text.Text, obj6);
  obj4.children = items1;
  items[1] = closure_1_8(hasOwnProperty, obj4);
  obj2.children = items;
  return closure_1_8(React6, obj2);
});
createStyles = fn(4969);
let closure_14 = createStyles.createStyles((width) => ({ nitroCoin: { width, height: width, alignItems: "center", justifyContent: "center" } }));
ReactCompilerGating = fn(558);
let closure_15 = ReactCompilerGating.isReactCompilerEnabled() ? (function OrbsArcadePileReward(arg0) {
  const cResult = c.c(8);
  ({ reward, size } = arg0);
  const tmp4 = closure_14(size);
  if (reward.type !== OrbsArcadeTypes.OrbsArcadeRewardType.FRACTIONAL_PREMIUM) {
    if (cResult[0] === reward) {
      if (cResult[1] === size) {
        let tmp12 = cResult[2];
      }
      return tmp12;
    }
    const obj2 = { reward, size };
    const tmp15 = React5(OrbsArcadeRewardPreviewDefault, obj2);
    cResult[0] = reward;
    cResult[1] = size;
    cResult[2] = tmp15;
    tmp12 = tmp15;
  } else {
    const result = 0.85 * size;
    if (cResult[3] !== result) {
      const obj3 = { height: result };
      const tmp7 = React5(NitroCoinSpotIllustration.NitroCoinSpotIllustration, obj3);
      cResult[3] = result;
      cResult[4] = tmp7;
      let tmp5 = tmp7;
    } else {
      tmp5 = cResult[4];
    }
    if (cResult[5] === tmp4.nitroCoin) {
      if (cResult[6] === tmp5) {
        let tmp8 = cResult[7];
      }
      return tmp8;
    }
    const obj4 = { style: tmp4.nitroCoin, children: tmp5 };
    const tmp11 = React5(hasOwnProperty, obj4);
    cResult[5] = tmp4.nitroCoin;
    cResult[6] = tmp5;
    cResult[7] = tmp11;
    tmp8 = tmp11;
  }
}) : (function OrbsArcadePileReward(arg0) {
  ({ reward, size } = arg0);
  if (reward.type !== OrbsArcadeTypes.OrbsArcadeRewardType.FRACTIONAL_PREMIUM) {
    const obj2 = { reward, size };
    let tmp6 = React5(OrbsArcadeRewardPreviewDefault, obj2);
  } else {
    const obj = { style: tmp.nitroCoin, children: null };
    const obj3 = { height: 0.85 * size };
    obj.children = React5(NitroCoinSpotIllustration.NitroCoinSpotIllustration, obj3);
    tmp6 = React5(hasOwnProperty, obj);
  }
  return tmp6;
});
ReactCompilerGating = fn(558);
let closure_17 = ReactCompilerGating.isReactCompilerEnabled() ? (function OrbsArcadeAllRewardsClaimedShelfContent(windowEndsAt) {
  const cResult = c.c(18);
  windowEndsAt = windowEndsAt.windowEndsAt;
  const tmp4 = closure_12();
  if (cResult[0] !== windowEndsAt) {
    let num2 = 0;
    if (null != windowEndsAt) {
      const _Date = Date;
      num2 = new Date(windowEndsAt);
    }
    cResult[0] = windowEndsAt;
    cResult[1] = num2;
    let tmp5 = num2;
  } else {
    tmp5 = cResult[1];
  }
  const tmp11 = useCountdownDefault(tmp5, 60000, undefined, null == windowEndsAt);
  if (cResult[2] === Symbol.for("react.memo_cache_sentinel")) {
    const obj2 = { accessible: false, height: v50 };
    const tmp15 = React5(ChestLogoSpotIllustration.ChestLogoSpotIllustration, obj2);
    cResult[2] = tmp15;
    let tmp12 = tmp15;
  } else {
    tmp12 = cResult[2];
  }
  if (cResult[3] !== tmp4.chestLogoMirrored) {
    const obj3 = { style: tmp4.chestLogoMirrored, children: tmp12 };
    const tmp19 = React5(hasOwnProperty, obj3);
    cResult[3] = tmp4.chestLogoMirrored;
    cResult[4] = tmp19;
    let tmp16 = tmp19;
  } else {
    tmp16 = cResult[4];
  }
  if (cResult[5] === tmp4.chestLogo) {
    if (cResult[6] === tmp16) {
      let tmp20 = cResult[7];
    }
    const _Symbol = Symbol;
    if (cResult[8] === Symbol.for("react.memo_cache_sentinel")) {
      const obj4 = { variant: "heading-sm/semibold", color: "text-default", children: null };
      const intl = util.intl;
      obj4.children = intl.string(util.t["/AJCN+"]);
      const tmp24 = React5(Text_Text.Text, obj4);
      cResult[8] = tmp24;
      let tmp22 = tmp24;
    } else {
      tmp22 = cResult[8];
    }
    if (cResult[9] === tmp11) {
      if (cResult[10] === windowEndsAt) {
        let tmp25 = cResult[11];
      }
      if (cResult[12] === tmp4.rewardShelfCopy) {
        if (cResult[13] === tmp25) {
          let tmp29 = cResult[14];
        }
        if (cResult[15] === tmp20) {
          if (cResult[16] === tmp29) {
            let tmp33 = cResult[17];
          }
          return tmp33;
        }
        const obj5 = { children: null };
        items = [tmp20, tmp29];
        obj5.children = items;
        const tmp36 = closure_1_8(React6, obj5);
        cResult[15] = tmp20;
        cResult[16] = tmp29;
        cResult[17] = tmp36;
        tmp33 = tmp36;
      }
      const obj6 = { style: tmp4.rewardShelfCopy, children: null };
      const items1 = [tmp22, tmp25];
      obj6.children = items1;
      const tmp32 = closure_1_8(hasOwnProperty, obj6);
      cResult[12] = tmp4.rewardShelfCopy;
      cResult[13] = tmp25;
      cResult[14] = tmp32;
      tmp29 = tmp32;
    }
    let tmp26 = null;
    if (null != windowEndsAt) {
      const obj7 = { variant: "text-xs/medium", color: "text-muted", children: null };
      const intl2 = util.intl;
      const obj8 = { duration: formatTimeUntil(tmp11) };
      obj7.children = intl2.formatToPlainString(util.t.fkzORZ, obj8);
      tmp26 = React5(Text_Text.Text, obj7);
    }
    cResult[9] = tmp11;
    cResult[10] = windowEndsAt;
    cResult[11] = tmp26;
    tmp25 = tmp26;
  }
  const tmp21 = React5(hasOwnProperty, { style: tmp4.chestLogo, children: tmp16 });
  cResult[5] = tmp4.chestLogo;
  cResult[6] = tmp16;
  cResult[7] = tmp21;
  tmp20 = tmp21;
  const obj9 = { style: tmp4.chestLogo, children: tmp16 };
}) : (function OrbsArcadeAllRewardsClaimedShelfContent(windowEndsAt) {
  windowEndsAt = windowEndsAt.windowEndsAt;
  const tmp = closure_12();
  if (null != windowEndsAt) {
    const _Date = Date;
    const num = new Date(windowEndsAt);
  }
  const obj = { style: tmp.chestLogo, children: null };
  const obj2 = { style: tmp.chestLogoMirrored, children: null };
  obj2.children = React5(ChestLogoSpotIllustration.ChestLogoSpotIllustration, { accessible: false, height: v50 });
  obj.children = React5(hasOwnProperty, obj2);
  items = [React5(hasOwnProperty, obj), ];
  const obj4 = { style: tmp.rewardShelfCopy, children: null };
  const obj5 = { variant: "heading-sm/semibold", color: "text-default", children: null };
  const intl = util.intl;
  obj5.children = intl.string(util.t["/AJCN+"]);
  const items1 = [React5(Text_Text.Text, obj5), ];
  let tmp11Result = null;
  if (null != windowEndsAt) {
    const obj6 = { variant: "text-xs/medium", color: "text-muted", children: null };
    const intl2 = util.intl;
    const obj7 = { duration: formatTimeUntil(tmp3Result) };
    obj6.children = intl2.formatToPlainString(util.t.fkzORZ, obj7);
    tmp11Result = React5(Text_Text.Text, obj6);
  }
  const obj8 = { children: null };
  items1[1] = tmp11Result;
  obj4.children = items1;
  items[1] = closure_1_8(hasOwnProperty, obj4);
  obj8.children = items;
  return closure_1_8(React6, obj8);
});
ReactCompilerGating = fn(558);
let obj3 = { flexDirection: "row", alignItems: "center", gap: nativeDefault.space.PX_12, overflow: "hidden", paddingHorizontal: nativeDefault.space.PX_10, paddingVertical: nativeDefault.space.PX_6, borderRadius: nativeDefault.radii.lg, borderWidth: 1, borderColor: nativeDefault.colors.BORDER_SUBTLE, backgroundColor: nativeDefault.colors.BACKGROUND_SURFACE_HIGH };
const size = fn(2);
let result = size.fileFinishedImporting("modules/orbs_arcade/native/OrbsArcadeRewardShelf.tsx");

export default ReactCompilerGating.isReactCompilerEnabled() ? (function OrbsArcadeRewardShelf(game) {
  const cResult = game(576).c(37);
  game = game.game;
  let rewardShelfCopy = closure_12();
  const rewards = game.rewards;
  if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
    items = [OrbsArcadeStore];
    cResult[0] = items;
    let first = items;
  } else {
    first = cResult[0];
  }
  if (cResult[1] !== game.id) {
    const fn = function c() {
      return OrbsArcadeStore.getGameStateForGame(game.id);
    };
    const items1 = [game.id];
    cResult[1] = game.id;
    cResult[2] = fn;
    cResult[3] = items1;
    let tmp7 = items1;
    let tmp6 = fn;
  } else {
    tmp6 = cResult[2];
    tmp7 = cResult[3];
  }
  const obj = game(576);
  const stateFromStores = game(504).useStateFromStores(first, tmp6, tmp7);
  if (cResult[4] !== rewards) {
    const _Symbol = Symbol;
    if (cResult[6] === Symbol.for("react.memo_cache_sentinel")) {
      const fn2 = function _(arg0, scoreTarget) {
        let tmp = arg0;
        if (null == arg0) {
          tmp = scoreTarget;
        }
        return tmp;
      };
      cResult[6] = fn2;
      let tmp10 = fn2;
    } else {
      tmp10 = cResult[6];
    }
    const reduced = rewards.reduce(tmp10, undefined);
    cResult[4] = rewards;
    cResult[5] = reduced;
  } else {
    if (cResult[7] === stateFromStores) {
      if (cResult[8] === rewards) {
        let tmp13 = cResult[9];
      }
      let tmp16 = tmp13;
      if (tmp13 == null) {
        tmp16 = tmp9;
      }
      const tmp18 = useOrbsArcadeRewardAccentColorDefault(tmp16);
      let enrolledAt;
      if (stateFromStores != null) {
        enrolledAt = stateFromStores.enrolledAt;
      }
      let tmp22 = tmp21;
      if (null != enrolledAt) {
        tmp22 = rewards.length > 0;
      }
      if (tmp22) {
        tmp22 = null == tmp13;
      }
      let expiresAt;
      if (stateFromStores != null) {
        expiresAt = stateFromStores.expiresAt;
      }
      if (expiresAt == null) {
        expiresAt = null;
      }
      let tmp24 = null != expiresAt;
      if (tmp24) {
        let tmp25 = null == game.endsAt;
        if (!tmp25) {
          const _Date = Date;
          const _Date2 = Date;
          const parsed = Date.parse(expiresAt);
          tmp25 = parsed < Date.parse(game.endsAt);
        }
        tmp24 = tmp25;
      }
      if (cResult[10] !== tmp18) {
        const obj4 = _modDef683(tmp18);
        const cssResult = _modDef683(tmp18).alpha(0.5).css();
        cResult[10] = tmp18;
        cResult[11] = cssResult;
        let tmp27 = cssResult;
        const alphaResult = _modDef683(tmp18).alpha(0.5);
      } else {
        tmp27 = cResult[11];
      }
      if (cResult[12] !== tmp27) {
        const items2 = [nativeDefault.unsafe_rawColors.TRANSPARENT, tmp27];
        cResult[12] = tmp27;
        cResult[13] = items2;
        let tmp29 = items2;
      } else {
        tmp29 = cResult[13];
      }
      if (tmp22) {
        tmp29 = items;
      }
      if (0 === rewards.length) {
        return null;
      } else {
        if (tmp22) {
          const rewardShelfGlowContainer = rewardShelfCopy.rewardShelfGlowContainer;
        }
        let prop;
        if (tmp22) {
          prop = rewardShelfCopy.allRewardsClaimedShelf;
        }
        if (cResult[14] === rewardShelfCopy.rewardShelf) {
          if (cResult[15] === prop) {
            let tmp31 = cResult[16];
          }
          const _Symbol2 = Symbol;
          if (cResult[17] === Symbol.for("react.memo_cache_sentinel")) {
            const point = { x: 0, y: 0 };
            const point1 = { x: 0, y: 1 };
            cResult[17] = point;
            cResult[18] = point1;
            let tmp33 = point1;
            let tmp32 = point;
          } else {
            tmp32 = cResult[17];
            tmp33 = cResult[18];
          }
          if (cResult[19] !== tmp29) {
            const obj2 = { style: closure_4.absoluteFill, start: tmp32, end: tmp33, colors: tmp29 };
            const tmp37 = closure_7(LinearGradientDefault, obj2);
            cResult[19] = tmp29;
            cResult[20] = tmp37;
            let tmp34 = tmp37;
          } else {
            tmp34 = cResult[20];
          }
          if (cResult[21] === tmp22) {
            if (cResult[22] === tmp16) {
              if (cResult[23] === stateFromStores) {
                if (cResult[24] === tmp24) {
                  if (cResult[25] === tmp21) {
                    if (cResult[26] === rewards) {
                      if (cResult[27] === rewardShelfCopy.rewardShelfCopy) {
                        if (cResult[28] === expiresAt) {
                          if (cResult[30] === tmp31) {
                            if (cResult[31] === tmp34) {
                              if (cResult[32] === tmp38) {
                                let tmp50 = cResult[33];
                              }
                              if (cResult[34] === tmp50) {
                                if (cResult[35] === rewardShelfGlowContainer) {
                                  let tmp54 = cResult[36];
                                }
                                return tmp54;
                              }
                              const obj3 = { style: rewardShelfGlowContainer, children: tmp50 };
                              const tmp57 = closure_7(closure_5, obj3);
                              cResult[34] = tmp50;
                              cResult[35] = rewardShelfGlowContainer;
                              cResult[36] = tmp57;
                              tmp54 = tmp57;
                            }
                          }
                          const obj5 = { style: tmp31, children: null };
                          const items3 = [tmp34, cResult[29]];
                          obj5.children = items3;
                          const tmp53 = closure_8(closure_5, obj5);
                          cResult[30] = tmp31;
                          cResult[31] = tmp34;
                          cResult[32] = cResult[29];
                          cResult[33] = tmp53;
                          tmp50 = tmp53;
                        }
                      }
                    }
                  }
                }
              }
            }
          }
          if (tmp22) {
            let tmp48 = null;
            if (tmp24) {
              tmp48 = expiresAt;
            }
            const obj6 = { windowEndsAt: tmp48 };
            let tmp46Result = closure_7(closure_17, obj6);
          } else {
            if (tmp21) {
              if (null != tmp16) {
                const obj7 = { reward: tmp16, gameState: stateFromStores };
                tmp46Result = closure_7(closure_13, obj7);
              }
            }
            const obj8 = { children: null };
            const obj9 = { "aria-label": null, shape: null, size: 53, gap: 2, depthX: 0.3, children: null };
            const mapped = rewards.map((name) => name.name);
            obj9["aria-label"] = mapped.join(", ");
            obj9.shape = tmp(9375).CutoutShape.Circle;
            obj9.children = rewards.map((reward) => closure_1_7(closure_1_15, { reward, size: 53 }, reward.id));
            const items4 = [closure_7(tmp(12863).Pile, obj9), ];
            const obj10 = { style: rewardShelfCopy.rewardShelfCopy, children: null };
            const obj11 = { variant: "heading-sm/semibold", color: "text-default", children: null };
            const intl = tmp(1128).intl;
            obj11.children = intl.string(tmp(1128).t.ehbzo8);
            const items5 = [closure_7(tmp(5220).Text, obj11), ];
            const obj12 = { variant: "text-xs/medium", color: "text-muted", children: null };
            const intl2 = tmp(1128).intl;
            obj12.children = intl2.string(tmp(1128).t["5Gt1dt"]);
            items5[1] = closure_7(tmp(5220).Text, obj12);
            obj10.children = items5;
            items4[1] = closure_8(closure_5, obj10);
            obj8.children = items4;
            tmp46Result = closure_8(closure_9, obj8);
          }
          cResult[21] = tmp22;
          cResult[22] = tmp16;
          cResult[23] = stateFromStores;
          cResult[24] = tmp24;
          cResult[25] = tmp21;
          cResult[26] = rewards;
          rewardShelfCopy = rewardShelfCopy.rewardShelfCopy;
          cResult[27] = rewardShelfCopy;
          cResult[28] = expiresAt;
          cResult[29] = tmp46Result;
        }
        const items6 = [rewardShelfCopy.rewardShelf, prop];
        cResult[14] = rewardShelfCopy.rewardShelf;
        cResult[15] = prop;
        cResult[16] = items6;
        tmp31 = items6;
      }
    }
    const orbsArcadeFocusedReward = tmp(16304).getOrbsArcadeFocusedReward(rewards, stateFromStores);
    cResult[7] = stateFromStores;
    cResult[8] = rewards;
    cResult[9] = orbsArcadeFocusedReward;
    tmp13 = orbsArcadeFocusedReward;
    const tmpResult2 = tmp(16304);
  }
  const tmpResult = game(504);
}) : (function OrbsArcadeRewardShelf(game) {
  game = game.game;
  importDefault = undefined;
  let tmp = closure_12();
  const rewards = game.rewards;
  items = [OrbsArcadeStore];
  const items1 = [game.id];
  const stateFromStores = game(504).useStateFromStores(items, () => OrbsArcadeStore.getGameStateForGame(game.id), items1);
  const reduced = rewards.reduce((acc, scoreTarget) => {
    let tmp = acc;
    if (null == acc) {
      tmp = scoreTarget;
    }
    return tmp;
  }, undefined);
  let obj = game(504);
  const orbsArcadeFocusedReward = game(16304).getOrbsArcadeFocusedReward(rewards, stateFromStores);
  let tmp7 = orbsArcadeFocusedReward;
  if (orbsArcadeFocusedReward == null) {
    tmp7 = reduced;
  }
  const tmp9 = useOrbsArcadeRewardAccentColorDefault(tmp7);
  importDefault = tmp9;
  let enrolledAt;
  if (stateFromStores != null) {
    enrolledAt = stateFromStores.enrolledAt;
  }
  let tmp12 = tmp11;
  if (null != enrolledAt) {
    tmp12 = rewards.length > 0;
  }
  if (tmp12) {
    tmp12 = null == orbsArcadeFocusedReward;
  }
  let expiresAt;
  if (stateFromStores != null) {
    expiresAt = stateFromStores.expiresAt;
  }
  if (expiresAt == null) {
    expiresAt = null;
  }
  let tmp13 = null != expiresAt;
  if (tmp13) {
    let tmp14 = null == game.endsAt;
    if (!tmp14) {
      const _Date = Date;
      const _Date2 = Date;
      const parsed = Date.parse(expiresAt);
      tmp14 = parsed < Date.parse(game.endsAt);
    }
    tmp13 = tmp14;
  }
  const items2 = [tmp9];
  let memo = noop.useMemo(() => {
    items = [nativeDefault.unsafe_rawColors.TRANSPARENT, ];
    const obj = _modDef683(closure_1);
    items[1] = _modDef683(closure_1).alpha(0.5).css();
    return items;
  }, items2);
  if (tmp12) {
    memo = items;
  }
  if (0 === rewards.length) {
    return null;
  } else {
    let prop;
    if (tmp12) {
      prop = tmp.rewardShelfGlowContainer;
    }
    const obj3 = { style: prop, children: null };
    const items3 = [tmp.rewardShelf, ];
    let prop1;
    if (tmp12) {
      prop1 = tmp.allRewardsClaimedShelf;
    }
    let obj4 = { style: null, children: null };
    items3[1] = prop1;
    obj4.style = items3;
    const obj5 = { style: closure_4.absoluteFill, start: { x: 0, y: 0 }, end: { x: 0, y: 1 }, colors: memo };
    const items4 = [closure_7(LinearGradientDefault, obj5), ];
    if (tmp12) {
      let tmp26 = null;
      if (tmp13) {
        tmp26 = expiresAt;
      }
      expiresAt = { windowEndsAt: tmp26 };
      let tmp19Result = closure_7(closure_17, expiresAt);
    } else {
      if (tmp11) {
        if (null != tmp7) {
          const obj6 = { reward: tmp7, gameState: stateFromStores };
          tmp19Result = closure_7(closure_13, obj6);
        }
      }
      const obj7 = { children: null };
      const obj8 = { "aria-label": null, shape: null, size: 53, gap: 2, depthX: 0.3, children: null };
      const mapped = rewards.map((name) => name.name);
      obj8["aria-label"] = mapped.join(", ");
      obj8.shape = tmp2(9375).CutoutShape.Circle;
      obj8.children = rewards.map((reward) => closure_1_7(closure_1_15, { reward, size: 53 }, reward.id));
      const items5 = [closure_7(tmp2(12863).Pile, obj8), ];
      const obj9 = { style: tmp.rewardShelfCopy, children: null };
      const obj10 = { variant: "heading-sm/semibold", color: "text-default", children: null };
      const intl = tmp2(1128).intl;
      obj10.children = intl.string(tmp2(1128).t.ehbzo8);
      const items6 = [closure_7(tmp2(5220).Text, obj10), ];
      const obj11 = { variant: "text-xs/medium", color: "text-muted", children: null };
      const intl2 = tmp2(1128).intl;
      obj11.children = intl2.string(tmp2(1128).t["5Gt1dt"]);
      items6[1] = closure_7(tmp2(5220).Text, obj11);
      obj9.children = items6;
      items5[1] = closure_8(closure_5, obj9);
      obj7.children = items5;
      tmp19Result = closure_8(closure_9, obj7);
    }
    items4[1] = tmp19Result;
    obj4.children = items4;
    obj4 = closure_8(closure_5, obj4);
    obj3.children = obj4;
    closure_7(closure_5, obj3);
  }
  const obj2 = game(16304);
});