// discord_app/modules/favorites/native/FavoritesGuildAddCategoryActionSheet.tsx
import ThemesDefault from "../../../../discord_common/js/packages/tokens/native.tsx";
import ACTION_SHEET_HEIGHT_HALF from "../../action_sheet/native/ActionSheetActionCreators.tsx";
import closure_3 from "../../../../_runtime/metro/00032__slicedToArray.js";
import closure_4 from "../../../../_runtime/00019_noop.js";
import { MAX_FAVORITE_CATEGORY_NAME_LENGTH as closure_5 } from "../FavoritesConstants.tsx";
import jsxProd from "../../../../_runtime/react/00021_jsxProd.js";
import createCacheKey from "../../../design/components/Styles/native/createStyles.tsx";

require = arg1;
function FavoritesGuildAddCategoryActionSheet() {
  const tmp = callback4();
  const tmp2 = callback(React.useState(""), 2);
  const first = tmp2[0];
  let obj = first(1913);
  const result = obj.isFavoritesGuildCategoryNameValid(first);
  importDefault = result;
  const items = [result, first];
  callback = React.useCallback(() => {
    if (closure_1) {
      first(closure_1_2[7]).addFavoriteCategory(first);
      const obj = first(closure_1_2[7]);
      result(closure_1_2[8]).hideActionSheet(closure_1_8);
      const obj2 = result(closure_1_2[8]);
    }
  }, items);
  obj = { contentStyles: tmp.content, bodyStyles: tmp.body, keyboardShouldPersistTaps: "always", header: null, children: null };
  obj = { title: null };
  const intl = first(1236).intl;
  obj[0] = intl.string(first(1236).t["ISN+NM"]);
  obj[3] = callback2(first(5586).BottomSheetTitleHeader, obj);
  obj1 = { label: null, placeholder: null, value: null, onChange: null, maxLength: null, autoFocus: true, isClearable: true, returnKeyType: "done", onSubmitEditing: null };
  const intl2 = first(1236).intl;
  obj1[0] = intl2.string(first(1236).t.OCAkGP);
  const intl3 = first(1236).intl;
  obj1[1] = intl3.string(first(1236).t.eTVbtx);
  obj1[2] = first;
  obj1[3] = tmp2[1];
  obj1[4] = closure_5;
  obj1[8] = callback;
  const items1 = [callback2(first(7652).TextInput, obj1), ];
  let obj2 = { text: null, onPress: null, disabled: null };
  const intl4 = first(1236).intl;
  obj2[0] = intl4.string(first(1236).t.CumH4u);
  obj2[1] = callback;
  obj2[2] = !result;
  items1[1] = callback2(first(4893).Button, obj2);
  obj[4] = items1;
  return callback3(first(5587).BottomSheet, obj);
}
({ jsx: closure_6, jsxs: error } = jsxProd);
FavoritesGuildAddCategoryActionSheet = "FavoritesGuildAddCategoryActionSheet";
createCacheKey = { content: null, body: null };
createCacheKey = { paddingHorizontal: ThemesDefault.space.PX_16 };
createCacheKey[0] = createCacheKey;
createCacheKey[1] = { gap: ThemesDefault.space.PX_16 };
let closure_9 = createCacheKey.createStyles(createCacheKey);
let obj1 = { gap: ThemesDefault.space.PX_16 };
let result = require("set").fileFinishedImporting("modules/favorites/native/FavoritesGuildAddCategoryActionSheet.tsx");

export const openFavoritesGuildAddCategoryActionSheet = function openFavoritesGuildAddCategoryActionSheet() {
  let obj = ACTION_SHEET_HEIGHT_HALF;
  obj = { content: callback2(FavoritesGuildAddCategoryActionSheet, {}), key: FavoritesGuildAddCategoryActionSheet };
  obj.showActionSheet(obj);
};