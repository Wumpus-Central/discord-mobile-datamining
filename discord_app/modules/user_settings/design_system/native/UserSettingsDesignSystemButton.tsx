// === Module 15638: UserSettingsDesignSystemButton ===

// Module 15638 (UserSettingsDesignSystemButton)
import react2 from "react" /* 576 */;
import nativeDefault from "native" /* 587 */;
import Constants from "Constants" /* 1085 */;
import AssetRegistryDefault from "AssetRegistry" /* 4821 */;
import components_Button_Button from "components/Button/Button" /* 5594 */;
import LinearGradientDefault from "LinearGradient" /* 5605 */;
import AssetRegistryDefault2 from "AssetRegistry" /* 6884 */;
import IconButton4 from "IconButton" /* 7575 */;
import AssetRegistryDefault3 from "AssetRegistry" /* 7608 */;
import AssetRegistryDefault4 from "AssetRegistry" /* 9541 */;
import AssetRegistryDefault5 from "AssetRegistry" /* 9544 */;
import AssetRegistryDefault6 from "AssetRegistry" /* 9545 */;
import AssetRegistryDefault7 from "AssetRegistry" /* 9546 */;
import AssetRegistryDefault8 from "AssetRegistry" /* 9547 */;
import AssetRegistryDefault9 from "AssetRegistry" /* 9548 */;
import ImageButton2 from "ImageButton" /* 9550 */;
import AssetRegistryDefault10 from "AssetRegistry" /* 9814 */;
import AssetRegistryDefault11 from "AssetRegistry" /* 10383 */;
import ToggleButton2 from "ToggleButton" /* 14249 */;
import useToggleButtonProps from "useToggleButtonProps" /* 14250 */;
import ToggleIconButton2 from "ToggleIconButton" /* 14251 */;
import useDesignSystemSettingsStateDefault from "useDesignSystemSettingsState" /* 15639 */;
import AssetRegistryDefault12 from "AssetRegistry" /* 15640 */;
import _slicedToArray_mod from "_slicedToArray" /* 32 */;
import react from "react" /* 19 */;
import react_native from "react-native" /* 17 */;
import ClientThemesConstants from "ClientThemesConstants" /* 1240 */;
import Fragment from "Fragment" /* 21 */;
import ReactCompilerGating_mod from "ReactCompilerGating" /* 558 */;
import createStyles_mod from "createStyles" /* 4890 */;
import size from "module_2" /* 2 */;

const require = globalThis.__r;
let _require, importDefault, navigation;

