// discord_app/modules/favorites/native/FavoritesGuildAddCategoryActionSheet.tsx
import nativeDefault from "../../../../discord_common/js/packages/tokens/native.tsx";
import ActionSheetActionCreators from "../../action_sheet/native/ActionSheetActionCreators.tsx";
import FavoritesActionCreators from "../FavoritesActionCreators.tsx";
import _slicedToArray from "../../../../_runtime/metro/00032__.js";
import noop from "../../../../_runtime/metro/00019__.js";

const ActionSheetActionCreatorsDefault = ActionSheetActionCreators;

require = fn;
function FavoritesGuildAddCategoryActionSheet() {
  const tmp = closure_9();
  [value, obj4.onChange] = noop.useState("");
  const result = value(2069).isFavoritesGuildCategoryNameValid(value);
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
  const intl = value(1115).intl;
  obj3.title = intl.string(value(1115).t["ISN+NM"]);
  obj2.header = closure_6(value(6565).BottomSheetTitleHeader, obj3);
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
  const intl2 = value(1115).intl;
  obj4.label = intl2.string(value(1115).t.OCAkGP);
  const intl3 = value(1115).intl;
  obj4.placeholder = intl3.string(value(1115).t.eTVbtx);
  obj4.value = value;
  obj4.maxLength = maxLength;
  obj4.onSubmitEditing = callback;
  const items1 = [closure_6(value(6019).TextInput, obj4)];
  const obj5 = { text: null, onPress: null, disabled: null };
  const intl4 = value(1115).intl;
  obj5.text = intl4.string(value(1115).t.CumH4u);
  obj5.onPress = callback;
  obj5.disabled = !result;
  items1[1] = closure_6(value(5274).Button, obj5);
  obj2.children = items1;
  return closure_7(value(6566).BottomSheet, obj2);
}
const maxLength = fn(2057).MAX_FAVORITE_CATEGORY_NAME_LENGTH;
const jsxProd = fn(21);
({ jsx: metroRequire, jsxs: closure_7 } = jsxProd);
FavoritesGuildAddCategoryActionSheet = "FavoritesGuildAddCategoryActionSheet";
const createStyles = fn(4829);
let obj2 = { content: { paddingHorizontal: nativeDefault.space.PX_16 }, body: null };
let obj3 = { paddingHorizontal: nativeDefault.space.PX_16 };
obj2.body = { gap: nativeDefault.space.PX_16 };
let closure_9 = createStyles.createStyles(obj2);
const size = fn(2);
let result = size.fileFinishedImporting("modules/favorites/native/FavoritesGuildAddCategoryActionSheet.tsx");

export const openFavoritesGuildAddCategoryActionSheet = function openFavoritesGuildAddCategoryActionSheet() {
  const obj = ActionSheetActionCreators;
  obj.showActionSheet({
    content: timestampProducer(FavoritesGuildAddCategoryActionSheet, {}),
    key: FavoritesGuildAddCategoryActionSheet,
  });
};
