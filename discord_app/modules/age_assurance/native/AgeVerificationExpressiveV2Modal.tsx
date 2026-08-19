// discord_app/modules/age_assurance/native/AgeVerificationExpressiveV2Modal.tsx
import ThemesDefault from "../../../../discord_common/js/packages/tokens/native.tsx";
import asyncGeneratorStep from "../../../../_runtime/00005_asyncGeneratorStep.js";
import _slicedToArray from "../../../../_runtime/metro/00032__slicedToArray.js";
import noop from "../../../../_runtime/00019_noop.js";
import { ActivityIndicator } from "../../../../_runtime/00017_get_ActivityIndicator.js";
import { HelpdeskArticles } from "../../../Constants.tsx";
import jsxProd from "../../../../_runtime/react/00021_jsxProd.js";
import "createCacheKey";

const require = fn;
function MethodsScreen(onComplete) {
  ({ entryPoint, navigation } = onComplete);
  let _require = navigation;
  const modalSessionId = onComplete.modalSessionId;
  methods = undefined;
  let callback;
  let initiateAgeVerificationV2;
  c7 = undefined;
  let callback2;
  const tmp = callback4();
  let obj = _require(methods[12]);
  const isSuspendedUser = obj.useIsSuspendedUser();
  obj1 = _require(methods[13]);
  const ageVerificationMethodsV2 = obj1.useAgeVerificationMethodsV2();
  ({ loading, methods } = ageVerificationMethodsV2);
  ({ footerMessage, refetch } = ageVerificationMethodsV2);
  const tmp6 = callback(initiateAgeVerificationV2.useState(false), 2);
  const first = tmp6[0];
  callback = tmp6[1];
  const effect = initiateAgeVerificationV2.useEffect(() => {
    c0 = false;
    const result = callback(methods[14]).checkGoogleWalletAvailable();
    result.then((result) => {
      if (!c0) {
        closure_1_4(result);
      }
    });
    return () => {
      c0 = true;
    };
  }, []);
  let items = [methods, first];
  const memo = initiateAgeVerificationV2.useMemo(() => methods.filter((item, index) => item.method !== closure_1_0(methods[6]).AgeAssuranceMethod.GOOGLE_WALLET || closure_3), items);
  let obj2 = _require(methods[15]);
  initiateAgeVerificationV2 = obj2.useInitiateAgeVerificationV2({ onComplete: onComplete.onClose, entryPoint, onMethodUnavailable: refetch }).initiateAgeVerificationV2;
  closure_6 = initiateAgeVerificationV2.useRef(false);
  [c7, c8] = callback(initiateAgeVerificationV2.useState(null), 2);
  _require = first((arg0, arg1) => {
    closure_0 = arg0;
    closure_1 = arg1;
    c3 = 0;
    c6 = 0;
    c5 = 0;
    return (function*(arg0, arg1) {
      if (ref === 2) {
        ref = 3;
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
          ref = 2;
          if (0 === c3) {
            if (arg0 === 1) {
              ref = 3;
              throw arg1;
            } else if (arg0 === 2) {
              ref = 3;
              obj = { value: null, done: true };
              obj[0] = arg1;
              return obj;
            } else {
              closure_2 = tmp3;
              if (!ref.current) {
                obj1 = navigation(methods[16]);
                const result = obj1.trackAgeVerificationModalClicked(closure_1, navigation(methods[16]).AgeVerificationModalVersion.EXPRESSIVE_V2, navigation(methods[16]).AgeVerificationModalCta.METHOD_SELECT, navigation.method);
                if (navigation.method !== navigation(methods[6]).AgeAssuranceMethod.GOOGLE_WALLET) {
                  ref.current = true;
                  closure_1_8(tmp45);
                  let v0 = 1;
                  c3 = 2;
                  ref = 1;
                  obj1 = { value: null, done: false };
                  obj1[0] = v0(navigation.method, navigation.vendor);
                  return obj1;
                } else {
                  navigation.navigate(closure_2_11.GOOGLE_WALLET_VERIFICATION);
                }
              }
              ref = 3;
            }
          } else if (1 === tmp7) {
            v0 = 0;
            ref.current = false;
            closure_1_8(null);
            throw closure_4;
          } else if (arg0 === 1) {
            ref = 3;
            throw arg1;
          } else if (arg0 !== 2) {
            v0 = 0;
            ref.current = false;
            closure_1_8(null);
          }
          v0 = 0;
          ref.current = false;
          closure_1_8(null);
          ref = 3;
          obj = { value: null, done: true };
          obj[0] = arg1;
          return obj;
        } catch (tmp35) {
          closure_4 = tmp35;
          if (tmp4 === v0) {
            ref = tmp2;
            throw tmp35;
          } else {
            c3 = tmp;
          }
        }
      }
    })();
  });
  const items1 = [navigation, initiateAgeVerificationV2, modalSessionId];
  const callback3 = initiateAgeVerificationV2.useCallback(function() {
    const self = this;
    const apply = closure_0.apply;
    if (typeof apply === "unknown") {
      let applyArgumentsResult = HermesBuiltin.applyArguments(self);
    } else {
      applyArgumentsResult = apply(self, arguments);
    }
    return applyArgumentsResult;
  }, items1);
  obj = { align: "center", justify: "center", spacing: 16, children: null };
  const items2 = [callback2(_require(methods[20]).AgeVerificationSpotIllustration, { width: 150, height: 100 }), ];
  obj1 = { align: "center", justify: "center", spacing: 8, children: null };
  obj2 = { accessibilityRole: "header", variant: "heading-xl/bold", color: "mobile-text-heading-primary", children: null };
  let obj7 = _require(methods[15]);
  obj2[3] = obj7.getAgeVerificationGetStartedTitle(entryPoint);
  const items3 = [callback2(_require(methods[21]).Text, obj2), ];
  const obj3 = { variant: "text-md/medium", color: "text-strong", style: tmp.header, children: null };
  let obj9 = _require(methods[15]);
  obj3[3] = obj9.getAgeVerificationGetStartedSubtitle(entryPoint, () => {
    const obj = modalSessionId(methods[22]);
    obj.openUrl(modalSessionId(methods[23]).getArticleURL(_undefined.TIGGER_PAWTECT_LEARN_MORE));
    const obj2 = modalSessionId(methods[23]);
    const result = callback(methods[16]).trackAgeVerificationModalClicked(modalSessionId, callback(methods[16]).AgeVerificationModalVersion.EXPRESSIVE_V2, callback(methods[16]).AgeVerificationModalCta.LEARN_MORE);
  }, isSuspendedUser);
  items3[1] = callback2(_require(methods[21]).Text, obj3);
  obj1[3] = items3;
  items2[1] = callback3(_require(methods[19]).Stack, obj1);
  obj[3] = items2;
  const items4 = [callback3(_require(methods[19]).Stack, obj), , , , ];
  let tmp11Result = loading;
  if (loading) {
    let obj4 = { align: "center", justify: "center", style: null, children: null };
    obj4[2] = tmp.loadingContainer;
    obj4[3] = tmp11(closure_6, { size: "large" });
    tmp11Result = tmp11(tmp2(tmp3[19]).Stack, obj4);
  }
  items4[1] = tmp11Result;
  let tmp15 = !loading;
  if (!loading) {
    tmp15 = !tmp9;
  }
  if (!tmp15) {
    items4[2] = tmp15;
    tmp11Result = !loading;
    if (!loading) {
      tmp11Result = tmp9;
    }
    if (tmp11Result) {
      const obj5 = { hasIcons: true, children: null };
      obj5[1] = memo.map((item, index) => {
        const callback = item;
        const method = item.method;
        if (callback(methods[6]).AgeAssuranceMethod.FACIAL_AGE_ESTIMATION === method) {
          let GoogleNeutralIcon = tmp(methods[7]).VideoSelfieIcon;
        } else if (tmp(methods[6]).AgeAssuranceMethod.ID_SELFIE_MATCH === method) {
          GoogleNeutralIcon = tmp(methods[8]).IdCardIcon;
        } else if (tmp(methods[6]).AgeAssuranceMethod.GOOGLE_WALLET === method) {
          GoogleNeutralIcon = tmp(methods[9]).GoogleNeutralIcon;
        }
        if (null != GoogleNeutralIcon) {
          let obj = { IconComponent: null, variant: "secondary" };
          obj[0] = GoogleNeutralIcon;
          let tmp4 = _undefined2(tmp(methods[29]).TableRow.Icon, obj);
          let tmp5 = _undefined2;
        } else if (null != item.icon) {
          obj = { icon: null };
          obj[0] = item.icon;
          tmp4 = _undefined2(modalSessionId(methods[30]), obj);
          tmp5 = _undefined2;
        } else {
          obj = { IconComponent: null, variant: "secondary" };
          obj[0] = tmp(methods[31]).UnknownGameIcon;
          tmp4 = _undefined2(tmp(methods[29]).TableRow.Icon, obj);
          tmp5 = _undefined2;
        }
        const combined = "" + item.method + "-" + item.vendor;
        if (c7 === combined) {
          let tmp5Result = tmp5(closure_6, {});
        } else {
          obj1 = { size: "md", color: null };
          obj1[1] = modalSessionId(methods[11]).colors.INTERACTIVE_ICON_DEFAULT;
          tmp5Result = tmp5(tmp(methods[32]).ChevronSmallRightIcon, obj1);
        }
        const obj2 = { trailing: tmp5Result, disabled: null != c7, icon: tmp4, label: item.title, subLabel: null, onPress: null };
        const items = [tmp5(callback(methods[21]).Text, { variant: "text-sm/normal", color: "text-muted", children: item.description }), ];
        tmp5Result = null != item.providedBy;
        if (tmp5Result) {
          const obj4 = { variant: "text-sm/normal", color: "text-muted", children: null };
          obj4[2] = item.providedBy;
          tmp5Result = tmp5(tmp(methods[21]).Text, obj4);
        }
        items[1] = tmp5Result;
        obj2[4] = callback(callback(methods[19]).Stack, { direction: "vertical", spacing: 4, children: items });
        obj2[5] = function onPress() {
          return closure_1_9(closure_0, combined);
        };
        return tmp5(callback(methods[29]).TableRow, obj2, combined);
      });
      tmp11Result = tmp11(tmp2(tmp3[28]).TableRowGroup, obj5);
    }
    items4[3] = tmp11Result;
    let tmp11Result1 = !loading;
    if (!loading) {
      tmp11Result1 = tmp9;
    }
    if (tmp11Result1) {
      tmp11Result1 = null != footerMessage;
    }
    if (tmp11Result1) {
      const obj6 = { variant: "text-sm/normal", color: "text-muted", style: null, children: null };
      obj6[2] = tmp.footer;
      obj6[3] = footerMessage;
      tmp11Result1 = tmp11(tmp2(tmp3[21]).Text, obj6);
    }
    obj7 = { children: null };
    const obj8 = { children: null };
    items4[4] = tmp11Result1;
    obj[3] = items4;
    obj8[0] = callback3(_require(methods[19]).Stack, obj);
    obj7[0] = tmp11(_require(methods[18]).ModalContent, obj8);
    return tmp11(_require(methods[17]).ModalScreen, obj7);
  } else {
    obj9 = { style: null, children: null };
    obj9[0] = tmp.emptyContainer;
    let obj10 = { messageType: null, button: null, children: null };
    obj10[0] = tmp2(tmp3[24]).HelpMessageTypes.ERROR;
    const obj11 = { variant: "primary", size: "sm", text: null, onPress: null };
    const intl = tmp2(tmp3[26]).intl;
    obj11[2] = intl.string(modalSessionId(tmp3[27]).hDvmYP);
    obj11[3] = refetch;
    obj10[1] = tmp11(tmp2(tmp3[25]).Button, obj11);
    const intl2 = tmp2(tmp3[26]).intl;
    const tmp17 = modalSessionId(tmp3[27]);
    obj10[2] = intl2.string(ageVerificationMethodsV2.error ? tmp17.Bkmk4Y : tmp17.cR6336);
    obj10 = tmp11(tmp2(tmp3[24]).HelpMessage, obj10);
    obj9[1] = obj10;
    tmp11(tmp2(tmp3[19]).Stack, obj9);
  }
}
({ jsx: closure_8, jsxs: c9 } = jsxProd);
const createCacheKey = { backgroundColor: ThemesDefault.colors.BACKGROUND_BASE_LOWER, shadowColor: "transparent" };
createCacheKey[0] = createCacheKey;
createCacheKey[1] = { alignSelf: "stretch" };
createCacheKey[2] = { textAlign: "center" };
createCacheKey[3] = { marginTop: ThemesDefault.space.PX_24 };
createCacheKey[4] = { marginTop: ThemesDefault.space.PX_24 };
createCacheKey[5] = { textAlign: "center" };
let closure_10 = createCacheKey.createStyles(createCacheKey);
let closure_11 = { METHODS: "METHODS", GOOGLE_WALLET_VERIFICATION: "GOOGLE_WALLET_VERIFICATION" };
let result = require("obj132").fileFinishedImporting("modules/age_assurance/native/AgeVerificationExpressiveV2Modal.tsx");

