// === Module 16112: FavoritesGuildCategorySettingsModal ===

// Module 16112 (FavoritesGuildCategorySettingsModal)
import nativeDefault from "native" /* 576 */;
import util from "util" /* 1114 */;
import native from "native" /* 1178 */;
import AlertActionCreatorsDefault from "AlertActionCreators" /* 4904 */;
import FavoritesActionCreators from "FavoritesActionCreators" /* 10223 */;
import _slicedToArray from "module_32" /* 32 */;
import noop from "module_19" /* 19 */;
import FavoriteStore from "FavoriteStore" /* 1960 */;

require = fn;
function FavoritesGuildCategorySettings(categoryId) {
  categoryId = categoryId.categoryId;
  const onGoBack = categoryId.onGoBack;
  let navigation;
  let trimmed;
  let callback1;
  const tmp = callback1();
  let obj = categoryId(navigation[8]);
  navigation = obj.useNavigation();
  let obj1 = categoryId(navigation[9]);
  const items = [trimmed];
  const stateFromStores = obj1.useStateFromStores(items, () => {
    let str = FavoriteStore.getNickname(categoryId);
    if (str == null) {
      str = "";
    }
    return str;
  });
  let obj2 = categoryId(navigation[9]);
  const items1 = [trimmed];
  const stateFromStores1 = obj2.useStateFromStores(items1, () => null != FavoriteStore.getCategoryRecord(categoryId));
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
  maxLength = tmp11;
  const ref = obj3.useRef(false);
  const items3 = [onGoBack];
  const callback = obj3.useCallback(() => {
    if (!ref.current) {
      tmp.current = true;
      onGoBack();
    }
  }, items3);
  const items4 = [tmp11, categoryId, callback, trimmed];
  callback1 = obj3.useCallback(() => {
    if (closure_7) {
      const result = FavoritesActionCreators.setFavoriteChannelNickname(categoryId, trimmed);
      callback();
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
        const intl = categoryId(navigation[13]).intl;
        obj.label = intl.string(categoryId(navigation[13]).t["R3BPH+"]);
        obj.onPress = onPress;
        obj.disabled = !closure_1_7;
        return closure_8(categoryId(navigation[12]).HeaderTextButton, obj);
      }
    });
  }, items6);
  const items7 = [categoryId, callback, stateFromStores];
  obj = { style: tmp.container, contentContainerStyle: tmp.content, keyboardShouldPersistTaps: "handled", children: null };
  const callback2 = obj3.useCallback(() => {
    let obj = { title: null, body: null, confirmText: null, confirmColor: null, cancelText: null, onConfirm: null };
    const intl = util.intl;
    obj.title = intl.string(util.t["4VpUw8"]);
    const intl2 = util.intl;
    obj = { channelName: stateFromStores };
    obj.body = intl2.format(util.t.GuhMa5, obj);
    const intl3 = util.intl;
    obj.confirmText = intl3.string(util.t.xOscRh);
    obj.confirmColor = native.ButtonColors.RED;
    const intl4 = util.intl;
    obj.cancelText = intl4.string(util.t["ETE/oC"]);
    obj.onConfirm = function onConfirm() {
      const result = categoryId(navigation[11]).removeFavoriteCategory(closure_1_0);
      callback();
    };
    obj.show(obj);
  }, items7);
  obj = { spacing: onGoBack(tmp3[7]).space.PX_24, children: null };
  obj1 = { label: null, placeholder: null, value: null, onChange: null, maxLength: null, isClearable: true };
  let intl = tmp2(tmp3[13]).intl;
  obj1.label = intl.string(categoryId(navigation[13]).t.OCAkGP);
  let intl2 = tmp2(tmp3[13]).intl;
  obj1.placeholder = intl2.string(categoryId(navigation[13]).t.eTVbtx);
  obj1.value = str;
  obj1.onChange = tmp8;
  obj1.maxLength = maxLength;
  const items8 = [ref(categoryId(navigation[17]).TextInput, obj1), ];
  obj2 = { hasIcons: true, children: null };
  obj3 = { variant: "danger", icon: ref(tmp2(tmp3[20]).TrashIcon, { color: "text-feedback-critical" }), label: null, onPress: null };
  let intl3 = tmp2(tmp3[13]).intl;
  obj3.label = intl3.string(categoryId(navigation[13]).t.ifbXnL);
  obj3.onPress = callback2;
  obj2.children = ref(categoryId(navigation[19]).TableRow, obj3);
  items8[1] = ref(categoryId(navigation[18]).TableRowGroup, obj2);
  obj.children = items8;
  obj.children = callback(categoryId(navigation[16]).Stack, obj);
  return ref(c5, obj);
}
const ScrollView = fn(17).ScrollView;
let maxLength = fn(1970).MAX_FAVORITE_CATEGORY_NAME_LENGTH;
const jsxProd = fn(21);
({ jsx: closure_8, jsxs: closure_9 } = jsxProd);
fn(4560);
let createStyles = { container: null, content: null };
createStyles = { flex: 1, backgroundColor: nativeDefault.colors.BACKGROUND_BASE_LOW };
createStyles.container = createStyles;
createStyles.content = { padding: nativeDefault.space.PX_16 };
let closure_10 = createStyles.createStyles(createStyles);
const size = fn(2);
let result = size.fileFinishedImporting("modules/favorites/native/modal/FavoritesGuildCategorySettingsModal.tsx");

export default function FavoritesGuildCategorySettingsModal(categoryId) {
  categoryId = categoryId.categoryId;
  let onGoBack;
  onGoBack = onGoBack(10922)().onGoBack;
  const obj = { screenKey: "favoritesGuildCategorySettings", title: null, render: null };
  const intl = categoryId(1114).intl;
  obj.title = intl.string(categoryId(1114).t["/uELTj"]);
  obj.render = function render() {
    return React6(FavoritesGuildCategorySettings, { categoryId, onGoBack });
  };
  return closure_8(onGoBack(10924), obj);
};