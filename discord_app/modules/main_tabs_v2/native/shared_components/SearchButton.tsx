// discord_app/modules/main_tabs_v2/native/shared_components/SearchButton.tsx
import "noop";
import { Pressable } from "get ActivityIndicator";
import jsxProd from "jsxProd";
import createCacheKey from "createCacheKey";

let c3;
let c4;
const require = arg1;
({ jsx: c3, jsxs: c4 } = jsxProd);
createCacheKey = { searchButton: null, roundedCorners: null, roundedCornersAlt: null, text: null };
createCacheKey = { backgroundColor: require("Themes").colors.INPUT_BACKGROUND_DEFAULT, height: 40, alignItems: "center", flexDirection: "row", paddingHorizontal: 12 };
createCacheKey[0] = createCacheKey;
createCacheKey[1] = { borderRadius: 20 };
createCacheKey[2] = { borderRadius: require("Themes").radii.round };
createCacheKey[3] = { marginLeft: 8 };
createCacheKey = createCacheKey.createStyles(createCacheKey);
const obj1 = { borderRadius: require("Themes").radii.round };
const result = require("jsxProd").fileFinishedImporting("modules/main_tabs_v2/native/shared_components/SearchButton.tsx");

export const SEARCH_BAR_HEIGHT = 40;
export const SearchButtonContent = function SearchButtonContent(panelVariant) {
  const merged = Object.assign(panelVariant, Object.create(null));
  const tmp2 = createCacheKey();
  let obj = {};
  const merged1 = Object.assign(merged);
  const items = [tmp2.searchButton, panelVariant.panelVariant ? tmp2.roundedCornersAlt : tmp2.roundedCorners, merged.style];
  obj.style = items;
  const items1 = [callback(require("../../../../design/components/Icon/native/redesign/generated/MagnifyingGlassIcon.tsx") /* MagnifyingGlassIcon */.MagnifyingGlassIcon, { size: "xs" }), ];
  obj = { variant: "text-sm/medium", color: "text-muted", style: tmp2.text, maxFontSizeMultiplier: 2, children: null };
  const intl = require("../../../../intl/index.native.tsx") /* getSystemLocale */.intl;
  obj[4] = intl.string(require("../../../../intl/index.native.tsx") /* getSystemLocale */.t["5h0QOP"]);
  items1[1] = callback(require("../../../../design/components/Text/native/Text.tsx") /* Text */.Text, obj);
  obj.children = items1;
  return closure_4(Pressable, obj);
};