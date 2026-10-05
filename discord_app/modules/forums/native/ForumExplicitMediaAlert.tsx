// discord_app/modules/forums/native/ForumExplicitMediaAlert.tsx
import react_native from "../../../../_runtime/00017_react-native.js";
import nativeDefault from "../../../../discord_common/js/packages/tokens/native.tsx";
import ExplicitMediaActionCreators from "../../explicit_media_redaction/ExplicitMediaActionCreators.native.tsx";
import react from "../../../../_runtime/00019_react.js";
import Fragment from "../../../../_runtime/react/00021_Fragment.js";
import createStyles_mod from "../../../design/components/Styles/native/createStyles.tsx";
import ReactCompilerGating from "../../react_compiler/ReactCompilerGating.tsx";
import size from "../../../../_runtime/metro/00002__.js";

const require = globalThis.__r;
let channelId;

let closure_4;
let hasOwnProperty;
let obj2;
let obj3;
let obj4;
let obj5;
const View = react_native.View;
({ jsx: closure_4, jsxs: hasOwnProperty } = Fragment);
let createStyles = createStyles_mod;
let obj = { container: obj2, title: obj3, body: obj4, buttonContainer: obj5, text: { textAlign: "center" } };
obj2 = { padding: nativeDefault.space.PX_16, alignItems: "stretch" };
createStyles = createStyles.createStyles;
obj3 = { marginBottom: nativeDefault.space.PX_16 };
obj4 = { marginTop: nativeDefault.space.PX_16 };
obj5 = { marginVertical: nativeDefault.space.PX_16 };
let closure_6 = createStyles(obj);
const tmp5 = ReactCompilerGating.isReactCompilerEnabled()
  ? (channelId) => {
      let items;
      let onClose;
      let obj = channelId(onClose[6]);
      const cResult = obj.c(32);
      channelId = channelId.channelId;
      const messageId = channelId.messageId;
      onClose = channelId.onClose;
      const tmp4 = closure_6();
      if (cResult[0] === tmp4.text) {
        let tmp6;
        let tmp8;
        let tmp10;
        if (cResult[1] === tmp4.title) {
          tmp6 = cResult[2];
        }
        const _Symbol = Symbol;
        if (cResult[3] === Symbol.for("react.memo_cache_sentinel")) {
          const intl = tmp(tmp2[7]).intl;
          const stringResult = intl.string(channelId(onClose[7]).t.B3vFdU);
          cResult[3] = stringResult;
          tmp8 = stringResult;
        } else {
          tmp8 = cResult[3];
        }
        if (cResult[4] !== tmp6) {
          const obj2 = {
            accessibilityRole: "header",
            variant: "heading-md/extrabold",
            color: "text-default",
            style: tmp6,
            children: tmp8,
          };
          const tmp12 = closure_4(channelId(onClose[8]).Text, obj2);
          cResult[4] = tmp6;
          cResult[5] = tmp12;
          tmp10 = tmp12;
        } else {
          tmp10 = cResult[5];
        }
        if (cResult[6] === tmp4.body) {
          let tmp13;
          let tmp14;
          let tmp16;
          let tmp19;
          let tmp21;
          if (cResult[7] === tmp4.text) {
            tmp13 = cResult[8];
          }
          const _Symbol2 = Symbol;
          if (cResult[9] === Symbol.for("react.memo_cache_sentinel")) {
            const intl2 = tmp(tmp2[7]).intl;
            const stringResult1 = intl2.string(channelId(onClose[7]).t.i4AbAS);
            cResult[9] = stringResult1;
            tmp14 = stringResult1;
          } else {
            tmp14 = cResult[9];
          }
          if (cResult[10] !== tmp13) {
            const obj3 = { style: tmp13, maxFontSizeMultiplier: 1, variant: "text-md/normal", children: tmp14 };
            const tmp18 = closure_4(channelId(onClose[8]).Text, obj3);
            cResult[10] = tmp13;
            cResult[11] = tmp18;
            tmp16 = tmp18;
          } else {
            tmp16 = cResult[11];
          }
          const _Symbol3 = Symbol;
          const buttonContainer = tmp4.buttonContainer;
          if (cResult[12] === Symbol.for("react.memo_cache_sentinel")) {
            const intl3 = tmp(tmp2[7]).intl;
            const stringResult2 = intl3.string(channelId(onClose[7]).t.WAI6xu);
            cResult[12] = stringResult2;
            tmp19 = stringResult2;
          } else {
            tmp19 = cResult[12];
          }
          if (cResult[13] !== onClose) {
            const obj4 = { variant: "primary", size: "md", text: tmp19, onPress: onClose };
            const tmp23 = closure_4(channelId(onClose[9]).Button, obj4);
            cResult[13] = onClose;
            cResult[14] = tmp23;
            tmp21 = tmp23;
          } else {
            tmp21 = cResult[14];
          }
          if (cResult[15] === tmp4.buttonContainer) {
            let tmp24;
            if (cResult[16] === tmp21) {
              tmp24 = cResult[17];
            }
            if (cResult[18] === channelId) {
              if (cResult[19] === messageId) {
                let tmp29;
                if (cResult[20] === onClose) {
                  tmp29 = cResult[21];
                }
                if (cResult[22] === tmp4.text) {
                  let tmp31;
                  if (cResult[23] === tmp29) {
                    tmp31 = cResult[24];
                  }
                  if (cResult[25] === onClose) {
                    if (cResult[26] === tmp4.container) {
                      if (cResult[27] === tmp24) {
                        if (cResult[28] === tmp31) {
                          if (cResult[29] === tmp10) {
                            let tmp34;
                            if (cResult[30] === tmp16) {
                              tmp34 = cResult[31];
                            }
                            return tmp34;
                          }
                        }
                      }
                    }
                  }
                  const obj5 = { noDefaultButtons: true, style: tmp5, onClose, children: items };
                  items = [tmp10, tmp16, tmp24, tmp31];
                  const tmp37 = closure_5(messageId(onClose[11]), obj5);
                  cResult[25] = onClose;
                  cResult[26] = tmp4.container;
                  cResult[27] = tmp24;
                  cResult[28] = tmp31;
                  cResult[29] = tmp10;
                  cResult[30] = tmp16;
                  cResult[31] = tmp37;
                  tmp34 = tmp37;
                }
                const obj6 = { style: tmp28, variant: "text-sm/medium", color: "text-muted", children: tmp29 };
                const tmp33 = closure_4(channelId(onClose[8]).Text, obj6);
                cResult[22] = tmp4.text;
                cResult[23] = tmp29;
                cResult[24] = tmp33;
                tmp31 = tmp33;
              }
            }
            const intl4 = tmp(tmp2[7]).intl;
            const obj7 = {
              handleFalsePositiveHook() {
                onClose();
                const obj = ExplicitMediaActionCreators;
                const result = obj.handleSenderFalsePositiveFlow(channelId, messageId);
              },
            };
            const formatResult = intl4.format(channelId(onClose[7]).t["APQGZ+"], obj7);
            cResult[18] = channelId;
            cResult[19] = messageId;
            cResult[20] = onClose;
            cResult[21] = formatResult;
            tmp29 = formatResult;
          }
          const obj8 = { style: buttonContainer, children: tmp21 };
          const tmp27 = closure_4(View, obj8);
          cResult[15] = tmp4.buttonContainer;
          cResult[16] = tmp21;
          cResult[17] = tmp27;
          tmp24 = tmp27;
        }
        const items1 = [,];
        ({ body: arr2[0], text: arr2[1] } = tmp4);
        cResult[6] = tmp4.body;
        cResult[7] = tmp4.text;
        cResult[8] = items1;
        tmp13 = items1;
      }
      const items2 = [,];
      ({ title: arr[0], text: arr[1] } = tmp4);
      cResult[0] = tmp4.text;
      cResult[1] = tmp4.title;
      cResult[2] = items2;
      tmp6 = items2;
    }
  : (arg0) => {
      let Button;
      let intl;
      let intl2;
      let intl3;
      let intl4;
      let items;
      let items1;
      let items2;
      let obj5;
      let obj7;
      let onClose;
      ({ channelId: require, messageId: importDefault, onClose } = arg0);
      const tmp = closure_6();
      let obj = { noDefaultButtons: true, style: tmp.container, onClose, children: items1 };
      const obj2 = {
        accessibilityRole: "header",
        variant: "heading-md/extrabold",
        color: "text-default",
        style: items,
        children: intl.string(require("intl").t.B3vFdU),
      };
      items = [,];
      ({ title: arr[0], text: arr[1] } = tmp);
      const tmp2 = require("Alert");
      const Text = require("Text/Text").Text;
      intl = require("intl").intl;
      items1 = [closure_4(Text, obj2), , ,];
      const obj3 = {
        style: items2,
        maxFontSizeMultiplier: 1,
        variant: "text-md/normal",
        children: intl2.string(require("intl").t.i4AbAS),
      };
      items2 = [,];
      ({ body: arr3[0], text: arr3[1] } = tmp);
      const Text2 = require("Text/Text").Text;
      intl2 = require("intl").intl;
      items1[1] = closure_4(Text2, obj3);
      const obj4 = { style: tmp.buttonContainer, children: closure_4(Button, obj5) };
      obj5 = { variant: "primary", size: "md", text: intl3.string(require("intl").t.WAI6xu), onPress: onClose };
      Button = require("components/Button/Button").Button;
      intl3 = require("intl").intl;
      items1[2] = closure_4(View, obj4);
      const obj6 = {
        style: tmp.text,
        variant: "text-sm/medium",
        color: "text-muted",
        children: intl4.format(require("intl").t["APQGZ+"], obj7),
      };
      const Text3 = require("Text/Text").Text;
      intl4 = require("intl").intl;
      obj7 = {
        handleFalsePositiveHook() {
          onClose();
          const obj = ExplicitMediaActionCreators;
          const result = obj.handleSenderFalsePositiveFlow(require, importDefault);
        },
      };
      items1[3] = closure_4(Text3, obj6);
      return closure_5(tmp2, obj);
    };
let result = size.fileFinishedImporting("modules/forums/native/ForumExplicitMediaAlert.tsx");

export default tmp5;
