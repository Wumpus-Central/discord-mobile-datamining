// discord_app/modules/conjure/remix/native/ConjureRemixSheet.tsx
import nativeDefault from "../../../../../discord_common/js/packages/tokens/native.tsx";
import Sheet_showSimpleActionSheet from "../../../../design/components/Sheet/native/showSimpleActionSheet.native.tsx";
import ConjureRemix from "../ConjureRemix.tsx";
import asyncGeneratorStep from "../../../../../_runtime/00005_asyncGeneratorStep.js";
import _slicedToArray from "../../../../../_runtime/metro/00032__.js";
import noop from "../../../../../_runtime/metro/00019__.js";
import GuildStore from "../../../../stores/GuildStore.tsx";
import SortedGuildStore from "../../../../stores/SortedGuildStore.tsx";

const require = globalThis.__r;

require = fn;
const View = fn(17).View;
const jsxProd = fn(21);
({ jsx: closure_9, jsxs: c10 } = jsxProd);
const ConjureRemixSheet = "ConjureRemixSheet";
const createStyles = fn(4966);
let obj2 = { content: { gap: nativeDefault.space.PX_16 } };
let closure_12 = createStyles.createStyles(obj2);
const ReactCompilerGating = fn(558);
let obj3 = { gap: nativeDefault.space.PX_16 };
const size = fn(2);
let result = size.fileFinishedImporting("modules/conjure/remix/native/ConjureRemixSheet.tsx");

