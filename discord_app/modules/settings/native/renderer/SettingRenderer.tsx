// === Module 14886: SettingRenderer ===

// Module 14886 (SettingRenderer)
import initialize from "initialize" /* 504 */;
import c from "c" /* 576 */;
import nativeDefault from "native" /* 587 */;
import KeyboardManagerUtils from "KeyboardManagerUtils" /* 1894 */;
import ToastUtils from "ToastUtils" /* 4767 */;
import useToken from "useToken" /* 4779 */;
import AccessibilityPreferencesContext from "AccessibilityPreferencesContext" /* 4795 */;
import HapticUtils from "HapticUtils" /* 5056 */;
import haptics_HapticFeedbackTypesDefault from "haptics/HapticFeedbackTypes" /* 5057 */;
import Text_Text from "Text/Text" /* 5087 */;
import GuildIcon from "GuildIcon" /* 6165 */;
import TableRow from "TableRow" /* 6186 */;
import TableRadioGroup from "TableRadioGroup" /* 6267 */;
import ClipboardUtils from "ClipboardUtils" /* 6879 */;
import TableSwitchRow from "TableSwitchRow" /* 6889 */;
import FormSwitch from "FormSwitch" /* 6890 */;
import ClydeIcon from "ClydeIcon" /* 10142 */;
import VolumeSliderDefault from "VolumeSlider" /* 11041 */;
import SettingRendererUtils from "SettingRendererUtils" /* 14887 */;
import useHighlightSettingItem from "useHighlightSettingItem" /* 14889 */;
import SettingListItemHighlightDefault from "SettingListItemHighlight" /* 14890 */;
import settings_tracking_Tracking from "settings/tracking/Tracking" /* 14891 */;
import _slicedToArray from "module_32" /* 32 */;
import _objectWithoutProperties from "_objectWithoutProperties" /* 109 */;
import noop from "module_19" /* 19 */;
import LocaleStore from "LocaleStore" /* 2128 */;
import UserSettingSearchStore from "UserSettingSearchStore" /* 14885 */;
import GuildStore from "GuildStore" /* 2086 */;

const GuildIconDefault = GuildIcon;

