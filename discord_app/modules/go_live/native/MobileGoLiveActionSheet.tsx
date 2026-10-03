// === Module 9632: MobileGoLiveActionSheet ===

// Module 9632 (MobileGoLiveActionSheet)
import nativeDefault from "native" /* 587 */;
import ConstantsIOS from "ConstantsIOS" /* 1105 */;
import util from "util" /* 1126 */;
import discord_common_AnalyticsUtils from "discord_common/AnalyticsUtils" /* 1260 */;
import asyncRequireImpl from "asyncRequireImpl" /* 1987 */;
import _modDef2327 from "module_2327" /* 2327 */;
import BaseIconImage from "BaseIconImage" /* 4579 */;
import ActionSheetActionCreatorsDefault from "ActionSheetActionCreators" /* 4854 */;
import Text_Text from "Text/Text" /* 4886 */;
import StreamActionCreators from "StreamActionCreators" /* 5032 */;
import NativeViewDefault from "NativeView" /* 5976 */;
import TableRadioRow from "TableRadioRow" /* 6071 */;
import MobilePhoneIcon from "MobilePhoneIcon" /* 6448 */;
import PremiumUpsellUtilsDefault from "PremiumUpsellUtils" /* 8818 */;
import AudioActionCreatorsDefault from "AudioActionCreators" /* 9306 */;
import getStreamSettingsForPreset from "getStreamSettingsForPreset" /* 9633 */;
import SpeedometerIcon from "SpeedometerIcon" /* 9638 */;
import ImageSparkleIcon from "ImageSparkleIcon" /* 9640 */;
import _modDef9642 from "module_9642" /* 9642 */;
import _slicedToArray from "module_32" /* 32 */;
import noop from "module_19" /* 19 */;
import ApplicationStreamingSettingsStore from "ApplicationStreamingSettingsStore" /* 4936 */;
import ApplicationStreamingStore from "ApplicationStreamingStore" /* 4912 */;
import ChannelStore from "ChannelStore" /* 2051 */;
import GuildStore from "GuildStore" /* 2074 */;
import SelectedChannelStore from "SelectedChannelStore" /* 2103 */;
import UserStore from "UserStore" /* 1377 */;

const getStreamSettingsForPresetDefault = getStreamSettingsForPreset;

require = fn;
let ApplicationStreamPresets = fn(4937).ApplicationStreamPresets;
const ApplicationStreamStates = fn(1085).ApplicationStreamStates;
const MediaEngineContextTypes = fn(4915).MediaEngineContextTypes;
const jsxProd = fn(21);
({ jsx: closure_14, jsxs: closure_15 } = jsxProd);
const createStyles = fn(4890);
let obj = { wrapper: { gap: nativeDefault.space.PX_24 }, header: { textAlign: "center" }, section: null, highQualityLabel: null };
let obj3 = { gap: nativeDefault.space.PX_24 };
obj.section = { marginHorizontal: nativeDefault.space.PX_16 };
let obj4 = { marginHorizontal: nativeDefault.space.PX_16 };
obj.highQualityLabel = { flexDirection: "row", alignItems: "center", gap: nativeDefault.space.PX_4 };
let closure_16 = createStyles.createStyles(obj);
const MobileGoLiveActionSheet = "MobileGoLiveActionSheet";
let items = [{ preset: ApplicationStreamPresets.PRESET_MOBILE_DEFAULT, enabled: true }, , ];
let obj7 = { preset: ApplicationStreamPresets.PRESET_MOBILE_PERFORMANCE, enabled: null };
const PlatformUtils = fn(1370);
obj7.enabled = !PlatformUtils.isIOS();
items[1] = obj7;
items[2] = { preset: ApplicationStreamPresets.PRESET_MOBILE_HIGH_QUALITY, enabled: true };
const found = items.filter((enabled) => enabled.enabled);
let closure_18 = found.map((preset) => preset.preset);
const ReactCompilerGating = fn(558);
let obj5 = { flexDirection: "row", alignItems: "center", gap: nativeDefault.space.PX_4 };
let obj6 = { preset: ApplicationStreamPresets.PRESET_MOBILE_DEFAULT, enabled: true };
const size = fn(2);
let result = size.fileFinishedImporting("modules/go_live/native/MobileGoLiveActionSheet.tsx");

