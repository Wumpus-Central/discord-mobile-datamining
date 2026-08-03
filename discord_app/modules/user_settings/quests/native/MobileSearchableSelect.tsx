import _slicedToArray from "_slicedToArray";
import noop from "noop";
import get_ActivityIndicator from "get ActivityIndicator";
import jsxProd from "jsxProd";
import createCacheKey from "createCacheKey";

let c4;
let c5;
let closure_6;
let error;
let metroImportAll;
const require = arg1;
class MobileSearchableSelect {
  constructor(arg0) {
    options = global.options;
    value = global.value;
    closure_1 = value;
    onChange = global.onChange;
    placeholder = global.placeholder;
    if (placeholder === undefined) {
      tmp = options;
      tmp2 = closure_1;
      intl = require("getSystemLocale").intl;
      placeholder = intl.string(require("getSystemLocale").t.XqMe3N);
    }
    flag = global.allowCustomValue;
    if (flag === undefined) {
      flag = false;
    }
    c3 = flag;
    flag2 = global.isDisabled;
    if (flag2 === undefined) {
      flag2 = false;
    }
    c4 = flag2;
    c5 = undefined;
    c6 = undefined;
    c7 = undefined;
    useState = undefined;
    useState = undefined;
    c10 = undefined;
    useEffect = undefined;
    f93523 = undefined;
    tmp3 = useState();
    c5 = tmp3;
    obj = c3;
    str = value;
    if (value == null) {
      str = "";
    }
    tmp4 = onChange(c3.useState(str), 2);
    first = tmp4[0];
    c6 = first;
    c7 = tmp4[1];
    tmp5 = onChange(obj.useState(false), 2);
    [tmp6, useState] = tmp5;
    tmp7 = onChange(obj.useState(false), 2);
    first1 = tmp7[0];
    useState = first1;
    c10 = tmp7[1];
    items = [, , ];
    items[0] = value;
    items[1] = first;
    items[2] = first1;
    effect = obj.useEffect(() => {
      let tmp2 = null == closure_1;
      if (!tmp2) {
        tmp2 = tmp === first;
      }
      if (!tmp2) {
        tmp2 = first1;
      }
      if (!tmp2) {
        callback(tmp);
      }
    }, items);
    items1 = [, , ];
    items1[0] = options;
    items1[1] = first;
    items1[2] = flag;
    memo = obj.useMemo(() => {
      let found = closure_0;
      if ("" !== first.trim()) {
        closure_0 = str.toLowerCase();
        found = closure_0.filter((label) => {
          const formatted = label.label.toLowerCase();
          let hasItem = formatted.includes(closure_0);
          if (!hasItem) {
            const formatted1 = label.value.toLowerCase();
            hasItem = formatted1.includes(closure_0);
            const str2 = label.value;
          }
          return hasItem;
        });
      }
      let tmp = found;
      if (flag) {
        tmp = found;
        if (0 === found.length) {
          tmp = found;
          if ("" !== str.trim()) {
            const obj = { label: null, value: null };
            obj[0] = str.trim();
            obj[1] = str.trim();
            const items = [obj];
            tmp = items;
          }
        }
      }
      return tmp;
    }, items1);
    useEffect = memo;
    items2 = [];
    items2[0] = options.length;
    items3 = [, ];
    items3[0] = first;
    items3[1] = onChange;
    callback = obj.useCallback((arg0) => {
      callback2(true);
      callback(arg0);
      let tmp4 = arg0.length > 0;
      if (!tmp4) {
        tmp4 = options.length > 0;
      }
      c8(tmp4);
    }, items2);
    items4 = [];
    items4[0] = onChange;
    callback1 = obj.useCallback(() => {
      if ("" !== first.trim()) {
        onChange(first);
        callback2(false);
        _undefined2(false);
      }
    }, items3);
    f93523 = obj.useCallback((arg0) => {
      callback(arg0);
      onChange(arg0);
      callback2(false);
      _undefined2(false);
    }, items4);
    items5 = [, ];
    items5[0] = first.length;
    items5[1] = options.length;
    callback2 = obj.useCallback(() => {
      let tmp2 = first.length > 0;
      if (!tmp2) {
        tmp2 = options.length > 0;
      }
      c8(tmp2);
    }, items5);
    tmp15 = c4;
    obj = { style: { position: "relative", zIndex: 100, overflow: "visible" }, children: null };
    tmp16 = c7;
    callback3 = obj.useCallback(() => {
      _undefined2(false);
      callback2(false);
    }, []);
    tmp14 = useState;
    obj1 = { placeholder, value: first, onChange: callback, onSubmitEditing: callback1, onFocus: callback2, onBlur: callback3, leadingIcon: null, isClearable: true, returnKeyType: "search", accessibilityRole: "search", autoCorrect: false, autoCapitalize: "none", isDisabled: null };
    obj1[6] = require("MagnifyingGlassIcon").MagnifyingGlassIcon;
    obj1[12] = flag2;
    items6 = [, ];
    items6[0] = c7(require("TextField").TextField, obj1);
    if (tmp16Result) {
      num = 0;
      tmp16Result = memo.length > 0;
    }
    if (tmp16Result) {
      obj2 = { style: null, children: null };
      obj2[0] = tmp3.dropdownContainer;
      tmp17 = c5;
      obj3 = { nestedScrollEnabled: true, showsVerticalScrollIndicator: false, keyboardShouldPersistTaps: "handled", children: null };
      obj3[3] = memo.map((children) => {
        let closure_0 = children;
        const items = [_undefined.dropdownItem, ];
        let dropdownItemLast = arg1 === memo.length - 1;
        if (dropdownItemLast) {
          dropdownItemLast = tmp3.dropdownItemLast;
        }
        obj = {
          style: items,
          activeOpacity: 0.7,
          onPress() {
            outer1_12(value.value);
          },
          disabled: flag2,
          children: tmp(options(value[9]).Text, obj)
        };
        items[1] = dropdownItemLast;
        obj = { variant: "text-sm/medium", color: "text-default", style: tmp3.dropdownItemText, children: children.label };
        return closure_7(first, obj, "option-" + children.value + "-" + arg1);
      });
      obj2[1] = tmp16(c5, obj3);
      tmp16Result = tmp16(tmp15, obj2);
    }
    items6[1] = tmp16Result;
    obj[1] = items6;
    return tmp14(tmp15, obj);
  }
}
({ View: c4, ScrollView: c5, TouchableOpacity: closure_6 } = get_ActivityIndicator);
({ jsx: error, jsxs: metroImportAll } = jsxProd);
createCacheKey = { dropdownContainer: null, dropdownItem: null, dropdownItemLast: null, dropdownItemText: null };
createCacheKey = { backgroundColor: require("Themes").colors.BACKGROUND_BASE_LOWER, borderRadius: require("Themes").radii.md, marginTop: require("Themes").space.PX_4, borderWidth: 1, borderColor: require("Themes").colors.BORDER_SUBTLE, left: 0, right: 0, zIndex: 999999, elevation: 30, shadowColor: "#000", shadowOffset: { width: 0, height: 6 }, shadowOpacity: 0.4, shadowRadius: 8, maxHeight: 250 };
createCacheKey[0] = createCacheKey;
createCacheKey[1] = { padding: require("Themes").space.PX_12, borderBottomWidth: 1, borderBottomColor: require("Themes").colors.BORDER_MUTED };
createCacheKey[2] = { borderBottomWidth: 0 };
createCacheKey[3] = { fontSize: 14 };
createCacheKey = createCacheKey.createStyles(createCacheKey);
let obj1 = { padding: require("Themes").space.PX_12, borderBottomWidth: 1, borderBottomColor: require("Themes").colors.BORDER_MUTED };
const result = require("get ActivityIndicator").fileFinishedImporting("modules/user_settings/quests/native/MobileSearchableSelect.tsx");

export default MobileSearchableSelect;
export { MobileSearchableSelect };