// discord_app/modules/main_tabs_v2/native/shared_components/SearchButton.tsx
import noopAll from "../../../../../_runtime/00019_noop.js";
import ThemesDefault from "../../../../../discord_common/js/packages/tokens/native.tsx";
import getSystemLocale from "../../../../intl/index.native.tsx";
import Text from "../../../../design/components/Text/native/Text.tsx";
import MagnifyingGlassIcon from "../../../../design/components/Icon/native/redesign/generated/MagnifyingGlassIcon.tsx";
import { Pressable } from "../../../../../_runtime/00017_get_ActivityIndicator.js";
import jsxProd from "../../../../../_runtime/react/00021_jsxProd.js";
import createCacheKey from "../../../../design/components/Styles/native/createStyles.tsx";

require = arg1;
noopAll;
({ jsx: c3, jsxs: c4 } = jsxProd);
createCacheKey = { searchButton: null, roundedCorners: null, roundedCornersAlt: null, text: null };
createCacheKey = { backgroundColor: ThemesDefault.colors.INPUT_BACKGROUND_DEFAULT, height: 40, alignItems: "center", flexDirection: "row", paddingHorizontal: 12 };
createCacheKey[0] = createCacheKey;
createCacheKey[1] = { borderRadius: 20 };
createCacheKey[2] = { borderRadius: ThemesDefault.radii.round };
createCacheKey[3] = { marginLeft: 8 };
let closure_5 = createCacheKey.createStyles(createCacheKey);
const obj1 = { borderRadius: ThemesDefault.radii.round };
const result = require("set").fileFinishedImporting("modules/main_tabs_v2/native/shared_components/SearchButton.tsx");

export const SEARCH_BAR_HEIGHT = 40;
export const SearchButtonContent = function SearchButtonContent(panelVariant) {
  const merged = Object.assign(panelVariant, Object.create(null));
  const tmp2 = callback2();
  let obj = {};
  const merged1 = Object.assign(merged);
  const items = [tmp2.searchButton, panelVariant.panelVariant ? tmp2.roundedCornersAlt : tmp2.roundedCorners, merged.style];
  obj.style = items;
  const items1 = [callback(MagnifyingGlassIcon.MagnifyingGlassIcon, { size: "xs" }), ];
  obj = { variant: "text-sm/medium", color: "text-muted", style: tmp2.text, maxFontSizeMultiplier: 2, children: null };
  const intl = getSystemLocale.intl;
  obj[4] = intl.string(getSystemLocale.t["5h0QOP"]);
  items1[1] = callback(Text.Text, obj);
  obj.children = items1;
  return closure_4(Pressable, obj);
};