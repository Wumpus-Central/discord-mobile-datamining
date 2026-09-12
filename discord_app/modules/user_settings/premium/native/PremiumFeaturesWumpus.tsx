// discord_app/modules/user_settings/premium/native/PremiumFeaturesWumpus.tsx
import _modDef9515 from "../../../../../_runtime/metro/09515__.js";
import _modDef9520 from "../../../../../_runtime/metro/09520__.js";
import noop from "../../../../../_runtime/metro/00019__.js";

const PremiumTypes = fn(1373).PremiumTypes;
const jsxProd = fn(21);
({ jsx: closure_4, Fragment: hasOwnProperty, jsxs: metroRequire } = jsxProd);
fn(4636);
let createStyles = {
  clouds: { position: "absolute", top: 0, right: 0 },
  wumpus: { position: "absolute", top: 22, right: 22, height: 90 },
  wumpusLeft: null,
};
createStyles = { transform: null };
let items = [{ scaleX: -1 }];
createStyles.transform = items;
createStyles.wumpusLeft = createStyles;
let closure_7 = createStyles.createStyles(createStyles);
const size = fn(2);
const result = size.fileFinishedImporting("modules/user_settings/premium/native/PremiumFeaturesWumpus.tsx");

export default function PremiumFeaturesWumpus(premiumType) {
  premiumType = premiumType.premiumType;
  const tmp = closure_7();
  const tmp2 = premiumType(7046)();
  dependencyMap = tmp2;
  const items = [premiumType, tmp2];
  const memo = noop.useMemo(() => {
    if (premiumType === PremiumTypes.TIER_0) {
      let obj = { wumpusImageSource: _modDef9515, cloudsImageSource: importDefault(closure_1 ? 9516 : 9517) };
    } else {
      if (closure_1) {
        let tmp4 = 9518;
      } else {
        tmp4 = 9519;
      }
      obj = { wumpusImageSource: _modDef9520, cloudsImageSource: importDefault(tmp4) };
      return obj;
    }
  }, items);
  ({ wumpusImageSource, cloudsImageSource } = memo);
  let obj = { style: tmp.clouds, resizeMode: "contain", source: cloudsImageSource };
  const items1 = [closure_4(premiumType(5668), obj)];
  const items2 = [tmp.wumpus];
  let wumpusLeft = premiumType === PremiumTypes.TIER_0;
  if (wumpusLeft) {
    wumpusLeft = tmp.wumpusLeft;
  }
  obj = { children: null };
  items2[1] = wumpusLeft;
  items1[1] = closure_4(premiumType(5668), { style: items2, resizeMode: "contain", source: wumpusImageSource });
  obj.children = items1;
  return closure_6(closure_5, obj);
}
