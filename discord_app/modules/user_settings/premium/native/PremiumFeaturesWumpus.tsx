// discord_app/modules/user_settings/premium/native/PremiumFeaturesWumpus.tsx
import _modDef9607 from "../../../../../_runtime/metro/09607__.js";
import _modDef9609 from "../../../../../_runtime/metro/09609__.js";
import noop from "../../../../../_runtime/metro/00019__.js";

const PremiumTypes = fn(1390).PremiumTypes;
const jsxProd = fn(21);
({ jsx: closure_4, Fragment: hasOwnProperty, jsxs: closure_6 } = jsxProd);
const createStyles = fn(5306);
let obj2 = {
  clouds: { position: "absolute", top: 0, right: 0 },
  wumpus: { position: "absolute", top: 22, right: 22, height: 90 },
  wumpusLeft: null,
};
const obj3 = { transform: null };
let items = [{ scaleX: -1 }];
obj3.transform = items;
obj2.wumpusLeft = obj3;
let closure_7 = createStyles.createStyles(obj2);
const size = fn(2);
const result = size.fileFinishedImporting("modules/user_settings/premium/native/PremiumFeaturesWumpus.tsx");

export default function PremiumFeaturesWumpus(premiumType) {
  premiumType = premiumType.premiumType;
  const tmp = closure_7();
  const tmp2 = premiumType(7771)();
  dependencyMap = tmp2;
  items = [premiumType, tmp2];
  const memo = noop.useMemo(() => {
    if (premiumType === PremiumTypes.TIER_0) {
      const obj2 = { wumpusImageSource: _modDef9607, cloudsImageSource: importDefault(closure_1 ? 10966 : 10967) };
    } else {
      if (closure_1) {
        let tmp4 = 10968;
      } else {
        tmp4 = 10969;
      }
      const obj = { wumpusImageSource: _modDef9609, cloudsImageSource: importDefault(tmp4) };
      return obj;
    }
  }, items);
  ({ wumpusImageSource, cloudsImageSource } = memo);
  const items1 = [
    closure_4(premiumType(6020), { style: tmp.clouds, resizeMode: "contain", source: cloudsImageSource }),
  ];
  const items2 = [tmp.wumpus];
  let wumpusLeft = premiumType === PremiumTypes.TIER_0;
  if (wumpusLeft) {
    wumpusLeft = tmp.wumpusLeft;
  }
  let obj2 = { children: null };
  items2[1] = wumpusLeft;
  items1[1] = closure_4(premiumType(6020), { style: items2, resizeMode: "contain", source: wumpusImageSource });
  obj2.children = items1;
  return closure_6(closure_5, obj2);
}
