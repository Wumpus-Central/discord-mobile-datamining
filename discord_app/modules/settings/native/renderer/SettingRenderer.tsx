// === Module 16536: SettingRenderer ===

// Module 16536 (SettingRenderer)
import initialize from "initialize" /* 504 */;
import nativeDefault from "native" /* 575 */;
import KeyboardManagerUtils from "KeyboardManagerUtils" /* 1889 */;
import AccessibilityPreferencesContext from "AccessibilityPreferencesContext" /* 5023 */;
import HapticUtils from "HapticUtils" /* 5255 */;
import haptics_HapticFeedbackTypesDefault from "haptics/HapticFeedbackTypes" /* 5256 */;
import useToken from "useToken" /* 5591 */;
import Text_Text from "Text/Text" /* 5619 */;
import ToastUtils from "ToastUtils" /* 5706 */;
import GuildIcon from "GuildIcon" /* 6951 */;
import TableRow from "TableRow" /* 6969 */;
import TableRadioGroup from "TableRadioGroup" /* 7052 */;
import TableRadioRow from "TableRadioRow" /* 7055 */;
import ClipboardUtils from "ClipboardUtils" /* 7352 */;
import TableSwitchRow from "TableSwitchRow" /* 7363 */;
import FormSwitch from "FormSwitch" /* 7364 */;
import ClydeIcon from "ClydeIcon" /* 10665 */;
import VolumeSliderDefault from "VolumeSlider" /* 11910 */;
import SettingRendererUtils from "SettingRendererUtils" /* 16537 */;
import useHighlightSettingItem from "useHighlightSettingItem" /* 16539 */;
import SettingListItemHighlightDefault from "SettingListItemHighlight" /* 16540 */;
import settings_tracking_Tracking from "settings/tracking/Tracking" /* 16541 */;
import _slicedToArray from "module_32" /* 32 */;
import _objectWithoutProperties from "_objectWithoutProperties" /* 109 */;
import noop from "module_19" /* 19 */;
import LocaleStore from "LocaleStore" /* 2063 */;
import UserSettingSearchStore from "UserSettingSearchStore" /* 16535 */;
import GuildStore from "GuildStore" /* 4880 */;

const GuildIconDefault = GuildIcon;

