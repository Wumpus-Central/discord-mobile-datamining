// discord_app/modules/settings/native/renderer/SettingRenderer.tsx
import react_native from "../../../../../_runtime/00017_react-native.js";
import react2 from "../../../../../_runtime/00576_react.js";
import nativeDefault from "../../../../../discord_common/js/packages/tokens/native.tsx";
import native from "../../../../design/void/native.tsx";
import KeyboardManagerUtils from "../../../../utils/native/KeyboardManagerUtils.tsx";
import ToastUtils from "../../../toast/native/ToastUtils.tsx";
import useToken from "../../../../design/tokens/native/useToken.tsx";
import react3 from "../../../../../discord_common/js/packages/design/components/AccessibilityPreferencesContext/AccessibilityPreferencesContext.tsx";
import HapticUtils from "../../../haptics/HapticUtils.native.tsx";
import haptics_HapticFeedbackTypesDefault from "../../../haptics/HapticFeedbackTypes.tsx";
import Text_Text from "../../../../design/components/Text/native/Text.tsx";
import GuildIcon from "../../../guild/native/GuildIcon.tsx";
import TableRow2 from "../../../../design/components/TableRow/native/TableRow.native.tsx";
import TableRadioGroup2 from "../../../../design/components/TableRow/native/TableRadioGroup.native.tsx";
import Tracking from "../../tracking/Tracking.tsx";
import ClipboardUtils from "../../../../utils/ClipboardUtils.native.tsx";
import TableSwitchRow2 from "../../../../design/components/TableRow/native/TableSwitchRow.native.tsx";
import FormSwitch from "../../../../design/components/Forms/native/FormSwitch.native.tsx";
import VolumeSliderDefault from "../../../../components_native/common/VolumeSlider.tsx";
import ClydeIcon from "../../../../design/components/Icon/native/redesign/generated/ClydeIcon.tsx";
import SettingRendererUtils from "SettingRendererUtils.tsx";
import useHighlightSettingItem from "hooks/useHighlightSettingItem.tsx";
import SettingListItemHighlightDefault from "SettingListItemHighlight.tsx";
import _slicedToArray from "../../../../../_runtime/metro/00032__slicedToArray.js";
import _objectWithoutProperties_mod from "../../../../../_runtime/metro/00109__objectWithoutProperties.js";
import react from "../../../../../_runtime/00019_react.js";
import LocaleStore from "../../../user_settings/LocaleStore.tsx";
import UserSettingSearchStore from "../../../user_settings/UserSettingSearchStore.tsx";
import GuildStore from "../../../../stores/GuildStore.tsx";
import SettingRendererConstants from "SettingRendererConstants.tsx";
import Fragment from "../../../../../_runtime/react/00021_Fragment.js";
import createStyles_mod from "../../../../design/components/Styles/native/createStyles.tsx";
import ReactCompilerGating_mod from "../../../react_compiler/ReactCompilerGating.tsx";
import size_mod from "../../../../../_runtime/metro/00002__.js";

const require = globalThis.__r;
const GuildIconDefault = GuildIcon;
let _require, dependencyMap, useSelectedGuildId;

