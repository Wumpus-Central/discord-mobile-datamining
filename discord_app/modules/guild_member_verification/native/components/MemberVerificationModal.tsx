// === Module 5622: MemberVerificationModal ===

// Module 5622 (MemberVerificationModal)
import DispatcherDefault from "Dispatcher" /* 573 */;
import nativeDefault from "native" /* 576 */;
import ReanimatedRexport2 from "ReanimatedRexport" /* 4343 */;
import MemberVerificationTypes from "MemberVerificationTypes" /* 4431 */;
import MemberVerificationAlertActionCreators from "MemberVerificationAlertActionCreators" /* 5578 */;
import noop from "module_19" /* 19 */;
import GuildMemberStore from "GuildMemberStore" /* 2021 */;
import MemberVerificationFormStore from "MemberVerificationFormStore" /* 5623 */;

const ReanimatedRexport = ReanimatedRexport2;

require = fn;
const View = fn(17).View;
const MemberVerificationFormConstants = fn(5624);
({ SCROLL_EVENT_TIMER_MS: closure_7, useBannerHeight: closure_8 } = MemberVerificationFormConstants);
const jsxProd = fn(21);
({ jsx: closure_9, jsxs: c10 } = jsxProd);
let closure_11 = ReanimatedRexport.createAnimatedComponent(fn(1178).Icon);
fn(4606);
let obj = { flex: { flex: 1 }, flexLoading: null, scrollContainer: null, closeButtonContainer: null, closeIconContainer: null, closeIconOverBanner: null, closeIconAfterBanner: null, headerSeparator: null };
obj = { flex: 1, alignItems: "center", justifyContent: "center", backgroundColor: nativeDefault.colors.BACKGROUND_BASE_LOW };
obj.flexLoading = obj;
const createStyles = { flex: 1, backgroundColor: nativeDefault.colors.BACKGROUND_BASE_LOWER };
obj.scrollContainer = createStyles;
obj.closeButtonContainer = { position: "absolute", right: 0 };
obj.closeIconContainer = { position: "relative", marginTop: 10, marginRight: 20, width: 24, height: 24 };
obj.closeIconOverBanner = { position: "absolute", tintColor: nativeDefault.colors.WHITE };
let obj2 = { position: "absolute", tintColor: nativeDefault.colors.WHITE };
obj.closeIconAfterBanner = { position: "absolute", tintColor: nativeDefault.colors.TEXT_DEFAULT };
obj.headerSeparator = { marginHorizontal: 16, marginVertical: 12 };
let closure_12 = createStyles.createStyles(obj);
const __initData = { code: "function MemberVerificationModalTsx1({contentOffset:{y:y}}){const{scrollTop}=this.__closure;return scrollTop.set(y);}" };
const __initData2 = { code: "function MemberVerificationModalTsx2(){const{interpolate,scrollTop,bannerHeight,safeAreaTop,isDarkTheme}=this.__closure;return{opacity:interpolate(scrollTop.get(),[0,bannerHeight-safeAreaTop],[1,isDarkTheme?1:0],'clamp')};}" };
const __initData3 = { code: "function MemberVerificationModalTsx3(){const{interpolate,scrollTop,bannerHeight,safeAreaTop}=this.__closure;return{opacity:interpolate(scrollTop.get(),[0,bannerHeight-safeAreaTop],[0,1],'clamp')};}" };
const size = fn(2);
let result = size.fileFinishedImporting("modules/guild_member_verification/native/components/MemberVerificationModal.tsx");

