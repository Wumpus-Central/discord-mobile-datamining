// === Module 8752: useFastestListUnexpectedItemSizeCallback ===

// Module 8752 (useFastestListUnexpectedItemSizeCallback)
import closure_2 from "noop" /* 19 */;

const require = arg1;
const result = require("set").fileFinishedImporting("modules/fastest_list/useFastestListUnexpectedItemSizeCallback.android.tsx");

export default function useFastestListUnexpectedItemSizeCallback(arg0) {
  closure_0 = arg0;
  const items = [arg0];
  return React.useCallback((nativeEvent) => {
    nativeEvent = nativeEvent.nativeEvent;
    const current = ref.current;
    if (nativeEvent.isSectionHeader) {
      const renderSectionHeader = current.renderSectionHeader;
      let renderSectionHeaderResult;
      if (renderSectionHeader != null) {
        renderSectionHeaderResult = renderSectionHeader(nativeEvent.section);
      }
      let element = renderSectionHeaderResult;
    } else if (nativeEvent.isSectionFooter) {
      const renderSectionFooter = current.renderSectionFooter;
      let renderSectionFooterResult;
      if (renderSectionFooter != null) {
        renderSectionFooterResult = renderSectionFooter(nativeEvent.section);
      }
      element = renderSectionFooterResult;
    } else {
      element = current.renderItem(nativeEvent.section, nativeEvent.item);
    }
    if (element != null) {
      const props = element.props;
    }
    let type;
    if (element != null) {
      type = element.type;
    }
    if (typeof type === "function") {
      if (type.name.length > 0) {
        let str = type.name;
      }
      let joined;
      if (null == str) {
        const _Object = Object;
        const keys = Object.keys(props);
        joined = keys.join(",");
      }
      if (nativeEvent.isSectionHeader) {
        const _HermesInternal3 = HermesInternal;
        let combined = "Section header at section " + nativeEvent.section + ".";
      } else {
        const section = nativeEvent.section;
        if (nativeEvent.isSectionFooter) {
          const _HermesInternal2 = HermesInternal;
          combined = "Section footer at section " + section + ".";
        } else {
          const _HermesInternal = HermesInternal;
          combined = "Item at section " + section + " and index " + nativeEvent.item + ".";
        }
      }
      const obj = { detailMessage: null, itemPosition: null, itemName: null, itemProps: null, listId: null };
      const _HermesInternal4 = HermesInternal;
      obj[0] = "Expected item size " + nativeEvent.sizeExpected + ", but got " + nativeEvent.size + ".";
      obj[1] = combined;
      if (str == null) {
        str = "Unknown component.";
      }
      obj[2] = str;
      obj[3] = joined;
      obj[4] = ref.current.listId;
      ref(closure_1_1[1]).logFastestListError("Expected item size mismatch.", obj);
    }
    let type1;
    if (type != null) {
      type1 = type.type;
    }
    if (typeof type1 === "function") {
      if (type1.name.length > 0) {
        str = type1.name;
      }
    }
  }, items);
};