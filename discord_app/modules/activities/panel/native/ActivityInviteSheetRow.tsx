// discord_app/modules/activities/panel/native/ActivityInviteSheetRow.tsx
import nativeDefault from "../../../../../discord_common/js/packages/tokens/native.tsx";
import noop from "../../../../../_runtime/metro/00019__.js";
import ChannelStore from "../../../../stores/ChannelStore.tsx";
import GuildStore from "../../../../stores/GuildStore.tsx";
import UserStore from "../../../../stores/UserStore.tsx";

const require = globalThis.__r;

const require = fn;
const View = fn(17).View;
const InviteSendStates = fn(7423).InviteSendStates;
const jsx = fn(21).jsx;
const createStyles = fn(5092);
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
const ReactCompilerGating = fn(558);
size = fn(2);
const result = size.fileFinishedImporting("modules/activities/panel/native/ActivityInviteSheetRow.tsx");

export default noop.memo(
  ReactCompilerGating.isReactCompilerEnabled()
    ? function ActivityInviteSheetRow(onPressAvatar) {
        const cResult = onInviteSent(row[10]).c(47);
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
          let first = items;
        } else {
          first = cResult[0];
        }
        if (cResult[1] !== id) {
          const fn = function y() {
            return ChannelStore.getChannel(id);
          };
          cResult[1] = id;
          cResult[2] = fn;
          let tmp7 = fn;
        } else {
          tmp7 = cResult[2];
        }
        const obj = onInviteSent(row[10]);
        const stateFromStores = onInviteSent(row[11]).useStateFromStores(first, tmp7);
        let str = onPressAvatar(tmp2[12])(stateFromStores);
        if (cResult[3] === onInviteSent) {
          if (cResult[4] === row) {
            let tmp10 = cResult[5];
          }
          const type = row.type;
          if (onInviteSent(tmp2[13]).RowTypes.DM !== type) {
            if (onInviteSent(tmp2[13]).RowTypes.FRIEND !== type) {
              if (onInviteSent(tmp2[13]).RowTypes.GROUP_DM === type) {
                if (cResult[23] !== stateFromStores) {
                  let tmp34 = null;
                  if (null != stateFromStores) {
                    const obj2 = { source: null, size: null };
                    const tmp9Result = tmp9(tmp2[19]);
                    ({ id: obj12.id, icon: obj12.icon, application_id: obj12.applicationId } = stateFromStores);
                    obj2.source = tmp9Result.makeSource(
                      tmp9(tmp2[19]).getChannelIconURL({ id: null, icon: null, applicationId: null, size: 32 }),
                    );
                    obj2.size = onInviteSent(tmp2[15]).AvatarSizes.REFRESH_MEDIUM_32;
                    tmp34 = jsx(onInviteSent(tmp2[15]).Avatar, { source: null, size: null });
                    const obj3 = { id: null, icon: null, applicationId: null, size: 32 };
                    const tmp9Result6 = tmp9(tmp2[19]);
                  }
                  cResult[23] = stateFromStores;
                  cResult[24] = tmp34;
                  let tmp33 = tmp34;
                } else {
                  tmp33 = cResult[24];
                }
                if (str == null) {
                  str = "";
                }
                let str4 = str;
                let tmp13 = tmp33;
              } else if (onInviteSent(tmp2[13]).RowTypes.CHANNEL === type) {
                if (cResult[25] === stateFromStores) {
                  if (cResult[26] === tmp4) {
                    tmp13 = cResult[28];
                    const _Symbol2 = Symbol;
                    if (cResult[27] !== Symbol.for("react.early_return_sentinel")) {
                      return tmp12;
                    } else {
                      str4 = "";
                      if (null != str) {
                        const _HermesInternal = HermesInternal;
                        str4 = "#" + str;
                      }
                    }
                  }
                }
                const _Symbol = Symbol;
                const forResult = Symbol.for("react.early_return_sentinel");
                let guild_id;
                if (stateFromStores != null) {
                  guild_id = stateFromStores.guild_id;
                }
                icon = undefined;
                if (null != guild_id) {
                  icon = GuildStore.getGuild(stateFromStores.guild_id);
                }
                let tmp18 = null;
                if (null == icon) {
                  cResult[25] = stateFromStores;
                  cResult[26] = tmp4;
                  cResult[27] = tmp18;
                  cResult[28] = tmp19;
                } else if (null == icon.icon) {
                  const acronym = onInviteSent(tmp2[20]).getAcronym(icon.name);
                  if (cResult[29] !== acronym) {
                    const obj4 = { variant: "text-sm/bold", children: acronym };
                    const tmp22 = jsx(onInviteSent(tmp2[21]).Text, { variant: "text-sm/bold", children: acronym });
                    cResult[29] = acronym;
                    cResult[30] = tmp22;
                    let tmp20 = tmp22;
                  } else {
                    tmp20 = cResult[30];
                  }
                  if (cResult[31] === tmp4.acronym) {
                    if (cResult[32] === tmp20) {
                      let tmp23 = cResult[33];
                    }
                    tmp19 = tmp23;
                    tmp18 = forResult;
                  }
                  const obj5 = { style: tmp4.acronym, children: tmp20 };
                  const tmp26 = <id style={tmp4.acronym}>{tmp20}</id>;
                  cResult[31] = tmp4.acronym;
                  cResult[32] = tmp20;
                  cResult[33] = tmp26;
                  tmp23 = tmp26;
                  const tmpResult2 = onInviteSent(tmp2[20]);
                }
                const obj6 = { source: null, size: null };
                const tmp9Result7 = tmp9(tmp2[19]);
                const obj7 = { id: null, icon: null, size: 32 };
                ({ id: obj8.id, icon } = icon);
                obj7.icon = icon;
                obj6.source = tmp9Result7.makeSource(tmp9(tmp2[19]).getGuildIconURL(obj7));
                obj6.size = onInviteSent(tmp2[15]).AvatarSizes.REFRESH_MEDIUM_32;
                tmp19 = jsx(onInviteSent(tmp2[15]).Avatar, { source: null, size: null });
                tmp18 = forResult;
                const tmp9Result8 = tmp9(tmp2[19]);
              } else {
                return null;
              }
              if (cResult[34] === tmp10) {
                if (cResult[35] === sendState) {
                  let tmp65 = cResult[36];
                }
                let tmp69 = null != error || isSubmitting;
                if (!tmp69) {
                  tmp69 = sendState === InviteSendStates.SENT;
                }
                if (cResult[37] === tmp32) {
                  if (cResult[38] === end) {
                    if (cResult[39] === tmp10) {
                      if (cResult[40] === str4) {
                        if (cResult[41] === tmp13) {
                          if (cResult[42] === tmp31) {
                            if (cResult[43] === start) {
                              if (cResult[44] === tmp65) {
                                if (cResult[45] === tmp69) {
                                  let tmp71 = cResult[46];
                                }
                                return tmp71;
                              }
                            }
                          }
                        }
                      }
                    }
                  }
                }
                const obj9 = {
                  start,
                  end,
                  icon: tmp13,
                  label: str4,
                  trailing: tmp65,
                  onPress: tmp10,
                  disabled: tmp69,
                  accessibilityActions: tmp32,
                  onAccessibilityAction: tmp31,
                };
                const tmp73 = jsx(onInviteSent(tmp2[23]).TableRow, {
                  start,
                  end,
                  icon: tmp13,
                  label: str4,
                  trailing: tmp65,
                  onPress: tmp10,
                  disabled: tmp69,
                  accessibilityActions: tmp32,
                  onAccessibilityAction: tmp31,
                });
                cResult[37] = tmp32;
                cResult[38] = end;
                cResult[39] = tmp10;
                cResult[40] = str4;
                cResult[41] = tmp13;
                cResult[42] = tmp31;
                cResult[43] = start;
                cResult[44] = tmp65;
                cResult[45] = tmp69;
                cResult[46] = tmp73;
                tmp71 = tmp73;
              }
              const obj10 = { sendState, onPressSend: tmp10 };
              const tmp67 = jsx(tmp9(tmp2[22]), { sendState, onPressSend: tmp10 });
              cResult[34] = tmp10;
              cResult[35] = sendState;
              cResult[36] = tmp67;
              tmp65 = tmp67;
            }
          }
          if (cResult[6] === id) {
            if (cResult[7] === onPressAvatar) {
              let tmp37 = cResult[8];
              let tmp38 = cResult[9];
              let tmp39 = cResult[10];
            }
            if (cResult[13] === tmp37) {
              if (cResult[14] === tmp38) {
                if (cResult[17] === onPressAvatar) {
                  let tag;
                  if (tmp39 != null) {
                    tag = tmp39.tag;
                  }
                  if (cResult[20] === id) {
                  }
                  class B {
                    constructor(arg0) {
                      tmp = "viewProfile" === onPressAvatar.nativeEvent.actionName;
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
                  cResult[20] = id;
                  cResult[21] = onPressAvatar;
                  cResult[22] = B;
                }
                let tmp56;
                if (null != onPressAvatar) {
                  const intl = onInviteSent(tmp2[18]).intl;
                  let tag1;
                  if (tmp39 != null) {
                    tag1 = tmp39.tag;
                  }
                  const obj11 = { name: "viewProfile", label: null };
                  class B {
                    constructor(arg0) {
                      tmp = "viewProfile" === onPressAvatar.nativeEvent.actionName;
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
                  tmp58[0] = tag1;
                  obj11.label = intl.formatToPlainString(onInviteSent(tmp2[18]).t.uCenkh, tmp58);
                  const items1 = [obj11];
                  tmp56 = items1;
                }
                let tag2;
                if (tmp39 != null) {
                  tag2 = tmp39.tag;
                }
                cResult[18] = tag2;
                cResult[19] = tmp56;
              }
            }
            const obj13 = { nick: tmp38, user: tmp39 };
            cResult[13] = tmp37;
            cResult[14] = tmp38;
            cResult[15] = tmp39;
            cResult[16] = tmp51;
          }
          const user = UserStore.getUser(id);
          if (cResult[12] === Symbol.for("react.memo_cache_sentinel")) {
            const obj14 = { padding: 8, margin: -8 };
            cResult[12] = obj14;
            let tmp42 = obj14;
          } else {
            tmp42 = cResult[12];
          }
          const obj15 = {
            importantForAccessibility: "no-hide-descendants",
            accessibilityElementsHidden: true,
            onPress(stopPropagation) {
              stopPropagation.stopPropagation();
              if (onPressAvatar != null) {
                tmp2(id);
              }
            },
            style: tmp42,
            children: null,
          };
          let avatarSource;
          if (user != null) {
            avatarSource = user.getAvatarSource(undefined);
          }
          if (avatarSource == null) {
            avatarSource = null;
          }
          const obj16 = { source: avatarSource, size: onInviteSent(tmp2[15]).AvatarSizes.REFRESH_MEDIUM_32 };
          obj15.children = jsx(onInviteSent(tmp2[15]).Avatar, {
            source: avatarSource,
            size: onInviteSent(tmp2[15]).AvatarSizes.REFRESH_MEDIUM_32,
          });
          const tmp43Result = jsx(onInviteSent(tmp2[14]).PressableOpacity, {
            importantForAccessibility: "no-hide-descendants",
            accessibilityElementsHidden: true,
            onPress(stopPropagation) {
              stopPropagation.stopPropagation();
              if (onPressAvatar != null) {
                tmp2(id);
              }
            },
            style: tmp42,
            children: null,
          });
          const tmp9Result9 = tmp9(tmp2[16]);
          const globalName = tmp9(tmp2[17]).getGlobalName(user);
          cResult[6] = id;
          cResult[7] = onPressAvatar;
          cResult[8] = tmp9Result9;
          cResult[9] = globalName;
          cResult[10] = user;
          cResult[11] = tmp43Result;
          tmp39 = user;
          tmp38 = globalName;
          tmp37 = tmp9Result9;
          const tmp9Result10 = tmp9(tmp2[17]);
        }
        function handlePress() {
          onInviteSent(row);
        }
        cResult[3] = onInviteSent;
        cResult[4] = row;
        cResult[5] = handlePress;
        tmp10 = handlePress;
        const tmpResult = onInviteSent(row[11]);
      }
    : function ActivityInviteSheetRow(row) {
        ({ onInviteSent: require, onPressAvatar } = row);
        row = row.row;
        const sendState = row.sendState;
        ({ end, error, isSubmitting, start } = row);
        const id = row.item.id;
        let tmp = closure_9();
        const items = [ChannelStore];
        const stateFromStores = require("initialize").useStateFromStores(items, () => ChannelStore.getChannel(id));
        let str = onPressAvatar(row[12])(stateFromStores);
        const type = row.type;
        if (require("InstantInviteUtils").RowTypes.DM !== type) {
          if (require("InstantInviteUtils").RowTypes.FRIEND !== type) {
            if (require("InstantInviteUtils").RowTypes.GROUP_DM === type) {
              let tmp19 = null;
              if (null != stateFromStores) {
                const obj2 = { source: null, size: null };
                const tmp5Result = onPressAvatar(tmp3[19]);
                ({ id: obj12.id, icon: obj12.icon, application_id: obj12.applicationId } = stateFromStores);
                obj2.source = tmp5Result.makeSource(
                  onPressAvatar(tmp3[19]).getChannelIconURL({ id: null, icon: null, applicationId: null, size: 32 }),
                );
                obj2.size = require("native").AvatarSizes.REFRESH_MEDIUM_32;
                tmp19 = jsx(require("native").Avatar, { source: null, size: null });
                const obj3 = { id: null, icon: null, applicationId: null, size: 32 };
                const tmp5Result6 = onPressAvatar(tmp3[19]);
              }
              if (str == null) {
                str = "";
              }
              let str2 = str;
              let P;
              let tmp14 = tmp19;
            } else if (require("InstantInviteUtils").RowTypes.CHANNEL === type) {
              let guild_id;
              if (stateFromStores != null) {
                guild_id = stateFromStores.guild_id;
              }
              guild = undefined;
              if (null != guild_id) {
                guild = GuildStore.getGuild(stateFromStores.guild_id);
              }
              if (null == guild) {
                return null;
              } else {
                if (null != guild.icon) {
                  const obj4 = { source: null, size: null };
                  const tmp5Result7 = onPressAvatar(tmp3[19]);
                  ({ id: obj8.id, icon: obj8.icon } = guild);
                  obj4.source = tmp5Result7.makeSource(
                    onPressAvatar(tmp3[19]).getGuildIconURL({ id: null, icon: null, size: 32 }),
                  );
                  obj4.size = require("native").AvatarSizes.REFRESH_MEDIUM_32;
                  tmp14 = jsx(require("native").Avatar, { source: null, size: null });
                  const obj5 = { id: null, icon: null, size: 32 };
                  const tmp5Result8 = onPressAvatar(tmp3[19]);
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
                P = undefined;
              }
            } else {
              return null;
            }
          }
          function handlePress() {
            require(row);
          }
          const obj9 = {
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
          const obj10 = { sendState, onPressSend: handlePress };
          obj9.trailing = jsx(onPressAvatar(tmp3[22]), { sendState, onPressSend: handlePress });
          obj9.onPress = handlePress;
          let tmp30 = null != error || isSubmitting;
          if (!tmp30) {
            tmp30 = sendState === InviteSendStates.SENT;
          }
          obj9.disabled = tmp30;
          obj9.accessibilityActions = tmp17;
          obj9.onAccessibilityAction = P;
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
          children: null,
        };
        let avatarSource;
        if (user != null) {
          avatarSource = user.getAvatarSource(undefined);
        }
        if (avatarSource == null) {
          avatarSource = null;
        }
        const obj = require("initialize");
        obj11.children = jsx(require("native").Avatar, {
          source: avatarSource,
          size: require("native").AvatarSizes.REFRESH_MEDIUM_32,
        });
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
          children: null,
        });
        const tmp5Result9 = onPressAvatar(row[16]);
        obj14.nick = onPressAvatar(row[17]).getGlobalName(user);
        obj14.user = user;
        let tmp26;
        const tmp5Result10 = onPressAvatar(row[17]);
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
        class P {
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
        str2 = <tmp5Result9 nick={null} user={null} />;
        tmp14 = tmp21Result;
        tmp17 = tmp26;
        const tmp21Result2 = <tmp5Result9 nick={null} user={null} />;
      },
);
