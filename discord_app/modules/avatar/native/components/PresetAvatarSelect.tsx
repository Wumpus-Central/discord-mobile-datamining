// discord_app/modules/avatar/native/components/PresetAvatarSelect.tsx
import react_native from "../../../../../_runtime/00017_react-native.js";
import react2 from "../../../../../_runtime/00576_react.js";
import nativeDefault from "../../../../../discord_common/js/packages/tokens/native.tsx";
import intl2 from "../../../../intl/index.native.tsx";
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
import react from "../../../../../_runtime/00019_react.js";
import Fragment from "../../../../../_runtime/react/00021_Fragment.js";
import createStyles_mod from "../../../../design/components/Styles/native/createStyles.tsx";
import ReactCompilerGating_mod from "../../../react_compiler/ReactCompilerGating.tsx";
import size_mod from "../../../../../_runtime/metro/00002__.js";

let onAvatarSelect;

let closure_4;
let hasOwnProperty;
let size;
function label() {
  const intl = intl2.intl;
  return intl.string(intl2.t["3h0yoI"]);
}
const label2 = function label() {
  const intl = intl2.intl;
  return intl.string(intl2.t.frIpZ5);
};
const label3 = function label() {
  const intl = intl2.intl;
  return intl.string(intl2.t.zpfUeg);
};
const View = react_native.View;
({ jsx: closure_4, jsxs: hasOwnProperty } = Fragment);
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
    const intl = intl2.intl;
    return intl.string(intl2.t["u/VENK"]);
  },
};
let items1 = [obj, , , , , , ,];
let obj2 = {
  avatar: defaultAvatar2Default,
  label() {
    const intl = intl2.intl;
    return intl.string(intl2.t["pBx+d8"]);
  },
};
items1[1] = obj2;
let obj3 = {
  avatar: defaultAvatar3Default,
  label() {
    const intl = intl2.intl;
    return intl.string(intl2.t.vbERmz);
  },
};
items1[2] = obj3;
let obj4 = {
  avatar: defaultAvatar4Default,
  label() {
    const intl = intl2.intl;
    return intl.string(intl2.t.Ecxz3Z);
  },
};
items1[3] = obj4;
let obj5 = {
  avatar: defaultAvatar5Default,
  label() {
    const intl = intl2.intl;
    return intl.string(intl2.t.Jb8PYM);
  },
};
items1[4] = obj5;
items1[5] = { avatar: defaultAvatar6Default, label };
({ avatar: defaultAvatar6Default, label });
items1[6] = { avatar: defaultAvatar7Default, label: label2 };
({ avatar: defaultAvatar7Default, label: label2 });
items1[7] = { avatar: defaultAvatar8Default, label: label3 };
({ avatar: defaultAvatar8Default, label: label3 });
let createStyles = createStyles_mod;
const obj9 = {
  container: { display: "flex", alignItems: "center", flex: 1 },
  buttonsContainer: { display: "flex", flexDirection: "row", marginTop: 20, justifyContent: "space-between" },
  defaultAvatarButton: size,
  defaultAvatarContainer: {
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
  },
  defaultAvatarSelected: { borderColor: nativeDefault.colors.INTERACTIVE_TEXT_ACTIVE },
};
size = { height: 48, width: 48, borderRadius: nativeDefault.radii.xl };
createStyles = createStyles.createStyles;
({ borderColor: nativeDefault.colors.INTERACTIVE_TEXT_ACTIVE });
let closure_7 = createStyles(obj9);
let ReactCompilerGating = ReactCompilerGating_mod;
const tmp5 = ReactCompilerGating.isReactCompilerEnabled()
  ? (onAvatarSelect) => {
      let arr;
      let first;
      let intl;
      let items2;
      const tmp = onAvatarSelect;
      let obj = onAvatarSelect(576);
      const cResult = obj.c(19);
      onAvatarSelect = onAvatarSelect.onAvatarSelect;
      const selectedAvatar = onAvatarSelect.selectedAvatar;
      const tmp4 = closure_7();
      const container = tmp4.container;
      if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
        let obj2 = { variant: "text-sm/medium", color: "text-default", children: intl.string(tmp(1126).t.yP28YL) };
        const Text = tmp(4886).Text;
        intl = tmp(1126).intl;
        const tmp7 = closure_4(Text, obj2);
        cResult[0] = tmp7;
        first = tmp7;
      } else {
        first = cResult[0];
      }
      const buttonsContainer = tmp4.buttonsContainer;
      if (cResult[1] === Symbol.for("react.memo_cache_sentinel")) {
        const items = [0, 1, 2, 3];
        cResult[1] = items;
        arr = items;
      } else {
        arr = cResult[1];
      }
      if (cResult[2] === onAvatarSelect) {
        let tmp8;
        if (cResult[3] === selectedAvatar) {
          tmp8 = cResult[4];
        }
        if (cResult[5] === tmp4.buttonsContainer) {
          let tmp10;
          let arr3;
          if (cResult[6] === tmp8) {
            tmp10 = cResult[7];
          }
          const _Symbol = Symbol;
          const buttonsContainer2 = tmp4.buttonsContainer;
          if (cResult[8] === Symbol.for("react.memo_cache_sentinel")) {
            items1 = [4, 5, 6, 7];
            cResult[8] = items1;
            arr3 = items1;
          } else {
            arr3 = cResult[8];
          }
          if (cResult[9] === onAvatarSelect) {
            let tmp14;
            if (cResult[10] === selectedAvatar) {
              tmp14 = cResult[11];
            }
            if (cResult[12] === tmp4.buttonsContainer) {
              let tmp16;
              if (cResult[13] === tmp14) {
                tmp16 = cResult[14];
              }
              if (cResult[15] === tmp4.container) {
                if (cResult[16] === tmp16) {
                  let tmp20;
                  if (cResult[17] === tmp10) {
                    tmp20 = cResult[18];
                  }
                  return tmp20;
                }
              }
              const obj3 = { style: container, accessibilityRole: "list", children: items2 };
              items2 = [first, tmp10, tmp16];
              const tmp23 = closure_5(View, obj3);
              cResult[15] = tmp4.container;
              cResult[16] = tmp16;
              cResult[17] = tmp10;
              cResult[18] = tmp23;
              tmp20 = tmp23;
            }
            const obj4 = { style: buttonsContainer2, children: tmp14 };
            const tmp19 = closure_4(View, obj4);
            cResult[12] = tmp4.buttonsContainer;
            cResult[13] = tmp14;
            cResult[14] = tmp19;
            tmp16 = tmp19;
          }
          const mapped = arr3.map((item) => {
            let formatToPlainString;
            let obj2;
            let v1K8jaQ;
            let closure_0 = item;
            const label = tmp.label;
            const obj = {
              source: items1[item].avatar,
              onSelect() {
                return onAvatarSelect(item);
              },
              selected: selectedAvatar === item,
              accessibilityLabel: formatToPlainString(v1K8jaQ, obj2),
            };
            const intl = onAvatarSelect(dependencyMap[11]).intl;
            formatToPlainString = intl.formatToPlainString;
            obj2 = { index: item + 1, description: label() };
            v1K8jaQ = onAvatarSelect(dependencyMap[11]).t["1K8jaQ"];
            return closure_1_4(closure_1_8, obj, item);
          });
          cResult[9] = onAvatarSelect;
          cResult[10] = selectedAvatar;
          cResult[11] = mapped;
          tmp14 = mapped;
        }
        const obj5 = { style: buttonsContainer, children: tmp8 };
        const tmp13 = closure_4(View, obj5);
        cResult[5] = tmp4.buttonsContainer;
        cResult[6] = tmp8;
        cResult[7] = tmp13;
        tmp10 = tmp13;
      }
      const mapped1 = arr.map((item) => {
        let formatToPlainString;
        let obj2;
        let v1K8jaQ;
        let closure_0 = item;
        const label = tmp.label;
        const obj = {
          source: items1[item].avatar,
          onSelect() {
            return onAvatarSelect(item);
          },
          selected: selectedAvatar === item,
          accessibilityLabel: formatToPlainString(v1K8jaQ, obj2),
        };
        const intl = onAvatarSelect(dependencyMap[11]).intl;
        formatToPlainString = intl.formatToPlainString;
        obj2 = { index: item + 1, description: label() };
        v1K8jaQ = onAvatarSelect(dependencyMap[11]).t["1K8jaQ"];
        return closure_1_4(closure_1_8, obj, item);
      });
      cResult[2] = onAvatarSelect;
      cResult[3] = selectedAvatar;
      cResult[4] = mapped1;
      tmp8 = mapped1;
    }
  : (arg0) => {
      let intl;
      let items;
      let items2;
      ({ onAvatarSelect: require, selectedAvatar: importDefault } = arg0);
      const tmp = closure_7();
      let obj = { style: tmp.container, accessibilityRole: "list", children: items };
      let obj2 = { variant: "text-sm/medium", color: "text-default", children: intl.string(intl2.t.yP28YL) };
      const Text = Text_Text.Text;
      intl = intl2.intl;
      items = [closure_4(Text, obj2), ,];
      const obj3 = {
        style: tmp.buttonsContainer,
        children: items1.map((item) => {
          let formatToPlainString;
          let obj2;
          let v1K8jaQ;
          require = item;
          const label = tmp.label;
          const obj = {
            source: items1[item].avatar,
            onSelect() {
              return require(item);
            },
            selected: closure_1 === item,
            accessibilityLabel: formatToPlainString(v1K8jaQ, obj2),
          };
          const intl = intl2.intl;
          formatToPlainString = intl.formatToPlainString;
          obj2 = { index: item + 1, description: label() };
          v1K8jaQ = intl2.t["1K8jaQ"];
          return closure_1_4(closure_1_8, obj, item);
        }),
      };
      items1 = [0, 1, 2, 3];
      items[1] = closure_4(View, obj3);
      const obj4 = {
        style: tmp.buttonsContainer,
        children: items2.map((item) => {
          let formatToPlainString;
          let obj2;
          let v1K8jaQ;
          require = item;
          const label = tmp.label;
          const obj = {
            source: items1[item].avatar,
            onSelect() {
              return require(item);
            },
            selected: closure_1 === item,
            accessibilityLabel: formatToPlainString(v1K8jaQ, obj2),
          };
          const intl = intl2.intl;
          formatToPlainString = intl.formatToPlainString;
          obj2 = { index: item + 1, description: label() };
          v1K8jaQ = intl2.t["1K8jaQ"];
          return closure_1_4(closure_1_8, obj, item);
        }),
      };
      items2 = [4, 5, 6, 7];
      items[2] = closure_4(View, obj4);
      return closure_5(View, obj);
    };
