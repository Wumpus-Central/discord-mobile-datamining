// === Module 9502: InstantInviteActionSheet ===

// Module 9502 (InstantInviteActionSheet)
import react2 from "react" /* 576 */;
import nativeDefault from "native" /* 587 */;
import Constants from "Constants" /* 1085 */;
import preloaded_user_settings from "preloaded_user_settings" /* 1197 */;
import ActionSheetActionCreatorsDefault from "ActionSheetActionCreators" /* 4860 */;
import InviteCodeUtils from "InviteCodeUtils" /* 4878 */;
import Constants2 from "Constants" /* 7239 */;
import showUserProfileActionSheetDefault from "showUserProfileActionSheet" /* 7861 */;
import instant_invite_InstantInviteUtils from "instant_invite/InstantInviteUtils" /* 9494 */;
import UserPlaceholderRowDefault from "UserPlaceholderRow" /* 9503 */;
import HubProgressActionCreators from "HubProgressActionCreators" /* 9504 */;
import _slicedToArray from "_slicedToArray" /* 32 */;
import react from "react" /* 19 */;
import react_native from "react-native" /* 17 */;
import StageInstanceStore from "StageInstanceStore" /* 2056 */;
import CreateInviteModalStore from "CreateInviteModalStore" /* 9495 */;
import GuildStore from "GuildStore" /* 2074 */;
import PermissionStore from "PermissionStore" /* 4515 */;
import Fragment from "Fragment" /* 21 */;
import createStyles_mod from "createStyles" /* 4896 */;
import ReactCompilerGating_mod from "ReactCompilerGating" /* 558 */;
import size_mod from "module_2" /* 2 */;

let BottomSheet, channel, message, vanityURLCode;

