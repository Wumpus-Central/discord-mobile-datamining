// discord_app/modules/guild_scheduled_events/native/guild_sidebar/GuildLiveChannelNotice.tsx
import c from "../../../../../_runtime/00576_c.js";
import nativeDefault from "../../../../../discord_common/js/packages/tokens/native.tsx";
import util from "../../../../intl/index.native.tsx";
import native from "../../../../design/void/native.tsx";
import PlatformUtils2 from "../../../../utils/PlatformUtils.tsx";
import KeyboardManagerUtilsAll from "../../../../utils/native/KeyboardManagerUtils.tsx";
import shared from "../../../../design/shared.tsx";
import useThemeDefault from "../../../../hooks/useTheme.tsx";
import Text_Text from "../../../../design/components/Text/native/Text.tsx";
import useChannelNameDefault from "../../../channel/useChannelName.tsx";
import PrivateChannelCallUtils from "../../../../utils/native/PrivateChannelCallUtils.tsx";
import StageChannelParticipants from "../../../stage_channels/StageChannelParticipants.tsx";
import components_Button_Button from "../../../../design/components/Button/native/Button.native.tsx";
import ButtonConstants from "../../../../design/components/Button/native/ButtonConstants.native.tsx";
import useIsUsingClientThemeDefault from "../../../client_themes/native/useIsUsingClientTheme.tsx";
import MarkupRulesUtils from "../../../markup/MarkupRulesUtils.tsx";
import StageChannelModalActionCreators from "../../../stage_channels/StageChannelModalActionCreators.tsx";
import EntityUtils from "../../utils/EntityUtils.tsx";
import LocationIcon from "../../../../design/components/Icon/native/redesign/generated/LocationIcon.tsx";
import CalendarIcon2 from "../../../../design/components/Icon/native/redesign/generated/CalendarIcon.tsx";
import guild_scheduled_events_GuildScheduledEventModalActionCreators from "../../GuildScheduledEventModalActionCreators.native.tsx";
import openChannelLongPressActionSheet from "../../../channel/native/openChannelLongPressActionSheet.tsx";
import useScaledTextLineHeight from "../../../screen/native/useScaledTextLineHeight.android.tsx";
import noop from "../../../../../_runtime/metro/00019__.js";
import StageChannelParticipantStore from "../../../stage_channels/StageChannelParticipantStore.tsx";
import StageInstanceStore from "../../../stage_channels/StageInstanceStore.tsx";
import ApplicationStreamingStore from "../../../../stores/ApplicationStreamingStore.tsx";
import PermissionStore from "../../../../stores/PermissionStore.tsx";
import SortedVoiceStateStore from "../../../../stores/views/SortedVoiceStateStore.tsx";
import MarkupUtils from "../../../markup/MarkupUtils.tsx";

