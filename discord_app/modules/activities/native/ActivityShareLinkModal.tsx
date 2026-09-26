// === Module 14049: ActivityShareLinkModal ===

// Module 14049 (ActivityShareLinkModal)
import nativeDefault from "native" /* 576 */;
import util from "util" /* 1115 */;
import ToastUtils from "ToastUtils" /* 4527 */;
import LinkIcon from "LinkIcon" /* 4775 */;
import ClipboardUtils from "ClipboardUtils" /* 6610 */;
import HeaderActionButton from "HeaderActionButton" /* 6795 */;
import HeaderShared from "HeaderShared" /* 7288 */;
import formatResults from "formatResults" /* 10444 */;
import getApplicationInstallURL from "getApplicationInstallURL" /* 11614 */;
import openActivityShareLinkModal from "openActivityShareLinkModal" /* 14048 */;
import asyncGeneratorStep from "asyncGeneratorStep" /* 5 */;
import _slicedToArray from "module_32" /* 32 */;
import noop from "module_19" /* 19 */;
import ChannelStore from "ChannelStore" /* 2045 */;
import UserStore from "UserStore" /* 1372 */;
import EmbeddedActivitiesStore from "EmbeddedActivitiesStore" /* 2044 */;

require = fn;
const View = fn(17).View;
let UserRowModes = fn(10320).UserRowModes;
const MessageSendLocation = fn(4829).MessageSendLocation;
const jsxProd = fn(21);
({ jsx: closure_12, jsxs: map1 } = jsxProd);
const createStyles = fn(4836);
let obj2 = { headerLeftContainer: { paddingLeft: nativeDefault.space.PX_16 }, headerRightContainer: null, header: null, container: null };
let obj3 = { paddingLeft: nativeDefault.space.PX_16 };
obj2.headerRightContainer = { paddingRight: nativeDefault.space.PX_16 };
let obj4 = { paddingRight: nativeDefault.space.PX_16 };
obj2.header = { borderBottomWidth: 0, shadowColor: "transparent", backgroundColor: nativeDefault.colors.BACKGROUND_BASE_LOWER };
let obj5 = { borderBottomWidth: 0, shadowColor: "transparent", backgroundColor: nativeDefault.colors.BACKGROUND_BASE_LOWER };
obj2.container = { flex: 1, display: "flex", backgroundColor: nativeDefault.colors.BACKGROUND_BASE_LOWER };
let closure_14 = createStyles.createStyles(obj2);
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
  const items = [first1];
  const stateFromStores = applicationId(linkId[12]).useStateFromStores(items, () => first1.getConnectedActivityChannelId());
  const items1 = [stateFromStores];
  const memo = stateFromStores.useMemo(() => {
    let destinationIdFromChannelId;
    if (null != stateFromStores) {
      destinationIdFromChannelId = formatResults.getDestinationIdFromChannelId(tmp);
    }
    return destinationIdFromChannelId;
  }, items1);
  let obj = applicationId(linkId[12]);
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
  const stateFromStores1 = applicationId(linkId[12]).useStateFromStores(items2, () => currentUser.getCurrentUser());
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
        let obj2 = { value, done: true };
        return obj2;
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
            const obj3 = { value, done: true };
            return obj3;
          } else {
            closure_128_0 = undefined;
            closure_128_1 = undefined;
            if (null != first3) {
              dependencyMap = 1;
              c3 = 1;
              let obj4 = { value: Promise.all(first1.map(tmp2(10444).getOrResolveChannelIdFromDestinationId)), done: false };
              return obj4;
            } else {
              c3 = 3;
            }
          }
        } else if (arg0 === 1) {
          c3 = 3;
          throw value;
        } else if (arg0 !== 2) {
          closure_128_0 = value.filter(tmp2(1370).isNotNullish);
          closure_128_1 = tmp2(14050).resolveActivityShareMessageContent(closure_129_3, closure_129_14, closure_129_12);
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
                      const obj5 = { value, done: true };
                      return obj5;
                    } else {
                      channel = channel.getChannel(closure_0);
                      if (null != channel) {
                        const obj2 = closure_2_1(6876);
                        const obj6 = { location: constants.ACTIVITY_SHARE };
                        c2 = 1;
                        c1 = 1;
                        const obj7 = { value: obj2.sendMessage(closure_0, closure_2_1(7095).parse(channel, c1), false, obj6), done: false };
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
          let obj5 = tmp2(14050);
          let obj7 = { key: "ACTIVITY_SHARE_LINK_SUCCESS", content: null };
          const intl = tmp2(1115).intl;
          const obj8 = { applicationName: closure_129_14.name };
          obj7.content = intl.formatToPlainString(tmp2(1115).t.jQULqL, obj8);
          tmp3(4528).open(obj7);
          closure_129_4(true, closure_129_7);
          let obj6 = tmp3(4528);
          const result = tmp2(14048).closeActivityShareLinkModal();
          const obj9 = tmp2(14048);
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
  let height = customId(linkId[25])({ ignoreKeyboard: true }).height;
  const items8 = [height];
  let obj3 = {
    style: stateFromStores.useMemo(() => {
      height = "100%";
      return { height };
    }, items8),
    children: null
  };
  let obj7 = { headerStyle: tmp.header, title: null, headerTitle: null, headerLeft: null, headerRight: null, headerLeftContainerStyle: null, headerRightContainerStyle: null, headerStatusBarHeight: null, headerTitleAlign: "center" };
  let intl = applicationId(linkId[22]).intl;
  obj7.title = intl.string(applicationId(linkId[22]).t.r9qKow);
  obj7.headerTitle = function headerTitle(children) {
    return closure_2_12(HeaderShared.GenericHeaderTitle, { title: children.children, subtitle: message, variant: "redesign/heading-18/bold" });
  };
  let obj2 = applicationId(linkId[12]);
  obj7.headerLeft = applicationId(linkId[30]).getHeaderCloseButton(callback1);
  obj7.headerRight = function headerRight(arg0) {
    const obj = {};
    const merged = Object.assign(arg0);
    obj.onPress = onPress;
    const intl = util.intl;
    obj.accessibilityLabel = intl.string(util.t.Xrt5Po);
    obj.IconComponent = LinkIcon.LinkIcon;
    return closure_2_12(HeaderActionButton.HeaderActionButton, obj);
  };
  ({ headerLeftContainer: obj4.headerLeftContainerStyle, headerRightContainer: obj4.headerRightContainerStyle } = tmp);
  let obj5 = applicationId(linkId[30]);
  let num = 0;
  if (!obj6.isIOS()) {
    num = customId(linkId[26])().top;
  }
  obj7.headerStatusBarHeight = num + customId(linkId[11]).space.PX_8;
  const items9 = [first2(applicationId(linkId[28]).Header, obj7), ];
  let obj8 = { style: tmp.container, children: null };
  const items10 = [first2(customId(linkId[33]), { absolute: true }), first2(customId(linkId[34]), { disableGradient: true, disableStickySections: true, initialSelectedDestinations: [], insetEnd: 0, onSelectedDestinationChange: callback, originDestination: memo, rowMode: UserRowModes.TOGGLE }), ];
  const obj10 = { disabled: tmp7, floatingBackgroundColor: tmp.container.backgroundColor, isVisible: first1.length > 0, loading: tmp7, onPress: null, text: null };
  let tmp24;
  if (!tmp7) {
    tmp24 = callback2;
  }
  obj10.onPress = tmp24;
  if (1 === first1.length) {
    const intl3 = tmp2(tmp3[22]).intl;
    let stringResult = intl3.string(tmp2(tmp3[22]).t.TXNS7S);
  } else {
    const intl2 = tmp2(tmp3[22]).intl;
    const obj16 = { count: length };
    stringResult = intl2.formatToPlainString(tmp2(tmp3[22]).t.jWtYUm, obj16);
  }
  obj10.text = stringResult;
  items10[2] = first2(applicationId(linkId[35]).ModalFloatingAction, obj10);
  obj8.children = items10;
  items9[1] = closure_13(c6, obj8);
  obj3.children = items9;
  return closure_13(c6, obj3);
};