// discord_app/modules/game_organization_invites/native/GameOrganizationJoinSuccessGraphic.tsx
import nativeDefault from "../../../../discord_common/js/packages/tokens/native.tsx";
import Stack_Stack from "../../../design/components/Stack/native/Stack.native.tsx";
import GameOrganizationIconDefault from "GameOrganizationIcon.tsx";
import noop from "../../../../_runtime/metro/00019__.js";

require = fn;
const View = fn(17).View;
const jsxProd = fn(21);
({ jsx: closure_4, jsxs: hasOwnProperty } = jsxProd);
const createStyles = fn(4823);
let obj2 = { dots: { width: "auto" }, dot: null };
let size = {
  width: nativeDefault.space.PX_6,
  height: nativeDefault.space.PX_6,
  borderRadius: nativeDefault.radii.round,
  backgroundColor: nativeDefault.colors.ICON_MUTED,
};
obj2.dot = size;
let closure_6 = createStyles.createStyles(obj2);
size = fn(2);
const result = size.fileFinishedImporting(
  "modules/game_organization_invites/native/GameOrganizationJoinSuccessGraphic.tsx",
);

export default function GameOrganizationJoinSuccessGraphic(character) {
  character = character.character;
  const tmp = closure_6();
  const obj = {
    direction: "horizontal",
    align: "center",
    justify: "center",
    spacing: nativeDefault.space.PX_8,
    children: null,
  };
  let iconUrl;
  if (character != null) {
    iconUrl = character.iconUrl;
  }
  const obj2 = { accessibilityElementsHidden: true, importantForAccessibility: "no-hide-descendants", children: null };
  const tmp8 = GameOrganizationIconDefault;
  items = [React4(tmp8, { iconUrl, size: 78, borderRadius: nativeDefault.radii.md, fallback: "character" }), ,];
  const obj4 = { direction: "horizontal", spacing: nativeDefault.space.PX_4, style: tmp.dots, children: null };
  const items1 = [React4(View, { style: tmp.dot }), React4(View, { style: tmp.dot }), React4(View, { style: tmp.dot })];
  obj4.children = items1;
  items[1] = hasOwnProperty(Stack_Stack.Stack, obj4);
  const obj8 = { iconUrl: character.organizationIconUrl, size: 78, borderRadius: null, fallback: "guild" };
  const obj3 = { iconUrl, size: 78, borderRadius: nativeDefault.radii.md, fallback: "character" };
  const obj5 = { style: tmp.dot };
  const obj6 = { style: tmp.dot };
  const obj7 = { style: tmp.dot };
  obj8.borderRadius = nativeDefault.radii.md;
  items[2] = React4(GameOrganizationIconDefault, obj8);
  obj.children = items;
  obj2.children = hasOwnProperty(Stack_Stack.Stack, obj);
  return React4(View, obj2);
}
