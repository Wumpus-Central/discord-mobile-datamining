// discord_app/modules/messages/useIsRelationshipTypeSpamReportable.tsx
import markAllUserIdListsStale from "markAllUserIdListsStale";
import { RelationshipTypes } from "ME";
import { initialize } from "../../../discord_common/js/packages/flux/index.tsx";

const require = arg1;
const result = require("initialize").fileFinishedImporting("modules/messages/useIsRelationshipTypeSpamReportable.tsx");

export const useIsRelationshipTypeSpamReportable = function useIsRelationshipTypeSpamReportable(id) {
  const _require = id;
  const items = [markAllUserIdListsStale];
  const items1 = [id];
  const stateFromStores = _initialize.useStateFromStores(items, () => outer1_2.getRelationshipType(closure_0), items1);
  return stateFromStores === RelationshipTypes.NONE || stateFromStores === RelationshipTypes.BLOCKED || stateFromStores === RelationshipTypes.PENDING_INCOMING;
};