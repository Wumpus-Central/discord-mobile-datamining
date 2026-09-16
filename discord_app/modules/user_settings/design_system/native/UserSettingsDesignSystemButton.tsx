// discord_app/modules/user_settings/design_system/native/UserSettingsDesignSystemButton.tsx
import nativeDefault from "../../../../../discord_common/js/packages/tokens/native.tsx";
import components_Button_Button from "../../../../design/components/Button/native/Button.native.tsx";
import LinearGradientDefault from "../../../../../_runtime/05072_LinearGradient.js";
import _modDef7491 from "../../../../../_runtime/metro/07491__.js";
import _modDef8065 from "../../../../../_runtime/metro/08065__.js";
import IconButton from "../../../../design/components/Button/native/IconButton.native.tsx";
import _modDef9203 from "../../../../../_runtime/metro/09203__.js";
import _modDef9271 from "../../../../../_runtime/metro/09271__.js";
import _modDef10020 from "../../../../../_runtime/metro/10020__.js";
import _modDef10024 from "../../../../../_runtime/metro/10024__.js";
import _modDef10025 from "../../../../../_runtime/metro/10025__.js";
import _modDef10026 from "../../../../../_runtime/metro/10026__.js";
import _modDef10027 from "../../../../../_runtime/metro/10027__.js";
import _modDef10028 from "../../../../../_runtime/metro/10028__.js";
import ImageButton from "../../../../design/components/Button/native/ImageButton.native.tsx";
import _modDef10793 from "../../../../../_runtime/metro/10793__.js";
import ToggleButton from "../../../../design/components/Button/native/ToggleButton.native.tsx";
import useToggleButtonProps from "../../../../design/components/Button/native/useToggleButtonProps.native.tsx";
import ToggleIconButton from "../../../../design/components/Button/native/ToggleIconButton.native.tsx";
import useDesignSystemSettingsStateDefault from "useDesignSystemSettingsState.tsx";
import _modDef15878 from "../../../../../_runtime/metro/15878__.js";
import _slicedToArray from "../../../../../_runtime/metro/00032__.js";
import noop from "../../../../../_runtime/metro/00019__.js";

const require = globalThis.__r;

