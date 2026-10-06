// === Module 17211: ActivityInviteSheetRow ===

// Module 17211 (ActivityInviteSheetRow)
import react_native from "react-native" /* 17 */;
import Fragment from "Fragment" /* 21 */;
import nativeDefault from "native" /* 587 */;
import Constants from "Constants" /* 7239 */;
import react from "react" /* 19 */;
import ChannelStore from "ChannelStore" /* 2051 */;
import GuildStore from "GuildStore" /* 2074 */;
import UserStore from "UserStore" /* 1377 */;
import createStyles from "createStyles" /* 4896 */;
import ReactCompilerGating from "ReactCompilerGating" /* 558 */;
import size_mod from "module_2" /* 2 */;

const require = globalThis.__r;

let size;
const View = react_native.View;
const InviteSendStates = Constants.InviteSendStates;
const jsx = Fragment.jsx;
let obj = { acronym: size };
size = { width: 32, height: 32, borderRadius: nativeDefault.radii.lg, backgroundColor: nativeDefault.colors.BACKGROUND_BASE_LOW, alignItems: "center", justifyContent: "center", overflow: "hidden", marginTop: 0, marginRight: 10, borderColor: nativeDefault.colors.BORDER_MUTED, borderStyle: "solid", borderWidth: 2 };
let closure_9 = createStyles.createStyles(obj);
const memoResult = react.memo(ReactCompilerGating.isReactCompilerEnabled() ? ((onPressAvatar) => {
  let end;
  let error;
  let first;
  let isSubmitting;
  let onInviteSent;
  let row;
  let sendState;
  let start;
  let tmp7;
  const tmp2 = row;
  const obj = onInviteSent(row[10]);
  const cResult = obj.c(47);
  ({ end, onInviteSent } = onPressAvatar);
  onPressAvatar = onPressAvatar.onPressAvatar;
  row = onPressAvatar.row;
  ({ sendState, start } = onPressAvatar);
  ({ error, isSubmitting } = onPressAvatar);
  const tmp4 = closure_9();
  const id = row.item.id;
  if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
    const items = [ChannelStore];
    cResult[0] = items;
    first = items;
  } else {
    first = cResult[0];
  }
  if (cResult[1] !== id) {
    const fn = function y() {
      return ChannelStore.getChannel(id);
    };
    cResult[1] = id;
    cResult[2] = fn;
    tmp7 = fn;
  } else {
    tmp7 = cResult[2];
  }
  const tmpResult = onInviteSent(tmp2[11]);
  const stateFromStores = tmpResult.useStateFromStores(first, tmp7);
  let str = onPressAvatar(tmp2[12])(stateFromStores);
  if (cResult[3] === onInviteSent) {
    let tmp10;
    let str4;
    let tmp13;
    let tmp43;
    if (cResult[4] === row) {
      tmp10 = cResult[5];
    }
    const type = row.type;
    if (onInviteSent(tmp2[13]).RowTypes.DM !== type) {
      if (onInviteSent(tmp2[13]).RowTypes.FRIEND !== type) {
        if (onInviteSent(tmp2[13]).RowTypes.GROUP_DM === type) {
          let tmp33;
          if (cResult[23] !== stateFromStores) {
            let tmp34 = null;
            if (null != stateFromStores) {
              const Avatar2 = onInviteSent(tmp2[15]).Avatar;
              const makeSource2 = onPressAvatar(tmp2[19]).makeSource;
              onPressAvatar(tmp2[19]);
              const obj3 = { id: null, icon: null, applicationId: null, size: 32 };
              ({ id: obj10.id, icon: obj10.icon, application_id: obj10.applicationId } = stateFromStores);
              tmp34 = <Avatar2 source={makeSource2(onPressAvatar(tmp2[19]).getChannelIconURL(obj3))} size={onInviteSent(tmp2[15]).AvatarSizes.REFRESH_MEDIUM_32} />;
              const tmp9Result6 = onPressAvatar(tmp2[19]);
            }
            cResult[23] = stateFromStores;
            cResult[24] = tmp34;
            tmp33 = tmp34;
          } else {
            tmp33 = cResult[24];
          }
          if (str == null) {
            str = "";
          }
          str4 = str;
          tmp13 = tmp33;
        } else if (onInviteSent(tmp2[13]).RowTypes.CHANNEL === type) {
          if (cResult[25] === stateFromStores) {
            let tmp12;
            if (cResult[26] === tmp4) {
              tmp12 = cResult[27];
              tmp13 = cResult[28];
            }
            const _Symbol2 = Symbol;
            if (tmp12 !== Symbol.for("react.early_return_sentinel")) {
              return tmp12;
            } else {
              str4 = "";
              if (null != str) {
                const _HermesInternal = HermesInternal;
                str4 = "#" + str;
              }
            }
          }
          const _Symbol = Symbol;
          const forResult = Symbol.for("react.early_return_sentinel");
          let guild_id;
          if (stateFromStores != null) {
            guild_id = stateFromStores.guild_id;
          }
          let guild;
          if (null != guild_id) {
            guild = GuildStore.getGuild(stateFromStores.guild_id);
          }
          let tmp19 = null;
          let tmp20;
          if (null != guild) {
            if (null != guild.icon) {
              const Avatar = onInviteSent(tmp2[15]).Avatar;
              const makeSource = onPressAvatar(tmp2[19]).makeSource;
              onPressAvatar(tmp2[19]);
              const obj5 = { id: null, icon: null, size: 32 };
              ({ id: obj7.id, icon: obj7.icon } = guild);
              tmp20 = <Avatar source={makeSource(onPressAvatar(tmp2[19]).getGuildIconURL(obj5))} size={onInviteSent(tmp2[15]).AvatarSizes.REFRESH_MEDIUM_32} />;
              tmp19 = forResult;
              const tmp9Result8 = onPressAvatar(tmp2[19]);
            } else {
              let tmp21;
              const tmpResult2 = onInviteSent(tmp2[20]);
              const acronym = tmpResult2.getAcronym(guild.name);
              if (cResult[29] !== acronym) {
                const tmp23 = jsx(onInviteSent(tmp2[21]).Text, { variant: "text-sm/bold", children: acronym });
                cResult[29] = acronym;
                cResult[30] = tmp23;
                tmp21 = tmp23;
              } else {
                tmp21 = cResult[30];
              }
              if (cResult[31] === tmp4.acronym) {
                let tmp24;
                if (cResult[32] === tmp21) {
                  tmp24 = cResult[33];
                }
                tmp20 = tmp24;
                tmp19 = forResult;
              }
              const tmp27 = <id style={tmp4.acronym}>{tmp21}</id>;
              cResult[31] = tmp4.acronym;
              cResult[32] = tmp21;
              cResult[33] = tmp27;
              tmp24 = tmp27;
            }
          }
          cResult[25] = stateFromStores;
          cResult[26] = tmp4;
          cResult[27] = tmp19;
          cResult[28] = tmp20;
          tmp12 = tmp19;
          tmp13 = tmp20;
        } else {
          return null;
        }
      }
      if (cResult[34] === tmp10) {
        let tmp63;
        if (cResult[35] === sendState) {
          tmp63 = cResult[36];
        }
        if (cResult[37] === tmp32) {
          if (cResult[38] === end) {
            if (cResult[39] === tmp10) {
              if (cResult[40] === str4) {
                if (cResult[41] === tmp13) {
                  if (cResult[42] === tmp31) {
                    if (cResult[43] === start) {
                      if (cResult[44] === tmp63) {
                        let tmp69;
                        if (cResult[45] === (null != error || isSubmitting || sendState === InviteSendStates.SENT)) {
                          tmp69 = cResult[46];
                        }
                        return tmp69;
                      }
                    }
                  }
                }
              }
            }
          }
        }
        const tmp71 = jsx(onInviteSent(tmp2[23]).TableRow, { start, end, icon: tmp13, label: str4, trailing: tmp63, onPress: tmp10, disabled: null != error || isSubmitting || sendState === InviteSendStates.SENT, accessibilityActions: tmp32, onAccessibilityAction: tmp31 });
        cResult[37] = tmp32;
        cResult[38] = end;
        cResult[39] = tmp10;
        cResult[40] = str4;
        cResult[41] = tmp13;
        cResult[42] = tmp31;
        cResult[43] = start;
        cResult[44] = tmp63;
        class M {
          constructor() {
            onInviteSent(row);
          }
        }
        cResult[45] = null != error || isSubmitting || sendState === InviteSendStates.SENT;
        cResult[46] = tmp71;
        tmp69 = tmp71;
      }
      const tmp65 = jsx(onPressAvatar(tmp2[22]), { sendState, onPressSend: tmp10 });
      cResult[34] = tmp10;
      cResult[35] = sendState;
      cResult[36] = tmp65;
      tmp63 = tmp65;
    }
    if (cResult[6] === id) {
      let tmp38;
      let tmp39;
      let tmp40;
      let tmp41;
      if (cResult[7] === onPressAvatar) {
        tmp38 = cResult[8];
        tmp39 = cResult[9];
        tmp40 = cResult[10];
        tmp41 = cResult[11];
      }
      if (cResult[13] === tmp38) {
        if (cResult[14] === tmp39) {
          let tmp50;
          if (cResult[15] === tmp40) {
            tmp50 = cResult[16];
          }
          if (cResult[17] === onPressAvatar) {
            let tag;
            if (tmp40 != null) {
              tag = tmp40.tag;
            }
            if (cResult[20] === id) {
              str4 = tmp50;
              tmp13 = tmp41;
            }
            class B {
              constructor(nativeEvent) {
                const tmp = "viewProfile" === nativeEvent.nativeEvent.actionName && null !== onPressAvatar;
                if (tmp) {
                  if (onPressAvatar != null) {
                    tmp4(id);
                  }
                }
              }
            }
            cResult[20] = id;
            cResult[21] = onPressAvatar;
            cResult[22] = B;
          }
          let tmp58;
          if (null != onPressAvatar) {
            const intl = onInviteSent(tmp2[18]).intl;
            const formatToPlainString = intl.formatToPlainString;
            let tag1;
            const uCenkh = onInviteSent(tmp2[18]).t.uCenkh;
            if (tmp40 != null) {
              tag1 = tmp40.tag;
            }
            const obj12 = { name: "viewProfile", label: formatToPlainString(uCenkh, tmp60) };
            class B {
              constructor(nativeEvent) {
                const tmp = "viewProfile" === nativeEvent.nativeEvent.actionName && null !== onPressAvatar;
                if (tmp) {
                  if (onPressAvatar != null) {
                    tmp4(id);
                  }
                }
              }
            }
            tmp60[0] = tag1;
            const items1 = [obj12];
            tmp58 = items1;
          }
          let tag2;
          if (tmp40 != null) {
            tag2 = tmp40.tag;
          }
          cResult[18] = tag2;
          cResult[19] = tmp58;
        }
      }
      cResult[13] = tmp38;
      cResult[14] = tmp39;
      cResult[15] = tmp40;
      cResult[16] = tmp52;
      tmp50 = tmp52;
    }
    const user = UserStore.getUser(id);
    if (cResult[12] === Symbol.for("react.memo_cache_sentinel")) {
      const obj14 = { padding: 8, margin: -8 };
      cResult[12] = obj14;
      tmp43 = obj14;
    } else {
      tmp43 = cResult[12];
    }
    const PressableOpacity = onInviteSent(tmp2[14]).PressableOpacity;
    let avatarSource;
    const Avatar3 = onInviteSent(tmp2[15]).Avatar;
    if (user != null) {
      avatarSource = user.getAvatarSource(undefined);
    }
    if (avatarSource == null) {
      avatarSource = null;
    }
    ({ source: avatarSource, size: onInviteSent(tmp2[15]).AvatarSizes.REFRESH_MEDIUM_32 });
    const tmp44Result = <PressableOpacity importantForAccessibility="no-hide-descendants" accessibilityElementsHidden onPress={function onPress(stopPropagation) {
      stopPropagation.stopPropagation();
      if (onPressAvatar != null) {
        tmp2(id);
      }
    }} style={tmp43}>{null}</PressableOpacity>;
    const tmp9Result9 = onPressAvatar(tmp2[16]);
    const tmp9Result10 = onPressAvatar(tmp2[17]);
    const globalName = tmp9Result10.getGlobalName(user);
    cResult[6] = id;
    cResult[7] = onPressAvatar;
    cResult[8] = tmp9Result9;
    class M {
      constructor() {
        onInviteSent(row);
      }
    }
    cResult[9] = globalName;
    cResult[10] = user;
    cResult[11] = tmp44Result;
    tmp40 = user;
    tmp39 = globalName;
    tmp38 = tmp9Result9;
    tmp41 = tmp44Result;
  }
  class M {
    constructor() {
      onInviteSent(row);
    }
  }
  cResult[3] = onInviteSent;
  cResult[4] = row;
  cResult[5] = M;
  tmp10 = M;
}) : ((row) => {
  let end;
  let error;
  let isSubmitting;
  let obj16;
  let onPressAvatar;
  let start;
  let tmp18;
  ({ onInviteSent: require, onPressAvatar } = row);
  row = row.row;
  const sendState = row.sendState;
  ({ end, error, isSubmitting, start } = row);
  const id = row.item.id;
  let tmp = closure_9();
  const items = [ChannelStore];
  const obj = require("get initialized");
  const stateFromStores = obj.useStateFromStores(items, () => ChannelStore.getChannel(id));
  let str = onPressAvatar(row[12])(stateFromStores);
  const type = row.type;
  if (require("InstantInviteUtils").RowTypes.DM !== type) {
    let str2;
    let P;
    let tmp14;
    if (require("InstantInviteUtils").RowTypes.FRIEND !== type) {
      if (require("InstantInviteUtils").RowTypes.GROUP_DM === type) {
        let tmp20 = null;
        if (null != stateFromStores) {
          const Avatar2 = require("native").Avatar;
          const makeSource2 = onPressAvatar(tmp3[19]).makeSource;
          onPressAvatar(row[19]);
          const obj3 = { id: null, icon: null, applicationId: null, size: 32 };
          ({ id: obj10.id, icon: obj10.icon, application_id: obj10.applicationId } = stateFromStores);
          tmp20 = <Avatar2 source={makeSource2(onPressAvatar(row[19]).getChannelIconURL(obj3))} size={require("native").AvatarSizes.REFRESH_MEDIUM_32} />;
          const tmp5Result6 = onPressAvatar(row[19]);
        }
        if (str == null) {
          str = "";
        }
        str2 = str;
        P = undefined;
        tmp14 = tmp20;
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
            const Avatar = require("native").Avatar;
            const makeSource = onPressAvatar(tmp3[19]).makeSource;
            onPressAvatar(row[19]);
            const obj5 = { id: null, icon: null, size: 32 };
            ({ id: obj7.id, icon: obj7.icon } = guild);
            tmp14 = <Avatar source={makeSource(onPressAvatar(row[19]).getGuildIconURL(obj5))} size={require("native").AvatarSizes.REFRESH_MEDIUM_32} />;
            const tmp5Result8 = onPressAvatar(row[19]);
          } else {
            const tmp2Result = require("StringUtils");
            const acronym = tmp2Result.getAcronym(guild.name);
            tmp14 = <id style={tmp.acronym}>{null}</id>;
          }
          str2 = "";
          if (null != str) {
            const _HermesInternal = HermesInternal;
            str2 = "#" + str;
          }
          P = undefined;
        }
      } else {
        return null;
      }
    }
    function handlePress() {
      require(row);
    }
    const TableRow = require("TableRow").TableRow;
    return <TableRow start={start} end={end} icon={tmp14} label={str2} trailing={null} onPress={handlePress} disabled={null != error || isSubmitting || sendState === InviteSendStates.SENT} accessibilityActions={tmp18} onAccessibilityAction={P} />;
  }
  const user = UserStore.getUser(id);
  const PressableOpacity = require("Pressables").PressableOpacity;
  let avatarSource;
  const Avatar3 = require("native").Avatar;
  if (user != null) {
    avatarSource = user.getAvatarSource(undefined);
  }
  if (avatarSource == null) {
    avatarSource = null;
  }
  ({ source: avatarSource, size: require("native").AvatarSizes.REFRESH_MEDIUM_32 });
  const tmp23Result = <PressableOpacity importantForAccessibility="no-hide-descendants" accessibilityElementsHidden onPress={function onPress(stopPropagation) {
    stopPropagation.stopPropagation();
    if (onPressAvatar != null) {
      tmp2(id);
    }
  }} style={{ padding: 8, margin: -8 }}>{null}</PressableOpacity>;
  onPressAvatar(row[16]);
  let tmp28;
  const tmp23Result2 = <tmp5Result9 nick={onPressAvatar(row[17]).getGlobalName(user)} user={user} />;
  if (null != onPressAvatar) {
    const intl = require("intl").intl;
    const formatToPlainString = intl.formatToPlainString;
    let tag;
    const uCenkh = require("intl").t.uCenkh;
    if (user != null) {
      tag = user.tag;
    }
    const obj15 = { name: "viewProfile", label: formatToPlainString(uCenkh, obj16) };
    const items1 = [obj15];
    tmp28 = items1;
    obj16 = { username: tag };
  }
  class P {
    constructor(nativeEvent) {
      const tmp = "viewProfile" === nativeEvent.nativeEvent.actionName && null !== onPressAvatar;
      if (tmp) {
        if (onPressAvatar != null) {
          tmp4(id);
        }
      }
    }
  }
  str2 = tmp23Result2;
  tmp14 = tmp23Result;
  tmp18 = tmp28;
}));
size = size_mod;
const result = size.fileFinishedImporting("modules/activities/panel/native/ActivityInviteSheetRow.tsx");

export default memoResult;