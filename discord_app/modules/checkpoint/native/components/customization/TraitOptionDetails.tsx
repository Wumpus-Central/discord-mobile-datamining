// === Module 12706: TraitOptionDetails ===

// Module 12706 (TraitOptionDetails)
import nativeDefault from "native" /* 575 */;
import _modDef3442 from "module_3442" /* 3442 */;
import Text_Text from "Text/Text" /* 5508 */;
import RarityBadgeDefault from "RarityBadge" /* 12707 */;
import noop from "module_19" /* 19 */;

require = fn;
function OptionDescription(option) {
  option = option.option;
  const tmp = closure_7();
  _require = tmp;
  if (option.status === require("CheckpointCharacterAssets").CheckpointTraitOptionStatus.NITRO_LOCKED) {
    const intl = tmp2(1112).intl;
    let obj = {
      subscribeHook(children, arg1) {
          return React4(Text_Text.Text, {
            variant: "body-md/medium",
            color: "text-subtle",
            style: subscribeLink.subscribeLink,
            onPress() {
              const obj = { analyticsLocations: null };
              items = [closure_1_1(6254).CHECKPOINT, closure_1_1(6254).CHECKPOINT_TRAIT];
              obj.analyticsLocations = items;
              return closure_1_1(8960)(obj);
            },
            accessibilityRole: "link",
            children
          }, arg1);
        }
    };
    let formatResult = intl.format(_modDef3442.E6AfCb, obj);
  } else {
    formatResult = tmp2(6639).getPlaintextAssetDescription(option);
    const tmp2Result = tmp2(6639);
  }
  return closure_4(require("Text/Text").Text, { variant: "body-md/medium", color: "text-subtle", style: tmp.description, accessibilityElementsHidden: null == formatResult, children: formatResult });
}
const View = fn(17).View;
const jsxProd = fn(21);
({ jsx: closure_4, jsxs: hasOwnProperty, Fragment: closure_6 } = jsxProd);
const createStyles = fn(4917);
let obj2 = { titleRow: { flexDirection: "row", alignItems: "center", gap: nativeDefault.space.PX_8 }, title: { textTransform: "capitalize" }, description: null, subscribeLink: null };
let obj3 = { flexDirection: "row", alignItems: "center", gap: nativeDefault.space.PX_8 };
obj2.description = { marginTop: nativeDefault.space.PX_4 };
obj2.subscribeLink = { textDecorationLine: "underline" };
let closure_7 = createStyles.createStyles(obj2);
const size = fn(2);
const result = size.fileFinishedImporting("modules/checkpoint/native/components/customization/TraitOptionDetails.tsx");

export default function TraitOptionDetails(accessibilityLabel) {
  ({ option, hideRarity, title } = accessibilityLabel);
  const tmp = closure_7();
  const obj = { style: tmp.titleRow, children: null };
  const obj2 = { variant: "body-lg/medium", color: "text-default", style: tmp.title, accessibilityLabel: accessibilityLabel.titleAccessibilityLabel, children: null };
  if (title == null) {
    title = option.getName();
  }
  obj2.children = title;
  items = [React4(Text_Text.Text, obj2), ];
  let tmp5Result = !hideRarity;
  if (!hideRarity) {
    tmp5Result = null != option.rarity;
  }
  if (tmp5Result) {
    const obj3 = { rarity: option.rarity };
    tmp5Result = React4(RarityBadgeDefault, obj3);
  }
  const obj4 = { children: null };
  items[1] = tmp5Result;
  obj.children = items;
  const items1 = [hasOwnProperty(View, obj), React4(OptionDescription, { option })];
  obj4.children = items1;
  return hasOwnProperty(timestampProducer, obj4);
};