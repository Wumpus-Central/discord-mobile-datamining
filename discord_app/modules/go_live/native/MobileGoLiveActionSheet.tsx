// discord_app/modules/go_live/native/MobileGoLiveActionSheet.tsx
import nativeDefault from "../../../../discord_common/js/packages/tokens/native.tsx";
import Constants from "../../../Constants.tsx";
import ConstantsIOS from "../../../ConstantsIOS.tsx";
import intl8 from "../../../intl/index.native.tsx";
import discord_common_AnalyticsUtils from "../../../../discord_common/js/packages/analytics-utils/AnalyticsUtils.tsx";
import asyncRequire from "../../../../_runtime/01987_asyncRequire.js";
import _modDef2327 from "../MobileGoLiveActionSheet.messages.js";
import BaseIconImage2 from "../../../design/components/Icon/native/BaseIconImage.tsx";
import ActionSheetActionCreatorsDefault from "../../action_sheet/native/ActionSheetActionCreators.tsx";
import Text_Text from "../../../design/components/Text/native/Text.tsx";
import Constants2 from "../../../../discord_common/js/packages/media-engine/Constants.tsx";
import StreamSettingsConstants from "../StreamSettingsConstants.tsx";
import StreamActionCreators from "../../../actions/StreamActionCreators.tsx";
import NativeViewDefault from "../../core/native/NativeView.tsx";
import TableRadioRow2 from "../../../design/components/TableRow/native/TableRadioRow.native.tsx";
import MobilePhoneIcon from "../../../design/components/Icon/native/redesign/generated/MobilePhoneIcon.tsx";
import AudioActionCreatorsDefault from "../../../actions/AudioActionCreators.tsx";
import PremiumUpsellUtilsDefault from "../../../utils/native/PremiumUpsellUtils.tsx";
import getStreamSettingsForPreset from "../utils/getStreamSettingsForPreset.tsx";
import SpeedometerIcon from "../../../design/components/Icon/native/redesign/generated/SpeedometerIcon.tsx";
import ImageSparkleIcon from "../../../design/components/Icon/native/redesign/generated/ImageSparkleIcon.tsx";
import AssetRegistryDefault from "../../../../_runtime/09655_AssetRegistry.js";
import _slicedToArray from "../../../../_runtime/metro/00032__slicedToArray.js";
import react_mod from "../../../../_runtime/00019_react.js";
import ApplicationStreamingSettingsStore from "../../../stores/ApplicationStreamingSettingsStore.tsx";
import ApplicationStreamingStore_mod from "../../../stores/ApplicationStreamingStore.tsx";
import ChannelStore from "../../../stores/ChannelStore.tsx";
import GuildStore_mod from "../../../stores/GuildStore.tsx";
import SelectedChannelStore_mod from "../../../stores/SelectedChannelStore.tsx";
import UserStore_mod from "../../../stores/UserStore.tsx";
import Fragment from "../../../../_runtime/react/00021_Fragment.js";
import createStyles_mod from "../../../design/components/Styles/native/createStyles.tsx";
import PlatformUtils_mod from "../../../../discord_common/js/shared/utils/PlatformUtils.tsx";
import ReactCompilerGating from "../../react_compiler/ReactCompilerGating.tsx";
import size from "../../../../_runtime/metro/00002__.js";

const getStreamSettingsForPresetDefault = getStreamSettingsForPreset;
let BottomSheet, dependencyMap;

