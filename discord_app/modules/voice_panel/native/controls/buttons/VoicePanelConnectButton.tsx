// discord_app/modules/voice_panel/native/controls/buttons/VoicePanelConnectButton.tsx
import nativeDefault from "../../../../../../discord_common/js/packages/tokens/native.tsx";
import Text_Text from "../../../../../design/components/Text/native/Text.tsx";
import SelectedChannelActionCreatorsDefault from "../../../../../actions/SelectedChannelActionCreators.tsx";
import useAlertStore from "../../../../../design/components/AlertModal/native/useAlertStore.native.tsx";
import StageChannelModalActionCreators from "../../../../stage_channels/StageChannelModalActionCreators.tsx";
import VoicePanelSpoilerAlert from "../../../../spoiler_channels/native/VoicePanelSpoilerAlert.tsx";
import VoicePanelNoJoinPermissionsAlert from "../../alerts/VoicePanelNoJoinPermissionsAlert.tsx";
import VoicePanelMaxCapacityAlert from "../../alerts/VoicePanelMaxCapacityAlert.tsx";
import VoicePanelNsfwAlert from "../../alerts/VoicePanelNsfwAlert.tsx";
import noop from "../../../../../../_runtime/metro/00019__.js";
import ChannelStore from "../../../../../stores/ChannelStore.tsx";

const require = globalThis.__r;
const VoicePanelSpoilerAlertDefault = VoicePanelSpoilerAlert;
const VoicePanelNoJoinPermissionsAlertDefault = VoicePanelNoJoinPermissionsAlert;
const VoicePanelMaxCapacityAlertDefault = VoicePanelMaxCapacityAlert;
const VoicePanelNsfwAlertDefault = VoicePanelNsfwAlert;

require = fn;
const jsx = fn(21).jsx;
const createStyles = fn(4896);
let obj2 = {
  connectButton: {
    backgroundColor: nativeDefault.unsafe_rawColors.GREEN_360,
    paddingLeft: nativeDefault.space.PX_8,
    paddingRight: nativeDefault.space.PX_8,
  },
  connectText: { textAlign: "center" },
};
let closure_6 = createStyles.createStyles(obj2);
const ReactCompilerGating = fn(558);
let obj3 = {
  backgroundColor: nativeDefault.unsafe_rawColors.GREEN_360,
  paddingLeft: nativeDefault.space.PX_8,
  paddingRight: nativeDefault.space.PX_8,
};
const size = fn(2);
const result = size.fileFinishedImporting("modules/voice_panel/native/controls/buttons/VoicePanelConnectButton.tsx");

