// === Module 15961: TraitOptionDetails ===

// Module 15961 (TraitOptionDetails)
import c from "c" /* 576 */;
import nativeDefault from "native" /* 587 */;
import _modDef3115 from "module_3115" /* 3115 */;
import Text_Text from "Text/Text" /* 5087 */;
import RarityBadgeDefault from "RarityBadge" /* 15962 */;
import noop from "module_19" /* 19 */;

require = fn;
const View = fn(17).View;
const jsxProd = fn(21);
({ jsx: closure_4, jsxs: hasOwnProperty, Fragment: metroRequire } = jsxProd);
const createStyles = fn(5091);
let obj2 = { titleRow: { flexDirection: "row", alignItems: "center", gap: nativeDefault.space.PX_8 }, title: { textTransform: "capitalize" }, subscribeLink: { textDecorationLine: "underline" } };
let closure_7 = createStyles.createStyles(obj2);
let ReactCompilerGating = fn(558);
let closure_8 = ReactCompilerGating.isReactCompilerEnabled() ? (function AssetDescription(asset) {
  const cResult = require("c").c(7);
  asset = asset.asset;
  const tmp4 = closure_7();
  _require = tmp4;
  let tmp5 = null;
  if (!asset.hidden) {
    if (asset.rarity === tmp(5435).CheckpointTraitRarity.NITRO) {
      if (true === asset.locked) {
        if (cResult[0] !== tmp4) {
          const intl = tmp(1126).intl;
          const obj2 = {
            subscribeHook(children, arg1) {
                      return React4(Text_Text.Text, {
                        variant: "text-md/medium",
                        color: "text-subtle",
                        style: subscribeLink.subscribeLink,
                        onPress() {
                          const obj = { analyticsLocations: null };
                          const items = [closure_1_1(6872).CHECKPOINT];
                          obj.analyticsLocations = items;
                          return closure_1_1(9366)(obj);
                        },
                        accessibilityRole: "link",
                        children
                      }, arg1);
                    }
          };
          const formatResult = intl.format(_modDef3115["3Wq/bk"], obj2);
          cResult[0] = tmp4;
          cResult[1] = formatResult;
        }
      }
    }
    if (cResult[2] !== asset) {
      const assetDescription = tmp(15924).getAssetDescription(asset);
      cResult[2] = asset;
      cResult[3] = assetDescription;
      let tmp6 = assetDescription;
      const tmpResult = tmp(15924);
    } else {
      tmp6 = cResult[3];
    }
    tmp5 = tmp6;
  }
  if (cResult[4] === tmp5) {
    if (cResult[5] === tmp12) {
      let tmp13 = cResult[6];
    }
    return tmp13;
  }
  const tmp14 = closure_4(require("Text/Text").Text, { variant: "text-md/medium", color: "text-subtle", accessibilityElementsHidden: null == tmp5, children: tmp5 });
  cResult[4] = tmp5;
  cResult[5] = null == tmp5;
  cResult[6] = tmp14;
  tmp13 = tmp14;
  let obj = require("c");
}) : (function AssetDescription(asset) {
  asset = asset.asset;
  _require = closure_7();
  if (asset.hidden) {
    const obj2 = { variant: "text-md/medium", color: "text-subtle", accessibilityElementsHidden: null == null, children: null };
    return closure_4(require("Text/Text").Text, obj2);
  } else {
    let format = _require;
    let obj = dependencyMap;
    if (asset.rarity !== require("CheckpointTraitRarity").CheckpointTraitRarity.NITRO) {
      let assetDescription = format(15924).getAssetDescription(asset);
      const formatResult = format(15924);
    }
    const intl = format(1126).intl;
    format = intl.format;
    obj = {
      subscribeHook(children, arg1) {
          return React4(Text_Text.Text, {
            variant: "text-md/medium",
            color: "text-subtle",
            style: subscribeLink.subscribeLink,
            onPress() {
              const obj = { analyticsLocations: null };
              const items = [closure_1_1(6872).CHECKPOINT];
              obj.analyticsLocations = items;
              return closure_1_1(9366)(obj);
            },
            accessibilityRole: "link",
            children
          }, arg1);
        }
    };
    assetDescription = format(_modDef3115["3Wq/bk"], obj);
  }
});
ReactCompilerGating = fn(558);
let obj3 = { flexDirection: "row", alignItems: "center", gap: nativeDefault.space.PX_8 };
const size = fn(2);
const result = size.fileFinishedImporting("modules/checkpoint/native/components/customization/TraitOptionDetails.tsx");

