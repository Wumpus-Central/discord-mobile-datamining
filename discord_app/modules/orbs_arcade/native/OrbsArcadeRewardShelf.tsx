// === Module 16963: OrbsArcadeRewardShelf ===

// Module 16963 (OrbsArcadeRewardShelf)
import nativeDefault from "native" /* 575 */;
import _modDef671 from "module_671" /* 671 */;
import util from "util" /* 1114 */;
import Text_Text from "Text/Text" /* 5619 */;
import useCountdownDefault from "useCountdown" /* 7617 */;
import NitroCoinSpotIllustration from "NitroCoinSpotIllustration" /* 9520 */;
import OrbsArcadeTypes from "OrbsArcadeTypes" /* 16955 */;
import OrbsArcadeRewardUtils from "OrbsArcadeRewardUtils" /* 16961 */;
import OrbsArcadeRewardPreviewDefault from "OrbsArcadeRewardPreview" /* 16964 */;
import OrbsArcadeRewardStatusLabelDefault from "OrbsArcadeRewardStatusLabel" /* 16965 */;
import ChestLogoSpotIllustration from "ChestLogoSpotIllustration" /* 16966 */;
import openOrbsArcadeSheets from "openOrbsArcadeSheets" /* 16971 */;
import noop from "module_19" /* 19 */;
import LocaleStore from "LocaleStore" /* 2063 */;
import OrbsArcadeStore from "OrbsArcadeStore" /* 16954 */;

