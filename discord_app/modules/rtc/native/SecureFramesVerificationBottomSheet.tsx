// === Module 9167: SecureFramesVerificationBottomSheet ===

// Module 9167 (SecureFramesVerificationBottomSheet)
import nativeDefault from "native" /* 576 */;
import ActionSheetActionCreatorsDefault from "ActionSheetActionCreators" /* 4527 */;
import noop from "module_19" /* 19 */;

const require = fn;
const View = fn(17).View;
const SecureFramesConstants = fn(9152);
({ EPOCH_AUTHENTICATOR_CHUNK_SIZE: hasOwnProperty, EPOCH_AUTHENTICATOR_COLUMNS: metroRequire, EPOCH_AUTHENTICATOR_LENGTH: closure_7 } = SecureFramesConstants);
const jsxProd = fn(21);
({ jsx: closure_8, jsxs: closure_9 } = jsxProd);
fn(4560);
const createStyles = { iconContainer: null, icon: null, share: null, content: null, subtitle: null, footer: null };
let size = { height: 80, width: 80, borderRadius: 40, alignItems: "center", justifyContent: "center", backgroundColor: nativeDefault.colors.BACKGROUND_MOD_STRONG };
createStyles.iconContainer = size;
createStyles.icon = { height: 48, width: 48 };
createStyles.share = { height: 24 };
createStyles.content = { padding: 16 };
createStyles.subtitle = { textAlign: "center" };
createStyles.footer = { textAlign: "center", marginTop: 8 };
let closure_10 = createStyles.createStyles(createStyles);
size = fn(2);
const result = size.fileFinishedImporting("modules/rtc/native/SecureFramesVerificationBottomSheet.tsx");

export default function SecureFramesVerificationBottomSheet(onShareClick) {
  onShareClick = onShareClick.onShareClick;
  ({ title, subtitle, footer, epochAuthenticator } = onShareClick);
  const tmp = closure_10();
  onShareClick(9158);
  let obj = { fingerprintBase64: epochAuthenticator, chunkSize, desiredLength };
  const readableSecureFramesFingerprint = obj.useReadableSecureFramesFingerprint(obj);
  const items = [readableSecureFramesFingerprint, onShareClick];
  const callback = noop.useCallback(() => {
    if (null != readableSecureFramesFingerprint) {
      const joined = readableSecureFramesFingerprint.join(" ");
      ActionSheetActionCreatorsDefault.hideActionSheet();
      onShareClick(joined);
    }
  }, items);
  const callback1 = noop.useCallback(() => {
    readableSecureFramesFingerprint(dependencyMap[7]).hideActionSheet();
  }, []);
  obj = { startExpanded: true, header: null, children: null };
  const obj1 = { title: null, leading: closure_8(onShareClick(7199).ActionSheetCloseButton, { onPress: callback1 }), trailing: null };
  let obj2 = { style: tmp.share, hitSlop: 8, onPress: callback, disabled: null == readableSecureFramesFingerprint, accessibilityRole: "button", accessibilityLabel: null, children: null };
  const intl = onShareClick(1114).intl;
  obj2.accessibilityLabel = intl.string(onShareClick(1114).t.RDE0Sc);
  const obj3 = { variant: "text-md/semibold", color: "text-brand", children: null };
  const intl2 = onShareClick(1114).intl;
  obj3.children = intl2.string(onShareClick(1114).t.RDE0Sc);
  obj2.children = closure_8(onShareClick(4556).Text, obj3);
  obj1.trailing = closure_8(onShareClick(5123).PressableOpacity, obj2);
  obj.header = closure_8(onShareClick(7149).BottomSheetTitleHeader, obj1);
  const obj4 = { style: tmp.content, children: null };
  const obj5 = { spacing: 8, justify: "center", align: "center", direction: "vertical", children: null };
  const obj6 = { style: tmp.iconContainer, children: closure_8(onShareClick(5095).LockIcon, { style: tmp.icon, color: readableSecureFramesFingerprint(576).colors.TEXT_SUBTLE }) };
  const items1 = [closure_8(View, obj6), closure_8(onShareClick(4556).Text, { variant: "heading-xl/bold", color: "mobile-text-heading-primary", children: title }), closure_8(onShareClick(4556).Text, { style: tmp.subtitle, variant: "text-md/medium", color: "text-default", children: subtitle })];
  obj5.children = items1;
  const items2 = [closure_9(onShareClick(4973).Stack, obj5), , ];
  const obj9 = { title: null, trailing: null, chunks: null, columns: null };
  const obj7 = { style: tmp.icon, color: readableSecureFramesFingerprint(576).colors.TEXT_SUBTLE };
  const obj8 = { style: tmp.subtitle, variant: "text-md/medium", color: "text-default", children: subtitle };
  const tmp10 = readableSecureFramesFingerprint;
  const tmp2 = onShareClick;
  const tmp8 = closure_9;
  const tmp9 = View;
  const intl3 = onShareClick(1114).intl;
  obj9.title = intl3.string(onShareClick(1114).t.cgBTyO);
  let tmp7Result = null != readableSecureFramesFingerprint;
  if (tmp7Result) {
    const obj10 = { chunks: readableSecureFramesFingerprint };
    tmp7Result = tmp7(tmp10(9168), obj10);
  }
  obj9.trailing = tmp7Result;
  obj9.chunks = readableSecureFramesFingerprint;
  obj9.columns = columns;
  items2[1] = closure_8(readableSecureFramesFingerprint(9165), obj9);
  items2[2] = closure_8(tmp2(4556).Text, { style: tmp.footer, variant: "text-xs/normal", color: "text-muted", children: footer });
  obj4.children = items2;
  obj.children = tmp8(tmp9, obj4);
  return closure_8(onShareClick(7150).BottomSheet, obj);
};