// === Module 12167: FamilyCenterModalRequest ===

// Module 12167 (FamilyCenterModalRequest)
import _modDef38 from "module_38" /* 38 */;
import useStateFromStores from "useStateFromStores" /* 563 */;
import nativeDefault from "native" /* 576 */;
import util from "util" /* 1115 */;
import native from "native" /* 1177 */;
import useNavigation from "useNavigation" /* 1484 */;
import Server from "Server" /* 1978 */;
import _modDef2482 from "module_2482" /* 2482 */;
import Text_Text from "Text/Text" /* 4752 */;
import ModalActionCreatorsDefault from "ModalActionCreators" /* 4959 */;
import components_Button_Button from "components/Button/Button" /* 5186 */;
import ActivityIndicator_ActivityIndicator from "ActivityIndicator/ActivityIndicator" /* 5789 */;
import NavigatorHeader2 from "NavigatorHeader" /* 5836 */;
import native2 from "native" /* 5904 */;
import _modDef7232 from "module_7232" /* 7232 */;
import FamilyCenterActionCreatorsDefault from "FamilyCenterActionCreators" /* 7779 */;
import FamilyCenterUtils from "FamilyCenterUtils" /* 7832 */;
import ModalScreen from "ModalScreen" /* 8692 */;
import ModalContent from "ModalContent" /* 8693 */;
import useIsInAdultAgeGroupDefault from "useIsInAdultAgeGroup" /* 8923 */;
import _modDef11813 from "module_11813" /* 11813 */;
import FamilyCenterModalRequestRouting from "FamilyCenterModalRequestRouting" /* 12168 */;
import ModalFooter from "ModalFooter" /* 12179 */;
import asyncGeneratorStep from "asyncGeneratorStep" /* 5 */;
import noop from "module_19" /* 19 */;
import UserStore from "UserStore" /* 1372 */;

