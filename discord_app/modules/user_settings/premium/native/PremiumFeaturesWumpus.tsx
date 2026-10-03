// === Module 8889: PremiumFeaturesWumpus ===

// Module 8889 (PremiumFeaturesWumpus)
import c from "c" /* 576 */;
import FastImageDefault from "FastImage" /* 5974 */;
import useIsWindowLargeDefault from "useIsWindowLarge" /* 6433 */;
import _modDef6942 from "module_6942" /* 6942 */;
import _modDef6944 from "module_6944" /* 6944 */;
import noop from "module_19" /* 19 */;

require = fn;
const PremiumTypes = fn(1379).PremiumTypes;
const jsxProd = fn(21);
({ jsx: hasOwnProperty, Fragment: metroRequire, jsxs: closure_7 } = jsxProd);
const createStyles = fn(4890);
let obj2 = { clouds: { position: "absolute", top: 0, right: 0 }, wumpus: { position: "absolute", top: 22, right: 22, height: 90 }, wumpusLeft: null };
let obj3 = { transform: null };
let items = [{ scaleX: -1 }];
obj3.transform = items;
obj2.wumpusLeft = obj3;
let closure_8 = createStyles.createStyles(obj2);
const ReactCompilerGating = fn(558);
const size = fn(2);
const result = size.fileFinishedImporting("modules/user_settings/premium/native/PremiumFeaturesWumpus.tsx");

export default ReactCompilerGating.isReactCompilerEnabled() ? ((premiumType) => {
  const cResult = c.c(16);
  premiumType = premiumType.premiumType;
  const tmp3 = closure_8();
  const tmp5 = useIsWindowLargeDefault();
  if (premiumType === PremiumTypes.TIER_0) {
    const tmp4Result = importDefault(tmp5 ? 8890 : 8891);
    if (cResult[0] !== tmp4Result) {
      const obj2 = { wumpusImageSource: _modDef6942, cloudsImageSource: tmp4Result };
      cResult[0] = tmp4Result;
      cResult[1] = obj2;
    }
  } else {
    const tmp4Result2 = importDefault(tmp5 ? 8892 : 8893);
    if (cResult[2] !== tmp4Result2) {
      const obj3 = { wumpusImageSource: _modDef6944, cloudsImageSource: tmp4Result2 };
      cResult[2] = tmp4Result2;
      cResult[3] = obj3;
      let tmp8 = obj3;
    } else {
      tmp8 = cResult[3];
    }
    ({ wumpusImageSource, cloudsImageSource } = tmp8);
    if (cResult[4] === cloudsImageSource) {
      if (cResult[5] === tmp3.clouds) {
        let tmp12 = cResult[6];
      }
      if (cResult[7] === tmp3.wumpus) {
        if (cResult[8] === tmp15) {
          let tmp16 = cResult[9];
        }
        if (cResult[10] === tmp16) {
          if (cResult[11] === wumpusImageSource) {
            let tmp17 = cResult[12];
          }
          if (cResult[13] === tmp12) {
            if (cResult[14] === tmp17) {
              let tmp20 = cResult[15];
            }
            return tmp20;
          }
          const obj4 = { children: null };
          const items = [tmp12, tmp17];
          obj4.children = items;
          const tmp23 = React5(timestampProducer, obj4);
          cResult[13] = tmp12;
          cResult[14] = tmp17;
          cResult[15] = tmp23;
          tmp20 = tmp23;
        }
        const obj5 = { style: tmp16, resizeMode: "contain", source: wumpusImageSource };
        const tmp19 = hasOwnProperty(FastImageDefault, obj5);
        cResult[10] = tmp16;
        cResult[11] = wumpusImageSource;
        cResult[12] = tmp19;
        tmp17 = tmp19;
      }
      const items1 = [tmp3.wumpus, premiumType === tmp6.TIER_0 && tmp3.wumpusLeft];
      cResult[7] = tmp3.wumpus;
      cResult[8] = premiumType === tmp6.TIER_0 && tmp3.wumpusLeft;
      cResult[9] = items1;
      tmp16 = items1;
    }
    const obj6 = { style: tmp3.clouds, resizeMode: "contain", source: cloudsImageSource };
    const tmp14 = hasOwnProperty(FastImageDefault, obj6);
    cResult[4] = cloudsImageSource;
    cResult[5] = tmp3.clouds;
    cResult[6] = tmp14;
    tmp12 = tmp14;
  }
}) : ((premiumType) => {
  premiumType = premiumType.premiumType;
  const tmp = closure_8();
  const tmp2 = useIsWindowLargeDefault();
  importDefault = tmp2;
  const items = [premiumType, tmp2];
  const memo = noop.useMemo(() => {
    if (premiumType === PremiumTypes.TIER_0) {
      const obj2 = { wumpusImageSource: _modDef6942, cloudsImageSource: importDefault(closure_1 ? 8890 : 8891) };
    } else {
      if (closure_1) {
        let tmp4 = 8892;
      } else {
        tmp4 = 8893;
      }
      const obj = { wumpusImageSource: _modDef6944, cloudsImageSource: importDefault(tmp4) };
      return obj;
    }
  }, items);
  ({ wumpusImageSource, cloudsImageSource } = memo);
  const items1 = [closure_5(FastImageDefault, { style: tmp.clouds, resizeMode: "contain", source: cloudsImageSource }), ];
  const items2 = [tmp.wumpus, ];
  let wumpusLeft = premiumType === PremiumTypes.TIER_0;
  if (wumpusLeft) {
    wumpusLeft = tmp.wumpusLeft;
  }
  let obj2 = { children: null };
  items2[1] = wumpusLeft;
  items1[1] = closure_5(FastImageDefault, { style: items2, resizeMode: "contain", source: wumpusImageSource });
  obj2.children = items1;
  return closure_7(closure_6, obj2);
});