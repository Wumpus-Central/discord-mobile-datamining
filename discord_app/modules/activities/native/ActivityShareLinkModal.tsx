// discord_app/modules/activities/native/ActivityShareLinkModal.tsx
import nativeDefault from "../../../../discord_common/js/packages/tokens/native.tsx";
import util from "../../../intl/index.native.tsx";
import ToastUtils from "../../toast/native/ToastUtils.tsx";
import LinkIcon from "../../../design/components/Icon/native/redesign/generated/LinkIcon.tsx";
import ClipboardUtils from "../../../utils/ClipboardUtils.native.tsx";
import HeaderActionButton from "../../../design/components/Navigator/native/HeaderActionButton.native.tsx";
import getApplicationInstallURL from "../../applications/getApplicationInstallURL.tsx";
import formatResults from "../../share/formatResults.tsx";
import openActivityShareLinkModal from "../openActivityShareLinkModal.native.tsx";
import asyncGeneratorStep from "../../../../_runtime/00005_asyncGeneratorStep.js";
import _slicedToArray from "../../../../_runtime/metro/00032__.js";
import noop from "../../../../_runtime/metro/00019__.js";
import ChannelStore from "../../../stores/ChannelStore.tsx";
import UserStore from "../../../stores/UserStore.tsx";
import EmbeddedActivitiesStore from "../EmbeddedActivitiesStore.tsx";

require = fn;
const View = fn(17).View;
let UserRowModes = fn(10616).UserRowModes;
const MessageSendLocation = fn(4976).MessageSendLocation;
const jsxProd = fn(21);
({ jsx: closure_12, jsxs: map1 } = jsxProd);
const createStyles = fn(4971);
let obj2 = {
  container: { flex: 1, display: "flex", backgroundColor: nativeDefault.colors.MOBILE_ACTIONSHEET_BACKGROUND },
};
let closure_14 = createStyles.createStyles(obj2);
const ReactCompilerGating = fn(558);
let obj3 = { flex: 1, display: "flex", backgroundColor: nativeDefault.colors.MOBILE_ACTIONSHEET_BACKGROUND };
const size = fn(2);
let result = size.fileFinishedImporting("modules/activities/native/ActivityShareLinkModal.tsx");