let closure_12;
let closure_14;
let closure_15;
let closure_16;
let map1;
let obj2;
let obj3;
let obj4;
let size;
function RouteSettingSearchResult(setting) {
  let IconComponent;
  let breadcrumbs;
  let settingData;
  let title;
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
  const tmp = title;
  const tmp2 = index;
  if (usePreNavigationAction != null) {
    preNavigationAction = usePreNavigationAction();
  }
  const items = [preNavigationAction, index, stackNavigation, screen, setting, title, total];
  const callback = react.useCallback(() => {
    const obj = { selected: setting };
    UserSettingSearchStore.setState(obj);
    const obj2 = Tracking;
    const obj3 = { setting, title, route: screen.route, searchResultPosition: index, numSearchResults: total };
    const result = obj2.trackSettingSearchResultPress(obj3);
    const obj4 = SettingRendererUtils;
    const obj5 = { navigation: stackNavigation, screen, preNavigationAction };
    const result1 = obj4.onRouteSettingOnPress(obj5);
  }, items);
  let obj2 = {
    label: title,
    onPress: callback,
    arrow: true,
    icon: closure_14(closure_31, { IconComponent }),
    subLabel: closure_14(closure_30, { breadcrumbs }),
    start: 0 === index,
    end: index === total - 1,
  };
  const TableRow = tmp(tmp2[12]).TableRow;
  return closure_14(TableRow, obj2);
}
function StaticSettingSearchResult(title) {
  let IconComponent;
  let breadcrumbs;
  let tmp3Result;
  let tmp6;
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
  const callback = react.useCallback(() => {
    if (null != trailing) {
      const obj2 = { setting, title, searchResultPosition: index, numSearchResults: total };
      const obj = Tracking;
      const result = obj.trackSettingSearchResultPress(obj2);
      const obj3 = ClipboardUtils;
      obj3.copy(tmp);
      const obj4 = ToastUtils;
      const result1 = obj4.presentCopiedToClipboard();
    }
  }, items);
  let obj = {
    label: title,
    onPress: tmp6,
    icon: closure_14(closure_31, { IconComponent }),
    subLabel: closure_14(closure_30, { breadcrumbs }),
    trailing: tmp3Result,
    start: 0 === index,
    end: index === total - 1,
  };
  tmp6 = undefined;
  const TableRow = title(index[12]).TableRow;
  const tmp4 = title;
  const tmp5 = index;
  if (null != trailing) {
    tmp6 = callback;
  }
  tmp3Result = null;
  if (null != trailing) {
    let obj2 = { text: trailing };
    tmp3Result = closure_14(tmp4(tmp5[12]).TableRow.TrailingText, obj2);
  }
  return closure_14(TableRow, obj);
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
let _objectWithoutProperties = _objectWithoutProperties_mod;
const View = react_native.View;
({ GUILD_SELECT_ALL_SERVERS_OPTION_ID: closure_12, NodeType: map1 } = SettingRendererConstants);
({ jsx: closure_14, Fragment: closure_15, jsxs: closure_16 } = Fragment);
let createStyles = createStyles_mod;
let obj = {
  slider: obj2,
  sliderTitle: { flexDirection: "row", justifyContent: "space-between" },
  radioSettingHighlight: { top: 26 },
  defaultIcon: obj3,
  placeholderAvatar: size,
  placeholderUsername: obj4,
};
obj2 = { marginTop: nativeDefault.space.PX_16, marginBottom: nativeDefault.space.PX_8 };
createStyles = createStyles.createStyles;
obj3 = { backgroundColor: nativeDefault.colors.BACKGROUND_BRAND, justifyContent: "center", alignItems: "center" };
size = {
  width: native.AVATAR_SIZE_MAP[native.AvatarSizes.REFRESH_MEDIUM_32],
  height: native.AVATAR_SIZE_MAP[native.AvatarSizes.REFRESH_MEDIUM_32],
  borderRadius: nativeDefault.radii.xl,
  backgroundColor: nativeDefault.colors.BACKGROUND_MOD_MUTED,
};
obj4 = { height: 20, borderRadius: nativeDefault.radii.md, backgroundColor: nativeDefault.colors.BACKGROUND_MOD_MUTED };
let closure_17 = createStyles(obj);
let closure_18 = react.memo((arg0) => {
  let IconComponent;
  let accessibilityHint;
  let end;
  let onPress;
  let screen;
  let start;
  let tmp14Result;
  let tmp16;
  let useDescription;
  let useIsDisabled;
  let usePreNavigationAction;
  let useTitle;
  let useTrailing;
  let variant;
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
  let tmp10;
  const callback = react.useCallback(() => {
    const obj = SettingRendererUtils;
    const obj2 = { navigation: stackNavigation, screen, preNavigationAction };
    const result = obj.onRouteSettingOnPress(obj2);
  }, items);
  if (typeof isDisabled === "object") {
    tmp10 = isDisabled;
  }
  let tmp11 = description;
  if (null != tmp10) {
    let obj2 = { disabledActionLabel: tmp10.label, description };
    tmp11 = closure_14(closure_23, obj2);
  }
  const obj3 = {
    label: title,
    subLabel: tmp11,
    disabled: true === isDisabled,
    arrow: true,
    variant,
    icon: tmp14Result,
    trailing: tmp16,
    onPress,
    accessibilityHint,
    start,
    end,
  };
  tmp14Result = null;
  const TableRow = screen(tmp2[12]).TableRow;
  if (null != IconComponent) {
    const obj4 = { IconComponent };
    tmp14Result = closure_14(screen(tmp2[12]).TableRow.Icon, obj4);
  }
  tmp16 = null;
  if (null != trailing) {
    let tmp17;
    if (null != trailing) {
      let tmp14Result2 = trailing;
      if (typeof trailing === "string") {
        const obj5 = { text: trailing };
        tmp14Result2 = closure_14(screen(tmp2[12]).TableRow.TrailingText, obj5);
      }
      tmp17 = tmp14Result2;
    }
    tmp16 = tmp17;
  }
  onPress = undefined;
  if (tmp10 != null) {
    onPress = tmp10.onPress;
  }
  if (onPress == null) {
    onPress = callback;
  }
  accessibilityHint = undefined;
  if (tmp10 != null) {
    accessibilityHint = tmp10.accessibilityHint;
  }
  return closure_14(TableRow, obj3);
});
let ReactCompilerGating = ReactCompilerGating_mod;
let closure_19 = ReactCompilerGating.isReactCompilerEnabled()
  ? (arg0) => {
      let closure_0;
      let first;
      let tmp6;
      let tmp9;
      _require = arg0;
      const obj = require("react");
      const cResult = obj.c(6);
      if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
        const items = [GuildStore];
        cResult[0] = items;
        first = items;
      } else {
        first = cResult[0];
      }
      if (cResult[1] !== arg0) {
        const fn = function l() {
          return GuildStore.getGuild(closure_0);
        };
        cResult[1] = arg0;
        cResult[2] = fn;
        tmp6 = fn;
      } else {
        tmp6 = cResult[2];
      }
      const tmpResult = require("get initialized");
      const stateFromStores = tmpResult.useStateFromStores(first, tmp6);
      if (arg0 === closure_12) {
        let tmp12;
        const _Symbol = Symbol;
        if (cResult[3] === Symbol.for("react.memo_cache_sentinel")) {
          const intl2 = tmp(1126).intl;
          const stringResult = intl2.string(require("intl").t["32u1Dx"]);
          cResult[3] = stringResult;
          tmp12 = stringResult;
        } else {
          tmp12 = cResult[3];
        }
        tmp9 = tmp12;
      } else {
        let name;
        const tmp14 = cResult[4];
        if (stateFromStores != null) {
          name = stateFromStores.name;
        }
        if (tmp14 !== name) {
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
          tmp9 = name1;
        } else {
          tmp9 = cResult[5];
        }
      }
      return tmp9;
    }
  : (arg0) => {
      let closure_0;
      let stringResult;
      _require = arg0;
      const items = [GuildStore];
      const obj = require("get initialized");
      const stateFromStores = obj.useStateFromStores(items, () => GuildStore.getGuild(closure_0));
      if (arg0 === closure_12) {
        const intl2 = tmp(1126).intl;
        stringResult = intl2.string(tmp(1126).t["32u1Dx"]);
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
    };
ReactCompilerGating = ReactCompilerGating_mod;
let tmp5 = ReactCompilerGating.isReactCompilerEnabled()
  ? (size) => {
      const obj = react2;
      const cResult = obj.c(9);
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
          let tmp6;
          let tmp8;
          if (cResult[2] === tmp4.defaultIcon) {
            tmp6 = cResult[3];
          }
          if (cResult[4] !== str) {
            const obj2 = { color: "white", size: str };
            const tmp10 = authStore2(ClydeIcon.ClydeIcon, obj2);
            cResult[4] = str;
            cResult[5] = tmp10;
            tmp8 = tmp10;
          } else {
            tmp8 = cResult[5];
          }
          if (cResult[6] === tmp6) {
            let tmp11;
            if (cResult[7] === tmp8) {
              tmp11 = cResult[8];
            }
            return tmp11;
          }
          const obj3 = { style: tmp6, children: tmp8 };
          const tmp14 = authStore2(View, obj3);
          cResult[6] = tmp6;
          cResult[7] = tmp8;
          cResult[8] = tmp14;
          tmp11 = tmp14;
        }
      }
      const obj4 = { width: num, height: num, borderRadius: result };
      const merged = Object.assign(tmp4.defaultIcon);
      cResult[0] = result;
      cResult[1] = num;
      cResult[2] = tmp4.defaultIcon;
      cResult[3] = obj4;
      tmp6 = obj4;
    }
  : (size) => {
      let obj2;
      let str = size.size;
      if (str === undefined) {
        str = "sm";
      }
      let num = 32;
      const tmp = closure_17();
      if ("xs" === str) {
        num = 24;
      }
      const obj = { style: obj2, children: authStore2(ClydeIcon.ClydeIcon, { color: "white", size: str }) };
      obj2 = { width: num, height: num, borderRadius: num / 3 };
      const merged = Object.assign(tmp.defaultIcon);
      return authStore2(View, obj);
    };
