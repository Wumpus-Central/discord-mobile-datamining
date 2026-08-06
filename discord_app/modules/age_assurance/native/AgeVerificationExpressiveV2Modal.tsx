// discord_app/modules/age_assurance/native/AgeVerificationExpressiveV2Modal.tsx
import closure_3 from "jsxProd";
import ModalActionCreators from "../../../actions/ModalActionCreators.tsx";
import Stack from "Stack";
import { ActivityIndicator } from "ModalScreen";
import { HelpdeskArticles } from "ME";
import jsxProd from "Text";
import createCacheKey from "createCacheKey";

let c9;
let metroImportAll;
const require = arg1;
function MethodsScreen(onComplete) {
  let entryPoint;
  let loading;
  let methods;
  let navigation;
  ({ entryPoint, navigation } = onComplete);
  let _require = navigation;
  const modalSessionId = onComplete.modalSessionId;
  methods = undefined;
  let first;
  let callback;
  let initiateAgeVerificationV2;
  let closure_6;
  let closure_7;
  const tmp = createCacheKey();
  let obj = _require(methods[12]);
  const isSuspendedUser = obj.useIsSuspendedUser();
  let obj1 = _require(methods[13]);
  const ageVerificationMethodsV2 = obj1.useAgeVerificationMethodsV2();
  ({ loading, methods } = ageVerificationMethodsV2);
  const refetch = ageVerificationMethodsV2.refetch;
  const tmp6 = callback(initiateAgeVerificationV2.useState(false), 2);
  first = tmp6[0];
  callback = tmp6[1];
  const effect = initiateAgeVerificationV2.useEffect(() => {
    let c0 = false;
    const result = callback(methods[14]).checkGoogleWalletAvailable();
    result.then((arg0) => {
      if (!c0) {
        outer1_4(arg0);
      }
    });
    return () => {
      let c0 = true;
    };
  }, []);
  let items = [methods, first];
  const memo = initiateAgeVerificationV2.useMemo(() => methods.filter((method) => method.method !== outer1_0(outer1_2[6]).AgeAssuranceMethod.GOOGLE_WALLET || closure_3), items);
  let obj2 = _require(methods[15]);
  initiateAgeVerificationV2 = obj2.useInitiateAgeVerificationV2({ onComplete: onComplete.onClose, entryPoint, onMethodUnavailable: refetch }).initiateAgeVerificationV2;
  closure_6 = initiateAgeVerificationV2.useRef(false);
  _require = undefined;
  _require = first((arg0) => {
    let closure_0 = arg0;
    let c2 = 0;
    let c5 = 0;
    let c4 = 0;
    return (function*(arg0) {
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
          return { value: "T", done: null };
        }
      } else {
        try {
          v0 = 2;
          if (0 === c2) {
            if (arg0 === 1) {
              v0 = 3;
              throw arg1;
            } else if (arg0 === 2) {
              v0 = 3;
              obj = { value: null, done: true };
              obj[0] = arg1;
              return obj;
            } else {
              let closure_1 = tmp3;
              if (!outer1_6.current) {
                let obj1 = navigation(methods[16]);
                const result = obj1.trackAgeVerificationModalClicked(outer1_1, navigation(methods[16]).AgeVerificationModalVersion.EXPRESSIVE_V2, navigation(methods[16]).AgeVerificationModalCta.METHOD_SELECT, tmp35.method);
                if (tmp35.method !== navigation(methods[6]).AgeAssuranceMethod.GOOGLE_WALLET) {
                  outer1_6.current = true;
                  let c4 = 1;
                  c2 = 2;
                  v0 = 1;
                  obj1 = { value: null, done: false };
                  obj1[0] = v0(tmp35.method, tmp35.vendor);
                  return obj1;
                } else {
                  navigation.navigate(outer2_11.GOOGLE_WALLET_VERIFICATION);
                }
              }
              v0 = 3;
            }
          } else if (1 === tmp7) {
            c4 = 0;
            outer1_6.current = false;
            throw closure_3;
          } else if (arg0 === 1) {
            v0 = 3;
            throw arg1;
          } else if (arg0 !== 2) {
            c4 = 0;
            outer1_6.current = false;
          }
          c4 = 0;
          outer1_6.current = false;
          v0 = 3;
          obj = { value: null, done: true };
          obj[0] = arg1;
          return obj;
        } catch (tmp27) {
          closure_3 = tmp27;
          if (tmp4 === c4) {
            v0 = tmp2;
            throw tmp27;
          } else {
            c2 = tmp;
          }
        }
      }
    })();
  });
  const items1 = [navigation, initiateAgeVerificationV2, modalSessionId];
  closure_7 = initiateAgeVerificationV2.useCallback(function() {
    const self = this;
    const apply = closure_0.apply;
    if (typeof apply === "unknown") {
      let applyArgumentsResult = HermesBuiltin.applyArguments(self);
    } else {
      applyArgumentsResult = apply(self, arguments);
    }
    return applyArgumentsResult;
  }, items1);
  obj = { align: "stretch", spacing: 24, style: tmp.container, children: null };
  obj = { align: "center", justify: "center", spacing: 16, children: null };
  const items2 = [callback2(_require(methods[20]).AgeVerificationSpotIllustration, { width: 150, height: 100 }), ];
  obj1 = { align: "center", justify: "center", spacing: 8, children: null };
  obj2 = { accessibilityRole: "header", variant: "heading-xl/bold", color: "mobile-text-heading-primary", children: null };
  let obj7 = _require(methods[15]);
  obj2[3] = obj7.getAgeVerificationGetStartedTitle(entryPoint);
  const items3 = [callback2(_require(methods[21]).Text, obj2), ];
  let obj3 = { variant: "text-md/medium", color: "text-strong", style: tmp.header, children: null };
  let obj9 = _require(methods[15]);
  obj3[3] = obj9.getAgeVerificationGetStartedSubtitle(entryPoint, () => {
    const obj = modalSessionId(methods[22]);
    obj.openUrl(modalSessionId(methods[23]).getArticleURL(constants.TIGGER_PAWTECT_LEARN_MORE));
    const obj2 = modalSessionId(methods[23]);
    const result = callback(methods[16]).trackAgeVerificationModalClicked(modalSessionId, callback(methods[16]).AgeVerificationModalVersion.EXPRESSIVE_V2, callback(methods[16]).AgeVerificationModalCta.LEARN_MORE);
  }, isSuspendedUser);
  items3[1] = callback2(_require(methods[21]).Text, obj3);
  obj1[3] = items3;
  items2[1] = callback3(_require(methods[19]).Stack, obj1);
  obj[3] = items2;
  const items4 = [callback3(_require(methods[19]).Stack, obj), , , ];
  let tmp10Result = loading;
  if (loading) {
    const obj4 = { align: "center", justify: "center", style: null, children: null };
    obj4[2] = tmp.loadingContainer;
    obj4[3] = tmp10(closure_6, { size: "large" });
    tmp10Result = tmp10(tmp2(tmp3[19]).Stack, obj4);
  }
  items4[1] = tmp10Result;
  let tmp14 = !loading;
  if (!loading) {
    tmp14 = !tmp9;
  }
  if (!tmp14) {
    items4[2] = tmp14;
    tmp10Result = !loading;
    if (!loading) {
      tmp10Result = tmp9;
    }
    if (tmp10Result) {
      const obj5 = { hasIcons: true, children: null };
      obj5[1] = memo.map((children) => {
        const callback = children;
        const method = children.method;
        if (callback(methods[6]).AgeAssuranceMethod.FACIAL_AGE_ESTIMATION === method) {
          let GoogleNeutralIcon = tmp(tmp2[7]).VideoSelfieIcon;
        } else if (tmp(tmp2[6]).AgeAssuranceMethod.ID_SELFIE_MATCH === method) {
          GoogleNeutralIcon = tmp(tmp2[8]).IdCardIcon;
        } else if (tmp(tmp2[6]).AgeAssuranceMethod.GOOGLE_WALLET === method) {
          GoogleNeutralIcon = tmp(tmp2[9]).GoogleNeutralIcon;
        }
        if (null != GoogleNeutralIcon) {
          let obj = { IconComponent: null, variant: "secondary" };
          obj[0] = GoogleNeutralIcon;
          let tmp4 = outer1_8(tmp(tmp2[29]).TableRow.Icon, obj);
          let tmp3 = outer1_8;
        } else if (null != children.icon) {
          obj = { icon: null };
          obj[0] = children.icon;
          tmp4 = outer1_8(modalSessionId(tmp2[30]), obj);
          tmp3 = outer1_8;
        } else {
          tmp3 = outer1_8;
          obj = { IconComponent: null, variant: "secondary" };
          obj[0] = tmp(tmp2[31]).UnknownGameIcon;
          tmp4 = outer1_8(tmp(tmp2[29]).TableRow.Icon, obj);
        }
        const obj1 = { arrow: true, icon: tmp4, label: children.title, subLabel: null, onPress: null };
        const items = [tmp3(callback(methods[21]).Text, { variant: "text-sm/normal", color: "text-muted", children: children.description }), ];
        let tmp3Result = null != children.providedBy;
        if (tmp3Result) {
          const obj3 = { variant: "text-sm/normal", color: "text-subtle", children: null };
          obj3[2] = children.providedBy;
          tmp3Result = tmp3(tmp(tmp2[21]).Text, obj3);
        }
        items[1] = tmp3Result;
        obj1[3] = outer1_9(callback(methods[19]).Stack, { direction: "vertical", spacing: 4, children: items });
        obj1[4] = function onPress() {
          outer1_7(closure_0);
        };
        return tmp3(callback(methods[29]).TableRow, obj1, "" + children.method + "-" + children.vendor);
      });
      tmp10Result = tmp10(tmp2(tmp3[28]).TableRowGroup, obj5);
    }
    const obj6 = { children: null };
    obj7 = { children: null };
    items4[3] = tmp10Result;
    obj[3] = items4;
    obj7[0] = callback3(_require(methods[19]).Stack, obj);
    obj6[0] = tmp10(_require(methods[18]).ModalContent, obj7);
    return tmp10(_require(methods[17]).ModalScreen, obj6);
  } else {
    const obj8 = { style: null, children: null };
    obj8[0] = tmp.emptyContainer;
    obj9 = { messageType: null, button: null, children: null };
    obj9[0] = tmp2(tmp3[24]).HelpMessageTypes.ERROR;
    const obj10 = { variant: "primary", size: "sm", text: null, onPress: null };
    const intl = tmp2(tmp3[26]).intl;
    obj10[2] = intl.string(modalSessionId(tmp3[27]).hDvmYP);
    obj10[3] = refetch;
    obj9[1] = tmp10(tmp2(tmp3[25]).Button, obj10);
    const intl2 = tmp2(tmp3[26]).intl;
    const tmp16 = modalSessionId(tmp3[27]);
    obj9[2] = intl2.string(ageVerificationMethodsV2.error ? tmp16.Bkmk4Y : tmp16.cR6336);
    obj9 = tmp10(tmp2(tmp3[24]).HelpMessage, obj9);
    obj8[1] = obj9;
    tmp10(tmp2(tmp3[19]).Stack, obj8);
  }
}
({ jsx: metroImportAll, jsxs: c9 } = jsxProd);
createCacheKey = { headerStyle: null, container: null, header: null, loadingContainer: null, emptyContainer: null };
createCacheKey = { backgroundColor: require("Themes").colors.BACKGROUND_BASE_LOWER, shadowColor: "transparent" };
createCacheKey[0] = createCacheKey;
createCacheKey[1] = { alignSelf: "stretch" };
createCacheKey[2] = { textAlign: "center" };
createCacheKey[3] = { marginTop: require("Themes").space.PX_24 };
let obj1 = { marginTop: require("Themes").space.PX_24 };
createCacheKey[4] = { marginTop: require("Themes").space.PX_24 };
createCacheKey = createCacheKey.createStyles(createCacheKey);
let closure_11 = { METHODS: "METHODS", GOOGLE_WALLET_VERIFICATION: "GOOGLE_WALLET_VERIFICATION" };
let obj2 = { marginTop: require("Themes").space.PX_24 };
let result = require("noop").fileFinishedImporting("modules/age_assurance/native/AgeVerificationExpressiveV2Modal.tsx");

