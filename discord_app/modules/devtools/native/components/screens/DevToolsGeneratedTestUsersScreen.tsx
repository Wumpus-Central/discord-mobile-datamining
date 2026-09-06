// === Module 15587: PoolIdInput ===

// Module 15587 (PoolIdInput)
import ThemesDefault from "Themes" /* 576 */;
import useSafeAreaInsetsKeyboardAwareDefault from "useSafeAreaInsetsKeyboardAware" /* 6981 */;
import closure_3 from "asyncGeneratorStep" /* 5 */;
import closure_4 from "_slicedToArray" /* 32 */;
import closure_5 from "noop" /* 19 */;
import get_ActivityIndicator from "get ActivityIndicator" /* 17 */;
import closure_8 from "handleAddUser" /* 15588 */;
import closure_9 from "fetchFingerprint" /* 502 */;
import jsxProd from "jsxProd" /* 21 */;
import createCacheKey from "createCacheKey" /* 4560 */;

const require = arg1;
function PoolIdInput(onSubmit) {
  onSubmit = onSubmit.onSubmit;
  let first;
  dependencyMap = undefined;
  let first1;
  let callback2;
  let React;
  const tmp2 = callback2(React.useState(""), 2);
  first = tmp2[0];
  dependencyMap = tmp3;
  const tmp4 = callback2(React.useState(""), 2);
  first1 = tmp4[0];
  callback2 = tmp5;
  const tmp = callback4();
  [tmp7, c5] = callback2(React.useState(false), 2);
  items = [first, first1, onSubmit];
  let callback = React.useCallback(first1(function*() {
    if (v0 === 2) {
      v0 = 3;
      HermesBuiltin.throwTypeError();
    } else if (tmp6 === 3) {
      if (arg0 === 1) {
        throw arg1;
      } else if (arg0 === 2) {
        let obj = { value: null, done: true };
        obj[0] = arg1;
        return obj;
      } else {
        return { value: "HermesInternal", done: null };
      }
    } else {
      try {
        v0 = 2;
        if (0 === length) {
          if (arg0 === 1) {
            v0 = 3;
            throw arg1;
          } else if (arg0 === 2) {
            v0 = 3;
            obj = { value: null, done: true };
            obj[0] = arg1;
            return obj;
          } else {
            closure_0 = tmp3;
            if (0 !== length.length) {
              closure_1_5(true);
              c3 = 1;
              length = 2;
              v0 = 1;
              obj1 = { value: null, done: false };
              obj1[0] = closure_1_0(tmp24, c3);
              return obj1;
            } else {
              v0 = 3;
            }
          }
        } else if (1 === tmp7) {
          c3 = 0;
          callback2(false);
          throw callback;
        } else if (arg0 === 1) {
          v0 = 3;
          throw arg1;
        } else if (arg0 !== 2) {
          callback("");
          v0("");
          c3 = 0;
          callback2(false);
        }
        c3 = 0;
        callback2(false);
        v0 = 3;
        obj = { value: null, done: true };
        obj[0] = arg1;
        return obj;
      } catch (tmp29) {
        callback = tmp29;
        if (tmp4 === c3) {
          v0 = tmp2;
          throw tmp29;
        } else {
          length = tmp;
        }
      }
    }
  }), items);
  let obj = { spacing: 4, style: tmp.inputContainer, children: null };
  const items1 = [callback3(onSubmit(6606).TextInput, { size: "md", placeholder: "Enter Pool ID", onChange: tmp2[1], autoCapitalize: "none", autoCorrect: false, autoComplete: "off", isClearable: true }), callback3(onSubmit(6606).TextInput, { size: "md", secureTextEntry: true, placeholder: "Enter Password", onChange: tmp4[1], autoCapitalize: "none", autoCorrect: false, autoComplete: "off", isClearable: true }), ];
  let tmp11 = 0 === first.length;
  if (!tmp11) {
    tmp11 = 0 === first1.length;
  }
  if (!tmp11) {
    tmp11 = tmp7;
  }
  items1[2] = callback3(onSubmit(4975).Button, { size: "md", variant: "primary", text: "Get Pool", disabled: tmp11, loading: tmp7, onPress: callback });
  obj[2] = items1;
  return closure_11(onSubmit(4973).Stack, obj);
}
function UserActionSheet(pool) {
  pool = pool.pool;
  let usersForPool;
  dependencyMap = undefined;
  closure_3 = undefined;
  usersForPool = authStore.getUsersForPool(pool.id);
  dependencyMap = id.getId();
  items = [pool.id];
  closure_3 = React.useCallback((arg0) => {
    usersForPool(4527).hideActionSheet("generated-test-users");
    const obj = usersForPool(4527);
    pool(15611).loginAsGeneratedUser(pool.id, arg0);
  }, items);
  let obj = { header: null, children: null };
  obj = { title: pool.summary, subtitle: "" + usersForPool.length + " users" };
  obj[0] = callback3(pool(7149).BottomSheetTitleHeader, obj);
  obj = { style: { paddingHorizontal: usersForPool(576).space.PX_12 }, children: null };
  obj1 = { paddingHorizontal: usersForPool(576).space.PX_12 };
  obj[1] = callback3(pool(5687).TableRowGroup, {
    title: "Select User to Login As",
    hasIcons: true,
    children: usersForPool.map((id) => {
      closure_0 = id;
      const obj = {
        icon: closure_1_10(pool(11825).UserIcon, { size: "md" }),
        label: null,
        subLabel: null,
        onPress() {
          return closure_1_3(id.id);
        },
        disabled: id.id === dependencyMap,
        trailing: null,
        start: null,
        end: null
      };
      ({ username: obj[1], email: obj[2] } = id);
      let tmp2Result;
      if (id.id === dependencyMap) {
        tmp2Result = tmp2(pool(4511).CheckmarkLargeIcon, { size: "md", color: "text-feedback-positive" });
      }
      obj[5] = tmp2Result;
      obj[6] = 0 === arg1;
      obj[7] = arg1 === usersForPool.length - 1;
      return closure_1_10(pool(5605).TableRow, obj, id.id);
    })
  });
  obj[1] = callback3(closure_6, obj);
  return callback3(pool(7150).BottomSheet, obj);
}
function PoolUsers(pool) {
  pool = pool.pool;
  const id = pool.id;
  ({ start, end } = pool);
  const usersForPool = authStore.getUsersForPool(id);
  items = [pool];
  const callback = React.useCallback(() => {
    let obj = closure_1_1(closure_1_2[31]);
    obj = { default: closure_1_16 };
    obj = { pool };
    obj.openLazy(Promise.resolve(obj), "generated-test-users", obj);
  }, items);
  return callback3(pool(5605).TableRow, { icon: callback3(items[Number(undefined, id) % items.length], { size: "md", color: length[Number(undefined, id) % length.length] }), label: pool.summary, subLabel: "" + usersForPool.length + " users", arrow: true, onPress: callback, start, end });
}
({ View: closure_6, ScrollView: error } = get_ActivityIndicator);
({ jsx: c10, jsxs: unpackModuleId } = jsxProd);
let items = [require("UserIcon").UserIcon, require("ShieldIcon").ShieldIcon, require("GiftIcon").GiftIcon, require("AchievementsIcon").AchievementsIcon, require("PiggyBankIcon").PiggyBankIcon, require("TreehouseIcon").TreehouseIcon, require("SpeedometerIcon").SpeedometerIcon, require("CompassIcon").CompassIcon, require("SignPostIcon").SignPostIcon, require("CarIcon").CarIcon, require("TrainIcon").TrainIcon, require("TeacupIcon").TeacupIcon, require("InventoryIcon").InventoryIcon, require("FoodIcon").FoodIcon, require("BurgerIcon").BurgerIcon, require("MagicDoorIcon").MagicDoorIcon, require("PawPrintIcon").PawPrintIcon, require("RecordPlayerIcon").RecordPlayerIcon, require("SettingsIcon").SettingsIcon];
let closure_13 = ["text-default", "text-feedback-positive", "text-feedback-warning", "text-feedback-critical", "text-link", "text-brand"];
createCacheKey = { container: null, contentContainer: null, inputContainer: null };
createCacheKey = { backgroundColor: ThemesDefault.colors.BACKGROUND_BASE_LOW, flex: 1 };
createCacheKey[0] = createCacheKey;
createCacheKey[1] = { padding: ThemesDefault.space.PX_16 };
let obj1 = { padding: ThemesDefault.space.PX_16 };
createCacheKey[2] = { marginBottom: ThemesDefault.space.PX_16 };
let closure_14 = createCacheKey.createStyles(createCacheKey);
let obj2 = { marginBottom: ThemesDefault.space.PX_16 };
const result = require("set").fileFinishedImporting("modules/devtools/native/components/screens/DevToolsGeneratedTestUsersScreen.tsx");

