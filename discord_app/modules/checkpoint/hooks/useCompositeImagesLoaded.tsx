// === Module 12648: useCompositeImagesLoaded ===

// Module 12648 (useCompositeImagesLoaded)
import _slicedToArray from "module_32" /* 32 */;
import noop from "module_19" /* 19 */;

let closure_2 = fn(12639).CHECKPOINT_COMPOSITE_LOAD_DEADLINE_MS;
const size = fn(2);
const result = size.fileFinishedImporting("modules/checkpoint/hooks/useCompositeImagesLoaded.tsx");

export default function useCompositeImagesLoaded(arg0) {
  _slicedToArray = arg0;
  items = [arg0];
  const memo = uniqueUrls.useMemo(() => {
    items = [...new Set(closure_0)];
    set = new Set(closure_0);
    return { uniqueUrls: items, key: JSON.stringify(items) };
  }, items);
  uniqueUrls = memo.uniqueUrls;
  const key = memo.key;
  [tmp3, tmp4] = uniqueUrls.useState(() => {
    const map = new Map();
    return { key, generation: 0, urls: uniqueUrls, outcomes: map, revealOutcomes: map, timedOut: false };
  });
  let tmp5 = tmp3;
  if (tmp3.key !== key) {
    let _Map = Map;
    const items1 = [];
    HermesBuiltin.arraySpread(tmp3.outcomes, 0);
    let map = new Map(items1.filter((item) => {
      [tmp] = item;
      return uniqueUrls.includes(tmp);
    }));
    const obj2 = { key, generation: tmp3.generation + 1, urls: uniqueUrls, outcomes: map, revealOutcomes: map, timedOut: false };
    tmp4(obj2);
    tmp5 = obj2;
  }
  const generation = tmp5.generation;
  let revealOutcomes = tmp5.revealOutcomes;
  let str = "timedOut";
  if (!tmp5.timedOut) {
    const items2 = [];
    HermesBuiltin.arraySpread(revealOutcomes.values(), 0);
    let str3 = "failed";
    if (!items2.includes("errored")) {
      let str4 = "loading";
      if (revealOutcomes.size === arr3.length) {
        str4 = "ready";
      }
      str3 = str4;
    }
    str = str3;
  }
  const items3 = [generation, str];
  const effect = obj.useEffect(() => {
    if ("loading" === str) {
      const _setTimeout = setTimeout;
      const timeout = setTimeout(() => {
        closure_1_3((generation) => {
          let tmp = generation;
          if (generation.generation === closure_1_4) {
            const revealOutcomes = generation.revealOutcomes;
            let str4 = "timedOut";
            if (!generation.timedOut) {
              items = [];
              HermesBuiltin.arraySpread(revealOutcomes.values(), 0);
              let str2 = "failed";
              if (!items.includes("errored")) {
                let str3 = "loading";
                if (revealOutcomes.size === arr2.length) {
                  str3 = "ready";
                }
                str2 = str3;
              }
              str4 = str2;
            }
            tmp = generation;
            if ("loading" === str4) {
              const obj = {};
              const merged = Object.assign(generation);
              obj.timedOut = true;
              tmp = obj;
            }
          }
          return tmp;
        });
      }, key);
      return () => clearTimeout(closure_0);
    }
  }, items3);
  const items4 = [generation];
  const callback = obj.useCallback((arg0, arg1) => {
    closure_0 = arg0;
    closure_1 = arg1;
    tmp4((generation) => {
      if (generation.generation === generation) {
        const urls = generation.urls;
        if (urls.includes(closure_0)) {
          const outcomes = generation.outcomes;
          if (outcomes.get(closure_0) !== closure_1) {
            const _Map = Map;
            const map = new Map(generation.outcomes);
            let revealOutcomes = map.set(closure_0, tmp);
            const obj = {};
            const merged = Object.assign(generation);
            obj.outcomes = revealOutcomes;
            const revealOutcomes2 = generation.revealOutcomes;
            let str4 = "timedOut";
            if (!generation.timedOut) {
              items = [];
              HermesBuiltin.arraySpread(revealOutcomes2.values(), 0);
              let str2 = "failed";
              if (!items.includes("errored")) {
                let str3 = "loading";
                if (revealOutcomes2.size === arr2.length) {
                  str3 = "ready";
                }
                str2 = str3;
              }
              str4 = str2;
            }
            if ("loading" !== str4) {
              revealOutcomes = generation.revealOutcomes;
            }
            obj.revealOutcomes = revealOutcomes;
            return obj;
          }
        }
      }
      return generation;
    });
  }, items4);
  const items5 = [callback];
  const items6 = [callback];
  const callback1 = obj.useCallback((arg0) => callback(arg0, "loaded"), items5);
  const tmp2 = _slicedToArray(uniqueUrls.useState(() => {
    const map = new Map();
    return { key, generation: 0, urls: uniqueUrls, outcomes: map, revealOutcomes: map, timedOut: false };
  }), 2);
  return { urls: tmp5.urls, status: str, onLoad: callback1, onError: uniqueUrls.useCallback((arg0) => callback(arg0, "errored"), items6) };
};