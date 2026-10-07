// === Module 9348: FormComponents ===

// Module 9348 (FormComponents)
import c from "c" /* 576 */;
import nativeDefault from "native" /* 587 */;
import util from "util" /* 1126 */;
import native from "native" /* 1188 */;
import UserUtils from "UserUtils" /* 4728 */;
import Text_Text from "Text/Text" /* 4892 */;
import NativeViewDefault from "NativeView" /* 5983 */;
import TableRowGroup from "TableRowGroup" /* 6081 */;
import StreamerApplicationSelectors from "StreamerApplicationSelectors" /* 7241 */;
import showUserProfileActionSheetDefault from "showUserProfileActionSheet" /* 7861 */;
import VoiceStateIcons from "VoiceStateIcons" /* 9349 */;
import GuildTagDefault from "GuildTag" /* 9409 */;
import ShieldLockIcon from "ShieldLockIcon" /* 9444 */;
import CallActionCreatorsDefault from "CallActionCreators" /* 9446 */;
import _objectWithoutProperties from "_objectWithoutProperties" /* 109 */;
import noop from "module_19" /* 19 */;
import PresenceStore from "PresenceStore" /* 4936 */;

require = fn;
let closure_3 = ["style"];
const jsxProd = fn(21);
({ jsx: closure_7, jsxs: closure_8 } = jsxProd);
const createStyles = fn(4896);
let obj2 = { container: { marginHorizontal: 16 }, voiceBadgesContainer: { flexDirection: "row" }, iconWrapper: { marginLeft: 8, padding: 6, backgroundColor: nativeDefault.colors.MOBILE_VOICE_PANEL_BADGE_BACKGROUND, borderRadius: nativeDefault.radii.round }, icon: null, notConnectedAvatar: null, memberRow: null, trailingContainer: null };
let size = { width: 16, height: 16, tintColor: nativeDefault.colors.INTERACTIVE_TEXT_DEFAULT };
obj2.icon = size;
obj2.notConnectedAvatar = { opacity: 0.5 };
obj2.memberRow = { flexDirection: "row", alignItems: "center", gap: 4 };
obj2.trailingContainer = { flexDirection: "row", alignItems: "center", gap: 8 };
let closure_9 = createStyles.createStyles(obj2);
let ReactCompilerGating = fn(558);
let closure_10 = ReactCompilerGating.isReactCompilerEnabled();
ReactCompilerGating = fn(558);
let closure_11 = ReactCompilerGating.isReactCompilerEnabled() ? ((arg0) => {
  const cResult = c.c(12);
  ({ muteDeafenIconState, videoIconState } = arg0);
  const tmp4 = closure_9();
  if (cResult[0] === muteDeafenIconState) {
    if (cResult[1] === tmp4.icon) {
      if (cResult[2] === tmp4.iconWrapper) {
        let tmp5 = cResult[3];
      }
      if (cResult[4] === tmp4.icon) {
        if (cResult[5] === tmp4.iconWrapper) {
          if (cResult[6] === videoIconState) {
            let tmp10 = cResult[7];
          }
          if (cResult[8] === tmp4.voiceBadgesContainer) {
            if (cResult[9] === tmp5) {
              if (cResult[10] === tmp10) {
                let tmp15 = cResult[11];
              }
              return tmp15;
            }
          }
          const obj2 = { style: tmp4.voiceBadgesContainer, children: null };
          const items = [tmp5, tmp10];
          obj2.children = items;
          const tmp18 = closure_1_8(NativeViewDefault, obj2);
          cResult[8] = tmp4.voiceBadgesContainer;
          cResult[9] = tmp5;
          cResult[10] = tmp10;
          cResult[11] = tmp18;
          tmp15 = tmp18;
        }
      }
      let tmp11 = null;
      if (null != videoIconState) {
        const obj3 = { style: tmp4.iconWrapper, children: null };
        const obj4 = { state: videoIconState, size: native.IconSizes.SMALL, style: tmp4.icon };
        obj3.children = React5(VoiceStateIcons.VideoIcon, obj4);
        tmp11 = React5(NativeViewDefault, obj3);
      }
      cResult[4] = tmp4.icon;
      cResult[5] = tmp4.iconWrapper;
      cResult[6] = videoIconState;
      cResult[7] = tmp11;
      tmp10 = tmp11;
    }
  }
  let tmp6 = null;
  if (null != muteDeafenIconState) {
    const obj5 = { style: tmp4.iconWrapper, children: null };
    const obj6 = { state: muteDeafenIconState, size: native.IconSizes.SMALL, style: tmp4.icon };
    obj5.children = React5(VoiceStateIcons.MuteDeafenIcon, obj6);
    tmp6 = React5(NativeViewDefault, obj5);
  }
  cResult[0] = muteDeafenIconState;
  cResult[1] = tmp4.icon;
  cResult[2] = tmp4.iconWrapper;
  cResult[3] = tmp6;
  tmp5 = tmp6;
}) : ((arg0) => {
  ({ muteDeafenIconState, videoIconState } = arg0);
  const tmp = closure_9();
  const obj = { style: tmp.voiceBadgesContainer, children: null };
  let tmp6 = null;
  if (null != muteDeafenIconState) {
    const obj2 = { style: tmp.iconWrapper, children: null };
    const obj3 = { state: muteDeafenIconState, size: native.IconSizes.SMALL, style: tmp.icon };
    obj2.children = React5(VoiceStateIcons.MuteDeafenIcon, obj3);
    tmp6 = React5(NativeViewDefault, obj2);
    const tmp3Result = NativeViewDefault;
  }
  const items = [tmp6, ];
  let tmp10 = null;
  if (null != videoIconState) {
    const obj4 = { style: tmp.iconWrapper, children: null };
    const obj5 = { state: videoIconState, size: native.IconSizes.SMALL, style: tmp.icon };
    obj4.children = React5(VoiceStateIcons.VideoIcon, obj5);
    tmp10 = React5(NativeViewDefault, obj4);
    const tmp3Result2 = NativeViewDefault;
  }
  items[1] = tmp10;
  obj.children = items;
  return closure_1_8(NativeViewDefault, obj);
});
ReactCompilerGating = fn(558);
let obj3 = { marginLeft: 8, padding: 6, backgroundColor: nativeDefault.colors.MOBILE_VOICE_PANEL_BADGE_BACKGROUND, borderRadius: nativeDefault.radii.round };
size = fn(2);
const result = size.fileFinishedImporting("modules/voice_panel/native/shared/FormComponents.tsx");