export default ReactCompilerGating.isReactCompilerEnabled() ? (function ConjureRemixSheet(project) {
  const cResult = require("c").c(39);
  project = project.project;
  _require = project;
  const currentGuildId = project.currentGuildId;
  onRemixed = project.onRemixed;
  let tmp4 = closure_12();
  [first, _slicedToArray] = first1.useState(currentGuildId);
  [first1, closure_6] = first1.useState(false);
  let obj = require("c");
  let obj2 = first1;
  [tmp10, GuildStore] = first1.useState(null);
  const tmp9 = _slicedToArray(first1.useState(null), 2);
  [tmp12, SortedGuildStore] = first1.useState(0);
  closure_9 = first1.useRef(null);
  if (cResult[0] === currentGuildId) {
    if (cResult[1] === project) {
      let tmp13 = cResult[2];
    }
    if (cResult[3] === tmp12) {
      if (cResult[4] === currentGuildId) {
        if (cResult[5] === project) {
          let tmp14 = cResult[6];
        }
        const effect = obj2.useEffect(tmp13, tmp14);
        const _Symbol = Symbol;
        if (cResult[7] === Symbol.for("react.memo_cache_sentinel")) {
          let items = [SortedGuildStore, GuildStore];
          class R {
            constructor() {
              items = [];
              flattenedGuildIds = closure_8.getFlattenedGuildIds();
              tmp2 = flattenedGuildIds[Symbol.iterator]();
              while (tmp2 !== undefined) {
                tmp4 = closure_7;
                guild = closure_7.getGuild(tmp3);
                tmp6 = guild;
                result = null != guild;
                if (result) {
                  tmp8 = closure_0;
                  tmp9 = onRemixed;
                  obj = closure_0(onRemixed[12]);
                  tmp10 = guild;
                  result = obj.isConjureGuildEligible(tmp6, "ConjureRemixSheet");
                }
                if (result) {
                  tmp11 = guild;
                  arr1 = items.push(tmp6);
                }
                continue;
              }
              return items;
            }
          }
          cResult[7] = items;
          cResult[8] = R;
          let tmp18 = R;
          let tmp17 = items;
        } else {
          tmp17 = cResult[7];
          tmp18 = cResult[8];
        }
        const stateFromStoresArray = tmp(tmp2[13]).useStateFromStoresArray(tmp17, tmp18);
        if (cResult[9] === first) {
          if (cResult[10] === stateFromStoresArray) {
            let tmp21 = cResult[11];
          }
          const _Symbol2 = Symbol;
          if (cResult[12] === Symbol.for("react.memo_cache_sentinel")) {
            const intl = tmp(tmp2[14]).intl;
            class R {
              constructor() {
                items = [];
                flattenedGuildIds = closure_8.getFlattenedGuildIds();
                tmp2 = flattenedGuildIds[Symbol.iterator]();
                while (tmp2 !== undefined) {
                  tmp4 = closure_7;
                  guild = closure_7.getGuild(tmp3);
                  tmp6 = guild;
                  result = null != guild;
                  if (result) {
                    tmp8 = closure_0;
                    tmp9 = onRemixed;
                    obj = closure_0(onRemixed[12]);
                    tmp10 = guild;
                    result = obj.isConjureGuildEligible(tmp6, "ConjureRemixSheet");
                  }
                  if (result) {
                    tmp11 = guild;
                    arr1 = items.push(tmp6);
                  }
                  continue;
                }
                return items;
              }
            }
            let tmp23 = intl.string(currentGuildId(tmp2[15])["maL0+X"]);
            const stringResult = intl.string(currentGuildId(tmp2[15])["maL0+X"]);
          } else {
            tmp23 = cResult[12];
          }
          const title = tmp23;
          class R {
            constructor() {
              items = [];
              flattenedGuildIds = closure_8.getFlattenedGuildIds();
              tmp2 = flattenedGuildIds[Symbol.iterator]();
              while (tmp2 !== undefined) {
                tmp4 = closure_7;
                guild = closure_7.getGuild(tmp3);
                tmp6 = guild;
                result = null != guild;
                if (result) {
                  tmp8 = closure_0;
                  tmp9 = onRemixed;
                  obj = closure_0(onRemixed[12]);
                  tmp10 = guild;
                  result = obj.isConjureGuildEligible(tmp6, "ConjureRemixSheet");
                }
                if (result) {
                  tmp11 = guild;
                  arr1 = items.push(tmp6);
                }
                continue;
              }
              return items;
            }
          }
          if (cResult[15] === first) {
            if (cResult[16] === onRemixed) {
              if (cResult[17] === first1) {
                let tmp27 = cResult[18];
              }
              closure_12 = tmp27;
              const _Symbol3 = Symbol;
              if (cResult[19] === Symbol.for("react.memo_cache_sentinel")) {
                let obj3 = { title: null };
                class R {
                  constructor() {
                    items = [];
                    flattenedGuildIds = closure_8.getFlattenedGuildIds();
                    tmp2 = flattenedGuildIds[Symbol.iterator]();
                    while (tmp2 !== undefined) {
                      tmp4 = closure_7;
                      guild = closure_7.getGuild(tmp3);
                      tmp6 = guild;
                      result = null != guild;
                      if (result) {
                        tmp8 = closure_0;
                        tmp9 = onRemixed;
                        obj = closure_0(onRemixed[12]);
                        tmp10 = guild;
                        result = obj.isConjureGuildEligible(tmp6, "ConjureRemixSheet");
                      }
                      if (result) {
                        tmp11 = guild;
                        arr1 = items.push(tmp6);
                      }
                      continue;
                    }
                    return items;
                  }
                }
                obj3.title = tmp31(currentGuildId(tmp2[15])["9wQTdG"]);
                const tmp33 = closure_9(tmp(tmp2[18]).BottomSheetTitleHeader, obj3);
                cResult[19] = tmp33;
                let tmp29 = tmp33;
              } else {
                tmp29 = cResult[19];
              }
              class R {
                constructor() {
                  items = [];
                  flattenedGuildIds = closure_8.getFlattenedGuildIds();
                  tmp2 = flattenedGuildIds[Symbol.iterator]();
                  while (tmp2 !== undefined) {
                    tmp4 = closure_7;
                    guild = closure_7.getGuild(tmp3);
                    tmp6 = guild;
                    result = null != guild;
                    if (result) {
                      tmp8 = closure_0;
                      tmp9 = onRemixed;
                      obj = closure_0(onRemixed[12]);
                      tmp10 = guild;
                      result = obj.isConjureGuildEligible(tmp6, "ConjureRemixSheet");
                    }
                    if (result) {
                      tmp11 = guild;
                      arr1 = items.push(tmp6);
                    }
                    continue;
                  }
                  return items;
                }
              }
              if (cResult[20] !== tmp21) {
                let obj4 = { variant: "text-md/normal", color: "text-muted", children: tmp21 };
                const tmp37 = closure_9(tmp(tmp2[19]).Text, obj4);
                class R {
                  constructor() {
                    items = [];
                    flattenedGuildIds = closure_8.getFlattenedGuildIds();
                    tmp2 = flattenedGuildIds[Symbol.iterator]();
                    while (tmp2 !== undefined) {
                      tmp4 = closure_7;
                      guild = closure_7.getGuild(tmp3);
                      tmp6 = guild;
                      result = null != guild;
                      if (result) {
                        tmp8 = closure_0;
                        tmp9 = onRemixed;
                        obj = closure_0(onRemixed[12]);
                        tmp10 = guild;
                        result = obj.isConjureGuildEligible(tmp6, "ConjureRemixSheet");
                      }
                      if (result) {
                        tmp11 = guild;
                        arr1 = items.push(tmp6);
                      }
                      continue;
                    }
                    return items;
                  }
                }
                cResult[21] = tmp37;
                let tmp35 = tmp37;
              } else {
                tmp35 = cResult[21];
              }
              let tmp38 = first1;
              if (!first1) {
                tmp38 = stateFromStoresArray.length < 2;
              }
              if (cResult[22] === tmp26) {
                if (cResult[23] === tmp35) {
                  if (cResult[24] === tmp38) {
                    let tmp39 = cResult[25];
                  }
                  if (cResult[26] !== tmp10) {
                    let tmp43 = null;
                    if (null != tmp10) {
                      { variant: "text-xs/normal", color: "text-feedback-critical", children: null }.children = tmp10;
                      class R {
                        constructor() {
                          items = [];
                          flattenedGuildIds = closure_8.getFlattenedGuildIds();
                          tmp2 = flattenedGuildIds[Symbol.iterator]();
                          while (tmp2 !== undefined) {
                            tmp4 = closure_7;
                            guild = closure_7.getGuild(tmp3);
                            tmp6 = guild;
                            result = null != guild;
                            if (result) {
                              tmp8 = closure_0;
                              tmp9 = onRemixed;
                              obj = closure_0(onRemixed[12]);
                              tmp10 = guild;
                              result = obj.isConjureGuildEligible(tmp6, "ConjureRemixSheet");
                            }
                            if (result) {
                              tmp11 = guild;
                              arr1 = items.push(tmp6);
                            }
                            continue;
                          }
                          return items;
                        }
                      }
                      tmp43 = closure_9(closure_6, { accessibilityRole: "alert", children: null });
                      let obj5 = { accessibilityRole: "alert", children: null };
                      let obj6 = { variant: "text-xs/normal", color: "text-feedback-critical", children: null };
                    }
                    cResult[26] = tmp10;
                    class R {
                      constructor() {
                        items = [];
                        flattenedGuildIds = closure_8.getFlattenedGuildIds();
                        tmp2 = flattenedGuildIds[Symbol.iterator]();
                        while (tmp2 !== undefined) {
                          tmp4 = closure_7;
                          guild = closure_7.getGuild(tmp3);
                          tmp6 = guild;
                          result = null != guild;
                          if (result) {
                            tmp8 = closure_0;
                            tmp9 = onRemixed;
                            obj = closure_0(onRemixed[12]);
                            tmp10 = guild;
                            result = obj.isConjureGuildEligible(tmp6, "ConjureRemixSheet");
                          }
                          if (result) {
                            tmp11 = guild;
                            arr1 = items.push(tmp6);
                          }
                          continue;
                        }
                        return items;
                      }
                    }
                    let tmp42 = tmp43;
                  } else {
                    tmp42 = cResult[27];
                  }
                  const _Symbol4 = Symbol;
                  if (cResult[28] === Symbol.for("react.memo_cache_sentinel")) {
                    const intl2 = tmp(tmp2[14]).intl;
                    class R {
                      constructor() {
                        items = [];
                        flattenedGuildIds = closure_8.getFlattenedGuildIds();
                        tmp2 = flattenedGuildIds[Symbol.iterator]();
                        while (tmp2 !== undefined) {
                          tmp4 = closure_7;
                          guild = closure_7.getGuild(tmp3);
                          tmp6 = guild;
                          result = null != guild;
                          if (result) {
                            tmp8 = closure_0;
                            tmp9 = onRemixed;
                            obj = closure_0(onRemixed[12]);
                            tmp10 = guild;
                            result = obj.isConjureGuildEligible(tmp6, "ConjureRemixSheet");
                          }
                          if (result) {
                            tmp11 = guild;
                            arr1 = items.push(tmp6);
                          }
                          continue;
                        }
                        return items;
                      }
                    }
                    let tmp46 = intl2.string(currentGuildId(tmp2[15]).XWgAfc);
                    const stringResult1 = intl2.string(currentGuildId(tmp2[15]).XWgAfc);
                  } else {
                    tmp46 = cResult[28];
                  }
                  class R {
                    constructor() {
                      items = [];
                      flattenedGuildIds = closure_8.getFlattenedGuildIds();
                      tmp2 = flattenedGuildIds[Symbol.iterator]();
                      while (tmp2 !== undefined) {
                        tmp4 = closure_7;
                        guild = closure_7.getGuild(tmp3);
                        tmp6 = guild;
                        result = null != guild;
                        if (result) {
                          tmp8 = closure_0;
                          tmp9 = onRemixed;
                          obj = closure_0(onRemixed[12]);
                          tmp10 = guild;
                          result = obj.isConjureGuildEligible(tmp6, "ConjureRemixSheet");
                        }
                        if (result) {
                          tmp11 = guild;
                          arr1 = items.push(tmp6);
                        }
                        continue;
                      }
                      return items;
                    }
                  }
                  if (cResult[31] === first1) {
                    if (cResult[32] === tmp49) {
                      let tmp50 = cResult[33];
                    }
                    if (cResult[34] === tmp4.content) {
                      if (cResult[35] === tmp39) {
                        if (cResult[36] === tmp42) {
                          if (cResult[37] === tmp50) {
                            let tmp53 = cResult[38];
                          }
                          return tmp53;
                        }
                      }
                    }
                    const obj7 = { header: tmp29, children: null };
                    class R {
                      constructor() {
                        items = [];
                        flattenedGuildIds = closure_8.getFlattenedGuildIds();
                        tmp2 = flattenedGuildIds[Symbol.iterator]();
                        while (tmp2 !== undefined) {
                          tmp4 = closure_7;
                          guild = closure_7.getGuild(tmp3);
                          tmp6 = guild;
                          result = null != guild;
                          if (result) {
                            tmp8 = closure_0;
                            tmp9 = onRemixed;
                            obj = closure_0(onRemixed[12]);
                            tmp10 = guild;
                            result = obj.isConjureGuildEligible(tmp6, "ConjureRemixSheet");
                          }
                          if (result) {
                            tmp11 = guild;
                            arr1 = items.push(tmp6);
                          }
                          continue;
                        }
                        return items;
                      }
                    }
                    const obj8 = { style: tmp34, children: null };
                    const items1 = [tmp39, tmp42, tmp50];
                    obj8.children = items1;
                    obj7.children = stateFromStoresArray(closure_6, obj8);
                    const tmp56 = closure_9(tmp(tmp2[23]).ActionSheet, obj7);
                    cResult[34] = tmp4.content;
                    cResult[35] = tmp39;
                    cResult[36] = tmp42;
                    cResult[37] = tmp50;
                    cResult[38] = tmp56;
                    tmp53 = tmp56;
                  }
                  const obj9 = { variant: "primary", text: tmp46, loading: first1, onPress: tmp49 };
                  const tmp52 = closure_9(tmp(tmp2[22]).Button, obj9);
                  cResult[31] = first1;
                  cResult[32] = tmp49;
                  cResult[33] = tmp52;
                  tmp50 = tmp52;
                }
              }
              const obj10 = { hasIcons: false, children: null };
              const obj11 = { label: tmp23, trailing: tmp35, arrow: true, disabled: tmp38, onPress: tmp26 };
              obj10.children = closure_9(tmp(tmp2[21]).TableRow, obj11);
              const tmp41 = closure_9(tmp(tmp2[20]).TableRowGroup, obj10);
              cResult[22] = tmp26;
              cResult[23] = tmp35;
              cResult[24] = tmp38;
              cResult[25] = tmp41;
              tmp39 = tmp41;
            }
          }
          _require = first(function*() {
            if (c3 === 2) {
              c3 = 3;
              throw new TypeError("Generator functions may not be called on executing generators");
            } else if (tmp4 === 3) {
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
                c3 = 2;
                if (0 === v1) {
                  if (arg0 === 1) {
                    c3 = 3;
                    throw value;
                  } else if (arg0 === 2) {
                    c3 = 3;
                    const obj3 = { value, done: true };
                    return obj3;
                  } else {
                    closure_1 = tmp5;
                    closure_0 = tmp2;
                    closure_128_0 = undefined;
                    if (!first1) {
                      if (null != ref.current) {
                        closure_1_6(true);
                        guild(null);
                        const current = tmp24.current;
                        v1 = 1;
                        c3 = 1;
                        const obj4 = { value: current.open(c3), done: false };
                        return obj4;
                      }
                    }
                    c3 = 3;
                  }
                } else if (arg0 === 1) {
                  c3 = 3;
                  throw value;
                } else if (arg0 === 2) {
                  c3 = 3;
                  const obj5 = { value, done: true };
                  return obj5;
                } else {
                  closure_128_0 = value;
                  if (!closure_128_0.ok) {
                    guild(closure_128_0.message);
                    if (!closure_128_0.kept) {
                      flattenedGuildIds((arg0) => arg0 + 1);
                    }
                    closure_1_6(false);
                  }
                }
                currentGuildId(onRemixed[17]).hideActionSheet(closure_11);
                v1(closure_128_0.projectId, closure_128_0.guildId);
                c3 = 3;
                const obj6 = { value: undefined, done: true };
                return obj6;
              } catch (tmp31) {
                c3 = tmp;
                throw tmp31;
              }
            }
          });
          function t8() {
            const self = this;
            const apply = closure_0.apply;
            if (typeof apply === "unknown") {
              let applyArgumentsResult = HermesBuiltin.applyArguments(self);
            } else {
              applyArgumentsResult = apply(self, arguments);
            }
            return applyArgumentsResult;
          }
          cResult[15] = first;
          cResult[16] = onRemixed;
          cResult[17] = first1;
          cResult[18] = t8;
          tmp27 = t8;
        }
        const found = stateFromStoresArray.find((id) => id.id === first);
        let str2;
        if (found != null) {
          str2 = found.name;
        }
        if (str2 == null) {
          str2 = "";
        }
        cResult[9] = first;
        cResult[10] = stateFromStoresArray;
        cResult[11] = str2;
        tmp21 = str2;
        const tmpResult = tmp(tmp2[13]);
      }
    }
    const items2 = [project, currentGuildId, ];
    cResult[3] = tmp12;
    cResult[4] = currentGuildId;
    cResult[5] = project;
    cResult[6] = items2;
    tmp14 = items2;
  }
  const fn = function x() {
    const prepareConjureRemixResult = ConjureRemix.prepareConjureRemix(closure_0, currentGuildId);
    closure_0 = prepareConjureRemixResult;
    closure_9.current = prepareConjureRemixResult;
    return () => prepareConjureRemixResult.dismiss();
  };
  cResult[0] = currentGuildId;
  cResult[1] = project;
  cResult[2] = fn;
  tmp13 = fn;
  let tmp11 = _slicedToArray(first1.useState(0), 2);
}) : (function ConjureRemixSheet(project) {
  project = project.project;
  const currentGuildId = project.currentGuildId;
  let onRemixed = project.onRemixed;
  first = undefined;
  _slicedToArray = undefined;
  first1 = undefined;
  closure_6 = undefined;
  c7 = undefined;
  c8 = undefined;
  c11 = undefined;
  closure_12 = undefined;
  [first, _slicedToArray] = first1.useState(currentGuildId);
  [first1, closure_6] = first1.useState(false);
  const tmp = closure_12();
  [tmp7, c7] = first1.useState(null);
  let tmp6 = _slicedToArray(first1.useState(null), 2);
  [tmp9, c8] = first1.useState(0);
  closure_9 = first1.useRef(null);
  let items = [project, currentGuildId, tmp9];
  const effect = first1.useEffect(() => {
    const prepareConjureRemixResult = ConjureRemix.prepareConjureRemix(project, currentGuildId);
    project = prepareConjureRemixResult;
    closure_9.current = prepareConjureRemixResult;
    return () => prepareConjureRemixResult.dismiss();
  }, items);
  const tmp8 = _slicedToArray(first1.useState(0), 2);
  const items1 = [c8, c7];
  const stateFromStoresArray = project(onRemixed[13]).useStateFromStoresArray(items1, () => {
    const items = [];
    const flattenedGuildIds = _undefined2.getFlattenedGuildIds();
    while (tmp2 !== undefined) {
      guild = _undefined.getGuild(tmp3);
      let tmp6 = guild;
      let result = null != guild;
      if (result) {
        let obj = project(onRemixed[12]);
        result = obj.isConjureGuildEligible(tmp6, "ConjureRemixSheet");
      }
      if (result) {
        let arr = items.push(tmp6);
      }
      continue;
    }
    return items;
  });
  const found = stateFromStoresArray.find((id) => id.id === first);
  let str;
  if (found != null) {
    str = found.name;
  }
  if (str == null) {
    str = "";
  }
  const intl = tmp11(tmp12[14]).intl;
  const stringResult = intl.string(currentGuildId(onRemixed[15])["maL0+X"]);
  c11 = stringResult;
  const items2 = [stringResult, stateFromStoresArray];
  const callback = obj.useCallback(() => {
    const obj2 = {
      key: "ConjureRemixDestination",
      stackingBehavior: "stack",
      header: { title },
      hasIcons: false,
      options: stateFromStoresArray.map((label) => ({
        label: label.name,
        onPress() {
          return closure_2_4(label.id);
        }
      }))
    };
    const result = Sheet_showSimpleActionSheet.showSimpleActionSheet(obj2);
  }, items2);
  const items3 = [first, onRemixed, first1];
  closure_12 = obj.useCallback(first(function*() {
    if (c3 === 2) {
      c3 = 3;
      throw new TypeError("Generator functions may not be called on executing generators");
    } else if (tmp4 === 3) {
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
        c3 = 2;
        if (0 === onRemixed) {
          if (arg0 === 1) {
            c3 = 3;
            throw value;
          } else if (arg0 === 2) {
            c3 = 3;
            const obj3 = { value, done: true };
            return obj3;
          } else {
            closure_0 = tmp2;
            closure_128_0 = undefined;
            if (!first1) {
              if (null != ref.current) {
                closure_6(true);
                _undefined(null);
                const current = tmp24.current;
                onRemixed = 1;
                c3 = 1;
                const obj4 = { value: current.open(first), done: false };
                return obj4;
              }
            }
            c3 = 3;
          }
        } else if (arg0 === 1) {
          c3 = 3;
          throw value;
        } else if (arg0 === 2) {
          c3 = 3;
          const obj5 = { value, done: true };
          return obj5;
        } else {
          closure_128_0 = value;
          if (!closure_128_0.ok) {
            closure_129_7(closure_128_0.message);
            if (!closure_128_0.kept) {
              closure_129_8((arg0) => arg0 + 1);
            }
            closure_129_6(false);
          }
        }
        tmp5(onRemixed[17]).hideActionSheet(title);
        closure_129_2(closure_128_0.projectId, closure_128_0.guildId);
        c3 = 3;
        const obj6 = { value: undefined, done: true };
        return obj6;
      } catch (tmp31) {
        c3 = tmp;
        throw tmp31;
      }
    }
  }), items3);
  let obj3 = { header: null, children: null };
  let obj4 = { title: null };
  const intl2 = tmp11(tmp12[14]).intl;
  obj4.title = intl2.string(currentGuildId(onRemixed[15])["9wQTdG"]);
  obj3.header = closure_9(project(onRemixed[18]).BottomSheetTitleHeader, obj4);
  let obj5 = { style: tmp.content, children: null };
  let obj6 = { label: stringResult, trailing: closure_9(project(onRemixed[19]).Text, { variant: "text-md/normal", color: "text-muted", children: str }), arrow: true, disabled: null, onPress: null };
  let tmp20 = first1;
  if (!first1) {
    tmp20 = stateFromStoresArray.length < 2;
  }
  let obj2 = project(onRemixed[13]);
  const tmp14 = currentGuildId;
  const tmp18 = stateFromStoresArray;
  obj6.disabled = tmp20;
  obj6.onPress = callback;
  const items4 = [closure_9(project(onRemixed[20]).TableRowGroup, { hasIcons: false, children: closure_9(project(onRemixed[21]).TableRow, obj6) }), , ];
  let tmp17Result = null;
  if (null != tmp7) {
    const obj8 = { accessibilityRole: "alert", children: null };
    const obj9 = { variant: "text-xs/normal", color: "text-feedback-critical", children: tmp7 };
    obj8.children = tmp17(tmp11(tmp12[19]).Text, obj9);
    tmp17Result = tmp17(tmp19, obj8);
  }
  items4[1] = tmp17Result;
  const obj10 = { variant: "primary", text: null, loading: null, onPress: null };
  const intl3 = tmp11(tmp12[14]).intl;
  obj10.text = intl3.string(tmp14(onRemixed[15]).XWgAfc);
  obj10.loading = first1;
  obj10.onPress = function onPress() {
    closure_12().catch(() => {

    });
  };
  items4[2] = closure_9(project(onRemixed[22]).Button, obj10);
  obj5.children = items4;
  obj3.children = tmp18(closure_6, obj5);
  return closure_9(project(onRemixed[23]).ActionSheet, obj3);
});
export const CONJURE_REMIX_SHEET_KEY = "ConjureRemixSheet";