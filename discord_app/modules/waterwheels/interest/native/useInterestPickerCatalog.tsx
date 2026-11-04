// === Module 18680: useInterestPickerCatalog ===

// Module 18680 (useInterestPickerCatalog)
import InterestPickerCatalogs from "InterestPickerCatalogs" /* 18682 */;
import noop from "module_19" /* 19 */;

require = fn;
const size = fn(2);
const result = size.fileFinishedImporting("modules/waterwheels/interest/native/useInterestPickerCatalog.tsx");

export default function useInterestPickerCatalog(arg0) {
  interestPickerGameList = interestPickerGameList(18681).useInterestPickerGameList(arg0);
  items = [interestPickerGameList];
  return noop.useMemo(() => {
    let interestPickerCatalog = null;
    if (null != interestPickerGameList) {
      interestPickerCatalog = InterestPickerCatalogs.getInterestPickerCatalog(tmp);
    }
    return interestPickerCatalog;
  }, items);
};