let closure_20 = tmp5;
let closure_21 = react.memo((useSelectedGuildId) => {
  let callback;
  let closure_2;
  let memoResult;
  useSelectedGuildId = useSelectedGuildId.useSelectedGuildId;
  const merged = Object.assign(useSelectedGuildId, Object.assign({ useSelectedGuildId: 0 }));
  const selectedGuildId = useSelectedGuildId();
  let obj = selectedGuildId(504);
  const items = [GuildStore];
  let closure_1 = obj.useStateFromStores(items, () => GuildStore.getGuild(selectedGuildId));
  const tmp3 = closure_19(selectedGuildId);
  dependencyMap = tmp3;
  const items1 = [tmp3];
  const obj2 = { type: constants.PRESSABLE, useTitle: callback, withArrow: true, IconComponent: memoResult };
  memoResult = react.memo(() => {
    let tmp7;
    if (null == closure_1) {
      tmp7 = authStore2(closure_20, {});
    } else {
      const obj = { size: GuildIcon.GuildIconSizes.SMALL_32, guild: tmp };
      const tmp5 = GuildIconDefault;
      tmp7 = authStore2(tmp5, obj);
    }
    return tmp7;
  });
  callback = react.useCallback(() => closure_2, items1);
  const merged1 = Object.assign(merged);
  return closure_14(closure_22, obj2);
});
let closure_22 = react.memo((arg0) => {
  let IconComponent;
  let end;
  let onPress;
  let setting;
  let start;
  let tmp10Result;
  let tmp12;
  let useDescription;
  let useIsDisabled;
  let useTitle;
  let useTrailing;
  let variant;
  let withArrow;
  ({ useDescription, useIsDisabled, useTrailing, variant, start, end, IconComponent } = arg0);
  ({ setting, onPress, useTitle, withArrow } = arg0);
  const obj = useHighlightSettingItem;
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
  const obj2 = {
    label: title,
    subLabel: description,
    arrow: withArrow,
    variant,
    icon: tmp10Result,
    onPress,
    disabled: true === isDisabled,
    trailing: tmp12,
    start,
    end,
  };
  tmp10Result = null;
  const TableRow = TableRow2.TableRow;
  if (null != IconComponent) {
    const obj3 = { IconComponent, variant };
    tmp10Result = authStore2(TableRow2.TableRow.Icon, obj3);
  }
  tmp12 = undefined;
  if (null != trailing) {
    let tmp10Result2 = trailing;
    if (typeof trailing === "string") {
      const obj4 = { text: trailing };
      tmp10Result2 = authStore2(TableRow2.TableRow.TrailingText, obj4);
    }
    tmp12 = tmp10Result2;
  }
  const children = [authStore2(TableRow, obj2)];
  if (highlightSettingItem) {
    const obj5 = { start, end };
    highlightSettingItem = authStore2(SettingListItemHighlightDefault, obj5);
  }
  children[1] = highlightSettingItem;
  return authStore3(closure_15, { children });
});
ReactCompilerGating = ReactCompilerGating_mod;
let closure_23 = ReactCompilerGating.isReactCompilerEnabled()
  ? (arg0) => {
      let description;
      let descriptionColor;
      let descriptionVariant;
      let disabledActionLabel;
      let items;
      let str2;
      let tmp4;
      const obj = react2;
      const cResult = obj.c(9);
      ({ disabledActionLabel, description, descriptionVariant, descriptionColor } = arg0);
      if (cResult[0] !== disabledActionLabel) {
        const obj2 = { variant: "text-xs/medium", color: "text-link", children: disabledActionLabel };
        const tmp6 = authStore2(Text_Text.Text, obj2);
        cResult[0] = disabledActionLabel;
        cResult[1] = tmp6;
        tmp4 = tmp6;
      } else {
        tmp4 = cResult[1];
      }
      if (null == description) {
        return tmp4;
      } else {
        if (cResult[2] === description) {
          if (cResult[3] === descriptionColor) {
            let tmp7;
            if (cResult[4] === descriptionVariant) {
              tmp7 = cResult[5];
            }
            if (cResult[6] === tmp7) {
              let tmp11;
              if (cResult[7] === tmp4) {
                tmp11 = cResult[8];
              }
              return tmp11;
            }
            const obj3 = { children: items };
            items = [tmp4, tmp7];
            const tmp14 = authStore3(View, obj3);
            cResult[6] = tmp7;
            cResult[7] = tmp4;
            cResult[8] = tmp14;
            tmp11 = tmp14;
          }
        }
        let tmp10Result = description;
        if (!react.isValidElement(description)) {
          let str = descriptionVariant;
          const Text = Text_Text.Text;
          if (descriptionVariant == null) {
            str = "text-xs/medium";
          }
          const obj4 = { variant: str, color: str2, children: description };
          str2 = descriptionColor;
          if (descriptionColor == null) {
            str2 = "text-subtle";
          }
          tmp10Result = authStore2(Text, obj4);
        }
        cResult[2] = description;
        cResult[3] = descriptionColor;
        cResult[4] = descriptionVariant;
        cResult[5] = tmp10Result;
        tmp7 = tmp10Result;
      }
    }
  : (children) => {
      let description;
      let descriptionColor;
      let descriptionVariant;
      let items;
      ({ description, descriptionVariant, descriptionColor } = children);
      const tmp4 = authStore2(Text_Text.Text, {
        variant: "text-xs/medium",
        color: "text-link",
        children: children.disabledActionLabel,
      });
      if (null == description) {
        return tmp4;
      } else {
        let tmpResult = description;
        if (!react.isValidElement(description)) {
          const Text = Text_Text.Text;
          if (descriptionVariant == null) {
            descriptionVariant = "text-xs/medium";
          }
          const obj = { variant: descriptionVariant, color: descriptionColor, children: description };
          if (descriptionColor == null) {
            descriptionColor = "text-subtle";
          }
          tmpResult = authStore2(Text, obj);
        }
        const obj2 = { children: items };
        items = [tmp4, tmpResult];
        return authStore3(View, obj2);
      }
    };
