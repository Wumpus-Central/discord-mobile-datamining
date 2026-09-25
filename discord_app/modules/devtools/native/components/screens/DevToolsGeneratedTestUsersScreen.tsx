// discord_app/modules/devtools/native/components/screens/DevToolsGeneratedTestUsersScreen.tsx
import nativeDefault from "../../../../../../discord_common/js/packages/tokens/native.tsx";
import ActionSheetActionCreatorsDefault from "../../../../action_sheet/native/ActionSheetActionCreators.tsx";
import Stack_Stack from "../../../../../design/components/Stack/native/Stack.native.tsx";
import components_Button_Button from "../../../../../design/components/Button/native/Button.native.tsx";
import TextInput from "../../../../../design/components/TextInput/native/TextInput.native.tsx";
import useSafeAreaInsetsKeyboardAwareDefault from "../../../../safe_area/useSafeAreaInsetsKeyboardAware.native.tsx";
import GeneratedTestUserActionCreators from "../../../../generated_test_users/GeneratedTestUserActionCreators.tsx";
import asyncGeneratorStep from "../../../../../../_runtime/00005_asyncGeneratorStep.js";
import _slicedToArray from "../../../../../../_runtime/metro/00032__.js";
import noop from "../../../../../../_runtime/metro/00019__.js";
import GeneratedTestUsersStore from "../../../../generated_test_users/GeneratedTestUsersStore.tsx";
import AuthenticationStore from "../../../../../stores/AuthenticationStore.tsx";

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
  const callback = noop.useCallback(
    asyncGeneratorStep(async () => {
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
          return { value: "HermesInternal", done: null };
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
    }),
    items,
  );
  let obj = { spacing: 4, style: tmp.inputContainer, children: null };
  const items1 = [
    closure_1_10(TextInput.TextInput, {
      size: "md",
      placeholder: "Enter Pool ID",
      onChange: tmp2[1],
      autoCapitalize: "none",
      autoCorrect: false,
      autoComplete: "off",
      clearable: true,
    }),
    closure_1_10(TextInput.TextInput, {
      size: "md",
      secureTextEntry: true,
      placeholder: "Enter Password",
      onChange: tmp4[1],
      autoCapitalize: "none",
      autoCorrect: false,
      autoComplete: "off",
      clearable: true,
    }),
  ];
  let tmp11 = 0 === first.length;
  if (!tmp11) {
    tmp11 = 0 === first1.length;
  }
  if (!tmp11) {
    tmp11 = tmp7;
  }
  items1[2] = closure_1_10(components_Button_Button.Button, {
    size: "md",
    variant: "primary",
    text: "Get Pool",
    disabled: tmp11,
    loading: tmp7,
    onPress: callback,
  });
  obj.children = items1;
  return closure_1_11(Stack_Stack.Stack, obj);
}
function UserActionSheet(pool) {
  pool = pool.pool;
  const usersForPool = GeneratedTestUsersStore.getUsersForPool(pool.id);
  dependencyMap = AuthenticationStore.getId();
  items = [pool.id];
  closure_3 = noop.useCallback((arg0) => {
    ActionSheetActionCreatorsDefault.hideActionSheet("generated-test-users");
    GeneratedTestUserActionCreators.loginAsGeneratedUser(pool.id, arg0);
  }, items);
  let obj = {
    header: closure_10(pool(6565).BottomSheetTitleHeader, {
      title: pool.summary,
      subtitle: "" + usersForPool.length + " users",
    }),
    children: null,
  };
  const obj3 = { style: null, children: null };
  const obj2 = { title: pool.summary, subtitle: "" + usersForPool.length + " users" };
  obj3.style = { paddingHorizontal: usersForPool(576).space.PX_12 };
  const obj4 = { paddingHorizontal: usersForPool(576).space.PX_12 };
  obj3.children = closure_10(pool(5994).TableRowGroup, {
    title: "Select User to Login As",
    hasIcons: true,
    children: usersForPool.map((id, index) => {
      const obj = {
        icon: closure_1_10(pool(11289).UserIcon, { size: "md" }),
        label: null,
        subLabel: null,
        onPress() {
          return closure_3(id.id);
        },
        disabled: id.id === dependencyMap,
        trailing: null,
        start: null,
        end: null,
      };
      ({ username: obj.label, email: obj.subLabel } = id);
      let tmp2Result;
      if (id.id === dependencyMap) {
        tmp2Result = closure_1_10(pool(4779).CheckmarkLargeIcon, { size: "md", color: "text-feedback-positive" });
      }
      obj.trailing = tmp2Result;
      obj.start = 0 === index;
      obj.end = index === usersForPool.length - 1;
      return closure_1_10(pool(5912).TableRow, obj, id.id);
    }),
  });
  obj.children = closure_10(closure_6, obj3);
  return closure_10(pool(6566).BottomSheet, obj);
}
function PoolUsers(pool) {
  pool = pool.pool;
  const id = pool.id;
  ({ start, end } = pool);
  const usersForPool = GeneratedTestUsersStore.getUsersForPool(id);
  items = [pool];
  const callback = noop.useCallback(() => {
    ActionSheetActionCreatorsDefault.openLazy(Promise.resolve({ default: UserActionSheet }), "generated-test-users", {
      pool,
    });
  }, items);
  return closure_10(pool(5912).TableRow, {
    icon: closure_10(items[Number(undefined, id) % items.length], {
      size: "md",
      color: length[Number(undefined, id) % length.length],
    }),
    label: pool.summary,
    subLabel: "" + usersForPool.length + " users",
    arrow: true,
    onPress: callback,
    start,
    end,
  });
}
get_ActivityIndicator = fn(17);
({ View: metroRequire, ScrollView: closure_7 } = get_ActivityIndicator);
const jsxProd = fn(21);
({ jsx: c10, jsxs: closure_11 } = jsxProd);
let items = [
  fn(11289).UserIcon,
  fn(8697).ShieldIcon,
  fn(10485).GiftIcon,
  fn(15119).AchievementsIcon,
  fn(11389).PiggyBankIcon,
  fn(15121).TreehouseIcon,
  fn(9404).SpeedometerIcon,
  fn(15123).CompassIcon,
  fn(13369).SignPostIcon,
  fn(15125).CarIcon,
  fn(15127).TrainIcon,
  fn(15129).TeacupIcon,
  fn(15131).InventoryIcon,
  fn(9802).FoodIcon,
  fn(15133).BurgerIcon,
  fn(15135).MagicDoorIcon,
  fn(15137).PawPrintIcon,
  fn(15139).RecordPlayerIcon,
  fn(6793).SettingsIcon,
];
const createStyles = fn(4829);
let obj2 = {
  container: { backgroundColor: nativeDefault.colors.BACKGROUND_BASE_LOW, flex: 1 },
  contentContainer: null,
  inputContainer: null,
};
let obj3 = { backgroundColor: nativeDefault.colors.BACKGROUND_BASE_LOW, flex: 1 };
obj2.contentContainer = { padding: nativeDefault.space.PX_16 };
let obj4 = { padding: nativeDefault.space.PX_16 };
obj2.inputContainer = { marginBottom: nativeDefault.space.PX_16 };
let closure_14 = createStyles.createStyles(obj2);
const size = fn(2);
const result = size.fileFinishedImporting(
  "modules/devtools/native/components/screens/DevToolsGeneratedTestUsersScreen.tsx",
);

