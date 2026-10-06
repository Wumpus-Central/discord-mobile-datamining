// === Module 16077: FavoritesGuildCategorySettingsModal ===

// Module 16077 (FavoritesGuildCategorySettingsModal)
import react_native from "react-native" /* 17 */;
import nativeDefault from "native" /* 587 */;
import intl5 from "intl" /* 1126 */;
import native from "native" /* 1188 */;
import FavoritesConstants from "FavoritesConstants" /* 2065 */;
import AlertActionCreatorsDefault from "AlertActionCreators" /* 5714 */;
import FavoritesActionCreators from "FavoritesActionCreators" /* 10048 */;
import _slicedToArray from "_slicedToArray" /* 32 */;
import react from "react" /* 19 */;
import FavoriteStore_mod from "FavoriteStore" /* 2054 */;
import Fragment from "Fragment" /* 21 */;
import createStyles_mod from "createStyles" /* 4896 */;
import ReactCompilerGating_mod from "ReactCompilerGating" /* 558 */;
import size from "module_2" /* 2 */;

let categoryId, navigation;

let c9;
let metroImportAll;
let obj2;
let obj3;
let ScrollView = react_native.ScrollView;
let FavoriteStore = FavoriteStore_mod;
let maxLength = FavoritesConstants.MAX_FAVORITE_CATEGORY_NAME_LENGTH;
({ jsx: metroImportAll, jsxs: c9 } = Fragment);
let createStyles = createStyles_mod;
let obj = { container: obj2, content: obj3 };
obj2 = { flex: 1, backgroundColor: nativeDefault.colors.BACKGROUND_BASE_LOW };
createStyles = createStyles.createStyles;
obj3 = { padding: nativeDefault.space.PX_16 };
let closure_10 = createStyles(obj);
let ReactCompilerGating = ReactCompilerGating_mod;
let closure_11 = ReactCompilerGating.isReactCompilerEnabled() ? ((categoryId) => {
  let closure_5;
  let closure_6;
  let first;
  let ref;
  let tmp10;
  let tmp12;
  let tmp15;
  let tmp16;
  let tmp18;
  let tmp8;
  const tmp = categoryId;
  let obj = categoryId(navigation[9]);
  const cResult = obj.c(50);
  categoryId = categoryId.categoryId;
  const onGoBack = categoryId.onGoBack;
  closure_10();
  let obj2 = categoryId(navigation[10]);
  navigation = obj2.useNavigation();
  if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
    const items = [FavoriteStore];
    cResult[0] = items;
    first = items;
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
    tmp8 = fn;
  } else {
    tmp8 = cResult[2];
  }
  const tmpResult = tmp(navigation[11]);
  const stateFromStores = tmpResult.useStateFromStores(first, tmp8);
  if (cResult[3] === Symbol.for("react.memo_cache_sentinel")) {
    const items1 = [FavoriteStore];
    cResult[3] = items1;
    tmp10 = items1;
  } else {
    tmp10 = cResult[3];
  }
  if (cResult[4] !== categoryId) {
    const fn2 = function p() {
      return null != FavoriteStore.getCategoryRecord(categoryId);
    };
    cResult[4] = categoryId;
    cResult[5] = fn2;
    tmp12 = fn2;
  } else {
    tmp12 = cResult[5];
  }
  const tmpResult3 = tmp(navigation[11]);
  const stateFromStores1 = tmpResult3.useStateFromStores(tmp10, tmp12);
  [tmp15, tmp16] = stateFromStores(stateFromStores1.useState(stateFromStores), 2);
  ScrollView = tmp16;
  stateFromStores(stateFromStores1.useState(stateFromStores), 2);
  const obj5 = stateFromStores1;
  if (cResult[6] !== stateFromStores) {
    class R {
      constructor() {
        tmp16(stateFromStores);
      }
    }
    const items2 = [stateFromStores];
    cResult[6] = stateFromStores;
    cResult[7] = R;
    cResult[8] = items2;
    tmp18 = items2;
  } else {
    class R {
      constructor() {
        tmp16(stateFromStores);
      }
    }
    tmp18 = cResult[8];
  }
  const effect = obj5.useEffect(R, tmp18);
  if (cResult[9] !== tmp15) {
    class R {
      constructor() {
        tmp16(stateFromStores);
      }
    }
    cResult[9] = tmp15;
    cResult[10] = tmp21;
  } else {
    class R {
      constructor() {
        tmp16(stateFromStores);
      }
    }
  }
  FavoriteStore = tmp21;
  if (cResult[11] === tmp15) {
    class R {
      constructor() {
        tmp16(stateFromStores);
      }
    }
  }
  const tmpResult4 = tmp(navigation[12]);
  cResult[11] = tmp15;
  cResult[12] = stateFromStores;
  cResult[13] = tmp21;
  cResult[14] = tmpResult4.isFavoritesGuildCategoryNameValid(tmp15) && tmp21 !== stateFromStores;
  tmpResult4.isFavoritesGuildCategoryNameValid(tmp15) && tmp21 !== stateFromStores;
}) : ((categoryId) => {
  let Stack;
  let TableRow;
  let _undefined;
  let closure_7;
  let intl;
  let intl2;
  let intl3;
  let items8;
  let obj10;
  let obj7;
  let str;
  let tmp8;
  categoryId = categoryId.categoryId;
  const onGoBack = categoryId.onGoBack;
  navigation = undefined;
  let trimmed;
  let callback1;
  const tmp = callback1();
  let obj = categoryId(navigation[10]);
  navigation = obj.useNavigation();
  let obj2 = categoryId(navigation[11]);
  const items = [trimmed];
  const stateFromStores = obj2.useStateFromStores(items, () => {
    let str = FavoriteStore.getNickname(categoryId);
    if (str == null) {
      str = "";
    }
    return str;
  });
  const items1 = [trimmed];
  const obj3 = categoryId(navigation[11]);
  const stateFromStores1 = obj3.useStateFromStores(items1, () => null != FavoriteStore.getCategoryRecord(categoryId));
  [str, tmp8] = stateFromStores(stateFromStores1.useState(stateFromStores), 2);
  let c5 = tmp8;
  const items2 = [stateFromStores];
  stateFromStores(stateFromStores1.useState(stateFromStores), 2);
  const effect = stateFromStores1.useEffect(() => {
    _undefined(stateFromStores);
  }, items2);
  trimmed = str.trim();
  const obj5 = categoryId(navigation[12]);
  const tmp11 = obj5.isFavoritesGuildCategoryNameValid(str) && trimmed !== stateFromStores;
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
      const obj = FavoritesActionCreators;
      const result = obj.setFavoriteChannelNickname(categoryId, trimmed);
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
    let onPress;
    let obj = {
      headerRight(arg0) {
        let intl;
        const obj = { label: intl.string(categoryId(navigation[15]).t["R3BPH+"]), onPress, disabled: !closure_1_7 };
        const HeaderTextButton = categoryId(navigation[14]).HeaderTextButton;
        const merged = Object.assign(arg0);
        intl = categoryId(navigation[15]).intl;
        return ref(HeaderTextButton, obj);
      }
    };
    navigation.setOptions(obj);
  }, items6);
  const items7 = [categoryId, callback, stateFromStores];
  const obj6 = { style: tmp.container, contentContainerStyle: tmp.content, keyboardShouldPersistTaps: "handled", children: callback(Stack, obj7) };
  const callback2 = obj4.useCallback(() => {
    let intl;
    let intl2;
    let intl3;
    let intl4;
    let obj2;
    let obj = {
      title: intl.string(intl5.t["4VpUw8"]),
      body: intl2.format(intl5.t.GuhMa5, obj2),
      confirmText: intl3.string(intl5.t.xOscRh),
      confirmColor: native.ButtonColors.RED,
      cancelText: intl4.string(intl5.t["ETE/oC"]),
      onConfirm() {
        const obj = categoryId(navigation[13]);
        const result = obj.removeFavoriteCategory(closure_1_0);
        callback();
      }
    };
    const show = AlertActionCreatorsDefault.show;
    AlertActionCreatorsDefault;
    intl = intl5.intl;
    intl2 = intl5.intl;
    obj2 = { channelName: stateFromStores };
    intl3 = intl5.intl;
    intl4 = intl5.intl;
    show(obj);
  }, items7);
  obj7 = { spacing: onGoBack(navigation[7]).space.PX_24, children: items8 };
  Stack = tmp2(tmp3[22]).Stack;
  const obj8 = { label: intl.string(categoryId(navigation[15]).t.OCAkGP), placeholder: intl2.string(categoryId(navigation[15]).t.eTVbtx), value: str, onChange: tmp8, maxLength, clearable: true };
  const TextInput = tmp2(tmp3[18]).TextInput;
  intl = tmp2(tmp3[15]).intl;
  intl2 = tmp2(tmp3[15]).intl;
  items8 = [ref(TextInput, obj8), ];
  const obj9 = { hasIcons: true, children: ref(TableRow, obj10) };
  const TableRowGroup = tmp2(tmp3[20]).TableRowGroup;
  obj10 = { variant: "danger", icon: ref(categoryId(navigation[19]).TrashIcon, { color: "text-feedback-critical" }), label: intl3.string(categoryId(navigation[15]).t.ifbXnL), onPress: callback2 };
  TableRow = tmp2(tmp3[21]).TableRow;
  intl3 = tmp2(tmp3[15]).intl;
  items8[1] = ref(TableRowGroup, obj9);
  return ref(c5, obj6);
});
ReactCompilerGating = ReactCompilerGating_mod;
let tmp4 = ReactCompilerGating.isReactCompilerEnabled() ? ((categoryId) => {
  let first;
  let onGoBack;
  let obj = categoryId(576);
  const cResult = obj.c(4);
  categoryId = categoryId.categoryId;
  const tmp4 = onGoBack;
  onGoBack = onGoBack(10673)().onGoBack;
  if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
    const intl = tmp(1126).intl;
    const stringResult = intl.string(categoryId(1126).t["/uELTj"]);
    cResult[0] = stringResult;
    first = stringResult;
  } else {
    first = cResult[0];
  }
  if (cResult[1] === categoryId) {
    let tmp7;
    if (cResult[2] === onGoBack) {
      tmp7 = cResult[3];
    }
    return tmp7;
  }
  const obj2 = {
    screenKey: "favoritesGuildCategorySettings",
    title: first,
    render() {
      const obj = { categoryId, onGoBack };
      return metroImportAll(closure_11, obj);
    }
  };
  const tmp8 = closure_8(tmp4(10674), obj2);
  cResult[1] = categoryId;
  cResult[2] = onGoBack;
  cResult[3] = tmp8;
  tmp7 = tmp8;
}) : ((categoryId) => {
  let intl;
  categoryId = categoryId.categoryId;
  let onGoBack;
  onGoBack = onGoBack(10673)().onGoBack;
  let obj = {
    screenKey: "favoritesGuildCategorySettings",
    title: intl.string(categoryId(1126).t["/uELTj"]),
    render() {
      const obj = { categoryId, onGoBack };
      return metroImportAll(closure_11, obj);
    }
  };
  const tmp = onGoBack(10674);
  intl = categoryId(1126).intl;
  return closure_8(tmp, obj);
});
let result = size.fileFinishedImporting("modules/favorites/native/modal/FavoritesGuildCategorySettingsModal.tsx");

export default tmp4;