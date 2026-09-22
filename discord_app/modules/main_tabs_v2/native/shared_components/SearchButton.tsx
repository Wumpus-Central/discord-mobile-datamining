// discord_app/modules/main_tabs_v2/native/shared_components/SearchButton.tsx
import nativeDefault from "../../../../../discord_common/js/packages/tokens/native.tsx";
import util from "../../../../intl/index.native.tsx";
import Text_Text from "../../../../design/components/Text/native/Text.tsx";
import MagnifyingGlassIcon from "../../../../design/components/Icon/native/redesign/generated/MagnifyingGlassIcon.tsx";
import noop from "../../../../../_runtime/metro/00019__.js";

require = fn;
const Pressable = fn(17).Pressable;
const jsxProd = fn(21);
({ jsx: c3, jsxs: closure_4 } = jsxProd);
const createStyles = fn(4757);
let obj2 = {
  searchButton: {
    backgroundColor: nativeDefault.colors.INPUT_BACKGROUND_DEFAULT,
    height: 40,
    alignItems: "center",
    flexDirection: "row",
    paddingHorizontal: 12,
  },
  roundedCorners: { borderRadius: 20 },
  roundedCornersAlt: null,
  text: null,
};
const obj3 = {
  backgroundColor: nativeDefault.colors.INPUT_BACKGROUND_DEFAULT,
  height: 40,
  alignItems: "center",
  flexDirection: "row",
  paddingHorizontal: 12,
};
obj2.roundedCornersAlt = { borderRadius: nativeDefault.radii.round };
obj2.text = { marginLeft: 8 };
let closure_5 = createStyles.createStyles(obj2);
const size = fn(2);
const result = size.fileFinishedImporting("modules/main_tabs_v2/native/shared_components/SearchButton.tsx");

export const SEARCH_BAR_HEIGHT = 40;
export const SearchButtonContent = function SearchButtonContent(panelVariant) {
  const merged = Object.assign(panelVariant, Object.assign({ panelVariant: 0 }));
  const tmp2 = closure_5();
  const obj = {};
  const merged1 = Object.assign(merged);
  const items = [
    tmp2.searchButton,
    panelVariant.panelVariant ? tmp2.roundedCornersAlt : tmp2.roundedCorners,
    merged.style,
  ];
  obj.style = items;
  const items1 = [React3(MagnifyingGlassIcon.MagnifyingGlassIcon, { size: "xs" })];
  const obj2 = {
    variant: "text-sm/medium",
    color: "text-muted",
    style: tmp2.text,
    maxFontSizeMultiplier: 2,
    children: null,
  };
  const intl = util.intl;
  obj2.children = intl.string(util.t["5h0QOP"]);
  items1[1] = React3(Text_Text.Text, obj2);
  obj.children = items1;
  return React4(Pressable, obj);
};