require = fn;
function RouteSettingSearchResult(setting) {
  ({ settingData, title } = setting);
  setting = setting.setting;
  const index = setting.index;
  const total = setting.total;
  ({ IconComponent, breadcrumbs } = setting);
  const stackNavigation = title(index[14]).useStackNavigation();
  const screen = settingData.screen;
  const usePreNavigationAction = settingData.usePreNavigationAction;
  let preNavigationAction;
  if (usePreNavigationAction != null) {
    preNavigationAction = usePreNavigationAction();
  }
  const items = [preNavigationAction, index, stackNavigation, screen, setting, title, total];
  const callback = noop.useCallback(() => {
    UserSettingSearchStore.setState({ selected: setting });
    const result = settings_tracking_Tracking.trackSettingSearchResultPress({ setting, title, route: screen.route, searchResultPosition: index, numSearchResults: total });
    const obj = { selected: setting };
    const obj3 = { setting, title, route: screen.route, searchResultPosition: index, numSearchResults: total };
    const result1 = SettingRendererUtils.onRouteSettingOnPress({ navigation: stackNavigation, screen, preNavigationAction });
  }, items);
  let obj = title(index[14]);
  const tmp = title;
  const tmp2 = index;
  return closure_14(tmp(tmp2[12]).TableRow, { label: title, onPress: callback, arrow: true, icon: closure_14(closure_31, { IconComponent }), subLabel: closure_14(closure_30, { breadcrumbs }), start: 0 === index, end: index === total - 1 });
}
function StaticSettingSearchResult(title) {
  title = title.title;
  const setting = title.setting;
  const index = title.index;
  const total = title.total;
  const useTrailing = title.settingData.useTrailing;
  let trailing;
  ({ IconComponent, breadcrumbs } = title);
  if (useTrailing != null) {
    trailing = useTrailing();
  }
  const items = [index, setting, trailing, title, total];
  const callback = noop.useCallback(() => {
    if (null != trailing) {
      const obj2 = { setting, title, searchResultPosition: index, numSearchResults: total };
      const result = settings_tracking_Tracking.trackSettingSearchResultPress(obj2);
      ClipboardUtils.copy(tmp);
      const result1 = ToastUtils.presentCopiedToClipboard();
    }
  }, items);
  let obj = { label: title, onPress: null, icon: null, subLabel: null, trailing: null, start: null, end: null };
  let tmp6;
  if (null != trailing) {
    tmp6 = callback;
  }
  obj.onPress = tmp6;
  obj.icon = closure_14(closure_31, { IconComponent });
  obj.subLabel = closure_14(closure_30, { breadcrumbs });
  let tmp3Result = null;
  if (null != trailing) {
    let obj2 = { text: trailing };
    tmp3Result = closure_14(title(index[12]).TableRow.TrailingText, obj2);
  }
  obj.trailing = tmp3Result;
  obj.start = 0 === index;
  obj.end = index === total - 1;
  return closure_14(title(index[12]).TableRow, obj);
}
let closure_3 = ["onSlidingComplete", "step", "startIcon", "endIcon", "minimumValue", "maximumValue", "valueLabel", "defaultValue", "onValueChange"];
let closure_4 = ["settingData"];
const View = fn(17).View;
const SettingRendererConstants = fn(10630);
({ GUILD_SELECT_ALL_SERVERS_OPTION_ID: closure_12, NodeType: map1 } = SettingRendererConstants);
const jsxProd = fn(21);
({ jsx: closure_14, Fragment: closure_15, jsxs: closure_16 } = jsxProd);
const createStyles = fn(5091);
let obj = { slider: { marginTop: nativeDefault.space.PX_16, marginBottom: nativeDefault.space.PX_8 }, sliderTitle: { flexDirection: "row", justifyContent: "space-between" }, radioSettingHighlight: { top: 26 }, defaultIcon: null, placeholderAvatar: null, placeholderUsername: null };
let obj3 = { marginTop: nativeDefault.space.PX_16, marginBottom: nativeDefault.space.PX_8 };
obj.defaultIcon = { backgroundColor: nativeDefault.colors.BACKGROUND_BRAND, justifyContent: "center", alignItems: "center" };
let size = { width: fn(1200).AVATAR_SIZE_MAP[fn(undefined, 1200).AvatarSizes.REFRESH_MEDIUM_32], height: fn(1200).AVATAR_SIZE_MAP[fn(undefined, 1200).AvatarSizes.REFRESH_MEDIUM_32], borderRadius: nativeDefault.radii.xl, backgroundColor: nativeDefault.colors.BACKGROUND_MOD_MUTED };
obj.placeholderAvatar = size;
let obj4 = { backgroundColor: nativeDefault.colors.BACKGROUND_BRAND, justifyContent: "center", alignItems: "center" };
obj.placeholderUsername = { height: 20, borderRadius: nativeDefault.radii.md, backgroundColor: nativeDefault.colors.BACKGROUND_MOD_MUTED };
let closure_17 = createStyles.createStyles(obj);
let closure_18 = noop.memo(function RouteSetting(arg0) {
  ({ useTrailing, usePreNavigationAction, screen } = arg0);
  ({ useDescription, useIsDisabled, IconComponent } = arg0);
  let preNavigationAction;
  ({ useTitle, variant, start, end } = arg0);
  const stackNavigation = screen(preNavigationAction[14]).useStackNavigation();
  const obj = screen(preNavigationAction[14]);
  const items = [LocaleStore];
  const stateFromStores = screen(preNavigationAction[13]).useStateFromStores(items, () => _undefined.locale);
  preNavigationAction = undefined;
  const title = useTitle();
  if (usePreNavigationAction != null) {
    preNavigationAction = usePreNavigationAction();
  }
  let description;
  if (useDescription != null) {
    description = useDescription();
  }
  let isDisabled;
  if (useIsDisabled != null) {
    isDisabled = useIsDisabled();
  }
  let trailing;
  if (useTrailing != null) {
    trailing = useTrailing();
  }
  const items1 = [stackNavigation, screen, preNavigationAction];
  let tmp11;
  const callback = noop.useCallback(() => {
    const result = SettingRendererUtils.onRouteSettingOnPress({ navigation: stackNavigation, screen, preNavigationAction });
  }, items1);
  if (typeof isDisabled === "object") {
    tmp11 = isDisabled;
  }
  let tmp12 = description;
  if (null != tmp11) {
    const obj3 = { disabledActionLabel: tmp11.label, description };
    tmp12 = closure_14(closure_23, obj3);
  }
  const obj4 = { label: title, subLabel: tmp12, disabled: true === isDisabled, arrow: true, variant, icon: null, trailing: null, onPress: null, accessibilityHint: null, start: null, end: null };
  let tmp15Result = null;
  if (null != IconComponent) {
    const obj5 = { IconComponent };
    tmp15Result = closure_14(screen(tmp2[12]).TableRow.Icon, obj5);
  }
  obj4.icon = tmp15Result;
  let tmp17 = null;
  if (null != trailing) {
    let tmp18;
    if (null != trailing) {
      let tmp15Result2 = trailing;
      if (typeof trailing === "string") {
        const obj6 = { text: trailing };
        tmp15Result2 = closure_14(screen(tmp2[12]).TableRow.TrailingText, obj6);
      }
      tmp18 = tmp15Result2;
    }
    tmp17 = tmp18;
  }
  obj4.trailing = tmp17;
  let onPress;
  if (tmp11 != null) {
    onPress = tmp11.onPress;
  }
  if (onPress == null) {
    onPress = callback;
  }
  obj4.onPress = onPress;
  let accessibilityHint;
  if (tmp11 != null) {
    accessibilityHint = tmp11.accessibilityHint;
  }
  obj4.accessibilityHint = accessibilityHint;
  obj4.start = start;
  obj4.end = end;
  return closure_14(screen(preNavigationAction[12]).TableRow, obj4);
});
let ReactCompilerGating = fn(558);
let closure_19 = ReactCompilerGating.isReactCompilerEnabled() ? (function useGuildTitle(arg0) {
  _require = arg0;
  let stringResult = dependencyMap;
  const cResult = require("c").c(6);
  if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
    const items = [GuildStore];
    cResult[0] = items;
    let first = items;
  } else {
    first = cResult[0];
  }
  if (cResult[1] !== arg0) {
    const fn = function l() {
      return GuildStore.getGuild(closure_0);
    };
    cResult[1] = arg0;
    cResult[2] = fn;
    let tmp6 = fn;
  } else {
    tmp6 = cResult[2];
  }
  const obj = require("c");
  const stateFromStores = require("initialize").useStateFromStores(first, tmp6);
  if (arg0 === closure_12) {
    const _Symbol = Symbol;
    if (cResult[3] === Symbol.for("react.memo_cache_sentinel")) {
      const intl2 = tmp(1126).intl;
      stringResult = intl2.string(tmp(1126).t["32u1Dx"]);
      cResult[3] = stringResult;
    }
  } else {
    let name;
    if (stateFromStores != null) {
      name = stateFromStores.name;
    }
    if (cResult[4] !== name) {
      let name1;
      if (stateFromStores != null) {
        name1 = stateFromStores.name;
      }
      if (name1 == null) {
        const intl = tmp(1126).intl;
        name1 = intl.string(tmp(1126).t["XBwns+"]);
      }
      let name2;
      if (stateFromStores != null) {
        name2 = stateFromStores.name;
      }
      cResult[4] = name2;
      cResult[5] = name1;
      let tmp9 = name1;
    } else {
      tmp9 = cResult[5];
    }
    return tmp9;
  }
  const tmpResult = require("initialize");
}) : (function useGuildTitle(arg0) {
  _require = arg0;
  const items = [GuildStore];
  const stateFromStores = require("initialize").useStateFromStores(items, () => GuildStore.getGuild(closure_0));
  if (arg0 === closure_12) {
    const intl2 = tmp(1126).intl;
    let stringResult = intl2.string(tmp(1126).t["32u1Dx"]);
  } else {
    stringResult = undefined;
    if (stateFromStores != null) {
      stringResult = stateFromStores.name;
    }
    if (stringResult == null) {
      const intl = tmp(1126).intl;
      stringResult = intl.string(tmp(1126).t["XBwns+"]);
    }
  }
  return stringResult;
});
ReactCompilerGating = fn(558);
let tmp4 = ReactCompilerGating.isReactCompilerEnabled() ? (function GuildSelectDefaultIcon(size) {
  const cResult = c.c(9);
  size = size.size;
  let str = "sm";
  if (undefined !== size) {
    str = size;
  }
  const tmp4 = closure_17();
  let num = 32;
  if ("xs" === str) {
    num = 24;
  }
  const result = num / 3;
  if (cResult[0] === result) {
    if (cResult[1] === num) {
      if (cResult[2] === tmp4.defaultIcon) {
        let tmp6 = cResult[3];
      }
      if (cResult[4] !== str) {
        const obj2 = { color: "white", size: str };
        const tmp10 = state(ClydeIcon.ClydeIcon, obj2);
        cResult[4] = str;
        cResult[5] = tmp10;
        let tmp8 = tmp10;
      } else {
        tmp8 = cResult[5];
      }
      if (cResult[6] === tmp6) {
        if (cResult[7] === tmp8) {
          let tmp11 = cResult[8];
        }
        return tmp11;
      }
      const obj3 = { style: tmp6, children: tmp8 };
      const tmp14 = state(View, obj3);
      cResult[6] = tmp6;
      cResult[7] = tmp8;
      cResult[8] = tmp14;
      tmp11 = tmp14;
    }
  }
  const obj4 = {};
  const merged = Object.assign(tmp4.defaultIcon);
  obj4.width = num;
  obj4.height = num;
  obj4.borderRadius = result;
  cResult[0] = result;
  cResult[1] = num;
  cResult[2] = tmp4.defaultIcon;
  cResult[3] = obj4;
  tmp6 = obj4;
}) : (function GuildSelectDefaultIcon(size) {
  let str = size.size;
  if (str === undefined) {
    str = "sm";
  }
  let num = 32;
  if ("xs" === str) {
    num = 24;
  }
  const obj = { style: null, children: null };
  const obj2 = {};
  const merged = Object.assign(closure_17().defaultIcon);
  obj2.width = num;
  obj2.height = num;
  obj2.borderRadius = num / 3;
  obj.style = obj2;
  obj.children = state(ClydeIcon.ClydeIcon, { color: "white", size: str });
  return state(View, obj);
});
let closure_20 = tmp4;
let closure_21 = noop.memo(function GuildSelectorSetting(useSelectedGuildId) {
  const merged = Object.assign(useSelectedGuildId, Object.assign({ useSelectedGuildId: 0 }));
  const selectedGuildId = useSelectedGuildId.useSelectedGuildId();
  const items = [GuildStore];
  closure_1 = selectedGuildId(504).useStateFromStores(items, () => GuildStore.getGuild(selectedGuildId));
  const tmp3 = closure_19(selectedGuildId);
  dependencyMap = tmp3;
  const items1 = [tmp3];
  let obj = selectedGuildId(504);
  const obj2 = {};
  const callback = noop.useCallback(() => closure_2, items1);
  const merged1 = Object.assign(merged);
  obj2.type = constants.PRESSABLE;
  obj2.useTitle = callback;
  obj2.withArrow = true;
  obj2.IconComponent = noop.memo(function SelectorGuildIcon() {
    if (null == closure_1) {
      let tmp7 = state(closure_20, {});
    } else {
      const obj = { size: GuildIcon.GuildIconSizes.SMALL_32, guild: tmp };
      tmp7 = state(GuildIconDefault, obj);
    }
    return tmp7;
  });
  return closure_14(closure_22, obj2);
});
let closure_22 = noop.memo(function PressableSetting(arg0) {
  ({ useDescription, useIsDisabled, useTrailing, variant, start, end, IconComponent } = arg0);
  ({ setting, onPress, useTitle, withArrow } = arg0);
  let highlightSettingItem = useHighlightSettingItem.useHighlightSettingItem(setting);
  const items = [LocaleStore];
  const stateFromStores = initialize.useStateFromStores(items, () => _undefined.locale);
  let description;
  const title = useTitle();
  if (useDescription != null) {
    description = useDescription();
  }
  let isDisabled;
  if (useIsDisabled != null) {
    isDisabled = useIsDisabled();
  }
  let trailing;
  if (useTrailing != null) {
    trailing = useTrailing();
  }
  const obj3 = { label: title, subLabel: description, arrow: withArrow, variant, icon: null, onPress: null, disabled: null, trailing: null, start: null, end: null };
  let tmp11Result = null;
  if (null != IconComponent) {
    const obj4 = { IconComponent, variant };
    tmp11Result = state(TableRow.TableRow.Icon, obj4);
  }
  obj3.icon = tmp11Result;
  obj3.onPress = onPress;
  obj3.disabled = true === isDisabled;
  let tmp13;
  if (null != trailing) {
    let tmp11Result2 = trailing;
    if (typeof trailing === "string") {
      const obj5 = { text: trailing };
      tmp11Result2 = state(TableRow.TableRow.TrailingText, obj5);
    }
    tmp13 = tmp11Result2;
  }
  obj3.trailing = tmp13;
  obj3.start = start;
  obj3.end = end;
  const children = [state(TableRow.TableRow, obj3), ];
  if (highlightSettingItem) {
    const obj6 = { start, end };
    highlightSettingItem = state(SettingListItemHighlightDefault, obj6);
  }
  children[1] = highlightSettingItem;
  return value2(closure_1_15, { children });
});
ReactCompilerGating = fn(558);
let closure_23 = ReactCompilerGating.isReactCompilerEnabled() ? (function DisabledActionDescriptionWithLink(arg0) {
  const cResult = c.c(9);
  ({ disabledActionLabel, description, descriptionVariant, descriptionColor } = arg0);
  if (cResult[0] !== disabledActionLabel) {
    const obj2 = { variant: "text-xs/medium", color: "text-link", children: disabledActionLabel };
    const tmp6 = state(Text_Text.Text, obj2);
    cResult[0] = disabledActionLabel;
    cResult[1] = tmp6;
    let tmp4 = tmp6;
  } else {
    tmp4 = cResult[1];
  }
  if (null == description) {
    return tmp4;
  } else {
    if (cResult[2] === description) {
      if (cResult[3] === descriptionColor) {
        if (cResult[4] === descriptionVariant) {
          let tmp7 = cResult[5];
        }
        if (cResult[6] === tmp7) {
          if (cResult[7] === tmp4) {
            let tmp11 = cResult[8];
          }
          return tmp11;
        }
        const obj3 = { children: null };
        const items = [tmp4, tmp7];
        obj3.children = items;
        const tmp14 = value2(View, obj3);
        cResult[6] = tmp7;
        cResult[7] = tmp4;
        cResult[8] = tmp14;
        tmp11 = tmp14;
      }
    }
    let tmp10Result = description;
    if (!noop.isValidElement(description)) {
      let str = descriptionVariant;
      if (descriptionVariant == null) {
        str = "text-xs/medium";
      }
      const obj4 = { variant: str, color: null, children: null };
      let str2 = descriptionColor;
      if (descriptionColor == null) {
        str2 = "text-subtle";
      }
      obj4.color = str2;
      obj4.children = description;
      tmp10Result = state(Text_Text.Text, obj4);
    }
    cResult[2] = description;
    cResult[3] = descriptionColor;
    cResult[4] = descriptionVariant;
    cResult[5] = tmp10Result;
    tmp7 = tmp10Result;
  }
}) : (function DisabledActionDescriptionWithLink(children) {
  ({ description, descriptionVariant, descriptionColor } = children);
  const tmp4 = state(Text_Text.Text, { variant: "text-xs/medium", color: "text-link", children: children.disabledActionLabel });
  if (null == description) {
    return tmp4;
  } else {
    let tmpResult = description;
    if (!noop.isValidElement(description)) {
      if (descriptionVariant == null) {
        descriptionVariant = "text-xs/medium";
      }
      const obj = { variant: descriptionVariant, color: null, children: null };
      if (descriptionColor == null) {
        descriptionColor = "text-subtle";
      }
      obj.color = descriptionColor;
      obj.children = description;
      tmpResult = state(Text_Text.Text, obj);
    }
    const obj2 = { children: null };
    const items = [tmp4, tmpResult];
    obj2.children = items;
    return value2(View, obj2);
  }
});
let closure_24 = noop.memo(function ToggleSetting(arg0) {
  ({ useDescription, useIsDisabled, variant, start, end, IconComponent } = arg0);
  ({ setting, onValueChange, useTitle, useValue, hasIcon } = arg0);
  let highlightSettingItem = useHighlightSettingItem.useHighlightSettingItem(setting);
  const items = [LocaleStore];
  const stateFromStores = initialize.useStateFromStores(items, () => _undefined.locale);
  const title = useTitle();
  value = useValue();
  let description;
  if (useDescription != null) {
    description = useDescription();
  }
  let isDisabled;
  if (useIsDisabled != null) {
    isDisabled = useIsDisabled();
  }
  const obj3 = { label: title, subLabel: description, icon: null, variant: null, start: null, end: null };
  let tmp9 = null;
  if (null != IconComponent) {
    const obj4 = { IconComponent, variant };
    tmp9 = state(TableRow.TableRow.Icon, obj4);
  }
  obj3.icon = tmp9;
  obj3.variant = variant;
  obj3.start = start;
  obj3.end = end;
  if (typeof isDisabled === "object") {
    const obj6 = {};
    const merged = Object.assign(obj3);
    const obj7 = { disabledActionLabel: isDisabled.label, description, descriptionVariant: "text-md/semibold", descriptionColor: "mobile-text-heading-primary" };
    obj6.subLabel = state(closure_23, obj7);
    obj6.accessible = true;
    ({ accessibilityHint: obj5.accessibilityHint, onPress: obj5.onPress } = isDisabled);
    const obj8 = { style: { opacity: 0.5 }, children: null };
    const obj9 = { "aria-hidden": true, value, disabled: true };
    obj8.children = state(FormSwitch.FormSwitch, obj9);
    obj6.trailing = state(View, obj8);
    let tmp17 = state(TableRow.TableRow, obj6);
    let tmp18 = state;
  } else {
    const obj10 = {};
    const merged1 = Object.assign(obj3);
    obj10.disabled = isDisabled;
    obj10.onValueChange = onValueChange;
    obj10.value = value;
    tmp17 = state(TableSwitchRow.TableSwitchRow, obj10);
    tmp18 = state;
  }
  let tmp18Result = tmp17;
  if (true === hasIcon) {
    const obj11 = { children: tmp17 };
    tmp18Result = tmp18(closure_25, obj11);
  }
  const children = [tmp18Result, ];
  if (highlightSettingItem) {
    const obj20 = { start, end };
    highlightSettingItem = tmp18(SettingListItemHighlightDefault, obj20);
  }
  children[1] = highlightSettingItem;
  return value2(closure_1_15, { children });
});
ReactCompilerGating = fn(558);
let closure_25 = ReactCompilerGating.isReactCompilerEnabled() ? (function ForceSwitchIcons(children) {
  const cResult = c.c(5);
  children = children.children;
  const context = noop.useContext(AccessibilityPreferencesContext.AccessibilityPreferencesContext);
  if (cResult[0] !== context) {
    const obj2 = {};
    const merged = Object.assign(context);
    obj2.switchIconsEnabled = true;
    cResult[0] = context;
    cResult[1] = obj2;
    let tmp5 = obj2;
  } else {
    tmp5 = cResult[1];
  }
  if (cResult[2] === children) {
    if (cResult[3] === tmp5) {
      let tmp9 = cResult[4];
    }
    return tmp9;
  }
  const tmp10 = state(AccessibilityPreferencesContext.AccessibilityPreferencesContext.Provider, { value: tmp5, children });
  cResult[2] = children;
  cResult[3] = tmp5;
  cResult[4] = tmp10;
  tmp9 = tmp10;
}) : (function ForceSwitchIcons(children) {
  const context = noop.useContext(AccessibilityPreferencesContext.AccessibilityPreferencesContext);
  const items = [context];
  value = noop.useMemo(() => {
    const obj = {};
    const merged = Object.assign(context);
    obj.switchIconsEnabled = true;
    return obj;
  }, items);
  return state(AccessibilityPreferencesContext.AccessibilityPreferencesContext.Provider, { value, children: children.children });
});
let closure_26 = noop.memo(function RadioSetting(arg0) {
  ({ setting, useTitle, useValue, useOptions, onValueChange } = arg0);
  const tmp = closure_17();
  let highlightSettingItem = useHighlightSettingItem.useHighlightSettingItem(setting);
  const items = [LocaleStore];
  const stateFromStores = initialize.useStateFromStores(items, () => _undefined.locale);
  const title = useTitle();
  value = useValue();
  options = useOptions();
  let combined = value;
  if (typeof value === "number") {
    let _HermesInternal = HermesInternal;
    combined = "" + value;
  }
  const someResult = options.some((icon) => null != icon.icon);
  const children = [
    state(TableRadioGroup.TableRadioGroup, {
      title,
      defaultValue: combined,
      onChange: onValueChange,
      hasIcons: options.some((icon) => null != icon.icon),
      children: options.map((label) => {
        if (typeof label.value === "number") {
          const _HermesInternal = HermesInternal;
          let combined = "" + label.value;
        } else {
          combined = label.value;
        }
        return closure_1_14(require("TableRadioRow").TableRadioRow, { value: combined, label: label.label, subLabel: label.subLabel, disabled: label.disabled, icon: label.icon }, label.value);
      })
    }, combined),

  ];
  if (highlightSettingItem) {
    const obj4 = { start: true, end: true, style: tmp.radioSettingHighlight };
    highlightSettingItem = state(SettingListItemHighlightDefault, obj4);
  }
  children[1] = highlightSettingItem;
  return value2(closure_1_15, { children });
});
let closure_27 = noop.memo(function StaticSetting(arg0) {
  ({ variant, useTrailing, useIsDisabled, useDescription, start, end, IconComponent } = arg0);
  let trailing;
  ({ setting, useTitle } = arg0);
  let highlightSettingItem = trailing(14889).useHighlightSettingItem(setting);
  let obj = trailing(14889);
  const items = [LocaleStore];
  const stateFromStores = trailing(504).useStateFromStores(items, () => _undefined.locale);
  trailing = undefined;
  const title = useTitle();
  if (useTrailing != null) {
    trailing = useTrailing();
  }
  let description;
  if (useDescription != null) {
    description = useDescription();
  }
  let isDisabled;
  if (useIsDisabled != null) {
    isDisabled = useIsDisabled();
  }
  const items1 = [trailing];
  const callback = noop.useCallback(() => {
    if (null != trailing) {
      ClipboardUtils.copy(tmp);
      const result = ToastUtils.presentCopiedToClipboard();
    }
  }, items1);
  const obj3 = { label: title, subLabel: description, onPress: null, variant: null, disabled: null, icon: null, trailing: null, start: null, end: null };
  let tmp13 = null;
  if (null != trailing) {
    tmp13 = callback;
  }
  obj3.onPress = tmp13;
  obj3.variant = variant;
  obj3.disabled = isDisabled;
  let tmp12Result = null;
  if (null != IconComponent) {
    const obj4 = { IconComponent, variant };
    tmp12Result = closure_14(tmp(6186).TableRow.Icon, obj4);
  }
  obj3.icon = tmp12Result;
  let tmp12Result2 = null;
  if (null != trailing) {
    const obj5 = { text: trailing };
    tmp12Result2 = closure_14(tmp(6186).TableRow.TrailingText, obj5);
  }
  obj3.trailing = tmp12Result2;
  obj3.start = start;
  obj3.end = end;
  const children = [closure_14(trailing(6186).TableRow, obj3), ];
  if (highlightSettingItem) {
    const obj6 = { start, end };
    highlightSettingItem = closure_14(SettingListItemHighlightDefault, obj6);
  }
  children[1] = highlightSettingItem;
  return closure_16(closure_15, { children });
});
let closure_28 = noop.memo(function VolumeSliderSetting(arg0) {
  ({ useValue, start, end } = arg0);
  ({ setting, useTitle, onValueChange, maximum } = arg0);
  let highlightSettingItem = useHighlightSettingItem.useHighlightSettingItem(setting);
  const tmp4 = closure_17();
  const items = [LocaleStore];
  const stateFromStores = initialize.useStateFromStores(items, () => _undefined.locale);
  const title = useTitle();
  value = undefined;
  if (useValue != null) {
    value = useValue();
  }
  const obj3 = { label: title, start, end, subLabel: null };
  obj3.subLabel = state(View, { style: tmp4.slider, children: state(VolumeSliderDefault, { value, maxVolume: maximum, onValueChange, accessibilityLabel: title }) });
  const children = [state(TableRow.TableRow, obj3), ];
  if (highlightSettingItem) {
    const obj5 = { start, end };
    highlightSettingItem = state(SettingListItemHighlightDefault, obj5);
  }
  children[1] = highlightSettingItem;
  return value2(closure_1_15, { children });
});
let closure_29 = noop.memo(function SliderSetting(useTrailing) {
  useTrailing = useTrailing.useTrailing;
  let onSlidingComplete;
  let num2;
  let num4;
  let num3;
  let onValueChange;
  _objectWithoutProperties = undefined;
  value = undefined;
  closure_8 = undefined;
  c9 = undefined;
  let callback1;
  let callback3;
  ({ useTitle, start, end, useProps } = useTrailing);
  const items = [c9];
  const stateFromStores = onSlidingComplete(num2[13]).useStateFromStores(items, () => _undefined.locale);
  const title = useTitle();
  const props = useProps();
  onSlidingComplete = props.onSlidingComplete;
  const step = props.step;
  let num = 0.1;
  if (undefined !== step) {
    num = step;
  }
  const minimumValue = props.minimumValue;
  num2 = 0;
  ({ startIcon, endIcon } = props);
  if (undefined !== minimumValue) {
    num2 = minimumValue;
  }
  const maximumValue = props.maximumValue;
  num3 = 1;
  num4 = 1;
  if (undefined !== maximumValue) {
    num4 = maximumValue;
  }
  ({ valueLabel, defaultValue } = props);
  if (undefined !== defaultValue) {
    num3 = defaultValue;
  }
  onValueChange = props.onValueChange;
  const tmp7 = _objectWithoutProperties(props, num4);
  _objectWithoutProperties = tmp7;
  const tmp8 = closure_17();
  const obj = onSlidingComplete(num2[13]);
  const tmp3 = c9;
  const items1 = [tmp3];
  const stateFromStores1 = onSlidingComplete(num2[13]).useStateFromStores(items1, () => _undefined.locale);
  const tmp10 = onValueChange(value.useState(() => {
    value = value.value;
    if (value == null) {
      value = num3;
    }
    return value;
  }), 2);
  value = tmp10[0];
  closure_8 = tmp10[1];
  const tmpResult = onSlidingComplete(num2[13]);
  [tmp13, c9] = onValueChange(value.useState(false), 2);
  const items2 = [onValueChange];
  const callback = value.useCallback(() => {
    _undefined(true);
  }, []);
  callback1 = value.useCallback((arg0) => {
    closure_8(arg0);
    if (onValueChange != null) {
      onValueChange(arg0);
    }
  }, items2);
  const items3 = [onSlidingComplete];
  const items4 = [callback1, onSlidingComplete];
  const callback2 = value.useCallback((arg0) => {
    _undefined(false);
    if (onSlidingComplete != null) {
      tmp2(arg0);
    }
  }, items3);
  callback3 = value.useCallback((arg0) => {
    callback1(arg0);
    if (onSlidingComplete != null) {
      onSlidingComplete(arg0);
    }
  }, items4);
  const items5 = [num3, callback3];
  const items6 = [callback3, num4, num, value];
  const callback4 = value.useCallback(() => callback3(num3), items5);
  const items7 = [callback3, num2, num, value];
  const callback5 = value.useCallback(() => {
    callback3(Math.min(num4, first + num));
    const result = HapticUtils.triggerHapticFeedback(haptics_HapticFeedbackTypesDefault.IMPACT_LIGHT);
  }, items6);
  let trailing;
  const callback6 = value.useCallback(() => {
    callback3(Math.max(num2, first - num));
    const result = HapticUtils.triggerHapticFeedback(haptics_HapticFeedbackTypesDefault.IMPACT_LIGHT);
  }, items7);
  if (useTrailing != null) {
    trailing = useTrailing();
  }
  const obj2 = { start, end, shadow: "none", border: "none", children: null };
  const obj3 = { style: tmp8.sliderTitle, children: null };
  const items8 = [closure_14(onSlidingComplete(num2[23]).Text, { variant: "text-md/semibold", children: title }), trailing];
  obj3.children = items8;
  const items9 = [closure_16(closure_8, obj3), ];
  let tmp22Result = null != value;
  if (tmp22Result) {
    if (formatPercentResult == null) {
      formatPercentResult = tmp(tmp2[36]).formatPercent(stateFromStores1, value);
      const tmpResult3 = tmp(tmp2[36]);
    }
    const obj4 = { variant: "text-sm/medium", color: "text-muted", children: formatPercentResult };
    tmp22Result = closure_14(tmp(tmp2[23]).Text, obj4);
  }
  items9[1] = tmp22Result;
  const items10 = [closure_16(onSlidingComplete(num2[35]).Stack, { direction: "horizontal", justify: "space-between", children: items9 }), , ];
  const tmp12 = onValueChange(value.useState(false), 2);
  const tmp24 = closure_8;
  let slider;
  if (tmpResult4.isAndroid()) {
    slider = tmp8.slider;
  }
  const obj5 = { style: slider, children: null };
  const obj6 = {};
  const merged = Object.assign(tmp7);
  obj6.accessibilityLabel = title;
  obj6.step = num;
  obj6.onValueChange = callback1;
  obj6.value = value;
  obj6.minimumValue = num2;
  obj6.maximumValue = num4;
  obj6.onSlidingStart = callback;
  obj6.onSlidingComplete = callback2;
  obj6.startIcon = closure_14(onSlidingComplete(num2[39]).PressableOpacity, { accessible: false, onPress: callback6, children: startIcon });
  obj6.endIcon = closure_14(onSlidingComplete(num2[39]).PressableOpacity, { accessible: false, onPress: callback5, children: endIcon });
  obj5.children = closure_14(onSlidingComplete(num2[38]).Slider, obj6);
  items10[1] = closure_14(tmp24, obj5);
  let tmp28 = !tmp13;
  if (!tmp13) {
    tmp28 = value === num3;
  }
  const obj7 = { children: null };
  const obj8 = { disabled: tmp28, variant: "secondary", text: null, onPress: null };
  const intl = tmp(tmp2[18]).intl;
  obj8.text = intl.string(onSlidingComplete(num2[18]).t["3b//lO"]);
  obj8.onPress = callback4;
  items10[2] = closure_14(onSlidingComplete(num2[40]).Button, obj8);
  obj7.children = items10;
  obj2.children = closure_16(onSlidingComplete(num2[35]).Stack, obj7);
  return closure_14(onSlidingComplete(num2[34]).Card, obj2);
});
ReactCompilerGating = fn(558);
let closure_30 = ReactCompilerGating.isReactCompilerEnabled() ? (function SettingSearchResultBreadcrumbs(breadcrumbs) {
  let Text = require;
  let tmp = dependencyMap;
  const cResult = c.c(4);
  breadcrumbs = breadcrumbs.breadcrumbs;
  if (0 === breadcrumbs.length) {
    return null;
  } else {
    if (cResult[0] !== breadcrumbs) {
      const joined = breadcrumbs.join(" \u2192 ");
      cResult[0] = breadcrumbs;
      cResult[1] = joined;
      let tmp3 = joined;
    } else {
      tmp3 = cResult[1];
    }
    if (cResult[2] !== tmp3) {
      Text = Text_Text.Text;
      const obj2 = { variant: "text-xs/medium", color: "text-muted", children: tmp3 };
      tmp = state(Text, obj2);
      cResult[2] = tmp3;
      cResult[3] = tmp;
    }
  }
}) : (function SettingSearchResultBreadcrumbs(breadcrumbs) {
  breadcrumbs = breadcrumbs.breadcrumbs;
  let tmp = null;
  if (0 !== breadcrumbs.length) {
    const obj = { variant: "text-xs/medium", color: "text-muted", children: breadcrumbs.join(" \u2192 ") };
    tmp = state(Text_Text.Text, obj);
  }
  return tmp;
});
ReactCompilerGating = fn(558);
let closure_31 = ReactCompilerGating.isReactCompilerEnabled() ? (function SettingSearchResultIcon(IconComponent) {
  const cResult = c.c(4);
  IconComponent = IconComponent.IconComponent;
  const token = useToken.useToken(nativeDefault.modules.mobile.TABLE_ROW_ICON_SIZE);
  if (null == IconComponent) {
    if (cResult[0] !== token) {
      const obj3 = { style: null };
      const obj4 = { width: token };
      obj3.style = obj4;
      const tmp11 = state(View, obj3);
      cResult[0] = token;
      cResult[1] = tmp11;
    }
  } else {
    if (cResult[2] !== IconComponent) {
      const obj5 = { IconComponent };
      const tmp7 = state(TableRow.TableRow.Icon, obj5);
      cResult[2] = IconComponent;
      cResult[3] = tmp7;
      let tmp5 = tmp7;
    } else {
      tmp5 = cResult[3];
    }
    return tmp5;
  }
}) : (function SettingSearchResultIcon(IconComponent) {
  IconComponent = IconComponent.IconComponent;
  useToken;
  if (null == IconComponent) {
    const obj2 = { style: null };
    const obj3 = { width: tmp4 };
    obj2.style = obj3;
    let tmp6 = state(View, obj2);
  } else {
    const obj = { IconComponent };
    tmp6 = state(TableRow.TableRow.Icon, obj);
  }
  return tmp6;
});
ReactCompilerGating = fn(558);
let closure_33 = ReactCompilerGating.isReactCompilerEnabled() ? (function PressableSettingSearchResult(index) {
  const cResult = title(index[17]).c(18);
  ({ settingData, IconComponent, title } = index);
  ({ breadcrumbs, setting } = index);
  index = index.index;
  const total = index.total;
  const onPress = settingData.onPress;
  const withArrow = settingData.withArrow;
  if (cResult[0] === index) {
    if (cResult[1] === onPress) {
      if (cResult[2] === setting) {
        if (cResult[3] === title) {
          if (cResult[4] === total) {
            let tmp4 = cResult[5];
          }
          if (cResult[6] !== IconComponent) {
            let obj2 = { IconComponent };
            const tmp8 = closure_14(closure_31, obj2);
            cResult[6] = IconComponent;
            cResult[7] = tmp8;
            let tmp5 = tmp8;
          } else {
            tmp5 = cResult[7];
          }
          if (cResult[8] !== breadcrumbs) {
            const obj3 = { breadcrumbs };
            const tmp12 = closure_14(closure_30, obj3);
            cResult[8] = breadcrumbs;
            cResult[9] = tmp12;
            let tmp9 = tmp12;
          } else {
            tmp9 = cResult[9];
          }
          if (cResult[10] === tmp4) {
            if (cResult[11] === tmp5) {
              if (cResult[12] === tmp9) {
                if (cResult[13] === tmp13) {
                  if (cResult[14] === tmp14) {
                    if (cResult[15] === title) {
                      if (cResult[16] === withArrow) {
                        let tmp15 = cResult[17];
                      }
                      return tmp15;
                    }
                  }
                }
              }
            }
          }
          const obj4 = { label: title, onPress: tmp4, icon: tmp5, subLabel: tmp9, start: 0 === index, end: index === total - 1, arrow: withArrow };
          const tmp17 = closure_14(title(tmp2[12]).TableRow, obj4);
          cResult[10] = tmp4;
          cResult[11] = tmp5;
          cResult[12] = tmp9;
          cResult[13] = 0 === index;
          cResult[14] = index === total - 1;
          cResult[15] = title;
          cResult[16] = withArrow;
          cResult[17] = tmp17;
          tmp15 = tmp17;
        }
      }
    }
  }
  const fn = function n() {
    const result = settings_tracking_Tracking.trackSettingSearchResultPress({ setting, title, searchResultPosition: index, numSearchResults: total });
    const obj2 = { setting, title, searchResultPosition: index, numSearchResults: total };
    const result1 = KeyboardManagerUtils.dismissGlobalKeyboard();
    onPress();
  };
  cResult[0] = index;
  cResult[1] = onPress;
  cResult[2] = setting;
  cResult[3] = title;
  cResult[4] = total;
  cResult[5] = fn;
  tmp4 = fn;
  let obj = title(index[17]);
  tmp2 = index;
}) : (function PressableSettingSearchResult(setting) {
  ({ settingData, title } = setting);
  setting = setting.setting;
  const index = setting.index;
  const total = setting.total;
  const onPress = settingData.onPress;
  const items = [setting, title, index, total, onPress];
  ({ IconComponent, breadcrumbs } = setting);
  const callback = noop.useCallback(() => {
    const result = settings_tracking_Tracking.trackSettingSearchResultPress({ setting, title, searchResultPosition: index, numSearchResults: total });
    const obj2 = { setting, title, searchResultPosition: index, numSearchResults: total };
    const result1 = KeyboardManagerUtils.dismissGlobalKeyboard();
    onPress();
  }, items);
  return closure_14(title(index[12]).TableRow, { label: title, onPress: callback, icon: closure_14(closure_31, { IconComponent }), subLabel: closure_14(closure_30, { breadcrumbs }), start: 0 === index, end: index === total - 1, arrow: settingData.withArrow });
});
ReactCompilerGating = fn(558);
let closure_35 = ReactCompilerGating.isReactCompilerEnabled() ? (function SettingSearchResultPlaceholder(arg0) {
  const cResult = c.c(11);
  ({ start, end } = arg0);
  const tmp4 = closure_17();
  if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
    const fn = function n() {
      return { width: `${10 + 80 * Math.random() | 0}%` };
    };
    cResult[0] = fn;
    let first = fn;
  } else {
    first = cResult[0];
  }
  const first1 = _slicedToArray(noop.useState(first), 1)[0];
  if (cResult[1] === tmp4.placeholderUsername) {
    if (cResult[2] === first1) {
      let tmp7 = cResult[3];
    }
    if (cResult[4] !== tmp4.placeholderAvatar) {
      const obj2 = { style: tmp4.placeholderAvatar };
      const tmp12 = state(View, obj2);
      cResult[4] = tmp4.placeholderAvatar;
      cResult[5] = tmp12;
      let tmp9 = tmp12;
    } else {
      tmp9 = cResult[5];
    }
    if (cResult[6] === end) {
      if (cResult[7] === start) {
        if (cResult[8] === tmp7) {
          if (cResult[9] === tmp9) {
            let tmp13 = cResult[10];
          }
          return tmp13;
        }
      }
    }
    const obj3 = { start, end, label: tmp7, icon: tmp9 };
    const tmp15 = state(TableRow.TableRow, obj3);
    cResult[6] = end;
    cResult[7] = start;
    cResult[8] = tmp7;
    cResult[9] = tmp9;
    cResult[10] = tmp15;
    tmp13 = tmp15;
  }
  const obj4 = { style: null };
  const items = [tmp4.placeholderUsername, first1];
  obj4.style = items;
  const tmp8 = state(View, obj4);
  cResult[1] = tmp4.placeholderUsername;
  cResult[2] = first1;
  cResult[3] = tmp8;
  tmp7 = tmp8;
}) : (function SettingSearchResultPlaceholder(arg0) {
  ({ start, end } = arg0);
  const tmp = closure_17();
  const obj = { start, end, label: null, icon: null };
  const obj2 = { style: null };
  const items = [tmp.placeholderUsername, _slicedToArray(noop.useState(() => ({ width: `${10 + 80 * Math.random() | 0}%` })), 1)[0]];
  obj2.style = items;
  obj.label = state(View, obj2);
  obj.icon = state(View, { style: tmp.placeholderAvatar });
  return state(TableRow.TableRow, obj);
});
size = fn(2);
let result = size.fileFinishedImporting("modules/settings/native/renderer/SettingRenderer.tsx");

