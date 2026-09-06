// discord_app/modules/premium_marketing/native/hooks/useBuyNitroPerks.tsx
import util from "../../../../intl/index.native.tsx";
import ChatIcon from "../../../../design/components/Icon/native/redesign/generated/ChatIcon.tsx";
import AppsIcon from "../../../../design/components/Icon/native/redesign/generated/AppsIcon.tsx";
import useFractionalPremiumInfoDefault from "../../../billing/hooks/useFractionalPremiumInfo.tsx";
import NitroWheelIcon from "../../../../design/components/Icon/native/redesign/generated/NitroWheelIcon.tsx";
import TrophyIcon from "../../../../design/components/Icon/native/redesign/generated/TrophyIcon.tsx";
import ReactionIcon from "../../../../design/components/Icon/native/redesign/generated/ReactionIcon.tsx";
import TagIcon from "../../../../design/components/Icon/native/redesign/generated/TagIcon.tsx";
import ScreenStreamIcon from "../../../../design/components/Icon/native/redesign/generated/ScreenStreamIcon.tsx";
import UploadIcon from "../../../../design/components/Icon/native/redesign/generated/UploadIcon.tsx";
import SuperReactionIcon from "../../../../design/components/Icon/native/redesign/generated/SuperReactionIcon.tsx";
import BoostGemIcon from "../../../../design/components/Icon/native/redesign/generated/BoostGemIcon.tsx";
import UserSquareIcon from "../../../../design/components/Icon/native/redesign/generated/UserSquareIcon.tsx";
import VideoIcon from "../../../../design/components/Icon/native/redesign/generated/VideoIcon.tsx";
import StickerIcon from "../../../../design/components/Icon/native/redesign/generated/StickerIcon.tsx";
import SoundboardIcon from "../../../../design/components/Icon/native/redesign/generated/SoundboardIcon.tsx";
import _modDef13361 from "../../../../../_runtime/metro/13361__.js";
import _modDef13362 from "../../../../../_runtime/metro/13362__.js";
import AppIconUtils from "../../../app_icons/native/AppIconUtils.tsx";
import _modDef13365 from "../../../../../_runtime/metro/13365__.js";
import _modDef13366 from "../../../../../_runtime/metro/13366__.js";
import _modDef13367 from "../../../../../_runtime/metro/13367__.js";
import _modDef13368 from "../../../../../_runtime/metro/13368__.js";
import _modDef13369 from "../../../../../_runtime/metro/13369__.js";
import _modDef13370 from "../../../../../_runtime/metro/13370__.js";
import DoorEnterIcon from "../../../../design/components/Icon/native/redesign/generated/DoorEnterIcon.tsx";
import _modDef13373 from "../../../../../_runtime/metro/13373__.js";
import _modDef13374 from "../../../../../_runtime/metro/13374__.js";
import ServerGridIcon from "../../../../design/components/Icon/native/redesign/generated/ServerGridIcon.tsx";
import _modDef13377 from "../../../../../_runtime/metro/13377__.js";
import PaintPaletteIcon from "../../../../design/components/Icon/native/redesign/generated/PaintPaletteIcon.tsx";
import _modDef13380 from "../../../../../_runtime/metro/13380__.js";
import LettersIcon from "../../../../design/components/Icon/native/redesign/generated/LettersIcon.tsx";
import SparklesIcon from "../../../../design/components/Icon/native/redesign/generated/SparklesIcon.tsx";
import noop from "../../../../../_runtime/metro/00019__.js";
import n from "../../../../../_runtime/metro/00672__.js";

require = fn;
const Gradients = fn(7432).Gradients;
const PremiumConstants = fn(1373);
({
  FractionalPremiumStates: closure_4,
  NUM_FREE_GUILD_BOOSTS_WITH_PREMIUM: hasOwnProperty,
  PremiumTypes: metroRequire,
} = PremiumConstants);
let items = [...Gradients.PREMIUM_TIER_2];
let closure_7 = n.scale(items.reverse()).mode("lab");
let items1 = [...Gradients.PREMIUM_TIER_0];
const scaleResult = n.scale(items.reverse());
let closure_8 = n.scale(items1.reverse()).mode("lab");
const size = fn(2);
let result = size.fileFinishedImporting("modules/premium_marketing/native/hooks/useBuyNitroPerks.tsx");

