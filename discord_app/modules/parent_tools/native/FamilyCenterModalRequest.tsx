// === Module 11528: FamilyCenterModalRequest ===

// Module 11528 (FamilyCenterModalRequest)
import _modDef38 from "module_38" /* 38 */;
import useStateFromStores from "useStateFromStores" /* 573 */;
import c from "c" /* 576 */;
import nativeDefault from "native" /* 587 */;
import util from "util" /* 1126 */;
import native from "native" /* 1200 */;
import useNavigation from "useNavigation" /* 1503 */;
import Server from "Server" /* 1998 */;
import _modDef2568 from "module_2568" /* 2568 */;
import Text_Text from "Text/Text" /* 5088 */;
import components_Button_Button from "components/Button/Button" /* 5379 */;
import ModalActionCreatorsDefault from "ModalActionCreators" /* 5934 */;
import ButtonGroup from "ButtonGroup" /* 5958 */;
import ActivityIndicator_ActivityIndicator from "ActivityIndicator/ActivityIndicator" /* 6153 */;
import FamilyCenterActionCreatorsDefault from "FamilyCenterActionCreators" /* 7260 */;
import AgeVerificationActionCreatorsDefault from "AgeVerificationActionCreators" /* 7497 */;
import ModalScreen from "ModalScreen" /* 7514 */;
import ModalContent from "ModalContent" /* 7515 */;
import _modDef7728 from "module_7728" /* 7728 */;
import useIsInAdultAgeGroupDefault from "useIsInAdultAgeGroup" /* 7739 */;
import FamilyCenterUtils from "FamilyCenterUtils" /* 7741 */;
import Modal from "Modal" /* 10602 */;
import _modDef10713 from "module_10713" /* 10713 */;
import FamilyCenterModalRequestRouting from "FamilyCenterModalRequestRouting" /* 11529 */;
import ModalFooter from "ModalFooter" /* 11539 */;
import EnvelopeSpotIllustration from "EnvelopeSpotIllustration" /* 11540 */;
import FamilyShieldSpotIllustration from "FamilyShieldSpotIllustration" /* 11544 */;
import asyncGeneratorStep from "asyncGeneratorStep" /* 5 */;
import noop from "module_19" /* 19 */;
import UserStore from "UserStore" /* 1390 */;

