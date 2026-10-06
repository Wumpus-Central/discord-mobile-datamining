// === Module 16152: GuildLiveChannelNotice ===

// Module 16152 (GuildLiveChannelNotice)
import react_native from "react-native" /* 17 */;
import react2 from "react" /* 576 */;
import nativeDefault from "native" /* 587 */;
import Constants from "Constants" /* 1096 */;
import intl3 from "intl" /* 1126 */;
import native from "native" /* 1188 */;
import KeyboardManagerUtilsAll from "KeyboardManagerUtils" /* 1881 */;
import GuildScheduledEventsConstants from "GuildScheduledEventsConstants" /* 2057 */;
import shared from "shared" /* 4735 */;
import useThemeDefault from "useTheme" /* 4797 */;
import Text_Text from "Text/Text" /* 4892 */;
import useChannelNameDefault from "useChannelName" /* 5049 */;
import PrivateChannelCallUtils from "PrivateChannelCallUtils" /* 5103 */;
import StageChannelParticipants from "StageChannelParticipants" /* 5589 */;
import components_Button_Button from "components/Button/Button" /* 5601 */;
import ButtonConstants from "ButtonConstants" /* 5607 */;
import useIsUsingClientThemeDefault from "useIsUsingClientTheme" /* 7519 */;
import MarkupRulesUtils from "MarkupRulesUtils" /* 7779 */;
import StageChannelModalActionCreators from "StageChannelModalActionCreators" /* 8102 */;
import EntityUtils from "EntityUtils" /* 9215 */;
import LocationIcon from "LocationIcon" /* 9226 */;
import CalendarIcon from "CalendarIcon" /* 9310 */;
import guild_scheduled_events_GuildScheduledEventModalActionCreators from "guild_scheduled_events/GuildScheduledEventModalActionCreators" /* 9314 */;
import openChannelLongPressActionSheet from "openChannelLongPressActionSheet" /* 10664 */;
import useScaledTextLineHeight from "useScaledTextLineHeight" /* 10736 */;
import MarkupInlineChannelMentionRules from "MarkupInlineChannelMentionRules" /* 11719 */;
import react from "react" /* 19 */;
import StageChannelParticipantStore from "StageChannelParticipantStore" /* 5582 */;
import StageInstanceStore from "StageInstanceStore" /* 2056 */;
import ApplicationStreamingStore from "ApplicationStreamingStore" /* 4918 */;
import PermissionStore from "PermissionStore" /* 4515 */;
import SortedVoiceStateStore from "SortedVoiceStateStore" /* 4920 */;
import Fragment from "Fragment" /* 21 */;
import MarkupUtils_mod from "MarkupUtils" /* 4883 */;
import createStyles_mod from "createStyles" /* 4896 */;
import ReactCompilerGating_mod from "ReactCompilerGating" /* 558 */;
import PlatformUtils from "PlatformUtils" /* 1369 */;
import size_mod from "module_2" /* 2 */;

const require = globalThis.__r;
let _require, dependencyMap, guild;

