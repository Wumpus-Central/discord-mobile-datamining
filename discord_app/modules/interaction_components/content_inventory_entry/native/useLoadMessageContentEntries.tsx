// === Module 10760: fetchColors ===

// Module 10760 (fetchColors)
import PermissionOverwriteType from "PermissionOverwriteType" /* 1954 */;
import closure_3 from "_slicedToArray" /* 32 */;
import closure_4 from "asyncGeneratorStep" /* 5 */;
import closure_5 from "noop" /* 19 */;
import closure_6 from "addApplication" /* 4482 */;
import { ImageSizes } from "items3" /* 4485 */;

require = arg1;
function fetchColors(play) {
  closure_0 = play;
  return promiseDeduper1.one(play, () => play(closure_1_2[8]).maybeFetchColors(play));
}
function _fetchApplicationParts() {
  const self = this;
  const tmp = callback((arg0) => {
    closure_0 = arg0;
    c3 = 0;
    c4 = 0;
    return (function*(arg0) {
      if (c4 === 2) {
        c4 = 3;
        HermesBuiltin.throwTypeError();
      } else if (tmp4 === 3) {
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
          c4 = 2;
          if (0 === c3) {
            if (arg0 === 1) {
              c4 = 3;
              throw arg1;
            } else if (arg0 === 2) {
              c4 = 3;
              obj = { value: null, done: true };
              obj[0] = arg1;
              return obj;
            } else {
              let table = tmp5;
              let iconURL = tmp2;
              let application_id;
              iconURL = undefined;
              table = undefined;
              if ("application_id" in application_id.extra) {
                application_id = application_id.extra.application_id;
                c3 = 1;
                c4 = 1;
                obj1 = { value: null, done: false };
                obj1[0] = (function fetchApplication(application_id) {
                  closure_0 = application_id;
                  return closure_9.one(application_id, () => {
                    const items = [closure_0];
                    return closure_1_1(closure_1_2[7]).fetchApplications(items);
                  });
                })(application_id);
                return obj1;
              }
            }
          } else if (1 === tmp5) {
            if (arg0 === 1) {
              c4 = 3;
              throw arg1;
            } else if (arg0 === 2) {
              c4 = 3;
              const obj2 = { value: null, done: true };
              obj2[0] = arg1;
              return obj2;
            } else {
              iconURL = application.getApplication(application_id);
              iconURL(table[9])(null != iconURL, "failed to fetch application");
              table = iconURL.getIconURL(constants.LARGE);
              if (null != table) {
                c3 = 2;
                c4 = 1;
                const obj3 = { value: null, done: false };
                obj3[0] = callback(table);
                return obj3;
              }
            }
          } else if (arg0 === 1) {
            c4 = 3;
            throw arg1;
          } else if (arg0 === 2) {
            c4 = 3;
            obj = { value: null, done: true };
            obj[0] = arg1;
            return obj;
          }
          c4 = 3;
          return { value: "HermesInternal", done: null };
        } catch (tmp6) {
          c4 = tmp;
          throw tmp6;
        }
      }
    })();
  });
  closure_12 = tmp;
  const apply = tmp.apply;
  if (typeof apply === "unknown") {
    let applyArgumentsResult = HermesBuiltin.applyArguments(self);
  } else {
    applyArgumentsResult = apply(self, arguments);
  }
  return applyArgumentsResult;
}
function _fetchUserParts() {
  const self = this;
  const tmp = callback((arg0) => {
    closure_0 = arg0;
    c2 = 0;
    c1 = 0;
    return (function*(arg0) {
      if (c1 === 2) {
        c1 = 3;
        HermesBuiltin.throwTypeError();
      } else if (tmp3 === 3) {
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
          c1 = 2;
          if (0 === c2) {
            if (arg0 === 1) {
              c1 = 3;
              throw arg1;
            } else if (arg0 === 2) {
              c1 = 3;
              obj = { value: null, done: true };
              obj[0] = arg1;
              return obj;
            } else {
              c2 = 1;
              c1 = 1;
              obj1 = { value: null, done: false };
              obj1[0] = (function fetchUser(author_id) {
                closure_0 = author_id;
                return closure_8.one(author_id, callback(function*() {
                  if (v0 === 2) {
                    v0 = 3;
                    HermesBuiltin.throwTypeError();
                  } else if (tmp3 === 3) {
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
                      v0 = 2;
                      if (0 === c1) {
                        if (arg0 === 1) {
                          v0 = 3;
                          throw arg1;
                        } else if (arg0 === 2) {
                          v0 = 3;
                          obj = { value: null, done: true };
                          obj[0] = arg1;
                          return obj;
                        } else {
                          obj1 = v0(closure_1_2[6]);
                          c1 = 1;
                          v0 = 1;
                          obj1 = { value: null, done: false };
                          obj1[0] = obj1.getUser(v0);
                          return obj1;
                        }
                      } else if (arg0 === 1) {
                        v0 = 3;
                        throw arg1;
                      } else if (arg0 === 2) {
                        v0 = 3;
                        obj = { value: null, done: true };
                        obj[0] = arg1;
                        return obj;
                      } else {
                        v0 = 3;
                        return { value: "HermesInternal", done: null };
                      }
                    } catch (tmp8) {
                      v0 = tmp;
                      throw tmp8;
                    }
                  }
                }));
              })(author_id.author_id);
              return obj1;
            }
          } else if (arg0 === 1) {
            c1 = 3;
            throw arg1;
          } else if (arg0 === 2) {
            c1 = 3;
            obj = { value: null, done: true };
            obj[0] = arg1;
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
  });
  closure_13 = tmp;
  const apply = tmp.apply;
  if (typeof apply === "unknown") {
    let applyArgumentsResult = HermesBuiltin.applyArguments(self);
  } else {
    applyArgumentsResult = apply(self, arguments);
  }
  return applyArgumentsResult;
}
function _fetchWatchedContentParts() {
  const self = this;
  const tmp = callback((arg0) => {
    closure_0 = arg0;
    c2 = 0;
    c1 = 0;
    return (function*(arg0) {
      if (c1 === 2) {
        c1 = 3;
        HermesBuiltin.throwTypeError();
      } else if (tmp3 === 3) {
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
          c1 = 2;
          if (0 === table) {
            if (arg0 === 1) {
              c1 = 3;
              throw arg1;
            } else if (arg0 === 2) {
              c1 = 3;
              obj = { value: null, done: true };
              obj[0] = arg1;
              return obj;
            } else if ("application_id" in lib.extra) {
              if ("media_assets_large_image" in tmp17.extra) {
                obj1 = lib(table[10]);
                const items = [, ];
                ({ LARGE: arr[0], LARGE: arr[1] } = closure_1_7);
                const assetImage = obj1.getAssetImage(tmp17.extra.application_id, tmp17.extra.media_assets_large_image, items);
                if (null != assetImage) {
                  table = 1;
                  c1 = 1;
                  obj1 = { value: null, done: false };
                  obj1[0] = closure_1_11(assetImage);
                  return obj1;
                }
              }
            }
          } else if (arg0 === 1) {
            c1 = 3;
            throw arg1;
          } else if (arg0 === 2) {
            c1 = 3;
            obj = { value: null, done: true };
            obj[0] = arg1;
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
  });
  closure_14 = tmp;
  const apply = tmp.apply;
  if (typeof apply === "unknown") {
    let applyArgumentsResult = HermesBuiltin.applyArguments(self);
  } else {
    applyArgumentsResult = apply(self, arguments);
  }
  return applyArgumentsResult;
}
function _fetchListenedContentParts() {
  const self = this;
  const tmp = callback((arg0) => {
    closure_0 = arg0;
    c2 = 0;
    c1 = 0;
    return (function*(arg0) {
      if (c1 === 2) {
        c1 = 3;
        HermesBuiltin.throwTypeError();
      } else if (tmp3 === 3) {
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
          c1 = 2;
          if (0 === c2) {
            if (arg0 === 1) {
              c1 = 3;
              throw arg1;
            } else if (arg0 === 2) {
              c1 = 3;
              obj = { value: null, done: true };
              obj[0] = arg1;
              return obj;
            } else if ("entries" in closure_0.extra) {
              const image_url = closure_0.extra.entries[0].media.image_url;
              if (null != image_url) {
                c2 = 1;
                c1 = 1;
                obj1 = { value: null, done: false };
                obj1[0] = closure_1_11(image_url);
                return obj1;
              }
            }
          } else if (arg0 === 1) {
            c1 = 3;
            throw arg1;
          } else if (arg0 === 2) {
            c1 = 3;
            obj = { value: null, done: true };
            obj[0] = arg1;
            return obj;
          }
          c1 = 3;
          return { value: "HermesInternal", done: null };
        } catch (tmp7) {
          c1 = tmp;
          throw tmp7;
        }
      }
    })();
  });
  closure_15 = tmp;
  const apply = tmp.apply;
  if (typeof apply === "unknown") {
    let applyArgumentsResult = HermesBuiltin.applyArguments(self);
  } else {
    applyArgumentsResult = apply(self, arguments);
  }
  return applyArgumentsResult;
}
function _fetchTopArtistContentParts() {
  const self = this;
  const tmp = callback((arg0) => {
    closure_0 = arg0;
    c2 = 0;
    c1 = 0;
    return (function*(arg0) {
      if (v0 === 2) {
        v0 = 3;
        HermesBuiltin.throwTypeError();
      } else if (tmp3 === 3) {
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
          v0 = 2;
          if (0 === dependencyMap) {
            if (arg0 === 1) {
              v0 = 3;
              throw arg1;
            } else if (arg0 === 2) {
              v0 = 3;
              obj = { value: null, done: true };
              obj[0] = arg1;
              return obj;
            } else if ("media" in lib.extra) {
              const image_url = lib.extra.media.image_url;
              v0(38)(null != image_url, "missing image url for top artist");
              obj1 = lib(8384);
              dependencyMap = 1;
              v0 = 1;
              obj1 = { value: null, done: false };
              obj1[0] = obj1.maybeFetchColors(image_url);
              return obj1;
            }
          } else if (arg0 === 1) {
            v0 = 3;
            throw arg1;
          } else if (arg0 === 2) {
            v0 = 3;
            obj = { value: null, done: true };
            obj[0] = arg1;
            return obj;
          }
          v0 = 3;
          return { value: "HermesInternal", done: null };
        } catch (tmp10) {
          v0 = tmp;
          throw tmp10;
        }
      }
    })();
  });
  closure_16 = tmp;
  const apply = tmp.apply;
  if (typeof apply === "unknown") {
    let applyArgumentsResult = HermesBuiltin.applyArguments(self);
  } else {
    applyArgumentsResult = apply(self, arguments);
  }
  return applyArgumentsResult;
}
function _loadContentEntryParts() {
  let self = this;
  let tmp = callback((arg0) => {
    closure_0 = arg0;
    c10 = 0;
    c11 = 0;
    c8 = 0;
    return (function*(arg0) {
      if (c11 === 2) {
        c11 = 3;
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
          c11 = 2;
          if (0 === c10) {
            if (arg0 === 1) {
              c11 = 3;
              throw arg1;
            } else if (arg0 === 2) {
              c11 = 3;
              obj = { value: null, done: true };
              obj[0] = arg1;
              return obj;
            } else {
              closure_7 = tmp5;
              let components;
              components = [];
              let lib = function* _loop() {
                if (arr === 2) {
                  arr = 3;
                  HermesBuiltin.throwTypeError();
                } else if (tmp3 === 3) {
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
                    arr = 2;
                    if (arg0 === 1) {
                      arr = 3;
                      throw arg1;
                    } else if (arg0 === 2) {
                      arr = 3;
                      obj = { value: null, done: true };
                      obj[0] = arg1;
                      return obj;
                    } else {
                      if (closure_1_2.type === arr(closure_1_2[11]).ComponentType.CONTENT_INVENTORY_ENTRY) {
                        function _fetchEntryParts() {
                          const self = this;
                          const tmp = closure_1_4(/* F121951 */ function() { ... });
                          closure_1 = tmp;
                          const apply = tmp.apply;
                          if (typeof apply === "unknown") {
                            let applyArgumentsResult = HermesBuiltin.applyArguments(self);
                          } else {
                            applyArgumentsResult = apply(self, arguments);
                          }
                          return applyArgumentsResult;
                        }
                        const contentInventoryEntry = closure_1_2.contentInventoryEntry;
                        const items = [];
                        arr = items;
                        arr = items.push((function fetchApplicationParts(contentInventoryEntry) {
                          const self = this;
                          const apply = closure_12.apply;
                          if (typeof apply === "unknown") {
                            let applyArgumentsResult = HermesBuiltin.applyArguments(self);
                          } else {
                            applyArgumentsResult = apply(self, arguments);
                          }
                          return applyArgumentsResult;
                        })(contentInventoryEntry));
                        arr = items.push((function fetchUserParts(contentInventoryEntry) {
                          const self = this;
                          const apply = closure_13.apply;
                          if (typeof apply === "unknown") {
                            let applyArgumentsResult = HermesBuiltin.applyArguments(self);
                          } else {
                            applyArgumentsResult = apply(self, arguments);
                          }
                          return applyArgumentsResult;
                        })(contentInventoryEntry));
                        items.push((function fetchWatchedContentParts(contentInventoryEntry) {
                          const self = this;
                          const apply = closure_14.apply;
                          if (typeof apply === "unknown") {
                            let applyArgumentsResult = HermesBuiltin.applyArguments(self);
                          } else {
                            applyArgumentsResult = apply(self, arguments);
                          }
                          return applyArgumentsResult;
                        })(contentInventoryEntry));
                        items.push((function fetchListenedContentParts(contentInventoryEntry) {
                          const self = this;
                          const apply = closure_15.apply;
                          if (typeof apply === "unknown") {
                            let applyArgumentsResult = HermesBuiltin.applyArguments(self);
                          } else {
                            applyArgumentsResult = apply(self, arguments);
                          }
                          return applyArgumentsResult;
                        })(contentInventoryEntry));
                        items.push((function fetchTopArtistContentParts(contentInventoryEntry) {
                          const self = this;
                          const apply = closure_16.apply;
                          if (typeof apply === "unknown") {
                            let applyArgumentsResult = HermesBuiltin.applyArguments(self);
                          } else {
                            applyArgumentsResult = apply(self, arguments);
                          }
                          return applyArgumentsResult;
                        })(contentInventoryEntry));
                        arr.push((function fetchEntryParts() {
                          const self = this;
                          const apply = _fetchEntryParts.apply;
                          if (typeof apply === "unknown") {
                            let applyArgumentsResult = HermesBuiltin.applyArguments(self);
                          } else {
                            applyArgumentsResult = apply(self, arguments);
                          }
                          return applyArgumentsResult;
                        })());
                      }
                      arr = 3;
                      return { value: "HermesInternal", done: null };
                    }
                  } catch (tmp4) {
                    arr = tmp;
                    throw tmp4;
                  }
                }
              };
              components = components.components;
              lib = components[Symbol.iterator]();
              if (lib === undefined) {
                c10 = 2;
                c11 = 1;
                obj1 = { value: null, done: false };
                obj1[0] = Promise.all(components);
                return obj1;
              } else {
                c8 = 1;
                components = tmp35;
                const iter4 = lib()[tmp52.iterator]();
                HermesBuiltin.ensureObject("iterator is not an object");
                const next = iter4.next;
                closure_3 = undefined;
                const tmp57 = lib();
              }
            }
          } else if (1 === tmp8) {
            c8 = 0;
            lib.return();
            throw closure_9;
          } else if (2 === tmp8) {
            if (arg0 === 1) {
              c11 = 3;
              throw arg1;
            } else if (arg0 === 2) {
              c11 = 3;
              const obj2 = { value: null, done: true };
              obj2[0] = arg1;
              return obj2;
            } else {
              c11 = 3;
              return { value: "HermesInternal", done: null };
            }
          } else {
            if (3 !== tmp8) {
              c8 = 1;
              const method = HermesBuiltin.getMethod("throw");
              if (method === undefined) {
                const method1 = HermesBuiltin.getMethod("return");
                if (method1 !== undefined) {
                  HermesBuiltin.ensureObject("iterator.return() did not return an object");
                }
                HermesBuiltin.throwTypeError();
              } else {
                const iter = method(tmp10);
                HermesBuiltin.ensureObject("iterator.throw() did not return an object");
                if (iter.done) {
                  let iter3 = iter;
                } else {
                  c10 = 3;
                  c11 = 1;
                  return iter;
                }
              }
              const value = iter3.value;
              c8 = 0;
              tmp10 = closure_9;
            }
            c8 = 2;
            if (arg0 === 1) {
              c11 = 3;
              throw arg1;
            } else {
              closure_3 = arg1;
              if (arg0 === 2) {
                closure_3 = arg1;
                c8 = 1;
                const method2 = HermesBuiltin.getMethod("return");
                if (method2 === undefined) {
                  c8 = 0;
                  lib.return();
                  c11 = 3;
                  const obj3 = { value: null, done: true };
                  obj3[0] = arg1;
                  return obj3;
                } else {
                  const iter2 = method2(closure_3);
                  HermesBuiltin.ensureObject("iterator.return() did not return an object");
                  if (iter2.done) {
                    c8 = 0;
                    lib.return();
                    c11 = 3;
                    obj = { value: null, done: true };
                    obj[0] = iter2.value;
                    return obj;
                  } else {
                    c10 = 3;
                    c11 = 1;
                    return iter2;
                  }
                }
              } else {
                c8 = 1;
                const tmp21 = arg1;
              }
            }
          }
          iter3 = next(tmp21);
          HermesBuiltin.ensureObject("iterator.next() did not return an object");
          if (!iter3.done) {
            c10 = 3;
            c11 = 1;
            return iter3;
          }
        } catch (tmp43) {
          closure_9 = tmp43;
          if (tmp3 === c8) {
            c11 = tmp2;
            throw tmp43;
          } else if (tmp === tmp45) {
            c10 = tmp;
          } else {
            c10 = tmp4;
          }
        }
      }
    })();
  });
  closure_17 = tmp;
  let apply = tmp.apply;
  if (typeof apply === "unknown") {
    let applyArgumentsResult = HermesBuiltin.applyArguments(self);
  } else {
    applyArgumentsResult = apply(self, arguments);
  }
  return applyArgumentsResult;
}
function isMessageRenderable(arg0) {
  const iter = arg0.components[Symbol.iterator]();
  const nextResult = iter.next();
  while (iter !== undefined) {
    let tmp2 = nextResult;
    let tmp3 = require;
    let tmp4 = dependencyMap;
    if (nextResult.type === PermissionOverwriteType.ComponentType.CONTENT_INVENTORY_ENTRY) {
      let tmp3Result = tmp3(8382);
      let obj = { component: null, message: null };
      obj = { contentInventoryEntry: null };
      let tmp5 = nextResult;
      obj[0] = tmp2.contentInventoryEntry;
      obj[0] = obj;
      obj[1] = arg0;
      if (null == tmp3Result.transformToRowGeneratedContentInventoryEntryComponent(obj)) {
        let tmp6 = iter;
        iter.return();
        let flag = false;
        return false;
      }
    }
    continue;
  }
  return true;
}
let promiseDeduper = new require("areArraysShallowlyEqual").PromiseDeduper();
promiseDeduper = new require("areArraysShallowlyEqual").PromiseDeduper();
const promiseDeduper1 = new require("areArraysShallowlyEqual").PromiseDeduper();
let result = require("set").fileFinishedImporting("modules/interaction_components/content_inventory_entry/native/useLoadMessageContentEntries.tsx");

export default function useLoadMessageContentEntries(arg0) {
  let _require = arg0;
  closure_1 = first1.useRef(new Map());
  const map = new Map();
  dependencyMap = first1.useRef(new Map());
  map1 = new Map();
  const tmp4 = first(first1.useState(new Set()), 2);
  first = tmp4[0];
  let callback = tmp4[1];
  let set = new Set();
  const tmp7 = first(first1.useState(new Set()), 2);
  first1 = tmp7[0];
  closure_6 = tmp7[1];
  let obj = _require(8384);
  _require = undefined;
  const colorStore = obj.useColorStore((palette) => palette.palette);
  _require = callback((arg0, arg1) => {
    closure_0 = arg0;
    closure_1 = arg1;
    c6 = 0;
    c7 = 0;
    c5 = 0;
    return (function*(arg0, arg1) {
      if (c7 === 2) {
        c7 = 3;
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
          c7 = 2;
          if (0 === v0) {
            if (arg0 === 1) {
              c7 = 3;
              throw arg1;
            } else if (arg0 === 2) {
              c7 = 3;
              obj = { value: null, done: true };
              obj[0] = arg1;
              return obj;
            } else {
              closure_3 = tmp3;
              closure_2 = tmp5;
              if (0 !== closure_1.components.length) {
                const current7 = closure_1.current;
                if (!current7.has(tmp50)) {
                  const current5 = closure_1.current;
                  const result = current5.set(tmp50, "loading");
                  closure_1_4((arg0) => {
                    const items = [];
                    items[HermesBuiltin.arraySpread(arg0, 0)] = closure_0;
                    return new Set(items);
                  });
                  const current6 = closure_1_2.current;
                  const result1 = current6.set(tmp50, tmp51);
                  c5 = 1;
                  v0 = 2;
                  c7 = 1;
                  obj1 = { value: null, done: false };
                  obj1[0] = (function loadContentEntryParts(arg0) {
                    const self = this;
                    const apply = closure_17.apply;
                    if (typeof apply === "unknown") {
                      let applyArgumentsResult = HermesBuiltin.applyArguments(self);
                    } else {
                      applyArgumentsResult = apply(self, arguments);
                    }
                    return applyArgumentsResult;
                  })(tmp51);
                  return obj1;
                }
              }
            }
          } else {
            if (1 === tmp8) {
              c5 = 0;
              const current3 = closure_1.current;
              const result2 = current3.set(closure_0, "error");
              const current4 = closure_1_2.current;
              current4.delete(closure_0);
              closure_1_4((arg0) => {
                const items = [...arg0];
                return new Set(items.filter((arg0) => arg0 !== closure_0));
              });
              v0((arg0) => {
                const items = [];
                items[HermesBuiltin.arraySpread(arg0, 0)] = closure_0;
                return new Set(items);
              });
            } else if (arg0 === 1) {
              c7 = 3;
              throw arg1;
            } else if (arg0 !== 2) {
              if (closure_2_18(closure_1)) {
                const current = closure_1.current;
                const result3 = current.set(closure_0, "loaded");
                const current2 = closure_1_2.current;
                current2.delete(closure_0);
                closure_1_4((arg0) => {
                  const items = [...arg0];
                  return new Set(items.filter((arg0) => arg0 !== closure_0));
                });
              }
              c5 = 0;
            }
            c5 = 0;
            c7 = 3;
            obj = { value: null, done: true };
            obj[0] = arg1;
            return obj;
          }
          c7 = 3;
        } catch (tmp42) {
          closure_4 = tmp42;
          if (tmp4 === c5) {
            c7 = tmp2;
            throw tmp42;
          } else {
            v0 = tmp;
          }
        }
      }
    })();
  });
  callback = first1.useCallback(function(arg0, arg1) {
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
      let item = current.forEach((arg0, arg1) => {
        if (closure_2_18(arg0)) {
          items.push(arg1);
        }
      });
      if (items.length > 0) {
        const item1 = items.forEach((arg0) => {
          const current = ref.current;
          const result = current.set(arg0, "loaded");
          const current2 = ref2.current;
          current2.delete(arg0);
        });
        callback((items) => {
          const set = new Set(items);
          const item = set.forEach((arg0) => set.delete(arg0));
          return set;
        });
      }
    }
  }, items);
  const items1 = [callback, arg0];
  const effect1 = first1.useEffect(() => {
    const item = closure_0.forEach((id) => {
      if (closure_1_1(closure_1_2[13])(id)) {
        if (null != id.messageSnapshots[0]) {
          callback(id.id, id.messageSnapshots[0].message);
        }
      }
      callback(id.id, id);
    });
  }, items1);
  const items2 = [first, first1];
  obj = {
    unloadedContentEntryMessageIds: first,
    unloadableContentEntryMessageIds: first1.useMemo(() => {
      const set = new Set();
      const item = first.forEach((arg0) => set.add(arg0));
      const item1 = first1.forEach((arg0) => set.add(arg0));
      return set;
    }, items2)
  };
  return obj;
};