require = fn;
class GuildSelectDefaultIcon {
  constructor(arg0) {
    str = global.size;
    if (str === undefined) {
      str = "sm";
    }
    num = 32;
    tmp = closure_17();
    if ("xs" === str) {
      num = 24;
    }
    obj = { style: null, children: null };
    obj1 = {};
    merged = Object.assign(tmp.defaultIcon);
    obj1.width = num;
    obj1.height = num;
    obj1.borderRadius = num / 3;
    obj.style = obj1;
    obj.children = jsx(closure_0(closure_2[17]).ClydeIcon, { color: "white", size: str });
    return jsx(View, obj);
  }
}
function DisabledActionDescriptionWithLink(children) {
  ({ description, descriptionVariant, descriptionColor } = children);
  const tmp4 = closure_1_14(Text_Text.Text, { variant: "text-xs/medium", color: "text-link", children: children.disabledActionLabel });
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
      tmpResult = closure_1_14(Text_Text.Text, obj);
    }
    const obj2 = { children: null };
    const items = [tmp4, tmpResult];
    obj2.children = items;
    return __initData2(View, obj2);
  }
}
function ForceSwitchIcons(children) {
  const context = noop.useContext(AccessibilityPreferencesContext.AccessibilityPreferencesContext);
  const items = [context];
  value = noop.useMemo(() => {
    const obj = {};
    const merged = Object.assign(context);
    obj.switchIconsEnabled = true;
    return obj;
  }, items);
  return closure_1_14(AccessibilityPreferencesContext.AccessibilityPreferencesContext.Provider, { value, children: children.children });
}
function SettingSearchResultBreadcrumbs(breadcrumbs) {
  breadcrumbs = breadcrumbs.breadcrumbs;
  let tmp = null;
  if (0 !== breadcrumbs.length) {
    const obj = { variant: "text-xs/medium", color: "text-muted", children: breadcrumbs.join(" \u2192 ") };
    tmp = closure_1_14(Text_Text.Text, obj);
  }
  return tmp;
}
function SettingSearchResultIcon(IconComponent) {
  IconComponent = IconComponent.IconComponent;
  useToken;
  if (null == IconComponent) {
    const obj2 = { style: null };
    const obj3 = { width: tmp4 };
    obj2.style = obj3;
    let tmp6 = closure_1_14(View, obj2);
  } else {
    const obj = { IconComponent };
    tmp6 = closure_1_14(TableRow.TableRow.Icon, obj);
  }
  return tmp6;
}
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
  return closure_14(tmp(tmp2[12]).TableRow, { label: title, onPress: callback, arrow: true, icon: closure_14(SettingSearchResultIcon, { IconComponent }), subLabel: closure_14(SettingSearchResultBreadcrumbs, { breadcrumbs }), start: 0 === index, end: index === total - 1 });
}
function PressableSettingSearchResult(setting) {
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
  return closure_14(title(index[12]).TableRow, { label: title, onPress: callback, icon: closure_14(SettingSearchResultIcon, { IconComponent }), subLabel: closure_14(SettingSearchResultBreadcrumbs, { breadcrumbs }), start: 0 === index, end: index === total - 1, arrow: settingData.withArrow });
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
  obj.icon = closure_14(SettingSearchResultIcon, { IconComponent });
  obj.subLabel = closure_14(SettingSearchResultBreadcrumbs, { breadcrumbs });
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
function SettingSearchResultPlaceholder(arg0) {
  ({ start, end } = arg0);
  const tmp = closure_17();
  const obj = { start, end, label: null, icon: null };
  const obj2 = { style: null };
  const items = [tmp.placeholderUsername, _slicedToArray(noop.useState(() => ({ width: `${10 + 80 * Math.random() | 0}%` })), 1)[0]];
  obj2.style = items;
  obj.label = closure_1_14(View, obj2);
  obj.icon = closure_1_14(View, { style: tmp.placeholderAvatar });
  return closure_1_14(TableRow.TableRow, obj);
}
let closure_3 = ["onChangeEnd", "step", "startIcon", "endIcon", "minValue", "maxValue", "valueLabel", "defaultValue", "onChange"];
let closure_4 = ["settingData"];
const View = fn(17).View;
const SettingRendererConstants = fn(11506);
({ GUILD_SELECT_ALL_SERVERS_OPTION_ID: closure_12, NodeType: map1 } = SettingRendererConstants);
const jsxProd = fn(21);
({ jsx: closure_14, Fragment: closure_15, jsxs: closure_16 } = jsxProd);
const createStyles = fn(5009);
let obj = { slider: { marginTop: nativeDefault.space.PX_16, marginBottom: nativeDefault.space.PX_8 }, sliderTitle: { flexDirection: "row", justifyContent: "space-between" }, radioSettingHighlight: { top: 26 }, defaultIcon: null, placeholderAvatar: null, placeholderUsername: null };
let obj3 = { marginTop: nativeDefault.space.PX_16, marginBottom: nativeDefault.space.PX_8 };
obj.defaultIcon = { backgroundColor: nativeDefault.colors.BACKGROUND_BRAND, justifyContent: "center", alignItems: "center" };
let size = { width: fn(1188).AVATAR_SIZE_MAP[fn(undefined, 1188).AvatarSizes.REFRESH_MEDIUM_32], height: fn(1188).AVATAR_SIZE_MAP[fn(undefined, 1188).AvatarSizes.REFRESH_MEDIUM_32], borderRadius: nativeDefault.radii.xl, backgroundColor: nativeDefault.colors.BACKGROUND_MOD_MUTED };
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
  const stateFromStores = screen(preNavigationAction[13]).useStateFromStores(items, () => callback.locale);
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
    tmp12 = closure_14(DisabledActionDescriptionWithLink, obj3);
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
let closure_20 = noop.memo(function GuildSelectorSetting(useSelectedGuildId) {
  const merged = Object.assign(useSelectedGuildId, Object.assign({ useSelectedGuildId: 0 }));
  dependencyMap = undefined;
  const selectedGuildId = useSelectedGuildId.useSelectedGuildId();
  const items = [GuildStore];
  closure_1 = selectedGuildId(504).useStateFromStores(items, () => GuildStore.getGuild(selectedGuildId));
  closure_129_0 = selectedGuildId;
  let obj = selectedGuildId(504);
  const items1 = [GuildStore];
  const stateFromStores = selectedGuildId(504).useStateFromStores(items1, () => GuildStore.getGuild(selectedGuildId));
  if (selectedGuildId === closure_12) {
    const intl2 = tmp3(1114).intl;
    let stringResult = intl2.string(tmp3(1114).t["32u1Dx"]);
  } else {
    stringResult = undefined;
    if (stateFromStores != null) {
      stringResult = stateFromStores.name;
    }
    if (stringResult == null) {
      const intl = tmp3(1114).intl;
      stringResult = intl.string(tmp3(1114).t["XBwns+"]);
    }
  }
  dependencyMap = stringResult;
  const items2 = [stringResult];
  const obj2 = selectedGuildId(504);
  const obj3 = {};
  const callback = noop.useCallback(() => c2, items2);
  const merged1 = Object.assign(merged);
  obj3.type = constants.PRESSABLE;
  obj3.useTitle = callback;
  obj3.withArrow = true;
  obj3.IconComponent = noop.memo(function SelectorGuildIcon() {
    if (null == closure_1) {
      let tmp7 = closure_2_14(GuildSelectDefaultIcon, {});
    } else {
      const obj = { size: GuildIcon.GuildIconSizes.SMALL_32, guild: tmp };
      tmp7 = closure_2_14(GuildIconDefault, obj);
    }
    return tmp7;
  });
  return closure_14(closure_21, obj3);
});
let closure_21 = noop.memo(function PressableSetting(arg0) {
  ({ useDescription, useIsDisabled, useTrailing, variant, start, end, IconComponent } = arg0);
  ({ setting, onPress, useTitle, withArrow } = arg0);
  let highlightSettingItem = useHighlightSettingItem.useHighlightSettingItem(setting);
  const items = [LocaleStore];
  const stateFromStores = initialize.useStateFromStores(items, () => callback.locale);
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
    tmp11Result = closure_1_14(TableRow.TableRow.Icon, obj4);
  }
  obj3.icon = tmp11Result;
  obj3.onPress = onPress;
  obj3.disabled = true === isDisabled;
  let tmp13;
  if (null != trailing) {
    let tmp11Result2 = trailing;
    if (typeof trailing === "string") {
      const obj5 = { text: trailing };
      tmp11Result2 = closure_1_14(TableRow.TableRow.TrailingText, obj5);
    }
    tmp13 = tmp11Result2;
  }
  obj3.trailing = tmp13;
  obj3.start = start;
  obj3.end = end;
  const children = [closure_1_14(TableRow.TableRow, obj3), ];
  if (highlightSettingItem) {
    const obj6 = { start, end };
    highlightSettingItem = closure_1_14(SettingListItemHighlightDefault, obj6);
  }
  children[1] = highlightSettingItem;
  return __initData2(__initData, { children });
});
let closure_23 = noop.memo(function ToggleSetting(arg0) {
  ({ useDescription, useIsDisabled, variant, start, end, IconComponent } = arg0);
  ({ setting, onValueChange, useTitle, useValue, hasIcon } = arg0);
  let highlightSettingItem = useHighlightSettingItem.useHighlightSettingItem(setting);
  const items = [LocaleStore];
  const stateFromStores = initialize.useStateFromStores(items, () => callback.locale);
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
    tmp9 = closure_1_14(TableRow.TableRow.Icon, obj4);
  }
  obj3.icon = tmp9;
  obj3.variant = variant;
  obj3.start = start;
  obj3.end = end;
  if (typeof isDisabled === "object") {
    const obj6 = {};
    const merged = Object.assign(obj3);
    const obj7 = { disabledActionLabel: isDisabled.label, description, descriptionVariant: "text-md/semibold", descriptionColor: "mobile-text-heading-primary" };
    obj6.subLabel = closure_1_14(DisabledActionDescriptionWithLink, obj7);
    obj6.accessible = true;
    ({ accessibilityHint: obj5.accessibilityHint, onPress: obj5.onPress } = isDisabled);
    const obj8 = { style: { opacity: 0.5 }, children: null };
    const obj9 = { "aria-hidden": true, value, disabled: true };
    obj8.children = closure_1_14(FormSwitch.FormSwitch, obj9);
    obj6.trailing = closure_1_14(View, obj8);
    let tmp17 = closure_1_14(TableRow.TableRow, obj6);
    let tmp18 = closure_1_14;
  } else {
    const obj10 = {};
    const merged1 = Object.assign(obj3);
    obj10.disabled = isDisabled;
    obj10.onValueChange = onValueChange;
    obj10.value = value;
    tmp17 = closure_1_14(TableSwitchRow.TableSwitchRow, obj10);
    tmp18 = closure_1_14;
  }
  let tmp18Result = tmp17;
  if (true === hasIcon) {
    const obj11 = { children: tmp17 };
    tmp18Result = tmp18(ForceSwitchIcons, obj11);
  }
  const children = [tmp18Result, ];
  if (highlightSettingItem) {
    const obj20 = { start, end };
    highlightSettingItem = tmp18(SettingListItemHighlightDefault, obj20);
  }
  children[1] = highlightSettingItem;
  return __initData2(__initData, { children });
});
let closure_25 = noop.memo(function RadioSetting(arg0) {
  ({ setting, useTitle, useValue, useOptions, onValueChange } = arg0);
  const tmp = closure_17();
  let highlightSettingItem = useHighlightSettingItem.useHighlightSettingItem(setting);
  const items = [LocaleStore];
  const stateFromStores = initialize.useStateFromStores(items, () => callback.locale);
  const title = useTitle();
  value = useValue();
  const options = useOptions();
  let combined = value;
  if (typeof value === "number") {
    let _HermesInternal = HermesInternal;
    combined = "" + value;
  }
  const someResult = options.some((icon) => null != icon.icon);
  const children = [
    closure_1_14(TableRadioGroup.TableRadioGroup, {
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
        return closure_1_14(TableRadioRow.TableRadioRow, { value: combined, label: label.label, subLabel: label.subLabel, disabled: label.disabled, icon: label.icon }, label.value);
      })
    }, combined),

  ];
  if (highlightSettingItem) {
    const obj4 = { start: true, end: true, style: tmp.radioSettingHighlight };
    highlightSettingItem = closure_1_14(SettingListItemHighlightDefault, obj4);
  }
  children[1] = highlightSettingItem;
  return __initData2(__initData, { children });
});
let closure_26 = noop.memo(function StaticSetting(arg0) {
  ({ variant, useTrailing, useIsDisabled, useDescription, start, end, IconComponent } = arg0);
  let trailing;
  ({ setting, useTitle } = arg0);
  let highlightSettingItem = trailing(16539).useHighlightSettingItem(setting);
  let obj = trailing(16539);
  const items = [LocaleStore];
  const stateFromStores = trailing(504).useStateFromStores(items, () => callback.locale);
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
    tmp12Result = closure_14(tmp(6969).TableRow.Icon, obj4);
  }
  obj3.icon = tmp12Result;
  let tmp12Result2 = null;
  if (null != trailing) {
    const obj5 = { text: trailing };
    tmp12Result2 = closure_14(tmp(6969).TableRow.TrailingText, obj5);
  }
  obj3.trailing = tmp12Result2;
  obj3.start = start;
  obj3.end = end;
  const children = [closure_14(trailing(6969).TableRow, obj3), ];
  if (highlightSettingItem) {
    const obj6 = { start, end };
    highlightSettingItem = closure_14(SettingListItemHighlightDefault, obj6);
  }
  children[1] = highlightSettingItem;
  return closure_16(closure_15, { children });
});
let closure_27 = noop.memo(function VolumeSliderSetting(arg0) {
  ({ useValue, start, end } = arg0);
  ({ setting, useTitle, onValueChange, maximum } = arg0);
  let highlightSettingItem = useHighlightSettingItem.useHighlightSettingItem(setting);
  const tmp4 = closure_17();
  const items = [LocaleStore];
  const stateFromStores = initialize.useStateFromStores(items, () => callback.locale);
  const title = useTitle();
  value = undefined;
  if (useValue != null) {
    value = useValue();
  }
  const obj3 = { label: title, start, end, subLabel: null };
  obj3.subLabel = closure_1_14(View, { style: tmp4.slider, children: closure_1_14(VolumeSliderDefault, { value, maxVolume: maximum, onValueChange, accessibilityLabel: title }) });
  const children = [closure_1_14(TableRow.TableRow, obj3), ];
  if (highlightSettingItem) {
    const obj5 = { start, end };
    highlightSettingItem = closure_1_14(SettingListItemHighlightDefault, obj5);
  }
  children[1] = highlightSettingItem;
  return __initData2(__initData, { children });
});
let closure_28 = noop.memo(function SliderSetting(useTrailing) {
  useTrailing = useTrailing.useTrailing;
  let onChangeEnd;
  let num2;
  let num4;
  let num3;
  _objectWithoutProperties = undefined;
  value = undefined;
  closure_8 = undefined;
  let onChange;
  let callback1;
  ({ useTitle, start, end, useProps } = useTrailing);
  const items = [onChange];
  const stateFromStores = onChangeEnd(num2[13]).useStateFromStores(items, () => callback.locale);
  const title = useTitle();
  const props = useProps();
  onChangeEnd = props.onChangeEnd;
  const step = props.step;
  let num = 0.1;
  if (undefined !== step) {
    num = step;
  }
  const minValue = props.minValue;
  num2 = 0;
  ({ startIcon, endIcon } = props);
  if (undefined !== minValue) {
    num2 = minValue;
  }
  const maxValue = props.maxValue;
  num3 = 1;
  num4 = 1;
  if (undefined !== maxValue) {
    num4 = maxValue;
  }
  ({ valueLabel, defaultValue } = props);
  if (undefined !== defaultValue) {
    num3 = defaultValue;
  }
  onChange = props.onChange;
  const tmp7 = _objectWithoutProperties(props, num4);
  _objectWithoutProperties = tmp7;
  const tmp8 = closure_17();
  const obj = onChangeEnd(num2[13]);
  const tmp3 = onChange;
  const items1 = [tmp3];
  const stateFromStores1 = onChangeEnd(num2[13]).useStateFromStores(items1, () => callback.locale);
  const tmp10 = onChange(value.useState(() => {
    value = value.value;
    if (value == null) {
      value = num3;
    }
    return value;
  }), 2);
  value = tmp10[0];
  closure_8 = tmp10[1];
  const items2 = [onChange];
  onChange = value.useCallback((arg0) => {
    closure_8(arg0);
    if (onChange != null) {
      onChange(arg0);
    }
  }, items2);
  const items3 = [onChange, onChangeEnd];
  callback1 = value.useCallback((arg0) => {
    callback(arg0);
    if (onChangeEnd != null) {
      onChangeEnd(arg0);
    }
  }, items3);
  const items4 = [num3, callback1];
  const items5 = [callback1, num4, num, value];
  const callback2 = value.useCallback(() => callback1(num3), items4);
  const items6 = [callback1, num2, num, value];
  const callback3 = value.useCallback(() => {
    callback1(Math.min(num4, first + num));
    const result = HapticUtils.triggerHapticFeedback(haptics_HapticFeedbackTypesDefault.IMPACT_LIGHT);
  }, items5);
  let trailing;
  const callback4 = value.useCallback(() => {
    callback1(Math.max(num2, first - num));
    const result = HapticUtils.triggerHapticFeedback(haptics_HapticFeedbackTypesDefault.IMPACT_LIGHT);
  }, items6);
  if (useTrailing != null) {
    trailing = useTrailing();
  }
  const obj2 = { start, end, shadow: "none", border: "none", children: null };
  const obj3 = { style: tmp8.sliderTitle, children: null };
  const items7 = [closure_14(onChangeEnd(num2[21]).Text, { variant: "text-md/semibold", children: title }), trailing];
  obj3.children = items7;
  const items8 = [closure_16(closure_8, obj3), ];
  let tmp18Result = null != value;
  if (tmp18Result) {
    if (formatPercentResult == null) {
      formatPercentResult = tmp(tmp2[34]).formatPercent(stateFromStores1, value);
      const tmpResult3 = tmp(tmp2[34]);
    }
    const obj4 = { variant: "text-sm/medium", color: "text-muted", children: formatPercentResult };
    tmp18Result = closure_14(tmp(tmp2[21]).Text, obj4);
  }
  items8[1] = tmp18Result;
  const items9 = [closure_16(onChangeEnd(num2[33]).Stack, { direction: "horizontal", justify: "space-between", children: items8 }), , ];
  const tmp20 = closure_8;
  const tmpResult = onChangeEnd(num2[13]);
  let slider;
  if (tmpResult4.isAndroid()) {
    slider = tmp8.slider;
  }
  const obj5 = { children: null };
  const obj6 = { style: slider, children: null };
  const obj7 = {};
  const merged = Object.assign(tmp7);
  obj7.accessibilityLabel = title;
  obj7.step = num;
  obj7.onChange = onChange;
  obj7.value = value;
  obj7.minValue = num2;
  obj7.maxValue = num4;
  obj7.onChangeEnd = onChangeEnd;
  obj7.startIcon = closure_14(onChangeEnd(num2[37]).PressableOpacity, { accessible: false, onPress: callback4, children: startIcon });
  obj7.endIcon = closure_14(onChangeEnd(num2[37]).PressableOpacity, { accessible: false, onPress: callback3, children: endIcon });
  obj6.children = closure_14(onChangeEnd(num2[36]).Slider, obj7);
  items9[1] = closure_14(tmp20, obj6);
  const obj8 = { disabled: value === num3, variant: "secondary", text: null, onPress: null };
  const intl = tmp(tmp2[16]).intl;
  obj8.text = intl.string(onChangeEnd(num2[16]).t["3b//lO"]);
  obj8.onPress = callback2;
  items9[2] = closure_14(onChangeEnd(num2[38]).Button, obj8);
  obj5.children = items9;
  obj2.children = closure_16(onChangeEnd(num2[33]).Stack, obj5);
  return closure_14(onChangeEnd(num2[32]).Card, obj2);
});
size = fn(2);
let result = size.fileFinishedImporting("modules/settings/native/renderer/SettingRenderer.tsx");

