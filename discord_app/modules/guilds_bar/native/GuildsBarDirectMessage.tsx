// discord_app/modules/guilds_bar/native/GuildsBarDirectMessage.tsx
import Fragment from "../../../../_runtime/react/00021_Fragment.js";
import nativeDefault from "../../../../discord_common/js/packages/tokens/native.tsx";
import Constants from "../../../Constants.tsx";
import intl2 from "../../../intl/index.native.tsx";
import transitionToChannel from "../../routing/transitionToChannel.tsx";
import getChannelA11yLabelDefault from "../../channel/getChannelA11yLabel.tsx";
import openChannelLongPressActionSheet from "../../channel/native/openChannelLongPressActionSheet.tsx";
import react from "../../../../_runtime/00019_react.js";
import AuthenticationStore from "../../../stores/AuthenticationStore.tsx";
import CallStore from "../../../stores/CallStore.tsx";
import ChannelStore from "../../../stores/ChannelStore.tsx";
import GuildReadStateStore from "../../../stores/GuildReadStateStore.tsx";
import RelationshipStore from "../../../stores/RelationshipStore.tsx";
import UserStore from "../../../stores/UserStore.tsx";
import createStyles from "../../../design/components/Styles/native/createStyles.tsx";
import ReactCompilerGating from "../../react_compiler/ReactCompilerGating.tsx";
import size_mod from "../../../../_runtime/metro/00002__.js";

let channelId;

