// === Module 17945: PresetAvatarSelect ===

// Module 17945 (PresetAvatarSelect)
import nativeDefault from "native" /* 576 */;
import util from "util" /* 1115 */;
import Text_Text from "Text/Text" /* 4825 */;
import Pressables from "Pressables" /* 5427 */;
import FastImageDefault from "FastImage" /* 5892 */;
import defaultAvatar1Default from "defaultAvatar1" /* 17946 */;
import defaultAvatar2Default from "defaultAvatar2" /* 17947 */;
import defaultAvatar3Default from "defaultAvatar3" /* 17948 */;
import defaultAvatar4Default from "defaultAvatar4" /* 17949 */;
import defaultAvatar5Default from "defaultAvatar5" /* 17950 */;
import defaultAvatar6Default from "defaultAvatar6" /* 17951 */;
import defaultAvatar7Default from "defaultAvatar7" /* 17952 */;
import defaultAvatar8Default from "defaultAvatar8" /* 17953 */;
import noop from "module_19" /* 19 */;

const require = globalThis.__r;

require = fn;
function DefaultAvatarButton(selected) {
  selected = selected.selected;
  ({ source, onSelect, accessibilityLabel } = selected);
  const tmp = closure_7();
  const items = [tmp.defaultAvatarContainer, ];
  let prop;
  if (selected) {
    prop = tmp.defaultAvatarSelected;
  }
  const obj = { style: items, accessibilityRole: "button", accessibilityLabel, accessibilityState: { selected }, accessibilityHint: null, onPress: null, children: null };
  items[1] = prop;
  const intl = util.intl;
  obj.accessibilityHint = intl.string(util.t.vw2RsD);
  obj.onPress = onSelect;
  obj.children = React4(FastImageDefault, { style: tmp.defaultAvatarButton, source: { uri: source } });
  return React4(Pressables.PressableOpacity, obj);
}
const View = fn(17).View;
const jsxProd = fn(21);
({ jsx: closure_4, jsxs: hasOwnProperty } = jsxProd);
let items = [defaultAvatar1Default, defaultAvatar2Default, defaultAvatar3Default, defaultAvatar4Default, defaultAvatar5Default, defaultAvatar6Default, defaultAvatar7Default, defaultAvatar8Default];
let items1 = [
  {
    avatar: defaultAvatar1Default,
    label() {
      const intl = util.intl;
      return intl.string(util.t["u/VENK"]);
    }
  },
,
,
,
,
,
,

];
let obj = {
  avatar: defaultAvatar1Default,
  label() {
    const intl = util.intl;
    return intl.string(util.t["u/VENK"]);
  }
};
items1[1] = {
  avatar: defaultAvatar2Default,
  label() {
    const intl = util.intl;
    return intl.string(util.t["pBx+d8"]);
  }
};
let obj2 = {
  avatar: defaultAvatar2Default,
  label() {
    const intl = util.intl;
    return intl.string(util.t["pBx+d8"]);
  }
};
items1[2] = {
  avatar: defaultAvatar3Default,
  label() {
    const intl = util.intl;
    return intl.string(util.t.vbERmz);
  }
};
let obj3 = {
  avatar: defaultAvatar3Default,
  label() {
    const intl = util.intl;
    return intl.string(util.t.vbERmz);
  }
};
items1[3] = {
  avatar: defaultAvatar4Default,
  label() {
    const intl = util.intl;
    return intl.string(util.t.Ecxz3Z);
  }
};
let obj4 = {
  avatar: defaultAvatar4Default,
  label() {
    const intl = util.intl;
    return intl.string(util.t.Ecxz3Z);
  }
};
items1[4] = {
  avatar: defaultAvatar5Default,
  label() {
    const intl = util.intl;
    return intl.string(util.t.Jb8PYM);
  }
};
const obj5 = {
  avatar: defaultAvatar5Default,
  label() {
    const intl = util.intl;
    return intl.string(util.t.Jb8PYM);
  }
};
items1[5] = {
  avatar: defaultAvatar6Default,
  label() {
    const intl = util.intl;
    return intl.string(util.t["3h0yoI"]);
  }
};
const obj6 = {
  avatar: defaultAvatar6Default,
  label() {
    const intl = util.intl;
    return intl.string(util.t["3h0yoI"]);
  }
};
items1[6] = {
  avatar: defaultAvatar7Default,
  label() {
    const intl = util.intl;
    return intl.string(util.t.frIpZ5);
  }
};
const obj7 = {
  avatar: defaultAvatar7Default,
  label() {
    const intl = util.intl;
    return intl.string(util.t.frIpZ5);
  }
};
items1[7] = {
  avatar: defaultAvatar8Default,
  label() {
    const intl = util.intl;
    return intl.string(util.t.zpfUeg);
  }
};
const createStyles = fn(4829);
const obj10 = { container: { display: "flex", alignItems: "center", flex: 1 }, buttonsContainer: { display: "flex", flexDirection: "row", marginTop: 20, justifyContent: "space-between" }, defaultAvatarButton: null, defaultAvatarContainer: null, defaultAvatarSelected: null };
let size = { height: 48, width: 48, borderRadius: nativeDefault.radii.xl };
obj10.defaultAvatarButton = size;
obj10.defaultAvatarContainer = { marginHorizontal: 8, width: 56, height: 56, padding: 2, borderWidth: 2, borderRadius: 28, borderColor: "transparent", display: "flex", alignItems: "center", justifyContent: "center" };
const obj8 = {
  avatar: defaultAvatar8Default,
  label() {
    const intl = util.intl;
    return intl.string(util.t.zpfUeg);
  }
};
obj10.defaultAvatarSelected = { borderColor: nativeDefault.colors.INTERACTIVE_TEXT_ACTIVE };
let closure_7 = createStyles.createStyles(obj10);
size = fn(2);
const result = size.fileFinishedImporting("modules/avatar/native/components/PresetAvatarSelect.tsx");

