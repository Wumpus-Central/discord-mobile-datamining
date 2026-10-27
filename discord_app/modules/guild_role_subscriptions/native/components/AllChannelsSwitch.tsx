// === Module 19354: AllChannelsSwitch ===

// Module 19354 (AllChannelsSwitch)
import c from "c" /* 576 */;
import nativeDefault from "native" /* 587 */;
import util from "util" /* 1125 */;
import native from "native" /* 1199 */;
import useA11yRolesNative from "useA11yRolesNative" /* 5040 */;
import Text_Text from "Text/Text" /* 5235 */;
import TouchableHitBoxDefault from "TouchableHitBox" /* 9041 */;
import _modDef19355 from "module_19355" /* 19355 */;
import _modDef19356 from "module_19356" /* 19356 */;
import noop from "module_19" /* 19 */;

const require = globalThis.__r;

require = fn;
const View = fn(17).View;
const AllChannelAccessOptions = fn(16627).AllChannelAccessOptions;
const jsxProd = fn(21);
({ jsx: hasOwnProperty, jsxs: metroRequire } = jsxProd);
const createStyles = fn(4972);
let obj2 = { container: { backgroundColor: nativeDefault.colors.BACKGROUND_SURFACE_HIGH, borderRadius: nativeDefault.radii.sm }, row: { alignSelf: "stretch", alignItems: "center", flexDirection: "row", justifyContent: "flex-start", padding: 16 }, rowLabel: { flexShrink: 1, marginHorizontal: 16 }, rowIndicator: { marginStart: "auto" }, separator: null };
let obj3 = { backgroundColor: nativeDefault.colors.BACKGROUND_SURFACE_HIGH, borderRadius: nativeDefault.radii.sm };
obj2.separator = { backgroundColor: nativeDefault.colors.BORDER_SUBTLE, height: 1, marginStart: 56 };
let closure_7 = createStyles.createStyles(obj2);
let ReactCompilerGating = fn(558);
let closure_8 = ReactCompilerGating.isReactCompilerEnabled() ? (function Row(arg0) {
  const cResult = c.c(22);
  ({ icon, label, onPress, selected, disabled } = arg0);
  const tmp5 = closure_7();
  if (cResult[0] === (undefined !== disabled && disabled)) {
    if (cResult[1] === selected) {
      let tmp6 = cResult[2];
    }
    const radioA11yNative = useA11yRolesNative.useRadioA11yNative(tmp6);
    ({ accessibilityRole, accessibilityState } = radioA11yNative);
    let tmp8 = selected;
    if (!selected) {
      tmp8 = tmp4;
    }
    if (cResult[3] !== icon) {
      const obj2 = { size: native.Icon.Sizes.MEDIUM, source: icon };
      const tmp11 = hasOwnProperty(native.Icon, obj2);
      cResult[3] = icon;
      cResult[4] = tmp11;
      let tmp9 = tmp11;
    } else {
      tmp9 = cResult[4];
    }
    let str = "text-md/medium";
    if (selected) {
      str = "text-md/semibold";
    }
    let str2 = "text-subtle";
    if (selected) {
      str2 = "mobile-text-heading-primary";
    }
    if (cResult[5] === label) {
      if (cResult[6] === tmp5.rowLabel) {
        if (cResult[7] === str) {
          if (cResult[8] === str2) {
            let tmp12 = cResult[9];
          }
          if (cResult[10] === selected) {
            if (cResult[11] === tmp5.rowIndicator) {
              let tmp15 = cResult[12];
            }
            if (cResult[13] === accessibilityRole) {
              if (cResult[14] === accessibilityState) {
                if (cResult[15] === onPress) {
                  if (cResult[16] === tmp5.row) {
                    if (cResult[17] === tmp8) {
                      if (cResult[18] === tmp9) {
                        if (cResult[19] === tmp12) {
                          if (cResult[20] === tmp15) {
                            let tmp18 = cResult[21];
                          }
                          return tmp18;
                        }
                      }
                    }
                  }
                }
              }
            }
            const obj3 = { style: tmp5.row, accessibilityRole, accessibilityState, disabled: tmp8, onPress, children: null };
            const items = [tmp9, tmp12, tmp15];
            obj3.children = items;
            const tmp21 = timestampProducer(TouchableHitBoxDefault, obj3);
            cResult[13] = accessibilityRole;
            cResult[14] = accessibilityState;
            cResult[15] = onPress;
            cResult[16] = tmp5.row;
            cResult[17] = tmp8;
            cResult[18] = tmp9;
            cResult[19] = tmp12;
            cResult[20] = tmp15;
            cResult[21] = tmp21;
            tmp18 = tmp21;
          }
          const obj4 = { style: tmp5.rowIndicator, active: selected };
          const tmp17 = hasOwnProperty(native.RadioIndicator, obj4);
          cResult[10] = selected;
          cResult[11] = tmp5.rowIndicator;
          cResult[12] = tmp17;
          tmp15 = tmp17;
        }
      }
    }
    const obj5 = { style: tmp5.rowLabel, variant: str, color: str2, lineClamp: 1, children: label };
    const tmp14 = hasOwnProperty(Text_Text.Text, obj5);
    cResult[5] = label;
    cResult[6] = tmp5.rowLabel;
    cResult[7] = str;
    cResult[8] = str2;
    cResult[9] = tmp14;
    tmp12 = tmp14;
    const tmpResult = useA11yRolesNative;
  }
  const obj6 = { selected, disabled: undefined !== disabled && disabled };
  cResult[0] = undefined !== disabled && disabled;
  cResult[1] = selected;
  cResult[2] = obj6;
  tmp6 = obj6;
}) : (function Row(arg0) {
  ({ selected, disabled } = arg0);
  ({ icon, label, onPress } = arg0);
  if (disabled === undefined) {
    disabled = false;
  }
  const tmp = closure_7();
  const radioA11yNative = useA11yRolesNative.useRadioA11yNative({ selected, disabled });
  ({ accessibilityRole, accessibilityState } = radioA11yNative);
  const obj2 = { style: tmp.row, accessibilityRole, accessibilityState, disabled: null, onPress: null, children: null };
  let tmp7 = selected;
  if (!selected) {
    tmp7 = disabled;
  }
  obj2.disabled = tmp7;
  obj2.onPress = onPress;
  const tmp6 = TouchableHitBoxDefault;
  const items = [hasOwnProperty(native.Icon, { size: native.Icon.Sizes.MEDIUM, source: icon }), , ];
  const obj4 = { style: tmp.rowLabel, variant: null, color: null, lineClamp: 1, children: null };
  let str = "text-md/medium";
  if (selected) {
    str = "text-md/semibold";
  }
  obj4.variant = str;
  let str2 = "text-subtle";
  if (selected) {
    str2 = "mobile-text-heading-primary";
  }
  obj4.color = str2;
  obj4.children = label;
  items[1] = hasOwnProperty(Text_Text.Text, obj4);
  items[2] = hasOwnProperty(native.RadioIndicator, { style: tmp.rowIndicator, active: selected });
  obj2.children = items;
  return timestampProducer(tmp6, obj2);
});
ReactCompilerGating = fn(558);
let obj4 = { backgroundColor: nativeDefault.colors.BORDER_SUBTLE, height: 1, marginStart: 56 };
const size = fn(2);
const result = size.fileFinishedImporting("modules/guild_role_subscriptions/native/components/AllChannelsSwitch.tsx");

