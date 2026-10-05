// === Module 14327: ActivityShareLinkModal ===

// Module 14327 (ActivityShareLinkModal)
import nativeDefault from "native" /* 587 */;
import util from "util" /* 1126 */;
import ToastUtils from "ToastUtils" /* 4567 */;
import LinkIcon from "LinkIcon" /* 4839 */;
import ClipboardUtils from "ClipboardUtils" /* 6688 */;
import HeaderActionButton from "HeaderActionButton" /* 6880 */;
import HeaderShared from "HeaderShared" /* 7498 */;
import formatResults from "formatResults" /* 10711 */;
import getApplicationInstallURL from "getApplicationInstallURL" /* 11756 */;
import openActivityShareLinkModal from "openActivityShareLinkModal" /* 14326 */;
import asyncGeneratorStep from "asyncGeneratorStep" /* 5 */;
import _slicedToArray from "module_32" /* 32 */;
import noop from "module_19" /* 19 */;
import ChannelStore from "ChannelStore" /* 2051 */;
import UserStore from "UserStore" /* 1377 */;
import EmbeddedActivitiesStore from "EmbeddedActivitiesStore" /* 2050 */;

require = fn;
const View = fn(17).View;
let UserRowModes = fn(10592).UserRowModes;
const MessageSendLocation = fn(4883).MessageSendLocation;
const jsxProd = fn(21);
({ jsx: closure_12, jsxs: map1 } = jsxProd);
const createStyles = fn(4890);
let obj2 = { headerLeftContainer: { paddingLeft: nativeDefault.space.PX_16 }, headerRightContainer: null, header: null, container: null };
let obj3 = { paddingLeft: nativeDefault.space.PX_16 };
obj2.headerRightContainer = { paddingRight: nativeDefault.space.PX_16 };
let obj4 = { paddingRight: nativeDefault.space.PX_16 };
obj2.header = { borderBottomWidth: 0, shadowColor: "transparent", backgroundColor: nativeDefault.colors.BACKGROUND_BASE_LOWER };
let obj5 = { borderBottomWidth: 0, shadowColor: "transparent", backgroundColor: nativeDefault.colors.BACKGROUND_BASE_LOWER };
obj2.container = { flex: 1, display: "flex", backgroundColor: nativeDefault.colors.BACKGROUND_BASE_LOWER };
let closure_14 = createStyles.createStyles(obj2);
const ReactCompilerGating = fn(558);
let obj6 = { flex: 1, display: "flex", backgroundColor: nativeDefault.colors.BACKGROUND_BASE_LOWER };
const size = fn(2);
let result = size.fileFinishedImporting("modules/activities/native/ActivityShareLinkModal.tsx");

