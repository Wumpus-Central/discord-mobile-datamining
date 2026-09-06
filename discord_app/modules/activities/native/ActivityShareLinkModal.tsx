// === Module 14486: ActivityShareLinkModal ===

// Module 14486 (ActivityShareLinkModal)
import nativeDefault from "native" /* 576 */;
import util from "util" /* 1114 */;
import ToastUtils from "ToastUtils" /* 4258 */;
import LinkIcon from "LinkIcon" /* 4503 */;
import ClipboardUtils from "ClipboardUtils" /* 7190 */;
import HeaderActionButton from "HeaderActionButton" /* 7377 */;
import HeaderShared from "HeaderShared" /* 7863 */;
import formatResults from "formatResults" /* 10981 */;
import getApplicationInstallURL from "getApplicationInstallURL" /* 12132 */;
import openActivityShareLinkModal from "openActivityShareLinkModal" /* 14485 */;
import asyncGeneratorStep from "asyncGeneratorStep" /* 5 */;
import _slicedToArray from "module_32" /* 32 */;
import noop from "module_19" /* 19 */;
import ChannelStore from "ChannelStore" /* 1957 */;
import UserStore from "UserStore" /* 1371 */;
import EmbeddedActivitiesStore from "EmbeddedActivitiesStore" /* 1956 */;

require = fn;
const View = fn(17).View;
let UserRowModes = fn(10860).UserRowModes;
const MessageSendLocation = fn(4553).MessageSendLocation;
const jsxProd = fn(21);
({ jsx: closure_12, jsxs: map1 } = jsxProd);
fn(4560);
let createStyles = { headerLeftContainer: null, headerRightContainer: null, header: null, container: null };
createStyles = { paddingLeft: nativeDefault.space.PX_16 };
createStyles.headerLeftContainer = createStyles;
createStyles.headerRightContainer = { paddingRight: nativeDefault.space.PX_16 };
let obj1 = { paddingRight: nativeDefault.space.PX_16 };
createStyles.header = { borderBottomWidth: 0, shadowColor: "transparent", backgroundColor: nativeDefault.colors.BACKGROUND_BASE_LOWER };
let obj2 = { borderBottomWidth: 0, shadowColor: "transparent", backgroundColor: nativeDefault.colors.BACKGROUND_BASE_LOWER };
createStyles.container = { flex: 1, display: "flex", backgroundColor: nativeDefault.colors.BACKGROUND_BASE_LOWER };
let closure_14 = createStyles.createStyles(createStyles);
const size = fn(2);
let result = size.fileFinishedImporting("modules/activities/native/ActivityShareLinkModal.tsx");