require = fn;
function FamilyCenterPrereqLoading(arg0) {
  ({ userId: require, linkCode: importDefault } = arg0);
  const tmp = closure_20();
  dependencyMap = useNavigation.useNavigation();
  const effect = noop.useEffect(() => {
    closure_1 = async function _runPrereq() {
      if (c3 === 2) {
        c3 = 3;
        throw new TypeError("Generator functions may not be called on executing generators");
      } else if (tmp4 === 3) {
        if (arg0 === 1) {
          throw value;
        } else if (arg0 === 2) {
          const obj3 = { value, done: true };
          return obj3;
        } else {
          return { value: "IconComponent", done: "+51" };
        }
      } else {
        try {
          c3 = 2;
          if (0 === c2) {
            if (arg0 === 1) {
              c3 = 3;
              throw value;
            } else if (arg0 === 2) {
              c3 = 3;
              const obj4 = { value, done: true };
              return obj4;
            } else {
              closure_1 = tmp5;
              closure_0 = tmp2;
              closure_128_0 = undefined;
              c2 = 1;
              c3 = 1;
              const obj5 = { value: require("FamilyCenterModalRequestRouting").resolveConnectionPrereqTarget(closure_0, closure_1), done: false };
              return obj5;
            }
          } else if (arg0 === 1) {
            c3 = 3;
            throw value;
          } else if (arg0 === 2) {
            c3 = 3;
            const obj = { value, done: true };
            return obj;
          } else {
            closure_128_0 = value;
            if (closure_129_0) {
              c3 = 3;
            } else if (closure_128_0.section !== require("FamilyCenterModalRequestRouting").FamilyCenterModalRequestSections.ERROR) {
              if (closure_128_0.section !== require("FamilyCenterModalRequestRouting").FamilyCenterModalRequestSections.REQUEST) {
                if (closure_128_0.section !== require("FamilyCenterModalRequestRouting").FamilyCenterModalRequestSections.CONFIRM_AGE) {
                  const replaced = c2.replace(closure_128_0.section);
                }
              }
            }
            const replaced1 = c2.replace(closure_128_0.section, closure_128_0.params);
          }
        } catch (tmp29) {
          c3 = tmp;
          throw tmp29;
        }
      }
    };
    c0 = false;
    (function runPrereq() {
      const self = this;
      const apply = closure_1.apply;
      if (typeof apply === "unknown") {
        let applyArgumentsResult = HermesBuiltin.applyArguments(self);
      } else {
        applyArgumentsResult = apply(self, arguments);
      }
      return applyArgumentsResult;
    })();
    return () => {
      c0 = true;
    };
  }, []);
  const obj2 = { children: null };
  obj2.children = closure_11(View, { style: tmp.container, children: closure_11(ActivityIndicator_ActivityIndicator.ActivityIndicator, {}) });
  return closure_11(ModalScreen.ModalScreen, obj2);
}
function getScreens(userId, linkCode) {
  _require = userId;
  importDefault = linkCode;
  let obj = {};
  const obj2 = {};
  const merged = Object.assign(obj27);
  obj2.render = function render() {
    return closure_2_11(FamilyCenterPrereqLoading, { userId, linkCode });
  };
  obj[require("FamilyCenterModalRequestRouting").FamilyCenterModalRequestSections.PREREQ_LOADING] = obj2;
  const obj3 = {};
  const merged1 = Object.assign(obj27);
  obj3.render = function render(teenIdentity) {
    teenIdentity = undefined;
    if (teenIdentity != null) {
      teenIdentity = teenIdentity.teenIdentity;
    }
    return closure_1_11(closure_1_26, { teenIdentity });
  };
  obj[require("FamilyCenterModalRequestRouting").FamilyCenterModalRequestSections.CONFIRM_AGE] = obj3;
  const obj4 = {};
  const merged2 = Object.assign(obj27);
  obj4.render = function render() {
    return closure_1_11(closure_1_27, {});
  };
  obj[require("FamilyCenterModalRequestRouting").FamilyCenterModalRequestSections.VERIFYING] = obj4;
  const obj5 = {
    headerLeft: require("NavigatorHeader").getHeaderCloseButton(ModalActionCreatorsDefault.pop),
    headerShown: true,
    headerTitle() {
      return null;
    },
    render(teenIdentity) {
      const obj = { userId, linkCode, teenIdentity: null };
      teenIdentity = undefined;
      if (teenIdentity != null) {
        teenIdentity = teenIdentity.teenIdentity;
      }
      obj.teenIdentity = teenIdentity;
      return closure_2_11(closure_15, obj);
    }
  };
  obj[require("FamilyCenterModalRequestRouting").FamilyCenterModalRequestSections.REQUEST] = obj5;
  const obj7 = {};
  const merged3 = Object.assign(obj27);
  obj7.render = function render() {
    return closure_1_11(closure_1_28, {});
  };
  obj[require("FamilyCenterModalRequestRouting").FamilyCenterModalRequestSections.INVALID_CODE] = obj7;
  const obj8 = {};
  const merged4 = Object.assign(obj27);
  obj8.render = function render() {
    return closure_1_11(closure_1_29, {});
  };
  obj[require("FamilyCenterModalRequestRouting").FamilyCenterModalRequestSections.MUST_BE_ADULT] = obj8;
  const obj9 = { headerShown: true, headerLeft: null, headerTitle: null, render: null };
  const obj6 = require("NavigatorHeader");
  obj9.headerLeft = require("NavigatorHeader").getHeaderCloseButton(ModalActionCreatorsDefault.pop);
  obj9.headerTitle = function headerTitle() {
    return null;
  };
  obj9.render = function render() {
    return closure_1_11(closure_1_17, {});
  };
  obj[require("FamilyCenterModalRequestRouting").FamilyCenterModalRequestSections.SENT] = obj9;
  const obj11 = { headerShown: true, headerLeft: null, headerTitle: null, render: null };
  const obj10 = require("NavigatorHeader");
  obj11.headerLeft = require("NavigatorHeader").getHeaderCloseButton(ModalActionCreatorsDefault.pop);
  obj11.headerTitle = function headerTitle() {
    return null;
  };
  obj11.render = function render(failureCode) {
    return closure_1_11(closure_1_19, { failureCode: failureCode.failureCode });
  };
  obj[require("FamilyCenterModalRequestRouting").FamilyCenterModalRequestSections.ERROR] = obj11;
  return obj;
}
const View = fn(17).View;
const FamilyCenterConstants = fn(7259);
({ FAMILY_CENTER_AGE_VERIFICATION_RESUME_TIMEOUT: closure_7, FAMILY_CENTER_LINK_REQUEST_ERROR_EXPERIENCES: closure_8, FamilyCenterFailureCode: closure_9, FamilyCenterIconType: c10 } = FamilyCenterConstants);
const jsxProd = fn(21);
({ jsx: closure_11, jsxs: closure_12, Fragment: map1 } = jsxProd);
let createStyles = fn(5092);
let obj2 = { headerText: { marginTop: nativeDefault.space.PX_16, marginBottom: nativeDefault.space.PX_16 }, art: { width: 165, height: 119 }, connectionHeader: null, headerIcons: null, ellipseGroup: null, ellipse: null, title: null, teenName: null, consent: null };
let obj3 = { marginTop: nativeDefault.space.PX_16, marginBottom: nativeDefault.space.PX_16 };
obj2.connectionHeader = { alignItems: "center", marginBottom: nativeDefault.space.PX_16 };
let obj4 = { alignItems: "center", marginBottom: nativeDefault.space.PX_16 };
obj2.headerIcons = { flexDirection: "row", alignItems: "center", justifyContent: "center", alignSelf: "center", padding: nativeDefault.space.PX_8, backgroundColor: nativeDefault.colors.BACKGROUND_SURFACE_HIGH, borderRadius: nativeDefault.radii.round, marginBottom: nativeDefault.space.PX_24 };
let obj5 = { flexDirection: "row", alignItems: "center", justifyContent: "center", alignSelf: "center", padding: nativeDefault.space.PX_8, backgroundColor: nativeDefault.colors.BACKGROUND_SURFACE_HIGH, borderRadius: nativeDefault.radii.round, marginBottom: nativeDefault.space.PX_24 };
obj2.ellipseGroup = { flexDirection: "row", marginHorizontal: nativeDefault.space.PX_12 };
let size = { width: 4, height: 4, marginHorizontal: 2, backgroundColor: nativeDefault.colors.ICON_MUTED, borderRadius: nativeDefault.radii.round };
obj2.ellipse = size;
obj2.title = { textAlign: "center" };
let obj6 = { flexDirection: "row", marginHorizontal: nativeDefault.space.PX_12 };
obj2.teenName = { marginTop: nativeDefault.space.PX_4, textAlign: "center" };
let obj7 = { marginTop: nativeDefault.space.PX_4, textAlign: "center" };
obj2.consent = { marginTop: nativeDefault.space.PX_8, textAlign: "center", paddingHorizontal: nativeDefault.space.PX_16 };
let closure_14 = createStyles.createStyles(obj2);
let ReactCompilerGating = fn(558);
let tmp4 = ReactCompilerGating.isReactCompilerEnabled() ? (function FamilyCenterModalRequestConfirm(userId) {
  const cResult = userId(navigation[9]).c(38);
  userId = userId.userId;
  const linkCode = userId.linkCode;
  const teenIdentity = userId.teenIdentity;
  let title = closure_14();
  const obj = userId(navigation[9]);
  navigation = userId(navigation[10]).useNavigation();
  if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
    const items = [UserStore];
    const fn = function s() {
      return currentUser.getCurrentUser();
    };
    cResult[0] = items;
    cResult[1] = fn;
    tmp5 = items;
    tmp6 = fn;
  } else {
    [tmp5, tmp6] = cResult;
  }
  const obj2 = userId(navigation[10]);
  teenName = userId(navigation[11]).useStateFromStores(tmp5, tmp6);
  if (cResult[2] !== navigation) {
    const fn2 = function v() {
      const result = FamilyCenterActionCreatorsDefault.clearPendingConnection();
      navigation.push(FamilyCenterModalRequestRouting.FamilyCenterModalRequestSections.SENT);
    };
    cResult[2] = navigation;
    cResult[3] = fn2;
    let tmp8 = fn2;
  } else {
    tmp8 = cResult[3];
  }
  if (cResult[4] !== navigation) {
    const fn3 = function x(arg0) {
      const failureCodeForAPIError = FamilyCenterUtils.getFailureCodeForAPIError(arg0);
      navigation.push(FamilyCenterModalRequestRouting.FamilyCenterModalRequestSections.ERROR, { failureCode: failureCodeForAPIError });
    };
    cResult[4] = navigation;
    cResult[5] = fn3;
    let tmp9 = fn3;
  } else {
    tmp9 = cResult[5];
  }
  if (cResult[6] === tmp9) {
    if (cResult[7] === tmp8) {
      let tmp10 = cResult[8];
    }
    const familyCenterActions = tmp(tmp2[15]).useFamilyCenterActions(tmp10);
    const requestLink = familyCenterActions.requestLink;
    const isRequestingLink = familyCenterActions.isRequestingLink;
    if (cResult[9] === linkCode) {
      if (cResult[10] === requestLink) {
        if (cResult[11] === userId) {
          let tmp12 = cResult[12];
        }
        if (cResult[13] === teenName) {
          if (cResult[14] === title.art) {
            if (cResult[15] === title.connectionHeader) {
              if (cResult[16] === title.consent) {
                if (cResult[17] === title.ellipse) {
                  if (cResult[18] === title.ellipseGroup) {
                    if (cResult[19] === title.headerIcons) {
                      if (cResult[20] === title.headerText) {
                        if (cResult[21] === title.teenName) {
                          if (cResult[22] === title.title) {
                            if (cResult[23] === teenIdentity) {
                              const _Symbol = Symbol;
                              if (cResult[25] === Symbol.for("react.memo_cache_sentinel")) {
                                const tmp27 = closure_11(linkCode(tmp2[23]), {});
                                cResult[25] = tmp27;
                                let tmp24 = tmp27;
                              } else {
                                tmp24 = cResult[25];
                              }
                              if (cResult[26] !== cResult[24]) {
                                const obj3 = { children: null };
                                const items1 = [tmp13, tmp24];
                                obj3.children = items1;
                                const tmp30 = closure_12(tmp(tmp2[24]).ModalContent, obj3);
                                class A {
                                  constructor() {
                                    tmp = requestLink(userId, linkCode);
                                    return;
                                  }
                                }
                                cResult[26] = tmp13;
                                cResult[27] = tmp30;
                                let tmp28 = tmp30;
                              } else {
                                tmp28 = cResult[27];
                              }
                              const _Symbol2 = Symbol;
                              class A {
                                constructor() {
                                  tmp = requestLink(userId, linkCode);
                                  return;
                                }
                              }
                              if (cResult[29] === tmp12) {
                                if (cResult[30] === isRequestingLink) {
                                  let tmp33 = cResult[31];
                                }
                                const _Symbol3 = Symbol;
                                if (cResult[32] === Symbol.for("react.memo_cache_sentinel")) {
                                  const obj4 = { variant: "secondary", size: "lg", text: null, onPress: null };
                                  const intl5 = tmp(tmp2[18]).intl;
                                  obj4.text = intl5.string(tmp(tmp2[18]).t["ETE/oC"]);
                                  class A {
                                    constructor() {
                                      tmp = requestLink(userId, linkCode);
                                      return;
                                    }
                                  }
                                  const tmp39 = closure_11(tmp(tmp2[25]).Button, obj4);
                                  cResult[32] = tmp39;
                                }
                                if (cResult[33] !== tmp33) {
                                  const obj5 = { children: null };
                                  const obj6 = { children: null };
                                  const items2 = [tmp33, ];
                                  class A {
                                    constructor() {
                                      tmp = requestLink(userId, linkCode);
                                      return;
                                    }
                                  }
                                  obj6.children = items2;
                                  obj5.children = closure_12(tmp(tmp2[28]).ButtonGroup, obj6);
                                  const tmp43 = closure_11(tmp(tmp2[27]).ModalFooter, obj5);
                                  cResult[33] = tmp33;
                                  cResult[34] = tmp43;
                                  let tmp40 = tmp43;
                                } else {
                                  tmp40 = cResult[34];
                                }
                                if (cResult[35] === tmp40) {
                                  if (cResult[36] === tmp28) {
                                    let tmp44 = cResult[37];
                                  }
                                  return tmp44;
                                }
                                class A {
                                  constructor() {
                                    tmp = requestLink(userId, linkCode);
                                    return;
                                  }
                                }
                                const items3 = [tmp28, tmp40];
                                tmp46[0] = items3;
                                const tmp47 = closure_12(tmp(tmp2[29]).ModalScreen, tmp46);
                                cResult[35] = tmp40;
                                cResult[36] = tmp28;
                                cResult[37] = tmp47;
                                tmp44 = tmp47;
                              }
                              const obj7 = { variant: "primary", size: "lg", disabled: isRequestingLink, loading: isRequestingLink, text: tmp32, onPress: tmp12 };
                              const tmp35 = closure_11(tmp(tmp2[25]).Button, obj7);
                              cResult[29] = tmp12;
                              cResult[30] = isRequestingLink;
                              cResult[31] = tmp35;
                              tmp33 = tmp35;
                            }
                          }
                        }
                      }
                    }
                  }
                }
              }
            }
          }
        }
        if (null != teenIdentity) {
          const obj9 = { style: title.connectionHeader, children: null };
          const obj10 = { style: title.headerIcons, children: null };
          class A {
            constructor() {
              tmp = requestLink(userId, linkCode);
              return;
            }
          }
          if (null != teenName) {
            const userAvatarSource = linkCode(tmp2[17]).getUserAvatarSource(teenName);
            const obj8 = linkCode(tmp2[17]);
          }
          const obj11 = { source: userAvatarSource, size: tmp(tmp2[16]).AvatarSizes.LARGE, accessibilityLabel: null };
          const intl = tmp(tmp2[18]).intl;
          let str;
          if (teenName != null) {
            str = teenName.globalName;
          }
          if (str == null) {
            let username1;
            if (teenName != null) {
              username1 = teenName.username;
            }
            str = username1;
          }
          if (str == null) {
            str = "";
          }
          const obj12 = { name: str };
          obj11.accessibilityLabel = intl.formatToPlainString(linkCode(tmp2[19]).kFj4h1, obj12);
          const items4 = [closure_11(tmp(tmp2[16]).Avatar, obj11), , ];
          const obj13 = { style: title.ellipseGroup, children: null };
          const obj14 = { style: title.ellipse };
          const items5 = [closure_11(View, obj14), , ];
          const obj15 = { style: title.ellipse };
          items5[1] = closure_11(View, obj15);
          const obj16 = { style: title.ellipse };
          items5[2] = closure_11(View, obj16);
          obj13.children = items5;
          items4[1] = closure_12(View, obj13);
          const obj18 = { source: null, size: null, accessibilityLabel: null };
          ({ id: obj17.id, avatar: obj17.avatar } = teenIdentity);
          obj18.source = linkCode(tmp2[17]).getUserAvatarSource({ id: null, avatar: null, discriminator: "0" });
          obj18.size = tmp(tmp2[16]).AvatarSizes.LARGE;
          const intl2 = tmp(tmp2[18]).intl;
          let username = teenIdentity.global_name;
          if (username == null) {
            username = teenIdentity.username;
          }
          const obj20 = { name: username };
          obj18.accessibilityLabel = intl2.formatToPlainString(linkCode(tmp2[19]).kFj4h1, obj20);
          items4[2] = closure_11(tmp(tmp2[16]).Avatar, obj18);
          obj10.children = items4;
          const items6 = [closure_12(View, obj10), , , ];
          const obj21 = { variant: "heading-xl/bold", color: "mobile-text-heading-primary", style: title.title, children: null };
          const intl3 = tmp(tmp2[18]).intl;
          obj21.children = intl3.string(linkCode(tmp2[19]).sMmIbm);
          items6[1] = closure_11(tmp(tmp2[20]).Text, obj21);
          const obj22 = { variant: "heading-xl/bold", color: "mobile-text-heading-primary", style: title.teenName, children: null };
          let username2 = teenIdentity.global_name;
          if (username2 == null) {
            username2 = teenIdentity.username;
          }
          obj22.children = username2;
          items6[2] = closure_11(tmp(tmp2[20]).Text, obj22);
          const obj23 = { variant: "text-sm/medium", color: "text-muted", style: title.consent, children: null };
          const intl4 = tmp(tmp2[18]).intl;
          let username3 = teenIdentity.global_name;
          if (username3 == null) {
            username3 = teenIdentity.username;
          }
          const obj24 = { username: username3 };
          obj23.children = intl4.format(linkCode(tmp2[19]).yiUJNU, obj24);
          items6[3] = closure_11(tmp(tmp2[20]).Text, obj23);
          obj9.children = items6;
          let tmp15Result = closure_12(View, obj9);
          const obj19 = { id: null, avatar: null, discriminator: "0" };
          const tmp20Result = linkCode(tmp2[17]);
        } else {
          const obj25 = { children: null };
          const obj26 = { style: title.art, source: null };
          class A {
            constructor() {
              tmp = requestLink(userId, linkCode);
              return;
            }
          }
          obj26.source = linkCode(tmp2[22]);
          const items7 = [closure_11(tmp52, obj26), ];
          obj27 = { style: title.headerText, variant: "text-lg/bold", children: null };
          const intl6 = tmp(tmp2[18]).intl;
          obj27.children = intl6.string(linkCode(tmp2[19]).GH11eI);
          items7[1] = closure_11(tmp(tmp2[20]).Text, obj27);
          obj25.children = items7;
          tmp15Result = closure_12(closure_13, obj25);
        }
        cResult[13] = teenName;
        class A {
          constructor() {
            tmp = requestLink(userId, linkCode);
            return;
          }
        }
        cResult[15] = title.connectionHeader;
        cResult[16] = title.consent;
        cResult[17] = title.ellipse;
        cResult[18] = title.ellipseGroup;
        cResult[19] = title.headerIcons;
        ({ headerText: tmp3[20], teenName } = title);
        cResult[21] = teenName;
        title = title.title;
        cResult[22] = title;
        cResult[23] = teenIdentity;
        cResult[24] = tmp15Result;
      }
    }
    class A {
      constructor() {
        tmp = requestLink(userId, linkCode);
        return;
      }
    }
    cResult[9] = linkCode;
    cResult[10] = requestLink;
    cResult[11] = userId;
    cResult[12] = A;
    tmp12 = A;
    const tmpResult2 = tmp(tmp2[15]);
  }
  const obj28 = { onSuccess: tmp8, onError: tmp9 };
  cResult[6] = tmp9;
  cResult[7] = tmp8;
  cResult[8] = obj28;
  tmp10 = obj28;
  const tmpResult = userId(navigation[11]);
}) : (function FamilyCenterModalRequestConfirm(userId) {
  userId = userId.userId;
  const linkCode = userId.linkCode;
  const teenIdentity = userId.teenIdentity;
  let navigation;
  const tmp = closure_14();
  navigation = userId(navigation[10]).useNavigation();
  const obj = userId(navigation[10]);
  const items = [UserStore];
  const stateFromStores = userId(navigation[11]).useStateFromStores(items, () => currentUser.getCurrentUser());
  const items1 = [navigation];
  const items2 = [navigation];
  const callback = noop.useCallback(() => {
    const result = FamilyCenterActionCreatorsDefault.clearPendingConnection();
    navigation.push(FamilyCenterModalRequestRouting.FamilyCenterModalRequestSections.SENT);
  }, items1);
  const callback1 = noop.useCallback((arg0) => {
    const failureCodeForAPIError = FamilyCenterUtils.getFailureCodeForAPIError(arg0);
    navigation.push(FamilyCenterModalRequestRouting.FamilyCenterModalRequestSections.ERROR, { failureCode: failureCodeForAPIError });
  }, items2);
  const obj2 = userId(navigation[11]);
  const familyCenterActions = userId(navigation[15]).useFamilyCenterActions({ onSuccess: callback, onError: callback1 });
  const requestLink = familyCenterActions.requestLink;
  const isRequestingLink = familyCenterActions.isRequestingLink;
  const items3 = [requestLink, userId, linkCode];
  const callback2 = noop.useCallback(() => {
    requestLink(userId, linkCode);
  }, items3);
  if (null != teenIdentity) {
    const obj4 = { style: tmp.connectionHeader, children: null };
    const obj5 = { style: tmp.headerIcons, children: null };
    let userAvatarSource;
    if (null != stateFromStores) {
      userAvatarSource = linkCode(tmp3[17]).getUserAvatarSource(stateFromStores);
      const obj6 = linkCode(tmp3[17]);
    }
    const obj7 = { source: userAvatarSource, size: tmp2(tmp3[16]).AvatarSizes.LARGE, accessibilityLabel: null };
    const intl = tmp2(tmp3[18]).intl;
    let str;
    if (stateFromStores != null) {
      str = stateFromStores.globalName;
    }
    if (str == null) {
      let username1;
      if (stateFromStores != null) {
        username1 = stateFromStores.username;
      }
      str = username1;
    }
    if (str == null) {
      str = "";
    }
    const obj8 = { name: str };
    obj7.accessibilityLabel = intl.formatToPlainString(linkCode(tmp3[19]).kFj4h1, obj8);
    const items4 = [closure_11(tmp2(tmp3[16]).Avatar, obj7), , ];
    const obj9 = { style: tmp.ellipseGroup, children: null };
    const obj10 = { style: tmp.ellipse };
    const items5 = [closure_11(View, obj10), , ];
    const obj11 = { style: tmp.ellipse };
    items5[1] = closure_11(View, obj11);
    const obj12 = { style: tmp.ellipse };
    items5[2] = closure_11(View, obj12);
    obj9.children = items5;
    items4[1] = closure_12(View, obj9);
    const obj13 = { source: null, size: null, accessibilityLabel: null };
    ({ id: obj15.id, avatar: obj15.avatar } = teenIdentity);
    obj13.source = linkCode(tmp3[17]).getUserAvatarSource({ id: null, avatar: null, discriminator: "0" });
    obj13.size = tmp2(tmp3[16]).AvatarSizes.LARGE;
    const intl2 = tmp2(tmp3[18]).intl;
    let username = teenIdentity.global_name;
    if (username == null) {
      username = teenIdentity.username;
    }
    const obj16 = { name: username };
    obj13.accessibilityLabel = intl2.formatToPlainString(linkCode(tmp3[19]).kFj4h1, obj16);
    items4[2] = closure_11(tmp2(tmp3[16]).Avatar, obj13);
    obj5.children = items4;
    const items6 = [closure_12(View, obj5), , , ];
    const obj17 = { variant: "heading-xl/bold", color: "mobile-text-heading-primary", style: tmp.title, children: null };
    const intl3 = tmp2(tmp3[18]).intl;
    obj17.children = intl3.string(linkCode(tmp3[19]).sMmIbm);
    items6[1] = closure_11(tmp2(tmp3[20]).Text, obj17);
    const obj18 = { variant: "heading-xl/bold", color: "mobile-text-heading-primary", style: tmp.teenName, children: null };
    let username2 = teenIdentity.global_name;
    if (username2 == null) {
      username2 = teenIdentity.username;
    }
    obj18.children = username2;
    items6[2] = closure_11(tmp2(tmp3[20]).Text, obj18);
    const obj19 = { variant: "text-sm/medium", color: "text-muted", style: tmp.consent, children: null };
    const intl4 = tmp2(tmp3[18]).intl;
    let username3 = teenIdentity.global_name;
    if (username3 == null) {
      username3 = teenIdentity.username;
    }
    const obj20 = { username: username3 };
    obj19.children = intl4.format(linkCode(tmp3[19]).yiUJNU, obj20);
    items6[3] = closure_11(tmp2(tmp3[20]).Text, obj19);
    obj4.children = items6;
    let tmp10Result = closure_12(View, obj4);
    let tmp18 = tmp15;
    let tmp19 = closure_11;
    const obj14 = { id: null, avatar: null, discriminator: "0" };
    const tmp15Result = linkCode(tmp3[17]);
  } else {
    const obj21 = { children: null };
    const obj22 = { style: tmp.art, source: linkCode(tmp3[22]) };
    const items7 = [closure_11(linkCode(tmp3[21]), obj22), ];
    const obj23 = { style: tmp.headerText, variant: "text-lg/bold", children: null };
    const intl7 = tmp2(tmp3[18]).intl;
    obj23.children = intl7.string(linkCode(tmp3[19]).GH11eI);
    items7[1] = closure_11(tmp2(tmp3[20]).Text, obj23);
    obj21.children = items7;
    tmp10Result = closure_12(closure_13, obj21);
    tmp18 = linkCode;
    tmp19 = closure_11;
    const tmp23 = linkCode(tmp3[21]);
  }
  const obj24 = { children: null };
  const obj25 = { children: null };
  const items8 = [tmp10Result, tmp19(tmp18(navigation[23]), {})];
  obj25.children = items8;
  const items9 = [closure_12(userId(navigation[24]).ModalContent, obj25), ];
  const obj26 = { children: null };
  obj27 = { children: null };
  const obj28 = { variant: "primary", size: "lg", disabled: isRequestingLink, loading: isRequestingLink, text: null, onPress: null };
  const intl5 = tmp2(tmp3[18]).intl;
  obj28.text = intl5.string(tmp18(navigation[19]).ISg34l);
  obj28.onPress = callback2;
  const items10 = [tmp19(userId(navigation[25]).Button, obj28), ];
  const obj29 = { variant: "secondary", size: "lg", text: null, onPress: null };
  const intl6 = tmp2(tmp3[18]).intl;
  obj29.text = intl6.string(userId(navigation[18]).t["ETE/oC"]);
  obj29.onPress = tmp18(navigation[26]).pop;
  items10[1] = tmp19(userId(navigation[25]).Button, obj29);
  obj27.children = items10;
  obj26.children = closure_12(userId(navigation[28]).ButtonGroup, obj27);
  items9[1] = tmp19(userId(navigation[27]).ModalFooter, obj26);
  obj24.children = items9;
  return closure_12(userId(navigation[29]).ModalScreen, obj24);
});
let closure_15 = tmp4;
createStyles = fn(5092);
let obj9 = { content: null, textWrapper: null, header: null, description: null, illustration: null };
let obj8 = { marginTop: nativeDefault.space.PX_8, textAlign: "center", paddingHorizontal: nativeDefault.space.PX_16 };
obj9.content = { flex: 1, flexDirection: "column", alignItems: "center", justifyContent: "center", paddingHorizontal: nativeDefault.space.PX_16 };
obj9.textWrapper = { alignItems: "center" };
let obj12 = { flex: 1, flexDirection: "column", alignItems: "center", justifyContent: "center", paddingHorizontal: nativeDefault.space.PX_16 };
obj9.header = { marginBottom: nativeDefault.space.PX_8 };
obj9.description = { textAlign: "center" };
const rect = { position: "absolute", bottom: "100%", left: 0, right: 0, alignItems: "center", paddingBottom: nativeDefault.space.PX_24 };
obj9.illustration = rect;
let closure_16 = createStyles.createStyles(obj9);
ReactCompilerGating = fn(558);
let tmp5 = ReactCompilerGating.isReactCompilerEnabled() ? (function FamilyCenterModalRequestSuccess() {
  const cResult = c.c(25);
  const tmp4 = closure_16();
  if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
    const items = [UserStore];
    const fn = function n() {
      return currentUser.getCurrentUser();
    };
    cResult[0] = items;
    cResult[1] = fn;
    tmp5 = items;
    tmp6 = fn;
  } else {
    [tmp5, tmp6] = cResult;
  }
  const stateFromStores = useStateFromStores.useStateFromStores(tmp5, tmp6);
  if (cResult[2] === Symbol.for("react.memo_cache_sentinel")) {
    const fn2 = function u() {
      ModalActionCreatorsDefault.pop();
    };
    cResult[2] = fn2;
    let tmp9 = fn2;
  } else {
    tmp9 = cResult[2];
  }
  if (null === stateFromStores) {
    ModalActionCreatorsDefault.pop();
  }
  ({ content, textWrapper } = tmp4);
  if (cResult[3] === Symbol.for("react.memo_cache_sentinel")) {
    const tmp14 = closure_1_11(EnvelopeSpotIllustration.EnvelopeSpotIllustration, { scale: 0.7 });
    cResult[3] = tmp14;
    let tmp12 = tmp14;
  } else {
    tmp12 = cResult[3];
  }
  if (cResult[4] !== tmp4.illustration) {
    const obj2 = { style: tmp4.illustration, children: tmp12 };
    const tmp18 = closure_1_11(View, obj2);
    cResult[4] = tmp4.illustration;
    cResult[5] = tmp18;
    let tmp15 = tmp18;
  } else {
    tmp15 = cResult[5];
  }
  if (cResult[6] === Symbol.for("react.memo_cache_sentinel")) {
    const intl = util.intl;
    const stringResult = intl.string(_modDef2568.EpwfZl);
    cResult[6] = stringResult;
    let tmp19 = stringResult;
  } else {
    tmp19 = cResult[6];
  }
  if (cResult[7] !== tmp4.header) {
    const obj3 = { variant: "heading-lg/bold", color: "mobile-text-heading-primary", style: tmp4.header, children: tmp19 };
    const tmp24 = closure_1_11(Text_Text.Text, obj3);
    cResult[7] = tmp4.header;
    cResult[8] = tmp24;
    let tmp22 = tmp24;
  } else {
    tmp22 = cResult[8];
  }
  let email;
  if (stateFromStores != null) {
    email = stateFromStores.email;
  }
  if (cResult[9] !== email) {
    const intl2 = util.intl;
    let email1;
    if (stateFromStores != null) {
      email1 = stateFromStores.email;
    }
    const obj4 = { email: email1 };
    const formatResult = intl2.format(_modDef2568.dVtWId, obj4);
    let email2;
    if (stateFromStores != null) {
      email2 = stateFromStores.email;
    }
    cResult[9] = email2;
    cResult[10] = formatResult;
    let tmp26 = formatResult;
  } else {
    tmp26 = cResult[10];
  }
  if (cResult[11] === tmp4.description) {
    if (cResult[12] === tmp26) {
      let tmp31 = cResult[13];
    }
    if (cResult[14] === tmp4.textWrapper) {
      if (cResult[15] === tmp31) {
        if (cResult[16] === tmp15) {
          if (cResult[17] === tmp22) {
            let tmp33 = cResult[18];
          }
          if (cResult[19] === tmp4.content) {
            if (cResult[20] === tmp33) {
              let tmp37 = cResult[21];
            }
            const _Symbol = Symbol;
            if (cResult[22] === Symbol.for("react.memo_cache_sentinel")) {
              const obj5 = { children: null };
              const obj6 = { size: "lg", text: null, onPress: null };
              const intl3 = util.intl;
              obj6.text = intl3.string(util.t.cpT0Cq);
              obj6.onPress = tmp9;
              obj5.children = closure_1_11(components_Button_Button.Button, obj6);
              const tmp43 = closure_1_11(ModalFooter.ModalFooter, obj5);
              cResult[22] = tmp43;
              let tmp41 = tmp43;
            } else {
              tmp41 = cResult[22];
            }
            if (cResult[23] !== tmp37) {
              const obj7 = { children: null };
              const items1 = [tmp37, tmp41];
              obj7.children = items1;
              const tmp46 = __initData(ModalScreen.ModalScreen, obj7);
              cResult[23] = tmp37;
              cResult[24] = tmp46;
              let tmp44 = tmp46;
            } else {
              tmp44 = cResult[24];
            }
            return tmp44;
          }
          const obj8 = { children: null };
          const obj9 = { style: content, children: tmp33 };
          obj8.children = closure_1_11(View, obj9);
          const tmp40 = closure_1_11(ModalContent.ModalContent, obj8);
          cResult[19] = tmp4.content;
          cResult[20] = tmp33;
          cResult[21] = tmp40;
          tmp37 = tmp40;
        }
      }
    }
    const obj10 = { style: textWrapper, children: null };
    const items2 = [tmp15, tmp22, tmp31];
    obj10.children = items2;
    const tmp36 = __initData(View, obj10);
    cResult[14] = tmp4.textWrapper;
    cResult[15] = tmp31;
    cResult[16] = tmp15;
    cResult[17] = tmp22;
    cResult[18] = tmp36;
    tmp33 = tmp36;
  }
  const tmp32 = closure_1_11(Text_Text.Text, { variant: "text-sm/medium", color: "text-muted", style: tmp4.description, children: tmp26 });
  cResult[11] = tmp4.description;
  cResult[12] = tmp26;
  cResult[13] = tmp32;
  tmp31 = tmp32;
  const tmpResult = useStateFromStores;
}) : (function FamilyCenterModalRequestSuccess() {
  const tmp = closure_16();
  const items = [UserStore];
  const stateFromStores = useStateFromStores.useStateFromStores(items, () => currentUser.getCurrentUser());
  const callback = noop.useCallback(() => {
    ModalActionCreatorsDefault.pop();
  }, []);
  if (null === stateFromStores) {
    ModalActionCreatorsDefault.pop();
  }
  const obj2 = { style: tmp.content, children: null };
  const obj3 = { style: tmp.textWrapper, children: null };
  const items1 = [closure_1_11(View, { style: tmp.illustration, children: closure_1_11(EnvelopeSpotIllustration.EnvelopeSpotIllustration, { scale: 0.7 }) }), , ];
  const obj5 = { variant: "heading-lg/bold", color: "mobile-text-heading-primary", style: tmp.header, children: null };
  const intl = util.intl;
  obj5.children = intl.string(_modDef2568.EpwfZl);
  items1[1] = closure_1_11(Text_Text.Text, obj5);
  const obj6 = { variant: "text-sm/medium", color: "text-muted", style: tmp.description, children: null };
  const intl2 = util.intl;
  let email;
  if (stateFromStores != null) {
    email = stateFromStores.email;
  }
  const obj7 = { children: null };
  const obj8 = { children: null };
  obj6.children = intl2.format(_modDef2568.dVtWId, { email });
  items1[2] = closure_1_11(Text_Text.Text, obj6);
  obj3.children = items1;
  obj2.children = __initData(View, obj3);
  obj8.children = closure_1_11(View, obj2);
  const items2 = [closure_1_11(ModalContent.ModalContent, obj8), ];
  const obj9 = { children: null };
  const obj10 = { size: "lg", text: null, onPress: null };
  const intl3 = util.intl;
  obj10.text = intl3.string(util.t.cpT0Cq);
  obj10.onPress = callback;
  obj9.children = closure_1_11(components_Button_Button.Button, obj10);
  items2[1] = closure_1_11(ModalFooter.ModalFooter, obj9);
  obj7.children = items2;
  return __initData(ModalScreen.ModalScreen, obj7);
});
let closure_17 = tmp5;
createStyles = fn(5092);
let obj14 = { header: { marginBottom: 8, textAlign: "center" }, description: { textAlign: "center" }, ring: null, iconContainer: null, positive: null, negative: null };
const size1 = { display: "flex", justifyContent: "center", alignItems: "center", height: 64, width: 64, borderRadius: nativeDefault.radii.round, backgroundColor: nativeDefault.colors.BACKGROUND_SURFACE_HIGH, marginBottom: 24 };
obj14.ring = size1;
const size2 = { display: "flex", justifyContent: "center", alignItems: "center", height: 48, width: 48, borderRadius: nativeDefault.radii.round, backgroundColor: nativeDefault.colors.STATUS_POSITIVE };
obj14.iconContainer = size2;
let obj13 = { marginBottom: nativeDefault.space.PX_8 };
obj14.positive = { backgroundColor: nativeDefault.colors.STATUS_POSITIVE };
let obj15 = { backgroundColor: nativeDefault.colors.STATUS_POSITIVE };
obj14.negative = { backgroundColor: nativeDefault.colors.BACKGROUND_FEEDBACK_CRITICAL };
let closure_18 = createStyles.createStyles(obj14);
ReactCompilerGating = fn(558);
let tmp6 = ReactCompilerGating.isReactCompilerEnabled() ? (function FamilyCenterModalRequestError(arg0) {
  const cResult = c.c(35);
  const tmp4 = closure_18();
  if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
    const items = [UserStore];
    const fn = function s() {
      return currentUser.getCurrentUser();
    };
    cResult[0] = items;
    cResult[1] = fn;
    tmp5 = items;
    tmp6 = fn;
  } else {
    [tmp5, tmp6] = cResult;
  }
  const stateFromStores = useStateFromStores.useStateFromStores(tmp5, tmp6);
  const tmpResult = useStateFromStores;
  if (cResult[2] === Symbol.for("react.memo_cache_sentinel")) {
    const boxShadowStyle = native.generateBoxShadowStyle(native.FOUR_DP_ELEVATION_SHADOW_PARAMS);
    cResult[2] = boxShadowStyle;
    let tmp11 = boxShadowStyle;
    const tmpResult2 = native;
  } else {
    tmp11 = cResult[2];
  }
  if (cResult[3] === Symbol.for("react.memo_cache_sentinel")) {
    const fn2 = function v() {
      ModalActionCreatorsDefault.pop();
    };
    cResult[3] = fn2;
    let tmp13 = fn2;
  } else {
    tmp13 = cResult[3];
  }
  _modDef38(null != stateFromStores, "User must be logged in to see this modal.");
  const tmp15 = useIsInAdultAgeGroupDefault();
  const email = stateFromStores.email;
  if (cResult[4] === dependencyMap2[arg0.failureCode]) {
    if (cResult[5] === tmp15) {
      if (cResult[6] === email) {
        let tmp16 = cResult[7];
        let tmp17 = cResult[8];
      }
      const icon = obj4.icon;
      if (cResult[9] !== tmp4.ring) {
        const items1 = [tmp4.ring, tmp11];
        cResult[9] = tmp4.ring;
        cResult[10] = items1;
        let tmp21 = items1;
      } else {
        tmp21 = cResult[10];
      }
      const tmp22 = icon === constants2.CHECK ? tmp4.positive : tmp4.negative;
      if (cResult[11] === tmp4.iconContainer) {
        if (cResult[12] === tmp22) {
          let tmp23 = cResult[13];
        }
        if (cResult[14] !== icon) {
          if (icon === constants2.CHECK) {
            const obj2 = { source: _modDef10713, color: "#FFF" };
            let tmp26 = closure_1_11(native.Icon, obj2);
          } else {
            const obj3 = { source: _modDef7728, color: "#FFF" };
            tmp26 = closure_1_11(native.Icon, obj3);
          }
          cResult[14] = icon;
          cResult[15] = tmp26;
        } else {
          if (cResult[16] === tmp23) {
            if (cResult[17] === tmp24) {
              let tmp29 = cResult[18];
            }
            if (cResult[19] === tmp29) {
              if (cResult[20] === tmp21) {
                let tmp33 = cResult[21];
              }
              if (cResult[22] === tmp4.header) {
                if (cResult[23] === tmp16) {
                  let tmp37 = cResult[24];
                }
                if (cResult[25] === tmp17) {
                  if (cResult[26] === tmp4.description) {
                    let tmp40 = cResult[27];
                  }
                  if (cResult[28] === tmp33) {
                    if (cResult[29] === tmp37) {
                      if (cResult[30] === tmp40) {
                        let tmp43 = cResult[31];
                      }
                      const _Symbol = Symbol;
                      if (cResult[32] === Symbol.for("react.memo_cache_sentinel")) {
                        const obj5 = { children: null };
                        const obj6 = { text: null, onPress: null };
                        const intl = util.intl;
                        obj6.text = intl.string(util.t.cpT0Cq);
                        obj6.onPress = tmp13;
                        obj5.children = closure_1_11(components_Button_Button.Button, obj6);
                        const tmp48 = closure_1_11(ModalFooter.ModalFooter, obj5);
                        cResult[32] = tmp48;
                        let tmp46 = tmp48;
                      } else {
                        tmp46 = cResult[32];
                      }
                      if (cResult[33] !== tmp43) {
                        const obj7 = { children: null };
                        const items2 = [tmp43, tmp46];
                        obj7.children = items2;
                        const tmp51 = __initData(ModalScreen.ModalScreen, obj7);
                        cResult[33] = tmp43;
                        cResult[34] = tmp51;
                        let tmp49 = tmp51;
                      } else {
                        tmp49 = cResult[34];
                      }
                      return tmp49;
                    }
                  }
                  const obj8 = { children: null };
                  const items3 = [tmp33, tmp37, tmp40];
                  obj8.children = items3;
                  const tmp45 = __initData(ModalContent.ModalContent, obj8);
                  cResult[28] = tmp33;
                  cResult[29] = tmp37;
                  cResult[30] = tmp40;
                  cResult[31] = tmp45;
                  tmp43 = tmp45;
                }
                const obj9 = { variant: "text-sm/medium", color: "text-muted", style: tmp4.description, children: tmp17 };
                const tmp42 = closure_1_11(Text_Text.Text, obj9);
                cResult[25] = tmp17;
                cResult[26] = tmp4.description;
                cResult[27] = tmp42;
                tmp40 = tmp42;
              }
              const obj10 = { variant: "heading-lg/bold", color: "mobile-text-heading-primary", style: tmp4.header, children: tmp16 };
              const tmp39 = closure_1_11(Text_Text.Text, obj10);
              cResult[22] = tmp4.header;
              cResult[23] = tmp16;
              cResult[24] = tmp39;
              tmp37 = tmp39;
            }
            const obj11 = { style: tmp21, children: tmp29 };
            const tmp36 = closure_1_11(View, obj11);
            cResult[19] = tmp29;
            cResult[20] = tmp21;
            cResult[21] = tmp36;
            tmp33 = tmp36;
          }
          const obj12 = { style: tmp23, children: cResult[15] };
          const tmp32 = closure_1_11(View, obj12);
          cResult[16] = tmp23;
          cResult[17] = cResult[15];
          cResult[18] = tmp32;
          tmp29 = tmp32;
        }
      }
      const items4 = [tmp4.iconContainer, tmp22];
      cResult[11] = tmp4.iconContainer;
      cResult[12] = tmp22;
      cResult[13] = items4;
      tmp23 = items4;
    }
  }
  const obj13 = { isAdult: tmp15, email };
  const headerResult = dependencyMap2[arg0.failureCode].header(obj13);
  const descriptionResult = dependencyMap2[arg0.failureCode].description(obj13);
  cResult[4] = dependencyMap2[arg0.failureCode];
  cResult[5] = tmp15;
  cResult[6] = email;
  cResult[7] = headerResult;
  cResult[8] = descriptionResult;
  tmp17 = descriptionResult;
  tmp16 = headerResult;
  const tmp10 = useIsInAdultAgeGroupDefault();
}) : (function FamilyCenterModalRequestError(arg0) {
  const tmp = closure_18();
  const items = [UserStore];
  const stateFromStores = useStateFromStores.useStateFromStores(items, () => currentUser.getCurrentUser());
  const tmp6 = useIsInAdultAgeGroupDefault();
  const boxShadowStyle = native.generateBoxShadowStyle(native.FOUR_DP_ELEVATION_SHADOW_PARAMS);
  const callback = noop.useCallback(() => {
    ModalActionCreatorsDefault.pop();
  }, []);
  _modDef38(null != stateFromStores, "User must be logged in to see this modal.");
  const obj4 = { isAdult: tmp6, email: null };
  const email = stateFromStores.email;
  obj4.email = email;
  const icon = obj3.icon;
  const headerResult = dependencyMap2[arg0.failureCode].header(obj4);
  const obj5 = { style: null, children: null };
  const items1 = [tmp.ring, boxShadowStyle];
  obj5.style = items1;
  const items2 = [tmp.iconContainer, ];
  const obj6 = { style: items2, children: null };
  items2[1] = icon === constants2.CHECK ? tmp.positive : tmp.negative;
  if (icon === constants2.CHECK) {
    const obj7 = { source: _modDef10713, color: "#FFF" };
    let tmp15Result = closure_1_11(native.Icon, obj7);
  } else {
    const obj8 = { source: _modDef7728, color: "#FFF" };
    tmp15Result = closure_1_11(native.Icon, obj8);
  }
  const obj9 = { children: null };
  const obj10 = { children: null };
  obj6.children = tmp15Result;
  obj5.children = closure_1_11(View, obj6);
  const items3 = [closure_1_11(View, obj5), closure_1_11(Text_Text.Text, { variant: "heading-lg/bold", color: "mobile-text-heading-primary", style: tmp.header, children: headerResult }), ];
  const descriptionResult = dependencyMap2[arg0.failureCode].description(obj4);
  const obj11 = { variant: "heading-lg/bold", color: "mobile-text-heading-primary", style: tmp.header, children: headerResult };
  items3[2] = closure_1_11(Text_Text.Text, { variant: "text-sm/medium", color: "text-muted", style: tmp.description, children: dependencyMap2[arg0.failureCode].description(obj4) });
  obj10.children = items3;
  const items4 = [__initData(ModalContent.ModalContent, obj10), ];
  const obj13 = { children: null };
  const obj14 = { text: null, onPress: null };
  const intl = util.intl;
  obj14.text = intl.string(util.t.cpT0Cq);
  obj14.onPress = callback;
  obj13.children = closure_1_11(components_Button_Button.Button, obj14);
  items4[1] = closure_1_11(ModalFooter.ModalFooter, obj13);
  obj9.children = items4;
  return __initData(ModalScreen.ModalScreen, obj9);
});
let closure_19 = tmp6;
createStyles = fn(5092);
let closure_20 = createStyles.createStyles({ container: { flex: 1, justifyContent: "center", alignItems: "center" } });
createStyles = fn(5092);
let obj19 = { content: { flex: 1, flexDirection: "column", alignItems: "center", justifyContent: "center", paddingHorizontal: 32 }, title: null, description: null };
let obj18 = { backgroundColor: nativeDefault.colors.BACKGROUND_FEEDBACK_CRITICAL };
obj19.title = { textAlign: "center", marginBottom: nativeDefault.space.PX_8 };
obj19.description = { textAlign: "center" };
let closure_22 = createStyles.createStyles(obj19);
ReactCompilerGating = fn(558);
let closure_23 = ReactCompilerGating.isReactCompilerEnabled() ? (function FamilyCenterPrereqScreen(arg0) {
  const cResult = c.c(16);
  ({ title, description, primaryButton } = arg0);
  const tmp4 = closure_22();
  if (cResult[0] === tmp4.title) {
    if (cResult[1] === title) {
      let tmp5 = cResult[2];
    }
    if (cResult[3] === description) {
      if (cResult[4] === tmp4.description) {
        let tmp7 = cResult[5];
      }
      if (cResult[6] === tmp4.content) {
        if (cResult[7] === tmp5) {
          if (cResult[8] === tmp7) {
            let tmp10 = cResult[9];
          }
          if (cResult[10] === primaryButton.onPress) {
            if (cResult[11] === primaryButton.text) {
              let tmp14 = cResult[12];
            }
            if (cResult[13] === tmp10) {
              if (cResult[14] === tmp14) {
                let tmp17 = cResult[15];
              }
              return tmp17;
            }
            const obj2 = { children: null };
            const items = [tmp10, tmp14];
            obj2.children = items;
            const tmp19 = __initData(ModalScreen.ModalScreen, obj2);
            cResult[13] = tmp10;
            cResult[14] = tmp14;
            cResult[15] = tmp19;
            tmp17 = tmp19;
          }
          const obj3 = { children: null };
          ({ text: obj6.text, onPress: obj6.onPress } = primaryButton);
          obj3.children = closure_1_11(components_Button_Button.Button, { text: null, onPress: null });
          const tmp16 = closure_1_11(ModalFooter.ModalFooter, obj3);
          cResult[10] = primaryButton.onPress;
          cResult[11] = primaryButton.text;
          cResult[12] = tmp16;
          tmp14 = tmp16;
          const obj4 = { text: null, onPress: null };
        }
      }
      const obj5 = { style: tmp4.content, children: null };
      const items1 = [tmp5, tmp7];
      obj5.children = items1;
      const tmp13 = __initData(View, obj5);
      cResult[6] = tmp4.content;
      cResult[7] = tmp5;
      cResult[8] = tmp7;
      cResult[9] = tmp13;
      tmp10 = tmp13;
    }
    const obj7 = { variant: "text-sm/medium", color: "text-muted", style: tmp4.description, children: description };
    const tmp9 = closure_1_11(Text_Text.Text, obj7);
    cResult[3] = description;
    cResult[4] = tmp4.description;
    cResult[5] = tmp9;
    tmp7 = tmp9;
  }
  const tmp6 = closure_1_11(Text_Text.Text, { variant: "heading-xl/bold", color: "mobile-text-heading-primary", style: tmp4.title, children: title });
  cResult[0] = tmp4.title;
  cResult[1] = title;
  cResult[2] = tmp6;
  tmp5 = tmp6;
  const obj13 = { variant: "heading-xl/bold", color: "mobile-text-heading-primary", style: tmp4.title, children: title };
}) : (function FamilyCenterPrereqScreen(primaryButton) {
  primaryButton = primaryButton.primaryButton;
  ({ title, description } = primaryButton);
  const tmp = closure_22();
  const obj = { children: null };
  const obj2 = { style: tmp.content, children: null };
  const items = [closure_1_11(Text_Text.Text, { variant: "heading-xl/bold", color: "mobile-text-heading-primary", style: tmp.title, children: title }), closure_1_11(Text_Text.Text, { variant: "text-sm/medium", color: "text-muted", style: tmp.description, children: description })];
  obj2.children = items;
  const items1 = [__initData(View, obj2), ];
  const obj5 = { children: closure_1_11(components_Button_Button.Button, { text: primaryButton.text, onPress: primaryButton.onPress }) };
  items1[1] = closure_1_11(ModalFooter.ModalFooter, obj5);
  obj.children = items1;
  return __initData(ModalScreen.ModalScreen, obj);
});
createStyles = fn(5092);
let obj21 = { content: { flex: 1, flexDirection: "column", alignItems: "center", justifyContent: "center", paddingHorizontal: 32 }, art: null, title: null, description: null };
let obj20 = { textAlign: "center", marginBottom: nativeDefault.space.PX_8 };
obj21.art = { marginBottom: nativeDefault.space.PX_24 };
let obj22 = { marginBottom: nativeDefault.space.PX_24 };
obj21.title = { textAlign: "center", marginBottom: nativeDefault.space.PX_8 };
obj21.description = { textAlign: "center" };
let closure_24 = createStyles.createStyles(obj21);
ReactCompilerGating = fn(558);
let closure_25 = ReactCompilerGating.isReactCompilerEnabled() ? (function useNavigateToVerifyingOnPending() {
  const cResult = navigation(576).c(7);
  const obj = navigation(576);
  const tmp = navigation;
  navigation = navigation(1503).useNavigation();
  if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
    const items = [UserStore];
    const fn = function o() {
      currentUser = currentUser.getCurrentUser();
      let prop;
      if (currentUser != null) {
        prop = currentUser.ageVerificationStatus;
      }
      return prop;
    };
    cResult[0] = items;
    cResult[1] = fn;
    tmp5 = items;
    tmp6 = fn;
  } else {
    [tmp5, tmp6] = cResult;
  }
  const obj2 = navigation(1503);
  const stateFromStores = tmp(573).useStateFromStores(tmp5, tmp6);
  const tmp9 = stateFromStores(5922)(stateFromStores);
  dependencyMap = tmp9;
  if (cResult[2] === stateFromStores) {
    if (cResult[3] === navigation) {
      if (cResult[4] === tmp9) {
        let tmp10 = cResult[5];
        let tmp11 = cResult[6];
      }
      const effect = noop.useEffect(tmp10, tmp11);
    }
  }
  const fn2 = function u() {
    let tmp2 = null != closure_2;
    if (tmp2) {
      tmp2 = tmp !== stateFromStores;
    }
    if (tmp2) {
      tmp2 = null != stateFromStores;
    }
    if (tmp2) {
      tmp2 = stateFromStores !== Server.AgeVerificationStatusUkAndAusOnly.UNVERIFIED;
    }
    if (tmp2) {
      const replaced = navigation.replace(FamilyCenterModalRequestRouting.FamilyCenterModalRequestSections.VERIFYING);
    }
  };
  const items1 = [stateFromStores, tmp9, navigation];
  cResult[2] = stateFromStores;
  cResult[3] = navigation;
  cResult[4] = tmp9;
  cResult[5] = fn2;
  cResult[6] = items1;
  tmp11 = items1;
  tmp10 = fn2;
  const tmpResult = tmp(573);
}) : (function useNavigateToVerifyingOnPending() {
  navigation = navigation(1503).useNavigation();
  const obj = navigation(1503);
  const items = [UserStore];
  const stateFromStores = navigation(573).useStateFromStores(items, () => {
    currentUser = currentUser.getCurrentUser();
    let prop;
    if (currentUser != null) {
      prop = currentUser.ageVerificationStatus;
    }
    return prop;
  });
  const tmp3 = stateFromStores(5922)(stateFromStores);
  dependencyMap = tmp3;
  const items1 = [stateFromStores, tmp3, navigation];
  const effect = noop.useEffect(() => {
    let tmp2 = null != closure_2;
    if (tmp2) {
      tmp2 = tmp !== stateFromStores;
    }
    if (tmp2) {
      tmp2 = null != stateFromStores;
    }
    if (tmp2) {
      tmp2 = stateFromStores !== Server.AgeVerificationStatusUkAndAusOnly.UNVERIFIED;
    }
    if (tmp2) {
      const replaced = navigation.replace(FamilyCenterModalRequestRouting.FamilyCenterModalRequestSections.VERIFYING);
    }
  }, items1);
});
ReactCompilerGating = fn(558);
let closure_26 = ReactCompilerGating.isReactCompilerEnabled() ? (function FamilyCenterConfirmAgeScreen(teenIdentity) {
  const cResult = c.c(22);
  teenIdentity = teenIdentity.teenIdentity;
  const tmp4 = closure_24();
  closure_25();
  if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
    const fn = function n() {
      const obj = AgeVerificationActionCreatorsDefault;
      const result = obj.showAgeVerificationGetStartedModal({ entryPoint: require("AgeVerificationAnalyticsUtils").AgeVerificationModalEntryPoint.FAMILY_CENTER_CONNECTION });
    };
    cResult[0] = fn;
    let first = fn;
  } else {
    first = cResult[0];
  }
  if (cResult[1] === Symbol.for("react.memo_cache_sentinel")) {
    const tmp9 = closure_1_11(FamilyShieldSpotIllustration.FamilyShieldSpotIllustration, {});
    cResult[1] = tmp9;
    let tmp7 = tmp9;
  } else {
    tmp7 = cResult[1];
  }
  if (cResult[2] !== tmp4.art) {
    const obj2 = { style: tmp4.art, children: tmp7 };
    const tmp13 = closure_1_11(View, obj2);
    cResult[2] = tmp4.art;
    cResult[3] = tmp13;
    let tmp10 = tmp13;
  } else {
    tmp10 = cResult[3];
  }
  let global_name;
  if (teenIdentity != null) {
    global_name = teenIdentity.global_name;
  }
  if (cResult[4] === global_name) {
    let username;
    if (teenIdentity != null) {
      username = teenIdentity.username;
    }
    if (cResult[5] === username) {
      let tmp16 = cResult[6];
    }
    if (cResult[7] === tmp4.title) {
      if (cResult[8] === tmp16) {
        let tmp21 = cResult[9];
      }
      const _Symbol = Symbol;
      if (cResult[10] === Symbol.for("react.memo_cache_sentinel")) {
        const intl2 = util.intl;
        const formatResult = intl2.format(_modDef2568["0o3yg8"], { link: "https://support.discord.com/hc/articles/14155060633623" });
        cResult[10] = formatResult;
        let tmp24 = formatResult;
      } else {
        tmp24 = cResult[10];
      }
      if (cResult[11] !== tmp4.description) {
        const obj3 = { variant: "text-sm/medium", color: "text-muted", style: tmp4.description, children: tmp24 };
        const tmp29 = closure_1_11(Text_Text.Text, obj3);
        cResult[11] = tmp4.description;
        cResult[12] = tmp29;
        let tmp27 = tmp29;
      } else {
        tmp27 = cResult[12];
      }
      if (cResult[13] === tmp4.content) {
        if (cResult[14] === tmp27) {
          if (cResult[15] === tmp10) {
            if (cResult[16] === tmp21) {
              let tmp30 = cResult[17];
            }
            const _Symbol2 = Symbol;
            if (cResult[18] === Symbol.for("react.memo_cache_sentinel")) {
              const obj4 = { variant: "primary", text: null, onPress: null };
              const intl3 = util.intl;
              obj4.text = intl3.string(_modDef2568["3oUE4o"]);
              obj4.onPress = first;
              const tmp37 = closure_1_11(components_Button_Button.Button, obj4);
              cResult[18] = tmp37;
              let tmp34 = tmp37;
            } else {
              tmp34 = cResult[18];
            }
            const _Symbol3 = Symbol;
            if (cResult[19] === Symbol.for("react.memo_cache_sentinel")) {
              const obj5 = { children: null };
              const obj6 = { children: null };
              const items = [tmp34, ];
              const obj7 = { variant: "tertiary", text: null, onPress: null };
              const intl4 = util.intl;
              obj7.text = intl4.string(util.t.oEAioF);
              obj7.onPress = function onPress() {
                return ModalActionCreatorsDefault.pop();
              };
              items[1] = closure_1_11(components_Button_Button.Button, obj7);
              obj6.children = items;
              obj5.children = __initData(ButtonGroup.ButtonGroup, obj6);
              const tmp41 = closure_1_11(ModalFooter.ModalFooter, obj5);
              cResult[19] = tmp41;
              let tmp38 = tmp41;
            } else {
              tmp38 = cResult[19];
            }
            if (cResult[20] !== tmp30) {
              const obj8 = { children: null };
              const items1 = [tmp30, tmp38];
              obj8.children = items1;
              const tmp44 = __initData(ModalScreen.ModalScreen, obj8);
              cResult[20] = tmp30;
              cResult[21] = tmp44;
              let tmp42 = tmp44;
            } else {
              tmp42 = cResult[21];
            }
            return tmp42;
          }
        }
      }
      const obj9 = { style: tmp4.content, children: null };
      const items2 = [tmp10, tmp21, tmp27];
      obj9.children = items2;
      const tmp33 = __initData(View, obj9);
      cResult[13] = tmp4.content;
      cResult[14] = tmp27;
      cResult[15] = tmp10;
      cResult[16] = tmp21;
      cResult[17] = tmp33;
      tmp30 = tmp33;
    }
    const obj10 = { variant: "heading-xl/bold", color: "mobile-text-heading-primary", style: tmp4.title, children: tmp16 };
    const tmp23 = closure_1_11(Text_Text.Text, obj10);
    cResult[7] = tmp4.title;
    cResult[8] = tmp16;
    cResult[9] = tmp23;
    tmp21 = tmp23;
  }
  const intl = util.intl;
  let str;
  if (teenIdentity != null) {
    str = teenIdentity.global_name;
  }
  if (str == null) {
    let username1;
    if (teenIdentity != null) {
      username1 = teenIdentity.username;
    }
    str = username1;
  }
  if (str == null) {
    str = "";
  }
  const formatToPlainStringResult = intl.formatToPlainString(_modDef2568.pQQMJ7, { username: str });
  let global_name1;
  if (teenIdentity != null) {
    global_name1 = teenIdentity.global_name;
  }
  cResult[4] = global_name1;
  let username2;
  if (teenIdentity != null) {
    username2 = teenIdentity.username;
  }
  cResult[5] = username2;
  cResult[6] = formatToPlainStringResult;
  tmp16 = formatToPlainStringResult;
}) : (function FamilyCenterConfirmAgeScreen(teenIdentity) {
  teenIdentity = teenIdentity.teenIdentity;
  const tmp = closure_24();
  closure_25();
  const callback = noop.useCallback(() => {
    const obj = AgeVerificationActionCreatorsDefault;
    const result = obj.showAgeVerificationGetStartedModal({ entryPoint: require("AgeVerificationAnalyticsUtils").AgeVerificationModalEntryPoint.FAMILY_CENTER_CONNECTION });
  }, []);
  let obj = { style: tmp.content, children: null };
  const items = [closure_1_11(View, { style: tmp.art, children: closure_1_11(FamilyShieldSpotIllustration.FamilyShieldSpotIllustration, {}) }), , ];
  const obj3 = { variant: "heading-xl/bold", color: "mobile-text-heading-primary", style: tmp.title, children: null };
  const intl = util.intl;
  let str;
  if (teenIdentity != null) {
    str = teenIdentity.global_name;
  }
  if (str == null) {
    let username;
    if (teenIdentity != null) {
      username = teenIdentity.username;
    }
    str = username;
  }
  if (str == null) {
    str = "";
  }
  const obj4 = { children: null };
  obj3.children = intl.formatToPlainString(_modDef2568.pQQMJ7, { username: str });
  items[1] = closure_1_11(Text_Text.Text, obj3);
  const obj5 = { variant: "text-sm/medium", color: "text-muted", style: tmp.description, children: null };
  const intl2 = util.intl;
  obj5.children = intl2.format(_modDef2568["0o3yg8"], { link: "https://support.discord.com/hc/articles/14155060633623" });
  items[2] = closure_1_11(Text_Text.Text, obj5);
  obj.children = items;
  const items1 = [__initData(View, obj), ];
  const obj6 = { children: null };
  const obj7 = { children: null };
  const obj8 = { variant: "primary", text: null, onPress: null };
  const intl3 = util.intl;
  obj8.text = intl3.string(_modDef2568["3oUE4o"]);
  obj8.onPress = callback;
  const items2 = [closure_1_11(components_Button_Button.Button, obj8), ];
  const obj9 = { variant: "tertiary", text: null, onPress: null };
  const intl4 = util.intl;
  obj9.text = intl4.string(util.t.oEAioF);
  obj9.onPress = function onPress() {
    return ModalActionCreatorsDefault.pop();
  };
  items2[1] = closure_1_11(components_Button_Button.Button, obj9);
  obj7.children = items2;
  obj6.children = __initData(ButtonGroup.ButtonGroup, obj7);
  items1[1] = closure_1_11(ModalFooter.ModalFooter, obj6);
  obj4.children = items1;
  return __initData(ModalScreen.ModalScreen, obj4);
});
ReactCompilerGating = fn(558);
let closure_27 = ReactCompilerGating.isReactCompilerEnabled() ? (function FamilyCenterVerifyingScreen() {
  const cResult = navigation(stateFromStores[9]).c(13);
  const tmp4 = closure_20();
  let obj = navigation(stateFromStores[9]);
  navigation = navigation(stateFromStores[10]).useNavigation();
  const obj2 = navigation(stateFromStores[10]);
  const isAgeVerified = navigation(stateFromStores[41]).useIsAgeVerified();
  if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
    const items = [UserStore];
    const fn = function s() {
      currentUser = currentUser.getCurrentUser();
      let prop;
      if (currentUser != null) {
        prop = currentUser.ageVerificationStatus;
      }
      return prop;
    };
    cResult[0] = items;
    cResult[1] = fn;
    tmp7 = items;
    tmp8 = fn;
  } else {
    [tmp7, tmp8] = cResult;
  }
  const obj3 = navigation(stateFromStores[41]);
  stateFromStores = navigation(stateFromStores[11]).useStateFromStores(tmp7, tmp8);
  noop.useRef(false);
  if (cResult[2] === stateFromStores) {
    if (cResult[3] === isAgeVerified) {
      if (cResult[4] === navigation) {
        let tmp11 = cResult[5];
        let tmp12 = cResult[6];
      }
      const effect = noop.useEffect(tmp11, tmp12);
      if (cResult[7] !== navigation) {
        class E {
          constructor() {
            closure_0 = setTimeout(() => {
              const replaced = closure_0.replace(navigation(stateFromStores[13]).FamilyCenterModalRequestSections.ERROR, { failureCode: constants.GENERIC_ERROR });
            }, closure_1_7);
            return () => clearTimeout(closure_0);
          }
        }
        const items1 = [navigation];
        cResult[7] = navigation;
        cResult[8] = E;
        cResult[9] = items1;
        let tmp15 = items1;
      } else {
        class E {
          constructor() {
            closure_0 = setTimeout(() => {
              const replaced = closure_0.replace(navigation(stateFromStores[13]).FamilyCenterModalRequestSections.ERROR, { failureCode: constants.GENERIC_ERROR });
            }, closure_1_7);
            return () => clearTimeout(closure_0);
          }
        }
        tmp15 = cResult[9];
      }
      const effect1 = noop.useEffect(E, tmp15);
      const _Symbol = Symbol;
      if (cResult[10] === Symbol.for("react.memo_cache_sentinel")) {
        class E {
          constructor() {
            closure_0 = setTimeout(() => {
              const replaced = closure_0.replace(navigation(stateFromStores[13]).FamilyCenterModalRequestSections.ERROR, { failureCode: constants.GENERIC_ERROR });
            }, closure_1_7);
            return () => clearTimeout(closure_0);
          }
        }
        const tmp18 = closure_11(tmp(tmp2[35]).ActivityIndicator, {});
        cResult[10] = tmp18;
        const tmp17 = tmp18;
      } else {
        class E {
          constructor() {
            closure_0 = setTimeout(() => {
              const replaced = closure_0.replace(navigation(stateFromStores[13]).FamilyCenterModalRequestSections.ERROR, { failureCode: constants.GENERIC_ERROR });
            }, closure_1_7);
            return () => clearTimeout(closure_0);
          }
        }
      }
      if (cResult[11] !== tmp4.container) {
        class E {
          constructor() {
            closure_0 = setTimeout(() => {
              const replaced = closure_0.replace(navigation(stateFromStores[13]).FamilyCenterModalRequestSections.ERROR, { failureCode: constants.GENERIC_ERROR });
            }, closure_1_7);
            return () => clearTimeout(closure_0);
          }
        }
        const obj4 = { children: null };
        const obj6 = { style: tmp4.container, children: tmp17 };
        obj4.children = closure_11(View, obj6);
        const tmp21 = closure_11(tmp(tmp2[29]).ModalScreen, obj4);
        cResult[11] = tmp4.container;
        cResult[12] = tmp21;
        const tmp19 = tmp21;
      } else {
        class E {
          constructor() {
            closure_0 = setTimeout(() => {
              const replaced = closure_0.replace(navigation(stateFromStores[13]).FamilyCenterModalRequestSections.ERROR, { failureCode: constants.GENERIC_ERROR });
            }, closure_1_7);
            return () => clearTimeout(closure_0);
          }
        }
      }
      return tmp19;
    }
  }
  const fn2 = function f() {
    if (isAgeVerified) {
      if (!ref.current) {
        tmp9.current = true;
        const replaced = navigation.replace(FamilyCenterModalRequestRouting.FamilyCenterModalRequestSections.PREREQ_LOADING);
      }
    } else if (stateFromStores === Server.AgeVerificationStatusUkAndAusOnly.UNVERIFIED) {
      const obj = { failureCode: constants.GENERIC_ERROR };
      const replaced1 = navigation.replace(FamilyCenterModalRequestRouting.FamilyCenterModalRequestSections.ERROR, obj);
    }
  };
  const items2 = [isAgeVerified, stateFromStores, navigation];
  cResult[2] = stateFromStores;
  cResult[3] = isAgeVerified;
  cResult[4] = navigation;
  cResult[5] = fn2;
  cResult[6] = items2;
  tmp12 = items2;
  tmp11 = fn2;
  const tmpResult = navigation(stateFromStores[11]);
}) : (function FamilyCenterVerifyingScreen() {
  const tmp = closure_20();
  navigation = navigation(stateFromStores[10]).useNavigation();
  let obj = navigation(stateFromStores[10]);
  const isAgeVerified = navigation(stateFromStores[41]).useIsAgeVerified();
  const obj2 = navigation(stateFromStores[41]);
  const items = [UserStore];
  stateFromStores = navigation(stateFromStores[11]).useStateFromStores(items, () => {
    currentUser = currentUser.getCurrentUser();
    let prop;
    if (currentUser != null) {
      prop = currentUser.ageVerificationStatus;
    }
    return prop;
  });
  noop.useRef(false);
  const items1 = [isAgeVerified, stateFromStores, navigation];
  const effect = noop.useEffect(() => {
    if (isAgeVerified) {
      if (!ref.current) {
        tmp9.current = true;
        const replaced = navigation.replace(FamilyCenterModalRequestRouting.FamilyCenterModalRequestSections.PREREQ_LOADING);
      }
    } else if (stateFromStores === Server.AgeVerificationStatusUkAndAusOnly.UNVERIFIED) {
      const obj = { failureCode: constants.GENERIC_ERROR };
      const replaced1 = navigation.replace(FamilyCenterModalRequestRouting.FamilyCenterModalRequestSections.ERROR, obj);
    }
  }, items1);
  const items2 = [navigation];
  const effect1 = noop.useEffect(() => {
    const timeout = setTimeout(() => {
      const replaced = closure_0.replace(navigation(stateFromStores[13]).FamilyCenterModalRequestSections.ERROR, { failureCode: constants.GENERIC_ERROR });
    }, closure_1_7);
    return () => clearTimeout(closure_0);
  }, items2);
  const obj4 = { children: null };
  const obj3 = navigation(stateFromStores[11]);
  obj4.children = closure_11(View, { style: tmp.container, children: closure_11(navigation(stateFromStores[35]).ActivityIndicator, {}) });
  return closure_11(navigation(stateFromStores[29]).ModalScreen, obj4);
});
ReactCompilerGating = fn(558);
let closure_28 = ReactCompilerGating.isReactCompilerEnabled() ? (function FamilyCenterPrereqInvalidCodeScreen() {
  const cResult = c.c(1);
  if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
    const obj2 = { title: null, description: null, primaryButton: null };
    const intl = util.intl;
    obj2.title = intl.string(_modDef2568.ewSb6o);
    const intl2 = util.intl;
    obj2.description = intl2.string(_modDef2568.jcUN2F);
    const obj3 = { text: null, onPress: null };
    const intl3 = util.intl;
    obj3.text = intl3.string(util.t.WAI6xu);
    obj3.onPress = ModalActionCreatorsDefault.pop;
    obj2.primaryButton = obj3;
    const tmp8 = closure_1_11(closure_23, obj2);
    cResult[0] = tmp8;
    let first = tmp8;
  } else {
    first = cResult[0];
  }
  return first;
}) : (function FamilyCenterPrereqInvalidCodeScreen() {
  const obj = { title: null, description: null, primaryButton: null };
  const intl = util.intl;
  obj.title = intl.string(_modDef2568.ewSb6o);
  const intl2 = util.intl;
  obj.description = intl2.string(_modDef2568.jcUN2F);
  const obj2 = { text: null, onPress: null };
  const intl3 = util.intl;
  obj2.text = intl3.string(util.t.WAI6xu);
  obj2.onPress = ModalActionCreatorsDefault.pop;
  obj.primaryButton = obj2;
  return closure_1_11(closure_23, obj);
});
ReactCompilerGating = fn(558);
let closure_29 = ReactCompilerGating.isReactCompilerEnabled() ? (function FamilyCenterPrereqMustBeAdultScreen() {
  const cResult = c.c(2);
  closure_25();
  if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
    const fn = function t() {
      const obj = AgeVerificationActionCreatorsDefault;
      const result = obj.showAgeVerificationGetStartedModal({ entryPoint: require("AgeVerificationAnalyticsUtils").AgeVerificationModalEntryPoint.FAMILY_CENTER_CONNECTION });
    };
    cResult[0] = fn;
    let first = fn;
  } else {
    first = cResult[0];
  }
  if (cResult[1] === Symbol.for("react.memo_cache_sentinel")) {
    const obj2 = { title: null, description: null, primaryButton: null };
    const intl = util.intl;
    obj2.title = intl.string(_modDef2568.BQFHXW);
    const intl2 = util.intl;
    const obj3 = { link: null };
    const obj4 = { onClick: first };
    obj3.link = obj4;
    obj2.description = intl2.format(_modDef2568.WDjaKn, obj3);
    const obj5 = { text: null, onPress: null };
    const intl3 = util.intl;
    obj5.text = intl3.string(util.t["NX+WJN"]);
    obj5.onPress = ModalActionCreatorsDefault.pop;
    obj2.primaryButton = obj5;
    const tmp10 = closure_1_11(closure_23, obj2);
    cResult[1] = tmp10;
    let tmp6 = tmp10;
  } else {
    tmp6 = cResult[1];
  }
  return tmp6;
}) : (function FamilyCenterPrereqMustBeAdultScreen() {
  closure_25();
  let obj = { title: null, description: null, primaryButton: null };
  const callback = noop.useCallback(() => {
    const obj = AgeVerificationActionCreatorsDefault;
    const result = obj.showAgeVerificationGetStartedModal({ entryPoint: require("AgeVerificationAnalyticsUtils").AgeVerificationModalEntryPoint.FAMILY_CENTER_CONNECTION });
  }, []);
  const intl = util.intl;
  obj.title = intl.string(_modDef2568.BQFHXW);
  const intl2 = util.intl;
  obj.description = intl2.format(_modDef2568.WDjaKn, { link: { onClick: callback } });
  const obj3 = { text: null, onPress: null };
  const intl3 = util.intl;
  obj3.text = intl3.string(util.t["NX+WJN"]);
  obj3.onPress = ModalActionCreatorsDefault.pop;
  obj.primaryButton = obj3;
  return closure_1_11(closure_23, obj);
});
let obj27 = { headerShown: true, headerLeft: null, headerTitle: null };
const NavigatorHeader = fn(6200);
obj27.headerLeft = NavigatorHeader.getHeaderCloseButton(ModalActionCreatorsDefault.pop);
obj27.headerTitle = function headerTitle() {
  return null;
};
ReactCompilerGating = fn(558);
let obj26 = { textAlign: "center", marginBottom: nativeDefault.space.PX_8 };
size = fn(2);
let result = size.fileFinishedImporting("modules/parent_tools/native/FamilyCenterModalRequest.tsx");