let PlatformUtils;
let closure_14;
let closure_15;
let obj2;
let obj3;
let obj4;
let react = react_mod;
let ApplicationStreamingStore = ApplicationStreamingStore_mod;
let GuildStore = GuildStore_mod;
let SelectedChannelStore = SelectedChannelStore_mod;
let UserStore = UserStore_mod;
let ApplicationStreamPresets = StreamSettingsConstants.ApplicationStreamPresets;
const ApplicationStreamStates = Constants.ApplicationStreamStates;
const MediaEngineContextTypes = Constants2.MediaEngineContextTypes;
({ jsx: closure_14, jsxs: closure_15 } = Fragment);
let createStyles = createStyles_mod;
let obj = { wrapper: obj2, header: { textAlign: "center" }, section: obj3, highQualityLabel: obj4 };
obj2 = { gap: nativeDefault.space.PX_24 };
createStyles = createStyles.createStyles;
obj3 = { marginHorizontal: nativeDefault.space.PX_16 };
obj4 = { flexDirection: "row", alignItems: "center", gap: nativeDefault.space.PX_4 };
let closure_16 = createStyles(obj);
const MobileGoLiveActionSheet = "MobileGoLiveActionSheet";
let obj5 = { preset: ApplicationStreamPresets.PRESET_MOBILE_DEFAULT, enabled: true };
let items = [obj5, ,];
let obj6 = { preset: ApplicationStreamPresets.PRESET_MOBILE_PERFORMANCE, enabled: !PlatformUtils.isIOS() };
PlatformUtils = PlatformUtils_mod;
items[1] = obj6;
items[2] = { preset: ApplicationStreamPresets.PRESET_MOBILE_HIGH_QUALITY, enabled: true };
const found = items.filter((enabled) => enabled.enabled);
let closure_18 = found.map((preset) => preset.preset);
const memoResult = react.memo(
  ReactCompilerGating.isReactCompilerEnabled()
    ? () => {
        let analyticsLocations;
        let closure_11;
        let closure_2;
        let closure_4;
        let closure_8;
        let currentUser;
        let intl3;
        let obj10;
        let obj12;
        let tmp22Result;
        let tmp4;
        let tmp5;
        let tmp8;
        let tmp9;
        let user;
        let value;
        let voiceChannelId;
        let obj = user(576);
        const cResult = obj.c(79);
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
        let tmpResult = tmp(504);
        const stateFromStoresObject = tmpResult.useStateFromStoresObject(tmp4, A);
        const preset = stateFromStoresObject.preset;
        const soundshareEnabled = stateFromStoresObject.soundshareEnabled;
        if (cResult[2] === Symbol.for("react.memo_cache_sentinel")) {
          const items1 = [UserStore, , ,];
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
              user = currentUser.getCurrentUser();
              const channel = first.getChannel(SelectedChannelStore.getVoiceChannelId());
              let guildId;
              const getGuild = closure_8.getGuild;
              if (channel != null) {
                guildId = channel.getGuildId();
              }
              const guild = getGuild(guildId);
              guildPremiumTier = undefined;
              if (guild != null) {
                guildPremiumTier = guild.premiumTier;
              }
              return { user, guildPremiumTier };
            }
          }
          cResult[2] = items1;
          cResult[3] = R;
          tmp9 = R;
          tmp8 = items1;
        } else {
          tmp8 = cResult[2];
          tmp9 = cResult[3];
        }
        const tmpResult4 = user(504);
        const stateFromStoresObject1 = tmpResult4.useStateFromStoresObject(tmp8, tmp9);
        user = stateFromStoresObject1.user;
        let guildPremiumTier = stateFromStoresObject1.guildPremiumTier;
        if (cResult[4] === guildPremiumTier) {
          let tmp14;
          let tmp17;
          let tmp16;
          let tmp21;
          let tmp26;
          if (cResult[5] === user) {
            tmp14 = cResult[6];
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
                let sourceId;
                const obj = currentUserActiveStream;
                currentUserActiveStream = currentUserActiveStream.getCurrentUserActiveStream();
                const obj2 = {
                  isStreaming:
                    null != currentUserActiveStream && currentUserActiveStream.state === ApplicationStreamStates.ACTIVE,
                  activeSourceId: sourceId,
                };
                const streamerActiveStreamMetadata = obj.getStreamerActiveStreamMetadata();
                sourceId = undefined;
                if (streamerActiveStreamMetadata != null) {
                  sourceId = streamerActiveStreamMetadata.sourceId;
                }
                if (sourceId == null) {
                  sourceId = null;
                }
                return obj2;
              }
            }
            cResult[7] = items2;
            cResult[8] = H;
            tmp17 = H;
            class R {
              constructor() {
                user = currentUser.getCurrentUser();
                const channel = first.getChannel(SelectedChannelStore.getVoiceChannelId());
                let guildId;
                const getGuild = closure_8.getGuild;
                if (channel != null) {
                  guildId = channel.getGuildId();
                }
                const guild = getGuild(guildId);
                guildPremiumTier = undefined;
                if (guild != null) {
                  guildPremiumTier = guild.premiumTier;
                }
                return { user, guildPremiumTier };
              }
            }
          } else {
            tmp17 = cResult[8];
            tmp16 = cResult[7];
          }
          const tmpResult5 = user(504);
          const stateFromStoresObject2 = tmpResult5.useStateFromStoresObject(tmp16, tmp17);
          const isStreaming = stateFromStoresObject2.isStreaming;
          class R {
            constructor() {
              user = currentUser.getCurrentUser();
              const channel = first.getChannel(SelectedChannelStore.getVoiceChannelId());
              let guildId;
              const getGuild = closure_8.getGuild;
              if (channel != null) {
                guildId = channel.getGuildId();
              }
              const guild = getGuild(guildId);
              guildPremiumTier = undefined;
              if (guild != null) {
                guildPremiumTier = guild.premiumTier;
              }
              return { user, guildPremiumTier };
            }
          }
          react = tmp20;
          const _Symbol2 = Symbol;
          if (cResult[9] === Symbol.for("react.memo_cache_sentinel")) {
            let obj2 = { location: "MobileGoLiveActionSheet" };
            cResult[9] = obj2;
            class H {
              constructor() {
                let sourceId;
                const obj = currentUserActiveStream;
                currentUserActiveStream = currentUserActiveStream.getCurrentUserActiveStream();
                const obj2 = {
                  isStreaming:
                    null != currentUserActiveStream && currentUserActiveStream.state === ApplicationStreamStates.ACTIVE,
                  activeSourceId: sourceId,
                };
                const streamerActiveStreamMetadata = obj.getStreamerActiveStreamMetadata();
                sourceId = undefined;
                if (streamerActiveStreamMetadata != null) {
                  sourceId = streamerActiveStreamMetadata.sourceId;
                }
                if (sourceId == null) {
                  sourceId = null;
                }
                return obj2;
              }
            }
          } else {
            tmp21 = cResult[9];
          }
          let obj6 = guildPremiumTier(9650);
          const goLiveUpsellVariant = obj6.useConfig(tmp21).goLiveUpsellVariant;
          const tmp23 = guildPremiumTier(6664);
          analyticsLocations = tmp23(guildPremiumTier(6688).MOBILE_GO_LIVE_ACTION_SHEET).analyticsLocations;
          const tmp25 = closure_16();
          ApplicationStreamingStore = tmp25;
          if (cResult[10] === tmp14) {
            if (cResult[11] === preset) {
              tmp26 = cResult[12];
            }
            class H {
              constructor() {
                let sourceId;
                const obj = currentUserActiveStream;
                currentUserActiveStream = currentUserActiveStream.getCurrentUserActiveStream();
                const obj2 = {
                  isStreaming:
                    null != currentUserActiveStream && currentUserActiveStream.state === ApplicationStreamStates.ACTIVE,
                  activeSourceId: sourceId,
                };
                const streamerActiveStreamMetadata = obj.getStreamerActiveStreamMetadata();
                sourceId = undefined;
                if (streamerActiveStreamMetadata != null) {
                  sourceId = streamerActiveStreamMetadata.sourceId;
                }
                if (sourceId == null) {
                  sourceId = null;
                }
                return obj2;
              }
            }
            const tmp32 = isStreaming(react.useState(tmp26), 2);
            value = tmp32[0];
            GuildStore = tmp32[1];
            const tmp34 = isStreaming(react.useState(soundshareEnabled), 2);
            class R {
              constructor() {
                user = currentUser.getCurrentUser();
                const channel = first.getChannel(SelectedChannelStore.getVoiceChannelId());
                let guildId;
                const getGuild = closure_8.getGuild;
                if (channel != null) {
                  guildId = channel.getGuildId();
                }
                const guild = getGuild(guildId);
                guildPremiumTier = undefined;
                if (guild != null) {
                  guildPremiumTier = guild.premiumTier;
                }
                return { user, guildPremiumTier };
              }
            }
            SelectedChannelStore = tmp35;
            UserStore = tmp34[1];
            const tmpResult6 = user(4618);
            const sharedValue = tmpResult6.useSharedValue(!tmp14(ApplicationStreamPresets.PRESET_MOBILE_HIGH_QUALITY));
            if (cResult[13] === tmp20) {
              if (cResult[14] === guildPremiumTier) {
                if (cResult[15] === isStreaming) {
                  let tmp37;
                  let tmp38;
                  let tmp45;
                  if (cResult[16] === user) {
                    tmp37 = cResult[17];
                  }
                  ApplicationStreamPresets = tmp37;
                  if (cResult[18] !== tmp25.highQualityLabel) {
                    function ie(value) {
                      let formatToPlainStringResult;
                      let intl;
                      let intl3;
                      let intl5;
                      let items;
                      let obj9;
                      let str2;
                      let tmp8Result;
                      const obj = getStreamSettingsForPreset;
                      const maxSettingsForPreset = obj.getMaxSettingsForPreset(
                        ApplicationStreamPresets.PRESET_MOBILE_DEFAULT,
                      );
                      const obj2 = getStreamSettingsForPreset;
                      const maxSettingsForPreset1 = obj2.getMaxSettingsForPreset(
                        ApplicationStreamPresets.PRESET_MOBILE_PERFORMANCE,
                      );
                      const obj3 = getStreamSettingsForPreset;
                      const maxSettingsForPreset2 = obj3.getMaxSettingsForPreset(
                        ApplicationStreamPresets.PRESET_MOBILE_HIGH_QUALITY,
                      );
                      const obj4 = { value };
                      const PRESET_MOBILE_DEFAULT = ApplicationStreamPresets.PRESET_MOBILE_DEFAULT;
                      const obj5 = {
                        icon: authStore2(MobilePhoneIcon.MobilePhoneIcon, {}),
                        label: intl.string(_modDef2327["2qmQ8N"]),
                        subLabel: str2,
                      };
                      intl = intl8.intl;
                      let str = "";
                      str2 = "";
                      if (null != maxSettingsForPreset) {
                        const intl2 = intl8.intl;
                        str2 = intl2.formatToPlainString(_modDef2327.ibH7vy, maxSettingsForPreset);
                      }
                      const obj6 = { [PRESET_MOBILE_DEFAULT]: obj5 };
                      const PRESET_MOBILE_PERFORMANCE = ApplicationStreamPresets.PRESET_MOBILE_PERFORMANCE;
                      const obj7 = {
                        icon: authStore2(SpeedometerIcon.SpeedometerIcon, {}),
                        label: intl3.string(_modDef2327["5eO4/m"]),
                        subLabel: formatToPlainStringResult,
                      };
                      intl3 = intl8.intl;
                      formatToPlainStringResult = str;
                      if (null != maxSettingsForPreset1) {
                        const intl4 = intl8.intl;
                        formatToPlainStringResult = intl4.formatToPlainString(
                          _modDef2327.fN0UQY,
                          maxSettingsForPreset1,
                        );
                      }
                      obj6[PRESET_MOBILE_PERFORMANCE] = obj7;
                      const PRESET_MOBILE_HIGH_QUALITY = ApplicationStreamPresets.PRESET_MOBILE_HIGH_QUALITY;
                      const obj8 = {
                        icon: authStore2(ImageSparkleIcon.ImageSparkleIcon, {}),
                        label: closure_15(tmp8Result, obj9),
                        subLabel: str,
                      };
                      obj9 = { style: currentUserActiveStream.highQualityLabel, children: items };
                      const obj10 = {
                        variant: "text-md/semibold",
                        color: "text-strong",
                        children: intl5.string(_modDef2327.nMcXo1),
                      };
                      tmp8Result = NativeViewDefault;
                      const Text = Text_Text.Text;
                      intl5 = intl8.intl;
                      items = [authStore2(Text, obj10)];
                      const obj11 = { source: AssetRegistryDefault, size: "xs" };
                      const BaseIconImage = BaseIconImage2.BaseIconImage;
                      items[1] = authStore2(BaseIconImage, obj11);
                      if (null != maxSettingsForPreset2) {
                        const intl6 = intl8.intl;
                        str = intl6.formatToPlainString(_modDef2327.q4gYBi, maxSettingsForPreset2);
                      }
                      obj6[PRESET_MOBILE_HIGH_QUALITY] = obj8;
                      const merged = Object.assign(obj6[value]);
                      return obj4;
                    }
                    cResult[18] = tmp25.highQualityLabel;
                    class H {
                      constructor() {
                        let sourceId;
                        const obj = currentUserActiveStream;
                        currentUserActiveStream = currentUserActiveStream.getCurrentUserActiveStream();
                        const obj2 = {
                          isStreaming:
                            null != currentUserActiveStream &&
                            currentUserActiveStream.state === ApplicationStreamStates.ACTIVE,
                          activeSourceId: sourceId,
                        };
                        const streamerActiveStreamMetadata = obj.getStreamerActiveStreamMetadata();
                        sourceId = undefined;
                        if (streamerActiveStreamMetadata != null) {
                          sourceId = streamerActiveStreamMetadata.sourceId;
                        }
                        if (sourceId == null) {
                          sourceId = null;
                        }
                        return obj2;
                      }
                    }
                    cResult[19] = ie;
                    tmp38 = ie;
                  } else {
                    tmp38 = cResult[19];
                  }
                  class H {
                    constructor() {
                      let sourceId;
                      const obj = currentUserActiveStream;
                      currentUserActiveStream = currentUserActiveStream.getCurrentUserActiveStream();
                      const obj2 = {
                        isStreaming:
                          null != currentUserActiveStream &&
                          currentUserActiveStream.state === ApplicationStreamStates.ACTIVE,
                        activeSourceId: sourceId,
                      };
                      const streamerActiveStreamMetadata = obj.getStreamerActiveStreamMetadata();
                      sourceId = undefined;
                      if (streamerActiveStreamMetadata != null) {
                        sourceId = streamerActiveStreamMetadata.sourceId;
                      }
                      if (sourceId == null) {
                        sourceId = null;
                      }
                      return obj2;
                    }
                  }
                  const AnalyticsLocationProvider = tmp(6664).AnalyticsLocationProvider;
                  BottomSheet = tmp(6652).BottomSheet;
                  const BottomSheetScrollView = tmp(6119).BottomSheetScrollView;
                  const SafeAreaPaddingView = tmp(6626).SafeAreaPaddingView;
                  const _Symbol3 = Symbol;
                  class R {
                    constructor() {
                      user = currentUser.getCurrentUser();
                      const channel = first.getChannel(SelectedChannelStore.getVoiceChannelId());
                      let guildId;
                      const getGuild = closure_8.getGuild;
                      if (channel != null) {
                        guildId = channel.getGuildId();
                      }
                      const guild = getGuild(guildId);
                      guildPremiumTier = undefined;
                      if (guild != null) {
                        guildPremiumTier = guild.premiumTier;
                      }
                      return { user, guildPremiumTier };
                    }
                  }
                  const header = tmp25.header;
                  if (cResult[20] === Symbol.for("react.memo_cache_sentinel")) {
                    let intl = tmp(1126).intl;
                    const stringResult = intl.string(guildPremiumTier(2327).CrNjqp);
                    class H {
                      constructor() {
                        let sourceId;
                        const obj = currentUserActiveStream;
                        currentUserActiveStream = currentUserActiveStream.getCurrentUserActiveStream();
                        const obj2 = {
                          isStreaming:
                            null != currentUserActiveStream &&
                            currentUserActiveStream.state === ApplicationStreamStates.ACTIVE,
                          activeSourceId: sourceId,
                        };
                        const streamerActiveStreamMetadata = obj.getStreamerActiveStreamMetadata();
                        sourceId = undefined;
                        if (streamerActiveStreamMetadata != null) {
                          sourceId = streamerActiveStreamMetadata.sourceId;
                        }
                        if (sourceId == null) {
                          sourceId = null;
                        }
                        return obj2;
                      }
                    }
                    cResult[20] = stringResult;
                  }
                  if (cResult[21] !== tmp25.header) {
                    let obj3 = {
                      style: header,
                      variant: "redesign/heading-18/bold",
                      color: "text-strong",
                      accessibilityRole: "header",
                      children: null,
                    };
                    class H {
                      constructor() {
                        let sourceId;
                        const obj = currentUserActiveStream;
                        currentUserActiveStream = currentUserActiveStream.getCurrentUserActiveStream();
                        const obj2 = {
                          isStreaming:
                            null != currentUserActiveStream &&
                            currentUserActiveStream.state === ApplicationStreamStates.ACTIVE,
                          activeSourceId: sourceId,
                        };
                        const streamerActiveStreamMetadata = obj.getStreamerActiveStreamMetadata();
                        sourceId = undefined;
                        if (streamerActiveStreamMetadata != null) {
                          sourceId = streamerActiveStreamMetadata.sourceId;
                        }
                        if (sourceId == null) {
                          sourceId = null;
                        }
                        return obj2;
                      }
                    }
                    cResult[21] = tmp25.header;
                    cResult[22] = closure_14(user(4892).Text, obj3);
                    closure_14(user(4892).Text, obj3);
                    class R {
                      constructor() {
                        user = currentUser.getCurrentUser();
                        const channel = first.getChannel(SelectedChannelStore.getVoiceChannelId());
                        let guildId;
                        const getGuild = closure_8.getGuild;
                        if (channel != null) {
                          guildId = channel.getGuildId();
                        }
                        const guild = getGuild(guildId);
                        guildPremiumTier = undefined;
                        if (guild != null) {
                          guildPremiumTier = guild.premiumTier;
                        }
                        return { user, guildPremiumTier };
                      }
                    }
                  }
                  const _Symbol4 = Symbol;
                  const section = tmp25.section;
                  if (cResult[23] === Symbol.for("react.memo_cache_sentinel")) {
                    let intl2 = tmp(1126).intl;
                    const stringResult1 = intl2.string(guildPremiumTier(2327)["/XSr8v"]);
                    class H {
                      constructor() {
                        let sourceId;
                        const obj = currentUserActiveStream;
                        currentUserActiveStream = currentUserActiveStream.getCurrentUserActiveStream();
                        const obj2 = {
                          isStreaming:
                            null != currentUserActiveStream &&
                            currentUserActiveStream.state === ApplicationStreamStates.ACTIVE,
                          activeSourceId: sourceId,
                        };
                        const streamerActiveStreamMetadata = obj.getStreamerActiveStreamMetadata();
                        sourceId = undefined;
                        if (streamerActiveStreamMetadata != null) {
                          sourceId = streamerActiveStreamMetadata.sourceId;
                        }
                        if (sourceId == null) {
                          sourceId = null;
                        }
                        return obj2;
                      }
                    }
                    cResult[23] = stringResult1;
                    tmp45 = stringResult1;
                  } else {
                    tmp45 = cResult[23];
                  }
                  if (cResult[24] === analyticsLocations) {
                    if (cResult[25] === tmp37) {
                      if (cResult[26] === tmp14) {
                        if (cResult[27] === isStreaming) {
                          let tmp47;
                          let tmp48;
                          if (cResult[28] === tmp35) {
                            tmp47 = cResult[29];
                          }
                          if (cResult[30] !== tmp38) {
                            const mapped = closure_18.map((item) => {
                              const obj = {};
                              const TableRadioRow = TableRadioRow2.TableRadioRow;
                              const merged = Object.assign(ApplicationStreamStates(item));
                              return authStore2(TableRadioRow, obj, item);
                            });
                            class H {
                              constructor() {
                                let sourceId;
                                const obj = currentUserActiveStream;
                                currentUserActiveStream = currentUserActiveStream.getCurrentUserActiveStream();
                                const obj2 = {
                                  isStreaming:
                                    null != currentUserActiveStream &&
                                    currentUserActiveStream.state === ApplicationStreamStates.ACTIVE,
                                  activeSourceId: sourceId,
                                };
                                const streamerActiveStreamMetadata = obj.getStreamerActiveStreamMetadata();
                                sourceId = undefined;
                                if (streamerActiveStreamMetadata != null) {
                                  sourceId = streamerActiveStreamMetadata.sourceId;
                                }
                                if (sourceId == null) {
                                  sourceId = null;
                                }
                                return obj2;
                              }
                            }
                            cResult[31] = mapped;
                            tmp48 = mapped;
                          } else {
                            tmp48 = cResult[31];
                          }
                          if (cResult[32] === value) {
                            if (cResult[33] === tmp47) {
                              let tmp51;
                              if (cResult[34] === tmp48) {
                                tmp51 = cResult[35];
                              }
                              if (cResult[36] === tmp25.section) {
                                let tmp53;
                                if (cResult[37] === tmp51) {
                                  tmp53 = cResult[38];
                                }
                                let str = "one-step";
                                const tmp57 = "one-step" === goLiveUpsellVariant && sharedValue.get();
                                class H {
                                  constructor() {
                                    let sourceId;
                                    const obj = currentUserActiveStream;
                                    currentUserActiveStream = currentUserActiveStream.getCurrentUserActiveStream();
                                    const obj2 = {
                                      isStreaming:
                                        null != currentUserActiveStream &&
                                        currentUserActiveStream.state === ApplicationStreamStates.ACTIVE,
                                      activeSourceId: sourceId,
                                    };
                                    const streamerActiveStreamMetadata = obj.getStreamerActiveStreamMetadata();
                                    sourceId = undefined;
                                    if (streamerActiveStreamMetadata != null) {
                                      sourceId = streamerActiveStreamMetadata.sourceId;
                                    }
                                    if (sourceId == null) {
                                      sourceId = null;
                                    }
                                    return obj2;
                                  }
                                }
                                if (cResult[39] === analyticsLocations) {
                                  if (cResult[40] === goLiveUpsellVariant) {
                                    if (cResult[41] === sharedValue) {
                                      let tmp58;
                                      let tmp64;
                                      let tmp66;
                                      if (cResult[42] === tmp25.section) {
                                        tmp58 = cResult[43];
                                      }
                                      const _Symbol5 = Symbol;
                                      const section2 = tmp25.section;
                                      class H {
                                        constructor() {
                                          let sourceId;
                                          const obj = currentUserActiveStream;
                                          currentUserActiveStream =
                                            currentUserActiveStream.getCurrentUserActiveStream();
                                          const obj2 = {
                                            isStreaming:
                                              null != currentUserActiveStream &&
                                              currentUserActiveStream.state === ApplicationStreamStates.ACTIVE,
                                            activeSourceId: sourceId,
                                          };
                                          const streamerActiveStreamMetadata = obj.getStreamerActiveStreamMetadata();
                                          sourceId = undefined;
                                          if (streamerActiveStreamMetadata != null) {
                                            sourceId = streamerActiveStreamMetadata.sourceId;
                                          }
                                          if (sourceId == null) {
                                            sourceId = null;
                                          }
                                          return obj2;
                                        }
                                      }
                                      if (tmp63 === Symbol.for("react.memo_cache_sentinel")) {
                                        let intl4 = tmp(1126).intl;
                                        const stringResult2 = intl4.string(guildPremiumTier(2327)["j+eAMQ"]);
                                        class H {
                                          constructor() {
                                            let sourceId;
                                            const obj = currentUserActiveStream;
                                            currentUserActiveStream =
                                              currentUserActiveStream.getCurrentUserActiveStream();
                                            const obj2 = {
                                              isStreaming:
                                                null != currentUserActiveStream &&
                                                currentUserActiveStream.state === ApplicationStreamStates.ACTIVE,
                                              activeSourceId: sourceId,
                                            };
                                            const streamerActiveStreamMetadata = obj.getStreamerActiveStreamMetadata();
                                            sourceId = undefined;
                                            if (streamerActiveStreamMetadata != null) {
                                              sourceId = streamerActiveStreamMetadata.sourceId;
                                            }
                                            if (sourceId == null) {
                                              sourceId = null;
                                            }
                                            return obj2;
                                          }
                                        }
                                        cResult[44] = stringResult2;
                                        tmp64 = stringResult2;
                                      } else {
                                        tmp64 = cResult[44];
                                      }
                                      const _Symbol6 = Symbol;
                                      if (cResult[45] === Symbol.for("react.memo_cache_sentinel")) {
                                        let intl5 = tmp(1126).intl;
                                        const stringResult3 = intl5.string(guildPremiumTier(2327).uwMBDo);
                                        class H {
                                          constructor() {
                                            let sourceId;
                                            const obj = currentUserActiveStream;
                                            currentUserActiveStream =
                                              currentUserActiveStream.getCurrentUserActiveStream();
                                            const obj2 = {
                                              isStreaming:
                                                null != currentUserActiveStream &&
                                                currentUserActiveStream.state === ApplicationStreamStates.ACTIVE,
                                              activeSourceId: sourceId,
                                            };
                                            const streamerActiveStreamMetadata = obj.getStreamerActiveStreamMetadata();
                                            sourceId = undefined;
                                            if (streamerActiveStreamMetadata != null) {
                                              sourceId = streamerActiveStreamMetadata.sourceId;
                                            }
                                            if (sourceId == null) {
                                              sourceId = null;
                                            }
                                            return obj2;
                                          }
                                        }
                                        cResult[45] = stringResult3;
                                        tmp66 = stringResult3;
                                      } else {
                                        tmp66 = cResult[45];
                                      }
                                      if (cResult[46] === tmp37) {
                                        let tmp68;
                                        if (cResult[47] === value) {
                                          tmp68 = cResult[48];
                                        }
                                        if (cResult[49] === tmp35) {
                                          let tmp70;
                                          if (cResult[50] === tmp68) {
                                            tmp70 = cResult[51];
                                          }
                                          if (cResult[52] === tmp25.section) {
                                            let tmp74;
                                            let tmp78;
                                            if (cResult[53] === tmp70) {
                                              tmp74 = cResult[54];
                                            }
                                            if (cResult[55] !== isStreaming) {
                                              const Button = tmp(5601).Button;
                                              if (isStreaming) {
                                                let obj4 = {
                                                  size: "lg",
                                                  variant: "destructive",
                                                  text: null,
                                                  onPress() {
                                                    const obj = user(closure_2[51]);
                                                    obj.stopScreenshare();
                                                    const obj2 = guildPremiumTier(closure_2[15]);
                                                    obj2.hideActionSheet(MobileGoLiveActionSheet);
                                                  },
                                                };
                                                const string2 = tmp(1126).intl.string;
                                                class H {
                                                  constructor() {
                                                    let sourceId;
                                                    const obj = currentUserActiveStream;
                                                    currentUserActiveStream =
                                                      currentUserActiveStream.getCurrentUserActiveStream();
                                                    const obj2 = {
                                                      isStreaming:
                                                        null != currentUserActiveStream &&
                                                        currentUserActiveStream.state ===
                                                          ApplicationStreamStates.ACTIVE,
                                                      activeSourceId: sourceId,
                                                    };
                                                    const streamerActiveStreamMetadata =
                                                      obj.getStreamerActiveStreamMetadata();
                                                    sourceId = undefined;
                                                    if (streamerActiveStreamMetadata != null) {
                                                      sourceId = streamerActiveStreamMetadata.sourceId;
                                                    }
                                                    if (sourceId == null) {
                                                      sourceId = null;
                                                    }
                                                    return obj2;
                                                  }
                                                }
                                                let obj5 = obj4;
                                              } else {
                                                obj5 = {
                                                  size: "lg",
                                                  variant: "primary",
                                                  text: null,
                                                  onPress() {
                                                    const obj = guildPremiumTier(closure_2[15]);
                                                    obj.hideActionSheet(MobileGoLiveActionSheet);
                                                    const obj2 = user(closure_2[51]);
                                                    obj2.startStream();
                                                  },
                                                };
                                                const string = tmp(1126).intl.string;
                                                class H {
                                                  constructor() {
                                                    let sourceId;
                                                    const obj = currentUserActiveStream;
                                                    currentUserActiveStream =
                                                      currentUserActiveStream.getCurrentUserActiveStream();
                                                    const obj2 = {
                                                      isStreaming:
                                                        null != currentUserActiveStream &&
                                                        currentUserActiveStream.state ===
                                                          ApplicationStreamStates.ACTIVE,
                                                      activeSourceId: sourceId,
                                                    };
                                                    const streamerActiveStreamMetadata =
                                                      obj.getStreamerActiveStreamMetadata();
                                                    sourceId = undefined;
                                                    if (streamerActiveStreamMetadata != null) {
                                                      sourceId = streamerActiveStreamMetadata.sourceId;
                                                    }
                                                    if (sourceId == null) {
                                                      sourceId = null;
                                                    }
                                                    return obj2;
                                                  }
                                                }
                                              }
                                              class H {
                                                constructor() {
                                                  let sourceId;
                                                  const obj = currentUserActiveStream;
                                                  currentUserActiveStream =
                                                    currentUserActiveStream.getCurrentUserActiveStream();
                                                  const obj2 = {
                                                    isStreaming:
                                                      null != currentUserActiveStream &&
                                                      currentUserActiveStream.state === ApplicationStreamStates.ACTIVE,
                                                    activeSourceId: sourceId,
                                                  };
                                                  const streamerActiveStreamMetadata =
                                                    obj.getStreamerActiveStreamMetadata();
                                                  sourceId = undefined;
                                                  if (streamerActiveStreamMetadata != null) {
                                                    sourceId = streamerActiveStreamMetadata.sourceId;
                                                  }
                                                  if (sourceId == null) {
                                                    sourceId = null;
                                                  }
                                                  return obj2;
                                                }
                                              }
                                              cResult[55] = isStreaming;
                                              cResult[56] = tmp80;
                                              tmp78 = tmp80;
                                            } else {
                                              tmp78 = cResult[56];
                                            }
                                            if (cResult[57] === tmp25.section) {
                                              let tmp81;
                                              if (cResult[58] === tmp78) {
                                                tmp81 = cResult[59];
                                              }
                                              if (cResult[60] === SafeAreaPaddingView) {
                                                if (cResult[61] === tmp25.wrapper) {
                                                  if (cResult[62] === tmp42) {
                                                    if (cResult[63] === tmp53) {
                                                      if (cResult[64] === tmp57) {
                                                        if (cResult[65] === tmp58) {
                                                          if (cResult[66] === tmp74) {
                                                            let tmp83;
                                                            if (cResult[67] === tmp81) {
                                                              tmp83 = cResult[68];
                                                            }
                                                            if (cResult[69] === BottomSheetScrollView) {
                                                              let tmp87;
                                                              if (cResult[70] === tmp83) {
                                                                tmp87 = cResult[71];
                                                              }
                                                              if (cResult[72] === BottomSheet) {
                                                                let tmp91;
                                                                if (cResult[73] === tmp87) {
                                                                  tmp91 = cResult[74];
                                                                }
                                                                if (cResult[75] === AnalyticsLocationProvider) {
                                                                  if (cResult[76] === analyticsLocations) {
                                                                    let tmp95;
                                                                    if (cResult[77] === tmp91) {
                                                                      tmp95 = cResult[78];
                                                                    }
                                                                    return tmp95;
                                                                  }
                                                                }
                                                                class H {
                                                                  constructor() {
                                                                    let sourceId;
                                                                    const obj = currentUserActiveStream;
                                                                    currentUserActiveStream =
                                                                      currentUserActiveStream.getCurrentUserActiveStream();
                                                                    const obj2 = {
                                                                      isStreaming:
                                                                        null != currentUserActiveStream &&
                                                                        currentUserActiveStream.state ===
                                                                          ApplicationStreamStates.ACTIVE,
                                                                      activeSourceId: sourceId,
                                                                    };
                                                                    const streamerActiveStreamMetadata =
                                                                      obj.getStreamerActiveStreamMetadata();
                                                                    sourceId = undefined;
                                                                    if (streamerActiveStreamMetadata != null) {
                                                                      sourceId = streamerActiveStreamMetadata.sourceId;
                                                                    }
                                                                    if (sourceId == null) {
                                                                      sourceId = null;
                                                                    }
                                                                    return obj2;
                                                                  }
                                                                }
                                                                tmp97[0] = analyticsLocations;
                                                                tmp97[1] = tmp91;
                                                                const tmp98 = closure_14(
                                                                  AnalyticsLocationProvider,
                                                                  tmp97,
                                                                );
                                                                cResult[75] = AnalyticsLocationProvider;
                                                                class R {
                                                                  constructor() {
                                                                    user = currentUser.getCurrentUser();
                                                                    const channel = first.getChannel(
                                                                      SelectedChannelStore.getVoiceChannelId(),
                                                                    );
                                                                    let guildId;
                                                                    const getGuild = closure_8.getGuild;
                                                                    if (channel != null) {
                                                                      guildId = channel.getGuildId();
                                                                    }
                                                                    const guild = getGuild(guildId);
                                                                    guildPremiumTier = undefined;
                                                                    if (guild != null) {
                                                                      guildPremiumTier = guild.premiumTier;
                                                                    }
                                                                    return { user, guildPremiumTier };
                                                                  }
                                                                }
                                                                cResult[76] = analyticsLocations;
                                                                cResult[77] = tmp91;
                                                                cResult[78] = tmp98;
                                                                tmp95 = tmp98;
                                                              }
                                                              class H {
                                                                constructor() {
                                                                  let sourceId;
                                                                  const obj = currentUserActiveStream;
                                                                  currentUserActiveStream =
                                                                    currentUserActiveStream.getCurrentUserActiveStream();
                                                                  const obj2 = {
                                                                    isStreaming:
                                                                      null != currentUserActiveStream &&
                                                                      currentUserActiveStream.state ===
                                                                        ApplicationStreamStates.ACTIVE,
                                                                    activeSourceId: sourceId,
                                                                  };
                                                                  const streamerActiveStreamMetadata =
                                                                    obj.getStreamerActiveStreamMetadata();
                                                                  sourceId = undefined;
                                                                  if (streamerActiveStreamMetadata != null) {
                                                                    sourceId = streamerActiveStreamMetadata.sourceId;
                                                                  }
                                                                  if (sourceId == null) {
                                                                    sourceId = null;
                                                                  }
                                                                  return obj2;
                                                                }
                                                              }
                                                              tmp93[1] = tmp87;
                                                              const tmp94 = closure_14(BottomSheet, tmp93);
                                                              cResult[72] = BottomSheet;
                                                              class R {
                                                                constructor() {
                                                                  user = currentUser.getCurrentUser();
                                                                  const channel = first.getChannel(
                                                                    SelectedChannelStore.getVoiceChannelId(),
                                                                  );
                                                                  let guildId;
                                                                  const getGuild = closure_8.getGuild;
                                                                  if (channel != null) {
                                                                    guildId = channel.getGuildId();
                                                                  }
                                                                  const guild = getGuild(guildId);
                                                                  guildPremiumTier = undefined;
                                                                  if (guild != null) {
                                                                    guildPremiumTier = guild.premiumTier;
                                                                  }
                                                                  return { user, guildPremiumTier };
                                                                }
                                                              }
                                                              cResult[74] = tmp94;
                                                              tmp91 = tmp94;
                                                            }
                                                            class H {
                                                              constructor() {
                                                                let sourceId;
                                                                const obj = currentUserActiveStream;
                                                                currentUserActiveStream =
                                                                  currentUserActiveStream.getCurrentUserActiveStream();
                                                                const obj2 = {
                                                                  isStreaming:
                                                                    null != currentUserActiveStream &&
                                                                    currentUserActiveStream.state ===
                                                                      ApplicationStreamStates.ACTIVE,
                                                                  activeSourceId: sourceId,
                                                                };
                                                                const streamerActiveStreamMetadata =
                                                                  obj.getStreamerActiveStreamMetadata();
                                                                sourceId = undefined;
                                                                if (streamerActiveStreamMetadata != null) {
                                                                  sourceId = streamerActiveStreamMetadata.sourceId;
                                                                }
                                                                if (sourceId == null) {
                                                                  sourceId = null;
                                                                }
                                                                return obj2;
                                                              }
                                                            }
                                                            tmp89[0] = tmp83;
                                                            const tmp90 = closure_14(BottomSheetScrollView, tmp89);
                                                            cResult[69] = BottomSheetScrollView;
                                                            class R {
                                                              constructor() {
                                                                user = currentUser.getCurrentUser();
                                                                const channel = first.getChannel(
                                                                  SelectedChannelStore.getVoiceChannelId(),
                                                                );
                                                                let guildId;
                                                                const getGuild = closure_8.getGuild;
                                                                if (channel != null) {
                                                                  guildId = channel.getGuildId();
                                                                }
                                                                const guild = getGuild(guildId);
                                                                guildPremiumTier = undefined;
                                                                if (guild != null) {
                                                                  guildPremiumTier = guild.premiumTier;
                                                                }
                                                                return { user, guildPremiumTier };
                                                              }
                                                            }
                                                            cResult[71] = tmp90;
                                                            tmp87 = tmp90;
                                                          }
                                                        }
                                                      }
                                                    }
                                                  }
                                                }
                                              }
                                              class H {
                                                constructor() {
                                                  let sourceId;
                                                  const obj = currentUserActiveStream;
                                                  currentUserActiveStream =
                                                    currentUserActiveStream.getCurrentUserActiveStream();
                                                  const obj2 = {
                                                    isStreaming:
                                                      null != currentUserActiveStream &&
                                                      currentUserActiveStream.state === ApplicationStreamStates.ACTIVE,
                                                    activeSourceId: sourceId,
                                                  };
                                                  const streamerActiveStreamMetadata =
                                                    obj.getStreamerActiveStreamMetadata();
                                                  sourceId = undefined;
                                                  if (streamerActiveStreamMetadata != null) {
                                                    sourceId = streamerActiveStreamMetadata.sourceId;
                                                  }
                                                  if (sourceId == null) {
                                                    sourceId = null;
                                                  }
                                                  return obj2;
                                                }
                                              }
                                              tmp85[1] = tmp39;
                                              const items3 = [tmp42, tmp53, tmp57, , ,];
                                              class R {
                                                constructor() {
                                                  user = currentUser.getCurrentUser();
                                                  const channel = first.getChannel(
                                                    SelectedChannelStore.getVoiceChannelId(),
                                                  );
                                                  let guildId;
                                                  const getGuild = closure_8.getGuild;
                                                  if (channel != null) {
                                                    guildId = channel.getGuildId();
                                                  }
                                                  const guild = getGuild(guildId);
                                                  guildPremiumTier = undefined;
                                                  if (guild != null) {
                                                    guildPremiumTier = guild.premiumTier;
                                                  }
                                                  return { user, guildPremiumTier };
                                                }
                                              }
                                              items3[4] = tmp74;
                                              items3[5] = tmp81;
                                              tmp85[2] = items3;
                                              const tmp86 = closure_15(SafeAreaPaddingView, tmp85);
                                              cResult[60] = SafeAreaPaddingView;
                                              cResult[61] = tmp25.wrapper;
                                              class Ee {
                                                constructor(arg0) {
                                                  if (closure_2(arg0)) {
                                                    closure_8(arg0);
                                                    closure_11(arg0, SelectedChannelStore);
                                                    if (isStreaming) {
                                                      const obj2 = ActionSheetActionCreatorsDefault;
                                                      obj2.hideActionSheet(MobileGoLiveActionSheet);
                                                    }
                                                  } else {
                                                    const obj = {
                                                      initialUpsellKey: ConstantsIOS.UpsellTypes.STREAM_HIGH_QUALITY,
                                                      analyticsLocations,
                                                    };
                                                    const handleShowUpsellAlert =
                                                      PremiumUpsellUtilsDefault.handleShowUpsellAlert;
                                                    PremiumUpsellUtilsDefault;
                                                    const result = handleShowUpsellAlert(obj);
                                                  }
                                                }
                                              }
                                              cResult[63] = tmp53;
                                              cResult[64] = tmp57;
                                              cResult[65] = tmp58;
                                              cResult[66] = tmp74;
                                              cResult[67] = tmp81;
                                              cResult[68] = tmp86;
                                              tmp83 = tmp86;
                                            }
                                            class H {
                                              constructor() {
                                                let sourceId;
                                                const obj = currentUserActiveStream;
                                                currentUserActiveStream =
                                                  currentUserActiveStream.getCurrentUserActiveStream();
                                                const obj2 = {
                                                  isStreaming:
                                                    null != currentUserActiveStream &&
                                                    currentUserActiveStream.state === ApplicationStreamStates.ACTIVE,
                                                  activeSourceId: sourceId,
                                                };
                                                const streamerActiveStreamMetadata =
                                                  obj.getStreamerActiveStreamMetadata();
                                                sourceId = undefined;
                                                if (streamerActiveStreamMetadata != null) {
                                                  sourceId = streamerActiveStreamMetadata.sourceId;
                                                }
                                                if (sourceId == null) {
                                                  sourceId = null;
                                                }
                                                return obj2;
                                              }
                                            }
                                            let obj7 = { style: tmp25.section, children: tmp78 };
                                            const tmp82 = closure_14(guildPremiumTier(5983), obj7);
                                            class R {
                                              constructor() {
                                                user = currentUser.getCurrentUser();
                                                const channel = first.getChannel(
                                                  SelectedChannelStore.getVoiceChannelId(),
                                                );
                                                let guildId;
                                                const getGuild = closure_8.getGuild;
                                                if (channel != null) {
                                                  guildId = channel.getGuildId();
                                                }
                                                const guild = getGuild(guildId);
                                                guildPremiumTier = undefined;
                                                if (guild != null) {
                                                  guildPremiumTier = guild.premiumTier;
                                                }
                                                return { user, guildPremiumTier };
                                              }
                                            }
                                            cResult[58] = tmp78;
                                            cResult[59] = tmp82;
                                            tmp81 = tmp82;
                                          }
                                          class H {
                                            constructor() {
                                              let sourceId;
                                              const obj = currentUserActiveStream;
                                              currentUserActiveStream =
                                                currentUserActiveStream.getCurrentUserActiveStream();
                                              const obj2 = {
                                                isStreaming:
                                                  null != currentUserActiveStream &&
                                                  currentUserActiveStream.state === ApplicationStreamStates.ACTIVE,
                                                activeSourceId: sourceId,
                                              };
                                              const streamerActiveStreamMetadata =
                                                obj.getStreamerActiveStreamMetadata();
                                              sourceId = undefined;
                                              if (streamerActiveStreamMetadata != null) {
                                                sourceId = streamerActiveStreamMetadata.sourceId;
                                              }
                                              if (sourceId == null) {
                                                sourceId = null;
                                              }
                                              return obj2;
                                            }
                                          }
                                          tmp76[0] = section2;
                                          tmp76[1] = tmp70;
                                          const tmp77 = closure_14(guildPremiumTier(5983), tmp76);
                                          cResult[52] = tmp25.section;
                                          class R {
                                            constructor() {
                                              user = currentUser.getCurrentUser();
                                              const channel = first.getChannel(
                                                SelectedChannelStore.getVoiceChannelId(),
                                              );
                                              let guildId;
                                              const getGuild = closure_8.getGuild;
                                              if (channel != null) {
                                                guildId = channel.getGuildId();
                                              }
                                              const guild = getGuild(guildId);
                                              guildPremiumTier = undefined;
                                              if (guild != null) {
                                                guildPremiumTier = guild.premiumTier;
                                              }
                                              return { user, guildPremiumTier };
                                            }
                                          }
                                          cResult[53] = tmp70;
                                          cResult[54] = tmp77;
                                          tmp74 = tmp77;
                                        }
                                        class H {
                                          constructor() {
                                            let sourceId;
                                            const obj = currentUserActiveStream;
                                            currentUserActiveStream =
                                              currentUserActiveStream.getCurrentUserActiveStream();
                                            const obj2 = {
                                              isStreaming:
                                                null != currentUserActiveStream &&
                                                currentUserActiveStream.state === ApplicationStreamStates.ACTIVE,
                                              activeSourceId: sourceId,
                                            };
                                            const streamerActiveStreamMetadata = obj.getStreamerActiveStreamMetadata();
                                            sourceId = undefined;
                                            if (streamerActiveStreamMetadata != null) {
                                              sourceId = streamerActiveStreamMetadata.sourceId;
                                            }
                                            if (sourceId == null) {
                                              sourceId = null;
                                            }
                                            return obj2;
                                          }
                                        }
                                        tmp72[0] = tmp64;
                                        const TableRowGroup2 = tmp(6081).TableRowGroup;
                                        let obj8 = { label: tmp66, value: tmp35, onValueChange: null };
                                        class R {
                                          constructor() {
                                            user = currentUser.getCurrentUser();
                                            const channel = first.getChannel(SelectedChannelStore.getVoiceChannelId());
                                            let guildId;
                                            const getGuild = closure_8.getGuild;
                                            if (channel != null) {
                                              guildId = channel.getGuildId();
                                            }
                                            const guild = getGuild(guildId);
                                            guildPremiumTier = undefined;
                                            if (guild != null) {
                                              guildPremiumTier = guild.premiumTier;
                                            }
                                            return { user, guildPremiumTier };
                                          }
                                        }
                                        tmp72[2] = closure_14(user(6705).TableSwitchRow, obj8);
                                        const tmp73 = closure_14(TableRowGroup2, tmp72);
                                        cResult[49] = tmp35;
                                        cResult[50] = tmp68;
                                        cResult[51] = tmp73;
                                        tmp70 = tmp73;
                                      }
                                      class R {
                                        constructor() {
                                          user = currentUser.getCurrentUser();
                                          const channel = first.getChannel(SelectedChannelStore.getVoiceChannelId());
                                          let guildId;
                                          const getGuild = closure_8.getGuild;
                                          if (channel != null) {
                                            guildId = channel.getGuildId();
                                          }
                                          const guild = getGuild(guildId);
                                          guildPremiumTier = undefined;
                                          if (guild != null) {
                                            guildPremiumTier = guild.premiumTier;
                                          }
                                          return { user, guildPremiumTier };
                                        }
                                      }
                                      cResult[46] = tmp37;
                                      cResult[47] = value;
                                      cResult[48] = tmp69;
                                      tmp68 = tmp69;
                                    }
                                  }
                                }
                                let str2 = "two-step";
                                let tmp59 = "two-step" === goLiveUpsellVariant && sharedValue.get();
                                if (tmp59) {
                                  let obj9 = { style: tmp25.section, children: closure_14(tmp22Result, obj10) };
                                  class H {
                                    constructor() {
                                      let sourceId;
                                      const obj = currentUserActiveStream;
                                      currentUserActiveStream = currentUserActiveStream.getCurrentUserActiveStream();
                                      const obj2 = {
                                        isStreaming:
                                          null != currentUserActiveStream &&
                                          currentUserActiveStream.state === ApplicationStreamStates.ACTIVE,
                                        activeSourceId: sourceId,
                                      };
                                      const streamerActiveStreamMetadata = obj.getStreamerActiveStreamMetadata();
                                      sourceId = undefined;
                                      if (streamerActiveStreamMetadata != null) {
                                        sourceId = streamerActiveStreamMetadata.sourceId;
                                      }
                                      if (sourceId == null) {
                                        sourceId = null;
                                      }
                                      return obj2;
                                    }
                                  }
                                  obj10 = { text: intl3.string(guildPremiumTier(2327).u72Prd), onPress: null };
                                  tmp22Result = guildPremiumTier(9661);
                                  intl3 = tmp(1126).intl;
                                  class R {
                                    constructor() {
                                      user = currentUser.getCurrentUser();
                                      const channel = first.getChannel(SelectedChannelStore.getVoiceChannelId());
                                      let guildId;
                                      const getGuild = closure_8.getGuild;
                                      if (channel != null) {
                                        guildId = channel.getGuildId();
                                      }
                                      const guild = getGuild(guildId);
                                      guildPremiumTier = undefined;
                                      if (guild != null) {
                                        guildPremiumTier = guild.premiumTier;
                                      }
                                      return { user, guildPremiumTier };
                                    }
                                  }
                                  tmp59 = closure_14(tmp61, obj9);
                                }
                                class R {
                                  constructor() {
                                    user = currentUser.getCurrentUser();
                                    const channel = first.getChannel(SelectedChannelStore.getVoiceChannelId());
                                    let guildId;
                                    const getGuild = closure_8.getGuild;
                                    if (channel != null) {
                                      guildId = channel.getGuildId();
                                    }
                                    const guild = getGuild(guildId);
                                    guildPremiumTier = undefined;
                                    if (guild != null) {
                                      guildPremiumTier = guild.premiumTier;
                                    }
                                    return { user, guildPremiumTier };
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
                                  let sourceId;
                                  const obj = currentUserActiveStream;
                                  currentUserActiveStream = currentUserActiveStream.getCurrentUserActiveStream();
                                  const obj2 = {
                                    isStreaming:
                                      null != currentUserActiveStream &&
                                      currentUserActiveStream.state === ApplicationStreamStates.ACTIVE,
                                    activeSourceId: sourceId,
                                  };
                                  const streamerActiveStreamMetadata = obj.getStreamerActiveStreamMetadata();
                                  sourceId = undefined;
                                  if (streamerActiveStreamMetadata != null) {
                                    sourceId = streamerActiveStreamMetadata.sourceId;
                                  }
                                  if (sourceId == null) {
                                    sourceId = null;
                                  }
                                  return obj2;
                                }
                              }
                              tmp55[0] = section;
                              tmp55[1] = tmp51;
                              const tmp56 = closure_14(guildPremiumTier(5983), tmp55);
                              cResult[36] = tmp25.section;
                              class R {
                                constructor() {
                                  user = currentUser.getCurrentUser();
                                  const channel = first.getChannel(SelectedChannelStore.getVoiceChannelId());
                                  let guildId;
                                  const getGuild = closure_8.getGuild;
                                  if (channel != null) {
                                    guildId = channel.getGuildId();
                                  }
                                  const guild = getGuild(guildId);
                                  guildPremiumTier = undefined;
                                  if (guild != null) {
                                    guildPremiumTier = guild.premiumTier;
                                  }
                                  return { user, guildPremiumTier };
                                }
                              }
                              cResult[37] = tmp51;
                              cResult[38] = tmp56;
                              tmp53 = tmp56;
                            }
                          }
                          class H {
                            constructor() {
                              let sourceId;
                              const obj = currentUserActiveStream;
                              currentUserActiveStream = currentUserActiveStream.getCurrentUserActiveStream();
                              const obj2 = {
                                isStreaming:
                                  null != currentUserActiveStream &&
                                  currentUserActiveStream.state === ApplicationStreamStates.ACTIVE,
                                activeSourceId: sourceId,
                              };
                              const streamerActiveStreamMetadata = obj.getStreamerActiveStreamMetadata();
                              sourceId = undefined;
                              if (streamerActiveStreamMetadata != null) {
                                sourceId = streamerActiveStreamMetadata.sourceId;
                              }
                              if (sourceId == null) {
                                sourceId = null;
                              }
                              return obj2;
                            }
                          }
                          let obj11 = {
                            title: tmp45,
                            hasIcons: false,
                            children: closure_14(tmp(6079).TableRadioGroup, obj12),
                          };
                          const TableRowGroup = tmp(6081).TableRowGroup;
                          obj12 = { value, onChange: null, hasIcons: true, children: tmp48 };
                          class R {
                            constructor() {
                              user = currentUser.getCurrentUser();
                              const channel = first.getChannel(SelectedChannelStore.getVoiceChannelId());
                              let guildId;
                              const getGuild = closure_8.getGuild;
                              if (channel != null) {
                                guildId = channel.getGuildId();
                              }
                              const guild = getGuild(guildId);
                              guildPremiumTier = undefined;
                              if (guild != null) {
                                guildPremiumTier = guild.premiumTier;
                              }
                              return { user, guildPremiumTier };
                            }
                          }
                          const tmp52 = closure_14(TableRowGroup, obj11);
                          cResult[32] = value;
                          cResult[33] = tmp47;
                          cResult[34] = tmp48;
                          class Ee {
                            constructor(arg0) {
                              if (closure_2(arg0)) {
                                closure_8(arg0);
                                closure_11(arg0, SelectedChannelStore);
                                if (isStreaming) {
                                  const obj2 = ActionSheetActionCreatorsDefault;
                                  obj2.hideActionSheet(MobileGoLiveActionSheet);
                                }
                              } else {
                                const obj = {
                                  initialUpsellKey: ConstantsIOS.UpsellTypes.STREAM_HIGH_QUALITY,
                                  analyticsLocations,
                                };
                                const handleShowUpsellAlert = PremiumUpsellUtilsDefault.handleShowUpsellAlert;
                                PremiumUpsellUtilsDefault;
                                const result = handleShowUpsellAlert(obj);
                              }
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
                        closure_8(arg0);
                        closure_11(arg0, SelectedChannelStore);
                        if (isStreaming) {
                          const obj2 = ActionSheetActionCreatorsDefault;
                          obj2.hideActionSheet(MobileGoLiveActionSheet);
                        }
                      } else {
                        const obj = {
                          initialUpsellKey: ConstantsIOS.UpsellTypes.STREAM_HIGH_QUALITY,
                          analyticsLocations,
                        };
                        const handleShowUpsellAlert = PremiumUpsellUtilsDefault.handleShowUpsellAlert;
                        PremiumUpsellUtilsDefault;
                        const result = handleShowUpsellAlert(obj);
                      }
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
              let obj3;
              let tmp4;
              let tmp5;
              let items = getStreamSettingsForPresetDefault(preset, user, guildPremiumTier);
              if (items == null) {
                items = [];
              }
              [tmp4, tmp5] = items;
              _slicedToArray(items, 2);
              if (null != tmp4) {
                if (null != tmp5) {
                  const obj2 = { preset, resolution: tmp4, frameRate: tmp5, soundshareEnabled };
                  const obj5 = StreamActionCreators;
                  obj5.updateStreamSettings(obj2);
                  if (isStreaming) {
                    const obj = { qualityOptions: obj3, context: MediaEngineContextTypes.STREAM };
                    obj3 = { preset, resolution: tmp4, frameRate: tmp5 };
                    if (null != react) {
                      const obj4 = { sourceId: tmp7, sound: soundshareEnabled };
                      obj.desktopSettings = obj4;
                    }
                    const tmpResult = AudioActionCreatorsDefault;
                    tmpResult.setGoLiveSource(obj);
                  }
                }
              }
            };
            cResult[14] = guildPremiumTier;
            cResult[15] = isStreaming;
            cResult[16] = user;
            cResult[17] = fn2;
            tmp37 = fn2;
          }
          const tmp28 =
            preset === ApplicationStreamPresets.PRESET_MOBILE_DEFAULT ||
            preset === ApplicationStreamPresets.PRESET_MOBILE_PERFORMANCE ||
            preset === ApplicationStreamPresets.PRESET_MOBILE_HIGH_QUALITY;
          if (tmp28) {
            let PRESET_MOBILE_DEFAULT;
            if (closure_18.includes(preset)) {
              PRESET_MOBILE_DEFAULT = preset;
            }
            class H {
              constructor() {
                let sourceId;
                const obj = currentUserActiveStream;
                currentUserActiveStream = currentUserActiveStream.getCurrentUserActiveStream();
                const obj2 = {
                  isStreaming:
                    null != currentUserActiveStream && currentUserActiveStream.state === ApplicationStreamStates.ACTIVE,
                  activeSourceId: sourceId,
                };
                const streamerActiveStreamMetadata = obj.getStreamerActiveStreamMetadata();
                sourceId = undefined;
                if (streamerActiveStreamMetadata != null) {
                  sourceId = streamerActiveStreamMetadata.sourceId;
                }
                if (sourceId == null) {
                  sourceId = null;
                }
                return obj2;
              }
            }
            cResult[11] = preset;
            cResult[12] = PRESET_MOBILE_DEFAULT;
            tmp26 = PRESET_MOBILE_DEFAULT;
          }
          PRESET_MOBILE_DEFAULT = tmp27.PRESET_MOBILE_DEFAULT;
        }
        const fn = function f(arg0) {
          const obj = getStreamSettingsForPreset;
          return obj.canStreamWithPreset(arg0, user, guildPremiumTier);
        };
        cResult[4] = guildPremiumTier;
        cResult[5] = user;
        cResult[6] = fn;
        tmp14 = fn;
      }
    : () => {
        let Button;
        let TableRadioGroup;
        let TableRowGroup;
        let TableRowGroup2;
        let TableSwitchRow;
        let activeSourceId;
        let analyticsLocations;
        let callback;
        let closure_11;
        let currentUser;
        let currentUserActiveStream;
        let first1;
        let intl;
        let intl2;
        let intl3;
        let intl4;
        let intl5;
        let intl6;
        let intl7;
        let items5;
        let obj10;
        let obj11;
        let obj13;
        let obj15;
        let obj17;
        let obj18;
        let obj21;
        let obj22;
        let obj23;
        let preset;
        let soundshareEnabled;
        let tmp7Result10;
        let tmp7Result8;
        let user;
        let value;
        const tmp2 = callback;
        let obj = user(callback[21]);
        let items = [analyticsLocations];
        const stateFromStoresObject = obj.useStateFromStoresObject(items, () => analyticsLocations.getState());
        ({ preset, soundshareEnabled } = stateFromStoresObject);
        let obj2 = user(callback[21]);
        const items1 = [currentUser, first1, value, closure_8];
        const stateFromStoresObject1 = obj2.useStateFromStoresObject(items1, () => {
          user = currentUser.getCurrentUser();
          const channel = first.getChannel(first1.getVoiceChannelId());
          let guildId;
          const getGuild = closure_8.getGuild;
          if (channel != null) {
            guildId = channel.getGuildId();
          }
          const guild = getGuild(guildId);
          guildPremiumTier = undefined;
          if (guild != null) {
            guildPremiumTier = guild.premiumTier;
          }
          return { user, guildPremiumTier };
        });
        user = stateFromStoresObject1.user;
        let guildPremiumTier = stateFromStoresObject1.guildPremiumTier;
        let obj3 = activeSourceId;
        const items2 = [user, guildPremiumTier];
        callback = activeSourceId.useCallback((arg0) => {
          const obj = getStreamSettingsForPreset;
          return obj.canStreamWithPreset(arg0, user, guildPremiumTier);
        }, items2);
        let obj4 = user(callback[21]);
        const items3 = [currentUserActiveStream];
        const stateFromStoresObject2 = obj4.useStateFromStoresObject(items3, () => {
          let sourceId;
          const obj = currentUserActiveStream;
          currentUserActiveStream = currentUserActiveStream.getCurrentUserActiveStream();
          const obj2 = {
            isStreaming: null != currentUserActiveStream && currentUserActiveStream.state === constants.ACTIVE,
            activeSourceId: sourceId,
          };
          const streamerActiveStreamMetadata = obj.getStreamerActiveStreamMetadata();
          sourceId = undefined;
          if (streamerActiveStreamMetadata != null) {
            sourceId = streamerActiveStreamMetadata.sourceId;
          }
          if (sourceId == null) {
            sourceId = null;
          }
          return obj2;
        });
        const isStreaming = stateFromStoresObject2.isStreaming;
        activeSourceId = stateFromStoresObject2.activeSourceId;
        const tmp7 = guildPremiumTier;
        let obj5 = guildPremiumTier(callback[23]);
        const goLiveUpsellVariant = obj5.useConfig({ location: "MobileGoLiveActionSheet" }).goLiveUpsellVariant;
        const tmp8 = guildPremiumTier(callback[24]);
        analyticsLocations = tmp8(guildPremiumTier(callback[25]).MOBILE_GO_LIVE_ACTION_SHEET).analyticsLocations;
        const tmp9 = closure_16();
        currentUserActiveStream = tmp9;
        let tmp11 = preset === ApplicationStreamPresets.PRESET_MOBILE_DEFAULT;
        const useState = activeSourceId.useState;
        if (!tmp11) {
          tmp11 = preset === tmp10.PRESET_MOBILE_PERFORMANCE;
        }
        if (!tmp11) {
          tmp11 = preset === tmp10.PRESET_MOBILE_HIGH_QUALITY;
        }
        if (tmp11) {
          const tmp14 = isStreaming(useState(preset), 2);
          value = tmp14[0];
          closure_8 = tmp14[1];
          const tmp16 = isStreaming(obj3.useState(soundshareEnabled), 2);
          first1 = tmp16[0];
          currentUser = tmp16[1];
          let tmpResult = tmp(tmp2[26]);
          const sharedValue = tmpResult.useSharedValue(!callback(tmp10.PRESET_MOBILE_HIGH_QUALITY));
          const items4 = [user, guildPremiumTier, activeSourceId, isStreaming];
          ApplicationStreamPresets = obj3.useCallback((preset, soundshareEnabled) => {
            let obj3;
            let tmp4;
            let tmp5;
            let items = getStreamSettingsForPresetDefault(preset, user, guildPremiumTier);
            if (items == null) {
              items = [];
            }
            [tmp4, tmp5] = items;
            _slicedToArray(items, 2);
            if (null != tmp4) {
              if (null != tmp5) {
                const obj2 = { preset, resolution: tmp4, frameRate: tmp5, soundshareEnabled };
                const obj5 = StreamActionCreators;
                obj5.updateStreamSettings(obj2);
                if (isStreaming) {
                  const obj = { qualityOptions: obj3, context: MediaEngineContextTypes.STREAM };
                  obj3 = { preset, resolution: tmp4, frameRate: tmp5 };
                  if (null != activeSourceId) {
                    const obj4 = { sourceId: tmp7, sound: soundshareEnabled };
                    obj.desktopSettings = obj4;
                  }
                  const tmpResult = AudioActionCreatorsDefault;
                  tmpResult.setGoLiveSource(obj);
                }
              }
            }
          }, items4);
          let obj6 = { value: analyticsLocations, children: closure_14(BottomSheet, obj22) };
          const AnalyticsLocationProvider = tmp(tmp2[24]).AnalyticsLocationProvider;
          BottomSheet = tmp(tmp2[38]).BottomSheet;
          const BottomSheetScrollView = tmp(tmp2[39]).BottomSheetScrollView;
          let obj7 = { bottom: true, style: tmp9.wrapper, children: items5 };
          const SafeAreaPaddingView = tmp(tmp2[40]).SafeAreaPaddingView;
          let obj8 = {
            style: tmp9.header,
            variant: "redesign/heading-18/bold",
            color: "text-strong",
            accessibilityRole: "header",
            children: intl.string(tmp7(tmp2[31]).CrNjqp),
          };
          let Text = tmp(tmp2[35]).Text;
          intl = tmp(tmp2[30]).intl;
          items5 = [closure_14(Text, obj8), , , , ,];
          let obj9 = { style: tmp9.section, children: closure_14(TableRowGroup, obj10) };
          obj10 = {
            title: intl2.string(tmp7(tmp2[31])["/XSr8v"]),
            hasIcons: false,
            children: closure_14(TableRadioGroup, obj11),
          };
          const tmp7Result = tmp7(tmp2[34]);
          TableRowGroup = tmp(tmp2[44]).TableRowGroup;
          intl2 = tmp(tmp2[30]).intl;
          obj11 = {
            value,
            onChange(arg0) {
              if (callback(arg0)) {
                closure_8(arg0);
                closure_11(arg0, first1);
                if (isStreaming) {
                  const obj2 = ActionSheetActionCreatorsDefault;
                  obj2.hideActionSheet(MobileGoLiveActionSheet);
                }
              } else {
                const obj = { initialUpsellKey: ConstantsIOS.UpsellTypes.STREAM_HIGH_QUALITY, analyticsLocations };
                const handleShowUpsellAlert = PremiumUpsellUtilsDefault.handleShowUpsellAlert;
                PremiumUpsellUtilsDefault;
                const result = handleShowUpsellAlert(obj);
              }
            },
            hasIcons: true,
            children: closure_18.map((value) => {
              let formatToPlainStringResult;
              let intl;
              let intl3;
              let intl5;
              let items;
              let obj9;
              let str2;
              let tmp8Result;
              const TableRadioRow = TableRadioRow2.TableRadioRow;
              const obj = getStreamSettingsForPreset;
              const maxSettingsForPreset = obj.getMaxSettingsForPreset(ApplicationStreamPresets.PRESET_MOBILE_DEFAULT);
              const obj2 = getStreamSettingsForPreset;
              const maxSettingsForPreset1 = obj2.getMaxSettingsForPreset(
                ApplicationStreamPresets.PRESET_MOBILE_PERFORMANCE,
              );
              const obj3 = getStreamSettingsForPreset;
              const maxSettingsForPreset2 = obj3.getMaxSettingsForPreset(
                ApplicationStreamPresets.PRESET_MOBILE_HIGH_QUALITY,
              );
              const obj4 = { value };
              const PRESET_MOBILE_DEFAULT = ApplicationStreamPresets.PRESET_MOBILE_DEFAULT;
              const obj5 = {
                icon: authStore2(MobilePhoneIcon.MobilePhoneIcon, {}),
                label: intl.string(_modDef2327["2qmQ8N"]),
                subLabel: str2,
              };
              intl = intl8.intl;
              let str = "";
              str2 = "";
              if (null != maxSettingsForPreset) {
                const intl2 = intl8.intl;
                str2 = intl2.formatToPlainString(_modDef2327.ibH7vy, maxSettingsForPreset);
              }
              const obj6 = { [PRESET_MOBILE_DEFAULT]: obj5 };
              const PRESET_MOBILE_PERFORMANCE = ApplicationStreamPresets.PRESET_MOBILE_PERFORMANCE;
              const obj7 = {
                icon: authStore2(SpeedometerIcon.SpeedometerIcon, {}),
                label: intl3.string(_modDef2327["5eO4/m"]),
                subLabel: formatToPlainStringResult,
              };
              intl3 = intl8.intl;
              formatToPlainStringResult = str;
              if (null != maxSettingsForPreset1) {
                const intl4 = intl8.intl;
                formatToPlainStringResult = intl4.formatToPlainString(_modDef2327.fN0UQY, maxSettingsForPreset1);
              }
              obj6[PRESET_MOBILE_PERFORMANCE] = obj7;
              const PRESET_MOBILE_HIGH_QUALITY = ApplicationStreamPresets.PRESET_MOBILE_HIGH_QUALITY;
              const obj8 = {
                icon: authStore2(ImageSparkleIcon.ImageSparkleIcon, {}),
                label: closure_15(tmp8Result, obj9),
                subLabel: str,
              };
              obj9 = { style: currentUserActiveStream.highQualityLabel, children: items };
              const obj10 = {
                variant: "text-md/semibold",
                color: "text-strong",
                children: intl5.string(_modDef2327.nMcXo1),
              };
              tmp8Result = NativeViewDefault;
              const Text = Text_Text.Text;
              intl5 = intl8.intl;
              items = [authStore2(Text, obj10)];
              const obj11 = { source: AssetRegistryDefault, size: "xs" };
              const BaseIconImage = BaseIconImage2.BaseIconImage;
              items[1] = authStore2(BaseIconImage, obj11);
              if (null != maxSettingsForPreset2) {
                const intl6 = intl8.intl;
                str = intl6.formatToPlainString(_modDef2327.q4gYBi, maxSettingsForPreset2);
              }
              const obj12 = {};
              obj6[PRESET_MOBILE_HIGH_QUALITY] = obj8;
              const merged = Object.assign(obj6[value]);
              const merged1 = Object.assign(obj4);
              return authStore2(TableRadioRow, obj12, value);
            }),
          };
          TableRadioGroup = tmp(tmp2[45]).TableRadioGroup;
          items5[1] = closure_14(tmp7Result, obj9);
          let str = "one-step";
          let tmp18Result = "one-step" === goLiveUpsellVariant && sharedValue.get();
          if (tmp18Result) {
            let obj12 = { style: tmp9.section, children: closure_14(tmp7Result8, obj13) };
            obj13 = {
              featureName: user(tmp2[47]).EntitlementFeatureNames.STREAM_HIGH_QUALITY,
              shouldShow: sharedValue,
            };
            const tmp7Result7 = tmp7(tmp2[34]);
            tmp7Result8 = tmp7(tmp2[46]);
            tmp18Result = closure_14(tmp7Result7, obj12);
          }
          items5[2] = tmp18Result;
          let str2 = "two-step";
          let tmp18Result2 = "two-step" === goLiveUpsellVariant && sharedValue.get();
          if (tmp18Result2) {
            const obj14 = { style: tmp9.section, children: closure_14(tmp7Result10, obj15) };
            obj15 = {
              text: intl3.string(tmp7(tmp2[31]).u72Prd),
              onPress() {
                const obj = PremiumUpsellUtilsDefault;
                const obj2 = { initialUpsellKey: ConstantsIOS.UpsellTypes.STREAM_HIGH_QUALITY, analyticsLocations };
                const result = obj.handleShowUpsellAlert(obj2);
              },
            };
            const tmp7Result9 = tmp7(tmp2[34]);
            tmp7Result10 = tmp7(tmp2[48]);
            intl3 = tmp(tmp2[30]).intl;
            tmp18Result2 = closure_14(tmp7Result9, obj14);
          }
          items5[3] = tmp18Result2;
          const obj16 = { style: tmp9.section, children: closure_14(TableRowGroup2, obj17) };
          obj17 = {
            title: intl4.string(tmp7(tmp2[31])["j+eAMQ"]),
            hasIcons: false,
            children: closure_14(TableSwitchRow, obj18),
          };
          const tmp7Result11 = tmp7(tmp2[34]);
          TableRowGroup2 = tmp(tmp2[44]).TableRowGroup;
          intl4 = tmp(tmp2[30]).intl;
          obj18 = {
            label: intl5.string(tmp7(tmp2[31]).uwMBDo),
            value: first1,
            onValueChange(arg0) {
              currentUser(arg0);
              closure_11(first, arg0);
            },
          };
          TableSwitchRow = tmp(tmp2[49]).TableSwitchRow;
          intl5 = tmp(tmp2[30]).intl;
          items5[4] = closure_14(tmp7Result11, obj16);
          const obj19 = { style: tmp9.section, children: closure_14(Button, obj21) };
          const tmp7Result12 = tmp7(tmp2[34]);
          Button = tmp(tmp2[50]).Button;
          if (isStreaming) {
            const obj20 = {
              size: "lg",
              variant: "destructive",
              text: intl7.string(tmp7(tmp2[31]).OsS9Ll),
              onPress() {
                const obj = user(callback[51]);
                obj.stopScreenshare();
                const obj2 = guildPremiumTier(callback[15]);
                obj2.hideActionSheet(MobileGoLiveActionSheet);
              },
            };
            intl7 = tmp(tmp2[30]).intl;
            obj21 = obj20;
          } else {
            obj21 = {
              size: "lg",
              variant: "primary",
              text: intl6.string(tmp7(tmp2[31])["3wwZ/Q"]),
              onPress() {
                const obj = guildPremiumTier(callback[15]);
                obj.hideActionSheet(MobileGoLiveActionSheet);
                const obj2 = user(callback[51]);
                obj2.startStream();
              },
            };
            intl6 = tmp(tmp2[30]).intl;
          }
          obj22 = { startExpanded: true, children: closure_14(BottomSheetScrollView, obj23) };
          obj23 = { children: closure_15(SafeAreaPaddingView, obj7) };
          items5[5] = closure_14(tmp7Result12, obj19);
          return closure_14(AnalyticsLocationProvider, obj6);
        }
        preset = tmp10.PRESET_MOBILE_DEFAULT;
      },
);
let result = size.fileFinishedImporting("modules/go_live/native/MobileGoLiveActionSheet.tsx");

export default memoResult;
export const showMobileGoLiveActionSheet = function showMobileGoLiveActionSheet(location_stack) {
  let obj2;
  const openLazy = ActionSheetActionCreatorsDefault.openLazy;
  const obj = {
    impressionName: discord_common_AnalyticsUtils.ImpressionNames.MOBILE_GO_LIVE_ACTION_SHEET,
    impressionProperties: obj2,
  };
  ActionSheetActionCreatorsDefault;
  obj2 = { location_stack };
  const tmp2 = asyncRequire(9645, dependencyMap.paths);
  openLazy(tmp2, MobileGoLiveActionSheet, obj);
};
