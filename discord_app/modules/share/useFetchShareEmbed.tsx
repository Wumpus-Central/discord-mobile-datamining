// discord_app/modules/share/useFetchShareEmbed.tsx
import _asyncToGenerator from "../../../_runtime/metro/00005__asyncToGenerator.js";
import _slicedToArray_mod from "../../../_runtime/metro/00032__slicedToArray.js";
import react_mod from "../../../_runtime/00019_react.js";
import size from "../../../_runtime/metro/00002__.js";

let c4, c5;

let _slicedToArray = _slicedToArray_mod;
let react = react_mod;
const result = size.fileFinishedImporting("modules/share/useFetchShareEmbed.tsx");

export default function useFetchShareEmbed(arg0) {
  let closure_1;
  let closure_3;
  let embed;
  let hasTriedResolving;
  let ref;
  let ref2;
  let tmp4;
  let closure_0 = arg0;
  [embed, closure_1] = react.useState(undefined);
  let tmp3 = _slicedToArray(react.useState(false), 2);
  [tmp4, dependencyMap] = tmp3;
  [hasTriedResolving, closure_3] = react.useState(false);
  _slicedToArray = react.useRef(true);
  react = react.useRef(undefined);
  const ref3 = react.useRef(0);
  let items = [arg0];
  const effect = react.useEffect(() => {
    let timeout;
    let obj = function _unfurl() {
      let current;
      obj = _asyncToGenerator(async () => {
        let closure_2;
        const f155746 = () => {
          c3(true);
          if (ref.current === batchUpdates) {
            closure_2(false);
          }
        };
        if (c5 === 2) {
          c5 = 3;
          throw new TypeError("Generator functions may not be called on executing generators");
        } else {
          const flag = true;
          if (tmp3 === 3) {
            if (arg0 === 1) {
              throw value;
            } else if (arg0 === 2) {
              const obj3 = { value, done: true };
              return obj3;
            } else {
              return { value: "IconComponent", done: null };
            }
          } else {
            let c3;
            try {
              let c0;
              let tmp;
              let batchUpdates;
              c5 = 2;
              if (0 === c4) {
                if (arg0 === 1) {
                  c5 = 3;
                  throw value;
                } else if (arg0 === 2) {
                  c5 = 3;
                  const obj6 = { value, done: true };
                  return obj6;
                } else {
                  c0 = undefined;
                  tmp = undefined;
                  if (null != current) {
                    const sum = ref.current + 1;
                    ref.current = sum;
                    c0 = sum;
                    c5.current = current;
                    c3 = 2;
                    tmp55(true);
                    const items = [current];
                    const obj8 = current(closure_2_2[4]);
                    batchUpdates = obj8.unfurlEmbedUrl(items);
                    c4 = 3;
                    c5 = 1;
                    const obj9 = { value: batchUpdates, done: false };
                    return obj9;
                  }
                }
              } else if (1 === c4) {
                c3 = 0;
                const obj7 = current(closure_2_2[5]);
                batchUpdates = obj7.batchUpdates(f155746);
                throw tmp55;
              } else {
                if (2 === c4) {
                  c3 = 1;
                  if (ref.current === c0) {
                    tmp(undefined);
                  }
                } else if (arg0 === 1) {
                  c5 = 3;
                  throw value;
                } else if (arg0 === 2) {
                  c3 = 0;
                  const obj5 = current(closure_2_2[5]);
                  obj5.batchUpdates(f155746);
                  c5 = 3;
                  const obj10 = { value, done: true };
                  return obj10;
                } else {
                  tmp = value;
                  batchUpdates = ref.current;
                  if (batchUpdates !== c0) {
                    c3 = 0;
                    const obj4 = current(closure_2_2[5]);
                    obj4.batchUpdates(f155746);
                    c5 = 3;
                    return { value: "IconComponent", done: null };
                  } else if (0 === tmp.embeds.length) {
                    tmp(undefined);
                    c3 = 0;
                    const obj2 = current(closure_2_2[5]);
                    batchUpdates = obj2.batchUpdates(f155746);
                    c5 = 3;
                    const obj11 = { value: undefined, done: true };
                    return obj11;
                  } else {
                    batchUpdates = tmp;
                    obj = { embed: tmp.embeds[0], url: closure_129_0 };
                    tmp(obj);
                    c3 = 1;
                  }
                }
                c3 = 0;
                batchUpdates = current(closure_2_2[5]).batchUpdates;
                const tmp38 = current(closure_2_2[5]);
                batchUpdates(f155746);
              }
              c5 = 3;
              return { value: "IconComponent", done: null };
            } catch (tmp55) {
              if (0 === c3) {
                c5 = 3;
                throw tmp55;
              } else if (1 === tmp57) {
                c4 = 1;
              } else {
                c4 = 2;
              }
            }
          }
        }
      });
      return obj(...arguments);
    };
    if (null != closure_0) {
      if ("" !== closure_0) {
        const match = str.match(timeout(dependencyMap[3]).URL_REGEX);
        let atResult;
        if (match != null) {
          atResult = match.at(0);
        }
        closure_0 = atResult;
        if (atResult !== ref2.current) {
          if (null == atResult) {
            ref2.current = undefined;
            ref3.current = ref3.current + 1;
            timeout(undefined);
            obj(false);
            ref.current = false;
          } else {
            function unfurl() {
              return obj(...arguments);
            }
            if (ref.current) {
              let flag = false;
              tmp2.current = false;
              unfurl();
            } else {
              const tmp3 = globalThis;
              const _setTimeout = setTimeout;
              timeout = setTimeout(unfurl, 1000);
              return () => {
                clearTimeout(closure_1);
              };
            }
          }
        }
      }
    }
    ref.current = false;
    ref2.current = undefined;
    ref3.current = ref3.current + 1;
    timeout(undefined);
    obj(false);
  }, items);
  return { embed, isLoading, hasTriedResolving };
}