let closure_24 = react.memo((arg0) => {
  let IconComponent;
  let end;
  let hasIcon;
  let obj6;
  let obj7;
  let obj8;
  let onValueChange;
  let setting;
  let start;
  let tmp16;
  let tmp17;
  let tmp8;
  let useDescription;
  let useIsDisabled;
  let useTitle;
  let useValue;
  let variant;
  ({ useDescription, useIsDisabled, variant, start, end, IconComponent } = arg0);
  ({ setting, onValueChange, useTitle, useValue, hasIcon } = arg0);
  const obj = useHighlightSettingItem;
  let highlightSettingItem = obj.useHighlightSettingItem(setting);
  const title = useTitle();
  const value = useValue();
  let description;
  if (useDescription != null) {
    description = useDescription();
  }
  let isDisabled;
  if (useIsDisabled != null) {
    isDisabled = useIsDisabled();
  }
  const obj2 = { label: title, subLabel: description, icon: tmp8, variant, start, end };
  tmp8 = null;
  if (null != IconComponent) {
    const obj3 = { IconComponent, variant };
    tmp8 = authStore2(TableRow2.TableRow.Icon, obj3);
  }
  if (typeof isDisabled === "object") {
    const obj5 = { subLabel: authStore2(closure_23, obj6), accessible: true, trailing: authStore2(View, obj7) };
    const TableRow = TableRow2.TableRow;
    const merged = Object.assign(obj2);
    obj6 = {
      disabledActionLabel: isDisabled.label,
      description,
      descriptionVariant: "text-md/semibold",
      descriptionColor: "mobile-text-heading-primary",
    };
    ({ accessibilityHint: obj4.accessibilityHint, onPress: obj4.onPress } = isDisabled);
    obj7 = { style: { opacity: 0.5 }, children: authStore2(FormSwitch.FormSwitch, obj8) };
    obj8 = { "aria-hidden": true, value, disabled: true };
    tmp16 = authStore2(TableRow, obj5);
    tmp17 = authStore2;
  } else {
    const obj9 = { disabled: isDisabled, onValueChange, value };
    const TableSwitchRow = TableSwitchRow2.TableSwitchRow;
    const merged1 = Object.assign(obj2);
    tmp16 = authStore2(TableSwitchRow, obj9);
    tmp17 = authStore2;
  }
  let tmp17Result = tmp16;
  if (true === hasIcon) {
    const obj10 = { children: tmp16 };
    tmp17Result = tmp17(closure_25, obj10);
  }
  const children = [tmp17Result];
  if (highlightSettingItem) {
    const obj19 = { start, end };
    highlightSettingItem = tmp17(SettingListItemHighlightDefault, obj19);
  }
  children[1] = highlightSettingItem;
  return authStore3(closure_15, { children });
});
ReactCompilerGating = ReactCompilerGating_mod;
let closure_25 = ReactCompilerGating.isReactCompilerEnabled()
  ? (children) => {
      let tmp5;
      const obj = react2;
      const cResult = obj.c(5);
      children = children.children;
      const context = react.useContext(react3.AccessibilityPreferencesContext);
      if (cResult[0] !== context) {
        const obj2 = { switchIconsEnabled: true };
        const merged = Object.assign(context);
        cResult[0] = context;
        cResult[1] = obj2;
        tmp5 = obj2;
      } else {
        tmp5 = cResult[1];
      }
      if (cResult[2] === children) {
        let tmp9;
        if (cResult[3] === tmp5) {
          tmp9 = cResult[4];
        }
        return tmp9;
      }
      const tmp10 = authStore2(react3.AccessibilityPreferencesContext.Provider, { value: tmp5, children });
      cResult[2] = children;
      cResult[3] = tmp5;
      cResult[4] = tmp10;
      tmp9 = tmp10;
    }
  : (children) => {
      children = children.children;
      const context = react.useContext(react3.AccessibilityPreferencesContext);
      const items = [context];
      const value = react.useMemo(() => {
        const obj = { switchIconsEnabled: true };
        const merged = Object.assign(context);
        return obj;
      }, items);
      return authStore2(react3.AccessibilityPreferencesContext.Provider, { value, children });
    };
