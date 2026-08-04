// discord_app/modules/game_relationships/GameRelationshipManager.tsx
import recountRelationshipTypes from "recountRelationshipTypes";
import { RelationshipTypes } from "ME";
import "initialize";

class GameRelationshipManager extends tmp2 {
  constructor() {
    applyArgumentsResult = HermesBuiltin.applyArguments(new.target, new.target);
    applyArgumentsResult.handlePostConnectionOpen = function handlePostConnectionOpen() {
      gameRelationships = gameRelationships.getGameRelationships();
      const set = new Set();
      const values = gameRelationships.values();
      const item = values.forEach((type) => {
        if (type.type === outer1_3.PENDING_INCOMING) {
          set.add(type.applicationId);
        }
      });
      const applications = set(table[4]).fetchApplications(Array.from(set));
    };
    return applyArgumentsResult;
  }
}
const prototype = GameRelationshipManager.prototype;
prototype["_initialize"] = function _initialize() {
  const subscription = importDefault(709).subscribe("POST_CONNECTION_OPEN", this.handlePostConnectionOpen);
};
prototype["_terminate"] = function _terminate() {
  importDefault(709).unsubscribe("POST_CONNECTION_OPEN", this.handlePostConnectionOpen);
};
prototype["destroy"] = function destroy() {
  importDefault(709).unsubscribe("POST_CONNECTION_OPEN", this.handlePostConnectionOpen);
};
const gameRelationshipManager = new GameRelationshipManager();
const result = require("initialize").fileFinishedImporting("modules/game_relationships/GameRelationshipManager.tsx");

export default gameRelationshipManager;