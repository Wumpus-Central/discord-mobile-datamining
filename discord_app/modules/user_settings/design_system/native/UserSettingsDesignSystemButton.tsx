// discord_app/modules/user_settings/design_system/native/UserSettingsDesignSystemButton.tsx
import nativeDefault from "../../../../../discord_common/js/packages/tokens/native.tsx";
import components_Button_Button from "../../../../design/components/Button/native/Button.native.tsx";
import LinearGradientDefault from "../../../../../_runtime/05068_LinearGradient.js";
import _modDef7484 from "../../../../../_runtime/metro/07484__.js";
import _modDef8053 from "../../../../../_runtime/metro/08053__.js";
import IconButton from "../../../../design/components/Button/native/IconButton.native.tsx";
import _modDef9189 from "../../../../../_runtime/metro/09189__.js";
import _modDef9257 from "../../../../../_runtime/metro/09257__.js";
import _modDef10010 from "../../../../../_runtime/metro/10010__.js";
import _modDef10014 from "../../../../../_runtime/metro/10014__.js";
import _modDef10015 from "../../../../../_runtime/metro/10015__.js";
import _modDef10016 from "../../../../../_runtime/metro/10016__.js";
import _modDef10017 from "../../../../../_runtime/metro/10017__.js";
import _modDef10018 from "../../../../../_runtime/metro/10018__.js";
import ImageButton from "../../../../design/components/Button/native/ImageButton.native.tsx";
import _modDef10780 from "../../../../../_runtime/metro/10780__.js";
import ToggleButton from "../../../../design/components/Button/native/ToggleButton.native.tsx";
import useToggleButtonProps from "../../../../design/components/Button/native/useToggleButtonProps.native.tsx";
import ToggleIconButton from "../../../../design/components/Button/native/ToggleIconButton.native.tsx";
import useDesignSystemSettingsStateDefault from "useDesignSystemSettingsState.tsx";
import _modDef15847 from "../../../../../_runtime/metro/15847__.js";
import _slicedToArray from "../../../../../_runtime/metro/00032__.js";
import noop from "../../../../../_runtime/metro/00019__.js";

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
    tmpResult = _modDef15847;
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
  [tmp5, c2] = _slicedToArray(noop.useState(false), 2);
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
    let obj = {
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
    obj.label = str2;
    obj.loading = tmp5;
    obj.variant = variant;
    obj.icon = _modDef7484;
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
    obj.icon = _modDef7484;
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
  [tmp3, c2] = _slicedToArray(noop.useState(false), 2);
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
    let obj = {
      disabled: showDisabled,
      onPress() {
          return closure_3();
        },
      label,
      grow: true,
      loading: tmp3,
      image
    };
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
  const tmp = _slicedToArray(noop.useState(false), 2);
  const pressed = tmp[0];
  closure_1 = tmp[1];
  return closure_1_10(ToggleButton.ToggleButton, {
    text: "Notifications",
    icon: _modDef8053,
    pressed,
    onPress() {
      return closure_1(!first);
    },
    size: "md"
  });
}
function ExampleToggleIconButton(variant) {
  variant = variant.variant;
  const tmp = _slicedToArray(noop.useState(false), 2);
  const pressed = tmp[0];
  closure_1 = tmp[1];
  return closure_1_10(ToggleIconButton.ToggleIconButton, {
    accessibilityLabel: "" + variant + " notifications",
    icon: _modDef8053,
    selectedIcon: _modDef9189,
    pressed,
    onPress() {
      return closure_1(!first);
    },
    variant,
    size: "md"
  });
}
function ExampleCustomIconToggleButton() {
  const tmp = _slicedToArray(noop.useState(false), 2);
  const first = tmp[0];
  closure_1 = tmp[1];
  let obj = { on: null, off: null };
  obj = { variant: "destructive", accessibilityLabel: "Mute", icon: _modDef9257 };
  obj.on = obj;
  obj.off = { variant: "secondary", accessibilityLabel: "Mute", icon: _modDef9257 };
  const toggleIconButtonProps = obj.useToggleIconButtonProps(obj, first);
  const obj2 = {};
  const merged = Object.assign(toggleIconButtonProps);
  obj2.onPress = function onPress() {
    closure_1(!first);
  };
  obj2.size = "md";
  return closure_1_10(IconButton.IconButton, obj2);
}
get_ActivityIndicator = fn(17);
({ View: hasOwnProperty, ScrollView: metroRequire } = get_ActivityIndicator);
const ThemeTypes = fn(1074).ThemeTypes;
const ClientThemesConstants = fn(1230);
({ LIGHT_BACKGROUND_GRADIENT_PRESETS: closure_8, DARK_BACKGROUND_GRADIENT_PRESETS: closure_9 } = ClientThemesConstants);
const jsxProd = fn(21);
({ jsx: c10, jsxs: closure_11, Fragment: closure_12 } = jsxProd);
let closure_13 = ["primary", "secondary", "tertiary"];
let closure_14 = ["primary-overlay", "secondary-overlay"];
let closure_15 = ["destructive", "active"];
let closure_16 = ["expressive"];
let closure_17 = ["experimental_premium-primary", "experimental_premium-secondary"];
fn(4636);
let createStyles = { container: null, buttonContainer: null, toggleIconButtonRow: null, overlayButtonContainer: null };
createStyles = { paddingHorizontal: nativeDefault.space.PX_16 };
createStyles.container = createStyles;
createStyles.buttonContainer = { paddingHorizontal: nativeDefault.space.PX_16, paddingVertical: nativeDefault.space.PX_8 };
let obj1 = { paddingHorizontal: nativeDefault.space.PX_16, paddingVertical: nativeDefault.space.PX_8 };
createStyles.toggleIconButtonRow = { flexDirection: "row", gap: nativeDefault.space.PX_16 };
let obj2 = { flexDirection: "row", gap: nativeDefault.space.PX_16 };
createStyles.overlayButtonContainer = { backgroundColor: nativeDefault.unsafe_rawColors.BG_GRADIENT_CHROMA_GLOW_1, paddingVertical: nativeDefault.space.PX_48 };
let closure_24 = createStyles.createStyles(createStyles);
const size = fn(2);
const result = size.fileFinishedImporting("modules/user_settings/design_system/native/UserSettingsDesignSystemButton.tsx");

