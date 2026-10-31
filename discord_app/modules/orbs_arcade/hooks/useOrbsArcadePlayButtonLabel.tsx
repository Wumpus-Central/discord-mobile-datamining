// discord_app/modules/orbs_arcade/hooks/useOrbsArcadePlayButtonLabel.tsx
import OrbsArcadeStore from "../OrbsArcadeStore.tsx";

const require = globalThis.__r;

const require = fn;
const size = fn(2);
const result = size.fileFinishedImporting("modules/orbs_arcade/hooks/useOrbsArcadePlayButtonLabel.tsx");

export default function useOrbsArcadePlayButtonLabel(orbCost) {
  _require = orbCost;
  const items = [OrbsArcadeStore];
  const items1 = [,];
  ({ id: arr2[0], numFreePlays: arr2[1] } = orbCost);
  const stateFromStores = require("initialize").useStateFromStores(
    items,
    () => {
      const gameStateForGame = OrbsArcadeStore.getGameStateForGame(orbCost.id);
      let prop;
      if (gameStateForGame != null) {
        prop = gameStateForGame.numFreePlaysRemaining;
      }
      if (prop == null) {
        prop = orbCost.numFreePlays;
      }
      return prop;
    },
    items1,
  );
  const obj = require("initialize");
  const virtualCurrencyBalance = require("useVirtualCurrencyBalance").useVirtualCurrencyBalance();
  const obj2 = require("useVirtualCurrencyBalance");
  const items2 = [OrbsArcadeStore];
  let num = orbCost.orbCost;
  const stateFromStores1 = require("initialize").useStateFromStores(
    items2,
    () => heldRunChargeTotal.heldRunChargeTotal,
  );
  if (num == null) {
    num = 0;
  }
  let tmp7 = tmp6;
  if (num > 0) {
    tmp7 = null != stateFromStores;
  }
  if (tmp7) {
    tmp7 = stateFromStores <= 0;
  }
  if (tmp7) {
    const intl3 = tmp(1113).intl;
    if (null == virtualCurrencyBalance || virtualCurrencyBalance - stateFromStores1 >= num) {
      const obj4 = { count: num };
      let formatToPlainStringResult = intl3.formatToPlainString(tmp(1113).t["L1yi/U"], obj4);
    } else {
      formatToPlainStringResult = intl3.string(tmp(1113).t.T1eNyO);
    }
    const obj5 = {
      text: formatToPlainStringResult,
      isPaidPlay: tmp7,
      canAffordPlay: null == virtualCurrencyBalance || virtualCurrencyBalance - stateFromStores1 >= num,
    };
    return obj5;
  } else {
    if (tmp6) {
      if (null != stateFromStores) {
        const obj6 = { text: null, isPaidPlay: null, canAffordPlay: true };
        const intl2 = tmp(1113).intl;
        const obj7 = { count: stateFromStores };
        obj6.text = intl2.formatToPlainString(tmp(1113).t.onJEzB, obj7);
        obj6.isPaidPlay = tmp7;
        let obj8 = obj6;
      }
      return obj8;
    }
    obj8 = { text: null, isPaidPlay: null, canAffordPlay: true };
    const intl = tmp(1113).intl;
    obj8.text = intl.string(tmp(1113).t["7/xnly"]);
    obj8.isPaidPlay = tmp7;
  }
  const obj3 = require("initialize");
}
