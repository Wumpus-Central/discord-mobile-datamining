// discord_app/modules/user_settings/design_system/native/UserSettingsDesignSystemContextMenu.tsx
import _mod12 from "../../../../../_runtime/metro/00012__.js";
import react2 from "../../../../../_runtime/00576_react.js";
import nativeDefault from "../../../../../discord_common/js/packages/tokens/native.tsx";
import AssetRegistryDefault from "../../../../../_runtime/04817_AssetRegistry.js";
import AssetRegistryDefault2 from "../../../../../_runtime/04856_AssetRegistry.js";
import Text_Text from "../../../../design/components/Text/native/Text.tsx";
import components_Button_Button from "../../../../design/components/Button/native/Button.native.tsx";
import Card_Card from "../../../../design/components/Card/native/Card.native.tsx";
import AssetRegistryDefault3 from "../../../../../_runtime/06596_AssetRegistry.js";
import AssetRegistryDefault4 from "../../../../../_runtime/07636_AssetRegistry.js";
import AssetRegistryDefault5 from "../../../../../_runtime/11194_AssetRegistry.js";
import AssetRegistryDefault6 from "../../../../../_runtime/12457_AssetRegistry.js";
import AssetRegistryDefault7 from "../../../../../_runtime/15676_AssetRegistry.js";
import AssetRegistryDefault8 from "../../../../../_runtime/15677_AssetRegistry.js";
import _objectWithoutProperties from "../../../../../_runtime/metro/00109__objectWithoutProperties.js";
import react from "../../../../../_runtime/00019_react.js";
import react_native from "../../../../../_runtime/00017_react-native.js";
import Fragment from "../../../../../_runtime/react/00021_Fragment.js";
import createStyles from "../../../../design/components/Styles/native/createStyles.tsx";
import ReactCompilerGating_mod from "../../../react_compiler/ReactCompilerGating.tsx";
import size from "../../../../../_runtime/metro/00002__.js";

const require = globalThis.__r;
let dependencyMap, label;

