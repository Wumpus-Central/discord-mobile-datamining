// discord_app/modules/orbs_arcade/native/OrbsArcadeRewardShelf.tsx
import nativeDefault from "../../../../discord_common/js/packages/tokens/native.tsx";
import _modDef671 from "../../../../_runtime/metro/00671__.js";
import util from "../../../intl/index.native.tsx";
import Text_Text from "../../../design/components/Text/native/Text.tsx";
import useCountdownDefault from "../../../hooks/useCountdown.tsx";
import NitroCoinSpotIllustration from "../../../design/components/mana-assets/native/generated/NitroCoinSpotIllustration.native.tsx";
import OrbsArcadeTypes from "../OrbsArcadeTypes.tsx";
import OrbsArcadeRewardUtils from "../utils/OrbsArcadeRewardUtils.tsx";
import OrbsArcadeRewardPreviewDefault from "OrbsArcadeRewardPreview.tsx";
import OrbsArcadeRewardStatusLabelDefault from "OrbsArcadeRewardStatusLabel.tsx";
import ChestLogoSpotIllustration from "../../../design/components/mana-assets/native/generated/ChestLogoSpotIllustration.native.tsx";
import OrbsArcadeWindowUtils from "../utils/OrbsArcadeWindowUtils.tsx";
import openOrbsArcadeSheets from "openOrbsArcadeSheets.tsx";
import noop from "../../../../_runtime/metro/00019__.js";
import LocaleStore from "../../user_settings/LocaleStore.tsx";
import OrbsArcadeStore from "../OrbsArcadeStore.tsx";

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
  const items2 = [
    closure_9(rewards(13409).Pile, {
      "aria-label": memo,
      shape: rewards(9509).CutoutShape.Circle,
      size: v50,
      gap: 2,
      depthX: 0.28,
      children: rewards.map((reward) => closure_1_9(OrbsArcadePileReward, { reward, size }, reward.id)),
    }),
  ];
  const obj4 = { style: tmp.rewardShelfCopy, children: null };
  const obj5 = { variant: "heading-sm/semibold", color: "text-default", children: null };
  const intl = rewards(1113).intl;
  obj5.children = intl.string(rewards(1113).t.DCCcdz);
  const items3 = [
    closure_9(rewards(5624).Text, obj5),
    closure_9(rewards(5624).Text, {
      variant: "heading-sm/semibold",
      color: "text-subtle",
      lineClamp: 2,
      children: memo,
    }),
  ];
  obj4.children = items3;
  items2[1] = closure_10(closure_6, obj4);
  obj2.children = items2;
  return closure_10(closure_11, obj2);
}
function OrbsArcadeFocusedRewardShelfContent(arg0) {
  ({ reward, gameState, ownedRewardSkuIds } = arg0);
  const tmp = closure_14();
  const orbsArcadeRewardStatus = OrbsArcadeRewardUtils.getOrbsArcadeRewardStatus(reward, gameState, ownedRewardSkuIds);
  const obj2 = { children: null };
  items = [React7(OrbsArcadeRewardPreviewDefault, { reward, size: v50 })];
  const obj4 = { style: tmp.rewardShelfCopy, children: null };
  const items1 = [
    React7(OrbsArcadeRewardStatusLabelDefault, { reward, status: orbsArcadeRewardStatus, color: "text-default" }),
    React7(Text_Text.Text, { variant: "heading-sm/semibold", color: "text-subtle", children: reward.name }),
  ];
  const obj6 = { variant: "text-xs/medium", color: "text-muted", children: null };
  const obj3 = { reward, size: v50 };
  const obj5 = { variant: "heading-sm/semibold", color: "text-subtle", children: reward.name };
  obj6.children = OrbsArcadeRewardUtils.getOrbsArcadeRewardScoreLabel(
    reward,
    orbsArcadeRewardStatus,
    gameState,
    ownedRewardSkuIds,
  );
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
  if (null != windowEndsAt) {
    const _Date = Date;
    const num = new Date(windowEndsAt);
  }
  const obj = { style: tmp.chestLogo, children: null };
  const obj2 = { style: tmp.chestLogoMirrored, children: null };
  obj2.children = React7(ChestLogoSpotIllustration.ChestLogoSpotIllustration, { accessible: false, height: v50 });
  obj.children = React7(timestampProducer, obj2);
  items = [React7(timestampProducer, obj)];
  const obj4 = { style: tmp.rewardShelfCopy, children: null };
  const obj5 = { variant: "heading-sm/semibold", color: "text-default", children: null };
  const intl = util.intl;
  obj5.children = intl.string(util.t["/AJCN+"]);
  const items1 = [React7(Text_Text.Text, obj5)];
  let tmp11Result = null;
  if (null != windowEndsAt) {
    const obj6 = { variant: "text-xs/medium", color: "text-muted", children: null };
    const intl2 = util.intl;
    const obj7 = { duration: OrbsArcadeWindowUtils.formatOrbsArcadeTimeUntil(tmp3Result) };
    obj6.children = intl2.formatToPlainString(util.t.fkzORZ, obj7);
    tmp11Result = React7(Text_Text.Text, obj6);
    const tmp13Result = OrbsArcadeWindowUtils;
  }
  const obj8 = { children: null };
  items1[1] = tmp11Result;
  obj4.children = items1;
  items[1] = closure_1_10(timestampProducer, obj4);
  obj8.children = items;
  return closure_1_10(closure_1_11, obj8);
}
get_ActivityIndicator = fn(17);
({ Pressable: closure_4, StyleSheet: hasOwnProperty, View: metroRequire } = get_ActivityIndicator);
const jsxProd = fn(21);
({ jsx: closure_9, jsxs: c10, Fragment: closure_11 } = jsxProd);
let c12 = 50;
let items = [nativeDefault.unsafe_rawColors.TRANSPARENT, "rgba(16, 142, 77, 0.5)"];
let createStyles = fn(5014);
let obj2 = {
  rewardShelf: {
    flexDirection: "row",
    alignItems: "center",
    gap: nativeDefault.space.PX_12,
    overflow: "hidden",
    paddingHorizontal: nativeDefault.space.PX_10,
    paddingVertical: nativeDefault.space.PX_6,
    minHeight: 74,
    borderRadius: nativeDefault.radii.lg,
    borderWidth: 1,
    borderColor: nativeDefault.colors.BORDER_MUTED,
    backgroundColor: nativeDefault.colors.BACKGROUND_MOD_MUTED,
  },
  chevronIconWrapper: null,
  rewardShelfCopy: null,
  allRewardsClaimedShelf: null,
  rewardShelfGlowContainer: null,
  chestLogo: null,
  chestLogoMirrored: null,
};
let size = {
  marginLeft: "auto",
  width: fn(5640).SMALL_BUTTON_HEIGHT,
  height: fn(5640).SMALL_BUTTON_HEIGHT,
  alignItems: "center",
  justifyContent: "center",
};
obj2.chevronIconWrapper = size;
obj2.rewardShelfCopy = { flex: 1 };
obj2.allRewardsClaimedShelf = { backgroundColor: "rgba(151, 151, 159, 0.08)" };
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
createStyles = fn(5014);
let closure_17 = createStyles.createStyles((width) => ({
  nitroCoin: { width, height: width, alignItems: "center", justifyContent: "center" },
}));
size = fn(2);
let result = size.fileFinishedImporting("modules/orbs_arcade/native/OrbsArcadeRewardShelf.tsx");

