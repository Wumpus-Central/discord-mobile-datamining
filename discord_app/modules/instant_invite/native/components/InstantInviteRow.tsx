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
const InstantInviteSendStateStore = fn(9554);
({ setSendState: closure_9, useInstantInviteSendStates: c10 } = InstantInviteSendStateStore);
const InviteSendStates = fn(7226).InviteSendStates;
const jsx = fn(21).jsx;
const createStyles = fn(4890);
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
const ReactCompilerGating = fn(558);
size = fn(2);
const result = size.fileFinishedImporting("modules/instant_invite/native/components/InstantInviteRow.tsx");

export default noop.memo(
  ReactCompilerGating.isReactCompilerEnabled()
    ? (row) => {
        const cResult = row(onPressAvatar[13]).c(57);
        row = row.row;
        const code = row.code;
        onPressAvatar = row.onPressAvatar;
        const onInviteSent = row.onInviteSent;
        ({ start, end, source } = row);
        closure_13();
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
        let obj = row(onPressAvatar[13]);
        const stateFromStores = row(onPressAvatar[14]).useStateFromStores(tmp5, E);
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
        row(onPressAvatar[14]);
        if (cResult[4] === code) {
          if (cResult[5] === id) {
            let tmp13 = cResult[6];
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
            let tmp16 = items2;
          } else {
            tmp16 = cResult[7];
          }
          if (cResult[8] !== id) {
            class G {
              constructor() {
                return closure_4.getChannel(id);
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
                return closure_4.getChannel(id);
              }
            }
          }
          const stateFromStores1 = tmp(tmp2[14]).useStateFromStores(tmp16, G);
          code(tmp2[15])(stateFromStores1);
          if (null == code) {
            class G {
              constructor() {
                return closure_4.getChannel(id);
              }
            }
          } else {
            class G {
              constructor() {
                return closure_4.getChannel(id);
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
                          tmp14 = closure_1;
                          obj4 = closure_1(tmp8[17]);
                          obj1 = {
                            inviteKey: null,
                            type: null,
                            channel: null,
                            location: "Invite Action Sheet",
                            inviteAnalyticsMetadata: null,
                          };
                          obj1.inviteKey = tmp;
                          obj1.type = tmp7(tmp8[17]).InvitePropertiesType.GROUP_DM;
                          tmp15 = closure_4;
                          obj1.channel = closure_4.getChannel(tmp3);
                          obj10 = { suggestionData: null, source: null };
                          tmp16 = closure_7;
                          obj10.suggestionData = closure_7.getSelectedInviteMetadata(tmp6);
                          tmp17 = source;
                          obj10.source = source;
                          obj1.inviteAnalyticsMetadata = obj10;
                          enqueueResult = obj4.enqueue(obj1, handleSendState);
                        }
                      } else if (tmp7(tmp8[16]).RowTypes.CHANNEL === type) {
                        if (null != tmp) {
                          tmp9 = closure_1;
                          obj = closure_1(tmp8[17]);
                          obj11 = {
                            inviteKey: null,
                            type: null,
                            channel: null,
                            location: "Invite Action Sheet",
                            inviteAnalyticsMetadata: null,
                          };
                          obj11.inviteKey = tmp;
                          obj11.type = tmp7(tmp8[17]).InvitePropertiesType.CHANNEL;
                          tmp10 = closure_4;
                          obj11.channel = closure_4.getChannel(tmp3);
                          obj12 = { suggestionData: null, source: null };
                          tmp11 = closure_7;
                          obj12.suggestionData = closure_7.getSelectedInviteMetadata(tmp6);
                          tmp12 = source;
                          obj12.source = source;
                          obj11.inviteAnalyticsMetadata = obj12;
                          enqueueResult1 = obj.enqueue(obj11, handleSendState);
                        }
                      }
                    }
                  }
                  if (null != tmp) {
                    tmp19 = closure_1;
                    obj7 = closure_1(tmp8[17]);
                    obj13 = {
                      inviteKey: null,
                      type: null,
                      user: null,
                      location: "Invite Action Sheet",
                      inviteAnalyticsMetadata: null,
                    };
                    obj13.inviteKey = tmp;
                    obj13.type = tmp7(tmp8[17]).InvitePropertiesType.USER;
                    tmp20 = closure_8;
                    obj13.user = closure_8.getUser(tmp3);
                    obj14 = { suggestionData: null, source: null };
                    tmp21 = closure_7;
                    obj14.suggestionData = closure_7.getSelectedInviteMetadata(tmp6);
                    tmp22 = source;
                    obj14.source = source;
                    obj13.inviteAnalyticsMetadata = obj14;
                    enqueueResult2 = obj7.enqueue(obj13, handleSendState);
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
          const tmpResult4 = tmp(tmp2[14]);
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
        const tmpResult = row(onPressAvatar[14]);
      }
    : (row) => {
        row = row.row;
        const code = row.code;
        const onPressAvatar = row.onPressAvatar;
        ({ onInviteSent: View, source: ChannelStore } = row);
        ({ start, end } = row);
        const id = row.item.id;
        let tmp = closure_13();
        const items = [id];
        const stateFromStores = row(onPressAvatar[14]).useStateFromStores(items, () => id.isSubmitting());
        let obj = row(onPressAvatar[14]);
        const items1 = [id];
        const stateFromStores1 = row(onPressAvatar[14]).useStateFromStores(items1, () => id.getError());
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
        let obj2 = row(onPressAvatar[14]);
        const items2 = [ChannelStore];
        const stateFromStores2 = row(onPressAvatar[14]).useStateFromStores(items2, () => ChannelStore.getChannel(id));
        let str = code(onPressAvatar[15])(stateFromStores2);
        if (null == code) {
          return null;
        } else {
          let type = row.type;
          if (tmp2(tmp3[16]).RowTypes.DM !== type) {
            if (tmp2(tmp3[16]).RowTypes.FRIEND !== type) {
              if (tmp2(tmp3[16]).RowTypes.GROUP_DM === type) {
                let tmp19 = null;
                if (null != stateFromStores2) {
                  let obj4 = { source: null, size: null };
                  const tmp8Result = tmp8(tmp3[23]);
                  ({ id: obj14.id, icon: obj14.icon, application_id: obj14.applicationId } = stateFromStores2);
                  obj4.source = tmp8Result.makeSource(
                    tmp8(tmp3[23]).getChannelIconURL({ id: null, icon: null, applicationId: null, size: 32 }),
                  );
                  obj4.size = tmp2(tmp3[19]).AvatarSizes.REFRESH_MEDIUM_32;
                  tmp19 = jsx(tmp2(tmp3[19]).Avatar, { source: null, size: null });
                  let obj5 = { id: null, icon: null, applicationId: null, size: 32 };
                  const tmp8Result6 = tmp8(tmp3[23]);
                }
                if (str == null) {
                  str = "";
                }
                let str2 = str;
                let T;
                let tmp15 = tmp19;
              } else if (tmp2(tmp3[16]).RowTypes.CHANNEL === type) {
                let guild_id;
                if (stateFromStores2 != null) {
                  guild_id = stateFromStores2.guild_id;
                }
                guild = undefined;
                if (null != guild_id) {
                  guild = GuildStore.getGuild(stateFromStores2.guild_id);
                }
                if (null == guild) {
                  return null;
                } else {
                  if (null != guild.icon) {
                    let obj6 = { source: null, size: null };
                    const tmp8Result7 = tmp8(tmp3[23]);
                    ({ id: obj10.id, icon: obj10.icon } = guild);
                    obj6.source = tmp8Result7.makeSource(
                      tmp8(tmp3[23]).getGuildIconURL({ id: null, icon: null, size: 32 }),
                    );
                    obj6.size = tmp2(tmp3[19]).AvatarSizes.REFRESH_MEDIUM_32;
                    tmp15 = jsx(tmp2(tmp3[19]).Avatar, { source: null, size: null });
                    let obj7 = { id: null, icon: null, size: 32 };
                    const tmp8Result8 = tmp8(tmp3[23]);
                  } else {
                    let obj8 = { style: tmp.acronym, children: null };
                    const acronym = tmp2(tmp3[24]).getAcronym(guild.name);
                    let obj9 = { variant: "text-sm/bold", children: acronym };
                    obj8.children = jsx(tmp2(tmp3[25]).Text, { variant: "text-sm/bold", children: acronym });
                    tmp15 = <View style={tmp.acronym}>{null}</View>;
                    const tmp2Result = tmp2(tmp3[24]);
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
                options(code, id, InviteSendStates.SENDING);
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
            obj11.trailing = jsx(tmp8(tmp3[26]), { sendState: tmp6, onPressSend: handlePress });
            obj11.onPress = handlePress;
            let tmp30 = null != stateFromStores1 || stateFromStores;
            if (!tmp30) {
              tmp30 = tmp6 === InviteSendStates.SENT;
            }
            obj11.disabled = tmp30;
            obj11.accessibilityActions = tmp18;
            obj11.onAccessibilityAction = T;
            return jsx(tmp2(tmp3[27]).TableRow, {
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
          const obj15 = { source: avatarSource, size: tmp2(tmp3[19]).AvatarSizes.REFRESH_MEDIUM_32 };
          obj13.children = jsx(tmp2(tmp3[19]).Avatar, {
            source: avatarSource,
            size: tmp2(tmp3[19]).AvatarSizes.REFRESH_MEDIUM_32,
          });
          const obj16 = { nick: null, user: null };
          const tmp22Result = jsx(tmp2(tmp3[18]).PressableOpacity, {
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
          const tmp8Result9 = tmp8(tmp3[20]);
          obj16.nick = tmp8(tmp3[21]).getGlobalName(user);
          obj16.user = user;
          let tmp27;
          const tmp8Result10 = tmp8(tmp3[21]);
          if (null != onPressAvatar) {
            const intl = tmp2(tmp3[22]).intl;
            let tag;
            if (user != null) {
              tag = user.tag;
            }
            const obj17 = { name: "viewProfile", label: null };
            const obj18 = { username: tag };
            obj17.label = intl.formatToPlainString(tmp2(tmp3[22]).t.uCenkh, obj18);
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
        let obj3 = row(onPressAvatar[14]);
      },
);
