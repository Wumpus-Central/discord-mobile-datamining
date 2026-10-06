// === Module 16075: FavoritesGuildCategoryActionSheet ===

// Module 16075 (FavoritesGuildCategoryActionSheet)
import ToastUtils from "ToastUtils" /* 4573 */;
import ClipboardUtils from "ClipboardUtils" /* 6695 */;
import openFavoritesGuildCategorySettingsModalDefault from "openFavoritesGuildCategorySettingsModal" /* 16076 */;
import react from "react" /* 19 */;
import FavoriteStore from "FavoriteStore" /* 2054 */;
import Fragment from "Fragment" /* 21 */;
import ReactCompilerGating_mod from "ReactCompilerGating" /* 558 */;
import size from "module_2" /* 2 */;

let category, categoryId, dependencyMap;

let hasOwnProperty;
let metroRequire;
({ jsx: hasOwnProperty, jsxs: metroRequire } = Fragment);
let ReactCompilerGating = ReactCompilerGating_mod;
let closure_7 = ReactCompilerGating.isReactCompilerEnabled() ? ((category) => {
  let ActionSheetRow;
  let ActionSheetRow2;
  let Icon;
  let Icon3;
  let closure_2;
  let intl2;
  let items;
  let obj11;
  let obj12;
  let obj6;
  let obj7;
  let obj9;
  let tmp7;
  let obj = category(576);
  const cResult = obj.c(19);
  category = category.category;
  const onClose = category.onClose;
  const tmp4 = onClose(5049)(category, true);
  const tmp5 = onClose(10718)(category);
  dependencyMap = tmp5;
  const DeveloperMode = category(2028).DeveloperMode;
  const setting = DeveloperMode.useSetting();
  if (cResult[0] !== tmp4) {
    let obj2 = { title: tmp4 };
    const tmp9 = closure_5(category(6651).BottomSheetTitleHeader, obj2);
    cResult[0] = tmp4;
    cResult[1] = tmp9;
    tmp7 = tmp9;
  } else {
    tmp7 = cResult[1];
  }
  if (cResult[2] === tmp5) {
    let tmp10;
    let tmp15;
    let tmp14;
    if (cResult[3] === onClose) {
      tmp10 = cResult[4];
    }
    const _Symbol = Symbol;
    if (cResult[5] === Symbol.for("react.memo_cache_sentinel")) {
      const intl = tmp(1126).intl;
      const stringResult = intl.string(category(1126).t.zdPFs9);
      const obj3 = { IconComponent: category(6893).SettingsIcon };
      const Icon2 = tmp(6704).ActionSheetRow.Icon;
      const tmp18 = closure_5(Icon2, obj3);
      cResult[5] = stringResult;
      cResult[6] = tmp18;
      tmp15 = tmp18;
      tmp14 = stringResult;
    } else {
      tmp14 = cResult[5];
      tmp15 = cResult[6];
    }
    if (cResult[7] === category.id) {
      let tmp19;
      if (cResult[8] === onClose) {
        tmp19 = cResult[9];
      }
      if (cResult[10] === category.id) {
        if (cResult[11] === setting) {
          let tmp22;
          if (cResult[12] === onClose) {
            tmp22 = cResult[13];
          }
          if (cResult[14] === tmp7) {
            if (cResult[15] === tmp10) {
              if (cResult[16] === tmp19) {
                let tmp25;
                if (cResult[17] === tmp22) {
                  tmp25 = cResult[18];
                }
                return tmp25;
              }
            }
          }
          const obj4 = { header: tmp7, children: items };
          items = [tmp10, tmp19, tmp22];
          const tmp27 = closure_6(category(6708).ActionSheet, obj4);
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
        const obj5 = { hasIcons: true, children: closure_5(ActionSheetRow2, obj6) };
        const Group3 = tmp(6704).ActionSheetRow.Group;
        obj6 = {
          label: intl2.string(category(1126).t["2visC6"]),
          icon: closure_5(Icon3, obj7),
          onPress() {
                  const obj = ClipboardUtils;
                  obj.copy(category.id);
                  const obj2 = ToastUtils;
                  obj2.presentIdCopied();
                  onClose();
                }
        };
        ActionSheetRow2 = tmp(6704).ActionSheetRow;
        intl2 = tmp(1126).intl;
        obj7 = { IconComponent: category(10371).IdIcon };
        Icon3 = tmp(6704).ActionSheetRow.Icon;
        tmp23 = closure_5(Group3, obj5);
      }
      cResult[10] = category.id;
      cResult[11] = setting;
      cResult[12] = onClose;
      cResult[13] = tmp23;
      tmp22 = tmp23;
    }
    const obj8 = { hasIcons: true, children: closure_5(category(6704).ActionSheetRow, obj9) };
    const Group2 = tmp(6704).ActionSheetRow.Group;
    obj9 = {
      label: tmp14,
      icon: tmp15,
      onPress() {
          openFavoritesGuildCategorySettingsModalDefault(category.id);
          onClose();
        }
    };
    const tmp21 = closure_5(Group2, obj8);
    cResult[7] = category.id;
    cResult[8] = onClose;
    cResult[9] = tmp21;
    tmp19 = tmp21;
  }
  let tmp11 = null;
  if (null != tmp5) {
    const obj10 = { hasIcons: true, children: closure_5(ActionSheetRow, obj11) };
    const Group = tmp(6704).ActionSheetRow.Group;
    obj11 = {
      label: tmp5.label,
      icon: closure_5(Icon, obj12),
      onPress() {
          closure_2.perform();
          onClose();
        }
    };
    ActionSheetRow = tmp(6704).ActionSheetRow;
    obj12 = { IconComponent: category(10702).PlusLargeIcon };
    Icon = tmp(6704).ActionSheetRow.Icon;
    tmp11 = closure_5(Group, obj10);
  }
  cResult[2] = tmp5;
  cResult[3] = onClose;
  cResult[4] = tmp11;
  tmp10 = tmp11;
}) : ((category) => {
  let ActionSheetRow;
  let ActionSheetRow2;
  let ActionSheetRow3;
  let Icon;
  let Icon2;
  let Icon3;
  let closure_2;
  let intl;
  let intl2;
  let items;
  let obj10;
  let obj3;
  let obj4;
  let obj6;
  let obj7;
  let obj9;
  category = category.category;
  const onClose = category.onClose;
  const tmp2 = onClose(5049)(category, true);
  const tmp3 = onClose(10718)(category);
  dependencyMap = tmp3;
  const DeveloperMode = category(2028).DeveloperMode;
  const setting = DeveloperMode.useSetting();
  let obj = { header: closure_5(category(6651).BottomSheetTitleHeader, { title: tmp2 }), children: items };
  const ActionSheet = category(6708).ActionSheet;
  let tmp7Result = null;
  if (null != tmp3) {
    let obj2 = { hasIcons: true, children: closure_5(ActionSheetRow, obj3) };
    const Group = tmp4(6704).ActionSheetRow.Group;
    obj3 = {
      label: tmp3.label,
      icon: closure_5(Icon, obj4),
      onPress() {
          closure_2.perform();
          onClose();
        }
    };
    ActionSheetRow = tmp4(6704).ActionSheetRow;
    obj4 = { IconComponent: category(10702).PlusLargeIcon };
    Icon = tmp4(6704).ActionSheetRow.Icon;
    tmp7Result = closure_5(Group, obj2);
  }
  items = [tmp7Result, , ];
  const obj5 = { hasIcons: true, children: closure_5(ActionSheetRow2, obj6) };
  const Group2 = tmp4(6704).ActionSheetRow.Group;
  obj6 = {
    label: intl.string(category(1126).t.zdPFs9),
    icon: closure_5(Icon2, obj7),
    onPress() {
      openFavoritesGuildCategorySettingsModalDefault(category.id);
      onClose();
    }
  };
  ActionSheetRow2 = tmp4(6704).ActionSheetRow;
  intl = tmp4(1126).intl;
  obj7 = { IconComponent: category(6893).SettingsIcon };
  Icon2 = tmp4(6704).ActionSheetRow.Icon;
  items[1] = closure_5(Group2, obj5);
  let tmp7Result2 = null;
  if (setting) {
    const obj8 = { hasIcons: true, children: closure_5(ActionSheetRow3, obj9) };
    const Group3 = tmp4(6704).ActionSheetRow.Group;
    obj9 = {
      label: intl2.string(category(1126).t["2visC6"]),
      icon: closure_5(Icon3, obj10),
      onPress() {
          const obj = ClipboardUtils;
          obj.copy(category.id);
          const obj2 = ToastUtils;
          obj2.presentIdCopied();
          onClose();
        }
    };
    ActionSheetRow3 = tmp4(6704).ActionSheetRow;
    intl2 = tmp4(1126).intl;
    obj10 = { IconComponent: category(10371).IdIcon };
    Icon3 = tmp4(6704).ActionSheetRow.Icon;
    tmp7Result2 = closure_5(Group3, obj8);
  }
  items[2] = tmp7Result2;
  return closure_6(ActionSheet, obj);
});
ReactCompilerGating = ReactCompilerGating_mod;
let tmp3 = ReactCompilerGating.isReactCompilerEnabled() ? ((categoryId) => {
  let closure_2;
  let first;
  let tmp6;
  const obj = categoryId(576);
  const cResult = obj.c(13);
  const tmp = categoryId;
  categoryId = categoryId.categoryId;
  const onClose = categoryId.onClose;
  if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
    const items = [FavoriteStore];
    cResult[0] = items;
    first = items;
  } else {
    first = cResult[0];
  }
  if (cResult[1] !== categoryId) {
    const fn = function u() {
      return FavoriteStore.getFavorite(categoryId);
    };
    cResult[1] = categoryId;
    cResult[2] = fn;
    tmp6 = fn;
  } else {
    tmp6 = cResult[2];
  }
  const tmpResult = tmp(504);
  const stateFromStores = tmpResult.useStateFromStores(first, tmp6);
  if (cResult[3] === categoryId) {
    let tmp8;
    if (cResult[4] === stateFromStores) {
      tmp8 = cResult[5];
    }
    dependencyMap = tmp8;
    if (cResult[6] === tmp8) {
      let tmp11;
      let tmp12;
      if (cResult[7] === onClose) {
        tmp11 = cResult[8];
        tmp12 = cResult[9];
      }
      const effect = react.useEffect(tmp11, tmp12);
      class A {
        constructor() {
          if (null == closure_2) {
            onClose();
          }
        }
      }
      let tmp16 = null;
      if (null != tmp8) {
        const obj2 = { category: null, onClose };
        class A {
          constructor() {
            if (null == closure_2) {
              onClose();
            }
          }
        }
        tmp16 = closure_5(closure_7, obj2);
      }
      cResult[10] = tmp8;
      cResult[11] = onClose;
      cResult[12] = tmp16;
    }
    class A {
      constructor() {
        if (null == closure_2) {
          onClose();
        }
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
}) : ((categoryId) => {
  categoryId = categoryId.categoryId;
  const onClose = categoryId.onClose;
  let stateFromStores;
  let memo;
  const items = [FavoriteStore];
  const obj = categoryId(stateFromStores[18]);
  stateFromStores = obj.useStateFromStores(items, () => FavoriteStore.getFavorite(categoryId));
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
const result = size.fileFinishedImporting("modules/favorites/native/FavoritesGuildCategoryActionSheet.tsx");

export default tmp3;