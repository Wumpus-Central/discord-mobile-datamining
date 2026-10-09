// === Module 16464: VoiceUserItem ===

// Module 16464 (VoiceUserItem)
import nativeDefault from "native" /* 587 */;
import native from "native" /* 1200 */;
import AnalyticsUtilsDefault from "AnalyticsUtils" /* 1265 */;
import AvatarUtilsDefault from "AvatarUtils" /* 1415 */;
import MicrophoneSlashIcon from "MicrophoneSlashIcon" /* 5021 */;
import _modDef8147 from "module_8147" /* 8147 */;
import HeadphonesDenyIcon from "HeadphonesDenyIcon" /* 8782 */;
import HeadphonesSlashIcon from "HeadphonesSlashIcon" /* 8784 */;
import MicrophoneDenyIcon from "MicrophoneDenyIcon" /* 8786 */;
import useScaledTextLineHeight from "useScaledTextLineHeight" /* 10480 */;
import VideoIcon from "VideoIcon" /* 10735 */;
import GameActivityIconDefault from "GameActivityIcon" /* 12973 */;
import getConsoleIcon from "getConsoleIcon" /* 12975 */;
import VoiceUserNameItemDefault from "VoiceUserNameItem" /* 16465 */;
import noop from "module_19" /* 19 */;

const require = globalThis.__r;
const getConsoleIconDefault = getConsoleIcon;

require = fn;
const View = fn(17).View;
const AnalyticEvents = fn(1085).AnalyticEvents;
const jsxProd = fn(21);
({ jsx: metroRequire, jsxs: closure_7 } = jsxProd);
let c8 = "text-sm/medium";
let c9 = "redesign-channel-name-muted-text";
const XSMALL_20 = fn(1200).AvatarSizes.XSMALL_20;
const createStyles = fn(5091);
let obj = { voiceState: { flex: 1, flexDirection: "row", alignItems: "center", paddingVertical: 5 }, disabled: { opacity: 0.5 }, voiceStateCollapsed: null, voiceStateIcon: null, legacyVoiceStateIcon: null, gameIcon: null };
let size = { marginTop: 4, marginRight: 8, width: 32, height: 32, borderRadius: nativeDefault.radii.lg, borderWidth: 4, borderColor: nativeDefault.colors.BACKGROUND_BASE_LOW, alignItems: "center", overflow: "hidden" };
obj.voiceStateCollapsed = size;
const ChannelListLayout = fn(11714);
let merged = Object.assign(ChannelListLayout.makeSizeStyle(14));
obj.voiceStateIcon = { marginLeft: 6 };
obj.legacyVoiceStateIcon = { tintColor: nativeDefault.colors.REDESIGN_CHANNEL_NAME_MUTED_TEXT, marginLeft: 6 };
obj.gameIcon = { marginLeft: 6 };
let closure_11 = createStyles.createStyles(obj);
const ReactCompilerGating = fn(558);
let obj3 = { marginLeft: 6 };
let obj4 = { tintColor: nativeDefault.colors.REDESIGN_CHANNEL_NAME_MUTED_TEXT, marginLeft: 6 };
size = fn(2);
const result = size.fileFinishedImporting("modules/guild_sidebar/native/VoiceUserItem.tsx");

