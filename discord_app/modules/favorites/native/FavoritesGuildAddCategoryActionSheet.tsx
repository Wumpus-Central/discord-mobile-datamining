// === Module 16410: FavoritesGuildAddCategoryActionSheet ===

// Module 16410 (FavoritesGuildAddCategoryActionSheet)
import nativeDefault from "native" /* 576 */;
import ActionSheetActionCreators from "ActionSheetActionCreators" /* 4689 */;
import FavoritesActionCreators from "FavoritesActionCreators" /* 10464 */;
import _slicedToArray from "module_32" /* 32 */;
import noop from "module_19" /* 19 */;

const ActionSheetActionCreatorsDefault = ActionSheetActionCreators;

require = fn;
function FavoritesGuildAddCategoryActionSheet() {
  const tmp = closure_9();
  [value, obj4.onChange] = noop.useState("");
  const result = value(1983).isFavoritesGuildCategoryNameValid(value);
  importDefault = result;
  const items = [result, value];
  const callback = noop.useCallback(() => {
    if (result) {
      FavoritesActionCreators.addFavoriteCategory(first);
      ActionSheetActionCreatorsDefault.hideActionSheet(FavoritesGuildAddCategoryActionSheet);
    }
  }, items);
  let obj2 = { contentStyles: tmp.content, bodyStyles: tmp.body, keyboardShouldPersistTaps: "always", header: null, children: null };
  const obj3 = { title: null };
  const intl = value(1115).intl;
  obj3.title = intl.string(value(1115).t["ISN+NM"]);
  obj2.header = closure_6(value(7345).BottomSheetTitleHeader, obj3);
  const obj4 = { label: null, placeholder: null, value: null, onChange: null, maxLength: null, autoFocus: true, clearable: true, returnKeyType: "done", onSubmitEditing: null };
  const intl2 = value(1115).intl;
  obj4.label = intl2.string(value(1115).t.OCAkGP);
  const intl3 = value(1115).intl;
  obj4.placeholder = intl3.string(value(1115).t.eTVbtx);
  obj4.value = value;
  obj4.maxLength = maxLength;
  obj4.onSubmitEditing = callback;
  const items1 = [closure_6(value(6799).TextInput, obj4), ];
  const obj5 = { text: null, onPress: null, disabled: null };
  const intl4 = value(1115).intl;
  obj5.text = intl4.string(value(1115).t.CumH4u);
  obj5.onPress = callback;
  obj5.disabled = !result;
  items1[1] = closure_6(value(5144).Button, obj5);
  obj2.children = items1;
  return closure_7(value(7346).BottomSheet, obj2);
}
const maxLength = fn(1971).MAX_FAVORITE_CATEGORY_NAME_LENGTH;
const jsxProd = fn(21);
({ jsx: metroRequire, jsxs: closure_7 } = jsxProd);
FavoritesGuildAddCategoryActionSheet = "FavoritesGuildAddCategoryActionSheet";
const createStyles = fn(4722);
let obj2 = { content: { paddingHorizontal: nativeDefault.space.PX_16 }, body: null };
let obj3 = { paddingHorizontal: nativeDefault.space.PX_16 };
obj2.body = { gap: nativeDefault.space.PX_16 };
let closure_9 = createStyles.createStyles(obj2);
const size = fn(2);
let result = size.fileFinishedImporting("modules/favorites/native/FavoritesGuildAddCategoryActionSheet.tsx");

export const openFavoritesGuildAddCategoryActionSheet = function openFavoritesGuildAddCategoryActionSheet() {
  const obj = ActionSheetActionCreators;
  obj.showActionSheet({ content: timestampProducer(FavoritesGuildAddCategoryActionSheet, {}), key: FavoritesGuildAddCategoryActionSheet });
};