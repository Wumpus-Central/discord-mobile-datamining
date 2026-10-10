// discord_app/components_native/ChannelContainer.tsx
import initialize from "../../discord_common/js/packages/flux/index.tsx";
import c from "../../_runtime/00576_c.js";
import dismissible_content from "../../discord_common/js/packages/protos/discord_protos/discord_users/v1/dismissible_content.tsx";
import DismissibleContentUnsafeUtils from "../modules/dismissible_content/DismissibleContentUnsafeUtils.tsx";
import useChatLayoutDefault from "../modules/chat/native/useChatLayout.tsx";
import common_NotificationsDefault from "common/Notifications.tsx";
import useChannelStylesShared from "useChannelStylesShared.tsx";
import noop from "../../_runtime/metro/00019__.js";
import LurkingStore from "../modules/lurker_mode/LurkingStore.tsx";
import ChannelStore from "../stores/ChannelStore.tsx";
import SelectedChannelStore from "../stores/SelectedChannelStore.tsx";

require = fn;
const View = fn(17).View;
const ChannelTypes = fn(1085).ChannelTypes;
const ContentDismissActionType = fn(2062).ContentDismissActionType;
const jsxProd = fn(21);
({ jsx: c10, jsxs: closure_11 } = jsxProd);
const createStyles = fn(5092);
let closure_12 = createStyles.createStyles({
  container: { position: "absolute", left: 0, right: 0, backgroundColor: "transparent", marginTop: 8 },
});
let ReactCompilerGating = fn(558);
let closure_13 = ReactCompilerGating.isReactCompilerEnabled()
  ? function NotificationsContainer() {
      const cResult = c.c(3);
      let container = closure_12();
      if (!useChatLayoutDefault().isChatBesideChannelList) {
        return null;
      } else {
        const _Symbol = Symbol;
        if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
          const tmp7 = collapsed(common_NotificationsDefault, {});
          cResult[0] = tmp7;
          let first = tmp7;
        } else {
          first = cResult[0];
        }
        if (cResult[1] !== container.container) {
          const obj2 = { style: container.container, children: first };
          const tmp11 = collapsed(View, obj2);
          container = container.container;
          cResult[1] = container;
          cResult[2] = tmp11;
        }
      }
    }
  : function NotificationsContainer() {
      let tmp4 = null;
      if (useChatLayoutDefault().isChatBesideChannelList) {
        const obj = { style: tmp.container, children: collapsed(common_NotificationsDefault, {}) };
        tmp4 = collapsed(View, obj);
      }
      return tmp4;
    };
ReactCompilerGating = fn(558);
const size = fn(2);
let result = size.fileFinishedImporting("components_native/ChannelContainer.tsx");

