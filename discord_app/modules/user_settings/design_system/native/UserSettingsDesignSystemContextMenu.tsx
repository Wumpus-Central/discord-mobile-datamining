// discord_app/modules/user_settings/design_system/native/UserSettingsDesignSystemContextMenu.tsx
import ThemesDefault from "../../../../../discord_common/js/packages/tokens/native.tsx";
import registerAssetDefault from "../../../../../_runtime/04410_registerAsset.js";
import Text from "../../../../design/components/Text/native/Text.tsx";
import PressableCard from "../../../../design/components/Card/native/Card.native.tsx";
import registerAssetDefault2 from "../../../../../_runtime/07617_registerAsset.js";
import registerAssetDefault3 from "../../../../../_runtime/07821_registerAsset.js";
import registerAssetDefault4 from "../../../../../_runtime/10829_registerAsset.js";
import registerAssetDefault5 from "../../../../../_runtime/11097_registerAsset.js";
import registerAssetDefault6 from "../../../../../_runtime/12244_registerAsset.js";
import registerAssetDefault7 from "../../../../../_runtime/15311_registerAsset.js";
import registerAssetDefault8 from "../../../../../_runtime/15312_registerAsset.js";
import closure_2 from "../../../../../_runtime/00019_noop.js";
import get_ActivityIndicator from "../../../../../_runtime/00017_get_ActivityIndicator.js";
import jsxProd from "../../../../../_runtime/react/00021_jsxProd.js";
import createCacheKey from "../../../../design/components/Styles/native/createStyles.tsx";

require = arg1;
function DemoContextMenu(align) {
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
  const memo = num2.useMemo(() => {
    if (closure_2 > 1) {
      const _Array = Array;
      let obj = { length: null };
      obj[0] = tmp;
      let arr = Array.from(obj);
      let mapped = arr.map(() => {
        const callback = dependencyMap;
        let obj = callback(12);
        dependencyMap = obj.shuffle(closure_1_8);
        closure_2 = callback(12).shuffle(closure_1_7);
        obj = { length: dependencyMap };
        const obj2 = callback(12);
        return Array.from(obj).map((arg0, arg1) => {
          const obj = { label: length[arg1 % length.length], IconComponent: "a", iconSource: 1885339651, variant: 1945239555, action: -599457789 };
          obj[2] = length2[arg1 % length2.length];
          let str = "default";
          if (arg1 === closure_0 - 1) {
            str = "destructive";
          }
          obj[3] = str;
          obj[4] = function action() {

          };
          return obj;
        });
      });
    } else {
      closure_0 = closure_1;
      closure_1 = closure_1_0(num[13]).shuffle(closure_1_8);
      let obj2 = closure_1_0(num[13]);
      closure_2 = closure_1_0(num[13]).shuffle(closure_1_7);
      const _Array2 = Array;
      obj = { length: null };
      obj[0] = closure_1;
      arr = Array.from(obj);
      mapped = arr.map((arg0, arg1) => {
        const obj = { label: length[arg1 % length.length], IconComponent: "a", iconSource: 1885339651, variant: 1945239555, action: -599457789 };
        obj[2] = length2[arg1 % length2.length];
        let str = "default";
        if (arg1 === closure_0 - 1) {
          str = "destructive";
        }
        obj[3] = str;
        obj[4] = function action() {

        };
        return obj;
      });
      const obj3 = closure_1_0(num[13]);
    }
    return mapped;
  }, items);
  obj = {
    triggerOnLongPress,
    items: memo,
    align: align.align,
    title: "Sample title",
    children(ref) {
      const merged = Object.assign(ref, Object.create(null));
      const obj = { ref: ref.ref };
      const merged1 = Object.assign(merged);
      obj.text = closure_0;
      obj.variant = "primary";
      return closure_1_5(closure_1_0(num[15]).Button, obj);
    }
  };
  obj[1] = callback(require(num[14]).ContextMenu, obj);
  return callback(closure_3, obj);
}
({ View: c3, ScrollView: c4 } = get_ActivityIndicator);
({ jsx: c5, jsxs: closure_6 } = jsxProd);
let items = [registerAssetDefault6, registerAssetDefault2, registerAssetDefault3, registerAssetDefault4, registerAssetDefault, registerAssetDefault7, registerAssetDefault8, registerAssetDefault5];
let closure_8 = ["Launch Probe!", "Activate Laser", "Teleport Widget", "Engage Hyperdrive", "Deploy Robots", "Initiate Time Warp", "Beam Up Snacks", "Hack Database", "Trigger Cosmic Boom", "Unleash Space Vortex", "Activate Cloaking Device"];
createCacheKey = { container: { flexDirection: "column", gap: 12, padding: 16 }, card: { gap: 12 }, divider: null };
createCacheKey = { height: 1, backgroundColor: ThemesDefault.colors.BORDER_SUBTLE, marginVertical: 12 };
createCacheKey[2] = createCacheKey;
let closure_9 = createCacheKey.createStyles(createCacheKey);
const result = require("set").fileFinishedImporting("modules/user_settings/design_system/native/UserSettingsDesignSystemContextMenu.tsx");

