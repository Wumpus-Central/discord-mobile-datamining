// === Module 16335: FavoritesGuildCategoryActionSheet ===

// Module 16335 (FavoritesGuildCategoryActionSheet)
import ToastUtils from "ToastUtils" /* 4765 */;
import ClipboardUtils from "ClipboardUtils" /* 6872 */;
import openFavoritesGuildCategorySettingsModalDefault from "openFavoritesGuildCategorySettingsModal" /* 16336 */;
import noop from "module_19" /* 19 */;
import FavoriteStore from "FavoriteStore" /* 2066 */;

require = fn;
const jsxProd = fn(21);
({ jsx: hasOwnProperty, jsxs: metroRequire } = jsxProd);
let ReactCompilerGating = fn(558);
let closure_7 = ReactCompilerGating.isReactCompilerEnabled() ? (function FavoritesGuildCategoryActionSheetConnected(category) {
  const cResult = category(576).c(19);
  category = category.category;
  const onClose = category.onClose;
  const tmp4 = onClose(5417)(category, true);
  const tmp5 = onClose(12697)(category);
  dependencyMap = tmp5;
  const DeveloperMode = category(2040).DeveloperMode;
  const setting = DeveloperMode.useSetting();
  if (cResult[0] !== tmp4) {
    const obj2 = { title: tmp4 };
    const tmp9 = closure_5(tmp(6828).BottomSheetTitleHeader, obj2);
    cResult[0] = tmp4;
    cResult[1] = tmp9;
    let tmp7 = tmp9;
  } else {
    tmp7 = cResult[1];
  }
  if (cResult[2] === tmp5) {
    if (cResult[3] === onClose) {
      let tmp10 = cResult[4];
    }
    const _Symbol = Symbol;
    if (cResult[5] === Symbol.for("react.memo_cache_sentinel")) {
      const intl = tmp(1126).intl;
      const stringResult = intl.string(tmp(1126).t.zdPFs9);
      const obj3 = { IconComponent: tmp(7082).SettingsIcon };
      const tmp18 = closure_5(tmp(6881).ActionSheetRow.Icon, obj3);
      cResult[5] = stringResult;
      cResult[6] = tmp18;
      let tmp15 = tmp18;
      let tmp14 = stringResult;
    } else {
      tmp14 = cResult[5];
      tmp15 = cResult[6];
    }
    if (cResult[7] === category.id) {
      if (cResult[8] === onClose) {
        let tmp19 = cResult[9];
      }
      if (cResult[10] === category.id) {
        if (cResult[11] === setting) {
          if (cResult[12] === onClose) {
            let tmp22 = cResult[13];
          }
          if (cResult[14] === tmp7) {
            if (cResult[15] === tmp10) {
              if (cResult[16] === tmp19) {
                if (cResult[17] === tmp22) {
                  let tmp25 = cResult[18];
                }
                return tmp25;
              }
            }
          }
          const obj4 = { header: tmp7, children: null };
          const items = [tmp10, tmp19, tmp22];
          obj4.children = items;
          const tmp27 = closure_6(tmp(6885).ActionSheet, obj4);
          cResult[14] = tmp7;
          cResult[15] = tmp10;
          cResult[16] = tmp19;
          cResult[17] = tmp22;
          cResult[18] = tmp27;
          tmp25 = tmp27;
        }
      }
      let tmp23 = null;
      if (setting) {
        const obj5 = { hasIcons: true, children: null };
        const obj6 = { label: null, icon: null, onPress: null };
        const intl2 = tmp(1126).intl;
        obj6.label = intl2.string(tmp(1126).t["2visC6"]);
        const obj7 = { IconComponent: tmp(9968).IdIcon };
        obj6.icon = closure_5(tmp(6881).ActionSheetRow.Icon, obj7);
        obj6.onPress = function onPress() {
          ClipboardUtils.copy(category.id);
          ToastUtils.presentIdCopied();
          onClose();
        };
        obj5.children = closure_5(tmp(6881).ActionSheetRow, obj6);
        tmp23 = closure_5(tmp(6881).ActionSheetRow.Group, obj5);
      }
      cResult[10] = category.id;
      cResult[11] = setting;
      cResult[12] = onClose;
      cResult[13] = tmp23;
      tmp22 = tmp23;
    }
    const obj8 = { hasIcons: true, children: null };
    const obj9 = {
      label: tmp14,
      icon: tmp15,
      onPress() {
          openFavoritesGuildCategorySettingsModalDefault(category.id);
          onClose();
        }
    };
    obj8.children = closure_5(tmp(6881).ActionSheetRow, obj9);
    const tmp21 = closure_5(tmp(6881).ActionSheetRow.Group, obj8);
    cResult[7] = category.id;
    cResult[8] = onClose;
    cResult[9] = tmp21;
    tmp19 = tmp21;
  }
  let tmp11 = null;
  if (null != tmp5) {
    const obj10 = { hasIcons: true, children: null };
    const obj11 = { label: tmp5.label, icon: null, onPress: null };
    const obj12 = { IconComponent: tmp(10290).PlusLargeIcon };
    obj11.icon = closure_5(tmp(6881).ActionSheetRow.Icon, obj12);
    obj11.onPress = function onPress() {
      closure_2.perform();
      onClose();
    };
    obj10.children = closure_5(tmp(6881).ActionSheetRow, obj11);
    tmp11 = closure_5(tmp(6881).ActionSheetRow.Group, obj10);
  }
  cResult[2] = tmp5;
  cResult[3] = onClose;
  cResult[4] = tmp11;
  tmp10 = tmp11;
  let obj = category(576);
}) : (function FavoritesGuildCategoryActionSheetConnected(category) {
  category = category.category;
  const onClose = category.onClose;
  const tmp3 = onClose(12697)(category);
  dependencyMap = tmp3;
  const DeveloperMode = category(2040).DeveloperMode;
  const setting = DeveloperMode.useSetting();
  let obj = { header: closure_5(category(6828).BottomSheetTitleHeader, { title: onClose(5417)(category, true) }), children: null };
  let tmp7Result = null;
  if (null != tmp3) {
    const obj2 = { hasIcons: true, children: null };
    const obj3 = { label: tmp3.label, icon: null, onPress: null };
    const obj4 = { IconComponent: tmp4(10290).PlusLargeIcon };
    obj3.icon = closure_5(tmp4(6881).ActionSheetRow.Icon, obj4);
    obj3.onPress = function onPress() {
      closure_2.perform();
      onClose();
    };
    obj2.children = closure_5(tmp4(6881).ActionSheetRow, obj3);
    tmp7Result = closure_5(tmp4(6881).ActionSheetRow.Group, obj2);
  }
  const items = [tmp7Result, , ];
  const obj5 = { hasIcons: true, children: null };
  const obj6 = { label: null, icon: null, onPress: null };
  const intl = tmp4(1126).intl;
  obj6.label = intl.string(category(1126).t.zdPFs9);
  const tmp2 = onClose(5417)(category, true);
  obj6.icon = closure_5(category(6881).ActionSheetRow.Icon, { IconComponent: category(7082).SettingsIcon });
  obj6.onPress = function onPress() {
    openFavoritesGuildCategorySettingsModalDefault(category.id);
    onClose();
  };
  obj5.children = closure_5(category(6881).ActionSheetRow, obj6);
  items[1] = closure_5(category(6881).ActionSheetRow.Group, obj5);
  let tmp7Result2 = null;
  if (setting) {
    const obj8 = { hasIcons: true, children: null };
    const obj9 = { label: null, icon: null, onPress: null };
    const intl2 = tmp4(1126).intl;
    obj9.label = intl2.string(tmp4(1126).t["2visC6"]);
    const obj10 = { IconComponent: tmp4(9968).IdIcon };
    obj9.icon = closure_5(tmp4(6881).ActionSheetRow.Icon, obj10);
    obj9.onPress = function onPress() {
      ClipboardUtils.copy(category.id);
      ToastUtils.presentIdCopied();
      onClose();
    };
    obj8.children = closure_5(tmp4(6881).ActionSheetRow, obj9);
    tmp7Result2 = closure_5(tmp4(6881).ActionSheetRow.Group, obj8);
  }
  items[2] = tmp7Result2;
  obj.children = items;
  return closure_6(category(6885).ActionSheet, obj);
});
ReactCompilerGating = fn(558);
const size = fn(2);
const result = size.fileFinishedImporting("modules/favorites/native/FavoritesGuildCategoryActionSheet.tsx");

