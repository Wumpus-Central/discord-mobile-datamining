// === Module 8725: MethodsScreen ===

// Module 8725 (MethodsScreen)
import ThemesDefault from "Themes" /* 709 */;
import closure_3 from "asyncGeneratorStep" /* 5 */;
import closure_4 from "_slicedToArray" /* 32 */;
import closure_5 from "noop" /* 19 */;
import { ActivityIndicator } from "get ActivityIndicator" /* 17 */;
import { TRUSTED_PROVIDERS_URL } from "set" /* 8702 */;
import { HelpdeskArticles } from "ME" /* 673 */;
import jsxProd from "jsxProd" /* 21 */;
import createCacheKey from "createCacheKey" /* 4478 */;

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
  let callback;
  let initiateAgeVerificationV2;
  closure_9 = undefined;
  c10 = undefined;
  let callback2;
  closure_12 = undefined;
  let isAgeVerificationCustomTabOpen;
  let memo1;
  let callback1;
  let isAgeVerificationAuthSessionOpen;
  closure_17 = undefined;
  closure_18 = undefined;
  const tmp = callback2();
  let obj = _require(onComplete[13]);
  const isSuspendedUser = obj.useIsSuspendedUser();
  obj1 = _require(onComplete[14]);
  const shouldShowExpressiveModalSubtitleAlt = obj1.useShouldShowExpressiveModalSubtitleAlt("age_verification_expressive_v2_modal");
  let obj2 = _require(onComplete[15]);
  const ageVerificationMethodsV2 = obj2.useAgeVerificationMethodsV2();
  ({ loading, methods } = ageVerificationMethodsV2);
  ({ footerMessage, outageBannerMessage, refetch } = ageVerificationMethodsV2);
  const tmp7 = methods(first.useState(false), 2);
  first = tmp7[0];
  closure_6 = tmp7[1];
  const effect = first.useEffect(() => {
    c0 = false;
    const result = callback(onComplete[16]).checkGoogleWalletAvailable();
    result.then((arg0) => {
      if (!c0) {
        closure_1_6(arg0);
      }
    });
    return () => {
      c0 = true;
    };
  }, []);
  let items = [methods, first];
  const memo = first.useMemo(() => methods.filter((method) => method.method !== closure_1_0(closure_1_2[7]).AgeAssuranceMethod.GOOGLE_WALLET || closure_5), items);
  const items1 = [onComplete, onClose];
  callback = first.useCallback(() => {
    if (onComplete != null) {
      tmp();
    }
    onClose();
  }, items1);
  let obj3 = _require(onComplete[17]);
  initiateAgeVerificationV2 = obj3.useInitiateAgeVerificationV2({ onComplete: callback, entryPoint, onMethodUnavailable: refetch }).initiateAgeVerificationV2;
  closure_9 = first.useRef(false);
  [c10, c11] = methods(first.useState(null), 2);
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
              if (!closure_1_9.current) {
                obj1 = navigation(onComplete[18]);
                const result = obj1.trackAgeVerificationModalClicked(c3, navigation(onComplete[18]).AgeVerificationModalVersion.EXPRESSIVE_V2, navigation(onComplete[18]).AgeVerificationModalCta.METHOD_SELECT, tmp46.method);
                if (tmp46.method !== navigation(onComplete[7]).AgeAssuranceMethod.GOOGLE_WALLET) {
                  let tmp22Result = tmp22(tmp23[19]);
                  const result1 = tmp22Result.releaseAgeVerificationCustomTab();
                  tmp22Result = tmp22(tmp23[20]);
                  const result2 = tmp22Result.closeAgeVerificationAuthSession();
                  closure_1_9.current = true;
                  closure_1_11(tmp47);
                  c5 = 1;
                  c3 = 2;
                  c6 = 1;
                  obj1 = { value: null, done: false };
                  obj1[0] = closure_1_8(tmp46);
                  return obj1;
                } else {
                  navigation.navigate(constants.GOOGLE_WALLET_VERIFICATION);
                }
              }
              c6 = 3;
            }
          } else if (1 === tmp7) {
            c5 = 0;
            closure_1_9.current = false;
            closure_1_11(null);
            throw closure_4;
          } else if (arg0 === 1) {
            c6 = 3;
            throw arg1;
          } else if (arg0 !== 2) {
            c5 = 0;
            closure_1_9.current = false;
            closure_1_11(null);
          }
          c5 = 0;
          closure_1_9.current = false;
          closure_1_11(null);
          c6 = 3;
          obj = { value: null, done: true };
          obj[0] = arg1;
          return obj;
        } catch (tmp37) {
          closure_4 = tmp37;
          if (tmp4 === c5) {
            c6 = tmp2;
            throw tmp37;
          } else {
            c3 = tmp;
          }
        }
      }
    })();
  });
  const items2 = [navigation, initiateAgeVerificationV2, modalSessionId];
  closure_12 = first.useCallback(function() {
    const self = this;
    const apply = closure_0.apply;
    if (typeof apply === "unknown") {
      let applyArgumentsResult = HermesBuiltin.applyArguments(self);
    } else {
      applyArgumentsResult = apply(self, arguments);
    }
    return applyArgumentsResult;
  }, items2);
  let obj4 = _require(onComplete[19]);
  isAgeVerificationCustomTabOpen = obj4.useIsAgeVerificationCustomTabOpen();
  let obj5 = _require(onComplete[19]);
  const items3 = [methods];
  const ageVerificationCustomTabCopy = obj5.useAgeVerificationCustomTabCopy();
  memo1 = first.useMemo(() => {
    let externalWindow;
    const found = methods.find((externalWindow) => null != externalWindow.externalWindow);
    if (found != null) {
      externalWindow = found.externalWindow;
    }
    return externalWindow;
  }, items3);
  const effect1 = first.useEffect(() => {
    const result = callback(onComplete[19]).resumeAgeVerificationCustomTab();
  }, []);
  const items4 = [memo1];
  const effect2 = first.useEffect(() => {
    if (null != memo1) {
      const result = callback(onComplete[19]).setAgeVerificationCustomTabCopy(tmp);
      const obj = callback(onComplete[19]);
    }
  }, items4);
  const items5 = [callback];
  callback1 = first.useCallback(() => {
    if (obj.isAgeVerified()) {
      let tmpResult = tmp(tmp2[19]);
      if (tmpResult.getIsAgeVerificationCustomTabAwaitingResult()) {
        tmpResult = tmp(tmp2[19]);
        if (!tmpResult.getIsAgeVerificationCustomTabOpen()) {
          const result = tmp(tmp2[19]).releaseAgeVerificationCustomTab();
          callback();
          const tmpResult1 = tmp(tmp2[19]);
        }
      }
      let isAgeVerificationAuthSessionAwaitingResult = tmp(tmp2[20]).getIsAgeVerificationAuthSessionAwaitingResult();
      if (isAgeVerificationAuthSessionAwaitingResult) {
        isAgeVerificationAuthSessionAwaitingResult = !tmp(tmp2[20]).getIsAgeVerificationAuthSessionOpen();
        const tmpResult3 = tmp(tmp2[20]);
      }
      if (isAgeVerificationAuthSessionAwaitingResult) {
        const result1 = tmp(tmp2[20]).closeAgeVerificationAuthSession();
        callback();
        const tmpResult4 = tmp(tmp2[20]);
      }
      const tmpResult2 = tmp(tmp2[20]);
    }
  }, items5);
  let obj6 = _require(onComplete[17]);
  const watchAgeVerificationStatusChange = obj6.useWatchAgeVerificationStatusChange(callback1);
  let obj7 = _require(onComplete[20]);
  isAgeVerificationAuthSessionOpen = obj7.useIsAgeVerificationAuthSessionOpen();
  closure_17 = first.useRef(isAgeVerificationCustomTabOpen);
  closure_18 = first.useRef(isAgeVerificationAuthSessionOpen);
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
    let tmp23Result = tmp23(onClose(tmp3[21]), obj);
  } else {
    obj = { align: "stretch", spacing: 24, style: null, children: null };
    obj[2] = tmp.container;
    const items8 = [tmp23(tmp2(tmp3[25]).AgeVerificationSpotIllustration, { width: 150, height: 100 }), ];
    obj1 = { accessibilityRole: "header", variant: "heading-xl/bold", color: "mobile-text-heading-primary", children: null };
    let tmp2Result = tmp2(tmp3[17]);
    obj1[3] = tmp2Result.getAgeVerificationGetStartedTitle(entryPoint, true);
    const items9 = [tmp23(tmp2(tmp3[26]).Text, obj1), ];
    obj2 = { variant: "text-md/medium", color: "text-strong", style: null, children: null };
    obj2[2] = tmp.header;
    tmp2Result = tmp2(tmp3[17]);
    let fn;
    if (shouldShowExpressiveModalSubtitleAlt) {
      fn = () => {
        onClose(onComplete[27]).openUrl(callback);
        const obj = onClose(onComplete[27]);
        const result = callback(onComplete[18]).trackAgeVerificationModalClicked(modalSessionId, callback(onComplete[18]).AgeVerificationModalVersion.EXPRESSIVE_V2, callback(onComplete[18]).AgeVerificationModalCta.TRUSTED_PROVIDERS);
      };
    }
    obj3 = { align: "center", justify: "center", spacing: 16, children: null };
    obj4 = { align: "center", justify: "center", spacing: 8, children: null };
    obj2[3] = tmp2Result.getAgeVerificationGetStartedSubtitle(entryPoint, () => {
      const obj = onClose(onComplete[27]);
      obj.openUrl(onClose(onComplete[28]).getArticleURL(initiateAgeVerificationV2.TIGGER_PAWTECT_LEARN_MORE));
      const obj2 = onClose(onComplete[28]);
      const result = callback(onComplete[18]).trackAgeVerificationModalClicked(modalSessionId, callback(onComplete[18]).AgeVerificationModalVersion.EXPRESSIVE_V2, callback(onComplete[18]).AgeVerificationModalCta.LEARN_MORE);
    }, isSuspendedUser, fn, true);
    items9[1] = tmp23(tmp2(tmp3[26]).Text, obj2);
    obj4[3] = items9;
    items8[1] = c10(tmp2(tmp3[24]).Stack, obj4);
    obj3[3] = items8;
    const items10 = [c10(tmp2(tmp3[24]).Stack, obj3), , , ];
    tmp23Result = loading;
    if (loading) {
      obj5 = { align: "center", justify: "center", style: null, children: null };
      obj5[2] = tmp.loadingContainer;
      obj5[3] = tmp23(closure_6, { size: "large" });
      tmp23Result = tmp23(tmp2(tmp3[24]).Stack, obj5);
    }
    items10[1] = tmp23Result;
    let tmp24Result = !loading;
    if (!loading) {
      let tmp23Result1 = null != outageBannerMessage;
      if (tmp23Result1) {
        obj6 = { messageType: null, children: null };
        obj6[0] = tmp2(tmp3[29]).HelpMessageTypes.WARNING;
        obj6[1] = outageBannerMessage;
        tmp23Result1 = tmp23(tmp2(tmp3[29]).HelpMessage, obj6);
      }
      const items11 = [tmp23Result1, , ];
      if (tmp10) {
        items11[1] = !tmp10;
        let tmp23Result2 = tmp10;
        if (tmp10) {
          obj7 = { hasIcons: true, children: null };
          obj7[1] = memo.map((children) => {
            callback = children;
            const method = children.method;
            if (callback(onComplete[7]).AgeAssuranceMethod.FACIAL_AGE_ESTIMATION === method) {
              let GoogleNeutralIcon = tmp(tmp2[8]).VideoSelfieIcon;
            } else if (tmp(tmp2[7]).AgeAssuranceMethod.ID_SELFIE_MATCH === method) {
              GoogleNeutralIcon = tmp(tmp2[9]).IdCardIcon;
            } else if (tmp(tmp2[7]).AgeAssuranceMethod.GOOGLE_WALLET === method) {
              GoogleNeutralIcon = tmp(tmp2[10]).GoogleNeutralIcon;
            }
            if (null != GoogleNeutralIcon) {
              let obj = { IconComponent: null, variant: "secondary" };
              obj[0] = GoogleNeutralIcon;
              let tmp4 = callback2(tmp(tmp2[34]).TableRow.Icon, obj);
              let tmp5 = callback2;
            } else if (null != children.icon) {
              obj = { icon: null };
              obj[0] = children.icon;
              tmp4 = callback2(onClose(tmp2[35]), obj);
              tmp5 = callback2;
            } else {
              obj = { IconComponent: null, variant: "secondary" };
              obj[0] = tmp(tmp2[36]).UnknownGameIcon;
              tmp4 = callback2(tmp(tmp2[34]).TableRow.Icon, obj);
              tmp5 = callback2;
            }
            const combined = "" + children.method + "-" + children.vendor;
            if (c10 === combined) {
              let tmp5Result = tmp5(closure_6, {});
            } else {
              obj1 = { size: "md", color: null };
              obj1[1] = onClose(tmp2[12]).colors.INTERACTIVE_ICON_DEFAULT;
              tmp5Result = tmp5(tmp(tmp2[37]).ChevronSmallRightIcon, obj1);
            }
            const obj2 = { trailing: tmp5Result, disabled: null != c10, icon: tmp4, label: children.title, subLabel: null, onPress: null };
            const items = [tmp5(callback(onComplete[26]).Text, { variant: "text-sm/normal", color: "text-muted", children: children.description }), ];
            tmp5Result = null != children.providedBy;
            if (tmp5Result) {
              const obj4 = { variant: "text-sm/normal", color: "text-muted", children: null };
              obj4[2] = children.providedBy;
              tmp5Result = tmp5(tmp(tmp2[26]).Text, obj4);
            }
            items[1] = tmp5Result;
            obj2[4] = c10(callback(onComplete[24]).Stack, { direction: "vertical", spacing: 4, children: items });
            obj2[5] = function onPress() {
              return closure_1_12(closure_0, combined);
            };
            return tmp5(callback(onComplete[34]).TableRow, obj2, combined);
          });
          tmp23Result2 = tmp23(tmp2(tmp3[33]).TableRowGroup, obj7);
        }
        const obj8 = { direction: "vertical", spacing: 12, children: null };
        items11[2] = tmp23Result2;
        obj8[2] = items11;
        tmp24Result = tmp24(tmp2(tmp3[24]).Stack, obj8);
      } else {
        const obj9 = { style: null, children: null };
        obj9[0] = tmp.emptyContainer;
        let obj10 = { messageType: null, button: null, children: null };
        obj10[0] = tmp2(tmp3[29]).HelpMessageTypes.ERROR;
        const obj11 = { variant: "primary", size: "sm", text: null, onPress: null };
        const intl = tmp2(tmp3[31]).intl;
        obj11[2] = intl.string(onClose(tmp3[32]).hDvmYP);
        obj11[3] = refetch;
        obj10[1] = tmp23(tmp2(tmp3[30]).Button, obj11);
        const intl2 = tmp2(tmp3[31]).intl;
        const tmp34 = onClose(tmp3[32]);
        obj10[2] = intl2.string(ageVerificationMethodsV2.error ? tmp34.Bkmk4Y : tmp34.cR6336);
        obj10 = tmp23(tmp2(tmp3[29]).HelpMessage, obj10);
        obj9[1] = obj10;
        tmp23(tmp2(tmp3[24]).Stack, obj9);
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
      tmp23Result4 = tmp23(tmp2(tmp3[26]).Text, obj12);
    }
    const obj13 = { children: null };
    const obj14 = { children: null };
    items10[3] = tmp23Result4;
    obj[3] = items10;
    obj14[0] = c10(tmp2(tmp3[24]).Stack, obj);
    obj13[0] = tmp23(tmp2(tmp3[23]).ModalContent, obj14);
    tmp23Result = tmp23(tmp2(tmp3[22]).ModalScreen, obj13);
  }
  return tmp23Result;
}
({ jsx: c9, jsxs: c10 } = jsxProd);
createCacheKey = { headerStyle: null, container: null, header: null, loadingContainer: null, emptyContainer: null, footer: null };
createCacheKey = { backgroundColor: ThemesDefault.colors.BACKGROUND_BASE_LOWER, shadowColor: "transparent" };
createCacheKey[0] = createCacheKey;
createCacheKey[1] = { alignSelf: "stretch" };
createCacheKey[2] = { textAlign: "center" };
createCacheKey[3] = { marginTop: ThemesDefault.space.PX_24 };
let obj1 = { marginTop: ThemesDefault.space.PX_24 };
createCacheKey[4] = { marginTop: ThemesDefault.space.PX_24 };
createCacheKey[5] = { textAlign: "center" };
let closure_11 = createCacheKey.createStyles(createCacheKey);
let closure_12 = { METHODS: "METHODS", GOOGLE_WALLET_VERIFICATION: "GOOGLE_WALLET_VERIFICATION" };
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
  memo = React.useMemo(() => entryPoint(onComplete[41]).v4(), []);
  const items = [tmp, memo, entryPoint, onClose, onComplete];
  const items1 = [memo, entryPoint];
  const memo1 = React.useMemo(() => {
    closure_0 = closeModal;
    closure_1 = closure_0;
    closure_2 = closure_1;
    closure_3 = closure_2;
    closeModal = function closeModal() {
      let arr = callback(4724);
      arr = arr.pop();
      dependencyMap();
    };
    let obj = {};
    obj = {
      headerStyle: closure_3.headerStyle,
      headerTitle() {
        return null;
      },
      headerLeft: entryPoint(onComplete[39]).getHeaderCloseButton(closeModal),
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
    const obj3 = entryPoint(onComplete[39]);
    obj[2] = entryPoint(onComplete[39]).getHeaderBackButton();
    obj[3] = function render() {
      return closure_1_9(callback(8741), { onClose: closeModal, onComplete: closure_3, modalSessionId: closure_0 });
    };
    obj[closure_1_12.GOOGLE_WALLET_VERIFICATION] = obj;
    return obj;
  }, items);
  const effect = React.useEffect(() => {
    const result = entryPoint(onComplete[18]).trackAgeVerificationModalViewed(memo, entryPoint(onComplete[18]).AgeVerificationModalVersion.EXPRESSIVE_V2, entryPoint);
  }, items1);
  let obj = { screens: memo1, initialRouteName: constants.METHODS, headerBackTitle: null };
  const intl = entryPoint(onComplete[31]).intl;
  obj[2] = intl.string(entryPoint(onComplete[31]).t["13/7kX"]);
  return callback(entryPoint(onComplete[42]).Navigator, obj);
};