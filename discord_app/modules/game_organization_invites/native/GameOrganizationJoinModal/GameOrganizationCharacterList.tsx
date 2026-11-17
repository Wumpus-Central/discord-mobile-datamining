// discord_app/modules/game_organization_invites/native/GameOrganizationJoinModal/GameOrganizationCharacterList.tsx
import nativeDefault from "../../../../../discord_common/js/packages/tokens/native.tsx";
import util from "../../../../intl/index.native.tsx";
import _modDef2565 from "../../GameOrganizationInvitesUntranslated.messages.js";
import useA11yRolesNative from "../../../../../discord_common/js/packages/design/hooks/useA11yRolesNative.tsx";
import useToken from "../../../../design/tokens/native/useToken.tsx";
import Text_Text from "../../../../design/components/Text/native/Text.tsx";
import Stack_Stack from "../../../../design/components/Stack/native/Stack.native.tsx";
import Card from "../../../../design/components/Card/native/Card.native.tsx";
import CircleErrorIcon from "../../../../design/components/Icon/native/redesign/generated/CircleErrorIcon.tsx";
import GameOrganizationIconDefault from "../GameOrganizationIcon.tsx";
import noop from "../../../../../_runtime/metro/00019__.js";

require = fn;
function CharacterSubLabel(text) {
  text = text.text;
  if (text.eligible) {
    const obj2 = { variant: "body-sm/medium", color: "text-subtle", children: text };
    let tmp6 = hasOwnProperty(Text_Text.Text, obj2);
  } else {
    const obj = { direction: "horizontal", spacing: nativeDefault.space.PX_4, align: "center", children: null };
    const obj3 = { size: "xs", color: nativeDefault.colors.ICON_MUTED };
    items = [hasOwnProperty(CircleErrorIcon.CircleErrorIcon, obj3)];
    const obj4 = { variant: "body-sm/medium", color: "text-muted", children: text };
    items[1] = hasOwnProperty(Text_Text.Text, obj4);
    obj.children = items;
    tmp6 = timestampProducer(Stack_Stack.Stack, obj);
  }
  return tmp6;
}
get_ActivityIndicator = fn(17);
({ StyleSheet, View: closure_4 } = get_ActivityIndicator);
const jsxProd = fn(21);
({ jsx: hasOwnProperty, jsxs: closure_6 } = jsxProd);
const createStyles = fn(5310);
let obj = {
  card: {
    padding: 0,
    borderTopStartRadius: nativeDefault.radii.lg,
    borderTopEndRadius: nativeDefault.radii.lg,
    borderBottomStartRadius: nativeDefault.radii.lg,
    borderBottomEndRadius: nativeDefault.radii.lg,
    overflow: "hidden",
  },
  cardContent: null,
  selectedCardContent: null,
  selectedCardTint: null,
  cardBorder: null,
  selectedCard: null,
  labels: null,
  cards: null,
  title: null,
};
let obj3 = {
  padding: 0,
  borderTopStartRadius: nativeDefault.radii.lg,
  borderTopEndRadius: nativeDefault.radii.lg,
  borderBottomStartRadius: nativeDefault.radii.lg,
  borderBottomEndRadius: nativeDefault.radii.lg,
  overflow: "hidden",
};
obj.cardContent = {
  paddingVertical: nativeDefault.space.PX_12,
  paddingHorizontal: nativeDefault.space.PX_12,
  borderRadius: nativeDefault.radii.lg,
};
let obj4 = {
  paddingVertical: nativeDefault.space.PX_12,
  paddingHorizontal: nativeDefault.space.PX_12,
  borderRadius: nativeDefault.radii.lg,
};
obj.selectedCardContent = { backgroundColor: nativeDefault.colors.BACKGROUND_SURFACE_HIGH };
let obj6 = {};
const merged = Object.assign(StyleSheet.absoluteFillObject);
obj6.borderRadius = nativeDefault.radii.lg;
obj6.backgroundColor = nativeDefault.colors.TOGGLEBUTTON_BACKGROUND_SELECTED;
obj.selectedCardTint = obj6;
let obj7 = {};
const merged1 = Object.assign(StyleSheet.absoluteFillObject);
obj7.borderRadius = nativeDefault.radii.lg;
obj7.borderWidth = 1;
obj7.borderColor = nativeDefault.colors.BORDER_SUBTLE;
obj.cardBorder = obj7;
let obj5 = { backgroundColor: nativeDefault.colors.BACKGROUND_SURFACE_HIGH };
obj.selectedCard = { borderWidth: 2, borderColor: nativeDefault.colors.BACKGROUND_BRAND };
obj.labels = { flex: 1 };
let obj8 = { borderWidth: 2, borderColor: nativeDefault.colors.BACKGROUND_BRAND };
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
      formatToPlainStringResult = intl.formatToPlainString(_modDef2565.VNY3C1, obj3);
    }
  }
  const obj4 = {
    onPress() {
      return importDefault(character.id);
    },
    disabled: !eligible,
    border: "none",
    style: tmp.card,
    accessibilityRole,
    accessibilityState,
    accessibilityLabel: null,
    children: null,
  };
  if (null != formatToPlainStringResult) {
    const _HermesInternal = HermesInternal;
    let name = "" + character.name + ", " + formatToPlainStringResult;
  } else {
    name = character.name;
  }
  obj4.accessibilityLabel = name;
  const obj5 = {
    direction: "horizontal",
    spacing: nativeDefault.space.PX_16,
    align: "center",
    style: null,
    children: null,
  };
  items = [tmp.cardContent];
  let selectedCardContent = selected;
  if (selected) {
    selectedCardContent = tmp.selectedCardContent;
  }
  items[1] = selectedCardContent;
  obj5.style = items;
  let tmp10Result = selected;
  if (selected) {
    const obj6 = { pointerEvents: "none", style: tmp.selectedCardTint };
    tmp10Result = hasOwnProperty(React4, obj6);
  }
  const items1 = [tmp10Result, , ,];
  const obj7 = { iconUrl: character.iconUrl, size: 48, borderRadius: null };
  obj7.borderRadius = nativeDefault.radii.md;
  items1[1] = hasOwnProperty(GameOrganizationIconDefault, obj7);
  const obj8 = { spacing: nativeDefault.space.PX_4, style: tmp.labels, children: null };
  const obj9 = { variant: token, color: null, children: null };
  let str3 = "text-default";
  if (!eligible) {
    str3 = "text-muted";
  }
  obj9.color = str3;
  obj9.children = character.name;
  const items2 = [hasOwnProperty(Text_Text.Text, obj9)];
  let tmp10Result2 = null != formatToPlainStringResult;
  if (tmp10Result2) {
    const obj10 = { text: formatToPlainStringResult, eligible: character.eligible };
    tmp10Result2 = hasOwnProperty(CharacterSubLabel, obj10);
  }
  items2[1] = tmp10Result2;
  obj8.children = items2;
  items1[2] = timestampProducer(Stack_Stack.Stack, obj8);
  const items3 = [tmp.cardBorder];
  if (selected) {
    selected = tmp.selectedCard;
  }
  items3[1] = selected;
  items1[3] = hasOwnProperty(React4, { pointerEvents: "none", style: items3 });
  obj5.children = items1;
  obj4.children = timestampProducer(Stack_Stack.Stack, obj5);
  return hasOwnProperty(Card.Card, obj4);
});
const size = fn(2);
const result = size.fileFinishedImporting(
  "modules/game_organization_invites/native/GameOrganizationJoinModal/GameOrganizationCharacterList.tsx",
);

