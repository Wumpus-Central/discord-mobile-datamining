// discord_app/modules/conjure/chat/native/ConjureProjectEventLine.tsx
import Text_Text from "../../../../design/components/Text/native/Text.tsx";
import useConjureRemixSettingsRequestDefault from "../../remix/useConjureRemixSettingsRequest.tsx";
import ConjureMessageActionSheet from "ConjureMessageActionSheet.tsx";
import ConjureSelectedMentionDefault from "ConjureSelectedMention.tsx";
import ConjureVoiceChannelPinCardDefault from "../../voice_channel_pin/native/ConjureVoiceChannelPinCard.tsx";
import ConjureSetupAskCardDefault from "../../setup_asks/native/ConjureSetupAskCard.tsx";
import noop from "../../../../../_runtime/metro/00019__.js";

require = fn;
function renderMention(arg0, arg1, arg2) {
  closure_0 = arg0;
  const obj = {
    label: "@" + arg1,
    variant: "body-md/medium",
    onPress() {
      return ConjureMessageActionSheet.openMessageAuthorProfile(closure_0);
    },
  };
  return closure_3(ConjureSelectedMentionDefault, obj, arg2);
}
const jsxProd = fn(21);
({ jsx: c3, Fragment: closure_4, jsxs: hasOwnProperty } = jsxProd);
const size = fn(2);
const result = size.fileFinishedImporting("modules/conjure/chat/native/ConjureProjectEventLine.tsx");

export default function ConjureProjectEventLine(onInputFocusChange) {
  ({ projectId, askId, event } = onInputFocusChange);
  const tmp4 = useConjureRemixSettingsRequestDefault(projectId, event, askId);
  if ("voice_channel_pin" === event.type) {
    const obj2 = { projectId };
    let tmp8Result = React3(ConjureVoiceChannelPinCardDefault, obj2);
  } else {
    const obj3 = { variant: "body-md/normal", color: "text-default", children: tmp3 };
    items = [React3(Text_Text.Text, obj3)];
    let tmp10Result = null;
    if (null != tmp4) {
      const obj = {
        projectId,
        kind: "settings",
        request: tmp4.request,
        askId,
        onInputFocusChange: onInputFocusChange.onInputFocusChange,
      };
      tmp10Result = React3(ConjureSetupAskCardDefault, obj);
    }
    const obj4 = { children: null };
    items[1] = tmp10Result;
    obj4.children = items;
    tmp8Result = hasOwnProperty(React4, obj4);
  }
  return tmp8Result;
}
