// discord_app/modules/guild_role_subscriptions/native/components/UnavailableNotice.tsx
import noopAll from "../../../../../_runtime/00019_noop.js";
import ThemesDefault from "../../../../../discord_common/js/packages/tokens/native.tsx";
import Text from "../../../../design/components/Text/native/Text.tsx";
import preloadDefault from "../../../../components_native/common/FastImage.tsx";
import registerAssetDefault from "../../../../../_runtime/16081_registerAsset.js";
import { View } from "../../../../../_runtime/00017_get_ActivityIndicator.js";
import jsxProd from "../../../../../_runtime/react/00021_jsxProd.js";
import createCacheKey from "../../../../design/components/Styles/native/createStyles.tsx";

require = arg1;
noopAll;
({ jsx: c4, jsxs: c5 } = jsxProd);
createCacheKey = {
  container: null,
  brightTitle: null,
  unavailableContainer: null,
  unavailableInfo: null,
  unavailableDescription: null,
  joinCtaTitle: null,
};
createCacheKey = { flex: 1, backgroundColor: ThemesDefault.colors.BACKGROUND_BASE_LOW };
createCacheKey[0] = createCacheKey;
createCacheKey[1] = { color: ThemesDefault.colors.MOBILE_TEXT_HEADING_PRIMARY };
createCacheKey[2] = { justifyContent: "center" };
createCacheKey[3] = { alignItems: "center", justifyContent: "center" };
createCacheKey[4] = { marginTop: 8, marginHorizontal: 16, textAlign: "center" };
createCacheKey[5] = { alignSelf: "center", marginTop: 16, paddingHorizontal: 24, textAlign: "center" };
let closure_6 = createCacheKey.createStyles(createCacheKey);
const obj1 = { color: ThemesDefault.colors.MOBILE_TEXT_HEADING_PRIMARY };
const result = require("set").fileFinishedImporting(
  "modules/guild_role_subscriptions/native/components/UnavailableNotice.tsx",
);

export default function UnavailableNotice(brightTitle) {
  brightTitle = brightTitle.brightTitle;
  ({ title, description } = brightTitle);
  const tmp = callback2();
  let obj = { style: items, children: null };
  items = [,];
  ({ container: arr[0], unavailableContainer: arr[1] } = tmp);
  obj = { style: tmp.unavailableInfo, children: null };
  obj = { source: registerAssetDefault };
  const items1 = [callback(preloadDefault, obj), ,];
  const items2 = [tmp.joinCtaTitle];
  if (brightTitle) {
    brightTitle = tmp.brightTitle;
  }
  items2[1] = brightTitle;
  items1[1] = callback(Text.Text, {
    variant: "heading-lg/extrabold",
    color: "text-default",
    style: items2,
    children: title,
  });
  items1[2] = callback(Text.Text, {
    style: tmp.unavailableDescription,
    variant: "text-sm/medium",
    color: "text-default",
    children: description,
  });
  obj[1] = items1;
  obj[1] = closure_5(View, obj);
  return callback(View, obj);
}
