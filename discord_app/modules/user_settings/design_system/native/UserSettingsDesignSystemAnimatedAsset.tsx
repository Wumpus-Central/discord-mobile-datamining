// === Module 17475: UserSettingsDesignSystemAnimatedAsset ===

// Module 17475 (UserSettingsDesignSystemAnimatedAsset)
import nativeDefault from "native" /* 575 */;
import asyncRequireImpl from "asyncRequireImpl" /* 2120 */;
import ActionSheetActionCreatorsDefault from "ActionSheetActionCreators" /* 5257 */;
import Text_Text from "Text/Text" /* 5634 */;
import TableRadioGroup from "TableRadioGroup" /* 7251 */;
import TableRadioRow from "TableRadioRow" /* 7253 */;
import valuesAll from "values" /* 17476 */;
import _slicedToArray from "module_32" /* 32 */;
import noop from "module_19" /* 19 */;

require = fn;
function AnimationPlayground(arg0) {
  ({ Animation, onAssetChange: require } = arg0);
  let context;
  _slicedToArray = undefined;
  noop = undefined;
  c5 = undefined;
  const tmp = closure_17();
  const asset = Animation.asset;
  context = noop.useContext(require("AccessibilityPreferencesContext").AccessibilityPreferencesContext);
  const tmp5 = _slicedToArray(noop.useState("100%"), 2);
  const first = tmp5[0];
  const tmp7 = _slicedToArray(noop.useState("Fill the width"), 2);
  const first1 = tmp7[0];
  const tmp9 = _slicedToArray(noop.useState("Asset's own"), 2);
  const first2 = tmp9[0];
  [tmp12, tmp13] = noop.useState("crop");
  const tmp11 = _slicedToArray(noop.useState("crop"), 2);
  [tmp16, tmp17] = noop.useState(c10);
  const tmp18 = _slicedToArray(noop.useState(c10), 2);
  const first3 = tmp18[0];
  const tmp15 = _slicedToArray(noop.useState(c10), 2);
  [tmp21, tmp22] = noop.useState(true);
  const tmp23 = _slicedToArray(noop.useState(true), 2);
  const first4 = tmp23[0];
  const tmp20 = _slicedToArray(noop.useState(true), 2);
  [tmp26, tmp27] = noop.useState(false);
  const tmp25 = _slicedToArray(noop.useState(false), 2);
  [tmp29, tmp30] = noop.useState(true);
  const tmp28 = _slicedToArray(noop.useState(true), 2);
  [tmp32, tmp33] = noop.useState(false);
  const tmp31 = _slicedToArray(noop.useState(false), 2);
  [tmp35, tmp36] = noop.useState(true);
  const tmp37 = _slicedToArray(noop.useState(true), 2);
  const first5 = tmp37[0];
  const tmp34 = _slicedToArray(noop.useState(true), 2);
  [tmp40, c3] = noop.useState(0);
  const tmp39 = _slicedToArray(noop.useState(0), 2);
  [tmp42, c4] = noop.useState(false);
  const tmp41 = _slicedToArray(noop.useState(false), 2);
  [size, c5] = noop.useState(undefined);
  let enabled = tmp32;
  if (!tmp32) {
    enabled = context.reducedMotion.enabled;
  }
  items = [context, enabled];
  const size2 = closure_13[first1];
  let tmp46 = null != size2.width;
  const memo = obj.useMemo(() => {
    obj = {};
    const merged = Object.assign(context);
    const obj2 = {};
    const merged1 = Object.assign(context.reducedMotion);
    obj2.enabled = enabled;
    obj.reducedMotion = obj2;
    return obj;
  }, items);
  if (tmp46) {
    tmp46 = null != size2.height;
  }
  if (null == size) {
    const _HermesInternal = HermesInternal;
    let obj2 = { contentContainerStyle: tmp.container, children: null };
    const combined = "" + asset.name + "-" + tmp40;
    const obj3 = { spacing: asset(tmp3[5]).space.PX_16, children: null };
    const items1 = [tmp.stage, , ];
    let greyStage = tmp35;
    if (tmp35) {
      greyStage = tmp.greyStage;
    }
    const obj4 = { style: null, children: null };
    items1[1] = greyStage;
    const obj5 = { width: closure_12[first] };
    items1[2] = obj5;
    obj4.style = items1;
    const obj6 = {
      style: tmp.measure,
      onLayout: function handleMeasure(nativeEvent) {
          const layout = nativeEvent.nativeEvent.layout;
          const size = { width: layout.width, height: layout.height };
          _undefined3(size);
        },
      children: null
    };
    const obj7 = { value: memo, children: null };
    const obj8 = {};
    let merged = Object.assign(size2);
    obj8.aspectRatio = tmp48;
    obj8.fit = tmp12;
    let tmp64;
    if (tmp16 !== c10) {
      tmp64 = tmp16;
    }
    obj8.anchor = tmp64;
    obj8.padColor = obj[first3];
    obj8.autoPlay = tmp21;
    obj8.loop = first4;
    obj8.paused = tmp26;
    obj8.pauseWhenOffscreen = tmp29;
    obj8.onLoad = function onLoad() {
      return _undefined2(false);
    };
    obj8.onError = function onError() {
      return _undefined2(true);
    };
    const _HermesInternal2 = HermesInternal;
    obj8["aria-label"] = "" + asset.name + " animation";
    obj7.children = closure_7(Animation, obj8, combined);
    const items2 = [closure_7(require("AccessibilityPreferencesContext").AccessibilityPreferencesContext.Provider, obj7), ];
    let tmp55Result = null;
    if (first5) {
      tmp55Result = null;
      if (null != undefined) {
        tmp55Result = null;
        if (null != size) {
          const obj9 = { pointerEvents: "none", style: null };
          const items3 = [tmp.boxEdge, ];
          const size1 = { width: undefined, height: size.height };
          items3[1] = size1;
          obj9.style = items3;
          tmp55Result = closure_7(tmp59, obj9);
        }
      }
    }
    items2[1] = tmp55Result;
    obj6.children = items2;
    obj4.children = closure_8(enabled, obj6);
    const items4 = [closure_7(enabled, obj4), , , , , , , , , , , ];
    let str4 = "poster, because reduced motion is on";
    if (!enabled) {
      str4 = "poster, because the media failed to load";
      if (!tmp42) {
        const formats = require("AnimatedAssetSelection").selectFormats(asset, str);
        const renderer = formats.renderer;
        if ("video" === renderer) {
          const _HermesInternal3 = HermesInternal;
          str4 = "" + formats.formats[0].toUpperCase() + " video";
        } else if ("image" === renderer) {
          str4 = "animated WebP";
        } else {
          str4 = "poster, because this platform has no format to play";
        }
        const tmp2Result = require("AnimatedAssetSelection");
      }
    }
    const _HermesInternal4 = HermesInternal;
    const items5 = ["Showing " + str4, ];
    let combined1 = null;
    if (null != size) {
      combined1 = null;
      if (null != undefined) {
        const _Math = Math;
        const rounded = Math.round(undefined);
        const _Math2 = Math;
        const _HermesInternal5 = HermesInternal;
        combined1 = " \u00B7 box " + rounded + "\u00D7" + Math.round(size.height) + " pt";
      }
    }
    const obj10 = { variant: "body-sm/normal", color: "text-subtle", children: null };
    items5[1] = combined1;
    obj10.children = items5;
    items4[1] = closure_8(require("Text/Text").Text, obj10);
    const obj11 = {
      text: "Restart",
      variant: "secondary",
      size: "sm",
      onPress: function restart() {
          _undefined2(false);
          _undefined((arg0) => arg0 + 1);
        }
    };
    items4[2] = closure_7(require("components/Button/Button").Button, obj11);
    const obj12 = { hasIcons: false, children: null };
    const obj13 = { label: "Asset", arrow: true, trailing: null, onPress: null };
    const obj14 = { text: asset.name };
    obj13.trailing = closure_7(require("TableRow").TableRow.TrailingText, obj14);
    obj13.onPress = function onPress() {
      const obj2 = { sheetKey, names: null, selectedName: null, onSelect: null };
      obj = ActionSheetActionCreatorsDefault;
      obj2.names = closure_9.map((asset) => asset.asset.name);
      obj2.selectedName = asset.name;
      obj2.onSelect = function onSelect(arg0) {
        _undefined2(false);
        closure_1_0(arg0);
      };
      obj.openLazy(asyncRequireImpl(17477, dependencyMap.paths), sheetKey, obj2);
    };
    obj12.children = closure_7(require("TableRow").TableRow, obj13);
    items4[3] = closure_7(require("TableRowGroup").TableRowGroup, obj12);
    const obj15 = { title: "Stage width", value: first, options: null, onChange: null };
    const _Object = Object;
    obj15.options = Object.keys(closure_12);
    obj15.onChange = tmp5[1];
    items4[4] = closure_7(RadioGroup, obj15);
    const obj16 = { title: "Size", value: first1, options: null, onChange: null };
    const _Object2 = Object;
    obj16.options = Object.keys(closure_13);
    obj16.onChange = tmp7[1];
    items4[5] = closure_7(RadioGroup, obj16);
    let tmp55Result3 = null;
    if (!tmp46) {
      const obj17 = { title: "Aspect ratio", value: first2, options: null, onChange: null };
      const _Object3 = Object;
      obj17.options = Object.keys(tmp47);
      obj17.onChange = tmp9[1];
      tmp55Result3 = closure_7(RadioGroup, obj17);
    }
    items4[6] = tmp55Result3;
    const obj18 = { title: "Fit", value: tmp12, options: ["crop", "pad"], onChange: tmp13 };
    items4[7] = closure_7(RadioGroup, obj18);
    const obj19 = { title: "Anchor", value: tmp16, options: items, onChange: tmp17 };
    items4[8] = closure_7(RadioGroup, obj19);
    let tmp55Result4 = null;
    if ("pad" === tmp12) {
      const obj20 = { title: "Pad colour", value: first3, options: null, onChange: null };
      const _Object4 = Object;
      obj20.options = Object.keys(obj);
      obj20.onChange = tmp18[1];
      tmp55Result4 = closure_7(RadioGroup, obj20);
    }
    items4[9] = tmp55Result4;
    const obj21 = { title: "Playback", hasIcons: false, children: null };
    const obj22 = { label: "Autoplay", value: tmp21, onValueChange: tmp22 };
    const items6 = [closure_7(require("TableSwitchRow").TableSwitchRow, obj22), , , , ];
    const obj23 = { label: "Loop", value: first4, onValueChange: tmp23[1] };
    items6[1] = closure_7(require("TableSwitchRow").TableSwitchRow, obj23);
    const obj24 = { label: "Paused", value: tmp26, onValueChange: tmp27 };
    items6[2] = closure_7(require("TableSwitchRow").TableSwitchRow, obj24);
    const obj25 = { label: "Pause when the app is in the background", value: tmp29, onValueChange: tmp30 };
    items6[3] = closure_7(require("TableSwitchRow").TableSwitchRow, obj25);
    const obj26 = { label: "Force reduced motion", subLabel: "Off follows your own reduced motion setting.", value: tmp32, onValueChange: tmp33 };
    items6[4] = closure_7(require("TableSwitchRow").TableSwitchRow, obj26);
    obj21.children = items6;
    items4[10] = closure_8(require("TableRowGroup").TableRowGroup, obj21);
    const obj27 = { title: "Stage", hasIcons: false, children: null };
    const obj28 = { label: "Grey stage", value: tmp35, onValueChange: tmp36 };
    const items7 = [closure_7(require("TableSwitchRow").TableSwitchRow, obj28), ];
    const obj29 = { label: "Show box edge", value: first5, onValueChange: tmp37[1] };
    items7[1] = closure_7(require("TableSwitchRow").TableSwitchRow, obj29);
    obj27.children = items7;
    items4[11] = closure_8(require("TableRowGroup").TableRowGroup, obj27);
    obj3.children = items4;
    obj2.children = closure_8(require("Stack/Stack").Stack, obj3);
    return closure_7(c5, obj2);
  } else {
    const width = size.width;
    const obj30 = { asset };
    let merged1 = Object.assign(size2);
    obj30.aspectRatio = tmp48;
    const predicted = require("AnimatedAssetLayout").getAnimatedAssetBox(obj30).predicted;
    if (null != predicted.width) {
      let width2 = predicted.width;
    } else {
      width2 = width;
      if (typeof size2.width === "string") {
        const _parseFloat = parseFloat;
        width2 = width * parseFloat(size2.width) / 100;
      }
    }
    const tmp2Result2 = require("AnimatedAssetLayout");
  }
  const tmp43 = _slicedToArray(noop.useState(undefined), 2);
}
function RadioGroup(options) {
  options = options.options;
  ({ title, value, onChange } = options);
  return metroImportDefault(TableRadioGroup.TableRadioGroup, { title, value, onChange, hasIcons: false, children: options.map((value) => closure_1_7(TableRadioRow.TableRadioRow, { value, label: value }, value)) });
}
get_ActivityIndicator = fn(17);
({ ScrollView: hasOwnProperty, View: closure_6 } = get_ActivityIndicator);
const jsxProd = fn(21);
({ jsx: metroImportDefault, jsxs: closure_8 } = jsxProd);
const values = Object.values(valuesAll);
let closure_9 = values.filter(function isGeneratedAnimation(fn) {
  let tmp = typeof fn === "function";
  if (typeof fn === "function") {
    tmp = "asset" in fn;
  }
  return tmp;
});
let c10 = "Asset default";
let c11 = "UserSettingsDesignSystemAnimatedAssetPicker";
let closure_12 = { "100%": "100%", "75%": "75%", "50%": "50%" };
let closure_13 = { "Fill the width": {}, "Width 50%": { width: "50%" }, "Width 200": { width: 200 }, "Height 120": { height: 120 }, "300 × 300": { width: 300, height: 300 }, "340 × 120": { width: 340, height: 120 } };
let closure_14 = { "Asset's own": "id", "1/1": null, "16/9": null, "4/3": null, "9/16": null };
let items = ["Asset default", "center", "top", "bottom", "left", "right", "top-left", "top-right", "bottom-left", "bottom-right"];
let obj = { "Asset default": "id", Transparent: false, "Opaque #5865f2": false, "Translucent #5865f280": false, "Translucent red #ff000080": false, "Token: background base low": nativeDefault.colors.BACKGROUND_BASE_LOW };
const createStyles = fn(5043);
let obj3 = { container: { padding: nativeDefault.space.PX_16 }, stage: null, greyStage: null, measure: null, boxEdge: null };
let obj4 = { padding: nativeDefault.space.PX_16 };
obj3.stage = { padding: nativeDefault.space.PX_8, borderRadius: nativeDefault.radii.sm };
let obj5 = { padding: nativeDefault.space.PX_8, borderRadius: nativeDefault.radii.sm };
obj3.greyStage = { backgroundColor: nativeDefault.colors.BACKGROUND_MOD_STRONG };
obj3.measure = { alignItems: "flex-start" };
const rect = { position: "absolute", top: 0, left: 0, borderWidth: 1, borderStyle: "dashed", borderColor: nativeDefault.colors.BORDER_STRONG };
obj3.boxEdge = rect;
let closure_17 = createStyles.createStyles(obj3);
const PlatformUtils = fn(1359);
let str = "android";
if (PlatformUtils.isIOS()) {
  str = "ios";
}
let size = fn(2);
const result = size.fileFinishedImporting("modules/user_settings/design_system/native/UserSettingsDesignSystemAnimatedAsset.tsx");

export default function UserSettingsDesignSystemAnimatedAsset() {
  const first = closure_9[0];
  str = undefined;
  if (first != null) {
    str = first.asset.name;
  }
  if (str == null) {
    str = "";
  }
  const tmp = closure_17();
  [require, tmp5] = noop.useState(str);
  let found = closure_9.find((asset) => asset.asset.name === require);
  if (found == null) {
    found = closure_9[0];
  }
  if (null == found) {
    const obj2 = { style: tmp.container, children: metroImportDefault(Text_Text.Text, { variant: "body-md/medium", color: "text-subtle", children: "No animated assets yet. They show up here once the asset pipeline has generated their components." }) };
    let tmp9 = metroImportDefault(timestampProducer, obj2);
  } else {
    obj = { Animation: found, onAssetChange: tmp5 };
    tmp9 = metroImportDefault(AnimationPlayground, obj);
  }
  return tmp9;
};