export default function UserSettingsDesignSystemAlertModal() {
  const tmp = callback3();
  let obj = { children: null };
  obj = { style: tmp.container, children: null };
  obj = { style: tmp.card, children: null };
  items = [callback(Text.Text, { variant: "text-lg/bold", children: "Basic Example" }), callback(Text.Text, { variant: "text-md/medium", color: "text-subtle", children: "You press the button to open the menu and then select an action, or tap and pan down in a single gesture." }), callback(DemoContextMenu, { label: "Open Menu" })];
  obj[1] = items;
  const items1 = [callback2(PressableCard.Card, obj), , , , , ];
  obj1 = { style: tmp.card, children: null };
  const items2 = [callback(Text.Text, { variant: "text-lg/bold", children: "Long Press" }), callback(Text.Text, { variant: "text-md/medium", color: "text-subtle", children: "You can also have the menu open on long press instead." }), callback(DemoContextMenu, { triggerOnLongPress: true, label: "Long Press to Open" })];
  obj1[1] = items2;
  items1[1] = callback2(PressableCard.Card, obj1);
  const obj2 = { style: tmp.card, children: null };
  const items3 = [callback(Text.Text, { variant: "text-lg/bold", children: "Sections" }), callback(Text.Text, { variant: "text-md/medium", color: "text-subtle", children: "You can pass an array of arrays of items to create sections in the menu." }), callback(DemoContextMenu, { label: "Open Sectioned Menu", sections: 3, count: 2 })];
  obj2[1] = items3;
  items1[2] = callback2(PressableCard.Card, obj2);
  const obj3 = { style: tmp.card, children: null };
  const items4 = [callback(Text.Text, { variant: "text-lg/bold", children: "Automatic Alignment" }), callback(Text.Text, { variant: "text-md/medium", color: "text-subtle", children: "The menu will automatically align itself so that it doesn't overflow offscreen horizontally." }), callback(DemoContextMenu, { alignButton: "flex-end", label: "Open Right-Aligned Menu" }), callback(closure_3, { style: tmp.divider }), callback(Text.Text, { variant: "text-md/medium", color: "text-subtle", children: "It will also position itself vertically, so that it doesn't overflow offscreen vertically." }), callback(DemoContextMenu, { count: 8, label: "Open Tall Menu" })];
  obj3[1] = items4;
  items1[3] = callback2(PressableCard.Card, obj3);
  const obj5 = { style: tmp.card, children: null };
  const items5 = [callback(Text.Text, { variant: "text-lg/bold", children: "Intentional Alignment" }), callback(Text.Text, { variant: "text-md/medium", color: "text-subtle", children: "Menus can take an align prop to intentionally align the menu, instead of using the automatic menu positioning." }), callback(Text.Text, { variant: "text-md/medium", color: "text-subtle", children: "The align prop can be set to above, below, left, or right of the menu trigger. How the menu positions relative to the start or end of the trigger is then automatically determined based on the available space." }), callback(closure_3, { style: tmp.divider }), callback(DemoContextMenu, { count: 3, align: "right", label: "Open Right" }), callback(closure_3, { style: tmp.divider }), callback(DemoContextMenu, { count: 3, alignButton: "flex-end", align: "left", label: "Open Left" }), callback(closure_3, { style: tmp.divider }), callback(DemoContextMenu, { count: 3, align: "below", label: "Always Open Below" }), callback(closure_3, { style: tmp.divider }), callback(DemoContextMenu, { count: 3, alignButton: "flex-end", align: "above", label: "Always Open Above" })];
  obj5[1] = items5;
  items1[4] = callback2(PressableCard.Card, obj5);
  const obj10 = { style: tmp.card, children: null };
  const items6 = [callback(Text.Text, { variant: "text-lg/bold", children: "Overflow Scrolling" }), callback(Text.Text, { variant: "text-md/medium", color: "text-subtle", children: "Menus should not typically have enough items to require scrolling, but with font scaling and smaller devices its possible. In this case, the menu will allow the user to scroll." }), callback(DemoContextMenu, { count: 30, label: "Open Really Tall Menu" })];
  obj10[1] = items6;
  items1[5] = callback2(PressableCard.Card, obj10);
  obj[1] = items1;
  obj[0] = callback2(closure_3, obj);
  return callback(closure_4, obj);
};