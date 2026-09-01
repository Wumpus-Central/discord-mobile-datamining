// === Module 15125: items ===

// Module 15125 (items)
import ThemesDefault from "Themes" /* 712 */;
import getSystemLocale from "getSystemLocale" /* 1236 */;
import closure_3 from "_slicedToArray" /* 32 */;
import closure_4 from "noop" /* 19 */;
import { jsx } from "jsxProd" /* 21 */;
import createCacheKey from "createCacheKey" /* 4478 */;

require = arg1;
const items = [
  () => {
    const intl = getSystemLocale.intl;
    return intl.string(getSystemLocale.t["EgWTY+"]);
  },
  () => {
    const intl = getSystemLocale.intl;
    return intl.string(getSystemLocale.t.umBn5f);
  },
  () => {
    const intl = getSystemLocale.intl;
    return intl.string(getSystemLocale.t.dG1wD1);
  },
  () => {
    const intl = getSystemLocale.intl;
    return intl.string(getSystemLocale.t.SesI4S);
  },
  () => {
    const intl = getSystemLocale.intl;
    return intl.string(getSystemLocale.t.RnMLvl);
  }
];
createCacheKey = { icon: null };
createCacheKey = { borderRadius: ThemesDefault.radii.md };
createCacheKey[0] = createCacheKey;
let closure_7 = createCacheKey.createStyles(createCacheKey);
const result = require("set").fileFinishedImporting("modules/app_icons/native/AppIconRow/AppIconRow.tsx");

export default function AppIconRow(arg0) {
  ({ icon, onSelect: require, onLongPress: importDefault } = arg0);
  let id;
  ({ hasNitro, currentAppIcon, showEasterEgg } = arg0);
  id = icon.id;
  if (id === require(id[6]).PremiumAppIconIds.PIRATE) {
    let obj = importDefault(tmp4[7]);
    let name = items[obj.random(obj, 0, items.length - 1)]();
  } else {
    name = icon.name;
  }
  const tmp = callback2();
  const radioA11yNative = require(id[8]).useRadioA11yNative({ selected: tmp7 });
  ({ accessibilityRole, accessibilityState } = radioA11yNative);
  if (id === require(id[6]).PremiumAppIconIds.BRAND_INVERTED) {
    if (!showEasterEgg) {
      let tmp10Result = null;
    }
    return tmp10Result;
  }
  tmp10Result = null;
  if (!icon.isHidden) {
    obj = { icon: null, label: null, onLongPress: null, onPress: null, accessibilityRole: null, accessibilityState: null, trailing: null };
    obj = { id: null, style: null };
    obj[0] = id;
    obj[1] = tmp.icon;
    obj[0] = jsx(importDefault(tmp4[10]), { id: null, style: null });
    obj[1] = callback(React.useState(name), 1)[0];
    obj[2] = function onLongPress() {
      return callback2(id);
    };
    obj[3] = function onPress() {
      return callback(id);
    };
    obj[4] = accessibilityRole;
    obj[5] = accessibilityState;
    if (!tmp7) {
      if (icon.isPremium) {
        tmp10Result = null;
      }
      obj[6] = tmp10Result;
      tmp10Result = tmp10(tmp3(tmp4[9]).TableRow, obj, id);
    }
    obj1 = { selected: null };
    obj1[0] = tmp7;
    tmp10Result = tmp10(tmp3(tmp4[11]).FormRadio, obj1);
  }
};