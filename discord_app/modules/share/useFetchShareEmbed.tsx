import batchUpdates from "batchUpdates";
import _slicedToArray from "_slicedToArray";
import noop from "noop";

const require = arg1;
const result = require("noop").fileFinishedImporting("modules/share/useFetchShareEmbed.tsx");

export default function useFetchShareEmbed(arg0) {
  let dependencyMap;
  let tmp3;
  let closure_0 = arg0;
  const embed = callback(React.useState(undefined), 2);
  let closure_1 = embed[1];
  [tmp3, dependencyMap] = callback(React.useState(false), 2);
  const hasTriedResolving = callback(React.useState(false), 2);
  let batchUpdates = hasTriedResolving[1];
  callback = React.useRef(true);
  React = React.useRef(undefined);
  let items = [arg0];
  const effect = React.useEffect(() => {
    function _unfurl() {
      const self = this;
      const tmp = callback(function*() {
        if (c5 === 2) {
          c5 = 3;
          HermesBuiltin.throwTypeError();
        } else if (tmp7 === 3) {
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
                let closure_1 = tmp4;
                let closure_0 = tmp8;
                closure_0 = undefined;
                if (null != outer1_0) {
                  let c3 = 2;
                  outer1_2(true);
                  const items = [outer1_0];
                  c4 = 3;
                  c5 = 1;
                  let obj1 = { value: null, done: false };
                  obj1[0] = outer2_0(11080).unfurlEmbedUrl(items);
                  return obj1;
                } else {
                  c5 = 3;
                }
              }
            } else if (1 !== tmp8) {
              if (2 === tmp8) {
                c3 = 1;
                outer1_1(undefined);
              } else if (arg0 === 1) {
                c5 = 3;
                throw arg1;
              } else if (arg0 === 2) {
                c3 = 0;
                let obj3 = outer2_0(705);
                obj3.batchUpdates(() => {
                  v0(true);
                  tmp48(false);
                });
                c5 = 3;
                const obj2 = { value: null, done: true };
                obj2[0] = arg1;
                return obj2;
              } else {
                closure_0 = arg1;
                if (0 === closure_0.embeds.length) {
                  outer1_1(undefined);
                  c3 = 0;
                  obj1 = outer2_0(705);
                  obj1.batchUpdates(() => {
                    v0(true);
                    tmp48(false);
                  });
                  c5 = 3;
                  obj3 = { value: null, done: true };
                  obj3[0] = undefined;
                  return obj3;
                } else {
                  obj = { embed: null, url: null };
                  obj[0] = closure_0.embeds[0];
                  obj[1] = closure_0;
                  outer1_1(obj);
                  c3 = 1;
                }
              }
              c3 = 0;
              outer2_0(705).batchUpdates(() => {
                v0(true);
                tmp48(false);
              });
              const obj6 = outer2_0(705);
            }
            c3 = 0;
            outer2_0(705).batchUpdates(() => {
              v0(true);
              tmp48(false);
            });
            throw dependencyMap;
          } catch (tmp48) {
            dependencyMap = tmp48;
            if (tmp5 === c3) {
              c5 = tmp3;
              throw tmp48;
            } else if (tmp2 === tmp50) {
              c4 = tmp2;
            } else {
              c4 = tmp;
            }
          }
        }
      });
      const _unfurl = tmp;
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
        const match = str.match(callback(outer1_2[3]).URL_REGEX);
        let atResult;
        if (match != null) {
          atResult = match.at(0);
        }
        closure_0 = atResult;
        if (atResult !== ref2.current) {
          ref2.current = atResult;
          if (null == atResult) {
            callback(undefined);
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
            }
            const _setTimeout = setTimeout;
            callback = setTimeout(unfurl, 1000);
            return () => {
              clearTimeout(closure_1);
            };
          }
        }
      }
    }
    ref.current = false;
    callback(undefined);
  }, items);
  return { embed: embed[0], isLoading, hasTriedResolving: hasTriedResolving[0] };
};