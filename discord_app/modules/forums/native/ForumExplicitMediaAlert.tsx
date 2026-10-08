// discord_app/modules/forums/native/ForumExplicitMediaAlert.tsx
import nativeDefault from "../../../../discord_common/js/packages/tokens/native.tsx";
import ExplicitMediaActionCreators from "../../explicit_media_redaction/ExplicitMediaActionCreators.native.tsx";
import noop from "../../../../_runtime/metro/00019__.js";

const require = globalThis.__r;

require = fn;
const View = fn(17).View;
const jsxProd = fn(21);
({ jsx: closure_4, jsxs: hasOwnProperty } = jsxProd);
const createStyles = fn(5090);
let obj2 = {
  container: { padding: nativeDefault.space.PX_16, alignItems: "stretch" },
  title: null,
  body: null,
  buttonContainer: null,
  text: null,
};
let obj3 = { padding: nativeDefault.space.PX_16, alignItems: "stretch" };
obj2.title = { marginBottom: nativeDefault.space.PX_16 };
let obj4 = { marginBottom: nativeDefault.space.PX_16 };
obj2.body = { marginTop: nativeDefault.space.PX_16 };
let obj5 = { marginTop: nativeDefault.space.PX_16 };
obj2.buttonContainer = { marginVertical: nativeDefault.space.PX_16 };
obj2.text = { textAlign: "center" };
let closure_6 = createStyles.createStyles(obj2);
const ReactCompilerGating = fn(558);
let obj6 = { marginVertical: nativeDefault.space.PX_16 };
const size = fn(2);
let result = size.fileFinishedImporting("modules/forums/native/ForumExplicitMediaAlert.tsx");

