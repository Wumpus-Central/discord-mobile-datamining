// discord_app/modules/conjure/publish/native/ConjurePublishBlockedSheet.tsx
import react_native from "../../../../../_runtime/00017_react-native.js";
import react2 from "../../../../../_runtime/00576_react.js";
import nativeDefault from "../../../../../discord_common/js/packages/tokens/native.tsx";
import intl4 from "../../../../intl/index.native.tsx";
import _modDef3723 from "../../intl/ConjureUntranslated.messages.js";
import ActionSheetActionCreators from "../../../action_sheet/native/ActionSheetActionCreators.tsx";
import Text_Text from "../../../../design/components/Text/native/Text.tsx";
import components_Button_Button from "../../../../design/components/Button/native/Button.native.tsx";
import BottomSheetTitleHeader2 from "../../../../design/components/Sheet/native/BottomSheetTitleHeader.native.tsx";
import ActionSheet2 from "../../../../design/components/Sheet/native/ActionSheet.native.tsx";
import conjurePublishBlockedReason from "../conjurePublishBlockedReason.tsx";
import react from "../../../../../_runtime/00019_react.js";
import Fragment from "../../../../../_runtime/react/00021_Fragment.js";
import createStyles from "../../../../design/components/Styles/native/createStyles.tsx";
import ReactCompilerGating from "../../../react_compiler/ReactCompilerGating.tsx";
import size from "../../../../../_runtime/metro/00002__.js";

const ActionSheetActionCreatorsDefault = ActionSheetActionCreators;

