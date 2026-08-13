// discord_app/modules/devtools/native/components/screens/DevToolsGeneratedTestUsersScreen.tsx
import fetchFingerprint from "fetchFingerprint";
import _getGeneratedPoolById from "_getGeneratedPoolById";
import InventoryIcon from "InventoryIcon";
import get_ActivityIndicator from "TrainIcon";
import handleAddUser from "handleAddUser";
import closure_9 from "fetchFingerprint";
import jsxProd from "BurgerIcon";
import createCacheKey from "createCacheKey";
import { initialize } from "../../../../../../discord_common/js/packages/flux/index.tsx";
import { Themes } from "../../../../../../discord_common/js/packages/tokens/native.tsx";
import { Stack } from "../../../../../design/components/Stack/native/Stack.native.tsx";
import { TableRowInner } from "../../../../../design/components/TableRow/native/TableRow.native.tsx";
import { TableRowGroupTitle } from "../../../../../design/components/TableRow/native/TableRowGroup.native.tsx";
import { useSafeAreaInsetsKeyboardAware } from "../../../../safe_area/useSafeAreaInsetsKeyboardAware.native.tsx";

let c10;
let closure_6;
let error;
let unpackModuleId;
const require = arg1;
function PoolIdInput(onSubmit) {
  let c5;
  let tmp7;
  onSubmit = onSubmit.onSubmit;
  let first;
  let dependencyMap;
  let first1;
  let callback2;
  let React;
  const tmp2 = callback2(React.useState(""), 2);
  first = tmp2[0];
  dependencyMap = tmp3;
  const tmp4 = callback2(React.useState(""), 2);
  first1 = tmp4[0];
  callback2 = tmp5;
  const tmp = createCacheKey();
  [tmp7, c5] = callback2(React.useState(false), 2);
  const items = [first, first1, onSubmit];
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
            let closure_0 = tmp3;
            if (0 !== length.length) {
              outer1_5(true);
              let c3 = 1;
              length = 2;
              v0 = 1;
              const obj1 = { value: null, done: false };
              obj1[0] = outer1_0(tmp24, c3);
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
  const items1 = [callback3(onSubmit(7835).TextInput, { size: "md", placeholder: "Enter Pool ID", onChange: tmp2[1], autoCapitalize: "none", autoCorrect: false, autoComplete: "off", isClearable: true }), callback3(onSubmit(7835).TextInput, { size: "md", secureTextEntry: true, placeholder: "Enter Password", onChange: tmp4[1], autoCapitalize: "none", autoCorrect: false, autoComplete: "off", isClearable: true }), ];
  let tmp11 = 0 === first.length;
  if (!tmp11) {
    tmp11 = 0 === first1.length;
  }
  if (!tmp11) {
    tmp11 = tmp7;
  }
  items1[2] = callback3(onSubmit(4755).Button, { size: "md", variant: "primary", text: "Get Pool", disabled: tmp11, loading: tmp7, onPress: callback });
  obj[2] = items1;
  return closure_11(onSubmit(4753).Stack, obj);
}
function UserActionSheet(pool) {
  pool = pool.pool;
  let usersForPool;
  let dependencyMap;
  let fetchFingerprint;
  usersForPool = authStore.getUsersForPool(pool.id);
  dependencyMap = id.getId();
  const items = [pool.id];
  fetchFingerprint = React.useCallback((arg0) => {
    usersForPool(4310).hideActionSheet("generated-test-users");
    const obj = usersForPool(4310);
    pool(13941).loginAsGeneratedUser(pool.id, arg0);
  }, items);
  let obj = { header: null, children: null };
  obj = { title: pool.summary, subtitle: null };
  obj[1] = "" + usersForPool.length + " users";
  obj[0] = callback3(pool(5436).BottomSheetTitleHeader, obj);
  obj = { style: null, children: null };
  obj[0] = { paddingHorizontal: usersForPool(712).space.PX_12 };
  const obj2 = { title: "Select User to Login As", hasIcons: true, children: null };
  obj2[2] = usersForPool.map((id) => {
    let closure_0 = id;
    const obj = { icon: null, label: null, subLabel: null, onPress: null, disabled: null, trailing: null, start: null, end: null };
    obj[0] = outer1_10(pool(11275).UserIcon, { size: "md" });
    ({ username: obj[1], email: obj[2] } = id);
    obj[3] = function onPress() {
      return outer1_3(id.id);
    };
    obj[4] = id.id === dependencyMap;
    let tmp2Result;
    if (id.id === dependencyMap) {
      tmp2Result = tmp2(pool(4294).CheckmarkLargeIcon, { size: "md", color: "text-feedback-positive" });
    }
    obj[5] = tmp2Result;
    obj[6] = 0 === arg1;
    obj[7] = arg1 === usersForPool.length - 1;
    return outer1_10(pool(5414).TableRow, obj, id.id);
  });
  obj[1] = callback3(pool(5807).TableRowGroup, obj2);
  obj[1] = callback3(closure_6, obj);
  return callback3(pool(5437).BottomSheet, obj);
}
function PoolUsers(pool) {
  let end;
  let start;
  pool = pool.pool;
  const id = pool.id;
  ({ start, end } = pool);
  const usersForPool = authStore.getUsersForPool(id);
  const items = [pool];
  const callback = React.useCallback(() => {
    let obj = outer1_1(outer1_2[31]);
    obj = { default: outer1_16 };
    obj = { pool };
    obj.openLazy(Promise.resolve(obj), "generated-test-users", obj);
  }, items);
  let obj = { icon: null, label: null, subLabel: null, arrow: true, onPress: null, start: null, end: null };
  obj[0] = callback3(items[Number(undefined, id) % items.length], { size: "md", color: length[Number(undefined, id) % length.length] });
  obj[1] = pool.summary;
  obj[2] = "" + usersForPool.length + " users";
  obj[4] = callback;
  obj[5] = start;
  obj[6] = end;
  return callback3(pool(5414).TableRow, obj);
}
({ View: closure_6, ScrollView: error } = get_ActivityIndicator);
({ jsx: c10, jsxs: unpackModuleId } = jsxProd);
let items = [require("UserIcon").UserIcon, require("ShieldIcon").ShieldIcon, require("GiftIcon").GiftIcon, require("AchievementsIcon").AchievementsIcon, require("PiggyBankIcon").PiggyBankIcon, require("TreehouseIcon").TreehouseIcon, require("SpeedometerIcon").SpeedometerIcon, require("CompassIcon").CompassIcon, require("SignPostIcon").SignPostIcon, require("CarIcon").CarIcon, require("TrainIcon").TrainIcon, require("TeacupIcon").TeacupIcon, require("InventoryIcon").InventoryIcon, require("FoodIcon").FoodIcon, require("BurgerIcon").BurgerIcon, require("MagicDoorIcon").MagicDoorIcon, require("PawPrintIcon").PawPrintIcon, require("RecordPlayerIcon").RecordPlayerIcon, require("SettingsIcon").SettingsIcon];
let closure_13 = ["text-default", "text-feedback-positive", "text-feedback-warning", "text-feedback-critical", "text-link", "text-brand"];
createCacheKey = { container: null, contentContainer: null, inputContainer: null };
createCacheKey = { backgroundColor: require("Themes").colors.BACKGROUND_BASE_LOW, flex: 1 };
createCacheKey[0] = createCacheKey;
createCacheKey[1] = { padding: require("Themes").space.PX_16 };
let obj1 = { padding: require("Themes").space.PX_16 };
createCacheKey[2] = { marginBottom: require("Themes").space.PX_16 };
createCacheKey = createCacheKey.createStyles(createCacheKey);
let obj2 = { marginBottom: require("Themes").space.PX_16 };
const result = require("noop").fileFinishedImporting("modules/devtools/native/components/screens/DevToolsGeneratedTestUsersScreen.tsx");

export default function DevToolsGeneratedTestUsersScreen() {
  const tmp = createCacheKey();
  let obj = _initialize;
  const items = [handleAddUser];
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
    let closure_0 = arg0;
    let closure_1 = arg1;
    let c3 = 0;
    let c2 = 0;
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
              let obj1 = callback(table[32]);
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
  let obj1 = { paddingBottom: null };
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
  obj1[0] = Themes.space.PX_16 + useSafeAreaInsetsKeyboardAware({ includeKeyboardHeight: true }).insets.bottom;
  items1[1] = obj1;
  obj[0] = items1;
  const items2 = [callback3(PoolIdInput, { onSubmit: callback }), ];
  let tmp5Result = 0 === stateFromStoresArray.length;
  if (tmp5Result) {
    tmp5Result = tmp5(_TableRowInner.TableRow, { label: "No pools available." });
  }
  const obj2 = { spacing: 16, children: null };
  const obj3 = { title: "Generated Test User Pools", hasIcons: true, children: null };
  const items3 = [tmp5Result, stateFromStoresArray.map((id) => outer1_10(outer1_17, { pool: id, start: 0 === arg1, end: arg1 === length.length - 1 }, id.id))];
  obj3[2] = items3;
  items2[1] = closure_11(_TableRowGroupTitle.TableRowGroup, obj3);
  obj2[1] = items2;
  obj[1] = closure_11(_Stack.Stack, obj2);
  obj[1] = callback3(closure_7, obj);
  return callback3(closure_6, obj);
};