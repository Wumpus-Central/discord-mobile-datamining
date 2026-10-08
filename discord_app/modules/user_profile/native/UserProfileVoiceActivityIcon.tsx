// discord_app/modules/user_profile/native/UserProfileVoiceActivityIcon.tsx
import isRoleRequiredDefault from "../../channel/isRoleRequired.tsx";
import _objectWithoutProperties from "../../../../_runtime/metro/00109__objectWithoutProperties.js";
import noop from "../../../../_runtime/metro/00019__.js";
import PermissionStore from "../../../stores/PermissionStore.tsx";

const require = globalThis.__r;

const require = fn;
let closure_3 = ["channel"];
const Permissions = fn(1096).Permissions;
const jsx = fn(21).jsx;
const ReactCompilerGating = fn(558);
const size = fn(2);
const result = size.fileFinishedImporting("modules/user_profile/native/UserProfileVoiceActivityIcon.tsx");

export default ReactCompilerGating.isReactCompilerEnabled()
  ? function UserProfileVoiceActivityIcon(channel) {
      const cResult = require("c").c(18);
      if (cResult[0] !== channel) {
        channel = channel.channel;
        _require = channel;
        const tmp7 = _objectWithoutProperties(channel, closure_3);
        cResult[0] = channel;
        cResult[1] = channel;
        cResult[2] = tmp7;
        let tmp4 = tmp7;
      } else {
        _require = cResult[1];
        tmp4 = cResult[2];
      }
      if (cResult[3] === Symbol.for("react.memo_cache_sentinel")) {
        const items = [PermissionStore];
        cResult[3] = items;
        let tmp8 = items;
      } else {
        tmp8 = cResult[3];
      }
      if (cResult[4] !== obj2) {
        const fn = function f() {
          let isPrivateResult = _private.isPrivate();
          if (!isPrivateResult) {
            isPrivateResult = PermissionStore.can(Permissions.CONNECT, _private);
          }
          return isPrivateResult;
        };
        cResult[4] = obj2;
        cResult[5] = fn;
        let tmp10 = fn;
      } else {
        tmp10 = cResult[5];
      }
      const obj = require("c");
      const stateFromStores = require("initialize").useStateFromStores(tmp8, tmp10);
      if (!obj2.isDM()) {
        if (!obj2.isGroupDM()) {
          const isGuildStageVoiceResult = obj2.isGuildStageVoice();
          let tmp13 = !stateFromStores;
          if (stateFromStores) {
            tmp13 = isRoleRequiredDefault(obj2);
          }
          if (isGuildStageVoiceResult) {
            if (tmp13) {
              if (cResult[8] !== tmp4) {
                const obj3 = {};
                const merged = Object.assign(tmp4);
                const tmp47 = jsx(tmp(8199).StageLockIcon, {});
                cResult[8] = tmp4;
                cResult[9] = tmp47;
              }
            }
          }
          if (isGuildStageVoiceResult) {
            if (cResult[10] !== tmp4) {
              const obj4 = {};
              const merged1 = Object.assign(tmp4);
              const tmp40 = jsx(tmp(8200).StageIcon, {});
              cResult[10] = tmp4;
              cResult[11] = tmp40;
            }
          } else if (obj2.isNSFW()) {
            if (cResult[12] !== tmp4) {
              const obj5 = {};
              const merged2 = Object.assign(tmp4);
              const tmp33 = jsx(tmp(8202).VoiceWarningIcon, {});
              cResult[12] = tmp4;
              cResult[13] = tmp33;
            }
          } else if (tmp13) {
            if (cResult[14] !== tmp4) {
              const obj6 = {};
              const merged3 = Object.assign(tmp4);
              const tmp26 = jsx(tmp(8201).VoiceLockIcon, {});
              cResult[14] = tmp4;
              cResult[15] = tmp26;
            }
          } else {
            if (cResult[16] !== tmp4) {
              const obj7 = {};
              const merged4 = Object.assign(tmp4);
              const tmp20 = jsx(tmp(8204).VoiceNormalIcon, {});
              cResult[16] = tmp4;
              cResult[17] = tmp20;
              let tmp15 = tmp20;
            } else {
              tmp15 = cResult[17];
            }
            return tmp15;
          }
        }
      }
      if (cResult[6] !== tmp4) {
        const obj8 = {};
        const merged5 = Object.assign(tmp4);
        const tmp54 = jsx(tmp(9256).PhoneCallIcon, {});
        cResult[6] = tmp4;
        cResult[7] = tmp54;
        let tmp49 = tmp54;
      } else {
        tmp49 = cResult[7];
      }
      return tmp49;
    }
  : function UserProfileVoiceActivityIcon(channel) {
      channel = channel.channel;
      const merged = Object.assign(channel, Object.assign({ channel: 0 }));
      const items = [PermissionStore];
      const stateFromStores = channel(504).useStateFromStores(items, () => {
        let isPrivateResult = channel.isPrivate();
        if (!isPrivateResult) {
          isPrivateResult = PermissionStore.can(Permissions.CONNECT, channel);
        }
        return isPrivateResult;
      });
      if (!channel.isDM()) {
        if (!channel.isGroupDM()) {
          const isGuildStageVoiceResult = channel.isGuildStageVoice();
          let tmp6 = !stateFromStores;
          if (stateFromStores) {
            tmp6 = isRoleRequiredDefault(channel);
          }
          if (isGuildStageVoiceResult) {
            if (tmp6) {
              const obj2 = {};
              const merged1 = Object.assign(merged);
              let tmp8Result = jsx(tmp2(8199).StageLockIcon, {});
            }
            return tmp8Result;
          }
          if (isGuildStageVoiceResult) {
            const obj3 = {};
            const merged2 = Object.assign(merged);
            tmp8Result = jsx(tmp2(8200).StageIcon, {});
          } else if (channel.isNSFW()) {
            const obj4 = {};
            const merged3 = Object.assign(merged);
            tmp8Result = jsx(tmp2(8202).VoiceWarningIcon, {});
          } else {
            if (tmp6) {
              let VoiceNormalIcon = tmp2(8201).VoiceLockIcon;
            } else {
              VoiceNormalIcon = tmp2(8204).VoiceNormalIcon;
            }
            const obj5 = {};
            const merged4 = Object.assign(merged);
            tmp8Result = <VoiceNormalIcon />;
          }
        }
      }
      const merged5 = Object.assign(merged);
      return jsx(channel(9256).PhoneCallIcon, {});
    };
