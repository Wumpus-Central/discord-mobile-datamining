// === Module 15695: DevToolsGeneratedTestUsersScreen ===

// Module 15695 (DevToolsGeneratedTestUsersScreen)
import nativeDefault from "native" /* 587 */;
import ActionSheetActionCreatorsDefault from "ActionSheetActionCreators" /* 5054 */;
import Stack_Stack from "Stack/Stack" /* 5373 */;
import components_Button_Button from "components/Button/Button" /* 5375 */;
import TextInput from "TextInput" /* 6283 */;
import useSafeAreaInsetsKeyboardAwareDefault from "useSafeAreaInsetsKeyboardAware" /* 6656 */;
import GeneratedTestUserActionCreators from "GeneratedTestUserActionCreators" /* 15719 */;
import asyncGeneratorStep from "asyncGeneratorStep" /* 5 */;
import _slicedToArray from "module_32" /* 32 */;
import noop from "module_19" /* 19 */;
import GeneratedTestUsersStore from "GeneratedTestUsersStore" /* 15696 */;
import AuthenticationStore from "AuthenticationStore" /* 502 */;

require = fn;
function PoolIdInput(onSubmit) {
  onSubmit = onSubmit.onSubmit;
  c5 = undefined;
  const tmp2 = _slicedToArray(noop.useState(""), 2);
  const first = tmp2[0];
  closure_2 = tmp3;
  const tmp4 = _slicedToArray(noop.useState(""), 2);
  const first1 = tmp4[0];
  closure_4 = tmp5;
  const tmp = closure_14();
  [tmp7, c5] = noop.useState(false);
  items = [first, first1, onSubmit];
  const callback = noop.useCallback(asyncGeneratorStep(async () => {
    if (c4 === 2) {
      c4 = 3;
      throw new TypeError("Generator functions may not be called on executing generators");
    } else if (tmp6 === 3) {
      if (arg0 === 1) {
        throw value;
      } else if (arg0 === 2) {
        const obj2 = { value, done: true };
        return obj2;
      } else {
        return { value: "IconComponent", done: null };
      }
    } else {
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
            closure_0 = tmp3;
            if (0 !== first.length) {
              _undefined(true);
              c3 = 1;
              c1 = 2;
              c4 = 1;
              const obj4 = { value: onSubmit(tmp24, first1), done: false };
              return obj4;
            } else {
              c4 = 3;
            }
          }
        } else if (1 === tmp7) {
          c3 = 0;
          closure_128_5(false);
          throw closure_2;
        } else if (arg0 === 1) {
          c4 = 3;
          throw value;
        } else if (arg0 !== 2) {
          closure_128_2("");
          closure_128_4("");
          c3 = 0;
          closure_128_5(false);
        }
        c3 = 0;
        closure_128_5(false);
        c4 = 3;
        const obj = { value, done: true };
        return obj;
      } catch (tmp29) {
        closure_2 = tmp29;
        if (tmp4 === c3) {
          c4 = tmp2;
          throw tmp29;
        } else {
          c1 = tmp;
        }
      }
    }
  }), items);
  let obj = { spacing: 4, style: tmp.inputContainer, children: null };
  const items1 = [collapsed(TextInput.TextInput, { size: "md", placeholder: "Enter Pool ID", onChange: tmp2[1], autoCapitalize: "none", autoCorrect: false, autoComplete: "off", clearable: true }), collapsed(TextInput.TextInput, { size: "md", secureTextEntry: true, placeholder: "Enter Password", onChange: tmp4[1], autoCapitalize: "none", autoCorrect: false, autoComplete: "off", clearable: true }), ];
  let tmp11 = 0 === first.length;
  if (!tmp11) {
    tmp11 = 0 === first1.length;
  }
  if (!tmp11) {
    tmp11 = tmp7;
  }
  items1[2] = collapsed(components_Button_Button.Button, { size: "md", variant: "primary", text: "Get Pool", disabled: tmp11, loading: tmp7, onPress: callback });
  obj.children = items1;
  return closure_1_11(Stack_Stack.Stack, obj);
}
get_ActivityIndicator = fn(17);
({ View: metroRequire, ScrollView: closure_7 } = get_ActivityIndicator);
const jsxProd = fn(21);
({ jsx: c10, jsxs: closure_11 } = jsxProd);
let items = [fn(11431).UserIcon, fn(10386).ShieldIcon, fn(11561).GiftIcon, fn(15697).AchievementsIcon, fn(11562).PiggyBankIcon, fn(15699).TreehouseIcon, fn(10846).SpeedometerIcon, fn(15701).CompassIcon, fn(13892).SignPostIcon, fn(15703).CarIcon, fn(15705).TrainIcon, fn(15707).TeacupIcon, fn(15709).InventoryIcon, fn(9501).FoodIcon, fn(15711).BurgerIcon, fn(15713).MagicDoorIcon, fn(15715).PawPrintIcon, fn(15717).RecordPlayerIcon, fn(7082).SettingsIcon];
let closure_13 = ["text-default", "text-feedback-positive", "text-feedback-warning", "text-feedback-critical", "text-link", "text-brand"];
const createStyles = fn(5090);
let obj2 = { container: { backgroundColor: nativeDefault.colors.BACKGROUND_BASE_LOW, flex: 1 }, contentContainer: null, inputContainer: null };
let obj3 = { backgroundColor: nativeDefault.colors.BACKGROUND_BASE_LOW, flex: 1 };
obj2.contentContainer = { padding: nativeDefault.space.PX_16 };
let obj4 = { padding: nativeDefault.space.PX_16 };
obj2.inputContainer = { marginBottom: nativeDefault.space.PX_16 };
let closure_14 = createStyles.createStyles(obj2);
let ReactCompilerGating = fn(558);
let closure_16 = ReactCompilerGating.isReactCompilerEnabled() ? (function UserActionSheet(pool) {
  let map = str;
  let TableRowGroup = dependencyMap;
  const cResult = str(576).c(29);
  str = pool.pool;
  if (cResult[0] !== str) {
    const usersForPool = GeneratedTestUsersStore.getUsersForPool(str.id);
    const _Symbol = Symbol;
    if (cResult[9] === Symbol.for("react.memo_cache_sentinel")) {
      const id = AuthenticationStore.getId();
      cResult[9] = id;
      let tmp12 = id;
    } else {
      tmp12 = cResult[9];
    }
    dependencyMap = tmp12;
    if (cResult[10] !== str.id) {
      const fn = function k(arg0) {
        ActionSheetActionCreatorsDefault.hideActionSheet("generated-test-users");
        GeneratedTestUserActionCreators.loginAsGeneratedUser(str.id, arg0);
      };
      cResult[10] = str.id;
      cResult[11] = fn;
      let tmp15 = fn;
    } else {
      tmp15 = cResult[11];
    }
    closure_3 = tmp15;
    BottomSheet = map(6829).BottomSheet;
    const _HermesInternal = HermesInternal;
    const combined = "" + usersForPool.length + " users";
    if (cResult[12] === str.summary) {
      if (cResult[13] === combined) {
        let tmp17 = cResult[14];
      }
      const _Symbol2 = Symbol;
      if (cResult[15] === Symbol.for("react.memo_cache_sentinel")) {
        const obj2 = { paddingHorizontal: usersForPool(587).space.PX_12 };
        cResult[15] = obj2;
        let tmp21 = obj2;
      } else {
        tmp21 = cResult[15];
      }
      TableRowGroup = map(6267).TableRowGroup;
      map = usersForPool.map;
      const mapped = map((id, arg1) => {
        const obj = {
          icon: closure_1_10(str(11431).UserIcon, { size: "md" }),
          label: null,
          subLabel: null,
          onPress() {
            return closure_3(id.id);
          },
          disabled: id.id === dependencyMap,
          trailing: null,
          start: null,
          end: null
        };
        ({ username: obj.label, email: obj.subLabel } = id);
        let tmp2Result;
        if (id.id === dependencyMap) {
          tmp2Result = closure_1_10(str(4775).CheckmarkLargeIcon, { size: "md", color: "text-feedback-positive" });
        }
        obj.trailing = tmp2Result;
        obj.start = 0 === arg1;
        obj.end = arg1 === usersForPool.length - 1;
        return closure_1_10(str(6184).TableRow, obj, id.id);
      });
      cResult[0] = str;
      cResult[1] = TableRowGroup;
      cResult[2] = closure_6;
      cResult[3] = BottomSheet;
      str = "Select User to Login As";
      cResult[4] = "Select User to Login As";
      cResult[5] = true;
      cResult[6] = mapped;
      cResult[7] = tmp21;
      cResult[8] = tmp17;
    }
    const obj3 = { title: str.summary, subtitle: combined };
    const tmp19 = closure_10(map(6828).BottomSheetTitleHeader, obj3);
    cResult[12] = str.summary;
    cResult[13] = combined;
    cResult[14] = tmp19;
    tmp17 = tmp19;
  } else {
    if (cResult[16] === cResult[1]) {
      if (cResult[17] === tmp5) {
        if (cResult[18] === tmp6) {
          if (cResult[19] === tmp7) {
            let tmp30 = cResult[20];
          }
          if (cResult[21] === tmp3) {
            if (cResult[22] === tmp8) {
              if (cResult[23] === tmp30) {
                let tmp33 = cResult[24];
              }
              if (cResult[25] === tmp4) {
                if (cResult[26] === tmp9) {
                  if (cResult[27] === tmp33) {
                    let tmp36 = cResult[28];
                  }
                  return tmp36;
                }
              }
              const obj4 = { header: tmp9, children: tmp33 };
              const tmp38 = closure_10(tmp4, obj4);
              cResult[25] = tmp4;
              cResult[26] = tmp9;
              cResult[27] = tmp33;
              cResult[28] = tmp38;
              tmp36 = tmp38;
            }
          }
          const obj5 = { style: tmp8, children: tmp30 };
          const tmp35 = closure_10(tmp3, obj5);
          cResult[21] = tmp3;
          cResult[22] = tmp8;
          cResult[23] = tmp30;
          cResult[24] = tmp35;
          tmp33 = tmp35;
        }
      }
    }
    const obj6 = { title: cResult[4], hasIcons: cResult[5], children: cResult[6] };
    const tmp32 = closure_10(cResult[1], obj6);
    cResult[16] = cResult[1];
    cResult[17] = cResult[4];
    cResult[18] = cResult[5];
    cResult[19] = cResult[6];
    cResult[20] = tmp32;
    tmp30 = tmp32;
  }
  let obj = str(576);
}) : (function UserActionSheet(pool) {
  pool = pool.pool;
  const usersForPool = GeneratedTestUsersStore.getUsersForPool(pool.id);
  dependencyMap = AuthenticationStore.getId();
  items = [pool.id];
  closure_3 = noop.useCallback((arg0) => {
    ActionSheetActionCreatorsDefault.hideActionSheet("generated-test-users");
    GeneratedTestUserActionCreators.loginAsGeneratedUser(pool.id, arg0);
  }, items);
  let obj = { header: closure_10(pool(6828).BottomSheetTitleHeader, { title: pool.summary, subtitle: "" + usersForPool.length + " users" }), children: null };
  const obj3 = { style: null, children: null };
  const obj2 = { title: pool.summary, subtitle: "" + usersForPool.length + " users" };
  obj3.style = { paddingHorizontal: usersForPool(587).space.PX_12 };
  const obj4 = { paddingHorizontal: usersForPool(587).space.PX_12 };
  obj3.children = closure_10(pool(6267).TableRowGroup, {
    title: "Select User to Login As",
    hasIcons: true,
    children: usersForPool.map((id, index) => {
      const obj = {
        icon: closure_1_10(pool(11431).UserIcon, { size: "md" }),
        label: null,
        subLabel: null,
        onPress() {
          return closure_3(id.id);
        },
        disabled: id.id === dependencyMap,
        trailing: null,
        start: null,
        end: null
      };
      ({ username: obj.label, email: obj.subLabel } = id);
      let tmp2Result;
      if (id.id === dependencyMap) {
        tmp2Result = closure_1_10(pool(4775).CheckmarkLargeIcon, { size: "md", color: "text-feedback-positive" });
      }
      obj.trailing = tmp2Result;
      obj.start = 0 === index;
      obj.end = index === usersForPool.length - 1;
      return closure_1_10(pool(6184).TableRow, obj, id.id);
    })
  });
  obj.children = closure_10(closure_6, obj3);
  return closure_10(pool(6829).BottomSheet, obj);
});
ReactCompilerGating = fn(558);
let closure_17 = ReactCompilerGating.isReactCompilerEnabled() ? (function PoolUsers(pool) {
  const cResult = pool(576).c(14);
  pool = pool.pool;
  ({ start, end } = pool);
  ({ id, summary } = pool);
  if (cResult[0] !== id) {
    const usersForPool = GeneratedTestUsersStore.getUsersForPool(id);
    cResult[0] = id;
    cResult[1] = usersForPool;
    let arr = usersForPool;
  } else {
    arr = cResult[1];
  }
  const tmp6 = items[Number(undefined, id) % items.length];
  const tmp7 = closure_13[Number(undefined, id) % closure_13.length];
  if (cResult[2] !== pool) {
    class I {
      constructor() {
        obj = closure_1(closure_2[33]);
        obj1 = { default: UserActionSheet };
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
        obj1 = { default: UserActionSheet };
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
        obj1 = { default: UserActionSheet };
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
          obj1 = { default: UserActionSheet };
          obj4 = { pool };
          openLazyResult = obj.openLazy(Promise.resolve(obj1), "generated-test-users", obj4);
          return;
        }
      }
    }
    const obj2 = { icon: tmp9, label: summary, subLabel: combined, arrow: true, onPress: I, start, end };
    const tmp14 = closure_10(tmp(6184).TableRow, obj2);
    cResult[7] = end;
    cResult[8] = I;
    cResult[9] = start;
    cResult[10] = summary;
    cResult[11] = tmp9;
    cResult[12] = combined;
    cResult[13] = tmp14;
  }
  const tmp10 = closure_10(tmp6, { size: "md", color: tmp7 });
  cResult[4] = tmp6;
  cResult[5] = tmp7;
  cResult[6] = tmp10;
  const obj = pool(576);
  tmp = pool;
}) : (function PoolUsers(pool) {
  pool = pool.pool;
  const id = pool.id;
  ({ start, end } = pool);
  const usersForPool = GeneratedTestUsersStore.getUsersForPool(id);
  items = [pool];
  const callback = noop.useCallback(() => {
    ActionSheetActionCreatorsDefault.openLazy(Promise.resolve({ default: closure_16 }), "generated-test-users", { pool });
  }, items);
  return closure_10(pool(6184).TableRow, { icon: closure_10(items[Number(undefined, id) % items.length], { size: "md", color: closure_13[Number(undefined, id) % closure_13.length] }), label: pool.summary, subLabel: "" + usersForPool.length + " users", arrow: true, onPress: callback, start, end });
});
ReactCompilerGating = fn(558);
let obj5 = { marginBottom: nativeDefault.space.PX_16 };
const size = fn(2);
const result = size.fileFinishedImporting("modules/devtools/native/components/screens/DevToolsGeneratedTestUsersScreen.tsx");

