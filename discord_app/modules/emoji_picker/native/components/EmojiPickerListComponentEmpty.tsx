// discord_app/modules/emoji_picker/native/components/EmojiPickerListComponentEmpty.tsx
import c from "../../../../../_runtime/00576_c.js";
import nativeDefault from "../../../../../discord_common/js/packages/tokens/native.tsx";
import util from "../../../../intl/index.native.tsx";
import native from "../../../../design/void/native.tsx";
import BottomSheetModal from "../../../../../_runtime/06305_BottomSheetModal.js";
import SearchEmpty from "../../../../design/components/Illustration/native/redesign/generated/SearchEmpty.tsx";
import useModalDismissGuardRefreshControl from "../../../keyboard/native/useModalDismissGuardRefreshControl.tsx";
import noop from "../../../../../_runtime/metro/00019__.js";

require = fn;
const ScrollView = fn(17).ScrollView;
const jsx = fn(21).jsx;
const createStyles = fn(5091);
let obj = {
  emptyStateContainer: { padding: 0, flex: 1 },
  emptyStateBody: { color: nativeDefault.colors.TEXT_SUBTLE },
  emptyStateImage: null,
};
let obj3 = { color: nativeDefault.colors.TEXT_SUBTLE };
obj.emptyStateImage = { marginBottom: nativeDefault.space.PX_8, marginTop: 0 };
let closure_5 = createStyles.createStyles(obj);
const ReactCompilerGating = fn(558);
let obj4 = { marginBottom: nativeDefault.space.PX_8, marginTop: 0 };
const size = fn(2);
const result = size.fileFinishedImporting("modules/emoji_picker/native/components/EmojiPickerListComponentEmpty.tsx");

export default noop.memo(
  ReactCompilerGating.isReactCompilerEnabled()
    ? function EmojiPickerListComponentEmpty(arg0) {
        const cResult = c.c(14);
        ({ inActionSheet, insetTop, insetBottom } = arg0);
        const tmp4 = closure_5();
        if (cResult[0] === insetBottom) {
          if (cResult[1] === insetTop) {
            let tmp5 = cResult[2];
          }
          const searchEmptySource = SearchEmpty.useSearchEmptySource();
          const tmpResult = SearchEmpty;
          const modalDismissGuardRefreshControl =
            useModalDismissGuardRefreshControl.useModalDismissGuardRefreshControl();
          if (inActionSheet) {
            let BottomSheetScrollView = BottomSheetModal.BottomSheetScrollView;
          } else {
            BottomSheetScrollView = ScrollView;
          }
          const _Symbol = Symbol;
          if (cResult[3] === Symbol.for("react.memo_cache_sentinel")) {
            const intl = util.intl;
            const stringResult = intl.string(util.t.IxxiKF);
            cResult[3] = stringResult;
            let tmp10 = stringResult;
          } else {
            tmp10 = cResult[3];
          }
          if (cResult[4] === searchEmptySource) {
            if (cResult[5] === tmp4.emptyStateBody) {
              if (cResult[6] === tmp4.emptyStateContainer) {
                if (cResult[7] === tmp4.emptyStateImage) {
                  let tmp12 = cResult[8];
                }
                if (cResult[9] === BottomSheetScrollView) {
                  if (cResult[10] === tmp5) {
                    if (cResult[11] === tmp8) {
                      if (cResult[12] === tmp12) {
                        let tmp15 = cResult[13];
                      }
                      return tmp15;
                    }
                  }
                }
                const obj2 = {
                  contentContainerStyle: tmp5,
                  keyboardShouldPersistTaps: "always",
                  refreshControl: tmp8,
                  children: tmp12,
                };
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
          const obj3 = {
            source: searchEmptySource,
            body: tmp10,
            bodyStyle: null,
            containerStyle: null,
            imageStyle: null,
          };
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
          const tmpResult2 = useModalDismissGuardRefreshControl;
        }
        const obj4 = { marginBottom: insetBottom, marginTop: insetTop, flex: 1 };
        cResult[0] = insetBottom;
        cResult[1] = insetTop;
        cResult[2] = obj4;
        tmp5 = obj4;
      }
    : function EmojiPickerListComponentEmpty(insetBottom) {
        ({ inActionSheet, insetTop } = insetBottom);
        insetBottom = insetBottom.insetBottom;
        const items = [insetBottom, insetTop];
        const memo = noop.useMemo(() => ({ marginBottom: insetBottom, marginTop: insetTop, flex: 1 }), items);
        const tmp = closure_5();
        const searchEmptySource = SearchEmpty.useSearchEmptySource();
        const modalDismissGuardRefreshControl = useModalDismissGuardRefreshControl.useModalDismissGuardRefreshControl();
        if (inActionSheet) {
          let BottomSheetScrollView = BottomSheetModal.BottomSheetScrollView;
        } else {
          BottomSheetScrollView = ScrollView;
        }
        const obj3 = {
          contentContainerStyle: memo,
          keyboardShouldPersistTaps: "always",
          refreshControl: null,
          children: null,
        };
        let tmp8;
        if (inActionSheet) {
          tmp8 = modalDismissGuardRefreshControl;
        }
        obj3.refreshControl = tmp8;
        const obj6 = { source: searchEmptySource, body: null, bodyStyle: null, containerStyle: null, imageStyle: null };
        const intl = util.intl;
        obj6.body = intl.string(util.t.IxxiKF);
        ({
          emptyStateBody: obj4.bodyStyle,
          emptyStateContainer: obj4.containerStyle,
          emptyStateImage: obj4.imageStyle,
        } = tmp);
        obj3.children = jsx(native.RefreshEmptyState, {
          source: searchEmptySource,
          body: null,
          bodyStyle: null,
          containerStyle: null,
          imageStyle: null,
        });
        return (
          <BottomSheetScrollView contentContainerStyle={memo} keyboardShouldPersistTaps="always" refreshControl={null}>
            {null}
          </BottomSheetScrollView>
        );
      },
);
