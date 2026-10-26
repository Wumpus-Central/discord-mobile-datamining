// === Module 12197: ConjureLinkedAppBuildSheet ===

// Module 12197 (ConjureLinkedAppBuildSheet)
import nativeDefault from "native" /* 587 */;
import ActionSheetActionCreatorsDefault from "ActionSheetActionCreators" /* 5210 */;
import noop from "module_19" /* 19 */;

const require = globalThis.__r;

const require = fn;
const jsxProd = fn(21);
({ jsx: c3, jsxs: closure_4 } = jsxProd);
const createStyles = fn(4971);
let closure_5 = createStyles.createStyles((arg0) => {
  const obj = { content: { paddingBottom: nativeDefault.space.PX_16 + arg0 } };
  return obj;
});
const ReactCompilerGating = fn(558);
const size = fn(2);
const result = size.fileFinishedImporting("modules/conjure/linked_apps/native/ConjureLinkedAppBuildSheet.tsx");

export default ReactCompilerGating.isReactCompilerEnabled() ? (function ConjureLinkedAppBuildSheet(sheetKey) {
  const cResult = sheetKey(onRemove[5]).c(20);
  sheetKey = sheetKey.sheetKey;
  ({ title, value, onPick } = sheetKey);
  onRemove = sheetKey.onRemove;
  const tmp5 = closure_5(onPick(onRemove[6])().bottom);
  if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
    const intl = tmp(tmp2[7]).intl;
    const stringResult = intl.string(onPick(tmp2[8]).Odrcmq);
    cResult[0] = stringResult;
    let first = stringResult;
  } else {
    first = cResult[0];
  }
  if (cResult[1] !== title) {
    let obj2 = { title };
    const tmp10 = closure_3(tmp(tmp2[9]).BottomSheetTitleHeader, obj2);
    cResult[1] = title;
    cResult[2] = tmp10;
    let tmp8 = tmp10;
  } else {
    tmp8 = cResult[2];
  }
  if (cResult[3] === onPick) {
    if (cResult[4] === sheetKey) {
      let tmp12 = cResult[5];
    }
    const _Symbol = Symbol;
    if (cResult[6] === Symbol.for("react.memo_cache_sentinel")) {
      const prop = tmp(tmp2[11]).CONJURE_LINKED_APP_BUILDS;
      const mapped = prop.map((value) => {
        const obj = { value, label: sheetKey(onRemove[11]).linkedAppBuildLabel(value), subLabel: null };
        const obj2 = sheetKey(onRemove[11]);
        obj.subLabel = sheetKey(onRemove[11]).linkedAppBuildDescription(value);
        return closure_1_3(sheetKey(onRemove[12]).TableRadioRow, obj, value);
      });
      cResult[6] = mapped;
      let tmp13 = mapped;
    } else {
      tmp13 = cResult[6];
    }
    if (cResult[7] === tmp12) {
      if (cResult[8] === value) {
        let tmp15 = cResult[9];
      }
      if (cResult[10] === onRemove) {
        if (cResult[11] === sheetKey) {
          let tmp18 = cResult[12];
        }
        if (cResult[13] === tmp5.content) {
          if (cResult[14] === tmp15) {
            if (cResult[15] === tmp18) {
              let tmp21 = cResult[16];
            }
            if (cResult[17] === tmp8) {
              if (cResult[18] === tmp21) {
                let tmp24 = cResult[19];
              }
              return tmp24;
            }
            const obj3 = { header: tmp8, children: tmp21 };
            const tmp26 = closure_3(tmp(tmp2[16]).ActionSheet, obj3);
            cResult[17] = tmp8;
            cResult[18] = tmp21;
            cResult[19] = tmp26;
            tmp24 = tmp26;
          }
        }
        const obj4 = { spacing: onPick(tmp2[3]).space.PX_16, style: tmp11, children: null };
        const items = [tmp15, tmp18];
        obj4.children = items;
        const tmp23 = closure_4(tmp(tmp2[15]).Stack, obj4);
        cResult[13] = tmp5.content;
        cResult[14] = tmp15;
        cResult[15] = tmp18;
        cResult[16] = tmp23;
        tmp21 = tmp23;
      }
      let tmp19 = null;
      if (null != onRemove) {
        const obj5 = { hasIcons: false, children: null };
        const obj6 = { variant: "danger", label: null, onPress: null };
        const intl2 = tmp(tmp2[7]).intl;
        obj6.label = intl2.string(onPick(tmp2[8]).bN1S9T);
        obj6.onPress = function onPress() {
          ActionSheetActionCreatorsDefault.hideActionSheet(sheetKey);
          onRemove();
        };
        obj5.children = closure_3(tmp(tmp2[14]).ActionSheetRow, obj6);
        tmp19 = closure_3(tmp(tmp2[14]).ActionSheetRow.Group, obj5);
      }
      cResult[10] = onRemove;
      cResult[11] = sheetKey;
      cResult[12] = tmp19;
      tmp18 = tmp19;
    }
    const obj7 = { hasIcons: false, title: first, accessibilityLabel: first, value, onChange: tmp12, children: tmp13 };
    const tmp17 = closure_3(tmp(tmp2[13]).TableRadioGroup, obj7);
    cResult[7] = tmp12;
    cResult[8] = value;
    cResult[9] = tmp17;
    tmp15 = tmp17;
  }
  class L {
    constructor(arg0) {
      obj = closure_1(closure_2[10]);
      hideActionSheetResult = obj.hideActionSheet(sheetKey);
      tmp2 = onPick(sheetKey);
      return;
    }
  }
  cResult[3] = onPick;
  cResult[4] = sheetKey;
  cResult[5] = L;
  tmp12 = L;
  let obj = sheetKey(onRemove[5]);
}) : (function ConjureLinkedAppBuildSheet(arg0) {
  ({ sheetKey: require, onPick: importDefault, onRemove } = arg0);
  ({ title, value } = arg0);
  const intl = require("util").intl;
  const stringResult = intl.string(require("module_3830").Odrcmq);
  let obj = { header: closure_3(require("BottomSheetTitleHeader").BottomSheetTitleHeader, { title }), children: null };
  let obj2 = { spacing: require("native").space.PX_16, style: closure_5(require("useSafeAreaInsets")().bottom).content, children: null };
  const obj3 = {
    hasIcons: false,
    title: stringResult,
    accessibilityLabel: stringResult,
    value,
    onChange(arg0) {
      ActionSheetActionCreatorsDefault.hideActionSheet(require);
      closure_1_1(arg0);
    },
    children: null
  };
  const prop = require("conjureLinkedApps").CONJURE_LINKED_APP_BUILDS;
  obj3.children = prop.map((value) => {
    const obj = { value, label: require("conjureLinkedApps").linkedAppBuildLabel(value), subLabel: null };
    const obj2 = require("conjureLinkedApps");
    obj.subLabel = require("conjureLinkedApps").linkedAppBuildDescription(value);
    return closure_1_3(require("TableRadioRow").TableRadioRow, obj, value);
  });
  const items = [closure_3(require("TableRadioGroup").TableRadioGroup, obj3), ];
  let tmp6Result = null;
  if (null != onRemove) {
    const obj4 = { hasIcons: false, children: null };
    const obj5 = { variant: "danger", label: null, onPress: null };
    const intl2 = require("util").intl;
    obj5.label = intl2.string(require("module_3830").bN1S9T);
    obj5.onPress = function onPress() {
      ActionSheetActionCreatorsDefault.hideActionSheet(require);
      onRemove();
    };
    obj4.children = closure_3(require("ActionSheetRow").ActionSheetRow, obj5);
    tmp6Result = closure_3(require("ActionSheetRow").ActionSheetRow.Group, obj4);
  }
  items[1] = tmp6Result;
  obj2.children = items;
  obj.children = closure_4(require("Stack/Stack").Stack, obj2);
  return closure_3(require("ActionSheet").ActionSheet, obj);
});