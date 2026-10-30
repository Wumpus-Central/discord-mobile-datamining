// === Module 13977: ChatInputGuardReturnToGameProfile ===

// Module 13977 (ChatInputGuardReturnToGameProfile)
import nativeDefault from "native" /* 575 */;
import util from "util" /* 1114 */;
import AvatarUtils from "AvatarUtils" /* 1410 */;
import FastImageDefault from "FastImage" /* 5712 */;
import ArrowSmallLeftIcon from "ArrowSmallLeftIcon" /* 10881 */;
import ChatInputGuardDefault from "ChatInputGuard" /* 13971 */;
import noop from "module_19" /* 19 */;

require = fn;
const jsx = fn(21).jsx;
const createStyles = fn(5009);
let obj = { icon: null };
let size = { height: 40, width: 40, resizeMode: "contain", borderRadius: nativeDefault.radii.md };
obj.icon = size;
let closure_4 = createStyles.createStyles(obj);
size = fn(2);
const result = size.fileFinishedImporting("modules/chat_input/native/guard/ChatInputGuardReturnToGameProfile.tsx");

export default noop.memo(function ChatInputGuardReturnToGameProfile(pendingGameProfileReturn) {
  let tmp2Result;
  const tmp = closure_4();
  if (null != pendingGameProfileReturn.pendingGameProfileReturn.gameIconUrl) {
    const obj = { style: tmp.icon, source: null };
    const tmp3Result = FastImageDefault;
    obj.source = AvatarUtils.makeSource(pendingGameProfileReturn.gameIconUrl);
    tmp2Result = <tmp3Result style={tmp.icon} source={null} />;
  }
  const obj3 = { type: "simple-action", icon: tmp2Result, message: null, actionLabel: null, actionIcon: null, actionOnPress: null };
  const intl = util.intl;
  obj3.message = intl.format(util.t.HRHaSF, { gameName: pendingGameProfileReturn.pendingGameProfileReturn.pendingGameProfileReturn.gameName });
  const intl2 = util.intl;
  obj3.actionLabel = intl2.string(util.t.DjifDP);
  const obj4 = { gameName: pendingGameProfileReturn.pendingGameProfileReturn.gameName };
  obj3.actionIcon = jsx(ArrowSmallLeftIcon.ArrowSmallLeftIcon, { color: nativeDefault.colors.WHITE });
  obj3.actionOnPress = pendingGameProfileReturn.pendingGameProfileReturn.onReturnToGameProfile;
  return <tmp5 type="simple-action" icon={tmp2Result} message={null} actionLabel={null} actionIcon={null} actionOnPress={null} />;
});