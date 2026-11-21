// discord_app/modules/svg/native/LocalSvg.tsx
import asyncGeneratorStep from "../../../../_runtime/00005_asyncGeneratorStep.js";
import _slicedToArray from "../../../../_runtime/metro/00032__.js";
import noop from "../../../../_runtime/metro/00019__.js";

const require = fn;
const Image = fn(17).Image;
const jsx = fn(21).jsx;
const size = fn(2);
const result = size.fileFinishedImporting("modules/svg/native/LocalSvg.tsx");

export default function LocalSvg(asset) {
  asset = asset.asset;
  const merged = Object.assign(asset, Object.assign({ asset: 0 }));
  const tmp2 = _slicedToArray(noop.useState(null), 2);
  closure_1 = tmp2[1];
  items = [asset];
  const effect = noop.useEffect(() => {
    closure_1 = async function _load() {
      if (c3 === 2) {
        c3 = 3;
        throw new TypeError("Generator functions may not be called on executing generators");
      } else if (tmp4 === 3) {
        if (arg0 === 1) {
          throw value;
        } else if (arg0 === 2) {
          const obj3 = { value, done: true };
          return obj3;
        } else {
          return { value: "HermesInternal", done: null };
        }
      } else {
        try {
          c3 = 2;
          if (0 === c2) {
            if (arg0 === 1) {
              c3 = 3;
              throw value;
            } else if (arg0 === 2) {
              c3 = 3;
              const obj4 = { value, done: true };
              return obj4;
            } else {
              closure_0 = tmp2;
              closure_128_0 = undefined;
              c2 = 1;
              c3 = 1;
              const obj5 = {
                value: closure_2_1(dependencyMap[5]).readAsset(Image.resolveAssetSource(closure_0).uri, "utf8"),
                done: false,
              };
              return obj5;
            }
          } else if (arg0 === 1) {
            c3 = 3;
            throw value;
          } else if (arg0 === 2) {
            c3 = 3;
            const obj = { value, done: true };
            return obj;
          } else {
            closure_128_0 = value;
            if (!closure_129_0) {
              tmp5(closure_128_0);
            }
            c3 = 3;
            return { value: "HermesInternal", done: null };
          }
        } catch (tmp16) {
          c3 = tmp;
          throw tmp16;
        }
      }
    };
    c0 = false;
    (function load() {
      const self = this;
      const apply = closure_1.apply;
      if (typeof apply === "unknown") {
        let applyArgumentsResult = HermesBuiltin.applyArguments(self);
      } else {
        applyArgumentsResult = apply(self, arguments);
      }
      return applyArgumentsResult;
    })();
    return () => {
      c0 = true;
    };
  }, items);
  const merged1 = Object.assign(merged);
  return jsx(asset(7865).SvgXml, { xml: tmp2[0] });
}
