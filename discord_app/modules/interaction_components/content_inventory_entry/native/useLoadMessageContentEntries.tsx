// discord_app/modules/interaction_components/content_inventory_entry/native/useLoadMessageContentEntries.tsx
import _modDef38 from "../../../../../_runtime/metro/00038__.js";
import Server from "../../../../flow/Server.tsx";
import Constants from "../../../activities/Constants.tsx";
import transformContentInventoryEntryMessageComponent from "../../../messages/native/renderer/transformContentInventoryEntryMessageComponent.tsx";
import useAvatarColor from "../../../avatar/useAvatarColor.tsx";
import utils_FunctionUtils from "../../../../../discord_common/js/shared/utils/FunctionUtils.tsx";
import _slicedToArray from "../../../../../_runtime/metro/00032__slicedToArray.js";
import _asyncToGenerator_mod from "../../../../../_runtime/metro/00005__asyncToGenerator.js";
import react from "../../../../../_runtime/00019_react.js";
import ApplicationStore from "../../../applications/ApplicationStore.tsx";
import ReactCompilerGating from "../../../react_compiler/ReactCompilerGating.tsx";
import size from "../../../../../_runtime/metro/00002__.js";

const require = globalThis.__r;
let _require, c0, c3, c4, c6, c7, closure_9, dependencyMap, iter3, iter4, map, map1, method, next, set, set2;