require = fn;
function ExampleButton(arg0) {
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
    tmpResult = _modDef15878;
  }
  obj.icon = tmpResult;
  obj.iconPosition = iconPosition;
  obj.scaleAmountInPx = buttonScale;
  return closure_1_10(components_Button_Button.Button, obj);
}
function ExampleIconButton(arg0) {
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
    obj2.icon = _modDef7491;
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
    obj.icon = _modDef7491;
  }
  return closure_1_10(IconButton.IconButton, obj);
}
function ExampleImageButton(arg0) {
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
  return closure_1_10(ImageButton.ImageButton, obj);
}
function ExampleToggleButton() {
  [pressed, closure_1] = noop.useState(false);
  return closure_1_10(ToggleButton.ToggleButton, {
    text: "Notifications",
    icon: _modDef8065,
    pressed,
    onPress() {
      return closure_1(!first);
    },
    size: "md"
  });
}
function ExampleToggleIconButton(variant) {
  variant = variant.variant;
  pressed = undefined;
  closure_1 = undefined;
  [pressed, closure_1] = noop.useState(false);
  return closure_1_10(ToggleIconButton.ToggleIconButton, {
    accessibilityLabel: "" + variant + " notifications",
    icon: _modDef8065,
    selectedIcon: _modDef9203,
    pressed,
    onPress() {
      return closure_1(!first);
    },
    variant,
    size: "md"
  });
}
function ExampleCustomIconToggleButton() {
  [first, closure_1] = noop.useState(false);
  const obj2 = { on: null, off: null };
  const obj = useToggleButtonProps;
  obj2.on = { variant: "destructive", accessibilityLabel: "Mute", icon: _modDef9271 };
  const obj3 = { variant: "destructive", accessibilityLabel: "Mute", icon: _modDef9271 };
  obj2.off = { variant: "secondary", accessibilityLabel: "Mute", icon: _modDef9271 };
  const toggleIconButtonProps = obj.useToggleIconButtonProps(obj2, first);
  const obj5 = {};
  const merged = Object.assign(toggleIconButtonProps);
  obj5.onPress = function onPress() {
    closure_1(!first);
  };
  obj5.size = "md";
  return closure_1_10(IconButton.IconButton, obj5);
}
get_ActivityIndicator = fn(17);
({ View: hasOwnProperty, ScrollView: metroRequire } = get_ActivityIndicator);
const ThemeTypes = fn(1074).ThemeTypes;
const ClientThemesConstants = fn(1229);
({ LIGHT_BACKGROUND_GRADIENT_PRESETS: closure_8, DARK_BACKGROUND_GRADIENT_PRESETS: closure_9 } = ClientThemesConstants);
const jsxProd = fn(21);
({ jsx: c10, jsxs: closure_11, Fragment: closure_12 } = jsxProd);
let closure_13 = ["primary", "secondary", "tertiary"];
let closure_14 = ["primary-overlay", "secondary-overlay"];
let closure_15 = ["destructive", "active"];
let closure_16 = ["expressive"];
let closure_17 = ["experimental_premium-primary", "experimental_premium-secondary"];
const createStyles = fn(4638);
let obj2 = { container: { paddingHorizontal: nativeDefault.space.PX_16 }, buttonContainer: null, toggleIconButtonRow: null, overlayButtonContainer: null };
let obj3 = { paddingHorizontal: nativeDefault.space.PX_16 };
obj2.buttonContainer = { paddingHorizontal: nativeDefault.space.PX_16, paddingVertical: nativeDefault.space.PX_8 };
let obj4 = { paddingHorizontal: nativeDefault.space.PX_16, paddingVertical: nativeDefault.space.PX_8 };
obj2.toggleIconButtonRow = { flexDirection: "row", gap: nativeDefault.space.PX_16 };
let obj5 = { flexDirection: "row", gap: nativeDefault.space.PX_16 };
obj2.overlayButtonContainer = { backgroundColor: nativeDefault.unsafe_rawColors.BG_GRADIENT_CHROMA_GLOW_1, paddingVertical: nativeDefault.space.PX_48 };
let closure_24 = createStyles.createStyles(obj2);
const size = fn(2);
const result = size.fileFinishedImporting("modules/user_settings/design_system/native/UserSettingsDesignSystemButton.tsx");