export default ReactCompilerGating.isReactCompilerEnabled() ? ((applicationId) => {
  const cResult = applicationId(linkId[13]).c(74);
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
  [r10050, noop] = onShare(noop.useState(false), 2);
  const tmp14 = onShare(noop.useState(false), 2);
  closure_6 = tmp14[0];
  closure_7 = tmp14[1];
  if (cResult[4] === Symbol.for("react.memo_cache_sentinel")) {
    const items1 = [];
    cResult[4] = items1;
    let tmp15 = items1;
  } else {
    tmp15 = cResult[4];
  }
  const tmp12Result = onShare(noop.useState(tmp15), 2);
  const currentUser = tmp12Result[0];
  EmbeddedActivitiesStore = tmp12Result[1];
  if (cResult[5] === Symbol.for("react.memo_cache_sentinel")) {
    class X {
      constructor(arg0) {
        tmp = closure_9(applicationId);
        return;
      }
    }
    cResult[5] = X;
  } else {
    class X {
      constructor(arg0) {
        tmp = closure_9(applicationId);
        return;
      }
    }
  }
  if (cResult[6] === Symbol.for("react.memo_cache_sentinel")) {
    class X {
      constructor(arg0) {
        tmp = closure_9(applicationId);
        return;
      }
    }
    const items2 = [currentUser];
    const fn2 = function q() {
      return currentUser.getCurrentUser();
    };
    cResult[6] = items2;
    cResult[7] = fn2;
    let tmp19 = fn2;
    const tmp18 = items2;
  } else {
    class X {
      constructor(arg0) {
        tmp = closure_9(applicationId);
        return;
      }
    }
    tmp19 = cResult[7];
  }
  const tmp13 = onShare(noop.useState(false), 2);
  const stateFromStores1 = applicationId(linkId[14]).useStateFromStores(tmp18, tmp19);
  const tmp12Result2 = onShare(noop.useState(""), 2);
  closure_11 = tmp12Result2[0];
  closure_12 = tmp12Result2[1];
  if (cResult[8] === applicationId) {
    class X {
      constructor(arg0) {
        tmp = closure_9(applicationId);
        return;
      }
    }
  }
  cResult[8] = applicationId;
  cResult[9] = customId;
  cResult[10] = linkId;
  if (stateFromStores1 != null) {
    class X {
      constructor(arg0) {
        tmp = closure_9(applicationId);
        return;
      }
    }
  }
  const fn3 = function z() {
    const obj2 = { applicationId, referrerId: null, customId: null, linkId: null };
    let id;
    if (stateFromStores1 != null) {
      id = stateFromStores1.id;
    }
    obj2.referrerId = id;
    obj2.customId = customId;
    obj2.linkId = linkId;
    closure_12(getApplicationInstallURL.getActivityLaunchURL(obj2));
  };
  cResult[11] = undefined;
  cResult[12] = fn3;
  const tmpResult4 = applicationId(linkId[14]);
}) : ((applicationId) => {
  applicationId = applicationId.applicationId;
  const customId = applicationId.customId;
  const linkId = applicationId.linkId;
  const message = applicationId.message;
  const onShare = applicationId.onShare;
  c6 = undefined;
  let first1;
  let first3;
  const tmp = first3();
  const items = [first1];
  const stateFromStores = applicationId(linkId[14]).useStateFromStores(items, () => first1.getConnectedActivityChannelId());
  const items1 = [stateFromStores];
  const memo = stateFromStores.useMemo(() => {
    let destinationIdFromChannelId;
    if (null != stateFromStores) {
      destinationIdFromChannelId = formatResults.getDestinationIdFromChannelId(tmp);
    }
    return destinationIdFromChannelId;
  }, items1);
  let obj = applicationId(linkId[14]);
  [tmp7, c6] = onShare(stateFromStores.useState(false), 2);
  const tmp8 = onShare(stateFromStores.useState(false), 2);
  const first = tmp8[0];
  const currentUser = tmp8[1];
  const tmp10 = onShare(stateFromStores.useState([]), 2);
  first1 = tmp10[0];
  UserRowModes = tmp10[1];
  const callback = stateFromStores.useCallback((arg0) => {
    closure_10(arg0);
  }, []);
  const tmp6 = onShare(stateFromStores.useState(false), 2);
  const items2 = [currentUser];
  const stateFromStores1 = applicationId(linkId[14]).useStateFromStores(items2, () => currentUser.getCurrentUser());
  const tmp13 = onShare(stateFromStores.useState(""), 2);
  const first2 = tmp13[0];
  closure_13 = tmp15;
  const items3 = [applicationId, stateFromStores1, customId, linkId, tmp13[1]];
  const effect = stateFromStores.useEffect(() => {
    const obj2 = { applicationId, referrerId: null, customId: null, linkId: null };
    let id;
    if (stateFromStores1 != null) {
      id = stateFromStores1.id;
    }
    obj2.referrerId = id;
    obj2.customId = customId;
    obj2.linkId = linkId;
    closure_13(getApplicationInstallURL.getActivityLaunchURL(obj2));
  }, items3);
  const items4 = [first, onShare];
  const callback1 = stateFromStores.useCallback(() => {
    onShare(false, first);
    const result = openActivityShareLinkModal.closeActivityShareLinkModal();
  }, items4);
  const items5 = [applicationId];
  first3 = onShare(customId(linkId[18])(items5), 1)[0];
  const items6 = [first3, first, first2, message, onShare, first1];
  const items7 = [first2];
  const callback2 = stateFromStores.useCallback(message(function*() {
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
              let obj4 = { value: Promise.all(first1.map(tmp2(10711).getOrResolveChannelIdFromDestinationId)), done: false };
              return obj4;
            } else {
              c3 = 3;
            }
          }
        } else if (arg0 === 1) {
          c3 = 3;
          throw value;
        } else if (arg0 !== 2) {
          closure_128_0 = value.filter(tmp2(1375).isNotNullish);
          closure_128_1 = tmp2(14328).resolveActivityShareMessageContent(closure_129_3, closure_129_14, closure_129_12);
          closure_129_6(true);
          const item = closure_128_0.forEach((() => {
            closure_0 = closure_1_3(function*(arg0) {
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
                        const obj2 = closure_2_1(6965);
                        const obj6 = { location: constants.ACTIVITY_SHARE };
                        c2 = 1;
                        c1 = 1;
                        const obj7 = { value: obj2.sendMessage(closure_0, closure_2_1(7166).parse(channel, c1), false, obj6), done: false };
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
            return function() {
              const self = this;
              const apply = closure_0.apply;
              if (typeof apply === "unknown") {
                let applyArgumentsResult = HermesBuiltin.applyArguments(self);
              } else {
                applyArgumentsResult = apply(self, arguments);
              }
              return applyArgumentsResult;
            };
          })());
          let obj5 = tmp2(14328);
          let obj7 = { key: "ACTIVITY_SHARE_LINK_SUCCESS", content: null };
          const intl = tmp2(1126).intl;
          const obj8 = { applicationName: closure_129_14.name };
          obj7.content = intl.formatToPlainString(tmp2(1126).t.jQULqL, obj8);
          tmp3(4568).open(obj7);
          closure_129_4(true, closure_129_7);
          let obj6 = tmp3(4568);
          const result = tmp2(14326).closeActivityShareLinkModal();
          const obj9 = tmp2(14326);
        }
        c3 = 3;
        let obj = { value, done: true };
        return obj;
      } catch (tmp11) {
        c3 = tmp;
        throw tmp11;
      }
    }
  }), items6);
  const onPress = stateFromStores.useCallback(() => {
    ClipboardUtils.copy(first2);
    currentUser(true);
    ToastUtils.presentLinkCopied();
  }, items7);
  let height = customId(linkId[29])({ ignoreKeyboard: true }).height;
  const items8 = [height];
  let obj3 = {
    style: stateFromStores.useMemo(() => {
      height = "100%";
      return { height };
    }, items8),
    children: null
  };
  let obj7 = { headerStyle: tmp.header, title: null, headerTitle: null, headerLeft: null, headerRight: null, headerLeftContainerStyle: null, headerRightContainerStyle: null, headerStatusBarHeight: null, headerTitleAlign: "center" };
  let intl = applicationId(linkId[24]).intl;
  obj7.title = intl.string(applicationId(linkId[24]).t.r9qKow);
  obj7.headerTitle = function headerTitle(children) {
    return __initData(HeaderShared.GenericHeaderTitle, { title: children.children, subtitle: message, variant: "redesign/heading-18/bold" });
  };
  let obj2 = applicationId(linkId[14]);
  obj7.headerLeft = applicationId(linkId[33]).getHeaderCloseButton(callback1);
  obj7.headerRight = function headerRight(arg0) {
    const obj = {};
    const merged = Object.assign(arg0);
    obj.onPress = onPress;
    const intl = util.intl;
    obj.accessibilityLabel = intl.string(util.t.Xrt5Po);
    obj.IconComponent = LinkIcon.LinkIcon;
    return __initData(HeaderActionButton.HeaderActionButton, obj);
  };
  ({ headerLeftContainer: obj4.headerLeftContainerStyle, headerRightContainer: obj4.headerRightContainerStyle } = tmp);
  let obj5 = applicationId(linkId[33]);
  let num = 0;
  if (!obj6.isIOS()) {
    num = customId(linkId[30])().top;
  }
  obj7.headerStatusBarHeight = num + customId(linkId[11]).space.PX_8;
  const items9 = [first2(applicationId(linkId[34]).Header, obj7), ];
  let obj8 = { style: tmp.container, children: null };
  const items10 = [first2(customId(linkId[35]), { absolute: true }), first2(customId(linkId[36]), { disableGradient: true, disableStickySections: true, initialSelectedDestinations: [], insetEnd: 0, onSelectedDestinationChange: callback, originDestination: memo, rowMode: UserRowModes.TOGGLE }), ];
  const obj10 = { disabled: tmp7, floatingBackgroundColor: tmp.container.backgroundColor, isVisible: first1.length > 0, loading: tmp7, onPress: null, text: null };
  let tmp24;
  if (!tmp7) {
    tmp24 = callback2;
  }
  obj10.onPress = tmp24;
  if (1 === first1.length) {
    const intl3 = tmp2(tmp3[24]).intl;
    let stringResult = intl3.string(tmp2(tmp3[24]).t.TXNS7S);
  } else {
    const intl2 = tmp2(tmp3[24]).intl;
    const obj16 = { count: length };
    stringResult = intl2.formatToPlainString(tmp2(tmp3[24]).t.jWtYUm, obj16);
  }
  obj10.text = stringResult;
  items10[2] = first2(applicationId(linkId[37]).ModalFloatingAction, obj10);
  obj8.children = items10;
  items9[1] = closure_13(c6, obj8);
  obj3.children = items9;
  return closure_13(c6, obj3);
});