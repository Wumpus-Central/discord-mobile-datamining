// discord_app/modules/user_settings/design_system/native/UserSettingsDesignSystemButton.tsx
import c from "../../../../../_runtime/00576_c.js";
import nativeDefault from "../../../../../discord_common/js/packages/tokens/native.tsx";
import _modDef4821 from "../../../../../_runtime/metro/04821__.js";
import components_Button_Button from "../../../../design/components/Button/native/Button.native.tsx";
import LinearGradientDefault from "../../../../../_runtime/05605_LinearGradient.js";
import _modDef6884 from "../../../../../_runtime/metro/06884__.js";
import IconButton from "../../../../design/components/Button/native/IconButton.native.tsx";
import _modDef7608 from "../../../../../_runtime/metro/07608__.js";
import _modDef9541 from "../../../../../_runtime/metro/09541__.js";
import _modDef9544 from "../../../../../_runtime/metro/09544__.js";
import _modDef9545 from "../../../../../_runtime/metro/09545__.js";
import _modDef9546 from "../../../../../_runtime/metro/09546__.js";
import _modDef9547 from "../../../../../_runtime/metro/09547__.js";
import _modDef9548 from "../../../../../_runtime/metro/09548__.js";
import _modDef9814 from "../../../../../_runtime/metro/09814__.js";
import _modDef10383 from "../../../../../_runtime/metro/10383__.js";
import ToggleButton from "../../../../design/components/Button/native/ToggleButton.native.tsx";
import useToggleButtonProps from "../../../../design/components/Button/native/useToggleButtonProps.native.tsx";
import ToggleIconButton from "../../../../design/components/Button/native/ToggleIconButton.native.tsx";
import useDesignSystemSettingsStateDefault from "useDesignSystemSettingsState.tsx";
import _modDef15636 from "../../../../../_runtime/metro/15636__.js";
import _slicedToArray from "../../../../../_runtime/metro/00032__.js";
import noop from "../../../../../_runtime/metro/00019__.js";

const require = globalThis.__r;

