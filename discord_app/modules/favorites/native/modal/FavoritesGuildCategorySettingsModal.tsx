// discord_app/modules/favorites/native/modal/FavoritesGuildCategorySettingsModal.tsx
import nativeDefault from "../../../../../discord_common/js/packages/tokens/native.tsx";
import util from "../../../../intl/index.native.tsx";
import native from "../../../../design/void/native.tsx";
import AlertActionCreatorsDefault from "../../../../actions/AlertActionCreators.tsx";
import FavoritesActionCreators from "../../FavoritesActionCreators.tsx";
import _slicedToArray from "../../../../../_runtime/metro/00032__.js";
import noop from "../../../../../_runtime/metro/00019__.js";
import FavoriteStore from "../../FavoriteStore.tsx";

require = fn;
function FavoritesGuildCategorySettings(categoryId) {
  categoryId = categoryId.categoryId;
  const onGoBack = categoryId.onGoBack;
  let navigation;
  let trimmed;
  let callback1;
  const tmp = callback1();
  navigation = categoryId(navigation[8]).useNavigation();
  let obj = categoryId(navigation[8]);
  const items = [trimmed];
  const stateFromStores = categoryId(navigation[9]).useStateFromStores(items, () => {
    let str = FavoriteStore.getNickname(categoryId);
    if (str == null) {
      str = "";
    }
    return str;
  });
  let obj2 = categoryId(navigation[9]);
  const items1 = [trimmed];
  const stateFromStores1 = categoryId(navigation[9]).useStateFromStores(
    items1,
    () => null != FavoriteStore.getCategoryRecord(categoryId),
  );
  const obj3 = categoryId(navigation[9]);
  [str, tmp8] = stateFromStores(stateFromStores1.useState(stateFromStores), 2);
  c5 = tmp8;
  const items2 = [stateFromStores];
  const effect = stateFromStores1.useEffect(() => {
    _undefined(stateFromStores);
  }, items2);
  trimmed = str.trim();
  const tmp7 = stateFromStores(stateFromStores1.useState(stateFromStores), 2);
  const tmp11 = categoryId(navigation[10]).isFavoritesGuildCategoryNameValid(str) && trimmed !== stateFromStores;
  maxLength = tmp11;
  const ref = obj4.useRef(false);
  const items3 = [onGoBack];
  const callback = obj4.useCallback(() => {
    if (!ref.current) {
      tmp.current = true;
      onGoBack();
    }
  }, items3);
  const items4 = [tmp11, categoryId, callback, trimmed];
  callback1 = obj4.useCallback(() => {
    if (closure_7) {
      const result = FavoritesActionCreators.setFavoriteChannelNickname(categoryId, trimmed);
      callback();
    }
  }, items4);
  const items5 = [callback, stateFromStores1];
  const effect1 = obj4.useEffect(() => {
    if (!stateFromStores1) {
      callback();
    }
  }, items5);
  const items6 = [tmp11, callback1, navigation];
  const effect2 = obj4.useEffect(() => {
    navigation.setOptions({
      headerRight(arg0) {
        const obj = {};
        const merged = Object.assign(arg0);
        const intl = categoryId(navigation[13]).intl;
        obj.label = intl.string(categoryId(navigation[13]).t["R3BPH+"]);
        obj.onPress = onPress;
        obj.disabled = !closure_1_7;
        return closure_8(categoryId(navigation[12]).HeaderTextButton, obj);
      },
    });
  }, items6);
  const items7 = [categoryId, callback, stateFromStores];
  const obj6 = {
    style: tmp.container,
    contentContainerStyle: tmp.content,
    keyboardShouldPersistTaps: "handled",
    children: null,
  };
  const callback2 = obj4.useCallback(() => {
    const obj2 = { title: null, body: null, confirmText: null, confirmColor: null, cancelText: null, onConfirm: null };
    const intl = util.intl;
    obj2.title = intl.string(util.t["4VpUw8"]);
    const intl2 = util.intl;
    obj2.body = intl2.format(util.t.GuhMa5, { channelName: stateFromStores });
    const intl3 = util.intl;
    obj2.confirmText = intl3.string(util.t.xOscRh);
    obj2.confirmColor = native.ButtonColors.RED;
    const intl4 = util.intl;
    obj2.cancelText = intl4.string(util.t["ETE/oC"]);
    obj2.onConfirm = function onConfirm() {
      const result = categoryId(navigation[11]).removeFavoriteCategory(closure_1_0);
      callback();
    };
    AlertActionCreatorsDefault.show(obj2);
  }, items7);
  const obj7 = { spacing: onGoBack(navigation[7]).space.PX_24, children: null };
  const obj8 = { label: null, placeholder: null, value: null, onChange: null, maxLength: null, clearable: true };
  let intl = tmp2(tmp3[13]).intl;
  obj8.label = intl.string(categoryId(navigation[13]).t.OCAkGP);
  let intl2 = tmp2(tmp3[13]).intl;
  obj8.placeholder = intl2.string(categoryId(navigation[13]).t.eTVbtx);
  obj8.value = str;
  obj8.onChange = tmp8;
  obj8.maxLength = maxLength;
  const items8 = [ref(categoryId(navigation[17]).TextInput, obj8)];
  const obj9 = { hasIcons: true, children: null };
  const obj10 = {
    variant: "danger",
    icon: ref(categoryId(navigation[20]).TrashIcon, { color: "text-feedback-critical" }),
    label: null,
    onPress: null,
  };
  let intl3 = tmp2(tmp3[13]).intl;
  obj10.label = intl3.string(categoryId(navigation[13]).t.ifbXnL);
  obj10.onPress = callback2;
  obj9.children = ref(categoryId(navigation[19]).TableRow, obj10);
  items8[1] = ref(categoryId(navigation[18]).TableRowGroup, obj9);
  obj7.children = items8;
  obj6.children = callback(categoryId(navigation[16]).Stack, obj7);
  return ref(c5, obj6);
}
const ScrollView = fn(17).ScrollView;
let maxLength = fn(2055).MAX_FAVORITE_CATEGORY_NAME_LENGTH;
const jsxProd = fn(21);
({ jsx: closure_8, jsxs: closure_9 } = jsxProd);
const createStyles = fn(4757);
let obj2 = { container: { flex: 1, backgroundColor: nativeDefault.colors.BACKGROUND_BASE_LOW }, content: null };
let obj3 = { flex: 1, backgroundColor: nativeDefault.colors.BACKGROUND_BASE_LOW };
obj2.content = { padding: nativeDefault.space.PX_16 };
let closure_10 = createStyles.createStyles(obj2);
const size = fn(2);
let result = size.fileFinishedImporting("modules/favorites/native/modal/FavoritesGuildCategorySettingsModal.tsx");

export default function FavoritesGuildCategorySettingsModal(categoryId) {
  categoryId = categoryId.categoryId;
  let onGoBack;
  onGoBack = onGoBack(11192)().onGoBack;
  const obj = { screenKey: "favoritesGuildCategorySettings", title: null, render: null };
  const intl = categoryId(1115).intl;
  obj.title = intl.string(categoryId(1115).t["/uELTj"]);
  obj.render = function render() {
    return React6(FavoritesGuildCategorySettings, { categoryId, onGoBack });
  };
  return closure_8(onGoBack(11194), obj);
}
