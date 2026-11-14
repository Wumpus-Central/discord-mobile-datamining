// === Module 14077: MultiCharacterContent ===

// Module 14077 (MultiCharacterContent)
import ActivityIndicator_ActivityIndicator from "ActivityIndicator/ActivityIndicator" /* 7418 */;
import GameOrganizationCharacterListDefault from "GameOrganizationCharacterList" /* 14078 */;
import noop from "module_19" /* 19 */;

require = fn;
const jsx = fn(21).jsx;
const size = fn(2);
const result = size.fileFinishedImporting("modules/game_organization_invites/native/GameOrganizationJoinModal/MultiCharacterContent.tsx");

export default function MultiCharacterContent(characters) {
  characters = characters.characters;
  if (null == characters) {
    let tmp7 = jsx(ActivityIndicator_ActivityIndicator.ActivityIndicator, {});
  } else {
    const obj = { characters, selectedCharacterId: tmp, onSelect: tmp2, noun: tmp3 };
    tmp7 = jsx(GameOrganizationCharacterListDefault, { characters, selectedCharacterId: tmp, onSelect: tmp2, noun: tmp3 });
  }
  return tmp7;
};