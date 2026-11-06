// discord_app/modules/checkpoint/native/components/customization/TraitOptionDetails.tsx
import nativeDefault from "../../../../../../discord_common/js/packages/tokens/native.tsx";
import _modDef3248 from "../../../Checkpoint2026.messages.js";
import Text_Text from "../../../../../design/components/Text/native/Text.tsx";
import RarityBadgeDefault from "RarityBadge.tsx";
import noop from "../../../../../../_runtime/metro/00019__.js";

require = fn;
function AssetDescription(asset) {
  asset = asset.asset;
  _require = closure_7();
  if (asset.hidden) {
    const obj2 = {
      variant: "body-md/medium",
      color: "text-subtle",
      accessibilityElementsHidden: null == null,
      children: null,
    };
    return closure_4(require("Text/Text").Text, obj2);
  } else {
    let format = _require;
    let obj = dependencyMap;
    if (asset.status === require("CheckpointCharacterAssets").CheckpointTraitOptionStatus.NITRO_LOCKED) {
      const intl = format(1113).intl;
      format = intl.format;
      obj = {
        subscribeHook(children, arg1) {
          return React4(
            Text_Text.Text,
            {
              variant: "body-md/medium",
              color: "text-subtle",
              style: subscribeLink.subscribeLink,
              onPress() {
                const obj = { analyticsLocations: null };
                items = [closure_1_1(7435).CHECKPOINT, closure_1_1(7435).CHECKPOINT_TRAIT];
                obj.analyticsLocations = items;
                return closure_1_1(10043)(obj);
              },
              accessibilityRole: "link",
              children,
            },
            arg1,
          );
        },
      };
      let formatResult = format(_modDef3248["3Wq/bk"], obj);
    } else {
      formatResult = format(6591).getPlaintextAssetDescription(asset);
      const formatResult1 = format(6591);
    }
  }
}
const View = fn(17).View;
const jsxProd = fn(21);
({ jsx: closure_4, jsxs: hasOwnProperty, Fragment: closure_6 } = jsxProd);
const createStyles = fn(5170);
let obj2 = {
  titleRow: { flexDirection: "row", alignItems: "center", gap: nativeDefault.space.PX_8 },
  title: { textTransform: "capitalize" },
  subscribeLink: { textDecorationLine: "underline" },
};
let closure_7 = createStyles.createStyles(obj2);
let obj4 = { VISIBLE: 0, [0]: "VISIBLE", INVISIBLE: 1, [1]: "INVISIBLE", GONE: 2, [2]: "GONE" };
const size = fn(2);
const result = size.fileFinishedImporting("modules/checkpoint/native/components/customization/TraitOptionDetails.tsx");

export default function TraitOptionDetails(arg0) {
  ({ asset, descriptionVisibility } = arg0);
  const tmp = closure_7();
  const obj = { style: tmp.titleRow, children: null };
  items = [
    React4(Text_Text.Text, {
      variant: "body-lg/medium",
      color: "text-default",
      style: tmp.title,
      children: asset.getName(),
    }),
  ];
  let tmp7Result = tmp3;
  if (descriptionVisibility === obj4.VISIBLE) {
    tmp7Result = null != asset.rarity;
  }
  if (tmp7Result) {
    const obj3 = { rarity: asset.rarity };
    tmp7Result = React4(RarityBadgeDefault, obj3);
  }
  items[1] = tmp7Result;
  obj.children = items;
  const children = [hasOwnProperty(View, obj)];
  let tmp7Result2 = descriptionVisibility !== obj4.GONE;
  if (tmp7Result2) {
    obj4 = { asset, hidden: !tmp3 };
    tmp7Result2 = React4(AssetDescription, obj4);
  }
  children[1] = tmp7Result2;
  return hasOwnProperty(timestampProducer, { children });
}
export const DescriptionVisibility = obj4;
