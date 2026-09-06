// === Module 15754: UserSettingsDesignSystemButton ===

// Module 15754 (UserSettingsDesignSystemButton)
import nativeDefault from "native" /* 576 */;
import components_Button_Button from "components/Button/Button" /* 4975 */;
import LinearGradientDefault from "LinearGradient" /* 4987 */;
import _modDef7381 from "module_7381" /* 7381 */;
import _modDef7949 from "module_7949" /* 7949 */;
import IconButton from "IconButton" /* 8097 */;
import _modDef9060 from "module_9060" /* 9060 */;
import _modDef9128 from "module_9128" /* 9128 */;
import _modDef9880 from "module_9880" /* 9880 */;
import _modDef9884 from "module_9884" /* 9884 */;
import _modDef9885 from "module_9885" /* 9885 */;
import _modDef9886 from "module_9886" /* 9886 */;
import _modDef9887 from "module_9887" /* 9887 */;
import _modDef9888 from "module_9888" /* 9888 */;
import ImageButton from "ImageButton" /* 9890 */;
import _modDef10652 from "module_10652" /* 10652 */;
import useToggleButtonProps from "useToggleButtonProps" /* 14165 */;
import useDesignSystemSettingsStateDefault from "useDesignSystemSettingsState" /* 15755 */;
import _modDef15756 from "module_15756" /* 15756 */;
import _slicedToArray from "module_32" /* 32 */;
import noop from "module_19" /* 19 */;

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
    tmpResult = _modDef15756;
  }
  obj.icon = tmpResult;
  obj.iconPosition = iconPosition;
  obj.scaleAmountInPx = buttonScale;
  return React7(components_Button_Button.Button, obj);
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
    obj.icon = _modDef7381;
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
    obj.icon = _modDef7381;
  }
  return React7(IconButton.IconButton, obj);
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
  return React7(ImageButton.ImageButton, obj);
}
function ExampleToggleButton() {
  const tmp = _slicedToArray(noop.useState(false), 2);
  const first = tmp[0];
  closure_1 = tmp[1];
  let obj = { on: null, off: null };
  obj = { text: "Unfollow", icon: _modDef9060 };
  obj.on = obj;
  obj.off = { text: "Follow", icon: _modDef7949 };
  const toggleButtonProps = obj.useToggleButtonProps(obj, first);
  const obj2 = {};
  const merged = Object.assign(toggleButtonProps);
  obj2.onPress = function onPress() {
    closure_1(!first);
  };
  obj2.variant = "secondary";
  obj2.size = "md";
  return React7(components_Button_Button.Button, obj2);
}
function ExampleIconToggleButton() {
  const tmp = _slicedToArray(noop.useState(false), 2);
  const first = tmp[0];
  closure_1 = tmp[1];
  let obj = { on: null, off: null };
  obj = { variant: "destructive", accessibilityLabel: "Mute", icon: _modDef9128 };
  obj.on = obj;
  obj.off = { variant: "secondary", accessibilityLabel: "Mute", icon: _modDef9128 };
  const toggleIconButtonProps = obj.useToggleIconButtonProps(obj, first);
  const obj2 = {};
  const merged = Object.assign(toggleIconButtonProps);
  obj2.onPress = function onPress() {
    closure_1(!first);
  };
  obj2.size = "md";
  return React7(IconButton.IconButton, obj2);
}
get_ActivityIndicator = fn(17);
({ View: hasOwnProperty, ScrollView: metroRequire } = get_ActivityIndicator);
const ClientThemesConstants = fn(1230);
({ LIGHT_BACKGROUND_GRADIENT_PRESETS: closure_7, DARK_BACKGROUND_GRADIENT_PRESETS: closure_8 } = ClientThemesConstants);
const jsxProd = fn(21);
({ jsx: closure_9, jsxs: c10, Fragment: closure_11 } = jsxProd);
let closure_12 = ["primary", "secondary", "tertiary"];
let closure_13 = ["primary-overlay", "secondary-overlay"];
let closure_14 = ["destructive", "active"];
let closure_15 = ["expressive"];
let closure_16 = ["experimental_premium-primary", "experimental_premium-secondary"];
fn(4560);
let createStyles = { container: null, buttonContainer: null, overlayButtonContainer: null };
createStyles = { paddingHorizontal: nativeDefault.space.PX_16 };
createStyles.container = createStyles;
createStyles.buttonContainer = { paddingHorizontal: nativeDefault.space.PX_16, paddingVertical: nativeDefault.space.PX_8 };
let obj1 = { paddingHorizontal: nativeDefault.space.PX_16, paddingVertical: nativeDefault.space.PX_8 };
createStyles.overlayButtonContainer = { backgroundColor: nativeDefault.unsafe_rawColors.BG_GRADIENT_CHROMA_GLOW_1, paddingVertical: nativeDefault.space.PX_48 };
let closure_22 = createStyles.createStyles(createStyles);
const size = fn(2);
const result = size.fileFinishedImporting("modules/user_settings/design_system/native/UserSettingsDesignSystemButton.tsx");

