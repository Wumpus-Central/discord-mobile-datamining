// discord_app/modules/chat_input/native/guard/ChatInputGuardReturnToGameProfile.tsx
import nativeDefault from "../../../../../discord_common/js/packages/tokens/native.tsx";
import util from "../../../../intl/index.native.tsx";
import AvatarUtils from "../../../../utils/AvatarUtils.tsx";
import ArrowSmallLeftIcon from "../../../../design/components/Icon/native/redesign/generated/ArrowSmallLeftIcon.tsx";
import ChatInputGuardDefault from "ChatInputGuard.tsx";
import noop from "../../../../../_runtime/metro/00019__.js";

require = fn;
const Image = fn(17).Image;
const jsx = fn(21).jsx;
const createStyles = fn(4560);
let obj = { icon: null };
let size = { height: 40, width: 40, resizeMode: "contain", borderRadius: nativeDefault.radii.md };
obj.icon = size;
let closure_5 = createStyles.createStyles(obj);
size = fn(2);
const result = size.fileFinishedImporting("modules/chat_input/native/guard/ChatInputGuardReturnToGameProfile.tsx");

export default noop.memo(function ChatInputGuardReturnToGameProfile(pendingGameProfileReturn) {
  let tmp2Result;
  const tmp = closure_5();
  if (null != pendingGameProfileReturn.pendingGameProfileReturn.gameIconUrl) {
    let obj = { style: tmp.icon, source: null };
    let obj1 = AvatarUtils;
    obj.source = obj1.makeSource(pendingGameProfileReturn.gameIconUrl);
    tmp2Result = tmp2(Image, obj);
  }
  obj = {
    type: "simple-action",
    icon: tmp2Result,
    message: null,
    actionLabel: null,
    actionIcon: null,
    actionOnPress: null,
  };
  const intl = util.intl;
  obj = { gameName: pendingGameProfileReturn.gameName };
  obj.message = intl.format(util.t.HRHaSF, obj);
  const intl2 = util.intl;
  obj.actionLabel = intl2.string(util.t.DjifDP);
  obj1 = { color: nativeDefault.colors.WHITE };
  obj.actionIcon = jsx(ArrowSmallLeftIcon.ArrowSmallLeftIcon, { color: nativeDefault.colors.WHITE });
  obj.actionOnPress = pendingGameProfileReturn.pendingGameProfileReturn.onReturnToGameProfile;
  return jsx(ChatInputGuardDefault, { gameName: pendingGameProfileReturn.gameName });
});
