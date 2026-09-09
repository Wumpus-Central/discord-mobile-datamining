// discord_app/modules/premium_marketing/native/hooks/useBuyNitroPerks.tsx
import util from "../../../../intl/index.native.tsx";
import PremiumUtils from "../../../../utils/PremiumUtils.tsx";
import ChatIcon from "../../../../design/components/Icon/native/redesign/generated/ChatIcon.tsx";
import AppsIcon from "../../../../design/components/Icon/native/redesign/generated/AppsIcon.tsx";
import NitroFileUploadExperiments from "../../../premium/experiments/NitroFileUploadExperiments.tsx";
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
import _modDef13388 from "../../../../../_runtime/metro/13388__.js";
import _modDef13389 from "../../../../../_runtime/metro/13389__.js";
import AppIconUtils from "../../../app_icons/native/AppIconUtils.tsx";
import _modDef13392 from "../../../../../_runtime/metro/13392__.js";
import _modDef13393 from "../../../../../_runtime/metro/13393__.js";
import _modDef13394 from "../../../../../_runtime/metro/13394__.js";
import _modDef13395 from "../../../../../_runtime/metro/13395__.js";
import _modDef13396 from "../../../../../_runtime/metro/13396__.js";
import _modDef13397 from "../../../../../_runtime/metro/13397__.js";
import DoorEnterIcon from "../../../../design/components/Icon/native/redesign/generated/DoorEnterIcon.tsx";
import _modDef13400 from "../../../../../_runtime/metro/13400__.js";
import _modDef13401 from "../../../../../_runtime/metro/13401__.js";
import ServerGridIcon from "../../../../design/components/Icon/native/redesign/generated/ServerGridIcon.tsx";
import _modDef13404 from "../../../../../_runtime/metro/13404__.js";
import PaintPaletteIcon from "../../../../design/components/Icon/native/redesign/generated/PaintPaletteIcon.tsx";
import _modDef13407 from "../../../../../_runtime/metro/13407__.js";
import LettersIcon from "../../../../design/components/Icon/native/redesign/generated/LettersIcon.tsx";
import SparklesIcon from "../../../../design/components/Icon/native/redesign/generated/SparklesIcon.tsx";
import noop from "../../../../../_runtime/metro/00019__.js";
import n from "../../../../../_runtime/metro/00672__.js";

