// === Module 12277: useCreateGameInvitePost ===

// Module 12277 (useCreateGameInvitePost)
import closure_3 from "asyncGeneratorStep" /* 5 */;
import closure_4 from "_slicedToArray" /* 32 */;
import closure_5 from "noop" /* 19 */;
import closure_6 from "updateActivities" /* 9394 */;
import closure_7 from "filterPlayingActivities" /* 5191 */;
import { ActivityActionTypes } from "ME" /* 676 */;

const require = arg1;
const result = require("set").fileFinishedImporting("modules/game_invite_channels/useCreateGameInvitePost.tsx");

export const useCreateGameInvitePost = function useCreateGameInvitePost(appliedTagIds) {
  ({ parentChannel, description } = appliedTagIds);
  appliedTagIds = appliedTagIds.appliedTagIds;
  let application;
  let stateFromStores;
  let createForumPostCommon;
  let callback;
  let React;
  ({ upload, onThreadCreated } = appliedTagIds);
  let obj = description(stateFromStores[6]);
  application = obj.useGameInvitesChannelOfficialApplication(parentChannel.id).application;
  const items = [closure_6, closure_7];
  const items1 = [application];
  stateFromStores = description(stateFromStores[7]).useStateFromStores(items, () => {
    let id;
    if (application != null) {
      id = application.id;
    }
    return application(stateFromStores[8])(closure_1_6, closure_1_7, id);
  }, items1);
  const obj2 = description(stateFromStores[7]);
  let availableTags = parentChannel.availableTags;
  if (availableTags == null) {
    availableTags = [];
  }
  const gameInviteVoiceChatState = description(stateFromStores[6]).useGameInviteVoiceChatState(availableTags, appliedTagIds);
  const voiceChatEnabled = gameInviteVoiceChatState.voiceChatEnabled;
  const items2 = [stateFromStores];
  ({ noMicTag, voiceToggleDisabled } = gameInviteVoiceChatState);
  const memo = React.useMemo(() => {
    if (null != stateFromStores) {
      let obj = description(stateFromStores[6]);
      if (obj.canInviteToActivity(tmp)) {
        obj = { type: null, activity: null };
        obj[0] = closure_1_8.JOIN;
        obj[1] = tmp;
        return obj;
      }
    }
  }, items2);
  let tmpResult = tmp(tmp2[9]);
  obj = { parentChannel, name: null, appliedTags: null, activityAction: null, applicationId: null, voiceChatEnabled: null, upload: null, onThreadCreated: null };
  tmpResult = tmp(tmp2[6]);
  obj[1] = tmpResult.deriveThreadName(description);
  obj[2] = appliedTagIds;
  obj[3] = memo;
  let id;
  if (application != null) {
    id = application.id;
  }
  obj[4] = id;
  obj[5] = voiceChatEnabled;
  obj[6] = upload;
  obj[7] = onThreadCreated;
  createForumPostCommon = tmpResult.useCreateForumPostCommon(obj);
  const obj3 = description(stateFromStores[6]);
  [tmp9, c4] = callback(React.useState(false), 2);
  let tmp10 = !tmp9;
  if (!tmp9) {
    tmp10 = description.trim().length > 0;
  }
  if (tmp10) {
    tmp10 = description.length <= tmp(tmp2[6]).GAME_INVITE_POST_MESSAGE_MAX_LENGTH;
  }
  React = tmp10;
  const items3 = [tmp10, createForumPostCommon, description];
  obj = {
    application,
    noMicTag,
    voiceChatEnabled,
    voiceToggleDisabled,
    submitting: tmp9,
    canSubmit: tmp10,
    submit: obj4.useCallback(createForumPostCommon(function*() {
      if (v0 === 2) {
        v0 = 3;
        HermesBuiltin.throwTypeError();
      } else if (tmp6 === 3) {
        if (arg0 === 1) {
          throw arg1;
        } else if (arg0 === 2) {
          let obj = { value: null, done: true };
          obj[0] = arg1;
          return obj;
        } else {
          return { value: "HermesInternal", done: "HermesInternal" };
        }
      } else {
        try {
          v0 = 2;
          if (0 === c1) {
            if (arg0 === 1) {
              v0 = 3;
              throw arg1;
            } else if (arg0 === 2) {
              v0 = 3;
              obj = { value: null, done: true };
              obj[0] = arg1;
              return obj;
            } else {
              closure_0 = tmp3;
              if (closure_1_5) {
                closure_1_4(true);
                c2 = 1;
                c1 = 2;
                v0 = 1;
                obj1 = { value: null, done: false };
                obj1[0] = v0(closure_1_0);
                return obj1;
              }
            }
          } else {
            if (1 === tmp7) {
              c2 = 0;
              callback(false);
            } else if (arg0 === 1) {
              v0 = 3;
              throw arg1;
            } else if (arg0 !== 2) {
              c2 = 0;
            }
            c2 = 0;
            v0 = 3;
            obj = { value: null, done: true };
            obj[0] = arg1;
            return obj;
          }
          v0 = 3;
        } catch (tmp16) {
          if (tmp4 === c2) {
            v0 = tmp2;
            throw tmp16;
          } else {
            c1 = tmp;
          }
        }
      }
    }), items3)
  };
  return obj;
};