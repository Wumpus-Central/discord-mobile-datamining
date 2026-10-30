// discord_app/modules/orbs_arcade/native/OrbsArcadeRewardUnlockedSheet.tsx
import noop from "../../../../_runtime/metro/00019__.js";
import OrbsArcadeStore from "../OrbsArcadeStore.tsx";

const require = fn;
const jsxProd = fn(21);
({ jsx: hasOwnProperty, jsxs: metroRequire } = jsxProd);
const size = fn(2);
const result = size.fileFinishedImporting("modules/orbs_arcade/native/OrbsArcadeRewardUnlockedSheet.tsx");

export default function OrbsArcadeRewardUnlockedSheet(gameId) {
  gameId = gameId.gameId;
  let stateFromStores1;
  const items = [OrbsArcadeStore];
  const items1 = [gameId];
  const stateFromStores = gameId(stateFromStores1[3]).useStateFromStores(
    items,
    () => OrbsArcadeStore.getGame(gameId),
    items1,
  );
  const obj = gameId(stateFromStores1[3]);
  const items2 = [OrbsArcadeStore];
  const items3 = [gameId];
  stateFromStores1 = gameId(stateFromStores1[3]).useStateFromStores(
    items2,
    () => OrbsArcadeStore.getGameStateForGame(gameId),
    items3,
  );
  let rewards;
  if (stateFromStores != null) {
    rewards = stateFromStores.rewards;
  }
  const items4 = [rewards, stateFromStores1];
  const memo = noop.useMemo(() => {
    let flag;
    if (stateFromStores != null) {
      const rewards = stateFromStores.rewards;
      flag = rewards.every((id) => {
        const orbsArcadeRewardStatus = gameId(stateFromStores1[4]).getOrbsArcadeRewardStatus(id.id, closure_1_2);
        return orbsArcadeRewardStatus !== gameId(stateFromStores1[5]).OrbsArcadeRewardStatus.LOCKED;
      });
    }
    if (flag == null) {
      flag = false;
    }
    return flag;
  }, items4);
  if (null == stateFromStores) {
    return null;
  } else {
    const length = tmp(tmp2[4]).getOrbsArcadeClaimableRewards(stateFromStores.rewards, stateFromStores1).length;
    let str = stateFromStores.name;
    if (str == null) {
      str = "";
    }
    const obj3 = {
      gradientColor: "blue",
      illustration: closure_5(tmp(tmp2[7]).GameTrophySpotIllustration, { scale: 0.5 }),
      title: null,
      description: null,
      actions: null,
    };
    const intl = tmp(tmp2[8]).intl;
    if (memo) {
      let v2ld2SU = tmp(tmp2[8]).t["2ld2SU"];
    } else if (length > 1) {
      v2ld2SU = tmp(tmp2[8]).t.NmSe9v;
    } else {
      v2ld2SU = tmp(tmp2[8]).t["/xryus"];
    }
    obj3.title = intl.string(v2ld2SU);
    const intl2 = tmp(tmp2[8]).intl;
    const t = tmp(tmp2[8]).t;
    const obj4 = { gameName: str };
    obj3.description = intl2.formatToPlainString(memo ? t["x+5mCs"] : t.xUeO0j, obj4);
    const obj5 = { spacing: stateFromStores(tmp2[10]).space.PX_24, children: null };
    const obj6 = {
      game: stateFromStores,
      gameState: stateFromStores1,
      grantAnimatedOnOpenRewardIds: gameId.unlockedRewardIds,
    };
    const items5 = [closure_5(stateFromStores(tmp2[11]), obj6)];
    const obj7 = {
      game: stateFromStores,
      sheetKey: "OrbsArcadeRewardUnlockedSheet",
      primaryAction: null,
      secondaryAction: null,
    };
    let CLAIM = null;
    const tmpResult = tmp(tmp2[4]);
    if (length > 0) {
      CLAIM = tmp(tmp2[12]).OrbsArcadeSheetPrimaryAction.CLAIM;
    }
    obj7.primaryAction = CLAIM;
    obj7.secondaryAction = tmp(tmp2[12]).OrbsArcadeSheetSecondaryAction.CLOSE;
    items5[1] = closure_5(stateFromStores(tmp2[12]), obj7);
    obj5.children = items5;
    obj3.actions = closure_6(tmp(tmp2[9]).Stack, obj5);
    return closure_5(tmp(tmp2[6]).PromoSheet, obj3);
  }
  const obj2 = gameId(stateFromStores1[3]);
}