let c10;
let c9;
let closure_12;
let hasOwnProperty;
let metroImportAll;
let metroRequire;
let obj2;
let obj3;
let obj4;
let obj5;
let unpackModuleId;
let _slicedToArray = _slicedToArray_mod;
({ View: hasOwnProperty, ScrollView: metroRequire } = react_native);
const ThemeTypes = Constants.ThemeTypes;
({ LIGHT_BACKGROUND_GRADIENT_PRESETS: metroImportAll, DARK_BACKGROUND_GRADIENT_PRESETS: c9 } = ClientThemesConstants);
({ jsx: c10, jsxs: unpackModuleId, Fragment: closure_12 } = Fragment);
let closure_13 = ["primary", "secondary", "tertiary"];
let closure_14 = ["primary-overlay", "secondary-overlay"];
let closure_15 = ["destructive", "active"];
let closure_16 = ["expressive"];
let closure_17 = ["experimental_premium-primary", "experimental_premium-secondary"];
let ReactCompilerGating = ReactCompilerGating_mod;
let closure_18 = ReactCompilerGating.isReactCompilerEnabled() ? ((arg0) => {
  let buttonScale;
  let buttonSize;
  let closure_129_2;
  let enableLoadingState;
  let grow;
  let iconPosition;
  let showDisabled;
  let text;
  let tmp6;
  let tmp7;
  let variant;
  const obj = react2;
  const cResult = obj.c(14);
  ({ variant, text, grow } = arg0);
  const tmp4 = useDesignSystemSettingsStateDefault();
  ({ buttonScale, buttonSize, enableLoadingState } = tmp4);
  ({ iconPosition, showDisabled } = tmp4);
  const showIcon = tmp4.showIcon;
  let closure_1 = react.useRef(null);
  [tmp6, closure_129_2] = react.useState(false);
  _slicedToArray(react.useState(false), 2);
  if (cResult[0] !== enableLoadingState) {
    const fn = function l() {
      if (enableLoadingState) {
        if (null != ref.current) {
          const _clearTimeout = clearTimeout;
          clearTimeout(ref.current);
        }
        closure_1_2(true);
        const _setTimeout = setTimeout;
        ref.current = setTimeout(() => {
          closure_1_2(false);
        }, 5000);
      }
    };
    cResult[0] = enableLoadingState;
    cResult[1] = fn;
    tmp7 = fn;
  } else {
    tmp7 = cResult[1];
  }
  if (cResult[2] === Symbol.for("react.memo_cache_sentinel")) {
    class I {
      constructor() {
        closure_1_2(true);
        ref.current = setTimeout(() => {
          closure_1_2(false);
        }, 5000);
      }
    }
    cResult[2] = I;
  } else {
    class I {
      constructor() {
        closure_1_2(true);
        ref.current = setTimeout(() => {
          closure_1_2(false);
        }, 5000);
      }
    }
  }
  if (text == null) {
    class I {
      constructor() {
        closure_1_2(true);
        ref.current = setTimeout(() => {
          closure_1_2(false);
        }, 5000);
      }
    }
  }
  if (text == null) {
    class I {
      constructor() {
        closure_1_2(true);
        ref.current = setTimeout(() => {
          closure_1_2(false);
        }, 5000);
      }
    }
  }
  if (grow == null) {
    class I {
      constructor() {
        closure_1_2(true);
        ref.current = setTimeout(() => {
          closure_1_2(false);
        }, 5000);
      }
    }
  }
  if (showIcon) {
    class I {
      constructor() {
        closure_1_2(true);
        ref.current = setTimeout(() => {
          closure_1_2(false);
        }, 5000);
      }
    }
  }
  if (cResult[3] === tmp6) {
    class I {
      constructor() {
        closure_1_2(true);
        ref.current = setTimeout(() => {
          closure_1_2(false);
        }, 5000);
      }
    }
  }
  cResult[3] = tmp6;
  cResult[4] = buttonScale;
  cResult[5] = buttonSize;
  cResult[6] = iconPosition;
  cResult[7] = tmp7;
  cResult[8] = showDisabled;
  cResult[9] = text;
  cResult[10] = grow;
  cResult[11] = undefined;
  cResult[12] = variant;
  cResult[13] = authStore(components_Button_Button.Button, { disabled: showDisabled, onPress: tmp7, onLongPress: I, loading: tmp6, variant, text, grow, size: buttonSize, icon: undefined, iconPosition, scaleAmountInPx: buttonScale });
  authStore(components_Button_Button.Button, { disabled: showDisabled, onPress: tmp7, onLongPress: I, loading: tmp6, variant, text, grow, size: buttonSize, icon: undefined, iconPosition, scaleAmountInPx: buttonScale });
}) : ((arg0) => {
  let buttonScale;
  let buttonSize;
  let closure_2;
  let first;
  let grow;
  let iconPosition;
  let showDisabled;
  let showIcon;
  let text;
  let tmpResult;
  let variant;
  ({ variant, text, grow } = arg0);
  closure_2 = undefined;
  const tmp3 = useDesignSystemSettingsStateDefault();
  const enableLoadingState = tmp3.enableLoadingState;
  ({ buttonScale, buttonSize, iconPosition, showIcon, showDisabled } = tmp3);
  let closure_1 = react.useRef(null);
  [first, closure_2] = react.useState(false);
  const items = [enableLoadingState];
  const callback = react.useCallback(() => {
    if (enableLoadingState) {
      if (null != ref.current) {
        const _clearTimeout = clearTimeout;
        clearTimeout(ref.current);
      }
      closure_2(true);
      const _setTimeout = setTimeout;
      ref.current = setTimeout(() => {
        closure_1_2(false);
      }, 5000);
    }
  }, items);
  const callback1 = react.useCallback(() => {
    closure_2(true);
    ref.current = setTimeout(() => {
      closure_1_2(false);
    }, 5000);
  }, []);
  const obj = { disabled: showDisabled, onPress: callback, onLongPress: callback1, loading: first, variant, text, grow, size: buttonSize, icon: tmpResult, iconPosition, scaleAmountInPx: buttonScale };
  const Button = components_Button_Button.Button;
  if (text == null) {
    text = variant;
  }
  if (text == null) {
    text = "";
  }
  if (grow == null) {
    grow = false;
  }
  tmpResult = undefined;
  if (showIcon) {
    tmpResult = AssetRegistryDefault12;
  }
  return authStore(Button, obj);
});
ReactCompilerGating = ReactCompilerGating_mod;
let closure_19 = ReactCompilerGating.isReactCompilerEnabled() ? ((arg0) => {
  let buttonSize;
  let closure_129_2;
  let enableLoadingState;
  let showLabel;
  let tmp8;
  let tmp9;
  let variant;
  const obj = react2;
  const cResult = obj.c(19);
  ({ variant, showLabel } = arg0);
  const tmp4 = undefined !== showLabel && showLabel;
  const tmp6 = useDesignSystemSettingsStateDefault();
  ({ buttonSize, enableLoadingState } = tmp6);
  const showDisabled = tmp6.showDisabled;
  let closure_1 = react.useRef(null);
  [tmp8, closure_129_2] = _slicedToArray(react.useState(false), 2);
  const tmp7 = _slicedToArray(react.useState(false), 2);
  if (cResult[0] !== enableLoadingState) {
    const fn = function l() {
      if (enableLoadingState) {
        if (null != ref.current) {
          const _clearTimeout = clearTimeout;
          clearTimeout(ref.current);
        }
        closure_1_2(true);
        const _setTimeout = setTimeout;
        ref.current = setTimeout(() => {
          closure_1_2(false);
        }, 5000);
      }
    };
    cResult[0] = enableLoadingState;
    cResult[1] = fn;
    tmp9 = fn;
  } else {
    tmp9 = cResult[1];
  }
  _slicedToArray = tmp9;
  if (tmp4) {
    if (cResult[2] !== tmp9) {
      class P {
        constructor() {
          return closure_3();
        }
      }
      cResult[2] = tmp9;
      cResult[3] = P;
    } else {
      class P {
        constructor() {
          return closure_3();
        }
      }
    }
    if (variant == null) {
      class P {
        constructor() {
          return closure_3();
        }
      }
    }
    if (cResult[4] === tmp8) {
      class P {
        constructor() {
          return closure_3();
        }
      }
    }
    const obj2 = { disabled: showDisabled, onPress: P, label: variant, grow: true, loading: tmp8, variant, icon: AssetRegistryDefault2 };
    const IconButton2 = IconButton4.IconButton;
    cResult[4] = tmp8;
    cResult[5] = showDisabled;
    cResult[6] = P;
    cResult[7] = variant;
    cResult[8] = variant;
    cResult[9] = authStore(IconButton2, obj2);
    const tmp19 = authStore(IconButton2, obj2);
  } else {
    class P {
      constructor() {
        return closure_3();
      }
    }
    if (variant == null) {
      class P {
        constructor() {
          return closure_3();
        }
      }
    }
    if (cResult[12] === tmp8) {
      class P {
        constructor() {
          return closure_3();
        }
      }
    }
    const obj3 = { disabled: showDisabled, onPress: tmp10, accessibilityLabel: variant, loading: tmp8, variant, size: buttonSize, icon: AssetRegistryDefault2 };
    const IconButton = IconButton4.IconButton;
    cResult[12] = tmp8;
    cResult[13] = buttonSize;
    cResult[14] = showDisabled;
    cResult[15] = tmp10;
    cResult[16] = variant;
    cResult[17] = variant;
    cResult[18] = authStore(IconButton, obj3);
    const tmp14 = authStore(IconButton, obj3);
  }
}) : ((arg0) => {
  let c2;
  let obj;
  let showLabel;
  let str;
  let str2;
  let tmp5;
  let variant;
  ({ variant, showLabel } = arg0);
  if (showLabel === undefined) {
    showLabel = false;
  }
  c2 = undefined;
  const tmp3 = useDesignSystemSettingsStateDefault();
  const enableLoadingState = tmp3.enableLoadingState;
  const showDisabled = tmp3.showDisabled;
  const buttonSize = tmp3.buttonSize;
  let closure_1 = react.useRef(null);
  [tmp5, c2] = _slicedToArray(react.useState(false), 2);
  const items = [enableLoadingState];
  const tmp4 = _slicedToArray(react.useState(false), 2);
  let closure_3 = react.useCallback(() => {
    if (enableLoadingState) {
      if (null != ref.current) {
        const _clearTimeout = clearTimeout;
        clearTimeout(ref.current);
      }
      _undefined(true);
      const _setTimeout = setTimeout;
      ref.current = setTimeout(() => {
        _undefined(false);
      }, 5000);
    }
  }, items);
  const IconButton = IconButton4.IconButton;
  if (showLabel) {
    const obj2 = {
      disabled: showDisabled,
      onPress() {
          return closure_3();
        },
      label: str2,
      grow: true,
      loading: tmp5,
      variant,
      icon: AssetRegistryDefault2
    };
    str2 = variant;
    if (variant == null) {
      str2 = "";
    }
    obj = obj2;
  } else {
    obj = {
      disabled: showDisabled,
      onPress() {
          return closure_3();
        },
      accessibilityLabel: str,
      loading: tmp5,
      variant,
      size: buttonSize,
      icon: AssetRegistryDefault2
    };
    str = variant;
    if (variant == null) {
      str = "";
    }
  }
  return authStore(IconButton, obj);
});
ReactCompilerGating = ReactCompilerGating_mod;
let closure_20 = ReactCompilerGating.isReactCompilerEnabled() ? ((arg0) => {
  let buttonSize;
  let closure_129_2;
  let enableLoadingState;
  let image;
  let label;
  let showLabel;
  let tmp10;
  let tmp7;
  let tmp8;
  const obj = react2;
  const cResult = obj.c(19);
  ({ image, label, showLabel } = arg0);
  const tmp4 = undefined !== showLabel && showLabel;
  const tmp5 = useDesignSystemSettingsStateDefault();
  ({ buttonSize, enableLoadingState } = tmp5);
  const showDisabled = tmp5.showDisabled;
  let closure_1 = react.useRef(null);
  [tmp7, closure_129_2] = react.useState(false);
  _slicedToArray(react.useState(false), 2);
  if (cResult[0] !== enableLoadingState) {
    const fn = function l() {
      if (enableLoadingState) {
        if (null != ref.current) {
          const _clearTimeout = clearTimeout;
          clearTimeout(ref.current);
        }
        closure_1_2(true);
        const _setTimeout = setTimeout;
        ref.current = setTimeout(() => {
          closure_1_2(false);
        }, 5000);
      }
    };
    cResult[0] = enableLoadingState;
    cResult[1] = fn;
    tmp8 = fn;
  } else {
    tmp8 = cResult[1];
  }
  _slicedToArray = tmp8;
  if (tmp4) {
    if (cResult[2] !== tmp8) {
      class B {
        constructor() {
          return closure_3();
        }
      }
      cResult[2] = tmp8;
      cResult[3] = B;
    } else {
      class B {
        constructor() {
          return closure_3();
        }
      }
    }
    if (cResult[4] === tmp7) {
      class B {
        constructor() {
          return closure_3();
        }
      }
    }
    const obj2 = { disabled: showDisabled, onPress: B, label, grow: true, loading: tmp7, image };
    cResult[4] = tmp7;
    cResult[5] = image;
    cResult[6] = label;
    cResult[7] = showDisabled;
    cResult[8] = B;
    cResult[9] = authStore(ImageButton2.ImageButton, obj2);
    const tmp16 = authStore(ImageButton2.ImageButton, obj2);
  } else {
    class B {
      constructor() {
        return closure_3();
      }
    }
    if (cResult[12] === tmp7) {
      class B {
        constructor() {
          return closure_3();
        }
      }
    }
    const obj3 = { disabled: showDisabled, onPress: tmp9, accessibilityLabel: label, loading: tmp7, size: buttonSize, image };
    const tmp12 = authStore(ImageButton2.ImageButton, obj3);
    cResult[12] = tmp7;
    cResult[13] = buttonSize;
    cResult[14] = image;
    cResult[15] = label;
    cResult[16] = showDisabled;
    cResult[17] = tmp9;
    cResult[18] = tmp12;
    tmp10 = tmp12;
  }
  return tmp10;
}) : ((arg0) => {
  let c2;
  let image;
  let label;
  let obj;
  let showLabel;
  let tmp3;
  function onPress() {
    return closure_3();
  }
  ({ image, label, showLabel } = arg0);
  if (showLabel === undefined) {
    showLabel = false;
  }
  c2 = undefined;
  const tmp = useDesignSystemSettingsStateDefault();
  const enableLoadingState = tmp.enableLoadingState;
  const showDisabled = tmp.showDisabled;
  const buttonSize = tmp.buttonSize;
  let closure_1 = react.useRef(null);
  [tmp3, c2] = react.useState(false);
  const items = [enableLoadingState];
  _slicedToArray(react.useState(false), 2);
  let closure_3 = react.useCallback(() => {
    if (enableLoadingState) {
      if (null != ref.current) {
        const _clearTimeout = clearTimeout;
        clearTimeout(ref.current);
      }
      _undefined(true);
      const _setTimeout = setTimeout;
      ref.current = setTimeout(() => {
        _undefined(false);
      }, 5000);
    }
  }, items);
  const ImageButton = ImageButton2.ImageButton;
  if (showLabel) {
    obj = { disabled: showDisabled, onPress, label, grow: true, loading: tmp3, image };
    const obj2 = { disabled: showDisabled, onPress, label, grow: true, loading: tmp3, image };
  } else {
    obj = {
      disabled: showDisabled,
      onPress() {
          return closure_3();
        },
      accessibilityLabel: label,
      loading: tmp3,
      size: buttonSize,
      image
    };
  }
  return authStore(ImageButton, obj);
});
ReactCompilerGating = ReactCompilerGating_mod;
let closure_21 = ReactCompilerGating.isReactCompilerEnabled() ? (() => {
  let closure_1;
  let first;
  let tmp6;
  const obj = react2;
  const cResult = obj.c(5);
  [first, closure_1] = react.useState(false);
  if (cResult[0] !== first) {
    const fn = function o() {
      return closure_1(!first);
    };
    cResult[0] = first;
    cResult[1] = fn;
    tmp6 = fn;
  } else {
    tmp6 = cResult[1];
  }
  if (cResult[2] === first) {
    let tmp7;
    if (cResult[3] === tmp6) {
      tmp7 = cResult[4];
    }
    return tmp7;
  }
  const obj2 = { text: "Notifications", icon: AssetRegistryDefault3, pressed: first, onPress: tmp6, size: "md" };
  const ToggleButton = ToggleButton2.ToggleButton;
  const tmp8 = authStore(ToggleButton, obj2);
  cResult[2] = first;
  cResult[3] = tmp6;
  cResult[4] = tmp8;
  tmp7 = tmp8;
}) : (() => {
  let closure_1;
  let first;
  [first, closure_1] = react.useState(false);
  const obj = {
    text: "Notifications",
    icon: AssetRegistryDefault3,
    pressed: first,
    onPress() {
      return closure_1(!first);
    },
    size: "md"
  };
  const ToggleButton = ToggleButton2.ToggleButton;
  return authStore(ToggleButton, obj);
});
ReactCompilerGating = ReactCompilerGating_mod;
let closure_22 = ReactCompilerGating.isReactCompilerEnabled() ? ((variant) => {
  let closure_1;
  let first;
  let tmp7;
  const obj = react2;
  const cResult = obj.c(7);
  variant = variant.variant;
  [first, closure_1] = react.useState(false);
  const combined = "" + variant + " notifications";
  if (cResult[0] !== first) {
    const fn = function l() {
      return closure_1(!first);
    };
    cResult[0] = first;
    cResult[1] = fn;
    tmp7 = fn;
  } else {
    tmp7 = cResult[1];
  }
  if (cResult[2] === first) {
    if (cResult[3] === combined) {
      if (cResult[4] === tmp7) {
        let tmp8;
        if (cResult[5] === variant) {
          tmp8 = cResult[6];
        }
        return tmp8;
      }
    }
  }
  const obj2 = { accessibilityLabel: combined, icon: AssetRegistryDefault3, selectedIcon: AssetRegistryDefault10, pressed: first, onPress: tmp7, variant, size: "md" };
  const ToggleIconButton = ToggleIconButton2.ToggleIconButton;
  const tmp9 = authStore(ToggleIconButton, obj2);
  cResult[2] = first;
  cResult[3] = combined;
  cResult[4] = tmp7;
  cResult[5] = variant;
  cResult[6] = tmp9;
  tmp8 = tmp9;
}) : ((variant) => {
  let closure_1;
  let first;
  variant = variant.variant;
  first = undefined;
  closure_1 = undefined;
  [first, closure_1] = react.useState(false);
  const obj = {
    accessibilityLabel: "" + variant + " notifications",
    icon: AssetRegistryDefault3,
    selectedIcon: AssetRegistryDefault10,
    pressed: first,
    onPress() {
      return closure_1(!first);
    },
    variant,
    size: "md"
  };
  const ToggleIconButton = ToggleIconButton2.ToggleIconButton;
  return authStore(ToggleIconButton, obj);
});
ReactCompilerGating = ReactCompilerGating_mod;
let closure_23 = ReactCompilerGating.isReactCompilerEnabled() ? (() => {
  let closure_1;
  let first;
  let first1;
  let obj3;
  let obj4;
  let tmp9;
  const obj = react2;
  const cResult = obj.c(6);
  [first, closure_1] = react.useState(false);
  if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
    const obj2 = { on: obj3, off: obj4 };
    obj3 = { variant: "destructive", accessibilityLabel: "Mute", icon: AssetRegistryDefault };
    cResult[0] = obj2;
    first1 = obj2;
    obj4 = { variant: "secondary", accessibilityLabel: "Mute", icon: AssetRegistryDefault };
  } else {
    first1 = cResult[0];
  }
  const tmpResult = useToggleButtonProps;
  const toggleIconButtonProps = tmpResult.useToggleIconButtonProps(first1, first);
  if (cResult[1] !== first) {
    const fn = function b() {
      closure_1(!first);
    };
    cResult[1] = first;
    cResult[2] = fn;
    tmp9 = fn;
  } else {
    tmp9 = cResult[2];
  }
  if (cResult[3] === tmp9) {
    let tmp10;
    if (cResult[4] === toggleIconButtonProps) {
      tmp10 = cResult[5];
    }
    return tmp10;
  }
  const obj5 = { onPress: tmp9, size: "md" };
  const IconButton = IconButton4.IconButton;
  const merged = Object.assign(toggleIconButtonProps);
  const tmp12 = authStore(IconButton, obj5);
  cResult[3] = tmp9;
  cResult[4] = toggleIconButtonProps;
  cResult[5] = tmp12;
  tmp10 = tmp12;
}) : (() => {
  let closure_1;
  let first;
  [first, closure_1] = react.useState(false);
  const obj = { on: { variant: "destructive", accessibilityLabel: "Mute", icon: AssetRegistryDefault }, off: { variant: "secondary", accessibilityLabel: "Mute", icon: AssetRegistryDefault } };
  const useToggleIconButtonProps = useToggleButtonProps.useToggleIconButtonProps;
  ({ variant: "destructive", accessibilityLabel: "Mute", icon: AssetRegistryDefault });
  ({ variant: "secondary", accessibilityLabel: "Mute", icon: AssetRegistryDefault });
  const toggleIconButtonProps = useToggleIconButtonProps(obj, first);
  const obj4 = {
    onPress() {
      closure_1(!first);
    },
    size: "md"
  };
  const IconButton = IconButton4.IconButton;
  const merged = Object.assign(toggleIconButtonProps);
  return authStore(IconButton, obj4);
});
let createStyles = createStyles_mod;
let obj = { container: obj2, buttonContainer: obj3, toggleIconButtonRow: obj4, overlayButtonContainer: obj5 };
obj2 = { paddingHorizontal: nativeDefault.space.PX_16 };
createStyles = createStyles.createStyles;
obj3 = { paddingHorizontal: nativeDefault.space.PX_16, paddingVertical: nativeDefault.space.PX_8 };
obj4 = { flexDirection: "row", gap: nativeDefault.space.PX_16 };
obj5 = { backgroundColor: nativeDefault.unsafe_rawColors.BG_GRADIENT_CHROMA_GLOW_1, paddingVertical: nativeDefault.space.PX_48 };
let closure_24 = createStyles(obj);
const result = size.fileFinishedImporting("modules/user_settings/design_system/native/UserSettingsDesignSystemButton.tsx");

