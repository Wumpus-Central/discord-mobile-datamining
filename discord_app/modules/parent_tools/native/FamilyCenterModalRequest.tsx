// discord_app/modules/parent_tools/native/FamilyCenterModalRequest.tsx
import _modDef38 from "../../../../_runtime/metro/00038__.js";
import useStateFromStores from "../../../../discord_common/js/packages/flux/useStateFromStores.tsx";
import react2 from "../../../../_runtime/00576_react.js";
import nativeDefault from "../../../../discord_common/js/packages/tokens/native.tsx";
import intl8 from "../../../intl/index.native.tsx";
import native from "../../../design/void/native.tsx";
import useNavigation from "../../../design/components/Navigator/native/useNavigation.native.tsx";
import Server from "../../../flow/Server.tsx";
import _modDef2521 from "../FamilyCenter.messages.js";
import AssetRegistryDefault from "../../../../_runtime/04815_AssetRegistry.js";
import Text_Text from "../../../design/components/Text/native/Text.tsx";
import ModalActionCreatorsDefault from "../../../actions/ModalActionCreators.tsx";
import ButtonGroup2 from "../../../design/components/ButtonGroup/native/ButtonGroup.native.tsx";
import components_Button_Button from "../../../design/components/Button/native/Button.native.tsx";
import ActivityIndicator_ActivityIndicator from "../../../design/components/ActivityIndicator/native/ActivityIndicator.native.tsx";
import FamilyCenterActionCreatorsDefault from "../FamilyCenterActionCreators.tsx";
import AgeVerificationActionCreatorsDefault from "../../age_assurance/AgeVerificationActionCreators.native.tsx";
import ModalScreen2 from "../../../design/components/Modal/native/ModalScreen.native.tsx";
import ModalContent2 from "../../../design/components/Modal/native/ModalContent.native.tsx";
import useIsInAdultAgeGroupDefault from "../hooks/useIsInAdultAgeGroup.tsx";
import FamilyCenterUtils from "../FamilyCenterUtils.tsx";
import Modal2 from "../../../design/components/Modal/native/Modal.native.tsx";
import AssetRegistryDefault2 from "../../../../_runtime/11194_AssetRegistry.js";
import FamilyCenterModalRequestRouting from "../FamilyCenterModalRequestRouting.tsx";
import ModalFooter2 from "../../../design/components/Modal/native/ModalFooter.native.tsx";
import EnvelopeSpotIllustration from "../../../design/components/mana-assets/native/generated/EnvelopeSpotIllustration.native.tsx";
import FamilyShieldSpotIllustration from "../../../design/components/mana-assets/native/generated/FamilyShieldSpotIllustration.native.tsx";
import _asyncToGenerator from "../../../../_runtime/metro/00005__asyncToGenerator.js";
import react from "../../../../_runtime/00019_react.js";
import react_native from "../../../../_runtime/00017_react-native.js";
import UserStore from "../../../stores/UserStore.tsx";
import FamilyCenterConstants from "../FamilyCenterConstants.tsx";
import Fragment from "../../../../_runtime/react/00021_Fragment.js";
import createStyles_mod from "../../../design/components/Styles/native/createStyles.tsx";
import ReactCompilerGating_mod from "../../react_compiler/ReactCompilerGating.tsx";
import NavigatorHeader_mod from "../../../design/components/Navigator/native/NavigatorHeader.native.tsx";
import size_mod from "../../../../_runtime/metro/00002__.js";

const require = globalThis.__r;
let _require, c2, c3, dependencyMap, importDefault, navigation, ref;

