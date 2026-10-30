// === Module 13156: MultiCharacterContent ===

// Module 13156 (MultiCharacterContent)
import util from "util" /* 1114 */;
import _modDef2405 from "module_2405" /* 2405 */;
import Text_Text from "Text/Text" /* 5619 */;
import GameOrganizationCharacterListDefault from "GameOrganizationCharacterList" /* 13157 */;
import noop from "module_19" /* 19 */;

require = fn;
const jsx = fn(21).jsx;
const createStyles = fn(5009);
let closure_4 = createStyles.createStyles({ statusText: { textAlign: "center" } });
const size = fn(2);
const result = size.fileFinishedImporting("modules/game_organization_invites/native/GameOrganizationJoinModal/MultiCharacterContent.tsx");

export default function MultiCharacterContent(arg0) {
  ({ characters, noun } = arg0);
  ({ hasError, selectedCharacterId, onSelect } = arg0);
  let string = closure_4();
  if (null == characters) {
    let intl2 = require;
    let stringResult = dependencyMap;
    if (hasError) {
      const obj2 = { variant: "text-md/normal", color: "text-muted", style: string.statusText, children: null };
      intl2 = intl2(1114).intl;
      string = intl2.string;
      stringResult = string(_modDef2405.Rx9AlK);
      obj2.children = stringResult;
      let tmp9Result = jsx(intl2(5619).Text, { variant: "text-md/normal", color: "text-muted", style: string.statusText, children: null });
    } else {
      tmp9Result = jsx(intl2(6947).ActivityIndicator, {});
    }
  } else {
    if (0 === characters.length) {
      const obj3 = { variant: "text-md/normal", color: "text-muted", style: string.statusText, children: null };
      const intl = util.intl;
      const obj4 = { noun };
      obj3.children = intl.formatToPlainString(_modDef2405.cIerRX, obj4);
      let tmp4 = jsx(Text_Text.Text, { variant: "text-md/normal", color: "text-muted", style: string.statusText, children: null });
    } else {
      const obj = { characters, selectedCharacterId, onSelect, noun };
      tmp4 = jsx(GameOrganizationCharacterListDefault, { characters, selectedCharacterId, onSelect, noun });
    }
    return tmp4;
  }
};