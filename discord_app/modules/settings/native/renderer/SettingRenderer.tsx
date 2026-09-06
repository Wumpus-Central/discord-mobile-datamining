// discord_app/modules/settings/native/renderer/SettingRenderer.tsx
import nativeDefault from "../../../../../discord_common/js/packages/tokens/native.tsx";
import KeyboardManagerUtils from "../../../../utils/native/KeyboardManagerUtils.tsx";
import ToastUtils from "../../../toast/native/ToastUtils.tsx";
import useToken from "../../../../design/tokens/native/useToken.tsx";
import AccessibilityPreferencesContext from "../../../../../discord_common/js/packages/design/components/AccessibilityPreferencesContext/AccessibilityPreferencesContext.tsx";
import HapticUtils from "../../../haptics/HapticUtils.native.tsx";
import haptics_HapticFeedbackTypesDefault from "../../../haptics/HapticFeedbackTypes.tsx";
import Text_Text from "../../../../design/components/Text/native/Text.tsx";
import GuildIcon from "../../../guild/native/GuildIcon.tsx";
import TableRow from "../../../../design/components/TableRow/native/TableRow.native.tsx";
import TableRadioGroup from "../../../../design/components/TableRow/native/TableRadioGroup.native.tsx";
import TableRadioRow from "../../../../design/components/TableRow/native/TableRadioRow.native.tsx";
import Tracking from "../../tracking/Tracking.tsx";
import ClipboardUtils from "../../../../utils/ClipboardUtils.native.tsx";
import TableSwitchRow from "../../../../design/components/TableRow/native/TableSwitchRow.native.tsx";
import VolumeSliderDefault from "../../../../components_native/common/VolumeSlider.tsx";
import ClydeIcon from "../../../../design/components/Icon/native/redesign/generated/ClydeIcon.tsx";
import SettingRendererUtils from "SettingRendererUtils.tsx";
import useHighlightSettingItem from "hooks/useHighlightSettingItem.tsx";
import SettingListItemHighlightDefault from "SettingListItemHighlight.tsx";
import _slicedToArray from "../../../../../_runtime/metro/00032__.js";
import _objectWithoutProperties from "../../../../../_runtime/metro/00109__objectWithoutProperties.js";
import noop from "../../../../../_runtime/metro/00019__.js";
import LocaleStore from "../../../user_settings/LocaleStore.tsx";
import UserSettingSearchStore from "../../../user_settings/UserSettingSearchStore.tsx";
import GuildStore from "../../../../stores/GuildStore.tsx";

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
    obj = {};
    merged = Object.assign(tmp.defaultIcon);
    obj.width = num;
    obj.height = num;
    obj.borderRadius = num / 3;
    obj.style = obj;
    obj.children = jsx(closure_0(closure_2[17]).ClydeIcon, { color: "white", size: str });
    return jsx(View, obj);
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
  return closure_1_14(AccessibilityPreferencesContext.AccessibilityPreferencesContext.Provider, {
    value,
    children: children.children,
  });
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
    let obj = { style: null };
    obj = { width: tmp4 };
    obj.style = obj;
    let tmp6 = closure_1_14(View, obj);
  } else {
    obj = { IconComponent };
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
  let obj = title(index[13]);
  const stackNavigation = obj.useStackNavigation();
  const screen = settingData.screen;
  const usePreNavigationAction = settingData.usePreNavigationAction;
  let preNavigationAction;
  if (usePreNavigationAction != null) {
    preNavigationAction = usePreNavigationAction();
  }
  const items = [preNavigationAction, index, stackNavigation, screen, setting, title, total];
  const callback = noop.useCallback(() => {
    let obj = { selected: setting };
    UserSettingSearchStore.setState(obj);
    obj = { setting, title, route: screen.route, searchResultPosition: index, numSearchResults: total };
    const result = Tracking.trackSettingSearchResultPress(obj);
    obj = { navigation: stackNavigation, screen, preNavigationAction };
    const result1 = SettingRendererUtils.onRouteSettingOnPress(obj);
  }, items);
  obj = {
    label: title,
    onPress: callback,
    arrow: true,
    icon: closure_14(SettingSearchResultIcon, { IconComponent }),
    subLabel: closure_14(SettingSearchResultBreadcrumbs, { breadcrumbs }),
    start: 0 === index,
    end: index === total - 1,
  };
  return closure_14(title(index[12]).TableRow, obj);
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
    const obj = { setting, title, searchResultPosition: index, numSearchResults: total };
    const result = obj.trackSettingSearchResultPress(obj);
    const result1 = KeyboardManagerUtils.dismissGlobalKeyboard();
    onPress();
  }, items);
  return closure_14(title(index[12]).TableRow, {
    label: title,
    onPress: callback,
    icon: closure_14(SettingSearchResultIcon, { IconComponent }),
    subLabel: closure_14(SettingSearchResultBreadcrumbs, { breadcrumbs }),
    start: 0 === index,
    end: index === total - 1,
    arrow: settingData.withArrow,
  });
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
      const obj = { setting, title, searchResultPosition: index, numSearchResults: total };
      const result = obj.trackSettingSearchResultPress(obj);
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
    obj = { text: trailing };
    tmp3Result = closure_14(title(index[12]).TableRow.TrailingText, obj);
  }
  obj.trailing = tmp3Result;
  obj.start = 0 === index;
  obj.end = index === total - 1;
  return closure_14(title(index[12]).TableRow, obj);
}
function SettingSearchResultPlaceholder(arg0) {
  ({ start, end } = arg0);
  const tmp = closure_17();
  let obj = { start, end, label: null, icon: null };
  obj = { style: null };
  const items = [
    tmp.placeholderUsername,
    _slicedToArray(
      noop.useState(() => ({ width: `${(10 + 80 * Math.random()) | 0}%` })),
      1,
    )[0],
  ];
  obj.style = items;
  obj.label = closure_1_14(View, obj);
  obj = { style: tmp.placeholderAvatar };
  obj.icon = closure_1_14(View, obj);
  return closure_1_14(TableRow.TableRow, obj);
}
let closure_3 = [
  "onSlidingComplete",
  "step",
  "startIcon",
  "endIcon",
  "minimumValue",
  "maximumValue",
  "valueLabel",
  "defaultValue",
  "onValueChange",
];
let closure_4 = ["settingData"];
const View = fn(17).View;
const SettingRendererConstants = fn(11469);
({ GUILD_SELECT_ALL_SERVERS_OPTION_ID: closure_12, NodeType: map1 } = SettingRendererConstants);
const jsxProd = fn(21);
({ jsx: closure_14, Fragment: closure_15, jsxs: closure_16 } = jsxProd);
fn(4560);
let obj = {
  slider: null,
  sliderTitle: null,
  radioSettingHighlight: null,
  defaultIcon: null,
  placeholderAvatar: null,
  placeholderUsername: null,
};
obj = { marginTop: nativeDefault.space.PX_16, marginBottom: nativeDefault.space.PX_8 };
obj.slider = obj;
obj.sliderTitle = { flexDirection: "row", justifyContent: "space-between" };
obj.radioSettingHighlight = { top: 26 };
const createStyles = {
  backgroundColor: nativeDefault.colors.BACKGROUND_BRAND,
  justifyContent: "center",
  alignItems: "center",
};
obj.defaultIcon = createStyles;
let size = {
  width: fn(1178).AVATAR_SIZE_MAP[fn(undefined, 1178).AvatarSizes.REFRESH_MEDIUM_32],
  height: fn(1178).AVATAR_SIZE_MAP[fn(undefined, 1178).AvatarSizes.REFRESH_MEDIUM_32],
  borderRadius: nativeDefault.radii.xl,
  backgroundColor: nativeDefault.colors.BACKGROUND_MOD_MUTED,
};
obj.placeholderAvatar = size;
obj.placeholderUsername = {
  height: 20,
  borderRadius: nativeDefault.radii.md,
  backgroundColor: nativeDefault.colors.BACKGROUND_MOD_MUTED,
};
let closure_17 = createStyles.createStyles(obj);
let closure_18 = noop.memo((arg0) => {
  ({ useTrailing, usePreNavigationAction, screen } = arg0);
  ({ useDescription, useIsDisabled, IconComponent } = arg0);
  let preNavigationAction;
  ({ useTitle, variant, start, end } = arg0);
  let obj = screen(preNavigationAction[13]);
  const stackNavigation = obj.useStackNavigation();
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
  const items = [stackNavigation, screen, preNavigationAction];
  const callback = noop.useCallback(() => {
    const obj = { navigation: stackNavigation, screen, preNavigationAction };
    const result = obj.onRouteSettingOnPress(obj);
  }, items);
  obj = {
    label: title,
    subLabel: description,
    disabled: isDisabled,
    arrow: true,
    variant,
    icon: null,
    trailing: null,
    onPress: null,
    start: null,
    end: null,
  };
  let tmp10Result = null;
  if (null != IconComponent) {
    obj = { IconComponent };
    tmp10Result = closure_14(screen(tmp2[12]).TableRow.Icon, obj);
  }
  obj.icon = tmp10Result;
  let tmp12 = null;
  if (null != trailing) {
    let tmp13;
    if (null != trailing) {
      tmp10Result = trailing;
      if (typeof trailing === "string") {
        const obj1 = { text: trailing };
        tmp10Result = closure_14(screen(tmp2[12]).TableRow.TrailingText, obj1);
      }
      tmp13 = tmp10Result;
    }
    tmp12 = tmp13;
  }
  obj.trailing = tmp12;
  obj.onPress = callback;
  obj.start = start;
  obj.end = end;
  return closure_14(screen(preNavigationAction[12]).TableRow, obj);
});
let closure_20 = noop.memo((useSelectedGuildId) => {
  const merged = Object.assign(useSelectedGuildId, Object.assign({ useSelectedGuildId: 0 }));
  dependencyMap = undefined;
  const selectedGuildId = useSelectedGuildId.useSelectedGuildId();
  let obj = selectedGuildId(504);
  const items = [GuildStore];
  closure_1 = obj.useStateFromStores(items, () => GuildStore.getGuild(selectedGuildId));
  closure_129_0 = selectedGuildId;
  const items1 = [GuildStore];
  const stateFromStores = selectedGuildId(504).useStateFromStores(items1, () => GuildStore.getGuild(selectedGuildId));
  if (selectedGuildId === closure_12) {
    const intl2 = tmp3(1114).intl;
    let stringResult = intl2.string(tmp3(1114).t.OMVg25);
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
  obj = {};
  const callback = noop.useCallback(() => c2, items2);
  const merged1 = Object.assign(merged);
  obj.type = constants.PRESSABLE;
  obj.useTitle = callback;
  obj.withArrow = true;
  obj.IconComponent = noop.memo(() => {
    if (null == closure_1) {
      let tmp7 = closure_2_14(GuildSelectDefaultIcon, {});
    } else {
      const obj = { size: GuildIcon.GuildIconSizes.SMALL_32, guild: tmp };
      tmp7 = closure_2_14(GuildIconDefault, obj);
    }
    return tmp7;
  });
  return closure_14(closure_21, obj);
});
let closure_21 = noop.memo((arg0) => {
  ({ useDescription, useIsDisabled, useTrailing, variant, start, end, IconComponent } = arg0);
  ({ setting, onPress, useTitle, withArrow } = arg0);
  let obj = useHighlightSettingItem;
  let highlightSettingItem = obj.useHighlightSettingItem(setting);
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
  obj = {
    label: title,
    subLabel: description,
    arrow: withArrow,
    variant,
    icon: null,
    onPress: null,
    disabled: null,
    trailing: null,
    start: null,
    end: null,
  };
  let tmp10Result = null;
  if (null != IconComponent) {
    obj = { IconComponent, variant };
    tmp10Result = closure_1_14(TableRow.TableRow.Icon, obj);
  }
  obj.icon = tmp10Result;
  obj.onPress = onPress;
  obj.disabled = isDisabled;
  let tmp12;
  if (null != trailing) {
    tmp10Result = trailing;
    if (typeof trailing === "string") {
      const obj1 = { text: trailing };
      tmp10Result = closure_1_14(TableRow.TableRow.TrailingText, obj1);
    }
    tmp12 = tmp10Result;
  }
  obj.trailing = tmp12;
  obj.start = start;
  obj.end = end;
  const children = [closure_1_14(TableRow.TableRow, obj)];
  if (highlightSettingItem) {
    const obj2 = { start, end };
    highlightSettingItem = closure_1_14(SettingListItemHighlightDefault, obj2);
  }
  children[1] = highlightSettingItem;
  return value2(__initData, { children });
});
let closure_22 = noop.memo((arg0) => {
  ({ useDescription, useIsDisabled, variant, start, end, IconComponent } = arg0);
  ({ setting, onValueChange, useTitle, useValue, hasIcon } = arg0);
  let obj = useHighlightSettingItem;
  let highlightSettingItem = obj.useHighlightSettingItem(setting);
  const title = useTitle();
  let description;
  value = useValue();
  if (useDescription != null) {
    description = useDescription();
  }
  let isDisabled;
  if (useIsDisabled != null) {
    isDisabled = useIsDisabled();
  }
  obj = {
    label: title,
    subLabel: description,
    icon: null,
    value: null,
    variant: null,
    disabled: null,
    onValueChange: null,
    start: null,
    end: null,
  };
  let tmp8Result = null;
  if (null != IconComponent) {
    obj = { IconComponent, variant };
    tmp8Result = closure_1_14(TableRow.TableRow.Icon, obj);
  }
  obj.icon = tmp8Result;
  obj.value = value;
  obj.variant = variant;
  obj.disabled = isDisabled;
  obj.onValueChange = onValueChange;
  obj.start = start;
  obj.end = end;
  tmp8Result = closure_1_14(TableSwitchRow.TableSwitchRow, obj);
  let tmp8Result1 = tmp8Result;
  if (true === hasIcon) {
    const obj1 = { children: tmp8Result };
    tmp8Result1 = closure_1_14(ForceSwitchIcons, obj1);
  }
  const children = [tmp8Result1];
  if (highlightSettingItem) {
    const obj2 = { start, end };
    highlightSettingItem = closure_1_14(SettingListItemHighlightDefault, obj2);
  }
  children[1] = highlightSettingItem;
  return value2(__initData, { children });
});
let closure_24 = noop.memo((arg0) => {
  ({ setting, useTitle, useValue, useOptions, onValueChange } = arg0);
  let obj = useHighlightSettingItem;
  let highlightSettingItem = obj.useHighlightSettingItem(setting);
  const title = useTitle();
  value = useValue();
  const options = useOptions();
  let combined = value;
  if (typeof value === "number") {
    let _HermesInternal = HermesInternal;
    combined = "" + value;
  }
  obj = {
    title,
    defaultValue: combined,
    onChange: onValueChange,
    hasIcons: false,
    children: options.map((label) => {
      if (typeof label.value === "number") {
        const _HermesInternal = HermesInternal;
        let combined = "" + label.value;
      } else {
        combined = label.value;
      }
      return closure_1_14(
        TableRadioRow.TableRadioRow,
        { value: combined, label: label.label, subLabel: label.subLabel, disabled: label.disabled },
        label.value,
      );
    }),
  };
  const children = [closure_1_14(TableRadioGroup.TableRadioGroup, obj, combined)];
  if (highlightSettingItem) {
    obj = { start: true, end: true, style: tmp.radioSettingHighlight };
    highlightSettingItem = closure_1_14(SettingListItemHighlightDefault, obj);
  }
  children[1] = highlightSettingItem;
  return value2(__initData, { children });
});
let closure_25 = noop.memo((arg0) => {
  ({ variant, useTrailing, useIsDisabled, useDescription, start, end, IconComponent } = arg0);
  let trailing;
  ({ setting, useTitle } = arg0);
  let obj = trailing(14695);
  let highlightSettingItem = obj.useHighlightSettingItem(setting);
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
  const items = [trailing];
  const callback = noop.useCallback(() => {
    if (null != trailing) {
      ClipboardUtils.copy(tmp);
      const result = ToastUtils.presentCopiedToClipboard();
    }
  }, items);
  obj = {
    label: title,
    subLabel: description,
    onPress: null,
    variant: null,
    disabled: null,
    icon: null,
    trailing: null,
    start: null,
    end: null,
  };
  let tmp12 = null;
  if (null != trailing) {
    tmp12 = callback;
  }
  obj.onPress = tmp12;
  obj.variant = variant;
  obj.disabled = isDisabled;
  let tmp11Result = null;
  if (null != IconComponent) {
    obj = { IconComponent, variant };
    tmp11Result = closure_14(tmp(5605).TableRow.Icon, obj);
  }
  obj.icon = tmp11Result;
  tmp11Result = null;
  if (null != trailing) {
    const obj1 = { text: trailing };
    tmp11Result = closure_14(tmp(5605).TableRow.TrailingText, obj1);
  }
  obj.trailing = tmp11Result;
  obj.start = start;
  obj.end = end;
  const children = [closure_14(trailing(5605).TableRow, obj)];
  if (highlightSettingItem) {
    let obj2 = { start, end };
    highlightSettingItem = closure_14(SettingListItemHighlightDefault, obj2);
  }
  children[1] = highlightSettingItem;
  return closure_16(closure_15, { children });
});
let closure_26 = noop.memo((arg0) => {
  ({ useValue, start, end } = arg0);
  ({ setting, useTitle, onValueChange, maximum } = arg0);
  let obj = useHighlightSettingItem;
  let highlightSettingItem = obj.useHighlightSettingItem(setting);
  const title = useTitle();
  value = undefined;
  if (useValue != null) {
    value = useValue();
  }
  obj = { label: title, start, end, subLabel: null };
  obj = {
    style: closure_17().slider,
    children: closure_1_14(VolumeSliderDefault, {
      value,
      maxVolume: maximum,
      onValueChange,
      accessibilityLabel: title,
    }),
  };
  obj.subLabel = closure_1_14(View, obj);
  const children = [closure_1_14(TableRow.TableRow, obj)];
  if (highlightSettingItem) {
    const obj1 = { start, end };
    highlightSettingItem = closure_1_14(SettingListItemHighlightDefault, obj1);
  }
  children[1] = highlightSettingItem;
  return value2(__initData, { children });
});
let closure_27 = noop.memo((useTrailing) => {
  useTrailing = useTrailing.useTrailing;
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
  ({ start, end, useProps } = useTrailing);
  const title = useTrailing.useTitle();
  const props = useProps();
  const onSlidingComplete = props.onSlidingComplete;
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
  const tmp3 = _objectWithoutProperties(props, num4);
  _objectWithoutProperties = tmp3;
  const tmp4 = closure_17();
  let obj = onSlidingComplete(num2[15]);
  const items = [c9];
  const stateFromStores = obj.useStateFromStores(items, () => _undefined.locale);
  const tmp8 = onValueChange(
    value.useState(() => {
      value = value.value;
      if (value == null) {
        value = num3;
      }
      return value;
    }),
    2,
  );
  value = tmp8[0];
  closure_8 = tmp8[1];
  [tmp11, c9] = onValueChange(value.useState(false), 2);
  const items1 = [onValueChange];
  const callback = value.useCallback(() => {
    _undefined(true);
  }, []);
  callback1 = value.useCallback((arg0) => {
    closure_8(arg0);
    if (onValueChange != null) {
      onValueChange(arg0);
    }
  }, items1);
  const items2 = [onSlidingComplete];
  const items3 = [callback1, onSlidingComplete];
  const callback2 = value.useCallback((arg0) => {
    _undefined(false);
    if (onSlidingComplete != null) {
      tmp2(arg0);
    }
  }, items2);
  callback3 = value.useCallback((arg0) => {
    callback1(arg0);
    if (onSlidingComplete != null) {
      onSlidingComplete(arg0);
    }
  }, items3);
  const items4 = [num3, callback3];
  const items5 = [callback3, num4, num, value];
  const callback4 = value.useCallback(() => callback3(num3), items4);
  const items6 = [callback3, num2, num, value];
  const callback5 = value.useCallback(() => {
    callback3(Math.min(num4, first + num));
    const result = HapticUtils.triggerHapticFeedback(haptics_HapticFeedbackTypesDefault.IMPACT_LIGHT);
  }, items5);
  let trailing;
  const callback6 = value.useCallback(() => {
    callback3(Math.max(num2, first - num));
    const result = HapticUtils.triggerHapticFeedback(haptics_HapticFeedbackTypesDefault.IMPACT_LIGHT);
  }, items6);
  if (useTrailing != null) {
    trailing = useTrailing();
  }
  obj = { start, end, shadow: "none", border: "none", children: null };
  obj = { style: tmp4.sliderTitle, children: null };
  const items7 = [
    closure_14(onSlidingComplete(num2[32]).Text, { variant: "text-md/semibold", children: title }),
    trailing,
  ];
  obj.children = items7;
  const items8 = [closure_16(closure_8, obj)];
  let tmp20Result = null != value;
  if (tmp20Result) {
    if (formatPercentResult == null) {
      let tmp5Result = tmp5(tmp6[33]);
      formatPercentResult = tmp5Result.formatPercent(stateFromStores, value);
    }
    const obj1 = { variant: "text-sm/medium", color: "text-muted", children: formatPercentResult };
    tmp20Result = closure_14(tmp5(tmp6[32]).Text, obj1);
  }
  items8[1] = tmp20Result;
  const items9 = [
    closure_16(onSlidingComplete(num2[31]).Stack, {
      direction: "horizontal",
      justify: "space-between",
      children: items8,
    }),
    ,
  ];
  tmp5Result = tmp5(tmp6[34]);
  let slider;
  if (tmp5Result.isAndroid()) {
    slider = tmp4.slider;
  }
  const obj2 = { style: slider, children: null };
  const obj3 = {};
  const merged = Object.assign(tmp3);
  obj3.accessibilityLabel = title;
  obj3.step = num;
  obj3.onValueChange = callback1;
  obj3.value = value;
  obj3.minimumValue = num2;
  obj3.maximumValue = num4;
  obj3.onSlidingStart = callback;
  obj3.onSlidingComplete = callback2;
  obj3.startIcon = closure_14(onSlidingComplete(num2[36]).PressableOpacity, {
    accessible: false,
    onPress: callback6,
    children: startIcon,
  });
  obj3.endIcon = closure_14(onSlidingComplete(num2[36]).PressableOpacity, {
    accessible: false,
    onPress: callback5,
    children: endIcon,
  });
  obj2.children = closure_14(onSlidingComplete(num2[35]).Slider, obj3);
  items9[1] = closure_14(closure_8, obj2);
  let tmp26 = !tmp11;
  if (!tmp11) {
    tmp26 = value === num3;
  }
  const obj4 = { children: null };
  const obj5 = { disabled: tmp26, variant: "secondary", text: null, onPress: null };
  const intl = tmp5(tmp6[16]).intl;
  obj5.text = intl.string(onSlidingComplete(num2[16]).t["3b//lO"]);
  obj5.onPress = callback4;
  items9[2] = closure_14(onSlidingComplete(num2[37]).Button, obj5);
  obj4.children = items9;
  obj.children = closure_16(onSlidingComplete(num2[31]).Stack, obj4);
  return closure_14(onSlidingComplete(num2[30]).Card, obj);
});
size = fn(2);
let result = size.fileFinishedImporting("modules/settings/native/renderer/SettingRenderer.tsx");

export { GuildSelectDefaultIcon };
export const renderSettingItem = function renderSettingItem(item) {
  ({ setting, settingData, start, end } = item);
  const type = settingData.type;
  if (constants.GUILD_SELECTOR === type) {
    let obj = {};
    const merged = Object.assign(settingData);
    obj.setting = setting;
    obj.start = start;
    obj.end = end;
    return closure_1_14(closure_20, obj);
  } else if (constants.ROUTE === type) {
    obj = {};
    const merged1 = Object.assign(settingData);
    obj.start = start;
    obj.end = end;
    return closure_1_14(closure_18, obj);
  } else if (constants.PRESSABLE === type) {
    const obj1 = {};
    const merged2 = Object.assign(settingData);
    obj1.start = start;
    obj1.end = end;
    obj1.setting = setting;
    return closure_1_14(closure_21, obj1);
  } else if (constants.TOGGLE === type) {
    const obj2 = {};
    const merged3 = Object.assign(settingData);
    obj2.start = start;
    obj2.end = end;
    obj2.setting = setting;
    return closure_1_14(closure_22, obj2);
  } else if (constants.STATIC === type) {
    const obj3 = {};
    const merged4 = Object.assign(settingData);
    obj3.start = start;
    obj3.end = end;
    obj3.setting = setting;
    return closure_1_14(closure_25, obj3);
  } else if (constants.VOLUME_SLIDER === type) {
    const obj4 = {};
    const merged5 = Object.assign(settingData);
    obj4.start = start;
    obj4.end = end;
    obj4.setting = setting;
    return closure_1_14(closure_26, obj4);
  } else if (constants.RADIO === type) {
    const obj5 = {};
    const merged6 = Object.assign(settingData);
    obj5.setting = setting;
    return closure_1_14(closure_24, obj5);
  } else if (constants.SLIDER === type) {
    obj = {};
    const merged7 = Object.assign(settingData);
    obj.start = start;
    obj.end = end;
    obj.setting = setting;
    return closure_1_14(closure_27, obj);
  }
};
export const renderSettingSearchResultItem = function renderSettingSearchResultItem(settingData) {
  settingData = settingData.settingData;
  const tmp = _objectWithoutProperties(settingData, closure_4);
  const type = settingData.type;
  if (constants.ROUTE === type) {
    let obj = { settingData };
    const merged = Object.assign(tmp);
    return closure_1_14(RouteSettingSearchResult, obj);
  } else if (constants.PRESSABLE === type) {
    obj = { settingData };
    const merged1 = Object.assign(tmp);
    return closure_1_14(PressableSettingSearchResult, obj);
  } else if (constants.STATIC === type) {
    obj = { settingData };
    const merged2 = Object.assign(tmp);
    return closure_1_14(StaticSettingSearchResult, obj);
  } else {
    const _Error = Error;
    const _HermesInternal = HermesInternal;
    const error = new Error("[SettingRenderer] Found unsupported renderer type for setting: " + settingData.setting);
    throw error;
  }
};
export const renderSettingSearchResultPlaceholderItem = function renderSettingSearchResultPlaceholderItem(start) {
  return closure_1_14(SettingSearchResultPlaceholder, { start: start.start, end: start.end });
};
