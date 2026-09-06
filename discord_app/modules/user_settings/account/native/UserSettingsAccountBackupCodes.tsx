// === Module 14679: UserSettingsAccountBackupCodes ===

// Module 14679 (UserSettingsAccountBackupCodes)
import nativeDefault from "native" /* 576 */;
import ToastUtils from "ToastUtils" /* 4258 */;
import ClipboardUtils from "ClipboardUtils" /* 7190 */;
import MFAActionCreatorsDefault from "MFAActionCreators" /* 14680 */;
import noop from "module_19" /* 19 */;
import MFAStore from "MFAStore" /* 13746 */;

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
    obj = { color: nativeDefault.colors.TEXT_BRAND };
    tmp2Result = closure_6(code(7133).CheckmarkSmallIcon, obj);
  }
  obj.trailing = tmp2Result;
  return closure_6(code(5605).TableRow, obj);
}
const ScrollView = fn(17).ScrollView;
const jsxProd = fn(21);
({ jsx: metroRequire, jsxs: closure_7 } = jsxProd);
fn(4560);
let createStyles = { generateCode: null };
createStyles = { color: nativeDefault.colors.TEXT_BRAND };
createStyles.generateCode = createStyles;
let closure_8 = createStyles.createStyles(createStyles);
const size = fn(2);
let result = size.fileFinishedImporting("modules/user_settings/account/native/UserSettingsAccountBackupCodes.tsx");

export default function UserSettingsAccountBackupCodes(headerLabel) {
  headerLabel = headerLabel.headerLabel;
  if (headerLabel === undefined) {
    const intl = stateFromStores(1114).intl;
    headerLabel = intl.format(stateFromStores(1114).t.OhmvYt, {});
  }
  stateFromStores = undefined;
  let obj = stateFromStores(4262);
  const token = obj.useToken(nativeDefault.modules.mobile.TABLE_ROW_PADDING);
  let obj1 = stateFromStores(504);
  const items = [MFAStore];
  stateFromStores = obj1.useStateFromStores(items, () => MFAStore.getBackupCodes());
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
  obj = { spacing: nativeDefault.space.PX_24, style: null, children: null };
  obj = { paddingHorizontal: token, paddingTop: nativeDefault.space.PX_16 };
  obj.style = obj;
  const items2 = [headerLabel.map((children, index) => closure_1_6(stateFromStores(4556).Text, { variant: "text-sm/medium", children }, index)), , , ];
  let tmp10Result = unusedCodes.length > 0;
  if (tmp10Result) {
    obj1 = { title: null, hasIcons: false, children: null };
    const intl2 = tmp3(1114).intl;
    obj1.title = intl2.string(tmp3(1114).t.zdzyFo);
    obj1.children = unusedCodes.map((code, index) => closure_1_6(CodeRow, { code: code.code, showCheckMark: false }, index));
    tmp10Result = closure_6(tmp3(5687).TableRowGroup, obj1);
  }
  items2[1] = tmp10Result;
  tmp10Result = usedCodes.length > 0;
  if (tmp10Result) {
    const obj2 = { title: null, hasIcons: false, children: null };
    const intl3 = tmp3(1114).intl;
    obj2.title = intl3.string(tmp3(1114).t.FkFLDN);
    obj2.children = usedCodes.map((code, index) => closure_1_6(CodeRow, { code: code.code, showCheckMark: true }, index));
    tmp10Result = closure_6(tmp3(5687).TableRowGroup, obj2);
  }
  items2[2] = tmp10Result;
  let tmp10Result1 = null !== headerLabel.onGenerate;
  if (tmp10Result1) {
    const obj3 = { hasIcons: false, children: null };
    const obj4 = { label: null, onPress: null };
    const obj5 = { variant: "text-md/semibold", style: tmp6.generateCode, children: null };
    const intl4 = tmp3(1114).intl;
    obj5.children = intl4.string(tmp3(1114).t.RIThUu);
    obj4.label = closure_6(tmp3(4556).Text, obj5);
    obj4.onPress = function onPress() {
      const verificationKey = MFAStore.getVerificationKey();
      const result = MFAActionCreatorsDefault.confirmViewBackupCodes(verificationKey, true);
    };
    obj3.children = closure_6(tmp3(5605).TableRow, obj4);
    tmp10Result1 = closure_6(tmp3(5687).TableRowGroup, obj3);
  }
  tmp6 = closure_8();
  items2[3] = tmp10Result1;
  obj.children = items2;
  return closure_6(ScrollView, { children: closure_7(stateFromStores(4973).Stack, obj) });
};