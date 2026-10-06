// === Module 9566: InstantInviteRow ===

// Module 9566 (InstantInviteRow)
import react_native from "react-native" /* 17 */;
import Fragment from "Fragment" /* 21 */;
import nativeDefault from "native" /* 587 */;
import Constants from "Constants" /* 7239 */;
import InstantInviteUtils from "InstantInviteUtils" /* 9496 */;
import InviteQueue from "InviteQueue" /* 9568 */;
import react from "react" /* 19 */;
import ChannelStore from "ChannelStore" /* 2051 */;
import CreateInviteModalStore from "CreateInviteModalStore" /* 9495 */;
import GuildStore from "GuildStore" /* 2074 */;
import InviteSuggestionsStore from "InviteSuggestionsStore" /* 9507 */;
import UserStore from "UserStore" /* 1377 */;
import InstantInviteSendStateStore from "InstantInviteSendStateStore" /* 9567 */;
import createStyles from "createStyles" /* 4896 */;
import ReactCompilerGating from "ReactCompilerGating" /* 558 */;
import size_mod from "module_2" /* 2 */;

const InviteQueueDefault = InviteQueue;
let enqueue2Result, enqueue3Result, enqueueResult, obj1, obj10, obj8, obj9, row, tmp10, tmp11, tmp12, tmp17, tmp18, tmp21, tmp22, tmp23, tmp24, tmp25, tmp3, tmp7, tmp8, tmp9;

