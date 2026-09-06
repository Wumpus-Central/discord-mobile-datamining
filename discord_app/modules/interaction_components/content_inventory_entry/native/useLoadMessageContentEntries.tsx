// discord_app/modules/interaction_components/content_inventory_entry/native/useLoadMessageContentEntries.tsx
import _modDef38 from "../../../../../_runtime/metro/00038__.js";
import Server from "../../../../flow/Server.tsx";
import transformContentInventoryEntryMessageComponent from "../../../messages/native/renderer/transformContentInventoryEntryMessageComponent.tsx";
import useAvatarColor from "../../../avatar/useAvatarColor.tsx";
import _slicedToArray from "../../../../../_runtime/metro/00032__.js";
import asyncGeneratorStep from "../../../../../_runtime/00005_asyncGeneratorStep.js";
import noop from "../../../../../_runtime/metro/00019__.js";
import ApplicationStore from "../../../applications/ApplicationStore.tsx";

require = fn;
function fetchColors(play) {
  closure_0 = play;
  return promiseDeduper1.one(play, () => useAvatarColor.maybeFetchColors(closure_0));
}
let closure_12 = async function _fetchApplicationParts(arg0) {
  if (c4 === 2) {
    c4 = 3;
    throw new TypeError("Generator functions may not be called on executing generators");
  } else if (tmp4 === 3) {
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
      c4 = 2;
      if (0 === c3) {
        if (arg0 === 1) {
          c4 = 3;
          throw value;
        } else if (arg0 === 2) {
          c4 = 3;
          obj = { value, done: true };
          return obj;
        } else {
          closure_2 = tmp5;
          closure_1 = tmp2;
          closure_129_0 = undefined;
          let application;
          let iconURL;
          if ("application_id" in _require.extra) {
            const application_id = _require.extra.application_id;
            closure_129_0 = application_id;
            c3 = 1;
            c4 = 1;
            const obj1 = {
              value: (function fetchApplication(application_id) {
                closure_0 = application_id;
                return closure_9.one(application_id, () => {
                  const items = [closure_0];
                  return closure_2_1(closure_2_2[7]).fetchApplications(items);
                });
              })(application_id),
              done: false,
            };
            return obj1;
          }
        }
      } else if (1 === tmp5) {
        if (arg0 === 1) {
          c4 = 3;
          throw value;
        } else if (arg0 === 2) {
          c4 = 3;
          const obj2 = { value, done: true };
          return obj2;
        } else {
          application = closure_130_6.getApplication(closure_129_0);
          closure_130_1(closure_130_2[9])(null != application, "failed to fetch application");
          iconURL = application.getIconURL(closure_130_7.LARGE);
          if (null != iconURL) {
            c3 = 2;
            c4 = 1;
            const obj3 = { value: closure_130_11(iconURL), done: false };
            return obj3;
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
      return { value: "HermesInternal", done: null };
    } catch (tmp6) {
      c4 = tmp;
      throw tmp6;
    }
  }
};
let closure_13 = async function _fetchUserParts(arg0) {
  let author_id = arg0;
  c2 = 0;
  c1 = 0;
  return (async (arg0) => {
    if (c1 === 2) {
      c1 = 3;
      throw new TypeError("Generator functions may not be called on executing generators");
    } else if (tmp3 === 3) {
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
        c1 = 2;
        if (0 === c2) {
          if (arg0 === 1) {
            c1 = 3;
            throw value;
          } else if (arg0 === 2) {
            c1 = 3;
            obj = { value, done: true };
            return obj;
          } else {
            c2 = 1;
            c1 = 1;
            let obj1 = {
              value: (function fetchUser(author_id) {
                closure_0 = author_id;
                return closure_8.one(
                  author_id,
                  closure_4(function* () {
                    if (v3 === 2) {
                      v3 = 3;
                      throw new TypeError("Generator functions may not be called on executing generators");
                    } else if (tmp3 === 3) {
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
                        v3 = 2;
                        if (0 === c1) {
                          if (arg0 === 1) {
                            v3 = 3;
                            throw value;
                          } else if (arg0 === 2) {
                            v3 = 3;
                            obj = { value, done: true };
                            return obj;
                          } else {
                            let obj1 = v3(closure_1_2[6]);
                            c1 = 1;
                            v3 = 1;
                            obj1 = { value: null, done: false };
                            obj1.value = obj1.getUser(closure_0);
                            return obj1;
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
                          return { value: "HermesInternal", done: null };
                        }
                      } catch (tmp8) {
                        v3 = tmp;
                        throw tmp8;
                      }
                    }
                  }),
                );
              })(author_id.author_id),
              done: false,
            };
            return obj1;
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
          return { value: "HermesInternal", done: null };
        }
      } catch (tmp6) {
        c1 = tmp;
        throw tmp6;
      }
    }
  })();
};
let closure_14 = async function _fetchWatchedContentParts(arg0) {
  let extra = arg0;
  c2 = 0;
  c1 = 0;
  return (async (arg0) => {
    if (c1 === 2) {
      c1 = 3;
      throw new TypeError("Generator functions may not be called on executing generators");
    } else if (tmp3 === 3) {
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
        c1 = 2;
        if (0 === c2) {
          if (arg0 === 1) {
            c1 = 3;
            throw value;
          } else if (arg0 === 2) {
            c1 = 3;
            obj = { value, done: true };
            return obj;
          } else if ("application_id" in extra.extra) {
            if ("media_assets_large_image" in extra.extra) {
              let obj1 = require("ApplicationAssetUtils");
              const items = [,];
              ({ LARGE: arr[0], LARGE: arr[1] } = ImageSizes);
              const assetImage = obj1.getAssetImage(
                extra.extra.application_id,
                extra.extra.media_assets_large_image,
                items,
              );
              if (null != assetImage) {
                c2 = 1;
                c1 = 1;
                obj1 = { value: fetchColors(assetImage), done: false };
                return obj1;
              }
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
        return { value: "HermesInternal", done: null };
      } catch (tmp11) {
        c1 = tmp;
        throw tmp11;
      }
    }
  })();
};
let closure_15 = async function _fetchListenedContentParts(arg0) {
  if (c1 === 2) {
    c1 = 3;
    throw new TypeError("Generator functions may not be called on executing generators");
  } else if (tmp3 === 3) {
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
      c1 = 2;
      if (0 === c2) {
        if (arg0 === 1) {
          c1 = 3;
          throw value;
        } else if (arg0 === 2) {
          c1 = 3;
          obj = { value, done: true };
          return obj;
        } else if ("entries" in _require.extra) {
          const image_url = _require.extra.entries[0].media.image_url;
          if (null != image_url) {
            c2 = 1;
            c1 = 1;
            const obj1 = { value: fetchColors(image_url), done: false };
            return obj1;
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
      return { value: "HermesInternal", done: null };
    } catch (tmp7) {
      c1 = tmp;
      throw tmp7;
    }
  }
};
let closure_16 = async function _fetchTopArtistContentParts(arg0) {
  if (c1 === 2) {
    c1 = 3;
    throw new TypeError("Generator functions may not be called on executing generators");
  } else if (tmp3 === 3) {
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
      c1 = 2;
      if (0 === c2) {
        if (arg0 === 1) {
          c1 = 3;
          throw value;
        } else if (arg0 === 2) {
          c1 = 3;
          obj = { value, done: true };
          return obj;
        } else if ("media" in _require.extra) {
          const image_url = _require.extra.media.image_url;
          _modDef38(null != image_url, "missing image url for top artist");
          let obj1 = require("useAvatarColor");
          c2 = 1;
          c1 = 1;
          obj1 = { value: null, done: false };
          obj1.value = obj1.maybeFetchColors(image_url);
          return obj1;
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
      return { value: "HermesInternal", done: null };
    } catch (tmp10) {
      c1 = tmp;
      throw tmp10;
    }
  }
};
let closure_17 = async function _loadContentEntryParts(arg0) {
  let components = arg0;
  c10 = 0;
  c11 = 0;
  c8 = 0;
  return (async (arg0) => {
    if (c11 === 2) {
      c11 = 3;
      throw new TypeError("Generator functions may not be called on executing generators");
    } else if (tmp7 === 3) {
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
        c11 = 2;
        if (0 === c10) {
          if (arg0 === 1) {
            c11 = 3;
            throw value;
          } else if (arg0 === 2) {
            c11 = 3;
            obj = { value, done: true };
            return obj;
          } else {
            closure_7 = tmp5;
            closure_135_2 = undefined;
            closure_135_0 = [];
            closure_135_1 = async function _loop() {
              if (v3 === 2) {
                v3 = 3;
                throw new TypeError("Generator functions may not be called on executing generators");
              } else if (tmp3 === 3) {
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
                  v3 = 2;
                  if (arg0 === 1) {
                    v3 = 3;
                    throw value;
                  } else if (arg0 === 2) {
                    v3 = 3;
                    obj = { value, done: true };
                    return obj;
                  } else {
                    if (components.type === v3(closure_1_2[11]).ComponentType.CONTENT_INVENTORY_ENTRY) {
                      closure_1 = function _fetchEntryParts() {
                        const self = this;
                        const tmp = closure_2_4(function* () {
                          if (c0 === 2) {
                            c0 = 3;
                            throw new TypeError("Generator functions may not be called on executing generators");
                          } else if (tmp3 === 3) {
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
                              c0 = 2;
                              if (0 === c1) {
                                if (arg0 === 1) {
                                  c0 = 3;
                                  throw value;
                                } else if (arg0 === 2) {
                                  c0 = 3;
                                  obj = { value, done: true };
                                  return obj;
                                } else {
                                  c1 = 1;
                                  c0 = 1;
                                  const obj1 = { value: Promise.all(items), done: false };
                                  return obj1;
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
                                return { value: "HermesInternal", done: null };
                              }
                            } catch (tmp7) {
                              c0 = tmp;
                              throw tmp7;
                            }
                          }
                        });
                        closure_1 = tmp;
                        const apply = tmp.apply;
                        if (typeof apply === "unknown") {
                          let applyArgumentsResult = HermesBuiltin.applyArguments(self);
                        } else {
                          applyArgumentsResult = apply(self, arguments);
                        }
                        return applyArgumentsResult;
                      };
                      const contentInventoryEntry = components.contentInventoryEntry;
                      const items = [];
                      items.push(
                        (function fetchApplicationParts() {
                          const self = this;
                          const apply = closure_1_12.apply;
                          if (typeof apply === "unknown") {
                            let applyArgumentsResult = HermesBuiltin.applyArguments(self);
                          } else {
                            applyArgumentsResult = apply(self, arguments);
                          }
                          return applyArgumentsResult;
                        })(contentInventoryEntry),
                      );
                      items.push(
                        (function fetchUserParts() {
                          const self = this;
                          const apply = closure_1_13.apply;
                          if (typeof apply === "unknown") {
                            let applyArgumentsResult = HermesBuiltin.applyArguments(self);
                          } else {
                            applyArgumentsResult = apply(self, arguments);
                          }
                          return applyArgumentsResult;
                        })(contentInventoryEntry),
                      );
                      items.push(
                        (function fetchWatchedContentParts() {
                          const self = this;
                          const apply = closure_1_14.apply;
                          if (typeof apply === "unknown") {
                            let applyArgumentsResult = HermesBuiltin.applyArguments(self);
                          } else {
                            applyArgumentsResult = apply(self, arguments);
                          }
                          return applyArgumentsResult;
                        })(contentInventoryEntry),
                      );
                      items.push(
                        (function fetchListenedContentParts() {
                          const self = this;
                          const apply = closure_1_15.apply;
                          if (typeof apply === "unknown") {
                            let applyArgumentsResult = HermesBuiltin.applyArguments(self);
                          } else {
                            applyArgumentsResult = apply(self, arguments);
                          }
                          return applyArgumentsResult;
                        })(contentInventoryEntry),
                      );
                      items.push(
                        (function fetchTopArtistContentParts() {
                          const self = this;
                          const apply = closure_1_16.apply;
                          if (typeof apply === "unknown") {
                            let applyArgumentsResult = HermesBuiltin.applyArguments(self);
                          } else {
                            applyArgumentsResult = apply(self, arguments);
                          }
                          return applyArgumentsResult;
                        })(contentInventoryEntry),
                      );
                      closure_2_0.push(
                        (function fetchEntryParts() {
                          const self = this;
                          const apply = closure_1.apply;
                          if (typeof apply === "unknown") {
                            let applyArgumentsResult = HermesBuiltin.applyArguments(self);
                          } else {
                            applyArgumentsResult = apply(self, arguments);
                          }
                          return applyArgumentsResult;
                        })(),
                      );
                    }
                    v3 = 3;
                    return { value: "HermesInternal", done: null };
                  }
                } catch (tmp4) {
                  v3 = tmp;
                  throw tmp4;
                }
              }
            };
            components = components.components;
            closure_1 = components[Symbol.iterator]();
            if (closure_1 === undefined) {
              c10 = 2;
              c11 = 1;
              let obj1 = { value: Promise.all(closure_135_0), done: false };
              return obj1;
            } else {
              c8 = 1;
              closure_135_2 = tmp34;
              iter4 = closure_135_1()[tmp50.iterator]();
              HermesBuiltin.ensureObject("iterator is not an object");
              next = iter4.next;
              closure_3 = undefined;
              const tmp55 = closure_135_1();
            }
          }
        } else if (1 === tmp8) {
          c8 = 0;
          closure_1.return();
          throw closure_9;
        } else if (2 === tmp8) {
          if (arg0 === 1) {
            c11 = 3;
            throw value;
          } else if (arg0 === 2) {
            c11 = 3;
            const obj2 = { value, done: true };
            return obj2;
          } else {
            c11 = 3;
            return { value: "HermesInternal", done: null };
          }
        } else {
          if (3 === tmp8) {
            c8 = 2;
            if (arg0 === 1) {
              c11 = 3;
              throw value;
            } else {
              closure_3 = value;
              if (arg0 === 2) {
                closure_3 = value;
                c8 = 1;
                const method = HermesBuiltin.getMethod("return");
                if (method === undefined) {
                  c8 = 0;
                  closure_1.return();
                  c11 = 3;
                  const obj3 = { value, done: true };
                  return obj3;
                } else {
                  const iter2 = method(closure_3);
                  HermesBuiltin.ensureObject("iterator.return() did not return an object");
                  if (iter2.done) {
                    c8 = 0;
                    closure_1.return();
                    c11 = 3;
                    obj = { value: iter2.value, done: true };
                    return obj;
                  } else {
                    c10 = 3;
                    c11 = 1;
                    return iter2;
                  }
                }
              } else {
                c8 = 1;
                const tmp20 = value;
              }
            }
          } else {
            c8 = 1;
            const method1 = HermesBuiltin.getMethod("throw");
            if (method1 === undefined) {
              const method2 = HermesBuiltin.getMethod("return");
              if (method2 !== undefined) {
                HermesBuiltin.ensureObject("iterator.return() did not return an object");
              }
              throw new TypeError("yield* delegate must have a .throw() method");
            } else {
              const iter = method1(tmp10);
              HermesBuiltin.ensureObject("iterator.throw() did not return an object");
              if (iter.done) {
                iter3 = iter;
              } else {
                c10 = 3;
                c11 = 1;
                return iter;
              }
            }
            tmp10 = closure_9;
          }
          value = iter3.value;
          c8 = 0;
        }
        iter3 = next(tmp20);
        HermesBuiltin.ensureObject("iterator.next() did not return an object");
        if (!iter3.done) {
          c10 = 3;
          c11 = 1;
          return iter3;
        }
      } catch (tmp42) {
        closure_9 = tmp42;
        if (tmp3 === c8) {
          c11 = tmp2;
          throw tmp42;
        } else if (tmp === tmp44) {
          c10 = tmp;
        } else {
          c10 = tmp4;
        }
      }
    }
  })();
};
function isMessageRenderable(message) {
  const iter = message.components[Symbol.iterator]();
  const nextResult = iter.next();
  while (iter !== undefined) {
    let tmp2 = nextResult;
    if (nextResult.type === Server.ComponentType.CONTENT_INVENTORY_ENTRY) {
      let tmp3Result = transformContentInventoryEntryMessageComponent;
      let obj = { component: null, message: null };
      obj = { contentInventoryEntry: null };
      obj.contentInventoryEntry = tmp2.contentInventoryEntry;
      obj.component = obj;
      obj.message = message;
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
const ImageSizes = fn(1920).ImageSizes;
new fn(9028).PromiseDeduper();
const promiseDeduper = new fn(9028).PromiseDeduper();
const promiseDeduper1 = new fn(9028).PromiseDeduper();
const size = fn(2);
let result = size.fileFinishedImporting(
  "modules/interaction_components/content_inventory_entry/native/useLoadMessageContentEntries.tsx",
);

export default function useLoadMessageContentEntries(arg0) {
  _require = arg0;
  closure_1 = first1.useRef(new Map());
  const map = new Map();
  dependencyMap = first1.useRef(new Map());
  map1 = new Map();
  const tmp4 = unloadedContentEntryMessageIds(first1.useState(new Set()), 2);
  unloadedContentEntryMessageIds = tmp4[0];
  asyncGeneratorStep = tmp4[1];
  let set = new Set();
  const tmp7 = unloadedContentEntryMessageIds(first1.useState(new Set()), 2);
  first1 = tmp7[0];
  closure_6 = tmp7[1];
  let obj = require("useAvatarColor");
  const colorStore = obj.useColorStore((palette) => palette.palette);
  _require = asyncGeneratorStep(async (arg0, arg1) => {
    if (c7 === 2) {
      c7 = 3;
      throw new TypeError("Generator functions may not be called on executing generators");
    } else if (tmp7 === 3) {
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
        c7 = 2;
        if (0 === v2) {
          if (arg0 === 1) {
            c7 = 3;
            throw value;
          } else if (arg0 === 2) {
            c7 = 3;
            obj = { value, done: true };
            return obj;
          } else {
            closure_3 = tmp3;
            closure_130_0 = closure_0;
            closure_130_1 = closure_1;
            if (0 !== closure_1.components.length) {
              const current7 = closure_1.current;
              if (!current7.has(closure_0)) {
                const current5 = closure_1.current;
                const result = current5.set(closure_0, "loading");
                tmp42((arg0) => {
                  const items = [];
                  items[HermesBuiltin.arraySpread(arg0, 0)] = closure_1_0;
                  return new Set(items);
                });
                const current6 = tmp5.current;
                const result1 = current6.set(closure_0, closure_1);
                c5 = 1;
                v2 = 2;
                c7 = 1;
                const obj1 = {
                  value: (function loadContentEntryParts() {
                    const self = this;
                    const apply = closure_1_17.apply;
                    if (typeof apply === "unknown") {
                      let applyArgumentsResult = HermesBuiltin.applyArguments(self);
                    } else {
                      applyArgumentsResult = apply(self, arguments);
                    }
                    return applyArgumentsResult;
                  })(closure_1),
                  done: false,
                };
                return obj1;
              }
            }
          }
        } else {
          if (1 === tmp8) {
            c5 = 0;
            const current3 = closure_1.current;
            const result2 = current3.set(closure_130_0, "error");
            const current4 = tmp5.current;
            current4.delete(closure_130_0);
            tmp42((arg0) => {
              const items = [...arg0];
              return new Set(items.filter((item) => item !== closure_1_0));
            });
            v2((arg0) => {
              const items = [];
              items[HermesBuiltin.arraySpread(arg0, 0)] = closure_1_0;
              return new Set(items);
            });
          } else if (arg0 === 1) {
            c7 = 3;
            throw value;
          } else if (arg0 !== 2) {
            if (isMessageRenderable(closure_130_1)) {
              const current = closure_1.current;
              const result3 = current.set(closure_130_0, "loaded");
              const current2 = tmp5.current;
              current2.delete(closure_130_0);
              tmp42((arg0) => {
                const items = [...arg0];
                return new Set(items.filter((item) => item !== closure_1_0));
              });
            }
            c5 = 0;
          }
          c5 = 0;
          c7 = 3;
          obj = { value, done: true };
          return obj;
        }
        c7 = 3;
      } catch (tmp42) {
        if (tmp4 === c5) {
          c7 = tmp2;
          throw tmp42;
        } else {
          v2 = tmp;
        }
      }
    }
  });
  const callback = first1.useCallback(function (arg0, arg1) {
    const self = this;
    const apply = closure_0.apply;
    if (typeof apply === "unknown") {
      let applyArgumentsResult = HermesBuiltin.applyArguments(self);
    } else {
      applyArgumentsResult = apply(self, arguments);
    }
    return applyArgumentsResult;
  }, []);
  let items = [colorStore];
  const effect = first1.useEffect(() => {
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
          const set = new Set(items);
          const item = items.forEach((item) => set.delete(item));
          return set;
        });
      }
    }
  }, items);
  const items1 = [callback, arg0];
  const effect1 = first1.useEffect(() => {
    const item = closure_0.forEach((id) => {
      if (closure_1(closure_2[13])(id)) {
        if (null != id.messageSnapshots[0]) {
          callback(id.id, id.messageSnapshots[0].message);
        }
      }
      callback(id.id, id);
    });
  }, items1);
  const items2 = [unloadedContentEntryMessageIds, first1];
  obj = {
    unloadedContentEntryMessageIds,
    unloadableContentEntryMessageIds: first1.useMemo(() => {
      const set = new Set();
      const item = first.forEach((item) => set.add(item));
      const item1 = first1.forEach((item) => set.add(item));
      return set;
    }, items2),
  };
  return obj;
}