let NavigatorHeader;
let c10;
let c9;
let closure_12;
let closure_14;
let hasOwnProperty;
let map1;
let metroImportAll;
let metroRequire;
let obj10;
let obj12;
let obj13;
let obj15;
let obj17;
let obj18;
let obj2;
let obj3;
let obj4;
let obj5;
let obj6;
let obj7;
let obj9;
let rect;
let size;
let size1;
let size2;
let unpackModuleId;
function FamilyCenterPrereqLoading(arg0) {
  let closure_2;
  let obj3;
  let require;
  ({ userId: require, linkCode: importDefault } = arg0);
  let tmp = closure_21();
  let obj = useNavigation;
  dependencyMap = obj.useNavigation();
  const effect = react.useEffect(() => {
    let _true;
    function runPrereq() {
      return obj(...arguments);
    }
    let obj = function _runPrereq() {
      obj = _asyncToGenerator(async () => {
        let closure_0;
        let obj2;
        if (c3 === 2) {
          c3 = 3;
          throw new TypeError("Generator functions may not be called on executing generators");
        } else if (tmp3 === 3) {
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
            let tmp;
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
                let closure_1 = tmp4;
                tmp = undefined;
                c2 = 1;
                c3 = 1;
                const obj5 = { value: obj2.resolveConnectionPrereqTarget(tmp, closure_1), done: false };
                obj2 = _true(closure_2_2[13]);
                return obj5;
              }
            } else if (arg0 === 1) {
              c3 = 3;
              throw value;
            } else if (arg0 === 2) {
              c3 = 3;
              obj = { value, done: true };
              return obj;
            } else {
              tmp = value;
              if (!closure_129_0) {
                if (tmp.section !== _true(closure_2_2[13]).FamilyCenterModalRequestSections.ERROR) {
                  if (tmp.section !== _true(closure_2_2[13]).FamilyCenterModalRequestSections.REQUEST) {
                    if (tmp.section !== _true(closure_2_2[13]).FamilyCenterModalRequestSections.CONFIRM_AGE) {
                      const replaced = c2.replace(tmp.section);
                    }
                  }
                }
                const replaced1 = c2.replace(tmp.section, tmp.params);
              }
              c3 = 3;
              return { value: "IconComponent", done: null };
            }
          } catch (tmp28) {
            c3 = 3;
            throw tmp28;
          }
        }
      });
      return obj(...arguments);
    };
    let c0 = false;
    let tmp = runPrereq();
    return () => {
      let c0 = true;
    };
  }, []);
  let obj2 = { children: closure_12(closure_6, obj3) };
  obj3 = { style: tmp.container, children: closure_12(ActivityIndicator_ActivityIndicator.ActivityIndicator, {}) };
  const ModalScreen = ModalScreen2.ModalScreen;
  return closure_12(ModalScreen, obj2);
}
function getScreens(userId, linkCode) {
  let obj10;
  let obj12;
  let obj6;
  _require = userId;
  importDefault = linkCode;
  let obj = {};
  const obj2 = {
    render() {
      const obj = { userId, linkCode };
      return closure_12(FamilyCenterPrereqLoading, obj);
    },
  };
  const PREREQ_LOADING = require("FamilyCenterModalRequestRouting").FamilyCenterModalRequestSections.PREREQ_LOADING;
  const merged = Object.assign(obj19);
  obj[PREREQ_LOADING] = obj2;
  const obj3 = {
    render(teenIdentity) {
      teenIdentity = undefined;
      if (teenIdentity != null) {
        teenIdentity = teenIdentity.teenIdentity;
      }
      return closure_1_12(closure_1_27, { teenIdentity });
    },
  };
  const CONFIRM_AGE = require("FamilyCenterModalRequestRouting").FamilyCenterModalRequestSections.CONFIRM_AGE;
  const merged1 = Object.assign(obj19);
  obj[CONFIRM_AGE] = obj3;
  const obj4 = {
    render() {
      return closure_1_12(closure_1_28, {});
    },
  };
  const VERIFYING = require("FamilyCenterModalRequestRouting").FamilyCenterModalRequestSections.VERIFYING;
  const merged2 = Object.assign(obj19);
  obj[VERIFYING] = obj4;
  const obj5 = {
    headerLeft: obj6.getHeaderCloseButton(ModalActionCreatorsDefault.pop),
    headerShown: true,
    headerTitle() {
      return null;
    },
    render(teenIdentity) {
      const obj = { userId, linkCode, teenIdentity };
      teenIdentity = undefined;
      if (teenIdentity != null) {
        teenIdentity = teenIdentity.teenIdentity;
      }
      return closure_12(closure_16, obj);
    },
  };
  const REQUEST = require("FamilyCenterModalRequestRouting").FamilyCenterModalRequestSections.REQUEST;
  obj[REQUEST] = obj5;
  obj6 = require("NavigatorHeader");
  const obj7 = {
    render() {
      return closure_1_12(closure_1_29, {});
    },
  };
  const INVALID_CODE = require("FamilyCenterModalRequestRouting").FamilyCenterModalRequestSections.INVALID_CODE;
  const merged3 = Object.assign(obj19);
  obj[INVALID_CODE] = obj7;
  const obj8 = {
    render() {
      return closure_1_12(closure_1_30, {});
    },
  };
  const MUST_BE_ADULT = require("FamilyCenterModalRequestRouting").FamilyCenterModalRequestSections.MUST_BE_ADULT;
  const merged4 = Object.assign(obj19);
  obj[MUST_BE_ADULT] = obj8;
  const obj9 = {
    headerShown: true,
    headerLeft: obj10.getHeaderCloseButton(ModalActionCreatorsDefault.pop),
    headerTitle() {
      return null;
    },
    render() {
      return closure_1_12(closure_1_18, {});
    },
  };
  const SENT = require("FamilyCenterModalRequestRouting").FamilyCenterModalRequestSections.SENT;
  obj[SENT] = obj9;
  obj10 = require("NavigatorHeader");
  const obj11 = {
    headerShown: true,
    headerLeft: obj12.getHeaderCloseButton(ModalActionCreatorsDefault.pop),
    headerTitle() {
      return null;
    },
    render(failureCode) {
      const obj = { failureCode: failureCode.failureCode };
      return closure_1_12(closure_1_20, obj);
    },
  };
  const ERROR = require("FamilyCenterModalRequestRouting").FamilyCenterModalRequestSections.ERROR;
  obj[ERROR] = obj11;
  obj12 = require("NavigatorHeader");
  return obj;
}
({ Image: hasOwnProperty, View: metroRequire } = react_native);
({
  FAMILY_CENTER_AGE_VERIFICATION_RESUME_TIMEOUT: metroImportAll,
  FAMILY_CENTER_LINK_REQUEST_ERROR_EXPERIENCES: c9,
  FamilyCenterFailureCode: c10,
  FamilyCenterIconType: unpackModuleId,
} = FamilyCenterConstants);
({ jsx: closure_12, jsxs: map1, Fragment: closure_14 } = Fragment);
let createStyles = createStyles_mod;
let obj = {
  headerText: obj2,
  art: { width: 165, height: 119 },
  connectionHeader: obj3,
  headerIcons: obj4,
  ellipseGroup: obj5,
  ellipse: size,
  title: { textAlign: "center" },
  teenName: obj6,
  consent: obj7,
};
obj2 = { marginTop: nativeDefault.space.PX_16, marginBottom: nativeDefault.space.PX_16 };
createStyles = createStyles.createStyles;
obj3 = { alignItems: "center", marginBottom: nativeDefault.space.PX_16 };
obj4 = {
  flexDirection: "row",
  alignItems: "center",
  justifyContent: "center",
  alignSelf: "center",
  padding: nativeDefault.space.PX_8,
  backgroundColor: nativeDefault.colors.BACKGROUND_SURFACE_HIGH,
  borderRadius: nativeDefault.radii.round,
  marginBottom: nativeDefault.space.PX_24,
};
obj5 = { flexDirection: "row", marginHorizontal: nativeDefault.space.PX_12 };
size = {
  width: 4,
  height: 4,
  marginHorizontal: 2,
  backgroundColor: nativeDefault.colors.ICON_MUTED,
  borderRadius: nativeDefault.radii.round,
};
obj6 = { marginTop: nativeDefault.space.PX_4, textAlign: "center" };
obj7 = { marginTop: nativeDefault.space.PX_8, textAlign: "center", paddingHorizontal: nativeDefault.space.PX_16 };
let closure_15 = createStyles(obj);
let ReactCompilerGating = ReactCompilerGating_mod;
let tmp6 = ReactCompilerGating.isReactCompilerEnabled()
  ? (userId) => {
      let currentUser;
      let obj3;
      let tmp10;
      let tmp6;
      let tmp7;
      let obj = userId(navigation[9]);
      const cResult = obj.c(38);
      userId = userId.userId;
      const linkCode = userId.linkCode;
      closure_15();
      const obj2 = userId(navigation[10]);
      navigation = obj2.useNavigation();
      if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
        const items = [UserStore];
        const fn = function o() {
          return currentUser.getCurrentUser();
        };
        cResult[0] = items;
        cResult[1] = fn;
        tmp6 = items;
        tmp7 = fn;
      } else {
        [tmp6, tmp7] = cResult;
      }
      const tmpResult = userId(navigation[11]);
      const stateFromStores = tmpResult.useStateFromStores(tmp6, tmp7);
      if (cResult[2] !== navigation) {
        const fn2 = function _() {
          const obj = FamilyCenterActionCreatorsDefault;
          const result = obj.clearPendingConnection();
          navigation.push(FamilyCenterModalRequestRouting.FamilyCenterModalRequestSections.SENT);
        };
        cResult[2] = navigation;
        cResult[3] = fn2;
        tmp10 = fn2;
      } else {
        tmp10 = cResult[3];
      }
      if (cResult[4] !== navigation) {
        class F {
          constructor(arg0) {
            const obj = FamilyCenterUtils;
            const failureCodeForAPIError = obj.getFailureCodeForAPIError(arg0);
            navigation.push(FamilyCenterModalRequestRouting.FamilyCenterModalRequestSections.ERROR, {
              failureCode: failureCodeForAPIError,
            });
          }
        }
        cResult[4] = navigation;
        cResult[5] = F;
      } else {
        class F {
          constructor(arg0) {
            const obj = FamilyCenterUtils;
            const failureCodeForAPIError = obj.getFailureCodeForAPIError(arg0);
            navigation.push(FamilyCenterModalRequestRouting.FamilyCenterModalRequestSections.ERROR, {
              failureCode: failureCodeForAPIError,
            });
          }
        }
      }
      if (cResult[6] === F) {
        class F {
          constructor(arg0) {
            const obj = FamilyCenterUtils;
            const failureCodeForAPIError = obj.getFailureCodeForAPIError(arg0);
            navigation.push(FamilyCenterModalRequestRouting.FamilyCenterModalRequestSections.ERROR, {
              failureCode: failureCodeForAPIError,
            });
          }
        }
        const tmpResult2 = userId(navigation[15]);
        const familyCenterActions = tmpResult2.useFamilyCenterActions(obj3);
        const requestLink = familyCenterActions.requestLink;
        const isRequestingLink = familyCenterActions.isRequestingLink;
        if (cResult[9] === linkCode) {
          class F {
            constructor(arg0) {
              const obj = FamilyCenterUtils;
              const failureCodeForAPIError = obj.getFailureCodeForAPIError(arg0);
              navigation.push(FamilyCenterModalRequestRouting.FamilyCenterModalRequestSections.ERROR, {
                failureCode: failureCodeForAPIError,
              });
            }
          }
        }
        class M {
          constructor() {
            requestLink(userId, linkCode);
          }
        }
        cResult[9] = linkCode;
        cResult[10] = requestLink;
        cResult[11] = userId;
        cResult[12] = M;
      }
      obj3 = { onSuccess: tmp10, onError: F };
      cResult[6] = F;
      cResult[7] = tmp10;
      cResult[8] = obj3;
    }
  : (userId) => {
      let ButtonGroup;
      let currentUser;
      let format;
      let formatToPlainString;
      let formatToPlainString2;
      let intl3;
      let intl5;
      let intl6;
      let intl7;
      let items10;
      let items4;
      let items5;
      let items6;
      let items7;
      let items8;
      let items9;
      let kFj4h1;
      let kFj4h12;
      let obj14;
      let obj16;
      let obj20;
      let obj27;
      let obj8;
      let tmp10Result;
      let tmp15Result;
      let tmp18;
      let tmp19;
      let username2;
      let yiUJNU;
      userId = userId.userId;
      const linkCode = userId.linkCode;
      const teenIdentity = userId.teenIdentity;
      navigation = undefined;
      const tmp = closure_15();
      let obj = userId(navigation[10]);
      navigation = obj.useNavigation();
      const items = [UserStore];
      const obj2 = userId(navigation[11]);
      const stateFromStores = obj2.useStateFromStores(items, () => currentUser.getCurrentUser());
      const items1 = [navigation];
      const items2 = [navigation];
      const callback = react.useCallback(() => {
        const obj = FamilyCenterActionCreatorsDefault;
        const result = obj.clearPendingConnection();
        navigation.push(FamilyCenterModalRequestRouting.FamilyCenterModalRequestSections.SENT);
      }, items1);
      const callback1 = react.useCallback((arg0) => {
        const obj = FamilyCenterUtils;
        const failureCodeForAPIError = obj.getFailureCodeForAPIError(arg0);
        navigation.push(FamilyCenterModalRequestRouting.FamilyCenterModalRequestSections.ERROR, {
          failureCode: failureCodeForAPIError,
        });
      }, items2);
      const obj3 = userId(navigation[15]);
      const familyCenterActions = obj3.useFamilyCenterActions({ onSuccess: callback, onError: callback1 });
      const requestLink = familyCenterActions.requestLink;
      const isRequestingLink = familyCenterActions.isRequestingLink;
      const items3 = [requestLink, userId, linkCode];
      const callback2 = react.useCallback(() => {
        requestLink(userId, linkCode);
      }, items3);
      const ModalScreen = userId(navigation[28]).ModalScreen;
      const ModalContent = userId(navigation[23]).ModalContent;
      if (null != teenIdentity) {
        let userAvatarSource;
        const obj4 = { style: tmp.connectionHeader, children: items6 };
        const obj5 = { style: tmp.headerIcons, children: items4 };
        const Avatar = tmp2(tmp3[16]).Avatar;
        if (null != stateFromStores) {
          const obj6 = linkCode(navigation[17]);
          userAvatarSource = obj6.getUserAvatarSource(stateFromStores);
        }
        const obj7 = {
          source: userAvatarSource,
          size: userId(navigation[16]).AvatarSizes.LARGE,
          accessibilityLabel: formatToPlainString(kFj4h1, obj8),
        };
        const intl = tmp2(tmp3[18]).intl;
        formatToPlainString = intl.formatToPlainString;
        let str;
        kFj4h1 = linkCode(tmp3[19]).kFj4h1;
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
        obj8 = { name: str };
        items4 = [closure_12(Avatar, obj7), ,];
        const obj10 = { style: tmp.ellipse };
        const obj9 = { style: tmp.ellipseGroup, children: items5 };
        items5 = [closure_12(closure_6, obj10), ,];
        const obj11 = { style: tmp.ellipse };
        items5[1] = closure_12(closure_6, obj11);
        const obj12 = { style: tmp.ellipse };
        items5[2] = closure_12(closure_6, obj12);
        items4[1] = closure_13(closure_6, obj9);
        const obj13 = {
          source: tmp15Result.getUserAvatarSource(obj14),
          size: userId(navigation[16]).AvatarSizes.LARGE,
          accessibilityLabel: formatToPlainString2(kFj4h12, obj16),
        };
        const Avatar2 = tmp2(tmp3[16]).Avatar;
        obj14 = { id: null, avatar: null, discriminator: "0" };
        ({ id: obj15.id, avatar: obj15.avatar } = teenIdentity);
        tmp15Result = linkCode(navigation[17]);
        const intl2 = tmp2(tmp3[18]).intl;
        formatToPlainString2 = intl2.formatToPlainString;
        let username = teenIdentity.global_name;
        kFj4h12 = tmp15(tmp3[19]).kFj4h1;
        if (username == null) {
          username = teenIdentity.username;
        }
        obj16 = { name: username };
        items4[2] = closure_12(Avatar2, obj13);
        items6 = [closure_13(closure_6, obj5), , ,];
        const obj17 = {
          variant: "heading-xl/bold",
          color: "mobile-text-heading-primary",
          style: tmp.title,
          children: intl3.string(linkCode(navigation[19]).sMmIbm),
        };
        const Text = tmp2(tmp3[20]).Text;
        intl3 = tmp2(tmp3[18]).intl;
        items6[1] = closure_12(Text, obj17);
        const obj18 = {
          variant: "heading-xl/bold",
          color: "mobile-text-heading-primary",
          style: tmp.teenName,
          children: username2,
        };
        username2 = teenIdentity.global_name;
        const Text2 = tmp2(tmp3[20]).Text;
        if (username2 == null) {
          username2 = teenIdentity.username;
        }
        items6[2] = closure_12(Text2, obj18);
        obj19 = { variant: "text-sm/medium", color: "text-muted", style: tmp.consent, children: format(yiUJNU, obj20) };
        const Text3 = tmp2(tmp3[20]).Text;
        const intl4 = tmp2(tmp3[18]).intl;
        format = intl4.format;
        let username3 = teenIdentity.global_name;
        yiUJNU = tmp15(tmp3[19]).yiUJNU;
        if (username3 == null) {
          username3 = teenIdentity.username;
        }
        obj20 = { username: username3 };
        items6[3] = closure_12(Text3, obj19);
        tmp10Result = closure_13(closure_6, obj4);
        tmp18 = tmp15;
        tmp19 = closure_12;
      } else {
        const obj21 = { children: items7 };
        const obj22 = { style: tmp.art, source: linkCode(navigation[21]) };
        items7 = [closure_12(closure_5, obj22)];
        const obj23 = {
          style: tmp.headerText,
          variant: "text-lg/bold",
          children: intl7.string(linkCode(navigation[19]).GH11eI),
        };
        const Text4 = tmp2(tmp3[20]).Text;
        intl7 = tmp2(tmp3[18]).intl;
        items7[1] = closure_12(Text4, obj23);
        tmp10Result = closure_13(closure_14, obj21);
        tmp18 = linkCode;
        tmp19 = closure_12;
      }
      const obj24 = { children: items9 };
      const obj25 = { children: items8 };
      items8 = [tmp10Result, tmp19(tmp18(navigation[22]), {})];
      items9 = [closure_13(ModalContent, obj25)];
      const obj26 = { children: closure_13(ButtonGroup, obj27) };
      const ModalFooter = tmp2(tmp3[26]).ModalFooter;
      obj27 = { children: items10 };
      ButtonGroup = tmp2(tmp3[27]).ButtonGroup;
      const obj28 = {
        variant: "primary",
        size: "lg",
        disabled: isRequestingLink,
        loading: isRequestingLink,
        text: intl5.string(tmp18(navigation[19]).ISg34l),
        onPress: callback2,
      };
      const Button = tmp2(tmp3[24]).Button;
      intl5 = tmp2(tmp3[18]).intl;
      items10 = [tmp19(Button, obj28)];
      const obj29 = {
        variant: "secondary",
        size: "lg",
        text: intl6.string(userId(navigation[18]).t["ETE/oC"]),
        onPress: tmp18(navigation[25]).pop,
      };
      const Button2 = tmp2(tmp3[24]).Button;
      intl6 = tmp2(tmp3[18]).intl;
      items10[1] = tmp19(Button2, obj29);
      items9[1] = tmp19(ModalFooter, obj26);
      return closure_13(ModalScreen, obj24);
    };