export default function useBuyNitroPerks(arg0) {
  closure_0 = arg0;
  const tmp = useFractionalPremiumInfoDefault({ forceFetch: true }).fractionalState === constants.FP_ONLY;
  importDefault = tmp;
  let items = [arg0, tmp];
  return noop.useMemo(() => {
    let obj = {
      id: "emoji",
      label: null,
      subLabel: null,
      IconComponent: null,
      includedInNitroBasic: true,
      detail: null,
    };
    const intl = util.intl;
    obj.label = intl.string(util.t["R2IV/Q"]);
    const intl2 = util.intl;
    obj.subLabel = intl2.string(util.t["3cyhe3"]);
    obj.IconComponent = ReactionIcon.ReactionIcon;
    obj = { image: _modDef13361, description: util.t["3SUJLd"] };
    obj.detail = obj;
    let items = [obj, , , , , , , , , , , , , , ,];
    obj = {
      id: "uploads",
      label: null,
      labelBasic: null,
      subLabel: null,
      IconComponent: null,
      includedInNitroBasic: true,
      detail: null,
    };
    const intl3 = util.intl;
    obj.label = intl3.string(util.t["3BtVbk"]);
    const intl4 = util.intl;
    obj.labelBasic = intl4.string(util.t["Zs49/V"]);
    const intl5 = util.intl;
    obj.subLabel = intl5.string(util.t["8AhJqy"]);
    obj.IconComponent = UploadIcon.UploadIcon;
    obj.detail = { image: _modDef13362, description: util.t.i1UuMk };
    items[1] = obj;
    let obj4 = AppIconUtils;
    if (obj4.isAppIconsSupported()) {
      let obj2 = {
        id: "custom-app-icons",
        label: null,
        subLabel: null,
        IconComponent: null,
        includedInNitroBasic: true,
        detail: null,
      };
      const intl6 = util.intl;
      obj2.label = intl6.string(util.t.OuItFi);
      const intl7 = util.intl;
      obj2.subLabel = intl7.string(util.t.mPyrE6);
      obj2.IconComponent = AppsIcon.AppsIcon;
      let items1 = [obj2];
      let items2 = items1;
    } else {
      items2 = [];
    }
    let arraySpreadResult = HermesBuiltin.arraySpread(items2, 2);
    let obj3 = {
      id: "profiles",
      label: null,
      subLabel: null,
      IconComponent: null,
      includedInNitroBasic: false,
      detail: null,
    };
    const intl8 = util.intl;
    obj3.label = intl8.string(util.t["Gv/rQ6"]);
    const intl9 = util.intl;
    obj3.subLabel = intl9.string(util.t["t/Mvdj"]);
    obj3.IconComponent = UserSquareIcon.UserSquareIcon;
    obj4 = { image: _modDef13365, description: util.t.kWcDK8 };
    obj3.detail = obj4;
    items[arraySpreadResult] = obj3;
    if (closure_1) {
      let items3 = [];
    } else {
      const obj5 = {
        id: "boosts",
        label: null,
        subLabel: null,
        IconComponent: null,
        includedInNitroBasic: false,
        detail: null,
      };
      const intl10 = util.intl;
      const obj6 = { numBoosts };
      obj5.label = intl10.formatToPlainString(util.t.DbkNFj, obj6);
      const intl11 = util.intl;
      obj5.subLabel = intl11.string(util.t["n+DGY/"]);
      obj5.IconComponent = BoostGemIcon.BoostGemIcon;
      const obj7 = { image: _modDef13366, description: util.t.jsyNHm };
      obj5.detail = obj7;
      items3 = [obj5];
    }
    arraySpreadResult = HermesBuiltin.arraySpread(items3, arraySpreadResult + 1);
    const obj8 = {
      id: "streaming",
      label: null,
      subLabel: null,
      IconComponent: null,
      includedInNitroBasic: false,
      detail: null,
    };
    const intl12 = util.intl;
    obj8.label = intl12.string(util.t.RSXQYO);
    const intl13 = util.intl;
    obj8.subLabel = intl13.string(util.t.ymCPxp);
    obj8.IconComponent = ScreenStreamIcon.ScreenStreamIcon;
    const obj1 = { image: _modDef13362, description: util.t.i1UuMk };
    const tmp5 = closure_1;
    obj8.detail = { image: _modDef13367, description: util.t.ymCPxp };
    items[arraySpreadResult] = obj8;
    const sum = arraySpreadResult + 1;
    const obj10 = {
      id: "super-reactions",
      label: null,
      subLabel: null,
      IconComponent: null,
      includedInNitroBasic: true,
      detail: null,
    };
    const intl14 = util.intl;
    obj10.label = intl14.string(util.t["uZt5q/"]);
    const intl15 = util.intl;
    obj10.subLabel = intl15.string(util.t.ZK3ZoX);
    obj10.IconComponent = SuperReactionIcon.SuperReactionIcon;
    const obj9 = { image: _modDef13367, description: util.t.ymCPxp };
    obj10.detail = { image: _modDef13368, description: util.t.A0U9fk };
    items[sum] = obj10;
    if (tmp5) {
      let items4 = [];
    } else {
      const obj12 = {
        id: "badge",
        label: null,
        subLabel: null,
        IconComponent: null,
        includedInNitroBasic: true,
        detail: null,
      };
      const intl16 = util.intl;
      obj12.label = intl16.string(util.t.SS87rQ);
      const intl17 = util.intl;
      obj12.subLabel = intl17.string(util.t.oD6CRr);
      obj12.IconComponent = NitroWheelIcon.NitroWheelIcon;
      items4 = [obj12];
    }
    const arraySpreadResult1 = HermesBuiltin.arraySpread(items4, sum + 1);
    const obj13 = {
      id: "stickers",
      label: null,
      subLabel: null,
      IconComponent: null,
      includedInNitroBasic: true,
      detail: null,
    };
    const intl18 = util.intl;
    obj13.label = intl18.string(util.t.tzdIwI);
    const intl19 = util.intl;
    obj13.subLabel = intl19.string(util.t.hJG8ZN);
    obj13.IconComponent = StickerIcon.StickerIcon;
    const obj11 = { image: _modDef13368, description: util.t.A0U9fk };
    obj13.detail = { image: _modDef13369, description: util.t.FXlU24 };
    items[arraySpreadResult1] = obj13;
    const sum1 = arraySpreadResult1 + 1;
    const obj15 = {
      id: "custom-sounds",
      label: null,
      subLabel: null,
      IconComponent: null,
      includedInNitroBasic: false,
      detail: null,
    };
    const intl20 = util.intl;
    obj15.label = intl20.string(util.t.LWsArT);
    const intl21 = util.intl;
    obj15.subLabel = intl21.string(util.t["4lSyCY"]);
    obj15.IconComponent = SoundboardIcon.SoundboardIcon;
    const obj14 = { image: _modDef13369, description: util.t.FXlU24 };
    obj15.detail = { image: _modDef13370, description: util.t["4lSyCY"] };
    items[sum1] = obj15;
    const sum2 = sum1 + 1;
    const obj17 = {
      id: "entrance-sounds",
      label: null,
      subLabel: null,
      IconComponent: null,
      includedInNitroBasic: false,
      detail: null,
    };
    const intl22 = util.intl;
    obj17.label = intl22.string(util.t["f4M+H9"]);
    const intl23 = util.intl;
    obj17.subLabel = intl23.string(util.t["7ZCYvC"]);
    obj17.IconComponent = DoorEnterIcon.DoorEnterIcon;
    items[sum2] = obj17;
    const sum3 = sum2 + 1;
    const obj18 = {
      id: "video-backgrounds",
      label: null,
      subLabel: null,
      IconComponent: null,
      includedInNitroBasic: true,
      detail: null,
    };
    const intl24 = util.intl;
    obj18.label = intl24.string(util.t.NaGpTf);
    const intl25 = util.intl;
    obj18.subLabel = intl25.string(util.t["A8O/Qw"]);
    obj18.IconComponent = VideoIcon.VideoIcon;
    const obj16 = { image: _modDef13370, description: util.t["4lSyCY"] };
    obj18.detail = { image: _modDef13373, description: util.t["A8O/Qw"] };
    items[sum3] = obj18;
    const sum4 = sum3 + 1;
    const obj20 = {
      id: "longer-messages",
      label: null,
      subLabel: null,
      IconComponent: null,
      includedInNitroBasic: false,
      detail: null,
    };
    const intl26 = util.intl;
    obj20.label = intl26.string(util.t.BUScid);
    const intl27 = util.intl;
    obj20.subLabel = intl27.string(util.t.vN6XpQ);
    obj20.IconComponent = ChatIcon.ChatIcon;
    const obj19 = { image: _modDef13373, description: util.t["A8O/Qw"] };
    obj20.detail = { image: _modDef13374, description: util.t.vN6XpQ };
    items[sum4] = obj20;
    const sum5 = sum4 + 1;
    const obj22 = {
      id: "more-servers",
      label: null,
      subLabel: null,
      IconComponent: null,
      includedInNitroBasic: false,
      detail: null,
    };
    const intl28 = util.intl;
    obj22.label = intl28.string(util.t.Bv8Pfk);
    const intl29 = util.intl;
    obj22.subLabel = intl29.string(util.t.JMfaTU);
    obj22.IconComponent = ServerGridIcon.ServerGridIcon;
    const obj21 = { image: _modDef13374, description: util.t.vN6XpQ };
    obj22.detail = { image: _modDef13377, description: util.t.JMfaTU };
    items[sum5] = obj22;
    const sum6 = sum5 + 1;
    const obj24 = {
      id: "client-themes",
      label: null,
      subLabel: null,
      IconComponent: null,
      includedInNitroBasic: false,
      detail: null,
    };
    const intl30 = util.intl;
    obj24.label = intl30.string(util.t.kWM48G);
    const intl31 = util.intl;
    obj24.subLabel = intl31.string(util.t.CjRASJ);
    obj24.IconComponent = PaintPaletteIcon.PaintPaletteIcon;
    const obj23 = { image: _modDef13377, description: util.t.JMfaTU };
    obj24.detail = { image: _modDef13380, description: util.t.jBTTws };
    items[sum6] = obj24;
    const sum7 = sum6 + 1;
    const obj26 = {
      id: "display-name-styles",
      label: null,
      subLabel: null,
      IconComponent: null,
      includedInNitroBasic: false,
      detail: null,
    };
    const intl32 = util.intl;
    obj26.label = intl32.string(util.t.OLtTrt);
    const intl33 = util.intl;
    obj26.subLabel = intl33.string(util.t["di/pXR"]);
    obj26.IconComponent = LettersIcon.LettersIcon;
    items[sum7] = obj26;
    const sum8 = sum7 + 1;
    const obj27 = {
      id: "permadecos",
      label: null,
      subLabel: null,
      IconComponent: null,
      includedInNitroBasic: false,
      detail: null,
    };
    const intl34 = util.intl;
    obj27.label = intl34.string(util.t.L14NZN);
    const intl35 = util.intl;
    obj27.subLabel = intl35.string(util.t.eCZkAI);
    obj27.IconComponent = TrophyIcon.TrophyIcon;
    items[sum8] = obj27;
    const sum9 = sum8 + 1;
    const obj28 = {
      id: "early-access",
      label: null,
      subLabel: null,
      IconComponent: null,
      includedInNitroBasic: false,
      detail: null,
    };
    const intl36 = util.intl;
    obj28.label = intl36.string(util.t.EYxi0o);
    const intl37 = util.intl;
    obj28.subLabel = intl37.string(util.t.M9AIt1);
    obj28.IconComponent = SparklesIcon.SparklesIcon;
    items[sum9] = obj28;
    const obj29 = {
      id: "member-pricing",
      label: null,
      subLabel: null,
      IconComponent: null,
      includedInNitroBasic: false,
      detail: null,
    };
    const intl38 = util.intl;
    obj29.label = intl38.string(util.t["H4/NBN"]);
    const intl39 = util.intl;
    obj29.subLabel = intl39.string(util.t.wo3D3T);
    obj29.IconComponent = TagIcon.TagIcon;
    items[sum9 + 1] = obj29;
    closure_1 = tmp19;
    let mapped = items.map((includedInNitroBasic, index) => {
      const result = index / mapped.length;
      const result1 = (index + 1) / mapped.length;
      let obj = closure_2_7(result);
      const items = [obj.hex(), closure_2_7(result1).hex()];
      const obj2 = closure_2_7(result1);
      const items1 = [closure_2_8(result).hex()];
      const obj3 = closure_2_8(result);
      items1[1] = closure_2_8(result1).hex();
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
      const obj4 = closure_2_8(result1);
    });
    const obj30 = { kind: "section-header", id: "explore-perks-header", title: null };
    const intl40 = util.intl;
    obj30.title = intl40.string(util.t["eQX+gg"]);
    if (closure_0 === TIER_0.TIER_0) {
      const found = mapped.filter((includedInNitroBasic) => includedInNitroBasic.includedInNitroBasic);
      const found1 = mapped.filter((includedInNitroBasic) => !includedInNitroBasic.includedInNitroBasic);
      if (0 === found1.length) {
        const items5 = [obj30];
        mapped = found;
        HermesBuiltin.arraySpread(
          found.map((perk, index) => ({ kind: "perk", perk, start: 0 === index, end: index === mapped.length - 1 })),
          1,
        );
        let items6 = items5;
      } else {
        items6 = [obj30];
        const arraySpreadResult3 = HermesBuiltin.arraySpread(
          found.map((perk, index) => ({ kind: "perk", perk, start: 0 === index, end: index === mapped.length - 1 })),
          1,
        );
        const obj31 = { kind: "section-header", id: "nitro-only-perks-header", title: null, highlightNitro: true };
        const intl41 = util.intl;
        obj31.title = intl41.string(util.t.YCZldK);
        items6[arraySpreadResult3] = obj31;
        mapped = found1;
        HermesBuiltin.arraySpread(
          found1.map((perk, index) => ({ kind: "perk", perk, start: 0 === index, end: index === mapped.length - 1 })),
          arraySpreadResult3 + 1,
        );
      }
      return items6;
    } else {
      const items7 = [obj30];
      HermesBuiltin.arraySpread(
        mapped.map((perk, index) => ({ kind: "perk", perk, start: 0 === index, end: index === mapped.length - 1 })),
        1,
      );
      return items7;
    }
    const obj25 = { image: _modDef13380, description: util.t.jBTTws };
  }, items);
}
