// === Module 17234: ActivityInviteSheetRow ===

// Module 17234 (ActivityInviteSheetRow)
import nativeDefault from "native" /* 576 */;
import noop from "module_19" /* 19 */;
import ChannelStore from "ChannelStore" /* 1958 */;
import GuildStore from "GuildStore" /* 1980 */;
import UserStore from "UserStore" /* 1372 */;

const require = globalThis.__r;

const require = fn;
const View = fn(17).View;
const InviteSendStates = fn(7850).InviteSendStates;
const jsx = fn(21).jsx;
const createStyles = fn(4638);
let obj = { acronym: null };
let size = { width: 32, height: 32, borderRadius: nativeDefault.radii.lg, backgroundColor: nativeDefault.colors.BACKGROUND_BASE_LOW, alignItems: "center", justifyContent: "center", overflow: "hidden", marginTop: 0, marginRight: 10, borderColor: nativeDefault.colors.BORDER_MUTED, borderStyle: "solid", borderWidth: 2 };
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
  let tmp = closure_9();
  const items = [ChannelStore];
  const stateFromStores = require("initialize").useStateFromStores(items, () => ChannelStore.getChannel(id));
  let str = onPressAvatar(row[10])(stateFromStores);
  const type = row.type;
  if (require("InstantInviteUtils").RowTypes.DM !== type) {
    if (require("InstantInviteUtils").RowTypes.FRIEND !== type) {
      if (require("InstantInviteUtils").RowTypes.GROUP_DM === type) {
        let tmp19 = null;
        if (null != stateFromStores) {
          const obj2 = { source: null, size: null };
          const tmp5Result = onPressAvatar(tmp3[17]);
          ({ id: obj12.id, icon: obj12.icon, application_id: obj12.applicationId } = stateFromStores);
          obj2.source = tmp5Result.makeSource(onPressAvatar(tmp3[17]).getChannelIconURL({ id: null, icon: null, applicationId: null, size: 32 }));
          obj2.size = require("native").AvatarSizes.REFRESH_MEDIUM_32;
          tmp19 = jsx(require("native").Avatar, { source: null, size: null });
          const obj3 = { id: null, icon: null, applicationId: null, size: 32 };
          const tmp5Result6 = onPressAvatar(tmp3[17]);
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
            const obj4 = { source: null, size: null };
            const tmp5Result7 = onPressAvatar(tmp3[17]);
            ({ id: obj8.id, icon: obj8.icon } = guild);
            obj4.source = tmp5Result7.makeSource(onPressAvatar(tmp3[17]).getGuildIconURL({ id: null, icon: null, size: 32 }));
            obj4.size = require("native").AvatarSizes.REFRESH_MEDIUM_32;
            tmp14 = jsx(require("native").Avatar, { source: null, size: null });
            const obj5 = { id: null, icon: null, size: 32 };
            const tmp5Result8 = onPressAvatar(tmp3[17]);
          } else {
            const obj6 = { style: tmp.acronym, children: null };
            const acronym = require("StringUtils").getAcronym(guild.name);
            const obj7 = { variant: "text-sm/bold", children: acronym };
            obj6.children = jsx(require("Text/Text").Text, { variant: "text-sm/bold", children: acronym });
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
    const obj9 = { start, end, icon: tmp14, label: str2, trailing: null, onPress: null, disabled: null, accessibilityActions: null, onAccessibilityAction: null };
    const obj10 = { sendState, onPressSend: handlePress };
    obj9.trailing = jsx(onPressAvatar(tmp3[21]), { sendState, onPressSend: handlePress });
    obj9.onPress = handlePress;
    let tmp30 = null != error || isSubmitting;
    if (!tmp30) {
      tmp30 = sendState === InviteSendStates.SENT;
    }
    obj9.disabled = tmp30;
    obj9.accessibilityActions = tmp17;
    obj9.onAccessibilityAction = fn;
    return jsx(require("TableRow").TableRow, { start, end, icon: tmp14, label: str2, trailing: null, onPress: null, disabled: null, accessibilityActions: null, onAccessibilityAction: null });
  }
  const user = UserStore.getUser(id);
  const obj11 = {
    importantForAccessibility: "no-hide-descendants",
    accessibilityElementsHidden: true,
    onPress(stopPropagation) {
      stopPropagation.stopPropagation();
      if (onPressAvatar != null) {
        tmp2(id);
      }
    },
    style: { padding: 8, margin: -8 },
    children: null
  };
  let avatarSource;
  if (user != null) {
    avatarSource = user.getAvatarSource(undefined);
  }
  if (avatarSource == null) {
    avatarSource = null;
  }
  const obj = require("initialize");
  obj11.children = jsx(require("native").Avatar, { source: avatarSource, size: require("native").AvatarSizes.REFRESH_MEDIUM_32 });
  const obj13 = { source: avatarSource, size: require("native").AvatarSizes.REFRESH_MEDIUM_32 };
  const obj14 = { nick: null, user: null };
  const tmp21Result = jsx(require("Pressables").PressableOpacity, {
    importantForAccessibility: "no-hide-descendants",
    accessibilityElementsHidden: true,
    onPress(stopPropagation) {
      stopPropagation.stopPropagation();
      if (onPressAvatar != null) {
        tmp2(id);
      }
    },
    style: { padding: 8, margin: -8 },
    children: null
  });
  const tmp5Result9 = onPressAvatar(row[14]);
  obj14.nick = onPressAvatar(row[15]).getGlobalName(user);
  obj14.user = user;
  let tmp26;
  const tmp5Result10 = onPressAvatar(row[15]);
  if (null != onPressAvatar) {
    const intl = require("util").intl;
    let tag;
    if (user != null) {
      tag = user.tag;
    }
    const obj15 = { name: "viewProfile", label: null };
    const obj16 = { username: tag };
    obj15.label = intl.formatToPlainString(require("util").t.uCenkh, obj16);
    const items1 = [obj15];
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
  str2 = <tmp5Result9 nick={null} user={null} />;
  tmp14 = tmp21Result;
  tmp17 = tmp26;
  const tmp21Result2 = <tmp5Result9 nick={null} user={null} />;
});