require = fn;
class FamilyCenterModalRequestConfirm {
  constructor(arg0) {
    userId = global.userId;
    linkCode = global.linkCode;
    teenIdentity = global.teenIdentity;
    closure_2 = undefined;
    requestLink = undefined;
    tmp = closure_15();
    tmp2 = userId;
    tmp3 = closure_2;
    obj = userId(closure_2[8]);
    navigation = obj.useNavigation();
    closure_2 = navigation;
    obj2 = userId(closure_2[9]);
    items = [];
    items[0] = closure_7;
    stateFromStores = obj2.useStateFromStores(items, () => currentUser.getCurrentUser());
    items1 = [];
    items1[0] = navigation;
    items2 = [];
    items2[0] = navigation;
    callback = closure_4.useCallback(() => {
      const result = FamilyCenterActionCreatorsDefault.clearPendingConnection();
      navigation.push(FamilyCenterModalRequestRouting.FamilyCenterModalRequestSections.SENT);
    }, items1);
    callback1 = closure_4.useCallback((arg0) => {
      const failureCodeForAPIError = FamilyCenterUtils.getFailureCodeForAPIError(arg0);
      navigation.push(FamilyCenterModalRequestRouting.FamilyCenterModalRequestSections.ERROR, { failureCode: failureCodeForAPIError });
    }, items2);
    obj3 = userId(closure_2[13]);
    familyCenterActions = obj3.useFamilyCenterActions({ onSuccess: callback, onError: callback1 });
    requestLink = familyCenterActions.requestLink;
    isRequestingLink = familyCenterActions.isRequestingLink;
    items3 = [, , ];
    items3[0] = requestLink;
    items3[1] = userId;
    items3[2] = linkCode;
    tmp10 = jsxs;
    callback2 = closure_4.useCallback(() => {
      requestLink(userId, linkCode);
    }, items3);
    if (null != teenIdentity) {
      tmp11 = View;
      obj1 = { style: null, children: null };
      obj1.style = tmp.connectionHeader;
      obj30 = { style: null, children: null };
      obj30.style = tmp.headerIcons;
      tmp12 = jsx;
      userAvatarSource = undefined;
      if (null != stateFromStores) {
        tmp14 = linkCode;
        obj6 = linkCode(tmp3[17]);
        userAvatarSource = obj6.getUserAvatarSource(stateFromStores);
      }
      obj31 = { source: null, size: null, accessibilityLabel: null };
      obj31.source = userAvatarSource;
      obj31.size = tmp2(tmp3[16]).AvatarSizes.LARGE;
      intl = tmp2(tmp3[18]).intl;
      tmp15 = linkCode;
      str = undefined;
      if (stateFromStores != null) {
        str = stateFromStores.globalName;
      }
      if (str == null) {
        username1 = undefined;
        if (stateFromStores != null) {
          username1 = stateFromStores.username;
        }
        str = username1;
      }
      if (str == null) {
        str = "";
      }
      obj32 = { name: null };
      obj32.name = str;
      obj31.accessibilityLabel = intl.formatToPlainString(linkCode(tmp3[19]).kFj4h1, obj32);
      items4 = [, , ];
      items4[0] = tmp12(tmp2(tmp3[16]).Avatar, obj31);
      obj33 = { style: null, children: null };
      obj33.style = tmp.ellipseGroup;
      obj34 = { style: null };
      obj34.style = tmp.ellipse;
      items5 = [, , ];
      items5[0] = tmp12(tmp11, obj34);
      obj35 = { style: null };
      obj35.style = tmp.ellipse;
      items5[1] = tmp12(tmp11, obj35);
      obj36 = { style: null };
      obj36.style = tmp.ellipse;
      items5[2] = tmp12(tmp11, obj36);
      obj33.children = items5;
      items4[1] = tmp10(tmp11, obj33);
      obj37 = { source: null, size: null, accessibilityLabel: null };
      tmp15Result = tmp15(tmp3[17]);
      obj38 = { id: null, avatar: null, discriminator: "0" };
      ({ id: obj15.id, avatar: obj15.avatar } = teenIdentity);
      obj37.source = tmp15Result.getUserAvatarSource(obj38);
      obj37.size = tmp2(tmp3[16]).AvatarSizes.LARGE;
      intl2 = tmp2(tmp3[18]).intl;
      username = teenIdentity.global_name;
      if (username == null) {
        username = teenIdentity.username;
      }
      obj39 = { name: null };
      obj39.name = username;
      obj37.accessibilityLabel = intl2.formatToPlainString(tmp15(tmp3[19]).kFj4h1, obj39);
      items4[2] = tmp12(tmp2(tmp3[16]).Avatar, obj37);
      obj30.children = items4;
      items6 = [, , , ];
      items6[0] = tmp10(tmp11, obj30);
      obj40 = { variant: "heading-xl/bold", color: "mobile-text-heading-primary", style: null, children: null };
      obj40.style = tmp.title;
      intl3 = tmp2(tmp3[18]).intl;
      obj40.children = intl3.string(tmp15(tmp3[19]).sMmIbm);
      items6[1] = tmp12(tmp2(tmp3[20]).Text, obj40);
      obj41 = { variant: "heading-xl/bold", color: "mobile-text-heading-primary", style: null, children: null };
      obj41.style = tmp.teenName;
      username2 = teenIdentity.global_name;
      if (username2 == null) {
        username2 = teenIdentity.username;
      }
      obj41.children = username2;
      items6[2] = tmp12(tmp2(tmp3[20]).Text, obj41);
      obj42 = { variant: "text-sm/medium", color: "text-muted", style: null, children: null };
      obj42.style = tmp.consent;
      intl4 = tmp2(tmp3[18]).intl;
      username3 = teenIdentity.global_name;
      if (username3 == null) {
        username3 = teenIdentity.username;
      }
      obj43 = { username: null };
      obj43.username = username3;
      obj42.children = intl4.format(tmp15(tmp3[19]).yiUJNU, obj43);
      items6[3] = tmp12(tmp2(tmp3[20]).Text, obj42);
      obj1.children = items6;
      tmp10Result = tmp10(tmp11, obj1);
      tmp18 = tmp15;
      tmp19 = tmp12;
    } else {
      tmp20 = Fragment;
      obj44 = { children: null };
      tmp21 = jsx;
      tmp22 = Image;
      obj45 = { style: null, source: null };
      obj45.style = tmp.art;
      tmp23 = linkCode;
      obj45.source = linkCode(tmp3[21]);
      items7 = [, ];
      items7[0] = jsx(Image, obj45);
      obj46 = { style: null, variant: "text-lg/bold", children: null };
      obj46.style = tmp.headerText;
      intl7 = tmp2(tmp3[18]).intl;
      obj46.children = intl7.string(linkCode(tmp3[19]).GH11eI);
      items7[1] = jsx(tmp2(tmp3[20]).Text, obj46);
      obj44.children = items7;
      tmp10Result = tmp10(Fragment, obj44);
      tmp18 = linkCode;
      tmp19 = jsx;
    }
    obj47 = { children: null };
    obj48 = { children: null };
    items8 = [, ];
    items8[0] = tmp10Result;
    items8[1] = tmp19(tmp18(tmp3[22]), {});
    obj48.children = items8;
    items9 = [, ];
    items9[0] = tmp10(userId(closure_2[15]).ModalContent, obj48);
    obj49 = { children: null };
    obj50 = { children: null };
    obj51 = { variant: "primary", size: "lg", disabled: isRequestingLink, loading: isRequestingLink, text: null, onPress: null };
    intl5 = tmp2(tmp3[18]).intl;
    obj51.text = intl5.string(tmp18(tmp3[19]).ISg34l);
    obj51.onPress = callback2;
    items10 = [, ];
    items10[0] = tmp19(tmp2(tmp3[25]).Button, obj51);
    obj52 = { variant: "secondary", size: "lg", text: null, onPress: null };
    intl6 = tmp2(tmp3[18]).intl;
    obj52.text = intl6.string(tmp2(tmp3[18]).t["ETE/oC"]);
    obj52.onPress = tmp18(tmp3[26]).pop;
    items10[1] = tmp19(tmp2(tmp3[25]).Button, obj52);
    obj50.children = items10;
    obj49.children = tmp10(tmp2(tmp3[24]).ButtonGroup, obj50);
    items9[1] = tmp19(tmp2(tmp3[23]).ModalFooter, obj49);
    obj47.children = items9;
    return tmp10(userId(closure_2[14]).ModalScreen, obj47);
  }
}
class FamilyCenterModalRequestSuccess {
  constructor() {
    tmp = closure_17();
    tmp2 = closure_0;
    tmp3 = closure_2;
    obj = closure_0(closure_2[9]);
    items = [];
    items[0] = closure_7;
    stateFromStores = obj.useStateFromStores(items, () => currentUser.getCurrentUser());
    callback = closure_4.useCallback(() => {
      ModalActionCreatorsDefault.pop();
    }, []);
    if (null === stateFromStores) {
      tmp6 = closure_1;
      arr2 = closure_1(tmp3[26]);
      arr1 = arr2.pop();
    }
    tmp8 = jsxs;
    tmp9 = jsx;
    tmp10 = View;
    obj1 = { style: tmp.content, children: null };
    obj11 = { style: tmp.textWrapper, children: null };
    obj12 = { style: tmp.illustration, children: jsx(tmp2(tmp3[27]).EnvelopeSpotIllustration, { scale: 0.7 }) };
    items1 = [, , ];
    items1[0] = jsx(View, obj12);
    obj13 = { variant: "heading-lg/bold", color: "mobile-text-heading-primary", style: tmp.header, children: null };
    intl = tmp2(tmp3[18]).intl;
    obj13.children = intl.string(closure_1(tmp3[19]).EpwfZl);
    items1[1] = jsx(tmp2(tmp3[20]).Text, obj13);
    obj14 = { variant: "text-sm/medium", color: "text-muted", style: tmp.description, children: null };
    intl2 = tmp2(tmp3[18]).intl;
    email = undefined;
    if (stateFromStores != null) {
      email = stateFromStores.email;
    }
    obj15 = { children: null };
    obj16 = { children: null };
    obj14.children = intl2.format(closure_1(tmp3[19]).dVtWId, { email });
    items1[2] = tmp9(tmp2(tmp3[20]).Text, obj14);
    obj11.children = items1;
    obj1.children = tmp8(tmp10, obj11);
    obj16.children = tmp9(tmp10, obj1);
    items2 = [, ];
    items2[0] = tmp9(tmp2(tmp3[15]).ModalContent, obj16);
    obj17 = { children: null };
    obj18 = { size: "lg", text: null, onPress: null };
    intl3 = tmp2(tmp3[18]).intl;
    obj18.text = intl3.string(tmp2(tmp3[18]).t.cpT0Cq);
    obj18.onPress = callback;
    obj17.children = tmp9(tmp2(tmp3[25]).Button, obj18);
    items2[1] = tmp9(tmp2(tmp3[23]).ModalFooter, obj17);
    obj15.children = items2;
    return tmp8(tmp2(tmp3[14]).ModalScreen, obj15);
  }
}
class FamilyCenterModalRequestError {
  constructor(arg0) {
    tmp = closure_19();
    tmp2 = closure_0;
    tmp3 = closure_2;
    obj = closure_0(closure_2[9]);
    items = [];
    items[0] = closure_7;
    stateFromStores = obj.useStateFromStores(items, () => currentUser.getCurrentUser());
    tmp5 = closure_1;
    tmp6 = closure_1(closure_2[28])();
    obj2 = closure_0(closure_2[16]);
    boxShadowStyle = obj2.generateBoxShadowStyle(closure_0(closure_2[16]).FOUR_DP_ELEVATION_SHADOW_PARAMS);
    callback = closure_4.useCallback(() => {
      ModalActionCreatorsDefault.pop();
    }, []);
    tmp9 = closure_1(closure_2[29])(null != stateFromStores, "User must be logged in to see this modal.");
    obj3 = closure_9[global.failureCode];
    tmp10 = tmp6;
    obj1 = { isAdult: tmp10, email: null };
    email = stateFromStores.email;
    obj1.email = email;
    headerResult = obj3.header(obj1);
    icon = obj3.icon;
    tmp14 = jsxs;
    descriptionResult = obj3.description(obj1);
    tmp13 = FamilyCenterIconType;
    tmp15 = jsx;
    tmp16 = View;
    obj15 = { style: null, children: null };
    items1 = [, ];
    items1[0] = tmp.ring;
    items1[1] = boxShadowStyle;
    obj15.style = items1;
    items2 = [, ];
    items2[0] = tmp.iconContainer;
    obj16 = { style: items2, children: null };
    items2[1] = icon === FamilyCenterIconType.CHECK ? tmp.positive : tmp.negative;
    if (icon === tmp13.CHECK) {
      obj17 = { source: null, color: "#FFF" };
      obj17.source = tmp5(tmp3[30]);
      tmp15Result = tmp15(tmp2(tmp3[16]).Icon, obj17);
    } else {
      obj18 = { source: null, color: "#FFF" };
      obj18.source = tmp5(tmp3[31]);
      tmp15Result = tmp15(tmp2(tmp3[16]).Icon, obj18);
    }
    obj19 = { children: null };
    obj20 = { children: null };
    obj16.children = tmp15Result;
    obj15.children = tmp15(tmp16, obj16);
    items3 = [, , ];
    items3[0] = tmp15(tmp16, obj15);
    obj21 = { variant: "heading-lg/bold", color: "mobile-text-heading-primary", style: tmp.header, children: headerResult };
    items3[1] = tmp15(tmp2(tmp3[20]).Text, obj21);
    obj22 = { variant: "text-sm/medium", color: "text-muted", style: tmp.description, children: descriptionResult };
    items3[2] = tmp15(tmp2(tmp3[20]).Text, obj22);
    obj20.children = items3;
    items4 = [, ];
    items4[0] = tmp14(tmp2(tmp3[15]).ModalContent, obj20);
    obj23 = { children: null };
    obj24 = { text: null, onPress: null };
    intl = tmp2(tmp3[18]).intl;
    obj24.text = intl.string(tmp2(tmp3[18]).t.cpT0Cq);
    obj24.onPress = callback;
    obj23.children = tmp15(tmp2(tmp3[25]).Button, obj24);
    items4[1] = tmp15(tmp2(tmp3[23]).ModalFooter, obj23);
    obj19.children = items4;
    return tmp14(tmp2(tmp3[14]).ModalScreen, obj19);
  }
}
function FamilyCenterPrereqLoading(arg0) {
  ({ userId: require, linkCode: importDefault } = arg0);
  const tmp = closure_21();
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
          return { value: "HermesInternal", done: null };
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
              const obj5 = { value: FamilyCenterModalRequestRouting.resolveConnectionPrereqTarget(closure_0, closure_1), done: false };
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
            } else if (closure_128_0.section !== FamilyCenterModalRequestRouting.FamilyCenterModalRequestSections.ERROR) {
              if (closure_128_0.section !== FamilyCenterModalRequestRouting.FamilyCenterModalRequestSections.REQUEST) {
                if (closure_128_0.section !== FamilyCenterModalRequestRouting.FamilyCenterModalRequestSections.CONFIRM_AGE) {
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
  obj2.children = closure_12(closure_6, { style: tmp.container, children: closure_12(ActivityIndicator_ActivityIndicator.ActivityIndicator, {}) });
  return closure_12(ModalScreen.ModalScreen, obj2);
}
function FamilyCenterPrereqScreen(primaryButton) {
  primaryButton = primaryButton.primaryButton;
  ({ title, description } = primaryButton);
  const tmp = closure_23();
  const obj = { children: null };
  const obj2 = { style: tmp.content, children: null };
  const items = [closure_1_12(Text_Text.Text, { variant: "heading-xl/bold", color: "mobile-text-heading-primary", style: tmp.title, children: title }), closure_1_12(Text_Text.Text, { variant: "text-sm/medium", color: "text-muted", style: tmp.description, children: description })];
  obj2.children = items;
  const items1 = [map1(timestampProducer, obj2), ];
  const obj5 = { children: closure_1_12(components_Button_Button.Button, { text: primaryButton.text, onPress: primaryButton.onPress }) };
  items1[1] = closure_1_12(ModalFooter.ModalFooter, obj5);
  obj.children = items1;
  return map1(ModalScreen.ModalScreen, obj);
}
function FamilyCenterConfirmAgeScreen(teenIdentity) {
  teenIdentity = teenIdentity.teenIdentity;
  const tmp = closure_25();
  let navigation;
  navigation = navigation(1484).useNavigation();
  let obj = navigation(1484);
  const items = [UserStore];
  const stateFromStores = navigation(563).useStateFromStores(items, () => {
    currentUser = currentUser.getCurrentUser();
    let prop;
    if (currentUser != null) {
      prop = currentUser.ageVerificationStatus;
    }
    return prop;
  });
  const tmp7 = stateFromStores(8542)(stateFromStores);
  dependencyMap = tmp7;
  const items1 = [stateFromStores, tmp7, navigation];
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
  const callback = noop.useCallback(() => {
    const obj = stateFromStores(8681);
    const result = obj.showAgeVerificationGetStartedModal({ entryPoint: navigation(8683).AgeVerificationModalEntryPoint.FAMILY_CENTER_CONNECTION });
  }, []);
  const obj3 = { style: tmp.content, children: null };
  const obj2 = navigation(563);
  const items2 = [closure_12(closure_6, { style: tmp.art, children: closure_12(navigation(5904).FamilyShieldSpotIllustration, {}) }), , ];
  const obj5 = { variant: "heading-xl/bold", color: "mobile-text-heading-primary", style: tmp.title, children: null };
  const intl = navigation(1115).intl;
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
  const obj6 = { children: null };
  obj5.children = intl.formatToPlainString(stateFromStores(2482).pQQMJ7, { username: str });
  items2[1] = closure_12(navigation(4752).Text, obj5);
  const obj7 = { variant: "text-sm/medium", color: "text-muted", style: tmp.description, children: null };
  const intl2 = tmp2(1115).intl;
  obj7.children = intl2.format(stateFromStores(2482)["0o3yg8"], { link: "https://support.discord.com/hc/articles/14155060633623" });
  items2[2] = closure_12(navigation(4752).Text, obj7);
  obj3.children = items2;
  const items3 = [closure_13(closure_6, obj3), ];
  const obj8 = { children: null };
  const obj9 = { children: null };
  const obj10 = { variant: "primary", text: null, onPress: null };
  const intl3 = tmp2(1115).intl;
  obj10.text = intl3.string(stateFromStores(2482)["3oUE4o"]);
  obj10.onPress = callback;
  const items4 = [closure_12(navigation(5186).Button, obj10), ];
  const obj11 = { variant: "tertiary", text: null, onPress: null };
  const intl4 = tmp2(1115).intl;
  obj11.text = intl4.string(navigation(1115).t.oEAioF);
  obj11.onPress = function onPress() {
    return stateFromStores(4959).pop();
  };
  items4[1] = closure_12(navigation(5186).Button, obj11);
  obj9.children = items4;
  obj8.children = closure_13(navigation(5645).ButtonGroup, obj9);
  items3[1] = closure_12(navigation(12179).ModalFooter, obj8);
  obj6.children = items3;
  return closure_13(navigation(8692).ModalScreen, obj6);
}
function FamilyCenterVerifyingScreen() {
  const tmp = closure_21();
  navigation = navigation(stateFromStores[8]).useNavigation();
  let obj = navigation(stateFromStores[8]);
  const isAgeVerified = navigation(stateFromStores[37]).useIsAgeVerified();
  const obj2 = navigation(stateFromStores[37]);
  const items = [UserStore];
  stateFromStores = navigation(stateFromStores[9]).useStateFromStores(items, () => {
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
      const replaced = closure_0.replace(navigation(stateFromStores[11]).FamilyCenterModalRequestSections.ERROR, { failureCode: constants.GENERIC_ERROR });
    }, closure_1_8);
    return () => clearTimeout(closure_0);
  }, items2);
  const obj4 = { children: null };
  const obj3 = navigation(stateFromStores[9]);
  obj4.children = closure_12(closure_6, { style: tmp.container, children: closure_12(navigation(stateFromStores[32]).ActivityIndicator, {}) });
  return closure_12(navigation(stateFromStores[14]).ModalScreen, obj4);
}
function FamilyCenterPrereqInvalidCodeScreen() {
  const obj = { title: null, description: null, primaryButton: null };
  const intl = util.intl;
  obj.title = intl.string(_modDef2482.ewSb6o);
  const intl2 = util.intl;
  obj.description = intl2.string(_modDef2482.jcUN2F);
  const obj2 = { text: null, onPress: null };
  const intl3 = util.intl;
  obj2.text = intl3.string(util.t.WAI6xu);
  obj2.onPress = ModalActionCreatorsDefault.pop;
  obj.primaryButton = obj2;
  return closure_1_12(FamilyCenterPrereqScreen, obj);
}
function FamilyCenterPrereqMustBeAdultScreen() {
  navigation = navigation(1484).useNavigation();
  let obj = navigation(1484);
  const items = [UserStore];
  const stateFromStores = navigation(563).useStateFromStores(items, () => {
    currentUser = currentUser.getCurrentUser();
    let prop;
    if (currentUser != null) {
      prop = currentUser.ageVerificationStatus;
    }
    return prop;
  });
  const tmp3 = stateFromStores(8542)(stateFromStores);
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
  const obj3 = { title: null, description: null, primaryButton: null };
  const callback = noop.useCallback(() => {
    const obj = stateFromStores(8681);
    const result = obj.showAgeVerificationGetStartedModal({ entryPoint: navigation(8683).AgeVerificationModalEntryPoint.FAMILY_CENTER_CONNECTION });
  }, []);
  const intl = navigation(1115).intl;
  obj3.title = intl.string(stateFromStores(2482).BQFHXW);
  const intl2 = navigation(1115).intl;
  obj3.description = intl2.format(stateFromStores(2482).WDjaKn, { link: { onClick: callback } });
  const obj5 = { text: null, onPress: null };
  const intl3 = navigation(1115).intl;
  obj5.text = intl3.string(navigation(1115).t["NX+WJN"]);
  obj5.onPress = stateFromStores(4959).pop;
  obj3.primaryButton = obj5;
  return closure_12(FamilyCenterPrereqScreen, obj3);
}
get_ActivityIndicator = fn(17);
({ Image: hasOwnProperty, View: metroRequire } = get_ActivityIndicator);
const FamilyCenterConstants = fn(7778);
({ FAMILY_CENTER_AGE_VERIFICATION_RESUME_TIMEOUT: closure_8, FAMILY_CENTER_LINK_REQUEST_ERROR_EXPERIENCES: closure_9, FamilyCenterFailureCode: c10, FamilyCenterIconType: closure_11 } = FamilyCenterConstants);
const jsxProd = fn(21);
({ jsx: closure_12, jsxs: map1, Fragment: closure_14 } = jsxProd);
let createStyles = fn(4756);
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
const __initData = createStyles.createStyles(obj2);
createStyles = fn(4756);
let obj9 = { content: null, textWrapper: null, header: null, description: null, illustration: null };
let obj8 = { marginTop: nativeDefault.space.PX_8, textAlign: "center", paddingHorizontal: nativeDefault.space.PX_16 };
obj9.content = { flex: 1, flexDirection: "column", alignItems: "center", justifyContent: "center", paddingHorizontal: nativeDefault.space.PX_16 };
obj9.textWrapper = { alignItems: "center" };
let obj11 = { flex: 1, flexDirection: "column", alignItems: "center", justifyContent: "center", paddingHorizontal: nativeDefault.space.PX_16 };
obj9.header = { marginBottom: nativeDefault.space.PX_8 };
obj9.description = { textAlign: "center" };
const rect = { position: "absolute", bottom: "100%", left: 0, right: 0, alignItems: "center", paddingBottom: nativeDefault.space.PX_24 };
obj9.illustration = rect;
let closure_17 = createStyles.createStyles(obj9);
createStyles = fn(4756);
let obj13 = { header: { marginBottom: 8, textAlign: "center" }, description: { textAlign: "center" }, ring: null, iconContainer: null, positive: null, negative: null };
const size1 = { display: "flex", justifyContent: "center", alignItems: "center", height: 64, width: 64, borderRadius: nativeDefault.radii.round, backgroundColor: nativeDefault.colors.BACKGROUND_SURFACE_HIGH, marginBottom: 24 };
obj13.ring = size1;
const size2 = { display: "flex", justifyContent: "center", alignItems: "center", height: 48, width: 48, borderRadius: nativeDefault.radii.round, backgroundColor: nativeDefault.colors.STATUS_POSITIVE };
obj13.iconContainer = size2;
let obj12 = { marginBottom: nativeDefault.space.PX_8 };
obj13.positive = { backgroundColor: nativeDefault.colors.STATUS_POSITIVE };
let obj14 = { backgroundColor: nativeDefault.colors.STATUS_POSITIVE };
obj13.negative = { backgroundColor: nativeDefault.colors.BACKGROUND_FEEDBACK_CRITICAL };
let closure_19 = createStyles.createStyles(obj13);
createStyles = fn(4756);
let closure_21 = createStyles.createStyles({ container: { flex: 1, justifyContent: "center", alignItems: "center" } });
createStyles = fn(4756);
let obj17 = { content: { flex: 1, flexDirection: "column", alignItems: "center", justifyContent: "center", paddingHorizontal: 32 }, title: null, description: null };
let obj16 = { backgroundColor: nativeDefault.colors.BACKGROUND_FEEDBACK_CRITICAL };
obj17.title = { textAlign: "center", marginBottom: nativeDefault.space.PX_8 };
obj17.description = { textAlign: "center" };
let closure_23 = createStyles.createStyles(obj17);
createStyles = fn(4756);
let obj19 = { content: { flex: 1, flexDirection: "column", alignItems: "center", justifyContent: "center", paddingHorizontal: 32 }, art: null, title: null, description: null };
let obj18 = { textAlign: "center", marginBottom: nativeDefault.space.PX_8 };
obj19.art = { marginBottom: nativeDefault.space.PX_24 };
let obj20 = { marginBottom: nativeDefault.space.PX_24 };
obj19.title = { textAlign: "center", marginBottom: nativeDefault.space.PX_8 };
obj19.description = { textAlign: "center" };
let closure_25 = createStyles.createStyles(obj19);
let obj24 = { headerShown: true, headerLeft: null, headerTitle: null };
const NavigatorHeader = fn(5836);
obj24.headerLeft = NavigatorHeader.getHeaderCloseButton(ModalActionCreatorsDefault.pop);
obj24.headerTitle = function headerTitle() {
  return null;
};
size = fn(2);
let result = size.fileFinishedImporting("modules/parent_tools/native/FamilyCenterModalRequest.tsx");

