// === Module 8560: AgeVerificationExpressiveV2Modal ===

// Module 8560 (AgeVerificationExpressiveV2Modal)
import nativeDefault from "native" /* 576 */;
import HelpdeskUtilsDefault from "HelpdeskUtils" /* 2024 */;
import AgeVerificationUtils from "AgeVerificationUtils" /* 4849 */;
import NavigatorHeader from "NavigatorHeader" /* 5705 */;
import AgeVerificationActionCreatorsDefault from "AgeVerificationActionCreators" /* 8529 */;
import AgeVerificationAnalyticsUtils from "AgeVerificationAnalyticsUtils" /* 8531 */;
import AgeVerificationCustomTab from "AgeVerificationCustomTab" /* 8542 */;
import AgeVerificationAuthSession from "AgeVerificationAuthSession" /* 8543 */;
import asyncGeneratorStep from "asyncGeneratorStep" /* 5 */;
import _slicedToArray from "module_32" /* 32 */;
import noop from "module_19" /* 19 */;

require = fn;
function MethodsScreen(onClose) {
  ({ entryPoint, navigation } = onClose);
  _require = navigation;
  onClose = onClose.onClose;
  const modalSessionId = onClose.modalSessionId;
  methods = undefined;
  let onComplete;
  c8 = undefined;
  c9 = undefined;
  let isAgeVerificationCustomTabOpen;
  const tmp = isAgeVerificationCustomTabOpen();
  let obj = require("ShowExpressiveModalSubtitleAltFlag");
  const shouldShowExpressiveModalSubtitleAlt = obj.useShouldShowExpressiveModalSubtitleAlt("age_verification_expressive_v2_modal");
  let obj1 = require("useAgeVerificationMethodsV2");
  const ageVerificationMethodsV2 = obj1.useAgeVerificationMethodsV2();
  ({ loading, methods } = ageVerificationMethodsV2);
  ({ footerMessage, outageBannerMessage, refetch, error } = ageVerificationMethodsV2);
  let obj2 = require("AgeVerificationMethodAvailability");
  const availableMethodsV2 = obj2.useAvailableMethodsV2(methods);
  let items = [onComplete, onClose];
  onComplete = onComplete.useCallback(() => {
    if (onComplete != null) {
      tmp();
    }
    onClose();
  }, items);
  let obj3 = require("AgeVerificationUtils");
  const initiateAgeVerificationV2 = obj3.useInitiateAgeVerificationV2({ onComplete, entryPoint, onMethodUnavailable: refetch }).initiateAgeVerificationV2;
  closure_7 = onComplete.useRef(false);
  [c8, c9] = methods(onComplete.useState(null), 2);
  _require = modalSessionId((arg0, arg1) => {
    const navigation = arg0;
    closure_1 = arg1;
    c3 = 0;
    c6 = 0;
    c5 = 0;
    return (function*(arg0, value) {
      if (v3 === 2) {
        v3 = 3;
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
          v3 = 2;
          if (0 === c3) {
            if (arg0 === 1) {
              v3 = 3;
              throw value;
            } else if (arg0 === 2) {
              v3 = 3;
              obj = { value, done: true };
              return obj;
            } else {
              closure_2 = tmp3;
              if (!ref.current) {
                let obj1 = navigation(onComplete[19]);
                const result = obj1.trackAgeVerificationModalClicked(c3, navigation(onComplete[19]).AgeVerificationModalVersion.EXPRESSIVE_V2, navigation(onComplete[19]).AgeVerificationModalCta.METHOD_SELECT, navigation.method);
                if (navigation.method !== navigation(onComplete[7]).AgeAssuranceMethod.GOOGLE_WALLET) {
                  if (navigation.method !== navigation(onComplete[7]).AgeAssuranceMethod.OS_SIGNAL) {
                    let tmp22Result = navigation(onComplete[20]);
                    const result1 = tmp22Result.releaseAgeVerificationCustomTab();
                    tmp22Result = navigation(onComplete[21]);
                    const result2 = tmp22Result.closeAgeVerificationAuthSession();
                    ref.current = true;
                    _undefined(tmp49);
                    c5 = 1;
                    c3 = 2;
                    v3 = 1;
                    obj1 = { value: v3(navigation), done: false };
                    return obj1;
                  } else {
                    navigation.navigate(memo.APP_STORE_VERIFICATION);
                  }
                } else {
                  navigation.navigate(memo.GOOGLE_WALLET_VERIFICATION);
                }
              }
              v3 = 3;
            }
          } else if (1 === tmp7) {
            c5 = 0;
            ref.current = false;
            _undefined(null);
            throw closure_4;
          } else if (arg0 === 1) {
            v3 = 3;
            throw value;
          } else if (arg0 !== 2) {
            c5 = 0;
            ref.current = false;
            _undefined(null);
          }
          c5 = 0;
          ref.current = false;
          _undefined(null);
          v3 = 3;
          obj = { value, done: true };
          return obj;
        } catch (tmp40) {
          closure_4 = tmp40;
          if (tmp4 === c5) {
            v3 = tmp2;
            throw tmp40;
          } else {
            c3 = tmp;
          }
        }
      }
    })();
  });
  const items1 = [navigation, initiateAgeVerificationV2, modalSessionId];
  closure_10 = onComplete.useCallback(function() {
    const self = this;
    const apply = closure_0.apply;
    if (typeof apply === "unknown") {
      let applyArgumentsResult = HermesBuiltin.applyArguments(self);
    } else {
      applyArgumentsResult = apply(self, arguments);
    }
    return applyArgumentsResult;
  }, items1);
  let obj4 = require("AgeVerificationCustomTab");
  isAgeVerificationCustomTabOpen = obj4.useIsAgeVerificationCustomTabOpen();
  let obj5 = require("AgeVerificationCustomTab");
  const items2 = [methods];
  const ageVerificationCustomTabCopy = obj5.useAgeVerificationCustomTabCopy();
  const memo = onComplete.useMemo(() => {
    let externalWindow;
    const found = methods.find((externalWindow) => null != externalWindow.externalWindow);
    if (found != null) {
      externalWindow = found.externalWindow;
    }
    return externalWindow;
  }, items2);
  const effect = onComplete.useEffect(() => {
    const result = closure_0(onComplete[20]).resumeAgeVerificationCustomTab();
  }, []);
  const items3 = [memo];
  const effect1 = onComplete.useEffect(() => {
    if (null != memo) {
      const result = AgeVerificationCustomTab.setAgeVerificationCustomTabCopy(tmp);
    }
  }, items3);
  const items4 = [onComplete];
  const callback1 = onComplete.useCallback(() => {
    if (obj.isAgeVerified()) {
      let tmpResult = AgeVerificationCustomTab;
      if (tmpResult.getIsAgeVerificationCustomTabAwaitingResult()) {
        tmpResult = AgeVerificationCustomTab;
        if (!tmpResult.getIsAgeVerificationCustomTabOpen()) {
          const result = AgeVerificationCustomTab.releaseAgeVerificationCustomTab();
          callback();
          const tmpResult1 = AgeVerificationCustomTab;
        }
      }
      let isAgeVerificationAuthSessionAwaitingResult = AgeVerificationAuthSession.getIsAgeVerificationAuthSessionAwaitingResult();
      if (isAgeVerificationAuthSessionAwaitingResult) {
        isAgeVerificationAuthSessionAwaitingResult = !AgeVerificationAuthSession.getIsAgeVerificationAuthSessionOpen();
        const tmpResult3 = AgeVerificationAuthSession;
      }
      if (isAgeVerificationAuthSessionAwaitingResult) {
        const result1 = AgeVerificationAuthSession.closeAgeVerificationAuthSession();
        callback();
        const tmpResult4 = AgeVerificationAuthSession;
      }
      const tmpResult2 = AgeVerificationAuthSession;
    }
    obj = AgeVerificationUtils;
  }, items4);
  let obj6 = require("AgeVerificationUtils");
  const watchAgeVerificationStatusChange = obj6.useWatchAgeVerificationStatusChange(callback1);
  let obj7 = require("AgeVerificationAuthSession");
  const isAgeVerificationAuthSessionOpen = obj7.useIsAgeVerificationAuthSessionOpen();
  onComplete.useRef(isAgeVerificationCustomTabOpen);
  onComplete.useRef(isAgeVerificationAuthSessionOpen);
  const items5 = [isAgeVerificationCustomTabOpen, callback1];
  const effect2 = onComplete.useEffect(() => {
    let current = ref.current;
    if (current) {
      current = !isAgeVerificationCustomTabOpen;
    }
    if (current) {
      callback1();
    }
    ref.current = isAgeVerificationCustomTabOpen;
  }, items5);
  const items6 = [isAgeVerificationAuthSessionOpen, callback1];
  const effect3 = onComplete.useEffect(() => {
    let current = ref2.current;
    if (current) {
      current = !isAgeVerificationAuthSessionOpen;
    }
    if (current) {
      callback1();
    }
    ref2.current = isAgeVerificationAuthSessionOpen;
  }, items6);
  if (isAgeVerificationCustomTabOpen) {
    obj = { copy: ageVerificationCustomTabCopy };
    let tmp19Result = tmp19(onClose(tmp3[22]), obj);
  } else {
    obj = { align: "stretch", spacing: 24, style: tmp.container, children: null };
    const items7 = [tmp19(tmp2(tmp3[26]).AgeVerificationSpotIllustration, { width: 150, height: 100 }), ];
    obj1 = { accessibilityRole: "header", variant: "heading-xl/bold", color: "mobile-text-heading-primary", children: null };
    let tmp2Result = tmp2(tmp3[18]);
    obj1.children = tmp2Result.getAgeVerificationGetStartedTitle(entryPoint, true);
    const items8 = [tmp19(tmp2(tmp3[27]).Text, obj1), ];
    obj2 = { variant: "text-md/medium", color: "text-subtle", style: tmp.header, children: null };
    tmp2Result = tmp2(tmp3[18]);
    let fn;
    if (shouldShowExpressiveModalSubtitleAlt) {
      fn = () => {
        AgeVerificationActionCreatorsDefault.openUrl(TRUSTED_PROVIDERS_URL);
        const result = AgeVerificationAnalyticsUtils.trackAgeVerificationModalClicked(modalSessionId, AgeVerificationAnalyticsUtils.AgeVerificationModalVersion.EXPRESSIVE_V2, AgeVerificationAnalyticsUtils.AgeVerificationModalCta.TRUSTED_PROVIDERS);
      };
    }
    obj3 = { align: "center", justify: "center", spacing: 16, children: null };
    obj4 = { align: "center", justify: "center", spacing: 8, children: null };
    obj2.children = tmp2Result.getAgeVerificationGetStartedSubtitle(entryPoint, () => {
      const obj = AgeVerificationActionCreatorsDefault;
      obj.openUrl(HelpdeskUtilsDefault.getArticleURL(HelpdeskArticles.TIGGER_PAWTECT_LEARN_MORE));
      const result = AgeVerificationAnalyticsUtils.trackAgeVerificationModalClicked(modalSessionId, AgeVerificationAnalyticsUtils.AgeVerificationModalVersion.EXPRESSIVE_V2, AgeVerificationAnalyticsUtils.AgeVerificationModalCta.LEARN_MORE);
    }, undefined, fn, true);
    items8[1] = tmp19(tmp2(tmp3[27]).Text, obj2);
    obj4.children = items8;
    items7[1] = closure_10(tmp2(tmp3[25]).Stack, obj4);
    obj3.children = items7;
    const items9 = [closure_10(tmp2(tmp3[25]).Stack, obj3), , , ];
    tmp19Result = loading;
    if (loading) {
      obj5 = { align: "center", justify: "center", style: tmp.loadingContainer, children: tmp19(initiateAgeVerificationV2, { size: "large" }) };
      tmp19Result = tmp19(tmp2(tmp3[25]).Stack, obj5);
    }
    items9[1] = tmp19Result;
    let tmp20Result = !loading;
    if (!loading) {
      let tmp19Result1 = null != outageBannerMessage;
      if (tmp19Result1) {
        obj6 = { messageType: tmp2(tmp3[30]).HelpMessageTypes.WARNING, children: outageBannerMessage };
        tmp19Result1 = tmp19(tmp2(tmp3[30]).HelpMessage, obj6);
      }
      const items10 = [tmp19Result1, , ];
      if (tmp6) {
        items10[1] = !tmp6;
        let tmp19Result2 = tmp6;
        if (tmp6) {
          obj7 = {
            hasIcons: true,
            children: availableMethodsV2.map((children) => {
                      closure_0 = children;
                      const method = children.method;
                      if (closure_0(onComplete[7]).AgeAssuranceMethod.FACIAL_AGE_ESTIMATION === method) {
                        let GoogleNeutralIcon = tmp(onComplete[8]).VideoSelfieIcon;
                      } else if (tmp(onComplete[7]).AgeAssuranceMethod.ID_SELFIE_MATCH === method) {
                        GoogleNeutralIcon = tmp(onComplete[9]).IdCardIcon;
                      } else if (tmp(onComplete[7]).AgeAssuranceMethod.GOOGLE_WALLET === method) {
                        GoogleNeutralIcon = tmp(onComplete[10]).GoogleNeutralIcon;
                      } else if (tmp(onComplete[7]).AgeAssuranceMethod.OS_SIGNAL === method) {
                        if (tmpResult.isIOS()) {
                          let GoogleNeutralIcon2 = tmp(onComplete[12]).AppleNeutralIcon;
                        } else {
                          GoogleNeutralIcon2 = tmp(onComplete[10]).GoogleNeutralIcon;
                        }
                        GoogleNeutralIcon = GoogleNeutralIcon2;
                        tmpResult = tmp(onComplete[11]);
                      }
                      if (null != GoogleNeutralIcon) {
                        let obj = { IconComponent: GoogleNeutralIcon, variant: "secondary" };
                        let tmp4 = _undefined(tmp(onComplete[35]).TableRow.Icon, obj);
                        let tmp5 = _undefined;
                      } else if (null != children.icon) {
                        obj = { icon: children.icon };
                        tmp4 = _undefined(onClose(onComplete[36]), obj);
                        tmp5 = _undefined;
                      } else {
                        const obj1 = { IconComponent: tmp(onComplete[37]).UnknownGameIcon, variant: "secondary" };
                        tmp4 = _undefined(tmp(onComplete[35]).TableRow.Icon, obj1);
                        tmp5 = _undefined;
                      }
                      const combined = "" + children.method + "-" + children.vendor;
                      if (c8 === combined) {
                        let tmp5Result = tmp5(initiateAgeVerificationV2, {});
                      } else {
                        const obj2 = { size: "md", color: onClose(onComplete[14]).colors.INTERACTIVE_ICON_DEFAULT };
                        tmp5Result = tmp5(tmp(onComplete[38]).ChevronSmallRightIcon, obj2);
                      }
                      const obj3 = { trailing: tmp5Result, disabled: null != c8, icon: tmp4, label: children.title, subLabel: null, onPress: null };
                      const items = [tmp5(closure_0(onComplete[27]).Text, { variant: "text-sm/normal", color: "text-muted", children: children.description }), ];
                      tmp5Result = null != children.providedBy;
                      if (tmp5Result) {
                        const obj5 = { variant: "text-sm/normal", color: "text-muted", children: children.providedBy };
                        tmp5Result = tmp5(tmp(onComplete[27]).Text, obj5);
                      }
                      items[1] = tmp5Result;
                      obj3.subLabel = closure_10(closure_0(onComplete[25]).Stack, { direction: "vertical", spacing: 4, children: items });
                      obj3.onPress = function onPress() {
                        return closure_10(closure_0, combined);
                      };
                      return tmp5(closure_0(onComplete[35]).TableRow, obj3, combined);
                    })
          };
          tmp19Result2 = tmp19(tmp2(tmp3[34]).TableRowGroup, obj7);
        }
        const obj8 = { direction: "vertical", spacing: 12, children: null };
        items10[2] = tmp19Result2;
        obj8.children = items10;
        tmp20Result = tmp20(tmp2(tmp3[25]).Stack, obj8);
      } else {
        const obj9 = { style: tmp.emptyContainer, children: null };
        let obj10 = { messageType: tmp2(tmp3[30]).HelpMessageTypes.ERROR, button: null, children: null };
        const obj11 = { variant: "primary", size: "sm", text: null, onPress: null };
        const intl = tmp2(tmp3[32]).intl;
        obj11.text = intl.string(onClose(tmp3[33]).hDvmYP);
        obj11.onPress = refetch;
        obj10.button = tmp19(tmp2(tmp3[31]).Button, obj11);
        const intl2 = tmp2(tmp3[32]).intl;
        const tmp29 = onClose(tmp3[33]);
        obj10.children = intl2.string(error ? tmp29.Bkmk4Y : tmp29.cR6336);
        obj10 = tmp19(tmp2(tmp3[30]).HelpMessage, obj10);
        obj9.children = obj10;
        tmp19(tmp2(tmp3[25]).Stack, obj9);
      }
    }
    items9[2] = tmp20Result;
    let tmp19Result4 = !loading;
    if (!loading) {
      tmp19Result4 = tmp6;
    }
    if (tmp19Result4) {
      tmp19Result4 = null != footerMessage;
    }
    if (tmp19Result4) {
      const obj12 = { variant: "text-sm/normal", color: "text-subtle", style: tmp.footer, children: footerMessage };
      tmp19Result4 = tmp19(tmp2(tmp3[27]).Text, obj12);
    }
    const obj13 = { children: null };
    const obj14 = { children: null };
    items9[3] = tmp19Result4;
    obj.children = items9;
    obj14.children = closure_10(tmp2(tmp3[25]).Stack, obj);
    obj13.children = tmp19(tmp2(tmp3[24]).ModalContent, obj14);
    tmp19Result = tmp19(tmp2(tmp3[23]).ModalScreen, obj13);
  }
  return tmp19Result;
}
const ActivityIndicator = fn(17).ActivityIndicator;
const TRUSTED_PROVIDERS_URL = fn(8530).TRUSTED_PROVIDERS_URL;
const HelpdeskArticles = fn(1074).HelpdeskArticles;
const jsxProd = fn(21);
({ jsx: closure_9, jsxs: c10 } = jsxProd);
fn(4636);
let createStyles = { headerStyle: null, container: null, header: null, loadingContainer: null, emptyContainer: null, footer: null };
createStyles = { backgroundColor: nativeDefault.colors.BACKGROUND_BASE_LOW, shadowColor: "transparent" };
createStyles.headerStyle = createStyles;
createStyles.container = { alignSelf: "stretch" };
createStyles.header = { textAlign: "center" };
createStyles.loadingContainer = { marginTop: nativeDefault.space.PX_24 };
let obj1 = { marginTop: nativeDefault.space.PX_24 };
createStyles.emptyContainer = { marginTop: nativeDefault.space.PX_24 };
createStyles.footer = { textAlign: "center" };
let closure_11 = createStyles.createStyles(createStyles);
const constants = { METHODS: "METHODS", GOOGLE_WALLET_VERIFICATION: "GOOGLE_WALLET_VERIFICATION", APP_STORE_VERIFICATION: "APP_STORE_VERIFICATION" };
const size = fn(2);
let result = size.fileFinishedImporting("modules/age_assurance/native/AgeVerificationExpressiveV2Modal.tsx");

