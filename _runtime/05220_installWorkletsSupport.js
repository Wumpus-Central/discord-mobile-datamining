// _runtime/05220_installWorkletsSupport.js
import _mod1705 from "metro/01705__.js";
import _mod5221 from "metro/05221__.js";

require = arg1;
const dependencyMap = arg6;
let closure_2 = {
  code: "(function determine_Pnpm_installWorkletsSupportTs1(value){let[boxedNitroProxy]=this.__closure;const nitroProxy=boxedNitroProxy.unbox();return nitroProxy.isHybridObject(value);})",
};
let closure_3 = {
  code: "(function pack_Pnpm_installWorkletsSupportTs2(value){let[boxedNitroProxy]=this.__closure;const nitroProxy=boxedNitroProxy.unbox();return nitroProxy.box(value);})",
};
let closure_4 = { code: "(function unpack_Pnpm_installWorkletsSupportTs3(value){return value.unbox();})" };

export function installWorkletsSupport() {
  try {
    const NitroModules = _mod5221.NitroModules;
    const boxResult = NitroModules.box(_mod5221.NitroModules);
    const obj = { name: "nitro.HybridObject", determine: null, pack: null, unpack: null };
    items = [closure_2, boxResult];
    obj.determine = (function determine_Pnpm_installWorkletsSupportTs1Factory(items) {
      [tmp, tmp2] = items;
      function determine(__remoteFunction) {
        return closure_1_0.unbox().isHybridObject(__remoteFunction);
      }
      items = [tmp2];
      determine.__closure = items;
      determine.__workletHash = 9405163704609;
      determine.__initData = tmp;
      return determine;
    })(items);
    const items1 = [closure_3, boxResult];
    obj.pack = (function pack_Pnpm_installWorkletsSupportTs2Factory(items1) {
      [tmp, tmp2] = items1;
      function pack(arg0) {
        return closure_1_0.unbox().box(arg0);
      }
      items = [tmp2];
      pack.__closure = items;
      pack.__workletHash = 10245349147904;
      pack.__initData = tmp;
      return pack;
    })(items1);
    const items2 = [closure_4];
    obj.unpack = (function unpack_Pnpm_installWorkletsSupportTs3Factory(items2) {
      [tmp] = items2;
      function unpack(unbox) {
        return unbox.unbox();
      }
      unpack.__workletHash = 12389898692263;
      unpack.__initData = tmp;
      return unpack;
    })(items2);
    const result = _mod1705.registerCustomSerializable(obj);
  } catch (err) {}
}
