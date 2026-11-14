// === Module 19009: WaterwheelsPostCard ===

// Module 19009 (WaterwheelsPostCard)
import nativeDefault from "native" /* 575 */;
import AvatarUtils from "AvatarUtils" /* 1414 */;
import themes from "themes" /* 5328 */;
import Text_Text from "Text/Text" /* 5929 */;
import components_Button_Button from "components/Button/Button" /* 5936 */;
import FastImageDefault from "FastImage" /* 6020 */;
import LinkIcon from "LinkIcon" /* 6029 */;
import PlatformsDefault from "Platforms" /* 7087 */;
import WaterwheelsCardTypes from "WaterwheelsCardTypes" /* 10225 */;
import noop from "module_19" /* 19 */;

require = fn;
const View = fn(17).View;
const jsxProd = fn(21);
({ jsx: closure_4, jsxs: hasOwnProperty } = jsxProd);
const createStyles = fn(5306);
let obj2 = { content: { gap: nativeDefault.space.PX_12 }, standardContent: null, header: null, copy: null, icon: null, fallback: null, media: null, postAction: null };
let obj3 = { gap: nativeDefault.space.PX_12 };
obj2.standardContent = { gap: nativeDefault.space.PX_8 };
let obj4 = { gap: nativeDefault.space.PX_8 };
obj2.header = { flexDirection: "row", alignItems: "center", gap: nativeDefault.space.PX_12 };
let obj5 = { flexDirection: "row", alignItems: "center", gap: nativeDefault.space.PX_12 };
obj2.copy = { flex: 1, minWidth: 0, gap: nativeDefault.space.PX_4 };
let size = { height: nativeDefault.space.PX_40, width: nativeDefault.space.PX_40, borderRadius: nativeDefault.radii.md };
obj2.icon = size;
let obj6 = { flex: 1, minWidth: 0, gap: nativeDefault.space.PX_4 };
obj2.fallback = { alignItems: "center", justifyContent: "center", backgroundColor: nativeDefault.colors.BACKGROUND_MOD_SUBTLE };
let obj7 = { alignItems: "center", justifyContent: "center", backgroundColor: nativeDefault.colors.BACKGROUND_MOD_SUBTLE };
obj2.media = { width: "100%", aspectRatio: 1.7777777777777777, borderRadius: nativeDefault.radii.sm, backgroundColor: nativeDefault.colors.BACKGROUND_MOD_SUBTLE };
obj2.postAction = { alignSelf: "flex-start" };
let closure_6 = createStyles.createStyles(obj2);
size = fn(2);
const result = size.fileFinishedImporting("modules/waterwheels/cards/native/WaterwheelsPostCard.tsx");

export default function WaterwheelsPostCard(onAction) {
  ({ post, action } = onAction);
  onAction = onAction.onAction;
  const tmp = closure_6();
  let type;
  if (action != null) {
    type = action.type;
  }
  const tmp5 = type === WaterwheelsCardTypes.WaterwheelsActionType.OPEN_CONNECTION;
  value = null;
  if (tmp5) {
    value = PlatformsDefault.get(action.value.provider);
  }
  if (tmp5) {
    let icon;
    if (value != null) {
      icon = value.icon;
    }
    if (null != icon) {
      const tmp15 = FastImageDefault;
      const tmp2Result = AvatarUtils;
      const tmp2Result2 = themes;
      const icon1 = { accessible: false, source: null, style: null };
      icon1.source = tmp2Result.makeSource(themes.isThemeDark(obj.useThemeContext().theme) ? icon1.darkPNG : icon1.lightPNG);
      icon1.style = tmp.icon;
      React4(tmp15, icon1);
      const tmp16 = themes.isThemeDark(obj.useThemeContext().theme) ? icon1.darkPNG : icon1.lightPNG;
    }
  }
  let tmp9 = null;
  if (tmp5) {
    const obj3 = { style: null, children: null };
    items = [, ];
    ({ icon: arr[0], fallback: arr[1] } = tmp);
    obj3.style = items;
    const obj4 = { size: "md", color: nativeDefault.colors.ICON_MUTED };
    obj3.children = React4(LinkIcon.LinkIcon, obj4);
    tmp9 = React4(View, obj3);
  }
  const obj5 = { style: tmp5 ? tmp.content : tmp.standardContent, children: null };
  const obj6 = { style: tmp.header, children: null };
  const items1 = [tmp9, ];
  const obj7 = { style: tmp.copy, children: null };
  let num;
  if (tmp5) {
    num = 2;
  }
  const items2 = [React4(Text_Text.Heading, { variant: "heading-sm/semibold", color: "text-strong", lineClamp: num, children: post.title }), ];
  let tmp20Result = null;
  if (tmp5) {
    const obj9 = { variant: "body-sm/normal", color: "text-subtle", lineClamp: 2, children: post.body };
    tmp20Result = React4(Text_Text.Text, obj9);
  }
  items2[1] = tmp20Result;
  obj7.children = items2;
  items1[1] = hasOwnProperty(View, obj7);
  obj6.children = items1;
  const items3 = [hasOwnProperty(View, obj6), , , ];
  let tmp20Result5 = null;
  if (!tmp5) {
    const obj10 = { variant: "body-md/normal", color: "text-default", lineClamp: 4, children: post.body };
    tmp20Result5 = React4(Text_Text.Text, obj10);
  }
  items3[1] = tmp20Result5;
  let tmp20Result6 = null;
  if (null != post.imageUrl) {
    const obj11 = { accessible: false, style: tmp.media, source: null };
    const obj12 = { uri: post.imageUrl };
    obj11.source = obj12;
    tmp20Result6 = React4(FastImageDefault, obj11);
  }
  items3[2] = tmp20Result6;
  let tmp20Result8 = null;
  if (null != action) {
    tmp20Result8 = null;
    if (null != post.actionLabel) {
      let postAction;
      if (!tmp5) {
        postAction = tmp.postAction;
      }
      const obj13 = { style: postAction, children: null };
      let str = "sm";
      if (tmp5) {
        str = "md";
      }
      const obj14 = { size: str, variant: "primary", text: post.actionLabel, grow: tmp5, icon: null, onPress: null };
      let tmp20Result7;
      if (tmp5) {
        const obj15 = { size: "sm", color: nativeDefault.colors.ICON_OVERLAY_LIGHT };
        tmp20Result7 = React4(LinkIcon.LinkIcon, obj15);
      }
      obj14.icon = tmp20Result7;
      obj14.onPress = function onPress() {
        return onAction(action);
      };
      obj13.children = React4(components_Button_Button.Button, obj14);
      tmp20Result8 = React4(View, obj13);
    }
  }
  items3[3] = tmp20Result8;
  obj5.children = items3;
  return hasOwnProperty(View, obj5);
};