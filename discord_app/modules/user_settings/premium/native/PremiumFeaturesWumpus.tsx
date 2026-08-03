import noop from "noop";
import { PremiumTypes } from "GuildFeatures";
import jsxProd from "jsxProd";
import createCacheKey from "createCacheKey";

let c4;
let c5;
let closure_6;
({ jsx: c4, Fragment: c5, jsxs: closure_6 } = jsxProd);
let items = [{ scaleX: -1 }];
let closure_7 = createCacheKey.createStyles({ clouds: { position: "absolute", top: 0, right: 0 }, wumpus: { position: "absolute", top: 22, right: 22, height: 90 }, wumpusLeft: { transform: items } });
const result = require("jsxProd").fileFinishedImporting("modules/user_settings/premium/native/PremiumFeaturesWumpus.tsx");

export default function PremiumFeaturesWumpus(premiumType) {
  let cloudsImageSource;
  let wumpusImageSource;
  premiumType = premiumType.premiumType;
  let dependencyMap;
  const tmp = callback2();
  const tmp2 = premiumType(6564)();
  dependencyMap = tmp2;
  const items = [premiumType, tmp2];
  const memo = React.useMemo(() => {
    if (premiumType === outer1_3.TIER_0) {
      let obj = { wumpusImageSource: null, cloudsImageSource: null };
      obj[0] = premiumType(_undefined[5]);
      obj[1] = premiumType(_undefined ? _undefined[6] : _undefined[7]);
      const tmp7 = premiumType;
    } else {
      if (_undefined) {
        let tmp4 = tmp3[8];
        let tmp5 = tmp3;
      } else {
        tmp4 = tmp3[9];
        tmp5 = tmp3;
      }
      obj = { wumpusImageSource: null, cloudsImageSource: null };
      obj[0] = premiumType(tmp5[10]);
      obj[1] = premiumType(tmp4);
      return obj;
    }
  }, items);
  ({ wumpusImageSource, cloudsImageSource } = memo);
  let obj = { style: tmp.clouds, resizeMode: "contain", source: cloudsImageSource };
  const items1 = [callback(premiumType(5145), obj), ];
  const items2 = [tmp.wumpus, , ];
  let wumpusLeft = premiumType === PremiumTypes.TIER_0;
  if (wumpusLeft) {
    wumpusLeft = tmp.wumpusLeft;
  }
  obj = { children: null };
  items2[1] = wumpusLeft;
  items2[2] = premiumType.style;
  items1[1] = callback(premiumType(5145), { style: items2, resizeMode: "contain", source: wumpusImageSource });
  obj[0] = items1;
  return closure_6(closure_5, obj);
};