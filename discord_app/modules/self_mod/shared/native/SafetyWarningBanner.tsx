// === Module 11233: SafetyWarningBanner ===

// Module 11233 (SafetyWarningBanner)
import ThemesDefault from "Themes" /* 709 */;
import closure_3 from "noop" /* 19 */;
import get_ActivityIndicator from "get ActivityIndicator" /* 17 */;
import jsxProd from "jsxProd" /* 21 */;
import createCacheKey from "createCacheKey" /* 4478 */;

const require = arg1;
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
      let obj = warningId(senderId[5]);
      obj = { name: channelId(senderId[6]).MetricEvents.SAFETY_WARNING_VIEW };
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
            let obj = channelId(senderId[7]);
            obj = { channelId, warningId, senderId, warningType, cta: channelId(senderId[7]).CtaEventTypes.USER_BANNER_DISMISS };
            obj.trackCtaEvent(obj);
          }, items),
      accessibilityLabel: null,
      children: null
    };
    intl = require("getSystemLocale").intl;
    obj[2] = intl.string(require("getSystemLocale").t["1UatJ0"]);
    obj1 = { style: tmp.closeButtonIcon, source: require("registerAsset"), size: require("Button").IconSizes.MEDIUM };
    obj[3] = jsx(require("Button").Icon, obj1);
    items1 = [, , ];
    items1[0] = jsx(Pressable, obj);
    obj2 = { style: tmp.contentContainer, children: null };
    obj3 = { style: tmp.safetyShieldIconContainer, children: null };
    obj4 = { style: tmp.safetyShieldIcon, source: require("registerAsset"), resizeMode: "contain" };
    obj3[1] = jsx(onDismiss, obj4);
    items2 = [, ];
    items2[0] = jsx(View, obj3);
    obj5 = { style: tmp.textContainer, children: null };
    obj6 = { style: tmp.text, variant: "heading-md/semibold", children: header };
    items3 = [, ];
    items3[0] = jsx(require("Text").Text, obj6);
    obj7 = { style: tmp.text, variant: "heading-sm/normal", children: description };
    items3[1] = jsx(require("Text").Text, obj7);
    obj5[1] = items3;
    items2[1] = jsxs(View, obj5);
    obj2[1] = items2;
    items1[1] = jsxs(View, obj2);
    obj8 = {
      style: tmp.buttonsContainer,
      children: buttons.map((text) => {
            let str = text.variant;
            if (str == null) {
              str = "primary";
            }
            return closure_7(channelId(senderId[13]).Button, { size: "md", variant: str, text: text.text, accessibilityLabel: text.text, onPress: text.onpress, grow: true }, arg1);
          })
    };
    items1[2] = jsx(View, obj8);
    obj[1] = items1;
    return jsxs(View, obj);
  }
}
({ Image: c4, Pressable: c5, View: closure_6 } = get_ActivityIndicator);
({ jsx: error, jsxs: closure_8 } = jsxProd);
createCacheKey = { container: null, contentContainer: null, safetyShieldIconContainer: null, safetyShieldIcon: null, textContainer: null, text: null, closeButton: null, closeButtonIcon: null, buttonsContainer: null };
createCacheKey = { backgroundColor: ThemesDefault.colors.BACKGROUND_SURFACE_HIGHEST, paddingHorizontal: ThemesDefault.space.PX_16, paddingVertical: ThemesDefault.space.PX_12 };
const merged = Object.assign(ThemesDefault.shadows.SHADOW_LOW);
createCacheKey[0] = createCacheKey;
createCacheKey[1] = { flexDirection: "row", alignItems: "center" };
createCacheKey[2] = { width: 42, height: 50 };
createCacheKey[3] = { flex: 1, width: "auto", height: "auto" };
createCacheKey[4] = { flex: 1, marginLeft: ThemesDefault.space.PX_16, marginRight: ThemesDefault.space.PX_40 };
let obj1 = { flex: 1, marginLeft: ThemesDefault.space.PX_16, marginRight: ThemesDefault.space.PX_40 };
createCacheKey[5] = { color: ThemesDefault.colors.MOBILE_TEXT_HEADING_PRIMARY };
let obj2 = { color: ThemesDefault.colors.MOBILE_TEXT_HEADING_PRIMARY };
createCacheKey[6] = { position: "absolute", top: ThemesDefault.space.PX_8, right: ThemesDefault.space.PX_16, zIndex: 1 };
let obj3 = { position: "absolute", top: ThemesDefault.space.PX_8, right: ThemesDefault.space.PX_16, zIndex: 1 };
createCacheKey[7] = { tintColor: ThemesDefault.colors.INTERACTIVE_TEXT_DEFAULT };
let obj4 = { tintColor: ThemesDefault.colors.INTERACTIVE_TEXT_DEFAULT };
createCacheKey[8] = { flexDirection: "row", marginTop: ThemesDefault.space.PX_16, gap: ThemesDefault.space.PX_8 };
let closure_9 = createCacheKey.createStyles(createCacheKey);
let obj5 = { flexDirection: "row", marginTop: ThemesDefault.space.PX_16, gap: ThemesDefault.space.PX_8 };
const result = require("set").fileFinishedImporting("modules/self_mod/shared/native/SafetyWarningBanner.tsx");

export default SafetyWarningBanner;
export { SafetyWarningBanner };