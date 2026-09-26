// discord_app/modules/premium/file_upload/native/NitroFileUploadUpsellPromoSheet.tsx
import nativeDefault from "../../../../../discord_common/js/packages/tokens/native.tsx";
import openUserSettings from "../../../user_settings/core/native/openUserSettings.tsx";
import noop from "../../../../../_runtime/metro/00019__.js";

const require = globalThis.__r;

require = fn;
const View = fn(17).View;
const Constants = fn(1074);
({ AnalyticsPages: hasOwnProperty, UserSettingsSections: metroRequire } = Constants);
const ContentDismissActionType = fn(2042).ContentDismissActionType;
const jsx = fn(21).jsx;
const createStyles = fn(4836);
let obj2 = { illustration: { paddingTop: nativeDefault.space.PX_12 } };
let closure_9 = createStyles.createStyles(obj2);
const size = fn(2);
const result = size.fileFinishedImporting("modules/premium/file_upload/native/NitroFileUploadUpsellPromoSheet.tsx");

export default function NitroFileUploadUpsellPromoSheet(markAsDismissed) {
  markAsDismissed = markAsDismissed.markAsDismissed;
  noop = undefined;
  onPress = undefined;
  importDefault = noop.useRef(false);
  const items = [markAsDismissed];
  const callback = noop.useCallback((arg0) => {
    if (!ref.current) {
      tmp.current = true;
      markAsDismissed(arg0);
    }
  }, items);
  noop = noop.useRef(ContentDismissActionType.AUTO_DISMISS);
  const tmp = closure_9();
  const unmountEffect = markAsDismissed(callback[7]).useUnmountEffect(() => {
    callback(ref2.current);
  });
  const items1 = [callback];
  const callback1 = noop.useCallback(() => {
    callback(ContentDismissActionType.TAKE_ACTION);
    openUserSettings.openUserSettings({ screen: constants2.PREMIUM });
  }, items1);
  const obj = markAsDismissed(callback[7]);
  ({ loading, onPress } = require("usePremiumFeatureUpsellGetNitro")(
    false,
    callback1,
    constants.PREMIUM_UPSELL_FILE_UPLOAD,
  ));
  const items2 = [onPress];
  const items3 = [callback];
  const callback2 = noop.useCallback(() => {
    closure_3.current = ContentDismissActionType.TAKE_ACTION;
    onPress();
  }, items2);
  const callback3 = noop.useCallback(() => {
    callback(ContentDismissActionType.USER_DISMISS);
  }, items3);
  const obj2 = { illustration: null, title: null, description: null, onDismiss: null, actions: null };
  const tmp5 = require("usePremiumFeatureUpsellGetNitro")(false, callback1, constants.PREMIUM_UPSELL_FILE_UPLOAD);
  obj2.illustration = (
    <onPress style={tmp.illustration}>
      {jsx(markAsDismissed(callback[11]).FileUploadSpotIllustration, { accessible: false, resizeMode: "contain" })}
    </onPress>
  );
  const intl = markAsDismissed(callback[12]).intl;
  obj2.title = intl.string(require("../NitroFileUpload.messages.js")["Uty2/X"]);
  const intl2 = markAsDismissed(callback[12]).intl;
  obj2.description = intl2.string(require("../NitroFileUpload.messages.js").VAgI8Q);
  obj2.onDismiss = callback3;
  const obj4 = { grow: true, size: "lg", variant: "primary", loading, text: null, onPress: null };
  const intl3 = markAsDismissed(callback[12]).intl;
  obj4.text = intl3.string(require("../NitroFileUpload.messages.js").mRy6sO);
  let tmp9 = null;
  if (!loading) {
    tmp9 = callback2;
  }
  obj4.onPress = tmp9;
  obj2.actions = jsx(markAsDismissed(callback[14]).Button, {
    grow: true,
    size: "lg",
    variant: "primary",
    loading,
    text: null,
    onPress: null,
  });
  return jsx(markAsDismissed(callback[10]).PromoSheet, {
    illustration: null,
    title: null,
    description: null,
    onDismiss: null,
    actions: null,
  });
}
