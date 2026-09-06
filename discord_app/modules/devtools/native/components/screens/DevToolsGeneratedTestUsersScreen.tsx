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
  [tmp7, c5] = _slicedToArray(noop.useState(false), 2);
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
          let obj = { value, done: true };
          return obj;
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
              obj = { value, done: true };
              return obj;
            } else {
              closure_0 = tmp3;
              if (0 !== first.length) {
                _undefined(true);
                c3 = 1;
                c1 = 2;
                c4 = 1;
                const obj1 = { value: onSubmit(tmp24, first1), done: false };
                return obj1;
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
          obj = { value, done: true };
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
      isClearable: true,
    }),
    closure_1_10(TextInput.TextInput, {
      size: "md",
      secureTextEntry: true,
      placeholder: "Enter Password",
      onChange: tmp4[1],
      autoCapitalize: "none",
      autoCorrect: false,
      autoComplete: "off",
      isClearable: true,
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
  let obj = { header: null, children: null };
  obj = { title: pool.summary, subtitle: "" + usersForPool.length + " users" };
  obj.header = closure_10(pool(7149).BottomSheetTitleHeader, obj);
  obj = { style: { paddingHorizontal: usersForPool(576).space.PX_12 }, children: null };
  const obj1 = { paddingHorizontal: usersForPool(576).space.PX_12 };
  obj.children = closure_10(pool(5687).TableRowGroup, {
    title: "Select User to Login As",
    hasIcons: true,
    children: usersForPool.map((id, index) => {
      const obj = {
        icon: closure_1_10(pool(11825).UserIcon, { size: "md" }),
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
        tmp2Result = closure_1_10(pool(4511).CheckmarkLargeIcon, { size: "md", color: "text-feedback-positive" });
      }
      obj.trailing = tmp2Result;
      obj.start = 0 === index;
      obj.end = index === usersForPool.length - 1;
      return closure_1_10(pool(5605).TableRow, obj, id.id);
    }),
  });
  obj.children = closure_10(closure_6, obj);
  return closure_10(pool(7150).BottomSheet, obj);
}
function PoolUsers(pool) {
  pool = pool.pool;
  const id = pool.id;
  ({ start, end } = pool);
  const usersForPool = GeneratedTestUsersStore.getUsersForPool(id);
  items = [pool];
  const callback = noop.useCallback(() => {
    let obj = { default: UserActionSheet };
    obj = { pool };
    obj.openLazy(Promise.resolve(obj), "generated-test-users", obj);
  }, items);
  return closure_10(pool(5605).TableRow, {
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
  fn(11825).UserIcon,
  fn(9402).ShieldIcon,
  fn(11030).GiftIcon,
  fn(15589).AchievementsIcon,
  fn(11924).PiggyBankIcon,
  fn(15591).TreehouseIcon,
  fn(9959).SpeedometerIcon,
  fn(15593).CompassIcon,
  fn(13841).SignPostIcon,
  fn(15595).CarIcon,
  fn(15597).TrainIcon,
  fn(15599).TeacupIcon,
  fn(15601).InventoryIcon,
  fn(10352).FoodIcon,
  fn(15603).BurgerIcon,
  fn(15605).MagicDoorIcon,
  fn(15607).PawPrintIcon,
  fn(15609).RecordPlayerIcon,
  fn(7380).SettingsIcon,
];
fn(4560);
let createStyles = { container: null, contentContainer: null, inputContainer: null };
createStyles = { backgroundColor: nativeDefault.colors.BACKGROUND_BASE_LOW, flex: 1 };
createStyles.container = createStyles;
createStyles.contentContainer = { padding: nativeDefault.space.PX_16 };
let obj1 = { padding: nativeDefault.space.PX_16 };
createStyles.inputContainer = { marginBottom: nativeDefault.space.PX_16 };
let closure_14 = createStyles.createStyles(createStyles);
const size = fn(2);
const result = size.fileFinishedImporting(
  "modules/devtools/native/components/screens/DevToolsGeneratedTestUsersScreen.tsx",
);

export default function DevToolsGeneratedTestUsersScreen() {
  const tmp = closure_14();
  let obj = stateFromStoresArray(504);
  items = [GeneratedTestUsersStore];
  stateFromStoresArray = obj.useStateFromStoresArray(items, () => {
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
        let obj = { value, done: true };
        return obj;
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
            obj = { value, done: true };
            return obj;
          } else {
            let obj1 = stateFromStoresArray(c2[32]);
            c3 = 1;
            c2 = 1;
            obj1 = { value: null, done: false };
            obj1.value = obj1.getGeneratedPoolById(stateFromStoresArray, closure_1);
            return obj1;
          }
        } else if (arg0 === 1) {
          c2 = 3;
          throw value;
        } else if (arg0 === 2) {
          c2 = 3;
          obj = { value, done: true };
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
  obj = { style: tmp.container, children: null };
  obj = { contentContainerStyle: null, children: null };
  const items1 = [tmp.contentContainer];
  let obj1 = { paddingBottom: null };
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
  obj1.paddingBottom =
    nativeDefault.space.PX_16 + useSafeAreaInsetsKeyboardAwareDefault({ includeKeyboardHeight: true }).insets.bottom;
  items1[1] = obj1;
  obj.contentContainerStyle = items1;
  const items2 = [closure_10(PoolIdInput, { onSubmit: callback })];
  let tmp5Result = 0 === stateFromStoresArray.length;
  if (tmp5Result) {
    tmp5Result = closure_10(stateFromStoresArray(5605).TableRow, { label: "No pools available." });
  }
  const obj2 = { spacing: 16, children: null };
  const obj3 = { title: "Generated Test User Pools", hasIcons: true, children: null };
  const items3 = [
    tmp5Result,
    stateFromStoresArray.map((pool, index) =>
      closure_2_10(PoolUsers, { pool, start: 0 === index, end: index === stateFromStoresArray.length - 1 }, pool.id),
    ),
  ];
  obj3.children = items3;
  items2[1] = closure_11(stateFromStoresArray(5687).TableRowGroup, obj3);
  obj2.children = items2;
  obj.children = closure_11(stateFromStoresArray(4973).Stack, obj2);
  obj.children = closure_10(closure_7, obj);
  return closure_10(closure_6, obj);
}
