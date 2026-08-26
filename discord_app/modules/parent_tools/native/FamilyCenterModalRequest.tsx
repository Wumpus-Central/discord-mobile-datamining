// discord_app/modules/parent_tools/native/FamilyCenterModalRequest.tsx
import _modDef38 from "../../../../_runtime/metro/00038__.js";
import defaultAreStatesEqual from "../../../../discord_common/js/packages/flux/useStateFromStores.tsx";
import ThemesDefault from "../../../../discord_common/js/packages/tokens/native.tsx";
import getSystemLocale from "../../../intl/index.native.tsx";
import Button from "../../../design/void/native.tsx";
import useNavigation from "../../../design/components/Navigator/native/useNavigation.native.tsx";
import messagesProxyDefault from "../FamilyCenter.messages.js";
import Text from "../../../design/components/Text/native/Text.tsx";
import _modDef4675 from "../../../actions/ModalActionCreators.tsx";
import Button2 from "../../../design/components/Button/native/Button.native.tsx";
import ActivityIndicator from "../../../design/components/ActivityIndicator/native/ActivityIndicator.native.tsx";
import AccountAgeTier10LargeBadge from "../../../design/assets/native.tsx";
import useIsInAdultAgeGroupDefault from "../hooks/useIsInAdultAgeGroup.tsx";
import ModalScreen from "../../../design/components/Modal/native/ModalScreen.native.tsx";
import ModalContent from "../../../design/components/Modal/native/ModalContent.native.tsx";
import ModalFooter from "../../../design/components/Modal/native/ModalFooter.native.tsx";
import closure_3 from "../../../../_runtime/00005_asyncGeneratorStep.js";
import closure_4 from "../../../../_runtime/00019_noop.js";
import get_ActivityIndicator from "../../../../_runtime/00017_get_ActivityIndicator.js";
import closure_7 from "../../../stores/UserStore.tsx";
import items from "../FamilyCenterConstants.tsx";
import jsxProd from "../../../../_runtime/react/00021_jsxProd.js";
import createCacheKey from "../../../design/components/Styles/native/createStyles.tsx";
import HeaderBackImage from "../../../design/components/Navigator/native/NavigatorHeader.native.tsx";