let hasOwnProperty;
let metroImportAll;
let metroImportDefault;
let metroRequire;
let obj2;
let closure_2 = ["ref"];
({ View: hasOwnProperty, ScrollView: metroRequire } = react_native);
({ jsx: metroImportDefault, jsxs: metroImportAll } = Fragment);
let items = [
  AssetRegistryDefault6,
  AssetRegistryDefault3,
  AssetRegistryDefault4,
  AssetRegistryDefault,
  AssetRegistryDefault2,
  AssetRegistryDefault7,
  AssetRegistryDefault8,
  AssetRegistryDefault5,
];
let closure_10 = [
  "Launch Probe!",
  "Activate Laser",
  "Teleport Widget",
  "Engage Hyperdrive",
  "Deploy Robots",
  "Initiate Time Warp",
  "Beam Up Snacks",
  "Hack Database",
  "Trigger Cosmic Boom",
  "Unleash Space Vortex",
  "Activate Cloaking Device",
];
let obj = { container: { flexDirection: "column", gap: 12, padding: 16 }, card: { gap: 12 }, divider: obj2 };
obj2 = { height: 1, backgroundColor: nativeDefault.colors.BORDER_SUBTLE, marginVertical: 12 };
let closure_11 = createStyles.createStyles(obj);
let ReactCompilerGating = ReactCompilerGating_mod;
let closure_12 = ReactCompilerGating.isReactCompilerEnabled()
  ? (label) => {
      let align;
      let alignButton;
      let count;
      let num;
      let sections;
      let tmp5;
      let triggerOnLongPress;
      let tmp = label;
      let obj = label(num[16]);
      const cResult = obj.c(19);
      label = label.label;
      ({ align, triggerOnLongPress, count, sections, alignButton } = label);
      num = 3;
      if (undefined !== count) {
        num = count;
      }
      let num2 = 1;
      if (undefined !== sections) {
        num2 = sections;
      }
      let str = "flex-start";
      if (undefined !== alignButton) {
        str = alignButton;
      }
      if (num2 > 1) {
        let arr2;
        if (cResult[0] !== num2) {
          const _Array2 = Array;
          let obj2 = { length: num2 };
          const arr3 = Array.from(obj2);
          cResult[0] = num2;
          cResult[1] = arr3;
          arr2 = arr3;
        } else {
          arr2 = cResult[1];
        }
        if (cResult[2] === num) {
          let tmp12;
          if (cResult[3] === arr2) {
            tmp12 = cResult[4];
          }
          tmp5 = tmp12;
        }
        const mapped = arr2.map(() => {
          let closure_0 = num;
          const obj = _mod12;
          let closure_1 = obj.shuffle(closure_10);
          const obj2 = _mod12;
          closure_2 = obj2.shuffle(items);
          const obj3 = { length: num };
          const arr = Array.from(obj3);
          return arr.map((item, index) => {
            let str;
            const obj = {
              label: length[index % length.length],
              IconComponent: "a",
              iconSource: length2[index % length2.length],
              variant: str,
              action() {},
            };
            str = "default";
            if (index === closure_0 - 1) {
              str = "destructive";
            }
            return obj;
          });
        });
        cResult[2] = num;
        cResult[3] = arr2;
        cResult[4] = mapped;
        tmp12 = mapped;
      } else if (cResult[5] !== num) {
        const tmpResult = tmp(num[14]);
        dependencyMap = tmpResult.shuffle(closure_10);
        const tmpResult2 = tmp(num[14]);
        closure_2 = tmpResult2.shuffle(items);
        const _Array = Array;
        let obj3 = { length: num };
        let arr = Array.from(obj3);
        const mapped1 = arr.map((item, index) => {
          let str;
          const obj = {
            label: length[index % length.length],
            IconComponent: "a",
            iconSource: length2[index % length2.length],
            variant: str,
            action() {},
          };
          str = "default";
          if (index === closure_0 - 1) {
            str = "destructive";
          }
          return obj;
        });
        cResult[5] = num;
        cResult[6] = mapped1;
        tmp5 = mapped1;
      } else {
        tmp5 = cResult[6];
      }
      if (cResult[7] !== str) {
        const obj4 = { alignSelf: str };
        cResult[7] = str;
        cResult[8] = obj4;
      }
      if (cResult[9] !== label) {
        class C {
          constructor(ref) {
            const obj = { ref: ref.ref, text: label, variant: "primary" };
            const tmp = _objectWithoutProperties(ref.ref, closure_2);
            const Button = components_Button_Button.Button;
            const merged = Object.assign(tmp);
            return metroImportDefault(Button, obj);
          }
        }
        cResult[9] = label;
        cResult[10] = C;
      } else {
        class C {
          constructor(ref) {
            const obj = { ref: ref.ref, text: label, variant: "primary" };
            const tmp = _objectWithoutProperties(ref.ref, closure_2);
            const Button = components_Button_Button.Button;
            const merged = Object.assign(tmp);
            return metroImportDefault(Button, obj);
          }
        }
      }
      if (cResult[11] === align) {
        class C {
          constructor(ref) {
            const obj = { ref: ref.ref, text: label, variant: "primary" };
            const tmp = _objectWithoutProperties(ref.ref, closure_2);
            const Button = components_Button_Button.Button;
            const merged = Object.assign(tmp);
            return metroImportDefault(Button, obj);
          }
        }
      }
      cResult[11] = align;
      cResult[12] = tmp5;
      cResult[13] = C;
      cResult[14] = undefined !== triggerOnLongPress && triggerOnLongPress;
      cResult[15] = closure_7(tmp(num[18]).ContextMenu, {
        triggerOnLongPress: undefined !== triggerOnLongPress && triggerOnLongPress,
        items: tmp5,
        align,
        title: "Sample title",
        children: C,
      });
      closure_7(tmp(num[18]).ContextMenu, {
        triggerOnLongPress: undefined !== triggerOnLongPress && triggerOnLongPress,
        items: tmp5,
        align,
        title: "Sample title",
        children: C,
      });
    }
  : (align) => {
      let obj2;
      let require;
      let text;
      let triggerOnLongPress;
      ({ label: require, triggerOnLongPress } = align);
      align = align.align;
      if (triggerOnLongPress === undefined) {
        triggerOnLongPress = false;
      }
      let num = align.count;
      if (num === undefined) {
        num = 3;
      }
      let num2 = align.sections;
      if (num2 === undefined) {
        num2 = 1;
      }
      let str = align.alignButton;
      if (str === undefined) {
        str = "flex-start";
      }
      items = [num, num2];
      let obj = { style: { alignSelf: str }, children: closure_7(require("ContextMenu").ContextMenu, obj2) };
      const memo = react.useMemo(() => {
        let mapped;
        if (num2 > 1) {
          const _Array = Array;
          let obj = { length: tmp };
          let arr = Array.from(obj);
          mapped = arr.map(() => {
            let closure_0 = closure_1_1;
            let obj = require("../../../../../_runtime/metro/00012__.js");
            let closure_1 = obj.shuffle(closure_2_10);
            const obj2 = require("../../../../../_runtime/metro/00012__.js");
            closure_2 = obj2.shuffle(items);
            const obj3 = { length: closure_1_1 };
            const arr = Array.from(obj3);
            return arr.map((item, index) => {
              let str;
              const obj = {
                label: length[index % length.length],
                IconComponent: "a",
                iconSource: length2[index % length2.length],
                variant: str,
                action() {},
              };
              str = "default";
              if (index === closure_0 - 1) {
                str = "destructive";
              }
              return obj;
            });
          });
        } else {
          let closure_0 = num;
          let obj2 = _mod12;
          let closure_1 = obj2.shuffle(closure_10);
          let obj3 = _mod12;
          closure_2 = obj3.shuffle(items);
          const _Array2 = Array;
          const obj4 = { length: num };
          const arr2 = Array.from(obj4);
          mapped = arr2.map((item, index) => {
            let str;
            const obj = {
              label: length[index % length.length],
              IconComponent: "a",
              iconSource: length2[index % length2.length],
              variant: str,
              action() {},
            };
            str = "default";
            if (index === closure_0 - 1) {
              str = "destructive";
            }
            return obj;
          });
        }
        return mapped;
      }, items);
      obj2 = {
        triggerOnLongPress,
        items: memo,
        align,
        title: "Sample title",
        children(ref) {
          const merged = Object.assign(ref, Object.assign({ ref: 0 }));
          const obj = { ref: ref.ref, text: require, variant: "primary" };
          const Button = components_Button_Button.Button;
          const merged1 = Object.assign(merged);
          return metroImportDefault(Button, obj);
        },
      };
      return closure_7(closure_5, obj);
    };
