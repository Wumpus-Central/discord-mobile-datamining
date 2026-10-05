// === Module 9334: FormComponents ===

// Module 9334 (FormComponents)
import react2 from "react" /* 576 */;
import nativeDefault from "native" /* 587 */;
import intl3 from "intl" /* 1126 */;
import native from "native" /* 1188 */;
import UserUtils from "UserUtils" /* 4722 */;
import Text_Text from "Text/Text" /* 4886 */;
import NativeViewDefault from "NativeView" /* 5976 */;
import TableRowGroup3 from "TableRowGroup" /* 6074 */;
import StreamerApplicationSelectors from "StreamerApplicationSelectors" /* 7228 */;
import showUserProfileActionSheetDefault from "showUserProfileActionSheet" /* 7850 */;
import VoiceStateIcons from "VoiceStateIcons" /* 9335 */;
import GuildTagDefault from "GuildTag" /* 9395 */;
import ShieldLockIcon from "ShieldLockIcon" /* 9431 */;
import CallActionCreatorsDefault from "CallActionCreators" /* 9433 */;
import _objectWithoutProperties from "_objectWithoutProperties" /* 109 */;
import react from "react" /* 19 */;
import PresenceStore from "PresenceStore" /* 4930 */;
import Fragment from "Fragment" /* 21 */;
import createStyles_mod from "createStyles" /* 4890 */;
import ReactCompilerGating_mod from "ReactCompilerGating" /* 558 */;
import size_mod from "module_2" /* 2 */;

let user;

