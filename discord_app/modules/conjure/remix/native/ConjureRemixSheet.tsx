// === Module 16605: ConjureRemixSheet ===

// Module 16605 (ConjureRemixSheet)
import react_native from "react-native" /* 17 */;
import nativeDefault from "native" /* 587 */;
import Sheet_showSimpleActionSheet from "Sheet/showSimpleActionSheet" /* 6701 */;
import _asyncToGenerator_mod from "_asyncToGenerator" /* 5 */;
import _slicedToArray from "_slicedToArray" /* 32 */;
import react_mod from "react" /* 19 */;
import GuildStore from "GuildStore" /* 2074 */;
import SortedGuildStore from "SortedGuildStore" /* 5623 */;
import Fragment from "Fragment" /* 21 */;
import createStyles from "createStyles" /* 4896 */;
import ReactCompilerGating from "ReactCompilerGating" /* 558 */;
import size from "module_2" /* 2 */;

let _require, c3, obj1, project, title;

let c10;
let c9;
let obj2;
let _asyncToGenerator = _asyncToGenerator_mod;
let react = react_mod;
const View = react_native.View;
({ jsx: c9, jsxs: c10 } = Fragment);
const VibegrationsRemixSheet = "VibegrationsRemixSheet";
let obj = { content: obj2 };
obj2 = { gap: nativeDefault.space.PX_16 };
let closure_12 = createStyles.createStyles(obj);
const tmp3 = ReactCompilerGating.isReactCompilerEnabled() ? ((project) => {
  let closure_3;
  let closure_5;
  let first;
  let first1;
  let stateFromStoresArray;
  let tmp10;
  let tmp11;
  const tmp = project;
  let tmp2 = first;
  let obj = project(first[10]);
  const cResult = obj.c(33);
  project = project.project;
  const onRemixed = project.onRemixed;
  const currentGuildId = project.currentGuildId;
  let tmp4 = closure_12();
  const tmp5 = first1(react.useState(currentGuildId), 2);
  first = tmp5[0];
  _asyncToGenerator = tmp5[1];
  const tmp7 = first1(react.useState(false), 2);
  first1 = tmp7[0];
  react = tmp7[1];
  [r10032, View] = first1(react.useState(null), 2);
  const tmp9 = first1(react.useState(null), 2);
  if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
    let items = [title, stateFromStoresArray];
    const fn = function f() {
      const items = [];
      const flattenedGuildIds = title.getFlattenedGuildIds();
      const tmp2 = flattenedGuildIds[Symbol.iterator]();
      while (tmp2 !== undefined) {
        let guild = stateFromStoresArray.getGuild(tmp3);
        let tmp6 = guild;
        let result = null != guild;
        if (result) {
          let obj = project(first[11]);
          result = obj.isConjureGuildEligible(tmp6, "VibegrationsRemixSheet");
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
    tmp11 = fn;
    tmp10 = items;
  } else {
    [tmp10, tmp11] = cResult;
  }
  const tmpResult = tmp(tmp2[12]);
  stateFromStoresArray = tmpResult.useStateFromStoresArray(tmp10, tmp11);
  if (cResult[2] === first) {
    let tmp17;
    const _Symbol = Symbol;
    if (cResult[5] === Symbol.for("react.memo_cache_sentinel")) {
      const intl = tmp(tmp2[13]).intl;
      const stringResult = intl.string(onRemixed(tmp2[14])["maL0+X"]);
      cResult[5] = stringResult;
      tmp17 = stringResult;
    } else {
      tmp17 = cResult[5];
    }
    title = tmp17;
    if (cResult[6] !== stateFromStoresArray) {
      class M {
        constructor() {
          obj = closure_0(closure_2[15]);
          obj1 = { key: "VibegrationsRemixDestination", stackingBehavior: "stack", header: null, hasIcons: false, options: closure_7.map((label) => ({ label: label.name, onPress() { /* body not rendered: F153669 */ } })) };
          obj4 = { title: closure_8 };
          obj1.header = obj4;
          result = obj.showSimpleActionSheet(obj1);
          return;
        }
      }
      cResult[6] = stateFromStoresArray;
      cResult[7] = M;
    } else {
      class M {
        constructor() {
          obj = closure_0(closure_2[15]);
          obj1 = { key: "VibegrationsRemixDestination", stackingBehavior: "stack", header: null, hasIcons: false, options: closure_7.map((label) => ({ label: label.name, onPress() { /* body not rendered: F153669 */ } })) };
          obj4 = { title: closure_8 };
          obj1.header = obj4;
          result = obj.showSimpleActionSheet(obj1);
          return;
        }
      }
    }
    if (cResult[8] === first) {
      class M {
        constructor() {
          obj = closure_0(closure_2[15]);
          obj1 = { key: "VibegrationsRemixDestination", stackingBehavior: "stack", header: null, hasIcons: false, options: closure_7.map((label) => ({ label: label.name, onPress() { /* body not rendered: F153669 */ } })) };
          obj4 = { title: closure_8 };
          obj1.header = obj4;
          result = obj.showSimpleActionSheet(obj1);
          return;
        }
      }
    }
    _require = _asyncToGenerator(async () => {
      let closure_1;
      let obj4;
      if (c3 === 2) {
        c3 = 3;
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
          let tmp4;
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
              tmp4 = undefined;
              if (!first1) {
                closure_1_5(true);
                closure_1_6(null);
                c2 = 1;
                c3 = 1;
                const obj5 = { value: obj4.remixConjureProjectInto(tmp4, c2), done: false };
                obj4 = tmp4(first[16]);
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
            tmp4 = value;
            if (tmp4.ok) {
              const obj = onRemixed(first[17]);
              obj.hideActionSheet(VibegrationsRemixSheet);
              tmp(tmp4.projectId, c2);
              c3 = 3;
              const obj7 = { value: undefined, done: true };
              return obj7;
            } else {
              closure_1_6(tmp4.message);
              closure_1_5(false);
            }
          }
          c3 = 3;
          return { value: "IconComponent", done: null };
        } catch (tmp27) {
          c3 = 3;
          throw tmp27;
        }
      }
    });
    const fn2 = function() {
      return closure_0(...arguments);
    };
    cResult[8] = first;
    cResult[9] = onRemixed;
    cResult[10] = project;
    cResult[11] = first1;
    cResult[12] = fn2;
  }
  const found = stateFromStoresArray.find((id) => id.id === first);
  if (found != null) {
    class M {
      constructor() {
        obj = closure_0(closure_2[15]);
        obj1 = { key: "VibegrationsRemixDestination", stackingBehavior: "stack", header: null, hasIcons: false, options: closure_7.map((label) => ({ label: label.name, onPress() { /* body not rendered: F153669 */ } })) };
        obj4 = { title: closure_8 };
        obj1.header = obj4;
        result = obj.showSimpleActionSheet(obj1);
        return;
      }
    }
  }
  if (undefined == null) {
    class M {
      constructor() {
        obj = closure_0(closure_2[15]);
        obj1 = { key: "VibegrationsRemixDestination", stackingBehavior: "stack", header: null, hasIcons: false, options: closure_7.map((label) => ({ label: label.name, onPress() { /* body not rendered: F153669 */ } })) };
        obj4 = { title: closure_8 };
        obj1.header = obj4;
        result = obj.showSimpleActionSheet(obj1);
        return;
      }
    }
  }
  cResult[2] = first;
  cResult[3] = stateFromStoresArray;
  cResult[4] = undefined;
}) : ((project) => {
  let BottomSheetTitleHeader;
  let _undefined;
  let c6;
  let closure_3;
  let closure_5;
  let intl2;
  let intl3;
  let items3;
  let obj4;
  let obj5;
  let obj9;
  let tmp17;
  let tmp7;
  project = project.project;
  const onRemixed = project.onRemixed;
  let first1;
  react = undefined;
  c6 = undefined;
  let stateFromStoresArray;
  let c8;
  let closure_9;
  const currentGuildId = project.currentGuildId;
  let obj = react;
  let tmp = closure_12();
  let tmp2 = first1(react.useState(currentGuildId), 2);
  let first = tmp2[0];
  _asyncToGenerator = tmp2[1];
  const tmp4 = first1(react.useState(false), 2);
  first1 = tmp4[0];
  react = tmp4[1];
  let tmp6 = first1(react.useState(null), 2);
  [tmp7, c6] = tmp6;
  let obj2 = project(first[12]);
  let items = [c8, stateFromStoresArray];
  stateFromStoresArray = obj2.useStateFromStoresArray(items, () => {
    const items = [];
    const flattenedGuildIds = title.getFlattenedGuildIds();
    const tmp2 = flattenedGuildIds[Symbol.iterator]();
    while (tmp2 !== undefined) {
      let guild = stateFromStoresArray.getGuild(tmp3);
      let tmp6 = guild;
      let result = null != guild;
      if (result) {
        let obj = project(first[11]);
        result = obj.isConjureGuildEligible(tmp6, "VibegrationsRemixSheet");
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
  let tmp11 = onRemixed;
  const stringResult = intl.string(onRemixed(first[14])["maL0+X"]);
  c8 = stringResult;
  const items1 = [stringResult, stateFromStoresArray];
  const callback = obj.useCallback(() => {
    let obj3;
    const obj = Sheet_showSimpleActionSheet;
    const obj2 = {
      key: "VibegrationsRemixDestination",
      stackingBehavior: "stack",
      header: obj3,
      hasIcons: false,
      options: stateFromStoresArray.map((label) => ({
        label: label.name,
        onPress() {
          return closure_2_3(label.id);
        }
      }))
    };
    obj3 = { title };
    const result = obj.showSimpleActionSheet(obj2);
  }, items1);
  const items2 = [first, onRemixed, project, first1];
  closure_9 = obj.useCallback(_asyncToGenerator(async () => {
    let c2;
    let closure_0;
    let closure_1;
    if (c3 === 2) {
      c3 = 3;
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
        let tmp;
        c3 = 2;
        if (0 === first) {
          if (arg0 === 1) {
            c3 = 3;
            throw value;
          } else if (arg0 === 2) {
            c3 = 3;
            const obj3 = { value, done: true };
            return obj3;
          } else {
            tmp = undefined;
            if (!first1) {
              closure_5(true);
              _undefined(null);
              const obj4 = tmp(first[16]);
              first = 1;
              c3 = 1;
              const obj5 = { value: obj4.remixConjureProjectInto(project, first), done: false };
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
          tmp = value;
          if (tmp.ok) {
            const obj = tmp4(first[17]);
            obj.hideActionSheet(VibegrationsRemixSheet);
            closure_129_1(tmp.projectId, closure_129_2);
            c3 = 3;
            const obj7 = { value: undefined, done: true };
            return obj7;
          } else {
            closure_129_6(tmp.message);
            closure_129_5(false);
          }
        }
        c3 = 3;
        return { value: "IconComponent", done: null };
      } catch (tmp27) {
        c3 = 3;
        throw tmp27;
      }
    }
  }), items2);
  let obj3 = { header: closure_9(BottomSheetTitleHeader, obj4), children: closure_10(c6, obj5) };
  const ActionSheet = tmp8(tmp9[23]).ActionSheet;
  obj4 = { title: intl2.string(onRemixed(tmp9[14])["9wQTdG"]) };
  BottomSheetTitleHeader = tmp8(tmp9[18]).BottomSheetTitleHeader;
  intl2 = tmp8(tmp9[13]).intl;
  obj5 = { style: tmp.content, children: items3 };
  const TableRowGroup = tmp8(tmp9[20]).TableRowGroup;
  let obj6 = { label: stringResult, trailing: closure_9(project(tmp9[19]).Text, { variant: "text-md/normal", color: "text-muted", children: str }), arrow: true, disabled: tmp17, onPress: callback };
  const TableRow = tmp8(tmp9[21]).TableRow;
  tmp17 = first1 || stateFromStoresArray.length < 2;
  let obj7 = { hasIcons: false, children: tmp14(TableRow, obj6) };
  items3 = [closure_9(TableRowGroup, obj7), , ];
  let tmp14Result = null;
  if (null != tmp7) {
    const obj8 = { accessibilityRole: "alert", children: closure_9(project(first[19]).Text, obj9) };
    obj9 = { variant: "text-xs/normal", color: "text-feedback-critical", children: tmp7 };
    tmp14Result = tmp14(tmp16, obj8);
  }
  items3[1] = tmp14Result;
  const obj10 = {
    variant: "primary",
    text: intl3.string(tmp11(first[14]).XWgAfc),
    loading: first1,
    onPress() {
      const promise = closure_9();
      promise.catch(() => {

      });
    }
  };
  const Button = tmp8(tmp9[22]).Button;
  intl3 = tmp8(tmp9[13]).intl;
  items3[2] = closure_9(Button, obj10);
  return closure_9(ActionSheet, obj3);
});
let result = size.fileFinishedImporting("modules/conjure/remix/native/ConjureRemixSheet.tsx");

export default tmp3;
export const CONJURE_REMIX_SHEET_KEY = "VibegrationsRemixSheet";