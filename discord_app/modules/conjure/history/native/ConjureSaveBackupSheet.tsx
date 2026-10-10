// === Module 17123: ConjureSaveBackupSheet ===

// Module 17123 (ConjureSaveBackupSheet)
import nativeDefault from "native" /* 587 */;
import conjureDatabaseLock from "conjureDatabaseLock" /* 17118 */;
import _slicedToArray from "module_32" /* 32 */;
import noop from "module_19" /* 19 */;

require = fn;
const View = fn(17).View;
let closure_6 = fn(13213).createDatabaseRestorePoint;
const jsxProd = fn(21);
({ jsx: closure_7, jsxs: closure_8 } = jsxProd);
const ConjureSaveBackupSheet = "ConjureSaveBackupSheet";
const createStyles = fn(5092);
let obj2 = { content: { paddingBottom: nativeDefault.space.PX_16 } };
let closure_10 = createStyles.createStyles(obj2);
const ReactCompilerGating = fn(558);
let obj3 = { paddingBottom: nativeDefault.space.PX_16 };
const size = fn(2);
let result = size.fileFinishedImporting("modules/conjure/history/native/ConjureSaveBackupSheet.tsx");

export default ReactCompilerGating.isReactCompilerEnabled() ? (function ConjureSaveBackupSheet(projectId) {
  const cResult = projectId(onSaved[8]).c(28);
  projectId = projectId.projectId;
  const environment = projectId.environment;
  onSaved = projectId.onSaved;
  const tmp4 = closure_10();
  const tmp5 = value(noop.useState(""), 2);
  value = tmp5[0];
  let obj = projectId(onSaved[8]);
  [tmp8, noop] = value(noop.useState(false), 2);
  const tmp7 = value(noop.useState(false), 2);
  [tmp10, View] = value(noop.useState(false), 2);
  if (cResult[0] === environment) {
    if (cResult[1] === value) {
      if (cResult[2] === onSaved) {
        if (cResult[3] === projectId) {
          let tmp11 = cResult[4];
        }
        const _Symbol = Symbol;
        if (cResult[5] === Symbol.for("react.memo_cache_sentinel")) {
          let obj2 = { title: null };
          let intl = tmp(tmp2[11]).intl;
          obj2.title = intl.string(environment(tmp2[12]).qywOto);
          const tmp16 = closure_7(tmp(tmp2[14]).BottomSheetTitleHeader, obj2);
          cResult[5] = tmp16;
          let tmp13 = tmp16;
        } else {
          tmp13 = cResult[5];
        }
        if (cResult[6] !== environment) {
          const intl2 = tmp(tmp2[11]).intl;
          const obj3 = { environment: tmp(tmp2[15]).historyEnvironmentLabel(environment) };
          const formatToPlainStringResult = intl2.formatToPlainString(environment(tmp2[12]).sXGNm5, obj3);
          cResult[6] = environment;
          cResult[7] = formatToPlainStringResult;
          let tmp17 = formatToPlainStringResult;
          const tmpResult = tmp(tmp2[15]);
        } else {
          tmp17 = cResult[7];
        }
        if (cResult[8] !== tmp17) {
          const obj4 = { variant: "text-sm/normal", color: "text-muted", children: tmp17 };
          const tmp22 = closure_7(tmp(tmp2[16]).Text, obj4);
          cResult[8] = tmp17;
          cResult[9] = tmp22;
          let tmp20 = tmp22;
        } else {
          tmp20 = cResult[9];
        }
        const _Symbol2 = Symbol;
        if (cResult[10] === Symbol.for("react.memo_cache_sentinel")) {
          const intl3 = tmp(tmp2[11]).intl;
          const stringResult = intl3.string(environment(tmp2[12]).WKmhsD);
          cResult[10] = stringResult;
          let tmp23 = stringResult;
        } else {
          tmp23 = cResult[10];
        }
        if (cResult[11] !== tmp10) {
          let stringResult1;
          if (tmp10) {
            const intl4 = tmp(tmp2[11]).intl;
            stringResult1 = intl4.string(environment(tmp2[12]).TOxYEF);
          }
          cResult[11] = tmp10;
          cResult[12] = stringResult1;
          let tmp26 = stringResult1;
        } else {
          tmp26 = cResult[12];
        }
        if (cResult[13] === value) {
          if (cResult[14] === tmp8) {
            if (cResult[15] === tmp26) {
              let tmp29 = cResult[16];
            }
            const _Symbol3 = Symbol;
            if (cResult[17] === Symbol.for("react.memo_cache_sentinel")) {
              const intl5 = tmp(tmp2[11]).intl;
              const stringResult2 = intl5.string(environment(tmp2[12])["5/xCdF"]);
              cResult[17] = stringResult2;
              let tmp32 = stringResult2;
            } else {
              tmp32 = cResult[17];
            }
            if (cResult[18] === tmp11) {
              if (cResult[19] === tmp8) {
                let tmp35 = cResult[20];
              }
              if (cResult[21] === tmp35) {
                if (cResult[22] === tmp20) {
                  if (cResult[23] === tmp29) {
                    let tmp38 = cResult[24];
                  }
                  if (cResult[25] === tmp4.content) {
                    if (cResult[26] === tmp38) {
                      let tmp41 = cResult[27];
                    }
                    return tmp41;
                  }
                  const obj5 = { startExpanded: true, keyboardShouldPersistTaps: "handled", header: tmp13, children: null };
                  const obj6 = { style: tmp4.content, children: tmp38 };
                  obj5.children = closure_7(View, obj6);
                  const tmp44 = closure_7(tmp(tmp2[20]).ActionSheet, obj5);
                  cResult[25] = tmp4.content;
                  cResult[26] = tmp38;
                  cResult[27] = tmp44;
                  tmp41 = tmp44;
                }
              }
              const obj7 = { spacing: 16, children: null };
              const items = [tmp20, tmp29, tmp35];
              obj7.children = items;
              const tmp40 = closure_8(tmp(tmp2[19]).Stack, obj7);
              cResult[21] = tmp35;
              cResult[22] = tmp20;
              cResult[23] = tmp29;
              cResult[24] = tmp40;
              tmp38 = tmp40;
            }
            const obj8 = { variant: "primary", text: tmp32, loading: tmp8, onPress: tmp11 };
            const tmp37 = closure_7(tmp(tmp2[18]).Button, obj8);
            cResult[18] = tmp11;
            cResult[19] = tmp8;
            cResult[20] = tmp37;
            tmp35 = tmp37;
          }
        }
        const obj9 = { label: tmp23, value, onChange: tmp5[1], maxLength: 200, disabled: tmp8, errorMessage: tmp26 };
        const tmp31 = closure_7(tmp(tmp2[17]).TextInput, obj9);
        cResult[13] = value;
        cResult[14] = tmp8;
        cResult[15] = tmp26;
        cResult[16] = tmp31;
        tmp29 = tmp31;
      }
    }
  }
  const fn = function v() {
    noop(true);
    View(false);
    const result = conjureDatabaseLock.withConjureDatabaseLock(projectId, () => closure_2_6(projectId, environment, closure_1_3));
    result.then((result) => {
      if (null == result) {
        const _Error = Error;
        const error = new Error("database busy");
        throw error;
      }
    }).then(() => {
      const obj2 = { text: null };
      const intl = projectId(onSaved[11]).intl;
      obj2.text = intl.string(environment(onSaved[12]).OoHJfv);
      environment(onSaved[10]).open("VIBEGRATIONS_HISTORY_BACKUP_SAVED", obj2);
      closure_1_2();
      const obj = environment(onSaved[10]);
      environment(onSaved[13]).hideActionSheet(ConjureSaveBackupSheet);
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
  tmp11 = fn;
  const tmp9 = value(noop.useState(false), 2);
}) : (function ConjureSaveBackupSheet(projectId) {
  projectId = projectId.projectId;
  const environment = projectId.environment;
  const onSaved = projectId.onSaved;
  value = undefined;
  noop = undefined;
  const tmp2 = value(noop.useState(""), 2);
  value = tmp2[0];
  const tmp = closure_10();
  [tmp5, c4] = value(noop.useState(false), 2);
  const tmp6 = value(noop.useState(false), 2);
  closure_5 = tmp6[1];
  const items = [environment, value, onSaved, projectId];
  const callback = noop.useCallback(() => {
    _undefined(true);
    closure_5(false);
    const result = conjureDatabaseLock.withConjureDatabaseLock(projectId, () => closure_2_6(projectId, environment, closure_1_3));
    result.then((result) => {
      if (null == result) {
        const _Error = Error;
        const error = new Error("database busy");
        throw error;
      }
    }).then(() => {
      const obj2 = { text: null };
      const intl = projectId(onSaved[11]).intl;
      obj2.text = intl.string(environment(onSaved[12]).OoHJfv);
      environment(onSaved[10]).open("VIBEGRATIONS_HISTORY_BACKUP_SAVED", obj2);
      closure_1_2();
      const obj = environment(onSaved[10]);
      environment(onSaved[13]).hideActionSheet(ConjureSaveBackupSheet);
    }, () => {
      _undefined(false);
      closure_1_5(true);
    });
  }, items);
  let obj = { startExpanded: true, keyboardShouldPersistTaps: "handled", header: null, children: null };
  let obj2 = { title: null };
  let intl = projectId(onSaved[11]).intl;
  obj2.title = intl.string(environment(onSaved[12]).qywOto);
  obj.header = closure_7(projectId(onSaved[14]).BottomSheetTitleHeader, obj2);
  const obj3 = { style: tmp.content, children: null };
  const obj4 = { variant: "text-sm/normal", color: "text-muted", children: null };
  const intl2 = projectId(onSaved[11]).intl;
  const obj5 = { environment: null };
  const tmp12 = closure_5;
  const tmp4 = value(noop.useState(false), 2);
  obj5.environment = projectId(onSaved[15]).historyEnvironmentLabel(environment);
  obj4.children = intl2.formatToPlainString(environment(onSaved[12]).sXGNm5, obj5);
  const items1 = [closure_7(projectId(onSaved[16]).Text, obj4), , ];
  const obj7 = { label: null, value: null, onChange: null, maxLength: 200, disabled: null, errorMessage: null };
  const intl3 = projectId(onSaved[11]).intl;
  obj7.label = intl3.string(environment(onSaved[12]).WKmhsD);
  obj7.value = value;
  obj7.onChange = tmp2[1];
  obj7.disabled = tmp5;
  let stringResult;
  if (tmp6[0]) {
    const intl4 = tmp9(tmp10[11]).intl;
    stringResult = intl4.string(tmp11(tmp10[12]).TOxYEF);
  }
  const obj8 = { spacing: 16, children: null };
  obj7.errorMessage = stringResult;
  items1[1] = closure_7(projectId(onSaved[17]).TextInput, obj7);
  const obj9 = { variant: "primary", text: null, loading: null, onPress: null };
  const intl5 = tmp9(tmp10[11]).intl;
  obj9.text = intl5.string(environment(onSaved[12])["5/xCdF"]);
  obj9.loading = tmp5;
  obj9.onPress = callback;
  items1[2] = closure_7(projectId(onSaved[18]).Button, obj9);
  obj8.children = items1;
  obj3.children = closure_8(projectId(onSaved[19]).Stack, obj8);
  obj.children = closure_7(tmp12, obj3);
  return closure_7(projectId(onSaved[20]).ActionSheet, obj);
});
export const CONJURE_SAVE_BACKUP_SHEET_KEY = "ConjureSaveBackupSheet";