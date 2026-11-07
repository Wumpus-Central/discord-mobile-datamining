// discord_app/modules/user_settings/premium/native/PremiumFeaturesWumpus.tsx
import _modDef10052 from "../../../../../_runtime/metro/10052__.js";
import _modDef10057 from "../../../../../_runtime/metro/10057__.js";
import noop from "../../../../../_runtime/metro/00019__.js";

const PremiumTypes = fn(1387).PremiumTypes;
const jsxProd = fn(21);
({ jsx: closure_4, Fragment: hasOwnProperty, jsxs: closure_6 } = jsxProd);
const createStyles = fn(5140);
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
  const tmp2 = premiumType(7183)();
  dependencyMap = tmp2;
  items = [premiumType, tmp2];
  const memo = noop.useMemo(() => {
    if (premiumType === PremiumTypes.TIER_0) {
      const obj2 = { wumpusImageSource: _modDef10052, cloudsImageSource: importDefault(closure_1 ? 10053 : 10054) };
    } else {
      if (closure_1) {
        let tmp4 = 10055;
      } else {
        tmp4 = 10056;
      }
      const obj = { wumpusImageSource: _modDef10057, cloudsImageSource: importDefault(tmp4) };
      return obj;
    }
  }, items);
  ({ wumpusImageSource, cloudsImageSource } = memo);
  const items1 = [
    closure_4(premiumType(5842), { style: tmp.clouds, resizeMode: "contain", source: cloudsImageSource }),
  ];
  const items2 = [tmp.wumpus];
  let wumpusLeft = premiumType === PremiumTypes.TIER_0;
  if (wumpusLeft) {
    wumpusLeft = tmp.wumpusLeft;
  }
  let obj2 = { children: null };
  items2[1] = wumpusLeft;
  items1[1] = closure_4(premiumType(5842), { style: items2, resizeMode: "contain", source: wumpusImageSource });
  obj2.children = items1;
  return closure_6(closure_5, obj2);
}