require = fn;
function OrbsArcadeClaimableRewardsShelfContent(rewards) {
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
  const items2 = [closure_9(rewards(13374).Pile, { "aria-label": memo, shape: rewards(9487).CutoutShape.Circle, size: v50, gap: 2, depthX: 0.3, children: rewards.map((reward) => closure_1_9(OrbsArcadePileReward, { reward, size }, reward.id)) }), ];
  const obj4 = { style: tmp.rewardShelfCopy, children: null };
  const obj5 = { variant: "heading-sm/semibold", color: "text-default", children: null };
  const intl = rewards(1114).intl;
  obj5.children = intl.string(rewards(1114).t.DCCcdz);
  const items3 = [closure_9(rewards(5619).Text, obj5), closure_9(rewards(5619).Text, { variant: "heading-sm/semibold", color: "text-subtle", lineClamp: 2, children: memo })];
  obj4.children = items3;
  items2[1] = closure_10(closure_6, obj4);
  obj2.children = items2;
  return closure_10(closure_11, obj2);
}
function OrbsArcadeFocusedRewardShelfContent(reward) {
  reward = reward.reward;
  const tmp = closure_14();
  const orbsArcadeRewardStatus = OrbsArcadeRewardUtils.getOrbsArcadeRewardStatus(reward.id, reward.gameState);
  const obj2 = { children: null };
  items = [React7(OrbsArcadeRewardPreviewDefault, { reward, size: v50 }), ];
  const obj4 = { style: tmp.rewardShelfCopy, children: null };
  const items1 = [React7(OrbsArcadeRewardStatusLabelDefault, { reward, status: orbsArcadeRewardStatus, color: "text-default" }), React7(Text_Text.Text, { variant: "heading-sm/semibold", color: "text-subtle", children: reward.name }), ];
  const obj6 = { variant: "text-xs/medium", color: "text-muted", children: null };
  const obj3 = { reward, size: v50 };
  const obj5 = { variant: "heading-sm/semibold", color: "text-subtle", children: reward.name };
  obj6.children = OrbsArcadeRewardUtils.getOrbsArcadeRewardScoreLabel(reward, orbsArcadeRewardStatus);
  items1[2] = React7(Text_Text.Text, obj6);
  obj4.children = items1;
  items[1] = closure_1_10(timestampProducer, obj4);
  obj2.children = items;
  return closure_1_10(closure_1_11, obj2);
}
function OrbsArcadePileReward(arg0) {
  ({ reward, size } = arg0);
  if (reward.type !== OrbsArcadeTypes.OrbsArcadeRewardType.FRACTIONAL_PREMIUM) {
    const obj2 = { reward, size };
    let tmp6 = React7(OrbsArcadeRewardPreviewDefault, obj2);
  } else {
    const obj = { style: tmp.nitroCoin, children: null };
    const obj3 = { height: 0.85 * size };
    obj.children = React7(NitroCoinSpotIllustration.NitroCoinSpotIllustration, obj3);
    tmp6 = React7(timestampProducer, obj);
  }
  return tmp6;
}
function OrbsArcadeAllRewardsClaimedShelfContent(windowEndsAt) {
  windowEndsAt = windowEndsAt.windowEndsAt;
  const tmp = closure_14();
  let obj = dependencyMap;
  let num = 0;
  if (null != windowEndsAt) {
    const _Date = Date;
    num = new Date(windowEndsAt);
  }
  const obj2 = { style: tmp.chestLogo, children: null };
  const obj3 = { style: tmp.chestLogoMirrored, children: React7(ChestLogoSpotIllustration.ChestLogoSpotIllustration, { accessible: false, height: v50 }) };
  let formatToPlainStringResult1 = require;
  obj2.children = React7(timestampProducer, obj3);
  items = [React7(timestampProducer, obj2), ];
  const obj5 = { style: tmp.rewardShelfCopy, children: null };
  const obj6 = { variant: "heading-sm/semibold", color: "text-default", children: null };
  const intl = util.intl;
  obj6.children = intl.string(util.t["/AJCN+"]);
  const items1 = [React7(Text_Text.Text, obj6), ];
  if (null == windowEndsAt) {
    const obj7 = { children: null };
    items1[1] = null;
    obj5.children = items1;
    items[1] = closure_1_10(timestampProducer, obj5);
    obj7.children = items;
    return closure_1_10(closure_1_11, obj7);
  } else {
    const intl2 = util.intl;
    ({ days, hours } = tmp2Result);
    if (days > 0) {
      const intl5 = util.intl;
      const obj8 = { days };
      let formatToPlainStringResult = intl5.formatToPlainString(util.t.GBLpQ8, obj8);
    } else if (hours > 0) {
      const intl4 = util.intl;
      const obj9 = { hours };
      formatToPlainStringResult = intl4.formatToPlainString(util.t.rhY1Rs, obj9);
    } else {
      const intl3 = util.intl;
      const obj10 = { minutes: null };
      const _Math = Math;
      obj10.minutes = Math.max(tmp13, 1);
      formatToPlainStringResult = intl3.formatToPlainString(util.t["XIGt+W"], obj10);
    }
    obj = { variant: "text-xs/medium", color: "text-muted", children: null };
    const obj11 = { duration: formatToPlainStringResult };
    formatToPlainStringResult1 = intl2.formatToPlainString(util.t.fkzORZ, obj11);
    obj.children = formatToPlainStringResult1;
    React7(Text_Text.Text, obj);
  }
  const obj4 = { accessible: false, height: v50 };
  tmp2Result = useCountdownDefault(num, 60000, undefined, null == windowEndsAt);
}
get_ActivityIndicator = fn(17);
({ Pressable: closure_4, StyleSheet: hasOwnProperty, View: metroRequire } = get_ActivityIndicator);
const jsxProd = fn(21);
({ jsx: closure_9, jsxs: c10, Fragment: closure_11 } = jsxProd);
let c12 = 50;
let items = [nativeDefault.unsafe_rawColors.TRANSPARENT, "rgba(16, 142, 77, 0.5)"];
let createStyles = fn(5009);
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
createStyles = fn(5009);
let closure_17 = createStyles.createStyles((width) => ({ nitroCoin: { width, height: width, alignItems: "center", justifyContent: "center" } }));
const size = fn(2);
let result = size.fileFinishedImporting("modules/orbs_arcade/native/OrbsArcadeRewardShelf.tsx");

