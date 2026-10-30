// === Module 13157: GameOrganizationCharacterList ===

// Module 13157 (GameOrganizationCharacterList)
import nativeDefault from "native" /* 575 */;
import util from "util" /* 1114 */;
import _modDef2405 from "module_2405" /* 2405 */;
import useA11yRolesNative from "useA11yRolesNative" /* 5077 */;
import useToken from "useToken" /* 5591 */;
import Text_Text from "Text/Text" /* 5619 */;
import Stack_Stack from "Stack/Stack" /* 6022 */;
import Card from "Card" /* 6971 */;
import CircleErrorIcon from "CircleErrorIcon" /* 7080 */;
import GameOrganizationIconDefault from "GameOrganizationIcon" /* 13155 */;
import noop from "module_19" /* 19 */;

require = fn;
function CharacterSubLabel(text) {
  text = text.text;
  if (text.eligible) {
    const obj2 = { variant: "text-sm/medium", color: "text-subtle", children: text };
    let tmp6 = hasOwnProperty(Text_Text.Text, obj2);
  } else {
    const obj = { direction: "horizontal", spacing: nativeDefault.space.PX_4, align: "center", children: null };
    const obj3 = { size: "xs", color: nativeDefault.colors.ICON_MUTED };
    const items = [hasOwnProperty(CircleErrorIcon.CircleErrorIcon, obj3), ];
    const obj4 = { variant: "text-sm/medium", color: "text-muted", children: text };
    items[1] = hasOwnProperty(Text_Text.Text, obj4);
    obj.children = items;
    tmp6 = timestampProducer(Stack_Stack.Stack, obj);
  }
  return tmp6;
}
const View = fn(17).View;
const jsxProd = fn(21);
({ jsx: hasOwnProperty, jsxs: metroRequire } = jsxProd);
const createStyles = fn(5009);
let obj = { card: { paddingVertical: nativeDefault.space.PX_12, paddingHorizontal: nativeDefault.space.PX_12 }, selectedCard: null, labels: null, cards: null, title: null };
let obj3 = { paddingVertical: nativeDefault.space.PX_12, paddingHorizontal: nativeDefault.space.PX_12 };
obj.selectedCard = { borderColor: nativeDefault.colors.REDESIGN_INPUT_CONTROL_SELECTED };
obj.labels = { flex: 1 };
let obj4 = { borderColor: nativeDefault.colors.REDESIGN_INPUT_CONTROL_SELECTED };
obj.cards = { gap: nativeDefault.space.PX_12 };
obj.title = { alignSelf: "center" };
let closure_7 = createStyles.createStyles(obj);
let closure_9 = noop.memo(function CharacterCard(character) {
  character = character.character;
  ({ selected, onSelect: importDefault } = character);
  const tmp = closure_7();
  const eligible = character.eligible;
  const token = useToken.useToken(nativeDefault.modules.mobile.TABLE_ROW_LABEL_TEXT_STYLE);
  const radioA11yNative = useA11yRolesNative.useRadioA11yNative({ selected, disabled: tmp6 });
  const description = character.description;
  ({ accessibilityRole, accessibilityState } = radioA11yNative);
  if (character.eligible) {
    let formatToPlainStringResult = description;
  } else {
    formatToPlainStringResult = description;
    if (description == null) {
      const intl = util.intl;
      const obj3 = { noun: character.noun };
      formatToPlainStringResult = intl.formatToPlainString(_modDef2405.VNY3C1, obj3);
    }
  }
  const obj4 = {
    onPress() {
      return importDefault(character.id);
    },
    disabled: !eligible,
    style: null,
    accessibilityRole: null,
    accessibilityState: null,
    accessibilityLabel: null,
    children: null
  };
  const items = [tmp.card, ];
  if (selected) {
    selected = tmp.selectedCard;
  }
  items[1] = selected;
  obj4.style = items;
  obj4.accessibilityRole = accessibilityRole;
  obj4.accessibilityState = accessibilityState;
  if (null != formatToPlainStringResult) {
    const _HermesInternal = HermesInternal;
    let name = "" + character.name + ", " + formatToPlainStringResult;
  } else {
    name = character.name;
  }
  obj4.accessibilityLabel = name;
  const obj5 = { direction: "horizontal", spacing: nativeDefault.space.PX_16, align: "center", children: null };
  const obj6 = { iconUrl: character.iconUrl, size: 48, borderRadius: null };
  obj6.borderRadius = nativeDefault.radii.md;
  const items1 = [hasOwnProperty(GameOrganizationIconDefault, obj6), ];
  const obj7 = { spacing: nativeDefault.space.PX_4, style: tmp.labels, children: null };
  const obj8 = { variant: token, color: null, children: null };
  let str3 = "text-default";
  if (!eligible) {
    str3 = "text-muted";
  }
  obj8.color = str3;
  obj8.children = character.name;
  const items2 = [hasOwnProperty(Text_Text.Text, obj8), ];
  let tmp10Result = null != formatToPlainStringResult;
  if (tmp10Result) {
    const obj9 = { text: formatToPlainStringResult, eligible: character.eligible };
    tmp10Result = hasOwnProperty(CharacterSubLabel, obj9);
  }
  items2[1] = tmp10Result;
  obj7.children = items2;
  items1[1] = timestampProducer(Stack_Stack.Stack, obj7);
  obj5.children = items1;
  obj4.children = timestampProducer(Stack_Stack.Stack, obj5);
  return hasOwnProperty(Card.Card, obj4);
});
const size = fn(2);
const result = size.fileFinishedImporting("modules/game_organization_invites/native/GameOrganizationJoinModal/GameOrganizationCharacterList.tsx");

export default function GameOrganizationCharacterList(characters) {
  characters = characters.characters;
  ({ selectedCharacterId: importDefault, onSelect: dependencyMap, noun } = characters);
  const tmp = closure_7();
  let items = [characters];
  const memo = noun.useMemo(() => {
    const items = [...characters];
    return items.sort((eligible, eligible2) => Number(eligible2.eligible) - Number(eligible.eligible));
  }, items);
  let someResult = characters.some((eligible) => !eligible.eligible);
  const obj = { spacing: nativeDefault.space.PX_12, children: null };
  const obj2 = { style: tmp.title, title: null };
  const intl = characters(1114).intl;
  obj2.title = intl.formatToPlainString(_modDef2405["Xm+emB"], { noun });
  const items1 = [closure_5(characters(7054).TableRowGroupTitle, obj2), closure_5(View, { accessibilityRole: "radiogroup", style: tmp.cards, children: memo.map((character) => hasOwnProperty(closure_9, { character, selected: character.id === importDefault, onSelect, noun }, character.id)) }), ];
  if (someResult) {
    const obj4 = { variant: "text-md/medium", color: "text-subtle", children: null };
    const intl2 = tmp4(1114).intl;
    const obj5 = { noun };
    obj4.children = intl2.formatToPlainString(_modDef2405.ybJIQJ, obj5);
    someResult = closure_5(tmp4(5619).Text, obj4);
  }
  items1[2] = someResult;
  obj.children = items1;
  return closure_6(characters(6022).Stack, obj);
};