// === Module 16664: OrbsArcadeInfoSheet ===

// Module 16664 (OrbsArcadeInfoSheet)
import OrbsArcadeSheetActionsDefault from "OrbsArcadeSheetActions" /* 16655 */;
import OrbsArcadeGameGraphicDefault from "OrbsArcadeGameGraphic" /* 16665 */;
import noop from "module_19" /* 19 */;
import OrbsArcadeStore from "OrbsArcadeStore" /* 16635 */;

const require = fn;
const jsx = fn(21).jsx;
const size = fn(2);
const result = size.fileFinishedImporting("modules/orbs_arcade/native/OrbsArcadeInfoSheet.tsx");

export default function OrbsArcadeInfoSheet(gameId) {
  gameId = gameId.gameId;
  items = [OrbsArcadeStore];
  const items1 = [gameId];
  const stateFromStores = gameId(504).useStateFromStores(items, () => OrbsArcadeStore.getGame(gameId), items1);
  let tmp5Result2 = null;
  if (null != stateFromStores) {
    let tmp5Result;
    if (tmpResult.hasOrbsArcadeGameGraphic(stateFromStores)) {
      const obj2 = { game: stateFromStores };
      tmp5Result = jsx(OrbsArcadeGameGraphicDefault, { game: stateFromStores });
    }
    const obj3 = { gradientColor: "blue", illustration: tmp5Result, title: null, description: null, actions: null };
    const intl = tmp(1112).intl;
    obj3.title = intl.string(tmp(1112).t["3AT3DL"]);
    const intl2 = tmp(1112).intl;
    obj3.description = intl2.string(tmp(1112).t.GSj8gp);
    const obj4 = { game: stateFromStores, sheetKey: "OrbsArcadeInfoSheet", location: null, surface: null, secondaryAction: null, direction: "vertical" };
    tmpResult = tmp(16665);
    obj4.location = tmp(16645).OrbsArcadeCtaLocation.INFO_SHEET;
    obj4.surface = gameId.surface;
    obj4.secondaryAction = tmp(16655).OrbsArcadeSheetSecondaryAction.CLOSE;
    obj3.actions = jsx(OrbsArcadeSheetActionsDefault, { game: stateFromStores, sheetKey: "OrbsArcadeInfoSheet", location: null, surface: null, secondaryAction: null, direction: "vertical" });
    tmp5Result2 = jsx(tmp(10748).PromoSheet, { gradientColor: "blue", illustration: tmp5Result, title: null, description: null, actions: null });
  }
  return tmp5Result2;
};