require = arg1;
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
    obj = require("useNavigation");
    navigation = obj.useNavigation();
    closure_2 = navigation;
    obj2 = require("defaultAreStatesEqual");
    items = [];
    items[0] = closure_7;
    stateFromStores = obj2.useStateFromStores(items, () => currentUser.getCurrentUser());
    items1 = [];
    items1[0] = navigation;
    items2 = [];
    items2[0] = navigation;
    callback = closure_4.useCallback(() => {
      const result = linkCode(navigation[10]).clearPendingConnection();
      navigation.push(userId(navigation[11]).FamilyCenterModalRequestSections.SENT);
    }, items1);
    callback1 = closure_4.useCallback((arg0) => {
      const failureCodeForAPIError = userId(navigation[12]).getFailureCodeForAPIError(arg0);
      navigation.push(userId(navigation[11]).FamilyCenterModalRequestSections.ERROR, { failureCode: failureCodeForAPIError });
    }, items2);
    obj3 = require("useFamilyCenterActions");
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
      obj[0] = tmp.connectionHeader;
      obj1 = { style: null, children: null };
      obj1[0] = tmp.headerIcons;
      tmp12 = jsx;
      userAvatarSource = undefined;
      if (null != stateFromStores) {
        tmp14 = linkCode;
        obj6 = require("getAvatarURL");
        userAvatarSource = obj6.getUserAvatarSource(stateFromStores);
      }
      obj2 = { source: null, size: null, accessibilityLabel: null };
      obj2[0] = userAvatarSource;
      obj2[1] = require("Button").AvatarSizes.LARGE;
      intl = require("getSystemLocale").intl;
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
      obj3[0] = str;
      obj2[2] = intl.formatToPlainString(require("messagesProxy").kFj4h1, obj3);
      items4 = [, , ];
      items4[0] = tmp12(require("Button").Avatar, obj2);
      obj4 = { style: null, children: null };
      obj4[0] = tmp.ellipseGroup;
      obj5 = { style: null };
      obj5[0] = tmp.ellipse;
      items5 = [, , ];
      items5[0] = tmp12(tmp11, obj5);
      obj6 = { style: null };
      obj6[0] = tmp.ellipse;
      items5[1] = tmp12(tmp11, obj6);
      obj7 = { style: null };
      obj7[0] = tmp.ellipse;
      items5[2] = tmp12(tmp11, obj7);
      obj4[1] = items5;
      items4[1] = tmp10(tmp11, obj4);
      obj8 = { source: null, size: null, accessibilityLabel: null };
      tmp15Result = require("getAvatarURL");
      obj9 = { id: null, avatar: null, discriminator: "0" };
      ({ id: obj15[0], avatar: obj15[1] } = teenIdentity);
      obj8[0] = tmp15Result.getUserAvatarSource(obj9);
      obj8[1] = require("Button").AvatarSizes.LARGE;
      intl2 = require("getSystemLocale").intl;
      username = teenIdentity.global_name;
      if (username == null) {
        username = teenIdentity.username;
      }
      obj10 = { name: null };
      obj10[0] = username;
      obj8[2] = intl2.formatToPlainString(require("messagesProxy").kFj4h1, obj10);
      items4[2] = tmp12(require("Button").Avatar, obj8);
      obj1[1] = items4;
      items6 = [, , , ];
      items6[0] = tmp10(tmp11, obj1);
      obj11 = { variant: "heading-xl/bold", color: "mobile-text-heading-primary", style: null, children: null };
      obj11[2] = tmp.title;
      intl3 = require("getSystemLocale").intl;
      obj11[3] = intl3.string(require("messagesProxy").sMmIbm);
      items6[1] = tmp12(require("Text").Text, obj11);
      obj12 = { variant: "heading-xl/bold", color: "mobile-text-heading-primary", style: null, children: null };
      obj12[2] = tmp.teenName;
      username2 = teenIdentity.global_name;
      if (username2 == null) {
        username2 = teenIdentity.username;
      }
      obj12[3] = username2;
      items6[2] = tmp12(require("Text").Text, obj12);
      obj13 = { variant: "text-sm/medium", color: "text-muted", style: null, children: null };
      obj13[2] = tmp.consent;
      intl4 = require("getSystemLocale").intl;
      username3 = teenIdentity.global_name;
      if (username3 == null) {
        username3 = teenIdentity.username;
      }
      obj14 = { username: null };
      obj14[0] = username3;
      obj13[3] = intl4.format(require("messagesProxy").yiUJNU, obj14);
      items6[3] = tmp12(require("Text").Text, obj13);
      obj[1] = items6;
      tmp10Result = tmp10(tmp11, obj);
      tmp18 = tmp15;
      tmp19 = tmp12;
    } else {
      tmp20 = Fragment;
      obj15 = { children: null };
      tmp21 = jsx;
      tmp22 = Image;
      obj16 = { style: null, source: null };
      obj16[0] = tmp.art;
      tmp23 = linkCode;
      obj16[1] = require("registerAsset");
      items7 = [, ];
      items7[0] = jsx(Image, obj16);
      obj17 = { style: null, variant: "text-lg/bold", children: null };
      obj17[0] = tmp.headerText;
      intl7 = require("getSystemLocale").intl;
      obj17[2] = intl7.string(require("messagesProxy").GH11eI);
      items7[1] = jsx(require("Text").Text, obj17);
      obj15[0] = items7;
      tmp10Result = tmp10(Fragment, obj15);
      tmp18 = linkCode;
      tmp19 = jsx;
    }
    obj18 = { children: null };
    obj19 = { children: null };
    items8 = [, ];
    items8[0] = tmp10Result;
    items8[1] = tmp19(require("RowGroup"), {});
    obj19[0] = items8;
    items9 = [, ];
    items9[0] = tmp10(require("ModalContent").ModalContent, obj19);
    obj20 = { children: null };
    obj21 = { children: null };
    obj22 = { variant: "primary", size: "lg", disabled: isRequestingLink, loading: isRequestingLink, text: null, onPress: null };
    intl5 = require("getSystemLocale").intl;
    obj22[4] = intl5.string(require("messagesProxy").ISg34l);
    obj22[5] = callback2;
    items10 = [, ];
    items10[0] = tmp19(require("Button").Button, obj22);
    obj23 = { variant: "secondary", size: "lg", text: null, onPress: null };
    intl6 = require("getSystemLocale").intl;
    obj23[2] = intl6.string(require("getSystemLocale").t["ETE/oC"]);
    obj23[3] = require("../../../actions/ModalActionCreators.tsx").pop;
    items10[1] = tmp19(require("Button").Button, obj23);
    obj21[0] = items10;
    obj20[0] = tmp10(require("ButtonGroup").ButtonGroup, obj21);
    items9[1] = tmp19(require("ModalFooter").ModalFooter, obj20);
    obj18[0] = items9;
    return tmp10(require("ModalScreen").ModalScreen, obj18);
  }
}
class FamilyCenterModalRequestSuccess {
  constructor() {
    tmp = closure_17();
    tmp2 = closure_0;
    tmp3 = closure_2;
    obj = require("defaultAreStatesEqual");
    items = [];
    items[0] = closure_7;
    stateFromStores = obj.useStateFromStores(items, () => currentUser.getCurrentUser());
    callback = closure_4.useCallback(() => {
      let arr = callback(table[26]);
      arr = arr.pop();
    }, []);
    if (null === stateFromStores) {
      tmp6 = closure_1;
      arr2 = require("../../../actions/ModalActionCreators.tsx");
      arr = arr2.pop();
    }
    tmp8 = jsxs;
    tmp9 = jsx;
    tmp10 = View;
    obj = { style: tmp.content, children: null };
    obj1 = { style: tmp.textWrapper, children: null };
    obj2 = { style: tmp.illustration, children: jsx(require("AccountAgeTier10LargeBadge").EnvelopeSpotIllustration, { scale: 0.7 }) };
    items1 = [, , ];
    items1[0] = jsx(View, obj2);
    obj3 = { variant: "heading-lg/bold", color: "mobile-text-heading-primary", style: tmp.header, children: null };
    intl = require("getSystemLocale").intl;
    obj3[3] = intl.string(require("messagesProxy").EpwfZl);
    items1[1] = jsx(require("Text").Text, obj3);
    obj4 = { variant: "text-sm/medium", color: "text-muted", style: tmp.description, children: null };
    intl2 = require("getSystemLocale").intl;
    email = undefined;
    if (stateFromStores != null) {
      email = stateFromStores.email;
    }
    obj5 = { children: null };
    obj6 = { children: null };
    obj4[3] = intl2.format(require("messagesProxy").dVtWId, { email });
    items1[2] = tmp9(require("Text").Text, obj4);
    obj1[1] = items1;
    obj[1] = tmp8(tmp10, obj1);
    obj6[0] = tmp9(tmp10, obj);
    items2 = [, ];
    items2[0] = tmp9(require("ModalContent").ModalContent, obj6);
    obj7 = { children: null };
    obj8 = { size: "lg", text: null, onPress: null };
    intl3 = require("getSystemLocale").intl;
    obj8[1] = intl3.string(require("getSystemLocale").t.cpT0Cq);
    obj8[2] = callback;
    obj7[0] = tmp9(require("Button").Button, obj8);
    items2[1] = tmp9(require("ModalFooter").ModalFooter, obj7);
    obj5[0] = items2;
    return tmp8(require("ModalScreen").ModalScreen, obj5);
  }
}
class FamilyCenterModalRequestError {
  constructor(arg0) {
    tmp = closure_19();
    tmp2 = closure_0;
    tmp3 = closure_2;
    obj = require("defaultAreStatesEqual");
    items = [];
    items[0] = closure_7;
    stateFromStores = obj.useStateFromStores(items, () => currentUser.getCurrentUser());
    tmp5 = closure_1;
    tmp6 = require("useIsInAdultAgeGroup")();
    obj2 = require("Button");
    boxShadowStyle = obj2.generateBoxShadowStyle(require("Button").FOUR_DP_ELEVATION_SHADOW_PARAMS);
    callback = closure_4.useCallback(() => {
      let arr = callback(table[26]);
      arr = arr.pop();
    }, []);
    tmp9 = require("../../../../_runtime/metro/00038__.js")(null != stateFromStores, "User must be logged in to see this modal.");
    obj3 = closure_9[global.failureCode];
    tmp10 = tmp6;
    obj = { isAdult: tmp10, email: null };
    email = stateFromStores.email;
    obj[1] = email;
    headerResult = obj3.header(obj);
    icon = obj3.icon;
    tmp14 = jsxs;
    descriptionResult = obj3.description(obj);
    tmp13 = FamilyCenterIconType;
    tmp15 = jsx;
    tmp16 = View;
    obj1 = { style: items1, children: null };
    items1 = [, ];
    items1[0] = tmp.ring;
    items1[1] = boxShadowStyle;
    items2 = [, ];
    items2[0] = tmp.iconContainer;
    obj2 = { style: items2, children: null };
    items2[1] = icon === FamilyCenterIconType.CHECK ? tmp.positive : tmp.negative;
    if (icon === tmp13.CHECK) {
      obj3 = { source: null, color: "#FFF" };
      obj3[0] = require("registerAsset");
      tmp15Result = tmp15(require("Button").Icon, obj3);
    } else {
      obj4 = { source: null, color: "#FFF" };
      obj4[0] = require("registerAsset");
      tmp15Result = tmp15(require("Button").Icon, obj4);
    }
    obj5 = { children: null };
    obj6 = { children: null };
    obj2[1] = tmp15Result;
    obj1[1] = tmp15(tmp16, obj2);
    items3 = [, , ];
    items3[0] = tmp15(tmp16, obj1);
    obj7 = { variant: "heading-lg/bold", color: "mobile-text-heading-primary", style: tmp.header, children: headerResult };
    items3[1] = tmp15(require("Text").Text, obj7);
    obj8 = { variant: "text-sm/medium", color: "text-muted", style: tmp.description, children: descriptionResult };
    items3[2] = tmp15(require("Text").Text, obj8);
    obj6[0] = items3;
    items4 = [, ];
    items4[0] = tmp14(require("ModalContent").ModalContent, obj6);
    obj9 = { children: null };
    obj10 = { text: null, onPress: null };
    intl = require("getSystemLocale").intl;
    obj10[0] = intl.string(require("getSystemLocale").t.cpT0Cq);
    obj10[1] = callback;
    obj9[0] = tmp15(require("Button").Button, obj10);
    items4[1] = tmp15(require("ModalFooter").ModalFooter, obj9);
    obj5[0] = items4;
    return tmp14(require("ModalScreen").ModalScreen, obj5);
  }
}
function FamilyCenterPrereqLoading(arg0) {
  ({ userId: require, linkCode: importDefault } = arg0);
  dependencyMap = undefined;
  let obj = useNavigation;
  dependencyMap = obj.useNavigation();
  const effect = React.useEffect(() => {
    function _runPrereq() {
      const self = this;
      const tmp = closure_2_3(function*() {
        if (c3 === 2) {
          c3 = 3;
          HermesBuiltin.throwTypeError();
        } else if (tmp4 === 3) {
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
            if (0 === c2) {
              if (arg0 === 1) {
                c3 = 3;
                throw arg1;
              } else if (arg0 === 2) {
                c3 = 3;
                obj = { value: null, done: true };
                obj[0] = arg1;
                return obj;
              } else {
                closure_1 = tmp5;
                closure_0 = tmp2;
                closure_0 = undefined;
                obj1 = closure_2_0(closure_2_2[11]);
                c2 = 1;
                c3 = 1;
                obj1 = { value: null, done: false };
                obj1[0] = obj1.resolveConnectionPrereqTarget(closure_1_0, closure_1_1);
                return obj1;
              }
            } else if (arg0 === 1) {
              c3 = 3;
              throw arg1;
            } else if (arg0 === 2) {
              c3 = 3;
              obj = { value: null, done: true };
              obj[0] = arg1;
              return obj;
            } else {
              closure_0 = arg1;
              if (closure_0) {
                c3 = 3;
              } else if (closure_0.section !== closure_2_0(closure_2_2[11]).FamilyCenterModalRequestSections.ERROR) {
                if (closure_0.section !== closure_2_0(closure_2_2[11]).FamilyCenterModalRequestSections.REQUEST) {
                  if (closure_0.section !== closure_2_0(closure_2_2[11]).FamilyCenterModalRequestSections.CONFIRM_AGE) {
                    const replaced = c2.replace(closure_2_0.section);
                  }
                }
              }
              const replaced1 = c2.replace(closure_2_0.section, closure_2_0.params);
            }
          } catch (tmp29) {
            c3 = tmp;
            throw tmp29;
          }
        }
      });
      closure_1 = tmp;
      const apply = tmp.apply;
      if (typeof apply === "unknown") {
        let applyArgumentsResult = HermesBuiltin.applyArguments(self);
      } else {
        applyArgumentsResult = apply(self, arguments);
      }
      return applyArgumentsResult;
    }
    c0 = false;
    (function runPrereq() {
      const self = this;
      const apply = _runPrereq.apply;
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
  obj = { style: callback6().container, children: callback(ActivityIndicator.ActivityIndicator, {}) };
  obj[0] = callback(closure_6, obj);
  return callback(ModalScreen.ModalScreen, obj);
}
function FamilyCenterPrereqScreen(primaryButton) {
  primaryButton = primaryButton.primaryButton;
  ({ title, description } = primaryButton);
  const tmp = callback7();
  let obj = { children: null };
  obj = { style: tmp.content, children: null };
  obj = { variant: "heading-xl/bold", color: "mobile-text-heading-primary", style: tmp.title, children: title };
  const items = [callback(Text.Text, obj), callback(Text.Text, { variant: "text-sm/medium", color: "text-muted", style: tmp.description, children: description })];
  obj[1] = items;
  const items1 = [callback2(closure_6, obj), callback(ModalFooter.ModalFooter, { children: callback(Button2.Button, obj3) })];
  obj[0] = items1;
  return callback2(ModalScreen.ModalScreen, obj);
}
function FamilyCenterConfirmAgeScreen(teenIdentity) {
  teenIdentity = teenIdentity.teenIdentity;
  const tmp = callback8();
  let navigation;
  let stateFromStores;
  dependencyMap = undefined;
  let obj = navigation(1500);
  navigation = obj.useNavigation();
  obj1 = navigation(647);
  const items = [closure_7];
  stateFromStores = obj1.useStateFromStores(items, () => {
    currentUser = currentUser.getCurrentUser();
    let prop;
    if (currentUser != null) {
      prop = currentUser.ageVerificationStatus;
    }
    return prop;
  });
  const tmp7 = stateFromStores(9068)(stateFromStores);
  dependencyMap = tmp7;
  const items1 = [stateFromStores, tmp7, navigation];
  const effect = React.useEffect(() => {
    let tmp2 = null != dependencyMap;
    if (tmp2) {
      tmp2 = tmp !== stateFromStores;
    }
    if (tmp2) {
      tmp2 = null != stateFromStores;
    }
    if (tmp2) {
      tmp2 = stateFromStores !== navigation(1955).AgeVerificationStatusUkAndAusOnly.UNVERIFIED;
    }
    if (tmp2) {
      const replaced = navigation.replace(navigation(11556).FamilyCenterModalRequestSections.VERIFYING);
    }
  }, items1);
  const callback = React.useCallback(() => {
    let obj = stateFromStores(8009);
    obj = { entryPoint: navigation(8011).AgeVerificationModalEntryPoint.FAMILY_CENTER_CONNECTION };
    const result = obj.showAgeVerificationGetStartedModal(obj);
  }, []);
  obj = { style: tmp.content, children: null };
  obj = { style: tmp.art, children: callback(navigation(6202).FamilyShieldSpotIllustration, {}) };
  const items2 = [callback(closure_6, obj), , ];
  obj1 = { variant: "heading-xl/bold", color: "mobile-text-heading-primary", style: tmp.title, children: null };
  const intl = navigation(1236).intl;
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
  obj1[3] = intl.formatToPlainString(stateFromStores(2369).pQQMJ7, { username: str });
  items2[1] = callback(navigation(4440).Text, obj1);
  const obj3 = { variant: "text-sm/medium", color: "text-muted", style: tmp.description, children: null };
  const intl2 = tmp2(1236).intl;
  obj3[3] = intl2.format(stateFromStores(2369)["0o3yg8"], { link: "https://support.discord.com/hc/articles/14155060633623" });
  items2[2] = callback(navigation(4440).Text, obj3);
  obj[1] = items2;
  const items3 = [closure_13(closure_6, obj), ];
  const obj4 = { children: null };
  const obj5 = { children: null };
  const obj6 = { variant: "primary", text: null, onPress: null };
  const intl3 = tmp2(1236).intl;
  obj6[1] = intl3.string(stateFromStores(2369)["3oUE4o"]);
  obj6[2] = callback;
  const items4 = [callback(navigation(4879).Button, obj6), ];
  const obj7 = { variant: "tertiary", text: null, onPress: null };
  const intl4 = tmp2(1236).intl;
  obj7[1] = intl4.string(navigation(1236).t.oEAioF);
  obj7[2] = function onPress() {
    return stateFromStores(4675).pop();
  };
  items4[1] = callback(navigation(4879).Button, obj7);
  obj5[0] = items4;
  obj4[0] = closure_13(navigation(5323).ButtonGroup, obj5);
  items3[1] = callback(navigation(11567).ModalFooter, obj4);
  obj2[0] = items3;
  return closure_13(navigation(8019).ModalScreen, obj2);
}
function FamilyCenterVerifyingScreen() {
  let obj = navigation(stateFromStores[8]);
  navigation = obj.useNavigation();
  const tmp = callback6();
  const isAgeVerified = navigation(stateFromStores[37]).useIsAgeVerified();
  const obj2 = navigation(stateFromStores[37]);
  const items = [closure_7];
  stateFromStores = navigation(stateFromStores[9]).useStateFromStores(items, () => {
    currentUser = currentUser.getCurrentUser();
    let prop;
    if (currentUser != null) {
      prop = currentUser.ageVerificationStatus;
    }
    return prop;
  });
  closure_3 = React.useRef(false);
  const items1 = [isAgeVerified, stateFromStores, navigation];
  const effect = React.useEffect(() => {
    if (isAgeVerified) {
      if (!ref.current) {
        tmp9.current = true;
        const replaced = navigation.replace(navigation(stateFromStores[11]).FamilyCenterModalRequestSections.PREREQ_LOADING);
      }
    } else if (stateFromStores === navigation(stateFromStores[34]).AgeVerificationStatusUkAndAusOnly.UNVERIFIED) {
      const obj = { failureCode: null };
      obj[0] = closure_1_10.GENERIC_ERROR;
      const replaced1 = navigation.replace(navigation(stateFromStores[11]).FamilyCenterModalRequestSections.ERROR, obj);
    }
  }, items1);
  const items2 = [navigation];
  const effect1 = React.useEffect(() => {
    const timeout = setTimeout(() => {
      const replaced = lib.replace(lib(closure_1_2[11]).FamilyCenterModalRequestSections.ERROR, { failureCode: closure_1_10.GENERIC_ERROR });
    }, closure_1_8);
    return () => clearTimeout(closure_0);
  }, items2);
  obj = { children: null };
  obj = { style: tmp.container, children: callback(navigation(stateFromStores[32]).ActivityIndicator, {}) };
  obj[0] = callback(closure_6, obj);
  return callback(navigation(stateFromStores[14]).ModalScreen, obj);
}
function FamilyCenterPrereqInvalidCodeScreen() {
  let obj = { title: null, description: null, primaryButton: null };
  const intl = getSystemLocale.intl;
  obj[0] = intl.string(messagesProxyDefault.ewSb6o);
  const intl2 = getSystemLocale.intl;
  obj[1] = intl2.string(messagesProxyDefault.jcUN2F);
  obj = { text: null, onPress: null };
  const intl3 = getSystemLocale.intl;
  obj[0] = intl3.string(getSystemLocale.t.WAI6xu);
  obj[1] = _modDef4675.pop;
  obj[2] = obj;
  return callback(FamilyCenterPrereqScreen, obj);
}
function FamilyCenterPrereqMustBeAdultScreen() {
  let obj = navigation(1500);
  navigation = obj.useNavigation();
  const items = [closure_7];
  const stateFromStores = navigation(647).useStateFromStores(items, () => {
    currentUser = currentUser.getCurrentUser();
    let prop;
    if (currentUser != null) {
      prop = currentUser.ageVerificationStatus;
    }
    return prop;
  });
  const tmp3 = stateFromStores(9068)(stateFromStores);
  dependencyMap = tmp3;
  const items1 = [stateFromStores, tmp3, navigation];
  const effect = React.useEffect(() => {
    let tmp2 = null != dependencyMap;
    if (tmp2) {
      tmp2 = tmp !== stateFromStores;
    }
    if (tmp2) {
      tmp2 = null != stateFromStores;
    }
    if (tmp2) {
      tmp2 = stateFromStores !== navigation(1955).AgeVerificationStatusUkAndAusOnly.UNVERIFIED;
    }
    if (tmp2) {
      const replaced = navigation.replace(navigation(11556).FamilyCenterModalRequestSections.VERIFYING);
    }
  }, items1);
  obj = { title: null, description: null, primaryButton: null };
  const callback = React.useCallback(() => {
    let obj = stateFromStores(8009);
    obj = { entryPoint: navigation(8011).AgeVerificationModalEntryPoint.FAMILY_CENTER_CONNECTION };
    const result = obj.showAgeVerificationGetStartedModal(obj);
  }, []);
  const intl = navigation(1236).intl;
  obj[0] = intl.string(stateFromStores(2369).BQFHXW);
  const intl2 = navigation(1236).intl;
  obj[1] = intl2.format(stateFromStores(2369).WDjaKn, { link: { onClick: callback } });
  obj = { text: null, onPress: null };
  const intl3 = navigation(1236).intl;
  obj[0] = intl3.string(navigation(1236).t["NX+WJN"]);
  obj[1] = stateFromStores(4675).pop;
  obj[2] = obj;
  return callback(FamilyCenterPrereqScreen, obj);
}
({ Image: c5, View: closure_6 } = get_ActivityIndicator);
({ FAMILY_CENTER_AGE_VERIFICATION_RESUME_TIMEOUT: closure_8, FAMILY_CENTER_LINK_REQUEST_ERROR_EXPERIENCES: c9, FamilyCenterFailureCode: c10, FamilyCenterIconType: unpackModuleId } = items);
({ jsx: closure_12, jsxs: map1, Fragment: closure_14 } = jsxProd);
createCacheKey = { headerText: null, art: null, connectionHeader: null, headerIcons: null, ellipseGroup: null, ellipse: null, title: null, teenName: null, consent: null };
createCacheKey = { marginTop: ThemesDefault.space.PX_16, marginBottom: ThemesDefault.space.PX_16 };
createCacheKey[0] = createCacheKey;
createCacheKey[1] = { width: 165, height: 119 };
createCacheKey[2] = { alignItems: "center", marginBottom: ThemesDefault.space.PX_16 };
let obj1 = { alignItems: "center", marginBottom: ThemesDefault.space.PX_16 };
createCacheKey[3] = { flexDirection: "row", alignItems: "center", justifyContent: "center", alignSelf: "center", padding: ThemesDefault.space.PX_8, backgroundColor: ThemesDefault.colors.BACKGROUND_SURFACE_HIGH, borderRadius: ThemesDefault.radii.round, marginBottom: ThemesDefault.space.PX_24 };
let obj2 = { flexDirection: "row", alignItems: "center", justifyContent: "center", alignSelf: "center", padding: ThemesDefault.space.PX_8, backgroundColor: ThemesDefault.colors.BACKGROUND_SURFACE_HIGH, borderRadius: ThemesDefault.radii.round, marginBottom: ThemesDefault.space.PX_24 };
createCacheKey[4] = { flexDirection: "row", marginHorizontal: ThemesDefault.space.PX_12 };
let obj3 = { flexDirection: "row", marginHorizontal: ThemesDefault.space.PX_12 };
createCacheKey[5] = { width: 4, height: 4, marginHorizontal: 2, backgroundColor: ThemesDefault.colors.ICON_MUTED, borderRadius: ThemesDefault.radii.round };
createCacheKey[6] = { textAlign: "center" };
let obj4 = { width: 4, height: 4, marginHorizontal: 2, backgroundColor: ThemesDefault.colors.ICON_MUTED, borderRadius: ThemesDefault.radii.round };
createCacheKey[7] = { marginTop: ThemesDefault.space.PX_4, textAlign: "center" };
let obj5 = { marginTop: ThemesDefault.space.PX_4, textAlign: "center" };
createCacheKey[8] = { marginTop: ThemesDefault.space.PX_8, textAlign: "center", paddingHorizontal: ThemesDefault.space.PX_16 };
let closure_15 = createCacheKey.createStyles(createCacheKey);
let obj7 = { content: null, textWrapper: null, header: null, description: null, illustration: null };
let obj6 = { marginTop: ThemesDefault.space.PX_8, textAlign: "center", paddingHorizontal: ThemesDefault.space.PX_16 };
obj7[0] = { flex: 1, flexDirection: "column", alignItems: "center", justifyContent: "center", paddingHorizontal: ThemesDefault.space.PX_16 };
obj7[1] = { alignItems: "center" };
createCacheKey = { marginBottom: ThemesDefault.space.PX_8 };
obj7[2] = createCacheKey;
obj7[3] = { textAlign: "center" };
let obj8 = { flex: 1, flexDirection: "column", alignItems: "center", justifyContent: "center", paddingHorizontal: ThemesDefault.space.PX_16 };
obj7[4] = { position: "absolute", bottom: "100%", left: 0, right: 0, alignItems: "center", paddingBottom: ThemesDefault.space.PX_24 };
let closure_17 = createCacheKey.createStyles(obj7);
let obj11 = { header: { marginBottom: 8, textAlign: "center" }, description: { textAlign: "center" }, ring: null, iconContainer: null, positive: null, negative: null };
let obj10 = { position: "absolute", bottom: "100%", left: 0, right: 0, alignItems: "center", paddingBottom: ThemesDefault.space.PX_24 };
obj11[2] = { display: "flex", justifyContent: "center", alignItems: "center", height: 64, width: 64, borderRadius: ThemesDefault.radii.round, backgroundColor: ThemesDefault.colors.BACKGROUND_SURFACE_HIGH, marginBottom: 24 };
let obj12 = { display: "flex", justifyContent: "center", alignItems: "center", height: 64, width: 64, borderRadius: ThemesDefault.radii.round, backgroundColor: ThemesDefault.colors.BACKGROUND_SURFACE_HIGH, marginBottom: 24 };
obj11[3] = { display: "flex", justifyContent: "center", alignItems: "center", height: 48, width: 48, borderRadius: ThemesDefault.radii.round, backgroundColor: ThemesDefault.colors.STATUS_POSITIVE };
createCacheKey = { backgroundColor: ThemesDefault.colors.STATUS_POSITIVE };
obj11[4] = createCacheKey;
let obj13 = { display: "flex", justifyContent: "center", alignItems: "center", height: 48, width: 48, borderRadius: ThemesDefault.radii.round, backgroundColor: ThemesDefault.colors.STATUS_POSITIVE };
obj11[5] = { backgroundColor: ThemesDefault.colors.BACKGROUND_FEEDBACK_CRITICAL };
let closure_19 = createCacheKey.createStyles(obj11);
let closure_21 = createCacheKey.createStyles({ container: { flex: 1, justifyContent: "center", alignItems: "center" } });
let obj16 = { content: { flex: 1, flexDirection: "column", alignItems: "center", justifyContent: "center", paddingHorizontal: 32 }, title: null, description: null };
let obj15 = { backgroundColor: ThemesDefault.colors.BACKGROUND_FEEDBACK_CRITICAL };
obj16[1] = { textAlign: "center", marginBottom: ThemesDefault.space.PX_8 };
obj16[2] = { textAlign: "center" };
let closure_23 = createCacheKey.createStyles(obj16);
let obj18 = { content: { flex: 1, flexDirection: "column", alignItems: "center", justifyContent: "center", paddingHorizontal: 32 }, art: null, title: null, description: null };
let obj17 = { textAlign: "center", marginBottom: ThemesDefault.space.PX_8 };
obj18[1] = { marginBottom: ThemesDefault.space.PX_24 };
createCacheKey = { textAlign: "center", marginBottom: ThemesDefault.space.PX_8 };
obj18[2] = createCacheKey;
obj18[3] = { textAlign: "center" };
let closure_25 = createCacheKey.createStyles(obj18);
createCacheKey = { headerShown: true, headerLeft: null, headerTitle: null };
createCacheKey[1] = HeaderBackImage.getHeaderCloseButton(_modDef4675.pop);
createCacheKey[2] = function headerTitle() {
  return null;
};
let obj19 = { marginBottom: ThemesDefault.space.PX_24 };
let result = require("set").fileFinishedImporting("modules/parent_tools/native/FamilyCenterModalRequest.tsx");

export default function FamilyCenterRequestModal(userId) {
  userId = userId.userId;
  const linkCode = userId.linkCode;
  const FamilyCenterConnectionPrereqExperiment = userId(11568).FamilyCenterConnectionPrereqExperiment;
  const items = [linkCode, userId];
  const memo = React.useMemo(() => {
    let obj = {};
    obj = {};
    const merged = Object.assign(closure_1_30);
    obj.render = function render() {
      return closure_1_12(closure_1_22, { userId: closure_0, linkCode: closure_1 });
    };
    obj[userId(closure_1_2[11]).FamilyCenterModalRequestSections.PREREQ_LOADING] = obj;
    obj = {};
    const merged1 = Object.assign(closure_1_30);
    obj.render = function render(teenIdentity) {
      teenIdentity = undefined;
      if (teenIdentity != null) {
        teenIdentity = teenIdentity.teenIdentity;
      }
      return closure_12(closure_26, { teenIdentity });
    };
    obj[userId(closure_1_2[11]).FamilyCenterModalRequestSections.CONFIRM_AGE] = obj;
    obj1 = {};
    const merged2 = Object.assign(closure_1_30);
    obj1.render = function render() {
      return callback(closure_27, {});
    };
    obj[userId(closure_1_2[11]).FamilyCenterModalRequestSections.VERIFYING] = obj1;
    const obj2 = { headerLeft: null, headerShown: true, headerTitle: null, render: null };
    let obj5 = userId(closure_1_2[38]);
    obj2[0] = obj5.getHeaderCloseButton(linkCode(closure_1_2[26]).pop);
    obj2[2] = function headerTitle() {
      return null;
    };
    obj2[3] = function render(teenIdentity) {
      const obj = { userId: closure_0, linkCode: closure_1, teenIdentity: null };
      teenIdentity = undefined;
      if (teenIdentity != null) {
        teenIdentity = teenIdentity.teenIdentity;
      }
      obj[2] = teenIdentity;
      return closure_1_12(closure_1_16, obj);
    };
    obj[userId(closure_1_2[11]).FamilyCenterModalRequestSections.REQUEST] = obj2;
    const obj3 = {};
    const merged3 = Object.assign(closure_1_30);
    obj3.render = function render() {
      return callback(closure_28, {});
    };
    obj[userId(closure_1_2[11]).FamilyCenterModalRequestSections.INVALID_CODE] = obj3;
    const obj4 = {};
    const merged4 = Object.assign(closure_1_30);
    obj4.render = function render() {
      return callback(closure_29, {});
    };
    obj[userId(closure_1_2[11]).FamilyCenterModalRequestSections.MUST_BE_ADULT] = obj4;
    obj5 = {
      headerShown: true,
      headerLeft: userId(closure_1_2[38]).getHeaderCloseButton(linkCode(closure_1_2[26]).pop),
      headerTitle() {
        return null;
      },
      render() {
        return callback(closure_18, {});
      }
    };
    obj[userId(closure_1_2[11]).FamilyCenterModalRequestSections.SENT] = obj5;
    const obj6 = { headerShown: true, headerLeft: null, headerTitle: null, render: null };
    const obj10 = userId(closure_1_2[38]);
    obj6[1] = userId(closure_1_2[38]).getHeaderCloseButton(linkCode(closure_1_2[26]).pop);
    obj6[2] = function headerTitle() {
      return null;
    };
    obj6[3] = function render(failureCode) {
      return callback(closure_20, { failureCode: failureCode.failureCode });
    };
    obj[userId(closure_1_2[11]).FamilyCenterModalRequestSections.ERROR] = obj6;
    const obj7 = { fullscreen: true, headerLeft: null, render: null };
    const obj12 = userId(closure_1_2[38]);
    obj7[1] = userId(closure_1_2[38]).getHeaderCloseButton(linkCode(closure_1_2[26]).pop);
    obj7[2] = function render() {
      return callback(closure_20, { failureCode: constants.INELIGIBLE_FOR_FAMILY_CENTER });
    };
    obj[userId(closure_1_2[11]).FamilyCenterModalRequestSections.TEEN_SCAN] = obj7;
    return obj;
  }, items);
  const FamilyCenterModalRequestSections = userId(11556).FamilyCenterModalRequestSections;
  if (FamilyCenterConnectionPrereqExperiment.useConfig({ location: "FamilyCenterRequestModal" }).enabled) {
    let PREREQ_LOADING = FamilyCenterModalRequestSections.PREREQ_LOADING;
  } else {
    PREREQ_LOADING = tmp2 ? FamilyCenterModalRequestSections.REQUEST : FamilyCenterModalRequestSections.TEEN_SCAN;
  }
  let obj = { initialRouteName: PREREQ_LOADING, screens: memo, headerBackTitle: null };
  const intl = tmp3(1236).intl;
  obj[2] = intl.string(userId(1236).t["13/7kX"]);
  return callback(userId(11569).Modal, obj);
};
export { FamilyCenterModalRequestConfirm };
export { FamilyCenterModalRequestSuccess };
export { FamilyCenterModalRequestError };