// === Module 10816: conjureLinkEmbeds ===

// Module 10816 (conjureLinkEmbeds)
import URLUtilsDefault from "URLUtils" /* 1386 */;
import asyncGeneratorStep from "asyncGeneratorStep" /* 5 */;
import _slicedToArray from "module_32" /* 32 */;
import noop from "module_19" /* 19 */;

const require = globalThis.__r;

const require = fn;
function conjureLinkUrls(arr) {
  if (arr.includes("http")) {
    let match = arr.match(URLUtilsDefault.URL_REGEX);
    if (match == null) {
      match = [];
    }
    const _Set = Set;
    set = new Set(match.filter((item) => /^https?:\/\//i.test(item)));
    const items = [];
    HermesBuiltin.arraySpread(set, 0);
    return items.slice(0, 4);
  } else {
    return [];
  }
}
function prefetchConjureLinkEmbeds(arg0) {
  const self = this;
  const apply = closure_10.apply;
  if (typeof apply === "unknown") {
    let applyArgumentsResult = HermesBuiltin.applyArguments(self);
  } else {
    applyArgumentsResult = apply(self, arguments);
  }
  return applyArgumentsResult;
}
let closure_10 = async function _prefetchConjureLinkEmbeds(arg0) {
  if (c12 === 2) {
    c12 = 3;
    throw new TypeError("Generator functions may not be called on executing generators");
  } else if (tmp4 === 3) {
    if (arg0 === 1) {
      throw value;
    } else if (arg0 === 2) {
      let obj3 = { value, done: true };
      return obj3;
    } else {
      return { value: "IconComponent", done: "+352" };
    }
  } else {
    while (true) {
      c12 = 2;
      let tmp5 = c11;
      if (0 === c11) {
        if (arg0 === 1) {
          c12 = 3;
          throw value;
        } else if (arg0 === 2) {
          c12 = 3;
          let obj4 = { value, done: true };
          return obj4;
        } else {
          closure_8 = tmp;
          closure_7 = tmp2;
          closure_135_1 = undefined;
          closure_135_2 = undefined;
          let arr3 = conjureLinkUrls(closure_0);
          let joined = arr3.join(" ");
          closure_135_0 = joined;
          if (0 !== arr3.length) {
            if (!set.has(joined)) {
              if (!set2.has(joined)) {
                let addResult = set2.add(joined);
                c10 = 2;
                let _Map = Map;
                let tmp63 = new.target;
                let tmp64 = new.target;
                map = new Map();
                closure_135_1 = map;
                let obj2 = require("MediaChannelActionCreators");
                c11 = 3;
                c12 = 1;
                let obj5 = { value: obj2.unfurlEmbedUrl(arr3), done: false };
                return obj5;
              }
            }
          }
          c12 = 3;
        }
      } else if (1 !== tmp5) {
        if (2 === tmp5) {
          c10 = 1;
        } else if (3 === tmp5) {
          if (arg0 === 1) {
            c12 = 3;
            throw value;
          } else if (arg0 === 2) {
            c10 = 0;
            let deleteResult = closure_136_7.delete(closure_135_0);
            c12 = 3;
            let obj = { value, done: true };
            return obj;
          } else {
            let embeds = value.embeds;
            dependencyMap = embeds;
            if (embeds == null) {
              dependencyMap = [];
            }
            closure_3 = dependencyMap;
            dependencyMap = dependencyMap[Symbol.iterator]();
            while (dependencyMap !== undefined) {
              c10 = 3;
              closure_135_2 = tmp13;
              if (null != closure_135_2.url) {
                closure_4 = 0;
                value2 = closure_135_1.get(closure_135_2.url);
                closure_5 = value2;
                if (value2 == null) {
                  closure_5 = [];
                }
                let items = [];
                let arraySpreadResult = HermesBuiltin.arraySpread(closure_5, closure_4);
                closure_4 = arraySpreadResult;
                items[arraySpreadResult] = closure_135_2;
                closure_4 = closure_4 + 1;
                let result = closure_135_1.set(closure_135_2.url, items);
              }
              c10 = 2;
              continue;
            }
            if (closure_136_6.size >= 100) {
              let iter = closure_136_6.keys();
              value = iter.next().value;
              c6 = value;
              if (value == null) {
                c6 = "";
              }
              let deleteResult1 = closure_136_6.delete(c6);
            }
            let items1 = [];
            let arraySpreadResult2 = HermesBuiltin.arraySpread(closure_135_1, 0);
            let result1 = closure_136_6.set(closure_135_0, items1.flatMap((item) => {
              [tmp, tmp2] = item;
              let items = (function toConjureLinkEmbed(url, arr) {
                const first = closure_1_4(arr, 1)[0];
                let items = [];
                function _loop(iter) {
                  let url;
                  if (iter != null) {
                    url = iter.url;
                  }
                  if (null != url) {
                    if (!items.some((url) => url.url === iter.url)) {
                      if (null != iter.proxy_url) {
                        ({ url: obj2.url, proxy_url: obj2.proxy_url } = iter);
                        let obj = { url: null, proxy_url: null };
                        const obj3 = { url: null, proxy_url: null };
                      } else {
                        obj = { url: iter.url };
                      }
                      items.push(obj);
                    }
                  }
                  return 1;
                }
                const iter = arr.flatMap((item) => {
                  items = [, ];
                  ({ image: arr[0], thumbnail: arr[1] } = item);
                  return items;
                })[Symbol.iterator]();
                while (iter !== undefined) {
                  let _loopResult = _loop(iter.next());
                  continue;
                }
                let obj = { url };
                const provider = first.provider;
                let name;
                if (provider != null) {
                  name = provider.name;
                }
                if (name == null) {
                  const footer = first.footer;
                  let text;
                  if (footer != null) {
                    text = footer.text;
                  }
                  name = text;
                }
                if (null != first.title) {
                  obj.title = first.title;
                }
                if (null != first.description) {
                  obj.description = first.description;
                }
                if (null != name) {
                  obj.site = name;
                }
                const author = first.author;
                let name1;
                if (author != null) {
                  name1 = author.name;
                }
                if (null != name1) {
                  obj.author = first.author.name;
                }
                if (items.length > 0) {
                  obj.images = items;
                }
                if (arr.some((video) => null != video.video)) {
                  obj.video = true;
                }
                if (null == obj.title) {
                  if (null == obj.description) {
                    let tmp7 = null;
                  }
                  return tmp7;
                }
                tmp7 = obj;
              })(tmp, tmp2);
              if (items == null) {
                items = [];
              }
              return items;
            }));
            c10 = 1;
          }
        } else {
          c10 = 2;
          dependencyMap.return();
          throw prefetchConjureLinkEmbeds;
        }
        c10 = 0;
        let deleteResult2 = closure_136_7.delete(closure_135_0);
      }
      c10 = 0;
      let deleteResult3 = closure_136_7.delete(closure_135_0);
      throw prefetchConjureLinkEmbeds;
    }
  }
};
let map = new Map();
let set = new Set();
const ReactCompilerGating = fn(558);
const size = fn(2);
let result = size.fileFinishedImporting("modules/conjure/chat/conjureLinkEmbeds.tsx");

export const MAX_CONJURE_LINK_EMBEDS = 4;
export const CONJURE_LINK_PREFETCH_DELAY_MS = 300;
export { conjureLinkUrls };
export { prefetchConjureLinkEmbeds };
export const readyConjureLinkEmbeds = function readyConjureLinkEmbeds(trimmed) {
  if (trimmed.includes("http")) {
    let match = trimmed.match(URLUtilsDefault.URL_REGEX);
    if (match == null) {
      match = [];
    }
    const _Set = Set;
    set = new Set(match.filter((item) => /^https?:\/\//i.test(item)));
    const items = [];
    HermesBuiltin.arraySpread(set, 0);
    let substr = items.slice(0, 4);
  } else {
    substr = [];
  }
  value = map.get(substr.join(" "));
  let tmp12;
  if (null != value) {
    if (value.length > 0) {
      tmp12 = value;
    }
  }
  return tmp12;
};
export const useConjureLinkPrefetch = ReactCompilerGating.isReactCompilerEnabled() ? (function useConjureLinkPrefetch(arg0) {
  _require = arg0;
  const cResult = require("c").c(3);
  if (cResult[0] !== arg0) {
    const fn = function l() {
      if (timeout.includes("http")) {
        let match = str.match(URLUtilsDefault.URL_REGEX);
        if (match == null) {
          match = [];
        }
        const _Set = Set;
        set = new Set(match.filter((item) => /^https?:\/\//i.test(item)));
        const items = [];
        HermesBuiltin.arraySpread(set, 0);
        let substr = items.slice(0, 4);
      } else {
        substr = [];
      }
      if (0 !== substr.length) {
        const _setTimeout = setTimeout;
        timeout = setTimeout(asyncGeneratorStep(async () => {
          if (c0 === 2) {
            c0 = 3;
            throw new TypeError("Generator functions may not be called on executing generators");
          } else if (tmp3 === 3) {
            if (arg0 === 1) {
              throw value;
            } else if (arg0 === 2) {
              const obj2 = { value, done: true };
              return obj2;
            } else {
              return { value: "IconComponent", done: "+352" };
            }
          } else {
            try {
              c0 = 2;
              if (0 === c1) {
                if (arg0 === 1) {
                  c0 = 3;
                  throw value;
                } else if (arg0 === 2) {
                  c0 = 3;
                  const obj3 = { value, done: true };
                  return obj3;
                } else {
                  c1 = 1;
                  c0 = 1;
                  const obj4 = { value: prefetchConjureLinkEmbeds(c0), done: false };
                  return obj4;
                }
              } else if (arg0 === 1) {
                c0 = 3;
                throw value;
              } else if (arg0 === 2) {
                c0 = 3;
                const obj = { value, done: true };
                return obj;
              } else {
                c0 = 3;
                return { value: "IconComponent", done: "+352" };
              }
            } catch (tmp7) {
              c0 = tmp;
              throw tmp7;
            }
          }
        }), 300);
        return () => clearTimeout(closure_0);
      }
      str = timeout;
    };
    let items = [arg0];
    cResult[0] = arg0;
    cResult[1] = fn;
    cResult[2] = items;
    let tmp3 = items;
    let tmp2 = fn;
  } else {
    tmp2 = cResult[1];
    tmp3 = cResult[2];
  }
  const effect = noop.useEffect(tmp2, tmp3);
}) : (function useConjureLinkPrefetch(arg0) {
  closure_0 = arg0;
  let items = [arg0];
  const effect = noop.useEffect(() => {
    if (timeout.includes("http")) {
      let match = str.match(URLUtilsDefault.URL_REGEX);
      if (match == null) {
        match = [];
      }
      const _Set = Set;
      set = new Set(match.filter((item) => /^https?:\/\//i.test(item)));
      const items = [];
      HermesBuiltin.arraySpread(set, 0);
      let substr = items.slice(0, 4);
    } else {
      substr = [];
    }
    if (0 !== substr.length) {
      const _setTimeout = setTimeout;
      timeout = setTimeout(asyncGeneratorStep(async () => {
        if (c0 === 2) {
          c0 = 3;
          throw new TypeError("Generator functions may not be called on executing generators");
        } else if (tmp3 === 3) {
          if (arg0 === 1) {
            throw value;
          } else if (arg0 === 2) {
            const obj2 = { value, done: true };
            return obj2;
          } else {
            return { value: "IconComponent", done: "+352" };
          }
        } else {
          try {
            c0 = 2;
            if (0 === c1) {
              if (arg0 === 1) {
                c0 = 3;
                throw value;
              } else if (arg0 === 2) {
                c0 = 3;
                const obj3 = { value, done: true };
                return obj3;
              } else {
                c1 = 1;
                c0 = 1;
                const obj4 = { value: prefetchConjureLinkEmbeds(c0), done: false };
                return obj4;
              }
            } else if (arg0 === 1) {
              c0 = 3;
              throw value;
            } else if (arg0 === 2) {
              c0 = 3;
              const obj = { value, done: true };
              return obj;
            } else {
              c0 = 3;
              return { value: "IconComponent", done: "+352" };
            }
          } catch (tmp7) {
            c0 = tmp;
            throw tmp7;
          }
        }
      }), 300);
      return () => clearTimeout(closure_0);
    }
    str = timeout;
  }, items);
});
export const resetConjureLinkEmbedsForTests = function resetConjureLinkEmbedsForTests() {
  map.clear();
  set.clear();
};