let metroImportAll;
let metroImportDefault;
let obj2;
let size;
let closure_3 = ["style"];
({ jsx: metroImportDefault, jsxs: metroImportAll } = Fragment);
let createStyles = createStyles_mod;
let obj = { container: { marginHorizontal: 16 }, voiceBadgesContainer: { flexDirection: "row" }, iconWrapper: obj2, icon: size, notConnectedAvatar: { opacity: 0.5 }, memberRow: { flexDirection: "row", alignItems: "center", gap: 4 }, trailingContainer: { flexDirection: "row", alignItems: "center", gap: 8 } };
obj2 = { marginLeft: 8, padding: 6, backgroundColor: nativeDefault.colors.MOBILE_VOICE_PANEL_BADGE_BACKGROUND, borderRadius: nativeDefault.radii.round };
createStyles = createStyles.createStyles;
size = { width: 16, height: 16, tintColor: nativeDefault.colors.INTERACTIVE_TEXT_DEFAULT };
let closure_9 = createStyles(obj);
let ReactCompilerGating = ReactCompilerGating_mod;
let closure_10 = ReactCompilerGating.isReactCompilerEnabled();
ReactCompilerGating = ReactCompilerGating_mod;
let closure_11 = ReactCompilerGating.isReactCompilerEnabled() ? ((arg0) => {
  let MuteDeafenIcon;
  let VideoIcon;
  let items;
  let muteDeafenIconState;
  let obj4;
  let obj6;
  let videoIconState;
  const obj = react2;
  const cResult = obj.c(12);
  ({ muteDeafenIconState, videoIconState } = arg0);
  const tmp4 = closure_9();
  if (cResult[0] === muteDeafenIconState) {
    if (cResult[1] === tmp4.icon) {
      let tmp5;
      if (cResult[2] === tmp4.iconWrapper) {
        tmp5 = cResult[3];
      }
      if (cResult[4] === tmp4.icon) {
        if (cResult[5] === tmp4.iconWrapper) {
          let tmp10;
          if (cResult[6] === videoIconState) {
            tmp10 = cResult[7];
          }
          if (cResult[8] === tmp4.voiceBadgesContainer) {
            if (cResult[9] === tmp5) {
              let tmp15;
              if (cResult[10] === tmp10) {
                tmp15 = cResult[11];
              }
              return tmp15;
            }
          }
          const obj2 = { style: tmp4.voiceBadgesContainer, children: items };
          items = [tmp5, tmp10];
          const tmp18 = metroImportAll(NativeViewDefault, obj2);
          cResult[8] = tmp4.voiceBadgesContainer;
          cResult[9] = tmp5;
          cResult[10] = tmp10;
          cResult[11] = tmp18;
          tmp15 = tmp18;
        }
      }
      let tmp11 = null;
      if (null != videoIconState) {
        const obj3 = { style: tmp4.iconWrapper, children: metroImportDefault(VideoIcon, obj4) };
        obj4 = { state: videoIconState, size: native.IconSizes.SMALL, style: tmp4.icon };
        const tmp14 = NativeViewDefault;
        VideoIcon = VoiceStateIcons.VideoIcon;
        tmp11 = metroImportDefault(tmp14, obj3);
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
    const obj5 = { style: tmp4.iconWrapper, children: metroImportDefault(MuteDeafenIcon, obj6) };
    obj6 = { state: muteDeafenIconState, size: native.IconSizes.SMALL, style: tmp4.icon };
    const tmp9 = NativeViewDefault;
    MuteDeafenIcon = VoiceStateIcons.MuteDeafenIcon;
    tmp6 = metroImportDefault(tmp9, obj5);
  }
  cResult[0] = muteDeafenIconState;
  cResult[1] = tmp4.icon;
  cResult[2] = tmp4.iconWrapper;
  cResult[3] = tmp6;
  tmp5 = tmp6;
}) : ((arg0) => {
  let MuteDeafenIcon;
  let VideoIcon;
  let items;
  let muteDeafenIconState;
  let obj3;
  let obj5;
  let videoIconState;
  ({ muteDeafenIconState, videoIconState } = arg0);
  const tmp = closure_9();
  let tmp6 = null;
  const obj = { style: tmp.voiceBadgesContainer, children: items };
  const tmp5 = NativeViewDefault;
  if (null != muteDeafenIconState) {
    const obj2 = { style: tmp.iconWrapper, children: metroImportDefault(MuteDeafenIcon, obj3) };
    obj3 = { state: muteDeafenIconState, size: native.IconSizes.SMALL, style: tmp.icon };
    const tmp3Result = NativeViewDefault;
    MuteDeafenIcon = VoiceStateIcons.MuteDeafenIcon;
    tmp6 = metroImportDefault(tmp3Result, obj2);
  }
  items = [tmp6, ];
  let tmp10 = null;
  if (null != videoIconState) {
    const obj4 = { style: tmp.iconWrapper, children: metroImportDefault(VideoIcon, obj5) };
    obj5 = { state: videoIconState, size: native.IconSizes.SMALL, style: tmp.icon };
    const tmp3Result2 = NativeViewDefault;
    VideoIcon = VoiceStateIcons.VideoIcon;
    tmp10 = metroImportDefault(tmp3Result2, obj4);
  }
  items[1] = tmp10;
  return metroImportAll(tmp5, obj);
});
ReactCompilerGating = ReactCompilerGating_mod;
let tmp4 = ReactCompilerGating.isReactCompilerEnabled() ? ((user) => {
  let displayNameStylesFont;
  let guildId;
  let nick;
  let notConnected;
  let selfStream;
  let showGameActivity;
  let showSecureFramesUI;
  let obj = user(nick[7]);
  const cResult = obj.c(48);
  user = user.user;
  const channelId = user.channelId;
  ({ selfStream, nick } = user);
  ({ guildId, notConnected, showSecureFramesUI, showGameActivity } = user);
  closure_3 = tmp5;
  let closure_4 = tmp6;
  const tmp4 = undefined !== selfStream && selfStream;
  let tmp7 = displayNameStylesFont();
  const memberRow = tmp7;
  const analyticsLocations = channelId(nick[12])().analyticsLocations;
  const tmpResult = user(nick[13]);
  const muteDeafenIconState = tmpResult.useMuteDeafenIconState(user.id, guildId);
  const tmpResult6 = user(nick[13]);
  const videoIconState = tmpResult6.useVideoIconState(user.id, guildId);
  const id = user.id;
  if (cResult[0] === channelId) {
    let tmp11;
    if (cResult[1] === id) {
      tmp11 = cResult[2];
    }
    const tmpResult7 = user(nick[14]);
    const isUserSecureFramesVerified = tmpResult7.useIsUserSecureFramesVerified(tmp11);
    user(nick[15]);
    if (cResult[3] === guildId) {
      let tmp14;
      let tmp16;
      if (cResult[4] === user.id) {
        tmp14 = cResult[5];
      }
      const tmp15 = channelId(nick[16])(tmp14);
      if (cResult[6] !== tmp15) {
        let obj2 = { displayNameStyles: tmp15 };
        cResult[6] = tmp15;
        cResult[7] = obj2;
        tmp16 = obj2;
      } else {
        tmp16 = cResult[7];
      }
      const tmpResult9 = user(nick[17]);
      displayNameStylesFont = tmpResult9.useDisplayNameStylesFont(tmp16);
      if (cResult[8] === analyticsLocations) {
        if (cResult[9] === channelId) {
          let tmp20;
          const _Symbol = Symbol;
          let str = "react.memo_cache_sentinel";
          if (cResult[12] === Symbol.for("react.memo_cache_sentinel")) {
            let items = [analyticsLocations];
            cResult[12] = items;
            tmp20 = items;
          } else {
            tmp20 = cResult[12];
          }
          if (cResult[13] !== id) {
            class W {
              constructor() {
                const obj = StreamerApplicationSelectors;
                return obj.getStreamerActivityByUserId(id, PresenceStore);
              }
            }
            cResult[13] = id;
            cResult[14] = W;
          } else {
            class W {
              constructor() {
                const obj = StreamerApplicationSelectors;
                return obj.getStreamerActivityByUserId(id, PresenceStore);
              }
            }
          }
          const tmpResult10 = user(nick[20]);
          const stateFromStores = tmpResult10.useStateFromStores(tmp20, W);
          const tmp24 = channelId(nick[21])("voice_member_row");
          const tmp8Result = channelId(nick[22]);
          if (tmp24) {
            class W {
              constructor() {
                const obj = StreamerApplicationSelectors;
                return obj.getStreamerActivityByUserId(id, PresenceStore);
              }
            }
          }
          if (tmp8Result(id, guildId, tmp24)[0] != null) {
            class W {
              constructor() {
                const obj = StreamerApplicationSelectors;
                return obj.getStreamerActivityByUserId(id, PresenceStore);
              }
            }
          }
          const gameRecord = tmp8(nick[23])(tmp27).gameRecord;
          if (tmp4) {
            class W {
              constructor() {
                const obj = StreamerApplicationSelectors;
                return obj.getStreamerActivityByUserId(id, PresenceStore);
              }
            }
          }
          if (cResult[17] === displayNameStylesFont) {
            class W {
              constructor() {
                const obj = StreamerApplicationSelectors;
                return obj.getStreamerActivityByUserId(id, PresenceStore);
              }
            }
          }
          const fn2 = function q() {
            let items;
            let tmp11;
            let name = nick;
            if (nick == null) {
              const obj = UserUtils;
              name = obj.getName(user);
            }
            let str = "text-default";
            const obj2 = { style: memberRow.memberRow, children: items };
            const tmp7 = NativeViewDefault;
            const Text = Text_Text.Text;
            if (closure_3) {
              str = "text-muted";
            }
            const obj3 = { variant: "text-md/semibold", color: str, style: tmp11, children: name };
            tmp11 = null != displayNameStylesFont;
            if (tmp11) {
              tmp11 = { fontFamily: tmp10 };
              const obj4 = { fontFamily: tmp10 };
            }
            items = [metroImportDefault(Text, obj3), , ];
            const obj5 = { userId: user.id };
            items[1] = metroImportDefault(GuildTagDefault, obj5);
            let tmp9Result = null;
            if (closure_4) {
              tmp9Result = null;
              if (isUserSecureFramesVerified) {
                const obj6 = { size: "xs", style: memberRow.icon };
                tmp9Result = metroImportDefault(ShieldLockIcon.ShieldLockIcon, obj6);
              }
            }
            items[2] = tmp9Result;
            return metroImportAll(tmp7, obj2);
          };
          cResult[17] = displayNameStylesFont;
          cResult[18] = isUserSecureFramesVerified;
          cResult[19] = nick;
          cResult[20] = undefined !== notConnected && notConnected;
          cResult[21] = undefined !== showSecureFramesUI && showSecureFramesUI;
          cResult[22] = tmp7.icon;
          cResult[23] = tmp7.memberRow;
          cResult[24] = user;
          cResult[25] = fn2;
        }
      }
      const fn = function k() {
        const obj = { userId: id, channelId, isVoiceContext: true, sourceAnalyticsLocations: analyticsLocations };
        showUserProfileActionSheetDefault(obj);
      };
      cResult[8] = analyticsLocations;
      cResult[9] = channelId;
      cResult[10] = id;
      cResult[11] = fn;
    }
    let obj3 = { userId: user.id, guildId };
    cResult[3] = guildId;
    cResult[4] = user.id;
    cResult[5] = obj3;
    tmp14 = obj3;
  }
  let obj4 = { userId: id, channelId };
  cResult[0] = channelId;
  cResult[1] = id;
  cResult[2] = obj4;
  tmp11 = obj4;
}) : ((user) => {
  let Avatar;
  let guildId;
  let intl;
  let items3;
  let items4;
  let nick;
  let notConnected;
  let notConnectedAvatar;
  let obj10;
  let showRing;
  let showSecureFramesUI;
  let tmp20Result3;
  let tmp23Result;
  let tmp30;
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
  let tmp = closure_9();
  const analyticsLocations = channelId(flag[12])().analyticsLocations;
  let obj = user(flag[13]);
  const muteDeafenIconState = obj.useMuteDeafenIconState(user.id, guildId);
  let obj2 = user(flag[13]);
  const videoIconState = obj2.useVideoIconState(user.id, guildId);
  const id = user.id;
  const obj3 = user(flag[14]);
  const isUserSecureFramesVerified = obj3.useIsUserSecureFramesVerified({ userId: id, channelId });
  const obj4 = user(flag[15]);
  const canRing = obj4.useCanRing(user);
  const obj5 = { userId: user.id, guildId };
  const tmp9 = channelId(flag[16])(obj5);
  const obj6 = user(flag[17]);
  const displayNameStylesFont = obj6.useDisplayNameStylesFont({ displayNameStyles: tmp9 });
  let items = [id, channelId, analyticsLocations];
  const callback = stateFromStores.useCallback(() => {
    const obj = { userId: id, channelId, isVoiceContext: true, sourceAnalyticsLocations: analyticsLocations };
    showUserProfileActionSheetDefault(obj);
  }, items);
  const items1 = [PresenceStore];
  const obj7 = stateFromStores;
  const obj8 = user(flag[20]);
  stateFromStores = obj8.useStateFromStores(items1, () => {
    const obj = StreamerApplicationSelectors;
    return obj.getStreamerActivityByUserId(id, PresenceStore);
  });
  let tmp13 = channelId(flag[21])("voice_member_row");
  const tmp14 = channelId(flag[22]);
  if (tmp13) {
    tmp13 = flag2;
  }
  const first = tmp14(id, guildId, tmp13)[0];
  let application_id;
  if (first != null) {
    application_id = first.application_id;
  }
  const gameRecord = tmp2(tmp3[23])(application_id).gameRecord;
  const items2 = [stateFromStores, flag];
  let tmp18 = true === showRing;
  const memo = obj7.useMemo(() => {
    let obj2;
    let tmp = null;
    if (flag) {
      let stringResult;
      if (null != stateFromStores) {
        const Text = Text_Text.Text;
        const intl2 = intl3.intl;
        const format = intl2.format;
        if (null != stateFromStores.details) {
          let name;
          if ("" !== stateFromStores.details) {
            name = stateFromStores.details;
          }
          const obj = { variant: "text-xs/medium", color: "text-muted", lineClamp: 1, children: format(tmp15, obj2) };
          obj2 = { name };
          stringResult = metroImportDefault(Text, obj);
        }
        name = stateFromStores.name;
      } else {
        const intl = intl3.intl;
        stringResult = intl.string(intl3.t.eXan7B);
      }
      tmp = stringResult;
    }
    return tmp;
  }, items2);
  if (tmp18) {
    tmp18 = canRing;
  }
  const obj9 = { onPress: callback, icon: closure_7(Avatar, obj10), subLabel: memo, trailing: null, label: null };
  const tmp19 = null != muteDeafenIconState || null != videoIconState;
  const TableRow = tmp4(tmp3[32]).TableRow;
  obj10 = { user, guildId, size: user(flag[11]).AvatarSizes.REFRESH_MEDIUM_32, style: notConnectedAvatar };
  Avatar = tmp4(tmp3[11]).Avatar;
  notConnectedAvatar = undefined;
  if (notConnected) {
    notConnectedAvatar = tmp.notConnectedAvatar;
  }
  if (!tmp18) {
    obj9.trailing = tmp23Result;
    if (nick == null) {
      const tmp4Result = user(flag[26]);
      nick = tmp4Result.getName(user);
    }
    let str = "text-default";
    const obj11 = { style: tmp.memberRow, children: items3 };
    const tmp2Result = channelId(flag[9]);
    let Text = tmp4(tmp3[24]).Text;
    if (notConnected) {
      str = "text-muted";
    }
    const obj12 = { variant: "text-md/semibold", color: str, style: tmp30, children: nick };
    tmp30 = null != displayNameStylesFont;
    if (tmp30) {
      tmp30 = { fontFamily: displayNameStylesFont };
      const obj13 = { fontFamily: displayNameStylesFont };
    }
    items3 = [closure_7(Text, obj12), , ];
    const obj14 = { userId: user.id };
    items3[1] = closure_7(channelId(flag[27]), obj14);
    let tmp20Result = null;
    if (showSecureFramesUI) {
      tmp20Result = null;
      if (isUserSecureFramesVerified) {
        const obj15 = { size: "xs", style: tmp.icon };
        tmp20Result = closure_7(tmp4(tmp3[28]).ShieldLockIcon, obj15);
      }
    }
    items3[2] = tmp20Result;
    obj9.label = closure_8(tmp2Result, obj11);
    return closure_7(TableRow, obj9);
  }
  const obj16 = { style: tmp.trailingContainer, children: items4 };
  const tmp2Result2 = channelId(flag[9]);
  if (tmp18) {
    const obj17 = {
      size: "sm",
      variant: "secondary",
      onPress() {
          const items = [user.id];
          const obj = CallActionCreatorsDefault;
          return obj.ring(channelId, items, "voice_panel_floating_cta");
        },
      text: intl.string(user(flag[25]).t.bHa9kN)
    };
    const Button = tmp4(tmp3[29]).Button;
    intl = tmp4(tmp3[25]).intl;
    tmp20Result3 = closure_7(Button, obj17);
  } else {
    tmp20Result3 = null;
    if (tmp19) {
      const obj18 = { muteDeafenIconState, videoIconState };
      tmp20Result3 = closure_7(closure_11, obj18);
    }
  }
  items4 = [tmp20Result3, ];
  let tmp20Result4 = null;
  if (null != gameRecord) {
    const obj19 = { game: gameRecord, size: 24, fallback: "placeholder" };
    tmp20Result4 = closure_7(tmp2(tmp3[31]), obj19);
  }
  items4[1] = tmp20Result4;
  tmp23Result = closure_8(tmp2Result2, obj16);
});
size = size_mod;
const result = size.fileFinishedImporting("modules/voice_panel/native/shared/FormComponents.tsx");

export const VoicePanelFormSection = function VoicePanelFormSection(style) {
  let TableRowGroup;
  let items1;
  let obj6;
  let tmp14;
  if (closure_10) {
    let tmp19;
    let tmp18;
    const obj4 = react2;
    const cResult = obj4.c(11);
    if (cResult[0] !== style) {
      const style2 = style.style;
      const tmp22 = _objectWithoutProperties(style, closure_3);
      cResult[0] = style;
      cResult[1] = tmp22;
      cResult[2] = style2;
      tmp19 = style2;
      tmp18 = tmp22;
    } else {
      tmp18 = cResult[1];
      tmp19 = cResult[2];
    }
    const tmp24 = closure_9();
    if (cResult[3] === tmp19) {
      let tmp25;
      let tmp26;
      if (cResult[4] === tmp24.container) {
        tmp25 = cResult[5];
      }
      if (cResult[6] !== tmp18) {
        const obj2 = {};
        const TableRowGroup2 = TableRowGroup3.TableRowGroup;
        const merged = Object.assign(tmp18);
        const tmp31 = metroImportDefault(TableRowGroup2, obj2);
        cResult[6] = tmp18;
        cResult[7] = tmp31;
        tmp26 = tmp31;
      } else {
        tmp26 = cResult[7];
      }
      if (cResult[8] === tmp25) {
        let tmp32;
        if (cResult[9] === tmp26) {
          tmp32 = cResult[10];
        }
        tmp14 = tmp32;
      }
      const obj3 = { style: tmp25, children: tmp26 };
      const tmp35 = metroImportDefault(NativeViewDefault, obj3);
      cResult[8] = tmp25;
      cResult[9] = tmp26;
      cResult[10] = tmp35;
      tmp32 = tmp35;
    }
    const items = [tmp24.container, tmp19];
    cResult[3] = tmp19;
    cResult[4] = tmp24.container;
    cResult[5] = items;
    tmp25 = items;
  } else {
    style = style.style;
    const merged1 = Object.assign(style, Object.assign({ style: 0 }));
    const obj5 = { style: items1, children: metroImportDefault(TableRowGroup, obj6) };
    items1 = [closure_9().container, style];
    closure_9();
    obj6 = {};
    const tmp10 = NativeViewDefault;
    TableRowGroup = TableRowGroup3.TableRowGroup;
    const merged2 = Object.assign(merged1);
    tmp14 = metroImportDefault(tmp10, obj5);
  }
  return tmp14;
};
export const MemberRowItem = tmp4;