export default function DevToolsGeneratedTestUsersScreen() {
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
        return { value: "HermesInternal", done: null };
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
            const obj5 = {
              value: stateFromStoresArray(c2[32]).getGeneratedPoolById(stateFromStoresArray, closure_1),
              done: false,
            };
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
          return { value: "HermesInternal", done: null };
        }
      } catch (tmp9) {
        c2 = tmp;
        throw tmp9;
      }
    }
  });
  const obj2 = { style: tmp.container, children: null };
  let obj3 = { contentContainerStyle: null, children: null };
  const items1 = [tmp.contentContainer];
  let obj4 = { paddingBottom: null };
  const callback = noop.useCallback(function () {
    const self = this;
    const apply = stateFromStoresArray.apply;
    if (typeof apply === "unknown") {
      let applyArgumentsResult = HermesBuiltin.applyArguments(self);
    } else {
      applyArgumentsResult = apply(self, arguments);
    }
    return applyArgumentsResult;
  }, []);
  obj4.paddingBottom =
    nativeDefault.space.PX_16 + useSafeAreaInsetsKeyboardAwareDefault({ includeKeyboardHeight: true }).insets.bottom;
  items1[1] = obj4;
  obj3.contentContainerStyle = items1;
  const items2 = [closure_10(PoolIdInput, { onSubmit: callback })];
  let tmp5Result = 0 === stateFromStoresArray.length;
  if (tmp5Result) {
    tmp5Result = closure_10(stateFromStoresArray(5912).TableRow, { label: "No pools available." });
  }
  let obj5 = { spacing: 16, children: null };
  const obj6 = { title: "Generated Test User Pools", hasIcons: true, children: null };
  const items3 = [
    tmp5Result,
    stateFromStoresArray.map((pool, index) =>
      closure_2_10(PoolUsers, { pool, start: 0 === index, end: index === stateFromStoresArray.length - 1 }, pool.id),
    ),
  ];
  obj6.children = items3;
  items2[1] = closure_11(stateFromStoresArray(5994).TableRowGroup, obj6);
  obj5.children = items2;
  obj3.children = closure_11(stateFromStoresArray(5272).Stack, obj5);
  obj2.children = closure_10(closure_7, obj3);
  return closure_10(closure_6, obj2);
}
