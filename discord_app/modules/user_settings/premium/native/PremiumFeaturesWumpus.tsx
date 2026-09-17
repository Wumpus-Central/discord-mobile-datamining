// === Module 9538: PremiumFeaturesWumpus ===

// Module 9538 (PremiumFeaturesWumpus)
import _modDef9539 from "module_9539" /* 9539 */;
import _modDef9544 from "module_9544" /* 9544 */;
import noop from "module_19" /* 19 */;

const PremiumTypes = fn(1374).PremiumTypes;
const jsxProd = fn(21);
({ jsx: closure_4, Fragment: hasOwnProperty, jsxs: metroRequire } = jsxProd);
const createStyles = fn(4640);
let obj2 = { clouds: { position: "absolute", top: 0, right: 0 }, wumpus: { position: "absolute", top: 22, right: 22, height: 90 }, wumpusLeft: null };
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
  const tmp2 = premiumType(7057)();
  dependencyMap = tmp2;
  const items = [premiumType, tmp2];
  const memo = noop.useMemo(() => {
    if (premiumType === PremiumTypes.TIER_0) {
      const obj2 = { wumpusImageSource: _modDef9539, cloudsImageSource: importDefault(closure_1 ? 9540 : 9541) };
    } else {
      if (closure_1) {
        let tmp4 = 9542;
      } else {
        tmp4 = 9543;
      }
      const obj = { wumpusImageSource: _modDef9544, cloudsImageSource: importDefault(tmp4) };
      return obj;
    }
  }, items);
  ({ wumpusImageSource, cloudsImageSource } = memo);
  const items1 = [closure_4(premiumType(5675), { style: tmp.clouds, resizeMode: "contain", source: cloudsImageSource }), ];
  const items2 = [tmp.wumpus, ];
  let wumpusLeft = premiumType === PremiumTypes.TIER_0;
  if (wumpusLeft) {
    wumpusLeft = tmp.wumpusLeft;
  }
  let obj2 = { children: null };
  items2[1] = wumpusLeft;
  items1[1] = closure_4(premiumType(5675), { style: items2, resizeMode: "contain", source: wumpusImageSource });
  obj2.children = items1;
  return closure_6(closure_5, obj2);
};