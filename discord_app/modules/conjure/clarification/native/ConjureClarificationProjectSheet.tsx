// discord_app/modules/conjure/clarification/native/ConjureClarificationProjectSheet.tsx
import nativeDefault from "../../../../../discord_common/js/packages/tokens/native.tsx";
import useSafeAreaInsetsDefault from "../../../safe_area/useSafeAreaInsets.native.tsx";
import ActionSheetActionCreatorsDefault from "../../../action_sheet/native/ActionSheetActionCreators.tsx";
import BottomSheetModal from "../../../../../_runtime/05255_BottomSheetModal.js";
import BottomSheetTitleHeader from "../../../../design/components/Sheet/native/BottomSheetTitleHeader.native.tsx";
import ActionSheetRow from "../../../../design/components/Sheet/native/ActionSheetRow.native.tsx";
import ActionSheet from "../../../../design/components/Sheet/native/ActionSheet.native.tsx";
import noop from "../../../../../_runtime/metro/00019__.js";

require = fn;
const jsx = fn(21).jsx;
const createStyles = fn(4969);
let closure_4 = createStyles.createStyles((arg0) => {
  const obj = { scrollContent: { paddingBottom: nativeDefault.space.PX_16 + arg0 } };
  return obj;
});
const ReactCompilerGating = fn(558);
const size = fn(2);
const result = size.fileFinishedImporting("modules/conjure/clarification/native/ConjureClarificationProjectSheet.tsx");

export default ReactCompilerGating.isReactCompilerEnabled()
  ? function ConjureClarificationProjectSheet(sheetKey) {
      const cResult = sheetKey(576).c(20);
      sheetKey = sheetKey.sheetKey;
      ({ title, projects, onPick } = sheetKey);
      const bottom = onPick(1633)().bottom;
      const tmp4 = closure_4(bottom);
      if (cResult[0] !== title) {
        const obj2 = { title };
        const tmp7 = jsx(tmp(7233).BottomSheetTitleHeader, { title });
        cResult[0] = title;
        cResult[1] = tmp7;
        let tmp5 = tmp7;
      } else {
        tmp5 = cResult[1];
      }
      if (cResult[2] !== bottom) {
        const obj3 = { bottom };
        cResult[2] = bottom;
        cResult[3] = obj3;
        let tmp8 = obj3;
      } else {
        tmp8 = cResult[3];
      }
      if (cResult[4] === onPick) {
        if (cResult[5] === projects) {
          if (cResult[6] === sheetKey) {
            if (cResult[11] !== cResult[7]) {
              const obj4 = { hasIcons: false, children: tmp9 };
              const tmp15 = jsx(tmp(7279).ActionSheetRow.Group, { hasIcons: false, children: tmp9 });
              cResult[11] = tmp9;
              cResult[12] = tmp15;
              let tmp13 = tmp15;
            } else {
              tmp13 = cResult[12];
            }
            if (cResult[13] === tmp4.scrollContent) {
              if (cResult[14] === tmp8) {
                if (cResult[15] === tmp13) {
                  let tmp16 = cResult[16];
                }
                if (cResult[17] === tmp5) {
                  if (cResult[18] === tmp16) {
                    let tmp19 = cResult[19];
                  }
                  return tmp19;
                }
                const obj5 = { scrollable: true, header: tmp5, children: tmp16 };
                const tmp21 = jsx(tmp(7283).ActionSheet, { scrollable: true, header: tmp5, children: tmp16 });
                cResult[17] = tmp5;
                cResult[18] = tmp16;
                cResult[19] = tmp21;
                tmp19 = tmp21;
              }
            }
            const obj6 = { contentContainerStyle: tmp4.scrollContent, scrollIndicatorInsets: tmp8, children: tmp13 };
            const tmp18 = jsx(tmp(5255).BottomSheetScrollView, {
              contentContainerStyle: tmp4.scrollContent,
              scrollIndicatorInsets: tmp8,
              children: tmp13,
            });
            cResult[13] = tmp4.scrollContent;
            cResult[14] = tmp8;
            cResult[15] = tmp13;
            cResult[16] = tmp18;
            tmp16 = tmp18;
          }
        }
      }
      if (cResult[8] === onPick) {
        if (cResult[9] === sheetKey) {
          let tmp10 = cResult[10];
        }
        const mapped = projects.map(tmp10);
        cResult[4] = onPick;
        cResult[5] = projects;
        cResult[6] = sheetKey;
        cResult[7] = mapped;
      }
      const fn = function f(label) {
        closure_0 = label;
        const obj = {
          label: label.name,
          subLabel: null,
          onPress() {
            ActionSheetActionCreatorsDefault.hideActionSheet(sheetKey);
            onPick(closure_0);
          },
        };
        const serverName = label.serverName;
        obj.subLabel = serverName;
        return jsx(
          sheetKey(dependencyMap[8]).ActionSheetRow,
          {
            label: label.name,
            subLabel: null,
            onPress() {
              ActionSheetActionCreatorsDefault.hideActionSheet(sheetKey);
              onPick(closure_0);
            },
          },
          label.projectId,
        );
      };
      cResult[8] = onPick;
      cResult[9] = sheetKey;
      cResult[10] = fn;
      tmp10 = fn;
      let obj = sheetKey(576);
    }
  : function ConjureClarificationProjectSheet(title) {
      ({ sheetKey: require, projects, onPick: importDefault } = title);
      const bottom = useSafeAreaInsetsDefault().bottom;
      let obj = {
        scrollable: true,
        header: jsx(BottomSheetTitleHeader.BottomSheetTitleHeader, { title: title.title }),
        children: null,
      };
      const obj2 = {
        contentContainerStyle: closure_4(bottom).scrollContent,
        scrollIndicatorInsets: { bottom },
        children: null,
      };
      const tmp = closure_4(bottom);
      obj2.children = jsx(ActionSheetRow.ActionSheetRow.Group, {
        hasIcons: false,
        children: projects.map((label) => {
          closure_0 = label;
          const obj = {
            label: label.name,
            subLabel: null,
            onPress() {
              ActionSheetActionCreatorsDefault.hideActionSheet(require);
              closure_2_1(closure_0);
            },
          };
          const serverName = label.serverName;
          obj.subLabel = serverName;
          return jsx(
            ActionSheetRow.ActionSheetRow,
            {
              label: label.name,
              subLabel: null,
              onPress() {
                ActionSheetActionCreatorsDefault.hideActionSheet(require);
                closure_2_1(closure_0);
              },
            },
            label.projectId,
          );
        }),
      });
      obj.children = jsx(BottomSheetModal.BottomSheetScrollView, {
        contentContainerStyle: closure_4(bottom).scrollContent,
        scrollIndicatorInsets: { bottom },
        children: null,
      });
      return jsx(ActionSheet.ActionSheet, {
        scrollable: true,
        header: jsx(BottomSheetTitleHeader.BottomSheetTitleHeader, { title: title.title }),
        children: null,
      });
    };
