// discord_app/modules/instant_invite/native/components/InstantInviteActionSheet.tsx
import c from "../../../../../_runtime/00576_c.js";
import nativeDefault from "../../../../../discord_common/js/packages/tokens/native.tsx";
import preloaded_user_settings from "../../../../../discord_common/js/packages/protos/discord_protos/discord_users/v1/preloaded_user_settings.tsx";
import ActionSheetActionCreatorsDefault from "../../../action_sheet/native/ActionSheetActionCreators.tsx";
import InviteCodeUtils from "../../InviteCodeUtils.tsx";
import showUserProfileActionSheetDefault from "../../../user_profile/native/showUserProfileActionSheet.tsx";
import instant_invite_InstantInviteUtils from "../InstantInviteUtils.tsx";
import UserPlaceholderRowDefault from "../../../main_tabs_v2/native/shared_components/user_list/UserPlaceholderRow.tsx";
import HubProgressActionCreators from "../../../hub/HubProgressActionCreators.tsx";
import _slicedToArray from "../../../../../_runtime/metro/00032__.js";
import noop from "../../../../../_runtime/metro/00019__.js";
import StageInstanceStore from "../../../stage_channels/StageInstanceStore.tsx";
import CreateInviteModalStore from "../../../../stores/CreateInviteModalStore.tsx";
import GuildStore from "../../../../stores/GuildStore.tsx";
import PermissionStore from "../../../../stores/PermissionStore.tsx";

require = fn;
get_ActivityIndicator = fn(17);
({ View: hasOwnProperty, ScrollView: metroRequire } = get_ActivityIndicator);
const InviteTargetTypes = fn(7423).InviteTargetTypes;
const Permissions = fn(1085).Permissions;
const jsxProd = fn(21);
({ jsx: map1, Fragment: closure_14, jsxs: closure_15 } = jsxProd);
const createStyles = fn(5092);
let obj2 = {
  placeholderHeader: null,
  placeholderLabel: null,
  errorEmptyState: null,
  searchAndShareContainer: null,
  inviteAgeText: null,
  shareApps: null,
};
let size = {
  height: 16,
  width: "80%",
  margin: 16,
  marginBottom: 8,
  borderRadius: nativeDefault.radii.sm,
  backgroundColor: nativeDefault.colors.BACKGROUND_MOD_MUTED,
};
obj2.placeholderHeader = size;
const size1 = {
  height: 16,
  width: "40%",
  margin: 16,
  borderRadius: nativeDefault.radii.sm,
  backgroundColor: nativeDefault.colors.BACKGROUND_MOD_MUTED,
};
obj2.placeholderLabel = size1;
obj2.errorEmptyState = { backgroundColor: "transparent" };
obj2.searchAndShareContainer = {
  borderTopWidth: 1,
  borderColor: nativeDefault.colors.BORDER_SUBTLE,
  marginTop: nativeDefault.space.PX_8,
  paddingVertical: nativeDefault.space.PX_8,
  paddingHorizontal: nativeDefault.space.PX_12,
  flexDirection: "column",
  gap: nativeDefault.space.PX_12,
};
let obj3 = {
  borderTopWidth: 1,
  borderColor: nativeDefault.colors.BORDER_SUBTLE,
  marginTop: nativeDefault.space.PX_8,
  paddingVertical: nativeDefault.space.PX_8,
  paddingHorizontal: nativeDefault.space.PX_12,
  flexDirection: "column",
  gap: nativeDefault.space.PX_12,
};
obj2.inviteAgeText = { paddingBottom: nativeDefault.space.PX_8, paddingHorizontal: nativeDefault.space.PX_4 };
obj2.shareApps = { paddingVertical: 0 };
let closure_16 = createStyles.createStyles(obj2);
let ReactCompilerGating = fn(558);
let closure_17 = ReactCompilerGating.isReactCompilerEnabled()
  ? function Loading() {
      const cResult = c.c(8);
      const tmp2 = closure_16();
      if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
        const items = [];
        let num4 = 0;
        do {
          let obj2 = { row: num4 };
          let arr = items.push(map1(UserPlaceholderRowDefault, obj2, num4));
          num4 = num4 + 1;
        } while (num4 < 10);
        cResult[0] = items;
        let first = items;
      } else {
        first = cResult[0];
      }
      if (cResult[1] !== tmp2.placeholderHeader) {
        const obj3 = { style: tmp2.placeholderHeader };
        const tmp11 = map1(hasOwnProperty, obj3);
        cResult[1] = tmp2.placeholderHeader;
        cResult[2] = tmp11;
        let tmp8 = tmp11;
      } else {
        tmp8 = cResult[2];
      }
      if (cResult[3] !== tmp2.placeholderLabel) {
        const obj4 = { style: tmp2.placeholderLabel };
        const tmp15 = map1(hasOwnProperty, obj4);
        cResult[3] = tmp2.placeholderLabel;
        cResult[4] = tmp15;
        let tmp12 = tmp15;
      } else {
        tmp12 = cResult[4];
      }
      if (cResult[5] === tmp8) {
        if (cResult[6] === tmp12) {
          let tmp16 = cResult[7];
        }
        return tmp16;
      }
      const obj5 = { children: null };
      const items1 = [tmp8, tmp12, first];
      obj5.children = items1;
      const tmp17 = value2(closure_1_14, obj5);
      cResult[5] = tmp8;
      cResult[6] = tmp12;
      cResult[7] = tmp17;
      tmp16 = tmp17;
    }
  : function Loading() {
      const tmp = closure_16();
      const items = [];
      let num = 0;
      do {
        let obj = { row: num };
        let arr = items.push(map1(UserPlaceholderRowDefault, obj, num));
        num = num + 1;
      } while (num < 10);
      const obj2 = { children: null };
      const items1 = [
        map1(hasOwnProperty, { style: tmp.placeholderHeader }),
        map1(hasOwnProperty, { style: tmp.placeholderLabel }),
        items,
      ];
      obj2.children = items1;
      return value2(closure_1_14, obj2);
    };
