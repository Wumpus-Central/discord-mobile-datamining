// === Module 17372: OrbsArcadeInfoSheet ===

// Module 17372 (OrbsArcadeInfoSheet)
import OrbsArcadeGameGraphicDefault from "OrbsArcadeGameGraphic" /* 17354 */;
import OrbsArcadeSheetActionsDefault from "OrbsArcadeSheetActions" /* 17355 */;
import noop from "module_19" /* 19 */;
import OrbsArcadeStore from "OrbsArcadeStore" /* 17341 */;

const require = fn;
const jsx = fn(21).jsx;
const size = fn(2);
const result = size.fileFinishedImporting("modules/orbs_arcade/native/OrbsArcadeInfoSheet.tsx");

export default function OrbsArcadeInfoSheet(gameId) {
  gameId = gameId.gameId;
  items = [OrbsArcadeStore];
  const items1 = [gameId];
  const stateFromStores = gameId(504).useStateFromStores(items, () => OrbsArcadeStore.getGame(gameId), items1);
  if (null == stateFromStores) {
    return null;
  } else {
    const asset = stateFromStores.asset;
    let tmp8Result;
    if (null != asset) {
      const obj2 = { asset };
      tmp8Result = jsx(OrbsArcadeGameGraphicDefault, { asset });
    }
    const obj3 = { gradientColor: "blue", illustration: tmp8Result, title: null, description: null, actions: null };
    const intl = tmp(1113).intl;
    obj3.title = intl.string(tmp(1113).t["3AT3DL"]);
    const intl2 = tmp(1113).intl;
    obj3.description = intl2.string(tmp(1113).t.GSj8gp);
    const obj4 = { game: stateFromStores, sheetKey: "OrbsArcadeInfoSheet", location: tmp(17351).OrbsArcadeCtaLocation.INFO_SHEET, surface: gameId.surface, secondaryAction: tmp(17355).OrbsArcadeSheetSecondaryAction.HOW_TO_PLAY, direction: "vertical" };
    obj3.actions = jsx(OrbsArcadeSheetActionsDefault, { game: stateFromStores, sheetKey: "OrbsArcadeInfoSheet", location: tmp(17351).OrbsArcadeCtaLocation.INFO_SHEET, surface: gameId.surface, secondaryAction: tmp(17355).OrbsArcadeSheetSecondaryAction.HOW_TO_PLAY, direction: "vertical" });
    return jsx(tmp(10956).PromoSheet, { gradientColor: "blue", illustration: tmp8Result, title: null, description: null, actions: null });
  }
  const obj = gameId(504);
};