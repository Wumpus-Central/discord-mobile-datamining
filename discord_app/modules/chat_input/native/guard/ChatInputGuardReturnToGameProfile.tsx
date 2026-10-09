// === Module 12128: ChatInputGuardReturnToGameProfile ===

// Module 12128 (ChatInputGuardReturnToGameProfile)
import c from "c" /* 576 */;
import nativeDefault from "native" /* 587 */;
import util from "util" /* 1126 */;
import AvatarUtils from "AvatarUtils" /* 1415 */;
import FastImageDefault from "FastImage" /* 6163 */;
import ArrowSmallLeftIcon from "ArrowSmallLeftIcon" /* 10690 */;
import ChatInputGuardDefault from "ChatInputGuard" /* 12122 */;
import noop from "module_19" /* 19 */;

require = fn;
const jsx = fn(21).jsx;
const createStyles = fn(5091);
let obj = { icon: null };
let size = { height: 40, width: 40, resizeMode: "contain", borderRadius: nativeDefault.radii.md };
obj.icon = size;
let closure_4 = createStyles.createStyles(obj);
const ReactCompilerGating = fn(558);
size = fn(2);
const result = size.fileFinishedImporting("modules/chat_input/native/guard/ChatInputGuardReturnToGameProfile.tsx");

export default noop.memo(ReactCompilerGating.isReactCompilerEnabled() ? (function ChatInputGuardReturnToGameProfile(pendingGameProfileReturn) {
  const cResult = c.c(11);
  const tmp4 = closure_4();
  if (cResult[0] === pendingGameProfileReturn.pendingGameProfileReturn.gameIconUrl) {
    if (cResult[1] === tmp4) {
      let tmp5 = cResult[2];
    }
    if (cResult[3] !== pendingGameProfileReturn.gameName) {
      const intl = util.intl;
      const obj2 = { gameName: pendingGameProfileReturn.gameName };
      const formatResult = intl.format(util.t.HRHaSF, obj2);
      cResult[3] = pendingGameProfileReturn.gameName;
      cResult[4] = formatResult;
      let tmp10 = formatResult;
    } else {
      tmp10 = cResult[4];
    }
    const _Symbol = Symbol;
    if (cResult[5] === Symbol.for("react.memo_cache_sentinel")) {
      const intl2 = util.intl;
      const stringResult = intl2.string(util.t.DjifDP);
      const obj3 = { color: nativeDefault.colors.WHITE };
      const tmp18 = jsx(ArrowSmallLeftIcon.ArrowSmallLeftIcon, { color: nativeDefault.colors.WHITE });
      cResult[5] = stringResult;
      cResult[6] = tmp18;
      let tmp14 = tmp18;
      let tmp13 = stringResult;
    } else {
      tmp13 = cResult[5];
      tmp14 = cResult[6];
    }
    if (cResult[7] === pendingGameProfileReturn.onReturnToGameProfile) {
      if (cResult[8] === tmp5) {
        if (cResult[9] === tmp10) {
          let tmp19 = cResult[10];
        }
        return tmp19;
      }
    }
    const obj4 = { type: "simple-action", icon: tmp5, message: tmp10, actionLabel: tmp13, actionIcon: tmp14, actionOnPress: pendingGameProfileReturn.onReturnToGameProfile };
    const tmp22 = jsx(ChatInputGuardDefault, { type: "simple-action", icon: tmp5, message: tmp10, actionLabel: tmp13, actionIcon: tmp14, actionOnPress: pendingGameProfileReturn.onReturnToGameProfile });
    cResult[7] = pendingGameProfileReturn.onReturnToGameProfile;
    cResult[8] = tmp5;
    cResult[9] = tmp10;
    cResult[10] = tmp22;
    tmp19 = tmp22;
  }
  let tmp6;
  if (null != pendingGameProfileReturn.pendingGameProfileReturn.gameIconUrl) {
    const obj5 = { style: tmp4.icon, source: null };
    obj5.source = AvatarUtils.makeSource(pendingGameProfileReturn.gameIconUrl);
    tmp6 = <tmp9 style={tmp4.icon} source={null} />;
    const tmpResult = AvatarUtils;
  }
  cResult[0] = pendingGameProfileReturn.pendingGameProfileReturn.gameIconUrl;
  cResult[1] = tmp4;
  cResult[2] = tmp6;
  tmp5 = tmp6;
}) : (function ChatInputGuardReturnToGameProfile(pendingGameProfileReturn) {
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
}));