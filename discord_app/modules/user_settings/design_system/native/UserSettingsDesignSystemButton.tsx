// discord_app/modules/user_settings/design_system/native/UserSettingsDesignSystemButton.tsx
import ThemesDefault from "../../../../../discord_common/js/packages/tokens/native.tsx";
import LinearGradientDefault from "../../../../../_runtime/04756_LinearGradient.js";
import registerAssetDefault from "../../../../../_runtime/07356_registerAsset.js";
import registerAssetDefault2 from "../../../../../_runtime/08174_registerAsset.js";
import registerAssetDefault3 from "../../../../../_runtime/09686_registerAsset.js";
import registerAssetDefault4 from "../../../../../_runtime/10002_registerAsset.js";
import registerAssetDefault5 from "../../../../../_runtime/10286_registerAsset.js";
import registerAssetDefault6 from "../../../../../_runtime/12389_registerAsset.js";
import registerAssetDefault7 from "../../../../../_runtime/12392_registerAsset.js";
import registerAssetDefault8 from "../../../../../_runtime/12393_registerAsset.js";
import registerAssetDefault9 from "../../../../../_runtime/12394_registerAsset.js";
import registerAssetDefault10 from "../../../../../_runtime/12395_registerAsset.js";
import registerAssetDefault11 from "../../../../../_runtime/12396_registerAsset.js";
import keysDefault from "useDesignSystemSettingsState.tsx";
import registerAssetDefault12 from "../../../../../_runtime/14900_registerAsset.js";
import _slicedToArray from "../../../../../_runtime/metro/00032__slicedToArray.js";
import noop from "../../../../../_runtime/00019_noop.js";
import get_ActivityIndicator from "../../../../../_runtime/00017_get_ActivityIndicator.js";
import ThemeTypes from "../../../client_themes/ClientThemesConstants.tsx";
import jsxProd from "../../../../../_runtime/react/00021_jsxProd.js";
import "createCacheKey";
import { ManaContext } from "../../../../../discord_common/js/packages/design/native.tsx";
import { int2hslRaw } from "../../../../../discord_common/js/shared/utils/ColorUtils.tsx";
import { useNavigation } from "../../../../design/components/Navigator/native/useNavigation.native.tsx";