export default noop.memo(ReactCompilerGating.isReactCompilerEnabled() ? (() => {
  const cResult = user(576).c(79);
  if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
    let items = [analyticsLocations];
    class A {
      constructor() {
        return analyticsLocations.getState();
      }
    }
    cResult[0] = items;
    cResult[1] = A;
    tmp4 = items;
  } else {
    [tmp4, tmp5] = cResult;
  }
  let obj = user(576);
  const stateFromStoresObject = user(504).useStateFromStoresObject(tmp4, A);
  const preset = stateFromStoresObject.preset;
  if (cResult[2] === Symbol.for("react.memo_cache_sentinel")) {
    const items1 = [UserStore, , , ];
    class A {
      constructor() {
        return analyticsLocations.getState();
      }
    }
    items1[1] = SelectedChannelStore;
    items1[2] = value;
    items1[3] = GuildStore;
    class R {
      constructor() {
        currentUser = closure_10.getCurrentUser();
        channel = closure_7.getChannel(closure_9.getVoiceChannelId());
        guildId = undefined;
        tmp2 = closure_8;
        if (channel != null) {
          guildId = channel.getGuildId();
        }
        guild = closure_8.getGuild(guildId);
        premiumTier = undefined;
        if (guild != null) {
          premiumTier = guild.premiumTier;
        }
        return { user: currentUser, guildPremiumTier: premiumTier };
      }
    }
    cResult[2] = items1;
    cResult[3] = R;
    let tmp9 = R;
    let tmp8 = items1;
  } else {
    tmp8 = cResult[2];
    tmp9 = cResult[3];
  }
  let tmpResult = user(504);
  const stateFromStoresObject1 = user(504).useStateFromStoresObject(tmp8, tmp9);
  user = stateFromStoresObject1.user;
  let guildPremiumTier = stateFromStoresObject1.guildPremiumTier;
  if (cResult[4] === guildPremiumTier) {
    if (cResult[5] === user) {
      let tmp14 = cResult[6];
    }
    dependencyMap = tmp14;
    const _Symbol = Symbol;
    class A {
      constructor() {
        return analyticsLocations.getState();
      }
    }
    if (tmp15 === Symbol.for("react.memo_cache_sentinel")) {
      const items2 = [ApplicationStreamingStore];
      class H {
        constructor() {
          obj = closure_6;
          currentUserActiveStream = closure_6.getCurrentUserActiveStream();
          tmp2 = null != currentUserActiveStream;
          if (tmp2) {
            tmp3 = closure_12;
            tmp2 = currentUserActiveStream.state === closure_12.ACTIVE;
          }
          obj1 = { isStreaming: tmp2, activeSourceId: null };
          streamerActiveStreamMetadata = obj.getStreamerActiveStreamMetadata();
          sourceId = undefined;
          if (streamerActiveStreamMetadata != null) {
            sourceId = streamerActiveStreamMetadata.sourceId;
          }
          if (sourceId == null) {
            sourceId = null;
          }
          obj1.activeSourceId = sourceId;
          return obj1;
        }
      }
      cResult[7] = items2;
      cResult[8] = H;
      let tmp17 = H;
      class R {
        constructor() {
          currentUser = closure_10.getCurrentUser();
          channel = closure_7.getChannel(closure_9.getVoiceChannelId());
          guildId = undefined;
          tmp2 = closure_8;
          if (channel != null) {
            guildId = channel.getGuildId();
          }
          guild = closure_8.getGuild(guildId);
          premiumTier = undefined;
          if (guild != null) {
            premiumTier = guild.premiumTier;
          }
          return { user: currentUser, guildPremiumTier: premiumTier };
        }
      }
    } else {
      tmp17 = cResult[8];
      const tmp16 = cResult[7];
    }
    const stateFromStoresObject2 = tmp(504).useStateFromStoresObject(tmp16, tmp17);
    const isStreaming = stateFromStoresObject2.isStreaming;
    class R {
      constructor() {
        currentUser = closure_10.getCurrentUser();
        channel = closure_7.getChannel(closure_9.getVoiceChannelId());
        guildId = undefined;
        tmp2 = closure_8;
        if (channel != null) {
          guildId = channel.getGuildId();
        }
        guild = closure_8.getGuild(guildId);
        premiumTier = undefined;
        if (guild != null) {
          premiumTier = guild.premiumTier;
        }
        return { user: currentUser, guildPremiumTier: premiumTier };
      }
    }
    noop = tmp20;
    const _Symbol2 = Symbol;
    if (cResult[9] === Symbol.for("react.memo_cache_sentinel")) {
      cResult[9] = { location: "MobileGoLiveActionSheet" };
      class H {
        constructor() {
          obj = closure_6;
          currentUserActiveStream = closure_6.getCurrentUserActiveStream();
          tmp2 = null != currentUserActiveStream;
          if (tmp2) {
            tmp3 = closure_12;
            tmp2 = currentUserActiveStream.state === closure_12.ACTIVE;
          }
          obj1 = { isStreaming: tmp2, activeSourceId: null };
          streamerActiveStreamMetadata = obj.getStreamerActiveStreamMetadata();
          sourceId = undefined;
          if (streamerActiveStreamMetadata != null) {
            sourceId = streamerActiveStreamMetadata.sourceId;
          }
          if (sourceId == null) {
            sourceId = null;
          }
          obj1.activeSourceId = sourceId;
          return obj1;
        }
      }
      let obj2 = { location: "MobileGoLiveActionSheet" };
    } else {
      const tmp21 = cResult[9];
    }
    const tmpResult5 = tmp(504);
    const goLiveUpsellVariant = guildPremiumTier(9637).useConfig(tmp21).goLiveUpsellVariant;
    let obj6 = guildPremiumTier(9637);
    analyticsLocations = guildPremiumTier(6657)(guildPremiumTier(6681).MOBILE_GO_LIVE_ACTION_SHEET).analyticsLocations;
    const tmp25 = closure_16();
    ApplicationStreamingStore = tmp25;
    if (cResult[10] === tmp14) {
      if (cResult[11] === preset) {
        let tmp26 = cResult[12];
      }
      class H {
        constructor() {
          obj = closure_6;
          currentUserActiveStream = closure_6.getCurrentUserActiveStream();
          tmp2 = null != currentUserActiveStream;
          if (tmp2) {
            tmp3 = closure_12;
            tmp2 = currentUserActiveStream.state === closure_12.ACTIVE;
          }
          obj1 = { isStreaming: tmp2, activeSourceId: null };
          streamerActiveStreamMetadata = obj.getStreamerActiveStreamMetadata();
          sourceId = undefined;
          if (streamerActiveStreamMetadata != null) {
            sourceId = streamerActiveStreamMetadata.sourceId;
          }
          if (sourceId == null) {
            sourceId = null;
          }
          obj1.activeSourceId = sourceId;
          return obj1;
        }
      }
      const tmp32 = isStreaming(noop.useState(tmp26), 2);
      value = tmp32[0];
      GuildStore = tmp32[1];
      class R {
        constructor() {
          currentUser = closure_10.getCurrentUser();
          channel = closure_7.getChannel(closure_9.getVoiceChannelId());
          guildId = undefined;
          tmp2 = closure_8;
          if (channel != null) {
            guildId = channel.getGuildId();
          }
          guild = closure_8.getGuild(guildId);
          premiumTier = undefined;
          if (guild != null) {
            premiumTier = guild.premiumTier;
          }
          return { user: currentUser, guildPremiumTier: premiumTier };
        }
      }
      SelectedChannelStore = tmp35;
      UserStore = isStreaming(noop.useState(stateFromStoresObject.soundshareEnabled), 2)[1];
      const tmp34 = isStreaming(noop.useState(stateFromStoresObject.soundshareEnabled), 2);
      const sharedValue = tmp(4612).useSharedValue(!tmp14(ApplicationStreamPresets.PRESET_MOBILE_HIGH_QUALITY));
      if (cResult[13] === tmp20) {
        if (cResult[14] === guildPremiumTier) {
          if (cResult[15] === isStreaming) {
            if (cResult[16] === user) {
              let tmp37 = cResult[17];
            }
            ApplicationStreamPresets = tmp37;
            if (cResult[18] !== tmp25.highQualityLabel) {
              function ie(value) {
                const maxSettingsForPreset = getStreamSettingsForPreset.getMaxSettingsForPreset(ApplicationStreamPresets.PRESET_MOBILE_DEFAULT);
                const maxSettingsForPreset1 = getStreamSettingsForPreset.getMaxSettingsForPreset(ApplicationStreamPresets.PRESET_MOBILE_PERFORMANCE);
                const maxSettingsForPreset2 = getStreamSettingsForPreset.getMaxSettingsForPreset(ApplicationStreamPresets.PRESET_MOBILE_HIGH_QUALITY);
                const obj5 = { icon: state(MobilePhoneIcon.MobilePhoneIcon, {}), label: null, subLabel: null };
                const intl = util.intl;
                obj5.label = intl.string(_modDef2327["2qmQ8N"]);
                let str = "";
                let str2 = "";
                if (null != maxSettingsForPreset) {
                  const intl2 = util.intl;
                  str2 = intl2.formatToPlainString(_modDef2327.ibH7vy, maxSettingsForPreset);
                }
                const obj6 = { [closure_2_11.PRESET_MOBILE_DEFAULT]: obj5 };
                obj5.subLabel = str2;
                const obj7 = { icon: state(SpeedometerIcon.SpeedometerIcon, {}), label: null, subLabel: null };
                const intl3 = util.intl;
                obj7.label = intl3.string(_modDef2327["5eO4/m"]);
                let formatToPlainStringResult = str;
                if (null != maxSettingsForPreset1) {
                  const intl4 = util.intl;
                  formatToPlainStringResult = intl4.formatToPlainString(_modDef2327.fN0UQY, maxSettingsForPreset1);
                }
                obj7.subLabel = formatToPlainStringResult;
                obj6[ApplicationStreamPresets.PRESET_MOBILE_PERFORMANCE] = obj7;
                const obj8 = { icon: state(ImageSparkleIcon.ImageSparkleIcon, {}), label: null, subLabel: null };
                const obj9 = { style: currentUserActiveStream.highQualityLabel, children: null };
                const obj4 = { value };
                const obj10 = { variant: "text-md/semibold", color: "text-strong", children: null };
                const intl5 = util.intl;
                obj10.children = intl5.string(_modDef2327.nMcXo1);
                const items = [state(Text_Text.Text, obj10), ];
                const tmp8Result = NativeViewDefault;
                items[1] = state(BaseIconImage.BaseIconImage, { source: _modDef9642, size: "xs" });
                obj9.children = items;
                obj8.label = closure_2_15(tmp8Result, obj9);
                if (null != maxSettingsForPreset2) {
                  const intl6 = util.intl;
                  str = intl6.formatToPlainString(_modDef2327.q4gYBi, maxSettingsForPreset2);
                }
                obj8.subLabel = str;
                obj6[ApplicationStreamPresets.PRESET_MOBILE_HIGH_QUALITY] = obj8;
                const merged = Object.assign(obj6[value]);
                return obj4;
              }
              cResult[18] = tmp25.highQualityLabel;
              class H {
                constructor() {
                  obj = closure_6;
                  currentUserActiveStream = closure_6.getCurrentUserActiveStream();
                  tmp2 = null != currentUserActiveStream;
                  if (tmp2) {
                    tmp3 = closure_12;
                    tmp2 = currentUserActiveStream.state === closure_12.ACTIVE;
                  }
                  obj1 = { isStreaming: tmp2, activeSourceId: null };
                  streamerActiveStreamMetadata = obj.getStreamerActiveStreamMetadata();
                  sourceId = undefined;
                  if (streamerActiveStreamMetadata != null) {
                    sourceId = streamerActiveStreamMetadata.sourceId;
                  }
                  if (sourceId == null) {
                    sourceId = null;
                  }
                  obj1.activeSourceId = sourceId;
                  return obj1;
                }
              }
              cResult[19] = ie;
              let tmp38 = ie;
            } else {
              tmp38 = cResult[19];
            }
            class H {
              constructor() {
                obj = closure_6;
                currentUserActiveStream = closure_6.getCurrentUserActiveStream();
                tmp2 = null != currentUserActiveStream;
                if (tmp2) {
                  tmp3 = closure_12;
                  tmp2 = currentUserActiveStream.state === closure_12.ACTIVE;
                }
                obj1 = { isStreaming: tmp2, activeSourceId: null };
                streamerActiveStreamMetadata = obj.getStreamerActiveStreamMetadata();
                sourceId = undefined;
                if (streamerActiveStreamMetadata != null) {
                  sourceId = streamerActiveStreamMetadata.sourceId;
                }
                if (sourceId == null) {
                  sourceId = null;
                }
                obj1.activeSourceId = sourceId;
                return obj1;
              }
            }
            const AnalyticsLocationProvider = tmp(6657).AnalyticsLocationProvider;
            BottomSheet = tmp(6645).BottomSheet;
            const BottomSheetScrollView = tmp(6112).BottomSheetScrollView;
            const SafeAreaPaddingView = tmp(6619).SafeAreaPaddingView;
            const _Symbol3 = Symbol;
            class R {
              constructor() {
                currentUser = closure_10.getCurrentUser();
                channel = closure_7.getChannel(closure_9.getVoiceChannelId());
                guildId = undefined;
                tmp2 = closure_8;
                if (channel != null) {
                  guildId = channel.getGuildId();
                }
                guild = closure_8.getGuild(guildId);
                premiumTier = undefined;
                if (guild != null) {
                  premiumTier = guild.premiumTier;
                }
                return { user: currentUser, guildPremiumTier: premiumTier };
              }
            }
            if (cResult[20] === Symbol.for("react.memo_cache_sentinel")) {
              let intl = tmp(1126).intl;
              const stringResult = intl.string(tmp22(2327).CrNjqp);
              class H {
                constructor() {
                  obj = closure_6;
                  currentUserActiveStream = closure_6.getCurrentUserActiveStream();
                  tmp2 = null != currentUserActiveStream;
                  if (tmp2) {
                    tmp3 = closure_12;
                    tmp2 = currentUserActiveStream.state === closure_12.ACTIVE;
                  }
                  obj1 = { isStreaming: tmp2, activeSourceId: null };
                  streamerActiveStreamMetadata = obj.getStreamerActiveStreamMetadata();
                  sourceId = undefined;
                  if (streamerActiveStreamMetadata != null) {
                    sourceId = streamerActiveStreamMetadata.sourceId;
                  }
                  if (sourceId == null) {
                    sourceId = null;
                  }
                  obj1.activeSourceId = sourceId;
                  return obj1;
                }
              }
              cResult[20] = stringResult;
            }
            if (cResult[21] !== tmp25.header) {
              let obj3 = { style: tmp25.header, variant: "redesign/heading-18/bold", color: "text-strong", accessibilityRole: "header", children: null };
              class H {
                constructor() {
                  obj = closure_6;
                  currentUserActiveStream = closure_6.getCurrentUserActiveStream();
                  tmp2 = null != currentUserActiveStream;
                  if (tmp2) {
                    tmp3 = closure_12;
                    tmp2 = currentUserActiveStream.state === closure_12.ACTIVE;
                  }
                  obj1 = { isStreaming: tmp2, activeSourceId: null };
                  streamerActiveStreamMetadata = obj.getStreamerActiveStreamMetadata();
                  sourceId = undefined;
                  if (streamerActiveStreamMetadata != null) {
                    sourceId = streamerActiveStreamMetadata.sourceId;
                  }
                  if (sourceId == null) {
                    sourceId = null;
                  }
                  obj1.activeSourceId = sourceId;
                  return obj1;
                }
              }
              cResult[21] = tmp25.header;
              cResult[22] = closure_14(tmp(4886).Text, obj3);
              class R {
                constructor() {
                  currentUser = closure_10.getCurrentUser();
                  channel = closure_7.getChannel(closure_9.getVoiceChannelId());
                  guildId = undefined;
                  tmp2 = closure_8;
                  if (channel != null) {
                    guildId = channel.getGuildId();
                  }
                  guild = closure_8.getGuild(guildId);
                  premiumTier = undefined;
                  if (guild != null) {
                    premiumTier = guild.premiumTier;
                  }
                  return { user: currentUser, guildPremiumTier: premiumTier };
                }
              }
              const tmp44 = closure_14(tmp(4886).Text, obj3);
            }
            const _Symbol4 = Symbol;
            if (cResult[23] === Symbol.for("react.memo_cache_sentinel")) {
              let intl2 = tmp(1126).intl;
              const stringResult1 = intl2.string(tmp22(2327)["/XSr8v"]);
              class H {
                constructor() {
                  obj = closure_6;
                  currentUserActiveStream = closure_6.getCurrentUserActiveStream();
                  tmp2 = null != currentUserActiveStream;
                  if (tmp2) {
                    tmp3 = closure_12;
                    tmp2 = currentUserActiveStream.state === closure_12.ACTIVE;
                  }
                  obj1 = { isStreaming: tmp2, activeSourceId: null };
                  streamerActiveStreamMetadata = obj.getStreamerActiveStreamMetadata();
                  sourceId = undefined;
                  if (streamerActiveStreamMetadata != null) {
                    sourceId = streamerActiveStreamMetadata.sourceId;
                  }
                  if (sourceId == null) {
                    sourceId = null;
                  }
                  obj1.activeSourceId = sourceId;
                  return obj1;
                }
              }
              cResult[23] = stringResult1;
              let tmp45 = stringResult1;
            } else {
              tmp45 = cResult[23];
            }
            if (cResult[24] === analyticsLocations) {
              if (cResult[25] === tmp37) {
                if (cResult[26] === tmp14) {
                  if (cResult[27] === isStreaming) {
                    if (cResult[28] === tmp35) {
                      let tmp47 = cResult[29];
                    }
                    if (cResult[30] !== tmp38) {
                      const mapped = closure_18.map((item) => {
                        const merged = Object.assign(ApplicationStreamStates(item));
                        return state(TableRadioRow.TableRadioRow, {}, item);
                      });
                      class H {
                        constructor() {
                          obj = closure_6;
                          currentUserActiveStream = closure_6.getCurrentUserActiveStream();
                          tmp2 = null != currentUserActiveStream;
                          if (tmp2) {
                            tmp3 = closure_12;
                            tmp2 = currentUserActiveStream.state === closure_12.ACTIVE;
                          }
                          obj1 = { isStreaming: tmp2, activeSourceId: null };
                          streamerActiveStreamMetadata = obj.getStreamerActiveStreamMetadata();
                          sourceId = undefined;
                          if (streamerActiveStreamMetadata != null) {
                            sourceId = streamerActiveStreamMetadata.sourceId;
                          }
                          if (sourceId == null) {
                            sourceId = null;
                          }
                          obj1.activeSourceId = sourceId;
                          return obj1;
                        }
                      }
                      cResult[31] = mapped;
                      let tmp48 = mapped;
                    } else {
                      tmp48 = cResult[31];
                    }
                    if (cResult[32] === value) {
                      if (cResult[33] === tmp47) {
                        if (cResult[34] === tmp48) {
                          let tmp51 = cResult[35];
                        }
                        if (cResult[36] === tmp25.section) {
                          if (cResult[37] === tmp51) {
                            let tmp53 = cResult[38];
                          }
                          const tmp57 = "one-step" === goLiveUpsellVariant && sharedValue.get();
                          class H {
                            constructor() {
                              obj = closure_6;
                              currentUserActiveStream = closure_6.getCurrentUserActiveStream();
                              tmp2 = null != currentUserActiveStream;
                              if (tmp2) {
                                tmp3 = closure_12;
                                tmp2 = currentUserActiveStream.state === closure_12.ACTIVE;
                              }
                              obj1 = { isStreaming: tmp2, activeSourceId: null };
                              streamerActiveStreamMetadata = obj.getStreamerActiveStreamMetadata();
                              sourceId = undefined;
                              if (streamerActiveStreamMetadata != null) {
                                sourceId = streamerActiveStreamMetadata.sourceId;
                              }
                              if (sourceId == null) {
                                sourceId = null;
                              }
                              obj1.activeSourceId = sourceId;
                              return obj1;
                            }
                          }
                          if (cResult[39] === analyticsLocations) {
                            if (cResult[40] === goLiveUpsellVariant) {
                              if (cResult[41] === sharedValue) {
                                if (cResult[42] === tmp25.section) {
                                  let tmp58 = cResult[43];
                                }
                                const _Symbol5 = Symbol;
                                class H {
                                  constructor() {
                                    obj = closure_6;
                                    currentUserActiveStream = closure_6.getCurrentUserActiveStream();
                                    tmp2 = null != currentUserActiveStream;
                                    if (tmp2) {
                                      tmp3 = closure_12;
                                      tmp2 = currentUserActiveStream.state === closure_12.ACTIVE;
                                    }
                                    obj1 = { isStreaming: tmp2, activeSourceId: null };
                                    streamerActiveStreamMetadata = obj.getStreamerActiveStreamMetadata();
                                    sourceId = undefined;
                                    if (streamerActiveStreamMetadata != null) {
                                      sourceId = streamerActiveStreamMetadata.sourceId;
                                    }
                                    if (sourceId == null) {
                                      sourceId = null;
                                    }
                                    obj1.activeSourceId = sourceId;
                                    return obj1;
                                  }
                                }
                                if (tmp63 === Symbol.for("react.memo_cache_sentinel")) {
                                  let intl4 = tmp(1126).intl;
                                  const stringResult2 = intl4.string(tmp22(2327)["j+eAMQ"]);
                                  class H {
                                    constructor() {
                                      obj = closure_6;
                                      currentUserActiveStream = closure_6.getCurrentUserActiveStream();
                                      tmp2 = null != currentUserActiveStream;
                                      if (tmp2) {
                                        tmp3 = closure_12;
                                        tmp2 = currentUserActiveStream.state === closure_12.ACTIVE;
                                      }
                                      obj1 = { isStreaming: tmp2, activeSourceId: null };
                                      streamerActiveStreamMetadata = obj.getStreamerActiveStreamMetadata();
                                      sourceId = undefined;
                                      if (streamerActiveStreamMetadata != null) {
                                        sourceId = streamerActiveStreamMetadata.sourceId;
                                      }
                                      if (sourceId == null) {
                                        sourceId = null;
                                      }
                                      obj1.activeSourceId = sourceId;
                                      return obj1;
                                    }
                                  }
                                  cResult[44] = stringResult2;
                                  let tmp64 = stringResult2;
                                } else {
                                  tmp64 = cResult[44];
                                }
                                const _Symbol6 = Symbol;
                                if (cResult[45] === Symbol.for("react.memo_cache_sentinel")) {
                                  let intl5 = tmp(1126).intl;
                                  const stringResult3 = intl5.string(tmp22(2327).uwMBDo);
                                  class H {
                                    constructor() {
                                      obj = closure_6;
                                      currentUserActiveStream = closure_6.getCurrentUserActiveStream();
                                      tmp2 = null != currentUserActiveStream;
                                      if (tmp2) {
                                        tmp3 = closure_12;
                                        tmp2 = currentUserActiveStream.state === closure_12.ACTIVE;
                                      }
                                      obj1 = { isStreaming: tmp2, activeSourceId: null };
                                      streamerActiveStreamMetadata = obj.getStreamerActiveStreamMetadata();
                                      sourceId = undefined;
                                      if (streamerActiveStreamMetadata != null) {
                                        sourceId = streamerActiveStreamMetadata.sourceId;
                                      }
                                      if (sourceId == null) {
                                        sourceId = null;
                                      }
                                      obj1.activeSourceId = sourceId;
                                      return obj1;
                                    }
                                  }
                                  cResult[45] = stringResult3;
                                  let tmp66 = stringResult3;
                                } else {
                                  tmp66 = cResult[45];
                                }
                                if (cResult[46] === tmp37) {
                                  if (cResult[47] === value) {
                                    let tmp68 = cResult[48];
                                  }
                                  if (cResult[49] === tmp35) {
                                    if (cResult[50] === tmp68) {
                                      let tmp70 = cResult[51];
                                    }
                                    if (cResult[52] === tmp25.section) {
                                      if (cResult[53] === tmp70) {
                                        let tmp74 = cResult[54];
                                      }
                                      if (cResult[55] !== isStreaming) {
                                        const Button = tmp(5594).Button;
                                        if (isStreaming) {
                                          let obj4 = { size: "lg", variant: "destructive", text: null, onPress: null };
                                          class H {
                                            constructor() {
                                              obj = closure_6;
                                              currentUserActiveStream = closure_6.getCurrentUserActiveStream();
                                              tmp2 = null != currentUserActiveStream;
                                              if (tmp2) {
                                                tmp3 = closure_12;
                                                tmp2 = currentUserActiveStream.state === closure_12.ACTIVE;
                                              }
                                              obj1 = { isStreaming: tmp2, activeSourceId: null };
                                              streamerActiveStreamMetadata = obj.getStreamerActiveStreamMetadata();
                                              sourceId = undefined;
                                              if (streamerActiveStreamMetadata != null) {
                                                sourceId = streamerActiveStreamMetadata.sourceId;
                                              }
                                              if (sourceId == null) {
                                                sourceId = null;
                                              }
                                              obj1.activeSourceId = sourceId;
                                              return obj1;
                                            }
                                          }
                                          obj4.onPress = function onPress() {
                                            user(9631).stopScreenshare();
                                            const obj = user(9631);
                                            guildPremiumTier(4854).hideActionSheet(MobileGoLiveActionSheet);
                                          };
                                          let obj5 = obj4;
                                        } else {
                                          obj5 = { size: "lg", variant: "primary", text: null, onPress: null };
                                          const string = tmp(1126).intl.string;
                                          class H {
                                            constructor() {
                                              obj = closure_6;
                                              currentUserActiveStream = closure_6.getCurrentUserActiveStream();
                                              tmp2 = null != currentUserActiveStream;
                                              if (tmp2) {
                                                tmp3 = closure_12;
                                                tmp2 = currentUserActiveStream.state === closure_12.ACTIVE;
                                              }
                                              obj1 = { isStreaming: tmp2, activeSourceId: null };
                                              streamerActiveStreamMetadata = obj.getStreamerActiveStreamMetadata();
                                              sourceId = undefined;
                                              if (streamerActiveStreamMetadata != null) {
                                                sourceId = streamerActiveStreamMetadata.sourceId;
                                              }
                                              if (sourceId == null) {
                                                sourceId = null;
                                              }
                                              obj1.activeSourceId = sourceId;
                                              return obj1;
                                            }
                                          }
                                          obj5.onPress = function onPress() {
                                            guildPremiumTier(4854).hideActionSheet(MobileGoLiveActionSheet);
                                            const obj = guildPremiumTier(4854);
                                            user(9631).startStream();
                                          };
                                        }
                                        class H {
                                          constructor() {
                                            obj = closure_6;
                                            currentUserActiveStream = closure_6.getCurrentUserActiveStream();
                                            tmp2 = null != currentUserActiveStream;
                                            if (tmp2) {
                                              tmp3 = closure_12;
                                              tmp2 = currentUserActiveStream.state === closure_12.ACTIVE;
                                            }
                                            obj1 = { isStreaming: tmp2, activeSourceId: null };
                                            streamerActiveStreamMetadata = obj.getStreamerActiveStreamMetadata();
                                            sourceId = undefined;
                                            if (streamerActiveStreamMetadata != null) {
                                              sourceId = streamerActiveStreamMetadata.sourceId;
                                            }
                                            if (sourceId == null) {
                                              sourceId = null;
                                            }
                                            obj1.activeSourceId = sourceId;
                                            return obj1;
                                          }
                                        }
                                        cResult[55] = isStreaming;
                                        cResult[56] = tmp80;
                                      } else {
                                        if (cResult[57] === tmp25.section) {
                                          if (cResult[58] === tmp78) {
                                            let tmp82 = cResult[59];
                                          }
                                          if (cResult[60] === SafeAreaPaddingView) {
                                            if (cResult[61] === tmp25.wrapper) {
                                              if (cResult[62] === tmp42) {
                                                if (cResult[63] === tmp53) {
                                                  if (cResult[64] === tmp57) {
                                                    if (cResult[65] === tmp58) {
                                                      if (cResult[66] === tmp74) {
                                                        if (cResult[67] === tmp82) {
                                                          let tmp86 = cResult[68];
                                                        }
                                                        if (cResult[69] === BottomSheetScrollView) {
                                                          if (cResult[70] === tmp86) {
                                                            let tmp90 = cResult[71];
                                                          }
                                                          if (cResult[72] === BottomSheet) {
                                                            if (cResult[73] === tmp90) {
                                                              let tmp94 = cResult[74];
                                                            }
                                                            if (cResult[75] === AnalyticsLocationProvider) {
                                                              if (cResult[76] === analyticsLocations) {
                                                                if (cResult[77] === tmp94) {
                                                                  let tmp98 = cResult[78];
                                                                }
                                                                return tmp98;
                                                              }
                                                            }
                                                            class H {
                                                              constructor() {
                                                                obj = closure_6;
                                                                currentUserActiveStream = closure_6.getCurrentUserActiveStream();
                                                                tmp2 = null != currentUserActiveStream;
                                                                if (tmp2) {
                                                                  tmp3 = closure_12;
                                                                  tmp2 = currentUserActiveStream.state === closure_12.ACTIVE;
                                                                }
                                                                obj1 = { isStreaming: tmp2, activeSourceId: null };
                                                                streamerActiveStreamMetadata = obj.getStreamerActiveStreamMetadata();
                                                                sourceId = undefined;
                                                                if (streamerActiveStreamMetadata != null) {
                                                                  sourceId = streamerActiveStreamMetadata.sourceId;
                                                                }
                                                                if (sourceId == null) {
                                                                  sourceId = null;
                                                                }
                                                                obj1.activeSourceId = sourceId;
                                                                return obj1;
                                                              }
                                                            }
                                                            tmp100[0] = analyticsLocations;
                                                            tmp100[1] = tmp94;
                                                            const tmp101 = closure_14(AnalyticsLocationProvider, tmp100);
                                                            cResult[75] = AnalyticsLocationProvider;
                                                            class R {
                                                              constructor() {
                                                                currentUser = closure_10.getCurrentUser();
                                                                channel = closure_7.getChannel(closure_9.getVoiceChannelId());
                                                                guildId = undefined;
                                                                tmp2 = closure_8;
                                                                if (channel != null) {
                                                                  guildId = channel.getGuildId();
                                                                }
                                                                guild = closure_8.getGuild(guildId);
                                                                premiumTier = undefined;
                                                                if (guild != null) {
                                                                  premiumTier = guild.premiumTier;
                                                                }
                                                                return { user: currentUser, guildPremiumTier: premiumTier };
                                                              }
                                                            }
                                                            cResult[76] = analyticsLocations;
                                                            cResult[77] = tmp94;
                                                            cResult[78] = tmp101;
                                                            tmp98 = tmp101;
                                                          }
                                                          class H {
                                                            constructor() {
                                                              obj = closure_6;
                                                              currentUserActiveStream = closure_6.getCurrentUserActiveStream();
                                                              tmp2 = null != currentUserActiveStream;
                                                              if (tmp2) {
                                                                tmp3 = closure_12;
                                                                tmp2 = currentUserActiveStream.state === closure_12.ACTIVE;
                                                              }
                                                              obj1 = { isStreaming: tmp2, activeSourceId: null };
                                                              streamerActiveStreamMetadata = obj.getStreamerActiveStreamMetadata();
                                                              sourceId = undefined;
                                                              if (streamerActiveStreamMetadata != null) {
                                                                sourceId = streamerActiveStreamMetadata.sourceId;
                                                              }
                                                              if (sourceId == null) {
                                                                sourceId = null;
                                                              }
                                                              obj1.activeSourceId = sourceId;
                                                              return obj1;
                                                            }
                                                          }
                                                          tmp96[1] = tmp90;
                                                          const tmp97 = closure_14(BottomSheet, tmp96);
                                                          cResult[72] = BottomSheet;
                                                          class R {
                                                            constructor() {
                                                              currentUser = closure_10.getCurrentUser();
                                                              channel = closure_7.getChannel(closure_9.getVoiceChannelId());
                                                              guildId = undefined;
                                                              tmp2 = closure_8;
                                                              if (channel != null) {
                                                                guildId = channel.getGuildId();
                                                              }
                                                              guild = closure_8.getGuild(guildId);
                                                              premiumTier = undefined;
                                                              if (guild != null) {
                                                                premiumTier = guild.premiumTier;
                                                              }
                                                              return { user: currentUser, guildPremiumTier: premiumTier };
                                                            }
                                                          }
                                                          cResult[74] = tmp97;
                                                          tmp94 = tmp97;
                                                        }
                                                        class H {
                                                          constructor() {
                                                            obj = closure_6;
                                                            currentUserActiveStream = closure_6.getCurrentUserActiveStream();
                                                            tmp2 = null != currentUserActiveStream;
                                                            if (tmp2) {
                                                              tmp3 = closure_12;
                                                              tmp2 = currentUserActiveStream.state === closure_12.ACTIVE;
                                                            }
                                                            obj1 = { isStreaming: tmp2, activeSourceId: null };
                                                            streamerActiveStreamMetadata = obj.getStreamerActiveStreamMetadata();
                                                            sourceId = undefined;
                                                            if (streamerActiveStreamMetadata != null) {
                                                              sourceId = streamerActiveStreamMetadata.sourceId;
                                                            }
                                                            if (sourceId == null) {
                                                              sourceId = null;
                                                            }
                                                            obj1.activeSourceId = sourceId;
                                                            return obj1;
                                                          }
                                                        }
                                                        tmp92[0] = tmp86;
                                                        const tmp93 = closure_14(BottomSheetScrollView, tmp92);
                                                        cResult[69] = BottomSheetScrollView;
                                                        class R {
                                                          constructor() {
                                                            currentUser = closure_10.getCurrentUser();
                                                            channel = closure_7.getChannel(closure_9.getVoiceChannelId());
                                                            guildId = undefined;
                                                            tmp2 = closure_8;
                                                            if (channel != null) {
                                                              guildId = channel.getGuildId();
                                                            }
                                                            guild = closure_8.getGuild(guildId);
                                                            premiumTier = undefined;
                                                            if (guild != null) {
                                                              premiumTier = guild.premiumTier;
                                                            }
                                                            return { user: currentUser, guildPremiumTier: premiumTier };
                                                          }
                                                        }
                                                        cResult[71] = tmp93;
                                                        tmp90 = tmp93;
                                                      }
                                                    }
                                                  }
                                                }
                                              }
                                            }
                                          }
                                          class H {
                                            constructor() {
                                              obj = closure_6;
                                              currentUserActiveStream = closure_6.getCurrentUserActiveStream();
                                              tmp2 = null != currentUserActiveStream;
                                              if (tmp2) {
                                                tmp3 = closure_12;
                                                tmp2 = currentUserActiveStream.state === closure_12.ACTIVE;
                                              }
                                              obj1 = { isStreaming: tmp2, activeSourceId: null };
                                              streamerActiveStreamMetadata = obj.getStreamerActiveStreamMetadata();
                                              sourceId = undefined;
                                              if (streamerActiveStreamMetadata != null) {
                                                sourceId = streamerActiveStreamMetadata.sourceId;
                                              }
                                              if (sourceId == null) {
                                                sourceId = null;
                                              }
                                              obj1.activeSourceId = sourceId;
                                              return obj1;
                                            }
                                          }
                                          tmp88[1] = tmp39;
                                          const items3 = [tmp42, tmp53, tmp57, , , ];
                                          class R {
                                            constructor() {
                                              currentUser = closure_10.getCurrentUser();
                                              channel = closure_7.getChannel(closure_9.getVoiceChannelId());
                                              guildId = undefined;
                                              tmp2 = closure_8;
                                              if (channel != null) {
                                                guildId = channel.getGuildId();
                                              }
                                              guild = closure_8.getGuild(guildId);
                                              premiumTier = undefined;
                                              if (guild != null) {
                                                premiumTier = guild.premiumTier;
                                              }
                                              return { user: currentUser, guildPremiumTier: premiumTier };
                                            }
                                          }
                                          items3[4] = tmp74;
                                          items3[5] = tmp82;
                                          tmp88[2] = items3;
                                          const tmp89 = closure_15(SafeAreaPaddingView, tmp88);
                                          cResult[60] = SafeAreaPaddingView;
                                          cResult[61] = tmp25.wrapper;
                                          class Ee {
                                            constructor(arg0) {
                                              if (closure_2(arg0)) {
                                                tmp7 = closure_8;
                                                tmp8 = closure_8(arg0);
                                                tmp9 = closure_11;
                                                tmp10 = closure_9;
                                                tmp11 = closure_11(arg0, closure_9);
                                                tmp12 = isStreaming;
                                                if (isStreaming) {
                                                  tmp13 = closure_1;
                                                  tmp14 = closure_2;
                                                  obj3 = closure_1(closure_2[15]);
                                                  tmp15 = MobileGoLiveActionSheet;
                                                  hideActionSheetResult = obj3.hideActionSheet(MobileGoLiveActionSheet);
                                                }
                                              } else {
                                                tmp = closure_1;
                                                tmp2 = closure_2;
                                                obj = closure_1(closure_2[41]);
                                                obj1 = { initialUpsellKey: null, analyticsLocations: null };
                                                tmp3 = closure_0;
                                                tmp4 = closure_2;
                                                obj1.initialUpsellKey = closure_0(closure_2[42]).UpsellTypes.STREAM_HIGH_QUALITY;
                                                tmp5 = analyticsLocations;
                                                obj1.analyticsLocations = analyticsLocations;
                                                result = obj.handleShowUpsellAlert(obj1);
                                              }
                                              return;
                                            }
                                          }
                                          cResult[63] = tmp53;
                                          cResult[64] = tmp57;
                                          cResult[65] = tmp58;
                                          cResult[66] = tmp74;
                                          cResult[67] = tmp82;
                                          cResult[68] = tmp89;
                                          tmp86 = tmp89;
                                        }
                                        class H {
                                          constructor() {
                                            obj = closure_6;
                                            currentUserActiveStream = closure_6.getCurrentUserActiveStream();
                                            tmp2 = null != currentUserActiveStream;
                                            if (tmp2) {
                                              tmp3 = closure_12;
                                              tmp2 = currentUserActiveStream.state === closure_12.ACTIVE;
                                            }
                                            obj1 = { isStreaming: tmp2, activeSourceId: null };
                                            streamerActiveStreamMetadata = obj.getStreamerActiveStreamMetadata();
                                            sourceId = undefined;
                                            if (streamerActiveStreamMetadata != null) {
                                              sourceId = streamerActiveStreamMetadata.sourceId;
                                            }
                                            if (sourceId == null) {
                                              sourceId = null;
                                            }
                                            obj1.activeSourceId = sourceId;
                                            return obj1;
                                          }
                                        }
                                        tmp84[0] = tmp25.section;
                                        tmp84[1] = cResult[56];
                                        const tmp85 = closure_14(tmp22(5976), tmp84);
                                        cResult[57] = tmp25.section;
                                        class R {
                                          constructor() {
                                            currentUser = closure_10.getCurrentUser();
                                            channel = closure_7.getChannel(closure_9.getVoiceChannelId());
                                            guildId = undefined;
                                            tmp2 = closure_8;
                                            if (channel != null) {
                                              guildId = channel.getGuildId();
                                            }
                                            guild = closure_8.getGuild(guildId);
                                            premiumTier = undefined;
                                            if (guild != null) {
                                              premiumTier = guild.premiumTier;
                                            }
                                            return { user: currentUser, guildPremiumTier: premiumTier };
                                          }
                                        }
                                        cResult[58] = cResult[56];
                                        cResult[59] = tmp85;
                                        tmp82 = tmp85;
                                      }
                                    }
                                    class H {
                                      constructor() {
                                        obj = closure_6;
                                        currentUserActiveStream = closure_6.getCurrentUserActiveStream();
                                        tmp2 = null != currentUserActiveStream;
                                        if (tmp2) {
                                          tmp3 = closure_12;
                                          tmp2 = currentUserActiveStream.state === closure_12.ACTIVE;
                                        }
                                        obj1 = { isStreaming: tmp2, activeSourceId: null };
                                        streamerActiveStreamMetadata = obj.getStreamerActiveStreamMetadata();
                                        sourceId = undefined;
                                        if (streamerActiveStreamMetadata != null) {
                                          sourceId = streamerActiveStreamMetadata.sourceId;
                                        }
                                        if (sourceId == null) {
                                          sourceId = null;
                                        }
                                        obj1.activeSourceId = sourceId;
                                        return obj1;
                                      }
                                    }
                                    tmp76[0] = tmp25.section;
                                    tmp76[1] = tmp70;
                                    const tmp77 = closure_14(tmp22(5976), tmp76);
                                    cResult[52] = tmp25.section;
                                    class R {
                                      constructor() {
                                        currentUser = closure_10.getCurrentUser();
                                        channel = closure_7.getChannel(closure_9.getVoiceChannelId());
                                        guildId = undefined;
                                        tmp2 = closure_8;
                                        if (channel != null) {
                                          guildId = channel.getGuildId();
                                        }
                                        guild = closure_8.getGuild(guildId);
                                        premiumTier = undefined;
                                        if (guild != null) {
                                          premiumTier = guild.premiumTier;
                                        }
                                        return { user: currentUser, guildPremiumTier: premiumTier };
                                      }
                                    }
                                    cResult[53] = tmp70;
                                    cResult[54] = tmp77;
                                    tmp74 = tmp77;
                                  }
                                  class H {
                                    constructor() {
                                      obj = closure_6;
                                      currentUserActiveStream = closure_6.getCurrentUserActiveStream();
                                      tmp2 = null != currentUserActiveStream;
                                      if (tmp2) {
                                        tmp3 = closure_12;
                                        tmp2 = currentUserActiveStream.state === closure_12.ACTIVE;
                                      }
                                      obj1 = { isStreaming: tmp2, activeSourceId: null };
                                      streamerActiveStreamMetadata = obj.getStreamerActiveStreamMetadata();
                                      sourceId = undefined;
                                      if (streamerActiveStreamMetadata != null) {
                                        sourceId = streamerActiveStreamMetadata.sourceId;
                                      }
                                      if (sourceId == null) {
                                        sourceId = null;
                                      }
                                      obj1.activeSourceId = sourceId;
                                      return obj1;
                                    }
                                  }
                                  tmp72[0] = tmp64;
                                  let obj7 = { label: tmp66, value: tmp35, onValueChange: null };
                                  class R {
                                    constructor() {
                                      currentUser = closure_10.getCurrentUser();
                                      channel = closure_7.getChannel(closure_9.getVoiceChannelId());
                                      guildId = undefined;
                                      tmp2 = closure_8;
                                      if (channel != null) {
                                        guildId = channel.getGuildId();
                                      }
                                      guild = closure_8.getGuild(guildId);
                                      premiumTier = undefined;
                                      if (guild != null) {
                                        premiumTier = guild.premiumTier;
                                      }
                                      return { user: currentUser, guildPremiumTier: premiumTier };
                                    }
                                  }
                                  tmp72[2] = closure_14(tmp(6698).TableSwitchRow, obj7);
                                  const tmp73 = closure_14(tmp(6074).TableRowGroup, tmp72);
                                  cResult[49] = tmp35;
                                  cResult[50] = tmp68;
                                  cResult[51] = tmp73;
                                  tmp70 = tmp73;
                                }
                                class R {
                                  constructor() {
                                    currentUser = closure_10.getCurrentUser();
                                    channel = closure_7.getChannel(closure_9.getVoiceChannelId());
                                    guildId = undefined;
                                    tmp2 = closure_8;
                                    if (channel != null) {
                                      guildId = channel.getGuildId();
                                    }
                                    guild = closure_8.getGuild(guildId);
                                    premiumTier = undefined;
                                    if (guild != null) {
                                      premiumTier = guild.premiumTier;
                                    }
                                    return { user: currentUser, guildPremiumTier: premiumTier };
                                  }
                                }
                                cResult[46] = tmp37;
                                cResult[47] = value;
                                cResult[48] = tmp69;
                                tmp68 = tmp69;
                              }
                            }
                          }
                          let tmp59 = "two-step" === goLiveUpsellVariant && sharedValue.get();
                          if (tmp59) {
                            let obj8 = { style: tmp25.section, children: null };
                            class H {
                              constructor() {
                                obj = closure_6;
                                currentUserActiveStream = closure_6.getCurrentUserActiveStream();
                                tmp2 = null != currentUserActiveStream;
                                if (tmp2) {
                                  tmp3 = closure_12;
                                  tmp2 = currentUserActiveStream.state === closure_12.ACTIVE;
                                }
                                obj1 = { isStreaming: tmp2, activeSourceId: null };
                                streamerActiveStreamMetadata = obj.getStreamerActiveStreamMetadata();
                                sourceId = undefined;
                                if (streamerActiveStreamMetadata != null) {
                                  sourceId = streamerActiveStreamMetadata.sourceId;
                                }
                                if (sourceId == null) {
                                  sourceId = null;
                                }
                                obj1.activeSourceId = sourceId;
                                return obj1;
                              }
                            }
                            let obj9 = { text: null, onPress: null };
                            let intl3 = tmp(1126).intl;
                            obj9.text = intl3.string(tmp22(2327).u72Prd);
                            class R {
                              constructor() {
                                currentUser = closure_10.getCurrentUser();
                                channel = closure_7.getChannel(closure_9.getVoiceChannelId());
                                guildId = undefined;
                                tmp2 = closure_8;
                                if (channel != null) {
                                  guildId = channel.getGuildId();
                                }
                                guild = closure_8.getGuild(guildId);
                                premiumTier = undefined;
                                if (guild != null) {
                                  premiumTier = guild.premiumTier;
                                }
                                return { user: currentUser, guildPremiumTier: premiumTier };
                              }
                            }
                            obj8.children = closure_14(tmp22(9648), obj9);
                            tmp59 = closure_14(tmp61, obj8);
                            const tmp22Result = tmp22(9648);
                          }
                          class R {
                            constructor() {
                              currentUser = closure_10.getCurrentUser();
                              channel = closure_7.getChannel(closure_9.getVoiceChannelId());
                              guildId = undefined;
                              tmp2 = closure_8;
                              if (channel != null) {
                                guildId = channel.getGuildId();
                              }
                              guild = closure_8.getGuild(guildId);
                              premiumTier = undefined;
                              if (guild != null) {
                                premiumTier = guild.premiumTier;
                              }
                              return { user: currentUser, guildPremiumTier: premiumTier };
                            }
                          }
                          cResult[40] = goLiveUpsellVariant;
                          cResult[41] = sharedValue;
                          cResult[42] = tmp25.section;
                          cResult[43] = tmp59;
                          tmp58 = tmp59;
                        }
                        class H {
                          constructor() {
                            obj = closure_6;
                            currentUserActiveStream = closure_6.getCurrentUserActiveStream();
                            tmp2 = null != currentUserActiveStream;
                            if (tmp2) {
                              tmp3 = closure_12;
                              tmp2 = currentUserActiveStream.state === closure_12.ACTIVE;
                            }
                            obj1 = { isStreaming: tmp2, activeSourceId: null };
                            streamerActiveStreamMetadata = obj.getStreamerActiveStreamMetadata();
                            sourceId = undefined;
                            if (streamerActiveStreamMetadata != null) {
                              sourceId = streamerActiveStreamMetadata.sourceId;
                            }
                            if (sourceId == null) {
                              sourceId = null;
                            }
                            obj1.activeSourceId = sourceId;
                            return obj1;
                          }
                        }
                        tmp55[0] = tmp25.section;
                        tmp55[1] = tmp51;
                        const tmp56 = closure_14(tmp22(5976), tmp55);
                        cResult[36] = tmp25.section;
                        class R {
                          constructor() {
                            currentUser = closure_10.getCurrentUser();
                            channel = closure_7.getChannel(closure_9.getVoiceChannelId());
                            guildId = undefined;
                            tmp2 = closure_8;
                            if (channel != null) {
                              guildId = channel.getGuildId();
                            }
                            guild = closure_8.getGuild(guildId);
                            premiumTier = undefined;
                            if (guild != null) {
                              premiumTier = guild.premiumTier;
                            }
                            return { user: currentUser, guildPremiumTier: premiumTier };
                          }
                        }
                        cResult[37] = tmp51;
                        cResult[38] = tmp56;
                        tmp53 = tmp56;
                      }
                    }
                    class H {
                      constructor() {
                        obj = closure_6;
                        currentUserActiveStream = closure_6.getCurrentUserActiveStream();
                        tmp2 = null != currentUserActiveStream;
                        if (tmp2) {
                          tmp3 = closure_12;
                          tmp2 = currentUserActiveStream.state === closure_12.ACTIVE;
                        }
                        obj1 = { isStreaming: tmp2, activeSourceId: null };
                        streamerActiveStreamMetadata = obj.getStreamerActiveStreamMetadata();
                        sourceId = undefined;
                        if (streamerActiveStreamMetadata != null) {
                          sourceId = streamerActiveStreamMetadata.sourceId;
                        }
                        if (sourceId == null) {
                          sourceId = null;
                        }
                        obj1.activeSourceId = sourceId;
                        return obj1;
                      }
                    }
                    let obj10 = { title: tmp45, hasIcons: false, children: null };
                    const obj11 = { value, onChange: null, hasIcons: true, children: null };
                    class R {
                      constructor() {
                        currentUser = closure_10.getCurrentUser();
                        channel = closure_7.getChannel(closure_9.getVoiceChannelId());
                        guildId = undefined;
                        tmp2 = closure_8;
                        if (channel != null) {
                          guildId = channel.getGuildId();
                        }
                        guild = closure_8.getGuild(guildId);
                        premiumTier = undefined;
                        if (guild != null) {
                          premiumTier = guild.premiumTier;
                        }
                        return { user: currentUser, guildPremiumTier: premiumTier };
                      }
                    }
                    obj11.children = tmp48;
                    obj10.children = closure_14(tmp(6072).TableRadioGroup, obj11);
                    const tmp52 = closure_14(tmp(6074).TableRowGroup, obj10);
                    cResult[32] = value;
                    cResult[33] = tmp47;
                    cResult[34] = tmp48;
                    class Ee {
                      constructor(arg0) {
                        if (closure_2(arg0)) {
                          tmp7 = closure_8;
                          tmp8 = closure_8(arg0);
                          tmp9 = closure_11;
                          tmp10 = closure_9;
                          tmp11 = closure_11(arg0, closure_9);
                          tmp12 = isStreaming;
                          if (isStreaming) {
                            tmp13 = closure_1;
                            tmp14 = closure_2;
                            obj3 = closure_1(closure_2[15]);
                            tmp15 = MobileGoLiveActionSheet;
                            hideActionSheetResult = obj3.hideActionSheet(MobileGoLiveActionSheet);
                          }
                        } else {
                          tmp = closure_1;
                          tmp2 = closure_2;
                          obj = closure_1(closure_2[41]);
                          obj1 = { initialUpsellKey: null, analyticsLocations: null };
                          tmp3 = closure_0;
                          tmp4 = closure_2;
                          obj1.initialUpsellKey = closure_0(closure_2[42]).UpsellTypes.STREAM_HIGH_QUALITY;
                          tmp5 = analyticsLocations;
                          obj1.analyticsLocations = analyticsLocations;
                          result = obj.handleShowUpsellAlert(obj1);
                        }
                        return;
                      }
                    }
                    cResult[35] = tmp52;
                    tmp51 = tmp52;
                  }
                }
              }
            }
            class Ee {
              constructor(arg0) {
                if (closure_2(arg0)) {
                  tmp7 = closure_8;
                  tmp8 = closure_8(arg0);
                  tmp9 = closure_11;
                  tmp10 = closure_9;
                  tmp11 = closure_11(arg0, closure_9);
                  tmp12 = isStreaming;
                  if (isStreaming) {
                    tmp13 = closure_1;
                    tmp14 = closure_2;
                    obj3 = closure_1(closure_2[15]);
                    tmp15 = MobileGoLiveActionSheet;
                    hideActionSheetResult = obj3.hideActionSheet(MobileGoLiveActionSheet);
                  }
                } else {
                  tmp = closure_1;
                  tmp2 = closure_2;
                  obj = closure_1(closure_2[41]);
                  obj1 = { initialUpsellKey: null, analyticsLocations: null };
                  tmp3 = closure_0;
                  tmp4 = closure_2;
                  obj1.initialUpsellKey = closure_0(closure_2[42]).UpsellTypes.STREAM_HIGH_QUALITY;
                  tmp5 = analyticsLocations;
                  obj1.analyticsLocations = analyticsLocations;
                  result = obj.handleShowUpsellAlert(obj1);
                }
                return;
              }
            }
            cResult[24] = analyticsLocations;
            cResult[25] = tmp37;
            cResult[26] = tmp14;
            cResult[27] = isStreaming;
            cResult[28] = tmp35;
            cResult[29] = Ee;
            tmp47 = Ee;
          }
        }
      }
      const fn2 = function z(preset, soundshareEnabled) {
        let items = getStreamSettingsForPresetDefault(preset, user, guildPremiumTier);
        if (items == null) {
          items = [];
        }
        [tmp4, tmp5] = items;
        if (null != tmp4) {
          if (null != tmp5) {
            const obj2 = { preset, resolution: tmp4, frameRate: tmp5, soundshareEnabled };
            StreamActionCreators.updateStreamSettings(obj2);
            if (isStreaming) {
              const obj = { qualityOptions: null, context: null };
              const obj3 = { preset, resolution: tmp4, frameRate: tmp5 };
              obj.qualityOptions = obj3;
              obj.context = MediaEngineContextTypes.STREAM;
              if (null != closure_4) {
                const obj4 = { sourceId: tmp7, sound: soundshareEnabled };
                obj.desktopSettings = obj4;
              }
              AudioActionCreatorsDefault.setGoLiveSource(obj);
              const tmpResult = AudioActionCreatorsDefault;
            }
          }
        }
        const tmp3 = _slicedToArray(items, 2);
      };
      cResult[14] = guildPremiumTier;
      cResult[15] = isStreaming;
      cResult[16] = user;
      cResult[17] = fn2;
      tmp37 = fn2;
      const tmpResult6 = tmp(4612);
    }
    if (tmp28) {
      if (closure_18.includes(preset)) {
        let PRESET_MOBILE_DEFAULT = preset;
      }
      class H {
        constructor() {
          obj = closure_6;
          currentUserActiveStream = closure_6.getCurrentUserActiveStream();
          tmp2 = null != currentUserActiveStream;
          if (tmp2) {
            tmp3 = closure_12;
            tmp2 = currentUserActiveStream.state === closure_12.ACTIVE;
          }
          obj1 = { isStreaming: tmp2, activeSourceId: null };
          streamerActiveStreamMetadata = obj.getStreamerActiveStreamMetadata();
          sourceId = undefined;
          if (streamerActiveStreamMetadata != null) {
            sourceId = streamerActiveStreamMetadata.sourceId;
          }
          if (sourceId == null) {
            sourceId = null;
          }
          obj1.activeSourceId = sourceId;
          return obj1;
        }
      }
      cResult[11] = preset;
      cResult[12] = PRESET_MOBILE_DEFAULT;
      tmp26 = PRESET_MOBILE_DEFAULT;
    }
    PRESET_MOBILE_DEFAULT = tmp27.PRESET_MOBILE_DEFAULT;
    const tmp23 = guildPremiumTier(6657);
    tmp28 = preset === ApplicationStreamPresets.PRESET_MOBILE_DEFAULT || preset === ApplicationStreamPresets.PRESET_MOBILE_PERFORMANCE || preset === ApplicationStreamPresets.PRESET_MOBILE_HIGH_QUALITY;
  }
  const fn = function f(arg0) {
    return getStreamSettingsForPreset.canStreamWithPreset(arg0, user, guildPremiumTier);
  };
  cResult[4] = guildPremiumTier;
  cResult[5] = user;
  cResult[6] = fn;
  tmp14 = fn;
  const tmpResult4 = user(504);
}) : (() => {
  let items = [analyticsLocations];
  const stateFromStoresObject = user(callback[21]).useStateFromStoresObject(items, () => analyticsLocations.getState());
  ({ preset, soundshareEnabled } = stateFromStoresObject);
  let obj = user(callback[21]);
  const items1 = [currentUser, first1, value, guild];
  const stateFromStoresObject1 = user(callback[21]).useStateFromStoresObject(items1, () => {
    user = currentUser.getCurrentUser();
    const channel = first.getChannel(first1.getVoiceChannelId());
    let guildId;
    if (channel != null) {
      guildId = channel.getGuildId();
    }
    guild = guild.getGuild(guildId);
    guildPremiumTier = undefined;
    if (guild != null) {
      guildPremiumTier = guild.premiumTier;
    }
    return { user, guildPremiumTier };
  });
  user = stateFromStoresObject1.user;
  let guildPremiumTier = stateFromStoresObject1.guildPremiumTier;
  const items2 = [user, guildPremiumTier];
  callback = activeSourceId.useCallback((arg0) => getStreamSettingsForPreset.canStreamWithPreset(arg0, user, guildPremiumTier), items2);
  let obj2 = user(callback[21]);
  const items3 = [currentUserActiveStream];
  const stateFromStoresObject2 = user(callback[21]).useStateFromStoresObject(items3, () => {
    currentUserActiveStream = currentUserActiveStream.getCurrentUserActiveStream();
    let tmp2 = null != currentUserActiveStream;
    if (tmp2) {
      tmp2 = currentUserActiveStream.state === constants.ACTIVE;
    }
    const obj2 = { isStreaming: tmp2, activeSourceId: null };
    const streamerActiveStreamMetadata = currentUserActiveStream.getStreamerActiveStreamMetadata();
    let sourceId;
    if (streamerActiveStreamMetadata != null) {
      sourceId = streamerActiveStreamMetadata.sourceId;
    }
    if (sourceId == null) {
      sourceId = null;
    }
    obj2.activeSourceId = sourceId;
    return obj2;
  });
  const isStreaming = stateFromStoresObject2.isStreaming;
  activeSourceId = stateFromStoresObject2.activeSourceId;
  let obj4 = user(callback[21]);
  const goLiveUpsellVariant = guildPremiumTier(callback[23]).useConfig({ location: "MobileGoLiveActionSheet" }).goLiveUpsellVariant;
  let obj5 = guildPremiumTier(callback[23]);
  analyticsLocations = guildPremiumTier(callback[24])(guildPremiumTier(callback[25]).MOBILE_GO_LIVE_ACTION_SHEET).analyticsLocations;
  const tmp9 = closure_16();
  currentUserActiveStream = tmp9;
  let tmp11 = preset === ApplicationStreamPresets.PRESET_MOBILE_DEFAULT;
  if (!tmp11) {
    tmp11 = preset === tmp10.PRESET_MOBILE_PERFORMANCE;
  }
  if (!tmp11) {
    tmp11 = preset === tmp10.PRESET_MOBILE_HIGH_QUALITY;
  }
  if (tmp11) {
    const tmp14 = isStreaming(activeSourceId.useState(preset), 2);
    value = tmp14[0];
    guild = tmp14[1];
    const tmp16 = isStreaming(obj3.useState(soundshareEnabled), 2);
    first1 = tmp16[0];
    currentUser = tmp16[1];
    const sharedValue = tmp(tmp2[26]).useSharedValue(!callback(tmp10.PRESET_MOBILE_HIGH_QUALITY));
    const items4 = [user, guildPremiumTier, activeSourceId, isStreaming];
    ApplicationStreamPresets = obj3.useCallback((preset, soundshareEnabled) => {
      let items = getStreamSettingsForPresetDefault(preset, user, guildPremiumTier);
      if (items == null) {
        items = [];
      }
      [tmp4, tmp5] = items;
      if (null != tmp4) {
        if (null != tmp5) {
          const obj2 = { preset, resolution: tmp4, frameRate: tmp5, soundshareEnabled };
          StreamActionCreators.updateStreamSettings(obj2);
          if (isStreaming) {
            const obj = { qualityOptions: null, context: null };
            const obj3 = { preset, resolution: tmp4, frameRate: tmp5 };
            obj.qualityOptions = obj3;
            obj.context = MediaEngineContextTypes.STREAM;
            if (null != activeSourceId) {
              const obj4 = { sourceId: tmp7, sound: soundshareEnabled };
              obj.desktopSettings = obj4;
            }
            AudioActionCreatorsDefault.setGoLiveSource(obj);
            const tmpResult = AudioActionCreatorsDefault;
          }
        }
      }
      const tmp3 = _slicedToArray(items, 2);
    }, items4);
    let obj6 = { value: analyticsLocations, children: null };
    let obj7 = { bottom: true, style: tmp9.wrapper, children: null };
    let obj8 = { style: tmp9.header, variant: "redesign/heading-18/bold", color: "text-strong", accessibilityRole: "header", children: null };
    let intl = tmp(tmp2[30]).intl;
    obj8.children = intl.string(tmp7(tmp2[31]).CrNjqp);
    const items5 = [closure_14(tmp(tmp2[35]).Text, obj8), , , , , ];
    let obj9 = { style: tmp9.section, children: null };
    let tmpResult = tmp(tmp2[26]);
    let obj10 = { title: null, hasIcons: false, children: null };
    let intl2 = tmp(tmp2[30]).intl;
    obj10.title = intl2.string(tmp7(tmp2[31])["/XSr8v"]);
    const obj11 = {
      value,
      onChange(arg0) {
          if (callback(arg0)) {
            guild(arg0);
            closure_11(arg0, first1);
            if (isStreaming) {
              ActionSheetActionCreatorsDefault.hideActionSheet(MobileGoLiveActionSheet);
            }
          } else {
            const obj2 = { initialUpsellKey: ConstantsIOS.UpsellTypes.STREAM_HIGH_QUALITY, analyticsLocations };
            const result = PremiumUpsellUtilsDefault.handleShowUpsellAlert(obj2);
          }
        },
      hasIcons: true,
      children: closure_18.map((value) => {
          const maxSettingsForPreset = getStreamSettingsForPreset.getMaxSettingsForPreset(ApplicationStreamPresets.PRESET_MOBILE_DEFAULT);
          const maxSettingsForPreset1 = getStreamSettingsForPreset.getMaxSettingsForPreset(ApplicationStreamPresets.PRESET_MOBILE_PERFORMANCE);
          const maxSettingsForPreset2 = getStreamSettingsForPreset.getMaxSettingsForPreset(ApplicationStreamPresets.PRESET_MOBILE_HIGH_QUALITY);
          const obj5 = { icon: state(MobilePhoneIcon.MobilePhoneIcon, {}), label: null, subLabel: null };
          const intl = util.intl;
          obj5.label = intl.string(_modDef2327["2qmQ8N"]);
          let str = "";
          let str2 = "";
          if (null != maxSettingsForPreset) {
            const intl2 = util.intl;
            str2 = intl2.formatToPlainString(_modDef2327.ibH7vy, maxSettingsForPreset);
          }
          const obj6 = { [closure_2_11.PRESET_MOBILE_DEFAULT]: obj5 };
          obj5.subLabel = str2;
          const obj7 = { icon: state(SpeedometerIcon.SpeedometerIcon, {}), label: null, subLabel: null };
          const intl3 = util.intl;
          obj7.label = intl3.string(_modDef2327["5eO4/m"]);
          let formatToPlainStringResult = str;
          if (null != maxSettingsForPreset1) {
            const intl4 = util.intl;
            formatToPlainStringResult = intl4.formatToPlainString(_modDef2327.fN0UQY, maxSettingsForPreset1);
          }
          obj7.subLabel = formatToPlainStringResult;
          obj6[ApplicationStreamPresets.PRESET_MOBILE_PERFORMANCE] = obj7;
          const obj8 = { icon: state(ImageSparkleIcon.ImageSparkleIcon, {}), label: null, subLabel: null };
          const obj9 = { style: currentUserActiveStream.highQualityLabel, children: null };
          const obj4 = { value };
          const obj10 = { variant: "text-md/semibold", color: "text-strong", children: null };
          const intl5 = util.intl;
          obj10.children = intl5.string(_modDef2327.nMcXo1);
          const items = [state(Text_Text.Text, obj10), ];
          const tmp8Result = NativeViewDefault;
          items[1] = state(BaseIconImage.BaseIconImage, { source: _modDef9642, size: "xs" });
          obj9.children = items;
          obj8.label = closure_2_15(tmp8Result, obj9);
          if (null != maxSettingsForPreset2) {
            const intl6 = util.intl;
            str = intl6.formatToPlainString(_modDef2327.q4gYBi, maxSettingsForPreset2);
          }
          obj8.subLabel = str;
          obj6[ApplicationStreamPresets.PRESET_MOBILE_HIGH_QUALITY] = obj8;
          const merged = Object.assign(obj6[value]);
          const merged1 = Object.assign(obj4);
          return state(TableRadioRow.TableRadioRow, {}, value);
        })
    };
    obj10.children = closure_14(tmp(tmp2[45]).TableRadioGroup, obj11);
    obj9.children = closure_14(tmp(tmp2[44]).TableRowGroup, obj10);
    items5[1] = closure_14(tmp7(tmp2[34]), obj9);
    let tmp18Result = "one-step" === goLiveUpsellVariant && sharedValue.get();
    if (tmp18Result) {
      const obj12 = { style: tmp9.section, children: null };
      const obj13 = { featureName: null, shouldShow: null };
      const tmp7Result7 = tmp7(tmp2[34]);
      obj13.featureName = tmp(tmp2[47]).EntitlementFeatureNames.STREAM_HIGH_QUALITY;
      obj13.shouldShow = sharedValue;
      obj12.children = closure_14(tmp7(tmp2[46]), obj13);
      tmp18Result = closure_14(tmp7Result7, obj12);
      const tmp7Result8 = tmp7(tmp2[46]);
    }
    items5[2] = tmp18Result;
    let tmp18Result2 = "two-step" === goLiveUpsellVariant && sharedValue.get();
    if (tmp18Result2) {
      const obj14 = { style: tmp9.section, children: null };
      const obj15 = { text: null, onPress: null };
      const tmp7Result9 = tmp7(tmp2[34]);
      let intl3 = tmp(tmp2[30]).intl;
      obj15.text = intl3.string(tmp7(tmp2[31]).u72Prd);
      obj15.onPress = function onPress() {
        const obj = PremiumUpsellUtilsDefault;
        const result = obj.handleShowUpsellAlert({ initialUpsellKey: ConstantsIOS.UpsellTypes.STREAM_HIGH_QUALITY, analyticsLocations });
      };
      obj14.children = closure_14(tmp7(tmp2[48]), obj15);
      tmp18Result2 = closure_14(tmp7Result9, obj14);
      const tmp7Result10 = tmp7(tmp2[48]);
    }
    items5[3] = tmp18Result2;
    const obj16 = { style: tmp9.section, children: null };
    const tmp7Result = tmp7(tmp2[34]);
    const obj17 = { title: null, hasIcons: false, children: null };
    let intl4 = tmp(tmp2[30]).intl;
    obj17.title = intl4.string(tmp7(tmp2[31])["j+eAMQ"]);
    const obj18 = { label: null, value: null, onValueChange: null };
    let intl5 = tmp(tmp2[30]).intl;
    obj18.label = intl5.string(tmp7(tmp2[31]).uwMBDo);
    obj18.value = first1;
    obj18.onValueChange = function onValueChange(arg0) {
      currentUser(arg0);
      closure_11(first, arg0);
    };
    obj17.children = closure_14(tmp(tmp2[49]).TableSwitchRow, obj18);
    obj16.children = closure_14(tmp(tmp2[44]).TableRowGroup, obj17);
    items5[4] = closure_14(tmp7(tmp2[34]), obj16);
    const obj19 = { style: tmp9.section, children: null };
    const tmp7Result11 = tmp7(tmp2[34]);
    if (isStreaming) {
      const obj20 = { size: "lg", variant: "destructive", text: null, onPress: null };
      const intl7 = tmp(tmp2[30]).intl;
      obj20.text = intl7.string(tmp7(tmp2[31]).OsS9Ll);
      obj20.onPress = function onPress() {
        user(callback[51]).stopScreenshare();
        const obj = user(callback[51]);
        guildPremiumTier(callback[15]).hideActionSheet(MobileGoLiveActionSheet);
      };
      let obj21 = obj20;
    } else {
      obj21 = { size: "lg", variant: "primary", text: null, onPress: null };
      let intl6 = tmp(tmp2[30]).intl;
      obj21.text = intl6.string(tmp7(tmp2[31])["3wwZ/Q"]);
      obj21.onPress = function onPress() {
        guildPremiumTier(callback[15]).hideActionSheet(MobileGoLiveActionSheet);
        const obj = guildPremiumTier(callback[15]);
        user(callback[51]).startStream();
      };
    }
    const obj22 = { startExpanded: true, children: null };
    const obj23 = { children: null };
    obj19.children = closure_14(tmp(tmp2[50]).Button, obj21);
    items5[5] = closure_14(tmp7(tmp2[34]), obj19);
    obj7.children = items5;
    obj23.children = closure_15(tmp(tmp2[40]).SafeAreaPaddingView, obj7);
    obj22.children = closure_14(tmp(tmp2[39]).BottomSheetScrollView, obj23);
    obj6.children = closure_14(tmp(tmp2[38]).BottomSheet, obj22);
    return closure_14(tmp(tmp2[24]).AnalyticsLocationProvider, obj6);
  }
  preset = tmp10.PRESET_MOBILE_DEFAULT;
  const tmp8 = guildPremiumTier(callback[24]);
}));
export const showMobileGoLiveActionSheet = function showMobileGoLiveActionSheet(location_stack) {
  const obj2 = { impressionName: null, impressionProperties: null };
  const obj = ActionSheetActionCreatorsDefault;
  obj2.impressionName = discord_common_AnalyticsUtils.ImpressionNames.MOBILE_GO_LIVE_ACTION_SHEET;
  obj2.impressionProperties = { location_stack };
  obj.openLazy(asyncRequireImpl(9632, dependencyMap.paths), MobileGoLiveActionSheet, obj2);
};