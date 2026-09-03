// === Module 17270: DefaultAvatarButton ===

// Module 17270 (DefaultAvatarButton)
import noopAll from "noop" /* 19 */;
import ThemesDefault from "Themes" /* 709 */;
import getSystemLocale from "getSystemLocale" /* 1233 */;
import Text from "Text" /* 4474 */;
import PressableBase from "PressableBase" /* 5077 */;
import preloadDefault from "preload" /* 5502 */;
import setDefault from "set" /* 17271 */;
import setDefault2 from "set" /* 17272 */;
import setDefault3 from "set" /* 17273 */;
import setDefault4 from "set" /* 17274 */;
import setDefault5 from "set" /* 17275 */;
import setDefault6 from "set" /* 17276 */;
import setDefault7 from "set" /* 17277 */;
import setDefault8 from "set" /* 17278 */;
import { View } from "get ActivityIndicator" /* 17 */;
import jsxProd from "jsxProd" /* 21 */;
import createCacheKey from "createCacheKey" /* 4478 */;

require = arg1;
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
  const intl = tmp3(1233).intl;
  obj[4] = intl.string(getSystemLocale.t.vw2RsD);
  obj[5] = onSelect;
  obj = { style: tmp.defaultAvatarButton, source: { uri: source } };
  obj[6] = closure_4(preloadDefault, obj);
  return closure_4(PressableBase.PressableOpacity, obj);
}
noopAll;
({ jsx: c4, jsxs: c5 } = jsxProd);
let items = [setDefault, setDefault2, setDefault3, setDefault4, setDefault5, setDefault6, setDefault7, setDefault8];
let obj = {
  avatar: setDefault,
  label() {
    const intl = getSystemLocale.intl;
    return intl.string(getSystemLocale.t["u/VENK"]);
  }
};
let items1 = [obj, , , , , , , ];
obj = {
  avatar: setDefault2,
  label() {
    const intl = getSystemLocale.intl;
    return intl.string(getSystemLocale.t["pBx+d8"]);
  }
};
items1[1] = obj;
obj = {
  avatar: setDefault3,
  label() {
    const intl = getSystemLocale.intl;
    return intl.string(getSystemLocale.t.vbERmz);
  }
};
items1[2] = obj;
items1[3] = {
  avatar: setDefault4,
  label() {
    const intl = getSystemLocale.intl;
    return intl.string(getSystemLocale.t.Ecxz3Z);
  }
};
const obj1 = {
  avatar: setDefault4,
  label() {
    const intl = getSystemLocale.intl;
    return intl.string(getSystemLocale.t.Ecxz3Z);
  }
};
items1[4] = {
  avatar: setDefault5,
  label() {
    const intl = getSystemLocale.intl;
    return intl.string(getSystemLocale.t.Jb8PYM);
  }
};
const obj2 = {
  avatar: setDefault5,
  label() {
    const intl = getSystemLocale.intl;
    return intl.string(getSystemLocale.t.Jb8PYM);
  }
};
items1[5] = {
  avatar: setDefault6,
  label() {
    const intl = getSystemLocale.intl;
    return intl.string(getSystemLocale.t["3h0yoI"]);
  }
};
const obj3 = {
  avatar: setDefault6,
  label() {
    const intl = getSystemLocale.intl;
    return intl.string(getSystemLocale.t["3h0yoI"]);
  }
};
items1[6] = {
  avatar: setDefault7,
  label() {
    const intl = getSystemLocale.intl;
    return intl.string(getSystemLocale.t.frIpZ5);
  }
};
const obj4 = {
  avatar: setDefault7,
  label() {
    const intl = getSystemLocale.intl;
    return intl.string(getSystemLocale.t.frIpZ5);
  }
};
items1[7] = {
  avatar: setDefault8,
  label() {
    const intl = getSystemLocale.intl;
    return intl.string(getSystemLocale.t.zpfUeg);
  }
};
const obj6 = { container: { display: "flex", alignItems: "center", flex: 1 }, buttonsContainer: { display: "flex", flexDirection: "row", marginTop: 20, justifyContent: "space-between" }, defaultAvatarButton: null, defaultAvatarContainer: null, defaultAvatarSelected: null };
const obj5 = {
  avatar: setDefault8,
  label() {
    const intl = getSystemLocale.intl;
    return intl.string(getSystemLocale.t.zpfUeg);
  }
};
obj6[2] = { height: 48, width: 48, borderRadius: ThemesDefault.radii.xl };
obj6[3] = { marginHorizontal: 8, width: 56, height: 56, padding: 2, borderWidth: 2, borderRadius: 28, borderColor: "transparent", display: "flex", alignItems: "center", justifyContent: "center" };
createCacheKey = { borderColor: ThemesDefault.colors.INTERACTIVE_TEXT_ACTIVE };
obj6[4] = createCacheKey;
let closure_7 = createCacheKey.createStyles(obj6);
const obj7 = { height: 48, width: 48, borderRadius: ThemesDefault.radii.xl };
const result = require("set").fileFinishedImporting("modules/avatar/native/components/PresetAvatarSelect.tsx");

export default function PresetAvatarSelect(arg0) {
  ({ onAvatarSelect: require, selectedAvatar: importDefault } = arg0);
  const tmp = callback3();
  let obj = { style: tmp.container, accessibilityRole: "list", children: null };
  obj = { variant: "text-sm/medium", color: "text-default", children: null };
  let intl = getSystemLocale.intl;
  obj[2] = intl.string(getSystemLocale.t.yP28YL);
  const items = [callback(Text.Text, obj), , ];
  obj = {
    style: tmp.buttonsContainer,
    children: items1.map((arg0) => {
      closure_0 = arg0;
      let obj = closure_1_6[arg0];
      obj = {
        source: obj.avatar,
        onSelect() {
          return callback(callback);
        },
        selected: closure_1 === arg0,
        accessibilityLabel: null
      };
      const intl = closure_1_0(closure_1_2[11]).intl;
      obj = { index: arg0 + 1, description: obj.label() };
      obj[3] = intl.formatToPlainString(closure_1_0(closure_1_2[11]).t["1K8jaQ"], obj);
      return closure_1_4(closure_1_8, obj, arg0);
    })
  };
  items1 = [0, 1, 2, 3];
  items[1] = callback(View, obj);
  const items2 = [4, 5, 6, 7];
  items[2] = callback(View, {
    style: tmp.buttonsContainer,
    children: items2.map((arg0) => {
      closure_0 = arg0;
      let obj = closure_1_6[arg0];
      obj = {
        source: obj.avatar,
        onSelect() {
          return callback(callback);
        },
        selected: closure_1 === arg0,
        accessibilityLabel: null
      };
      const intl = closure_1_0(closure_1_2[11]).intl;
      obj = { index: arg0 + 1, description: obj.label() };
      obj[3] = intl.formatToPlainString(closure_1_0(closure_1_2[11]).t["1K8jaQ"], obj);
      return closure_1_4(closure_1_8, obj, arg0);
    })
  });
  obj[2] = items;
  return callback2(View, obj);
};
export const DEFAULT_AVATARS = items;
export const DEFAULT_AVATARS_WITH_LABELS = items1;