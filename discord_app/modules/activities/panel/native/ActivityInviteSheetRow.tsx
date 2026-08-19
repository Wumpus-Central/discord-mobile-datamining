// discord_app/modules/activities/panel/native/ActivityInviteSheetRow.tsx
import ThemesDefault from "../../../../../discord_common/js/packages/tokens/native.tsx";
import { View } from "../../../../../_runtime/00017_get_ActivityIndicator.js";
import ensureGuildLoaded from "../../../../stores/ChannelStore.tsx";
import createGuildRecordFromRust from "../../../../stores/GuildStore.tsx";
import mergeGuildAvatar from "../../../../stores/UserStore.tsx";
import { InviteSendStates } from "../../../instant_invite/Constants.tsx";
import { jsx } from "../../../../../_runtime/react/00021_jsxProd.js";
import createCacheKey from "../../../../design/components/Styles/native/createStyles.tsx";
import importAllResult from "../../../../../_runtime/00019_noop.js";

const require = fn;
let obj = { width: 32, height: 32, borderRadius: ThemesDefault.radii.lg, backgroundColor: ThemesDefault.colors.BACKGROUND_BASE_LOW, alignItems: "center", justifyContent: "center", overflow: "hidden", marginTop: 0, marginRight: 10, borderColor: ThemesDefault.colors.BORDER_MUTED, borderStyle: "solid", borderWidth: 2 };
obj[0] = obj;
let closure_9 = createCacheKey.createStyles(obj);
const memoResult = importAllResult.memo(function ActivityInviteSheetRow(row) {
  ({ onInviteSent: require, onPressAvatar } = row);
  row = row.row;
  const sendState = row.sendState;
  ({ end, error, isSubmitting, start } = row);
  const id = row.item.id;
  let obj = require(row[9]);
  const items = [closure_4];
  const stateFromStores = obj.useStateFromStores(items, () => closure_1_4.getChannel(id));
  let str = onPressAvatar(row[10])(stateFromStores);
  const type = row.type;
  if (require(row[11]).RowTypes.DM !== type) {
    if (require(tmp3[11]).RowTypes.FRIEND !== type) {
      if (require(tmp3[11]).RowTypes.GROUP_DM === type) {
        let tmp19 = null;
        if (null != stateFromStores) {
          onPressAvatar(tmp3[17]);
          const tmp5Result = onPressAvatar(tmp3[17]);
          obj = { id: null, icon: null, applicationId: null, size: 32 };
          ({ id: obj12[0], icon: obj12[1], application_id: obj12[2] } = stateFromStores);
          obj[0] = tmp5Result.makeSource(tmp5Result.getChannelIconURL(obj));
          obj[1] = require(tmp3[13]).AvatarSizes.REFRESH_MEDIUM_32;
          tmp19 = jsx(require(tmp3[13]).Avatar, { id: null, icon: null, applicationId: null, size: 32 });
        }
        if (str == null) {
          str = "";
        }
        let str2 = str;
        let tmp14 = tmp19;
      } else if (require(tmp3[11]).RowTypes.CHANNEL === type) {
        let guild_id;
        if (stateFromStores != null) {
          guild_id = stateFromStores.guild_id;
        }
        let guild;
        if (null != guild_id) {
          guild = guild.getGuild(stateFromStores.guild_id);
        }
        if (null == guild) {
          return null;
        } else {
          if (null != guild.icon) {
            obj1 = { source: null, size: null };
            const tmp5Result1 = onPressAvatar(tmp3[17]);
            ({ id: obj8[0], icon: obj8[1] } = guild);
            obj1[0] = tmp5Result1.makeSource(onPressAvatar(tmp3[17]).getGuildIconURL({ id: null, icon: null, size: 32 }));
            obj1[1] = require(tmp3[13]).AvatarSizes.REFRESH_MEDIUM_32;
            tmp14 = jsx(require(tmp3[13]).Avatar, { source: null, size: null });
            const tmp5Result2 = onPressAvatar(tmp3[17]);
          } else {
            const obj3 = { style: null, children: null };
            obj3[0] = tmp.acronym;
            const acronym = require(tmp3[18]).getAcronym(guild.name);
            const obj4 = { variant: "text-sm/bold", children: null };
            obj4[1] = acronym;
            obj3[1] = jsx(require(tmp3[19]).Text, { variant: "text-sm/bold", children: null });
            tmp14 = <id style={null}>{null}</id>;
            const tmp2Result = require(tmp3[18]);
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
      callback(row);
    }
    const obj5 = { start: null, end: null, icon: null, label: null, trailing: null, onPress: null, disabled: null, accessibilityActions: null, onAccessibilityAction: null };
    obj5[0] = start;
    obj5[1] = end;
    obj5[2] = tmp14;
    obj5[3] = str2;
    const obj6 = { sendState: null, onPressSend: null };
    obj6[0] = sendState;
    obj6[1] = handlePress;
    obj5[4] = jsx(onPressAvatar(tmp3[21]), { sendState: null, onPressSend: null });
    obj5[5] = handlePress;
    let tmp30 = null != error || isSubmitting;
    if (!tmp30) {
      tmp30 = sendState === InviteSendStates.SENT;
    }
    obj5[6] = tmp30;
    obj5[7] = tmp17;
    obj5[8] = fn;
    return jsx(require(tmp3[20]).TableRow, { start: null, end: null, icon: null, label: null, trailing: null, onPress: null, disabled: null, accessibilityActions: null, onAccessibilityAction: null });
  }
  user = user.getUser(id);
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
    children: null
  };
  let avatarSource;
  if (user != null) {
    avatarSource = user.getAvatarSource(undefined);
  }
  if (avatarSource == null) {
    avatarSource = null;
  }
  const obj8 = { source: avatarSource, size: require(row[13]).AvatarSizes.REFRESH_MEDIUM_32 };
  obj7[4] = jsx(require(row[13]).Avatar, { source: avatarSource, size: require(row[13]).AvatarSizes.REFRESH_MEDIUM_32 });
  jsx(require(tmp3[12]).PressableOpacity, {
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
  const obj9 = { nick: null, user: null };
  tmp = callback();
  const tmp5Result3 = onPressAvatar(row[14]);
  obj9[0] = onPressAvatar(row[15]).getGlobalName(user);
  obj9[1] = user;
  let tmp26;
  const tmp21Result = <tmp5Result3 nick={null} user={null} />;
  if (null != onPressAvatar) {
    const intl = require(tmp3[16]).intl;
    let tag;
    if (user != null) {
      tag = user.tag;
    }
    const obj10 = { name: "viewProfile", label: null };
    const obj11 = { username: null };
    obj11[0] = tag;
    obj10[1] = intl.formatToPlainString(require(tmp3[16]).t.uCenkh, obj11);
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
const result = require("obj132").fileFinishedImporting("modules/activities/panel/native/ActivityInviteSheetRow.tsx");

export default memoResult;