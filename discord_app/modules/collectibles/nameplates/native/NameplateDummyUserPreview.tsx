// discord_app/modules/collectibles/nameplates/native/NameplateDummyUserPreview.tsx
import "noop";
import { View } from "get ActivityIndicator";
import handleThemeChange from "handleThemeChange";
import jsxProd from "jsxProd";
import createCacheKey from "createCacheKey";

let c5;
let closure_6;
const require = arg1;
({ jsx: c5, jsxs: closure_6 } = jsxProd);
let obj = {};
obj = { padding: null, avatarMarginRight: null, placeholderBarHeight: 6 };
obj[0] = require("Themes").space.PX_4;
obj[1] = require("Themes").space.PX_4;
obj[require("Button").AvatarSizes.XSMALL_20] = obj;
obj[require("Button").AvatarSizes.XSMALL] = { padding: 6, avatarMarginRight: 6, placeholderBarHeight: 8 };
obj = { padding: null, avatarMarginRight: null, placeholderBarHeight: 14 };
obj[0] = require("Themes").space.PX_8;
obj[1] = require("Themes").space.PX_8;
obj[require("Button").AvatarSizes.NORMAL] = obj;
let closure_8 = createCacheKey.createStyles((arg0, arg1) => {
  let obj = { container: null, avatarContainer: null, avatar: null, placeholderBar: null, nameplate: null };
  obj = { padding: tmp.padding, flexDirection: "row", alignItems: "center", justifyContent: "flex-start", width: "100%", position: "relative", borderRadius: require("../../../../../discord_common/js/packages/tokens/native.tsx").radii.sm };
  obj[0] = obj;
  obj = { borderRadius: require("../../../../../discord_common/js/packages/tokens/native.tsx").radii.round, marginRight: tmp.avatarMarginRight, backgroundColor: null };
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
  obj[3] = { borderRadius: require("../../../../../discord_common/js/packages/tokens/native.tsx").radii.md, height: obj[arg0].placeholderBarHeight, backgroundColor: require("../../../../../discord_common/js/packages/tokens/native.tsx").colors.BORDER_STRONG };
  const obj1 = { borderRadius: require("../../../../../discord_common/js/packages/tokens/native.tsx").radii.md, height: obj[arg0].placeholderBarHeight, backgroundColor: require("../../../../../discord_common/js/packages/tokens/native.tsx").colors.BORDER_STRONG };
  obj[4] = { borderRadius: require("../../../../../discord_common/js/packages/tokens/native.tsx").radii.sm };
  return obj;
});
const result = require("handleThemeChange").fileFinishedImporting("modules/collectibles/nameplates/native/NameplateDummyUserPreview.tsx");

export const NAMEPLATE_DUMMY_USER_PREVIEW_CONFIG = obj;
export const NameplateDummyUserPreview = function NameplateDummyUserPreview(hideAvatar) {
  let animate;
  let nameplate;
  let style;
  let flag = hideAvatar.hideAvatar;
  if (flag === undefined) {
    flag = false;
  }
  let NORMAL = hideAvatar.avatarSize;
  if (NORMAL === undefined) {
    NORMAL = require("../../../../design/void/native.tsx") /* Button */.AvatarSizes.NORMAL;
  }
  ({ animate, nameplate, style } = hideAvatar);
  if (animate === undefined) {
    animate = false;
  }
  const tmp3 = callback2(NORMAL, flag);
  let obj = require("../../../../../discord_common/js/packages/flux/index.tsx") /* initialize */;
  const items = [handleThemeChange];
  obj = { style: items1, children: null };
  items1 = [tmp3.container, style];
  const stateFromStores = obj.useStateFromStores(items, () => callback(table[8]).isThemeDark(theme.theme));
  obj = { nameplate, fullOpacity: true, style: tmp3.nameplate, animate };
  const items2 = [callback(require("Nameplate.tsx"), obj), , ];
  const obj1 = { style: tmp3.avatarContainer, children: null };
  const obj2 = { source: null, size: null, "aria-hidden": true, style: null };
  obj2[0] = importDefault(stateFromStores ? 9310 : 9311);
  obj2[1] = NORMAL;
  obj2[3] = tmp3.avatar;
  obj1[1] = callback(require("../../../../design/void/native.tsx") /* Button */.Avatar, obj2);
  items2[1] = callback(View, obj1);
  const items3 = [tmp3.placeholderBar, { width: hideAvatar.width }];
  items2[2] = callback(View, { style: items3 });
  obj[1] = items2;
  return closure_6(View, obj);
};