ReactCompilerGating = ReactCompilerGating_mod;
let closure_8 = ReactCompilerGating.isReactCompilerEnabled()
  ? (arg0) => {
      let accessibilityLabel;
      let onSelect;
      let selected;
      let source;
      const obj = react2;
      const cResult = obj.c(17);
      ({ source, onSelect, selected, accessibilityLabel } = arg0);
      const tmp4 = closure_7();
      let prop;
      if (selected) {
        prop = tmp4.defaultAvatarSelected;
      }
      if (cResult[0] === tmp4.defaultAvatarContainer) {
        let tmp6;
        let tmp7;
        let tmp9;
        let tmp11;
        if (cResult[1] === prop) {
          tmp6 = cResult[2];
        }
        if (cResult[3] !== selected) {
          const obj2 = { selected };
          cResult[3] = selected;
          cResult[4] = obj2;
          tmp7 = obj2;
        } else {
          tmp7 = cResult[4];
        }
        const _Symbol = Symbol;
        if (cResult[5] === Symbol.for("react.memo_cache_sentinel")) {
          const intl = intl2.intl;
          const stringResult = intl.string(intl2.t.vw2RsD);
          cResult[5] = stringResult;
          tmp9 = stringResult;
        } else {
          tmp9 = cResult[5];
        }
        if (cResult[6] !== source) {
          const obj3 = { uri: source };
          cResult[6] = source;
          cResult[7] = obj3;
          tmp11 = obj3;
        } else {
          tmp11 = cResult[7];
        }
        if (cResult[8] === tmp4.defaultAvatarButton) {
          let tmp12;
          if (cResult[9] === tmp11) {
            tmp12 = cResult[10];
          }
          if (cResult[11] === accessibilityLabel) {
            if (cResult[12] === onSelect) {
              if (cResult[13] === tmp6) {
                if (cResult[14] === tmp7) {
                  let tmp16;
                  if (cResult[15] === tmp12) {
                    tmp16 = cResult[16];
                  }
                  return tmp16;
                }
              }
            }
          }
          const obj4 = {
            style: tmp6,
            accessibilityRole: "button",
            accessibilityLabel,
            accessibilityState: tmp7,
            accessibilityHint: tmp9,
            onPress: onSelect,
            children: tmp12,
          };
          const tmp18 = React3(Pressables.PressableOpacity, obj4);
          cResult[11] = accessibilityLabel;
          cResult[12] = onSelect;
          cResult[13] = tmp6;
          cResult[14] = tmp7;
          cResult[15] = tmp12;
          cResult[16] = tmp18;
          tmp16 = tmp18;
        }
        const obj5 = { style: tmp4.defaultAvatarButton, source: tmp11 };
        const tmp15 = React3(FastImageDefault, obj5);
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
    }
  : (selected) => {
      let accessibilityLabel;
      let intl;
      let obj2;
      let onSelect;
      let source;
      selected = selected.selected;
      ({ source, onSelect, accessibilityLabel } = selected);
      const tmp = closure_7();
      const items = [tmp.defaultAvatarContainer];
      let prop;
      const PressableOpacity = Pressables.PressableOpacity;
      if (selected) {
        prop = tmp.defaultAvatarSelected;
      }
      items[1] = prop;
      const obj = {
        style: items,
        accessibilityRole: "button",
        accessibilityLabel,
        accessibilityState: { selected },
        accessibilityHint: intl.string(intl2.t.vw2RsD),
        onPress: onSelect,
        children: React3(FastImageDefault, obj2),
      };
      intl = intl2.intl;
      obj2 = { style: tmp.defaultAvatarButton, source: { uri: source } };
      return React3(PressableOpacity, obj);
    };
size = size_mod;
const result = size.fileFinishedImporting("modules/avatar/native/components/PresetAvatarSelect.tsx");

export default tmp5;
export const DEFAULT_AVATARS = items;
export const DEFAULT_AVATARS_WITH_LABELS = items1;