export default ReactCompilerGating.isReactCompilerEnabled()
  ? function ForumExplicitMediaAlert(channelId) {
      const cResult = channelId(onClose[6]).c(32);
      channelId = channelId.channelId;
      const messageId = channelId.messageId;
      onClose = channelId.onClose;
      const tmp4 = closure_6();
      if (cResult[0] === tmp4.text) {
        if (cResult[1] === tmp4.title) {
          let tmp6 = cResult[2];
        }
        const _Symbol = Symbol;
        if (cResult[3] === Symbol.for("react.memo_cache_sentinel")) {
          const intl = tmp(tmp2[7]).intl;
          const stringResult = intl.string(tmp(tmp2[7]).t.B3vFdU);
          cResult[3] = stringResult;
          let tmp8 = stringResult;
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
          const tmp12 = closure_4(tmp(tmp2[8]).Text, obj2);
          cResult[4] = tmp6;
          cResult[5] = tmp12;
          let tmp10 = tmp12;
        } else {
          tmp10 = cResult[5];
        }
        if (cResult[6] === tmp4.body) {
          if (cResult[7] === tmp4.text) {
            let tmp13 = cResult[8];
          }
          const _Symbol2 = Symbol;
          if (cResult[9] === Symbol.for("react.memo_cache_sentinel")) {
            const intl2 = tmp(tmp2[7]).intl;
            const stringResult1 = intl2.string(tmp(tmp2[7]).t.i4AbAS);
            cResult[9] = stringResult1;
            let tmp14 = stringResult1;
          } else {
            tmp14 = cResult[9];
          }
          if (cResult[10] !== tmp13) {
            const obj3 = { style: tmp13, maxFontSizeMultiplier: 1, variant: "text-md/normal", children: tmp14 };
            const tmp18 = closure_4(tmp(tmp2[8]).Text, obj3);
            cResult[10] = tmp13;
            cResult[11] = tmp18;
            let tmp16 = tmp18;
          } else {
            tmp16 = cResult[11];
          }
          const _Symbol3 = Symbol;
          if (cResult[12] === Symbol.for("react.memo_cache_sentinel")) {
            const intl3 = tmp(tmp2[7]).intl;
            const stringResult2 = intl3.string(tmp(tmp2[7]).t.WAI6xu);
            cResult[12] = stringResult2;
            let tmp19 = stringResult2;
          } else {
            tmp19 = cResult[12];
          }
          if (cResult[13] !== onClose) {
            const obj4 = { variant: "primary", size: "md", text: tmp19, onPress: onClose };
            const tmp23 = closure_4(tmp(tmp2[9]).Button, obj4);
            cResult[13] = onClose;
            cResult[14] = tmp23;
            let tmp21 = tmp23;
          } else {
            tmp21 = cResult[14];
          }
          if (cResult[15] === tmp4.buttonContainer) {
            if (cResult[16] === tmp21) {
              let tmp24 = cResult[17];
            }
            if (cResult[18] === channelId) {
              if (cResult[19] === messageId) {
                if (cResult[20] === onClose) {
                  let tmp29 = cResult[21];
                }
                if (cResult[22] === tmp4.text) {
                  if (cResult[23] === tmp29) {
                    let tmp31 = cResult[24];
                  }
                  if (cResult[25] === onClose) {
                    if (cResult[26] === tmp4.container) {
                      if (cResult[27] === tmp24) {
                        if (cResult[28] === tmp31) {
                          if (cResult[29] === tmp10) {
                            if (cResult[30] === tmp16) {
                              let tmp34 = cResult[31];
                            }
                            return tmp34;
                          }
                        }
                      }
                    }
                  }
                  const obj5 = { noDefaultButtons: true, style: tmp5, onClose, children: null };
                  const items = [tmp10, tmp16, tmp24, tmp31];
                  obj5.children = items;
                  const tmp37 = closure_5(messageId(tmp2[11]), obj5);
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
                const tmp33 = closure_4(tmp(tmp2[8]).Text, obj6);
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
                const result = ExplicitMediaActionCreators.handleSenderFalsePositiveFlow(channelId, messageId);
              },
            };
            const formatResult = intl4.format(tmp(tmp2[7]).t["APQGZ+"], obj7);
            cResult[18] = channelId;
            cResult[19] = messageId;
            cResult[20] = onClose;
            cResult[21] = formatResult;
            tmp29 = formatResult;
          }
          const obj8 = { style: tmp4.buttonContainer, children: tmp21 };
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
      const obj = channelId(onClose[6]);
    }
  : function ForumExplicitMediaAlert(arg0) {
      ({ channelId: require, messageId: importDefault, onClose } = arg0);
      const tmp = closure_6();
      const obj = { noDefaultButtons: true, style: tmp.container, onClose, children: null };
      const obj2 = {
        accessibilityRole: "header",
        variant: "heading-md/extrabold",
        color: "text-default",
        style: null,
        children: null,
      };
      const items = [,];
      ({ title: arr[0], text: arr[1] } = tmp);
      obj2.style = items;
      const intl = require("util").intl;
      obj2.children = intl.string(require("util").t.B3vFdU);
      const items1 = [closure_4(require("Text/Text").Text, obj2), , ,];
      const obj3 = { style: null, maxFontSizeMultiplier: 1, variant: "text-md/normal", children: null };
      const items2 = [,];
      ({ body: arr3[0], text: arr3[1] } = tmp);
      obj3.style = items2;
      const intl2 = require("util").intl;
      obj3.children = intl2.string(require("util").t.i4AbAS);
      items1[1] = closure_4(require("Text/Text").Text, obj3);
      const obj4 = { style: tmp.buttonContainer, children: null };
      const obj5 = { variant: "primary", size: "md", text: null, onPress: null };
      const intl3 = require("util").intl;
      obj5.text = intl3.string(require("util").t.WAI6xu);
      obj5.onPress = onClose;
      obj4.children = closure_4(require("components/Button/Button").Button, obj5);
      items1[2] = closure_4(View, obj4);
      const obj6 = { style: tmp.text, variant: "text-sm/medium", color: "text-muted", children: null };
      const intl4 = require("util").intl;
      obj6.children = intl4.format(require("util").t["APQGZ+"], {
        handleFalsePositiveHook() {
          onClose();
          const result = ExplicitMediaActionCreators.handleSenderFalsePositiveFlow(closure_1_0, importDefault);
        },
      });
      items1[3] = closure_4(require("Text/Text").Text, obj6);
      obj.children = items1;
      return closure_5(require("common/Alert"), obj);
    };