export default function OrbsArcadeRewardShelf(game) {
  game = game.game;
  let stateFromStores;
  noop = undefined;
  let tmp = closure_14();
  const rewards = game.rewards;
  items = [OrbsArcadeStore];
  const items1 = [game.id];
  stateFromStores = game(stateFromStores[8]).useStateFromStores(
    items,
    () => OrbsArcadeStore.getGameStateForGame(game.id),
    items1,
  );
  const reduced = rewards.reduce((acc, scoreTarget) => {
    let tmp = acc;
    if (null == acc) {
      tmp = scoreTarget;
    }
    return tmp;
  }, undefined);
  let obj = game(stateFromStores[8]);
  const items2 = [OrbsArcadeStore];
  const stateFromStores1 = game(stateFromStores[8]).useStateFromStores(
    items2,
    () => ownedRewardSkuIds.ownedRewardSkuIds,
  );
  const obj2 = game(stateFromStores[8]);
  const orbsArcadeFocusedReward = game(stateFromStores[13]).getOrbsArcadeFocusedReward(
    rewards,
    stateFromStores,
    stateFromStores1,
  );
  let tmp8 = orbsArcadeFocusedReward;
  if (orbsArcadeFocusedReward == null) {
    tmp8 = reduced;
  }
  const tmp10 = rewards(stateFromStores[21])(tmp8);
  noop = tmp10;
  let currentRun;
  if (stateFromStores != null) {
    currentRun = stateFromStores.currentRun;
  }
  let tmp13 = tmp12;
  if (null != currentRun) {
    tmp13 = rewards.length > 0;
  }
  if (tmp13) {
    tmp13 = null == orbsArcadeFocusedReward;
  }
  let expiresAt;
  if (stateFromStores != null) {
    expiresAt = stateFromStores.expiresAt;
  }
  if (expiresAt == null) {
    expiresAt = null;
  }
  let tmp15 = null != expiresAt;
  if (tmp15) {
    let tmp16 = null == game.endsAt;
    if (!tmp16) {
      const _Date = Date;
      const _Date2 = Date;
      const parsed = Date.parse(expiresAt);
      tmp16 = parsed < Date.parse(game.endsAt);
    }
    tmp15 = tmp16;
  }
  const items3 = [rewards, stateFromStores];
  const memo = noop.useMemo(
    () => OrbsArcadeRewardUtils.getOrbsArcadeClaimableRewards(rewards, stateFromStores),
    items3,
  );
  const items4 = [tmp10];
  let memo1 = noop.useMemo(() => {
    items = [nativeDefault.unsafe_rawColors.TRANSPARENT];
    const obj = _modDef671(closure_3);
    items[1] = _modDef671(closure_3).alpha(0.5).css();
    return items;
  }, items4);
  if (tmp13) {
    memo1 = items;
  }
  if (0 === rewards.length) {
    return null;
  } else {
    let prop;
    if (tmp13) {
      prop = tmp.rewardShelfGlowContainer;
    }
    const obj4 = { style: prop, children: null };
    const items5 = [tmp.rewardShelf];
    let prop1;
    if (tmp13) {
      prop1 = tmp.allRewardsClaimedShelf;
    }
    let obj5 = { style: null, accessibilityRole: "button", accessibilityLabel: null, onPress: null, children: null };
    items5[1] = prop1;
    obj5.style = items5;
    const intl = tmp2(tmp3[12]).intl;
    obj5.accessibilityLabel = intl.string(tmp2(tmp3[12]).t.XpfUWL);
    obj5.onPress = function onPress() {
      if (obj.getOrbsArcadeClaimableRewards(rewards, stateFromStores).length > 0) {
        let result = openOrbsArcadeSheets.openOrbsArcadeRewardUnlockedSheet(game.id);
        const tmpResult = openOrbsArcadeSheets;
      } else {
        result = openOrbsArcadeSheets.openOrbsArcadeRewardsSheet(game.id);
        const tmpResult2 = openOrbsArcadeSheets;
      }
      return result;
    };
    const obj6 = { style: absoluteFill.absoluteFill, start: { x: 0, y: 0 }, end: { x: 0, y: 1 }, colors: memo1 };
    const items6 = [closure_9(tmp9(tmp3[24]), obj6), ,];
    if (tmp13) {
      let tmp30 = null;
      if (tmp15) {
        tmp30 = expiresAt;
      }
      const obj7 = { windowEndsAt: tmp30 };
      let tmp21Result = closure_9(OrbsArcadeAllRewardsClaimedShelfContent, obj7);
    } else {
      if (tmp12) {
        if (memo.length > 1) {
          const obj8 = { rewards: memo };
          tmp21Result = closure_9(OrbsArcadeClaimableRewardsShelfContent, obj8);
        }
      }
      if (tmp12) {
        if (null != tmp8) {
          const obj9 = { reward: tmp8, gameState: stateFromStores, ownedRewardSkuIds: stateFromStores1 };
          tmp21Result = closure_9(OrbsArcadeFocusedRewardShelfContent, obj9);
        }
      }
      const obj10 = { children: null };
      const obj11 = { "aria-label": null, shape: null, size: 53, gap: 2, depthX: 0.28, children: null };
      const mapped = rewards.map((name) => name.name);
      obj11["aria-label"] = mapped.join(", ");
      obj11.shape = tmp2(tmp3[10]).CutoutShape.Circle;
      obj11.children = rewards.map((reward) => closure_1_9(OrbsArcadePileReward, { reward, size: 53 }, reward.id));
      const items7 = [closure_9(tmp2(tmp3[9]).Pile, obj11)];
      const obj12 = { style: tmp.rewardShelfCopy, children: null };
      const obj13 = { variant: "heading-sm/semibold", color: "text-default", children: null };
      const intl2 = tmp2(tmp3[12]).intl;
      obj13.children = intl2.string(tmp2(tmp3[12]).t.ehbzo8);
      const items8 = [closure_9(tmp2(tmp3[11]).Text, obj13)];
      const obj14 = {
        variant: "experimental/body-xs/medium",
        color: "text-muted",
        textBreakStrategy: "balanced",
        lineBreakStrategyIOS: "standard",
        children: null,
      };
      const intl3 = tmp2(tmp3[12]).intl;
      obj14.children = intl3.string(tmp2(tmp3[12]).t["5Gt1dt"]);
      items8[1] = closure_9(tmp2(tmp3[11]).Text, obj14);
      obj12.children = items8;
      items7[1] = closure_10(closure_6, obj12);
      obj10.children = items7;
      tmp21Result = closure_10(closure_11, obj10);
    }
    items6[1] = tmp21Result;
    let obj15 = { style: tmp.chevronIconWrapper, children: null };
    let colors = tmp9(tmp3[5]).colors;
    const obj16 = { size: "xs", color: tmp12 ? colors.CONTROL_ICON_ONLY_ICON_DEFAULT : colors.ICON_MUTED };
    colors = closure_9(tmp2(tmp3[25]).ChevronLargeRightIcon, obj16);
    obj15.children = colors;
    obj15 = closure_9(closure_6, obj15);
    items6[2] = obj15;
    obj5.children = items6;
    obj5 = closure_10(closure_4, obj5);
    obj4.children = obj5;
    closure_9(closure_6, obj4);
  }
  const obj3 = game(stateFromStores[13]);
}
