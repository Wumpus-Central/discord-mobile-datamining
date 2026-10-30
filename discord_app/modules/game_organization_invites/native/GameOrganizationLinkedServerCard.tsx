// discord_app/modules/game_organization_invites/native/GameOrganizationLinkedServerCard.tsx
import nativeDefault from "../../../../discord_common/js/packages/tokens/native.tsx";
import util from "../../../intl/index.native.tsx";
import AvatarUtilsDefault from "../../../utils/AvatarUtils.tsx";
import Text_Text from "../../../design/components/Text/native/Text.tsx";
import Stack_Stack from "../../../design/components/Stack/native/Stack.native.tsx";
import GuildIcon from "../../guild/native/GuildIcon.tsx";
import Card from "../../../design/components/Card/native/Card.native.tsx";
import noop from "../../../../_runtime/metro/00019__.js";

const GuildIconDefault = GuildIcon;

require = fn;
const View = fn(17).View;
const jsxProd = fn(21);
({ jsx: closure_4, jsxs: hasOwnProperty } = jsxProd);
const XLARGE = fn(6951).GuildIconSizes.XLARGE;
const createStyles = fn(5009);
const obj2 = {
  card: { padding: nativeDefault.space.PX_16 },
  icon: null,
  info: null,
  autoWidth: null,
  dot: null,
  onlineDot: null,
  membersDot: null,
};
let obj3 = { padding: nativeDefault.space.PX_16 };
obj2.icon = { borderRadius: nativeDefault.radii.lg };
obj2.info = { flex: 1 };
obj2.autoWidth = { width: "auto" };
let size = {
  width: nativeDefault.space.PX_12,
  height: nativeDefault.space.PX_12,
  borderRadius: nativeDefault.radii.round,
};
obj2.dot = size;
let obj4 = { borderRadius: nativeDefault.radii.lg };
obj2.onlineDot = { backgroundColor: nativeDefault.colors.STATUS_POSITIVE };
const obj5 = { backgroundColor: nativeDefault.colors.STATUS_POSITIVE };
obj2.membersDot = { backgroundColor: nativeDefault.colors.TEXT_MUTED };
let closure_7 = createStyles.createStyles(obj2);
size = fn(2);
const result = size.fileFinishedImporting(
  "modules/game_organization_invites/native/GameOrganizationLinkedServerCard.tsx",
);

export default function GameOrganizationLinkedServerCard(linkedGuild) {
  linkedGuild = linkedGuild.linkedGuild;
  ({ name, presenceCount, memberCount } = linkedGuild);
  ({ id, icon } = linkedGuild);
  const tmp = closure_7();
  const obj = AvatarUtilsDefault;
  const guildIconURL = obj.getGuildIconURL({ id, icon, size: GuildIcon.ImageSizes[XLARGE] });
  const obj3 = { border: "subtle", style: tmp.card, children: null };
  const obj4 = { direction: "horizontal", align: "center", spacing: nativeDefault.space.PX_16, children: null };
  const items = [
    React4(GuildIconDefault, { icon: guildIconURL, value: name, size: XLARGE, selected: false, style: tmp.icon }),
  ];
  const obj6 = { spacing: nativeDefault.space.PX_4, style: tmp.info, children: null };
  const items1 = [
    React4(Text_Text.Text, {
      variant: "text-lg/semibold",
      color: "mobile-text-heading-primary",
      lineClamp: 1,
      children: name,
    }),
  ];
  const obj7 = {
    direction: "horizontal",
    align: "center",
    spacing: nativeDefault.space.PX_20,
    style: tmp.autoWidth,
    children: null,
  };
  let tmp7Result = null;
  if (null != presenceCount) {
    const obj8 = {
      direction: "horizontal",
      align: "center",
      spacing: nativeDefault.space.PX_6,
      style: tmp.autoWidth,
      children: null,
    };
    const obj9 = { style: null };
    const items2 = [,];
    ({ dot: arr3[0], onlineDot: arr3[1] } = tmp);
    obj9.style = items2;
    const items3 = [React4(View, obj9)];
    const obj10 = { variant: "text-md/medium", color: "text-muted", children: null };
    const intl = util.intl;
    const obj11 = { membersOnline: presenceCount };
    obj10.children = intl.formatToPlainString(util.t["LC+S+m"], obj11);
    items3[1] = React4(Text_Text.Text, obj10);
    obj8.children = items3;
    tmp7Result = hasOwnProperty(Stack_Stack.Stack, obj8);
  }
  const items4 = [tmp7Result];
  let tmp7Result2 = null;
  if (null != memberCount) {
    const obj12 = {
      direction: "horizontal",
      align: "center",
      spacing: nativeDefault.space.PX_6,
      style: tmp.autoWidth,
      children: null,
    };
    const obj13 = { style: null };
    const items5 = [,];
    ({ dot: arr6[0], membersDot: arr6[1] } = tmp);
    obj13.style = items5;
    const items6 = [React4(View, obj13)];
    const obj14 = { variant: "text-md/medium", color: "text-muted", children: null };
    const intl2 = util.intl;
    const obj15 = { count: memberCount };
    obj14.children = intl2.formatToPlainString(util.t.zRl6XR, obj15);
    items6[1] = React4(Text_Text.Text, obj14);
    obj12.children = items6;
    tmp7Result2 = hasOwnProperty(Stack_Stack.Stack, obj12);
  }
  items4[1] = tmp7Result2;
  obj7.children = items4;
  items1[1] = hasOwnProperty(Stack_Stack.Stack, obj7);
  obj6.children = items1;
  items[1] = hasOwnProperty(Stack_Stack.Stack, obj6);
  obj4.children = items;
  obj3.children = hasOwnProperty(Stack_Stack.Stack, obj4);
  return React4(Card.Card, obj3);
}
