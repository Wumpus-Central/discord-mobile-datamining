// discord_app/modules/activities/native/ActivityShareLinkModal.tsx
import react_native from "../../../../_runtime/00017_react-native.js";
import nativeDefault from "../../../../discord_common/js/packages/tokens/native.tsx";
import intl4 from "../../../intl/index.native.tsx";
import PlatformUtils from "../../../utils/PlatformUtils.tsx";
import ToastUtils from "../../toast/native/ToastUtils.tsx";
import LinkIcon from "../../../design/components/Icon/native/redesign/generated/LinkIcon.tsx";
import MessageConstants from "../../messages/MessageConstants.tsx";
import ClipboardUtils from "../../../utils/ClipboardUtils.native.tsx";
import HeaderActionButton2 from "../../../design/components/Navigator/native/HeaderActionButton.native.tsx";
import HeaderShared from "../../main_tabs_v2/native/shared_components/HeaderShared.tsx";
import UserRowConstants from "../../main_tabs_v2/native/shared_components/user_list/UserRowConstants.tsx";
import formatResults from "../../share/formatResults.tsx";
import getApplicationInstallURL from "../../applications/getApplicationInstallURL.tsx";
import openActivityShareLinkModal from "../openActivityShareLinkModal.native.tsx";
import _asyncToGenerator from "../../../../_runtime/metro/00005__asyncToGenerator.js";
import _slicedToArray from "../../../../_runtime/metro/00032__slicedToArray.js";
import react from "../../../../_runtime/00019_react.js";
import ChannelStore from "../../../stores/ChannelStore.tsx";
import UserStore from "../../../stores/UserStore.tsx";
import EmbeddedActivitiesStore_mod from "../EmbeddedActivitiesStore.tsx";
import Fragment from "../../../../_runtime/react/00021_Fragment.js";
import createStyles_mod from "../../../design/components/Styles/native/createStyles.tsx";
import ReactCompilerGating from "../../react_compiler/ReactCompilerGating.tsx";
import size from "../../../../_runtime/metro/00002__.js";

let applicationId, c1, c2, c3, channel, closure_0;

