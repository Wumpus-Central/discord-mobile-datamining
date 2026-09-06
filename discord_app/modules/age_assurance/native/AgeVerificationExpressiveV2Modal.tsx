// discord_app/modules/age_assurance/native/AgeVerificationExpressiveV2Modal.tsx
import nativeDefault from "../../../../discord_common/js/packages/tokens/native.tsx";
import HelpdeskUtilsDefault from "../../../utils/HelpdeskUtils.tsx";
import NavigatorHeader from "../../../design/components/Navigator/native/NavigatorHeader.native.tsx";
import AgeVerificationActionCreatorsDefault from "../AgeVerificationActionCreators.native.tsx";
import AgeVerificationAnalyticsUtils from "../AgeVerificationAnalyticsUtils.tsx";
import AgeVerificationCustomTab from "AgeVerificationCustomTab.tsx";
import asyncGeneratorStep from "../../../../_runtime/00005_asyncGeneratorStep.js";
import _slicedToArray from "../../../../_runtime/metro/00032__.js";
import noop from "../../../../_runtime/metro/00019__.js";

require = fn;
function MethodsScreen(onClose) {
  ({ entryPoint, navigation } = onClose);
  _require = navigation;
  onClose = onClose.onClose;
  const modalSessionId = onClose.modalSessionId;
  methods = undefined;
  let first;
  let onComplete;
  c11 = undefined;
  c12 = undefined;
  let tmp = c11();
  let obj = require("ShowExpressiveModalSubtitleAltFlag");
  const shouldShowExpressiveModalSubtitleAlt = obj.useShouldShowExpressiveModalSubtitleAlt(
    "age_verification_expressive_v2_modal",
  );
  let obj1 = require("useAgeVerificationMethodsV2");
  const ageVerificationMethodsV2 = obj1.useAgeVerificationMethodsV2();
  ({ loading, methods } = ageVerificationMethodsV2);
  ({ footerMessage, outageBannerMessage, refetch } = ageVerificationMethodsV2);
  const tmp6 = methods(first.useState(false), 2);
  first = tmp6[0];
  closure_6 = tmp6[1];
  const effect = first.useEffect(() => {
    c0 = false;
    const result = closure_0(onComplete[17]).checkGoogleWalletAvailable();
    result.then((result) => {
      if (!c0) {
        closure_6(result);
      }
    });
    return () => {
      c0 = true;
    };
  }, []);
  const memo = first.useMemo(() => {
    let isIOSResult = closure_0(onComplete[11]).isIOS();
    if (isIOSResult) {
      isIOSResult = closure_0(onComplete[18]).isAppStoreAgeSignalSupported();
      const tmpResult = closure_0(onComplete[18]);
    }
    return isIOSResult;
  }, []);
  let items = [methods, first, memo];
  const memo1 = first.useMemo(
    () =>
      methods.filter((method) => {
        method = method.method;
        if (closure_0(onComplete[7]).AgeAssuranceMethod.GOOGLE_WALLET === method) {
          return first;
        } else if (tmp(tmp2[7]).AgeAssuranceMethod.OS_SIGNAL === method) {
          return memo;
        } else {
          return true;
        }
        tmp = closure_0;
        tmp2 = onComplete;
      }),
    items,
  );
  const items1 = [onComplete, onClose];
  onComplete = first.useCallback(() => {
    if (onComplete != null) {
      tmp();
    }
    onClose();
  }, items1);
  let obj2 = require("AgeVerificationUtils");
  const initiateAgeVerificationV2 = obj2.useInitiateAgeVerificationV2({
    onComplete,
    entryPoint,
    onMethodUnavailable: refetch,
  }).initiateAgeVerificationV2;
  closure_10 = first.useRef(false);
  [c11, c12] = methods(first.useState(null), 2);
  _require = modalSessionId((arg0, arg1) => {
    const navigation = arg0;
    closure_1 = arg1;
    c3 = 0;
    c6 = 0;
    c5 = 0;
    return (function* (arg0, value) {
      if (c6 === 2) {
        c6 = 3;
        throw new TypeError("Generator functions may not be called on executing generators");
      } else if (tmp6 === 3) {
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
          c6 = 2;
          if (0 === c3) {
            if (arg0 === 1) {
              c6 = 3;
              throw value;
            } else if (arg0 === 2) {
              c6 = 3;
              obj = { value, done: true };
              return obj;
            } else {
              closure_2 = tmp3;
              if (!ref.current) {
                let obj1 = navigation(onComplete[20]);
                const result = obj1.trackAgeVerificationModalClicked(
                  c3,
                  navigation(onComplete[20]).AgeVerificationModalVersion.EXPRESSIVE_V2,
                  navigation(onComplete[20]).AgeVerificationModalCta.METHOD_SELECT,
                  tmp48.method,
                );
                if (tmp48.method !== navigation(onComplete[7]).AgeAssuranceMethod.GOOGLE_WALLET) {
                  if (tmp48.method !== tmp22(tmp23[7]).AgeAssuranceMethod.OS_SIGNAL) {
                    let tmp22Result = tmp22(tmp23[21]);
                    const result1 = tmp22Result.releaseAgeVerificationCustomTab();
                    tmp22Result = tmp22(tmp23[22]);
                    const result2 = tmp22Result.closeAgeVerificationAuthSession();
                    ref.current = true;
                    closure_1_12(tmp49);
                    c5 = 1;
                    c3 = 2;
                    c6 = 1;
                    obj1 = { value: initiateAgeVerificationV2(tmp48), done: false };
                    return obj1;
                  } else {
                    navigation.navigate(c12.APP_STORE_VERIFICATION);
                  }
                } else {
                  navigation.navigate(c12.GOOGLE_WALLET_VERIFICATION);
                }
              }
              c6 = 3;
            }
          } else if (1 === tmp7) {
            c5 = 0;
            ref.current = false;
            closure_1_12(null);
            throw closure_4;
          } else if (arg0 === 1) {
            c6 = 3;
            throw value;
          } else if (arg0 !== 2) {
            c5 = 0;
            ref.current = false;
            closure_1_12(null);
          }
          c5 = 0;
          ref.current = false;
          closure_1_12(null);
          c6 = 3;
          obj = { value, done: true };
          return obj;
        } catch (tmp40) {
          closure_4 = tmp40;
          if (tmp4 === c5) {
            c6 = tmp2;
            throw tmp40;
          } else {
            c3 = tmp;
          }
        }
      }
    })();
  });
  const items2 = [navigation, initiateAgeVerificationV2, modalSessionId];
  closure_13 = first.useCallback(function () {
    const self = this;
    const apply = closure_0.apply;
    if (typeof apply === "unknown") {
      let applyArgumentsResult = HermesBuiltin.applyArguments(self);
    } else {
      applyArgumentsResult = apply(self, arguments);
    }
    return applyArgumentsResult;
  }, items2);
  let obj3 = require("AgeVerificationCustomTab");
  const isAgeVerificationCustomTabOpen = obj3.useIsAgeVerificationCustomTabOpen();
  let obj4 = require("AgeVerificationCustomTab");
  const items3 = [methods];
  const ageVerificationCustomTabCopy = obj4.useAgeVerificationCustomTabCopy();
  const memo2 = first.useMemo(() => {
    let externalWindow;
    const found = methods.find((externalWindow) => null != externalWindow.externalWindow);
    if (found != null) {
      externalWindow = found.externalWindow;
    }
    return externalWindow;
  }, items3);
  const effect1 = first.useEffect(() => {
    const result = closure_0(onComplete[21]).resumeAgeVerificationCustomTab();
  }, []);
  const items4 = [memo2];
  const effect2 = first.useEffect(() => {
    if (null != memo2) {
      const result = AgeVerificationCustomTab.setAgeVerificationCustomTabCopy(tmp);
    }
  }, items4);
  const items5 = [onComplete];
  const callback1 = first.useCallback(() => {
    if (obj.isAgeVerified()) {
      let tmpResult = tmp(8424);
      if (tmpResult.getIsAgeVerificationCustomTabAwaitingResult()) {
        tmpResult = tmp(8424);
        if (!tmpResult.getIsAgeVerificationCustomTabOpen()) {
          const result = tmp(8424).releaseAgeVerificationCustomTab();
          callback();
          const tmpResult1 = tmp(8424);
        }
      }
      let isAgeVerificationAuthSessionAwaitingResult = tmp(8425).getIsAgeVerificationAuthSessionAwaitingResult();
      if (isAgeVerificationAuthSessionAwaitingResult) {
        isAgeVerificationAuthSessionAwaitingResult = !tmp(8425).getIsAgeVerificationAuthSessionOpen();
        const tmpResult3 = tmp(8425);
      }
      if (isAgeVerificationAuthSessionAwaitingResult) {
        const result1 = tmp(8425).closeAgeVerificationAuthSession();
        callback();
        const tmpResult4 = tmp(8425);
      }
      const tmpResult2 = tmp(8425);
    }
  }, items5);
  let obj5 = require("AgeVerificationUtils");
  const watchAgeVerificationStatusChange = obj5.useWatchAgeVerificationStatusChange(callback1);
  let obj6 = require("AgeVerificationAuthSession");
  const isAgeVerificationAuthSessionOpen = obj6.useIsAgeVerificationAuthSessionOpen();
  first.useRef(isAgeVerificationCustomTabOpen);
  first.useRef(isAgeVerificationAuthSessionOpen);
  const items6 = [isAgeVerificationCustomTabOpen, callback1];
  const effect3 = first.useEffect(() => {
    let current = ref.current;
    if (current) {
      current = !isAgeVerificationCustomTabOpen;
    }
    if (current) {
      callback1();
    }
    ref.current = isAgeVerificationCustomTabOpen;
  }, items6);
  const items7 = [isAgeVerificationAuthSessionOpen, callback1];
  const effect4 = first.useEffect(() => {
    let current = ref2.current;
    if (current) {
      current = !isAgeVerificationAuthSessionOpen;
    }
    if (current) {
      callback1();
    }
    ref2.current = isAgeVerificationAuthSessionOpen;
  }, items7);
  if (isAgeVerificationCustomTabOpen) {
    obj = { copy: ageVerificationCustomTabCopy };
    let tmp23Result = tmp23(onClose(tmp3[23]), obj);
  } else {
    obj = { align: "stretch", spacing: 24, style: tmp.container, children: null };
    const items8 = [tmp23(tmp2(tmp3[27]).AgeVerificationSpotIllustration, { width: 150, height: 100 })];
    obj1 = {
      accessibilityRole: "header",
      variant: "heading-xl/bold",
      color: "mobile-text-heading-primary",
      children: null,
    };
    let tmp2Result = tmp2(tmp3[19]);
    obj1.children = tmp2Result.getAgeVerificationGetStartedTitle(entryPoint, true);
    const items9 = [tmp23(tmp2(tmp3[28]).Text, obj1)];
    obj2 = { variant: "text-md/medium", color: "text-subtle", style: tmp.header, children: null };
    tmp2Result = tmp2(tmp3[19]);
    let fn;
    if (shouldShowExpressiveModalSubtitleAlt) {
      fn = () => {
        AgeVerificationActionCreatorsDefault.openUrl(TRUSTED_PROVIDERS_URL);
        const result = AgeVerificationAnalyticsUtils.trackAgeVerificationModalClicked(
          modalSessionId,
          AgeVerificationAnalyticsUtils.AgeVerificationModalVersion.EXPRESSIVE_V2,
          AgeVerificationAnalyticsUtils.AgeVerificationModalCta.TRUSTED_PROVIDERS,
        );
      };
    }
    obj3 = { align: "center", justify: "center", spacing: 16, children: null };
    obj4 = { align: "center", justify: "center", spacing: 8, children: null };
    obj2.children = tmp2Result.getAgeVerificationGetStartedSubtitle(
      entryPoint,
      () => {
        const obj = AgeVerificationActionCreatorsDefault;
        obj.openUrl(HelpdeskUtilsDefault.getArticleURL(HelpdeskArticles.TIGGER_PAWTECT_LEARN_MORE));
        const result = AgeVerificationAnalyticsUtils.trackAgeVerificationModalClicked(
          modalSessionId,
          AgeVerificationAnalyticsUtils.AgeVerificationModalVersion.EXPRESSIVE_V2,
          AgeVerificationAnalyticsUtils.AgeVerificationModalCta.LEARN_MORE,
        );
      },
      undefined,
      fn,
      true,
    );
    items9[1] = tmp23(tmp2(tmp3[28]).Text, obj2);
    obj4.children = items9;
    items8[1] = closure_10(tmp2(tmp3[26]).Stack, obj4);
    obj3.children = items8;
    const items10 = [closure_10(tmp2(tmp3[26]).Stack, obj3), , ,];
    tmp23Result = loading;
    if (loading) {
      obj5 = {
        align: "center",
        justify: "center",
        style: tmp.loadingContainer,
        children: tmp23(closure_6, { size: "large" }),
      };
      tmp23Result = tmp23(tmp2(tmp3[26]).Stack, obj5);
    }
    items10[1] = tmp23Result;
    let tmp24Result = !loading;
    if (!loading) {
      let tmp23Result1 = null != outageBannerMessage;
      if (tmp23Result1) {
        obj6 = { messageType: tmp2(tmp3[31]).HelpMessageTypes.WARNING, children: outageBannerMessage };
        tmp23Result1 = tmp23(tmp2(tmp3[31]).HelpMessage, obj6);
      }
      const items11 = [tmp23Result1, ,];
      if (tmp10) {
        items11[1] = !tmp10;
        let tmp23Result2 = tmp10;
        if (tmp10) {
          const obj7 = {
            hasIcons: true,
            children: memo1.map((children) => {
              closure_0 = children;
              const method = children.method;
              if (closure_0(onComplete[7]).AgeAssuranceMethod.FACIAL_AGE_ESTIMATION === method) {
                let GoogleNeutralIcon = tmp(tmp2[8]).VideoSelfieIcon;
              } else if (tmp(tmp2[7]).AgeAssuranceMethod.ID_SELFIE_MATCH === method) {
                GoogleNeutralIcon = tmp(tmp2[9]).IdCardIcon;
              } else if (tmp(tmp2[7]).AgeAssuranceMethod.GOOGLE_WALLET === method) {
                GoogleNeutralIcon = tmp(tmp2[10]).GoogleNeutralIcon;
              } else if (tmp(tmp2[7]).AgeAssuranceMethod.OS_SIGNAL === method) {
                if (tmpResult.isIOS()) {
                  let GoogleNeutralIcon2 = tmp(tmp2[12]).AppleNeutralIcon;
                } else {
                  GoogleNeutralIcon2 = tmp(tmp2[10]).GoogleNeutralIcon;
                }
                GoogleNeutralIcon = GoogleNeutralIcon2;
                tmpResult = tmp(tmp2[11]);
              }
              if (null != GoogleNeutralIcon) {
                let obj = { IconComponent: GoogleNeutralIcon, variant: "secondary" };
                let tmp4 = initiateAgeVerificationV2(tmp(tmp2[36]).TableRow.Icon, obj);
                let tmp5 = initiateAgeVerificationV2;
              } else if (null != children.icon) {
                obj = { icon: children.icon };
                tmp4 = initiateAgeVerificationV2(onClose(tmp2[37]), obj);
                tmp5 = initiateAgeVerificationV2;
              } else {
                const obj1 = { IconComponent: tmp(tmp2[38]).UnknownGameIcon, variant: "secondary" };
                tmp4 = initiateAgeVerificationV2(tmp(tmp2[36]).TableRow.Icon, obj1);
                tmp5 = initiateAgeVerificationV2;
              }
              const combined = "" + children.method + "-" + children.vendor;
              if (c11 === combined) {
                let tmp5Result = tmp5(closure_6, {});
              } else {
                const obj2 = { size: "md", color: onClose(tmp2[14]).colors.INTERACTIVE_ICON_DEFAULT };
                tmp5Result = tmp5(tmp(tmp2[39]).ChevronSmallRightIcon, obj2);
              }
              const obj3 = {
                trailing: tmp5Result,
                disabled: null != c11,
                icon: tmp4,
                label: children.title,
                subLabel: null,
                onPress: null,
              };
              const items = [
                tmp5(closure_0(onComplete[28]).Text, {
                  variant: "text-sm/normal",
                  color: "text-muted",
                  children: children.description,
                }),
              ];
              tmp5Result = null != children.providedBy;
              if (tmp5Result) {
                const obj5 = { variant: "text-sm/normal", color: "text-muted", children: children.providedBy };
                tmp5Result = tmp5(tmp(tmp2[28]).Text, obj5);
              }
              items[1] = tmp5Result;
              obj3.subLabel = closure_10(closure_0(onComplete[26]).Stack, {
                direction: "vertical",
                spacing: 4,
                children: items,
              });
              obj3.onPress = function onPress() {
                return closure_13(closure_0, combined);
              };
              return tmp5(closure_0(onComplete[36]).TableRow, obj3, combined);
            }),
          };
          tmp23Result2 = tmp23(tmp2(tmp3[35]).TableRowGroup, obj7);
        }
        const obj8 = { direction: "vertical", spacing: 12, children: null };
        items11[2] = tmp23Result2;
        obj8.children = items11;
        tmp24Result = tmp24(tmp2(tmp3[26]).Stack, obj8);
      } else {
        const obj9 = { style: tmp.emptyContainer, children: null };
        let obj10 = { messageType: tmp2(tmp3[31]).HelpMessageTypes.ERROR, button: null, children: null };
        const obj11 = { variant: "primary", size: "sm", text: null, onPress: null };
        const intl = tmp2(tmp3[33]).intl;
        obj11.text = intl.string(onClose(tmp3[34]).hDvmYP);
        obj11.onPress = refetch;
        obj10.button = tmp23(tmp2(tmp3[32]).Button, obj11);
        const intl2 = tmp2(tmp3[33]).intl;
        const tmp33 = onClose(tmp3[34]);
        obj10.children = intl2.string(ageVerificationMethodsV2.error ? tmp33.Bkmk4Y : tmp33.cR6336);
        obj10 = tmp23(tmp2(tmp3[31]).HelpMessage, obj10);
        obj9.children = obj10;
        tmp23(tmp2(tmp3[26]).Stack, obj9);
      }
    }
    items10[2] = tmp24Result;
    let tmp23Result4 = !loading;
    if (!loading) {
      tmp23Result4 = tmp10;
    }
    if (tmp23Result4) {
      tmp23Result4 = null != footerMessage;
    }
    if (tmp23Result4) {
      const obj12 = { variant: "text-sm/normal", color: "text-subtle", style: tmp.footer, children: footerMessage };
      tmp23Result4 = tmp23(tmp2(tmp3[28]).Text, obj12);
    }
    const obj13 = { children: null };
    const obj14 = { children: null };
    items10[3] = tmp23Result4;
    obj.children = items10;
    obj14.children = closure_10(tmp2(tmp3[26]).Stack, obj);
    obj13.children = tmp23(tmp2(tmp3[25]).ModalContent, obj14);
    tmp23Result = tmp23(tmp2(tmp3[24]).ModalScreen, obj13);
  }
  return tmp23Result;
}
const ActivityIndicator = fn(17).ActivityIndicator;
const TRUSTED_PROVIDERS_URL = fn(8412).TRUSTED_PROVIDERS_URL;
const HelpdeskArticles = fn(1074).HelpdeskArticles;
const jsxProd = fn(21);
({ jsx: closure_9, jsxs: c10 } = jsxProd);
fn(4560);
let createStyles = {
  headerStyle: null,
  container: null,
  header: null,
  loadingContainer: null,
  emptyContainer: null,
  footer: null,
};
createStyles = { backgroundColor: nativeDefault.colors.BACKGROUND_BASE_LOW, shadowColor: "transparent" };
createStyles.headerStyle = createStyles;
createStyles.container = { alignSelf: "stretch" };
createStyles.header = { textAlign: "center" };
createStyles.loadingContainer = { marginTop: nativeDefault.space.PX_24 };
let obj1 = { marginTop: nativeDefault.space.PX_24 };
createStyles.emptyContainer = { marginTop: nativeDefault.space.PX_24 };
createStyles.footer = { textAlign: "center" };
let closure_11 = createStyles.createStyles(createStyles);
const constants = {
  METHODS: "METHODS",
  GOOGLE_WALLET_VERIFICATION: "GOOGLE_WALLET_VERIFICATION",
  APP_STORE_VERIFICATION: "APP_STORE_VERIFICATION",
};
const size = fn(2);
let result = size.fileFinishedImporting("modules/age_assurance/native/AgeVerificationExpressiveV2Modal.tsx");

