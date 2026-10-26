// === Module 16419: useOrbsArcadePlayButtonLabel ===

// Module 16419 (useOrbsArcadePlayButtonLabel)
import OrbsArcadeStore from "OrbsArcadeStore" /* 16395 */;

const require = globalThis.__r;

const require = fn;
const ReactCompilerGating = fn(558);
const size = fn(2);
const result = size.fileFinishedImporting("modules/orbs_arcade/hooks/useOrbsArcadePlayButtonLabel.tsx");

export default ReactCompilerGating.isReactCompilerEnabled() ? (function useOrbsArcadePlayButtonLabel(id) {
  _require = id;
  const cResult = require("c").c(18);
  if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
    const items = [OrbsArcadeStore];
    cResult[0] = items;
    let first = items;
  } else {
    first = cResult[0];
  }
  if (cResult[1] === id.id) {
    if (cResult[2] === id.numFreePlays) {
      let tmp6 = cResult[3];
      let tmp7 = cResult[4];
    }
    const stateFromStores = tmp(504).useStateFromStores(first, tmp6, tmp7);
    let tmp10 = null != id.orbCost;
    if (tmp10) {
      tmp10 = id.orbCost > 0;
    }
    let tmp11 = tmp10;
    if (tmp10) {
      tmp11 = null != stateFromStores;
    }
    if (tmp11) {
      tmp11 = stateFromStores <= 0;
    }
    if (tmp11) {
      if (cResult[5] !== id.orbCost) {
        const intl3 = tmp(1128).intl;
        const obj2 = { count: id.orbCost };
        const formatToPlainStringResult = intl3.formatToPlainString(tmp(1128).t.oSWYca, obj2);
        cResult[5] = id.orbCost;
        cResult[6] = formatToPlainStringResult;
        let tmp19 = formatToPlainStringResult;
      } else {
        tmp19 = cResult[6];
      }
      if (cResult[7] === tmp11) {
      }
      const obj3 = { text: tmp19, isPaidPlay: tmp11 };
      cResult[7] = tmp11;
      cResult[8] = tmp19;
      cResult[9] = obj3;
    } else {
      if (tmp10) {
        if (null != stateFromStores) {
          if (cResult[10] !== stateFromStores) {
            const intl2 = tmp(1128).intl;
            const obj4 = { count: stateFromStores };
            const formatToPlainStringResult1 = intl2.formatToPlainString(tmp(1128).t.onJEzB, obj4);
            cResult[10] = stateFromStores;
            cResult[11] = formatToPlainStringResult1;
            let tmp15 = formatToPlainStringResult1;
          } else {
            tmp15 = cResult[11];
          }
          if (cResult[12] === tmp11) {
          }
          const obj5 = { text: tmp15, isPaidPlay: tmp11 };
          cResult[12] = tmp11;
          cResult[13] = tmp15;
          cResult[14] = obj5;
        }
      }
      const _Symbol = Symbol;
      if (cResult[15] === Symbol.for("react.memo_cache_sentinel")) {
        const intl = tmp(1128).intl;
        const stringResult = intl.string(tmp(1128).t["7/xnly"]);
        cResult[15] = stringResult;
        let tmp12 = stringResult;
      } else {
        tmp12 = cResult[15];
      }
      if (cResult[16] !== tmp11) {
        const obj6 = { text: tmp12, isPaidPlay: tmp11 };
        cResult[16] = tmp11;
        cResult[17] = obj6;
        let tmp14 = obj6;
      } else {
        tmp14 = cResult[17];
      }
      return tmp14;
    }
    const tmpResult = tmp(504);
  }
  const fn = function l() {
    const gameStateForGame = OrbsArcadeStore.getGameStateForGame(id.id);
    let prop;
    if (gameStateForGame != null) {
      prop = gameStateForGame.numFreePlaysRemaining;
    }
    if (prop == null) {
      prop = id.numFreePlays;
    }
    return prop;
  };
  const items1 = [, ];
  ({ id: arr2[0], numFreePlays: arr2[1] } = id);
  cResult[1] = id.id;
  cResult[2] = id.numFreePlays;
  cResult[3] = fn;
  cResult[4] = items1;
  tmp7 = items1;
  tmp6 = fn;
  const obj = require("c");
}) : (function useOrbsArcadePlayButtonLabel(orbCost) {
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
    const intl3 = tmp(1128).intl;
    const obj3 = { count: orbCost.orbCost };
    obj2.text = intl3.formatToPlainString(tmp(1128).t.oSWYca, obj3);
    obj2.isPaidPlay = tmp5;
    let obj6 = obj2;
  } else {
    if (tmp4) {
      if (null != stateFromStores) {
        const obj4 = { text: null, isPaidPlay: null };
        const intl2 = tmp(1128).intl;
        const obj5 = { count: stateFromStores };
        obj4.text = intl2.formatToPlainString(tmp(1128).t.onJEzB, obj5);
        obj4.isPaidPlay = tmp5;
        obj6 = obj4;
      }
    }
    obj6 = { text: null, isPaidPlay: null };
    const intl = tmp(1128).intl;
    obj6.text = intl.string(tmp(1128).t["7/xnly"]);
    obj6.isPaidPlay = tmp5;
  }
  return obj6;
});