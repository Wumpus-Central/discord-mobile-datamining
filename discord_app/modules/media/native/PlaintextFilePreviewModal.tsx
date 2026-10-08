// discord_app/modules/media/native/PlaintextFilePreviewModal.tsx
import c from "../../../../_runtime/00576_c.js";
import nativeDefault from "../../../../discord_common/js/packages/tokens/native.tsx";
import util from "../../../intl/index.native.tsx";
import LinkingDefault from "../../../lib/native/Linking.tsx";
import Text_Text from "../../../design/components/Text/native/Text.tsx";
import ModalActionCreatorsDefault from "../../../actions/ModalActionCreators.tsx";
import ActivityIndicator_ActivityIndicator from "../../../design/components/ActivityIndicator/native/ActivityIndicator.native.tsx";
import NavigatorHeader from "../../../design/components/Navigator/native/NavigatorHeader.native.tsx";
import CheckmarkSmallIcon2 from "../../../design/components/Icon/native/redesign/generated/CheckmarkSmallIcon.tsx";
import SuspiciousDownloadUtils from "../../suspicious_downloads/SuspiciousDownloadUtils.tsx";
import ContextMenu from "../../../design/components/ContextMenu/native/ContextMenu.native.tsx";
import openPlaintextFilePreview from "openPlaintextFilePreview.tsx";
import SuspiciousDownloadModalActionCreatorsDefault from "../../suspicious_downloads/SuspiciousDownloadModalActionCreators.native.tsx";
import useDownloadedFile from "../useDownloadedFile.tsx";
import _objectWithoutProperties from "../../../../_runtime/metro/00109__objectWithoutProperties.js";
import _slicedToArray from "../../../../_runtime/metro/00032__.js";
import noop from "../../../../_runtime/metro/00019__.js";

