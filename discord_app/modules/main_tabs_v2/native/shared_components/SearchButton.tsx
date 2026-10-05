// === Module 12007: SearchButton ===

// Module 12007 (SearchButton)
import react_native from "react-native" /* 17 */;
import react2 from "react" /* 576 */;
import nativeDefault from "native" /* 587 */;
import intl2 from "intl" /* 1126 */;
import Text_Text from "Text/Text" /* 4886 */;
import MagnifyingGlassIcon from "MagnifyingGlassIcon" /* 6548 */;
import _objectWithoutProperties from "_objectWithoutProperties" /* 109 */;
import react from "react" /* 19 */;
import Fragment from "Fragment" /* 21 */;
import createStyles_mod from "createStyles" /* 4890 */;
import ReactCompilerGating from "ReactCompilerGating" /* 558 */;
import size from "module_2" /* 2 */;

let panelVariant;

let hasOwnProperty;
let metroRequire;
let obj2;
let obj3;
let closure_2 = ["panelVariant"];
const Pressable = react_native.Pressable;
({ jsx: hasOwnProperty, jsxs: metroRequire } = Fragment);
let createStyles = createStyles_mod;
let obj = { searchButton: obj2, roundedCorners: { borderRadius: 20 }, roundedCornersAlt: obj3, text: { marginLeft: 8 } };
obj2 = { backgroundColor: nativeDefault.colors.INPUT_BACKGROUND_DEFAULT, height: 40, alignItems: "center", flexDirection: "row", paddingHorizontal: 12 };
createStyles = createStyles.createStyles;
obj3 = { borderRadius: nativeDefault.radii.round };
let closure_7 = createStyles(obj);
let tmp5 = ReactCompilerGating.isReactCompilerEnabled() ? ((panelVariant) => {
  let items;
  let tmp4;
  let tmp5;
  const obj = react2;
  const cResult = obj.c(15);
  if (cResult[0] !== panelVariant) {
    panelVariant = panelVariant.panelVariant;
    const tmp8 = _objectWithoutProperties(panelVariant, closure_2);
    cResult[0] = panelVariant;
    cResult[1] = panelVariant;
    cResult[2] = tmp8;
    tmp5 = tmp8;
    tmp4 = panelVariant;
  } else {
    tmp4 = cResult[1];
    tmp5 = cResult[2];
  }
  const tmp9 = closure_7();
  const tmp10 = tmp4 ? tmp9.roundedCornersAlt : tmp9.roundedCorners;
  if (cResult[3] === tmp5.style) {
    if (cResult[4] === tmp9.searchButton) {
      let tmp11;
      let tmp13;
      let tmp16;
      let tmp18;
      if (cResult[5] === tmp10) {
        tmp11 = cResult[6];
      }
      const _Symbol = Symbol;
      if (cResult[7] === Symbol.for("react.memo_cache_sentinel")) {
        const tmp15 = hasOwnProperty(MagnifyingGlassIcon.MagnifyingGlassIcon, { size: "xs" });
        cResult[7] = tmp15;
        tmp13 = tmp15;
      } else {
        tmp13 = cResult[7];
      }
      const _Symbol2 = Symbol;
      const text = tmp9.text;
      if (cResult[8] === Symbol.for("react.memo_cache_sentinel")) {
        const intl = intl2.intl;
        const stringResult = intl.string(intl2.t["5h0QOP"]);
        cResult[8] = stringResult;
        tmp16 = stringResult;
      } else {
        tmp16 = cResult[8];
      }
      if (cResult[9] !== tmp9.text) {
        const obj2 = { variant: "text-sm/medium", color: "text-muted", style: text, maxFontSizeMultiplier: 2, children: tmp16 };
        const tmp20 = hasOwnProperty(Text_Text.Text, obj2);
        cResult[9] = tmp9.text;
        cResult[10] = tmp20;
        tmp18 = tmp20;
      } else {
        tmp18 = cResult[10];
      }
      if (cResult[11] === tmp5) {
        if (cResult[12] === tmp11) {
          let tmp21;
          if (cResult[13] === tmp18) {
            tmp21 = cResult[14];
          }
          return tmp21;
        }
      }
      const obj3 = { style: tmp11, children: items };
      const merged = Object.assign(tmp5);
      items = [tmp13, tmp18];
      const tmp27 = metroRequire(Pressable, obj3);
      cResult[11] = tmp5;
      cResult[12] = tmp11;
      cResult[13] = tmp18;
      cResult[14] = tmp27;
      tmp21 = tmp27;
    }
  }
  const items1 = [tmp9.searchButton, tmp10, tmp5.style];
  cResult[3] = tmp5.style;
  cResult[4] = tmp9.searchButton;
  cResult[5] = tmp10;
  cResult[6] = items1;
  tmp11 = items1;
}) : ((panelVariant) => {
  let intl;
  let items;
  let items1;
  panelVariant = panelVariant.panelVariant;
  const merged = Object.assign(panelVariant, Object.assign({ panelVariant: 0 }));
  const tmp2 = closure_7();
  const obj = { style: items, children: items1 };
  const merged1 = Object.assign(merged);
  items = [tmp2.searchButton, panelVariant ? tmp2.roundedCornersAlt : tmp2.roundedCorners, merged.style];
  items1 = [hasOwnProperty(MagnifyingGlassIcon.MagnifyingGlassIcon, { size: "xs" }), ];
  const obj2 = { variant: "text-sm/medium", color: "text-muted", style: tmp2.text, maxFontSizeMultiplier: 2, children: intl.string(intl2.t["5h0QOP"]) };
  const Text = Text_Text.Text;
  intl = intl2.intl;
  items1[1] = hasOwnProperty(Text, obj2);
  return metroRequire(Pressable, obj);
});
const result = size.fileFinishedImporting("modules/main_tabs_v2/native/shared_components/SearchButton.tsx");

export const SEARCH_BAR_HEIGHT = 40;
export const SearchButtonContent = tmp5;