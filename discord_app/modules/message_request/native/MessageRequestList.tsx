// === Module 17510: MessageRequestList ===

// Module 17510 (MessageRequestList)
import nativeDefault from "native" /* 587 */;
import AnalyticsUtilsDefault from "AnalyticsUtils" /* 1265 */;
import transitionToChannel from "transitionToChannel" /* 5102 */;
import ModalActionCreatorsDefault from "ModalActionCreators" /* 5941 */;
import noop from "module_19" /* 19 */;

const require = globalThis.__r;

require = fn;
get_ActivityIndicator = fn(17);
({ ActivityIndicator: closure_4, View: hasOwnProperty, FlatList: metroRequire } = get_ActivityIndicator);
const AnalyticEvents = fn(1085).AnalyticEvents;
const jsxProd = fn(21);
({ jsx: closure_8, jsxs: closure_9 } = jsxProd);
let c10 = "header-section";
const createStyles = fn(5091);
let obj2 = { sectionContainer: { backgroundColor: nativeDefault.colors.BACKGROUND_BASE_LOW, flexDirection: "row", justifyContent: "space-between", marginTop: 6, marginBottom: 10 }, rowContainer: { flexDirection: "row", alignItems: "center", justifyContent: "space-between", marginTop: 14, marginBottom: 12 }, actionContainer: { flexDirection: "row", alignItems: "flex-start", height: "100%" }, actionButton: null, acceptButton: null, acceptButtonRestricted: null, pressableRow: null, activityIndicator: null, list: null };
let size = { backgroundColor: nativeDefault.colors.BACKGROUND_SURFACE_HIGH, tintColor: nativeDefault.colors.INTERACTIVE_TEXT_DEFAULT, borderRadius: nativeDefault.radii.lg, alignItems: "center", justifyContent: "center", height: 32, width: 32 };
obj2.actionButton = size;
obj2.acceptButton = { marginRight: 16 };
obj2.acceptButtonRestricted = { marginRight: 12 };
let obj3 = { backgroundColor: nativeDefault.colors.BACKGROUND_BASE_LOW, flexDirection: "row", justifyContent: "space-between", marginTop: 6, marginBottom: 10 };
obj2.pressableRow = { borderRadius: nativeDefault.radii.md };
obj2.activityIndicator = { height: 16, width: 16 };
let obj4 = { borderRadius: nativeDefault.radii.md };
obj2.list = { flex: 1, paddingHorizontal: 16, alignSelf: "stretch", backgroundColor: nativeDefault.colors.BACKGROUND_BASE_LOW };
let closure_11 = createStyles.createStyles(obj2);
const constants = { ACCEPT_MESSAGE_REQUEST: "accept-message-request", IGNORE_MESSAGE_REQUEST: "ignore-message-request", PREVIEW_MESSAGE_REQUEST: "preview-message-request" };
let ReactCompilerGating = fn(558);
let closure_13 = ReactCompilerGating.isReactCompilerEnabled() ? (function PendingMessageRequestRow(isRestricted) {
  const cResult = goToMessageRequestPreview(str[8]).c(70);
  ({ messageRequest, goToMessageRequestPreview } = isRestricted);
  ({ isLastRow, hasSingleMessageRequest } = isRestricted);
  isRestricted = isRestricted.isRestricted;
  const tmp5 = closure_11();
  const channel = messageRequest.channel;
  const id = channel.id;
  if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
    const fn = function s() {
      const obj2 = { key: "MESSAGE_REQUEST_REQUEST_ERROR_ALERT_TITLE", content: null, icon: null };
      const intl = goToMessageRequestPreview(str[6]).intl;
      obj2.content = intl.string(goToMessageRequestPreview(str[6]).t["EDYbS+"]);
      obj2.icon = hasSingleMessageRequest(str[10]);
      hasSingleMessageRequest(str[9]).open(obj2);
    };
    cResult[0] = fn;
    let first = fn;
  } else {
    first = cResult[0];
  }
  if (cResult[1] === id) {
    if (cResult[2] === hasSingleMessageRequest) {
      let tmp7 = cResult[3];
    }
    if (cResult[4] === tmp7) {
      if (cResult[5] === str) {
        let tmp8 = cResult[6];
      }
      const messageRequestActions = goToMessageRequestPreview(tmp2[13]).useMessageRequestActions(tmp8);
      const acceptMessageRequest = messageRequestActions.acceptMessageRequest;
      const rejectMessageRequest = messageRequestActions.rejectMessageRequest;
      ({ isAcceptLoading, isRejectLoading, isUserProfileLoading, isOptimisticAccepted, isOptimisticRejected } = messageRequestActions);
      if (cResult[7] === channel.id) {
        if (cResult[8] === rejectMessageRequest) {
          let tmp10 = cResult[9];
        }
        closure_7 = tmp10;
        if (cResult[10] === acceptMessageRequest) {
          if (cResult[11] === channel.id) {
            let tmp11 = cResult[12];
          }
          closure_8 = tmp11;
          if (cResult[13] === channel.id) {
            if (cResult[14] === goToMessageRequestPreview) {
              if (cResult[15] === str.id) {
                let tmp12 = cResult[16];
              }
              closure_9 = tmp12;
              if (cResult[17] === tmp11) {
                if (cResult[18] === tmp10) {
                  if (cResult[19] === tmp12) {
                    let tmp13 = cResult[20];
                  }
                  let tmp14 = isAcceptLoading;
                  if (!isAcceptLoading) {
                    tmp14 = isRejectLoading;
                  }
                  if (!tmp14) {
                    tmp14 = isUserProfileLoading;
                  }
                  if (!tmp14) {
                    tmp14 = isOptimisticAccepted;
                  }
                  if (!tmp14) {
                    tmp14 = isOptimisticRejected;
                  }
                  const _Symbol = Symbol;
                  if (cResult[21] === Symbol.for("react.memo_cache_sentinel")) {
                    let obj2 = { name: constants.ACCEPT_MESSAGE_REQUEST, label: null };
                    let intl = goToMessageRequestPreview(tmp2[6]).intl;
                    obj2.label = intl.string(goToMessageRequestPreview(tmp2[6]).t.hSLLWi);
                    const items = [obj2, , ];
                    const obj3 = { name: constants.IGNORE_MESSAGE_REQUEST, label: null };
                    const intl2 = goToMessageRequestPreview(tmp2[6]).intl;
                    obj3.label = intl2.string(goToMessageRequestPreview(tmp2[6]).t.fIBuSD);
                    items[1] = obj3;
                    const obj4 = { name: constants.PREVIEW_MESSAGE_REQUEST, label: null };
                    const intl3 = goToMessageRequestPreview(tmp2[6]).intl;
                    obj4.label = intl3.string(goToMessageRequestPreview(tmp2[6]).t.HjgsKJ);
                    items[2] = obj4;
                    cResult[21] = items;
                    let tmp15 = items;
                  } else {
                    tmp15 = cResult[21];
                  }
                  if (cResult[22] === tmp4) {
                    if (cResult[23] === messageRequest.channel) {
                      if (cResult[24] === messageRequest.user) {
                        let tmp19 = cResult[25];
                      }
                      if (cResult[26] !== str) {
                        const intl4 = goToMessageRequestPreview(tmp2[6]).intl;
                        let str1;
                        if (str != null) {
                          str1 = str.toString();
                        }
                        const obj5 = { name: str1 };
                        const formatToPlainStringResult = intl4.formatToPlainString(goToMessageRequestPreview(tmp2[6]).t["6p0yBo"], obj5);
                        cResult[26] = str;
                        cResult[27] = formatToPlainStringResult;
                        let tmp23 = formatToPlainStringResult;
                      } else {
                        tmp23 = cResult[27];
                      }
                      const tmp27 = tmp4 ? tmp5.acceptButtonRestricted : tmp5.acceptButton;
                      if (cResult[28] === tmp5.actionButton) {
                        if (cResult[29] === tmp27) {
                          let tmp28 = cResult[30];
                        }
                        if (cResult[31] === isAcceptLoading) {
                          if (cResult[32] === isOptimisticAccepted) {
                            if (cResult[33] === isUserProfileLoading) {
                              if (cResult[34] === tmp5.activityIndicator) {
                                if (cResult[36] === tmp14) {
                                  if (cResult[37] === tmp11) {
                                    if (cResult[38] === tmp23) {
                                      if (cResult[39] === tmp28) {
                                        if (cResult[40] === tmp29) {
                                          let tmp36 = cResult[41];
                                        }
                                        if (cResult[42] !== str) {
                                          const intl5 = goToMessageRequestPreview(tmp2[6]).intl;
                                          let str2;
                                          if (str != null) {
                                            str2 = str.toString();
                                          }
                                          const obj6 = { name: str2 };
                                          const formatToPlainStringResult1 = intl5.formatToPlainString(goToMessageRequestPreview(tmp2[6]).t["C9Xe6+"], obj6);
                                          cResult[42] = str;
                                          cResult[43] = formatToPlainStringResult1;
                                          let tmp39 = formatToPlainStringResult1;
                                        } else {
                                          tmp39 = cResult[43];
                                        }
                                        if (cResult[44] === isOptimisticRejected) {
                                          if (cResult[45] === isRejectLoading) {
                                            if (cResult[46] === tmp5.activityIndicator) {
                                              if (cResult[48] === tmp14) {
                                                if (cResult[49] === tmp10) {
                                                  if (cResult[50] === tmp5.actionButton) {
                                                    if (cResult[51] === tmp39) {
                                                      if (cResult[52] === tmp43) {
                                                        let tmp50 = cResult[53];
                                                      }
                                                      if (cResult[54] === tmp5.actionContainer) {
                                                        if (cResult[55] === tmp36) {
                                                          if (cResult[56] === tmp50) {
                                                            let tmp53 = cResult[57];
                                                          }
                                                          if (cResult[58] === tmp5.rowContainer) {
                                                            if (cResult[59] === tmp19) {
                                                              if (cResult[60] === tmp53) {
                                                                let tmp57 = cResult[61];
                                                              }
                                                              if (cResult[62] !== isLastRow) {
                                                                let tmp62 = null;
                                                                if (!isLastRow) {
                                                                  tmp62 = closure_8(goToMessageRequestPreview(tmp2[20]).FormDivider, { iconPush: true, outer: true });
                                                                }
                                                                cResult[62] = isLastRow;
                                                                cResult[63] = tmp62;
                                                                let tmp61 = tmp62;
                                                              } else {
                                                                tmp61 = cResult[63];
                                                              }
                                                              if (cResult[64] === tmp13) {
                                                                if (cResult[65] === tmp12) {
                                                                  if (cResult[66] === tmp5.pressableRow) {
                                                                    if (cResult[67] === tmp57) {
                                                                      if (cResult[68] === tmp61) {
                                                                        let tmp64 = cResult[69];
                                                                      }
                                                                      return tmp64;
                                                                    }
                                                                  }
                                                                }
                                                              }
                                                              const obj8 = { onPress: tmp12, accessibilityRole: "button", accessibilityActions: tmp15, onAccessibilityAction: tmp13, style: tmp17, children: null };
                                                              const items1 = [tmp57, tmp61];
                                                              obj8.children = items1;
                                                              const tmp66 = closure_9(goToMessageRequestPreview(tmp2[18]).PressableOpacity, obj8);
                                                              cResult[64] = tmp13;
                                                              cResult[65] = tmp12;
                                                              cResult[66] = tmp5.pressableRow;
                                                              cResult[67] = tmp57;
                                                              cResult[68] = tmp61;
                                                              cResult[69] = tmp66;
                                                              tmp64 = tmp66;
                                                            }
                                                          }
                                                          const obj9 = { style: tmp18, children: null };
                                                          const items2 = [tmp19, tmp53];
                                                          obj9.children = items2;
                                                          const tmp60 = closure_9(acceptMessageRequest, obj9);
                                                          cResult[58] = tmp5.rowContainer;
                                                          cResult[59] = tmp19;
                                                          cResult[60] = tmp53;
                                                          cResult[61] = tmp60;
                                                          tmp57 = tmp60;
                                                        }
                                                      }
                                                      const obj10 = { style: tmp5.actionContainer, children: null };
                                                      const items3 = [tmp36, tmp50];
                                                      obj10.children = items3;
                                                      const tmp56 = closure_9(acceptMessageRequest, obj10);
                                                      cResult[54] = tmp5.actionContainer;
                                                      cResult[55] = tmp36;
                                                      cResult[56] = tmp50;
                                                      cResult[57] = tmp56;
                                                      tmp53 = tmp56;
                                                    }
                                                  }
                                                }
                                              }
                                              const obj11 = { accessibilityRole: "button", accessibilityLabel: tmp39, onPress: tmp10, disabled: tmp14, style: tmp5.actionButton, children: cResult[47] };
                                              const tmp52 = closure_8(goToMessageRequestPreview(tmp2[18]).PressableOpacity, obj11);
                                              cResult[48] = tmp14;
                                              cResult[49] = tmp10;
                                              cResult[50] = tmp5.actionButton;
                                              cResult[51] = tmp39;
                                              cResult[52] = cResult[47];
                                              cResult[53] = tmp52;
                                              tmp50 = tmp52;
                                            }
                                          }
                                        }
                                        if (!isRejectLoading) {
                                          if (!isOptimisticRejected) {
                                            const obj12 = { size: goToMessageRequestPreview(tmp2[16]).Icon.Sizes.SMALL, disableColor: true, source: hasSingleMessageRequest(tmp2[19]) };
                                            let tmp46 = closure_8(goToMessageRequestPreview(tmp2[16]).Icon, obj12);
                                          }
                                          cResult[44] = isOptimisticRejected;
                                          cResult[45] = isRejectLoading;
                                          isRejectLoading = tmp5.activityIndicator;
                                          cResult[46] = isRejectLoading;
                                          cResult[47] = tmp46;
                                        }
                                        const obj13 = { style: tmp5.activityIndicator };
                                        tmp46 = closure_8(id, obj13);
                                      }
                                    }
                                  }
                                }
                                const obj14 = { accessibilityRole: "button", accessibilityLabel: tmp23, onPress: tmp11, disabled: tmp14, style: tmp28, children: cResult[35] };
                                const tmp38 = closure_8(goToMessageRequestPreview(tmp2[18]).PressableOpacity, obj14);
                                cResult[36] = tmp14;
                                cResult[37] = tmp11;
                                cResult[38] = tmp23;
                                cResult[39] = tmp28;
                                cResult[40] = cResult[35];
                                cResult[41] = tmp38;
                                tmp36 = tmp38;
                              }
                            }
                          }
                        }
                        if (!isAcceptLoading) {
                          if (!isUserProfileLoading) {
                            if (!isOptimisticAccepted) {
                              const obj15 = { size: goToMessageRequestPreview(tmp2[16]).Icon.Sizes.SMALL, disableColor: true, source: hasSingleMessageRequest(tmp2[17]) };
                              let tmp32 = closure_8(goToMessageRequestPreview(tmp2[16]).Icon, obj15);
                            }
                            cResult[31] = isAcceptLoading;
                            cResult[32] = isOptimisticAccepted;
                            cResult[33] = isUserProfileLoading;
                            isUserProfileLoading = tmp5.activityIndicator;
                            cResult[34] = isUserProfileLoading;
                            cResult[35] = tmp32;
                          }
                        }
                        const obj16 = { style: tmp5.activityIndicator };
                        tmp32 = closure_8(id, obj16);
                      }
                      const items4 = [tmp5.actionButton, tmp27];
                      cResult[28] = tmp5.actionButton;
                      cResult[29] = tmp27;
                      cResult[30] = items4;
                      tmp28 = items4;
                    }
                  }
                  const obj17 = { channel: null, otherUser: null, isRestricted: null };
                  ({ channel: obj7.channel, user: obj7.otherUser } = messageRequest);
                  obj17.isRestricted = tmp4;
                  const tmp22 = closure_8(hasSingleMessageRequest(tmp2[15]), obj17);
                  cResult[22] = tmp4;
                  cResult[23] = messageRequest.channel;
                  cResult[24] = messageRequest.user;
                  cResult[25] = tmp22;
                  tmp19 = tmp22;
                }
              }
              function handleAccessibilityAction(nativeEvent) {
                const actionName = nativeEvent.nativeEvent.actionName;
                if (constants.ACCEPT_MESSAGE_REQUEST === actionName) {
                  return closure_8();
                } else if (constants.IGNORE_MESSAGE_REQUEST === actionName) {
                  return closure_7();
                } else if (constants.PREVIEW_MESSAGE_REQUEST === actionName) {
                  return closure_9();
                }
              }
              cResult[17] = tmp11;
              cResult[18] = tmp10;
              cResult[19] = tmp12;
              cResult[20] = handleAccessibilityAction;
              tmp13 = handleAccessibilityAction;
            }
          }
          function handleSelectRow() {
            AnalyticsUtilsDefault.track(AnalyticEvents.MESSAGE_REQUEST_PREVIEW_VIEWED, { is_spam: false, channel_id: channel.id, other_user_id: str.id });
            goToMessageRequestPreview();
          }
          cResult[13] = channel.id;
          cResult[14] = goToMessageRequestPreview;
          cResult[15] = str.id;
          cResult[16] = handleSelectRow;
          tmp12 = handleSelectRow;
        }
        function handleAcceptMessageRequest() {
          acceptMessageRequest(channel.id);
        }
        cResult[10] = acceptMessageRequest;
        cResult[11] = channel.id;
        cResult[12] = handleAcceptMessageRequest;
        tmp11 = handleAcceptMessageRequest;
      }
      function handleRejectMessageRequest() {
        rejectMessageRequest(channel.id);
      }
      cResult[7] = channel.id;
      cResult[8] = rejectMessageRequest;
      cResult[9] = handleRejectMessageRequest;
      tmp10 = handleRejectMessageRequest;
      const tmpResult = goToMessageRequestPreview(tmp2[13]);
    }
    const obj18 = { user: str, onAcceptSuccess: tmp7, onError: first };
    cResult[4] = tmp7;
    cResult[5] = str;
    cResult[6] = obj18;
    tmp8 = obj18;
  }
  class C {
    constructor() {
      if (hasSingleMessageRequest) {
        tmp = closure_0;
        tmp2 = closure_2;
        obj = closure_0(closure_2[11]);
        tmp3 = id;
        transitionToChannelResult = obj.transitionToChannel(id);
        tmp5 = closure_1;
        arr = closure_1(closure_2[12]);
        arr1 = arr.pop();
      }
      return;
    }
  }
  cResult[1] = id;
  cResult[2] = hasSingleMessageRequest;
  cResult[3] = C;
  tmp7 = C;
  let obj = goToMessageRequestPreview(str[8]);
}) : (function PendingMessageRequestRow(isRestricted) {
  ({ messageRequest, goToMessageRequestPreview: require, hasSingleMessageRequest } = isRestricted);
  let flag = isRestricted.isRestricted;
  if (flag === undefined) {
    flag = false;
  }
  c5 = undefined;
  c6 = undefined;
  const tmp = closure_11();
  const str = messageRequest.user;
  const channel = messageRequest.channel;
  const id = channel.id;
  const items = [id, hasSingleMessageRequest];
  const callback = channel.useCallback(() => {
    const obj2 = { key: "MESSAGE_REQUEST_REQUEST_ERROR_ALERT_TITLE", content: null, icon: null };
    const intl = require("util").intl;
    obj2.content = intl.string(require("util").t["EDYbS+"]);
    obj2.icon = hasSingleMessageRequest(str[10]);
    hasSingleMessageRequest(str[9]).open(obj2);
  }, []);
  const callback1 = channel.useCallback(() => {
    if (hasSingleMessageRequest) {
      transitionToChannel.transitionToChannel(id);
      ModalActionCreatorsDefault.pop();
    }
  }, items);
  const messageRequestActions = require("useMessageRequestActions").useMessageRequestActions({ user: str, onAcceptSuccess: callback1, onError: callback });
  ({ acceptMessageRequest: c5, rejectMessageRequest: c6, isAcceptLoading, isRejectLoading, isUserProfileLoading, isOptimisticAccepted, isOptimisticRejected } = messageRequestActions);
  let tmp7 = isAcceptLoading;
  if (!isAcceptLoading) {
    tmp7 = isRejectLoading;
  }
  if (!tmp7) {
    tmp7 = isUserProfileLoading;
  }
  if (!tmp7) {
    tmp7 = isOptimisticAccepted;
  }
  if (!tmp7) {
    tmp7 = isOptimisticRejected;
  }
  function handleSelectRow() {
    AnalyticsUtilsDefault.track(AnalyticEvents.MESSAGE_REQUEST_PREVIEW_VIEWED, { is_spam: false, channel_id: channel.id, other_user_id: str.id });
    _require();
  }
  let obj2 = { onPress: handleSelectRow, accessibilityRole: "button", accessibilityActions: null, onAccessibilityAction: null, style: null, children: null };
  const obj3 = { name: constants.ACCEPT_MESSAGE_REQUEST, label: null };
  let intl = require("util").intl;
  obj3.label = intl.string(require("util").t.hSLLWi);
  const items1 = [obj3, , ];
  const obj4 = { name: constants.IGNORE_MESSAGE_REQUEST, label: null };
  const intl2 = require("util").intl;
  obj4.label = intl2.string(require("util").t.fIBuSD);
  items1[1] = obj4;
  const obj5 = { name: constants.PREVIEW_MESSAGE_REQUEST, label: null };
  const intl3 = require("util").intl;
  obj5.label = intl3.string(require("util").t.HjgsKJ);
  items1[2] = obj5;
  obj2.accessibilityActions = items1;
  obj2.onAccessibilityAction = function handleAccessibilityAction(nativeEvent) {
    const actionName = nativeEvent.nativeEvent.actionName;
    if (constants.ACCEPT_MESSAGE_REQUEST === actionName) {
      _undefined(channel.id);
    } else if (constants.IGNORE_MESSAGE_REQUEST === actionName) {
      _undefined2(channel.id);
    } else if (constants.PREVIEW_MESSAGE_REQUEST === actionName) {
      const obj2 = { is_spam: false, channel_id: channel.id, other_user_id: str.id };
      AnalyticsUtilsDefault.track(AnalyticEvents.MESSAGE_REQUEST_PREVIEW_VIEWED, obj2);
      _require();
    }
  };
  obj2.style = tmp.pressableRow;
  const obj6 = { style: tmp.rowContainer, children: null };
  const items2 = [closure_8(hasSingleMessageRequest(str[15]), { channel: messageRequest.channel, otherUser: messageRequest.user, isRestricted: flag }), ];
  const obj8 = { style: tmp.actionContainer, children: null };
  const intl4 = require("util").intl;
  let str1;
  if (str != null) {
    str1 = str.toString();
  }
  const obj9 = { accessibilityRole: "button", accessibilityLabel: intl4.formatToPlainString(require("util").t["6p0yBo"], { name: str1 }), onPress: null, disabled: tmp7, style: null, children: null };
  function handleAcceptMessageRequest() {
    _undefined(channel.id);
  }
  obj9.onPress = handleAcceptMessageRequest;
  const items3 = [tmp.actionButton, flag ? tmp.acceptButtonRestricted : tmp.acceptButton];
  obj9.style = items3;
  if (!isAcceptLoading) {
    if (!isUserProfileLoading) {
      if (!isOptimisticAccepted) {
        const obj10 = { size: require("native").Icon.Sizes.SMALL, disableColor: true, source: hasSingleMessageRequest(tmp5[17]) };
        let tmp10Result = closure_8(require("native").Icon, obj10);
      }
      obj9.children = tmp10Result;
      const items4 = [closure_8(require("Pressables").PressableOpacity, obj9), ];
      const intl5 = require("util").intl;
      let str2;
      if (str != null) {
        str2 = str.toString();
      }
      const obj11 = { accessibilityRole: "button", accessibilityLabel: null, onPress: null, disabled: null, style: null, children: null };
      const obj12 = { name: str2 };
      function handleRejectMessageRequest() {
        _undefined2(channel.id);
      }
      obj11.accessibilityLabel = intl5.formatToPlainString(require("util").t["C9Xe6+"], obj12);
      obj11.onPress = handleRejectMessageRequest;
      obj11.disabled = tmp7;
      obj11.style = tmp.actionButton;
      if (!isRejectLoading) {
        if (!isOptimisticRejected) {
          const obj13 = { size: require("native").Icon.Sizes.SMALL, disableColor: true, source: hasSingleMessageRequest(tmp5[19]) };
          let tmp10Result3 = closure_8(require("native").Icon, obj13);
        }
        obj11.children = tmp10Result3;
        items4[1] = closure_8(require("Pressables").PressableOpacity, obj11);
        obj8.children = items4;
        items2[1] = closure_9(tmp9, obj8);
        obj6.children = items2;
        const items5 = [closure_9(tmp9, obj6), ];
        let tmp10Result4 = null;
        if (!isRestricted.isLastRow) {
          tmp10Result4 = closure_8(require("Form").FormDivider, { iconPush: true, outer: true });
        }
        items5[1] = tmp10Result4;
        obj2.children = items5;
        return closure_9(require("Pressables").PressableOpacity, obj2);
      }
      const obj14 = { style: tmp.activityIndicator };
      tmp10Result3 = closure_8(id, obj14);
    }
  }
  tmp10Result = closure_8(id, { style: tmp.activityIndicator });
  let obj = require("useMessageRequestActions");
  const obj15 = { style: tmp.activityIndicator };
  const obj7 = { channel: messageRequest.channel, otherUser: messageRequest.user, isRestricted: flag };
});
ReactCompilerGating = fn(558);
let obj5 = { flex: 1, paddingHorizontal: 16, alignSelf: "stretch", backgroundColor: nativeDefault.colors.BACKGROUND_BASE_LOW };
size = fn(2);
const result = size.fileFinishedImporting("modules/message_request/native/MessageRequestList.tsx");