let MarkupUtils;
let closure_14;
let closure_15;
let map1;
let num;
let obj2;
let obj3;
let size;
const View = react_native.View;
const constants = GuildScheduledEventsConstants.GuildScheduledEventEntityTypes;
const Permissions = Constants.Permissions;
({ jsx: map1, jsxs: closure_14, Fragment: closure_15 } = Fragment);
const PX_8 = nativeDefault.space.PX_8;
const PX_12 = nativeDefault.space.PX_12;
const XSMALL = native.AvatarSizes.XSMALL;
const height = native.AVATAR_SIZE_MAP[XSMALL];
const PX_122 = nativeDefault.space.PX_12;
let c21 = "text-xs/semibold";
let c22 = "text-xs/bold";
let c23 = "text-md/semibold";
let c24 = "text-xs/medium";
const PX_82 = nativeDefault.space.PX_8;
const PX_4 = nativeDefault.space.PX_4;
const guildEventRules = MarkupUtils.guildEventRules;
MarkupUtils = MarkupUtils_mod;
let obj = {
  channelMention: obj2,
  guild: {
    react(content, output, state) {
      if (typeof content.content === "string") {
        content = content.content;
      } else {
        const obj = MarkupRulesUtils;
        content = obj.smartOutput(content, output, state);
      }
      return content;
    }
  },
  channel: obj3
};
const reactParserFor = MarkupUtils.reactParserFor;
const merged = Object.assign(guildEventRules);
obj2 = { react: MarkupInlineChannelMentionRules.inlineChannelMentionReact };
const merged1 = Object.assign(guildEventRules.channelMention);
obj3 = { react: MarkupInlineChannelMentionRules.inlineChannelReact };
let closure_27 = reactParserFor(obj);
let createStyles = createStyles_mod;
let closure_28 = createStyles.createStyles((height) => {
  let obj2;
  const obj = { container: obj2, overflowCircle: { backgroundColor: nativeDefault.colors.BACKGROUND_MOD_STRONG, borderRadius: nativeDefault.radii.round, display: "flex", flexDirection: "row", alignItems: "center", justifyContent: "center", height, paddingHorizontal: 6 }, wrapper: { borderRadius: nativeDefault.radii.round, backgroundColor: nativeDefault.colors.BACKGROUND_BASE_LOW, height }, badge: { borderRadius: nativeDefault.radii.round, paddingHorizontal: 8, display: "flex", flexDirection: "row", alignItems: "center", height }, audienceBadge: { backgroundColor: nativeDefault.colors.BACKGROUND_BASE_LOWER } };
  obj2 = { flexDirection: "row", alignItems: "center", marginTop: PX_82 };
  ({ backgroundColor: nativeDefault.colors.BACKGROUND_MOD_STRONG, borderRadius: nativeDefault.radii.round, display: "flex", flexDirection: "row", alignItems: "center", justifyContent: "center", height, paddingHorizontal: 6 });
  ({ borderRadius: nativeDefault.radii.round, backgroundColor: nativeDefault.colors.BACKGROUND_BASE_LOW, height });
  ({ borderRadius: nativeDefault.radii.round, paddingHorizontal: 8, display: "flex", flexDirection: "row", alignItems: "center", height });
  ({ backgroundColor: nativeDefault.colors.BACKGROUND_BASE_LOWER });
  return obj;
});
let ReactCompilerGating = ReactCompilerGating_mod;
let closure_29 = ReactCompilerGating.isReactCompilerEnabled() ? ((arg0) => {
  let audienceCount;
  let closure_3;
  let guildId;
  let isLiveStreaming;
  let items;
  let items2;
  let items3;
  let max;
  let obj5;
  let tmp8;
  let tmpResult;
  let users;
  const tmp2 = dependencyMap;
  let obj = guildId(576);
  const cResult = obj.c(26);
  ({ users, max, guildId } = arg0);
  ({ audienceCount, isLiveStreaming } = arg0);
  let num = 5;
  if (undefined !== max) {
    num = max;
  }
  const bound = Math.max(users.length - num, 0);
  const tmp5 = closure_28(closure_19);
  dependencyMap = tmp5;
  if (0 === users.length) {
    if (null == audienceCount) {
      if (!isLiveStreaming) {
        return null;
      }
    }
  }
  if (cResult[0] === guildId) {
    if (cResult[1] === num) {
      if (cResult[2] === bound) {
        if (cResult[3] === tmp5.overflowCircle) {
          if (cResult[4] === tmp5.wrapper) {
            if (cResult[5] === users) {
              tmp8 = cResult[6];
            }
            if (cResult[13] === audienceCount) {
              if (cResult[14] === tmp5.audienceBadge) {
                if (cResult[15] === tmp5.badge) {
                  if (cResult[16] === tmp5.wrapper) {
                    let tmp11;
                    let tmp18;
                    if (cResult[17] === users.length) {
                      tmp11 = cResult[18];
                    }
                    if (cResult[19] !== isLiveStreaming) {
                      let tmp19 = isLiveStreaming;
                      if (tmp19) {
                        let obj2 = { style: { marginLeft: 4 } };
                        tmp19 = closure_13(guildId(1188).LiveTag, obj2);
                      }
                      cResult[19] = isLiveStreaming;
                      cResult[20] = tmp19;
                      tmp18 = tmp19;
                    } else {
                      tmp18 = cResult[20];
                    }
                    if (cResult[21] === tmp5.container) {
                      if (cResult[22] === tmp8) {
                        if (cResult[23] === tmp11) {
                          let tmp21;
                          if (cResult[24] === tmp18) {
                            tmp21 = cResult[25];
                          }
                          return tmp21;
                        }
                      }
                    }
                    let obj3 = { style: tmp7, children: items };
                    items = [tmp8, tmp11, tmp18];
                    const tmp24 = closure_14(View, obj3);
                    cResult[21] = tmp5.container;
                    cResult[22] = tmp8;
                    cResult[23] = tmp11;
                    cResult[24] = tmp18;
                    cResult[25] = tmp24;
                    tmp21 = tmp24;
                  }
                }
              }
            }
            let tmp14Result = null != audienceCount && audienceCount > 0;
            if (tmp14Result) {
              let items1 = [tmp5.wrapper, ];
              let obj4 = { style: items1, children: closure_14(View, obj5) };
              const tmp16 = users.length > 0 && { marginLeft: 4 };
              items1[1] = tmp16;
              obj5 = { style: items2, children: items3 };
              items2 = [, ];
              ({ badge: arr2[0], audienceBadge: arr2[1] } = tmp5);
              let obj6 = { size: "custom", style: tmpResult.makeSizeStyle(14) };
              const HeadphonesIcon = guildId(12202).HeadphonesIcon;
              tmpResult = guildId(11712);
              items3 = [closure_13(HeadphonesIcon, obj6), ];
              let obj7 = { variant: "text-xs/semibold", style: { marginLeft: 4 }, maxFontSizeMultiplier: 1, children: audienceCount };
              items3[1] = closure_13(guildId(4892).Text, obj7);
              tmp14Result = closure_13(View, obj4);
            }
            cResult[13] = audienceCount;
            cResult[14] = tmp5.audienceBadge;
            cResult[15] = tmp5.badge;
            cResult[16] = tmp5.wrapper;
            cResult[17] = users.length;
            cResult[18] = tmp14Result;
            tmp11 = tmp14Result;
          }
        }
      }
    }
  }
  if (cResult[7] === guildId) {
    if (cResult[8] === num) {
      if (cResult[9] === bound) {
        if (cResult[10] === tmp5.overflowCircle) {
          let tmp9;
          if (cResult[11] === tmp5.wrapper) {
            tmp9 = cResult[12];
          }
          const mapped = users.map(tmp9);
          cResult[0] = guildId;
          cResult[1] = num;
          cResult[2] = bound;
          cResult[3] = tmp5.overflowCircle;
          cResult[4] = tmp5.wrapper;
          cResult[5] = users;
          cResult[6] = mapped;
          tmp8 = mapped;
        }
      }
    }
  }
  const fn = function x(user, arg1) {
    let Text;
    let obj4;
    let obj5;
    let obj7;
    if (arg1 < num) {
      if (arg1 === tmp - 1) {
        let tmp3Result;
        if (bound > 0) {
          const items = [closure_3.wrapper, ];
          const obj2 = 0 !== arg1 && { marginLeft: 4 };
          items[1] = obj2;
          const obj3 = { style: items, children: map1(View, obj4) };
          obj4 = { style: closure_3.overflowCircle, children: map1(Text, obj5) };
          const _HermesInternal = HermesInternal;
          obj5 = { variant: "text-xs/medium", lineClamp: 1, maxFontSizeMultiplier: 1, children: "+" + tmp2 + 1 };
          Text = Text_Text.Text;
          tmp3Result = map1(View, obj3, "overflow");
        }
        return tmp3Result;
      }
      const items1 = [closure_3.wrapper, ];
      const obj = 0 !== arg1 && { marginLeft: 4 };
      items1[1] = obj;
      const obj6 = { style: items1, children: map1(native.Avatar, obj7) };
      obj7 = { user, guildId, size: XSMALL };
      tmp3Result = map1(View, obj6, arg1);
    }
  };
  cResult[7] = guildId;
  cResult[8] = num;
  cResult[9] = bound;
  cResult[10] = tmp5.overflowCircle;
  cResult[11] = tmp5.wrapper;
  cResult[12] = fn;
  tmp9 = fn;
}) : ((arg0) => {
  let audienceCount;
  let closure_3;
  let guildId;
  let isLiveStreaming;
  let items;
  let items2;
  let items3;
  let max;
  let obj3;
  let obj5;
  let tmp4Result;
  let users;
  ({ users, max } = arg0);
  if (max === undefined) {
    max = 5;
  }
  ({ guildId: importDefault, audienceCount, isLiveStreaming } = arg0);
  let closure_2 = Math.max(users.length - max, 0);
  const tmp = closure_28(closure_19);
  dependencyMap = tmp;
  if (0 !== users.length) {
    let obj = { style: tmp.container, children: items };
    items = [
      users.map((user, index) => {
          let Text;
          let obj4;
          let obj5;
          let obj7;
          if (index < max) {
            if (index === tmp - 1) {
              let tmp3Result;
              if (closure_2 > 0) {
                const items = [closure_3.wrapper, ];
                const obj2 = 0 !== index && { marginLeft: 4 };
                items[1] = obj2;
                const obj3 = { style: items, children: map1(View, obj4) };
                obj4 = { style: closure_3.overflowCircle, children: map1(Text, obj5) };
                const _HermesInternal = HermesInternal;
                obj5 = { variant: "text-xs/medium", lineClamp: 1, maxFontSizeMultiplier: 1, children: "+" + tmp2 + 1 };
                Text = Text_Text.Text;
                tmp3Result = map1(View, obj3, "overflow");
              }
              return tmp3Result;
            }
            const items1 = [closure_3.wrapper, ];
            const obj = 0 !== index && { marginLeft: 4 };
            items1[1] = obj;
            const obj6 = { style: items1, children: map1(native.Avatar, obj7) };
            obj7 = { user, guildId: importDefault, size: XSMALL };
            tmp3Result = map1(View, obj6, index);
          }
        }),
  ,

    ];
    let tmp8Result = null != audienceCount && audienceCount > 0;
    if (tmp8Result) {
      let items1 = [tmp.wrapper, ];
      let obj2 = { style: items1, children: closure_14(View, obj3) };
      const tmp9 = users.length > 0 && { marginLeft: 4 };
      items1[1] = tmp9;
      obj3 = { style: items2, children: items3 };
      items2 = [, ];
      ({ badge: arr3[0], audienceBadge: arr3[1] } = tmp);
      let obj4 = { size: "custom", style: obj5.makeSizeStyle(14) };
      const HeadphonesIcon = max(12202).HeadphonesIcon;
      obj5 = max(11712);
      items3 = [closure_13(HeadphonesIcon, obj4), ];
      let obj6 = { variant: "text-xs/semibold", style: { marginLeft: 4 }, maxFontSizeMultiplier: 1, children: audienceCount };
      items3[1] = closure_13(max(4892).Text, obj6);
      tmp8Result = closure_13(View, obj2);
    }
    items[1] = tmp8Result;
    if (isLiveStreaming) {
      let obj7 = { style: { marginLeft: 4 } };
      isLiveStreaming = closure_13(max(1188).LiveTag, obj7);
    }
    items[2] = isLiveStreaming;
    tmp4Result = closure_14(View, obj);
  } else {
    const tmp2 = null;
    if (null == audienceCount) {
      tmp4Result = null;
    }
  }
  return tmp4Result;
});
createStyles = createStyles_mod;
let obj4 = { card: { padding: PX_122 }, row: { flexDirection: "row", alignItems: "center" }, infoRow: { marginTop: PX_4 }, liveNowIcon: { marginEnd: 4 }, uppercase: { textTransform: "uppercase" }, headingText: { marginTop: num }, liveDot: size, calendarIcon: { marginRight: 7 }, topic: { marginTop: PX_82 }, button: { marginTop: PX_82 } };
createStyles = createStyles.createStyles;
num = 0;
if (PlatformUtils.isAndroid()) {
  num = -2;
}
size = { width: 7, height: 7, marginRight: 7, backgroundColor: nativeDefault.colors.STATUS_POSITIVE, borderRadius: nativeDefault.radii.xs };
let closure_30 = createStyles(obj4);
ReactCompilerGating = ReactCompilerGating_mod;
let closure_31 = ReactCompilerGating.isReactCompilerEnabled() ? ((arg0) => {
  let guildVoice;
  let tmp2;
  _require = arg0;
  const obj = require("react");
  const cResult = obj.c(2);
  if (cResult[0] !== arg0) {
    const fn = function t() {
      if (null != guildVoice) {
        const obj2 = KeyboardManagerUtilsAll;
        const result = obj2.dismissGlobalKeyboard();
        if (guildVoice.isGuildVoice()) {
          const tmp4Result = PrivateChannelCallUtils;
          tmp4Result.openGuildVoiceModal(guildVoice);
        } else {
          const tmp4Result2 = StageChannelModalActionCreators;
          tmp4Result2.connectAndOpen(guildVoice);
        }
      }
    };
    cResult[0] = arg0;
    cResult[1] = fn;
    tmp2 = fn;
  } else {
    tmp2 = cResult[1];
  }
  return tmp2;
}) : ((arg0) => {
  const guildVoice = arg0;
  const items = [arg0];
  return react.useCallback(() => {
    if (null != guildVoice) {
      const obj2 = KeyboardManagerUtilsAll;
      const result = obj2.dismissGlobalKeyboard();
      if (guildVoice.isGuildVoice()) {
        const tmp4Result = PrivateChannelCallUtils;
        tmp4Result.openGuildVoiceModal(guildVoice);
      } else {
        const tmp4Result2 = StageChannelModalActionCreators;
        tmp4Result2.connectAndOpen(guildVoice);
      }
    }
  }, items);
});
ReactCompilerGating = ReactCompilerGating_mod;
let closure_32 = ReactCompilerGating.isReactCompilerEnabled() ? ((channel) => {
  let disabled;
  let label;
  const obj = react2;
  const cResult = obj.c(8);
  ({ label, disabled } = channel);
  let tmp4 = undefined !== disabled;
  channel = channel.channel;
  if (tmp4) {
    tmp4 = disabled;
  }
  const tmp5 = closure_30();
  const tmp6 = useThemeDefault();
  const tmp7 = useIsUsingClientThemeDefault();
  const tmp8 = closure_31(channel);
  let str = "tertiary";
  const tmpResult = shared;
  if (tmpResult.isThemeLight(tmp6)) {
    str = "tertiary";
    if (!tmp7) {
      str = "active";
    }
  }
  if (cResult[0] === tmp4) {
    if (cResult[1] === tmp8) {
      if (cResult[2] === label) {
        let tmp9;
        if (cResult[3] === str) {
          tmp9 = cResult[4];
        }
        if (cResult[5] === tmp5.button) {
          let tmp11;
          if (cResult[6] === tmp9) {
            tmp11 = cResult[7];
          }
          return tmp11;
        }
        const obj2 = { style: tmp5.button, children: tmp9 };
        const tmp14 = map1(View, obj2);
        cResult[5] = tmp5.button;
        cResult[6] = tmp9;
        cResult[7] = tmp14;
        tmp11 = tmp14;
      }
    }
  }
  const tmp10 = map1(components_Button_Button.Button, { onPress: tmp8, variant: str, size: "sm", disabled: tmp4, text: label });
  cResult[0] = tmp4;
  cResult[1] = tmp8;
  cResult[2] = label;
  cResult[3] = str;
  cResult[4] = tmp10;
  tmp9 = tmp10;
}) : ((disabled) => {
  let Button;
  let channel;
  let label;
  let obj2;
  let str;
  let flag = disabled.disabled;
  ({ channel, label } = disabled);
  if (flag === undefined) {
    flag = false;
  }
  const tmp = closure_30();
  const tmp2 = useThemeDefault();
  const obj = { style: tmp.button, children: map1(Button, obj2) };
  const tmp3 = useIsUsingClientThemeDefault();
  obj2 = { onPress: closure_31(channel), variant: str, size: "sm", disabled: flag, text: label };
  Button = components_Button_Button.Button;
  str = "tertiary";
  const obj3 = shared;
  if (obj3.isThemeLight(tmp2)) {
    str = "tertiary";
    if (!tmp3) {
      str = "active";
    }
  }
  return map1(View, obj);
});
const memo = react.memo;
ReactCompilerGating = ReactCompilerGating_mod;
let closure_33 = memo(ReactCompilerGating.isReactCompilerEnabled() ? ((arg0) => {
  let LiveIcon;
  let LocationIcon;
  let _location;
  let heading;
  let isLiveStreaming;
  let items;
  let items3;
  let joinButton;
  let obj7;
  let tmp8;
  let topic;
  let voiceUsers;
  const obj = react2;
  const cResult = obj.c(34);
  ({ heading, location: _location, LocationIcon, topic, isLiveStreaming, LiveIcon, voiceUsers, joinButton } = arg0);
  const tmp4 = closure_30();
  if (cResult[0] === LiveIcon) {
    if (cResult[1] === tmp4.calendarIcon) {
      let tmp5;
      if (cResult[2] === tmp4.liveDot) {
        tmp5 = cResult[3];
      }
      const tmp10 = isLiveStreaming ? c22 : c21;
      if (isLiveStreaming) {
        isLiveStreaming = tmp4.uppercase;
      }
      if (cResult[4] === tmp4.headingText) {
        let tmp11;
        if (cResult[5] === isLiveStreaming) {
          tmp11 = cResult[6];
        }
        if (cResult[7] === heading) {
          if (cResult[8] === tmp10) {
            let tmp12;
            if (cResult[9] === tmp11) {
              tmp12 = cResult[10];
            }
            if (cResult[11] === tmp4.row) {
              if (cResult[12] === tmp5) {
                let tmp15;
                if (cResult[13] === tmp12) {
                  tmp15 = cResult[14];
                }
                if (cResult[15] === tmp4.topic) {
                  let tmp19;
                  if (cResult[16] === topic) {
                    tmp19 = cResult[17];
                  }
                  if (cResult[18] === tmp4.infoRow) {
                    let tmp23;
                    if (cResult[19] === tmp4.row) {
                      tmp23 = cResult[20];
                    }
                    if (cResult[21] === LocationIcon) {
                      if (cResult[22] === _location) {
                        let tmp24;
                        if (cResult[23] === tmp4.liveNowIcon) {
                          tmp24 = cResult[24];
                        }
                        if (cResult[25] === tmp23) {
                          let tmp33;
                          if (cResult[26] === tmp24) {
                            tmp33 = cResult[27];
                          }
                          if (cResult[28] === joinButton) {
                            if (cResult[29] === tmp33) {
                              if (cResult[30] === tmp15) {
                                if (cResult[31] === tmp19) {
                                  let tmp37;
                                  if (cResult[32] === voiceUsers) {
                                    tmp37 = cResult[33];
                                  }
                                  return tmp37;
                                }
                              }
                            }
                          }
                          const obj2 = { children: items };
                          items = [tmp15, voiceUsers, tmp19, tmp33, joinButton];
                          const tmp40 = authStore2(View, obj2);
                          cResult[28] = joinButton;
                          cResult[29] = tmp33;
                          cResult[30] = tmp15;
                          cResult[31] = tmp19;
                          cResult[32] = voiceUsers;
                          cResult[33] = tmp40;
                          tmp37 = tmp40;
                        }
                        const obj3 = { style: tmp23, children: tmp24 };
                        const tmp36 = map1(View, obj3);
                        cResult[25] = tmp23;
                        cResult[26] = tmp24;
                        cResult[27] = tmp36;
                        tmp33 = tmp36;
                      }
                    }
                    let tmp27Result = null != _location;
                    if (tmp27Result) {
                      let tmp29 = null != LocationIcon;
                      if (tmp29) {
                        const obj4 = { style: tmp4.liveNowIcon, size: "xxs", color: "redesign-channel-name-muted-text" };
                        tmp29 = map1(LocationIcon, obj4);
                      }
                      const items1 = [tmp29, ];
                      const obj5 = { lineClamp: 1, variant: variant2, color: "redesign-channel-name-muted-text", style: obj7, children: _location };
                      const Text = Text_Text.Text;
                      let num18 = 0;
                      const tmpResult = PlatformUtils;
                      if (tmpResult.isAndroid()) {
                        num18 = -2;
                      }
                      const obj6 = { children: items1 };
                      obj7 = { marginTop: num18, flexShrink: 1 };
                      items1[1] = map1(Text, obj5);
                      tmp27Result = authStore2(closure_15, obj6);
                    }
                    cResult[21] = LocationIcon;
                    cResult[22] = _location;
                    cResult[23] = tmp4.liveNowIcon;
                    cResult[24] = tmp27Result;
                    tmp24 = tmp27Result;
                  }
                  const items2 = [, ];
                  ({ row: arr3[0], infoRow: arr3[1] } = tmp4);
                  cResult[18] = tmp4.infoRow;
                  cResult[19] = tmp4.row;
                  cResult[20] = items2;
                  tmp23 = items2;
                }
                const obj8 = { style: tmp4.topic, lineClamp: 1, variant, color: "redesign-channel-name-text", children: topic };
                const tmp22 = map1(Text_Text.Text, obj8);
                cResult[15] = tmp4.topic;
                cResult[16] = topic;
                cResult[17] = tmp22;
                tmp19 = tmp22;
              }
            }
            const obj9 = { style: tmp4.row, children: items3 };
            items3 = [tmp5, tmp12];
            const tmp18 = authStore2(View, obj9);
            cResult[11] = tmp4.row;
            cResult[12] = tmp5;
            cResult[13] = tmp12;
            cResult[14] = tmp18;
            tmp15 = tmp18;
          }
        }
        const obj10 = { variant: tmp10, color: "status-positive", style: tmp11, children: heading };
        const tmp14 = map1(Text_Text.Text, obj10);
        cResult[7] = heading;
        cResult[8] = tmp10;
        cResult[9] = tmp11;
        cResult[10] = tmp14;
        tmp12 = tmp14;
      }
      const items4 = [tmp4.headingText, isLiveStreaming];
      cResult[4] = tmp4.headingText;
      cResult[5] = isLiveStreaming;
      cResult[6] = items4;
      tmp11 = items4;
    }
  }
  if (null != LiveIcon) {
    const obj11 = { size: "xxs", color: "status-positive", style: tmp4.calendarIcon };
    tmp8 = map1(LiveIcon, obj11);
  } else {
    const obj12 = { style: tmp4.liveDot };
    tmp8 = map1(View, obj12);
  }
  cResult[0] = LiveIcon;
  cResult[1] = tmp4.calendarIcon;
  cResult[2] = tmp4.liveDot;
  cResult[3] = tmp8;
  tmp5 = tmp8;
}) : ((arg0) => {
  let LiveIcon;
  let LocationIcon;
  let _location;
  let heading;
  let isLiveStreaming;
  let items;
  let items1;
  let items3;
  let joinButton;
  let obj10;
  let tmp2Result;
  let tmp4;
  let tmp5;
  let topic;
  let voiceUsers;
  ({ location: _location, LocationIcon, isLiveStreaming, LiveIcon } = arg0);
  ({ heading, topic, voiceUsers, joinButton } = arg0);
  const tmp = closure_30();
  const obj = { style: tmp.row, children: items };
  if (null != LiveIcon) {
    const obj2 = { size: "xxs", color: "status-positive", style: tmp.calendarIcon };
    tmp5 = map1(LiveIcon, obj2);
    tmp4 = map1;
  } else {
    tmp4 = map1;
    const obj3 = { style: tmp.liveDot };
    tmp5 = map1(View, obj3);
  }
  items = [tmp5, ];
  const obj4 = { variant: isLiveStreaming ? c22 : c21, color: "status-positive", style: items1, children: heading };
  items1 = [tmp.headingText, ];
  const Text = Text_Text.Text;
  if (isLiveStreaming) {
    isLiveStreaming = tmp.uppercase;
  }
  items1[1] = isLiveStreaming;
  items[1] = tmp4(Text, obj4);
  const items2 = [authStore2(View, obj), voiceUsers, , , ];
  const obj5 = { style: tmp.topic, lineClamp: 1, variant, color: "redesign-channel-name-text", children: topic };
  items2[2] = tmp4(Text_Text.Text, obj5);
  const obj6 = { style: items3, children: tmp2Result };
  items3 = [, ];
  ({ row: arr4[0], infoRow: arr4[1] } = tmp);
  tmp2Result = null != _location;
  if (tmp2Result) {
    let tmp4Result = null != LocationIcon;
    if (tmp4Result) {
      const obj7 = { style: tmp.liveNowIcon, size: "xxs", color: "redesign-channel-name-muted-text" };
      tmp4Result = tmp4(LocationIcon, obj7);
    }
    const items4 = [tmp4Result, ];
    const obj8 = { lineClamp: 1, variant: variant2, color: "redesign-channel-name-muted-text", style: obj10, children: _location };
    const Text2 = Text_Text.Text;
    let num = 0;
    const tmp7Result = PlatformUtils;
    if (tmp7Result.isAndroid()) {
      num = -2;
    }
    obj10 = { marginTop: num, flexShrink: 1 };
    const obj9 = { children: items4 };
    items4[1] = tmp4(Text2, obj8);
    tmp2Result = authStore2(closure_15, obj9);
  }
  const obj11 = { children: items2 };
  items2[3] = tmp4(View, obj6);
  items2[4] = joinButton;
  return authStore2(View, obj11);
}));
ReactCompilerGating = ReactCompilerGating_mod;
let closure_34 = ReactCompilerGating.isReactCompilerEnabled() ? ((arg0) => {
  let channel;
  let first;
  let guildEvent;
  let intl2;
  let tmp11;
  let tmp13;
  let tmp15;
  let tmp17;
  let tmp19;
  let tmp7;
  let tmp9;
  const obj = channel(576);
  const cResult = obj.c(25);
  ({ guildEvent, channel } = arg0);
  const tmp4 = useChannelNameDefault(channel);
  if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
    const items = [SortedVoiceStateStore];
    cResult[0] = items;
    first = items;
  } else {
    first = cResult[0];
  }
  if (cResult[1] !== channel) {
    const fn = function l() {
      const voiceStatesForChannel = SortedVoiceStateStore.getVoiceStatesForChannel(channel);
      return voiceStatesForChannel.map((user) => user.user);
    };
    cResult[1] = channel;
    cResult[2] = fn;
    tmp7 = fn;
  } else {
    tmp7 = cResult[2];
  }
  const tmpResult = channel(504);
  const stateFromStoresArray = tmpResult.useStateFromStoresArray(first, tmp7);
  if (cResult[3] === Symbol.for("react.memo_cache_sentinel")) {
    const items1 = [PermissionStore];
    cResult[3] = items1;
    tmp9 = items1;
  } else {
    tmp9 = cResult[3];
  }
  if (cResult[4] !== channel) {
    const fn2 = function y() {
      return PermissionStore.can(Permissions.CONNECT, channel);
    };
    cResult[4] = channel;
    cResult[5] = fn2;
    tmp11 = fn2;
  } else {
    tmp11 = cResult[5];
  }
  const tmpResult4 = channel(504);
  const stateFromStores = tmpResult4.useStateFromStores(tmp9, tmp11);
  if (cResult[6] === Symbol.for("react.memo_cache_sentinel")) {
    const items2 = [ApplicationStreamingStore];
    cResult[6] = items2;
    tmp13 = items2;
  } else {
    tmp13 = cResult[6];
  }
  if (cResult[7] !== channel.id) {
    const fn3 = function b() {
      return ApplicationStreamingStore.getAllApplicationStreamsForChannel(channel.id).length > 0;
    };
    cResult[7] = channel.id;
    cResult[8] = fn3;
    tmp15 = fn3;
  } else {
    tmp15 = cResult[8];
  }
  const tmpResult5 = channel(504);
  const stateFromStores1 = tmpResult5.useStateFromStores(tmp13, tmp15);
  if (cResult[9] === Symbol.for("react.memo_cache_sentinel")) {
    const intl = channel(1126).intl;
    const stringResult = intl.string(channel(1126).t["X2K3/4"]);
    cResult[9] = stringResult;
    tmp17 = stringResult;
  } else {
    tmp17 = cResult[9];
  }
  const name = guildEvent.name;
  if (cResult[10] !== channel) {
    const tmpResult6 = channel(5819);
    const channelIconComponent = tmpResult6.getChannelIconComponent(channel);
    cResult[10] = channel;
    cResult[11] = channelIconComponent;
    tmp19 = channelIconComponent;
  } else {
    tmp19 = cResult[11];
  }
  if (cResult[12] === channel.guild_id) {
    if (cResult[13] === stateFromStores1) {
      let tmp21;
      if (cResult[14] === stateFromStoresArray) {
        tmp21 = cResult[15];
      }
      if (cResult[16] === stateFromStores) {
        let tmp23;
        if (cResult[17] === channel) {
          tmp23 = cResult[18];
        }
        if (cResult[19] === tmp4) {
          if (cResult[20] === guildEvent.name) {
            if (cResult[21] === tmp21) {
              if (cResult[22] === tmp23) {
                let tmp27;
                if (cResult[23] === tmp19) {
                  tmp27 = cResult[24];
                }
                return tmp27;
              }
            }
          }
        }
        const obj2 = { heading: tmp17, topic: name, location: tmp4, LocationIcon: tmp19, LiveIcon: channel(9310).CalendarIcon, voiceUsers: tmp21, joinButton: tmp23 };
        const tmp30 = closure_13(closure_33, obj2);
        cResult[19] = tmp4;
        cResult[20] = guildEvent.name;
        cResult[21] = tmp21;
        cResult[22] = tmp23;
        cResult[23] = tmp19;
        cResult[24] = tmp30;
        tmp27 = tmp30;
      }
      let tmp24;
      if (stateFromStores) {
        const obj3 = { channel, label: intl2.string(channel(1126).t.VJlc0S) };
        intl2 = channel(1126).intl;
        tmp24 = closure_13(closure_32, obj3);
      }
      cResult[16] = stateFromStores;
      cResult[17] = channel;
      cResult[18] = tmp24;
      tmp23 = tmp24;
    }
  }
  const obj4 = { guildId: channel.guild_id, users: stateFromStoresArray, isLiveStreaming: stateFromStores1 };
  const tmp22 = closure_13(closure_29, obj4);
  cResult[12] = channel.guild_id;
  cResult[13] = stateFromStores1;
  cResult[14] = stateFromStoresArray;
  cResult[15] = tmp22;
  tmp21 = tmp22;
}) : ((channel) => {
  let intl;
  let intl2;
  let obj5;
  let obj6;
  let tmp7Result;
  channel = channel.channel;
  const guildEvent = channel.guildEvent;
  const items = [SortedVoiceStateStore];
  const tmp2 = useChannelNameDefault(channel);
  const obj = channel(504);
  const stateFromStoresArray = obj.useStateFromStoresArray(items, () => {
    const voiceStatesForChannel = SortedVoiceStateStore.getVoiceStatesForChannel(channel);
    return voiceStatesForChannel.map((user) => user.user);
  });
  const items1 = [PermissionStore];
  const obj2 = channel(504);
  const stateFromStores = obj2.useStateFromStores(items1, () => PermissionStore.can(Permissions.CONNECT, channel));
  const items2 = [ApplicationStreamingStore];
  const obj4 = { heading: intl.string(channel(1126).t["X2K3/4"]), topic: guildEvent.name, location: tmp2, LocationIcon: obj5.getChannelIconComponent(channel), LiveIcon: channel(9310).CalendarIcon, voiceUsers: closure_13(closure_29, obj6), joinButton: tmp7Result };
  const obj3 = channel(504);
  const stateFromStores1 = obj3.useStateFromStores(items2, () => ApplicationStreamingStore.getAllApplicationStreamsForChannel(channel.id).length > 0);
  intl = channel(1126).intl;
  tmp7Result = undefined;
  obj5 = channel(5819);
  obj6 = { guildId: channel.guild_id, users: stateFromStoresArray, isLiveStreaming: stateFromStores1 };
  if (stateFromStores) {
    const obj7 = { channel, label: intl2.string(channel(1126).t.VJlc0S) };
    intl2 = tmp3(1126).intl;
    tmp7Result = closure_13(closure_32, obj7);
  }
  return closure_13(closure_33, obj4);
});
ReactCompilerGating = ReactCompilerGating_mod;
let closure_35 = ReactCompilerGating.isReactCompilerEnabled() ? ((guildEvent) => {
  let tmp4;
  let tmp5;
  let tmp6;
  let tmp7;
  let tmp8;
  const obj = react2;
  const cResult = obj.c(15);
  guildEvent = guildEvent.guildEvent;
  if (cResult[0] !== guildEvent) {
    const _Symbol = Symbol;
    const forResult = Symbol.for("react.early_return_sentinel");
    const tmpResult = EntityUtils;
    const locationFromEvent = tmpResult.getLocationFromEvent(guildEvent);
    let tmp12 = null;
    let tmp13;
    let name;
    let tmp15;
    let tmp16;
    if (null != locationFromEvent) {
      let tmp18;
      const _Symbol2 = Symbol;
      if (cResult[6] === Symbol.for("react.memo_cache_sentinel")) {
        const intl = intl3.intl;
        const stringResult = intl.string(intl3.t.TxqPQR);
        cResult[6] = stringResult;
        tmp18 = stringResult;
      } else {
        tmp18 = cResult[6];
      }
      name = guildEvent.name;
      tmp13 = closure_27(locationFromEvent, true);
      tmp15 = tmp18;
      tmp12 = forResult;
      tmp16 = closure_33;
    }
    cResult[0] = guildEvent;
    cResult[1] = tmp16;
    cResult[2] = tmp15;
    cResult[3] = name;
    cResult[4] = tmp13;
    cResult[5] = tmp12;
    tmp8 = tmp12;
    tmp7 = tmp13;
    tmp6 = name;
    tmp5 = tmp15;
    tmp4 = tmp16;
  } else {
    tmp4 = cResult[1];
    tmp5 = cResult[2];
    tmp6 = cResult[3];
    tmp7 = cResult[4];
    tmp8 = cResult[5];
  }
  if (tmp8 === Symbol.for("react.early_return_sentinel")) {
    let tmp21;
    if (cResult[7] !== guildEvent) {
      const obj2 = { guildEvent };
      const tmp24 = map1(closure_36, obj2);
      cResult[7] = guildEvent;
      cResult[8] = tmp24;
      tmp21 = tmp24;
    } else {
      tmp21 = cResult[8];
    }
    if (cResult[9] === tmp4) {
      if (cResult[10] === tmp5) {
        if (cResult[11] === tmp6) {
          if (cResult[12] === tmp7) {
            let tmp25;
            if (cResult[13] === tmp21) {
              tmp25 = cResult[14];
            }
            tmp8 = tmp25;
          }
        }
      }
    }
    const obj3 = { heading: tmp5, topic: tmp6, location: tmp7, LocationIcon: LocationIcon.LocationIcon, LiveIcon: CalendarIcon.CalendarIcon, joinButton: tmp21 };
    const tmp27 = map1(tmp4, obj3);
    cResult[9] = tmp4;
    cResult[10] = tmp5;
    cResult[11] = tmp6;
    cResult[12] = tmp7;
    cResult[13] = tmp21;
    cResult[14] = tmp27;
    tmp25 = tmp27;
  }
  return tmp8;
}) : ((guildEvent) => {
  let intl;
  let obj3;
  guildEvent = guildEvent.guildEvent;
  const obj = EntityUtils;
  const locationFromEvent = obj.getLocationFromEvent(guildEvent);
  let tmp4 = null;
  if (null != locationFromEvent) {
    const obj2 = { heading: intl.string(intl3.t.TxqPQR), topic: guildEvent.name, location: closure_27(locationFromEvent, true), LocationIcon: LocationIcon.LocationIcon, LiveIcon: CalendarIcon.CalendarIcon, joinButton: map1(closure_36, obj3) };
    intl = intl3.intl;
    obj3 = { guildEvent };
    tmp4 = map1(closure_33, obj2);
  }
  return tmp4;
});
ReactCompilerGating = ReactCompilerGating_mod;
let closure_36 = ReactCompilerGating.isReactCompilerEnabled() ? ((guildEvent) => {
  let tmp5;
  let tmp6;
  let tmp8;
  let obj = guildEvent(576);
  const cResult = obj.c(8);
  guildEvent = guildEvent.guildEvent;
  const tmp4 = closure_30();
  if (cResult[0] !== guildEvent) {
    const fn = function t() {
      const obj = guild_scheduled_events_GuildScheduledEventModalActionCreators;
      const obj2 = { eventId: guildEvent.id, event: guildEvent };
      const result = obj.openGuildEventDetails(obj2);
    };
    cResult[0] = guildEvent;
    cResult[1] = fn;
    tmp5 = fn;
  } else {
    tmp5 = cResult[1];
  }
  const button = tmp4.button;
  if (cResult[2] === Symbol.for("react.memo_cache_sentinel")) {
    const intl = tmp(1126).intl;
    const stringResult = intl.string(guildEvent(1126).t.z4FcDs);
    cResult[2] = stringResult;
    tmp6 = stringResult;
  } else {
    tmp6 = cResult[2];
  }
  if (cResult[3] !== tmp5) {
    let obj2 = { onPress: tmp5, variant: "active", size: "sm", text: tmp6 };
    const tmp10 = closure_13(guildEvent(5601).Button, obj2);
    cResult[3] = tmp5;
    cResult[4] = tmp10;
    tmp8 = tmp10;
  } else {
    tmp8 = cResult[4];
  }
  if (cResult[5] === tmp4.button) {
    let tmp11;
    if (cResult[6] === tmp8) {
      tmp11 = cResult[7];
    }
    return tmp11;
  }
  const tmp12 = closure_13(View, { style: button, children: tmp8 });
  cResult[5] = tmp4.button;
  cResult[6] = tmp8;
  cResult[7] = tmp12;
  tmp11 = tmp12;
}) : ((guildEvent) => {
  let Button;
  let intl;
  let obj2;
  guildEvent = guildEvent.guildEvent;
  const items = [guildEvent];
  let obj = { style: closure_30().button, children: closure_13(Button, obj2) };
  closure_30();
  const callback = react.useCallback(() => {
    const obj = guild_scheduled_events_GuildScheduledEventModalActionCreators;
    const obj2 = { eventId: guildEvent.id, event: guildEvent };
    const result = obj.openGuildEventDetails(obj2);
  }, items);
  obj2 = { onPress: callback, variant: "active", size: "sm", text: intl.string(guildEvent(1126).t.z4FcDs) };
  Button = guildEvent(5601).Button;
  intl = guildEvent(1126).intl;
  return closure_13(View, obj);
});
ReactCompilerGating = ReactCompilerGating_mod;
let closure_37 = ReactCompilerGating.isReactCompilerEnabled() ? ((arg0) => {
  let channel;
  let stageInstance;
  let tmp10;
  let tmp12;
  let tmp13;
  let tmp15;
  let tmp5;
  const obj = channel(576);
  const cResult = obj.c(30);
  ({ stageInstance, channel } = arg0);
  useChannelNameDefault(channel);
  const obj2 = channel(5595);
  const stageParticipants = obj2.useStageParticipants(channel.id, channel(5589).StageChannelParticipantNamedIndex.SPEAKER);
  if (cResult[0] !== stageParticipants) {
    let tmp7;
    let tmp8;
    const _Symbol = Symbol;
    if (cResult[2] === Symbol.for("react.memo_cache_sentinel")) {
      const fn = function l(type) {
        return type.type === channel(dependencyMap[40]).StageChannelParticipantTypes.VOICE;
      };
      cResult[2] = fn;
      tmp7 = fn;
    } else {
      tmp7 = cResult[2];
    }
    const _Symbol2 = Symbol;
    if (cResult[3] === Symbol.for("react.memo_cache_sentinel")) {
      const fn2 = function c(user) {
        return user.user;
      };
      cResult[3] = fn2;
      tmp8 = fn2;
    } else {
      tmp8 = cResult[3];
    }
    const found = stageParticipants.filter(tmp7);
    const mapped = found.map(tmp8);
    cResult[0] = stageParticipants;
    cResult[1] = mapped;
    tmp5 = mapped;
  } else {
    tmp5 = cResult[1];
  }
  if (cResult[4] === Symbol.for("react.memo_cache_sentinel")) {
    const items = [StageChannelParticipantStore];
    cResult[4] = items;
    tmp10 = items;
  } else {
    tmp10 = cResult[4];
  }
  if (cResult[5] !== channel.id) {
    const fn3 = function x() {
      return StageChannelParticipantStore.getParticipantCount(channel.id, StageChannelParticipants.StageChannelParticipantNamedIndex.AUDIENCE);
    };
    const items1 = [channel.id];
    cResult[5] = channel.id;
    cResult[6] = fn3;
    cResult[7] = items1;
    tmp13 = items1;
    tmp12 = fn3;
  } else {
    tmp12 = cResult[6];
    tmp13 = cResult[7];
  }
  const tmpResult = channel(504);
  const stateFromStores = tmpResult.useStateFromStores(tmp10, tmp12, tmp13);
  if (cResult[8] === Symbol.for("react.memo_cache_sentinel")) {
    const items2 = [PermissionStore];
    cResult[8] = items2;
    tmp15 = items2;
  } else {
    tmp15 = cResult[8];
  }
  if (cResult[9] !== channel) {
    class L {
      constructor() {
        return PermissionStore.can(Permissions.CONNECT, channel);
      }
    }
    cResult[9] = channel;
    cResult[10] = L;
  } else {
    class L {
      constructor() {
        return PermissionStore.can(Permissions.CONNECT, channel);
      }
    }
  }
  const tmpResult4 = channel(504);
  const stateFromStores1 = tmpResult4.useStateFromStores(tmp15, L);
  const tmpResult5 = channel(5581);
  const stageHasStream = tmpResult5.useStageHasStream(channel.id);
  const tmpResult6 = channel(9195);
  const guildActiveEvent = tmpResult6.useGuildActiveEvent(channel.guild_id);
  if (cResult[11] === Symbol.for("react.memo_cache_sentinel")) {
    class L {
      constructor() {
        return PermissionStore.can(Permissions.CONNECT, channel);
      }
    }
    cResult[11] = obj7.string(channel(1126).t["X2K3/4"]);
    const stringResult = obj7.string(channel(1126).t["X2K3/4"]);
  } else {
    class L {
      constructor() {
        return PermissionStore.can(Permissions.CONNECT, channel);
      }
    }
  }
  if (cResult[12] === channel) {
    class L {
      constructor() {
        return PermissionStore.can(Permissions.CONNECT, channel);
      }
    }
    if (null != guildActiveEvent) {
      class L {
        constructor() {
          return PermissionStore.can(Permissions.CONNECT, channel);
        }
      }
    } else {
      class L {
        constructor() {
          return PermissionStore.can(Permissions.CONNECT, channel);
        }
      }
    }
    if (cResult[15] === channel.guild_id) {
      class L {
        constructor() {
          return PermissionStore.can(Permissions.CONNECT, channel);
        }
      }
    }
    const obj3 = { guildId: channel.guild_id, users: tmp5, isLiveStreaming: stageHasStream, audienceCount: stateFromStores };
    cResult[15] = channel.guild_id;
    cResult[16] = stageHasStream;
    cResult[17] = stateFromStores;
    cResult[18] = tmp5;
    cResult[19] = closure_13(closure_29, obj3);
    const tmp28 = closure_13(closure_29, obj3);
  }
  let channelIconComponent;
  if (null != guildActiveEvent) {
    class L {
      constructor() {
        return PermissionStore.can(Permissions.CONNECT, channel);
      }
    }
    channelIconComponent = obj8.getChannelIconComponent(channel);
  }
  cResult[12] = channel;
  cResult[13] = guildActiveEvent;
  cResult[14] = channelIconComponent;
}) : ((channel) => {
  let StageIcon;
  let channelIconComponent;
  let intl;
  let intl2;
  let obj7;
  let tmp9Result;
  channel = channel.channel;
  const stageInstance = channel.stageInstance;
  const tmp2 = useChannelNameDefault(channel);
  const obj = channel(5595);
  const stageParticipants = obj.useStageParticipants(channel.id, channel(5589).StageChannelParticipantNamedIndex.SPEAKER);
  const found = stageParticipants.filter((type) => type.type === channel(dependencyMap[40]).StageChannelParticipantTypes.VOICE);
  const mapped = found.map((user) => user.user);
  const items = [StageChannelParticipantStore];
  const items1 = [channel.id];
  const obj2 = channel(504);
  const stateFromStores = obj2.useStateFromStores(items, () => StageChannelParticipantStore.getParticipantCount(channel.id, StageChannelParticipants.StageChannelParticipantNamedIndex.AUDIENCE), items1);
  const items2 = [PermissionStore];
  const obj3 = channel(504);
  const stateFromStores1 = obj3.useStateFromStores(items2, () => PermissionStore.can(Permissions.CONNECT, channel));
  const obj4 = channel(5581);
  const stageHasStream = obj4.useStageHasStream(channel.id);
  const obj5 = channel(9195);
  const guildActiveEvent = obj5.useGuildActiveEvent(channel.guild_id);
  const obj6 = { heading: intl.string(channel(1126).t["X2K3/4"]), location: tmp2, LocationIcon: channelIconComponent, LiveIcon: StageIcon, topic: stageInstance.topic, voiceUsers: closure_13(closure_29, obj7), joinButton: tmp9Result };
  intl = channel(1126).intl;
  channelIconComponent = undefined;
  if (null != guildActiveEvent) {
    const tmp3Result = channel(5819);
    channelIconComponent = tmp3Result.getChannelIconComponent(channel);
  }
  if (null != guildActiveEvent) {
    StageIcon = tmp3(9310).CalendarIcon;
  } else {
    StageIcon = tmp3(5888).StageIcon;
  }
  tmp9Result = undefined;
  obj7 = { guildId: channel.guild_id, users: mapped, isLiveStreaming: stageHasStream, audienceCount: stateFromStores };
  if (stateFromStores1) {
    const obj8 = { channel, label: intl2.string(channel(1126).t["7vb2cc"]) };
    intl2 = tmp3(1126).intl;
    tmp9Result = closure_13(closure_32, obj8);
  }
  return closure_13(closure_33, obj6);
});
const memoResult = react.memo((guild) => {
  let items3;
  let tmp13;
  guild = guild.guild;
  let activeEventOrStageInstanceChannel;
  const style = guild.style;
  const tmp = closure_30();
  let obj = activeEventOrStageInstanceChannel(16151);
  const tmp2 = activeEventOrStageInstanceChannel;
  activeEventOrStageInstanceChannel = obj.useActiveEventOrStageInstanceChannel(guild.id);
  let obj2 = activeEventOrStageInstanceChannel(9195);
  const guildActiveEvent = obj2.useGuildActiveEvent(guild.id);
  let obj3 = activeEventOrStageInstanceChannel(504);
  const items = [StageInstanceStore];
  const items1 = [activeEventOrStageInstanceChannel];
  const stateFromStores = obj3.useStateFromStores(items, () => {
    let id;
    const getStageInstanceByChannel = StageInstanceStore.getStageInstanceByChannel;
    if (activeEventOrStageInstanceChannel != null) {
      id = activeEventOrStageInstanceChannel.id;
    }
    return getStageInstanceByChannel(id);
  }, items1);
  let id;
  const tmp7 = closure_31(activeEventOrStageInstanceChannel);
  const useCallback = react.useCallback;
  if (activeEventOrStageInstanceChannel != null) {
    id = activeEventOrStageInstanceChannel.id;
  }
  const items2 = [id, guildActiveEvent];
  let entity_type;
  const callback = useCallback(() => {
    if (null != guildActiveEvent) {
      const obj3 = { eventId: guildActiveEvent.id, event: guildActiveEvent };
      const obj2 = guild_scheduled_events_GuildScheduledEventModalActionCreators;
      const result = obj2.openGuildEventDetails(obj3);
    } else {
      let id;
      if (activeEventOrStageInstanceChannel != null) {
        id = activeEventOrStageInstanceChannel.id;
      }
      if (null != id) {
        const obj = openChannelLongPressActionSheet;
        const result1 = obj.openChannelLongPressActionSheet(activeEventOrStageInstanceChannel.id);
      }
    }
  }, items2);
  if (guildActiveEvent != null) {
    entity_type = guildActiveEvent.entity_type;
  }
  if (entity_type === constants.EXTERNAL) {
    const obj4 = { guildEvent: guildActiveEvent };
    tmp13 = closure_13(closure_35, obj4);
  } else {
    if (null != activeEventOrStageInstanceChannel) {
      if (null != stateFromStores) {
        const obj5 = { stageInstance: stateFromStores, channel: activeEventOrStageInstanceChannel };
        tmp13 = closure_13(closure_37, obj5);
      }
    }
    tmp13 = null;
    const tmp12 = null != activeEventOrStageInstanceChannel && null != guildActiveEvent;
    if (tmp12) {
      const obj6 = { guildEvent: guildActiveEvent, channel: activeEventOrStageInstanceChannel };
      tmp13 = closure_13(closure_34, obj6);
    }
  }
  let tmp20 = null;
  if (null != tmp13) {
    const obj7 = { variant: "secondary", style: items3, onPress: tmp7, onLongPress: callback, children: tmp13 };
    items3 = [tmp.card, style];
    tmp20 = closure_13(tmp2(6002).Card, obj7);
  }
  return tmp20;
});
size = size_mod;
let result = size.fileFinishedImporting("modules/guild_scheduled_events/native/guild_sidebar/GuildLiveChannelNotice.tsx");

