// === Module 12499: ConjureSaveBackupSheet ===

// Module 12499 (ConjureSaveBackupSheet)
import nativeDefault from "native" /* 575 */;
import conjureDatabaseLock from "conjureDatabaseLock" /* 12489 */;
import _slicedToArray from "module_32" /* 32 */;
import noop from "module_19" /* 19 */;

require = fn;
const View = fn(17).View;
const jsxProd = fn(21);
({ jsx: metroRequire, jsxs: closure_7 } = jsxProd);
const ConjureSaveBackupSheet = "ConjureSaveBackupSheet";
const createStyles = fn(5009);
let obj2 = { content: { paddingBottom: nativeDefault.space.PX_16 } };
let closure_9 = createStyles.createStyles(obj2);
const size = fn(2);
let result = size.fileFinishedImporting("modules/conjure/history/native/ConjureSaveBackupSheet.tsx");

export default function ConjureSaveBackupSheet(projectId) {
  projectId = projectId.projectId;
  const environment = projectId.environment;
  const onSaved = projectId.onSaved;
  value = undefined;
  noop = undefined;
  const tmp2 = value(noop.useState(""), 2);
  value = tmp2[0];
  const tmp = closure_9();
  [tmp5, c4] = value(noop.useState(false), 2);
  const tmp6 = value(noop.useState(false), 2);
  closure_5 = tmp6[1];
  const items = [environment, value, onSaved, projectId];
  const callback = noop.useCallback(() => {
    _undefined(true);
    closure_5(false);
    const result = conjureDatabaseLock.withConjureDatabaseLock(projectId, () => projectId(onSaved[7]).createDatabaseRestorePoint(closure_1_0, environment, closure_1_3));
    result.then((result) => {
      if (null == result) {
        const _Error = Error;
        const error = new Error("database busy");
        throw error;
      }
    }).then(() => {
      const obj2 = { text: null };
      const intl = projectId(onSaved[9]).intl;
      obj2.text = intl.string(environment(onSaved[10]).OoHJfv);
      environment(onSaved[8]).open("CONJURE_HISTORY_BACKUP_SAVED", obj2);
      closure_1_2();
      const obj = environment(onSaved[8]);
      environment(onSaved[11]).hideActionSheet(ConjureSaveBackupSheet);
    }, () => {
      _undefined(false);
      closure_1_5(true);
    });
  }, items);
  let obj = { startExpanded: true, keyboardShouldPersistTaps: "handled", header: null, children: null };
  let obj2 = { title: null };
  let intl = projectId(onSaved[9]).intl;
  obj2.title = intl.string(environment(onSaved[10]).qywOto);
  obj.header = closure_6(projectId(onSaved[13]).BottomSheetTitleHeader, obj2);
  const obj3 = { style: tmp.content, children: null };
  const obj4 = { variant: "text-sm/normal", color: "text-muted", children: null };
  const intl2 = projectId(onSaved[9]).intl;
  const obj5 = { environment: null };
  const tmp12 = closure_5;
  const tmp4 = value(noop.useState(false), 2);
  obj5.environment = projectId(onSaved[16]).historyEnvironmentLabel(environment);
  obj4.children = intl2.formatToPlainString(environment(onSaved[10]).sXGNm5, obj5);
  const items1 = [closure_6(projectId(onSaved[15]).Text, obj4), , ];
  const obj7 = { label: null, value: null, onChange: null, maxLength: 200, disabled: null, errorMessage: null };
  const intl3 = projectId(onSaved[9]).intl;
  obj7.label = intl3.string(environment(onSaved[10]).WKmhsD);
  obj7.value = value;
  obj7.onChange = tmp2[1];
  obj7.disabled = tmp5;
  let stringResult;
  if (tmp6[0]) {
    const intl4 = tmp9(tmp10[9]).intl;
    stringResult = intl4.string(tmp11(tmp10[10]).TOxYEF);
  }
  const obj8 = { spacing: 16, children: null };
  obj7.errorMessage = stringResult;
  items1[1] = closure_6(projectId(onSaved[17]).TextInput, obj7);
  const obj9 = { variant: "primary", text: null, loading: null, onPress: null };
  const intl5 = tmp9(tmp10[9]).intl;
  obj9.text = intl5.string(environment(onSaved[10])["5/xCdF"]);
  obj9.loading = tmp5;
  obj9.onPress = callback;
  items1[2] = closure_6(projectId(onSaved[18]).Button, obj9);
  obj8.children = items1;
  obj3.children = closure_7(projectId(onSaved[14]).Stack, obj8);
  obj.children = closure_6(tmp12, obj3);
  return closure_6(projectId(onSaved[12]).ActionSheet, obj);
};
export const CONJURE_SAVE_BACKUP_SHEET_KEY = "ConjureSaveBackupSheet";