let closure_16 = tmp6;
createStyles = createStyles_mod;
let obj8 = {
  content: obj9,
  textWrapper: { alignItems: "center" },
  header: obj10,
  description: { textAlign: "center" },
  illustration: rect,
};
obj9 = {
  flex: 1,
  flexDirection: "column",
  alignItems: "center",
  justifyContent: "center",
  paddingHorizontal: nativeDefault.space.PX_16,
};
const createStyles2 = createStyles.createStyles;
obj10 = { marginBottom: nativeDefault.space.PX_8 };
rect = {
  position: "absolute",
  bottom: "100%",
  left: 0,
  right: 0,
  alignItems: "center",
  paddingBottom: nativeDefault.space.PX_24,
};
let closure_17 = createStyles2(obj8);
ReactCompilerGating = ReactCompilerGating_mod;
let tmp8 = ReactCompilerGating.isReactCompilerEnabled()
  ? () => {
      let Button;
      let content;
      let currentUser;
      let intl3;
      let items1;
      let items2;
      let obj6;
      let obj9;
      let textWrapper;
      let tmp12;
      let tmp15;
      let tmp19;
      let tmp22;
      let tmp27;
      let tmp5;
      let tmp6;
      let tmp9;
      const obj = react2;
      const cResult = obj.c(25);
      const tmp4 = closure_17();
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
      const tmpResult = useStateFromStores;
      const stateFromStores = tmpResult.useStateFromStores(tmp5, tmp6);
      if (cResult[2] === Symbol.for("react.memo_cache_sentinel")) {
        const fn2 = function u() {
          const arr = ModalActionCreatorsDefault;
          arr.pop();
        };
        cResult[2] = fn2;
        tmp9 = fn2;
      } else {
        tmp9 = cResult[2];
      }
      if (null === stateFromStores) {
        const arr2 = ModalActionCreatorsDefault;
        let arr = arr2.pop();
      }
      ({ content, textWrapper } = tmp4);
      if (cResult[3] === Symbol.for("react.memo_cache_sentinel")) {
        const tmp14 = closure_12(EnvelopeSpotIllustration.EnvelopeSpotIllustration, { scale: 0.7 });
        cResult[3] = tmp14;
        tmp12 = tmp14;
      } else {
        tmp12 = cResult[3];
      }
      if (cResult[4] !== tmp4.illustration) {
        const obj2 = { style: tmp4.illustration, children: tmp12 };
        const tmp18 = closure_12(metroRequire, obj2);
        cResult[4] = tmp4.illustration;
        cResult[5] = tmp18;
        tmp15 = tmp18;
      } else {
        tmp15 = cResult[5];
      }
      const header = tmp4.header;
      if (cResult[6] === Symbol.for("react.memo_cache_sentinel")) {
        const intl = intl8.intl;
        const stringResult = intl.string(_modDef2521.EpwfZl);
        cResult[6] = stringResult;
        tmp19 = stringResult;
      } else {
        tmp19 = cResult[6];
      }
      if (cResult[7] !== tmp4.header) {
        const obj3 = {
          variant: "heading-lg/bold",
          color: "mobile-text-heading-primary",
          style: header,
          children: tmp19,
        };
        const tmp24 = closure_12(Text_Text.Text, obj3);
        cResult[7] = tmp4.header;
        cResult[8] = tmp24;
        tmp22 = tmp24;
      } else {
        tmp22 = cResult[8];
      }
      let email;
      const description = tmp4.description;
      const tmp25 = cResult[9];
      if (stateFromStores != null) {
        email = stateFromStores.email;
      }
      if (tmp25 !== email) {
        const intl2 = intl8.intl;
        const format = intl2.format;
        let email1;
        const dVtWId = _modDef2521.dVtWId;
        if (stateFromStores != null) {
          email1 = stateFromStores.email;
        }
        const obj4 = { email: email1 };
        const formatResult = format(dVtWId, obj4);
        let email2;
        if (stateFromStores != null) {
          email2 = stateFromStores.email;
        }
        cResult[9] = email2;
        cResult[10] = formatResult;
        tmp27 = formatResult;
      } else {
        tmp27 = cResult[10];
      }
      if (cResult[11] === tmp4.description) {
        let tmp32;
        if (cResult[12] === tmp27) {
          tmp32 = cResult[13];
        }
        if (cResult[14] === tmp4.textWrapper) {
          if (cResult[15] === tmp32) {
            if (cResult[16] === tmp15) {
              let tmp34;
              if (cResult[17] === tmp22) {
                tmp34 = cResult[18];
              }
              if (cResult[19] === tmp4.content) {
                let tmp38;
                let tmp42;
                let tmp45;
                if (cResult[20] === tmp34) {
                  tmp38 = cResult[21];
                }
                const _Symbol = Symbol;
                if (cResult[22] === Symbol.for("react.memo_cache_sentinel")) {
                  const obj5 = { children: closure_12(Button, obj6) };
                  const ModalFooter = ModalFooter2.ModalFooter;
                  obj6 = { size: "lg", text: intl3.string(intl8.t.cpT0Cq), onPress: tmp9 };
                  Button = components_Button_Button.Button;
                  intl3 = intl8.intl;
                  const tmp44 = closure_12(ModalFooter, obj5);
                  cResult[22] = tmp44;
                  tmp42 = tmp44;
                } else {
                  tmp42 = cResult[22];
                }
                if (cResult[23] !== tmp38) {
                  const obj7 = { children: items1 };
                  items1 = [tmp38, tmp42];
                  const tmp47 = map1(ModalScreen2.ModalScreen, obj7);
                  cResult[23] = tmp38;
                  cResult[24] = tmp47;
                  tmp45 = tmp47;
                } else {
                  tmp45 = cResult[24];
                }
                return tmp45;
              }
              const obj8 = { children: closure_12(metroRequire, obj9) };
              obj9 = { style: content, children: tmp34 };
              const ModalContent = ModalContent2.ModalContent;
              const tmp41 = closure_12(ModalContent, obj8);
              cResult[19] = tmp4.content;
              cResult[20] = tmp34;
              cResult[21] = tmp41;
              tmp38 = tmp41;
            }
          }
        }
        const obj10 = { style: textWrapper, children: items2 };
        items2 = [tmp15, tmp22, tmp32];
        const tmp37 = map1(metroRequire, obj10);
        cResult[14] = tmp4.textWrapper;
        cResult[15] = tmp32;
        cResult[16] = tmp15;
        cResult[17] = tmp22;
        cResult[18] = tmp37;
        tmp34 = tmp37;
      }
      const tmp33 = closure_12(Text_Text.Text, {
        variant: "text-sm/medium",
        color: "text-muted",
        style: description,
        children: tmp27,
      });
      cResult[11] = tmp4.description;
      cResult[12] = tmp27;
      cResult[13] = tmp33;
      tmp32 = tmp33;
    }
  : () => {
      let Button;
      let currentUser;
      let dVtWId;
      let email;
      let format;
      let intl;
      let intl3;
      let items1;
      let items2;
      let obj10;
      let obj3;
      const tmp = closure_17();
      const items = [UserStore];
      const obj = useStateFromStores;
      const stateFromStores = obj.useStateFromStores(items, () => currentUser.getCurrentUser());
      const callback = react.useCallback(() => {
        const arr = ModalActionCreatorsDefault;
        arr.pop();
      }, []);
      if (null === stateFromStores) {
        const arr2 = ModalActionCreatorsDefault;
        let arr = arr2.pop();
      }
      const ModalScreen = ModalScreen2.ModalScreen;
      const obj2 = { style: tmp.content, children: map1(metroRequire, obj3) };
      obj3 = { style: tmp.textWrapper, children: items1 };
      const obj4 = {
        style: tmp.illustration,
        children: closure_12(EnvelopeSpotIllustration.EnvelopeSpotIllustration, { scale: 0.7 }),
      };
      const ModalContent = ModalContent2.ModalContent;
      items1 = [closure_12(metroRequire, obj4), ,];
      const obj5 = {
        variant: "heading-lg/bold",
        color: "mobile-text-heading-primary",
        style: tmp.header,
        children: intl.string(_modDef2521.EpwfZl),
      };
      const Text = Text_Text.Text;
      intl = intl8.intl;
      items1[1] = closure_12(Text, obj5);
      const obj6 = {
        variant: "text-sm/medium",
        color: "text-muted",
        style: tmp.description,
        children: format(dVtWId, { email }),
      };
      const Text2 = Text_Text.Text;
      const intl2 = intl8.intl;
      format = intl2.format;
      email = undefined;
      dVtWId = _modDef2521.dVtWId;
      if (stateFromStores != null) {
        email = stateFromStores.email;
      }
      const obj7 = { children: items2 };
      const obj8 = { children: closure_12(metroRequire, obj2) };
      items1[2] = closure_12(Text2, obj6);
      items2 = [closure_12(ModalContent, obj8)];
      const obj9 = { children: closure_12(Button, obj10) };
      const ModalFooter = ModalFooter2.ModalFooter;
      obj10 = { size: "lg", text: intl3.string(intl8.t.cpT0Cq), onPress: callback };
      Button = components_Button_Button.Button;
      intl3 = intl8.intl;
      items2[1] = closure_12(ModalFooter, obj9);
      return map1(ModalScreen, obj7);
    };
