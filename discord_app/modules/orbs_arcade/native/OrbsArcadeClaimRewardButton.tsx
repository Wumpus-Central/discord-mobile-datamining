// discord_app/modules/orbs_arcade/native/OrbsArcadeClaimRewardButton.tsx
import util from "../../../intl/index.native.tsx";
import ToastActionCreatorsDefault from "../../toast/native/ToastActionCreators.tsx";
import OrbsArcadeRewardUtils from "../utils/OrbsArcadeRewardUtils.tsx";
import asyncGeneratorStep from "../../../../_runtime/00005_asyncGeneratorStep.js";
import noop from "../../../../_runtime/metro/00019__.js";
import OrbsArcadeStore from "../OrbsArcadeStore.tsx";

require = fn;
function showOrbsArcadeClaimRewardsError() {
  const obj2 = { text: null, variant: "critical" };
  const intl = util.intl;
  obj2.text = intl.string(util.t.CKsXk3);
  ToastActionCreatorsDefault.open("ORBS_ARCADE_CLAIM_REWARD_ERROR", obj2);
}
const jsx = fn(21).jsx;
const size = fn(2);
let result = size.fileFinishedImporting("modules/orbs_arcade/native/OrbsArcadeClaimRewardButton.tsx");

export default function OrbsArcadeClaimRewardButton(game) {
  game = game.game;
  const items = [OrbsArcadeStore];
  const items1 = [game.id];
  const stateFromStores = game(504).useStateFromStores(items, () => OrbsArcadeStore.isClaimingRewards(game.id), items1);
  let obj = game(504);
  const items2 = [OrbsArcadeStore];
  const items3 = [,];
  ({ id: arr4[0], rewards: arr4[1] } = game);
  const stateFromStores1 = game(504).useStateFromStores(
    items2,
    () =>
      OrbsArcadeRewardUtils.getOrbsArcadeClaimableRewards(game.rewards, OrbsArcadeStore.getGameStateForGame(game.id))
        .length,
    items3,
  );
  const items4 = [,];
  ({ id: arr5[0], rewards: arr5[1] } = game);
  const callback = noop.useCallback(
    asyncGeneratorStep(async () => {
      if (c4 === 2) {
        c4 = 3;
        throw new TypeError("Generator functions may not be called on executing generators");
      } else if (tmp7 === 3) {
        if (arg0 === 1) {
          throw value;
        } else if (arg0 === 2) {
          const obj2 = { value, done: true };
          return obj2;
        } else {
          return { value: "HermesInternal", done: "HermesInternal" };
        }
      } else {
        try {
          c4 = 2;
          if (0 === c3) {
            if (arg0 === 1) {
              c4 = 3;
              throw value;
            } else if (arg0 === 2) {
              c4 = 3;
              const obj3 = { value, done: true };
              return obj3;
            } else {
              closure_1 = tmp3;
              closure_128_0 = undefined;
              let orbsArcadeClaimableRewards;
              let gameState;
              closure_128_3 = undefined;
              orbsArcadeClaimableRewards = tmp5(17017).getOrbsArcadeClaimableRewards(
                game.rewards,
                gameStateForGame.getGameStateForGame(game.id),
              );
              dependencyMap = 1;
              const obj6 = tmp5(17017);
              c3 = 2;
              c4 = 1;
              const obj4 = { value: tmp5(17016).claimOrbsArcadeRewards(game.id), done: false };
              return obj4;
            }
          } else if (1 === tmp8) {
            dependencyMap = 0;
            showOrbsArcadeClaimRewardsError();
            c4 = 3;
            return { value: "HermesInternal", done: "HermesInternal" };
          } else if (arg0 === 1) {
            c4 = 3;
            throw value;
          } else if (arg0 === 2) {
            dependencyMap = 0;
            c4 = 3;
            const obj5 = { value, done: true };
            return obj5;
          } else {
            closure_128_0 = value;
            dependencyMap = 0;
            if (null != closure_128_0) {
              gameState = closure_128_0.gameState;
              closure_128_3 = orbsArcadeClaimableRewards.filter((item) => {
                let claimedAt;
                if (rewardGrants.rewardGrants[item.id] != null) {
                  claimedAt = tmp.claimedAt;
                }
                return null != claimedAt;
              });
              if (closure_128_3.length < orbsArcadeClaimableRewards.length) {
                showOrbsArcadeClaimRewardsError();
              }
              if (closure_128_3.length > 0) {
                const result = tmp5(17033).openOrbsArcadeRewardsCollectedModal(
                  closure_128_3,
                  closure_128_0.entitlements,
                );
                const obj = tmp5(17033);
              }
            }
            c4 = 3;
            return { value: "HermesInternal", done: "HermesInternal" };
          }
        } catch (tmp24) {
          if (tmp4 === dependencyMap) {
            c4 = tmp2;
            throw tmp24;
          } else {
            c3 = tmp;
          }
        }
      }
    }),
    items4,
  );
  let obj3 = { grow: true, size: game.size, variant: "primary", text: null, loading: null, onPress: null };
  const intl = game(1113).intl;
  if (stateFromStores1 > 1) {
    let WK589K = tmp(1113).t.DCCcdz;
  } else {
    WK589K = tmp(1113).t.WK589K;
  }
  obj3.text = intl.string(WK589K);
  obj3.loading = stateFromStores;
  obj3.onPress = callback;
  return jsx(game(5634).Button, {
    grow: true,
    size: game.size,
    variant: "primary",
    text: null,
    loading: null,
    onPress: null,
  });
}