function fetchColors(play) {
  let closure_0 = play;
  return promiseDeduper4.one(play, () => {
    obj = useAvatarColor;
    return obj.maybeFetchColors(play);
  });
}
let obj = function _fetchApplicationParts() {
  obj = _asyncToGenerator(async (arg0) => {
    let closure_2;
    function fetchApplication(application_id) {
      closure_0 = application_id;
      return closure_9.one(application_id, () => {
        const items = [application_id];
        obj = iconURL(closure_2_2[7]);
        return obj.fetchApplications(items);
      });
    }
    let closure_0 = arg0;
    if (c4 === 2) {
      c4 = 3;
      throw new TypeError("Generator functions may not be called on executing generators");
    } else if (tmp3 === 3) {
      if (arg0 === 1) {
        throw value;
      } else if (arg0 === 2) {
        const obj2 = { value, done: true };
        return obj2;
      } else {
        return { value: "IconComponent", done: null };
      }
    } else {
      try {
        let application_id;
        let iconURL;
        let iconURL2;
        c4 = 2;
        if (0 === c3) {
          if (arg0 === 1) {
            c4 = 3;
            throw value;
          } else if (arg0 === 2) {
            c4 = 3;
            const obj3 = { value, done: true };
            return obj3;
          } else {
            application_id = undefined;
            iconURL = undefined;
            iconURL2 = undefined;
            if ("application_id" in closure_0.extra) {
              application_id = closure_0.extra.application_id;
              c3 = 1;
              c4 = 1;
              const obj4 = { value: fetchApplication(application_id), done: false };
              return obj4;
            }
          }
        } else if (1 === c3) {
          if (arg0 === 1) {
            c4 = 3;
            throw value;
          } else if (arg0 === 2) {
            c4 = 3;
            const obj5 = { value, done: true };
            return obj5;
          } else {
            iconURL = closure_130_6.getApplication(application_id);
            closure_130_1(closure_130_2[9])(null != iconURL, "failed to fetch application");
            iconURL2 = iconURL.getIconURL(closure_130_7.LARGE);
            if (null != iconURL2) {
              c3 = 2;
              c4 = 1;
              const obj6 = { value: closure_130_11(iconURL2), done: false };
              return obj6;
            }
          }
        } else if (arg0 === 1) {
          c4 = 3;
          throw value;
        } else if (arg0 === 2) {
          c4 = 3;
          obj = { value, done: true };
          return obj;
        }
        c4 = 3;
        return { value: "IconComponent", done: null };
      } catch (tmp5) {
        c4 = 3;
        throw tmp5;
      }
    }
  });
  return obj(...arguments);
};
obj = function _fetchUserParts() {
  obj = _asyncToGenerator(async (arg0) => {
    const author_id = arg0;
    let c2 = 0;
    let c1 = 0;
    return (async (arg0) => {
      function fetchUser(author_id) {
        let closure_0 = author_id;
        return closure_8.one(
          author_id,
          closure_4(function* () {
            let v3;
            if (v3 === 2) {
              v3 = 3;
              throw new TypeError("Generator functions may not be called on executing generators");
            } else if (tmp2 === 3) {
              if (arg0 === 1) {
                throw value;
              } else if (arg0 === 2) {
                const obj3 = { value, done: true };
                return obj3;
              } else {
                return { value: "IconComponent", done: null };
              }
            } else {
              try {
                v3 = 2;
                if (0 === c1) {
                  if (arg0 === 1) {
                    v3 = 3;
                    throw value;
                  } else if (arg0 === 2) {
                    v3 = 3;
                    const obj4 = { value, done: true };
                    return obj4;
                  } else {
                    c1 = 1;
                    const obj2 = v3(closure_1_2[6]);
                    v3 = 1;
                    const obj5 = { value: obj2.getUser(author_id), done: false };
                    return obj5;
                  }
                } else if (arg0 === 1) {
                  v3 = 3;
                  throw value;
                } else if (arg0 === 2) {
                  v3 = 3;
                  obj = { value, done: true };
                  return obj;
                } else {
                  v3 = 3;
                  return { value: "IconComponent", done: null };
                }
              } catch (tmp7) {
                v3 = 3;
                throw tmp7;
              }
            }
          }),
        );
      }
      if (c1 === 2) {
        c1 = 3;
        throw new TypeError("Generator functions may not be called on executing generators");
      } else {
        const tmp7 = arg0;
        if (tmp2 === 3) {
          if (arg0 === 1) {
            throw value;
          } else if (arg0 === 2) {
            let obj2 = { value, done: true };
            return obj2;
          } else {
            return { value: "IconComponent", done: null };
          }
        } else {
          try {
            c1 = 2;
            if (0 === c2) {
              if (arg0 === 1) {
                c1 = 3;
                throw value;
              } else if (arg0 === 2) {
                c1 = 3;
                let obj3 = { value, done: true };
                return obj3;
              } else {
                c2 = 1;
                c1 = 1;
                let obj4 = { value: fetchUser(author_id.author_id), done: false };
                return obj4;
              }
            } else if (arg0 === 1) {
              c1 = 3;
              throw value;
            } else if (arg0 === 2) {
              c1 = 3;
              obj = { value, done: true };
              return obj;
            } else {
              c1 = 3;
              return { value: "IconComponent", done: null };
            }
          } catch (tmp5) {
            c1 = 3;
            throw tmp5;
          }
        }
      }
    })();
  });
  return obj(...arguments);
};
obj = function _fetchWatchedContentParts() {
  obj = _asyncToGenerator(async (arg0) => {
    const extra = arg0;
    let c2 = 0;
    let c1 = 0;
    return (async (arg0) => {
      if (c1 === 2) {
        c1 = 3;
        throw new TypeError("Generator functions may not be called on executing generators");
      } else if (tmp2 === 3) {
        if (arg0 === 1) {
          throw value;
        } else if (arg0 === 2) {
          return { value, done: true };
        } else {
          return { value: "IconComponent", done: null };
        }
      } else {
        try {
          c1 = 2;
          if (0 === c2) {
            if (arg0 === 1) {
              c1 = 3;
              throw value;
            } else if (arg0 === 2) {
              c1 = 3;
              return { value, done: true };
            } else if ("application_id" in extra.extra) {
              if ("media_assets_large_image" in extra.extra) {
                const items = [,];
                ({ LARGE: arr[0], LARGE: arr[1] } = ImageSizes);
                const obj2 = require("ApplicationAssetUtils");
                const assetImage = obj2.getAssetImage(
                  extra.extra.application_id,
                  extra.extra.media_assets_large_image,
                  items,
                );
                if (null != assetImage) {
                  c2 = 1;
                  c1 = 1;
                  const obj5 = { value: fetchColors(assetImage), done: false };
                  return obj5;
                }
              }
            }
          } else if (arg0 === 1) {
            c1 = 3;
            throw value;
          } else if (arg0 === 2) {
            c1 = 3;
            return { value, done: true };
          }
          c1 = 3;
          return { value: "IconComponent", done: null };
        } catch (tmp10) {
          c1 = 3;
          throw tmp10;
        }
      }
    })();
  });
  return obj(...arguments);
};
obj = function _fetchListenedContentParts() {
  obj = _asyncToGenerator(async (arg0) => {
    let closure_0 = arg0;
    if (c1 === 2) {
      c1 = 3;
      throw new TypeError("Generator functions may not be called on executing generators");
    } else if (tmp2 === 3) {
      if (arg0 === 1) {
        throw value;
      } else if (arg0 === 2) {
        const obj2 = { value, done: true };
        return obj2;
      } else {
        return { value: "IconComponent", done: null };
      }
    } else {
      try {
        c1 = 2;
        if (0 === c2) {
          if (arg0 === 1) {
            c1 = 3;
            throw value;
          } else if (arg0 === 2) {
            c1 = 3;
            const obj3 = { value, done: true };
            return obj3;
          } else if ("entries" in closure_0.extra) {
            const image_url = closure_0.extra.entries[0].media.image_url;
            if (null != image_url) {
              c2 = 1;
              c1 = 1;
              const obj4 = { value: fetchColors(image_url), done: false };
              return obj4;
            }
          }
        } else if (arg0 === 1) {
          c1 = 3;
          throw value;
        } else if (arg0 === 2) {
          c1 = 3;
          obj = { value, done: true };
          return obj;
        }
        c1 = 3;
        return { value: "IconComponent", done: null };
      } catch (tmp6) {
        c1 = 3;
        throw tmp6;
      }
    }
  });
  return obj(...arguments);
};
obj = function _fetchTopArtistContentParts() {
  obj = _asyncToGenerator(async (arg0) => {
    let obj2;
    let closure_0 = arg0;
    if (c1 === 2) {
      c1 = 3;
      throw new TypeError("Generator functions may not be called on executing generators");
    } else if (tmp2 === 3) {
      if (arg0 === 1) {
        throw value;
      } else if (arg0 === 2) {
        const obj3 = { value, done: true };
        return obj3;
      } else {
        return { value: "IconComponent", done: null };
      }
    } else {
      try {
        c1 = 2;
        if (0 === c2) {
          if (arg0 === 1) {
            c1 = 3;
            throw value;
          } else if (arg0 === 2) {
            c1 = 3;
            const obj4 = { value, done: true };
            return obj4;
          } else if ("media" in closure_0.extra) {
            const image_url = closure_0.extra.media.image_url;
            _modDef38(null != image_url, "missing image url for top artist");
            c2 = 1;
            c1 = 1;
            const obj5 = { value: obj2.maybeFetchColors(image_url), done: false };
            obj2 = require("useAvatarColor");
            return obj5;
          }
        } else if (arg0 === 1) {
          c1 = 3;
          throw value;
        } else if (arg0 === 2) {
          c1 = 3;
          obj = { value, done: true };
          return obj;
        }
        c1 = 3;
        return { value: "IconComponent", done: null };
      } catch (tmp9) {
        c1 = 3;
        throw tmp9;
      }
    }
  });
  return obj(...arguments);
};
function loadContentEntryParts() {
  return obj(...arguments);
}
obj = function _loadContentEntryParts() {
  obj = _asyncToGenerator(async (arg0) => {
    let components = arg0;
    let c10 = 0;
    let c11 = 0;
    let c8 = 0;
    return (async (arg0) => {
      let value;
      if (c11 === 2) {
        c11 = 3;
        throw new TypeError("Generator functions may not be called on executing generators");
      } else if (tmp2 === 3) {
        if (arg0 === 1) {
          throw value;
        } else if (arg0 === 2) {
          let obj2 = { value, done: true };
          return obj2;
        } else {
          return { value: "IconComponent", done: null };
        }
      } else {
        try {
          let tmp15;
          let num = 2;
          c11 = 2;
          const tmp3 = c10;
          if (0 === c10) {
            if (arg0 === 1) {
              c11 = 3;
              throw value;
            } else if (arg0 === 2) {
              c11 = 3;
              let obj3 = { value, done: true };
              return obj3;
            } else {
              let c2;
              components = [];
              function* _loop() {
                function fetchEntryParts() {
                  return obj(...arguments);
                }
                function fetchApplicationParts() {
                  return closure_1_12(...arguments);
                }
                function fetchUserParts() {
                  return closure_1_13(...arguments);
                }
                function fetchWatchedContentParts() {
                  return closure_1_14(...arguments);
                }
                function fetchListenedContentParts() {
                  return closure_1_15(...arguments);
                }
                function fetchTopArtistContentParts() {
                  return closure_1_16(...arguments);
                }
                if (c0 === 2) {
                  c0 = 3;
                  const str = "Generator functions may not be called on executing generators";
                  throw new TypeError("Generator functions may not be called on executing generators");
                } else if (tmp2 === 3) {
                  if (arg0 === 1) {
                    throw value;
                  } else if (arg0 === 2) {
                    let obj2 = { value, done: true };
                    return obj2;
                  } else {
                    return { value: "IconComponent", done: null };
                  }
                } else {
                  try {
                    c0 = 2;
                    if (arg0 === 1) {
                      c0 = 3;
                      throw value;
                    } else if (arg0 === 2) {
                      c0 = 3;
                      obj = { value, done: true };
                      return obj;
                    } else {
                      if (_undefined.type === c0(_undefined[11]).ComponentType.CONTENT_INVENTORY_ENTRY) {
                        obj = function _fetchEntryParts() {
                          obj = closure_2_4(function* () {
                            if (c0 === 2) {
                              c0 = 3;
                              throw new TypeError("Generator functions may not be called on executing generators");
                            } else if (tmp2 === 3) {
                              if (arg0 === 1) {
                                throw value;
                              } else if (arg0 === 2) {
                                const obj2 = { value, done: true };
                                return obj2;
                              } else {
                                return { value: "IconComponent", done: null };
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
                                    const obj4 = { value: Promise.all(items), done: false };
                                    return obj4;
                                  }
                                } else if (arg0 === 1) {
                                  c0 = 3;
                                  throw value;
                                } else if (arg0 === 2) {
                                  c0 = 3;
                                  obj = { value, done: true };
                                  return obj;
                                } else {
                                  c0 = 3;
                                  return { value: "IconComponent", done: null };
                                }
                              } catch (tmp6) {
                                c0 = 3;
                                throw tmp6;
                              }
                            }
                          });
                          return obj(...arguments);
                        };
                        const contentInventoryEntry = _undefined.contentInventoryEntry;
                        const items = [];
                        items.push(fetchApplicationParts(contentInventoryEntry));
                        items.push(fetchUserParts(contentInventoryEntry));
                        items.push(fetchWatchedContentParts(contentInventoryEntry));
                        items.push(fetchListenedContentParts(contentInventoryEntry));
                        items.push(fetchTopArtistContentParts(contentInventoryEntry));
                        closure_0.push(fetchEntryParts());
                      }
                      c0 = 3;
                      return { value: "IconComponent", done: null };
                    }
                  } catch (tmp3) {
                    c0 = 3;
                    throw tmp3;
                  }
                }
              }
              components = components.components;
              closure_1 = components[Symbol.iterator]();
              if (closure_1 === undefined) {
                c10 = 2;
                c11 = 1;
                let obj4 = { value: Promise.all(components), done: false };
                return obj4;
              } else {
                c8 = 1;
                c2 = tmp29;
                const tmp49 = _loop();
                iter4 = tmp49[tmp44.iterator]();
                HermesBuiltin.ensureObject("iterator is not an object");
                next = iter4.next;
                c3 = undefined;
              }
            }
          } else if (1 === tmp3) {
            c8 = 0;
            closure_1.return();
            throw closure_9;
          } else if (2 === tmp3) {
            if (arg0 === 1) {
              let num9 = 3;
              c11 = 3;
              throw value;
            } else if (arg0 === 2) {
              let num8 = 3;
              c11 = 3;
              return { value, done: true };
            } else {
              let num7 = 3;
              c11 = 3;
              return { value: "IconComponent", done: null };
            }
          } else {
            if (3 === tmp3) {
              c8 = 2;
              if (arg0 === 1) {
                let num6 = 3;
                c11 = 3;
                throw value;
              } else {
                c3 = value;
                if (arg0 === 2) {
                  c3 = value;
                  c8 = 1;
                  method = HermesBuiltin.getMethod("return");
                  if (method === undefined) {
                    c8 = 0;
                    closure_1.return();
                    let num5 = 3;
                    c11 = 3;
                    return { value, done: true };
                  } else {
                    const iter2 = method(c3);
                    HermesBuiltin.ensureObject("iterator.return() did not return an object");
                    if (iter2.done) {
                      c8 = 0;
                      value = iter2.value;
                      closure_1.return();
                      let num4 = 3;
                      c11 = 3;
                      obj = { value, done: true };
                      return obj;
                    } else {
                      c10 = 3;
                      let num3 = 1;
                      c11 = 1;
                      return iter2;
                    }
                  }
                } else {
                  c8 = 1;
                  tmp15 = value;
                }
              }
            } else {
              let tmp4 = iter4;
              const tmp6 = closure_9;
              c8 = 1;
              let str = "throw";
              const method1 = HermesBuiltin.getMethod("throw");
              const tmp5 = closure_9;
              if (method1 === undefined) {
                const method2 = HermesBuiltin.getMethod("return");
                if (method2 !== undefined) {
                  HermesBuiltin.ensureObject("iterator.return() did not return an object");
                }
                throw new TypeError("yield* delegate must have a .throw() method");
              } else {
                let tmp8 = iter4;
                const iter = method1(tmp5);
                HermesBuiltin.ensureObject("iterator.throw() did not return an object");
                if (iter.done) {
                  iter3 = iter;
                } else {
                  c10 = 3;
                  let num2 = 1;
                  c11 = 1;
                  return iter;
                }
              }
            }
            const value2 = iter3.value;
            c8 = 0;
          }
          iter3 = next(tmp15);
          HermesBuiltin.ensureObject("iterator.next() did not return an object");
          if (!iter3.done) {
            c10 = 3;
            let num10 = 1;
            c11 = 1;
            return iter3;
          }
        } catch (tmp37) {
          closure_9 = tmp37;
          if (0 === c8) {
            c11 = 3;
            throw tmp37;
          } else if (1 === tmp39) {
            c10 = 1;
          } else {
            c10 = 4;
          }
        }
      }
    })();
  });
  return obj(...arguments);
};
function isMessageRenderable(message) {
  let obj2;
  const iter = message.components[Symbol.iterator]();
  const nextResult = iter.next();
  while (iter !== undefined) {
    let tmp2 = nextResult;
    if (nextResult.type === Server.ComponentType.CONTENT_INVENTORY_ENTRY) {
      let tmp3Result = transformContentInventoryEntryMessageComponent;
      obj = { component: obj2, message };
      obj2 = { contentInventoryEntry: tmp2.contentInventoryEntry };
      if (null == tmp3Result.transformToRowGeneratedContentInventoryEntryComponent(obj)) {
        iter.return();
        let flag = false;
        return false;
      }
    }
    continue;
  }
  return true;
}
let _asyncToGenerator = _asyncToGenerator_mod;
const ImageSizes = Constants.ImageSizes;
const promiseDeduper = new utils_FunctionUtils.PromiseDeduper();
const promiseDeduper3 = new utils_FunctionUtils.PromiseDeduper();
const promiseDeduper4 = new utils_FunctionUtils.PromiseDeduper();
let tmp5 = ReactCompilerGating.isReactCompilerEnabled()
  ? function useLoadMessageContentEntries(arg0) {
      let arr;
      let arr2;
      let first;
      let ref;
      let tmp10;
      let tmp15;
      let tmp19;
      let tmp21;
      let tmp28;
      let tmp34;
      let tmp7;
      _require = arg0;
      const tmp = _require;
      obj = require("react");
      const cResult = obj.c(18);
      if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
        const _Map = Map;
        const self = this;
        const self2 = this;
        map = new Map();
        cResult[0] = map;
        first = map;
      } else {
        first = cResult[0];
      }
      let obj2 = set2;
      let closure_1 = set2.useRef(first);
      if (cResult[1] === Symbol.for("react.memo_cache_sentinel")) {
        const _Map2 = Map;
        const self3 = this;
        const self4 = this;
        map1 = new Map();
        cResult[1] = map1;
        tmp7 = map1;
      } else {
        tmp7 = cResult[1];
      }
      dependencyMap = obj2.useRef(tmp7);
      if (cResult[2] === Symbol.for("react.memo_cache_sentinel")) {
        const _Set = Set;
        const self5 = this;
        const self6 = this;
        set = new Set();
        cResult[2] = set;
        tmp10 = set;
      } else {
        tmp10 = cResult[2];
      }
      const tmp14 = _slicedToArray(obj2.useState(tmp10), 2);
      [arr, _slicedToArray] = tmp14;
      if (cResult[3] === Symbol.for("react.memo_cache_sentinel")) {
        const _Set2 = Set;
        const self7 = this;
        const self8 = this;
        const set1 = new Set();
        cResult[3] = set1;
        tmp15 = set1;
      } else {
        tmp15 = cResult[3];
      }
      [arr2, _asyncToGenerator] = obj2.useState(tmp15);
      _slicedToArray(obj2.useState(tmp15), 2);
      if (cResult[4] === Symbol.for("react.memo_cache_sentinel")) {
        const fn = function v(palette) {
          return palette.palette;
        };
        cResult[4] = fn;
        tmp19 = fn;
      } else {
        tmp19 = cResult[4];
      }
      const tmpResult = tmp(7815);
      const colorStore = tmpResult.useColorStore(tmp19);
      if (cResult[5] === Symbol.for("react.memo_cache_sentinel")) {
        _require = _asyncToGenerator(async (arg0, arg1) => {
          let closure_3;
          let closure_4;
          let current3;
          closure_0 = arg0;
          closure_1 = arg1;
          if (c7 === 2) {
            c7 = 3;
            throw new TypeError("Generator functions may not be called on executing generators");
          } else if (tmp3 === 3) {
            if (arg0 === 1) {
              throw value;
            } else if (arg0 === 2) {
              const obj2 = { value, done: true };
              return obj2;
            } else {
              return { value: "IconComponent", done: null };
            }
          } else {
            let c5;
            try {
              c7 = 2;
              if (0 === c6) {
                if (arg0 === 1) {
                  c7 = 3;
                  throw value;
                } else if (arg0 === 2) {
                  c7 = 3;
                  const obj3 = { value, done: true };
                  return obj3;
                } else if (0 !== closure_1.components.length) {
                  const current7 = closure_1.current;
                  if (!current7.has(closure_0)) {
                    const current6 = closure_1.current;
                    const result = current6.set(closure_0, "loading");
                    tmp((arg0) => {
                      const items = [];
                      items[HermesBuiltin.arraySpread(items, arg0, 0)] = closure_1_0;
                      set = new Set(items);
                      return set;
                    });
                    current3 = current3.current;
                    const result1 = current3.set(closure_0, closure_1);
                    c5 = 1;
                    c6 = 2;
                    c7 = 1;
                    const obj4 = { value: loadContentEntryParts(closure_1), done: false };
                    return obj4;
                  }
                }
              } else if (1 === tmp4) {
                c5 = 0;
                const current4 = closure_1.current;
                const result2 = current4.set(closure_0, "error");
                const current5 = current3.current;
                current5.delete(closure_0);
                current3 = tmp((arg0) => {
                  const items = [...arg0];
                  set = new Set(items.filter((item) => item !== closure_1_0));
                  return set;
                });
                tmp37((arg0) => {
                  const items = [];
                  items[HermesBuiltin.arraySpread(items, arg0, 0)] = closure_1_0;
                  set = new Set(items);
                  return set;
                });
              } else if (arg0 === 1) {
                c7 = 3;
                throw value;
              } else if (arg0 === 2) {
                c5 = 0;
                c7 = 3;
                obj = { value, done: true };
                return obj;
              } else {
                if (isMessageRenderable(closure_1)) {
                  const current = closure_1.current;
                  const result3 = current.set(closure_0, "loaded");
                  const current2 = current3.current;
                  current3 = current2.delete(closure_0);
                  tmp((arg0) => {
                    const items = [...arg0];
                    set = new Set(items.filter((item) => item !== closure_1_0));
                    return set;
                  });
                }
                c5 = 0;
              }
              c7 = 3;
              return { value: "IconComponent", done: null };
            } catch (tmp37) {
              if (0 === c5) {
                c7 = 3;
                throw tmp37;
              } else {
                c6 = 1;
              }
            }
          }
        });
        function t5(arg0, arg1) {
          return closure_0(...arguments);
        }
        cResult[5] = t5;
        tmp21 = t5;
      } else {
        tmp21 = cResult[5];
      }
      let closure_6 = tmp21;
      if (cResult[6] === Symbol.for("react.memo_cache_sentinel")) {
        class A {
          constructor() {
            let ref2;
            if (0 !== ref.current.size) {
              const items = [];
              let current = tmp.current;
              let item = current.forEach((item, index) => {
                if (isMessageRenderable(item)) {
                  items.push(index);
                }
              });
              if (items.length > 0) {
                const item1 = items.forEach((item) => {
                  const current = ref.current;
                  const result = current.set(item, "loaded");
                  const current2 = ref2.current;
                  current2.delete(item);
                });
                closure_3((items) => {
                  set = new Set(items);
                  const item = items.forEach((item) => set.delete(item));
                  return set;
                });
              }
            }
          }
        }
        cResult[6] = A;
      } else {
        class A {
          constructor() {
            let ref2;
            if (0 !== ref.current.size) {
              const items = [];
              let current = tmp.current;
              let item = current.forEach((item, index) => {
                if (isMessageRenderable(item)) {
                  items.push(index);
                }
              });
              if (items.length > 0) {
                const item1 = items.forEach((item) => {
                  const current = ref.current;
                  const result = current.set(item, "loaded");
                  const current2 = ref2.current;
                  current2.delete(item);
                });
                closure_3((items) => {
                  set = new Set(items);
                  const item = items.forEach((item) => set.delete(item));
                  return set;
                });
              }
            }
          }
        }
      }
      if (cResult[7] !== colorStore) {
        class A {
          constructor() {
            let ref2;
            if (0 !== ref.current.size) {
              const items = [];
              let current = tmp.current;
              let item = current.forEach((item, index) => {
                if (isMessageRenderable(item)) {
                  items.push(index);
                }
              });
              if (items.length > 0) {
                const item1 = items.forEach((item) => {
                  const current = ref.current;
                  const result = current.set(item, "loaded");
                  const current2 = ref2.current;
                  current2.delete(item);
                });
                closure_3((items) => {
                  set = new Set(items);
                  const item = items.forEach((item) => set.delete(item));
                  return set;
                });
              }
            }
          }
        }
        tmp25[0] = colorStore;
        cResult[7] = colorStore;
        cResult[8] = tmp25;
      } else {
        class A {
          constructor() {
            let ref2;
            if (0 !== ref.current.size) {
              const items = [];
              let current = tmp.current;
              let item = current.forEach((item, index) => {
                if (isMessageRenderable(item)) {
                  items.push(index);
                }
              });
              if (items.length > 0) {
                const item1 = items.forEach((item) => {
                  const current = ref.current;
                  const result = current.set(item, "loaded");
                  const current2 = ref2.current;
                  current2.delete(item);
                });
                closure_3((items) => {
                  set = new Set(items);
                  const item = items.forEach((item) => set.delete(item));
                  return set;
                });
              }
            }
          }
        }
      }
      const effect = obj2.useEffect(A, tmp25);
      if (cResult[9] !== arg0) {
        class I {
          constructor() {
            const item = closure_0.forEach((id) => {
              if (closure_1(ref[15])(id)) {
                if (null != id.messageSnapshots[0]) {
                  closure_1_6(id.id, id.messageSnapshots[0].message);
                }
              }
              closure_1_6(id.id, id);
            });
          }
        }
        let items = [tmp21, arg0];
        cResult[9] = arg0;
        cResult[10] = I;
        cResult[11] = items;
        tmp28 = items;
      } else {
        class I {
          constructor() {
            const item = closure_0.forEach((id) => {
              if (closure_1(ref[15])(id)) {
                if (null != id.messageSnapshots[0]) {
                  closure_1_6(id.id, id.messageSnapshots[0].message);
                }
              }
              closure_1_6(id.id, id);
            });
          }
        }
        tmp28 = cResult[11];
      }
      const effect1 = obj2.useEffect(I, tmp28);
      if (cResult[12] === arr2) {
        class I {
          constructor() {
            const item = closure_0.forEach((id) => {
              if (closure_1(ref[15])(id)) {
                if (null != id.messageSnapshots[0]) {
                  closure_1_6(id.id, id.messageSnapshots[0].message);
                }
              }
              closure_1_6(id.id, id);
            });
          }
        }
        if (cResult[15] === tmp30) {
          class I {
            constructor() {
              const item = closure_0.forEach((id) => {
                if (closure_1(ref[15])(id)) {
                  if (null != id.messageSnapshots[0]) {
                    closure_1_6(id.id, id.messageSnapshots[0].message);
                  }
                }
                closure_1_6(id.id, id);
              });
            }
          }
          return tmp34;
        }
        let obj3 = { unloadedContentEntryMessageIds: arr, unloadableContentEntryMessageIds: tmp30 };
        cResult[15] = tmp30;
        cResult[16] = arr;
        cResult[17] = obj3;
        tmp34 = obj3;
      }
      set2 = new Set();
      let item = arr.forEach((item) => set2.add(item));
      let item1 = arr2.forEach((item) => set2.add(item));
      cResult[12] = arr2;
      cResult[13] = arr;
      cResult[14] = set2;
    }
  : function useLoadMessageContentEntries(arg0) {
      let closure_4;
      let first1;
      let ref;
      let unloadedContentEntryMessageIds;
      _require = arg0;
      const useRef = first1.useRef;
      map = new Map();
      let closure_1 = useRef(map);
      const useRef2 = first1.useRef;
      map1 = new Map();
      dependencyMap = useRef2(map1);
      const useState = first1.useState;
      set = new Set();
      const tmp4 = unloadedContentEntryMessageIds(useState(set), 2);
      unloadedContentEntryMessageIds = tmp4[0];
      _asyncToGenerator = tmp4[1];
      const useState2 = first1.useState;
      const set1 = new Set();
      const tmp7 = unloadedContentEntryMessageIds(useState2(set1), 2);
      first1 = tmp7[0];
      let closure_6 = tmp7[1];
      obj = require("useAvatarColor");
      const colorStore = obj.useColorStore((palette) => palette.palette);
      const useCallback = first1.useCallback;
      _require = _asyncToGenerator(async (arg0, arg1) => {
        let current3;
        let v1;
        closure_0 = arg0;
        closure_1 = arg1;
        if (c7 === 2) {
          c7 = 3;
          throw new TypeError("Generator functions may not be called on executing generators");
        } else if (tmp3 === 3) {
          if (arg0 === 1) {
            throw value;
          } else if (arg0 === 2) {
            const obj2 = { value, done: true };
            return obj2;
          } else {
            return { value: "IconComponent", done: null };
          }
        } else {
          let c5;
          try {
            c7 = 2;
            if (0 === v1) {
              if (arg0 === 1) {
                c7 = 3;
                throw value;
              } else if (arg0 === 2) {
                c7 = 3;
                const obj3 = { value, done: true };
                return obj3;
              } else {
                let closure_3 = tmp;
                if (0 !== closure_1.components.length) {
                  const current7 = closure_1.current;
                  if (!current7.has(closure_0)) {
                    const current6 = closure_1.current;
                    const result = current6.set(closure_0, "loading");
                    tmp37((arg0) => {
                      const items = [];
                      items[HermesBuiltin.arraySpread(items, arg0, 0)] = closure_1_0;
                      set = new Set(items);
                      return set;
                    });
                    current3 = current3.current;
                    const result1 = current3.set(closure_0, closure_1);
                    c5 = 1;
                    v1 = 2;
                    c7 = 1;
                    const obj4 = { value: loadContentEntryParts(closure_1), done: false };
                    return obj4;
                  }
                }
              }
            } else if (1 === tmp4) {
              c5 = 0;
              const current4 = closure_1.current;
              const result2 = current4.set(closure_0, "error");
              const current5 = current3.current;
              current5.delete(closure_0);
              current3 = tmp37((arg0) => {
                const items = [...arg0];
                set = new Set(items.filter((item) => item !== closure_1_0));
                return set;
              });
              v1((arg0) => {
                const items = [];
                items[HermesBuiltin.arraySpread(items, arg0, 0)] = closure_1_0;
                set = new Set(items);
                return set;
              });
            } else if (arg0 === 1) {
              c7 = 3;
              throw value;
            } else if (arg0 === 2) {
              c5 = 0;
              c7 = 3;
              obj = { value, done: true };
              return obj;
            } else {
              if (isMessageRenderable(closure_1)) {
                const current = closure_1.current;
                const result3 = current.set(closure_0, "loaded");
                const current2 = current3.current;
                current3 = current2.delete(closure_0);
                tmp37((arg0) => {
                  const items = [...arg0];
                  set = new Set(items.filter((item) => item !== closure_1_0));
                  return set;
                });
              }
              c5 = 0;
            }
            c7 = 3;
            return { value: "IconComponent", done: null };
          } catch (tmp37) {
            if (0 === c5) {
              c7 = 3;
              throw tmp37;
            } else {
              v1 = 1;
            }
          }
        }
      });
      const callback = useCallback(function (arg0, arg1) {
        return closure_0(...arguments);
      }, []);
      let items = [colorStore];
      const effect = first1.useEffect(() => {
        let ref2;
        if (0 !== ref.current.size) {
          const items = [];
          let current = tmp.current;
          let item = current.forEach((item, index) => {
            if (isMessageRenderable(item)) {
              items.push(index);
            }
          });
          if (items.length > 0) {
            const item1 = items.forEach((item) => {
              const current = ref.current;
              const result = current.set(item, "loaded");
              const current2 = ref2.current;
              current2.delete(item);
            });
            closure_4((items) => {
              set = new Set(items);
              const item = items.forEach((item) => set.delete(item));
              return set;
            });
          }
        }
      }, items);
      const items1 = [callback, arg0];
      const effect1 = first1.useEffect(() => {
        const item = closure_0.forEach((id) => {
          if (closure_1(ref[15])(id)) {
            if (null != id.messageSnapshots[0]) {
              callback(id.id, id.messageSnapshots[0].message);
            }
          }
          callback(id.id, id);
        });
      }, items1);
      const items2 = [unloadedContentEntryMessageIds, first1];
      let obj2 = {
        unloadedContentEntryMessageIds,
        unloadableContentEntryMessageIds: first1.useMemo(() => {
          set = new Set();
          const item = first.forEach((item) => set.add(item));
          const item1 = first1.forEach((item) => set.add(item));
          return set;
        }, items2),
      };
      return obj2;
    };
let result = size.fileFinishedImporting(
  "modules/interaction_components/content_inventory_entry/native/useLoadMessageContentEntries.tsx",
);

export default tmp5;
