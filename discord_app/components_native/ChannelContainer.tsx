// === Module 12478: ChannelContainer ===

// Module 12478 (ChannelContainer)
import react_native from "react-native" /* 17 */;
import get_initialized from "get initialized" /* 504 */;
import react2 from "react" /* 576 */;
import Constants from "Constants" /* 1085 */;
import dismissible_content from "dismissible_content" /* 2036 */;
import DismissibleContentConstants from "DismissibleContentConstants" /* 2048 */;
import DismissibleContentUnsafeUtils from "DismissibleContentUnsafeUtils" /* 4704 */;
import useChatLayoutDefault from "useChatLayout" /* 4745 */;
import common_NotificationsDefault from "common/Notifications" /* 12479 */;
import useChannelStylesShared from "useChannelStylesShared" /* 12562 */;
import react_mod from "react" /* 19 */;
import LurkingStore from "LurkingStore" /* 4516 */;
import ChannelStore from "ChannelStore" /* 2051 */;
import SelectedChannelStore from "SelectedChannelStore" /* 2103 */;
import Fragment from "Fragment" /* 21 */;
import createStyles from "createStyles" /* 4896 */;
import ReactCompilerGating_mod from "ReactCompilerGating" /* 558 */;
import size from "module_2" /* 2 */;

let dependencyMap, guildId;

