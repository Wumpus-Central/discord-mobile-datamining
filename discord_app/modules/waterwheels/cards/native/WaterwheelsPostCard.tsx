// discord_app/modules/waterwheels/cards/native/WaterwheelsPostCard.tsx
import nativeDefault from "../../../../../discord_common/js/packages/tokens/native.tsx";
import util from "../../../../intl/index.native.tsx";
import AvatarUtils from "../../../../utils/AvatarUtils.tsx";
import themes from "../../../../design/utils/shared/themes.tsx";
import native from "../../../../../discord_common/js/packages/design/native.tsx";
import Text_Text from "../../../../design/components/Text/native/Text.tsx";
import components_Button_Button from "../../../../design/components/Button/native/Button.native.tsx";
import FastImageDefault from "../../../../components_native/common/FastImage.tsx";
import LinkIcon from "../../../../design/components/Icon/native/redesign/generated/LinkIcon.tsx";
import PlatformsDefault from "../../../../lib/Platforms.tsx";
import WaterwheelsCardTypes from "../WaterwheelsCardTypes.tsx";
import WaterwheelsSectionLabelDefault from "WaterwheelsSectionLabel.tsx";
import noop from "../../../../../_runtime/metro/00019__.js";

require = fn;
const View = fn(17).View;
const jsxProd = fn(21);
({ jsx: closure_4, jsxs: hasOwnProperty } = jsxProd);
const createStyles = fn(5043);
let obj2 = {
  content: { gap: nativeDefault.space.PX_12 },
  standardContent: null,
  header: null,
  copy: null,
  icon: null,
  sectionIcon: null,
  connectionCard: null,
  connectionArt: null,
  connectionArtImage: null,
  connectionProviderArt: null,
  connectionCopy: null,
  connectionText: null,
  fallback: null,
  media: null,
  postAction: null,
};
let obj3 = { gap: nativeDefault.space.PX_12 };
obj2.standardContent = { gap: nativeDefault.space.PX_8 };
let obj4 = { gap: nativeDefault.space.PX_8 };
obj2.header = { flexDirection: "row", alignItems: "center", gap: nativeDefault.space.PX_12 };
let obj5 = { flexDirection: "row", alignItems: "center", gap: nativeDefault.space.PX_12 };
obj2.copy = { flex: 1, minWidth: 0, gap: nativeDefault.space.PX_4 };
let size = {
  height: nativeDefault.space.PX_40,
  width: nativeDefault.space.PX_40,
  borderRadius: nativeDefault.radii.md,
};
obj2.icon = size;
obj2.sectionIcon = { height: 18, width: 18 };
let obj6 = { flex: 1, minWidth: 0, gap: nativeDefault.space.PX_4 };
obj2.connectionCard = {
  borderRadius: nativeDefault.radii.xl,
  borderWidth: 1,
  borderColor: nativeDefault.colors.BORDER_SUBTLE,
  backgroundColor: nativeDefault.colors.BACKGROUND_BASE_LOWEST,
  overflow: "hidden",
};
obj2.connectionArt = { height: 143, alignItems: "center", justifyContent: "center" };
obj2.connectionArtImage = { width: "100%", height: 143 };
const size1 = { height: nativeDefault.space.PX_80, width: nativeDefault.space.PX_80 };
obj2.connectionProviderArt = size1;
let obj7 = {
  borderRadius: nativeDefault.radii.xl,
  borderWidth: 1,
  borderColor: nativeDefault.colors.BORDER_SUBTLE,
  backgroundColor: nativeDefault.colors.BACKGROUND_BASE_LOWEST,
  overflow: "hidden",
};
obj2.connectionCopy = { padding: nativeDefault.space.PX_12, gap: nativeDefault.space.PX_12 };
let obj8 = { padding: nativeDefault.space.PX_12, gap: nativeDefault.space.PX_12 };
obj2.connectionText = { gap: nativeDefault.space.PX_4 };
let obj9 = { gap: nativeDefault.space.PX_4 };
obj2.fallback = {
  alignItems: "center",
  justifyContent: "center",
  backgroundColor: nativeDefault.colors.BACKGROUND_MOD_SUBTLE,
};
let obj10 = {
  alignItems: "center",
  justifyContent: "center",
  backgroundColor: nativeDefault.colors.BACKGROUND_MOD_SUBTLE,
};
obj2.media = {
  width: "100%",
  aspectRatio: 1.7777777777777777,
  borderRadius: nativeDefault.radii.sm,
  backgroundColor: nativeDefault.colors.BACKGROUND_MOD_SUBTLE,
};
obj2.postAction = { alignSelf: "flex-start" };
let closure_6 = createStyles.createStyles(obj2);
size = fn(2);
const result = size.fileFinishedImporting("modules/waterwheels/cards/native/WaterwheelsPostCard.tsx");