let closure_14;
let closure_15;
let hasOwnProperty;
let map1;
let metroRequire;
let obj2;
let obj3;
let size;
let size1;
({ View: hasOwnProperty, ScrollView: metroRequire } = react_native);
const InviteTargetTypes = Constants2.InviteTargetTypes;
const Permissions = Constants.Permissions;
({ jsx: map1, Fragment: closure_14, jsxs: closure_15 } = Fragment);
let createStyles = createStyles_mod;
let obj = { placeholderHeader: size, placeholderLabel: size1, errorEmptyState: { backgroundColor: "transparent" }, searchAndShareContainer: obj2, inviteAgeText: obj3, shareApps: { paddingVertical: 0 } };
size = { height: 16, width: "80%", margin: 16, marginBottom: 8, borderRadius: nativeDefault.radii.sm, backgroundColor: nativeDefault.colors.BACKGROUND_MOD_MUTED };
createStyles = createStyles.createStyles;
size1 = { height: 16, width: "40%", margin: 16, borderRadius: nativeDefault.radii.sm, backgroundColor: nativeDefault.colors.BACKGROUND_MOD_MUTED };
obj2 = { borderTopWidth: 1, borderColor: nativeDefault.colors.BORDER_SUBTLE, marginTop: nativeDefault.space.PX_8, paddingVertical: nativeDefault.space.PX_8, paddingHorizontal: nativeDefault.space.PX_12, flexDirection: "column", gap: nativeDefault.space.PX_12 };
obj3 = { paddingBottom: nativeDefault.space.PX_8, paddingHorizontal: nativeDefault.space.PX_4 };
let closure_16 = createStyles(obj);
let ReactCompilerGating = ReactCompilerGating_mod;
let closure_17 = ReactCompilerGating.isReactCompilerEnabled() ? (() => {
  let first;
  let items1;
  let tmp12;
  let tmp8;
  const obj = react2;
  const cResult = obj.c(8);
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
    first = items;
  } else {
    first = cResult[0];
  }
  if (cResult[1] !== tmp2.placeholderHeader) {
    const obj3 = { style: tmp2.placeholderHeader };
    const tmp11 = map1(hasOwnProperty, obj3);
    cResult[1] = tmp2.placeholderHeader;
    cResult[2] = tmp11;
    tmp8 = tmp11;
  } else {
    tmp8 = cResult[2];
  }
  if (cResult[3] !== tmp2.placeholderLabel) {
    const obj4 = { style: tmp2.placeholderLabel };
    const tmp15 = map1(hasOwnProperty, obj4);
    cResult[3] = tmp2.placeholderLabel;
    cResult[4] = tmp15;
    tmp12 = tmp15;
  } else {
    tmp12 = cResult[4];
  }
  if (cResult[5] === tmp8) {
    let tmp16;
    if (cResult[6] === tmp12) {
      tmp16 = cResult[7];
    }
    return tmp16;
  }
  const obj5 = { children: items1 };
  items1 = [tmp8, tmp12, first];
  const tmp17 = closure_15(authStore2, obj5);
  cResult[5] = tmp8;
  cResult[6] = tmp12;
  cResult[7] = tmp17;
  tmp16 = tmp17;
}) : (() => {
  let items1;
  const tmp = closure_16();
  const items = [];
  let num = 0;
  do {
    let obj = { row: num };
    let arr = items.push(map1(UserPlaceholderRowDefault, obj, num));
    num = num + 1;
  } while (num < 10);
  const obj2 = { children: items1 };
  items1 = [, , ];
  const obj3 = { style: tmp.placeholderHeader };
  items1[0] = map1(hasOwnProperty, obj3);
  const obj4 = { style: tmp.placeholderLabel };
  items1[1] = map1(hasOwnProperty, obj4);
  items1[2] = items;
  return closure_15(authStore2, obj2);
});
ReactCompilerGating = ReactCompilerGating_mod;
let tmp5 = ReactCompilerGating.isReactCompilerEnabled() ? ((channel) => {
  let code;
  let error;
  let targetApplicationId;
  let tmp7;
  let tmp9;
  const tmp = channel;
  let obj = channel(vanityURLCode[13]);
  const cResult = obj.c(66);
  channel = channel.channel;
  const source = channel.source;
  vanityURLCode = channel.vanityURLCode;
  const guildScheduledEventId = channel.guildScheduledEventId;
  ({ targetApplicationId, code } = channel);
  closure_16();
  const bottom = source(vanityURLCode[15])().bottom;
  const tmp6 = source(vanityURLCode[16]);
  const analyticsLocations = tmp6(source(vanityURLCode[17]).INSTANT_INVITE_MODAL).analyticsLocations;
  if (cResult[0] !== targetApplicationId) {
    let items1;
    if (null != targetApplicationId) {
      const items = [targetApplicationId];
      items1 = items;
    } else {
      items1 = [];
    }
    cResult[0] = targetApplicationId;
    cResult[1] = items1;
    tmp7 = items1;
  } else {
    tmp7 = cResult[1];
  }
  const first = guildScheduledEventId(tmp5(tmp2[18])(tmp7), 1)[0];
  if (cResult[2] === Symbol.for("react.memo_cache_sentinel")) {
    const items2 = [PermissionStore, CreateInviteModalStore, message];
    cResult[2] = items2;
    tmp9 = items2;
  } else {
    tmp9 = cResult[2];
  }
  if (cResult[3] === channel) {
    if (cResult[4] === code) {
      if (cResult[5] === guildScheduledEventId) {
        let tmp13;
        let tmp16;
        let tmp15;
        let tmp20;
        if (cResult[6] === vanityURLCode) {
          tmp13 = cResult[7];
        }
        const tmpResult = tmp(vanityURLCode[20]);
        const stateFromStores = tmpResult.useStateFromStores(tmp9, tmp13);
        const _Symbol = Symbol;
        if (cResult[8] === Symbol.for("react.memo_cache_sentinel")) {
          const items3 = [CreateInviteModalStore];
          const fn = function x() {
            return error.getError();
          };
          cResult[8] = items3;
          cResult[9] = fn;
          tmp16 = fn;
          tmp15 = items3;
        } else {
          tmp15 = cResult[8];
          tmp16 = cResult[9];
        }
        const tmpResult3 = tmp(vanityURLCode[20]);
        const stateFromStores1 = tmpResult3.useStateFromStores(tmp15, tmp16);
        if (cResult[10] !== stateFromStores) {
          let tmp21 = null;
          if (null != stateFromStores) {
            tmp21 = tmp5(tmp2[21])(stateFromStores);
          }
          let str = "";
          if (null != tmp21) {
            const tmpResult4 = tmp(vanityURLCode[22]);
            str = tmpResult4.getShareMessage(tmp21);
          }
          cResult[10] = stateFromStores;
          cResult[11] = tmp21;
          cResult[12] = str;
          tmp20 = str;
        } else {
          tmp20 = cResult[12];
        }
        message = tmp20;
        let EMBEDDED_APPLICATION = null;
        if (null != targetApplicationId) {
          EMBEDDED_APPLICATION = InviteTargetTypes.EMBEDDED_APPLICATION;
        }
        if (cResult[13] === analyticsLocations) {
          if (cResult[16] === channel) {
            if (cResult[17] === stateFromStores) {
              if (cResult[18] === tmp20) {
                if (cResult[21] !== channel) {
                  class Q {
                    constructor() {
                      const setHubProgressActionComplete = HubProgressActionCreators.setHubProgressActionComplete;
                      HubProgressActionCreators;
                      const guildId = channel.getGuildId();
                      const result = setHubProgressActionComplete(guildId, preloaded_user_settings.HubProgressStep.INVITE_USER);
                    }
                  }
                  class W {
                    constructor(fn) {
                      if (null != stateFromStores) {
                        const obj = { channel, code: tmp, message, location: source };
                        fn(obj);
                        const setHubProgressActionComplete = HubProgressActionCreators.setHubProgressActionComplete;
                        HubProgressActionCreators;
                        const guildId = channel.getGuildId();
                        const result = setHubProgressActionComplete(guildId, preloaded_user_settings.HubProgressStep.INVITE_USER);
                      }
                    }
                  }
                  class J {
                    constructor() {
                      const obj = instant_invite_InstantInviteUtils;
                      return obj.handleCopy(stateFromStores, channel, source);
                    }
                  }
                  cResult[22] = Q;
                } else {
                  class Q {
                    constructor() {
                      const setHubProgressActionComplete = HubProgressActionCreators.setHubProgressActionComplete;
                      HubProgressActionCreators;
                      const guildId = channel.getGuildId();
                      const result = setHubProgressActionComplete(guildId, preloaded_user_settings.HubProgressStep.INVITE_USER);
                    }
                  }
                }
                class W {
                  constructor(fn) {
                    if (null != stateFromStores) {
                      const obj = { channel, code: tmp, message, location: source };
                      fn(obj);
                      const setHubProgressActionComplete = HubProgressActionCreators.setHubProgressActionComplete;
                      HubProgressActionCreators;
                      const guildId = channel.getGuildId();
                      const result = setHubProgressActionComplete(guildId, preloaded_user_settings.HubProgressStep.INVITE_USER);
                    }
                  }
                }
                class J {
                  constructor() {
                    const obj = instant_invite_InstantInviteUtils;
                    return obj.handleCopy(stateFromStores, channel, source);
                  }
                }
                cResult[23] = channel;
                cResult[24] = stateFromStores;
                cResult[25] = source;
                cResult[26] = J;
              }
            }
          }
          class W {
            constructor(fn) {
              if (null != stateFromStores) {
                const obj = { channel, code: tmp, message, location: source };
                fn(obj);
                const setHubProgressActionComplete = HubProgressActionCreators.setHubProgressActionComplete;
                HubProgressActionCreators;
                const guildId = channel.getGuildId();
                const result = setHubProgressActionComplete(guildId, preloaded_user_settings.HubProgressStep.INVITE_USER);
              }
            }
          }
          cResult[16] = channel;
          cResult[17] = stateFromStores;
          cResult[18] = tmp20;
          cResult[19] = source;
          cResult[20] = W;
        }
        const fn2 = function z(userId) {
          const obj = ActionSheetActionCreatorsDefault;
          obj.hideActionSheet();
          const obj2 = { userId, channelId: channel.id, sourceAnalyticsLocations: analyticsLocations };
          showUserProfileActionSheetDefault(obj2);
        };
        cResult[13] = analyticsLocations;
        cResult[14] = channel.id;
        cResult[15] = fn2;
      }
    }
  }
  class M {
    constructor() {
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
          if (null != guildScheduledEventId) {
            const obj2 = { baseCode: vanityURLCode, guildScheduledEventId: tmp13 };
            const obj3 = InviteCodeUtils;
            inviteKeyFromExtraData = obj3.generateInviteKeyFromExtraData(obj2);
          }
          return inviteKeyFromExtraData;
        } else {
          const invite = CreateInviteModalStore.getInvite();
          let tmp9;
          if (null != invite) {
            if (null != guildScheduledEventId) {
              const obj4 = { baseCode: invite.code, guildScheduledEventId: tmp10 };
              const obj = InviteCodeUtils;
              code = obj.generateInviteKeyFromExtraData(obj4);
            } else {
              code = invite.code;
            }
            tmp9 = code;
          }
          return tmp9;
        }
      }
    }
  }
  cResult[3] = channel;
  cResult[4] = code;
  cResult[5] = guildScheduledEventId;
  cResult[6] = vanityURLCode;
  cResult[7] = M;
  tmp13 = M;
}) : ((channel) => {
  let BottomSheetTitleHeader;
  let code;
  let error;
  let isFetchingRows;
  let items1;
  let items11;
  let obj4;
  let obj8;
  let obj9;
  let rows;
  let stringResult;
  let stringResult1;
  let targetApplicationId;
  let tmp30Result;
  channel = channel.channel;
  const source = channel.source;
  vanityURLCode = channel.vanityURLCode;
  ({ guildScheduledEventId: _slicedToArray, targetApplicationId, code } = channel);
  let stateFromStores;
  let str;
  const tmp = closure_16();
  const bottom = source(vanityURLCode[15])().bottom;
  const tmp4 = source(vanityURLCode[16]);
  const analyticsLocations = tmp4(source(vanityURLCode[17]).INSTANT_INVITE_MODAL).analyticsLocations;
  const tmp5 = source(vanityURLCode[18]);
  if (null != targetApplicationId) {
    const items = [targetApplicationId];
    items1 = items;
  } else {
    items1 = [];
  }
  const first = _slicedToArray(tmp5(items1), 1)[0];
  let obj = channel(tmp3[20]);
  const items2 = [PermissionStore, CreateInviteModalStore, str];
  stateFromStores = obj.useStateFromStores(items2, () => {
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
          const obj2 = { baseCode: vanityURLCode, guildScheduledEventId: tmp13 };
          const obj3 = InviteCodeUtils;
          inviteKeyFromExtraData = obj3.generateInviteKeyFromExtraData(obj2);
        }
        return inviteKeyFromExtraData;
      } else {
        const invite = CreateInviteModalStore.getInvite();
        let tmp9;
        if (null != invite) {
          if (null != _slicedToArray) {
            const obj4 = { baseCode: invite.code, guildScheduledEventId: tmp10 };
            const obj = InviteCodeUtils;
            code = obj.generateInviteKeyFromExtraData(obj4);
          } else {
            code = invite.code;
          }
          tmp9 = code;
        }
        return tmp9;
      }
    }
  });
  let obj2 = channel(tmp3[20]);
  const items3 = [CreateInviteModalStore];
  const stateFromStores1 = obj2.useStateFromStores(items3, () => error.getError());
  let tmp11 = null;
  if (null != stateFromStores) {
    tmp11 = tmp2(tmp3[21])(stateFromStores);
  }
  str = "";
  if (null != tmp11) {
    const tmp8Result = channel(vanityURLCode[22]);
    str = tmp8Result.getShareMessage(tmp11);
  }
  let EMBEDDED_APPLICATION = null;
  if (null != targetApplicationId) {
    EMBEDDED_APPLICATION = InviteTargetTypes.EMBEDDED_APPLICATION;
  }
  const items4 = [channel, analyticsLocations];
  const items5 = [channel, stateFromStores, str, source];
  const callback = code.useCallback((userId) => {
    const obj = ActionSheetActionCreatorsDefault;
    obj.hideActionSheet();
    const obj2 = { userId, channelId: channel.id, sourceAnalyticsLocations: analyticsLocations };
    showUserProfileActionSheetDefault(obj2);
  }, items4);
  const items6 = [channel];
  const callback1 = code.useCallback((fn) => {
    if (null != stateFromStores) {
      const obj = { channel, code: tmp, message: str, location: source };
      fn(obj);
      const setHubProgressActionComplete = HubProgressActionCreators.setHubProgressActionComplete;
      HubProgressActionCreators;
      const guildId = channel.getGuildId();
      const result = setHubProgressActionComplete(guildId, preloaded_user_settings.HubProgressStep.INVITE_USER);
    }
  }, items5);
  const items7 = [stateFromStores, channel, source];
  const callback2 = code.useCallback(() => {
    const setHubProgressActionComplete = HubProgressActionCreators.setHubProgressActionComplete;
    HubProgressActionCreators;
    const guildId = channel.getGuildId();
    const result = setHubProgressActionComplete(guildId, preloaded_user_settings.HubProgressStep.INVITE_USER);
  }, items6);
  const items8 = [stateFromStores, channel, str, source];
  const callback3 = code.useCallback(() => {
    const obj = instant_invite_InstantInviteUtils;
    return obj.handleCopy(stateFromStores, channel, source);
  }, items7);
  const items9 = [channel];
  const callback4 = code.useCallback(() => {
    const obj = instant_invite_InstantInviteUtils;
    return obj.handleOpenShareSheet(stateFromStores, channel, str, source);
  }, items8);
  const callback5 = code.useCallback(() => {
    const obj = instant_invite_InstantInviteUtils;
    return obj.handlePressSettings(channel);
  }, items9);
  ({ rows, isFetchingRows } = source(vanityURLCode[27])(channel, source, EMBEDDED_APPLICATION, targetApplicationId));
  let tmp22 = null == stateFromStores;
  source(vanityURLCode[27])(channel, source, EMBEDDED_APPLICATION, targetApplicationId);
  if (!tmp22) {
    tmp22 = 0 === rows.length && isFetchingRows;
  }
  let tmp24 = null != stateFromStores;
  const useState = code.useState;
  if (tmp24) {
    tmp24 = 0 === rows.length;
  }
  if (tmp24) {
    tmp24 = !isFetchingRows;
  }
  const first1 = _slicedToArray(useState(tmp24), 1)[0];
  let obj3 = { value: analyticsLocations, children: closure_13(BottomSheet, obj4) };
  const AnalyticsLocationProvider = tmp8(tmp3[16]).AnalyticsLocationProvider;
  let tmp27 = null != stateFromStores1;
  BottomSheet = tmp8(tmp3[38]).BottomSheet;
  if (!tmp27) {
    tmp27 = !tmp22;
  }
  if (!tmp27) {
    tmp27 = !first1;
  }
  obj4 = { showGradient: tmp27, scrollable: true, startExpanded: true, header: closure_13(BottomSheetTitleHeader, { title: stringResult }), children: tmp30Result };
  BottomSheetTitleHeader = tmp8(tmp3[29]).BottomSheetTitleHeader;
  if (null != targetApplicationId) {
    let formatToPlainStringResult;
    if (null != first) {
      const intl3 = tmp8(tmp3[28]).intl;
      const obj5 = { applicationName: first.name };
      formatToPlainStringResult = intl3.formatToPlainString(tmp8(tmp3[28]).t.ZdK3dW, obj5);
    } else {
      const intl2 = tmp8(tmp3[28]).intl;
      formatToPlainStringResult = intl2.string(tmp8(tmp3[28]).t["OzOM/q"]);
    }
    stringResult = formatToPlainStringResult;
  } else {
    const intl = tmp8(tmp3[28]).intl;
    stringResult = intl.string(tmp8(tmp3[28]).t["f1+QIK"]);
  }
  if (null != stateFromStores1) {
    const obj6 = { style: tmp.errorEmptyState, Illustration: channel(vanityURLCode[31]).AppCrash, title: stateFromStores1 };
    const EmptyState = tmp8(tmp3[30]).EmptyState;
    tmp30Result = closure_13(EmptyState, obj6);
  } else if (tmp22) {
    tmp30Result = closure_13(closure_17, {});
  } else if (first1) {
    const obj7 = { contentContainerStyle: obj8, children: closure_13(source(vanityURLCode[32]), obj9) };
    obj8 = { paddingBottom: bottom + 16 };
    obj9 = { link: tmp11, onCopy: callback3, onShare: callback4, onPressSettings: callback5 };
    tmp30Result = closure_13(stateFromStores, obj7);
  } else {
    const obj10 = { contentContainerStyle: tmp.shareApps, onItemPressed: callback1 };
    const items10 = [closure_13(tmp2(vanityURLCode[33]), obj10), ];
    const obj11 = { style: tmp.searchAndShareContainer, children: items11 };
    const obj12 = { size: "md", round: true, onChange: channel(vanityURLCode[35]).searchInviteSuggestions, placeholder: stringResult1 };
    const SearchField = tmp8(tmp3[34]).SearchField;
    if (null != targetApplicationId) {
      const intl5 = tmp8(tmp3[28]).intl;
      stringResult1 = intl5.string(tmp8(tmp3[28]).t.iI1gMg);
    } else {
      const intl4 = tmp8(tmp3[28]).intl;
      const formatToPlainString = intl4.formatToPlainString;
      const v1UgGdm = tmp8(tmp3[28]).t["1UgGdm"];
      const guild = GuildStore.getGuild(channel.guild_id);
      let name;
      if (guild != null) {
        name = guild.name;
      }
      const obj13 = { groupname: name };
      stringResult1 = formatToPlainString(v1UgGdm, obj13);
    }
    items11 = [closure_13(SearchField, obj12), ];
    let tmp26Result2 = null == vanityURLCode;
    if (tmp26Result2) {
      const obj14 = { style: tmp.inviteAgeText, channel, canEditInvite: null == code };
      tmp26Result2 = closure_13(tmp2(tmp3[36]), obj14);
    }
    const obj15 = { children: items10 };
    items11[1] = tmp26Result2;
    items10[1] = closure_15(analyticsLocations, obj11);
    const items12 = [closure_15(analyticsLocations, obj15), ];
    const obj16 = { data: rows, code: stateFromStores, source, onPressAvatar: callback, onInviteSent: callback2 };
    const obj17 = { children: items12 };
    const tmp2Result = source(vanityURLCode[37]);
    items12[1] = closure_13(tmp2Result, obj16);
    tmp30Result = closure_15(closure_14, obj17);
  }
  return closure_13(AnalyticsLocationProvider, obj3);
});
size = size_mod;
let result = size.fileFinishedImporting("modules/instant_invite/native/components/InstantInviteActionSheet.tsx");

export default tmp5;