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
const createStyles = fn(4722);
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
    const obj = { style: tmp.icon, source: AvatarUtils.makeSource(pendingGameProfileReturn.gameIconUrl) };
    tmp2Result = <Image style={tmp.icon} source={AvatarUtils.makeSource(pendingGameProfileReturn.gameIconUrl)} />;
  }
  const obj3 = {
    type: "simple-action",
    icon: tmp2Result,
    message: null,
    actionLabel: null,
    actionIcon: null,
    actionOnPress: null,
  };
  const intl = util.intl;
  obj3.message = intl.format(util.t.HRHaSF, {
    gameName: pendingGameProfileReturn.pendingGameProfileReturn.pendingGameProfileReturn.gameName,
  });
  const intl2 = util.intl;
  obj3.actionLabel = intl2.string(util.t.DjifDP);
  const obj4 = { gameName: pendingGameProfileReturn.pendingGameProfileReturn.gameName };
  obj3.actionIcon = jsx(ArrowSmallLeftIcon.ArrowSmallLeftIcon, { color: nativeDefault.colors.WHITE });
  obj3.actionOnPress = pendingGameProfileReturn.pendingGameProfileReturn.onReturnToGameProfile;
  return (
    <tmp5
      type="simple-action"
      icon={tmp2Result}
      message={null}
      actionLabel={null}
      actionIcon={null}
      actionOnPress={null}
    />
  );
});
