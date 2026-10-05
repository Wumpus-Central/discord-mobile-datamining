// discord_app/modules/messages/native/emoji/EmojiOptionsActionSheet.tsx
import Fragment from "../../../../../_runtime/react/00021_Fragment.js";
import ToastUtils from "../../../toast/native/ToastUtils.tsx";
import ActionSheetActionCreatorsDefault from "../../../action_sheet/native/ActionSheetActionCreators.tsx";
import ClipboardUtils from "../../../../utils/ClipboardUtils.native.tsx";
import react from "../../../../../_runtime/00019_react.js";
import ReactCompilerGating from "../../../react_compiler/ReactCompilerGating.tsx";
import size from "../../../../../_runtime/metro/00002__.js";

let emojiSrc;

const jsx = Fragment.jsx;
const tmp2 = ReactCompilerGating.isReactCompilerEnabled()
  ? (emojiSrc) => {
      let tmp10;
      let tmp4;
      let obj = emojiSrc(576);
      const cResult = obj.c(6);
      emojiSrc = emojiSrc.emojiSrc;
      if (cResult[0] !== emojiSrc) {
        const fn = function t() {
          const obj = ClipboardUtils;
          obj.copy(emojiSrc);
          const obj2 = ToastUtils;
          const result = obj2.presentCopiedToClipboard();
          const obj3 = ActionSheetActionCreatorsDefault;
          obj3.hideActionSheet();
        };
        cResult[0] = emojiSrc;
        cResult[1] = fn;
        tmp4 = fn;
      } else {
        tmp4 = cResult[1];
      }
      if (cResult[2] === Symbol.for("react.memo_cache_sentinel")) {
        const tmp8 = jsx(emojiSrc(4839).LinkIcon, {});
        const intl = tmp(1126).intl;
        const stringResult = intl.string(emojiSrc(1126).t.cIoudn);
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
  : (emojiSrc) => {
      let intl;
      emojiSrc = emojiSrc.emojiSrc;
      const items = [emojiSrc];
      const callback = react.useCallback(() => {
        const obj = ClipboardUtils;
        obj.copy(emojiSrc);
        const obj2 = ToastUtils;
        const result = obj2.presentCopiedToClipboard();
        const obj3 = ActionSheetActionCreatorsDefault;
        obj3.hideActionSheet();
      }, items);
      const ActionSheet = emojiSrc(6701).ActionSheet;
      let obj2 = { hasIcons: true, children: null };
      const TableRowGroup = emojiSrc(6074).TableRowGroup;
      let obj3 = { icon: null, label: intl.string(emojiSrc(1126).t.cIoudn), onPress: callback };
      const TableRow = emojiSrc(5993).TableRow;
      intl = emojiSrc(1126).intl;
      return <ActionSheet>{null}</ActionSheet>;
    };
let result = size.fileFinishedImporting("modules/messages/native/emoji/EmojiOptionsActionSheet.tsx");

export default tmp2;
