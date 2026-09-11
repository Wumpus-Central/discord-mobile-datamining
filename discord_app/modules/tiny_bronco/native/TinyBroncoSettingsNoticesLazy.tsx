// === Module 14871: TinyBroncoSettingsNoticesLazy ===

// Module 14871 (TinyBroncoSettingsNoticesLazy)
import jsxProd from "jsxProd" /* 21 */;
import size from "module_2" /* 2 */;

const jsx = jsxProd.jsx;
let c0 = null;
const result = size.fileFinishedImporting("modules/tiny_bronco/native/TinyBroncoSettingsNoticesLazy.tsx");

export function ContentFiltersTeenNotice() {
  return null;
}
export function ContentFiltersUnconfirmedNotice() {
  return null;
}
export function MessageRequestsNotice() {
  return null;
}
export const useTinyBroncoMessageRequestsNoticeVariant = function useTinyBroncoMessageRequestsNoticeVariant() {
  let messageRequestsNoticeVariant;
  if (_null != null) {
    messageRequestsNoticeVariant = _null.useMessageRequestsNoticeVariant();
  }
  return messageRequestsNoticeVariant;
};
export function useIsTinyBroncoSettingsNoticeEnabled() {
  return false;
}
export function shouldShowTinyBroncoUnconfirmedNotice() {
  return false;
}
export function shouldShowTinyBroncoTeenNotice() {
  return false;
}