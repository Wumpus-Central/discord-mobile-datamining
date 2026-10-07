// === Module 12138: ChatInputGuardReadonly ===

// Module 12138 (ChatInputGuardReadonly)
import SnowflakeUtilsDefault from "SnowflakeUtils" /* 11 */;
import c from "c" /* 576 */;
import router_utils from "router_utils" /* 1112 */;
import util from "util" /* 1126 */;
import GlobalUtils from "GlobalUtils" /* 1375 */;
import AppAnalyticsUtilsDefault from "AppAnalyticsUtils" /* 5076 */;
import ChatInputGuardDefault from "ChatInputGuard" /* 12105 */;
import noop from "module_19" /* 19 */;
import ChannelStore from "ChannelStore" /* 2051 */;
import GuildChannelStore from "GuildChannelStore" /* 4513 */;
import PermissionStore from "PermissionStore" /* 4515 */;
import ReadStateStore from "ReadStateStore" /* 4911 */;
import RelationshipStore from "RelationshipStore" /* 4525 */;
import UserStore from "UserStore" /* 1377 */;

require = fn;
function sortChannelsByLastMessageId(id, id2) {
  const obj = SnowflakeUtilsDefault;
  return obj.compare(ReadStateStore.lastMessageId(id2.id), ReadStateStore.lastMessageId(id.id));
}
const isTextChannel = fn(2055).isTextChannel;
let closure_6 = fn(4513).GUILD_SELECTABLE_CHANNELS_KEY;
const TextAreaCta = fn(11589).TextAreaCta;
const Constants = fn(1085);
({ AnalyticEvents: closure_12, Permissions: map1 } = Constants);
const jsx = fn(21).jsx;
let ReactCompilerGating = fn(558);
let closure_15 = ReactCompilerGating.isReactCompilerEnabled() ? ((arg0, arg1) => {
  _require = arg0;
  const cResult = require("c").c(29);
  let obj = require("c");
  const channelAction = require("MemberActionUtils").useMemberActionsForChannel(arg0, arg1).channelAction;
  let obj2 = require("MemberActionUtils");
  let channelId;
  if (channelAction != null) {
    channelId = channelAction.channelId;
  }
  const nextMemberAction = require("MemberActionUtils").useNextMemberAction(arg0, channelId);
  if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
    const items = [stateFromStoresArray1];
    cResult[0] = items;
    let first = items;
  } else {
    first = cResult[0];
  }
  let channelId1;
  if (nextMemberAction != null) {
    channelId1 = nextMemberAction.channelId;
  }
  if (cResult[1] !== channelId1) {
    let channelId2;
    if (nextMemberAction != null) {
      channelId2 = nextMemberAction.channelId;
    }
    class S {
      constructor() {
        channelId = undefined;
        tmp = closure_4;
        if (closure_1 != null) {
          channelId = closure_1.channelId;
        }
        return closure_4.getChannel(channelId);
      }
    }
    cResult[1] = channelId2;
    cResult[2] = S;
    let tmp9 = S;
  } else {
    tmp9 = cResult[2];
  }
  const obj3 = require("MemberActionUtils");
  stateFromStores = require("initialize").useStateFromStores(first, tmp9);
  if (cResult[3] === Symbol.for("react.memo_cache_sentinel")) {
    const items1 = [];
    class S {
      constructor() {
        channelId = undefined;
        tmp = closure_4;
        if (closure_1 != null) {
          channelId = closure_1.channelId;
        }
        return closure_4.getChannel(channelId);
      }
    }
    cResult[3] = items1;
    let tmp12 = items1;
  } else {
    tmp12 = cResult[3];
  }
  if (cResult[4] !== arg0) {
    const fn = function p() {
      const mapped = GuildChannelStore.getChannels(closure_0)[closure_6].map((channel) => channel.channel);
      return mapped.sort(sortChannelsByLastMessageId);
    };
    class S {
      constructor() {
        channelId = undefined;
        tmp = closure_4;
        if (closure_1 != null) {
          channelId = closure_1.channelId;
        }
        return closure_4.getChannel(channelId);
      }
    }
    cResult[5] = fn;
    let tmp14 = fn;
  } else {
    tmp14 = cResult[5];
  }
  const tmpResult = require("initialize");
  const stateFromStoresArray = require("initialize").useStateFromStoresArray(tmp12, tmp14);
  if (cResult[6] === Symbol.for("react.memo_cache_sentinel")) {
    const items2 = [];
    class S {
      constructor() {
        channelId = undefined;
        tmp = closure_4;
        if (closure_1 != null) {
          channelId = closure_1.channelId;
        }
        return closure_4.getChannel(channelId);
      }
    }
    cResult[6] = items2;
    let tmp16 = items2;
  } else {
    tmp16 = cResult[6];
  }
  if (cResult[7] !== stateFromStoresArray) {
    class P {
      constructor() {
        found = closure_3.filter(closure_0(closure_2[15]).isNotNullish);
        found1 = found.filter((type) => stateFromStoresArray(type.type));
        return found1.filter((item) => closure_1_7.can(constants.SEND_MESSAGES, item));
      }
    }
    const items3 = [];
    class S {
      constructor() {
        channelId = undefined;
        tmp = closure_4;
        if (closure_1 != null) {
          channelId = closure_1.channelId;
        }
        return closure_4.getChannel(channelId);
      }
    }
    cResult[7] = stateFromStoresArray;
    cResult[8] = P;
    cResult[9] = items3;
    let tmp19 = items3;
  } else {
    class P {
      constructor() {
        found = closure_3.filter(closure_0(closure_2[15]).isNotNullish);
        found1 = found.filter((type) => stateFromStoresArray(type.type));
        return found1.filter((item) => closure_1_7.can(constants.SEND_MESSAGES, item));
      }
    }
    tmp19 = cResult[9];
  }
  const tmpResult3 = require("initialize");
  stateFromStoresArray1 = require("initialize").useStateFromStoresArray(tmp16, P, tmp19);
  if (null != stateFromStores) {
    class P {
      constructor() {
        found = closure_3.filter(closure_0(closure_2[15]).isNotNullish);
        found1 = found.filter((type) => stateFromStoresArray(type.type));
        return found1.filter((item) => closure_1_7.can(constants.SEND_MESSAGES, item));
      }
    }
    if (cResult[12] === arg0) {
      class P {
        constructor() {
          found = closure_3.filter(closure_0(closure_2[15]).isNotNullish);
          found1 = found.filter((type) => stateFromStoresArray(type.type));
          return found1.filter((item) => closure_1_7.can(constants.SEND_MESSAGES, item));
        }
      }
      if (cResult[15] === tmp29) {
        class P {
          constructor() {
            found = closure_3.filter(closure_0(closure_2[15]).isNotNullish);
            found1 = found.filter((type) => stateFromStoresArray(type.type));
            return found1.filter((item) => closure_1_7.can(constants.SEND_MESSAGES, item));
          }
        }
      }
      class D {
        constructor() {
          obj = closure_1(closure_2[18]);
          obj1 = { cta_type: TextAreaCta.CHANNEL_LINK };
          trackWithMetadataResult = obj.trackWithMetadata(AnalyticEvents.TEXT_AREA_CTA_CLICKED, obj1);
          obj3 = closure_0(closure_2[19]);
          transitionToGuildResult = obj3.transitionToGuild(closure_0, closure_2.id);
          return;
        }
      }
      tmp32[0] = tmp29;
      tmp32[1] = D;
      cResult[15] = tmp29;
      cResult[16] = D;
      cResult[17] = tmp32;
    }
    class D {
      constructor() {
        obj = closure_1(closure_2[18]);
        obj1 = { cta_type: TextAreaCta.CHANNEL_LINK };
        trackWithMetadataResult = obj.trackWithMetadata(AnalyticEvents.TEXT_AREA_CTA_CLICKED, obj1);
        obj3 = closure_0(closure_2[19]);
        transitionToGuildResult = obj3.transitionToGuild(closure_0, closure_2.id);
        return;
      }
    }
    cResult[12] = arg0;
    cResult[13] = stateFromStores;
    cResult[14] = D;
  } else {
    class P {
      constructor() {
        found = closure_3.filter(closure_0(closure_2[15]).isNotNullish);
        found1 = found.filter((type) => stateFromStoresArray(type.type));
        return found1.filter((item) => closure_1_7.can(constants.SEND_MESSAGES, item));
      }
    }
    if (0 === stateFromStoresArray1.length) {
      class P {
        constructor() {
          found = closure_3.filter(closure_0(closure_2[15]).isNotNullish);
          found1 = found.filter((type) => stateFromStoresArray(type.type));
          return found1.filter((item) => closure_1_7.can(constants.SEND_MESSAGES, item));
        }
      }
      class D {
        constructor() {
          obj = closure_1(closure_2[18]);
          obj1 = { cta_type: TextAreaCta.CHANNEL_LINK };
          trackWithMetadataResult = obj.trackWithMetadata(AnalyticEvents.TEXT_AREA_CTA_CLICKED, obj1);
          obj3 = closure_0(closure_2[19]);
          transitionToGuildResult = obj3.transitionToGuild(closure_0, closure_2.id);
          return;
        }
      }
      if (cResult[19] !== arg0) {
        class P {
          constructor() {
            found = closure_3.filter(closure_0(closure_2[15]).isNotNullish);
            found1 = found.filter((type) => stateFromStoresArray(type.type));
            return found1.filter((item) => closure_1_7.can(constants.SEND_MESSAGES, item));
          }
        }
        tmp27[0] = tmp25;
        class D {
          constructor() {
            obj = closure_1(closure_2[18]);
            obj1 = { cta_type: TextAreaCta.CHANNEL_LINK };
            trackWithMetadataResult = obj.trackWithMetadata(AnalyticEvents.TEXT_AREA_CTA_CLICKED, obj1);
            obj3 = closure_0(closure_2[19]);
            transitionToGuildResult = obj3.transitionToGuild(closure_0, closure_2.id);
            return;
          }
        }
        tmp27[1] = tmp25;
        cResult[19] = arg0;
        cResult[20] = tmp27;
      } else {
        class P {
          constructor() {
            found = closure_3.filter(closure_0(closure_2[15]).isNotNullish);
            found1 = found.filter((type) => stateFromStoresArray(type.type));
            return found1.filter((item) => closure_1_7.can(constants.SEND_MESSAGES, item));
          }
        }
      }
    } else {
      class P {
        constructor() {
          found = closure_3.filter(closure_0(closure_2[15]).isNotNullish);
          found1 = found.filter((type) => stateFromStoresArray(type.type));
          return found1.filter((item) => closure_1_7.can(constants.SEND_MESSAGES, item));
        }
      }
      if (cResult[23] === stateFromStoresArray1[0]) {
        class P {
          constructor() {
            found = closure_3.filter(closure_0(closure_2[15]).isNotNullish);
            found1 = found.filter((type) => stateFromStoresArray(type.type));
            return found1.filter((item) => closure_1_7.can(constants.SEND_MESSAGES, item));
          }
        }
        if (cResult[26] === tmp20) {
          class P {
            constructor() {
              found = closure_3.filter(closure_0(closure_2[15]).isNotNullish);
              found1 = found.filter((type) => stateFromStoresArray(type.type));
              return found1.filter((item) => closure_1_7.can(constants.SEND_MESSAGES, item));
            }
          }
          return tmp23;
        }
        class D {
          constructor() {
            obj = closure_1(closure_2[18]);
            obj1 = { cta_type: TextAreaCta.CHANNEL_LINK };
            trackWithMetadataResult = obj.trackWithMetadata(AnalyticEvents.TEXT_AREA_CTA_CLICKED, obj1);
            obj3 = closure_0(closure_2[19]);
            transitionToGuildResult = obj3.transitionToGuild(closure_0, closure_2.id);
            return;
          }
        }
        tmp23[0] = tmp20;
        tmp23[1] = H;
        cResult[26] = tmp20;
        cResult[27] = H;
        cResult[28] = tmp23;
      }
      class D {
        constructor() {
          obj = closure_1(closure_2[18]);
          obj1 = { cta_type: TextAreaCta.CHANNEL_LINK };
          trackWithMetadataResult = obj.trackWithMetadata(AnalyticEvents.TEXT_AREA_CTA_CLICKED, obj1);
          obj3 = closure_0(closure_2[19]);
          transitionToGuildResult = obj3.transitionToGuild(closure_0, closure_2.id);
          return;
        }
      }
      cResult[23] = stateFromStoresArray1[0];
      cResult[24] = arg0;
      cResult[25] = H;
    }
  }
  const tmpResult4 = require("initialize");
}) : ((arg0, arg1) => {
  _require = arg0;
  const channelAction = require("MemberActionUtils").useMemberActionsForChannel(arg0, arg1).channelAction;
  let obj = require("MemberActionUtils");
  let channelId;
  if (channelAction != null) {
    channelId = channelAction.channelId;
  }
  channelId = require("MemberActionUtils").useNextMemberAction(arg0, channelId);
  let obj2 = require("MemberActionUtils");
  const items = [stateFromStoresArray1];
  stateFromStores = require("initialize").useStateFromStores(items, () => {
    channelId = undefined;
    if (channelId != null) {
      channelId = channelId.channelId;
    }
    return ChannelStore.getChannel(channelId);
  });
  const tmpResult = require("initialize");
  const items1 = [GuildChannelStore];
  const stateFromStoresArray = require("initialize").useStateFromStoresArray(items1, () => {
    const mapped = GuildChannelStore.getChannels(closure_0)[closure_6].map((channel) => channel.channel);
    return mapped.sort(sortChannelsByLastMessageId);
  });
  const tmpResult5 = require("initialize");
  const items2 = [PermissionStore];
  const items3 = [stateFromStoresArray];
  stateFromStoresArray1 = require("initialize").useStateFromStoresArray(items2, () => {
    const found = stateFromStoresArray.filter(GlobalUtils.isNotNullish);
    const found1 = found.filter((type) => stateFromStoresArray(type.type));
    return found1.filter((item) => closure_1_7.can(constants.SEND_MESSAGES, item));
  }, items3);
  if (null != stateFromStores) {
    const obj3 = { text: null, handlePress: null };
    const intl2 = tmp(tmp2[16]).intl;
    const obj4 = { channelName: tmp(tmp2[17]).computeChannelName(stateFromStores, UserStore, RelationshipStore) };
    obj3.text = intl2.formatToPlainString(tmp(tmp2[16]).t.q1krfU, obj4);
    obj3.handlePress = function handlePress() {
      AppAnalyticsUtilsDefault.trackWithMetadata(constants.TEXT_AREA_CTA_CLICKED, { cta_type: TextAreaCta.CHANNEL_LINK });
      const obj2 = { cta_type: TextAreaCta.CHANNEL_LINK };
      router_utils.transitionToGuild(closure_0, stateFromStores.id);
    };
    let obj6 = obj3;
    const tmpResult7 = tmp(tmp2[17]);
  } else if (0 === stateFromStoresArray1.length) {
    const obj5 = { text: null, handlePress: null };
    const intl = tmp(tmp2[16]).intl;
    obj5.text = intl.string(tmp(tmp2[16]).t["gHD/nZ"]);
    obj5.handlePress = function handlePress() {
      AppAnalyticsUtilsDefault.trackWithMetadata(constants.TEXT_AREA_CTA_CLICKED, { cta_type: TextAreaCta.CHANNEL_LIST });
      const obj2 = { cta_type: TextAreaCta.CHANNEL_LIST };
      router_utils.transitionToGuild(closure_0, undefined);
    };
    obj6 = obj5;
  } else {
    const intl3 = tmp(tmp2[16]).intl;
    let str = "";
    if (null != stateFromStoresArray1[0]) {
      str = tmp(tmp2[17]).computeChannelName(stateFromStoresArray1[0], UserStore, RelationshipStore);
      const tmpResult8 = tmp(tmp2[17]);
    }
    obj6 = { text: null, handlePress: null };
    const obj7 = { channelName: str };
    obj6.text = intl3.formatToPlainString(tmp(tmp2[16]).t.q1krfU, obj7);
    obj6.handlePress = function handlePress() {
      AppAnalyticsUtilsDefault.trackWithMetadata(constants.TEXT_AREA_CTA_CLICKED, { cta_type: TextAreaCta.CHANNEL_LINK });
      const obj2 = { cta_type: TextAreaCta.CHANNEL_LINK };
      router_utils.transitionToGuild(closure_0, stateFromStoresArray1[0].id);
    };
  }
  return obj6;
});
ReactCompilerGating = fn(558);
const size = fn(2);
const result = size.fileFinishedImporting("modules/chat_input/native/guard/ChatInputGuardReadonly.tsx");

