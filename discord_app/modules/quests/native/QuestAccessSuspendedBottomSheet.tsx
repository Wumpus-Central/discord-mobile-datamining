// discord_app/modules/quests/native/QuestAccessSuspendedBottomSheet.tsx
import Fragment from "../../../../_runtime/react/00021_Fragment.js";
import react2 from "../../../../_runtime/00576_react.js";
import intl4 from "../../../intl/index.native.tsx";
import ActionSheetActionCreatorsDefault from "../../action_sheet/native/ActionSheetActionCreators.tsx";
import components_Button_Button from "../../../design/components/Button/native/Button.native.tsx";
import PromoSheet2 from "../../../design/components/Sheet/native/PromoSheet.native.tsx";
import openAccountStanding from "../../user_settings/privacy_and_safety/native/openAccountStanding.tsx";
import openQuestAccessSuspendedBottomSheet from "openQuestAccessSuspendedBottomSheet.tsx";
import react from "../../../../_runtime/00019_react.js";
import ReactCompilerGating from "../../react_compiler/ReactCompilerGating.tsx";
import size from "../../../../_runtime/metro/00002__.js";

const jsx = Fragment.jsx;
const tmp2 = ReactCompilerGating.isReactCompilerEnabled()
  ? () => {
      let first;
      let intl3;
      let tmp5;
      let tmp6;
      let tmp9;
      let obj = react2;
      const cResult = obj.c(4);
      if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
        const fn = function t() {
          const obj = ActionSheetActionCreatorsDefault;
          obj.hideActionSheet(openQuestAccessSuspendedBottomSheet.ACTION_SHEET_KEY);
          const obj2 = openAccountStanding;
          obj2.openAccountStanding();
        };
        cResult[0] = fn;
        first = fn;
      } else {
        first = cResult[0];
      }
      if (cResult[1] === Symbol.for("react.memo_cache_sentinel")) {
        const intl = intl4.intl;
        const stringResult = intl.string(intl4.t.WfwodX);
        const intl2 = intl4.intl;
        const stringResult1 = intl2.string(intl4.t.I27WXW);
        cResult[1] = stringResult;
        cResult[2] = stringResult1;
        tmp6 = stringResult1;
        tmp5 = stringResult;
      } else {
        tmp5 = cResult[1];
        tmp6 = cResult[2];
      }
      if (cResult[3] === Symbol.for("react.memo_cache_sentinel")) {
        const PromoSheet = PromoSheet2.PromoSheet;
        ({ grow: true, size: "lg", variant: "primary", text: intl3.string(intl4.t.hvVgAZ), onPress: first });
        const Button = components_Button_Button.Button;
        intl3 = intl4.intl;
        const tmp11 = <PromoSheet title={tmp5} description={tmp6} actions={null} />;
        cResult[3] = tmp11;
        tmp9 = tmp11;
      } else {
        tmp9 = cResult[3];
      }
      return tmp9;
    }
  : () => {
      let intl3;
      const callback = react.useCallback(() => {
        const obj = ActionSheetActionCreatorsDefault;
        obj.hideActionSheet(openQuestAccessSuspendedBottomSheet.ACTION_SHEET_KEY);
        const obj2 = openAccountStanding;
        obj2.openAccountStanding();
      }, []);
      const PromoSheet = PromoSheet2.PromoSheet;
      const intl = intl4.intl;
      const intl2 = intl4.intl;
      let obj2 = { grow: true, size: "lg", variant: "primary", text: intl3.string(intl4.t.hvVgAZ), onPress: callback };
      const Button = components_Button_Button.Button;
      intl3 = intl4.intl;
      return (
        <PromoSheet title={intl.string(intl4.t.WfwodX)} description={intl2.string(intl4.t.I27WXW)} actions={null} />
      );
    };
const result = size.fileFinishedImporting("modules/quests/native/QuestAccessSuspendedBottomSheet.tsx");

export default tmp2;
