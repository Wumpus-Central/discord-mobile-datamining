// discord_app/modules/vibegrations/native/VibegrationsRepliedMessage.tsx
import nativeDefault from "../../../../discord_common/js/packages/tokens/native.tsx";
import util from "../../../intl/index.native.tsx";
import native from "../../../design/void/native.tsx";
import _modDef3591 from "../intl/VibegrationsUntranslated.messages.js";
import UserUtils from "../../../utils/UserUtils.tsx";
import Text_Text from "../../../design/components/Text/native/Text.tsx";
import VibegrationsMessageAuthor from "VibegrationsMessageAuthor.tsx";
import noop from "../../../../_runtime/metro/00019__.js";

require = fn;
get_ActivityIndicator = fn(17);
({ Pressable: c3, View: closure_4 } = get_ActivityIndicator);
const jsxProd = fn(21);
({ jsx: hasOwnProperty, jsxs: metroRequire } = jsxProd);
const diff = fn(16729).MESSAGE_EDGE_INSET + fn(16729).MESSAGE_AVATAR_SIZE / 2 - 1;
const diff1 = fn(16729).MESSAGE_CONTENT_INSET - 4 - diff;
const createStyles = fn(4639);
let obj2 = {
  root: {
    marginLeft: diff - fn(16729).MESSAGE_CONTENT_INSET,
    paddingLeft: diff1 + 4,
    height: 20,
    flexDirection: "row",
    alignItems: "flex-start",
  },
  spine: null,
  avatar: null,
  name: null,
  content: null,
};
const rect = {
  position: "absolute",
  left: 0,
  top: 9,
  bottom: 0,
  width: diff1,
  borderTopWidth: 2,
  borderLeftWidth: 2,
  borderColor: nativeDefault.colors.SPINE_DEFAULT,
  borderTopLeftRadius: Math.round(0.25 * diff1),
};
obj2.spine = rect;
obj2.avatar = { marginRight: 4 };
obj2.name = { flexShrink: 0, marginRight: 4, maxWidth: "40%" };
obj2.content = { flex: 1 };
let closure_7 = createStyles.createStyles(obj2);
const size = fn(2);
const result = size.fileFinishedImporting("modules/vibegrations/native/VibegrationsRepliedMessage.tsx");

export default function VibegrationsRepliedMessage(arg0) {
  ({ replied, onJump } = arg0);
  const tmp = closure_7();
  const messageAuthorUser = VibegrationsMessageAuthor.useMessageAuthorUser(replied.userId);
  let str = UserUtils.useName(messageAuthorUser);
  if (str == null) {
    str = "";
  }
  const trimmed = replied.content.replace(/\s+/g, " ").trim();
  const obj3 = {
    style: tmp.root,
    onPress: onJump,
    disabled: null == onJump,
    accessibilityRole: "button",
    accessibilityLabel: null,
    children: null,
  };
  const intl = util.intl;
  obj3.accessibilityLabel = intl.formatToPlainString(_modDef3591.loFt7s, { name: str, content: trimmed });
  const items = [hasOwnProperty(React4, { style: tmp.spine }), , ,];
  let tmp8Result = null;
  if (null != messageAuthorUser) {
    const obj5 = { style: tmp.avatar, children: null };
    const obj6 = { userId: replied.userId, size: native.AvatarSizes.SIZE_16 };
    obj5.children = hasOwnProperty(VibegrationsMessageAuthor.VibegrationsUserAvatar, obj6);
    tmp8Result = hasOwnProperty(React4, obj5);
  }
  items[1] = tmp8Result;
  items[2] = hasOwnProperty(Text_Text.Text, {
    variant: "text-xs/semibold",
    color: "text-default",
    style: tmp.name,
    lineClamp: 1,
    children: str,
  });
  items[3] = hasOwnProperty(Text_Text.Text, {
    variant: "text-xs/medium",
    color: "interactive-text-default",
    style: tmp.content,
    lineClamp: 1,
    children: trimmed,
  });
  obj3.children = items;
  return timestampProducer(React3, obj3);
}
export const REPLY_PREVIEW_HEIGHT = 20;
