// discord_app/modules/settings/native/renderer/SettingRenderer.tsx
import ThemesDefault from "../../../../../discord_common/js/packages/tokens/native.tsx";
import map from "../../../../design/tokens/native/useToken.tsx";
import Text from "../../../../design/components/Text/native/Text.tsx";
import TableRowInner from "../../../../design/components/TableRow/native/TableRow.native.tsx";
import TableSwitchRow from "../../../../design/components/TableRow/native/TableSwitchRow.native.tsx";
import context2 from "../../../../design/components/TableRow/native/TableRadioGroup.native.tsx";
import ClydeIcon from "../../../../design/components/Icon/native/redesign/generated/ClydeIcon.tsx";
import VolumeSliderDefault from "../../../../components_native/common/VolumeSlider.tsx";
import useHighlightSettingItem from "hooks/useHighlightSettingItem.tsx";
import _modDef15061 from "SettingListItemHighlight.tsx";
import _slicedToArray from "../../../../../_runtime/metro/00032__slicedToArray.js";
import _objectWithoutProperties from "../../../../../_runtime/metro/00109__objectWithoutProperties.js";
import importAllResult from "../../../../../_runtime/00019_noop.js";
import { View } from "../../../../../_runtime/00017_get_ActivityIndicator.js";
import _getSystemLocale from "../../../user_settings/LocaleStore.tsx";
import zustandStore from "../../../user_settings/UserSettingSearchStore.tsx";
import createGuildRecordFromRust from "../../../../stores/GuildStore.tsx";
import GUILD_SELECT_ALL_SERVERS_OPTION_ID from "SettingRendererConstants.tsx";
import jsxProd from "../../../../../_runtime/react/00021_jsxProd.js";
import "createCacheKey";

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
    obj[0] = obj;
    obj[1] = jsx(require("ClydeIcon").ClydeIcon, { color: "white", size: str });
    return jsx(View, obj);
  }
}
function ForceSwitchIcons(children) {
  let context;
  context = importAllResult.useContext(context(1356).AccessibilityPreferencesContext);
  const items = [context];
  const value = importAllResult.useMemo(() => {
    const obj = {};
    const merged = Object.assign(context);
    obj.switchIconsEnabled = true;
    return obj;
  }, items);
  return callback3(context(1356).AccessibilityPreferencesContext.Provider, { value, children: children.children });
}
function SettingSearchResultBreadcrumbs(breadcrumbs) {
  breadcrumbs = breadcrumbs.breadcrumbs;
  let tmp = null;
  if (0 !== breadcrumbs.length) {
    const obj = { variant: "text-xs/medium", color: "text-muted", children: null };
    obj[2] = breadcrumbs.join(" \u2192 ");
    tmp = callback3(Text.Text, obj);
  }
  return tmp;
}
function SettingSearchResultIcon(IconComponent) {
  IconComponent = IconComponent.IconComponent;
  map;
  if (null == IconComponent) {
    let obj = { width: null };
    obj[0] = tmp4;
    obj[0] = obj;
    let tmp6 = callback3(View, obj);
  } else {
    obj = { IconComponent: null };
    obj[0] = IconComponent;
    tmp6 = callback3(TableRowInner.TableRow.Icon, obj);
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
  const callback = importAllResult.useCallback(() => {
    let obj = { selected: setting };
    closure_1_10.setState(obj);
    obj = { setting, title, route: screen.route, searchResultPosition: index, numSearchResults: total };
    const result = title(index[39]).trackSettingSearchResultPress(obj);
    const obj2 = title(index[39]);
    obj = { navigation: stackNavigation, screen, preNavigationAction };
    const result1 = title(index[14]).onRouteSettingOnPress(obj);
  }, items);
  obj = { label: title, onPress: callback, arrow: true, icon: callback3(SettingSearchResultIcon, { IconComponent }), subLabel: callback3(SettingSearchResultBreadcrumbs, { breadcrumbs }), start: 0 === index, end: index === total - 1 };
  return callback3(title(index[12]).TableRow, obj);
}
function PressableSettingSearchResult(setting) {
  ({ settingData, title } = setting);
  setting = setting.setting;
  const index = setting.index;
  const total = setting.total;
  const onPress = settingData.onPress;
  const items = [setting, title, index, total, onPress];
  ({ IconComponent, breadcrumbs } = setting);
  const callback = importAllResult.useCallback(() => {
    title(index[39]);
    const obj = { setting, title, searchResultPosition: index, numSearchResults: total };
    const result = obj.trackSettingSearchResultPress(obj);
    const result1 = title(index[40]).dismissGlobalKeyboard();
    onPress();
  }, items);
  return callback3(title(index[12]).TableRow, { label: title, onPress: callback, icon: callback3(SettingSearchResultIcon, { IconComponent }), subLabel: callback3(SettingSearchResultBreadcrumbs, { breadcrumbs }), start: 0 === index, end: index === total - 1, arrow: settingData.withArrow });
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
  const callback = importAllResult.useCallback(() => {
    if (null != trailing) {
      title(index[39]);
      const obj = { setting: null, title: null, searchResultPosition: null, numSearchResults: null };
      obj[0] = setting;
      obj[1] = title;
      obj[2] = index;
      obj[3] = total;
      const result = obj.trackSettingSearchResultPress(obj);
      title(index[25]).copy(tmp);
      const obj3 = title(index[25]);
      const result1 = title(index[26]).presentCopiedToClipboard();
      const obj4 = title(index[26]);
    }
  }, items);
  let obj = { label: title, onPress: null, icon: null, subLabel: null, trailing: null, start: null, end: null };
  let tmp6;
  if (null != trailing) {
    tmp6 = callback;
  }
  obj[1] = tmp6;
  obj[2] = callback(SettingSearchResultIcon, { IconComponent });
  obj[3] = callback(SettingSearchResultBreadcrumbs, { breadcrumbs });
  let tmp3Result = null;
  if (null != trailing) {
    obj = { text: null };
    obj[0] = trailing;
    tmp3Result = callback(title(index[12]).TableRow.TrailingText, obj);
  }
  obj[4] = tmp3Result;
  obj[5] = 0 === index;
  obj[6] = index === total - 1;
  return callback(title(index[12]).TableRow, obj);
}
function SettingSearchResultPlaceholder(arg0) {
  ({ start, end } = arg0);
  const tmp = callback5();
  let obj = { start, end, label: null, icon: null };
  const items = [tmp.placeholderUsername, callback(importAllResult.useState(() => ({ width: `${10 + 80 * Math.random() | 0}%` })), 1)[0]];
  obj[2] = callback3(View, { style: items });
  obj = { style: tmp.placeholderAvatar };
  obj[3] = callback3(View, obj);
  return callback3(TableRowInner.TableRow, obj);
}
let closure_3 = ["onSlidingComplete", "step", "startIcon", "endIcon", "minimumValue", "maximumValue", "valueLabel", "defaultValue", "onValueChange"];
let closure_4 = ["settingData"];
let error = importAllResult;
({ GUILD_SELECT_ALL_SERVERS_OPTION_ID: closure_12, NodeType: map1 } = GUILD_SELECT_ALL_SERVERS_OPTION_ID);
({ jsx: closure_14, Fragment: closure_15, jsxs: closure_16 } = jsxProd);
let obj = { marginTop: ThemesDefault.space.PX_16, marginBottom: ThemesDefault.space.PX_8 };
obj[0] = obj;
obj[1] = { flexDirection: "row", justifyContent: "space-between" };
obj[2] = { top: 26 };
const createCacheKey = { backgroundColor: ThemesDefault.colors.BACKGROUND_BRAND, justifyContent: "center", alignItems: "center" };
obj[3] = createCacheKey;
obj[4] = { width: require("Button").AVATAR_SIZE_MAP[require("Button").AvatarSizes.REFRESH_MEDIUM_32], height: require("Button").AVATAR_SIZE_MAP[require("Button").AvatarSizes.REFRESH_MEDIUM_32], borderRadius: ThemesDefault.radii.xl, backgroundColor: ThemesDefault.colors.BACKGROUND_MOD_MUTED };
let obj2 = { width: require("Button").AVATAR_SIZE_MAP[require("Button").AvatarSizes.REFRESH_MEDIUM_32], height: require("Button").AVATAR_SIZE_MAP[require("Button").AvatarSizes.REFRESH_MEDIUM_32], borderRadius: ThemesDefault.radii.xl, backgroundColor: ThemesDefault.colors.BACKGROUND_MOD_MUTED };
obj[5] = { height: 20, borderRadius: ThemesDefault.radii.md, backgroundColor: ThemesDefault.colors.BACKGROUND_MOD_MUTED };
let closure_17 = createCacheKey.createStyles(obj);
let closure_18 = importAllResult.memo((arg0) => {
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
  const callback = importAllResult.useCallback(() => {
    screen(preNavigationAction[14]);
    const obj = { navigation: stackNavigation, screen, preNavigationAction };
    const result = obj.onRouteSettingOnPress(obj);
  }, items);
  obj = { label: title, subLabel: description, disabled: isDisabled, arrow: true, variant, icon: null, trailing: null, onPress: null, start: null, end: null };
  let tmp10Result = null;
  if (null != IconComponent) {
    obj = { IconComponent: null };
    obj[0] = IconComponent;
    tmp10Result = callback(screen(tmp2[12]).TableRow.Icon, obj);
  }
  obj[5] = tmp10Result;
  let tmp12 = null;
  if (null != trailing) {
    let tmp13;
    if (null != trailing) {
      tmp10Result = trailing;
      if (typeof trailing === "string") {
        obj1 = { text: null };
        obj1[0] = trailing;
        tmp10Result = callback(screen(tmp2[12]).TableRow.TrailingText, obj1);
      }
      tmp13 = tmp10Result;
    }
    tmp12 = tmp13;
  }
  obj[6] = tmp12;
  obj[7] = callback;
  obj[8] = start;
  obj[9] = end;
  return callback(screen(preNavigationAction[12]).TableRow, obj);
});
let closure_20 = importAllResult.memo((useSelectedGuildId) => {
  const merged = Object.assign(useSelectedGuildId, Object.create(null));
  dependencyMap = undefined;
  const selectedGuildId = useSelectedGuildId.useSelectedGuildId();
  let obj = selectedGuildId(589);
  const items = [closure_11];
  closure_1 = obj.useStateFromStores(items, () => closure_1_11.getGuild(selectedGuildId));
  const items1 = [closure_11];
  const stateFromStores = selectedGuildId(589).useStateFromStores(items1, () => closure_1_11.getGuild(selectedGuildId));
  if (selectedGuildId === closure_12) {
    const intl2 = tmp3(1236).intl;
    let stringResult = intl2.string(tmp3(1236).t.OMVg25);
  } else {
    stringResult = undefined;
    if (stateFromStores != null) {
      stringResult = stateFromStores.name;
    }
    if (stringResult == null) {
      const intl = tmp3(1236).intl;
      stringResult = intl.string(tmp3(1236).t["XBwns+"]);
    }
  }
  dependencyMap = stringResult;
  const items2 = [stringResult];
  const obj2 = selectedGuildId(589);
  obj = {};
  const callback = importAllResult.useCallback(() => c2, items2);
  const merged1 = Object.assign(merged);
  obj.type = constants.PRESSABLE;
  obj.useTitle = callback;
  obj.withArrow = true;
  obj.IconComponent = importAllResult.memo(() => {
    if (null == callback) {
      let tmp7 = closure_1_14(GuildSelectDefaultIcon, {});
    } else {
      const obj = { size: null, guild: null };
      obj[0] = selectedGuildId(_undefined[18]).GuildIconSizes.SMALL_32;
      obj[1] = tmp;
      tmp7 = closure_1_14(callback(_undefined[18]), obj);
      const tmp5 = callback(_undefined[18]);
    }
    return tmp7;
  });
  return callback3(closure_21, obj);
});
let closure_21 = importAllResult.memo((arg0) => {
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
  obj = { label: title, subLabel: description, arrow: withArrow, variant, icon: null, onPress: null, disabled: null, trailing: null, start: null, end: null };
  let tmp10Result = null;
  if (null != IconComponent) {
    obj = { IconComponent: null, variant: null };
    obj[0] = IconComponent;
    obj[1] = variant;
    tmp10Result = callback(TableRowInner.TableRow.Icon, obj);
  }
  obj[4] = tmp10Result;
  obj[5] = onPress;
  obj[6] = isDisabled;
  let tmp12;
  if (null != trailing) {
    tmp10Result = trailing;
    if (typeof trailing === "string") {
      obj1 = { text: null };
      obj1[0] = trailing;
      tmp10Result = callback(TableRowInner.TableRow.TrailingText, obj1);
    }
    tmp12 = tmp10Result;
  }
  obj[7] = tmp12;
  obj[8] = start;
  obj[9] = end;
  const children = [callback(TableRowInner.TableRow, obj), ];
  if (highlightSettingItem) {
    const obj2 = { start: null, end: null };
    obj2[0] = start;
    obj2[1] = end;
    highlightSettingItem = callback(_modDef15061, obj2);
  }
  children[1] = highlightSettingItem;
  return callback2(closure_15, { children });
});
let closure_22 = importAllResult.memo((arg0) => {
  ({ useDescription, useIsDisabled, variant, start, end, IconComponent } = arg0);
  ({ setting, onValueChange, useTitle, useValue, hasIcon } = arg0);
  let obj = useHighlightSettingItem;
  let highlightSettingItem = obj.useHighlightSettingItem(setting);
  const title = useTitle();
  let description;
  const value = useValue();
  if (useDescription != null) {
    description = useDescription();
  }
  let isDisabled;
  if (useIsDisabled != null) {
    isDisabled = useIsDisabled();
  }
  obj = { label: title, subLabel: description, icon: null, value: null, variant: null, disabled: null, onValueChange: null, start: null, end: null };
  let tmp8Result = null;
  if (null != IconComponent) {
    obj = { IconComponent: null, variant: null };
    obj[0] = IconComponent;
    obj[1] = variant;
    tmp8Result = callback(TableRowInner.TableRow.Icon, obj);
  }
  obj[2] = tmp8Result;
  obj[3] = value;
  obj[4] = variant;
  obj[5] = isDisabled;
  obj[6] = onValueChange;
  obj[7] = start;
  obj[8] = end;
  tmp8Result = callback(TableSwitchRow.TableSwitchRow, obj);
  let tmp8Result1 = tmp8Result;
  if (true === hasIcon) {
    obj1 = { children: null };
    obj1[0] = tmp8Result;
    tmp8Result1 = callback(ForceSwitchIcons, obj1);
  }
  const children = [tmp8Result1, ];
  if (highlightSettingItem) {
    const obj2 = { start: null, end: null };
    obj2[0] = start;
    obj2[1] = end;
    highlightSettingItem = callback(_modDef15061, obj2);
  }
  children[1] = highlightSettingItem;
  return callback2(closure_15, { children });
});
let closure_24 = importAllResult.memo((arg0) => {
  ({ setting, useTitle, useValue, useOptions, onValueChange } = arg0);
  let obj = useHighlightSettingItem;
  let highlightSettingItem = obj.useHighlightSettingItem(setting);
  const title = useTitle();
  const value = useValue();
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
    children: options.map((item, index) => {
      if (typeof item.value === "number") {
        const _HermesInternal = HermesInternal;
        let combined = "" + item.value;
      } else {
        combined = item.value;
      }
      return callback2(callback(table[24]).TableRadioRow, { value: combined, label: item.label, subLabel: item.subLabel, disabled: item.disabled }, item.value);
    })
  };
  const children = [callback3(context2.TableRadioGroup, obj, combined), ];
  if (highlightSettingItem) {
    obj = { start: true, end: true, style: null };
    obj[2] = tmp.radioSettingHighlight;
    highlightSettingItem = callback3(_modDef15061, obj);
  }
  children[1] = highlightSettingItem;
  return callback2(closure_15, { children });
});
let closure_25 = importAllResult.memo((arg0) => {
  ({ variant, useTrailing, useIsDisabled, useDescription, start, end, IconComponent } = arg0);
  let trailing;
  ({ setting, useTitle } = arg0);
  let obj = trailing(15060);
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
  const callback = importAllResult.useCallback(() => {
    if (null != trailing) {
      trailing(dependencyMap[25]).copy(tmp);
      const obj = trailing(dependencyMap[25]);
      const result = trailing(dependencyMap[26]).presentCopiedToClipboard();
      const obj2 = trailing(dependencyMap[26]);
    }
  }, items);
  obj = { label: title, subLabel: description, onPress: null, variant: null, disabled: null, icon: null, trailing: null, start: null, end: null };
  let tmp12 = null;
  if (null != trailing) {
    tmp12 = callback;
  }
  obj[2] = tmp12;
  obj[3] = variant;
  obj[4] = isDisabled;
  let tmp11Result = null;
  if (null != IconComponent) {
    obj = { IconComponent: null, variant: null };
    obj[0] = IconComponent;
    obj[1] = variant;
    tmp11Result = callback(tmp(6291).TableRow.Icon, obj);
  }
  obj[5] = tmp11Result;
  tmp11Result = null;
  if (null != trailing) {
    obj1 = { text: null };
    obj1[0] = trailing;
    tmp11Result = callback(tmp(6291).TableRow.TrailingText, obj1);
  }
  obj[6] = tmp11Result;
  obj[7] = start;
  obj[8] = end;
  const children = [callback(trailing(6291).TableRow, obj), ];
  if (highlightSettingItem) {
    let obj2 = { start: null, end: null };
    obj2[0] = start;
    obj2[1] = end;
    highlightSettingItem = callback(_modDef15061, obj2);
  }
  children[1] = highlightSettingItem;
  return callback2(closure_15, { children });
});
let closure_26 = importAllResult.memo((arg0) => {
  ({ useValue, start, end } = arg0);
  ({ setting, useTitle, onValueChange, maximum } = arg0);
  let obj = useHighlightSettingItem;
  let highlightSettingItem = obj.useHighlightSettingItem(setting);
  let value;
  const title = useTitle();
  if (useValue != null) {
    value = useValue();
  }
  obj = { style: callback5().slider, children: callback3(VolumeSliderDefault, { value, maxVolume: maximum, onValueChange }) };
  obj[3] = callback3(View, obj);
  const children = [callback3(TableRowInner.TableRow, obj), ];
  if (highlightSettingItem) {
    obj1 = { start: null, end: null };
    obj1[0] = start;
    obj1[1] = end;
    highlightSettingItem = callback3(_modDef15061, obj1);
  }
  children[1] = highlightSettingItem;
  return callback2(closure_15, { children });
});
let closure_27 = importAllResult.memo((useTrailing) => {
  useTrailing = useTrailing.useTrailing;
  let num2;
  let num4;
  let num3;
  let onValueChange;
  let callback2;
  let first;
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
  const tmp3 = callback2(props, num4);
  const tmp4 = callback5();
  let obj = onSlidingComplete(num2[15]);
  const items = [c9];
  const stateFromStores = obj.useStateFromStores(items, () => _undefined.locale);
  const tmp8 = onValueChange(first.useState(() => {
    value = value.value;
    if (value == null) {
      value = num3;
    }
    return value;
  }), 2);
  first = tmp8[0];
  closure_8 = tmp8[1];
  [tmp11, c9] = onValueChange(first.useState(false), 2);
  const items1 = [onValueChange];
  const callback = first.useCallback(() => {
    _undefined(true);
  }, []);
  callback1 = first.useCallback((arg0) => {
    callback(arg0);
    if (onValueChange != null) {
      onValueChange(arg0);
    }
  }, items1);
  const items2 = [onSlidingComplete];
  const items3 = [callback1, onSlidingComplete];
  callback2 = first.useCallback((arg0) => {
    _undefined(false);
    if (onSlidingComplete != null) {
      tmp2(arg0);
    }
  }, items2);
  callback3 = first.useCallback((arg0) => {
    callback1(arg0);
    if (onSlidingComplete != null) {
      onSlidingComplete(arg0);
    }
  }, items3);
  const items4 = [num3, callback3];
  const items5 = [callback3, num4, num, first];
  const callback4 = first.useCallback(() => callback3(num3), items4);
  const items6 = [callback3, num2, num, first];
  callback5 = first.useCallback(() => {
    callback3(Math.min(num4, first + num));
    const result = onSlidingComplete(num2[28]).triggerHapticFeedback(num(num2[29]).IMPACT_LIGHT);
  }, items5);
  let trailing;
  const callback6 = first.useCallback(() => {
    callback3(Math.max(num2, first - num));
    const result = onSlidingComplete(num2[28]).triggerHapticFeedback(num(num2[29]).IMPACT_LIGHT);
  }, items6);
  if (useTrailing != null) {
    trailing = useTrailing();
  }
  obj = { style: tmp4.sliderTitle, children: null };
  const items7 = [callback3(onSlidingComplete(num2[32]).Text, { variant: "text-md/semibold", children: title }), trailing];
  obj[1] = items7;
  const items8 = [callback4(closure_8, obj), ];
  let tmp20Result = null != first;
  if (tmp20Result) {
    if (formatPercentResult == null) {
      let tmp5Result = tmp5(tmp6[33]);
      formatPercentResult = tmp5Result.formatPercent(stateFromStores, first);
    }
    obj1 = { variant: "text-sm/medium", color: "text-muted", children: null };
    obj1[2] = formatPercentResult;
    tmp20Result = tmp20(tmp5(tmp6[32]).Text, obj1);
  }
  items8[1] = tmp20Result;
  const items9 = [callback4(onSlidingComplete(num2[31]).Stack, { direction: "horizontal", justify: "space-between", children: items8 }), , ];
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
  obj3.value = first;
  obj3.minimumValue = num2;
  obj3.maximumValue = num4;
  obj3.onSlidingStart = callback;
  obj3.onSlidingComplete = callback2;
  obj3.startIcon = callback3(onSlidingComplete(num2[36]).PressableOpacity, { accessible: false, onPress: callback6, children: startIcon });
  obj3.endIcon = callback3(onSlidingComplete(num2[36]).PressableOpacity, { accessible: false, onPress: callback5, children: endIcon });
  obj2[1] = callback3(onSlidingComplete(num2[35]).Slider, obj3);
  items9[1] = callback3(closure_8, obj2);
  let tmp26 = !tmp11;
  if (!tmp11) {
    tmp26 = first === num3;
  }
  const obj4 = { children: null };
  const obj5 = { disabled: tmp26, variant: "secondary", text: null, onPress: null };
  const intl = tmp5(tmp6[16]).intl;
  obj5[2] = intl.string(onSlidingComplete(num2[16]).t["3b//lO"]);
  obj5[3] = callback4;
  items9[2] = callback3(onSlidingComplete(num2[37]).Button, obj5);
  obj4[0] = items9;
  obj[4] = callback4(onSlidingComplete(num2[31]).Stack, obj4);
  return callback3(onSlidingComplete(num2[30]).Card, obj);
});
let result = require("obj132").fileFinishedImporting("modules/settings/native/renderer/SettingRenderer.tsx");

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
    return callback3(closure_20, obj);
  } else if (constants.ROUTE === type) {
    obj = {};
    const merged1 = Object.assign(settingData);
    obj.start = start;
    obj.end = end;
    return callback3(closure_18, obj);
  } else if (constants.PRESSABLE === type) {
    obj1 = {};
    const merged2 = Object.assign(settingData);
    obj1.start = start;
    obj1.end = end;
    obj1.setting = setting;
    return callback3(closure_21, obj1);
  } else if (constants.TOGGLE === type) {
    const obj2 = {};
    const merged3 = Object.assign(settingData);
    obj2.start = start;
    obj2.end = end;
    obj2.setting = setting;
    return callback3(closure_22, obj2);
  } else if (constants.STATIC === type) {
    const obj3 = {};
    const merged4 = Object.assign(settingData);
    obj3.start = start;
    obj3.end = end;
    obj3.setting = setting;
    return callback3(closure_25, obj3);
  } else if (constants.VOLUME_SLIDER === type) {
    const obj4 = {};
    const merged5 = Object.assign(settingData);
    obj4.start = start;
    obj4.end = end;
    obj4.setting = setting;
    return callback3(closure_26, obj4);
  } else if (constants.RADIO === type) {
    const obj5 = {};
    const merged6 = Object.assign(settingData);
    obj5.setting = setting;
    return callback3(closure_24, obj5);
  } else if (constants.SLIDER === type) {
    obj = {};
    const merged7 = Object.assign(settingData);
    obj.start = start;
    obj.end = end;
    obj.setting = setting;
    return callback3(closure_27, obj);
  }
};
export const renderSettingSearchResultItem = function renderSettingSearchResultItem(item) {
  const settingData = item.settingData;
  const tmp = callback2(item, closure_4);
  const type = settingData.type;
  if (constants.ROUTE === type) {
    let obj = { settingData: null };
    obj[0] = settingData;
    const merged = Object.assign(tmp);
    return callback3(RouteSettingSearchResult, obj);
  } else if (constants.PRESSABLE === type) {
    obj = { settingData: null };
    obj[0] = settingData;
    const merged1 = Object.assign(tmp);
    return callback3(PressableSettingSearchResult, obj);
  } else if (constants.STATIC === type) {
    obj = { settingData: null };
    obj[0] = settingData;
    const merged2 = Object.assign(tmp);
    return callback3(StaticSettingSearchResult, obj);
  } else {
    const _Error = Error;
    const _HermesInternal = HermesInternal;
    error = new Error("[SettingRenderer] Found unsupported renderer type for setting: " + item.setting);
    throw error;
  }
};
export const renderSettingSearchResultPlaceholderItem = function renderSettingSearchResultPlaceholderItem(item) {
  return callback3(SettingSearchResultPlaceholder, { start: item.start, end: item.end });
};