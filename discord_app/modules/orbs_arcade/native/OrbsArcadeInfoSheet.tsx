// discord_app/modules/orbs_arcade/native/OrbsArcadeInfoSheet.tsx
import OrbsArcadeSheetActionsDefault from "OrbsArcadeSheetActions.tsx";
import OrbsArcadeGameGraphicDefault from "OrbsArcadeGameGraphic.tsx";
import noop from "../../../../_runtime/metro/00019__.js";
import OrbsArcadeStore from "../OrbsArcadeStore.tsx";

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
    const obj4 = {
      game: stateFromStores,
      sheetKey: "OrbsArcadeInfoSheet",
      location: null,
      surface: null,
      secondaryAction: null,
      direction: "vertical",
    };
    tmpResult = tmp(16486);
    obj4.location = tmp(16466).OrbsArcadeCtaLocation.INFO_SHEET;
    obj4.surface = gameId.surface;
    obj4.secondaryAction = tmp(16476).OrbsArcadeSheetSecondaryAction.CLOSE;
    obj3.actions = jsx(OrbsArcadeSheetActionsDefault, {
      game: stateFromStores,
      sheetKey: "OrbsArcadeInfoSheet",
      location: null,
      surface: null,
      secondaryAction: null,
      direction: "vertical",
    });
    tmp5Result2 = jsx(tmp(10603).PromoSheet, {
      gradientColor: "blue",
      illustration: tmp5Result,
      title: null,
      description: null,
      actions: null,
    });
  }
  return tmp5Result2;
}
