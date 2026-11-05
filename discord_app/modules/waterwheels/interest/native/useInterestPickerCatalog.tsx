// === Module 18710: useInterestPickerCatalog ===

// Module 18710 (useInterestPickerCatalog)
import InterestPickerCatalogs from "InterestPickerCatalogs" /* 18712 */;
import noop from "module_19" /* 19 */;

require = fn;
const size = fn(2);
const result = size.fileFinishedImporting("modules/waterwheels/interest/native/useInterestPickerCatalog.tsx");

export default function useInterestPickerCatalog(InterestPickerStep) {
  interestPickerGameList = interestPickerGameList(18711).useInterestPickerGameList(InterestPickerStep);
  items = [interestPickerGameList];
  return noop.useMemo(() => {
    let interestPickerCatalog = null;
    if (null != interestPickerGameList) {
      interestPickerCatalog = InterestPickerCatalogs.getInterestPickerCatalog(tmp);
    }
    return interestPickerCatalog;
  }, items);
};