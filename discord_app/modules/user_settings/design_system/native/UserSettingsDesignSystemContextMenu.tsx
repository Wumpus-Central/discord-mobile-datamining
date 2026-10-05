// === Module 15661: UserSettingsDesignSystemContextMenu ===

// Module 15661 (UserSettingsDesignSystemContextMenu)
import _mod12 from "module_12" /* 12 */;
import c from "c" /* 576 */;
import nativeDefault from "native" /* 587 */;
import _modDef4811 from "module_4811" /* 4811 */;
import _modDef4850 from "module_4850" /* 4850 */;
import Text_Text from "Text/Text" /* 4886 */;
import components_Button_Button from "components/Button/Button" /* 5594 */;
import Card from "Card" /* 5995 */;
import _modDef6589 from "module_6589" /* 6589 */;
import _modDef7625 from "module_7625" /* 7625 */;
import _modDef11181 from "module_11181" /* 11181 */;
import _modDef12442 from "module_12442" /* 12442 */;
import _modDef15662 from "module_15662" /* 15662 */;
import _modDef15663 from "module_15663" /* 15663 */;
import _objectWithoutProperties from "_objectWithoutProperties" /* 109 */;
import noop from "module_19" /* 19 */;

require = fn;
let closure_2 = ["ref"];
get_ActivityIndicator = fn(17);
({ View: hasOwnProperty, ScrollView: metroRequire } = get_ActivityIndicator);
const jsxProd = fn(21);
({ jsx: closure_7, jsxs: closure_8 } = jsxProd);
let items = [_modDef12442, _modDef6589, _modDef7625, _modDef4811, _modDef4850, _modDef15662, _modDef15663, _modDef11181];
let closure_10 = ["Launch Probe!", "Activate Laser", "Teleport Widget", "Engage Hyperdrive", "Deploy Robots", "Initiate Time Warp", "Beam Up Snacks", "Hack Database", "Trigger Cosmic Boom", "Unleash Space Vortex", "Activate Cloaking Device"];
const createStyles = fn(4890);
let obj2 = { container: { flexDirection: "column", gap: 12, padding: 16 }, card: { gap: 12 }, divider: { height: 1, backgroundColor: nativeDefault.colors.BORDER_SUBTLE, marginVertical: 12 } };
let closure_11 = createStyles.createStyles(obj2);
let ReactCompilerGating = fn(558);
let closure_12 = ReactCompilerGating.isReactCompilerEnabled() ? ((label) => {
  const cResult = num2(576).c(19);
  label = label.label;
  ({ align, triggerOnLongPress, count, sections, alignButton } = label);
  let num = 3;
  num2 = 3;
  if (undefined !== count) {
    num2 = count;
  }
  dependencyMap = num2;
  let num3 = 1;
  if (undefined !== sections) {
    num3 = sections;
  }
  let str = "flex-start";
  if (undefined !== alignButton) {
    str = alignButton;
  }
  if (num3 > 1) {
    if (cResult[0] !== num3) {
      const _Array2 = Array;
      let obj2 = { length: num3 };
      const arr3 = Array.from(obj2);
      cResult[0] = num3;
      cResult[1] = arr3;
      let arr2 = arr3;
    } else {
      arr2 = cResult[1];
    }
    if (cResult[2] === num2) {
    }
    const mapped = arr2.map(() => {
      closure_0 = closure_1;
      closure_1 = _mod12.shuffle(closure_10);
      closure_2 = _mod12.shuffle(items);
      const obj3 = { length: closure_1 };
      return Array.from({ length: closure_1 }).map((item, index) => {
        const obj = { label: length[index % length.length], IconComponent: "a", iconSource: length2[index % length2.length], variant: "r", action: "toCharArray$esjava$1" };
        let str = "default";
        if (index === closure_0 - 1) {
          str = "destructive";
        }
        obj.variant = str;
        obj.action = function action() {

        };
        return obj;
      });
    });
    cResult[2] = num2;
    cResult[num] = arr2;
    num = 4;
    cResult[4] = mapped;
  } else {
    if (cResult[5] !== num2) {
      dependencyMap = tmp(12).shuffle(closure_10);
      const tmpResult = tmp(12);
      closure_2 = tmp(12).shuffle(items);
      const _Array = Array;
      let obj3 = { length: num2 };
      const tmpResult2 = tmp(12);
      const mapped1 = Array.from(obj3).map((item, index) => {
        const obj = { label: length[index % length.length], IconComponent: "a", iconSource: length2[index % length2.length], variant: "r", action: "toCharArray$esjava$1" };
        let str = "default";
        if (index === closure_0 - 1) {
          str = "destructive";
        }
        obj.variant = str;
        obj.action = function action() {

        };
        return obj;
      });
      cResult[5] = num2;
      cResult[6] = mapped1;
      let tmp5 = mapped1;
      const arr = Array.from(obj3);
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
        constructor(arg0) {
          tmp = closure_3(label, closure_2);
          obj = { ref: label.ref };
          merged = Object.assign(tmp);
          obj.text = count;
          obj.variant = "primary";
          return jsx(closure_0(closure_1[17]).Button, obj);
        }
      }
      cResult[9] = label;
      cResult[10] = C;
    } else {
      class C {
        constructor(arg0) {
          tmp = closure_3(label, closure_2);
          obj = { ref: label.ref };
          merged = Object.assign(tmp);
          obj.text = count;
          obj.variant = "primary";
          return jsx(closure_0(closure_1[17]).Button, obj);
        }
      }
    }
    if (cResult[11] === align) {
      class C {
        constructor(arg0) {
          tmp = closure_3(label, closure_2);
          obj = { ref: label.ref };
          merged = Object.assign(tmp);
          obj.text = count;
          obj.variant = "primary";
          return jsx(closure_0(closure_1[17]).Button, obj);
        }
      }
    }
    const obj5 = { triggerOnLongPress: tmp4, items: tmp5, align, title: "Sample title", children: C };
    const tmp19 = closure_7(tmp(7579).ContextMenu, obj5);
    cResult[11] = align;
    cResult[12] = tmp5;
    cResult[13] = C;
    cResult[14] = tmp4;
    cResult[15] = tmp19;
  }
  let obj = num2(576);
}) : ((align) => {
  ({ label: require, triggerOnLongPress } = align);
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
  let obj = { style: { alignSelf: str }, children: null };
  const memo = noop.useMemo(() => {
    if (num2 > 1) {
      const _Array = Array;
      let obj = { length: tmp };
      let mapped = Array.from(obj).map(() => {
        closure_0 = length;
        length = text(num[14]).shuffle(closure_2_10);
        let obj = text(num[14]);
        text(num[14]).shuffle(items);
        const obj2 = text(num[14]);
        const obj3 = { length };
        return Array.from({ length }).map((item, index) => {
          const obj = { label: length[index % length.length], IconComponent: "a", iconSource: length2[index % length2.length], variant: "r", action: "toCharArray$esjava$1" };
          let str = "default";
          if (index === closure_0 - 1) {
            str = "destructive";
          }
          obj.variant = str;
          obj.action = function action() {

          };
          return obj;
        });
      });
      const arr = Array.from(obj);
    } else {
      closure_0 = num;
      closure_1 = _mod12.shuffle(closure_10);
      closure_2 = _mod12.shuffle(items);
      const _Array2 = Array;
      const obj4 = { length: num };
      mapped = Array.from(obj4).map((item, index) => {
        const obj = { label: length[index % length.length], IconComponent: "a", iconSource: length2[index % length2.length], variant: "r", action: "toCharArray$esjava$1" };
        let str = "default";
        if (index === closure_0 - 1) {
          str = "destructive";
        }
        obj.variant = str;
        obj.action = function action() {

        };
        return obj;
      });
      const arr2 = Array.from(obj4);
    }
    return mapped;
  }, items);
  obj.children = closure_7(require("ContextMenu").ContextMenu, {
    triggerOnLongPress,
    items: memo,
    align: align.align,
    title: "Sample title",
    children(ref) {
      const merged = Object.assign(ref, Object.assign({ ref: 0 }));
      const obj = { ref: ref.ref };
      const merged1 = Object.assign(merged);
      obj.text = text;
      obj.variant = "primary";
      return React5(components_Button_Button.Button, obj);
    }
  });
  return closure_7(closure_5, obj);
});
ReactCompilerGating = fn(558);
let obj3 = { height: 1, backgroundColor: nativeDefault.colors.BORDER_SUBTLE, marginVertical: 12 };
const size = fn(2);
const result = size.fileFinishedImporting("modules/user_settings/design_system/native/UserSettingsDesignSystemContextMenu.tsx");

