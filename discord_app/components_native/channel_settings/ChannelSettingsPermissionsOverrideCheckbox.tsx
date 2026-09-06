// discord_app/components_native/channel_settings/ChannelSettingsPermissionsOverrideCheckbox.tsx
import nativeDefault from "../../../discord_common/js/packages/tokens/native.tsx";
import PermissionUtils from "../../utils/PermissionUtils.tsx";
import noop from "../../../_runtime/metro/00019__.js";

require = fn;
function OverrideOption(type) {
  type = type.type;
  const selected = type.selected;
  const styles = type.styles;
  ({ permissionTitle, onPress } = type);
  let obj = type(styles[10]);
  const radioA11yNative = obj.useRadioA11yNative({ selected });
  obj = {
    accessibilityRole: radioA11yNative.accessibilityRole,
    accessibilityLabel: null,
    accessibilityState: null,
    style: null,
    onPress: null,
    children: null,
  };
  items = [permissionTitle];
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
  obj.accessibilityLabel = found.join(", ");
  obj.accessibilityState = radioA11yNative.accessibilityState;
  obj.style = function style(pressed) {
    items = selected;
    if (!selected) {
      if (!pressed.pressed) {
        return styles.iconWrapper;
      }
    }
    let iconWrapper = styles;
    if (PermissionUtils.DENY !== type) {
      if (PermissionUtils.ALLOW === type) {
        let tmp5 = items ? iconWrapper.allowSelected : iconWrapper.allowActive;
      } else if (PermissionUtils.PASSTHROUGH === type) {
        tmp5 = items ? iconWrapper.passthroughSelected : iconWrapper.passthroughActive;
      }
      items = [tmp5];
      iconWrapper = iconWrapper.iconWrapper;
      items[1] = iconWrapper;
    }
  };
  obj.onPress = onPress;
  if (type(styles[5]).DENY === type) {
    obj = { size: "sm", style: styles.icon, color: null };
    const colors2 = selected(tmp2[3]).colors;
    obj.color = selected ? colors2.WHITE : colors2.ICON_FEEDBACK_CRITICAL;
    let tmp4Result = jsx(tmp(tmp2[7]).DenyIcon, { size: "sm", style: styles.icon, color: null });
  } else {
    if (tmp(tmp2[5]).ALLOW === type) {
      const obj1 = { size: "sm", style: styles.icon, color: null };
      const colors = selected(tmp2[3]).colors;
      obj1.color = selected ? colors.WHITE : colors.ICON_FEEDBACK_POSITIVE;
      tmp4Result = jsx(tmp(tmp2[8]).CheckmarkLargeBoldIcon, { size: "sm", style: styles.icon, color: null });
    } else {
      tmp4Result = null;
      if (tmp(tmp2[5]).PASSTHROUGH === type) {
        const obj2 = { size: "sm", style: styles.icon, color: null };
        const colors3 = selected(tmp2[3]).colors;
        obj2.color = selected ? colors3.WHITE : colors3.INTERACTIVE_TEXT_DEFAULT;
        tmp4Result = jsx(tmp(tmp2[9]).SlashIcon, { size: "sm", style: styles.icon, color: null });
      }
    }
    obj.children = tmp4Result;
    return <closure_3 {...obj} />;
  }
}
get_ActivityIndicator = fn(17);
({ Pressable: c3, View: closure_4 } = get_ActivityIndicator);
const jsx = fn(21).jsx;
const PX_4 = nativeDefault.space.PX_4;
const md = nativeDefault.radii.md;
fn(4560);
let obj = {
  ternaryCheckBox: null,
  iconWrapper: null,
  icon: null,
  denyActive: null,
  denySelected: null,
  allowActive: null,
  allowSelected: null,
  passthroughSelected: null,
  passthroughActive: null,
  disabled: null,
};
obj = {
  backgroundColor: nativeDefault.colors.BACKGROUND_BASE_LOWEST,
  borderRadius: md,
  height: nativeDefault.space.PX_32,
  paddingVertical: PX_4,
  paddingHorizontal: PX_4 / 2,
  flexDirection: "row",
};
obj.ternaryCheckBox = obj;
obj.iconWrapper = { borderRadius: md - PX_4, marginHorizontal: PX_4 / 2, justifyContent: "center", height: "100%" };
const createStyles = { marginHorizontal: nativeDefault.space.PX_8 };
obj.icon = createStyles;
obj.denyActive = { backgroundColor: nativeDefault.colors.BACKGROUND_FEEDBACK_CRITICAL };
let obj2 = { backgroundColor: nativeDefault.colors.BACKGROUND_FEEDBACK_CRITICAL };
obj.denySelected = {
  backgroundColor: nativeDefault.colors.ICON_FEEDBACK_CRITICAL,
  borderRadius: nativeDefault.radii.sm - 2,
};
const obj3 = { backgroundColor: nativeDefault.colors.ICON_FEEDBACK_CRITICAL, borderRadius: nativeDefault.radii.sm - 2 };
obj.allowActive = { backgroundColor: nativeDefault.colors.BACKGROUND_FEEDBACK_POSITIVE };
const obj4 = { backgroundColor: nativeDefault.colors.BACKGROUND_FEEDBACK_POSITIVE };
obj.allowSelected = { backgroundColor: nativeDefault.colors.ICON_FEEDBACK_POSITIVE };
const obj5 = { backgroundColor: nativeDefault.colors.ICON_FEEDBACK_POSITIVE };
obj.passthroughSelected = { backgroundColor: nativeDefault.colors.INTERACTIVE_BACKGROUND_SELECTED };
const obj6 = { backgroundColor: nativeDefault.colors.INTERACTIVE_BACKGROUND_SELECTED };
obj.passthroughActive = { backgroundColor: nativeDefault.colors.INTERACTIVE_BACKGROUND_HOVER };
obj.disabled = { opacity: 0.3 };
let closure_6 = createStyles.createStyles(obj);
let items = [fn(4204).DENY, fn(4204).PASSTHROUGH, fn(4204).ALLOW];
const obj7 = { backgroundColor: nativeDefault.colors.INTERACTIVE_BACKGROUND_HOVER };
const size = fn(2);
const result = size.fileFinishedImporting(
  "components_native/channel_settings/ChannelSettingsPermissionsOverrideCheckbox.tsx",
);

