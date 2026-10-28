// === Module 12406: ConjureProjectEventLine ===

// Module 12406 (ConjureProjectEventLine)
import c from "c" /* 576 */;
import Text_Text from "Text/Text" /* 5270 */;
import ConjureMessageActionSheet from "ConjureMessageActionSheet" /* 12394 */;
import ConjureSelectedMentionDefault from "ConjureSelectedMention" /* 12398 */;
import useConjureProjectEventLineDefault from "useConjureProjectEventLine" /* 12407 */;
import useConjureRemixSettingsRequestDefault from "useConjureRemixSettingsRequest" /* 12409 */;
import noop from "module_19" /* 19 */;

const ConjureVoiceChannelPinCardDefault = tmp4(12411);
const ConjureSettingsRequestCardDefault = tmp4(12413);
require = fn;
function renderMention(arg0, arg1, arg2) {
  closure_0 = arg0;
  const obj = {
    label: "@" + arg1,
    variant: "text-md/medium",
    onPress() {
      return ConjureMessageActionSheet.openMessageAuthorProfile(closure_0);
    }
  };
  return closure_3(ConjureSelectedMentionDefault, obj, arg2);
}
const jsxProd = fn(21);
({ jsx: c3, Fragment: closure_4, jsxs: hasOwnProperty } = jsxProd);
const ReactCompilerGating = fn(558);
const size = fn(2);
const result = size.fileFinishedImporting("modules/conjure/chat/native/ConjureProjectEventLine.tsx");

export default ReactCompilerGating.isReactCompilerEnabled() ? (function ConjureProjectEventLine(arg0) {
  let tmp2 = dependencyMap;
  const cResult = c.c(10);
  ({ projectId, event } = arg0);
  let tmp4 = importDefault;
  const tmp5 = useConjureProjectEventLineDefault(projectId, event, renderMention);
  const tmp6 = useConjureRemixSettingsRequestDefault(projectId, event);
  if ("voice_channel_pin" === event.type) {
    if (cResult[0] !== projectId) {
      tmp4 = ConjureVoiceChannelPinCardDefault;
      const obj2 = { projectId };
      tmp2 = React3(tmp4, obj2);
      cResult[0] = projectId;
      cResult[1] = tmp2;
    }
  } else {
    if (cResult[2] !== tmp5) {
      const obj3 = { variant: "text-md/normal", color: "text-default", children: tmp5 };
      const tmp9 = React3(Text_Text.Text, obj3);
      cResult[2] = tmp5;
      cResult[3] = tmp9;
      let tmp7 = tmp9;
    } else {
      tmp7 = cResult[3];
    }
    if (cResult[4] === projectId) {
      if (cResult[5] === tmp6) {
        let tmp10 = cResult[6];
      }
      if (cResult[7] === tmp7) {
        if (cResult[8] === tmp10) {
          let tmp13 = cResult[9];
        }
        return tmp13;
      }
      const obj4 = { children: null };
      const items = [tmp7, tmp10];
      obj4.children = items;
      const tmp16 = hasOwnProperty(React4, obj4);
      cResult[7] = tmp7;
      cResult[8] = tmp10;
      cResult[9] = tmp16;
      tmp13 = tmp16;
    }
    let tmp11 = null;
    if (null != tmp6) {
      const obj5 = { projectId, request: tmp6, notifyAgent: false };
      tmp11 = React3(ConjureSettingsRequestCardDefault, obj5);
    }
    cResult[4] = projectId;
    cResult[5] = tmp6;
    cResult[6] = tmp11;
    tmp10 = tmp11;
  }
}) : (function ConjureProjectEventLine(arg0) {
  ({ projectId, event } = arg0);
  const tmp4 = useConjureRemixSettingsRequestDefault(projectId, event);
  if ("voice_channel_pin" === event.type) {
    const obj2 = { projectId };
    let tmp8Result = React3(ConjureVoiceChannelPinCardDefault, obj2);
  } else {
    const obj3 = { variant: "text-md/normal", color: "text-default", children: tmp3 };
    const items = [React3(Text_Text.Text, obj3), ];
    let tmp10Result = null;
    if (null != tmp4) {
      const obj = { projectId, request: tmp4, notifyAgent: false };
      tmp10Result = React3(ConjureSettingsRequestCardDefault, obj);
    }
    const obj4 = { children: null };
    items[1] = tmp10Result;
    obj4.children = items;
    tmp8Result = hasOwnProperty(React4, obj4);
  }
  return tmp8Result;
});