export default ReactCompilerGating.isReactCompilerEnabled() ? (() => {
  const cResult = c.c(59);
  const tmp4 = closure_11();
  if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
    const tmp9 = React5(Text_Text.Text, { variant: "text-lg/bold", children: "Basic Example" });
    const tmp10 = React5(Text_Text.Text, { variant: "text-md/medium", color: "text-subtle", children: "You press the button to open the menu and then select an action, or tap and pan down in a single gesture." });
    const tmp12 = React5(closure_12, { label: "Open Menu" });
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
    const obj2 = { style: tmp4.card, children: null };
    items = [tmp5, tmp6, tmp7];
    obj2.children = items;
    const tmp15 = closure_1_8(Card.Card, obj2);
    cResult[3] = tmp4.card;
    cResult[4] = tmp15;
    let tmp13 = tmp15;
  } else {
    tmp13 = cResult[4];
  }
  if (cResult[5] === Symbol.for("react.memo_cache_sentinel")) {
    const tmp20 = React5(Text_Text.Text, { variant: "text-lg/bold", children: "Long Press" });
    const tmp21 = React5(Text_Text.Text, { variant: "text-md/medium", color: "text-subtle", children: "You can also have the menu open on long press instead." });
    const tmp23 = React5(closure_12, { triggerOnLongPress: true, label: "Long Press to Open" });
    cResult[5] = tmp20;
    cResult[6] = tmp21;
    cResult[7] = tmp23;
    let tmp18 = tmp23;
    let tmp17 = tmp21;
    let tmp16 = tmp20;
  } else {
    tmp16 = cResult[5];
    tmp17 = cResult[6];
    tmp18 = cResult[7];
  }
  if (cResult[8] !== tmp4.card) {
    const obj3 = { style: tmp4.card, children: null };
    const items1 = [tmp16, tmp17, tmp18];
    obj3.children = items1;
    const tmp26 = closure_1_8(Card.Card, obj3);
    cResult[8] = tmp4.card;
    cResult[9] = tmp26;
    let tmp24 = tmp26;
  } else {
    tmp24 = cResult[9];
  }
  if (cResult[10] === Symbol.for("react.memo_cache_sentinel")) {
    const tmp31 = React5(Text_Text.Text, { variant: "text-lg/bold", children: "Sections" });
    const tmp32 = React5(Text_Text.Text, { variant: "text-md/medium", color: "text-subtle", children: "You can pass an array of arrays of items to create sections in the menu." });
    const tmp34 = React5(closure_12, { label: "Open Sectioned Menu", sections: 3, count: 2 });
    cResult[10] = tmp34;
    cResult[11] = tmp31;
    cResult[12] = tmp32;
    let tmp29 = tmp32;
    let tmp28 = tmp31;
    let tmp27 = tmp34;
  } else {
    tmp27 = cResult[10];
    tmp28 = cResult[11];
    tmp29 = cResult[12];
  }
  if (cResult[13] !== tmp4.card) {
    const obj4 = { style: tmp4.card, children: null };
    const items2 = [tmp28, tmp29, tmp27];
    obj4.children = items2;
    const tmp37 = closure_1_8(Card.Card, obj4);
    cResult[13] = tmp4.card;
    cResult[14] = tmp37;
    let tmp35 = tmp37;
  } else {
    tmp35 = cResult[14];
  }
  if (cResult[15] === Symbol.for("react.memo_cache_sentinel")) {
    const tmp42 = React5(Text_Text.Text, { variant: "text-lg/bold", children: "Automatic Alignment" });
    const tmp43 = React5(Text_Text.Text, { variant: "text-md/medium", color: "text-subtle", children: "The menu will automatically align itself so that it doesn't overflow offscreen horizontally." });
    const tmp45 = React5(closure_12, { alignButton: "flex-end", label: "Open Right-Aligned Menu" });
    cResult[15] = tmp42;
    cResult[16] = tmp43;
    cResult[17] = tmp45;
    let tmp40 = tmp45;
    let tmp39 = tmp43;
    let tmp38 = tmp42;
  } else {
    tmp38 = cResult[15];
    tmp39 = cResult[16];
    tmp40 = cResult[17];
  }
  if (cResult[18] !== tmp4.divider) {
    const obj5 = { style: tmp4.divider };
    const tmp49 = React5(hasOwnProperty, obj5);
    cResult[18] = tmp4.divider;
    cResult[19] = tmp49;
    let tmp46 = tmp49;
  } else {
    tmp46 = cResult[19];
  }
  if (cResult[20] === Symbol.for("react.memo_cache_sentinel")) {
    const tmp53 = React5(Text_Text.Text, { variant: "text-md/medium", color: "text-subtle", children: "It will also position itself vertically, so that it doesn't overflow offscreen vertically." });
    const tmp55 = React5(closure_12, { count: 8, label: "Open Tall Menu" });
    cResult[20] = tmp53;
    cResult[21] = tmp55;
    let tmp51 = tmp55;
    let tmp50 = tmp53;
  } else {
    tmp50 = cResult[20];
    tmp51 = cResult[21];
  }
  if (cResult[22] === tmp4.card) {
    if (cResult[23] === tmp46) {
      let tmp56 = cResult[24];
    }
    const _Symbol = Symbol;
    if (cResult[25] === Symbol.for("react.memo_cache_sentinel")) {
      const tmp62 = React5(Text_Text.Text, { variant: "text-lg/bold", children: "Intentional Alignment" });
      const tmp63 = React5(Text_Text.Text, { variant: "text-md/medium", color: "text-subtle", children: "Menus can take an align prop to intentionally align the menu, instead of using the automatic menu positioning." });
      const tmp64 = React5(Text_Text.Text, { variant: "text-md/medium", color: "text-subtle", children: "The align prop can be set to above, below, left, or right of the menu trigger. How the menu positions relative to the start or end of the trigger is then automatically determined based on the available space." });
      cResult[25] = tmp62;
      cResult[26] = tmp63;
      cResult[27] = tmp64;
      let tmp60 = tmp64;
      let tmp59 = tmp63;
      let tmp58 = tmp62;
    } else {
      tmp58 = cResult[25];
      tmp59 = cResult[26];
      tmp60 = cResult[27];
    }
    if (cResult[28] !== tmp4.divider) {
      const obj6 = { style: tmp4.divider };
      const tmp68 = React5(hasOwnProperty, obj6);
      cResult[28] = tmp4.divider;
      cResult[29] = tmp68;
      let tmp65 = tmp68;
    } else {
      tmp65 = cResult[29];
    }
    const _Symbol2 = Symbol;
    if (cResult[30] === Symbol.for("react.memo_cache_sentinel")) {
      const tmp72 = React5(closure_12, { count: 3, align: "right", label: "Open Right" });
      cResult[30] = tmp72;
      let tmp69 = tmp72;
    } else {
      tmp69 = cResult[30];
    }
    if (cResult[31] !== tmp4.divider) {
      const obj7 = { style: tmp4.divider };
      const tmp76 = React5(hasOwnProperty, obj7);
      cResult[31] = tmp4.divider;
      cResult[32] = tmp76;
      let tmp73 = tmp76;
    } else {
      tmp73 = cResult[32];
    }
    const _Symbol3 = Symbol;
    if (cResult[33] === Symbol.for("react.memo_cache_sentinel")) {
      const tmp80 = React5(closure_12, { count: 3, alignButton: "flex-end", align: "left", label: "Open Left" });
      cResult[33] = tmp80;
      let tmp77 = tmp80;
    } else {
      tmp77 = cResult[33];
    }
    if (cResult[34] !== tmp4.divider) {
      const obj8 = { style: tmp4.divider };
      const tmp84 = React5(hasOwnProperty, obj8);
      cResult[34] = tmp4.divider;
      cResult[35] = tmp84;
      let tmp81 = tmp84;
    } else {
      tmp81 = cResult[35];
    }
    const _Symbol4 = Symbol;
    if (cResult[36] === Symbol.for("react.memo_cache_sentinel")) {
      const tmp88 = React5(closure_12, { count: 3, align: "below", label: "Always Open Below" });
      cResult[36] = tmp88;
      let tmp85 = tmp88;
    } else {
      tmp85 = cResult[36];
    }
    if (cResult[37] !== tmp4.divider) {
      const obj9 = { style: tmp4.divider };
      const tmp92 = React5(hasOwnProperty, obj9);
      cResult[37] = tmp4.divider;
      cResult[38] = tmp92;
      let tmp89 = tmp92;
    } else {
      tmp89 = cResult[38];
    }
    const _Symbol5 = Symbol;
    if (cResult[39] === Symbol.for("react.memo_cache_sentinel")) {
      const tmp96 = React5(closure_12, { count: 3, alignButton: "flex-end", align: "above", label: "Always Open Above" });
      cResult[39] = tmp96;
      let tmp93 = tmp96;
    } else {
      tmp93 = cResult[39];
    }
    if (cResult[40] === tmp4.card) {
      if (cResult[41] === tmp65) {
        if (cResult[42] === tmp73) {
          if (cResult[43] === tmp81) {
            if (cResult[44] === tmp89) {
              let tmp97 = cResult[45];
            }
            const _Symbol6 = Symbol;
            if (cResult[46] === Symbol.for("react.memo_cache_sentinel")) {
              const tmp104 = React5(Text_Text.Text, { variant: "text-lg/bold", children: "Overflow Scrolling" });
              const tmp105 = React5(Text_Text.Text, { variant: "text-md/medium", color: "text-subtle", children: "Menus should not typically have enough items to require scrolling, but with font scaling and smaller devices its possible. In this case, the menu will allow the user to scroll." });
              const tmp107 = React5(closure_12, { count: 30, label: "Open Really Tall Menu" });
              cResult[46] = tmp104;
              cResult[47] = tmp105;
              cResult[48] = tmp107;
              let tmp102 = tmp107;
              let tmp101 = tmp105;
              let tmp100 = tmp104;
            } else {
              tmp100 = cResult[46];
              tmp101 = cResult[47];
              tmp102 = cResult[48];
            }
            if (cResult[49] !== tmp4.card) {
              const obj10 = { style: tmp4.card, children: null };
              const items3 = [tmp100, tmp101, tmp102];
              obj10.children = items3;
              const tmp110 = closure_1_8(Card.Card, obj10);
              cResult[49] = tmp4.card;
              cResult[50] = tmp110;
              let tmp108 = tmp110;
            } else {
              tmp108 = cResult[50];
            }
            if (cResult[51] === tmp4.container) {
              if (cResult[52] === tmp35) {
                if (cResult[53] === tmp56) {
                  if (cResult[54] === tmp13) {
                    if (cResult[55] === tmp97) {
                      if (cResult[56] === tmp108) {
                        if (cResult[57] === tmp24) {
                          let tmp111 = cResult[58];
                        }
                        return tmp111;
                      }
                    }
                  }
                }
              }
            }
            const obj11 = { children: null };
            const obj12 = { style: tmp4.container, children: null };
            const items4 = [tmp13, tmp24, tmp35, tmp56, tmp97, tmp108];
            obj12.children = items4;
            obj11.children = closure_1_8(hasOwnProperty, obj12);
            const tmp116 = React5(timestampProducer, obj11);
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
    const obj13 = { style: tmp4.card, children: null };
    const items5 = [tmp58, tmp59, tmp60, tmp65, tmp69, tmp73, tmp77, tmp81, tmp85, tmp89, tmp93];
    obj13.children = items5;
    const tmp99 = closure_1_8(Card.Card, obj13);
    cResult[40] = tmp4.card;
    cResult[41] = tmp65;
    cResult[42] = tmp73;
    cResult[43] = tmp81;
    cResult[44] = tmp89;
    cResult[45] = tmp99;
    tmp97 = tmp99;
  }
  const obj14 = { style: tmp4.card, children: null };
  const items6 = [tmp38, tmp39, tmp40, tmp46, tmp50, tmp51];
  obj14.children = items6;
  const tmp57 = closure_1_8(Card.Card, obj14);
  cResult[22] = tmp4.card;
  cResult[23] = tmp46;
  cResult[24] = tmp57;
  tmp56 = tmp57;
}) : (() => {
  const tmp = closure_11();
  const obj = { children: null };
  const obj2 = { style: tmp.container, children: null };
  const obj3 = { style: tmp.card, children: null };
  items = [React5(Text_Text.Text, { variant: "text-lg/bold", children: "Basic Example" }), React5(Text_Text.Text, { variant: "text-md/medium", color: "text-subtle", children: "You press the button to open the menu and then select an action, or tap and pan down in a single gesture." }), React5(closure_12, { label: "Open Menu" })];
  obj3.children = items;
  const items1 = [closure_1_8(Card.Card, obj3), , , , , ];
  const obj4 = { style: tmp.card, children: null };
  const items2 = [React5(Text_Text.Text, { variant: "text-lg/bold", children: "Long Press" }), React5(Text_Text.Text, { variant: "text-md/medium", color: "text-subtle", children: "You can also have the menu open on long press instead." }), React5(closure_12, { triggerOnLongPress: true, label: "Long Press to Open" })];
  obj4.children = items2;
  items1[1] = closure_1_8(Card.Card, obj4);
  const obj5 = { style: tmp.card, children: null };
  const items3 = [React5(Text_Text.Text, { variant: "text-lg/bold", children: "Sections" }), React5(Text_Text.Text, { variant: "text-md/medium", color: "text-subtle", children: "You can pass an array of arrays of items to create sections in the menu." }), React5(closure_12, { label: "Open Sectioned Menu", sections: 3, count: 2 })];
  obj5.children = items3;
  items1[2] = closure_1_8(Card.Card, obj5);
  const obj6 = { style: tmp.card, children: null };
  const items4 = [React5(Text_Text.Text, { variant: "text-lg/bold", children: "Automatic Alignment" }), React5(Text_Text.Text, { variant: "text-md/medium", color: "text-subtle", children: "The menu will automatically align itself so that it doesn't overflow offscreen horizontally." }), React5(closure_12, { alignButton: "flex-end", label: "Open Right-Aligned Menu" }), React5(hasOwnProperty, { style: tmp.divider }), React5(Text_Text.Text, { variant: "text-md/medium", color: "text-subtle", children: "It will also position itself vertically, so that it doesn't overflow offscreen vertically." }), React5(closure_12, { count: 8, label: "Open Tall Menu" })];
  obj6.children = items4;
  items1[3] = closure_1_8(Card.Card, obj6);
  const obj8 = { style: tmp.card, children: null };
  const items5 = [React5(Text_Text.Text, { variant: "text-lg/bold", children: "Intentional Alignment" }), React5(Text_Text.Text, { variant: "text-md/medium", color: "text-subtle", children: "Menus can take an align prop to intentionally align the menu, instead of using the automatic menu positioning." }), React5(Text_Text.Text, { variant: "text-md/medium", color: "text-subtle", children: "The align prop can be set to above, below, left, or right of the menu trigger. How the menu positions relative to the start or end of the trigger is then automatically determined based on the available space." }), React5(hasOwnProperty, { style: tmp.divider }), React5(closure_12, { count: 3, align: "right", label: "Open Right" }), React5(hasOwnProperty, { style: tmp.divider }), React5(closure_12, { count: 3, alignButton: "flex-end", align: "left", label: "Open Left" }), React5(hasOwnProperty, { style: tmp.divider }), React5(closure_12, { count: 3, align: "below", label: "Always Open Below" }), React5(hasOwnProperty, { style: tmp.divider }), React5(closure_12, { count: 3, alignButton: "flex-end", align: "above", label: "Always Open Above" })];
  obj8.children = items5;
  items1[4] = closure_1_8(Card.Card, obj8);
  const obj13 = { style: tmp.card, children: null };
  const items6 = [React5(Text_Text.Text, { variant: "text-lg/bold", children: "Overflow Scrolling" }), React5(Text_Text.Text, { variant: "text-md/medium", color: "text-subtle", children: "Menus should not typically have enough items to require scrolling, but with font scaling and smaller devices its possible. In this case, the menu will allow the user to scroll." }), React5(closure_12, { count: 30, label: "Open Really Tall Menu" })];
  obj13.children = items6;
  items1[5] = closure_1_8(Card.Card, obj13);
  obj2.children = items1;
  obj.children = closure_1_8(hasOwnProperty, obj2);
  return React5(timestampProducer, obj);
});