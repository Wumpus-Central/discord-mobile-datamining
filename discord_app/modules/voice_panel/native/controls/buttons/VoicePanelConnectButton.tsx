// discord_app/modules/voice_panel/native/controls/buttons/VoicePanelConnectButton.tsx
import Fragment from "../../../../../../_runtime/react/00021_Fragment.js";
import nativeDefault from "../../../../../../discord_common/js/packages/tokens/native.tsx";
import Text_Text from "../../../../../design/components/Text/native/Text.tsx";
import SelectedChannelActionCreatorsDefault from "../../../../../actions/SelectedChannelActionCreators.tsx";
import useAlertStore from "../../../../../design/components/AlertModal/native/useAlertStore.native.tsx";
import StageChannelModalActionCreators from "../../../../stage_channels/StageChannelModalActionCreators.tsx";
import VoicePanelSpoilerAlert from "../../../../spoiler_channels/native/VoicePanelSpoilerAlert.tsx";
import VoicePanelNoJoinPermissionsAlert from "../../alerts/VoicePanelNoJoinPermissionsAlert.tsx";
import VoicePanelMaxCapacityAlert from "../../alerts/VoicePanelMaxCapacityAlert.tsx";
import VoicePanelNsfwAlert from "../../alerts/VoicePanelNsfwAlert.tsx";
import react from "../../../../../../_runtime/00019_react.js";
import ChannelStore from "../../../../../stores/ChannelStore.tsx";
import createStyles from "../../../../../design/components/Styles/native/createStyles.tsx";
import ReactCompilerGating from "../../../../react_compiler/ReactCompilerGating.tsx";
import size from "../../../../../../_runtime/metro/00002__.js";

const require = globalThis.__r;
const VoicePanelSpoilerAlertDefault = VoicePanelSpoilerAlert;
const VoicePanelNoJoinPermissionsAlertDefault = VoicePanelNoJoinPermissionsAlert;
const VoicePanelMaxCapacityAlertDefault = VoicePanelMaxCapacityAlert;
const VoicePanelNsfwAlertDefault = VoicePanelNsfwAlert;
let _require, closure_4, onConnect, props;

