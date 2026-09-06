// discord_app/modules/user_settings/account/native/UserSettingsAccountBackupCodes.tsx
import ThemesDefault from "../../../../../discord_common/js/packages/tokens/native.tsx";
import closure_3 from "../../../../../_runtime/00019_noop.js";
import { ScrollView } from "../../../../../_runtime/00017_get_ActivityIndicator.js";
import closure_5 from "../../../../stores/MFAStore.tsx";
import jsxProd from "../../../../../_runtime/react/00021_jsxProd.js";
import createCacheKey from "../../../../design/components/Styles/native/createStyles.tsx";

const require = arg1;
function CodeRow(code) {
  code = code.code;
  const showCheckMark = code.showCheckMark;
  const items = [code];
  const callback = React.useCallback(() => {
    code(closure_1_2[6]).copy(code.replace(/[^a-zA-Z0-9]/g, ""));
    const obj = code(closure_1_2[6]);
    const result = code(closure_1_2[7]).presentCopiedToClipboard();
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
    tmp2Result = tmp2(code(7133).CheckmarkSmallIcon, obj);
  }
  obj[2] = tmp2Result;
  return closure_6(code(5605).TableRow, obj);
}
({ jsx: closure_6, jsxs: error } = jsxProd);
createCacheKey = { generateCode: null };
createCacheKey = { color: ThemesDefault.colors.TEXT_BRAND };
createCacheKey[0] = createCacheKey;
let closure_8 = createCacheKey.createStyles(createCacheKey);
let result = require("set").fileFinishedImporting(
  "modules/user_settings/account/native/UserSettingsAccountBackupCodes.tsx",
);

export default function UserSettingsAccountBackupCodes(headerLabel) {
  headerLabel = headerLabel.headerLabel;
  if (headerLabel === undefined) {
    const intl = stateFromStores(1114).intl;
    headerLabel = intl.format(stateFromStores(1114).t.OhmvYt, {});
  }
  stateFromStores = undefined;
  let obj = stateFromStores(4262);
  const token = obj.useToken(ThemesDefault.modules.mobile.TABLE_ROW_PADDING);
  obj1 = stateFromStores(504);
  const items = [closure_5];
  stateFromStores = obj1.useStateFromStores(items, () => store.getBackupCodes());
  const items1 = [stateFromStores];
  const memo = React.useMemo(() => {
    const usedCodes = [];
    const unusedCodes = [];
    const item = usedCodes.forEach((consumed) => {
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
  const effect = React.useEffect(
    () => () => {
      callback(table[13]).clearBackupCodes();
    },
    [],
  );
  obj = { spacing: ThemesDefault.space.PX_24, style: null, children: null };
  obj = { paddingHorizontal: token, paddingTop: ThemesDefault.space.PX_16 };
  obj[1] = obj;
  const items2 = [
    headerLabel.map((children) => callback2(stateFromStores(4556).Text, { variant: "text-sm/medium", children }, arg1)),
    ,
    ,
  ];
  let tmp10Result = unusedCodes.length > 0;
  if (tmp10Result) {
    obj1 = { title: null, hasIcons: false, children: null };
    const intl2 = tmp3(1114).intl;
    obj1[0] = intl2.string(tmp3(1114).t.zdzyFo);
    obj1[2] = unusedCodes.map((code) => callback2(closure_9, { code: code.code, showCheckMark: false }, arg1));
    tmp10Result = tmp10(tmp3(5687).TableRowGroup, obj1);
  }
  items2[1] = tmp10Result;
  tmp10Result = usedCodes.length > 0;
  if (tmp10Result) {
    const obj2 = { title: null, hasIcons: false, children: null };
    const intl3 = tmp3(1114).intl;
    obj2[0] = intl3.string(tmp3(1114).t.FkFLDN);
    obj2[2] = usedCodes.map((code) => callback2(closure_9, { code: code.code, showCheckMark: true }, arg1));
    tmp10Result = tmp10(tmp3(5687).TableRowGroup, obj2);
  }
  items2[2] = tmp10Result;
  let tmp10Result1 = null !== headerLabel.onGenerate;
  if (tmp10Result1) {
    const obj3 = { hasIcons: false, children: null };
    const obj4 = { label: null, onPress: null };
    const obj5 = { variant: "text-md/semibold", style: null, children: null };
    obj5[1] = tmp6.generateCode;
    const intl4 = tmp3(1114).intl;
    obj5[2] = intl4.string(tmp3(1114).t.RIThUu);
    obj4[0] = tmp10(tmp3(4556).Text, obj5);
    obj4[1] = function onPress() {
      const verificationKey = store.getVerificationKey();
      const result = callback(14680).confirmViewBackupCodes(verificationKey, true);
    };
    obj3[1] = tmp10(tmp3(5605).TableRow, obj4);
    tmp10Result1 = tmp10(tmp3(5687).TableRowGroup, obj3);
  }
  const tmp11 = ScrollView;
  const tmp12 = closure_7;
  tmp6 = callback();
  items2[3] = tmp10Result1;
  obj[2] = items2;
  return closure_6(tmp11, { children: closure_7(stateFromStores(4973).Stack, obj) });
}
