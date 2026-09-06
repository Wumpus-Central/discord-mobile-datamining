// discord_app/modules/parent_tools/native/FamilyCenterRequestorDetails.tsx
import nativeDefault from "../../../../discord_common/js/packages/tokens/native.tsx";
import native from "../../../design/void/native.tsx";
import Text_Text from "../../../design/components/Text/native/Text.tsx";
import useUserLinks from "../hooks/useUserLinks.tsx";
import FamilyCenterUsernameHeaderDefault from "FamilyCenterUsernameHeader.tsx";
import noop from "../../../../_runtime/metro/00019__.js";

require = fn;
const View = fn(17).View;
const jsxProd = fn(21);
({ jsx: closure_4, jsxs: hasOwnProperty } = jsxProd);
fn(4560);
let createStyles = {
  container: { display: "flex", flexDirection: "row", flexGrow: 1, flexShrink: 1 },
  avatar: null,
  detailsContainer: null,
};
createStyles = {
  borderRadius: fn(1178).AVATAR_SIZE_MAP[fn(undefined, 1178).AvatarSizes.NORMAL] / 2,
  backgroundColor: nativeDefault.colors.BACKGROUND_SURFACE_HIGH,
};
createStyles.avatar = createStyles;
createStyles.detailsContainer = {
  paddingLeft: nativeDefault.space.PX_12,
  paddingRight: nativeDefault.space.PX_4,
  flexGrow: 1,
  flexShrink: 1,
};
let closure_6 = createStyles.createStyles(createStyles);
const size = fn(2);
const result = size.fileFinishedImporting("modules/parent_tools/native/FamilyCenterRequestorDetails.tsx");

export default function FamilyCenterRequestorDetails(otherUser) {
  otherUser = otherUser.otherUser;
  const tmp = closure_6();
  let obj = { style: tmp.container, children: null };
  const linkTimestampText = obj.useLinkTimestampText(otherUser.id, otherUser.status);
  obj = {
    avatarStyle: tmp.avatar,
    user: otherUser,
    guildId: "HermesInternal",
    disablePlaceholder: null,
    avatarDecoration: otherUser.avatarDecoration,
  };
  const items = [React4(native.Avatar, obj)];
  const obj1 = { style: tmp.detailsContainer, children: null };
  const items1 = [
    React4(FamilyCenterUsernameHeaderDefault, { user: otherUser }),
    React4(Text_Text.Text, { variant: "text-xs/semibold", color: "text-muted", children: linkTimestampText }),
  ];
  obj1.children = items1;
  items[1] = hasOwnProperty(View, obj1);
  obj.children = items;
  return hasOwnProperty(View, obj);
}