export default ReactCompilerGating.isReactCompilerEnabled() ? (function TraitOptionDetails(arg0) {
  const cResult = c.c(18);
  ({ asset, hideDescriptionAndRarity } = arg0);
  const tmp4 = closure_7();
  ({ titleRow, title } = tmp4);
  if (cResult[0] !== asset) {
    const name = asset.getName();
    cResult[0] = asset;
    cResult[1] = name;
    let tmp5 = name;
  } else {
    tmp5 = cResult[1];
  }
  if (cResult[2] === tmp4.title) {
    if (cResult[3] === tmp5) {
      let tmp7 = cResult[4];
    }
    if (cResult[5] === asset.rarity) {
      if (cResult[6] === hideDescriptionAndRarity) {
        let tmp9 = cResult[7];
      }
      if (cResult[8] === tmp4.titleRow) {
        if (cResult[9] === tmp7) {
          if (cResult[10] === tmp9) {
            let tmp14 = cResult[11];
          }
          if (cResult[12] === asset) {
            if (cResult[13] === hideDescriptionAndRarity) {
              let tmp18 = cResult[14];
            }
            if (cResult[15] === tmp14) {
              if (cResult[16] === tmp18) {
                let tmp22 = cResult[17];
              }
              return tmp22;
            }
            const obj2 = { children: null };
            const items = [tmp14, tmp18];
            obj2.children = items;
            const tmp25 = hasOwnProperty(timestampProducer, obj2);
            cResult[15] = tmp14;
            cResult[16] = tmp18;
            cResult[17] = tmp25;
            tmp22 = tmp25;
          }
          const obj3 = { asset, hidden: hideDescriptionAndRarity };
          const tmp21 = React4(closure_8, obj3);
          cResult[12] = asset;
          cResult[13] = hideDescriptionAndRarity;
          cResult[14] = tmp21;
          tmp18 = tmp21;
        }
      }
      const obj4 = { style: titleRow, children: null };
      const items1 = [tmp7, tmp9];
      obj4.children = items1;
      const tmp17 = hasOwnProperty(View, obj4);
      cResult[8] = tmp4.titleRow;
      cResult[9] = tmp7;
      cResult[10] = tmp9;
      cResult[11] = tmp17;
      tmp14 = tmp17;
    }
    let tmp10 = !hideDescriptionAndRarity;
    if (!hideDescriptionAndRarity) {
      tmp10 = null != asset.rarity;
    }
    if (tmp10) {
      const obj5 = { rarity: asset.rarity };
      tmp10 = React4(RarityBadgeDefault, obj5);
    }
    cResult[5] = asset.rarity;
    cResult[6] = hideDescriptionAndRarity;
    cResult[7] = tmp10;
    tmp9 = tmp10;
  }
  const tmp8 = React4(Text_Text.Text, { variant: "text-lg/medium", color: "text-default", style: title, children: tmp5 });
  cResult[2] = tmp4.title;
  cResult[3] = tmp5;
  cResult[4] = tmp8;
  tmp7 = tmp8;
}) : (function TraitOptionDetails(arg0) {
  ({ asset, hideDescriptionAndRarity } = arg0);
  const tmp = closure_7();
  const obj = { style: tmp.titleRow, children: null };
  const items = [React4(Text_Text.Text, { variant: "text-lg/medium", color: "text-default", style: tmp.title, children: asset.getName() }), ];
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
  const items1 = [hasOwnProperty(View, obj), React4(closure_8, { asset, hidden: hideDescriptionAndRarity })];
  obj4.children = items1;
  return hasOwnProperty(timestampProducer, obj4);
});