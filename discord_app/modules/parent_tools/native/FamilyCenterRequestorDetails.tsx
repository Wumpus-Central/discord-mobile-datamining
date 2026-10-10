// === Module 15177: FamilyCenterRequestorDetails ===

// Module 15177 (FamilyCenterRequestorDetails)
import c from "c" /* 576 */;
import nativeDefault from "native" /* 587 */;
import native from "native" /* 1200 */;
import Text_Text from "Text/Text" /* 5088 */;
import useUserLinks from "useUserLinks" /* 7738 */;
import FamilyCenterUsernameHeaderDefault from "FamilyCenterUsernameHeader" /* 15148 */;
import noop from "module_19" /* 19 */;

require = fn;
const View = fn(17).View;
const jsxProd = fn(21);
({ jsx: closure_4, jsxs: hasOwnProperty } = jsxProd);
const createStyles = fn(5092);
let obj2 = { container: { display: "flex", flexDirection: "row", flexGrow: 1, flexShrink: 1 }, avatar: { borderRadius: fn(1200).AVATAR_SIZE_MAP[fn(undefined, 1200).AvatarSizes.NORMAL] / 2, backgroundColor: nativeDefault.colors.BACKGROUND_SURFACE_HIGH }, detailsContainer: null };
let obj3 = { borderRadius: fn(1200).AVATAR_SIZE_MAP[fn(undefined, 1200).AvatarSizes.NORMAL] / 2, backgroundColor: nativeDefault.colors.BACKGROUND_SURFACE_HIGH };
obj2.detailsContainer = { paddingLeft: nativeDefault.space.PX_12, paddingRight: nativeDefault.space.PX_4, flexGrow: 1, flexShrink: 1 };
let closure_6 = createStyles.createStyles(obj2);
const ReactCompilerGating = fn(558);
let obj4 = { paddingLeft: nativeDefault.space.PX_12, paddingRight: nativeDefault.space.PX_4, flexGrow: 1, flexShrink: 1 };
const size = fn(2);
const result = size.fileFinishedImporting("modules/parent_tools/native/FamilyCenterRequestorDetails.tsx");

export default ReactCompilerGating.isReactCompilerEnabled() ? (function FamilyCenterRequestorDetails(otherUser) {
  const cResult = c.c(15);
  otherUser = otherUser.otherUser;
  const tmp4 = closure_6();
  const linkTimestampText = useUserLinks.useLinkTimestampText(otherUser.id, otherUser.status);
  if (cResult[0] === otherUser) {
    if (cResult[1] === tmp4.avatar) {
      let tmp6 = cResult[2];
    }
    if (cResult[3] !== otherUser) {
      const obj3 = { user: otherUser };
      const tmp11 = React4(FamilyCenterUsernameHeaderDefault, obj3);
      cResult[3] = otherUser;
      cResult[4] = tmp11;
      let tmp8 = tmp11;
    } else {
      tmp8 = cResult[4];
    }
    if (cResult[5] !== linkTimestampText) {
      const obj4 = { variant: "text-xs/semibold", color: "text-muted", children: linkTimestampText };
      const tmp14 = React4(Text_Text.Text, obj4);
      cResult[5] = linkTimestampText;
      cResult[6] = tmp14;
      let tmp12 = tmp14;
    } else {
      tmp12 = cResult[6];
    }
    if (cResult[7] === tmp4.detailsContainer) {
      if (cResult[8] === tmp8) {
        if (cResult[9] === tmp12) {
          let tmp15 = cResult[10];
        }
        if (cResult[11] === tmp4.container) {
          if (cResult[12] === tmp6) {
            if (cResult[13] === tmp15) {
              let tmp19 = cResult[14];
            }
            return tmp19;
          }
        }
        const obj5 = { style: tmp4.container, children: null };
        const items = [tmp6, tmp15];
        obj5.children = items;
        const tmp22 = hasOwnProperty(View, obj5);
        cResult[11] = tmp4.container;
        cResult[12] = tmp6;
        cResult[13] = tmp15;
        cResult[14] = tmp22;
        tmp19 = tmp22;
      }
    }
    const obj6 = { style: tmp4.detailsContainer, children: null };
    const items1 = [tmp8, tmp12];
    obj6.children = items1;
    const tmp18 = hasOwnProperty(View, obj6);
    cResult[7] = tmp4.detailsContainer;
    cResult[8] = tmp8;
    cResult[9] = tmp12;
    cResult[10] = tmp18;
    tmp15 = tmp18;
  }
  const obj7 = { avatarStyle: tmp4.avatar, user: otherUser, guildId: "IconComponent", disablePlaceholder: null, avatarDecoration: otherUser.avatarDecoration };
  const tmp7 = React4(native.Avatar, obj7);
  cResult[0] = otherUser;
  cResult[1] = tmp4.avatar;
  cResult[2] = tmp7;
  tmp6 = tmp7;
}) : (function FamilyCenterRequestorDetails(otherUser) {
  otherUser = otherUser.otherUser;
  const tmp = closure_6();
  const obj2 = { style: tmp.container, children: null };
  const linkTimestampText = useUserLinks.useLinkTimestampText(otherUser.id, otherUser.status);
  const obj3 = { avatarStyle: tmp.avatar, user: otherUser, guildId: "IconComponent", disablePlaceholder: null, avatarDecoration: otherUser.avatarDecoration };
  const items = [React4(native.Avatar, obj3), ];
  const obj4 = { style: tmp.detailsContainer, children: null };
  const items1 = [React4(FamilyCenterUsernameHeaderDefault, { user: otherUser }), React4(Text_Text.Text, { variant: "text-xs/semibold", color: "text-muted", children: linkTimestampText })];
  obj4.children = items1;
  items[1] = hasOwnProperty(View, obj4);
  obj2.children = items;
  return hasOwnProperty(View, obj2);
});