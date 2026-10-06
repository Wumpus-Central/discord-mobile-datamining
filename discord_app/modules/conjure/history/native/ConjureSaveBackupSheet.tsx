// === Module 16665: ConjureSaveBackupSheet ===

// Module 16665 (ConjureSaveBackupSheet)
import react_native from "react-native" /* 17 */;
import nativeDefault from "native" /* 587 */;
import ConjureConnectionStore from "ConjureConnectionStore" /* 12923 */;
import conjureDatabaseLock from "conjureDatabaseLock" /* 16660 */;
import _slicedToArray from "_slicedToArray" /* 32 */;
import react_mod from "react" /* 19 */;
import Fragment from "Fragment" /* 21 */;
import createStyles from "createStyles" /* 4896 */;
import ReactCompilerGating from "ReactCompilerGating" /* 558 */;
import size from "module_2" /* 2 */;

let metroImportAll;
let metroImportDefault;
let obj2;
let react = react_mod;
const View = react_native.View;
let closure_6 = ConjureConnectionStore.createDatabaseRestorePoint;
({ jsx: metroImportDefault, jsxs: metroImportAll } = Fragment);
const ConjureSaveBackupSheet = "ConjureSaveBackupSheet";
let obj = { content: obj2 };
obj2 = { paddingBottom: nativeDefault.space.PX_16 };
let closure_10 = createStyles.createStyles(obj);
const tmp3 = ReactCompilerGating.isReactCompilerEnabled() ? ((projectId) => {
  let intl;
  let items;
  let obj6;
  let onSaved;
  let tmp11;
  let tmp9;
  let tmpResult;
  let value;
  let tmp = projectId;
  const tmp2 = onSaved;
  let obj = projectId(onSaved[8]);
  const cResult = obj.c(28);
  projectId = projectId.projectId;
  const environment = projectId.environment;
  onSaved = projectId.onSaved;
  const tmp4 = closure_10();
  const tmp5 = value(react.useState(""), 2);
  value = tmp5[0];
  const tmp7 = tmp5[1];
  const tmp8 = value(react.useState(false), 2);
  [tmp9, react] = tmp8;
  [tmp11, View] = value(react.useState(false), 2);
  value(react.useState(false), 2);
  if (cResult[0] === environment) {
    if (cResult[1] === value) {
      if (cResult[2] === onSaved) {
        let tmp12;
        let tmp14;
        let tmp18;
        let tmp21;
        let tmp24;
        let tmp27;
        if (cResult[3] === projectId) {
          tmp12 = cResult[4];
        }
        const _Symbol = Symbol;
        if (cResult[5] === Symbol.for("react.memo_cache_sentinel")) {
          let obj2 = { title: intl.string(environment(tmp2[12]).qywOto) };
          const BottomSheetTitleHeader = tmp(tmp2[14]).BottomSheetTitleHeader;
          intl = tmp(tmp2[11]).intl;
          const tmp17 = closure_7(BottomSheetTitleHeader, obj2);
          cResult[5] = tmp17;
          tmp14 = tmp17;
        } else {
          tmp14 = cResult[5];
        }
        const content = tmp4.content;
        if (cResult[6] !== environment) {
          const intl2 = tmp(tmp2[11]).intl;
          const formatToPlainString = intl2.formatToPlainString;
          const obj3 = { environment: tmpResult.historyEnvironmentLabel(environment) };
          const sXGNm5 = environment(tmp2[12]).sXGNm5;
          tmpResult = tmp(tmp2[15]);
          const formatToPlainStringResult = formatToPlainString(sXGNm5, obj3);
          cResult[6] = environment;
          cResult[7] = formatToPlainStringResult;
          tmp18 = formatToPlainStringResult;
        } else {
          tmp18 = cResult[7];
        }
        if (cResult[8] !== tmp18) {
          const obj4 = { variant: "text-sm/normal", color: "text-muted", children: tmp18 };
          const tmp23 = closure_7(tmp(tmp2[16]).Text, obj4);
          cResult[8] = tmp18;
          cResult[9] = tmp23;
          tmp21 = tmp23;
        } else {
          tmp21 = cResult[9];
        }
        const _Symbol2 = Symbol;
        if (cResult[10] === Symbol.for("react.memo_cache_sentinel")) {
          const intl3 = tmp(tmp2[11]).intl;
          const stringResult = intl3.string(environment(tmp2[12]).WKmhsD);
          cResult[10] = stringResult;
          tmp24 = stringResult;
        } else {
          tmp24 = cResult[10];
        }
        if (cResult[11] !== tmp11) {
          let stringResult1;
          if (tmp11) {
            const intl4 = tmp(tmp2[11]).intl;
            stringResult1 = intl4.string(environment(tmp2[12]).TOxYEF);
          }
          cResult[11] = tmp11;
          cResult[12] = stringResult1;
          tmp27 = stringResult1;
        } else {
          tmp27 = cResult[12];
        }
        if (cResult[13] === value) {
          if (cResult[14] === tmp9) {
            let tmp30;
            let tmp33;
            if (cResult[15] === tmp27) {
              tmp30 = cResult[16];
            }
            const _Symbol3 = Symbol;
            if (cResult[17] === Symbol.for("react.memo_cache_sentinel")) {
              const intl5 = tmp(tmp2[11]).intl;
              const stringResult2 = intl5.string(environment(tmp2[12])["5/xCdF"]);
              cResult[17] = stringResult2;
              tmp33 = stringResult2;
            } else {
              tmp33 = cResult[17];
            }
            if (cResult[18] === tmp12) {
              let tmp36;
              if (cResult[19] === tmp9) {
                tmp36 = cResult[20];
              }
              if (cResult[21] === tmp36) {
                if (cResult[22] === tmp21) {
                  let tmp39;
                  if (cResult[23] === tmp30) {
                    tmp39 = cResult[24];
                  }
                  if (cResult[25] === tmp4.content) {
                    let tmp42;
                    if (cResult[26] === tmp39) {
                      tmp42 = cResult[27];
                    }
                    return tmp42;
                  }
                  const obj5 = { startExpanded: true, keyboardShouldPersistTaps: "handled", header: tmp14, children: closure_7(View, obj6) };
                  obj6 = { style: content, children: tmp39 };
                  const ActionSheet = tmp(tmp2[20]).ActionSheet;
                  const tmp45 = closure_7(ActionSheet, obj5);
                  cResult[25] = tmp4.content;
                  cResult[26] = tmp39;
                  cResult[27] = tmp45;
                  tmp42 = tmp45;
                }
              }
              const obj7 = { spacing: 16, children: items };
              items = [tmp21, tmp30, tmp36];
              const tmp41 = closure_8(tmp(tmp2[19]).Stack, obj7);
              cResult[21] = tmp36;
              cResult[22] = tmp21;
              cResult[23] = tmp30;
              cResult[24] = tmp41;
              tmp39 = tmp41;
            }
            const obj8 = { variant: "primary", text: tmp33, loading: tmp9, onPress: tmp12 };
            const tmp38 = closure_7(tmp(tmp2[18]).Button, obj8);
            cResult[18] = tmp12;
            cResult[19] = tmp9;
            cResult[20] = tmp38;
            tmp36 = tmp38;
          }
        }
        const obj9 = { label: tmp24, value, onChange: tmp7, maxLength: 200, disabled: tmp9, errorMessage: tmp27 };
        const tmp32 = closure_7(tmp(tmp2[17]).TextInput, obj9);
        cResult[13] = value;
        cResult[14] = tmp9;
        cResult[15] = tmp27;
        cResult[16] = tmp32;
        tmp30 = tmp32;
      }
    }
  }
  const fn = function v() {
    const tmp = react(true);
    View(false);
    let obj = conjureDatabaseLock;
    const result = obj.withConjureDatabaseLock(projectId, () => closure_2_6(projectId, environment, closure_1_3));
    const nextPromise = result.then(function(result) {
      if (null == result) {
        const _Error = Error;
        const self = this;
        const self2 = this;
        const error = new Error("database busy");
        throw error;
      }
    });
    nextPromise.then(() => {
      let intl;
      const obj = { key: "VIBEGRATIONS_HISTORY_BACKUP_SAVED", content: intl.string(environment(onSaved[12]).OoHJfv) };
      const open = environment(onSaved[10]).open;
      environment(onSaved[10]);
      intl = projectId(onSaved[11]).intl;
      open(obj);
      closure_1_2();
      const obj2 = environment(onSaved[13]);
      obj2.hideActionSheet(ConjureSaveBackupSheet);
    }, () => {
      closure_1_4(false);
      closure_1_5(true);
    });
  };
  cResult[0] = environment;
  cResult[1] = value;
  cResult[2] = onSaved;
  cResult[3] = projectId;
  cResult[4] = fn;
  tmp12 = fn;
}) : ((projectId) => {
  let BottomSheetTitleHeader;
  let Stack;
  let _undefined;
  let c4;
  let formatToPlainString;
  let intl;
  let intl3;
  let intl5;
  let obj2;
  let obj3;
  let obj5;
  let obj6;
  let obj8;
  let sXGNm5;
  let stringResult;
  let tmp14;
  let tmp6;
  projectId = projectId.projectId;
  const environment = projectId.environment;
  const onSaved = projectId.onSaved;
  let value;
  react = undefined;
  let tmp = closure_10();
  const tmp2 = value(react.useState(""), 2);
  value = tmp2[0];
  const tmp4 = tmp2[1];
  [tmp6, c4] = value(react.useState(false), 2);
  value(react.useState(false), 2);
  const tmp7 = value(react.useState(false), 2);
  let closure_5 = tmp7[1];
  const items = [environment, value, onSaved, projectId];
  const first1 = tmp7[0];
  const callback = react.useCallback(() => {
    const tmp = _undefined(true);
    closure_5(false);
    let obj = conjureDatabaseLock;
    const result = obj.withConjureDatabaseLock(projectId, () => closure_2_6(projectId, environment, closure_1_3));
    const nextPromise = result.then(function(result) {
      if (null == result) {
        const _Error = Error;
        const self = this;
        const self2 = this;
        const error = new Error("database busy");
        throw error;
      }
    });
    nextPromise.then(() => {
      let intl;
      const obj = { key: "VIBEGRATIONS_HISTORY_BACKUP_SAVED", content: intl.string(environment(onSaved[12]).OoHJfv) };
      const open = environment(onSaved[10]).open;
      environment(onSaved[10]);
      intl = projectId(onSaved[11]).intl;
      open(obj);
      closure_1_2();
      const obj2 = environment(onSaved[13]);
      obj2.hideActionSheet(ConjureSaveBackupSheet);
    }, () => {
      _undefined(false);
      closure_1_5(true);
    });
  }, items);
  let obj = { startExpanded: true, keyboardShouldPersistTaps: "handled", header: closure_7(BottomSheetTitleHeader, obj2), children: closure_7(tmp14, obj3) };
  const ActionSheet = projectId(onSaved[20]).ActionSheet;
  obj2 = { title: intl.string(environment(onSaved[12]).qywOto) };
  BottomSheetTitleHeader = projectId(onSaved[14]).BottomSheetTitleHeader;
  intl = projectId(onSaved[11]).intl;
  obj3 = { style: tmp.content, children: closure_8(Stack, obj8) };
  Stack = projectId(onSaved[19]).Stack;
  const obj4 = { variant: "text-sm/normal", color: "text-muted", children: formatToPlainString(sXGNm5, obj5) };
  const Text = projectId(onSaved[16]).Text;
  const intl2 = projectId(onSaved[11]).intl;
  formatToPlainString = intl2.formatToPlainString;
  obj5 = { environment: obj6.historyEnvironmentLabel(environment) };
  sXGNm5 = environment(onSaved[12]).sXGNm5;
  obj6 = projectId(onSaved[15]);
  const items1 = [closure_7(Text, obj4), , ];
  const obj7 = { label: intl3.string(environment(onSaved[12]).WKmhsD), value, onChange: tmp4, maxLength: 200, disabled: tmp6, errorMessage: stringResult };
  const TextInput = projectId(onSaved[17]).TextInput;
  intl3 = projectId(onSaved[11]).intl;
  stringResult = undefined;
  tmp14 = closure_5;
  if (first1) {
    const intl4 = tmp11(tmp12[11]).intl;
    stringResult = intl4.string(tmp13(tmp12[12]).TOxYEF);
  }
  obj8 = { spacing: 16, children: items1 };
  items1[1] = closure_7(TextInput, obj7);
  const obj9 = { variant: "primary", text: intl5.string(environment(onSaved[12])["5/xCdF"]), loading: tmp6, onPress: callback };
  const Button = tmp11(tmp12[18]).Button;
  intl5 = tmp11(tmp12[11]).intl;
  items1[2] = closure_7(Button, obj9);
  return closure_7(ActionSheet, obj);
});
let result = size.fileFinishedImporting("modules/conjure/history/native/ConjureSaveBackupSheet.tsx");

export default tmp3;
export const CONJURE_SAVE_BACKUP_SHEET_KEY = "ConjureSaveBackupSheet";