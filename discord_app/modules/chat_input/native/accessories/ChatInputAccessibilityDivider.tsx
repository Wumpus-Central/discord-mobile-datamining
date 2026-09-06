// discord_app/modules/chat_input/native/accessories/ChatInputAccessibilityDivider.tsx
import util from "../../../../intl/index.native.tsx";
import PlatformUtils from "../../../../utils/PlatformUtils.tsx";
import useIsScreenReaderEnabled from "../../../a11y/native/useIsScreenReaderEnabled.native.tsx";
import noop from "../../../../../_runtime/metro/00019__.js";

require = fn;
get_ActivityIndicator = fn(17);
({ StyleSheet: c2, View: c3 } = get_ActivityIndicator);
const jsx = fn(21).jsx;
const size = fn(2);
const result = size.fileFinishedImporting("modules/chat_input/native/accessories/ChatInputAccessibilityDivider.tsx");

export const ChatInputAccessibilityDivider = noop.memo(() => {
  let obj = useIsScreenReaderEnabled;
  let tmp3 = null;
  if (obj.useIsScreenReaderEnabled()) {
    tmp3 = null;
    if (!tmpResult.isAndroid()) {
      obj = {
        nativeID: "chat-input-accessibility-divider",
        accessible: true,
        accessibilityLabel: null,
        accessibilityRole: "header",
        style: null,
      };
      const intl = util.intl;
      obj.accessibilityLabel = intl.string(util.t["uKZtC/"]);
      const items = [absoluteFill.absoluteFill, { height: 1 }];
      obj.style = items;
      tmp3 = (
        <React3
          nativeID="chat-input-accessibility-divider"
          accessible
          accessibilityLabel={null}
          accessibilityRole="header"
          style={null}
        />
      );
    }
    tmpResult = PlatformUtils;
  }
  return tmp3;
});