ReactCompilerGating = ReactCompilerGating_mod;
let tmp4 = ReactCompilerGating.isReactCompilerEnabled()
  ? () => {
      let items1;
      let items2;
      let items3;
      let items4;
      let items5;
      let items6;
      let obj12;
      let tmp13;
      let tmp16;
      let tmp17;
      let tmp18;
      let tmp24;
      let tmp27;
      let tmp28;
      let tmp29;
      let tmp35;
      let tmp38;
      let tmp39;
      let tmp40;
      let tmp46;
      let tmp5;
      let tmp50;
      let tmp51;
      let tmp6;
      let tmp7;
      const obj = react2;
      const cResult = obj.c(59);
      const tmp4 = closure_11();
      if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
        const tmp9 = metroImportDefault(Text_Text.Text, { variant: "text-lg/bold", children: "Basic Example" });
        const tmp10 = metroImportDefault(Text_Text.Text, {
          variant: "text-md/medium",
          color: "text-subtle",
          children:
            "You press the button to open the menu and then select an action, or tap and pan down in a single gesture.",
        });
        const tmp12 = metroImportDefault(closure_12, { label: "Open Menu" });
        cResult[0] = tmp9;
        cResult[1] = tmp10;
        cResult[2] = tmp12;
        tmp5 = tmp9;
        tmp6 = tmp10;
        tmp7 = tmp12;
      } else {
        [tmp5, tmp6, tmp7] = cResult;
      }
      if (cResult[3] !== tmp4.card) {
        const obj2 = { style: tmp4.card, children: items };
        items = [tmp5, tmp6, tmp7];
        const tmp15 = metroImportAll(Card_Card.Card, obj2);
        cResult[3] = tmp4.card;
        cResult[4] = tmp15;
        tmp13 = tmp15;
      } else {
        tmp13 = cResult[4];
      }
      if (cResult[5] === Symbol.for("react.memo_cache_sentinel")) {
        const tmp20 = metroImportDefault(Text_Text.Text, { variant: "text-lg/bold", children: "Long Press" });
        const tmp21 = metroImportDefault(Text_Text.Text, {
          variant: "text-md/medium",
          color: "text-subtle",
          children: "You can also have the menu open on long press instead.",
        });
        const tmp23 = metroImportDefault(closure_12, { triggerOnLongPress: true, label: "Long Press to Open" });
        cResult[5] = tmp20;
        cResult[6] = tmp21;
        cResult[7] = tmp23;
        tmp18 = tmp23;
        tmp17 = tmp21;
        tmp16 = tmp20;
      } else {
        tmp16 = cResult[5];
        tmp17 = cResult[6];
        tmp18 = cResult[7];
      }
      if (cResult[8] !== tmp4.card) {
        const obj3 = { style: tmp4.card, children: items1 };
        items1 = [tmp16, tmp17, tmp18];
        const tmp26 = metroImportAll(Card_Card.Card, obj3);
        cResult[8] = tmp4.card;
        cResult[9] = tmp26;
        tmp24 = tmp26;
      } else {
        tmp24 = cResult[9];
      }
      if (cResult[10] === Symbol.for("react.memo_cache_sentinel")) {
        const tmp31 = metroImportDefault(Text_Text.Text, { variant: "text-lg/bold", children: "Sections" });
        const tmp32 = metroImportDefault(Text_Text.Text, {
          variant: "text-md/medium",
          color: "text-subtle",
          children: "You can pass an array of arrays of items to create sections in the menu.",
        });
        const tmp34 = metroImportDefault(closure_12, { label: "Open Sectioned Menu", sections: 3, count: 2 });
        cResult[10] = tmp34;
        cResult[11] = tmp31;
        cResult[12] = tmp32;
        tmp29 = tmp32;
        tmp28 = tmp31;
        tmp27 = tmp34;
      } else {
        tmp27 = cResult[10];
        tmp28 = cResult[11];
        tmp29 = cResult[12];
      }
      if (cResult[13] !== tmp4.card) {
        const obj4 = { style: tmp4.card, children: items2 };
        items2 = [tmp28, tmp29, tmp27];
        const tmp37 = metroImportAll(Card_Card.Card, obj4);
        cResult[13] = tmp4.card;
        cResult[14] = tmp37;
        tmp35 = tmp37;
      } else {
        tmp35 = cResult[14];
      }
      if (cResult[15] === Symbol.for("react.memo_cache_sentinel")) {
        const tmp42 = metroImportDefault(Text_Text.Text, { variant: "text-lg/bold", children: "Automatic Alignment" });
        const tmp43 = metroImportDefault(Text_Text.Text, {
          variant: "text-md/medium",
          color: "text-subtle",
          children: "The menu will automatically align itself so that it doesn't overflow offscreen horizontally.",
        });
        const tmp45 = metroImportDefault(closure_12, { alignButton: "flex-end", label: "Open Right-Aligned Menu" });
        cResult[15] = tmp42;
        cResult[16] = tmp43;
        cResult[17] = tmp45;
        tmp40 = tmp45;
        tmp39 = tmp43;
        tmp38 = tmp42;
      } else {
        tmp38 = cResult[15];
        tmp39 = cResult[16];
        tmp40 = cResult[17];
      }
      if (cResult[18] !== tmp4.divider) {
        const obj5 = { style: tmp4.divider };
        const tmp49 = metroImportDefault(hasOwnProperty, obj5);
        cResult[18] = tmp4.divider;
        cResult[19] = tmp49;
        tmp46 = tmp49;
      } else {
        tmp46 = cResult[19];
      }
      if (cResult[20] === Symbol.for("react.memo_cache_sentinel")) {
        const tmp53 = metroImportDefault(Text_Text.Text, {
          variant: "text-md/medium",
          color: "text-subtle",
          children: "It will also position itself vertically, so that it doesn't overflow offscreen vertically.",
        });
        const tmp55 = metroImportDefault(closure_12, { count: 8, label: "Open Tall Menu" });
        cResult[20] = tmp53;
        cResult[21] = tmp55;
        tmp51 = tmp55;
        tmp50 = tmp53;
      } else {
        tmp50 = cResult[20];
        tmp51 = cResult[21];
      }
      if (cResult[22] === tmp4.card) {
        let tmp56;
        let tmp60;
        let tmp59;
        let tmp58;
        let tmp65;
        let tmp69;
        let tmp73;
        let tmp77;
        let tmp81;
        let tmp85;
        let tmp89;
        let tmp93;
        if (cResult[23] === tmp46) {
          tmp56 = cResult[24];
        }
        const _Symbol = Symbol;
        if (cResult[25] === Symbol.for("react.memo_cache_sentinel")) {
          const tmp62 = metroImportDefault(Text_Text.Text, {
            variant: "text-lg/bold",
            children: "Intentional Alignment",
          });
          const tmp63 = metroImportDefault(Text_Text.Text, {
            variant: "text-md/medium",
            color: "text-subtle",
            children:
              "Menus can take an align prop to intentionally align the menu, instead of using the automatic menu positioning.",
          });
          const tmp64 = metroImportDefault(Text_Text.Text, {
            variant: "text-md/medium",
            color: "text-subtle",
            children:
              "The align prop can be set to above, below, left, or right of the menu trigger. How the menu positions relative to the start or end of the trigger is then automatically determined based on the available space.",
          });
          cResult[25] = tmp62;
          cResult[26] = tmp63;
          cResult[27] = tmp64;
          tmp60 = tmp64;
          tmp59 = tmp63;
          tmp58 = tmp62;
        } else {
          tmp58 = cResult[25];
          tmp59 = cResult[26];
          tmp60 = cResult[27];
        }
        if (cResult[28] !== tmp4.divider) {
          const obj6 = { style: tmp4.divider };
          const tmp68 = metroImportDefault(hasOwnProperty, obj6);
          cResult[28] = tmp4.divider;
          cResult[29] = tmp68;
          tmp65 = tmp68;
        } else {
          tmp65 = cResult[29];
        }
        const _Symbol2 = Symbol;
        if (cResult[30] === Symbol.for("react.memo_cache_sentinel")) {
          const tmp72 = metroImportDefault(closure_12, { count: 3, align: "right", label: "Open Right" });
          cResult[30] = tmp72;
          tmp69 = tmp72;
        } else {
          tmp69 = cResult[30];
        }
        if (cResult[31] !== tmp4.divider) {
          const obj7 = { style: tmp4.divider };
          const tmp76 = metroImportDefault(hasOwnProperty, obj7);
          cResult[31] = tmp4.divider;
          cResult[32] = tmp76;
          tmp73 = tmp76;
        } else {
          tmp73 = cResult[32];
        }
        const _Symbol3 = Symbol;
        if (cResult[33] === Symbol.for("react.memo_cache_sentinel")) {
          const tmp80 = metroImportDefault(closure_12, {
            count: 3,
            alignButton: "flex-end",
            align: "left",
            label: "Open Left",
          });
          cResult[33] = tmp80;
          tmp77 = tmp80;
        } else {
          tmp77 = cResult[33];
        }
        if (cResult[34] !== tmp4.divider) {
          const obj8 = { style: tmp4.divider };
          const tmp84 = metroImportDefault(hasOwnProperty, obj8);
          cResult[34] = tmp4.divider;
          cResult[35] = tmp84;
          tmp81 = tmp84;
        } else {
          tmp81 = cResult[35];
        }
        const _Symbol4 = Symbol;
        if (cResult[36] === Symbol.for("react.memo_cache_sentinel")) {
          const tmp88 = metroImportDefault(closure_12, { count: 3, align: "below", label: "Always Open Below" });
          cResult[36] = tmp88;
          tmp85 = tmp88;
        } else {
          tmp85 = cResult[36];
        }
        if (cResult[37] !== tmp4.divider) {
          const obj9 = { style: tmp4.divider };
          const tmp92 = metroImportDefault(hasOwnProperty, obj9);
          cResult[37] = tmp4.divider;
          cResult[38] = tmp92;
          tmp89 = tmp92;
        } else {
          tmp89 = cResult[38];
        }
        const _Symbol5 = Symbol;
        if (cResult[39] === Symbol.for("react.memo_cache_sentinel")) {
          const tmp96 = metroImportDefault(closure_12, {
            count: 3,
            alignButton: "flex-end",
            align: "above",
            label: "Always Open Above",
          });
          cResult[39] = tmp96;
          tmp93 = tmp96;
        } else {
          tmp93 = cResult[39];
        }
        if (cResult[40] === tmp4.card) {
          if (cResult[41] === tmp65) {
            if (cResult[42] === tmp73) {
              if (cResult[43] === tmp81) {
                let tmp97;
                let tmp102;
                let tmp101;
                let tmp100;
                let tmp108;
                if (cResult[44] === tmp89) {
                  tmp97 = cResult[45];
                }
                const _Symbol6 = Symbol;
                if (cResult[46] === Symbol.for("react.memo_cache_sentinel")) {
                  const tmp104 = metroImportDefault(Text_Text.Text, {
                    variant: "text-lg/bold",
                    children: "Overflow Scrolling",
                  });
                  const tmp105 = metroImportDefault(Text_Text.Text, {
                    variant: "text-md/medium",
                    color: "text-subtle",
                    children:
                      "Menus should not typically have enough items to require scrolling, but with font scaling and smaller devices its possible. In this case, the menu will allow the user to scroll.",
                  });
                  const tmp107 = metroImportDefault(closure_12, { count: 30, label: "Open Really Tall Menu" });
                  cResult[46] = tmp104;
                  cResult[47] = tmp105;
                  cResult[48] = tmp107;
                  tmp102 = tmp107;
                  tmp101 = tmp105;
                  tmp100 = tmp104;
                } else {
                  tmp100 = cResult[46];
                  tmp101 = cResult[47];
                  tmp102 = cResult[48];
                }
                if (cResult[49] !== tmp4.card) {
                  const obj10 = { style: tmp4.card, children: items3 };
                  items3 = [tmp100, tmp101, tmp102];
                  const tmp110 = metroImportAll(Card_Card.Card, obj10);
                  cResult[49] = tmp4.card;
                  cResult[50] = tmp110;
                  tmp108 = tmp110;
                } else {
                  tmp108 = cResult[50];
                }
                if (cResult[51] === tmp4.container) {
                  if (cResult[52] === tmp35) {
                    if (cResult[53] === tmp56) {
                      if (cResult[54] === tmp13) {
                        if (cResult[55] === tmp97) {
                          if (cResult[56] === tmp108) {
                            let tmp111;
                            if (cResult[57] === tmp24) {
                              tmp111 = cResult[58];
                            }
                            return tmp111;
                          }
                        }
                      }
                    }
                  }
                }
                const obj11 = { children: metroImportAll(hasOwnProperty, obj12) };
                obj12 = { style: tmp4.container, children: items4 };
                items4 = [tmp13, tmp24, tmp35, tmp56, tmp97, tmp108];
                const tmp116 = metroImportDefault(metroRequire, obj11);
                cResult[51] = tmp4.container;
                cResult[52] = tmp35;
                cResult[53] = tmp56;
                cResult[54] = tmp13;
                cResult[55] = tmp97;
                cResult[56] = tmp108;
                cResult[57] = tmp24;
                cResult[58] = tmp116;
                tmp111 = tmp116;
              }
            }
          }
        }
        const obj13 = { style: tmp4.card, children: items5 };
        items5 = [tmp58, tmp59, tmp60, tmp65, tmp69, tmp73, tmp77, tmp81, tmp85, tmp89, tmp93];
        const tmp99 = metroImportAll(Card_Card.Card, obj13);
        cResult[40] = tmp4.card;
        cResult[41] = tmp65;
        cResult[42] = tmp73;
        cResult[43] = tmp81;
        cResult[44] = tmp89;
        cResult[45] = tmp99;
        tmp97 = tmp99;
      }
      const obj14 = { style: tmp4.card, children: items6 };
      items6 = [tmp38, tmp39, tmp40, tmp46, tmp50, tmp51];
      const tmp57 = metroImportAll(Card_Card.Card, obj14);
      cResult[22] = tmp4.card;
      cResult[23] = tmp46;
      cResult[24] = tmp57;
      tmp56 = tmp57;
    }
  : () => {
      let items1;
      let items2;
      let items3;
      let items4;
      let items5;
      let items6;
      let obj2;
      const tmp = closure_11();
      const obj = { children: metroImportAll(hasOwnProperty, obj2) };
      obj2 = { style: tmp.container, children: items1 };
      const obj3 = { style: tmp.card, children: items };
      const Card = Card_Card.Card;
      items = [
        metroImportDefault(Text_Text.Text, { variant: "text-lg/bold", children: "Basic Example" }),
        metroImportDefault(Text_Text.Text, {
          variant: "text-md/medium",
          color: "text-subtle",
          children:
            "You press the button to open the menu and then select an action, or tap and pan down in a single gesture.",
        }),
        metroImportDefault(closure_12, { label: "Open Menu" }),
      ];
      items1 = [metroImportAll(Card, obj3), , , , ,];
      const obj4 = { style: tmp.card, children: items2 };
      const Card2 = Card_Card.Card;
      items2 = [
        metroImportDefault(Text_Text.Text, { variant: "text-lg/bold", children: "Long Press" }),
        metroImportDefault(Text_Text.Text, {
          variant: "text-md/medium",
          color: "text-subtle",
          children: "You can also have the menu open on long press instead.",
        }),
        metroImportDefault(closure_12, { triggerOnLongPress: true, label: "Long Press to Open" }),
      ];
      items1[1] = metroImportAll(Card2, obj4);
      const obj5 = { style: tmp.card, children: items3 };
      const Card3 = Card_Card.Card;
      items3 = [
        metroImportDefault(Text_Text.Text, { variant: "text-lg/bold", children: "Sections" }),
        metroImportDefault(Text_Text.Text, {
          variant: "text-md/medium",
          color: "text-subtle",
          children: "You can pass an array of arrays of items to create sections in the menu.",
        }),
        metroImportDefault(closure_12, { label: "Open Sectioned Menu", sections: 3, count: 2 }),
      ];
      items1[2] = metroImportAll(Card3, obj5);
      const obj6 = { style: tmp.card, children: items4 };
      const Card4 = Card_Card.Card;
      items4 = [
        metroImportDefault(Text_Text.Text, { variant: "text-lg/bold", children: "Automatic Alignment" }),
        metroImportDefault(Text_Text.Text, {
          variant: "text-md/medium",
          color: "text-subtle",
          children: "The menu will automatically align itself so that it doesn't overflow offscreen horizontally.",
        }),
        metroImportDefault(closure_12, { alignButton: "flex-end", label: "Open Right-Aligned Menu" }),
        ,
        ,
      ];
      const obj7 = { style: tmp.divider };
      items4[3] = metroImportDefault(hasOwnProperty, obj7);
      items4[4] = metroImportDefault(Text_Text.Text, {
        variant: "text-md/medium",
        color: "text-subtle",
        children: "It will also position itself vertically, so that it doesn't overflow offscreen vertically.",
      });
      items4[5] = metroImportDefault(closure_12, { count: 8, label: "Open Tall Menu" });
      items1[3] = metroImportAll(Card4, obj6);
      const obj8 = { style: tmp.card, children: items5 };
      const Card5 = Card_Card.Card;
      items5 = [
        metroImportDefault(Text_Text.Text, { variant: "text-lg/bold", children: "Intentional Alignment" }),
        metroImportDefault(Text_Text.Text, {
          variant: "text-md/medium",
          color: "text-subtle",
          children:
            "Menus can take an align prop to intentionally align the menu, instead of using the automatic menu positioning.",
        }),
        metroImportDefault(Text_Text.Text, {
          variant: "text-md/medium",
          color: "text-subtle",
          children:
            "The align prop can be set to above, below, left, or right of the menu trigger. How the menu positions relative to the start or end of the trigger is then automatically determined based on the available space.",
        }),
        ,
        ,
        ,
        ,
        ,
        ,
        ,
      ];
      const obj9 = { style: tmp.divider };
      items5[3] = metroImportDefault(hasOwnProperty, obj9);
      items5[4] = metroImportDefault(closure_12, { count: 3, align: "right", label: "Open Right" });
      const obj10 = { style: tmp.divider };
      items5[5] = metroImportDefault(hasOwnProperty, obj10);
      items5[6] = metroImportDefault(closure_12, {
        count: 3,
        alignButton: "flex-end",
        align: "left",
        label: "Open Left",
      });
      const obj11 = { style: tmp.divider };
      items5[7] = metroImportDefault(hasOwnProperty, obj11);
      items5[8] = metroImportDefault(closure_12, { count: 3, align: "below", label: "Always Open Below" });
      const obj12 = { style: tmp.divider };
      items5[9] = metroImportDefault(hasOwnProperty, obj12);
      items5[10] = metroImportDefault(closure_12, {
        count: 3,
        alignButton: "flex-end",
        align: "above",
        label: "Always Open Above",
      });
      items1[4] = metroImportAll(Card5, obj8);
      const obj13 = { style: tmp.card, children: items6 };
      const Card6 = Card_Card.Card;
      items6 = [
        metroImportDefault(Text_Text.Text, { variant: "text-lg/bold", children: "Overflow Scrolling" }),
        metroImportDefault(Text_Text.Text, {
          variant: "text-md/medium",
          color: "text-subtle",
          children:
            "Menus should not typically have enough items to require scrolling, but with font scaling and smaller devices its possible. In this case, the menu will allow the user to scroll.",
        }),
        metroImportDefault(closure_12, { count: 30, label: "Open Really Tall Menu" }),
      ];
      items1[5] = metroImportAll(Card6, obj13);
      return metroImportDefault(metroRequire, obj);
    };
const result = size.fileFinishedImporting(
  "modules/user_settings/design_system/native/UserSettingsDesignSystemContextMenu.tsx",
);

export default tmp4;
