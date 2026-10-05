// === Module 17571: PresetAvatarSelect ===

// Module 17571 (PresetAvatarSelect)
import c from "c" /* 576 */;
import nativeDefault from "native" /* 587 */;
import util from "util" /* 1126 */;
import Text_Text from "Text/Text" /* 4886 */;
import Pressables from "Pressables" /* 5909 */;
import FastImageDefault from "FastImage" /* 5974 */;
import defaultAvatar1Default from "defaultAvatar1" /* 17572 */;
import defaultAvatar2Default from "defaultAvatar2" /* 17573 */;
import defaultAvatar3Default from "defaultAvatar3" /* 17574 */;
import defaultAvatar4Default from "defaultAvatar4" /* 17575 */;
import defaultAvatar5Default from "defaultAvatar5" /* 17576 */;
import defaultAvatar6Default from "defaultAvatar6" /* 17577 */;
import defaultAvatar7Default from "defaultAvatar7" /* 17578 */;
import defaultAvatar8Default from "defaultAvatar8" /* 17579 */;
import noop from "module_19" /* 19 */;

const require = globalThis.__r;

require = fn;
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
let obj5 = {
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
const createStyles = fn(4890);
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
fn(558);
const obj11 = { borderColor: nativeDefault.colors.INTERACTIVE_TEXT_ACTIVE };
const ReactCompilerGating = fn(558);
let closure_8 = ReactCompilerGating.isReactCompilerEnabled() ? ((arg0) => {
  const cResult = c.c(17);
  ({ source, onSelect, selected, accessibilityLabel } = arg0);
  const tmp4 = closure_7();
  let prop;
  if (selected) {
    prop = tmp4.defaultAvatarSelected;
  }
  if (cResult[0] === tmp4.defaultAvatarContainer) {
    if (cResult[1] === prop) {
      let tmp6 = cResult[2];
    }
    if (cResult[3] !== selected) {
      const obj2 = { selected };
      cResult[3] = selected;
      cResult[4] = obj2;
      let tmp7 = obj2;
    } else {
      tmp7 = cResult[4];
    }
    const _Symbol = Symbol;
    if (cResult[5] === Symbol.for("react.memo_cache_sentinel")) {
      const intl = util.intl;
      const stringResult = intl.string(util.t.vw2RsD);
      cResult[5] = stringResult;
      let tmp9 = stringResult;
    } else {
      tmp9 = cResult[5];
    }
    if (cResult[6] !== source) {
      const obj3 = { uri: source };
      cResult[6] = source;
      cResult[7] = obj3;
      let tmp11 = obj3;
    } else {
      tmp11 = cResult[7];
    }
    if (cResult[8] === tmp4.defaultAvatarButton) {
      if (cResult[9] === tmp11) {
        let tmp12 = cResult[10];
      }
      if (cResult[11] === accessibilityLabel) {
        if (cResult[12] === onSelect) {
          if (cResult[13] === tmp6) {
            if (cResult[14] === tmp7) {
              if (cResult[15] === tmp12) {
                let tmp16 = cResult[16];
              }
              return tmp16;
            }
          }
        }
      }
      const obj4 = { style: tmp6, accessibilityRole: "button", accessibilityLabel, accessibilityState: tmp7, accessibilityHint: tmp9, onPress: onSelect, children: tmp12 };
      const tmp18 = React4(Pressables.PressableOpacity, obj4);
      cResult[11] = accessibilityLabel;
      cResult[12] = onSelect;
      cResult[13] = tmp6;
      cResult[14] = tmp7;
      cResult[15] = tmp12;
      cResult[16] = tmp18;
      tmp16 = tmp18;
    }
    const obj5 = { style: tmp4.defaultAvatarButton, source: tmp11 };
    const tmp15 = React4(FastImageDefault, obj5);
    cResult[8] = tmp4.defaultAvatarButton;
    cResult[9] = tmp11;
    cResult[10] = tmp15;
    tmp12 = tmp15;
  }
  const items = [tmp4.defaultAvatarContainer, prop];
  cResult[0] = tmp4.defaultAvatarContainer;
  cResult[1] = prop;
  cResult[2] = items;
  tmp6 = items;
}) : ((selected) => {
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
});
size = fn(2);
const result = size.fileFinishedImporting("modules/avatar/native/components/PresetAvatarSelect.tsx");

export default ReactCompilerGating.isReactCompilerEnabled() ? ((onAvatarSelect) => {
  const cResult = onAvatarSelect(576).c(19);
  onAvatarSelect = onAvatarSelect.onAvatarSelect;
  const selectedAvatar = onAvatarSelect.selectedAvatar;
  const tmp4 = closure_7();
  if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
    let obj2 = { variant: "text-sm/medium", color: "text-default", children: null };
    let intl = tmp(1126).intl;
    obj2.children = intl.string(tmp(1126).t.yP28YL);
    const tmp7 = closure_4(tmp(4886).Text, obj2);
    cResult[0] = tmp7;
    let first = tmp7;
  } else {
    first = cResult[0];
  }
  if (cResult[1] === Symbol.for("react.memo_cache_sentinel")) {
    const items = [0, 1, 2, 3];
    cResult[1] = items;
    let arr = items;
  } else {
    arr = cResult[1];
  }
  if (cResult[2] === onAvatarSelect) {
    if (cResult[3] === selectedAvatar) {
      let tmp8 = cResult[4];
    }
    if (cResult[5] === tmp4.buttonsContainer) {
      if (cResult[6] === tmp8) {
        let tmp10 = cResult[7];
      }
      const _Symbol = Symbol;
      if (cResult[8] === Symbol.for("react.memo_cache_sentinel")) {
        items1 = [4, 5, 6, 7];
        cResult[8] = items1;
        let arr3 = items1;
      } else {
        arr3 = cResult[8];
      }
      if (cResult[9] === onAvatarSelect) {
        if (cResult[10] === selectedAvatar) {
          let tmp14 = cResult[11];
        }
        if (cResult[12] === tmp4.buttonsContainer) {
          if (cResult[13] === tmp14) {
            let tmp16 = cResult[14];
          }
          if (cResult[15] === tmp4.container) {
            if (cResult[16] === tmp16) {
              if (cResult[17] === tmp10) {
                let tmp20 = cResult[18];
              }
              return tmp20;
            }
          }
          const obj3 = { style: tmp4.container, accessibilityRole: "list", children: null };
          const items2 = [first, tmp10, tmp16];
          obj3.children = items2;
          const tmp23 = closure_5(View, obj3);
          cResult[15] = tmp4.container;
          cResult[16] = tmp16;
          cResult[17] = tmp10;
          cResult[18] = tmp23;
          tmp20 = tmp23;
        }
        const obj4 = { style: tmp4.buttonsContainer, children: tmp14 };
        const tmp19 = closure_4(View, obj4);
        cResult[12] = tmp4.buttonsContainer;
        cResult[13] = tmp14;
        cResult[14] = tmp19;
        tmp16 = tmp19;
      }
      const mapped = arr3.map((item) => {
        closure_0 = item;
        const obj2 = {
          source: dependencyMap2[item].avatar,
          onSelect() {
            return onAvatarSelect(closure_0);
          },
          selected: selectedAvatar === item,
          accessibilityLabel: null
        };
        const intl = onAvatarSelect(1126).intl;
        obj2.accessibilityLabel = intl.formatToPlainString(onAvatarSelect(1126).t["1K8jaQ"], { index: item + 1, description: dependencyMap2[item].label() });
        return closure_1_4(closure_1_8, obj2, item);
      });
      cResult[9] = onAvatarSelect;
      cResult[10] = selectedAvatar;
      cResult[11] = mapped;
      tmp14 = mapped;
    }
    const obj5 = { style: tmp4.buttonsContainer, children: tmp8 };
    const tmp13 = closure_4(View, obj5);
    cResult[5] = tmp4.buttonsContainer;
    cResult[6] = tmp8;
    cResult[7] = tmp13;
    tmp10 = tmp13;
  }
  const mapped1 = arr.map((item) => {
    closure_0 = item;
    const obj2 = {
      source: dependencyMap2[item].avatar,
      onSelect() {
        return onAvatarSelect(closure_0);
      },
      selected: selectedAvatar === item,
      accessibilityLabel: null
    };
    const intl = onAvatarSelect(1126).intl;
    obj2.accessibilityLabel = intl.formatToPlainString(onAvatarSelect(1126).t["1K8jaQ"], { index: item + 1, description: dependencyMap2[item].label() });
    return closure_1_4(closure_1_8, obj2, item);
  });
  cResult[2] = onAvatarSelect;
  cResult[3] = selectedAvatar;
  cResult[4] = mapped1;
  tmp8 = mapped1;
  const obj = onAvatarSelect(576);
}) : ((arg0) => {
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
    return closure_1_4(closure_1_8, obj2, item);
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
    return closure_1_4(closure_1_8, obj2, item);
  });
  items[2] = closure_4(View, obj4);
  obj.children = items;
  return closure_5(View, obj);
});
export const DEFAULT_AVATARS = items;
export const DEFAULT_AVATARS_WITH_LABELS = items1;