let closure_26 = react.memo((arg0) => {
  let onValueChange;
  let setting;
  let useOptions;
  let useTitle;
  let useValue;
  ({ setting, useTitle, useValue, useOptions, onValueChange } = arg0);
  const tmp = closure_17();
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
  const obj2 = {
    title,
    defaultValue: combined,
    onChange: onValueChange,
    hasIcons: options.some((icon) => null != icon.icon),
    children: options.map((label) => {
      let combined;
      if (typeof label.value === "number") {
        const _HermesInternal = HermesInternal;
        combined = "" + label.value;
      } else {
        combined = label.value;
      }
      const obj = {
        value: combined,
        label: label.label,
        subLabel: label.subLabel,
        disabled: label.disabled,
        icon: label.icon,
      };
      return closure_1_14(require("TableRadioRow").TableRadioRow, obj, label.value);
    }),
  };
  const TableRadioGroup = TableRadioGroup2.TableRadioGroup;
  const children = [authStore2(TableRadioGroup, obj2, combined)];
  if (highlightSettingItem) {
    const obj3 = { start: true, end: true, style: tmp.radioSettingHighlight };
    highlightSettingItem = authStore2(SettingListItemHighlightDefault, obj3);
  }
  children[1] = highlightSettingItem;
  return authStore3(closure_15, { children });
});
let closure_27 = react.memo((arg0) => {
  let IconComponent;
  let end;
  let setting;
  let start;
  let tmp11Result;
  let tmp11Result2;
  let tmp12;
  let useDescription;
  let useIsDisabled;
  let useTitle;
  let useTrailing;
  let variant;
  ({ variant, useTrailing, useIsDisabled, useDescription, start, end, IconComponent } = arg0);
  let trailing;
  const tmp = trailing;
  ({ setting, useTitle } = arg0);
  let obj = trailing(14505);
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
  const callback = react.useCallback(() => {
    if (null != trailing) {
      const obj = ClipboardUtils;
      obj.copy(tmp);
      const obj2 = ToastUtils;
      const result = obj2.presentCopiedToClipboard();
    }
  }, items);
  let obj2 = {
    label: title,
    subLabel: description,
    onPress: tmp12,
    variant,
    disabled: isDisabled,
    icon: tmp11Result,
    trailing: tmp11Result2,
    start,
    end,
  };
  tmp12 = null;
  const TableRow = tmp(5993).TableRow;
  if (null != trailing) {
    tmp12 = callback;
  }
  tmp11Result = null;
  if (null != IconComponent) {
    const obj3 = { IconComponent, variant };
    tmp11Result = closure_14(tmp(5993).TableRow.Icon, obj3);
  }
  tmp11Result2 = null;
  if (null != trailing) {
    const obj4 = { text: trailing };
    tmp11Result2 = closure_14(tmp(5993).TableRow.TrailingText, obj4);
  }
  const children = [closure_14(TableRow, obj2)];
  if (highlightSettingItem) {
    const obj5 = { start, end };
    highlightSettingItem = closure_14(SettingListItemHighlightDefault, obj5);
  }
  children[1] = highlightSettingItem;
  return closure_16(closure_15, { children });
});
let closure_28 = react.memo((arg0) => {
  let end;
  let maximum;
  let obj3;
  let onValueChange;
  let setting;
  let start;
  let useTitle;
  let useValue;
  ({ useValue, start, end } = arg0);
  ({ setting, useTitle, onValueChange, maximum } = arg0);
  const obj = useHighlightSettingItem;
  let highlightSettingItem = obj.useHighlightSettingItem(setting);
  const tmp4 = closure_17();
  const title = useTitle();
  let value;
  if (useValue != null) {
    value = useValue();
  }
  const obj2 = { label: title, start, end, subLabel: authStore2(View, obj3) };
  obj3 = {
    style: tmp4.slider,
    children: authStore2(VolumeSliderDefault, { value, maxVolume: maximum, onValueChange, accessibilityLabel: title }),
  };
  const TableRow = TableRow2.TableRow;
  const children = [authStore2(TableRow, obj2)];
  if (highlightSettingItem) {
    const obj4 = { start, end };
    highlightSettingItem = authStore2(SettingListItemHighlightDefault, obj4);
  }
  children[1] = highlightSettingItem;
  return authStore3(closure_15, { children });
});
let closure_29 = react.memo((useTrailing) => {
  let Slider;
  let Stack;
  let _undefined;
  let c9;
  let defaultValue;
  let end;
  let endIcon;
  let formatPercentResult;
  let intl;
  let items7;
  let obj6;
  let obj7;
  let start;
  let startIcon;
  let tmp11;
  let useProps;
  let valueLabel;
  useTrailing = useTrailing.useTrailing;
  let num2;
  let num4;
  let num3;
  let onValueChange;
  _objectWithoutProperties = undefined;
  let value;
  let closure_8;
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
  let obj = onSlidingComplete(num2[17]);
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
  onValueChange(value.useState(false), 2);
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
    const obj = HapticUtils;
    const result = obj.triggerHapticFeedback(haptics_HapticFeedbackTypesDefault.IMPACT_LIGHT);
  }, items5);
  let trailing;
  const callback6 = value.useCallback(() => {
    callback3(Math.max(num2, first - num));
    const obj = HapticUtils;
    const result = obj.triggerHapticFeedback(haptics_HapticFeedbackTypesDefault.IMPACT_LIGHT);
  }, items6);
  if (useTrailing != null) {
    trailing = useTrailing();
  }
  const obj2 = { start, end, shadow: "none", border: "none", children: closure_16(Stack, obj7) };
  const Card = tmp5(tmp6[34]).Card;
  Stack = tmp5(tmp6[35]).Stack;
  const obj3 = { style: tmp4.sliderTitle, children: items7 };
  const Stack2 = tmp5(tmp6[35]).Stack;
  items7 = [closure_14(onSlidingComplete(num2[23]).Text, { variant: "text-md/semibold", children: title }), trailing];
  const items8 = [closure_16(closure_8, obj3)];
  let tmp20Result = null != value;
  const tmp22 = closure_8;
  if (tmp20Result) {
    const Text = tmp5(tmp6[23]).Text;
    if (formatPercentResult == null) {
      const tmp5Result = onSlidingComplete(num2[36]);
      formatPercentResult = tmp5Result.formatPercent(stateFromStores, value);
    }
    const obj4 = { variant: "text-sm/medium", color: "text-muted", children: formatPercentResult };
    tmp20Result = closure_14(Text, obj4);
  }
  items8[1] = tmp20Result;
  const items9 = [closure_16(Stack2, { direction: "horizontal", justify: "space-between", children: items8 }), ,];
  let slider;
  const tmp5Result2 = onSlidingComplete(num2[37]);
  if (tmp5Result2.isAndroid()) {
    slider = tmp4.slider;
  }
  const obj5 = { style: slider, children: closure_14(Slider, obj6) };
  obj6 = {
    accessibilityLabel: title,
    step: num,
    onValueChange: callback1,
    value,
    minimumValue: num2,
    maximumValue: num4,
    onSlidingStart: callback,
    onSlidingComplete: callback2,
    startIcon: closure_14(onSlidingComplete(num2[39]).PressableOpacity, {
      accessible: false,
      onPress: callback6,
      children: startIcon,
    }),
    endIcon: closure_14(onSlidingComplete(num2[39]).PressableOpacity, {
      accessible: false,
      onPress: callback5,
      children: endIcon,
    }),
  };
  Slider = tmp5(tmp6[38]).Slider;
  const merged = Object.assign(tmp3);
  items9[1] = closure_14(tmp22, obj5);
  let tmp26 = !tmp11;
  const Button = tmp5(tmp6[40]).Button;
  if (!tmp11) {
    tmp26 = value === num3;
  }
  obj7 = { children: items9 };
  const obj8 = {
    disabled: tmp26,
    variant: "secondary",
    text: intl.string(onSlidingComplete(num2[18]).t["3b//lO"]),
    onPress: callback4,
  };
  intl = tmp5(tmp6[18]).intl;
  items9[2] = closure_14(Button, obj8);
  return closure_14(Card, obj2);
});
ReactCompilerGating = ReactCompilerGating_mod;
let closure_30 = ReactCompilerGating.isReactCompilerEnabled()
  ? (breadcrumbs) => {
      const obj = react2;
      const cResult = obj.c(4);
      breadcrumbs = breadcrumbs.breadcrumbs;
      let tmp4 = null;
      if (0 !== breadcrumbs.length) {
        let tmp5;
        let tmp7;
        if (cResult[0] !== breadcrumbs) {
          const joined = breadcrumbs.join(" \u2192 ");
          cResult[0] = breadcrumbs;
          cResult[1] = joined;
          tmp5 = joined;
        } else {
          tmp5 = cResult[1];
        }
        if (cResult[2] !== tmp5) {
          const obj2 = { variant: "text-xs/medium", color: "text-muted", children: tmp5 };
          const tmp9 = authStore2(Text_Text.Text, obj2);
          cResult[2] = tmp5;
          cResult[3] = tmp9;
          tmp7 = tmp9;
        } else {
          tmp7 = cResult[3];
        }
        tmp4 = tmp7;
      }
      return tmp4;
    }
  : (breadcrumbs) => {
      breadcrumbs = breadcrumbs.breadcrumbs;
      let tmp = null;
      if (0 !== breadcrumbs.length) {
        const obj = { variant: "text-xs/medium", color: "text-muted", children: breadcrumbs.join(" \u2192 ") };
        const Text = Text_Text.Text;
        tmp = authStore2(Text, obj);
      }
      return tmp;
    };
