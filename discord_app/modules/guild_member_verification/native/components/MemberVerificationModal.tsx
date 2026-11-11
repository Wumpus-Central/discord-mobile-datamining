// === Module 7640: MemberVerificationModal ===

// Module 7640 (MemberVerificationModal)
import nativeDefault from "native" /* 575 */;
import MemberVerificationTypes from "MemberVerificationTypes" /* 5289 */;
import MemberVerificationAlertActionCreators from "MemberVerificationAlertActionCreators" /* 6861 */;
import noop from "module_19" /* 19 */;
import GuildMemberStore from "GuildMemberStore" /* 5155 */;
import MemberVerificationFormStore from "MemberVerificationFormStore" /* 7641 */;
import module_1652 from "module_1652" /* 1652 */;

const require = globalThis.__r;

require = fn;
const View = fn(17).View;
const MemberVerificationFormConstants = fn(7642);
({ SCROLL_EVENT_TIMER_MS: metroImportDefault, SHEET_RADIUS, useBannerHeight: closure_8 } = MemberVerificationFormConstants);
const jsxProd = fn(21);
({ jsx: closure_9, jsxs: closure_10 } = jsxProd);
let closure_11 = module_1652.createAnimatedComponent(fn(1187).Icon);
const createStyles = fn(5243);
let obj = { flex: { flex: 1 }, flexLoading: { flex: 1, alignItems: "center", justifyContent: "center" }, scrollContent: { flexGrow: 1 }, sheet: { flexGrow: 1, marginTop: -SHEET_RADIUS, borderTopLeftRadius: SHEET_RADIUS, borderTopRightRadius: SHEET_RADIUS, backgroundColor: nativeDefault.colors.BACKGROUND_BASE_LOWER }, closeButtonContainer: { position: "absolute", right: 0 }, closeIconContainer: { position: "relative", marginTop: 10, marginRight: 20, width: 24, height: 24 }, closeIconOverBanner: null, closeIconAfterBanner: null, headerSeparator: null };
let obj3 = { flexGrow: 1, marginTop: -SHEET_RADIUS, borderTopLeftRadius: SHEET_RADIUS, borderTopRightRadius: SHEET_RADIUS, backgroundColor: nativeDefault.colors.BACKGROUND_BASE_LOWER };
obj.closeIconOverBanner = { position: "absolute", tintColor: nativeDefault.colors.WHITE };
let obj4 = { position: "absolute", tintColor: nativeDefault.colors.WHITE };
obj.closeIconAfterBanner = { position: "absolute", tintColor: nativeDefault.colors.TEXT_DEFAULT };
obj.headerSeparator = { marginHorizontal: 16, marginVertical: 12 };
let closure_12 = createStyles.createStyles(obj);
let closure_13 = { code: "(function MemberVerificationModalTsx1({contentOffset:{y:y}}){let[scrollTop]=this.__closure;return scrollTop.set(y);})" };
let closure_14 = { code: "(function MemberVerificationModalTsx2(){let[interpolate,scrollTop,bannerHeight,safeAreaTop,isDarkTheme]=this.__closure;return{opacity:interpolate(scrollTop.get(),[0,bannerHeight-safeAreaTop],[1,isDarkTheme?1:0],'clamp')};})" };
let closure_15 = { code: "(function MemberVerificationModalTsx3(){let[interpolate,scrollTop,bannerHeight,safeAreaTop]=this.__closure;return{opacity:interpolate(scrollTop.get(),[0,bannerHeight-safeAreaTop],[0,1],'clamp')};})" };
const size = fn(2);
let result = size.fileFinishedImporting("modules/guild_member_verification/native/components/MemberVerificationModal.tsx");

