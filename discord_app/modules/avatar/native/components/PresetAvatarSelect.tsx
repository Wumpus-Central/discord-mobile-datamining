// === Module 16648: DefaultAvatarButton ===

// Module 16648 (DefaultAvatarButton)
import noopAll from "noop" /* 19 */;
import ThemesDefault from "Themes" /* 712 */;
import getSystemLocale from "getSystemLocale" /* 1236 */;
import Text from "Text" /* 4734 */;
import PressableBase from "PressableBase" /* 5433 */;
import preloadDefault from "preload" /* 5449 */;
import obj132Default from "obj132" /* 16649 */;
import obj132Default2 from "obj132" /* 16650 */;
import obj132Default3 from "obj132" /* 16651 */;
import obj132Default4 from "obj132" /* 16652 */;
import obj132Default5 from "obj132" /* 16653 */;
import obj132Default6 from "obj132" /* 16654 */;
import obj132Default7 from "obj132" /* 16655 */;
import obj132Default8 from "obj132" /* 16656 */;
import { View } from "get ActivityIndicator" /* 17 */;
import jsxProd from "jsxProd" /* 21 */;
import "createCacheKey";

require = fn;
function DefaultAvatarButton(selected) {
  selected = selected.selected;
  ({ source, onSelect, accessibilityLabel } = selected);
  const tmp = callback3();
  const items = [tmp.defaultAvatarContainer, ];
  let prop;
  if (selected) {
    prop = tmp.defaultAvatarSelected;
  }
  let obj = { style: items, accessibilityRole: "button", accessibilityLabel, accessibilityState: { selected }, accessibilityHint: null, onPress: null, children: null };
  items[1] = prop;
  const intl = getSystemLocale.intl;
  obj[4] = intl.string(getSystemLocale.t.vw2RsD);
  obj[5] = onSelect;
  obj = { style: tmp.defaultAvatarButton, source: { uri: source } };
  obj[6] = callback(preloadDefault, obj);
  return callback(PressableBase.PressableOpacity, obj);
}
noopAll;
({ jsx: c4, jsxs: c5 } = jsxProd);
let items = [obj132Default, obj132Default2, obj132Default3, obj132Default4, obj132Default5, obj132Default6, obj132Default7, obj132Default8];
let obj = {
  avatar: obj132Default,
  label() {
    const intl = getSystemLocale.intl;
    return intl.string(getSystemLocale.t["u/VENK"]);
  }
};
let items1 = [obj, , , , , , , ];
obj = {
  avatar: obj132Default2,
  label() {
    const intl = getSystemLocale.intl;
    return intl.string(getSystemLocale.t["pBx+d8"]);
  }
};
items1[1] = obj;
obj = {
  avatar: obj132Default3,
  label() {
    const intl = getSystemLocale.intl;
    return intl.string(getSystemLocale.t.vbERmz);
  }
};
items1[2] = obj;
items1[3] = {
  avatar: obj132Default4,
  label() {
    const intl = getSystemLocale.intl;
    return intl.string(getSystemLocale.t.Ecxz3Z);
  }
};
items1[4] = {
  avatar: obj132Default5,
  label() {
    const intl = getSystemLocale.intl;
    return intl.string(getSystemLocale.t.Jb8PYM);
  }
};
items1[5] = {
  avatar: obj132Default6,
  label() {
    const intl = getSystemLocale.intl;
    return intl.string(getSystemLocale.t["3h0yoI"]);
  }
};
items1[6] = {
  avatar: obj132Default7,
  label() {
    const intl = getSystemLocale.intl;
    return intl.string(getSystemLocale.t.frIpZ5);
  }
};
items1[7] = {
  avatar: obj132Default8,
  label() {
    const intl = getSystemLocale.intl;
    return intl.string(getSystemLocale.t.zpfUeg);
  }
};
const obj6 = { container: { display: "flex", alignItems: "center", flex: 1 }, buttonsContainer: { display: "flex", flexDirection: "row", marginTop: 20, justifyContent: "space-between" }, defaultAvatarButton: null, defaultAvatarContainer: null, defaultAvatarSelected: null };
obj6[2] = { height: 48, width: 48, borderRadius: ThemesDefault.radii.xl };
obj6[3] = { marginHorizontal: 8, width: 56, height: 56, padding: 2, borderWidth: 2, borderRadius: 28, borderColor: "transparent", display: "flex", alignItems: "center", justifyContent: "center" };
const createCacheKey = { borderColor: ThemesDefault.colors.INTERACTIVE_TEXT_ACTIVE };
obj6[4] = createCacheKey;
let closure_7 = createCacheKey.createStyles(obj6);
const result = require("obj132").fileFinishedImporting("modules/avatar/native/components/PresetAvatarSelect.tsx");

export default function PresetAvatarSelect(arg0) {
  ({ onAvatarSelect: require, selectedAvatar: importDefault } = arg0);
  const tmp = callback3();
  let obj = { variant: "text-sm/medium", color: "text-default", children: null };
  let intl = getSystemLocale.intl;
  obj[2] = intl.string(getSystemLocale.t.yP28YL);
  const items = [callback(Text.Text, obj), , ];
  obj = {
    style: tmp.buttonsContainer,
    children: items1.map((item, index) => {
      closure_0 = item;
      let obj = items1[item];
      obj = {
        source: obj.avatar,
        onSelect() {
          return item(item);
        },
        selected: closure_1 === item,
        accessibilityLabel: null
      };
      const intl = getSystemLocale.intl;
      obj = { index: item + 1, description: obj.label() };
      obj[3] = intl.formatToPlainString(getSystemLocale.t["1K8jaQ"], obj);
      return closure_1_4(DefaultAvatarButton, obj, item);
    })
  };
  items1 = [0, 1, 2, 3];
  items[1] = callback(View, obj);
  const items2 = [4, 5, 6, 7];
  items[2] = callback(View, {
    style: tmp.buttonsContainer,
    children: items2.map((item, index) => {
      closure_0 = item;
      let obj = items1[item];
      obj = {
        source: obj.avatar,
        onSelect() {
          return item(item);
        },
        selected: closure_1 === item,
        accessibilityLabel: null
      };
      const intl = getSystemLocale.intl;
      obj = { index: item + 1, description: obj.label() };
      obj[3] = intl.formatToPlainString(getSystemLocale.t["1K8jaQ"], obj);
      return closure_1_4(DefaultAvatarButton, obj, item);
    })
  });
  obj[2] = items;
  return callback2(View, obj);
};
export const DEFAULT_AVATARS = items;
export const DEFAULT_AVATARS_WITH_LABELS = items1;