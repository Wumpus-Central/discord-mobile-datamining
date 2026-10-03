// === Module 16561: VibegrationsRemixSheet ===

// Module 16561 (VibegrationsRemixSheet)
import nativeDefault from "native" /* 587 */;
import Sheet_showSimpleActionSheet from "Sheet/showSimpleActionSheet" /* 6694 */;
import asyncGeneratorStep from "asyncGeneratorStep" /* 5 */;
import _slicedToArray from "module_32" /* 32 */;
import noop from "module_19" /* 19 */;
import GuildStore from "GuildStore" /* 2074 */;
import SortedGuildStore from "SortedGuildStore" /* 5616 */;

const require = globalThis.__r;

require = fn;
const View = fn(17).View;
const jsxProd = fn(21);
({ jsx: closure_9, jsxs: c10 } = jsxProd);
const VibegrationsRemixSheet = "VibegrationsRemixSheet";
const createStyles = fn(4890);
let obj2 = { content: { gap: nativeDefault.space.PX_16 } };
let closure_12 = createStyles.createStyles(obj2);
const ReactCompilerGating = fn(558);
let obj3 = { gap: nativeDefault.space.PX_16 };
const size = fn(2);
let result = size.fileFinishedImporting("modules/vibegrations/native/VibegrationsRemixSheet.tsx");

