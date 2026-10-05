// === Module 16126: FavoritesGuildSuggestedChannels ===

// Module 16126 (FavoritesGuildSuggestedChannels)
import react_native from "react-native" /* 17 */;
import nativeDefault from "native" /* 587 */;
import Constants from "Constants" /* 1085 */;
import intl3 from "intl" /* 1126 */;
import _modDef3367 from "module_3367" /* 3367 */;
import components_Button_Button from "components/Button/Button" /* 5594 */;
import XSmallIcon from "XSmallIcon" /* 6017 */;
import useScaledRowHeightDefault from "useScaledRowHeight" /* 6546 */;
import RedesignChannelListConstants from "RedesignChannelListConstants" /* 11697 */;
import SearchableDestinationListRowDefault from "SearchableDestinationListRow" /* 16128 */;
import handleFavoritesGuildAddSuggestedChannelDefault from "handleFavoritesGuildAddSuggestedChannel" /* 16129 */;
import react_mod from "react" /* 19 */;
import FavoritesGuildSuggestionsStore from "FavoritesGuildSuggestionsStore" /* 16127 */;
import Fragment from "Fragment" /* 21 */;
import createStyles from "createStyles" /* 4890 */;
import ReactCompilerGating from "ReactCompilerGating" /* 558 */;
import size from "module_2" /* 2 */;

let dependencyMap, importDefault;

