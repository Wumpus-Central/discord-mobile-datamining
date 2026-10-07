// === Module 16077: FavoritesGuildCategorySettingsModal ===

// Module 16077 (FavoritesGuildCategorySettingsModal)
import nativeDefault from "native" /* 587 */;
import util from "util" /* 1126 */;
import native from "native" /* 1188 */;
import AlertActionCreatorsDefault from "AlertActionCreators" /* 5714 */;
import FavoritesActionCreators from "FavoritesActionCreators" /* 10048 */;
import _slicedToArray from "module_32" /* 32 */;
import noop from "module_19" /* 19 */;
import FavoriteStore from "FavoriteStore" /* 2054 */;

require = fn;
let ScrollView = fn(17).ScrollView;
let maxLength = fn(2065).MAX_FAVORITE_CATEGORY_NAME_LENGTH;
const jsxProd = fn(21);
({ jsx: closure_8, jsxs: closure_9 } = jsxProd);
const createStyles = fn(4896);
let obj2 = { container: { flex: 1, backgroundColor: nativeDefault.colors.BACKGROUND_BASE_LOW }, content: null };
let obj3 = { flex: 1, backgroundColor: nativeDefault.colors.BACKGROUND_BASE_LOW };
obj2.content = { padding: nativeDefault.space.PX_16 };
let closure_10 = createStyles.createStyles(obj2);
let ReactCompilerGating = fn(558);
let closure_11 = ReactCompilerGating.isReactCompilerEnabled() ? ((categoryId) => {
  const cResult = categoryId(navigation[9]).c(50);
  categoryId = categoryId.categoryId;
  const onGoBack = categoryId.onGoBack;
  closure_10();
  let obj = categoryId(navigation[9]);
  navigation = categoryId(navigation[10]).useNavigation();
  if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
    const items = [FavoriteStore];
    cResult[0] = items;
    let first = items;
  } else {
    first = cResult[0];
  }
  if (cResult[1] !== categoryId) {
    const fn = function v() {
      let str = FavoriteStore.getNickname(categoryId);
      if (str == null) {
        str = "";
      }
      return str;
    };
    cResult[1] = categoryId;
    cResult[2] = fn;
    let tmp8 = fn;
  } else {
    tmp8 = cResult[2];
  }
  let obj2 = categoryId(navigation[10]);
  const stateFromStores = categoryId(navigation[11]).useStateFromStores(first, tmp8);
  if (cResult[3] === Symbol.for("react.memo_cache_sentinel")) {
    const items1 = [FavoriteStore];
    cResult[3] = items1;
    let tmp10 = items1;
  } else {
    tmp10 = cResult[3];
  }
  if (cResult[4] !== categoryId) {
    const fn2 = function p() {
      return null != FavoriteStore.getCategoryRecord(categoryId);
    };
    cResult[4] = categoryId;
    cResult[5] = fn2;
    let tmp12 = fn2;
  } else {
    tmp12 = cResult[5];
  }
  const tmpResult = categoryId(navigation[11]);
  const stateFromStores1 = categoryId(navigation[11]).useStateFromStores(tmp10, tmp12);
  const obj5 = stateFromStores1;
  const tmpResult3 = categoryId(navigation[11]);
  [tmp15, tmp16] = stateFromStores(stateFromStores1.useState(stateFromStores), 2);
  ScrollView = tmp16;
  if (cResult[6] !== stateFromStores) {
    class R {
      constructor() {
        tmp = closure_5(closure_3);
        return;
      }
    }
    const items2 = [stateFromStores];
    cResult[6] = stateFromStores;
    cResult[7] = R;
    cResult[8] = items2;
    let tmp18 = items2;
  } else {
    class R {
      constructor() {
        tmp = closure_5(closure_3);
        return;
      }
    }
    tmp18 = cResult[8];
  }
  const effect = obj5.useEffect(R, tmp18);
  if (cResult[9] !== tmp15) {
    class R {
      constructor() {
        tmp = closure_5(closure_3);
        return;
      }
    }
    cResult[9] = tmp15;
    cResult[10] = tmp21;
  } else {
    class R {
      constructor() {
        tmp = closure_5(closure_3);
        return;
      }
    }
  }
  FavoriteStore = tmp21;
  if (cResult[11] === tmp15) {
    class R {
      constructor() {
        tmp = closure_5(closure_3);
        return;
      }
    }
  }
  const tmp14 = stateFromStores(stateFromStores1.useState(stateFromStores), 2);
  const tmpResult4 = categoryId(navigation[12]);
  cResult[11] = tmp15;
  cResult[12] = stateFromStores;
  cResult[13] = tmp21;
  cResult[14] = categoryId(navigation[12]).isFavoritesGuildCategoryNameValid(tmp15) && tmp21 !== stateFromStores;
  const tmp22 = categoryId(navigation[12]).isFavoritesGuildCategoryNameValid(tmp15) && tmp21 !== stateFromStores;
}) : ((categoryId) => {
  categoryId = categoryId.categoryId;
  const onGoBack = categoryId.onGoBack;
  let navigation;
  let trimmed;
  let callback1;
  const tmp = callback1();
  navigation = categoryId(navigation[10]).useNavigation();
  let obj = categoryId(navigation[10]);
  const items = [trimmed];
  const stateFromStores = categoryId(navigation[11]).useStateFromStores(items, () => {
    let str = FavoriteStore.getNickname(categoryId);
    if (str == null) {
      str = "";
    }
    return str;
  });
  let obj2 = categoryId(navigation[11]);
  const items1 = [trimmed];
  const stateFromStores1 = categoryId(navigation[11]).useStateFromStores(items1, () => null != FavoriteStore.getCategoryRecord(categoryId));
  const obj3 = categoryId(navigation[11]);
  [str, tmp8] = stateFromStores(stateFromStores1.useState(stateFromStores), 2);
  c5 = tmp8;
  const items2 = [stateFromStores];
  const effect = stateFromStores1.useEffect(() => {
    _undefined(stateFromStores);
  }, items2);
  trimmed = str.trim();
  const tmp7 = stateFromStores(stateFromStores1.useState(stateFromStores), 2);
  const tmp11 = categoryId(navigation[12]).isFavoritesGuildCategoryNameValid(str) && trimmed !== stateFromStores;
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
        const intl = categoryId(navigation[15]).intl;
        obj.label = intl.string(categoryId(navigation[15]).t["R3BPH+"]);
        obj.onPress = onPress;
        obj.disabled = !closure_1_7;
        return closure_8(categoryId(navigation[14]).HeaderTextButton, obj);
      }
    });
  }, items6);
  const items7 = [categoryId, callback, stateFromStores];
  const obj6 = { style: tmp.container, contentContainerStyle: tmp.content, keyboardShouldPersistTaps: "handled", children: null };
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
      const result = categoryId(navigation[13]).removeFavoriteCategory(closure_1_0);
      callback();
    };
    AlertActionCreatorsDefault.show(obj2);
  }, items7);
  const obj7 = { spacing: onGoBack(navigation[7]).space.PX_24, children: null };
  const obj8 = { label: null, placeholder: null, value: null, onChange: null, maxLength: null, clearable: true };
  let intl = tmp2(tmp3[15]).intl;
  obj8.label = intl.string(categoryId(navigation[15]).t.OCAkGP);
  let intl2 = tmp2(tmp3[15]).intl;
  obj8.placeholder = intl2.string(categoryId(navigation[15]).t.eTVbtx);
  obj8.value = str;
  obj8.onChange = tmp8;
  obj8.maxLength = maxLength;
  const items8 = [ref(categoryId(navigation[18]).TextInput, obj8), ];
  const obj9 = { hasIcons: true, children: null };
  const obj10 = { variant: "danger", icon: ref(categoryId(navigation[19]).TrashIcon, { color: "text-feedback-critical" }), label: null, onPress: null };
  let intl3 = tmp2(tmp3[15]).intl;
  obj10.label = intl3.string(categoryId(navigation[15]).t.ifbXnL);
  obj10.onPress = callback2;
  obj9.children = ref(categoryId(navigation[21]).TableRow, obj10);
  items8[1] = ref(categoryId(navigation[20]).TableRowGroup, obj9);
  obj7.children = items8;
  obj6.children = callback(categoryId(navigation[22]).Stack, obj7);
  return ref(c5, obj6);
});
ReactCompilerGating = fn(558);
const obj4 = { padding: nativeDefault.space.PX_16 };
const size = fn(2);
let result = size.fileFinishedImporting("modules/favorites/native/modal/FavoritesGuildCategorySettingsModal.tsx");