export default function MemberVerificationModal(guildId) {
  guildId = guildId.guildId;
  const onClose = guildId.onClose;
  let top;
  c4 = undefined;
  closure_5 = undefined;
  let stateFromStores;
  let memo1;
  closure_8 = undefined;
  let tmp = closure_12();
  const rect = onClose(top[10])();
  top = rect.top;
  let obj = guildId(top[6]);
  const sharedValue = obj.useSharedValue(0);
  let obj1 = guildId(top[6]);
  class A {
    constructor(arg0) {
      return closure_3.set(guildId.contentOffset.y);
    }
  }
  A.__closure = { scrollTop: sharedValue };
  A.__workletHash = 16447800091731;
  A.__initData = __initData;
  const animatedScrollHandler = obj1.useAnimatedScrollHandler(A);
  let obj2 = guildId(top[12]);
  const isThemeDarkResult = obj2.isThemeDark(onClose(top[11])());
  c4 = isThemeDarkResult;
  const tmp9 = closure_8();
  closure_5 = tmp9;
  let obj3 = guildId(top[6]);
  class M {
    constructor() {
      obj = closure_0(closure_2[6]);
      value = closure_3.get();
      items = [0];
      items[1] = closure_5 - top;
      num = 0;
      if (closure_4) {
        num = 1;
      }
      obj = { opacity: null };
      items1 = [1];
      items1[1] = num;
      obj.opacity = obj.interpolate(value, items, items1, "clamp");
      return obj;
    }
  }
  obj = { interpolate: guildId(top[6]).interpolate, scrollTop: sharedValue, bannerHeight: tmp9, safeAreaTop: top, isDarkTheme: isThemeDarkResult };
  M.__closure = obj;
  M.__workletHash = 14739192562122;
  M.__initData = __initData2;
  const animatedStyle = obj3.useAnimatedStyle(M);
  let obj5 = guildId(top[6]);
  class C {
    constructor() {
      obj = { opacity: null };
      obj2 = closure_0(closure_2[6]);
      items = [0];
      items[1] = closure_5 - top;
      obj.opacity = obj2.interpolate(closure_3.get(), items, [0, 1], "clamp");
      return obj;
    }
  }
  obj = { interpolate: guildId(top[6]).interpolate, scrollTop: sharedValue, bannerHeight: tmp9, safeAreaTop: top };
  C.__closure = obj;
  C.__workletHash = 4275816745587;
  C.__initData = __initData3;
  const animatedStyle1 = obj5.useAnimatedStyle(C);
  let obj7 = guildId(top[13]);
  const setInitialVerificationEffect = obj7.useSetInitialVerificationEffect(guildId);
  const tmp13 = onClose(top[14])(guildId);
  let obj8 = guildId(top[15]);
  let items = [stateFromStores];
  let items1 = [guildId];
  stateFromStores = obj8.useStateFromStores(items, () => MemberVerificationFormStore.get(guildId), items1);
  let obj9 = sharedValue;
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
        flag = formFields.some((field_type) => field_type.field_type !== guildId(top[16]).VerificationFormFieldTypes.TERMS);
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
  memo1 = obj9.useMemo(() => {
    let formFields;
    if (stateFromStores != null) {
      formFields = stateFromStores.formFields;
    }
    if (formFields == null) {
      formFields = [];
    }
    closure_0 = Object.values(MemberVerificationTypes.VerificationFormFieldTypes);
    return formFields.some((field_type) => !closure_0.includes(field_type.field_type));
  }, items3);
  closure_8 = obj9.useRef(onClose);
  const effect = obj9.useEffect(() => {
    closure_8.current = onClose;
  });
  const items4 = [memo1];
  const effect1 = obj9.useEffect(() => {
    if (memo1) {
      DispatcherDefault.wait(() => {
        const current = ref.current;
        if (current != null) {
          current();
        }
        const result = guildId(top[18]).openMemberVerificationUpdateAlert();
      });
    }
  }, items4);
  if (null != tmp13) {
    if (null != setInitialVerificationEffect) {
      if (!memo1) {
        obj1 = { style: tmp.flex, children: null };
        obj2 = { style: tmp.scrollContainer, contentContainerStyle: null, scrollEventThrottle: null, keyboardShouldPersistTaps: "handled", onScroll: null, children: null };
        obj3 = { paddingBottom: rect.bottom };
        obj2.contentContainerStyle = obj3;
        obj2.scrollEventThrottle = memo1;
        obj2.onScroll = animatedScrollHandler;
        const obj4 = { guild: tmp13, scrollTop: sharedValue, hasManualFormFields: memo };
        const items5 = [closure_9(tmp2(tmp3[21]), obj4), , ];
        obj5 = { style: tmp.headerSeparator };
        items5[1] = closure_9(tmp2(tmp3[22]), obj5);
        const obj6 = {
          guild: tmp13,
          onSuccess(application_status) {
                  const tmp2 = null != GuildMemberStore.getSelfMember(guildId);
                  if (!tmp5) {
                    const result = MemberVerificationAlertActionCreators.openMemberVerificationPendingAlert(guildId);
                    const tmp3Result = MemberVerificationAlertActionCreators;
                  }
                  tmp5 = application_status.application_status !== MemberVerificationTypes.GuildJoinRequestApplicationStatuses.SUBMITTED || null != GuildMemberStore.getSelfMember(guildId);
                },
          onClose
        };
        class A {
          constructor(arg0) {
            return closure_3.set(guildId.contentOffset.y);
          }
        }
        obj2.children = items5;
        const items6 = [closure_10(tmp2(tmp3[6]).ScrollView, obj2), ];
        obj7 = { style: null, children: null };
        const items7 = [tmp.closeButtonContainer, ];
        obj8 = { top };
        items7[1] = obj8;
        obj7.style = items7;
        obj9 = { accessibilityRole: "button", accessibilityLabel: null, style: null, onPress: null, children: null };
        const intl = tmp4(tmp3[25]).intl;
        obj9.accessibilityLabel = intl.string(tmp4(tmp3[25]).t.cpT0Cq);
        class M {
          constructor() {
            obj = closure_0(closure_2[6]);
            value = closure_3.get();
            items = [0];
            items[1] = closure_5 - top;
            num = 0;
            if (closure_4) {
              num = 1;
            }
            obj = { opacity: null };
            items1 = [1];
            items1[1] = num;
            obj.opacity = obj.interpolate(value, items, items1, "clamp");
            return obj;
          }
        }
        obj9.onPress = function onPress() {
          let tmp;
          if (onClose != null) {
            tmp = onClose();
          }
          return tmp;
        };
        const obj10 = { source: tmp2(tmp3[26]), style: null };
        const items8 = [tmp.closeIconOverBanner, animatedStyle];
        obj10.style = items8;
        const items9 = [closure_9(closure_11, obj10), ];
        const obj11 = { source: tmp2(tmp3[26]), style: null };
        const items10 = [tmp.closeIconAfterBanner, ];
        class C {
          constructor() {
            obj = { opacity: null };
            obj2 = closure_0(closure_2[6]);
            items = [0];
            items[1] = closure_5 - top;
            obj.opacity = obj2.interpolate(closure_3.get(), items, [0, 1], "clamp");
            return obj;
          }
        }
        obj11.style = items10;
        items9[1] = closure_9(closure_11, obj11);
        obj9.children = items9;
        obj7.children = closure_10(tmp4(tmp3[24]).PressableOpacity, obj9);
        items6[1] = closure_9(c4, obj7);
        obj1.children = items6;
        let tmp27 = closure_10(tmp2(tmp3[20]), obj1);
        const tmp2Result = tmp2(tmp3[20]);
      }
      return tmp27;
    }
  }
  const tmp7 = onClose(top[11])();
  tmp27 = closure_9(c4, { style: tmp.flexLoading, children: closure_9(guildId(top[19]).ActivityIndicator, {}) });
  const obj12 = { style: tmp.flexLoading, children: closure_9(guildId(top[19]).ActivityIndicator, {}) };
};