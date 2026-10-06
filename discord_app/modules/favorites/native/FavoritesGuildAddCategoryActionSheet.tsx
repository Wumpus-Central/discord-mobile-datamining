// === Module 16117: FavoritesGuildAddCategoryActionSheet ===

// Module 16117 (FavoritesGuildAddCategoryActionSheet)
import nativeDefault from "native" /* 587 */;
import FavoritesConstants from "FavoritesConstants" /* 2065 */;
import ActionSheetActionCreators from "ActionSheetActionCreators" /* 4860 */;
import FavoritesActionCreators from "FavoritesActionCreators" /* 10048 */;
import _slicedToArray from "_slicedToArray" /* 32 */;
import react from "react" /* 19 */;
import Fragment from "Fragment" /* 21 */;
import createStyles_mod from "createStyles" /* 4896 */;
import ReactCompilerGating from "ReactCompilerGating" /* 558 */;
import size from "module_2" /* 2 */;

const ActionSheetActionCreatorsDefault = ActionSheetActionCreators;
let BottomSheet, addFavoriteCategoryResult, hideActionSheetResult, importDefault, tmp2, tmp3, tmp6;

let metroImportDefault;
let metroRequire;
let obj2;
let obj3;
const maxLength = FavoritesConstants.MAX_FAVORITE_CATEGORY_NAME_LENGTH;
({ jsx: metroRequire, jsxs: metroImportDefault } = Fragment);
const FavoritesGuildAddCategoryActionSheet = "FavoritesGuildAddCategoryActionSheet";
let createStyles = createStyles_mod;
let obj = { content: obj2, body: obj3 };
obj2 = { paddingHorizontal: nativeDefault.space.PX_16 };
createStyles = createStyles.createStyles;
obj3 = { gap: nativeDefault.space.PX_16 };
let closure_9 = createStyles(obj);
let closure_10 = ReactCompilerGating.isReactCompilerEnabled() ? (() => {
  let body;
  let closure_1;
  let content;
  let intl;
  let items;
  let tmp7;
  let tmp8;
  let value;
  let obj = value(576);
  const cResult = obj.c(20);
  const tmp4 = closure_9();
  [value, tmp7] = react.useState("");
  if (cResult[0] !== value) {
    const tmpResult = value(2077);
    const result = tmpResult.isFavoritesGuildCategoryNameValid(value);
    cResult[0] = value;
    cResult[1] = result;
    tmp8 = result;
  } else {
    tmp8 = cResult[1];
  }
  importDefault = tmp8;
  if (cResult[2] === tmp8) {
    let tmp10;
    let tmp12;
    let tmp16;
    let tmp15;
    if (cResult[3] === value) {
      tmp10 = cResult[4];
    }
    const _Symbol = Symbol;
    ({ content, body } = tmp4);
    if (cResult[5] === Symbol.for("react.memo_cache_sentinel")) {
      let obj2 = { title: intl.string(value(1126).t["ISN+NM"]) };
      const BottomSheetTitleHeader = tmp(6651).BottomSheetTitleHeader;
      intl = tmp(1126).intl;
      const tmp14 = closure_6(BottomSheetTitleHeader, obj2);
      cResult[5] = tmp14;
      tmp12 = tmp14;
    } else {
      tmp12 = cResult[5];
    }
    const _Symbol2 = Symbol;
    if (cResult[6] === Symbol.for("react.memo_cache_sentinel")) {
      const intl2 = tmp(1126).intl;
      const stringResult = intl2.string(value(1126).t.OCAkGP);
      const intl3 = tmp(1126).intl;
      const stringResult1 = intl3.string(value(1126).t.eTVbtx);
      cResult[6] = stringResult;
      cResult[7] = stringResult1;
      tmp16 = stringResult1;
      tmp15 = stringResult;
    } else {
      tmp15 = cResult[6];
      tmp16 = cResult[7];
    }
    if (cResult[8] === tmp10) {
      let tmp19;
      let tmp23;
      if (cResult[9] === value) {
        tmp19 = cResult[10];
      }
      const _Symbol3 = Symbol;
      if (cResult[11] === Symbol.for("react.memo_cache_sentinel")) {
        const intl4 = tmp(1126).intl;
        const stringResult2 = intl4.string(value(1126).t.CumH4u);
        cResult[11] = stringResult2;
        tmp23 = stringResult2;
      } else {
        tmp23 = cResult[11];
      }
      if (cResult[12] === tmp10) {
        let tmp26;
        if (cResult[13] === !tmp8) {
          tmp26 = cResult[14];
        }
        if (cResult[15] === tmp4.body) {
          if (cResult[16] === tmp4.content) {
            if (cResult[17] === tmp26) {
              let tmp29;
              if (cResult[18] === tmp19) {
                tmp29 = cResult[19];
              }
              return tmp29;
            }
          }
        }
        const obj3 = { contentStyles: content, bodyStyles: body, keyboardShouldPersistTaps: "always", header: tmp12, children: items };
        items = [tmp19, tmp26];
        const tmp31 = closure_7(value(6652).BottomSheet, obj3);
        cResult[15] = tmp4.body;
        cResult[16] = tmp4.content;
        cResult[17] = tmp26;
        class C {
          constructor() {
            tmp = closure_1;
            if (tmp) {
              tmp2 = closure_0;
              tmp3 = closure_2;
              obj = closure_0(closure_2[9]);
              tmp4 = closure_0;
              addFavoriteCategoryResult = obj.addFavoriteCategory(closure_0);
              tmp6 = closure_1;
              obj2 = closure_1(closure_2[10]);
              tmp7 = FavoritesGuildAddCategoryActionSheet;
              hideActionSheetResult = obj2.hideActionSheet(FavoritesGuildAddCategoryActionSheet);
            }
            return;
          }
        }
        cResult[19] = tmp31;
        tmp29 = tmp31;
      }
      const obj4 = { text: tmp23, onPress: tmp10, disabled: !tmp8 };
      const tmp28 = closure_6(value(5601).Button, obj4);
      cResult[12] = tmp10;
      cResult[13] = !tmp8;
      cResult[14] = tmp28;
      tmp26 = tmp28;
    }
    const obj5 = { label: tmp15, placeholder: tmp16, value, onChange: tmp7, maxLength: null, autoFocus: true, clearable: true, returnKeyType: "done", onSubmitEditing: tmp10 };
    class C {
      constructor() {
        tmp = closure_1;
        if (tmp) {
          tmp2 = closure_0;
          tmp3 = closure_2;
          obj = closure_0(closure_2[9]);
          tmp4 = closure_0;
          addFavoriteCategoryResult = obj.addFavoriteCategory(closure_0);
          tmp6 = closure_1;
          obj2 = closure_1(closure_2[10]);
          tmp7 = FavoritesGuildAddCategoryActionSheet;
          hideActionSheetResult = obj2.hideActionSheet(FavoritesGuildAddCategoryActionSheet);
        }
        return;
      }
    }
    const tmp22 = closure_6(value(6105).TextInput, obj5);
    cResult[8] = tmp10;
    cResult[9] = value;
    cResult[10] = tmp22;
    tmp19 = tmp22;
  }
  class C {
    constructor() {
      tmp = closure_1;
      if (tmp) {
        tmp2 = closure_0;
        tmp3 = closure_2;
        obj = closure_0(closure_2[9]);
        tmp4 = closure_0;
        addFavoriteCategoryResult = obj.addFavoriteCategory(closure_0);
        tmp6 = closure_1;
        obj2 = closure_1(closure_2[10]);
        tmp7 = FavoritesGuildAddCategoryActionSheet;
        hideActionSheetResult = obj2.hideActionSheet(FavoritesGuildAddCategoryActionSheet);
      }
      return;
    }
  }
  cResult[2] = tmp8;
  cResult[3] = value;
  cResult[4] = C;
  tmp10 = C;
}) : (() => {
  let BottomSheetTitleHeader;
  let intl;
  let intl2;
  let intl3;
  let intl4;
  let items1;
  let obj3;
  let tmp4;
  let value;
  const tmp = closure_9();
  [value, tmp4] = react.useState("");
  let obj = value(2077);
  const result = obj.isFavoritesGuildCategoryNameValid(value);
  importDefault = result;
  const items = [result, value];
  const callback = react.useCallback(() => {
    if (importDefault) {
      const obj = FavoritesActionCreators;
      obj.addFavoriteCategory(first);
      const obj2 = ActionSheetActionCreatorsDefault;
      obj2.hideActionSheet(FavoritesGuildAddCategoryActionSheet);
    }
  }, items);
  let obj2 = { contentStyles: tmp.content, bodyStyles: tmp.body, keyboardShouldPersistTaps: "always", header: closure_6(BottomSheetTitleHeader, obj3), children: items1 };
  BottomSheet = value(6652).BottomSheet;
  obj3 = { title: intl.string(value(1126).t["ISN+NM"]) };
  BottomSheetTitleHeader = value(6651).BottomSheetTitleHeader;
  intl = value(1126).intl;
  const obj4 = { label: intl2.string(value(1126).t.OCAkGP), placeholder: intl3.string(value(1126).t.eTVbtx), value, onChange: tmp4, maxLength, autoFocus: true, clearable: true, returnKeyType: "done", onSubmitEditing: callback };
  const TextInput = value(6105).TextInput;
  intl2 = value(1126).intl;
  intl3 = value(1126).intl;
  items1 = [closure_6(TextInput, obj4), ];
  const obj5 = { text: intl4.string(value(1126).t.CumH4u), onPress: callback, disabled: !result };
  const Button = value(5601).Button;
  intl4 = value(1126).intl;
  items1[1] = closure_6(Button, obj5);
  return closure_7(BottomSheet, obj2);
});
let result = size.fileFinishedImporting("modules/favorites/native/FavoritesGuildAddCategoryActionSheet.tsx");

export const openFavoritesGuildAddCategoryActionSheet = function openFavoritesGuildAddCategoryActionSheet() {
  const obj = ActionSheetActionCreators;
  const obj2 = { content: metroRequire(closure_10, {}), key: FavoritesGuildAddCategoryActionSheet };
  obj.showActionSheet(obj2);
};