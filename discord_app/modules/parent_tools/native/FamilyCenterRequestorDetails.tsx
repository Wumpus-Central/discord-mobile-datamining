// === Module 15205: FamilyCenterRequestorDetails ===

// Module 15205 (FamilyCenterRequestorDetails)
import nativeDefault from "native" /* 576 */;
import native from "native" /* 1177 */;
import Text_Text from "Text/Text" /* 4753 */;
import useUserLinks from "useUserLinks" /* 8928 */;
import FamilyCenterUsernameHeaderDefault from "FamilyCenterUsernameHeader" /* 15177 */;
import noop from "module_19" /* 19 */;

require = fn;
const View = fn(17).View;
const jsxProd = fn(21);
({ jsx: closure_4, jsxs: hasOwnProperty } = jsxProd);
const createStyles = fn(4757);
let obj2 = { container: { display: "flex", flexDirection: "row", flexGrow: 1, flexShrink: 1 }, avatar: { borderRadius: fn(1177).AVATAR_SIZE_MAP[fn(undefined, 1177).AvatarSizes.NORMAL] / 2, backgroundColor: nativeDefault.colors.BACKGROUND_SURFACE_HIGH }, detailsContainer: null };
let obj3 = { borderRadius: fn(1177).AVATAR_SIZE_MAP[fn(undefined, 1177).AvatarSizes.NORMAL] / 2, backgroundColor: nativeDefault.colors.BACKGROUND_SURFACE_HIGH };
obj2.detailsContainer = { paddingLeft: nativeDefault.space.PX_12, paddingRight: nativeDefault.space.PX_4, flexGrow: 1, flexShrink: 1 };
let closure_6 = createStyles.createStyles(obj2);
const size = fn(2);
const result = size.fileFinishedImporting("modules/parent_tools/native/FamilyCenterRequestorDetails.tsx");

export default function FamilyCenterRequestorDetails(otherUser) {
  otherUser = otherUser.otherUser;
  const tmp = closure_6();
  const obj2 = { style: tmp.container, children: null };
  const linkTimestampText = useUserLinks.useLinkTimestampText(otherUser.id, otherUser.status);
  const obj3 = { avatarStyle: tmp.avatar, user: otherUser, guildId: "HermesInternal", disablePlaceholder: null, avatarDecoration: otherUser.avatarDecoration };
  const items = [React4(native.Avatar, obj3), ];
  const obj4 = { style: tmp.detailsContainer, children: null };
  const items1 = [React4(FamilyCenterUsernameHeaderDefault, { user: otherUser }), React4(Text_Text.Text, { variant: "text-xs/semibold", color: "text-muted", children: linkTimestampText })];
  obj4.children = items1;
  items[1] = hasOwnProperty(View, obj4);
  obj2.children = items;
  return hasOwnProperty(View, obj2);
};