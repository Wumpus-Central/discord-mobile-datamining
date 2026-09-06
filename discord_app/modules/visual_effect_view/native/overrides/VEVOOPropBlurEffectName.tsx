// discord_app/modules/visual_effect_view/native/overrides/VEVOOPropBlurEffectName.tsx
import _slicedToArray from "../../../../../_runtime/metro/00032__.js";
import noop from "../../../../../_runtime/metro/00019__.js";

const require = fn;
const VEVOOStore = fn(4966);
({ getVisualEffectViewOverrides: closure_4, setVisualEffectViewOverides: hasOwnProperty } = VEVOOStore);
const jsxProd = fn(21);
({ jsx: metroRequire, Fragment: closure_7, jsxs: closure_8 } = jsxProd);
const createStyles = fn(4560);
let closure_9 = createStyles.createStyles({ radio: { fontSize: 14 } });
const size = fn(2);
const result = size.fileFinishedImporting("modules/visual_effect_view/native/overrides/VEVOOPropBlurEffectName.tsx");

export default noop.memo(function VEVOOPropBlurEffectName() {
  _require = closure_9();
  let obj = require("VEVOO");
  visualEffectViewOverrideSharedStyles = obj.useVisualEffectViewOverrideSharedStyles();
  const tmp2 = first(noop.useState("Dark"), 2);
  first = tmp2[0];
  noop = tmp2[1];
  const tmp4 = first(noop.useState(false), 2);
  const first1 = tmp4[0];
  closure_5 = tmp4[1];
  [closure_6, closure_7] = first(noop.useState(first1().blurEffectNameOverride), 2);
  closure_8 = noop.useCallback((blurEffectNameOverride) => {
    if (null != blurEffectNameOverride) {
      closure_1_7(blurEffectNameOverride);
    }
    const obj = {};
    const merged = Object.assign(React4());
    obj.blurEffectNameOverride = blurEffectNameOverride;
    hasOwnProperty(obj);
  }, []);
  obj = {
    style: null,
    label: "Blur Effect Name",
    disabled: !first1,
    leadingStyle: visualEffectViewOverrideSharedStyles.enabledSwitchStyle,
    leading: null,
    subLabel: null,
  };
  let items = [visualEffectViewOverrideSharedStyles.zeroPaddingVertical];
  obj.style = items;
  obj = {
    value: first1,
    onValueChange(arg0) {
      closure_5(arg0);
      let tmp3;
      if (arg0) {
        tmp3 = closure_1_6;
      }
      closure_8(tmp3);
    },
  };
  obj.leading = closure_6(require("FormSwitch").FormSwitch, obj);
  const obj1 = { children: null };
  const tmp6 = first(noop.useState(first1().blurEffectNameOverride), 2);
  const items1 = [
    closure_6(require("Form").FormSwitchRow, {
      label: "Theme: " + first,
      style: visualEffectViewOverrideSharedStyles.zeroPaddingHorizontal,
      disabled: !first1,
      value: "Dark" === first,
      onValueChange() {
        let str = "Dark";
        if ("Dark" === first) {
          str = "Light";
        }
        closure_3(str);
      },
    }),
  ];
  const BLUR_EFFECT_NAMES = require("VisualEffectViewIOS").BLUR_EFFECT_NAMES;
  const found = BLUR_EFFECT_NAMES.filter((arr) => -1 !== arr.indexOf(first));
  items1[1] = found.map((item, index) => {
    closure_0 = item;
    const obj = {
      label: item.replace(first, ""),
      labelStyle: closure_0.radio,
      style: null,
      selected: item === closure_6,
      disabled: !first1,
      onPress() {
        closure_8(closure_0);
      },
    };
    const items = [visualEffectViewOverrideSharedStyles.zeroPaddingHorizontal, { opacity: 1 }];
    obj.style = items;
    return closure_1_6(closure_0(visualEffectViewOverrideSharedStyles[6]).FormRadioRow, obj, index);
  });
  obj1.children = items1;
  obj.subLabel = closure_8(closure_7, obj1);
  return closure_6(require("Form").FormRow, obj);
});