export default ReactCompilerGating.isReactCompilerEnabled() ? ((project) => {
  const cResult = require("c").c(33);
  project = project.project;
  _require = project;
  const onRemixed = project.onRemixed;
  const tmp4 = closure_12();
  const tmp5 = first1(noop.useState(project.currentGuildId), 2);
  first = tmp5[0];
  asyncGeneratorStep = tmp5[1];
  const tmp7 = first1(noop.useState(false), 2);
  first1 = tmp7[0];
  noop = tmp7[1];
  let obj = require("c");
  [tmp10, View] = first1(noop.useState(null), 2);
  if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
    let items = [title, stateFromStoresArray];
    const fn = function f() {
      const items = [];
      const flattenedGuildIds = title.getFlattenedGuildIds();
      while (tmp2 !== undefined) {
        guild = stateFromStoresArray.getGuild(tmp3);
        let tmp6 = guild;
        let result = null != guild;
        if (result) {
          let obj = closure_0(first[11]);
          result = obj.isVibegrationsGuildEligible(tmp6, "VibegrationsRemixSheet");
        }
        if (result) {
          let arr = items.push(tmp6);
        }
        continue;
      }
      return items;
    };
    cResult[0] = items;
    cResult[1] = fn;
    tmp11 = items;
    tmp12 = fn;
  } else {
    [tmp11, tmp12] = cResult;
  }
  const tmp9 = first1(noop.useState(null), 2);
  stateFromStoresArray = require("initialize").useStateFromStoresArray(tmp11, tmp12);
  if (cResult[2] === first) {
    if (cResult[3] === stateFromStoresArray) {
      let tmp15 = cResult[4];
    }
    const _Symbol = Symbol;
    if (cResult[5] === Symbol.for("react.memo_cache_sentinel")) {
      const intl = tmp(tmp2[13]).intl;
      const stringResult = intl.string(onRemixed(tmp2[14]).HQLYXD);
      cResult[5] = stringResult;
      let tmp18 = stringResult;
    } else {
      tmp18 = cResult[5];
    }
    title = tmp18;
    if (cResult[6] !== stateFromStoresArray) {
      const fn2 = function z() {
        const obj2 = {
          key: "VibegrationsRemixDestination",
          stackingBehavior: "stack",
          header: { title },
          hasIcons: false,
          options: stateFromStoresArray.map((label) => ({
            label: label.name,
            onPress() {
              return closure_2_3(label.id);
            }
          }))
        };
        const result = Sheet_showSimpleActionSheet.showSimpleActionSheet(obj2);
      };
      cResult[6] = stateFromStoresArray;
      cResult[7] = fn2;
      let tmp21 = fn2;
    } else {
      tmp21 = cResult[7];
    }
    if (cResult[8] === first) {
      if (cResult[9] === onRemixed) {
        if (cResult[10] === project) {
          if (cResult[11] === first1) {
            let tmp22 = cResult[12];
          }
          closure_9 = tmp22;
          const _Symbol2 = Symbol;
          if (cResult[13] === Symbol.for("react.memo_cache_sentinel")) {
            let obj2 = { title: null };
            const intl2 = tmp(tmp2[13]).intl;
            obj2.title = intl2.string(onRemixed(tmp2[14])["V+azw/"]);
            const tmp27 = closure_9(tmp(tmp2[18]).BottomSheetTitleHeader, obj2);
            cResult[13] = tmp27;
            let tmp24 = tmp27;
          } else {
            tmp24 = cResult[13];
          }
          if (cResult[14] !== tmp15) {
            let obj3 = { variant: "text-md/normal", color: "text-muted", children: tmp15 };
            const tmp30 = closure_9(tmp(tmp2[19]).Text, obj3);
            cResult[14] = tmp15;
            cResult[15] = tmp30;
            let tmp28 = tmp30;
          } else {
            tmp28 = cResult[15];
          }
          let tmp31 = first1;
          if (!first1) {
            tmp31 = stateFromStoresArray.length < 2;
          }
          if (cResult[16] === tmp21) {
            if (cResult[17] === tmp31) {
              if (cResult[18] === tmp28) {
                let tmp32 = cResult[19];
              }
              if (cResult[20] !== tmp10) {
                let tmp36 = null;
                if (null != tmp10) {
                  const obj4 = { accessibilityRole: "alert", children: null };
                  let obj5 = { variant: "text-xs/normal", color: "text-feedback-critical", children: tmp10 };
                  obj4.children = closure_9(tmp(tmp2[19]).Text, obj5);
                  tmp36 = closure_9(View, obj4);
                }
                cResult[20] = tmp10;
                cResult[21] = tmp36;
                let tmp35 = tmp36;
              } else {
                tmp35 = cResult[21];
              }
              const _Symbol3 = Symbol;
              if (cResult[22] === Symbol.for("react.memo_cache_sentinel")) {
                const intl3 = tmp(tmp2[13]).intl;
                const stringResult1 = intl3.string(onRemixed(tmp2[14]).vPI794);
                cResult[22] = stringResult1;
                let tmp39 = stringResult1;
              } else {
                tmp39 = cResult[22];
              }
              if (cResult[23] !== tmp22) {
                class Z {
                  constructor() {
                    promise = closure_9();
                    catchPromise = promise.catch(() => {

                    });
                    return;
                  }
                }
                cResult[23] = tmp22;
                cResult[24] = Z;
              } else {
                class Z {
                  constructor() {
                    promise = closure_9();
                    catchPromise = promise.catch(() => {

                    });
                    return;
                  }
                }
              }
              if (cResult[25] === first1) {
                class Z {
                  constructor() {
                    promise = closure_9();
                    catchPromise = promise.catch(() => {

                    });
                    return;
                  }
                }
                if (cResult[28] === tmp4.content) {
                  class Z {
                    constructor() {
                      promise = closure_9();
                      catchPromise = promise.catch(() => {

                      });
                      return;
                    }
                  }
                }
                let obj6 = { header: tmp24, children: null };
                let obj7 = { style: tmp4.content, children: null };
                const items1 = [tmp32, tmp35, tmp43];
                obj7.children = items1;
                obj6.children = closure_10(View, obj7);
                const tmp50 = closure_9(tmp(tmp2[23]).ActionSheet, obj6);
                cResult[28] = tmp4.content;
                cResult[29] = tmp32;
                cResult[30] = tmp35;
                cResult[31] = tmp43;
                cResult[32] = tmp50;
              }
              const obj8 = { variant: "primary", text: tmp39, loading: first1, onPress: Z };
              const tmp45 = closure_9(tmp(tmp2[22]).Button, obj8);
              cResult[25] = first1;
              cResult[26] = Z;
              cResult[27] = tmp45;
            }
          }
          const obj9 = { hasIcons: false, children: null };
          const obj10 = { label: tmp18, trailing: tmp28, arrow: true, disabled: tmp31, onPress: tmp21 };
          obj9.children = closure_9(tmp(tmp2[21]).TableRow, obj10);
          const tmp34 = closure_9(tmp(tmp2[20]).TableRowGroup, obj9);
          cResult[16] = tmp21;
          cResult[17] = tmp31;
          cResult[18] = tmp28;
          cResult[19] = tmp34;
          tmp32 = tmp34;
        }
      }
    }
    _require = asyncGeneratorStep(async () => {
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
          return { value: "IconComponent", done: "IconComponent" };
        }
      } else {
        try {
          c3 = 2;
          if (0 === c2) {
            if (arg0 === 1) {
              c3 = 3;
              throw value;
            } else if (arg0 === 2) {
              c3 = 3;
              const obj3 = { value, done: true };
              return obj3;
            } else {
              closure_128_0 = undefined;
              if (first1) {
                c3 = 3;
              } else {
                closure_1_5(true);
                View(null);
                c2 = 1;
                c3 = 1;
                const obj5 = { value: tmp5(first[16]).remixVibegrationsProjectInto(tmp5, c2), done: false };
                return obj5;
              }
            }
          } else if (arg0 === 1) {
            c3 = 3;
            throw value;
          } else if (arg0 === 2) {
            c3 = 3;
            const obj6 = { value, done: true };
            return obj6;
          } else {
            closure_128_0 = value;
            if (!closure_128_0.ok) {
              View(closure_128_0.message);
              closure_1_5(false);
            }
          }
          onRemixed(first[17]).hideActionSheet(VibegrationsRemixSheet);
          tmp2(closure_128_0.projectId, c2);
          c3 = 3;
          const obj7 = { value: undefined, done: true };
          return obj7;
        } catch (tmp28) {
          c3 = tmp;
          throw tmp28;
        }
      }
    });
    const fn3 = function() {
      const self = this;
      const apply = closure_0.apply;
      if (typeof apply === "unknown") {
        let applyArgumentsResult = HermesBuiltin.applyArguments(self);
      } else {
        applyArgumentsResult = apply(self, arguments);
      }
      return applyArgumentsResult;
    };
    cResult[8] = first;
    cResult[9] = onRemixed;
    cResult[10] = project;
    cResult[11] = first1;
    cResult[12] = fn3;
    tmp22 = fn3;
  }
  const found = stateFromStoresArray.find((id) => id.id === first);
  if (found != null) {
    class Z {
      constructor() {
        promise = closure_9();
        catchPromise = promise.catch(() => {

        });
        return;
      }
    }
  }
  if (undefined == null) {
    class Z {
      constructor() {
        promise = closure_9();
        catchPromise = promise.catch(() => {

        });
        return;
      }
    }
  }
  cResult[2] = first;
  cResult[3] = stateFromStoresArray;
  cResult[4] = undefined;
  tmp15 = tmp17;
  const tmpResult = require("initialize");
}) : ((project) => {
  project = project.project;
  const onRemixed = project.onRemixed;
  let first1;
  noop = undefined;
  c6 = undefined;
  let stateFromStoresArray;
  c8 = undefined;
  closure_9 = undefined;
  const tmp2 = first1(noop.useState(project.currentGuildId), 2);
  const first = tmp2[0];
  asyncGeneratorStep = tmp2[1];
  const tmp4 = first1(noop.useState(false), 2);
  first1 = tmp4[0];
  noop = tmp4[1];
  const tmp = closure_12();
  [tmp7, c6] = first1(noop.useState(null), 2);
  let tmp6 = first1(noop.useState(null), 2);
  let items = [c8, stateFromStoresArray];
  stateFromStoresArray = project(first[12]).useStateFromStoresArray(items, () => {
    const items = [];
    const flattenedGuildIds = title.getFlattenedGuildIds();
    while (tmp2 !== undefined) {
      guild = stateFromStoresArray.getGuild(tmp3);
      let tmp6 = guild;
      let result = null != guild;
      if (result) {
        let obj = project(first[11]);
        result = obj.isVibegrationsGuildEligible(tmp6, "VibegrationsRemixSheet");
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
  const intl = tmp8(tmp9[13]).intl;
  const stringResult = intl.string(onRemixed(first[14]).HQLYXD);
  c8 = stringResult;
  const items1 = [stringResult, stateFromStoresArray];
  const callback = obj.useCallback(() => {
    const obj2 = {
      key: "VibegrationsRemixDestination",
      stackingBehavior: "stack",
      header: { title },
      hasIcons: false,
      options: stateFromStoresArray.map((label) => ({
        label: label.name,
        onPress() {
          return closure_2_3(label.id);
        }
      }))
    };
    const result = Sheet_showSimpleActionSheet.showSimpleActionSheet(obj2);
  }, items1);
  const items2 = [first, onRemixed, project, first1];
  closure_9 = obj.useCallback(asyncGeneratorStep(async () => {
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
        return { value: "IconComponent", done: "IconComponent" };
      }
    } else {
      try {
        c3 = 2;
        if (0 === dependencyMap) {
          if (arg0 === 1) {
            c3 = 3;
            throw value;
          } else if (arg0 === 2) {
            c3 = 3;
            const obj3 = { value, done: true };
            return obj3;
          } else {
            closure_128_0 = undefined;
            if (first1) {
              c3 = 3;
            } else {
              closure_5(true);
              _undefined(null);
              dependencyMap = 1;
              c3 = 1;
              const obj5 = { value: tmp2(16562).remixVibegrationsProjectInto(project, first), done: false };
              return obj5;
            }
          }
        } else if (arg0 === 1) {
          c3 = 3;
          throw value;
        } else if (arg0 === 2) {
          c3 = 3;
          const obj6 = { value, done: true };
          return obj6;
        } else {
          closure_128_0 = value;
          if (!closure_128_0.ok) {
            closure_129_6(closure_128_0.message);
            closure_129_5(false);
          }
        }
        tmp5(4854).hideActionSheet(VibegrationsRemixSheet);
        closure_129_1(closure_128_0.projectId, closure_129_2);
        c3 = 3;
        const obj7 = { value: undefined, done: true };
        return obj7;
      } catch (tmp28) {
        c3 = tmp;
        throw tmp28;
      }
    }
  }), items2);
  let obj3 = { header: null, children: null };
  const obj4 = { title: null };
  const intl2 = tmp8(tmp9[13]).intl;
  obj4.title = intl2.string(onRemixed(first[14])["V+azw/"]);
  obj3.header = closure_9(project(first[18]).BottomSheetTitleHeader, obj4);
  let obj5 = { style: tmp.content, children: null };
  let obj6 = { label: stringResult, trailing: closure_9(project(first[19]).Text, { variant: "text-md/normal", color: "text-muted", children: str }), arrow: true, disabled: null, onPress: null };
  let tmp17 = first1;
  if (!first1) {
    tmp17 = stateFromStoresArray.length < 2;
  }
  let obj2 = project(first[12]);
  let tmp11 = onRemixed;
  obj6.disabled = tmp17;
  obj6.onPress = callback;
  const items3 = [closure_9(project(first[20]).TableRowGroup, { hasIcons: false, children: closure_9(project(first[21]).TableRow, obj6) }), , ];
  let tmp14Result = null;
  if (null != tmp7) {
    const obj8 = { accessibilityRole: "alert", children: null };
    const obj9 = { variant: "text-xs/normal", color: "text-feedback-critical", children: tmp7 };
    obj8.children = tmp14(tmp8(tmp9[19]).Text, obj9);
    tmp14Result = tmp14(tmp16, obj8);
  }
  items3[1] = tmp14Result;
  const obj10 = { variant: "primary", text: null, loading: null, onPress: null };
  const intl3 = tmp8(tmp9[13]).intl;
  obj10.text = intl3.string(tmp11(first[14]).vPI794);
  obj10.loading = first1;
  obj10.onPress = function onPress() {
    closure_9().catch(() => {

    });
  };
  items3[2] = closure_9(project(first[22]).Button, obj10);
  obj5.children = items3;
  obj3.children = closure_10(c6, obj5);
  return closure_9(project(first[23]).ActionSheet, obj3);
});
export const VIBEGRATIONS_REMIX_SHEET_KEY = "VibegrationsRemixSheet";