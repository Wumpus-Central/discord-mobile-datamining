// discord_app/modules/guild_sidebar/native/VoiceUserItem.tsx
import react_native from "../../../../_runtime/00017_react-native.js";
import nativeDefault from "../../../../discord_common/js/packages/tokens/native.tsx";
import Constants from "../../../Constants.tsx";
import native from "../../../design/void/native.tsx";
import AnalyticsUtilsDefault from "../../../utils/AnalyticsUtils.tsx";
import AvatarUtilsDefault from "../../../utils/AvatarUtils.tsx";
import MicrophoneSlashIcon from "../../../design/components/Icon/native/redesign/generated/MicrophoneSlashIcon.tsx";
import AssetRegistryDefault from "../../../../_runtime/05817_AssetRegistry.js";
import HeadphonesDenyIcon from "../../../design/components/Icon/native/redesign/generated/HeadphonesDenyIcon.tsx";
import HeadphonesSlashIcon from "../../../design/components/Icon/native/redesign/generated/HeadphonesSlashIcon.tsx";
import MicrophoneDenyIcon from "../../../design/components/Icon/native/redesign/generated/MicrophoneDenyIcon.tsx";
import GameActivityIconDefault from "../../games/native/GameActivityIcon.tsx";
import getConsoleIcon from "../../game_console/native/getConsoleIcon.tsx";
import useScaledTextLineHeight from "../../screen/native/useScaledTextLineHeight.android.tsx";
import VideoIcon from "../../../design/components/Icon/native/redesign/generated/VideoIcon.tsx";
import VoiceUserNameItemDefault from "VoiceUserNameItem.tsx";
import react from "../../../../_runtime/00019_react.js";
import Fragment from "../../../../_runtime/react/00021_Fragment.js";
import createStyles_mod from "../../../design/components/Styles/native/createStyles.tsx";
import ChannelListLayout from "../../main_tabs_v2/native/shared_components/guild_channels/layouts/ChannelListLayout.tsx";
import ReactCompilerGating from "../../react_compiler/ReactCompilerGating.tsx";
import size_mod from "../../../../_runtime/metro/00002__.js";

const require = globalThis.__r;
let _require, member, source;