export default function AgeVerificationExpressiveV2Modal(entryPoint) {
  entryPoint = entryPoint.entryPoint;
  const onClose = entryPoint.onClose;
  let dependencyMap;
  let memo;
  const tmp = createCacheKey();
  dependencyMap = tmp;
  memo = React.useMemo(() => entryPoint(_undefined[35]).v4(), []);
  const items = [tmp, memo, entryPoint, onClose];
  const items1 = [memo, entryPoint];
  const memo1 = React.useMemo(() => {
    let closure_0 = closeModal;
    let closure_1 = closure_0;
    const _undefined = closure_1;
    closeModal = function closeModal() {
      let arr = callback(4490);
      arr = arr.pop();
      dependencyMap();
    };
    let obj = {};
    obj = {
      headerStyle: _undefined.headerStyle,
      headerTitle() {
        return null;
      },
      headerLeft: null,
      render: null
    };
    obj[2] = entryPoint(_undefined[33]).getHeaderCloseButton(closeModal);
    obj[3] = function render(arg0, navigation) {
      return outer1_8(outer1_12, { entryPoint: closure_1, navigation, onClose: closeModal, modalSessionId: closure_0 });
    };
    obj[outer1_11.METHODS] = obj;
    obj = {
      headerStyle: _undefined.headerStyle,
      headerTitle() {
        return null;
      },
      headerLeft: null,
      render: null
    };
    const obj3 = entryPoint(_undefined[33]);
    obj[2] = entryPoint(_undefined[33]).getHeaderBackButton();
    obj[3] = function render() {
      return outer1_8(callback(7872), { onClose: closeModal, modalSessionId: closure_0 });
    };
    obj[outer1_11.GOOGLE_WALLET_VERIFICATION] = obj;
    return obj;
  }, items);
  const effect = React.useEffect(() => {
    const result = entryPoint(_undefined[16]).trackAgeVerificationModalViewed(memo, entryPoint(_undefined[16]).AgeVerificationModalVersion.EXPRESSIVE_V2, entryPoint);
  }, items1);
  let obj = { screens: memo1, initialRouteName: constants.METHODS, headerBackTitle: null };
  const intl = entryPoint(1236).intl;
  obj[2] = intl.string(entryPoint(1236).t["13/7kX"]);
  return callback2(entryPoint(5704).Navigator, obj);
};