const require = fn;
function ExampleButton(arg0) {
  ({ variant, text, grow } = arg0);
  const tmp3 = keysDefault();
  const enableLoadingState = tmp3.enableLoadingState;
  ({ buttonScale, buttonSize, iconPosition, showIcon, showDisabled } = tmp3);
  importDefault = React.useRef(null);
  const tmp4 = callback(React.useState(false), 2);
  dependencyMap = tmp4[1];
  const items = [enableLoadingState];
  callback = React.useCallback(() => {
    if (enableLoadingState) {
      if (null != ref.current) {
        const _clearTimeout = clearTimeout;
        clearTimeout(ref.current);
      }
      callback(true);
      const _setTimeout = setTimeout;
      ref.current = setTimeout(() => {
        callback(false);
      }, 5000);
    }
  }, items);
  const callback1 = React.useCallback(() => {
    callback(true);
    closure_1.current = setTimeout(() => {
      callback(false);
    }, 5000);
  }, []);
  const obj = { disabled: showDisabled, onPress: callback, onLongPress: callback1, loading: tmp4[0], variant, text: null, grow: null, size: null, icon: null, iconPosition: null, scaleAmountInPx: null };
  if (text == null) {
    text = variant;
  }
  if (text == null) {
    text = "";
  }
  obj[5] = text;
  if (grow == null) {
    grow = false;
  }
  obj[6] = grow;
  obj[7] = buttonSize;
  let tmpResult;
  if (showIcon) {
    tmpResult = registerAssetDefault12;
  }
  obj[8] = tmpResult;
  obj[9] = iconPosition;
  obj[10] = buttonScale;
  return callback(enableLoadingState(4745).Button, obj);
}
function ExampleIconButton(arg0) {
  ({ variant, showLabel } = arg0);
  if (showLabel === undefined) {
    showLabel = false;
  }
  dependencyMap = undefined;
  let callback;
  const tmp3 = keysDefault();
  const enableLoadingState = tmp3.enableLoadingState;
  const showDisabled = tmp3.showDisabled;
  importDefault = React.useRef(null);
  [tmp5, c2] = callback(React.useState(false), 2);
  const items = [enableLoadingState];
  callback = React.useCallback(() => {
    if (enableLoadingState) {
      if (null != ref.current) {
        const _clearTimeout = clearTimeout;
        clearTimeout(ref.current);
      }
      _undefined(true);
      const _setTimeout = setTimeout;
      ref.current = setTimeout(() => {
        callback(false);
      }, 5000);
    }
  }, items);
  if (showLabel) {
    let obj = { disabled: null, onPress: null, label: null, grow: true, loading: null, variant: null, icon: null };
    obj[0] = showDisabled;
    obj[1] = function onPress() {
      return callback();
    };
    let str2 = variant;
    if (variant == null) {
      str2 = "";
    }
    obj[2] = str2;
    obj[4] = tmp5;
    obj[5] = variant;
    obj[6] = tmp(7356);
  } else {
    obj = { disabled: null, onPress: null, accessibilityLabel: null, loading: null, variant: null, size: null, icon: null };
    obj[0] = showDisabled;
    obj[1] = function onPress() {
      return callback();
    };
    let str = variant;
    if (variant == null) {
      str = "";
    }
    obj[2] = str;
    obj[3] = tmp5;
    obj[4] = variant;
    obj[5] = tmp3.buttonSize;
    obj[6] = tmp(7356);
  }
  return callback(enableLoadingState(8035).IconButton, obj);
}
function ExampleImageButton(arg0) {
  ({ image, label, showLabel } = arg0);
  if (showLabel === undefined) {
    showLabel = false;
  }
  dependencyMap = undefined;
  let callback;
  const tmp = keysDefault();
  const enableLoadingState = tmp.enableLoadingState;
  const showDisabled = tmp.showDisabled;
  importDefault = React.useRef(null);
  [tmp3, c2] = callback(React.useState(false), 2);
  const items = [enableLoadingState];
  callback = React.useCallback(() => {
    if (enableLoadingState) {
      if (null != ref.current) {
        const _clearTimeout = clearTimeout;
        clearTimeout(ref.current);
      }
      _undefined(true);
      const _setTimeout = setTimeout;
      ref.current = setTimeout(() => {
        callback(false);
      }, 5000);
    }
  }, items);
  if (showLabel) {
    let obj = { disabled: null, onPress: null, label: null, grow: true, loading: null, image: null };
    obj[0] = showDisabled;
    obj[1] = function onPress() {
      return callback();
    };
    obj[2] = label;
    obj[4] = tmp3;
    obj[5] = image;
  } else {
    obj = { disabled: null, onPress: null, accessibilityLabel: null, loading: null, size: null, image: null };
    obj[0] = showDisabled;
    obj[1] = function onPress() {
      return callback();
    };
    obj[2] = label;
    obj[3] = tmp3;
    obj[4] = tmp.buttonSize;
    obj[5] = image;
  }
  return callback(enableLoadingState(12398).ImageButton, obj);
}
function ExampleToggleButton() {
  const tmp = callback(React.useState(false), 2);
  const first = tmp[0];
  importDefault = tmp[1];
  first(13529);
  const obj = { text: "Unfollow", icon: registerAssetDefault4 };
  obj[0] = obj;
  obj[1] = { text: "Follow", icon: registerAssetDefault2 };
  const toggleButtonProps = obj.useToggleButtonProps(obj, first);
  const obj2 = {};
  const merged = Object.assign(toggleButtonProps);
  obj2.onPress = function onPress() {
    callback(!first);
  };
  obj2.variant = "secondary";
  obj2.size = "md";
  return callback2(first(4745).Button, obj2);
}
function ExampleIconToggleButton() {
  const tmp = callback(React.useState(false), 2);
  const first = tmp[0];
  importDefault = tmp[1];
  first(13529);
  const obj = { variant: "destructive", accessibilityLabel: "Mute", icon: registerAssetDefault3 };
  obj[0] = obj;
  obj[1] = { variant: "secondary", accessibilityLabel: "Mute", icon: registerAssetDefault3 };
  const toggleIconButtonProps = obj.useToggleIconButtonProps(obj, first);
  const obj2 = {};
  const merged = Object.assign(toggleIconButtonProps);
  obj2.onPress = function onPress() {
    callback(!first);
  };
  obj2.size = "md";
  return callback2(first(8035).IconButton, obj2);
}
({ View: c5, ScrollView: closure_6 } = get_ActivityIndicator);
({ LIGHT_BACKGROUND_GRADIENT_PRESETS: error, DARK_BACKGROUND_GRADIENT_PRESETS: closure_8 } = ThemeTypes);
({ jsx: c9, jsxs: c10, Fragment: unpackModuleId } = jsxProd);
let closure_12 = ["primary", "secondary", "tertiary"];
let closure_13 = ["primary-overlay", "secondary-overlay"];
let closure_14 = ["destructive", "active"];
let closure_15 = ["expressive"];
let closure_16 = ["experimental_premium-primary", "experimental_premium-secondary"];
const createCacheKey = { paddingHorizontal: ThemesDefault.space.PX_16 };
createCacheKey[0] = createCacheKey;
createCacheKey[1] = { paddingHorizontal: ThemesDefault.space.PX_16, paddingVertical: ThemesDefault.space.PX_8 };
createCacheKey[2] = { backgroundColor: ThemesDefault.unsafe_rawColors.BG_GRADIENT_CHROMA_GLOW_1, paddingVertical: ThemesDefault.space.PX_48 };
let closure_22 = createCacheKey.createStyles(createCacheKey);
const result = require("obj132").fileFinishedImporting("modules/user_settings/design_system/native/UserSettingsDesignSystemButton.tsx");

