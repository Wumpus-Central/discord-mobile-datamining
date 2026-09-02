// === Module 16650: OverrideOption ===

// Module 16650 (OverrideOption)
import ThemesDefault from "Themes" /* 709 */;
import get_ActivityIndicator from "get ActivityIndicator" /* 17 */;
import { jsx } from "jsxProd" /* 21 */;
import createCacheKey from "createCacheKey" /* 4478 */;
import importAllResult from "noop" /* 19 */;

const require = arg1;
function OverrideOption(type) {
  type = type.type;
  const selected = type.selected;
  const styles = type.styles;
  ({ permissionTitle, onPress } = type);
  let obj = type(styles[10]);
  const radioA11yNative = obj.useRadioA11yNative({ selected });
  obj = { accessibilityRole: radioA11yNative.accessibilityRole, accessibilityLabel: null, accessibilityState: null, style: null, onPress: null, children: null };
  items = [permissionTitle, ];
  if (type(styles[5]).DENY === type) {
    const intl2 = tmp(tmp2[6]).intl;
    let stringResult = intl2.string(tmp(tmp2[6]).t["6639O5"]);
  } else if (tmp(tmp2[5]).ALLOW === type) {
    const intl = tmp(tmp2[6]).intl;
    stringResult = intl.string(tmp(tmp2[6]).t.RzDfSk);
  } else if (tmp(tmp2[5]).PASSTHROUGH === type) {
    const intl3 = tmp(tmp2[6]).intl;
    stringResult = intl3.string(tmp(tmp2[6]).t.ujC3ZS);
  }
  items[1] = stringResult;
  const found = items.filter(Boolean);
  obj[1] = found.join(", ");
  obj[2] = radioA11yNative.accessibilityState;
  obj[3] = function style(pressed) {
    items = selected;
    if (!selected) {
      if (!pressed.pressed) {
        return styles.iconWrapper;
      }
    }
    let iconWrapper = styles;
    if (type(styles[5]).DENY !== type) {
      if (tmp3(tmp4[5]).ALLOW === tmp2) {
        let tmp5 = items ? iconWrapper.allowSelected : iconWrapper.allowActive;
      } else if (tmp3(tmp4[5]).PASSTHROUGH === tmp2) {
        tmp5 = items ? iconWrapper.passthroughSelected : iconWrapper.passthroughActive;
      }
      items = [tmp5, ];
      iconWrapper = iconWrapper.iconWrapper;
      items[1] = iconWrapper;
    }
  };
  obj[4] = onPress;
  if (type(styles[5]).DENY === type) {
    obj = { size: "sm", style: null, color: null };
    obj[1] = styles.icon;
    const colors2 = selected(tmp2[3]).colors;
    obj[2] = selected ? colors2.WHITE : colors2.ICON_FEEDBACK_CRITICAL;
    let tmp4Result = tmp4(tmp(tmp2[7]).DenyIcon, obj);
  } else {
    if (tmp(tmp2[5]).ALLOW === type) {
      obj1 = { size: "sm", style: null, color: null };
      obj1[1] = styles.icon;
      const colors = selected(tmp2[3]).colors;
      obj1[2] = selected ? colors.WHITE : colors.ICON_FEEDBACK_POSITIVE;
      tmp4Result = tmp4(tmp(tmp2[8]).CheckmarkLargeBoldIcon, obj1);
    } else {
      tmp4Result = null;
      if (tmp(tmp2[5]).PASSTHROUGH === type) {
        const obj2 = { size: "sm", style: null, color: null };
        obj2[1] = styles.icon;
        const colors3 = selected(tmp2[3]).colors;
        obj2[2] = selected ? colors3.WHITE : colors3.INTERACTIVE_TEXT_DEFAULT;
        tmp4Result = tmp4(tmp(tmp2[9]).SlashIcon, obj2);
      }
    }
    obj[5] = tmp4Result;
    return tmp4(closure_3, obj);
  }
}
({ Pressable: c3, View: c4 } = get_ActivityIndicator);
const PX_4 = ThemesDefault.space.PX_4;
const md = ThemesDefault.radii.md;
let obj = { ternaryCheckBox: null, iconWrapper: null, icon: null, denyActive: null, denySelected: null, allowActive: null, allowSelected: null, passthroughSelected: null, passthroughActive: null, disabled: null };
obj = { backgroundColor: ThemesDefault.colors.BACKGROUND_BASE_LOWEST, borderRadius: md, height: ThemesDefault.space.PX_32, paddingVertical: PX_4, paddingHorizontal: PX_4 / 2, flexDirection: "row" };
obj[0] = obj;
obj[1] = { borderRadius: md - PX_4, marginHorizontal: PX_4 / 2, justifyContent: "center", height: "100%" };
createCacheKey = { marginHorizontal: ThemesDefault.space.PX_8 };
obj[2] = createCacheKey;
obj[3] = { backgroundColor: ThemesDefault.colors.BACKGROUND_FEEDBACK_CRITICAL };
let obj2 = { backgroundColor: ThemesDefault.colors.BACKGROUND_FEEDBACK_CRITICAL };
obj[4] = { backgroundColor: ThemesDefault.colors.ICON_FEEDBACK_CRITICAL, borderRadius: ThemesDefault.radii.sm - 2 };
const obj3 = { backgroundColor: ThemesDefault.colors.ICON_FEEDBACK_CRITICAL, borderRadius: ThemesDefault.radii.sm - 2 };
obj[5] = { backgroundColor: ThemesDefault.colors.BACKGROUND_FEEDBACK_POSITIVE };
const obj4 = { backgroundColor: ThemesDefault.colors.BACKGROUND_FEEDBACK_POSITIVE };
obj[6] = { backgroundColor: ThemesDefault.colors.ICON_FEEDBACK_POSITIVE };
const obj5 = { backgroundColor: ThemesDefault.colors.ICON_FEEDBACK_POSITIVE };
obj[7] = { backgroundColor: ThemesDefault.colors.INTERACTIVE_BACKGROUND_SELECTED };
const obj6 = { backgroundColor: ThemesDefault.colors.INTERACTIVE_BACKGROUND_SELECTED };
obj[8] = { backgroundColor: ThemesDefault.colors.INTERACTIVE_BACKGROUND_HOVER };
obj[9] = { opacity: 0.3 };
let closure_6 = createCacheKey.createStyles(obj);
let items = [require("applyOverwrites").DENY, require("applyOverwrites").PASSTHROUGH, require("applyOverwrites").ALLOW];
const obj7 = { backgroundColor: ThemesDefault.colors.INTERACTIVE_BACKGROUND_HOVER };
const memoResult = importAllResult.memo(function ChannelSettingsPermissionsOverrideCheckbox(permissionTitle) {
  permissionTitle = permissionTitle.permissionTitle;
  ({ value: importDefault, disabled } = permissionTitle);
  if (disabled === undefined) {
    disabled = false;
  }
  const onValueChange = permissionTitle.onValueChange;
  closure_3 = undefined;
  const tmp = callback();
  closure_3 = tmp;
  items = [tmp.ternaryCheckBox, ];
  let disabled2 = disabled;
  if (disabled) {
    disabled2 = tmp.disabled;
  }
  const obj = { style: items, pointerEvents: null, accessibilityRole: "radiogroup", accessibilityLabel: null, children: null };
  items[1] = disabled2;
  let str = "auto";
  if (disabled) {
    str = "none";
  }
  obj[1] = str;
  obj[3] = permissionTitle;
  obj[4] = items.map((type) => {
    closure_0 = type;
    return closure_1_5(closure_1_8, {
      permissionTitle: closure_0,
      type,
      selected: closure_1 === type,
      styles: closure_3,
      onPress() {
        let tmp2 = null != closure_1_2;
        if (tmp2) {
          tmp2 = closure_1_1 !== closure_0;
        }
        if (tmp2) {
          closure_1_2(closure_0);
        }
      }
    }, "checkbox-" + arg1);
  });
  return <closure_4 style={items} pointerEvents={null} accessibilityRole="radiogroup" accessibilityLabel={null}>{null}</closure_4>;
});
const result = require("set").fileFinishedImporting("components_native/channel_settings/ChannelSettingsPermissionsOverrideCheckbox.tsx");

export default memoResult;