// === Module 14100: CodeRow ===

// Module 14100 (CodeRow)
import ThemesDefault from "Themes" /* 712 */;
import noop from "noop" /* 19 */;
import { ScrollView } from "get ActivityIndicator" /* 17 */;
import getVerificationKey from "getVerificationKey" /* 13295 */;
import jsxProd from "jsxProd" /* 21 */;
import "createCacheKey";

const require = fn;
function CodeRow(code) {
  code = code.code;
  const showCheckMark = code.showCheckMark;
  const items = [code];
  const callback = React.useCallback(() => {
    code(dependencyMap[6]).copy(code.replace(/[^a-zA-Z0-9]/g, ""));
    const obj = code(dependencyMap[6]);
    const result = code(dependencyMap[7]).presentCopiedToClipboard();
  }, items);
  let tmp5;
  if (!showCheckMark) {
    tmp5 = callback;
  }
  let obj = { onPress: tmp5, label: code, trailing: null };
  let tmp2Result = null;
  if (showCheckMark) {
    obj = { color: null };
    obj[0] = ThemesDefault.colors.TEXT_BRAND;
    tmp2Result = callback(code(6933).CheckmarkSmallIcon, obj);
  }
  obj[2] = tmp2Result;
  return callback(code(6291).TableRow, obj);
}
({ jsx: closure_6, jsxs: error } = jsxProd);
const createCacheKey = { color: ThemesDefault.colors.TEXT_BRAND };
createCacheKey[0] = createCacheKey;
let closure_8 = createCacheKey.createStyles(createCacheKey);
let result = require("obj132").fileFinishedImporting("modules/user_settings/account/native/UserSettingsAccountBackupCodes.tsx");

export default function UserSettingsAccountBackupCodes(headerLabel) {
  headerLabel = headerLabel.headerLabel;
  if (headerLabel === undefined) {
    const intl = stateFromStores(1236).intl;
    headerLabel = intl.format(stateFromStores(1236).t.OhmvYt, {});
  }
  stateFromStores = undefined;
  let obj = stateFromStores(4097);
  const token = obj.useToken(ThemesDefault.modules.mobile.TABLE_ROW_PADDING);
  obj1 = stateFromStores(589);
  const items = [closure_5];
  stateFromStores = obj1.useStateFromStores(items, () => store.getBackupCodes());
  const items1 = [stateFromStores];
  const memo = React.useMemo(() => {
    const usedCodes = [];
    const unusedCodes = [];
    const item = usedCodes.forEach((item, index) => {
      if (item.consumed) {
        let arr = usedCodes.push(item);
      } else {
        arr = unusedCodes.push(item);
      }
      return arr;
    });
    return { usedCodes, unusedCodes };
  }, items1);
  ({ usedCodes, unusedCodes } = memo);
  const effect = React.useEffect(() => () => {
    callback(table[13]).clearBackupCodes();
  }, []);
  obj = { paddingHorizontal: token, paddingTop: ThemesDefault.space.PX_16 };
  obj[1] = obj;
  const items2 = [headerLabel.map((item, index) => callback2(stateFromStores(4734).Text, { variant: "text-sm/medium", children: item }, index)), , , ];
  let tmp10Result = unusedCodes.length > 0;
  if (tmp10Result) {
    obj1 = { title: null, hasIcons: false, children: null };
    const intl2 = tmp3(1236).intl;
    obj1[0] = intl2.string(tmp3(1236).t.zdzyFo);
    obj1[2] = unusedCodes.map((item, index) => callback2(closure_9, { code: item.code, showCheckMark: false }, index));
    tmp10Result = callback(tmp3(6286).TableRowGroup, obj1);
  }
  items2[1] = tmp10Result;
  tmp10Result = usedCodes.length > 0;
  if (tmp10Result) {
    const obj2 = { title: null, hasIcons: false, children: null };
    const intl3 = tmp3(1236).intl;
    obj2[0] = intl3.string(tmp3(1236).t.FkFLDN);
    obj2[2] = usedCodes.map((item, index) => callback2(closure_9, { code: item.code, showCheckMark: true }, index));
    tmp10Result = callback(tmp3(6286).TableRowGroup, obj2);
  }
  items2[2] = tmp10Result;
  let tmp10Result1 = null !== headerLabel.onGenerate;
  if (tmp10Result1) {
    const obj3 = { hasIcons: false, children: null };
    const obj4 = { label: null, onPress: null };
    const obj5 = { variant: "text-md/semibold", style: null, children: null };
    obj5[1] = tmp6.generateCode;
    const intl4 = tmp3(1236).intl;
    obj5[2] = intl4.string(tmp3(1236).t.RIThUu);
    obj4[0] = callback(tmp3(4734).Text, obj5);
    obj4[1] = function onPress() {
      const verificationKey = store.getVerificationKey();
      const result = callback(14101).confirmViewBackupCodes(verificationKey, true);
    };
    obj3[1] = callback(tmp3(6291).TableRow, obj4);
    tmp10Result1 = callback(tmp3(6286).TableRowGroup, obj3);
  }
  tmp6 = callback();
  items2[3] = tmp10Result1;
  obj[2] = items2;
  return callback(ScrollView, { children: callback2(stateFromStores(4733).Stack, obj) });
};