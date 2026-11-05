// discord_app/modules/game_organization_invites/native/GameOrganizationJoinModal/MultiCharacterContent.tsx
import ActivityIndicator_ActivityIndicator from "../../../../design/components/ActivityIndicator/native/ActivityIndicator.native.tsx";
import GameOrganizationCharacterListDefault from "GameOrganizationCharacterList.tsx";
import noop from "../../../../../_runtime/metro/00019__.js";

require = fn;
const jsx = fn(21).jsx;
const size = fn(2);
const result = size.fileFinishedImporting(
  "modules/game_organization_invites/native/GameOrganizationJoinModal/MultiCharacterContent.tsx",
);

export default function MultiCharacterContent(characters) {
  characters = characters.characters;
  if (null == characters) {
    let tmp7 = jsx(ActivityIndicator_ActivityIndicator.ActivityIndicator, {});
  } else {
    const obj = { characters, selectedCharacterId: tmp, onSelect: tmp2, noun: tmp3 };
    tmp7 = jsx(GameOrganizationCharacterListDefault, {
      characters,
      selectedCharacterId: tmp,
      onSelect: tmp2,
      noun: tmp3,
    });
  }
  return tmp7;
}