let metroImportDefault;
let metroRequire;
let obj2;
let obj3;
let size;
const View = react_native.View;
const AnalyticEvents = Constants.AnalyticEvents;
({ jsx: metroRequire, jsxs: metroImportDefault } = Fragment);
let c8 = "text-sm/medium";
let c9 = "redesign-channel-name-muted-text";
const XSMALL_20 = native.AvatarSizes.XSMALL_20;
let createStyles = createStyles_mod;
let obj = {
  voiceState: { flex: 1, flexDirection: "row", alignItems: "center", paddingVertical: 5 },
  disabled: { opacity: 0.5 },
  voiceStateCollapsed: size,
  voiceStateIcon: obj2,
  legacyVoiceStateIcon: obj3,
  gameIcon: { marginLeft: 6 },
};
size = {
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
createStyles = createStyles.createStyles;
obj2 = { marginLeft: 6 };
let merged = Object.assign(ChannelListLayout.makeSizeStyle(14));
obj3 = { tintColor: nativeDefault.colors.REDESIGN_CHANNEL_NAME_MUTED_TEXT, marginLeft: 6 };
let closure_11 = createStyles(obj);
const memoResult = react.memo(
  ReactCompilerGating.isReactCompilerEnabled()
    ? (member) => {
        let user;
        _require = member;
        let tmp = user;
        let obj = require("react");
        const cResult = obj.c(80);
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
        const tmp3 = video();
        let closure_16 = tmp3;
        let tmp4 = member;
        let tmp5 = member(user[11])("channel_list");
        const first = member(user[12])(user.id, guildId, tmp5)[0];
        let application_id;
        if (first != null) {
          application_id = first.application_id;
        }
        const gameRecord = tmp4(tmp[13])(application_id).gameRecord;
        if (cResult[0] === channelId) {
          if (cResult[1] === application_id) {
            let tmp8;
            if (cResult[2] === guildId) {
              tmp8 = cResult[3];
            }
            const onShown = tmp8;
            if (cResult[4] === guildId) {
              if (cResult[5] === member) {
                let tmp9;
                if (cResult[6] === user) {
                  tmp9 = cResult[7];
                }
                source = tmp9;
                if (cResult[8] === tmp9) {
                  if (cResult[11] !== tmp9) {
                    class U {
                      constructor() {
                        const obj = { source, size: XSMALL_20 };
                        return metroRequire(native.Avatar, obj);
                      }
                    }
                    cResult[11] = tmp9;
                    class G {
                      constructor() {
                        let obj2;
                        const obj = {
                          style: closure_16.voiceStateCollapsed,
                          children: metroRequire(native.Avatar, obj2),
                        };
                        obj2 = { source, size: XSMALL_20 };
                        return metroRequire(View, obj);
                      }
                    }
                    class X {
                      constructor() {
                        let tmp = null;
                        if (!disabled) {
                          let tmp5;
                          if (serverMute) {
                            const obj2 = {
                              style: closure_16.voiceStateIcon,
                              color: "text-feedback-critical",
                              size: "custom",
                            };
                            tmp5 = metroRequire(MicrophoneDenyIcon.MicrophoneDenyIcon, obj2);
                          } else if (localMute) {
                            const obj3 = { style: closure_16.voiceStateIcon, size: "custom", color };
                            tmp5 = metroRequire(MicrophoneDenyIcon.MicrophoneDenyIcon, obj3);
                          } else {
                            tmp5 = null;
                            if (mute) {
                              const obj = { style: closure_16.voiceStateIcon, size: "custom", color };
                              tmp5 = metroRequire(MicrophoneSlashIcon.MicrophoneSlashIcon, obj);
                            }
                          }
                          tmp = tmp5;
                        }
                        return tmp;
                      }
                    }
                  } else {
                    class U {
                      constructor() {
                        const obj = { source, size: XSMALL_20 };
                        return metroRequire(native.Avatar, obj);
                      }
                    }
                  }
                  if (cResult[13] !== member) {
                    class U {
                      constructor() {
                        const obj = { source, size: XSMALL_20 };
                        return metroRequire(native.Avatar, obj);
                      }
                    }
                    cResult[13] = member;
                    class G {
                      constructor() {
                        let obj2;
                        const obj = {
                          style: closure_16.voiceStateCollapsed,
                          children: metroRequire(native.Avatar, obj2),
                        };
                        obj2 = { source, size: XSMALL_20 };
                        return metroRequire(View, obj);
                      }
                    }
                    class X {
                      constructor() {
                        let tmp = null;
                        if (!disabled) {
                          let tmp5;
                          if (serverMute) {
                            const obj2 = {
                              style: closure_16.voiceStateIcon,
                              color: "text-feedback-critical",
                              size: "custom",
                            };
                            tmp5 = metroRequire(MicrophoneDenyIcon.MicrophoneDenyIcon, obj2);
                          } else if (localMute) {
                            const obj3 = { style: closure_16.voiceStateIcon, size: "custom", color };
                            tmp5 = metroRequire(MicrophoneDenyIcon.MicrophoneDenyIcon, obj3);
                          } else {
                            tmp5 = null;
                            if (mute) {
                              const obj = { style: closure_16.voiceStateIcon, size: "custom", color };
                              tmp5 = metroRequire(MicrophoneSlashIcon.MicrophoneSlashIcon, obj);
                            }
                          }
                          tmp = tmp5;
                        }
                        return tmp;
                      }
                    }
                  } else {
                    class U {
                      constructor() {
                        const obj = { source, size: XSMALL_20 };
                        return metroRequire(native.Avatar, obj);
                      }
                    }
                  }
                  class G {
                    constructor() {
                      let obj2;
                      const obj = {
                        style: closure_16.voiceStateCollapsed,
                        children: metroRequire(native.Avatar, obj2),
                      };
                      obj2 = { source, size: XSMALL_20 };
                      return metroRequire(View, obj);
                    }
                  }
                  class X {
                    constructor() {
                      let tmp = null;
                      if (!disabled) {
                        let tmp5;
                        if (serverMute) {
                          const obj2 = {
                            style: closure_16.voiceStateIcon,
                            color: "text-feedback-critical",
                            size: "custom",
                          };
                          tmp5 = metroRequire(MicrophoneDenyIcon.MicrophoneDenyIcon, obj2);
                        } else if (localMute) {
                          const obj3 = { style: closure_16.voiceStateIcon, size: "custom", color };
                          tmp5 = metroRequire(MicrophoneDenyIcon.MicrophoneDenyIcon, obj3);
                        } else {
                          tmp5 = null;
                          if (mute) {
                            const obj = { style: closure_16.voiceStateIcon, size: "custom", color };
                            tmp5 = metroRequire(MicrophoneSlashIcon.MicrophoneSlashIcon, obj);
                          }
                        }
                        tmp = tmp5;
                      }
                      return tmp;
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
                    let obj2;
                    const obj = { style: closure_16.voiceStateCollapsed, children: metroRequire(native.Avatar, obj2) };
                    obj2 = { source, size: XSMALL_20 };
                    return metroRequire(View, obj);
                  }
                }
                cResult[8] = tmp9;
                cResult[9] = tmp3.voiceStateCollapsed;
                cResult[10] = G;
              }
            }
            class O {
              constructor() {
                if (null != member) {
                  let guildMemberAvatarSource;
                  if (null != member.avatar) {
                    const obj = AvatarUtilsDefault;
                    guildMemberAvatarSource = obj.getGuildMemberAvatarSource(member, user);
                  }
                  return guildMemberAvatarSource;
                }
                guildMemberAvatarSource = user.getAvatarSource(guildId);
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
          const obj = AnalyticsUtilsDefault;
          const obj2 = { guild_id: guildId, channel_id: channelId, application_id };
          obj.track(AnalyticEvents.VOICE_CHANNEL_GAME_ACTIVITY_SHOWN, obj2);
        };
        cResult[0] = channelId;
        cResult[1] = application_id;
        cResult[2] = guildId;
        cResult[3] = fn;
        tmp8 = fn;
      }
    : (guildId) => {
        let collapsed;
        let deaf;
        let disabled;
        let isInEmbeddedActivity;
        let items2;
        let localMute;
        let mute;
        let obj3;
        let platform;
        let require;
        let serverDeaf;
        let serverMute;
        let stream;
        let tmp8Result;
        let user;
        let video;
        let voicePlatform;
        ({ member: require, user } = guildId);
        guildId = guildId.guildId;
        const channelId = guildId.channelId;
        ({ disabled, platform, isInEmbeddedActivity } = guildId);
        ({ collapsed, stream, serverMute, serverDeaf, mute, deaf, localMute, video, voicePlatform } = guildId);
        const tmp = closure_11();
        const tmp4 = user(guildId[11])("channel_list");
        const first = user(guildId[12])(user.id, guildId, tmp4)[0];
        let application_id;
        if (first != null) {
          application_id = first.application_id;
        }
        function getSource() {
          if (null != _require) {
            let guildMemberAvatarSource;
            if (null != _require.avatar) {
              const obj = AvatarUtilsDefault;
              guildMemberAvatarSource = obj.getGuildMemberAvatarSource(_require, user);
            }
            return guildMemberAvatarSource;
          }
          guildMemberAvatarSource = user.getAvatarSource(guildId);
        }
        const gameRecord = user(tmp3[13])(application_id).gameRecord;
        const items = [guildId, channelId, application_id];
        if (collapsed) {
          let obj2 = { style: tmp.voiceStateCollapsed, children: closure_6(require("native").Avatar, obj3) };
          obj3 = { source: getSource, size: XSMALL_20 };
          tmp8Result = closure_6(application_id, obj2);
        } else {
          const items1 = [tmp.voiceState];
          let disabled2 = disabled;
          const tmp9 = application_id;
          if (disabled) {
            disabled2 = tmp.disabled;
          }
          let obj = { style: items1, children: items2 };
          items1[1] = disabled2;
          const obj4 = { source: getSource, size: XSMALL_20 };
          items2 = [closure_6(require("native").Avatar, obj4), , , , , , , ,];
          const obj5 = { variant, color };
          const tmp2Result = user(guildId[16]);
          const merged = Object.assign(guildId);
          items2[1] = closure_6(tmp2Result, obj5);
          let tmp19 = null;
          if (!disabled) {
            let tmp10Result;
            if (serverMute) {
              const obj6 = { style: tmp.voiceStateIcon, color: "text-feedback-critical", size: "custom" };
              tmp10Result = closure_6(require("MicrophoneDenyIcon").MicrophoneDenyIcon, obj6);
            } else if (localMute) {
              const obj7 = { style: tmp.voiceStateIcon, size: "custom", color };
              tmp10Result = closure_6(require("MicrophoneDenyIcon").MicrophoneDenyIcon, obj7);
            } else {
              tmp10Result = null;
              if (mute) {
                const obj8 = { style: tmp.voiceStateIcon, size: "custom", color };
                tmp10Result = closure_6(require("MicrophoneSlashIcon").MicrophoneSlashIcon, obj8);
              }
            }
            tmp19 = tmp10Result;
          }
          items2[2] = tmp19;
          let tmp21 = null;
          if (!disabled) {
            let tmp10Result7;
            if (serverDeaf) {
              const obj9 = { style: tmp.voiceStateIcon, color: "text-feedback-critical", size: "custom" };
              tmp10Result7 = closure_6(require("HeadphonesDenyIcon").HeadphonesDenyIcon, obj9);
            } else {
              tmp10Result7 = null;
              if (deaf) {
                const obj10 = { style: tmp.voiceStateIcon, size: "custom", color };
                tmp10Result7 = closure_6(require("HeadphonesSlashIcon").HeadphonesSlashIcon, obj10);
              }
            }
            tmp21 = tmp10Result7;
          }
          items2[3] = tmp21;
          let tmp10Result8 = null;
          if (video) {
            tmp10Result8 = null;
            if (!disabled) {
              const obj11 = { size: "custom", color, style: tmp.voiceStateIcon };
              tmp10Result8 = closure_6(require("VideoIcon").VideoIcon, obj11);
            }
          }
          items2[4] = tmp10Result8;
          let tmp10Result9 = null;
          if (isInEmbeddedActivity) {
            const obj12 = {
              source: user(guildId[23]),
              size: require("native").Icon.Sizes.REFRESH_SMALL_16,
              style: tmp.legacyVoiceStateIcon,
            };
            const Icon = require("native").Icon;
            tmp10Result9 = closure_6(Icon, obj12);
          }
          items2[5] = tmp10Result9;
          const tmp2Result2 = user(guildId[22]);
          if (platform == null) {
            platform = "";
          }
          let tmp2Result1Result = tmp2Result2(platform);
          if (tmp2Result1Result == null) {
            const tmp11Result = require("getConsoleIcon");
            tmp2Result1Result = tmp11Result.getConsoleIconForVoicePlatform(voicePlatform);
          }
          let tmp10Result10 = null;
          if (null != tmp2Result1Result) {
            const obj13 = {
              source: tmp2Result1Result,
              size: require("native").Icon.Sizes.REFRESH_SMALL_16,
              style: tmp.legacyVoiceStateIcon,
            };
            const Icon2 = require("native").Icon;
            tmp10Result10 = closure_6(Icon2, obj13);
          }
          items2[6] = tmp10Result10;
          let tmp10Result11 = null;
          if (stream) {
            const obj14 = { style: tmp.legacyVoiceStateIcon };
            tmp10Result11 = closure_6(require("native").LiveTag, obj14);
          }
          items2[7] = tmp10Result11;
          let tmp10Result12 = null;
          if (!disabled) {
            tmp10Result12 = null;
            if (!isInEmbeddedActivity) {
              tmp10Result12 = null;
              if (null != gameRecord) {
                const obj15 = { game: gameRecord, size: 16, fallback: "none", style: tmp.gameIcon, onShown: tmp7 };
                tmp10Result12 = closure_6(user(tmp3[24]), obj15);
              }
            }
          }
          items2[8] = tmp10Result12;
          tmp8Result = closure_7(tmp9, obj);
        }
        return tmp8Result;
      },
);
size = size_mod;
const result = size.fileFinishedImporting("modules/guild_sidebar/native/VoiceUserItem.tsx");

export default memoResult;
export const getVoiceUserHeight = function getVoiceUserHeight(fontScale) {
  const obj = useScaledTextLineHeight;
  const scaleTextLineHeightResult = obj.scaleTextLineHeight(c8, fontScale);
  return Math.max(scaleTextLineHeightResult, native.AVATAR_SIZE_MAP[XSMALL_20]) + 10;
};
