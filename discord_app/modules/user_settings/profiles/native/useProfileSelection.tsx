// === Module 15980: useProfileSelection ===

// Module 15980 (useProfileSelection)
import GuildIdentityActionCreators from "GuildIdentityActionCreators" /* 9397 */;
import _slicedToArray from "module_32" /* 32 */;
import noop from "module_19" /* 19 */;
import ProfileCustomizationNavigationStore from "ProfileCustomizationNavigationStore" /* 9395 */;
import SortedGuildStore from "SortedGuildStore" /* 6133 */;

const require = globalThis.__r;

require = fn;
let closure_6 = fn(1081).ProfileCustomizationSubsection;
const UserProfileSections = fn(6106).UserProfileSections;
const size = fn(2);
const result = size.fileFinishedImporting("modules/user_settings/profiles/native/useProfileSelection.tsx");

export default function useProfileSelection() {
  const tmp = _slicedToArray(noop.useState(false), 2);
  _require = tmp[1];
  const obj = {
    hasGuilds: null,
    hasSwitchedProfile: tmp[0],
    handleSelectMainProfile: noop.useCallback(() => {
      closure_0(true);
      ProfileCustomizationNavigationStore.setState({ subsection: constants.USER_PROFILE });
    }, []),
    handleSelectGuild: noop.useCallback((id) => {
      closure_0(true);
      GuildIdentityActionCreators.setCurrentGuild(id.id);
      ProfileCustomizationNavigationStore.setState({ subsection: constants.GUILD, editingTab: UserProfileSections.MAIN });
    }, [])
  };
  items = [SortedGuildStore];
  obj.hasGuilds = require("initialize").useStateFromStores(items, () => flattenedGuildIds.getFlattenedGuildIds().length > 0);
  return obj;
};