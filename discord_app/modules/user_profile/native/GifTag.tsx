// discord_app/modules/user_profile/native/GifTag.tsx
import set from "../../../../_runtime/00002_set.js";
import get_ActivityIndicator from "../../../../_runtime/00017_get_ActivityIndicator.js";
import jsxProd from "../../../../_runtime/react/00021_jsxProd.js";
import ThemesDefault from "../../../../discord_common/js/packages/tokens/native.tsx";
import getSystemLocale from "../../../intl/index.native.tsx";
import Text from "../../../design/components/Text/native/Text.tsx";
import createCacheKey from "../../../design/components/Styles/native/createStyles.tsx";
import importDefaultResult from "../../../../_runtime/00689_n.js";

const View = get_ActivityIndicator.View;
const jsx = jsxProd.jsx;
let obj = { gifTag: null, gifTagText: null };
obj = { paddingHorizontal: ThemesDefault.space.PX_8, paddingVertical: 2, borderRadius: ThemesDefault.radii.xs, backgroundColor: null };
const importDefaultResultResult = importDefaultResult(ThemesDefault.unsafe_rawColors.WHITE);
obj[3] = importDefaultResult(ThemesDefault.unsafe_rawColors.WHITE).alpha(0.9).css();
obj[0] = obj;
const alphaResult = importDefaultResult(ThemesDefault.unsafe_rawColors.WHITE).alpha(0.9);
obj[1] = { color: ThemesDefault.unsafe_rawColors.PRIMARY_800 };
let closure_4 = createCacheKey.createStyles(obj);
const obj1 = { color: ThemesDefault.unsafe_rawColors.PRIMARY_800 };
const result = set.fileFinishedImporting("modules/user_profile/native/GifTag.tsx");

export default function GifTag(style) {
  const tmp = callback();
  let obj = { style: items, pointerEvents: "none", children: null };
  items = [tmp.gifTag, style.style];
  obj = { variant: "text-sm/bold", color: "none", style: tmp.gifTagText, children: null };
  const intl = getSystemLocale.intl;
  obj[3] = intl.string(getSystemLocale.t.I5gL2H);
  obj[2] = jsx(Text.Text, { variant: "text-sm/bold", color: "none", style: tmp.gifTagText, children: null });
  return <View variant="text-sm/bold" color="none" style={tmp.gifTagText}>{null}</View>;
};