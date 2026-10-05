// discord_app/modules/emoji_picker/native/components/EmojiPickerListComponentEmpty.tsx
import react_native from "../../../../../_runtime/00017_react-native.js";
import Fragment from "../../../../../_runtime/react/00021_Fragment.js";
import react2 from "../../../../../_runtime/00576_react.js";
import nativeDefault from "../../../../../discord_common/js/packages/tokens/native.tsx";
import intl2 from "../../../../intl/index.native.tsx";
import native from "../../../../design/void/native.tsx";
import BottomSheetModal from "../../../../../_runtime/06112_BottomSheetModal.js";
import SearchEmpty from "../../../../design/components/Illustration/native/redesign/generated/SearchEmpty.tsx";
import useModalDismissGuardRefreshControl from "../../../keyboard/native/useModalDismissGuardRefreshControl.tsx";
import react from "../../../../../_runtime/00019_react.js";
import createStyles_mod from "../../../../design/components/Styles/native/createStyles.tsx";
import ReactCompilerGating from "../../../react_compiler/ReactCompilerGating.tsx";
import size from "../../../../../_runtime/metro/00002__.js";

let obj2;
let obj3;
const ScrollView = react_native.ScrollView;
const jsx = Fragment.jsx;
let createStyles = createStyles_mod;
let obj = { emptyStateContainer: { padding: 0, flex: 1 }, emptyStateBody: obj2, emptyStateImage: obj3 };
obj2 = { color: nativeDefault.colors.TEXT_SUBTLE };
createStyles = createStyles.createStyles;
obj3 = { marginBottom: nativeDefault.space.PX_8, marginTop: 0 };
let closure_5 = createStyles(obj);
const memoResult = react.memo(
  ReactCompilerGating.isReactCompilerEnabled()
    ? (arg0) => {
        let inActionSheet;
        let insetBottom;
        let insetTop;
        const obj = react2;
        const cResult = obj.c(14);
        ({ inActionSheet, insetTop, insetBottom } = arg0);
        const tmp4 = closure_5();
        if (cResult[0] === insetBottom) {
          let tmp5;
          let BottomSheetScrollView;
          let tmp10;
          if (cResult[1] === insetTop) {
            tmp5 = cResult[2];
          }
          const tmpResult = SearchEmpty;
          const searchEmptySource = tmpResult.useSearchEmptySource();
          const tmpResult2 = useModalDismissGuardRefreshControl;
          const modalDismissGuardRefreshControl = tmpResult2.useModalDismissGuardRefreshControl();
          if (inActionSheet) {
            BottomSheetScrollView = BottomSheetModal.BottomSheetScrollView;
          } else {
            BottomSheetScrollView = ScrollView;
          }
          const _Symbol = Symbol;
          if (cResult[3] === Symbol.for("react.memo_cache_sentinel")) {
            const intl = intl2.intl;
            const stringResult = intl.string(intl2.t.IxxiKF);
            cResult[3] = stringResult;
            tmp10 = stringResult;
          } else {
            tmp10 = cResult[3];
          }
          if (cResult[4] === searchEmptySource) {
            if (cResult[5] === tmp4.emptyStateBody) {
              if (cResult[6] === tmp4.emptyStateContainer) {
                let tmp12;
                if (cResult[7] === tmp4.emptyStateImage) {
                  tmp12 = cResult[8];
                }
                if (cResult[9] === BottomSheetScrollView) {
                  if (cResult[10] === tmp5) {
                    if (cResult[11] === tmp8) {
                      let tmp15;
                      if (cResult[12] === tmp12) {
                        tmp15 = cResult[13];
                      }
                      return tmp15;
                    }
                  }
                }
                const tmp17 = (
                  <BottomSheetScrollView
                    contentContainerStyle={tmp5}
                    keyboardShouldPersistTaps="always"
                    refreshControl={tmp8}
                  >
                    {tmp12}
                  </BottomSheetScrollView>
                );
                cResult[9] = BottomSheetScrollView;
                cResult[10] = tmp5;
                cResult[11] = tmp8;
                cResult[12] = tmp12;
                cResult[13] = tmp17;
                tmp15 = tmp17;
              }
            }
          }
          ({
            emptyStateBody: obj5.bodyStyle,
            emptyStateContainer: obj5.containerStyle,
            emptyStateImage: obj5.imageStyle,
          } = tmp4);
          const tmp14 = jsx(native.RefreshEmptyState, {
            source: searchEmptySource,
            body: tmp10,
            bodyStyle: null,
            containerStyle: null,
            imageStyle: null,
          });
          cResult[4] = searchEmptySource;
          cResult[5] = tmp4.emptyStateBody;
          cResult[6] = tmp4.emptyStateContainer;
          cResult[7] = tmp4.emptyStateImage;
          cResult[8] = tmp14;
          tmp12 = tmp14;
        }
        const obj4 = { marginBottom: insetBottom, marginTop: insetTop, flex: 1 };
        cResult[0] = insetBottom;
        cResult[1] = insetTop;
        cResult[2] = obj4;
        tmp5 = obj4;
      }
    : (insetBottom) => {
        let inActionSheet;
        let insetTop;
        let intl;
        ({ inActionSheet, insetTop } = insetBottom);
        insetBottom = insetBottom.insetBottom;
        const items = [insetBottom, insetTop];
        const tmp = closure_5();
        const memo = react.useMemo(() => ({ marginBottom: insetBottom, marginTop: insetTop, flex: 1 }), items);
        const obj = SearchEmpty;
        const searchEmptySource = obj.useSearchEmptySource();
        const obj2 = useModalDismissGuardRefreshControl;
        const modalDismissGuardRefreshControl = obj2.useModalDismissGuardRefreshControl();
        if (inActionSheet) {
          let BottomSheetScrollView = BottomSheetModal.BottomSheetScrollView;
        } else {
          BottomSheetScrollView = ScrollView;
        }
        let tmp8;
        if (inActionSheet) {
          tmp8 = modalDismissGuardRefreshControl;
        }
        ({
          source: searchEmptySource,
          body: intl.string(intl2.t.IxxiKF),
          bodyStyle: null,
          containerStyle: null,
          imageStyle: null,
        });
        const RefreshEmptyState = native.RefreshEmptyState;
        intl = intl2.intl;
        ({
          emptyStateBody: obj4.bodyStyle,
          emptyStateContainer: obj4.containerStyle,
          emptyStateImage: obj4.imageStyle,
        } = tmp);
        return (
          <BottomSheetScrollView contentContainerStyle={memo} keyboardShouldPersistTaps="always" refreshControl={tmp8}>
            {null}
          </BottomSheetScrollView>
        );
      },
);
const result = size.fileFinishedImporting("modules/emoji_picker/native/components/EmojiPickerListComponentEmpty.tsx");

export default memoResult;
