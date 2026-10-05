// discord_app/modules/in_app_reports/native/components/InAppReportsMessagePreview.tsx
import react_native from "../../../../../_runtime/00017_react-native.js";
import react2 from "../../../../../_runtime/00576_react.js";
import nativeDefault from "../../../../../discord_common/js/packages/tokens/native.tsx";
import intl2 from "../../../../intl/index.native.tsx";
import ColorUtils from "../../../../utils/ColorUtils.tsx";
import Text_Text from "../../../../design/components/Text/native/Text.tsx";
import RowGeneratorDefault from "../../../messages/native/renderer/RowGenerator.tsx";
import ChatItemDefault from "../../../../components_native/chat/ChatItem.tsx";
import react from "../../../../../_runtime/00019_react.js";
import Fragment from "../../../../../_runtime/react/00021_Fragment.js";
import createStyles_mod from "../../../../design/components/Styles/native/createStyles.tsx";
import ReactCompilerGating from "../../../react_compiler/ReactCompilerGating.tsx";
import size from "../../../../../_runtime/metro/00002__.js";

let message;

let closure_4;
let hasOwnProperty;
let obj2;
let obj3;
const View = react_native.View;
({ jsx: closure_4, jsxs: hasOwnProperty } = Fragment);
let createStyles = createStyles_mod;
let obj = {
  container: { alignSelf: "stretch", marginHorizontal: 16, marginBottom: 16 },
  borderColor: obj2,
  title: { lineHeight: 16, marginBottom: 8 },
  chatItemContainer: obj3,
};
obj2 = { color: nativeDefault.colors.MOBILE_TEXT_HEADING_PRIMARY };
createStyles = createStyles.createStyles;
obj3 = { minHeight: 40, borderRadius: nativeDefault.radii.sm, borderWidth: 1, padding: 8 };
let closure_6 = createStyles(obj);
let obj4 = new RowGeneratorDefault();
obj4.setOptions({
  renderCodedLinks: false,
  renderGiftCode: false,
  renderActivityInstanceEmbed: false,
  renderActivityInviteEmbed: false,
  renderEmbeds: true,
  ignoreMentioned: true,
  inlineAttachmentMedia: false,
  inlineEmbedMedia: true,
  renderReactions: false,
});
const tmp6 = ReactCompilerGating.isReactCompilerEnabled()
  ? (message) => {
      let container;
      let items;
      let title;
      let tmp12;
      let tmp5;
      let tmp7;
      let tmp9;
      const obj = react2;
      const cResult = obj.c(19);
      message = message.message;
      const tmp4 = closure_6();
      if (cResult[0] !== tmp4.borderColor.color) {
        const tmpResult = ColorUtils;
        const hexWithOpacityResult = tmpResult.hexWithOpacity(tmp4.borderColor.color, 0.08);
        cResult[0] = tmp4.borderColor.color;
        cResult[1] = hexWithOpacityResult;
        tmp5 = hexWithOpacityResult;
      } else {
        tmp5 = cResult[1];
      }
      ({ container, title } = tmp4);
      if (cResult[2] === Symbol.for("react.memo_cache_sentinel")) {
        const intl = intl2.intl;
        const stringResult = intl.string(intl2.t.iouM3a);
        cResult[2] = stringResult;
        tmp7 = stringResult;
      } else {
        tmp7 = cResult[2];
      }
      if (cResult[3] !== tmp4.title) {
        const obj2 = { style: title, accessibilityRole: "header", variant: "text-xs/bold", children: tmp7 };
        const tmp11 = React3(Text_Text.Text, obj2);
        cResult[3] = tmp4.title;
        cResult[4] = tmp11;
        tmp9 = tmp11;
      } else {
        tmp9 = cResult[4];
      }
      if (cResult[5] !== tmp5) {
        const obj3 = { borderColor: tmp5 };
        cResult[5] = tmp5;
        cResult[6] = obj3;
        tmp12 = obj3;
      } else {
        tmp12 = cResult[6];
      }
      if (cResult[7] === tmp4.chatItemContainer) {
        let tmp13;
        let tmp14;
        if (cResult[8] === tmp12) {
          tmp13 = cResult[9];
        }
        if (cResult[10] !== message) {
          obj4 = { rowGenerator: obj4, maxHeight: 120, message, pointerEvents: "none" };
          const tmp18 = React3(ChatItemDefault, obj4);
          cResult[10] = message;
          cResult[11] = tmp18;
          tmp14 = tmp18;
        } else {
          tmp14 = cResult[11];
        }
        if (cResult[12] === tmp13) {
          let tmp19;
          if (cResult[13] === tmp14) {
            tmp19 = cResult[14];
          }
          if (cResult[15] === tmp4.container) {
            if (cResult[16] === tmp9) {
              let tmp23;
              if (cResult[17] === tmp19) {
                tmp23 = cResult[18];
              }
              return tmp23;
            }
          }
          const obj5 = { style: container, children: items };
          items = [tmp9, tmp19];
          const tmp26 = hasOwnProperty(View, obj5);
          cResult[15] = tmp4.container;
          cResult[16] = tmp9;
          cResult[17] = tmp19;
          cResult[18] = tmp26;
          tmp23 = tmp26;
        }
        const obj6 = { accessible: true, style: tmp13, children: tmp14 };
        const tmp22 = React3(View, obj6);
        cResult[12] = tmp13;
        cResult[13] = tmp14;
        cResult[14] = tmp22;
        tmp19 = tmp22;
      }
      const items1 = [tmp4.chatItemContainer, tmp12];
      cResult[7] = tmp4.chatItemContainer;
      cResult[8] = tmp12;
      cResult[9] = items1;
      tmp13 = items1;
    }
  : (message) => {
      let intl;
      let items;
      let items1;
      let obj5;
      message = message.message;
      const tmp = closure_6();
      const obj2 = { style: tmp.container, children: items };
      const obj = ColorUtils;
      const obj3 = {
        style: tmp.title,
        accessibilityRole: "header",
        variant: "text-xs/bold",
        children: intl.string(intl2.t.iouM3a),
      };
      const hexWithOpacityResult = obj.hexWithOpacity(tmp.borderColor.color, 0.08);
      const Text = Text_Text.Text;
      intl = intl2.intl;
      items = [React3(Text, obj3)];
      obj4 = { accessible: true, style: items1, children: React3(ChatItemDefault, obj5) };
      items1 = [tmp.chatItemContainer, { borderColor: hexWithOpacityResult }];
      obj5 = { rowGenerator: obj4, maxHeight: 120, message, pointerEvents: "none" };
      items[1] = React3(View, obj4);
      return hasOwnProperty(View, obj2);
    };
const result = size.fileFinishedImporting("modules/in_app_reports/native/components/InAppReportsMessagePreview.tsx");

export default tmp6;
