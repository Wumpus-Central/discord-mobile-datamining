// === Module 12123: ChatInputGuardReadonly ===

// Module 12123 (ChatInputGuardReadonly)
import SnowflakeUtilsDefault from "SnowflakeUtils" /* 11 */;
import Fragment from "Fragment" /* 21 */;
import react2 from "react" /* 576 */;
import router_utils from "router_utils" /* 1112 */;
import intl4 from "intl" /* 1126 */;
import GlobalUtils from "GlobalUtils" /* 1375 */;
import ChannelRecord from "ChannelRecord" /* 2055 */;
import GuildChannelStore2 from "GuildChannelStore" /* 4507 */;
import AppAnalyticsUtilsDefault from "AppAnalyticsUtils" /* 5070 */;
import ChatInputConstants from "ChatInputConstants" /* 11576 */;
import ChatInputGuardDefault from "ChatInputGuard" /* 12090 */;
import react from "react" /* 19 */;
import ChannelStore from "ChannelStore" /* 2051 */;
import PermissionStore from "PermissionStore" /* 4509 */;
import ReadStateStore from "ReadStateStore" /* 4905 */;
import RelationshipStore from "RelationshipStore" /* 4519 */;
import UserStore from "UserStore" /* 1377 */;
import Constants from "Constants" /* 1085 */;
import ReactCompilerGating_mod from "ReactCompilerGating" /* 558 */;
import size from "module_2" /* 2 */;

const require = globalThis.__r;
const GuildChannelStore = GuildChannelStore2;
let _require;

