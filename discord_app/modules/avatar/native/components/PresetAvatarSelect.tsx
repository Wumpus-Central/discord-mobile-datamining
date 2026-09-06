// discord_app/modules/avatar/native/components/PresetAvatarSelect.tsx
import nativeDefault from "../../../../../discord_common/js/packages/tokens/native.tsx";
import util from "../../../../intl/index.native.tsx";
import Text_Text from "../../../../design/components/Text/native/Text.tsx";
import Pressables from "../../../../design/void/Pressables/native/Pressables.tsx";
import FastImageDefault from "../../../../components_native/common/FastImage.tsx";
import defaultAvatar1Default from "../../images/defaultAvatar1.tsx";
import defaultAvatar2Default from "../../images/defaultAvatar2.tsx";
import defaultAvatar3Default from "../../images/defaultAvatar3.tsx";
import defaultAvatar4Default from "../../images/defaultAvatar4.tsx";
import defaultAvatar5Default from "../../images/defaultAvatar5.tsx";
import defaultAvatar6Default from "../../images/defaultAvatar6.tsx";
import defaultAvatar7Default from "../../images/defaultAvatar7.tsx";
import defaultAvatar8Default from "../../images/defaultAvatar8.tsx";
import noop from "../../../../../_runtime/metro/00019__.js";

require = fn;
function DefaultAvatarButton(selected) {
  selected = selected.selected;
  ({ source, onSelect, accessibilityLabel } = selected);
  const tmp = closure_7();
  const items = [tmp.defaultAvatarContainer];
  let prop;
  if (selected) {
    prop = tmp.defaultAvatarSelected;
  }
  let obj = {
    style: items,
    accessibilityRole: "button",
    accessibilityLabel,
    accessibilityState: { selected },
    accessibilityHint: null,
    onPress: null,
    children: null,
  };
  items[1] = prop;
  const intl = tmp3(1114).intl;
  obj.accessibilityHint = intl.string(util.t.vw2RsD);
  obj.onPress = onSelect;
  obj = { style: tmp.defaultAvatarButton, source: { uri: source } };
  obj.children = React4(FastImageDefault, obj);
  return React4(Pressables.PressableOpacity, obj);
}
const View = fn(17).View;
const jsxProd = fn(21);
({ jsx: closure_4, jsxs: hasOwnProperty } = jsxProd);
let items = [
  defaultAvatar1Default,
  defaultAvatar2Default,
  defaultAvatar3Default,
  defaultAvatar4Default,
  defaultAvatar5Default,
  defaultAvatar6Default,
  defaultAvatar7Default,
  defaultAvatar8Default,
];
let obj = {
  avatar: defaultAvatar1Default,
  label() {
    const intl = util.intl;
    return intl.string(util.t["u/VENK"]);
  },
};
let items1 = [obj, , , , , , ,];
obj = {
  avatar: defaultAvatar2Default,
  label() {
    const intl = util.intl;
    return intl.string(util.t["pBx+d8"]);
  },
};
items1[1] = obj;
obj = {
  avatar: defaultAvatar3Default,
  label() {
    const intl = util.intl;
    return intl.string(util.t.vbERmz);
  },
};
items1[2] = obj;
items1[3] = {
  avatar: defaultAvatar4Default,
  label() {
    const intl = util.intl;
    return intl.string(util.t.Ecxz3Z);
  },
};
let obj1 = {
  avatar: defaultAvatar4Default,
  label() {
    const intl = util.intl;
    return intl.string(util.t.Ecxz3Z);
  },
};
items1[4] = {
  avatar: defaultAvatar5Default,
  label() {
    const intl = util.intl;
    return intl.string(util.t.Jb8PYM);
  },
};
const obj2 = {
  avatar: defaultAvatar5Default,
  label() {
    const intl = util.intl;
    return intl.string(util.t.Jb8PYM);
  },
};
items1[5] = {
  avatar: defaultAvatar6Default,
  label() {
    const intl = util.intl;
    return intl.string(util.t["3h0yoI"]);
  },
};
const obj3 = {
  avatar: defaultAvatar6Default,
  label() {
    const intl = util.intl;
    return intl.string(util.t["3h0yoI"]);
  },
};
items1[6] = {
  avatar: defaultAvatar7Default,
  label() {
    const intl = util.intl;
    return intl.string(util.t.frIpZ5);
  },
};
const obj4 = {
  avatar: defaultAvatar7Default,
  label() {
    const intl = util.intl;
    return intl.string(util.t.frIpZ5);
  },
};
items1[7] = {
  avatar: defaultAvatar8Default,
  label() {
    const intl = util.intl;
    return intl.string(util.t.zpfUeg);
  },
};
const createStyles = fn(4560);
const obj6 = {
  container: { display: "flex", alignItems: "center", flex: 1 },
  buttonsContainer: { display: "flex", flexDirection: "row", marginTop: 20, justifyContent: "space-between" },
  defaultAvatarButton: null,
  defaultAvatarContainer: null,
  defaultAvatarSelected: null,
};
let size = { height: 48, width: 48, borderRadius: nativeDefault.radii.xl };
obj6.defaultAvatarButton = size;
obj6.defaultAvatarContainer = {
  marginHorizontal: 8,
  width: 56,
  height: 56,
  padding: 2,
  borderWidth: 2,
  borderRadius: 28,
  borderColor: "transparent",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
};
const obj5 = {
  avatar: defaultAvatar8Default,
  label() {
    const intl = util.intl;
    return intl.string(util.t.zpfUeg);
  },
};
obj6.defaultAvatarSelected = { borderColor: nativeDefault.colors.INTERACTIVE_TEXT_ACTIVE };
let closure_7 = createStyles.createStyles(obj6);
size = fn(2);
const result = size.fileFinishedImporting("modules/avatar/native/components/PresetAvatarSelect.tsx");

