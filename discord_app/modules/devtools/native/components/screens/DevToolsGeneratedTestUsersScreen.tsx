// === Module 15417: DevToolsGeneratedTestUsersScreen ===

// Module 15417 (DevToolsGeneratedTestUsersScreen)
import nativeDefault from "native" /* 587 */;
import ActionSheetActionCreatorsDefault from "ActionSheetActionCreators" /* 4854 */;
import Stack_Stack from "Stack/Stack" /* 5593 */;
import components_Button_Button from "components/Button/Button" /* 5594 */;
import TextInput_TextInput from "TextInput/TextInput" /* 6098 */;
import useSafeAreaInsetsKeyboardAwareDefault from "useSafeAreaInsetsKeyboardAware" /* 6471 */;
import SettingsIcon from "SettingsIcon" /* 6883 */;
import ShieldIcon from "ShieldIcon" /* 8923 */;
import SpeedometerIcon from "SpeedometerIcon" /* 9638 */;
import FoodIcon from "FoodIcon" /* 9961 */;
import GiftIcon from "GiftIcon" /* 10766 */;
import UserIcon from "UserIcon" /* 11435 */;
import PiggyBankIcon from "PiggyBankIcon" /* 11534 */;
import SignPostIcon from "SignPostIcon" /* 13654 */;
import AchievementsIcon from "AchievementsIcon" /* 15419 */;
import TreehouseIcon from "TreehouseIcon" /* 15421 */;
import CompassIcon from "CompassIcon" /* 15423 */;
import CarIcon from "CarIcon" /* 15425 */;
import TrainIcon from "TrainIcon" /* 15427 */;
import TeacupIcon from "TeacupIcon" /* 15429 */;
import InventoryIcon from "InventoryIcon" /* 15431 */;
import BurgerIcon from "BurgerIcon" /* 15433 */;
import MagicDoorIcon from "MagicDoorIcon" /* 15435 */;
import PawPrintIcon from "PawPrintIcon" /* 15437 */;
import RecordPlayerIcon from "RecordPlayerIcon" /* 15439 */;
import GeneratedTestUserActionCreators from "GeneratedTestUserActionCreators" /* 15441 */;
import _asyncToGenerator from "_asyncToGenerator" /* 5 */;
import _slicedToArray from "_slicedToArray" /* 32 */;
import react from "react" /* 19 */;
import react_native from "react-native" /* 17 */;
import GeneratedTestUsersStore from "GeneratedTestUsersStore" /* 15418 */;
import AuthenticationStore from "AuthenticationStore" /* 502 */;
import Fragment from "Fragment" /* 21 */;
import createStyles_mod from "createStyles" /* 4890 */;
import ReactCompilerGating_mod from "ReactCompilerGating" /* 558 */;
import size from "module_2" /* 2 */;

let BottomSheet, c1, c2, c4, dependencyMap, obj1, openLazyResult, pools;

