// discord_app/modules/polls/native/PollCreationInputError.tsx
import react_native from "../../../../_runtime/00017_react-native.js";
import nativeDefault from "../../../../discord_common/js/packages/tokens/native.tsx";
import AccessibilityAnnouncer2 from "../../../../discord_common/js/packages/design/components/AccessibilityAnnouncer/AccessibilityAnnouncer.android.tsx";
import react from "../../../../_runtime/00019_react.js";
import Fragment from "../../../../_runtime/react/00021_Fragment.js";
import createStyles from "../../../design/components/Styles/native/createStyles.tsx";
import ReactCompilerGating from "../../react_compiler/ReactCompilerGating.tsx";
import size_mod from "../../../../_runtime/metro/00002__.js";

let message;

let closure_4;
let hasOwnProperty;
let obj2;
const View = react_native.View;
({ jsx: closure_4, jsxs: hasOwnProperty } = Fragment);
let obj = { container: { flexDirection: "row", alignItems: "center", marginTop: -10 }, icon: obj2 };
obj2 = { alignSelf: "center", marginRight: 5, color: nativeDefault.colors.TEXT_FEEDBACK_CRITICAL };
let closure_6 = createStyles.createStyles(obj);
const tmp3 = ReactCompilerGating.isReactCompilerEnabled()
  ? (message) => {
      let items1;
      let tmp11;
      let tmp5;
      let tmp6;
      let tmp8;
      const obj = message(576);
      const cResult = obj.c(11);
      message = message.message;
      const tmp4 = closure_6();
      if (cResult[0] !== message) {
        const fn = function u() {
          const tmp2 = null != message && "" !== message;
          if (tmp2) {
            const AccessibilityAnnouncer = AccessibilityAnnouncer2.AccessibilityAnnouncer;
            AccessibilityAnnouncer.announce(message);
          }
        };
        const items = [message];
        cResult[0] = message;
        cResult[1] = fn;
        cResult[2] = items;
        tmp6 = items;
        tmp5 = fn;
      } else {
        tmp5 = cResult[1];
        tmp6 = cResult[2];
      }
      const effect = react.useEffect(tmp5, tmp6);
      if (cResult[3] !== tmp4.icon) {
        size = { width: 16, height: 16, style: tmp4.icon };
        const tmp10 = closure_4(message(1188).WarningCircle, size);
        cResult[3] = tmp4.icon;
        cResult[4] = tmp10;
        tmp8 = tmp10;
      } else {
        tmp8 = cResult[4];
      }
      if (cResult[5] !== message) {
        const obj2 = { variant: "text-xs/medium", color: "text-feedback-critical", children: message };
        const tmp13 = closure_4(message(4892).Text, obj2);
        cResult[5] = message;
        cResult[6] = tmp13;
        tmp11 = tmp13;
      } else {
        tmp11 = cResult[6];
      }
      if (cResult[7] === tmp4.container) {
        if (cResult[8] === tmp8) {
          let tmp14;
          if (cResult[9] === tmp11) {
            tmp14 = cResult[10];
          }
          return tmp14;
        }
      }
      const obj3 = { style: tmp4.container, children: items1 };
      items1 = [tmp8, tmp11];
      const tmp15 = closure_5(View, obj3);
      cResult[7] = tmp4.container;
      cResult[8] = tmp8;
      cResult[9] = tmp11;
      cResult[10] = tmp15;
      tmp14 = tmp15;
    }
  : (message) => {
      let items1;
      message = message.message;
      const tmp = closure_6();
      const items = [message];
      const effect = react.useEffect(() => {
        const tmp2 = null != message && "" !== message;
        if (tmp2) {
          const AccessibilityAnnouncer = AccessibilityAnnouncer2.AccessibilityAnnouncer;
          AccessibilityAnnouncer.announce(message);
        }
      }, items);
      size = { width: 16, height: 16, style: tmp.icon };
      const obj = { style: tmp.container, children: items1 };
      items1 = [
        closure_4(message(1188).WarningCircle, size),
        closure_4(message(4892).Text, {
          variant: "text-xs/medium",
          color: "text-feedback-critical",
          children: message,
        }),
      ];
      return closure_5(View, obj);
    };
let size = size_mod;
const result = size.fileFinishedImporting("modules/polls/native/PollCreationInputError.tsx");

export default tmp3;
