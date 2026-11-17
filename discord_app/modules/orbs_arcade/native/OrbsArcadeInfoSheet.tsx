// === Module 17714: OrbsArcadeInfoSheet ===

// Module 17714 (OrbsArcadeInfoSheet)
import OrbsArcadeSheetActionsDefault from "OrbsArcadeSheetActions" /* 17705 */;
import OrbsArcadeGameGraphicDefault from "OrbsArcadeGameGraphic" /* 17715 */;
import noop from "module_19" /* 19 */;
import OrbsArcadeStore from "OrbsArcadeStore" /* 17685 */;

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
    const intl = tmp(1113).intl;
    obj3.title = intl.string(tmp(1113).t["3AT3DL"]);
    const intl2 = tmp(1113).intl;
    obj3.description = intl2.string(tmp(1113).t.GSj8gp);
    const obj4 = { game: stateFromStores, sheetKey: "OrbsArcadeInfoSheet", location: null, surface: null, secondaryAction: null, direction: "vertical" };
    tmpResult = tmp(17715);
    obj4.location = tmp(17695).OrbsArcadeCtaLocation.INFO_SHEET;
    obj4.surface = gameId.surface;
    obj4.secondaryAction = tmp(17705).OrbsArcadeSheetSecondaryAction.CLOSE;
    obj3.actions = jsx(OrbsArcadeSheetActionsDefault, { game: stateFromStores, sheetKey: "OrbsArcadeInfoSheet", location: null, surface: null, secondaryAction: null, direction: "vertical" });
    tmp5Result2 = jsx(tmp(11903).PromoSheet, { gradientColor: "blue", illustration: tmp5Result, title: null, description: null, actions: null });
  }
  return tmp5Result2;
};