export default ReactCompilerGating.isReactCompilerEnabled() ? (function FavoritesGuildCategoryActionSheet(categoryId) {
  const cResult = categoryId(576).c(13);
  categoryId = categoryId.categoryId;
  const onClose = categoryId.onClose;
  if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
    const items = [FavoriteStore];
    cResult[0] = items;
    let first = items;
  } else {
    first = cResult[0];
  }
  if (cResult[1] !== categoryId) {
    const fn = function u() {
      return FavoriteStore.getFavorite(categoryId);
    };
    cResult[1] = categoryId;
    cResult[2] = fn;
    let tmp6 = fn;
  } else {
    tmp6 = cResult[2];
  }
  const obj = categoryId(576);
  const stateFromStores = categoryId(504).useStateFromStores(first, tmp6);
  if (cResult[3] === categoryId) {
    if (cResult[4] === stateFromStores) {
      let tmp8 = cResult[5];
    }
    dependencyMap = tmp8;
    if (cResult[6] === tmp8) {
      if (cResult[7] === onClose) {
        let tmp11 = cResult[8];
        let tmp12 = cResult[9];
      }
      const effect = noop.useEffect(tmp11, tmp12);
      class A {
        constructor() {
          if (null == closure_2) {
            tmp = onClose;
            tmp2 = onClose();
          }
          return;
        }
      }
      let tmp16 = null;
      if (null != tmp8) {
        const obj2 = { category: null, onClose: null };
        class A {
          constructor() {
            if (null == closure_2) {
              tmp = onClose;
              tmp2 = onClose();
            }
            return;
          }
        }
        obj2.onClose = onClose;
        tmp16 = closure_5(closure_7, obj2);
      }
      cResult[10] = tmp8;
      cResult[11] = onClose;
      cResult[12] = tmp16;
    }
    class A {
      constructor() {
        if (null == closure_2) {
          tmp = onClose;
          tmp2 = onClose();
        }
        return;
      }
    }
    const items1 = [tmp8, onClose];
    cResult[6] = tmp8;
    cResult[7] = onClose;
    cResult[8] = A;
    cResult[9] = items1;
    tmp12 = items1;
    tmp11 = A;
  }
  let categoryRecord = null;
  if (null != stateFromStores) {
    categoryRecord = FavoriteStore.getCategoryRecord(categoryId);
  }
  cResult[3] = categoryId;
  cResult[4] = stateFromStores;
  cResult[5] = categoryRecord;
  tmp8 = categoryRecord;
  const tmpResult = categoryId(504);
}) : (function FavoritesGuildCategoryActionSheet(categoryId) {
  categoryId = categoryId.categoryId;
  const onClose = categoryId.onClose;
  let stateFromStores;
  let memo;
  const items = [FavoriteStore];
  stateFromStores = categoryId(stateFromStores[18]).useStateFromStores(items, () => FavoriteStore.getFavorite(categoryId));
  const items1 = [categoryId, stateFromStores];
  memo = memo.useMemo(() => {
    let categoryRecord = null;
    if (null != stateFromStores) {
      categoryRecord = FavoriteStore.getCategoryRecord(categoryId);
    }
    return categoryRecord;
  }, items1);
  const items2 = [memo, onClose];
  const effect = memo.useEffect(() => {
    if (null == memo) {
      onClose();
    }
  }, items2);
  let tmp4 = null;
  if (null != memo) {
    const obj2 = { category: memo, onClose };
    tmp4 = closure_5(closure_7, obj2);
  }
  return tmp4;
});