ReactCompilerGating = ReactCompilerGating_mod;
let closure_31 = ReactCompilerGating.isReactCompilerEnabled()
  ? (IconComponent) => {
      let obj4;
      let tmp5;
      const obj = react2;
      const cResult = obj.c(4);
      IconComponent = IconComponent.IconComponent;
      const obj2 = useToken;
      const token = obj2.useToken(nativeDefault.modules.mobile.TABLE_ROW_ICON_SIZE);
      if (null == IconComponent) {
        let tmp8;
        if (cResult[0] !== token) {
          const obj3 = { style: obj4 };
          obj4 = { width: token };
          const tmp11 = authStore2(View, obj3);
          cResult[0] = token;
          cResult[1] = tmp11;
          tmp8 = tmp11;
        } else {
          tmp8 = cResult[1];
        }
        tmp5 = tmp8;
      } else if (cResult[2] !== IconComponent) {
        const obj5 = { IconComponent };
        const tmp7 = authStore2(TableRow2.TableRow.Icon, obj5);
        cResult[2] = IconComponent;
        cResult[3] = tmp7;
        tmp5 = tmp7;
      } else {
        tmp5 = cResult[3];
      }
      return tmp5;
    }
  : (IconComponent) => {
      let obj3;
      let tmp6;
      IconComponent = IconComponent.IconComponent;
      useToken;
      if (null == IconComponent) {
        const obj2 = { style: obj3 };
        obj3 = { width: tmp4 };
        tmp6 = authStore2(View, obj2);
      } else {
        const obj = { IconComponent };
        tmp6 = authStore2(TableRow2.TableRow.Icon, obj);
      }
      return tmp6;
    };