let c10;
let metroImportDefault;
let metroRequire;
let obj2;
let obj3;
let obj4;
let unpackModuleId;
function PoolIdInput(onSubmit) {
  let c5;
  let first;
  let first1;
  let items1;
  let tmp3;
  let tmp5;
  let tmp7;
  onSubmit = onSubmit.onSubmit;
  first = undefined;
  first1 = undefined;
  c5 = undefined;
  const tmp = closure_14();
  [first, tmp3] = react.useState("");
  let closure_2 = tmp3;
  [first1, tmp5] = react.useState("");
  let closure_4 = tmp5;
  [tmp7, c5] = react.useState(false);
  items = [first, first1, onSubmit];
  _slicedToArray(react.useState(false), 2);
  const callback = react.useCallback(_asyncToGenerator(async () => {
    if (c4 === 2) {
      c4 = 3;
      throw new TypeError("Generator functions may not be called on executing generators");
    } else if (tmp3 === 3) {
      if (arg0 === 1) {
        throw value;
      } else if (arg0 === 2) {
        const obj2 = { value, done: true };
        return obj2;
      } else {
        return { value: "IconComponent", done: null };
      }
    } else {
      let c3;
      try {
        c4 = 2;
        if (0 === c1) {
          if (arg0 === 1) {
            c4 = 3;
            throw value;
          } else if (arg0 === 2) {
            c4 = 3;
            const obj3 = { value, done: true };
            return obj3;
          } else {
            let closure_0 = tmp;
            if (0 !== first.length) {
              _undefined(true);
              c3 = 1;
              c1 = 2;
              c4 = 1;
              const obj4 = { value: onSubmit(tmp21, first1), done: false };
              return obj4;
            }
          }
        } else if (1 === tmp4) {
          c3 = 0;
          closure_128_5(false);
          throw closure_2;
        } else if (arg0 === 1) {
          c4 = 3;
          throw value;
        } else if (arg0 === 2) {
          c3 = 0;
          closure_128_5(false);
          c4 = 3;
          const obj = { value, done: true };
          return obj;
        } else {
          closure_128_2("");
          closure_128_4("");
          c3 = 0;
          closure_128_5(false);
        }
        c4 = 3;
        return { value: "IconComponent", done: null };
      } catch (tmp26) {
        closure_2 = tmp26;
        if (0 === c3) {
          c4 = 3;
          throw tmp26;
        } else {
          c1 = 1;
        }
      }
    }
  }), items);
  let obj = { spacing: 4, style: tmp.inputContainer, children: items1 };
  const Stack = Stack_Stack.Stack;
  items1 = [authStore(TextInput_TextInput.TextInput, { size: "md", placeholder: "Enter Pool ID", onChange: tmp3, autoCapitalize: "none", autoCorrect: false, autoComplete: "off", clearable: true }), authStore(TextInput_TextInput.TextInput, { size: "md", secureTextEntry: true, placeholder: "Enter Password", onChange: tmp5, autoCapitalize: "none", autoCorrect: false, autoComplete: "off", clearable: true }), ];
  let tmp11 = 0 === first.length;
  const Button = components_Button_Button.Button;
  if (!tmp11) {
    tmp11 = 0 === first1.length;
  }
  if (!tmp11) {
    tmp11 = tmp7;
  }
  items1[2] = authStore(Button, { size: "md", variant: "primary", text: "Get Pool", disabled: tmp11, loading: tmp7, onPress: callback });
  return unpackModuleId(Stack, obj);
}
({ View: metroRequire, ScrollView: metroImportDefault } = react_native);
({ jsx: c10, jsxs: unpackModuleId } = Fragment);
let items = [UserIcon.UserIcon, ShieldIcon.ShieldIcon, GiftIcon.GiftIcon, AchievementsIcon.AchievementsIcon, PiggyBankIcon.PiggyBankIcon, TreehouseIcon.TreehouseIcon, SpeedometerIcon.SpeedometerIcon, CompassIcon.CompassIcon, SignPostIcon.SignPostIcon, CarIcon.CarIcon, TrainIcon.TrainIcon, TeacupIcon.TeacupIcon, InventoryIcon.InventoryIcon, FoodIcon.FoodIcon, BurgerIcon.BurgerIcon, MagicDoorIcon.MagicDoorIcon, PawPrintIcon.PawPrintIcon, RecordPlayerIcon.RecordPlayerIcon, SettingsIcon.SettingsIcon];
let closure_13 = ["text-default", "text-feedback-positive", "text-feedback-warning", "text-feedback-critical", "text-link", "text-brand"];
let createStyles = createStyles_mod;
let obj = { container: obj2, contentContainer: obj3, inputContainer: obj4 };
obj2 = { backgroundColor: nativeDefault.colors.BACKGROUND_BASE_LOW, flex: 1 };
createStyles = createStyles.createStyles;
obj3 = { padding: nativeDefault.space.PX_16 };
obj4 = { marginBottom: nativeDefault.space.PX_16 };
let closure_14 = createStyles(obj);
let ReactCompilerGating = ReactCompilerGating_mod;
let closure_16 = ReactCompilerGating.isReactCompilerEnabled() ? ((pool) => {
  let closure_2;
  let flag;
  let str;
  let tmp4;
  let tmp5;
  let tmp6;
  let tmp7;
  let tmp8;
  let tmp9;
  let obj = pool(576);
  const cResult = obj.c(29);
  pool = pool.pool;
  if (cResult[0] !== pool) {
    let tmp12;
    let tmp15;
    const usersForPool = GeneratedTestUsersStore.getUsersForPool(pool.id);
    const _Symbol = Symbol;
    if (cResult[9] === Symbol.for("react.memo_cache_sentinel")) {
      const id = AuthenticationStore.getId();
      cResult[9] = id;
      tmp12 = id;
    } else {
      tmp12 = cResult[9];
    }
    dependencyMap = tmp12;
    if (cResult[10] !== pool.id) {
      const fn = function w(arg0) {
        const obj = ActionSheetActionCreatorsDefault;
        obj.hideActionSheet("generated-test-users");
        const obj2 = GeneratedTestUserActionCreators;
        obj2.loginAsGeneratedUser(pool.id, arg0);
      };
      cResult[10] = pool.id;
      cResult[11] = fn;
      tmp15 = fn;
    } else {
      tmp15 = cResult[11];
    }
    let closure_3 = tmp15;
    BottomSheet = tmp(6645).BottomSheet;
    const _HermesInternal = HermesInternal;
    const combined = "" + usersForPool.length + " users";
    if (cResult[12] === pool.summary) {
      let tmp17;
      let tmp21;
      if (cResult[13] === combined) {
        tmp17 = cResult[14];
      }
      const _Symbol2 = Symbol;
      if (cResult[15] === Symbol.for("react.memo_cache_sentinel")) {
        let obj2 = { paddingHorizontal: usersForPool(587).space.PX_12 };
        cResult[15] = obj2;
        tmp21 = obj2;
      } else {
        tmp21 = cResult[15];
      }
      const TableRowGroup = tmp(6074).TableRowGroup;
      const mapped = usersForPool.map((id, index) => {
        let tmp2Result;
        const obj = {
          icon: closure_1_10(pool(closure_2[7]).UserIcon, { size: "md" }),
          label: null,
          subLabel: null,
          onPress() {
            return closure_3(id.id);
          },
          disabled: id.id === closure_2,
          trailing: tmp2Result,
          start: 0 === index,
          end: index === usersForPool.length - 1
        };
        const TableRow = pool(closure_2[38]).TableRow;
        ({ username: obj.label, email: obj.subLabel } = id);
        tmp2Result = undefined;
        if (id.id === closure_2) {
          tmp2Result = closure_1_10(pool(closure_2[39]).CheckmarkLargeIcon, { size: "md", color: "text-feedback-positive" });
        }
        return closure_1_10(TableRow, obj, id.id);
      });
      cResult[0] = pool;
      cResult[1] = TableRowGroup;
      cResult[2] = closure_6;
      cResult[3] = BottomSheet;
      cResult[4] = "Select User to Login As";
      cResult[5] = true;
      cResult[6] = mapped;
      cResult[7] = tmp21;
      cResult[8] = tmp17;
      tmp8 = tmp21;
      tmp9 = tmp17;
      tmp7 = mapped;
      flag = true;
      str = "Select User to Login As";
      tmp6 = BottomSheet;
      tmp5 = closure_6;
      tmp4 = TableRowGroup;
    }
    const obj3 = { title: pool.summary, subtitle: combined };
    const tmp19 = closure_10(pool(6644).BottomSheetTitleHeader, obj3);
    cResult[12] = pool.summary;
    cResult[13] = combined;
    cResult[14] = tmp19;
    tmp17 = tmp19;
  } else {
    tmp4 = cResult[1];
    tmp5 = cResult[2];
    tmp6 = cResult[3];
    str = cResult[4];
    flag = cResult[5];
    tmp7 = cResult[6];
    tmp8 = cResult[7];
    tmp9 = cResult[8];
  }
  if (cResult[16] === tmp4) {
    if (cResult[17] === str) {
      if (cResult[18] === flag) {
        let tmp24;
        if (cResult[19] === tmp7) {
          tmp24 = cResult[20];
        }
        if (cResult[21] === tmp5) {
          if (cResult[22] === tmp8) {
            let tmp26;
            if (cResult[23] === tmp24) {
              tmp26 = cResult[24];
            }
            if (cResult[25] === tmp6) {
              if (cResult[26] === tmp9) {
                let tmp29;
                if (cResult[27] === tmp26) {
                  tmp29 = cResult[28];
                }
                return tmp29;
              }
            }
            const obj4 = { header: tmp9, children: tmp26 };
            const tmp31 = closure_10(tmp6, obj4);
            cResult[25] = tmp6;
            cResult[26] = tmp9;
            cResult[27] = tmp26;
            cResult[28] = tmp31;
            tmp29 = tmp31;
          }
        }
        const obj5 = { style: tmp8, children: tmp24 };
        const tmp28 = closure_10(tmp5, obj5);
        cResult[21] = tmp5;
        cResult[22] = tmp8;
        cResult[23] = tmp24;
        cResult[24] = tmp28;
        tmp26 = tmp28;
      }
    }
  }
  const tmp25 = closure_10(tmp4, { title: str, hasIcons: flag, children: tmp7 });
  cResult[16] = tmp4;
  cResult[17] = str;
  cResult[18] = flag;
  cResult[19] = tmp7;
  cResult[20] = tmp25;
  tmp24 = tmp25;
}) : ((pool) => {
  let BottomSheetTitleHeader;
  let TableRowGroup;
  let closure_2;
  let obj2;
  let obj3;
  let obj5;
  pool = pool.pool;
  const usersForPool = GeneratedTestUsersStore.getUsersForPool(pool.id);
  dependencyMap = AuthenticationStore.getId();
  items = [pool.id];
  let closure_3 = react.useCallback((arg0) => {
    const obj = ActionSheetActionCreatorsDefault;
    obj.hideActionSheet("generated-test-users");
    const obj2 = GeneratedTestUserActionCreators;
    obj2.loginAsGeneratedUser(pool.id, arg0);
  }, items);
  let obj = { header: closure_10(BottomSheetTitleHeader, obj2), children: closure_10(closure_6, obj3) };
  BottomSheet = pool(6645).BottomSheet;
  obj2 = { title: pool.summary, subtitle: "" + usersForPool.length + " users" };
  BottomSheetTitleHeader = pool(6644).BottomSheetTitleHeader;
  obj3 = { style: { paddingHorizontal: usersForPool(587).space.PX_12 }, children: closure_10(TableRowGroup, obj5) };
  obj5 = {
    title: "Select User to Login As",
    hasIcons: true,
    children: usersForPool.map((id, index) => {
      let tmp2Result;
      const obj = {
        icon: closure_1_10(pool(closure_2[7]).UserIcon, { size: "md" }),
        label: null,
        subLabel: null,
        onPress() {
          return closure_3(id.id);
        },
        disabled: id.id === closure_2,
        trailing: tmp2Result,
        start: 0 === index,
        end: index === usersForPool.length - 1
      };
      const TableRow = pool(closure_2[38]).TableRow;
      ({ username: obj.label, email: obj.subLabel } = id);
      tmp2Result = undefined;
      if (id.id === closure_2) {
        tmp2Result = closure_1_10(pool(closure_2[39]).CheckmarkLargeIcon, { size: "md", color: "text-feedback-positive" });
      }
      return closure_1_10(TableRow, obj, id.id);
    })
  };
  ({ paddingHorizontal: usersForPool(587).space.PX_12 });
  TableRowGroup = pool(6074).TableRowGroup;
  return closure_10(BottomSheet, obj);
});
ReactCompilerGating = ReactCompilerGating_mod;
let closure_17 = ReactCompilerGating.isReactCompilerEnabled() ? ((pool) => {
  let arr;
  let end;
  let id;
  let start;
  let summary;
  let obj = pool(576);
  const cResult = obj.c(14);
  const tmp = pool;
  pool = pool.pool;
  ({ start, end } = pool);
  ({ id, summary } = pool);
  if (cResult[0] !== id) {
    const usersForPool = GeneratedTestUsersStore.getUsersForPool(id);
    cResult[0] = id;
    cResult[1] = usersForPool;
    arr = usersForPool;
  } else {
    arr = cResult[1];
  }
  const tmp6 = items[Number(undefined, id) % items.length];
  const tmp7 = closure_13[Number(undefined, id) % closure_13.length];
  if (cResult[2] !== pool) {
    class I {
      constructor() {
        obj = closure_1(closure_2[33]);
        obj1 = { default: f70574 };
        obj4 = { pool };
        openLazyResult = obj.openLazy(Promise.resolve(obj1), "generated-test-users", obj4);
        return;
      }
    }
    cResult[2] = pool;
    cResult[3] = I;
  } else {
    class I {
      constructor() {
        obj = closure_1(closure_2[33]);
        obj1 = { default: f70574 };
        obj4 = { pool };
        openLazyResult = obj.openLazy(Promise.resolve(obj1), "generated-test-users", obj4);
        return;
      }
    }
  }
  if (cResult[4] === tmp6) {
    class I {
      constructor() {
        obj = closure_1(closure_2[33]);
        obj1 = { default: f70574 };
        obj4 = { pool };
        openLazyResult = obj.openLazy(Promise.resolve(obj1), "generated-test-users", obj4);
        return;
      }
    }
    const _HermesInternal = HermesInternal;
    const combined = "" + arr.length + " users";
    if (cResult[7] === end) {
      class I {
        constructor() {
          obj = closure_1(closure_2[33]);
          obj1 = { default: f70574 };
          obj4 = { pool };
          openLazyResult = obj.openLazy(Promise.resolve(obj1), "generated-test-users", obj4);
          return;
        }
      }
    }
    let obj2 = { icon: tmp9, label: summary, subLabel: combined, arrow: true, onPress: I, start, end };
    cResult[7] = end;
    cResult[8] = I;
    cResult[9] = start;
    cResult[10] = summary;
    cResult[11] = tmp9;
    cResult[12] = combined;
    cResult[13] = closure_10(tmp(5993).TableRow, obj2);
    const tmp14 = closure_10(tmp(5993).TableRow, obj2);
  }
  cResult[4] = tmp6;
  cResult[5] = tmp7;
  cResult[6] = closure_10(tmp6, { size: "md", color: tmp7 });
  const tmp10 = closure_10(tmp6, { size: "md", color: tmp7 });
}) : ((pool) => {
  let end;
  let start;
  pool = pool.pool;
  const id = pool.id;
  ({ start, end } = pool);
  const summary = pool.summary;
  const usersForPool = GeneratedTestUsersStore.getUsersForPool(id);
  const tmp = items[Number(undefined, id) % items.length];
  items = [pool];
  const tmp2 = closure_13[Number(undefined, id) % closure_13.length];
  const callback = react.useCallback(() => {
    const obj = ActionSheetActionCreatorsDefault;
    const obj2 = { default: closure_16 };
    const obj3 = { pool };
    obj.openLazy(Promise.resolve(obj2), "generated-test-users", obj3);
  }, items);
  let obj = { icon: closure_10(tmp, { size: "md", color: tmp2 }), label: summary, subLabel: "" + usersForPool.length + " users", arrow: true, onPress: callback, start, end };
  const TableRow = pool(5993).TableRow;
  return closure_10(TableRow, obj);
});
ReactCompilerGating = ReactCompilerGating_mod;
let tmp5 = ReactCompilerGating.isReactCompilerEnabled() ? (() => {
  let items1;
  let items2;
  let stateFromStoresArray;
  let tmp10;
  let tmp13;
  let tmp5;
  let tmp6;
  let tmp8;
  let obj = stateFromStoresArray(576);
  const cResult = obj.c(25);
  const tmp4 = closure_14();
  if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
    items = [GeneratedTestUsersStore];
    const fn = function n() {
      pools = pools.getPools();
      if (pools == null) {
        pools = [];
      }
      return pools;
    };
    cResult[0] = items;
    cResult[1] = fn;
    tmp5 = items;
    tmp6 = fn;
  } else {
    [tmp5, tmp6] = cResult;
  }
  const tmpResult = stateFromStoresArray(504);
  stateFromStoresArray = tmpResult.useStateFromStoresArray(tmp5, tmp6);
  if (cResult[2] === Symbol.for("react.memo_cache_sentinel")) {
    let obj2 = { includeKeyboardHeight: true };
    cResult[2] = obj2;
    tmp8 = obj2;
  } else {
    tmp8 = cResult[2];
  }
  const insets = useSafeAreaInsetsKeyboardAwareDefault(tmp8).insets;
  if (cResult[3] === Symbol.for("react.memo_cache_sentinel")) {
    let closure_0 = _asyncToGenerator(async (arg0, arg1) => {
      closure_0 = arg0;
      let closure_1 = arg1;
      if (c2 === 2) {
        c2 = 3;
        throw new TypeError("Generator functions may not be called on executing generators");
      } else if (tmp2 === 3) {
        if (arg0 === 1) {
          throw value;
        } else if (arg0 === 2) {
          const obj3 = { value, done: true };
          return obj3;
        } else {
          return { value: "IconComponent", done: null };
        }
      } else {
        try {
          c2 = 2;
          if (0 === c3) {
            if (arg0 === 1) {
              c2 = 3;
              throw value;
            } else if (arg0 === 2) {
              c2 = 3;
              const obj4 = { value, done: true };
              return obj4;
            } else {
              c3 = 1;
              const obj2 = closure_0(c2[34]);
              c2 = 1;
              const obj5 = { value: obj2.getGeneratedPoolById(closure_0, closure_1), done: false };
              return obj5;
            }
          } else if (arg0 === 1) {
            c2 = 3;
            throw value;
          } else if (arg0 === 2) {
            c2 = 3;
            const obj = { value, done: true };
            return obj;
          } else {
            c2 = 3;
            return { value: "IconComponent", done: null };
          }
        } catch (tmp8) {
          c2 = 3;
          throw tmp8;
        }
      }
    });
    const fn2 = function() {
      return closure_0(...arguments);
    };
    cResult[3] = fn2;
    tmp10 = fn2;
  } else {
    tmp10 = cResult[3];
  }
  const container = tmp4.container;
  const sum = nativeDefault.space.PX_16 + insets.bottom;
  if (cResult[4] !== sum) {
    let obj3 = { paddingBottom: sum };
    cResult[4] = sum;
    cResult[5] = obj3;
    tmp13 = obj3;
  } else {
    tmp13 = cResult[5];
  }
  if (cResult[6] === tmp4.contentContainer) {
    let tmp14;
    let tmp15;
    let tmp19;
    let tmp22;
    if (cResult[7] === tmp13) {
      tmp14 = cResult[8];
    }
    const _Symbol = Symbol;
    if (cResult[9] === Symbol.for("react.memo_cache_sentinel")) {
      let obj4 = { onSubmit: tmp10 };
      const tmp18 = closure_10(PoolIdInput, obj4);
      cResult[9] = tmp18;
      tmp15 = tmp18;
    } else {
      tmp15 = cResult[9];
    }
    if (cResult[10] !== stateFromStoresArray.length) {
      const tmp20 = 0 === stateFromStoresArray.length && closure_10(tmp(5993).TableRow, { label: "No pools available." });
      cResult[10] = stateFromStoresArray.length;
      cResult[11] = tmp20;
      tmp19 = tmp20;
    } else {
      tmp19 = cResult[11];
    }
    if (cResult[12] !== stateFromStoresArray) {
      let tmp23;
      if (cResult[14] !== stateFromStoresArray.length) {
        const fn3 = function x(pool, arg1) {
          const obj = { pool, start: 0 === arg1, end: arg1 === stateFromStoresArray.length - 1 };
          return authStore(closure_17, obj, pool.id);
        };
        cResult[14] = stateFromStoresArray.length;
        cResult[15] = fn3;
        tmp23 = fn3;
      } else {
        tmp23 = cResult[15];
      }
      const mapped = stateFromStoresArray.map(tmp23);
      cResult[12] = stateFromStoresArray;
      cResult[13] = mapped;
      tmp22 = mapped;
    } else {
      tmp22 = cResult[13];
    }
    if (cResult[16] === tmp22) {
      let tmp25;
      if (cResult[17] === tmp19) {
        tmp25 = cResult[18];
      }
      if (cResult[19] === tmp25) {
        let tmp28;
        if (cResult[20] === tmp14) {
          tmp28 = cResult[21];
        }
        if (cResult[22] === tmp4.container) {
          let tmp32;
          if (cResult[23] === tmp28) {
            tmp32 = cResult[24];
          }
          return tmp32;
        }
        let obj5 = { style: container, children: tmp28 };
        const tmp35 = closure_10(closure_6, obj5);
        cResult[22] = tmp4.container;
        cResult[23] = tmp28;
        cResult[24] = tmp35;
        tmp32 = tmp35;
      }
      const obj6 = { contentContainerStyle: tmp14, children: tmp25 };
      const tmp31 = closure_10(closure_7, obj6);
      cResult[19] = tmp25;
      cResult[20] = tmp14;
      cResult[21] = tmp31;
      tmp28 = tmp31;
    }
    const obj7 = { spacing: 16, children: items1 };
    items1 = [tmp15, ];
    const Stack = tmp(5593).Stack;
    const obj8 = { title: "Generated Test User Pools", hasIcons: true, children: items2 };
    items2 = [tmp19, tmp22];
    items1[1] = closure_11(stateFromStoresArray(6074).TableRowGroup, obj8);
    const tmp27 = closure_11(Stack, obj7);
    cResult[16] = tmp22;
    cResult[17] = tmp19;
    cResult[18] = tmp27;
    tmp25 = tmp27;
  }
  const items3 = [tmp4.contentContainer, tmp13];
  cResult[6] = tmp4.contentContainer;
  cResult[7] = tmp13;
  cResult[8] = items3;
  tmp14 = items3;
}) : (() => {
  let Stack;
  let items1;
  let items3;
  let obj3;
  let obj5;
  let stateFromStoresArray;
  const tmp = closure_14();
  const tmp2 = stateFromStoresArray;
  let obj = stateFromStoresArray(504);
  items = [GeneratedTestUsersStore];
  stateFromStoresArray = obj.useStateFromStoresArray(items, () => {
    pools = pools.getPools();
    if (pools == null) {
      pools = [];
    }
    return pools;
  });
  const insets = useSafeAreaInsetsKeyboardAwareDefault({ includeKeyboardHeight: true }).insets;
  const useCallback = react.useCallback;
  let closure_0 = _asyncToGenerator(async (arg0, arg1) => {
    closure_0 = arg0;
    let closure_1 = arg1;
    if (c2 === 2) {
      c2 = 3;
      throw new TypeError("Generator functions may not be called on executing generators");
    } else if (tmp2 === 3) {
      if (arg0 === 1) {
        throw value;
      } else if (arg0 === 2) {
        const obj3 = { value, done: true };
        return obj3;
      } else {
        return { value: "IconComponent", done: null };
      }
    } else {
      try {
        c2 = 2;
        if (0 === c3) {
          if (arg0 === 1) {
            c2 = 3;
            throw value;
          } else if (arg0 === 2) {
            c2 = 3;
            const obj4 = { value, done: true };
            return obj4;
          } else {
            c3 = 1;
            const obj2 = closure_0(c2[34]);
            c2 = 1;
            const obj5 = { value: obj2.getGeneratedPoolById(closure_0, closure_1), done: false };
            return obj5;
          }
        } else if (arg0 === 1) {
          c2 = 3;
          throw value;
        } else if (arg0 === 2) {
          c2 = 3;
          const obj = { value, done: true };
          return obj;
        } else {
          c2 = 3;
          return { value: "IconComponent", done: null };
        }
      } catch (tmp8) {
        c2 = 3;
        throw tmp8;
      }
    }
  });
  let obj2 = { style: tmp.container, children: closure_10(closure_7, obj3) };
  obj3 = { contentContainerStyle: items1, children: closure_11(Stack, obj5) };
  items1 = [tmp.contentContainer, ];
  let obj4 = { paddingBottom: nativeDefault.space.PX_16 + insets.bottom };
  const callback = useCallback(function() {
    return closure_0(...arguments);
  }, []);
  items1[1] = obj4;
  Stack = stateFromStoresArray(5593).Stack;
  const items2 = [closure_10(PoolIdInput, { onSubmit: callback }), ];
  let tmp5Result = 0 === stateFromStoresArray.length;
  const TableRowGroup = stateFromStoresArray(6074).TableRowGroup;
  if (tmp5Result) {
    tmp5Result = closure_10(tmp2(5993).TableRow, { label: "No pools available." });
  }
  obj5 = { spacing: 16, children: items2 };
  const obj6 = { title: "Generated Test User Pools", hasIcons: true, children: items3 };
  items3 = [
    tmp5Result,
    stateFromStoresArray.map((pool, index) => {
      const obj = { pool, start: 0 === index, end: index === stateFromStoresArray.length - 1 };
      return authStore(closure_17, obj, pool.id);
    })
  ];
  items2[1] = closure_11(TableRowGroup, obj6);
  return closure_10(closure_6, obj2);
});
const result = size.fileFinishedImporting("modules/devtools/native/components/screens/DevToolsGeneratedTestUsersScreen.tsx");

export default tmp5;