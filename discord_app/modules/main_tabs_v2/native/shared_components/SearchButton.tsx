// discord_app/modules/main_tabs_v2/native/shared_components/SearchButton.tsx
import c from "../../../../../_runtime/00576_c.js";
import nativeDefault from "../../../../../discord_common/js/packages/tokens/native.tsx";
import util from "../../../../intl/index.native.tsx";
import Text_Text from "../../../../design/components/Text/native/Text.tsx";
import MagnifyingGlassIcon from "../../../../design/components/Icon/native/redesign/generated/MagnifyingGlassIcon.tsx";
import _objectWithoutProperties from "../../../../../_runtime/metro/00109__objectWithoutProperties.js";
import noop from "../../../../../_runtime/metro/00019__.js";

require = fn;
let closure_2 = ["panelVariant"];
const Pressable = fn(17).Pressable;
const jsxProd = fn(21);
({ jsx: hasOwnProperty, jsxs: metroRequire } = jsxProd);
const createStyles = fn(5090);
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
let obj3 = {
  backgroundColor: nativeDefault.colors.INPUT_BACKGROUND_DEFAULT,
  height: 40,
  alignItems: "center",
  flexDirection: "row",
  paddingHorizontal: 12,
};
obj2.roundedCornersAlt = { borderRadius: nativeDefault.radii.round };
obj2.text = { marginLeft: 8 };
let closure_7 = createStyles.createStyles(obj2);
const ReactCompilerGating = fn(558);
const obj4 = { borderRadius: nativeDefault.radii.round };
const size = fn(2);
const result = size.fileFinishedImporting("modules/main_tabs_v2/native/shared_components/SearchButton.tsx");

export const SEARCH_BAR_HEIGHT = 40;
export const SearchButtonContent = ReactCompilerGating.isReactCompilerEnabled()
  ? function SearchButtonContent(panelVariant) {
      const cResult = c.c(15);
      if (cResult[0] !== panelVariant) {
        panelVariant = panelVariant.panelVariant;
        const tmp8 = _objectWithoutProperties(panelVariant, closure_2);
        cResult[0] = panelVariant;
        cResult[1] = panelVariant;
        cResult[2] = tmp8;
        let tmp5 = tmp8;
        let tmp4 = panelVariant;
      } else {
        tmp4 = cResult[1];
        tmp5 = cResult[2];
      }
      const tmp9 = closure_7();
      const tmp10 = tmp4 ? tmp9.roundedCornersAlt : tmp9.roundedCorners;
      if (cResult[3] === tmp5.style) {
        if (cResult[4] === tmp9.searchButton) {
          if (cResult[5] === tmp10) {
            let tmp11 = cResult[6];
          }
          const _Symbol = Symbol;
          if (cResult[7] === Symbol.for("react.memo_cache_sentinel")) {
            const tmp15 = hasOwnProperty(MagnifyingGlassIcon.MagnifyingGlassIcon, { size: "xs" });
            cResult[7] = tmp15;
            let tmp13 = tmp15;
          } else {
            tmp13 = cResult[7];
          }
          const _Symbol2 = Symbol;
          if (cResult[8] === Symbol.for("react.memo_cache_sentinel")) {
            const intl = util.intl;
            const stringResult = intl.string(util.t["5h0QOP"]);
            cResult[8] = stringResult;
            let tmp16 = stringResult;
          } else {
            tmp16 = cResult[8];
          }
          if (cResult[9] !== tmp9.text) {
            const obj2 = {
              variant: "text-sm/medium",
              color: "text-muted",
              style: tmp9.text,
              maxFontSizeMultiplier: 2,
              children: tmp16,
            };
            const tmp20 = hasOwnProperty(Text_Text.Text, obj2);
            cResult[9] = tmp9.text;
            cResult[10] = tmp20;
            let tmp18 = tmp20;
          } else {
            tmp18 = cResult[10];
          }
          if (cResult[11] === tmp5) {
            if (cResult[12] === tmp11) {
              if (cResult[13] === tmp18) {
                let tmp21 = cResult[14];
              }
              return tmp21;
            }
          }
          const obj3 = {};
          const merged = Object.assign(tmp5);
          obj3.style = tmp11;
          const items = [tmp13, tmp18];
          obj3.children = items;
          const tmp27 = timestampProducer(Pressable, obj3);
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
    }
  : function SearchButtonContent(panelVariant) {
      const merged = Object.assign(panelVariant, Object.assign({ panelVariant: 0 }));
      const tmp2 = closure_7();
      const obj = {};
      const merged1 = Object.assign(merged);
      const items = [
        tmp2.searchButton,
        panelVariant.panelVariant ? tmp2.roundedCornersAlt : tmp2.roundedCorners,
        merged.style,
      ];
      obj.style = items;
      const items1 = [hasOwnProperty(MagnifyingGlassIcon.MagnifyingGlassIcon, { size: "xs" })];
      const obj2 = {
        variant: "text-sm/medium",
        color: "text-muted",
        style: tmp2.text,
        maxFontSizeMultiplier: 2,
        children: null,
      };
      const intl = util.intl;
      obj2.children = intl.string(util.t["5h0QOP"]);
      items1[1] = hasOwnProperty(Text_Text.Text, obj2);
      obj.children = items1;
      return timestampProducer(Pressable, obj);
    };
