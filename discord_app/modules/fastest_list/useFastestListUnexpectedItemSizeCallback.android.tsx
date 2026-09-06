// === Module 7058: useFastestListUnexpectedItemSizeCallback ===

// Module 7058 (useFastestListUnexpectedItemSizeCallback)
import FastestListLogger from "FastestListLogger" /* 7059 */;
import noop from "module_19" /* 19 */;

require = fn;
const size = fn(2);
const result = size.fileFinishedImporting("modules/fastest_list/useFastestListUnexpectedItemSizeCallback.android.tsx");

export default function useFastestListUnexpectedItemSizeCallback(arg0) {
  const items = [arg0];
  return noop.useCallback((nativeEvent) => {
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
      obj.detailMessage = "Expected item size " + nativeEvent.sizeExpected + ", but got " + nativeEvent.size + ".";
      obj.itemPosition = combined;
      if (str == null) {
        str = "Unknown component.";
      }
      obj.itemName = str;
      obj.itemProps = joined;
      obj.listId = ref.current.listId;
      FastestListLogger.logFastestListError("Expected item size mismatch.", obj);
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