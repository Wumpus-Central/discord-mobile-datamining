// discord_app/modules/game_organization_invites/native/GameOrganizationJoinModal/MultiCharacterContent.tsx
import util from "../../../../intl/index.native.tsx";
import _modDef2404 from "../../GameOrganizationInvitesUntranslated.messages.js";
import Text_Text from "../../../../design/components/Text/native/Text.tsx";
import GameOrganizationCharacterListDefault from "GameOrganizationCharacterList.tsx";
import noop from "../../../../../_runtime/metro/00019__.js";

require = fn;
const jsx = fn(21).jsx;
const createStyles = fn(5014);
let closure_4 = createStyles.createStyles({ statusText: { textAlign: "center" } });
const size = fn(2);
const result = size.fileFinishedImporting(
  "modules/game_organization_invites/native/GameOrganizationJoinModal/MultiCharacterContent.tsx",
);

export default function MultiCharacterContent(arg0) {
  ({ characters, noun } = arg0);
  ({ hasError, selectedCharacterId, onSelect } = arg0);
  let string = closure_4();
  if (null == characters) {
    let intl2 = require;
    let stringResult = dependencyMap;
    if (hasError) {
      const obj2 = { variant: "text-md/normal", color: "text-muted", style: string.statusText, children: null };
      intl2 = intl2(1113).intl;
      string = intl2.string;
      stringResult = string(_modDef2404.Rx9AlK);
      obj2.children = stringResult;
      let tmp9Result = jsx(intl2(5624).Text, {
        variant: "text-md/normal",
        color: "text-muted",
        style: string.statusText,
        children: null,
      });
    } else {
      tmp9Result = jsx(intl2(6953).ActivityIndicator, {});
    }
  } else {
    if (0 === characters.length) {
      const obj3 = { variant: "text-md/normal", color: "text-muted", style: string.statusText, children: null };
      const intl = util.intl;
      const obj4 = { noun };
      obj3.children = intl.formatToPlainString(_modDef2404.cIerRX, obj4);
      let tmp4 = jsx(Text_Text.Text, {
        variant: "text-md/normal",
        color: "text-muted",
        style: string.statusText,
        children: null,
      });
    } else {
      const obj = { characters, selectedCharacterId, onSelect, noun };
      tmp4 = jsx(GameOrganizationCharacterListDefault, { characters, selectedCharacterId, onSelect, noun });
    }
    return tmp4;
  }
}