export default memoResult;
export const LIVE_CHANNEL_NOTICE_MARGIN_TOP = PX_8;
export const LIVE_CHANNEL_NOTICE_MARGIN_BOTTOM = PX_12;
export const getScaledLiveChannelNoticeHeight = function getScaledLiveChannelNoticeHeight(fontScale, guildLiveChannelNoticeInfo) {
  let hasAudience;
  let hasButton;
  let hasSpeakers;
  let hasStream;
  ({ hasSpeakers, hasButton, hasAudience, hasStream } = guildLiveChannelNoticeInfo);
  useScaledTextLineHeight;
  if (!hasSpeakers) {
    let num;
    if (!hasAudience) {
      num = 0;
    }
    const tmpResult = useScaledTextLineHeight;
    const sum = PX_82 + tmpResult.scaleTextLineHeight(c23, fontScale);
    let num2 = 0;
    const tmpResult3 = PlatformUtils;
    if (tmpResult3.isAndroid()) {
      num2 = -2;
    }
    const sum1 = PX_4 + num2;
    let num3 = 0;
    const tmpResult4 = useScaledTextLineHeight;
    const sum2 = sum1 + tmpResult4.scaleTextLineHeight(c24, fontScale);
    if (hasButton) {
      num3 = PX_82 + ButtonConstants.SMALL_BUTTON_HEIGHT;
    }
    return PX_8 + PX_122 + tmp4 + num + sum + sum2 + num3 + PX_122 + PX_12;
  }
  num = PX_82 + height;
};