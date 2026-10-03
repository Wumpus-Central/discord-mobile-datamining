// discord_app/modules/game_relationships/GameRelationshipStoreHooks.tsx
import _slicedToArray from "../../../_runtime/metro/00032__.js";
import GameRelationshipStore from "GameRelationshipStore.tsx";

const require = globalThis.__r;

const require = fn;
const RelationshipTypes = fn(1085).RelationshipTypes;
fn(558);
let ReactCompilerGating = fn(558);
let closure_5 = ReactCompilerGating.isReactCompilerEnabled()
  ? (arg0, arg1) => {
      _require = arg0;
      dependencyMap = arg1;
      const cResult = require("c").c(5);
      if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
        let items = [GameRelationshipStore];
        cResult[0] = items;
        let first = items;
      } else {
        first = cResult[0];
      }
      if (cResult[1] === arg1) {
        if (cResult[2] === arg0) {
          let tmp6 = cResult[3];
          let tmp7 = cResult[4];
        }
        const tmpResult = tmp(504);
        return _slicedToArray(tmpResult.useStateFromStores(first, tmp6, tmp7, tmp(5589).isVersionEqual), 1)[0];
      }
      const fn = function u() {
        const items = [
          GameRelationshipStore.getGameRelationshipsForUserByType(closure_0, closure_1),
          GameRelationshipStore.getGameRelationshipsVersion(),
        ];
        return items;
      };
      const items1 = [arg1, arg0];
      cResult[1] = arg1;
      cResult[2] = arg0;
      cResult[3] = fn;
      cResult[4] = items1;
      tmp7 = items1;
      tmp6 = fn;
      const obj = require("c");
    }
  : (arg0, arg1) => {
      _require = arg0;
      dependencyMap = arg1;
      let items = [GameRelationshipStore];
      const items1 = [arg1, arg0];
      return _slicedToArray(
        require("initialize").useStateFromStores(
          items,
          () => {
            const items = [
              GameRelationshipStore.getGameRelationshipsForUserByType(closure_0, closure_1),
              GameRelationshipStore.getGameRelationshipsVersion(),
            ];
            return items;
          },
          items1,
          require("SecondaryIndexMapUtils").isVersionEqual,
        ),
        1,
      )[0];
    };
ReactCompilerGating = fn(558);
ReactCompilerGating.isReactCompilerEnabled();
ReactCompilerGating = fn(558);
ReactCompilerGating.isReactCompilerEnabled();
ReactCompilerGating = fn(558);
const tmp2 = ReactCompilerGating.isReactCompilerEnabled()
  ? (arg0) => {
      _require = arg0;
      const cResult = require("c").c(4);
      if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
        let items = [GameRelationshipStore];
        cResult[0] = items;
        let first = items;
      } else {
        first = cResult[0];
      }
      if (cResult[1] !== arg0) {
        const fn = function l() {
          const items = [
            GameRelationshipStore.getGameRelationshipsByType(closure_0),
            GameRelationshipStore.getGameRelationshipsVersion(),
          ];
          return items;
        };
        const items1 = [arg0];
        cResult[1] = arg0;
        cResult[2] = fn;
        cResult[3] = items1;
        let tmp7 = items1;
        let tmp6 = fn;
      } else {
        tmp6 = cResult[2];
        tmp7 = cResult[3];
      }
      const obj = require("c");
      return _slicedToArray(
        require("initialize").useStateFromStores(first, tmp6, tmp7, require("SecondaryIndexMapUtils").isVersionEqual),
        1,
      )[0];
    }
  : (arg0) => {
      _require = arg0;
      let items = [GameRelationshipStore];
      const items1 = [arg0];
      return _slicedToArray(
        require("initialize").useStateFromStores(
          items,
          () => {
            const items = [
              GameRelationshipStore.getGameRelationshipsByType(closure_0),
              GameRelationshipStore.getGameRelationshipsVersion(),
            ];
            return items;
          },
          items1,
          require("SecondaryIndexMapUtils").isVersionEqual,
        ),
        1,
      )[0];
    };
