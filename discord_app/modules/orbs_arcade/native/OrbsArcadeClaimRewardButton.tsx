// === Module 16683: OrbsArcadeClaimRewardButton ===

// Module 16683 (OrbsArcadeClaimRewardButton)
import util from "util" /* 1125 */;
import ToastActionCreatorsDefault from "ToastActionCreators" /* 5699 */;
import OrbsArcadeRewardUtils from "OrbsArcadeRewardUtils" /* 16669 */;
import asyncGeneratorStep from "asyncGeneratorStep" /* 5 */;
import noop from "module_19" /* 19 */;
import OrbsArcadeStore from "OrbsArcadeStore" /* 16662 */;

const require = globalThis.__r;

require = fn;
function showOrbsArcadeClaimRewardsError() {
  const obj2 = { text: null, variant: "critical" };
  const intl = util.intl;
  obj2.text = intl.string(util.t.CKsXk3);
  ToastActionCreatorsDefault.open("ORBS_ARCADE_CLAIM_REWARD_ERROR", obj2);
}
const jsx = fn(21).jsx;
const ReactCompilerGating = fn(558);
let size = fn(2);
let result = size.fileFinishedImporting("modules/orbs_arcade/native/OrbsArcadeClaimRewardButton.tsx");

export default ReactCompilerGating.isReactCompilerEnabled() ? (function OrbsArcadeClaimRewardButton(game) {
  const cResult = require("c").c(19);
  game = game.game;
  _require = game;
  const size = game.size;
  if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
    const items = [OrbsArcadeStore];
    cResult[0] = items;
    let first = items;
  } else {
    first = cResult[0];
  }
  if (cResult[1] !== game.id) {
    const fn = function c() {
      return OrbsArcadeStore.isClaimingRewards(user.id);
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
  let obj = require("c");
  const stateFromStores = require("initialize").useStateFromStores(first, tmp6, tmp7);
  if (cResult[4] === Symbol.for("react.memo_cache_sentinel")) {
    const items2 = [OrbsArcadeStore];
    cResult[4] = items2;
    let tmp9 = items2;
  } else {
    tmp9 = cResult[4];
  }
  if (cResult[5] === game.id) {
    if (cResult[6] === game.rewards) {
      let tmp11 = cResult[7];
      let tmp12 = cResult[8];
    }
    const stateFromStores1 = tmp(504).useStateFromStores(tmp9, tmp11, tmp12);
    if (cResult[9] === game.id) {
      if (cResult[10] === game.rewards) {
        let tmp14 = cResult[11];
      }
      if (cResult[12] !== stateFromStores1) {
        const intl = tmp(1125).intl;
        if (stateFromStores1 > 1) {
          let WK589K = tmp(1125).t.DCCcdz;
        } else {
          WK589K = tmp(1125).t.WK589K;
        }
        const stringResult = intl.string(WK589K);
        cResult[12] = stateFromStores1;
        cResult[13] = stringResult;
      } else {
        if (cResult[14] === tmp14) {
          if (cResult[15] === stateFromStores) {
            if (cResult[16] === size) {
              if (cResult[17] === tmp16) {
                let tmp19 = cResult[18];
              }
              return tmp19;
            }
          }
        }
        let obj2 = { grow: true, size, variant: "primary", text: cResult[13], loading: stateFromStores, onPress: tmp14 };
        const tmp21 = jsx(tmp(5280).Button, { grow: true, size, variant: "primary", text: cResult[13], loading: stateFromStores, onPress: tmp14 });
        cResult[14] = tmp14;
        cResult[15] = stateFromStores;
        cResult[16] = size;
        cResult[17] = cResult[13];
        cResult[18] = tmp21;
        tmp19 = tmp21;
      }
    }
    _require = asyncGeneratorStep(async () => {
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
          return { value: "IconComponent", done: null };
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
              orbsArcadeClaimableRewards = tmp5(16669).getOrbsArcadeClaimableRewards(tmp5.rewards, gameStateForGame.getGameStateForGame(tmp5.id));
              c2 = 1;
              const obj6 = tmp5(16669);
              c3 = 2;
              c4 = 1;
              const obj4 = { value: tmp5(16668).claimOrbsArcadeRewards(tmp5.id), done: false };
              return obj4;
            }
          } else if (1 === tmp8) {
            c2 = 0;
            showOrbsArcadeClaimRewardsError();
            c4 = 3;
            return { value: "IconComponent", done: null };
          } else if (arg0 === 1) {
            c4 = 3;
            throw value;
          } else if (arg0 === 2) {
            c2 = 0;
            c4 = 3;
            const obj5 = { value, done: true };
            return obj5;
          } else {
            closure_128_0 = value;
            c2 = 0;
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
                const result = tmp5(16684).openOrbsArcadeRewardsCollectedModal(closure_128_3, closure_128_0.entitlements);
                const obj = tmp5(16684);
              }
            }
            c4 = 3;
            return { value: "IconComponent", done: null };
          }
        } catch (tmp24) {
          if (tmp4 === c2) {
            c4 = tmp2;
            throw tmp24;
          } else {
            c3 = tmp;
          }
        }
      }
    });
    function t7() {
      const self = this;
      const apply = closure_0.apply;
      if (typeof apply === "unknown") {
        let applyArgumentsResult = HermesBuiltin.applyArguments(self);
      } else {
        applyArgumentsResult = apply(self, arguments);
      }
      return applyArgumentsResult;
    }
    cResult[9] = game.id;
    cResult[10] = game.rewards;
    cResult[11] = t7;
    tmp14 = t7;
    const tmpResult2 = tmp(504);
  }
  class A {
    constructor() {
      obj = closure_0(closure_2[9]);
      return obj.getOrbsArcadeClaimableRewards(closure_0.rewards, closure_5.getGameStateForGame(closure_0.id)).length;
    }
  }
  const items3 = [, ];
  ({ id: arr4[0], rewards: arr4[1] } = game);
  cResult[5] = game.id;
  cResult[6] = game.rewards;
  cResult[7] = A;
  cResult[8] = items3;
  tmp12 = items3;
  tmp11 = A;
  const tmpResult = require("initialize");
}) : (function OrbsArcadeClaimRewardButton(game) {
  game = game.game;
  const items = [OrbsArcadeStore];
  const items1 = [game.id];
  const stateFromStores = game(504).useStateFromStores(items, () => OrbsArcadeStore.isClaimingRewards(game.id), items1);
  let obj = game(504);
  const items2 = [OrbsArcadeStore];
  const items3 = [, ];
  ({ id: arr4[0], rewards: arr4[1] } = game);
  const stateFromStores1 = game(504).useStateFromStores(items2, () => OrbsArcadeRewardUtils.getOrbsArcadeClaimableRewards(game.rewards, OrbsArcadeStore.getGameStateForGame(game.id)).length, items3);
  const items4 = [, ];
  ({ id: arr5[0], rewards: arr5[1] } = game);
  const callback = noop.useCallback(asyncGeneratorStep(async () => {
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
        return { value: "IconComponent", done: null };
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
            orbsArcadeClaimableRewards = tmp5(16669).getOrbsArcadeClaimableRewards(game.rewards, gameStateForGame.getGameStateForGame(game.id));
            dependencyMap = 1;
            const obj6 = tmp5(16669);
            c3 = 2;
            c4 = 1;
            const obj4 = { value: tmp5(16668).claimOrbsArcadeRewards(game.id), done: false };
            return obj4;
          }
        } else if (1 === tmp8) {
          dependencyMap = 0;
          showOrbsArcadeClaimRewardsError();
          c4 = 3;
          return { value: "IconComponent", done: null };
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
              const result = tmp5(16684).openOrbsArcadeRewardsCollectedModal(closure_128_3, closure_128_0.entitlements);
              const obj = tmp5(16684);
            }
          }
          c4 = 3;
          return { value: "IconComponent", done: null };
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
  }), items4);
  let obj3 = { grow: true, size: game.size, variant: "primary", text: null, loading: null, onPress: null };
  const intl = game(1125).intl;
  if (stateFromStores1 > 1) {
    let WK589K = tmp(1125).t.DCCcdz;
  } else {
    WK589K = tmp(1125).t.WK589K;
  }
  obj3.text = intl.string(WK589K);
  obj3.loading = stateFromStores;
  obj3.onPress = callback;
  return jsx(game(5280).Button, { grow: true, size: game.size, variant: "primary", text: null, loading: null, onPress: null });
});