export default function GameOrganizationCharacterList(characters) {
  characters = characters.characters;
  ({ selectedCharacterId: importDefault, onSelect: dependencyMap, noun } = characters);
  const tmp = closure_7();
  items = [characters];
  const memo = noun.useMemo(() => {
    items = [...characters];
    return items.sort((eligible, eligible2) => Number(eligible2.eligible) - Number(eligible.eligible));
  }, items);
  let someResult = characters.some((eligible) => !eligible.eligible);
  const obj = { spacing: nativeDefault.space.PX_12, children: null };
  const obj2 = { style: tmp.title, title: null };
  const intl = characters(1113).intl;
  obj2.title = intl.formatToPlainString(_modDef2565["Xm+emB"], { noun });
  const items1 = [
    closure_5(characters(7756).TableRowGroupTitle, obj2),
    closure_5(closure_4, {
      accessibilityRole: "radiogroup",
      style: tmp.cards,
      children: memo.map((character) =>
        hasOwnProperty(
          closure_9,
          { character, selected: character.id === importDefault, onSelect, noun },
          character.id,
        ),
      ),
    }),
  ];
  if (someResult) {
    const obj4 = { variant: "body-md/medium", color: "text-subtle", children: null };
    const intl2 = tmp4(1113).intl;
    const obj5 = { noun };
    obj4.children = intl2.formatToPlainString(_modDef2565.ybJIQJ, obj5);
    someResult = closure_5(tmp4(5923).Text, obj4);
  }
  items1[2] = someResult;
  obj.children = items1;
  return closure_6(characters(6335).Stack, obj);
}
