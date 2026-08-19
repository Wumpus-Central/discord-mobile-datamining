// === Module 8524: MemberVerificationModal ===

// Module 8524 (MemberVerificationModal)
import ThemesDefault from "Themes" /* 712 */;
import noop from "noop" /* 19 */;
import { View } from "get ActivityIndicator" /* 17 */;
import trackCommunicationDisabled from "trackCommunicationDisabled" /* 1990 */;
import get from "get" /* 6801 */;
import BANNER_RATIO_HEIGHT_16_9 from "BANNER_RATIO_HEIGHT_16_9" /* 8525 */;
import jsxProd from "jsxProd" /* 21 */;
import "createCacheKey";
import importDefaultResult from "module_4115" /* 4115 */;

const require = fn;
({ SCROLL_EVENT_TIMER_MS: error, useBannerHeight: closure_8 } = BANNER_RATIO_HEIGHT_16_9);
({ jsx: c9, jsxs: c10 } = jsxProd);
let closure_11 = importDefaultResult.createAnimatedComponent(require("Button").Icon);
let obj = { flex: 1, alignItems: "center", justifyContent: "center", backgroundColor: ThemesDefault.colors.BACKGROUND_BASE_LOW };
obj[1] = obj;
const createCacheKey = { flex: 1, backgroundColor: ThemesDefault.colors.BACKGROUND_BASE_LOWER };
obj[2] = createCacheKey;
obj[3] = { position: "absolute", right: 0 };
obj[4] = { position: "relative", marginTop: 10, marginRight: 20, width: 24, height: 24 };
obj[5] = { position: "absolute", tintColor: ThemesDefault.colors.WHITE };
obj[6] = { position: "absolute", tintColor: ThemesDefault.colors.TEXT_DEFAULT };
obj[7] = { marginHorizontal: 16, marginVertical: 12 };
let closure_12 = createCacheKey.createStyles(obj);
let closure_13 = { code: "function MemberVerificationModalTsx1({contentOffset:{y:y}}){const{scrollTop}=this.__closure;return scrollTop.set(y);}" };
let closure_14 = { code: "function MemberVerificationModalTsx2(){const{interpolate,scrollTop,bannerHeight,safeAreaTop,theme}=this.__closure;return{opacity:interpolate(scrollTop.get(),[0,bannerHeight-safeAreaTop],[1,theme==='dark'?1:0],'clamp')};}" };
let closure_15 = { code: "function MemberVerificationModalTsx3(){const{interpolate,scrollTop,bannerHeight,safeAreaTop}=this.__closure;return{opacity:interpolate(scrollTop.get(),[0,bannerHeight-safeAreaTop],[0,1],'clamp')};}" };
let result = require("obj132").fileFinishedImporting("modules/guild_member_verification/native/components/MemberVerificationModal.tsx");

