// discord_app/modules/waterwheels/interest/native/useInterestPickerCatalog.tsx
import InterestPickerCatalogs from "InterestPickerCatalogs.tsx";
import noop from "../../../../../_runtime/metro/00019__.js";

require = fn;
const size = fn(2);
const result = size.fileFinishedImporting("modules/waterwheels/interest/native/useInterestPickerCatalog.tsx");

export default function useInterestPickerCatalog(InterestPickerStep) {
  interestPickerGameList = interestPickerGameList(18701).useInterestPickerGameList(InterestPickerStep);
  items = [interestPickerGameList];
  return noop.useMemo(() => {
    let interestPickerCatalog = null;
    if (null != interestPickerGameList) {
      interestPickerCatalog = InterestPickerCatalogs.getInterestPickerCatalog(tmp);
    }
    return interestPickerCatalog;
  }, items);
}
