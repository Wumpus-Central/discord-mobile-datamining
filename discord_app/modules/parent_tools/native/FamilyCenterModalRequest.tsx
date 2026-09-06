// === Module 11914: FamilyCenterModalRequest ===

// Module 11914 (FamilyCenterModalRequest)
import _modDef38 from "module_38" /* 38 */;
import useStateFromStores from "useStateFromStores" /* 563 */;
import nativeDefault from "native" /* 576 */;
import util from "util" /* 1114 */;
import native from "native" /* 1178 */;
import useNavigation from "useNavigation" /* 1483 */;
import Server from "Server" /* 1894 */;
import _modDef2396 from "module_2396" /* 2396 */;
import Text_Text from "Text/Text" /* 4556 */;
import ModalActionCreatorsDefault from "ModalActionCreators" /* 4763 */;
import components_Button_Button from "components/Button/Button" /* 4975 */;
import ActivityIndicator_ActivityIndicator from "ActivityIndicator/ActivityIndicator" /* 5577 */;
import NavigatorHeader2 from "NavigatorHeader" /* 5624 */;
import native2 from "native" /* 5692 */;
import FamilyCenterActionCreatorsDefault from "FamilyCenterActionCreators" /* 7539 */;
import FamilyCenterUtils from "FamilyCenterUtils" /* 7593 */;
import ModalScreen from "ModalScreen" /* 8421 */;
import ModalContent from "ModalContent" /* 8422 */;
import useIsInAdultAgeGroupDefault from "useIsInAdultAgeGroup" /* 8646 */;
import FamilyCenterModalRequestRouting from "FamilyCenterModalRequestRouting" /* 11915 */;
import ModalFooter from "ModalFooter" /* 11926 */;
import asyncGeneratorStep from "asyncGeneratorStep" /* 5 */;
import noop from "module_19" /* 19 */;
import UserStore from "UserStore" /* 1371 */;

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
      obj = { style: null, children: null };
      obj.style = tmp.connectionHeader;
      obj1 = { style: null, children: null };
      obj1.style = tmp.headerIcons;
      tmp12 = jsx;
      userAvatarSource = undefined;
      if (null != stateFromStores) {
        tmp14 = linkCode;
        obj6 = linkCode(tmp3[17]);
        userAvatarSource = obj6.getUserAvatarSource(stateFromStores);
      }
      obj2 = { source: null, size: null, accessibilityLabel: null };
      obj2.source = userAvatarSource;
      obj2.size = tmp2(tmp3[16]).AvatarSizes.LARGE;
      intl = tmp2(tmp3[18]).intl;
      tmp15 = linkCode;
      str = undefined;
      if (stateFromStores != null) {
        str = stateFromStores.globalName;
      }
      if (str == null) {
        username = undefined;
        if (stateFromStores != null) {
          username = stateFromStores.username;
        }
        str = username;
      }
      if (str == null) {
        str = "";
      }
      obj3 = { name: null };
      obj3.name = str;
      obj2.accessibilityLabel = intl.formatToPlainString(linkCode(tmp3[19]).kFj4h1, obj3);
      items4 = [, , ];
      items4[0] = tmp12(tmp2(tmp3[16]).Avatar, obj2);
      obj4 = { style: null, children: null };
      obj4.style = tmp.ellipseGroup;
      obj5 = { style: null };
      obj5.style = tmp.ellipse;
      items5 = [, , ];
      items5[0] = tmp12(tmp11, obj5);
      obj6 = { style: null };
      obj6.style = tmp.ellipse;
      items5[1] = tmp12(tmp11, obj6);
      obj7 = { style: null };
      obj7.style = tmp.ellipse;
      items5[2] = tmp12(tmp11, obj7);
      obj4.children = items5;
      items4[1] = tmp10(tmp11, obj4);
      obj8 = { source: null, size: null, accessibilityLabel: null };
      tmp15Result = tmp15(tmp3[17]);
      obj9 = { id: null, avatar: null, discriminator: "0" };
      ({ id: obj15.id, avatar: obj15.avatar } = teenIdentity);
      obj8.source = tmp15Result.getUserAvatarSource(obj9);
      obj8.size = tmp2(tmp3[16]).AvatarSizes.LARGE;
      intl2 = tmp2(tmp3[18]).intl;
      username = teenIdentity.global_name;
      if (username == null) {
        username = teenIdentity.username;
      }
      obj10 = { name: null };
      obj10.name = username;
      obj8.accessibilityLabel = intl2.formatToPlainString(tmp15(tmp3[19]).kFj4h1, obj10);
      items4[2] = tmp12(tmp2(tmp3[16]).Avatar, obj8);
      obj1.children = items4;
      items6 = [, , , ];
      items6[0] = tmp10(tmp11, obj1);
      obj11 = { variant: "heading-xl/bold", color: "mobile-text-heading-primary", style: null, children: null };
      obj11.style = tmp.title;
      intl3 = tmp2(tmp3[18]).intl;
      obj11.children = intl3.string(tmp15(tmp3[19]).sMmIbm);
      items6[1] = tmp12(tmp2(tmp3[20]).Text, obj11);
      obj12 = { variant: "heading-xl/bold", color: "mobile-text-heading-primary", style: null, children: null };
      obj12.style = tmp.teenName;
      username2 = teenIdentity.global_name;
      if (username2 == null) {
        username2 = teenIdentity.username;
      }
      obj12.children = username2;
      items6[2] = tmp12(tmp2(tmp3[20]).Text, obj12);
      obj13 = { variant: "text-sm/medium", color: "text-muted", style: null, children: null };
      obj13.style = tmp.consent;
      intl4 = tmp2(tmp3[18]).intl;
      username3 = teenIdentity.global_name;
      if (username3 == null) {
        username3 = teenIdentity.username;
      }
      obj14 = { username: null };
      obj14.username = username3;
      obj13.children = intl4.format(tmp15(tmp3[19]).yiUJNU, obj14);
      items6[3] = tmp12(tmp2(tmp3[20]).Text, obj13);
      obj.children = items6;
      tmp10Result = tmp10(tmp11, obj);
      tmp18 = tmp15;
      tmp19 = tmp12;
    } else {
      tmp20 = Fragment;
      obj15 = { children: null };
      tmp21 = jsx;
      tmp22 = Image;
      obj16 = { style: null, source: null };
      obj16.style = tmp.art;
      tmp23 = linkCode;
      obj16.source = linkCode(tmp3[21]);
      items7 = [, ];
      items7[0] = jsx(Image, obj16);
      obj17 = { style: null, variant: "text-lg/bold", children: null };
      obj17.style = tmp.headerText;
      intl7 = tmp2(tmp3[18]).intl;
      obj17.children = intl7.string(linkCode(tmp3[19]).GH11eI);
      items7[1] = jsx(tmp2(tmp3[20]).Text, obj17);
      obj15.children = items7;
      tmp10Result = tmp10(Fragment, obj15);
      tmp18 = linkCode;
      tmp19 = jsx;
    }
    obj18 = { children: null };
    obj19 = { children: null };
    items8 = [, ];
    items8[0] = tmp10Result;
    items8[1] = tmp19(tmp18(tmp3[22]), {});
    obj19.children = items8;
    items9 = [, ];
    items9[0] = tmp10(userId(closure_2[15]).ModalContent, obj19);
    obj20 = { children: null };
    obj21 = { children: null };
    obj22 = { variant: "primary", size: "lg", disabled: isRequestingLink, loading: isRequestingLink, text: null, onPress: null };
    intl5 = tmp2(tmp3[18]).intl;
    obj22.text = intl5.string(tmp18(tmp3[19]).ISg34l);
    obj22.onPress = callback2;
    items10 = [, ];
    items10[0] = tmp19(tmp2(tmp3[25]).Button, obj22);
    obj23 = { variant: "secondary", size: "lg", text: null, onPress: null };
    intl6 = tmp2(tmp3[18]).intl;
    obj23.text = intl6.string(tmp2(tmp3[18]).t["ETE/oC"]);
    obj23.onPress = tmp18(tmp3[26]).pop;
    items10[1] = tmp19(tmp2(tmp3[25]).Button, obj23);
    obj21.children = items10;
    obj20.children = tmp10(tmp2(tmp3[24]).ButtonGroup, obj21);
    items9[1] = tmp19(tmp2(tmp3[23]).ModalFooter, obj20);
    obj18.children = items9;
    return tmp10(userId(closure_2[14]).ModalScreen, obj18);
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
      let arr = ModalActionCreatorsDefault;
      arr = arr.pop();
    }, []);
    if (null === stateFromStores) {
      tmp6 = closure_1;
      arr2 = closure_1(tmp3[26]);
      arr = arr2.pop();
    }
    tmp8 = jsxs;
    tmp9 = jsx;
    tmp10 = View;
    obj = { style: tmp.content, children: null };
    obj1 = { style: tmp.textWrapper, children: null };
    obj2 = { style: tmp.illustration, children: jsx(tmp2(tmp3[27]).EnvelopeSpotIllustration, { scale: 0.7 }) };
    items1 = [, , ];
    items1[0] = jsx(View, obj2);
    obj3 = { variant: "heading-lg/bold", color: "mobile-text-heading-primary", style: tmp.header, children: null };
    intl = tmp2(tmp3[18]).intl;
    obj3.children = intl.string(closure_1(tmp3[19]).EpwfZl);
    items1[1] = jsx(tmp2(tmp3[20]).Text, obj3);
    obj4 = { variant: "text-sm/medium", color: "text-muted", style: tmp.description, children: null };
    intl2 = tmp2(tmp3[18]).intl;
    email = undefined;
    if (stateFromStores != null) {
      email = stateFromStores.email;
    }
    obj5 = { children: null };
    obj6 = { children: null };
    obj4.children = intl2.format(closure_1(tmp3[19]).dVtWId, { email });
    items1[2] = tmp9(tmp2(tmp3[20]).Text, obj4);
    obj1.children = items1;
    obj.children = tmp8(tmp10, obj1);
    obj6.children = tmp9(tmp10, obj);
    items2 = [, ];
    items2[0] = tmp9(tmp2(tmp3[15]).ModalContent, obj6);
    obj7 = { children: null };
    obj8 = { size: "lg", text: null, onPress: null };
    intl3 = tmp2(tmp3[18]).intl;
    obj8.text = intl3.string(tmp2(tmp3[18]).t.cpT0Cq);
    obj8.onPress = callback;
    obj7.children = tmp9(tmp2(tmp3[25]).Button, obj8);
    items2[1] = tmp9(tmp2(tmp3[23]).ModalFooter, obj7);
    obj5.children = items2;
    return tmp8(tmp2(tmp3[14]).ModalScreen, obj5);
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
      let arr = ModalActionCreatorsDefault;
      arr = arr.pop();
    }, []);
    tmp9 = closure_1(closure_2[29])(null != stateFromStores, "User must be logged in to see this modal.");
    obj3 = closure_9[global.failureCode];
    tmp10 = tmp6;
    obj = { isAdult: tmp10, email: null };
    email = stateFromStores.email;
    obj.email = email;
    headerResult = obj3.header(obj);
    icon = obj3.icon;
    tmp14 = jsxs;
    descriptionResult = obj3.description(obj);
    tmp13 = FamilyCenterIconType;
    tmp15 = jsx;
    tmp16 = View;
    obj1 = { style: null, children: null };
    items1 = [, ];
    items1[0] = tmp.ring;
    items1[1] = boxShadowStyle;
    obj1.style = items1;
    items2 = [, ];
    items2[0] = tmp.iconContainer;
    obj2 = { style: items2, children: null };
    items2[1] = icon === FamilyCenterIconType.CHECK ? tmp.positive : tmp.negative;
    if (icon === tmp13.CHECK) {
      obj3 = { source: null, color: "#FFF" };
      obj3.source = tmp5(tmp3[30]);
      tmp15Result = tmp15(tmp2(tmp3[16]).Icon, obj3);
    } else {
      obj4 = { source: null, color: "#FFF" };
      obj4.source = tmp5(tmp3[31]);
      tmp15Result = tmp15(tmp2(tmp3[16]).Icon, obj4);
    }
    obj5 = { children: null };
    obj6 = { children: null };
    obj2.children = tmp15Result;
    obj1.children = tmp15(tmp16, obj2);
    items3 = [, , ];
    items3[0] = tmp15(tmp16, obj1);
    obj7 = { variant: "heading-lg/bold", color: "mobile-text-heading-primary", style: tmp.header, children: headerResult };
    items3[1] = tmp15(tmp2(tmp3[20]).Text, obj7);
    obj8 = { variant: "text-sm/medium", color: "text-muted", style: tmp.description, children: descriptionResult };
    items3[2] = tmp15(tmp2(tmp3[20]).Text, obj8);
    obj6.children = items3;
    items4 = [, ];
    items4[0] = tmp14(tmp2(tmp3[15]).ModalContent, obj6);
    obj9 = { children: null };
    obj10 = { text: null, onPress: null };
    intl = tmp2(tmp3[18]).intl;
    obj10.text = intl.string(tmp2(tmp3[18]).t.cpT0Cq);
    obj10.onPress = callback;
    obj9.children = tmp15(tmp2(tmp3[25]).Button, obj10);
    items4[1] = tmp15(tmp2(tmp3[23]).ModalFooter, obj9);
    obj5.children = items4;
    return tmp14(tmp2(tmp3[14]).ModalScreen, obj5);
  }
}
function FamilyCenterPrereqLoading(arg0) {
  ({ userId: require, linkCode: importDefault } = arg0);
  let obj = useNavigation;
  dependencyMap = obj.useNavigation();
  const effect = noop.useEffect(() => {
    closure_1 = async function _runPrereq(arg0, value) {
      if (c3 === 2) {
        c3 = 3;
        throw new TypeError("Generator functions may not be called on executing generators");
      } else if (tmp4 === 3) {
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
          if (0 === c2) {
            if (arg0 === 1) {
              c3 = 3;
              throw value;
            } else if (arg0 === 2) {
              c3 = 3;
              obj = { value, done: true };
              return obj;
            } else {
              closure_1 = tmp5;
              closure_0 = tmp2;
              closure_128_0 = undefined;
              let obj1 = FamilyCenterModalRequestRouting;
              c2 = 1;
              c3 = 1;
              obj1 = { value: null, done: false };
              obj1.value = obj1.resolveConnectionPrereqTarget(closure_0, closure_1);
              return obj1;
            }
          } else if (arg0 === 1) {
            c3 = 3;
            throw value;
          } else if (arg0 === 2) {
            c3 = 3;
            obj = { value, done: true };
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
  obj = { children: null };
  obj = { style: closure_21().container, children: closure_12(ActivityIndicator_ActivityIndicator.ActivityIndicator, {}) };
  obj.children = closure_12(closure_6, obj);
  return closure_12(ModalScreen.ModalScreen, obj);
}
function FamilyCenterPrereqScreen(primaryButton) {
  primaryButton = primaryButton.primaryButton;
  ({ title, description } = primaryButton);
  const tmp = closure_23();
  let obj = { children: null };
  obj = { style: tmp.content, children: null };
  obj = { variant: "heading-xl/bold", color: "mobile-text-heading-primary", style: tmp.title, children: title };
  const items = [closure_1_12(Text_Text.Text, obj), closure_1_12(Text_Text.Text, { variant: "text-sm/medium", color: "text-muted", style: tmp.description, children: description })];
  obj.children = items;
  const items1 = [map1(timestampProducer, obj), ];
  const obj2 = { children: closure_1_12(components_Button_Button.Button, { text: primaryButton.text, onPress: primaryButton.onPress }) };
  items1[1] = closure_1_12(ModalFooter.ModalFooter, obj2);
  obj.children = items1;
  return map1(ModalScreen.ModalScreen, obj);
}
function FamilyCenterConfirmAgeScreen(teenIdentity) {
  teenIdentity = teenIdentity.teenIdentity;
  const tmp = closure_25();
  let navigation;
  let obj = navigation(1483);
  navigation = obj.useNavigation();
  let obj1 = navigation(563);
  const items = [UserStore];
  const stateFromStores = obj1.useStateFromStores(items, () => {
    currentUser = currentUser.getCurrentUser();
    let prop;
    if (currentUser != null) {
      prop = currentUser.ageVerificationStatus;
    }
    return prop;
  });
  const tmp7 = stateFromStores(8272)(stateFromStores);
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
    stateFromStores(8411);
    const obj = { entryPoint: navigation(8413).AgeVerificationModalEntryPoint.FAMILY_CENTER_CONNECTION };
    const result = obj.showAgeVerificationGetStartedModal(obj);
  }, []);
  obj = { style: tmp.content, children: null };
  obj = { style: tmp.art, children: closure_12(navigation(5692).FamilyShieldSpotIllustration, {}) };
  const items2 = [closure_12(closure_6, obj), , ];
  obj1 = { variant: "heading-xl/bold", color: "mobile-text-heading-primary", style: tmp.title, children: null };
  const intl = navigation(1114).intl;
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
  const obj2 = { children: null };
  obj1.children = intl.formatToPlainString(stateFromStores(2396).pQQMJ7, { username: str });
  items2[1] = closure_12(navigation(4556).Text, obj1);
  const obj3 = { variant: "text-sm/medium", color: "text-muted", style: tmp.description, children: null };
  const intl2 = tmp2(1114).intl;
  obj3.children = intl2.format(stateFromStores(2396)["0o3yg8"], { link: "https://support.discord.com/hc/articles/14155060633623" });
  items2[2] = closure_12(navigation(4556).Text, obj3);
  obj.children = items2;
  const items3 = [closure_13(closure_6, obj), ];
  const obj4 = { children: null };
  const obj5 = { children: null };
  const obj6 = { variant: "primary", text: null, onPress: null };
  const intl3 = tmp2(1114).intl;
  obj6.text = intl3.string(stateFromStores(2396)["3oUE4o"]);
  obj6.onPress = callback;
  const items4 = [closure_12(navigation(4975).Button, obj6), ];
  const obj7 = { variant: "tertiary", text: null, onPress: null };
  const intl4 = tmp2(1114).intl;
  obj7.text = intl4.string(navigation(1114).t.oEAioF);
  obj7.onPress = function onPress() {
    return stateFromStores(4763).pop();
  };
  items4[1] = closure_12(navigation(4975).Button, obj7);
  obj5.children = items4;
  obj4.children = closure_13(navigation(5433).ButtonGroup, obj5);
  items3[1] = closure_12(navigation(11926).ModalFooter, obj4);
  obj2.children = items3;
  return closure_13(navigation(8421).ModalScreen, obj2);
}
function FamilyCenterVerifyingScreen() {
  let obj = navigation(stateFromStores[8]);
  navigation = obj.useNavigation();
  const tmp = closure_21();
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
  obj = { children: null };
  obj = { style: tmp.container, children: closure_12(navigation(stateFromStores[32]).ActivityIndicator, {}) };
  obj.children = closure_12(closure_6, obj);
  return closure_12(navigation(stateFromStores[14]).ModalScreen, obj);
}
function FamilyCenterPrereqInvalidCodeScreen() {
  let obj = { title: null, description: null, primaryButton: null };
  const intl = util.intl;
  obj.title = intl.string(_modDef2396.ewSb6o);
  const intl2 = util.intl;
  obj.description = intl2.string(_modDef2396.jcUN2F);
  obj = { text: null, onPress: null };
  const intl3 = util.intl;
  obj.text = intl3.string(util.t.WAI6xu);
  obj.onPress = ModalActionCreatorsDefault.pop;
  obj.primaryButton = obj;
  return closure_1_12(FamilyCenterPrereqScreen, obj);
}
function FamilyCenterPrereqMustBeAdultScreen() {
  let obj = navigation(1483);
  navigation = obj.useNavigation();
  let obj1 = navigation(563);
  const items = [UserStore];
  const stateFromStores = obj1.useStateFromStores(items, () => {
    currentUser = currentUser.getCurrentUser();
    let prop;
    if (currentUser != null) {
      prop = currentUser.ageVerificationStatus;
    }
    return prop;
  });
  const tmp3 = stateFromStores(8272)(stateFromStores);
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
  obj = { title: null, description: null, primaryButton: null };
  const callback = noop.useCallback(() => {
    stateFromStores(8411);
    const obj = { entryPoint: navigation(8413).AgeVerificationModalEntryPoint.FAMILY_CENTER_CONNECTION };
    const result = obj.showAgeVerificationGetStartedModal(obj);
  }, []);
  const intl = navigation(1114).intl;
  obj.title = intl.string(stateFromStores(2396).BQFHXW);
  const intl2 = navigation(1114).intl;
  obj = { link: { onClick: callback } };
  obj.description = intl2.format(stateFromStores(2396).WDjaKn, obj);
  obj1 = { text: null, onPress: null };
  const intl3 = navigation(1114).intl;
  obj1.text = intl3.string(navigation(1114).t["NX+WJN"]);
  obj1.onPress = stateFromStores(4763).pop;
  obj.primaryButton = obj1;
  return closure_12(FamilyCenterPrereqScreen, obj);
}
get_ActivityIndicator = fn(17);
({ Image: hasOwnProperty, View: metroRequire } = get_ActivityIndicator);
const FamilyCenterConstants = fn(7538);
({ FAMILY_CENTER_AGE_VERIFICATION_RESUME_TIMEOUT: closure_8, FAMILY_CENTER_LINK_REQUEST_ERROR_EXPERIENCES: closure_9, FamilyCenterFailureCode: c10, FamilyCenterIconType: closure_11 } = FamilyCenterConstants);
const jsxProd = fn(21);
({ jsx: closure_12, jsxs: map1, Fragment: closure_14 } = jsxProd);
fn(4560);
let createStyles = { headerText: null, art: null, connectionHeader: null, headerIcons: null, ellipseGroup: null, ellipse: null, title: null, teenName: null, consent: null };
createStyles = { marginTop: nativeDefault.space.PX_16, marginBottom: nativeDefault.space.PX_16 };
createStyles.headerText = createStyles;
createStyles.art = { width: 165, height: 119 };
createStyles.connectionHeader = { alignItems: "center", marginBottom: nativeDefault.space.PX_16 };
let obj1 = { alignItems: "center", marginBottom: nativeDefault.space.PX_16 };
createStyles.headerIcons = { flexDirection: "row", alignItems: "center", justifyContent: "center", alignSelf: "center", padding: nativeDefault.space.PX_8, backgroundColor: nativeDefault.colors.BACKGROUND_SURFACE_HIGH, borderRadius: nativeDefault.radii.round, marginBottom: nativeDefault.space.PX_24 };
let obj2 = { flexDirection: "row", alignItems: "center", justifyContent: "center", alignSelf: "center", padding: nativeDefault.space.PX_8, backgroundColor: nativeDefault.colors.BACKGROUND_SURFACE_HIGH, borderRadius: nativeDefault.radii.round, marginBottom: nativeDefault.space.PX_24 };
createStyles.ellipseGroup = { flexDirection: "row", marginHorizontal: nativeDefault.space.PX_12 };
let size = { width: 4, height: 4, marginHorizontal: 2, backgroundColor: nativeDefault.colors.ICON_MUTED, borderRadius: nativeDefault.radii.round };
createStyles.ellipse = size;
createStyles.title = { textAlign: "center" };
let obj3 = { flexDirection: "row", marginHorizontal: nativeDefault.space.PX_12 };
createStyles.teenName = { marginTop: nativeDefault.space.PX_4, textAlign: "center" };
let obj4 = { marginTop: nativeDefault.space.PX_4, textAlign: "center" };
createStyles.consent = { marginTop: nativeDefault.space.PX_8, textAlign: "center", paddingHorizontal: nativeDefault.space.PX_16 };
const __initData = createStyles.createStyles(createStyles);
createStyles = fn(4560);
let obj6 = { content: null, textWrapper: null, header: null, description: null, illustration: null };
let obj5 = { marginTop: nativeDefault.space.PX_8, textAlign: "center", paddingHorizontal: nativeDefault.space.PX_16 };
obj6.content = { flex: 1, flexDirection: "column", alignItems: "center", justifyContent: "center", paddingHorizontal: nativeDefault.space.PX_16 };
obj6.textWrapper = { alignItems: "center" };
let obj7 = { flex: 1, flexDirection: "column", alignItems: "center", justifyContent: "center", paddingHorizontal: nativeDefault.space.PX_16 };
obj6.header = { marginBottom: nativeDefault.space.PX_8 };
obj6.description = { textAlign: "center" };
const rect = { position: "absolute", bottom: "100%", left: 0, right: 0, alignItems: "center", paddingBottom: nativeDefault.space.PX_24 };
obj6.illustration = rect;
let closure_17 = createStyles.createStyles(obj6);
fn(4560);
createStyles = { header: { marginBottom: 8, textAlign: "center" }, description: { textAlign: "center" }, ring: null, iconContainer: null, positive: null, negative: null };
const size1 = { display: "flex", justifyContent: "center", alignItems: "center", height: 64, width: 64, borderRadius: nativeDefault.radii.round, backgroundColor: nativeDefault.colors.BACKGROUND_SURFACE_HIGH, marginBottom: 24 };
createStyles.ring = size1;
const size2 = { display: "flex", justifyContent: "center", alignItems: "center", height: 48, width: 48, borderRadius: nativeDefault.radii.round, backgroundColor: nativeDefault.colors.STATUS_POSITIVE };
createStyles.iconContainer = size2;
let obj8 = { marginBottom: nativeDefault.space.PX_8 };
createStyles.positive = { backgroundColor: nativeDefault.colors.STATUS_POSITIVE };
let obj10 = { backgroundColor: nativeDefault.colors.STATUS_POSITIVE };
createStyles.negative = { backgroundColor: nativeDefault.colors.BACKGROUND_FEEDBACK_CRITICAL };
let closure_19 = createStyles.createStyles(createStyles);
createStyles = fn(4560);
let closure_21 = createStyles.createStyles({ container: { flex: 1, justifyContent: "center", alignItems: "center" } });
createStyles = fn(4560);
let obj12 = { content: { flex: 1, flexDirection: "column", alignItems: "center", justifyContent: "center", paddingHorizontal: 32 }, title: null, description: null };
let obj11 = { backgroundColor: nativeDefault.colors.BACKGROUND_FEEDBACK_CRITICAL };
obj12.title = { textAlign: "center", marginBottom: nativeDefault.space.PX_8 };
obj12.description = { textAlign: "center" };
let closure_23 = createStyles.createStyles(obj12);
fn(4560);
createStyles = { content: { flex: 1, flexDirection: "column", alignItems: "center", justifyContent: "center", paddingHorizontal: 32 }, art: null, title: null, description: null };
let obj13 = { textAlign: "center", marginBottom: nativeDefault.space.PX_8 };
createStyles.art = { marginBottom: nativeDefault.space.PX_24 };
let obj15 = { marginBottom: nativeDefault.space.PX_24 };
createStyles.title = { textAlign: "center", marginBottom: nativeDefault.space.PX_8 };
createStyles.description = { textAlign: "center" };
let closure_25 = createStyles.createStyles(createStyles);
let obj17 = { headerShown: true, headerLeft: null, headerTitle: null };
const NavigatorHeader = fn(5624);
obj17.headerLeft = NavigatorHeader.getHeaderCloseButton(ModalActionCreatorsDefault.pop);
obj17.headerTitle = function headerTitle() {
  return null;
};
size = fn(2);
let result = size.fileFinishedImporting("modules/parent_tools/native/FamilyCenterModalRequest.tsx");

export default function FamilyCenterRequestModal(userId) {
  userId = userId.userId;
  const linkCode = userId.linkCode;
  const FamilyCenterConnectionPrereqExperiment = userId(11927).FamilyCenterConnectionPrereqExperiment;
  const items = [linkCode, userId];
  const memo = noop.useMemo(() => {
    let obj = {};
    obj = {};
    const merged = Object.assign(obj17);
    obj.render = function render() {
      return closure_2_12(FamilyCenterPrereqLoading, { userId, linkCode });
    };
    obj[FamilyCenterModalRequestRouting.FamilyCenterModalRequestSections.PREREQ_LOADING] = obj;
    obj = {};
    const merged1 = Object.assign(obj17);
    obj.render = function render(teenIdentity) {
      teenIdentity = undefined;
      if (teenIdentity != null) {
        teenIdentity = teenIdentity.teenIdentity;
      }
      return closure_1_12(closure_1_26, { teenIdentity });
    };
    obj[FamilyCenterModalRequestRouting.FamilyCenterModalRequestSections.CONFIRM_AGE] = obj;
    const obj1 = {};
    const merged2 = Object.assign(obj17);
    obj1.render = function render() {
      return closure_1_12(closure_1_27, {});
    };
    obj[FamilyCenterModalRequestRouting.FamilyCenterModalRequestSections.VERIFYING] = obj1;
    const obj2 = { headerLeft: null, headerShown: true, headerTitle: null, render: null };
    let obj5 = NavigatorHeader2;
    obj2.headerLeft = obj5.getHeaderCloseButton(ModalActionCreatorsDefault.pop);
    obj2.headerTitle = function headerTitle() {
      return null;
    };
    obj2.render = function render(teenIdentity) {
      const obj = { userId, linkCode, teenIdentity: null };
      teenIdentity = undefined;
      if (teenIdentity != null) {
        teenIdentity = teenIdentity.teenIdentity;
      }
      obj.teenIdentity = teenIdentity;
      return closure_2_12(FamilyCenterModalRequestConfirm, obj);
    };
    obj[FamilyCenterModalRequestRouting.FamilyCenterModalRequestSections.REQUEST] = obj2;
    const obj3 = {};
    const merged3 = Object.assign(obj17);
    obj3.render = function render() {
      return closure_1_12(closure_1_28, {});
    };
    obj[FamilyCenterModalRequestRouting.FamilyCenterModalRequestSections.INVALID_CODE] = obj3;
    const obj4 = {};
    const merged4 = Object.assign(obj17);
    obj4.render = function render() {
      return closure_1_12(closure_1_29, {});
    };
    obj[FamilyCenterModalRequestRouting.FamilyCenterModalRequestSections.MUST_BE_ADULT] = obj4;
    obj5 = {
      headerShown: true,
      headerLeft: NavigatorHeader2.getHeaderCloseButton(ModalActionCreatorsDefault.pop),
      headerTitle() {
        return null;
      },
      render() {
        return closure_1_12(closure_1_18, {});
      }
    };
    obj[FamilyCenterModalRequestRouting.FamilyCenterModalRequestSections.SENT] = obj5;
    const obj6 = { headerShown: true, headerLeft: null, headerTitle: null, render: null };
    obj6.headerLeft = NavigatorHeader2.getHeaderCloseButton(ModalActionCreatorsDefault.pop);
    obj6.headerTitle = function headerTitle() {
      return null;
    };
    obj6.render = function render(failureCode) {
      return closure_1_12(closure_1_20, { failureCode: failureCode.failureCode });
    };
    obj[FamilyCenterModalRequestRouting.FamilyCenterModalRequestSections.ERROR] = obj6;
    const obj7 = { fullscreen: true, headerLeft: null, render: null };
    obj7.headerLeft = NavigatorHeader2.getHeaderCloseButton(ModalActionCreatorsDefault.pop);
    obj7.render = function render() {
      return closure_1_12(closure_1_20, { failureCode: constants.INELIGIBLE_FOR_FAMILY_CENTER });
    };
    obj[FamilyCenterModalRequestRouting.FamilyCenterModalRequestSections.TEEN_SCAN] = obj7;
    return obj;
  }, items);
  const FamilyCenterModalRequestSections = userId(11915).FamilyCenterModalRequestSections;
  if (FamilyCenterConnectionPrereqExperiment.useConfig({ location: "FamilyCenterRequestModal" }).enabled) {
    let PREREQ_LOADING = FamilyCenterModalRequestSections.PREREQ_LOADING;
  } else {
    PREREQ_LOADING = tmp2 ? FamilyCenterModalRequestSections.REQUEST : FamilyCenterModalRequestSections.TEEN_SCAN;
  }
  let obj = { initialRouteName: PREREQ_LOADING, screens: memo, headerBackTitle: null };
  const intl = tmp3(1114).intl;
  obj.headerBackTitle = intl.string(userId(1114).t["13/7kX"]);
  return closure_12(userId(11928).Modal, obj);
};
export { FamilyCenterModalRequestConfirm };
export { FamilyCenterModalRequestSuccess };
export { FamilyCenterModalRequestError };