export const GuildSelectDefaultIcon = tmp4;
export const renderSettingItem = function renderSettingItem(item) {
  ({ setting, settingData, start, end } = item);
  const type = settingData.type;
  if (constants.GUILD_SELECTOR === type) {
    const obj2 = {};
    const merged = Object.assign(settingData);
    obj2.setting = setting;
    obj2.start = start;
    obj2.end = end;
    return state(closure_21, obj2);
  } else if (constants.ROUTE === type) {
    const obj3 = {};
    const merged1 = Object.assign(settingData);
    obj3.start = start;
    obj3.end = end;
    return state(closure_18, obj3);
  } else if (constants.PRESSABLE === type) {
    const obj4 = {};
    const merged2 = Object.assign(settingData);
    obj4.start = start;
    obj4.end = end;
    obj4.setting = setting;
    return state(closure_22, obj4);
  } else if (constants.TOGGLE === type) {
    const obj5 = {};
    const merged3 = Object.assign(settingData);
    obj5.start = start;
    obj5.end = end;
    obj5.setting = setting;
    return state(closure_24, obj5);
  } else if (constants.STATIC === type) {
    const obj6 = {};
    const merged4 = Object.assign(settingData);
    obj6.start = start;
    obj6.end = end;
    obj6.setting = setting;
    return state(closure_27, obj6);
  } else if (constants.VOLUME_SLIDER === type) {
    const obj7 = {};
    const merged5 = Object.assign(settingData);
    obj7.start = start;
    obj7.end = end;
    obj7.setting = setting;
    return state(closure_28, obj7);
  } else if (constants.RADIO === type) {
    const obj8 = {};
    const merged6 = Object.assign(settingData);
    obj8.setting = setting;
    return state(closure_26, obj8);
  } else if (constants.SLIDER === type) {
    const obj = {};
    const merged7 = Object.assign(settingData);
    obj.start = start;
    obj.end = end;
    obj.setting = setting;
    return state(closure_29, obj);
  }
};
export const renderSettingSearchResultItem = function renderSettingSearchResultItem(settingData) {
  settingData = settingData.settingData;
  const tmp = _objectWithoutProperties(settingData, closure_4);
  const type = settingData.type;
  if (constants.ROUTE === type) {
    const obj2 = { settingData };
    const merged = Object.assign(tmp);
    return state(RouteSettingSearchResult, obj2);
  } else if (constants.PRESSABLE === type) {
    const obj3 = { settingData };
    const merged1 = Object.assign(tmp);
    return state(closure_33, obj3);
  } else if (constants.STATIC === type) {
    const obj = { settingData };
    const merged2 = Object.assign(tmp);
    return state(StaticSettingSearchResult, obj);
  } else {
    const _Error = Error;
    const _HermesInternal = HermesInternal;
    const error = new Error("[SettingRenderer] Found unsupported renderer type for setting: " + settingData.setting);
    throw error;
  }
};
export const renderSettingSearchResultPlaceholderItem = function renderSettingSearchResultPlaceholderItem(start) {
  return state(closure_35, { start: start.start, end: start.end });
};