export default function MemberVerificationModal(guildId) {
  guildId = guildId.guildId;
  _require = guildId;
  const onClose = guildId.onClose;
  importDefault = onClose;
  let stateFromStores;
  let memo1;
  let ref;
  let tmp = closure_12();
  const rect = require("useSafeAreaInsets")();
  const top = rect.top;
  const sharedValue = require("module_1652").useSharedValue(0);
  let obj = require("module_1652");
  items = [closure_13, sharedValue];
  _require = undefined;
  [tmp6, tmp7] = items;
  class MemberVerificationModalTsx1 {
    constructor(arg0) {
      return closure_0.set(guildId.contentOffset.y);
    }
  }
  let items1 = [tmp7];
  MemberVerificationModalTsx1.__closure = items1;
  MemberVerificationModalTsx1.__workletHash = 7671790778026;
  MemberVerificationModalTsx1.__initData = tmp6;
  const obj2 = require("module_1652");
  const animatedScrollHandler = require("module_1652").useAnimatedScrollHandler(MemberVerificationModalTsx1);
  const tmp9 = require("useTheme")();
  const tmp4Result = require("shared");
  const tmp11 = closure_8();
  const isThemeDarkResult = require("shared").isThemeDark(tmp9);
  const items2 = [closure_14, require("module_1652").interpolate, sharedValue, tmp11, top, isThemeDarkResult];
  _require = undefined;
  importDefault = undefined;
  stateFromStores = undefined;
  memo1 = undefined;
  ref = undefined;
  [tmp12, tmp13, tmp14, tmp15, tmp16, tmp17] = items2;
  class MemberVerificationModalTsx2 {
    constructor() {
      tmp = closure_0;
      value = closure_1.get();
      items = [0];
      items[1] = closure_2 - closure_3;
      num = 0;
      if (closure_4) {
        num = 1;
      }
      obj = { opacity: null };
      items1 = [1];
      items1[1] = num;
      obj.opacity = tmp(value, items, items1, "clamp");
      return obj;
    }
  }
  const items3 = [tmp13, tmp14, tmp15, tmp16, tmp17];
  MemberVerificationModalTsx2.__closure = items3;
  MemberVerificationModalTsx2.__workletHash = 1795520586643;
  MemberVerificationModalTsx2.__initData = tmp12;
  const animatedStyle = require("module_1652").useAnimatedStyle(MemberVerificationModalTsx2);
  const tmp4Result5 = require("module_1652");
  const items4 = [closure_15, require("module_1652").interpolate, sharedValue, tmp11, top];
  _require = undefined;
  importDefault = undefined;
  stateFromStores = undefined;
  memo1 = undefined;
  [tmp19, tmp20, tmp21, tmp22, tmp23] = items4;
  class MemberVerificationModalTsx3 {
    constructor() {
      obj = { opacity: null };
      items = [0];
      items[1] = closure_2 - closure_3;
      obj.opacity = closure_0(closure_1.get(), items, [0, 1], "clamp");
      return obj;
    }
  }
  const items5 = [tmp20, tmp21, tmp22, tmp23];
  MemberVerificationModalTsx3.__closure = items5;
  MemberVerificationModalTsx3.__workletHash = 11491807066890;
  MemberVerificationModalTsx3.__initData = tmp19;
  const animatedStyle1 = require("module_1652").useAnimatedStyle(MemberVerificationModalTsx3);
  const tmp4Result6 = require("module_1652");
  const setInitialVerificationEffect = require("MemberVerificationModalHooks").useSetInitialVerificationEffect(guildId);
  const tmp26 = require("usePreviewDisabledGuild")(guildId);
  const tmp4Result7 = require("MemberVerificationModalHooks");
  const items6 = [MemberVerificationFormStore];
  const items7 = [guildId];
  stateFromStores = require("initialize").useStateFromStores(items6, () => MemberVerificationFormStore.get(c0), items7);
  let formFields;
  if (stateFromStores != null) {
    formFields = stateFromStores.formFields;
  }
  const items8 = [formFields];
  let formFields1;
  const memo = memo1.useMemo(() => {
    let flag;
    if (stateFromStores != null) {
      const formFields = stateFromStores.formFields;
      if (formFields != null) {
        flag = formFields.some((field_type) => field_type.field_type !== _undefined(stateFromStores[16]).VerificationFormFieldTypes.TERMS);
      }
    }
    if (flag == null) {
      flag = false;
    }
    return flag;
  }, items8);
  if (stateFromStores != null) {
    formFields1 = stateFromStores.formFields;
  }
  const items9 = [formFields1];
  memo1 = obj8.useMemo(() => {
    let formFields;
    if (stateFromStores != null) {
      formFields = stateFromStores.formFields;
    }
    if (formFields == null) {
      formFields = [];
    }
    closure_0 = Object.values(MemberVerificationTypes.VerificationFormFieldTypes);
    return formFields.some((field_type) => !closure_0.includes(field_type.field_type));
  }, items9);
  ref = obj8.useRef(onClose);
  const effect = obj8.useEffect(() => {
    closure_4.current = current;
  });
  const items10 = [memo1];
  const effect1 = obj8.useEffect(() => {
    if (memo1) {
      current = ref.current;
      if (current != null) {
        current();
      }
      const result = MemberVerificationAlertActionCreators.openMemberVerificationUpdateAlert();
    }
  }, items10);
  if (null != tmp26) {
    if (null != setInitialVerificationEffect) {
      if (!memo1) {
        let obj3 = { style: tmp.flex, children: null };
        const items11 = [closure_9(tmp2(tmp3[18]), {}), ];
        const obj4 = { style: tmp.flex, children: null };
        const obj5 = { style: null, contentContainerStyle: null, scrollEventThrottle: null, keyboardShouldPersistTaps: "handled", onScroll: null, children: null };
        ({ flex: obj11.style, scrollContent: obj11.contentContainerStyle } = tmp);
        obj5.scrollEventThrottle = scrollEventThrottle;
        obj5.onScroll = animatedScrollHandler;
        const obj6 = { guild: tmp26, scrollTop: sharedValue };
        const items12 = [closure_9(tmp4(tmp3[21]).MemberVerificationGuildBanner, obj6), ];
        const obj7 = { style: null, children: null };
        const items13 = [tmp.sheet, ];
        const obj9 = { paddingBottom: rect.bottom };
        items13[1] = obj9;
        obj7.style = items13;
        const obj10 = { guild: null, scrollTop: null, hasManualFormFields: null };
        class MemberVerificationModalTsx1 {
          constructor(arg0) {
            return closure_0.set(guildId.contentOffset.y);
          }
        }
        obj10.scrollTop = sharedValue;
        obj10.hasManualFormFields = memo;
        const items14 = [closure_9(tmp2(tmp3[21]), obj10), , ];
        const obj12 = { style: tmp.headerSeparator };
        items14[1] = closure_9(tmp2(tmp3[22]), obj12);
        const obj13 = {
          guild: tmp26,
          onSuccess: function handleSuccess(application_status) {
                  const tmp2 = null != GuildMemberStore.getSelfMember(c0);
                  if (!tmp5) {
                    const result = MemberVerificationAlertActionCreators.openMemberVerificationPendingAlert(c0);
                    const tmp3Result = MemberVerificationAlertActionCreators;
                  }
                  tmp5 = application_status.application_status !== MemberVerificationTypes.GuildJoinRequestApplicationStatuses.SUBMITTED || null != GuildMemberStore.getSelfMember(c0);
                },
          onClose
        };
        items14[2] = closure_9(tmp2(tmp3[23]), obj13);
        obj7.children = items14;
        items12[1] = closure_10(tmp35, obj7);
        obj5.children = items12;
        const items15 = [closure_10(tmp2(tmp3[6]).ScrollView, obj5), ];
        const obj14 = { style: null, children: null };
        const items16 = [tmp.closeButtonContainer, ];
        const obj15 = { top };
        items16[1] = obj15;
        obj14.style = items16;
        const obj16 = { accessibilityRole: "button", accessibilityLabel: null, style: null, onPress: null, children: null };
        const intl = tmp4(tmp3[25]).intl;
        obj16.accessibilityLabel = intl.string(tmp4(tmp3[25]).t.cpT0Cq);
        class MemberVerificationModalTsx2 {
          constructor() {
            tmp = closure_0;
            value = closure_1.get();
            items = [0];
            items[1] = closure_2 - closure_3;
            num = 0;
            if (closure_4) {
              num = 1;
            }
            obj = { opacity: null };
            items1 = [1];
            items1[1] = num;
            obj.opacity = tmp(value, items, items1, "clamp");
            return obj;
          }
        }
        obj16.onPress = function onPress() {
          let tmp;
          if (current != null) {
            tmp = current();
          }
          return tmp;
        };
        const obj17 = { source: tmp2(tmp3[26]), style: null };
        const items17 = [tmp.closeIconOverBanner, animatedStyle];
        obj17.style = items17;
        const items18 = [closure_9(closure_11, obj17), ];
        const obj18 = { source: tmp2(tmp3[26]), style: null };
        const items19 = [tmp.closeIconAfterBanner, animatedStyle1];
        obj18.style = items19;
        items18[1] = closure_9(closure_11, obj18);
        obj16.children = items18;
        obj14.children = closure_10(tmp4(tmp3[24]).PressableOpacity, obj16);
        items15[1] = closure_9(tmp35, obj14);
        obj4.children = items15;
        items11[1] = closure_10(tmp2(tmp3[20]), obj4);
        obj3.children = items11;
        const tmp2Result = tmp2(tmp3[20]);
      }
      return closure_10(tmp35, obj3);
    }
  }
  const obj19 = { style: tmp.flexLoading, children: null };
  const items20 = [closure_9(require("AuthBackgroundArt"), {}), closure_9(require("ActivityIndicator/ActivityIndicator").ActivityIndicator, {})];
  obj19.children = items20;
  obj3 = obj19;
  const tmp4Result8 = require("initialize");
};