let closure_18 = tmp8;
createStyles = createStyles_mod;
let obj11 = {
  header: { marginBottom: 8, textAlign: "center" },
  description: { textAlign: "center" },
  ring: size1,
  iconContainer: size2,
  positive: obj12,
  negative: obj13,
};
size1 = {
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  height: 64,
  width: 64,
  borderRadius: nativeDefault.radii.round,
  backgroundColor: nativeDefault.colors.BACKGROUND_SURFACE_HIGH,
  marginBottom: 24,
};
const createStyles3 = createStyles.createStyles;
size2 = {
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  height: 48,
  width: 48,
  borderRadius: nativeDefault.radii.round,
  backgroundColor: nativeDefault.colors.STATUS_POSITIVE,
};
obj12 = { backgroundColor: nativeDefault.colors.STATUS_POSITIVE };
obj13 = { backgroundColor: nativeDefault.colors.BACKGROUND_FEEDBACK_CRITICAL };
let closure_19 = createStyles3(obj11);
ReactCompilerGating = ReactCompilerGating_mod;
let tmp10 = ReactCompilerGating.isReactCompilerEnabled()
  ? (failureCode) => {
      let Button;
      let currentUser;
      let intl;
      let items2;
      let items3;
      let obj6;
      let tmp11;
      let tmp13;
      let tmp5;
      let tmp6;
      const obj = react2;
      const cResult = obj.c(35);
      failureCode = failureCode.failureCode;
      const tmp4 = closure_19();
      if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
        const items = [UserStore];
        const fn = function o() {
          return currentUser.getCurrentUser();
        };
        cResult[0] = items;
        cResult[1] = fn;
        tmp5 = items;
        tmp6 = fn;
      } else {
        [tmp5, tmp6] = cResult;
      }
      const tmpResult = useStateFromStores;
      const stateFromStores = tmpResult.useStateFromStores(tmp5, tmp6);
      const tmp10 = useIsInAdultAgeGroupDefault();
      if (cResult[2] === Symbol.for("react.memo_cache_sentinel")) {
        const tmpResult2 = native;
        const boxShadowStyle = tmpResult2.generateBoxShadowStyle(native.FOUR_DP_ELEVATION_SHADOW_PARAMS);
        cResult[2] = boxShadowStyle;
        tmp11 = boxShadowStyle;
      } else {
        tmp11 = cResult[2];
      }
      if (cResult[3] === Symbol.for("react.memo_cache_sentinel")) {
        const fn2 = function v() {
          const arr = ModalActionCreatorsDefault;
          arr.pop();
        };
        cResult[3] = fn2;
        tmp13 = fn2;
      } else {
        tmp13 = cResult[3];
      }
      _modDef38(null != stateFromStores, "User must be logged in to see this modal.");
      const email = stateFromStores.email;
      if (cResult[4] === React4[failureCode]) {
        if (cResult[5] === tmp10) {
          let tmp16;
          let tmp17;
          let tmp21;
          if (cResult[6] === email) {
            tmp16 = cResult[7];
            tmp17 = cResult[8];
          }
          const icon = obj4.icon;
          const CHECK = unpackModuleId.CHECK;
          if (cResult[9] !== tmp4.ring) {
            const items1 = [tmp4.ring, tmp11];
            cResult[9] = tmp4.ring;
            cResult[10] = items1;
            tmp21 = items1;
          } else {
            tmp21 = cResult[10];
          }
          const tmp22 = icon === CHECK ? tmp4.positive : tmp4.negative;
          if (cResult[11] === tmp4.iconContainer) {
            let tmp23;
            let tmp24;
            if (cResult[12] === tmp22) {
              tmp23 = cResult[13];
            }
            if (cResult[14] !== icon) {
              let tmp26;
              if (icon === unpackModuleId.CHECK) {
                const obj2 = { source: AssetRegistryDefault2, color: "#FFF" };
                const Icon2 = native.Icon;
                tmp26 = closure_12(Icon2, obj2);
              } else {
                const obj3 = { source: AssetRegistryDefault, color: "#FFF" };
                const Icon = native.Icon;
                tmp26 = closure_12(Icon, obj3);
              }
              cResult[14] = icon;
              cResult[15] = tmp26;
              tmp24 = tmp26;
            } else {
              tmp24 = cResult[15];
            }
            if (cResult[16] === tmp23) {
              let tmp28;
              if (cResult[17] === tmp24) {
                tmp28 = cResult[18];
              }
              if (cResult[19] === tmp28) {
                let tmp32;
                if (cResult[20] === tmp21) {
                  tmp32 = cResult[21];
                }
                if (cResult[22] === tmp4.header) {
                  let tmp36;
                  if (cResult[23] === tmp16) {
                    tmp36 = cResult[24];
                  }
                  if (cResult[25] === tmp17) {
                    let tmp39;
                    if (cResult[26] === tmp4.description) {
                      tmp39 = cResult[27];
                    }
                    if (cResult[28] === tmp32) {
                      if (cResult[29] === tmp36) {
                        let tmp42;
                        let tmp45;
                        let tmp48;
                        if (cResult[30] === tmp39) {
                          tmp42 = cResult[31];
                        }
                        const _Symbol = Symbol;
                        if (cResult[32] === Symbol.for("react.memo_cache_sentinel")) {
                          const obj5 = { children: closure_12(Button, obj6) };
                          const ModalFooter = ModalFooter2.ModalFooter;
                          obj6 = { text: intl.string(intl8.t.cpT0Cq), onPress: tmp13 };
                          Button = components_Button_Button.Button;
                          intl = intl8.intl;
                          const tmp47 = closure_12(ModalFooter, obj5);
                          cResult[32] = tmp47;
                          tmp45 = tmp47;
                        } else {
                          tmp45 = cResult[32];
                        }
                        if (cResult[33] !== tmp42) {
                          const obj7 = { children: items2 };
                          items2 = [tmp42, tmp45];
                          const tmp50 = map1(ModalScreen2.ModalScreen, obj7);
                          cResult[33] = tmp42;
                          cResult[34] = tmp50;
                          tmp48 = tmp50;
                        } else {
                          tmp48 = cResult[34];
                        }
                        return tmp48;
                      }
                    }
                    const obj8 = { children: items3 };
                    items3 = [tmp32, tmp36, tmp39];
                    const tmp44 = map1(ModalContent2.ModalContent, obj8);
                    cResult[28] = tmp32;
                    cResult[29] = tmp36;
                    cResult[30] = tmp39;
                    cResult[31] = tmp44;
                    tmp42 = tmp44;
                  }
                  const obj9 = {
                    variant: "text-sm/medium",
                    color: "text-muted",
                    style: tmp4.description,
                    children: tmp17,
                  };
                  const tmp41 = closure_12(Text_Text.Text, obj9);
                  cResult[25] = tmp17;
                  cResult[26] = tmp4.description;
                  cResult[27] = tmp41;
                  tmp39 = tmp41;
                }
                const obj10 = {
                  variant: "heading-lg/bold",
                  color: "mobile-text-heading-primary",
                  style: tmp4.header,
                  children: tmp16,
                };
                const tmp38 = closure_12(Text_Text.Text, obj10);
                cResult[22] = tmp4.header;
                cResult[23] = tmp16;
                cResult[24] = tmp38;
                tmp36 = tmp38;
              }
              const obj11 = { style: tmp21, children: tmp28 };
              const tmp35 = closure_12(metroRequire, obj11);
              cResult[19] = tmp28;
              cResult[20] = tmp21;
              cResult[21] = tmp35;
              tmp32 = tmp35;
            }
            const obj12 = { style: tmp23, children: tmp24 };
            const tmp31 = closure_12(metroRequire, obj12);
            cResult[16] = tmp23;
            cResult[17] = tmp24;
            cResult[18] = tmp31;
            tmp28 = tmp31;
          }
          const items4 = [tmp4.iconContainer, tmp22];
          cResult[11] = tmp4.iconContainer;
          cResult[12] = tmp22;
          cResult[13] = items4;
          tmp23 = items4;
        }
      }
      const obj13 = { isAdult: tmp10, email };
      const headerResult = React4[failureCode].header(obj13);
      const descriptionResult = React4[failureCode].description(obj13);
      cResult[4] = React4[failureCode];
      cResult[5] = tmp10;
      cResult[6] = email;
      cResult[7] = headerResult;
      cResult[8] = descriptionResult;
      tmp17 = descriptionResult;
      tmp16 = headerResult;
    }
  : (failureCode) => {
      let Button;
      let currentUser;
      let email;
      let intl;
      let items1;
      let items3;
      let items4;
      let obj14;
      let obj6;
      let tmp15Result;
      failureCode = failureCode.failureCode;
      const tmp = closure_19();
      const items = [UserStore];
      const obj = useStateFromStores;
      const stateFromStores = obj.useStateFromStores(items, () => currentUser.getCurrentUser());
      const tmp6 = useIsInAdultAgeGroupDefault();
      const obj2 = native;
      const boxShadowStyle = obj2.generateBoxShadowStyle(native.FOUR_DP_ELEVATION_SHADOW_PARAMS);
      const callback = react.useCallback(() => {
        const arr = ModalActionCreatorsDefault;
        arr.pop();
      }, []);
      _modDef38(null != stateFromStores, "User must be logged in to see this modal.");
      const obj4 = { isAdult: tmp6, email };
      email = stateFromStores.email;
      const icon = obj3.icon;
      const CHECK = unpackModuleId.CHECK;
      const headerResult = React4[failureCode].header(obj4);
      const descriptionResult = React4[failureCode].description(obj4);
      const ModalScreen = ModalScreen2.ModalScreen;
      const obj5 = { style: items1, children: closure_12(metroRequire, obj6) };
      items1 = [tmp.ring, boxShadowStyle];
      const items2 = [tmp.iconContainer];
      obj6 = { style: items2, children: tmp15Result };
      items2[1] = icon === CHECK ? tmp.positive : tmp.negative;
      const ModalContent = ModalContent2.ModalContent;
      if (icon === unpackModuleId.CHECK) {
        const obj7 = { source: AssetRegistryDefault2, color: "#FFF" };
        const Icon2 = native.Icon;
        tmp15Result = closure_12(Icon2, obj7);
      } else {
        const obj8 = { source: AssetRegistryDefault, color: "#FFF" };
        const Icon = native.Icon;
        tmp15Result = closure_12(Icon, obj8);
      }
      const obj10 = { children: items3 };
      const obj9 = { children: items4 };
      items3 = [closure_12(metroRequire, obj5), ,];
      const obj11 = {
        variant: "heading-lg/bold",
        color: "mobile-text-heading-primary",
        style: tmp.header,
        children: headerResult,
      };
      items3[1] = closure_12(Text_Text.Text, obj11);
      const obj12 = {
        variant: "text-sm/medium",
        color: "text-muted",
        style: tmp.description,
        children: descriptionResult,
      };
      items3[2] = closure_12(Text_Text.Text, obj12);
      items4 = [map1(ModalContent, obj10)];
      const obj13 = { children: closure_12(Button, obj14) };
      const ModalFooter = ModalFooter2.ModalFooter;
      obj14 = { text: intl.string(intl8.t.cpT0Cq), onPress: callback };
      Button = components_Button_Button.Button;
      intl = intl8.intl;
      items4[1] = closure_12(ModalFooter, obj13);
      return map1(ModalScreen, obj9);
    };