export default function DevToolsGeneratedTestUsersScreen() {
  const tmp = callback4();
  let obj = _require(504);
  items = [closure_8];
  const stateFromStoresArray = obj.useStateFromStoresArray(items, () => {
    pools = pools.getPools();
    if (pools == null) {
      pools = [];
    }
    return pools;
  });
  _require = stateFromStoresArray;
  _require = undefined;
  _require = callback((arg0, arg1) => {
    closure_0 = arg0;
    closure_1 = arg1;
    c3 = 0;
    c2 = 0;
    return (function*(arg0, arg1) {
      if (table === 2) {
        table = 3;
        HermesBuiltin.throwTypeError();
      } else if (tmp3 === 3) {
        if (arg0 === 1) {
          throw arg1;
        } else if (arg0 === 2) {
          let obj = { value: null, done: true };
          obj[0] = arg1;
          return obj;
        } else {
          return { value: "HermesInternal", done: null };
        }
      } else {
        try {
          table = 2;
          if (0 === c3) {
            if (arg0 === 1) {
              table = 3;
              throw arg1;
            } else if (arg0 === 2) {
              table = 3;
              obj = { value: null, done: true };
              obj[0] = arg1;
              return obj;
            } else {
              obj1 = callback(table[32]);
              c3 = 1;
              table = 1;
              obj1 = { value: null, done: false };
              obj1[0] = obj1.getGeneratedPoolById(callback, closure_1);
              return obj1;
            }
          } else if (arg0 === 1) {
            table = 3;
            throw arg1;
          } else if (arg0 === 2) {
            table = 3;
            obj = { value: null, done: true };
            obj[0] = arg1;
            return obj;
          } else {
            table = 3;
            return { value: "HermesInternal", done: null };
          }
        } catch (tmp9) {
          table = tmp;
          throw tmp9;
        }
      }
    })();
  });
  obj = { style: tmp.container, children: null };
  obj = { contentContainerStyle: null, children: null };
  const items1 = [tmp.contentContainer, ];
  obj1 = { paddingBottom: null };
  callback = React.useCallback(function() {
    const self = this;
    const apply = closure_0.apply;
    if (typeof apply === "unknown") {
      let applyArgumentsResult = HermesBuiltin.applyArguments(self);
    } else {
      applyArgumentsResult = apply(self, arguments);
    }
    return applyArgumentsResult;
  }, []);
  obj1[0] = ThemesDefault.space.PX_16 + useSafeAreaInsetsKeyboardAwareDefault({ includeKeyboardHeight: true }).insets.bottom;
  items1[1] = obj1;
  obj[0] = items1;
  const items2 = [callback3(PoolIdInput, { onSubmit: callback }), ];
  let tmp5Result = 0 === stateFromStoresArray.length;
  if (tmp5Result) {
    tmp5Result = tmp5(_require(5605).TableRow, { label: "No pools available." });
  }
  const obj2 = { spacing: 16, children: null };
  const obj3 = { title: "Generated Test User Pools", hasIcons: true, children: null };
  const items3 = [tmp5Result, stateFromStoresArray.map((id) => closure_1_10(closure_1_17, { pool: id, start: 0 === arg1, end: arg1 === length.length - 1 }, id.id))];
  obj3[2] = items3;
  items2[1] = closure_11(_require(5687).TableRowGroup, obj3);
  obj2[1] = items2;
  obj[1] = closure_11(_require(4973).Stack, obj2);
  obj[1] = callback3(closure_7, obj);
  return callback3(closure_6, obj);
};