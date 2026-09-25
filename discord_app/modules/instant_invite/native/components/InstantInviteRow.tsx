// discord_app/modules/instant_invite/native/components/InstantInviteRow.tsx
import nativeDefault from "../../../../../discord_common/js/packages/tokens/native.tsx";
import InstantInviteUtils from "../../../../utils/InstantInviteUtils.tsx";
import InviteQueue from "../../../../lib/InviteQueue.tsx";
import noop from "../../../../../_runtime/metro/00019__.js";
import ChannelStore from "../../../../stores/ChannelStore.tsx";
import CreateInviteModalStore from "../../../../stores/CreateInviteModalStore.tsx";
import GuildStore from "../../../../stores/GuildStore.tsx";
import InviteSuggestionsStore from "../../../../stores/InviteSuggestionsStore.tsx";
import UserStore from "../../../../stores/UserStore.tsx";

const InviteQueueDefault = InviteQueue;

require = fn;
const View = fn(17).View;
const InstantInviteSendStateStore = fn(9338);
({ setSendState: closure_9, useInstantInviteSendStates: c10 } = InstantInviteSendStateStore);
const InviteSendStates = fn(7150).InviteSendStates;
const jsx = fn(21).jsx;
const createStyles = fn(4829);
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
  let tmp = closure_13();
  const items = [id];
  const stateFromStores = row(onPressAvatar[12]).useStateFromStores(items, () => id.isSubmitting());
  let obj = row(onPressAvatar[12]);
  const items1 = [id];
  const stateFromStores1 = row(onPressAvatar[12]).useStateFromStores(items1, () => id.getError());
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
  const stateFromStores2 = row(onPressAvatar[12]).useStateFromStores(items2, () => ChannelStore.getChannel(id));
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
            let obj4 = { source: null, size: null };
            const tmp8Result = tmp8(tmp3[21]);
            ({ id: obj14.id, icon: obj14.icon, application_id: obj14.applicationId } = stateFromStores2);
            obj4.source = tmp8Result.makeSource(
              tmp8(tmp3[21]).getChannelIconURL({ id: null, icon: null, applicationId: null, size: 32 }),
            );
            obj4.size = tmp2(tmp3[17]).AvatarSizes.REFRESH_MEDIUM_32;
            tmp19 = jsx(tmp2(tmp3[17]).Avatar, { source: null, size: null });
            let obj5 = { id: null, icon: null, applicationId: null, size: 32 };
            const tmp8Result6 = tmp8(tmp3[21]);
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
              let obj6 = { source: null, size: null };
              const tmp8Result7 = tmp8(tmp3[21]);
              ({ id: obj10.id, icon: obj10.icon } = guild);
              obj6.source = tmp8Result7.makeSource(tmp8(tmp3[21]).getGuildIconURL({ id: null, icon: null, size: 32 }));
              obj6.size = tmp2(tmp3[17]).AvatarSizes.REFRESH_MEDIUM_32;
              tmp15 = jsx(tmp2(tmp3[17]).Avatar, { source: null, size: null });
              let obj7 = { id: null, icon: null, size: 32 };
              const tmp8Result8 = tmp8(tmp3[21]);
            } else {
              let obj8 = { style: tmp.acronym, children: null };
              const acronym = tmp2(tmp3[22]).getAcronym(guild.name);
              let obj9 = { variant: "text-sm/bold", children: acronym };
              obj8.children = jsx(tmp2(tmp3[23]).Text, { variant: "text-sm/bold", children: acronym });
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
          React7(code, id, InviteSendStates.SENDING);
          const type = row.type;
          if (InstantInviteUtils.RowTypes.FRIEND !== type) {
            if (InstantInviteUtils.RowTypes.DM !== type) {
              if (InstantInviteUtils.RowTypes.GROUP_DM === type) {
                if (null != code) {
                  const obj2 = {
                    inviteKey: code,
                    type: InviteQueue.InvitePropertiesType.GROUP_DM,
                    channel: ChannelStore.getChannel(id),
                    location: "Invite Action Sheet",
                    inviteAnalyticsMetadata: null,
                  };
                  const obj3 = { suggestionData: InviteSuggestionsStore.getSelectedInviteMetadata(row), source };
                  obj2.inviteAnalyticsMetadata = obj3;
                  InviteQueueDefault.enqueue(obj2, handleSendState);
                }
              } else if (InstantInviteUtils.RowTypes.CHANNEL === type) {
                if (null != code) {
                  const obj5 = {
                    inviteKey: code,
                    type: InviteQueue.InvitePropertiesType.CHANNEL,
                    channel: ChannelStore.getChannel(id),
                    location: "Invite Action Sheet",
                    inviteAnalyticsMetadata: null,
                  };
                  const obj6 = { suggestionData: InviteSuggestionsStore.getSelectedInviteMetadata(row), source };
                  obj5.inviteAnalyticsMetadata = obj6;
                  InviteQueueDefault.enqueue(obj5, handleSendState);
                }
              }
            }
          }
          if (null != code) {
            const obj8 = {
              inviteKey: code,
              type: InviteQueue.InvitePropertiesType.USER,
              user: UserStore.getUser(id),
              location: "Invite Action Sheet",
              inviteAnalyticsMetadata: null,
            };
            const obj9 = { suggestionData: InviteSuggestionsStore.getSelectedInviteMetadata(row), source };
            obj8.inviteAnalyticsMetadata = obj9;
            InviteQueueDefault.enqueue(obj8, handleSendState);
          }
        }
      }
      const obj11 = {
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
      const obj12 = { sendState: tmp6, onPressSend: handlePress };
      obj11.trailing = jsx(tmp8(tmp3[25]), { sendState: tmp6, onPressSend: handlePress });
      obj11.onPress = handlePress;
      let tmp30 = null != stateFromStores1 || stateFromStores;
      if (!tmp30) {
        tmp30 = tmp6 === InviteSendStates.SENT;
      }
      obj11.disabled = tmp30;
      obj11.accessibilityActions = tmp18;
      obj11.onAccessibilityAction = T;
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
    const obj13 = {
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
    const obj15 = { source: avatarSource, size: tmp2(tmp3[17]).AvatarSizes.REFRESH_MEDIUM_32 };
    obj13.children = jsx(tmp2(tmp3[17]).Avatar, {
      source: avatarSource,
      size: tmp2(tmp3[17]).AvatarSizes.REFRESH_MEDIUM_32,
    });
    const obj16 = { nick: null, user: null };
    const tmp22Result = jsx(tmp2(tmp3[16]).PressableOpacity, {
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
    });
    const tmp8Result9 = tmp8(tmp3[18]);
    obj16.nick = tmp8(tmp3[19]).getGlobalName(user);
    obj16.user = user;
    let tmp27;
    const tmp8Result10 = tmp8(tmp3[19]);
    if (null != onPressAvatar) {
      const intl = tmp2(tmp3[20]).intl;
      let tag;
      if (user != null) {
        tag = user.tag;
      }
      const obj17 = { name: "viewProfile", label: null };
      const obj18 = { username: tag };
      obj17.label = intl.formatToPlainString(tmp2(tmp3[20]).t.uCenkh, obj18);
      const items3 = [obj17];
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
    str2 = <tmp8Result9 nick={null} user={null} />;
    tmp15 = tmp22Result;
    tmp18 = tmp27;
    const tmp22Result2 = <tmp8Result9 nick={null} user={null} />;
  }
  let obj3 = row(onPressAvatar[12]);
});
