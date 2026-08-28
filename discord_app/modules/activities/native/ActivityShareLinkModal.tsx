// === Module 14073: ActivityShareLinkModal ===

// Module 14073 (ActivityShareLinkModal)
import ThemesDefault from "Themes" /* 712 */;
import closure_3 from "asyncGeneratorStep" /* 5 */;
import closure_4 from "_slicedToArray" /* 32 */;
import closure_5 from "noop" /* 19 */;
import { View } from "get ActivityIndicator" /* 17 */;
import closure_7 from "ensureGuildLoaded" /* 1391 */;
import closure_8 from "mergeGuildAvatar" /* 1923 */;
import closure_9 from "participantFromServer" /* 1390 */;
import { UserRowModes } from "UserRowModes" /* 10570 */;
import { MessageSendLocation } from "MESSAGE_GROUP_SPACING" /* 4439 */;
import jsxProd from "jsxProd" /* 21 */;
import createCacheKey from "createCacheKey" /* 4446 */;

const require = arg1;
({ jsx: closure_12, jsxs: map1 } = jsxProd);
createCacheKey = { headerLeftContainer: null, headerRightContainer: null, header: null, container: null };
createCacheKey = { paddingLeft: ThemesDefault.space.PX_16 };
createCacheKey[0] = createCacheKey;
createCacheKey[1] = { paddingRight: ThemesDefault.space.PX_16 };
let obj1 = { paddingRight: ThemesDefault.space.PX_16 };
createCacheKey[2] = { borderBottomWidth: 0, shadowColor: "transparent", backgroundColor: ThemesDefault.colors.BACKGROUND_BASE_LOWER };
let obj2 = { borderBottomWidth: 0, shadowColor: "transparent", backgroundColor: ThemesDefault.colors.BACKGROUND_BASE_LOWER };
createCacheKey[3] = { flex: 1, display: "flex", backgroundColor: ThemesDefault.colors.BACKGROUND_BASE_LOWER };
let closure_14 = createCacheKey.createStyles(createCacheKey);
let obj3 = { flex: 1, display: "flex", backgroundColor: ThemesDefault.colors.BACKGROUND_BASE_LOWER };
let result = require("set").fileFinishedImporting("modules/activities/native/ActivityShareLinkModal.tsx");

