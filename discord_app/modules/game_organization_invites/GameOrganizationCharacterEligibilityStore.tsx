// === Module 13184: GameOrganizationCharacterEligibilityStore ===

// Module 13184 (GameOrganizationCharacterEligibilityStore)
import initializeDefault from "initialize" /* 504 */;
import DispatcherDefault from "Dispatcher" /* 572 */;
import fromServerGameOrganization from "fromServerGameOrganization" /* 11364 */;

require = fn;
let map = new Map();
const Store = initializeDefault.Store;
class GameOrganizationCharacterEligibilityStore extends Store {
}
GameOrganizationCharacterEligibilityStore.prototype["getCharacters"] = function getCharacters(arg0) {
  value = map.get(arg0);
  if (value == null) {
    value = null;
  }
  return value;
};
GameOrganizationCharacterEligibilityStore.displayName = "GameOrganizationCharacterEligibilityStore";
const gameOrganizationCharacterEligibilityStore = new GameOrganizationCharacterEligibilityStore(DispatcherDefault, {
  GAME_ORGANIZATION_CHARACTER_ELIGIBILITY_FETCH_SUCCESS: function handleFetchSuccess(characters) {
    characters = characters.characters;
    map = new Map(map);
    const result = map.set(characters.code, characters.map(fromServerGameOrganization.fromServerGameOrganizationCharacter));
  },
  LOGOUT: function handleLogout() {
    if (0 === map.size) {
      return false;
    } else {
      const _Map = Map;
      map = new Map();
    }
  }
});
const size = fn(2);
let result = size.fileFinishedImporting("modules/game_organization_invites/GameOrganizationCharacterEligibilityStore.tsx");

export default gameOrganizationCharacterEligibilityStore;