export default function ActivityShareLinkModal(applicationId) {
  applicationId = applicationId.applicationId;
  const customId = applicationId.customId;
  const linkId = applicationId.linkId;
  const message = applicationId.message;
  const onShare = applicationId.onShare;
  c6 = undefined;
  let first1;
  let first3;
  const tmp = first3();
  let obj = applicationId(linkId[12]);
  const items = [first1];
  const stateFromStores = obj.useStateFromStores(items, () => first1.getConnectedActivityChannelId());
  const items1 = [stateFromStores];
  const memo = stateFromStores.useMemo(() => {
    let destinationIdFromChannelId;
    if (null != stateFromStores) {
      destinationIdFromChannelId = formatResults.getDestinationIdFromChannelId(tmp);
    }
    return destinationIdFromChannelId;
  }, items1);
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
  let obj1 = applicationId(linkId[12]);
  const items2 = [currentUser];
  const stateFromStores1 = obj1.useStateFromStores(items2, () => currentUser.getCurrentUser());
  const tmp13 = onShare(stateFromStores.useState(""), 2);
  const first2 = tmp13[0];
  closure_13 = tmp15;
  const items3 = [applicationId, stateFromStores1, customId, linkId, tmp13[1]];
  const effect = stateFromStores.useEffect(() => {
    const obj = { applicationId, referrerId: null, customId: null, linkId: null };
    let id;
    if (stateFromStores1 != null) {
      id = stateFromStores1.id;
    }
    obj.referrerId = id;
    obj.customId = customId;
    obj.linkId = linkId;
    closure_13(obj.getActivityLaunchURL(obj));
  }, items3);
  const items4 = [first, onShare];
  const callback1 = stateFromStores.useCallback(() => {
    onShare(false, first);
    const result = openActivityShareLinkModal.closeActivityShareLinkModal();
  }, items4);
  const items5 = [applicationId];
  first3 = onShare(customId(linkId[16])(items5), 1)[0];
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
        let obj = { value, done: true };
        return obj;
      } else {
        return { value: "HermesInternal", done: null };
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
            obj = { value, done: true };
            return obj;
          } else {
            closure_128_0 = undefined;
            closure_128_1 = undefined;
            if (null != first3) {
              dependencyMap = 1;
              c3 = 1;
              let obj1 = { value: Promise.all(first1.map(tmp2(10981).getOrResolveChannelIdFromDestinationId)), done: false };
              return obj1;
            } else {
              c3 = 3;
            }
          }
        } else if (arg0 === 1) {
          c3 = 3;
          throw value;
        } else if (arg0 !== 2) {
          closure_128_0 = value.filter(tmp2(1369).isNotNullish);
          closure_128_1 = tmp2(14487).resolveActivityShareMessageContent(closure_129_3, closure_129_14, closure_129_12);
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
                  let obj = { value, done: true };
                  return obj;
                } else {
                  return { value: "HermesInternal", done: null };
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
                      obj = { value, done: true };
                      return obj;
                    } else {
                      channel = channel.getChannel(closure_0);
                      if (null != channel) {
                        let obj1 = closure_2_1(7456);
                        let obj2 = closure_2_1(7682);
                        obj1 = { location: constants.ACTIVITY_SHARE };
                        c2 = 1;
                        c1 = 1;
                        obj2 = { value: null, done: false };
                        obj2.value = obj1.sendMessage(closure_0, obj2.parse(channel, c1), false, obj1);
                        return obj2;
                      }
                    }
                  } else if (arg0 === 1) {
                    c1 = 3;
                    throw value;
                  } else if (arg0 === 2) {
                    c1 = 3;
                    obj = { value, done: true };
                    return obj;
                  }
                  c1 = 3;
                  return { value: "HermesInternal", done: null };
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
          const obj5 = tmp2(14487);
          let obj2 = { key: "ACTIVITY_SHARE_LINK_SUCCESS", content: null };
          const intl = tmp2(1114).intl;
          const obj3 = { applicationName: closure_129_14.name };
          obj2.content = intl.formatToPlainString(tmp2(1114).t.jQULqL, obj3);
          tmp3(4259).open(obj2);
          closure_129_4(true, closure_129_7);
          const obj6 = tmp3(4259);
          const result = tmp2(14485).closeActivityShareLinkModal();
          const obj9 = tmp2(14485);
        }
        c3 = 3;
        obj = { value, done: true };
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
  let height = customId(linkId[25])({ ignoreKeyboard: true }).height;
  const items8 = [height];
  obj = {
    style: stateFromStores.useMemo(() => {
      height = "100%";
      return { height };
    }, items8),
    children: null
  };
  obj = { headerStyle: tmp.header, title: null, headerTitle: null, headerLeft: null, headerRight: null, headerLeftContainerStyle: null, headerRightContainerStyle: null, headerStatusBarHeight: null, headerTitleAlign: "center" };
  let intl = applicationId(linkId[22]).intl;
  obj.title = intl.string(applicationId(linkId[22]).t.r9qKow);
  obj.headerTitle = function headerTitle(children) {
    return closure_2_12(HeaderShared.GenericHeaderTitle, { title: children.children, subtitle: message, variant: "redesign/heading-18/bold" });
  };
  let obj4 = applicationId(linkId[30]);
  obj.headerLeft = obj4.getHeaderCloseButton(callback1);
  obj.headerRight = function headerRight(arg0) {
    const obj = {};
    const merged = Object.assign(arg0);
    obj.onPress = onPress;
    const intl = util.intl;
    obj.accessibilityLabel = intl.string(util.t.Xrt5Po);
    obj.IconComponent = LinkIcon.LinkIcon;
    return closure_2_12(HeaderActionButton.HeaderActionButton, obj);
  };
  ({ headerLeftContainer: obj4.headerLeftContainerStyle, headerRightContainer: obj4.headerRightContainerStyle } = tmp);
  const tmp6 = onShare(stateFromStores.useState(false), 2);
  let num = 0;
  if (!obj6.isIOS()) {
    num = customId(linkId[26])().top;
  }
  obj.headerStatusBarHeight = num + customId(linkId[11]).space.PX_8;
  const items9 = [first2(applicationId(linkId[28]).Header, obj), ];
  obj1 = { style: tmp.container, children: null };
  const items10 = [first2(customId(linkId[33]), { absolute: true }), first2(customId(linkId[34]), { disableGradient: true, disableStickySections: true, initialSelectedDestinations: [], insetEnd: 0, onSelectedDestinationChange: callback, originDestination: memo, rowMode: UserRowModes.TOGGLE }), ];
  let obj3 = { disabled: tmp7, floatingBackgroundColor: tmp.container.backgroundColor, isVisible: first1.length > 0, loading: tmp7, onPress: null, text: null };
  let tmp24;
  if (!tmp7) {
    tmp24 = callback2;
  }
  obj3.onPress = tmp24;
  if (1 === first1.length) {
    const intl3 = tmp2(tmp3[22]).intl;
    let stringResult = intl3.string(tmp2(tmp3[22]).t.TXNS7S);
  } else {
    const intl2 = tmp2(tmp3[22]).intl;
    obj4 = { count: length };
    stringResult = intl2.formatToPlainString(tmp2(tmp3[22]).t.jWtYUm, obj4);
  }
  obj3.text = stringResult;
  items10[2] = first2(applicationId(linkId[35]).ModalFloatingAction, obj3);
  obj1.children = items10;
  items9[1] = closure_13(c6, obj1);
  obj.children = items9;
  return closure_13(c6, obj);
};