export default function UserSettingsDesignSystemButton() {
  let Button;
  let Button2;
  let Button3;
  let Button4;
  let Card;
  let Card2;
  let Icon;
  let Icon2;
  let Stack;
  let Stack28;
  let Stack29;
  let Stack32;
  let Stack33;
  let Stack38;
  let Stack41;
  let Stack44;
  let Stack47;
  let closure_0;
  let items;
  let items1;
  let items10;
  let items11;
  let items12;
  let items13;
  let items14;
  let items15;
  let items16;
  let items17;
  let items18;
  let items19;
  let items2;
  let items20;
  let items21;
  let items22;
  let items23;
  let items24;
  let items25;
  let items26;
  let items27;
  let items28;
  let items29;
  let items3;
  let items30;
  let items31;
  let items32;
  let items33;
  let items34;
  let items35;
  let items36;
  let items37;
  let items38;
  let items39;
  let items4;
  let items40;
  let items41;
  let items42;
  let items43;
  let items44;
  let items45;
  let items46;
  let items47;
  let items48;
  let items49;
  let items5;
  let items50;
  let items51;
  let items6;
  let items7;
  let items8;
  let items9;
  let obj100;
  let obj101;
  let obj102;
  let obj103;
  let obj104;
  let obj108;
  let obj109;
  let obj112;
  let obj113;
  let obj114;
  let obj118;
  let obj119;
  let obj122;
  let obj123;
  let obj124;
  let obj25;
  let obj26;
  let obj28;
  let obj29;
  let obj34;
  let obj36;
  let obj38;
  let obj40;
  let obj5;
  let obj60;
  let obj62;
  let obj64;
  let obj68;
  let obj70;
  let obj77;
  let obj82;
  let obj92;
  let obj93;
  let obj94;
  let obj95;
  let obj96;
  let onPress;
  let paths;
  let tmp3;
  let tmp4;
  const tmp = closure_24();
  _require = tmp;
  let obj = require("useNavigation");
  navigation = obj.useNavigation();
  importDefault = react.useCallback(() => {
    const obj = onPress(paths[23]);
    obj.openLazy(closure_0(paths[25])(paths[24], paths.paths), "UserSettingsDesignSystemButtonActionSheet");
  }, []);
  let obj2 = {
    headerRight() {
      const obj = { onPress, icon: AssetRegistryDefault2, size: "sm", variant: "secondary", accessibilityLabel: "Settings" };
      const IconButton = IconButton4.IconButton;
      return authStore(IconButton, obj);
    }
  };
  navigation.setOptions(obj2);
  const obj3 = { children: items51 };
  const obj4 = { children: closure_11(Stack, obj5) };
  obj5 = { spacing: 24, children: items1 };
  Stack = require("Stack/Stack").Stack;
  const obj6 = { children: items };
  const Stack2 = require("Stack/Stack").Stack;
  const obj7 = { style: tmp.container, children: closure_10(require("Text/Text").Text, { variant: "heading-lg/bold", children: "Hierarchical buttons" }) };
  const Stack3 = require("Stack/Stack").Stack;
  items = [closure_10(Stack3, obj7), ];
  const obj8 = {
    children: closure_13.map((variant) => {
      let obj2;
      const obj = { style: closure_0.buttonContainer, children: authStore(closure_18, obj2) };
      obj2 = { variant };
      return authStore(hasOwnProperty, obj, variant);
    })
  };
  items[1] = closure_10(closure_5, obj8);
  items1 = [closure_11(Stack2, obj6), , , , , , , , , , , , , , , , , , , ];
  const obj9 = { children: items2 };
  const Stack4 = require("Stack/Stack").Stack;
  const obj10 = { style: tmp.container, children: closure_10(require("Text/Text").Text, { variant: "heading-lg/bold", children: "Sentiment buttons" }) };
  const Stack5 = require("Stack/Stack").Stack;
  items2 = [closure_10(Stack5, obj10), ];
  const obj11 = {
    children: closure_15.map((variant) => {
      let obj2;
      const obj = { style: closure_0.buttonContainer, children: authStore(closure_18, obj2) };
      obj2 = { variant };
      return authStore(hasOwnProperty, obj, variant);
    })
  };
  items2[1] = closure_10(closure_5, obj11);
  items1[1] = closure_11(Stack4, obj9);
  const obj12 = { children: items3 };
  const Stack6 = require("Stack/Stack").Stack;
  const obj13 = { style: tmp.container, children: closure_10(require("Text/Text").Text, { variant: "heading-lg/bold", children: "Expressive buttons" }) };
  const Stack7 = require("Stack/Stack").Stack;
  items3 = [closure_10(Stack7, obj13), ];
  const obj14 = {
    children: closure_16.map((variant) => {
      let obj2;
      const obj = { style: closure_0.buttonContainer, children: authStore(closure_18, obj2) };
      obj2 = { variant };
      return authStore(hasOwnProperty, obj, variant);
    })
  };
  items3[1] = closure_10(closure_5, obj14);
  items1[2] = closure_11(Stack6, obj12);
  const obj15 = { children: items4 };
  const Stack8 = require("Stack/Stack").Stack;
  const obj16 = { style: tmp.container, children: closure_10(require("Text/Text").Text, { variant: "heading-lg/bold", children: "Experimental premium buttons" }) };
  const Stack9 = require("Stack/Stack").Stack;
  items4 = [closure_10(Stack9, obj16), ];
  const obj17 = {
    children: closure_17.map((variant) => {
      let obj2;
      const obj = { style: closure_0.buttonContainer, children: authStore(closure_18, obj2) };
      obj2 = { variant };
      return authStore(hasOwnProperty, obj, variant);
    })
  };
  items4[1] = closure_10(closure_5, obj17);
  items1[3] = closure_11(Stack8, obj15);
  const obj18 = { children: items6 };
  const Stack10 = require("Stack/Stack").Stack;
  const obj19 = { style: tmp.container, children: items5 };
  const Stack11 = require("Stack/Stack").Stack;
  items5 = [closure_10(require("Text/Text").Text, { variant: "heading-lg/bold", children: "Overlay buttons" }), closure_10(require("Text/Text").Text, { variant: "text-sm/normal", children: "Overlay buttons are meant to be used overlayed on top of an image or background color. They do not change colors with the theme." })];
  items6 = [closure_11(Stack11, obj19), ];
  const obj20 = {
    children: closure_14.map((variant) => {
      let items;
      let obj2;
      const obj = { style: items, children: authStore(closure_18, obj2) };
      items = [, ];
      ({ buttonContainer: arr[0], overlayButtonContainer: arr[1] } = closure_0);
      obj2 = { variant };
      return authStore(hasOwnProperty, obj, variant);
    })
  };
  items6[1] = closure_10(closure_5, obj20);
  items1[4] = closure_11(Stack10, obj18);
  const obj21 = { children: items8 };
  const Stack12 = require("Stack/Stack").Stack;
  const obj22 = { style: tmp.container, children: items7 };
  const Stack13 = require("Stack/Stack").Stack;
  items7 = [closure_10(require("Text/Text").Text, { variant: "heading-lg/bold", children: "Custom color icons" }), closure_10(require("Text/Text").Text, { variant: "text-sm/normal", children: "If a button needs to have an icon which has its own custom color, then create your own Button.Icon to pass as the icon prop." })];
  items8 = [closure_11(Stack13, obj22), ];
  const obj23 = { children: items9 };
  const obj24 = { style: tmp.buttonContainer, children: closure_10(Button, obj25) };
  obj25 = {
    onPress() {

    },
    variant: "secondary",
    text: "Button with a custom color icon",
    size: "md",
    icon: closure_10(Icon, obj26)
  };
  Button = require("components/Button/Button").Button;
  obj26 = { source: AssetRegistryDefault11 };
  Icon = require("components/Button/Button").Button.Icon;
  items9 = [closure_10(closure_5, obj24), ];
  const obj27 = { style: tmp.buttonContainer, children: closure_10(Button2, obj28) };
  obj28 = {
    onPress() {

    },
    variant: "secondary",
    text: "Button with a entity variant icon",
    size: "md",
    icon: closure_10(Icon2, obj29)
  };
  Button2 = require("components/Button/Button").Button;
  obj29 = { variant: "entity", source: AssetRegistryDefault4 };
  Icon2 = require("components/Button/Button").Button.Icon;
  items9[1] = closure_10(closure_5, obj27);
  items8[1] = closure_11(closure_5, obj23);
  items1[5] = closure_11(Stack12, obj21);
  const obj30 = { children: items10 };
  const Stack14 = require("Stack/Stack").Stack;
  const obj31 = { style: tmp.container, children: closure_10(require("Text/Text").Text, { variant: "heading-lg/bold", children: "Buttons with various text lengths" }) };
  const Stack15 = require("Stack/Stack").Stack;
  items10 = [closure_10(Stack15, obj31), ];
  const obj32 = { children: items11 };
  const obj33 = { style: tmp.buttonContainer, children: closure_10(Button3, obj34) };
  obj34 = {
    onPress() {

    },
    variant: "secondary",
    text: "Neque porro quisquam est qui dolorem ipsum quia dolor sit amet, consectetur",
    size: "md",
    icon: AssetRegistryDefault11
  };
  Button3 = require("components/Button/Button").Button;
  items11 = [closure_10(closure_5, obj33), , , ];
  const obj35 = { style: tmp.buttonContainer, children: closure_10(Button4, obj36) };
  obj36 = {
    onPress() {

    },
    variant: "secondary",
    text: "Neque porro quisquam est qui dolorem ipsum quia dolor sit amet, consectetur",
    size: "md",
    icon: AssetRegistryDefault11,
    iconPosition: "end"
  };
  Button4 = require("components/Button/Button").Button;
  items11[1] = closure_10(closure_5, obj35);
  const obj37 = { style: tmp.buttonContainer, children: closure_10(require("components/Button/Button").Button, obj38) };
  obj38 = {
    onPress() {

    },
    variant: "secondary",
    text: "Neque porro quisquam est qui dolorem ipsum quia dolor sit amet, consectetur",
    size: "md"
  };
  items11[2] = closure_10(closure_5, obj37);
  const obj39 = { style: tmp.buttonContainer, children: closure_10(require("components/Button/Button").Button, obj40) };
  obj40 = {
    onPress() {

    },
    variant: "secondary",
    text: "A",
    size: "md"
  };
  items11[3] = closure_10(closure_5, obj39);
  items10[1] = closure_11(closure_5, obj32);
  items1[6] = closure_11(Stack14, obj30);
  const obj41 = { children: items13 };
  const Stack16 = require("Stack/Stack").Stack;
  const obj42 = { style: tmp.container, children: items12 };
  const Stack17 = require("Stack/Stack").Stack;
  items12 = [closure_10(require("Text/Text").Text, { variant: "heading-lg/bold", children: "Toggling button states" }), closure_10(require("Text/Text").Text, { variant: "text-sm/normal", children: "Use ToggleButton for a controlled labeled toggle and ToggleIconButton for a controlled icon-only toggle. Use the lower-level toggle prop hooks when a custom control needs complete prop bags per state." }), closure_10(require("Text/Text").Text, { variant: "text-sm/normal", children: "These APIs apply the selected presentation and add the accessibility attributes required for a toggle button." })];
  items13 = [closure_11(Stack17, obj42), ];
  const obj43 = { children: items14 };
  items14 = [, , ];
  const obj44 = { style: tmp.buttonContainer, children: closure_10(closure_21, {}) };
  items14[0] = closure_10(closure_5, obj44);
  const obj45 = { style: items15, children: items16 };
  items15 = [, ];
  ({ buttonContainer: arr16[0], toggleIconButtonRow: arr16[1] } = tmp);
  items16 = [closure_10(closure_22, { variant: "default" }), closure_10(closure_22, { variant: "critical" }), closure_10(closure_22, { variant: "icon-only" })];
  items14[1] = closure_11(closure_5, obj45);
  const obj46 = { style: tmp.buttonContainer, children: closure_10(closure_23, {}) };
  items14[2] = closure_10(closure_5, obj46);
  items13[1] = closure_11(closure_5, obj43);
  items1[7] = closure_11(Stack16, obj41);
  const obj47 = { children: items18 };
  const Stack18 = require("Stack/Stack").Stack;
  const obj48 = { style: tmp.container, children: items17 };
  const Stack19 = require("Stack/Stack").Stack;
  items17 = [closure_10(require("Text/Text").Text, { variant: "heading-lg/bold", children: "Hierarchical icon buttons" }), closure_10(require("Text/Text").Text, { variant: "text-sm/normal", children: "While the primary variants of IconButton are supported, these should be used very rarely." }), closure_10(require("Text/Text").Text, { variant: "text-sm/normal", children: "An icon button usually has a secondary function and should use the secondary variants." })];
  items18 = [closure_11(Stack19, obj48), ];
  const obj49 = {
    children: closure_13.map((variant) => {
      let obj2;
      const obj = { style: closure_0.buttonContainer, children: authStore(closure_19, obj2) };
      obj2 = { variant };
      return authStore(hasOwnProperty, obj, variant);
    })
  };
  items18[1] = closure_10(closure_5, obj49);
  items1[8] = closure_11(Stack18, obj47);
  const obj50 = { children: items19 };
  const Stack20 = require("Stack/Stack").Stack;
  const obj51 = { style: tmp.container, children: closure_10(require("Text/Text").Text, { variant: "heading-lg/bold", children: "Sentiment icon buttons" }) };
  const Stack21 = require("Stack/Stack").Stack;
  items19 = [closure_10(Stack21, obj51), ];
  const obj52 = {
    children: closure_15.map((variant) => {
      let obj2;
      const obj = { style: closure_0.buttonContainer, children: authStore(closure_19, obj2) };
      obj2 = { variant };
      return authStore(hasOwnProperty, obj, variant);
    })
  };
  items19[1] = closure_10(closure_5, obj52);
  items1[9] = closure_11(Stack20, obj50);
  const obj53 = { children: items20 };
  const Stack22 = require("Stack/Stack").Stack;
  const obj54 = { style: tmp.container, children: closure_10(require("Text/Text").Text, { variant: "heading-lg/bold", children: "Overlay icon buttons" }) };
  const Stack23 = require("Stack/Stack").Stack;
  items20 = [closure_10(Stack23, obj54), ];
  const obj55 = {
    children: closure_14.map((variant) => {
      let items;
      let obj2;
      const obj = { style: items, children: authStore(closure_19, obj2) };
      items = [, ];
      ({ buttonContainer: arr[0], overlayButtonContainer: arr[1] } = closure_0);
      obj2 = { variant };
      return authStore(hasOwnProperty, obj, variant);
    })
  };
  items20[1] = closure_10(closure_5, obj55);
  items1[10] = closure_11(Stack22, obj53);
  const obj56 = { children: items22 };
  const Stack24 = require("Stack/Stack").Stack;
  const obj57 = { style: tmp.container, children: items21 };
  const Stack25 = require("Stack/Stack").Stack;
  items21 = [closure_10(require("Text/Text").Text, { variant: "heading-lg/bold", children: "Image buttons" }), closure_10(require("Text/Text").Text, { variant: "text-sm/normal", children: "Image buttons are rereserved for more branded buttons, like social media sharing buttons." })];
  items22 = [closure_11(Stack25, obj57), ];
  const obj58 = { children: items24 };
  const obj59 = { style: items23, children: closure_10(closure_20, obj60) };
  items23 = [tmp.buttonContainer];
  obj60 = { image: AssetRegistryDefault7, label: "Telegram" };
  items24 = [closure_10(closure_5, obj59), , ];
  const obj61 = { style: items25, children: closure_10(closure_20, obj62) };
  items25 = [tmp.buttonContainer];
  obj62 = { image: AssetRegistryDefault9, label: "WhatsApp" };
  items24[1] = closure_10(closure_5, obj61);
  const obj63 = { style: items26, children: closure_10(closure_20, obj64) };
  items26 = [tmp.buttonContainer];
  obj64 = { image: AssetRegistryDefault8, label: "Twitter" };
  items24[2] = closure_10(closure_5, obj63);
  items22[1] = closure_11(closure_5, obj58);
  items1[11] = closure_11(Stack24, obj56);
  const obj65 = { spacing: 24, children: items28 };
  const Stack26 = require("Stack/Stack").Stack;
  const obj66 = { style: tmp.container, children: items27 };
  const Stack27 = require("Stack/Stack").Stack;
  items27 = [closure_10(require("Text/Text").Text, { variant: "heading-lg/bold", children: "IconButton with a label" }), closure_10(require("Text/Text").Text, { variant: "text-sm/normal", children: "Icon buttons with a label require a different combination of props and will only appear in the 'lg' size." }), closure_10(require("Text/Text").Text, { variant: "text-sm/normal", children: "It is highly recommended that a list of these buttons appear wrapped in a ScrollView, so that they will horizontally scroll when there are many buttons, when the text is longer through internationalization, or the text is larger through OS font size settings." })];
  items28 = [closure_11(Stack27, obj66), , ];
  const obj67 = { horizontal: true, contentContainerStyle: { minWidth: "100%" }, children: closure_10(Stack28, obj68) };
  obj68 = {
    direction: "horizontal",
    justify: "center",
    style: tmp.buttonContainer,
    children: closure_13.map((variant) => {
      const obj = { variant, showLabel: true };
      return closure_1_10(closure_1_19, obj, variant);
    })
  };
  Stack28 = require("Stack/Stack").Stack;
  items28[1] = closure_10(closure_6, obj67);
  const obj69 = { horizontal: true, contentContainerStyle: { minWidth: "100%" }, children: closure_11(Stack29, obj70) };
  obj70 = { direction: "horizontal", justify: "center", style: tmp.buttonContainer, children: items29 };
  Stack29 = require("Stack/Stack").Stack;
  const obj71 = {
    variant: "secondary",
    icon: AssetRegistryDefault2,
    label: "Supercalifragilisticexpialidocious",
    grow: true,
    onPress() {

    }
  };
  let IconButton = require("IconButton").IconButton;
  items29 = [closure_10(IconButton, obj71), , ];
  const obj72 = {
    variant: "secondary",
    icon: AssetRegistryDefault2,
    label: "Supercalifragilisticexpialidocious",
    grow: true,
    onPress() {

    }
  };
  const IconButton2 = require("IconButton").IconButton;
  items29[1] = closure_10(IconButton2, obj72);
  const obj73 = {
    variant: "secondary",
    icon: AssetRegistryDefault2,
    label: "Supercalifragilisticexpialidocious",
    grow: true,
    onPress() {

    }
  };
  const IconButton3 = require("IconButton").IconButton;
  items29[2] = closure_10(IconButton3, obj73);
  items28[2] = closure_10(closure_6, obj69);
  items1[12] = closure_11(Stack26, obj65);
  const obj74 = { spacing: 24, children: items30 };
  const Stack30 = require("Stack/Stack").Stack;
  const obj75 = { style: tmp.container, children: closure_10(require("Text/Text").Text, { variant: "heading-lg/bold", children: "ImageButton with a label" }) };
  const Stack31 = require("Stack/Stack").Stack;
  items30 = [closure_10(Stack31, obj75), , ];
  const obj76 = { horizontal: true, contentContainerStyle: { minWidth: "100%" }, children: closure_11(Stack32, obj77) };
  obj77 = { direction: "horizontal", justify: "center", style: tmp.buttonContainer, children: items31 };
  const obj78 = { image: AssetRegistryDefault6, label: "Label", showLabel: true };
  Stack32 = require("Stack/Stack").Stack;
  items31 = [closure_10(closure_20, obj78), , ];
  const obj79 = { image: AssetRegistryDefault4, label: "Label", showLabel: true };
  items31[1] = closure_10(closure_20, obj79);
  const obj80 = { image: AssetRegistryDefault5, label: "Label", showLabel: true };
  items31[2] = closure_10(closure_20, obj80);
  items30[1] = closure_10(closure_6, obj76);
  const obj81 = { horizontal: true, contentContainerStyle: { minWidth: "100%" }, children: closure_11(Stack33, obj82) };
  obj82 = { direction: "horizontal", justify: "center", style: tmp.buttonContainer, children: items32 };
  const obj83 = { image: AssetRegistryDefault7, label: "Supercalifragilisticexpialidocious", showLabel: true };
  Stack33 = require("Stack/Stack").Stack;
  items32 = [closure_10(closure_20, obj83), , ];
  const obj84 = { image: AssetRegistryDefault9, label: "Supercalifragilisticexpialidocious", showLabel: true };
  items32[1] = closure_10(closure_20, obj84);
  const obj85 = { image: AssetRegistryDefault8, label: "Supercalifragilisticexpialidocious", showLabel: true };
  items32[2] = closure_10(closure_20, obj85);
  items30[2] = closure_10(closure_6, obj81);
  items1[13] = closure_11(Stack30, obj74);
  const obj86 = { spacing: 24, children: items33 };
  const Stack34 = require("Stack/Stack").Stack;
  const obj87 = { style: tmp.container, children: closure_10(require("Text/Text").Text, { variant: "heading-lg/bold", children: "Mixing buttons" }) };
  const Stack35 = require("Stack/Stack").Stack;
  items33 = [closure_10(Stack35, obj87), ];
  const obj88 = { direction: "horizontal", style: tmp.container, children: items34 };
  const ButtonGroup = require("ButtonGroup").ButtonGroup;
  items34 = [closure_10(closure_18, { variant: "secondary", text: "Search", grow: true }), closure_10(closure_19, { variant: "secondary" })];
  items33[1] = closure_11(ButtonGroup, obj88);
  items1[14] = closure_11(Stack34, obj86);
  const obj89 = { children: items36 };
  const Stack36 = require("Stack/Stack").Stack;
  const obj90 = { style: tmp.container, children: items35 };
  const Stack37 = require("Stack/Stack").Stack;
  items35 = [closure_10(require("Text/Text").Text, { variant: "heading-lg/bold", children: "Light Profile Themes" }), closure_10(require("Text/Text").Text, { variant: "text-sm/normal", children: "All buttons as they appear on a light profile theme" })];
  items36 = [closure_11(Stack37, obj90), ];
  const obj91 = { theme: ThemeTypes.LIGHT, primaryColor: obj93.hex2int("#ffae70"), secondaryColor: obj94.hex2int("#cc2300"), children: closure_10(tmp3, obj92) };
  const ThemeContextProvider = require("native").ThemeContextProvider;
  obj93 = require("utils/ColorUtils");
  obj94 = require("utils/ColorUtils");
  obj92 = { style: { padding: 16 }, start: { x: 0, y: 0 }, end: { x: 0, y: 1 }, colors: ["#ffae70", "#cc2300"], children: closure_10(Card, obj95) };
  obj95 = { children: closure_11(Stack38, obj96) };
  tmp3 = LinearGradientDefault;
  Card = require("Card/Card").Card;
  obj96 = { spacing: 16, children: items37 };
  Stack38 = require("Stack/Stack").Stack;
  items37 = [
    closure_13.map((variant) => {
      const obj = { variant };
      return closure_1_10(closure_1_18, obj, variant);
    }),
    closure_15.map((variant) => {
      const obj = { variant };
      return closure_1_10(closure_1_18, obj, variant);
    })
  ];
  items36[1] = closure_10(ThemeContextProvider, obj91);
  items1[15] = closure_11(Stack36, obj89);
  const obj97 = { children: items39 };
  const Stack39 = require("Stack/Stack").Stack;
  const obj98 = { style: tmp.container, children: items38 };
  const Stack40 = require("Stack/Stack").Stack;
  items38 = [closure_10(require("Text/Text").Text, { variant: "heading-lg/bold", children: "Dark Profile Themes" }), closure_10(require("Text/Text").Text, { variant: "text-sm/normal", children: "All buttons as they appear on a dark profile theme" })];
  items39 = [closure_11(Stack40, obj98), ];
  const obj99 = { theme: ThemeTypes.DARK, primaryColor: obj101.hex2int("#490000"), secondaryColor: obj102.hex2int("#cc2300"), children: closure_10(tmp4, obj100) };
  const ThemeContextProvider2 = require("native").ThemeContextProvider;
  obj101 = require("utils/ColorUtils");
  obj102 = require("utils/ColorUtils");
  obj100 = { style: { padding: 16 }, start: { x: 0, y: 0 }, end: { x: 0, y: 1 }, colors: ["#490000", "#cc2300"], children: closure_10(Card2, obj103) };
  obj103 = { children: closure_11(Stack41, obj104) };
  tmp4 = LinearGradientDefault;
  Card2 = require("Card/Card").Card;
  obj104 = { spacing: 16, children: items40 };
  Stack41 = require("Stack/Stack").Stack;
  items40 = [
    closure_13.map((variant) => {
      const obj = { variant };
      return closure_1_10(closure_1_18, obj, variant);
    }),
    closure_15.map((variant) => {
      const obj = { variant };
      return closure_1_10(closure_1_18, obj, variant);
    })
  ];
  items39[1] = closure_10(ThemeContextProvider2, obj99);
  items1[16] = closure_11(Stack39, obj97);
  const obj105 = { children: items42 };
  const Stack42 = require("Stack/Stack").Stack;
  const obj106 = { style: tmp.container, children: items41 };
  const Stack43 = require("Stack/Stack").Stack;
  items41 = [closure_10(require("Text/Text").Text, { variant: "heading-lg/bold", children: "Light Client Theme" }), closure_10(require("Text/Text").Text, { variant: "text-sm/normal", children: "All buttons as they appear on a light client theme" })];
  items42 = [closure_11(Stack43, obj106), ];
  const obj107 = { theme: closure_8[0].theme, gradient: closure_8[0], flags: obj109.setThemeFlag(0, require("native").ThemeContextFlags.MOBILE_LIGHT_GRADIENT_THEME_ENABLED), children: closure_11(closure_5, obj108) };
  const ThemeContextProvider3 = require("native").ThemeContextProvider;
  obj108 = { style: { position: "relative", padding: 16 }, children: items43 };
  items43 = [, ];
  obj109 = require("native");
  const obj110 = { absolute: true, gradient: closure_8[0] };
  items43[0] = closure_10(require("ThemedGradient").Gradient, obj110);
  const obj111 = { style: obj112, children: closure_11(Stack44, obj113) };
  obj112 = { backgroundColor: obj114.setColorOpacity("white", 0.7), padding: 16, borderRadius: 16 };
  obj113 = { spacing: 16, children: items44 };
  obj114 = require("native");
  Stack44 = require("Stack/Stack").Stack;
  items44 = [
    closure_13.map((variant) => {
      const obj = { variant };
      return closure_1_10(closure_1_18, obj, variant);
    }),
    closure_15.map((variant) => {
      const obj = { variant };
      return closure_1_10(closure_1_18, obj, variant);
    })
  ];
  items43[1] = closure_10(closure_5, obj111);
  items42[1] = closure_10(ThemeContextProvider3, obj107);
  items1[17] = closure_11(Stack42, obj105);
  const obj115 = { children: items46 };
  const Stack45 = require("Stack/Stack").Stack;
  const obj116 = { style: tmp.container, children: items45 };
  const Stack46 = require("Stack/Stack").Stack;
  items45 = [closure_10(require("Text/Text").Text, { variant: "heading-lg/bold", children: "Dark Client Theme" }), closure_10(require("Text/Text").Text, { variant: "text-sm/normal", children: "All buttons as they appear on a dark client theme" })];
  items46 = [closure_11(Stack46, obj116), ];
  const obj117 = { theme: closure_9[0].theme, gradient: closure_9[0], flags: obj119.setThemeFlag(0, require("native").ThemeContextFlags.MOBILE_DARK_GRADIENT_THEME_ENABLED), children: closure_11(closure_5, obj118) };
  const ThemeContextProvider4 = require("native").ThemeContextProvider;
  obj118 = { style: { position: "relative", padding: 16 }, children: items47 };
  items47 = [, ];
  obj119 = require("native");
  const obj120 = { absolute: true, gradient: closure_9[0] };
  items47[0] = closure_10(require("ThemedGradient").Gradient, obj120);
  const obj121 = { style: obj122, children: closure_11(Stack47, obj123) };
  obj122 = { backgroundColor: obj124.setColorOpacity("black", 0.7), padding: 16, borderRadius: 16 };
  obj123 = { spacing: 16, children: items48 };
  obj124 = require("native");
  Stack47 = require("Stack/Stack").Stack;
  items48 = [
    closure_13.map((variant) => {
      const obj = { variant };
      return closure_1_10(closure_1_18, obj, variant);
    }),
    closure_15.map((variant) => {
      const obj = { variant };
      return closure_1_10(closure_1_18, obj, variant);
    })
  ];
  items47[1] = closure_10(closure_5, obj121);
  items46[1] = closure_10(ThemeContextProvider4, obj117);
  items1[18] = closure_11(Stack45, obj115);
  const obj125 = { children: items50 };
  const Stack48 = require("Stack/Stack").Stack;
  const obj126 = { style: tmp.container, children: items49 };
  const Stack49 = require("Stack/Stack").Stack;
  items49 = [closure_10(require("Text/Text").Text, { variant: "heading-lg/bold", children: "Floating Action Button" }), closure_10(require("Text/Text").Text, { variant: "text-sm/normal", children: "An ever-present icon button, giving the most important call to action in a compact way." })];
  items50 = [closure_11(Stack49, obj126), closure_10(closure_5, { style: { padding: 48 } })];
  items1[19] = closure_11(Stack48, obj125);
  items51 = [closure_10(closure_6, obj4), ];
  const obj127 = {
    icon: AssetRegistryDefault2,
    onPress() {

    },
    positionBottom: 32,
    accessibilityLabel: "Floating Action Button"
  };
  const FloatingActionButton = require("FloatingActionButton").FloatingActionButton;
  items51[1] = closure_10(FloatingActionButton, obj127);
  return closure_11(closure_12, obj3);
};