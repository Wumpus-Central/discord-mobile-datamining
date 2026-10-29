// === Module 15116: VoiceMemberUser ===

// Module 15116 (VoiceMemberUser)
import nativeDefault from "native" /* 587 */;
import util from "util" /* 1125 */;
import native from "native" /* 1199 */;
import UserUtilsDefault from "UserUtils" /* 5059 */;
import NavigationRouteUtils from "NavigationRouteUtils" /* 5187 */;
import ActionSheetActionCreatorsDefault from "ActionSheetActionCreators" /* 5247 */;
import Text_Text from "Text/Text" /* 5271 */;
import useIsSpeakingDefault from "useIsSpeaking" /* 6839 */;
import CallActionCreatorsDefault from "CallActionCreators" /* 7473 */;
import StreamerApplicationSelectors from "StreamerApplicationSelectors" /* 7869 */;
import PrivateChannelCallUtils from "PrivateChannelCallUtils" /* 7925 */;
import _modDef11541 from "module_11541" /* 11541 */;
import _modDef15117 from "module_15117" /* 15117 */;
import _modDef15118 from "module_15118" /* 15118 */;
import _modDef15119 from "module_15119" /* 15119 */;
import _modDef15120 from "module_15120" /* 15120 */;
import _modDef15121 from "module_15121" /* 15121 */;
import _modDef15122 from "module_15122" /* 15122 */;
import _objectWithoutProperties from "_objectWithoutProperties" /* 109 */;
import noop from "module_19" /* 19 */;
import SoundboardStore from "SoundboardStore" /* 6046 */;
import ThemeStore from "ThemeStore" /* 1204 */;
import AuthenticationStore from "AuthenticationStore" /* 502 */;
import CallStore from "CallStore" /* 6556 */;
import ChannelStore from "ChannelStore" /* 4857 */;
import GuildMemberStore from "GuildMemberStore" /* 4917 */;
import MediaEngineStore from "MediaEngineStore" /* 2012 */;
import PresenceStore from "PresenceStore" /* 5750 */;

