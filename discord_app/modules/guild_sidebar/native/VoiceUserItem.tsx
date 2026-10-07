// discord_app/modules/guild_sidebar/native/VoiceUserItem.tsx
import nativeDefault from "../../../../discord_common/js/packages/tokens/native.tsx";
import native from "../../../design/void/native.tsx";
import AnalyticsUtilsDefault from "../../../utils/AnalyticsUtils.tsx";
import AvatarUtilsDefault from "../../../utils/AvatarUtils.tsx";
import MicrophoneSlashIcon from "../../../design/components/Icon/native/redesign/generated/MicrophoneSlashIcon.tsx";
import _modDef5824 from "../../../../_runtime/metro/05824__.js";
import HeadphonesDenyIcon from "../../../design/components/Icon/native/redesign/generated/HeadphonesDenyIcon.tsx";
import HeadphonesSlashIcon from "../../../design/components/Icon/native/redesign/generated/HeadphonesSlashIcon.tsx";
import MicrophoneDenyIcon from "../../../design/components/Icon/native/redesign/generated/MicrophoneDenyIcon.tsx";
import GameActivityIconDefault from "../../games/native/GameActivityIcon.tsx";
import getConsoleIcon from "../../game_console/native/getConsoleIcon.tsx";
import useScaledTextLineHeight from "../../screen/native/useScaledTextLineHeight.android.tsx";
import VideoIcon from "../../../design/components/Icon/native/redesign/generated/VideoIcon.tsx";
import VoiceUserNameItemDefault from "VoiceUserNameItem.tsx";
import noop from "../../../../_runtime/metro/00019__.js";

const require = globalThis.__r;

require = fn;
const View = fn(17).View;
const AnalyticEvents = fn(1085).AnalyticEvents;
const jsxProd = fn(21);
({ jsx: metroRequire, jsxs: closure_7 } = jsxProd);
let c8 = "text-sm/medium";
let c9 = "redesign-channel-name-muted-text";
const XSMALL_20 = fn(1188).AvatarSizes.XSMALL_20;
const createStyles = fn(4896);
let obj = {
  voiceState: { flex: 1, flexDirection: "row", alignItems: "center", paddingVertical: 5 },
  disabled: { opacity: 0.5 },
  voiceStateCollapsed: null,
  voiceStateIcon: null,
  legacyVoiceStateIcon: null,
  gameIcon: null,
};
let size = {
  marginTop: 4,
  marginRight: 8,
  width: 32,
  height: 32,
  borderRadius: nativeDefault.radii.lg,
  borderWidth: 4,
  borderColor: nativeDefault.colors.BACKGROUND_BASE_LOW,
  alignItems: "center",
  overflow: "hidden",
};
obj.voiceStateCollapsed = size;
const ChannelListLayout = fn(11712);
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

