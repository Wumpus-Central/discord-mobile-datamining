// discord_app/modules/message_request/native/MessageRequestList.tsx
import nativeDefault from "../../../../discord_common/js/packages/tokens/native.tsx";
import Constants from "../../../Constants.tsx";
import AnalyticsUtilsDefault from "../../../utils/AnalyticsUtils.tsx";
import transitionToChannel from "../../routing/transitionToChannel.tsx";
import ModalActionCreatorsDefault from "../../../actions/ModalActionCreators.tsx";
import react from "../../../../_runtime/00019_react.js";
import react_native from "../../../../_runtime/00017_react-native.js";
import Fragment from "../../../../_runtime/react/00021_Fragment.js";
import createStyles_mod from "../../../design/components/Styles/native/createStyles.tsx";
import ReactCompilerGating_mod from "../../react_compiler/ReactCompilerGating.tsx";
import size_mod from "../../../../_runtime/metro/00002__.js";

const require = globalThis.__r;
let hasSingleMessageRequest, importDefault, isRestricted, obj1, tmp15, tmp4;

let c9;
let closure_4;
let hasOwnProperty;
let metroImportAll;
let metroRequire;
let obj2;
let obj3;
let obj4;
let size;
({ ActivityIndicator: closure_4, View: hasOwnProperty, FlatList: metroRequire } = react_native);
const AnalyticEvents = Constants.AnalyticEvents;
({ jsx: metroImportAll, jsxs: c9 } = Fragment);
let c10 = "header-section";
let createStyles = createStyles_mod;
let obj = {
  sectionContainer: obj2,
  rowContainer: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    marginTop: 14,
    marginBottom: 12,
  },
  actionContainer: { flexDirection: "row", alignItems: "flex-start", height: "100%" },
  actionButton: size,
  acceptButton: { marginRight: 16 },
  acceptButtonRestricted: { marginRight: 12 },
  pressableRow: obj3,
  activityIndicator: { height: 16, width: 16 },
  list: obj4,
};
obj2 = {
  backgroundColor: nativeDefault.colors.BACKGROUND_BASE_LOW,
  flexDirection: "row",
  justifyContent: "space-between",
  marginTop: 6,
  marginBottom: 10,
};
createStyles = createStyles.createStyles;
size = {
  backgroundColor: nativeDefault.colors.BACKGROUND_SURFACE_HIGH,
  tintColor: nativeDefault.colors.INTERACTIVE_TEXT_DEFAULT,
  borderRadius: nativeDefault.radii.lg,
  alignItems: "center",
  justifyContent: "center",
  height: 32,
  width: 32,
};
obj3 = { borderRadius: nativeDefault.radii.md };
obj4 = {
  flex: 1,
  paddingHorizontal: 16,
  alignSelf: "stretch",
  backgroundColor: nativeDefault.colors.BACKGROUND_BASE_LOW,
};
let closure_11 = createStyles(obj);
const constants = {
  ACCEPT_MESSAGE_REQUEST: "accept-message-request",
  IGNORE_MESSAGE_REQUEST: "ignore-message-request",
  PREVIEW_MESSAGE_REQUEST: "preview-message-request",
};
let ReactCompilerGating = ReactCompilerGating_mod;
let closure_13 = ReactCompilerGating.isReactCompilerEnabled()
  ? (isRestricted) => {
      let first;
      let goToMessageRequestPreview;
      let intl;
      let intl2;
      let isAcceptLoading;
      let isLastRow;
      let isOptimisticAccepted;
      let isOptimisticRejected;
      let isRejectLoading;
      let isUserProfileLoading;
      let items2;
      let items3;
      let messageRequest;
      let str;
      let obj = goToMessageRequestPreview(str[8]);
      const cResult = obj.c(70);
      ({ messageRequest, goToMessageRequestPreview } = isRestricted);
      ({ isLastRow, hasSingleMessageRequest } = isRestricted);
      isRestricted = isRestricted.isRestricted;
      const tmp5 = closure_11();
      str = messageRequest.user;
      const channel = messageRequest.channel;
      const id = channel.id;
      if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
        const fn = function n() {
          let intl;
          const obj = {
            key: "MESSAGE_REQUEST_REQUEST_ERROR_ALERT_TITLE",
            content: intl.string(goToMessageRequestPreview(str[6]).t["EDYbS+"]),
            icon: hasSingleMessageRequest(str[10]),
          };
          const open = hasSingleMessageRequest(str[9]).open;
          hasSingleMessageRequest(str[9]);
          intl = goToMessageRequestPreview(str[6]).intl;
          open(obj);
        };
        cResult[0] = fn;
        first = fn;
      } else {
        first = cResult[0];
      }
      if (cResult[1] === id) {
        let tmp7;
        if (cResult[2] === hasSingleMessageRequest) {
          tmp7 = cResult[3];
        }
        if (cResult[4] === tmp7) {
          let tmp8;
          if (cResult[5] === str) {
            tmp8 = cResult[6];
          }
          const tmpResult = goToMessageRequestPreview(str[13]);
          const messageRequestActions = tmpResult.useMessageRequestActions(tmp8);
          const acceptMessageRequest = messageRequestActions.acceptMessageRequest;
          const rejectMessageRequest = messageRequestActions.rejectMessageRequest;
          ({ isAcceptLoading, isRejectLoading, isUserProfileLoading, isOptimisticAccepted, isOptimisticRejected } =
            messageRequestActions);
          if (cResult[7] === channel.id) {
            let tmp10;
            if (cResult[8] === rejectMessageRequest) {
              tmp10 = cResult[9];
            }
            let closure_7 = tmp10;
            if (cResult[10] === acceptMessageRequest) {
              let tmp11;
              if (cResult[11] === channel.id) {
                tmp11 = cResult[12];
              }
              let closure_8 = tmp11;
              if (cResult[13] === channel.id) {
                if (cResult[14] === goToMessageRequestPreview) {
                  let tmp12;
                  if (cResult[15] === str.id) {
                    tmp12 = cResult[16];
                  }
                  let closure_9 = tmp12;
                  if (cResult[17] === tmp11) {
                    if (cResult[18] === tmp10) {
                      let tmp13;
                      if (cResult[19] === tmp12) {
                        tmp13 = cResult[20];
                      }
                      const _Symbol = Symbol;
                      class V {
                        constructor() {
                          const obj = AnalyticsUtilsDefault;
                          const obj2 = { is_spam: false, channel_id: channel.id, other_user_id: str.id };
                          obj.track(AnalyticEvents.MESSAGE_REQUEST_PREVIEW_VIEWED, obj2);
                          goToMessageRequestPreview();
                        }
                      }
                      if (tmp16 === Symbol.for("react.memo_cache_sentinel")) {
                        let obj2 = {
                          name: constants.ACCEPT_MESSAGE_REQUEST,
                          label: obj5.string(goToMessageRequestPreview(tmp2[6]).t.hSLLWi),
                        };
                        class V {
                          constructor() {
                            const obj = AnalyticsUtilsDefault;
                            const obj2 = { is_spam: false, channel_id: channel.id, other_user_id: str.id };
                            obj.track(AnalyticEvents.MESSAGE_REQUEST_PREVIEW_VIEWED, obj2);
                            goToMessageRequestPreview();
                          }
                        }
                        const items = [obj2, ,];
                        ({
                          name: constants.IGNORE_MESSAGE_REQUEST,
                          label: intl.string(goToMessageRequestPreview(str[6]).t.fIBuSD),
                        });
                        intl = goToMessageRequestPreview(tmp2[6]).intl;
                        class P {
                          constructor() {
                            rejectMessageRequest(channel.id);
                          }
                        }
                        const obj4 = {
                          name: constants.PREVIEW_MESSAGE_REQUEST,
                          label: intl2.string(goToMessageRequestPreview(str[6]).t.HjgsKJ),
                        };
                        intl2 = goToMessageRequestPreview(tmp2[6]).intl;
                        items[2] = obj4;
                        cResult[21] = items;
                      }
                      if (cResult[22] === (undefined !== isRestricted && isRestricted)) {
                        if (cResult[23] === messageRequest.channel) {
                          let tmp21;
                          if (cResult[24] === messageRequest.user) {
                            tmp21 = cResult[25];
                          }
                          const actionContainer = tmp5.actionContainer;
                          if (cResult[26] !== str) {
                            let str1;
                            const intl3 = goToMessageRequestPreview(tmp2[6]).intl;
                            const formatToPlainString = intl3.formatToPlainString;
                            class V {
                              constructor() {
                                const obj = AnalyticsUtilsDefault;
                                const obj2 = { is_spam: false, channel_id: channel.id, other_user_id: str.id };
                                obj.track(AnalyticEvents.MESSAGE_REQUEST_PREVIEW_VIEWED, obj2);
                                goToMessageRequestPreview();
                              }
                            }
                            const v6p0yBo = goToMessageRequestPreview(tmp2[6]).t["6p0yBo"];
                            if (str != null) {
                              str1 = str.toString();
                            }
                            const obj6 = { name: str1 };
                            cResult[26] = str;
                            cResult[27] = formatToPlainString(v6p0yBo, obj6);
                            formatToPlainString(v6p0yBo, obj6);
                            class P {
                              constructor() {
                                rejectMessageRequest(channel.id);
                              }
                            }
                          }
                          class V {
                            constructor() {
                              const obj = AnalyticsUtilsDefault;
                              const obj2 = { is_spam: false, channel_id: channel.id, other_user_id: str.id };
                              obj.track(AnalyticEvents.MESSAGE_REQUEST_PREVIEW_VIEWED, obj2);
                              goToMessageRequestPreview();
                            }
                          }
                          if (cResult[28] === tmp5.actionButton) {
                            let tmp31;
                            let tmp32;
                            if (cResult[29] === tmp30) {
                              tmp31 = cResult[30];
                            }
                            if (cResult[31] === isAcceptLoading) {
                              if (cResult[32] === isOptimisticAccepted) {
                                if (cResult[33] === isUserProfileLoading) {
                                  if (cResult[34] === tmp5.activityIndicator) {
                                    tmp32 = cResult[35];
                                  }
                                  if (
                                    cResult[36] ===
                                    (isAcceptLoading ||
                                      isRejectLoading ||
                                      isUserProfileLoading ||
                                      isOptimisticAccepted ||
                                      isOptimisticRejected)
                                  ) {
                                    if (cResult[37] === tmp11) {
                                      if (cResult[38] === tmp25) {
                                        if (cResult[39] === tmp31) {
                                          let tmp37;
                                          if (cResult[40] === tmp32) {
                                            tmp37 = cResult[41];
                                          }
                                          if (cResult[42] !== str) {
                                            let str2;
                                            const intl4 = goToMessageRequestPreview(tmp2[6]).intl;
                                            const formatToPlainString2 = intl4.formatToPlainString;
                                            class V {
                                              constructor() {
                                                const obj = AnalyticsUtilsDefault;
                                                const obj2 = {
                                                  is_spam: false,
                                                  channel_id: channel.id,
                                                  other_user_id: str.id,
                                                };
                                                obj.track(AnalyticEvents.MESSAGE_REQUEST_PREVIEW_VIEWED, obj2);
                                                goToMessageRequestPreview();
                                              }
                                            }
                                            const prop = goToMessageRequestPreview(tmp2[6]).t["C9Xe6+"];
                                            if (str != null) {
                                              str2 = str.toString();
                                            }
                                            const obj7 = { name: str2 };
                                            cResult[42] = str;
                                            cResult[43] = formatToPlainString2(prop, obj7);
                                            formatToPlainString2(prop, obj7);
                                            class P {
                                              constructor() {
                                                rejectMessageRequest(channel.id);
                                              }
                                            }
                                          }
                                          if (cResult[44] === isOptimisticRejected) {
                                            if (cResult[45] === isRejectLoading) {
                                              if (
                                                cResult[48] ===
                                                (isAcceptLoading ||
                                                  isRejectLoading ||
                                                  isUserProfileLoading ||
                                                  isOptimisticAccepted ||
                                                  isOptimisticRejected)
                                              ) {
                                                if (cResult[49] === tmp10) {
                                                  if (cResult[50] === tmp5.actionButton) {
                                                    if (cResult[51] === tmp41) {
                                                      let tmp50;
                                                      if (cResult[52] === tmp46) {
                                                        tmp50 = cResult[53];
                                                      }
                                                      if (cResult[54] === tmp5.actionContainer) {
                                                        if (cResult[55] === tmp37) {
                                                          let tmp54;
                                                          if (cResult[56] === tmp50) {
                                                            tmp54 = cResult[57];
                                                          }
                                                          if (cResult[58] === tmp5.rowContainer) {
                                                            if (cResult[59] === tmp21) {
                                                              let tmp57;
                                                              let tmp60;
                                                              if (cResult[60] === tmp54) {
                                                                tmp57 = cResult[61];
                                                              }
                                                              if (cResult[62] !== isLastRow) {
                                                                let tmp61 = null;
                                                                if (!isLastRow) {
                                                                  tmp61 = closure_8(
                                                                    goToMessageRequestPreview(tmp2[20]).FormDivider,
                                                                    { iconPush: true, outer: true },
                                                                  );
                                                                }
                                                                class V {
                                                                  constructor() {
                                                                    const obj = AnalyticsUtilsDefault;
                                                                    const obj2 = {
                                                                      is_spam: false,
                                                                      channel_id: channel.id,
                                                                      other_user_id: str.id,
                                                                    };
                                                                    obj.track(
                                                                      AnalyticEvents.MESSAGE_REQUEST_PREVIEW_VIEWED,
                                                                      obj2,
                                                                    );
                                                                    goToMessageRequestPreview();
                                                                  }
                                                                }
                                                                cResult[63] = tmp61;
                                                                tmp60 = tmp61;
                                                              } else {
                                                                tmp60 = cResult[63];
                                                              }
                                                              if (cResult[64] === tmp13) {
                                                                if (cResult[65] === tmp12) {
                                                                  if (cResult[66] === tmp5.pressableRow) {
                                                                    if (cResult[67] === tmp57) {
                                                                      let tmp63;
                                                                      if (cResult[68] === tmp60) {
                                                                        tmp63 = cResult[69];
                                                                      }
                                                                      return tmp63;
                                                                    }
                                                                  }
                                                                }
                                                              }
                                                              class V {
                                                                constructor() {
                                                                  const obj = AnalyticsUtilsDefault;
                                                                  const obj2 = {
                                                                    is_spam: false,
                                                                    channel_id: channel.id,
                                                                    other_user_id: str.id,
                                                                  };
                                                                  obj.track(
                                                                    AnalyticEvents.MESSAGE_REQUEST_PREVIEW_VIEWED,
                                                                    obj2,
                                                                  );
                                                                  goToMessageRequestPreview();
                                                                }
                                                              }
                                                              const items1 = [tmp57, tmp60];
                                                              class P {
                                                                constructor() {
                                                                  rejectMessageRequest(channel.id);
                                                                }
                                                              }
                                                              cResult[64] = tmp13;
                                                              cResult[65] = tmp12;
                                                              cResult[66] = tmp5.pressableRow;
                                                              cResult[67] = tmp57;
                                                              cResult[68] = tmp60;
                                                              cResult[69] = tmp64;
                                                              tmp63 = tmp64;
                                                            }
                                                          }
                                                          class V {
                                                            constructor() {
                                                              const obj = AnalyticsUtilsDefault;
                                                              const obj2 = {
                                                                is_spam: false,
                                                                channel_id: channel.id,
                                                                other_user_id: str.id,
                                                              };
                                                              obj.track(
                                                                AnalyticEvents.MESSAGE_REQUEST_PREVIEW_VIEWED,
                                                                obj2,
                                                              );
                                                              goToMessageRequestPreview();
                                                            }
                                                          }
                                                          const obj10 = { style: tmp20, children: items2 };
                                                          items2 = [tmp21, tmp54];
                                                          const tmp59 = closure_9(acceptMessageRequest, obj10);
                                                          cResult[58] = tmp5.rowContainer;
                                                          class P {
                                                            constructor() {
                                                              rejectMessageRequest(channel.id);
                                                            }
                                                          }
                                                          cResult[59] = tmp21;
                                                          cResult[60] = tmp54;
                                                          cResult[61] = tmp59;
                                                          tmp57 = tmp59;
                                                        }
                                                      }
                                                      class V {
                                                        constructor() {
                                                          const obj = AnalyticsUtilsDefault;
                                                          const obj2 = {
                                                            is_spam: false,
                                                            channel_id: channel.id,
                                                            other_user_id: str.id,
                                                          };
                                                          obj.track(
                                                            AnalyticEvents.MESSAGE_REQUEST_PREVIEW_VIEWED,
                                                            obj2,
                                                          );
                                                          goToMessageRequestPreview();
                                                        }
                                                      }
                                                      const obj11 = { style: actionContainer, children: items3 };
                                                      items3 = [tmp37, tmp50];
                                                      const tmp56 = closure_9(acceptMessageRequest, obj11);
                                                      cResult[54] = tmp5.actionContainer;
                                                      class P {
                                                        constructor() {
                                                          rejectMessageRequest(channel.id);
                                                        }
                                                      }
                                                      cResult[55] = tmp37;
                                                      cResult[56] = tmp50;
                                                      cResult[57] = tmp56;
                                                      tmp54 = tmp56;
                                                    }
                                                  }
                                                }
                                              }
                                              class V {
                                                constructor() {
                                                  const obj = AnalyticsUtilsDefault;
                                                  const obj2 = {
                                                    is_spam: false,
                                                    channel_id: channel.id,
                                                    other_user_id: str.id,
                                                  };
                                                  obj.track(AnalyticEvents.MESSAGE_REQUEST_PREVIEW_VIEWED, obj2);
                                                  goToMessageRequestPreview();
                                                }
                                              }
                                              tmp52[1] = tmp41;
                                              tmp52[2] = tmp10;
                                              tmp52[3] =
                                                isAcceptLoading ||
                                                isRejectLoading ||
                                                isUserProfileLoading ||
                                                isOptimisticAccepted ||
                                                isOptimisticRejected;
                                              tmp52[4] = tmp5.actionButton;
                                              tmp52[5] = tmp46;
                                              const tmp53 = closure_8(
                                                goToMessageRequestPreview(str[18]).PressableOpacity,
                                                tmp52,
                                              );
                                              cResult[48] =
                                                isAcceptLoading ||
                                                isRejectLoading ||
                                                isUserProfileLoading ||
                                                isOptimisticAccepted ||
                                                isOptimisticRejected;
                                              class P {
                                                constructor() {
                                                  rejectMessageRequest(channel.id);
                                                }
                                              }
                                              cResult[50] = tmp5.actionButton;
                                              cResult[51] = tmp41;
                                              cResult[52] = tmp46;
                                              cResult[53] = tmp53;
                                              tmp50 = tmp53;
                                            }
                                          }
                                          class V {
                                            constructor() {
                                              const obj = AnalyticsUtilsDefault;
                                              const obj2 = {
                                                is_spam: false,
                                                channel_id: channel.id,
                                                other_user_id: str.id,
                                              };
                                              obj.track(AnalyticEvents.MESSAGE_REQUEST_PREVIEW_VIEWED, obj2);
                                              goToMessageRequestPreview();
                                            }
                                          }
                                          const obj12 = { style: tmp5.activityIndicator };
                                          closure_8(id, obj12);
                                        }
                                      }
                                    }
                                  }
                                  class V {
                                    constructor() {
                                      const obj = AnalyticsUtilsDefault;
                                      const obj2 = { is_spam: false, channel_id: channel.id, other_user_id: str.id };
                                      obj.track(AnalyticEvents.MESSAGE_REQUEST_PREVIEW_VIEWED, obj2);
                                      goToMessageRequestPreview();
                                    }
                                  }
                                  tmp39[1] = tmp25;
                                  tmp39[2] = tmp11;
                                  tmp39[3] =
                                    isAcceptLoading ||
                                    isRejectLoading ||
                                    isUserProfileLoading ||
                                    isOptimisticAccepted ||
                                    isOptimisticRejected;
                                  tmp39[4] = tmp31;
                                  tmp39[5] = tmp32;
                                  const tmp40 = closure_8(goToMessageRequestPreview(str[18]).PressableOpacity, tmp39);
                                  cResult[36] =
                                    isAcceptLoading ||
                                    isRejectLoading ||
                                    isUserProfileLoading ||
                                    isOptimisticAccepted ||
                                    isOptimisticRejected;
                                  class P {
                                    constructor() {
                                      rejectMessageRequest(channel.id);
                                    }
                                  }
                                  cResult[38] = tmp25;
                                  cResult[39] = tmp31;
                                  cResult[40] = tmp32;
                                  cResult[41] = tmp40;
                                  tmp37 = tmp40;
                                }
                              }
                            }
                            if (!isAcceptLoading) {
                              if (!isUserProfileLoading) {
                                let tmp35;
                                if (!isOptimisticAccepted) {
                                  const obj13 = {
                                    size: null,
                                    disableColor: true,
                                    source: hasSingleMessageRequest(str[17]),
                                  };
                                  const Icon = goToMessageRequestPreview(tmp2[16]).Icon;
                                  class V {
                                    constructor() {
                                      const obj = AnalyticsUtilsDefault;
                                      const obj2 = { is_spam: false, channel_id: channel.id, other_user_id: str.id };
                                      obj.track(AnalyticEvents.MESSAGE_REQUEST_PREVIEW_VIEWED, obj2);
                                      goToMessageRequestPreview();
                                    }
                                  }
                                  tmp35 = closure_8(Icon, obj13);
                                }
                                cResult[31] = isAcceptLoading;
                                class V {
                                  constructor() {
                                    const obj = AnalyticsUtilsDefault;
                                    const obj2 = { is_spam: false, channel_id: channel.id, other_user_id: str.id };
                                    obj.track(AnalyticEvents.MESSAGE_REQUEST_PREVIEW_VIEWED, obj2);
                                    goToMessageRequestPreview();
                                  }
                                }
                                cResult[32] = isOptimisticAccepted;
                                cResult[33] = isUserProfileLoading;
                                cResult[34] = tmp5.activityIndicator;
                                cResult[35] = tmp35;
                                tmp32 = tmp35;
                              }
                            }
                            class V {
                              constructor() {
                                const obj = AnalyticsUtilsDefault;
                                const obj2 = { is_spam: false, channel_id: channel.id, other_user_id: str.id };
                                obj.track(AnalyticEvents.MESSAGE_REQUEST_PREVIEW_VIEWED, obj2);
                                goToMessageRequestPreview();
                              }
                            }
                            const obj14 = { style: tmp5.activityIndicator };
                            tmp35 = closure_8(id, obj14);
                          }
                          const items4 = [tmp5.actionButton, tmp30];
                          cResult[28] = tmp5.actionButton;
                          cResult[29] = tmp30;
                          class P {
                            constructor() {
                              rejectMessageRequest(channel.id);
                            }
                          }
                          tmp31 = items4;
                        }
                      }
                      const obj15 = {
                        channel: null,
                        otherUser: null,
                        isRestricted: undefined !== isRestricted && isRestricted,
                      };
                      ({ channel: obj8.channel, user: obj8.otherUser } = messageRequest);
                      const tmp24 = closure_8(hasSingleMessageRequest(str[15]), obj15);
                      class P {
                        constructor() {
                          rejectMessageRequest(channel.id);
                        }
                      }
                      cResult[22] = undefined !== isRestricted && isRestricted;
                      cResult[23] = messageRequest.channel;
                      cResult[24] = messageRequest.user;
                      cResult[25] = tmp24;
                      tmp21 = tmp24;
                    }
                  }
                  class V {
                    constructor() {
                      const obj = AnalyticsUtilsDefault;
                      const obj2 = { is_spam: false, channel_id: channel.id, other_user_id: str.id };
                      obj.track(AnalyticEvents.MESSAGE_REQUEST_PREVIEW_VIEWED, obj2);
                      goToMessageRequestPreview();
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
                  const obj = AnalyticsUtilsDefault;
                  const obj2 = { is_spam: false, channel_id: channel.id, other_user_id: str.id };
                  obj.track(AnalyticEvents.MESSAGE_REQUEST_PREVIEW_VIEWED, obj2);
                  goToMessageRequestPreview();
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
                acceptMessageRequest(channel.id);
              }
            }
            cResult[10] = acceptMessageRequest;
            cResult[11] = channel.id;
            cResult[12] = D;
            tmp11 = D;
          }
          class P {
            constructor() {
              rejectMessageRequest(channel.id);
            }
          }
          cResult[7] = channel.id;
          cResult[8] = rejectMessageRequest;
          cResult[9] = P;
          tmp10 = P;
        }
        const obj16 = { user: null, onAcceptSuccess: tmp7, onError: first };
        cResult[4] = tmp7;
        cResult[5] = str;
        cResult[6] = obj16;
        tmp8 = obj16;
      }
      class I {
        constructor() {
          if (hasSingleMessageRequest) {
            const obj = transitionToChannel;
            obj.transitionToChannel(id);
            const arr = ModalActionCreatorsDefault;
            arr.pop();
          }
        }
      }
      cResult[1] = id;
      cResult[2] = hasSingleMessageRequest;
      cResult[3] = I;
      tmp7 = I;
    }
  : (isRestricted) => {
      let _undefined;
      let _undefined2;
      let c5;
      let c6;
      let handleAcceptMessageRequest;
      let handleRejectMessageRequest;
      let intl;
      let intl2;
      let intl3;
      let isAcceptLoading;
      let isOptimisticAccepted;
      let isOptimisticRejected;
      let isRejectLoading;
      let isUserProfileLoading;
      let items1;
      let items3;
      let messageRequest;
      let obj12;
      let require;
      ({ messageRequest, goToMessageRequestPreview: require, hasSingleMessageRequest } = isRestricted);
      let flag = isRestricted.isRestricted;
      const isLastRow = isRestricted.isLastRow;
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
        let intl;
        const obj = {
          key: "MESSAGE_REQUEST_REQUEST_ERROR_ALERT_TITLE",
          content: intl.string(require("intl").t["EDYbS+"]),
          icon: hasSingleMessageRequest(str[10]),
        };
        const open = hasSingleMessageRequest(str[9]).open;
        hasSingleMessageRequest(str[9]);
        intl = require("intl").intl;
        open(obj);
      }, []);
      const callback1 = channel.useCallback(() => {
        if (hasSingleMessageRequest) {
          const obj = transitionToChannel;
          obj.transitionToChannel(id);
          const arr = ModalActionCreatorsDefault;
          arr.pop();
        }
      }, items);
      let obj = require("useMessageRequestActions");
      const messageRequestActions = obj.useMessageRequestActions({
        user: str,
        onAcceptSuccess: callback1,
        onError: callback,
      });
      ({
        acceptMessageRequest: c5,
        rejectMessageRequest: c6,
        isAcceptLoading,
        isRejectLoading,
        isUserProfileLoading,
        isOptimisticAccepted,
        isOptimisticRejected,
      } = messageRequestActions);
      function handleSelectRow() {
        const obj = AnalyticsUtilsDefault;
        const obj2 = { is_spam: false, channel_id: channel.id, other_user_id: str.id };
        obj.track(AnalyticEvents.MESSAGE_REQUEST_PREVIEW_VIEWED, obj2);
        _require();
      }
      let obj2 = {
        onPress: handleSelectRow,
        accessibilityRole: "button",
        accessibilityActions: items1,
        onAccessibilityAction(nativeEvent) {
          const actionName = nativeEvent.nativeEvent.actionName;
          if (constants.ACCEPT_MESSAGE_REQUEST === actionName) {
            _undefined(channel.id);
          } else if (constants.IGNORE_MESSAGE_REQUEST === actionName) {
            _undefined2(channel.id);
          } else if (constants.PREVIEW_MESSAGE_REQUEST === actionName) {
            const obj2 = { is_spam: false, channel_id: channel.id, other_user_id: str.id };
            const obj = AnalyticsUtilsDefault;
            obj.track(AnalyticEvents.MESSAGE_REQUEST_PREVIEW_VIEWED, obj2);
            _require();
          }
        },
        style: tmp.pressableRow,
        children: null,
      };
      const obj3 = { name: constants.ACCEPT_MESSAGE_REQUEST, label: intl.string(require("intl").t.hSLLWi) };
      const PressableOpacity = require("Pressables").PressableOpacity;
      intl = require("intl").intl;
      items1 = [obj3, ,];
      const obj4 = { name: constants.IGNORE_MESSAGE_REQUEST, label: intl2.string(require("intl").t.fIBuSD) };
      intl2 = require("intl").intl;
      items1[1] = obj4;
      const obj5 = { name: constants.PREVIEW_MESSAGE_REQUEST, label: intl3.string(require("intl").t.HjgsKJ) };
      intl3 = require("intl").intl;
      items1[2] = obj5;
      const obj6 = { style: tmp.rowContainer, children: null };
      const items2 = [,];
      const obj7 = { channel: messageRequest.channel, otherUser: messageRequest.user, isRestricted: flag };
      items2[0] = closure_8(hasSingleMessageRequest(str[15]), obj7);
      const obj8 = { style: tmp.actionContainer, children: null };
      const PressableOpacity2 = require("Pressables").PressableOpacity;
      const intl4 = require("intl").intl;
      const formatToPlainString = intl4.formatToPlainString;
      let str1;
      const v6p0yBo = require("intl").t["6p0yBo"];
      if (str != null) {
        str1 = str.toString();
      }
      const obj9 = {
        accessibilityRole: "button",
        accessibilityLabel: formatToPlainString(v6p0yBo, { name: str1 }),
        onPress: handleAcceptMessageRequest,
        disabled:
          isAcceptLoading || isRejectLoading || isUserProfileLoading || isOptimisticAccepted || isOptimisticRejected,
        style: items3,
        children: null,
      };
      handleAcceptMessageRequest = function handleAcceptMessageRequest() {
        _undefined(channel.id);
      };
      items3 = [tmp.actionButton, flag ? tmp.acceptButtonRestricted : tmp.acceptButton];
      if (!isAcceptLoading) {
        if (!isUserProfileLoading) {
          let tmp10Result;
          if (!isOptimisticAccepted) {
            const obj10 = {
              size: require("native").Icon.Sizes.SMALL,
              disableColor: true,
              source: hasSingleMessageRequest(str[17]),
            };
            const Icon = require("native").Icon;
            tmp10Result = closure_8(Icon, obj10);
          }
          obj9.children = tmp10Result;
          const items4 = [closure_8(PressableOpacity2, obj9)];
          const PressableOpacity3 = require("Pressables").PressableOpacity;
          const intl5 = require("intl").intl;
          const formatToPlainString2 = intl5.formatToPlainString;
          let str2;
          const prop = require("intl").t["C9Xe6+"];
          if (str != null) {
            str2 = str.toString();
          }
          const obj11 = {
            accessibilityRole: "button",
            accessibilityLabel: formatToPlainString2(prop, obj12),
            onPress: handleRejectMessageRequest,
            disabled:
              isAcceptLoading ||
              isRejectLoading ||
              isUserProfileLoading ||
              isOptimisticAccepted ||
              isOptimisticRejected,
            style: tmp.actionButton,
            children: null,
          };
          handleRejectMessageRequest = function handleRejectMessageRequest() {
            _undefined2(channel.id);
          };
          obj12 = { name: str2 };
          if (!isRejectLoading) {
            let tmp10Result3;
            if (!isOptimisticRejected) {
              const obj13 = {
                size: require("native").Icon.Sizes.SMALL,
                disableColor: true,
                source: hasSingleMessageRequest(str[19]),
              };
              const Icon2 = require("native").Icon;
              tmp10Result3 = closure_8(Icon2, obj13);
            }
            obj11.children = tmp10Result3;
            items4[1] = closure_8(PressableOpacity3, obj11);
            obj8.children = items4;
            items2[1] = closure_9(c5, obj8);
            obj6.children = items2;
            const items5 = [closure_9(tmp9, obj6)];
            let tmp10Result4 = null;
            if (!isLastRow) {
              tmp10Result4 = closure_8(require("Form").FormDivider, { iconPush: true, outer: true });
            }
            items5[1] = tmp10Result4;
            obj2.children = items5;
            return closure_9(PressableOpacity, obj2);
          }
          const obj14 = { style: tmp.activityIndicator };
          tmp10Result3 = closure_8(id, obj14);
        }
      }
      const obj15 = { style: tmp.activityIndicator };
      tmp10Result = closure_8(id, obj15);
    };