export default function AgeVerificationExpressiveV2Modal(entryPoint) {
  entryPoint = entryPoint.entryPoint;
  const onClose = entryPoint.onClose;
  const onComplete = entryPoint.onComplete;
  const tmp = closure_11();
  closure_3 = tmp;
  const memo = noop.useMemo(() => entryPoint(onComplete[44]).v4(), []);
  const items = [tmp, memo, entryPoint, onClose, onComplete];
  const items1 = [memo, entryPoint];
  const memo1 = noop.useMemo(() => {
    const modalSessionId = memo;
    closure_2 = onClose;
    function closeModal() {
      let arr = onClose(onComplete[40]);
      arr = arr.pop();
      closure_2();
    }
    let obj = {};
    obj = {
      headerStyle: onComplete.headerStyle,
      headerTitle() {
        return null;
      },
      headerLeft: NavigatorHeader.getHeaderCloseButton(closeModal),
      render(arg0, navigation) {
        return closure_2_9(MethodsScreen, { entryPoint, navigation, onClose: closeModal, onComplete, modalSessionId });
      },
    };
    obj[constants.METHODS] = obj;
    obj = {
      headerStyle: onComplete.headerStyle,
      headerTitle() {
        return null;
      },
      headerLeft: null,
      render: null,
    };
    obj.headerLeft = NavigatorHeader.getHeaderBackButton();
    obj.render = function render() {
      return closure_2_9(onClose(onComplete[42]), { onClose: closeModal, onComplete, modalSessionId });
    };
    obj[constants.GOOGLE_WALLET_VERIFICATION] = obj;
    const obj1 = {
      headerStyle: onComplete.headerStyle,
      headerTitle() {
        return null;
      },
      headerLeft: null,
      render: null,
    };
    obj1.headerLeft = NavigatorHeader.getHeaderBackButton();
    obj1.render = function render() {
      return closure_2_9(onClose(onComplete[43]), { onClose: closeModal, modalSessionId });
    };
    obj[constants.APP_STORE_VERIFICATION] = obj1;
    return obj;
  }, items);
  const effect = noop.useEffect(() => {
    const result = AgeVerificationAnalyticsUtils.trackAgeVerificationModalViewed(
      memo,
      AgeVerificationAnalyticsUtils.AgeVerificationModalVersion.EXPRESSIVE_V2,
      entryPoint,
    );
  }, items1);
  let obj = { screens: memo1, initialRouteName: constants.METHODS, headerBackTitle: null };
  const intl = entryPoint(onComplete[33]).intl;
  obj.headerBackTitle = intl.string(entryPoint(onComplete[33]).t["13/7kX"]);
  return closure_9(entryPoint(onComplete[45]).Navigator, obj);
}