export default ReactCompilerGating.isReactCompilerEnabled() ? (function DevToolsGeneratedTestUsersScreen() {
  const cResult = stateFromStoresArray(576).c(25);
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
  let obj = stateFromStoresArray(576);
  stateFromStoresArray = stateFromStoresArray(504).useStateFromStoresArray(tmp5, tmp6);
  if (cResult[2] === Symbol.for("react.memo_cache_sentinel")) {
    const obj2 = { includeKeyboardHeight: true };
    cResult[2] = obj2;
    let tmp8 = obj2;
  } else {
    tmp8 = cResult[2];
  }
  if (cResult[3] === Symbol.for("react.memo_cache_sentinel")) {
    closure_129_0 = asyncGeneratorStep(async (arg0, arg1) => {
      if (c2 === 2) {
        c2 = 3;
        throw new TypeError("Generator functions may not be called on executing generators");
      } else if (tmp3 === 3) {
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
              c2 = 1;
              const obj5 = { value: stateFromStoresArray(c2[34]).getGeneratedPoolById(stateFromStoresArray, closure_1), done: false };
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
        } catch (tmp9) {
          c2 = tmp;
          throw tmp9;
        }
      }
    });
    function t3() {
      const self = this;
      const apply = stateFromStoresArray.apply;
      if (typeof apply === "unknown") {
        let applyArgumentsResult = HermesBuiltin.applyArguments(self);
      } else {
        applyArgumentsResult = apply(self, arguments);
      }
      return applyArgumentsResult;
    }
    cResult[3] = t3;
    let tmp10 = t3;
  } else {
    tmp10 = cResult[3];
  }
  const sum = nativeDefault.space.PX_16 + useSafeAreaInsetsKeyboardAwareDefault(tmp8).insets.bottom;
  if (cResult[4] !== sum) {
    let obj3 = { paddingBottom: sum };
    cResult[4] = sum;
    cResult[5] = obj3;
    let tmp13 = obj3;
  } else {
    tmp13 = cResult[5];
  }
  if (cResult[6] === tmp4.contentContainer) {
    if (cResult[7] === tmp13) {
      let tmp14 = cResult[8];
    }
    const _Symbol = Symbol;
    if (cResult[9] === Symbol.for("react.memo_cache_sentinel")) {
      let obj4 = { onSubmit: tmp10 };
      const tmp18 = closure_10(PoolIdInput, obj4);
      cResult[9] = tmp18;
      let tmp15 = tmp18;
    } else {
      tmp15 = cResult[9];
    }
    if (cResult[10] !== stateFromStoresArray.length) {
      let tmp20 = 0 === stateFromStoresArray.length;
      if (tmp20) {
        tmp20 = closure_10(tmp(6184).TableRow, { label: "No pools available." });
      }
      cResult[10] = stateFromStoresArray.length;
      cResult[11] = tmp20;
      let tmp19 = tmp20;
    } else {
      tmp19 = cResult[11];
    }
    if (cResult[12] !== stateFromStoresArray) {
      if (cResult[14] !== stateFromStoresArray.length) {
        const fn2 = function w(pool, arg1) {
          return collapsed(closure_17, { pool, start: 0 === arg1, end: arg1 === stateFromStoresArray.length - 1 }, pool.id);
        };
        cResult[14] = stateFromStoresArray.length;
        cResult[15] = fn2;
        let tmp23 = fn2;
      } else {
        tmp23 = cResult[15];
      }
      const mapped = stateFromStoresArray.map(tmp23);
      cResult[12] = stateFromStoresArray;
      cResult[13] = mapped;
    } else {
      if (cResult[16] === cResult[13]) {
        if (cResult[17] === tmp19) {
          let tmp26 = cResult[18];
        }
        if (cResult[19] === tmp26) {
          if (cResult[20] === tmp14) {
            let tmp29 = cResult[21];
          }
          if (cResult[22] === tmp4.container) {
            if (cResult[23] === tmp29) {
              let tmp33 = cResult[24];
            }
            return tmp33;
          }
          let obj5 = { style: tmp4.container, children: tmp29 };
          const tmp36 = closure_10(closure_6, obj5);
          cResult[22] = tmp4.container;
          cResult[23] = tmp29;
          cResult[24] = tmp36;
          tmp33 = tmp36;
        }
        const obj6 = { contentContainerStyle: tmp14, children: tmp26 };
        const tmp32 = closure_10(closure_7, obj6);
        cResult[19] = tmp26;
        cResult[20] = tmp14;
        cResult[21] = tmp32;
        tmp29 = tmp32;
      }
      const obj7 = { spacing: 16, children: null };
      const items1 = [tmp15, ];
      const obj8 = { title: "Generated Test User Pools", hasIcons: true, children: null };
      const items2 = [tmp19, cResult[13]];
      obj8.children = items2;
      items1[1] = closure_11(tmp(6267).TableRowGroup, obj8);
      obj7.children = items1;
      const tmp28 = closure_11(tmp(5373).Stack, obj7);
      cResult[16] = cResult[13];
      cResult[17] = tmp19;
      cResult[18] = tmp28;
      tmp26 = tmp28;
    }
  }
  const items3 = [tmp4.contentContainer, tmp13];
  cResult[6] = tmp4.contentContainer;
  cResult[7] = tmp13;
  cResult[8] = items3;
  tmp14 = items3;
  const tmpResult = stateFromStoresArray(504);
}) : (function DevToolsGeneratedTestUsersScreen() {
  const tmp = closure_14();
  items = [GeneratedTestUsersStore];
  stateFromStoresArray = stateFromStoresArray(504).useStateFromStoresArray(items, () => {
    pools = pools.getPools();
    if (pools == null) {
      pools = [];
    }
    return pools;
  });
  closure_129_0 = asyncGeneratorStep(async (arg0, arg1) => {
    if (c2 === 2) {
      c2 = 3;
      throw new TypeError("Generator functions may not be called on executing generators");
    } else if (tmp3 === 3) {
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
            c2 = 1;
            const obj5 = { value: stateFromStoresArray(c2[34]).getGeneratedPoolById(stateFromStoresArray, closure_1), done: false };
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
      } catch (tmp9) {
        c2 = tmp;
        throw tmp9;
      }
    }
  });
  const obj2 = { style: tmp.container, children: null };
  let obj3 = { contentContainerStyle: null, children: null };
  const items1 = [tmp.contentContainer, ];
  let obj4 = { paddingBottom: null };
  const callback = noop.useCallback(function() {
    const self = this;
    const apply = stateFromStoresArray.apply;
    if (typeof apply === "unknown") {
      let applyArgumentsResult = HermesBuiltin.applyArguments(self);
    } else {
      applyArgumentsResult = apply(self, arguments);
    }
    return applyArgumentsResult;
  }, []);
  obj4.paddingBottom = nativeDefault.space.PX_16 + useSafeAreaInsetsKeyboardAwareDefault({ includeKeyboardHeight: true }).insets.bottom;
  items1[1] = obj4;
  obj3.contentContainerStyle = items1;
  const items2 = [closure_10(PoolIdInput, { onSubmit: callback }), ];
  let tmp5Result = 0 === stateFromStoresArray.length;
  if (tmp5Result) {
    tmp5Result = closure_10(stateFromStoresArray(6184).TableRow, { label: "No pools available." });
  }
  let obj5 = { spacing: 16, children: null };
  const obj6 = { title: "Generated Test User Pools", hasIcons: true, children: null };
  const items3 = [tmp5Result, stateFromStoresArray.map((pool, index) => collapsed(closure_17, { pool, start: 0 === index, end: index === stateFromStoresArray.length - 1 }, pool.id))];
  obj6.children = items3;
  items2[1] = closure_11(stateFromStoresArray(6267).TableRowGroup, obj6);
  obj5.children = items2;
  obj3.children = closure_11(stateFromStoresArray(5373).Stack, obj5);
  obj2.children = closure_10(closure_7, obj3);
  return closure_10(closure_6, obj2);
});