const ImageButton2 = ImageButton(9550);
require = fn;
get_ActivityIndicator = fn(17);
({ View: hasOwnProperty, ScrollView: metroRequire } = get_ActivityIndicator);
const ThemeTypes = fn(1085).ThemeTypes;
const ClientThemesConstants = fn(1240);
({ LIGHT_BACKGROUND_GRADIENT_PRESETS: closure_8, DARK_BACKGROUND_GRADIENT_PRESETS: closure_9 } = ClientThemesConstants);
const jsxProd = fn(21);
({ jsx: c10, jsxs: closure_11, Fragment: closure_12 } = jsxProd);
let closure_13 = ["primary", "secondary", "tertiary"];
let closure_14 = ["primary-overlay", "secondary-overlay"];
let closure_15 = ["destructive", "active"];
let closure_16 = ["expressive"];
let closure_17 = ["experimental_premium-primary", "experimental_premium-secondary"];
let ReactCompilerGating = fn(558);
let closure_18 = ReactCompilerGating.isReactCompilerEnabled() ? ((arg0) => {
  const cResult = c.c(14);
  ({ variant, text, grow } = arg0);
  const tmp4 = useDesignSystemSettingsStateDefault();
  ({ buttonScale, buttonSize, enableLoadingState } = tmp4);
  ({ iconPosition, showDisabled } = tmp4);
  noop.useRef(null);
  [tmp6, dependencyMap] = noop.useState(false);
  if (cResult[0] !== enableLoadingState) {
    const fn = function l() {
      if (enableLoadingState) {
        if (null != ref.current) {
          const _clearTimeout = clearTimeout;
          clearTimeout(ref.current);
        }
        dependencyMap(true);
        const _setTimeout = setTimeout;
        ref.current = setTimeout(() => {
          closure_1_2(false);
        }, 5000);
      }
    };
    cResult[0] = enableLoadingState;
    cResult[1] = fn;
    let tmp7 = fn;
  } else {
    tmp7 = cResult[1];
  }
  if (cResult[2] === Symbol.for("react.memo_cache_sentinel")) {
    class I {
      constructor() {
        tmp = closure_2(true);
        closure_1.current = setTimeout(() => {
          closure_1_2(false);
        }, 5000);
        return;
      }
    }
    cResult[2] = I;
  } else {
    class I {
      constructor() {
        tmp = closure_2(true);
        closure_1.current = setTimeout(() => {
          closure_1_2(false);
        }, 5000);
        return;
      }
    }
  }
  if (text == null) {
    class I {
      constructor() {
        tmp = closure_2(true);
        closure_1.current = setTimeout(() => {
          closure_1_2(false);
        }, 5000);
        return;
      }
    }
  }
  if (text == null) {
    class I {
      constructor() {
        tmp = closure_2(true);
        closure_1.current = setTimeout(() => {
          closure_1_2(false);
        }, 5000);
        return;
      }
    }
  }
  if (grow == null) {
    class I {
      constructor() {
        tmp = closure_2(true);
        closure_1.current = setTimeout(() => {
          closure_1_2(false);
        }, 5000);
        return;
      }
    }
  }
  if (tmp4.showIcon) {
    class I {
      constructor() {
        tmp = closure_2(true);
        closure_1.current = setTimeout(() => {
          closure_1_2(false);
        }, 5000);
        return;
      }
    }
  }
  if (cResult[3] === tmp6) {
    class I {
      constructor() {
        tmp = closure_2(true);
        closure_1.current = setTimeout(() => {
          closure_1_2(false);
        }, 5000);
        return;
      }
    }
  }
  const tmp5 = _slicedToArray(noop.useState(false), 2);
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
  cResult[13] = v65535(components_Button_Button.Button, { disabled: showDisabled, onPress: tmp7, onLongPress: I, loading: tmp6, variant, text, grow, size: buttonSize, icon: undefined, iconPosition, scaleAmountInPx: buttonScale });
  const tmp10 = v65535(components_Button_Button.Button, { disabled: showDisabled, onPress: tmp7, onLongPress: I, loading: tmp6, variant, text, grow, size: buttonSize, icon: undefined, iconPosition, scaleAmountInPx: buttonScale });
}) : ((arg0) => {
  ({ variant, text, grow } = arg0);
  const tmp3 = useDesignSystemSettingsStateDefault();
  const enableLoadingState = tmp3.enableLoadingState;
  ({ buttonScale, buttonSize, iconPosition, showIcon, showDisabled } = tmp3);
  noop.useRef(null);
  const tmp4 = _slicedToArray(noop.useState(false), 2);
  closure_2 = tmp4[1];
  const items = [enableLoadingState];
  const callback = noop.useCallback(() => {
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
  const callback1 = noop.useCallback(() => {
    closure_2(true);
    closure_1.current = setTimeout(() => {
      closure_1_2(false);
    }, 5000);
  }, []);
  const obj = { disabled: showDisabled, onPress: callback, onLongPress: callback1, loading: tmp4[0], variant, text: null, grow: null, size: null, icon: null, iconPosition: null, scaleAmountInPx: null };
  if (text == null) {
    text = variant;
  }
  if (text == null) {
    text = "";
  }
  obj.text = text;
  if (grow == null) {
    grow = false;
  }
  obj.grow = grow;
  obj.size = buttonSize;
  let tmpResult;
  if (showIcon) {
    tmpResult = _modDef15636;
  }
  obj.icon = tmpResult;
  obj.iconPosition = iconPosition;
  obj.scaleAmountInPx = buttonScale;
  return v65535(components_Button_Button.Button, obj);
});
ReactCompilerGating = fn(558);
let closure_19 = ReactCompilerGating.isReactCompilerEnabled() ? ((arg0) => {
  const cResult = c.c(19);
  ({ variant, showLabel } = arg0);
  const tmp6 = useDesignSystemSettingsStateDefault();
  ({ buttonSize, enableLoadingState } = tmp6);
  const showDisabled = tmp6.showDisabled;
  noop.useRef(null);
  const tmp4 = undefined !== showLabel && showLabel;
  [tmp8, dependencyMap] = noop.useState(false);
  if (cResult[0] !== enableLoadingState) {
    const fn = function l() {
      if (enableLoadingState) {
        if (null != ref.current) {
          const _clearTimeout = clearTimeout;
          clearTimeout(ref.current);
        }
        dependencyMap(true);
        const _setTimeout = setTimeout;
        ref.current = setTimeout(() => {
          closure_1_2(false);
        }, 5000);
      }
    };
    cResult[0] = enableLoadingState;
    cResult[1] = fn;
    let tmp9 = fn;
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
    const obj2 = { disabled: showDisabled, onPress: P, label: variant, grow: true, loading: tmp8, variant, icon: _modDef6884 };
    const tmp19 = v65535(IconButton.IconButton, obj2);
    cResult[4] = tmp8;
    cResult[5] = showDisabled;
    cResult[6] = P;
    cResult[7] = variant;
    cResult[8] = variant;
    cResult[9] = tmp19;
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
    const obj3 = { disabled: showDisabled, onPress: tmp10, accessibilityLabel: variant, loading: tmp8, variant, size: buttonSize, icon: _modDef6884 };
    const tmp14 = v65535(IconButton.IconButton, obj3);
    cResult[12] = tmp8;
    cResult[13] = buttonSize;
    cResult[14] = showDisabled;
    cResult[15] = tmp10;
    cResult[16] = variant;
    cResult[17] = variant;
    cResult[18] = tmp14;
  }
  const tmp7 = _slicedToArray(noop.useState(false), 2);
}) : ((arg0) => {
  ({ variant, showLabel } = arg0);
  if (showLabel === undefined) {
    showLabel = false;
  }
  c2 = undefined;
  const tmp3 = useDesignSystemSettingsStateDefault();
  const enableLoadingState = tmp3.enableLoadingState;
  const showDisabled = tmp3.showDisabled;
  noop.useRef(null);
  [tmp5, c2] = noop.useState(false);
  const items = [enableLoadingState];
  closure_3 = noop.useCallback(() => {
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
  if (showLabel) {
    const obj2 = {
      disabled: showDisabled,
      onPress() {
          return closure_3();
        },
      label: null,
      grow: true,
      loading: null,
      variant: null,
      icon: null
    };
    let str2 = variant;
    if (variant == null) {
      str2 = "";
    }
    obj2.label = str2;
    obj2.loading = tmp5;
    obj2.variant = variant;
    obj2.icon = _modDef6884;
    let obj = obj2;
  } else {
    obj = {
      disabled: showDisabled,
      onPress() {
          return closure_3();
        },
      accessibilityLabel: null,
      loading: null,
      variant: null,
      size: null,
      icon: null
    };
    let str = variant;
    if (variant == null) {
      str = "";
    }
    obj.accessibilityLabel = str;
    obj.loading = tmp5;
    obj.variant = variant;
    obj.size = tmp3.buttonSize;
    obj.icon = _modDef6884;
  }
  return v65535(IconButton.IconButton, obj);
});
ReactCompilerGating = fn(558);
let closure_20 = ReactCompilerGating.isReactCompilerEnabled() ? ((arg0) => {
  let ImageButton = require;
  let tmp = dependencyMap;
  const cResult = c.c(19);
  ({ image, label, showLabel } = arg0);
  const tmp4 = useDesignSystemSettingsStateDefault();
  ({ buttonSize, enableLoadingState } = tmp4);
  const showDisabled = tmp4.showDisabled;
  noop.useRef(null);
  const tmp3 = undefined !== showLabel && showLabel;
  [tmp6, dependencyMap] = noop.useState(false);
  if (cResult[0] !== enableLoadingState) {
    const fn = function l() {
      if (enableLoadingState) {
        if (null != ref.current) {
          const _clearTimeout = clearTimeout;
          clearTimeout(ref.current);
        }
        dependencyMap(true);
        const _setTimeout = setTimeout;
        ref.current = setTimeout(() => {
          closure_1_2(false);
        }, 5000);
      }
    };
    cResult[0] = enableLoadingState;
    cResult[1] = fn;
    let tmp7 = fn;
  } else {
    tmp7 = cResult[1];
  }
  _slicedToArray = tmp7;
  if (tmp3) {
    if (cResult[2] !== tmp7) {
      class B {
        constructor() {
          return closure_3();
        }
      }
      cResult[2] = tmp7;
      cResult[3] = B;
    } else {
      class B {
        constructor() {
          return closure_3();
        }
      }
    }
    if (cResult[4] === tmp6) {
      class B {
        constructor() {
          return closure_3();
        }
      }
    }
    ImageButton = ImageButton2.ImageButton;
    const obj2 = { disabled: showDisabled, onPress: B, label, grow: true, loading: tmp6, image };
    tmp = v65535(ImageButton, obj2);
    cResult[4] = tmp6;
    cResult[5] = image;
    cResult[6] = label;
    cResult[7] = showDisabled;
    cResult[8] = B;
    cResult[9] = tmp;
  } else {
    class B {
      constructor() {
        return closure_3();
      }
    }
    if (cResult[12] === tmp6) {
      class B {
        constructor() {
          return closure_3();
        }
      }
    }
    const obj3 = { disabled: showDisabled, onPress: tmp8, accessibilityLabel: label, loading: tmp6, size: buttonSize, image };
    const tmp11 = v65535(ImageButton2.ImageButton, obj3);
    cResult[12] = tmp6;
    cResult[13] = buttonSize;
    cResult[14] = image;
    cResult[15] = label;
    cResult[16] = showDisabled;
    cResult[17] = tmp8;
    cResult[18] = tmp11;
  }
  const tmp5 = _slicedToArray(noop.useState(false), 2);
}) : ((arg0) => {
  ({ image, label, showLabel } = arg0);
  if (showLabel === undefined) {
    showLabel = false;
  }
  c2 = undefined;
  const tmp = useDesignSystemSettingsStateDefault();
  const enableLoadingState = tmp.enableLoadingState;
  const showDisabled = tmp.showDisabled;
  noop.useRef(null);
  [tmp3, c2] = noop.useState(false);
  const items = [enableLoadingState];
  closure_3 = noop.useCallback(() => {
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
  if (showLabel) {
    const obj2 = {
      disabled: showDisabled,
      onPress() {
          return closure_3();
        },
      label,
      grow: true,
      loading: tmp3,
      image
    };
    let obj = obj2;
  } else {
    obj = {
      disabled: showDisabled,
      onPress() {
          return closure_3();
        },
      accessibilityLabel: label,
      loading: tmp3,
      size: tmp.buttonSize,
      image
    };
  }
  return v65535(ImageButton2.ImageButton, obj);
});
ReactCompilerGating = fn(558);
let closure_21 = ReactCompilerGating.isReactCompilerEnabled() ? (() => {
  const cResult = c.c(5);
  [pressed, closure_1] = noop.useState(false);
  if (cResult[0] !== pressed) {
    const fn = function o() {
      return closure_1(!first);
    };
    cResult[0] = pressed;
    cResult[1] = fn;
    let tmp6 = fn;
  } else {
    tmp6 = cResult[1];
  }
  if (cResult[2] === pressed) {
    if (cResult[3] === tmp6) {
      let tmp7 = cResult[4];
    }
    return tmp7;
  }
  const tmp8 = v65535(ToggleButton.ToggleButton, { text: "Notifications", icon: _modDef7608, pressed, onPress: tmp6, size: "md" });
  cResult[2] = pressed;
  cResult[3] = tmp6;
  cResult[4] = tmp8;
  tmp7 = tmp8;
  const obj2 = { text: "Notifications", icon: _modDef7608, pressed, onPress: tmp6, size: "md" };
}) : (() => {
  [pressed, closure_1] = noop.useState(false);
  return v65535(ToggleButton.ToggleButton, {
    text: "Notifications",
    icon: _modDef7608,
    pressed,
    onPress() {
      return closure_1(!first);
    },
    size: "md"
  });
});
ReactCompilerGating = fn(558);
let closure_22 = ReactCompilerGating.isReactCompilerEnabled() ? ((variant) => {
  const cResult = c.c(7);
  variant = variant.variant;
  [pressed, closure_1] = noop.useState(false);
  const combined = "" + variant + " notifications";
  if (cResult[0] !== pressed) {
    const fn = function l() {
      return closure_1(!first);
    };
    cResult[0] = pressed;
    cResult[1] = fn;
    let tmp7 = fn;
  } else {
    tmp7 = cResult[1];
  }
  if (cResult[2] === pressed) {
    if (cResult[3] === combined) {
      if (cResult[4] === tmp7) {
        if (cResult[5] === variant) {
          let tmp8 = cResult[6];
        }
        return tmp8;
      }
    }
  }
  const tmp9 = v65535(ToggleIconButton.ToggleIconButton, { accessibilityLabel: combined, icon: _modDef7608, selectedIcon: _modDef9814, pressed, onPress: tmp7, variant, size: "md" });
  cResult[2] = pressed;
  cResult[3] = combined;
  cResult[4] = tmp7;
  cResult[5] = variant;
  cResult[6] = tmp9;
  tmp8 = tmp9;
  const obj2 = { accessibilityLabel: combined, icon: _modDef7608, selectedIcon: _modDef9814, pressed, onPress: tmp7, variant, size: "md" };
}) : ((variant) => {
  variant = variant.variant;
  pressed = undefined;
  closure_1 = undefined;
  [pressed, closure_1] = noop.useState(false);
  return v65535(ToggleIconButton.ToggleIconButton, {
    accessibilityLabel: "" + variant + " notifications",
    icon: _modDef7608,
    selectedIcon: _modDef9814,
    pressed,
    onPress() {
      return closure_1(!first);
    },
    variant,
    size: "md"
  });
});
ReactCompilerGating = fn(558);
let closure_23 = ReactCompilerGating.isReactCompilerEnabled() ? (() => {
  const cResult = c.c(6);
  [first, closure_1] = noop.useState(false);
  if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
    const obj2 = { on: null, off: null };
    const obj3 = { variant: "destructive", accessibilityLabel: "Mute", icon: _modDef4821 };
    obj2.on = obj3;
    const obj4 = { variant: "secondary", accessibilityLabel: "Mute", icon: _modDef4821 };
    obj2.off = obj4;
    cResult[0] = obj2;
    let first1 = obj2;
  } else {
    first1 = cResult[0];
  }
  const toggleIconButtonProps = useToggleButtonProps.useToggleIconButtonProps(first1, first);
  if (cResult[1] !== first) {
    const fn = function b() {
      closure_1(!first);
    };
    cResult[1] = first;
    cResult[2] = fn;
    let tmp9 = fn;
  } else {
    tmp9 = cResult[2];
  }
  if (cResult[3] === tmp9) {
    if (cResult[4] === toggleIconButtonProps) {
      let tmp10 = cResult[5];
    }
    return tmp10;
  }
  const obj5 = {};
  const merged = Object.assign(toggleIconButtonProps);
  obj5.onPress = tmp9;
  obj5.size = "md";
  const tmp12 = v65535(IconButton.IconButton, obj5);
  cResult[3] = tmp9;
  cResult[4] = toggleIconButtonProps;
  cResult[5] = tmp12;
  tmp10 = tmp12;
  const tmpResult = useToggleButtonProps;
}) : (() => {
  [first, closure_1] = noop.useState(false);
  const obj2 = { on: null, off: null };
  const obj = useToggleButtonProps;
  obj2.on = { variant: "destructive", accessibilityLabel: "Mute", icon: _modDef4821 };
  const obj3 = { variant: "destructive", accessibilityLabel: "Mute", icon: _modDef4821 };
  obj2.off = { variant: "secondary", accessibilityLabel: "Mute", icon: _modDef4821 };
  const toggleIconButtonProps = obj.useToggleIconButtonProps(obj2, first);
  const obj5 = {};
  const merged = Object.assign(toggleIconButtonProps);
  obj5.onPress = function onPress() {
    closure_1(!first);
  };
  obj5.size = "md";
  return v65535(IconButton.IconButton, obj5);
});
const createStyles = fn(4890);
let obj8 = { container: { paddingHorizontal: nativeDefault.space.PX_16 }, buttonContainer: null, toggleIconButtonRow: null, overlayButtonContainer: null };
let obj9 = { paddingHorizontal: nativeDefault.space.PX_16 };
obj8.buttonContainer = { paddingHorizontal: nativeDefault.space.PX_16, paddingVertical: nativeDefault.space.PX_8 };
let obj10 = { paddingHorizontal: nativeDefault.space.PX_16, paddingVertical: nativeDefault.space.PX_8 };
obj8.toggleIconButtonRow = { flexDirection: "row", gap: nativeDefault.space.PX_16 };
let obj11 = { flexDirection: "row", gap: nativeDefault.space.PX_16 };
obj8.overlayButtonContainer = { backgroundColor: nativeDefault.unsafe_rawColors.BG_GRADIENT_CHROMA_GLOW_1, paddingVertical: nativeDefault.space.PX_48 };
let closure_24 = createStyles.createStyles(obj8);
const size = fn(2);
const result = size.fileFinishedImporting("modules/user_settings/design_system/native/UserSettingsDesignSystemButton.tsx");

export default function UserSettingsDesignSystemButton() {
  const tmp = closure_24();
  _require = tmp;
  const navigation = require("useNavigation").useNavigation();
  importDefault = noop.useCallback(() => {
    onPress(paths[23]).openLazy(closure_0(paths[25])(paths[24], paths.paths), "UserSettingsDesignSystemButtonActionSheet");
  }, []);
  navigation.setOptions({
    headerRight() {
      return v65535(IconButton.IconButton, { onPress, icon: _modDef6884, size: "sm", variant: "secondary", accessibilityLabel: "Settings" });
    }
  });
  const obj3 = { children: null };
  const obj4 = { children: null };
  const obj5 = { spacing: 24, children: null };
  const obj6 = { children: null };
  let obj = require("useNavigation");
  const obj2 = {
    headerRight() {
      return v65535(IconButton.IconButton, { onPress, icon: _modDef6884, size: "sm", variant: "secondary", accessibilityLabel: "Settings" });
    }
  };
  let items = [closure_10(require("Stack/Stack").Stack, { style: tmp.container, children: closure_10(require("Text/Text").Text, { variant: "heading-lg/bold", children: "Hierarchical buttons" }) }), ];
  const obj7 = { style: tmp.container, children: closure_10(require("Text/Text").Text, { variant: "heading-lg/bold", children: "Hierarchical buttons" }) };
  items[1] = closure_10(closure_5, {
    children: closure_13.map((variant) => {
      const obj = { style: closure_0.buttonContainer, children: v65535(closure_18, { variant }) };
      return v65535(hasOwnProperty, obj, variant);
    })
  });
  obj6.children = items;
  const items1 = [closure_11(require("Stack/Stack").Stack, obj6), , , , , , , , , , , , , , , , , , , ];
  const obj9 = { children: null };
  const obj8 = {
    children: closure_13.map((variant) => {
      const obj = { style: closure_0.buttonContainer, children: v65535(closure_18, { variant }) };
      return v65535(hasOwnProperty, obj, variant);
    })
  };
  const items2 = [closure_10(require("Stack/Stack").Stack, { style: tmp.container, children: closure_10(require("Text/Text").Text, { variant: "heading-lg/bold", children: "Sentiment buttons" }) }), ];
  const obj10 = { style: tmp.container, children: closure_10(require("Text/Text").Text, { variant: "heading-lg/bold", children: "Sentiment buttons" }) };
  items2[1] = closure_10(closure_5, {
    children: closure_15.map((variant) => {
      const obj = { style: closure_0.buttonContainer, children: v65535(closure_18, { variant }) };
      return v65535(hasOwnProperty, obj, variant);
    })
  });
  obj9.children = items2;
  items1[1] = closure_11(require("Stack/Stack").Stack, obj9);
  const obj12 = { children: null };
  const obj11 = {
    children: closure_15.map((variant) => {
      const obj = { style: closure_0.buttonContainer, children: v65535(closure_18, { variant }) };
      return v65535(hasOwnProperty, obj, variant);
    })
  };
  const items3 = [closure_10(require("Stack/Stack").Stack, { style: tmp.container, children: closure_10(require("Text/Text").Text, { variant: "heading-lg/bold", children: "Expressive buttons" }) }), ];
  const obj13 = { style: tmp.container, children: closure_10(require("Text/Text").Text, { variant: "heading-lg/bold", children: "Expressive buttons" }) };
  items3[1] = closure_10(closure_5, {
    children: closure_16.map((variant) => {
      const obj = { style: closure_0.buttonContainer, children: v65535(closure_18, { variant }) };
      return v65535(hasOwnProperty, obj, variant);
    })
  });
  obj12.children = items3;
  items1[2] = closure_11(require("Stack/Stack").Stack, obj12);
  const obj15 = { children: null };
  const obj14 = {
    children: closure_16.map((variant) => {
      const obj = { style: closure_0.buttonContainer, children: v65535(closure_18, { variant }) };
      return v65535(hasOwnProperty, obj, variant);
    })
  };
  const items4 = [closure_10(require("Stack/Stack").Stack, { style: tmp.container, children: closure_10(require("Text/Text").Text, { variant: "heading-lg/bold", children: "Experimental premium buttons" }) }), ];
  const obj16 = { style: tmp.container, children: closure_10(require("Text/Text").Text, { variant: "heading-lg/bold", children: "Experimental premium buttons" }) };
  items4[1] = closure_10(closure_5, {
    children: closure_17.map((variant) => {
      const obj = { style: closure_0.buttonContainer, children: v65535(closure_18, { variant }) };
      return v65535(hasOwnProperty, obj, variant);
    })
  });
  obj15.children = items4;
  items1[3] = closure_11(require("Stack/Stack").Stack, obj15);
  const obj18 = { children: null };
  const obj19 = { style: tmp.container, children: null };
  const items5 = [closure_10(require("Text/Text").Text, { variant: "heading-lg/bold", children: "Overlay buttons" }), closure_10(require("Text/Text").Text, { variant: "text-sm/normal", children: "Overlay buttons are meant to be used overlayed on top of an image or background color. They do not change colors with the theme." })];
  obj19.children = items5;
  const items6 = [closure_11(require("Stack/Stack").Stack, obj19), ];
  const obj17 = {
    children: closure_17.map((variant) => {
      const obj = { style: closure_0.buttonContainer, children: v65535(closure_18, { variant }) };
      return v65535(hasOwnProperty, obj, variant);
    })
  };
  items6[1] = closure_10(closure_5, {
    children: closure_14.map((variant) => {
      const obj = { style: null, children: v65535(closure_18, { variant }) };
      const items = [, ];
      ({ buttonContainer: arr[0], overlayButtonContainer: arr[1] } = closure_0);
      obj.style = items;
      return v65535(hasOwnProperty, obj, variant);
    })
  });
  obj18.children = items6;
  items1[4] = closure_11(require("Stack/Stack").Stack, obj18);
  const obj21 = { children: null };
  const obj22 = { style: tmp.container, children: null };
  const items7 = [closure_10(require("Text/Text").Text, { variant: "heading-lg/bold", children: "Custom color icons" }), closure_10(require("Text/Text").Text, { variant: "text-sm/normal", children: "If a button needs to have an icon which has its own custom color, then create your own Button.Icon to pass as the icon prop." })];
  obj22.children = items7;
  const items8 = [closure_11(require("Stack/Stack").Stack, obj22), ];
  const obj23 = { children: null };
  const obj24 = { style: tmp.buttonContainer, children: null };
  const obj25 = {
    onPress() {

    },
    variant: "secondary",
    text: "Button with a custom color icon",
    size: "md",
    icon: null
  };
  const obj20 = {
    children: closure_14.map((variant) => {
      const obj = { style: null, children: v65535(closure_18, { variant }) };
      const items = [, ];
      ({ buttonContainer: arr[0], overlayButtonContainer: arr[1] } = closure_0);
      obj.style = items;
      return v65535(hasOwnProperty, obj, variant);
    })
  };
  obj25.icon = closure_10(require("components/Button/Button").Button.Icon, { source: _modDef10383 });
  obj24.children = closure_10(require("components/Button/Button").Button, obj25);
  const items9 = [closure_10(closure_5, obj24), ];
  const obj27 = { style: tmp.buttonContainer, children: null };
  const obj28 = {
    onPress() {

    },
    variant: "secondary",
    text: "Button with a entity variant icon",
    size: "md",
    icon: null
  };
  const obj26 = { source: _modDef10383 };
  obj28.icon = closure_10(require("components/Button/Button").Button.Icon, { variant: "entity", source: _modDef9541 });
  obj27.children = closure_10(require("components/Button/Button").Button, obj28);
  items9[1] = closure_10(closure_5, obj27);
  obj23.children = items9;
  items8[1] = closure_11(closure_5, obj23);
  obj21.children = items8;
  items1[5] = closure_11(require("Stack/Stack").Stack, obj21);
  const obj30 = { children: null };
  const obj29 = { variant: "entity", source: _modDef9541 };
  const items10 = [closure_10(require("Stack/Stack").Stack, { style: tmp.container, children: closure_10(require("Text/Text").Text, { variant: "heading-lg/bold", children: "Buttons with various text lengths" }) }), ];
  const obj32 = { children: null };
  const obj33 = { style: tmp.buttonContainer, children: null };
  const obj31 = { style: tmp.container, children: closure_10(require("Text/Text").Text, { variant: "heading-lg/bold", children: "Buttons with various text lengths" }) };
  obj33.children = closure_10(require("components/Button/Button").Button, {
    onPress() {

    },
    variant: "secondary",
    text: "Neque porro quisquam est qui dolorem ipsum quia dolor sit amet, consectetur",
    size: "md",
    icon: _modDef10383
  });
  const items11 = [closure_10(closure_5, obj33), , , ];
  const obj35 = { style: tmp.buttonContainer, children: null };
  const obj34 = {
    onPress() {

    },
    variant: "secondary",
    text: "Neque porro quisquam est qui dolorem ipsum quia dolor sit amet, consectetur",
    size: "md",
    icon: _modDef10383
  };
  obj35.children = closure_10(require("components/Button/Button").Button, {
    onPress() {

    },
    variant: "secondary",
    text: "Neque porro quisquam est qui dolorem ipsum quia dolor sit amet, consectetur",
    size: "md",
    icon: _modDef10383,
    iconPosition: "end"
  });
  items11[1] = closure_10(closure_5, obj35);
  const obj37 = {
    style: tmp.buttonContainer,
    children: closure_10(require("components/Button/Button").Button, {
      onPress() {

      },
      variant: "secondary",
      text: "Neque porro quisquam est qui dolorem ipsum quia dolor sit amet, consectetur",
      size: "md"
    })
  };
  items11[2] = closure_10(closure_5, obj37);
  const obj39 = {
    style: tmp.buttonContainer,
    children: closure_10(require("components/Button/Button").Button, {
      onPress() {

      },
      variant: "secondary",
      text: "A",
      size: "md"
    })
  };
  items11[3] = closure_10(closure_5, obj39);
  obj32.children = items11;
  items10[1] = closure_11(closure_5, obj32);
  obj30.children = items10;
  items1[6] = closure_11(require("Stack/Stack").Stack, obj30);
  const obj41 = { children: null };
  const obj42 = { style: tmp.container, children: null };
  const items12 = [closure_10(require("Text/Text").Text, { variant: "heading-lg/bold", children: "Toggling button states" }), closure_10(require("Text/Text").Text, { variant: "text-sm/normal", children: "Use ToggleButton for a controlled labeled toggle and ToggleIconButton for a controlled icon-only toggle. Use the lower-level toggle prop hooks when a custom control needs complete prop bags per state." }), closure_10(require("Text/Text").Text, { variant: "text-sm/normal", children: "These APIs apply the selected presentation and add the accessibility attributes required for a toggle button." })];
  obj42.children = items12;
  const items13 = [closure_11(require("Stack/Stack").Stack, obj42), ];
  const obj43 = { children: null };
  const obj36 = {
    onPress() {

    },
    variant: "secondary",
    text: "Neque porro quisquam est qui dolorem ipsum quia dolor sit amet, consectetur",
    size: "md",
    icon: _modDef10383,
    iconPosition: "end"
  };
  const obj38 = {
    onPress() {

    },
    variant: "secondary",
    text: "Neque porro quisquam est qui dolorem ipsum quia dolor sit amet, consectetur",
    size: "md"
  };
  const obj40 = {
    onPress() {

    },
    variant: "secondary",
    text: "A",
    size: "md"
  };
  const items14 = [closure_10(closure_5, { style: tmp.buttonContainer, children: closure_10(closure_21, {}) }), , ];
  const obj45 = { style: null, children: null };
  const items15 = [, ];
  ({ buttonContainer: arr16[0], toggleIconButtonRow: arr16[1] } = tmp);
  obj45.style = items15;
  const items16 = [closure_10(closure_22, { variant: "default" }), closure_10(closure_22, { variant: "critical" }), closure_10(closure_22, { variant: "icon-only" })];
  obj45.children = items16;
  items14[1] = closure_11(closure_5, obj45);
  const obj44 = { style: tmp.buttonContainer, children: closure_10(closure_21, {}) };
  items14[2] = closure_10(closure_5, { style: tmp.buttonContainer, children: closure_10(closure_23, {}) });
  obj43.children = items14;
  items13[1] = closure_11(closure_5, obj43);
  obj41.children = items13;
  items1[7] = closure_11(require("Stack/Stack").Stack, obj41);
  const obj47 = { children: null };
  const obj48 = { style: tmp.container, children: null };
  const items17 = [closure_10(require("Text/Text").Text, { variant: "heading-lg/bold", children: "Hierarchical icon buttons" }), closure_10(require("Text/Text").Text, { variant: "text-sm/normal", children: "While the primary variants of IconButton are supported, these should be used very rarely." }), closure_10(require("Text/Text").Text, { variant: "text-sm/normal", children: "An icon button usually has a secondary function and should use the secondary variants." })];
  obj48.children = items17;
  const items18 = [closure_11(require("Stack/Stack").Stack, obj48), ];
  const obj46 = { style: tmp.buttonContainer, children: closure_10(closure_23, {}) };
  items18[1] = closure_10(closure_5, {
    children: closure_13.map((variant) => {
      const obj = { style: closure_0.buttonContainer, children: v65535(closure_19, { variant }) };
      return v65535(hasOwnProperty, obj, variant);
    })
  });
  obj47.children = items18;
  items1[8] = closure_11(require("Stack/Stack").Stack, obj47);
  const obj50 = { children: null };
  const obj49 = {
    children: closure_13.map((variant) => {
      const obj = { style: closure_0.buttonContainer, children: v65535(closure_19, { variant }) };
      return v65535(hasOwnProperty, obj, variant);
    })
  };
  const items19 = [closure_10(require("Stack/Stack").Stack, { style: tmp.container, children: closure_10(require("Text/Text").Text, { variant: "heading-lg/bold", children: "Sentiment icon buttons" }) }), ];
  const obj51 = { style: tmp.container, children: closure_10(require("Text/Text").Text, { variant: "heading-lg/bold", children: "Sentiment icon buttons" }) };
  items19[1] = closure_10(closure_5, {
    children: closure_15.map((variant) => {
      const obj = { style: closure_0.buttonContainer, children: v65535(closure_19, { variant }) };
      return v65535(hasOwnProperty, obj, variant);
    })
  });
  obj50.children = items19;
  items1[9] = closure_11(require("Stack/Stack").Stack, obj50);
  const obj53 = { children: null };
  const obj52 = {
    children: closure_15.map((variant) => {
      const obj = { style: closure_0.buttonContainer, children: v65535(closure_19, { variant }) };
      return v65535(hasOwnProperty, obj, variant);
    })
  };
  const items20 = [closure_10(require("Stack/Stack").Stack, { style: tmp.container, children: closure_10(require("Text/Text").Text, { variant: "heading-lg/bold", children: "Overlay icon buttons" }) }), ];
  const obj54 = { style: tmp.container, children: closure_10(require("Text/Text").Text, { variant: "heading-lg/bold", children: "Overlay icon buttons" }) };
  items20[1] = closure_10(closure_5, {
    children: closure_14.map((variant) => {
      const obj = { style: null, children: v65535(closure_19, { variant }) };
      const items = [, ];
      ({ buttonContainer: arr[0], overlayButtonContainer: arr[1] } = closure_0);
      obj.style = items;
      return v65535(hasOwnProperty, obj, variant);
    })
  });
  obj53.children = items20;
  items1[10] = closure_11(require("Stack/Stack").Stack, obj53);
  const obj56 = { children: null };
  const obj57 = { style: tmp.container, children: null };
  const items21 = [closure_10(require("Text/Text").Text, { variant: "heading-lg/bold", children: "Image buttons" }), closure_10(require("Text/Text").Text, { variant: "text-sm/normal", children: "Image buttons are rereserved for more branded buttons, like social media sharing buttons." })];
  obj57.children = items21;
  const items22 = [closure_11(require("Stack/Stack").Stack, obj57), ];
  const obj58 = { children: null };
  const obj59 = { style: null, children: null };
  const items23 = [tmp.buttonContainer];
  obj59.style = items23;
  const obj55 = {
    children: closure_14.map((variant) => {
      const obj = { style: null, children: v65535(closure_19, { variant }) };
      const items = [, ];
      ({ buttonContainer: arr[0], overlayButtonContainer: arr[1] } = closure_0);
      obj.style = items;
      return v65535(hasOwnProperty, obj, variant);
    })
  };
  obj59.children = closure_10(closure_20, { image: _modDef9546, label: "Telegram" });
  const items24 = [closure_10(closure_5, obj59), , ];
  const obj61 = { style: null, children: null };
  const items25 = [tmp.buttonContainer];
  obj61.style = items25;
  const obj60 = { image: _modDef9546, label: "Telegram" };
  obj61.children = closure_10(closure_20, { image: _modDef9548, label: "WhatsApp" });
  items24[1] = closure_10(closure_5, obj61);
  const obj63 = { style: null, children: null };
  const items26 = [tmp.buttonContainer];
  obj63.style = items26;
  const obj62 = { image: _modDef9548, label: "WhatsApp" };
  obj63.children = closure_10(closure_20, { image: _modDef9547, label: "Twitter" });
  items24[2] = closure_10(closure_5, obj63);
  obj58.children = items24;
  items22[1] = closure_11(closure_5, obj58);
  obj56.children = items22;
  items1[11] = closure_11(require("Stack/Stack").Stack, obj56);
  const obj65 = { spacing: 24, children: null };
  const obj66 = { style: tmp.container, children: null };
  const items27 = [closure_10(require("Text/Text").Text, { variant: "heading-lg/bold", children: "IconButton with a label" }), closure_10(require("Text/Text").Text, { variant: "text-sm/normal", children: "Icon buttons with a label require a different combination of props and will only appear in the 'lg' size." }), closure_10(require("Text/Text").Text, { variant: "text-sm/normal", children: "It is highly recommended that a list of these buttons appear wrapped in a ScrollView, so that they will horizontally scroll when there are many buttons, when the text is longer through internationalization, or the text is larger through OS font size settings." })];
  obj66.children = items27;
  const items28 = [closure_11(require("Stack/Stack").Stack, obj66), , ];
  const obj67 = { horizontal: true, contentContainerStyle: { minWidth: "100%" }, children: null };
  const obj64 = { image: _modDef9547, label: "Twitter" };
  obj67.children = closure_10(require("Stack/Stack").Stack, { direction: "horizontal", justify: "center", style: tmp.buttonContainer, children: closure_13.map((variant) => closure_1_10(closure_1_19, { variant, showLabel: true }, variant)) });
  items28[1] = closure_10(closure_6, obj67);
  const obj69 = { horizontal: true, contentContainerStyle: { minWidth: "100%" }, children: null };
  const obj70 = { direction: "horizontal", justify: "center", style: tmp.buttonContainer, children: null };
  const obj68 = { direction: "horizontal", justify: "center", style: tmp.buttonContainer, children: closure_13.map((variant) => closure_1_10(closure_1_19, { variant, showLabel: true }, variant)) };
  const items29 = [
    closure_10(require("IconButton").IconButton, {
      variant: "secondary",
      icon: _modDef6884,
      label: "Supercalifragilisticexpialidocious",
      grow: true,
      onPress() {

      }
    }),
  ,

  ];
  const obj71 = {
    variant: "secondary",
    icon: _modDef6884,
    label: "Supercalifragilisticexpialidocious",
    grow: true,
    onPress() {

    }
  };
  items29[1] = closure_10(require("IconButton").IconButton, {
    variant: "secondary",
    icon: _modDef6884,
    label: "Supercalifragilisticexpialidocious",
    grow: true,
    onPress() {

    }
  });
  const obj72 = {
    variant: "secondary",
    icon: _modDef6884,
    label: "Supercalifragilisticexpialidocious",
    grow: true,
    onPress() {

    }
  };
  items29[2] = closure_10(require("IconButton").IconButton, {
    variant: "secondary",
    icon: _modDef6884,
    label: "Supercalifragilisticexpialidocious",
    grow: true,
    onPress() {

    }
  });
  obj70.children = items29;
  obj69.children = closure_11(require("Stack/Stack").Stack, obj70);
  items28[2] = closure_10(closure_6, obj69);
  obj65.children = items28;
  items1[12] = closure_11(require("Stack/Stack").Stack, obj65);
  const obj74 = { spacing: 24, children: null };
  const obj73 = {
    variant: "secondary",
    icon: _modDef6884,
    label: "Supercalifragilisticexpialidocious",
    grow: true,
    onPress() {

    }
  };
  const items30 = [closure_10(require("Stack/Stack").Stack, { style: tmp.container, children: closure_10(require("Text/Text").Text, { variant: "heading-lg/bold", children: "ImageButton with a label" }) }), , ];
  const obj76 = { horizontal: true, contentContainerStyle: { minWidth: "100%" }, children: null };
  const obj77 = { direction: "horizontal", justify: "center", style: tmp.buttonContainer, children: null };
  const obj75 = { style: tmp.container, children: closure_10(require("Text/Text").Text, { variant: "heading-lg/bold", children: "ImageButton with a label" }) };
  const items31 = [closure_10(closure_20, { image: _modDef9545, label: "Label", showLabel: true }), , ];
  const obj78 = { image: _modDef9545, label: "Label", showLabel: true };
  items31[1] = closure_10(closure_20, { image: _modDef9541, label: "Label", showLabel: true });
  const obj79 = { image: _modDef9541, label: "Label", showLabel: true };
  items31[2] = closure_10(closure_20, { image: _modDef9544, label: "Label", showLabel: true });
  obj77.children = items31;
  obj76.children = closure_11(require("Stack/Stack").Stack, obj77);
  items30[1] = closure_10(closure_6, obj76);
  const obj81 = { horizontal: true, contentContainerStyle: { minWidth: "100%" }, children: null };
  const obj82 = { direction: "horizontal", justify: "center", style: tmp.buttonContainer, children: null };
  const obj80 = { image: _modDef9544, label: "Label", showLabel: true };
  const items32 = [closure_10(closure_20, { image: _modDef9546, label: "Supercalifragilisticexpialidocious", showLabel: true }), , ];
  const obj83 = { image: _modDef9546, label: "Supercalifragilisticexpialidocious", showLabel: true };
  items32[1] = closure_10(closure_20, { image: _modDef9548, label: "Supercalifragilisticexpialidocious", showLabel: true });
  const obj84 = { image: _modDef9548, label: "Supercalifragilisticexpialidocious", showLabel: true };
  items32[2] = closure_10(closure_20, { image: _modDef9547, label: "Supercalifragilisticexpialidocious", showLabel: true });
  obj82.children = items32;
  obj81.children = closure_11(require("Stack/Stack").Stack, obj82);
  items30[2] = closure_10(closure_6, obj81);
  obj74.children = items30;
  items1[13] = closure_11(require("Stack/Stack").Stack, obj74);
  const obj86 = { spacing: 24, children: null };
  const obj85 = { image: _modDef9547, label: "Supercalifragilisticexpialidocious", showLabel: true };
  const items33 = [closure_10(require("Stack/Stack").Stack, { style: tmp.container, children: closure_10(require("Text/Text").Text, { variant: "heading-lg/bold", children: "Mixing buttons" }) }), ];
  const obj88 = { direction: "horizontal", style: tmp.container, children: null };
  const items34 = [closure_10(closure_18, { variant: "secondary", text: "Search", grow: true }), closure_10(closure_19, { variant: "secondary" })];
  obj88.children = items34;
  items33[1] = closure_11(require("ButtonGroup").ButtonGroup, obj88);
  obj86.children = items33;
  items1[14] = closure_11(require("Stack/Stack").Stack, obj86);
  const obj89 = { children: null };
  const obj90 = { style: tmp.container, children: null };
  const items35 = [closure_10(require("Text/Text").Text, { variant: "heading-lg/bold", children: "Light Profile Themes" }), closure_10(require("Text/Text").Text, { variant: "text-sm/normal", children: "All buttons as they appear on a light profile theme" })];
  obj90.children = items35;
  const items36 = [closure_11(require("Stack/Stack").Stack, obj90), ];
  const obj91 = { theme: ThemeTypes.LIGHT, primaryColor: null, secondaryColor: null, children: null };
  const obj87 = { style: tmp.container, children: closure_10(require("Text/Text").Text, { variant: "heading-lg/bold", children: "Mixing buttons" }) };
  obj91.primaryColor = require("utils/ColorUtils").hex2int("#ffae70");
  const obj93 = require("utils/ColorUtils");
  obj91.secondaryColor = require("utils/ColorUtils").hex2int("#cc2300");
  const obj92 = { style: { padding: 16 }, start: { x: 0, y: 0 }, end: { x: 0, y: 1 }, colors: ["#ffae70", "#cc2300"], children: null };
  const obj94 = require("utils/ColorUtils");
  const obj95 = { children: null };
  const obj96 = { spacing: 16, children: null };
  const items37 = [closure_13.map((variant) => closure_1_10(closure_1_18, { variant }, variant)), closure_15.map((variant) => closure_1_10(closure_1_18, { variant }, variant))];
  obj96.children = items37;
  obj95.children = closure_11(require("Stack/Stack").Stack, obj96);
  obj92.children = closure_10(require("Card").Card, obj95);
  obj91.children = closure_10(LinearGradientDefault, obj92);
  items36[1] = closure_10(require("native").ThemeContextProvider, obj91);
  obj89.children = items36;
  items1[15] = closure_11(require("Stack/Stack").Stack, obj89);
  const obj97 = { children: null };
  const obj98 = { style: tmp.container, children: null };
  const items38 = [closure_10(require("Text/Text").Text, { variant: "heading-lg/bold", children: "Dark Profile Themes" }), closure_10(require("Text/Text").Text, { variant: "text-sm/normal", children: "All buttons as they appear on a dark profile theme" })];
  obj98.children = items38;
  const items39 = [closure_11(require("Stack/Stack").Stack, obj98), ];
  const obj99 = { theme: ThemeTypes.DARK, primaryColor: null, secondaryColor: null, children: null };
  obj99.primaryColor = require("utils/ColorUtils").hex2int("#490000");
  const obj101 = require("utils/ColorUtils");
  obj99.secondaryColor = require("utils/ColorUtils").hex2int("#cc2300");
  const obj100 = { style: { padding: 16 }, start: { x: 0, y: 0 }, end: { x: 0, y: 1 }, colors: ["#490000", "#cc2300"], children: null };
  const obj102 = require("utils/ColorUtils");
  const obj103 = { children: null };
  const obj104 = { spacing: 16, children: null };
  const items40 = [closure_13.map((variant) => closure_1_10(closure_1_18, { variant }, variant)), closure_15.map((variant) => closure_1_10(closure_1_18, { variant }, variant))];
  obj104.children = items40;
  obj103.children = closure_11(require("Stack/Stack").Stack, obj104);
  obj100.children = closure_10(require("Card").Card, obj103);
  obj99.children = closure_10(LinearGradientDefault, obj100);
  items39[1] = closure_10(require("native").ThemeContextProvider, obj99);
  obj97.children = items39;
  items1[16] = closure_11(require("Stack/Stack").Stack, obj97);
  const obj105 = { children: null };
  const obj106 = { style: tmp.container, children: null };
  const items41 = [closure_10(require("Text/Text").Text, { variant: "heading-lg/bold", children: "Light Client Theme" }), closure_10(require("Text/Text").Text, { variant: "text-sm/normal", children: "All buttons as they appear on a light client theme" })];
  obj106.children = items41;
  const items42 = [closure_11(require("Stack/Stack").Stack, obj106), ];
  const obj107 = { theme: 32.theme, gradient: 32, flags: null, children: null };
  obj107.flags = require("native").setThemeFlag(0, require("native").ThemeContextFlags.MOBILE_LIGHT_GRADIENT_THEME_ENABLED);
  const obj108 = { style: { position: "relative", padding: 16 }, children: null };
  const items43 = [closure_10(require("ThemedGradient").Gradient, { absolute: true, gradient: 32 }), ];
  const obj111 = { style: null, children: null };
  const obj112 = { backgroundColor: null, padding: 16, borderRadius: 16 };
  const obj109 = require("native");
  const obj110 = { absolute: true, gradient: 32 };
  obj112.backgroundColor = require("native").setColorOpacity("white", 0.7);
  obj111.style = obj112;
  const obj113 = { spacing: 16, children: null };
  const items44 = [closure_13.map((variant) => closure_1_10(closure_1_18, { variant }, variant)), closure_15.map((variant) => closure_1_10(closure_1_18, { variant }, variant))];
  obj113.children = items44;
  obj111.children = closure_11(require("Stack/Stack").Stack, obj113);
  items43[1] = closure_10(closure_5, obj111);
  obj108.children = items43;
  obj107.children = closure_11(closure_5, obj108);
  items42[1] = closure_10(require("native").ThemeContextProvider, obj107);
  obj105.children = items42;
  items1[17] = closure_11(require("Stack/Stack").Stack, obj105);
  const obj115 = { children: null };
  const obj116 = { style: tmp.container, children: null };
  const items45 = [closure_10(require("Text/Text").Text, { variant: "heading-lg/bold", children: "Dark Client Theme" }), closure_10(require("Text/Text").Text, { variant: "text-sm/normal", children: "All buttons as they appear on a dark client theme" })];
  obj116.children = items45;
  const items46 = [closure_11(require("Stack/Stack").Stack, obj116), ];
  const obj117 = { theme: 32.theme, gradient: 32, flags: null, children: null };
  const obj114 = require("native");
  obj117.flags = require("native").setThemeFlag(0, require("native").ThemeContextFlags.MOBILE_DARK_GRADIENT_THEME_ENABLED);
  const obj118 = { style: { position: "relative", padding: 16 }, children: null };
  const items47 = [closure_10(require("ThemedGradient").Gradient, { absolute: true, gradient: 32 }), ];
  const obj121 = { style: null, children: null };
  const obj122 = { backgroundColor: null, padding: 16, borderRadius: 16 };
  const obj119 = require("native");
  const obj120 = { absolute: true, gradient: 32 };
  obj122.backgroundColor = require("native").setColorOpacity("black", 0.7);
  obj121.style = obj122;
  const obj123 = { spacing: 16, children: null };
  const items48 = [closure_13.map((variant) => closure_1_10(closure_1_18, { variant }, variant)), closure_15.map((variant) => closure_1_10(closure_1_18, { variant }, variant))];
  obj123.children = items48;
  obj121.children = closure_11(require("Stack/Stack").Stack, obj123);
  items47[1] = closure_10(closure_5, obj121);
  obj118.children = items47;
  obj117.children = closure_11(closure_5, obj118);
  items46[1] = closure_10(require("native").ThemeContextProvider, obj117);
  obj115.children = items46;
  items1[18] = closure_11(require("Stack/Stack").Stack, obj115);
  const obj125 = { children: null };
  const obj126 = { style: tmp.container, children: null };
  const items49 = [closure_10(require("Text/Text").Text, { variant: "heading-lg/bold", children: "Floating Action Button" }), closure_10(require("Text/Text").Text, { variant: "text-sm/normal", children: "An ever-present icon button, giving the most important call to action in a compact way." })];
  obj126.children = items49;
  const items50 = [closure_11(require("Stack/Stack").Stack, obj126), closure_10(closure_5, { style: { padding: 48 } })];
  obj125.children = items50;
  items1[19] = closure_11(require("Stack/Stack").Stack, obj125);
  obj5.children = items1;
  obj4.children = closure_11(require("Stack/Stack").Stack, obj5);
  const items51 = [closure_10(closure_6, obj4), ];
  const obj124 = require("native");
  items51[1] = closure_10(require("FloatingActionButton").FloatingActionButton, {
    icon: _modDef6884,
    onPress() {

    },
    positionBottom: 32,
    accessibilityLabel: "Floating Action Button"
  });
  obj3.children = items51;
  return closure_11(closure_12, obj3);
};