export { GuildSelectDefaultIcon };
export function renderSettingItem(item) {
  ({ setting, settingData, start, end } = item);
  const type = settingData.type;
  if (constants.GUILD_SELECTOR === type) {
    const obj2 = {};
    const merged = Object.assign(settingData);
    obj2.setting = setting;
    obj2.start = start;
    obj2.end = end;
    return closure_1_14(closure_20, obj2);
  } else if (constants.ROUTE === type) {
    const obj3 = {};
    const merged1 = Object.assign(settingData);
    obj3.start = start;
    obj3.end = end;
    return closure_1_14(closure_18, obj3);
  } else if (constants.PRESSABLE === type) {
    const obj4 = {};
    const merged2 = Object.assign(settingData);
    obj4.start = start;
    obj4.end = end;
    obj4.setting = setting;
    return closure_1_14(closure_21, obj4);
  } else if (constants.TOGGLE === type) {
    const obj5 = {};
    const merged3 = Object.assign(settingData);
    obj5.start = start;
    obj5.end = end;
    obj5.setting = setting;
    return closure_1_14(closure_23, obj5);
  } else if (constants.STATIC === type) {
    const obj6 = {};
    const merged4 = Object.assign(settingData);
    obj6.start = start;
    obj6.end = end;
    obj6.setting = setting;
    return closure_1_14(closure_26, obj6);
  } else if (constants.VOLUME_SLIDER === type) {
    const obj7 = {};
    const merged5 = Object.assign(settingData);
    obj7.start = start;
    obj7.end = end;
    obj7.setting = setting;
    return closure_1_14(closure_27, obj7);
  } else if (constants.RADIO === type) {
    const obj8 = {};
    const merged6 = Object.assign(settingData);
    obj8.setting = setting;
    return closure_1_14(closure_25, obj8);
  } else if (constants.SLIDER === type) {
    const obj = {};
    const merged7 = Object.assign(settingData);
    obj.start = start;
    obj.end = end;
    obj.setting = setting;
    return closure_1_14(closure_28, obj);
  }
}
export function renderSettingSearchResultItem(settingData) {
  settingData = settingData.settingData;
  const tmp = _objectWithoutProperties(settingData, closure_4);
  const type = settingData.type;
  if (constants.ROUTE === type) {
    const obj2 = { settingData };
    const merged = Object.assign(tmp);
    return closure_1_14(RouteSettingSearchResult, obj2);
  } else if (constants.PRESSABLE === type) {
    const obj3 = { settingData };
    const merged1 = Object.assign(tmp);
    return closure_1_14(PressableSettingSearchResult, obj3);
  } else if (constants.STATIC === type) {
    const obj = { settingData };
    const merged2 = Object.assign(tmp);
    return closure_1_14(StaticSettingSearchResult, obj);
  } else {
    const _Error = Error;
    const _HermesInternal = HermesInternal;
    const error = new Error("[SettingRenderer] Found unsupported renderer type for setting: " + settingData.setting);
    throw error;
  }
}
export function renderSettingSearchResultPlaceholderItem(start) {
  return closure_1_14(SettingSearchResultPlaceholder, { start: start.start, end: start.end });
}