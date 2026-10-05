// discord_app/modules/guild_role_subscriptions/native/components/AllChannelsSwitch.tsx
import c from "../../../../../_runtime/00576_c.js";
import nativeDefault from "../../../../../discord_common/js/packages/tokens/native.tsx";
import util from "../../../../intl/index.native.tsx";
import native from "../../../../design/void/native.tsx";
import useA11yRolesNative from "../../../../../discord_common/js/packages/design/hooks/useA11yRolesNative.tsx";
import TouchableHitBoxDefault from "../../../../design/void/TouchableHitBox/native/TouchableHitBox.tsx";
import _modDef17957 from "../../../../../_runtime/metro/17957__.js";
import _modDef17958 from "../../../../../_runtime/metro/17958__.js";
import noop from "../../../../../_runtime/metro/00019__.js";
import TextStyles_mod from "../../../rebrand/native/TextStyles.tsx";

const require = globalThis.__r;

require = fn;
const View = fn(17).View;
const AllChannelAccessOptions = fn(15046).AllChannelAccessOptions;
const Fonts = fn(1085).Fonts;
const jsxProd = fn(21);
({ jsx: hasOwnProperty, jsxs: metroRequire } = jsxProd);
const createStyles = fn(4890);
let obj2 = {
  container: { backgroundColor: nativeDefault.colors.BACKGROUND_SURFACE_HIGH, borderRadius: nativeDefault.radii.sm },
  row: { alignSelf: "stretch", alignItems: "center", flexDirection: "row", justifyContent: "flex-start", padding: 16 },
  rowLabel: null,
  rowLabelSelected: null,
  rowIndicator: null,
  separator: null,
};
let obj4 = {};
let TextStyles = TextStyles_mod;
const merged = Object.assign(TextStyles(Fonts.PRIMARY_MEDIUM, nativeDefault.colors.TEXT_SUBTLE, 16));
obj4.flexShrink = 1;
obj4.marginHorizontal = 16;
obj2.rowLabel = obj4;
let TextStyles = TextStyles_mod;
const merged1 = Object.assign(TextStyles(Fonts.PRIMARY_SEMIBOLD, nativeDefault.colors.MOBILE_TEXT_HEADING_PRIMARY, 16));
obj2.rowLabelSelected = {};
obj2.rowIndicator = { marginStart: "auto" };
let obj3 = { backgroundColor: nativeDefault.colors.BACKGROUND_SURFACE_HIGH, borderRadius: nativeDefault.radii.sm };
let obj5 = {};
obj2.separator = { backgroundColor: nativeDefault.colors.BORDER_SUBTLE, height: 1, marginStart: 56 };
let closure_7 = createStyles.createStyles(obj2);
let ReactCompilerGating = fn(558);
let closure_8 = ReactCompilerGating.isReactCompilerEnabled()
  ? (arg0) => {
      const cResult = c.c(23);
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
        let rowLabelSelected = selected;
        if (selected) {
          rowLabelSelected = tmp5.rowLabelSelected;
        }
        if (cResult[5] === tmp5.rowLabel) {
          if (cResult[6] === rowLabelSelected) {
            let tmp12 = cResult[7];
          }
          if (cResult[8] === label) {
            if (cResult[9] === tmp12) {
              let tmp13 = cResult[10];
            }
            if (cResult[11] === selected) {
              if (cResult[12] === tmp5.rowIndicator) {
                let tmp16 = cResult[13];
              }
              if (cResult[14] === accessibilityRole) {
                if (cResult[15] === accessibilityState) {
                  if (cResult[16] === onPress) {
                    if (cResult[17] === tmp5.row) {
                      if (cResult[18] === tmp8) {
                        if (cResult[19] === tmp9) {
                          if (cResult[20] === tmp13) {
                            if (cResult[21] === tmp16) {
                              let tmp19 = cResult[22];
                            }
                            return tmp19;
                          }
                        }
                      }
                    }
                  }
                }
              }
              const obj3 = {
                style: tmp5.row,
                accessibilityRole,
                accessibilityState,
                disabled: tmp8,
                onPress,
                children: null,
              };
              const items = [tmp9, tmp13, tmp16];
              obj3.children = items;
              const tmp22 = timestampProducer(TouchableHitBoxDefault, obj3);
              cResult[14] = accessibilityRole;
              cResult[15] = accessibilityState;
              cResult[16] = onPress;
              cResult[17] = tmp5.row;
              cResult[18] = tmp8;
              cResult[19] = tmp9;
              cResult[20] = tmp13;
              cResult[21] = tmp16;
              cResult[22] = tmp22;
              tmp19 = tmp22;
            }
            const obj4 = { style: tmp5.rowIndicator, active: selected };
            const tmp18 = hasOwnProperty(native.RadioIndicator, obj4);
            cResult[11] = selected;
            cResult[12] = tmp5.rowIndicator;
            cResult[13] = tmp18;
            tmp16 = tmp18;
          }
          const obj5 = { style: tmp12, numberOfLines: 1, ellipsizeMode: "tail", children: label };
          const tmp15 = hasOwnProperty(native.LegacyText, obj5);
          cResult[8] = label;
          cResult[9] = tmp12;
          cResult[10] = tmp15;
          tmp13 = tmp15;
        }
        const items1 = [tmp5.rowLabel, rowLabelSelected];
        cResult[5] = tmp5.rowLabel;
        cResult[6] = rowLabelSelected;
        cResult[7] = items1;
        tmp12 = items1;
        const tmpResult = useA11yRolesNative;
      }
      const obj6 = { selected, disabled: undefined !== disabled && disabled };
      cResult[0] = undefined !== disabled && disabled;
      cResult[1] = selected;
      cResult[2] = obj6;
      tmp6 = obj6;
    }
  : (arg0) => {
      ({ selected, disabled } = arg0);
      ({ icon, label, onPress } = arg0);
      if (disabled === undefined) {
        disabled = false;
      }
      const tmp = closure_7();
      const radioA11yNative = useA11yRolesNative.useRadioA11yNative({ selected, disabled });
      ({ accessibilityRole, accessibilityState } = radioA11yNative);
      const obj2 = {
        style: tmp.row,
        accessibilityRole,
        accessibilityState,
        disabled: null,
        onPress: null,
        children: null,
      };
      let tmp7 = selected;
      if (!selected) {
        tmp7 = disabled;
      }
      obj2.disabled = tmp7;
      obj2.onPress = onPress;
      const tmp6 = TouchableHitBoxDefault;
      const items = [hasOwnProperty(native.Icon, { size: native.Icon.Sizes.MEDIUM, source: icon }), ,];
      const items1 = [tmp.rowLabel];
      let rowLabelSelected = selected;
      if (selected) {
        rowLabelSelected = tmp.rowLabelSelected;
      }
      items1[1] = rowLabelSelected;
      items[1] = hasOwnProperty(native.LegacyText, {
        style: items1,
        numberOfLines: 1,
        ellipsizeMode: "tail",
        children: label,
      });
      items[2] = hasOwnProperty(native.RadioIndicator, { style: tmp.rowIndicator, active: selected });
      obj2.children = items;
      return timestampProducer(tmp6, obj2);
    };