export default function FamilyCenterRequestModal(userId) {
  userId = userId.userId;
  const linkCode = userId.linkCode;
  const FamilyCenterConnectionPrereqExperiment = userId(12180).FamilyCenterConnectionPrereqExperiment;
  const items = [linkCode, userId];
  const memo = noop.useMemo(() => {
    let obj = {};
    const obj2 = {};
    const merged = Object.assign(obj24);
    obj2.render = function render() {
      return closure_2_12(FamilyCenterPrereqLoading, { userId, linkCode });
    };
    obj[FamilyCenterModalRequestRouting.FamilyCenterModalRequestSections.PREREQ_LOADING] = obj2;
    const obj3 = {};
    const merged1 = Object.assign(obj24);
    obj3.render = function render(teenIdentity) {
      teenIdentity = undefined;
      if (teenIdentity != null) {
        teenIdentity = teenIdentity.teenIdentity;
      }
      return closure_1_12(closure_1_26, { teenIdentity });
    };
    obj[FamilyCenterModalRequestRouting.FamilyCenterModalRequestSections.CONFIRM_AGE] = obj3;
    const obj4 = {};
    const merged2 = Object.assign(obj24);
    obj4.render = function render() {
      return closure_1_12(closure_1_27, {});
    };
    obj[FamilyCenterModalRequestRouting.FamilyCenterModalRequestSections.VERIFYING] = obj4;
    const obj5 = {
      headerLeft: NavigatorHeader2.getHeaderCloseButton(ModalActionCreatorsDefault.pop),
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
        return closure_2_12(FamilyCenterModalRequestConfirm, obj);
      }
    };
    obj[FamilyCenterModalRequestRouting.FamilyCenterModalRequestSections.REQUEST] = obj5;
    const obj7 = {};
    const merged3 = Object.assign(obj24);
    obj7.render = function render() {
      return closure_1_12(closure_1_28, {});
    };
    obj[FamilyCenterModalRequestRouting.FamilyCenterModalRequestSections.INVALID_CODE] = obj7;
    const obj8 = {};
    const merged4 = Object.assign(obj24);
    obj8.render = function render() {
      return closure_1_12(closure_1_29, {});
    };
    obj[FamilyCenterModalRequestRouting.FamilyCenterModalRequestSections.MUST_BE_ADULT] = obj8;
    const obj9 = { headerShown: true, headerLeft: null, headerTitle: null, render: null };
    obj9.headerLeft = NavigatorHeader2.getHeaderCloseButton(ModalActionCreatorsDefault.pop);
    obj9.headerTitle = function headerTitle() {
      return null;
    };
    obj9.render = function render() {
      return closure_1_12(closure_1_18, {});
    };
    obj[FamilyCenterModalRequestRouting.FamilyCenterModalRequestSections.SENT] = obj9;
    const obj11 = { headerShown: true, headerLeft: null, headerTitle: null, render: null };
    obj11.headerLeft = NavigatorHeader2.getHeaderCloseButton(ModalActionCreatorsDefault.pop);
    obj11.headerTitle = function headerTitle() {
      return null;
    };
    obj11.render = function render(failureCode) {
      return closure_1_12(closure_1_20, { failureCode: failureCode.failureCode });
    };
    obj[FamilyCenterModalRequestRouting.FamilyCenterModalRequestSections.ERROR] = obj11;
    const obj13 = { fullscreen: true, headerLeft: null, render: null };
    obj13.headerLeft = NavigatorHeader2.getHeaderCloseButton(ModalActionCreatorsDefault.pop);
    obj13.render = function render() {
      return closure_1_12(closure_1_20, { failureCode: constants.INELIGIBLE_FOR_FAMILY_CENTER });
    };
    obj[FamilyCenterModalRequestRouting.FamilyCenterModalRequestSections.TEEN_SCAN] = obj13;
    return obj;
  }, items);
  const FamilyCenterModalRequestSections = userId(12168).FamilyCenterModalRequestSections;
  if (FamilyCenterConnectionPrereqExperiment.useConfig({ location: "FamilyCenterRequestModal" }).enabled) {
    let PREREQ_LOADING = FamilyCenterModalRequestSections.PREREQ_LOADING;
  } else {
    PREREQ_LOADING = tmp2 ? FamilyCenterModalRequestSections.REQUEST : FamilyCenterModalRequestSections.TEEN_SCAN;
  }
  let obj = { initialRouteName: PREREQ_LOADING, screens: memo, headerBackTitle: null };
  const intl = tmp3(1115).intl;
  obj.headerBackTitle = intl.string(userId(1115).t["13/7kX"]);
  return closure_12(userId(11463).Modal, obj);
};
export { FamilyCenterModalRequestConfirm };
export { FamilyCenterModalRequestSuccess };
export { FamilyCenterModalRequestError };