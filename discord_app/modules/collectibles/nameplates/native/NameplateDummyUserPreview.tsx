// discord_app/modules/collectibles/nameplates/native/NameplateDummyUserPreview.tsx
import initialize from "../../../../../discord_common/js/packages/flux/index.tsx";
import nativeDefault from "../../../../../discord_common/js/packages/tokens/native.tsx";
import native from "../../../../design/void/native.tsx";
import themes from "../../../../design/utils/shared/themes.tsx";
import NameplateDefault from "Nameplate.tsx";
import noop from "../../../../../_runtime/metro/00019__.js";
import ThemeStore from "../../../user_settings/ThemeStore.tsx";

require = fn;
const View = fn(17).View;
const jsxProd = fn(21);
({ jsx: hasOwnProperty, jsxs: metroRequire } = jsxProd);
const NAMEPLATE_DUMMY_USER_PREVIEW_CONFIG = {};
NAMEPLATE_DUMMY_USER_PREVIEW_CONFIG[fn(1177).AvatarSizes.XSMALL_20] = {
  padding: nativeDefault.space.PX_4,
  avatarMarginRight: nativeDefault.space.PX_4,
  placeholderBarHeight: 6,
};
NAMEPLATE_DUMMY_USER_PREVIEW_CONFIG[fn(1177).AvatarSizes.XSMALL] = {
  padding: 6,
  avatarMarginRight: 6,
  placeholderBarHeight: 8,
};
let obj2 = { padding: nativeDefault.space.PX_4, avatarMarginRight: nativeDefault.space.PX_4, placeholderBarHeight: 6 };
NAMEPLATE_DUMMY_USER_PREVIEW_CONFIG[fn(1177).AvatarSizes.NORMAL] = {
  padding: nativeDefault.space.PX_8,
  avatarMarginRight: nativeDefault.space.PX_8,
  placeholderBarHeight: 14,
};
const createStyles = fn(4836);
let closure_8 = createStyles.createStyles((arg0, arg1) => {
  obj = {
    container: {
      padding: obj[arg0].padding,
      flexDirection: "row",
      alignItems: "center",
      justifyContent: "flex-start",
      width: "100%",
      position: "relative",
      borderRadius: nativeDefault.radii.sm,
    },
    avatarContainer: null,
    avatar: null,
    placeholderBar: null,
    nameplate: null,
  };
  const obj3 = {
    borderRadius: nativeDefault.radii.round,
    marginRight: obj[arg0].avatarMarginRight,
    backgroundColor: null,
  };
  let str = "transparent";
  if (arg1) {
    str = nativeDefault.colors.BORDER_STRONG;
  }
  obj3.backgroundColor = str;
  obj.avatarContainer = obj3;
  let num = 0.5;
  if (arg1) {
    num = 0;
  }
  obj.avatar = { opacity: num };
  const obj2 = {
    padding: obj[arg0].padding,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "flex-start",
    width: "100%",
    position: "relative",
    borderRadius: nativeDefault.radii.sm,
  };
  obj.placeholderBar = {
    borderRadius: nativeDefault.radii.md,
    height: obj[arg0].placeholderBarHeight,
    backgroundColor: nativeDefault.colors.BORDER_STRONG,
  };
  const obj4 = {
    borderRadius: nativeDefault.radii.md,
    height: obj[arg0].placeholderBarHeight,
    backgroundColor: nativeDefault.colors.BORDER_STRONG,
  };
  obj.nameplate = { borderRadius: nativeDefault.radii.sm };
  return obj;
});
const size = fn(2);
const result = size.fileFinishedImporting("modules/collectibles/nameplates/native/NameplateDummyUserPreview.tsx");

export { NAMEPLATE_DUMMY_USER_PREVIEW_CONFIG };
export const NameplateDummyUserPreview = function NameplateDummyUserPreview(hideAvatar) {
  let flag = hideAvatar.hideAvatar;
  if (flag === undefined) {
    flag = false;
  }
  let NORMAL = hideAvatar.avatarSize;
  if (NORMAL === undefined) {
    NORMAL = native.AvatarSizes.NORMAL;
  }
  ({ animate, nameplate, style } = hideAvatar);
  if (animate === undefined) {
    animate = false;
  }
  const tmp3 = closure_8(NORMAL, flag);
  const items = [ThemeStore];
  const obj2 = { style: null, children: null };
  const items1 = [tmp3.container, style];
  obj2.style = items1;
  const stateFromStores = initialize.useStateFromStores(items, () => themes.isThemeDark(theme.theme));
  const items2 = [
    hasOwnProperty(NameplateDefault, { nameplate, fullOpacity: true, style: tmp3.nameplate, animate }),
    ,
  ];
  const obj4 = { style: tmp3.avatarContainer, children: null };
  const obj3 = { nameplate, fullOpacity: true, style: tmp3.nameplate, animate };
  obj4.children = hasOwnProperty(native.Avatar, {
    source: importDefault(stateFromStores ? 8283 : 8284),
    size: NORMAL,
    "aria-hidden": true,
    style: tmp3.avatar,
  });
  items2[1] = hasOwnProperty(View, obj4);
  const obj6 = { style: null };
  const items3 = [tmp3.placeholderBar, { width: hideAvatar.width }];
  obj6.style = items3;
  items2[2] = hasOwnProperty(View, obj6);
  obj2.children = items2;
  return timestampProducer(View, obj2);
};
