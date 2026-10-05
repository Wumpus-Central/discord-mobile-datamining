// discord_app/modules/slayer_storefront/native/redirectToSlayerStorefrontWeb.tsx
import LoggerDefault from "../../debug/Logger.tsx";
import Constants from "../../../Constants.tsx";
import _asyncToGenerator from "../../../../_runtime/metro/00005__asyncToGenerator.js";
import size from "../../../../_runtime/metro/00002__.js";

let c5, c6;

let obj = function _redirectToSlayerStorefrontWeb() {
  obj = _asyncToGenerator(async (arg0) => {
    let c0;
    let c1;
    let c2;
    let intl;
    let intl2;
    let obj10;
    let obj6;
    let closure_0 = arg0;
    if (c6 === 2) {
      c6 = 3;
      throw new TypeError("Generator functions may not be called on executing generators");
    } else if (tmp3 === 3) {
      if (arg0 === 1) {
        throw value;
      } else if (arg0 === 2) {
        const obj3 = { value, done: true };
        return obj3;
      } else {
        return { value: "IconComponent", done: null };
      }
    } else {
      let c4;
      let closure_3;
      try {
        let skuId;
        let source;
        c6 = 2;
        if (0 === c5) {
          if (arg0 === 1) {
            c6 = 3;
            throw value;
          } else if (arg0 === 2) {
            c6 = 3;
            const obj4 = { value, done: true };
            return obj4;
          } else {
            let closure_2 = tmp;
            let closure_1 = tmp4;
            c0 = undefined;
            skuId = undefined;
            source = undefined;
            ({ applicationId: c0, skuId: c1, source: c2 } = closure_0);
            closure_3 = undefined;
            c5 = 1;
            c6 = 1;
            return { value: "Set", done: true };
          }
        } else if (1 === c5) {
          if (arg0 === 1) {
            c6 = 3;
            throw value;
          } else if (arg0 === 2) {
            c6 = 3;
            const obj5 = { value, done: true };
            return obj5;
          } else if (null == c0) {
            const obj7 = {
              key: "SHOP_ITEM_HANDOFF_ERROR",
              content: intl2.string(closure_130_0(closure_130_2[4]).t["rTU7/z"]),
            };
            const open2 = closure_130_1(closure_130_2[3]).open;
            const tmp37 = closure_130_1(closure_130_2[3]);
            intl2 = closure_130_0(closure_130_2[4]).intl;
            open2(obj7);
            c6 = 3;
            return { value: false, done: true };
          } else {
            c4 = 1;
            closure_3 = closure_130_4.COLLECTIBLES_SHOP_GAME_SHOP(c0, undefined, skuId);
            c5 = 3;
            c6 = 1;
            const obj8 = {
              value: obj6.redirectWithHandoffToken(closure_3, { forceExternalBrowser: true }),
              done: false,
            };
            obj6 = closure_130_1(closure_130_2[5]);
            return obj8;
          }
        } else if (2 === c5) {
          c4 = 0;
          let closure_4 = closure_3;
          const _JSON = JSON;
          const _HermesInternal = HermesInternal;
          closure_130_5.error("Error performing web handoff: " + JSON.stringify(closure_4));
          const obj9 = { tags: obj10 };
          obj10 = { source, skuId };
          const obj2 = closure_130_0(closure_130_2[6]);
          const result = obj2.captureBillingException(closure_4, obj9);
          const obj11 = {
            key: "SHOP_ITEM_HANDOFF_ERROR",
            content: intl.string(closure_130_0(closure_130_2[4]).t["rTU7/z"]),
          };
          const open = closure_130_1(closure_130_2[3]).open;
          const tmp20 = closure_130_1(closure_130_2[3]);
          intl = closure_130_0(closure_130_2[4]).intl;
          open(obj11);
          c6 = 3;
          return { value: false, done: true };
        } else if (arg0 === 1) {
          c6 = 3;
          throw value;
        } else if (arg0 === 2) {
          c4 = 0;
          c6 = 3;
          obj = { value, done: true };
          return obj;
        } else {
          c4 = 0;
          c6 = 3;
          return { value: true, done: true };
        }
      } catch (tmp44) {
        closure_3 = tmp44;
        if (0 === c4) {
          c6 = 3;
          throw tmp44;
        } else {
          c5 = 2;
        }
      }
    }
  });
  return obj(...arguments);
};
const Routes = Constants.Routes;
let closure_5 = new LoggerDefault("redirectToSlayerStorefrontWeb");
new LoggerDefault("redirectToSlayerStorefrontWeb");
let result = size.fileFinishedImporting("modules/slayer_storefront/native/redirectToSlayerStorefrontWeb.tsx");

export default function redirectToSlayerStorefrontWeb() {
  return obj(...arguments);
}
