// discord_app/modules/messages/useIsRelationshipTypeSpamReportable.tsx
import Constants from "../../Constants.tsx";
import RelationshipStore from "../../stores/RelationshipStore.tsx";
import ReactCompilerGating from "../react_compiler/ReactCompilerGating.tsx";
import size from "../../../_runtime/metro/00002__.js";

const require = globalThis.__r;
let _require;

const RelationshipTypes = Constants.RelationshipTypes;
const tmp2 = ReactCompilerGating.isReactCompilerEnabled()
  ? (arg0) => {
      let closure_0;
      let first;
      let tmp6;
      let tmp7;
      _require = arg0;
      const obj = require("react");
      const cResult = obj.c(4);
      const tmp = _require;
      if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
        const items = [RelationshipStore];
        cResult[0] = items;
        first = items;
      } else {
        first = cResult[0];
      }
      if (cResult[1] !== arg0) {
        const fn = function p() {
          return RelationshipStore.getRelationshipType(closure_0);
        };
        const items1 = [arg0];
        cResult[1] = arg0;
        cResult[2] = fn;
        cResult[3] = items1;
        tmp7 = items1;
        tmp6 = fn;
      } else {
        tmp6 = cResult[2];
        tmp7 = cResult[3];
      }
      const tmpResult = tmp(504);
      const stateFromStores = tmpResult.useStateFromStores(first, tmp6, tmp7);
      return (
        stateFromStores === RelationshipTypes.NONE ||
        stateFromStores === RelationshipTypes.BLOCKED ||
        stateFromStores === RelationshipTypes.PENDING_INCOMING
      );
    }
  : (arg0) => {
      let closure_0;
      _require = arg0;
      const items = [RelationshipStore];
      const items1 = [arg0];
      const obj = require("get initialized");
      const stateFromStores = obj.useStateFromStores(
        items,
        () => RelationshipStore.getRelationshipType(closure_0),
        items1,
      );
      return (
        stateFromStores === RelationshipTypes.NONE ||
        stateFromStores === RelationshipTypes.BLOCKED ||
        stateFromStores === RelationshipTypes.PENDING_INCOMING
      );
    };
const result = size.fileFinishedImporting("modules/messages/useIsRelationshipTypeSpamReportable.tsx");

export const useIsRelationshipTypeSpamReportable = tmp2;
