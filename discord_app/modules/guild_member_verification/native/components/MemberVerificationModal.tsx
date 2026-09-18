// discord_app/modules/guild_member_verification/native/components/MemberVerificationModal.tsx
import DispatcherDefault from "../../../../Dispatcher.tsx";
import nativeDefault from "../../../../../discord_common/js/packages/tokens/native.tsx";
import ReanimatedRexport2 from "../../../reanimated/ReanimatedRexport.tsx";
import MemberVerificationTypes from "../../MemberVerificationTypes.tsx";
import MemberVerificationAlertActionCreators from "../MemberVerificationAlertActionCreators.tsx";
import noop from "../../../../../_runtime/metro/00019__.js";
import GuildMemberStore from "../../../../stores/GuildMemberStore.tsx";
import MemberVerificationFormStore from "../../MemberVerificationFormStore.tsx";

const ReanimatedRexport = ReanimatedRexport2;

require = fn;
const View = fn(17).View;
const MemberVerificationFormConstants = fn(5743);
({ SCROLL_EVENT_TIMER_MS: closure_7, useBannerHeight: closure_8 } = MemberVerificationFormConstants);
const jsxProd = fn(21);
({ jsx: closure_9, jsxs: c10 } = jsxProd);
let closure_11 = ReanimatedRexport.createAnimatedComponent(fn(1177).Icon);
const createStyles = fn(4722);
let obj = {
  flex: { flex: 1 },
  flexLoading: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: nativeDefault.colors.BACKGROUND_BASE_LOW,
  },
  scrollContainer: null,
  closeButtonContainer: null,
  closeIconContainer: null,
  closeIconOverBanner: null,
  closeIconAfterBanner: null,
  headerSeparator: null,
};
let obj3 = {
  flex: 1,
  alignItems: "center",
  justifyContent: "center",
  backgroundColor: nativeDefault.colors.BACKGROUND_BASE_LOW,
};
obj.scrollContainer = { flex: 1, backgroundColor: nativeDefault.colors.BACKGROUND_BASE_LOWER };
obj.closeButtonContainer = { position: "absolute", right: 0 };
obj.closeIconContainer = { position: "relative", marginTop: 10, marginRight: 20, width: 24, height: 24 };
let obj4 = { flex: 1, backgroundColor: nativeDefault.colors.BACKGROUND_BASE_LOWER };
obj.closeIconOverBanner = { position: "absolute", tintColor: nativeDefault.colors.WHITE };
let obj5 = { position: "absolute", tintColor: nativeDefault.colors.WHITE };
obj.closeIconAfterBanner = { position: "absolute", tintColor: nativeDefault.colors.TEXT_DEFAULT };
obj.headerSeparator = { marginHorizontal: 16, marginVertical: 12 };
let closure_12 = createStyles.createStyles(obj);
const __initData = {
  code: "function MemberVerificationModalTsx1({contentOffset:{y:y}}){const{scrollTop}=this.__closure;return scrollTop.set(y);}",
};
const __initData2 = {
  code: "function MemberVerificationModalTsx2(){const{interpolate,scrollTop,bannerHeight,safeAreaTop,isDarkTheme}=this.__closure;return{opacity:interpolate(scrollTop.get(),[0,bannerHeight-safeAreaTop],[1,isDarkTheme?1:0],'clamp')};}",
};
const __initData3 = {
  code: "function MemberVerificationModalTsx3(){const{interpolate,scrollTop,bannerHeight,safeAreaTop}=this.__closure;return{opacity:interpolate(scrollTop.get(),[0,bannerHeight-safeAreaTop],[0,1],'clamp')};}",
};
const size = fn(2);
let result = size.fileFinishedImporting(
  "modules/guild_member_verification/native/components/MemberVerificationModal.tsx",
);

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
  const sharedValue = guildId(top[6]).useSharedValue(0);
  let obj = guildId(top[6]);
  class A {
    constructor(arg0) {
      return closure_3.set(guildId.contentOffset.y);
    }
  }
  A.__closure = { scrollTop: sharedValue };
  A.__workletHash = 16447800091731;
  A.__initData = __initData;
  let obj2 = guildId(top[6]);
  const animatedScrollHandler = guildId(top[6]).useAnimatedScrollHandler(A);
  const tmp7 = onClose(top[11])();
  const isThemeDarkResult = guildId(top[12]).isThemeDark(tmp7);
  c4 = isThemeDarkResult;
  const tmp9 = closure_8();
  closure_5 = tmp9;
  const obj3 = guildId(top[12]);
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
      obj1 = { opacity: null };
      items1 = [1];
      items1[1] = num;
      obj1.opacity = obj.interpolate(value, items, items1, "clamp");
      return obj1;
    }
  }
  const obj4 = guildId(top[6]);
  M.__closure = {
    interpolate: guildId(top[6]).interpolate,
    scrollTop: sharedValue,
    bannerHeight: tmp9,
    safeAreaTop: top,
    isDarkTheme: isThemeDarkResult,
  };
  M.__workletHash = 14739192562122;
  M.__initData = __initData2;
  const animatedStyle = obj4.useAnimatedStyle(M);
  const obj5 = {
    interpolate: guildId(top[6]).interpolate,
    scrollTop: sharedValue,
    bannerHeight: tmp9,
    safeAreaTop: top,
    isDarkTheme: isThemeDarkResult,
  };
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
  const obj6 = guildId(top[6]);
  C.__closure = {
    interpolate: guildId(top[6]).interpolate,
    scrollTop: sharedValue,
    bannerHeight: tmp9,
    safeAreaTop: top,
  };
  C.__workletHash = 4275816745587;
  C.__initData = __initData3;
  const animatedStyle1 = obj6.useAnimatedStyle(C);
  const obj7 = {
    interpolate: guildId(top[6]).interpolate,
    scrollTop: sharedValue,
    bannerHeight: tmp9,
    safeAreaTop: top,
  };
  const setInitialVerificationEffect = guildId(top[13]).useSetInitialVerificationEffect(guildId);
  const tmp13 = onClose(top[14])(guildId);
  const obj8 = guildId(top[13]);
  let items = [stateFromStores];
  let items1 = [guildId];
  stateFromStores = guildId(top[15]).useStateFromStores(items, () => MemberVerificationFormStore.get(guildId), items1);
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
        flag = formFields.some(
          (field_type) => field_type.field_type !== guildId(top[16]).VerificationFormFieldTypes.TERMS,
        );
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
  memo1 = obj10.useMemo(() => {
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
  closure_8 = obj10.useRef(onClose);
  const effect = obj10.useEffect(() => {
    closure_8.current = onClose;
  });
  const items4 = [memo1];
  const effect1 = obj10.useEffect(() => {
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
        const obj11 = { style: tmp.flex, children: null };
        const obj12 = {
          style: tmp.scrollContainer,
          contentContainerStyle: null,
          scrollEventThrottle: null,
          keyboardShouldPersistTaps: "handled",
          onScroll: null,
          children: null,
        };
        const obj13 = { paddingBottom: rect.bottom };
        obj12.contentContainerStyle = obj13;
        obj12.scrollEventThrottle = memo1;
        obj12.onScroll = animatedScrollHandler;
        const obj14 = { guild: tmp13, scrollTop: sharedValue, hasManualFormFields: memo };
        const items5 = [closure_9(tmp2(tmp3[21]), obj14), ,];
        const obj15 = { style: tmp.headerSeparator };
        items5[1] = closure_9(tmp2(tmp3[22]), obj15);
        const obj16 = {
          guild: tmp13,
          onSuccess(application_status) {
            const tmp2 = null != GuildMemberStore.getSelfMember(guildId);
            if (!tmp5) {
              const result = MemberVerificationAlertActionCreators.openMemberVerificationPendingAlert(guildId);
              const tmp3Result = MemberVerificationAlertActionCreators;
            }
            tmp5 =
              application_status.application_status !==
                MemberVerificationTypes.GuildJoinRequestApplicationStatuses.SUBMITTED ||
              null != GuildMemberStore.getSelfMember(guildId);
          },
          onClose,
        };
        class A {
          constructor(arg0) {
            return closure_3.set(guildId.contentOffset.y);
          }
        }
        obj12.children = items5;
        const items6 = [closure_10(tmp2(tmp3[6]).ScrollView, obj12)];
        const obj17 = { style: null, children: null };
        const items7 = [tmp.closeButtonContainer];
        const obj18 = { top };
        items7[1] = obj18;
        obj17.style = items7;
        const obj19 = {
          accessibilityRole: "button",
          accessibilityLabel: null,
          style: null,
          onPress: null,
          children: null,
        };
        const intl = tmp4(tmp3[25]).intl;
        obj19.accessibilityLabel = intl.string(tmp4(tmp3[25]).t.cpT0Cq);
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
            obj1 = { opacity: null };
            items1 = [1];
            items1[1] = num;
            obj1.opacity = obj.interpolate(value, items, items1, "clamp");
            return obj1;
          }
        }
        obj19.onPress = function onPress() {
          let tmp;
          if (onClose != null) {
            tmp = onClose();
          }
          return tmp;
        };
        const obj20 = { source: tmp2(tmp3[26]), style: null };
        const items8 = [tmp.closeIconOverBanner, animatedStyle];
        obj20.style = items8;
        const items9 = [closure_9(closure_11, obj20)];
        const obj21 = { source: tmp2(tmp3[26]), style: null };
        const items10 = [tmp.closeIconAfterBanner];
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
        obj21.style = items10;
        items9[1] = closure_9(closure_11, obj21);
        obj19.children = items9;
        obj17.children = closure_10(tmp4(tmp3[24]).PressableOpacity, obj19);
        items6[1] = closure_9(c4, obj17);
        obj11.children = items6;
        let tmp27 = closure_10(tmp2(tmp3[20]), obj11);
        const tmp2Result = tmp2(tmp3[20]);
      }
      return tmp27;
    }
  }
  const obj9 = guildId(top[15]);
  tmp27 = closure_9(c4, { style: tmp.flexLoading, children: closure_9(guildId(top[19]).ActivityIndicator, {}) });
  const obj22 = { style: tmp.flexLoading, children: closure_9(guildId(top[19]).ActivityIndicator, {}) };
}
