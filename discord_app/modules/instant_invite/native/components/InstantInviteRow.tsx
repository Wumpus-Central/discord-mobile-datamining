// === Module 11888: ? ===

// Module 11888
import ThemesDefault from "Themes" /* 712 */;
import { View } from "get ActivityIndicator" /* 17 */;
import ensureGuildLoaded from "ensureGuildLoaded" /* 1391 */;
import updateWithLatestInvite from "updateWithLatestInvite" /* 8919 */;
import createGuildRecordFromRust from "createGuildRecordFromRust" /* 1910 */;
import _computeRows from "_computeRows" /* 11502 */;
import mergeGuildAvatar from "mergeGuildAvatar" /* 1922 */;
import setSendState from "setSendState" /* 11887 */;
import { InviteSendStates } from "InviteSendStates" /* 4371 */;
import { jsx } from "jsxProd" /* 21 */;
import createCacheKey from "createCacheKey" /* 4661 */;
import importAllResult from "noop" /* 19 */;

const require = fn;
({ setSendState: c9, useInstantInviteSendStates: c10 } = setSendState);
let obj = { width: 32, height: 32, borderRadius: ThemesDefault.radii.lg, backgroundColor: ThemesDefault.colors.BACKGROUND_BASE_LOW, alignItems: "center", justifyContent: "center", overflow: "hidden", marginTop: 0, marginRight: 10, borderColor: ThemesDefault.colors.BORDER_MUTED, borderStyle: "solid", borderWidth: 2 };
obj[0] = obj;
let closure_13 = createCacheKey.createStyles(obj);
const memoResult = importAllResult.memo(function InstantInviteRow(row) {
  row = row.row;
  const code = row.code;
  const onPressAvatar = row.onPressAvatar;
  ({ onInviteSent: View, source: closure_4 } = row);
  ({ start, end } = row);
  const id = row.item.id;
  let obj = row(onPressAvatar[12]);
  const items = [id];
  const stateFromStores = obj.useStateFromStores(items, () => id.isSubmitting());
  obj1 = row(onPressAvatar[12]);
  const items1 = [id];
  const stateFromStores1 = obj1.useStateFromStores(items1, () => id.getError());
  const tmp6 = callback((arg0) => {
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
  const items2 = [closure_4];
  const stateFromStores2 = obj2.useStateFromStores(items2, () => closure_1_4.getChannel(id));
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
            tmp8(tmp3[21]);
            const tmp8Result = tmp8(tmp3[21]);
            obj = { id: null, icon: null, applicationId: null, size: 32 };
            ({ id: obj14[0], icon: obj14[1], application_id: obj14[2] } = stateFromStores2);
            obj[0] = tmp8Result.makeSource(tmp8Result.getChannelIconURL(obj));
            obj[1] = tmp2(tmp3[17]).AvatarSizes.REFRESH_MEDIUM_32;
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
            guild = guild.getGuild(stateFromStores2.guild_id);
          }
          if (null == guild) {
            return null;
          } else {
            if (null != guild.icon) {
              obj1 = { source: null, size: null };
              const tmp8Result1 = tmp8(tmp3[21]);
              obj2 = { id: null, icon: null, size: 32 };
              ({ id: obj10[0], icon: obj10[1] } = guild);
              obj1[0] = tmp8Result1.makeSource(tmp8(tmp3[21]).getGuildIconURL(obj2));
              obj1[1] = tmp2(tmp3[17]).AvatarSizes.REFRESH_MEDIUM_32;
              tmp15 = jsx(tmp2(tmp3[17]).Avatar, { source: null, size: null });
              const tmp8Result2 = tmp8(tmp3[21]);
            } else {
              let obj3 = { style: null, children: null };
              obj3[0] = tmp.acronym;
              const acronym = tmp2(tmp3[22]).getAcronym(guild.name);
              let obj4 = { variant: "text-sm/bold", children: null };
              obj4[1] = acronym;
              obj3[1] = jsx(tmp2(tmp3[23]).Text, { variant: "text-sm/bold", children: null });
              tmp15 = <View style={null}>{null}</View>;
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
            if (null != closure_1) {
              closure_1_9(tmp, closure_5, arg0 ? closure_1_11.SENT : closure_1_11.ERROR);
              if (arg0) {
                if (callback != null) {
                  callback();
                }
              }
            }
          }
          closure_1_9(code, id, InviteSendStates.SENDING);
          const type = row.type;
          if (row(onPressAvatar[14]).RowTypes.FRIEND !== type) {
            if (row(onPressAvatar[14]).RowTypes.DM !== type) {
              if (row(onPressAvatar[14]).RowTypes.GROUP_DM === type) {
                if (null != code) {
                  let obj3 = code(onPressAvatar[15]);
                  let obj = { inviteKey: null, type: null, channel: null, location: "Invite Action Sheet", inviteAnalyticsMetadata: null };
                  obj[0] = code;
                  obj[1] = row(onPressAvatar[15]).InvitePropertiesType.GROUP_DM;
                  obj[2] = closure_1_4.getChannel(id);
                  obj = { suggestionData: null, source: null };
                  obj[0] = closure_1_7.getSelectedInviteMetadata(row);
                  obj[1] = closure_4;
                  obj[4] = obj;
                  obj3.enqueue(obj, handleSendState);
                }
              } else if (row(onPressAvatar[14]).RowTypes.CHANNEL === type) {
                if (null != code) {
                  obj = code(onPressAvatar[15]);
                  obj1 = { inviteKey: null, type: null, channel: null, location: "Invite Action Sheet", inviteAnalyticsMetadata: null };
                  obj1[0] = code;
                  obj1[1] = row(onPressAvatar[15]).InvitePropertiesType.CHANNEL;
                  obj1[2] = closure_1_4.getChannel(id);
                  const obj2 = { suggestionData: null, source: null };
                  obj2[0] = closure_1_7.getSelectedInviteMetadata(row);
                  obj2[1] = closure_4;
                  obj1[4] = obj2;
                  obj.enqueue(obj1, handleSendState);
                }
              }
            }
          }
          if (null != code) {
            obj3 = { inviteKey: null, type: null, user: null, location: "Invite Action Sheet", inviteAnalyticsMetadata: null };
            obj3[0] = code;
            obj3[1] = row(onPressAvatar[15]).InvitePropertiesType.USER;
            obj3[2] = closure_1_8.getUser(id);
            const obj4 = { suggestionData: null, source: null };
            obj4[0] = closure_1_7.getSelectedInviteMetadata(row);
            obj4[1] = closure_4;
            obj3[4] = obj4;
            code(onPressAvatar[15]).enqueue(obj3, handleSendState);
            const obj7 = code(onPressAvatar[15]);
          }
        }
      }
      const obj5 = { start: null, end: null, icon: null, label: null, trailing: null, onPress: null, disabled: null, accessibilityActions: null, onAccessibilityAction: null };
      obj5[0] = start;
      obj5[1] = end;
      obj5[2] = tmp15;
      obj5[3] = str2;
      const obj6 = { sendState: null, onPressSend: null };
      obj6[0] = tmp6;
      obj6[1] = handlePress;
      obj5[4] = jsx(tmp8(tmp3[25]), { sendState: null, onPressSend: null });
      obj5[5] = handlePress;
      let tmp30 = null != stateFromStores1 || stateFromStores;
      if (!tmp30) {
        tmp30 = tmp6 === InviteSendStates.SENT;
      }
      obj5[6] = tmp30;
      obj5[7] = tmp18;
      obj5[8] = T;
      return jsx(tmp2(tmp3[24]).TableRow, { start: null, end: null, icon: null, label: null, trailing: null, onPress: null, disabled: null, accessibilityActions: null, onAccessibilityAction: null });
    }
    user = user.getUser(id);
    let obj7 = { importantForAccessibility: "no-hide-descendants", accessibilityElementsHidden: true, onPress: null, style: null, children: null };
    obj7[2] = function onPress(stopPropagation) {
      stopPropagation.stopPropagation();
      if (onPressAvatar != null) {
        tmp2(id);
      }
    };
    obj7[3] = { padding: 8, margin: -8 };
    let avatarSource;
    if (user != null) {
      avatarSource = user.getAvatarSource(undefined);
    }
    if (avatarSource == null) {
      avatarSource = null;
    }
    const obj8 = { source: null, size: null };
    obj8[0] = avatarSource;
    obj8[1] = tmp2(tmp3[17]).AvatarSizes.REFRESH_MEDIUM_32;
    obj7[4] = jsx(tmp2(tmp3[17]).Avatar, { source: null, size: null });
    jsx(tmp2(tmp3[16]).PressableOpacity, { importantForAccessibility: "no-hide-descendants", accessibilityElementsHidden: true, onPress: null, style: null, children: null });
    const obj9 = { nick: null, user: null };
    const tmp8Result3 = tmp8(tmp3[18]);
    obj9[0] = tmp8(tmp3[19]).getGlobalName(user);
    obj9[1] = user;
    let tmp27;
    const tmp22Result = <tmp8Result3 nick={null} user={null} />;
    if (null != onPressAvatar) {
      const intl = tmp2(tmp3[20]).intl;
      let tag;
      if (user != null) {
        tag = user.tag;
      }
      const obj10 = { name: "viewProfile", label: null };
      const obj11 = { username: null };
      obj11[0] = tag;
      obj10[1] = intl.formatToPlainString(tmp2(tmp3[20]).t.uCenkh, obj11);
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
  tmp = callback2();
});
const result = require("obj132").fileFinishedImporting("modules/instant_invite/native/components/InstantInviteRow.tsx");

export default memoResult;