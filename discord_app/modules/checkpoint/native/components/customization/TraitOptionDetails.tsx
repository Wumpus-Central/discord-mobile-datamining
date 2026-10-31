// discord_app/modules/checkpoint/native/components/customization/TraitOptionDetails.tsx
import nativeDefault from "../../../../../../discord_common/js/packages/tokens/native.tsx";
import _modDef3092 from "../../../Checkpoint2026.messages.js";
import Text_Text from "../../../../../design/components/Text/native/Text.tsx";
import RarityBadgeDefault from "RarityBadge.tsx";
import noop from "../../../../../../_runtime/metro/00019__.js";

require = fn;
function AssetDescription(asset) {
  asset = asset.asset;
  _require = closure_7();
  if (asset.hidden) {
    const obj2 = {
      variant: "text-md/medium",
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
              variant: "text-md/medium",
              color: "text-subtle",
              style: subscribeLink.subscribeLink,
              onPress() {
                const obj = { analyticsLocations: null };
                const items = [closure_1_1(7351).CHECKPOINT];
                obj.analyticsLocations = items;
                return closure_1_1(9905)(obj);
              },
              accessibilityRole: "link",
              children,
            },
            arg1,
          );
        },
      };
      let formatResult = format(_modDef3092["3Wq/bk"], obj);
    } else {
      formatResult = format(6434).getAssetDescription(asset);
      const formatResult1 = format(6434);
    }
  }
}
const View = fn(17).View;
const jsxProd = fn(21);
({ jsx: closure_4, jsxs: hasOwnProperty, Fragment: metroRequire } = jsxProd);
const createStyles = fn(5014);
let obj2 = {
  titleRow: { flexDirection: "row", alignItems: "center", gap: nativeDefault.space.PX_8 },
  title: { textTransform: "capitalize" },
  subscribeLink: { textDecorationLine: "underline" },
};
let closure_7 = createStyles.createStyles(obj2);
const size = fn(2);
const result = size.fileFinishedImporting("modules/checkpoint/native/components/customization/TraitOptionDetails.tsx");

export default function TraitOptionDetails(arg0) {
  ({ asset, hideDescriptionAndRarity } = arg0);
  const tmp = closure_7();
  const obj = { style: tmp.titleRow, children: null };
  const items = [
    React4(Text_Text.Text, {
      variant: "text-lg/medium",
      color: "text-default",
      style: tmp.title,
      children: asset.getName(),
    }),
  ];
  let tmp5Result = !hideDescriptionAndRarity;
  if (!hideDescriptionAndRarity) {
    tmp5Result = null != asset.rarity;
  }
  if (tmp5Result) {
    const obj3 = { rarity: asset.rarity };
    tmp5Result = React4(RarityBadgeDefault, obj3);
  }
  const obj4 = { children: null };
  items[1] = tmp5Result;
  obj.children = items;
  const items1 = [hasOwnProperty(View, obj), React4(AssetDescription, { asset, hidden: hideDescriptionAndRarity })];
  obj4.children = items1;
  return hasOwnProperty(timestampProducer, obj4);
}