let obj2;
const jsx = Fragment.jsx;
let obj = { connectButton: obj2, connectText: { textAlign: "center" } };
obj2 = {
  backgroundColor: nativeDefault.unsafe_rawColors.GREEN_360,
  paddingLeft: nativeDefault.space.PX_8,
  paddingRight: nativeDefault.space.PX_8,
};
let closure_6 = createStyles.createStyles(obj);
let tmp2 = ReactCompilerGating.isReactCompilerEnabled()
  ? (props) => {
      let canConnect;
      let channelId;
      let first;
      let guildId;
      let isChannelSpoilerGated;
      let stateFromStores;
      let tmp10;
      const obj = channelId(canConnect[6]);
      const cResult = obj.c(28);
      props = props.props;
      const tmp4 = isChannelSpoilerGated();
      const context = stateFromStores.useContext(guildId(canConnect[7]));
      channelId = context.channelId;
      const tmp5 = guildId;
      guildId = context.guildId;
      const tmp7 = guildId(canConnect[8])(channelId);
      canConnect = tmp7.canConnect;
      const isAtMaxCapacity = tmp7.isAtMaxCapacity;
      if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
        const items = [closure_4];
        cResult[0] = items;
        first = items;
      } else {
        first = cResult[0];
      }
      if (cResult[1] !== channelId) {
        const fn = function u() {
          return ChannelStore.getChannel(channelId);
        };
        cResult[1] = channelId;
        cResult[2] = fn;
        tmp10 = fn;
      } else {
        tmp10 = cResult[2];
      }
      const tmpResult = channelId(canConnect[9]);
      stateFromStores = tmpResult.useStateFromStores(first, tmp10);
      if (cResult[3] === stateFromStores) {
        let tmp11;
        let tmp15;
        if (cResult[4] === isAtMaxCapacity) {
          tmp11 = cResult[5];
        }
        closure_4 = tmp11;
        if (cResult[6] !== stateFromStores) {
          const intl = tmp(tmp2[10]).intl;
          let isGuildStageVoiceResult;
          const string = intl.string;
          if (stateFromStores != null) {
            isGuildStageVoiceResult = stateFromStores.isGuildStageVoice();
          }
          const t = tmp(tmp2[10]).t;
          const stringResult = string(isGuildStageVoiceResult ? t["7vb2cc"] : t["96ANUN"]);
          cResult[6] = stateFromStores;
          cResult[7] = stringResult;
          tmp15 = stringResult;
        } else {
          tmp15 = cResult[7];
        }
        const tmpResult3 = channelId(canConnect[11]);
        let isChannelContentGated = tmpResult3.useIsChannelContentGated(stateFromStores) && null != guildId;
        if (isChannelContentGated) {
          isChannelContentGated = null != channelId;
        }
        const tmpResult4 = channelId(canConnect[12]);
        isChannelSpoilerGated =
          tmpResult4.useIsChannelSpoilerGated(stateFromStores) && null != guildId && null != channelId;
        if (cResult[8] === stateFromStores) {
          let tmp25;
          if (cResult[9] === channelId) {
            tmp25 = cResult[10];
          }
          onConnect = tmp25;
          if (cResult[11] === canConnect) {
            if (cResult[12] === channelId) {
              if (cResult[13] === guildId) {
                if (cResult[14] === tmp25) {
                  if (cResult[15] === tmp11) {
                    if (cResult[16] === isChannelContentGated) {
                      let tmp26;
                      if (cResult[17] === isChannelSpoilerGated) {
                        tmp26 = cResult[18];
                      }
                      if (cResult[19] === tmp15) {
                        let tmp27;
                        if (cResult[20] === tmp4.connectText) {
                          tmp27 = cResult[21];
                        }
                        if (cResult[22] === tmp15) {
                          if (cResult[23] === tmp26) {
                            if (cResult[24] === props) {
                              if (cResult[25] === tmp4.connectButton) {
                                let tmp31;
                                if (cResult[26] === tmp27) {
                                  tmp31 = cResult[27];
                                }
                                return tmp31;
                              }
                            }
                          }
                        }
                        class G {
                          constructor() {
                            if (canConnect) {
                              if (!closure_4) {
                                if (!isChannelContentGated) {
                                  if (!isChannelSpoilerGated) {
                                    onConnect();
                                  }
                                }
                              }
                            }
                            if (canConnect) {
                              if (closure_4) {
                                const openAlert4 = useAlertStore.openAlert;
                                useAlertStore;
                                openAlert4(
                                  VoicePanelMaxCapacityAlert.VOICE_PANEL_MAX_CAPACITY_KEY,
                                  jsx(VoicePanelMaxCapacityAlertDefault, { channelId }),
                                );
                              } else if (isChannelContentGated) {
                                const openAlert3 = useAlertStore.openAlert;
                                useAlertStore;
                                openAlert3(
                                  VoicePanelNsfwAlert.VOICE_PANEL_NSFW_KEY,
                                  jsx(VoicePanelNsfwAlertDefault, { guildId, onConnect }),
                                );
                              } else if (isChannelSpoilerGated) {
                                const openAlert2 = useAlertStore.openAlert;
                                useAlertStore;
                                openAlert2(
                                  VoicePanelSpoilerAlert.VOICE_PANEL_SPOILER_KEY,
                                  jsx(VoicePanelSpoilerAlertDefault, { channelId, onConnect }),
                                );
                              }
                            } else {
                              const openAlert = useAlertStore.openAlert;
                              useAlertStore;
                              openAlert(
                                VoicePanelNoJoinPermissionsAlert.VOICE_PANEL_NO_JOIN_PERMS_KEY,
                                jsx(VoicePanelNoJoinPermissionsAlertDefault, {}),
                              );
                            }
                          }
                        }
                        tmp33[0] = tmp26;
                        tmp33[1] = props;
                        tmp33[2] = tmp15;
                        tmp33[3] = tmp4.connectButton;
                        tmp33[4] = tmp27;
                        const tmp34 = isChannelContentGated(tmp5(canConnect[21]), tmp33);
                        cResult[22] = tmp15;
                        cResult[23] = tmp26;
                        class V {
                          constructor() {
                            let isGuildStageVoiceResult;
                            if (stateFromStores != null) {
                              isGuildStageVoiceResult = stateFromStores.isGuildStageVoice();
                            }
                            if (isGuildStageVoiceResult) {
                              const obj3 = StageChannelModalActionCreators;
                              obj3.connectAndOpen(stateFromStores);
                            } else {
                              const obj2 = SelectedChannelActionCreatorsDefault;
                              const voiceChannel = obj2.selectVoiceChannel(channelId);
                            }
                          }
                        }
                        cResult[24] = props;
                        cResult[25] = tmp4.connectButton;
                        cResult[26] = tmp27;
                        cResult[27] = tmp34;
                        tmp31 = tmp34;
                      }
                      class G {
                        constructor() {
                          if (canConnect) {
                            if (!closure_4) {
                              if (!isChannelContentGated) {
                                if (!isChannelSpoilerGated) {
                                  onConnect();
                                }
                              }
                            }
                          }
                          if (canConnect) {
                            if (closure_4) {
                              const openAlert4 = useAlertStore.openAlert;
                              useAlertStore;
                              openAlert4(
                                VoicePanelMaxCapacityAlert.VOICE_PANEL_MAX_CAPACITY_KEY,
                                jsx(VoicePanelMaxCapacityAlertDefault, { channelId }),
                              );
                            } else if (isChannelContentGated) {
                              const openAlert3 = useAlertStore.openAlert;
                              useAlertStore;
                              openAlert3(
                                VoicePanelNsfwAlert.VOICE_PANEL_NSFW_KEY,
                                jsx(VoicePanelNsfwAlertDefault, { guildId, onConnect }),
                              );
                            } else if (isChannelSpoilerGated) {
                              const openAlert2 = useAlertStore.openAlert;
                              useAlertStore;
                              openAlert2(
                                VoicePanelSpoilerAlert.VOICE_PANEL_SPOILER_KEY,
                                jsx(VoicePanelSpoilerAlertDefault, { channelId, onConnect }),
                              );
                            }
                          } else {
                            const openAlert = useAlertStore.openAlert;
                            useAlertStore;
                            openAlert(
                              VoicePanelNoJoinPermissionsAlert.VOICE_PANEL_NO_JOIN_PERMS_KEY,
                              jsx(VoicePanelNoJoinPermissionsAlertDefault, {}),
                            );
                          }
                        }
                      }
                      tmp29[2] = tmp4.connectText;
                      tmp29[3] = tmp15;
                      const tmp30 = isChannelContentGated(channelId(canConnect[20]).Text, tmp29);
                      cResult[19] = tmp15;
                      cResult[20] = tmp4.connectText;
                      cResult[21] = tmp30;
                      tmp27 = tmp30;
                    }
                  }
                }
              }
            }
          }
          class G {
            constructor() {
              if (canConnect) {
                if (!closure_4) {
                  if (!isChannelContentGated) {
                    if (!isChannelSpoilerGated) {
                      onConnect();
                    }
                  }
                }
              }
              if (canConnect) {
                if (closure_4) {
                  const openAlert4 = useAlertStore.openAlert;
                  useAlertStore;
                  openAlert4(
                    VoicePanelMaxCapacityAlert.VOICE_PANEL_MAX_CAPACITY_KEY,
                    jsx(VoicePanelMaxCapacityAlertDefault, { channelId }),
                  );
                } else if (isChannelContentGated) {
                  const openAlert3 = useAlertStore.openAlert;
                  useAlertStore;
                  openAlert3(
                    VoicePanelNsfwAlert.VOICE_PANEL_NSFW_KEY,
                    jsx(VoicePanelNsfwAlertDefault, { guildId, onConnect }),
                  );
                } else if (isChannelSpoilerGated) {
                  const openAlert2 = useAlertStore.openAlert;
                  useAlertStore;
                  openAlert2(
                    VoicePanelSpoilerAlert.VOICE_PANEL_SPOILER_KEY,
                    jsx(VoicePanelSpoilerAlertDefault, { channelId, onConnect }),
                  );
                }
              } else {
                const openAlert = useAlertStore.openAlert;
                useAlertStore;
                openAlert(
                  VoicePanelNoJoinPermissionsAlert.VOICE_PANEL_NO_JOIN_PERMS_KEY,
                  jsx(VoicePanelNoJoinPermissionsAlertDefault, {}),
                );
              }
            }
          }
          cResult[11] = canConnect;
          cResult[12] = channelId;
          cResult[13] = guildId;
          cResult[14] = tmp25;
          cResult[15] = tmp11;
          class V {
            constructor() {
              let isGuildStageVoiceResult;
              if (stateFromStores != null) {
                isGuildStageVoiceResult = stateFromStores.isGuildStageVoice();
              }
              if (isGuildStageVoiceResult) {
                const obj3 = StageChannelModalActionCreators;
                obj3.connectAndOpen(stateFromStores);
              } else {
                const obj2 = SelectedChannelActionCreatorsDefault;
                const voiceChannel = obj2.selectVoiceChannel(channelId);
              }
            }
          }
          cResult[16] = isChannelContentGated;
          cResult[17] = isChannelSpoilerGated;
          cResult[18] = G;
          tmp26 = G;
        }
        class V {
          constructor() {
            let isGuildStageVoiceResult;
            if (stateFromStores != null) {
              isGuildStageVoiceResult = stateFromStores.isGuildStageVoice();
            }
            if (isGuildStageVoiceResult) {
              const obj3 = StageChannelModalActionCreators;
              obj3.connectAndOpen(stateFromStores);
            } else {
              const obj2 = SelectedChannelActionCreatorsDefault;
              const voiceChannel = obj2.selectVoiceChannel(channelId);
            }
          }
        }
        cResult[8] = stateFromStores;
        cResult[9] = channelId;
        cResult[10] = V;
        tmp25 = V;
      }
      if (isAtMaxCapacity) {
        if (stateFromStores != null) {
          stateFromStores.isGuildStageVoice();
        }
        class G {
          constructor() {
            if (canConnect) {
              if (!closure_4) {
                if (!isChannelContentGated) {
                  if (!isChannelSpoilerGated) {
                    onConnect();
                  }
                }
              }
            }
            if (canConnect) {
              if (closure_4) {
                const openAlert4 = useAlertStore.openAlert;
                useAlertStore;
                openAlert4(
                  VoicePanelMaxCapacityAlert.VOICE_PANEL_MAX_CAPACITY_KEY,
                  jsx(VoicePanelMaxCapacityAlertDefault, { channelId }),
                );
              } else if (isChannelContentGated) {
                const openAlert3 = useAlertStore.openAlert;
                useAlertStore;
                openAlert3(
                  VoicePanelNsfwAlert.VOICE_PANEL_NSFW_KEY,
                  jsx(VoicePanelNsfwAlertDefault, { guildId, onConnect }),
                );
              } else if (isChannelSpoilerGated) {
                const openAlert2 = useAlertStore.openAlert;
                useAlertStore;
                openAlert2(
                  VoicePanelSpoilerAlert.VOICE_PANEL_SPOILER_KEY,
                  jsx(VoicePanelSpoilerAlertDefault, { channelId, onConnect }),
                );
              }
            } else {
              const openAlert = useAlertStore.openAlert;
              useAlertStore;
              openAlert(
                VoicePanelNoJoinPermissionsAlert.VOICE_PANEL_NO_JOIN_PERMS_KEY,
                jsx(VoicePanelNoJoinPermissionsAlertDefault, {}),
              );
            }
          }
        }
      }
      cResult[3] = stateFromStores;
      cResult[4] = isAtMaxCapacity;
      cResult[5] = isAtMaxCapacity;
      tmp11 = tmp12;
    }
  : (props) => {
      let children;
      let connectText;
      let items3;
      let channelId;
      let guildId;
      let canConnect;
      let stateFromStores;
      let c6;
      let closure_7;
      let closure_8;
      onConnect = undefined;
      props = props.props;
      const tmp = c6();
      _require = tmp;
      const context = canConnect.useContext(channelId(guildId[7]));
      const tmp2 = channelId;
      channelId = context.channelId;
      guildId = context.guildId;
      const tmp5 = channelId(guildId[8])(channelId);
      canConnect = tmp5.canConnect;
      let isAtMaxCapacity = tmp5.isAtMaxCapacity;
      let obj2 = require("get initialized");
      const items = [stateFromStores];
      stateFromStores = obj2.useStateFromStores(items, () => ChannelStore.getChannel(channelId));
      if (isAtMaxCapacity) {
        let isGuildStageVoiceResult;
        if (stateFromStores != null) {
          isGuildStageVoiceResult = stateFromStores.isGuildStageVoice();
        }
        isAtMaxCapacity = !isGuildStageVoiceResult;
      }
      const intl = tmp6(tmp3[10]).intl;
      let isGuildStageVoiceResult1;
      const string = intl.string;
      if (stateFromStores != null) {
        isGuildStageVoiceResult1 = stateFromStores.isGuildStageVoice();
      }
      const t = tmp6(tmp3[10]).t;
      const stringResult = string(isGuildStageVoiceResult1 ? t["7vb2cc"] : t["96ANUN"]);
      c6 = stringResult;
      const tmp6Result = require("AgeGateUtils");
      const tmp11 = tmp6Result.useIsChannelContentGated(stateFromStores) && null != guildId && null != channelId;
      closure_7 = tmp11;
      const tmp6Result2 = require("SpoilerChannelUtils");
      const tmp12 = tmp6Result2.useIsChannelSpoilerGated(stateFromStores) && null != guildId && null != channelId;
      closure_8 = tmp12;
      const items1 = [stateFromStores, channelId];
      onConnect = obj.useCallback(() => {
        let isGuildStageVoiceResult;
        if (stateFromStores != null) {
          isGuildStageVoiceResult = stateFromStores.isGuildStageVoice();
        }
        if (isGuildStageVoiceResult) {
          const obj3 = StageChannelModalActionCreators;
          obj3.connectAndOpen(stateFromStores);
        } else {
          const obj2 = SelectedChannelActionCreatorsDefault;
          const voiceChannel = obj2.selectVoiceChannel(channelId);
        }
      }, items1);
      const items2 = [canConnect, isAtMaxCapacity, channelId, tmp11, tmp12, guildId, onConnect];
      const callback1 = obj.useCallback(() => {
        if (canConnect) {
          if (!isAtMaxCapacity) {
            if (!closure_7) {
              if (!closure_8) {
                onConnect();
              }
            }
          }
        }
        if (canConnect) {
          if (isAtMaxCapacity) {
            const openAlert4 = useAlertStore.openAlert;
            useAlertStore;
            openAlert4(
              VoicePanelMaxCapacityAlert.VOICE_PANEL_MAX_CAPACITY_KEY,
              jsx(VoicePanelMaxCapacityAlertDefault, { channelId }),
            );
          } else if (closure_7) {
            const openAlert3 = useAlertStore.openAlert;
            useAlertStore;
            openAlert3(
              VoicePanelNsfwAlert.VOICE_PANEL_NSFW_KEY,
              jsx(VoicePanelNsfwAlertDefault, { guildId, onConnect }),
            );
          } else if (closure_8) {
            const openAlert2 = useAlertStore.openAlert;
            useAlertStore;
            openAlert2(
              VoicePanelSpoilerAlert.VOICE_PANEL_SPOILER_KEY,
              jsx(VoicePanelSpoilerAlertDefault, { channelId, onConnect }),
            );
          }
        } else {
          const openAlert = useAlertStore.openAlert;
          useAlertStore;
          openAlert(
            VoicePanelNoJoinPermissionsAlert.VOICE_PANEL_NO_JOIN_PERMS_KEY,
            jsx(VoicePanelNoJoinPermissionsAlertDefault, {}),
          );
        }
      }, items2);
      const element = {
        onPress: callback1,
        props,
        accessibilityLabel: stringResult,
        style: tmp.connectButton,
        children: obj.useMemo(
          () =>
            jsx(Text_Text.Text, {
              variant: "text-sm/semibold",
              color: "text-overlay-light",
              style: connectText.connectText,
              children,
            }),
          items3,
        ),
      };
      items3 = [stringResult, tmp.connectText];
      const tmp2Result = tmp2(guildId[21]);
      return isAtMaxCapacity(tmp2Result, element);
    };
const result = size.fileFinishedImporting("modules/voice_panel/native/controls/buttons/VoicePanelConnectButton.tsx");

export default tmp2;