let closure_20 = tmp10;
createStyles = createStyles_mod;
let closure_21 = createStyles.createStyles({ container: { flex: 1, justifyContent: "center", alignItems: "center" } });
createStyles = createStyles_mod;
let obj14 = {
  content: { flex: 1, flexDirection: "column", alignItems: "center", justifyContent: "center", paddingHorizontal: 32 },
  title: obj15,
  description: { textAlign: "center" },
};
obj15 = { textAlign: "center", marginBottom: nativeDefault.space.PX_8 };
let closure_23 = createStyles.createStyles(obj14);
ReactCompilerGating = ReactCompilerGating_mod;
let closure_24 = ReactCompilerGating.isReactCompilerEnabled()
  ? function FamilyCenterPrereqScreen(arg0) {
      let description;
      let items;
      let items1;
      let obj4;
      let primaryButton;
      let title;
      const obj = react2;
      const cResult = obj.c(16);
      ({ title, description, primaryButton } = arg0);
      const tmp4 = closure_23();
      if (cResult[0] === tmp4.title) {
        let tmp5;
        if (cResult[1] === title) {
          tmp5 = cResult[2];
        }
        if (cResult[3] === description) {
          let tmp7;
          if (cResult[4] === tmp4.description) {
            tmp7 = cResult[5];
          }
          if (cResult[6] === tmp4.content) {
            if (cResult[7] === tmp5) {
              let tmp10;
              if (cResult[8] === tmp7) {
                tmp10 = cResult[9];
              }
              if (cResult[10] === primaryButton.onPress) {
                let tmp14;
                if (cResult[11] === primaryButton.text) {
                  tmp14 = cResult[12];
                }
                if (cResult[13] === tmp10) {
                  let tmp17;
                  if (cResult[14] === tmp14) {
                    tmp17 = cResult[15];
                  }
                  return tmp17;
                }
                const obj2 = { children: items };
                items = [tmp10, tmp14];
                const tmp19 = map1(ModalScreen2.ModalScreen, obj2);
                cResult[13] = tmp10;
                cResult[14] = tmp14;
                cResult[15] = tmp19;
                tmp17 = tmp19;
              }
              const obj3 = { children: closure_12(components_Button_Button.Button, obj4) };
              const ModalFooter = ModalFooter2.ModalFooter;
              obj4 = { text: null, onPress: null };
              ({ text: obj6.text, onPress: obj6.onPress } = primaryButton);
              const tmp16 = closure_12(ModalFooter, obj3);
              cResult[10] = primaryButton.onPress;
              cResult[11] = primaryButton.text;
              cResult[12] = tmp16;
              tmp14 = tmp16;
            }
          }
          const obj5 = { style: tmp4.content, children: items1 };
          items1 = [tmp5, tmp7];
          const tmp13 = map1(metroRequire, obj5);
          cResult[6] = tmp4.content;
          cResult[7] = tmp5;
          cResult[8] = tmp7;
          cResult[9] = tmp13;
          tmp10 = tmp13;
        }
        const obj7 = { variant: "text-sm/medium", color: "text-muted", style: tmp4.description, children: description };
        const tmp9 = closure_12(Text_Text.Text, obj7);
        cResult[3] = description;
        cResult[4] = tmp4.description;
        cResult[5] = tmp9;
        tmp7 = tmp9;
      }
      const obj13 = {
        variant: "heading-xl/bold",
        color: "mobile-text-heading-primary",
        style: tmp4.title,
        children: title,
      };
      const tmp6 = closure_12(Text_Text.Text, obj13);
      cResult[0] = tmp4.title;
      cResult[1] = title;
      cResult[2] = tmp6;
      tmp5 = tmp6;
    }
  : function FamilyCenterPrereqScreen(primaryButton) {
      let description;
      let items;
      let items1;
      let obj6;
      let title;
      primaryButton = primaryButton.primaryButton;
      ({ title, description } = primaryButton);
      const tmp = closure_23();
      const obj = { children: items1 };
      const obj2 = { style: tmp.content, children: items };
      const ModalScreen = ModalScreen2.ModalScreen;
      items = [,];
      const obj3 = {
        variant: "heading-xl/bold",
        color: "mobile-text-heading-primary",
        style: tmp.title,
        children: title,
      };
      items[0] = closure_12(Text_Text.Text, obj3);
      const obj4 = { variant: "text-sm/medium", color: "text-muted", style: tmp.description, children: description };
      items[1] = closure_12(Text_Text.Text, obj4);
      items1 = [map1(metroRequire, obj2)];
      const obj5 = { children: closure_12(components_Button_Button.Button, obj6) };
      const ModalFooter = ModalFooter2.ModalFooter;
      obj6 = { text: primaryButton.text, onPress: primaryButton.onPress };
      items1[1] = closure_12(ModalFooter, obj5);
      return map1(ModalScreen, obj);
    };
