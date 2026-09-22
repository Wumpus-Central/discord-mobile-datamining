// === Module 13577: useAppDMChatInputState ===

// Module 13577 (useAppDMChatInputState)
import DispatcherDefault from "Dispatcher" /* 573 */;
import maybeFetchUserProfileDefault from "maybeFetchUserProfile" /* 8460 */;
import noop from "module_19" /* 19 */;
import ApplicationStore from "ApplicationStore" /* 4984 */;
import UserProfileStore from "UserProfileStore" /* 7860 */;
import ApplicationRecord from "ApplicationRecord" /* 2002 */;
import UserStore from "UserStore" /* 1372 */;

const require = fn;
const useQueryState = fn(9410).useQueryState;
const EMPTY_STRING_SNOWFLAKE_ID = fn(1074).EMPTY_STRING_SNOWFLAKE_ID;
let items = [fn(1978).ApplicationCommandType.PRIMARY_ENTRY_POINT, fn(1978).ApplicationCommandType.CHAT, fn(1978).ApplicationCommandType.MESSAGE, fn(1978).ApplicationCommandType.USER];
const size = fn(2);
const result = size.fileFinishedImporting("modules/app_dms/useAppDMChatInputState.tsx");

export default function useAppDMChatInputState(context) {
  let stateFromStores;
  let application;
  const channel = context.context.channel;
  items = [channel];
  const memo = application.useMemo(() => {
    if (null != channel) {
      if (true === channel.isDM()) {
        const user = UserStore.getUser(channel.getRecipientId());
        let tmp3 = null;
        if (undefined !== user) {
          tmp3 = null;
          if (true === user.bot) {
            tmp3 = user;
          }
        }
        return tmp3;
      }
    }
    return null;
  }, items);
  const items1 = [ApplicationStore];
  stateFromStores = channel(stateFromStores[8]).useStateFromStores(items1, () => {
    let id;
    if (memo != null) {
      id = memo.id;
    }
    return ApplicationStore.getAppIdForBotUserId(id);
  });
  let obj2 = channel(stateFromStores[8]);
  const items2 = [UserProfileStore];
  const stateFromStores1 = channel(stateFromStores[8]).useStateFromStores(items2, () => {
    let tmp2;
    if (null !== memo) {
      let id;
      if (memo != null) {
        id = memo.id;
      }
      const userProfile = UserProfileStore.getUserProfile(id);
      application = undefined;
      if (userProfile != null) {
        application = userProfile.application;
      }
      tmp2 = application;
    }
    return tmp2;
  });
  if (stateFromStores == null) {
    let id;
    if (stateFromStores1 != null) {
      id = stateFromStores1.id;
    }
    stateFromStores = id;
  }
  const items3 = [memo, stateFromStores];
  const effect = obj.useEffect(() => {
    if (null == stateFromStores) {
      let id;
      if (memo != null) {
        id = memo.id;
      }
      if (id == null) {
        id = EMPTY_STRING_SNOWFLAKE_ID;
      }
      maybeFetchUserProfileDefault(id, undefined, { withMutualGuilds: true });
    }
  }, items3);
  let id1;
  if (memo != null) {
    id1 = memo.id;
  }
  const items4 = [id1];
  const effect1 = obj.useEffect(() => {
    let id;
    if (memo != null) {
      id = memo.id;
    }
    if (null != id) {
      const obj2 = { type: "APP_DM_OPEN", botUserId: memo.id };
      DispatcherDefault.dispatch(obj2);
    }
  }, items4);
  const obj5 = { applicationId: stateFromStores, allowFetch: null, allowApplicationState: true };
  let id2;
  if (memo != null) {
    id2 = memo.id;
  }
  obj5.allowFetch = null != id2;
  const descriptors = useQueryState({ channel, type: "channel" }, { commandTypes: items }, obj5).descriptors;
  const found = descriptors.find((application) => {
    application = application.application;
    let id;
    if (application != null) {
      id = application.id;
    }
    return id === stateFromStores;
  });
  application = undefined;
  if (found != null) {
    application = found.application;
  }
  const items5 = [application];
  let memo1 = obj.useMemo(() => {
    let fromServer;
    if (null != application) {
      fromServer = ApplicationRecord.createFromServer(tmp);
    }
    return fromServer;
  }, items5);
  const obj3 = channel(stateFromStores[8]);
  const obj4 = { commandTypes: items };
  if (null == memo1) {
    const tmp15 = stateFromStores;
  }
  if (memo1 == null) {
    memo1 = tmp2Result.useGetOrFetchApplication(tmp15);
  }
  const obj6 = { application: memo1, isAppDM: null };
  let flag;
  if (memo != null) {
    flag = memo.bot;
  }
  if (flag == null) {
    flag = false;
  }
  obj6.isAppDM = flag;
  return obj6;
};