ReactCompilerGating = ReactCompilerGating_mod;
let tmp5 = ReactCompilerGating.isReactCompilerEnabled()
  ? (goToMessageRequestPreview) => {
      let arr;
      let intl;
      let sectionContainer;
      let obj = goToMessageRequestPreview(arr[8]);
      const cResult = obj.c(24);
      goToMessageRequestPreview = goToMessageRequestPreview.goToMessageRequestPreview;
      const tmp5 = closure_11();
      importDefault = tmp5;
      const bottom = require("useSafeAreaInsets")().bottom;
      arr = require("useSortedMessageRequests")();
      let obj2 = goToMessageRequestPreview(arr[23]);
      const listHasSingleMessageRequest = obj2.useListHasSingleMessageRequest();
      let obj3 = goToMessageRequestPreview(arr[24]);
      const isMessageRequestRestrictedViewer = obj3.useIsMessageRequestRestrictedViewer();
      const tmp6 = importDefault;
      if (0 === arr.length) {
        let first;
        const _Symbol = Symbol;
        if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
          let obj4 = { bodyText: intl.string(goToMessageRequestPreview(arr[6]).t.SXrqTf) };
          const tmp6Result = tmp6(arr[25]);
          intl = tmp2(tmp3[6]).intl;
          const tmp30 = closure_8(tmp6Result, obj4);
          cResult[0] = tmp30;
          first = tmp30;
        } else {
          first = cResult[0];
        }
        return first;
      } else {
        let tmp9;
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
                Text = goToMessageRequestPreview(closure_2[26]).Text;
                intl = goToMessageRequestPreview(closure_2[6]).intl;
                obj6 = { pendingRequestNumber: null };
                tmp12 = closure_2;
                obj6.pendingRequestNumber = closure_2.length;
                obj5.children = intl.format(goToMessageRequestPreview(closure_2[6]).t.evH4Yb, obj6);
                obj1.children = closure_1_8(Text, obj5);
                return closure_1_8(closure_1_5, obj1);
              } else {
                tmp13 = closure_2;
                num = 1;
                tmp14 = closure_2[closure_2.length - 1];
                tmp15 = null;
                id1 = undefined;
                id = item.channel.id;
                if (tmp14 != null) {
                  id1 = tmp14.channel.id;
                }
                tmp2 = closure_1_8;
                tmp3 = closure_1_13;
                obj = {
                  messageRequest: null,
                  goToMessageRequestPreview: null,
                  isLastRow: null,
                  hasSingleMessageRequest: null,
                  isRestricted: null,
                };
                obj.messageRequest = item;
                obj.goToMessageRequestPreview = function goToMessageRequestPreview() {
                  /* body not rendered: F148138 */
                };
                obj.isLastRow = id === id1;
                tmp4 = closure_3;
                obj.hasSingleMessageRequest = closure_3;
                tmp5 = closure_4;
                obj.isRestricted = closure_4;
                return closure_1_8(closure_1_13, obj, item.channel.id);
              }
            }
          }
          HermesBuiltin.arraySpread(items, arr, 1);
          cResult[1] = arr;
          cResult[2] = items;
          tmp9 = items;
        } else {
          tmp9 = cResult[2];
        }
        if (cResult[3] === goToMessageRequestPreview) {
          if (cResult[4] === listHasSingleMessageRequest) {
            if (cResult[5] === isMessageRequestRestrictedViewer) {
              if (cResult[6] === arr) {
                let tmp14;
                if (cResult[7] === tmp5.sectionContainer) {
                  tmp14 = cResult[8];
                }
                if (cResult[9] !== bottom) {
                  goToMessageRequestPreview(arr[27]);
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
                        Text = goToMessageRequestPreview(closure_2[26]).Text;
                        intl = goToMessageRequestPreview(closure_2[6]).intl;
                        obj6 = { pendingRequestNumber: null };
                        tmp12 = closure_2;
                        obj6.pendingRequestNumber = closure_2.length;
                        obj5.children = intl.format(goToMessageRequestPreview(closure_2[6]).t.evH4Yb, obj6);
                        obj1.children = closure_1_8(Text, obj5);
                        return closure_1_8(closure_1_5, obj1);
                      } else {
                        tmp13 = closure_2;
                        num = 1;
                        tmp14 = closure_2[closure_2.length - 1];
                        tmp15 = null;
                        id1 = undefined;
                        id = item.channel.id;
                        if (tmp14 != null) {
                          id1 = tmp14.channel.id;
                        }
                        tmp2 = closure_1_8;
                        tmp3 = closure_1_13;
                        obj = {
                          messageRequest: null,
                          goToMessageRequestPreview: null,
                          isLastRow: null,
                          hasSingleMessageRequest: null,
                          isRestricted: null,
                        };
                        obj.messageRequest = item;
                        obj.goToMessageRequestPreview = function goToMessageRequestPreview() {
                          /* body not rendered: F148138 */
                        };
                        obj.isLastRow = id === id1;
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
                      Text = goToMessageRequestPreview(closure_2[26]).Text;
                      intl = goToMessageRequestPreview(closure_2[6]).intl;
                      obj6 = { pendingRequestNumber: null };
                      tmp12 = closure_2;
                      obj6.pendingRequestNumber = closure_2.length;
                      obj5.children = intl.format(goToMessageRequestPreview(closure_2[6]).t.evH4Yb, obj6);
                      obj1.children = closure_1_8(Text, obj5);
                      return closure_1_8(closure_1_5, obj1);
                    } else {
                      tmp13 = closure_2;
                      num = 1;
                      tmp14 = closure_2[closure_2.length - 1];
                      tmp15 = null;
                      id1 = undefined;
                      id = item.channel.id;
                      if (tmp14 != null) {
                        id1 = tmp14.channel.id;
                      }
                      tmp2 = closure_1_8;
                      tmp3 = closure_1_13;
                      obj = {
                        messageRequest: null,
                        goToMessageRequestPreview: null,
                        isLastRow: null,
                        hasSingleMessageRequest: null,
                        isRestricted: null,
                      };
                      obj.messageRequest = item;
                      obj.goToMessageRequestPreview = function goToMessageRequestPreview() {
                        /* body not rendered: F148138 */
                      };
                      obj.isLastRow = id === id1;
                      tmp4 = closure_3;
                      obj.hasSingleMessageRequest = closure_3;
                      tmp5 = closure_4;
                      obj.isRestricted = closure_4;
                      return closure_1_8(closure_1_13, obj, item.channel.id);
                    }
                  }
                }
                if (cResult[13] === tmp5.list) {
                  let tmp18;
                  let tmp20;
                  let tmp21;
                  if (cResult[14] === tmp17) {
                    tmp18 = cResult[15];
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
                        Text = goToMessageRequestPreview(closure_2[26]).Text;
                        intl = goToMessageRequestPreview(closure_2[6]).intl;
                        obj6 = { pendingRequestNumber: null };
                        tmp12 = closure_2;
                        obj6.pendingRequestNumber = closure_2.length;
                        obj5.children = intl.format(goToMessageRequestPreview(closure_2[6]).t.evH4Yb, obj6);
                        obj1.children = closure_1_8(Text, obj5);
                        return closure_1_8(closure_1_5, obj1);
                      } else {
                        tmp13 = closure_2;
                        num = 1;
                        tmp14 = closure_2[closure_2.length - 1];
                        tmp15 = null;
                        id1 = undefined;
                        id = item.channel.id;
                        if (tmp14 != null) {
                          id1 = tmp14.channel.id;
                        }
                        tmp2 = closure_1_8;
                        tmp3 = closure_1_13;
                        obj = {
                          messageRequest: null,
                          goToMessageRequestPreview: null,
                          isLastRow: null,
                          hasSingleMessageRequest: null,
                          isRestricted: null,
                        };
                        obj.messageRequest = item;
                        obj.goToMessageRequestPreview = function goToMessageRequestPreview() {
                          /* body not rendered: F148138 */
                        };
                        obj.isLastRow = id === id1;
                        tmp4 = closure_3;
                        obj.hasSingleMessageRequest = closure_3;
                        tmp5 = closure_4;
                        obj.isRestricted = closure_4;
                        return closure_1_8(closure_1_13, obj, item.channel.id);
                      }
                    }
                  }
                  if (cResult[16] === Symbol.for("react.memo_cache_sentinel")) {
                    const obj5 = { right: 0.01 };
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
                          Text = goToMessageRequestPreview(closure_2[26]).Text;
                          intl = goToMessageRequestPreview(closure_2[6]).intl;
                          obj6 = { pendingRequestNumber: null };
                          tmp12 = closure_2;
                          obj6.pendingRequestNumber = closure_2.length;
                          obj5.children = intl.format(goToMessageRequestPreview(closure_2[6]).t.evH4Yb, obj6);
                          obj1.children = closure_1_8(Text, obj5);
                          return closure_1_8(closure_1_5, obj1);
                        } else {
                          tmp13 = closure_2;
                          num = 1;
                          tmp14 = closure_2[closure_2.length - 1];
                          tmp15 = null;
                          id1 = undefined;
                          id = item.channel.id;
                          if (tmp14 != null) {
                            id1 = tmp14.channel.id;
                          }
                          tmp2 = closure_1_8;
                          tmp3 = closure_1_13;
                          obj = {
                            messageRequest: null,
                            goToMessageRequestPreview: null,
                            isLastRow: null,
                            hasSingleMessageRequest: null,
                            isRestricted: null,
                          };
                          obj.messageRequest = item;
                          obj.goToMessageRequestPreview = function goToMessageRequestPreview() {
                            /* body not rendered: F148138 */
                          };
                          obj.isLastRow = id === id1;
                          tmp4 = closure_3;
                          obj.hasSingleMessageRequest = closure_3;
                          tmp5 = closure_4;
                          obj.isRestricted = closure_4;
                          return closure_1_8(closure_1_13, obj, item.channel.id);
                        }
                      }
                    }
                    tmp20 = obj5;
                  } else {
                    tmp20 = cResult[16];
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
                          Text = goToMessageRequestPreview(closure_2[26]).Text;
                          intl = goToMessageRequestPreview(closure_2[6]).intl;
                          obj6 = { pendingRequestNumber: null };
                          tmp12 = closure_2;
                          obj6.pendingRequestNumber = closure_2.length;
                          obj5.children = intl.format(goToMessageRequestPreview(closure_2[6]).t.evH4Yb, obj6);
                          obj1.children = closure_1_8(Text, obj5);
                          return closure_1_8(closure_1_5, obj1);
                        } else {
                          tmp13 = closure_2;
                          num = 1;
                          tmp14 = closure_2[closure_2.length - 1];
                          tmp15 = null;
                          id1 = undefined;
                          id = item.channel.id;
                          if (tmp14 != null) {
                            id1 = tmp14.channel.id;
                          }
                          tmp2 = closure_1_8;
                          tmp3 = closure_1_13;
                          obj = {
                            messageRequest: null,
                            goToMessageRequestPreview: null,
                            isLastRow: null,
                            hasSingleMessageRequest: null,
                            isRestricted: null,
                          };
                          obj.messageRequest = item;
                          obj.goToMessageRequestPreview = function goToMessageRequestPreview() {
                            /* body not rendered: F148138 */
                          };
                          obj.isLastRow = id === id1;
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
                    tmp21 = obj6;
                  } else {
                    tmp21 = cResult[18];
                  }
                  if (cResult[19] === tmp9) {
                    if (cResult[20] === tmp14) {
                      if (cResult[21] === tmp18) {
                        let tmp22;
                        if (cResult[22] === tmp21) {
                          tmp22 = cResult[23];
                        }
                        return tmp22;
                      }
                    }
                  }
                  const obj7 = {
                    style: tmp18,
                    scrollIndicatorInsets: tmp20,
                    contentContainerStyle: tmp21,
                    renderItem: tmp14,
                    data: tmp9,
                  };
                  const tmp25 = closure_8(closure_6, obj7);
                  cResult[19] = tmp9;
                  cResult[20] = tmp14;
                  cResult[21] = tmp18;
                  cResult[22] = tmp21;
                  cResult[23] = tmp25;
                  tmp22 = tmp25;
                }
                const items1 = [tmp5.list, tmp17];
                cResult[13] = tmp5.list;
                cResult[14] = tmp17;
                cResult[15] = items1;
                tmp18 = items1;
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
              Text = goToMessageRequestPreview(closure_2[26]).Text;
              intl = goToMessageRequestPreview(closure_2[6]).intl;
              obj6 = { pendingRequestNumber: null };
              tmp12 = closure_2;
              obj6.pendingRequestNumber = closure_2.length;
              obj5.children = intl.format(goToMessageRequestPreview(closure_2[6]).t.evH4Yb, obj6);
              obj1.children = closure_1_8(Text, obj5);
              return closure_1_8(closure_1_5, obj1);
            } else {
              tmp13 = closure_2;
              num = 1;
              tmp14 = closure_2[closure_2.length - 1];
              tmp15 = null;
              id1 = undefined;
              id = item.channel.id;
              if (tmp14 != null) {
                id1 = tmp14.channel.id;
              }
              tmp2 = closure_1_8;
              tmp3 = closure_1_13;
              obj = {
                messageRequest: null,
                goToMessageRequestPreview: null,
                isLastRow: null,
                hasSingleMessageRequest: null,
                isRestricted: null,
              };
              obj.messageRequest = item;
              obj.goToMessageRequestPreview = function goToMessageRequestPreview() {
                /* body not rendered: F148138 */
              };
              obj.isLastRow = id === id1;
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
        cResult[7] = tmp5.sectionContainer;
        cResult[8] = T;
        tmp14 = T;
      }
    }
  : (goToMessageRequestPreview) => {
      let intl;
      let obj6;
      let sectionContainer;
      goToMessageRequestPreview = goToMessageRequestPreview.goToMessageRequestPreview;
      let arr;
      const tmp2 = closure_11();
      importDefault = tmp2;
      const bottom = require("useSafeAreaInsets")().bottom;
      arr = require("useSortedMessageRequests")();
      let obj = goToMessageRequestPreview(arr[23]);
      hasSingleMessageRequest = obj.useListHasSingleMessageRequest();
      let obj2 = goToMessageRequestPreview(arr[24]);
      isRestricted = obj2.useIsMessageRequestRestrictedViewer();
      const tmp3 = importDefault;
      if (0 === arr.length) {
        let obj3 = { bodyText: intl.string(goToMessageRequestPreview(arr[6]).t.SXrqTf) };
        const tmp3Result = tmp3(arr[25]);
        intl = tmp5(tmp4[6]).intl;
        return closure_8(tmp3Result, obj3);
      } else {
        const items = [c10];
        HermesBuiltin.arraySpread(items, arr, 1);
        const items1 = [tmp2.list];
        let num = 0;
        const tmp5Result = goToMessageRequestPreview(arr[27]);
        if (tmp5Result.isAndroid()) {
          num = bottom;
        }
        let obj4 = {
          style: items1,
          scrollIndicatorInsets: { right: 0.01 },
          contentContainerStyle: obj6,
          renderItem(item) {
            let Text;
            let intl;
            let obj3;
            let obj4;
            item = item.item;
            if (typeof item === "string") {
              const obj2 = { style: sectionContainer.sectionContainer, children: closure_1_8(Text, obj3) };
              obj3 = {
                variant: "eyebrow",
                color: "text-default",
                children: intl.format(goToMessageRequestPreview(arr[6]).t.evH4Yb, obj4),
              };
              Text = goToMessageRequestPreview(arr[26]).Text;
              intl = goToMessageRequestPreview(arr[6]).intl;
              obj4 = { pendingRequestNumber: arr.length };
              return closure_1_8(closure_1_5, obj2);
            } else {
              let id1;
              const id = item.channel.id;
              if (arr[arr.length - 1] != null) {
                id1 = tmp14.channel.id;
              }
              const obj = {
                messageRequest: item,
                goToMessageRequestPreview() {
                  return goToMessageRequestPreview(item.channel.id);
                },
                isLastRow: id === id1,
                hasSingleMessageRequest,
                isRestricted,
              };
              return closure_1_8(closure_1_13, obj, item.channel.id);
            }
          },
          data: items,
        };
        const obj5 = { marginBottom: num };
        items1[1] = obj5;
        obj6 = { paddingBottom: bottom, paddingTop: 12 };
        return closure_8(closure_6, obj4);
      }
    };
size = size_mod;
const result = size.fileFinishedImporting("modules/message_request/native/MessageRequestList.tsx");

export default tmp5;
