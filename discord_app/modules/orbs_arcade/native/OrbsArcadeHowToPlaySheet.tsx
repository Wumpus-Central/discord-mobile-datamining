// === Module 16451: OrbsArcadeHowToPlaySheet ===

// Module 16451 (OrbsArcadeHowToPlaySheet)
import OrbsArcadeGameGraphicDefault from "OrbsArcadeGameGraphic" /* 16452 */;
import OrbsArcadeSheetActionsDefault from "OrbsArcadeSheetActions" /* 16453 */;
import noop from "module_19" /* 19 */;
import OrbsArcadeStore from "OrbsArcadeStore" /* 16434 */;

const require = fn;
const jsx = fn(21).jsx;
const OrbsArcadeHowToPlaySheet = "OrbsArcadeHowToPlaySheet";
const ReactCompilerGating = fn(558);
const size = fn(2);
const result = size.fileFinishedImporting("modules/orbs_arcade/native/OrbsArcadeHowToPlaySheet.tsx");

export default ReactCompilerGating.isReactCompilerEnabled() ? (function OrbsArcadeHowToPlaySheet(gameId) {
  const cResult = gameId(576).c(13);
  gameId = gameId.gameId;
  if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
    const items = [OrbsArcadeStore];
    cResult[0] = items;
    let first = items;
  } else {
    first = cResult[0];
  }
  if (cResult[1] !== gameId) {
    const fn = function l() {
      return OrbsArcadeStore.getGame(gameId);
    };
    const items1 = [gameId];
    cResult[1] = gameId;
    cResult[2] = fn;
    cResult[3] = items1;
    let tmp7 = items1;
    let tmp6 = fn;
  } else {
    tmp6 = cResult[2];
    tmp7 = cResult[3];
  }
  const obj = gameId(576);
  const stateFromStores = gameId(504).useStateFromStores(first, tmp6, tmp7);
  if (null == stateFromStores) {
    return null;
  } else {
    if (cResult[4] !== stateFromStores.asset) {
      let tmp10;
      if (null != stateFromStores.asset) {
        const obj2 = { asset: stateFromStores.asset };
        tmp10 = jsx(OrbsArcadeGameGraphicDefault, { asset: stateFromStores.asset });
      }
      cResult[4] = stateFromStores.asset;
      cResult[5] = tmp10;
      let tmp9 = tmp10;
    } else {
      tmp9 = cResult[5];
    }
    const _Symbol = Symbol;
    if (cResult[6] === Symbol.for("react.memo_cache_sentinel")) {
      const intl = tmp(1125).intl;
      const stringResult = intl.string(tmp(1125).t["uz4M/z"]);
      cResult[6] = stringResult;
      let tmp13 = stringResult;
    } else {
      tmp13 = cResult[6];
    }
    let str = stateFromStores.instructions;
    if (str == null) {
      str = "";
    }
    if (cResult[7] !== stateFromStores) {
      const obj3 = { game: stateFromStores, sheetKey: OrbsArcadeHowToPlaySheet, secondaryAction: tmp(16453).OrbsArcadeSheetSecondaryAction.CLOSE, direction: "vertical" };
      const tmp20 = jsx(OrbsArcadeSheetActionsDefault, { game: stateFromStores, sheetKey: OrbsArcadeHowToPlaySheet, secondaryAction: tmp(16453).OrbsArcadeSheetSecondaryAction.CLOSE, direction: "vertical" });
      cResult[7] = stateFromStores;
      cResult[8] = tmp20;
      let tmp15 = tmp20;
    } else {
      tmp15 = cResult[8];
    }
    if (cResult[9] === tmp9) {
      if (cResult[10] === str) {
        if (cResult[11] === tmp15) {
          let tmp21 = cResult[12];
        }
        return tmp21;
      }
    }
    const obj4 = { illustration: tmp9, title: tmp13, description: str, actions: tmp15 };
    const tmp23 = jsx(tmp(10859).PromoSheet, { illustration: tmp9, title: tmp13, description: str, actions: tmp15 });
    cResult[9] = tmp9;
    cResult[10] = str;
    cResult[11] = tmp15;
    cResult[12] = tmp23;
    tmp21 = tmp23;
  }
  const tmpResult = gameId(504);
}) : (function OrbsArcadeHowToPlaySheet(gameId) {
  gameId = gameId.gameId;
  const items = [OrbsArcadeStore];
  const items1 = [gameId];
  const stateFromStores = gameId(504).useStateFromStores(items, () => OrbsArcadeStore.getGame(gameId), items1);
  let tmp5Result2 = null;
  if (null != stateFromStores) {
    let tmp5Result;
    if (null != stateFromStores.asset) {
      const obj2 = { asset: stateFromStores.asset };
      tmp5Result = jsx(OrbsArcadeGameGraphicDefault, { asset: stateFromStores.asset });
    }
    const obj3 = { illustration: tmp5Result, title: null, description: null, actions: null };
    const intl = tmp(1125).intl;
    obj3.title = intl.string(tmp(1125).t["uz4M/z"]);
    let str = stateFromStores.instructions;
    if (str == null) {
      str = "";
    }
    obj3.description = str;
    const obj4 = { game: stateFromStores, sheetKey: OrbsArcadeHowToPlaySheet, secondaryAction: tmp(16453).OrbsArcadeSheetSecondaryAction.CLOSE, direction: "vertical" };
    obj3.actions = jsx(OrbsArcadeSheetActionsDefault, { game: stateFromStores, sheetKey: OrbsArcadeHowToPlaySheet, secondaryAction: tmp(16453).OrbsArcadeSheetSecondaryAction.CLOSE, direction: "vertical" });
    tmp5Result2 = jsx(tmp(10859).PromoSheet, { illustration: tmp5Result, title: null, description: null, actions: null });
  }
  return tmp5Result2;
});