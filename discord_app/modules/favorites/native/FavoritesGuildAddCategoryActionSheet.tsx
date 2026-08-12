// discord_app/modules/favorites/native/FavoritesGuildAddCategoryActionSheet.tsx
import _slicedToArray from "_slicedToArray";
import noop from "noop";
import { MAX_FAVORITE_CATEGORY_NAME_LENGTH as closure_5 } from "date";
import jsxProd from "jsxProd";
import createCacheKey from "createCacheKey";
import { ACTION_SHEET_HEIGHT_HALF } from "../../action_sheet/native/ActionSheetActionCreators.tsx";

let closure_6;
let error;
const require = arg1;
function FavoritesGuildAddCategoryActionSheet() {
  const tmp = createCacheKey();
  const tmp2 = callback(React.useState(""), 2);
  const first = tmp2[0];
  let obj = first(1913);
  const result = obj.isFavoritesGuildCategoryNameValid(first);
  const importDefault = result;
  const items = [result, first];
  callback = React.useCallback(() => {
    if (closure_1) {
      first(outer1_2[7]).addFavoriteCategory(first, "modal");
      const obj = first(outer1_2[7]);
      result(outer1_2[8]).hideActionSheet(outer1_8);
      const obj2 = result(outer1_2[8]);
    }
  }, items);
  obj = { contentStyles: tmp.content, bodyStyles: tmp.body, keyboardShouldPersistTaps: "always", header: null, children: null };
  obj = { title: null };
  const intl = first(1236).intl;
  obj[0] = intl.string(first(1236).t["ISN+NM"]);
  obj[3] = callback2(first(5435).BottomSheetTitleHeader, obj);
  const obj1 = { label: null, placeholder: null, value: null, onChange: null, maxLength: null, autoFocus: true, isClearable: true, returnKeyType: "done", onSubmitEditing: null };
  const intl2 = first(1236).intl;
  obj1[0] = intl2.string(first(1236).t.OCAkGP);
  const intl3 = first(1236).intl;
  obj1[1] = intl3.string(first(1236).t.eTVbtx);
  obj1[2] = first;
  obj1[3] = tmp2[1];
  obj1[4] = closure_5;
  obj1[8] = callback;
  const items1 = [callback2(first(7831).TextInput, obj1), ];
  let obj2 = { text: null, onPress: null, disabled: null };
  const intl4 = first(1236).intl;
  obj2[0] = intl4.string(first(1236).t.CumH4u);
  obj2[1] = callback;
  obj2[2] = !result;
  items1[1] = callback2(first(4754).Button, obj2);
  obj[4] = items1;
  return callback3(first(5436).BottomSheet, obj);
}
({ jsx: closure_6, jsxs: error } = jsxProd);
FavoritesGuildAddCategoryActionSheet = "FavoritesGuildAddCategoryActionSheet";
createCacheKey = { content: null, body: null };
createCacheKey = { paddingHorizontal: require("Themes").space.PX_16 };
createCacheKey[0] = createCacheKey;
createCacheKey[1] = { gap: require("Themes").space.PX_16 };
createCacheKey = createCacheKey.createStyles(createCacheKey);
let obj1 = { gap: require("Themes").space.PX_16 };
let result = require("date").fileFinishedImporting("modules/favorites/native/FavoritesGuildAddCategoryActionSheet.tsx");

export const openFavoritesGuildAddCategoryActionSheet = function openFavoritesGuildAddCategoryActionSheet() {
  let obj = ACTION_SHEET_HEIGHT_HALF;
  obj = { content: callback2(FavoritesGuildAddCategoryActionSheet, {}), key: FavoritesGuildAddCategoryActionSheet };
  obj.showActionSheet(obj);
};