export default function UserSettingsDesignSystemButton() {
  const tmp = callback4();
  const _require = tmp;
  let obj = useNavigation;
  const navigation = obj.useNavigation();
  importDefault = React.useCallback(() => {
    callback(paths[18]).openLazy(lib(paths[20])(paths[19], paths.paths), "UserSettingsDesignSystemButtonActionSheet");
  }, []);
  obj = {
    headerRight() {
      return closure_1_9(lib(dependencyMap[8]).IconButton, { onPress: callback, icon: callback(dependencyMap[9]), size: "sm", variant: "secondary", accessibilityLabel: "Settings" });
    }
  };
  navigation.setOptions(obj);
  obj = { children: null };
  obj1 = { children: null };
  const obj2 = { spacing: 24, children: null };
  const obj3 = { children: null };
  let items = [callback2(require("../../../../design/components/Stack/native/Stack.native.tsx").Stack, { style: tmp.container, children: callback2(require("../../../../design/components/Text/native/Text.tsx").Text, { variant: "heading-lg/bold", children: "Hierarchical buttons" }) }), ];
  const obj4 = { style: tmp.container, children: callback2(require("../../../../design/components/Text/native/Text.tsx").Text, { variant: "heading-lg/bold", children: "Hierarchical buttons" }) };
  items[1] = callback2(closure_5, {
    children: closure_12.map((item, index) => {
      { style: lib.buttonContainer, children: closure_1_9(ExampleButton, obj) };
      obj = { variant: item };
      return closure_1_9(closure_1_5, obj, item);
    })
  });
  obj3[0] = items;
  const items1 = [callback3(require("../../../../design/components/Stack/native/Stack.native.tsx").Stack, obj3), , , , , , , , , , , , , , , , , , , ];
  const obj6 = { children: null };
  const obj5 = {
    children: closure_12.map((item, index) => {
      { style: lib.buttonContainer, children: closure_1_9(ExampleButton, obj) };
      obj = { variant: item };
      return closure_1_9(closure_1_5, obj, item);
    })
  };
  const items2 = [callback2(require("../../../../design/components/Stack/native/Stack.native.tsx").Stack, { style: tmp.container, children: callback2(require("../../../../design/components/Text/native/Text.tsx").Text, { variant: "heading-lg/bold", children: "Sentiment buttons" }) }), ];
  const obj7 = { style: tmp.container, children: callback2(require("../../../../design/components/Text/native/Text.tsx").Text, { variant: "heading-lg/bold", children: "Sentiment buttons" }) };
  items2[1] = callback2(closure_5, {
    children: closure_14.map((item, index) => {
      { style: lib.buttonContainer, children: closure_1_9(ExampleButton, obj) };
      obj = { variant: item };
      return closure_1_9(closure_1_5, obj, item);
    })
  });
  obj6[0] = items2;
  items1[1] = callback3(require("../../../../design/components/Stack/native/Stack.native.tsx").Stack, obj6);
  const obj9 = { children: null };
  const obj8 = {
    children: closure_14.map((item, index) => {
      { style: lib.buttonContainer, children: closure_1_9(ExampleButton, obj) };
      obj = { variant: item };
      return closure_1_9(closure_1_5, obj, item);
    })
  };
  const items3 = [callback2(require("../../../../design/components/Stack/native/Stack.native.tsx").Stack, { style: tmp.container, children: callback2(require("../../../../design/components/Text/native/Text.tsx").Text, { variant: "heading-lg/bold", children: "Expressive buttons" }) }), ];
  const obj10 = { style: tmp.container, children: callback2(require("../../../../design/components/Text/native/Text.tsx").Text, { variant: "heading-lg/bold", children: "Expressive buttons" }) };
  items3[1] = callback2(closure_5, {
    children: closure_15.map((item, index) => {
      { style: lib.buttonContainer, children: closure_1_9(ExampleButton, obj) };
      obj = { variant: item };
      return closure_1_9(closure_1_5, obj, item);
    })
  });
  obj9[0] = items3;
  items1[2] = callback3(require("../../../../design/components/Stack/native/Stack.native.tsx").Stack, obj9);
  const obj12 = { children: null };
  const obj11 = {
    children: closure_15.map((item, index) => {
      { style: lib.buttonContainer, children: closure_1_9(ExampleButton, obj) };
      obj = { variant: item };
      return closure_1_9(closure_1_5, obj, item);
    })
  };
  const items4 = [callback2(require("../../../../design/components/Stack/native/Stack.native.tsx").Stack, { style: tmp.container, children: callback2(require("../../../../design/components/Text/native/Text.tsx").Text, { variant: "heading-lg/bold", children: "Experimental premium buttons" }) }), ];
  const obj13 = { style: tmp.container, children: callback2(require("../../../../design/components/Text/native/Text.tsx").Text, { variant: "heading-lg/bold", children: "Experimental premium buttons" }) };
  items4[1] = callback2(closure_5, {
    children: closure_16.map((item, index) => {
      { style: lib.buttonContainer, children: closure_1_9(ExampleButton, obj) };
      obj = { variant: item };
      return closure_1_9(closure_1_5, obj, item);
    })
  });
  obj12[0] = items4;
  items1[3] = callback3(require("../../../../design/components/Stack/native/Stack.native.tsx").Stack, obj12);
  const obj15 = { children: null };
  const obj16 = { style: tmp.container, children: null };
  const items5 = [callback2(require("../../../../design/components/Text/native/Text.tsx").Text, { variant: "heading-lg/bold", children: "Overlay buttons" }), callback2(require("../../../../design/components/Text/native/Text.tsx").Text, { variant: "text-sm/normal", children: "Overlay buttons are meant to be used overlayed on top of an image or background color. They do not change colors with the theme." })];
  obj16[1] = items5;
  const items6 = [callback3(require("../../../../design/components/Stack/native/Stack.native.tsx").Stack, obj16), ];
  const obj14 = {
    children: closure_16.map((item, index) => {
      { style: lib.buttonContainer, children: closure_1_9(ExampleButton, obj) };
      obj = { variant: item };
      return closure_1_9(closure_1_5, obj, item);
    })
  };
  items6[1] = callback2(closure_5, {
    children: closure_13.map((item, index) => {
      { style: items, children: closure_1_9(ExampleButton, obj) };
      items = [, ];
      ({ buttonContainer: arr[0], overlayButtonContainer: arr[1] } = closure_0);
      obj = { variant: item };
      return closure_1_9(closure_1_5, obj, item);
    })
  });
  obj15[0] = items6;
  items1[4] = callback3(require("../../../../design/components/Stack/native/Stack.native.tsx").Stack, obj15);
  const obj18 = { children: null };
  const obj19 = { style: tmp.container, children: null };
  const items7 = [callback2(require("../../../../design/components/Text/native/Text.tsx").Text, { variant: "heading-lg/bold", children: "Custom color icons" }), callback2(require("../../../../design/components/Text/native/Text.tsx").Text, { variant: "text-sm/normal", children: "If a button needs to have an icon which has its own custom color, then create your own Button.Icon to pass as the icon prop." })];
  obj19[1] = items7;
  const items8 = [callback3(require("../../../../design/components/Stack/native/Stack.native.tsx").Stack, obj19), ];
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
    children: closure_13.map((item, index) => {
      { style: items, children: closure_1_9(ExampleButton, obj) };
      items = [, ];
      ({ buttonContainer: arr[0], overlayButtonContainer: arr[1] } = closure_0);
      obj = { variant: item };
      return closure_1_9(closure_1_5, obj, item);
    })
  };
  obj22[4] = callback2(require("../../../../design/components/Button/native/Button.native.tsx").Button.Icon, { source: registerAssetDefault5 });
  obj21[1] = callback2(require("../../../../design/components/Button/native/Button.native.tsx").Button, obj22);
  const items9 = [callback2(closure_5, obj21), ];
  const obj24 = { style: tmp.buttonContainer, children: null };
  const obj25 = {
    onPress() {

    },
    variant: "secondary",
    text: "Button with a entity variant icon",
    size: "md",
    icon: null
  };
  obj25[4] = callback2(require("../../../../design/components/Button/native/Button.native.tsx").Button.Icon, { variant: "entity", source: registerAssetDefault6 });
  obj24[1] = callback2(require("../../../../design/components/Button/native/Button.native.tsx").Button, obj25);
  items9[1] = callback2(closure_5, obj24);
  obj20[0] = items9;
  items8[1] = callback3(closure_5, obj20);
  obj18[0] = items8;
  items1[5] = callback3(require("../../../../design/components/Stack/native/Stack.native.tsx").Stack, obj18);
  const obj27 = { children: null };
  const items10 = [callback2(require("../../../../design/components/Stack/native/Stack.native.tsx").Stack, { style: tmp.container, children: callback2(require("../../../../design/components/Text/native/Text.tsx").Text, { variant: "heading-lg/bold", children: "Buttons with various text lengths" }) }), ];
  const obj29 = { children: null };
  const obj30 = { style: tmp.buttonContainer, children: null };
  const obj28 = { style: tmp.container, children: callback2(require("../../../../design/components/Text/native/Text.tsx").Text, { variant: "heading-lg/bold", children: "Buttons with various text lengths" }) };
  obj30[1] = callback2(require("../../../../design/components/Button/native/Button.native.tsx").Button, {
    onPress() {

    },
    variant: "secondary",
    text: "Neque porro quisquam est qui dolorem ipsum quia dolor sit amet, consectetur",
    size: "md",
    icon: registerAssetDefault5
  });
  const items11 = [callback2(closure_5, obj30), , , ];
  const obj32 = { style: tmp.buttonContainer, children: null };
  obj32[1] = callback2(require("../../../../design/components/Button/native/Button.native.tsx").Button, {
    onPress() {

    },
    variant: "secondary",
    text: "Neque porro quisquam est qui dolorem ipsum quia dolor sit amet, consectetur",
    size: "md",
    icon: registerAssetDefault5,
    iconPosition: "end"
  });
  items11[1] = callback2(closure_5, obj32);
  items11[2] = callback2(closure_5, { style: tmp.buttonContainer, children: callback2(require("../../../../design/components/Button/native/Button.native.tsx").Button, obj35) });
  const obj34 = { style: tmp.buttonContainer, children: callback2(require("../../../../design/components/Button/native/Button.native.tsx").Button, obj35) };
  items11[3] = callback2(closure_5, { style: tmp.buttonContainer, children: callback2(require("../../../../design/components/Button/native/Button.native.tsx").Button, obj37) });
  obj29[0] = items11;
  items10[1] = callback3(closure_5, obj29);
  obj27[0] = items10;
  items1[6] = callback3(require("../../../../design/components/Stack/native/Stack.native.tsx").Stack, obj27);
  const obj38 = { children: null };
  const obj39 = { style: tmp.container, children: null };
  const items12 = [callback2(require("../../../../design/components/Text/native/Text.tsx").Text, { variant: "heading-lg/bold", children: "Toggling button states" }), callback2(require("../../../../design/components/Text/native/Text.tsx").Text, { variant: "text-sm/normal", children: "Use the useToggleButtonProps hook or the useToggleIconButtonProps hook to toggle a button between two states." }), callback2(require("../../../../design/components/Text/native/Text.tsx").Text, { variant: "text-sm/normal", children: "This hook changes the button presentation and adds some important accessibility attributes for a toggle button." })];
  obj39[1] = items12;
  const items13 = [callback3(require("../../../../design/components/Stack/native/Stack.native.tsx").Stack, obj39), ];
  const obj40 = { children: null };
  const obj36 = { style: tmp.buttonContainer, children: callback2(require("../../../../design/components/Button/native/Button.native.tsx").Button, obj37) };
  const items14 = [callback2(closure_5, { style: tmp.buttonContainer, children: callback2(ExampleToggleButton, {}) }), ];
  const obj41 = { style: tmp.buttonContainer, children: callback2(ExampleToggleButton, {}) };
  items14[1] = callback2(closure_5, { style: tmp.buttonContainer, children: callback2(ExampleIconToggleButton, {}) });
  obj40[0] = items14;
  items13[1] = callback3(closure_5, obj40);
  obj38[0] = items13;
  items1[7] = callback3(require("../../../../design/components/Stack/native/Stack.native.tsx").Stack, obj38);
  const obj43 = { children: null };
  const obj44 = { style: tmp.container, children: null };
  const items15 = [callback2(require("../../../../design/components/Text/native/Text.tsx").Text, { variant: "heading-lg/bold", children: "Hierarchical icon buttons" }), callback2(require("../../../../design/components/Text/native/Text.tsx").Text, { variant: "text-sm/normal", children: "While the primary variants of IconButton are supported, these should be used very rarely." }), callback2(require("../../../../design/components/Text/native/Text.tsx").Text, { variant: "text-sm/normal", children: "An icon button usually has a secondary function and should use the secondary variants." })];
  obj44[1] = items15;
  const items16 = [callback3(require("../../../../design/components/Stack/native/Stack.native.tsx").Stack, obj44), ];
  const obj42 = { style: tmp.buttonContainer, children: callback2(ExampleIconToggleButton, {}) };
  items16[1] = callback2(closure_5, {
    children: closure_12.map((item, index) => {
      { style: lib.buttonContainer, children: closure_1_9(ExampleIconButton, obj) };
      obj = { variant: item };
      return closure_1_9(closure_1_5, obj, item);
    })
  });
  obj43[0] = items16;
  items1[8] = callback3(require("../../../../design/components/Stack/native/Stack.native.tsx").Stack, obj43);
  const obj46 = { children: null };
  const obj45 = {
    children: closure_12.map((item, index) => {
      { style: lib.buttonContainer, children: closure_1_9(ExampleIconButton, obj) };
      obj = { variant: item };
      return closure_1_9(closure_1_5, obj, item);
    })
  };
  const items17 = [callback2(require("../../../../design/components/Stack/native/Stack.native.tsx").Stack, { style: tmp.container, children: callback2(require("../../../../design/components/Text/native/Text.tsx").Text, { variant: "heading-lg/bold", children: "Sentiment icon buttons" }) }), ];
  const obj47 = { style: tmp.container, children: callback2(require("../../../../design/components/Text/native/Text.tsx").Text, { variant: "heading-lg/bold", children: "Sentiment icon buttons" }) };
  items17[1] = callback2(closure_5, {
    children: closure_14.map((item, index) => {
      { style: lib.buttonContainer, children: closure_1_9(ExampleIconButton, obj) };
      obj = { variant: item };
      return closure_1_9(closure_1_5, obj, item);
    })
  });
  obj46[0] = items17;
  items1[9] = callback3(require("../../../../design/components/Stack/native/Stack.native.tsx").Stack, obj46);
  const obj49 = { children: null };
  const obj48 = {
    children: closure_14.map((item, index) => {
      { style: lib.buttonContainer, children: closure_1_9(ExampleIconButton, obj) };
      obj = { variant: item };
      return closure_1_9(closure_1_5, obj, item);
    })
  };
  const items18 = [callback2(require("../../../../design/components/Stack/native/Stack.native.tsx").Stack, { style: tmp.container, children: callback2(require("../../../../design/components/Text/native/Text.tsx").Text, { variant: "heading-lg/bold", children: "Overlay icon buttons" }) }), ];
  const obj50 = { style: tmp.container, children: callback2(require("../../../../design/components/Text/native/Text.tsx").Text, { variant: "heading-lg/bold", children: "Overlay icon buttons" }) };
  items18[1] = callback2(closure_5, {
    children: closure_13.map((item, index) => {
      { style: items, children: closure_1_9(ExampleIconButton, obj) };
      items = [, ];
      ({ buttonContainer: arr[0], overlayButtonContainer: arr[1] } = closure_0);
      obj = { variant: item };
      return closure_1_9(closure_1_5, obj, item);
    })
  });
  obj49[0] = items18;
  items1[10] = callback3(require("../../../../design/components/Stack/native/Stack.native.tsx").Stack, obj49);
  const obj52 = { children: null };
  const obj53 = { style: tmp.container, children: null };
  const items19 = [callback2(require("../../../../design/components/Text/native/Text.tsx").Text, { variant: "heading-lg/bold", children: "Image buttons" }), callback2(require("../../../../design/components/Text/native/Text.tsx").Text, { variant: "text-sm/normal", children: "Image buttons are rereserved for more branded buttons, like social media sharing buttons." })];
  obj53[1] = items19;
  const items20 = [callback3(require("../../../../design/components/Stack/native/Stack.native.tsx").Stack, obj53), ];
  const obj54 = { children: null };
  const obj55 = { style: items21, children: null };
  items21 = [tmp.buttonContainer];
  const obj51 = {
    children: closure_13.map((item, index) => {
      { style: items, children: closure_1_9(ExampleIconButton, obj) };
      items = [, ];
      ({ buttonContainer: arr[0], overlayButtonContainer: arr[1] } = closure_0);
      obj = { variant: item };
      return closure_1_9(closure_1_5, obj, item);
    })
  };
  obj55[1] = callback2(ExampleImageButton, { image: registerAssetDefault9, label: "Telegram" });
  const items22 = [callback2(closure_5, obj55), , ];
  const obj57 = { style: items23, children: null };
  items23 = [tmp.buttonContainer];
  obj57[1] = callback2(ExampleImageButton, { image: registerAssetDefault11, label: "WhatsApp" });
  items22[1] = callback2(closure_5, obj57);
  const obj59 = { style: items24, children: null };
  items24 = [tmp.buttonContainer];
  obj59[1] = callback2(ExampleImageButton, { image: registerAssetDefault10, label: "Twitter" });
  items22[2] = callback2(closure_5, obj59);
  obj54[0] = items22;
  items20[1] = callback3(closure_5, obj54);
  obj52[0] = items20;
  items1[11] = callback3(require("../../../../design/components/Stack/native/Stack.native.tsx").Stack, obj52);
  const obj61 = { spacing: 24, children: null };
  const obj62 = { style: tmp.container, children: null };
  const items25 = [callback2(require("../../../../design/components/Text/native/Text.tsx").Text, { variant: "heading-lg/bold", children: "IconButton with a label" }), callback2(require("../../../../design/components/Text/native/Text.tsx").Text, { variant: "text-sm/normal", children: "Icon buttons with a label require a different combination of props and will only appear in the 'lg' size." }), callback2(require("../../../../design/components/Text/native/Text.tsx").Text, { variant: "text-sm/normal", children: "It is highly recommended that a list of these buttons appear wrapped in a ScrollView, so that they will horizontally scroll when there are many buttons, when the text is longer through internationalization, or the text is larger through OS font size settings." })];
  obj62[1] = items25;
  const items26 = [callback3(require("../../../../design/components/Stack/native/Stack.native.tsx").Stack, obj62), , ];
  const obj63 = { horizontal: true, contentContainerStyle: { minWidth: "100%" }, children: null };
  obj63[2] = callback2(require("../../../../design/components/Stack/native/Stack.native.tsx").Stack, { direction: "horizontal", justify: "center", style: tmp.buttonContainer, children: closure_12.map((item, index) => callback2(closure_18, { variant: item, showLabel: true }, item)) });
  items26[1] = callback2(closure_6, obj63);
  const obj65 = { horizontal: true, contentContainerStyle: { minWidth: "100%" }, children: null };
  const obj66 = { direction: "horizontal", justify: "center", style: tmp.buttonContainer, children: null };
  const obj64 = { direction: "horizontal", justify: "center", style: tmp.buttonContainer, children: closure_12.map((item, index) => callback2(closure_18, { variant: item, showLabel: true }, item)) };
  const items27 = [
    callback2(require("../../../../design/components/Button/native/IconButton.native.tsx").IconButton, {
      variant: "secondary",
      icon: registerAssetDefault,
      label: "Supercalifragilisticexpialidocious",
      grow: true,
      onPress() {

      }
    }),
  ,

  ];
  items27[1] = callback2(require("../../../../design/components/Button/native/IconButton.native.tsx").IconButton, {
    variant: "secondary",
    icon: registerAssetDefault,
    label: "Supercalifragilisticexpialidocious",
    grow: true,
    onPress() {

    }
  });
  items27[2] = callback2(require("../../../../design/components/Button/native/IconButton.native.tsx").IconButton, {
    variant: "secondary",
    icon: registerAssetDefault,
    label: "Supercalifragilisticexpialidocious",
    grow: true,
    onPress() {

    }
  });
  obj66[3] = items27;
  obj65[2] = callback3(require("../../../../design/components/Stack/native/Stack.native.tsx").Stack, obj66);
  items26[2] = callback2(closure_6, obj65);
  obj61[1] = items26;
  items1[12] = callback3(require("../../../../design/components/Stack/native/Stack.native.tsx").Stack, obj61);
  const obj70 = { spacing: 24, children: null };
  const items28 = [callback2(require("../../../../design/components/Stack/native/Stack.native.tsx").Stack, { style: tmp.container, children: callback2(require("../../../../design/components/Text/native/Text.tsx").Text, { variant: "heading-lg/bold", children: "ImageButton with a label" }) }), , ];
  const obj72 = { horizontal: true, contentContainerStyle: { minWidth: "100%" }, children: null };
  const obj73 = { direction: "horizontal", justify: "center", style: tmp.buttonContainer, children: null };
  const obj71 = { style: tmp.container, children: callback2(require("../../../../design/components/Text/native/Text.tsx").Text, { variant: "heading-lg/bold", children: "ImageButton with a label" }) };
  const items29 = [callback2(ExampleImageButton, { image: registerAssetDefault8, label: "Label", showLabel: true }), , ];
  items29[1] = callback2(ExampleImageButton, { image: registerAssetDefault6, label: "Label", showLabel: true });
  items29[2] = callback2(ExampleImageButton, { image: registerAssetDefault7, label: "Label", showLabel: true });
  obj73[3] = items29;
  obj72[2] = callback3(require("../../../../design/components/Stack/native/Stack.native.tsx").Stack, obj73);
  items28[1] = callback2(closure_6, obj72);
  const obj77 = { horizontal: true, contentContainerStyle: { minWidth: "100%" }, children: null };
  const obj78 = { direction: "horizontal", justify: "center", style: tmp.buttonContainer, children: null };
  const items30 = [callback2(ExampleImageButton, { image: registerAssetDefault9, label: "Supercalifragilisticexpialidocious", showLabel: true }), , ];
  items30[1] = callback2(ExampleImageButton, { image: registerAssetDefault11, label: "Supercalifragilisticexpialidocious", showLabel: true });
  items30[2] = callback2(ExampleImageButton, { image: registerAssetDefault10, label: "Supercalifragilisticexpialidocious", showLabel: true });
  obj78[3] = items30;
  obj77[2] = callback3(require("../../../../design/components/Stack/native/Stack.native.tsx").Stack, obj78);
  items28[2] = callback2(closure_6, obj77);
  obj70[1] = items28;
  items1[13] = callback3(require("../../../../design/components/Stack/native/Stack.native.tsx").Stack, obj70);
  const obj82 = { spacing: 24, children: null };
  const items31 = [callback2(require("../../../../design/components/Stack/native/Stack.native.tsx").Stack, { style: tmp.container, children: callback2(require("../../../../design/components/Text/native/Text.tsx").Text, { variant: "heading-lg/bold", children: "Mixing buttons" }) }), ];
  const obj84 = { direction: "horizontal", style: tmp.container, children: null };
  const items32 = [callback2(ExampleButton, { variant: "secondary", text: "Search", grow: true }), callback2(ExampleIconButton, { variant: "secondary" })];
  obj84[2] = items32;
  items31[1] = callback3(require("../../../../design/components/ButtonGroup/native/ButtonGroup.native.tsx").ButtonGroup, obj84);
  obj82[1] = items31;
  items1[14] = callback3(require("../../../../design/components/Stack/native/Stack.native.tsx").Stack, obj82);
  const obj85 = { children: null };
  const obj86 = { style: tmp.container, children: null };
  const items33 = [callback2(require("../../../../design/components/Text/native/Text.tsx").Text, { variant: "heading-lg/bold", children: "Light Profile Themes" }), callback2(require("../../../../design/components/Text/native/Text.tsx").Text, { variant: "text-sm/normal", children: "All buttons as they appear on a light profile theme" })];
  obj86[1] = items33;
  const items34 = [callback3(require("../../../../design/components/Stack/native/Stack.native.tsx").Stack, obj86), ];
  const obj87 = { theme: "light", primaryColor: null, secondaryColor: null, children: null };
  let obj91 = int2hslRaw;
  obj87[1] = obj91.hex2int("#ffae70");
  let obj92 = int2hslRaw;
  obj87[2] = obj92.hex2int("#cc2300");
  const obj88 = { style: { padding: 16 }, start: { x: 0, y: 0 }, end: { x: 0, y: 1 }, colors: ["#ffae70", "#cc2300"], children: null };
  const obj83 = { style: tmp.container, children: callback2(require("../../../../design/components/Text/native/Text.tsx").Text, { variant: "heading-lg/bold", children: "Mixing buttons" }) };
  const obj89 = { children: null };
  const obj90 = { spacing: 16, children: null };
  const items35 = [closure_12.map((item, index) => callback2(closure_17, { variant: item }, item)), closure_14.map((item, index) => callback2(closure_17, { variant: item }, item))];
  obj90[1] = items35;
  obj89[0] = callback3(require("../../../../design/components/Stack/native/Stack.native.tsx").Stack, obj90);
  obj88[4] = callback2(require("../../../../design/components/Card/native/Card.native.tsx").Card, obj89);
  obj87[3] = callback2(LinearGradientDefault, obj88);
  items34[1] = callback2(require("../../../../../discord_common/js/packages/design/native.tsx").ThemeContextProvider, obj87);
  obj85[0] = items34;
  items1[15] = callback3(require("../../../../design/components/Stack/native/Stack.native.tsx").Stack, obj85);
  obj91 = { children: null };
  obj92 = { style: tmp.container, children: null };
  const items36 = [callback2(require("../../../../design/components/Text/native/Text.tsx").Text, { variant: "heading-lg/bold", children: "Dark Profile Themes" }), callback2(require("../../../../design/components/Text/native/Text.tsx").Text, { variant: "text-sm/normal", children: "All buttons as they appear on a dark profile theme" })];
  obj92[1] = items36;
  const items37 = [callback3(require("../../../../design/components/Stack/native/Stack.native.tsx").Stack, obj92), ];
  const obj93 = { theme: "dark", primaryColor: null, secondaryColor: null, children: null };
  let obj99 = int2hslRaw;
  obj93[1] = obj99.hex2int("#490000");
  let obj100 = int2hslRaw;
  obj93[2] = obj100.hex2int("#cc2300");
  const obj94 = { style: { padding: 16 }, start: { x: 0, y: 0 }, end: { x: 0, y: 1 }, colors: ["#490000", "#cc2300"], children: null };
  const obj95 = { children: null };
  const obj96 = { spacing: 16, children: null };
  const items38 = [closure_12.map((item, index) => callback2(closure_17, { variant: item }, item)), closure_14.map((item, index) => callback2(closure_17, { variant: item }, item))];
  obj96[1] = items38;
  obj95[0] = callback3(require("../../../../design/components/Stack/native/Stack.native.tsx").Stack, obj96);
  obj94[4] = callback2(require("../../../../design/components/Card/native/Card.native.tsx").Card, obj95);
  obj93[3] = callback2(LinearGradientDefault, obj94);
  items37[1] = callback2(require("../../../../../discord_common/js/packages/design/native.tsx").ThemeContextProvider, obj93);
  obj91[0] = items37;
  items1[16] = callback3(require("../../../../design/components/Stack/native/Stack.native.tsx").Stack, obj91);
  const obj97 = { children: null };
  const obj98 = { style: tmp.container, children: null };
  const items39 = [callback2(require("../../../../design/components/Text/native/Text.tsx").Text, { variant: "heading-lg/bold", children: "Light Client Theme" }), callback2(require("../../../../design/components/Text/native/Text.tsx").Text, { variant: "text-sm/normal", children: "All buttons as they appear on a light client theme" })];
  obj98[1] = items39;
  const items40 = [callback3(require("../../../../design/components/Stack/native/Stack.native.tsx").Stack, obj98), ];
  obj99 = { theme: 32.theme, gradient: 32, flags: null, children: null };
  let obj107 = ManaContext;
  obj99[2] = obj107.setThemeFlag(0, require("../../../../../discord_common/js/packages/design/native.tsx").ThemeContextFlags.MOBILE_LIGHT_GRADIENT_THEME_ENABLED);
  obj100 = { style: { position: "relative", padding: 16 }, children: null };
  const items41 = [callback2(require("../../../client_themes/native/ThemedGradient.tsx").Gradient, { absolute: true, gradient: 32 }), ];
  const obj102 = { style: null, children: null };
  const obj103 = { backgroundColor: null, padding: 16, borderRadius: 16 };
  let obj112 = ManaContext;
  obj103[0] = obj112.setColorOpacity("white", 0.7);
  obj102[0] = obj103;
  const obj104 = { spacing: 16, children: null };
  const items42 = [closure_12.map((item, index) => callback2(closure_17, { variant: item }, item)), closure_14.map((item, index) => callback2(closure_17, { variant: item }, item))];
  obj104[1] = items42;
  obj102[1] = callback3(require("../../../../design/components/Stack/native/Stack.native.tsx").Stack, obj104);
  items41[1] = callback2(closure_5, obj102);
  obj100[1] = items41;
  obj99[3] = callback3(closure_5, obj100);
  items40[1] = callback2(require("../../../../../discord_common/js/packages/design/native.tsx").ThemeContextProvider, obj99);
  obj97[0] = items40;
  items1[17] = callback3(require("../../../../design/components/Stack/native/Stack.native.tsx").Stack, obj97);
  const obj105 = { children: null };
  const obj106 = { style: tmp.container, children: null };
  const items43 = [callback2(require("../../../../design/components/Text/native/Text.tsx").Text, { variant: "heading-lg/bold", children: "Dark Client Theme" }), callback2(require("../../../../design/components/Text/native/Text.tsx").Text, { variant: "text-sm/normal", children: "All buttons as they appear on a dark client theme" })];
  obj106[1] = items43;
  const items44 = [callback3(require("../../../../design/components/Stack/native/Stack.native.tsx").Stack, obj106), ];
  obj107 = { theme: 32.theme, gradient: 32, flags: null, children: null };
  obj107[2] = require("../../../../../discord_common/js/packages/design/native.tsx").setThemeFlag(0, require("../../../../../discord_common/js/packages/design/native.tsx").ThemeContextFlags.MOBILE_DARK_GRADIENT_THEME_ENABLED);
  const obj108 = { style: { position: "relative", padding: 16 }, children: null };
  const items45 = [callback2(require("../../../client_themes/native/ThemedGradient.tsx").Gradient, { absolute: true, gradient: 32 }), ];
  const obj110 = { style: null, children: null };
  const obj111 = { backgroundColor: null, padding: 16, borderRadius: 16 };
  const obj118 = ManaContext;
  obj111[0] = require("../../../../../discord_common/js/packages/design/native.tsx").setColorOpacity("black", 0.7);
  obj110[0] = obj111;
  obj112 = { spacing: 16, children: null };
  const items46 = [closure_12.map((item, index) => callback2(closure_17, { variant: item }, item)), closure_14.map((item, index) => callback2(closure_17, { variant: item }, item))];
  obj112[1] = items46;
  obj110[1] = callback3(require("../../../../design/components/Stack/native/Stack.native.tsx").Stack, obj112);
  items45[1] = callback2(closure_5, obj110);
  obj108[1] = items45;
  obj107[3] = callback3(closure_5, obj108);
  items44[1] = callback2(require("../../../../../discord_common/js/packages/design/native.tsx").ThemeContextProvider, obj107);
  obj105[0] = items44;
  items1[18] = callback3(require("../../../../design/components/Stack/native/Stack.native.tsx").Stack, obj105);
  const obj113 = { children: null };
  const obj114 = { style: tmp.container, children: null };
  const items47 = [callback2(require("../../../../design/components/Text/native/Text.tsx").Text, { variant: "heading-lg/bold", children: "Floating Action Button" }), callback2(require("../../../../design/components/Text/native/Text.tsx").Text, { variant: "text-sm/normal", children: "An ever-present icon button, giving the most important call to action in a compact way." })];
  obj114[1] = items47;
  const items48 = [callback3(require("../../../../design/components/Stack/native/Stack.native.tsx").Stack, obj114), callback2(closure_5, { style: { padding: 48 } })];
  obj113[0] = items48;
  items1[19] = callback3(require("../../../../design/components/Stack/native/Stack.native.tsx").Stack, obj113);
  obj2[1] = items1;
  obj1[0] = callback3(require("../../../../design/components/Stack/native/Stack.native.tsx").Stack, obj2);
  const items49 = [callback2(closure_6, obj1), ];
  const obj123 = ManaContext;
  items49[1] = callback2(require("../../../../design/components/Button/native/FloatingActionButton.native.tsx").FloatingActionButton, {
    icon: registerAssetDefault,
    onPress() {

    },
    positionBottom: 32,
    accessibilityLabel: "Floating Action Button"
  });
  obj[0] = items49;
  return callback3(closure_11, obj);
};