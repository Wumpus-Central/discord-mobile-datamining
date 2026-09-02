// discord_app/modules/share/useFetchShareEmbed.tsx
import closure_3 from "../../../_runtime/00005_asyncGeneratorStep.js";
import closure_4 from "../../../_runtime/metro/00032__slicedToArray.js";
import closure_5 from "../../../_runtime/00019_noop.js";

const require = arg1;
const result = require("set").fileFinishedImporting("modules/share/useFetchShareEmbed.tsx");

export default function useFetchShareEmbed(arg0) {
  closure_0 = arg0;
  const embed = callback(React.useState(undefined), 2);
  closure_1 = embed[1];
  [tmp3, dependencyMap] = callback(React.useState(false), 2);
  const hasTriedResolving = callback(React.useState(false), 2);
  closure_3 = hasTriedResolving[1];
  callback = React.useRef(true);
  React = React.useRef(undefined);
  closure_6 = React.useRef(0);
  let items = [arg0];
  const effect = React.useEffect(() => {
    function _unfurl(arg0) {
      const self = this;
      const tmp = callback(function* () {
        if (c5 === 2) {
          c5 = 3;
          HermesBuiltin.throwTypeError();
        } else if (tmp8 === 3) {
          if (arg0 === 1) {
            throw arg1;
          } else if (arg0 === 2) {
            let obj = { value: null, done: true };
            obj[0] = arg1;
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
                throw arg1;
              } else if (arg0 === 2) {
                c5 = 3;
                obj = { value: null, done: true };
                obj[0] = arg1;
                return obj;
              } else {
                closure_1 = tmp4;
                c0 = tmp6;
                c0 = undefined;
                closure_1 = undefined;
                if (null != closure_1_0) {
                  const sum = closure_1_6.current + 1;
                  closure_1_6.current = sum;
                  c0 = sum;
                  c5.current = closure_1_0;
                  c3 = 2;
                  closure_1_2(true);
                  const items = [closure_1_0];
                  c4 = 3;
                  c5 = 1;
                  obj1 = { value: null, done: false };
                  obj1[0] = closure_2_0(11671).unfurlEmbedUrl(items);
                  return obj1;
                } else {
                  c5 = 3;
                }
              }
            } else if (1 !== tmp9) {
              if (2 === tmp9) {
                c3 = 1;
                if (closure_1_6.current === closure_1_0) {
                  closure_1_1(undefined);
                }
              } else if (arg0 === 1) {
                c5 = 3;
                throw arg1;
              } else if (arg0 === 2) {
                c3 = 0;
                closure_2_0(702).batchUpdates(() => {
                  v0(true);
                  if (closure_1_6.current === c0) {
                    tmp62(false);
                  }
                });
                c5 = 3;
                const obj2 = { value: null, done: true };
                obj2[0] = arg1;
                return obj2;
              } else {
                closure_1 = arg1;
                if (closure_1_6.current !== c0) {
                  c3 = 0;
                  let obj3 = closure_2_0(702);
                  obj3.batchUpdates(() => {
                    v0(true);
                    if (closure_1_6.current === c0) {
                      tmp62(false);
                    }
                  });
                  c5 = 3;
                  return { value: "HermesInternal", done: null };
                } else if (0 === closure_1.embeds.length) {
                  closure_1_1(undefined);
                  c3 = 0;
                  obj1 = closure_2_0(702);
                  obj1.batchUpdates(() => {
                    v0(true);
                    if (closure_1_6.current === c0) {
                      tmp62(false);
                    }
                  });
                  c5 = 3;
                  obj3 = { value: null, done: true };
                  obj3[0] = undefined;
                  return obj3;
                } else {
                  obj = { embed: null, url: null };
                  obj[0] = closure_1.embeds[0];
                  obj[1] = c0;
                  closure_1_1(obj);
                  c3 = 1;
                }
              }
              c3 = 0;
              closure_2_0(702).batchUpdates(() => {
                v0(true);
                if (closure_1_6.current === c0) {
                  tmp62(false);
                }
              });
              const obj7 = closure_2_0(702);
            }
            c3 = 0;
            closure_2_0(702).batchUpdates(() => {
              v0(true);
              if (closure_1_6.current === c0) {
                tmp62(false);
              }
            });
            throw dependencyMap;
          } catch (tmp62) {
            dependencyMap = tmp62;
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
      closure_2 = tmp;
      const apply = tmp.apply;
      if (typeof apply === "unknown") {
        let applyArgumentsResult = HermesBuiltin.applyArguments(self);
      } else {
        applyArgumentsResult = apply(self, arguments);
      }
      return applyArgumentsResult;
    }
    if (null != closure_0) {
      if ("" !== str) {
        const match = str.match(callback(closure_1_2[3]).URL_REGEX);
        let atResult;
        if (match != null) {
          atResult = match.at(0);
        }
        closure_0 = atResult;
        if (atResult !== ref2.current) {
          if (null == atResult) {
            ref2.current = undefined;
            ref3.current = ref3.current + 1;
            callback(undefined);
            _unfurl(false);
            ref.current = false;
          } else {
            function unfurl() {
              const self = this;
              const apply = _unfurl.apply;
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
              callback = setTimeout(unfurl, 1000);
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
    callback(undefined);
    _unfurl(false);
  }, items);
  return { embed: embed[0], isLoading, hasTriedResolving: hasTriedResolving[0] };
}