createStyles = createStyles_mod;
let obj16 = {
  content: { flex: 1, flexDirection: "column", alignItems: "center", justifyContent: "center", paddingHorizontal: 32 },
  art: obj17,
  title: obj18,
  description: { textAlign: "center" },
};
obj17 = { marginBottom: nativeDefault.space.PX_24 };
const createStyles4 = createStyles.createStyles;
obj18 = { textAlign: "center", marginBottom: nativeDefault.space.PX_8 };
let closure_25 = createStyles4(obj16);
ReactCompilerGating = ReactCompilerGating_mod;
let closure_26 = ReactCompilerGating.isReactCompilerEnabled()
  ? function useNavigateToVerifyingOnPending() {
      let closure_2;
      let tmp5;
      let tmp6;
      let tmp2 = dependencyMap;
      const tmp = navigation;
      const obj = navigation(576);
      const cResult = obj.c(7);
      const obj2 = navigation(1490);
      navigation = obj2.useNavigation();
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
      const tmpResult = tmp(573);
      const stateFromStores = tmpResult.useStateFromStores(tmp5, tmp6);
      const tmp9 = stateFromStores(7957)(stateFromStores);
      dependencyMap = tmp9;
      if (cResult[2] === stateFromStores) {
        if (cResult[3] === navigation) {
          let tmp10;
          let tmp11;
          if (cResult[4] === tmp9) {
            tmp10 = cResult[5];
            tmp11 = cResult[6];
          }
          const effect = react.useEffect(tmp10, tmp11);
        }
      }
      const fn2 = function u() {
        const tmp2 =
          null != closure_2 &&
          tmp !== stateFromStores &&
          null != stateFromStores &&
          stateFromStores !== Server.AgeVerificationStatusUkAndAusOnly.UNVERIFIED;
        if (tmp2) {
          const replaced = navigation.replace(
            FamilyCenterModalRequestRouting.FamilyCenterModalRequestSections.VERIFYING,
          );
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
    }
  : function useNavigateToVerifyingOnPending() {
      let closure_2;
      const obj = navigation(1490);
      navigation = obj.useNavigation();
      const items = [UserStore];
      const obj2 = navigation(573);
      const stateFromStores = obj2.useStateFromStores(items, () => {
        currentUser = currentUser.getCurrentUser();
        let prop;
        if (currentUser != null) {
          prop = currentUser.ageVerificationStatus;
        }
        return prop;
      });
      const tmp3 = stateFromStores(7957)(stateFromStores);
      dependencyMap = tmp3;
      const items1 = [stateFromStores, tmp3, navigation];
      const effect = react.useEffect(() => {
        const tmp2 =
          null != closure_2 &&
          tmp !== stateFromStores &&
          null != stateFromStores &&
          stateFromStores !== Server.AgeVerificationStatusUkAndAusOnly.UNVERIFIED;
        if (tmp2) {
          const replaced = navigation.replace(
            FamilyCenterModalRequestRouting.FamilyCenterModalRequestSections.VERIFYING,
          );
        }
      }, items1);
    };
ReactCompilerGating = ReactCompilerGating_mod;
let closure_27 = ReactCompilerGating.isReactCompilerEnabled()
  ? function FamilyCenterConfirmAgeScreen(teenIdentity) {
      let ButtonGroup;
      let first;
      let intl3;
      let intl4;
      let items;
      let items1;
      let items2;
      let obj6;
      let tmp10;
      let tmp7;
      let obj = react2;
      const cResult = obj.c(22);
      teenIdentity = teenIdentity.teenIdentity;
      const tmp4 = closure_25();
      closure_26();
      if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
        const fn = function n() {
          const obj = AgeVerificationActionCreatorsDefault;
          const obj2 = {
            entryPoint: require("AgeVerificationAnalyticsUtils").AgeVerificationModalEntryPoint
              .FAMILY_CENTER_CONNECTION,
          };
          const result = obj.showAgeVerificationGetStartedModal(obj2);
        };
        cResult[0] = fn;
        first = fn;
      } else {
        first = cResult[0];
      }
      const content = tmp4.content;
      if (cResult[1] === Symbol.for("react.memo_cache_sentinel")) {
        const tmp9 = closure_12(FamilyShieldSpotIllustration.FamilyShieldSpotIllustration, {});
        cResult[1] = tmp9;
        tmp7 = tmp9;
      } else {
        tmp7 = cResult[1];
      }
      if (cResult[2] !== tmp4.art) {
        let obj2 = { style: tmp4.art, children: tmp7 };
        const tmp13 = closure_12(metroRequire, obj2);
        cResult[2] = tmp4.art;
        cResult[3] = tmp13;
        tmp10 = tmp13;
      } else {
        tmp10 = cResult[3];
      }
      let global_name;
      const title = tmp4.title;
      const tmp14 = cResult[4];
      if (teenIdentity != null) {
        global_name = teenIdentity.global_name;
      }
      if (tmp14 === global_name) {
        let tmp18;
        let username;
        const tmp16 = cResult[5];
        if (teenIdentity != null) {
          username = teenIdentity.username;
        }
        if (tmp16 === username) {
          tmp18 = cResult[6];
        }
        if (cResult[7] === tmp4.title) {
          let tmp23;
          let tmp26;
          let tmp29;
          if (cResult[8] === tmp18) {
            tmp23 = cResult[9];
          }
          const _Symbol = Symbol;
          const description = tmp4.description;
          if (cResult[10] === Symbol.for("react.memo_cache_sentinel")) {
            const intl2 = intl8.intl;
            const formatResult = intl2.format(_modDef2521["0o3yg8"], {
              link: "https://support.discord.com/hc/articles/14155060633623",
            });
            cResult[10] = formatResult;
            tmp26 = formatResult;
          } else {
            tmp26 = cResult[10];
          }
          if (cResult[11] !== tmp4.description) {
            const obj3 = { variant: "text-sm/medium", color: "text-muted", style: description, children: tmp26 };
            const tmp31 = closure_12(Text_Text.Text, obj3);
            cResult[11] = tmp4.description;
            cResult[12] = tmp31;
            tmp29 = tmp31;
          } else {
            tmp29 = cResult[12];
          }
          if (cResult[13] === tmp4.content) {
            if (cResult[14] === tmp29) {
              if (cResult[15] === tmp10) {
                let tmp32;
                let tmp36;
                let tmp40;
                let tmp44;
                if (cResult[16] === tmp23) {
                  tmp32 = cResult[17];
                }
                const _Symbol2 = Symbol;
                if (cResult[18] === Symbol.for("react.memo_cache_sentinel")) {
                  const obj4 = { variant: "primary", text: intl3.string(_modDef2521["3oUE4o"]), onPress: first };
                  const Button = components_Button_Button.Button;
                  intl3 = intl8.intl;
                  const tmp39 = closure_12(Button, obj4);
                  cResult[18] = tmp39;
                  tmp36 = tmp39;
                } else {
                  tmp36 = cResult[18];
                }
                const _Symbol3 = Symbol;
                if (cResult[19] === Symbol.for("react.memo_cache_sentinel")) {
                  const obj5 = { children: map1(ButtonGroup, obj6) };
                  const ModalFooter = ModalFooter2.ModalFooter;
                  obj6 = { children: items };
                  items = [tmp36];
                  ButtonGroup = ButtonGroup2.ButtonGroup;
                  const obj7 = {
                    variant: "tertiary",
                    text: intl4.string(intl8.t.oEAioF),
                    onPress() {
                      const arr = ModalActionCreatorsDefault;
                      return arr.pop();
                    },
                  };
                  const Button2 = components_Button_Button.Button;
                  intl4 = intl8.intl;
                  items[1] = closure_12(Button2, obj7);
                  const tmp43 = closure_12(ModalFooter, obj5);
                  cResult[19] = tmp43;
                  tmp40 = tmp43;
                } else {
                  tmp40 = cResult[19];
                }
                if (cResult[20] !== tmp32) {
                  const obj8 = { children: items1 };
                  items1 = [tmp32, tmp40];
                  const tmp46 = map1(ModalScreen2.ModalScreen, obj8);
                  cResult[20] = tmp32;
                  cResult[21] = tmp46;
                  tmp44 = tmp46;
                } else {
                  tmp44 = cResult[21];
                }
                return tmp44;
              }
            }
          }
          const obj9 = { style: content, children: items2 };
          items2 = [tmp10, tmp23, tmp29];
          const tmp35 = map1(metroRequire, obj9);
          cResult[13] = tmp4.content;
          cResult[14] = tmp29;
          cResult[15] = tmp10;
          cResult[16] = tmp23;
          cResult[17] = tmp35;
          tmp32 = tmp35;
        }
        const obj10 = {
          variant: "heading-xl/bold",
          color: "mobile-text-heading-primary",
          style: title,
          children: tmp18,
        };
        const tmp25 = closure_12(Text_Text.Text, obj10);
        cResult[7] = tmp4.title;
        cResult[8] = tmp18;
        cResult[9] = tmp25;
        tmp23 = tmp25;
      }
      const intl = intl8.intl;
      const formatToPlainString = intl.formatToPlainString;
      let str;
      const pQQMJ7 = _modDef2521.pQQMJ7;
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
      const formatToPlainStringResult = formatToPlainString(pQQMJ7, { username: str });
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
      tmp18 = formatToPlainStringResult;
    }
  : function FamilyCenterConfirmAgeScreen(teenIdentity) {
      let ButtonGroup;
      let formatToPlainString;
      let intl2;
      let intl3;
      let intl4;
      let items;
      let items1;
      let items2;
      let obj7;
      let pQQMJ7;
      let str;
      teenIdentity = teenIdentity.teenIdentity;
      const tmp = closure_25();
      closure_26();
      const callback = react.useCallback(() => {
        const obj = AgeVerificationActionCreatorsDefault;
        const obj2 = {
          entryPoint: require("AgeVerificationAnalyticsUtils").AgeVerificationModalEntryPoint.FAMILY_CENTER_CONNECTION,
        };
        const result = obj.showAgeVerificationGetStartedModal(obj2);
      }, []);
      let obj = { style: tmp.content, children: items };
      let obj2 = {
        style: tmp.art,
        children: closure_12(FamilyShieldSpotIllustration.FamilyShieldSpotIllustration, {}),
      };
      const ModalScreen = ModalScreen2.ModalScreen;
      items = [closure_12(metroRequire, obj2), ,];
      const obj3 = {
        variant: "heading-xl/bold",
        color: "mobile-text-heading-primary",
        style: tmp.title,
        children: formatToPlainString(pQQMJ7, { username: str }),
      };
      const Text = Text_Text.Text;
      const intl = intl8.intl;
      formatToPlainString = intl.formatToPlainString;
      str = undefined;
      pQQMJ7 = _modDef2521.pQQMJ7;
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
      const obj4 = { children: items1 };
      items[1] = closure_12(Text, obj3);
      const obj5 = {
        variant: "text-sm/medium",
        color: "text-muted",
        style: tmp.description,
        children: intl2.format(_modDef2521["0o3yg8"], {
          link: "https://support.discord.com/hc/articles/14155060633623",
        }),
      };
      const Text2 = Text_Text.Text;
      intl2 = intl8.intl;
      items[2] = closure_12(Text2, obj5);
      items1 = [map1(metroRequire, obj)];
      const obj6 = { children: map1(ButtonGroup, obj7) };
      const ModalFooter = ModalFooter2.ModalFooter;
      obj7 = { children: items2 };
      ButtonGroup = ButtonGroup2.ButtonGroup;
      const obj8 = { variant: "primary", text: intl3.string(_modDef2521["3oUE4o"]), onPress: callback };
      const Button = components_Button_Button.Button;
      intl3 = intl8.intl;
      items2 = [closure_12(Button, obj8)];
      const obj9 = {
        variant: "tertiary",
        text: intl4.string(intl8.t.oEAioF),
        onPress() {
          const arr = ModalActionCreatorsDefault;
          return arr.pop();
        },
      };
      const Button2 = components_Button_Button.Button;
      intl4 = intl8.intl;
      items2[1] = closure_12(Button2, obj9);
      items1[1] = closure_12(ModalFooter, obj6);
      return map1(ModalScreen, obj4);
    };
ReactCompilerGating = ReactCompilerGating_mod;
let closure_28 = ReactCompilerGating.isReactCompilerEnabled()
  ? function FamilyCenterVerifyingScreen() {
      let obj6;
      let stateFromStores;
      let tmp7;
      let tmp8;
      let obj = navigation(stateFromStores[9]);
      const cResult = obj.c(13);
      const tmp4 = closure_21();
      const obj2 = navigation(stateFromStores[10]);
      navigation = obj2.useNavigation();
      const obj3 = navigation(stateFromStores[40]);
      const isAgeVerified = obj3.useIsAgeVerified();
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
        tmp7 = items;
        tmp8 = fn;
      } else {
        [tmp7, tmp8] = cResult;
      }
      const tmpResult = navigation(stateFromStores[11]);
      stateFromStores = tmpResult.useStateFromStores(tmp7, tmp8);
      ref = react.useRef(false);
      if (cResult[2] === stateFromStores) {
        if (cResult[3] === isAgeVerified) {
          let tmp11;
          let tmp12;
          let tmp15;
          let tmp17;
          let tmp19;
          if (cResult[4] === navigation) {
            tmp11 = cResult[5];
            tmp12 = cResult[6];
          }
          const effect = react.useEffect(tmp11, tmp12);
          if (cResult[7] !== navigation) {
            class E {
              constructor() {
                closure_0 = setTimeout(() => {
                  const obj = { failureCode: constants.GENERIC_ERROR };
                  const replaced = closure_0.replace(
                    navigation(stateFromStores[13]).FamilyCenterModalRequestSections.ERROR,
                    obj,
                  );
                }, closure_1_8);
                return () => clearTimeout(closure_0);
              }
            }
            const items1 = [navigation];
            cResult[7] = navigation;
            cResult[8] = E;
            cResult[9] = items1;
            tmp15 = items1;
          } else {
            class E {
              constructor() {
                closure_0 = setTimeout(() => {
                  const obj = { failureCode: constants.GENERIC_ERROR };
                  const replaced = closure_0.replace(
                    navigation(stateFromStores[13]).FamilyCenterModalRequestSections.ERROR,
                    obj,
                  );
                }, closure_1_8);
                return () => clearTimeout(closure_0);
              }
            }
            tmp15 = cResult[9];
          }
          const effect1 = react.useEffect(E, tmp15);
          const _Symbol = Symbol;
          if (cResult[10] === Symbol.for("react.memo_cache_sentinel")) {
            class E {
              constructor() {
                closure_0 = setTimeout(() => {
                  const obj = { failureCode: constants.GENERIC_ERROR };
                  const replaced = closure_0.replace(
                    navigation(stateFromStores[13]).FamilyCenterModalRequestSections.ERROR,
                    obj,
                  );
                }, closure_1_8);
                return () => clearTimeout(closure_0);
              }
            }
            const tmp18 = closure_12(navigation(stateFromStores[34]).ActivityIndicator, {});
            cResult[10] = tmp18;
            tmp17 = tmp18;
          } else {
            class E {
              constructor() {
                closure_0 = setTimeout(() => {
                  const obj = { failureCode: constants.GENERIC_ERROR };
                  const replaced = closure_0.replace(
                    navigation(stateFromStores[13]).FamilyCenterModalRequestSections.ERROR,
                    obj,
                  );
                }, closure_1_8);
                return () => clearTimeout(closure_0);
              }
            }
          }
          if (cResult[11] !== tmp4.container) {
            class E {
              constructor() {
                closure_0 = setTimeout(() => {
                  const obj = { failureCode: constants.GENERIC_ERROR };
                  const replaced = closure_0.replace(
                    navigation(stateFromStores[13]).FamilyCenterModalRequestSections.ERROR,
                    obj,
                  );
                }, closure_1_8);
                return () => clearTimeout(closure_0);
              }
            }
            const obj4 = { children: closure_12(closure_6, obj6) };
            obj6 = { style: tmp4.container, children: tmp17 };
            const ModalScreen = tmp(tmp2[28]).ModalScreen;
            const tmp21 = closure_12(ModalScreen, obj4);
            cResult[11] = tmp4.container;
            cResult[12] = tmp21;
            tmp19 = tmp21;
          } else {
            class E {
              constructor() {
                closure_0 = setTimeout(() => {
                  const obj = { failureCode: constants.GENERIC_ERROR };
                  const replaced = closure_0.replace(
                    navigation(stateFromStores[13]).FamilyCenterModalRequestSections.ERROR,
                    obj,
                  );
                }, closure_1_8);
                return () => clearTimeout(closure_0);
              }
            }
          }
          return tmp19;
        }
      }
      class S {
        constructor() {
          if (isAgeVerified) {
            if (!ref.current) {
              tmp10.current = true;
              const replaced = navigation.replace(
                FamilyCenterModalRequestRouting.FamilyCenterModalRequestSections.PREREQ_LOADING,
              );
            }
          } else if (stateFromStores === Server.AgeVerificationStatusUkAndAusOnly.UNVERIFIED) {
            const obj = { failureCode: constants.GENERIC_ERROR };
            const replaced1 = navigation.replace(
              FamilyCenterModalRequestRouting.FamilyCenterModalRequestSections.ERROR,
              obj,
            );
          }
        }
      }
      const items2 = [isAgeVerified, stateFromStores, navigation];
      cResult[2] = stateFromStores;
      cResult[3] = isAgeVerified;
      cResult[4] = navigation;
      cResult[5] = S;
      cResult[6] = items2;
      tmp12 = items2;
      tmp11 = S;
    }
  : function FamilyCenterVerifyingScreen() {
      let obj5;
      let stateFromStores;
      const tmp = closure_21();
      let obj = navigation(stateFromStores[10]);
      navigation = obj.useNavigation();
      const obj2 = navigation(stateFromStores[40]);
      const isAgeVerified = obj2.useIsAgeVerified();
      const items = [UserStore];
      const obj3 = navigation(stateFromStores[11]);
      stateFromStores = obj3.useStateFromStores(items, () => {
        currentUser = currentUser.getCurrentUser();
        let prop;
        if (currentUser != null) {
          prop = currentUser.ageVerificationStatus;
        }
        return prop;
      });
      ref = react.useRef(false);
      const items1 = [isAgeVerified, stateFromStores, navigation];
      const effect = react.useEffect(() => {
        if (isAgeVerified) {
          if (!ref.current) {
            tmp10.current = true;
            const replaced = navigation.replace(
              FamilyCenterModalRequestRouting.FamilyCenterModalRequestSections.PREREQ_LOADING,
            );
          }
        } else if (stateFromStores === Server.AgeVerificationStatusUkAndAusOnly.UNVERIFIED) {
          const obj = { failureCode: constants.GENERIC_ERROR };
          const replaced1 = navigation.replace(
            FamilyCenterModalRequestRouting.FamilyCenterModalRequestSections.ERROR,
            obj,
          );
        }
      }, items1);
      const items2 = [navigation];
      const effect1 = react.useEffect(() => {
        let closure_0;
        const timeout = setTimeout(() => {
          const obj = { failureCode: constants.GENERIC_ERROR };
          const replaced = closure_0.replace(
            navigation(stateFromStores[13]).FamilyCenterModalRequestSections.ERROR,
            obj,
          );
        }, closure_1_8);
        return () => clearTimeout(closure_0);
      }, items2);
      const obj4 = { children: closure_12(closure_6, obj5) };
      obj5 = { style: tmp.container, children: closure_12(navigation(stateFromStores[34]).ActivityIndicator, {}) };
      const ModalScreen = navigation(stateFromStores[28]).ModalScreen;
      return closure_12(ModalScreen, obj4);
    };