require = fn;
const Gradients = fn(7446).Gradients;
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
    let obj = PremiumUtils;
    const maxFileSizeForPremiumType = obj.getMaxFileSizeForPremiumType(TIER_2.TIER_2, { useSpace: false });
    obj = { id: "emoji", label: null, subLabel: null, IconComponent: null, includedInNitroBasic: true, detail: null };
    const intl = util.intl;
    obj.label = intl.string(util.t["R2IV/Q"]);
    const intl2 = util.intl;
    obj.subLabel = intl2.string(util.t["3cyhe3"]);
    obj.IconComponent = ReactionIcon.ReactionIcon;
    obj = { image: _modDef13388, description: util.t["3SUJLd"] };
    obj.detail = obj;
    let items = [obj, , , , , , , , , , , , , , ,];
    const obj1 = {
      id: "uploads",
      label: null,
      labelBasic: null,
      subLabel: null,
      IconComponent: null,
      includedInNitroBasic: true,
      detail: null,
    };
    let obj4 = NitroFileUploadExperiments;
    let obj2 = { legacyCopy: null, rolloutCopy: null };
    const intl3 = util.intl;
    obj2.legacyCopy = intl3.string(util.t["3BtVbk"]);
    const intl4 = util.intl;
    obj2.rolloutCopy = intl4.formatToPlainString(util.t.vjcKsF, { maxFileSize: maxFileSizeForPremiumType });
    obj1.label = obj4.getNitroFileUploadRolloutCopy(obj2);
    const intl5 = util.intl;
    obj1.labelBasic = intl5.string(util.t["Zs49/V"]);
    const intl6 = util.intl;
    obj1.subLabel = intl6.string(util.t["8AhJqy"]);
    obj1.IconComponent = UploadIcon.UploadIcon;
    let obj3 = { image: _modDef13389, description: null };
    let obj7 = NitroFileUploadExperiments;
    obj4 = { legacyCopy: null, rolloutCopy: null };
    const intl7 = util.intl;
    obj4.legacyCopy = intl7.string(util.t.i1UuMk);
    const intl8 = util.intl;
    obj4.rolloutCopy = intl8.formatToPlainString(util.t.PvqncD, { maxFileSize: maxFileSizeForPremiumType });
    obj3.description = obj7.getNitroFileUploadRolloutCopy(obj4);
    obj1.detail = obj3;
    items[1] = obj1;
    let obj9 = AppIconUtils;
    if (obj9.isAppIconsSupported()) {
      const obj5 = {
        id: "custom-app-icons",
        label: null,
        subLabel: null,
        IconComponent: null,
        includedInNitroBasic: true,
        detail: null,
      };
      const intl9 = util.intl;
      obj5.label = intl9.string(util.t.OuItFi);
      const intl10 = util.intl;
      obj5.subLabel = intl10.string(util.t.mPyrE6);
      obj5.IconComponent = AppsIcon.AppsIcon;
      let items1 = [obj5];
      let items2 = items1;
    } else {
      items2 = [];
    }
    let arraySpreadResult = HermesBuiltin.arraySpread(items2, 2);
    const obj6 = {
      id: "profiles",
      label: null,
      subLabel: null,
      IconComponent: null,
      includedInNitroBasic: false,
      detail: null,
    };
    const intl11 = util.intl;
    obj6.label = intl11.string(util.t["Gv/rQ6"]);
    const intl12 = util.intl;
    obj6.subLabel = intl12.string(util.t["t/Mvdj"]);
    obj6.IconComponent = UserSquareIcon.UserSquareIcon;
    obj7 = { image: _modDef13392, description: util.t.kWcDK8 };
    obj6.detail = obj7;
    items[arraySpreadResult] = obj6;
    if (closure_1) {
      let items3 = [];
    } else {
      const obj8 = {
        id: "boosts",
        label: null,
        subLabel: null,
        IconComponent: null,
        includedInNitroBasic: false,
        detail: null,
      };
      const intl13 = util.intl;
      obj9 = { numBoosts };
      obj8.label = intl13.formatToPlainString(util.t.DbkNFj, obj9);
      const intl14 = util.intl;
      obj8.subLabel = intl14.string(util.t["n+DGY/"]);
      obj8.IconComponent = BoostGemIcon.BoostGemIcon;
      const obj10 = { image: _modDef13393, description: util.t.jsyNHm };
      obj8.detail = obj10;
      items3 = [obj8];
    }
    arraySpreadResult = HermesBuiltin.arraySpread(items3, arraySpreadResult + 1);
    const obj11 = {
      id: "streaming",
      label: null,
      subLabel: null,
      IconComponent: null,
      includedInNitroBasic: false,
      detail: null,
    };
    const intl15 = util.intl;
    obj11.label = intl15.string(util.t.RSXQYO);
    const intl16 = util.intl;
    obj11.subLabel = intl16.string(util.t.ymCPxp);
    obj11.IconComponent = ScreenStreamIcon.ScreenStreamIcon;
    obj11.detail = { image: _modDef13394, description: util.t.ymCPxp };
    items[arraySpreadResult] = obj11;
    const sum = arraySpreadResult + 1;
    const obj13 = {
      id: "super-reactions",
      label: null,
      subLabel: null,
      IconComponent: null,
      includedInNitroBasic: true,
      detail: null,
    };
    const intl17 = util.intl;
    obj13.label = intl17.string(util.t["uZt5q/"]);
    const intl18 = util.intl;
    obj13.subLabel = intl18.string(util.t.ZK3ZoX);
    obj13.IconComponent = SuperReactionIcon.SuperReactionIcon;
    const obj12 = { image: _modDef13394, description: util.t.ymCPxp };
    const tmp7 = closure_1;
    obj13.detail = { image: _modDef13395, description: util.t.A0U9fk };
    items[sum] = obj13;
    if (tmp7) {
      let items4 = [];
    } else {
      const obj15 = {
        id: "badge",
        label: null,
        subLabel: null,
        IconComponent: null,
        includedInNitroBasic: true,
        detail: null,
      };
      const intl19 = util.intl;
      obj15.label = intl19.string(util.t.SS87rQ);
      const intl20 = util.intl;
      obj15.subLabel = intl20.string(util.t.oD6CRr);
      obj15.IconComponent = NitroWheelIcon.NitroWheelIcon;
      items4 = [obj15];
    }
    const arraySpreadResult1 = HermesBuiltin.arraySpread(items4, sum + 1);
    const obj16 = {
      id: "stickers",
      label: null,
      subLabel: null,
      IconComponent: null,
      includedInNitroBasic: true,
      detail: null,
    };
    const intl21 = util.intl;
    obj16.label = intl21.string(util.t.tzdIwI);
    const intl22 = util.intl;
    obj16.subLabel = intl22.string(util.t.hJG8ZN);
    obj16.IconComponent = StickerIcon.StickerIcon;
    const obj14 = { image: _modDef13395, description: util.t.A0U9fk };
    obj16.detail = { image: _modDef13396, description: util.t.FXlU24 };
    items[arraySpreadResult1] = obj16;
    const sum1 = arraySpreadResult1 + 1;
    const obj18 = {
      id: "custom-sounds",
      label: null,
      subLabel: null,
      IconComponent: null,
      includedInNitroBasic: false,
      detail: null,
    };
    const intl23 = util.intl;
    obj18.label = intl23.string(util.t.LWsArT);
    const intl24 = util.intl;
    obj18.subLabel = intl24.string(util.t["4lSyCY"]);
    obj18.IconComponent = SoundboardIcon.SoundboardIcon;
    const obj17 = { image: _modDef13396, description: util.t.FXlU24 };
    obj18.detail = { image: _modDef13397, description: util.t["4lSyCY"] };
    items[sum1] = obj18;
    const sum2 = sum1 + 1;
    const obj20 = {
      id: "entrance-sounds",
      label: null,
      subLabel: null,
      IconComponent: null,
      includedInNitroBasic: false,
      detail: null,
    };
    const intl25 = util.intl;
    obj20.label = intl25.string(util.t["f4M+H9"]);
    const intl26 = util.intl;
    obj20.subLabel = intl26.string(util.t["7ZCYvC"]);
    obj20.IconComponent = DoorEnterIcon.DoorEnterIcon;
    items[sum2] = obj20;
    const sum3 = sum2 + 1;
    const obj21 = {
      id: "video-backgrounds",
      label: null,
      subLabel: null,
      IconComponent: null,
      includedInNitroBasic: true,
      detail: null,
    };
    const intl27 = util.intl;
    obj21.label = intl27.string(util.t.NaGpTf);
    const intl28 = util.intl;
    obj21.subLabel = intl28.string(util.t["A8O/Qw"]);
    obj21.IconComponent = VideoIcon.VideoIcon;
    const obj19 = { image: _modDef13397, description: util.t["4lSyCY"] };
    obj21.detail = { image: _modDef13400, description: util.t["A8O/Qw"] };
    items[sum3] = obj21;
    const sum4 = sum3 + 1;
    const obj23 = {
      id: "longer-messages",
      label: null,
      subLabel: null,
      IconComponent: null,
      includedInNitroBasic: false,
      detail: null,
    };
    const intl29 = util.intl;
    obj23.label = intl29.string(util.t.BUScid);
    const intl30 = util.intl;
    obj23.subLabel = intl30.string(util.t.vN6XpQ);
    obj23.IconComponent = ChatIcon.ChatIcon;
    const obj22 = { image: _modDef13400, description: util.t["A8O/Qw"] };
    obj23.detail = { image: _modDef13401, description: util.t.vN6XpQ };
    items[sum4] = obj23;
    const sum5 = sum4 + 1;
    const obj25 = {
      id: "more-servers",
      label: null,
      subLabel: null,
      IconComponent: null,
      includedInNitroBasic: false,
      detail: null,
    };
    const intl31 = util.intl;
    obj25.label = intl31.string(util.t.Bv8Pfk);
    const intl32 = util.intl;
    obj25.subLabel = intl32.string(util.t.JMfaTU);
    obj25.IconComponent = ServerGridIcon.ServerGridIcon;
    const obj24 = { image: _modDef13401, description: util.t.vN6XpQ };
    obj25.detail = { image: _modDef13404, description: util.t.JMfaTU };
    items[sum5] = obj25;
    const sum6 = sum5 + 1;
    const obj27 = {
      id: "client-themes",
      label: null,
      subLabel: null,
      IconComponent: null,
      includedInNitroBasic: false,
      detail: null,
    };
    const intl33 = util.intl;
    obj27.label = intl33.string(util.t.kWM48G);
    const intl34 = util.intl;
    obj27.subLabel = intl34.string(util.t.CjRASJ);
    obj27.IconComponent = PaintPaletteIcon.PaintPaletteIcon;
    const obj26 = { image: _modDef13404, description: util.t.JMfaTU };
    obj27.detail = { image: _modDef13407, description: util.t.jBTTws };
    items[sum6] = obj27;
    const sum7 = sum6 + 1;
    const obj29 = {
      id: "display-name-styles",
      label: null,
      subLabel: null,
      IconComponent: null,
      includedInNitroBasic: false,
      detail: null,
    };
    const intl35 = util.intl;
    obj29.label = intl35.string(util.t.OLtTrt);
    const intl36 = util.intl;
    obj29.subLabel = intl36.string(util.t["di/pXR"]);
    obj29.IconComponent = LettersIcon.LettersIcon;
    items[sum7] = obj29;
    const sum8 = sum7 + 1;
    const obj30 = {
      id: "permadecos",
      label: null,
      subLabel: null,
      IconComponent: null,
      includedInNitroBasic: false,
      detail: null,
    };
    const intl37 = util.intl;
    obj30.label = intl37.string(util.t.L14NZN);
    const intl38 = util.intl;
    obj30.subLabel = intl38.string(util.t.eCZkAI);
    obj30.IconComponent = TrophyIcon.TrophyIcon;
    items[sum8] = obj30;
    const sum9 = sum8 + 1;
    const obj31 = {
      id: "early-access",
      label: null,
      subLabel: null,
      IconComponent: null,
      includedInNitroBasic: false,
      detail: null,
    };
    const intl39 = util.intl;
    obj31.label = intl39.string(util.t.EYxi0o);
    const intl40 = util.intl;
    obj31.subLabel = intl40.string(util.t.M9AIt1);
    obj31.IconComponent = SparklesIcon.SparklesIcon;
    items[sum9] = obj31;
    const obj32 = {
      id: "member-pricing",
      label: null,
      subLabel: null,
      IconComponent: null,
      includedInNitroBasic: false,
      detail: null,
    };
    const intl41 = util.intl;
    obj32.label = intl41.string(util.t["H4/NBN"]);
    const intl42 = util.intl;
    obj32.subLabel = intl42.string(util.t.wo3D3T);
    obj32.IconComponent = TagIcon.TagIcon;
    items[sum9 + 1] = obj32;
    closure_1 = tmp21;
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
    const obj33 = { kind: "section-header", id: "explore-perks-header", title: null };
    const intl43 = util.intl;
    obj33.title = intl43.string(util.t["eQX+gg"]);
    if (closure_0 === TIER_2.TIER_0) {
      const found = mapped.filter((includedInNitroBasic) => includedInNitroBasic.includedInNitroBasic);
      const found1 = mapped.filter((includedInNitroBasic) => !includedInNitroBasic.includedInNitroBasic);
      if (0 === found1.length) {
        const items5 = [obj33];
        mapped = found;
        HermesBuiltin.arraySpread(
          found.map((perk, index) => ({ kind: "perk", perk, start: 0 === index, end: index === mapped.length - 1 })),
          1,
        );
        let items6 = items5;
      } else {
        items6 = [obj33];
        const arraySpreadResult3 = HermesBuiltin.arraySpread(
          found.map((perk, index) => ({ kind: "perk", perk, start: 0 === index, end: index === mapped.length - 1 })),
          1,
        );
        const obj34 = { kind: "section-header", id: "nitro-only-perks-header", title: null, highlightNitro: true };
        const intl44 = util.intl;
        obj34.title = intl44.string(util.t.YCZldK);
        items6[arraySpreadResult3] = obj34;
        mapped = found1;
        HermesBuiltin.arraySpread(
          found1.map((perk, index) => ({ kind: "perk", perk, start: 0 === index, end: index === mapped.length - 1 })),
          arraySpreadResult3 + 1,
        );
      }
      return items6;
    } else {
      const items7 = [obj33];
      HermesBuiltin.arraySpread(
        mapped.map((perk, index) => ({ kind: "perk", perk, start: 0 === index, end: index === mapped.length - 1 })),
        1,
      );
      return items7;
    }
    const obj28 = { image: _modDef13407, description: util.t.jBTTws };
  }, items);
}
