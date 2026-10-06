// === Module 18002: AllChannelsSwitch ===

// Module 18002 (AllChannelsSwitch)
import react_native from "react-native" /* 17 */;
import react2 from "react" /* 576 */;
import nativeDefault from "native" /* 587 */;
import Constants from "Constants" /* 1085 */;
import intl3 from "intl" /* 1126 */;
import native from "native" /* 1188 */;
import react_native2 from "react-native" /* 4600 */;
import TouchableHitBoxDefault from "TouchableHitBox" /* 9455 */;
import GuildRoleSubscriptionEditStore from "GuildRoleSubscriptionEditStore" /* 15061 */;
import AssetRegistryDefault from "AssetRegistry" /* 18003 */;
import AssetRegistryDefault2 from "AssetRegistry" /* 18004 */;
import react from "react" /* 19 */;
import Fragment from "Fragment" /* 21 */;
import createStyles_mod from "createStyles" /* 4896 */;
import TextStyles_mod from "TextStyles" /* 5922 */;
import ReactCompilerGating_mod from "ReactCompilerGating" /* 558 */;
import size from "module_2" /* 2 */;

const require = globalThis.__r;

let hasOwnProperty;
let metroRequire;
let obj2;
let obj3;
let obj4;
let obj5;
const View = react_native.View;
const AllChannelAccessOptions = GuildRoleSubscriptionEditStore.AllChannelAccessOptions;
const Fonts = Constants.Fonts;
({ jsx: hasOwnProperty, jsxs: metroRequire } = Fragment);
let createStyles = createStyles_mod;
let obj = { container: obj2, row: { alignSelf: "stretch", alignItems: "center", flexDirection: "row", justifyContent: "flex-start", padding: 16 }, rowLabel: obj3, rowLabelSelected: obj4, rowIndicator: { marginStart: "auto" }, separator: obj5 };
obj2 = { backgroundColor: nativeDefault.colors.BACKGROUND_SURFACE_HIGH, borderRadius: nativeDefault.radii.sm };
createStyles = createStyles.createStyles;
obj3 = { flexShrink: 1, marginHorizontal: 16 };
let TextStyles = TextStyles_mod;
const merged = Object.assign(TextStyles(Fonts.PRIMARY_MEDIUM, nativeDefault.colors.TEXT_SUBTLE, 16));
obj4 = {};
TextStyles = TextStyles_mod;
const merged1 = Object.assign(TextStyles(Fonts.PRIMARY_SEMIBOLD, nativeDefault.colors.MOBILE_TEXT_HEADING_PRIMARY, 16));
obj5 = { backgroundColor: nativeDefault.colors.BORDER_SUBTLE, height: 1, marginStart: 56 };
let closure_7 = createStyles(obj);
let ReactCompilerGating = ReactCompilerGating_mod;
let closure_8 = ReactCompilerGating.isReactCompilerEnabled() ? ((arg0) => {
  let accessibilityRole;
  let accessibilityState;
  let disabled;
  let icon;
  let items;
  let label;
  let onPress;
  let selected;
  const obj = react2;
  const cResult = obj.c(23);
  ({ icon, label, onPress, selected, disabled } = arg0);
  const tmp5 = closure_7();
  if (cResult[0] === (undefined !== disabled && disabled)) {
    let tmp6;
    let tmp9;
    if (cResult[1] === selected) {
      tmp6 = cResult[2];
    }
    const tmpResult = react_native2;
    const radioA11yNative = tmpResult.useRadioA11yNative(tmp6);
    ({ accessibilityRole, accessibilityState } = radioA11yNative);
    if (cResult[3] !== icon) {
      const obj2 = { size: native.Icon.Sizes.MEDIUM, source: icon };
      const Icon = native.Icon;
      const tmp11 = hasOwnProperty(Icon, obj2);
      cResult[3] = icon;
      cResult[4] = tmp11;
      tmp9 = tmp11;
    } else {
      tmp9 = cResult[4];
    }
    if (cResult[5] === tmp5.rowLabel) {
      let tmp13;
      if (cResult[6] === (selected && tmp5.rowLabelSelected)) {
        tmp13 = cResult[7];
      }
      if (cResult[8] === label) {
        let tmp14;
        if (cResult[9] === tmp13) {
          tmp14 = cResult[10];
        }
        if (cResult[11] === selected) {
          let tmp17;
          if (cResult[12] === tmp5.rowIndicator) {
            tmp17 = cResult[13];
          }
          if (cResult[14] === accessibilityRole) {
            if (cResult[15] === accessibilityState) {
              if (cResult[16] === onPress) {
                if (cResult[17] === tmp5.row) {
                  if (cResult[18] === (selected || undefined !== disabled && disabled)) {
                    if (cResult[19] === tmp9) {
                      if (cResult[20] === tmp14) {
                        let tmp20;
                        if (cResult[21] === tmp17) {
                          tmp20 = cResult[22];
                        }
                        return tmp20;
                      }
                    }
                  }
                }
              }
            }
          }
          const obj3 = { style: tmp5.row, accessibilityRole, accessibilityState, disabled: selected || undefined !== disabled && disabled, onPress, children: items };
          items = [tmp9, tmp14, tmp17];
          const tmp23 = metroRequire(TouchableHitBoxDefault, obj3);
          cResult[14] = accessibilityRole;
          cResult[15] = accessibilityState;
          cResult[16] = onPress;
          cResult[17] = tmp5.row;
          cResult[18] = selected || undefined !== disabled && disabled;
          cResult[19] = tmp9;
          cResult[20] = tmp14;
          cResult[21] = tmp17;
          cResult[22] = tmp23;
          tmp20 = tmp23;
        }
        const obj4 = { style: tmp5.rowIndicator, active: selected };
        const tmp19 = hasOwnProperty(native.RadioIndicator, obj4);
        cResult[11] = selected;
        cResult[12] = tmp5.rowIndicator;
        cResult[13] = tmp19;
        tmp17 = tmp19;
      }
      const obj5 = { style: tmp13, numberOfLines: 1, ellipsizeMode: "tail", children: label };
      const tmp16 = hasOwnProperty(native.LegacyText, obj5);
      cResult[8] = label;
      cResult[9] = tmp13;
      cResult[10] = tmp16;
      tmp14 = tmp16;
    }
    const items1 = [tmp5.rowLabel, selected && tmp5.rowLabelSelected];
    cResult[5] = tmp5.rowLabel;
    cResult[6] = selected && tmp5.rowLabelSelected;
    cResult[7] = items1;
    tmp13 = items1;
  }
  const obj6 = { selected, disabled: undefined !== disabled && disabled };
  cResult[0] = undefined !== disabled && disabled;
  cResult[1] = selected;
  cResult[2] = obj6;
  tmp6 = obj6;
}) : ((arg0) => {
  let accessibilityRole;
  let accessibilityState;
  let disabled;
  let icon;
  let items;
  let label;
  let onPress;
  let selected;
  let tmp7;
  ({ selected, disabled } = arg0);
  ({ icon, label, onPress } = arg0);
  if (disabled === undefined) {
    disabled = false;
  }
  const tmp = closure_7();
  const obj = react_native2;
  const radioA11yNative = obj.useRadioA11yNative({ selected, disabled });
  ({ accessibilityRole, accessibilityState } = radioA11yNative);
  const obj2 = { style: tmp.row, accessibilityRole, accessibilityState, disabled: tmp7, onPress, children: items };
  tmp7 = selected;
  const tmp6 = TouchableHitBoxDefault;
  if (!selected) {
    tmp7 = disabled;
  }
  const obj3 = { size: native.Icon.Sizes.MEDIUM, source: icon };
  const Icon = native.Icon;
  items = [hasOwnProperty(Icon, obj3), , ];
  const items1 = [tmp.rowLabel, ];
  let rowLabelSelected = selected;
  const LegacyText = native.LegacyText;
  if (selected) {
    rowLabelSelected = tmp.rowLabelSelected;
  }
  items1[1] = rowLabelSelected;
  items[1] = hasOwnProperty(LegacyText, { style: items1, numberOfLines: 1, ellipsizeMode: "tail", children: label });
  const obj4 = { style: tmp.rowIndicator, active: selected };
  items[2] = hasOwnProperty(native.RadioIndicator, obj4);
  return metroRequire(tmp6, obj2);
});
ReactCompilerGating = ReactCompilerGating_mod;
let tmp9 = ReactCompilerGating.isReactCompilerEnabled() ? ((arg0) => {
  let channelAccessFormat;
  let disabled;
  let items;
  let setChannelAccessFormat;
  let style;
  const obj = setChannelAccessFormat(576);
  const cResult = obj.c(27);
  ({ channelAccessFormat, setChannelAccessFormat } = arg0);
  ({ style, disabled } = arg0);
  const tmp5 = closure_7();
  if (cResult[0] === style) {
    let tmp6;
    let tmp7;
    let tmp9;
    let tmp12;
    if (cResult[1] === tmp5.container) {
      tmp6 = cResult[2];
    }
    if (cResult[3] !== (undefined !== disabled && disabled)) {
      const obj2 = { disabled: undefined !== disabled && disabled };
      cResult[3] = undefined !== disabled && disabled;
      cResult[4] = obj2;
      tmp7 = obj2;
    } else {
      tmp7 = cResult[4];
    }
    const _Symbol = Symbol;
    if (cResult[5] === Symbol.for("react.memo_cache_sentinel")) {
      const intl = setChannelAccessFormat(1126).intl;
      const stringResult = intl.string(setChannelAccessFormat(1126).t["vs2T+B"]);
      cResult[5] = stringResult;
      tmp9 = stringResult;
    } else {
      tmp9 = cResult[5];
    }
    const SOME_CHANNELS_ACCESS = AllChannelAccessOptions.SOME_CHANNELS_ACCESS;
    if (cResult[6] !== setChannelAccessFormat) {
      const fn = function w() {
        return setChannelAccessFormat(AllChannelAccessOptions.SOME_CHANNELS_ACCESS);
      };
      cResult[6] = setChannelAccessFormat;
      cResult[7] = fn;
      tmp12 = fn;
    } else {
      tmp12 = cResult[7];
    }
    if (cResult[8] === (undefined !== disabled && disabled)) {
      if (cResult[9] === channelAccessFormat === SOME_CHANNELS_ACCESS) {
        let tmp14;
        let tmp19;
        let tmp23;
        let tmp25;
        if (cResult[10] === tmp12) {
          tmp14 = cResult[11];
        }
        if (cResult[12] !== tmp5.separator) {
          const obj3 = { style: tmp5.separator };
          const tmp22 = closure_5(View, obj3);
          cResult[12] = tmp5.separator;
          cResult[13] = tmp22;
          tmp19 = tmp22;
        } else {
          tmp19 = cResult[13];
        }
        const _Symbol2 = Symbol;
        if (cResult[14] === Symbol.for("react.memo_cache_sentinel")) {
          const intl2 = setChannelAccessFormat(1126).intl;
          const stringResult1 = intl2.string(setChannelAccessFormat(1126).t.l4Tr7X);
          cResult[14] = stringResult1;
          tmp23 = stringResult1;
        } else {
          tmp23 = cResult[14];
        }
        const ALL_CHANNELS_ACCESS = AllChannelAccessOptions.ALL_CHANNELS_ACCESS;
        if (cResult[15] !== setChannelAccessFormat) {
          const fn2 = function f() {
            return setChannelAccessFormat(AllChannelAccessOptions.ALL_CHANNELS_ACCESS);
          };
          cResult[15] = setChannelAccessFormat;
          cResult[16] = fn2;
          tmp25 = fn2;
        } else {
          tmp25 = cResult[16];
        }
        if (cResult[17] === (undefined !== disabled && disabled)) {
          if (cResult[18] === channelAccessFormat === ALL_CHANNELS_ACCESS) {
            let tmp27;
            if (cResult[19] === tmp25) {
              tmp27 = cResult[20];
            }
            if (cResult[21] === tmp27) {
              if (cResult[22] === tmp6) {
                if (cResult[23] === tmp7) {
                  if (cResult[24] === tmp14) {
                    let tmp32;
                    if (cResult[25] === tmp19) {
                      tmp32 = cResult[26];
                    }
                    return tmp32;
                  }
                }
              }
            }
            const obj4 = { style: tmp6, accessibilityRole: "radiogroup", accessibilityState: tmp7, children: items };
            items = [tmp14, tmp19, tmp27];
            const tmp35 = closure_6(View, obj4);
            cResult[21] = tmp27;
            cResult[22] = tmp6;
            cResult[23] = tmp7;
            cResult[24] = tmp14;
            cResult[25] = tmp19;
            cResult[26] = tmp35;
            tmp32 = tmp35;
          }
        }
        const obj5 = { icon: AssetRegistryDefault2, label: tmp23, selected: channelAccessFormat === ALL_CHANNELS_ACCESS, onPress: tmp25, disabled: undefined !== disabled && disabled };
        const tmp31 = closure_5(closure_8, obj5);
        cResult[17] = undefined !== disabled && disabled;
        cResult[18] = channelAccessFormat === ALL_CHANNELS_ACCESS;
        cResult[19] = tmp25;
        cResult[20] = tmp31;
        tmp27 = tmp31;
      }
    }
    const obj6 = { icon: AssetRegistryDefault, label: tmp9, selected: channelAccessFormat === SOME_CHANNELS_ACCESS, onPress: tmp12, disabled: undefined !== disabled && disabled };
    const tmp18 = closure_5(closure_8, obj6);
    cResult[8] = undefined !== disabled && disabled;
    cResult[9] = channelAccessFormat === SOME_CHANNELS_ACCESS;
    cResult[10] = tmp12;
    cResult[11] = tmp18;
    tmp14 = tmp18;
  }
  const items1 = [tmp5.container, style];
  cResult[0] = style;
  cResult[1] = tmp5.container;
  cResult[2] = items1;
  tmp6 = items1;
}) : ((style) => {
  let channelAccessFormat;
  let disabled;
  let intl;
  let intl2;
  let items;
  let items1;
  ({ channelAccessFormat, setChannelAccessFormat: require, disabled } = style);
  style = style.style;
  if (disabled === undefined) {
    disabled = false;
  }
  const tmp = closure_7();
  const obj = { style: items, accessibilityRole: "radiogroup", accessibilityState: { disabled }, children: items1 };
  items = [tmp.container, style];
  const obj2 = {
    icon: AssetRegistryDefault,
    label: intl.string(intl3.t["vs2T+B"]),
    selected: channelAccessFormat === AllChannelAccessOptions.SOME_CHANNELS_ACCESS,
    onPress() {
      return require(AllChannelAccessOptions.SOME_CHANNELS_ACCESS);
    },
    disabled
  };
  intl = intl3.intl;
  items1 = [closure_5(closure_8, obj2), , ];
  const obj3 = { style: tmp.separator };
  items1[1] = closure_5(View, obj3);
  const obj4 = {
    icon: AssetRegistryDefault2,
    label: intl2.string(intl3.t.l4Tr7X),
    selected: channelAccessFormat === AllChannelAccessOptions.ALL_CHANNELS_ACCESS,
    onPress() {
      return require(AllChannelAccessOptions.ALL_CHANNELS_ACCESS);
    },
    disabled
  };
  intl2 = intl3.intl;
  items1[2] = closure_5(closure_8, obj4);
  return closure_6(View, obj);
});
const result = size.fileFinishedImporting("modules/guild_role_subscriptions/native/components/AllChannelsSwitch.tsx");

export default tmp9;