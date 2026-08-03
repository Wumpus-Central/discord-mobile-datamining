// === Module 11820: ? ===

// Module 11820
import { View } from "Button";
import ensureGuildLoaded from "ensureGuildLoaded";
import updateWithLatestInvite from "updateWithLatestInvite";
import createGuildRecordFromRust from "createGuildRecordFromRust";
import _computeRows from "_computeRows";
import mergeGuildAvatar from "mergeGuildAvatar";
import setSendState from "setSendState";
import { InviteSendStates } from "InviteSendStates";
import { jsx } from "getAvatarURL";
import createCacheKey from "createCacheKey";
import importAllResult from "nameFromUser";

let c10;
let c9;
const require = arg1;
({ setSendState: c9, useInstantInviteSendStates: c10 } = setSendState);
let obj = { acronym: null };
obj = { width: 32, height: 32, borderRadius: require("Themes").radii.lg, backgroundColor: require("Themes").colors.BACKGROUND_BASE_LOW, alignItems: "center", justifyContent: "center", overflow: "hidden", marginTop: 0, marginRight: 10, borderColor: require("Themes").colors.BORDER_MUTED, borderStyle: "solid", borderWidth: 2 };
obj[0] = obj;
let closure_13 = createCacheKey.createStyles(obj);
const memoResult = require("nameFromUser").memo(function InstantInviteRow(row) {
  let View;
  let ensureGuildLoaded;
  let end;
  let start;
  row = row.row;
  const code = row.code;
  const onPressAvatar = row.onPressAvatar;
  ({ onInviteSent: View, source: ensureGuildLoaded } = row);
  let id;
  ({ start, end } = row);
  id = row.item.id;
  let obj = row(onPressAvatar[12]);
  const items = [id];
  const stateFromStores = obj.useStateFromStores(items, () => id.isSubmitting());
  let obj1 = row(onPressAvatar[12]);
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
  const items2 = [ensureGuildLoaded];
  const stateFromStores2 = obj2.useStateFromStores(items2, () => outer1_4.getChannel(id));
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
            let tmp8Result = tmp8(tmp3[21]);
            tmp8Result = tmp8(tmp3[21]);
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
              outer1_9(tmp, updateWithLatestInvite, arg0 ? outer1_11.SENT : outer1_11.ERROR);
              if (arg0) {
                if (callback != null) {
                  callback();
                }
              }
            }
          }
          outer1_9(tmp, id, outer1_11.SENDING);
          const type = row.type;
          if (row(onPressAvatar[14]).RowTypes.FRIEND !== type) {
            if (tmp7(tmp8[14]).RowTypes.DM !== type) {
              if (tmp7(tmp8[14]).RowTypes.GROUP_DM === type) {
                if (null != tmp) {
                  let obj3 = code(tmp8[15]);
                  let obj = { inviteKey: null, type: null, channel: null, location: "Invite Action Sheet", inviteAnalyticsMetadata: null };
                  obj[0] = tmp;
                  obj[1] = tmp7(tmp8[15]).InvitePropertiesType.GROUP_DM;
                  obj[2] = outer1_4.getChannel(tmp3);
                  obj = { suggestionData: null, source: null };
                  obj[0] = outer1_7.getSelectedInviteMetadata(tmp6);
                  obj[1] = ensureGuildLoaded;
                  obj[4] = obj;
                  obj3.enqueue(obj, handleSendState);
                }
              } else if (tmp7(tmp8[14]).RowTypes.CHANNEL === type) {
                if (null != tmp) {
                  obj = code(tmp8[15]);
                  const obj1 = { inviteKey: null, type: null, channel: null, location: "Invite Action Sheet", inviteAnalyticsMetadata: null };
                  obj1[0] = tmp;
                  obj1[1] = tmp7(tmp8[15]).InvitePropertiesType.CHANNEL;
                  obj1[2] = outer1_4.getChannel(tmp3);
                  const obj2 = { suggestionData: null, source: null };
                  obj2[0] = outer1_7.getSelectedInviteMetadata(tmp6);
                  obj2[1] = ensureGuildLoaded;
                  obj1[4] = obj2;
                  obj.enqueue(obj1, handleSendState);
                }
              }
            }
          }
          if (null != tmp) {
            obj3 = { inviteKey: null, type: null, user: null, location: "Invite Action Sheet", inviteAnalyticsMetadata: null };
            obj3[0] = tmp;
            obj3[1] = tmp7(tmp8[15]).InvitePropertiesType.USER;
            obj3[2] = outer1_8.getUser(tmp3);
            const obj4 = { suggestionData: null, source: null };
            obj4[0] = outer1_7.getSelectedInviteMetadata(tmp6);
            obj4[1] = ensureGuildLoaded;
            obj3[4] = obj4;
            code(tmp8[15]).enqueue(obj3, handleSendState);
            const obj7 = code(tmp8[15]);
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
    let tmp22Result = tmp22(tmp2(tmp3[16]).PressableOpacity, obj7);
    const obj9 = { nick: null, user: null };
    const tmp8Result3 = tmp8(tmp3[18]);
    obj9[0] = tmp8(tmp3[19]).getGlobalName(user);
    obj9[1] = user;
    let tmp27;
    tmp22Result = tmp22(tmp8Result3, obj9);
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
});
const result = require("ensureGuildLoaded").fileFinishedImporting("modules/instant_invite/native/components/InstantInviteRow.tsx");

export default memoResult;