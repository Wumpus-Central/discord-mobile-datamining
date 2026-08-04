import { useContext } from "noop";


export const useBottomSheet = () => {
  const tmp = useContext(require(5347) /* context */.BottomSheetContext);
  if (null === tmp) {
    throw "'useBottomSheet' cannot be used out of the BottomSheet!";
  } else {
    return tmp;
  }
};