export default ReactCompilerGating.isReactCompilerEnabled() ? ((categoryId) => {
  const cResult = categoryId(576).c(4);
  categoryId = categoryId.categoryId;
  onGoBack = onGoBack(10673)().onGoBack;
  if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
    const intl = tmp(1126).intl;
    const stringResult = intl.string(tmp(1126).t["/uELTj"]);
    cResult[0] = stringResult;
    let first = stringResult;
  } else {
    first = cResult[0];
  }
  if (cResult[1] === categoryId) {
    if (cResult[2] === onGoBack) {
      let tmp7 = cResult[3];
    }
    return tmp7;
  }
  const tmp8 = closure_8(onGoBack(10674), {
    screenKey: "favoritesGuildCategorySettings",
    title: first,
    render() {
      return closure_2_8(closure_11, { categoryId, onGoBack });
    }
  });
  cResult[1] = categoryId;
  cResult[2] = onGoBack;
  cResult[3] = tmp8;
  tmp7 = tmp8;
  const obj = categoryId(576);
  const obj2 = {
    screenKey: "favoritesGuildCategorySettings",
    title: first,
    render() {
      return closure_2_8(closure_11, { categoryId, onGoBack });
    }
  };
}) : ((categoryId) => {
  categoryId = categoryId.categoryId;
  let onGoBack;
  onGoBack = onGoBack(10673)().onGoBack;
  const obj = { screenKey: "favoritesGuildCategorySettings", title: null, render: null };
  const intl = categoryId(1126).intl;
  obj.title = intl.string(categoryId(1126).t["/uELTj"]);
  obj.render = function render() {
    return closure_2_8(closure_11, { categoryId, onGoBack });
  };
  return closure_8(onGoBack(10674), obj);
});