ReactCompilerGating = fn(558);
const tmp5 = ReactCompilerGating.isReactCompilerEnabled()
  ? (arg0) => {
      _require = arg0;
      const cResult = require("c").c(4);
      if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
        let items = [GameRelationshipStore];
        cResult[0] = items;
        let first = items;
      } else {
        first = cResult[0];
      }
      if (cResult[1] !== arg0) {
        const fn = function l() {
          const gameRelationshipsForUser = GameRelationshipStore.getGameRelationshipsForUser(closure_0);
          const items = [gameRelationshipsForUser.length > 0, GameRelationshipStore.getGameRelationshipsVersion()];
          return items;
        };
        const items1 = [arg0];
        cResult[1] = arg0;
        cResult[2] = fn;
        cResult[3] = items1;
        let tmp7 = items1;
        let tmp6 = fn;
      } else {
        tmp6 = cResult[2];
        tmp7 = cResult[3];
      }
      const obj = require("c");
      return _slicedToArray(
        require("initialize").useStateFromStores(first, tmp6, tmp7, require("SecondaryIndexMapUtils").isVersionEqual),
        1,
      )[0];
    }
  : (arg0) => {
      _require = arg0;
      let items = [GameRelationshipStore];
      const items1 = [arg0];
      return _slicedToArray(
        require("initialize").useStateFromStores(
          items,
          () => {
            const gameRelationshipsForUser = GameRelationshipStore.getGameRelationshipsForUser(closure_0);
            const items = [gameRelationshipsForUser.length > 0, GameRelationshipStore.getGameRelationshipsVersion()];
            return items;
          },
          items1,
          require("SecondaryIndexMapUtils").isVersionEqual,
        ),
        1,
      )[0];
    };
fn = (id) => closure_5(id, RelationshipTypes.FRIEND);
const fn2 = (id) => closure_5(id, RelationshipTypes.PENDING_INCOMING);
const size = fn(2);
const result2 = size.fileFinishedImporting("modules/game_relationships/GameRelationshipStoreHooks.tsx");

export const useGameRelationshipsByType = tmp2;
export const useGameFriendsForUser = fn;
export const useIncomingGameRelationshipsForUser = fn2;
export const useHasGameRelationshipsForUser = tmp5;
export const useHasGameRelationshipsForUserByType = ReactCompilerGating.isReactCompilerEnabled()
  ? (arg0, arg1) => {
      _require = arg0;
      dependencyMap = arg1;
      const cResult = require("c").c(5);
      if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
        let items = [GameRelationshipStore];
        cResult[0] = items;
        let first = items;
      } else {
        first = cResult[0];
      }
      if (cResult[1] === arg1) {
        if (cResult[2] === arg0) {
          let tmp6 = cResult[3];
          let tmp7 = cResult[4];
        }
        const tmpResult = tmp(504);
        return _slicedToArray(tmpResult.useStateFromStores(first, tmp6, tmp7, tmp(5589).isVersionEqual), 1)[0];
      }
      const fn = function u() {
        const gameRelationshipsForUserByType = GameRelationshipStore.getGameRelationshipsForUserByType(
          closure_0,
          closure_1,
        );
        const items = [gameRelationshipsForUserByType.length > 0, GameRelationshipStore.getGameRelationshipsVersion()];
        return items;
      };
      const items1 = [arg1, arg0];
      cResult[1] = arg1;
      cResult[2] = arg0;
      cResult[3] = fn;
      cResult[4] = items1;
      tmp7 = items1;
      tmp6 = fn;
      const obj = require("c");
    }
  : (arg0, arg1) => {
      _require = arg0;
      dependencyMap = arg1;
      let items = [GameRelationshipStore];
      const items1 = [arg1, arg0];
      return _slicedToArray(
        require("initialize").useStateFromStores(
          items,
          () => {
            const gameRelationshipsForUserByType = GameRelationshipStore.getGameRelationshipsForUserByType(
              closure_0,
              closure_1,
            );
            const items = [
              gameRelationshipsForUserByType.length > 0,
              GameRelationshipStore.getGameRelationshipsVersion(),
            ];
            return items;
          },
          items1,
          require("SecondaryIndexMapUtils").isVersionEqual,
        ),
        1,
      )[0];
    };
