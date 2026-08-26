// === Module 16458: ? ===

// Module 16458
import ThemesDefault from "Themes" /* 712 */;
import { View } from "get ActivityIndicator" /* 17 */;
import closure_4 from "ensureGuildLoaded" /* 1391 */;
import closure_5 from "createGuildRecordFromRust" /* 1910 */;
import closure_6 from "mergeGuildAvatar" /* 1922 */;
import { InviteSendStates } from "InviteSendStates" /* 7406 */;
import { jsx } from "jsxProd" /* 21 */;
import createCacheKey from "createCacheKey" /* 4444 */;
import importAllResult from "noop" /* 19 */;

const require = arg1;
let obj = { acronym: null };
obj = { width: 32, height: 32, borderRadius: ThemesDefault.radii.lg, backgroundColor: ThemesDefault.colors.BACKGROUND_BASE_LOW, alignItems: "center", justifyContent: "center", overflow: "hidden", marginTop: 0, marginRight: 10, borderColor: ThemesDefault.colors.BORDER_MUTED, borderStyle: "solid", borderWidth: 2 };
obj[0] = obj;
let closure_9 = createCacheKey.createStyles(obj);
const memoResult = importAllResult.memo(function ActivityInviteSheetRow(row) {
  ({ onInviteSent: require, onPressAvatar } = row);
  row = row.row;
  const sendState = row.sendState;
  let id;
  ({ end, error, isSubmitting, start } = row);
  id = row.item.id;
  let obj = require(row[9]);
  const items = [closure_4];
  const stateFromStores = obj.useStateFromStores(items, () => closure_1_4.getChannel(id));
  let str = onPressAvatar(row[10])(stateFromStores);
  const type = row.type;
  if (require(row[11]).RowTypes.DM !== type) {
    if (tmp2(tmp3[11]).RowTypes.FRIEND !== type) {
      if (tmp2(tmp3[11]).RowTypes.GROUP_DM === type) {
        let tmp19 = null;
        if (null != stateFromStores) {
          obj = { source: null, size: null };
          let tmp5Result = tmp5(tmp3[17]);
          tmp5Result = tmp5(tmp3[17]);
          obj = { id: null, icon: null, applicationId: null, size: 32 };
          ({ id: obj12[0], icon: obj12[1], application_id: obj12[2] } = stateFromStores);
          obj[0] = tmp5Result.makeSource(tmp5Result.getChannelIconURL(obj));
          obj[1] = tmp2(tmp3[13]).AvatarSizes.REFRESH_MEDIUM_32;
          tmp19 = jsx(tmp2(tmp3[13]).Avatar, { id: null, icon: null, applicationId: null, size: 32 });
        }
        if (str == null) {
          str = "";
        }
        let str2 = str;
        let tmp14 = tmp19;
      } else if (tmp2(tmp3[11]).RowTypes.CHANNEL === type) {
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
            const tmp5Result1 = tmp5(tmp3[17]);
            ({ id: obj8[0], icon: obj8[1] } = guild);
            obj1[0] = tmp5Result1.makeSource(tmp5(tmp3[17]).getGuildIconURL({ id: null, icon: null, size: 32 }));
            obj1[1] = tmp2(tmp3[13]).AvatarSizes.REFRESH_MEDIUM_32;
            tmp14 = jsx(tmp2(tmp3[13]).Avatar, { source: null, size: null });
            const obj2 = { id: null, icon: null, size: 32 };
            const tmp5Result2 = tmp5(tmp3[17]);
          } else {
            const obj3 = { style: null, children: null };
            obj3[0] = tmp.acronym;
            const acronym = tmp2(tmp3[18]).getAcronym(guild.name);
            const obj4 = { variant: "text-sm/bold", children: null };
            obj4[1] = acronym;
            obj3[1] = jsx(tmp2(tmp3[19]).Text, { variant: "text-sm/bold", children: null });
            tmp14 = <id style={null}>{null}</id>;
            const tmp2Result = tmp2(tmp3[18]);
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
    obj5[4] = jsx(tmp5(tmp3[21]), { sendState: null, onPressSend: null });
    obj5[5] = handlePress;
    let tmp30 = null != error || isSubmitting;
    if (!tmp30) {
      tmp30 = sendState === InviteSendStates.SENT;
    }
    obj5[6] = tmp30;
    obj5[7] = tmp26;
    obj5[8] = fn;
    return jsx(tmp2(tmp3[20]).TableRow, { start: null, end: null, icon: null, label: null, trailing: null, onPress: null, disabled: null, accessibilityActions: null, onAccessibilityAction: null });
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
  let tmp21Result = tmp21(tmp2(tmp3[12]).PressableOpacity, obj7);
  const obj9 = { nick: null, user: null };
  tmp = callback();
  const tmp5Result3 = onPressAvatar(row[14]);
  obj9[0] = onPressAvatar(row[15]).getGlobalName(user);
  obj9[1] = user;
  tmp26 = undefined;
  tmp21Result = tmp21(tmp5Result3, obj9);
  if (null != onPressAvatar) {
    const intl = tmp2(tmp3[16]).intl;
    let tag;
    if (user != null) {
      tag = user.tag;
    }
    const obj10 = { name: "viewProfile", label: null };
    const obj11 = { username: null };
    obj11[0] = tag;
    obj10[1] = intl.formatToPlainString(tmp2(tmp3[16]).t.uCenkh, obj11);
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
});
const result = require("set").fileFinishedImporting("modules/activities/panel/native/ActivityInviteSheetRow.tsx");

export default memoResult;