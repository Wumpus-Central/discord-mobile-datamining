// === Module 13910: _initialize ===

// Module 13910 (_initialize)
import dispatcherDefault from "dispatcher" /* 709 */;
import initializeDefault from "initialize" /* 4720 */;
import recountRelationshipTypes from "recountRelationshipTypes" /* 5406 */;
import { RelationshipTypes } from "ME" /* 676 */;

initializeDefault;
class GameRelationshipManager extends tmp2 {
  constructor() {
    applyArgumentsResult = HermesBuiltin.applyArguments(new.target, new.target);
    applyArgumentsResult.handlePostConnectionOpen = function handlePostConnectionOpen() {
      gameRelationships = gameRelationships.getGameRelationships();
      const set = new Set();
      const values = gameRelationships.values();
      const item = values.forEach((item, index) => {
        if (item.type === closure_1_3.PENDING_INCOMING) {
          set.add(item.applicationId);
        }
      });
      const applications = set(table[4]).fetchApplications(Array.from(set));
    };
    return applyArgumentsResult;
  }
}
const prototype = GameRelationshipManager.prototype;
prototype["_initialize"] = function _initialize() {
  const subscription = dispatcherDefault.subscribe("POST_CONNECTION_OPEN", this.handlePostConnectionOpen);
};
prototype["_terminate"] = function _terminate() {
  dispatcherDefault.unsubscribe("POST_CONNECTION_OPEN", this.handlePostConnectionOpen);
};
prototype["destroy"] = function destroy() {
  dispatcherDefault.unsubscribe("POST_CONNECTION_OPEN", this.handlePostConnectionOpen);
};
const gameRelationshipManager = new GameRelationshipManager();
const result = require("obj132").fileFinishedImporting("modules/game_relationships/GameRelationshipManager.tsx");

export default gameRelationshipManager;