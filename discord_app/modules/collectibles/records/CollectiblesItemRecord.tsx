// discord_app/modules/collectibles/records/CollectiblesItemRecord.tsx
import fromServer from "fromServer";
import closure_3 from "fromServer";
import closure_4 from "fromServer";
import closure_5 from "fromServer";
import closure_6 from "fromServer";
import ME from "ME";

let error;
let metroImportAll;
const require = arg1;
({ SKUProductLines: error, SKUTypes: metroImportAll } = ME);
const result = require("fromServer").fileFinishedImporting("modules/collectibles/records/CollectiblesItemRecord.tsx");
function transformSKUToCollectiblesItem(productLine) {
  let effects;
  if (productLine.productLine === constants.COLLECTIBLES) {
    if (productLine.type === constants2.BUNDLE) {
      const items = [];
      let bundledSkus = productLine.bundledSkus;
      if (bundledSkus == null) {
        bundledSkus = [];
      }
      const tmp32 = bundledSkus[Symbol.iterator]();
      while (tmp32 !== undefined) {
        let tmp36 = transformSKUToCollectiblesItem;
        let tmp37 = transformSKUToCollectiblesItem(tmp34);
        let type;
        let tmp38 = tmp37;
        if (tmp37 != null) {
          type = tmp37.type;
        }
        if ("single" === type) {
          let tmp40 = tmp37;
          let arr = items.push(tmp38.item);
        }
        continue;
      }
      if (0 !== items.length) {
        let obj = { type: "bundle", items: null, previewAssets: null };
        obj[1] = items;
        const previewAssetPaths = productLine.previewAssetPaths;
        obj[2] = previewAssetPaths;
        return obj;
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
        type = item.type;
        if (require(1901) /* CollectiblesItemType */.CollectiblesItemType.AVATAR_DECORATION === type) {
          obj = { type: "single", item: null };
          const obj1 = { skuId: null, type: null, asset: null, label: null };
          obj1[0] = productLine.id;
          ({ type: obj8[1], asset: obj8[2], label: obj8[3] } = item);
          const tmp28 = new fromServer(obj1);
          obj[1] = tmp28;
          return obj;
        } else if (tmp4(1901).CollectiblesItemType.NAMEPLATE === type) {
          const obj2 = { type: "single", item: null };
          const obj3 = { skuId: null, type: null, asset: null, label: null, palette: null };
          obj3[0] = productLine.id;
          ({ type: obj6[1], asset: obj6[2], label: obj6[3], palette: obj6[4] } = item);
          const tmp22 = new closure_3(obj3);
          obj2[1] = tmp22;
          return obj2;
        } else if (tmp4(1901).CollectiblesItemType.PROFILE_EFFECT === type) {
          const obj4 = { skuId: null, type: null, title: null, description: null, thumbnailPreviewSrc: null, reducedMotionSrc: null, effects: null, accessibilityLabel: null, animationType: null, staticFrameSrc: null };
          obj4[0] = productLine.id;
          ({ type: obj3[1], title: obj3[2], description: obj3[3], thumbnailPreviewSrc: obj3[4], reducedMotionSrc: obj3[5], effects } = item);
          let tmp12 = closure_4;
          if (effects == null) {
            effects = [];
          }
          const obj5 = { type: "single", item: null };
          obj4[6] = effects;
          ({ accessibilityLabel: obj3[7], animationType: obj3[8], staticFrameSrc: obj3[9] } = item);
          tmp12 = new tmp12(obj4);
          obj5[1] = tmp12;
          return obj5;
        } else if (tmp4(1901).CollectiblesItemType.PROFILE_FRAME === type) {
          obj = { type: "single", item: null };
          const obj6 = { skuId: null, type: null, label: null, layers: null, innerWidth: null, overflowTop: null, overflowBottom: null, overflowHorizontal: null };
          obj6[0] = productLine.id;
          ({ type: obj2[1], label: obj2[2], layers: obj2[3], innerWidth: obj2[4], overflowTop: obj2[5], overflowBottom: obj2[6], overflowHorizontal: obj2[7] } = item);
          const tmp10 = new closure_5(obj6);
          obj[1] = tmp10;
          return obj;
        }
      }
    }
  }
}

export const createCollectiblesItemsFromServerResponse = function createCollectiblesItemsFromServerResponse(arr) {
  if (null == arr) {
    let items = [];
  } else {
    items = arr.reduce((arr, type) => {
      type = type.type;
      if (callback(table[6]).CollectiblesItemType.AVATAR_DECORATION === type) {
        arr.push(fromServer.fromServer(type));
      } else if (tmp(tmp2[6]).CollectiblesItemType.NAMEPLATE === type) {
        arr.push(closure_3.fromServer(type));
      } else if (tmp(tmp2[6]).CollectiblesItemType.PROFILE_EFFECT === type) {
        arr.push(closure_4.fromServer(type));
      } else if (tmp(tmp2[6]).CollectiblesItemType.PROFILE_FRAME === type) {
        arr.push(closure_5.fromServer(type));
      } else {
        arr.push(closure_6.fromServer(type));
      }
      return arr;
    }, []);
  }
  return items;
};
export { transformSKUToCollectiblesItem };