export default function UserSettingsDesignSystemButton() {
  const tmp = closure_22();
  _require = tmp;
  let obj = require("useNavigation");
  const navigation = obj.useNavigation();
  importDefault = noop.useCallback(() => {
    onPress(paths[18]).openLazy(closure_0(paths[20])(paths[19], paths.paths), "UserSettingsDesignSystemButtonActionSheet");
  }, []);
  obj = {
    headerRight() {
      return React7(IconButton.IconButton, { onPress, icon: _modDef7381, size: "sm", variant: "secondary", accessibilityLabel: "Settings" });
    }
  };
  navigation.setOptions(obj);
  obj = { children: null };
  const obj1 = { children: null };
  const obj2 = { spacing: 24, children: null };
  const obj3 = { children: null };
  let items = [closure_9(require("Stack/Stack").Stack, { style: tmp.container, children: closure_9(require("Text/Text").Text, { variant: "heading-lg/bold", children: "Hierarchical buttons" }) }), ];
  const obj4 = { style: tmp.container, children: closure_9(require("Text/Text").Text, { variant: "heading-lg/bold", children: "Hierarchical buttons" }) };
  items[1] = closure_9(closure_5, {
    children: closure_12.map((variant) => {
      let obj = { style: closure_0.buttonContainer, children: null };
      obj = { variant };
      obj.children = React7(ExampleButton, obj);
      return React7(hasOwnProperty, obj, variant);
    })
  });
  obj3.children = items;
  const items1 = [closure_10(require("Stack/Stack").Stack, obj3), , , , , , , , , , , , , , , , , , , ];
  const obj6 = { children: null };
  const obj5 = {
    children: closure_12.map((variant) => {
      let obj = { style: closure_0.buttonContainer, children: null };
      obj = { variant };
      obj.children = React7(ExampleButton, obj);
      return React7(hasOwnProperty, obj, variant);
    })
  };
  const items2 = [closure_9(require("Stack/Stack").Stack, { style: tmp.container, children: closure_9(require("Text/Text").Text, { variant: "heading-lg/bold", children: "Sentiment buttons" }) }), ];
  const obj7 = { style: tmp.container, children: closure_9(require("Text/Text").Text, { variant: "heading-lg/bold", children: "Sentiment buttons" }) };
  items2[1] = closure_9(closure_5, {
    children: closure_14.map((variant) => {
      let obj = { style: closure_0.buttonContainer, children: null };
      obj = { variant };
      obj.children = React7(ExampleButton, obj);
      return React7(hasOwnProperty, obj, variant);
    })
  });
  obj6.children = items2;
  items1[1] = closure_10(require("Stack/Stack").Stack, obj6);
  const obj9 = { children: null };
  const obj8 = {
    children: closure_14.map((variant) => {
      let obj = { style: closure_0.buttonContainer, children: null };
      obj = { variant };
      obj.children = React7(ExampleButton, obj);
      return React7(hasOwnProperty, obj, variant);
    })
  };
  const items3 = [closure_9(require("Stack/Stack").Stack, { style: tmp.container, children: closure_9(require("Text/Text").Text, { variant: "heading-lg/bold", children: "Expressive buttons" }) }), ];
  const obj10 = { style: tmp.container, children: closure_9(require("Text/Text").Text, { variant: "heading-lg/bold", children: "Expressive buttons" }) };
  items3[1] = closure_9(closure_5, {
    children: closure_15.map((variant) => {
      let obj = { style: closure_0.buttonContainer, children: null };
      obj = { variant };
      obj.children = React7(ExampleButton, obj);
      return React7(hasOwnProperty, obj, variant);
    })
  });
  obj9.children = items3;
  items1[2] = closure_10(require("Stack/Stack").Stack, obj9);
  const obj12 = { children: null };
  const obj11 = {
    children: closure_15.map((variant) => {
      let obj = { style: closure_0.buttonContainer, children: null };
      obj = { variant };
      obj.children = React7(ExampleButton, obj);
      return React7(hasOwnProperty, obj, variant);
    })
  };
  const items4 = [closure_9(require("Stack/Stack").Stack, { style: tmp.container, children: closure_9(require("Text/Text").Text, { variant: "heading-lg/bold", children: "Experimental premium buttons" }) }), ];
  const obj13 = { style: tmp.container, children: closure_9(require("Text/Text").Text, { variant: "heading-lg/bold", children: "Experimental premium buttons" }) };
  items4[1] = closure_9(closure_5, {
    children: closure_16.map((variant) => {
      let obj = { style: closure_0.buttonContainer, children: null };
      obj = { variant };
      obj.children = React7(ExampleButton, obj);
      return React7(hasOwnProperty, obj, variant);
    })
  });
  obj12.children = items4;
  items1[3] = closure_10(require("Stack/Stack").Stack, obj12);
  const obj15 = { children: null };
  const obj16 = { style: tmp.container, children: null };
  const items5 = [closure_9(require("Text/Text").Text, { variant: "heading-lg/bold", children: "Overlay buttons" }), closure_9(require("Text/Text").Text, { variant: "text-sm/normal", children: "Overlay buttons are meant to be used overlayed on top of an image or background color. They do not change colors with the theme." })];
  obj16.children = items5;
  const items6 = [closure_10(require("Stack/Stack").Stack, obj16), ];
  const obj14 = {
    children: closure_16.map((variant) => {
      let obj = { style: closure_0.buttonContainer, children: null };
      obj = { variant };
      obj.children = React7(ExampleButton, obj);
      return React7(hasOwnProperty, obj, variant);
    })
  };
  items6[1] = closure_9(closure_5, {
    children: closure_13.map((variant) => {
      let obj = { style: null, children: null };
      const items = [, ];
      ({ buttonContainer: arr[0], overlayButtonContainer: arr[1] } = closure_0);
      obj.style = items;
      obj = { variant };
      obj.children = React7(ExampleButton, obj);
      return React7(hasOwnProperty, obj, variant);
    })
  });
  obj15.children = items6;
  items1[4] = closure_10(require("Stack/Stack").Stack, obj15);
  const obj18 = { children: null };
  const obj19 = { style: tmp.container, children: null };
  const items7 = [closure_9(require("Text/Text").Text, { variant: "heading-lg/bold", children: "Custom color icons" }), closure_9(require("Text/Text").Text, { variant: "text-sm/normal", children: "If a button needs to have an icon which has its own custom color, then create your own Button.Icon to pass as the icon prop." })];
  obj19.children = items7;
  const items8 = [closure_10(require("Stack/Stack").Stack, obj19), ];
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
    children: closure_13.map((variant) => {
      let obj = { style: null, children: null };
      const items = [, ];
      ({ buttonContainer: arr[0], overlayButtonContainer: arr[1] } = closure_0);
      obj.style = items;
      obj = { variant };
      obj.children = React7(ExampleButton, obj);
      return React7(hasOwnProperty, obj, variant);
    })
  };
  obj22.icon = closure_9(require("components/Button/Button").Button.Icon, { source: _modDef10652 });
  obj21.children = closure_9(require("components/Button/Button").Button, obj22);
  const items9 = [closure_9(closure_5, obj21), ];
  const obj24 = { style: tmp.buttonContainer, children: null };
  const obj25 = {
    onPress() {

    },
    variant: "secondary",
    text: "Button with a entity variant icon",
    size: "md",
    icon: null
  };
  const obj23 = { source: _modDef10652 };
  obj25.icon = closure_9(require("components/Button/Button").Button.Icon, { variant: "entity", source: _modDef9880 });
  obj24.children = closure_9(require("components/Button/Button").Button, obj25);
  items9[1] = closure_9(closure_5, obj24);
  obj20.children = items9;
  items8[1] = closure_10(closure_5, obj20);
  obj18.children = items8;
  items1[5] = closure_10(require("Stack/Stack").Stack, obj18);
  const obj27 = { children: null };
  const obj26 = { variant: "entity", source: _modDef9880 };
  const items10 = [closure_9(require("Stack/Stack").Stack, { style: tmp.container, children: closure_9(require("Text/Text").Text, { variant: "heading-lg/bold", children: "Buttons with various text lengths" }) }), ];
  const obj29 = { children: null };
  const obj30 = { style: tmp.buttonContainer, children: null };
  const obj28 = { style: tmp.container, children: closure_9(require("Text/Text").Text, { variant: "heading-lg/bold", children: "Buttons with various text lengths" }) };
  obj30.children = closure_9(require("components/Button/Button").Button, {
    onPress() {

    },
    variant: "secondary",
    text: "Neque porro quisquam est qui dolorem ipsum quia dolor sit amet, consectetur",
    size: "md",
    icon: _modDef10652
  });
  const items11 = [closure_9(closure_5, obj30), , , ];
  const obj32 = { style: tmp.buttonContainer, children: null };
  const obj31 = {
    onPress() {

    },
    variant: "secondary",
    text: "Neque porro quisquam est qui dolorem ipsum quia dolor sit amet, consectetur",
    size: "md",
    icon: _modDef10652
  };
  obj32.children = closure_9(require("components/Button/Button").Button, {
    onPress() {

    },
    variant: "secondary",
    text: "Neque porro quisquam est qui dolorem ipsum quia dolor sit amet, consectetur",
    size: "md",
    icon: _modDef10652,
    iconPosition: "end"
  });
  items11[1] = closure_9(closure_5, obj32);
  const obj34 = {
    style: tmp.buttonContainer,
    children: closure_9(require("components/Button/Button").Button, {
      onPress() {

      },
      variant: "secondary",
      text: "Neque porro quisquam est qui dolorem ipsum quia dolor sit amet, consectetur",
      size: "md"
    })
  };
  items11[2] = closure_9(closure_5, obj34);
  const obj36 = {
    style: tmp.buttonContainer,
    children: closure_9(require("components/Button/Button").Button, {
      onPress() {

      },
      variant: "secondary",
      text: "A",
      size: "md"
    })
  };
  items11[3] = closure_9(closure_5, obj36);
  obj29.children = items11;
  items10[1] = closure_10(closure_5, obj29);
  obj27.children = items10;
  items1[6] = closure_10(require("Stack/Stack").Stack, obj27);
  const obj38 = { children: null };
  const obj39 = { style: tmp.container, children: null };
  const items12 = [closure_9(require("Text/Text").Text, { variant: "heading-lg/bold", children: "Toggling button states" }), closure_9(require("Text/Text").Text, { variant: "text-sm/normal", children: "Use the useToggleButtonProps hook or the useToggleIconButtonProps hook to toggle a button between two states." }), closure_9(require("Text/Text").Text, { variant: "text-sm/normal", children: "This hook changes the button presentation and adds some important accessibility attributes for a toggle button." })];
  obj39.children = items12;
  const items13 = [closure_10(require("Stack/Stack").Stack, obj39), ];
  const obj40 = { children: null };
  const obj33 = {
    onPress() {

    },
    variant: "secondary",
    text: "Neque porro quisquam est qui dolorem ipsum quia dolor sit amet, consectetur",
    size: "md",
    icon: _modDef10652,
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
  const items14 = [closure_9(closure_5, { style: tmp.buttonContainer, children: closure_9(ExampleToggleButton, {}) }), ];
  const obj41 = { style: tmp.buttonContainer, children: closure_9(ExampleToggleButton, {}) };
  items14[1] = closure_9(closure_5, { style: tmp.buttonContainer, children: closure_9(ExampleIconToggleButton, {}) });
  obj40.children = items14;
  items13[1] = closure_10(closure_5, obj40);
  obj38.children = items13;
  items1[7] = closure_10(require("Stack/Stack").Stack, obj38);
  const obj43 = { children: null };
  const obj44 = { style: tmp.container, children: null };
  const items15 = [closure_9(require("Text/Text").Text, { variant: "heading-lg/bold", children: "Hierarchical icon buttons" }), closure_9(require("Text/Text").Text, { variant: "text-sm/normal", children: "While the primary variants of IconButton are supported, these should be used very rarely." }), closure_9(require("Text/Text").Text, { variant: "text-sm/normal", children: "An icon button usually has a secondary function and should use the secondary variants." })];
  obj44.children = items15;
  const items16 = [closure_10(require("Stack/Stack").Stack, obj44), ];
  const obj42 = { style: tmp.buttonContainer, children: closure_9(ExampleIconToggleButton, {}) };
  items16[1] = closure_9(closure_5, {
    children: closure_12.map((variant) => {
      let obj = { style: closure_0.buttonContainer, children: null };
      obj = { variant };
      obj.children = React7(ExampleIconButton, obj);
      return React7(hasOwnProperty, obj, variant);
    })
  });
  obj43.children = items16;
  items1[8] = closure_10(require("Stack/Stack").Stack, obj43);
  const obj46 = { children: null };
  const obj45 = {
    children: closure_12.map((variant) => {
      let obj = { style: closure_0.buttonContainer, children: null };
      obj = { variant };
      obj.children = React7(ExampleIconButton, obj);
      return React7(hasOwnProperty, obj, variant);
    })
  };
  const items17 = [closure_9(require("Stack/Stack").Stack, { style: tmp.container, children: closure_9(require("Text/Text").Text, { variant: "heading-lg/bold", children: "Sentiment icon buttons" }) }), ];
  const obj47 = { style: tmp.container, children: closure_9(require("Text/Text").Text, { variant: "heading-lg/bold", children: "Sentiment icon buttons" }) };
  items17[1] = closure_9(closure_5, {
    children: closure_14.map((variant) => {
      let obj = { style: closure_0.buttonContainer, children: null };
      obj = { variant };
      obj.children = React7(ExampleIconButton, obj);
      return React7(hasOwnProperty, obj, variant);
    })
  });
  obj46.children = items17;
  items1[9] = closure_10(require("Stack/Stack").Stack, obj46);
  const obj49 = { children: null };
  const obj48 = {
    children: closure_14.map((variant) => {
      let obj = { style: closure_0.buttonContainer, children: null };
      obj = { variant };
      obj.children = React7(ExampleIconButton, obj);
      return React7(hasOwnProperty, obj, variant);
    })
  };
  const items18 = [closure_9(require("Stack/Stack").Stack, { style: tmp.container, children: closure_9(require("Text/Text").Text, { variant: "heading-lg/bold", children: "Overlay icon buttons" }) }), ];
  const obj50 = { style: tmp.container, children: closure_9(require("Text/Text").Text, { variant: "heading-lg/bold", children: "Overlay icon buttons" }) };
  items18[1] = closure_9(closure_5, {
    children: closure_13.map((variant) => {
      let obj = { style: null, children: null };
      const items = [, ];
      ({ buttonContainer: arr[0], overlayButtonContainer: arr[1] } = closure_0);
      obj.style = items;
      obj = { variant };
      obj.children = React7(ExampleIconButton, obj);
      return React7(hasOwnProperty, obj, variant);
    })
  });
  obj49.children = items18;
  items1[10] = closure_10(require("Stack/Stack").Stack, obj49);
  const obj52 = { children: null };
  const obj53 = { style: tmp.container, children: null };
  const items19 = [closure_9(require("Text/Text").Text, { variant: "heading-lg/bold", children: "Image buttons" }), closure_9(require("Text/Text").Text, { variant: "text-sm/normal", children: "Image buttons are rereserved for more branded buttons, like social media sharing buttons." })];
  obj53.children = items19;
  const items20 = [closure_10(require("Stack/Stack").Stack, obj53), ];
  const obj54 = { children: null };
  const obj55 = { style: null, children: null };
  const items21 = [tmp.buttonContainer];
  obj55.style = items21;
  const obj51 = {
    children: closure_13.map((variant) => {
      let obj = { style: null, children: null };
      const items = [, ];
      ({ buttonContainer: arr[0], overlayButtonContainer: arr[1] } = closure_0);
      obj.style = items;
      obj = { variant };
      obj.children = React7(ExampleIconButton, obj);
      return React7(hasOwnProperty, obj, variant);
    })
  };
  obj55.children = closure_9(ExampleImageButton, { image: _modDef9886, label: "Telegram" });
  const items22 = [closure_9(closure_5, obj55), , ];
  const obj57 = { style: null, children: null };
  const items23 = [tmp.buttonContainer];
  obj57.style = items23;
  const obj56 = { image: _modDef9886, label: "Telegram" };
  obj57.children = closure_9(ExampleImageButton, { image: _modDef9888, label: "WhatsApp" });
  items22[1] = closure_9(closure_5, obj57);
  const obj59 = { style: null, children: null };
  const items24 = [tmp.buttonContainer];
  obj59.style = items24;
  const obj58 = { image: _modDef9888, label: "WhatsApp" };
  obj59.children = closure_9(ExampleImageButton, { image: _modDef9887, label: "Twitter" });
  items22[2] = closure_9(closure_5, obj59);
  obj54.children = items22;
  items20[1] = closure_10(closure_5, obj54);
  obj52.children = items20;
  items1[11] = closure_10(require("Stack/Stack").Stack, obj52);
  const obj61 = { spacing: 24, children: null };
  const obj62 = { style: tmp.container, children: null };
  const items25 = [closure_9(require("Text/Text").Text, { variant: "heading-lg/bold", children: "IconButton with a label" }), closure_9(require("Text/Text").Text, { variant: "text-sm/normal", children: "Icon buttons with a label require a different combination of props and will only appear in the 'lg' size." }), closure_9(require("Text/Text").Text, { variant: "text-sm/normal", children: "It is highly recommended that a list of these buttons appear wrapped in a ScrollView, so that they will horizontally scroll when there are many buttons, when the text is longer through internationalization, or the text is larger through OS font size settings." })];
  obj62.children = items25;
  const items26 = [closure_10(require("Stack/Stack").Stack, obj62), , ];
  const obj63 = { horizontal: true, contentContainerStyle: { minWidth: "100%" }, children: null };
  const obj60 = { image: _modDef9887, label: "Twitter" };
  obj63.children = closure_9(require("Stack/Stack").Stack, { direction: "horizontal", justify: "center", style: tmp.buttonContainer, children: closure_12.map((variant) => closure_1_9(ExampleIconButton, { variant, showLabel: true }, variant)) });
  items26[1] = closure_9(closure_6, obj63);
  const obj65 = { horizontal: true, contentContainerStyle: { minWidth: "100%" }, children: null };
  const obj66 = { direction: "horizontal", justify: "center", style: tmp.buttonContainer, children: null };
  const obj64 = { direction: "horizontal", justify: "center", style: tmp.buttonContainer, children: closure_12.map((variant) => closure_1_9(ExampleIconButton, { variant, showLabel: true }, variant)) };
  const items27 = [
    closure_9(require("IconButton").IconButton, {
      variant: "secondary",
      icon: _modDef7381,
      label: "Supercalifragilisticexpialidocious",
      grow: true,
      onPress() {

      }
    }),
  ,

  ];
  const obj67 = {
    variant: "secondary",
    icon: _modDef7381,
    label: "Supercalifragilisticexpialidocious",
    grow: true,
    onPress() {

    }
  };
  items27[1] = closure_9(require("IconButton").IconButton, {
    variant: "secondary",
    icon: _modDef7381,
    label: "Supercalifragilisticexpialidocious",
    grow: true,
    onPress() {

    }
  });
  const obj68 = {
    variant: "secondary",
    icon: _modDef7381,
    label: "Supercalifragilisticexpialidocious",
    grow: true,
    onPress() {

    }
  };
  items27[2] = closure_9(require("IconButton").IconButton, {
    variant: "secondary",
    icon: _modDef7381,
    label: "Supercalifragilisticexpialidocious",
    grow: true,
    onPress() {

    }
  });
  obj66.children = items27;
  obj65.children = closure_10(require("Stack/Stack").Stack, obj66);
  items26[2] = closure_9(closure_6, obj65);
  obj61.children = items26;
  items1[12] = closure_10(require("Stack/Stack").Stack, obj61);
  const obj70 = { spacing: 24, children: null };
  const obj69 = {
    variant: "secondary",
    icon: _modDef7381,
    label: "Supercalifragilisticexpialidocious",
    grow: true,
    onPress() {

    }
  };
  const items28 = [closure_9(require("Stack/Stack").Stack, { style: tmp.container, children: closure_9(require("Text/Text").Text, { variant: "heading-lg/bold", children: "ImageButton with a label" }) }), , ];
  const obj72 = { horizontal: true, contentContainerStyle: { minWidth: "100%" }, children: null };
  const obj73 = { direction: "horizontal", justify: "center", style: tmp.buttonContainer, children: null };
  const obj71 = { style: tmp.container, children: closure_9(require("Text/Text").Text, { variant: "heading-lg/bold", children: "ImageButton with a label" }) };
  const items29 = [closure_9(ExampleImageButton, { image: _modDef9885, label: "Label", showLabel: true }), , ];
  const obj74 = { image: _modDef9885, label: "Label", showLabel: true };
  items29[1] = closure_9(ExampleImageButton, { image: _modDef9880, label: "Label", showLabel: true });
  const obj75 = { image: _modDef9880, label: "Label", showLabel: true };
  items29[2] = closure_9(ExampleImageButton, { image: _modDef9884, label: "Label", showLabel: true });
  obj73.children = items29;
  obj72.children = closure_10(require("Stack/Stack").Stack, obj73);
  items28[1] = closure_9(closure_6, obj72);
  const obj77 = { horizontal: true, contentContainerStyle: { minWidth: "100%" }, children: null };
  const obj78 = { direction: "horizontal", justify: "center", style: tmp.buttonContainer, children: null };
  const obj76 = { image: _modDef9884, label: "Label", showLabel: true };
  const items30 = [closure_9(ExampleImageButton, { image: _modDef9886, label: "Supercalifragilisticexpialidocious", showLabel: true }), , ];
  const obj79 = { image: _modDef9886, label: "Supercalifragilisticexpialidocious", showLabel: true };
  items30[1] = closure_9(ExampleImageButton, { image: _modDef9888, label: "Supercalifragilisticexpialidocious", showLabel: true });
  const obj80 = { image: _modDef9888, label: "Supercalifragilisticexpialidocious", showLabel: true };
  items30[2] = closure_9(ExampleImageButton, { image: _modDef9887, label: "Supercalifragilisticexpialidocious", showLabel: true });
  obj78.children = items30;
  obj77.children = closure_10(require("Stack/Stack").Stack, obj78);
  items28[2] = closure_9(closure_6, obj77);
  obj70.children = items28;
  items1[13] = closure_10(require("Stack/Stack").Stack, obj70);
  const obj82 = { spacing: 24, children: null };
  const obj81 = { image: _modDef9887, label: "Supercalifragilisticexpialidocious", showLabel: true };
  const items31 = [closure_9(require("Stack/Stack").Stack, { style: tmp.container, children: closure_9(require("Text/Text").Text, { variant: "heading-lg/bold", children: "Mixing buttons" }) }), ];
  const obj84 = { direction: "horizontal", style: tmp.container, children: null };
  const items32 = [closure_9(ExampleButton, { variant: "secondary", text: "Search", grow: true }), closure_9(ExampleIconButton, { variant: "secondary" })];
  obj84.children = items32;
  items31[1] = closure_10(require("ButtonGroup").ButtonGroup, obj84);
  obj82.children = items31;
  items1[14] = closure_10(require("Stack/Stack").Stack, obj82);
  const obj85 = { children: null };
  const obj86 = { style: tmp.container, children: null };
  const items33 = [closure_9(require("Text/Text").Text, { variant: "heading-lg/bold", children: "Light Profile Themes" }), closure_9(require("Text/Text").Text, { variant: "text-sm/normal", children: "All buttons as they appear on a light profile theme" })];
  obj86.children = items33;
  const items34 = [closure_10(require("Stack/Stack").Stack, obj86), ];
  const obj87 = { theme: "light", primaryColor: null, secondaryColor: null, children: null };
  let obj91 = require("utils/ColorUtils");
  obj87.primaryColor = obj91.hex2int("#ffae70");
  let obj92 = require("utils/ColorUtils");
  obj87.secondaryColor = obj92.hex2int("#cc2300");
  const obj88 = { style: { padding: 16 }, start: { x: 0, y: 0 }, end: { x: 0, y: 1 }, colors: ["#ffae70", "#cc2300"], children: null };
  const obj83 = { style: tmp.container, children: closure_9(require("Text/Text").Text, { variant: "heading-lg/bold", children: "Mixing buttons" }) };
  const obj89 = { children: null };
  const obj90 = { spacing: 16, children: null };
  const items35 = [closure_12.map((variant) => closure_1_9(ExampleButton, { variant }, variant)), closure_14.map((variant) => closure_1_9(ExampleButton, { variant }, variant))];
  obj90.children = items35;
  obj89.children = closure_10(require("Stack/Stack").Stack, obj90);
  obj88.children = closure_9(require("Card").Card, obj89);
  obj87.children = closure_9(LinearGradientDefault, obj88);
  items34[1] = closure_9(require("native").ThemeContextProvider, obj87);
  obj85.children = items34;
  items1[15] = closure_10(require("Stack/Stack").Stack, obj85);
  obj91 = { children: null };
  obj92 = { style: tmp.container, children: null };
  const items36 = [closure_9(require("Text/Text").Text, { variant: "heading-lg/bold", children: "Dark Profile Themes" }), closure_9(require("Text/Text").Text, { variant: "text-sm/normal", children: "All buttons as they appear on a dark profile theme" })];
  obj92.children = items36;
  const items37 = [closure_10(require("Stack/Stack").Stack, obj92), ];
  const obj93 = { theme: "dark", primaryColor: null, secondaryColor: null, children: null };
  let obj99 = require("utils/ColorUtils");
  obj93.primaryColor = obj99.hex2int("#490000");
  let obj100 = require("utils/ColorUtils");
  obj93.secondaryColor = obj100.hex2int("#cc2300");
  const obj94 = { style: { padding: 16 }, start: { x: 0, y: 0 }, end: { x: 0, y: 1 }, colors: ["#490000", "#cc2300"], children: null };
  const obj95 = { children: null };
  const obj96 = { spacing: 16, children: null };
  const items38 = [closure_12.map((variant) => closure_1_9(ExampleButton, { variant }, variant)), closure_14.map((variant) => closure_1_9(ExampleButton, { variant }, variant))];
  obj96.children = items38;
  obj95.children = closure_10(require("Stack/Stack").Stack, obj96);
  obj94.children = closure_9(require("Card").Card, obj95);
  obj93.children = closure_9(LinearGradientDefault, obj94);
  items37[1] = closure_9(require("native").ThemeContextProvider, obj93);
  obj91.children = items37;
  items1[16] = closure_10(require("Stack/Stack").Stack, obj91);
  const obj97 = { children: null };
  const obj98 = { style: tmp.container, children: null };
  const items39 = [closure_9(require("Text/Text").Text, { variant: "heading-lg/bold", children: "Light Client Theme" }), closure_9(require("Text/Text").Text, { variant: "text-sm/normal", children: "All buttons as they appear on a light client theme" })];
  obj98.children = items39;
  const items40 = [closure_10(require("Stack/Stack").Stack, obj98), ];
  obj99 = { theme: 32.theme, gradient: 32, flags: null, children: null };
  let obj107 = require("native");
  obj99.flags = obj107.setThemeFlag(0, require("native").ThemeContextFlags.MOBILE_LIGHT_GRADIENT_THEME_ENABLED);
  obj100 = { style: { position: "relative", padding: 16 }, children: null };
  const items41 = [closure_9(require("ThemedGradient").Gradient, { absolute: true, gradient: 32 }), ];
  const obj102 = { style: null, children: null };
  const obj103 = { backgroundColor: null, padding: 16, borderRadius: 16 };
  let obj112 = require("native");
  obj103.backgroundColor = obj112.setColorOpacity("white", 0.7);
  obj102.style = obj103;
  const obj104 = { spacing: 16, children: null };
  const items42 = [closure_12.map((variant) => closure_1_9(ExampleButton, { variant }, variant)), closure_14.map((variant) => closure_1_9(ExampleButton, { variant }, variant))];
  obj104.children = items42;
  obj102.children = closure_10(require("Stack/Stack").Stack, obj104);
  items41[1] = closure_9(closure_5, obj102);
  obj100.children = items41;
  obj99.children = closure_10(closure_5, obj100);
  items40[1] = closure_9(require("native").ThemeContextProvider, obj99);
  obj97.children = items40;
  items1[17] = closure_10(require("Stack/Stack").Stack, obj97);
  const obj105 = { children: null };
  const obj106 = { style: tmp.container, children: null };
  const items43 = [closure_9(require("Text/Text").Text, { variant: "heading-lg/bold", children: "Dark Client Theme" }), closure_9(require("Text/Text").Text, { variant: "text-sm/normal", children: "All buttons as they appear on a dark client theme" })];
  obj106.children = items43;
  const items44 = [closure_10(require("Stack/Stack").Stack, obj106), ];
  obj107 = { theme: 32.theme, gradient: 32, flags: null, children: null };
  const obj101 = { absolute: true, gradient: 32 };
  obj107.flags = require("native").setThemeFlag(0, require("native").ThemeContextFlags.MOBILE_DARK_GRADIENT_THEME_ENABLED);
  const obj108 = { style: { position: "relative", padding: 16 }, children: null };
  const items45 = [closure_9(require("ThemedGradient").Gradient, { absolute: true, gradient: 32 }), ];
  const obj110 = { style: null, children: null };
  const obj111 = { backgroundColor: null, padding: 16, borderRadius: 16 };
  const obj109 = { absolute: true, gradient: 32 };
  const obj118 = require("native");
  obj111.backgroundColor = require("native").setColorOpacity("black", 0.7);
  obj110.style = obj111;
  obj112 = { spacing: 16, children: null };
  const items46 = [closure_12.map((variant) => closure_1_9(ExampleButton, { variant }, variant)), closure_14.map((variant) => closure_1_9(ExampleButton, { variant }, variant))];
  obj112.children = items46;
  obj110.children = closure_10(require("Stack/Stack").Stack, obj112);
  items45[1] = closure_9(closure_5, obj110);
  obj108.children = items45;
  obj107.children = closure_10(closure_5, obj108);
  items44[1] = closure_9(require("native").ThemeContextProvider, obj107);
  obj105.children = items44;
  items1[18] = closure_10(require("Stack/Stack").Stack, obj105);
  const obj113 = { children: null };
  const obj114 = { style: tmp.container, children: null };
  const items47 = [closure_9(require("Text/Text").Text, { variant: "heading-lg/bold", children: "Floating Action Button" }), closure_9(require("Text/Text").Text, { variant: "text-sm/normal", children: "An ever-present icon button, giving the most important call to action in a compact way." })];
  obj114.children = items47;
  const items48 = [closure_10(require("Stack/Stack").Stack, obj114), closure_9(closure_5, { style: { padding: 48 } })];
  obj113.children = items48;
  items1[19] = closure_10(require("Stack/Stack").Stack, obj113);
  obj2.children = items1;
  obj1.children = closure_10(require("Stack/Stack").Stack, obj2);
  const items49 = [closure_9(closure_6, obj1), ];
  const obj123 = require("native");
  items49[1] = closure_9(require("FloatingActionButton").FloatingActionButton, {
    icon: _modDef7381,
    onPress() {

    },
    positionBottom: 32,
    accessibilityLabel: "Floating Action Button"
  });
  obj.children = items49;
  return closure_10(closure_11, obj);
};