ReactCompilerGating = ReactCompilerGating_mod;
let closure_33 = ReactCompilerGating.isReactCompilerEnabled()
  ? (index) => {
      let IconComponent;
      let breadcrumbs;
      let setting;
      let settingData;
      let title;
      let obj = title(index[16]);
      const cResult = obj.c(18);
      ({ settingData, IconComponent, title } = index);
      ({ breadcrumbs, setting } = index);
      const tmp2 = index;
      index = index.index;
      const total = index.total;
      const onPress = settingData.onPress;
      const withArrow = settingData.withArrow;
      if (cResult[0] === index) {
        if (cResult[1] === onPress) {
          if (cResult[2] === setting) {
            if (cResult[3] === title) {
              let tmp4;
              let tmp5;
              let tmp9;
              if (cResult[4] === total) {
                tmp4 = cResult[5];
              }
              if (cResult[6] !== IconComponent) {
                let obj2 = { IconComponent };
                const tmp8 = closure_14(closure_31, obj2);
                cResult[6] = IconComponent;
                cResult[7] = tmp8;
                tmp5 = tmp8;
              } else {
                tmp5 = cResult[7];
              }
              if (cResult[8] !== breadcrumbs) {
                let obj3 = { breadcrumbs };
                const tmp12 = closure_14(closure_30, obj3);
                cResult[8] = breadcrumbs;
                cResult[9] = tmp12;
                tmp9 = tmp12;
              } else {
                tmp9 = cResult[9];
              }
              if (cResult[10] === tmp4) {
                if (cResult[11] === tmp5) {
                  if (cResult[12] === tmp9) {
                    if ((cResult[13] === 0) === index) {
                      if ((cResult[14] === index) === total - 1) {
                        if (cResult[15] === title) {
                          let tmp15;
                          if (cResult[16] === withArrow) {
                            tmp15 = cResult[17];
                          }
                          return tmp15;
                        }
                      }
                    }
                  }
                }
              }
              const obj4 = {
                label: title,
                onPress: tmp4,
                icon: tmp5,
                subLabel: tmp9,
                start: 0 === index,
                end: index === total - 1,
                arrow: withArrow,
              };
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
        const obj = Tracking;
        const obj2 = { setting, title, searchResultPosition: index, numSearchResults: total };
        const result = obj.trackSettingSearchResultPress(obj2);
        const obj3 = KeyboardManagerUtils;
        const result1 = obj3.dismissGlobalKeyboard();
        onPress();
      };
      cResult[0] = index;
      cResult[1] = onPress;
      cResult[2] = setting;
      cResult[3] = title;
      cResult[4] = total;
      cResult[5] = fn;
      tmp4 = fn;
    }
  : (setting) => {
      let IconComponent;
      let breadcrumbs;
      let settingData;
      let title;
      ({ settingData, title } = setting);
      setting = setting.setting;
      const index = setting.index;
      const total = setting.total;
      const onPress = settingData.onPress;
      const items = [setting, title, index, total, onPress];
      ({ IconComponent, breadcrumbs } = setting);
      const withArrow = settingData.withArrow;
      const callback = react.useCallback(() => {
        const obj = Tracking;
        const obj2 = { setting, title, searchResultPosition: index, numSearchResults: total };
        const result = obj.trackSettingSearchResultPress(obj2);
        const obj3 = KeyboardManagerUtils;
        const result1 = obj3.dismissGlobalKeyboard();
        onPress();
      }, items);
      let obj = {
        label: title,
        onPress: callback,
        icon: closure_14(closure_31, { IconComponent }),
        subLabel: closure_14(closure_30, { breadcrumbs }),
        start: 0 === index,
        end: index === total - 1,
        arrow: withArrow,
      };
      const TableRow = title(index[12]).TableRow;
      return closure_14(TableRow, obj);
    };
ReactCompilerGating = ReactCompilerGating_mod;
let closure_35 = ReactCompilerGating.isReactCompilerEnabled()
  ? (arg0) => {
      let end;
      let first;
      let items;
      let start;
      let obj = react2;
      const cResult = obj.c(11);
      ({ start, end } = arg0);
      const tmp4 = closure_17();
      if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
        const fn = function n() {
          const obj = { width: `${(10 + 80 * Math.random()) | 0}%` };
          return obj;
        };
        cResult[0] = fn;
        first = fn;
      } else {
        first = cResult[0];
      }
      const first1 = _slicedToArray(react.useState(first), 1)[0];
      if (cResult[1] === tmp4.placeholderUsername) {
        let tmp7;
        let tmp9;
        if (cResult[2] === first1) {
          tmp7 = cResult[3];
        }
        if (cResult[4] !== tmp4.placeholderAvatar) {
          const obj2 = { style: tmp4.placeholderAvatar };
          const tmp12 = authStore2(View, obj2);
          cResult[4] = tmp4.placeholderAvatar;
          cResult[5] = tmp12;
          tmp9 = tmp12;
        } else {
          tmp9 = cResult[5];
        }
        if (cResult[6] === end) {
          if (cResult[7] === start) {
            if (cResult[8] === tmp7) {
              let tmp13;
              if (cResult[9] === tmp9) {
                tmp13 = cResult[10];
              }
              return tmp13;
            }
          }
        }
        const obj3 = { start, end, label: tmp7, icon: tmp9 };
        const tmp15 = authStore2(TableRow2.TableRow, obj3);
        cResult[6] = end;
        cResult[7] = start;
        cResult[8] = tmp7;
        cResult[9] = tmp9;
        cResult[10] = tmp15;
        tmp13 = tmp15;
      }
      const obj4 = { style: items };
      items = [tmp4.placeholderUsername, first1];
      const tmp8 = authStore2(View, obj4);
      cResult[1] = tmp4.placeholderUsername;
      cResult[2] = first1;
      cResult[3] = tmp8;
      tmp7 = tmp8;
    }
  : (arg0) => {
      let end;
      let items;
      let obj2;
      let obj3;
      let start;
      ({ start, end } = arg0);
      const tmp = closure_17();
      let obj = { start, end, label: authStore2(View, obj2), icon: authStore2(View, obj3) };
      obj2 = { style: items };
      items = [
        tmp.placeholderUsername,
        _slicedToArray(
          react.useState(() => {
            const obj = { width: `${(10 + 80 * Math.random()) | 0}%` };
            return obj;
          }),
          1,
        )[0],
      ];
      const TableRow = TableRow2.TableRow;
      obj3 = { style: tmp.placeholderAvatar };
      return authStore2(TableRow, obj);
    };
size = size_mod;
let result = size.fileFinishedImporting("modules/settings/native/renderer/SettingRenderer.tsx");

export const GuildSelectDefaultIcon = tmp5;
export const renderSettingItem = function renderSettingItem(item) {
  let end;
  let setting;
  let settingData;
  let start;
  ({ setting, settingData, start, end } = item);
  const type = settingData.type;
  if (map1.GUILD_SELECTOR === type) {
    const obj2 = { setting, start, end };
    const merged = Object.assign(settingData);
    return authStore2(closure_21, obj2);
  } else if (map1.ROUTE === type) {
    const obj3 = { start, end };
    const merged1 = Object.assign(settingData);
    return authStore2(closure_18, obj3);
  } else if (map1.PRESSABLE === type) {
    const obj4 = { start, end, setting };
    const merged2 = Object.assign(settingData);
    return authStore2(closure_22, obj4);
  } else if (map1.TOGGLE === type) {
    const obj5 = { start, end, setting };
    const merged3 = Object.assign(settingData);
    return authStore2(closure_24, obj5);
  } else if (map1.STATIC === type) {
    const obj6 = { start, end, setting };
    const merged4 = Object.assign(settingData);
    return authStore2(closure_27, obj6);
  } else if (map1.VOLUME_SLIDER === type) {
    const obj7 = { start, end, setting };
    const merged5 = Object.assign(settingData);
    return authStore2(closure_28, obj7);
  } else if (map1.RADIO === type) {
    const obj8 = { setting };
    const merged6 = Object.assign(settingData);
    return authStore2(closure_26, obj8);
  } else if (map1.SLIDER === type) {
    const obj = { start, end, setting };
    const merged7 = Object.assign(settingData);
    return authStore2(closure_29, obj);
  }
};
export const renderSettingSearchResultItem = function renderSettingSearchResultItem(settingData) {
  settingData = settingData.settingData;
  const tmp = _objectWithoutProperties(settingData, closure_4);
  const type = settingData.type;
  if (map1.ROUTE === type) {
    const obj2 = { settingData };
    const merged = Object.assign(tmp);
    return authStore2(RouteSettingSearchResult, obj2);
  } else if (map1.PRESSABLE === type) {
    const obj3 = { settingData };
    const merged1 = Object.assign(tmp);
    return authStore2(closure_33, obj3);
  } else if (map1.STATIC === type) {
    const obj = { settingData };
    const merged2 = Object.assign(tmp);
    return authStore2(StaticSettingSearchResult, obj);
  } else {
    const _Error = Error;
    const _HermesInternal = HermesInternal;
    const self = this;
    const self2 = this;
    const error = new Error("[SettingRenderer] Found unsupported renderer type for setting: " + settingData.setting);
    throw error;
  }
};
export const renderSettingSearchResultPlaceholderItem = function renderSettingSearchResultPlaceholderItem(start) {
  const obj = { start: start.start, end: start.end };
  return authStore2(closure_35, obj);
};