let closure_12;
let map1;
let obj2;
let obj3;
let obj4;
let obj5;
const View = react_native.View;
let EmbeddedActivitiesStore = EmbeddedActivitiesStore_mod;
let UserRowModes = UserRowConstants.UserRowModes;
const MessageSendLocation = MessageConstants.MessageSendLocation;
({ jsx: closure_12, jsxs: map1 } = Fragment);
let createStyles = createStyles_mod;
let obj = { headerLeftContainer: obj2, headerRightContainer: obj3, header: obj4, container: obj5 };
obj2 = { paddingLeft: nativeDefault.space.PX_16 };
createStyles = createStyles.createStyles;
obj3 = { paddingRight: nativeDefault.space.PX_16 };
obj4 = {
  borderBottomWidth: 0,
  shadowColor: "transparent",
  backgroundColor: nativeDefault.colors.BACKGROUND_BASE_LOWER,
};
obj5 = { flex: 1, display: "flex", backgroundColor: nativeDefault.colors.BACKGROUND_BASE_LOWER };
let closure_14 = createStyles(obj);
const tmp4 = ReactCompilerGating.isReactCompilerEnabled()
  ? (applicationId) => {
      let connectedActivityChannelId;
      let linkId;
      let tmp15;
      let tmp18;
      let tmp19;
      let tmp5;
      let tmp6;
      const tmp2 = linkId;
      let obj = applicationId(linkId[13]);
      const cResult = obj.c(74);
      applicationId = applicationId.applicationId;
      const customId = applicationId.customId;
      linkId = applicationId.linkId;
      const message = applicationId.message;
      const onShare = applicationId.onShare;
      onPress();
      if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
        const items = [EmbeddedActivitiesStore];
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
      const tmpResult = applicationId(tmp2[14]);
      const stateFromStores = tmpResult.useStateFromStores(tmp5, tmp6);
      if (cResult[2] !== stateFromStores) {
        let destinationIdFromChannelId;
        if (null != stateFromStores) {
          const tmpResult3 = applicationId(tmp2[15]);
          destinationIdFromChannelId = tmpResult3.getDestinationIdFromChannelId(stateFromStores);
        }
        cResult[2] = stateFromStores;
        cResult[3] = destinationIdFromChannelId;
      }
      const tmp13 = onShare(react.useState(false), 2);
      [r10050, react] = tmp13;
      const tmp14 = onShare(react.useState(false), 2);
      let closure_6 = tmp14[0];
      let closure_7 = tmp14[1];
      if (cResult[4] === Symbol.for("react.memo_cache_sentinel")) {
        const items1 = [];
        cResult[4] = items1;
        tmp15 = items1;
      } else {
        tmp15 = cResult[4];
      }
      const tmp12Result = onShare(react.useState(tmp15), 2);
      const currentUser = tmp12Result[0];
      EmbeddedActivitiesStore = tmp12Result[1];
      if (cResult[5] === Symbol.for("react.memo_cache_sentinel")) {
        class X {
          constructor(arg0) {
            connectedActivityChannelId(arg0);
          }
        }
        cResult[5] = X;
      } else {
        class X {
          constructor(arg0) {
            connectedActivityChannelId(arg0);
          }
        }
      }
      if (cResult[6] === Symbol.for("react.memo_cache_sentinel")) {
        class X {
          constructor(arg0) {
            connectedActivityChannelId(arg0);
          }
        }
        const items2 = [currentUser];
        const fn2 = function q() {
          return currentUser.getCurrentUser();
        };
        cResult[6] = items2;
        cResult[7] = fn2;
        tmp19 = fn2;
        tmp18 = items2;
      } else {
        class X {
          constructor(arg0) {
            connectedActivityChannelId(arg0);
          }
        }
        tmp19 = cResult[7];
      }
      const tmpResult4 = applicationId(tmp2[14]);
      const stateFromStores1 = tmpResult4.useStateFromStores(tmp18, tmp19);
      const tmp12Result2 = onShare(react.useState(""), 2);
      let closure_11 = tmp12Result2[0];
      closure_12 = tmp12Result2[1];
      if (cResult[8] === applicationId) {
        class X {
          constructor(arg0) {
            connectedActivityChannelId(arg0);
          }
        }
      }
      cResult[8] = applicationId;
      cResult[9] = customId;
      cResult[10] = linkId;
      if (stateFromStores1 != null) {
        class X {
          constructor(arg0) {
            connectedActivityChannelId(arg0);
          }
        }
      }
      const fn3 = function z() {
        let id;
        const obj = { applicationId, referrerId: id, customId, linkId };
        id = undefined;
        const getActivityLaunchURL = getApplicationInstallURL.getActivityLaunchURL;
        getApplicationInstallURL;
        if (stateFromStores1 != null) {
          id = stateFromStores1.id;
        }
        closure_12(getActivityLaunchURL(obj));
      };
      cResult[11] = undefined;
      cResult[12] = fn3;
    }
  : (applicationId) => {
      let c6;
      let closure_10;
      let intl;
      let items10;
      let items9;
      let num;
      let obj5;
      let stringResult;
      let tmp24;
      let tmp7;
      applicationId = applicationId.applicationId;
      const customId = applicationId.customId;
      let linkId = applicationId.linkId;
      const message = applicationId.message;
      const onShare = applicationId.onShare;
      c6 = undefined;
      let first1;
      let first3;
      let tmp = first3();
      let tmp2 = applicationId;
      let obj = applicationId(linkId[14]);
      const items = [first1];
      const stateFromStores = obj.useStateFromStores(items, () => first1.getConnectedActivityChannelId());
      const items1 = [stateFromStores];
      const memo = stateFromStores.useMemo(() => {
        let destinationIdFromChannelId;
        if (null != stateFromStores) {
          const obj = formatResults;
          destinationIdFromChannelId = obj.getDestinationIdFromChannelId(tmp);
        }
        return destinationIdFromChannelId;
      }, items1);
      let tmp6 = onShare(stateFromStores.useState(false), 2);
      [tmp7, c6] = tmp6;
      const tmp8 = onShare(stateFromStores.useState(false), 2);
      const first = tmp8[0];
      const currentUser = tmp8[1];
      const tmp10 = onShare(stateFromStores.useState([]), 2);
      first1 = tmp10[0];
      UserRowModes = tmp10[1];
      const callback = stateFromStores.useCallback((arg0) => {
        closure_10(arg0);
      }, []);
      let obj2 = applicationId(linkId[14]);
      const items2 = [currentUser];
      const stateFromStores1 = obj2.useStateFromStores(items2, () => currentUser.getCurrentUser());
      const tmp13 = onShare(stateFromStores.useState(""), 2);
      const first2 = tmp13[0];
      let closure_13 = tmp15;
      const items3 = [applicationId, stateFromStores1, customId, linkId, tmp15];
      const effect = stateFromStores.useEffect(() => {
        let id;
        const obj = { applicationId, referrerId: id, customId, linkId };
        id = undefined;
        const getActivityLaunchURL = getApplicationInstallURL.getActivityLaunchURL;
        getApplicationInstallURL;
        if (stateFromStores1 != null) {
          id = stateFromStores1.id;
        }
        closure_13(getActivityLaunchURL(obj));
      }, items3);
      const items4 = [first, onShare];
      const callback1 = stateFromStores.useCallback(() => {
        onShare(false, first);
        const obj = openActivityShareLinkModal;
        const result = obj.closeActivityShareLinkModal();
      }, items4);
      const items5 = [applicationId];
      first3 = onShare(customId(linkId[18])(items5), 1)[0];
      const items6 = [first3, first, first2, message, onShare, first1];
      const items7 = [first2];
      const callback2 = stateFromStores.useCallback(
        message(function* () {
          let closure_1;
          let intl;
          let obj7;
          if (c3 === 2) {
            c3 = 3;
            const str = "Generator functions may not be called on executing generators";
            throw new TypeError("Generator functions may not be called on executing generators");
          } else {
            const tmp12 = arg0;
            if (tmp4 === 3) {
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
                let tmp;
                let tmp2;
                c3 = 2;
                if (0 === linkId) {
                  if (arg0 === 1) {
                    c3 = 3;
                    throw value;
                  } else if (arg0 === 2) {
                    c3 = 3;
                    let obj3 = { value, done: true };
                    return obj3;
                  } else {
                    tmp = undefined;
                    tmp2 = undefined;
                    if (null != first3) {
                      let tmp6 = globalThis;
                      linkId = 1;
                      c3 = 1;
                      let obj4 = {
                        value: Promise.all(first1.map(tmp(linkId[15]).getOrResolveChannelIdFromDestinationId)),
                        done: false,
                      };
                      return obj4;
                    }
                  }
                } else if (arg0 === 1) {
                  c3 = 3;
                  throw value;
                } else if (arg0 === 2) {
                  c3 = 3;
                  let obj = { value, done: true };
                  return obj;
                } else {
                  tmp = value.filter(tmp(linkId[19]).isNotNullish);
                  let obj5 = tmp(linkId[20]);
                  tmp2 = obj5.resolveActivityShareMessageContent(closure_129_3, closure_129_14, closure_129_12);
                  const flag = true;
                  closure_129_6(true);
                  const item = tmp.forEach(
                    (() => {
                      closure_0 = closure_1_3(function* (arg0) {
                        let obj2;
                        closure_0 = arg0;
                        if (c1 === 2) {
                          c1 = 3;
                          throw new TypeError("Generator functions may not be called on executing generators");
                        } else if (tmp2 === 3) {
                          if (arg0 === 1) {
                            throw value;
                          } else if (arg0 === 2) {
                            const obj3 = { value, done: true };
                            return obj3;
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
                                const obj4 = { value, done: true };
                                return obj4;
                              } else {
                                channel = channel.getChannel(closure_0);
                                if (null != channel) {
                                  const tmp6 = closure_2_1(closure_2_2[21]);
                                  const sendMessage = tmp6.sendMessage;
                                  const obj5 = { location: constants.ACTIVITY_SHARE };
                                  c2 = 1;
                                  c1 = 1;
                                  const obj6 = {
                                    value: sendMessage(closure_0, obj2.parse(channel, c1), false, obj5),
                                    done: false,
                                  };
                                  obj2 = closure_2_1(closure_2_2[22]);
                                  return obj6;
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
                            c1 = 3;
                            throw tmp12;
                          }
                        }
                      });
                      return function () {
                        return closure_0(...arguments);
                      };
                    })(),
                  );
                  let obj6 = {
                    key: "ACTIVITY_SHARE_LINK_SUCCESS",
                    content: intl.formatToPlainString(tmp(linkId[24]).t.jQULqL, obj7),
                  };
                  const open = tmp2(linkId[23]).open;
                  const tmp29 = tmp2(linkId[23]);
                  intl = tmp(linkId[24]).intl;
                  obj7 = { applicationName: closure_129_14.name };
                  open(obj6);
                  closure_129_4(true, closure_129_7);
                  const obj8 = tmp(linkId[17]);
                  const result = obj8.closeActivityShareLinkModal();
                }
                c3 = 3;
                return { value: "IconComponent", done: null };
              } catch (tmp10) {
                c3 = 3;
                throw tmp10;
              }
            }
          }
        }),
        items6,
      );
      const onPress = stateFromStores.useCallback(() => {
        const obj = ClipboardUtils;
        obj.copy(first2);
        currentUser(true);
        const obj2 = ToastUtils;
        obj2.presentLinkCopied();
      }, items7);
      let height = customId(linkId[29])({ ignoreKeyboard: true }).height;
      const items8 = [height];
      const top = customId(linkId[30])().top;
      let obj3 = {
        style: stateFromStores.useMemo(() => {
          height = "100%";
          PlatformUtils;
          return { height };
        }, items8),
        children: items9,
      };
      let obj7 = {
        headerStyle: tmp.header,
        title: intl.string(applicationId(linkId[24]).t.r9qKow),
        headerTitle(children) {
          const obj = { title: children.children, subtitle: message, variant: "redesign/heading-18/bold" };
          return first2(HeaderShared.GenericHeaderTitle, obj);
        },
        headerLeft: obj5.getHeaderCloseButton(callback1),
        headerRight(arg0) {
          let intl;
          const obj = { onPress, accessibilityLabel: intl.string(intl4.t.Xrt5Po), IconComponent: LinkIcon.LinkIcon };
          const HeaderActionButton = HeaderActionButton2.HeaderActionButton;
          const merged = Object.assign(arg0);
          intl = intl4.intl;
          return first2(HeaderActionButton, obj);
        },
        headerLeftContainerStyle: null,
        headerRightContainerStyle: null,
        headerStatusBarHeight: num + tmp18(tmp3[11]).space.PX_8,
        headerTitleAlign: "center",
      };
      const Header = applicationId(linkId[34]).Header;
      intl = applicationId(linkId[24]).intl;
      obj5 = applicationId(linkId[33]);
      ({ headerLeftContainer: obj4.headerLeftContainerStyle, headerRightContainer: obj4.headerRightContainerStyle } =
        tmp);
      let obj6 = applicationId(linkId[31]);
      num = 0;
      if (!obj6.isIOS()) {
        num = top;
      }
      items9 = [first2(Header, obj7)];
      let obj8 = { style: tmp.container, children: items10 };
      items10 = [first2(tmp18(tmp3[35]), { absolute: true }), ,];
      const obj9 = {
        disableGradient: true,
        disableStickySections: true,
        initialSelectedDestinations: [],
        insetEnd: 0,
        onSelectedDestinationChange: callback,
        originDestination: memo,
        rowMode: UserRowModes.TOGGLE,
      };
      items10[1] = first2(customId(linkId[36]), obj9);
      const obj10 = {
        disabled: tmp7,
        floatingBackgroundColor: tmp.container.backgroundColor,
        isVisible: first1.length > 0,
        loading: tmp7,
        onPress: tmp24,
        text: stringResult,
      };
      tmp24 = undefined;
      const ModalFloatingAction = tmp2(tmp3[37]).ModalFloatingAction;
      if (!tmp7) {
        tmp24 = callback2;
      }
      if (1 === first1.length) {
        const intl3 = tmp2(tmp3[24]).intl;
        stringResult = intl3.string(tmp2(tmp3[24]).t.TXNS7S);
      } else {
        const intl2 = tmp2(tmp3[24]).intl;
        const obj16 = { count: first1.length };
        stringResult = intl2.formatToPlainString(tmp2(tmp3[24]).t.jWtYUm, obj16);
      }
      items10[2] = first2(ModalFloatingAction, obj10);
      items9[1] = closure_13(c6, obj8);
      return closure_13(c6, obj3);
    };
let result = size.fileFinishedImporting("modules/activities/native/ActivityShareLinkModal.tsx");

export default tmp4;
