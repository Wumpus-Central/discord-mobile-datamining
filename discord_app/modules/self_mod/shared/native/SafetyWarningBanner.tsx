// === Module 11372: SafetyWarningBanner ===

// Module 11372 (SafetyWarningBanner)
import nativeDefault from "native" /* 576 */;
import SafetyWarningUtils from "SafetyWarningUtils" /* 11370 */;
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
      warningId(senderId[5]);
      const obj = { name: channelId(senderId[6]).MetricEvents.SAFETY_WARNING_VIEW };
      obj.increment(obj);
    }, []);
    items = [, , , , ];
    items[0] = onDismiss;
    items[1] = channelId;
    items[2] = warningId;
    items[3] = senderId;
    items[4] = warningType;
    obj = { style: tmp.container, children: null };
    obj = {
      style: tmp.closeButton,
      onPress: warningType.useCallback(() => {
            if (onDismiss != null) {
              tmp();
            }
            const obj = { channelId, warningId, senderId, warningType, cta: SafetyWarningUtils.CtaEventTypes.USER_BANNER_DISMISS };
            obj.trackCtaEvent(obj);
          }, items),
      accessibilityLabel: null,
      children: null
    };
    intl = channelId(senderId[8]).intl;
    obj.accessibilityLabel = intl.string(channelId(senderId[8]).t["1UatJ0"]);
    obj1 = { style: tmp.closeButtonIcon, source: warningId(senderId[10]), size: channelId(senderId[9]).IconSizes.MEDIUM };
    obj.children = jsx(channelId(senderId[9]).Icon, obj1);
    items1 = [, , ];
    items1[0] = jsx(Pressable, obj);
    obj2 = { style: tmp.contentContainer, children: null };
    obj3 = { style: tmp.safetyShieldIconContainer, children: null };
    obj4 = { style: tmp.safetyShieldIcon, source: warningId(senderId[11]), resizeMode: "contain" };
    obj3.children = jsx(onDismiss, obj4);
    items2 = [, ];
    items2[0] = jsx(View, obj3);
    obj5 = { style: tmp.textContainer, children: null };
    obj6 = { style: tmp.text, variant: "heading-md/semibold", children: header };
    items3 = [, ];
    items3[0] = jsx(channelId(senderId[12]).Text, obj6);
    obj7 = { style: tmp.text, variant: "heading-sm/normal", children: description };
    items3[1] = jsx(channelId(senderId[12]).Text, obj7);
    obj5.children = items3;
    items2[1] = jsxs(View, obj5);
    obj2.children = items2;
    items1[1] = jsxs(View, obj2);
    obj8 = {
      style: tmp.buttonsContainer,
      children: buttons.map((text, index) => {
            let str = text.variant;
            if (str == null) {
              str = "primary";
            }
            return closure_1_7(channelId(senderId[13]).Button, { size: "md", variant: str, text: text.text, accessibilityLabel: text.text, onPress: text.onpress, grow: true }, index);
          })
    };
    items1[2] = jsx(View, obj8);
    obj.children = items1;
    return jsxs(View, obj);
  }
}
get_ActivityIndicator = fn(17);
({ Image: closure_4, Pressable: hasOwnProperty, View: metroRequire } = get_ActivityIndicator);
const jsxProd = fn(21);
({ jsx: closure_7, jsxs: closure_8 } = jsxProd);
fn(4560);
let createStyles = { container: null, contentContainer: null, safetyShieldIconContainer: null, safetyShieldIcon: null, textContainer: null, text: null, closeButton: null, closeButtonIcon: null, buttonsContainer: null };
createStyles = { backgroundColor: nativeDefault.colors.BACKGROUND_SURFACE_HIGHEST, paddingHorizontal: nativeDefault.space.PX_16, paddingVertical: nativeDefault.space.PX_12 };
const merged = Object.assign(nativeDefault.shadows.SHADOW_LOW);
createStyles.container = createStyles;
createStyles.contentContainer = { flexDirection: "row", alignItems: "center" };
createStyles.safetyShieldIconContainer = { width: 42, height: 50 };
createStyles.safetyShieldIcon = { flex: 1, width: "auto", height: "auto" };
createStyles.textContainer = { flex: 1, marginLeft: nativeDefault.space.PX_16, marginRight: nativeDefault.space.PX_40 };
let obj1 = { flex: 1, marginLeft: nativeDefault.space.PX_16, marginRight: nativeDefault.space.PX_40 };
createStyles.text = { color: nativeDefault.colors.MOBILE_TEXT_HEADING_PRIMARY };
const rect = { position: "absolute", top: nativeDefault.space.PX_8, right: nativeDefault.space.PX_16, zIndex: 1 };
createStyles.closeButton = rect;
let obj2 = { color: nativeDefault.colors.MOBILE_TEXT_HEADING_PRIMARY };
createStyles.closeButtonIcon = { tintColor: nativeDefault.colors.INTERACTIVE_TEXT_DEFAULT };
let obj3 = { tintColor: nativeDefault.colors.INTERACTIVE_TEXT_DEFAULT };
createStyles.buttonsContainer = { flexDirection: "row", marginTop: nativeDefault.space.PX_16, gap: nativeDefault.space.PX_8 };
const React7 = createStyles.createStyles(createStyles);
const size = fn(2);
const result = size.fileFinishedImporting("modules/self_mod/shared/native/SafetyWarningBanner.tsx");

export default SafetyWarningBanner;
export { SafetyWarningBanner };