let size;
const ChannelTypes = Constants.ChannelTypes;
const jsx = Fragment.jsx;
let obj = { dm: size };
size = {
  width: nativeDefault.modules.mobile.GUILD_BAR_ITEM_SIZE,
  height: nativeDefault.modules.mobile.GUILD_BAR_ITEM_SIZE,
};
let closure_12 = createStyles.createStyles(obj);
const memoResult = react.memo(
  ReactCompilerGating.isReactCompilerEnabled()
    ? (channelId) => {
        let badge;
        let channel;
        let cutouts;
        let dmRecipient;
        let first;
        let fn;
        let label;
        let tmp11;
        let tmp7;
        const tmp = channelId;
        let obj = channelId(channel[12]);
        const cResult = obj.c(32);
        channelId = channelId.channelId;
        const tmp4 = closure_12();
        if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
          const obj2 = { disableSelectedColor: true, disableBGColor: true };
          cResult[0] = obj2;
          first = obj2;
        } else {
          first = cResult[0];
        }
        const tmpResult = tmp(channel[13]);
        tmpResult.useGuildsBarAnimatedWrapperStyles(first);
        if (cResult[1] === Symbol.for("react.memo_cache_sentinel")) {
          const items = [GuildReadStateStore];
          cResult[1] = items;
          tmp7 = items;
        } else {
          tmp7 = cResult[1];
        }
        if (cResult[2] !== channelId) {
          class I {
            constructor() {
              return GuildReadStateStore.getMentionCountForPrivateChannel(channelId).count;
            }
          }
          cResult[2] = channelId;
          cResult[3] = I;
        } else {
          class I {
            constructor() {
              return GuildReadStateStore.getMentionCountForPrivateChannel(channelId).count;
            }
          }
        }
        const tmpResult3 = tmp(channel[14]);
        const stateFromStores = tmpResult3.useStateFromStores(tmp7, I);
        if (cResult[4] === Symbol.for("react.memo_cache_sentinel")) {
          class I {
            constructor() {
              return GuildReadStateStore.getMentionCountForPrivateChannel(channelId).count;
            }
          }
          const items1 = [ChannelStore, UserStore, RelationshipStore, CallStore, AuthenticationStore];
          cResult[4] = items1;
          tmp11 = items1;
        } else {
          class I {
            constructor() {
              return GuildReadStateStore.getMentionCountForPrivateChannel(channelId).count;
            }
          }
        }
        if (cResult[5] === channelId) {
          class I {
            constructor() {
              return GuildReadStateStore.getMentionCountForPrivateChannel(channelId).count;
            }
          }
          const tmpResult4 = tmp(channel[14]);
          const stateFromStoresObject = tmpResult4.useStateFromStoresObject(tmp11, fn);
          channel = stateFromStoresObject.channel;
          ({ dmRecipient, label } = stateFromStoresObject);
          if (cResult[8] !== stateFromStores) {
            class I {
              constructor() {
                return GuildReadStateStore.getMentionCountForPrivateChannel(channelId).count;
              }
            }
            tmp18[0] = stateFromStores;
            cResult[8] = stateFromStores;
            cResult[9] = tmp18;
          } else {
            class I {
              constructor() {
                return GuildReadStateStore.getMentionCountForPrivateChannel(channelId).count;
              }
            }
          }
          ({ badge, cutouts } = stateFromStores(channel[17])(tmp18));
          stateFromStores(channel[17])(tmp18);
          if (cResult[10] === channel) {
            let tmp36;
            class I {
              constructor() {
                return GuildReadStateStore.getMentionCountForPrivateChannel(channelId).count;
              }
            }
            if (cResult[13] !== channel) {
              class I {
                constructor() {
                  return GuildReadStateStore.getMentionCountForPrivateChannel(channelId).count;
                }
              }
              tmp27[0] = function onPress() {
                if (null != channel) {
                  const obj = transitionToChannel;
                  obj.transitionToChannel(tmp.id);
                }
              };
              tmp27[1] = function onLongPress() {
                if (null != channel) {
                  const obj = openChannelLongPressActionSheet;
                  const result = obj.openChannelLongPressActionSheet(tmp.id);
                }
              };
              cResult[13] = channel;
              cResult[14] = tmp27;
            } else {
              class I {
                constructor() {
                  return GuildReadStateStore.getMentionCountForPrivateChannel(channelId).count;
                }
              }
            }
            if (cResult[15] !== channel) {
              class I {
                constructor() {
                  return GuildReadStateStore.getMentionCountForPrivateChannel(channelId).count;
                }
              }
              if (channel != null) {
                class I {
                  constructor() {
                    return GuildReadStateStore.getMentionCountForPrivateChannel(channelId).count;
                  }
                }
              }
              cResult[15] = channel;
              cResult[16] = undefined;
            } else {
              class I {
                constructor() {
                  return GuildReadStateStore.getMentionCountForPrivateChannel(channelId).count;
                }
              }
            }
            if (cResult[17] !== channel) {
              let tmp32;
              class I {
                constructor() {
                  return GuildReadStateStore.getMentionCountForPrivateChannel(channelId).count;
                }
              }
              if (null != channel) {
                class I {
                  constructor() {
                    return GuildReadStateStore.getMentionCountForPrivateChannel(channelId).count;
                  }
                }
                tmp32 = jsx(stateFromStores(channel[20]), { channel });
              }
              cResult[17] = channel;
              cResult[18] = tmp32;
            } else {
              class I {
                constructor() {
                  return GuildReadStateStore.getMentionCountForPrivateChannel(channelId).count;
                }
              }
            }
            if (cResult[19] === channel) {
              class I {
                constructor() {
                  return GuildReadStateStore.getMentionCountForPrivateChannel(channelId).count;
                }
              }
            }
            if (channel != null) {
              class I {
                constructor() {
                  return GuildReadStateStore.getMentionCountForPrivateChannel(channelId).count;
                }
              }
            }
            if (undefined) {
              class I {
                constructor() {
                  return GuildReadStateStore.getMentionCountForPrivateChannel(channelId).count;
                }
              }
              stateFromStores(channel[21]);
              tmp36 = (
                <tmp19Result
                  channel={channel}
                  size={tmp(channel[22]).AvatarSizes.LARGE_48}
                  pileSizeOverride={tmp(channel[22]).AvatarSizes.REFRESH_MEDIUM_32}
                  animate
                />
              );
            } else {
              class I {
                constructor() {
                  return GuildReadStateStore.getMentionCountForPrivateChannel(channelId).count;
                }
              }
              if (null != tmp21) {
                class I {
                  constructor() {
                    return GuildReadStateStore.getMentionCountForPrivateChannel(channelId).count;
                  }
                }
                tmp36 = jsx(tmp19(tmp2[23]), { style: tmp4.dm, source: tmp21 });
              }
            }
            cResult[19] = channel;
            cResult[20] = tmp21;
            cResult[21] = tmp4;
            cResult[22] = tmp36;
          }
          if (channel != null) {
            class I {
              constructor() {
                return GuildReadStateStore.getMentionCountForPrivateChannel(channelId).count;
              }
            }
          }
          let tmp24;
          if (tmp24) {
            class I {
              constructor() {
                return GuildReadStateStore.getMentionCountForPrivateChannel(channelId).count;
              }
            }
            if (dmRecipient != null) {
              class I {
                constructor() {
                  return GuildReadStateStore.getMentionCountForPrivateChannel(channelId).count;
                }
              }
            }
            tmp24 = tmp25;
          }
          cResult[10] = channel;
          cResult[11] = dmRecipient;
          cResult[12] = tmp24;
        }
        fn = function y() {
          let stringResult;
          channel = ChannelStore.getChannel(channelId);
          let type;
          if (channel != null) {
            type = channel.type;
          }
          let user;
          if (type === ChannelTypes.DM) {
            user = UserStore.getUser(channel.getRecipientId());
          }
          const call = CallStore.getCall(channelId);
          const id = AuthenticationStore.getId();
          let hasItem = null != call && null != id;
          if (hasItem) {
            const ringing = call.ringing;
            hasItem = ringing.includes(id);
          }
          const obj = { channel, dmRecipient: user, label: stringResult };
          const tmp8 = CallStore.isCallActive(channelId) && !hasItem;
          if (null != channel) {
            const obj3 = {
              channel,
              unread: stateFromStores > 0,
              mentionCount: stateFromStores,
              isIncomingCall: hasItem,
              isOngoingCall: tmp8,
            };
            stringResult = getChannelA11yLabelDefault(obj3);
          } else {
            const intl = intl2.intl;
            stringResult = intl.string(intl2.t.zLZPmk);
          }
          return obj;
        };
        cResult[5] = channelId;
        cResult[6] = stateFromStores;
        cResult[7] = fn;
      }
    : (channelId) => {
        let badge;
        let cutouts;
        let tmp11Result2;
        channelId = channelId.channelId;
        let channel;
        let tmp2 = channelId;
        const tmp = closure_12();
        let obj = channelId(channel[13]);
        const items = [GuildReadStateStore];
        const guildsBarAnimatedWrapperStyles = obj.useGuildsBarAnimatedWrapperStyles({
          disableSelectedColor: true,
          disableBGColor: true,
        });
        const obj2 = channelId(channel[14]);
        const stateFromStores = obj2.useStateFromStores(
          items,
          () => GuildReadStateStore.getMentionCountForPrivateChannel(channelId).count,
        );
        let obj3 = channelId(channel[14]);
        const items1 = [ChannelStore, UserStore, RelationshipStore, CallStore, AuthenticationStore];
        const stateFromStoresObject = obj3.useStateFromStoresObject(items1, () => {
          let stringResult;
          channel = ChannelStore.getChannel(channelId);
          let type;
          if (channel != null) {
            type = channel.type;
          }
          let user;
          if (type === ChannelTypes.DM) {
            user = UserStore.getUser(channel.getRecipientId());
          }
          const call = CallStore.getCall(channelId);
          const id = AuthenticationStore.getId();
          let hasItem = null != call && null != id;
          if (hasItem) {
            const ringing = call.ringing;
            hasItem = ringing.includes(id);
          }
          const obj = { channel, dmRecipient: user, label: stringResult };
          const tmp8 = CallStore.isCallActive(channelId) && !hasItem;
          if (null != channel) {
            const obj3 = {
              channel,
              unread: stateFromStores > 0,
              mentionCount: stateFromStores,
              isIncomingCall: hasItem,
              isOngoingCall: tmp8,
            };
            stringResult = getChannelA11yLabelDefault(obj3);
          } else {
            const intl = intl2.intl;
            stringResult = intl.string(intl2.t.zLZPmk);
          }
          return obj;
        });
        channel = stateFromStoresObject.channel;
        const dmRecipient = stateFromStoresObject.dmRecipient;
        const label = stateFromStoresObject.label;
        let tmp8 = stateFromStores(channel[17])({ mentionCount: stateFromStores });
        const items2 = [channel, dmRecipient];
        ({ badge, cutouts } = tmp8);
        const memo = dmRecipient.useMemo(() => {
          let isDMResult;
          if (channel != null) {
            isDMResult = channel.isDM();
          }
          let tmp2;
          if (isDMResult) {
            let avatarSource;
            if (dmRecipient != null) {
              avatarSource = dmRecipient.getAvatarSource(undefined);
            }
            tmp2 = avatarSource;
          }
          return tmp2;
        }, items2);
        const items3 = [channel];
        const memo1 = dmRecipient.useMemo(() => {
          let obj = {
            onPress() {
              if (null != closure_1_2) {
                const obj = channelId(channel[18]);
                obj.transitionToChannel(tmp.id);
              }
            },
            onLongPress() {
              if (null != closure_1_2) {
                const obj = channelId(channel[19]);
                const result = obj.openChannelLongPressActionSheet(tmp.id);
              }
            },
          };
          return obj;
        }, items3);
        let isMultiUserDMResult;
        stateFromStores(channel[13]);
        if (channel != null) {
          isMultiUserDMResult = channel.isMultiUserDM();
        }
        let tmp11Result = null;
        if (null != channel) {
          tmp11Result = jsx(tmp7(tmp3[20]), { channel });
        }
        let isMultiUserDMResult1;
        if (channel != null) {
          isMultiUserDMResult1 = channel.isMultiUserDM();
        }
        if (isMultiUserDMResult1) {
          stateFromStores(channel[21]);
          tmp11Result2 = (
            <tmp7Result
              channel={channel}
              size={tmp2(channel[22]).AvatarSizes.LARGE_48}
              pileSizeOverride={tmp2(channel[22]).AvatarSizes.REFRESH_MEDIUM_32}
              animate
            />
          );
        } else {
          tmp11Result2 = null;
          if (null != memo) {
            tmp11Result2 = jsx(tmp7(tmp3[23]), { style: tmp.dm, source: memo });
          }
        }
        return (
          <tmp12
            selected={false}
            circle={!isMultiUserDMResult}
            unread
            styles={guildsBarAnimatedWrapperStyles}
            label={label}
            overState="Boolean"
            config={memo1}
            cutouts={cutouts}
            externalChildren={badge}
            expandedChildren={tmp11Result}
          >
            {tmp11Result2}
          </tmp12>
        );
      },
);
size = size_mod;
let result = size.fileFinishedImporting("modules/guilds_bar/native/GuildsBarDirectMessage.tsx");

export default memoResult;
