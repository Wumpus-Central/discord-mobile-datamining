// === Module 6562: useFastestListUnexpectedItemSizeCallback ===

// Module 6562 (useFastestListUnexpectedItemSizeCallback)
import FastestListLogger from "FastestListLogger" /* 6563 */;
import react from "react" /* 19 */;
import ReactCompilerGating from "ReactCompilerGating" /* 558 */;
import size from "module_2" /* 2 */;

const require = globalThis.__r;
let _require;

let tmp2 = ReactCompilerGating.isReactCompilerEnabled() ? ((arg0) => {
  let ref;
  let tmp2;
  _require = arg0;
  let obj = require("react");
  const cResult = obj.c(2);
  if (cResult[0] !== arg0) {
    const fn = function n(nativeEvent) {
      let element;
      let props;
      let str;
      nativeEvent = nativeEvent.nativeEvent;
      const current = ref.current;
      if (nativeEvent.isSectionHeader) {
        const renderSectionHeader = current.renderSectionHeader;
        let renderSectionHeaderResult;
        if (renderSectionHeader != null) {
          renderSectionHeaderResult = renderSectionHeader(nativeEvent.section);
        }
        element = renderSectionHeaderResult;
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
        props = element.props;
      }
      let type;
      if (element != null) {
        type = element.type;
      }
      if (typeof type === "function") {
        let combined;
        if (type.name.length > 0) {
          str = type.name;
        }
        let joined;
        if (null == str) {
          const _Object = Object;
          const keys = Object.keys(props);
          joined = keys.join(",");
        }
        if (nativeEvent.isSectionHeader) {
          const _HermesInternal3 = HermesInternal;
          combined = "Section header at section " + nativeEvent.section + ".";
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
        const _HermesInternal4 = HermesInternal;
        const obj = { detailMessage: "Expected item size " + nativeEvent.sizeExpected + ", but got " + nativeEvent.size + ".", itemPosition: combined, itemName: str, itemProps: joined, listId: ref.current.listId };
        if (str == null) {
          str = "Unknown component.";
        }
        const obj3 = FastestListLogger;
        obj3.logFastestListError("Expected item size mismatch.", obj);
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
    };
    cResult[0] = arg0;
    cResult[1] = fn;
    tmp2 = fn;
  } else {
    tmp2 = cResult[1];
  }
  return tmp2;
}) : ((arg0) => {
  const ref = arg0;
  const items = [arg0];
  return react.useCallback((nativeEvent) => {
    let element;
    let props;
    let str;
    nativeEvent = nativeEvent.nativeEvent;
    const current = ref.current;
    if (nativeEvent.isSectionHeader) {
      const renderSectionHeader = current.renderSectionHeader;
      let renderSectionHeaderResult;
      if (renderSectionHeader != null) {
        renderSectionHeaderResult = renderSectionHeader(nativeEvent.section);
      }
      element = renderSectionHeaderResult;
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
      props = element.props;
    }
    let type;
    if (element != null) {
      type = element.type;
    }
    if (typeof type === "function") {
      let combined;
      if (type.name.length > 0) {
        str = type.name;
      }
      let joined;
      if (null == str) {
        const _Object = Object;
        const keys = Object.keys(props);
        joined = keys.join(",");
      }
      if (nativeEvent.isSectionHeader) {
        const _HermesInternal3 = HermesInternal;
        combined = "Section header at section " + nativeEvent.section + ".";
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
      const _HermesInternal4 = HermesInternal;
      const obj = { detailMessage: "Expected item size " + nativeEvent.sizeExpected + ", but got " + nativeEvent.size + ".", itemPosition: combined, itemName: str, itemProps: joined, listId: ref.current.listId };
      if (str == null) {
        str = "Unknown component.";
      }
      const obj3 = FastestListLogger;
      obj3.logFastestListError("Expected item size mismatch.", obj);
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
});
const result = size.fileFinishedImporting("modules/fastest_list/useFastestListUnexpectedItemSizeCallback.android.tsx");

export default tmp2;