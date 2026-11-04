// === Module 13426: MultiCharacterContent ===

// Module 13426 (MultiCharacterContent)
import util from "util" /* 1113 */;
import _modDef2533 from "module_2533" /* 2533 */;
import Text_Text from "Text/Text" /* 5761 */;
import GameOrganizationCharacterListDefault from "GameOrganizationCharacterList" /* 13427 */;
import noop from "module_19" /* 19 */;

require = fn;
const jsx = fn(21).jsx;
const createStyles = fn(5141);
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
      const obj2 = { variant: "body-md/normal", color: "text-muted", style: string.statusText, children: null };
      intl2 = intl2(1113).intl;
      string = intl2.string;
      stringResult = string(_modDef2533.Rx9AlK);
      obj2.children = stringResult;
      let tmp9Result = jsx(intl2(5761).Text, { variant: "body-md/normal", color: "text-muted", style: string.statusText, children: null });
    } else {
      tmp9Result = jsx(intl2(7095).ActivityIndicator, {});
    }
  } else {
    if (0 === characters.length) {
      const obj3 = { variant: "body-md/normal", color: "text-muted", style: string.statusText, children: null };
      const intl = util.intl;
      const obj4 = { noun };
      obj3.children = intl.formatToPlainString(_modDef2533.cIerRX, obj4);
      let tmp4 = jsx(Text_Text.Text, { variant: "body-md/normal", color: "text-muted", style: string.statusText, children: null });
    } else {
      const obj = { characters, selectedCharacterId, onSelect, noun };
      tmp4 = jsx(GameOrganizationCharacterListDefault, { characters, selectedCharacterId, onSelect, noun });
    }
    return tmp4;
  }
};