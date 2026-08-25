// === Module 7799: useBuyNitroPerks ===

// Module 7799 (useBuyNitroPerks)
import calculateFractionalPremiumInfoDefault from "calculateFractionalPremiumInfo" /* 7003 */;
import closure_3 from "noop" /* 19 */;
import { Gradients } from "items" /* 7039 */;
import GuildFeatures from "GuildFeatures" /* 1924 */;
import importDefaultResult from "n" /* 689 */;

const require = arg1;
({ FractionalPremiumStates: c4, NUM_FREE_GUILD_BOOSTS_WITH_PREMIUM: c5, PremiumTypes: closure_6 } = GuildFeatures);
let items = [...Gradients.PREMIUM_TIER_2];
let closure_7 = importDefaultResult.scale(items.reverse()).mode("lab");
const scaleResult = importDefaultResult.scale(items.reverse());
let items1 = [...Gradients.PREMIUM_TIER_0];
const importDefaultResult1 = importDefaultResult;
let closure_8 = importDefaultResult.scale(items1.reverse()).mode("lab");
const scaleResult1 = importDefaultResult.scale(items1.reverse());
let result = require("set").fileFinishedImporting("modules/premium_marketing/native/hooks/useBuyNitroPerks.tsx");

export default function useBuyNitroPerks(arg0) {
  closure_0 = arg0;
  let tmp = calculateFractionalPremiumInfoDefault({ forceFetch: true }).fractionalState === constants.FP_ONLY;
  importDefault = tmp;
  let items = [arg0, tmp];
  return React.useMemo(() => {
    let obj = { id: "emoji", label: null, subLabel: null, IconComponent: null, includedInNitroBasic: true, detail: null };
    const tmp = callback;
    const tmp2 = closure_1_2;
    const intl = callback(closure_1_2[5]).intl;
    obj[1] = intl.string(callback(closure_1_2[5]).t["R2IV/Q"]);
    const intl2 = callback(closure_1_2[5]).intl;
    obj[2] = intl2.string(callback(closure_1_2[5]).t["3cyhe3"]);
    obj[3] = callback(closure_1_2[6]).ReactionIcon;
    obj = { image: callback2(closure_1_2[7]), description: callback(closure_1_2[5]).t["3SUJLd"] };
    obj[5] = obj;
    let items = [obj, , , , , , , , , , , , , , , ];
    obj = { id: "uploads", label: null, labelBasic: null, subLabel: null, IconComponent: null, includedInNitroBasic: true, detail: null };
    const intl3 = callback(closure_1_2[5]).intl;
    obj[1] = intl3.string(callback(closure_1_2[5]).t["3BtVbk"]);
    const intl4 = callback(closure_1_2[5]).intl;
    obj[2] = intl4.string(callback(closure_1_2[5]).t["Zs49/V"]);
    const intl5 = callback(closure_1_2[5]).intl;
    obj[3] = intl5.string(callback(closure_1_2[5]).t["8AhJqy"]);
    obj[4] = callback(closure_1_2[8]).UploadIcon;
    obj[6] = { image: callback2(closure_1_2[9]), description: callback(closure_1_2[5]).t.i1UuMk };
    items[1] = obj;
    let obj4 = callback(closure_1_2[10]);
    if (obj4.isAppIconsSupported()) {
      let obj2 = { id: "custom-app-icons", label: null, subLabel: null, IconComponent: null, includedInNitroBasic: true, detail: null };
      const intl6 = tmp(tmp2[5]).intl;
      obj2[1] = intl6.string(tmp(tmp2[5]).t.OuItFi);
      const intl7 = tmp(tmp2[5]).intl;
      obj2[2] = intl7.string(tmp(tmp2[5]).t.mPyrE6);
      obj2[3] = tmp(tmp2[11]).AppsIcon;
      let items1 = [obj2];
      let items2 = items1;
    } else {
      items2 = [];
    }
    let arraySpreadResult = HermesBuiltin.arraySpread(items2, 2);
    let obj3 = { id: "profiles", label: null, subLabel: null, IconComponent: null, includedInNitroBasic: false, detail: null };
    const intl8 = tmp(tmp2[5]).intl;
    obj3[1] = intl8.string(tmp(tmp2[5]).t["Gv/rQ6"]);
    const intl9 = tmp(tmp2[5]).intl;
    obj3[2] = intl9.string(tmp(tmp2[5]).t["t/Mvdj"]);
    obj3[3] = tmp(tmp2[12]).UserSquareIcon;
    obj4 = { image: tmp3(tmp2[13]), description: tmp(tmp2[5]).t.kWcDK8 };
    obj3[5] = obj4;
    items[arraySpreadResult] = obj3;
    if (callback2) {
      let items3 = [];
    } else {
      const obj5 = { id: "boosts", label: null, subLabel: null, IconComponent: null, includedInNitroBasic: false, detail: null };
      const intl10 = tmp(tmp2[5]).intl;
      const obj6 = { numBoosts: null };
      obj6[0] = closure_1_5;
      obj5[1] = intl10.formatToPlainString(tmp(tmp2[5]).t.DbkNFj, obj6);
      const intl11 = tmp(tmp2[5]).intl;
      obj5[2] = intl11.string(tmp(tmp2[5]).t["n+DGY/"]);
      obj5[3] = tmp(tmp2[14]).BoostGemIcon;
      const obj7 = { image: null, description: null };
      obj7[0] = tmp3(tmp2[15]);
      obj7[1] = tmp(tmp2[5]).t.jsyNHm;
      obj5[5] = obj7;
      items3 = [obj5];
    }
    arraySpreadResult = HermesBuiltin.arraySpread(items3, arraySpreadResult + 1);
    const obj8 = { id: "streaming", label: null, subLabel: null, IconComponent: null, includedInNitroBasic: false, detail: null };
    const intl12 = tmp(tmp2[5]).intl;
    obj8[1] = intl12.string(tmp(tmp2[5]).t.RSXQYO);
    const intl13 = tmp(tmp2[5]).intl;
    obj8[2] = intl13.string(tmp(tmp2[5]).t.ymCPxp);
    obj8[3] = tmp(tmp2[16]).ScreenStreamIcon;
    obj1 = { image: callback2(closure_1_2[9]), description: callback(closure_1_2[5]).t.i1UuMk };
    const tmp5 = callback2;
    obj8[5] = { image: callback2(tmp2[17]), description: tmp(tmp2[5]).t.ymCPxp };
    items[arraySpreadResult] = obj8;
    const sum = arraySpreadResult + 1;
    const obj10 = { id: "super-reactions", label: null, subLabel: null, IconComponent: null, includedInNitroBasic: true, detail: null };
    const intl14 = tmp(tmp2[5]).intl;
    obj10[1] = intl14.string(tmp(tmp2[5]).t["uZt5q/"]);
    const intl15 = tmp(tmp2[5]).intl;
    obj10[2] = intl15.string(tmp(tmp2[5]).t.ZK3ZoX);
    obj10[3] = tmp(tmp2[18]).SuperReactionIcon;
    const obj9 = { image: callback2(tmp2[17]), description: tmp(tmp2[5]).t.ymCPxp };
    obj10[5] = { image: callback2(tmp2[19]), description: tmp(tmp2[5]).t.A0U9fk };
    items[sum] = obj10;
    if (tmp5) {
      let items4 = [];
    } else {
      const obj12 = { id: "badge", label: null, subLabel: null, IconComponent: null, includedInNitroBasic: true, detail: null };
      const intl16 = tmp(tmp2[5]).intl;
      obj12[1] = intl16.string(tmp(tmp2[5]).t.SS87rQ);
      const intl17 = tmp(tmp2[5]).intl;
      obj12[2] = intl17.string(tmp(tmp2[5]).t.oD6CRr);
      obj12[3] = tmp(tmp2[20]).NitroWheelIcon;
      items4 = [obj12];
    }
    const arraySpreadResult1 = HermesBuiltin.arraySpread(items4, sum + 1);
    const obj13 = { id: "stickers", label: null, subLabel: null, IconComponent: null, includedInNitroBasic: true, detail: null };
    const intl18 = tmp(tmp2[5]).intl;
    obj13[1] = intl18.string(tmp(tmp2[5]).t.tzdIwI);
    const intl19 = tmp(tmp2[5]).intl;
    obj13[2] = intl19.string(tmp(tmp2[5]).t.hJG8ZN);
    obj13[3] = tmp(tmp2[21]).StickerIcon;
    const obj11 = { image: callback2(tmp2[19]), description: tmp(tmp2[5]).t.A0U9fk };
    obj13[5] = { image: callback2(tmp2[22]), description: tmp(tmp2[5]).t.FXlU24 };
    items[arraySpreadResult1] = obj13;
    const sum1 = arraySpreadResult1 + 1;
    const obj15 = { id: "custom-sounds", label: null, subLabel: null, IconComponent: null, includedInNitroBasic: false, detail: null };
    const intl20 = tmp(tmp2[5]).intl;
    obj15[1] = intl20.string(tmp(tmp2[5]).t.LWsArT);
    const intl21 = tmp(tmp2[5]).intl;
    obj15[2] = intl21.string(tmp(tmp2[5]).t["4lSyCY"]);
    obj15[3] = tmp(tmp2[23]).SoundboardIcon;
    const obj14 = { image: callback2(tmp2[22]), description: tmp(tmp2[5]).t.FXlU24 };
    obj15[5] = { image: callback2(tmp2[24]), description: tmp(tmp2[5]).t["4lSyCY"] };
    items[sum1] = obj15;
    const sum2 = sum1 + 1;
    const obj17 = { id: "entrance-sounds", label: null, subLabel: null, IconComponent: null, includedInNitroBasic: false, detail: null };
    const intl22 = tmp(tmp2[5]).intl;
    obj17[1] = intl22.string(tmp(tmp2[5]).t["f4M+H9"]);
    const intl23 = tmp(tmp2[5]).intl;
    obj17[2] = intl23.string(tmp(tmp2[5]).t["7ZCYvC"]);
    obj17[3] = tmp(tmp2[25]).DoorEnterIcon;
    items[sum2] = obj17;
    const sum3 = sum2 + 1;
    const obj18 = { id: "video-backgrounds", label: null, subLabel: null, IconComponent: null, includedInNitroBasic: true, detail: null };
    const intl24 = tmp(tmp2[5]).intl;
    obj18[1] = intl24.string(tmp(tmp2[5]).t.NaGpTf);
    const intl25 = tmp(tmp2[5]).intl;
    obj18[2] = intl25.string(tmp(tmp2[5]).t["A8O/Qw"]);
    obj18[3] = tmp(tmp2[26]).VideoIcon;
    const obj16 = { image: callback2(tmp2[24]), description: tmp(tmp2[5]).t["4lSyCY"] };
    obj18[5] = { image: callback2(tmp2[27]), description: tmp(tmp2[5]).t["A8O/Qw"] };
    items[sum3] = obj18;
    const sum4 = sum3 + 1;
    const obj20 = { id: "longer-messages", label: null, subLabel: null, IconComponent: null, includedInNitroBasic: false, detail: null };
    const intl26 = tmp(tmp2[5]).intl;
    obj20[1] = intl26.string(tmp(tmp2[5]).t.BUScid);
    const intl27 = tmp(tmp2[5]).intl;
    obj20[2] = intl27.string(tmp(tmp2[5]).t.vN6XpQ);
    obj20[3] = tmp(tmp2[28]).ChatIcon;
    const obj19 = { image: callback2(tmp2[27]), description: tmp(tmp2[5]).t["A8O/Qw"] };
    obj20[5] = { image: callback2(tmp2[29]), description: tmp(tmp2[5]).t.vN6XpQ };
    items[sum4] = obj20;
    const sum5 = sum4 + 1;
    const obj22 = { id: "more-servers", label: null, subLabel: null, IconComponent: null, includedInNitroBasic: false, detail: null };
    const intl28 = tmp(tmp2[5]).intl;
    obj22[1] = intl28.string(tmp(tmp2[5]).t.Bv8Pfk);
    const intl29 = tmp(tmp2[5]).intl;
    obj22[2] = intl29.string(tmp(tmp2[5]).t.JMfaTU);
    obj22[3] = tmp(tmp2[30]).ServerGridIcon;
    const obj21 = { image: callback2(tmp2[29]), description: tmp(tmp2[5]).t.vN6XpQ };
    obj22[5] = { image: callback2(tmp2[31]), description: tmp(tmp2[5]).t.JMfaTU };
    items[sum5] = obj22;
    const sum6 = sum5 + 1;
    const obj24 = { id: "client-themes", label: null, subLabel: null, IconComponent: null, includedInNitroBasic: false, detail: null };
    const intl30 = tmp(tmp2[5]).intl;
    obj24[1] = intl30.string(tmp(tmp2[5]).t.kWM48G);
    const intl31 = tmp(tmp2[5]).intl;
    obj24[2] = intl31.string(tmp(tmp2[5]).t.CjRASJ);
    obj24[3] = tmp(tmp2[32]).PaintPaletteIcon;
    const obj23 = { image: callback2(tmp2[31]), description: tmp(tmp2[5]).t.JMfaTU };
    obj24[5] = { image: callback2(tmp2[33]), description: tmp(tmp2[5]).t.jBTTws };
    items[sum6] = obj24;
    const sum7 = sum6 + 1;
    const obj26 = { id: "display-name-styles", label: null, subLabel: null, IconComponent: null, includedInNitroBasic: false, detail: null };
    const intl32 = tmp(tmp2[5]).intl;
    obj26[1] = intl32.string(tmp(tmp2[5]).t.OLtTrt);
    const intl33 = tmp(tmp2[5]).intl;
    obj26[2] = intl33.string(tmp(tmp2[5]).t["di/pXR"]);
    obj26[3] = tmp(tmp2[34]).LettersIcon;
    items[sum7] = obj26;
    const sum8 = sum7 + 1;
    const obj27 = { id: "permadecos", label: null, subLabel: null, IconComponent: null, includedInNitroBasic: false, detail: null };
    const intl34 = tmp(tmp2[5]).intl;
    obj27[1] = intl34.string(tmp(tmp2[5]).t.L14NZN);
    const intl35 = tmp(tmp2[5]).intl;
    obj27[2] = intl35.string(tmp(tmp2[5]).t.eCZkAI);
    obj27[3] = tmp(tmp2[35]).TrophyIcon;
    items[sum8] = obj27;
    const sum9 = sum8 + 1;
    const obj28 = { id: "early-access", label: null, subLabel: null, IconComponent: null, includedInNitroBasic: false, detail: null };
    const intl36 = tmp(tmp2[5]).intl;
    obj28[1] = intl36.string(tmp(tmp2[5]).t.EYxi0o);
    const intl37 = tmp(tmp2[5]).intl;
    obj28[2] = intl37.string(tmp(tmp2[5]).t.M9AIt1);
    obj28[3] = tmp(tmp2[36]).SparklesIcon;
    items[sum9] = obj28;
    const obj29 = { id: "member-pricing", label: null, subLabel: null, IconComponent: null, includedInNitroBasic: false, detail: null };
    const intl38 = tmp(tmp2[5]).intl;
    obj29[1] = intl38.string(tmp(tmp2[5]).t["H4/NBN"]);
    const intl39 = tmp(tmp2[5]).intl;
    obj29[2] = intl39.string(tmp(tmp2[5]).t.wo3D3T);
    obj29[3] = tmp(tmp2[37]).TagIcon;
    items[sum9 + 1] = obj29;
    let mapped = items;
    callback2 = tmp19;
    mapped = items.map((includedInNitroBasic) => {
      const result = arg1 / mapped.length;
      const result1 = (arg1 + 1) / mapped.length;
      let obj = closure_1_7(result);
      const items = [obj.hex(), closure_1_7(result1).hex()];
      const obj2 = closure_1_7(result1);
      const items1 = [closure_1_8(result).hex(), ];
      const obj3 = closure_1_8(result);
      items1[1] = closure_1_8(result1).hex();
      let tmp4 = closure_1;
      if (closure_1) {
        tmp4 = !includedInNitroBasic.includedInNitroBasic;
      }
      if (closure_1) {
        if (null != includedInNitroBasic.labelBasic) {
          let label = includedInNitroBasic.labelBasic;
        }
        obj = {};
        const merged = Object.assign(includedInNitroBasic);
        obj.label = label;
        obj.iconGradient = items;
        obj.iconGradientBasic = items1;
        obj.disabled = tmp4;
        return obj;
      }
      label = includedInNitroBasic.label;
    });
    const obj30 = { kind: "section-header", id: "explore-perks-header", title: null };
    const intl40 = tmp(tmp2[5]).intl;
    obj30[2] = intl40.string(tmp(tmp2[5]).t["eQX+gg"]);
    if (mapped === closure_1_6.TIER_0) {
      const found = mapped.filter((includedInNitroBasic) => includedInNitroBasic.includedInNitroBasic);
      const found1 = mapped.filter((includedInNitroBasic) => !includedInNitroBasic.includedInNitroBasic);
      if (0 === found1.length) {
        const items5 = [obj30];
        mapped = found;
        HermesBuiltin.arraySpread(found.map((perk) => ({ kind: "perk", perk, start: 0 === arg1, end: arg1 === mapped.length - 1 })), 1);
        let items6 = items5;
      } else {
        items6 = [obj30, ];
        mapped = found;
        const arraySpreadResult3 = HermesBuiltin.arraySpread(found.map((perk) => ({ kind: "perk", perk, start: 0 === arg1, end: arg1 === mapped.length - 1 })), 1);
        const obj31 = { kind: "section-header", id: "nitro-only-perks-header", title: null, highlightNitro: true };
        const intl41 = tmp(tmp2[5]).intl;
        obj31[2] = intl41.string(tmp(tmp2[5]).t.YCZldK);
        items6[arraySpreadResult3] = obj31;
        mapped = found1;
        HermesBuiltin.arraySpread(found1.map((perk) => ({ kind: "perk", perk, start: 0 === arg1, end: arg1 === mapped.length - 1 })), arraySpreadResult3 + 1);
      }
      return items6;
    } else {
      const items7 = [obj30];
      HermesBuiltin.arraySpread(mapped.map((perk) => ({ kind: "perk", perk, start: 0 === arg1, end: arg1 === mapped.length - 1 })), 1);
      return items7;
    }
    const obj25 = { image: callback2(tmp2[33]), description: tmp(tmp2[5]).t.jBTTws };
  }, items);
};