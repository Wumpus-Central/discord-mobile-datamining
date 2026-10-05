// === Module 10628: UserProfileVoiceActivityIcon ===

// Module 10628 (UserProfileVoiceActivityIcon)
import Fragment from "Fragment" /* 21 */;
import Constants from "Constants" /* 1096 */;
import isRoleRequiredDefault from "isRoleRequired" /* 5846 */;
import _objectWithoutProperties from "_objectWithoutProperties" /* 109 */;
import react from "react" /* 19 */;
import PermissionStore from "PermissionStore" /* 4509 */;
import ReactCompilerGating from "ReactCompilerGating" /* 558 */;
import size from "module_2" /* 2 */;

const require = globalThis.__r;
let _require, channel;

let closure_3 = ["channel"];
const Permissions = Constants.Permissions;
const jsx = Fragment.jsx;
const tmp3 = ReactCompilerGating.isReactCompilerEnabled() ? ((channel) => {
  let _private;
  let tmp10;
  let tmp4;
  let tmp45;
  let tmp8;
  const obj = require("react");
  const cResult = obj.c(18);
  if (cResult[0] !== channel) {
    channel = channel.channel;
    _require = channel;
    const tmp7 = _objectWithoutProperties(channel, closure_3);
    cResult[0] = channel;
    cResult[1] = channel;
    cResult[2] = tmp7;
    tmp4 = tmp7;
  } else {
    _require = cResult[1];
    tmp4 = cResult[2];
  }
  if (cResult[3] === Symbol.for("react.memo_cache_sentinel")) {
    const items = [PermissionStore];
    cResult[3] = items;
    tmp8 = items;
  } else {
    tmp8 = cResult[3];
  }
  if (cResult[4] !== obj2) {
    const fn = function v() {
      const isPrivateResult = _private.isPrivate() || PermissionStore.can(Permissions.CONNECT, _private);
      return isPrivateResult;
    };
    cResult[4] = obj2;
    cResult[5] = fn;
    tmp10 = fn;
  } else {
    tmp10 = cResult[5];
  }
  const tmpResult = require("get initialized");
  const stateFromStores = tmpResult.useStateFromStores(tmp8, tmp10);
  if (!obj2.isDM()) {
    if (!obj2.isGroupDM()) {
      let tmp15;
      const isGuildStageVoiceResult = obj2.isGuildStageVoice();
      let tmp13 = !stateFromStores;
      if (stateFromStores) {
        tmp13 = isRoleRequiredDefault(obj2);
      }
      if (isGuildStageVoiceResult) {
        if (tmp13) {
          let tmp39;
          if (cResult[8] !== tmp4) {
            const StageLockIcon = tmp(5880).StageLockIcon;
            const merged = Object.assign(tmp4);
            const tmp44 = <StageLockIcon />;
            cResult[8] = tmp4;
            cResult[9] = tmp44;
            tmp39 = tmp44;
          } else {
            tmp39 = cResult[9];
          }
          tmp15 = tmp39;
        }
        return tmp15;
      }
      if (isGuildStageVoiceResult) {
        let tmp33;
        if (cResult[10] !== tmp4) {
          const StageIcon = tmp(5881).StageIcon;
          const merged1 = Object.assign(tmp4);
          const tmp38 = <StageIcon />;
          cResult[10] = tmp4;
          cResult[11] = tmp38;
          tmp33 = tmp38;
        } else {
          tmp33 = cResult[11];
        }
        tmp15 = tmp33;
      } else if (obj2.isNSFW()) {
        let tmp27;
        if (cResult[12] !== tmp4) {
          const VoiceWarningIcon = tmp(5883).VoiceWarningIcon;
          const merged2 = Object.assign(tmp4);
          const tmp32 = <VoiceWarningIcon />;
          cResult[12] = tmp4;
          cResult[13] = tmp32;
          tmp27 = tmp32;
        } else {
          tmp27 = cResult[13];
        }
        tmp15 = tmp27;
      } else if (tmp13) {
        let tmp21;
        if (cResult[14] !== tmp4) {
          const VoiceLockIcon = tmp(5882).VoiceLockIcon;
          const merged3 = Object.assign(tmp4);
          const tmp26 = <VoiceLockIcon />;
          cResult[14] = tmp4;
          cResult[15] = tmp26;
          tmp21 = tmp26;
        } else {
          tmp21 = cResult[15];
        }
        tmp15 = tmp21;
      } else if (cResult[16] !== tmp4) {
        const VoiceNormalIcon = tmp(5885).VoiceNormalIcon;
        const merged4 = Object.assign(tmp4);
        const tmp20 = <VoiceNormalIcon />;
        cResult[16] = tmp4;
        cResult[17] = tmp20;
        tmp15 = tmp20;
      } else {
        tmp15 = cResult[17];
      }
    }
  }
  if (cResult[6] !== tmp4) {
    const PhoneCallIcon = tmp(7523).PhoneCallIcon;
    const merged5 = Object.assign(tmp4);
    const tmp50 = <PhoneCallIcon />;
    cResult[6] = tmp4;
    cResult[7] = tmp50;
    tmp45 = tmp50;
  } else {
    tmp45 = cResult[7];
  }
  return tmp45;
}) : ((channel) => {
  channel = channel.channel;
  const merged = Object.assign(channel, Object.assign({ channel: 0 }));
  const items = [PermissionStore];
  const obj = channel(504);
  const stateFromStores = obj.useStateFromStores(items, () => {
    const isPrivateResult = channel.isPrivate() || PermissionStore.can(Permissions.CONNECT, channel);
    return isPrivateResult;
  });
  if (!channel.isDM()) {
    if (!channel.isGroupDM()) {
      let tmp8Result;
      const isGuildStageVoiceResult = channel.isGuildStageVoice();
      let tmp6 = !stateFromStores;
      if (stateFromStores) {
        tmp6 = isRoleRequiredDefault(channel);
      }
      if (isGuildStageVoiceResult) {
        if (tmp6) {
          const StageLockIcon = tmp2(5880).StageLockIcon;
          const merged1 = Object.assign(merged);
          tmp8Result = <StageLockIcon />;
        }
        return tmp8Result;
      }
      if (isGuildStageVoiceResult) {
        const StageIcon = tmp2(5881).StageIcon;
        const merged2 = Object.assign(merged);
        tmp8Result = <StageIcon />;
      } else if (channel.isNSFW()) {
        const VoiceWarningIcon = tmp2(5883).VoiceWarningIcon;
        const merged3 = Object.assign(merged);
        tmp8Result = <VoiceWarningIcon />;
      } else {
        if (tmp6) {
          let VoiceNormalIcon = tmp2(5882).VoiceLockIcon;
        } else {
          VoiceNormalIcon = tmp2(5885).VoiceNormalIcon;
        }
        const merged4 = Object.assign(merged);
        tmp8Result = <VoiceNormalIcon />;
      }
    }
  }
  const PhoneCallIcon = tmp2(7523).PhoneCallIcon;
  const merged5 = Object.assign(merged);
  return <PhoneCallIcon />;
});
const result = size.fileFinishedImporting("modules/user_profile/native/UserProfileVoiceActivityIcon.tsx");

export default tmp3;