export default noop.memo(ReactCompilerGating.isReactCompilerEnabled() ? (function VoiceUserItem(member) {
  _require = member;
  const cResult = require("c").c(80);
  member = member.member;
  user = member.user;
  const guildId = member.guildId;
  const channelId = member.channelId;
  const stream = member.stream;
  const serverMute = member.serverMute;
  const serverDeaf = member.serverDeaf;
  const mute = member.mute;
  const deaf = member.deaf;
  const localMute = member.localMute;
  const video = member.video;
  let disabled = member.disabled;
  const platform = member.platform;
  const isInEmbeddedActivity = member.isInEmbeddedActivity;
  const voicePlatform = member.voicePlatform;
  let tmp3 = video();
  closure_16 = tmp3;
  let obj = require("c");
  let tmp = user;
  let tmp4 = member;
  const first = member(user[12])(user.id, guildId, member(user[11])("channel_list"))[0];
  let application_id;
  if (first != null) {
    application_id = first.application_id;
  }
  const gameRecord = tmp4(tmp[13])(application_id).gameRecord;
  if (cResult[0] === channelId) {
    if (cResult[1] === application_id) {
      if (cResult[2] === guildId) {
        let tmp8 = cResult[3];
      }
      const onShown = tmp8;
      if (cResult[4] === guildId) {
        if (cResult[5] === member) {
          if (cResult[6] === user) {
            let tmp9 = cResult[7];
          }
          const source = tmp9;
          if (cResult[8] === tmp9) {
            if (cResult[9] === tmp3.voiceStateCollapsed) {
              let tmp10 = cResult[10];
            }
            if (cResult[11] !== tmp9) {
              function renderAvatar() {
                return timestampProducer(native.Avatar, { source, size: XSMALL_20 });
              }
              cResult[11] = tmp9;
              cResult[12] = renderAvatar;
              let tmp11 = renderAvatar;
            } else {
              tmp11 = cResult[12];
            }
            if (cResult[13] !== member) {
              function renderName() {
                const merged = Object.assign(closure_0);
                return timestampProducer(VoiceUserNameItemDefault, { variant, color });
              }
              cResult[13] = member;
              cResult[14] = renderName;
              let tmp12 = renderName;
            } else {
              tmp12 = cResult[14];
            }
            if (cResult[15] === disabled) {
              if (cResult[16] === localMute) {
                if (cResult[17] === mute) {
                  if (cResult[18] === serverMute) {
                    if (cResult[19] === tmp3.voiceStateIcon) {
                      let tmp13 = cResult[20];
                    }
                    if (cResult[21] === deaf) {
                      if (cResult[22] === disabled) {
                        if (cResult[23] === serverDeaf) {
                          if (cResult[24] === tmp3.voiceStateIcon) {
                            let tmp14 = cResult[25];
                          }
                          if (cResult[26] === stream) {
                            if (cResult[27] === tmp3.legacyVoiceStateIcon) {
                              let tmp15 = cResult[28];
                            }
                            if (cResult[29] === disabled) {
                              if (cResult[30] === tmp3.voiceStateIcon) {
                                if (cResult[31] === video) {
                                  let tmp16 = cResult[32];
                                }
                                if (cResult[33] === platform) {
                                  if (cResult[34] === tmp3.legacyVoiceStateIcon) {
                                    if (cResult[35] === voicePlatform) {
                                      let tmp17 = cResult[36];
                                    }
                                    if (cResult[37] === isInEmbeddedActivity) {
                                      if (cResult[38] === tmp3.legacyVoiceStateIcon) {
                                        let tmp18 = cResult[39];
                                      }
                                      if (cResult[40] === disabled) {
                                        if (cResult[41] === gameRecord) {
                                          if (cResult[42] === isInEmbeddedActivity) {
                                            if (cResult[43] === tmp3.gameIcon) {
                                              if (cResult[44] === tmp8) {
                                                let tmp19 = cResult[45];
                                              }
                                              if (member.collapsed) {
                                                if (cResult[46] !== tmp10) {
                                                  const tmp10Result = tmp10();
                                                  cResult[46] = tmp10;
                                                  cResult[47] = tmp10Result;
                                                  let tmp43 = tmp10Result;
                                                } else {
                                                  tmp43 = cResult[47];
                                                }
                                                return tmp43;
                                              } else {
                                                if (disabled) {
                                                  disabled = tmp3.disabled;
                                                }
                                                if (cResult[48] === tmp3.voiceState) {
                                                  if (cResult[49] === disabled) {
                                                    let tmp20 = cResult[50];
                                                  }
                                                  if (cResult[51] !== tmp11) {
                                                    const tmp11Result = tmp11();
                                                    cResult[51] = tmp11;
                                                    cResult[52] = tmp11Result;
                                                    let tmp21 = tmp11Result;
                                                  } else {
                                                    tmp21 = cResult[52];
                                                  }
                                                  if (cResult[53] !== tmp12) {
                                                    const tmp12Result = tmp12();
                                                    cResult[53] = tmp12;
                                                    cResult[54] = tmp12Result;
                                                    let tmp23 = tmp12Result;
                                                  } else {
                                                    tmp23 = cResult[54];
                                                  }
                                                  if (cResult[55] !== tmp13) {
                                                    const tmp13Result = tmp13();
                                                    cResult[55] = tmp13;
                                                    cResult[56] = tmp13Result;
                                                    let tmp25 = tmp13Result;
                                                  } else {
                                                    tmp25 = cResult[56];
                                                  }
                                                  if (cResult[57] !== tmp14) {
                                                    const tmp14Result = tmp14();
                                                    cResult[57] = tmp14;
                                                    cResult[58] = tmp14Result;
                                                    let tmp27 = tmp14Result;
                                                  } else {
                                                    tmp27 = cResult[58];
                                                  }
                                                  if (cResult[59] !== tmp16) {
                                                    const tmp16Result = tmp16();
                                                    cResult[59] = tmp16;
                                                    cResult[60] = tmp16Result;
                                                    let tmp29 = tmp16Result;
                                                  } else {
                                                    tmp29 = cResult[60];
                                                  }
                                                  if (cResult[61] !== tmp18) {
                                                    const tmp18Result = tmp18();
                                                    cResult[61] = tmp18;
                                                    cResult[62] = tmp18Result;
                                                    let tmp31 = tmp18Result;
                                                  } else {
                                                    tmp31 = cResult[62];
                                                  }
                                                  if (cResult[63] !== tmp17) {
                                                    const tmp17Result = tmp17();
                                                    cResult[63] = tmp17;
                                                    cResult[64] = tmp17Result;
                                                    let tmp33 = tmp17Result;
                                                  } else {
                                                    tmp33 = cResult[64];
                                                  }
                                                  if (cResult[65] !== tmp15) {
                                                    const tmp15Result = tmp15();
                                                    cResult[65] = tmp15;
                                                    cResult[66] = tmp15Result;
                                                    let tmp35 = tmp15Result;
                                                  } else {
                                                    tmp35 = cResult[66];
                                                  }
                                                  if (cResult[67] !== tmp19) {
                                                    const tmp19Result = tmp19();
                                                    cResult[67] = tmp19;
                                                    cResult[68] = tmp19Result;
                                                    let tmp37 = tmp19Result;
                                                  } else {
                                                    tmp37 = cResult[68];
                                                  }
                                                  if (cResult[69] === tmp20) {
                                                    if (cResult[70] === tmp21) {
                                                      if (cResult[71] === tmp23) {
                                                        if (cResult[72] === tmp25) {
                                                          if (cResult[73] === tmp27) {
                                                            if (cResult[74] === tmp29) {
                                                              if (cResult[75] === tmp31) {
                                                                if (cResult[76] === tmp33) {
                                                                  if (cResult[77] === tmp35) {
                                                                    if (cResult[78] === tmp37) {
                                                                      let tmp39 = cResult[79];
                                                                    }
                                                                    return tmp39;
                                                                  }
                                                                }
                                                              }
                                                            }
                                                          }
                                                        }
                                                      }
                                                    }
                                                  }
                                                  let obj2 = { style: tmp20, children: null };
                                                  const items = [tmp21, tmp23, tmp25, tmp27, tmp29, tmp31, tmp33, tmp35, tmp37];
                                                  obj2.children = items;
                                                  const tmp42 = serverDeaf(channelId, obj2);
                                                  cResult[69] = tmp20;
                                                  cResult[70] = tmp21;
                                                  cResult[71] = tmp23;
                                                  cResult[72] = tmp25;
                                                  cResult[73] = tmp27;
                                                  cResult[74] = tmp29;
                                                  cResult[75] = tmp31;
                                                  cResult[76] = tmp33;
                                                  cResult[77] = tmp35;
                                                  cResult[78] = tmp37;
                                                  cResult[79] = tmp42;
                                                  tmp39 = tmp42;
                                                }
                                                const items1 = [tmp3.voiceState, disabled];
                                                cResult[48] = tmp3.voiceState;
                                                cResult[49] = disabled;
                                                cResult[50] = items1;
                                                tmp20 = items1;
                                              }
                                            }
                                          }
                                        }
                                      }
                                      function renderGameIcon() {
                                        let tmp = null;
                                        if (!disabled) {
                                          tmp = null;
                                          if (!isInEmbeddedActivity) {
                                            tmp = null;
                                            if (null != gameRecord) {
                                              const obj = { game: tmp3, size: 16, fallback: "none", style: closure_16.gameIcon, onShown };
                                              tmp = timestampProducer(GameActivityIconDefault, obj);
                                            }
                                          }
                                        }
                                        return tmp;
                                      }
                                      cResult[40] = disabled;
                                      cResult[41] = gameRecord;
                                      cResult[42] = isInEmbeddedActivity;
                                      cResult[43] = tmp3.gameIcon;
                                      cResult[44] = tmp8;
                                      cResult[45] = renderGameIcon;
                                      tmp19 = renderGameIcon;
                                    }
                                    function renderEmbeddedActivityIcon() {
                                      let tmp = null;
                                      if (isInEmbeddedActivity) {
                                        const obj = { source: _modDef8147, size: native.Icon.Sizes.REFRESH_SMALL_16, style: closure_16.legacyVoiceStateIcon };
                                        tmp = timestampProducer(native.Icon, obj);
                                      }
                                      return tmp;
                                    }
                                    cResult[37] = isInEmbeddedActivity;
                                    cResult[38] = tmp3.legacyVoiceStateIcon;
                                    cResult[39] = renderEmbeddedActivityIcon;
                                    tmp18 = renderEmbeddedActivityIcon;
                                  }
                                }
                                function renderPlatform() {
                                  let str = platform;
                                  if (platform == null) {
                                    str = "";
                                  }
                                  let consoleIconForVoicePlatform = getConsoleIconDefault(str);
                                  if (consoleIconForVoicePlatform == null) {
                                    consoleIconForVoicePlatform = getConsoleIcon.getConsoleIconForVoicePlatform(voicePlatform);
                                  }
                                  let tmp6 = null;
                                  if (null != consoleIconForVoicePlatform) {
                                    const obj2 = { source: consoleIconForVoicePlatform, size: native.Icon.Sizes.REFRESH_SMALL_16, style: closure_16.legacyVoiceStateIcon };
                                    tmp6 = timestampProducer(native.Icon, obj2);
                                  }
                                  return tmp6;
                                }
                                cResult[33] = platform;
                                cResult[34] = tmp3.legacyVoiceStateIcon;
                                cResult[35] = voicePlatform;
                                cResult[36] = renderPlatform;
                                tmp17 = renderPlatform;
                              }
                            }
                            function renderVideoIcon() {
                              let tmp = null;
                              if (video) {
                                tmp = null;
                                if (!disabled) {
                                  const obj = { size: "custom", color, style: closure_16.voiceStateIcon };
                                  tmp = timestampProducer(VideoIcon.VideoIcon, obj);
                                }
                              }
                              return tmp;
                            }
                            cResult[29] = disabled;
                            cResult[30] = tmp3.voiceStateIcon;
                            cResult[31] = video;
                            cResult[32] = renderVideoIcon;
                            tmp16 = renderVideoIcon;
                          }
                          function renderStreamIndicator() {
                            let tmp = null;
                            if (stream) {
                              const obj = { style: closure_16.legacyVoiceStateIcon };
                              tmp = timestampProducer(native.LiveTag, obj);
                            }
                            return tmp;
                          }
                          cResult[26] = stream;
                          cResult[27] = tmp3.legacyVoiceStateIcon;
                          cResult[28] = renderStreamIndicator;
                          tmp15 = renderStreamIndicator;
                        }
                      }
                    }
                    function renderDeafIcon() {
                      if (disabled) {
                        return null;
                      } else if (serverDeaf) {
                        const obj2 = { style: closure_16.voiceStateIcon, color: "text-feedback-critical", size: "custom" };
                        let tmp3 = timestampProducer(HeadphonesDenyIcon.HeadphonesDenyIcon, obj2);
                      } else if (deaf) {
                        const obj = { style: closure_16.voiceStateIcon, size: "custom", color };
                        tmp3 = timestampProducer(HeadphonesSlashIcon.HeadphonesSlashIcon, obj);
                      }
                    }
                    cResult[21] = deaf;
                    cResult[22] = disabled;
                    cResult[23] = serverDeaf;
                    cResult[24] = tmp3.voiceStateIcon;
                    cResult[25] = renderDeafIcon;
                    tmp14 = renderDeafIcon;
                  }
                }
              }
            }
            function renderMuteIcon() {
              if (disabled) {
                return null;
              } else if (serverMute) {
                const obj2 = { style: closure_16.voiceStateIcon, color: "text-feedback-critical", size: "custom" };
                let tmp4 = timestampProducer(MicrophoneDenyIcon.MicrophoneDenyIcon, obj2);
              } else if (localMute) {
                const obj3 = { style: closure_16.voiceStateIcon, size: "custom", color };
                tmp4 = timestampProducer(MicrophoneDenyIcon.MicrophoneDenyIcon, obj3);
              } else if (mute) {
                const obj = { style: closure_16.voiceStateIcon, size: "custom", color };
                tmp4 = timestampProducer(MicrophoneSlashIcon.MicrophoneSlashIcon, obj);
              }
            }
            cResult[15] = disabled;
            cResult[16] = localMute;
            cResult[17] = mute;
            cResult[18] = serverMute;
            cResult[19] = tmp3.voiceStateIcon;
            cResult[20] = renderMuteIcon;
            tmp13 = renderMuteIcon;
          }
          function renderCollapsed() {
            const obj = { style: closure_16.voiceStateCollapsed, children: timestampProducer(native.Avatar, { source, size: XSMALL_20 }) };
            return timestampProducer(View, obj);
          }
          cResult[8] = tmp9;
          cResult[9] = tmp3.voiceStateCollapsed;
          cResult[10] = renderCollapsed;
          tmp10 = renderCollapsed;
        }
      }
      function getSource() {
        if (null != member) {
          if (null != member.avatar) {
            let guildMemberAvatarSource = AvatarUtilsDefault.getGuildMemberAvatarSource(member, user);
          }
          return guildMemberAvatarSource;
        }
        guildMemberAvatarSource = user.getAvatarSource(guildId);
      }
      cResult[4] = guildId;
      cResult[5] = member;
      cResult[6] = user;
      cResult[7] = getSource;
      tmp9 = getSource;
    }
  }
  const fn = function c() {
    AnalyticsUtilsDefault.track(AnalyticEvents.VOICE_CHANNEL_GAME_ACTIVITY_SHOWN, { guild_id: guildId, channel_id: channelId, application_id });
  };
  cResult[0] = channelId;
  cResult[1] = application_id;
  cResult[2] = guildId;
  cResult[3] = fn;
  tmp8 = fn;
}) : (function VoiceUserItem(guildId) {
  ({ member: require, user } = guildId);
  guildId = guildId.guildId;
  const channelId = guildId.channelId;
  ({ disabled, platform, isInEmbeddedActivity } = guildId);
  ({ collapsed, stream, serverMute, serverDeaf, mute, deaf, localMute, video, voicePlatform } = guildId);
  const tmp = closure_11();
  const first = user(guildId[12])(user.id, guildId, user(guildId[11])("channel_list"))[0];
  let application_id;
  if (first != null) {
    application_id = first.application_id;
  }
  function getSource() {
    if (null != _require) {
      if (null != _require.avatar) {
        let guildMemberAvatarSource = AvatarUtilsDefault.getGuildMemberAvatarSource(_require, user);
      }
      return guildMemberAvatarSource;
    }
    guildMemberAvatarSource = user.getAvatarSource(guildId);
  }
  const gameRecord = user(tmp3[13])(application_id).gameRecord;
  const items = [guildId, channelId, application_id];
  if (collapsed) {
    const obj2 = { style: tmp.voiceStateCollapsed, children: null };
    const obj3 = { source: getSource, size: XSMALL_20 };
    obj2.children = closure_6(require("native").Avatar, obj3);
    let tmp8Result = closure_6(application_id, obj2);
  } else {
    const items1 = [tmp.voiceState, ];
    let disabled2 = disabled;
    if (disabled) {
      disabled2 = tmp.disabled;
    }
    let obj = { style: null, children: null };
    items1[1] = disabled2;
    obj.style = items1;
    const obj4 = { source: getSource, size: XSMALL_20 };
    const items2 = [closure_6(require("native").Avatar, obj4), , , , , , , , ];
    const obj5 = { variant, color };
    const merged = Object.assign(guildId);
    items2[1] = closure_6(user(tmp3[16]), obj5);
    if (disabled) {
      items2[2] = null;
      if (disabled) {
        items2[3] = null;
        let tmp10Result = null;
        if (video) {
          tmp10Result = null;
          if (!disabled) {
            const obj6 = { size: "custom", color, style: tmp.voiceStateIcon };
            tmp10Result = closure_6(require("VideoIcon").VideoIcon, obj6);
          }
        }
        items2[4] = tmp10Result;
        let tmp10Result7 = null;
        if (isInEmbeddedActivity) {
          const obj7 = { source: user(tmp3[23]), size: require("native").Icon.Sizes.REFRESH_SMALL_16, style: tmp.legacyVoiceStateIcon };
          tmp10Result7 = closure_6(require("native").Icon, obj7);
        }
        items2[5] = tmp10Result7;
        if (platform == null) {
          platform = "";
        }
        let tmp2Result1Result = user(tmp3[22])(platform);
        if (tmp2Result1Result == null) {
          tmp2Result1Result = require("getConsoleIcon").getConsoleIconForVoicePlatform(voicePlatform);
          const tmp11Result = require("getConsoleIcon");
        }
        let tmp10Result8 = null;
        if (null != tmp2Result1Result) {
          const obj8 = { source: tmp2Result1Result, size: require("native").Icon.Sizes.REFRESH_SMALL_16, style: tmp.legacyVoiceStateIcon };
          tmp10Result8 = closure_6(require("native").Icon, obj8);
        }
        items2[6] = tmp10Result8;
        let tmp10Result9 = null;
        if (stream) {
          const obj9 = { style: tmp.legacyVoiceStateIcon };
          tmp10Result9 = closure_6(require("native").LiveTag, obj9);
        }
        items2[7] = tmp10Result9;
        let tmp10Result10 = null;
        if (!disabled) {
          tmp10Result10 = null;
          if (!isInEmbeddedActivity) {
            tmp10Result10 = null;
            if (null != gameRecord) {
              const obj10 = { game: gameRecord, size: 16, fallback: "none", style: tmp.gameIcon, onShown: tmp7 };
              tmp10Result10 = closure_6(user(tmp3[24]), obj10);
            }
          }
        }
        items2[8] = tmp10Result10;
        obj.children = items2;
        tmp8Result = closure_7(tmp9, obj);
        const tmp2Result2 = user(tmp3[22]);
      } else if (serverDeaf) {
        const obj11 = { style: tmp.voiceStateIcon, color: "text-feedback-critical", size: "custom" };
        let tmp10Result11 = closure_6(require("HeadphonesDenyIcon").HeadphonesDenyIcon, obj11);
      } else {
        tmp10Result11 = null;
        if (deaf) {
          const obj12 = { style: tmp.voiceStateIcon, size: "custom", color };
          tmp10Result11 = closure_6(require("HeadphonesSlashIcon").HeadphonesSlashIcon, obj12);
        }
      }
    } else if (serverMute) {
      const obj13 = { style: tmp.voiceStateIcon, color: "text-feedback-critical", size: "custom" };
      let tmp10Result12 = closure_6(require("MicrophoneDenyIcon").MicrophoneDenyIcon, obj13);
    } else if (localMute) {
      const obj14 = { style: tmp.voiceStateIcon, size: "custom", color };
      tmp10Result12 = closure_6(require("MicrophoneDenyIcon").MicrophoneDenyIcon, obj14);
    } else {
      tmp10Result12 = null;
      if (mute) {
        const obj15 = { style: tmp.voiceStateIcon, size: "custom", color };
        tmp10Result12 = closure_6(require("MicrophoneSlashIcon").MicrophoneSlashIcon, obj15);
      }
    }
    const tmp2Result = user(tmp3[16]);
    tmp9 = application_id;
  }
  return tmp8Result;
}));
export const getVoiceUserHeight = function getVoiceUserHeight(fontScale) {
  return Math.max(useScaledTextLineHeight.scaleTextLineHeight(c8, fontScale), native.AVATAR_SIZE_MAP[XSMALL_20]) + 10;
};