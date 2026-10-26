// === Module 16403: OrbsArcadeRewardShelf ===

// Module 16403 (OrbsArcadeRewardShelf)
import initialize from "initialize" /* 504 */;
import c from "c" /* 576 */;
import nativeDefault from "native" /* 587 */;
import _modDef683 from "module_683" /* 683 */;
import util from "util" /* 1128 */;
import Text_Text from "Text/Text" /* 5234 */;
import useCountdownDefault from "useCountdown" /* 7554 */;
import ClipView from "ClipView" /* 9406 */;
import NitroCoinSpotIllustration from "NitroCoinSpotIllustration" /* 9439 */;
import Pile from "Pile" /* 12944 */;
import OrbsArcadeTypes from "OrbsArcadeTypes" /* 16396 */;
import OrbsArcadeRewardUtils from "OrbsArcadeRewardUtils" /* 16401 */;
import OrbsArcadeRewardPreviewDefault from "OrbsArcadeRewardPreview" /* 16404 */;
import OrbsArcadeRewardStatusLabelDefault from "OrbsArcadeRewardStatusLabel" /* 16405 */;
import ChestLogoSpotIllustration from "ChestLogoSpotIllustration" /* 16406 */;
import openOrbsArcadeSheets from "openOrbsArcadeSheets" /* 16411 */;
import noop from "module_19" /* 19 */;
import LocaleStore from "LocaleStore" /* 2068 */;
import OrbsArcadeStore from "OrbsArcadeStore" /* 16395 */;

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
({ Pressable: closure_4, StyleSheet: hasOwnProperty, View: metroRequire } = get_ActivityIndicator);
const jsxProd = fn(21);
({ jsx: closure_9, jsxs: c10, Fragment: closure_11 } = jsxProd);
let c12 = 50;
let items = [nativeDefault.unsafe_rawColors.TRANSPARENT, "rgba(16, 142, 77, 0.5)"];
let createStyles = fn(4971);
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
let closure_14 = createStyles.createStyles(obj2);
let ReactCompilerGating = fn(558);
let closure_15 = ReactCompilerGating.isReactCompilerEnabled() ? (function OrbsArcadeClaimableRewardsShelfContent(rewards) {
  const cResult = c.c(21);
  rewards = rewards.rewards;
  const tmp4 = closure_14();
  if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
    items = [LocaleStore];
    const fn = function n() {
      return locale.locale;
    };
    cResult[0] = items;
    cResult[1] = fn;
    tmp5 = items;
    tmp6 = fn;
  } else {
    [tmp5, tmp6] = cResult;
  }
  const stateFromStores = initialize.useStateFromStores(tmp5, tmp6);
  if (cResult[2] === stateFromStores) {
    if (cResult[3] === rewards) {
      if (cResult[6] !== rewards) {
        const _Symbol = Symbol;
        if (cResult[8] === Symbol.for("react.memo_cache_sentinel")) {
          class A {
            constructor(arg0) {
              obj = { reward: rewards, size: closure_1_12 };
              return closure_1_9(closure_1_18, obj, rewards.id);
            }
          }
          cResult[8] = A;
        } else {
          class A {
            constructor(arg0) {
              obj = { reward: rewards, size: closure_1_12 };
              return closure_1_9(closure_1_18, obj, rewards.id);
            }
          }
        }
        const mapped = rewards.map(A);
        cResult[6] = rewards;
        cResult[7] = mapped;
      } else {
        class A {
          constructor(arg0) {
            obj = { reward: rewards, size: closure_1_12 };
            return closure_1_9(closure_1_18, obj, rewards.id);
          }
        }
        if (cResult[9] === tmp9) {
          class A {
            constructor(arg0) {
              obj = { reward: rewards, size: closure_1_12 };
              return closure_1_9(closure_1_18, obj, rewards.id);
            }
          }
          const _Symbol2 = Symbol;
          if (cResult[12] === Symbol.for("react.memo_cache_sentinel")) {
            class A {
              constructor(arg0) {
                obj = { reward: rewards, size: closure_1_12 };
                return closure_1_9(closure_1_18, obj, rewards.id);
              }
            }
            const obj2 = { variant: "heading-sm/semibold", color: "text-default", children: null };
            const intl = util.intl;
            obj2.children = intl.string(util.t.DCCcdz);
            const tmp22 = React6(Text_Text.Text, obj2);
            cResult[12] = tmp22;
            const tmp21 = tmp22;
          } else {
            class A {
              constructor(arg0) {
                obj = { reward: rewards, size: closure_1_12 };
                return closure_1_9(closure_1_18, obj, rewards.id);
              }
            }
          }
          if (cResult[13] !== tmp9) {
            class A {
              constructor(arg0) {
                obj = { reward: rewards, size: closure_1_12 };
                return closure_1_9(closure_1_18, obj, rewards.id);
              }
            }
            const obj3 = { variant: "heading-sm/semibold", color: "text-subtle", lineClamp: 2, children: tmp9 };
            const tmp24 = React6(Text_Text.Text, obj3);
            cResult[13] = tmp9;
            cResult[14] = tmp24;
          } else {
            class A {
              constructor(arg0) {
                obj = { reward: rewards, size: closure_1_12 };
                return closure_1_9(closure_1_18, obj, rewards.id);
              }
            }
          }
          if (cResult[15] === tmp4.rewardShelfCopy) {
            class A {
              constructor(arg0) {
                obj = { reward: rewards, size: closure_1_12 };
                return closure_1_9(closure_1_18, obj, rewards.id);
              }
            }
            if (cResult[18] === tmp17) {
              class A {
                constructor(arg0) {
                  obj = { reward: rewards, size: closure_1_12 };
                  return closure_1_9(closure_1_18, obj, rewards.id);
                }
              }
              return tmp29;
            }
            const obj4 = { children: null };
            const items1 = [tmp17, tmp25];
            obj4.children = items1;
            const tmp32 = v65535(closure_1_11, obj4);
            cResult[18] = tmp17;
            cResult[19] = tmp25;
            cResult[20] = tmp32;
            tmp29 = tmp32;
          }
          const obj5 = { style: tmp4.rewardShelfCopy, children: null };
          const items2 = [tmp21, tmp23];
          obj5.children = items2;
          const tmp28 = v65535(timestampProducer, obj5);
          cResult[15] = tmp4.rewardShelfCopy;
          cResult[16] = tmp23;
          cResult[17] = tmp28;
        }
        const obj6 = { "aria-label": tmp9, shape: ClipView.CutoutShape.Circle, size: v50, gap: 2, depthX: 0.3, children: tmp13 };
        const tmp20 = React6(Pile.Pile, obj6);
        cResult[9] = tmp9;
        cResult[10] = tmp13;
        cResult[11] = tmp20;
      }
    }
  }
  if (cResult[5] === Symbol.for("react.memo_cache_sentinel")) {
    class A {
      constructor(arg0) {
        obj = { reward: rewards, size: closure_1_12 };
        return closure_1_9(closure_1_18, obj, rewards.id);
      }
    }
    cResult[5] = tmp11;
  } else {
    class A {
      constructor(arg0) {
        obj = { reward: rewards, size: closure_1_12 };
        return closure_1_9(closure_1_18, obj, rewards.id);
      }
    }
  }
  const listFormat = new Intl.ListFormat(stateFromStores);
  const tmpResult = initialize;
  cResult[2] = stateFromStores;
  cResult[3] = rewards;
  cResult[4] = listFormat.format(rewards.map(tmp11));
  const formatResult = listFormat.format(rewards.map(tmp11));
}) : (function OrbsArcadeClaimableRewardsShelfContent(rewards) {
  rewards = rewards.rewards;
  const tmp = closure_14();
  items = [LocaleStore];
  const stateFromStores = rewards(504).useStateFromStores(items, () => locale.locale);
  const items1 = [stateFromStores, rewards];
  const memo = noop.useMemo(() => {
    const listFormat = new Intl.ListFormat(stateFromStores);
    return listFormat.format(rewards.map((name) => name.name));
  }, items1);
  const obj2 = { children: null };
  const obj = rewards(504);
  const items2 = [closure_9(rewards(12944).Pile, { "aria-label": memo, shape: rewards(9406).CutoutShape.Circle, size: v50, gap: 2, depthX: 0.3, children: rewards.map((reward) => closure_1_9(closure_1_18, { reward, size }, reward.id)) }), ];
  const obj4 = { style: tmp.rewardShelfCopy, children: null };
  const obj5 = { variant: "heading-sm/semibold", color: "text-default", children: null };
  const intl = rewards(1128).intl;
  obj5.children = intl.string(rewards(1128).t.DCCcdz);
  const items3 = [closure_9(rewards(5234).Text, obj5), closure_9(rewards(5234).Text, { variant: "heading-sm/semibold", color: "text-subtle", lineClamp: 2, children: memo })];
  obj4.children = items3;
  items2[1] = closure_10(closure_6, obj4);
  obj2.children = items2;
  return closure_10(closure_11, obj2);
});
ReactCompilerGating = fn(558);
let closure_16 = ReactCompilerGating.isReactCompilerEnabled() ? (function OrbsArcadeFocusedRewardShelfContent(arg0) {
  const cResult = c.c(23);
  ({ reward, gameState } = arg0);
  const tmp4 = closure_14();
  if (cResult[0] === gameState) {
    if (cResult[1] === reward.id) {
      let tmp5 = cResult[2];
    }
    if (cResult[3] !== reward) {
      const obj2 = { reward, size: v50 };
      const tmp11 = React6(OrbsArcadeRewardPreviewDefault, obj2);
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
        const tmp19 = React6(Text_Text.Text, obj3);
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
          const tmp24 = React6(Text_Text.Text, obj4);
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
              const tmp32 = v65535(closure_1_11, obj5);
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
        const tmp28 = v65535(timestampProducer, obj6);
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
    const tmp16 = React6(OrbsArcadeRewardStatusLabelDefault, obj7);
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
  const tmp = closure_14();
  const orbsArcadeRewardStatus = OrbsArcadeRewardUtils.getOrbsArcadeRewardStatus(reward.id, reward.gameState);
  const obj2 = { children: null };
  items = [React6(OrbsArcadeRewardPreviewDefault, { reward, size: v50 }), ];
  const obj4 = { style: tmp.rewardShelfCopy, children: null };
  const items1 = [React6(OrbsArcadeRewardStatusLabelDefault, { reward, status: orbsArcadeRewardStatus, color: "text-default" }), React6(Text_Text.Text, { variant: "heading-sm/semibold", color: "text-subtle", children: reward.name }), ];
  const obj6 = { variant: "text-xs/medium", color: "text-muted", children: null };
  const obj3 = { reward, size: v50 };
  const obj5 = { variant: "heading-sm/semibold", color: "text-subtle", children: reward.name };
  obj6.children = OrbsArcadeRewardUtils.getOrbsArcadeRewardScoreLabel(reward, orbsArcadeRewardStatus);
  items1[2] = React6(Text_Text.Text, obj6);
  obj4.children = items1;
  items[1] = v65535(timestampProducer, obj4);
  obj2.children = items;
  return v65535(closure_1_11, obj2);
});
createStyles = fn(4971);
let closure_17 = createStyles.createStyles((width) => ({ nitroCoin: { width, height: width, alignItems: "center", justifyContent: "center" } }));
ReactCompilerGating = fn(558);
let closure_18 = ReactCompilerGating.isReactCompilerEnabled() ? (function OrbsArcadePileReward(arg0) {
  const cResult = c.c(8);
  ({ reward, size } = arg0);
  const tmp4 = closure_17(size);
  if (reward.type !== OrbsArcadeTypes.OrbsArcadeRewardType.FRACTIONAL_PREMIUM) {
    if (cResult[0] === reward) {
      if (cResult[1] === size) {
        let tmp12 = cResult[2];
      }
      return tmp12;
    }
    const obj2 = { reward, size };
    const tmp15 = React6(OrbsArcadeRewardPreviewDefault, obj2);
    cResult[0] = reward;
    cResult[1] = size;
    cResult[2] = tmp15;
    tmp12 = tmp15;
  } else {
    const result = 0.85 * size;
    if (cResult[3] !== result) {
      const obj3 = { height: result };
      const tmp7 = React6(NitroCoinSpotIllustration.NitroCoinSpotIllustration, obj3);
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
    const tmp11 = React6(timestampProducer, obj4);
    cResult[5] = tmp4.nitroCoin;
    cResult[6] = tmp5;
    cResult[7] = tmp11;
    tmp8 = tmp11;
  }
}) : (function OrbsArcadePileReward(arg0) {
  ({ reward, size } = arg0);
  if (reward.type !== OrbsArcadeTypes.OrbsArcadeRewardType.FRACTIONAL_PREMIUM) {
    const obj2 = { reward, size };
    let tmp6 = React6(OrbsArcadeRewardPreviewDefault, obj2);
  } else {
    const obj = { style: tmp.nitroCoin, children: null };
    const obj3 = { height: 0.85 * size };
    obj.children = React6(NitroCoinSpotIllustration.NitroCoinSpotIllustration, obj3);
    tmp6 = React6(timestampProducer, obj);
  }
  return tmp6;
});
ReactCompilerGating = fn(558);
let closure_20 = ReactCompilerGating.isReactCompilerEnabled() ? (function OrbsArcadeAllRewardsClaimedShelfContent(windowEndsAt) {
  const cResult = c.c(18);
  windowEndsAt = windowEndsAt.windowEndsAt;
  const tmp4 = closure_14();
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
    const tmp15 = React6(ChestLogoSpotIllustration.ChestLogoSpotIllustration, obj2);
    cResult[2] = tmp15;
    let tmp12 = tmp15;
  } else {
    tmp12 = cResult[2];
  }
  if (cResult[3] !== tmp4.chestLogoMirrored) {
    const obj3 = { style: tmp4.chestLogoMirrored, children: tmp12 };
    const tmp19 = React6(timestampProducer, obj3);
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
      const tmp24 = React6(Text_Text.Text, obj4);
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
        const tmp36 = v65535(closure_1_11, obj5);
        cResult[15] = tmp20;
        cResult[16] = tmp29;
        cResult[17] = tmp36;
        tmp33 = tmp36;
      }
      const obj6 = { style: tmp4.rewardShelfCopy, children: null };
      const items1 = [tmp22, tmp25];
      obj6.children = items1;
      const tmp32 = v65535(timestampProducer, obj6);
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
      tmp26 = React6(Text_Text.Text, obj7);
    }
    cResult[9] = tmp11;
    cResult[10] = windowEndsAt;
    cResult[11] = tmp26;
    tmp25 = tmp26;
  }
  const tmp21 = React6(timestampProducer, { style: tmp4.chestLogo, children: tmp16 });
  cResult[5] = tmp4.chestLogo;
  cResult[6] = tmp16;
  cResult[7] = tmp21;
  tmp20 = tmp21;
  const obj9 = { style: tmp4.chestLogo, children: tmp16 };
}) : (function OrbsArcadeAllRewardsClaimedShelfContent(windowEndsAt) {
  windowEndsAt = windowEndsAt.windowEndsAt;
  const tmp = closure_14();
  if (null != windowEndsAt) {
    const _Date = Date;
    const num = new Date(windowEndsAt);
  }
  const obj = { style: tmp.chestLogo, children: null };
  const obj2 = { style: tmp.chestLogoMirrored, children: null };
  obj2.children = React6(ChestLogoSpotIllustration.ChestLogoSpotIllustration, { accessible: false, height: v50 });
  obj.children = React6(timestampProducer, obj2);
  items = [React6(timestampProducer, obj), ];
  const obj4 = { style: tmp.rewardShelfCopy, children: null };
  const obj5 = { variant: "heading-sm/semibold", color: "text-default", children: null };
  const intl = util.intl;
  obj5.children = intl.string(util.t["/AJCN+"]);
  const items1 = [React6(Text_Text.Text, obj5), ];
  let tmp11Result = null;
  if (null != windowEndsAt) {
    const obj6 = { variant: "text-xs/medium", color: "text-muted", children: null };
    const intl2 = util.intl;
    const obj7 = { duration: formatTimeUntil(tmp3Result) };
    obj6.children = intl2.formatToPlainString(util.t.fkzORZ, obj7);
    tmp11Result = React6(Text_Text.Text, obj6);
  }
  const obj8 = { children: null };
  items1[1] = tmp11Result;
  obj4.children = items1;
  items[1] = v65535(timestampProducer, obj4);
  obj8.children = items;
  return v65535(closure_1_11, obj8);
});
ReactCompilerGating = fn(558);
let obj3 = { flexDirection: "row", alignItems: "center", gap: nativeDefault.space.PX_12, overflow: "hidden", paddingHorizontal: nativeDefault.space.PX_10, paddingVertical: nativeDefault.space.PX_6, borderRadius: nativeDefault.radii.lg, borderWidth: 1, borderColor: nativeDefault.colors.BORDER_SUBTLE, backgroundColor: nativeDefault.colors.BACKGROUND_SURFACE_HIGH };
const size = fn(2);
let result = size.fileFinishedImporting("modules/orbs_arcade/native/OrbsArcadeRewardShelf.tsx");