let c10;
let c9;
let size;
const View = react_native.View;
({ setSendState: c9, useInstantInviteSendStates: c10 } = InstantInviteSendStateStore);
const InviteSendStates = Constants.InviteSendStates;
const jsx = Fragment.jsx;
let obj = { acronym: size };
size = { width: 32, height: 32, borderRadius: nativeDefault.radii.lg, backgroundColor: nativeDefault.colors.BACKGROUND_BASE_LOW, alignItems: "center", justifyContent: "center", overflow: "hidden", marginTop: 0, marginRight: 10, borderColor: nativeDefault.colors.BORDER_MUTED, borderStyle: "solid", borderWidth: 2 };
let closure_13 = createStyles.createStyles(obj);
const memoResult = react.memo(ReactCompilerGating.isReactCompilerEnabled() ? ((row) => {
  let end;
  let onPressAvatar;
  let source;
  let start;
  let tmp5;
  let tmp6;
  let tmp = row;
  let tmp2 = onPressAvatar;
  let obj = row(onPressAvatar[13]);
  const cResult = obj.c(57);
  row = row.row;
  const code = row.code;
  onPressAvatar = row.onPressAvatar;
  const onInviteSent = row.onInviteSent;
  ({ start, end, source } = row);
  const tmp4 = closure_13();
  const id = row.item.id;
  if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
    const items = [id];
    class E {
      constructor() {
        return id.isSubmitting();
      }
    }
    cResult[0] = items;
    cResult[1] = E;
    tmp5 = items;
  } else {
    [tmp5, tmp6] = cResult;
  }
  const tmpResult = tmp(tmp2[14]);
  const stateFromStores = tmpResult.useStateFromStores(tmp5, E);
  if (cResult[2] === Symbol.for("react.memo_cache_sentinel")) {
    const items1 = [id];
    class U {
      constructor() {
        return id.getError();
      }
    }
    cResult[2] = items1;
    cResult[3] = U;
  }
  tmp(tmp2[14]);
  if (cResult[4] === code) {
    let tmp13;
    let tmp16;
    if (cResult[5] === id) {
      tmp13 = cResult[6];
    }
    closure_10(tmp13);
    class U {
      constructor() {
        return id.getError();
      }
    }
    if (cResult[7] === Symbol.for("react.memo_cache_sentinel")) {
      const items2 = [source];
      class U {
        constructor() {
          return id.getError();
        }
      }
      cResult[7] = items2;
      tmp16 = items2;
    } else {
      tmp16 = cResult[7];
    }
    if (cResult[8] !== id) {
      class G {
        constructor() {
          return ChannelStore.getChannel(id);
        }
      }
      cResult[8] = id;
      class U {
        constructor() {
          return id.getError();
        }
      }
      cResult[9] = G;
    } else {
      class G {
        constructor() {
          return ChannelStore.getChannel(id);
        }
      }
    }
    const tmpResult4 = tmp(tmp2[14]);
    const stateFromStores1 = tmpResult4.useStateFromStores(tmp16, G);
    code(tmp2[15])(stateFromStores1);
    if (null == code) {
      class G {
        constructor() {
          return ChannelStore.getChannel(id);
        }
      }
    } else {
      class G {
        constructor() {
          return ChannelStore.getChannel(id);
        }
      }
      class O {
        constructor() {
          tmp = code;
          if (null != code) {
            handleSendState = function handleSendState(arg0) {
              if (null != code) {
                closure_2_9(tmp, id, arg0 ? InviteSendStates.SENT : InviteSendStates.ERROR);
                if (arg0) {
                  if (onInviteSent != null) {
                    onInviteSent();
                  }
                }
              }
            };
            tmp2 = setSendState;
            tmp3 = id;
            tmp4 = InviteSendStates;
            tmp5 = setSendState(tmp, id, InviteSendStates.SENDING);
            tmp6 = row;
            type = row.type;
            tmp7 = closure_0;
            tmp8 = closure_2;
            if (closure_0(closure_2[16]).RowTypes.FRIEND !== type) {
              if (tmp7(tmp8[16]).RowTypes.DM !== type) {
                if (tmp7(tmp8[16]).RowTypes.GROUP_DM === type) {
                  if (null != tmp) {
                    tmp15 = closure_1;
                    tmp16 = closure_1(tmp8[17]);
                    obj1 = { inviteKey: null, type: null, channel: null, location: "Invite Action Sheet", inviteAnalyticsMetadata: null };
                    obj1.inviteKey = tmp;
                    enqueue2 = tmp16.enqueue;
                    obj1.type = tmp7(tmp8[17]).InvitePropertiesType.GROUP_DM;
                    tmp17 = closure_4;
                    obj1.channel = closure_4.getChannel(tmp3);
                    obj7 = { suggestionData: null, source: null };
                    tmp18 = closure_7;
                    obj7.suggestionData = closure_7.getSelectedInviteMetadata(tmp6);
                    tmp19 = source;
                    obj7.source = source;
                    obj1.inviteAnalyticsMetadata = obj7;
                    enqueue2Result = enqueue2(obj1, handleSendState);
                  }
                } else if (tmp7(tmp8[16]).RowTypes.CHANNEL === type) {
                  if (null != tmp) {
                    tmp9 = closure_1;
                    tmp10 = closure_1(tmp8[17]);
                    obj = { inviteKey: null, type: null, channel: null, location: "Invite Action Sheet", inviteAnalyticsMetadata: null };
                    obj.inviteKey = tmp;
                    enqueue = tmp10.enqueue;
                    obj.type = tmp7(tmp8[17]).InvitePropertiesType.CHANNEL;
                    tmp11 = closure_4;
                    obj.channel = closure_4.getChannel(tmp3);
                    obj8 = { suggestionData: null, source: null };
                    tmp12 = closure_7;
                    obj8.suggestionData = closure_7.getSelectedInviteMetadata(tmp6);
                    tmp13 = source;
                    obj8.source = source;
                    obj.inviteAnalyticsMetadata = obj8;
                    enqueueResult = enqueue(obj, handleSendState);
                  }
                }
              }
            }
            if (null != tmp) {
              tmp21 = closure_1;
              tmp22 = closure_1(tmp8[17]);
              obj9 = { inviteKey: null, type: null, user: null, location: "Invite Action Sheet", inviteAnalyticsMetadata: null };
              obj9.inviteKey = tmp;
              enqueue3 = tmp22.enqueue;
              obj9.type = tmp7(tmp8[17]).InvitePropertiesType.USER;
              tmp23 = closure_8;
              obj9.user = closure_8.getUser(tmp3);
              obj10 = { suggestionData: null, source: null };
              tmp24 = closure_7;
              obj10.suggestionData = closure_7.getSelectedInviteMetadata(tmp6);
              tmp25 = source;
              obj10.source = source;
              obj9.inviteAnalyticsMetadata = obj10;
              enqueue3Result = enqueue3(obj9, handleSendState);
            }
          }
          return;
        }
      }
      class U {
        constructor() {
          return id.getError();
        }
      }
      cResult[11] = id;
      cResult[12] = onInviteSent;
      cResult[13] = row;
      cResult[14] = source;
      cResult[15] = O;
    }
  }
  const fn = function k(arg0) {
    let tmp2 = null;
    if (null != code) {
      let tmp5;
      if (arg0[tmp] != null) {
        tmp5 = tmp4[id];
      }
      tmp2 = tmp5;
    }
    return tmp2;
  };
  cResult[4] = code;
  cResult[5] = id;
  cResult[6] = fn;
  tmp13 = fn;
}) : ((row) => {
  let end;
  let obj18;
  let source;
  let start;
  let tmp19;
  row = row.row;
  const code = row.code;
  const onPressAvatar = row.onPressAvatar;
  ({ onInviteSent: View, source: ChannelStore } = row);
  ({ start, end } = row);
  const id = row.item.id;
  let tmp2 = row;
  let tmp = closure_13();
  let obj = row(onPressAvatar[14]);
  const items = [id];
  const stateFromStores = obj.useStateFromStores(items, () => id.isSubmitting());
  let obj2 = row(onPressAvatar[14]);
  const items1 = [id];
  const stateFromStores1 = obj2.useStateFromStores(items1, () => id.getError());
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
  let obj3 = row(onPressAvatar[14]);
  const items2 = [ChannelStore];
  const stateFromStores2 = obj3.useStateFromStores(items2, () => ChannelStore.getChannel(id));
  let str = code(onPressAvatar[15])(stateFromStores2);
  if (null == code) {
    return null;
  } else {
    let type = row.type;
    if (tmp2(onPressAvatar[16]).RowTypes.DM !== type) {
      let str2;
      let T;
      let tmp15;
      if (tmp2(onPressAvatar[16]).RowTypes.FRIEND !== type) {
        if (tmp2(onPressAvatar[16]).RowTypes.GROUP_DM === type) {
          let tmp20 = null;
          if (null != stateFromStores2) {
            const Avatar2 = tmp2(tmp3[19]).Avatar;
            const makeSource2 = code(tmp3[23]).makeSource;
            code(onPressAvatar[23]);
            let obj5 = { id: null, icon: null, applicationId: null, size: 32 };
            ({ id: obj12.id, icon: obj12.icon, application_id: obj12.applicationId } = stateFromStores2);
            tmp20 = <Avatar2 source={makeSource2(code(onPressAvatar[23]).getChannelIconURL(obj5))} size={tmp2(tmp3[19]).AvatarSizes.REFRESH_MEDIUM_32} />;
            const tmp8Result6 = code(onPressAvatar[23]);
          }
          if (str == null) {
            str = "";
          }
          str2 = str;
          T = undefined;
          tmp15 = tmp20;
        } else if (tmp2(onPressAvatar[16]).RowTypes.CHANNEL === type) {
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
              const Avatar = tmp2(tmp3[19]).Avatar;
              const makeSource = code(tmp3[23]).makeSource;
              code(onPressAvatar[23]);
              const obj7 = { id: null, icon: null, size: 32 };
              ({ id: obj9.id, icon: obj9.icon } = guild);
              tmp15 = <Avatar source={makeSource(code(onPressAvatar[23]).getGuildIconURL(obj7))} size={tmp2(tmp3[19]).AvatarSizes.REFRESH_MEDIUM_32} />;
              const tmp8Result8 = code(onPressAvatar[23]);
            } else {
              const tmp2Result = tmp2(onPressAvatar[24]);
              const acronym = tmp2Result.getAcronym(guild.name);
              tmp15 = <View style={tmp.acronym}>{null}</View>;
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
        let obj3;
        let obj4;
        let obj6;
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
          React4(code, id, InviteSendStates.SENDING);
          const type = row.type;
          if (InstantInviteUtils.RowTypes.FRIEND !== type) {
            if (InstantInviteUtils.RowTypes.DM !== type) {
              if (InstantInviteUtils.RowTypes.GROUP_DM === type) {
                if (null != code) {
                  const obj2 = { inviteKey: code, type: InviteQueue.InvitePropertiesType.GROUP_DM, channel: ChannelStore.getChannel(id), location: "Invite Action Sheet", inviteAnalyticsMetadata: obj3 };
                  const enqueue2 = InviteQueueDefault.enqueue;
                  InviteQueueDefault;
                  obj3 = { suggestionData: InviteSuggestionsStore.getSelectedInviteMetadata(row), source: ChannelStore };
                  enqueue2(obj2, handleSendState);
                }
              } else if (InstantInviteUtils.RowTypes.CHANNEL === type) {
                if (null != code) {
                  const obj = { inviteKey: code, type: InviteQueue.InvitePropertiesType.CHANNEL, channel: ChannelStore.getChannel(id), location: "Invite Action Sheet", inviteAnalyticsMetadata: obj4 };
                  const enqueue = InviteQueueDefault.enqueue;
                  InviteQueueDefault;
                  obj4 = { suggestionData: InviteSuggestionsStore.getSelectedInviteMetadata(row), source: ChannelStore };
                  enqueue(obj, handleSendState);
                }
              }
            }
          }
          if (null != code) {
            const obj5 = { inviteKey: code, type: InviteQueue.InvitePropertiesType.USER, user: UserStore.getUser(id), location: "Invite Action Sheet", inviteAnalyticsMetadata: obj6 };
            const enqueue3 = InviteQueueDefault.enqueue;
            InviteQueueDefault;
            obj6 = { suggestionData: InviteSuggestionsStore.getSelectedInviteMetadata(row), source: ChannelStore };
            enqueue3(obj5, handleSendState);
          }
        }
      }
      const TableRow = tmp2(tmp3[27]).TableRow;
      return <TableRow start={start} end={end} icon={tmp15} label={str2} trailing={null} onPress={handlePress} disabled={null != stateFromStores1 || stateFromStores || tmp6 === InviteSendStates.SENT} accessibilityActions={tmp19} onAccessibilityAction={T} />;
    }
    const user = UserStore.getUser(id);
    const PressableOpacity = tmp2(tmp3[18]).PressableOpacity;
    let avatarSource;
    const Avatar3 = tmp2(tmp3[19]).Avatar;
    if (user != null) {
      avatarSource = user.getAvatarSource(undefined);
    }
    if (avatarSource == null) {
      avatarSource = null;
    }
    ({ source: avatarSource, size: tmp2(onPressAvatar[19]).AvatarSizes.REFRESH_MEDIUM_32 });
    const tmp24Result = <PressableOpacity importantForAccessibility="no-hide-descendants" accessibilityElementsHidden onPress={function onPress(stopPropagation) {
      stopPropagation.stopPropagation();
      if (onPressAvatar != null) {
        tmp2(id);
      }
    }} style={{ padding: 8, margin: -8 }}>{null}</PressableOpacity>;
    code(onPressAvatar[20]);
    let tmp29;
    const tmp24Result2 = <tmp8Result9 nick={code(onPressAvatar[21]).getGlobalName(user)} user={user} />;
    if (null != onPressAvatar) {
      const intl = tmp2(tmp3[22]).intl;
      const formatToPlainString = intl.formatToPlainString;
      let tag;
      const uCenkh = tmp2(tmp3[22]).t.uCenkh;
      if (user != null) {
        tag = user.tag;
      }
      const obj17 = { name: "viewProfile", label: formatToPlainString(uCenkh, obj18) };
      const items3 = [obj17];
      tmp29 = items3;
      obj18 = { username: tag };
    }
    class T {
      constructor(nativeEvent) {
        const tmp = "viewProfile" === nativeEvent.nativeEvent.actionName && null !== onPressAvatar;
        if (tmp) {
          if (onPressAvatar != null) {
            tmp4(id);
          }
        }
      }
    }
    str2 = tmp24Result2;
    tmp15 = tmp24Result;
    tmp19 = tmp29;
  }
}));
size = size_mod;
const result = size.fileFinishedImporting("modules/instant_invite/native/components/InstantInviteRow.tsx");

export default memoResult;