export default function UserSettingsDesignSystemButton() {
  const tmp = closure_24();
  _require = tmp;
  const navigation = require("useNavigation").useNavigation();
  importDefault = noop.useCallback(() => {
    onPress(paths[21]).openLazy(closure_0(paths[23])(paths[22], paths.paths), "UserSettingsDesignSystemButtonActionSheet");
  }, []);
  navigation.setOptions({
    headerRight() {
      return closure_2_10(IconButton.IconButton, { onPress, icon: _modDef7491, size: "sm", variant: "secondary", accessibilityLabel: "Settings" });
    }
  });
  const obj3 = { children: null };
  const obj4 = { children: null };
  const obj5 = { spacing: 24, children: null };
  const obj6 = { children: null };
  let obj = require("useNavigation");
  const obj2 = {
    headerRight() {
      return closure_2_10(IconButton.IconButton, { onPress, icon: _modDef7491, size: "sm", variant: "secondary", accessibilityLabel: "Settings" });
    }
  };
  let items = [closure_10(require("Stack/Stack").Stack, { style: tmp.container, children: closure_10(require("Text/Text").Text, { variant: "heading-lg/bold", children: "Hierarchical buttons" }) }), ];
  const obj7 = { style: tmp.container, children: closure_10(require("Text/Text").Text, { variant: "heading-lg/bold", children: "Hierarchical buttons" }) };
  items[1] = closure_10(closure_5, {
    children: closure_13.map((variant) => {
      const obj = { style: closure_0.buttonContainer, children: closure_2_10(ExampleButton, { variant }) };
      return closure_2_10(hasOwnProperty, obj, variant);
    })
  });
  obj6.children = items;
  const items1 = [closure_11(require("Stack/Stack").Stack, obj6), , , , , , , , , , , , , , , , , , , ];
  const obj9 = { children: null };
  const obj8 = {
    children: closure_13.map((variant) => {
      const obj = { style: closure_0.buttonContainer, children: closure_2_10(ExampleButton, { variant }) };
      return closure_2_10(hasOwnProperty, obj, variant);
    })
  };
  const items2 = [closure_10(require("Stack/Stack").Stack, { style: tmp.container, children: closure_10(require("Text/Text").Text, { variant: "heading-lg/bold", children: "Sentiment buttons" }) }), ];
  const obj10 = { style: tmp.container, children: closure_10(require("Text/Text").Text, { variant: "heading-lg/bold", children: "Sentiment buttons" }) };
  items2[1] = closure_10(closure_5, {
    children: closure_15.map((variant) => {
      const obj = { style: closure_0.buttonContainer, children: closure_2_10(ExampleButton, { variant }) };
      return closure_2_10(hasOwnProperty, obj, variant);
    })
  });
  obj9.children = items2;
  items1[1] = closure_11(require("Stack/Stack").Stack, obj9);
  const obj12 = { children: null };
  const obj11 = {
    children: closure_15.map((variant) => {
      const obj = { style: closure_0.buttonContainer, children: closure_2_10(ExampleButton, { variant }) };
      return closure_2_10(hasOwnProperty, obj, variant);
    })
  };
  const items3 = [closure_10(require("Stack/Stack").Stack, { style: tmp.container, children: closure_10(require("Text/Text").Text, { variant: "heading-lg/bold", children: "Expressive buttons" }) }), ];
  const obj13 = { style: tmp.container, children: closure_10(require("Text/Text").Text, { variant: "heading-lg/bold", children: "Expressive buttons" }) };
  items3[1] = closure_10(closure_5, {
    children: closure_16.map((variant) => {
      const obj = { style: closure_0.buttonContainer, children: closure_2_10(ExampleButton, { variant }) };
      return closure_2_10(hasOwnProperty, obj, variant);
    })
  });
  obj12.children = items3;
  items1[2] = closure_11(require("Stack/Stack").Stack, obj12);
  const obj15 = { children: null };
  const obj14 = {
    children: closure_16.map((variant) => {
      const obj = { style: closure_0.buttonContainer, children: closure_2_10(ExampleButton, { variant }) };
      return closure_2_10(hasOwnProperty, obj, variant);
    })
  };
  const items4 = [closure_10(require("Stack/Stack").Stack, { style: tmp.container, children: closure_10(require("Text/Text").Text, { variant: "heading-lg/bold", children: "Experimental premium buttons" }) }), ];
  const obj16 = { style: tmp.container, children: closure_10(require("Text/Text").Text, { variant: "heading-lg/bold", children: "Experimental premium buttons" }) };
  items4[1] = closure_10(closure_5, {
    children: closure_17.map((variant) => {
      const obj = { style: closure_0.buttonContainer, children: closure_2_10(ExampleButton, { variant }) };
      return closure_2_10(hasOwnProperty, obj, variant);
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
      const obj = { style: closure_0.buttonContainer, children: closure_2_10(ExampleButton, { variant }) };
      return closure_2_10(hasOwnProperty, obj, variant);
    })
  };
  items6[1] = closure_10(closure_5, {
    children: closure_14.map((variant) => {
      const obj = { style: null, children: closure_2_10(ExampleButton, { variant }) };
      const items = [, ];
      ({ buttonContainer: arr[0], overlayButtonContainer: arr[1] } = closure_0);
      obj.style = items;
      return closure_2_10(hasOwnProperty, obj, variant);
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
      const obj = { style: null, children: closure_2_10(ExampleButton, { variant }) };
      const items = [, ];
      ({ buttonContainer: arr[0], overlayButtonContainer: arr[1] } = closure_0);
      obj.style = items;
      return closure_2_10(hasOwnProperty, obj, variant);
    })
  };
  obj25.icon = closure_10(require("components/Button/Button").Button.Icon, { source: _modDef10793 });
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
  const obj26 = { source: _modDef10793 };
  obj28.icon = closure_10(require("components/Button/Button").Button.Icon, { variant: "entity", source: _modDef10020 });
  obj27.children = closure_10(require("components/Button/Button").Button, obj28);
  items9[1] = closure_10(closure_5, obj27);
  obj23.children = items9;
  items8[1] = closure_11(closure_5, obj23);
  obj21.children = items8;
  items1[5] = closure_11(require("Stack/Stack").Stack, obj21);
  const obj30 = { children: null };
  const obj29 = { variant: "entity", source: _modDef10020 };
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
    icon: _modDef10793
  });
  const items11 = [closure_10(closure_5, obj33), , , ];
  const obj35 = { style: tmp.buttonContainer, children: null };
  const obj34 = {
    onPress() {

    },
    variant: "secondary",
    text: "Neque porro quisquam est qui dolorem ipsum quia dolor sit amet, consectetur",
    size: "md",
    icon: _modDef10793
  };
  obj35.children = closure_10(require("components/Button/Button").Button, {
    onPress() {

    },
    variant: "secondary",
    text: "Neque porro quisquam est qui dolorem ipsum quia dolor sit amet, consectetur",
    size: "md",
    icon: _modDef10793,
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
    icon: _modDef10793,
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
  const items14 = [closure_10(closure_5, { style: tmp.buttonContainer, children: closure_10(ExampleToggleButton, {}) }), , ];
  const obj45 = { style: null, children: null };
  const items15 = [, ];
  ({ buttonContainer: arr16[0], toggleIconButtonRow: arr16[1] } = tmp);
  obj45.style = items15;
  const items16 = [closure_10(ExampleToggleIconButton, { variant: "default" }), closure_10(ExampleToggleIconButton, { variant: "critical" }), closure_10(ExampleToggleIconButton, { variant: "icon-only" })];
  obj45.children = items16;
  items14[1] = closure_11(closure_5, obj45);
  const obj44 = { style: tmp.buttonContainer, children: closure_10(ExampleToggleButton, {}) };
  items14[2] = closure_10(closure_5, { style: tmp.buttonContainer, children: closure_10(ExampleCustomIconToggleButton, {}) });
  obj43.children = items14;
  items13[1] = closure_11(closure_5, obj43);
  obj41.children = items13;
  items1[7] = closure_11(require("Stack/Stack").Stack, obj41);
  const obj47 = { children: null };
  const obj48 = { style: tmp.container, children: null };
  const items17 = [closure_10(require("Text/Text").Text, { variant: "heading-lg/bold", children: "Hierarchical icon buttons" }), closure_10(require("Text/Text").Text, { variant: "text-sm/normal", children: "While the primary variants of IconButton are supported, these should be used very rarely." }), closure_10(require("Text/Text").Text, { variant: "text-sm/normal", children: "An icon button usually has a secondary function and should use the secondary variants." })];
  obj48.children = items17;
  const items18 = [closure_11(require("Stack/Stack").Stack, obj48), ];
  const obj46 = { style: tmp.buttonContainer, children: closure_10(ExampleCustomIconToggleButton, {}) };
  items18[1] = closure_10(closure_5, {
    children: closure_13.map((variant) => {
      const obj = { style: closure_0.buttonContainer, children: closure_2_10(ExampleIconButton, { variant }) };
      return closure_2_10(hasOwnProperty, obj, variant);
    })
  });
  obj47.children = items18;
  items1[8] = closure_11(require("Stack/Stack").Stack, obj47);
  const obj50 = { children: null };
  const obj49 = {
    children: closure_13.map((variant) => {
      const obj = { style: closure_0.buttonContainer, children: closure_2_10(ExampleIconButton, { variant }) };
      return closure_2_10(hasOwnProperty, obj, variant);
    })
  };
  const items19 = [closure_10(require("Stack/Stack").Stack, { style: tmp.container, children: closure_10(require("Text/Text").Text, { variant: "heading-lg/bold", children: "Sentiment icon buttons" }) }), ];
  const obj51 = { style: tmp.container, children: closure_10(require("Text/Text").Text, { variant: "heading-lg/bold", children: "Sentiment icon buttons" }) };
  items19[1] = closure_10(closure_5, {
    children: closure_15.map((variant) => {
      const obj = { style: closure_0.buttonContainer, children: closure_2_10(ExampleIconButton, { variant }) };
      return closure_2_10(hasOwnProperty, obj, variant);
    })
  });
  obj50.children = items19;
  items1[9] = closure_11(require("Stack/Stack").Stack, obj50);
  const obj53 = { children: null };
  const obj52 = {
    children: closure_15.map((variant) => {
      const obj = { style: closure_0.buttonContainer, children: closure_2_10(ExampleIconButton, { variant }) };
      return closure_2_10(hasOwnProperty, obj, variant);
    })
  };
  const items20 = [closure_10(require("Stack/Stack").Stack, { style: tmp.container, children: closure_10(require("Text/Text").Text, { variant: "heading-lg/bold", children: "Overlay icon buttons" }) }), ];
  const obj54 = { style: tmp.container, children: closure_10(require("Text/Text").Text, { variant: "heading-lg/bold", children: "Overlay icon buttons" }) };
  items20[1] = closure_10(closure_5, {
    children: closure_14.map((variant) => {
      const obj = { style: null, children: closure_2_10(ExampleIconButton, { variant }) };
      const items = [, ];
      ({ buttonContainer: arr[0], overlayButtonContainer: arr[1] } = closure_0);
      obj.style = items;
      return closure_2_10(hasOwnProperty, obj, variant);
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
      const obj = { style: null, children: closure_2_10(ExampleIconButton, { variant }) };
      const items = [, ];
      ({ buttonContainer: arr[0], overlayButtonContainer: arr[1] } = closure_0);
      obj.style = items;
      return closure_2_10(hasOwnProperty, obj, variant);
    })
  };
  obj59.children = closure_10(ExampleImageButton, { image: _modDef10026, label: "Telegram" });
  const items24 = [closure_10(closure_5, obj59), , ];
  const obj61 = { style: null, children: null };
  const items25 = [tmp.buttonContainer];
  obj61.style = items25;
  const obj60 = { image: _modDef10026, label: "Telegram" };
  obj61.children = closure_10(ExampleImageButton, { image: _modDef10028, label: "WhatsApp" });
  items24[1] = closure_10(closure_5, obj61);
  const obj63 = { style: null, children: null };
  const items26 = [tmp.buttonContainer];
  obj63.style = items26;
  const obj62 = { image: _modDef10028, label: "WhatsApp" };
  obj63.children = closure_10(ExampleImageButton, { image: _modDef10027, label: "Twitter" });
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
  const obj64 = { image: _modDef10027, label: "Twitter" };
  obj67.children = closure_10(require("Stack/Stack").Stack, { direction: "horizontal", justify: "center", style: tmp.buttonContainer, children: closure_13.map((variant) => closure_1_10(ExampleIconButton, { variant, showLabel: true }, variant)) });
  items28[1] = closure_10(closure_6, obj67);
  const obj69 = { horizontal: true, contentContainerStyle: { minWidth: "100%" }, children: null };
  const obj70 = { direction: "horizontal", justify: "center", style: tmp.buttonContainer, children: null };
  const obj68 = { direction: "horizontal", justify: "center", style: tmp.buttonContainer, children: closure_13.map((variant) => closure_1_10(ExampleIconButton, { variant, showLabel: true }, variant)) };
  const items29 = [
    closure_10(require("IconButton").IconButton, {
      variant: "secondary",
      icon: _modDef7491,
      label: "Supercalifragilisticexpialidocious",
      grow: true,
      onPress() {

      }
    }),
  ,

  ];
  const obj71 = {
    variant: "secondary",
    icon: _modDef7491,
    label: "Supercalifragilisticexpialidocious",
    grow: true,
    onPress() {

    }
  };
  items29[1] = closure_10(require("IconButton").IconButton, {
    variant: "secondary",
    icon: _modDef7491,
    label: "Supercalifragilisticexpialidocious",
    grow: true,
    onPress() {

    }
  });
  const obj72 = {
    variant: "secondary",
    icon: _modDef7491,
    label: "Supercalifragilisticexpialidocious",
    grow: true,
    onPress() {

    }
  };
  items29[2] = closure_10(require("IconButton").IconButton, {
    variant: "secondary",
    icon: _modDef7491,
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
    icon: _modDef7491,
    label: "Supercalifragilisticexpialidocious",
    grow: true,
    onPress() {

    }
  };
  const items30 = [closure_10(require("Stack/Stack").Stack, { style: tmp.container, children: closure_10(require("Text/Text").Text, { variant: "heading-lg/bold", children: "ImageButton with a label" }) }), , ];
  const obj76 = { horizontal: true, contentContainerStyle: { minWidth: "100%" }, children: null };
  const obj77 = { direction: "horizontal", justify: "center", style: tmp.buttonContainer, children: null };
  const obj75 = { style: tmp.container, children: closure_10(require("Text/Text").Text, { variant: "heading-lg/bold", children: "ImageButton with a label" }) };
  const items31 = [closure_10(ExampleImageButton, { image: _modDef10025, label: "Label", showLabel: true }), , ];
  const obj78 = { image: _modDef10025, label: "Label", showLabel: true };
  items31[1] = closure_10(ExampleImageButton, { image: _modDef10020, label: "Label", showLabel: true });
  const obj79 = { image: _modDef10020, label: "Label", showLabel: true };
  items31[2] = closure_10(ExampleImageButton, { image: _modDef10024, label: "Label", showLabel: true });
  obj77.children = items31;
  obj76.children = closure_11(require("Stack/Stack").Stack, obj77);
  items30[1] = closure_10(closure_6, obj76);
  const obj81 = { horizontal: true, contentContainerStyle: { minWidth: "100%" }, children: null };
  const obj82 = { direction: "horizontal", justify: "center", style: tmp.buttonContainer, children: null };
  const obj80 = { image: _modDef10024, label: "Label", showLabel: true };
  const items32 = [closure_10(ExampleImageButton, { image: _modDef10026, label: "Supercalifragilisticexpialidocious", showLabel: true }), , ];
  const obj83 = { image: _modDef10026, label: "Supercalifragilisticexpialidocious", showLabel: true };
  items32[1] = closure_10(ExampleImageButton, { image: _modDef10028, label: "Supercalifragilisticexpialidocious", showLabel: true });
  const obj84 = { image: _modDef10028, label: "Supercalifragilisticexpialidocious", showLabel: true };
  items32[2] = closure_10(ExampleImageButton, { image: _modDef10027, label: "Supercalifragilisticexpialidocious", showLabel: true });
  obj82.children = items32;
  obj81.children = closure_11(require("Stack/Stack").Stack, obj82);
  items30[2] = closure_10(closure_6, obj81);
  obj74.children = items30;
  items1[13] = closure_11(require("Stack/Stack").Stack, obj74);
  const obj86 = { spacing: 24, children: null };
  const obj85 = { image: _modDef10027, label: "Supercalifragilisticexpialidocious", showLabel: true };
  const items33 = [closure_10(require("Stack/Stack").Stack, { style: tmp.container, children: closure_10(require("Text/Text").Text, { variant: "heading-lg/bold", children: "Mixing buttons" }) }), ];
  const obj88 = { direction: "horizontal", style: tmp.container, children: null };
  const items34 = [closure_10(ExampleButton, { variant: "secondary", text: "Search", grow: true }), closure_10(ExampleIconButton, { variant: "secondary" })];
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
  const items37 = [closure_13.map((variant) => closure_1_10(ExampleButton, { variant }, variant)), closure_15.map((variant) => closure_1_10(ExampleButton, { variant }, variant))];
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
  const items40 = [closure_13.map((variant) => closure_1_10(ExampleButton, { variant }, variant)), closure_15.map((variant) => closure_1_10(ExampleButton, { variant }, variant))];
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
  const items44 = [closure_13.map((variant) => closure_1_10(ExampleButton, { variant }, variant)), closure_15.map((variant) => closure_1_10(ExampleButton, { variant }, variant))];
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
  const items48 = [closure_13.map((variant) => closure_1_10(ExampleButton, { variant }, variant)), closure_15.map((variant) => closure_1_10(ExampleButton, { variant }, variant))];
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
    icon: _modDef7491,
    onPress() {

    },
    positionBottom: 32,
    accessibilityLabel: "Floating Action Button"
  });
  obj3.children = items51;
  return closure_11(closure_12, obj3);
};