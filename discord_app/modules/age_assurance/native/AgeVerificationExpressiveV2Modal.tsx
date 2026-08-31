// discord_app/modules/age_assurance/native/AgeVerificationExpressiveV2Modal.tsx
import ThemesDefault from "../../../../discord_common/js/packages/tokens/native.tsx";
import closure_3 from "../../../../_runtime/00005_asyncGeneratorStep.js";
import closure_4 from "../../../../_runtime/metro/00032__slicedToArray.js";
import closure_5 from "../../../../_runtime/00019_noop.js";
import { ActivityIndicator } from "../../../../_runtime/00017_get_ActivityIndicator.js";
import { TRUSTED_PROVIDERS_URL } from "../AgeVerificationConstants.tsx";
import { HelpdeskArticles } from "../../../Constants.tsx";
import jsxProd from "../../../../_runtime/react/00021_jsxProd.js";
import createCacheKey from "../../../design/components/Styles/native/createStyles.tsx";

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
  closure_10 = undefined;
  let isAgeVerificationCustomTabOpen;
  let memo1;
  let callback;
  let isAgeVerificationAuthSessionOpen;
  closure_15 = undefined;
  closure_16 = undefined;
  const tmp = isAgeVerificationCustomTabOpen();
  let obj = _require(modalSessionId[13]);
  const isSuspendedUser = obj.useIsSuspendedUser();
  obj1 = _require(modalSessionId[14]);
  const shouldShowExpressiveModalSubtitleAlt = obj1.useShouldShowExpressiveModalSubtitleAlt("age_verification_expressive_v2_modal");
  let obj2 = _require(modalSessionId[15]);
  const ageVerificationMethodsV2 = obj2.useAgeVerificationMethodsV2();
  ({ loading, methods } = ageVerificationMethodsV2);
  ({ footerMessage, outageBannerMessage, refetch } = ageVerificationMethodsV2);
  const tmp7 = first(React.useState(false), 2);
  first = tmp7[0];
  React = tmp7[1];
  const effect = React.useEffect(() => {
    c0 = false;
    const result = callback(modalSessionId[16]).checkGoogleWalletAvailable();
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
  let obj3 = _require(modalSessionId[17]);
  initiateAgeVerificationV2 = obj3.useInitiateAgeVerificationV2({ onComplete: onClose, entryPoint, onMethodUnavailable: refetch }).initiateAgeVerificationV2;
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
          return { value: "HermesInternal", done: "HermesInternal" };
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
                obj1 = navigation(modalSessionId[18]);
                const result = obj1.trackAgeVerificationModalClicked(closure_1_2, navigation(modalSessionId[18]).AgeVerificationModalVersion.EXPRESSIVE_V2, navigation(modalSessionId[18]).AgeVerificationModalCta.METHOD_SELECT, tmp46.method);
                if (tmp46.method !== navigation(modalSessionId[7]).AgeAssuranceMethod.GOOGLE_WALLET) {
                  let tmp22Result = tmp22(tmp23[19]);
                  const result1 = tmp22Result.releaseAgeVerificationCustomTab();
                  tmp22Result = tmp22(tmp23[20]);
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
                  navigation.navigate(memo1.GOOGLE_WALLET_VERIFICATION);
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
  closure_10 = React.useCallback(function() {
    const self = this;
    const apply = closure_0.apply;
    if (typeof apply === "unknown") {
      let applyArgumentsResult = HermesBuiltin.applyArguments(self);
    } else {
      applyArgumentsResult = apply(self, arguments);
    }
    return applyArgumentsResult;
  }, items1);
  let obj4 = _require(modalSessionId[19]);
  isAgeVerificationCustomTabOpen = obj4.useIsAgeVerificationCustomTabOpen();
  let obj5 = _require(modalSessionId[19]);
  const items2 = [methods];
  const ageVerificationCustomTabCopy = obj5.useAgeVerificationCustomTabCopy();
  memo1 = React.useMemo(() => {
    let externalWindow;
    const found = methods.find((externalWindow) => null != externalWindow.externalWindow);
    if (found != null) {
      externalWindow = found.externalWindow;
    }
    return externalWindow;
  }, items2);
  const effect1 = React.useEffect(() => {
    const result = callback(modalSessionId[19]).resumeAgeVerificationCustomTab();
  }, []);
  const items3 = [memo1];
  const effect2 = React.useEffect(() => {
    if (null != memo1) {
      const result = callback(modalSessionId[19]).setAgeVerificationCustomTabCopy(tmp);
      const obj = callback(modalSessionId[19]);
    }
  }, items3);
  const items4 = [onClose];
  callback = React.useCallback(() => {
    if (obj.isAgeVerified()) {
      let tmpResult = tmp(tmp2[19]);
      if (tmpResult.getIsAgeVerificationCustomTabAwaitingResult()) {
        tmpResult = tmp(tmp2[19]);
        if (!tmpResult.getIsAgeVerificationCustomTabOpen()) {
          const result = tmp(tmp2[19]).releaseAgeVerificationCustomTab();
          onClose();
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
        onClose();
        const tmpResult4 = tmp(tmp2[20]);
      }
      const tmpResult2 = tmp(tmp2[20]);
    }
  }, items4);
  let obj6 = _require(modalSessionId[17]);
  const watchAgeVerificationStatusChange = obj6.useWatchAgeVerificationStatusChange(callback);
  let obj7 = _require(modalSessionId[20]);
  isAgeVerificationAuthSessionOpen = obj7.useIsAgeVerificationAuthSessionOpen();
  closure_15 = React.useRef(isAgeVerificationCustomTabOpen);
  closure_16 = React.useRef(isAgeVerificationAuthSessionOpen);
  const items5 = [isAgeVerificationCustomTabOpen, callback];
  const effect3 = React.useEffect(() => {
    let current = ref.current;
    if (current) {
      current = !isAgeVerificationCustomTabOpen;
    }
    if (current) {
      callback();
    }
    ref.current = isAgeVerificationCustomTabOpen;
  }, items5);
  const items6 = [isAgeVerificationAuthSessionOpen, callback];
  const effect4 = React.useEffect(() => {
    let current = ref2.current;
    if (current) {
      current = !isAgeVerificationAuthSessionOpen;
    }
    if (current) {
      callback();
    }
    ref2.current = isAgeVerificationAuthSessionOpen;
  }, items6);
  if (isAgeVerificationCustomTabOpen) {
    obj = { copy: null };
    obj[0] = ageVerificationCustomTabCopy;
    let tmp22Result = tmp22(onClose(tmp3[21]), obj);
  } else {
    obj = { align: "stretch", spacing: 24, style: null, children: null };
    obj[2] = tmp.container;
    const items7 = [tmp22(tmp2(tmp3[25]).AgeVerificationSpotIllustration, { width: 150, height: 100 }), ];
    obj1 = { accessibilityRole: "header", variant: "heading-xl/bold", color: "mobile-text-heading-primary", children: null };
    let tmp2Result = tmp2(tmp3[17]);
    obj1[3] = tmp2Result.getAgeVerificationGetStartedTitle(entryPoint, true);
    const items8 = [tmp22(tmp2(tmp3[26]).Text, obj1), ];
    obj2 = { variant: "text-md/medium", color: "text-strong", style: null, children: null };
    obj2[2] = tmp.header;
    tmp2Result = tmp2(tmp3[17]);
    let fn;
    if (shouldShowExpressiveModalSubtitleAlt) {
      fn = () => {
        onClose(modalSessionId[27]).openUrl(closure_7);
        const obj = onClose(modalSessionId[27]);
        const result = callback(modalSessionId[18]).trackAgeVerificationModalClicked(modalSessionId, callback(modalSessionId[18]).AgeVerificationModalVersion.EXPRESSIVE_V2, callback(modalSessionId[18]).AgeVerificationModalCta.TRUSTED_PROVIDERS);
      };
    }
    obj3 = { align: "center", justify: "center", spacing: 16, children: null };
    obj4 = { align: "center", justify: "center", spacing: 8, children: null };
    obj2[3] = tmp2Result.getAgeVerificationGetStartedSubtitle(entryPoint, () => {
      const obj = onClose(modalSessionId[27]);
      obj.openUrl(onClose(modalSessionId[28]).getArticleURL(_undefined.TIGGER_PAWTECT_LEARN_MORE));
      const obj2 = onClose(modalSessionId[28]);
      const result = callback(modalSessionId[18]).trackAgeVerificationModalClicked(modalSessionId, callback(modalSessionId[18]).AgeVerificationModalVersion.EXPRESSIVE_V2, callback(modalSessionId[18]).AgeVerificationModalCta.LEARN_MORE);
    }, isSuspendedUser, fn, true);
    items8[1] = tmp22(tmp2(tmp3[26]).Text, obj2);
    obj4[3] = items8;
    items7[1] = closure_10(tmp2(tmp3[24]).Stack, obj4);
    obj3[3] = items7;
    const items9 = [closure_10(tmp2(tmp3[24]).Stack, obj3), , , ];
    tmp22Result = loading;
    if (loading) {
      obj5 = { align: "center", justify: "center", style: null, children: null };
      obj5[2] = tmp.loadingContainer;
      obj5[3] = tmp22(initiateAgeVerificationV2, { size: "large" });
      tmp22Result = tmp22(tmp2(tmp3[24]).Stack, obj5);
    }
    items9[1] = tmp22Result;
    let tmp23Result = !loading;
    if (!loading) {
      let tmp22Result1 = null != outageBannerMessage;
      if (tmp22Result1) {
        obj6 = { messageType: null, children: null };
        obj6[0] = tmp2(tmp3[29]).HelpMessageTypes.WARNING;
        obj6[1] = outageBannerMessage;
        tmp22Result1 = tmp22(tmp2(tmp3[29]).HelpMessage, obj6);
      }
      const items10 = [tmp22Result1, , ];
      if (tmp10) {
        items10[1] = !tmp10;
        let tmp22Result2 = tmp10;
        if (tmp10) {
          obj7 = { hasIcons: true, children: null };
          obj7[1] = memo.map((children) => {
            callback = children;
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
              let tmp4 = _undefined2(tmp(tmp2[34]).TableRow.Icon, obj);
              let tmp5 = _undefined2;
            } else if (null != children.icon) {
              obj = { icon: null };
              obj[0] = children.icon;
              tmp4 = _undefined2(onClose(tmp2[35]), obj);
              tmp5 = _undefined2;
            } else {
              obj = { IconComponent: null, variant: "secondary" };
              obj[0] = tmp(tmp2[36]).UnknownGameIcon;
              tmp4 = _undefined2(tmp(tmp2[34]).TableRow.Icon, obj);
              tmp5 = _undefined2;
            }
            const combined = "" + children.method + "-" + children.vendor;
            if (c8 === combined) {
              let tmp5Result = tmp5(initiateAgeVerificationV2, {});
            } else {
              obj1 = { size: "md", color: null };
              obj1[1] = onClose(tmp2[12]).colors.INTERACTIVE_ICON_DEFAULT;
              tmp5Result = tmp5(tmp(tmp2[37]).ChevronSmallRightIcon, obj1);
            }
            const obj2 = { trailing: tmp5Result, disabled: null != c8, icon: tmp4, label: children.title, subLabel: null, onPress: null };
            const items = [tmp5(callback(modalSessionId[26]).Text, { variant: "text-sm/normal", color: "text-muted", children: children.description }), ];
            tmp5Result = null != children.providedBy;
            if (tmp5Result) {
              const obj4 = { variant: "text-sm/normal", color: "text-muted", children: null };
              obj4[2] = children.providedBy;
              tmp5Result = tmp5(tmp(tmp2[26]).Text, obj4);
            }
            items[1] = tmp5Result;
            obj2[4] = closure_10(callback(modalSessionId[24]).Stack, { direction: "vertical", spacing: 4, children: items });
            obj2[5] = function onPress() {
              return closure_1_10(closure_0, combined);
            };
            return tmp5(callback(modalSessionId[34]).TableRow, obj2, combined);
          });
          tmp22Result2 = tmp22(tmp2(tmp3[33]).TableRowGroup, obj7);
        }
        const obj8 = { direction: "vertical", spacing: 12, children: null };
        items10[2] = tmp22Result2;
        obj8[2] = items10;
        tmp23Result = tmp23(tmp2(tmp3[24]).Stack, obj8);
      } else {
        const obj9 = { style: null, children: null };
        obj9[0] = tmp.emptyContainer;
        let obj10 = { messageType: null, button: null, children: null };
        obj10[0] = tmp2(tmp3[29]).HelpMessageTypes.ERROR;
        const obj11 = { variant: "primary", size: "sm", text: null, onPress: null };
        const intl = tmp2(tmp3[31]).intl;
        obj11[2] = intl.string(onClose(tmp3[32]).hDvmYP);
        obj11[3] = refetch;
        obj10[1] = tmp22(tmp2(tmp3[30]).Button, obj11);
        const intl2 = tmp2(tmp3[31]).intl;
        const tmp33 = onClose(tmp3[32]);
        obj10[2] = intl2.string(ageVerificationMethodsV2.error ? tmp33.Bkmk4Y : tmp33.cR6336);
        obj10 = tmp22(tmp2(tmp3[29]).HelpMessage, obj10);
        obj9[1] = obj10;
        tmp22(tmp2(tmp3[24]).Stack, obj9);
      }
    }
    items9[2] = tmp23Result;
    let tmp22Result4 = !loading;
    if (!loading) {
      tmp22Result4 = tmp10;
    }
    if (tmp22Result4) {
      tmp22Result4 = null != footerMessage;
    }
    if (tmp22Result4) {
      const obj12 = { variant: "text-sm/normal", color: "text-subtle", style: null, children: null };
      obj12[2] = tmp.footer;
      obj12[3] = footerMessage;
      tmp22Result4 = tmp22(tmp2(tmp3[26]).Text, obj12);
    }
    const obj13 = { children: null };
    const obj14 = { children: null };
    items9[3] = tmp22Result4;
    obj[3] = items9;
    obj14[0] = closure_10(tmp2(tmp3[24]).Stack, obj);
    obj13[0] = tmp22(tmp2(tmp3[23]).ModalContent, obj14);
    tmp22Result = tmp22(tmp2(tmp3[22]).ModalScreen, obj13);
  }
  return tmp22Result;
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
  const tmp = callback2();
  dependencyMap = tmp;
  memo = React.useMemo(() => entryPoint(closure_2[41]).v4(), []);
  const items = [tmp, memo, entryPoint, onClose];
  const items1 = [memo, entryPoint];
  const memo1 = React.useMemo(() => {
    closure_0 = closeModal;
    closure_1 = closure_0;
    closure_2 = closure_1;
    closeModal = function closeModal() {
      let arr = callback(4691);
      arr = arr.pop();
      dependencyMap();
    };
    let obj = {};
    obj = {
      headerStyle: closure_2.headerStyle,
      headerTitle() {
        return null;
      },
      headerLeft: entryPoint(closure_2[39]).getHeaderCloseButton(closeModal),
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
    const obj3 = entryPoint(closure_2[39]);
    obj[2] = entryPoint(closure_2[39]).getHeaderBackButton();
    obj[3] = function render() {
      return closure_1_9(callback(8685), { onClose: closeModal, modalSessionId: closure_0 });
    };
    obj[closure_1_12.GOOGLE_WALLET_VERIFICATION] = obj;
    return obj;
  }, items);
  const effect = React.useEffect(() => {
    const result = entryPoint(closure_2[18]).trackAgeVerificationModalViewed(memo, entryPoint(closure_2[18]).AgeVerificationModalVersion.EXPRESSIVE_V2, entryPoint);
  }, items1);
  let obj = { screens: memo1, initialRouteName: constants.METHODS, headerBackTitle: null };
  const intl = entryPoint(1236).intl;
  obj[2] = intl.string(entryPoint(1236).t["13/7kX"]);
  return callback(entryPoint(5976).Navigator, obj);
};