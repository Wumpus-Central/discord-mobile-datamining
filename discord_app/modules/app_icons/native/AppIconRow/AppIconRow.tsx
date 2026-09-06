// discord_app/modules/app_icons/native/AppIconRow/AppIconRow.tsx
import _modDef12 from "../../../../../_runtime/metro/00012__.js";
import nativeDefault from "../../../../../discord_common/js/packages/tokens/native.tsx";
import util from "../../../../intl/index.native.tsx";
import useA11yRolesNative from "../../../../../discord_common/js/packages/design/hooks/useA11yRolesNative.tsx";
import AppIconTypes from "../../AppIconTypes.tsx";
import AppIconDefault from "../AppIcon.tsx";
import _slicedToArray from "../../../../../_runtime/metro/00032__.js";
import noop from "../../../../../_runtime/metro/00019__.js";

require = fn;
const jsx = fn(21).jsx;
const items = [
  () => {
    const intl = util.intl;
    return intl.string(util.t["EgWTY+"]);
  },
  () => {
    const intl = util.intl;
    return intl.string(util.t.umBn5f);
  },
  () => {
    const intl = util.intl;
    return intl.string(util.t.dG1wD1);
  },
  () => {
    const intl = util.intl;
    return intl.string(util.t.SesI4S);
  },
  () => {
    const intl = util.intl;
    return intl.string(util.t.RnMLvl);
  },
];
fn(4560);
let createStyles = { icon: null };
createStyles = { borderRadius: nativeDefault.radii.md };
createStyles.icon = createStyles;
let closure_7 = createStyles.createStyles(createStyles);
const size = fn(2);
const result = size.fileFinishedImporting("modules/app_icons/native/AppIconRow/AppIconRow.tsx");

export default function AppIconRow(arg0) {
  ({ icon, onSelect: require, onLongPress: importDefault } = arg0);
  ({ hasNitro, currentAppIcon, showEasterEgg } = arg0);
  const id = icon.id;
  if (id === AppIconTypes.PremiumAppIconIds.PIRATE) {
    let obj = _modDef12;
    let name = items[obj.random(obj, 0, items.length - 1)]();
  } else {
    name = icon.name;
  }
  const tmp = closure_7();
  const radioA11yNative = useA11yRolesNative.useRadioA11yNative({ selected: tmp7 });
  ({ accessibilityRole, accessibilityState } = radioA11yNative);
  if (id === AppIconTypes.PremiumAppIconIds.BRAND_INVERTED) {
    if (!showEasterEgg) {
      let tmp10Result = null;
    }
    return tmp10Result;
  }
  tmp10Result = null;
  if (!icon.isHidden) {
    obj = {
      icon: null,
      label: null,
      onLongPress: null,
      onPress: null,
      accessibilityRole: null,
      accessibilityState: null,
      trailing: null,
    };
    obj = { id, style: tmp.icon };
    obj.icon = jsx(AppIconDefault, { id, style: tmp.icon });
    obj.label = _slicedToArray(noop.useState(name), 1)[0];
    obj.onLongPress = function onLongPress() {
      return importDefault(id);
    };
    obj.onPress = function onPress() {
      return require(id);
    };
    obj.accessibilityRole = accessibilityRole;
    obj.accessibilityState = accessibilityState;
    if (!tmp7) {
      if (icon.isPremium) {
        tmp10Result = null;
      }
      obj.trailing = tmp10Result;
      tmp10Result = tmp10(tmp3(5605).TableRow, obj, id);
    }
    const obj1 = { selected: tmp7 };
    tmp10Result = tmp10(tmp3(5689).FormRadio, obj1);
  }
}