export default ReactCompilerGating.isReactCompilerEnabled()
  ? (props) => {
      const cResult = channelId(canConnect[6]).c(28);
      props = props.props;
      const tmp4 = isChannelSpoilerGated();
      const context = stateFromStores.useContext(guildId(canConnect[7]));
      channelId = context.channelId;
      guildId = context.guildId;
      const tmp7 = guildId(canConnect[8])(channelId);
      canConnect = tmp7.canConnect;
      const isAtMaxCapacity = tmp7.isAtMaxCapacity;
      if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
        const items = [closure_4];
        cResult[0] = items;
        let first = items;
      } else {
        first = cResult[0];
      }
      if (cResult[1] !== channelId) {
        const fn = function u() {
          return ChannelStore.getChannel(channelId);
        };
        cResult[1] = channelId;
        cResult[2] = fn;
        let tmp10 = fn;
      } else {
        tmp10 = cResult[2];
      }
      let obj = channelId(canConnect[6]);
      const tmp5 = guildId;
      stateFromStores = channelId(canConnect[9]).useStateFromStores(first, tmp10);
      if (cResult[3] === stateFromStores) {
        if (cResult[4] === isAtMaxCapacity) {
          let tmp11 = cResult[5];
        }
        closure_4 = tmp11;
        if (cResult[6] !== stateFromStores) {
          const intl = tmp(tmp2[10]).intl;
          let isGuildStageVoiceResult;
          if (stateFromStores != null) {
            isGuildStageVoiceResult = stateFromStores.isGuildStageVoice();
          }
          const t = tmp(tmp2[10]).t;
          const stringResult = intl.string(isGuildStageVoiceResult ? t["7vb2cc"] : t["96ANUN"]);
          cResult[6] = stateFromStores;
          cResult[7] = stringResult;
        } else {
          let isChannelContentGated = tmp(tmp2[11]).useIsChannelContentGated(stateFromStores);
          if (isChannelContentGated) {
            isChannelContentGated = null != guildId;
          }
          if (isChannelContentGated) {
            isChannelContentGated = null != channelId;
          }
          const tmpResult3 = tmp(tmp2[11]);
          isChannelSpoilerGated = tmp(tmp2[12]).useIsChannelSpoilerGated(stateFromStores);
          if (isChannelSpoilerGated) {
            isChannelSpoilerGated = null != guildId;
          }
          if (isChannelSpoilerGated) {
            isChannelSpoilerGated = null != channelId;
          }
          if (cResult[8] === stateFromStores) {
            if (cResult[9] === channelId) {
              let tmp26 = cResult[10];
            }
            onConnect = tmp26;
            if (cResult[11] === canConnect) {
              if (cResult[12] === channelId) {
                if (cResult[13] === guildId) {
                  if (cResult[14] === tmp26) {
                    if (cResult[15] === tmp11) {
                      if (cResult[16] === isChannelContentGated) {
                        if (cResult[17] === isChannelSpoilerGated) {
                          let tmp27 = cResult[18];
                        }
                        if (cResult[19] === tmp15) {
                          if (cResult[20] === tmp4.connectText) {
                            let tmp28 = cResult[21];
                          }
                          if (cResult[22] === tmp15) {
                            if (cResult[23] === tmp27) {
                              if (cResult[24] === props) {
                                if (cResult[25] === tmp4.connectButton) {
                                  if (cResult[26] === tmp28) {
                                    let tmp32 = cResult[27];
                                  }
                                  return tmp32;
                                }
                              }
                            }
                          }
                          class G {
                            constructor() {
                              tmp = canConnect;
                              if (canConnect) {
                                tmp2 = closure_4;
                                if (!closure_4) {
                                  tmp3 = closure_5;
                                  if (!closure_5) {
                                    tmp4 = closure_6;
                                    if (!closure_6) {
                                      tmp5 = closure_7;
                                      tmp6 = closure_7();
                                    }
                                    return;
                                  }
                                }
                              }
                              if (tmp) {
                                tmp15 = closure_4;
                                if (closure_4) {
                                  tmp38 = closure_0;
                                  tmp39 = closure_2;
                                  obj6 = closure_0(closure_2[15]);
                                  tmp40 = closure_0;
                                  tmp41 = closure_2;
                                  tmp42 = jsx;
                                  tmp43 = closure_1;
                                  tmp44 = closure_2;
                                  obj1 = { channelId: null };
                                  tmp45 = channelId;
                                  obj1.channelId = channelId;
                                  openAlertResult = obj6.openAlert(
                                    closure_0(closure_2[17]).VOICE_PANEL_MAX_CAPACITY_KEY,
                                    jsx(closure_1(closure_2[17]), obj1),
                                  );
                                } else {
                                  tmp16 = closure_5;
                                  if (closure_5) {
                                    tmp28 = closure_0;
                                    tmp29 = closure_2;
                                    obj4 = closure_0(closure_2[15]);
                                    tmp30 = closure_0;
                                    tmp31 = closure_2;
                                    tmp32 = jsx;
                                    tmp33 = closure_1;
                                    tmp34 = closure_2;
                                    obj8 = { guildId: null, onConnect: null };
                                    tmp35 = guildId;
                                    obj8.guildId = guildId;
                                    tmp36 = closure_7;
                                    obj8.onConnect = closure_7;
                                    openAlertResult1 = obj4.openAlert(
                                      closure_0(closure_2[18]).VOICE_PANEL_NSFW_KEY,
                                      jsx(closure_1(closure_2[18]), obj8),
                                    );
                                  } else {
                                    tmp17 = closure_6;
                                    if (closure_6) {
                                      tmp18 = closure_0;
                                      tmp19 = closure_2;
                                      obj2 = closure_0(closure_2[15]);
                                      tmp20 = closure_0;
                                      tmp21 = closure_2;
                                      tmp22 = jsx;
                                      tmp23 = closure_1;
                                      tmp24 = closure_2;
                                      obj9 = { channelId: null, onConnect: null };
                                      tmp25 = channelId;
                                      obj9.channelId = channelId;
                                      tmp26 = closure_7;
                                      obj9.onConnect = closure_7;
                                      openAlertResult2 = obj2.openAlert(
                                        closure_0(closure_2[19]).VOICE_PANEL_SPOILER_KEY,
                                        jsx(closure_1(closure_2[19]), obj9),
                                      );
                                    }
                                  }
                                }
                              } else {
                                tmp7 = closure_0;
                                tmp8 = closure_2;
                                obj = closure_0(closure_2[15]);
                                tmp9 = closure_0;
                                tmp10 = closure_2;
                                tmp11 = jsx;
                                tmp12 = closure_1;
                                tmp13 = closure_2;
                                openAlertResult3 = obj.openAlert(
                                  closure_0(closure_2[16]).VOICE_PANEL_NO_JOIN_PERMS_KEY,
                                  jsx(closure_1(closure_2[16]), {}),
                                );
                              }
                              return;
                            }
                          }
                          tmp34[0] = tmp27;
                          tmp34[1] = props;
                          tmp34[2] = tmp15;
                          tmp34[3] = tmp4.connectButton;
                          tmp34[4] = tmp28;
                          const tmp35 = isChannelContentGated(tmp5(tmp2[21]), tmp34);
                          cResult[22] = tmp15;
                          class V {
                            constructor() {
                              obj = closure_3;
                              isGuildStageVoiceResult = undefined;
                              if (closure_3 != null) {
                                isGuildStageVoiceResult = obj.isGuildStageVoice();
                              }
                              if (isGuildStageVoiceResult) {
                                tmp6 = closure_0;
                                tmp7 = closure_2;
                                obj3 = closure_0(closure_2[13]);
                                connectAndOpenResult = obj3.connectAndOpen(obj);
                              } else {
                                tmp2 = closure_1;
                                tmp3 = closure_2;
                                obj2 = closure_1(closure_2[14]);
                                tmp4 = channelId;
                                voiceChannel = obj2.selectVoiceChannel(channelId);
                              }
                              return;
                            }
                          }
                          cResult[23] = tmp27;
                          cResult[24] = props;
                          cResult[25] = tmp4.connectButton;
                          cResult[26] = tmp28;
                          cResult[27] = tmp35;
                          tmp32 = tmp35;
                        }
                        class G {
                          constructor() {
                            tmp = canConnect;
                            if (canConnect) {
                              tmp2 = closure_4;
                              if (!closure_4) {
                                tmp3 = closure_5;
                                if (!closure_5) {
                                  tmp4 = closure_6;
                                  if (!closure_6) {
                                    tmp5 = closure_7;
                                    tmp6 = closure_7();
                                  }
                                  return;
                                }
                              }
                            }
                            if (tmp) {
                              tmp15 = closure_4;
                              if (closure_4) {
                                tmp38 = closure_0;
                                tmp39 = closure_2;
                                obj6 = closure_0(closure_2[15]);
                                tmp40 = closure_0;
                                tmp41 = closure_2;
                                tmp42 = jsx;
                                tmp43 = closure_1;
                                tmp44 = closure_2;
                                obj1 = { channelId: null };
                                tmp45 = channelId;
                                obj1.channelId = channelId;
                                openAlertResult = obj6.openAlert(
                                  closure_0(closure_2[17]).VOICE_PANEL_MAX_CAPACITY_KEY,
                                  jsx(closure_1(closure_2[17]), obj1),
                                );
                              } else {
                                tmp16 = closure_5;
                                if (closure_5) {
                                  tmp28 = closure_0;
                                  tmp29 = closure_2;
                                  obj4 = closure_0(closure_2[15]);
                                  tmp30 = closure_0;
                                  tmp31 = closure_2;
                                  tmp32 = jsx;
                                  tmp33 = closure_1;
                                  tmp34 = closure_2;
                                  obj8 = { guildId: null, onConnect: null };
                                  tmp35 = guildId;
                                  obj8.guildId = guildId;
                                  tmp36 = closure_7;
                                  obj8.onConnect = closure_7;
                                  openAlertResult1 = obj4.openAlert(
                                    closure_0(closure_2[18]).VOICE_PANEL_NSFW_KEY,
                                    jsx(closure_1(closure_2[18]), obj8),
                                  );
                                } else {
                                  tmp17 = closure_6;
                                  if (closure_6) {
                                    tmp18 = closure_0;
                                    tmp19 = closure_2;
                                    obj2 = closure_0(closure_2[15]);
                                    tmp20 = closure_0;
                                    tmp21 = closure_2;
                                    tmp22 = jsx;
                                    tmp23 = closure_1;
                                    tmp24 = closure_2;
                                    obj9 = { channelId: null, onConnect: null };
                                    tmp25 = channelId;
                                    obj9.channelId = channelId;
                                    tmp26 = closure_7;
                                    obj9.onConnect = closure_7;
                                    openAlertResult2 = obj2.openAlert(
                                      closure_0(closure_2[19]).VOICE_PANEL_SPOILER_KEY,
                                      jsx(closure_1(closure_2[19]), obj9),
                                    );
                                  }
                                }
                              }
                            } else {
                              tmp7 = closure_0;
                              tmp8 = closure_2;
                              obj = closure_0(closure_2[15]);
                              tmp9 = closure_0;
                              tmp10 = closure_2;
                              tmp11 = jsx;
                              tmp12 = closure_1;
                              tmp13 = closure_2;
                              openAlertResult3 = obj.openAlert(
                                closure_0(closure_2[16]).VOICE_PANEL_NO_JOIN_PERMS_KEY,
                                jsx(closure_1(closure_2[16]), {}),
                              );
                            }
                            return;
                          }
                        }
                        tmp30[2] = tmp4.connectText;
                        tmp30[3] = tmp15;
                        cResult[19] = tmp15;
                        cResult[20] = tmp4.connectText;
                        class V {
                          constructor() {
                            obj = closure_3;
                            isGuildStageVoiceResult = undefined;
                            if (closure_3 != null) {
                              isGuildStageVoiceResult = obj.isGuildStageVoice();
                            }
                            if (isGuildStageVoiceResult) {
                              tmp6 = closure_0;
                              tmp7 = closure_2;
                              obj3 = closure_0(closure_2[13]);
                              connectAndOpenResult = obj3.connectAndOpen(obj);
                            } else {
                              tmp2 = closure_1;
                              tmp3 = closure_2;
                              obj2 = closure_1(closure_2[14]);
                              tmp4 = channelId;
                              voiceChannel = obj2.selectVoiceChannel(channelId);
                            }
                            return;
                          }
                        }
                        tmp28 = isChannelContentGated(tmp(tmp2[20]).Text, tmp30);
                        const tmp31 = isChannelContentGated(tmp(tmp2[20]).Text, tmp30);
                      }
                    }
                  }
                }
              }
            }
            class G {
              constructor() {
                tmp = canConnect;
                if (canConnect) {
                  tmp2 = closure_4;
                  if (!closure_4) {
                    tmp3 = closure_5;
                    if (!closure_5) {
                      tmp4 = closure_6;
                      if (!closure_6) {
                        tmp5 = closure_7;
                        tmp6 = closure_7();
                      }
                      return;
                    }
                  }
                }
                if (tmp) {
                  tmp15 = closure_4;
                  if (closure_4) {
                    tmp38 = closure_0;
                    tmp39 = closure_2;
                    obj6 = closure_0(closure_2[15]);
                    tmp40 = closure_0;
                    tmp41 = closure_2;
                    tmp42 = jsx;
                    tmp43 = closure_1;
                    tmp44 = closure_2;
                    obj1 = { channelId: null };
                    tmp45 = channelId;
                    obj1.channelId = channelId;
                    openAlertResult = obj6.openAlert(
                      closure_0(closure_2[17]).VOICE_PANEL_MAX_CAPACITY_KEY,
                      jsx(closure_1(closure_2[17]), obj1),
                    );
                  } else {
                    tmp16 = closure_5;
                    if (closure_5) {
                      tmp28 = closure_0;
                      tmp29 = closure_2;
                      obj4 = closure_0(closure_2[15]);
                      tmp30 = closure_0;
                      tmp31 = closure_2;
                      tmp32 = jsx;
                      tmp33 = closure_1;
                      tmp34 = closure_2;
                      obj8 = { guildId: null, onConnect: null };
                      tmp35 = guildId;
                      obj8.guildId = guildId;
                      tmp36 = closure_7;
                      obj8.onConnect = closure_7;
                      openAlertResult1 = obj4.openAlert(
                        closure_0(closure_2[18]).VOICE_PANEL_NSFW_KEY,
                        jsx(closure_1(closure_2[18]), obj8),
                      );
                    } else {
                      tmp17 = closure_6;
                      if (closure_6) {
                        tmp18 = closure_0;
                        tmp19 = closure_2;
                        obj2 = closure_0(closure_2[15]);
                        tmp20 = closure_0;
                        tmp21 = closure_2;
                        tmp22 = jsx;
                        tmp23 = closure_1;
                        tmp24 = closure_2;
                        obj9 = { channelId: null, onConnect: null };
                        tmp25 = channelId;
                        obj9.channelId = channelId;
                        tmp26 = closure_7;
                        obj9.onConnect = closure_7;
                        openAlertResult2 = obj2.openAlert(
                          closure_0(closure_2[19]).VOICE_PANEL_SPOILER_KEY,
                          jsx(closure_1(closure_2[19]), obj9),
                        );
                      }
                    }
                  }
                } else {
                  tmp7 = closure_0;
                  tmp8 = closure_2;
                  obj = closure_0(closure_2[15]);
                  tmp9 = closure_0;
                  tmp10 = closure_2;
                  tmp11 = jsx;
                  tmp12 = closure_1;
                  tmp13 = closure_2;
                  openAlertResult3 = obj.openAlert(
                    closure_0(closure_2[16]).VOICE_PANEL_NO_JOIN_PERMS_KEY,
                    jsx(closure_1(closure_2[16]), {}),
                  );
                }
                return;
              }
            }
            cResult[11] = canConnect;
            cResult[12] = channelId;
            cResult[13] = guildId;
            cResult[14] = tmp26;
            class V {
              constructor() {
                obj = closure_3;
                isGuildStageVoiceResult = undefined;
                if (closure_3 != null) {
                  isGuildStageVoiceResult = obj.isGuildStageVoice();
                }
                if (isGuildStageVoiceResult) {
                  tmp6 = closure_0;
                  tmp7 = closure_2;
                  obj3 = closure_0(closure_2[13]);
                  connectAndOpenResult = obj3.connectAndOpen(obj);
                } else {
                  tmp2 = closure_1;
                  tmp3 = closure_2;
                  obj2 = closure_1(closure_2[14]);
                  tmp4 = channelId;
                  voiceChannel = obj2.selectVoiceChannel(channelId);
                }
                return;
              }
            }
            cResult[15] = tmp11;
            cResult[16] = isChannelContentGated;
            cResult[17] = isChannelSpoilerGated;
            cResult[18] = G;
            tmp27 = G;
          }
          class V {
            constructor() {
              obj = closure_3;
              isGuildStageVoiceResult = undefined;
              if (closure_3 != null) {
                isGuildStageVoiceResult = obj.isGuildStageVoice();
              }
              if (isGuildStageVoiceResult) {
                tmp6 = closure_0;
                tmp7 = closure_2;
                obj3 = closure_0(closure_2[13]);
                connectAndOpenResult = obj3.connectAndOpen(obj);
              } else {
                tmp2 = closure_1;
                tmp3 = closure_2;
                obj2 = closure_1(closure_2[14]);
                tmp4 = channelId;
                voiceChannel = obj2.selectVoiceChannel(channelId);
              }
              return;
            }
          }
          cResult[8] = stateFromStores;
          cResult[9] = channelId;
          cResult[10] = V;
          tmp26 = V;
          const tmpResult4 = tmp(tmp2[12]);
        }
      }
      if (isAtMaxCapacity) {
        if (stateFromStores != null) {
          stateFromStores.isGuildStageVoice();
        }
        class G {
          constructor() {
            tmp = canConnect;
            if (canConnect) {
              tmp2 = closure_4;
              if (!closure_4) {
                tmp3 = closure_5;
                if (!closure_5) {
                  tmp4 = closure_6;
                  if (!closure_6) {
                    tmp5 = closure_7;
                    tmp6 = closure_7();
                  }
                  return;
                }
              }
            }
            if (tmp) {
              tmp15 = closure_4;
              if (closure_4) {
                tmp38 = closure_0;
                tmp39 = closure_2;
                obj6 = closure_0(closure_2[15]);
                tmp40 = closure_0;
                tmp41 = closure_2;
                tmp42 = jsx;
                tmp43 = closure_1;
                tmp44 = closure_2;
                obj1 = { channelId: null };
                tmp45 = channelId;
                obj1.channelId = channelId;
                openAlertResult = obj6.openAlert(
                  closure_0(closure_2[17]).VOICE_PANEL_MAX_CAPACITY_KEY,
                  jsx(closure_1(closure_2[17]), obj1),
                );
              } else {
                tmp16 = closure_5;
                if (closure_5) {
                  tmp28 = closure_0;
                  tmp29 = closure_2;
                  obj4 = closure_0(closure_2[15]);
                  tmp30 = closure_0;
                  tmp31 = closure_2;
                  tmp32 = jsx;
                  tmp33 = closure_1;
                  tmp34 = closure_2;
                  obj8 = { guildId: null, onConnect: null };
                  tmp35 = guildId;
                  obj8.guildId = guildId;
                  tmp36 = closure_7;
                  obj8.onConnect = closure_7;
                  openAlertResult1 = obj4.openAlert(
                    closure_0(closure_2[18]).VOICE_PANEL_NSFW_KEY,
                    jsx(closure_1(closure_2[18]), obj8),
                  );
                } else {
                  tmp17 = closure_6;
                  if (closure_6) {
                    tmp18 = closure_0;
                    tmp19 = closure_2;
                    obj2 = closure_0(closure_2[15]);
                    tmp20 = closure_0;
                    tmp21 = closure_2;
                    tmp22 = jsx;
                    tmp23 = closure_1;
                    tmp24 = closure_2;
                    obj9 = { channelId: null, onConnect: null };
                    tmp25 = channelId;
                    obj9.channelId = channelId;
                    tmp26 = closure_7;
                    obj9.onConnect = closure_7;
                    openAlertResult2 = obj2.openAlert(
                      closure_0(closure_2[19]).VOICE_PANEL_SPOILER_KEY,
                      jsx(closure_1(closure_2[19]), obj9),
                    );
                  }
                }
              }
            } else {
              tmp7 = closure_0;
              tmp8 = closure_2;
              obj = closure_0(closure_2[15]);
              tmp9 = closure_0;
              tmp10 = closure_2;
              tmp11 = jsx;
              tmp12 = closure_1;
              tmp13 = closure_2;
              openAlertResult3 = obj.openAlert(
                closure_0(closure_2[16]).VOICE_PANEL_NO_JOIN_PERMS_KEY,
                jsx(closure_1(closure_2[16]), {}),
              );
            }
            return;
          }
        }
      }
      cResult[3] = stateFromStores;
      cResult[4] = isAtMaxCapacity;
      cResult[5] = isAtMaxCapacity;
      tmp11 = tmp12;
    }
  : (props) => {
      let channelId;
      let guildId;
      let canConnect;
      let stateFromStores;
      c6 = undefined;
      closure_7 = undefined;
      closure_8 = undefined;
      onConnect = undefined;
      const tmp = c6();
      _require = tmp;
      const context = canConnect.useContext(channelId(guildId[7]));
      channelId = context.channelId;
      guildId = context.guildId;
      const tmp5 = channelId(guildId[8])(channelId);
      canConnect = tmp5.canConnect;
      let isAtMaxCapacity = tmp5.isAtMaxCapacity;
      const items = [stateFromStores];
      stateFromStores = require("initialize").useStateFromStores(items, () => ChannelStore.getChannel(channelId));
      if (isAtMaxCapacity) {
        let isGuildStageVoiceResult;
        if (stateFromStores != null) {
          isGuildStageVoiceResult = stateFromStores.isGuildStageVoice();
        }
        isAtMaxCapacity = !isGuildStageVoiceResult;
      }
      const intl = tmp6(tmp3[10]).intl;
      let isGuildStageVoiceResult1;
      if (stateFromStores != null) {
        isGuildStageVoiceResult1 = stateFromStores.isGuildStageVoice();
      }
      const t = tmp6(tmp3[10]).t;
      const stringResult = intl.string(isGuildStageVoiceResult1 ? t["7vb2cc"] : t["96ANUN"]);
      c6 = stringResult;
      let obj2 = require("initialize");
      const tmp2 = channelId;
      const tmp11 =
        require("AgeGateUtils").useIsChannelContentGated(stateFromStores) && null != guildId && null != channelId;
      closure_7 = tmp11;
      const tmp6Result = require("AgeGateUtils");
      const tmp12 =
        require("SpoilerChannelUtils").useIsChannelSpoilerGated(stateFromStores) &&
        null != guildId &&
        null != channelId;
      closure_8 = tmp12;
      const items1 = [stateFromStores, channelId];
      onConnect = obj.useCallback(() => {
        let isGuildStageVoiceResult;
        if (stateFromStores != null) {
          isGuildStageVoiceResult = stateFromStores.isGuildStageVoice();
        }
        if (isGuildStageVoiceResult) {
          StageChannelModalActionCreators.connectAndOpen(stateFromStores);
        } else {
          const voiceChannel = SelectedChannelActionCreatorsDefault.selectVoiceChannel(channelId);
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
            const obj3 = { channelId };
            useAlertStore.openAlert(
              VoicePanelMaxCapacityAlert.VOICE_PANEL_MAX_CAPACITY_KEY,
              jsx(VoicePanelMaxCapacityAlertDefault, { channelId }),
            );
          } else if (closure_7) {
            const obj5 = { guildId, onConnect };
            useAlertStore.openAlert(
              VoicePanelNsfwAlert.VOICE_PANEL_NSFW_KEY,
              jsx(VoicePanelNsfwAlertDefault, { guildId, onConnect }),
            );
          } else if (closure_8) {
            const obj7 = { channelId, onConnect };
            useAlertStore.openAlert(
              VoicePanelSpoilerAlert.VOICE_PANEL_SPOILER_KEY,
              jsx(VoicePanelSpoilerAlertDefault, { channelId, onConnect }),
            );
          }
        } else {
          useAlertStore.openAlert(
            VoicePanelNoJoinPermissionsAlert.VOICE_PANEL_NO_JOIN_PERMS_KEY,
            jsx(VoicePanelNoJoinPermissionsAlertDefault, {}),
          );
        }
      }, items2);
      const element = {
        onPress: callback1,
        props: props.props,
        accessibilityLabel: stringResult,
        style: tmp.connectButton,
        children: null,
      };
      const items3 = [stringResult, tmp.connectText];
      const tmp6Result2 = require("SpoilerChannelUtils");
      element.children = canConnect.useMemo(
        () =>
          jsx(Text_Text.Text, {
            variant: "text-sm/semibold",
            color: "text-overlay-light",
            style: connectText.connectText,
            children,
          }),
        items3,
      );
      return isAtMaxCapacity(tmp2(guildId[21]), element);
    };