export default function ActivityShareLinkModal(applicationId) {
  applicationId = applicationId.applicationId;
  const customId = applicationId.customId;
  const linkId = applicationId.linkId;
  const message = applicationId.message;
  const onShare = applicationId.onShare;
  let stateFromStores;
  c6 = undefined;
  let first;
  closure_8 = undefined;
  let first1;
  UserRowModes = undefined;
  let stateFromStores1;
  let first2;
  closure_13 = undefined;
  let first3;
  closure_15 = undefined;
  let height;
  const tmp = first3();
  let obj = applicationId(linkId[12]);
  const items = [first1];
  stateFromStores = obj.useStateFromStores(items, () => first1.getConnectedActivityChannelId());
  const items1 = [stateFromStores];
  const memo = stateFromStores.useMemo(() => {
    let destinationIdFromChannelId;
    if (null != stateFromStores) {
      destinationIdFromChannelId = applicationId(linkId[13]).getDestinationIdFromChannelId(tmp);
      const obj = applicationId(linkId[13]);
    }
    return destinationIdFromChannelId;
  }, items1);
  [tmp7, c6] = onShare(stateFromStores.useState(false), 2);
  const tmp8 = onShare(stateFromStores.useState(false), 2);
  first = tmp8[0];
  closure_8 = tmp8[1];
  const tmp10 = onShare(stateFromStores.useState([]), 2);
  first1 = tmp10[0];
  UserRowModes = tmp10[1];
  const callback = stateFromStores.useCallback((arg0) => {
    callback(arg0);
  }, []);
  obj1 = applicationId(linkId[12]);
  const items2 = [closure_8];
  stateFromStores1 = obj1.useStateFromStores(items2, () => currentUser.getCurrentUser());
  const tmp13 = onShare(stateFromStores.useState(""), 2);
  first2 = tmp13[0];
  closure_13 = tmp15;
  const items3 = [applicationId, stateFromStores1, customId, linkId, tmp13[1]];
  const effect = stateFromStores.useEffect(() => {
    let obj = applicationId(linkId[14]);
    obj = { applicationId, referrerId: null, customId: null, linkId: null };
    let id;
    if (stateFromStores1 != null) {
      id = stateFromStores1.id;
    }
    obj[1] = id;
    obj[2] = customId;
    obj[3] = linkId;
    closure_13(obj.getActivityLaunchURL(obj));
  }, items3);
  const items4 = [first, onShare];
  const callback1 = stateFromStores.useCallback(() => {
    onShare(false, first);
    const result = applicationId(linkId[15]).closeActivityShareLinkModal();
  }, items4);
  const items5 = [applicationId];
  first3 = onShare(customId(linkId[16])(items5), 1)[0];
  const items6 = [first3, first, first2, message, onShare, first1];
  const items7 = [first2];
  const callback2 = stateFromStores.useCallback(message(function*() {
    if (c3 === 2) {
      c3 = 3;
      HermesBuiltin.throwTypeError();
    } else if (tmp5 === 3) {
      if (arg0 === 1) {
        throw arg1;
      } else if (arg0 === 2) {
        let obj = { value: null, done: true };
        obj[0] = arg1;
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
            throw arg1;
          } else if (arg0 === 2) {
            c3 = 3;
            obj = { value: null, done: true };
            obj[0] = arg1;
            return obj;
          } else {
            closure_1 = tmp3;
            closure_0 = tmp2;
            closure_0 = undefined;
            closure_1 = undefined;
            if (null != closure_1_14) {
              dependencyMap = 1;
              c3 = 1;
              obj1 = { value: null, done: false };
              obj1[0] = Promise.all(closure_1_9.map(closure_1_0(10656).getOrResolveChannelIdFromDestinationId));
              return obj1;
            } else {
              c3 = 3;
            }
          }
        } else if (arg0 === 1) {
          c3 = 3;
          throw arg1;
        } else if (arg0 !== 2) {
          closure_0 = arg1.filter(closure_1_0(1370).isNotNullish);
          closure_1 = closure_1_0(14074).resolveActivityShareMessageContent(c3, name, closure_12);
          callback2(true);
          const item = closure_0.forEach((() => {
            closure_0 = v3((arg0) => {
              closure_0 = arg0;
              c2 = 0;
              c1 = 0;
              return (function*(arg0) {
                if (c1 === 2) {
                  c1 = 3;
                  HermesBuiltin.throwTypeError();
                } else if (tmp3 === 3) {
                  if (arg0 === 1) {
                    throw arg1;
                  } else if (arg0 === 2) {
                    let obj = { value: null, done: true };
                    obj[0] = arg1;
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
                        throw arg1;
                      } else if (arg0 === 2) {
                        c1 = 3;
                        obj = { value: null, done: true };
                        obj[0] = arg1;
                        return obj;
                      } else {
                        const channel = closure_2_7.getChannel(closure_0);
                        if (null != channel) {
                          obj1 = closure_2_1(closure_2_2[19]);
                          let obj2 = closure_2_1(closure_2_2[20]);
                          obj1 = { location: null };
                          obj1[0] = closure_2_11.ACTIVITY_SHARE;
                          c2 = 1;
                          c1 = 1;
                          obj2 = { value: null, done: false };
                          obj2[0] = obj1.sendMessage(tmp18, obj2.parse(channel, c1), false, obj1);
                          return obj2;
                        }
                      }
                    } else if (arg0 === 1) {
                      c1 = 3;
                      throw arg1;
                    } else if (arg0 === 2) {
                      c1 = 3;
                      obj = { value: null, done: true };
                      obj[0] = arg1;
                      return obj;
                    }
                    c1 = 3;
                    return { value: "HermesInternal", done: null };
                  } catch (tmp12) {
                    c1 = tmp;
                    throw tmp12;
                  }
                }
              })();
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
          const obj5 = closure_1_0(14074);
          let obj2 = { key: "ACTIVITY_SHARE_LINK_SUCCESS", content: null };
          const intl = closure_1_0(1236).intl;
          const obj3 = { applicationName: null };
          obj3[0] = name.name;
          obj2[1] = intl.formatToPlainString(closure_1_0(1236).t.jQULqL, obj3);
          closure_1_1(4163).open(obj2);
          callback(true, closure_7);
          const obj6 = closure_1_1(4163);
          const result = closure_1_0(14072).closeActivityShareLinkModal();
          const obj9 = closure_1_0(14072);
        }
        c3 = 3;
        obj = { value: null, done: true };
        obj[0] = arg1;
        return obj;
      } catch (tmp11) {
        c3 = tmp;
        throw tmp11;
      }
    }
  }), items6);
  closure_15 = stateFromStores.useCallback(() => {
    applicationId(linkId[23]).copy(first2);
    currentUser(true);
    const obj = applicationId(linkId[23]);
    applicationId(linkId[24]).presentLinkCopied();
  }, items7);
  height = customId(linkId[25])({ ignoreKeyboard: true }).height;
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
  obj[1] = intl.string(applicationId(linkId[22]).t.r9qKow);
  obj[2] = function headerTitle(children) {
    return first2(applicationId(linkId[29]).GenericHeaderTitle, { title: children.children, subtitle: message, variant: "redesign/heading-18/bold" });
  };
  let obj4 = applicationId(linkId[30]);
  obj[3] = obj4.getHeaderCloseButton(callback1);
  obj[4] = function headerRight(arg0) {
    const obj = {};
    const merged = Object.assign(arg0);
    obj.onPress = closure_15;
    const intl = applicationId(linkId[22]).intl;
    obj.accessibilityLabel = intl.string(applicationId(linkId[22]).t.Xrt5Po);
    obj.IconComponent = applicationId(linkId[32]).LinkIcon;
    return first2(applicationId(linkId[31]).HeaderActionButton, obj);
  };
  ({ headerLeftContainer: obj4[5], headerRightContainer: obj4[6] } = tmp);
  const tmp6 = onShare(stateFromStores.useState(false), 2);
  let num = 0;
  if (!obj6.isIOS()) {
    num = customId(linkId[26])().top;
  }
  obj[7] = num + customId(linkId[11]).space.PX_8;
  const items9 = [first2(applicationId(linkId[28]).Header, obj), ];
  obj1 = { style: tmp.container, children: null };
  const items10 = [first2(customId(linkId[33]), { absolute: true }), first2(customId(linkId[34]), { disableGradient: true, disableStickySections: true, initialSelectedDestinations: [], insetEnd: 0, onSelectedDestinationChange: callback, originDestination: memo, rowMode: UserRowModes.TOGGLE }), ];
  let obj3 = { disabled: tmp7, floatingBackgroundColor: tmp.container.backgroundColor, isVisible: first1.length > 0, loading: tmp7, onPress: null, text: null };
  let tmp24;
  if (!tmp7) {
    tmp24 = callback2;
  }
  obj3[4] = tmp24;
  if (1 === first1.length) {
    const intl3 = tmp2(tmp3[22]).intl;
    let stringResult = intl3.string(tmp2(tmp3[22]).t.TXNS7S);
  } else {
    const intl2 = tmp2(tmp3[22]).intl;
    obj4 = { count: null };
    obj4[0] = length;
    stringResult = intl2.formatToPlainString(tmp2(tmp3[22]).t.jWtYUm, obj4);
  }
  obj3[5] = stringResult;
  items10[2] = first2(applicationId(linkId[35]).ModalFloatingAction, obj3);
  obj1[1] = items10;
  items9[1] = closure_13(c6, obj1);
  obj[1] = items9;
  return closure_13(c6, obj);
};