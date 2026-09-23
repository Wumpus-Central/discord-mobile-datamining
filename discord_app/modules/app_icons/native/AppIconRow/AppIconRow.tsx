// === Module 15869: AppIconRow ===

// Module 15869 (AppIconRow)
import _modDef12 from "module_12" /* 12 */;
import nativeDefault from "native" /* 576 */;
import util from "util" /* 1115 */;
import useA11yRolesNative from "useA11yRolesNative" /* 4541 */;
import TableRow from "TableRow" /* 5908 */;
import FormRadio from "FormRadio" /* 5992 */;
import AppIconTypes from "AppIconTypes" /* 9515 */;
import AppIconDefault from "AppIcon" /* 15866 */;
import _slicedToArray from "module_32" /* 32 */;
import noop from "module_19" /* 19 */;

const require = globalThis.__r;

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
  }
];
const createStyles = fn(4827);
let obj2 = { icon: { borderRadius: nativeDefault.radii.md } };
let closure_7 = createStyles.createStyles(obj2);
const size = fn(2);
const result = size.fileFinishedImporting("modules/app_icons/native/AppIconRow/AppIconRow.tsx");

export default function AppIconRow(arg0) {
  ({ icon, onSelect: require, onLongPress: importDefault } = arg0);
  ({ hasNitro, currentAppIcon, showEasterEgg } = arg0);
  const id = icon.id;
  if (id === AppIconTypes.PremiumAppIconIds.PIRATE) {
    const obj = _modDef12;
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
    const obj2 = { icon: null, label: null, onLongPress: null, onPress: null, accessibilityRole: null, accessibilityState: null, trailing: null };
    const obj3 = { id, style: tmp.icon };
    obj2.icon = jsx(AppIconDefault, { id, style: tmp.icon });
    obj2.label = _slicedToArray(noop.useState(name), 1)[0];
    obj2.onLongPress = function onLongPress() {
      return importDefault(id);
    };
    obj2.onPress = function onPress() {
      return require(id);
    };
    obj2.accessibilityRole = accessibilityRole;
    obj2.accessibilityState = accessibilityState;
    if (!tmp7) {
      if (icon.isPremium) {
        let tmp10Result2 = null;
      }
      obj2.trailing = tmp10Result2;
      tmp10Result = jsx(TableRow.TableRow, obj2, id);
    }
    const obj4 = { selected: tmp7 };
    tmp10Result2 = jsx(FormRadio.FormRadio, { selected: tmp7 });
  }
  const tmp3Result = useA11yRolesNative;
};