let c10;
let unpackModuleId;
let react = react_mod;
const View = react_native.View;
const ChannelTypes = Constants.ChannelTypes;
const ContentDismissActionType = DismissibleContentConstants.ContentDismissActionType;
({ jsx: c10, jsxs: unpackModuleId } = Fragment);
let closure_12 = createStyles.createStyles({ container: { position: "absolute", left: 0, right: 0, backgroundColor: "transparent", marginTop: 8 } });
let ReactCompilerGating = ReactCompilerGating_mod;
let closure_13 = ReactCompilerGating.isReactCompilerEnabled() ? (() => {
  const obj = react2;
  const cResult = obj.c(3);
  const tmp3 = closure_12();
  let tmp5 = null;
  if (useChatLayoutDefault().isChatBesideChannelList) {
    let first;
    let tmp10;
    const _Symbol = Symbol;
    if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
      const tmp9 = authStore(common_NotificationsDefault, {});
      cResult[0] = tmp9;
      first = tmp9;
    } else {
      first = cResult[0];
    }
    if (cResult[1] !== tmp3.container) {
      const obj2 = { style: tmp3.container, children: first };
      const tmp13 = authStore(View, obj2);
      cResult[1] = tmp3.container;
      cResult[2] = tmp13;
      tmp10 = tmp13;
    } else {
      tmp10 = cResult[2];
    }
    tmp5 = tmp10;
  }
  return tmp5;
}) : (() => {
  let tmp4 = null;
  const tmp = closure_12();
  if (useChatLayoutDefault().isChatBesideChannelList) {
    const obj = { style: tmp.container, children: authStore(common_NotificationsDefault, {}) };
    tmp4 = authStore(View, obj);
  }
  return tmp4;
});
ReactCompilerGating = ReactCompilerGating_mod;
let tmp3 = ReactCompilerGating.isReactCompilerEnabled() ? ((guildId) => {
  let channel;
  let closure_2;
  let closure_3;
  let first;
  let isStageChannel;
  let items2;
  let items3;
  let tmp11;
  let tmp13;
  let tmp15;
  let tmp7;
  let tmp = guildId;
  let tmp2 = dependencyMap;
  let obj = guildId(576);
  const cResult = obj.c(29);
  guildId = guildId.guildId;
  const channelId = guildId.channelId;
  const children = guildId.children;
  if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
    const items = [SelectedChannelStore, ChannelStore];
    cResult[0] = items;
    first = items;
  } else {
    first = cResult[0];
  }
  if (cResult[1] !== channelId) {
    const fn = function f() {
      let _Boolean;
      let isGuildStageVoiceResult;
      const voiceChannelId = SelectedChannelStore.getVoiceChannelId();
      const obj = { channel: ChannelStore.getChannel(channelId), voiceChannelId, isStageChannel: _Boolean(isGuildStageVoiceResult) };
      _Boolean = Boolean;
      const channel = ChannelStore.getChannel(voiceChannelId);
      isGuildStageVoiceResult = undefined;
      if (channel != null) {
        isGuildStageVoiceResult = channel.isGuildStageVoice();
      }
      return obj;
    };
    cResult[1] = channelId;
    cResult[2] = fn;
    tmp7 = fn;
  } else {
    tmp7 = cResult[2];
  }
  const tmpResult = tmp(504);
  const stateFromStoresObject = tmpResult.useStateFromStoresObject(first, tmp7);
  ({ channel, isStageChannel } = stateFromStoresObject);
  let voiceChannelId = stateFromStoresObject.voiceChannelId;
  let tmp10 = !isStageChannel;
  if (isStageChannel) {
    tmp10 = channelId(9118)(voiceChannelId);
  }
  if (cResult[3] === Symbol.for("react.memo_cache_sentinel")) {
    const items1 = [LurkingStore];
    cResult[3] = items1;
    tmp11 = items1;
  } else {
    tmp11 = cResult[3];
  }
  if (cResult[4] !== guildId) {
    const fn2 = function p() {
      const isLurkingResult = null != guildId && LurkingStore.isLurking(tmp);
      return isLurkingResult;
    };
    cResult[4] = guildId;
    cResult[5] = fn2;
    tmp13 = fn2;
  } else {
    tmp13 = cResult[5];
  }
  const tmpResult3 = tmp(504);
  const stateFromStores = tmpResult3.useStateFromStores(tmp11, tmp13);
  if (cResult[6] !== channel) {
    const tmp17 = null != channel && channel.isPrivate();
    cResult[6] = channel;
    cResult[7] = tmp17;
    tmp15 = tmp17;
  } else {
    tmp15 = cResult[7];
  }
  dependencyMap = tmp15;
  const tmp18 = channelId(7957)(tmp15);
  react = tmp18;
  const tmp19 = channelId(7957)(channelId);
  let closure_4 = tmp19;
  if (cResult[8] === channelId) {
    if (cResult[9] === tmp15) {
      if (cResult[10] === tmp19) {
        let tmp20;
        let tmp21;
        if (cResult[11] === tmp18) {
          tmp20 = cResult[12];
          tmp21 = cResult[13];
        }
        const effect = react.useEffect(tmp20, tmp21);
        const tmpResult4 = tmp(12562);
        const channelStyles = tmpResult4.useChannelStyles();
        if (cResult[14] === channel) {
          let tmp25;
          if (cResult[15] === stateFromStores) {
            tmp25 = cResult[16];
          }
          if (cResult[17] === channelStyles.callPTTButton) {
            let tmp31;
            if (cResult[18] === tmp10) {
              tmp31 = cResult[19];
            }
            if (cResult[20] === channelStyles.flex) {
              if (cResult[21] === children) {
                if (cResult[22] === tmp25) {
                  let tmp34;
                  let tmp38;
                  if (cResult[23] === tmp31) {
                    tmp34 = cResult[24];
                  }
                  const _Symbol = Symbol;
                  if (cResult[25] === Symbol.for("react.memo_cache_sentinel")) {
                    const tmp41 = closure_10(closure_13, {});
                    cResult[25] = tmp41;
                    tmp38 = tmp41;
                  } else {
                    tmp38 = cResult[25];
                  }
                  if (cResult[26] === channelStyles.scene) {
                    let tmp42;
                    if (cResult[27] === tmp34) {
                      tmp42 = cResult[28];
                    }
                    return tmp42;
                  }
                  let obj2 = { style: channelStyles.scene, children: items2 };
                  items2 = [tmp34, tmp38];
                  const tmp45 = closure_11(closure_4, obj2);
                  cResult[26] = channelStyles.scene;
                  cResult[27] = tmp34;
                  cResult[28] = tmp45;
                  tmp42 = tmp45;
                }
              }
            }
            const obj3 = { style: channelStyles.flex, children: items3 };
            items3 = [tmp25, children, tmp31];
            const tmp37 = closure_11(closure_4, obj3);
            cResult[20] = channelStyles.flex;
            cResult[21] = children;
            cResult[22] = tmp25;
            cResult[23] = tmp31;
            cResult[24] = tmp37;
            tmp34 = tmp37;
          }
          let tmp32 = tmp10;
          if (tmp32) {
            const obj4 = { style: channelStyles.callPTTButton };
            tmp32 = closure_10(tmp9(9632), obj4);
          }
          cResult[17] = channelStyles.callPTTButton;
          cResult[18] = tmp10;
          cResult[19] = tmp32;
          tmp31 = tmp32;
        }
        let type;
        if (channel != null) {
          type = channel.type;
        }
        let tmp29 = null;
        if (type === ChannelTypes.GUILD_ANNOUNCEMENT) {
          tmp29 = null;
          if (stateFromStores) {
            const obj5 = { channel };
            tmp29 = closure_10(tmp9(12563), obj5);
          }
        }
        cResult[14] = channel;
        cResult[15] = stateFromStores;
        cResult[16] = tmp29;
        tmp25 = tmp29;
      }
    }
  }
  const fn3 = function x() {
    let tmp = closure_3;
    let tmp2 = closure_3 && !closure_2;
    if (!tmp2) {
      if (tmp) {
        tmp = closure_2;
      }
      if (tmp) {
        tmp = channelId !== closure_4;
      }
      tmp2 = tmp;
    }
    if (tmp2) {
      const obj2 = { dismissAction: ContentDismissActionType.AUTO };
      const obj = DismissibleContentUnsafeUtils;
      const result = obj.UNSAFE_markDismissibleContentAsDismissed(dismissible_content.DismissibleContent.ACTIVITY_GDM_CALL_TOOLTIP, obj2);
    }
  };
  const items4 = [channelId, tmp19, tmp15, tmp18];
  cResult[8] = channelId;
  cResult[9] = tmp15;
  cResult[10] = tmp19;
  cResult[11] = tmp18;
  cResult[12] = fn3;
  cResult[13] = items4;
  tmp21 = items4;
  tmp20 = fn3;
}) : ((children) => {
  let c2;
  let channel;
  let channelId;
  let closure_3;
  let isStageChannel;
  let items3;
  let items4;
  ({ guildId: require, channelId } = children);
  dependencyMap = undefined;
  react = undefined;
  let closure_4;
  let tmp2 = dependencyMap;
  children = children.children;
  let obj = get_initialized;
  const items = [SelectedChannelStore, ChannelStore];
  const stateFromStoresObject = obj.useStateFromStoresObject(items, () => {
    let _Boolean;
    let isGuildStageVoiceResult;
    const voiceChannelId = SelectedChannelStore.getVoiceChannelId();
    const obj = { channel: ChannelStore.getChannel(channelId), voiceChannelId, isStageChannel: _Boolean(isGuildStageVoiceResult) };
    _Boolean = Boolean;
    const channel = ChannelStore.getChannel(voiceChannelId);
    isGuildStageVoiceResult = undefined;
    if (channel != null) {
      isGuildStageVoiceResult = channel.isGuildStageVoice();
    }
    return obj;
  });
  ({ channel, isStageChannel } = stateFromStoresObject);
  let voiceChannelId = stateFromStoresObject.voiceChannelId;
  let tmp5 = !isStageChannel;
  if (isStageChannel) {
    tmp5 = channelId(9118)(voiceChannelId);
  }
  const items1 = [LurkingStore];
  let isPrivateResult = null != channel;
  const tmpResult = get_initialized;
  const stateFromStores = tmpResult.useStateFromStores(items1, () => {
    const isLurkingResult = null != require && LurkingStore.isLurking(tmp);
    return isLurkingResult;
  });
  if (isPrivateResult) {
    isPrivateResult = channel.isPrivate();
  }
  dependencyMap = isPrivateResult;
  const tmp8 = channelId(7957)(isPrivateResult);
  react = tmp8;
  const tmp9 = channelId(7957)(channelId);
  closure_4 = tmp9;
  const items2 = [channelId, tmp9, isPrivateResult, tmp8];
  const effect = react.useEffect(() => {
    let tmp = closure_3;
    let tmp2 = closure_3 && !c2;
    if (!tmp2) {
      if (tmp) {
        tmp = c2;
      }
      if (tmp) {
        tmp = channelId !== closure_4;
      }
      tmp2 = tmp;
    }
    if (tmp2) {
      const obj2 = { dismissAction: ContentDismissActionType.AUTO };
      const obj = DismissibleContentUnsafeUtils;
      const result = obj.UNSAFE_markDismissibleContentAsDismissed(dismissible_content.DismissibleContent.ACTIVITY_GDM_CALL_TOOLTIP, obj2);
    }
  }, items2);
  const tmpResult2 = useChannelStylesShared;
  const channelStyles = tmpResult2.useChannelStyles();
  let obj2 = { style: channelStyles.scene, children: items4 };
  let type;
  const obj3 = { style: channelStyles.flex, children: items3 };
  if (channel != null) {
    type = channel.type;
  }
  let tmp15 = null;
  if (type === ChannelTypes.GUILD_ANNOUNCEMENT) {
    tmp15 = null;
    if (stateFromStores) {
      const obj4 = { channel };
      tmp15 = closure_10(channelId(12563), obj4);
    }
  }
  items3 = [tmp15, children, ];
  if (tmp5) {
    const obj5 = { style: channelStyles.callPTTButton };
    tmp5 = closure_10(channelId(9632), obj5);
  }
  items3[2] = tmp5;
  items4 = [closure_11(closure_4, obj3), closure_10(closure_13, {})];
  return closure_11(closure_4, obj2);
});
let result = size.fileFinishedImporting("components_native/ChannelContainer.tsx");

export const ChannelContainer = tmp3;