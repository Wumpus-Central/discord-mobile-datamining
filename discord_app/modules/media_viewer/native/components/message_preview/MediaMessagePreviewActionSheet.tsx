// === Module 12938: MediaMessagePreviewActionSheet ===

// Module 12938 (MediaMessagePreviewActionSheet)
import router_utils from "router_utils" /* 1112 */;
import ToastUtils from "ToastUtils" /* 4765 */;
import ClipboardUtils from "ClipboardUtils" /* 6872 */;
import ReportModals from "ReportModals" /* 7695 */;
import noop from "module_19" /* 19 */;

require = fn;
const jsxProd = fn(21);
({ jsx: closure_4, jsxs: hasOwnProperty } = jsxProd);
const ReactCompilerGating = fn(558);
const size = fn(2);
let result = size.fileFinishedImporting("modules/media_viewer/native/components/message_preview/MediaMessagePreviewActionSheet.tsx");

export default noop.memo(ReactCompilerGating.isReactCompilerEnabled() ? (function MediaMessagePreviewActionSheet(channel) {
  const cResult = channel(closeMediaModal[3]).c(27);
  channel = channel.channel;
  const message = channel.message;
  ({ user, closeMediaModal } = channel);
  const DeveloperMode = channel(closeMediaModal[4]).DeveloperMode;
  const setting = DeveloperMode.useSetting();
  if (cResult[0] === message) {
    if (cResult[1] === user) {
      let tmp5 = cResult[2];
    }
    const _Symbol = Symbol;
    if (cResult[3] === Symbol.for("react.memo_cache_sentinel")) {
      const fn = function w() {
        message(closeMediaModal[6]).hideActionSheet();
      };
      cResult[3] = fn;
      let tmp9 = fn;
    } else {
      tmp9 = cResult[3];
    }
    noop = tmp9;
    if (cResult[4] === channel.guild_id) {
      if (cResult[5] === channel.id) {
        if (cResult[6] === closeMediaModal) {
          if (cResult[7] === message.id) {
            let tmp10 = cResult[8];
          }
          if (cResult[9] !== message.id) {
            class A {
              constructor() {
                tmp = closure_3();
                obj = closure_0(closure_2[8]);
                copyResult = obj.copy(message.id);
                obj2 = closure_0(closure_2[9]);
                presentIdCopiedResult = obj2.presentIdCopied();
                return;
              }
            }
            cResult[9] = message.id;
            cResult[10] = A;
          } else {
            class A {
              constructor() {
                tmp = closure_3();
                obj = closure_0(closure_2[8]);
                copyResult = obj.copy(message.id);
                obj2 = closure_0(closure_2[9]);
                presentIdCopiedResult = obj2.presentIdCopied();
                return;
              }
            }
          }
          if (cResult[11] !== message) {
            class M {
              constructor() {
                tmp = closure_3();
                obj = closure_0(closure_2[10]);
                result = obj.showReportModalForMessage(message, "mobile_media_message_preview_action_sheet");
                return;
              }
            }
            cResult[11] = message;
            cResult[12] = M;
          } else {
            class M {
              constructor() {
                tmp = closure_3();
                obj = closure_0(closure_2[10]);
                result = obj.showReportModalForMessage(message, "mobile_media_message_preview_action_sheet");
                return;
              }
            }
          }
          const _Symbol2 = Symbol;
          if (cResult[13] === Symbol.for("react.memo_cache_sentinel")) {
            class M {
              constructor() {
                tmp = closure_3();
                obj = closure_0(closure_2[10]);
                result = obj.showReportModalForMessage(message, "mobile_media_message_preview_action_sheet");
                return;
              }
            }
            const obj4 = { IconComponent: tmp(closeMediaModal[12]).ChatArrowRightIcon };
            const tmp15 = closure_4(tmp(closeMediaModal[11]).ActionSheetRow.Icon, obj4);
            const intl = tmp(closeMediaModal[13]).intl;
            const stringResult = intl.string(tmp(closeMediaModal[13]).t["+TSRGD"]);
            class R {
              constructor() {
                tmp = closure_3();
                tmp2 = closeMediaModal();
                obj = closure_0(closure_2[7]);
                transitionToGuildResult = obj.transitionToGuild(channel.guild_id, channel.id, message.id);
                return;
              }
            }
            cResult[13] = tmp15;
            cResult[14] = stringResult;
            let tmp14 = stringResult;
            const tmp13 = tmp15;
          } else {
            class M {
              constructor() {
                tmp = closure_3();
                obj = closure_0(closure_2[10]);
                result = obj.showReportModalForMessage(message, "mobile_media_message_preview_action_sheet");
                return;
              }
            }
            tmp14 = cResult[14];
          }
          if (cResult[15] !== tmp10) {
            class M {
              constructor() {
                tmp = closure_3();
                obj = closure_0(closure_2[10]);
                result = obj.showReportModalForMessage(message, "mobile_media_message_preview_action_sheet");
                return;
              }
            }
            const obj5 = { icon: tmp13, label: tmp14, onPress: tmp10 };
            const tmp18 = closure_4(tmp(closeMediaModal[11]).ActionSheetRow, obj5);
            cResult[15] = tmp10;
            class R {
              constructor() {
                tmp = closure_3();
                tmp2 = closeMediaModal();
                obj = closure_0(closure_2[7]);
                transitionToGuildResult = obj.transitionToGuild(channel.guild_id, channel.id, message.id);
                return;
              }
            }
            cResult[16] = tmp18;
            const tmp17 = tmp18;
          } else {
            class M {
              constructor() {
                tmp = closure_3();
                obj = closure_0(closure_2[10]);
                result = obj.showReportModalForMessage(message, "mobile_media_message_preview_action_sheet");
                return;
              }
            }
          }
          if (cResult[17] === setting) {
            class M {
              constructor() {
                tmp = closure_3();
                obj = closure_0(closure_2[10]);
                result = obj.showReportModalForMessage(message, "mobile_media_message_preview_action_sheet");
                return;
              }
            }
            if (cResult[20] === tmp5) {
              class M {
                constructor() {
                  tmp = closure_3();
                  obj = closure_0(closure_2[10]);
                  result = obj.showReportModalForMessage(message, "mobile_media_message_preview_action_sheet");
                  return;
                }
              }
              if (cResult[23] === tmp22) {
                class M {
                  constructor() {
                    tmp = closure_3();
                    obj = closure_0(closure_2[10]);
                    result = obj.showReportModalForMessage(message, "mobile_media_message_preview_action_sheet");
                    return;
                  }
                }
              }
              const obj6 = { children: null };
              const obj7 = { hasIcons: true, children: null };
              const items = [, , ];
              class R {
                constructor() {
                  tmp = closure_3();
                  tmp2 = closeMediaModal();
                  obj = closure_0(closure_2[7]);
                  transitionToGuildResult = obj.transitionToGuild(channel.guild_id, channel.id, message.id);
                  return;
                }
              }
              items[1] = tmp19;
              items[2] = tmp22;
              obj7.children = items;
              obj6.children = closure_5(tmp(closeMediaModal[11]).ActionSheetRow.Group, obj7);
              const tmp28 = closure_4(tmp(closeMediaModal[16]).ActionSheet, obj6);
              cResult[23] = tmp22;
              cResult[24] = tmp17;
              cResult[25] = tmp19;
              cResult[26] = tmp28;
            }
            let tmp23 = tmp5;
            if (tmp5) {
              class M {
                constructor() {
                  tmp = closure_3();
                  obj = closure_0(closure_2[10]);
                  result = obj.showReportModalForMessage(message, "mobile_media_message_preview_action_sheet");
                  return;
                }
              }
              const obj8 = { icon: null, label: null, onPress: null, variant: "danger" };
              const obj9 = { IconComponent: tmp(closeMediaModal[15]).FlagIcon };
              obj8.icon = closure_4(tmp(closeMediaModal[11]).ActionSheetRow.Icon, obj9);
              class R {
                constructor() {
                  tmp = closure_3();
                  tmp2 = closeMediaModal();
                  obj = closure_0(closure_2[7]);
                  transitionToGuildResult = obj.transitionToGuild(channel.guild_id, channel.id, message.id);
                  return;
                }
              }
              obj8.label = tmp24(tmp(closeMediaModal[13]).t["+78Pfm"]);
              obj8.onPress = M;
              tmp23 = closure_4(tmp(closeMediaModal[11]).ActionSheetRow, obj8);
            }
            cResult[20] = tmp5;
            cResult[21] = M;
            class R {
              constructor() {
                tmp = closure_3();
                tmp2 = closeMediaModal();
                obj = closure_0(closure_2[7]);
                transitionToGuildResult = obj.transitionToGuild(channel.guild_id, channel.id, message.id);
                return;
              }
            }
            cResult[22] = tmp23;
          }
          class R {
            constructor() {
              tmp = closure_3();
              tmp2 = closeMediaModal();
              obj = closure_0(closure_2[7]);
              transitionToGuildResult = obj.transitionToGuild(channel.guild_id, channel.id, message.id);
              return;
            }
          }
          if (setting) {
            class M {
              constructor() {
                tmp = closure_3();
                obj = closure_0(closure_2[10]);
                result = obj.showReportModalForMessage(message, "mobile_media_message_preview_action_sheet");
                return;
              }
            }
            const obj10 = { icon: null, label: null, onPress: null };
            const obj11 = { IconComponent: tmp(closeMediaModal[14]).IdIcon };
            obj10.icon = closure_4(tmp(closeMediaModal[11]).ActionSheetRow.Icon, obj11);
            class R {
              constructor() {
                tmp = closure_3();
                tmp2 = closeMediaModal();
                obj = closure_0(closure_2[7]);
                transitionToGuildResult = obj.transitionToGuild(channel.guild_id, channel.id, message.id);
                return;
              }
            }
            obj10.label = tmp21(tmp(closeMediaModal[13]).t.zBoHlf);
            obj10.onPress = A;
            const tmp20 = closure_4(tmp(closeMediaModal[11]).ActionSheetRow, obj10);
          }
          cResult[17] = setting;
          cResult[18] = A;
          cResult[19] = tmp20;
        }
      }
    }
    class R {
      constructor() {
        tmp = closure_3();
        tmp2 = closeMediaModal();
        obj = closure_0(closure_2[7]);
        transitionToGuildResult = obj.transitionToGuild(channel.guild_id, channel.id, message.id);
        return;
      }
    }
    cResult[4] = channel.guild_id;
    cResult[5] = channel.id;
    cResult[6] = closeMediaModal;
    cResult[7] = message.id;
    cResult[8] = R;
    tmp10 = R;
  }
  const isNonUserBotResult = user.isNonUserBot();
  let canReportUserResult = !isNonUserBotResult;
  if (!isNonUserBotResult) {
    class M {
      constructor() {
        tmp = closure_3();
        obj = closure_0(closure_2[10]);
        result = obj.showReportModalForMessage(message, "mobile_media_message_preview_action_sheet");
        return;
      }
    }
    canReportUserResult = obj2.canReportUser(user);
  }
  if (canReportUserResult) {
    class M {
      constructor() {
        tmp = closure_3();
        obj = closure_0(closure_2[10]);
        result = obj.showReportModalForMessage(message, "mobile_media_message_preview_action_sheet");
        return;
      }
    }
    canReportUserResult = obj3.canReportMessage(message);
  }
  cResult[0] = message;
  cResult[1] = user;
  cResult[2] = canReportUserResult;
  tmp5 = canReportUserResult;
  let obj = channel(closeMediaModal[3]);
}) : (function MediaMessagePreviewActionSheet(channel) {
  channel = channel.channel;
  const message = channel.message;
  ({ user, closeMediaModal } = channel);
  let callback;
  const DeveloperMode = channel(closeMediaModal[4]).DeveloperMode;
  let setting = DeveloperMode.useSetting();
  const isNonUserBotResult = user.isNonUserBot();
  let canReportUserResult = !isNonUserBotResult;
  if (!isNonUserBotResult) {
    canReportUserResult = tmp(closeMediaModal[5]).canReportUser(user);
    const tmpResult = tmp(closeMediaModal[5]);
  }
  if (canReportUserResult) {
    canReportUserResult = tmp(closeMediaModal[5]).canReportMessage(message);
    const tmpResult2 = tmp(closeMediaModal[5]);
  }
  callback = callback.useCallback(() => {
    message(closeMediaModal[6]).hideActionSheet();
  }, []);
  const items = [callback, closeMediaModal, , , ];
  ({ guild_id: arr[2], id: arr[3] } = channel);
  items[4] = message.id;
  const items1 = [message.id, callback];
  const callback1 = callback.useCallback(() => {
    callback();
    closeMediaModal();
    router_utils.transitionToGuild(channel.guild_id, channel.id, message.id);
  }, items);
  const items2 = [message, callback];
  const callback2 = callback.useCallback(() => {
    callback();
    ClipboardUtils.copy(message.id);
    ToastUtils.presentIdCopied();
  }, items1);
  const callback3 = callback.useCallback(() => {
    callback();
    const result = ReportModals.showReportModalForMessage(message, "mobile_media_message_preview_action_sheet");
  }, items2);
  let obj = { icon: closure_4(channel(closeMediaModal[11]).ActionSheetRow.Icon, { IconComponent: channel(closeMediaModal[12]).ChatArrowRightIcon }), label: null, onPress: null };
  const intl = tmp(closeMediaModal[13]).intl;
  obj.label = intl.string(channel(closeMediaModal[13]).t["+TSRGD"]);
  obj.onPress = callback1;
  const items3 = [closure_4(channel(closeMediaModal[11]).ActionSheetRow, obj), , ];
  if (setting) {
    const obj3 = { icon: null, label: null, onPress: null };
    const obj4 = { IconComponent: tmp(closeMediaModal[14]).IdIcon };
    obj3.icon = closure_4(tmp(closeMediaModal[11]).ActionSheetRow.Icon, obj4);
    const intl2 = tmp(closeMediaModal[13]).intl;
    obj3.label = intl2.string(tmp(closeMediaModal[13]).t.zBoHlf);
    obj3.onPress = callback2;
    setting = closure_4(tmp(closeMediaModal[11]).ActionSheetRow, obj3);
  }
  items3[1] = setting;
  if (canReportUserResult) {
    const obj5 = { icon: null, label: null, onPress: null, variant: "danger" };
    const obj6 = { IconComponent: tmp(closeMediaModal[15]).FlagIcon };
    obj5.icon = closure_4(tmp(closeMediaModal[11]).ActionSheetRow.Icon, obj6);
    const intl3 = tmp(closeMediaModal[13]).intl;
    obj5.label = intl3.string(tmp(closeMediaModal[13]).t["+78Pfm"]);
    obj5.onPress = callback3;
    canReportUserResult = closure_4(tmp(closeMediaModal[11]).ActionSheetRow, obj5);
  }
  const obj2 = { IconComponent: channel(closeMediaModal[12]).ChatArrowRightIcon };
  items3[2] = canReportUserResult;
  return closure_4(channel(closeMediaModal[16]).ActionSheet, { children: closure_5(channel(closeMediaModal[11]).ActionSheetRow.Group, { hasIcons: true, children: items3 }) });
}));