// discord_app/modules/user_settings/account/native/UserSettingsAccountBackupCodes.tsx
import nativeDefault from "../../../../../discord_common/js/packages/tokens/native.tsx";
import ToastUtils from "../../../toast/native/ToastUtils.tsx";
import ClipboardUtils from "../../../../utils/ClipboardUtils.native.tsx";
import MFAActionCreatorsDefault from "../../../../actions/MFAActionCreators.tsx";
import noop from "../../../../../_runtime/metro/00019__.js";
import MFAStore from "../../../../stores/MFAStore.tsx";

require = fn;
const ScrollView = fn(17).ScrollView;
const jsxProd = fn(21);
({ jsx: metroRequire, jsxs: closure_7 } = jsxProd);
const createStyles = fn(4890);
let obj2 = { generateCode: { color: nativeDefault.colors.TEXT_BRAND } };
let closure_8 = createStyles.createStyles(obj2);
let ReactCompilerGating = fn(558);
let closure_9 = ReactCompilerGating.isReactCompilerEnabled()
  ? (code) => {
      const cResult = code(576).c(8);
      code = code.code;
      const showCheckMark = code.showCheckMark;
      if (cResult[0] !== code) {
        const fn = function t() {
          ClipboardUtils.copy(code.replace(/[^a-zA-Z0-9]/g, ""));
          const result = ToastUtils.presentCopiedToClipboard();
        };
        cResult[0] = code;
        cResult[1] = fn;
        let tmp4 = fn;
      } else {
        tmp4 = cResult[1];
      }
      let tmp5;
      if (!showCheckMark) {
        tmp5 = tmp4;
      }
      if (cResult[2] !== showCheckMark) {
        let tmp7 = null;
        if (showCheckMark) {
          const obj2 = { color: nativeDefault.colors.TEXT_BRAND };
          tmp7 = closure_6(tmp(6628).CheckmarkSmallIcon, obj2);
        }
        cResult[2] = showCheckMark;
        cResult[3] = tmp7;
        let tmp6 = tmp7;
      } else {
        tmp6 = cResult[3];
      }
      if (cResult[4] === code) {
        if (cResult[5] === tmp5) {
          if (cResult[6] === tmp6) {
            let tmp10 = cResult[7];
          }
          return tmp10;
        }
      }
      const tmp11 = closure_6(code(5993).TableRow, { onPress: tmp5, label: code, trailing: tmp6 });
      cResult[4] = code;
      cResult[5] = tmp5;
      cResult[6] = tmp6;
      cResult[7] = tmp11;
      tmp10 = tmp11;
      let obj = code(576);
    }
  : (code) => {
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
        tmp2Result = closure_6(code(6628).CheckmarkSmallIcon, obj2);
      }
      obj.trailing = tmp2Result;
      return closure_6(code(5993).TableRow, obj);
    };
ReactCompilerGating = fn(558);
let obj3 = { color: nativeDefault.colors.TEXT_BRAND };
const size = fn(2);
let result = size.fileFinishedImporting("modules/user_settings/account/native/UserSettingsAccountBackupCodes.tsx");