let closure_12;
let map1;
function sortChannelsByLastMessageId(id, id2) {
  const compare = SnowflakeUtilsDefault.compare;
  SnowflakeUtilsDefault;
  const lastMessageIdResult = ReadStateStore.lastMessageId(id2.id);
  return compare(lastMessageIdResult, ReadStateStore.lastMessageId(id.id));
}
const isTextChannel = ChannelRecord.isTextChannel;
let closure_6 = GuildChannelStore2.GUILD_SELECTABLE_CHANNELS_KEY;
const TextAreaCta = ChatInputConstants.TextAreaCta;
({ AnalyticEvents: closure_12, Permissions: map1 } = Constants);
const jsx = Fragment.jsx;
let ReactCompilerGating = ReactCompilerGating_mod;
let closure_15 = ReactCompilerGating.isReactCompilerEnabled() ? ((arg0, arg1) => {
  let closure_0;
  let first;
  let stateFromStores;
  let stateFromStoresArray1;
  let tmp11;
  let tmp14;
  let tmp16;
  let tmp18;
  let tmp21;
  let tmp24;
  _require = arg0;
  let obj = require("react");
  const cResult = obj.c(29);
  let obj2 = require("MemberActionUtils");
  const channelAction = obj2.useMemberActionsForChannel(arg0, arg1).channelAction;
  let channelId;
  const useNextMemberAction = require("MemberActionUtils").useNextMemberAction;
  require("MemberActionUtils");
  if (channelAction != null) {
    channelId = channelAction.channelId;
  }
  const nextMemberAction = useNextMemberAction(arg0, channelId);
  if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
    const items = [stateFromStoresArray1];
    cResult[0] = items;
    first = items;
  } else {
    first = cResult[0];
  }
  let channelId1;
  const tmp9 = cResult[1];
  if (nextMemberAction != null) {
    channelId1 = nextMemberAction.channelId;
  }
  if (tmp9 !== channelId1) {
    let channelId2;
    if (nextMemberAction != null) {
      channelId2 = nextMemberAction.channelId;
    }
    class S {
      constructor() {
        let channelId;
        const getChannel = ChannelStore.getChannel;
        if (nextMemberAction != null) {
          channelId = nextMemberAction.channelId;
        }
        return getChannel(channelId);
      }
    }
    cResult[1] = channelId2;
    cResult[2] = S;
    tmp11 = S;
  } else {
    tmp11 = cResult[2];
  }
  const tmpResult = require("get initialized");
  stateFromStores = tmpResult.useStateFromStores(first, tmp11);
  if (cResult[3] === Symbol.for("react.memo_cache_sentinel")) {
    const items1 = [];
    class S {
      constructor() {
        let channelId;
        const getChannel = ChannelStore.getChannel;
        if (nextMemberAction != null) {
          channelId = nextMemberAction.channelId;
        }
        return getChannel(channelId);
      }
    }
    cResult[3] = items1;
    tmp14 = items1;
  } else {
    tmp14 = cResult[3];
  }
  if (cResult[4] !== arg0) {
    const fn = function p() {
      const arr = GuildChannelStore.getChannels(closure_0)[closure_6];
      const mapped = arr.map((channel) => channel.channel);
      return mapped.sort(sortChannelsByLastMessageId);
    };
    class S {
      constructor() {
        let channelId;
        const getChannel = ChannelStore.getChannel;
        if (nextMemberAction != null) {
          channelId = nextMemberAction.channelId;
        }
        return getChannel(channelId);
      }
    }
    cResult[5] = fn;
    tmp16 = fn;
  } else {
    tmp16 = cResult[5];
  }
  const tmpResult3 = require("get initialized");
  const stateFromStoresArray = tmpResult3.useStateFromStoresArray(tmp14, tmp16);
  if (cResult[6] === Symbol.for("react.memo_cache_sentinel")) {
    const items2 = [];
    class S {
      constructor() {
        let channelId;
        const getChannel = ChannelStore.getChannel;
        if (nextMemberAction != null) {
          channelId = nextMemberAction.channelId;
        }
        return getChannel(channelId);
      }
    }
    cResult[6] = items2;
    tmp18 = items2;
  } else {
    tmp18 = cResult[6];
  }
  if (cResult[7] !== stateFromStoresArray) {
    class P {
      constructor() {
        const found = stateFromStoresArray.filter(GlobalUtils.isNotNullish);
        const found1 = found.filter((type) => stateFromStoresArray(type.type));
        return found1.filter((item) => closure_1_7.can(constants.SEND_MESSAGES, item));
      }
    }
    const items3 = [];
    class S {
      constructor() {
        let channelId;
        const getChannel = ChannelStore.getChannel;
        if (nextMemberAction != null) {
          channelId = nextMemberAction.channelId;
        }
        return getChannel(channelId);
      }
    }
    cResult[7] = stateFromStoresArray;
    cResult[8] = P;
    cResult[9] = items3;
    tmp21 = items3;
  } else {
    class P {
      constructor() {
        const found = stateFromStoresArray.filter(GlobalUtils.isNotNullish);
        const found1 = found.filter((type) => stateFromStoresArray(type.type));
        return found1.filter((item) => closure_1_7.can(constants.SEND_MESSAGES, item));
      }
    }
    tmp21 = cResult[9];
  }
  const tmpResult4 = require("get initialized");
  stateFromStoresArray1 = tmpResult4.useStateFromStoresArray(tmp18, P, tmp21);
  if (null != stateFromStores) {
    class P {
      constructor() {
        const found = stateFromStoresArray.filter(GlobalUtils.isNotNullish);
        const found1 = found.filter((type) => stateFromStoresArray(type.type));
        return found1.filter((item) => closure_1_7.can(constants.SEND_MESSAGES, item));
      }
    }
    if (cResult[12] === arg0) {
      class P {
        constructor() {
          const found = stateFromStoresArray.filter(GlobalUtils.isNotNullish);
          const found1 = found.filter((type) => stateFromStoresArray(type.type));
          return found1.filter((item) => closure_1_7.can(constants.SEND_MESSAGES, item));
        }
      }
      if (cResult[15] === tmp30) {
        class P {
          constructor() {
            const found = stateFromStoresArray.filter(GlobalUtils.isNotNullish);
            const found1 = found.filter((type) => stateFromStoresArray(type.type));
            return found1.filter((item) => closure_1_7.can(constants.SEND_MESSAGES, item));
          }
        }
        tmp24 = tmp33;
      }
      class D {
        constructor() {
          const obj = AppAnalyticsUtilsDefault;
          const obj2 = { cta_type: TextAreaCta.CHANNEL_LINK };
          obj.trackWithMetadata(constants.TEXT_AREA_CTA_CLICKED, obj2);
          const obj3 = router_utils;
          obj3.transitionToGuild(closure_0, stateFromStores.id);
        }
      }
      tmp33[0] = tmp30;
      tmp33[1] = D;
      cResult[15] = tmp30;
      cResult[16] = D;
      cResult[17] = tmp33;
    }
    class D {
      constructor() {
        const obj = AppAnalyticsUtilsDefault;
        const obj2 = { cta_type: TextAreaCta.CHANNEL_LINK };
        obj.trackWithMetadata(constants.TEXT_AREA_CTA_CLICKED, obj2);
        const obj3 = router_utils;
        obj3.transitionToGuild(closure_0, stateFromStores.id);
      }
    }
    cResult[12] = arg0;
    cResult[13] = stateFromStores;
    cResult[14] = D;
  } else {
    class P {
      constructor() {
        const found = stateFromStoresArray.filter(GlobalUtils.isNotNullish);
        const found1 = found.filter((type) => stateFromStoresArray(type.type));
        return found1.filter((item) => closure_1_7.can(constants.SEND_MESSAGES, item));
      }
    }
    if (0 === stateFromStoresArray1.length) {
      class P {
        constructor() {
          const found = stateFromStoresArray.filter(GlobalUtils.isNotNullish);
          const found1 = found.filter((type) => stateFromStoresArray(type.type));
          return found1.filter((item) => closure_1_7.can(constants.SEND_MESSAGES, item));
        }
      }
      class D {
        constructor() {
          const obj = AppAnalyticsUtilsDefault;
          const obj2 = { cta_type: TextAreaCta.CHANNEL_LINK };
          obj.trackWithMetadata(constants.TEXT_AREA_CTA_CLICKED, obj2);
          const obj3 = router_utils;
          obj3.transitionToGuild(closure_0, stateFromStores.id);
        }
      }
      if (cResult[19] !== arg0) {
        class P {
          constructor() {
            const found = stateFromStoresArray.filter(GlobalUtils.isNotNullish);
            const found1 = found.filter((type) => stateFromStoresArray(type.type));
            return found1.filter((item) => closure_1_7.can(constants.SEND_MESSAGES, item));
          }
        }
        tmp29[0] = tmp27;
        class D {
          constructor() {
            const obj = AppAnalyticsUtilsDefault;
            const obj2 = { cta_type: TextAreaCta.CHANNEL_LINK };
            obj.trackWithMetadata(constants.TEXT_AREA_CTA_CLICKED, obj2);
            const obj3 = router_utils;
            obj3.transitionToGuild(closure_0, stateFromStores.id);
          }
        }
        cResult[19] = arg0;
        cResult[20] = tmp29;
      } else {
        class P {
          constructor() {
            const found = stateFromStoresArray.filter(GlobalUtils.isNotNullish);
            const found1 = found.filter((type) => stateFromStoresArray(type.type));
            return found1.filter((item) => closure_1_7.can(constants.SEND_MESSAGES, item));
          }
        }
      }
      tmp24 = tmp29;
    } else {
      class P {
        constructor() {
          const found = stateFromStoresArray.filter(GlobalUtils.isNotNullish);
          const found1 = found.filter((type) => stateFromStoresArray(type.type));
          return found1.filter((item) => closure_1_7.can(constants.SEND_MESSAGES, item));
        }
      }
      if (cResult[23] === stateFromStoresArray1[0]) {
        class P {
          constructor() {
            const found = stateFromStoresArray.filter(GlobalUtils.isNotNullish);
            const found1 = found.filter((type) => stateFromStoresArray(type.type));
            return found1.filter((item) => closure_1_7.can(constants.SEND_MESSAGES, item));
          }
        }
        if (cResult[26] === tmp22) {
          class P {
            constructor() {
              const found = stateFromStoresArray.filter(GlobalUtils.isNotNullish);
              const found1 = found.filter((type) => stateFromStoresArray(type.type));
              return found1.filter((item) => closure_1_7.can(constants.SEND_MESSAGES, item));
            }
          }
        }
        class D {
          constructor() {
            const obj = AppAnalyticsUtilsDefault;
            const obj2 = { cta_type: TextAreaCta.CHANNEL_LINK };
            obj.trackWithMetadata(constants.TEXT_AREA_CTA_CLICKED, obj2);
            const obj3 = router_utils;
            obj3.transitionToGuild(closure_0, stateFromStores.id);
          }
        }
        tmp25[0] = tmp22;
        tmp25[1] = H;
        cResult[26] = tmp22;
        cResult[27] = H;
        cResult[28] = tmp25;
        tmp24 = tmp25;
      }
      class D {
        constructor() {
          const obj = AppAnalyticsUtilsDefault;
          const obj2 = { cta_type: TextAreaCta.CHANNEL_LINK };
          obj.trackWithMetadata(constants.TEXT_AREA_CTA_CLICKED, obj2);
          const obj3 = router_utils;
          obj3.transitionToGuild(closure_0, stateFromStores.id);
        }
      }
      cResult[23] = stateFromStoresArray1[0];
      cResult[24] = arg0;
      cResult[25] = H;
    }
  }
  return tmp24;
}) : ((arg0, arg1) => {
  let closure_0;
  let formatToPlainString;
  let intl;
  let obj3;
  let obj5;
  let obj6;
  let q1krfU;
  let stateFromStores;
  let stateFromStoresArray1;
  let tmpResult7;
  _require = arg0;
  let obj = require("MemberActionUtils");
  const channelAction = obj.useMemberActionsForChannel(arg0, arg1).channelAction;
  let channelId;
  const useNextMemberAction = require("MemberActionUtils").useNextMemberAction;
  require("MemberActionUtils");
  if (channelAction != null) {
    channelId = channelAction.channelId;
  }
  channelId = useNextMemberAction(arg0, channelId);
  const items = [stateFromStoresArray1];
  const tmpResult = require("get initialized");
  stateFromStores = tmpResult.useStateFromStores(items, () => {
    channelId = undefined;
    const getChannel = ChannelStore.getChannel;
    if (channelId != null) {
      channelId = channelId.channelId;
    }
    return getChannel(channelId);
  });
  const items1 = [GuildChannelStore];
  const tmpResult5 = require("get initialized");
  const stateFromStoresArray = tmpResult5.useStateFromStoresArray(items1, () => {
    const arr = GuildChannelStore.getChannels(closure_0)[closure_6];
    const mapped = arr.map((channel) => channel.channel);
    return mapped.sort(sortChannelsByLastMessageId);
  });
  const items2 = [PermissionStore];
  const items3 = [stateFromStoresArray];
  const tmpResult6 = require("get initialized");
  stateFromStoresArray1 = tmpResult6.useStateFromStoresArray(items2, () => {
    const found = stateFromStoresArray.filter(GlobalUtils.isNotNullish);
    const found1 = found.filter((type) => stateFromStoresArray(type.type));
    return found1.filter((item) => closure_1_7.can(constants.SEND_MESSAGES, item));
  }, items3);
  if (null != stateFromStores) {
    let obj2 = {
      text: formatToPlainString(q1krfU, obj3),
      handlePress() {
          const obj = AppAnalyticsUtilsDefault;
          const obj2 = { cta_type: TextAreaCta.CHANNEL_LINK };
          obj.trackWithMetadata(constants.TEXT_AREA_CTA_CLICKED, obj2);
          const obj3 = router_utils;
          obj3.transitionToGuild(closure_0, stateFromStores.id);
        }
    };
    const intl2 = tmp(tmp2[16]).intl;
    formatToPlainString = intl2.formatToPlainString;
    obj3 = { channelName: tmpResult7.computeChannelName(stateFromStores, UserStore, RelationshipStore) };
    q1krfU = tmp(tmp2[16]).t.q1krfU;
    obj5 = obj2;
    tmpResult7 = require("useChannelName");
  } else if (0 === stateFromStoresArray1.length) {
    const obj4 = {
      text: intl.string(require("intl").t["gHD/nZ"]),
      handlePress() {
          const obj = AppAnalyticsUtilsDefault;
          const obj2 = { cta_type: TextAreaCta.CHANNEL_LIST };
          obj.trackWithMetadata(constants.TEXT_AREA_CTA_CLICKED, obj2);
          const obj3 = router_utils;
          obj3.transitionToGuild(closure_0, undefined);
        }
    };
    intl = tmp(tmp2[16]).intl;
    obj5 = obj4;
  } else {
    const intl3 = tmp(tmp2[16]).intl;
    const formatToPlainString2 = intl3.formatToPlainString;
    let str = "";
    const q1krfU2 = tmp(tmp2[16]).t.q1krfU;
    if (null != stateFromStoresArray1[0]) {
      const tmpResult8 = require("useChannelName");
      str = tmpResult8.computeChannelName(stateFromStoresArray1[0], UserStore, RelationshipStore);
    }
    obj5 = {
      text: formatToPlainString2(q1krfU2, obj6),
      handlePress() {
          const obj = AppAnalyticsUtilsDefault;
          const obj2 = { cta_type: TextAreaCta.CHANNEL_LINK };
          obj.trackWithMetadata(constants.TEXT_AREA_CTA_CLICKED, obj2);
          const obj3 = router_utils;
          obj3.transitionToGuild(closure_0, stateFromStoresArray1[0].id);
        }
    };
    obj6 = { channelName: str };
  }
  return obj5;
});
ReactCompilerGating = ReactCompilerGating_mod;
const memoResult = react.memo(ReactCompilerGating.isReactCompilerEnabled() ? ((guildId) => {
  let first;
  let handlePress;
  let text;
  const obj = react2;
  const cResult = obj.c(4);
  ({ text, handlePress } = closure_15(guildId.guildId, guildId.channel));
  closure_15(guildId.guildId, guildId.channel);
  if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
    const intl = intl4.intl;
    const stringResult = intl.string(intl4.t["9cs5LM"]);
    cResult[0] = stringResult;
    first = stringResult;
  } else {
    first = cResult[0];
  }
  if (cResult[1] === handlePress) {
    let tmp7;
    if (cResult[2] === text) {
      tmp7 = cResult[3];
    }
    return tmp7;
  }
  const tmp8 = jsx(ChatInputGuardDefault, { type: "simple-action", actionOnPress: handlePress, actionLabel: first, message: text });
  cResult[1] = handlePress;
  cResult[2] = text;
  cResult[3] = tmp8;
  tmp7 = tmp8;
}) : ((guildId) => {
  let handlePress;
  let text;
  ({ text, handlePress } = closure_15(guildId.guildId, guildId.channel));
  closure_15(guildId.guildId, guildId.channel);
  ChatInputGuardDefault;
  const intl = intl4.intl;
  return <tmp2 type="simple-action" actionOnPress={handlePress} actionLabel={intl.string(intl4.t["9cs5LM"])} message={text} />;
}));
const result = size.fileFinishedImporting("modules/chat_input/native/guard/ChatInputGuardReadonly.tsx");

export default memoResult;