export default noop.memo(function ChannelSettingsPermissionsOverrideCheckbox(permissionTitle) {
  permissionTitle = permissionTitle.permissionTitle;
  ({ value: importDefault, disabled } = permissionTitle);
  if (disabled === undefined) {
    disabled = false;
  }
  const onValueChange = permissionTitle.onValueChange;
  const tmp = closure_6();
  const styles = tmp;
  items = [tmp.ternaryCheckBox];
  let disabled2 = disabled;
  if (disabled) {
    disabled2 = tmp.disabled;
  }
  const obj = {
    style: items,
    pointerEvents: null,
    accessibilityRole: "radiogroup",
    accessibilityLabel: null,
    children: null,
  };
  items[1] = disabled2;
  let str = "auto";
  if (disabled) {
    str = "none";
  }
  obj.pointerEvents = str;
  obj.accessibilityLabel = permissionTitle;
  obj.children = items.map((type, index) => {
    permissionTitle = type;
    return (
      <OverrideOption
        key={"checkbox-" + index}
        permissionTitle={permissionTitle}
        type={type}
        selected={closure_1 === type}
        styles={styles}
        onPress={function onPress() {
          let tmp2 = null != onValueChange;
          if (tmp2) {
            tmp2 = importDefault !== closure_0;
          }
          if (tmp2) {
            onValueChange(closure_0);
          }
        }}
      />
    );
  });
  return (
    <closure_4 style={items} pointerEvents={null} accessibilityRole="radiogroup" accessibilityLabel={null}>
      {null}
    </closure_4>
  );
});
