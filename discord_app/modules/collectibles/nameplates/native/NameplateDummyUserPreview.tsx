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
let NAMEPLATE_DUMMY_USER_PREVIEW_CONFIG = {};
NAMEPLATE_DUMMY_USER_PREVIEW_CONFIG = {
  padding: nativeDefault.space.PX_4,
  avatarMarginRight: nativeDefault.space.PX_4,
  placeholderBarHeight: 6,
};
NAMEPLATE_DUMMY_USER_PREVIEW_CONFIG[fn(1178).AvatarSizes.XSMALL_20] = NAMEPLATE_DUMMY_USER_PREVIEW_CONFIG;
NAMEPLATE_DUMMY_USER_PREVIEW_CONFIG[fn(1178).AvatarSizes.XSMALL] = {
  padding: 6,
  avatarMarginRight: 6,
  placeholderBarHeight: 8,
};
NAMEPLATE_DUMMY_USER_PREVIEW_CONFIG = {
  padding: nativeDefault.space.PX_8,
  avatarMarginRight: nativeDefault.space.PX_8,
  placeholderBarHeight: 14,
};
NAMEPLATE_DUMMY_USER_PREVIEW_CONFIG[fn(1178).AvatarSizes.NORMAL] = NAMEPLATE_DUMMY_USER_PREVIEW_CONFIG;
const createStyles = fn(4560);
let closure_8 = createStyles.createStyles((arg0, arg1) => {
  let avatarContainer = { container: null, avatarContainer: null, avatar: null, placeholderBar: null, nameplate: null };
  avatarContainer = {
    padding: tmp.padding,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "flex-start",
    width: "100%",
    position: "relative",
    borderRadius: nativeDefault.radii.sm,
  };
  avatarContainer.container = avatarContainer;
  avatarContainer = {
    borderRadius: nativeDefault.radii.round,
    marginRight: tmp.avatarMarginRight,
    backgroundColor: null,
  };
  let str = "transparent";
  if (arg1) {
    str = nativeDefault.colors.BORDER_STRONG;
  }
  avatarContainer.backgroundColor = str;
  avatarContainer.avatarContainer = avatarContainer;
  let num = 0.5;
  if (arg1) {
    num = 0;
  }
  avatarContainer.avatar = { opacity: num };
  avatarContainer.placeholderBar = {
    borderRadius: nativeDefault.radii.md,
    height: avatarContainer[arg0].placeholderBarHeight,
    backgroundColor: nativeDefault.colors.BORDER_STRONG,
  };
  const obj1 = {
    borderRadius: nativeDefault.radii.md,
    height: avatarContainer[arg0].placeholderBarHeight,
    backgroundColor: nativeDefault.colors.BORDER_STRONG,
  };
  avatarContainer.nameplate = { borderRadius: nativeDefault.radii.sm };
  return avatarContainer;
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
  obj = { style: null, children: null };
  const items1 = [tmp3.container, style];
  obj.style = items1;
  const stateFromStores = obj.useStateFromStores(items, () => themes.isThemeDark(theme.theme));
  obj = { nameplate, fullOpacity: true, style: tmp3.nameplate, animate };
  const items2 = [hasOwnProperty(NameplateDefault, obj), ,];
  const obj1 = {
    style: tmp3.avatarContainer,
    children: hasOwnProperty(native.Avatar, {
      source: importDefault(stateFromStores ? 8820 : 8821),
      size: NORMAL,
      "aria-hidden": true,
      style: tmp3.avatar,
    }),
  };
  items2[1] = hasOwnProperty(View, obj1);
  const obj3 = { style: null };
  const items3 = [tmp3.placeholderBar, { width: hideAvatar.width }];
  obj3.style = items3;
  items2[2] = hasOwnProperty(View, obj3);
  obj.children = items2;
  return timestampProducer(View, obj);
};
