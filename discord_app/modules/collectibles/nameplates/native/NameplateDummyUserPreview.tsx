// discord_app/modules/collectibles/nameplates/native/NameplateDummyUserPreview.tsx
import noopAll from "../../../../../_runtime/00019_noop.js";
import initialize from "../../../../../discord_common/js/packages/flux/index.tsx";
import ThemesDefault from "../../../../../discord_common/js/packages/tokens/native.tsx";
import Button from "../../../../design/void/native.tsx";
import NameplateInnerDefault from "Nameplate.tsx";
import { View } from "../../../../../_runtime/00017_get_ActivityIndicator.js";
import closure_4 from "../../../user_settings/ThemeStore.tsx";
import jsxProd from "../../../../../_runtime/react/00021_jsxProd.js";
import createCacheKey from "../../../../design/components/Styles/native/createStyles.tsx";

require = arg1;
noopAll;
({ jsx: c5, jsxs: closure_6 } = jsxProd);
let obj = {};
obj = { padding: ThemesDefault.space.PX_4, avatarMarginRight: ThemesDefault.space.PX_4, placeholderBarHeight: 6 };
obj[require("Button").AvatarSizes.XSMALL_20] = obj;
obj[require("Button").AvatarSizes.XSMALL] = { padding: 6, avatarMarginRight: 6, placeholderBarHeight: 8 };
obj = { padding: ThemesDefault.space.PX_8, avatarMarginRight: ThemesDefault.space.PX_8, placeholderBarHeight: 14 };
obj[require("Button").AvatarSizes.NORMAL] = obj;
let closure_8 = createCacheKey.createStyles((arg0, arg1) => {
  obj = { container: null, avatarContainer: null, avatar: null, placeholderBar: null, nameplate: null };
  obj = { padding: tmp.padding, flexDirection: "row", alignItems: "center", justifyContent: "flex-start", width: "100%", position: "relative", borderRadius: ThemesDefault.radii.sm };
  obj[0] = obj;
  obj = { borderRadius: ThemesDefault.radii.round, marginRight: tmp.avatarMarginRight, backgroundColor: null };
  let str = "transparent";
  if (arg1) {
    str = tmp2(712).colors.BORDER_STRONG;
  }
  obj[2] = str;
  obj[1] = obj;
  let num = 0.5;
  if (arg1) {
    num = 0;
  }
  obj[2] = { opacity: num };
  obj[3] = { borderRadius: ThemesDefault.radii.md, height: obj[arg0].placeholderBarHeight, backgroundColor: ThemesDefault.colors.BORDER_STRONG };
  obj1 = { borderRadius: ThemesDefault.radii.md, height: obj[arg0].placeholderBarHeight, backgroundColor: ThemesDefault.colors.BORDER_STRONG };
  obj[4] = { borderRadius: ThemesDefault.radii.sm };
  return obj;
});
const result = require("set").fileFinishedImporting("modules/collectibles/nameplates/native/NameplateDummyUserPreview.tsx");

export const NAMEPLATE_DUMMY_USER_PREVIEW_CONFIG = obj;
export const NameplateDummyUserPreview = function NameplateDummyUserPreview(hideAvatar) {
  let flag = hideAvatar.hideAvatar;
  if (flag === undefined) {
    flag = false;
  }
  let NORMAL = hideAvatar.avatarSize;
  if (NORMAL === undefined) {
    NORMAL = Button.AvatarSizes.NORMAL;
  }
  ({ animate, nameplate, style } = hideAvatar);
  if (animate === undefined) {
    animate = false;
  }
  const tmp3 = callback2(NORMAL, flag);
  obj = initialize;
  const items = [closure_4];
  obj = { style: items1, children: null };
  items1 = [tmp3.container, style];
  const stateFromStores = obj.useStateFromStores(items, () => callback(table[8]).isThemeDark(theme.theme));
  obj = { nameplate, fullOpacity: true, style: tmp3.nameplate, animate };
  const items2 = [callback(NameplateInnerDefault, obj), , ];
  obj1 = { style: tmp3.avatarContainer, children: callback(Button.Avatar, { source: importDefault(stateFromStores ? 9607 : 9608), size: NORMAL, "aria-hidden": true, style: tmp3.avatar }) };
  items2[1] = callback(View, obj1);
  const items3 = [tmp3.placeholderBar, { width: hideAvatar.width }];
  items2[2] = callback(View, { style: items3 });
  obj[1] = items2;
  return closure_6(View, obj);
};