export default function WaterwheelsPostCard(discoverSectionLabel) {
  ({ post, action } = discoverSectionLabel);
  let flag = discoverSectionLabel.discoverSectionLabel;
  if (flag === undefined) {
    flag = false;
  }
  const onAction = discoverSectionLabel.onAction;
  const tmp = closure_6();
  const theme = native.useThemeContext().theme;
  let type;
  if (action != null) {
    type = action.type;
  }
  const tmp5 = type === WaterwheelsCardTypes.WaterwheelsActionType.OPEN_CONNECTION;
  let tmp6 = tmp5;
  if (tmp5) {
    tmp6 = flag;
  }
  value = null;
  if (tmp5) {
    value = PlatformsDefault.get(action.value.provider);
  }
  if (tmp5) {
    let icon1;
    if (value != null) {
      icon1 = value.icon;
    }
    if (null != icon1) {
      const tmp16 = FastImageDefault;
      const tmp2Result = AvatarUtils;
      const icon = value.icon;
      const obj3 = {
        accessible: false,
        source: tmp2Result.makeSource(themes.isThemeDark(theme) ? icon.darkPNG : icon.lightPNG),
        style: tmp6 ? tmp.sectionIcon : tmp.icon,
      };
      React4(tmp16, obj3);
      const tmp2Result4 = themes;
    }
  }
  let tmp11Result = null;
  if (tmp5) {
    if (tmp6) {
      let sectionIcon = tmp.sectionIcon;
    } else {
      sectionIcon = [,];
      ({ icon: arr[0], fallback: arr[1] } = tmp);
    }
    const obj4 = { style: sectionIcon, children: null };
    let str = "md";
    if (tmp6) {
      str = "sm";
    }
    const obj5 = { size: str, color: nativeDefault.colors.ICON_MUTED, accessible: false };
    obj4.children = React4(LinkIcon.LinkIcon, obj5);
    tmp11Result = React4(View, obj4);
  }
  if (tmp6) {
    if (null != value) {
      const intl = util.intl;
      const obj6 = { platform: value.name };
      let title = intl.formatToPlainString(util.t.XWSHTb, obj6);
    } else {
      title = post.title;
    }
    if (null != post.imageUrl) {
      const obj7 = { accessible: false, style: tmp.connectionArtImage, source: null, resizeMode: "cover" };
      const obj8 = { uri: post.imageUrl };
      obj7.source = obj8;
      let tmp31Result = React4(FastImageDefault, obj7);
    } else {
      let icon3;
      if (value != null) {
        icon3 = value.icon;
      }
      tmp31Result = null;
      if (null != icon3) {
        const tmp33 = FastImageDefault;
        const tmp2Result5 = AvatarUtils;
        const icon2 = value.icon;
        const obj9 = {
          accessible: false,
          source: tmp2Result5.makeSource(themes.isThemeDark(theme) ? icon2.darkPNG : icon2.lightPNG),
          style: tmp.connectionProviderArt,
        };
        tmp31Result = React4(tmp33, obj9);
        const tmp2Result6 = themes;
      }
    }
    const obj10 = { style: tmp.content, children: null };
    const obj11 = { icon: tmp11Result, text: title };
    items = [React4(WaterwheelsSectionLabelDefault, obj11)];
    const obj12 = { style: tmp.connectionCard, children: null };
    const obj13 = { style: tmp.connectionArt, children: tmp31Result };
    const items1 = [React4(View, obj13)];
    const obj14 = { style: tmp.connectionCopy, children: null };
    const obj15 = { style: tmp.connectionText, children: null };
    let tmp38Result = null;
    if (post.title !== title) {
      const obj16 = { variant: "body-md/medium", color: "text-strong", children: post.title };
      tmp38Result = React4(Text_Text.Text, obj16);
    }
    const items2 = [tmp38Result];
    const obj17 = { variant: "body-sm/normal", color: "text-subtle", lineClamp: 4, children: post.body };
    items2[1] = React4(Text_Text.Text, obj17);
    obj15.children = items2;
    const items3 = [hasOwnProperty(View, obj15)];
    let tmp38Result2 = null;
    if (null != post.actionLabel) {
      const obj18 = {
        size: "sm",
        variant: "secondary",
        grow: true,
        text: post.actionLabel,
        onPress() {
          return onAction(action);
        },
      };
      tmp38Result2 = React4(components_Button_Button.Button, obj18);
    }
    items3[1] = tmp38Result2;
    obj14.children = items3;
    items1[1] = hasOwnProperty(View, obj14);
    obj12.children = items1;
    items[1] = hasOwnProperty(View, obj12);
    obj10.children = items;
    return hasOwnProperty(View, obj10);
  } else {
    const obj19 = { style: tmp5 ? tmp.content : tmp.standardContent, children: null };
    const obj20 = { style: tmp.header, children: null };
    const items4 = [tmp11Result];
    const obj21 = { style: tmp.copy, children: null };
    let num;
    if (tmp5) {
      num = 2;
    }
    const obj22 = { variant: "heading-sm/semibold", color: "text-strong", lineClamp: num, children: post.title };
    const items5 = [React4(Text_Text.Heading, obj22)];
    let tmp20Result = null;
    if (tmp5) {
      const obj23 = { variant: "body-sm/normal", color: "text-subtle", lineClamp: 2, children: post.body };
      tmp20Result = React4(Text_Text.Text, obj23);
    }
    items5[1] = tmp20Result;
    obj21.children = items5;
    items4[1] = hasOwnProperty(View, obj21);
    obj20.children = items4;
    const items6 = [hasOwnProperty(View, obj20), , ,];
    let tmp20Result5 = null;
    if (!tmp5) {
      const obj24 = { variant: "body-md/normal", color: "text-default", lineClamp: 4, children: post.body };
      tmp20Result5 = React4(Text_Text.Text, obj24);
    }
    items6[1] = tmp20Result5;
    let tmp20Result6 = null;
    if (null != post.imageUrl) {
      const obj25 = { accessible: false, style: tmp.media, source: null };
      const obj26 = { uri: post.imageUrl };
      obj25.source = obj26;
      tmp20Result6 = React4(FastImageDefault, obj25);
    }
    items6[2] = tmp20Result6;
    let tmp20Result8 = null;
    if (null != action) {
      tmp20Result8 = null;
      if (null != post.actionLabel) {
        let postAction;
        if (!tmp5) {
          postAction = tmp.postAction;
        }
        const obj27 = { style: postAction, children: null };
        let str2 = "sm";
        if (tmp5) {
          str2 = "md";
        }
        const obj28 = { size: str2, variant: "primary", text: post.actionLabel, grow: tmp5, icon: null, onPress: null };
        let tmp20Result7;
        if (tmp5) {
          const obj29 = { size: "sm", color: nativeDefault.colors.ICON_OVERLAY_LIGHT };
          tmp20Result7 = React4(LinkIcon.LinkIcon, obj29);
        }
        obj28.icon = tmp20Result7;
        obj28.onPress = function onPress() {
          return onAction(action);
        };
        obj27.children = React4(components_Button_Button.Button, obj28);
        tmp20Result8 = React4(View, obj27);
      }
    }
    items6[3] = tmp20Result8;
    obj19.children = items6;
    return hasOwnProperty(View, obj19);
  }
}