export default noop.memo(ReactCompilerGating.isReactCompilerEnabled() ? ((guildId) => {
  const cResult = c.c(4);
  ({ text, handlePress } = closure_15(guildId.guildId, guildId.channel));
  if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
    const intl = util.intl;
    const stringResult = intl.string(util.t["9cs5LM"]);
    cResult[0] = stringResult;
    let first = stringResult;
  } else {
    first = cResult[0];
  }
  if (cResult[1] === handlePress) {
    if (cResult[2] === text) {
      let tmp7 = cResult[3];
    }
    return tmp7;
  }
  const tmp8 = jsx(ChatInputGuardDefault, { type: "simple-action", actionOnPress: handlePress, actionLabel: first, message: text });
  cResult[1] = handlePress;
  cResult[2] = text;
  cResult[3] = tmp8;
  tmp7 = tmp8;
  const tmp4 = closure_15(guildId.guildId, guildId.channel);
}) : ((guildId) => {
  ({ text, handlePress } = closure_15(guildId.guildId, guildId.channel));
  const obj = { type: "simple-action", actionOnPress: handlePress, actionLabel: null, message: null };
  const tmp = closure_15(guildId.guildId, guildId.channel);
  const intl = util.intl;
  obj.actionLabel = intl.string(util.t["9cs5LM"]);
  obj.message = text;
  return jsx(ChatInputGuardDefault, { type: "simple-action", actionOnPress: handlePress, actionLabel: null, message: null });
}));