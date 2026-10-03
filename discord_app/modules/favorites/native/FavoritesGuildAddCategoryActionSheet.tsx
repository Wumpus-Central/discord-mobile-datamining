// discord_app/modules/favorites/native/FavoritesGuildAddCategoryActionSheet.tsx
import nativeDefault from "../../../../discord_common/js/packages/tokens/native.tsx";
import ActionSheetActionCreators from "../../action_sheet/native/ActionSheetActionCreators.tsx";
import FavoritesActionCreators from "../FavoritesActionCreators.tsx";
import _slicedToArray from "../../../../_runtime/metro/00032__.js";
import noop from "../../../../_runtime/metro/00019__.js";

const ActionSheetActionCreatorsDefault = ActionSheetActionCreators;

require = fn;
const maxLength = fn(2065).MAX_FAVORITE_CATEGORY_NAME_LENGTH;
const jsxProd = fn(21);
({ jsx: metroRequire, jsxs: closure_7 } = jsxProd);
const FavoritesGuildAddCategoryActionSheet = "FavoritesGuildAddCategoryActionSheet";
const createStyles = fn(4890);
let obj2 = { content: { paddingHorizontal: nativeDefault.space.PX_16 }, body: null };
let obj3 = { paddingHorizontal: nativeDefault.space.PX_16 };
obj2.body = { gap: nativeDefault.space.PX_16 };
let closure_9 = createStyles.createStyles(obj2);
const ReactCompilerGating = fn(558);
let closure_10 = ReactCompilerGating.isReactCompilerEnabled()
  ? () => {
      const cResult = value(576).c(20);
      const tmp4 = closure_9();
      const tmp5 = _slicedToArray(noop.useState(""), 2);
      value = tmp5[0];
      if (cResult[0] !== value) {
        const result = tmp(2077).isFavoritesGuildCategoryNameValid(value);
        cResult[0] = value;
        cResult[1] = result;
        let tmp7 = result;
        const tmpResult = tmp(2077);
      } else {
        tmp7 = cResult[1];
      }
      importDefault = tmp7;
      if (cResult[2] === tmp7) {
        if (cResult[3] === value) {
          let tmp9 = cResult[4];
        }
        const _Symbol = Symbol;
        ({ content, body } = tmp4);
        if (cResult[5] === Symbol.for("react.memo_cache_sentinel")) {
          let obj2 = { title: null };
          const intl = tmp(1126).intl;
          obj2.title = intl.string(tmp(1126).t["ISN+NM"]);
          const tmp13 = closure_6(tmp(6644).BottomSheetTitleHeader, obj2);
          cResult[5] = tmp13;
          let tmp11 = tmp13;
        } else {
          tmp11 = cResult[5];
        }
        const _Symbol2 = Symbol;
        if (cResult[6] === Symbol.for("react.memo_cache_sentinel")) {
          const intl2 = tmp(1126).intl;
          const stringResult = intl2.string(tmp(1126).t.OCAkGP);
          const intl3 = tmp(1126).intl;
          const stringResult1 = intl3.string(tmp(1126).t.eTVbtx);
          cResult[6] = stringResult;
          cResult[7] = stringResult1;
          let tmp15 = stringResult1;
          let tmp14 = stringResult;
        } else {
          tmp14 = cResult[6];
          tmp15 = cResult[7];
        }
        if (cResult[8] === tmp9) {
          if (cResult[9] === value) {
            let tmp18 = cResult[10];
          }
          const _Symbol3 = Symbol;
          if (cResult[11] === Symbol.for("react.memo_cache_sentinel")) {
            const intl4 = tmp(1126).intl;
            const stringResult2 = intl4.string(tmp(1126).t.CumH4u);
            cResult[11] = stringResult2;
            let tmp22 = stringResult2;
          } else {
            tmp22 = cResult[11];
          }
          if (cResult[12] === tmp9) {
            if (cResult[13] === tmp24) {
              let tmp25 = cResult[14];
            }
            if (cResult[15] === tmp4.body) {
              if (cResult[16] === tmp4.content) {
                if (cResult[17] === tmp25) {
                  if (cResult[18] === tmp18) {
                    let tmp28 = cResult[19];
                  }
                  return tmp28;
                }
              }
            }
            const obj3 = {
              contentStyles: content,
              bodyStyles: body,
              keyboardShouldPersistTaps: "always",
              header: tmp11,
              children: null,
            };
            const items = [tmp18, tmp25];
            obj3.children = items;
            const tmp30 = closure_7(tmp(6645).BottomSheet, obj3);
            cResult[15] = tmp4.body;
            cResult[16] = tmp4.content;
            cResult[17] = tmp25;
            class C {
              constructor() {
                if (closure_1) {
                  tmp = closure_0;
                  tmp2 = closure_2;
                  obj = closure_0(closure_2[9]);
                  tmp3 = closure_0;
                  addFavoriteCategoryResult = obj.addFavoriteCategory(closure_0);
                  tmp5 = closure_1;
                  obj2 = closure_1(closure_2[10]);
                  tmp6 = FavoritesGuildAddCategoryActionSheet;
                  hideActionSheetResult = obj2.hideActionSheet(FavoritesGuildAddCategoryActionSheet);
                }
                return;
              }
            }
            cResult[19] = tmp30;
            tmp28 = tmp30;
          }
          const obj4 = { text: tmp22, onPress: tmp9, disabled: !tmp7 };
          const tmp27 = closure_6(tmp(5594).Button, obj4);
          cResult[12] = tmp9;
          cResult[13] = !tmp7;
          cResult[14] = tmp27;
          tmp25 = tmp27;
        }
        const obj5 = {
          label: tmp14,
          placeholder: tmp15,
          value,
          onChange: tmp5[1],
          maxLength: null,
          autoFocus: true,
          clearable: true,
          returnKeyType: "done",
          onSubmitEditing: null,
        };
        class C {
          constructor() {
            if (closure_1) {
              tmp = closure_0;
              tmp2 = closure_2;
              obj = closure_0(closure_2[9]);
              tmp3 = closure_0;
              addFavoriteCategoryResult = obj.addFavoriteCategory(closure_0);
              tmp5 = closure_1;
              obj2 = closure_1(closure_2[10]);
              tmp6 = FavoritesGuildAddCategoryActionSheet;
              hideActionSheetResult = obj2.hideActionSheet(FavoritesGuildAddCategoryActionSheet);
            }
            return;
          }
        }
        obj5.onSubmitEditing = tmp9;
        const tmp21 = closure_6(tmp(6098).TextInput, obj5);
        cResult[8] = tmp9;
        cResult[9] = value;
        cResult[10] = tmp21;
        tmp18 = tmp21;
      }
      class C {
        constructor() {
          if (closure_1) {
            tmp = closure_0;
            tmp2 = closure_2;
            obj = closure_0(closure_2[9]);
            tmp3 = closure_0;
            addFavoriteCategoryResult = obj.addFavoriteCategory(closure_0);
            tmp5 = closure_1;
            obj2 = closure_1(closure_2[10]);
            tmp6 = FavoritesGuildAddCategoryActionSheet;
            hideActionSheetResult = obj2.hideActionSheet(FavoritesGuildAddCategoryActionSheet);
          }
          return;
        }
      }
      cResult[2] = tmp7;
      cResult[3] = value;
      cResult[4] = C;
      tmp9 = C;
      let obj = value(576);
    }
  : () => {
      const tmp = closure_9();
      [value, obj4.onChange] = noop.useState("");
      const result = value(2077).isFavoritesGuildCategoryNameValid(value);
      importDefault = result;
      const items = [result, value];
      const callback = noop.useCallback(() => {
        if (result) {
          FavoritesActionCreators.addFavoriteCategory(first);
          ActionSheetActionCreatorsDefault.hideActionSheet(FavoritesGuildAddCategoryActionSheet);
        }
      }, items);
      let obj2 = {
        contentStyles: tmp.content,
        bodyStyles: tmp.body,
        keyboardShouldPersistTaps: "always",
        header: null,
        children: null,
      };
      const obj3 = { title: null };
      const intl = value(1126).intl;
      obj3.title = intl.string(value(1126).t["ISN+NM"]);
      obj2.header = closure_6(value(6644).BottomSheetTitleHeader, obj3);
      const obj4 = {
        label: null,
        placeholder: null,
        value: null,
        onChange: null,
        maxLength: null,
        autoFocus: true,
        clearable: true,
        returnKeyType: "done",
        onSubmitEditing: null,
      };
      const intl2 = value(1126).intl;
      obj4.label = intl2.string(value(1126).t.OCAkGP);
      const intl3 = value(1126).intl;
      obj4.placeholder = intl3.string(value(1126).t.eTVbtx);
      obj4.value = value;
      obj4.maxLength = maxLength;
      obj4.onSubmitEditing = callback;
      const items1 = [closure_6(value(6098).TextInput, obj4)];
      const obj5 = { text: null, onPress: null, disabled: null };
      const intl4 = value(1126).intl;
      obj5.text = intl4.string(value(1126).t.CumH4u);
      obj5.onPress = callback;
      obj5.disabled = !result;
      items1[1] = closure_6(value(5594).Button, obj5);
      obj2.children = items1;
      return closure_7(value(6645).BottomSheet, obj2);
    };
const size = fn(2);
let result = size.fileFinishedImporting("modules/favorites/native/FavoritesGuildAddCategoryActionSheet.tsx");

export const openFavoritesGuildAddCategoryActionSheet = function openFavoritesGuildAddCategoryActionSheet() {
  const obj = ActionSheetActionCreators;
  obj.showActionSheet({ content: timestampProducer(closure_10, {}), key: FavoritesGuildAddCategoryActionSheet });
};
