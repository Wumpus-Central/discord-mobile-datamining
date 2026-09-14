// === Module 11506: SafetyWarningBanner ===

// Module 11506 (SafetyWarningBanner)
import nativeDefault from "native" /* 576 */;
import SafetyWarningUtils from "SafetyWarningUtils" /* 11504 */;
import noop from "module_19" /* 19 */;

require = fn;
class SafetyWarningBanner {
  constructor(arg0) {
    channelId = global.channelId;
    warningId = global.warningId;
    senderId = global.senderId;
    warningType = global.warningType;
    onDismiss = global.onDismiss;
    buttons = global.buttons;
    ({ header, description } = global);
    tmp = closure_9();
    effect = warningType.useEffect(() => {
      const obj = warningId(senderId[5]);
      obj.increment({ name: channelId(senderId[6]).MetricEvents.SAFETY_WARNING_VIEW });
    }, []);
    items = [, , , , ];
    items[0] = onDismiss;
    items[1] = channelId;
    items[2] = warningId;
    items[3] = senderId;
    items[4] = warningType;
    obj = { style: tmp.container, children: null };
    obj1 = {
      style: tmp.closeButton,
      onPress: warningType.useCallback(() => {
            if (onDismiss != null) {
              tmp();
            }
            const obj = SafetyWarningUtils;
            obj.trackCtaEvent({ channelId, warningId, senderId, warningType, cta: SafetyWarningUtils.CtaEventTypes.USER_BANNER_DISMISS });
          }, items),
      accessibilityLabel: null,
      children: null
    };
    intl = channelId(senderId[8]).intl;
    obj1.accessibilityLabel = intl.string(channelId(senderId[8]).t["1UatJ0"]);
    obj11 = { style: tmp.closeButtonIcon, source: warningId(senderId[10]), size: channelId(senderId[9]).IconSizes.MEDIUM };
    obj1.children = jsx(channelId(senderId[9]).Icon, obj11);
    items1 = [, , ];
    items1[0] = jsx(Pressable, obj1);
    obj12 = { style: tmp.contentContainer, children: null };
    obj13 = { style: tmp.safetyShieldIconContainer, children: null };
    obj14 = { style: tmp.safetyShieldIcon, source: warningId(senderId[11]), resizeMode: "contain" };
    obj13.children = jsx(onDismiss, obj14);
    items2 = [, ];
    items2[0] = jsx(View, obj13);
    obj15 = { style: tmp.textContainer, children: null };
    obj16 = { style: tmp.text, variant: "heading-md/semibold", children: header };
    items3 = [, ];
    items3[0] = jsx(channelId(senderId[12]).Text, obj16);
    obj17 = { style: tmp.text, variant: "heading-sm/normal", children: description };
    items3[1] = jsx(channelId(senderId[12]).Text, obj17);
    obj15.children = items3;
    items2[1] = jsxs(View, obj15);
    obj12.children = items2;
    items1[1] = jsxs(View, obj12);
    obj18 = {
      style: tmp.buttonsContainer,
      children: buttons.map((text, index) => {
            let str = text.variant;
            if (str == null) {
              str = "primary";
            }
            return closure_1_7(channelId(senderId[13]).Button, { size: "md", variant: str, text: text.text, accessibilityLabel: text.text, onPress: text.onpress, grow: true }, index);
          })
    };
    items1[2] = jsx(View, obj18);
    obj.children = items1;
    return jsxs(View, obj);
  }
}
get_ActivityIndicator = fn(17);
({ Image: closure_4, Pressable: hasOwnProperty, View: metroRequire } = get_ActivityIndicator);
const jsxProd = fn(21);
({ jsx: closure_7, jsxs: closure_8 } = jsxProd);
const createStyles = fn(4636);
let obj2 = { container: null, contentContainer: null, safetyShieldIconContainer: null, safetyShieldIcon: null, textContainer: null, text: null, closeButton: null, closeButtonIcon: null, buttonsContainer: null };
const merged = Object.assign(nativeDefault.shadows.SHADOW_LOW);
obj2.container = { backgroundColor: nativeDefault.colors.BACKGROUND_SURFACE_HIGHEST, paddingHorizontal: nativeDefault.space.PX_16, paddingVertical: nativeDefault.space.PX_12 };
obj2.contentContainer = { flexDirection: "row", alignItems: "center" };
obj2.safetyShieldIconContainer = { width: 42, height: 50 };
obj2.safetyShieldIcon = { flex: 1, width: "auto", height: "auto" };
let obj3 = { backgroundColor: nativeDefault.colors.BACKGROUND_SURFACE_HIGHEST, paddingHorizontal: nativeDefault.space.PX_16, paddingVertical: nativeDefault.space.PX_12 };
obj2.textContainer = { flex: 1, marginLeft: nativeDefault.space.PX_16, marginRight: nativeDefault.space.PX_40 };
let obj4 = { flex: 1, marginLeft: nativeDefault.space.PX_16, marginRight: nativeDefault.space.PX_40 };
obj2.text = { color: nativeDefault.colors.MOBILE_TEXT_HEADING_PRIMARY };
const rect = { position: "absolute", top: nativeDefault.space.PX_8, right: nativeDefault.space.PX_16, zIndex: 1 };
obj2.closeButton = rect;
let obj5 = { color: nativeDefault.colors.MOBILE_TEXT_HEADING_PRIMARY };
obj2.closeButtonIcon = { tintColor: nativeDefault.colors.INTERACTIVE_TEXT_DEFAULT };
let obj6 = { tintColor: nativeDefault.colors.INTERACTIVE_TEXT_DEFAULT };
obj2.buttonsContainer = { flexDirection: "row", marginTop: nativeDefault.space.PX_16, gap: nativeDefault.space.PX_8 };
const React7 = createStyles.createStyles(obj2);
const size = fn(2);
const result = size.fileFinishedImporting("modules/self_mod/shared/native/SafetyWarningBanner.tsx");

export default SafetyWarningBanner;
export { SafetyWarningBanner };