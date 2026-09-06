// discord_app/modules/activities/panel/native/ActivityInviteSheetRow.tsx
import nativeDefault from "../../../../../discord_common/js/packages/tokens/native.tsx";
import noop from "../../../../../_runtime/metro/00019__.js";
import ChannelStore from "../../../../stores/ChannelStore.tsx";
import GuildStore from "../../../../stores/GuildStore.tsx";
import UserStore from "../../../../stores/UserStore.tsx";

const require = fn;
const View = fn(17).View;
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
let closure_9 = createStyles.createStyles(obj);
size = fn(2);
const result = size.fileFinishedImporting("modules/activities/panel/native/ActivityInviteSheetRow.tsx");

export default noop.memo(function ActivityInviteSheetRow(row) {
  ({ onInviteSent: require, onPressAvatar } = row);
  row = row.row;
  const sendState = row.sendState;
  ({ end, error, isSubmitting, start } = row);
  const id = row.item.id;
  let obj = require("initialize");
  const items = [ChannelStore];
  const stateFromStores = obj.useStateFromStores(items, () => ChannelStore.getChannel(id));
  let str = onPressAvatar(row[10])(stateFromStores);
  const type = row.type;
  if (require("InstantInviteUtils").RowTypes.DM !== type) {
    if (require("InstantInviteUtils").RowTypes.FRIEND !== type) {
      if (require("InstantInviteUtils").RowTypes.GROUP_DM === type) {
        let tmp19 = null;
        if (null != stateFromStores) {
          obj = { source: null, size: null };
          onPressAvatar(tmp3[17]);
          const tmp5Result = onPressAvatar(tmp3[17]);
          obj = { id: null, icon: null, applicationId: null, size: 32 };
          ({ id: obj12.id, icon: obj12.icon, application_id: obj12.applicationId } = stateFromStores);
          obj.source = tmp5Result.makeSource(tmp5Result.getChannelIconURL(obj));
          obj.size = require("native").AvatarSizes.REFRESH_MEDIUM_32;
          tmp19 = jsx(require("native").Avatar, { id: null, icon: null, applicationId: null, size: 32 });
        }
        if (str == null) {
          str = "";
        }
        let str2 = str;
        let tmp14 = tmp19;
      } else if (require("InstantInviteUtils").RowTypes.CHANNEL === type) {
        let guild_id;
        if (stateFromStores != null) {
          guild_id = stateFromStores.guild_id;
        }
        let guild;
        if (null != guild_id) {
          guild = GuildStore.getGuild(stateFromStores.guild_id);
        }
        if (null == guild) {
          return null;
        } else {
          if (null != guild.icon) {
            const obj1 = { source: null, size: null };
            const tmp5Result1 = onPressAvatar(tmp3[17]);
            ({ id: obj8.id, icon: obj8.icon } = guild);
            obj1.source = tmp5Result1.makeSource(
              onPressAvatar(tmp3[17]).getGuildIconURL({ id: null, icon: null, size: 32 }),
            );
            obj1.size = require("native").AvatarSizes.REFRESH_MEDIUM_32;
            tmp14 = jsx(require("native").Avatar, { source: null, size: null });
            const obj2 = { id: null, icon: null, size: 32 };
            const tmp5Result2 = onPressAvatar(tmp3[17]);
          } else {
            const obj3 = { style: tmp.acronym, children: null };
            const acronym = require("StringUtils").getAcronym(guild.name);
            const obj4 = { variant: "text-sm/bold", children: acronym };
            obj3.children = jsx(require("Text/Text").Text, { variant: "text-sm/bold", children: acronym });
            tmp14 = <id style={tmp.acronym}>{null}</id>;
            const tmp2Result = require("StringUtils");
          }
          str2 = "";
          if (null != str) {
            const _HermesInternal = HermesInternal;
            str2 = "#" + str;
          }
        }
      } else {
        return null;
      }
    }
    function handlePress() {
      require(row);
    }
    const obj5 = {
      start,
      end,
      icon: tmp14,
      label: str2,
      trailing: null,
      onPress: null,
      disabled: null,
      accessibilityActions: null,
      onAccessibilityAction: null,
    };
    const obj6 = { sendState, onPressSend: handlePress };
    obj5.trailing = jsx(onPressAvatar(tmp3[21]), { sendState, onPressSend: handlePress });
    obj5.onPress = handlePress;
    let tmp30 = null != error || isSubmitting;
    if (!tmp30) {
      tmp30 = sendState === InviteSendStates.SENT;
    }
    obj5.disabled = tmp30;
    obj5.accessibilityActions = tmp17;
    obj5.onAccessibilityAction = fn;
    return jsx(require("TableRow").TableRow, {
      start,
      end,
      icon: tmp14,
      label: str2,
      trailing: null,
      onPress: null,
      disabled: null,
      accessibilityActions: null,
      onAccessibilityAction: null,
    });
  }
  const user = UserStore.getUser(id);
  const obj7 = {
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
  const obj8 = { source: avatarSource, size: require("native").AvatarSizes.REFRESH_MEDIUM_32 };
  obj7.children = jsx(require("native").Avatar, {
    source: avatarSource,
    size: require("native").AvatarSizes.REFRESH_MEDIUM_32,
  });
  jsx(require("Pressables").PressableOpacity, {
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
  const obj9 = { nick: null, user: null };
  tmp = closure_9();
  const tmp5Result3 = onPressAvatar(row[14]);
  obj9.nick = onPressAvatar(row[15]).getGlobalName(user);
  obj9.user = user;
  let tmp26;
  const tmp21Result = <tmp5Result3 nick={null} user={null} />;
  if (null != onPressAvatar) {
    const intl = require("util").intl;
    let tag;
    if (user != null) {
      tag = user.tag;
    }
    const obj10 = { name: "viewProfile", label: null };
    const obj11 = { username: tag };
    obj10.label = intl.formatToPlainString(require("util").t.uCenkh, obj11);
    const items1 = [obj10];
    tmp26 = items1;
  }
  fn = function w(nativeEvent) {
    let tmp = "viewProfile" === nativeEvent.nativeEvent.actionName;
    if (tmp) {
      tmp = null !== onPressAvatar;
    }
    if (tmp) {
      if (onPressAvatar != null) {
        tmp4(id);
      }
    }
  };
  str2 = tmp21Result;
  tmp14 = tmp21Result;
  tmp17 = tmp26;
  const tmp5Result4 = onPressAvatar(row[15]);
});