ReactCompilerGating = fn(558);
let obj6 = { backgroundColor: nativeDefault.colors.BORDER_SUBTLE, height: 1, marginStart: 56 };
const size = fn(2);
const result = size.fileFinishedImporting("modules/guild_role_subscriptions/native/components/AllChannelsSwitch.tsx");

export default ReactCompilerGating.isReactCompilerEnabled()
  ? (arg0) => {
      const cResult = setChannelAccessFormat(576).c(27);
      ({ channelAccessFormat, setChannelAccessFormat } = arg0);
      ({ style, disabled } = arg0);
      const tmp5 = closure_7();
      if (cResult[0] === style) {
        if (cResult[1] === tmp5.container) {
          let tmp6 = cResult[2];
        }
        if (cResult[3] !== tmp4) {
          const obj2 = { disabled: tmp4 };
          cResult[3] = tmp4;
          cResult[4] = obj2;
          let tmp7 = obj2;
        } else {
          tmp7 = cResult[4];
        }
        const _Symbol = Symbol;
        if (cResult[5] === Symbol.for("react.memo_cache_sentinel")) {
          const intl = setChannelAccessFormat(1126).intl;
          const stringResult = intl.string(setChannelAccessFormat(1126).t["vs2T+B"]);
          cResult[5] = stringResult;
          let tmp9 = stringResult;
        } else {
          tmp9 = cResult[5];
        }
        if (cResult[6] !== setChannelAccessFormat) {
          const fn = function w() {
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
            if (cResult[10] === tmp12) {
              let tmp14 = cResult[11];
            }
            if (cResult[12] !== tmp5.separator) {
              const obj3 = { style: tmp5.separator };
              const tmp22 = closure_5(View, obj3);
              cResult[12] = tmp5.separator;
              cResult[13] = tmp22;
              let tmp19 = tmp22;
            } else {
              tmp19 = cResult[13];
            }
            const _Symbol2 = Symbol;
            if (cResult[14] === Symbol.for("react.memo_cache_sentinel")) {
              const intl2 = setChannelAccessFormat(1126).intl;
              const stringResult1 = intl2.string(setChannelAccessFormat(1126).t.l4Tr7X);
              cResult[14] = stringResult1;
              let tmp23 = stringResult1;
            } else {
              tmp23 = cResult[14];
            }
            if (cResult[15] !== setChannelAccessFormat) {
              const fn2 = function f() {
                return setChannelAccessFormat(AllChannelAccessOptions.ALL_CHANNELS_ACCESS);
              };
              cResult[15] = setChannelAccessFormat;
              cResult[16] = fn2;
              let tmp25 = fn2;
            } else {
              tmp25 = cResult[16];
            }
            if (cResult[17] === tmp4) {
              if (cResult[18] === tmp26) {
                if (cResult[19] === tmp25) {
                  let tmp27 = cResult[20];
                }
                if (cResult[21] === tmp27) {
                  if (cResult[22] === tmp6) {
                    if (cResult[23] === tmp7) {
                      if (cResult[24] === tmp14) {
                        if (cResult[25] === tmp19) {
                          let tmp32 = cResult[26];
                        }
                        return tmp32;
                      }
                    }
                  }
                }
                const obj4 = { style: tmp6, accessibilityRole: "radiogroup", accessibilityState: tmp7, children: null };
                const items = [tmp14, tmp19, tmp27];
                obj4.children = items;
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
            const obj5 = {
              icon: _modDef17958,
              label: tmp23,
              selected: channelAccessFormat === AllChannelAccessOptions.ALL_CHANNELS_ACCESS,
              onPress: tmp25,
              disabled: tmp4,
            };
            const tmp31 = closure_5(closure_8, obj5);
            cResult[17] = tmp4;
            cResult[18] = channelAccessFormat === AllChannelAccessOptions.ALL_CHANNELS_ACCESS;
            cResult[19] = tmp25;
            cResult[20] = tmp31;
            tmp27 = tmp31;
          }
        }
        const obj6 = {
          icon: _modDef17957,
          label: tmp9,
          selected: channelAccessFormat === AllChannelAccessOptions.SOME_CHANNELS_ACCESS,
          onPress: tmp12,
          disabled: tmp4,
        };
        const tmp18 = closure_5(closure_8, obj6);
        cResult[8] = tmp4;
        cResult[9] = channelAccessFormat === AllChannelAccessOptions.SOME_CHANNELS_ACCESS;
        cResult[10] = tmp12;
        cResult[11] = tmp18;
        tmp14 = tmp18;
      }
      const items1 = [tmp5.container, style];
      cResult[0] = style;
      cResult[1] = tmp5.container;
      cResult[2] = items1;
      tmp6 = items1;
      const obj = setChannelAccessFormat(576);
    }
  : (style) => {
      ({ channelAccessFormat, setChannelAccessFormat: require, disabled } = style);
      if (disabled === undefined) {
        disabled = false;
      }
      const tmp = closure_7();
      const obj = { style: null, accessibilityRole: "radiogroup", accessibilityState: { disabled }, children: null };
      const items = [tmp.container, style.style];
      obj.style = items;
      const obj2 = { icon: _modDef17957, label: null, selected: null, onPress: null, disabled: null };
      const intl = util.intl;
      obj2.label = intl.string(util.t["vs2T+B"]);
      obj2.selected = channelAccessFormat === AllChannelAccessOptions.SOME_CHANNELS_ACCESS;
      obj2.onPress = function onPress() {
        return require(AllChannelAccessOptions.SOME_CHANNELS_ACCESS);
      };
      obj2.disabled = disabled;
      const items1 = [closure_5(closure_8, obj2), closure_5(View, { style: tmp.separator })];
      const obj4 = { icon: _modDef17958, label: null, selected: null, onPress: null, disabled: null };
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
    };
