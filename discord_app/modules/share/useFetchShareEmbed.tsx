// === Module 13901: useFetchShareEmbed ===

// Module 13901 (useFetchShareEmbed)
import asyncGeneratorStep from "asyncGeneratorStep" /* 5 */;
import _slicedToArray from "module_32" /* 32 */;
import noop from "module_19" /* 19 */;

const require = fn;
const size = fn(2);
const result = size.fileFinishedImporting("modules/share/useFetchShareEmbed.tsx");

export default function useFetchShareEmbed(arg0) {
  closure_0 = arg0;
  const embed = _slicedToArray(noop.useState(undefined), 2);
  closure_1 = embed[1];
  [tmp3, dependencyMap] = _slicedToArray(noop.useState(false), 2);
  const hasTriedResolving = _slicedToArray(noop.useState(false), 2);
  closure_3 = hasTriedResolving[1];
  _slicedToArray = noop.useRef(true);
  noop = noop.useRef(undefined);
  noop.useRef(0);
  let items = [arg0];
  const effect = noop.useEffect(() => {
    dependencyMap = function _unfurl() {
      const self = this;
      const tmp = asyncGeneratorStep(async (arg0, value) => {
        if (c5 === 2) {
          c5 = 3;
          throw new TypeError("Generator functions may not be called on executing generators");
        } else if (tmp8 === 3) {
          if (arg0 === 1) {
            throw value;
          } else if (arg0 === 2) {
            let obj = { value, done: true };
            return obj;
          } else {
            return { value: "HermesInternal", done: null };
          }
        } else {
          try {
            c5 = 2;
            if (0 === c4) {
              if (arg0 === 1) {
                c5 = 3;
                throw value;
              } else if (arg0 === 2) {
                c5 = 3;
                obj = { value, done: true };
                return obj;
              } else {
                closure_0 = tmp6;
                closure_128_0 = undefined;
                closure_128_1 = undefined;
                if (null != current) {
                  const sum = ref.current + 1;
                  ref.current = sum;
                  closure_128_0 = sum;
                  c5.current = current;
                  c3 = 2;
                  tmp62(true);
                  const items = [current];
                  c4 = 3;
                  c5 = 1;
                  let obj1 = { value: current(11875).unfurlEmbedUrl(items), done: false };
                  return obj1;
                } else {
                  c5 = 3;
                }
              }
            } else if (1 !== tmp9) {
              if (2 === tmp9) {
                c3 = 1;
                if (ref.current === closure_128_0) {
                  tmp4(undefined);
                }
              } else if (arg0 === 1) {
                c5 = 3;
                throw value;
              } else if (arg0 === 2) {
                c3 = 0;
                current(1249).batchUpdates(() => {
                  c3(true);
                  if (ref.current === closure_1_0) {
                    closure_2(false);
                  }
                });
                c5 = 3;
                const obj2 = { value, done: true };
                return obj2;
              } else {
                closure_128_1 = value;
                if (ref.current !== closure_128_0) {
                  c3 = 0;
                  let obj3 = current(1249);
                  obj3.batchUpdates(() => {
                    c3(true);
                    if (ref.current === closure_1_0) {
                      closure_2(false);
                    }
                  });
                  c5 = 3;
                  return { value: "HermesInternal", done: null };
                } else if (0 === closure_128_1.embeds.length) {
                  tmp4(undefined);
                  c3 = 0;
                  obj1 = current(1249);
                  obj1.batchUpdates(() => {
                    c3(true);
                    if (ref.current === closure_1_0) {
                      closure_2(false);
                    }
                  });
                  c5 = 3;
                  obj3 = { value: undefined, done: true };
                  return obj3;
                } else {
                  obj = { embed: closure_128_1.embeds[0], url: closure_129_0 };
                  tmp4(obj);
                  c3 = 1;
                }
              }
              c3 = 0;
              current(1249).batchUpdates(() => {
                c3(true);
                if (ref.current === closure_1_0) {
                  closure_2(false);
                }
              });
              const obj7 = current(1249);
            }
            c3 = 0;
            current(1249).batchUpdates(() => {
              c3(true);
              if (ref.current === closure_1_0) {
                closure_2(false);
              }
            });
            throw tmp62;
          } catch (tmp62) {
            if (tmp5 === c3) {
              c5 = tmp3;
              throw tmp62;
            } else if (tmp2 === tmp64) {
              c4 = tmp2;
            } else {
              c4 = tmp;
            }
          }
        }
      });
      dependencyMap = tmp;
      const apply = tmp.apply;
      if (typeof apply === "unknown") {
        let applyArgumentsResult = HermesBuiltin.applyArguments(self);
      } else {
        applyArgumentsResult = apply(self, arguments);
      }
      return applyArgumentsResult;
    };
    if (null != closure_0) {
      if ("" !== str) {
        const match = str.match(timeout(1365).URL_REGEX);
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
            dependencyMap(false);
            ref.current = false;
          } else {
            function unfurl() {
              const self = this;
              const apply = closure_2.apply;
              if (typeof apply === "unknown") {
                let applyArgumentsResult = HermesBuiltin.applyArguments(self);
              } else {
                applyArgumentsResult = apply(self, arguments);
              }
              return applyArgumentsResult;
            }
            if (ref.current) {
              tmp2.current = false;
              unfurl();
            } else {
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
    dependencyMap(false);
  }, items);
  return { embed: embed[0], isLoading, hasTriedResolving: hasTriedResolving[0] };
};