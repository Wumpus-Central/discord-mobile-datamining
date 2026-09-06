// discord_app/modules/instant_invite/native/components/InstantInviteRow.tsx
import nativeDefault from "../../../../../discord_common/js/packages/tokens/native.tsx";
import InstantInviteUtils from "../../../../utils/InstantInviteUtils.tsx";
import InviteQueueDefault from "../../../../lib/InviteQueue.tsx";
import noop from "../../../../../_runtime/metro/00019__.js";
import ChannelStore from "../../../../stores/ChannelStore.tsx";
import CreateInviteModalStore from "../../../../stores/CreateInviteModalStore.tsx";
import GuildStore from "../../../../stores/GuildStore.tsx";
import InviteSuggestionsStore from "../../../../stores/InviteSuggestionsStore.tsx";
import UserStore from "../../../../stores/UserStore.tsx";

require = fn;
const View = fn(17).View;
const InstantInviteSendStateStore = fn(9894);
({ setSendState: closure_9, useInstantInviteSendStates: c10 } = InstantInviteSendStateStore);
const InviteSendStates = fn(7736).InviteSendStates;
const jsx = fn(21).jsx;
const createStyles = fn(4560);
let obj = { acronym: null };
let size = {
  width: 32,
  height: 32,
  borderRadius: nativeDefault.radii.lg,
  backgroundColor: nativeDefault.colors.BACKGROUND_BASE_LOW,
  alignItems: "center",
  justifyContent: "center",
  overflow: "hidden",
  marginTop: 0,
  marginRight: 10,
  borderColor: nativeDefault.colors.BORDER_MUTED,
  borderStyle: "solid",
  borderWidth: 2,
};
obj.acronym = size;
let closure_13 = createStyles.createStyles(obj);
size = fn(2);
const result = size.fileFinishedImporting("modules/instant_invite/native/components/InstantInviteRow.tsx");

