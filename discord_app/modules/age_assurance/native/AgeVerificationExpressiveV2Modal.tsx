// === Module 6592: MethodsScreen ===

// Module 6592 (MethodsScreen)
import ThemesDefault from "Themes" /* 712 */;
import closure_3 from "asyncGeneratorStep" /* 5 */;
import closure_4 from "_slicedToArray" /* 32 */;
import closure_5 from "noop" /* 19 */;
import { ActivityIndicator } from "get ActivityIndicator" /* 17 */;
import { TRUSTED_PROVIDERS_URL } from "set" /* 5432 */;
import { HelpdeskArticles } from "ME" /* 676 */;
import jsxProd from "jsxProd" /* 21 */;
import createCacheKey from "createCacheKey" /* 4668 */;

const require = arg1;
function MethodsScreen(onClose) {
  ({ entryPoint, navigation } = onClose);
  let _require = navigation;
  onClose = onClose.onClose;
  const modalSessionId = onClose.modalSessionId;
  methods = undefined;
  let first;
  let React;
  let initiateAgeVerificationV2;
  closure_7 = undefined;
  c8 = undefined;
  c9 = undefined;
  let callback2;
  let memo1;
  const tmp = memo1();
  let obj = _require(modalSessionId[13]);
  const isSuspendedUser = obj.useIsSuspendedUser();
  obj1 = _require(modalSessionId[14]);
  const ageVerificationMethodsV2 = obj1.useAgeVerificationMethodsV2();
  ({ loading, methods } = ageVerificationMethodsV2);
  ({ footerMessage, refetch } = ageVerificationMethodsV2);
  const tmp6 = first(React.useState(false), 2);
  first = tmp6[0];
  React = tmp6[1];
  const effect = React.useEffect(() => {
    c0 = false;
    const result = callback(modalSessionId[15]).checkGoogleWalletAvailable();
    result.then((arg0) => {
      if (!c0) {
        closure_1_5(arg0);
      }
    });
    return () => {
      c0 = true;
    };
  }, []);
  let items = [methods, first];
  const memo = React.useMemo(() => methods.filter((method) => method.method !== closure_1_0(closure_1_2[7]).AgeAssuranceMethod.GOOGLE_WALLET || closure_4), items);
  let obj2 = _require(modalSessionId[16]);
  initiateAgeVerificationV2 = obj2.useInitiateAgeVerificationV2({ onComplete: onClose, entryPoint, onMethodUnavailable: refetch }).initiateAgeVerificationV2;
  closure_7 = React.useRef(false);
  [c8, c9] = first(React.useState(null), 2);
  _require = undefined;
  _require = methods((arg0, arg1) => {
    closure_0 = arg0;
    closure_1 = arg1;
    c3 = 0;
    c6 = 0;
    c5 = 0;
    return (function*(arg0, arg1) {
      if (v0 === 2) {
        v0 = 3;
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
          v0 = 2;
          if (0 === c3) {
            if (arg0 === 1) {
              v0 = 3;
              throw arg1;
            } else if (arg0 === 2) {
              v0 = 3;
              obj = { value: null, done: true };
              obj[0] = arg1;
              return obj;
            } else {
              closure_2 = tmp3;
              if (!closure_1_7.current) {
                obj1 = navigation(modalSessionId[17]);
                const result = obj1.trackAgeVerificationModalClicked(closure_1_2, navigation(modalSessionId[17]).AgeVerificationModalVersion.EXPRESSIVE_V2, navigation(modalSessionId[17]).AgeVerificationModalCta.METHOD_SELECT, tmp46.method);
                if (tmp46.method !== navigation(modalSessionId[7]).AgeAssuranceMethod.GOOGLE_WALLET) {
                  let tmp22Result = tmp22(tmp23[18]);
                  const result1 = tmp22Result.releaseAgeVerificationCustomTab();
                  tmp22Result = tmp22(tmp23[19]);
                  const result2 = tmp22Result.closeAgeVerificationAuthSession();
                  closure_1_7.current = true;
                  closure_1_9(tmp47);
                  c5 = 1;
                  c3 = 2;
                  v0 = 1;
                  obj1 = { value: null, done: false };
                  obj1[0] = v0(tmp46);
                  return obj1;
                } else {
                  navigation.navigate(closure_2_12.GOOGLE_WALLET_VERIFICATION);
                }
              }
              v0 = 3;
            }
          } else if (1 === tmp7) {
            c5 = 0;
            closure_1_7.current = false;
            closure_1_9(null);
            throw closure_4;
          } else if (arg0 === 1) {
            v0 = 3;
            throw arg1;
          } else if (arg0 !== 2) {
            c5 = 0;
            closure_1_7.current = false;
            closure_1_9(null);
          }
          c5 = 0;
          closure_1_7.current = false;
          closure_1_9(null);
          v0 = 3;
          obj = { value: null, done: true };
          obj[0] = arg1;
          return obj;
        } catch (tmp37) {
          closure_4 = tmp37;
          if (tmp4 === c5) {
            v0 = tmp2;
            throw tmp37;
          } else {
            c3 = tmp;
          }
        }
      }
    })();
  });
  const items1 = [navigation, initiateAgeVerificationV2, modalSessionId];
  callback2 = React.useCallback(function() {
    const self = this;
    const apply = closure_0.apply;
    if (typeof apply === "unknown") {
      let applyArgumentsResult = HermesBuiltin.applyArguments(self);
    } else {
      applyArgumentsResult = apply(self, arguments);
    }
    return applyArgumentsResult;
  }, items1);
  let obj3 = _require(modalSessionId[18]);
  const isAgeVerificationCustomTabOpen = obj3.useIsAgeVerificationCustomTabOpen();
  let obj4 = _require(modalSessionId[18]);
  const items2 = [methods];
  const ageVerificationCustomTabCopy = obj4.useAgeVerificationCustomTabCopy();
  memo1 = React.useMemo(() => {
    let externalWindow;
    const found = methods.find((externalWindow) => null != externalWindow.externalWindow);
    if (found != null) {
      externalWindow = found.externalWindow;
    }
    return externalWindow;
  }, items2);
  const effect1 = React.useEffect(() => {
    const result = callback(modalSessionId[18]).resumeAgeVerificationCustomTab();
  }, []);
  const items3 = [memo1];
  const effect2 = React.useEffect(() => {
    if (null != memo1) {
      const result = callback(modalSessionId[18]).setAgeVerificationCustomTabCopy(tmp);
      const obj = callback(modalSessionId[18]);
    }
  }, items3);
  const items4 = [onClose];
  let callback = React.useCallback(() => {
    if (obj.isAgeVerified()) {
      let tmpResult = tmp(tmp2[18]);
      if (tmpResult.getIsAgeVerificationCustomTabAwaitingResult()) {
        tmpResult = tmp(tmp2[18]);
        const result = tmpResult.releaseAgeVerificationCustomTab();
        onClose();
      } else {
        if (tmpResult1.getIsAgeVerificationAuthSessionAwaitingResult()) {
          const result1 = tmp(tmp2[19]).closeAgeVerificationAuthSession();
          onClose();
          const tmpResult2 = tmp(tmp2[19]);
        }
        tmpResult1 = tmp(tmp2[19]);
      }
    }
  }, items4);
  let obj5 = _require(modalSessionId[16]);
  const watchAgeVerificationStatusChange = obj5.useWatchAgeVerificationStatusChange(callback);
  if (isAgeVerificationCustomTabOpen) {
    obj = { copy: null };
    obj[0] = ageVerificationCustomTabCopy;
    let tmp18Result = tmp18(onClose(tmp3[20]), obj);
  } else {
    obj = { align: "stretch", spacing: 24, style: null, children: null };
    obj[2] = tmp.container;
    obj1 = { align: "center", justify: "center", spacing: 16, children: null };
    const items5 = [tmp18(tmp2(tmp3[24]).AgeVerificationSpotIllustration, { width: 150, height: 100 }), ];
    obj2 = { align: "center", justify: "center", spacing: 8, children: null };
    obj3 = { accessibilityRole: "header", variant: "heading-xl/bold", color: "mobile-text-heading-primary", children: null };
    let tmp2Result = tmp2(tmp3[16]);
    obj3[3] = tmp2Result.getAgeVerificationGetStartedTitle(entryPoint, true);
    const items6 = [tmp18(tmp2(tmp3[25]).Text, obj3), ];
    obj4 = { variant: "text-md/medium", color: "text-strong", style: null, children: null };
    obj4[2] = tmp.header;
    tmp2Result = tmp2(tmp3[16]);
    obj4[3] = tmp2Result.getAgeVerificationGetStartedSubtitle(entryPoint, () => {
      const obj = onClose(modalSessionId[26]);
      obj.openUrl(onClose(modalSessionId[27]).getArticleURL(_undefined.TIGGER_PAWTECT_LEARN_MORE));
      const obj2 = onClose(modalSessionId[27]);
      const result = callback(modalSessionId[17]).trackAgeVerificationModalClicked(modalSessionId, callback(modalSessionId[17]).AgeVerificationModalVersion.EXPRESSIVE_V2, callback(modalSessionId[17]).AgeVerificationModalCta.LEARN_MORE);
    }, isSuspendedUser, () => {
      onClose(modalSessionId[26]).openUrl(closure_7);
      const obj = onClose(modalSessionId[26]);
      const result = callback(modalSessionId[17]).trackAgeVerificationModalClicked(modalSessionId, callback(modalSessionId[17]).AgeVerificationModalVersion.EXPRESSIVE_V2, callback(modalSessionId[17]).AgeVerificationModalCta.TRUSTED_PROVIDERS);
    });
    items6[1] = tmp18(tmp2(tmp3[25]).Text, obj4);
    obj2[3] = items6;
    items5[1] = callback2(tmp2(tmp3[23]).Stack, obj2);
    obj1[3] = items5;
    const items7 = [callback2(tmp2(tmp3[23]).Stack, obj1), , , , ];
    tmp18Result = loading;
    if (loading) {
      obj5 = { align: "center", justify: "center", style: null, children: null };
      obj5[2] = tmp.loadingContainer;
      obj5[3] = tmp18(initiateAgeVerificationV2, { size: "large" });
      tmp18Result = tmp18(tmp2(tmp3[23]).Stack, obj5);
    }
    items7[1] = tmp18Result;
    let tmp25 = !loading;
    if (!loading) {
      tmp25 = !tmp9;
    }
    if (!tmp25) {
      items7[2] = tmp25;
      let tmp18Result1 = !loading;
      if (!loading) {
        tmp18Result1 = tmp9;
      }
      if (tmp18Result1) {
        const obj6 = { hasIcons: true, children: null };
        obj6[1] = memo.map((children) => {
          const callback = children;
          const method = children.method;
          if (callback(modalSessionId[7]).AgeAssuranceMethod.FACIAL_AGE_ESTIMATION === method) {
            let GoogleNeutralIcon = tmp(tmp2[8]).VideoSelfieIcon;
          } else if (tmp(tmp2[7]).AgeAssuranceMethod.ID_SELFIE_MATCH === method) {
            GoogleNeutralIcon = tmp(tmp2[9]).IdCardIcon;
          } else if (tmp(tmp2[7]).AgeAssuranceMethod.GOOGLE_WALLET === method) {
            GoogleNeutralIcon = tmp(tmp2[10]).GoogleNeutralIcon;
          }
          if (null != GoogleNeutralIcon) {
            let obj = { IconComponent: null, variant: "secondary" };
            obj[0] = GoogleNeutralIcon;
            let tmp4 = _undefined2(tmp(tmp2[33]).TableRow.Icon, obj);
            let tmp5 = _undefined2;
          } else if (null != children.icon) {
            obj = { icon: null };
            obj[0] = children.icon;
            tmp4 = _undefined2(onClose(tmp2[34]), obj);
            tmp5 = _undefined2;
          } else {
            obj = { IconComponent: null, variant: "secondary" };
            obj[0] = tmp(tmp2[35]).UnknownGameIcon;
            tmp4 = _undefined2(tmp(tmp2[33]).TableRow.Icon, obj);
            tmp5 = _undefined2;
          }
          const combined = "" + children.method + "-" + children.vendor;
          if (c8 === combined) {
            let tmp5Result = tmp5(initiateAgeVerificationV2, {});
          } else {
            obj1 = { size: "md", color: null };
            obj1[1] = onClose(tmp2[12]).colors.INTERACTIVE_ICON_DEFAULT;
            tmp5Result = tmp5(tmp(tmp2[36]).ChevronSmallRightIcon, obj1);
          }
          const obj2 = { trailing: tmp5Result, disabled: null != c8, icon: tmp4, label: children.title, subLabel: null, onPress: null };
          const items = [tmp5(callback(modalSessionId[25]).Text, { variant: "text-sm/normal", color: "text-muted", children: children.description }), ];
          tmp5Result = null != children.providedBy;
          if (tmp5Result) {
            const obj4 = { variant: "text-sm/normal", color: "text-muted", children: null };
            obj4[2] = children.providedBy;
            tmp5Result = tmp5(tmp(tmp2[25]).Text, obj4);
          }
          items[1] = tmp5Result;
          obj2[4] = closure_10(callback(modalSessionId[23]).Stack, { direction: "vertical", spacing: 4, children: items });
          obj2[5] = function onPress() {
            return closure_1_10(closure_0, combined);
          };
          return tmp5(callback(modalSessionId[33]).TableRow, obj2, combined);
        });
        tmp18Result1 = tmp18(tmp2(tmp3[32]).TableRowGroup, obj6);
      }
      items7[3] = tmp18Result1;
      let tmp18Result2 = !loading;
      if (!loading) {
        tmp18Result2 = tmp9;
      }
      if (tmp18Result2) {
        tmp18Result2 = null != footerMessage;
      }
      if (tmp18Result2) {
        const obj7 = { variant: "text-sm/normal", color: "text-subtle", style: null, children: null };
        obj7[2] = tmp.footer;
        obj7[3] = footerMessage;
        tmp18Result2 = tmp18(tmp2(tmp3[25]).Text, obj7);
      }
      const obj8 = { children: null };
      const obj9 = { children: null };
      items7[4] = tmp18Result2;
      obj[3] = items7;
      obj9[0] = tmp19(tmp2(tmp3[23]).Stack, obj);
      obj8[0] = tmp18(tmp2(tmp3[22]).ModalContent, obj9);
      tmp18Result = tmp18(tmp2(tmp3[21]).ModalScreen, obj8);
    } else {
      const obj10 = { style: null, children: null };
      obj10[0] = tmp.emptyContainer;
      let obj11 = { messageType: null, button: null, children: null };
      obj11[0] = tmp2(tmp3[28]).HelpMessageTypes.ERROR;
      const obj12 = { variant: "primary", size: "sm", text: null, onPress: null };
      const intl = tmp2(tmp3[30]).intl;
      obj12[2] = intl.string(onClose(tmp3[31]).hDvmYP);
      obj12[3] = refetch;
      obj11[1] = tmp18(tmp2(tmp3[29]).Button, obj12);
      const intl2 = tmp2(tmp3[30]).intl;
      const tmp27 = onClose(tmp3[31]);
      obj11[2] = intl2.string(ageVerificationMethodsV2.error ? tmp27.Bkmk4Y : tmp27.cR6336);
      obj11 = tmp18(tmp2(tmp3[28]).HelpMessage, obj11);
      obj10[1] = obj11;
      tmp18(tmp2(tmp3[23]).Stack, obj10);
    }
    tmp19 = callback2;
  }
  return tmp18Result;
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
  dependencyMap = undefined;
  let memo;
  const tmp = callback3();
  dependencyMap = tmp;
  memo = React.useMemo(() => entryPoint(closure_2[40]).v4(), []);
  const items = [tmp, memo, entryPoint, onClose];
  const items1 = [memo, entryPoint];
  const memo1 = React.useMemo(() => {
    closure_0 = closeModal;
    closure_1 = closure_0;
    closure_2 = closure_1;
    closeModal = function closeModal() {
      let arr = callback(5265);
      arr = arr.pop();
      dependencyMap();
    };
    let obj = {};
    obj = {
      headerStyle: closure_2.headerStyle,
      headerTitle() {
        return null;
      },
      headerLeft: entryPoint(closure_2[38]).getHeaderCloseButton(closeModal),
      render(arg0, navigation) {
        return closure_1_9(closure_1_13, { entryPoint: closure_1, navigation, onClose: closeModal, modalSessionId: closure_0 });
      }
    };
    obj[closure_1_12.METHODS] = obj;
    obj = {
      headerStyle: closure_2.headerStyle,
      headerTitle() {
        return null;
      },
      headerLeft: null,
      render: null
    };
    const obj3 = entryPoint(closure_2[38]);
    obj[2] = entryPoint(closure_2[38]).getHeaderBackButton();
    obj[3] = function render() {
      return closure_1_9(callback(6722), { onClose: closeModal, modalSessionId: closure_0 });
    };
    obj[closure_1_12.GOOGLE_WALLET_VERIFICATION] = obj;
    return obj;
  }, items);
  const effect = React.useEffect(() => {
    const result = entryPoint(closure_2[17]).trackAgeVerificationModalViewed(memo, entryPoint(closure_2[17]).AgeVerificationModalVersion.EXPRESSIVE_V2, entryPoint);
  }, items1);
  let obj = { screens: memo1, initialRouteName: constants.METHODS, headerBackTitle: null };
  const intl = entryPoint(1236).intl;
  obj[2] = intl.string(entryPoint(1236).t["13/7kX"]);
  return callback(entryPoint(6343).Navigator, obj);
};