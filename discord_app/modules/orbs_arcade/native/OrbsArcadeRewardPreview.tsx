// discord_app/modules/orbs_arcade/native/OrbsArcadeRewardPreview.tsx
import c from "../../../../_runtime/00576_c.js";
import nativeDefault from "../../../../discord_common/js/packages/tokens/native.tsx";
import CollectiblesAssetUtils from "../../collectibles/utils/CollectiblesAssetUtils.tsx";
import FastImageDefault from "../../../components_native/common/FastImage.tsx";
import AvatarDecorationSampleV2 from "../../collectibles/native/AvatarDecorationSampleV2.tsx";
import _modDef9404 from "../../../../_runtime/metro/09404__.js";
import NitroCoinSpotIllustration from "../../../design/components/mana-assets/native/generated/NitroCoinSpotIllustration.native.tsx";
import OrbsArcadeTypes from "../OrbsArcadeTypes.tsx";
import noop from "../../../../_runtime/metro/00019__.js";

require = fn;
const View = fn(17).View;
const jsxProd = fn(21);
({ jsx: closure_4, jsxs: hasOwnProperty } = jsxProd);
const createStyles = fn(4971);
let closure_6 = createStyles.createStyles((width) => {
  const obj = {
    container: { width, height: width, alignItems: "center", justifyContent: "center" },
    avatar: null,
    decoration: null,
  };
  const size = {
    width: width * AvatarDecorationSampleV2.avatarPlaceholderSizeRatio,
    height: width * AvatarDecorationSampleV2.avatarPlaceholderSizeRatio,
    borderRadius: (width * AvatarDecorationSampleV2.avatarPlaceholderSizeRatio) / 2,
    opacity: 0.8,
    backgroundColor: nativeDefault.colors.BACKGROUND_BASE_LOWER,
  };
  obj.avatar = size;
  obj.decoration = { position: "absolute", width, height: width };
  return obj;
});
let ReactCompilerGating = fn(558);
let closure_7 = ReactCompilerGating.isReactCompilerEnabled()
  ? function CollectibleRewardPreview(reward) {
      const cResult = c.c(11);
      reward = reward.reward;
      const tmp4 = closure_6(reward.size);
      if (cResult[0] !== reward.skuId) {
        const obj2 = { skuId: reward.skuId, assetFormat: CollectiblesAssetUtils.CollectiblesItemAssetFormat.STATIC };
        const collectiblesItemAssetUrl = CollectiblesAssetUtils.getCollectiblesItemAssetUrl(obj2);
        cResult[0] = reward.skuId;
        cResult[1] = collectiblesItemAssetUrl;
        let tmp5 = collectiblesItemAssetUrl;
        const tmpResult = CollectiblesAssetUtils;
      } else {
        tmp5 = cResult[1];
      }
      if (cResult[2] !== tmp4.avatar) {
        const obj3 = { style: tmp4.avatar, resizeMode: "contain", source: _modDef9404, accessible: false };
        const tmp11 = React4(FastImageDefault, obj3);
        cResult[2] = tmp4.avatar;
        cResult[3] = tmp11;
        let tmp7 = tmp11;
      } else {
        tmp7 = cResult[3];
      }
      if (cResult[4] === tmp5) {
        if (cResult[5] === tmp4.decoration) {
          let tmp12 = cResult[6];
        }
        if (cResult[7] === tmp4.container) {
          if (cResult[8] === tmp7) {
            if (cResult[9] === tmp12) {
              let tmp16 = cResult[10];
            }
            return tmp16;
          }
        }
        const obj4 = { style: tmp4.container, children: null };
        const items = [tmp7, tmp12];
        obj4.children = items;
        const tmp19 = hasOwnProperty(View, obj4);
        cResult[7] = tmp4.container;
        cResult[8] = tmp7;
        cResult[9] = tmp12;
        cResult[10] = tmp19;
        tmp16 = tmp19;
      }
      let tmp13 = null;
      if (null != tmp5) {
        const obj5 = { style: tmp4.decoration, source: null, accessible: false };
        const obj6 = { uri: tmp5 };
        obj5.source = obj6;
        tmp13 = React4(FastImageDefault, obj5);
      }
      cResult[4] = tmp5;
      cResult[5] = tmp4.decoration;
      cResult[6] = tmp13;
      tmp12 = tmp13;
    }
  : function CollectibleRewardPreview(size) {
      const tmp = closure_6(size.size);
      const obj = CollectiblesAssetUtils;
      const collectiblesItemAssetUrl = obj.getCollectiblesItemAssetUrl({
        skuId: size.reward.skuId,
        assetFormat: CollectiblesAssetUtils.CollectiblesItemAssetFormat.STATIC,
      });
      const obj3 = { style: tmp.container, children: null };
      const obj4 = { style: tmp.avatar, resizeMode: "contain", source: null, accessible: false };
      const obj2 = { skuId: size.reward.skuId, assetFormat: CollectiblesAssetUtils.CollectiblesItemAssetFormat.STATIC };
      obj4.source = _modDef9404;
      const items = [React4(FastImageDefault, obj4)];
      let tmp6Result = null;
      if (null != collectiblesItemAssetUrl) {
        const obj5 = { style: tmp.decoration, source: null, accessible: false };
        const obj6 = { uri: collectiblesItemAssetUrl };
        obj5.source = obj6;
        tmp6Result = React4(FastImageDefault, obj5);
      }
      items[1] = tmp6Result;
      obj3.children = items;
      return hasOwnProperty(View, obj3);
    };
ReactCompilerGating = fn(558);
let size = fn(2);
const result = size.fileFinishedImporting("modules/orbs_arcade/native/OrbsArcadeRewardPreview.tsx");

export default ReactCompilerGating.isReactCompilerEnabled()
  ? function OrbsArcadeRewardPreview(arg0) {
      const cResult = c.c(5);
      ({ reward, size } = arg0);
      const type = reward.type;
      if (OrbsArcadeTypes.OrbsArcadeRewardType.COLLECTIBLE === type) {
        if (cResult[0] === reward) {
          if (cResult[1] === size) {
            let tmp7 = cResult[2];
          }
          return tmp7;
        }
        const obj2 = { reward, size };
        const tmp10 = React4(closure_7, obj2);
        cResult[0] = reward;
        cResult[1] = size;
        cResult[2] = tmp10;
        tmp7 = tmp10;
      } else if (OrbsArcadeTypes.OrbsArcadeRewardType.FRACTIONAL_PREMIUM === type) {
        if (cResult[3] !== size) {
          const size1 = { width: size, height: size };
          const tmp6 = React4(NitroCoinSpotIllustration.NitroCoinSpotIllustration, size1);
          cResult[3] = size;
          cResult[4] = tmp6;
          let tmp4 = tmp6;
        } else {
          tmp4 = cResult[4];
        }
        return tmp4;
      }
    }
  : function OrbsArcadeRewardPreview(arg0) {
      ({ reward, size } = arg0);
      const type = reward.type;
      if (OrbsArcadeTypes.OrbsArcadeRewardType.COLLECTIBLE === type) {
        const obj = { reward, size };
        return React4(closure_7, obj);
      } else if (OrbsArcadeTypes.OrbsArcadeRewardType.FRACTIONAL_PREMIUM === type) {
        const size1 = { width: size, height: size };
        return React4(NitroCoinSpotIllustration.NitroCoinSpotIllustration, size1);
      }
    };