let c10;
let c9;
let hasOwnProperty;
let metroRequire;
let react = react_mod;
const View = react_native.View;
({ useFavoritesGuildSuggestions: hasOwnProperty, useFavoritesGuildSuggestionsDismissal: metroRequire } = FavoritesGuildSuggestionsStore);
const NOOP = Constants.NOOP;
let closure_8 = RedesignChannelListConstants.getScaledCategoryRowHeight;
({ jsx: c9, jsxs: c10 } = Fragment);
const PX_8 = nativeDefault.space.PX_8;
const PX_16 = nativeDefault.space.PX_16;
const PX_4 = nativeDefault.space.PX_4;
let obj = { container: { marginTop: PX_4 }, rows: { paddingHorizontal: PX_16, paddingBottom: PX_8 } };
let closure_13 = createStyles.createStyles(obj);
let tmp4 = ReactCompilerGating.isReactCompilerEnabled() ? (() => {
  let arr;
  let first;
  let intl2;
  let items;
  let style;
  let tmp10;
  let tmp13;
  let tmp = arr;
  let obj = arr(576);
  const cResult = obj.c(21);
  const tmp4 = closure_13();
  let obj2 = arr(16032);
  const categoryStyles = obj2.useCategoryStyles();
  arr = closure_5();
  const tmp6 = closure_6();
  if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
    let intl = tmp(1126).intl;
    const stringResult = intl.string(_modDef3367.F3dWTe);
    cResult[0] = stringResult;
    first = stringResult;
  } else {
    first = cResult[0];
  }
  if (cResult[1] !== tmp6) {
    let obj3 = { label: first, perform: tmp6, Icon: tmp(6017).XSmallIcon };
    cResult[1] = tmp6;
    cResult[2] = obj3;
    tmp10 = obj3;
  } else {
    tmp10 = cResult[2];
  }
  const tmp12 = useScaledRowHeightDefault();
  if (cResult[3] !== tmp12) {
    const obj4 = { height: tmp12 };
    cResult[3] = tmp12;
    cResult[4] = obj4;
    tmp13 = obj4;
  } else {
    tmp13 = cResult[4];
  }
  importDefault = tmp13;
  if (0 === arr.length) {
    return null;
  } else {
    if (cResult[5] === categoryStyles) {
      let tmp14;
      let tmp18;
      if (cResult[6] === tmp10) {
        tmp14 = cResult[7];
      }
      if (cResult[8] === tmp13) {
        if (cResult[9] === arr) {
          tmp18 = cResult[10];
        }
        if (cResult[14] === tmp4.rows) {
          let tmp21;
          if (cResult[15] === tmp18) {
            tmp21 = cResult[16];
          }
          if (cResult[17] === tmp4.container) {
            if (cResult[18] === tmp14) {
              let tmp25;
              if (cResult[19] === tmp21) {
                tmp25 = cResult[20];
              }
              return tmp25;
            }
          }
          const obj5 = { style: tmp30, children: items };
          items = [tmp14, tmp21];
          const tmp28 = closure_10(View, obj5);
          cResult[17] = tmp4.container;
          cResult[18] = tmp14;
          cResult[19] = tmp21;
          cResult[20] = tmp28;
          tmp25 = tmp28;
        }
        const obj6 = { style: tmp17, children: tmp18 };
        const tmp24 = closure_9(View, obj6);
        cResult[14] = tmp4.rows;
        cResult[15] = tmp18;
        cResult[16] = tmp24;
        tmp21 = tmp24;
      }
      if (cResult[11] === tmp13) {
        let tmp19;
        if (cResult[12] === arr.length) {
          tmp19 = cResult[13];
        }
        const mapped = arr.map(tmp19);
        cResult[8] = tmp13;
        cResult[9] = arr;
        cResult[10] = mapped;
        tmp18 = mapped;
      }
      const fn = function x(result, arg1) {
        let Button;
        let intl;
        let obj2;
        let obj3;
        let tmp;
        let closure_0 = result;
        let obj = { style, children: React4(tmp, obj2) };
        obj2 = { result, onPressDestination: handleFavoritesGuildAddSuggestedChannelDefault, onLongPress: NOOP, start: 0 === arg1, end: arg1 === arr.length - 1, trailing: React4(Button, obj3) };
        tmp = SearchableDestinationListRowDefault;
        obj3 = {
          variant: "secondary",
          size: "sm",
          grow: false,
          text: intl.string(intl3.t.OYkgVk),
          onPress() {
            const tmp = style(closure_2_2[16]);
            const obj = arr(closure_2_2[18]);
            return tmp(obj.getDestinationIdFromResult(closure_0));
          }
        };
        Button = components_Button_Button.Button;
        intl = intl3.intl;
        return React4(View, obj, "" + result.type + "-" + result.record.id);
      };
      cResult[11] = tmp13;
      cResult[12] = arr.length;
      cResult[13] = fn;
      tmp19 = fn;
    }
    const obj7 = { name: intl2.string(_modDef3367.oHWnLy), withMarginTop: false, styles: categoryStyles, trailingAction: tmp10 };
    const renderCategoryItem = tmp(16032).renderCategoryItem;
    tmp(16032);
    intl2 = tmp(1126).intl;
    const renderCategoryItemResult = renderCategoryItem(obj7);
    cResult[5] = categoryStyles;
    cResult[6] = tmp10;
    cResult[7] = renderCategoryItemResult;
    tmp14 = renderCategoryItemResult;
  }
}) : (() => {
  let arr;
  let height;
  let intl;
  let items2;
  let perform;
  let style;
  let tmp = closure_13();
  let obj = arr(16032);
  const categoryStyles = obj.useCategoryStyles();
  arr = closure_5();
  const tmp5 = closure_6();
  importDefault = tmp5;
  const items = [tmp5];
  const memo = react.useMemo(() => {
    let intl;
    const obj = { label: intl.string(_modDef3367.F3dWTe), perform, Icon: XSmallIcon.XSmallIcon };
    intl = intl3.intl;
    return obj;
  }, items);
  const tmp8 = useScaledRowHeightDefault();
  dependencyMap = tmp8;
  const items1 = [tmp8];
  react = react.useMemo(() => ({ height }), items1);
  let tmp9 = null;
  if (0 !== arr.length) {
    let obj2 = { style: tmp.container, children: items2 };
    let obj3 = { name: intl.string(_modDef3367.oHWnLy), withMarginTop: false, styles: categoryStyles, trailingAction: memo };
    const renderCategoryItem = arr(16032).renderCategoryItem;
    arr(16032);
    intl = tmp2(1126).intl;
    items2 = [renderCategoryItem(obj3), ];
    const obj4 = {
      style: tmp.rows,
      children: arr.map((item, index) => {
          let Button;
          let intl;
          let obj2;
          let obj3;
          let tmp;
          let closure_0 = item;
          let obj = { style, children: React4(tmp, obj2) };
          obj2 = { result: item, onPressDestination: handleFavoritesGuildAddSuggestedChannelDefault, onLongPress: NOOP, start: 0 === index, end: index === arr.length - 1, trailing: React4(Button, obj3) };
          tmp = SearchableDestinationListRowDefault;
          obj3 = {
            variant: "secondary",
            size: "sm",
            grow: false,
            text: intl.string(intl3.t.OYkgVk),
            onPress() {
              const tmp = perform(height[16]);
              const obj = arr(height[18]);
              return tmp(obj.getDestinationIdFromResult(closure_0));
            }
          };
          Button = components_Button_Button.Button;
          intl = intl3.intl;
          return React4(View, obj, "" + item.type + "-" + item.record.id);
        })
    };
    items2[1] = closure_9(View, obj4);
    tmp9 = closure_10(View, obj2);
  }
  return tmp9;
});
const result = size.fileFinishedImporting("modules/favorites/native/FavoritesGuildSuggestedChannels.tsx");

export default tmp4;
export const getFavoritesSuggestionsNoticeHeight = function getFavoritesSuggestionsNoticeHeight(fontScale, arg1, arg2) {
  let num = 0;
  if (0 !== arg2) {
    num = PX_4 + closure_8(fontScale) + arg2 * arg1 + PX_8;
  }
  return num;
};