ReactCompilerGating = ReactCompilerGating_mod;
let closure_29 = ReactCompilerGating.isReactCompilerEnabled()
  ? function FamilyCenterPrereqInvalidCodeScreen() {
      let first;
      let intl;
      let intl2;
      let intl3;
      let obj3;
      const obj = react2;
      const cResult = obj.c(1);
      if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
        const obj2 = {
          title: intl.string(_modDef2521.ewSb6o),
          description: intl2.string(_modDef2521.jcUN2F),
          primaryButton: obj3,
        };
        intl = intl8.intl;
        intl2 = intl8.intl;
        obj3 = { text: intl3.string(intl8.t.WAI6xu), onPress: ModalActionCreatorsDefault.pop };
        intl3 = intl8.intl;
        const tmp8 = closure_12(closure_24, obj2);
        cResult[0] = tmp8;
        first = tmp8;
      } else {
        first = cResult[0];
      }
      return first;
    }
  : function FamilyCenterPrereqInvalidCodeScreen() {
      let intl;
      let intl2;
      let intl3;
      let obj2;
      const obj = {
        title: intl.string(_modDef2521.ewSb6o),
        description: intl2.string(_modDef2521.jcUN2F),
        primaryButton: obj2,
      };
      intl = intl8.intl;
      intl2 = intl8.intl;
      obj2 = { text: intl3.string(intl8.t.WAI6xu), onPress: ModalActionCreatorsDefault.pop };
      intl3 = intl8.intl;
      return closure_12(closure_24, obj);
    };