require = fn;
let user = ["user", "name", "channel", "voiceState", "withStream", "isSpectating", "isActionSheet", "onPress"];
get_ActivityIndicator = fn(17);
({ View: hasOwnProperty, Platform } = get_ActivityIndicator);
const Fonts = fn(1084).Fonts;
const jsxProd = fn(21);
({ jsx: closure_14, jsxs: closure_15, Fragment: closure_16 } = jsxProd);
let createStyles = fn(5005);
let obj = { row: { flexDirection: "row" }, voiceStatusIcon: { tintColor: nativeDefault.colors.INTERACTIVE_TEXT_DEFAULT, marginLeft: 8 }, voiceStatusIconMargin: { marginLeft: 8 }, streamPreview: { marginHorizontal: 16, marginBottom: 16, alignItems: "center", flex: 1 }, ringingButton: null, ringingButtonLabel: null, autoDisabledVideo: null, autoDisabledVideoLabel: null };
let obj3 = { tintColor: nativeDefault.colors.INTERACTIVE_TEXT_DEFAULT, marginLeft: 8 };
obj.ringingButton = { backgroundColor: nativeDefault.colors.BACKGROUND_MOD_MUTED, borderRadius: nativeDefault.radii.xs, height: 32, alignItems: "center", justifyContent: "center" };
let obj4 = { backgroundColor: nativeDefault.colors.BACKGROUND_MOD_MUTED, borderRadius: nativeDefault.radii.xs, height: 32, alignItems: "center", justifyContent: "center" };
obj.ringingButtonLabel = { fontFamily: Fonts.PRIMARY_SEMIBOLD, fontSize: 14, lineHeight: 18, marginHorizontal: 16, color: nativeDefault.colors.INTERACTIVE_TEXT_ACTIVE };
obj.autoDisabledVideo = { flexDirection: "row", alignItems: "center" };
obj.autoDisabledVideoLabel = { marginLeft: 4 };
let closure_17 = createStyles.createStyles(obj);
createStyles = fn(5005);
let obj6 = { labelCallScreen: null, voiceStatusIcon: null, ringingButton: null, ringingButtonLabel: null };
let obj5 = { fontFamily: Fonts.PRIMARY_SEMIBOLD, fontSize: 14, lineHeight: 18, marginHorizontal: 16, color: nativeDefault.colors.INTERACTIVE_TEXT_ACTIVE };
obj6.labelCallScreen = { fontFamily: Fonts.PRIMARY_MEDIUM, color: nativeDefault.colors.MOBILE_TEXT_HEADING_PRIMARY };
let obj8 = { fontFamily: Fonts.PRIMARY_MEDIUM, color: nativeDefault.colors.MOBILE_TEXT_HEADING_PRIMARY };
obj6.voiceStatusIcon = { tintColor: nativeDefault.colors.INTERACTIVE_TEXT_DEFAULT, marginLeft: 8 };
const obj9 = { tintColor: nativeDefault.colors.INTERACTIVE_TEXT_DEFAULT, marginLeft: 8 };
obj6.ringingButton = { backgroundColor: nativeDefault.colors.BACKGROUND_MOD_MUTED, borderRadius: nativeDefault.radii.xs, height: 32, alignItems: "center", justifyContent: "center" };
let obj10 = { backgroundColor: nativeDefault.colors.BACKGROUND_MOD_MUTED, borderRadius: nativeDefault.radii.xs, height: 32, alignItems: "center", justifyContent: "center" };
obj6.ringingButtonLabel = { fontFamily: Fonts.PRIMARY_SEMIBOLD, fontSize: 14, lineHeight: 18, marginHorizontal: 16, color: nativeDefault.colors.INTERACTIVE_TEXT_ACTIVE };
let closure_18 = createStyles.createStyles(obj6);
let ReactCompilerGating = fn(558);
let closure_19 = noop.memo(ReactCompilerGating.isReactCompilerEnabled() ? (function VoiceMemberUserRow(user) {
  const cResult = require("c").c(87);
  if (cResult[0] !== user) {
    user = user.user;
    ({ name, channel } = user);
    _require = channel;
    ({ voiceState, withStream, isSpectating } = user);
    importDefault = isSpectating;
    ({ isActionSheet, onPress } = user);
    dependencyMap = onPress;
    const tmp15 = _objectWithoutProperties(user, user);
    cResult[0] = user;
    cResult[1] = channel;
    cResult[2] = isActionSheet;
    cResult[3] = isSpectating;
    cResult[4] = name;
    cResult[5] = onPress;
    cResult[6] = tmp15;
    cResult[7] = voiceState;
    cResult[8] = withStream;
    cResult[9] = user;
    let tmp10 = voiceState;
    let tmp5 = isActionSheet;
  } else {
    _require = cResult[1];
    tmp5 = cResult[2];
    importDefault = cResult[3];
    dependencyMap = cResult[5];
    tmp10 = cResult[7];
    user = cResult[9];
  }
  let obj = require("c");
  const tmpResult = require("useLocalSelfMuteDeaf");
  const result = tmpResult.withLocalSelfMuteDeaf(tmp10, require("useLocalSelfMuteDeaf").useLocalSelfMuteDeaf());
  const tmp18 = closure_17();
  _objectWithoutProperties = tmp18;
  const tmpResult6 = require("useLocalSelfMuteDeaf");
  if (cResult[10] === Symbol.for("react.memo_cache_sentinel")) {
    const id = localVideoDisabled.getId();
    cResult[10] = id;
    let tmp20 = id;
  } else {
    tmp20 = cResult[10];
  }
  closure_5 = tmp20;
  if (cResult[11] !== tmp12.id) {
    let obj2 = { userId: tmp12.id };
    cResult[11] = tmp12.id;
    cResult[12] = obj2;
    let tmp23 = obj2;
  } else {
    tmp23 = cResult[12];
  }
  useIsSpeakingDefault(tmp23);
  if (cResult[13] === Symbol.for("react.memo_cache_sentinel")) {
    let items = [stateFromStores1];
    cResult[13] = items;
    let tmp25 = items;
  } else {
    tmp25 = cResult[13];
  }
  if (cResult[14] !== tmp12.id) {
    class U {
      constructor() {
        return closure_6.isUserPlayingSounds(closure_3.id);
      }
    }
    cResult[14] = tmp12.id;
    cResult[15] = U;
  } else {
    class U {
      constructor() {
        return closure_6.isUserPlayingSounds(closure_3.id);
      }
    }
  }
  const tmp19 = closure_18();
  const stateFromStores = require("initialize").useStateFromStores(tmp25, U);
  if (cResult[16] === Symbol.for("react.memo_cache_sentinel")) {
    class U {
      constructor() {
        return closure_6.isUserPlayingSounds(closure_3.id);
      }
    }
    const items1 = [localMute];
    const fn = function k() {
      return localMute.theme;
    };
    cResult[16] = items1;
    cResult[17] = fn;
    let tmp30 = fn;
    const tmp29 = items1;
  } else {
    class U {
      constructor() {
        return closure_6.isUserPlayingSounds(closure_3.id);
      }
    }
    tmp30 = cResult[17];
  }
  const tmpResult7 = require("initialize");
  stateFromStores1 = require("initialize").useStateFromStores(tmp29, tmp30);
  if (cResult[18] === Symbol.for("react.memo_cache_sentinel")) {
    class U {
      constructor() {
        return closure_6.isUserPlayingSounds(closure_3.id);
      }
    }
    const items2 = [localMute];
    cResult[18] = items2;
    const tmp32 = items2;
  } else {
    class U {
      constructor() {
        return closure_6.isUserPlayingSounds(closure_3.id);
      }
    }
  }
  if (cResult[19] !== tmp12.id) {
    class G {
      constructor() {
        tmp = closure_3;
        isVideoEnabledResult = closure_5 === closure_3.id;
        isSelfMuteResult = isVideoEnabledResult;
        if (isVideoEnabledResult) {
          tmp4 = closure_12;
          isSelfMuteResult = closure_12.isSelfMute();
        }
        obj = { isSelfMute: isSelfMuteResult, localMute: closure_12.isLocalMute(tmp.id), localDeaf: null, localVideo: null, localVideoDisabled: null, localVideoAutoDisabled: null };
        isSelfDeafResult = isVideoEnabledResult;
        if (isVideoEnabledResult) {
          tmp6 = closure_12;
          isSelfDeafResult = closure_12.isSelfDeaf();
        }
        obj.localDeaf = isSelfDeafResult;
        if (isVideoEnabledResult) {
          tmp7 = closure_12;
          isVideoEnabledResult = closure_12.isVideoEnabled();
        }
        obj.localVideo = isVideoEnabledResult;
        obj.localVideoDisabled = closure_12.isLocalVideoDisabled(tmp.id);
        obj.localVideoAutoDisabled = closure_12.isLocalVideoAutoDisabled(tmp.id);
        return obj;
      }
    }
    cResult[19] = tmp12.id;
    cResult[20] = G;
  } else {
    class G {
      constructor() {
        tmp = closure_3;
        isVideoEnabledResult = closure_5 === closure_3.id;
        isSelfMuteResult = isVideoEnabledResult;
        if (isVideoEnabledResult) {
          tmp4 = closure_12;
          isSelfMuteResult = closure_12.isSelfMute();
        }
        obj = { isSelfMute: isSelfMuteResult, localMute: closure_12.isLocalMute(tmp.id), localDeaf: null, localVideo: null, localVideoDisabled: null, localVideoAutoDisabled: null };
        isSelfDeafResult = isVideoEnabledResult;
        if (isVideoEnabledResult) {
          tmp6 = closure_12;
          isSelfDeafResult = closure_12.isSelfDeaf();
        }
        obj.localDeaf = isSelfDeafResult;
        if (isVideoEnabledResult) {
          tmp7 = closure_12;
          isVideoEnabledResult = closure_12.isVideoEnabled();
        }
        obj.localVideo = isVideoEnabledResult;
        obj.localVideoDisabled = closure_12.isLocalVideoDisabled(tmp.id);
        obj.localVideoAutoDisabled = closure_12.isLocalVideoAutoDisabled(tmp.id);
        return obj;
      }
    }
  }
  const tmpResult8 = require("initialize");
  const stateFromStoresObject = require("initialize").useStateFromStoresObject(tmp32, G);
  localMute = stateFromStoresObject.localMute;
  ({ localDeaf, localVideo, localVideoDisabled } = stateFromStoresObject);
  const localVideoAutoDisabled = stateFromStoresObject.localVideoAutoDisabled;
  if (cResult[21] === Symbol.for("react.memo_cache_sentinel")) {
    class G {
      constructor() {
        tmp = closure_3;
        isVideoEnabledResult = closure_5 === closure_3.id;
        isSelfMuteResult = isVideoEnabledResult;
        if (isVideoEnabledResult) {
          tmp4 = closure_12;
          isSelfMuteResult = closure_12.isSelfMute();
        }
        obj = { isSelfMute: isSelfMuteResult, localMute: closure_12.isLocalMute(tmp.id), localDeaf: null, localVideo: null, localVideoDisabled: null, localVideoAutoDisabled: null };
        isSelfDeafResult = isVideoEnabledResult;
        if (isVideoEnabledResult) {
          tmp6 = closure_12;
          isSelfDeafResult = closure_12.isSelfDeaf();
        }
        obj.localDeaf = isSelfDeafResult;
        if (isVideoEnabledResult) {
          tmp7 = closure_12;
          isVideoEnabledResult = closure_12.isVideoEnabled();
        }
        obj.localVideo = isVideoEnabledResult;
        obj.localVideoDisabled = closure_12.isLocalVideoDisabled(tmp.id);
        obj.localVideoAutoDisabled = closure_12.isLocalVideoAutoDisabled(tmp.id);
        return obj;
      }
    }
    const items3 = [closure_11];
    cResult[21] = items3;
    const tmp35 = items3;
  } else {
    class G {
      constructor() {
        tmp = closure_3;
        isVideoEnabledResult = closure_5 === closure_3.id;
        isSelfMuteResult = isVideoEnabledResult;
        if (isVideoEnabledResult) {
          tmp4 = closure_12;
          isSelfMuteResult = closure_12.isSelfMute();
        }
        obj = { isSelfMute: isSelfMuteResult, localMute: closure_12.isLocalMute(tmp.id), localDeaf: null, localVideo: null, localVideoDisabled: null, localVideoAutoDisabled: null };
        isSelfDeafResult = isVideoEnabledResult;
        if (isVideoEnabledResult) {
          tmp6 = closure_12;
          isSelfDeafResult = closure_12.isSelfDeaf();
        }
        obj.localDeaf = isSelfDeafResult;
        if (isVideoEnabledResult) {
          tmp7 = closure_12;
          isVideoEnabledResult = closure_12.isVideoEnabled();
        }
        obj.localVideo = isVideoEnabledResult;
        obj.localVideoDisabled = closure_12.isLocalVideoDisabled(tmp.id);
        obj.localVideoAutoDisabled = closure_12.isLocalVideoAutoDisabled(tmp.id);
        return obj;
      }
    }
  }
  if (channel != null) {
    class G {
      constructor() {
        tmp = closure_3;
        isVideoEnabledResult = closure_5 === closure_3.id;
        isSelfMuteResult = isVideoEnabledResult;
        if (isVideoEnabledResult) {
          tmp4 = closure_12;
          isSelfMuteResult = closure_12.isSelfMute();
        }
        obj = { isSelfMute: isSelfMuteResult, localMute: closure_12.isLocalMute(tmp.id), localDeaf: null, localVideo: null, localVideoDisabled: null, localVideoAutoDisabled: null };
        isSelfDeafResult = isVideoEnabledResult;
        if (isVideoEnabledResult) {
          tmp6 = closure_12;
          isSelfDeafResult = closure_12.isSelfDeaf();
        }
        obj.localDeaf = isSelfDeafResult;
        if (isVideoEnabledResult) {
          tmp7 = closure_12;
          isVideoEnabledResult = closure_12.isVideoEnabled();
        }
        obj.localVideo = isVideoEnabledResult;
        obj.localVideoDisabled = closure_12.isLocalVideoDisabled(tmp.id);
        obj.localVideoAutoDisabled = closure_12.isLocalVideoAutoDisabled(tmp.id);
        return obj;
      }
    }
  }
  if (cResult[22] === undefined) {
    class G {
      constructor() {
        tmp = closure_3;
        isVideoEnabledResult = closure_5 === closure_3.id;
        isSelfMuteResult = isVideoEnabledResult;
        if (isVideoEnabledResult) {
          tmp4 = closure_12;
          isSelfMuteResult = closure_12.isSelfMute();
        }
        obj = { isSelfMute: isSelfMuteResult, localMute: closure_12.isLocalMute(tmp.id), localDeaf: null, localVideo: null, localVideoDisabled: null, localVideoAutoDisabled: null };
        isSelfDeafResult = isVideoEnabledResult;
        if (isVideoEnabledResult) {
          tmp6 = closure_12;
          isSelfDeafResult = closure_12.isSelfDeaf();
        }
        obj.localDeaf = isSelfDeafResult;
        if (isVideoEnabledResult) {
          tmp7 = closure_12;
          isVideoEnabledResult = closure_12.isVideoEnabled();
        }
        obj.localVideo = isVideoEnabledResult;
        obj.localVideoDisabled = closure_12.isLocalVideoDisabled(tmp.id);
        obj.localVideoAutoDisabled = closure_12.isLocalVideoAutoDisabled(tmp.id);
        return obj;
      }
    }
    const stateFromStores2 = tmp(504).useStateFromStores(tmp35, fn2);
    c10 = false;
    closure_11 = false;
    if (!localMute) {
      class G {
        constructor() {
          tmp = closure_3;
          isVideoEnabledResult = closure_5 === closure_3.id;
          isSelfMuteResult = isVideoEnabledResult;
          if (isVideoEnabledResult) {
            tmp4 = closure_12;
            isSelfMuteResult = closure_12.isSelfMute();
          }
          obj = { isSelfMute: isSelfMuteResult, localMute: closure_12.isLocalMute(tmp.id), localDeaf: null, localVideo: null, localVideoDisabled: null, localVideoAutoDisabled: null };
          isSelfDeafResult = isVideoEnabledResult;
          if (isVideoEnabledResult) {
            tmp6 = closure_12;
            isSelfDeafResult = closure_12.isSelfDeaf();
          }
          obj.localDeaf = isSelfDeafResult;
          if (isVideoEnabledResult) {
            tmp7 = closure_12;
            isVideoEnabledResult = closure_12.isVideoEnabled();
          }
          obj.localVideo = isVideoEnabledResult;
          obj.localVideoDisabled = closure_12.isLocalVideoDisabled(tmp.id);
          obj.localVideoAutoDisabled = closure_12.isLocalVideoAutoDisabled(tmp.id);
          return obj;
        }
      }
    }
    localMute = tmp37;
    if (!localVideo) {
      class G {
        constructor() {
          tmp = closure_3;
          isVideoEnabledResult = closure_5 === closure_3.id;
          isSelfMuteResult = isVideoEnabledResult;
          if (isVideoEnabledResult) {
            tmp4 = closure_12;
            isSelfMuteResult = closure_12.isSelfMute();
          }
          obj = { isSelfMute: isSelfMuteResult, localMute: closure_12.isLocalMute(tmp.id), localDeaf: null, localVideo: null, localVideoDisabled: null, localVideoAutoDisabled: null };
          isSelfDeafResult = isVideoEnabledResult;
          if (isVideoEnabledResult) {
            tmp6 = closure_12;
            isSelfDeafResult = closure_12.isSelfDeaf();
          }
          obj.localDeaf = isSelfDeafResult;
          if (isVideoEnabledResult) {
            tmp7 = closure_12;
            isVideoEnabledResult = closure_12.isVideoEnabled();
          }
          obj.localVideo = isVideoEnabledResult;
          obj.localVideoDisabled = closure_12.isLocalVideoDisabled(tmp.id);
          obj.localVideoAutoDisabled = closure_12.isLocalVideoAutoDisabled(tmp.id);
          return obj;
        }
      }
    }
    closure_15 = false;
    let tmp40 = tmp37;
    if (null != result) {
      class G {
        constructor() {
          tmp = closure_3;
          isVideoEnabledResult = closure_5 === closure_3.id;
          isSelfMuteResult = isVideoEnabledResult;
          if (isVideoEnabledResult) {
            tmp4 = closure_12;
            isSelfMuteResult = closure_12.isSelfMute();
          }
          obj = { isSelfMute: isSelfMuteResult, localMute: closure_12.isLocalMute(tmp.id), localDeaf: null, localVideo: null, localVideoDisabled: null, localVideoAutoDisabled: null };
          isSelfDeafResult = isVideoEnabledResult;
          if (isVideoEnabledResult) {
            tmp6 = closure_12;
            isSelfDeafResult = closure_12.isSelfDeaf();
          }
          obj.localDeaf = isSelfDeafResult;
          if (isVideoEnabledResult) {
            tmp7 = closure_12;
            isVideoEnabledResult = closure_12.isVideoEnabled();
          }
          obj.localVideo = isVideoEnabledResult;
          obj.localVideoDisabled = closure_12.isLocalVideoDisabled(tmp.id);
          obj.localVideoAutoDisabled = closure_12.isLocalVideoAutoDisabled(tmp.id);
          return obj;
        }
      }
      c10 = true;
      if (tmp16) {
        class G {
          constructor() {
            tmp = closure_3;
            isVideoEnabledResult = closure_5 === closure_3.id;
            isSelfMuteResult = isVideoEnabledResult;
            if (isVideoEnabledResult) {
              tmp4 = closure_12;
              isSelfMuteResult = closure_12.isSelfMute();
            }
            obj = { isSelfMute: isSelfMuteResult, localMute: closure_12.isLocalMute(tmp.id), localDeaf: null, localVideo: null, localVideoDisabled: null, localVideoAutoDisabled: null };
            isSelfDeafResult = isVideoEnabledResult;
            if (isVideoEnabledResult) {
              tmp6 = closure_12;
              isSelfDeafResult = closure_12.isSelfDeaf();
            }
            obj.localDeaf = isSelfDeafResult;
            if (isVideoEnabledResult) {
              tmp7 = closure_12;
              isVideoEnabledResult = closure_12.isVideoEnabled();
            }
            obj.localVideo = isVideoEnabledResult;
            obj.localVideoDisabled = closure_12.isLocalVideoDisabled(tmp.id);
            obj.localVideoAutoDisabled = closure_12.isLocalVideoAutoDisabled(tmp.id);
            return obj;
          }
        }
      }
      closure_11 = tmp16;
      if (!tmp37) {
        class G {
          constructor() {
            tmp = closure_3;
            isVideoEnabledResult = closure_5 === closure_3.id;
            isSelfMuteResult = isVideoEnabledResult;
            if (isVideoEnabledResult) {
              tmp4 = closure_12;
              isSelfMuteResult = closure_12.isSelfMute();
            }
            obj = { isSelfMute: isSelfMuteResult, localMute: closure_12.isLocalMute(tmp.id), localDeaf: null, localVideo: null, localVideoDisabled: null, localVideoAutoDisabled: null };
            isSelfDeafResult = isVideoEnabledResult;
            if (isVideoEnabledResult) {
              tmp6 = closure_12;
              isSelfDeafResult = closure_12.isSelfDeaf();
            }
            obj.localDeaf = isSelfDeafResult;
            if (isVideoEnabledResult) {
              tmp7 = closure_12;
              isVideoEnabledResult = closure_12.isVideoEnabled();
            }
            obj.localVideo = isVideoEnabledResult;
            obj.localVideoDisabled = closure_12.isLocalVideoDisabled(tmp.id);
            obj.localVideoAutoDisabled = closure_12.isLocalVideoAutoDisabled(tmp.id);
            return obj;
          }
        }
      }
      localMute = tmp41;
      if (!localDeaf) {
        class G {
          constructor() {
            tmp = closure_3;
            isVideoEnabledResult = closure_5 === closure_3.id;
            isSelfMuteResult = isVideoEnabledResult;
            if (isVideoEnabledResult) {
              tmp4 = closure_12;
              isSelfMuteResult = closure_12.isSelfMute();
            }
            obj = { isSelfMute: isSelfMuteResult, localMute: closure_12.isLocalMute(tmp.id), localDeaf: null, localVideo: null, localVideoDisabled: null, localVideoAutoDisabled: null };
            isSelfDeafResult = isVideoEnabledResult;
            if (isVideoEnabledResult) {
              tmp6 = closure_12;
              isSelfDeafResult = closure_12.isSelfDeaf();
            }
            obj.localDeaf = isSelfDeafResult;
            if (isVideoEnabledResult) {
              tmp7 = closure_12;
              isVideoEnabledResult = closure_12.isVideoEnabled();
            }
            obj.localVideo = isVideoEnabledResult;
            obj.localVideoDisabled = closure_12.isLocalVideoDisabled(tmp.id);
            obj.localVideoAutoDisabled = closure_12.isLocalVideoAutoDisabled(tmp.id);
            return obj;
          }
        }
      }
      localDeaf = tmp42;
      if (!localVideo) {
        class G {
          constructor() {
            tmp = closure_3;
            isVideoEnabledResult = closure_5 === closure_3.id;
            isSelfMuteResult = isVideoEnabledResult;
            if (isVideoEnabledResult) {
              tmp4 = closure_12;
              isSelfMuteResult = closure_12.isSelfMute();
            }
            obj = { isSelfMute: isSelfMuteResult, localMute: closure_12.isLocalMute(tmp.id), localDeaf: null, localVideo: null, localVideoDisabled: null, localVideoAutoDisabled: null };
            isSelfDeafResult = isVideoEnabledResult;
            if (isVideoEnabledResult) {
              tmp6 = closure_12;
              isSelfDeafResult = closure_12.isSelfDeaf();
            }
            obj.localDeaf = isSelfDeafResult;
            if (isVideoEnabledResult) {
              tmp7 = closure_12;
              isVideoEnabledResult = closure_12.isVideoEnabled();
            }
            obj.localVideo = isVideoEnabledResult;
            obj.localVideoDisabled = closure_12.isLocalVideoDisabled(tmp.id);
            obj.localVideoAutoDisabled = closure_12.isLocalVideoAutoDisabled(tmp.id);
            return obj;
          }
        }
      }
      localVideo = tmp43;
      const sessionId = result.sessionId;
      let tmp44 = null != sessionId && tmp20 === tmp12.id;
      if (tmp44) {
        class G {
          constructor() {
            tmp = closure_3;
            isVideoEnabledResult = closure_5 === closure_3.id;
            isSelfMuteResult = isVideoEnabledResult;
            if (isVideoEnabledResult) {
              tmp4 = closure_12;
              isSelfMuteResult = closure_12.isSelfMute();
            }
            obj = { isSelfMute: isSelfMuteResult, localMute: closure_12.isLocalMute(tmp.id), localDeaf: null, localVideo: null, localVideoDisabled: null, localVideoAutoDisabled: null };
            isSelfDeafResult = isVideoEnabledResult;
            if (isVideoEnabledResult) {
              tmp6 = closure_12;
              isSelfDeafResult = closure_12.isSelfDeaf();
            }
            obj.localDeaf = isSelfDeafResult;
            if (isVideoEnabledResult) {
              tmp7 = closure_12;
              isVideoEnabledResult = closure_12.isVideoEnabled();
            }
            obj.localVideo = isVideoEnabledResult;
            obj.localVideoDisabled = closure_12.isLocalVideoDisabled(tmp.id);
            obj.localVideoAutoDisabled = closure_12.isLocalVideoAutoDisabled(tmp.id);
            return obj;
          }
        }
        tmp44 = sessionId !== localVideoDisabled.getSessionId();
      }
      closure_15 = tmp44;
      tmp40 = tmp41;
    }
    const tmp45 = tmp5 ? tmp19.voiceStatusIcon : tmp18.voiceStatusIcon;
    const style = tmp45;
    if (cResult[25] === localMute) {
      class G {
        constructor() {
          tmp = closure_3;
          isVideoEnabledResult = closure_5 === closure_3.id;
          isSelfMuteResult = isVideoEnabledResult;
          if (isVideoEnabledResult) {
            tmp4 = closure_12;
            isSelfMuteResult = closure_12.isSelfMute();
          }
          obj = { isSelfMute: isSelfMuteResult, localMute: closure_12.isLocalMute(tmp.id), localDeaf: null, localVideo: null, localVideoDisabled: null, localVideoAutoDisabled: null };
          isSelfDeafResult = isVideoEnabledResult;
          if (isVideoEnabledResult) {
            tmp6 = closure_12;
            isSelfDeafResult = closure_12.isSelfDeaf();
          }
          obj.localDeaf = isSelfDeafResult;
          if (isVideoEnabledResult) {
            tmp7 = closure_12;
            isVideoEnabledResult = closure_12.isVideoEnabled();
          }
          obj.localVideo = isVideoEnabledResult;
          obj.localVideoDisabled = closure_12.isLocalVideoDisabled(tmp.id);
          obj.localVideoAutoDisabled = closure_12.isLocalVideoAutoDisabled(tmp.id);
          return obj;
        }
      }
    }
    function renderMicIcon() {
      if (localMute) {
        if (obj.isThemeDark(stateFromStores1)) {
          let tmp5Result = _modDef15117;
        } else {
          tmp5Result = _modDef15118;
        }
        const obj2 = { size: native.Icon.Sizes.REFRESH_SMALL_16, source: tmp5Result, style: closure_4.voiceStatusIconMargin, color: style.tintColor, disableColor: localMute };
        return closure_2_14(native.Icon, obj2);
      } else {
        return null;
      }
    }
    cResult[25] = localMute;
    cResult[26] = tmp40;
    cResult[27] = tmp18;
    cResult[28] = stateFromStores1;
    cResult[29] = tmp45;
    cResult[30] = renderMicIcon;
    const tmpResult10 = tmp(504);
  }
  if (channel != null) {
    class G {
      constructor() {
        tmp = closure_3;
        isVideoEnabledResult = closure_5 === closure_3.id;
        isSelfMuteResult = isVideoEnabledResult;
        if (isVideoEnabledResult) {
          tmp4 = closure_12;
          isSelfMuteResult = closure_12.isSelfMute();
        }
        obj = { isSelfMute: isSelfMuteResult, localMute: closure_12.isLocalMute(tmp.id), localDeaf: null, localVideo: null, localVideoDisabled: null, localVideoAutoDisabled: null };
        isSelfDeafResult = isVideoEnabledResult;
        if (isVideoEnabledResult) {
          tmp6 = closure_12;
          isSelfDeafResult = closure_12.isSelfDeaf();
        }
        obj.localDeaf = isSelfDeafResult;
        if (isVideoEnabledResult) {
          tmp7 = closure_12;
          isVideoEnabledResult = closure_12.isVideoEnabled();
        }
        obj.localVideo = isVideoEnabledResult;
        obj.localVideoDisabled = closure_12.isLocalVideoDisabled(tmp.id);
        obj.localVideoAutoDisabled = closure_12.isLocalVideoAutoDisabled(tmp.id);
        return obj;
      }
    }
  }
  fn2 = function q() {
    guild_id = undefined;
    if (guild_id != null) {
      guild_id = guild_id.guild_id;
    }
    return GuildMemberStore.isGuestOrLurker(guild_id, user.id);
  };
  cResult[22] = undefined;
  cResult[23] = tmp12.id;
  cResult[24] = fn2;
  const tmpResult9 = require("initialize");
}) : (function VoiceMemberUserRow(user) {
  user = user.user;
  ({ name, channel } = user);
  let flag = user.withStream;
  if (flag === undefined) {
    flag = true;
  }
  ({ isActionSheet, onPress: dependencyMap } = user);
  const merged = Object.assign(user, Object.assign({ user: 0, name: 0, channel: 0, voiceState: 0, withStream: 0, isSpectating: 0, isActionSheet: 0, onPress: 0 }));
  let obj = user(9203);
  const result = obj.withLocalSelfMuteDeaf(user.voiceState, user(9203).useLocalSelfMuteDeaf());
  const tmp4 = closure_17();
  const tmp5 = closure_18();
  const id = AuthenticationStore.getId();
  const obj2 = user(9203);
  const obj3 = { userId: user.id };
  const tmp8 = channel(6839)({ userId: user.id });
  const items = [SoundboardStore];
  const stateFromStores = user(504).useStateFromStores(items, () => SoundboardStore.isUserPlayingSounds(user.id));
  const obj6 = user(504);
  const items1 = [ThemeStore];
  const stateFromStores1 = user(504).useStateFromStores(items1, () => theme.theme);
  const obj7 = user(504);
  const items2 = [MediaEngineStore];
  const stateFromStoresObject = user(504).useStateFromStoresObject(items2, () => {
    let isVideoEnabledResult = id === user.id;
    let isSelfMuteResult = isVideoEnabledResult;
    if (isVideoEnabledResult) {
      isSelfMuteResult = MediaEngineStore.isSelfMute();
    }
    const obj = { isSelfMute: isSelfMuteResult, localMute: MediaEngineStore.isLocalMute(user.id), localDeaf: null, localVideo: null, localVideoDisabled: null, localVideoAutoDisabled: null };
    let isSelfDeafResult = isVideoEnabledResult;
    if (isVideoEnabledResult) {
      isSelfDeafResult = MediaEngineStore.isSelfDeaf();
    }
    obj.localDeaf = isSelfDeafResult;
    if (isVideoEnabledResult) {
      isVideoEnabledResult = MediaEngineStore.isVideoEnabled();
    }
    obj.localVideo = isVideoEnabledResult;
    obj.localVideoDisabled = MediaEngineStore.isLocalVideoDisabled(user.id);
    obj.localVideoAutoDisabled = MediaEngineStore.isLocalVideoAutoDisabled(user.id);
    return obj;
  });
  ({ localMute, localDeaf, localVideo, localVideoDisabled, isSelfMute, localVideoAutoDisabled } = stateFromStoresObject);
  const obj8 = user(504);
  const items3 = [GuildMemberStore];
  let tmp13 = localMute;
  const stateFromStores2 = user(504).useStateFromStores(items3, () => {
    let guild_id;
    if (channel != null) {
      guild_id = channel.guild_id;
    }
    return GuildMemberStore.isGuestOrLurker(guild_id, user.id);
  });
  if (!localMute) {
    tmp13 = isSelfMute;
  }
  if (!localVideo) {
    localVideo = localVideoDisabled;
  }
  let flag2 = false;
  let tmp14 = localVideo;
  let tmp15 = localDeaf;
  let tmp16 = tmp13;
  let flag3 = false;
  let flag4 = false;
  let flag5 = false;
  if (null != result) {
    if (flag) {
      flag = result.selfStream;
    }
    let isVoiceMutedResult = tmp13;
    if (!tmp13) {
      isVoiceMutedResult = result.isVoiceMuted();
    }
    let isVoiceDeafenedResult = localDeaf;
    if (!localDeaf) {
      isVoiceDeafenedResult = result.isVoiceDeafened();
    }
    let selfVideo = localVideo;
    if (!localVideo) {
      selfVideo = result.selfVideo;
    }
    const sessionId = result.sessionId;
    const tmp19 = null != sessionId && id === user.id && sessionId !== AuthenticationStore.getSessionId();
    flag4 = true;
    flag2 = tmp19;
    tmp14 = selfVideo;
    tmp15 = isVoiceDeafenedResult;
    tmp16 = isVoiceMutedResult;
    flag3 = flag;
    flag5 = tmp19;
  }
  const tmp20 = isActionSheet ? tmp5.voiceStatusIcon : tmp4.voiceStatusIcon;
  const obj5 = {
    onPress() {
      return dependencyMap(user);
    },
    label: name,
    leading: null,
    trailing: null
  };
  const obj10 = { user, guildId: null, size: null, speaking: null, playingSoundboard: null };
  let guild_id;
  if (channel != null) {
    guild_id = channel.guild_id;
  }
  obj10.guildId = guild_id;
  obj10.size = user(1199).AvatarSizes.REFRESH_MEDIUM_32;
  obj10.speaking = tmp8;
  obj10.playingSoundboard = stateFromStores;
  obj5.leading = closure_14(user(1199).Avatar, obj10);
  let tmp24Result = null;
  if (flag4) {
    tmp24Result = null;
    if (!flag2) {
      const obj11 = { style: tmp4.row, children: null };
      let tmp21Result = null;
      if (user.isSpectating) {
        const obj12 = { size: tmp2(1199).Icon.Sizes.REFRESH_SMALL_16, source: channel(15122), style: tmp20 };
        tmp21Result = closure_14(tmp2(1199).Icon, obj12);
      }
      const items4 = [tmp21Result, , , , ];
      if (!tmp16) {
        items4[1] = null;
        let tmp21Result5 = null;
        if (tmp15) {
          const obj13 = { size: tmp2(1199).Icon.Sizes.REFRESH_SMALL_16, source: channel(15119), style: tmp20 };
          tmp21Result5 = closure_14(tmp2(1199).Icon, obj13);
        }
        items4[2] = tmp21Result5;
        if (!tmp14) {
          items4[3] = null;
          let tmp21Result6 = null;
          if (flag3) {
            const obj14 = { style: tmp20 };
            tmp21Result6 = closure_14(tmp2(1199).LiveTag, obj14);
          }
          items4[4] = tmp21Result6;
          obj11.children = items4;
          tmp24Result = closure_15(closure_5, obj11);
        } else {
          if (localVideoDisabled) {
            const obj15 = { size: tmp2(1199).Icon.Sizes.REFRESH_SMALL_16, source: channel(15120), style: tmp4.voiceStatusIconMargin, disableColor: true };
            let obj16 = obj15;
          } else {
            obj16 = { size: tmp2(1199).Icon.Sizes.REFRESH_SMALL_16, source: channel(15121), style: tmp20 };
          }
          closure_14(tmp2(1199).Icon, obj16);
        }
      } else {
        if (tmp2Result.isThemeDark(stateFromStores1)) {
          let tmp7Result = channel(15117);
        } else {
          tmp7Result = channel(15118);
        }
        const obj17 = { size: tmp2(1199).Icon.Sizes.REFRESH_SMALL_16, source: tmp7Result, style: tmp4.voiceStatusIconMargin, color: tmp20.tintColor, disableColor: localMute };
        closure_14(tmp2(1199).Icon, obj17);
        tmp2Result = tmp2(5012);
      }
    }
  }
  obj5.trailing = tmp24Result;
  const obj18 = { disabled: flag5 };
  const merged1 = Object.assign(merged);
  const merged2 = Object.assign(obj5);
  let tmp36 = name;
  if (stateFromStores2) {
    const obj19 = { children: null };
    const items5 = [name, ];
    const obj20 = { variant: "text-md/semibold", lineClamp: 1, color: "status-positive", children: null };
    const intl = tmp2(1125).intl;
    const items6 = ["\u00A0", intl.string(tmp2(1125).t["pFO/Ph"])];
    obj20.children = items6;
    items5[1] = closure_15(tmp2(5271).Text, obj20);
    obj19.children = items5;
    tmp36 = closure_15(closure_16, obj19);
  }
  const obj21 = { text: tmp36, style: null };
  let labelCallScreen = null;
  if (isActionSheet) {
    labelCallScreen = tmp5.labelCallScreen;
  }
  obj21.style = labelCallScreen;
  obj18.label = closure_14(user(8988).FormRow.Label, obj21);
  if (localVideoAutoDisabled) {
    const obj22 = { style: tmp4.autoDisabledVideo, children: null };
    const obj23 = { source: channel(11541), size: tmp2(1199).Icon.Sizes.EXTRA_SMALL, disableColor: true };
    const items7 = [closure_14(tmp2(1199).Icon, obj23), ];
    const obj24 = { variant: "text-xs/medium", color: "text-default", style: tmp4.autoDisabledVideoLabel, children: null };
    const intl3 = tmp2(1125).intl;
    obj24.children = intl3.string(tmp2(1125).t.m2Hyj0);
    items7[1] = closure_14(tmp2(5271).Text, obj24);
    obj22.children = items7;
    let stringResult = closure_15(closure_5, obj22);
  } else {
    stringResult = null;
    if (flag2) {
      const intl2 = tmp2(1125).intl;
      stringResult = intl2.string(tmp2(1125).t.IyYqqY);
    }
  }
  obj18.subLabel = stringResult;
  return closure_14(user(8988).FormRow, obj18);
}));
ReactCompilerGating = fn(558);
let closure_20 = ReactCompilerGating.isReactCompilerEnabled() ? (function StreamingUserRow(user) {
  const cResult = user(576).c(18);
  const tmp4 = closure_17();
  user = user.user;
  const channel = user.channel;
  let obj = user(576);
  if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
    const items = [PresenceStore];
    cResult[0] = items;
    let first = items;
  } else {
    first = cResult[0];
  }
  if (cResult[1] !== user.id) {
    const fn = function l() {
      return StreamerApplicationSelectors.getStreamerActivityByUserId(user.id, PresenceStore);
    };
    cResult[1] = user.id;
    cResult[2] = fn;
    let tmp8 = fn;
  } else {
    tmp8 = cResult[2];
  }
  const tmp5 = closure_18();
  const stateFromStores = user(504).useStateFromStores(first, tmp8);
  if (cResult[3] !== stateFromStores) {
    if (null == stateFromStores) {
      const intl = tmp(1125).intl;
      const stringResult = intl.string(tmp(1125).t.eXan7B);
      cResult[3] = stateFromStores;
      cResult[4] = stringResult;
    }
    const intl2 = tmp(1125).intl;
    if (null == stateFromStores.details) {
      let obj2 = { name: stateFromStores.name };
      intl2.format(tmp13, obj2);
    }
    const details = stateFromStores.details;
  } else {
    let labelCallScreen = null;
    if (user.isActionSheet) {
      labelCallScreen = tmp5.labelCallScreen;
    }
    if (cResult[5] === cResult[4]) {
      if (cResult[6] === labelCallScreen) {
        let tmp18 = cResult[7];
      }
      if (cResult[8] === user) {
        if (cResult[9] === tmp18) {
          let tmp21 = cResult[10];
        }
        if (cResult[11] === channel) {
          if (cResult[12] === tmp4) {
            if (cResult[13] === user.id) {
              let tmp28 = cResult[14];
            }
            if (cResult[15] === tmp21) {
              if (cResult[16] === tmp28) {
                let tmp36 = cResult[17];
              }
              return tmp36;
            }
            let obj3 = { children: null };
            const items1 = [tmp21, tmp28];
            obj3.children = items1;
            const tmp39 = closure_15(closure_16, obj3);
            cResult[15] = tmp21;
            cResult[16] = tmp28;
            cResult[17] = tmp39;
            tmp36 = tmp39;
          }
        }
        let tmp31Result = user.id !== AuthenticationStore.getId();
        if (tmp31Result) {
          let obj4 = { style: tmp4.streamPreview, children: null };
          let guildId;
          if (channel != null) {
            guildId = channel.getGuildId();
          }
          const obj5 = {
            guildId,
            userId: user.id,
            disableTransition: true,
            onPress() {
                      let isModalOpenResult = null != channel;
                      if (isModalOpenResult) {
                        const obj = NavigationRouteUtils;
                        isModalOpenResult = obj.isModalOpen(PrivateChannelCallUtils.getVoiceChannelKey(channel.id));
                      }
                      if (isModalOpenResult) {
                        const obj3 = ActionSheetActionCreatorsDefault;
                        obj3.hideActionSheet(PrivateChannelCallUtils.getVoiceChannelKey(channel.id));
                      }
                    }
          };
          obj4.children = closure_14(channel(11806), obj5);
          tmp31Result = closure_14(closure_5, obj4);
          const tmp34 = channel(11806);
        }
        cResult[11] = channel;
        cResult[12] = tmp4;
        cResult[13] = user.id;
        cResult[14] = tmp31Result;
        tmp28 = tmp31Result;
      }
      const obj6 = {};
      const merged = Object.assign(user);
      obj6.subLabel = tmp18;
      const tmp27 = closure_14(closure_19, obj6);
      cResult[8] = user;
      cResult[9] = tmp18;
      cResult[10] = tmp27;
      tmp21 = tmp27;
    }
    const obj7 = { text: cResult[4], style: labelCallScreen };
    const tmp20 = closure_14(tmp(8988).FormSubLabel, obj7);
    cResult[5] = cResult[4];
    cResult[6] = labelCallScreen;
    cResult[7] = tmp20;
    tmp18 = tmp20;
  }
  const tmpResult = user(504);
}) : (function StreamingUserRow(user) {
  user = user.user;
  const channel = user.channel;
  const tmp = closure_17();
  const tmp2 = closure_18();
  const items = [PresenceStore];
  let stateFromStores = user(504).useStateFromStores(items, () => StreamerApplicationSelectors.getStreamerActivityByUserId(user.id, PresenceStore));
  if (null != stateFromStores) {
    const intl2 = tmp3(1125).intl;
    if (null == stateFromStores.details) {
      stateFromStores = { name: null };
      stateFromStores.name = stateFromStores.name;
      intl2.format(tmp6, stateFromStores);
    }
    const details = stateFromStores.details;
  } else {
    const intl = tmp3(1125).intl;
    let obj2 = {};
    const merged = Object.assign(user);
    let obj3 = { text: intl.string(tmp3(1125).t.eXan7B), style: null };
    let labelCallScreen = null;
    if (user.isActionSheet) {
      labelCallScreen = tmp2.labelCallScreen;
    }
    obj3.style = labelCallScreen;
    obj2.subLabel = closure_14(tmp3(8988).FormSubLabel, obj3);
    const items1 = [closure_14(closure_19, obj2), ];
    let tmp10Result = user.id !== AuthenticationStore.getId();
    if (tmp10Result) {
      let obj4 = { style: tmp.streamPreview, children: null };
      let guildId;
      if (channel != null) {
        guildId = channel.getGuildId();
      }
      const obj5 = {
        guildId,
        userId: user.id,
        disableTransition: true,
        onPress() {
              let isModalOpenResult = null != channel;
              if (isModalOpenResult) {
                const obj = NavigationRouteUtils;
                isModalOpenResult = obj.isModalOpen(PrivateChannelCallUtils.getVoiceChannelKey(channel.id));
              }
              if (isModalOpenResult) {
                const obj3 = ActionSheetActionCreatorsDefault;
                obj3.hideActionSheet(PrivateChannelCallUtils.getVoiceChannelKey(channel.id));
              }
            }
      };
      obj4.children = closure_14(channel(11806), obj5);
      tmp10Result = closure_14(closure_5, obj4);
      const tmp20 = channel(11806);
    }
    const obj6 = { children: null };
    items1[1] = tmp10Result;
    obj6.children = items1;
    return closure_15(closure_16, obj6);
  }
  let obj = user(504);
});
ReactCompilerGating = fn(558);
let closure_21 = ReactCompilerGating.isReactCompilerEnabled() ? (function RingButton(channelId) {
  const cResult = channelId(576).c(10);
  channelId = channelId.channelId;
  const userId = channelId.userId;
  const isActionSheet = channelId.isActionSheet;
  const tmp4 = closure_17();
  const tmp5 = closure_18();
  if (null != userId) {
    if (null != channelId) {
      if (cResult[0] === channelId) {
        if (cResult[1] === userId) {
          let tmp6 = cResult[2];
        }
        const tmp7 = isActionSheet ? tmp5.ringingButton : tmp4.ringingButton;
        const tmp8 = isActionSheet ? tmp5.ringingButtonLabel : tmp4.ringingButtonLabel;
        const _Symbol = Symbol;
        if (cResult[3] === Symbol.for("react.memo_cache_sentinel")) {
          const intl = tmp(1125).intl;
          const stringResult = intl.string(tmp(1125).t.bHa9kN);
          cResult[3] = stringResult;
          let tmp10 = stringResult;
        } else {
          tmp10 = cResult[3];
        }
        if (cResult[4] !== tmp8) {
          const obj2 = { style: tmp8, children: tmp10 };
          const tmp14 = closure_14(tmp(1199).LegacyText, obj2);
          cResult[4] = tmp8;
          cResult[5] = tmp14;
          let tmp12 = tmp14;
        } else {
          tmp12 = cResult[5];
        }
        if (cResult[6] === tmp6) {
          if (cResult[7] === tmp7) {
            if (cResult[8] === tmp12) {
              let tmp15 = cResult[9];
            }
            return tmp15;
          }
        }
        const obj3 = { onPress: tmp6, accessibilityRole: "button", style: tmp7, children: tmp12 };
        const tmp17 = closure_14(tmp(6968).PressableOpacity, obj3);
        cResult[6] = tmp6;
        cResult[7] = tmp7;
        cResult[8] = tmp12;
        cResult[9] = tmp17;
        tmp15 = tmp17;
      }
      const fn = function n() {
        const items = [userId];
        CallActionCreatorsDefault.ring(channelId, items, "voice_user_action_sheet");
      };
      cResult[0] = channelId;
      cResult[1] = userId;
      cResult[2] = fn;
      tmp6 = fn;
    }
  }
  return null;
}) : (function RingButton(channelId) {
  channelId = channelId.channelId;
  const userId = channelId.userId;
  const isActionSheet = channelId.isActionSheet;
  const tmp = closure_17();
  let tmp4Result = closure_18();
  let tmp3 = null;
  if (null != userId) {
    tmp3 = null;
    if (null != channelId) {
      const obj = {
        onPress() {
              const items = [userId];
              CallActionCreatorsDefault.ring(channelId, items, "voice_user_action_sheet");
            },
        accessibilityRole: "button",
        style: isActionSheet ? tmp4Result.ringingButton : tmp.ringingButton,
        children: null
      };
      const obj2 = { style: isActionSheet ? tmp4Result.ringingButtonLabel : tmp.ringingButtonLabel, children: null };
      const intl = tmp5(1125).intl;
      const stringResult = intl.string(tmp5(1125).t.bHa9kN);
      obj2.children = stringResult;
      tmp4Result = closure_14(tmp5(1199).LegacyText, obj2);
      obj.children = tmp4Result;
      closure_14(channelId(6968).PressableOpacity, obj);
    }
  }
  return tmp3;
});
ReactCompilerGating = fn(558);
let closure_22 = ReactCompilerGating.isReactCompilerEnabled() ? (function StopRingButton(channelId) {
  const cResult = channelId(576).c(10);
  channelId = channelId.channelId;
  const userId = channelId.userId;
  const isActionSheet = channelId.isActionSheet;
  const tmp4 = closure_17();
  const tmp5 = closure_18();
  if (null != userId) {
    if (null != channelId) {
      if (cResult[0] === channelId) {
        if (cResult[1] === userId) {
          let tmp6 = cResult[2];
        }
        const tmp7 = isActionSheet ? tmp5.ringingButton : tmp4.ringingButton;
        const tmp8 = isActionSheet ? tmp5.ringingButtonLabel : tmp4.ringingButtonLabel;
        const _Symbol = Symbol;
        if (cResult[3] === Symbol.for("react.memo_cache_sentinel")) {
          const intl = tmp(1125).intl;
          const stringResult = intl.string(tmp(1125).t.ygslb0);
          cResult[3] = stringResult;
          let tmp10 = stringResult;
        } else {
          tmp10 = cResult[3];
        }
        if (cResult[4] !== tmp8) {
          const obj2 = { style: tmp8, children: tmp10 };
          const tmp14 = closure_14(tmp(1199).LegacyText, obj2);
          cResult[4] = tmp8;
          cResult[5] = tmp14;
          let tmp12 = tmp14;
        } else {
          tmp12 = cResult[5];
        }
        if (cResult[6] === tmp6) {
          if (cResult[7] === tmp7) {
            if (cResult[8] === tmp12) {
              let tmp15 = cResult[9];
            }
            return tmp15;
          }
        }
        const obj3 = { onPress: tmp6, accessibilityRole: "button", style: tmp7, children: tmp12 };
        const tmp17 = closure_14(tmp(6968).PressableOpacity, obj3);
        cResult[6] = tmp6;
        cResult[7] = tmp7;
        cResult[8] = tmp12;
        cResult[9] = tmp17;
        tmp15 = tmp17;
      }
      const fn = function n() {
        const items = [userId];
        CallActionCreatorsDefault.stopRinging(channelId, items);
      };
      cResult[0] = channelId;
      cResult[1] = userId;
      cResult[2] = fn;
      tmp6 = fn;
    }
  }
  return null;
}) : (function StopRingButton(channelId) {
  channelId = channelId.channelId;
  const userId = channelId.userId;
  const isActionSheet = channelId.isActionSheet;
  const tmp = closure_17();
  let tmp4Result = closure_18();
  let tmp3 = null;
  if (null != userId) {
    tmp3 = null;
    if (null != channelId) {
      const obj = {
        onPress() {
              const items = [userId];
              CallActionCreatorsDefault.stopRinging(channelId, items);
            },
        accessibilityRole: "button",
        style: isActionSheet ? tmp4Result.ringingButton : tmp.ringingButton,
        children: null
      };
      const obj2 = { style: isActionSheet ? tmp4Result.ringingButtonLabel : tmp.ringingButtonLabel, children: null };
      const intl = tmp5(1125).intl;
      const stringResult = intl.string(tmp5(1125).t.ygslb0);
      obj2.children = stringResult;
      tmp4Result = closure_14(tmp5(1199).LegacyText, obj2);
      obj.children = tmp4Result;
      closure_14(channelId(6968).PressableOpacity, obj);
    }
  }
  return tmp3;
});
fn(558);
let obj11 = { fontFamily: Fonts.PRIMARY_SEMIBOLD, fontSize: 14, lineHeight: 18, marginHorizontal: 16, color: nativeDefault.colors.INTERACTIVE_TEXT_ACTIVE };
ReactCompilerGating = fn(558);
const memoResult = noop.memo(ReactCompilerGating.isReactCompilerEnabled() ? (function DisconnectedUserRow(user) {
  const cResult = user(isActionSheet[16]).c(31);
  user = user.user;
  const channel = user.channel;
  isActionSheet = user.isActionSheet;
  const onPress = user.onPress;
  closure_18();
  if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
    const items = [CallStore];
    cResult[0] = items;
    let first = items;
  } else {
    first = cResult[0];
  }
  if (cResult[1] === channel.id) {
    if (cResult[2] === user.id) {
      let tmp7 = cResult[3];
      let tmp8 = cResult[4];
    }
    const stateFromStores = tmp(tmp2[19]).useStateFromStores(first, tmp7, tmp8);
    if (cResult[5] === channel.guild_id) {
      if (cResult[6] === channel.id) {
        if (cResult[7] === user) {
          let tmp10 = cResult[8];
        }
        const canRing = tmp(tmp2[40]).useCanRing(user);
        if (cResult[9] === canRing) {
          if (cResult[10] === channel.id) {
            if (cResult[11] === isActionSheet) {
              if (cResult[12] === stateFromStores) {
                if (cResult[13] === user.id) {
                  let tmp14 = cResult[14];
                }
                if (cResult[15] === onPress) {
                  if (cResult[16] === user) {
                    let tmp15 = cResult[17];
                  }
                  class E {
                    constructor() {
                      return onPress(user);
                    }
                  }
                  if (cResult[18] === tmp10) {
                    if (cResult[19] === tmp16) {
                      let tmp17 = cResult[20];
                    }
                    if (cResult[21] === channel.guild_id) {
                      if (cResult[22] === user) {
                        let tmp20 = cResult[23];
                      }
                      if (cResult[24] !== tmp14) {
                        const tmp14Result = tmp14();
                        class E {
                          constructor() {
                            return onPress(user);
                          }
                        }
                        cResult[25] = tmp14Result;
                        let tmp22 = tmp14Result;
                      } else {
                        tmp22 = cResult[25];
                      }
                      class E {
                        constructor() {
                          return onPress(user);
                        }
                      }
                      const obj2 = { onPress: tmp15, label: tmp17, leading: tmp20, trailing: tmp22 };
                      const obj4 = {};
                      const merged = Object.assign(obj2);
                      const tmp29 = closure_14(tmp(tmp2[31]).FormRow, obj4);
                      cResult[26] = tmp22;
                      cResult[27] = tmp15;
                      cResult[28] = tmp17;
                      cResult[29] = tmp20;
                      cResult[30] = tmp29;
                    }
                    class E {
                      constructor() {
                        return onPress(user);
                      }
                    }
                    const obj5 = { user, guildId: channel.guild_id, size: tmp(tmp2[23]).AvatarSizes.REFRESH_MEDIUM_32 };
                    const tmp21 = closure_14(tmp(tmp2[23]).Avatar, obj5);
                    cResult[21] = channel.guild_id;
                    cResult[22] = user;
                    cResult[23] = tmp21;
                    tmp20 = tmp21;
                  }
                  const obj6 = { text: tmp10, style: null };
                  const tmp19 = closure_14(tmp(tmp2[31]).FormRow.Label, obj6);
                  cResult[18] = tmp10;
                  cResult[19] = null;
                  cResult[20] = tmp19;
                  tmp17 = tmp19;
                }
                class E {
                  constructor() {
                    return onPress(user);
                  }
                }
                cResult[15] = onPress;
                cResult[16] = user;
                cResult[17] = E;
                tmp15 = E;
              }
            }
          }
        }
        function renderVoiceState() {
          if (!canRing) {
            return null;
          } else {
            const obj = { channelId: channel.id, userId: user.id, isActionSheet };
            closure_2_14(stateFromStores ? closure_22 : closure_21, obj);
          }
        }
        cResult[9] = canRing;
        cResult[10] = channel.id;
        cResult[11] = isActionSheet;
        cResult[12] = stateFromStores;
        cResult[13] = user.id;
        cResult[14] = renderVoiceState;
        tmp14 = renderVoiceState;
        const tmpResult2 = tmp(tmp2[40]);
      }
    }
    const tmpResult = tmp(tmp2[19]);
    const name = channel(tmp2[39]).getName(channel.guild_id, channel.id, user);
    cResult[5] = channel.guild_id;
    cResult[6] = channel.id;
    cResult[7] = user;
    cResult[8] = name;
    tmp10 = name;
    const obj3 = channel(tmp2[39]);
  }
  const fn = function l() {
    const call = CallStore.getCall(channel.id);
    let hasItem = null != call;
    if (hasItem) {
      const ringing = call.ringing;
      hasItem = ringing.includes(user.id);
    }
    return hasItem;
  };
  const items1 = [channel.id, user.id];
  cResult[1] = channel.id;
  cResult[2] = user.id;
  cResult[3] = fn;
  cResult[4] = items1;
  tmp8 = items1;
  tmp7 = fn;
  let obj = user(isActionSheet[16]);
}) : (function DisconnectedUserRow(user) {
  let id = user.user;
  let id2 = user.channel;
  ({ isActionSheet, onPress: dependencyMap } = user);
  const tmp = closure_18();
  const items = [CallStore];
  const items1 = [id2.id, id.id];
  const stateFromStores = id(504).useStateFromStores(items, () => {
    const call = CallStore.getCall(id2.id);
    let hasItem = null != call;
    if (hasItem) {
      const ringing = call.ringing;
      hasItem = ringing.includes(id.id);
    }
    return hasItem;
  }, items1);
  const obj = id(504);
  const name = id2(6029).getName(id2.guild_id, id2.id, id);
  const obj2 = id2(6029);
  const obj4 = {
    onPress() {
      return dependencyMap(id);
    },
    label: null,
    leading: null,
    trailing: null
  };
  const canRing = id(7483).useCanRing(id);
  const obj5 = { text: name, style: null };
  let labelCallScreen = null;
  if (isActionSheet) {
    labelCallScreen = tmp.labelCallScreen;
  }
  obj5.style = labelCallScreen;
  obj4.label = closure_14(id(8988).FormRow.Label, obj5);
  const obj3 = id(7483);
  obj4.leading = closure_14(id(1199).Avatar, { user: id, guildId: id2.guild_id, size: id(1199).AvatarSizes.REFRESH_MEDIUM_32 });
  if (!canRing) {
    obj4.trailing = null;
    const obj7 = {};
    const merged = Object.assign(obj4);
    return closure_14(tmp2(8988).FormRow, obj7);
  } else {
    const obj8 = { channelId: null, userId: null, isActionSheet: null };
    id2 = id2.id;
    obj8.channelId = id2;
    id = id.id;
    obj8.userId = id;
    obj8.isActionSheet = isActionSheet;
    closure_14(stateFromStores ? closure_22 : closure_21, obj8);
  }
  const obj6 = { user: id, guildId: id2.guild_id, size: id(1199).AvatarSizes.REFRESH_MEDIUM_32 };
}));
const size = fn(2);
let result = size.fileFinishedImporting("modules/voice_calls/native/action_sheet/VoiceMemberUser.tsx");