require = fn;
function closeModal() {
  ModalActionCreatorsDefault.popWithKey(openPlaintextFilePreview.PLAINTEXT_FILE_PREVIEW_MODAL_KEY);
}
let closure_3 = ["ref"];
get_ActivityIndicator = fn(17);
({ ScrollView: closure_7, View: closure_8 } = get_ActivityIndicator);
const jsx = fn(21).jsx;
const constants = { PREVIEW: "PREVIEW" };
const createStyles = fn(5090);
let obj2 = {
  container: { flex: 1, backgroundColor: nativeDefault.colors.BACKGROUND_BASE_LOW },
  loadingContainer: { flex: 1, alignItems: "center", justifyContent: "center" },
  scroller: { flex: 1 },
  scrollerContent: null,
  code: null,
  errorContainer: null,
};
let obj3 = { flex: 1, backgroundColor: nativeDefault.colors.BACKGROUND_BASE_LOW };
obj2.scrollerContent = { padding: nativeDefault.space.PX_16 };
obj2.code = { fontFamily: fn(1096).Fonts.CODE_NORMAL };
let obj4 = { padding: nativeDefault.space.PX_16 };
obj2.errorContainer = { flex: 1, alignItems: "center", justifyContent: "center", padding: nativeDefault.space.PX_16 };
let closure_11 = createStyles.createStyles(obj2);
let ReactCompilerGating = fn(558);
let closure_13 = ReactCompilerGating.isReactCompilerEnabled()
  ? function PlaintextFilePreviewContent(arg0) {
      const cResult = c.c(21);
      ({ url, wordWrap } = arg0);
      const tmp4 = closure_11();
      const downloadedFile = useDownloadedFile.useDownloadedFile(url, undefined);
      ({ fileContents, bytesLeft } = downloadedFile);
      if (downloadedFile.hadError) {
        const _Symbol2 = Symbol;
        if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
          const obj3 = { variant: "text-md/normal", color: "text-muted", children: null };
          const intl = util.intl;
          obj3.children = intl.string(util.t.fEptJP);
          const tmp37 = jsx(Text_Text.Text, { variant: "text-md/normal", color: "text-muted", children: null });
          cResult[0] = tmp37;
          let first = tmp37;
        } else {
          first = cResult[0];
        }
        if (cResult[1] !== tmp4.errorContainer) {
          const obj4 = { style: tmp4.errorContainer, children: first };
          const tmp41 = <closure_1_8 style={tmp4.errorContainer}>{first}</closure_1_8>;
          cResult[1] = tmp4.errorContainer;
          cResult[2] = tmp41;
          let tmp38 = tmp41;
        } else {
          tmp38 = cResult[2];
        }
        return tmp38;
      } else if (null == fileContents) {
        const _Symbol = Symbol;
        if (cResult[3] === Symbol.for("react.memo_cache_sentinel")) {
          const tmp29 = jsx(ActivityIndicator_ActivityIndicator.ActivityIndicator, {});
          cResult[3] = tmp29;
          let tmp27 = tmp29;
        } else {
          tmp27 = cResult[3];
        }
        if (cResult[4] !== tmp4.loadingContainer) {
          const obj5 = { style: tmp4.loadingContainer, children: tmp27 };
          const tmp33 = <closure_1_8 style={tmp4.loadingContainer}>{tmp27}</closure_1_8>;
          cResult[4] = tmp4.loadingContainer;
          cResult[5] = tmp33;
          let tmp30 = tmp33;
        } else {
          tmp30 = cResult[5];
        }
        return tmp30;
      } else {
        if (cResult[6] !== bytesLeft) {
          const bytesLeftNotice = useDownloadedFile.getBytesLeftNotice(bytesLeft);
          cResult[6] = bytesLeft;
          cResult[7] = bytesLeftNotice;
          let tmp7 = bytesLeftNotice;
          const tmpResult = useDownloadedFile;
        } else {
          tmp7 = cResult[7];
        }
        let combined = fileContents;
        if ("" !== tmp7) {
          const _HermesInternal = HermesInternal;
          combined = "" + fileContents + "\n" + tmp7;
        }
        if (cResult[8] === tmp4.code) {
          if (cResult[9] === combined) {
            scrollerContent = cResult[10];
          }
          if (wordWrap) {
            if (cResult[11] === scrollerContent) {
              if (cResult[12] === tmp4.scroller) {
              }
            }
            const obj6 = { style: null, contentContainerStyle: null, children: null };
            ({ scroller: obj7.style, scrollerContent: obj7.contentContainerStyle } = tmp4);
            obj6.children = scrollerContent;
            const tmp24 = (
              <React5 style={null} contentContainerStyle={null}>
                {null}
              </React5>
            );
            cResult[11] = scrollerContent;
            ({ scroller: tmp3[12], scrollerContent } = tmp4);
            cResult[13] = scrollerContent;
            cResult[14] = tmp24;
          } else {
            if (cResult[15] === scrollerContent) {
              if (cResult[16] === tmp4.scrollerContent) {
                let tmp13 = cResult[17];
              }
              if (cResult[18] === tmp4.scroller) {
                if (cResult[19] === tmp13) {
                  let tmp17 = cResult[20];
                }
                return tmp17;
              }
              const obj8 = { style: tmp4.scroller, children: tmp13 };
              const tmp20 = <React5 style={tmp4.scroller}>{tmp13}</React5>;
              cResult[18] = tmp4.scroller;
              cResult[19] = tmp13;
              cResult[20] = tmp20;
              tmp17 = tmp20;
            }
            const obj9 = { horizontal: true, contentContainerStyle: tmp4.scrollerContent, children: scrollerContent };
            const tmp16 = (
              <React5 horizontal contentContainerStyle={tmp4.scrollerContent}>
                {scrollerContent}
              </React5>
            );
            cResult[15] = scrollerContent;
            cResult[16] = tmp4.scrollerContent;
            cResult[17] = tmp16;
            tmp13 = tmp16;
          }
        }
        const obj10 = {
          variant: "text-sm/normal",
          color: "text-default",
          style: tmp4.code,
          selectable: true,
          children: combined,
        };
        const tmp12 = jsx(Text_Text.Text, {
          variant: "text-sm/normal",
          color: "text-default",
          style: tmp4.code,
          selectable: true,
          children: combined,
        });
        cResult[8] = tmp4.code;
        cResult[9] = combined;
        cResult[10] = tmp12;
        scrollerContent = tmp12;
      }
    }
  : function PlaintextFilePreviewContent(arg0) {
      ({ url, wordWrap } = arg0);
      const tmp = closure_11();
      const downloadedFile = useDownloadedFile.useDownloadedFile(url, undefined);
      const fileContents = downloadedFile.fileContents;
      if (downloadedFile.hadError) {
        const obj2 = { style: tmp.errorContainer, children: null };
        const obj3 = { variant: "text-md/normal", color: "text-muted", children: null };
        const intl = util.intl;
        obj3.children = intl.string(util.t.fEptJP);
        obj2.children = jsx(Text_Text.Text, { variant: "text-md/normal", color: "text-muted", children: null });
        return <closure_1_8 style={tmp.errorContainer}>{null}</closure_1_8>;
      } else if (null == fileContents) {
        const obj4 = {
          style: tmp.loadingContainer,
          children: jsx(ActivityIndicator_ActivityIndicator.ActivityIndicator, {}),
        };
        return (
          <closure_1_8 style={tmp.loadingContainer}>
            {jsx(ActivityIndicator_ActivityIndicator.ActivityIndicator, {})}
          </closure_1_8>
        );
      } else {
        const bytesLeftNotice = useDownloadedFile.getBytesLeftNotice(tmp5);
        let combined = fileContents;
        if ("" !== bytesLeftNotice) {
          const _HermesInternal = HermesInternal;
          combined = "" + fileContents + "\n" + bytesLeftNotice;
        }
        const obj6 = {
          variant: "text-sm/normal",
          color: "text-default",
          style: tmp.code,
          selectable: true,
          children: combined,
        };
        const tmp10 = jsx(Text_Text.Text, {
          variant: "text-sm/normal",
          color: "text-default",
          style: tmp.code,
          selectable: true,
          children: combined,
        });
        if (wordWrap) {
          const obj7 = { style: null, contentContainerStyle: null, children: null };
          ({ scroller: obj5.style, scrollerContent: obj5.contentContainerStyle } = tmp);
          obj7.children = tmp10;
          let obj8 = obj7;
        } else {
          obj8 = { style: tmp.scroller, children: null };
          const obj9 = { horizontal: true, contentContainerStyle: tmp.scrollerContent, children: tmp10 };
          obj8.children = (
            <React5 horizontal contentContainerStyle={tmp.scrollerContent}>
              {tmp10}
            </React5>
          );
        }
        return <React5 {...obj8} />;
      }
    };
