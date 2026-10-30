// === Module 16979: useOrbsArcadePlayButtonLabel ===

// Module 16979 (useOrbsArcadePlayButtonLabel)
import OrbsArcadeStore from "OrbsArcadeStore" /* 16954 */;

const require = globalThis.__r;

const require = fn;
const size = fn(2);
const result = size.fileFinishedImporting("modules/orbs_arcade/hooks/useOrbsArcadePlayButtonLabel.tsx");

export default function useOrbsArcadePlayButtonLabel(orbCost) {
  _require = orbCost;
  const items = [OrbsArcadeStore];
  const items1 = [, ];
  ({ id: arr2[0], numFreePlays: arr2[1] } = orbCost);
  const stateFromStores = require("initialize").useStateFromStores(items, () => {
    const gameStateForGame = OrbsArcadeStore.getGameStateForGame(orbCost.id);
    let prop;
    if (gameStateForGame != null) {
      prop = gameStateForGame.numFreePlaysRemaining;
    }
    if (prop == null) {
      prop = orbCost.numFreePlays;
    }
    return prop;
  }, items1);
  let tmp4 = null != orbCost.orbCost;
  if (tmp4) {
    tmp4 = orbCost.orbCost > 0;
  }
  let tmp5 = tmp4;
  if (tmp4) {
    tmp5 = null != stateFromStores;
  }
  if (tmp5) {
    tmp5 = stateFromStores <= 0;
  }
  if (tmp5) {
    const obj2 = { text: null, isPaidPlay: null };
    const intl3 = tmp(1114).intl;
    const obj3 = { count: orbCost.orbCost };
    obj2.text = intl3.formatToPlainString(tmp(1114).t.oSWYca, obj3);
    obj2.isPaidPlay = tmp5;
    let obj6 = obj2;
  } else {
    if (tmp4) {
      if (null != stateFromStores) {
        const obj4 = { text: null, isPaidPlay: null };
        const intl2 = tmp(1114).intl;
        const obj5 = { count: stateFromStores };
        obj4.text = intl2.formatToPlainString(tmp(1114).t.onJEzB, obj5);
        obj4.isPaidPlay = tmp5;
        obj6 = obj4;
      }
    }
    obj6 = { text: null, isPaidPlay: null };
    const intl = tmp(1114).intl;
    obj6.text = intl.string(tmp(1114).t["7/xnly"]);
    obj6.isPaidPlay = tmp5;
  }
  return obj6;
};