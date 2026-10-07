// discord_app/modules/message_request/native/MessageRequestList.tsx
import nativeDefault from "../../../../discord_common/js/packages/tokens/native.tsx";
import AnalyticsUtilsDefault from "../../../utils/AnalyticsUtils.tsx";
import transitionToChannel from "../../routing/transitionToChannel.tsx";
import ModalActionCreatorsDefault from "../../../actions/ModalActionCreators.tsx";
import noop from "../../../../_runtime/metro/00019__.js";

const require = globalThis.__r;

require = fn;
get_ActivityIndicator = fn(17);
({ ActivityIndicator: closure_4, View: hasOwnProperty, FlatList: metroRequire } = get_ActivityIndicator);
const AnalyticEvents = fn(1085).AnalyticEvents;
const jsxProd = fn(21);
({ jsx: closure_8, jsxs: closure_9 } = jsxProd);
let c10 = "header-section";
const createStyles = fn(4896);
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
let closure_13 = ReactCompilerGating.isReactCompilerEnabled() ? ((isRestricted) => {
  const cResult = goToMessageRequestPreview(str[8]).c(70);
  ({ messageRequest, goToMessageRequestPreview } = isRestricted);
  ({ isLastRow, hasSingleMessageRequest } = isRestricted);
  isRestricted = isRestricted.isRestricted;
  const tmp5 = closure_11();
  const channel = messageRequest.channel;
  const id = channel.id;
  if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
    const fn = function n() {
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
                  let tmp15 = isAcceptLoading;
                  if (!isAcceptLoading) {
                    tmp15 = isRejectLoading;
                  }
                  class V {
                    constructor() {
                      obj = closure_1(closure_2[14]);
                      obj1 = { is_spam: false, channel_id: channel.id, other_user_id: user.id };
                      trackResult = obj.track(AnalyticEvents.MESSAGE_REQUEST_PREVIEW_VIEWED, obj1);
                      tmp2 = goToMessageRequestPreview();
                      return;
                    }
                  }
                  if (!tmp15) {
                    tmp15 = isOptimisticAccepted;
                  }
                  if (!tmp15) {
                    tmp15 = isOptimisticRejected;
                  }
                  const _Symbol = Symbol;
                  if (cResult[21] === Symbol.for("react.memo_cache_sentinel")) {
                    let obj2 = { name: constants.ACCEPT_MESSAGE_REQUEST, label: null };
                    class V {
                      constructor() {
                        obj = closure_1(closure_2[14]);
                        obj1 = { is_spam: false, channel_id: channel.id, other_user_id: user.id };
                        trackResult = obj.track(AnalyticEvents.MESSAGE_REQUEST_PREVIEW_VIEWED, obj1);
                        tmp2 = goToMessageRequestPreview();
                        return;
                      }
                    }
                    obj2.label = obj5.string(goToMessageRequestPreview(tmp2[6]).t.hSLLWi);
                    const items = [obj2, , ];
                    const obj3 = { name: constants.IGNORE_MESSAGE_REQUEST, label: null };
                    let intl = goToMessageRequestPreview(tmp2[6]).intl;
                    obj3.label = intl.string(goToMessageRequestPreview(tmp2[6]).t.fIBuSD);
                    class P {
                      constructor() {
                        tmp = rejectMessageRequest(channel.id);
                        return;
                      }
                    }
                    const obj4 = { name: constants.PREVIEW_MESSAGE_REQUEST, label: null };
                    const intl2 = goToMessageRequestPreview(tmp2[6]).intl;
                    obj4.label = intl2.string(goToMessageRequestPreview(tmp2[6]).t.HjgsKJ);
                    items[2] = obj4;
                    cResult[21] = items;
                    let tmp16 = items;
                  } else {
                    tmp16 = cResult[21];
                  }
                  if (cResult[22] === tmp4) {
                    if (cResult[23] === messageRequest.channel) {
                      if (cResult[24] === messageRequest.user) {
                        let tmp20 = cResult[25];
                      }
                      if (cResult[26] !== str) {
                        const intl3 = goToMessageRequestPreview(tmp2[6]).intl;
                        class V {
                          constructor() {
                            obj = closure_1(closure_2[14]);
                            obj1 = { is_spam: false, channel_id: channel.id, other_user_id: user.id };
                            trackResult = obj.track(AnalyticEvents.MESSAGE_REQUEST_PREVIEW_VIEWED, obj1);
                            tmp2 = goToMessageRequestPreview();
                            return;
                          }
                        }
                        if (str != null) {
                          const str1 = str.toString();
                        }
                        const obj6 = { name: str1 };
                        cResult[26] = str;
                        cResult[27] = intl3.formatToPlainString(goToMessageRequestPreview(tmp2[6]).t["6p0yBo"], obj6);
                        class P {
                          constructor() {
                            tmp = rejectMessageRequest(channel.id);
                            return;
                          }
                        }
                        const formatToPlainStringResult = intl3.formatToPlainString(goToMessageRequestPreview(tmp2[6]).t["6p0yBo"], obj6);
                      }
                      class V {
                        constructor() {
                          obj = closure_1(closure_2[14]);
                          obj1 = { is_spam: false, channel_id: channel.id, other_user_id: user.id };
                          trackResult = obj.track(AnalyticEvents.MESSAGE_REQUEST_PREVIEW_VIEWED, obj1);
                          tmp2 = goToMessageRequestPreview();
                          return;
                        }
                      }
                      if (cResult[28] === tmp5.actionButton) {
                        if (cResult[29] === tmp28) {
                          let tmp29 = cResult[30];
                        }
                        if (cResult[31] === isAcceptLoading) {
                          if (cResult[32] === isOptimisticAccepted) {
                            if (cResult[33] === isUserProfileLoading) {
                              if (cResult[34] === tmp5.activityIndicator) {
                                if (cResult[36] === tmp15) {
                                  if (cResult[37] === tmp11) {
                                    if (cResult[38] === tmp24) {
                                      if (cResult[39] === tmp29) {
                                        if (cResult[40] === tmp30) {
                                          let tmp36 = cResult[41];
                                        }
                                        if (cResult[42] !== str) {
                                          const intl4 = goToMessageRequestPreview(tmp2[6]).intl;
                                          class V {
                                            constructor() {
                                              obj = closure_1(closure_2[14]);
                                              obj1 = { is_spam: false, channel_id: channel.id, other_user_id: user.id };
                                              trackResult = obj.track(AnalyticEvents.MESSAGE_REQUEST_PREVIEW_VIEWED, obj1);
                                              tmp2 = goToMessageRequestPreview();
                                              return;
                                            }
                                          }
                                          if (str != null) {
                                            const str2 = str.toString();
                                          }
                                          const obj7 = { name: str2 };
                                          cResult[42] = str;
                                          cResult[43] = intl4.formatToPlainString(goToMessageRequestPreview(tmp2[6]).t["C9Xe6+"], obj7);
                                          class P {
                                            constructor() {
                                              tmp = rejectMessageRequest(channel.id);
                                              return;
                                            }
                                          }
                                          const formatToPlainStringResult1 = intl4.formatToPlainString(goToMessageRequestPreview(tmp2[6]).t["C9Xe6+"], obj7);
                                        }
                                        if (cResult[44] === isOptimisticRejected) {
                                          if (cResult[45] === isRejectLoading) {
                                            if (cResult[46] === tmp5.activityIndicator) {
                                              if (cResult[48] === tmp15) {
                                                if (cResult[49] === tmp10) {
                                                  if (cResult[50] === tmp5.actionButton) {
                                                    if (cResult[51] === tmp40) {
                                                      if (cResult[52] === tmp44) {
                                                        let tmp48 = cResult[53];
                                                      }
                                                      if (cResult[54] === tmp5.actionContainer) {
                                                        if (cResult[55] === tmp36) {
                                                          if (cResult[56] === tmp48) {
                                                            let tmp52 = cResult[57];
                                                          }
                                                          if (cResult[58] === tmp5.rowContainer) {
                                                            if (cResult[59] === tmp20) {
                                                              if (cResult[60] === tmp52) {
                                                                let tmp55 = cResult[61];
                                                              }
                                                              if (cResult[62] !== isLastRow) {
                                                                let tmp59 = null;
                                                                if (!isLastRow) {
                                                                  tmp59 = closure_8(goToMessageRequestPreview(tmp2[20]).FormDivider, { iconPush: true, outer: true });
                                                                }
                                                                class V {
                                                                  constructor() {
                                                                    obj = closure_1(closure_2[14]);
                                                                    obj1 = { is_spam: false, channel_id: channel.id, other_user_id: user.id };
                                                                    trackResult = obj.track(AnalyticEvents.MESSAGE_REQUEST_PREVIEW_VIEWED, obj1);
                                                                    tmp2 = goToMessageRequestPreview();
                                                                    return;
                                                                  }
                                                                }
                                                                cResult[63] = tmp59;
                                                                let tmp58 = tmp59;
                                                              } else {
                                                                tmp58 = cResult[63];
                                                              }
                                                              if (cResult[64] === tmp13) {
                                                                if (cResult[65] === tmp12) {
                                                                  if (cResult[66] === tmp5.pressableRow) {
                                                                    if (cResult[67] === tmp55) {
                                                                      if (cResult[68] === tmp58) {
                                                                        let tmp61 = cResult[69];
                                                                      }
                                                                      return tmp61;
                                                                    }
                                                                  }
                                                                }
                                                              }
                                                              class V {
                                                                constructor() {
                                                                  obj = closure_1(closure_2[14]);
                                                                  obj1 = { is_spam: false, channel_id: channel.id, other_user_id: user.id };
                                                                  trackResult = obj.track(AnalyticEvents.MESSAGE_REQUEST_PREVIEW_VIEWED, obj1);
                                                                  tmp2 = goToMessageRequestPreview();
                                                                  return;
                                                                }
                                                              }
                                                              const obj8 = { onPress: tmp12, accessibilityRole: "button", accessibilityActions: tmp16, onAccessibilityAction: tmp13, style: tmp18, children: null };
                                                              const items1 = [tmp55, tmp58];
                                                              obj8.children = items1;
                                                              class P {
                                                                constructor() {
                                                                  tmp = rejectMessageRequest(channel.id);
                                                                  return;
                                                                }
                                                              }
                                                              cResult[64] = tmp13;
                                                              cResult[65] = tmp12;
                                                              cResult[66] = tmp5.pressableRow;
                                                              cResult[67] = tmp55;
                                                              cResult[68] = tmp58;
                                                              cResult[69] = tmp62;
                                                              tmp61 = tmp62;
                                                            }
                                                          }
                                                          class V {
                                                            constructor() {
                                                              obj = closure_1(closure_2[14]);
                                                              obj1 = { is_spam: false, channel_id: channel.id, other_user_id: user.id };
                                                              trackResult = obj.track(AnalyticEvents.MESSAGE_REQUEST_PREVIEW_VIEWED, obj1);
                                                              tmp2 = goToMessageRequestPreview();
                                                              return;
                                                            }
                                                          }
                                                          const obj9 = { style: tmp19, children: null };
                                                          const items2 = [tmp20, tmp52];
                                                          obj9.children = items2;
                                                          const tmp57 = closure_9(acceptMessageRequest, obj9);
                                                          cResult[58] = tmp5.rowContainer;
                                                          class P {
                                                            constructor() {
                                                              tmp = rejectMessageRequest(channel.id);
                                                              return;
                                                            }
                                                          }
                                                          cResult[59] = tmp20;
                                                          cResult[60] = tmp52;
                                                          cResult[61] = tmp57;
                                                          tmp55 = tmp57;
                                                        }
                                                      }
                                                      class V {
                                                        constructor() {
                                                          obj = closure_1(closure_2[14]);
                                                          obj1 = { is_spam: false, channel_id: channel.id, other_user_id: user.id };
                                                          trackResult = obj.track(AnalyticEvents.MESSAGE_REQUEST_PREVIEW_VIEWED, obj1);
                                                          tmp2 = goToMessageRequestPreview();
                                                          return;
                                                        }
                                                      }
                                                      const obj10 = { style: tmp5.actionContainer, children: null };
                                                      const items3 = [tmp36, tmp48];
                                                      obj10.children = items3;
                                                      const tmp54 = closure_9(acceptMessageRequest, obj10);
                                                      cResult[54] = tmp5.actionContainer;
                                                      class P {
                                                        constructor() {
                                                          tmp = rejectMessageRequest(channel.id);
                                                          return;
                                                        }
                                                      }
                                                      cResult[55] = tmp36;
                                                      cResult[56] = tmp48;
                                                      cResult[57] = tmp54;
                                                      tmp52 = tmp54;
                                                    }
                                                  }
                                                }
                                              }
                                              class V {
                                                constructor() {
                                                  obj = closure_1(closure_2[14]);
                                                  obj1 = { is_spam: false, channel_id: channel.id, other_user_id: user.id };
                                                  trackResult = obj.track(AnalyticEvents.MESSAGE_REQUEST_PREVIEW_VIEWED, obj1);
                                                  tmp2 = goToMessageRequestPreview();
                                                  return;
                                                }
                                              }
                                              tmp50[1] = tmp40;
                                              tmp50[2] = tmp10;
                                              tmp50[3] = tmp15;
                                              tmp50[4] = tmp5.actionButton;
                                              tmp50[5] = cResult[47];
                                              const tmp51 = closure_8(goToMessageRequestPreview(tmp2[18]).PressableOpacity, tmp50);
                                              cResult[48] = tmp15;
                                              class P {
                                                constructor() {
                                                  tmp = rejectMessageRequest(channel.id);
                                                  return;
                                                }
                                              }
                                              cResult[50] = tmp5.actionButton;
                                              cResult[51] = tmp40;
                                              cResult[52] = cResult[47];
                                              cResult[53] = tmp51;
                                              tmp48 = tmp51;
                                            }
                                          }
                                        }
                                        class V {
                                          constructor() {
                                            obj = closure_1(closure_2[14]);
                                            obj1 = { is_spam: false, channel_id: channel.id, other_user_id: user.id };
                                            trackResult = obj.track(AnalyticEvents.MESSAGE_REQUEST_PREVIEW_VIEWED, obj1);
                                            tmp2 = goToMessageRequestPreview();
                                            return;
                                          }
                                        }
                                        const obj11 = { style: tmp5.activityIndicator };
                                        closure_8(id, obj11);
                                      }
                                    }
                                  }
                                }
                                class V {
                                  constructor() {
                                    obj = closure_1(closure_2[14]);
                                    obj1 = { is_spam: false, channel_id: channel.id, other_user_id: user.id };
                                    trackResult = obj.track(AnalyticEvents.MESSAGE_REQUEST_PREVIEW_VIEWED, obj1);
                                    tmp2 = goToMessageRequestPreview();
                                    return;
                                  }
                                }
                                tmp38[1] = tmp24;
                                tmp38[2] = tmp11;
                                tmp38[3] = tmp15;
                                tmp38[4] = tmp29;
                                tmp38[5] = cResult[35];
                                const tmp39 = closure_8(goToMessageRequestPreview(tmp2[18]).PressableOpacity, tmp38);
                                cResult[36] = tmp15;
                                class P {
                                  constructor() {
                                    tmp = rejectMessageRequest(channel.id);
                                    return;
                                  }
                                }
                                cResult[38] = tmp24;
                                cResult[39] = tmp29;
                                cResult[40] = cResult[35];
                                cResult[41] = tmp39;
                                tmp36 = tmp39;
                              }
                            }
                          }
                        }
                        if (!isAcceptLoading) {
                          if (!isUserProfileLoading) {
                            if (!isOptimisticAccepted) {
                              const obj12 = { size: null, disableColor: true, source: null };
                              class V {
                                constructor() {
                                  obj = closure_1(closure_2[14]);
                                  obj1 = { is_spam: false, channel_id: channel.id, other_user_id: user.id };
                                  trackResult = obj.track(AnalyticEvents.MESSAGE_REQUEST_PREVIEW_VIEWED, obj1);
                                  tmp2 = goToMessageRequestPreview();
                                  return;
                                }
                              }
                              obj12.source = hasSingleMessageRequest(tmp2[17]);
                              let tmp33 = closure_8(goToMessageRequestPreview(tmp2[16]).Icon, obj12);
                            }
                            cResult[31] = isAcceptLoading;
                            class V {
                              constructor() {
                                obj = closure_1(closure_2[14]);
                                obj1 = { is_spam: false, channel_id: channel.id, other_user_id: user.id };
                                trackResult = obj.track(AnalyticEvents.MESSAGE_REQUEST_PREVIEW_VIEWED, obj1);
                                tmp2 = goToMessageRequestPreview();
                                return;
                              }
                            }
                            cResult[32] = isOptimisticAccepted;
                            cResult[33] = isUserProfileLoading;
                            isUserProfileLoading = tmp5.activityIndicator;
                            cResult[34] = isUserProfileLoading;
                            cResult[35] = tmp33;
                          }
                        }
                        class V {
                          constructor() {
                            obj = closure_1(closure_2[14]);
                            obj1 = { is_spam: false, channel_id: channel.id, other_user_id: user.id };
                            trackResult = obj.track(AnalyticEvents.MESSAGE_REQUEST_PREVIEW_VIEWED, obj1);
                            tmp2 = goToMessageRequestPreview();
                            return;
                          }
                        }
                        const obj13 = { style: tmp5.activityIndicator };
                        tmp33 = closure_8(id, obj13);
                      }
                      const items4 = [tmp5.actionButton, tmp28];
                      cResult[28] = tmp5.actionButton;
                      cResult[29] = tmp28;
                      class P {
                        constructor() {
                          tmp = rejectMessageRequest(channel.id);
                          return;
                        }
                      }
                      tmp29 = items4;
                    }
                  }
                  const obj14 = { channel: null, otherUser: null, isRestricted: null };
                  class P {
                    constructor() {
                      tmp = rejectMessageRequest(channel.id);
                      return;
                    }
                  }
                  obj14.otherUser = messageRequest.user;
                  obj14.isRestricted = tmp4;
                  const tmp23 = closure_8(hasSingleMessageRequest(tmp2[15]), obj14);
                  cResult[22] = tmp4;
                  cResult[23] = messageRequest.channel;
                  cResult[24] = messageRequest.user;
                  cResult[25] = tmp23;
                  tmp20 = tmp23;
                }
              }
              class V {
                constructor() {
                  obj = closure_1(closure_2[14]);
                  obj1 = { is_spam: false, channel_id: channel.id, other_user_id: user.id };
                  trackResult = obj.track(AnalyticEvents.MESSAGE_REQUEST_PREVIEW_VIEWED, obj1);
                  tmp2 = goToMessageRequestPreview();
                  return;
                }
              }
              cResult[17] = tmp11;
              cResult[18] = tmp10;
              cResult[19] = tmp12;
              cResult[20] = tmp14;
              tmp13 = tmp14;
            }
          }
          class V {
            constructor() {
              obj = closure_1(closure_2[14]);
              obj1 = { is_spam: false, channel_id: channel.id, other_user_id: user.id };
              trackResult = obj.track(AnalyticEvents.MESSAGE_REQUEST_PREVIEW_VIEWED, obj1);
              tmp2 = goToMessageRequestPreview();
              return;
            }
          }
          cResult[13] = channel.id;
          cResult[14] = goToMessageRequestPreview;
          cResult[15] = str.id;
          cResult[16] = V;
          tmp12 = V;
        }
        class D {
          constructor() {
            tmp = acceptMessageRequest(channel.id);
            return;
          }
        }
        cResult[10] = acceptMessageRequest;
        cResult[11] = channel.id;
        cResult[12] = D;
        tmp11 = D;
      }
      class P {
        constructor() {
          tmp = rejectMessageRequest(channel.id);
          return;
        }
      }
      cResult[7] = channel.id;
      cResult[8] = rejectMessageRequest;
      cResult[9] = P;
      tmp10 = P;
      const tmpResult = goToMessageRequestPreview(tmp2[13]);
    }
    const obj15 = { user: null, onAcceptSuccess: tmp7, onError: first };
    cResult[4] = tmp7;
    cResult[5] = str;
    cResult[6] = obj15;
    tmp8 = obj15;
  }
  class I {
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
  cResult[3] = I;
  tmp7 = I;
  let obj = goToMessageRequestPreview(str[8]);
}) : ((isRestricted) => {
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
  obj2.onAccessibilityAction = function onAccessibilityAction(nativeEvent) {
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

export default ReactCompilerGating.isReactCompilerEnabled() ? ((goToMessageRequestPreview) => {
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
    const _Symbol = Symbol;
    if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
      let obj4 = { bodyText: null };
      let intl = tmp(tmp2[6]).intl;
      obj4.bodyText = intl.string(tmp(tmp2[6]).t.SXrqTf);
      const tmp29 = closure_8(tmp5(tmp2[25]), obj4);
      cResult[0] = tmp29;
      let first = tmp29;
      const tmp5Result = tmp5(tmp2[25]);
    } else {
      first = cResult[0];
    }
    return first;
  } else {
    if (cResult[1] !== arr) {
      const items = [];
      class T {
        constructor(arg0) {
          item = goToMessageRequestPreview.item;
          if (typeof item === "string") {
            tmp6 = closure_1_8;
            tmp7 = closure_1_5;
            obj1 = { style: null, children: null };
            tmp8 = closure_1;
            obj1.style = closure_1.sectionContainer;
            tmp9 = closure_1_8;
            tmp10 = goToMessageRequestPreview;
            tmp11 = closure_2;
            obj5 = { variant: "eyebrow", color: "text-default", children: null };
            intl = goToMessageRequestPreview(closure_2[6]).intl;
            obj6 = { pendingRequestNumber: null };
            tmp12 = closure_2;
            obj6.pendingRequestNumber = closure_2.length;
            obj5.children = intl.format(goToMessageRequestPreview(closure_2[6]).t.evH4Yb, obj6);
            obj1.children = closure_1_8(goToMessageRequestPreview(closure_2[26]).Text, obj5);
            return closure_1_8(closure_1_5, obj1);
          } else {
            tmp13 = closure_2;
            num = 1;
            tmp14 = closure_2[closure_2.length - 1];
            tmp15 = null;
            id = undefined;
            if (tmp14 != null) {
              id = tmp14.channel.id;
            }
            tmp2 = closure_1_8;
            tmp3 = closure_1_13;
            obj = { messageRequest: null, goToMessageRequestPreview: null, isLastRow: null, hasSingleMessageRequest: null, isRestricted: null };
            obj.messageRequest = item;
            obj.goToMessageRequestPreview = function goToMessageRequestPreview() { ... };
            obj.isLastRow = item.channel.id === id;
            tmp4 = closure_3;
            obj.hasSingleMessageRequest = closure_3;
            tmp5 = closure_4;
            obj.isRestricted = closure_4;
            return closure_1_8(closure_1_13, obj, item.channel.id);
          }
        }
      }
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
              tmp(tmp2[27]);
              class T {
                constructor(arg0) {
                  item = goToMessageRequestPreview.item;
                  if (typeof item === "string") {
                    tmp6 = closure_1_8;
                    tmp7 = closure_1_5;
                    obj1 = { style: null, children: null };
                    tmp8 = closure_1;
                    obj1.style = closure_1.sectionContainer;
                    tmp9 = closure_1_8;
                    tmp10 = goToMessageRequestPreview;
                    tmp11 = closure_2;
                    obj5 = { variant: "eyebrow", color: "text-default", children: null };
                    intl = goToMessageRequestPreview(closure_2[6]).intl;
                    obj6 = { pendingRequestNumber: null };
                    tmp12 = closure_2;
                    obj6.pendingRequestNumber = closure_2.length;
                    obj5.children = intl.format(goToMessageRequestPreview(closure_2[6]).t.evH4Yb, obj6);
                    obj1.children = closure_1_8(goToMessageRequestPreview(closure_2[26]).Text, obj5);
                    return closure_1_8(closure_1_5, obj1);
                  } else {
                    tmp13 = closure_2;
                    num = 1;
                    tmp14 = closure_2[closure_2.length - 1];
                    tmp15 = null;
                    id = undefined;
                    if (tmp14 != null) {
                      id = tmp14.channel.id;
                    }
                    tmp2 = closure_1_8;
                    tmp3 = closure_1_13;
                    obj = { messageRequest: null, goToMessageRequestPreview: null, isLastRow: null, hasSingleMessageRequest: null, isRestricted: null };
                    obj.messageRequest = item;
                    obj.goToMessageRequestPreview = function goToMessageRequestPreview() { ... };
                    obj.isLastRow = item.channel.id === id;
                    tmp4 = closure_3;
                    obj.hasSingleMessageRequest = closure_3;
                    tmp5 = closure_4;
                    obj.isRestricted = closure_4;
                    return closure_1_8(closure_1_13, obj, item.channel.id);
                  }
                }
              }
              cResult[9] = bottom;
              cResult[10] = 0;
            }
            class T {
              constructor(arg0) {
                item = goToMessageRequestPreview.item;
                if (typeof item === "string") {
                  tmp6 = closure_1_8;
                  tmp7 = closure_1_5;
                  obj1 = { style: null, children: null };
                  tmp8 = closure_1;
                  obj1.style = closure_1.sectionContainer;
                  tmp9 = closure_1_8;
                  tmp10 = goToMessageRequestPreview;
                  tmp11 = closure_2;
                  obj5 = { variant: "eyebrow", color: "text-default", children: null };
                  intl = goToMessageRequestPreview(closure_2[6]).intl;
                  obj6 = { pendingRequestNumber: null };
                  tmp12 = closure_2;
                  obj6.pendingRequestNumber = closure_2.length;
                  obj5.children = intl.format(goToMessageRequestPreview(closure_2[6]).t.evH4Yb, obj6);
                  obj1.children = closure_1_8(goToMessageRequestPreview(closure_2[26]).Text, obj5);
                  return closure_1_8(closure_1_5, obj1);
                } else {
                  tmp13 = closure_2;
                  num = 1;
                  tmp14 = closure_2[closure_2.length - 1];
                  tmp15 = null;
                  id = undefined;
                  if (tmp14 != null) {
                    id = tmp14.channel.id;
                  }
                  tmp2 = closure_1_8;
                  tmp3 = closure_1_13;
                  obj = { messageRequest: null, goToMessageRequestPreview: null, isLastRow: null, hasSingleMessageRequest: null, isRestricted: null };
                  obj.messageRequest = item;
                  obj.goToMessageRequestPreview = function goToMessageRequestPreview() { ... };
                  obj.isLastRow = item.channel.id === id;
                  tmp4 = closure_3;
                  obj.hasSingleMessageRequest = closure_3;
                  tmp5 = closure_4;
                  obj.isRestricted = closure_4;
                  return closure_1_8(closure_1_13, obj, item.channel.id);
                }
              }
            }
            if (cResult[13] === tmp4.list) {
              if (cResult[14] === tmp16) {
                let tmp17 = cResult[15];
              }
              class T {
                constructor(arg0) {
                  item = goToMessageRequestPreview.item;
                  if (typeof item === "string") {
                    tmp6 = closure_1_8;
                    tmp7 = closure_1_5;
                    obj1 = { style: null, children: null };
                    tmp8 = closure_1;
                    obj1.style = closure_1.sectionContainer;
                    tmp9 = closure_1_8;
                    tmp10 = goToMessageRequestPreview;
                    tmp11 = closure_2;
                    obj5 = { variant: "eyebrow", color: "text-default", children: null };
                    intl = goToMessageRequestPreview(closure_2[6]).intl;
                    obj6 = { pendingRequestNumber: null };
                    tmp12 = closure_2;
                    obj6.pendingRequestNumber = closure_2.length;
                    obj5.children = intl.format(goToMessageRequestPreview(closure_2[6]).t.evH4Yb, obj6);
                    obj1.children = closure_1_8(goToMessageRequestPreview(closure_2[26]).Text, obj5);
                    return closure_1_8(closure_1_5, obj1);
                  } else {
                    tmp13 = closure_2;
                    num = 1;
                    tmp14 = closure_2[closure_2.length - 1];
                    tmp15 = null;
                    id = undefined;
                    if (tmp14 != null) {
                      id = tmp14.channel.id;
                    }
                    tmp2 = closure_1_8;
                    tmp3 = closure_1_13;
                    obj = { messageRequest: null, goToMessageRequestPreview: null, isLastRow: null, hasSingleMessageRequest: null, isRestricted: null };
                    obj.messageRequest = item;
                    obj.goToMessageRequestPreview = function goToMessageRequestPreview() { ... };
                    obj.isLastRow = item.channel.id === id;
                    tmp4 = closure_3;
                    obj.hasSingleMessageRequest = closure_3;
                    tmp5 = closure_4;
                    obj.isRestricted = closure_4;
                    return closure_1_8(closure_1_13, obj, item.channel.id);
                  }
                }
              }
              if (cResult[16] === Symbol.for("react.memo_cache_sentinel")) {
                class T {
                  constructor(arg0) {
                    item = goToMessageRequestPreview.item;
                    if (typeof item === "string") {
                      tmp6 = closure_1_8;
                      tmp7 = closure_1_5;
                      obj1 = { style: null, children: null };
                      tmp8 = closure_1;
                      obj1.style = closure_1.sectionContainer;
                      tmp9 = closure_1_8;
                      tmp10 = goToMessageRequestPreview;
                      tmp11 = closure_2;
                      obj5 = { variant: "eyebrow", color: "text-default", children: null };
                      intl = goToMessageRequestPreview(closure_2[6]).intl;
                      obj6 = { pendingRequestNumber: null };
                      tmp12 = closure_2;
                      obj6.pendingRequestNumber = closure_2.length;
                      obj5.children = intl.format(goToMessageRequestPreview(closure_2[6]).t.evH4Yb, obj6);
                      obj1.children = closure_1_8(goToMessageRequestPreview(closure_2[26]).Text, obj5);
                      return closure_1_8(closure_1_5, obj1);
                    } else {
                      tmp13 = closure_2;
                      num = 1;
                      tmp14 = closure_2[closure_2.length - 1];
                      tmp15 = null;
                      id = undefined;
                      if (tmp14 != null) {
                        id = tmp14.channel.id;
                      }
                      tmp2 = closure_1_8;
                      tmp3 = closure_1_13;
                      obj = { messageRequest: null, goToMessageRequestPreview: null, isLastRow: null, hasSingleMessageRequest: null, isRestricted: null };
                      obj.messageRequest = item;
                      obj.goToMessageRequestPreview = function goToMessageRequestPreview() { ... };
                      obj.isLastRow = item.channel.id === id;
                      tmp4 = closure_3;
                      obj.hasSingleMessageRequest = closure_3;
                      tmp5 = closure_4;
                      obj.isRestricted = closure_4;
                      return closure_1_8(closure_1_13, obj, item.channel.id);
                    }
                  }
                }
                let tmp19 = { right: 0.01 };
                const obj5 = { right: 0.01 };
              } else {
                tmp19 = cResult[16];
              }
              if (cResult[17] !== bottom) {
                const obj6 = { paddingBottom: bottom, paddingTop: 12 };
                class T {
                  constructor(arg0) {
                    item = goToMessageRequestPreview.item;
                    if (typeof item === "string") {
                      tmp6 = closure_1_8;
                      tmp7 = closure_1_5;
                      obj1 = { style: null, children: null };
                      tmp8 = closure_1;
                      obj1.style = closure_1.sectionContainer;
                      tmp9 = closure_1_8;
                      tmp10 = goToMessageRequestPreview;
                      tmp11 = closure_2;
                      obj5 = { variant: "eyebrow", color: "text-default", children: null };
                      intl = goToMessageRequestPreview(closure_2[6]).intl;
                      obj6 = { pendingRequestNumber: null };
                      tmp12 = closure_2;
                      obj6.pendingRequestNumber = closure_2.length;
                      obj5.children = intl.format(goToMessageRequestPreview(closure_2[6]).t.evH4Yb, obj6);
                      obj1.children = closure_1_8(goToMessageRequestPreview(closure_2[26]).Text, obj5);
                      return closure_1_8(closure_1_5, obj1);
                    } else {
                      tmp13 = closure_2;
                      num = 1;
                      tmp14 = closure_2[closure_2.length - 1];
                      tmp15 = null;
                      id = undefined;
                      if (tmp14 != null) {
                        id = tmp14.channel.id;
                      }
                      tmp2 = closure_1_8;
                      tmp3 = closure_1_13;
                      obj = { messageRequest: null, goToMessageRequestPreview: null, isLastRow: null, hasSingleMessageRequest: null, isRestricted: null };
                      obj.messageRequest = item;
                      obj.goToMessageRequestPreview = function goToMessageRequestPreview() { ... };
                      obj.isLastRow = item.channel.id === id;
                      tmp4 = closure_3;
                      obj.hasSingleMessageRequest = closure_3;
                      tmp5 = closure_4;
                      obj.isRestricted = closure_4;
                      return closure_1_8(closure_1_13, obj, item.channel.id);
                    }
                  }
                }
                cResult[17] = bottom;
                cResult[18] = obj6;
                let tmp20 = obj6;
              } else {
                tmp20 = cResult[18];
              }
              if (cResult[19] === tmp8) {
                if (cResult[20] === tmp13) {
                  if (cResult[21] === tmp17) {
                    if (cResult[22] === tmp20) {
                      let tmp21 = cResult[23];
                    }
                    return tmp21;
                  }
                }
              }
              const obj7 = { style: tmp17, scrollIndicatorInsets: tmp19, contentContainerStyle: tmp20, renderItem: tmp13, data: tmp8 };
              const tmp24 = closure_8(closure_6, obj7);
              cResult[19] = tmp8;
              cResult[20] = tmp13;
              cResult[21] = tmp17;
              cResult[22] = tmp20;
              cResult[23] = tmp24;
              tmp21 = tmp24;
            }
            const items1 = [tmp4.list, tmp16];
            cResult[13] = tmp4.list;
            cResult[14] = tmp16;
            cResult[15] = items1;
            tmp17 = items1;
          }
        }
      }
    }
    class T {
      constructor(arg0) {
        item = goToMessageRequestPreview.item;
        if (typeof item === "string") {
          tmp6 = closure_1_8;
          tmp7 = closure_1_5;
          obj1 = { style: null, children: null };
          tmp8 = closure_1;
          obj1.style = closure_1.sectionContainer;
          tmp9 = closure_1_8;
          tmp10 = goToMessageRequestPreview;
          tmp11 = closure_2;
          obj5 = { variant: "eyebrow", color: "text-default", children: null };
          intl = goToMessageRequestPreview(closure_2[6]).intl;
          obj6 = { pendingRequestNumber: null };
          tmp12 = closure_2;
          obj6.pendingRequestNumber = closure_2.length;
          obj5.children = intl.format(goToMessageRequestPreview(closure_2[6]).t.evH4Yb, obj6);
          obj1.children = closure_1_8(goToMessageRequestPreview(closure_2[26]).Text, obj5);
          return closure_1_8(closure_1_5, obj1);
        } else {
          tmp13 = closure_2;
          num = 1;
          tmp14 = closure_2[closure_2.length - 1];
          tmp15 = null;
          id = undefined;
          if (tmp14 != null) {
            id = tmp14.channel.id;
          }
          tmp2 = closure_1_8;
          tmp3 = closure_1_13;
          obj = { messageRequest: null, goToMessageRequestPreview: null, isLastRow: null, hasSingleMessageRequest: null, isRestricted: null };
          obj.messageRequest = item;
          obj.goToMessageRequestPreview = function goToMessageRequestPreview() { ... };
          obj.isLastRow = item.channel.id === id;
          tmp4 = closure_3;
          obj.hasSingleMessageRequest = closure_3;
          tmp5 = closure_4;
          obj.isRestricted = closure_4;
          return closure_1_8(closure_1_13, obj, item.channel.id);
        }
      }
    }
    cResult[3] = goToMessageRequestPreview;
    cResult[4] = listHasSingleMessageRequest;
    cResult[5] = isMessageRequestRestrictedViewer;
    cResult[6] = arr;
    cResult[7] = tmp4.sectionContainer;
    cResult[8] = T;
    tmp13 = T;
  }
  let obj3 = goToMessageRequestPreview(arr[24]);
}) : ((goToMessageRequestPreview) => {
  goToMessageRequestPreview = goToMessageRequestPreview.goToMessageRequestPreview;
  let arr;
  const tmp = closure_11();
  importDefault = tmp;
  const bottom = require("useSafeAreaInsets")().bottom;
  arr = require("useSortedMessageRequests")();
  hasSingleMessageRequest = goToMessageRequestPreview(arr[23]).useListHasSingleMessageRequest();
  let obj = goToMessageRequestPreview(arr[23]);
  const tmp2 = importDefault;
  isRestricted = goToMessageRequestPreview(arr[24]).useIsMessageRequestRestrictedViewer();
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
    obj4.renderItem = function renderItem(item) {
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