export default noop.memo(
  ReactCompilerGating.isReactCompilerEnabled()
    ? (member) => {
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
        const disabled = member.disabled;
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
                source = tmp9;
                if (cResult[8] === tmp9) {
                  if (cResult[11] !== tmp9) {
                    class U {
                      constructor() {
                        obj = { source: closure_20, size: XSMALL_20 };
                        return jsx(closure_0(closure_2[4]).Avatar, obj);
                      }
                    }
                    cResult[11] = tmp9;
                    class G {
                      constructor() {
                        obj = { style: closure_16.voiceStateCollapsed, children: null };
                        obj1 = { source: closure_20, size: XSMALL_20 };
                        obj.children = jsx(closure_0(closure_2[4]).Avatar, obj1);
                        return jsx(View, obj);
                      }
                    }
                    class X {
                      constructor() {
                        if (disabled) {
                          return null;
                        } else {
                          tmp = serverMute;
                          if (serverMute) {
                            tmp15 = jsx;
                            tmp16 = closure_0;
                            tmp17 = closure_2;
                            obj1 = { style: null, color: "text-feedback-critical", size: "custom" };
                            tmp18 = closure_16;
                            obj1.style = closure_16.voiceStateIcon;
                            tmp4 = jsx(closure_0(closure_2[17]).MicrophoneDenyIcon, obj1);
                          } else {
                            tmp2 = localMute;
                            if (localMute) {
                              tmp10 = jsx;
                              tmp11 = closure_0;
                              tmp12 = closure_2;
                              obj4 = { style: null, size: "custom", color: null };
                              tmp13 = closure_16;
                              obj4.style = closure_16.voiceStateIcon;
                              tmp14 = c9;
                              obj4.color = c9;
                              tmp4 = jsx(closure_0(closure_2[17]).MicrophoneDenyIcon, obj4);
                            } else {
                              tmp3 = mute;
                              tmp4 = null;
                              if (mute) {
                                tmp5 = jsx;
                                tmp6 = closure_0;
                                tmp7 = closure_2;
                                obj = { style: null, size: "custom", color: null };
                                tmp8 = closure_16;
                                obj.style = closure_16.voiceStateIcon;
                                tmp9 = c9;
                                obj.color = c9;
                                tmp4 = jsx(closure_0(closure_2[18]).MicrophoneSlashIcon, obj);
                              }
                            }
                          }
                          tmp19 = tmp4;
                        }
                        return;
                      }
                    }
                  } else {
                    class U {
                      constructor() {
                        obj = { source: closure_20, size: XSMALL_20 };
                        return jsx(closure_0(closure_2[4]).Avatar, obj);
                      }
                    }
                  }
                  if (cResult[13] !== member) {
                    class U {
                      constructor() {
                        obj = { source: closure_20, size: XSMALL_20 };
                        return jsx(closure_0(closure_2[4]).Avatar, obj);
                      }
                    }
                    cResult[13] = member;
                    class G {
                      constructor() {
                        obj = { style: closure_16.voiceStateCollapsed, children: null };
                        obj1 = { source: closure_20, size: XSMALL_20 };
                        obj.children = jsx(closure_0(closure_2[4]).Avatar, obj1);
                        return jsx(View, obj);
                      }
                    }
                    class X {
                      constructor() {
                        if (disabled) {
                          return null;
                        } else {
                          tmp = serverMute;
                          if (serverMute) {
                            tmp15 = jsx;
                            tmp16 = closure_0;
                            tmp17 = closure_2;
                            obj1 = { style: null, color: "text-feedback-critical", size: "custom" };
                            tmp18 = closure_16;
                            obj1.style = closure_16.voiceStateIcon;
                            tmp4 = jsx(closure_0(closure_2[17]).MicrophoneDenyIcon, obj1);
                          } else {
                            tmp2 = localMute;
                            if (localMute) {
                              tmp10 = jsx;
                              tmp11 = closure_0;
                              tmp12 = closure_2;
                              obj4 = { style: null, size: "custom", color: null };
                              tmp13 = closure_16;
                              obj4.style = closure_16.voiceStateIcon;
                              tmp14 = c9;
                              obj4.color = c9;
                              tmp4 = jsx(closure_0(closure_2[17]).MicrophoneDenyIcon, obj4);
                            } else {
                              tmp3 = mute;
                              tmp4 = null;
                              if (mute) {
                                tmp5 = jsx;
                                tmp6 = closure_0;
                                tmp7 = closure_2;
                                obj = { style: null, size: "custom", color: null };
                                tmp8 = closure_16;
                                obj.style = closure_16.voiceStateIcon;
                                tmp9 = c9;
                                obj.color = c9;
                                tmp4 = jsx(closure_0(closure_2[18]).MicrophoneSlashIcon, obj);
                              }
                            }
                          }
                          tmp19 = tmp4;
                        }
                        return;
                      }
                    }
                  } else {
                    class U {
                      constructor() {
                        obj = { source: closure_20, size: XSMALL_20 };
                        return jsx(closure_0(closure_2[4]).Avatar, obj);
                      }
                    }
                  }
                  class G {
                    constructor() {
                      obj = { style: closure_16.voiceStateCollapsed, children: null };
                      obj1 = { source: closure_20, size: XSMALL_20 };
                      obj.children = jsx(closure_0(closure_2[4]).Avatar, obj1);
                      return jsx(View, obj);
                    }
                  }
                  class X {
                    constructor() {
                      if (disabled) {
                        return null;
                      } else {
                        tmp = serverMute;
                        if (serverMute) {
                          tmp15 = jsx;
                          tmp16 = closure_0;
                          tmp17 = closure_2;
                          obj1 = { style: null, color: "text-feedback-critical", size: "custom" };
                          tmp18 = closure_16;
                          obj1.style = closure_16.voiceStateIcon;
                          tmp4 = jsx(closure_0(closure_2[17]).MicrophoneDenyIcon, obj1);
                        } else {
                          tmp2 = localMute;
                          if (localMute) {
                            tmp10 = jsx;
                            tmp11 = closure_0;
                            tmp12 = closure_2;
                            obj4 = { style: null, size: "custom", color: null };
                            tmp13 = closure_16;
                            obj4.style = closure_16.voiceStateIcon;
                            tmp14 = c9;
                            obj4.color = c9;
                            tmp4 = jsx(closure_0(closure_2[17]).MicrophoneDenyIcon, obj4);
                          } else {
                            tmp3 = mute;
                            tmp4 = null;
                            if (mute) {
                              tmp5 = jsx;
                              tmp6 = closure_0;
                              tmp7 = closure_2;
                              obj = { style: null, size: "custom", color: null };
                              tmp8 = closure_16;
                              obj.style = closure_16.voiceStateIcon;
                              tmp9 = c9;
                              obj.color = c9;
                              tmp4 = jsx(closure_0(closure_2[18]).MicrophoneSlashIcon, obj);
                            }
                          }
                        }
                        tmp19 = tmp4;
                      }
                      return;
                    }
                  }
                  cResult[15] = disabled;
                  cResult[16] = localMute;
                  cResult[17] = mute;
                  cResult[18] = serverMute;
                  cResult[19] = tmp3.voiceStateIcon;
                  cResult[20] = X;
                }
                class G {
                  constructor() {
                    obj = { style: closure_16.voiceStateCollapsed, children: null };
                    obj1 = { source: closure_20, size: XSMALL_20 };
                    obj.children = jsx(closure_0(closure_2[4]).Avatar, obj1);
                    return jsx(View, obj);
                  }
                }
                cResult[8] = tmp9;
                cResult[9] = tmp3.voiceStateCollapsed;
                cResult[10] = G;
              }
            }
            class O {
              constructor() {
                tmp = member;
                if (null != member) {
                  if (null != tmp.avatar) {
                    tmp3 = closure_1;
                    tmp4 = closure_2;
                    obj = closure_1(closure_2[15]);
                    tmp5 = user;
                    guildMemberAvatarSource = obj.getGuildMemberAvatarSource(tmp, user);
                  }
                  return guildMemberAvatarSource;
                }
                guildMemberAvatarSource = user.getAvatarSource(guildId);
                return;
              }
            }
            cResult[4] = guildId;
            cResult[5] = member;
            cResult[6] = user;
            cResult[7] = O;
            tmp9 = O;
          }
        }
        const fn = function n() {
          AnalyticsUtilsDefault.track(AnalyticEvents.VOICE_CHANNEL_GAME_ACTIVITY_SHOWN, {
            guild_id: guildId,
            channel_id: channelId,
            application_id,
          });
        };
        cResult[0] = channelId;
        cResult[1] = application_id;
        cResult[2] = guildId;
        cResult[3] = fn;
        tmp8 = fn;
        const tmp5 = member(user[11])("channel_list");
      }
    : (guildId) => {
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
          const items1 = [tmp.voiceState];
          let disabled2 = disabled;
          if (disabled) {
            disabled2 = tmp.disabled;
          }
          let obj = { style: null, children: null };
          items1[1] = disabled2;
          obj.style = items1;
          const obj4 = { source: getSource, size: XSMALL_20 };
          const items2 = [closure_6(require("native").Avatar, obj4), , , , , , , ,];
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
                const obj7 = {
                  source: user(tmp3[23]),
                  size: require("native").Icon.Sizes.REFRESH_SMALL_16,
                  style: tmp.legacyVoiceStateIcon,
                };
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
                const obj8 = {
                  source: tmp2Result1Result,
                  size: require("native").Icon.Sizes.REFRESH_SMALL_16,
                  style: tmp.legacyVoiceStateIcon,
                };
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
      },
);
export const getVoiceUserHeight = function getVoiceUserHeight(fontScale) {
  return Math.max(useScaledTextLineHeight.scaleTextLineHeight(c8, fontScale), native.AVATAR_SIZE_MAP[XSMALL_20]) + 10;
};