export default ReactCompilerGating.isReactCompilerEnabled()
  ? (arg0) => {
      const cResult = items1(576).c(26);
      ({ onGenerate, headerLabel } = arg0);
      if (cResult[0] !== headerLabel) {
        let formatResult = headerLabel;
        if (undefined === headerLabel) {
          const intl = tmp(1126).intl;
          formatResult = intl.format(tmp(1126).t.OhmvYt, {});
        }
        cResult[0] = headerLabel;
        cResult[1] = formatResult;
        let arr = formatResult;
      } else {
        arr = cResult[1];
      }
      const obj = items1(576);
      const token = items1(4580).useToken(items2(587).modules.mobile.TABLE_ROW_PADDING);
      const tmp7 = closure_8();
      if (cResult[2] === Symbol.for("react.memo_cache_sentinel")) {
        const items = [MFAStore];
        const fn = function v() {
          return MFAStore.getBackupCodes();
        };
        cResult[2] = items;
        cResult[3] = fn;
        let tmp9 = fn;
        let tmp8 = items;
      } else {
        tmp8 = cResult[2];
        tmp9 = cResult[3];
      }
      const tmpResult = items1(4580);
      const stateFromStores = items1(504).useStateFromStores(tmp8, tmp9);
      if (cResult[4] !== stateFromStores) {
        items1 = [];
        items2 = [];
        const item = stateFromStores.forEach((consumed) => {
          if (consumed.consumed) {
            let arr = items1.push(consumed);
          } else {
            arr = items2.push(consumed);
          }
          return arr;
        });
        const obj2 = { usedCodes: items1, unusedCodes: items2 };
        cResult[4] = stateFromStores;
        cResult[5] = obj2;
        let tmp11 = obj2;
      } else {
        tmp11 = cResult[5];
      }
      ({ usedCodes, unusedCodes } = tmp11);
      if (cResult[6] === Symbol.for("react.memo_cache_sentinel")) {
        class B {
          constructor() {
            return () => {
              items2(dependencyMap[15]).clearBackupCodes();
            };
          }
        }
        const items3 = [];
        cResult[6] = B;
        cResult[7] = items3;
        let tmp14 = items3;
      } else {
        class B {
          constructor() {
            return () => {
              items2(dependencyMap[15]).clearBackupCodes();
            };
          }
        }
        tmp14 = cResult[7];
      }
      const effect = noop.useEffect(B, tmp14);
      if (cResult[8] !== token) {
        class B {
          constructor() {
            return () => {
              items2(dependencyMap[15]).clearBackupCodes();
            };
          }
        }
        tmp17[0] = token;
        tmp17[1] = tmp5(587).space.PX_16;
        cResult[8] = token;
        cResult[9] = tmp17;
      } else {
        class B {
          constructor() {
            return () => {
              items2(dependencyMap[15]).clearBackupCodes();
            };
          }
        }
      }
      if (cResult[10] !== arr) {
        class B {
          constructor() {
            return () => {
              items2(dependencyMap[15]).clearBackupCodes();
            };
          }
        }
        if (cResult[12] === Symbol.for("react.memo_cache_sentinel")) {
          class F {
            constructor(arg0, arg1) {
              obj = { variant: "text-sm/medium", children: arg0 };
              return closure_1_6(closure_0(closure_1_2[16]).Text, obj, arg1);
            }
          }
          cResult[12] = F;
        } else {
          class F {
            constructor(arg0, arg1) {
              obj = { variant: "text-sm/medium", children: arg0 };
              return closure_1_6(closure_0(closure_1_2[16]).Text, obj, arg1);
            }
          }
        }
        const mapped = arr.map(F);
        cResult[10] = arr;
        cResult[11] = mapped;
      } else {
        class F {
          constructor(arg0, arg1) {
            obj = { variant: "text-sm/medium", children: arg0 };
            return closure_1_6(closure_0(closure_1_2[16]).Text, obj, arg1);
          }
        }
        if (cResult[13] !== unusedCodes) {
          class F {
            constructor(arg0, arg1) {
              obj = { variant: "text-sm/medium", children: arg0 };
              return closure_1_6(closure_0(closure_1_2[16]).Text, obj, arg1);
            }
          }
          let tmp23 = unusedCodes.length > 0;
          if (tmp23) {
            class F {
              constructor(arg0, arg1) {
                obj = { variant: "text-sm/medium", children: arg0 };
                return closure_1_6(closure_0(closure_1_2[16]).Text, obj, arg1);
              }
            }
            const obj3 = { title: null, hasIcons: false, children: null };
            const intl2 = tmp(1126).intl;
            obj3.title = intl2.string(tmp(1126).t.zdzyFo);
            obj3.children = unusedCodes.map((code, index) =>
              closure_1_6(closure_1_9, { code: code.code, showCheckMark: false }, index),
            );
            tmp23 = closure_6(tmp(6074).TableRowGroup, obj3);
          }
          cResult[13] = unusedCodes;
          cResult[14] = tmp23;
        } else {
          class F {
            constructor(arg0, arg1) {
              obj = { variant: "text-sm/medium", children: arg0 };
              return closure_1_6(closure_0(closure_1_2[16]).Text, obj, arg1);
            }
          }
        }
        if (cResult[15] !== usedCodes) {
          class F {
            constructor(arg0, arg1) {
              obj = { variant: "text-sm/medium", children: arg0 };
              return closure_1_6(closure_0(closure_1_2[16]).Text, obj, arg1);
            }
          }
          let tmp25 = usedCodes.length > 0;
          if (tmp25) {
            class F {
              constructor(arg0, arg1) {
                obj = { variant: "text-sm/medium", children: arg0 };
                return closure_1_6(closure_0(closure_1_2[16]).Text, obj, arg1);
              }
            }
            const obj4 = { title: null, hasIcons: false, children: null };
            const intl3 = tmp(1126).intl;
            obj4.title = intl3.string(tmp(1126).t.FkFLDN);
            obj4.children = usedCodes.map((code, index) =>
              closure_1_6(closure_1_9, { code: code.code, showCheckMark: true }, index),
            );
            tmp25 = closure_6(tmp(6074).TableRowGroup, obj4);
          }
          cResult[15] = usedCodes;
          cResult[16] = tmp25;
        } else {
          class F {
            constructor(arg0, arg1) {
              obj = { variant: "text-sm/medium", children: arg0 };
              return closure_1_6(closure_0(closure_1_2[16]).Text, obj, arg1);
            }
          }
        }
        if (cResult[17] === onGenerate) {
          class F {
            constructor(arg0, arg1) {
              obj = { variant: "text-sm/medium", children: arg0 };
              return closure_1_6(closure_0(closure_1_2[16]).Text, obj, arg1);
            }
          }
          if (cResult[20] === tmp22) {
            class F {
              constructor(arg0, arg1) {
                obj = { variant: "text-sm/medium", children: arg0 };
                return closure_1_6(closure_0(closure_1_2[16]).Text, obj, arg1);
              }
            }
          }
          const obj5 = { children: null };
          const obj6 = { spacing: tmp5(587).space.PX_24, style: tmp17, children: null };
          const items4 = [tmp18, tmp22, tmp24, tmp26];
          obj6.children = items4;
          obj5.children = closure_7(tmp(5593).Stack, obj6);
          const tmp33 = closure_6(ScrollView, obj5);
          cResult[20] = tmp22;
          cResult[21] = tmp24;
          cResult[22] = tmp26;
          cResult[23] = tmp17;
          cResult[24] = tmp18;
          cResult[25] = tmp33;
        }
        let tmp28 = null !== onGenerate;
        if (tmp28) {
          class F {
            constructor(arg0, arg1) {
              obj = { variant: "text-sm/medium", children: arg0 };
              return closure_1_6(closure_0(closure_1_2[16]).Text, obj, arg1);
            }
          }
          const obj7 = { hasIcons: false, children: null };
          const obj8 = { label: null, onPress: null };
          const obj9 = { variant: "text-md/semibold", style: tmp7.generateCode, children: null };
          const intl4 = tmp(1126).intl;
          obj9.children = intl4.string(tmp(1126).t.RIThUu);
          obj8.label = closure_6(tmp(4886).Text, obj9);
          obj8.onPress = function onPress() {
            const verificationKey = MFAStore.getVerificationKey();
            const result = items2(14571).confirmViewBackupCodes(verificationKey, true);
          };
          obj7.children = closure_6(tmp(5993).TableRow, obj8);
          tmp28 = closure_6(tmp(6074).TableRowGroup, obj7);
        }
        cResult[17] = onGenerate;
        cResult[18] = tmp7;
        cResult[19] = tmp28;
      }
      const tmpResult2 = items1(504);
    }
  : (headerLabel) => {
      headerLabel = headerLabel.headerLabel;
      if (headerLabel === undefined) {
        const intl = stateFromStores(1126).intl;
        headerLabel = intl.format(stateFromStores(1126).t.OhmvYt, {});
      }
      stateFromStores = undefined;
      const token = stateFromStores(4580).useToken(nativeDefault.modules.mobile.TABLE_ROW_PADDING);
      const obj = stateFromStores(4580);
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
      const effect = noop.useEffect(
        () => () => {
          closure_1_1(dependencyMap[15]).clearBackupCodes();
        },
        [],
      );
      const obj3 = { spacing: nativeDefault.space.PX_24, style: null, children: null };
      const obj2 = stateFromStores(504);
      obj3.style = { paddingHorizontal: token, paddingTop: nativeDefault.space.PX_16 };
      const items2 = [
        headerLabel.map((children, index) =>
          closure_1_6(stateFromStores(4886).Text, { variant: "text-sm/medium", children }, index),
        ),
        ,
        ,
      ];
      let tmp10Result = unusedCodes.length > 0;
      if (tmp10Result) {
        const obj5 = { title: null, hasIcons: false, children: null };
        const intl2 = tmp3(1126).intl;
        obj5.title = intl2.string(tmp3(1126).t.zdzyFo);
        obj5.children = unusedCodes.map((code, index) =>
          closure_1_6(closure_1_9, { code: code.code, showCheckMark: false }, index),
        );
        tmp10Result = closure_6(tmp3(6074).TableRowGroup, obj5);
      }
      items2[1] = tmp10Result;
      let tmp10Result3 = usedCodes.length > 0;
      if (tmp10Result3) {
        const obj6 = { title: null, hasIcons: false, children: null };
        const intl3 = tmp3(1126).intl;
        obj6.title = intl3.string(tmp3(1126).t.FkFLDN);
        obj6.children = usedCodes.map((code, index) =>
          closure_1_6(closure_1_9, { code: code.code, showCheckMark: true }, index),
        );
        tmp10Result3 = closure_6(tmp3(6074).TableRowGroup, obj6);
      }
      items2[2] = tmp10Result3;
      let tmp10Result4 = null !== headerLabel.onGenerate;
      if (tmp10Result4) {
        const obj7 = { hasIcons: false, children: null };
        const obj8 = { label: null, onPress: null };
        const obj9 = { variant: "text-md/semibold", style: tmp6.generateCode, children: null };
        const intl4 = tmp3(1126).intl;
        obj9.children = intl4.string(tmp3(1126).t.RIThUu);
        obj8.label = closure_6(tmp3(4886).Text, obj9);
        obj8.onPress = function onPress() {
          const verificationKey = MFAStore.getVerificationKey();
          const result = MFAActionCreatorsDefault.confirmViewBackupCodes(verificationKey, true);
        };
        obj7.children = closure_6(tmp3(5993).TableRow, obj8);
        tmp10Result4 = closure_6(tmp3(6074).TableRowGroup, obj7);
      }
      const obj4 = { paddingHorizontal: token, paddingTop: nativeDefault.space.PX_16 };
      items2[3] = tmp10Result4;
      obj3.children = items2;
      return closure_6(ScrollView, { children: closure_7(stateFromStores(5593).Stack, obj3) });
    };