ReactCompilerGating = fn(558);
let obj5 = { flex: 1, alignItems: "center", justifyContent: "center", padding: nativeDefault.space.PX_16 };
const size = fn(2);
const result = size.fileFinishedImporting("modules/media/native/PlaintextFilePreviewModal.tsx");

export default ReactCompilerGating.isReactCompilerEnabled()
  ? function PlaintextFilePreviewModal(url) {
      const cResult = url(wordWrap[14]).c(23);
      url = url.url;
      const tmp4 = closure_11();
      importDefault = tmp4;
      [wordWrap, closure_3] = noop.useState(true);
      if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
        let intl = tmp(tmp2[17]).intl;
        const stringResult = intl.string(tmp(tmp2[17]).t.AMKNT1);
        cResult[0] = stringResult;
        let first1 = stringResult;
      } else {
        first1 = cResult[0];
      }
      let CheckmarkSmallIcon;
      if (wordWrap) {
        CheckmarkSmallIcon = tmp(tmp2[19]).CheckmarkSmallIcon;
      }
      if (cResult[1] === Symbol.for("react.memo_cache_sentinel")) {
        const fn = function p() {
          return closure_3((arg0) => !arg0);
        };
        cResult[1] = fn;
        let tmp10 = fn;
      } else {
        tmp10 = cResult[1];
      }
      if (cResult[2] !== CheckmarkSmallIcon) {
        let obj2 = { label: first1, trailingIndicator: CheckmarkSmallIcon, action: tmp10 };
        cResult[2] = CheckmarkSmallIcon;
        cResult[3] = obj2;
        let tmp11 = obj2;
      } else {
        tmp11 = cResult[3];
      }
      if (cResult[4] === Symbol.for("react.memo_cache_sentinel")) {
        const intl2 = tmp(tmp2[17]).intl;
        const stringResult1 = intl2.string(tmp(tmp2[17]).t["1WjMbC"]);
        cResult[4] = stringResult1;
        let tmp12 = stringResult1;
      } else {
        tmp12 = cResult[4];
      }
      if (cResult[5] !== url) {
        let obj3 = {
          label: tmp12,
          action() {
            if (null == obj.isSuspiciousDownload(url)) {
              LinkingDefault.openURL(url);
            } else {
              SuspiciousDownloadModalActionCreatorsDefault.show(url);
            }
            obj = SuspiciousDownloadUtils;
          },
        };
        cResult[5] = url;
        cResult[6] = obj3;
        let tmp14 = obj3;
      } else {
        tmp14 = cResult[6];
      }
      if (cResult[7] === tmp11) {
        if (cResult[8] === tmp14) {
          let tmp15 = cResult[9];
        }
        items = tmp15;
        const _Symbol = Symbol;
        if (cResult[10] === Symbol.for("react.memo_cache_sentinel")) {
          const headerCloseButton = tmp(tmp2[20]).getHeaderCloseButton(closeModal);
          cResult[10] = headerCloseButton;
          const tmpResult = tmp(tmp2[20]);
        }
        if (cResult[11] !== tmp15) {
          class A {
            constructor() {
              obj = {
                items: closure_4,
                children(ref) {
                  const obj = { IconComponent: url(9180).MoreHorizontalIcon, accessibilityLabel: null, ref: null };
                  const intl = url(1126).intl;
                  obj.accessibilityLabel = intl.string(url(1126).t.PdRCRg);
                  obj.ref = ref.ref;
                  const merged = Object.assign(items(ref, closure_1_3));
                  return closure_1_9(url(7079).HeaderActionButton, obj);
                },
              };
              return jsx(closure_0(closure_2[21]).ContextMenu, obj);
            }
          }
          cResult[11] = tmp15;
          cResult[12] = A;
        } else {
          class A {
            constructor() {
              obj = {
                items: closure_4,
                children(ref) {
                  const obj = { IconComponent: url(9180).MoreHorizontalIcon, accessibilityLabel: null, ref: null };
                  const intl = url(1126).intl;
                  obj.accessibilityLabel = intl.string(url(1126).t.PdRCRg);
                  obj.ref = ref.ref;
                  const merged = Object.assign(items(ref, closure_1_3));
                  return closure_1_9(url(7079).HeaderActionButton, obj);
                },
              };
              return jsx(closure_0(closure_2[21]).ContextMenu, obj);
            }
          }
        }
        if (cResult[13] === tmp4.container) {
          class A {
            constructor() {
              obj = {
                items: closure_4,
                children(ref) {
                  const obj = { IconComponent: url(9180).MoreHorizontalIcon, accessibilityLabel: null, ref: null };
                  const intl = url(1126).intl;
                  obj.accessibilityLabel = intl.string(url(1126).t.PdRCRg);
                  obj.ref = ref.ref;
                  const merged = Object.assign(items(ref, closure_1_3));
                  return closure_1_9(url(7079).HeaderActionButton, obj);
                },
              };
              return jsx(closure_0(closure_2[21]).ContextMenu, obj);
            }
          }
        }
        class N {
          constructor() {
            obj = { style: closure_1.container, children: null };
            obj1 = { url, wordWrap: closure_2 };
            obj.children = jsx(PlaintextFilePreviewContent, obj1);
            return jsx(View, obj);
          }
        }
        cResult[13] = tmp4.container;
        cResult[14] = url;
        cResult[15] = wordWrap;
        cResult[16] = N;
      }
      items = [tmp11, tmp14];
      cResult[7] = tmp11;
      cResult[8] = tmp14;
      cResult[9] = items;
      tmp15 = items;
      let obj = url(wordWrap[14]);
    }
  : function PlaintextFilePreviewModal(url) {
      url = url.url;
      const fileName = url.fileName;
      let memo;
      const tmp = closure_11();
      dependencyMap = tmp;
      const tmp2 = memo(noop.useState(true), 2);
      const first = tmp2[0];
      closure_4 = tmp2[1];
      items = [url, first];
      memo = noop.useMemo(() => {
        let obj = { label: null, trailingIndicator: null, action: null };
        const intl = util.intl;
        obj.label = intl.string(util.t.AMKNT1);
        let CheckmarkSmallIcon;
        if (first) {
          CheckmarkSmallIcon = CheckmarkSmallIcon2.CheckmarkSmallIcon;
        }
        obj.trailingIndicator = CheckmarkSmallIcon;
        obj.action = function action() {
          return closure_1_4((arg0) => !arg0);
        };
        items = [obj];
        let obj2 = { label: null, action: null };
        const intl2 = util.intl;
        obj2.label = intl2.string(util.t["1WjMbC"]);
        obj2.action = function action() {
          if (null == obj.isSuspiciousDownload(closure_1_0)) {
            fileName(dependencyMap[12]).openURL(closure_1_0);
            const obj3 = fileName(dependencyMap[12]);
          } else {
            fileName(dependencyMap[11]).show(closure_1_0);
            const obj2 = fileName(dependencyMap[11]);
          }
          obj = url(dependencyMap[10]);
        };
        items[1] = obj2;
        return items;
      }, items);
      const items1 = [fileName, memo, tmp.container, url, first];
      const memo1 = noop.useMemo(() => {
        let obj = {};
        const obj2 = {
          title: fileName,
          headerLeft: NavigatorHeader.getHeaderCloseButton(closeModal),
          headerRight() {
            return jsx(url(container[21]).ContextMenu, {
              items,
              children(ref) {
                const merged = Object.assign(ref, Object.assign({ ref: 0 }));
                const obj = { IconComponent: url(9180).MoreHorizontalIcon, accessibilityLabel: null, ref: null };
                const intl = url(1126).intl;
                obj.accessibilityLabel = intl.string(url(1126).t.PdRCRg);
                obj.ref = ref.ref;
                const merged1 = Object.assign(merged);
                return closure_1_9(url(7079).HeaderActionButton, obj);
              },
            });
          },
          render() {
            const obj = { style: container.container, children: <closure_2_13 url={url} wordWrap={wordWrap} /> };
            return (
              <closure_2_8 style={container.container}>
                <closure_2_13 url={url} wordWrap={wordWrap} />
              </closure_2_8>
            );
          },
        };
        obj[constants.PREVIEW] = obj2;
        return obj;
      }, items1);
      return jsx(url(11213).Modal, { screens: memo1, initialRouteName: constants.PREVIEW });
    };
