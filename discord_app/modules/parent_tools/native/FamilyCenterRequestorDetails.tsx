// === Module 14727: FamilyCenterRequestorDetails ===

// Module 14727 (FamilyCenterRequestorDetails)
import react_native from "react-native" /* 17 */;
import react2 from "react" /* 576 */;
import nativeDefault from "native" /* 587 */;
import native from "native" /* 1188 */;
import Text_Text from "Text/Text" /* 4886 */;
import useUserLinks from "useUserLinks" /* 8295 */;
import FamilyCenterUsernameHeaderDefault from "FamilyCenterUsernameHeader" /* 14700 */;
import react from "react" /* 19 */;
import Fragment from "Fragment" /* 21 */;
import createStyles_mod from "createStyles" /* 4890 */;
import ReactCompilerGating from "ReactCompilerGating" /* 558 */;
import size from "module_2" /* 2 */;

let otherUser;

let closure_4;
let hasOwnProperty;
let obj2;
let obj3;
const View = react_native.View;
({ jsx: closure_4, jsxs: hasOwnProperty } = Fragment);
let createStyles = createStyles_mod;
let obj = { container: { display: "flex", flexDirection: "row", flexGrow: 1, flexShrink: 1 }, avatar: obj2, detailsContainer: obj3 };
obj2 = { borderRadius: native.AVATAR_SIZE_MAP[native.AvatarSizes.NORMAL] / 2, backgroundColor: nativeDefault.colors.BACKGROUND_SURFACE_HIGH };
createStyles = createStyles.createStyles;
obj3 = { paddingLeft: nativeDefault.space.PX_12, paddingRight: nativeDefault.space.PX_4, flexGrow: 1, flexShrink: 1 };
let closure_6 = createStyles(obj);
const tmp5 = ReactCompilerGating.isReactCompilerEnabled() ? ((otherUser) => {
  let items;
  let items1;
  const obj = react2;
  const cResult = obj.c(15);
  otherUser = otherUser.otherUser;
  const status = otherUser.status;
  const tmp4 = closure_6();
  const obj2 = useUserLinks;
  const linkTimestampText = obj2.useLinkTimestampText(otherUser.id, status);
  if (cResult[0] === otherUser) {
    let tmp6;
    let tmp8;
    let tmp12;
    if (cResult[1] === tmp4.avatar) {
      tmp6 = cResult[2];
    }
    if (cResult[3] !== otherUser) {
      const obj3 = { user: otherUser };
      const tmp11 = React3(FamilyCenterUsernameHeaderDefault, obj3);
      cResult[3] = otherUser;
      cResult[4] = tmp11;
      tmp8 = tmp11;
    } else {
      tmp8 = cResult[4];
    }
    if (cResult[5] !== linkTimestampText) {
      const obj4 = { variant: "text-xs/semibold", color: "text-muted", children: linkTimestampText };
      const tmp14 = React3(Text_Text.Text, obj4);
      cResult[5] = linkTimestampText;
      cResult[6] = tmp14;
      tmp12 = tmp14;
    } else {
      tmp12 = cResult[6];
    }
    if (cResult[7] === tmp4.detailsContainer) {
      if (cResult[8] === tmp8) {
        let tmp15;
        if (cResult[9] === tmp12) {
          tmp15 = cResult[10];
        }
        if (cResult[11] === tmp4.container) {
          if (cResult[12] === tmp6) {
            let tmp19;
            if (cResult[13] === tmp15) {
              tmp19 = cResult[14];
            }
            return tmp19;
          }
        }
        const obj5 = { style: tmp4.container, children: items };
        items = [tmp6, tmp15];
        const tmp22 = hasOwnProperty(View, obj5);
        cResult[11] = tmp4.container;
        cResult[12] = tmp6;
        cResult[13] = tmp15;
        cResult[14] = tmp22;
        tmp19 = tmp22;
      }
    }
    const obj6 = { style: tmp4.detailsContainer, children: items1 };
    items1 = [tmp8, tmp12];
    const tmp18 = hasOwnProperty(View, obj6);
    cResult[7] = tmp4.detailsContainer;
    cResult[8] = tmp8;
    cResult[9] = tmp12;
    cResult[10] = tmp18;
    tmp15 = tmp18;
  }
  const obj7 = { avatarStyle: tmp4.avatar, user: otherUser, guildId: "IconComponent", disablePlaceholder: null, avatarDecoration: otherUser.avatarDecoration };
  const tmp7 = React3(native.Avatar, obj7);
  cResult[0] = otherUser;
  cResult[1] = tmp4.avatar;
  cResult[2] = tmp7;
  tmp6 = tmp7;
}) : ((otherUser) => {
  let items;
  let items1;
  otherUser = otherUser.otherUser;
  const status = otherUser.status;
  const tmp = closure_6();
  const obj2 = { style: tmp.container, children: items };
  const obj = useUserLinks;
  const linkTimestampText = obj.useLinkTimestampText(otherUser.id, status);
  const obj3 = { avatarStyle: tmp.avatar, user: otherUser, guildId: "IconComponent", disablePlaceholder: null, avatarDecoration: otherUser.avatarDecoration };
  items = [React3(native.Avatar, obj3), ];
  const obj4 = { style: tmp.detailsContainer, children: items1 };
  items1 = [React3(FamilyCenterUsernameHeaderDefault, { user: otherUser }), React3(Text_Text.Text, { variant: "text-xs/semibold", color: "text-muted", children: linkTimestampText })];
  items[1] = hasOwnProperty(View, obj4);
  return hasOwnProperty(View, obj2);
});
const result = size.fileFinishedImporting("modules/parent_tools/native/FamilyCenterRequestorDetails.tsx");

export default tmp5;