ReactCompilerGating = fn(558);
let obj4 = { paddingBottom: nativeDefault.space.PX_8, paddingHorizontal: nativeDefault.space.PX_4 };
size = fn(2);
let result = size.fileFinishedImporting("modules/instant_invite/native/components/InstantInviteActionSheet.tsx");

export default ReactCompilerGating.isReactCompilerEnabled()
  ? function InstantInviteActionSheet(channel) {
      const cResult = channel(vanityURLCode[13]).c(66);
      channel = channel.channel;
      const source = channel.source;
      vanityURLCode = channel.vanityURLCode;
      const guildScheduledEventId = channel.guildScheduledEventId;
      ({ targetApplicationId, code } = channel);
      closure_16();
      const bottom = source(vanityURLCode[15])().bottom;
      let obj = channel(vanityURLCode[13]);
      const analyticsLocations = source(vanityURLCode[16])(
        source(vanityURLCode[17]).INSTANT_INVITE_MODAL,
      ).analyticsLocations;
      if (cResult[0] !== targetApplicationId) {
        if (null != targetApplicationId) {
          const items = [targetApplicationId];
          let items1 = items;
        } else {
          items1 = [];
        }
        cResult[0] = targetApplicationId;
        cResult[1] = items1;
      } else {
        const first = guildScheduledEventId(tmp5(tmp2[18])(cResult[1]), 1)[0];
        const _Symbol = Symbol;
        if (cResult[2] === Symbol.for("react.memo_cache_sentinel")) {
          const items2 = [PermissionStore, CreateInviteModalStore, StageInstanceStore];
          cResult[2] = items2;
          let tmp11 = items2;
        } else {
          tmp11 = cResult[2];
        }
        if (cResult[3] === channel) {
          if (cResult[4] === code) {
            if (cResult[5] === guildScheduledEventId) {
              if (cResult[6] === vanityURLCode) {
                let tmp15 = cResult[7];
              }
              const stateFromStores = tmp(tmp2[20]).useStateFromStores(tmp11, tmp15);
              const _Symbol2 = Symbol;
              if (cResult[8] === Symbol.for("react.memo_cache_sentinel")) {
                const items3 = [CreateInviteModalStore];
                const fn = function x() {
                  return error.getError();
                };
                cResult[8] = items3;
                cResult[9] = fn;
                let tmp18 = fn;
                let tmp17 = items3;
              } else {
                tmp17 = cResult[8];
                tmp18 = cResult[9];
              }
              const tmpResult = tmp(tmp2[20]);
              const stateFromStores1 = tmp(tmp2[20]).useStateFromStores(tmp17, tmp18);
              if (cResult[10] !== stateFromStores) {
                let tmp23 = null;
                if (null != stateFromStores) {
                  tmp23 = tmp5(tmp2[21])(stateFromStores);
                }
                let str2 = "";
                if (null != tmp23) {
                  str2 = tmp(tmp2[22]).getShareMessage(tmp23);
                  const tmpResult4 = tmp(tmp2[22]);
                }
                cResult[10] = stateFromStores;
                cResult[11] = tmp23;
                cResult[12] = str2;
                class M {
                  constructor() {
                    if (null != code) {
                      return code;
                    } else {
                      tmp16 = channel;
                      if (channel.isGuildStageVoice()) {
                        tmp = closure_10;
                        tmp2 = Permissions;
                        if (!closure_10.can(Permissions.CREATE_INSTANT_INVITE, tmp16)) {
                          tmp3 = closure_7;
                          stageInstanceByChannel = closure_7.getStageInstanceByChannel(tmp16.id);
                          invite_code = undefined;
                          if (stageInstanceByChannel != null) {
                            invite_code = stageInstanceByChannel.invite_code;
                          }
                          if (null != invite_code) {
                            return stageInstanceByChannel.invite_code;
                          }
                        }
                      }
                      tmp6 = vanityURLCode;
                      if (null != vanityURLCode) {
                        inviteKeyFromExtraData = tmp6;
                        if (null != guildScheduledEventId) {
                          tmp14 = closure_0;
                          tmp15 = closure_2;
                          obj3 = closure_0(closure_2[19]);
                          obj1 = { baseCode: null, guildScheduledEventId: null };
                          obj1.baseCode = tmp6;
                          obj1.guildScheduledEventId = tmp12;
                          inviteKeyFromExtraData = obj3.generateInviteKeyFromExtraData(obj1);
                        }
                        return inviteKeyFromExtraData;
                      } else {
                        tmp7 = closure_8;
                        code = closure_8.getInvite();
                        if (null == code) {
                          return;
                        } else {
                          if (null != guildScheduledEventId) {
                            tmp9 = closure_0;
                            tmp10 = closure_2;
                            obj = closure_0(closure_2[19]);
                            obj5 = { baseCode: null, guildScheduledEventId: null };
                            code = code.code;
                            obj5.baseCode = code;
                            obj5.guildScheduledEventId = tmp8;
                            code2 = obj.generateInviteKeyFromExtraData(obj5);
                          } else {
                            code2 = code.code;
                          }
                          tmp11 = code2;
                        }
                      }
                    }
                    return;
                  }
                }
              }
              class M {
                constructor() {
                  if (null != code) {
                    return code;
                  } else {
                    tmp16 = channel;
                    if (channel.isGuildStageVoice()) {
                      tmp = closure_10;
                      tmp2 = Permissions;
                      if (!closure_10.can(Permissions.CREATE_INSTANT_INVITE, tmp16)) {
                        tmp3 = closure_7;
                        stageInstanceByChannel = closure_7.getStageInstanceByChannel(tmp16.id);
                        invite_code = undefined;
                        if (stageInstanceByChannel != null) {
                          invite_code = stageInstanceByChannel.invite_code;
                        }
                        if (null != invite_code) {
                          return stageInstanceByChannel.invite_code;
                        }
                      }
                    }
                    tmp6 = vanityURLCode;
                    if (null != vanityURLCode) {
                      inviteKeyFromExtraData = tmp6;
                      if (null != guildScheduledEventId) {
                        tmp14 = closure_0;
                        tmp15 = closure_2;
                        obj3 = closure_0(closure_2[19]);
                        obj1 = { baseCode: null, guildScheduledEventId: null };
                        obj1.baseCode = tmp6;
                        obj1.guildScheduledEventId = tmp12;
                        inviteKeyFromExtraData = obj3.generateInviteKeyFromExtraData(obj1);
                      }
                      return inviteKeyFromExtraData;
                    } else {
                      tmp7 = closure_8;
                      code = closure_8.getInvite();
                      if (null == code) {
                        return;
                      } else {
                        if (null != guildScheduledEventId) {
                          tmp9 = closure_0;
                          tmp10 = closure_2;
                          obj = closure_0(closure_2[19]);
                          obj5 = { baseCode: null, guildScheduledEventId: null };
                          code = code.code;
                          obj5.baseCode = code;
                          obj5.guildScheduledEventId = tmp8;
                          code2 = obj.generateInviteKeyFromExtraData(obj5);
                        } else {
                          code2 = code.code;
                        }
                        tmp11 = code2;
                      }
                    }
                  }
                  return;
                }
              }
              let EMBEDDED_APPLICATION = null;
              if (null != targetApplicationId) {
                EMBEDDED_APPLICATION = InviteTargetTypes.EMBEDDED_APPLICATION;
              }
              if (cResult[13] === analyticsLocations) {
                if (cResult[16] === channel) {
                  if (cResult[17] === stateFromStores) {
                    if (cResult[18] === tmp22) {
                      if (cResult[21] !== channel) {
                        class Q {
                          constructor() {
                            obj = closure_0(closure_2[25]);
                            guildId = channel.getGuildId();
                            result = obj.setHubProgressActionComplete(
                              guildId,
                              closure_0(closure_2[26]).HubProgressStep.INVITE_USER,
                            );
                            return;
                          }
                        }
                        class W {
                          constructor(arg0) {
                            if (null != closure_6) {
                              tmp2 = channel;
                              obj = { channel: null, code: null, message: null, location: null };
                              tmp3 = channel;
                              obj.channel = channel;
                              obj.code = tmp;
                              tmp4 = closure_7;
                              obj.message = closure_7;
                              tmp5 = source;
                              obj.location = source;
                              tmp6 = channel(obj);
                              tmp7 = closure_0;
                              tmp8 = closure_2;
                              obj2 = closure_0(closure_2[25]);
                              guildId = channel.getGuildId();
                              result = obj2.setHubProgressActionComplete(
                                guildId,
                                closure_0(closure_2[26]).HubProgressStep.INVITE_USER,
                              );
                            }
                            return;
                          }
                        }
                        class J {
                          constructor() {
                            obj = closure_0(closure_2[22]);
                            return obj.handleCopy(closure_6, channel, source);
                          }
                        }
                        cResult[22] = Q;
                      } else {
                        class Q {
                          constructor() {
                            obj = closure_0(closure_2[25]);
                            guildId = channel.getGuildId();
                            result = obj.setHubProgressActionComplete(
                              guildId,
                              closure_0(closure_2[26]).HubProgressStep.INVITE_USER,
                            );
                            return;
                          }
                        }
                      }
                      class W {
                        constructor(arg0) {
                          if (null != closure_6) {
                            tmp2 = channel;
                            obj = { channel: null, code: null, message: null, location: null };
                            tmp3 = channel;
                            obj.channel = channel;
                            obj.code = tmp;
                            tmp4 = closure_7;
                            obj.message = closure_7;
                            tmp5 = source;
                            obj.location = source;
                            tmp6 = channel(obj);
                            tmp7 = closure_0;
                            tmp8 = closure_2;
                            obj2 = closure_0(closure_2[25]);
                            guildId = channel.getGuildId();
                            result = obj2.setHubProgressActionComplete(
                              guildId,
                              closure_0(closure_2[26]).HubProgressStep.INVITE_USER,
                            );
                          }
                          return;
                        }
                      }
                      class J {
                        constructor() {
                          obj = closure_0(closure_2[22]);
                          return obj.handleCopy(closure_6, channel, source);
                        }
                      }
                      cResult[23] = channel;
                      cResult[24] = stateFromStores;
                      cResult[25] = source;
                      class M {
                        constructor() {
                          if (null != code) {
                            return code;
                          } else {
                            tmp16 = channel;
                            if (channel.isGuildStageVoice()) {
                              tmp = closure_10;
                              tmp2 = Permissions;
                              if (!closure_10.can(Permissions.CREATE_INSTANT_INVITE, tmp16)) {
                                tmp3 = closure_7;
                                stageInstanceByChannel = closure_7.getStageInstanceByChannel(tmp16.id);
                                invite_code = undefined;
                                if (stageInstanceByChannel != null) {
                                  invite_code = stageInstanceByChannel.invite_code;
                                }
                                if (null != invite_code) {
                                  return stageInstanceByChannel.invite_code;
                                }
                              }
                            }
                            tmp6 = vanityURLCode;
                            if (null != vanityURLCode) {
                              inviteKeyFromExtraData = tmp6;
                              if (null != guildScheduledEventId) {
                                tmp14 = closure_0;
                                tmp15 = closure_2;
                                obj3 = closure_0(closure_2[19]);
                                obj1 = { baseCode: null, guildScheduledEventId: null };
                                obj1.baseCode = tmp6;
                                obj1.guildScheduledEventId = tmp12;
                                inviteKeyFromExtraData = obj3.generateInviteKeyFromExtraData(obj1);
                              }
                              return inviteKeyFromExtraData;
                            } else {
                              tmp7 = closure_8;
                              code = closure_8.getInvite();
                              if (null == code) {
                                return;
                              } else {
                                if (null != guildScheduledEventId) {
                                  tmp9 = closure_0;
                                  tmp10 = closure_2;
                                  obj = closure_0(closure_2[19]);
                                  obj5 = { baseCode: null, guildScheduledEventId: null };
                                  code = code.code;
                                  obj5.baseCode = code;
                                  obj5.guildScheduledEventId = tmp8;
                                  code2 = obj.generateInviteKeyFromExtraData(obj5);
                                } else {
                                  code2 = code.code;
                                }
                                tmp11 = code2;
                              }
                            }
                          }
                          return;
                        }
                      }
                      cResult[26] = J;
                    }
                  }
                }
                class W {
                  constructor(arg0) {
                    if (null != closure_6) {
                      tmp2 = channel;
                      obj = { channel: null, code: null, message: null, location: null };
                      tmp3 = channel;
                      obj.channel = channel;
                      obj.code = tmp;
                      tmp4 = closure_7;
                      obj.message = closure_7;
                      tmp5 = source;
                      obj.location = source;
                      tmp6 = channel(obj);
                      tmp7 = closure_0;
                      tmp8 = closure_2;
                      obj2 = closure_0(closure_2[25]);
                      guildId = channel.getGuildId();
                      result = obj2.setHubProgressActionComplete(
                        guildId,
                        closure_0(closure_2[26]).HubProgressStep.INVITE_USER,
                      );
                    }
                    return;
                  }
                }
                cResult[16] = channel;
                cResult[17] = stateFromStores;
                cResult[18] = tmp22;
                class M {
                  constructor() {
                    if (null != code) {
                      return code;
                    } else {
                      tmp16 = channel;
                      if (channel.isGuildStageVoice()) {
                        tmp = closure_10;
                        tmp2 = Permissions;
                        if (!closure_10.can(Permissions.CREATE_INSTANT_INVITE, tmp16)) {
                          tmp3 = closure_7;
                          stageInstanceByChannel = closure_7.getStageInstanceByChannel(tmp16.id);
                          invite_code = undefined;
                          if (stageInstanceByChannel != null) {
                            invite_code = stageInstanceByChannel.invite_code;
                          }
                          if (null != invite_code) {
                            return stageInstanceByChannel.invite_code;
                          }
                        }
                      }
                      tmp6 = vanityURLCode;
                      if (null != vanityURLCode) {
                        inviteKeyFromExtraData = tmp6;
                        if (null != guildScheduledEventId) {
                          tmp14 = closure_0;
                          tmp15 = closure_2;
                          obj3 = closure_0(closure_2[19]);
                          obj1 = { baseCode: null, guildScheduledEventId: null };
                          obj1.baseCode = tmp6;
                          obj1.guildScheduledEventId = tmp12;
                          inviteKeyFromExtraData = obj3.generateInviteKeyFromExtraData(obj1);
                        }
                        return inviteKeyFromExtraData;
                      } else {
                        tmp7 = closure_8;
                        code = closure_8.getInvite();
                        if (null == code) {
                          return;
                        } else {
                          if (null != guildScheduledEventId) {
                            tmp9 = closure_0;
                            tmp10 = closure_2;
                            obj = closure_0(closure_2[19]);
                            obj5 = { baseCode: null, guildScheduledEventId: null };
                            code = code.code;
                            obj5.baseCode = code;
                            obj5.guildScheduledEventId = tmp8;
                            code2 = obj.generateInviteKeyFromExtraData(obj5);
                          } else {
                            code2 = code.code;
                          }
                          tmp11 = code2;
                        }
                      }
                    }
                    return;
                  }
                }
                cResult[20] = W;
              }
              const fn2 = function z(userId) {
                ActionSheetActionCreatorsDefault.hideActionSheet();
                showUserProfileActionSheetDefault({
                  userId,
                  channelId: channel.id,
                  sourceAnalyticsLocations: analyticsLocations,
                });
              };
              cResult[13] = analyticsLocations;
              cResult[14] = channel.id;
              cResult[15] = fn2;
              const tmpResult3 = tmp(tmp2[20]);
            }
          }
        }
        class M {
          constructor() {
            if (null != code) {
              return code;
            } else {
              tmp16 = channel;
              if (channel.isGuildStageVoice()) {
                tmp = closure_10;
                tmp2 = Permissions;
                if (!closure_10.can(Permissions.CREATE_INSTANT_INVITE, tmp16)) {
                  tmp3 = closure_7;
                  stageInstanceByChannel = closure_7.getStageInstanceByChannel(tmp16.id);
                  invite_code = undefined;
                  if (stageInstanceByChannel != null) {
                    invite_code = stageInstanceByChannel.invite_code;
                  }
                  if (null != invite_code) {
                    return stageInstanceByChannel.invite_code;
                  }
                }
              }
              tmp6 = vanityURLCode;
              if (null != vanityURLCode) {
                inviteKeyFromExtraData = tmp6;
                if (null != guildScheduledEventId) {
                  tmp14 = closure_0;
                  tmp15 = closure_2;
                  obj3 = closure_0(closure_2[19]);
                  obj1 = { baseCode: null, guildScheduledEventId: null };
                  obj1.baseCode = tmp6;
                  obj1.guildScheduledEventId = tmp12;
                  inviteKeyFromExtraData = obj3.generateInviteKeyFromExtraData(obj1);
                }
                return inviteKeyFromExtraData;
              } else {
                tmp7 = closure_8;
                code = closure_8.getInvite();
                if (null == code) {
                  return;
                } else {
                  if (null != guildScheduledEventId) {
                    tmp9 = closure_0;
                    tmp10 = closure_2;
                    obj = closure_0(closure_2[19]);
                    obj5 = { baseCode: null, guildScheduledEventId: null };
                    code = code.code;
                    obj5.baseCode = code;
                    obj5.guildScheduledEventId = tmp8;
                    code2 = obj.generateInviteKeyFromExtraData(obj5);
                  } else {
                    code2 = code.code;
                  }
                  tmp11 = code2;
                }
              }
            }
            return;
          }
        }
        cResult[3] = channel;
        cResult[4] = code;
        cResult[5] = guildScheduledEventId;
        cResult[6] = vanityURLCode;
        cResult[7] = M;
        tmp15 = M;
      }
      const tmp6 = source(vanityURLCode[16]);
    }
  : function InstantInviteActionSheet(channel) {
      channel = channel.channel;
      const source = channel.source;
      const vanityURLCode = channel.vanityURLCode;
      ({ guildScheduledEventId: _slicedToArray, targetApplicationId, code } = channel);
      let stateFromStores;
      let str;
      const tmp = closure_16();
      const analyticsLocations = source(vanityURLCode[16])(
        source(vanityURLCode[17]).INSTANT_INVITE_MODAL,
      ).analyticsLocations;
      const tmp4 = source(vanityURLCode[16]);
      if (null != targetApplicationId) {
        const items = [targetApplicationId];
        let items1 = items;
      } else {
        items1 = [];
      }
      let name = _slicedToArray(source(vanityURLCode[18])(items1), 1)[0];
      const tmp5 = source(vanityURLCode[18]);
      const items2 = [PermissionStore, CreateInviteModalStore, str];
      stateFromStores = channel(vanityURLCode[20]).useStateFromStores(items2, () => {
        if (null != code) {
          return code;
        } else {
          if (channel.isGuildStageVoice()) {
            if (!PermissionStore.can(Permissions.CREATE_INSTANT_INVITE, channel)) {
              const stageInstanceByChannel = StageInstanceStore.getStageInstanceByChannel(channel.id);
              let invite_code;
              if (stageInstanceByChannel != null) {
                invite_code = stageInstanceByChannel.invite_code;
              }
              if (null != invite_code) {
                return stageInstanceByChannel.invite_code;
              }
            }
          }
          if (null != vanityURLCode) {
            let inviteKeyFromExtraData = vanityURLCode;
            if (null != _slicedToArray) {
              const obj2 = { baseCode: vanityURLCode, guildScheduledEventId: tmp12 };
              inviteKeyFromExtraData = InviteCodeUtils.generateInviteKeyFromExtraData(obj2);
            }
            return inviteKeyFromExtraData;
          } else {
            code = CreateInviteModalStore.getInvite();
            if (null != code) {
              if (null != _slicedToArray) {
                const obj4 = { baseCode: null, guildScheduledEventId: null };
                code = code.code;
                obj4.baseCode = code;
                obj4.guildScheduledEventId = tmp8;
                let code2 = InviteCodeUtils.generateInviteKeyFromExtraData(obj4);
              } else {
                code2 = code.code;
              }
            }
          }
        }
      });
      let obj = channel(vanityURLCode[20]);
      const items3 = [CreateInviteModalStore];
      const stateFromStores1 = channel(vanityURLCode[20]).useStateFromStores(items3, () => error.getError());
      let tmp10 = null;
      if (null != stateFromStores) {
        tmp10 = tmp2(tmp3[21])(stateFromStores);
      }
      str = "";
      if (null != tmp10) {
        str = tmp7(tmp3[22]).getShareMessage(tmp10);
        const tmp7Result = tmp7(tmp3[22]);
      }
      let EMBEDDED_APPLICATION = null;
      if (null != targetApplicationId) {
        EMBEDDED_APPLICATION = InviteTargetTypes.EMBEDDED_APPLICATION;
      }
      const items4 = [channel, analyticsLocations];
      const items5 = [channel, stateFromStores, str, source];
      const callback = code.useCallback((userId) => {
        ActionSheetActionCreatorsDefault.hideActionSheet();
        showUserProfileActionSheetDefault({
          userId,
          channelId: channel.id,
          sourceAnalyticsLocations: analyticsLocations,
        });
      }, items4);
      const items6 = [channel];
      const callback1 = code.useCallback((fn) => {
        if (null != stateFromStores) {
          const obj = { channel, code: tmp, message: str, location: source };
          fn(obj);
          const guildId = channel.getGuildId();
          const result = HubProgressActionCreators.setHubProgressActionComplete(
            guildId,
            preloaded_user_settings.HubProgressStep.INVITE_USER,
          );
        }
      }, items5);
      const items7 = [stateFromStores, channel, source];
      const callback2 = code.useCallback(() => {
        const guildId = channel.getGuildId();
        const result = HubProgressActionCreators.setHubProgressActionComplete(
          guildId,
          preloaded_user_settings.HubProgressStep.INVITE_USER,
        );
      }, items6);
      const items8 = [stateFromStores, channel, str, source];
      const callback3 = code.useCallback(
        () => instant_invite_InstantInviteUtils.handleCopy(stateFromStores, channel, source),
        items7,
      );
      const items9 = [channel];
      const callback4 = code.useCallback(
        () => instant_invite_InstantInviteUtils.handleOpenShareSheet(stateFromStores, channel, str, source),
        items8,
      );
      const callback5 = code.useCallback(() => instant_invite_InstantInviteUtils.handlePressSettings(channel), items9);
      let obj2 = channel(vanityURLCode[20]);
      ({ rows, isFetchingRows } = source(vanityURLCode[27])(
        channel,
        source,
        EMBEDDED_APPLICATION,
        targetApplicationId,
      ));
      let tmp20 = null == stateFromStores;
      if (!tmp20) {
        tmp20 = 0 === rows.length && isFetchingRows;
        const tmp21 = 0 === rows.length && isFetchingRows;
      }
      let tmp22 = null != stateFromStores;
      if (tmp22) {
        tmp22 = 0 === rows.length;
      }
      if (tmp22) {
        tmp22 = !isFetchingRows;
      }
      const first = _slicedToArray(code.useState(tmp22), 1)[0];
      let obj3 = { value: analyticsLocations, children: null };
      let tmp25 = null != stateFromStores1;
      if (!tmp25) {
        tmp25 = !tmp20;
      }
      if (!tmp25) {
        tmp25 = !first;
      }
      const obj5 = { showGradient: tmp25, scrollable: true, startExpanded: true, header: null, children: null };
      if (null != targetApplicationId) {
        if (null != name) {
          const intl3 = tmp7(tmp3[28]).intl;
          const obj6 = { applicationName: null };
          name = name.name;
          obj6.applicationName = name;
          let formatToPlainStringResult = intl3.formatToPlainString(tmp7(tmp3[28]).t.ZdK3dW, obj6);
        } else {
          const intl2 = tmp7(tmp3[28]).intl;
          formatToPlainStringResult = intl2.string(tmp7(tmp3[28]).t["OzOM/q"]);
        }
      } else {
        const intl = tmp7(tmp3[28]).intl;
        const obj7 = { title: intl.string(tmp7(tmp3[28]).t["f1+QIK"]) };
        obj5.header = closure_13(tmp26, obj7);
        if (null != stateFromStores1) {
          const obj8 = { style: tmp.errorEmptyState, Illustration: tmp7(tmp3[31]).AppCrash, title: stateFromStores1 };
          let tmp29Result = closure_13(tmp7(tmp3[30]).EmptyState, obj8);
        } else if (tmp20) {
          tmp29Result = closure_13(closure_17, {});
        } else if (first) {
          const obj9 = { contentContainerStyle: null, children: null };
          const obj10 = { paddingBottom: source(vanityURLCode[15])().bottom + 16 };
          obj9.contentContainerStyle = obj10;
          const obj11 = { link: tmp10, onCopy: callback3, onShare: callback4, onPressSettings: callback5 };
          obj9.children = closure_13(tmp2(tmp3[32]), obj11);
          tmp29Result = closure_13(stateFromStores, obj9);
        } else {
          const obj12 = { contentContainerStyle: tmp.shareApps, onItemPressed: callback1 };
          const items10 = [closure_13(tmp2(tmp3[33]), obj12)];
          const obj13 = { style: tmp.searchAndShareContainer, children: null };
          const obj14 = {
            size: "md",
            round: true,
            onChange: tmp7(tmp3[35]).searchInviteSuggestions,
            placeholder: null,
          };
          if (null != targetApplicationId) {
            const intl5 = tmp7(tmp3[28]).intl;
            let stringResult = intl5.string(tmp7(tmp3[28]).t.iI1gMg);
          } else {
            const intl4 = tmp7(tmp3[28]).intl;
            guild = GuildStore.getGuild(channel.guild_id);
            let name1;
            if (guild != null) {
              name1 = guild.name;
            }
            const obj15 = { groupname: name1 };
            stringResult = intl4.formatToPlainString(tmp7(tmp3[28]).t["1UgGdm"], obj15);
          }
          obj14.placeholder = stringResult;
          const items11 = [closure_13(tmp7(tmp3[34]).SearchField, obj14)];
          let tmp24Result2 = null == vanityURLCode;
          if (tmp24Result2) {
            const obj16 = { style: tmp.inviteAgeText, channel, canEditInvite: null == code };
            tmp24Result2 = closure_13(tmp2(tmp3[36]), obj16);
          }
          const obj17 = { children: null };
          items11[1] = tmp24Result2;
          obj13.children = items11;
          items10[1] = closure_15(analyticsLocations, obj13);
          obj17.children = items10;
          const items12 = [closure_15(analyticsLocations, obj17)];
          const obj18 = { data: rows, code: stateFromStores, source: null, onPressAvatar: null, onInviteSent: null };
          const obj19 = { children: null };
          obj18.source = source;
          obj18.onPressAvatar = callback;
          obj18.onInviteSent = callback2;
          items12[1] = closure_13(tmp2(tmp3[37]), obj18);
          obj19.children = items12;
          tmp29Result = closure_15(closure_14, obj19);
          const tmp2Result = tmp2(tmp3[37]);
        }
        obj5.children = tmp29Result;
        obj3.children = closure_13(tmp7(tmp3[38]).BottomSheet, obj5);
        return closure_13(tmp7(tmp3[16]).AnalyticsLocationProvider, obj3);
      }
      const tmp19 = source(vanityURLCode[27])(channel, source, EMBEDDED_APPLICATION, targetApplicationId);
    };
