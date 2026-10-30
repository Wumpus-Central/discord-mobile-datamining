// discord_app/modules/user_settings/quests/native/MobileSearchableSelect.tsx
import nativeDefault from "../../../../../discord_common/js/packages/tokens/native.tsx";
import _slicedToArray from "../../../../../_runtime/metro/00032__.js";
import noop from "../../../../../_runtime/metro/00019__.js";

const require = fn;
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
      intl = options(closure_1[6]).intl;
      placeholder = intl.string(options(closure_1[6]).t.XqMe3N);
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
    closure_5 = undefined;
    closure_6 = undefined;
    closure_7 = undefined;
    closure_8 = undefined;
    closure_9 = undefined;
    closure_10 = undefined;
    closure_11 = undefined;
    closure_12 = undefined;
    closure_13 = undefined;
    closure_14 = undefined;
    closure_15 = undefined;
    tmp3 = closure_9();
    closure_5 = tmp3;
    obj = c3;
    ref = c3.useRef(null);
    closure_6 = ref;
    closure_7 = c3.useRef(false);
    str = value;
    if (value == null) {
      str = "";
    }
    tmp5 = onChange;
    str2 = value;
    if (value == null) {
      str2 = "";
    }
    tmp5Result = tmp5(obj.useState(str2), 2);
    first = tmp5Result[0];
    closure_8 = first;
    closure_9 = tmp5Result[1];
    tmp5Result1 = tmp5(obj.useState(false), 2);
    [tmp8, closure_10] = tmp5Result1;
    tmp5Result2 = tmp5(obj.useState(false), 2);
    first1 = tmp5Result2[0];
    closure_11 = first1;
    closure_12 = tmp5Result2[1];
    callback = obj.useCallback((arg0) => {
      closure_7.current = true;
      const current = ref.current;
      if (current != null) {
        current.setText(arg0);
      }
      closure_7.current = false;
      closure_9(arg0);
    }, []);
    closure_13 = callback;
    items = [, , ,];
    items[0] = value;
    items[1] = first;
    items[2] = first1;
    items[3] = callback;
    effect = obj.useEffect(() => {
      let tmp2 = null == value;
      if (!tmp2) {
        tmp2 = value === first;
      }
      if (!tmp2) {
        tmp2 = first1;
      }
      if (!tmp2) {
        callback(value);
      }
    }, items);
    items1 = [, ,];
    items1[0] = options;
    items1[1] = first;
    items1[2] = flag;
    memo = obj.useMemo(() => {
      let found = options;
      if ("" !== first.trim()) {
        closure_0 = first.toLowerCase();
        found = options.filter((label) => {
          const formatted = label.label.toLowerCase();
          let hasItem = formatted.includes(closure_0);
          if (!hasItem) {
            const formatted1 = label.value.toLowerCase();
            hasItem = formatted1.includes(closure_0);
          }
          return hasItem;
        });
      }
      let tmp = found;
      if (flag) {
        tmp = found;
        if (0 === found.length) {
          tmp = found;
          if ("" !== first.trim()) {
            const obj = { label: first.trim(), value: first.trim() };
            const items = [obj];
            tmp = items;
          }
        }
      }
      return tmp;
    }, items1);
    closure_14 = memo;
    items2 = [];
    items2[0] = options.length;
    items3 = [,];
    items3[0] = first;
    items3[1] = onChange;
    callback1 = obj.useCallback((arg0) => {
      if (!ref.current) {
        closure_12(true);
        closure_9(arg0);
        let tmp7 = arg0.length > 0;
        if (!tmp7) {
          tmp7 = options.length > 0;
        }
        _undefined(tmp7);
      }
    }, items2);
    items4 = [,];
    items4[0] = onChange;
    items4[1] = callback;
    callback2 = obj.useCallback(() => {
      if ("" !== first.trim()) {
        onChange(first);
        closure_12(false);
        _undefined(false);
      }
    }, items3);
    closure_15 = obj.useCallback((arg0) => {
      callback(arg0);
      onChange(arg0);
      closure_12(false);
      _undefined(false);
    }, items4);
    items5 = [,];
    items5[0] = first.length;
    items5[1] = options.length;
    callback3 = obj.useCallback(() => {
      let tmp2 = first.length > 0;
      if (!tmp2) {
        tmp2 = options.length > 0;
      }
      _undefined(tmp2);
    }, items5);
    tmp18 = c4;
    obj1 = { style: { position: "relative", zIndex: 100, overflow: "visible" }, children: null };
    tmp19 = closure_7;
    callback4 = obj.useCallback(() => {
      _undefined(false);
      closure_12(false);
    }, []);
    tmp17 = closure_8;
    items6 = [,];
    items6[0] = closure_7(options(closure_1[7]).SearchBar, {
      ref,
      placeholder,
      defaultValue: onChange(c3.useState(str), 1)[0],
      onChange: callback1,
      onSubmitEditing: callback2,
      onFocus: callback3,
      onBlur: callback4,
      disabled: flag2,
    });
    if (tmp19Result) {
      num = 0;
      tmp19Result = memo.length > 0;
    }
    if (tmp19Result) {
      obj5 = { style: null, children: null };
      obj5.style = tmp3.dropdownContainer;
      tmp20 = closure_5;
      obj6 = {
        nestedScrollEnabled: true,
        showsVerticalScrollIndicator: false,
        keyboardShouldPersistTaps: "handled",
        children: null,
      };
      obj6.children = memo.map((children, index) => {
        value = children;
        const items = [dropdownItem.dropdownItem];
        let dropdownItemLast = index === memo.length - 1;
        if (dropdownItemLast) {
          dropdownItemLast = dropdownItem.dropdownItemLast;
        }
        const obj = {
          style: items,
          activeOpacity: 0.7,
          onPress() {
            closure_15(value.value);
          },
          disabled: flag2,
          children: closure_7(options(value[8]).Text, {
            variant: "text-sm/medium",
            color: "text-default",
            style: dropdownItem.dropdownItemText,
            children: children.label,
          }),
        };
        items[1] = dropdownItemLast;
        return closure_7(ref, obj, "option-" + children.value + "-" + index);
      });
      obj5.children = tmp19(closure_5, obj6);
      tmp19Result = tmp19(tmp18, obj5);
    }
    items6[1] = tmp19Result;
    obj1.children = items6;
    return tmp17(tmp18, obj1);
  }
}
get_ActivityIndicator = fn(17);
({ View: closure_4, ScrollView: hasOwnProperty, TouchableOpacity: metroRequire } = get_ActivityIndicator);
const jsxProd = fn(21);
({ jsx: closure_7, jsxs: closure_8 } = jsxProd);
const createStyles = fn(5009);
let obj2 = { dropdownContainer: null, dropdownItem: null, dropdownItemLast: null, dropdownItemText: null };
const rect = {
  backgroundColor: nativeDefault.colors.BACKGROUND_BASE_LOWER,
  borderRadius: nativeDefault.radii.md,
  marginTop: nativeDefault.space.PX_4,
  borderWidth: 1,
  borderColor: nativeDefault.colors.BORDER_SUBTLE,
  left: 0,
  right: 0,
  zIndex: 999999,
  elevation: 30,
  shadowColor: "#000",
  shadowOffset: { width: 0, height: 6 },
  shadowOpacity: 0.4,
  shadowRadius: 8,
  maxHeight: 250,
};
obj2.dropdownContainer = rect;
obj2.dropdownItem = {
  padding: nativeDefault.space.PX_12,
  borderBottomWidth: 1,
  borderBottomColor: nativeDefault.colors.BORDER_MUTED,
};
obj2.dropdownItemLast = { borderBottomWidth: 0 };
obj2.dropdownItemText = { fontSize: 14 };
const React7 = createStyles.createStyles(obj2);
const size = fn(2);
const result = size.fileFinishedImporting("modules/user_settings/quests/native/MobileSearchableSelect.tsx");

export default MobileSearchableSelect;
export { MobileSearchableSelect };