export default noop.memo(ReactCompilerGating.isReactCompilerEnabled() ? (function VoiceMemberUser(voiceState) {
  const cResult = voiceState(576).c(11);
  voiceState = voiceState.voiceState;
  let nick = voiceState.nick;
  if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
    const items = [ChannelStore];
    cResult[0] = items;
    let first = items;
  } else {
    first = cResult[0];
  }
  let channelId;
  if (voiceState != null) {
    channelId = voiceState.channelId;
  }
  if (cResult[1] !== channelId) {
    let channelId1;
    if (voiceState != null) {
      channelId1 = voiceState.channelId;
    }
    const fn = function l() {
      let channelId;
      if (voiceState != null) {
        channelId = voiceState.channelId;
      }
      return ChannelStore.getChannel(channelId);
    };
    cResult[1] = channelId1;
    cResult[2] = fn;
    let tmp7 = fn;
  } else {
    tmp7 = cResult[2];
  }
  const obj = voiceState(576);
  const stateFromStores = voiceState(504).useStateFromStores(first, tmp7);
  const tmpResult = voiceState(504);
  const name = UserUtilsDefault.useName(voiceState.user);
  if (null != voiceState) {
    if (voiceState.selfStream) {
      let tmp11 = nick;
      if (nick == null) {
        tmp11 = name;
      }
      if (cResult[7] === stateFromStores) {
        if (cResult[8] === voiceState) {
          if (cResult[9] === tmp11) {
            let tmp12 = cResult[10];
          }
          return tmp12;
        }
      }
      const obj2 = {};
      const merged = Object.assign(voiceState);
      obj2.name = tmp11;
      obj2.channel = stateFromStores;
      const tmp18 = closure_14(closure_20, obj2);
      cResult[7] = stateFromStores;
      cResult[8] = voiceState;
      cResult[9] = tmp11;
      cResult[10] = tmp18;
      tmp12 = tmp18;
    }
  }
  if (nick == null) {
    nick = name;
  }
  if (cResult[3] === stateFromStores) {
    if (cResult[4] === voiceState) {
      if (cResult[5] === nick) {
        let tmp19 = cResult[6];
      }
      return tmp19;
    }
  }
  const obj4 = {};
  const merged1 = Object.assign(voiceState);
  obj4.name = nick;
  obj4.channel = stateFromStores;
  obj4.withStream = false;
  const tmp21 = closure_14(closure_19, obj4);
  cResult[3] = stateFromStores;
  cResult[4] = voiceState;
  cResult[5] = nick;
  cResult[6] = tmp21;
  tmp19 = tmp21;
}) : (function VoiceMemberUser(voiceState) {
  voiceState = voiceState.voiceState;
  let nick = voiceState.nick;
  const items = [ChannelStore];
  const stateFromStores = voiceState(504).useStateFromStores(items, () => {
    let channelId;
    if (voiceState != null) {
      channelId = voiceState.channelId;
    }
    return ChannelStore.getChannel(channelId);
  });
  const obj = voiceState(504);
  const name = UserUtilsDefault.useName(voiceState.user);
  if (null != voiceState) {
    if (voiceState.selfStream) {
      const obj3 = {};
      const merged = Object.assign(voiceState);
      if (nick == null) {
        nick = name;
      }
      obj3.name = nick;
      obj3.channel = stateFromStores;
      let tmp3Result = closure_14(closure_20, obj3);
    }
    return tmp3Result;
  }
  const obj4 = {};
  const merged1 = Object.assign(voiceState);
  let tmp6 = nick;
  if (nick == null) {
    tmp6 = name;
  }
  obj4.name = tmp6;
  obj4.channel = stateFromStores;
  obj4.withStream = false;
  tmp3Result = closure_14(closure_19, obj4);
}));
export const STREAM_PREVIEW_MARGIN = 16;
export const DisconnectedUserRow = memoResult;