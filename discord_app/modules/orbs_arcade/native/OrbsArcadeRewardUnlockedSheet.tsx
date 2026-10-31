// === Module 17045: OrbsArcadeRewardUnlockedSheet ===

// Module 17045 (OrbsArcadeRewardUnlockedSheet)
import nativeDefault from "native" /* 575 */;
import noop from "module_19" /* 19 */;
import OrbsArcadeStore from "OrbsArcadeStore" /* 17010 */;

const require = fn;
const View = fn(17).View;
const jsxProd = fn(21);
({ jsx: metroRequire, jsxs: closure_7 } = jsxProd);
const createStyles = fn(5014);
let obj2 = { chain: { marginHorizontal: nativeDefault.space.PX_8 } };
let closure_8 = createStyles.createStyles(obj2);
const size = fn(2);
const result = size.fileFinishedImporting("modules/orbs_arcade/native/OrbsArcadeRewardUnlockedSheet.tsx");

export default function OrbsArcadeRewardUnlockedSheet(gameId) {
  gameId = gameId.gameId;
  let stateFromStores1;
  const tmp = closure_8();
  const items = [OrbsArcadeStore];
  const items1 = [gameId];
  const stateFromStores = gameId(stateFromStores1[6]).useStateFromStores(items, () => OrbsArcadeStore.getGame(gameId), items1);
  const obj = gameId(stateFromStores1[6]);
  const items2 = [OrbsArcadeStore];
  const items3 = [gameId];
  stateFromStores1 = gameId(stateFromStores1[6]).useStateFromStores(items2, () => OrbsArcadeStore.getGameStateForGame(gameId), items3);
  const obj2 = gameId(stateFromStores1[6]);
  const items4 = [OrbsArcadeStore];
  const stateFromStores2 = gameId(stateFromStores1[6]).useStateFromStores(items4, () => ownedRewardSkuIds.ownedRewardSkuIds);
  let rewards;
  if (stateFromStores != null) {
    rewards = stateFromStores.rewards;
  }
  const items5 = [rewards, stateFromStores1, stateFromStores2];
  const memo = stateFromStores2.useMemo(() => {
    let flag;
    if (stateFromStores != null) {
      const rewards = stateFromStores.rewards;
      flag = rewards.every((item) => {
        const orbsArcadeRewardStatus = gameId(stateFromStores1[7]).getOrbsArcadeRewardStatus(item, closure_1_2, stateFromStores2);
        return orbsArcadeRewardStatus !== gameId(stateFromStores1[8]).OrbsArcadeRewardStatus.LOCKED;
      });
    }
    if (flag == null) {
      flag = false;
    }
    return flag;
  }, items5);
  if (null == stateFromStores) {
    return null;
  } else {
    const length = tmp2(tmp3[7]).getOrbsArcadeClaimableRewards(stateFromStores.rewards, stateFromStores1).length;
    let str = stateFromStores.name;
    if (str == null) {
      str = "";
    }
    const obj4 = { gradientColor: "blue", illustration: closure_6(tmp2(tmp3[10]).GameTrophySpotIllustration, { scale: 0.55 }), title: null, description: null, actions: null };
    const intl = tmp2(tmp3[11]).intl;
    if (memo) {
      let v2ld2SU = tmp2(tmp3[11]).t["2ld2SU"];
    } else if (length > 1) {
      v2ld2SU = tmp2(tmp3[11]).t.NmSe9v;
    } else {
      v2ld2SU = tmp2(tmp3[11]).t["/xryus"];
    }
    obj4.title = intl.string(v2ld2SU);
    const intl2 = tmp2(tmp3[11]).intl;
    const t = tmp2(tmp3[11]).t;
    const obj5 = { gameName: str };
    obj4.description = intl2.formatToPlainString(memo ? t["x+5mCs"] : t.xUeO0j, obj5);
    const obj6 = { spacing: stateFromStores(tmp3[5]).space.PX_24, children: null };
    const obj7 = { style: tmp.chain, children: null };
    const obj8 = { game: stateFromStores, gameState: stateFromStores1, grantAnimatedOnOpenRewardIds: gameId.unlockedRewardIds };
    obj7.children = closure_6(stateFromStores(tmp3[13]), obj8);
    const items6 = [closure_6(View, obj7), ];
    const obj9 = { game: stateFromStores, sheetKey: "OrbsArcadeRewardUnlockedSheet", primaryAction: null, secondaryAction: null };
    let CLAIM = null;
    const tmp2Result = tmp2(tmp3[7]);
    if (length > 0) {
      CLAIM = tmp2(tmp3[14]).OrbsArcadeSheetPrimaryAction.CLAIM;
    }
    obj9.primaryAction = CLAIM;
    obj9.secondaryAction = tmp2(tmp3[14]).OrbsArcadeSheetSecondaryAction.CLOSE;
    items6[1] = closure_6(stateFromStores(tmp3[14]), obj9);
    obj6.children = items6;
    obj4.actions = closure_7(tmp2(tmp3[12]).Stack, obj6);
    return closure_6(tmp2(tmp3[9]).PromoSheet, obj4);
  }
  const obj3 = gameId(stateFromStores1[6]);
};