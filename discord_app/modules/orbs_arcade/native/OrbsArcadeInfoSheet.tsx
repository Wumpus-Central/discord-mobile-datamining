// discord_app/modules/orbs_arcade/native/OrbsArcadeInfoSheet.tsx
import OrbsArcadeGameGraphicDefault from "OrbsArcadeGameGraphic.tsx";
import OrbsArcadeSheetActionsDefault from "OrbsArcadeSheetActions.tsx";
import noop from "../../../../_runtime/metro/00019__.js";
import OrbsArcadeStore from "../OrbsArcadeStore.tsx";

const require = fn;
const jsx = fn(21).jsx;
const size = fn(2);
const result = size.fileFinishedImporting("modules/orbs_arcade/native/OrbsArcadeInfoSheet.tsx");

export default function OrbsArcadeInfoSheet(gameId) {
  gameId = gameId.gameId;
  const items = [OrbsArcadeStore];
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
    const obj3 = { illustration: tmp8Result, title: null, description: null, actions: null };
    const intl = tmp(1114).intl;
    obj3.title = intl.string(tmp(1114).t["3AT3DL"]);
    const intl2 = tmp(1114).intl;
    obj3.description = intl2.string(tmp(1114).t.GSj8gp);
    const obj4 = {
      game: stateFromStores,
      sheetKey: "OrbsArcadeInfoSheet",
      secondaryAction: tmp(16974).OrbsArcadeSheetSecondaryAction.HOW_TO_PLAY,
      direction: "vertical",
    };
    obj3.actions = jsx(OrbsArcadeSheetActionsDefault, {
      game: stateFromStores,
      sheetKey: "OrbsArcadeInfoSheet",
      secondaryAction: tmp(16974).OrbsArcadeSheetSecondaryAction.HOW_TO_PLAY,
      direction: "vertical",
    });
    return jsx(tmp(10817).PromoSheet, { illustration: tmp8Result, title: null, description: null, actions: null });
  }
  const obj = gameId(504);
}
