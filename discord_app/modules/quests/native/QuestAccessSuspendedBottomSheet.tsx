// discord_app/modules/quests/native/QuestAccessSuspendedBottomSheet.tsx
import c from "../../../../_runtime/00576_c.js";
import util from "../../../intl/index.native.tsx";
import ActionSheetActionCreatorsDefault from "../../action_sheet/native/ActionSheetActionCreators.tsx";
import components_Button_Button from "../../../design/components/Button/native/Button.native.tsx";
import PromoSheet from "../../../design/components/Sheet/native/PromoSheet.native.tsx";
import openAccountStanding from "../../user_settings/privacy_and_safety/native/openAccountStanding.tsx";
import openQuestAccessSuspendedBottomSheet from "openQuestAccessSuspendedBottomSheet.tsx";
import noop from "../../../../_runtime/metro/00019__.js";

require = fn;
const jsx = fn(21).jsx;
const ReactCompilerGating = fn(558);
const size = fn(2);
const result = size.fileFinishedImporting("modules/quests/native/QuestAccessSuspendedBottomSheet.tsx");

export default ReactCompilerGating.isReactCompilerEnabled()
  ? function QuestAccessSuspendedBottomSheet() {
      const cResult = c.c(4);
      if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
        const fn = function t() {
          ActionSheetActionCreatorsDefault.hideActionSheet(openQuestAccessSuspendedBottomSheet.ACTION_SHEET_KEY);
          openAccountStanding.openAccountStanding();
        };
        cResult[0] = fn;
        let first = fn;
      } else {
        first = cResult[0];
      }
      if (cResult[1] === Symbol.for("react.memo_cache_sentinel")) {
        const intl = util.intl;
        const stringResult = intl.string(util.t.WfwodX);
        const intl2 = util.intl;
        const stringResult1 = intl2.string(util.t.I27WXW);
        cResult[1] = stringResult;
        cResult[2] = stringResult1;
        let tmp6 = stringResult1;
        let tmp5 = stringResult;
      } else {
        tmp5 = cResult[1];
        tmp6 = cResult[2];
      }
      if (cResult[3] === Symbol.for("react.memo_cache_sentinel")) {
        const obj2 = { title: tmp5, description: tmp6, actions: null };
        const obj3 = { grow: true, size: "lg", variant: "primary", text: null, onPress: null };
        const intl3 = util.intl;
        obj3.text = intl3.string(util.t.hvVgAZ);
        obj3.onPress = first;
        obj2.actions = jsx(components_Button_Button.Button, {
          grow: true,
          size: "lg",
          variant: "primary",
          text: null,
          onPress: null,
        });
        const tmp11 = jsx(PromoSheet.PromoSheet, { title: tmp5, description: tmp6, actions: null });
        cResult[3] = tmp11;
        let tmp9 = tmp11;
      } else {
        tmp9 = cResult[3];
      }
      return tmp9;
    }
  : function QuestAccessSuspendedBottomSheet() {
      const callback = noop.useCallback(() => {
        ActionSheetActionCreatorsDefault.hideActionSheet(openQuestAccessSuspendedBottomSheet.ACTION_SHEET_KEY);
        openAccountStanding.openAccountStanding();
      }, []);
      let obj = { title: null, description: null, actions: null };
      const intl = util.intl;
      obj.title = intl.string(util.t.WfwodX);
      const intl2 = util.intl;
      obj.description = intl2.string(util.t.I27WXW);
      const obj2 = { grow: true, size: "lg", variant: "primary", text: null, onPress: null };
      const intl3 = util.intl;
      obj2.text = intl3.string(util.t.hvVgAZ);
      obj2.onPress = callback;
      obj.actions = jsx(components_Button_Button.Button, {
        grow: true,
        size: "lg",
        variant: "primary",
        text: null,
        onPress: null,
      });
      return jsx(PromoSheet.PromoSheet, { title: null, description: null, actions: null });
    };