export default function PresetAvatarSelect(arg0) {
  ({ onAvatarSelect: require, selectedAvatar: importDefault } = arg0);
  const tmp = closure_7();
  const obj = { style: tmp.container, accessibilityRole: "list", children: null };
  let obj2 = { variant: "text-sm/medium", color: "text-default", children: null };
  let intl = util.intl;
  obj2.children = intl.string(util.t.yP28YL);
  const items = [closure_4(Text_Text.Text, obj2), , ];
  const obj3 = { style: tmp.buttonsContainer, children: null };
  items1 = [0, 1, 2, 3];
  obj3.children = items1.map((item) => {
    closure_0 = item;
    const obj2 = {
      source: dependencyMap2[item].avatar,
      onSelect() {
        return require(closure_0);
      },
      selected: closure_1 === item,
      accessibilityLabel: null
    };
    const intl = util.intl;
    obj2.accessibilityLabel = intl.formatToPlainString(util.t["1K8jaQ"], { index: item + 1, description: dependencyMap2[item].label() });
    return closure_1_4(DefaultAvatarButton, obj2, item);
  });
  items[1] = closure_4(View, obj3);
  const obj4 = { style: tmp.buttonsContainer, children: null };
  const items2 = [4, 5, 6, 7];
  obj4.children = items2.map((item) => {
    closure_0 = item;
    const obj2 = {
      source: dependencyMap2[item].avatar,
      onSelect() {
        return require(closure_0);
      },
      selected: closure_1 === item,
      accessibilityLabel: null
    };
    const intl = util.intl;
    obj2.accessibilityLabel = intl.formatToPlainString(util.t["1K8jaQ"], { index: item + 1, description: dependencyMap2[item].label() });
    return closure_1_4(DefaultAvatarButton, obj2, item);
  });
  items[2] = closure_4(View, obj4);
  obj.children = items;
  return closure_5(View, obj);
};
export const DEFAULT_AVATARS = items;
export const DEFAULT_AVATARS_WITH_LABELS = items1;