export default ReactCompilerGating.isReactCompilerEnabled()
  ? function ActivityShareLinkModal(applicationId) {
      const cResult = applicationId(linkId[13]).c(66);
      applicationId = applicationId.applicationId;
      const customId = applicationId.customId;
      linkId = applicationId.linkId;
      const channelId = applicationId.channelId;
      const message = applicationId.message;
      const onShare = applicationId.onShare;
      closure_14();
      if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
        const items = [connectedActivityChannelId];
        const fn = function b() {
          return connectedActivityChannelId.getConnectedActivityChannelId();
        };
        cResult[0] = items;
        cResult[1] = fn;
        tmp5 = items;
        tmp6 = fn;
      } else {
        [tmp5, tmp6] = cResult;
      }
      let obj = applicationId(linkId[13]);
      const stateFromStores = applicationId(linkId[14]).useStateFromStores(tmp5, tmp6);
      if (cResult[2] !== stateFromStores) {
        let destinationIdFromChannelId;
        if (null != stateFromStores) {
          destinationIdFromChannelId = tmp(tmp2[15]).getDestinationIdFromChannelId(stateFromStores);
          const tmpResult3 = tmp(tmp2[15]);
        }
        cResult[2] = stateFromStores;
        cResult[3] = destinationIdFromChannelId;
      }
      const tmpResult = applicationId(linkId[14]);
      [r10051, View] = message(onShare.useState(false), 2);
      const tmp14 = message(onShare.useState(false), 2);
      closure_7 = tmp14[0];
      UserStore = tmp14[1];
      if (cResult[4] === Symbol.for("react.memo_cache_sentinel")) {
        const items1 = [];
        cResult[4] = items1;
        let tmp15 = items1;
      } else {
        tmp15 = cResult[4];
      }
      const tmp12Result = message(onShare.useState(tmp15), 2);
      connectedActivityChannelId = tmp12Result[0];
      UserRowModes = tmp12Result[1];
      if (cResult[5] === Symbol.for("react.memo_cache_sentinel")) {
        class V {
          constructor(arg0) {
            tmp = closure_10(applicationId);
            return;
          }
        }
        cResult[5] = V;
      } else {
        class V {
          constructor(arg0) {
            tmp = closure_10(applicationId);
            return;
          }
        }
      }
      if (cResult[6] === Symbol.for("react.memo_cache_sentinel")) {
        class V {
          constructor(arg0) {
            tmp = closure_10(applicationId);
            return;
          }
        }
        const items2 = [UserStore];
        class W {
          constructor() {
            return closure_8.getCurrentUser();
          }
        }
        cResult[6] = items2;
        cResult[7] = W;
        let tmp19 = W;
        const tmp18 = items2;
      } else {
        class V {
          constructor(arg0) {
            tmp = closure_10(applicationId);
            return;
          }
        }
        tmp19 = cResult[7];
      }
      const tmp13 = message(onShare.useState(false), 2);
      const stateFromStores1 = applicationId(linkId[14]).useStateFromStores(tmp18, tmp19);
      const tmp12Result2 = message(onShare.useState(""), 2);
      closure_12 = tmp12Result2[0];
      closure_13 = tmp12Result2[1];
      if (cResult[8] === applicationId) {
        class V {
          constructor(arg0) {
            tmp = closure_10(applicationId);
            return;
          }
        }
      }
      cResult[8] = applicationId;
      cResult[9] = channelId;
      cResult[10] = customId;
      cResult[11] = linkId;
      if (stateFromStores1 != null) {
        class V {
          constructor(arg0) {
            tmp = closure_10(applicationId);
            return;
          }
        }
      }
      class J {
        constructor() {
          tmp = closure_13;
          obj = closure_0(closure_2[16]);
          obj1 = { applicationId: closure_0, referrerId: null, customId: null, linkId: null, channelId: null };
          id = undefined;
          if (closure_11 != null) {
            id = closure_11.id;
          }
          obj1.referrerId = id;
          obj1.customId = customId;
          obj1.linkId = linkId;
          obj1.channelId = channelId;
          tmpResult = tmp(obj.getActivityLaunchURL(obj1));
          return;
        }
      }
      cResult[12] = undefined;
      cResult[13] = J;
      const tmpResult4 = applicationId(linkId[14]);
    }
  : function ActivityShareLinkModal(applicationId) {
      applicationId = applicationId.applicationId;
      const customId = applicationId.customId;
      const linkId = applicationId.linkId;
      const channelId = applicationId.channelId;
      const message = applicationId.message;
      const onShare = applicationId.onShare;
      c7 = undefined;
      let connectedActivityChannelId;
      closure_14 = undefined;
      const tmp = closure_14();
      const items = [connectedActivityChannelId];
      const stateFromStores = applicationId(linkId[14]).useStateFromStores(items, () =>
        connectedActivityChannelId.getConnectedActivityChannelId(),
      );
      const items1 = [stateFromStores];
      const memo = onShare.useMemo(() => {
        let destinationIdFromChannelId;
        if (null != stateFromStores) {
          destinationIdFromChannelId = formatResults.getDestinationIdFromChannelId(tmp);
        }
        return destinationIdFromChannelId;
      }, items1);
      let obj = applicationId(linkId[14]);
      [tmp7, c7] = message(onShare.useState(false), 2);
      const tmp8 = message(onShare.useState(false), 2);
      const first = tmp8[0];
      connectedActivityChannelId = tmp8[1];
      const tmp10 = message(onShare.useState([]), 2);
      const first1 = tmp10[0];
      closure_11 = tmp10[1];
      const callback = onShare.useCallback((arg0) => {
        closure_11(arg0);
      }, []);
      const tmp6 = message(onShare.useState(false), 2);
      const items2 = [first];
      const stateFromStores1 = applicationId(linkId[14]).useStateFromStores(items2, () => first.getCurrentUser());
      const tmp13 = message(onShare.useState(""), 2);
      const first2 = tmp13[0];
      closure_14 = tmp15;
      const items3 = [applicationId, stateFromStores1, customId, linkId, channelId, tmp13[1]];
      const effect = onShare.useEffect(() => {
        const obj2 = { applicationId, referrerId: null, customId: null, linkId: null, channelId: null };
        let id;
        if (stateFromStores1 != null) {
          id = stateFromStores1.id;
        }
        obj2.referrerId = id;
        obj2.customId = customId;
        obj2.linkId = linkId;
        obj2.channelId = channelId;
        closure_14(getApplicationInstallURL.getActivityLaunchURL(obj2));
      }, items3);
      const items4 = [first, onShare];
      const callback1 = onShare.useCallback(() => {
        onShare(false, first);
        const result = openActivityShareLinkModal.closeActivityShareLinkModal();
      }, items4);
      const items5 = [applicationId];
      const first3 = message(customId(linkId[18])(items5), 1)[0];
      const items6 = [first3, first, first2, message, onShare, first1];
      const items7 = [first2];
      const callback2 = onShare.useCallback(
        channelId(function* () {
          if (c3 === 2) {
            c3 = 3;
            throw new TypeError("Generator functions may not be called on executing generators");
          } else if (tmp5 === 3) {
            if (arg0 === 1) {
              throw value;
            } else if (arg0 === 2) {
              let obj2 = { value, done: true };
              return obj2;
            } else {
              return { value: "IconComponent", done: null };
            }
          } else {
            try {
              c3 = 2;
              if (0 === dependencyMap) {
                if (arg0 === 1) {
                  c3 = 3;
                  throw value;
                } else if (arg0 === 2) {
                  c3 = 3;
                  const obj3 = { value, done: true };
                  return obj3;
                } else {
                  closure_128_0 = undefined;
                  closure_128_1 = undefined;
                  if (null != first3) {
                    dependencyMap = 1;
                    c3 = 1;
                    let obj4 = {
                      value: Promise.all(first1.map(tmp2(12900).getOrResolveChannelIdFromDestinationId)),
                      done: false,
                    };
                    return obj4;
                  } else {
                    c3 = 3;
                  }
                }
              } else if (arg0 === 1) {
                c3 = 3;
                throw value;
              } else if (arg0 !== 2) {
                closure_128_0 = value.filter(tmp2(1388).isNotNullish);
                closure_128_1 = tmp2(15738).resolveActivityShareMessageContent(
                  closure_129_4,
                  closure_129_15,
                  closure_129_13,
                );
                closure_129_7(true);
                const item = closure_128_0.forEach(
                  (() => {
                    closure_0 = closure_1_3(function* (arg0) {
                      if (c1 === 2) {
                        c1 = 3;
                        throw new TypeError("Generator functions may not be called on executing generators");
                      } else if (tmp3 === 3) {
                        if (arg0 === 1) {
                          throw value;
                        } else if (arg0 === 2) {
                          const obj4 = { value, done: true };
                          return obj4;
                        } else {
                          return { value: "IconComponent", done: null };
                        }
                      } else {
                        try {
                          c1 = 2;
                          if (0 === c2) {
                            if (arg0 === 1) {
                              c1 = 3;
                              throw value;
                            } else if (arg0 === 2) {
                              c1 = 3;
                              const obj5 = { value, done: true };
                              return obj5;
                            } else {
                              channel = channel.getChannel(closure_0);
                              if (null != channel) {
                                const obj2 = closure_2_1(7566);
                                const obj6 = { location: constants.ACTIVITY_SHARE };
                                c2 = 1;
                                c1 = 1;
                                const obj7 = {
                                  value: obj2.sendMessage(closure_0, closure_2_1(7755).parse(channel, c1), false, obj6),
                                  done: false,
                                };
                                return obj7;
                              }
                            }
                          } else if (arg0 === 1) {
                            c1 = 3;
                            throw value;
                          } else if (arg0 === 2) {
                            c1 = 3;
                            const obj = { value, done: true };
                            return obj;
                          }
                          c1 = 3;
                          return { value: "IconComponent", done: null };
                        } catch (tmp12) {
                          c1 = tmp;
                          throw tmp12;
                        }
                      }
                    });
                    return function () {
                      const self = this;
                      const apply = closure_0.apply;
                      if (typeof apply === "unknown") {
                        let applyArgumentsResult = HermesBuiltin.applyArguments(self);
                      } else {
                        applyArgumentsResult = apply(self, arguments);
                      }
                      return applyArgumentsResult;
                    };
                  })(),
                );
                let obj5 = tmp2(15738);
                let obj7 = { text: null };
                const intl = tmp2(1128).intl;
                const obj8 = { applicationName: closure_129_15.name };
                obj7.text = intl.formatToPlainString(tmp2(1128).t.jQULqL, obj8);
                tmp3(5663).open("ACTIVITY_SHARE_LINK_SUCCESS", obj7);
                closure_129_5(true, closure_129_8);
                let obj6 = tmp3(5663);
                const result = tmp2(15736).closeActivityShareLinkModal();
                const obj9 = tmp2(15736);
              }
              c3 = 3;
              let obj = { value, done: true };
              return obj;
            } catch (tmp11) {
              c3 = tmp;
              throw tmp11;
            }
          }
        }),
        items6,
      );
      const onPress = onShare.useCallback(() => {
        ClipboardUtils.copy(first2);
        connectedActivityChannelId(true);
        ToastUtils.presentLinkCopied();
      }, items7);
      let height = customId(linkId[29])({ ignoreKeyboard: true }).height;
      const items8 = [height];
      let obj3 = {
        style: onShare.useMemo(() => {
          height = "100%";
          return { height };
        }, items8),
        children: null,
      };
      let obj4 = { title: null, subtitle: null, headerRight: null, onClose: null };
      let obj2 = applicationId(linkId[14]);
      const tmp22 = stateFromStores1;
      let intl = applicationId(linkId[24]).intl;
      obj4.title = intl.string(applicationId(linkId[24]).t.r9qKow);
      obj4.subtitle = message;
      obj4.headerRight = function headerRight(arg0) {
        const obj = {};
        const merged = Object.assign(arg0);
        obj.onPress = onPress;
        const intl = util.intl;
        obj.accessibilityLabel = intl.string(util.t.Xrt5Po);
        obj.IconComponent = LinkIcon.LinkIcon;
        return __initData(HeaderActionButton.HeaderActionButton, obj);
      };
      obj4.onClose = callback1;
      const items9 = [stateFromStores1(customId(linkId[31]), obj4)];
      let obj5 = { style: tmp.container, children: null };
      const items10 = [
        stateFromStores1(customId(linkId[32]), { absolute: true }),
        stateFromStores1(customId(linkId[33]), {
          disableGradient: true,
          disableStickySections: true,
          initialSelectedDestinations: [],
          insetEnd: 0,
          onSelectedDestinationChange: callback,
          originDestination: memo,
          rowMode: first1.TOGGLE,
        }),
      ];
      let obj7 = {
        disabled: tmp7,
        floatingBackgroundColor: tmp.container.backgroundColor,
        isVisible: first1.length > 0,
        loading: tmp7,
        onPress: null,
        text: null,
      };
      let tmp24;
      if (!tmp7) {
        tmp24 = callback2;
      }
      obj7.onPress = tmp24;
      if (1 === first1.length) {
        const intl3 = tmp2(tmp3[24]).intl;
        let stringResult = intl3.string(tmp2(tmp3[24]).t.TXNS7S);
      } else {
        const intl2 = tmp2(tmp3[24]).intl;
        let obj8 = { count: length };
        stringResult = intl2.formatToPlainString(tmp2(tmp3[24]).t.jWtYUm, obj8);
      }
      obj7.text = stringResult;
      items10[2] = tmp22(applicationId(linkId[34]).ModalFloatingAction, obj7);
      obj5.children = items10;
      items9[1] = first2(stateFromStores, obj5);
      obj3.children = items9;
      return first2(stateFromStores, obj3);
    };
