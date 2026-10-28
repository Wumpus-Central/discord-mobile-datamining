// discord_app/modules/orbs_arcade/native/OrbsArcadeInfoSheet.tsx
import OrbsArcadeGameGraphicDefault from "OrbsArcadeGameGraphic.tsx";
import OrbsArcadeSheetActionsDefault from "OrbsArcadeSheetActions.tsx";
import noop from "../../../../_runtime/metro/00019__.js";
import OrbsArcadeStore from "../OrbsArcadeStore.tsx";

const require = fn;
const jsx = fn(21).jsx;
const OrbsArcadeInfoSheet = "OrbsArcadeInfoSheet";
const ReactCompilerGating = fn(558);
const size = fn(2);
const result = size.fileFinishedImporting("modules/orbs_arcade/native/OrbsArcadeInfoSheet.tsx");

export default ReactCompilerGating.isReactCompilerEnabled()
  ? function OrbsArcadeInfoSheet(gameId) {
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
        const asset = stateFromStores.asset;
        if (cResult[4] !== asset) {
          let tmp10;
          if (null != asset) {
            const obj2 = { asset };
            tmp10 = jsx(OrbsArcadeGameGraphicDefault, { asset });
          }
          cResult[4] = asset;
          cResult[5] = tmp10;
          let tmp9 = tmp10;
        } else {
          tmp9 = cResult[5];
        }
        const _Symbol = Symbol;
        if (cResult[6] === Symbol.for("react.memo_cache_sentinel")) {
          const intl = tmp(1125).intl;
          const stringResult = intl.string(tmp(1125).t["3AT3DL"]);
          const intl2 = tmp(1125).intl;
          const stringResult1 = intl2.string(tmp(1125).t.GSj8gp);
          cResult[6] = stringResult;
          cResult[7] = stringResult1;
          let tmp14 = stringResult1;
          let tmp13 = stringResult;
        } else {
          tmp13 = cResult[6];
          tmp14 = cResult[7];
        }
        if (cResult[8] !== stateFromStores) {
          const obj3 = {
            game: stateFromStores,
            sheetKey: OrbsArcadeInfoSheet,
            secondaryAction: tmp(16682).OrbsArcadeSheetSecondaryAction.HOW_TO_PLAY,
            direction: "vertical",
          };
          const tmp22 = jsx(OrbsArcadeSheetActionsDefault, {
            game: stateFromStores,
            sheetKey: OrbsArcadeInfoSheet,
            secondaryAction: tmp(16682).OrbsArcadeSheetSecondaryAction.HOW_TO_PLAY,
            direction: "vertical",
          });
          cResult[8] = stateFromStores;
          cResult[9] = tmp22;
          let tmp17 = tmp22;
        } else {
          tmp17 = cResult[9];
        }
        if (cResult[10] === tmp9) {
          if (cResult[11] === tmp17) {
            let tmp23 = cResult[12];
          }
          return tmp23;
        }
        const obj4 = { illustration: tmp9, title: tmp13, description: tmp14, actions: tmp17 };
        const tmp25 = jsx(tmp(10894).PromoSheet, {
          illustration: tmp9,
          title: tmp13,
          description: tmp14,
          actions: tmp17,
        });
        cResult[10] = tmp9;
        cResult[11] = tmp17;
        cResult[12] = tmp25;
        tmp23 = tmp25;
      }
      const tmpResult = gameId(504);
    }
  : function OrbsArcadeInfoSheet(gameId) {
      gameId = gameId.gameId;
      const items = [OrbsArcadeStore];
      const items1 = [gameId];
      const stateFromStores = gameId(504).useStateFromStores(items, () => OrbsArcadeStore.getGame(gameId), items1);
      if (null == stateFromStores) {
        return null;
      } else {
        const asset = stateFromStores.asset;
        let tmp9Result;
        if (null != asset) {
          const obj2 = { asset };
          tmp9Result = jsx(OrbsArcadeGameGraphicDefault, { asset });
        }
        const obj3 = { illustration: tmp9Result, title: null, description: null, actions: null };
        const intl = tmp(1125).intl;
        obj3.title = intl.string(tmp(1125).t["3AT3DL"]);
        const intl2 = tmp(1125).intl;
        obj3.description = intl2.string(tmp(1125).t.GSj8gp);
        const obj4 = {
          game: stateFromStores,
          sheetKey: OrbsArcadeInfoSheet,
          secondaryAction: tmp(16682).OrbsArcadeSheetSecondaryAction.HOW_TO_PLAY,
          direction: "vertical",
        };
        obj3.actions = jsx(OrbsArcadeSheetActionsDefault, {
          game: stateFromStores,
          sheetKey: OrbsArcadeInfoSheet,
          secondaryAction: tmp(16682).OrbsArcadeSheetSecondaryAction.HOW_TO_PLAY,
          direction: "vertical",
        });
        return jsx(tmp(10894).PromoSheet, { illustration: tmp9Result, title: null, description: null, actions: null });
      }
      const obj = gameId(504);
    };
