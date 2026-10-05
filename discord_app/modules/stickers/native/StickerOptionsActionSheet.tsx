// discord_app/modules/stickers/native/StickerOptionsActionSheet.tsx
import Fragment from "../../../../_runtime/react/00021_Fragment.js";
import ToastUtils from "../../toast/native/ToastUtils.tsx";
import ActionSheetActionCreatorsDefault from "../../action_sheet/native/ActionSheetActionCreators.tsx";
import ClipboardUtils from "../../../utils/ClipboardUtils.native.tsx";
import react from "../../../../_runtime/00019_react.js";
import ReactCompilerGating from "../../react_compiler/ReactCompilerGating.tsx";
import size from "../../../../_runtime/metro/00002__.js";

let stickerUrl;

const jsx = Fragment.jsx;
const tmp2 = ReactCompilerGating.isReactCompilerEnabled()
  ? (stickerUrl) => {
      let tmp10;
      let tmp4;
      let obj = stickerUrl(576);
      const cResult = obj.c(6);
      stickerUrl = stickerUrl.stickerUrl;
      if (cResult[0] !== stickerUrl) {
        const fn = function t() {
          const obj = ClipboardUtils;
          obj.copy(stickerUrl);
          const obj2 = ToastUtils;
          const result = obj2.presentCopiedToClipboard();
          const obj3 = ActionSheetActionCreatorsDefault;
          obj3.hideActionSheet();
        };
        cResult[0] = stickerUrl;
        cResult[1] = fn;
        tmp4 = fn;
      } else {
        tmp4 = cResult[1];
      }
      if (cResult[2] === Symbol.for("react.memo_cache_sentinel")) {
        const tmp8 = jsx(stickerUrl(4839).LinkIcon, {});
        const intl = tmp(1126).intl;
        const stringResult = intl.string(stickerUrl(1126).t.B1ubHx);
        cResult[2] = tmp8;
        cResult[3] = stringResult;
      }
      if (cResult[4] !== tmp4) {
        const ActionSheet = tmp(6701).ActionSheet;
        let obj3 = { hasIcons: true, children: null };
        const TableRowGroup = tmp(6074).TableRowGroup;
        const tmp12 = <ActionSheet>{null}</ActionSheet>;
        cResult[4] = tmp4;
        cResult[5] = tmp12;
        tmp10 = tmp12;
      } else {
        tmp10 = cResult[5];
      }
      return tmp10;
    }
  : (stickerUrl) => {
      let intl;
      stickerUrl = stickerUrl.stickerUrl;
      const items = [stickerUrl];
      const callback = react.useCallback(() => {
        const obj = ClipboardUtils;
        obj.copy(stickerUrl);
        const obj2 = ToastUtils;
        const result = obj2.presentCopiedToClipboard();
        const obj3 = ActionSheetActionCreatorsDefault;
        obj3.hideActionSheet();
      }, items);
      const ActionSheet = stickerUrl(6701).ActionSheet;
      let obj2 = { hasIcons: true, children: null };
      const TableRowGroup = stickerUrl(6074).TableRowGroup;
      let obj3 = { icon: null, label: intl.string(stickerUrl(1126).t.B1ubHx), onPress: callback };
      const TableRow = stickerUrl(5993).TableRow;
      intl = stickerUrl(1126).intl;
      return <ActionSheet>{null}</ActionSheet>;
    };
let result = size.fileFinishedImporting("modules/stickers/native/StickerOptionsActionSheet.tsx");

export default tmp2;
