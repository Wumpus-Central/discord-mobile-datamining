// discord_app/modules/favorites/native/modal/FavoritesGuildCategorySettingsModal.tsx
import ThemesDefault from "../../../../../discord_common/js/packages/tokens/native.tsx";
import closure_3 from "../../../../../_runtime/metro/00032__slicedToArray.js";
import closure_4 from "../../../../../_runtime/00019_noop.js";
import { ScrollView } from "../../../../../_runtime/00017_get_ActivityIndicator.js";
import closure_6 from "../../FavoriteStore.tsx";
import { MAX_FAVORITE_CATEGORY_NAME_LENGTH as closure_7 } from "../../FavoritesConstants.tsx";
import jsxProd from "../../../../../_runtime/react/00021_jsxProd.js";
import createCacheKey from "../../../../design/components/Styles/native/createStyles.tsx";

const require = arg1;
function FavoritesGuildCategorySettings(categoryId) {
  categoryId = categoryId.categoryId;
  const onGoBack = categoryId.onGoBack;
  let navigation;
  let stateFromStores;
  let stateFromStores1;
  c5 = undefined;
  let trimmed;
  closure_7 = undefined;
  let callback;
  callback = undefined;
  let callback1;
  const tmp = callback1();
  let obj = categoryId(navigation[8]);
  navigation = obj.useNavigation();
  obj1 = categoryId(navigation[9]);
  const items = [trimmed];
  stateFromStores = obj1.useStateFromStores(items, () => {
    let str = trimmed.getNickname(categoryId);
    if (str == null) {
      str = "";
    }
    return str;
  });
  let obj2 = categoryId(navigation[9]);
  const items1 = [trimmed];
  stateFromStores1 = obj2.useStateFromStores(items1, () => null != trimmed.getCategoryRecord(categoryId));
  let obj3 = stateFromStores1;
  [str, tmp8] = stateFromStores(stateFromStores1.useState(stateFromStores), 2);
  c5 = tmp8;
  const items2 = [stateFromStores];
  const effect = stateFromStores1.useEffect(() => {
    _undefined(stateFromStores);
  }, items2);
  trimmed = str.trim();
  const tmp7 = stateFromStores(stateFromStores1.useState(stateFromStores), 2);
  const tmp11 = categoryId(navigation[10]).isFavoritesGuildCategoryNameValid(str) && trimmed !== stateFromStores;
  closure_7 = tmp11;
  callback = obj3.useRef(false);
  const items3 = [onGoBack];
  callback = obj3.useCallback(() => {
    if (!ref.current) {
      tmp.current = true;
      onGoBack();
    }
  }, items3);
  const items4 = [tmp11, categoryId, callback, trimmed];
  callback1 = obj3.useCallback(() => {
    if (closure_7) {
      const result = categoryId(navigation[11]).setFavoriteChannelNickname(categoryId, trimmed);
      callback();
      const obj = categoryId(navigation[11]);
    }
  }, items4);
  const items5 = [callback, stateFromStores1];
  const effect1 = obj3.useEffect(() => {
    if (!stateFromStores1) {
      callback();
    }
  }, items5);
  const items6 = [tmp11, callback1, navigation];
  const effect2 = obj3.useEffect(() => {
    navigation.setOptions({
      headerRight(arg0) {
        const obj = {};
        const merged = Object.assign(arg0);
        const intl = closure_1_0(closure_1_2[13]).intl;
        obj.label = intl.string(closure_1_0(closure_1_2[13]).t["R3BPH+"]);
        obj.onPress = closure_10;
        obj.disabled = !closure_7;
        return closure_1_8(closure_1_0(closure_1_2[12]).HeaderTextButton, obj);
      }
    });
  }, items6);
  const items7 = [categoryId, callback, stateFromStores];
  obj = { style: tmp.container, contentContainerStyle: tmp.content, keyboardShouldPersistTaps: "handled", children: null };
  const callback2 = obj3.useCallback(() => {
    let obj = onGoBack(navigation[14]);
    obj = { title: null, body: null, confirmText: null, confirmColor: null, cancelText: null, onConfirm: null };
    const intl = categoryId(navigation[13]).intl;
    obj[0] = intl.string(categoryId(navigation[13]).t["4VpUw8"]);
    const intl2 = categoryId(navigation[13]).intl;
    obj = { channelName: stateFromStores };
    obj[1] = intl2.format(categoryId(navigation[13]).t.GuhMa5, obj);
    const intl3 = categoryId(navigation[13]).intl;
    obj[2] = intl3.string(categoryId(navigation[13]).t.xOscRh);
    obj[3] = categoryId(navigation[15]).ButtonColors.RED;
    const intl4 = categoryId(navigation[13]).intl;
    obj[4] = intl4.string(categoryId(navigation[13]).t["ETE/oC"]);
    obj[5] = function onConfirm() {
      const result = closure_1_0(closure_1_2[11]).removeFavoriteCategory(closure_0);
      callback();
    };
    obj.show(obj);
  }, items7);
  obj = { spacing: onGoBack(tmp3[7]).space.PX_24, children: null };
  obj1 = { label: null, accessibilityLabel: null, placeholder: null, value: null, onChange: null, maxLength: null, isClearable: true };
  let intl = tmp2(tmp3[13]).intl;
  obj1[0] = intl.string(categoryId(navigation[13]).t.OCAkGP);
  let intl2 = tmp2(tmp3[13]).intl;
  obj1[1] = intl2.string(categoryId(navigation[13]).t.OCAkGP);
  let intl3 = tmp2(tmp3[13]).intl;
  obj1[2] = intl3.string(categoryId(navigation[13]).t.eTVbtx);
  obj1[3] = str;
  obj1[4] = tmp8;
  obj1[5] = closure_7;
  const items8 = [callback(categoryId(navigation[17]).TextInput, obj1), ];
  obj2 = { hasIcons: true, children: null };
  obj3 = { variant: "danger", icon: callback(tmp2(tmp3[20]).TrashIcon, { color: "text-feedback-critical" }), label: null, onPress: null };
  let intl4 = tmp2(tmp3[13]).intl;
  obj3[2] = intl4.string(categoryId(navigation[13]).t.ifbXnL);
  obj3[3] = callback2;
  obj2[1] = callback(categoryId(navigation[19]).TableRow, obj3);
  items8[1] = callback(categoryId(navigation[18]).TableRowGroup, obj2);
  obj[1] = items8;
  obj[3] = callback(categoryId(navigation[16]).Stack, obj);
  return callback(c5, obj);
}
({ jsx: closure_8, jsxs: c9 } = jsxProd);
createCacheKey = { container: null, content: null };
createCacheKey = { flex: 1, backgroundColor: ThemesDefault.colors.BACKGROUND_BASE_LOW };
createCacheKey[0] = createCacheKey;
createCacheKey[1] = { padding: ThemesDefault.space.PX_16 };
let closure_10 = createCacheKey.createStyles(createCacheKey);
let obj1 = { padding: ThemesDefault.space.PX_16 };
let result = require("set").fileFinishedImporting("modules/favorites/native/modal/FavoritesGuildCategorySettingsModal.tsx");

export default function FavoritesGuildCategorySettingsModal(categoryId) {
  categoryId = categoryId.categoryId;
  let onGoBack;
  onGoBack = onGoBack(10622)().onGoBack;
  const obj = { screenKey: "favoritesGuildCategorySettings", title: null, render: null };
  const intl = categoryId(1236).intl;
  obj[1] = intl.string(categoryId(1236).t["/uELTj"]);
  obj[2] = function render() {
    return closure_1_8(closure_1_11, { categoryId, onGoBack });
  };
  return callback(onGoBack(10623), obj);
};