export default ReactCompilerGating.isReactCompilerEnabled() ? (function FamilyCenterRequestModal(arg0) {
  const cResult = c.c(6);
  ({ userId, linkCode } = arg0);
  if (cResult[0] === linkCode) {
    if (cResult[1] === userId) {
      let tmp4 = cResult[2];
    }
    const _Symbol = Symbol;
    if (cResult[3] === Symbol.for("react.memo_cache_sentinel")) {
      const intl = util.intl;
      const stringResult = intl.string(util.t["13/7kX"]);
      cResult[3] = stringResult;
      let tmp7 = stringResult;
    } else {
      tmp7 = cResult[3];
    }
    if (cResult[4] !== tmp4) {
      const obj2 = { initialRouteName: FamilyCenterModalRequestRouting.FamilyCenterModalRequestSections.PREREQ_LOADING, screens: tmp4, headerBackTitle: tmp7 };
      const tmp11 = closure_1_11(Modal.Modal, obj2);
      cResult[4] = tmp4;
      cResult[5] = tmp11;
      let tmp9 = tmp11;
    } else {
      tmp9 = cResult[5];
    }
    return tmp9;
  }
  const tmp5 = getScreens(userId, linkCode);
  cResult[0] = linkCode;
  cResult[1] = userId;
  cResult[2] = tmp5;
  tmp4 = tmp5;
}) : (function FamilyCenterRequestModal(userId) {
  userId = userId.userId;
  const linkCode = userId.linkCode;
  const items = [linkCode, userId];
  const memo = noop.useMemo(() => getScreens(userId, linkCode), items);
  const obj = { initialRouteName: userId(11529).FamilyCenterModalRequestSections.PREREQ_LOADING, screens: memo, headerBackTitle: null };
  const intl = userId(1126).intl;
  obj.headerBackTitle = intl.string(userId(1126).t["13/7kX"]);
  return closure_11(userId(10602).Modal, obj);
});
export const FamilyCenterModalRequestConfirm = tmp4;
export const FamilyCenterModalRequestSuccess = tmp5;
export const FamilyCenterModalRequestError = tmp6;