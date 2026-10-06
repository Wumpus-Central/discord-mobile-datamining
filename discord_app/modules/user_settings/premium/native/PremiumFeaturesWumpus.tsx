// === Module 8918: PremiumFeaturesWumpus ===

// Module 8918 (PremiumFeaturesWumpus)
import react2 from "react" /* 576 */;
import PremiumConstants from "PremiumConstants" /* 1379 */;
import FastImageDefault from "FastImage" /* 5981 */;
import useIsWindowLargeDefault from "useIsWindowLarge" /* 6440 */;
import AssetRegistryDefault from "AssetRegistry" /* 6955 */;
import AssetRegistryDefault2 from "AssetRegistry" /* 6957 */;
import react from "react" /* 19 */;
import Fragment from "Fragment" /* 21 */;
import createStyles from "createStyles" /* 4896 */;
import ReactCompilerGating from "ReactCompilerGating" /* 558 */;
import size from "module_2" /* 2 */;

let importDefault, premiumType;

let hasOwnProperty;
let items;
let metroImportDefault;
let metroRequire;
let obj2;
const PremiumTypes = PremiumConstants.PremiumTypes;
({ jsx: hasOwnProperty, Fragment: metroRequire, jsxs: metroImportDefault } = Fragment);
let obj = { clouds: { position: "absolute", top: 0, right: 0 }, wumpus: { position: "absolute", top: 22, right: 22, height: 90 }, wumpusLeft: obj2 };
obj2 = { transform: items };
items = [{ scaleX: -1 }];
let closure_8 = createStyles.createStyles(obj);
let tmp3 = ReactCompilerGating.isReactCompilerEnabled() ? ((premiumType) => {
  let cloudsImageSource;
  let items;
  let tmp8;
  let wumpusImageSource;
  const obj = react2;
  const cResult = obj.c(16);
  premiumType = premiumType.premiumType;
  const tmp3 = closure_8();
  const tmp5 = useIsWindowLargeDefault();
  if (premiumType === PremiumTypes.TIER_0) {
    let tmp10;
    const tmp4Result = importDefault(tmp5 ? 8919 : 8920);
    if (cResult[0] !== tmp4Result) {
      const obj2 = { wumpusImageSource: AssetRegistryDefault, cloudsImageSource: tmp4Result };
      cResult[0] = tmp4Result;
      cResult[1] = obj2;
      tmp10 = obj2;
    } else {
      tmp10 = cResult[1];
    }
    tmp8 = tmp10;
  } else {
    const tmp4Result2 = importDefault(tmp5 ? 8921 : 8922);
    if (cResult[2] !== tmp4Result2) {
      const obj3 = { wumpusImageSource: AssetRegistryDefault2, cloudsImageSource: tmp4Result2 };
      cResult[2] = tmp4Result2;
      cResult[3] = obj3;
      tmp8 = obj3;
    } else {
      tmp8 = cResult[3];
    }
  }
  ({ wumpusImageSource, cloudsImageSource } = tmp8);
  if (cResult[4] === cloudsImageSource) {
    let tmp11;
    if (cResult[5] === tmp3.clouds) {
      tmp11 = cResult[6];
    }
    if (cResult[7] === tmp3.wumpus) {
      let tmp14;
      if (cResult[8] === (premiumType === PremiumTypes.TIER_0 && tmp3.wumpusLeft)) {
        tmp14 = cResult[9];
      }
      if (cResult[10] === tmp14) {
        let tmp15;
        if (cResult[11] === wumpusImageSource) {
          tmp15 = cResult[12];
        }
        if (cResult[13] === tmp11) {
          let tmp18;
          if (cResult[14] === tmp15) {
            tmp18 = cResult[15];
          }
          return tmp18;
        }
        const obj4 = { children: items };
        items = [tmp11, tmp15];
        const tmp21 = metroImportDefault(metroRequire, obj4);
        cResult[13] = tmp11;
        cResult[14] = tmp15;
        cResult[15] = tmp21;
        tmp18 = tmp21;
      }
      const obj5 = { style: tmp14, resizeMode: "contain", source: wumpusImageSource };
      const tmp17 = hasOwnProperty(FastImageDefault, obj5);
      cResult[10] = tmp14;
      cResult[11] = wumpusImageSource;
      cResult[12] = tmp17;
      tmp15 = tmp17;
    }
    const items1 = [tmp3.wumpus, premiumType === PremiumTypes.TIER_0 && tmp3.wumpusLeft];
    cResult[7] = tmp3.wumpus;
    cResult[8] = premiumType === PremiumTypes.TIER_0 && tmp3.wumpusLeft;
    cResult[9] = items1;
    tmp14 = items1;
  }
  const obj6 = { style: tmp3.clouds, resizeMode: "contain", source: cloudsImageSource };
  const tmp12 = hasOwnProperty(FastImageDefault, obj6);
  cResult[4] = cloudsImageSource;
  cResult[5] = tmp3.clouds;
  cResult[6] = tmp12;
  tmp11 = tmp12;
}) : ((premiumType) => {
  let closure_1;
  let cloudsImageSource;
  let wumpusImageSource;
  premiumType = premiumType.premiumType;
  const tmp = closure_8();
  const tmp2 = useIsWindowLargeDefault();
  importDefault = tmp2;
  const items = [premiumType, tmp2];
  const memo = react.useMemo(() => {
    let obj;
    let tmpResult;
    if (premiumType === PremiumTypes.TIER_0) {
      obj = { wumpusImageSource: AssetRegistryDefault, cloudsImageSource: importDefault(closure_1 ? 8919 : 8920) };
      const obj2 = { wumpusImageSource: AssetRegistryDefault, cloudsImageSource: importDefault(closure_1 ? 8919 : 8920) };
    } else {
      let tmp4;
      if (closure_1) {
        tmp4 = 8921;
      } else {
        tmp4 = 8922;
      }
      obj = { wumpusImageSource: AssetRegistryDefault2, cloudsImageSource: tmpResult };
      tmpResult = importDefault(tmp4);
    }
    return obj;
  }, items);
  ({ wumpusImageSource, cloudsImageSource } = memo);
  let obj = { style: tmp.clouds, resizeMode: "contain", source: cloudsImageSource };
  const items1 = [closure_5(FastImageDefault, obj), ];
  const items2 = [tmp.wumpus, ];
  let wumpusLeft = premiumType === PremiumTypes.TIER_0;
  const tmp7 = FastImageDefault;
  if (wumpusLeft) {
    wumpusLeft = tmp.wumpusLeft;
  }
  let obj2 = { children: items1 };
  items2[1] = wumpusLeft;
  items1[1] = closure_5(tmp7, { style: items2, resizeMode: "contain", source: wumpusImageSource });
  return closure_7(closure_6, obj2);
});
const result = size.fileFinishedImporting("modules/user_settings/premium/native/PremiumFeaturesWumpus.tsx");

export default tmp3;