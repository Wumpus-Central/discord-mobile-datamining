// === Module 14216: UserSettingsAccountBackupCodes ===

// Module 14216 (UserSettingsAccountBackupCodes)
import nativeDefault from "native" /* 576 */;
import ToastUtils from "ToastUtils" /* 4524 */;
import ClipboardUtils from "ClipboardUtils" /* 6605 */;
import MFAActionCreatorsDefault from "MFAActionCreators" /* 14217 */;
import noop from "module_19" /* 19 */;
import MFAStore from "MFAStore" /* 13274 */;

require = fn;
function CodeRow(code) {
  code = code.code;
  const showCheckMark = code.showCheckMark;
  const items = [code];
  const callback = noop.useCallback(() => {
    ClipboardUtils.copy(code.replace(/[^a-zA-Z0-9]/g, ""));
    const result = ToastUtils.presentCopiedToClipboard();
  }, items);
  let tmp5;
  if (!showCheckMark) {
    tmp5 = callback;
  }
  let obj = { onPress: tmp5, label: code, trailing: null };
  let tmp2Result = null;
  if (showCheckMark) {
    const obj2 = { color: nativeDefault.colors.TEXT_BRAND };
    tmp2Result = closure_6(code(6549).CheckmarkSmallIcon, obj2);
  }
  obj.trailing = tmp2Result;
  return closure_6(code(5912).TableRow, obj);
}
const ScrollView = fn(17).ScrollView;
const jsxProd = fn(21);
({ jsx: metroRequire, jsxs: closure_7 } = jsxProd);
const createStyles = fn(4829);
let obj2 = { generateCode: { color: nativeDefault.colors.TEXT_BRAND } };
let closure_8 = createStyles.createStyles(obj2);
const size = fn(2);
let result = size.fileFinishedImporting("modules/user_settings/account/native/UserSettingsAccountBackupCodes.tsx");

export default function UserSettingsAccountBackupCodes(headerLabel) {
  headerLabel = headerLabel.headerLabel;
  if (headerLabel === undefined) {
    const intl = stateFromStores(1115).intl;
    headerLabel = intl.format(stateFromStores(1115).t.OhmvYt, {});
  }
  stateFromStores = undefined;
  const token = stateFromStores(4528).useToken(nativeDefault.modules.mobile.TABLE_ROW_PADDING);
  const obj = stateFromStores(4528);
  const tmp6 = closure_8();
  const items = [MFAStore];
  stateFromStores = stateFromStores(504).useStateFromStores(items, () => MFAStore.getBackupCodes());
  const items1 = [stateFromStores];
  const memo = noop.useMemo(() => {
    const usedCodes = [];
    const unusedCodes = [];
    const item = stateFromStores.forEach((consumed) => {
      if (consumed.consumed) {
        let arr = usedCodes.push(consumed);
      } else {
        arr = unusedCodes.push(consumed);
      }
      return arr;
    });
    return { usedCodes, unusedCodes };
  }, items1);
  ({ usedCodes, unusedCodes } = memo);
  const effect = noop.useEffect(() => () => {
    closure_1_1(dependencyMap[13]).clearBackupCodes();
  }, []);
  const obj3 = { spacing: nativeDefault.space.PX_24, style: null, children: null };
  const obj2 = stateFromStores(504);
  obj3.style = { paddingHorizontal: token, paddingTop: nativeDefault.space.PX_16 };
  const items2 = [headerLabel.map((children, index) => closure_1_6(stateFromStores(4825).Text, { variant: "text-sm/medium", children }, index)), , , ];
  let tmp10Result = unusedCodes.length > 0;
  if (tmp10Result) {
    const obj5 = { title: null, hasIcons: false, children: null };
    const intl2 = tmp3(1115).intl;
    obj5.title = intl2.string(tmp3(1115).t.zdzyFo);
    obj5.children = unusedCodes.map((code, index) => closure_1_6(CodeRow, { code: code.code, showCheckMark: false }, index));
    tmp10Result = closure_6(tmp3(5994).TableRowGroup, obj5);
  }
  items2[1] = tmp10Result;
  let tmp10Result3 = usedCodes.length > 0;
  if (tmp10Result3) {
    const obj6 = { title: null, hasIcons: false, children: null };
    const intl3 = tmp3(1115).intl;
    obj6.title = intl3.string(tmp3(1115).t.FkFLDN);
    obj6.children = usedCodes.map((code, index) => closure_1_6(CodeRow, { code: code.code, showCheckMark: true }, index));
    tmp10Result3 = closure_6(tmp3(5994).TableRowGroup, obj6);
  }
  items2[2] = tmp10Result3;
  let tmp10Result4 = null !== headerLabel.onGenerate;
  if (tmp10Result4) {
    const obj7 = { hasIcons: false, children: null };
    const obj8 = { label: null, onPress: null };
    const obj9 = { variant: "text-md/semibold", style: tmp6.generateCode, children: null };
    const intl4 = tmp3(1115).intl;
    obj9.children = intl4.string(tmp3(1115).t.RIThUu);
    obj8.label = closure_6(tmp3(4825).Text, obj9);
    obj8.onPress = function onPress() {
      const verificationKey = MFAStore.getVerificationKey();
      const result = MFAActionCreatorsDefault.confirmViewBackupCodes(verificationKey, true);
    };
    obj7.children = closure_6(tmp3(5912).TableRow, obj8);
    tmp10Result4 = closure_6(tmp3(5994).TableRowGroup, obj7);
  }
  const obj4 = { paddingHorizontal: token, paddingTop: nativeDefault.space.PX_16 };
  items2[3] = tmp10Result4;
  obj3.children = items2;
  return closure_6(ScrollView, { children: closure_7(stateFromStores(5272).Stack, obj3) });
};