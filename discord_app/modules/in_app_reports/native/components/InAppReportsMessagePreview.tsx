// discord_app/modules/in_app_reports/native/components/InAppReportsMessagePreview.tsx
import c from "../../../../../_runtime/00576_c.js";
import nativeDefault from "../../../../../discord_common/js/packages/tokens/native.tsx";
import util from "../../../../intl/index.native.tsx";
import ColorUtils from "../../../../utils/ColorUtils.tsx";
import Text_Text from "../../../../design/components/Text/native/Text.tsx";
import RowGeneratorDefault from "../../../messages/native/renderer/RowGenerator.tsx";
import ChatItemDefault from "../../../../components_native/chat/ChatItem.tsx";
import noop from "../../../../../_runtime/metro/00019__.js";

require = fn;
const View = fn(17).View;
const jsxProd = fn(21);
({ jsx: closure_4, jsxs: hasOwnProperty } = jsxProd);
const createStyles = fn(4896);
let obj2 = {
  container: { alignSelf: "stretch", marginHorizontal: 16, marginBottom: 16 },
  borderColor: { color: nativeDefault.colors.MOBILE_TEXT_HEADING_PRIMARY },
  title: { lineHeight: 16, marginBottom: 8 },
  chatItemContainer: null,
};
let obj3 = { color: nativeDefault.colors.MOBILE_TEXT_HEADING_PRIMARY };
obj2.chatItemContainer = { minHeight: 40, borderRadius: nativeDefault.radii.sm, borderWidth: 1, padding: 8 };
let closure_6 = createStyles.createStyles(obj2);
let obj5 = new RowGeneratorDefault();
obj5.setOptions({
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
const ReactCompilerGating = fn(558);
let obj4 = { minHeight: 40, borderRadius: nativeDefault.radii.sm, borderWidth: 1, padding: 8 };
const size = fn(2);
const result = size.fileFinishedImporting("modules/in_app_reports/native/components/InAppReportsMessagePreview.tsx");

export default ReactCompilerGating.isReactCompilerEnabled()
  ? (message) => {
      const cResult = c.c(19);
      message = message.message;
      const tmp4 = closure_6();
      if (cResult[0] !== tmp4.borderColor.color) {
        const hexWithOpacityResult = ColorUtils.hexWithOpacity(tmp4.borderColor.color, 0.08);
        cResult[0] = tmp4.borderColor.color;
        cResult[1] = hexWithOpacityResult;
        let tmp5 = hexWithOpacityResult;
        const tmpResult = ColorUtils;
      } else {
        tmp5 = cResult[1];
      }
      ({ container, title } = tmp4);
      if (cResult[2] === Symbol.for("react.memo_cache_sentinel")) {
        const intl = util.intl;
        const stringResult = intl.string(util.t.iouM3a);
        cResult[2] = stringResult;
        let tmp7 = stringResult;
      } else {
        tmp7 = cResult[2];
      }
      if (cResult[3] !== tmp4.title) {
        const obj2 = { style: title, accessibilityRole: "header", variant: "text-xs/bold", children: tmp7 };
        const tmp11 = React4(Text_Text.Text, obj2);
        cResult[3] = tmp4.title;
        cResult[4] = tmp11;
        let tmp9 = tmp11;
      } else {
        tmp9 = cResult[4];
      }
      if (cResult[5] !== tmp5) {
        const obj3 = { borderColor: tmp5 };
        cResult[5] = tmp5;
        cResult[6] = obj3;
        let tmp12 = obj3;
      } else {
        tmp12 = cResult[6];
      }
      if (cResult[7] === tmp4.chatItemContainer) {
        if (cResult[8] === tmp12) {
          let tmp13 = cResult[9];
        }
        if (cResult[10] !== message) {
          const obj4 = { rowGenerator: obj5, maxHeight: 120, message, pointerEvents: "none" };
          const tmp18 = React4(ChatItemDefault, obj4);
          cResult[10] = message;
          cResult[11] = tmp18;
          let tmp14 = tmp18;
        } else {
          tmp14 = cResult[11];
        }
        if (cResult[12] === tmp13) {
          if (cResult[13] === tmp14) {
            let tmp19 = cResult[14];
          }
          if (cResult[15] === tmp4.container) {
            if (cResult[16] === tmp9) {
              if (cResult[17] === tmp19) {
                let tmp23 = cResult[18];
              }
              return tmp23;
            }
          }
          obj5 = { style: container, children: null };
          const items = [tmp9, tmp19];
          obj5.children = items;
          const tmp26 = hasOwnProperty(View, obj5);
          cResult[15] = tmp4.container;
          cResult[16] = tmp9;
          cResult[17] = tmp19;
          cResult[18] = tmp26;
          tmp23 = tmp26;
        }
        const obj6 = { accessible: true, style: tmp13, children: tmp14 };
        const tmp22 = React4(View, obj6);
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
      const tmp = closure_6();
      const obj2 = { style: tmp.container, children: null };
      const obj3 = { style: tmp.title, accessibilityRole: "header", variant: "text-xs/bold", children: null };
      const intl = util.intl;
      obj3.children = intl.string(util.t.iouM3a);
      const items = [React4(Text_Text.Text, obj3)];
      const obj4 = { accessible: true, style: null, children: null };
      const items1 = [tmp.chatItemContainer, { borderColor: ColorUtils.hexWithOpacity(tmp.borderColor.color, 0.08) }];
      obj4.style = items1;
      obj5 = { rowGenerator: obj5, maxHeight: 120, message: message.message, pointerEvents: "none" };
      obj4.children = React4(ChatItemDefault, obj5);
      items[1] = React4(View, obj4);
      obj2.children = items;
      return hasOwnProperty(View, obj2);
    };