export default function UserSettingsDesignSystemButton() {
  const tmp = closure_24();
  _require = tmp;
  let obj = require("useNavigation");
  const navigation = obj.useNavigation();
  importDefault = noop.useCallback(() => {
    onPress(paths[21]).openLazy(closure_0(paths[23])(paths[22], paths.paths), "UserSettingsDesignSystemButtonActionSheet");
  }, []);
  obj = {
    headerRight() {
      return closure_2_10(IconButton.IconButton, { onPress, icon: _modDef7484, size: "sm", variant: "secondary", accessibilityLabel: "Settings" });
    }
  };
  navigation.setOptions(obj);
  obj = { children: null };
  const obj1 = { children: null };
  const obj2 = { spacing: 24, children: null };
  const obj3 = { children: null };
  let items = [closure_10(require("Stack/Stack").Stack, { style: tmp.container, children: closure_10(require("Text/Text").Text, { variant: "heading-lg/bold", children: "Hierarchical buttons" }) }), ];
  const obj4 = { style: tmp.container, children: closure_10(require("Text/Text").Text, { variant: "heading-lg/bold", children: "Hierarchical buttons" }) };
  items[1] = closure_10(closure_5, {
    children: closure_13.map((variant) => {
      let obj = { style: closure_0.buttonContainer, children: null };
      obj = { variant };
      obj.children = closure_2_10(ExampleButton, obj);
      return closure_2_10(hasOwnProperty, obj, variant);
    })
  });
  obj3.children = items;
  const items1 = [closure_11(require("Stack/Stack").Stack, obj3), , , , , , , , , , , , , , , , , , , ];
  const obj6 = { children: null };
  const obj5 = {
    children: closure_13.map((variant) => {
      let obj = { style: closure_0.buttonContainer, children: null };
      obj = { variant };
      obj.children = closure_2_10(ExampleButton, obj);
      return closure_2_10(hasOwnProperty, obj, variant);
    })
  };
  const items2 = [closure_10(require("Stack/Stack").Stack, { style: tmp.container, children: closure_10(require("Text/Text").Text, { variant: "heading-lg/bold", children: "Sentiment buttons" }) }), ];
  const obj7 = { style: tmp.container, children: closure_10(require("Text/Text").Text, { variant: "heading-lg/bold", children: "Sentiment buttons" }) };
  items2[1] = closure_10(closure_5, {
    children: closure_15.map((variant) => {
      let obj = { style: closure_0.buttonContainer, children: null };
      obj = { variant };
      obj.children = closure_2_10(ExampleButton, obj);
      return closure_2_10(hasOwnProperty, obj, variant);
    })
  });
  obj6.children = items2;
  items1[1] = closure_11(require("Stack/Stack").Stack, obj6);
  const obj9 = { children: null };
  const obj8 = {
    children: closure_15.map((variant) => {
      let obj = { style: closure_0.buttonContainer, children: null };
      obj = { variant };
      obj.children = closure_2_10(ExampleButton, obj);
      return closure_2_10(hasOwnProperty, obj, variant);
    })
  };
  const items3 = [closure_10(require("Stack/Stack").Stack, { style: tmp.container, children: closure_10(require("Text/Text").Text, { variant: "heading-lg/bold", children: "Expressive buttons" }) }), ];
  const obj10 = { style: tmp.container, children: closure_10(require("Text/Text").Text, { variant: "heading-lg/bold", children: "Expressive buttons" }) };
  items3[1] = closure_10(closure_5, {
    children: closure_16.map((variant) => {
      let obj = { style: closure_0.buttonContainer, children: null };
      obj = { variant };
      obj.children = closure_2_10(ExampleButton, obj);
      return closure_2_10(hasOwnProperty, obj, variant);
    })
  });
  obj9.children = items3;
  items1[2] = closure_11(require("Stack/Stack").Stack, obj9);
  const obj12 = { children: null };
  const obj11 = {
    children: closure_16.map((variant) => {
      let obj = { style: closure_0.buttonContainer, children: null };
      obj = { variant };
      obj.children = closure_2_10(ExampleButton, obj);
      return closure_2_10(hasOwnProperty, obj, variant);
    })
  };
  const items4 = [closure_10(require("Stack/Stack").Stack, { style: tmp.container, children: closure_10(require("Text/Text").Text, { variant: "heading-lg/bold", children: "Experimental premium buttons" }) }), ];
  const obj13 = { style: tmp.container, children: closure_10(require("Text/Text").Text, { variant: "heading-lg/bold", children: "Experimental premium buttons" }) };
  items4[1] = closure_10(closure_5, {
    children: closure_17.map((variant) => {
      let obj = { style: closure_0.buttonContainer, children: null };
      obj = { variant };
      obj.children = closure_2_10(ExampleButton, obj);
      return closure_2_10(hasOwnProperty, obj, variant);
    })
  });
  obj12.children = items4;
  items1[3] = closure_11(require("Stack/Stack").Stack, obj12);
  const obj15 = { children: null };
  const obj16 = { style: tmp.container, children: null };
  const items5 = [closure_10(require("Text/Text").Text, { variant: "heading-lg/bold", children: "Overlay buttons" }), closure_10(require("Text/Text").Text, { variant: "text-sm/normal", children: "Overlay buttons are meant to be used overlayed on top of an image or background color. They do not change colors with the theme." })];
  obj16.children = items5;
  const items6 = [closure_11(require("Stack/Stack").Stack, obj16), ];
  const obj14 = {
    children: closure_17.map((variant) => {
      let obj = { style: closure_0.buttonContainer, children: null };
      obj = { variant };
      obj.children = closure_2_10(ExampleButton, obj);
      return closure_2_10(hasOwnProperty, obj, variant);
    })
  };
  items6[1] = closure_10(closure_5, {
    children: closure_14.map((variant) => {
      let obj = { style: null, children: null };
      const items = [, ];
      ({ buttonContainer: arr[0], overlayButtonContainer: arr[1] } = closure_0);
      obj.style = items;
      obj = { variant };
      obj.children = closure_2_10(ExampleButton, obj);
      return closure_2_10(hasOwnProperty, obj, variant);
    })
  });
  obj15.children = items6;
  items1[4] = closure_11(require("Stack/Stack").Stack, obj15);
  const obj18 = { children: null };
  const obj19 = { style: tmp.container, children: null };
  const items7 = [closure_10(require("Text/Text").Text, { variant: "heading-lg/bold", children: "Custom color icons" }), closure_10(require("Text/Text").Text, { variant: "text-sm/normal", children: "If a button needs to have an icon which has its own custom color, then create your own Button.Icon to pass as the icon prop." })];
  obj19.children = items7;
  const items8 = [closure_11(require("Stack/Stack").Stack, obj19), ];
  const obj20 = { children: null };
  const obj21 = { style: tmp.buttonContainer, children: null };
  const obj22 = {
    onPress() {

    },
    variant: "secondary",
    text: "Button with a custom color icon",
    size: "md",
    icon: null
  };
  const obj17 = {
    children: closure_14.map((variant) => {
      let obj = { style: null, children: null };
      const items = [, ];
      ({ buttonContainer: arr[0], overlayButtonContainer: arr[1] } = closure_0);
      obj.style = items;
      obj = { variant };
      obj.children = closure_2_10(ExampleButton, obj);
      return closure_2_10(hasOwnProperty, obj, variant);
    })
  };
  obj22.icon = closure_10(require("components/Button/Button").Button.Icon, { source: _modDef10780 });
  obj21.children = closure_10(require("components/Button/Button").Button, obj22);
  const items9 = [closure_10(closure_5, obj21), ];
  const obj24 = { style: tmp.buttonContainer, children: null };
  const obj25 = {
    onPress() {

    },
    variant: "secondary",
    text: "Button with a entity variant icon",
    size: "md",
    icon: null
  };
  const obj23 = { source: _modDef10780 };
  obj25.icon = closure_10(require("components/Button/Button").Button.Icon, { variant: "entity", source: _modDef10010 });
  obj24.children = closure_10(require("components/Button/Button").Button, obj25);
  items9[1] = closure_10(closure_5, obj24);
  obj20.children = items9;
  items8[1] = closure_11(closure_5, obj20);
  obj18.children = items8;
  items1[5] = closure_11(require("Stack/Stack").Stack, obj18);
  const obj27 = { children: null };
  const obj26 = { variant: "entity", source: _modDef10010 };
  const items10 = [closure_10(require("Stack/Stack").Stack, { style: tmp.container, children: closure_10(require("Text/Text").Text, { variant: "heading-lg/bold", children: "Buttons with various text lengths" }) }), ];
  const obj29 = { children: null };
  const obj30 = { style: tmp.buttonContainer, children: null };
  const obj28 = { style: tmp.container, children: closure_10(require("Text/Text").Text, { variant: "heading-lg/bold", children: "Buttons with various text lengths" }) };
  obj30.children = closure_10(require("components/Button/Button").Button, {
    onPress() {

    },
    variant: "secondary",
    text: "Neque porro quisquam est qui dolorem ipsum quia dolor sit amet, consectetur",
    size: "md",
    icon: _modDef10780
  });
  const items11 = [closure_10(closure_5, obj30), , , ];
  const obj32 = { style: tmp.buttonContainer, children: null };
  const obj31 = {
    onPress() {

    },
    variant: "secondary",
    text: "Neque porro quisquam est qui dolorem ipsum quia dolor sit amet, consectetur",
    size: "md",
    icon: _modDef10780
  };
  obj32.children = closure_10(require("components/Button/Button").Button, {
    onPress() {

    },
    variant: "secondary",
    text: "Neque porro quisquam est qui dolorem ipsum quia dolor sit amet, consectetur",
    size: "md",
    icon: _modDef10780,
    iconPosition: "end"
  });
  items11[1] = closure_10(closure_5, obj32);
  const obj34 = {
    style: tmp.buttonContainer,
    children: closure_10(require("components/Button/Button").Button, {
      onPress() {

      },
      variant: "secondary",
      text: "Neque porro quisquam est qui dolorem ipsum quia dolor sit amet, consectetur",
      size: "md"
    })
  };
  items11[2] = closure_10(closure_5, obj34);
  const obj36 = {
    style: tmp.buttonContainer,
    children: closure_10(require("components/Button/Button").Button, {
      onPress() {

      },
      variant: "secondary",
      text: "A",
      size: "md"
    })
  };
  items11[3] = closure_10(closure_5, obj36);
  obj29.children = items11;
  items10[1] = closure_11(closure_5, obj29);
  obj27.children = items10;
  items1[6] = closure_11(require("Stack/Stack").Stack, obj27);
  const obj38 = { children: null };
  const obj39 = { style: tmp.container, children: null };
  const items12 = [closure_10(require("Text/Text").Text, { variant: "heading-lg/bold", children: "Toggling button states" }), closure_10(require("Text/Text").Text, { variant: "text-sm/normal", children: "Use ToggleButton for a controlled labeled toggle and ToggleIconButton for a controlled icon-only toggle. Use the lower-level toggle prop hooks when a custom control needs complete prop bags per state." }), closure_10(require("Text/Text").Text, { variant: "text-sm/normal", children: "These APIs apply the selected presentation and add the accessibility attributes required for a toggle button." })];
  obj39.children = items12;
  const items13 = [closure_11(require("Stack/Stack").Stack, obj39), ];
  const obj40 = { children: null };
  const obj33 = {
    onPress() {

    },
    variant: "secondary",
    text: "Neque porro quisquam est qui dolorem ipsum quia dolor sit amet, consectetur",
    size: "md",
    icon: _modDef10780,
    iconPosition: "end"
  };
  const obj35 = {
    onPress() {

    },
    variant: "secondary",
    text: "Neque porro quisquam est qui dolorem ipsum quia dolor sit amet, consectetur",
    size: "md"
  };
  const obj37 = {
    onPress() {

    },
    variant: "secondary",
    text: "A",
    size: "md"
  };
  const items14 = [closure_10(closure_5, { style: tmp.buttonContainer, children: closure_10(ExampleToggleButton, {}) }), , ];
  const obj42 = { style: null, children: null };
  const items15 = [, ];
  ({ buttonContainer: arr16[0], toggleIconButtonRow: arr16[1] } = tmp);
  obj42.style = items15;
  const items16 = [closure_10(ExampleToggleIconButton, { variant: "default" }), closure_10(ExampleToggleIconButton, { variant: "critical" }), closure_10(ExampleToggleIconButton, { variant: "icon-only" })];
  obj42.children = items16;
  items14[1] = closure_11(closure_5, obj42);
  const obj41 = { style: tmp.buttonContainer, children: closure_10(ExampleToggleButton, {}) };
  items14[2] = closure_10(closure_5, { style: tmp.buttonContainer, children: closure_10(ExampleCustomIconToggleButton, {}) });
  obj40.children = items14;
  items13[1] = closure_11(closure_5, obj40);
  obj38.children = items13;
  items1[7] = closure_11(require("Stack/Stack").Stack, obj38);
  const obj44 = { children: null };
  const obj45 = { style: tmp.container, children: null };
  const items17 = [closure_10(require("Text/Text").Text, { variant: "heading-lg/bold", children: "Hierarchical icon buttons" }), closure_10(require("Text/Text").Text, { variant: "text-sm/normal", children: "While the primary variants of IconButton are supported, these should be used very rarely." }), closure_10(require("Text/Text").Text, { variant: "text-sm/normal", children: "An icon button usually has a secondary function and should use the secondary variants." })];
  obj45.children = items17;
  const items18 = [closure_11(require("Stack/Stack").Stack, obj45), ];
  const obj43 = { style: tmp.buttonContainer, children: closure_10(ExampleCustomIconToggleButton, {}) };
  items18[1] = closure_10(closure_5, {
    children: closure_13.map((variant) => {
      let obj = { style: closure_0.buttonContainer, children: null };
      obj = { variant };
      obj.children = closure_2_10(ExampleIconButton, obj);
      return closure_2_10(hasOwnProperty, obj, variant);
    })
  });
  obj44.children = items18;
  items1[8] = closure_11(require("Stack/Stack").Stack, obj44);
  const obj47 = { children: null };
  const obj46 = {
    children: closure_13.map((variant) => {
      let obj = { style: closure_0.buttonContainer, children: null };
      obj = { variant };
      obj.children = closure_2_10(ExampleIconButton, obj);
      return closure_2_10(hasOwnProperty, obj, variant);
    })
  };
  const items19 = [closure_10(require("Stack/Stack").Stack, { style: tmp.container, children: closure_10(require("Text/Text").Text, { variant: "heading-lg/bold", children: "Sentiment icon buttons" }) }), ];
  const obj48 = { style: tmp.container, children: closure_10(require("Text/Text").Text, { variant: "heading-lg/bold", children: "Sentiment icon buttons" }) };
  items19[1] = closure_10(closure_5, {
    children: closure_15.map((variant) => {
      let obj = { style: closure_0.buttonContainer, children: null };
      obj = { variant };
      obj.children = closure_2_10(ExampleIconButton, obj);
      return closure_2_10(hasOwnProperty, obj, variant);
    })
  });
  obj47.children = items19;
  items1[9] = closure_11(require("Stack/Stack").Stack, obj47);
  const obj50 = { children: null };
  const obj49 = {
    children: closure_15.map((variant) => {
      let obj = { style: closure_0.buttonContainer, children: null };
      obj = { variant };
      obj.children = closure_2_10(ExampleIconButton, obj);
      return closure_2_10(hasOwnProperty, obj, variant);
    })
  };
  const items20 = [closure_10(require("Stack/Stack").Stack, { style: tmp.container, children: closure_10(require("Text/Text").Text, { variant: "heading-lg/bold", children: "Overlay icon buttons" }) }), ];
  const obj51 = { style: tmp.container, children: closure_10(require("Text/Text").Text, { variant: "heading-lg/bold", children: "Overlay icon buttons" }) };
  items20[1] = closure_10(closure_5, {
    children: closure_14.map((variant) => {
      let obj = { style: null, children: null };
      const items = [, ];
      ({ buttonContainer: arr[0], overlayButtonContainer: arr[1] } = closure_0);
      obj.style = items;
      obj = { variant };
      obj.children = closure_2_10(ExampleIconButton, obj);
      return closure_2_10(hasOwnProperty, obj, variant);
    })
  });
  obj50.children = items20;
  items1[10] = closure_11(require("Stack/Stack").Stack, obj50);
  const obj53 = { children: null };
  const obj54 = { style: tmp.container, children: null };
  const items21 = [closure_10(require("Text/Text").Text, { variant: "heading-lg/bold", children: "Image buttons" }), closure_10(require("Text/Text").Text, { variant: "text-sm/normal", children: "Image buttons are rereserved for more branded buttons, like social media sharing buttons." })];
  obj54.children = items21;
  const items22 = [closure_11(require("Stack/Stack").Stack, obj54), ];
  const obj55 = { children: null };
  const obj56 = { style: null, children: null };
  const items23 = [tmp.buttonContainer];
  obj56.style = items23;
  const obj52 = {
    children: closure_14.map((variant) => {
      let obj = { style: null, children: null };
      const items = [, ];
      ({ buttonContainer: arr[0], overlayButtonContainer: arr[1] } = closure_0);
      obj.style = items;
      obj = { variant };
      obj.children = closure_2_10(ExampleIconButton, obj);
      return closure_2_10(hasOwnProperty, obj, variant);
    })
  };
  obj56.children = closure_10(ExampleImageButton, { image: _modDef10016, label: "Telegram" });
  const items24 = [closure_10(closure_5, obj56), , ];
  const obj58 = { style: null, children: null };
  const items25 = [tmp.buttonContainer];
  obj58.style = items25;
  const obj57 = { image: _modDef10016, label: "Telegram" };
  obj58.children = closure_10(ExampleImageButton, { image: _modDef10018, label: "WhatsApp" });
  items24[1] = closure_10(closure_5, obj58);
  const obj60 = { style: null, children: null };
  const items26 = [tmp.buttonContainer];
  obj60.style = items26;
  const obj59 = { image: _modDef10018, label: "WhatsApp" };
  obj60.children = closure_10(ExampleImageButton, { image: _modDef10017, label: "Twitter" });
  items24[2] = closure_10(closure_5, obj60);
  obj55.children = items24;
  items22[1] = closure_11(closure_5, obj55);
  obj53.children = items22;
  items1[11] = closure_11(require("Stack/Stack").Stack, obj53);
  const obj62 = { spacing: 24, children: null };
  const obj63 = { style: tmp.container, children: null };
  const items27 = [closure_10(require("Text/Text").Text, { variant: "heading-lg/bold", children: "IconButton with a label" }), closure_10(require("Text/Text").Text, { variant: "text-sm/normal", children: "Icon buttons with a label require a different combination of props and will only appear in the 'lg' size." }), closure_10(require("Text/Text").Text, { variant: "text-sm/normal", children: "It is highly recommended that a list of these buttons appear wrapped in a ScrollView, so that they will horizontally scroll when there are many buttons, when the text is longer through internationalization, or the text is larger through OS font size settings." })];
  obj63.children = items27;
  const items28 = [closure_11(require("Stack/Stack").Stack, obj63), , ];
  const obj64 = { horizontal: true, contentContainerStyle: { minWidth: "100%" }, children: null };
  const obj61 = { image: _modDef10017, label: "Twitter" };
  obj64.children = closure_10(require("Stack/Stack").Stack, { direction: "horizontal", justify: "center", style: tmp.buttonContainer, children: closure_13.map((variant) => closure_1_10(ExampleIconButton, { variant, showLabel: true }, variant)) });
  items28[1] = closure_10(closure_6, obj64);
  const obj66 = { horizontal: true, contentContainerStyle: { minWidth: "100%" }, children: null };
  const obj67 = { direction: "horizontal", justify: "center", style: tmp.buttonContainer, children: null };
  const obj65 = { direction: "horizontal", justify: "center", style: tmp.buttonContainer, children: closure_13.map((variant) => closure_1_10(ExampleIconButton, { variant, showLabel: true }, variant)) };
  const items29 = [
    closure_10(require("IconButton").IconButton, {
      variant: "secondary",
      icon: _modDef7484,
      label: "Supercalifragilisticexpialidocious",
      grow: true,
      onPress() {

      }
    }),
  ,

  ];
  const obj68 = {
    variant: "secondary",
    icon: _modDef7484,
    label: "Supercalifragilisticexpialidocious",
    grow: true,
    onPress() {

    }
  };
  items29[1] = closure_10(require("IconButton").IconButton, {
    variant: "secondary",
    icon: _modDef7484,
    label: "Supercalifragilisticexpialidocious",
    grow: true,
    onPress() {

    }
  });
  const obj69 = {
    variant: "secondary",
    icon: _modDef7484,
    label: "Supercalifragilisticexpialidocious",
    grow: true,
    onPress() {

    }
  };
  items29[2] = closure_10(require("IconButton").IconButton, {
    variant: "secondary",
    icon: _modDef7484,
    label: "Supercalifragilisticexpialidocious",
    grow: true,
    onPress() {

    }
  });
  obj67.children = items29;
  obj66.children = closure_11(require("Stack/Stack").Stack, obj67);
  items28[2] = closure_10(closure_6, obj66);
  obj62.children = items28;
  items1[12] = closure_11(require("Stack/Stack").Stack, obj62);
  const obj71 = { spacing: 24, children: null };
  const obj70 = {
    variant: "secondary",
    icon: _modDef7484,
    label: "Supercalifragilisticexpialidocious",
    grow: true,
    onPress() {

    }
  };
  const items30 = [closure_10(require("Stack/Stack").Stack, { style: tmp.container, children: closure_10(require("Text/Text").Text, { variant: "heading-lg/bold", children: "ImageButton with a label" }) }), , ];
  const obj73 = { horizontal: true, contentContainerStyle: { minWidth: "100%" }, children: null };
  const obj74 = { direction: "horizontal", justify: "center", style: tmp.buttonContainer, children: null };
  const obj72 = { style: tmp.container, children: closure_10(require("Text/Text").Text, { variant: "heading-lg/bold", children: "ImageButton with a label" }) };
  const items31 = [closure_10(ExampleImageButton, { image: _modDef10015, label: "Label", showLabel: true }), , ];
  const obj75 = { image: _modDef10015, label: "Label", showLabel: true };
  items31[1] = closure_10(ExampleImageButton, { image: _modDef10010, label: "Label", showLabel: true });
  const obj76 = { image: _modDef10010, label: "Label", showLabel: true };
  items31[2] = closure_10(ExampleImageButton, { image: _modDef10014, label: "Label", showLabel: true });
  obj74.children = items31;
  obj73.children = closure_11(require("Stack/Stack").Stack, obj74);
  items30[1] = closure_10(closure_6, obj73);
  const obj78 = { horizontal: true, contentContainerStyle: { minWidth: "100%" }, children: null };
  const obj79 = { direction: "horizontal", justify: "center", style: tmp.buttonContainer, children: null };
  const obj77 = { image: _modDef10014, label: "Label", showLabel: true };
  const items32 = [closure_10(ExampleImageButton, { image: _modDef10016, label: "Supercalifragilisticexpialidocious", showLabel: true }), , ];
  const obj80 = { image: _modDef10016, label: "Supercalifragilisticexpialidocious", showLabel: true };
  items32[1] = closure_10(ExampleImageButton, { image: _modDef10018, label: "Supercalifragilisticexpialidocious", showLabel: true });
  const obj81 = { image: _modDef10018, label: "Supercalifragilisticexpialidocious", showLabel: true };
  items32[2] = closure_10(ExampleImageButton, { image: _modDef10017, label: "Supercalifragilisticexpialidocious", showLabel: true });
  obj79.children = items32;
  obj78.children = closure_11(require("Stack/Stack").Stack, obj79);
  items30[2] = closure_10(closure_6, obj78);
  obj71.children = items30;
  items1[13] = closure_11(require("Stack/Stack").Stack, obj71);
  const obj83 = { spacing: 24, children: null };
  const obj82 = { image: _modDef10017, label: "Supercalifragilisticexpialidocious", showLabel: true };
  const items33 = [closure_10(require("Stack/Stack").Stack, { style: tmp.container, children: closure_10(require("Text/Text").Text, { variant: "heading-lg/bold", children: "Mixing buttons" }) }), ];
  const obj85 = { direction: "horizontal", style: tmp.container, children: null };
  const items34 = [closure_10(ExampleButton, { variant: "secondary", text: "Search", grow: true }), closure_10(ExampleIconButton, { variant: "secondary" })];
  obj85.children = items34;
  items33[1] = closure_11(require("ButtonGroup").ButtonGroup, obj85);
  obj83.children = items33;
  items1[14] = closure_11(require("Stack/Stack").Stack, obj83);
  const obj86 = { children: null };
  const obj87 = { style: tmp.container, children: null };
  const items35 = [closure_10(require("Text/Text").Text, { variant: "heading-lg/bold", children: "Light Profile Themes" }), closure_10(require("Text/Text").Text, { variant: "text-sm/normal", children: "All buttons as they appear on a light profile theme" })];
  obj87.children = items35;
  const items36 = [closure_11(require("Stack/Stack").Stack, obj87), ];
  const obj88 = { theme: ThemeTypes.LIGHT, primaryColor: null, secondaryColor: null, children: null };
  let obj92 = require("utils/ColorUtils");
  obj88.primaryColor = obj92.hex2int("#ffae70");
  let obj93 = require("utils/ColorUtils");
  obj88.secondaryColor = obj93.hex2int("#cc2300");
  const obj89 = { style: { padding: 16 }, start: { x: 0, y: 0 }, end: { x: 0, y: 1 }, colors: ["#ffae70", "#cc2300"], children: null };
  const obj84 = { style: tmp.container, children: closure_10(require("Text/Text").Text, { variant: "heading-lg/bold", children: "Mixing buttons" }) };
  const obj90 = { children: null };
  const obj91 = { spacing: 16, children: null };
  const items37 = [closure_13.map((variant) => closure_1_10(ExampleButton, { variant }, variant)), closure_15.map((variant) => closure_1_10(ExampleButton, { variant }, variant))];
  obj91.children = items37;
  obj90.children = closure_11(require("Stack/Stack").Stack, obj91);
  obj89.children = closure_10(require("Card").Card, obj90);
  obj88.children = closure_10(LinearGradientDefault, obj89);
  items36[1] = closure_10(require("native").ThemeContextProvider, obj88);
  obj86.children = items36;
  items1[15] = closure_11(require("Stack/Stack").Stack, obj86);
  obj92 = { children: null };
  obj93 = { style: tmp.container, children: null };
  const items38 = [closure_10(require("Text/Text").Text, { variant: "heading-lg/bold", children: "Dark Profile Themes" }), closure_10(require("Text/Text").Text, { variant: "text-sm/normal", children: "All buttons as they appear on a dark profile theme" })];
  obj93.children = items38;
  const items39 = [closure_11(require("Stack/Stack").Stack, obj93), ];
  const obj94 = { theme: ThemeTypes.DARK, primaryColor: null, secondaryColor: null, children: null };
  let obj100 = require("utils/ColorUtils");
  obj94.primaryColor = obj100.hex2int("#490000");
  let obj101 = require("utils/ColorUtils");
  obj94.secondaryColor = obj101.hex2int("#cc2300");
  const obj95 = { style: { padding: 16 }, start: { x: 0, y: 0 }, end: { x: 0, y: 1 }, colors: ["#490000", "#cc2300"], children: null };
  const obj96 = { children: null };
  const obj97 = { spacing: 16, children: null };
  const items40 = [closure_13.map((variant) => closure_1_10(ExampleButton, { variant }, variant)), closure_15.map((variant) => closure_1_10(ExampleButton, { variant }, variant))];
  obj97.children = items40;
  obj96.children = closure_11(require("Stack/Stack").Stack, obj97);
  obj95.children = closure_10(require("Card").Card, obj96);
  obj94.children = closure_10(LinearGradientDefault, obj95);
  items39[1] = closure_10(require("native").ThemeContextProvider, obj94);
  obj92.children = items39;
  items1[16] = closure_11(require("Stack/Stack").Stack, obj92);
  const obj98 = { children: null };
  const obj99 = { style: tmp.container, children: null };
  const items41 = [closure_10(require("Text/Text").Text, { variant: "heading-lg/bold", children: "Light Client Theme" }), closure_10(require("Text/Text").Text, { variant: "text-sm/normal", children: "All buttons as they appear on a light client theme" })];
  obj99.children = items41;
  const items42 = [closure_11(require("Stack/Stack").Stack, obj99), ];
  obj100 = { theme: 32.theme, gradient: 32, flags: null, children: null };
  let obj108 = require("native");
  obj100.flags = obj108.setThemeFlag(0, require("native").ThemeContextFlags.MOBILE_LIGHT_GRADIENT_THEME_ENABLED);
  obj101 = { style: { position: "relative", padding: 16 }, children: null };
  const items43 = [closure_10(require("ThemedGradient").Gradient, { absolute: true, gradient: 32 }), ];
  const obj103 = { style: null, children: null };
  const obj104 = { backgroundColor: null, padding: 16, borderRadius: 16 };
  let obj113 = require("native");
  obj104.backgroundColor = obj113.setColorOpacity("white", 0.7);
  obj103.style = obj104;
  const obj105 = { spacing: 16, children: null };
  const items44 = [closure_13.map((variant) => closure_1_10(ExampleButton, { variant }, variant)), closure_15.map((variant) => closure_1_10(ExampleButton, { variant }, variant))];
  obj105.children = items44;
  obj103.children = closure_11(require("Stack/Stack").Stack, obj105);
  items43[1] = closure_10(closure_5, obj103);
  obj101.children = items43;
  obj100.children = closure_11(closure_5, obj101);
  items42[1] = closure_10(require("native").ThemeContextProvider, obj100);
  obj98.children = items42;
  items1[17] = closure_11(require("Stack/Stack").Stack, obj98);
  const obj106 = { children: null };
  const obj107 = { style: tmp.container, children: null };
  const items45 = [closure_10(require("Text/Text").Text, { variant: "heading-lg/bold", children: "Dark Client Theme" }), closure_10(require("Text/Text").Text, { variant: "text-sm/normal", children: "All buttons as they appear on a dark client theme" })];
  obj107.children = items45;
  const items46 = [closure_11(require("Stack/Stack").Stack, obj107), ];
  obj108 = { theme: 32.theme, gradient: 32, flags: null, children: null };
  const obj102 = { absolute: true, gradient: 32 };
  obj108.flags = require("native").setThemeFlag(0, require("native").ThemeContextFlags.MOBILE_DARK_GRADIENT_THEME_ENABLED);
  const obj109 = { style: { position: "relative", padding: 16 }, children: null };
  const items47 = [closure_10(require("ThemedGradient").Gradient, { absolute: true, gradient: 32 }), ];
  const obj111 = { style: null, children: null };
  const obj112 = { backgroundColor: null, padding: 16, borderRadius: 16 };
  const obj110 = { absolute: true, gradient: 32 };
  const obj119 = require("native");
  obj112.backgroundColor = require("native").setColorOpacity("black", 0.7);
  obj111.style = obj112;
  obj113 = { spacing: 16, children: null };
  const items48 = [closure_13.map((variant) => closure_1_10(ExampleButton, { variant }, variant)), closure_15.map((variant) => closure_1_10(ExampleButton, { variant }, variant))];
  obj113.children = items48;
  obj111.children = closure_11(require("Stack/Stack").Stack, obj113);
  items47[1] = closure_10(closure_5, obj111);
  obj109.children = items47;
  obj108.children = closure_11(closure_5, obj109);
  items46[1] = closure_10(require("native").ThemeContextProvider, obj108);
  obj106.children = items46;
  items1[18] = closure_11(require("Stack/Stack").Stack, obj106);
  const obj114 = { children: null };
  const obj115 = { style: tmp.container, children: null };
  const items49 = [closure_10(require("Text/Text").Text, { variant: "heading-lg/bold", children: "Floating Action Button" }), closure_10(require("Text/Text").Text, { variant: "text-sm/normal", children: "An ever-present icon button, giving the most important call to action in a compact way." })];
  obj115.children = items49;
  const items50 = [closure_11(require("Stack/Stack").Stack, obj115), closure_10(closure_5, { style: { padding: 48 } })];
  obj114.children = items50;
  items1[19] = closure_11(require("Stack/Stack").Stack, obj114);
  obj2.children = items1;
  obj1.children = closure_11(require("Stack/Stack").Stack, obj2);
  const items51 = [closure_10(closure_6, obj1), ];
  const obj124 = require("native");
  items51[1] = closure_10(require("FloatingActionButton").FloatingActionButton, {
    icon: _modDef7484,
    onPress() {

    },
    positionBottom: 32,
    accessibilityLabel: "Floating Action Button"
  });
  obj.children = items51;
  return closure_11(closure_12, obj);
};