export default function PresetAvatarSelect(arg0) {
  ({ onAvatarSelect: require, selectedAvatar: importDefault } = arg0);
  const tmp = closure_7();
  let obj = { style: tmp.container, accessibilityRole: "list", children: null };
  obj = { variant: "text-sm/medium", color: "text-default", children: null };
  let intl = util.intl;
  obj.children = intl.string(util.t.yP28YL);
  const items = [closure_4(Text_Text.Text, obj), ,];
  obj = { style: tmp.buttonsContainer, children: null };
  items1 = [0, 1, 2, 3];
  obj.children = items1.map((item) => {
    closure_0 = item;
    let obj = dependencyMap2[item];
    obj = {
      source: obj.avatar,
      onSelect() {
        return require(closure_0);
      },
      selected: closure_1 === item,
      accessibilityLabel: null,
    };
    const intl = util.intl;
    obj = { index: item + 1, description: obj.label() };
    obj.accessibilityLabel = intl.formatToPlainString(util.t["1K8jaQ"], obj);
    return closure_1_4(DefaultAvatarButton, obj, item);
  });
  items[1] = closure_4(View, obj);
  const obj1 = { style: tmp.buttonsContainer, children: null };
  const items2 = [4, 5, 6, 7];
  obj1.children = items2.map((item) => {
    closure_0 = item;
    let obj = dependencyMap2[item];
    obj = {
      source: obj.avatar,
      onSelect() {
        return require(closure_0);
      },
      selected: closure_1 === item,
      accessibilityLabel: null,
    };
    const intl = util.intl;
    obj = { index: item + 1, description: obj.label() };
    obj.accessibilityLabel = intl.formatToPlainString(util.t["1K8jaQ"], obj);
    return closure_1_4(DefaultAvatarButton, obj, item);
  });
  items[2] = closure_4(View, obj1);
  obj.children = items;
  return closure_5(View, obj);
}
export const DEFAULT_AVATARS = items;
export const DEFAULT_AVATARS_WITH_LABELS = items1;
