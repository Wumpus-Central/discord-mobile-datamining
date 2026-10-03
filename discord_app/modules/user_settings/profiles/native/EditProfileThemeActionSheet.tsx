// discord_app/modules/user_settings/profiles/native/EditProfileThemeActionSheet.tsx
import nativeDefault from "../../../../../discord_common/js/packages/tokens/native.tsx";
import ActionSheetActionCreatorsDefault from "../../../action_sheet/native/ActionSheetActionCreators.tsx";
import noop from "../../../../../_runtime/metro/00019__.js";

const require = fn;
const jsxProd = fn(21);
({ jsx: c3, jsxs: closure_4 } = jsxProd);
const createStyles = fn(4890);
let obj2 = { nitroWheel: null, titleWrapper: null, titleContainer: null };
let size = { tintColor: nativeDefault.colors.MOBILE_TEXT_HEADING_PRIMARY, marginLeft: 4, width: 20, height: 20 };
obj2.nitroWheel = size;
obj2.titleWrapper = { flex: 0 };
obj2.titleContainer = { justifyContent: "flex-start" };
let closure_5 = createStyles.createStyles(obj2);
const ReactCompilerGating = fn(558);
size = fn(2);
const result = size.fileFinishedImporting("modules/user_settings/profiles/native/EditProfileThemeActionSheet.tsx");

export default ReactCompilerGating.isReactCompilerEnabled()
  ? (onResetTheme) => {
      const cResult = onResetTheme(576).c(16);
      onResetTheme = onResetTheme.onResetTheme;
      const tmp4 = closure_5();
      if (cResult[0] !== onResetTheme) {
        const fn = function s() {
          onResetTheme();
          ActionSheetActionCreatorsDefault.hideActionSheet();
        };
        cResult[0] = onResetTheme;
        cResult[1] = fn;
        let tmp5 = fn;
      } else {
        tmp5 = cResult[1];
      }
      if (cResult[2] === Symbol.for("react.memo_cache_sentinel")) {
        const intl = tmp(1126).intl;
        const stringResult = intl.string(tmp(1126).t.DMeO2X);
        cResult[2] = stringResult;
        let tmp6 = stringResult;
      } else {
        tmp6 = cResult[2];
      }
      if (cResult[3] !== tmp4.nitroWheel) {
        const obj2 = { style: tmp4.nitroWheel };
        const tmp10 = closure_3(tmp(1188).NitroWheel, obj2);
        cResult[3] = tmp4.nitroWheel;
        cResult[4] = tmp10;
        let tmp8 = tmp10;
      } else {
        tmp8 = cResult[4];
      }
      if (cResult[5] === tmp4.titleContainer) {
        if (cResult[6] === tmp4.titleWrapper) {
          if (cResult[7] === tmp8) {
            let tmp11 = cResult[8];
          }
          const _Symbol = Symbol;
          if (cResult[9] === Symbol.for("react.memo_cache_sentinel")) {
            const intl2 = tmp(1126).intl;
            const stringResult1 = intl2.string(tmp(1126).t["L+GmoR"]);
            const intl3 = tmp(1126).intl;
            const stringResult2 = intl3.string(tmp(1126).t.MA9iNr);
            cResult[9] = stringResult1;
            cResult[10] = stringResult2;
            let tmp14 = stringResult2;
            let tmp13 = stringResult1;
          } else {
            tmp13 = cResult[9];
            tmp14 = cResult[10];
          }
          if (cResult[11] !== tmp5) {
            const obj3 = { hasIcons: false, children: null };
            const obj4 = { label: tmp13, subLabel: tmp14, onPress: tmp5 };
            obj3.children = closure_3(tmp(5993).TableRow, obj4);
            const tmp19 = closure_3(tmp(6074).TableRowGroup, obj3);
            cResult[11] = tmp5;
            cResult[12] = tmp19;
            let tmp17 = tmp19;
          } else {
            tmp17 = cResult[12];
          }
          if (cResult[13] === tmp11) {
            if (cResult[14] === tmp17) {
              let tmp20 = cResult[15];
            }
            return tmp20;
          }
          const obj5 = { children: null };
          const items = [tmp11, tmp17];
          obj5.children = items;
          const tmp22 = closure_4(tmp(6701).ActionSheet, obj5);
          cResult[13] = tmp11;
          cResult[14] = tmp17;
          cResult[15] = tmp22;
          tmp20 = tmp22;
        }
      }
      const tmp12 = closure_3(onResetTheme(6644).BottomSheetTitleHeader, {
        title: tmp6,
        trailing: tmp8,
        titleWrapperStyle: tmp4.titleWrapper,
        titleContainerStyle: tmp4.titleContainer,
      });
      cResult[5] = tmp4.titleContainer;
      cResult[6] = tmp4.titleWrapper;
      cResult[7] = tmp8;
      cResult[8] = tmp12;
      tmp11 = tmp12;
      const obj = onResetTheme(576);
      const obj6 = {
        title: tmp6,
        trailing: tmp8,
        titleWrapperStyle: tmp4.titleWrapper,
        titleContainerStyle: tmp4.titleContainer,
      };
    }
  : (onResetTheme) => {
      onResetTheme = onResetTheme.onResetTheme;
      const tmp = closure_5();
      const obj = { children: null };
      const obj3 = { title: null, trailing: null, titleWrapperStyle: null, titleContainerStyle: null };
      const intl = onResetTheme(1126).intl;
      obj3.title = intl.string(onResetTheme(1126).t.DMeO2X);
      obj3.trailing = closure_3(onResetTheme(1188).NitroWheel, { style: tmp.nitroWheel });
      ({ titleWrapper: obj2.titleWrapperStyle, titleContainer: obj2.titleContainerStyle } = tmp);
      const items = [closure_3(onResetTheme(6644).BottomSheetTitleHeader, obj3)];
      const obj5 = { hasIcons: false, children: null };
      const obj9 = { label: null, subLabel: null, onPress: null };
      const intl2 = onResetTheme(1126).intl;
      obj9.label = intl2.string(onResetTheme(1126).t["L+GmoR"]);
      const intl3 = onResetTheme(1126).intl;
      obj9.subLabel = intl3.string(onResetTheme(1126).t.MA9iNr);
      obj9.onPress = function onPress() {
        onResetTheme();
        ActionSheetActionCreatorsDefault.hideActionSheet();
      };
      obj5.children = closure_3(onResetTheme(5993).TableRow, obj9);
      items[1] = closure_3(onResetTheme(6074).TableRowGroup, obj5);
      obj.children = items;
      return closure_4(onResetTheme(6701).ActionSheet, obj);
    };
