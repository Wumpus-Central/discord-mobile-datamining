import "noop";
import { View } from "set";
import jsxProd from "jsxProd";
import createCacheKey from "createCacheKey";

let c4;
let c5;
const require = arg1;
function DefaultAvatarButton(selected) {
  let accessibilityLabel;
  let onSelect;
  let source;
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
  const intl = tmp3(1236).intl;
  obj[4] = intl.string(require(1236) /* getSystemLocale */.t.vw2RsD);
  obj[5] = onSelect;
  obj = { style: tmp.defaultAvatarButton, source: { uri: source } };
  obj[6] = closure_4(importDefault(5207), obj);
  return closure_4(require(4783) /* PressableBase */.PressableOpacity, obj);
}
({ jsx: c4, jsxs: c5 } = jsxProd);
let items = [require("set"), require("set"), require("set"), require("set"), require("set"), require("set"), require("set"), require("set")];
let obj = {
  avatar: require("set"),
  label() {
    const intl = require(1236) /* getSystemLocale */.intl;
    return intl.string(require(1236) /* getSystemLocale */.t["u/VENK"]);
  }
};
let items1 = [obj, , , , , , , ];
obj = {
  avatar: require("set"),
  label() {
    const intl = require(1236) /* getSystemLocale */.intl;
    return intl.string(require(1236) /* getSystemLocale */.t["pBx+d8"]);
  }
};
items1[1] = obj;
obj = {
  avatar: require("set"),
  label() {
    const intl = require(1236) /* getSystemLocale */.intl;
    return intl.string(require(1236) /* getSystemLocale */.t.vbERmz);
  }
};
items1[2] = obj;
items1[3] = {
  avatar: require("set"),
  label() {
    const intl = require(1236) /* getSystemLocale */.intl;
    return intl.string(require(1236) /* getSystemLocale */.t.Ecxz3Z);
  }
};
const obj1 = {
  avatar: require("set"),
  label() {
    const intl = require(1236) /* getSystemLocale */.intl;
    return intl.string(require(1236) /* getSystemLocale */.t.Ecxz3Z);
  }
};
items1[4] = {
  avatar: require("set"),
  label() {
    const intl = require(1236) /* getSystemLocale */.intl;
    return intl.string(require(1236) /* getSystemLocale */.t.Jb8PYM);
  }
};
const obj2 = {
  avatar: require("set"),
  label() {
    const intl = require(1236) /* getSystemLocale */.intl;
    return intl.string(require(1236) /* getSystemLocale */.t.Jb8PYM);
  }
};
items1[5] = {
  avatar: require("set"),
  label() {
    const intl = require(1236) /* getSystemLocale */.intl;
    return intl.string(require(1236) /* getSystemLocale */.t["3h0yoI"]);
  }
};
const obj3 = {
  avatar: require("set"),
  label() {
    const intl = require(1236) /* getSystemLocale */.intl;
    return intl.string(require(1236) /* getSystemLocale */.t["3h0yoI"]);
  }
};
items1[6] = {
  avatar: require("set"),
  label() {
    const intl = require(1236) /* getSystemLocale */.intl;
    return intl.string(require(1236) /* getSystemLocale */.t.frIpZ5);
  }
};
const obj4 = {
  avatar: require("set"),
  label() {
    const intl = require(1236) /* getSystemLocale */.intl;
    return intl.string(require(1236) /* getSystemLocale */.t.frIpZ5);
  }
};
items1[7] = {
  avatar: require("set"),
  label() {
    const intl = require(1236) /* getSystemLocale */.intl;
    return intl.string(require(1236) /* getSystemLocale */.t.zpfUeg);
  }
};
const obj6 = { container: { display: "flex", alignItems: "center", flex: 1 }, buttonsContainer: { display: "flex", flexDirection: "row", marginTop: 20, justifyContent: "space-between" }, defaultAvatarButton: null, defaultAvatarContainer: null, defaultAvatarSelected: null };
const obj5 = {
  avatar: require("set"),
  label() {
    const intl = require(1236) /* getSystemLocale */.intl;
    return intl.string(require(1236) /* getSystemLocale */.t.zpfUeg);
  }
};
obj6[2] = { height: 48, width: 48, borderRadius: require("Themes").radii.xl };
obj6[3] = { marginHorizontal: 8, width: 56, height: 56, padding: 2, borderWidth: 2, borderRadius: 28, borderColor: "transparent", display: "flex", alignItems: "center", justifyContent: "center" };
createCacheKey = { borderColor: require("Themes").colors.INTERACTIVE_TEXT_ACTIVE };
obj6[4] = createCacheKey;
let closure_7 = createCacheKey.createStyles(obj6);
const obj7 = { height: 48, width: 48, borderRadius: require("Themes").radii.xl };
const result = require("jsxProd").fileFinishedImporting("modules/avatar/native/components/PresetAvatarSelect.tsx");

export default function PresetAvatarSelect(arg0) {
  let importDefault;
  let require;
  ({ onAvatarSelect: require, selectedAvatar: importDefault } = arg0);
  const tmp = callback3();
  let obj = { style: tmp.container, accessibilityRole: "list", children: null };
  obj = { variant: "text-sm/medium", color: "text-default", children: null };
  let intl = require(1236) /* getSystemLocale */.intl;
  obj[2] = intl.string(require(1236) /* getSystemLocale */.t.yP28YL);
  const items = [callback(require(4251) /* Text */.Text, obj), , ];
  obj = {
    style: tmp.buttonsContainer,
    children: items1.map((arg0) => {
      let closure_0 = arg0;
      let obj = outer1_6[arg0];
      obj = {
        source: obj.avatar,
        onSelect() {
          return callback(callback);
        },
        selected: closure_1 === arg0,
        accessibilityLabel: null
      };
      const intl = outer1_0(outer1_2[11]).intl;
      obj = { index: arg0 + 1, description: null };
      obj[1] = obj.label();
      obj[3] = intl.formatToPlainString(outer1_0(outer1_2[11]).t["1K8jaQ"], obj);
      return outer1_4(outer1_8, obj, arg0);
    })
  };
  items1 = [0, 1, 2, 3];
  items[1] = callback(View, obj);
  const items2 = [4, 5, 6, 7];
  items[2] = callback(View, {
    style: tmp.buttonsContainer,
    children: items2.map((arg0) => {
      let closure_0 = arg0;
      let obj = outer1_6[arg0];
      obj = {
        source: obj.avatar,
        onSelect() {
          return callback(callback);
        },
        selected: closure_1 === arg0,
        accessibilityLabel: null
      };
      const intl = outer1_0(outer1_2[11]).intl;
      obj = { index: arg0 + 1, description: null };
      obj[1] = obj.label();
      obj[3] = intl.formatToPlainString(outer1_0(outer1_2[11]).t["1K8jaQ"], obj);
      return outer1_4(outer1_8, obj, arg0);
    })
  });
  obj[2] = items;
  return callback2(View, obj);
};
export const DEFAULT_AVATARS = items;
export const DEFAULT_AVATARS_WITH_LABELS = items1;