export const VoicePanelFormSection = function VoicePanelFormSection(style) {
  if (closure_10) {
    let tmp14 = dependencyMap;
    const cResult = c.c(11);
    if (cResult[0] !== style) {
      style = style.style;
      const tmp20 = _objectWithoutProperties(style, closure_3);
      cResult[0] = style;
      cResult[1] = tmp20;
      cResult[2] = style;
      let tmp17 = style;
      let tmp16 = tmp20;
    } else {
      tmp16 = cResult[1];
      tmp17 = cResult[2];
    }
    const tmp22 = closure_9();
    if (cResult[3] === tmp17) {
      if (cResult[4] === tmp22.container) {
        let tmp23 = cResult[5];
      }
      if (cResult[6] !== tmp16) {
        const obj2 = {};
        const merged = Object.assign(tmp16);
        const tmp29 = React5(TableRowGroup.TableRowGroup, obj2);
        cResult[6] = tmp16;
        cResult[7] = tmp29;
        let tmp24 = tmp29;
      } else {
        tmp24 = cResult[7];
      }
      if (cResult[8] === tmp23) {
      }
      const obj3 = { style: tmp23, children: tmp24 };
      tmp14 = React5(NativeViewDefault, obj3);
      cResult[8] = tmp23;
      cResult[9] = tmp24;
      cResult[10] = tmp14;
    }
    const items = [tmp22.container, tmp17];
    cResult[3] = tmp17;
    cResult[4] = tmp22.container;
    cResult[5] = items;
    tmp23 = items;
  } else {
    const merged1 = Object.assign(style, Object.assign({ style: 0 }));
    const obj5 = { style: null, children: null };
    const items1 = [closure_9().container, style.style];
    obj5.style = items1;
    const tmp5 = closure_9();
    const obj6 = {};
    const merged2 = Object.assign(merged1);
    obj5.children = React5(TableRowGroup.TableRowGroup, obj6);
    return React5(NativeViewDefault, obj5);
  }
};
export const MemberRowItem = ReactCompilerGating.isReactCompilerEnabled() ? ((user) => {
  const cResult = user(nick[7]).c(48);
  user = user.user;
  const channelId = user.channelId;
  ({ selfStream, nick } = user);
  ({ guildId, notConnected, showSecureFramesUI, showGameActivity } = user);
  let tmp4 = undefined !== selfStream;
  if (tmp4) {
    tmp4 = selfStream;
  }
  closure_3 = tmp5;
  closure_4 = tmp6;
  const tmp7 = displayNameStylesFont();
  const memberRow = tmp7;
  const analyticsLocations = channelId(nick[12])().analyticsLocations;
  let obj = user(nick[7]);
  const muteDeafenIconState = user(nick[13]).useMuteDeafenIconState(user.id, guildId);
  const tmpResult = user(nick[13]);
  const videoIconState = user(nick[13]).useVideoIconState(user.id, guildId);
  const id = user.id;
  if (cResult[0] === channelId) {
    if (cResult[1] === id) {
      let tmp11 = cResult[2];
    }
    const isUserSecureFramesVerified = tmp(nick[14]).useIsUserSecureFramesVerified(tmp11);
    tmp(nick[15]);
    if (cResult[3] === guildId) {
      if (cResult[4] === user.id) {
        let tmp14 = cResult[5];
      }
      const tmp15 = tmp8(nick[16])(tmp14);
      if (cResult[6] !== tmp15) {
        let obj2 = { displayNameStyles: tmp15 };
        cResult[6] = tmp15;
        cResult[7] = obj2;
        let tmp16 = obj2;
      } else {
        tmp16 = cResult[7];
      }
      displayNameStylesFont = tmp(nick[17]).useDisplayNameStylesFont(tmp16);
      if (cResult[8] === analyticsLocations) {
        if (cResult[9] === channelId) {
          const _Symbol = Symbol;
          if (cResult[12] === Symbol.for("react.memo_cache_sentinel")) {
            let items = [analyticsLocations];
            cResult[12] = items;
            let tmp20 = items;
          } else {
            tmp20 = cResult[12];
          }
          if (cResult[13] !== id) {
            class W {
              constructor() {
                obj = closure_0(closure_2[19]);
                return obj.getStreamerActivityByUserId(id, closure_6);
              }
            }
            cResult[13] = id;
            cResult[14] = W;
          } else {
            class W {
              constructor() {
                obj = closure_0(closure_2[19]);
                return obj.getStreamerActivityByUserId(id, closure_6);
              }
            }
          }
          const stateFromStores = tmp(nick[20]).useStateFromStores(tmp20, W);
          const tmp24 = tmp8(nick[21])("voice_member_row");
          const tmpResult10 = tmp(nick[20]);
          if (tmp24) {
            class W {
              constructor() {
                obj = closure_0(closure_2[19]);
                return obj.getStreamerActivityByUserId(id, closure_6);
              }
            }
          }
          if (tmp8Result(id, guildId, tmp24)[0] != null) {
            class W {
              constructor() {
                obj = closure_0(closure_2[19]);
                return obj.getStreamerActivityByUserId(id, closure_6);
              }
            }
          }
          const gameRecord = tmp8(nick[23])(tmp27).gameRecord;
          if (!tmp4) {
            class W {
              constructor() {
                obj = closure_0(closure_2[19]);
                return obj.getStreamerActivityByUserId(id, closure_6);
              }
            }
            const fn2 = function q() {
              let name = nick;
              if (nick == null) {
                name = UserUtils.getName(user);
              }
              const obj2 = { style: memberRow.memberRow, children: null };
              let str = "text-default";
              if (closure_3) {
                str = "text-muted";
              }
              const obj3 = { variant: "text-md/semibold", color: str, style: null, children: null };
              let tmp11 = null != displayNameStylesFont;
              if (tmp11) {
                const obj4 = { fontFamily: tmp10 };
                tmp11 = obj4;
              }
              obj3.style = tmp11;
              obj3.children = name;
              const items = [React5(Text_Text.Text, obj3), React5(GuildTagDefault, { userId: user.id }), ];
              let tmp9Result = null;
              if (closure_4) {
                tmp9Result = null;
                if (isUserSecureFramesVerified) {
                  const obj6 = { size: "xs", style: memberRow.icon };
                  tmp9Result = React5(ShieldLockIcon.ShieldLockIcon, obj6);
                }
              }
              items[2] = tmp9Result;
              obj2.children = items;
              return closure_2_8(NativeViewDefault, obj2);
            };
            cResult[17] = displayNameStylesFont;
            cResult[18] = isUserSecureFramesVerified;
            cResult[19] = nick;
            cResult[20] = tmp5;
            cResult[21] = tmp6;
            cResult[22] = tmp7.icon;
            cResult[23] = tmp7.memberRow;
            cResult[24] = user;
            cResult[25] = fn2;
          } else {
            class W {
              constructor() {
                obj = closure_0(closure_2[19]);
                return obj.getStreamerActivityByUserId(id, closure_6);
              }
            }
            if (null == stateFromStores) {
              class W {
                constructor() {
                  obj = closure_0(closure_2[19]);
                  return obj.getStreamerActivityByUserId(id, closure_6);
                }
              }
              const stringResult = obj10.string(tmp(nick[25]).t.eXan7B);
              cResult[15] = stateFromStores;
              cResult[16] = stringResult;
            }
            const intl = tmp(nick[25]).intl;
            if (null == stateFromStores.details) {
              class W {
                constructor() {
                  obj = closure_0(closure_2[19]);
                  return obj.getStreamerActivityByUserId(id, closure_6);
                }
              }
              let obj3 = { variant: "text-xs/medium", color: "text-muted", lineClamp: 1, children: null };
              let obj4 = { name: stateFromStores.details };
              obj3.children = intl.format(tmp31, obj4);
              tmp30(tmp(nick[24]).Text, obj3);
            } else {
              class W {
                constructor() {
                  obj = closure_0(closure_2[19]);
                  return obj.getStreamerActivityByUserId(id, closure_6);
                }
              }
            }
            tmp30 = id;
          }
          tmp8Result = tmp8(nick[22]);
        }
      }
      const fn = function k() {
        showUserProfileActionSheetDefault({ userId: id, channelId, isVoiceContext: true, sourceAnalyticsLocations: analyticsLocations });
      };
      cResult[8] = analyticsLocations;
      cResult[9] = channelId;
      cResult[10] = id;
      cResult[11] = fn;
      const tmpResult9 = tmp(nick[17]);
    }
    const obj5 = { userId: user.id, guildId };
    cResult[3] = guildId;
    cResult[4] = user.id;
    cResult[5] = obj5;
    tmp14 = obj5;
    const tmpResult7 = tmp(nick[14]);
  }
  let obj6 = { userId: id, channelId };
  cResult[0] = channelId;
  cResult[1] = id;
  cResult[2] = obj6;
  tmp11 = obj6;
  const tmpResult6 = user(nick[13]);
}) : ((user) => {
  user = user.user;
  const channelId = user.channelId;
  let flag = user.selfStream;
  if (flag === undefined) {
    flag = false;
  }
  ({ nick, guildId, notConnected } = user);
  if (notConnected === undefined) {
    notConnected = false;
  }
  ({ showSecureFramesUI, showRing } = user);
  if (showSecureFramesUI === undefined) {
    showSecureFramesUI = false;
  }
  let flag2 = user.showGameActivity;
  if (flag2 === undefined) {
    flag2 = false;
  }
  let stateFromStores;
  const tmp = closure_9();
  const analyticsLocations = channelId(flag[12])().analyticsLocations;
  const muteDeafenIconState = user(flag[13]).useMuteDeafenIconState(user.id, guildId);
  let obj = user(flag[13]);
  const videoIconState = user(flag[13]).useVideoIconState(user.id, guildId);
  const id = user.id;
  let obj2 = user(flag[13]);
  const isUserSecureFramesVerified = user(flag[14]).useIsUserSecureFramesVerified({ userId: id, channelId });
  const obj3 = user(flag[14]);
  const canRing = user(flag[15]).useCanRing(user);
  const obj4 = user(flag[15]);
  const obj5 = { userId: user.id, guildId };
  const tmp9 = channelId(flag[16])({ userId: user.id, guildId });
  const displayNameStylesFont = user(flag[17]).useDisplayNameStylesFont({ displayNameStyles: tmp9 });
  let items = [id, channelId, analyticsLocations];
  const callback = stateFromStores.useCallback(() => {
    showUserProfileActionSheetDefault({ userId: id, channelId, isVoiceContext: true, sourceAnalyticsLocations: analyticsLocations });
  }, items);
  const obj6 = user(flag[17]);
  const obj7 = stateFromStores;
  const items1 = [PresenceStore];
  stateFromStores = user(flag[20]).useStateFromStores(items1, () => StreamerApplicationSelectors.getStreamerActivityByUserId(id, PresenceStore));
  let tmp13 = channelId(flag[21])("voice_member_row");
  const obj8 = user(flag[20]);
  if (tmp13) {
    tmp13 = flag2;
  }
  const first = channelId(flag[22])(id, guildId, tmp13)[0];
  let application_id;
  if (first != null) {
    application_id = first.application_id;
  }
  const gameRecord = tmp2(tmp3[23])(application_id).gameRecord;
  const items2 = [stateFromStores, flag];
  let tmp18 = true === showRing;
  const memo = obj7.useMemo(() => {
    if (!flag) {
      return null;
    } else {
      let obj = stateFromStores;
      if (null == stateFromStores) {
        const intl = util.intl;
        intl.string(util.t.eXan7B);
      }
      const intl2 = util.intl;
      if (null == obj.details) {
        obj = { variant: "text-xs/medium", color: "text-muted", lineClamp: 1, children: null };
        const obj2 = { name: obj.name };
        obj.children = intl2.format(tmp12, obj2);
        React5(Text_Text.Text, obj);
      }
      const details = obj.details;
    }
  }, items2);
  if (tmp18) {
    tmp18 = canRing;
  }
  const obj9 = { onPress: callback, icon: null, subLabel: null, trailing: null, label: null };
  const obj10 = { user, guildId, size: user(flag[11]).AvatarSizes.REFRESH_MEDIUM_32, style: null };
  let notConnectedAvatar;
  if (notConnected) {
    notConnectedAvatar = tmp.notConnectedAvatar;
  }
  obj10.style = notConnectedAvatar;
  obj9.icon = closure_7(user(flag[11]).Avatar, obj10);
  obj9.subLabel = memo;
  if (!tmp18) {
    obj9.trailing = tmp23Result;
    if (nick == null) {
      nick = tmp4(tmp3[26]).getName(user);
      const tmp4Result = tmp4(tmp3[26]);
    }
    const obj11 = { style: tmp.memberRow, children: null };
    let str = "text-default";
    if (notConnected) {
      str = "text-muted";
    }
    const obj12 = { variant: "text-md/semibold", color: str, style: null, children: null };
    let tmp30 = null != displayNameStylesFont;
    if (tmp30) {
      const obj13 = { fontFamily: displayNameStylesFont };
      tmp30 = obj13;
    }
    obj12.style = tmp30;
    obj12.children = nick;
    const items3 = [closure_7(tmp4(tmp3[24]).Text, obj12), , ];
    const obj14 = { userId: user.id };
    items3[1] = closure_7(tmp2(tmp3[27]), obj14);
    let tmp20Result = null;
    if (showSecureFramesUI) {
      tmp20Result = null;
      if (isUserSecureFramesVerified) {
        const obj15 = { size: "xs", style: tmp.icon };
        tmp20Result = closure_7(tmp4(tmp3[28]).ShieldLockIcon, obj15);
      }
    }
    items3[2] = tmp20Result;
    obj11.children = items3;
    obj9.label = closure_8(tmp2(tmp3[9]), obj11);
    return closure_7(tmp4(tmp3[32]).TableRow, obj9);
  }
  const obj16 = { style: tmp.trailingContainer, children: null };
  const tmp14 = channelId(flag[22]);
  const tmp19 = null != muteDeafenIconState || null != videoIconState;
  if (tmp18) {
    const obj17 = {
      size: "sm",
      variant: "secondary",
      onPress() {
          const items = [user.id];
          return CallActionCreatorsDefault.ring(channelId, items, "voice_panel_floating_cta");
        },
      text: null
    };
    let intl = tmp4(tmp3[25]).intl;
    obj17.text = intl.string(tmp4(tmp3[25]).t.bHa9kN);
    let tmp20Result3 = closure_7(tmp4(tmp3[29]).Button, obj17);
  } else {
    tmp20Result3 = null;
    if (tmp19) {
      const obj18 = { muteDeafenIconState, videoIconState };
      tmp20Result3 = closure_7(closure_11, obj18);
    }
  }
  const items4 = [tmp20Result3, ];
  let tmp20Result4 = null;
  if (null != gameRecord) {
    const obj19 = { game: gameRecord, size: 24, fallback: "placeholder" };
    tmp20Result4 = closure_7(tmp2(tmp3[31]), obj19);
  }
  items4[1] = tmp20Result4;
  obj16.children = items4;
  const tmp2Result2 = channelId(flag[9]);
  tmp23Result = closure_8(channelId(flag[9]), obj16);
});