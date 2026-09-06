// === Module 10301: ShinyButton ===

// Module 10301 (ShinyButton)
import nativeDefault from "native" /* 576 */;
import native from "native" /* 1178 */;
import BaseTextButton from "BaseTextButton" /* 4976 */;
import _modDef10302 from "module_10302" /* 10302 */;
import noop from "module_19" /* 19 */;

require = fn;
const jsx = fn(21).jsx;
fn(4560);
let createStyles = { container: null, sparkleIcon: null, disabled: null };
createStyles = { borderRadius: nativeDefault.radii.sm, backgroundColor: nativeDefault.colors.CONTROL_PRIMARY_BACKGROUND_DEFAULT };
createStyles.container = createStyles;
createStyles.sparkleIcon = { marginRight: 4, tintColor: nativeDefault.colors.WHITE };
createStyles.disabled = { opacity: 0.5 };
let closure_4 = createStyles.createStyles(createStyles);
const size = fn(2);
const result = size.fileFinishedImporting("modules/guild_role_subscriptions/native/components/ShinyButton.tsx");

export default function ShinyButton(style) {
  ({ loading, disabled, onPress } = style);
  if (onPress === undefined) {
    onPress = function c() {

    };
  }
  const merged = Object.assign(style, Object.assign({ style: 0, loading: 0, disabled: 0, onPress: 0 }));
  const tmp2 = closure_4();
  let obj = { onPress, pillStyle: null, loading, disabled, icon: null };
  const items = [tmp2.container, style.style];
  obj.pillStyle = items;
  let tmp3Result;
  if (!loading) {
    obj = { size: native.Icon.Sizes.REFRESH_SMALL_16, source: _modDef10302, style: null };
    const items1 = [tmp2.sparkleIcon, ];
    if (disabled) {
      disabled = tmp2.disabled;
    }
    items1[1] = disabled;
    obj.style = items1;
    tmp3Result = jsx(native.Icon, { size: native.Icon.Sizes.REFRESH_SMALL_16, source: _modDef10302, style: null });
  }
  obj.icon = tmp3Result;
  const merged1 = Object.assign(merged);
  return jsx(BaseTextButton.BaseTextButton, { onPress, pillStyle: null, loading, disabled, icon: null });
};