require = fn;
const View = fn(17).View;
const constants = fn(2057).GuildScheduledEventEntityTypes;
const Permissions = fn(1096).Permissions;
const jsxProd = fn(21);
({ jsx: map1, jsxs: closure_14, Fragment: closure_15 } = jsxProd);
const PX_8 = nativeDefault.space.PX_8;
const PX_12 = nativeDefault.space.PX_12;
const XSMALL = fn(1188).AvatarSizes.XSMALL;
const height = fn(1188).AVATAR_SIZE_MAP[XSMALL];
const PX_122 = nativeDefault.space.PX_12;
let c21 = "text-xs/semibold";
let c22 = "text-xs/bold";
let c23 = "text-md/semibold";
let c24 = "text-xs/medium";
const PX_82 = nativeDefault.space.PX_8;
const PX_4 = nativeDefault.space.PX_4;
const guildEventRules = MarkupUtils.guildEventRules;
let obj = {};
const merged = Object.assign(guildEventRules);
let obj2 = {};
const merged1 = Object.assign(guildEventRules.channelMention);
obj2.react = fn(11719).inlineChannelMentionReact;
obj.channelMention = obj2;
obj.guild = {
  react(content, output, state) {
    if (typeof content.content === "string") {
      content = content.content;
    } else {
      content = MarkupRulesUtils.smartOutput(content, output, state);
    }
    return content;
  },
};
obj.channel = { react: fn(11719).inlineChannelReact };
let closure_27 = MarkupUtils.reactParserFor(obj);
let createStyles = fn(4896);
let closure_28 = createStyles.createStyles((height) => {
  const obj = {
    container: { flexDirection: "row", alignItems: "center", marginTop: PX_82 },
    overflowCircle: {
      backgroundColor: nativeDefault.colors.BACKGROUND_MOD_STRONG,
      borderRadius: nativeDefault.radii.round,
      display: "flex",
      flexDirection: "row",
      alignItems: "center",
      justifyContent: "center",
      height,
      paddingHorizontal: 6,
    },
    wrapper: null,
    badge: null,
    audienceBadge: null,
  };
  const obj2 = { flexDirection: "row", alignItems: "center", marginTop: PX_82 };
  const obj3 = {
    backgroundColor: nativeDefault.colors.BACKGROUND_MOD_STRONG,
    borderRadius: nativeDefault.radii.round,
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    height,
    paddingHorizontal: 6,
  };
  obj.wrapper = {
    borderRadius: nativeDefault.radii.round,
    backgroundColor: nativeDefault.colors.BACKGROUND_BASE_LOW,
    height,
  };
  const obj4 = {
    borderRadius: nativeDefault.radii.round,
    backgroundColor: nativeDefault.colors.BACKGROUND_BASE_LOW,
    height,
  };
  obj.badge = {
    borderRadius: nativeDefault.radii.round,
    paddingHorizontal: 8,
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    height,
  };
  const obj5 = {
    borderRadius: nativeDefault.radii.round,
    paddingHorizontal: 8,
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    height,
  };
  obj.audienceBadge = { backgroundColor: nativeDefault.colors.BACKGROUND_BASE_LOWER };
  return obj;
});
let ReactCompilerGating = fn(558);
let closure_29 = ReactCompilerGating.isReactCompilerEnabled()
  ? (arg0) => {
      const cResult = guildId(576).c(26);
      ({ users, max, guildId } = arg0);
      ({ audienceCount, isLiveStreaming } = arg0);
      let num = 5;
      let num2 = 5;
      if (undefined !== max) {
        num2 = max;
      }
      wrapper = Math.max(users.length - num2, 0);
      const tmp4 = closure_28(closure_19);
      dependencyMap = tmp4;
      if (0 === users.length) {
        if (null == audienceCount) {
          if (!isLiveStreaming) {
            return null;
          }
        }
      }
      if (cResult[0] === guildId) {
        if (cResult[1] === num2) {
          if (cResult[2] === wrapper) {
            if (cResult[3] === tmp4.overflowCircle) {
              if (cResult[4] === tmp4.wrapper) {
                if (cResult[5] === users) {
                  if (cResult[13] === audienceCount) {
                    if (cResult[14] === tmp4.audienceBadge) {
                      if (cResult[15] === tmp4.badge) {
                        if (cResult[16] === tmp4.wrapper) {
                          if (cResult[17] === users.length) {
                            let tmp11 = cResult[18];
                          }
                          if (cResult[19] !== isLiveStreaming) {
                            let tmp19 = isLiveStreaming;
                            if (isLiveStreaming) {
                              let obj2 = { style: { marginLeft: 4 } };
                              tmp19 = closure_13(guildId(1188).LiveTag, obj2);
                            }
                            cResult[19] = isLiveStreaming;
                            cResult[20] = tmp19;
                            let tmp18 = tmp19;
                          } else {
                            tmp18 = cResult[20];
                          }
                          if (cResult[21] === tmp4.container) {
                            if (cResult[22] === tmp7) {
                              if (cResult[23] === tmp11) {
                                if (cResult[24] === tmp18) {
                                  let tmp21 = cResult[25];
                                }
                                return tmp21;
                              }
                            }
                          }
                          let obj3 = { style: tmp6, children: null };
                          let items = [tmp7, tmp11, tmp18];
                          obj3.children = items;
                          const tmp24 = closure_14(View, obj3);
                          cResult[21] = tmp4.container;
                          cResult[22] = tmp7;
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
                    let items1 = [tmp4.wrapper];
                    let obj4 = { style: null, children: null };
                    items1[1] = users.length > 0 && { marginLeft: 4 };
                    obj4.style = items1;
                    let obj5 = { style: null, children: null };
                    const items2 = [,];
                    ({ badge: arr2[0], audienceBadge: arr2[1] } = tmp4);
                    obj5.style = items2;
                    let obj6 = { size: "custom", style: guildId(11712).makeSizeStyle(14) };
                    const items3 = [closure_13(guildId(12202).HeadphonesIcon, obj6)];
                    let obj7 = {
                      variant: "text-xs/semibold",
                      style: { marginLeft: 4 },
                      maxFontSizeMultiplier: 1,
                      children: audienceCount,
                    };
                    items3[1] = closure_13(guildId(4892).Text, obj7);
                    obj5.children = items3;
                    obj4.children = closure_14(View, obj5);
                    tmp14Result = closure_13(View, obj4);
                    const tmp16 = users.length > 0 && { marginLeft: 4 };
                    const tmpResult = guildId(11712);
                  }
                  cResult[13] = audienceCount;
                  cResult[14] = tmp4.audienceBadge;
                  cResult[15] = tmp4.badge;
                  cResult[16] = tmp4.wrapper;
                  cResult[17] = users.length;
                  cResult[18] = tmp14Result;
                  tmp11 = tmp14Result;
                }
              }
            }
          }
        }
      }
      if (cResult[7] === guildId) {
        if (cResult[8] === num2) {
          if (cResult[9] === wrapper) {
            if (cResult[10] === tmp4.overflowCircle) {
              if (cResult[11] === tmp4.wrapper) {
                let tmp8 = cResult[12];
              }
              const mapped = users.map(tmp8);
              cResult[0] = guildId;
              cResult[1] = num2;
              cResult[2] = wrapper;
              ({ overflowCircle: tmp3[3], wrapper } = tmp4);
              cResult[4] = wrapper;
              cResult[num] = users;
              num = 6;
              cResult[6] = mapped;
            }
          }
        }
      }
      const fn = function x(user, arg1) {
        if (arg1 < num2) {
          if (arg1 === tmp - 1) {
            if (wrapper > 0) {
              const items = [closure_3.wrapper];
              let obj2 = 0 !== arg1;
              if (obj2) {
                obj2 = { marginLeft: 4 };
              }
              const obj3 = { style: null, children: null };
              items[1] = obj2;
              obj3.style = items;
              const obj4 = { style: closure_3.overflowCircle, children: null };
              const obj5 = { variant: "text-xs/medium", lineClamp: 1, maxFontSizeMultiplier: 1, children: null };
              const _HermesInternal = HermesInternal;
              obj5.children = "+" + tmp2 + 1;
              obj4.children = __initData2(Text_Text.Text, obj5);
              obj3.children = __initData2(View, obj4);
              let tmp3Result = __initData2(View, obj3, "overflow");
            }
            return tmp3Result;
          }
          const items1 = [closure_3.wrapper];
          let obj = 0 !== arg1;
          if (obj) {
            obj = { marginLeft: 4 };
          }
          const obj6 = { style: null, children: null };
          items1[1] = obj;
          obj6.style = items1;
          const obj7 = { user, guildId, size: XSMALL };
          obj6.children = __initData2(native.Avatar, obj7);
          tmp3Result = __initData2(View, obj6, arg1);
        }
      };
      cResult[7] = guildId;
      cResult[8] = num2;
      cResult[9] = wrapper;
      cResult[10] = tmp4.overflowCircle;
      cResult[11] = tmp4.wrapper;
      cResult[12] = fn;
      tmp8 = fn;
      let obj = guildId(576);
    }
  : (arg0) => {
      ({ users, max } = arg0);
      if (max === undefined) {
        max = 5;
      }
      ({ guildId: importDefault, audienceCount, isLiveStreaming } = arg0);
      closure_2 = Math.max(users.length - max, 0);
      const tmp = closure_28(closure_19);
      dependencyMap = tmp;
      if (0 !== users.length) {
        let obj = { style: tmp.container, children: null };
        let items = [
          users.map((user, index) => {
            if (index < max) {
              if (index === tmp - 1) {
                if (closure_2 > 0) {
                  const items = [closure_3.wrapper];
                  let obj2 = 0 !== index;
                  if (obj2) {
                    obj2 = { marginLeft: 4 };
                  }
                  const obj3 = { style: null, children: null };
                  items[1] = obj2;
                  obj3.style = items;
                  const obj4 = { style: closure_3.overflowCircle, children: null };
                  const obj5 = { variant: "text-xs/medium", lineClamp: 1, maxFontSizeMultiplier: 1, children: null };
                  const _HermesInternal = HermesInternal;
                  obj5.children = "+" + tmp2 + 1;
                  obj4.children = __initData2(Text_Text.Text, obj5);
                  obj3.children = __initData2(View, obj4);
                  let tmp3Result = __initData2(View, obj3, "overflow");
                }
                return tmp3Result;
              }
              const items1 = [closure_3.wrapper];
              let obj = 0 !== index;
              if (obj) {
                obj = { marginLeft: 4 };
              }
              const obj6 = { style: null, children: null };
              items1[1] = obj;
              obj6.style = items1;
              const obj7 = { user, guildId, size: XSMALL };
              obj6.children = __initData2(native.Avatar, obj7);
              tmp3Result = __initData2(View, obj6, index);
            }
          }),
          ,
        ];
        let tmp8Result = null != audienceCount && audienceCount > 0;
        if (tmp8Result) {
          let items1 = [tmp.wrapper];
          let obj2 = { style: null, children: null };
          items1[1] = users.length > 0 && { marginLeft: 4 };
          obj2.style = items1;
          let obj3 = { style: null, children: null };
          const items2 = [,];
          ({ badge: arr3[0], audienceBadge: arr3[1] } = tmp);
          obj3.style = items2;
          let obj4 = { size: "custom", style: max(11712).makeSizeStyle(14) };
          const items3 = [closure_13(max(12202).HeadphonesIcon, obj4)];
          let obj6 = {
            variant: "text-xs/semibold",
            style: { marginLeft: 4 },
            maxFontSizeMultiplier: 1,
            children: audienceCount,
          };
          items3[1] = closure_13(max(4892).Text, obj6);
          obj3.children = items3;
          obj2.children = closure_14(View, obj3);
          tmp8Result = closure_13(View, obj2);
          let obj5 = max(11712);
          const tmp9 = users.length > 0 && { marginLeft: 4 };
        }
        items[1] = tmp8Result;
        if (isLiveStreaming) {
          let obj7 = { style: { marginLeft: 4 } };
          isLiveStreaming = closure_13(max(1188).LiveTag, obj7);
        }
        items[2] = isLiveStreaming;
        obj.children = items;
        let tmp4Result = closure_14(View, obj);
      } else if (null == audienceCount) {
        tmp4Result = null;
      }
      return tmp4Result;
    };
createStyles = fn(4896);
let obj4 = {
  card: { padding: PX_122 },
  row: { flexDirection: "row", alignItems: "center" },
  infoRow: { marginTop: PX_4 },
  liveNowIcon: { marginEnd: 4 },
  uppercase: { textTransform: "uppercase" },
  headingText: null,
  liveDot: null,
  calendarIcon: null,
  topic: null,
  button: null,
};
const PlatformUtils = fn(1369);
let num = 0;
if (PlatformUtils.isAndroid()) {
  num = -2;
}
obj4.headingText = { marginTop: num };
let size = {
  width: 7,
  height: 7,
  marginRight: 7,
  backgroundColor: nativeDefault.colors.STATUS_POSITIVE,
  borderRadius: nativeDefault.radii.xs,
};
obj4.liveDot = size;
obj4.calendarIcon = { marginRight: 7 };
obj4.topic = { marginTop: PX_82 };
obj4.button = { marginTop: PX_82 };
let closure_30 = createStyles.createStyles(obj4);
ReactCompilerGating = fn(558);
let closure_31 = ReactCompilerGating.isReactCompilerEnabled()
  ? (arg0) => {
      _require = arg0;
      const cResult = require("c").c(2);
      if (cResult[0] !== arg0) {
        const fn = function t() {
          if (null != guildVoice) {
            const result = KeyboardManagerUtilsAll.dismissGlobalKeyboard();
            if (guildVoice.isGuildVoice()) {
              PrivateChannelCallUtils.openGuildVoiceModal(guildVoice);
              const tmp4Result = PrivateChannelCallUtils;
            } else {
              StageChannelModalActionCreators.connectAndOpen(guildVoice);
              const tmp4Result2 = StageChannelModalActionCreators;
            }
          }
        };
        cResult[0] = arg0;
        cResult[1] = fn;
        let tmp2 = fn;
      } else {
        tmp2 = cResult[1];
      }
      return tmp2;
    }
  : (arg0) => {
      const guildVoice = arg0;
      const items = [arg0];
      return noop.useCallback(() => {
        if (null != guildVoice) {
          const result = KeyboardManagerUtilsAll.dismissGlobalKeyboard();
          if (guildVoice.isGuildVoice()) {
            PrivateChannelCallUtils.openGuildVoiceModal(guildVoice);
            const tmp4Result = PrivateChannelCallUtils;
          } else {
            StageChannelModalActionCreators.connectAndOpen(guildVoice);
            const tmp4Result2 = StageChannelModalActionCreators;
          }
        }
      }, items);
    };
ReactCompilerGating = fn(558);
let closure_32 = ReactCompilerGating.isReactCompilerEnabled()
  ? (channel) => {
      const cResult = c.c(8);
      ({ label, disabled } = channel);
      let tmp4 = undefined !== disabled;
      if (tmp4) {
        tmp4 = disabled;
      }
      const tmp5 = closure_30();
      const tmp6 = useThemeDefault();
      const tmp8 = closure_31(channel.channel);
      const tmp7 = useIsUsingClientThemeDefault();
      let str = "tertiary";
      if (tmpResult.isThemeLight(tmp6)) {
        str = "tertiary";
        if (!tmp7) {
          str = "active";
        }
      }
      if (cResult[0] === tmp4) {
        if (cResult[1] === tmp8) {
          if (cResult[2] === label) {
            if (cResult[3] === str) {
              let tmp9 = cResult[4];
            }
            if (cResult[5] === tmp5.button) {
              if (cResult[6] === tmp9) {
                let tmp11 = cResult[7];
              }
              return tmp11;
            }
            const obj2 = { style: tmp5.button, children: tmp9 };
            const tmp14 = __initData2(View, obj2);
            cResult[5] = tmp5.button;
            cResult[6] = tmp9;
            cResult[7] = tmp14;
            tmp11 = tmp14;
          }
        }
      }
      const tmp10 = __initData2(components_Button_Button.Button, {
        onPress: tmp8,
        variant: str,
        size: "sm",
        disabled: tmp4,
        text: label,
      });
      cResult[0] = tmp4;
      cResult[1] = tmp8;
      cResult[2] = label;
      cResult[3] = str;
      cResult[4] = tmp10;
      tmp9 = tmp10;
      tmpResult = shared;
    }
  : (disabled) => {
      let flag = disabled.disabled;
      ({ channel, label } = disabled);
      if (flag === undefined) {
        flag = false;
      }
      const tmp = closure_30();
      const tmp2 = useThemeDefault();
      const obj = { style: tmp.button, children: null };
      const tmp3 = useIsUsingClientThemeDefault();
      const obj2 = { onPress: closure_31(channel), variant: null, size: "sm", disabled: null, text: null };
      const tmp4 = closure_31(channel);
      let str = "tertiary";
      if (obj3.isThemeLight(tmp2)) {
        str = "tertiary";
        if (!tmp3) {
          str = "active";
        }
      }
      obj2.variant = str;
      obj2.disabled = flag;
      obj2.text = label;
      obj.children = __initData2(components_Button_Button.Button, obj2);
      return __initData2(View, obj);
    };
ReactCompilerGating = fn(558);
let closure_33 = noop.memo(
  ReactCompilerGating.isReactCompilerEnabled()
    ? (arg0) => {
        const cResult = c.c(34);
        ({
          heading,
          location: _location,
          LocationIcon,
          topic,
          isLiveStreaming,
          LiveIcon: liveDot,
          voiceUsers,
          joinButton,
        } = arg0);
        const tmp4 = closure_30();
        if (cResult[0] === liveDot) {
          if (cResult[1] === tmp4.calendarIcon) {
            if (cResult[2] === tmp4.liveDot) {
              const tmp10 = isLiveStreaming ? c22 : c21;
              if (isLiveStreaming) {
                isLiveStreaming = tmp4.uppercase;
              }
              if (cResult[4] === tmp4.headingText) {
                if (cResult[5] === isLiveStreaming) {
                  let tmp11 = cResult[6];
                }
                if (cResult[7] === heading) {
                  if (cResult[8] === tmp10) {
                    if (cResult[9] === tmp11) {
                      let tmp12 = cResult[10];
                    }
                    if (cResult[11] === tmp4.row) {
                      if (cResult[12] === tmp5) {
                        if (cResult[13] === tmp12) {
                          let tmp15 = cResult[14];
                        }
                        if (cResult[15] === tmp4.topic) {
                          if (cResult[16] === topic) {
                            let tmp19 = cResult[17];
                          }
                          if (cResult[18] === tmp4.infoRow) {
                            if (cResult[19] === tmp4.row) {
                              let tmp23 = cResult[20];
                            }
                            if (cResult[21] === LocationIcon) {
                              if (cResult[22] === _location) {
                                if (cResult[23] === tmp4.liveNowIcon) {
                                  let tmp24 = cResult[24];
                                }
                                if (cResult[25] === tmp23) {
                                  if (cResult[26] === tmp24) {
                                    let tmp33 = cResult[27];
                                  }
                                  if (cResult[28] === joinButton) {
                                    if (cResult[29] === tmp33) {
                                      if (cResult[30] === tmp15) {
                                        if (cResult[31] === tmp19) {
                                          if (cResult[32] === voiceUsers) {
                                            let tmp37 = cResult[33];
                                          }
                                          return tmp37;
                                        }
                                      }
                                    }
                                  }
                                  const obj2 = { children: null };
                                  const items = [tmp15, voiceUsers, tmp19, tmp33, joinButton];
                                  obj2.children = items;
                                  const tmp40 = state(View, obj2);
                                  cResult[28] = joinButton;
                                  cResult[29] = tmp33;
                                  cResult[30] = tmp15;
                                  cResult[31] = tmp19;
                                  cResult[32] = voiceUsers;
                                  cResult[33] = tmp40;
                                  tmp37 = tmp40;
                                }
                                const obj3 = { style: tmp23, children: tmp24 };
                                const tmp36 = __initData2(View, obj3);
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
                                const obj4 = {
                                  style: tmp4.liveNowIcon,
                                  size: "xxs",
                                  color: "redesign-channel-name-muted-text",
                                };
                                tmp29 = __initData2(LocationIcon, obj4);
                              }
                              const items1 = [tmp29];
                              const obj5 = {
                                lineClamp: 1,
                                variant: variant2,
                                color: "redesign-channel-name-muted-text",
                                style: null,
                                children: null,
                              };
                              let num18 = 0;
                              if (tmpResult.isAndroid()) {
                                num18 = -2;
                              }
                              const obj6 = { children: null };
                              const obj7 = { marginTop: num18, flexShrink: 1 };
                              obj5.style = obj7;
                              obj5.children = _location;
                              items1[1] = __initData2(Text_Text.Text, obj5);
                              obj6.children = items1;
                              tmp27Result = state(closure_1_15, obj6);
                              tmpResult = PlatformUtils2;
                            }
                            cResult[21] = LocationIcon;
                            cResult[22] = _location;
                            cResult[23] = tmp4.liveNowIcon;
                            cResult[24] = tmp27Result;
                            tmp24 = tmp27Result;
                          }
                          const items2 = [,];
                          ({ row: arr3[0], infoRow: arr3[1] } = tmp4);
                          cResult[18] = tmp4.infoRow;
                          cResult[19] = tmp4.row;
                          cResult[20] = items2;
                          tmp23 = items2;
                        }
                        const obj8 = {
                          style: tmp4.topic,
                          lineClamp: 1,
                          variant,
                          color: "redesign-channel-name-text",
                          children: topic,
                        };
                        const tmp22 = __initData2(Text_Text.Text, obj8);
                        cResult[15] = tmp4.topic;
                        cResult[16] = topic;
                        cResult[17] = tmp22;
                        tmp19 = tmp22;
                      }
                    }
                    const obj9 = { style: tmp4.row, children: null };
                    const items3 = [tmp5, tmp12];
                    obj9.children = items3;
                    const tmp18 = state(View, obj9);
                    cResult[11] = tmp4.row;
                    cResult[12] = tmp5;
                    cResult[13] = tmp12;
                    cResult[14] = tmp18;
                    tmp15 = tmp18;
                  }
                }
                const obj10 = { variant: tmp10, color: "status-positive", style: tmp11, children: heading };
                const tmp14 = __initData2(Text_Text.Text, obj10);
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
        }
        if (null != liveDot) {
          const obj11 = { size: "xxs", color: "status-positive", style: tmp4.calendarIcon };
          let tmp8 = __initData2(liveDot, obj11);
        } else {
          const obj12 = { style: tmp4.liveDot };
          tmp8 = __initData2(View, obj12);
        }
        cResult[0] = liveDot;
        ({ calendarIcon: tmp3[1], liveDot } = tmp4);
        cResult[2] = liveDot;
        cResult[3] = tmp8;
      }
    : (arg0) => {
        ({ location: _location, LocationIcon, isLiveStreaming, LiveIcon } = arg0);
        ({ heading, topic, voiceUsers, joinButton } = arg0);
        const tmp = closure_30();
        const obj = { style: tmp.row, children: null };
        if (null != LiveIcon) {
          const obj2 = { size: "xxs", color: "status-positive", style: tmp.calendarIcon };
          let tmp5 = __initData2(LiveIcon, obj2);
          let tmp4 = __initData2;
        } else {
          tmp4 = __initData2;
          const obj3 = { style: tmp.liveDot };
          tmp5 = __initData2(View, obj3);
        }
        const items = [tmp5];
        const obj4 = { variant: isLiveStreaming ? c22 : c21, color: "status-positive", style: null, children: null };
        const items1 = [tmp.headingText];
        if (isLiveStreaming) {
          isLiveStreaming = tmp.uppercase;
        }
        items1[1] = isLiveStreaming;
        obj4.style = items1;
        obj4.children = heading;
        items[1] = tmp4(Text_Text.Text, obj4);
        obj.children = items;
        const items2 = [
          state(View, obj),
          voiceUsers,
          tmp4(Text_Text.Text, {
            style: tmp.topic,
            lineClamp: 1,
            variant,
            color: "redesign-channel-name-text",
            children: topic,
          }),
          ,
        ];
        const obj6 = { style: null, children: null };
        const items3 = [,];
        ({ row: arr4[0], infoRow: arr4[1] } = tmp);
        obj6.style = items3;
        let tmp2Result = null != _location;
        if (tmp2Result) {
          let tmp4Result = null != LocationIcon;
          if (tmp4Result) {
            const obj7 = { style: tmp.liveNowIcon, size: "xxs", color: "redesign-channel-name-muted-text" };
            tmp4Result = tmp4(LocationIcon, obj7);
          }
          const items4 = [tmp4Result];
          const obj8 = {
            lineClamp: 1,
            variant: variant2,
            color: "redesign-channel-name-muted-text",
            style: null,
            children: null,
          };
          let num = 0;
          if (tmp7Result.isAndroid()) {
            num = -2;
          }
          const obj9 = { children: null };
          const obj10 = { marginTop: num, flexShrink: 1 };
          obj8.style = obj10;
          obj8.children = _location;
          items4[1] = tmp4(Text_Text.Text, obj8);
          obj9.children = items4;
          tmp2Result = state(closure_1_15, obj9);
          tmp7Result = PlatformUtils2;
        }
        const obj11 = { children: null };
        obj6.children = tmp2Result;
        items2[3] = tmp4(View, obj6);
        items2[4] = joinButton;
        obj11.children = items2;
        return state(View, obj11);
      },
);
ReactCompilerGating = fn(558);
let closure_34 = ReactCompilerGating.isReactCompilerEnabled()
  ? (arg0) => {
      const cResult = channel(576).c(25);
      ({ guildEvent, channel } = arg0);
      const tmp4 = useChannelNameDefault(channel);
      if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
        const items = [SortedVoiceStateStore];
        cResult[0] = items;
        let first = items;
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
        let tmp7 = fn;
      } else {
        tmp7 = cResult[2];
      }
      const obj = channel(576);
      const stateFromStoresArray = channel(504).useStateFromStoresArray(first, tmp7);
      if (cResult[3] === Symbol.for("react.memo_cache_sentinel")) {
        const items1 = [PermissionStore];
        cResult[3] = items1;
        let tmp9 = items1;
      } else {
        tmp9 = cResult[3];
      }
      if (cResult[4] !== channel) {
        const fn2 = function y() {
          return PermissionStore.can(Permissions.CONNECT, channel);
        };
        cResult[4] = channel;
        cResult[5] = fn2;
        let tmp11 = fn2;
      } else {
        tmp11 = cResult[5];
      }
      const tmpResult = channel(504);
      const stateFromStores = channel(504).useStateFromStores(tmp9, tmp11);
      if (cResult[6] === Symbol.for("react.memo_cache_sentinel")) {
        const items2 = [ApplicationStreamingStore];
        cResult[6] = items2;
        let tmp13 = items2;
      } else {
        tmp13 = cResult[6];
      }
      if (cResult[7] !== channel.id) {
        const fn3 = function b() {
          return ApplicationStreamingStore.getAllApplicationStreamsForChannel(channel.id).length > 0;
        };
        cResult[7] = channel.id;
        cResult[8] = fn3;
        let tmp15 = fn3;
      } else {
        tmp15 = cResult[8];
      }
      const tmpResult4 = channel(504);
      const stateFromStores1 = channel(504).useStateFromStores(tmp13, tmp15);
      if (cResult[9] === Symbol.for("react.memo_cache_sentinel")) {
        const intl = channel(1126).intl;
        const stringResult = intl.string(channel(1126).t["X2K3/4"]);
        cResult[9] = stringResult;
        let tmp17 = stringResult;
      } else {
        tmp17 = cResult[9];
      }
      if (cResult[10] !== channel) {
        const channelIconComponent = channel(5819).getChannelIconComponent(channel);
        cResult[10] = channel;
        cResult[11] = channelIconComponent;
        let tmp19 = channelIconComponent;
        const tmpResult6 = channel(5819);
      } else {
        tmp19 = cResult[11];
      }
      if (cResult[12] === channel.guild_id) {
        if (cResult[13] === stateFromStores1) {
          if (cResult[14] === stateFromStoresArray) {
            let tmp21 = cResult[15];
          }
          if (cResult[16] === stateFromStores) {
            if (cResult[17] === channel) {
              let tmp23 = cResult[18];
            }
            if (cResult[19] === tmp4) {
              if (cResult[20] === guildEvent.name) {
                if (cResult[21] === tmp21) {
                  if (cResult[22] === tmp23) {
                    if (cResult[23] === tmp19) {
                      let tmp27 = cResult[24];
                    }
                    return tmp27;
                  }
                }
              }
            }
            const obj2 = {
              heading: tmp17,
              topic: guildEvent.name,
              location: tmp4,
              LocationIcon: tmp19,
              LiveIcon: channel(9310).CalendarIcon,
              voiceUsers: tmp21,
              joinButton: tmp23,
            };
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
            const obj3 = { channel, label: null };
            const intl2 = channel(1126).intl;
            obj3.label = intl2.string(channel(1126).t.VJlc0S);
            tmp24 = closure_13(closure_32, obj3);
          }
          cResult[16] = stateFromStores;
          cResult[17] = channel;
          cResult[18] = tmp24;
          tmp23 = tmp24;
        }
      }
      const tmp22 = closure_13(closure_29, {
        guildId: channel.guild_id,
        users: stateFromStoresArray,
        isLiveStreaming: stateFromStores1,
      });
      cResult[12] = channel.guild_id;
      cResult[13] = stateFromStores1;
      cResult[14] = stateFromStoresArray;
      cResult[15] = tmp22;
      tmp21 = tmp22;
      const obj4 = { guildId: channel.guild_id, users: stateFromStoresArray, isLiveStreaming: stateFromStores1 };
      const tmpResult5 = channel(504);
    }
  : (channel) => {
      channel = channel.channel;
      const tmp2 = useChannelNameDefault(channel);
      const items = [SortedVoiceStateStore];
      const stateFromStoresArray = channel(504).useStateFromStoresArray(items, () => {
        const voiceStatesForChannel = SortedVoiceStateStore.getVoiceStatesForChannel(channel);
        return voiceStatesForChannel.map((user) => user.user);
      });
      const obj = channel(504);
      const items1 = [PermissionStore];
      const stateFromStores = channel(504).useStateFromStores(items1, () =>
        PermissionStore.can(Permissions.CONNECT, channel),
      );
      const obj2 = channel(504);
      const items2 = [ApplicationStreamingStore];
      const obj4 = {
        heading: null,
        topic: null,
        location: null,
        LocationIcon: null,
        LiveIcon: null,
        voiceUsers: null,
        joinButton: null,
      };
      const stateFromStores1 = channel(504).useStateFromStores(
        items2,
        () => ApplicationStreamingStore.getAllApplicationStreamsForChannel(channel.id).length > 0,
      );
      const intl = channel(1126).intl;
      obj4.heading = intl.string(channel(1126).t["X2K3/4"]);
      obj4.topic = channel.guildEvent.name;
      obj4.location = tmp2;
      const obj3 = channel(504);
      obj4.LocationIcon = channel(5819).getChannelIconComponent(channel);
      obj4.LiveIcon = channel(9310).CalendarIcon;
      obj4.voiceUsers = closure_13(closure_29, {
        guildId: channel.guild_id,
        users: stateFromStoresArray,
        isLiveStreaming: stateFromStores1,
      });
      let tmp7Result;
      if (stateFromStores) {
        const obj7 = { channel, label: null };
        const intl2 = tmp3(1126).intl;
        obj7.label = intl2.string(tmp3(1126).t.VJlc0S);
        tmp7Result = closure_13(closure_32, obj7);
      }
      obj4.joinButton = tmp7Result;
      return closure_13(closure_33, obj4);
    };
ReactCompilerGating = fn(558);
let closure_35 = ReactCompilerGating.isReactCompilerEnabled()
  ? (guildEvent) => {
      let CalendarIcon = dependencyMap;
      const cResult = c.c(15);
      guildEvent = guildEvent.guildEvent;
      if (cResult[0] !== guildEvent) {
        const _Symbol = Symbol;
        const forResult = Symbol.for("react.early_return_sentinel");
        const locationFromEvent = EntityUtils.getLocationFromEvent(guildEvent);
        if (null == locationFromEvent) {
          cResult[0] = guildEvent;
          cResult[1] = undefined;
          cResult[2] = undefined;
          cResult[3] = undefined;
          cResult[4] = undefined;
          cResult[5] = null;
          let tmp7 = null;
        } else {
          const _Symbol2 = Symbol;
          if (cResult[6] === Symbol.for("react.memo_cache_sentinel")) {
            const intl = util.intl;
            const stringResult = intl.string(util.t.TxqPQR);
            cResult[6] = stringResult;
          }
          const name = guildEvent.name;
          closure_27(locationFromEvent, true);
        }
        const tmpResult = EntityUtils;
      } else {
        tmp7 = cResult[5];
      }
      if (tmp7 !== Symbol.for("react.early_return_sentinel")) {
        return tmp7;
      } else {
        if (cResult[7] !== guildEvent) {
          const obj2 = { guildEvent };
          const tmp23 = __initData2(closure_36, obj2);
          cResult[7] = guildEvent;
          cResult[8] = tmp23;
          let tmp20 = tmp23;
        } else {
          tmp20 = cResult[8];
        }
        if (cResult[9] === tmp3) {
          if (cResult[10] === tmp4) {
            if (cResult[11] === tmp5) {
              if (cResult[12] === tmp6) {
              }
            }
          }
        }
        const obj3 = {
          heading: tmp4,
          topic: tmp5,
          location: tmp6,
          LocationIcon: LocationIcon.LocationIcon,
          LiveIcon: null,
          joinButton: null,
        };
        CalendarIcon = CalendarIcon2.CalendarIcon;
        obj3.LiveIcon = CalendarIcon;
        obj3.joinButton = tmp20;
        const tmp26 = __initData2(tmp3, obj3);
        cResult[9] = tmp3;
        cResult[10] = tmp4;
        cResult[11] = tmp5;
        cResult[12] = tmp6;
        cResult[13] = tmp20;
        cResult[14] = tmp26;
      }
    }
  : (guildEvent) => {
      guildEvent = guildEvent.guildEvent;
      const locationFromEvent = EntityUtils.getLocationFromEvent(guildEvent);
      let tmp4 = null;
      if (null != locationFromEvent) {
        const obj2 = {
          heading: null,
          topic: null,
          location: null,
          LocationIcon: null,
          LiveIcon: null,
          joinButton: null,
        };
        const intl = util.intl;
        obj2.heading = intl.string(util.t.TxqPQR);
        obj2.topic = guildEvent.name;
        obj2.location = closure_27(locationFromEvent, true);
        obj2.LocationIcon = LocationIcon.LocationIcon;
        obj2.LiveIcon = CalendarIcon2.CalendarIcon;
        const obj3 = { guildEvent };
        obj2.joinButton = __initData2(closure_36, obj3);
        tmp4 = __initData2(closure_33, obj2);
      }
      return tmp4;
    };
ReactCompilerGating = fn(558);
let closure_36 = ReactCompilerGating.isReactCompilerEnabled()
  ? (guildEvent) => {
      const cResult = guildEvent(576).c(8);
      guildEvent = guildEvent.guildEvent;
      const tmp4 = closure_30();
      if (cResult[0] !== guildEvent) {
        const fn = function t() {
          const result = guild_scheduled_events_GuildScheduledEventModalActionCreators.openGuildEventDetails({
            eventId: guildEvent.id,
            event: guildEvent,
          });
        };
        cResult[0] = guildEvent;
        cResult[1] = fn;
        let tmp5 = fn;
      } else {
        tmp5 = cResult[1];
      }
      if (cResult[2] === Symbol.for("react.memo_cache_sentinel")) {
        const intl = tmp(1126).intl;
        const stringResult = intl.string(tmp(1126).t.z4FcDs);
        cResult[2] = stringResult;
        let tmp6 = stringResult;
      } else {
        tmp6 = cResult[2];
      }
      if (cResult[3] !== tmp5) {
        const obj2 = { onPress: tmp5, variant: "active", size: "sm", text: tmp6 };
        const tmp10 = closure_13(tmp(5601).Button, obj2);
        cResult[3] = tmp5;
        cResult[4] = tmp10;
        let tmp8 = tmp10;
      } else {
        tmp8 = cResult[4];
      }
      if (cResult[5] === tmp4.button) {
        if (cResult[6] === tmp8) {
          let tmp11 = cResult[7];
        }
        return tmp11;
      }
      const tmp12 = closure_13(View, { style: tmp4.button, children: tmp8 });
      cResult[5] = tmp4.button;
      cResult[6] = tmp8;
      cResult[7] = tmp12;
      tmp11 = tmp12;
      const obj = guildEvent(576);
    }
  : (guildEvent) => {
      guildEvent = guildEvent.guildEvent;
      const items = [guildEvent];
      const obj = { style: closure_30().button, children: null };
      const callback = noop.useCallback(() => {
        const result = guild_scheduled_events_GuildScheduledEventModalActionCreators.openGuildEventDetails({
          eventId: guildEvent.id,
          event: guildEvent,
        });
      }, items);
      const obj2 = { onPress: callback, variant: "active", size: "sm", text: null };
      const intl = guildEvent(1126).intl;
      obj2.text = intl.string(guildEvent(1126).t.z4FcDs);
      obj.children = closure_13(guildEvent(5601).Button, obj2);
      return closure_13(View, obj);
    };
ReactCompilerGating = fn(558);
let closure_37 = ReactCompilerGating.isReactCompilerEnabled()
  ? (arg0) => {
      const cResult = channel(576).c(30);
      ({ stageInstance, channel } = arg0);
      useChannelNameDefault(channel);
      const obj = channel(576);
      const stageParticipants = channel(5595).useStageParticipants(
        channel.id,
        channel(5589).StageChannelParticipantNamedIndex.SPEAKER,
      );
      if (cResult[0] !== stageParticipants) {
        const _Symbol = Symbol;
        if (cResult[2] === Symbol.for("react.memo_cache_sentinel")) {
          const fn = function l(type) {
            return type.type === channel(dependencyMap[40]).StageChannelParticipantTypes.VOICE;
          };
          cResult[2] = fn;
          let found = fn;
        } else {
          found = cResult[2];
        }
        const _Symbol2 = Symbol;
        if (cResult[3] === Symbol.for("react.memo_cache_sentinel")) {
          const fn2 = function c(user) {
            return user.user;
          };
          cResult[3] = fn2;
          let tmp7 = fn2;
        } else {
          tmp7 = cResult[3];
        }
        found = stageParticipants.filter(found);
        const mapped = found.map(tmp7);
        cResult[0] = stageParticipants;
        cResult[1] = mapped;
      } else {
        const _Symbol3 = Symbol;
        if (cResult[4] === Symbol.for("react.memo_cache_sentinel")) {
          const items = [StageChannelParticipantStore];
          cResult[4] = items;
          let tmp11 = items;
        } else {
          tmp11 = cResult[4];
        }
        if (cResult[5] !== channel.id) {
          const fn3 = function x() {
            return StageChannelParticipantStore.getParticipantCount(
              channel.id,
              StageChannelParticipants.StageChannelParticipantNamedIndex.AUDIENCE,
            );
          };
          const items1 = [channel.id];
          cResult[5] = channel.id;
          cResult[6] = fn3;
          cResult[7] = items1;
          let tmp14 = items1;
          let tmp13 = fn3;
        } else {
          tmp13 = cResult[6];
          tmp14 = cResult[7];
        }
        const stateFromStores = channel(504).useStateFromStores(tmp11, tmp13, tmp14);
        const _Symbol4 = Symbol;
        if (cResult[8] === Symbol.for("react.memo_cache_sentinel")) {
          const items2 = [PermissionStore];
          cResult[8] = items2;
          let tmp16 = items2;
        } else {
          tmp16 = cResult[8];
        }
        if (cResult[9] !== channel) {
          class L {
            constructor() {
              return closure_9.can(Permissions.CONNECT, channel);
            }
          }
          cResult[9] = channel;
          cResult[10] = L;
        } else {
          class L {
            constructor() {
              return closure_9.can(Permissions.CONNECT, channel);
            }
          }
        }
        const tmpResult = channel(504);
        const stateFromStores1 = channel(504).useStateFromStores(tmp16, L);
        const tmpResult4 = channel(504);
        const stageHasStream = channel(5581).useStageHasStream(channel.id);
        const tmpResult5 = channel(5581);
        const guildActiveEvent = channel(9195).useGuildActiveEvent(channel.guild_id);
        const _Symbol5 = Symbol;
        if (cResult[11] === Symbol.for("react.memo_cache_sentinel")) {
          class L {
            constructor() {
              return closure_9.can(Permissions.CONNECT, channel);
            }
          }
          const stringResult = obj7.string(channel(1126).t["X2K3/4"]);
          cResult[11] = stringResult;
        } else {
          class L {
            constructor() {
              return closure_9.can(Permissions.CONNECT, channel);
            }
          }
        }
        if (cResult[12] === channel) {
          class L {
            constructor() {
              return closure_9.can(Permissions.CONNECT, channel);
            }
          }
          if (null != guildActiveEvent) {
            class L {
              constructor() {
                return closure_9.can(Permissions.CONNECT, channel);
              }
            }
          } else {
            class L {
              constructor() {
                return closure_9.can(Permissions.CONNECT, channel);
              }
            }
          }
          if (cResult[15] === channel.guild_id) {
            class L {
              constructor() {
                return closure_9.can(Permissions.CONNECT, channel);
              }
            }
          }
          const obj3 = {
            guildId: channel.guild_id,
            users: tmp5,
            isLiveStreaming: stageHasStream,
            audienceCount: stateFromStores,
          };
          const tmp31 = closure_13(closure_29, obj3);
          cResult[15] = channel.guild_id;
          cResult[16] = stageHasStream;
          cResult[17] = stateFromStores;
          cResult[18] = tmp5;
          cResult[19] = tmp31;
        }
        let channelIconComponent;
        if (null != guildActiveEvent) {
          class L {
            constructor() {
              return closure_9.can(Permissions.CONNECT, channel);
            }
          }
          channelIconComponent = obj8.getChannelIconComponent(channel);
        }
        cResult[12] = channel;
        cResult[13] = guildActiveEvent;
        cResult[14] = channelIconComponent;
        const tmpResult6 = channel(9195);
      }
      const obj2 = channel(5595);
    }
  : (channel) => {
      channel = channel.channel;
      const tmp2 = useChannelNameDefault(channel);
      const stageParticipants = channel(5595).useStageParticipants(
        channel.id,
        channel(5589).StageChannelParticipantNamedIndex.SPEAKER,
      );
      const found = stageParticipants.filter(
        (type) => type.type === channel(dependencyMap[40]).StageChannelParticipantTypes.VOICE,
      );
      const mapped = found.map((user) => user.user);
      const obj = channel(5595);
      const items = [StageChannelParticipantStore];
      const items1 = [channel.id];
      const stateFromStores = channel(504).useStateFromStores(
        items,
        () =>
          StageChannelParticipantStore.getParticipantCount(
            channel.id,
            StageChannelParticipants.StageChannelParticipantNamedIndex.AUDIENCE,
          ),
        items1,
      );
      const obj2 = channel(504);
      const items2 = [PermissionStore];
      const stateFromStores1 = channel(504).useStateFromStores(items2, () =>
        PermissionStore.can(Permissions.CONNECT, channel),
      );
      const obj3 = channel(504);
      const stageHasStream = channel(5581).useStageHasStream(channel.id);
      const obj4 = channel(5581);
      const guildActiveEvent = channel(9195).useGuildActiveEvent(channel.guild_id);
      const obj6 = {
        heading: null,
        location: null,
        LocationIcon: null,
        LiveIcon: null,
        topic: null,
        voiceUsers: null,
        joinButton: null,
      };
      const intl = channel(1126).intl;
      obj6.heading = intl.string(channel(1126).t["X2K3/4"]);
      obj6.location = tmp2;
      let channelIconComponent;
      if (null != guildActiveEvent) {
        channelIconComponent = tmp3(5819).getChannelIconComponent(channel);
        const tmp3Result = tmp3(5819);
      }
      obj6.LocationIcon = channelIconComponent;
      if (null != guildActiveEvent) {
        let StageIcon = tmp3(9310).CalendarIcon;
      } else {
        StageIcon = tmp3(5888).StageIcon;
      }
      obj6.LiveIcon = StageIcon;
      obj6.topic = channel.stageInstance.topic;
      obj6.voiceUsers = closure_13(closure_29, {
        guildId: channel.guild_id,
        users: mapped,
        isLiveStreaming: stageHasStream,
        audienceCount: stateFromStores,
      });
      let tmp9Result;
      if (stateFromStores1) {
        const obj8 = { channel, label: null };
        const intl2 = tmp3(1126).intl;
        obj8.label = intl2.string(tmp3(1126).t["7vb2cc"]);
        tmp9Result = closure_13(closure_32, obj8);
      }
      obj6.joinButton = tmp9Result;
      return closure_13(closure_33, obj6);
    };
let obj3 = { react: fn(11719).inlineChannelReact };
size = fn(2);
let result = size.fileFinishedImporting(
  "modules/guild_scheduled_events/native/guild_sidebar/GuildLiveChannelNotice.tsx",
);

export default noop.memo((guild) => {
  guild = guild.guild;
  let activeEventOrStageInstanceChannel;
  const tmp = closure_30();
  const tmp2 = activeEventOrStageInstanceChannel;
  activeEventOrStageInstanceChannel = activeEventOrStageInstanceChannel(16151).useActiveEventOrStageInstanceChannel(
    guild.id,
  );
  let obj = activeEventOrStageInstanceChannel(16151);
  const guildActiveEvent = activeEventOrStageInstanceChannel(9195).useGuildActiveEvent(guild.id);
  let obj2 = activeEventOrStageInstanceChannel(9195);
  const items = [StageInstanceStore];
  const items1 = [activeEventOrStageInstanceChannel];
  const stateFromStores = activeEventOrStageInstanceChannel(504).useStateFromStores(
    items,
    () => {
      let id;
      if (activeEventOrStageInstanceChannel != null) {
        id = activeEventOrStageInstanceChannel.id;
      }
      return StageInstanceStore.getStageInstanceByChannel(id);
    },
    items1,
  );
  let id;
  let obj3 = activeEventOrStageInstanceChannel(504);
  if (activeEventOrStageInstanceChannel != null) {
    id = activeEventOrStageInstanceChannel.id;
  }
  const items2 = [id, guildActiveEvent];
  let entity_type;
  const callback = noop.useCallback(() => {
    if (null != guildActiveEvent) {
      const obj3 = { eventId: guildActiveEvent.id, event: guildActiveEvent };
      const result = guild_scheduled_events_GuildScheduledEventModalActionCreators.openGuildEventDetails(obj3);
    } else {
      let id;
      if (activeEventOrStageInstanceChannel != null) {
        id = activeEventOrStageInstanceChannel.id;
      }
      if (null != id) {
        const result1 = openChannelLongPressActionSheet.openChannelLongPressActionSheet(
          activeEventOrStageInstanceChannel.id,
        );
      }
    }
  }, items2);
  if (guildActiveEvent != null) {
    entity_type = guildActiveEvent.entity_type;
  }
  if (entity_type === constants.EXTERNAL) {
    const obj4 = { guildEvent: guildActiveEvent };
    let tmp13 = closure_13(closure_35, obj4);
  } else {
    if (null != activeEventOrStageInstanceChannel) {
      if (null != stateFromStores) {
        const obj5 = { stageInstance: stateFromStores, channel: activeEventOrStageInstanceChannel };
        tmp13 = closure_13(closure_37, obj5);
      }
    }
    tmp13 = null;
    if (tmp12) {
      const obj6 = { guildEvent: guildActiveEvent, channel: activeEventOrStageInstanceChannel };
      tmp13 = closure_13(closure_34, obj6);
    }
    tmp12 = null != activeEventOrStageInstanceChannel && null != guildActiveEvent;
  }
  let tmp20 = null;
  if (null != tmp13) {
    const obj7 = { variant: "secondary", style: null, onPress: null, onLongPress: null, children: null };
    const items3 = [tmp.card, guild.style];
    obj7.style = items3;
    obj7.onPress = tmp7;
    obj7.onLongPress = callback;
    obj7.children = tmp13;
    tmp20 = closure_13(tmp2(6002).Card, obj7);
  }
  return tmp20;
});
export const LIVE_CHANNEL_NOTICE_MARGIN_TOP = PX_8;
export const LIVE_CHANNEL_NOTICE_MARGIN_BOTTOM = PX_12;
export const getScaledLiveChannelNoticeHeight = function getScaledLiveChannelNoticeHeight(
  fontScale,
  guildLiveChannelNoticeInfo,
) {
  ({ hasSpeakers, hasButton, hasAudience, hasStream } = guildLiveChannelNoticeInfo);
  useScaledTextLineHeight;
  if (!hasSpeakers) {
    if (!hasAudience) {
      let num = 0;
    }
    const sum = PX_82 + useScaledTextLineHeight.scaleTextLineHeight(c23, fontScale);
    const tmpResult = useScaledTextLineHeight;
    let num2 = 0;
    if (tmpResult3.isAndroid()) {
      num2 = -2;
    }
    const sum1 = PX_4 + num2;
    tmpResult3 = PlatformUtils2;
    let num3 = 0;
    const sum2 = sum1 + useScaledTextLineHeight.scaleTextLineHeight(c24, fontScale);
    if (hasButton) {
      num3 = PX_82 + ButtonConstants.SMALL_BUTTON_HEIGHT;
    }
    return PX_8 + PX_122 + tmp4 + num + sum + sum2 + num3 + PX_122 + PX_12;
  }
  num = PX_82 + closure_19;
};