export default noop.memo(function InstantInviteRow(row) {
  row = row.row;
  const code = row.code;
  const onPressAvatar = row.onPressAvatar;
  ({ onInviteSent: View, source: ChannelStore } = row);
  ({ start, end } = row);
  const id = row.item.id;
  let obj = row(onPressAvatar[12]);
  const items = [id];
  const stateFromStores = obj.useStateFromStores(items, () => id.isSubmitting());
  let obj1 = row(onPressAvatar[12]);
  const items1 = [id];
  const stateFromStores1 = obj1.useStateFromStores(items1, () => id.getError());
  const tmp6 = closure_10((arg0) => {
    let tmp2 = null;
    if (null != code) {
      let tmp5;
      if (arg0[tmp] != null) {
        tmp5 = tmp4[id];
      }
      tmp2 = tmp5;
    }
    return tmp2;
  });
  let obj2 = row(onPressAvatar[12]);
  const items2 = [ChannelStore];
  const stateFromStores2 = obj2.useStateFromStores(items2, () => ChannelStore.getChannel(id));
  let str = code(onPressAvatar[13])(stateFromStores2);
  if (null == code) {
    return null;
  } else {
    let type = row.type;
    if (tmp2(tmp3[14]).RowTypes.DM !== type) {
      if (tmp2(tmp3[14]).RowTypes.FRIEND !== type) {
        if (tmp2(tmp3[14]).RowTypes.GROUP_DM === type) {
          let tmp19 = null;
          if (null != stateFromStores2) {
            obj = { source: null, size: null };
            tmp8(tmp3[21]);
            const tmp8Result = tmp8(tmp3[21]);
            obj = { id: null, icon: null, applicationId: null, size: 32 };
            ({ id: obj14.id, icon: obj14.icon, application_id: obj14.applicationId } = stateFromStores2);
            obj.source = tmp8Result.makeSource(tmp8Result.getChannelIconURL(obj));
            obj.size = tmp2(tmp3[17]).AvatarSizes.REFRESH_MEDIUM_32;
            tmp19 = jsx(tmp2(tmp3[17]).Avatar, { id: null, icon: null, applicationId: null, size: 32 });
          }
          if (str == null) {
            str = "";
          }
          let str2 = str;
          let T;
          let tmp15 = tmp19;
        } else if (tmp2(tmp3[14]).RowTypes.CHANNEL === type) {
          let guild_id;
          if (stateFromStores2 != null) {
            guild_id = stateFromStores2.guild_id;
          }
          let guild;
          if (null != guild_id) {
            guild = GuildStore.getGuild(stateFromStores2.guild_id);
          }
          if (null == guild) {
            return null;
          } else {
            if (null != guild.icon) {
              obj1 = { source: null, size: null };
              const tmp8Result1 = tmp8(tmp3[21]);
              obj2 = { id: null, icon: null, size: 32 };
              ({ id: obj10.id, icon: obj10.icon } = guild);
              obj1.source = tmp8Result1.makeSource(tmp8(tmp3[21]).getGuildIconURL(obj2));
              obj1.size = tmp2(tmp3[17]).AvatarSizes.REFRESH_MEDIUM_32;
              tmp15 = jsx(tmp2(tmp3[17]).Avatar, { source: null, size: null });
              const tmp8Result2 = tmp8(tmp3[21]);
            } else {
              let obj3 = { style: tmp.acronym, children: null };
              const acronym = tmp2(tmp3[22]).getAcronym(guild.name);
              let obj4 = { variant: "text-sm/bold", children: acronym };
              obj3.children = jsx(tmp2(tmp3[23]).Text, { variant: "text-sm/bold", children: acronym });
              tmp15 = <View style={tmp.acronym}>{null}</View>;
              const tmp2Result = tmp2(tmp3[22]);
            }
            str2 = "";
            if (null != str) {
              const _HermesInternal = HermesInternal;
              str2 = "#" + str;
            }
            T = undefined;
          }
        } else {
          return null;
        }
      }
      function handlePress() {
        if (null != code) {
          function handleSendState(arg0) {
            if (null != code) {
              closure_2_9(tmp, id, arg0 ? InviteSendStates.SENT : InviteSendStates.ERROR);
              if (arg0) {
                if (closure_1_3 != null) {
                  closure_1_3();
                }
              }
            }
          }
          React7(tmp, id, InviteSendStates.SENDING);
          const type = row.type;
          if (InstantInviteUtils.RowTypes.FRIEND !== type) {
            if (tmp7(9822).RowTypes.DM !== type) {
              if (tmp7(9822).RowTypes.GROUP_DM === type) {
                if (null != tmp) {
                  let obj3 = InviteQueueDefault;
                  let obj = {
                    inviteKey: tmp,
                    type: tmp7(9895).InvitePropertiesType.GROUP_DM,
                    channel: ChannelStore.getChannel(tmp3),
                    location: "Invite Action Sheet",
                    inviteAnalyticsMetadata: null,
                  };
                  obj = { suggestionData: InviteSuggestionsStore.getSelectedInviteMetadata(tmp6), source };
                  obj.inviteAnalyticsMetadata = obj;
                  obj3.enqueue(obj, handleSendState);
                }
              } else if (tmp7(9822).RowTypes.CHANNEL === type) {
                if (null != tmp) {
                  obj = InviteQueueDefault;
                  const obj1 = {
                    inviteKey: tmp,
                    type: tmp7(9895).InvitePropertiesType.CHANNEL,
                    channel: ChannelStore.getChannel(tmp3),
                    location: "Invite Action Sheet",
                    inviteAnalyticsMetadata: null,
                  };
                  const obj2 = { suggestionData: InviteSuggestionsStore.getSelectedInviteMetadata(tmp6), source };
                  obj1.inviteAnalyticsMetadata = obj2;
                  obj.enqueue(obj1, handleSendState);
                }
              }
            }
          }
          if (null != tmp) {
            obj3 = {
              inviteKey: tmp,
              type: tmp7(9895).InvitePropertiesType.USER,
              user: UserStore.getUser(tmp3),
              location: "Invite Action Sheet",
              inviteAnalyticsMetadata: null,
            };
            const obj4 = { suggestionData: InviteSuggestionsStore.getSelectedInviteMetadata(tmp6), source };
            obj3.inviteAnalyticsMetadata = obj4;
            InviteQueueDefault.enqueue(obj3, handleSendState);
          }
        }
      }
      const obj5 = {
        start,
        end,
        icon: tmp15,
        label: str2,
        trailing: null,
        onPress: null,
        disabled: null,
        accessibilityActions: null,
        onAccessibilityAction: null,
      };
      const obj6 = { sendState: tmp6, onPressSend: handlePress };
      obj5.trailing = jsx(tmp8(tmp3[25]), { sendState: tmp6, onPressSend: handlePress });
      obj5.onPress = handlePress;
      let tmp30 = null != stateFromStores1 || stateFromStores;
      if (!tmp30) {
        tmp30 = tmp6 === InviteSendStates.SENT;
      }
      obj5.disabled = tmp30;
      obj5.accessibilityActions = tmp18;
      obj5.onAccessibilityAction = T;
      return jsx(tmp2(tmp3[24]).TableRow, {
        start,
        end,
        icon: tmp15,
        label: str2,
        trailing: null,
        onPress: null,
        disabled: null,
        accessibilityActions: null,
        onAccessibilityAction: null,
      });
    }
    const user = UserStore.getUser(id);
    let obj7 = {
      importantForAccessibility: "no-hide-descendants",
      accessibilityElementsHidden: true,
      onPress(stopPropagation) {
        stopPropagation.stopPropagation();
        if (onPressAvatar != null) {
          tmp2(id);
        }
      },
      style: { padding: 8, margin: -8 },
      children: null,
    };
    let avatarSource;
    if (user != null) {
      avatarSource = user.getAvatarSource(undefined);
    }
    if (avatarSource == null) {
      avatarSource = null;
    }
    const obj8 = { source: avatarSource, size: tmp2(tmp3[17]).AvatarSizes.REFRESH_MEDIUM_32 };
    obj7.children = jsx(tmp2(tmp3[17]).Avatar, {
      source: avatarSource,
      size: tmp2(tmp3[17]).AvatarSizes.REFRESH_MEDIUM_32,
    });
    tmp22(tmp2(tmp3[16]).PressableOpacity, obj7);
    const obj9 = { nick: null, user: null };
    const tmp8Result3 = tmp8(tmp3[18]);
    obj9.nick = tmp8(tmp3[19]).getGlobalName(user);
    obj9.user = user;
    let tmp27;
    const tmp22Result = tmp22(tmp8Result3, obj9);
    if (null != onPressAvatar) {
      const intl = tmp2(tmp3[20]).intl;
      let tag;
      if (user != null) {
        tag = user.tag;
      }
      const obj10 = { name: "viewProfile", label: null };
      const obj11 = { username: tag };
      obj10.label = intl.formatToPlainString(tmp2(tmp3[20]).t.uCenkh, obj11);
      const items3 = [obj10];
      tmp27 = items3;
    }
    class T {
      constructor(arg0) {
        tmp = "viewProfile" === row.nativeEvent.actionName;
        if (tmp) {
          tmp2 = onPressAvatar;
          tmp3 = null;
          tmp = null !== onPressAvatar;
        }
        if (tmp) {
          tmp5 = null;
          if (onPressAvatar != null) {
            tmp6 = id;
            tmp4Result = tmp4(id);
          }
        }
        return;
      }
    }
    str2 = tmp22Result;
    tmp15 = tmp22Result;
    tmp18 = tmp27;
    const tmp8Result4 = tmp8(tmp3[19]);
  }
});
