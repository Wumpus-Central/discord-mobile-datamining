// discord_app/modules/voice_panel/native/hooks/useInviteMembersCallback.tsx
import instant_invite_InstantInviteUtils from "../../../instant_invite/native/InstantInviteUtils.tsx";
import openGroupDMAddMembersDefault from "../../../group_dm/native/openGroupDMAddMembers.tsx";
import noop from "../../../../../_runtime/metro/00019__.js";
import ChannelStore from "../../../../stores/ChannelStore.tsx";

const require = globalThis.__r;

require = fn;
const Constants = fn(1085);
({ AnalyticsPages: hasOwnProperty, InstantInviteSources: metroRequire } = Constants);
const ReactCompilerGating = fn(558);
const size = fn(2);
let result = size.fileFinishedImporting("modules/voice_panel/native/hooks/useInviteMembersCallback.tsx");

export const useInviteMembersCallback = ReactCompilerGating.isReactCompilerEnabled()
  ? function useInviteMembersCallback(arg0) {
      _require = arg0;
      const cResult = require("c").c(2);
      if (cResult[0] !== arg0) {
        const fn = function s() {
          let id = ChannelStore.getChannel(closure_0);
          if (null == id) {
            return null;
          } else if (id.isPrivate()) {
            id = id.id;
            let result = openGroupDMAddMembersDefault(id, constants.CHANNEL_CALL);
          } else {
            const obj2 = { source: constants2.VOICE_CHANNEL };
            result = instant_invite_InstantInviteUtils.showInstantInviteActionSheet(id, obj2);
          }
        };
        cResult[0] = arg0;
        cResult[1] = fn;
        let tmp2 = fn;
      } else {
        tmp2 = cResult[1];
      }
      return tmp2;
    }
  : function useInviteMembersCallback(arg0) {
      closure_0 = arg0;
      const items = [arg0];
      return noop.useCallback(() => {
        let id = ChannelStore.getChannel(closure_0);
        if (null == id) {
          return null;
        } else if (id.isPrivate()) {
          id = id.id;
          let result = openGroupDMAddMembersDefault(id, constants.CHANNEL_CALL);
        } else {
          const obj2 = { source: constants2.VOICE_CHANNEL };
          result = instant_invite_InstantInviteUtils.showInstantInviteActionSheet(id, obj2);
        }
      }, items);
    };