export default function OrbsArcadeRewardShelf(game) {
  game = game.game;
  let stateFromStores;
  noop = undefined;
  let tmp = closure_14();
  const rewards = game.rewards;
  items = [OrbsArcadeStore];
  const items1 = [game.id];
  stateFromStores = game(stateFromStores[7]).useStateFromStores(items, () => OrbsArcadeStore.getGameStateForGame(game.id), items1);
  const reduced = rewards.reduce((acc, scoreTarget) => {
    let tmp = acc;
    if (null == acc) {
      tmp = scoreTarget;
    }
    return tmp;
  }, undefined);
  let obj = game(stateFromStores[7]);
  const orbsArcadeFocusedReward = game(stateFromStores[12]).getOrbsArcadeFocusedReward(rewards, stateFromStores);
  let tmp7 = orbsArcadeFocusedReward;
  if (orbsArcadeFocusedReward == null) {
    tmp7 = reduced;
  }
  const tmp9 = rewards(stateFromStores[19])(tmp7);
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
    const obj = _modDef671(closure_3);
    items[1] = _modDef671(closure_3).alpha(0.5).css();
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
    const intl = tmp2(tmp3[11]).intl;
    obj4.accessibilityLabel = intl.string(tmp2(tmp3[11]).t.XpfUWL);
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
    const items5 = [closure_9(tmp8(tmp3[22]), obj5), , ];
    if (tmp12) {
      let tmp29 = null;
      if (tmp14) {
        tmp29 = expiresAt;
      }
      const obj6 = { windowEndsAt: tmp29 };
      let tmp20Result = closure_9(OrbsArcadeAllRewardsClaimedShelfContent, obj6);
    } else {
      if (tmp11) {
        if (memo.length > 1) {
          const obj7 = { rewards: memo };
          tmp20Result = closure_9(OrbsArcadeClaimableRewardsShelfContent, obj7);
        }
      }
      if (tmp11) {
        if (null != tmp7) {
          const obj8 = { reward: tmp7, gameState: stateFromStores };
          tmp20Result = closure_9(OrbsArcadeFocusedRewardShelfContent, obj8);
        }
      }
      const obj9 = { children: null };
      const obj10 = { "aria-label": null, shape: null, size: 53, gap: 2, depthX: 0.3, children: null };
      const mapped = rewards.map((name) => name.name);
      obj10["aria-label"] = mapped.join(", ");
      obj10.shape = tmp2(tmp3[9]).CutoutShape.Circle;
      obj10.children = rewards.map((reward) => closure_1_9(OrbsArcadePileReward, { reward, size: 53 }, reward.id));
      const items6 = [closure_9(tmp2(tmp3[8]).Pile, obj10), ];
      const obj11 = { style: tmp.rewardShelfCopy, children: null };
      const obj12 = { variant: "heading-sm/semibold", color: "text-default", children: null };
      const intl2 = tmp2(tmp3[11]).intl;
      obj12.children = intl2.string(tmp2(tmp3[11]).t.ehbzo8);
      const items7 = [closure_9(tmp2(tmp3[10]).Text, obj12), ];
      const obj13 = { variant: "text-xs/medium", color: "text-muted", children: null };
      const intl3 = tmp2(tmp3[11]).intl;
      obj13.children = intl3.string(tmp2(tmp3[11]).t["5Gt1dt"]);
      items7[1] = closure_9(tmp2(tmp3[10]).Text, obj13);
      obj11.children = items7;
      items6[1] = closure_10(closure_6, obj11);
      obj9.children = items6;
      tmp20Result = closure_10(closure_11, obj9);
    }
    items5[1] = tmp20Result;
    let colors = tmp8(tmp3[5]).colors;
    const obj14 = { size: "md", color: tmp11 ? colors.CONTROL_ICON_ONLY_ICON_DEFAULT : colors.ICON_MUTED };
    colors = closure_9(tmp2(tmp3[23]).ChevronSmallRightIcon, obj14);
    items5[2] = colors;
    obj4.children = items5;
    obj4 = closure_10(closure_4, obj4);
    obj3.children = obj4;
    closure_9(closure_6, obj3);
  }
  const obj2 = game(stateFromStores[12]);
};