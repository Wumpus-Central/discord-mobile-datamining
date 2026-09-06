// === Module 12370: SearchButton ===

// Module 12370 (SearchButton)
import nativeDefault from "native" /* 576 */;
import util from "util" /* 1114 */;
import Text_Text from "Text/Text" /* 4556 */;
import MagnifyingGlassIcon from "MagnifyingGlassIcon" /* 7051 */;
import noop from "module_19" /* 19 */;

require = fn;
const Pressable = fn(17).Pressable;
const jsxProd = fn(21);
({ jsx: c3, jsxs: closure_4 } = jsxProd);
fn(4560);
let createStyles = { searchButton: null, roundedCorners: null, roundedCornersAlt: null, text: null };
createStyles = { backgroundColor: nativeDefault.colors.INPUT_BACKGROUND_DEFAULT, height: 40, alignItems: "center", flexDirection: "row", paddingHorizontal: 12 };
createStyles.searchButton = createStyles;
createStyles.roundedCorners = { borderRadius: 20 };
createStyles.roundedCornersAlt = { borderRadius: nativeDefault.radii.round };
createStyles.text = { marginLeft: 8 };
let closure_5 = createStyles.createStyles(createStyles);
const size = fn(2);
const result = size.fileFinishedImporting("modules/main_tabs_v2/native/shared_components/SearchButton.tsx");

export const SEARCH_BAR_HEIGHT = 40;
export const SearchButtonContent = function SearchButtonContent(panelVariant) {
  const merged = Object.assign(panelVariant, Object.assign({ panelVariant: 0 }));
  const tmp2 = closure_5();
  let obj = {};
  const merged1 = Object.assign(merged);
  const items = [tmp2.searchButton, panelVariant.panelVariant ? tmp2.roundedCornersAlt : tmp2.roundedCorners, merged.style];
  obj.style = items;
  const items1 = [React3(MagnifyingGlassIcon.MagnifyingGlassIcon, { size: "xs" }), ];
  obj = { variant: "text-sm/medium", color: "text-muted", style: tmp2.text, maxFontSizeMultiplier: 2, children: null };
  const intl = util.intl;
  obj.children = intl.string(util.t["5h0QOP"]);
  items1[1] = React3(Text_Text.Text, obj);
  obj.children = items1;
  return React4(Pressable, obj);
};