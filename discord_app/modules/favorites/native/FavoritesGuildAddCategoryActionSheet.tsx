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
  const tmp2 = _slicedToArray(noop.useState(""), 2);
  value = tmp2[0];
  let obj = value(1982);
  const result = obj.isFavoritesGuildCategoryNameValid(value);
  importDefault = result;
  const items = [result, value];
  const callback = noop.useCallback(() => {
    if (result) {
      FavoritesActionCreators.addFavoriteCategory(first);
      ActionSheetActionCreatorsDefault.hideActionSheet(FavoritesGuildAddCategoryActionSheet);
    }
  }, items);
  obj = {
    contentStyles: tmp.content,
    bodyStyles: tmp.body,
    keyboardShouldPersistTaps: "always",
    header: null,
    children: null,
  };
  obj = { title: null };
  const intl = value(1114).intl;
  obj.title = intl.string(value(1114).t["ISN+NM"]);
  obj.header = closure_6(value(7149).BottomSheetTitleHeader, obj);
  const obj1 = {
    label: null,
    placeholder: null,
    value: null,
    onChange: null,
    maxLength: null,
    autoFocus: true,
    isClearable: true,
    returnKeyType: "done",
    onSubmitEditing: null,
  };
  const intl2 = value(1114).intl;
  obj1.label = intl2.string(value(1114).t.OCAkGP);
  const intl3 = value(1114).intl;
  obj1.placeholder = intl3.string(value(1114).t.eTVbtx);
  obj1.value = value;
  obj1.onChange = tmp2[1];
  obj1.maxLength = maxLength;
  obj1.onSubmitEditing = callback;
  const items1 = [closure_6(value(6606).TextInput, obj1)];
  let obj2 = { text: null, onPress: null, disabled: null };
  const intl4 = value(1114).intl;
  obj2.text = intl4.string(value(1114).t.CumH4u);
  obj2.onPress = callback;
  obj2.disabled = !result;
  items1[1] = closure_6(value(4975).Button, obj2);
  obj.children = items1;
  return closure_7(value(7150).BottomSheet, obj);
}
const maxLength = fn(1970).MAX_FAVORITE_CATEGORY_NAME_LENGTH;
const jsxProd = fn(21);
({ jsx: metroRequire, jsxs: closure_7 } = jsxProd);
FavoritesGuildAddCategoryActionSheet = "FavoritesGuildAddCategoryActionSheet";
fn(4560);
let createStyles = { content: null, body: null };
createStyles = { paddingHorizontal: nativeDefault.space.PX_16 };
createStyles.content = createStyles;
createStyles.body = { gap: nativeDefault.space.PX_16 };
let closure_9 = createStyles.createStyles(createStyles);
const size = fn(2);
let result = size.fileFinishedImporting("modules/favorites/native/FavoritesGuildAddCategoryActionSheet.tsx");

export const openFavoritesGuildAddCategoryActionSheet = function openFavoritesGuildAddCategoryActionSheet() {
  const obj = {
    content: timestampProducer(FavoritesGuildAddCategoryActionSheet, {}),
    key: FavoritesGuildAddCategoryActionSheet,
  };
  obj.showActionSheet(obj);
};
