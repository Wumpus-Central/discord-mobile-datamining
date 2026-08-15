// discord_app/modules/rtc/native/SecureFramesVerificationBottomSheet.tsx
import noop from "noop";
import { View } from "SecureFramesCopyIcon";
import SECURE_FRAMES_LINKING_BOTTOM_SHEET_KEY from "SECURE_FRAMES_LINKING_BOTTOM_SHEET_KEY";
import jsxProd from "jsxProd";
import createCacheKey from "createCacheKey";

let c5;
let c9;
let closure_6;
let error;
let metroImportAll;
const require = arg1;
({ EPOCH_AUTHENTICATOR_CHUNK_SIZE: c5, EPOCH_AUTHENTICATOR_COLUMNS: closure_6, EPOCH_AUTHENTICATOR_LENGTH: error } = SECURE_FRAMES_LINKING_BOTTOM_SHEET_KEY);
({ jsx: metroImportAll, jsxs: c9 } = jsxProd);
createCacheKey = { iconContainer: null, icon: null, share: null, content: null, subtitle: null, footer: null };
createCacheKey = { height: 80, width: 80, borderRadius: 40, alignItems: "center", justifyContent: "center", backgroundColor: require("Themes").colors.BACKGROUND_MOD_STRONG };
createCacheKey[0] = createCacheKey;
createCacheKey[1] = { height: 48, width: 48 };
createCacheKey[2] = { height: 24 };
createCacheKey[3] = { padding: 16 };
createCacheKey[4] = { textAlign: "center" };
createCacheKey[5] = { textAlign: "center", marginTop: 8 };
createCacheKey = createCacheKey.createStyles(createCacheKey);
const result = require("SECURE_FRAMES_LINKING_BOTTOM_SHEET_KEY").fileFinishedImporting("modules/rtc/native/SecureFramesVerificationBottomSheet.tsx");

export default function SecureFramesVerificationBottomSheet(onShareClick) {
  let epochAuthenticator;
  let footer;
  let subtitle;
  let title;
  onShareClick = onShareClick.onShareClick;
  let readableSecureFramesFingerprint;
  ({ title, subtitle, footer, epochAuthenticator } = onShareClick);
  const tmp = createCacheKey();
  let obj = onShareClick(9715);
  obj = { fingerprintBase64: epochAuthenticator, chunkSize: closure_5, desiredLength: closure_7 };
  readableSecureFramesFingerprint = obj.useReadableSecureFramesFingerprint(obj);
  const items = [readableSecureFramesFingerprint, onShareClick];
  const callback = React.useCallback(() => {
    if (null != readableSecureFramesFingerprint) {
      const joined = readableSecureFramesFingerprint.join(" ");
      readableSecureFramesFingerprint(outer1_2[7]).hideActionSheet();
      onShareClick(joined);
      const obj2 = readableSecureFramesFingerprint(outer1_2[7]);
    }
  }, items);
  const callback1 = React.useCallback(() => {
    readableSecureFramesFingerprint(table[7]).hideActionSheet();
  }, []);
  obj = { startExpanded: true, header: null, children: null };
  const obj1 = { title: null, leading: null, trailing: null };
  obj1[1] = callback(onShareClick(7176).ActionSheetCloseButton, { onPress: callback1 });
  let obj2 = { style: tmp.share, hitSlop: 8, onPress: callback, disabled: null == readableSecureFramesFingerprint, accessibilityRole: "button", accessibilityLabel: null, children: null };
  const intl = onShareClick(1236).intl;
  obj2[5] = intl.string(onShareClick(1236).t.RDE0Sc);
  const obj3 = { variant: "text-md/semibold", color: "text-brand", children: null };
  const intl2 = onShareClick(1236).intl;
  obj3[2] = intl2.string(onShareClick(1236).t.RDE0Sc);
  obj2[6] = callback(onShareClick(4734).Text, obj3);
  obj1[2] = callback(onShareClick(5433).PressableOpacity, obj2);
  obj[1] = callback(onShareClick(6949).BottomSheetTitleHeader, obj1);
  const obj4 = { style: tmp.content, children: null };
  const obj5 = { spacing: 8, justify: "center", align: "center", direction: "vertical", children: null };
  const obj6 = { style: tmp.iconContainer, children: null };
  const obj7 = { style: tmp.icon, color: null };
  obj7[1] = readableSecureFramesFingerprint(712).colors.TEXT_SUBTLE;
  obj6[1] = callback(onShareClick(6890).LockIcon, obj7);
  const items1 = [callback(View, obj6), callback(onShareClick(4734).Text, { variant: "heading-xl/bold", color: "mobile-text-heading-primary", children: title }), callback(onShareClick(4734).Text, { style: tmp.subtitle, variant: "text-md/medium", color: "text-default", children: subtitle })];
  obj5[4] = items1;
  const items2 = [callback2(onShareClick(4733).Stack, obj5), , ];
  const obj9 = { title: null, trailing: null, chunks: null, columns: null };
  const intl3 = onShareClick(1236).intl;
  obj9[0] = intl3.string(onShareClick(1236).t.cgBTyO);
  let tmp7Result = null != readableSecureFramesFingerprint;
  if (tmp7Result) {
    const obj10 = { chunks: null };
    obj10[0] = readableSecureFramesFingerprint;
    tmp7Result = tmp7(readableSecureFramesFingerprint(9724), obj10);
  }
  obj9[1] = tmp7Result;
  obj9[2] = readableSecureFramesFingerprint;
  obj9[3] = closure_6;
  items2[1] = callback(readableSecureFramesFingerprint(9721), obj9);
  items2[2] = callback(onShareClick(4734).Text, { style: tmp.footer, variant: "text-xs/normal", color: "text-muted", children: footer });
  obj4[1] = items2;
  obj[2] = callback2(View, obj4);
  return callback(onShareClick(6950).BottomSheet, obj);
};