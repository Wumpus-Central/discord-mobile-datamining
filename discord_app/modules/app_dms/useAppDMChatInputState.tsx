// === Module 12859: items ===

// Module 12859 (items)
import closure_3 from "noop" /* 19 */;
import { useQueryState } from "getIndexKey" /* 8092 */;
import closure_5 from "addApplication" /* 4487 */;
import closure_6 from "createUserWidgetFromServer" /* 7313 */;
import closure_7 from "createExecutable" /* 4472 */;
import closure_8 from "mergeGuildAvatar" /* 1923 */;
import { EMPTY_STRING_SNOWFLAKE_ID } from "ME" /* 676 */;

const require = arg1;
let items = [require("PermissionOverwriteType").ApplicationCommandType.PRIMARY_ENTRY_POINT, require("PermissionOverwriteType").ApplicationCommandType.CHAT, require("PermissionOverwriteType").ApplicationCommandType.MESSAGE, require("PermissionOverwriteType").ApplicationCommandType.USER];
const result = require("set").fileFinishedImporting("modules/app_dms/useAppDMChatInputState.tsx");

export default function useAppDMChatInputState(context) {
  let channel;
  let memo;
  let stateFromStores;
  let application;
  channel = context.context.channel;
  let obj = application;
  items = [channel];
  memo = application.useMemo(() => {
    if (null != channel) {
      if (true === obj.isDM()) {
        const user = closure_1_8.getUser(obj.getRecipientId());
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
  obj1 = channel(stateFromStores[8]);
  const items1 = [closure_5];
  stateFromStores = obj1.useStateFromStores(items1, () => {
    let id;
    if (memo != null) {
      id = memo.id;
    }
    return closure_1_5.getAppIdForBotUserId(id);
  });
  const items2 = [closure_6];
  const stateFromStores1 = channel(stateFromStores[8]).useStateFromStores(items2, () => {
    let tmp2;
    if (null !== memo) {
      let id;
      if (tmp != null) {
        id = tmp.id;
      }
      const userProfile = closure_1_6.getUserProfile(id);
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
        id = closure_1_9;
      }
      memo(stateFromStores[9])(id, undefined, { withMutualGuilds: true });
      const tmp3 = memo(stateFromStores[9]);
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
      id = tmp.id;
    }
    if (null != id) {
      let obj = memo(stateFromStores[10]);
      obj = { type: "APP_DM_OPEN", botUserId: null };
      obj[1] = tmp.id;
      obj.dispatch(obj);
    }
  }, items4);
  obj = { commandTypes: items };
  obj = { applicationId: stateFromStores, allowFetch: null, allowApplicationState: true };
  let id2;
  if (memo != null) {
    id2 = memo.id;
  }
  obj[1] = null != id2;
  const descriptors = useQueryState({ channel, type: "channel" }, obj, obj).descriptors;
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
      fromServer = closure_1_7.createFromServer(tmp);
    }
    return fromServer;
  }, items5);
  const obj3 = channel(stateFromStores[8]);
  const tmp10 = useQueryState;
  let tmp2 = channel;
  let tmp3 = stateFromStores;
  if (null == memo1) {
    const tmp15 = stateFromStores;
  }
  if (memo1 == null) {
    memo1 = tmp2Result.useGetOrFetchApplication(tmp15);
  }
  obj1 = { application: memo1, isAppDM: null };
  let flag;
  if (memo != null) {
    flag = memo.bot;
  }
  if (flag == null) {
    flag = false;
  }
  obj1[1] = flag;
  return obj1;
};