ReactCompilerGating = ReactCompilerGating_mod;
let closure_30 = ReactCompilerGating.isReactCompilerEnabled()
  ? function FamilyCenterPrereqMustBeAdultScreen() {
      let first;
      let intl;
      let intl2;
      let intl3;
      let obj3;
      let obj4;
      let obj5;
      let tmp6;
      let obj = react2;
      const cResult = obj.c(2);
      closure_26();
      if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
        const fn = function t() {
          const obj = AgeVerificationActionCreatorsDefault;
          const obj2 = {
            entryPoint: require("AgeVerificationAnalyticsUtils").AgeVerificationModalEntryPoint
              .FAMILY_CENTER_CONNECTION,
          };
          const result = obj.showAgeVerificationGetStartedModal(obj2);
        };
        cResult[0] = fn;
        first = fn;
      } else {
        first = cResult[0];
      }
      if (cResult[1] === Symbol.for("react.memo_cache_sentinel")) {
        let obj2 = {
          title: intl.string(_modDef2521.BQFHXW),
          description: intl2.format(_modDef2521.WDjaKn, obj3),
          primaryButton: obj5,
        };
        intl = intl8.intl;
        intl2 = intl8.intl;
        obj3 = { link: obj4 };
        obj4 = { onClick: first };
        obj5 = { text: intl3.string(intl8.t["NX+WJN"]), onPress: ModalActionCreatorsDefault.pop };
        intl3 = intl8.intl;
        const tmp10 = closure_12(closure_24, obj2);
        cResult[1] = tmp10;
        tmp6 = tmp10;
      } else {
        tmp6 = cResult[1];
      }
      return tmp6;
    }
  : function FamilyCenterPrereqMustBeAdultScreen() {
      let intl;
      let intl2;
      let intl3;
      let obj2;
      let obj3;
      closure_26();
      let obj = {
        title: intl.string(_modDef2521.BQFHXW),
        description: intl2.format(_modDef2521.WDjaKn, obj2),
        primaryButton: obj3,
      };
      const callback = react.useCallback(() => {
        const obj = AgeVerificationActionCreatorsDefault;
        const obj2 = {
          entryPoint: require("AgeVerificationAnalyticsUtils").AgeVerificationModalEntryPoint.FAMILY_CENTER_CONNECTION,
        };
        const result = obj.showAgeVerificationGetStartedModal(obj2);
      }, []);
      intl = intl8.intl;
      intl2 = intl8.intl;
      obj2 = { link: { onClick: callback } };
      obj3 = { text: intl3.string(intl8.t["NX+WJN"]), onPress: ModalActionCreatorsDefault.pop };
      intl3 = intl8.intl;
      return closure_12(closure_24, obj);
    };
let obj19 = {
  headerShown: true,
  headerLeft: NavigatorHeader.getHeaderCloseButton(ModalActionCreatorsDefault.pop),
  headerTitle() {
    return null;
  },
};
NavigatorHeader = NavigatorHeader_mod;
ReactCompilerGating = ReactCompilerGating_mod;
let tmp12 = ReactCompilerGating.isReactCompilerEnabled()
  ? function FamilyCenterRequestModal(arg0) {
      let linkCode;
      let userId;
      const obj = react2;
      const cResult = obj.c(6);
      ({ userId, linkCode } = arg0);
      if (cResult[0] === linkCode) {
        let tmp4;
        let tmp7;
        let tmp9;
        if (cResult[1] === userId) {
          tmp4 = cResult[2];
        }
        const _Symbol = Symbol;
        if (cResult[3] === Symbol.for("react.memo_cache_sentinel")) {
          const intl = intl8.intl;
          const stringResult = intl.string(intl8.t["13/7kX"]);
          cResult[3] = stringResult;
          tmp7 = stringResult;
        } else {
          tmp7 = cResult[3];
        }
        if (cResult[4] !== tmp4) {
          const obj2 = {
            initialRouteName: FamilyCenterModalRequestRouting.FamilyCenterModalRequestSections.PREREQ_LOADING,
            screens: tmp4,
            headerBackTitle: tmp7,
          };
          const Modal = Modal2.Modal;
          const tmp11 = closure_12(Modal, obj2);
          cResult[4] = tmp4;
          cResult[5] = tmp11;
          tmp9 = tmp11;
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
    }
  : function FamilyCenterRequestModal(userId) {
      let intl;
      userId = userId.userId;
      const linkCode = userId.linkCode;
      const items = [linkCode, userId];
      const memo = react.useMemo(() => getScreens(userId, linkCode), items);
      const obj = {
        initialRouteName: userId(11540).FamilyCenterModalRequestSections.PREREQ_LOADING,
        screens: memo,
        headerBackTitle: intl.string(userId(1126).t["13/7kX"]),
      };
      const Modal = userId(10989).Modal;
      intl = userId(1126).intl;
      return closure_12(Modal, obj);
    };
size = size_mod;
let result = size.fileFinishedImporting("modules/parent_tools/native/FamilyCenterModalRequest.tsx");

export default tmp12;
export const FamilyCenterModalRequestConfirm = tmp6;
export const FamilyCenterModalRequestSuccess = tmp8;
export const FamilyCenterModalRequestError = tmp10;
