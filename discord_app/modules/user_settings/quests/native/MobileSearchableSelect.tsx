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
    tmp3 = closure_9();
    closure_5 = tmp3;
    obj = c3;
    str = value;
    if (value == null) {
      str = "";
    }
    tmp4 = onChange(c3.useState(str), 2);
    first = tmp4[0];
    closure_6 = first;
    closure_7 = tmp4[1];
    tmp5 = onChange(obj.useState(false), 2);
    [tmp6, closure_8] = tmp5;
    tmp7 = onChange(obj.useState(false), 2);
    first1 = tmp7[0];
    closure_9 = first1;
    closure_10 = tmp7[1];
    items = [, ,];
    items[0] = value;
    items[1] = first;
    items[2] = first1;
    effect = obj.useEffect(() => {
      let tmp2 = null == value;
      if (!tmp2) {
        tmp2 = value === first;
      }
      if (!tmp2) {
        tmp2 = first1;
      }
      if (!tmp2) {
        closure_7(value);
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
    closure_11 = memo;
    items2 = [];
    items2[0] = options.length;
    items3 = [,];
    items3[0] = first;
    items3[1] = onChange;
    callback = obj.useCallback((arg0) => {
      closure_10(true);
      closure_7(arg0);
      let tmp4 = arg0.length > 0;
      if (!tmp4) {
        tmp4 = options.length > 0;
      }
      _undefined(tmp4);
    }, items2);
    items4 = [];
    items4[0] = onChange;
    callback1 = obj.useCallback(() => {
      if ("" !== first.trim()) {
        onChange(first);
        closure_10(false);
        _undefined(false);
      }
    }, items3);
    closure_12 = obj.useCallback((arg0) => {
      closure_7(arg0);
      onChange(arg0);
      closure_10(false);
      _undefined(false);
    }, items4);
    items5 = [,];
    items5[0] = first.length;
    items5[1] = options.length;
    callback2 = obj.useCallback(() => {
      let tmp2 = first.length > 0;
      if (!tmp2) {
        tmp2 = options.length > 0;
      }
      _undefined(tmp2);
    }, items5);
    tmp15 = c4;
    obj1 = { style: { position: "relative", zIndex: 100, overflow: "visible" }, children: null };
    tmp16 = closure_7;
    callback3 = obj.useCallback(() => {
      _undefined(false);
      closure_10(false);
    }, []);
    tmp14 = closure_8;
    obj6 = {
      placeholder,
      value: first,
      onChange: callback,
      onSubmitEditing: callback1,
      onFocus: callback2,
      onBlur: callback3,
      leadingIcon: options(closure_1[8]).MagnifyingGlassIcon,
      clearable: true,
      returnKeyType: "search",
      accessibilityRole: "search",
      autoCorrect: false,
      autoCapitalize: "none",
      disabled: flag2,
    };
    items6 = [,];
    items6[0] = closure_7(options(closure_1[7]).TextField, obj6);
    if (tmp16Result) {
      num = 0;
      tmp16Result = memo.length > 0;
    }
    if (tmp16Result) {
      obj7 = { style: null, children: null };
      obj7.style = tmp3.dropdownContainer;
      tmp17 = closure_5;
      obj8 = {
        nestedScrollEnabled: true,
        showsVerticalScrollIndicator: false,
        keyboardShouldPersistTaps: "handled",
        children: null,
      };
      obj8.children = memo.map((children, index) => {
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
            closure_12(value.value);
          },
          disabled: flag2,
          children: closure_7(options(value[9]).Text, {
            variant: "text-sm/medium",
            color: "text-default",
            style: dropdownItem.dropdownItemText,
            children: children.label,
          }),
        };
        items[1] = dropdownItemLast;
        return closure_7(first, obj, "option-" + children.value + "-" + index);
      });
      obj7.children = tmp16(closure_5, obj8);
      tmp16Result = tmp16(tmp15, obj7);
    }
    items6[1] = tmp16Result;
    obj1.children = items6;
    return tmp14(tmp15, obj1);
  }
}
get_ActivityIndicator = fn(17);
({ View: closure_4, ScrollView: hasOwnProperty, TouchableOpacity: metroRequire } = get_ActivityIndicator);
const jsxProd = fn(21);
({ jsx: closure_7, jsxs: closure_8 } = jsxProd);
const createStyles = fn(4756);
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