export default function MemberVerificationModal(guildId) {
  guildId = guildId.guildId;
  const onClose = guildId.onClose;
  let top;
  closure_4 = undefined;
  closure_5 = undefined;
  let stateFromStores;
  let memo1;
  let callback;
  let tmp = callback4();
  const rect = onClose(top[10])();
  top = rect.top;
  let obj = guildId(top[6]);
  const sharedValue = obj.useSharedValue(0);
  obj1 = guildId(top[6]);
  class A {
    constructor(arg0) {
      return closure_3.set(guildId.contentOffset.y);
    }
  }
  A.__closure = { scrollTop: sharedValue };
  A.__workletHash = 16447800091731;
  A.__initData = closure_13;
  const tmp7 = onClose(top[11])();
  closure_4 = tmp7;
  const tmp8 = callback();
  closure_5 = tmp8;
  let obj2 = guildId(top[6]);
  class M {
    constructor() {
      obj = guildId(top[6]);
      value = closure_3.get();
      items = [0];
      items[1] = closure_5 - top;
      num = 0;
      if ("dark" === closure_4) {
        num = 1;
      }
      obj = { opacity: obj.interpolate(value, items, items1, "clamp") };
      items1 = [1];
      items1[1] = num;
      return obj;
    }
  }
  obj = { interpolate: guildId(top[6]).interpolate, scrollTop: sharedValue, bannerHeight: tmp8, safeAreaTop: top, theme: tmp7 };
  M.__closure = obj;
  M.__workletHash = 9776820170891;
  M.__initData = closure_14;
  const animatedStyle = obj2.useAnimatedStyle(M);
  let obj4 = guildId(top[6]);
  class C {
    constructor() {
      obj = { opacity: null };
      obj2 = guildId(top[6]);
      items = [0];
      items[1] = closure_5 - top;
      obj[0] = obj2.interpolate(closure_3.get(), items, [0, 1], "clamp");
      return obj;
    }
  }
  obj = { interpolate: guildId(top[6]).interpolate, scrollTop: sharedValue, bannerHeight: tmp8, safeAreaTop: top };
  C.__closure = obj;
  C.__workletHash = 4275816745587;
  C.__initData = closure_15;
  const animatedStyle1 = obj4.useAnimatedStyle(C);
  let obj6 = guildId(top[12]);
  const setInitialVerificationEffect = obj6.useSetInitialVerificationEffect(guildId);
  const tmp12 = onClose(top[13])(guildId);
  let obj7 = guildId(top[14]);
  let items = [stateFromStores];
  let items1 = [guildId];
  stateFromStores = obj7.useStateFromStores(items, () => stateFromStores.get(guildId), items1);
  let obj8 = sharedValue;
  let formFields;
  if (stateFromStores != null) {
    formFields = stateFromStores.formFields;
  }
  const items2 = [formFields];
  let formFields1;
  const memo = sharedValue.useMemo(() => {
    let flag;
    if (stateFromStores != null) {
      const formFields = stateFromStores.formFields;
      if (formFields != null) {
        flag = formFields.some((item, index) => item.field_type !== callback(table[15]).VerificationFormFieldTypes.TERMS);
      }
    }
    if (flag == null) {
      flag = false;
    }
    return flag;
  }, items2);
  if (stateFromStores != null) {
    formFields1 = stateFromStores.formFields;
  }
  const items3 = [formFields1];
  memo1 = obj8.useMemo(() => {
    let formFields;
    if (stateFromStores != null) {
      formFields = stateFromStores.formFields;
    }
    if (formFields == null) {
      formFields = [];
    }
    closure_0 = Object.values(guildId(top[15]).VerificationFormFieldTypes);
    return formFields.some((item, index) => !closure_0.includes(item.field_type));
  }, items3);
  callback = obj8.useRef(onClose);
  const effect = obj8.useEffect(() => {
    closure_8.current = onClose;
  });
  const items4 = [memo1];
  const effect1 = obj8.useEffect(() => {
    if (memo1) {
      onClose(top[16]).wait(() => {
        const current = ref.current;
        if (current != null) {
          current();
        }
        const result = guildId(top[17]).openMemberVerificationUpdateAlert();
      });
      const obj = onClose(top[16]);
    }
  }, items4);
  if (null != tmp12) {
    if (null != setInitialVerificationEffect) {
      if (!memo1) {
        obj1 = { style: null, children: null };
        obj1[0] = tmp.flex;
        obj2 = { style: null, contentContainerStyle: null, scrollEventThrottle: null, keyboardShouldPersistTaps: "handled", onScroll: null, children: null };
        obj2[0] = tmp.scrollContainer;
        const obj3 = { paddingBottom: null };
        obj3[0] = rect.bottom;
        obj2[1] = obj3;
        obj2[2] = memo1;
        obj2[4] = animatedScrollHandler;
        obj4 = { guild: null, scrollTop: null, hasManualFormFields: null };
        obj4[0] = tmp12;
        obj4[1] = sharedValue;
        obj4[2] = memo;
        const items5 = [callback2(tmp2(tmp3[20]), obj4), , ];
        const obj5 = { style: null };
        obj5[0] = tmp.headerSeparator;
        items5[1] = callback2(tmp2(tmp3[21]), obj5);
        obj6 = { guild: null, onSuccess: null, onClose: null };
        obj6[0] = tmp12;
        obj6[1] = function onSuccess(application_status) {
          const tmp2 = null != selfMember.getSelfMember(guildId);
          if (!tmp5) {
            const result = guildId(top[17]).openMemberVerificationPendingAlert(guildId);
            const tmp3Result = guildId(top[17]);
          }
          tmp5 = application_status.application_status !== guildId(top[15]).GuildJoinRequestApplicationStatuses.SUBMITTED || null != selfMember.getSelfMember(guildId);
        };
        obj6[2] = onClose;
        class A {
          constructor(arg0) {
            return closure_3.set(guildId.contentOffset.y);
          }
        }
        obj2[5] = items5;
        const items6 = [callback3(tmp2(tmp3[6]).ScrollView, obj2), ];
        obj7 = { style: null, children: null };
        const items7 = [tmp.closeButtonContainer, ];
        obj8 = { top: null };
        obj8[0] = top;
        items7[1] = obj8;
        obj7[0] = items7;
        const obj9 = { accessibilityRole: "button", accessibilityLabel: null, style: null, onPress: null, children: null };
        class M {
          constructor() {
            obj = guildId(top[6]);
            value = closure_3.get();
            items = [0];
            items[1] = closure_5 - top;
            num = 0;
            if ("dark" === closure_4) {
              num = 1;
            }
            obj = { opacity: obj.interpolate(value, items, items1, "clamp") };
            items1 = [1];
            items1[1] = num;
            return obj;
          }
        }
        obj9[1] = tmp25(tmp4(tmp3[24]).t.cpT0Cq);
        obj9[2] = tmp.closeIconContainer;
        obj9[3] = function onPress() {
          let tmp;
          if (onClose != null) {
            tmp = onClose();
          }
          return tmp;
        };
        const obj10 = { source: null, style: null };
        obj10[0] = tmp2(tmp3[25]);
        const items8 = [tmp.closeIconOverBanner, animatedStyle];
        obj10[1] = items8;
        const items9 = [callback2(closure_11, obj10), ];
        const obj11 = { source: null, style: null };
        obj11[0] = tmp2(tmp3[25]);
        class C {
          constructor() {
            obj = { opacity: null };
            obj2 = guildId(top[6]);
            items = [0];
            items[1] = closure_5 - top;
            obj[0] = obj2.interpolate(closure_3.get(), items, [0, 1], "clamp");
            return obj;
          }
        }
        tmp27[0] = tmp.closeIconAfterBanner;
        tmp27[1] = animatedStyle1;
        obj11[1] = tmp27;
        items9[1] = callback2(closure_11, obj11);
        obj9[4] = items9;
        obj7[1] = callback3(tmp4(tmp3[23]).PressableOpacity, obj9);
        items6[1] = callback2(closure_4, obj7);
        obj1[1] = items6;
        let tmp28 = callback3(tmp2(tmp3[19]), obj1);
        const tmp2Result = tmp2(tmp3[19]);
      }
      return tmp28;
    }
  }
  animatedScrollHandler = obj1.useAnimatedScrollHandler(A);
  tmp28 = callback2(closure_4, { style: tmp.flexLoading, children: callback2(guildId(top[18]).ActivityIndicator, {}) });
  const obj12 = { style: tmp.flexLoading, children: callback2(guildId(top[18]).ActivityIndicator, {}) };
};