export default function AgeVerificationExpressiveV2Modal(entryPoint) {
  entryPoint = entryPoint.entryPoint;
  const onClose = entryPoint.onClose;
  const tmp = callback4();
  dependencyMap = tmp;
  const memo = React.useMemo(() => entryPoint(closure_2[36]).v4(), []);
  const items = [tmp, memo, entryPoint, onClose];
  const items1 = [memo, entryPoint];
  const memo1 = React.useMemo(() => {
    closure_0 = closeModal;
    closure_1 = closure_0;
    closure_2 = closure_1;
    closeModal = function closeModal() {
      let arr = callback(5260);
      arr = arr.pop();
      dependencyMap();
    };
    let obj = {
      headerStyle: closure_2.headerStyle,
      headerTitle() {
        return null;
      },
      headerLeft: entryPoint(closure_2[34]).getHeaderCloseButton(closeModal),
      render(arg0, navigation) {
        return closure_1_8(closure_1_12, { entryPoint: closure_1, navigation, onClose: closeModal, modalSessionId: closure_0 });
      }
    };
    obj[closure_1_11.METHODS] = obj;
    obj = {
      headerStyle: closure_2.headerStyle,
      headerTitle() {
        return null;
      },
      headerLeft: null,
      render: null
    };
    const obj3 = entryPoint(closure_2[34]);
    obj[2] = entryPoint(closure_2[34]).getHeaderBackButton();
    obj[3] = function render() {
      return closure_1_8(callback(6686), { onClose: closeModal, modalSessionId: closure_0 });
    };
    obj[closure_1_11.GOOGLE_WALLET_VERIFICATION] = obj;
    return obj;
  }, items);
  const effect = React.useEffect(() => {
    const result = entryPoint(closure_2[16]).trackAgeVerificationModalViewed(memo, entryPoint(closure_2[16]).AgeVerificationModalVersion.EXPRESSIVE_V2, entryPoint);
  }, items1);
  let obj = { screens: memo1, initialRouteName: constants.METHODS, headerBackTitle: null };
  const intl = entryPoint(1236).intl;
  obj[2] = intl.string(entryPoint(1236).t["13/7kX"]);
  return callback2(entryPoint(6312).Navigator, obj);
};