// === Module 18701: ConjureProjectEventLine ===

// Module 18701 (ConjureProjectEventLine)
import Text_Text from "Text/Text" /* 5634 */;
import useConjureRemixSettingsRequestDefault from "useConjureRemixSettingsRequest" /* 18668 */;
import ConjureMessageActionSheet from "ConjureMessageActionSheet" /* 18690 */;
import ConjureSelectedMentionDefault from "ConjureSelectedMention" /* 18694 */;
import ConjureVoiceChannelPinCardDefault from "ConjureVoiceChannelPinCard" /* 18704 */;
import ConjureSettingsRequestCardDefault from "ConjureSettingsRequestCard" /* 18706 */;
import noop from "module_19" /* 19 */;

require = fn;
function renderMention(arg0, arg1, arg2) {
  closure_0 = arg0;
  const obj = {
    label: "@" + arg1,
    variant: "body-md/medium",
    onPress() {
      return ConjureMessageActionSheet.openMessageAuthorProfile(closure_0);
    }
  };
  return closure_3(ConjureSelectedMentionDefault, obj, arg2);
}
const jsxProd = fn(21);
({ jsx: c3, Fragment: closure_4, jsxs: hasOwnProperty } = jsxProd);
const size = fn(2);
const result = size.fileFinishedImporting("modules/conjure/chat/native/ConjureProjectEventLine.tsx");

export default function ConjureProjectEventLine(arg0) {
  ({ projectId, event } = arg0);
  const tmp4 = useConjureRemixSettingsRequestDefault(projectId, event);
  if ("voice_channel_pin" === event.type) {
    const obj2 = { projectId };
    let tmp5Result = React3(ConjureVoiceChannelPinCardDefault, obj2);
  } else {
    const obj = { variant: "body-md/normal", color: "text-default", children: tmp3 };
    items = [React3(Text_Text.Text, obj), ];
    let tmp7Result = null;
    if (null != tmp4) {
      const obj3 = { projectId, request: tmp4, notifyAgent: false };
      tmp7Result = React3(ConjureSettingsRequestCardDefault, obj3);
    }
    const obj4 = { children: null };
    items[1] = tmp7Result;
    obj4.children = items;
    tmp5Result = hasOwnProperty(React4, obj4);
  }
  return tmp5Result;
};