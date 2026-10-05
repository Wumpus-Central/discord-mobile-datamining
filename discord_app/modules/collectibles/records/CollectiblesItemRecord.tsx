// discord_app/modules/collectibles/records/CollectiblesItemRecord.tsx
import CollectiblesItemType from "../../../../discord_common/js/shared/shared-constants/CollectiblesItemType.tsx";
import AvatarDecorationRecord from "AvatarDecorationRecord.tsx";
import NameplateRecord from "NameplateRecord.tsx";
import ProfileEffectRecord from "ProfileEffectRecord.tsx";
import ProfileFrameRecord from "ProfileFrameRecord.tsx";
import UnknownCollectiblesItemRecord from "UnknownCollectiblesItemRecord.tsx";
import Constants from "../../../Constants.tsx";
import size from "../../../../_runtime/metro/00002__.js";

let metroImportAll;
let metroImportDefault;
({ SKUProductLines: metroImportDefault, SKUTypes: metroImportAll } = Constants);
const result = size.fileFinishedImporting("modules/collectibles/records/CollectiblesItemRecord.tsx");
function transformSKUToCollectiblesItem(productLine) {
  let effects;
  let previewAssetPaths;
  let tmp102;
  let tmp16;
  let tmp20;
  let tmp8;
  if (productLine.productLine === metroImportDefault.COLLECTIBLES) {
    if (productLine.type === metroImportAll.BUNDLE) {
      const items = [];
      let bundledSkus = productLine.bundledSkus;
      if (bundledSkus == null) {
        bundledSkus = [];
      }
      const tmp24 = bundledSkus[Symbol.iterator]();
      while (tmp24 !== undefined) {
        let tmp29 = transformSKUToCollectiblesItem(tmp26);
        let type1;
        let tmp30 = tmp29;
        if (tmp29 != null) {
          type1 = tmp29.type;
        }
        if ("single" === type1) {
          let arr = items.push(tmp30.item);
        }
        continue;
      }
      if (0 !== items.length) {
        const obj4 = { type: "bundle", items, previewAssets: previewAssetPaths };
        previewAssetPaths = productLine.previewAssetPaths;
        return obj4;
      }
    } else {
      const tenantMetadata = productLine.tenantMetadata;
      let collectibles;
      if (tenantMetadata != null) {
        collectibles = tenantMetadata.collectibles;
      }
      let item;
      if (collectibles != null) {
        item = collectibles.item;
      }
      if (null != item) {
        const type = item.type;
        if (CollectiblesItemType.CollectiblesItemType.AVATAR_DECORATION === type) {
          const obj5 = { type: "single", item: tmp20 };
          const obj7 = { skuId: productLine.id, type: null, asset: null, label: null };
          ({ type: obj8.type, asset: obj8.asset, label: obj8.label } = item);
          const self7 = this;
          const self8 = this;
          tmp20 = new AvatarDecorationRecord(obj7);
          return obj5;
        } else if (CollectiblesItemType.CollectiblesItemType.NAMEPLATE === type) {
          const obj17 = { skuId: productLine.id, type: null, asset: null, label: null, palette: null };
          const obj9 = { type: "single", item: tmp16 };
          ({ type: obj6.type, asset: obj6.asset, label: obj6.label, palette: obj6.palette } = item);
          const self5 = this;
          const self6 = this;
          tmp16 = new NameplateRecord(obj17);
          return obj9;
        } else if (CollectiblesItemType.CollectiblesItemType.PROFILE_EFFECT === type) {
          const obj18 = {
            skuId: productLine.id,
            type: null,
            title: null,
            description: null,
            thumbnailPreviewSrc: null,
            reducedMotionSrc: null,
            effects,
            accessibilityLabel: null,
            animationType: null,
            staticFrameSrc: null,
          };
          ({
            type: obj3.type,
            title: obj3.title,
            description: obj3.description,
            thumbnailPreviewSrc: obj3.thumbnailPreviewSrc,
            reducedMotionSrc: obj3.reducedMotionSrc,
            effects,
          } = item);
          if (effects == null) {
            effects = [];
          }
          const obj19 = { type: "single", item: tmp102 };
          ({
            accessibilityLabel: obj3.accessibilityLabel,
            animationType: obj3.animationType,
            staticFrameSrc: obj3.staticFrameSrc,
          } = item);
          const self3 = this;
          const self4 = this;
          tmp102 = new ProfileEffectRecord(obj18);
          return obj19;
        } else if (CollectiblesItemType.CollectiblesItemType.PROFILE_FRAME === type) {
          const obj = { type: "single", item: tmp8 };
          const obj20 = {
            skuId: productLine.id,
            type: null,
            label: null,
            layers: null,
            innerWidth: null,
            overflowTop: null,
            overflowBottom: null,
            overflowHorizontal: null,
          };
          ({
            type: obj2.type,
            label: obj2.label,
            layers: obj2.layers,
            innerWidth: obj2.innerWidth,
            overflowTop: obj2.overflowTop,
            overflowBottom: obj2.overflowBottom,
            overflowHorizontal: obj2.overflowHorizontal,
          } = item);
          const self = this;
          const self2 = this;
          tmp8 = new ProfileFrameRecord(obj20);
          return obj;
        }
      }
    }
  }
}

export const createCollectiblesItemsFromServerResponse = function createCollectiblesItemsFromServerResponse(arr) {
  let items;
  if (null == arr) {
    items = [];
  } else {
    items = arr.reduce((arr, type) => {
      type = type.type;
      if (CollectiblesItemType.CollectiblesItemType.AVATAR_DECORATION === type) {
        arr = arr.push(AvatarDecorationRecord.fromServer(type));
      } else if (CollectiblesItemType.CollectiblesItemType.NAMEPLATE === type) {
        arr.push(NameplateRecord.fromServer(type));
      } else if (CollectiblesItemType.CollectiblesItemType.PROFILE_EFFECT === type) {
        arr.push(ProfileEffectRecord.fromServer(type));
      } else if (CollectiblesItemType.CollectiblesItemType.PROFILE_FRAME === type) {
        arr.push(ProfileFrameRecord.fromServer(type));
      } else {
        arr.push(UnknownCollectiblesItemRecord.fromServer(type));
      }
      return arr;
    }, []);
  }
  return items;
};
export const transformProductToCollectiblesItem = function transformProductToCollectiblesItem(type) {
  if (null != type) {
    if (0 !== type.items.length) {
      let obj;
      if (type.type === CollectiblesItemType.CollectiblesItemType.BUNDLE) {
        const obj3 = { type: "bundle", items: null, previewAssets: null };
        ({ items: obj2.items, previewAssets: obj2.previewAssets } = type);
        obj = obj3;
      } else {
        obj = { type: "single", item: type.items[0] };
      }
      return obj;
    }
  }
};
export { transformSKUToCollectiblesItem };