let closure_4;
let hasOwnProperty;
let obj2;
const View = react_native.View;
({ jsx: closure_4, jsxs: hasOwnProperty } = Fragment);
const ConjurePublishBlockedSheet = "ConjurePublishBlockedSheet";
let obj = { content: obj2 };
obj2 = { gap: nativeDefault.space.PX_16 };
let closure_7 = createStyles.createStyles(obj);
let closure_8 = ReactCompilerGating.isReactCompilerEnabled()
  ? (reason) => {
      let items;
      let tmp10;
      let tmp13;
      let tmp17;
      let tmp20;
      let tmp24;
      let tmp25;
      let tmp6;
      let obj = react2;
      const cResult = obj.c(20);
      reason = reason.reason;
      const tmp4 = closure_7();
      const tmp5 = reason === conjurePublishBlockedReason.ConjurePublishBlockedReason.PERMISSIONS;
      if (cResult[0] !== tmp5) {
        const intl = intl4.intl;
        const string = intl.string;
        const tmp8 = _modDef3723;
        const stringResult = string(tmp5 ? tmp8.wQ4UyJ : tmp8.ZNGLFE);
        cResult[0] = tmp5;
        cResult[1] = stringResult;
        tmp6 = stringResult;
      } else {
        tmp6 = cResult[1];
      }
      if (cResult[2] !== tmp6) {
        const obj2 = { title: tmp6 };
        const tmp12 = React3(BottomSheetTitleHeader2.BottomSheetTitleHeader, obj2);
        cResult[2] = tmp6;
        cResult[3] = tmp12;
        tmp10 = tmp12;
      } else {
        tmp10 = cResult[3];
      }
      const content = tmp4.content;
      if (cResult[4] !== tmp5) {
        const intl2 = intl4.intl;
        const string2 = intl2.string;
        const tmp15 = _modDef3723;
        const string2Result = string2(tmp5 ? tmp15.Agqmbt : tmp15.ffxKGK);
        cResult[4] = tmp5;
        cResult[5] = string2Result;
        tmp13 = string2Result;
      } else {
        tmp13 = cResult[5];
      }
      if (cResult[6] !== tmp13) {
        const obj3 = { variant: "text-md/normal", color: "text-muted", children: tmp13 };
        const tmp19 = React3(Text_Text.Text, obj3);
        cResult[6] = tmp13;
        cResult[7] = tmp19;
        tmp17 = tmp19;
      } else {
        tmp17 = cResult[7];
      }
      if (cResult[8] !== tmp5) {
        let BddRzS;
        const intl3 = intl4.intl;
        const string3 = intl3.string;
        if (tmp5) {
          BddRzS = intl4.t.BddRzS;
        } else {
          BddRzS = _modDef3723["/omTNx"];
        }
        const string3Result = string3(BddRzS);
        cResult[8] = tmp5;
        cResult[9] = string3Result;
        tmp20 = string3Result;
      } else {
        tmp20 = cResult[9];
      }
      if (cResult[10] === Symbol.for("react.memo_cache_sentinel")) {
        const fn = function v() {
          const obj = ActionSheetActionCreatorsDefault;
          return obj.hideActionSheet(ConjurePublishBlockedSheet);
        };
        cResult[10] = fn;
        tmp24 = fn;
      } else {
        tmp24 = cResult[10];
      }
      if (cResult[11] !== tmp20) {
        const obj4 = { variant: "primary", text: tmp20, onPress: tmp24 };
        const tmp27 = React3(components_Button_Button.Button, obj4);
        cResult[11] = tmp20;
        cResult[12] = tmp27;
        tmp25 = tmp27;
      } else {
        tmp25 = cResult[12];
      }
      if (cResult[13] === tmp4.content) {
        if (cResult[14] === tmp17) {
          let tmp28;
          if (cResult[15] === tmp25) {
            tmp28 = cResult[16];
          }
          if (cResult[17] === tmp10) {
            let tmp30;
            if (cResult[18] === tmp28) {
              tmp30 = cResult[19];
            }
            return tmp30;
          }
          const obj5 = { header: tmp10, children: tmp28 };
          const tmp32 = React3(ActionSheet2.ActionSheet, obj5);
          cResult[17] = tmp10;
          cResult[18] = tmp28;
          cResult[19] = tmp32;
          tmp30 = tmp32;
        }
      }
      const obj6 = { style: content, children: items };
      items = [tmp17, tmp25];
      const tmp29 = hasOwnProperty(View, obj6);
      cResult[13] = tmp4.content;
      cResult[14] = tmp17;
      cResult[15] = tmp25;
      cResult[16] = tmp29;
      tmp28 = tmp29;
    }
  : (reason) => {
      let BddRzS;
      let ZNGLFE;
      let items;
      let obj2;
      let obj3;
      let tmp8;
      reason = reason.reason;
      const tmp = closure_7();
      const tmp4 = reason === conjurePublishBlockedReason.ConjurePublishBlockedReason.PERMISSIONS;
      const ActionSheet = ActionSheet2.ActionSheet;
      const BottomSheetTitleHeader = BottomSheetTitleHeader2.BottomSheetTitleHeader;
      const intl = intl4.intl;
      const string = intl.string;
      const tmp7 = _modDef3723;
      if (tmp4) {
        ZNGLFE = tmp7.wQ4UyJ;
        tmp8 = importDefault;
      } else {
        ZNGLFE = tmp7.ZNGLFE;
        tmp8 = importDefault;
      }
      let obj = { header: React3(BottomSheetTitleHeader, obj2), children: hasOwnProperty(View, obj3) };
      obj2 = { title: string(ZNGLFE) };
      obj3 = { style: tmp.content, children: items };
      const Text = Text_Text.Text;
      const intl2 = intl4.intl;
      const string2 = intl2.string;
      const tmp8Result = tmp8(3723);
      items = [,];
      const obj4 = {
        variant: "text-md/normal",
        color: "text-muted",
        children: string2(tmp4 ? tmp8Result.Agqmbt : tmp8Result.ffxKGK),
      };
      items[0] = React3(Text, obj4);
      const Button = components_Button_Button.Button;
      const intl3 = intl4.intl;
      const string3 = intl3.string;
      if (tmp4) {
        BddRzS = intl4.t.BddRzS;
      } else {
        BddRzS = tmp8(3723)["/omTNx"];
      }
      const obj5 = {
        variant: "primary",
        text: string3(BddRzS),
        onPress() {
          const obj = ActionSheetActionCreatorsDefault;
          return obj.hideActionSheet(ConjurePublishBlockedSheet);
        },
      };
      items[1] = React3(Button, obj5);
      return React3(ActionSheet, obj);
    };
const result = size.fileFinishedImporting("modules/conjure/publish/native/ConjurePublishBlockedSheet.tsx");

export default function showConjurePublishBlockedSheet(reason) {
  let obj2;
  const obj = { key: ConjurePublishBlockedSheet, content: React3(closure_8, obj2) };
  const showActionSheet = ActionSheetActionCreators.showActionSheet;
  obj2 = { reason };
  ActionSheetActionCreators;
  showActionSheet(obj);
}
export const CONJURE_PUBLISH_BLOCKED_SHEET_KEY = "ConjurePublishBlockedSheet";