export default ReactCompilerGating.isReactCompilerEnabled() ? (function OrbsArcadeRewardShelf(game) {
  const cResult = game(stateFromStores[8]).c(50);
  game = game.game;
  closure_14();
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
    let tmp8 = items1;
    let tmp7 = fn;
  } else {
    tmp7 = cResult[2];
    tmp8 = cResult[3];
  }
  const obj = game(stateFromStores[8]);
  stateFromStores = game(stateFromStores[9]).useStateFromStores(first, tmp7, tmp8);
  if (cResult[4] !== rewards) {
    const _Symbol = Symbol;
    if (cResult[6] === Symbol.for("react.memo_cache_sentinel")) {
      class L {
        constructor(arg0, arg1) {
          tmp = game;
          if (null == game) {
            tmp = arg1;
          }
          return tmp;
        }
      }
      cResult[6] = L;
    } else {
      class L {
        constructor(arg0, arg1) {
          tmp = game;
          if (null == game) {
            tmp = arg1;
          }
          return tmp;
        }
      }
    }
    const reduced = rewards.reduce(L, undefined);
    cResult[4] = rewards;
    cResult[5] = reduced;
  } else {
    class L {
      constructor(arg0, arg1) {
        tmp = game;
        if (null == game) {
          tmp = arg1;
        }
        return tmp;
      }
    }
    const orbsArcadeFocusedReward = tmp(tmp2[14]).getOrbsArcadeFocusedReward(rewards, stateFromStores);
    cResult[7] = stateFromStores;
    cResult[8] = rewards;
    cResult[9] = orbsArcadeFocusedReward;
    let tmpResult2 = tmp(tmp2[14]);
  }
  let tmpResult = game(stateFromStores[9]);
}) : (function OrbsArcadeRewardShelf(game) {
  game = game.game;
  let stateFromStores;
  noop = undefined;
  let tmp = closure_14();
  const rewards = game.rewards;
  items = [OrbsArcadeStore];
  const items1 = [game.id];
  stateFromStores = game(stateFromStores[9]).useStateFromStores(items, () => OrbsArcadeStore.getGameStateForGame(game.id), items1);
  const reduced = rewards.reduce((acc, scoreTarget) => {
    let tmp = acc;
    if (null == acc) {
      tmp = scoreTarget;
    }
    return tmp;
  }, undefined);
  let obj = game(stateFromStores[9]);
  const orbsArcadeFocusedReward = game(stateFromStores[14]).getOrbsArcadeFocusedReward(rewards, stateFromStores);
  let tmp7 = orbsArcadeFocusedReward;
  if (orbsArcadeFocusedReward == null) {
    tmp7 = reduced;
  }
  const tmp9 = rewards(stateFromStores[21])(tmp7);
  noop = tmp9;
  let currentRun;
  if (stateFromStores != null) {
    currentRun = stateFromStores.currentRun;
  }
  let tmp12 = tmp11;
  if (null != currentRun) {
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
  let tmp14 = null != expiresAt;
  if (tmp14) {
    let tmp15 = null == game.endsAt;
    if (!tmp15) {
      const _Date = Date;
      const _Date2 = Date;
      const parsed = Date.parse(expiresAt);
      tmp15 = parsed < Date.parse(game.endsAt);
    }
    tmp14 = tmp15;
  }
  const items2 = [rewards, stateFromStores];
  const memo = noop.useMemo(() => OrbsArcadeRewardUtils.getOrbsArcadeClaimableRewards(rewards, stateFromStores), items2);
  const items3 = [tmp9];
  let memo1 = noop.useMemo(() => {
    items = [nativeDefault.unsafe_rawColors.TRANSPARENT, ];
    const obj = _modDef683(closure_3);
    items[1] = _modDef683(closure_3).alpha(0.5).css();
    return items;
  }, items3);
  if (tmp12) {
    memo1 = items;
  }
  if (0 === rewards.length) {
    return null;
  } else {
    let prop;
    if (tmp12) {
      prop = tmp.rewardShelfGlowContainer;
    }
    const obj3 = { style: prop, children: null };
    const items4 = [tmp.rewardShelf, ];
    let prop1;
    if (tmp12) {
      prop1 = tmp.allRewardsClaimedShelf;
    }
    let obj4 = { style: null, accessibilityRole: "button", accessibilityLabel: null, onPress: null, children: null };
    items4[1] = prop1;
    obj4.style = items4;
    const intl = tmp2(tmp3[13]).intl;
    obj4.accessibilityLabel = intl.string(tmp2(tmp3[13]).t.XpfUWL);
    obj4.onPress = function onPress() {
      if (obj.getOrbsArcadeClaimableRewards(rewards, stateFromStores).length > 0) {
        let result = openOrbsArcadeSheets.openOrbsArcadeRewardUnlockedSheet(game.id);
        const tmpResult = openOrbsArcadeSheets;
      } else {
        result = openOrbsArcadeSheets.openOrbsArcadeRewardsSheet(game.id);
        const tmpResult2 = openOrbsArcadeSheets;
      }
      return result;
    };
    const obj5 = { style: absoluteFill.absoluteFill, start: { x: 0, y: 0 }, end: { x: 0, y: 1 }, colors: memo1 };
    const items5 = [closure_9(tmp8(tmp3[24]), obj5), , ];
    if (tmp12) {
      let tmp29 = null;
      if (tmp14) {
        tmp29 = expiresAt;
      }
      const obj6 = { windowEndsAt: tmp29 };
      let tmp20Result = closure_9(closure_20, obj6);
    } else {
      if (tmp11) {
        if (memo.length > 1) {
          const obj7 = { rewards: memo };
          tmp20Result = closure_9(closure_15, obj7);
        }
      }
      if (tmp11) {
        if (null != tmp7) {
          const obj8 = { reward: tmp7, gameState: stateFromStores };
          tmp20Result = closure_9(closure_16, obj8);
        }
      }
      const obj9 = { children: null };
      const obj10 = { "aria-label": null, shape: null, size: 53, gap: 2, depthX: 0.3, children: null };
      const mapped = rewards.map((name) => name.name);
      obj10["aria-label"] = mapped.join(", ");
      obj10.shape = tmp2(tmp3[11]).CutoutShape.Circle;
      obj10.children = rewards.map((reward) => closure_1_9(closure_1_18, { reward, size: 53 }, reward.id));
      const items6 = [closure_9(tmp2(tmp3[10]).Pile, obj10), ];
      const obj11 = { style: tmp.rewardShelfCopy, children: null };
      const obj12 = { variant: "heading-sm/semibold", color: "text-default", children: null };
      const intl2 = tmp2(tmp3[13]).intl;
      obj12.children = intl2.string(tmp2(tmp3[13]).t.ehbzo8);
      const items7 = [closure_9(tmp2(tmp3[12]).Text, obj12), ];
      const obj13 = { variant: "text-xs/medium", color: "text-muted", children: null };
      const intl3 = tmp2(tmp3[13]).intl;
      obj13.children = intl3.string(tmp2(tmp3[13]).t["5Gt1dt"]);
      items7[1] = closure_9(tmp2(tmp3[12]).Text, obj13);
      obj11.children = items7;
      items6[1] = closure_10(closure_6, obj11);
      obj9.children = items6;
      tmp20Result = closure_10(closure_11, obj9);
    }
    items5[1] = tmp20Result;
    let colors = tmp8(tmp3[5]).colors;
    const obj14 = { size: "md", color: tmp11 ? colors.CONTROL_ICON_ONLY_ICON_DEFAULT : colors.ICON_MUTED };
    colors = closure_9(tmp2(tmp3[25]).ChevronSmallRightIcon, obj14);
    items5[2] = colors;
    obj4.children = items5;
    obj4 = closure_10(closure_4, obj4);
    obj3.children = obj4;
    closure_9(closure_6, obj3);
  }
  const obj2 = game(stateFromStores[14]);
});