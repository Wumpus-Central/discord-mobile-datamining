// discord_app/modules/user_profile/native/UserProfileNote.tsx
import Fragment from "../../../../_runtime/react/00021_Fragment.js";
import ActionSheetActionCreatorsDefault from "../../action_sheet/native/ActionSheetActionCreators.tsx";
import openEditNoteModalDefault from "../utils/native/openEditNoteModal.tsx";
import react from "../../../../_runtime/00019_react.js";
import ReactCompilerGating from "../../react_compiler/ReactCompilerGating.tsx";
import size from "../../../../_runtime/metro/00002__.js";

let userId;

const jsx = Fragment.jsx;
const tmp3 = ReactCompilerGating.isReactCompilerEnabled()
  ? (userId) => {
      let trackUserProfileAction;
      let obj = userId(trackUserProfileAction[3]);
      const cResult = obj.c(15);
      userId = userId.userId;
      const onBack = userId.onBack;
      let obj2 = userId(trackUserProfileAction[4]);
      trackUserProfileAction = obj2.useUserProfileAnalyticsContext().trackUserProfileAction;
      const note = onBack(trackUserProfileAction[5])(userId).note;
      if (cResult[0] === onBack) {
        if (cResult[1] === trackUserProfileAction) {
          let tmp5;
          let tmp7;
          let tmp11;
          let tmp13;
          if (cResult[2] === userId) {
            tmp5 = cResult[3];
          }
          const _Symbol = Symbol;
          if (cResult[4] === Symbol.for("react.memo_cache_sentinel")) {
            const Text = tmp(tmp2[8]).Text;
            const intl = tmp(tmp2[9]).intl;
            const tmp9 = (
              <Text variant="text-sm/semibold" color="text-default">
                {intl.string(userId(trackUserProfileAction[9]).t["mQKv+v"])}
              </Text>
            );
            cResult[4] = tmp9;
            tmp7 = tmp9;
          } else {
            tmp7 = cResult[4];
          }
          let tmp10;
          if (null != note && "" !== note) {
            tmp10 = note;
          }
          if (cResult[5] !== (null != note && "" !== note)) {
            let stringResult;
            const intl2 = tmp(tmp2[9]).intl;
            const string = intl2.string;
            const t = tmp(tmp2[9]).t;
            if (null != note && "" !== note) {
              stringResult = string(t["gs+qcM"]);
            } else {
              stringResult = string(t["1ZZtts"]);
            }
            cResult[5] = null != note && "" !== note;
            cResult[6] = stringResult;
            tmp11 = stringResult;
          } else {
            tmp11 = cResult[6];
          }
          if (cResult[7] !== (null != note && "" !== note)) {
            let tmp14;
            if (!(null != note && "" !== note)) {
              const Icon = tmp(tmp2[10]).TableRow.Icon;
              tmp14 = <Icon IconComponent={userId(tmp2[11]).PaperPlusIcon} />;
            }
            cResult[7] = null != note && "" !== note;
            cResult[8] = tmp14;
            tmp13 = tmp14;
          } else {
            tmp13 = cResult[8];
          }
          if (cResult[9] === tmp5) {
            if (cResult[10] === (null != note && "" !== note)) {
              if (cResult[11] === tmp10) {
                if (cResult[12] === tmp11) {
                  let tmp16;
                  if (cResult[13] === tmp13) {
                    tmp16 = cResult[14];
                  }
                  return tmp16;
                }
              }
            }
          }
          const tmp18 = jsx(userId(trackUserProfileAction[10]).TableRow, {
            label: tmp7,
            subLabel: tmp10,
            accessibilityHint: tmp11,
            onPress: tmp5,
            trailing: tmp13,
            arrow: null != note && "" !== note,
            start: true,
            end: true,
          });
          cResult[9] = tmp5;
          cResult[10] = null != note && "" !== note;
          cResult[11] = tmp10;
          cResult[12] = tmp11;
          cResult[13] = tmp13;
          cResult[14] = tmp18;
          tmp16 = tmp18;
        }
      }
      const fn = function o() {
        const obj = ActionSheetActionCreatorsDefault;
        obj.hideActionSheet();
        const obj2 = {
          userId,
          onBack,
          onSave() {
            return trackUserProfileAction({ action: "SET_NOTE" });
          },
        };
        openEditNoteModalDefault(obj2);
      };
      cResult[0] = onBack;
      cResult[1] = trackUserProfileAction;
      cResult[2] = userId;
      cResult[3] = fn;
      tmp5 = fn;
    }
  : (userId) => {
      let intl;
      let stringResult;
      userId = userId.userId;
      const onBack = userId.onBack;
      let trackUserProfileAction;
      let obj = userId(trackUserProfileAction[4]);
      trackUserProfileAction = obj.useUserProfileAnalyticsContext().trackUserProfileAction;
      const note = onBack(trackUserProfileAction[5])(userId).note;
      const TableRow = tmp(tmp2[10]).TableRow;
      ({
        variant: "text-sm/semibold",
        color: "text-default",
        children: intl.string(userId(trackUserProfileAction[9]).t["mQKv+v"]),
      });
      const Text = tmp(tmp2[8]).Text;
      intl = tmp(tmp2[9]).intl;
      let tmp5;
      if (null != note && "" !== note) {
        tmp5 = note;
      }
      const intl2 = tmp(tmp2[9]).intl;
      const string = intl2.string;
      const t = tmp(tmp2[9]).t;
      if (null != note && "" !== note) {
        stringResult = string(t["gs+qcM"]);
      } else {
        stringResult = string(t["1ZZtts"]);
      }
      let tmp4Result;
      if (!(null != note && "" !== note)) {
        const Icon = tmp(tmp2[10]).TableRow.Icon;
        tmp4Result = <Icon IconComponent={userId(tmp2[11]).PaperPlusIcon} />;
      }
      return (
        <TableRow
          label={null}
          subLabel={tmp5}
          accessibilityHint={stringResult}
          onPress={function onPress() {
            const obj = ActionSheetActionCreatorsDefault;
            obj.hideActionSheet();
            const obj2 = {
              userId,
              onBack,
              onSave() {
                return trackUserProfileAction({ action: "SET_NOTE" });
              },
            };
            openEditNoteModalDefault(obj2);
          }}
          trailing={tmp4Result}
          arrow={null != note && "" !== note}
          start
          end
        />
      );
    };
const result = size.fileFinishedImporting("modules/user_profile/native/UserProfileNote.tsx");

export default tmp3;
