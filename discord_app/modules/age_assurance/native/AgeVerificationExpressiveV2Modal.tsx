// === Module 8435: MethodsScreen ===

// Module 8435 (MethodsScreen)
import ThemesDefault from "Themes" /* 576 */;
import closure_3 from "asyncGeneratorStep" /* 5 */;
import closure_4 from "_slicedToArray" /* 32 */;
import closure_5 from "noop" /* 19 */;
import { ActivityIndicator } from "get ActivityIndicator" /* 17 */;
import { TRUSTED_PROVIDERS_URL } from "set" /* 8412 */;
import { HelpdeskArticles } from "ME" /* 1074 */;
import jsxProd from "jsxProd" /* 21 */;
import createCacheKey from "createCacheKey" /* 4560 */;

const require = arg1;
function MethodsScreen(onClose) {
  ({ entryPoint, navigation } = onClose);
  let _require = navigation;
  onClose = onClose.onClose;
  const onComplete = onClose.onComplete;
  const modalSessionId = onClose.modalSessionId;
  methods = undefined;
  let first;
  closure_6 = undefined;
  let memo;
  let callback;
  let initiateAgeVerificationV2;
  closure_10 = undefined;
  let callback2;
  c12 = undefined;
  closure_13 = undefined;
  let isAgeVerificationCustomTabOpen;
  let memo2;
  let callback1;
  let isAgeVerificationAuthSessionOpen;
  closure_18 = undefined;
  closure_19 = undefined;
  let tmp = callback2();
  let obj = _require(onComplete[15]);
  const shouldShowExpressiveModalSubtitleAlt = obj.useShouldShowExpressiveModalSubtitleAlt("age_verification_expressive_v2_modal");
  obj1 = _require(onComplete[16]);
  const ageVerificationMethodsV2 = obj1.useAgeVerificationMethodsV2();
  ({ loading, methods } = ageVerificationMethodsV2);
  ({ footerMessage, outageBannerMessage, refetch } = ageVerificationMethodsV2);
  const tmp6 = methods(first.useState(false), 2);
  first = tmp6[0];
  closure_6 = tmp6[1];
  const effect = first.useEffect(() => {
    c0 = false;
    const result = callback(onComplete[17]).checkGoogleWalletAvailable();
    result.then((arg0) => {
      if (!c0) {
        closure_1_6(arg0);
      }
    });
    return () => {
      c0 = true;
    };
  }, []);
  memo = first.useMemo(() => {
    let isIOSResult = callback(onComplete[11]).isIOS();
    if (isIOSResult) {
      isIOSResult = callback(onComplete[18]).isAppStoreAgeSignalSupported();
      const tmpResult = callback(onComplete[18]);
    }
    return isIOSResult;
  }, []);
  let items = [methods, first, memo];
  const memo1 = first.useMemo(() => methods.filter((method) => {
    method = method.method;
    if (closure_1_0(closure_1_2[7]).AgeAssuranceMethod.GOOGLE_WALLET === method) {
      return closure_5;
    } else if (tmp(tmp2[7]).AgeAssuranceMethod.OS_SIGNAL === method) {
      return closure_7;
    } else {
      return true;
    }
    tmp = closure_1_0;
    tmp2 = closure_1_2;
  }), items);
  const items1 = [onComplete, onClose];
  callback = first.useCallback(() => {
    if (onComplete != null) {
      tmp();
    }
    onClose();
  }, items1);
  let obj2 = _require(onComplete[19]);
  initiateAgeVerificationV2 = obj2.useInitiateAgeVerificationV2({ onComplete: callback, entryPoint, onMethodUnavailable: refetch }).initiateAgeVerificationV2;
  closure_10 = first.useRef(false);
  [c11, c12] = methods(first.useState(null), 2);
  _require = undefined;
  _require = modalSessionId((arg0, arg1) => {
    closure_0 = arg0;
    closure_1 = arg1;
    c3 = 0;
    c6 = 0;
    c5 = 0;
    return (function*(arg0, arg1) {
      if (c6 === 2) {
        c6 = 3;
        HermesBuiltin.throwTypeError();
      } else if (tmp6 === 3) {
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
          c6 = 2;
          if (0 === c3) {
            if (arg0 === 1) {
              c6 = 3;
              throw arg1;
            } else if (arg0 === 2) {
              c6 = 3;
              obj = { value: null, done: true };
              obj[0] = arg1;
              return obj;
            } else {
              closure_2 = tmp3;
              if (!closure_1_10.current) {
                obj1 = navigation(onComplete[20]);
                const result = obj1.trackAgeVerificationModalClicked(c3, navigation(onComplete[20]).AgeVerificationModalVersion.EXPRESSIVE_V2, navigation(onComplete[20]).AgeVerificationModalCta.METHOD_SELECT, tmp49.method);
                if (tmp49.method !== navigation(onComplete[7]).AgeAssuranceMethod.GOOGLE_WALLET) {
                  if (tmp49.method !== tmp22(tmp23[7]).AgeAssuranceMethod.OS_SIGNAL) {
                    let tmp22Result = tmp22(tmp23[21]);
                    const result1 = tmp22Result.releaseAgeVerificationCustomTab();
                    tmp22Result = tmp22(tmp23[22]);
                    const result2 = tmp22Result.closeAgeVerificationAuthSession();
                    closure_1_10.current = true;
                    closure_1_12(tmp50);
                    c5 = 1;
                    c3 = 2;
                    c6 = 1;
                    obj1 = { value: null, done: false };
                    obj1[0] = closure_1_9(tmp49);
                    return obj1;
                  } else {
                    navigation.navigate(constants.APP_STORE_VERIFICATION);
                  }
                } else {
                  navigation.navigate(constants.GOOGLE_WALLET_VERIFICATION);
                }
              }
              c6 = 3;
            }
          } else if (1 === tmp7) {
            c5 = 0;
            closure_1_10.current = false;
            closure_1_12(null);
            throw closure_4;
          } else if (arg0 === 1) {
            c6 = 3;
            throw arg1;
          } else if (arg0 !== 2) {
            c5 = 0;
            closure_1_10.current = false;
            closure_1_12(null);
          }
          c5 = 0;
          closure_1_10.current = false;
          closure_1_12(null);
          c6 = 3;
          obj = { value: null, done: true };
          obj[0] = arg1;
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
  closure_13 = first.useCallback(function() {
    const self = this;
    const apply = closure_0.apply;
    if (typeof apply === "unknown") {
      let applyArgumentsResult = HermesBuiltin.applyArguments(self);
    } else {
      applyArgumentsResult = apply(self, arguments);
    }
    return applyArgumentsResult;
  }, items2);
  let obj3 = _require(onComplete[21]);
  isAgeVerificationCustomTabOpen = obj3.useIsAgeVerificationCustomTabOpen();
  let obj4 = _require(onComplete[21]);
  const items3 = [methods];
  const ageVerificationCustomTabCopy = obj4.useAgeVerificationCustomTabCopy();
  memo2 = first.useMemo(() => {
    let externalWindow;
    const found = methods.find((externalWindow) => null != externalWindow.externalWindow);
    if (found != null) {
      externalWindow = found.externalWindow;
    }
    return externalWindow;
  }, items3);
  const effect1 = first.useEffect(() => {
    const result = callback(onComplete[21]).resumeAgeVerificationCustomTab();
  }, []);
  const items4 = [memo2];
  const effect2 = first.useEffect(() => {
    if (null != memo2) {
      const result = callback(onComplete[21]).setAgeVerificationCustomTabCopy(tmp);
      const obj = callback(onComplete[21]);
    }
  }, items4);
  const items5 = [callback];
  callback1 = first.useCallback(() => {
    if (obj.isAgeVerified()) {
      let tmpResult = tmp(tmp2[21]);
      if (tmpResult.getIsAgeVerificationCustomTabAwaitingResult()) {
        tmpResult = tmp(tmp2[21]);
        if (!tmpResult.getIsAgeVerificationCustomTabOpen()) {
          const result = tmp(tmp2[21]).releaseAgeVerificationCustomTab();
          callback();
          const tmpResult1 = tmp(tmp2[21]);
        }
      }
      let isAgeVerificationAuthSessionAwaitingResult = tmp(tmp2[22]).getIsAgeVerificationAuthSessionAwaitingResult();
      if (isAgeVerificationAuthSessionAwaitingResult) {
        isAgeVerificationAuthSessionAwaitingResult = !tmp(tmp2[22]).getIsAgeVerificationAuthSessionOpen();
        const tmpResult3 = tmp(tmp2[22]);
      }
      if (isAgeVerificationAuthSessionAwaitingResult) {
        const result1 = tmp(tmp2[22]).closeAgeVerificationAuthSession();
        callback();
        const tmpResult4 = tmp(tmp2[22]);
      }
      const tmpResult2 = tmp(tmp2[22]);
    }
  }, items5);
  let obj5 = _require(onComplete[19]);
  const watchAgeVerificationStatusChange = obj5.useWatchAgeVerificationStatusChange(callback1);
  let obj6 = _require(onComplete[22]);
  isAgeVerificationAuthSessionOpen = obj6.useIsAgeVerificationAuthSessionOpen();
  closure_18 = first.useRef(isAgeVerificationCustomTabOpen);
  closure_19 = first.useRef(isAgeVerificationAuthSessionOpen);
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
    obj = { copy: null };
    obj[0] = ageVerificationCustomTabCopy;
    let tmp23Result = tmp23(onClose(tmp3[23]), obj);
  } else {
    obj = { align: "stretch", spacing: 24, style: null, children: null };
    obj[2] = tmp.container;
    const items8 = [tmp23(tmp2(tmp3[27]).AgeVerificationSpotIllustration, { width: 150, height: 100 }), ];
    obj1 = { accessibilityRole: "header", variant: "heading-xl/bold", color: "mobile-text-heading-primary", children: null };
    let tmp2Result = tmp2(tmp3[19]);
    obj1[3] = tmp2Result.getAgeVerificationGetStartedTitle(entryPoint, true);
    const items9 = [tmp23(tmp2(tmp3[28]).Text, obj1), ];
    obj2 = { variant: "text-md/medium", color: "text-subtle", style: null, children: null };
    obj2[2] = tmp.header;
    tmp2Result = tmp2(tmp3[19]);
    let fn;
    if (shouldShowExpressiveModalSubtitleAlt) {
      fn = () => {
        onClose(onComplete[29]).openUrl(memo);
        const obj = onClose(onComplete[29]);
        const result = callback(onComplete[20]).trackAgeVerificationModalClicked(modalSessionId, callback(onComplete[20]).AgeVerificationModalVersion.EXPRESSIVE_V2, callback(onComplete[20]).AgeVerificationModalCta.TRUSTED_PROVIDERS);
      };
    }
    obj3 = { align: "center", justify: "center", spacing: 16, children: null };
    obj4 = { align: "center", justify: "center", spacing: 8, children: null };
    obj2[3] = tmp2Result.getAgeVerificationGetStartedSubtitle(entryPoint, () => {
      const obj = onClose(onComplete[29]);
      obj.openUrl(onClose(onComplete[30]).getArticleURL(callback.TIGGER_PAWTECT_LEARN_MORE));
      const obj2 = onClose(onComplete[30]);
      const result = callback(onComplete[20]).trackAgeVerificationModalClicked(modalSessionId, callback(onComplete[20]).AgeVerificationModalVersion.EXPRESSIVE_V2, callback(onComplete[20]).AgeVerificationModalCta.LEARN_MORE);
    }, undefined, fn, true);
    items9[1] = tmp23(tmp2(tmp3[28]).Text, obj2);
    obj4[3] = items9;
    items8[1] = closure_10(tmp2(tmp3[26]).Stack, obj4);
    obj3[3] = items8;
    const items10 = [closure_10(tmp2(tmp3[26]).Stack, obj3), , , ];
    tmp23Result = loading;
    if (loading) {
      obj5 = { align: "center", justify: "center", style: null, children: null };
      obj5[2] = tmp.loadingContainer;
      obj5[3] = tmp23(closure_6, { size: "large" });
      tmp23Result = tmp23(tmp2(tmp3[26]).Stack, obj5);
    }
    items10[1] = tmp23Result;
    let tmp24Result = !loading;
    if (!loading) {
      let tmp23Result1 = null != outageBannerMessage;
      if (tmp23Result1) {
        obj6 = { messageType: null, children: null };
        obj6[0] = tmp2(tmp3[31]).HelpMessageTypes.WARNING;
        obj6[1] = outageBannerMessage;
        tmp23Result1 = tmp23(tmp2(tmp3[31]).HelpMessage, obj6);
      }
      const items11 = [tmp23Result1, , ];
      if (tmp10) {
        items11[1] = !tmp10;
        let tmp23Result2 = tmp10;
        if (tmp10) {
          const obj7 = { hasIcons: true, children: null };
          obj7[1] = memo1.map((children) => {
            callback = children;
            const method = children.method;
            if (callback(onComplete[7]).AgeAssuranceMethod.FACIAL_AGE_ESTIMATION === method) {
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
              let obj = { IconComponent: null, variant: "secondary" };
              obj[0] = GoogleNeutralIcon;
              let tmp4 = initiateAgeVerificationV2(tmp(tmp2[36]).TableRow.Icon, obj);
              let tmp5 = initiateAgeVerificationV2;
            } else if (null != children.icon) {
              obj = { icon: null };
              obj[0] = children.icon;
              tmp4 = initiateAgeVerificationV2(onClose(tmp2[37]), obj);
              tmp5 = initiateAgeVerificationV2;
            } else {
              obj1 = { IconComponent: null, variant: "secondary" };
              obj1[0] = tmp(tmp2[38]).UnknownGameIcon;
              tmp4 = initiateAgeVerificationV2(tmp(tmp2[36]).TableRow.Icon, obj1);
              tmp5 = initiateAgeVerificationV2;
            }
            const combined = "" + children.method + "-" + children.vendor;
            if (c11 === combined) {
              let tmp5Result = tmp5(closure_6, {});
            } else {
              const obj2 = { size: "md", color: null };
              obj2[1] = onClose(tmp2[14]).colors.INTERACTIVE_ICON_DEFAULT;
              tmp5Result = tmp5(tmp(tmp2[39]).ChevronSmallRightIcon, obj2);
            }
            const obj3 = { trailing: tmp5Result, disabled: null != c11, icon: tmp4, label: children.title, subLabel: null, onPress: null };
            const items = [tmp5(callback(onComplete[28]).Text, { variant: "text-sm/normal", color: "text-muted", children: children.description }), ];
            tmp5Result = null != children.providedBy;
            if (tmp5Result) {
              const obj5 = { variant: "text-sm/normal", color: "text-muted", children: null };
              obj5[2] = children.providedBy;
              tmp5Result = tmp5(tmp(tmp2[28]).Text, obj5);
            }
            items[1] = tmp5Result;
            obj3[4] = closure_10(callback(onComplete[26]).Stack, { direction: "vertical", spacing: 4, children: items });
            obj3[5] = function onPress() {
              return closure_1_13(closure_0, combined);
            };
            return tmp5(callback(onComplete[36]).TableRow, obj3, combined);
          });
          tmp23Result2 = tmp23(tmp2(tmp3[35]).TableRowGroup, obj7);
        }
        const obj8 = { direction: "vertical", spacing: 12, children: null };
        items11[2] = tmp23Result2;
        obj8[2] = items11;
        tmp24Result = tmp24(tmp2(tmp3[26]).Stack, obj8);
      } else {
        const obj9 = { style: null, children: null };
        obj9[0] = tmp.emptyContainer;
        let obj10 = { messageType: null, button: null, children: null };
        obj10[0] = tmp2(tmp3[31]).HelpMessageTypes.ERROR;
        const obj11 = { variant: "primary", size: "sm", text: null, onPress: null };
        const intl = tmp2(tmp3[33]).intl;
        obj11[2] = intl.string(onClose(tmp3[34]).hDvmYP);
        obj11[3] = refetch;
        obj10[1] = tmp23(tmp2(tmp3[32]).Button, obj11);
        const intl2 = tmp2(tmp3[33]).intl;
        const tmp33 = onClose(tmp3[34]);
        obj10[2] = intl2.string(ageVerificationMethodsV2.error ? tmp33.Bkmk4Y : tmp33.cR6336);
        obj10 = tmp23(tmp2(tmp3[31]).HelpMessage, obj10);
        obj9[1] = obj10;
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
      const obj12 = { variant: "text-sm/normal", color: "text-subtle", style: null, children: null };
      obj12[2] = tmp.footer;
      obj12[3] = footerMessage;
      tmp23Result4 = tmp23(tmp2(tmp3[28]).Text, obj12);
    }
    const obj13 = { children: null };
    const obj14 = { children: null };
    items10[3] = tmp23Result4;
    obj[3] = items10;
    obj14[0] = closure_10(tmp2(tmp3[26]).Stack, obj);
    obj13[0] = tmp23(tmp2(tmp3[25]).ModalContent, obj14);
    tmp23Result = tmp23(tmp2(tmp3[24]).ModalScreen, obj13);
  }
  return tmp23Result;
}
({ jsx: c9, jsxs: c10 } = jsxProd);
createCacheKey = { headerStyle: null, container: null, header: null, loadingContainer: null, emptyContainer: null, footer: null };
createCacheKey = { backgroundColor: ThemesDefault.colors.BACKGROUND_BASE_LOW, shadowColor: "transparent" };
createCacheKey[0] = createCacheKey;
createCacheKey[1] = { alignSelf: "stretch" };
createCacheKey[2] = { textAlign: "center" };
createCacheKey[3] = { marginTop: ThemesDefault.space.PX_24 };
let obj1 = { marginTop: ThemesDefault.space.PX_24 };
createCacheKey[4] = { marginTop: ThemesDefault.space.PX_24 };
createCacheKey[5] = { textAlign: "center" };
let closure_11 = createCacheKey.createStyles(createCacheKey);
let closure_12 = { METHODS: "METHODS", GOOGLE_WALLET_VERIFICATION: "GOOGLE_WALLET_VERIFICATION", APP_STORE_VERIFICATION: "APP_STORE_VERIFICATION" };
let obj2 = { marginTop: ThemesDefault.space.PX_24 };
let result = require("set").fileFinishedImporting("modules/age_assurance/native/AgeVerificationExpressiveV2Modal.tsx");

export default function AgeVerificationExpressiveV2Modal(entryPoint) {
  entryPoint = entryPoint.entryPoint;
  const onClose = entryPoint.onClose;
  const onComplete = entryPoint.onComplete;
  closure_3 = undefined;
  let memo;
  const tmp = callback2();
  closure_3 = tmp;
  memo = React.useMemo(() => entryPoint(onComplete[44]).v4(), []);
  const items = [tmp, memo, entryPoint, onClose, onComplete];
  const items1 = [memo, entryPoint];
  const memo1 = React.useMemo(() => {
    closure_0 = closeModal;
    closure_1 = closure_0;
    closure_2 = closure_1;
    closure_3 = closure_2;
    closeModal = function closeModal() {
      let arr = callback(4763);
      arr = arr.pop();
      dependencyMap();
    };
    let obj = {};
    obj = {
      headerStyle: closure_3.headerStyle,
      headerTitle() {
        return null;
      },
      headerLeft: entryPoint(onComplete[41]).getHeaderCloseButton(closeModal),
      render(arg0, navigation) {
        return closure_1_9(closure_1_13, { entryPoint: closure_1, navigation, onClose: closeModal, onComplete: closure_3, modalSessionId: closure_0 });
      }
    };
    obj[closure_1_12.METHODS] = obj;
    obj = {
      headerStyle: closure_3.headerStyle,
      headerTitle() {
        return null;
      },
      headerLeft: null,
      render: null
    };
    const obj3 = entryPoint(onComplete[41]);
    obj[2] = entryPoint(onComplete[41]).getHeaderBackButton();
    obj[3] = function render() {
      return closure_1_9(callback(8566), { onClose: closeModal, onComplete: closure_3, modalSessionId: closure_0 });
    };
    obj[closure_1_12.GOOGLE_WALLET_VERIFICATION] = obj;
    obj1 = {
      headerStyle: closure_3.headerStyle,
      headerTitle() {
        return null;
      },
      headerLeft: null,
      render: null
    };
    const obj5 = entryPoint(onComplete[41]);
    obj1[2] = entryPoint(onComplete[41]).getHeaderBackButton();
    obj1[3] = function render() {
      return closure_1_9(callback(8567), { onClose: closeModal, modalSessionId: closure_0 });
    };
    obj[closure_1_12.APP_STORE_VERIFICATION] = obj1;
    return obj;
  }, items);
  const effect = React.useEffect(() => {
    const result = entryPoint(onComplete[20]).trackAgeVerificationModalViewed(memo, entryPoint(onComplete[20]).AgeVerificationModalVersion.EXPRESSIVE_V2, entryPoint);
  }, items1);
  let obj = { screens: memo1, initialRouteName: constants.METHODS, headerBackTitle: null };
  const intl = entryPoint(onComplete[33]).intl;
  obj[2] = intl.string(entryPoint(onComplete[33]).t["13/7kX"]);
  return callback(entryPoint(onComplete[45]).Navigator, obj);
};