export default ReactCompilerGating.isReactCompilerEnabled() ? (function AllChannelsSwitch(arg0) {
  const cResult = setChannelAccessFormat(576).c(27);
  ({ channelAccessFormat, setChannelAccessFormat } = arg0);
  ({ style, disabled } = arg0);
  const tmp5 = closure_7();
  if (cResult[0] === style) {
    if (cResult[3] !== tmp4) {
      const obj2 = { disabled: tmp4 };
      cResult[3] = tmp4;
      cResult[4] = obj2;
    }
    const _Symbol = Symbol;
    if (cResult[5] === Symbol.for("react.memo_cache_sentinel")) {
      const intl = setChannelAccessFormat(1125).intl;
      const stringResult = intl.string(setChannelAccessFormat(1125).t["vs2T+B"]);
      cResult[5] = stringResult;
      let tmp9 = stringResult;
    } else {
      tmp9 = cResult[5];
    }
    if (cResult[6] !== setChannelAccessFormat) {
      const fn = function v() {
        return setChannelAccessFormat(AllChannelAccessOptions.SOME_CHANNELS_ACCESS);
      };
      cResult[6] = setChannelAccessFormat;
      cResult[7] = fn;
      let tmp12 = fn;
    } else {
      tmp12 = cResult[7];
    }
    if (cResult[8] === tmp4) {
      if (cResult[9] === tmp13) {
        if (cResult[12] !== tmp5.separator) {
          const obj3 = { style: tmp5.separator };
          const tmp22 = closure_5(View, obj3);
          cResult[12] = tmp5.separator;
          cResult[13] = tmp22;
        }
        const _Symbol2 = Symbol;
        if (cResult[14] === Symbol.for("react.memo_cache_sentinel")) {
          const intl2 = setChannelAccessFormat(1125).intl;
          const stringResult1 = intl2.string(setChannelAccessFormat(1125).t.l4Tr7X);
          cResult[14] = stringResult1;
          let tmp23 = stringResult1;
        } else {
          tmp23 = cResult[14];
        }
        if (cResult[15] !== setChannelAccessFormat) {
          class I {
            constructor() {
              return setChannelAccessFormat(AllChannelAccessOptions.ALL_CHANNELS_ACCESS);
            }
          }
          cResult[15] = setChannelAccessFormat;
          cResult[16] = I;
        } else {
          class I {
            constructor() {
              return setChannelAccessFormat(AllChannelAccessOptions.ALL_CHANNELS_ACCESS);
            }
          }
        }
        if (cResult[17] === tmp4) {
          class I {
            constructor() {
              return setChannelAccessFormat(AllChannelAccessOptions.ALL_CHANNELS_ACCESS);
            }
          }
        }
        const obj4 = { icon: _modDef19356, label: tmp23, selected: channelAccessFormat === AllChannelAccessOptions.ALL_CHANNELS_ACCESS, onPress: I, disabled: tmp4 };
        const tmp31 = closure_5(closure_8, obj4);
        cResult[17] = tmp4;
        cResult[18] = channelAccessFormat === AllChannelAccessOptions.ALL_CHANNELS_ACCESS;
        cResult[19] = I;
        cResult[20] = tmp31;
      }
    }
    const obj5 = { icon: _modDef19355, label: tmp9, selected: channelAccessFormat === AllChannelAccessOptions.SOME_CHANNELS_ACCESS, onPress: tmp12, disabled: tmp4 };
    const tmp18 = closure_5(closure_8, obj5);
    cResult[8] = tmp4;
    cResult[9] = channelAccessFormat === AllChannelAccessOptions.SOME_CHANNELS_ACCESS;
    cResult[10] = tmp12;
    cResult[11] = tmp18;
  }
  const items = [tmp5.container, style];
  cResult[0] = style;
  cResult[1] = tmp5.container;
  cResult[2] = items;
  const obj = setChannelAccessFormat(576);
}) : (function AllChannelsSwitch(style) {
  ({ channelAccessFormat, setChannelAccessFormat: require, disabled } = style);
  if (disabled === undefined) {
    disabled = false;
  }
  const tmp = closure_7();
  const obj = { style: null, accessibilityRole: "radiogroup", accessibilityState: { disabled }, children: null };
  const items = [tmp.container, style.style];
  obj.style = items;
  const obj2 = { icon: _modDef19355, label: null, selected: null, onPress: null, disabled: null };
  const intl = util.intl;
  obj2.label = intl.string(util.t["vs2T+B"]);
  obj2.selected = channelAccessFormat === AllChannelAccessOptions.SOME_CHANNELS_ACCESS;
  obj2.onPress = function onPress() {
    return require(AllChannelAccessOptions.SOME_CHANNELS_ACCESS);
  };
  obj2.disabled = disabled;
  const items1 = [closure_5(closure_8, obj2), closure_5(View, { style: tmp.separator }), ];
  const obj4 = { icon: _modDef19356, label: null, selected: null, onPress: null, disabled: null };
  const intl2 = util.intl;
  obj4.label = intl2.string(util.t.l4Tr7X);
  obj4.selected = channelAccessFormat === AllChannelAccessOptions.ALL_CHANNELS_ACCESS;
  obj4.onPress = function onPress() {
    return require(AllChannelAccessOptions.ALL_CHANNELS_ACCESS);
  };
  obj4.disabled = disabled;
  items1[2] = closure_5(closure_8, obj4);
  obj.children = items1;
  return closure_6(View, obj);
});