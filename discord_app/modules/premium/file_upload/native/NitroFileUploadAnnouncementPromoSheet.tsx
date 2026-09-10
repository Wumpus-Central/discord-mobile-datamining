// === Module 17045: NitroFileUploadAnnouncementPromoSheet ===

// Module 17045 (NitroFileUploadAnnouncementPromoSheet)
import nativeDefault from "native" /* 576 */;
import _modDef2496 from "module_2496" /* 2496 */;
import openUserSettings from "openUserSettings" /* 7434 */;
import noop from "module_19" /* 19 */;

require = fn;
const View = fn(17).View;
const UserSettingsSections = fn(1074).UserSettingsSections;
const ContentDismissActionType = fn(1954).ContentDismissActionType;
const jsx = fn(21).jsx;
fn(4605);
let createStyles = { illustration: null };
createStyles = { paddingTop: nativeDefault.space.PX_12 };
createStyles.illustration = createStyles;
let closure_8 = createStyles.createStyles(createStyles);
const size = fn(2);
const result = size.fileFinishedImporting("modules/premium/file_upload/native/NitroFileUploadAnnouncementPromoSheet.tsx");

export default function NitroFileUploadAnnouncementPromoSheet(markAsDismissed) {
  markAsDismissed = markAsDismissed.markAsDismissed;
  let callback;
  importDefault = callback.useRef(false);
  dependencyMap = callback.useRef(markAsDismissed);
  const items = [markAsDismissed];
  const effect = callback.useEffect(() => {
    closure_2.current = markAsDismissed;
  }, items);
  const effect1 = callback.useEffect(() => () => {
    if (!ref.current) {
      ref2.current(constants.AUTO_DISMISS);
    }
  }, []);
  callback = callback.useCallback((AUTO_DISMISS) => {
    if (!ref.current) {
      tmp.current = true;
      ref2.current(AUTO_DISMISS);
    }
  }, []);
  const items1 = [callback];
  const items2 = [callback];
  const callback1 = callback.useCallback(() => {
    callback(ContentDismissActionType.TAKE_ACTION);
    const obj = { screen: UserSettingsSections.PREMIUM };
    obj.openUserSettings(obj);
  }, items1);
  const callback2 = callback.useCallback(() => {
    callback(ContentDismissActionType.USER_DISMISS);
  }, items2);
  let obj = { illustration: null, title: null, description: null, onDismiss: null, actions: null };
  obj = { style: closure_8().illustration, children: jsx(markAsDismissed(5742).FileUploadSpotIllustration, { accessible: false, resizeMode: "contain" }) };
  obj.illustration = <View style={closure_8().illustration}>{jsx(markAsDismissed(5742).FileUploadSpotIllustration, { accessible: false, resizeMode: "contain" })}</View>;
  const intl = markAsDismissed(1114).intl;
  obj.title = intl.string(_modDef2496.IyCdAU);
  const intl2 = markAsDismissed(1114).intl;
  obj.description = intl2.string(_modDef2496.LhfXZN);
  obj.onDismiss = callback2;
  obj = { grow: true, size: "lg", variant: "primary", text: null, onPress: null };
  const intl3 = markAsDismissed(1114).intl;
  obj.text = intl3.formatToPlainString(_modDef2496.Ocbn9P, { deepLinkToNitroHome: "" });
  obj.onPress = callback1;
  obj.actions = jsx(markAsDismissed(5025).Button, { grow: true, size: "lg", variant: "primary", text: null, onPress: null });
  return jsx(markAsDismissed(10300).PromoSheet, { grow: true, size: "lg", variant: "primary", text: null, onPress: null });
};