export default ReactCompilerGating.isReactCompilerEnabled() ? (function MessageRequestList(goToMessageRequestPreview) {
  const cResult = goToMessageRequestPreview(arr[8]).c(24);
  goToMessageRequestPreview = goToMessageRequestPreview.goToMessageRequestPreview;
  const tmp4 = closure_11();
  importDefault = tmp4;
  const bottom = require("useSafeAreaInsets")().bottom;
  arr = require("useSortedMessageRequests")();
  let obj = goToMessageRequestPreview(arr[8]);
  const tmp5 = importDefault;
  const listHasSingleMessageRequest = goToMessageRequestPreview(arr[23]).useListHasSingleMessageRequest();
  let obj2 = goToMessageRequestPreview(arr[23]);
  const isMessageRequestRestrictedViewer = goToMessageRequestPreview(arr[24]).useIsMessageRequestRestrictedViewer();
  if (0 === arr.length) {
    const _Symbol2 = Symbol;
    if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
      let obj4 = { bodyText: null };
      let intl = tmp(tmp2[6]).intl;
      obj4.bodyText = intl.string(tmp(tmp2[6]).t.SXrqTf);
      const tmp28 = closure_8(tmp5(tmp2[25]), obj4);
      cResult[0] = tmp28;
      let first = tmp28;
      const tmp5Result = tmp5(tmp2[25]);
    } else {
      first = cResult[0];
    }
    return first;
  } else {
    if (cResult[1] !== arr) {
      const items = [c10];
      HermesBuiltin.arraySpread(arr, 1);
      cResult[1] = arr;
      cResult[2] = items;
      let tmp8 = items;
    } else {
      tmp8 = cResult[2];
    }
    if (cResult[3] === goToMessageRequestPreview) {
      if (cResult[4] === listHasSingleMessageRequest) {
        if (cResult[5] === isMessageRequestRestrictedViewer) {
          if (cResult[6] === arr) {
            if (cResult[7] === tmp4.sectionContainer) {
              let tmp13 = cResult[8];
            }
            if (cResult[9] !== bottom) {
              let num10 = 0;
              if (tmpResult.isAndroid()) {
                num10 = bottom;
              }
              cResult[9] = bottom;
              cResult[10] = num10;
              let tmp14 = num10;
              tmpResult = tmp(tmp2[27]);
            } else {
              tmp14 = cResult[10];
            }
            if (cResult[11] !== tmp14) {
              const obj5 = { marginBottom: tmp14 };
              cResult[11] = tmp14;
              cResult[12] = obj5;
              let tmp15 = obj5;
            } else {
              tmp15 = cResult[12];
            }
            if (cResult[13] === tmp4.list) {
              if (cResult[14] === tmp15) {
                let tmp16 = cResult[15];
              }
              const _Symbol = Symbol;
              if (cResult[16] === Symbol.for("react.memo_cache_sentinel")) {
                const obj6 = { right: 0.01 };
                cResult[16] = obj6;
                let tmp18 = obj6;
              } else {
                tmp18 = cResult[16];
              }
              if (cResult[17] !== bottom) {
                const obj7 = { paddingBottom: bottom, paddingTop: 12 };
                cResult[17] = bottom;
                cResult[18] = obj7;
                let tmp19 = obj7;
              } else {
                tmp19 = cResult[18];
              }
              if (cResult[19] === tmp8) {
                if (cResult[20] === tmp13) {
                  if (cResult[21] === tmp16) {
                    if (cResult[22] === tmp19) {
                      let tmp20 = cResult[23];
                    }
                    return tmp20;
                  }
                }
              }
              const obj8 = { style: tmp16, scrollIndicatorInsets: tmp18, contentContainerStyle: tmp19, renderItem: tmp13, data: tmp8 };
              const tmp23 = closure_8(closure_6, obj8);
              cResult[19] = tmp8;
              cResult[20] = tmp13;
              cResult[21] = tmp16;
              cResult[22] = tmp19;
              cResult[23] = tmp23;
              tmp20 = tmp23;
            }
            const items1 = [tmp4.list, tmp15];
            cResult[13] = tmp4.list;
            cResult[14] = tmp15;
            cResult[15] = items1;
            tmp16 = items1;
          }
        }
      }
    }
    function renderData(item) {
      item = item.item;
      if (typeof item === "string") {
        const obj2 = { style: sectionContainer.sectionContainer, children: null };
        const obj3 = { variant: "eyebrow", color: "text-default", children: null };
        const intl = goToMessageRequestPreview(arr[6]).intl;
        const obj4 = { pendingRequestNumber: arr.length };
        obj3.children = intl.format(goToMessageRequestPreview(arr[6]).t.evH4Yb, obj4);
        obj2.children = closure_1_8(goToMessageRequestPreview(arr[26]).Text, obj3);
        return closure_1_8(closure_1_5, obj2);
      } else {
        let id;
        if (arr[arr.length - 1] != null) {
          id = tmp14.channel.id;
        }
        const obj = {
          messageRequest: item,
          goToMessageRequestPreview() {
              return goToMessageRequestPreview(item.channel.id);
            },
          isLastRow: item.channel.id === id,
          hasSingleMessageRequest: listHasSingleMessageRequest,
          isRestricted: isMessageRequestRestrictedViewer
        };
        return closure_1_8(closure_1_13, obj, item.channel.id);
      }
    }
    cResult[3] = goToMessageRequestPreview;
    cResult[4] = listHasSingleMessageRequest;
    cResult[5] = isMessageRequestRestrictedViewer;
    cResult[6] = arr;
    cResult[7] = tmp4.sectionContainer;
    cResult[8] = renderData;
    tmp13 = renderData;
  }
  let obj3 = goToMessageRequestPreview(arr[24]);
}) : (function MessageRequestList(goToMessageRequestPreview) {
  goToMessageRequestPreview = goToMessageRequestPreview.goToMessageRequestPreview;
  let arr;
  const tmp = closure_11();
  importDefault = tmp;
  const bottom = require("useSafeAreaInsets")().bottom;
  arr = require("useSortedMessageRequests")();
  const hasSingleMessageRequest = goToMessageRequestPreview(arr[23]).useListHasSingleMessageRequest();
  let obj = goToMessageRequestPreview(arr[23]);
  const tmp2 = importDefault;
  const isRestricted = goToMessageRequestPreview(arr[24]).useIsMessageRequestRestrictedViewer();
  if (0 === arr.length) {
    let obj3 = { bodyText: null };
    let intl = tmp4(tmp3[6]).intl;
    obj3.bodyText = intl.string(tmp4(tmp3[6]).t.SXrqTf);
    return closure_8(tmp2(tmp3[25]), obj3);
  } else {
    const items = [c10];
    HermesBuiltin.arraySpread(arr, 1);
    const items1 = [tmp.list, ];
    let num = 0;
    if (tmp4Result.isAndroid()) {
      num = bottom;
    }
    let obj4 = { style: null, scrollIndicatorInsets: null, contentContainerStyle: null, renderItem: null, data: null };
    const obj5 = { marginBottom: num };
    items1[1] = obj5;
    obj4.style = items1;
    obj4.scrollIndicatorInsets = { right: 0.01 };
    const obj6 = { paddingBottom: bottom, paddingTop: 12 };
    obj4.contentContainerStyle = obj6;
    obj4.renderItem = function renderData(item) {
      item = item.item;
      if (typeof item === "string") {
        const obj2 = { style: sectionContainer.sectionContainer, children: null };
        const obj3 = { variant: "eyebrow", color: "text-default", children: null };
        const intl = goToMessageRequestPreview(arr[6]).intl;
        const obj4 = { pendingRequestNumber: arr.length };
        obj3.children = intl.format(goToMessageRequestPreview(arr[6]).t.evH4Yb, obj4);
        obj2.children = closure_1_8(goToMessageRequestPreview(arr[26]).Text, obj3);
        return closure_1_8(closure_1_5, obj2);
      } else {
        let id;
        if (arr[arr.length - 1] != null) {
          id = tmp14.channel.id;
        }
        const obj = {
          messageRequest: item,
          goToMessageRequestPreview() {
              return goToMessageRequestPreview(item.channel.id);
            },
          isLastRow: item.channel.id === id,
          hasSingleMessageRequest,
          isRestricted
        };
        return closure_1_8(closure_1_13, obj, item.channel.id);
      }
    };
    obj4.data = items;
    return closure_8(closure_6, obj4);
  }
  let obj2 = goToMessageRequestPreview(arr[24]);
});