export default function AgeVerificationExpressiveV2Modal(entryPoint) {
  entryPoint = entryPoint.entryPoint;
  const onClose = entryPoint.onClose;
  const onComplete = entryPoint.onComplete;
  const tmp = closure_11();
  closure_3 = tmp;
  const memo = noop.useMemo(() => entryPoint(onComplete[43]).v4(), []);
  const items = [tmp, memo, entryPoint, onClose, onComplete];
  const items1 = [memo, entryPoint];
  const memo1 = noop.useMemo(() => {
    const modalSessionId = memo;
    closure_2 = onClose;
    function closeModal() {
      let arr = onClose(onComplete[39]);
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
      }
    };
    obj[constants.METHODS] = obj;
    obj = {
      headerStyle: onComplete.headerStyle,
      headerTitle() {
        return null;
      },
      headerLeft: null,
      render: null
    };
    obj.headerLeft = NavigatorHeader.getHeaderBackButton();
    obj.render = function render() {
      return closure_2_9(onClose(onComplete[41]), { onClose: closeModal, onComplete, modalSessionId });
    };
    obj[constants.GOOGLE_WALLET_VERIFICATION] = obj;
    const obj1 = {
      headerStyle: onComplete.headerStyle,
      headerTitle() {
        return null;
      },
      headerLeft: null,
      render: null
    };
    obj1.headerLeft = NavigatorHeader.getHeaderBackButton();
    obj1.render = function render() {
      return closure_2_9(onClose(onComplete[42]), { onClose: closeModal, modalSessionId });
    };
    obj[constants.APP_STORE_VERIFICATION] = obj1;
    return obj;
  }, items);
  const effect = noop.useEffect(() => {
    const result = AgeVerificationAnalyticsUtils.trackAgeVerificationModalViewed(memo, AgeVerificationAnalyticsUtils.AgeVerificationModalVersion.EXPRESSIVE_V2, entryPoint);
  }, items1);
  let obj = { screens: memo1, initialRouteName: constants.METHODS, headerBackTitle: null };
  const intl = entryPoint(onComplete[32]).intl;
  obj.headerBackTitle = intl.string(entryPoint(onComplete[32]).t["13/7kX"]);
  return closure_9(entryPoint(onComplete[44]).Navigator, obj);
};