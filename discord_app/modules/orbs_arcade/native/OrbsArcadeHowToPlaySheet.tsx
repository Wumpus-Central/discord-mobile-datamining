// discord_app/modules/orbs_arcade/native/OrbsArcadeHowToPlaySheet.tsx
import OrbsArcadeGameGraphicDefault from "OrbsArcadeGameGraphic.tsx";
import OrbsArcadeSheetActionsDefault from "OrbsArcadeSheetActions.tsx";
import noop from "../../../../_runtime/metro/00019__.js";
import OrbsArcadeStore from "../OrbsArcadeStore.tsx";

const require = fn;
const jsx = fn(21).jsx;
const size = fn(2);
const result = size.fileFinishedImporting("modules/orbs_arcade/native/OrbsArcadeHowToPlaySheet.tsx");

export default function OrbsArcadeHowToPlaySheet(gameId) {
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
    const intl = tmp(1114).intl;
    obj3.title = intl.string(tmp(1114).t["uz4M/z"]);
    let str = stateFromStores.instructions;
    if (str == null) {
      str = "";
    }
    obj3.description = str;
    const obj4 = {
      game: stateFromStores,
      sheetKey: "OrbsArcadeHowToPlaySheet",
      secondaryAction: tmp(16974).OrbsArcadeSheetSecondaryAction.CLOSE,
      direction: "vertical",
    };
    obj3.actions = jsx(OrbsArcadeSheetActionsDefault, {
      game: stateFromStores,
      sheetKey: "OrbsArcadeHowToPlaySheet",
      secondaryAction: tmp(16974).OrbsArcadeSheetSecondaryAction.CLOSE,
      direction: "vertical",
    });
    tmp5Result2 = jsx(tmp(10817).PromoSheet, {
      illustration: tmp5Result,
      title: null,
      description: null,
      actions: null,
    });
  }
  return tmp5Result2;
}