export const ChannelContainer = ReactCompilerGating.isReactCompilerEnabled()
  ? function ChannelContainer(guildId) {
      const cResult = guildId(576).c(29);
      guildId = guildId.guildId;
      const channelId = guildId.channelId;
      const children = guildId.children;
      if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
        const items = [SelectedChannelStore, ChannelStore];
        cResult[0] = items;
        let first = items;
      } else {
        first = cResult[0];
      }
      if (cResult[1] !== channelId) {
        const fn = function f() {
          const voiceChannelId = SelectedChannelStore.getVoiceChannelId();
          const obj = { channel: ChannelStore.getChannel(channelId), voiceChannelId, isStageChannel: null };
          const channel = ChannelStore.getChannel(voiceChannelId);
          let isGuildStageVoiceResult;
          if (channel != null) {
            isGuildStageVoiceResult = channel.isGuildStageVoice();
          }
          obj.isStageChannel = Boolean(isGuildStageVoiceResult);
          return obj;
        };
        cResult[1] = channelId;
        cResult[2] = fn;
        let tmp7 = fn;
      } else {
        tmp7 = cResult[2];
      }
      let obj = guildId(576);
      const stateFromStoresObject = guildId(504).useStateFromStoresObject(first, tmp7);
      ({ channel, isStageChannel } = stateFromStoresObject);
      let tmp10 = !isStageChannel;
      if (isStageChannel) {
        tmp10 = channelId(10849)(stateFromStoresObject.voiceChannelId);
      }
      if (cResult[3] === Symbol.for("react.memo_cache_sentinel")) {
        const items1 = [LurkingStore];
        cResult[3] = items1;
        let tmp11 = items1;
      } else {
        tmp11 = cResult[3];
      }
      if (cResult[4] !== guildId) {
        const fn2 = function p() {
          let isLurkingResult = null != guildId;
          if (isLurkingResult) {
            isLurkingResult = LurkingStore.isLurking(tmp);
          }
          return isLurkingResult;
        };
        cResult[4] = guildId;
        cResult[5] = fn2;
        let tmp13 = fn2;
      } else {
        tmp13 = cResult[5];
      }
      const tmpResult = guildId(504);
      const stateFromStores = guildId(504).useStateFromStores(tmp11, tmp13);
      if (cResult[6] !== channel) {
        const tmp17 = null != channel && channel.isPrivate();
        cResult[6] = channel;
        cResult[7] = tmp17;
        let tmp15 = tmp17;
      } else {
        tmp15 = cResult[7];
      }
      dependencyMap = tmp15;
      const tmp18 = channelId(5922)(tmp15);
      noop = tmp18;
      const tmp19 = channelId(5922)(channelId);
      closure_4 = tmp19;
      if (cResult[8] === channelId) {
        if (cResult[9] === tmp15) {
          if (cResult[10] === tmp19) {
            if (cResult[11] === tmp18) {
              let tmp20 = cResult[12];
              let tmp21 = cResult[13];
            }
            const effect = noop.useEffect(tmp20, tmp21);
            const channelStyles = tmp(12685).useChannelStyles();
            if (cResult[14] === channel) {
              if (cResult[15] === stateFromStores) {
                let tmp25 = cResult[16];
              }
              if (cResult[17] === channelStyles.callPTTButton) {
                if (cResult[18] === tmp10) {
                  let tmp31 = cResult[19];
                }
                if (cResult[20] === channelStyles.flex) {
                  if (cResult[21] === children) {
                    if (cResult[22] === tmp25) {
                      if (cResult[23] === tmp31) {
                        let tmp34 = cResult[24];
                      }
                      const _Symbol = Symbol;
                      if (cResult[25] === Symbol.for("react.memo_cache_sentinel")) {
                        const tmp41 = closure_10(closure_13, {});
                        cResult[25] = tmp41;
                        let tmp38 = tmp41;
                      } else {
                        tmp38 = cResult[25];
                      }
                      if (cResult[26] === channelStyles.scene) {
                        if (cResult[27] === tmp34) {
                          let tmp42 = cResult[28];
                        }
                        return tmp42;
                      }
                      let obj2 = { style: channelStyles.scene, children: null };
                      const items2 = [tmp34, tmp38];
                      obj2.children = items2;
                      const tmp45 = closure_11(closure_4, obj2);
                      cResult[26] = channelStyles.scene;
                      cResult[27] = tmp34;
                      cResult[28] = tmp45;
                      tmp42 = tmp45;
                    }
                  }
                }
                const obj3 = { style: channelStyles.flex, children: null };
                const items3 = [tmp25, children, tmp31];
                obj3.children = items3;
                const tmp37 = closure_11(closure_4, obj3);
                cResult[20] = channelStyles.flex;
                cResult[21] = children;
                cResult[22] = tmp25;
                cResult[23] = tmp31;
                cResult[24] = tmp37;
                tmp34 = tmp37;
              }
              let tmp32 = tmp10;
              if (tmp10) {
                const obj4 = { style: channelStyles.callPTTButton };
                tmp32 = closure_10(tmp9(11038), obj4);
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
                tmp29 = closure_10(tmp9(12686), obj5);
              }
            }
            cResult[14] = channel;
            cResult[15] = stateFromStores;
            cResult[16] = tmp29;
            tmp25 = tmp29;
            const tmpResult4 = tmp(12685);
          }
        }
      }
      const fn3 = function x() {
        let tmp = closure_3;
        let tmp2 = closure_3;
        if (closure_3) {
          tmp2 = !closure_2;
        }
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
          const result = DismissibleContentUnsafeUtils.UNSAFE_markDismissibleContentAsDismissed(
            dismissible_content.DismissibleContent.ACTIVITY_GDM_CALL_TOOLTIP,
            obj2,
          );
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
      const tmpResult3 = guildId(504);
    }
  : function ChannelContainer(children) {
      ({ guildId: require, channelId } = children);
      dependencyMap = undefined;
      noop = undefined;
      closure_4 = undefined;
      const items = [SelectedChannelStore, ChannelStore];
      const stateFromStoresObject = initialize.useStateFromStoresObject(items, () => {
        const voiceChannelId = SelectedChannelStore.getVoiceChannelId();
        const obj = { channel: ChannelStore.getChannel(channelId), voiceChannelId, isStageChannel: null };
        const channel = ChannelStore.getChannel(voiceChannelId);
        let isGuildStageVoiceResult;
        if (channel != null) {
          isGuildStageVoiceResult = channel.isGuildStageVoice();
        }
        obj.isStageChannel = Boolean(isGuildStageVoiceResult);
        return obj;
      });
      ({ channel, isStageChannel } = stateFromStoresObject);
      let tmp5 = !isStageChannel;
      if (isStageChannel) {
        tmp5 = channelId(10849)(stateFromStoresObject.voiceChannelId);
      }
      const items1 = [LurkingStore];
      let isPrivateResult = null != channel;
      const stateFromStores = initialize.useStateFromStores(items1, () => {
        let isLurkingResult = null != require;
        if (isLurkingResult) {
          isLurkingResult = LurkingStore.isLurking(tmp);
        }
        return isLurkingResult;
      });
      if (isPrivateResult) {
        isPrivateResult = channel.isPrivate();
      }
      dependencyMap = isPrivateResult;
      const tmp8 = channelId(5922)(isPrivateResult);
      noop = tmp8;
      const tmp9 = channelId(5922)(channelId);
      closure_4 = tmp9;
      const items2 = [channelId, tmp9, isPrivateResult, tmp8];
      const effect = noop.useEffect(() => {
        let tmp = closure_3;
        let tmp2 = closure_3;
        if (closure_3) {
          tmp2 = !c2;
        }
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
          const result = DismissibleContentUnsafeUtils.UNSAFE_markDismissibleContentAsDismissed(
            dismissible_content.DismissibleContent.ACTIVITY_GDM_CALL_TOOLTIP,
            obj2,
          );
        }
      }, items2);
      const tmpResult = initialize;
      const channelStyles = useChannelStylesShared.useChannelStyles();
      let obj2 = { style: channelStyles.scene, children: null };
      const obj3 = { style: channelStyles.flex, children: null };
      let type;
      if (channel != null) {
        type = channel.type;
      }
      let tmp15 = null;
      if (type === ChannelTypes.GUILD_ANNOUNCEMENT) {
        tmp15 = null;
        if (stateFromStores) {
          const obj4 = { channel };
          tmp15 = closure_10(channelId(12686), obj4);
        }
      }
      const items3 = [tmp15, children.children];
      if (tmp5) {
        const obj5 = { style: channelStyles.callPTTButton };
        tmp5 = closure_10(channelId(11038), obj5);
      }
      items3[2] = tmp5;
      obj3.children = items3;
      const items4 = [closure_11(closure_4, obj3), closure_10(closure_13, {})];
      obj2.children = items4;
      return closure_11(closure_4, obj2);
    };
